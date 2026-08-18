import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const songs = [
  {
    uri: 'spotify:track:1UTm2IATfGWWIbTC9sAxi2',
  },
  {
    uri: 'spotify:track:3ym8ajVmKm6Fybgov3WBI5',
  },
  {
    uri: 'spotify:track:2WEgOHRhsCMNiV4qcWNxAX',
  },
  {
    uri: 'spotify:track:1MpQyTgfVMpUOnwKMTSMzu',
  },
  {
    uri: 'spotify:track:4vIhvFLrnDD9fEjpjWs0Ky',
  },
  {
    uri: 'spotify:track:3xse9bBOH5VJHjgljFn7xx',
  },
  {
    uri: 'spotify:track:0v8J17a6cO0wWp7z731GTd',
  },
  {
    uri: 'spotify:track:5bJ1DrEM4hNCafcDd1oxHx',
  },
  {
    uri: 'spotify:track:6ZAMpBPL711YvDxFcVplWn',
  },
  {
    uri: 'spotify:track:7yB6GF5kgPEoeGE4EAWiJU',
  },
  {
    uri: 'spotify:track:5eZCOFEofhEA9sKvr6OxYB',
  },
  {
    uri: 'spotify:track:2sJnzWuQqICRXgnj7YPx7Z',
  },
  {
    uri: 'spotify:track:0fujQqs6ybS47td4sEwPcA',
  },
  {
    uri: 'spotify:track:0Y4mKsTiRbldLocloTolM1',
  },
];

type SpotifyPlaybackEvent = {
  data: {
    isPaused: boolean;
  };
};

type SpotifyEmbedController = {
  addListener: (event: string, listener: (event: SpotifyPlaybackEvent) => void) => void;
  loadEntity: (spotifyUriOrUrl: string) => void;
  play: () => void;
  pause: () => void;
  resume: () => void;
  destroy: () => void;
};

type SpotifyIFrameAPI = {
  createController: (
    element: HTMLElement,
    options: { uri: string; width: string; height: number },
    callback: (controller: SpotifyEmbedController) => void,
  ) => void;
};

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: SpotifyIFrameAPI) => void;
  }
}

let spotifyApi: SpotifyIFrameAPI | null = null;
let spotifyApiPromise: Promise<SpotifyIFrameAPI> | null = null;

const loadSpotifyApi = () => {
  if (spotifyApi) return Promise.resolve(spotifyApi);
  if (spotifyApiPromise) return spotifyApiPromise;

  spotifyApiPromise = new Promise((resolve) => {
    window.onSpotifyIframeApiReady = (api) => {
      spotifyApi = api;
      resolve(api);
    };

    if (!document.querySelector('script[data-spotify-iframe-api]')) {
      const script = document.createElement('script');
      script.src = 'https://open.spotify.com/embed/iframe-api/v1';
      script.async = true;
      script.dataset.spotifyIframeApi = 'true';
      document.body.appendChild(script);
    }
  });

  return spotifyApiPromise;
};

const SpotifyLogo = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="currentColor" />
    <path
      d="M6.1 9.15c3.9-1.12 8.5-.9 11.82.62M6.75 12.23c3.3-.9 7.35-.73 10.4.53M7.35 15.1c2.75-.7 6.15-.58 8.85.42"
      fill="none"
      stroke="#0a0a0a"
      strokeLinecap="round"
      strokeWidth="1.55"
    />
  </svg>
);

const SpotifyMiniPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSongIndex, setActiveSongIndex] = useState(0);
  const playerRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<SpotifyEmbedController | null>(null);
  const songRailRef = useRef<HTMLDivElement>(null);
  const autoplayRequestedRef = useRef(false);

  useEffect(() => {
    let controller: SpotifyEmbedController | null = null;
    let isCancelled = false;

    loadSpotifyApi().then((api) => {
      if (isCancelled || !playerRef.current) return;

      api.createController(
        playerRef.current,
        {
          uri: 'spotify:track:3ym8ajVmKm6Fybgov3WBI5',
          width: '100%',
          height: 152,
        },
        (createdController) => {
          if (isCancelled) {
            createdController.destroy();
            return;
          }

          controller = createdController;
          controllerRef.current = createdController;
          if (autoplayRequestedRef.current) {
            createdController.resume();
          }
          createdController.addListener('playback_update', (event) => {
            setIsPlaying(!event.data.isPaused);
          });
        },
      );
    });

    return () => {
      isCancelled = true;
      controller?.destroy();
      controllerRef.current = null;
    };
  }, []);

  const requestPlayback = () => {
    autoplayRequestedRef.current = true;
    setIsOpen(true);
    controllerRef.current?.resume();
  };

  const pausePlayback = () => {
    autoplayRequestedRef.current = false;
    controllerRef.current?.pause();
    setIsPlaying(false);
    setIsOpen(false);
  };

  const selectSong = (index: number) => {
    const nextIndex = (index + songs.length) % songs.length;
    setActiveSongIndex(nextIndex);
    setIsPlaying(false);
    autoplayRequestedRef.current = true;
    controllerRef.current?.loadEntity(songs[nextIndex].uri);
    controllerRef.current?.play();
    window.setTimeout(() => controllerRef.current?.play(), 350);
    songRailRef.current?.children[nextIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <div
      className="relative z-40"
      onMouseEnter={requestPlayback}
      onMouseLeave={pausePlayback}
    >
      <button
        type="button"
        onClick={requestPlayback}
        onFocus={requestPlayback}
        className={`spotify-trigger relative flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 ${
          isOpen
            ? 'border-[#1ed760] bg-[#1ed760] text-black'
            : 'border-neutral-700 bg-neutral-900/90 text-[#1ed760] hover:border-[#1ed760] hover:bg-[#1ed760] hover:text-black'
        }`}
        aria-label="Toggle Spotify player"
        aria-expanded={isOpen}
        title="Play on Spotify"
      >
        <span className={`spotify-vibration spotify-vibration--left ${isPlaying ? 'is-playing' : ''}`}>
          <span />
          <span />
        </span>
        <SpotifyLogo />
        <span className={`spotify-vibration spotify-vibration--right ${isPlaying ? 'is-playing' : ''}`}>
          <span />
          <span />
        </span>
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 pt-3 transition duration-200 ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden rounded-2xl border border-neutral-700 bg-black p-2 shadow-2xl shadow-black/70">
          <div className="px-2 pb-3 pt-1">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                songs i&apos;m listening to
              </p>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => selectSong(activeSongIndex - 1)}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition hover:border-white hover:text-white"
                  aria-label="Previous song"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => selectSong(activeSongIndex + 1)}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition hover:border-white hover:text-white"
                  aria-label="Next song"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div
              ref={songRailRef}
              className="spotify-song-scroll flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2"
              aria-label="Spotify song selector"
            >
              {songs.map((song, index) => (
                <button
                  key={song.uri}
                  type="button"
                  onClick={() => selectSong(index)}
                  className={`min-w-[12rem] snap-center rounded-xl border px-4 py-3 text-left transition ${
                    activeSongIndex === index
                      ? 'border-[#1ed760]/70 bg-[#1ed760]/10 text-white'
                      : 'border-neutral-800 bg-neutral-950 text-neutral-500 hover:border-neutral-600 hover:text-neutral-200'
                  }`}
                  aria-pressed={activeSongIndex === index}
                >
                  <span className="block text-[9px] uppercase tracking-[0.16em] text-neutral-600">
                    Spotify track
                  </span>
                  <span className="mt-1 block text-xs font-semibold">
                    Song {String(index + 1).padStart(2, '0')}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div ref={playerRef} className="min-h-[152px] w-full" />
        </div>
      </div>
    </div>
  );
};

export default SpotifyMiniPlayer;

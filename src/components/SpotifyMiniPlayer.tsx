import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Pause, Play } from 'lucide-react';
import useGlidingCarousel from '../hooks/useGlidingCarousel';

const songs = [
  {
    uri: 'spotify:track:1UTm2IATfGWWIbTC9sAxi2',
    title: 'Blurred - Twitch Tapes',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025907177f99b29c5e497857ae',
  },
  {
    uri: 'spotify:track:3ym8ajVmKm6Fybgov3WBI5',
    title: 'Let Me Go',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027c68face1dc58127f3a7b1cc',
  },
  {
    uri: 'spotify:track:2WEgOHRhsCMNiV4qcWNxAX',
    title: 'Gave You My All',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b99bdc5b4126a09864f70aa9',
  },
  {
    uri: 'spotify:track:1MpQyTgfVMpUOnwKMTSMzu',
    title: "Keep Doing What You're Doing",
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028d586fabbd18826b7f4c936e',
  },
  {
    uri: 'spotify:track:4vIhvFLrnDD9fEjpjWs0Ky',
    title: 'MTFU',
    cover: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e4f13cd87b3b1ead6735a520',
  },
  {
    uri: 'spotify:track:3xse9bBOH5VJHjgljFn7xx',
    title: 'Relax with Me',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020a4fd8aa50652821b1a2a054',
  },
  {
    uri: 'spotify:track:0v8J17a6cO0wWp7z731GTd',
    title: 'One More Love Song',
    cover: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e029f1b21f21b13ff2d3e891f6b',
  },
  {
    uri: 'spotify:track:5bJ1DrEM4hNCafcDd1oxHx',
    title: 'Self Care',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02175c577a61aa13d4fb4b6534',
  },
  {
    uri: 'spotify:track:6ZAMpBPL711YvDxFcVplWn',
    title: 'Go - Lost Tapes 2022',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023ce3d1b24b2cc23f8670fd47',
  },
  {
    uri: 'spotify:track:7yB6GF5kgPEoeGE4EAWiJU',
    title: 'Blue Laces 2',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ac271e5d670e92c42bf99237',
  },
  {
    uri: 'spotify:track:5eZCOFEofhEA9sKvr6OxYB',
    title: 'Gta (feat. LUCKI & Veeze)',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b90a19c9b80d0cc1095848b5',
  },
  {
    uri: 'spotify:track:2sJnzWuQqICRXgnj7YPx7Z',
    title: 'Ashanti',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d92060cbf374f1aae3f852a7',
  },
  {
    uri: 'spotify:track:0fujQqs6ybS47td4sEwPcA',
    title: 'Power',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028c7fed0f8b009d4353e0d810',
  },
  {
    uri: 'spotify:track:0Y4mKsTiRbldLocloTolM1',
    title: 'Los Pollos Hermanos',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029752c27ecbffe33908e304e9',
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
  const songRailRef = useGlidingCarousel(11, isOpen);
  const autoplayRequestedRef = useRef(false);
  const playbackRetryRef = useRef<number | null>(null);

  useEffect(() => {
    let controller: SpotifyEmbedController | null = null;
    let isCancelled = false;

    loadSpotifyApi().then((api) => {
      if (isCancelled || !playerRef.current) return;

      api.createController(
        playerRef.current,
        {
          uri: songs[0].uri,
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
            if (!autoplayRequestedRef.current && !event.data.isPaused) {
              createdController.pause();
              setIsPlaying(false);
              return;
            }

            setIsPlaying(autoplayRequestedRef.current && !event.data.isPaused);
          });
        },
      );
    });

    return () => {
      isCancelled = true;
      if (playbackRetryRef.current !== null) {
        window.clearTimeout(playbackRetryRef.current);
      }
      controller?.destroy();
      controllerRef.current = null;
    };
  }, []);

  const requestPlayback = () => {
    autoplayRequestedRef.current = true;
    if (playbackRetryRef.current !== null) {
      window.clearTimeout(playbackRetryRef.current);
      playbackRetryRef.current = null;
    }
    setIsOpen(true);
    controllerRef.current?.resume();
  };

  const pausePlayback = () => {
    autoplayRequestedRef.current = false;
    if (playbackRetryRef.current !== null) {
      window.clearTimeout(playbackRetryRef.current);
      playbackRetryRef.current = null;
    }
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
    if (playbackRetryRef.current !== null) {
      window.clearTimeout(playbackRetryRef.current);
    }
    playbackRetryRef.current = window.setTimeout(() => {
      playbackRetryRef.current = null;
      if (autoplayRequestedRef.current) {
        controllerRef.current?.play();
      }
    }, 350);
    songRailRef.current?.children[nextIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const togglePlayback = () => {
    if (isPlaying) {
      autoplayRequestedRef.current = false;
      controllerRef.current?.pause();
      setIsPlaying(false);
      return;
    }

    requestPlayback();
  };

  const currentSong = songs[activeSongIndex];
  const currentSongUrl = `https://open.spotify.com/track/${currentSong.uri.split(':').at(-1)}`;

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
        <div className="relative overflow-hidden rounded-2xl border border-neutral-700 bg-black p-3 shadow-2xl shadow-black/70">
          <div className="px-2 pb-2 pt-1">
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
              className="experience-scroll spotify-song-scroll flex gap-2 overflow-x-auto pb-4"
              aria-label="Spotify song selector"
            >
              {[...songs, ...songs].map((song, displayIndex) => {
                const index = displayIndex % songs.length;
                const isDuplicate = displayIndex >= songs.length;

                return (
                <button
                  key={`${song.uri}-${isDuplicate ? 'duplicate' : 'original'}`}
                  type="button"
                  onClick={() => selectSong(index)}
                  className={`flex min-w-[13rem] items-center gap-3 rounded-xl border p-2.5 text-left transition ${
                    activeSongIndex === index
                      ? 'border-[#1ed760]/70 bg-[#1ed760]/10 text-white'
                      : 'border-neutral-800 bg-neutral-950 text-neutral-500 hover:border-neutral-600 hover:text-neutral-200'
                  }`}
                  aria-pressed={activeSongIndex === index}
                  aria-hidden={isDuplicate || undefined}
                  tabIndex={isDuplicate ? -1 : 0}
                >
                  <img
                    src={song.cover}
                    alt=""
                    className="h-10 w-10 shrink-0 rounded-lg object-cover"
                    loading="lazy"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[9px] uppercase tracking-[0.16em] text-neutral-600">
                      {String(index + 1).padStart(2, '0')} · Spotify
                    </span>
                    <span className="mt-1 block truncate text-xs font-semibold">
                      {song.title}
                    </span>
                  </span>
                </button>
                );
              })}
            </div>
          </div>

          <div className="mt-2 flex min-h-[94px] items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-950/90 p-3">
            <img
              src={currentSong.cover}
              alt={`${currentSong.title} cover`}
              className="h-16 w-16 shrink-0 rounded-xl object-cover shadow-lg shadow-black/40"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">{currentSong.title}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-neutral-600">
                Playing with Spotify
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={togglePlayback}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1ed760] text-black transition hover:scale-105 hover:bg-[#35e875]"
                aria-label={isPlaying ? 'Pause song' : 'Play song'}
              >
                {isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="ml-0.5 h-4 w-4 fill-current" />}
              </button>
              <a
                href={currentSongUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 text-neutral-500 transition hover:border-white hover:text-white"
                aria-label="Open song in Spotify"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-0 h-px w-px overflow-hidden opacity-0"
            aria-hidden="true"
          >
            <div ref={playerRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyMiniPlayer;

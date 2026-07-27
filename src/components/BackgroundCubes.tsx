type BackgroundCubesProps = {
  screen: 'home' | 'experiences' | 'projects';
};

const cubeFaces = ['front', 'back', 'right', 'left', 'top', 'bottom'];

const BackgroundCubes = ({ screen }: BackgroundCubesProps) => {
  const cubes = [
    { position: 'cube-decoration--top-left', size: 'cube-decoration--large' },
    { position: 'cube-decoration--middle-right', size: 'cube-decoration--medium' },
    { position: 'cube-decoration--bottom-left', size: 'cube-decoration--small' },
    { position: 'cube-decoration--bottom-right', size: 'cube-decoration--tiny' },
  ];

  return (
    <div
      className={`background-cubes background-cubes--${screen}`}
      aria-hidden="true"
    >
      {cubes.map((cube, cubeIndex) => (
        <div
          className={`cube-decoration ${cube.position} ${cube.size}`}
          key={`${screen}-${cube.position}`}
        >
          <div className="cube-decoration__body">
            {cubeFaces.map((face) => (
              <div
                className={`cube-decoration__face cube-decoration__face--${face}`}
                key={`${cubeIndex}-${face}`}
              >
                {Array.from({ length: 9 }).map((_, tileIndex) => (
                  <span key={tileIndex} />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundCubes;

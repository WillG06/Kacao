export function FilmGrain() {
  return (
    <>
      <svg
        aria-hidden
        className="pointer-events-none fixed -z-50 h-0 w-0 opacity-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="kacao-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0" />
        </filter>
      </svg>
      <div aria-hidden className="film-grain" />
    </>
  );
}
'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  googleUrl: string;
  appleUrl: string;
};

export default function ItineraryChooser({ googleUrl, appleUrl }: Props) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return undefined;
    const handleClick = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  return (
    <div className="map-chooser" ref={wrapperRef}>
      <button
        type="button"
        className="link-button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="map-chooser-menu"
      >
        Itinéraires
      </button>
      {open && (
        <div id="map-chooser-menu" className="map-chooser-menu" role="menu">
          <p className="map-chooser-title">Choisissez votre app</p>
          <a href={googleUrl} target="_blank" rel="noreferrer" role="menuitem">
            Ouvrir dans Google Maps
          </a>
          <a href={appleUrl} target="_blank" rel="noreferrer" role="menuitem">
            Ouvrir dans Plans ()
          </a>
        </div>
      )}
    </div>
  );
}

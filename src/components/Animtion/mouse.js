import { useRef, useEffect, useCallback } from "react"
import { useNormalizedMouseRef } from "../../hooks";


function Cursor() {
  const ref = useRef();
  const handleMouseUpdate = useCallback((mousePos) => {
    if (ref.current) {
      const aspect = window.innerWidth / window.innerHeight;
      ref.current.style.transform = `translate3d(${
        ((mousePos[0] + aspect) / aspect) * 0.5 * window.innerWidth
      }px, ${(1 - (mousePos[1] + 1) * 0.5) * window.innerHeight}px, 0)`;
    }
  }, []);
  useNormalizedMouseRef({
    smoothing: 0.05,
    onChange: handleMouseUpdate
  });

  return <div ref={ref} className="cursor" />;
}

function Cursor_2() {
  const ref = useRef();
  const handleMouseUpdate = useCallback((mousePos) => {
    if (ref.current) {
      const aspect = window.innerWidth / window.innerHeight;
      ref.current.style.transform = `translate3d(${
        ((mousePos[0] + aspect) / aspect) * 0.5 * window.innerWidth
      }px, ${(1 - (mousePos[1] + 1) * 0.5) * window.innerHeight}px, 0)`;
    }
  }, []);
  useNormalizedMouseRef({
    smoothing: 1,
    onChange: handleMouseUpdate
  });

  return <div ref={ref} className="cursor_2" />;
}

export default {Cursor, Cursor_2}
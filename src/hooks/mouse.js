import { useEffect, useRef } from "react";

import { lerp } from "../utils";

const noop = () => {};
export function useNormalizedMouseRef({ smoothing, onChange = noop }) {
  const normlizedMousePos = useRef([0, 0]);
  const smoothedMousePos = useRef([0, 0]);
  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const windowAspect = windowWidth / windowHeight;
      normlizedMousePos.current = [
        (clientX / window.innerWidth - 0.5) * 2 * windowAspect,
        (-clientY / window.innerHeight + 0.5) * 2
      ];
    };
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      document.removeEventListener("mousemove", handleMouseMove, {
        passive: true
      });
    };
  }, []);

  useEffect(() => {
    let id;
    const updateMousePos = () => {
      smoothedMousePos.current = [
        lerp(
          smoothedMousePos.current[0],
          normlizedMousePos.current[0],
          smoothing
        ),
        lerp(
          smoothedMousePos.current[1],
          normlizedMousePos.current[1],
          smoothing
        )
      ];
      onChange(smoothedMousePos.current);
      id = requestAnimationFrame(updateMousePos);
    };
    updateMousePos();
    return () => {
      cancelAnimationFrame(id);
    };
  }, [smoothing, onChange]);

  return smoothedMousePos;
}

import { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useMeasure: () => (
  | {
      left: number;
      top: number;
      width: number;
      height: number;
    }
  | {
      ref: React.MutableRefObject<any>;
    }
)[] = () => {
  const ref = useRef<any>();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)));
  useEffect(() => {
    ro.observe(ref.current);
    return () => {
      ro.disconnect();
    };
  }, [ro]);
  return [{ ref }, bounds];
};

export { useMeasure };

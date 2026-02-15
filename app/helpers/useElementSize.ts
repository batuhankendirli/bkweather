import { RefObject, useEffect, useState } from 'react';

type ElementSize = {
  width: number;
  height: number;
};

const useElementSize = <T extends HTMLElement>(
  ref: RefObject<T | null>,
): ElementSize => {
  const [size, setSize] = useState<ElementSize>({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const updateSize = () => {
      setSize({
        width: element.clientWidth,
        height: element.clientHeight,
      });
    };

    updateSize();

    const observer = new ResizeObserver(() => {
      updateSize();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return size;
};

export default useElementSize;

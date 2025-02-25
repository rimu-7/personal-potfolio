import { useState, useEffect } from "react";

const useDelayedRender = (delay = 300) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return show;
};

export default useDelayedRender;

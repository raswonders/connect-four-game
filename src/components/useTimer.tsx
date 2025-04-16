import { useEffect, useRef, useState } from "react";
const TURN_DURATION = 30;

export function useTimer(callback: () => void) {
  const [secondsLeft, setSecondsLeft] = useState<number>(TURN_DURATION);
  const timeoutRef = useRef(0);

  const timer = {
    start() {
      timeoutRef.current = setTimeout(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    },

    stop() {
      clearTimeout(timeoutRef.current);
      this.reset();
    },

    restart() {
      this.stop();
      this.start();
    },

    reset() {
      setSecondsLeft(TURN_DURATION);
    },

    pause() {
      clearTimeout(timeoutRef.current);
    },

    resume() {
      this.start();
    },

    get secondsLeft() {
      return secondsLeft;
    },
  };

  useEffect(() => {
    if (secondsLeft <= 0) {
      callback();
      timer.reset();
      return;
    }
    timer.start();

    return () => clearTimeout(timeoutRef.current);
  }, [secondsLeft]);

  return timer;
}

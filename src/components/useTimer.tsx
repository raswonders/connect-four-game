import { useEffect, useRef } from "react";
const TIMEOUT = 30000;

export function useTimer(callback: () => any) {
  const intervalRef = useRef<number>(undefined);

  useEffect(() => {
    timer.start();
    console.log(`Timer started`);
  }, []);

  const timer = {
    start() {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          callback();
        }, TIMEOUT);
      }
    },

    stop() {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    },

    restart() {
      console.log("Timer restarted");
      this.stop();
      this.start();
    },
  };

  return timer;
}

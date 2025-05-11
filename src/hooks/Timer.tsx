// useTimer.ts
import { useState, useRef, useEffect } from "react";

function formatTime(seconds: number) {
  const hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return { hrs, mins, secs };
}

export function useTimer(initialSeconds: number) {
  const [remaining, setRemaining] = useState(initialSeconds);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (intervalRef.current || remaining === 0) return;
    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          return 0;
        }
        return prev - 1;
      });
      setElapsed((prev) => prev + 1);
    }, 1000);
  };

  const pause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    setRemaining(initialSeconds);
    setElapsed(0);
  };

  const percent = () => {
    const total = initialSeconds;
    return total > 0 ? (elapsed / total) * 100 : 0;
  };

  const format = () => ({
    remaining: formatTime(remaining),
    elapsed: formatTime(elapsed),
  });

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    remaining, //remaining seconds
    elapsed, //elapsed seconds
    start, //start the timer
    pause, //pause the timer
    reset, //reset the timer
    percent, // returns the timer percent
    format, //returns the formatted time
  };
}

import { useState } from 'react';

/**
 * Manages the history state of components.
 * @param {Array} initial 
 * @returns An object with the mode history, transition function, and back function.
 */

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    setHistory(prev => 
      replace ?
      [...prev.slice(0, -1), mode] :
      [...prev, mode]  
    );
  }

  function back() {
    setHistory(prev => {
      if (prev.length === 1) return prev;
      return prev.slice(0, -1);
    });
  }
  return { mode: history[history.length - 1], transition, back };
}
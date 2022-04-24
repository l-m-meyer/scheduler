import React, { useState, useEffect } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    setMode(mode);
    if (replace) return setHistory([...history.slice(0, -1), mode]);
    setHistory([...history, mode]);
  }

  function back() {
    if (history.length === 1) return;
    history.pop();
    setMode(history[history.length - 1]);
  }

  return { mode, transition, back };
}
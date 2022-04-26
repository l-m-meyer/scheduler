// import React, { useState } from 'react';

// export default function useVisualMode(initial) {
//   const [mode, setMode] = useState(initial);
//   const [history, setHistory] = useState([initial]);

//   function transition(mode, replace = false) {
//     console.log('mode', mode);
//     setMode(mode);
//     if (replace) {
//       setHistory([...history.slice(0, -1), mode]);
//     } else {
//       setHistory([...history, mode]);
//     }
//   }

//   function back() {
//     if (history.length === 1) return;
//     history.pop();
//     setMode(history[history.length - 1]);
//   }

//   return { mode, transition, back };
// }


import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);
  
  function transition(mode, replace) {
    setHistory(prev =>
      replace ? [...prev.slice(0, prev.length - 1), mode] : [...prev, mode]
    );
  }
  
  function back() {
    setHistory(prev => {
      if (prev.length < 2) return prev;
      return prev.slice(0, prev.length - 1)
    });
  }
  
  return { mode: history[history.length - 1], transition, back };
}
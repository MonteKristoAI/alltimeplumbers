"use client";

import { useEffect, useState } from "react";

type Listener = (open: boolean) => void;

let listeners: Listener[] = [];
let currentState = false;

export function setMobileMenuOpenGlobal(open: boolean) {
  if (currentState === open) return;
  currentState = open;
  listeners.forEach((l) => l(open));
}

export function useMobileMenuOpen() {
  const [open, setOpen] = useState(currentState);
  useEffect(() => {
    listeners.push(setOpen);
    return () => {
      listeners = listeners.filter((l) => l !== setOpen);
    };
  }, []);
  return open;
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const THRESHOLD_PX = 120;

/**
 * Keeps a scroll container pinned to the bottom as content grows, unless the reader
 * has scrolled upward. `scrollToBottom(true)` forces the pin (e.g. after the user sends).
 */
export function useStickToBottom<T extends HTMLElement>(deps: readonly unknown[]) {
  const ref = useRef<T | null>(null);
  const pinned = useRef(true);
  const [atBottom, setAtBottom] = useState(true);

  const scrollToBottom = useCallback((force = false) => {
    const el = ref.current;
    if (!el) return;
    if (force) pinned.current = true;
    if (pinned.current) {
      // Instant, not smooth: intermediate scroll events from an animation would unpin the view.
      el.scrollTo({ top: el.scrollHeight, behavior: "auto" });
    }
  }, []);

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const near = el.scrollHeight - el.scrollTop - el.clientHeight < THRESHOLD_PX;
    pinned.current = near;
    setAtBottom(near);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => scrollToBottom(), [scrollToBottom, ...deps]);

  return { ref, onScroll, atBottom, scrollToBottom };
}

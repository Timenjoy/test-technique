"use client";
import React, { HTMLAttributes } from "react";
import Animations, { EmojiAnimation, EmojiFunction } from "./fn";
import { EmojiEvent } from "./emoji.enum";
import { cn } from "@/lib/utils";

export interface EmojiProps {
  content: React.ReactNode;
  loop?: boolean;
  event?: EmojiEvent | EmojiEvent[];
  animation: EmojiAnimation;
  className?: string;
  playOnRender?: boolean;
  delay?: number;
  speed?: number;
  amplitude?: number;
};

export default function Emoji({
  content,
  className,
  animation,
  event: _event,
  loop,
  playOnRender,
  delay = 0,
  speed = 1,
  amplitude = 1,
}: EmojiProps) {
  const events = Array.isArray(_event) ? _event : _event ? [_event] : [];
  const animationFunction = Animations[animation];
  const animationRef = React.useRef<ReturnType<EmojiFunction> | null>(null);
  const ref = React.useRef<HTMLSpanElement>(null);
  const [interactions, setInteractions] = React.useState<
    HTMLAttributes<HTMLSpanElement>
  >({});
  React.useEffect(() => {
    if (animationRef.current) {
      animationRef.current.cancel();
    }
    if (ref.current) {
      const selectedAnimation = animationFunction(ref.current, {
        speed,
        amplitude,
      });
      animationRef.current = selectedAnimation;
      const playMode = loop ? "loop" : "play";
      if (events.length) {
        const newInteractions: typeof interactions = {};
        for (const event of events)
          if (event === "whileHover") Object.assign(newInteractions, {
            onMouseEnter: () => selectedAnimation[playMode](),
            onMouseLeave: () => selectedAnimation.cancel(),
          });
          else Object.assign(newInteractions, {
            [event]: () => selectedAnimation[playMode](),
            style: { cursor: "pointer" },
          });

        setInteractions(newInteractions);
        if (playOnRender) setTimeout(() => selectedAnimation[playMode](), delay);
      } else {
        setTimeout(() => selectedAnimation[playMode](), delay);
        setInteractions({});
      }
    }
  }, [
    events.sort().join("_"),
    loop,
    animationFunction,
    playOnRender,
    ref,
    speed,
    amplitude,
    delay,
  ]);

  return (
    <span {...interactions} className={cn('inline-block cursor-default', className)} ref={ref}>
      {content}
    </span>
  );
};


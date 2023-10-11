import wave from "./wave";
import float from "./float";
import slide from "./slide";
import shout from "./shout";
import rotate from "./rotate";

export type EmojiFunctionOptions = {
  speed?: number;
  amplitude?: number;
};
export type EmojiFunction = (
  element: HTMLElement,
  options?: EmojiFunctionOptions
) => {
  play: () => void;
  loop: () => void;
  cancel: () => void;
};

export const enum EmojiAnimation {
  wave = "wave",
  float = "float",
  slide = "slide",
  shout = "shout",
  rotate = "rotate",
}

const Animations: Record<EmojiAnimation, EmojiFunction> = {
  [EmojiAnimation.wave]: wave,
  [EmojiAnimation.float]: float,
  [EmojiAnimation.slide]: slide,
  [EmojiAnimation.shout]: shout,
  [EmojiAnimation.rotate]: rotate,
};

export default Animations;

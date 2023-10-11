import path from "path";
import { z } from "zod";
import { statSync } from "fs";

export function isValidDirectory(pathToCheck: string) {
  if (pathToCheck.endsWith("/")) return false;
  return (
    statSync(pathToCheck, { throwIfNoEntry: false })?.isFile() ??
    !!statSync(path.dirname(pathToCheck), { throwIfNoEntry: false })
  );
}

export function isValidId(id: string) {
  z.string().uuid().parse(id);
  return true;
}

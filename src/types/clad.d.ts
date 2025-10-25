// src/types/clsx.d.ts

declare module "clsx" {
  export type ClassValue =
    | string
    | number
    | null
    | undefined
    | { [key: string]: boolean }
    | ClassValue[];

  export function clsx(...inputs: ClassValue[]): string;
}

// src/types/clsx.d.ts

declare module "clsx" {
  export type ClassValue = string | number | null | false | undefined | ClassDictionary | ClassArray;
  export interface ClassDictionary {
    [id: string]: any;
  }
  export interface ClassArray extends Array<ClassValue> {}
  export function clsx(...inputs: ClassValue[]): string;
  export default clsx;
}

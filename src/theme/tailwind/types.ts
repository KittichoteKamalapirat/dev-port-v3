import type { Config } from "tailwindcss";

export type TailwindConfig = Config;
export type TailwindThemeConfig = NonNullable<TailwindConfig["theme"]>;

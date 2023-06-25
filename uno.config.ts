import {
  defineConfig,
  presetWebFonts,
  presetWind,
  presetAttributify,
} from "unocss";
import presetClark from "./presetClark";

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: "google",
      fonts: { sans: "Manrope:500,700" },
    }),
    presetAttributify(),
    presetClark(),
  ],
  layers: {
    presetClark: 3,
  },
  preflights: [
    {
      getCSS: () => ":root { font-size: 62.5%; font-family: 'Manrope'; }",
    },
  ],
  theme: {
    colors: {
      "east-bay": "#48556A",
      "slate-grey": "#6E8098",
      "alice-blue": "#ECF2F8",
      "rock-blue": "#9DAEC2",
    },
  },
  shortcuts: {},
  rules: [
    [
      "shadow-card",
      { "box-shadow": "0px 40px 40px -10px rgba(201, 213, 225, 0.50)" },
    ],
    [
      "shadow-popover",
      { "box-shadow": "0px 10px 10px 0px rgba(201, 213, 225, 0.50)" },
    ],
    [
      "rounded-image",
      { "border-top-left-radius": "1rem", "border-bottom-left-radius": "1rem" },
    ],
    ["grid-cols-card", { "grid-template-columns": "28.5rem 1fr" }],
  ],
});

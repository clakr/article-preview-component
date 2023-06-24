import { defineConfig, presetWebFonts, presetWind, presetAttributify } from "unocss";
import presetClark from './presetClark';

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: "google",
      fonts: {}
    }),
    presetAttributify(),
    presetClark()
  ],
  layers: {
    presetClark: 3,
  },
  preflights: [
    {
      getCSS: () =>
        ":root { font-size: 62.5%; }",
    },
  ],
  theme: {},
  shortcuts: {},
  rules: [],
})
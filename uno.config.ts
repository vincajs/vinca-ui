import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetTheme from 'unocss-preset-theme'
import themes from './src/runtime/themes'

export default defineConfig({
  theme: themes.default,
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
    presetTheme({
      theme: {
        light: themes.light,
        dark: themes.dark,
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        '../src/runtime/presets/**/*.{js,ts}',
      ],
    },
  },
})

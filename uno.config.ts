import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetAnimations from 'unocss-preset-animations'
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
        dark: themes.dark,
      },
    }),
    // presetAnimations(),
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
        '../src/runtime/components/**/*.{js,ts}',
      ],
    },
  },
})

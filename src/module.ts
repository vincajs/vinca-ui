import {
  addComponentsDir,
  createResolver,
  defineNuxtModule,
  installModule,
} from '@nuxt/kit'

import { name, version } from '../package.json'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Prefix for all the imported component
   */
  prefix?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'violet',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: 'V',
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const runtimeDir = resolve('./runtime')
    nuxt.options.css.push('@unocss/reset/tailwind-compat.css')
    // nuxt.options.css.push(resolve(runtimeDir, 'ui.css'))

    await installModule('nuxt-icon')
    await installModule('@nuxtjs/color-mode', { classSuffix: '' })
    await installModule('@unocss/nuxt')
    await installModule('@vueuse/motion/nuxt')

    await addComponentsDir({
      path: resolve(runtimeDir, 'components'),
      prefix: options.prefix,
      extensions: ['.vue'],
    })
  },
})

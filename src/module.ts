import {
  addComponentsDir,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'

import { name, version } from '../package.json'
import { log } from 'node:console'

declare module 'nuxt/schema' {
  interface AppConfigInput {
    vinca?: {
      preset?: {
        [key: string]: Function
      }
    }
  }
}

declare module 'nuxt/schema' {
  interface AppConfig {
    vinca?: {
      preset?: {
        [key: string]: Function
      }
    }
  }
}

export interface ModuleOptions {
  prefix?: string
  preset?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'vinca',
  },
  defaults: {
    prefix: 'V',
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    // nuxt.options.css.push(resolve(runtimeDir, 'ui.css'))

    await addComponentsDir({
      path: resolve(runtimeDir, 'components'),
      prefix: options.prefix,
      extensions: ['.vue'],
    })
  },
})

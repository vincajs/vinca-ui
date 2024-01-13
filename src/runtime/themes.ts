import { type colors, presetMini } from '@unocss/preset-mini'

const color = presetMini().theme?.colors as typeof colors

export default {
  default: {
    animation: {
      durations: {
        'accordion-down': '0.2s',
        'accordion-up': '0.2s',
        'collapsible-down': '0.2s',
        'collapsible-up': '0.2s',
      },
      keyframes: {
        'accordion-down': '{from{height:0}to{height:var(--radix-accordion-content-height)}}',
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      timingFns: {
        'accordion-down': 'ease-in-out',
        'accordion-up': 'ease-in-out',
        'collapsible-down': 'ease-in-out',
        'collapsible-up': 'ease-in-out',
      },
    },
    colors: {
      base: {
        DEFAULT: color.light[400],
        foreground: color.dark[400],
        ...color.light,
      },
      primary: {
        DEFAULT: color.sky[500],
        foreground: color.light[500],
      },
      secondary: {
        DEFAULT: color.cyan[500],
        foreground: color.light[500],
      },
      accent: color.fuchsia[500],
      info: color.sky[500],
      success: color.green[500],
      warning: color.amber[500],
      error: color.red[500],
    },
  },
  dark: {
    colors: {
      base: {
        DEFAULT: color.dark[400],
        foreground: color.light[400],
        ...color.dark,
      },
    },
  },
}

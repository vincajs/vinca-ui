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
        'accordion-up': '{from{height:var(--radix-accordion-content-height)}to{height:0}}',
        'collapsible-down': '{from{height:0}to{height:var(--radix-collapsible-content-height)}}',
        'collapsible-up': '{from{height:var(--radix-collapsible-content-height)}to{height:0}}',
      },
      timingFns: {
        'accordion-down': 'ease-in-out',
        'accordion-up': 'ease-in-out',
        'collapsible-down': 'ease-in-out',
        'collapsible-up': 'ease-in-out',
      },
    },
  },
  light: {
    colors: {
      default: {
        DEFAULT: color.light[400],
        foreground: color.dark[400],
        ...color.light,
      },
      primary: {
        DEFAULT: color.sky[400],
        foreground: color.light[400],
      },
      secondary: {
        DEFAULT: color.cyan[400],
        foreground: color.light[400],
      },
      info: {
        DEFAULT: color.sky[400],
        foreground: color.light[400],
      },
      success: {
        DEFAULT: color.green[400],
        foreground: color.light[400],
      },
      warning: {
        DEFAULT: color.amber[400],
        foreground: color.light[400],
      },
      error: {
        DEFAULT: color.red[400],
        foreground: color.light[400],
      },
    },
  },
  dark: {
    colors: {
      default: {
        DEFAULT: color.dark[400],
        foreground: color.light[400],
        ...color.dark,
      },
    },
  },
}

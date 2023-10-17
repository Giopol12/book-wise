import { createStitches } from '@stitches/react'

export const {
  config,
  css,
  globalCss,
  styled,
  getCssText,
  theme,
  createTheme,
  keyframes,
  prefix,
  reset,
} = createStitches({
  theme: {
    fonts: { default: 'Nunito, sans-serif' },
  },
})

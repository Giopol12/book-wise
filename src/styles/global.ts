import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray800',
    color: '$gray300',
  },

  'body, input, textarea, button': {
    fontFamily: 'Nunito',
    fontWeight: 400,
    outline: 'none',
  },
})

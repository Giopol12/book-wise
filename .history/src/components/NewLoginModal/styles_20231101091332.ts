import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

import * as AlertDialog from '@radix-ui/react-alert-dialog'
export const Overlay = styled(Dialog.Overlay, {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})
export const Content = styled(Dialog.Content, {})

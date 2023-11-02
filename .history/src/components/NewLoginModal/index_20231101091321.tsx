import * as Dialog from '@radix-ui/react-alert-dialog'
import { Content, Overlay } from './styles'

export function NewLoginModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content></Content>
    </Dialog.Portal>
  )
}

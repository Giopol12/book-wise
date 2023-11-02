import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Content, Overlay } from './styles'

export function NewLoginModal() {
  return (
    <AlertDialog.Portal>
      <Overlay />
      <Content></Content>
    </AlertDialog.Portal>
  )
}

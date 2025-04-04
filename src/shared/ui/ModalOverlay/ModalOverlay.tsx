import { ReactNode } from 'react'

import s from './ModalOverlay.module.scss'

export const ModalOverlay = ({
  children,
  showModal,
  setShowModal,
}: ModalOverlayProps) => {
  const handleOverlayClick = () => setShowModal(false)

  if (!showModal) return null;

  return (
    <div className={s.modalOverlay} onMouseUp={handleOverlayClick}>
      {children}
    </div>
  )
}

interface ModalOverlayProps {
  children: ReactNode
  showModal: boolean
  setShowModal: (show: boolean) => void
}

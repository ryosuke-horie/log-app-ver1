import React, { useCallback, useState } from 'react'

// スタイル定義
import {
  HeaderContainer,
  Logo,
  MenuIcon,
  CustomModal,
  CloseButton,
  CloseButtonContainer,
} from './HeaderStyles'

interface HeaderProps {
  onMenuClose: () => void
}

const Header: React.FC<HeaderProps> = ({ onMenuClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleOpenModal = useCallback(() => {
    setModalIsOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false)
    onMenuClose()
  }, [onMenuClose])

  return (
    <HeaderContainer>
      <Logo>MyLogApp Ver.1</Logo>
      <div>
        <MenuIcon role="button" onClick={handleOpenModal} />
        <CustomModal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
        >
          <h2>メニュー</h2>
          <div>Home</div>
          <div>お金関係</div>
          <CloseButtonContainer>
            <CloseButton onClick={handleCloseModal}>閉じる</CloseButton>
          </CloseButtonContainer>
        </CustomModal>
      </div>
    </HeaderContainer>
  )
}

export default Header

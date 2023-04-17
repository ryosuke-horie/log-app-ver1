import React, { useCallback, useState } from 'react'
import Button from '../../atoms/Button/'
import Text from '../../atoms/Text/'
import Logo from '../../atoms/Logo/'

// スタイル定義
import {
  HeaderContainer,
  MenuIcon,
  CustomModal,
  CloseButtonContainer,
} from './HeaderStyles'

export interface HeaderProps {
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
      <Logo />
      <div>
        <MenuIcon role="button" onClick={handleOpenModal} />
        <CustomModal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
        >
          <h2>メニュー</h2>
          <div>
            <Text>Home</Text>
          </div>
          <div>
            <Text>お金関係</Text>
          </div>
          <CloseButtonContainer>
            <Button onClick={handleCloseModal}>
              <Text>閉じる</Text>
            </Button>
          </CloseButtonContainer>
        </CustomModal>
      </div>
    </HeaderContainer>
  )
}

export default Header

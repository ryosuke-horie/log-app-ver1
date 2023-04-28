import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../atoms/Button/'
import Text from '../../atoms/Text/'
import Logo from '../../atoms/Logo/'
import MenuIcon from '../../atoms/MenuIcon/'
// スタイル定義
import {
  HeaderContainer,
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
            <Link to="/">支出管理</Link>{' '}
          </div>
          <div>
            <Link to="/income">収入管理</Link>
          </div>
          <div>
            <Link to="/weight">体重管理</Link>
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

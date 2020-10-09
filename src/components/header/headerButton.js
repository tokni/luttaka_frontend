import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import Menu from './menu'

const HeaderButton = ({ isAuthenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <ContainerStyle name="HeaderButton">
      <IconStyle onClick={() => setMenuOpen(!menuOpen)} isauthenticated={isAuthenticated ? `true` : `false`} icon={faBars} size="2x" />
      {menuOpen && <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />}
    </ContainerStyle>
  )
}

const slideInLeft = keyframes`
   from {
      right: -20px;

  }

  to {
      right: 20px;
  }
`;

const ContainerStyle = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
`

const IconStyle = styled(FontAwesomeIcon)`
  color: #74AB58;
  position: absolute;
  cursor: pointer;
    ${({ isauthenticated }) =>
   isauthenticated && css
      `
        animation: ${slideInLeft };
        animation-duration: 0.8s;
        animation-fill-mode: forwards;

  `}
`

export default HeaderButton;

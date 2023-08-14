import React, { useState } from 'react'
import { BsMoonFill, BsMoon } from 'react-icons/bs'
import { Styles } from './styles'
import { Container } from '../../GlobalStyle'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <Styles.BackGroundHeader>
      <Container>
        <Styles.Header>
          <Styles.Title>
            Where in the world?
          </Styles.Title>
          <Styles.Toggle 
          onClick={() => setDarkMode(!darkMode)}
          >
            { darkMode ? <BsMoon /> : <BsMoonFill />}
            <Styles.SchemeTitle>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Styles.SchemeTitle>
          </Styles.Toggle>
        </Styles.Header>
      </Container>
    </Styles.BackGroundHeader>
  )
}

export default Header
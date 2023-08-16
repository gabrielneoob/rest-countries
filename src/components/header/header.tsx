import React, { useState, useReducer } from 'react'
import { BsMoonFill, BsMoon } from 'react-icons/bs'
import { Styles } from './styles'
import { Container } from '../../GlobalStyle'
import { countryReducer, initialState } from '../../reducers/countryReducer'
import { countryContext } from '../../GlobalContext'

const Header = () => {
  // const [state, dispatch] = useReducer(countryReducer, initialState);
  const {state, toggleBg } = countryContext();
  return (
    <Styles.BackGroundHeader toggleBg={state.toggleBg}>
      <Container>
        <Styles.Header>
          <Styles.Title>
            Where in the world?
          </Styles.Title>
          <Styles.Toggle 
          onClick={toggleBg}
          >
            { state.toggleBg ? <BsMoon /> : <BsMoonFill />}
            <Styles.SchemeTitle>
              {state.toggleBg ? 'Light Mode' : 'Dark Mode'}
            </Styles.SchemeTitle>
          </Styles.Toggle>
        </Styles.Header>
      </Container>
    </Styles.BackGroundHeader>
  )
}

export default Header
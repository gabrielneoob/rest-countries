import React from 'react'
import { Styles } from './styles'

const CountryContainer = ({ children }: { children: React.ReactNode}) => {
  return (
    <Styles.Container>
      {children}
    </Styles.Container>
  )
}

export default CountryContainer
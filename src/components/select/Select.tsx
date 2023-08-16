import React from 'react'
import { Styles } from './style'
import { countryContext } from '../../GlobalContext';

type Props = {
  children: React.ReactNode;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Select = ({
  children,
  name,
  onChange
}: Props) => {
  const { state } = countryContext()
  return (
    <Styles.SelectContainer 
    toggleBg={state.toggleBg}
    >
      <Styles.Select
      toggleBg={state.toggleBg}
      name={name}
      onChange={onChange}
      >
        {children}
      </Styles.Select>
    </Styles.SelectContainer>
  )
}

export default Select
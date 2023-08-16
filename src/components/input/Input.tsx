import React from 'react';
import { Styles } from './styles';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Flex from '../flex';
import { countryContext } from '../../GlobalContext';
type InputProps = {
  placeHolder?: string;
  value: string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;

}


const Input = ({
  onChange,
  value,
  placeHolder,
}: InputProps) => {
  const { state } = countryContext()
  const inputStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '350px',
    marginBottom: '1rem',
    alignItems: 'center',
    padding: '1rem 1.7rem',
    borderRadius: '6px',
    boxShadow: state.toggleBg ? '0px 2px 2px 1px #123' : '0px 2px 2px 1px #eee',
    backgroundColor: state.toggleBg ? 'var(--dark-blue)' : 'var(--white)',
    flexDirection: 'row'

  }
  return (
    <Flex css={inputStyle}>
      <Styles.Icon>
        <FaMagnifyingGlass />
      </Styles.Icon>
      <Styles.Input 
      toggleBg={state.toggleBg}
      type='text'
      onChange={onChange}
      value={value}
      placeholder={placeHolder}
      />
      </Flex>
  )
}

export default Input
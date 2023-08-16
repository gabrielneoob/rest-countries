import React from 'react'
import { Styles } from './styles';
import { countryContext } from '../../GlobalContext';

type Props = {
  css?: any;
  children: React.ReactNode;
  onClick?: () => void;
}

const FlexTest = ({ css, children, onClick }: Props) => {
  const { state } = countryContext()
  const style: React.CSSProperties = { ...css }
  return (
    <Styles.Flex
    toggleBg={ state.toggleBg }
    style={style}
    onClick={onClick}
    >
      {children}
    </Styles.Flex>
  )
}

export default FlexTest
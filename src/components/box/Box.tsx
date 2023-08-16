import React from 'react'
import { Styles } from './styles'

type BoxProps = {
  children: React.ReactNode;
  css?: any;

}

const Box = ({
  children,
  css
}: BoxProps) => {
  const style: React.CSSProperties = { ...css }
  return (
    <Styles.Box
    style={style} 
    >
      {children}
    </Styles.Box>
  )
}

export default Box
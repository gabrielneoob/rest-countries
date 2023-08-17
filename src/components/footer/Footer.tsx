import { FaSquareGithub } from 'react-icons/fa6'
import { BsLinkedin } from 'react-icons/bs'
import { countryContext } from '../../GlobalContext'
import { Styles } from './styles'

const Footer = () => {
  const { state } = countryContext()
  return (
    <Styles.BackGroundFooter toggleBg={state.toggleBg}>
      <Styles.Footer>
        <p>Created by Gabriel Neoob </p>
        <nav>
          <ul style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <Styles.Li><Styles.Link target='_blank' href="https://github.com/gabrielneoob"><FaSquareGithub size='32px'/></Styles.Link></Styles.Li>
            <Styles.Li><Styles.Link target='_blank' href="https://www.linkedin.com/in/gabriel-neoob/"><BsLinkedin size='28px'/></Styles.Link></Styles.Li>
          </ul>
        </nav>
      </Styles.Footer>
    </Styles.BackGroundFooter>
  )
}

export default Footer
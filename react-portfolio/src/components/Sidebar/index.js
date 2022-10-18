import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoV from '../../assets/images/logo-v.png'
import LogoSubtitle from '../../assets/images/subtitle.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className ='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoV} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='subtitle' />
        </Link>
            {/* END OF LOGO AND SUBTITLE */}
            {/* OTHER LINKS */}
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
        </nav>

    </div>
  )
}

export default Sidebar 

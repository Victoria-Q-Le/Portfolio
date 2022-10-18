import './index.scss'
import {Link} from 'react-router-dom'
import LogoV from '../../assets/images/logo-v.png'

const Sidebar = () => {
  return (
    <div className ='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoV} alt='logo' />
        </Link>
    </div>
  )
}

export default Sidebar 

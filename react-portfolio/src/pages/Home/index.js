import LogoTitle from '../../assets/images/logo-v.png'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    Hi, 
                    <br /> 
                    I'm 
                    <img src={LogoTitle} alt='developer' />
                    ictoria
                    <br />
                    web developer
                    <h2>Full Stack Developer, Life Long Learner</h2>
                    <Link to='/contact'>CONTACT ME</Link>
                </h1>
            </div>
        </div>
    )
}

export default Home
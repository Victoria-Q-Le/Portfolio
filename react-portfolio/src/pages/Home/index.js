import LogoTitle from '../../assets/images/logo-v.png'
import {Link} from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters'
import Logo from '../../components/Logo'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i','c','t','o','r','i','a']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r']
    

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m</span> 
                    <img src={LogoTitle} alt='developer' />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Full Stack Developer | Life Long Learner</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>

            <Logo />
        </div>
    )
}

export default Home
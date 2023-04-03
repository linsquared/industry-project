import './Header.scss'
import bell from '../../icons/Vector.png'
import time from '../../icons/lock.png'
import setting from '../../icons/Settings.png'

const Header = () => {

    return (
        <header className='header'>
            <h1 className='header-title'>Good afternoon</h1>
            <div className='header__icons '>
                <img className='header__bell main-icons' src={bell} alt='bell icon' />
                <img className='header__time main-icons' src={time} alt='time icon' />
                <img className='header__setting main-icons' src={setting} alt='settings' />
            </div>
        </header>
    )
}

export default Header
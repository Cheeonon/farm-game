import { useState } from 'react';
import Profile from '../Profile/Profile';
import './Header.scss';

const Header = () => {
      const [showProfile, setShowProfile] = useState(false);

      const handleProfile = (e) => {
            setShowProfile(!showProfile);
      }

  return (
    <>
    <header className='header'> 
            <h1 className='header__logo'>BrainFarm</h1>
            <div className="profile__btn" onClick={handleProfile}>Profile</div>
            {showProfile && <Profile />}
      </header>
    </>
  )
}

export default Header
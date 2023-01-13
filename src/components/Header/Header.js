import { useState } from 'react';
import Profile from '../Profile/Profile';
import './Header.scss';

const Header = ({name, balance, houseLevel}) => {
      const [showProfile, setShowProfile] = useState(false);

      const handleProfile = (e) => {
            setShowProfile(!showProfile);
      }

  return (
    <>
    <header className='header'> 
            <h1 className='header__logo'>Cheeon's Farm</h1>
            <div className="profile__btn" onClick={handleProfile}>Profile</div>
            {showProfile && <Profile name={name} balance={balance} houseLevel={houseLevel}/>}
      </header>
    </>
  )
}

export default Header
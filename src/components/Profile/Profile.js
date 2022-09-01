import './Profile.scss';

const Profile = () => {
      const handleUpgradeHouse = () => {

      }

      // axios to get user info

  return (
    <>
      <div className="profile">
            <div className="profile__section">
                  <img src="#" alt="profile.img"/>
                  <span className="header__name">Brad</span>
            </div>
            <div className="profile__section">
                  <img src="" alt="gold-icon" className='header__gold-icon'/>
                  <span className="header__gold">100G</span>
            </div>
            <div className="profile__section">
                  <button className="profile__upgrade-btn" onClick={handleUpgradeHouse}>Upgrade House</button>
            </div>
      </div>
    </>
  )
}

export default Profile
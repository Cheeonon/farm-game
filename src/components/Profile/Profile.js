import './Profile.scss';
import coinURL from '../../assets/images/coin.png';
import profileURL from '../../assets/images/profile.jpg';

const Profile = ({name, balance}) => {

  return (
    <>
      <div className="profile">
            <div className="profile__section">
                  <img src={profileURL} alt="profile.img" className='profile__icon'/>
                  <span className="header__name">{name}</span>
            </div>
            <div className="profile__section">
                  <img src={coinURL} alt="gold-icon" className='profile__icon'/>
                  <span className="header__gold">{balance + "G"}</span>
            </div>
      </div>
    </>
  )
}

export default Profile
import profilePicture from '../assets/profile-picture.jpg'
import '../style/ProfilePicture.scss'

const ProfilePicture = () =>  {

    return (
        <div>
            <img className="ProfilePicture" src={profilePicture}></img>
        </div>

    )
}

export default ProfilePicture;

import profilePicture from '../assets/profile-picture.jpg'
import '../style/ProfilePicture.scss'

export default function ProfilePicture() {

    return (
        <div>
            <img className="ProfilePicture" src={profilePicture}></img>
        </div>

    )
}

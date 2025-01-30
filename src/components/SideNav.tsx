import '../style/_base.scss'

import ProfilePicture from '../components/ProfilePicture';


const SideNav = () =>  {
    return (
        <>
        <ProfilePicture />

        <div>
        <button>Skills</button>
        </div>
        <div>
        <button>Projects</button>
        </div>
        <div>
        <button>About</button>
        </div>

        </>
    )

}

export default SideNav

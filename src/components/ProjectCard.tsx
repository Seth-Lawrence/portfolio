export default function ProjectCard() {

    return (
        <div className='ProjectCard'>
            <table>
               <tr className="ProjectCardHeader">
               <th>Project 1 name</th>
               </tr>
               <tr>
                <img className="projectCardImage" alt="project image"></img>
               </tr>
               <tr>
                <td className="ProjectCardDescription">
                    Project Description
                </td>
               </tr>
            </table>
        </div>
    )
}
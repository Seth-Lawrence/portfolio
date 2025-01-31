type ProjectCardProps = {
    name: string;
    image: string;
    description: string;
};

const ProjectCard = (project: ProjectCardProps) => {

   const { name, image, description } = project

    return (
        <div className='ProjectCard'>
            <table>
                <tr className="ProjectCardHeader">
                    <th>{name}</th>
                </tr>
                <tr>
                    <img className="projectCardImage" alt="project image" src={image}></img>
                </tr>
                <tr>
                    <td className="ProjectCardDescription">
                        {description}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default ProjectCard;

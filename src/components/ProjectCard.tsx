type ProjectCardProps = {
    name: string;
    image: string;
    description: string;
};

const ProjectCard = ({name, image, description} : ProjectCardProps) => {

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

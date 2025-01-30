type ProjectCardProps = {
    name: string;
    image: string;
    description: string;
};

const ProjectCard = (project: ProjectCardProps) => {

    return (
        <div className='ProjectCard'>
            <table>
                <tr className="ProjectCardHeader">
                    <th>{project.name}</th>
                </tr>
                <tr>
                    <img className="projectCardImage" alt="project image" src={project.image}></img>
                </tr>
                <tr>
                    <td className="ProjectCardDescription">
                        {project.description}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default ProjectCard;

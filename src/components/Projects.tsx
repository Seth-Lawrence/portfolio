import  ProjectCard from "./ProjectCard";

const Projects = () => {

   const defaultProject = {
        name: 'default',
        image: 'default',
        description: 'default',
    }

    return (
        <div className='Projects'>
            <ProjectCard name={defaultProject.name} image = {defaultProject.image} description={defaultProject.description}/>
        </div>
    )
}

export default Projects;

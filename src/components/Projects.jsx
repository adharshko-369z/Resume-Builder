export default function Projects({formData,onClick,deleteArrayItem,onChange}){

    const projectDivEl = formData.projects.map(project=>{

            const commonAttributes = {
                onChange : onChange,
                "data-section" : "projects",
                "data-id" : project.id
            }

            return (<div className="project-details-contanier" key={project.id}>
                <button type="button"  onClick={()=> deleteArrayItem(project.id, commonAttributes["data-section"])} disabled={formData.projects.length === 1}>Delete</button>
                <label htmlFor="projectTitle">Project Title:</label>
                <input type="text" id="projectTitle" name="projectTitle" {...commonAttributes} value={project.projectTitle} placeholder="Project Title"   required/>
                <label htmlFor="technologies">Technologies:</label>
                <input type="text" id="technologies" name="technologies" {...commonAttributes} value={project.technologies} placeholder="HTML, CSS, JavaScript"   required/>
                <label htmlFor="description">Description:</label>
                <textarea type="text" rows="5" id="description" name="description" {...commonAttributes} value={project.description} placeholder="type about your project here..."   required></textarea>
                <label htmlFor="projectgithubUrl">GitHub:</label> 
                <input type="url" id="projectgithubUrl" name="projectGithub" {...commonAttributes} value={project.projectGithub} placeholder="https://github.com/username"  />
                <label htmlFor="projectLiveLink">Project LiveLink:</label> 
                <input type="url" id="projectLiveLink" name="projectLiveLink" {...commonAttributes} value={project.projectLiveLink} placeholder="https://netlify.com/projectname"  />
            </div>)
        })

    return(
        <section className="project-section">
            <h2>Projects</h2>
            {projectDivEl}
            <button type="button" onClick={onClick} disabled={formData.projects.length === 3}>Add next project</button>
        </section>
    )
}
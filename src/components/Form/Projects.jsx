export default function Projects({formData,errors,onClick,deleteArrayItem,onChange}){

    const addBtnDisabled = formData.projects.length === 3 ? "add-disabled-btn" : ""
    const deleteBtnDisabled = formData.projects.length === 1 ? "delete-disabled-btn" : ""

    const projectDivEl = formData.projects.map((project,index)=>{

            const commonAttributes = {
                onChange : onChange,
                "data-section" : "projects",
                "data-id" : project.id
            }

            return (<div className="project-details-contanier" key={project.id}>
                <div className="project-contanier-top" >
                    <p>Project {index+1}</p>
                    <button className={`delete-btn ${deleteBtnDisabled}`} type="button"  onClick={()=> deleteArrayItem(project.id, commonAttributes["data-section"])} disabled={formData.projects.length === 1}>X</button>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="projectTitle">Project Title</label>
                    <input type="text" id="projectTitle" name="projectTitle" {...commonAttributes} value={project.projectTitle} placeholder="Project Title"   required/>
                    <p className="error-message" >{errors[`projectTitle_${project.id}`]}</p>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="technologies">Technologies</label>
                    <input type="text" id="technologies" name="technologies" {...commonAttributes} value={project.technologies} placeholder="HTML, CSS, JavaScript"   required/>
                    <p className="error-message" >{errors[`technologies_${project.id}`]}</p>
                </div>
                <div className="label-input-error-container">
                   <label htmlFor="description">Description</label>
                    <textarea rows="5" id="description" name="description" {...commonAttributes} value={project.description} placeholder="type about your project here..."   required></textarea>
                    <p className="error-message" >{errors[`description_${project.id}`]}</p>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="projectGithubUrl">GitHub</label> 
                    <input type="url" id="projectGithubUrl" name="projectGithub" {...commonAttributes} value={project.projectGithub} placeholder="https://github.com/username"  />
                    <p className="error-message" >{errors[`projectGithub_${project.id}`]}</p>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="projectLiveLink">Project LiveLink</label> 
                    <input type="url" id="projectLiveLink" name="projectLiveLink" {...commonAttributes} value={project.projectLiveLink} placeholder="https://netlify.com/projectname"  />
                    <p className="error-message" >{errors[`projectLiveLink_${project.id}`]}</p>
                </div>
            </div>)
        })

    return(
        <section className="projects-section">
            <h2>Projects</h2>
            {projectDivEl}
           <button className={`add-btn ${addBtnDisabled}`} type="button" onClick={onClick} disabled={formData.projects.length === 3}>Add next project</button>
        </section>
    )
}
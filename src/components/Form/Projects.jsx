import { useEffect } from "react"

export default function Projects({formData, errors, onClick, deleteArrayItem, onChange, skippedProjects, setSkippedProjects, skipProjects}){

    useEffect(()=>{
        Object.values(formData.projects).map(project => {
            if(project.projectTitle !== "" || project.technologies !== "" || project.description !== "" || project.projectGithub !== "" || project.projectLiveLink !== ""){
                setSkippedProjects(false)
            }
        })
    },[formData.projects, setSkippedProjects])



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
                <div className="input-cols-container">
                    <div className="label-input-error-container">
                        <label htmlFor={`projectTitle_${project.id}`}>Project Title</label>
                        <input type="text" id={`projectTitle_${project.id}`} name="projectTitle" {...commonAttributes} value={project.projectTitle} placeholder="Task Management App"   required/>
                        <p className="error-message" >{errors[`projectTitle_${project.id}`]}</p>
                    </div>
                    <div className="label-input-error-container">
                        <label htmlFor={`technologies${project.id}`}>Technologies</label>
                        <input type="text" id={`technologies${project.id}`} name="technologies" {...commonAttributes} value={project.technologies} placeholder="React, JavaScript, CSS"   required/>
                        <p className="error-message" >{errors[`technologies_${project.id}`]}</p>
                    </div>
                </div>
                <div className="label-input-error-container">
                   <label htmlFor={`description_${project.id}`} >Description</label>
                    <textarea rows="5" id={`description_${project.id}`} name="description" {...commonAttributes} value={project.description} placeholder="A responsive task management application with filtering and local data persistence."   required></textarea>
                    <p className="error-message" >{errors[`description_${project.id}`]}</p>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor={`projectGithubUrl_${project.id}`}>GitHub</label> 
                    <input type="url" id={`projectGithubUrl_${project.id}`} name="projectGithub" {...commonAttributes} value={project.projectGithub} placeholder="https://github.com/username/projectname"  />
                    <p className="error-message" >{errors[`projectGithub_${project.id}`]}</p>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor={`projectLiveLink_${project.id}`}>Project LiveLink</label> 
                    <input type="url" id={`projectLiveLink_${project.id}`} name="projectLiveLink" {...commonAttributes} value={project.projectLiveLink} placeholder="https://netlify.com/projectname"  />
                    <p className="error-message" >{errors[`projectLiveLink_${project.id}`]}</p>
                </div>
            </div>)
        })

    return(
        <section className="projects-section">
            <div className="projects-header">
                <h2>Projects</h2>
                <button type="button" className={skippedProjects ? "" : "skip-btn"} onClick={skipProjects}>{skippedProjects ? "Skipped" : "Skip"}</button>
            </div>
            {projectDivEl}
           <button className={`add-btn ${addBtnDisabled}`} type="button" onClick={onClick} disabled={formData.projects.length === 3}>Add next project</button>
        </section>
    )
}
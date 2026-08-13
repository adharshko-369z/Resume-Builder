
export default function PreviewResume({getData}){
   
    const projectsRenderEl = getData.projects.map(project =>{
        return(
            <div key={project.id} className="project-resume-container list-item-contanier">
                <p className="text-bold">{project.projectTitle}</p>
                <p>{(project.technologies).replaceAll(", "," • ")}</p>
                <p>{project.description}</p>
                <div>
                    <div className="project-link">
                        <p>GitHub:</p>
                        <a href={project.projectGithub} target="_blank" rel="noopener noreferrer">
                            {project.projectGithub.replace("https://", "")}
                        </a>
                    </div>
                    <div className="project-link">
                        <p>Live Link:</p>
                        <a href={project.projectLiveLink} target="_blank" rel="noopener noreferrer">
                            {project.projectLiveLink.replace("https://", "")}
                        </a>
                    </div>
                </div>
            </div>
        ) 
    })

    const experiencesRenderEl = getData.experiences.map(experience =>{
        return(
            <div key={experience.id} className="experience-resume-container list-item-contanier">
                <div className="experience-top-style">
                    <p>{experience.role}</p>
                    <p>|</p>
                    <p className="education-period">{experience.experienceStartDate.split("-")[0]}-{experience.experienceEndDate.split("-")[0]}</p>
                </div>
                <p>{experience.companyName}</p>
                <p>{experience.description}</p>
                
            </div>
        )
    })

    const skillsRenderEl = getData.skills.map(skill =>{
        return(
            <div key={skill.id} className="skill-resume-container list-item-contanier">
                <p className="text-bold">{skill.category}:</p>
                <p>{skill.skillsList}</p>
            </div> 
        )
    })

    return (
     <div className="preview-container">
        <div className="preview-wrapper">
            <h2>Resume Preview</h2>
            <section className="preview-resume-section"> 
                    <h2>{getData.personalDetails.fullName}</h2>
                    <div className="contact-data">
                        <p>{getData.personalDetails.phoneNumber}</p>

                        {getData.personalDetails.email && <p>|</p>}
                        <p>{getData.personalDetails.email}</p>

                        {getData.personalDetails.github && <p>|</p>}
                        {getData.personalDetails.github && 
                        <a href={getData.personalDetails.github} target="_blank" rel="noopener noreferrer">
                            {getData.personalDetails.github.replace("https://", "")}
                        </a>}

                        {getData.personalDetails.linkedin && <p>|</p>}
                        {getData.personalDetails.linkedin && 
                        <a href={getData.personalDetails.linkedin} target="_blank" rel="noopener noreferrer">
                            {getData.personalDetails.linkedin.replace("https://www.", "")}
                        </a>}
                    </div>
                    <div className="location-data">
                            <p>{getData.personalDetails.city}</p>
                            <p className="seperater-comma">,</p>
                            <p>{getData.personalDetails.district}</p>
                            <p className="seperater-comma">,</p>
                            <p>{getData.personalDetails.state}</p>
                    </div>
                <div className="summary-resume-section">
                    <h3 className="preview-resume-section-heading">Summary</h3>      
                    <p>{getData.summary.professionalSummary}</p>
                </div>
                <div className="skills-resume-section ">
                    <h3 className="preview-resume-section-heading">Skills</h3>
                    {skillsRenderEl}
                </div>
                <div className="projects-resume-section ">
                    <h3 className="preview-resume-section-heading">Projects</h3>
                        {projectsRenderEl}
                </div> 
                <div className="experiences-resume-section">
                    <h3 className="preview-resume-section-heading">Experiences</h3>
                        {experiencesRenderEl}
                </div>  
                <div className="educatiion-resume-section">
                    <h3 className="preview-resume-section-heading">Education</h3>
                    <div className="education-resume-contanier">
                        <p className="text-bold">{getData.education.degreeName}</p> <p>-</p>
                        <p> {getData.education.institution}</p> <p>|</p>
                        <p className="education-period">{getData.education.educationStartDate.split("-")[0]}-{getData.education.educationEndDate.split("-")[0]}</p>
                    </div>
                </div>
            </section>              
        </div>    
     </div>   
)
}

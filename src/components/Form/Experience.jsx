import { useEffect } from "react"

export default function Experience({formData, errors, onClick, deleteArrayItem, onChange, skippedExperience, setSkippedExperience, skipExperience}){

    useEffect(()=>{
            Object.values(formData.experiences).map(experience => {
                if(experience.companyName !== "" || experience.description !== "" || experience.experienceStartDate !== "" || experience.experienceEndDate !== "" || experience.role !== ""){
                    setSkippedExperience(false)
                }
            })
        },[formData.experiences, setSkippedExperience])

    const addBtnDisabled = formData.experiences.length === 2 ? "add-disabled-btn" : ""
    const deleteBtnDisabled = formData.experiences.length === 1 ? "delete-disabled-btn" : ""

    const experiencesDivEl = formData.experiences.map((experience,index)=>{

            
            const commonAttributes = {
                onChange : onChange,
                "data-section" : "experiences",
                "data-id" : experience.id
            }

            return (<div className="experience-details-contanier" key={experience.id}>
                
                <div className="project-contanier-top" >
                    <p>Experience {index+1}</p>
                    <button className={`delete-btn ${deleteBtnDisabled}`} type="button"  onClick={()=> deleteArrayItem(experience.id, commonAttributes["data-section"])} disabled={formData.experiences.length === 1}>X</button>
                </div>
                <div className="input-cols-container">
                    <div className="label-input-error-container">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" id="companyName" name="companyName" {...commonAttributes} value={experience.companyName} placeholder="ABC Company"   required/>
                        <p className="error-message" >{errors[`companyName_${experience.id}`]}</p>
                    </div>
                    <div className="label-input-error-container">
                        <label htmlFor="role">Role</label>
                        <input type="text" id="role" name="role" {...commonAttributes} value={experience.role} placeholder="Frontend Developer Intern"   required/>
                        <p className="error-message" >{errors[`role_${experience.id}`]}</p>
                    </div>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="expDescription">Description</label>
                    <textarea rows="5" id="expDescription" name="description" {...commonAttributes} value={experience.description} placeholder=" Built responsive user interfaces using React and JavaScript."   required></textarea>
                    <p className="error-message" >{errors[`description_${experience.id}`]}</p>
                </div>
                 <div className="input-cols-container">
                    <div className="label-input-error-container">
                        <label htmlFor="experienceStartDate">Start</label>
                        <input type="date" id="experienceStartDate" name="experienceStartDate"  {...commonAttributes} value={experience.experienceStartDate} required/>
                        <p className="error-message" >{errors[`experienceStartDate_${experience.id}`]}</p>
                    </div>
                    <div className="label-input-error-container">
                        <label htmlFor="experienceEndDate">End</label>
                        <input type="date" id="experienceEndDate" name="experienceEndDate"  {...commonAttributes} value={experience.experienceEndDate} required/>
                        <p className="error-message" >{errors[`experienceEndDate_${experience.id}`]}</p>
                    </div>
                 </div>
            </div>
            )
        })

    return(
        <>
        <section className="experiences-section">
            <div className="experiences-header">
                <h2>Experience</h2>
                <button type="button" className={skippedExperience ? "" : "skip-btn"} onClick={skipExperience}>{skippedExperience ? "Skipped" : "Skip"}</button>
            </div>
            {experiencesDivEl}
            <button className={`add-btn ${addBtnDisabled}`} type="button" onClick={onClick} disabled={formData.experiences.length === 2}>Add next experience</button>
        </section>
        </>
    )
}

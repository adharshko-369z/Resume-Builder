
export default function Experience({formData,errors,onClick,deleteArrayItem,onChange}){

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
                <div className="form-section-wrapper">
                    <div className="label-input-error-container">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" id="companyName" name="companyName" {...commonAttributes} value={experience.companyName} placeholder="Company Name"   required/>
                        <p className="error-message" >{errors[`companyName_${experience.id}`]}</p>
                    </div>
                    <div className="label-input-error-container">
                        <label htmlFor="role">Role</label>
                        <input type="text" id="role" name="role" {...commonAttributes} value={experience.role} placeholder="Role"   required/>
                        <p className="error-message" >{errors[`role_${experience.id}`]}</p>
                    </div>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="expDescription">Description</label>
                    <textarea rows="5" id="expDescription" name="description" {...commonAttributes} value={experience.description} placeholder="type about your experience here..."   required></textarea>
                    <p className="error-message" >{errors[`description_${experience.id}`]}</p>
                </div>
                 <div className="form-section-wrapper">
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
            <h2>Experience</h2>
            {experiencesDivEl}
            <button className={`add-btn ${addBtnDisabled}`} type="button" onClick={onClick} disabled={formData.experiences.length === 2}>Add next experience</button>
        </section>
        </>
    )
}

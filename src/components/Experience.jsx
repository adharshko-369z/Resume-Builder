

export default function Experience({formData,onClick,deleteArrayItem,onChange}){
    const experiencesDivEl = formData.experiences.map(experience=>{

            const commonAttributes = {
                onChange : onChange,
                "data-section" : "experiences",
                "data-id" : experience.id
            }

            return (<div className="experience-details-contanier" key={experience.id}>
                <button type="button"  onClick={()=> deleteArrayItem(experience.id, commonAttributes["data-section"])} disabled={formData.experiences.length === 1}>Delete</button>
                <label htmlFor="companyName">Company Name:</label>
                <input type="text" id="companyName" name="companyName" {...commonAttributes} value={experience.companyName} placeholder="Company Name"   required/>
                <label htmlFor="role">Role:</label>
                <input type="text" id="role" name="role" {...commonAttributes} value={experience.role} placeholder="Role"   required/>
                <label htmlFor="expDescription">Description:</label>
                <textarea type="text" rows="5" id="expDescription" name="description" {...commonAttributes} value={experience.description} placeholder="type about your experience here..."   required></textarea>
                <div className="experience-period">
                <label htmlFor="experienceStartDate">Start Date:</label>
                <input type="date" id="experienceStartDate" name="experienceStartDate"  {...commonAttributes} value={experience.experienceStartDate} required/>

                <label htmlFor="experienceEndDate">End Date:</label>
                <input type="date" id="experienceEndDate" name="experienceEndDate"  {...commonAttributes} value={experience.experienceEndDate} required/>
            </div>
            </div>)
        })

    return(
        <>
        <section className="project-section">
            <h2>Experience</h2>
            {experiencesDivEl}
            <button type="button" onClick={onClick} disabled={formData.skills.length === 2}>Add next experience</button>
        </section>
        </>
    )
}

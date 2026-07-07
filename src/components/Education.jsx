export default function Education({formData,onChange}){

    const commonAttributes = {
        onChange : onChange,
        "data-section" : "education"
    }


    return(
        <>
        <section className="education-section">
        <h2>Education</h2>
            <label htmlFor="degreeName">Degree:</label>
            <input type="text" id="degreeName" name="degreeName"  {...commonAttributes} value={formData.education.degreeName} placeholder="Bachelor of ..."   required/>

            <label htmlFor="institution">Collage/Institution</label>
            <input type="text" id="institution" name="institution" {...commonAttributes}  value={formData.education.institution} placeholder="name of collage/intsitution"   required/>
            <div className="education-period">
                <label htmlFor="educationStartDate">Start Date:</label>
                <input type="date" id="educationStartDate" name="educationStartDate"  {...commonAttributes} value={formData.education.educationStartDate} required/>

                <label htmlFor="educationEndDate">End Date:</label>
                <input type="date" id="educationEndDate" name="educationEndDate"  {...commonAttributes} value={formData.education.educationEndDate} required/>
            </div>
        </section>
        </>
    )
}
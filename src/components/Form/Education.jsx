export default function Education({formData,errors,onChange}){

    const commonAttributes = {
        onChange : onChange,
        "data-section" : "education"
    }


    return(
        <>
        <section className="education-section">
            <h2>Education</h2>
             <div className="label-input-error-container">
                <label htmlFor="degreeName">Degree</label>
                <input type="text" id="degreeName" name="degreeName"  {...commonAttributes} value={formData.education.degreeName} placeholder="B.Com Computer Applications"   required/>
                <p className="error-message" >{errors?.degreeName}</p>
             </div>
            <div className="label-input-error-container">
                <label htmlFor="institution">Institution</label>
                <input type="text" id="institution" name="institution" {...commonAttributes}  value={formData.education.institution} placeholder="ABC College"   required/>
                <p className="error-message" >{errors?.institution}</p>
            </div>
            <div className="input-cols-container">
                <div className="label-input-error-container">
                    <label htmlFor="educationStartDate">Start</label>
                    <input type="date" id="educationStartDate" name="educationStartDate"  {...commonAttributes} value={formData.education.educationStartDate} required/>
                    <p className="error-message" >{errors?.educationStartDate}</p>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="educationEndDate">End</label>
                    <input type="date" id="educationEndDate" name="educationEndDate"  {...commonAttributes} value={formData.education.educationEndDate} required/>
                    <p className="error-message" >{errors?.educationEndDate}</p>
                </div>
        </div>
        </section>
        </>
    )
}
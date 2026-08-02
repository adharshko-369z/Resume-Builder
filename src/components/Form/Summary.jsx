export default function Summary({formData, errors ,onChange}){

        const commonAttributes = {
        onChange : onChange,
        "data-section" : "summary"
    }

    return(
        <section className="summary-section">
            <h2>Professional Summary</h2>
            <div className="label-input-error-container">
                <label htmlFor="professionalSummary">Summary</label>
                <textarea  rows="5" id="professionalSummary" name="professionalSummary" {...commonAttributes} value={formData.summary.professionalSummary} placeholder="about your self..."   required></textarea>
                <p  className="error-message">{errors?.professionalSummary}</p>
            </div>
        </section>
    )
}
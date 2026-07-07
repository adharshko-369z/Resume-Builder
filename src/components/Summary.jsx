export default function Summary({formData, onChange}){

        const commonAttributes = {
        onChange : onChange,
        "data-section" : "summary"
    }

    return(
        <section className="summary-section">
            <h2>Professional Summary</h2>
            <label htmlFor="professionalSummary">Summary:</label>
            <textarea type="text" rows="5" id="professionalSummary" name="professionalSummary" {...commonAttributes} value={formData.summary.professionalSummary} placeholder="about your self..."   required></textarea>
        </section>
    )
}
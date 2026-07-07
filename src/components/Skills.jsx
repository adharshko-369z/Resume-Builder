export default function Skills({formData,onChange,onClick,deleteArrayItem}){
     
     const skillsDivEl = formData.skills.map(skill=>{

            const commonAttributes = {
                onChange : onChange,
                "data-section" : "skills",
                "data-id" : skill.id
            }

            return (

            <div className="skills-details-contanier" key={skill.id}>
                <button type="button" onClick={()=> deleteArrayItem(skill.id, commonAttributes["data-section"])} disabled={formData.skills.length === 1}>Delete</button>
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" {...commonAttributes} value={skill.category} placeholder="lang,tech,tools,soft"   required/>
                <label htmlFor="skillsList">Skills:</label>
                <textarea type="text" rows="5" id="skillsList" name="skillsList" {...commonAttributes} value={skill.skillsList} placeholder="type about your skills here with seperate comma"   required></textarea>
            </div>)
        })


    return(
        <section className="skill-section">
            <h2>Skills </h2>
            {skillsDivEl}
            <button type="button" onClick={onClick} disabled={formData.skills.length === 4}>Add next skill category</button>
        </section>
    )
}
export default function Skills({formData,errors,onChange,onClick,deleteArrayItem}){
     
     const addBtnDisabled = formData.skills.length === 4 ? "add-disabled-btn" : ""
     const deleteBtnDisabled = formData.skills.length === 1 ? "delete-disabled-btn" : ""

     const skillsDivEl = formData.skills.map((skill,index)=>{
            
            const commonAttributes = {
                onChange : onChange,
                "data-section" : "skills",
                "data-id" : skill.id
            }

            return (

            <div className="skills-details-contanier" key={skill.id}>
                <div className="project-contanier-top" >
                    <p>Skill {index+1}</p>
                    <button className={`delete-btn ${deleteBtnDisabled}`} type="button" onClick={()=> deleteArrayItem(skill.id, commonAttributes["data-section"])} disabled={formData.skills.length === 1}>X</button>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="category">Category</label>
                    <input type="text" id="category" name="category" {...commonAttributes} value={skill.category} placeholder="Frontend"   required/>
                    <p className="error-message" >{errors[`category_${skill.id}`]}</p>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="skillsList">Skills</label>
                    <textarea rows="5" id="skillsList" name="skillsList" {...commonAttributes} value={skill.skillsList} placeholder="HTML, CSS, JavaScript, React"   required></textarea>
                    <p className="error-message" >{errors[`skillsList_${skill.id}`]}</p>
                </div>
            </div>)
        })


    return(
        <section className="skills-section">
            <h2>Skills </h2>
            {skillsDivEl}
            <button className={`add-btn ${addBtnDisabled}`} type="button" onClick={onClick} disabled={formData.skills.length === 4}>Add next skill category</button>
        </section>
    )
}
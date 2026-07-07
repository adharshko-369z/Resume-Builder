import { useState } from "react"
import PersonalDetails from "./components/PersonalDetails"
import Summary from "./components/Summary"
import Education from "./components/Education"
import PreviewResume from "./components/PreviewResume"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"

function App() {
  const [formData, setFormData] = useState({
    personalDetails:{
      fullName : "",
      phoneNumber : "",
      email : "",
      city: "",
      district : "",
      state : "",
      github : "",
      linkedin : "",
      portfolio : ""
    },
    education : {
      degreeName : "",
      institution : "",
      educationStartDate : "",
      educationEndDate : ""
    },
    projects : [
      {
        id : crypto.randomUUID(),
        projectTitle : "",
        technologies : "",
        description : "",
        projectGithub : "",
        projectLiveLink : ""
      }
    ],
    experiences : [
      {
        id : crypto.randomUUID(),
        companyName : "",
        role : "",
        description : "",
        experienceStartDate : "",
        experienceEndDate : ""
      }
    ],
    skills : [
        {
          id : crypto.randomUUID(),
          category : "",
          skillsList : ""
        }
      ],
    summary : {
      professionalSummary : ""
    }
  })

  const [preview,setPreview] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    setPreview(true)
  }

  function handleChange(e,){
    const {name,value} = e.target
    const section = e.target.dataset.section

    const arraySections = ["projects", "experiences", "skills"]

    

    if(!section) return

    if(arraySections.includes(section)){
      const arrayId = e.target.dataset.id
      setFormData(prevFormData => {
        return{
          ...prevFormData,
          [section] : prevFormData[section].map(arrayItem=>{
            if( arrayId === arrayItem.id){
              return {...arrayItem,[name] : value}
            }
            return arrayItem
          })      
        }
      })
    }

    if(!arraySections.includes(section)){
      setFormData(prevFormData=>{
        return{
          ...prevFormData,
          [section]:{
           ...prevFormData[section],
            [name] : value
          }
        }
      })
    }
    
  }

  function addProject(){
      setFormData(prevFormData=>{
        return{
          ...prevFormData,
          projects : [
            ...prevFormData.projects,
            {
              id : crypto.randomUUID(),
              projectTitle : "",
              technologies : "",
              description : "",
              projectGithub : "",
              projectLiveLink : ""
            }
          ]
        }
      })
  }

  function addExperience(){
    setFormData(prevFormData=>{
        return{
          ...prevFormData,
          experiences : [
            ...prevFormData.experiences,
            {
              id : crypto.randomUUID(),
              companyName : "",
              role : "",
              description : "",
              expStartDate : "",
              expEndDate : ""
            }
          ]
        }
      })
  }

  function addSkills(){
    setFormData(prevFormData=>{
        return{
          ...prevFormData,
          skills : [
            ...prevFormData.skills,
            {
              id : crypto.randomUUID(),
              category : "",
              skillsList : ""
            }
          ]
        }
      })
  }

  function deleteArrayItem(id,section){
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [section] : prevFormData[section].filter(arrayItem => arrayItem.id !== id)
      }
    })
  }

  console.log(formData) 

  return (
    <>
    <form onSubmit={handleSubmit}>
      <PersonalDetails formData={formData} onChange={handleChange}/>
      <Education formData={formData} onChange={handleChange}/>
      <Projects formData={formData} onClick={addProject} deleteArrayItem={deleteArrayItem} onChange={handleChange}/>
      <Experience formData={formData} onClick={addExperience} deleteArrayItem={deleteArrayItem} onChange={handleChange}/>
      <Skills formData={formData} onClick={addSkills} deleteArrayItem={deleteArrayItem} onChange={handleChange}/>
      <Summary formData={formData} onChange={handleChange}/>
      <button type="submit">Submit Infos</button>
    </form>
   {preview && <section className="preview-resume-section">
      <PreviewResume getData={formData}/>
    </section>}
    </>
  )
}

export default App

import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import resumeIcon  from "./assets/resumeicon.svg"
import PreviewResume from "./components/PreviewResume"
import { PDFDownloadLink } from '@react-pdf/renderer'
import PdfResume from "./components/pdfResume"
import { buildingPreData } from "./dummydata"

import FormResume from "./components/Form/FormResume"


// import-hook      
import useResumeForm from "./hooks/useResumeForm"
import useResumeSteps from "./hooks/useResumeSteps"

function App() {

  const resumeFormData = useResumeForm() 
  const resumeSteps = useResumeSteps(resumeFormData.formData) 

  const isDesktop = useMediaQuery({
    minWidth : "1024px"
  })



  return (
    <>
      <header>
        <div className="logo">
          <img src={resumeIcon} alt="" width="30px" height="30px" />  
          <h1>Resume Builder</h1>
        </div>
        <div className="header-buttons"> 
         {!isDesktop && resumeSteps.preview ? 
          <button className="header-button" onClick={()=>resumeSteps.setPreview(false)}>Edit</button> :
          <button className="header-button" onClick={()=>resumeSteps.setPreview(true)}>Preview</button>
          }
        </div>
      </header>
      <main>
      { !isDesktop &&
      <div>
        { !resumeSteps.preview? 
        <FormResume resumeFormData={resumeFormData} resumeSteps={resumeSteps} />
        : 
        <>
        <PreviewResume getData={resumeFormData.formData}/>
          <PDFDownloadLink 
          className="download-btn"
            document={<PdfResume getData={resumeFormData.formData} />} 
            fileName="resume.pdf"
          >
            Download Resume-PDF
          </PDFDownloadLink>
        </>}
      </div>} 


      {isDesktop && <>
      <FormResume resumeFormData={resumeFormData} resumeSteps={resumeSteps} />
      { resumeSteps.preview && <div className="preview-download-wrapper">
        
        <PreviewResume getData={resumeFormData.formData}/>

        <PDFDownloadLink 
          className="download-btn"
          document={<PdfResume getData={resumeFormData.formData} />} 
          fileName="resume.pdf"
          >
            Download Resume-PDF
          </PDFDownloadLink>
      </div>}
      </>}
      </main>
    </>
  )
}

export default App

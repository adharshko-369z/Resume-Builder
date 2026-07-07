export default function PersonalDetails({formData,onChange}){

    const commonAttributes = {
        onChange : onChange,
        "data-section" : "personalDetails"
    }

    return(
        <>
        <section className="personal-details-section">
            <h2>Personal Details</h2>
            <h3>Basic Information</h3>
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" {...commonAttributes} value={formData.personalDetails.fullName} placeholder="Full Name"   required/>
            
            <label htmlFor="phoneNumber"> Phone Number: </label>  
            <input type="tel" id="phoneNumber" name="phoneNumber" {...commonAttributes} value={formData.personalDetails.phoneNumber} placeholder="Phone Number"  required/>

            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email"  {...commonAttributes} value={formData.personalDetails.email} placeholder="Email " required/>
            
            <h3>Location</h3>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" {...commonAttributes} value={formData.personalDetails.city} placeholder="City"  required/>
        
            <label htmlFor="district">District:</label>
            <input type="text" id="district" name="district" {...commonAttributes} value={formData.personalDetails.district} placeholder="District"  required/>

            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" {...commonAttributes} value={formData.personalDetails.state} placeholder="State"  required/>

            <h3>Proffesional Links</h3>
            <label htmlFor="githubUrl">GitHub:</label> 
            <input type="url" id="githubUrl" name="github"{...commonAttributes} value={formData.personalDetails.github} placeholder="https://github.com/username"  />
            
            <label htmlFor="linkedinUrl">LinkedIn:</label>
            <input type="url" id="linkedinUrl" name="linkedin"{...commonAttributes} value={formData.personalDetails.linkedin} placeholder="https://linkedin.com/username" />
        </section> 
        </>
    )
}
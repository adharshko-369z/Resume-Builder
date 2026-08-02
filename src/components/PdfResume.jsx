import { Document, Page, Text, View, Link , StyleSheet } from '@react-pdf/renderer'



export default function PdfResume({getData}){
    
    const styles = StyleSheet.create({
    page :{
        flexDirection : "column",
        backgroundColor : "#FFFFFF",
        color : "#161616",
        paddingTop : 40,
        paddingBottom : 40,
        paddingLeft : 50,
        paddingRight: 50
    },
    name : {
        fontWeight : "bold",
        fontSize : 18,
        paddingBottom : 10
    },
    sectionHeading : {
        fontSize :  12,
        fontWeight : "bold",
        marginTop : 10,
        marginBottom : 5
    },
    textBold :{
        fontWeight : "bold"
    },
    paragraph : {
        fontSize : 10,
        lineHeight : 1.6
    },
    links : {
        color : "#161616"
    },
    contactData : {
        flexDirection : "row",
        flexWrap : "wrap",
        gap : 5
    },
    locationData :{
        flexDirection : "row",
        paddingTop : 10,
        gap : 2
    },
    educationData : {
        flexDirection : "row",
        gap : 5,
    },
    skillContainer :{
        flexDirection : "row",
        gap : 5,
        paddingTop : 0,
        paddingBottom : 0
    },
    listItemContanier : {
        paddingTop : 5,
        paddingBottom : 5,
        paddingLeft : 10,
        paddingRight : 10
        
    },
    projectLink :{
        flexDirection : "row",
        gap : 3
    },
    experienceTopStyle : {
        flexDirection : "row",
        gap : 3
    }
   
})


const projectsEl = getData.projects.map(project =>{
    return(
        <View key={project.id} style={[styles.paragraph, styles.listItemContanier]}>
            <Text style={styles.textBold}>{project.projectTitle}</Text>
            <Text style={{alignContent : "center"}}>{(project.technologies).replaceAll(", "," • ")}</Text>
            <Text>{project.description}</Text>
            <View>
                {project.projectGithub &&<View style={styles.projectLink}>
                    <Text>GitHub:</Text>
                    <Link style={styles.links} src={project.projectGithub}>{project.projectGithub.replace("https://", "")}</Link>
                </View>}
                {project.projectLiveLink && <View style={styles.projectLink}>
                    <Text>Live Link:</Text>
                    <Link style={styles.links} src={project.projectLiveLink}>{project.projectLiveLink.replace("https://", "")}</Link>
                </View>}
            </View>
        </View>
    )
})

const experiencesEl = getData.experiences.map(experience =>{
    return(
        <View key={experience.id} style={[styles.paragraph,styles.listItemContanier]}>
            <View style={styles.experienceTopStyle}>
                <Text>{experience.role}</Text>
                <Text>|</Text>
                <Text>{experience.experienceStartDate.split("-")[0]}-{experience.experienceEndDate.split("-")[0]}</Text>
            </View>
            <Text>{experience.companyName}</Text>
            <Text>{experience.description}</Text>
        </View>
    )
})

const skillsEl = getData.skills.map(skill =>{
    return(
        <View key={skill.id} style={[styles.paragraph, styles.listItemContanier,styles.skillContainer]}>
            <Text style={styles.textBold}>{skill.category}:</Text>
            <Text>{skill.skillsList}</Text>
        </View>
    )
})


return (
    <Document>
        <Page size="A4" style={styles.page}> 
            <View style={styles.name}>
                <Text>{getData.personalDetails.fullName}</Text>
            </View>
            
            <View style={[styles.paragraph,styles.contactData]}>
                <Text>{getData.personalDetails.phoneNumber}</Text>
                {getData.personalDetails.email && <Text>|</Text>}
                <Text>{getData.personalDetails.email}</Text>
                {getData.personalDetails.github && <Text>|</Text>}
                {getData.personalDetails.github && 
                <Link style={styles.links} src={getData.personalDetails.github}>{getData.personalDetails.github.replace("https://", "")}</Link>}
                {getData.personalDetails.linkedin && <Text>|</Text>}
                {getData.personalDetails.linkedin && 
                <Link style={styles.links} src={getData.personalDetails.linkedin} >{getData.personalDetails.linkedin.replace("https://www.", "")}</Link>}
            </View>
            <View style={[styles.locationData, styles.paragraph]}>
                <Text>{getData.personalDetails.city}</Text>
                {getData.personalDetails.district && <Text>,</Text>}
                <Text>{getData.personalDetails.district}</Text>
                {getData.personalDetails.state && <Text>,</Text>}
                <Text>{getData.personalDetails.state}</Text>
            </View>
            <View style={styles.summarySection}>
                <Text style={styles.sectionHeading}>Summary</Text> 
                <Text style={styles.paragraph}>{getData.summary.professionalSummary}</Text>     
            </View>
            <View>
                <Text style={styles.sectionHeading}>Skills</Text>
                {skillsEl}
            </View>
            <View>
                <Text style={styles.sectionHeading}>Projects</Text>
                {projectsEl}
            </View>
            <View>
                <Text style={styles.sectionHeading}>Experiences</Text>
                {experiencesEl}
            </View>
            <View>
                  <Text style={styles.sectionHeading}>Education</Text>
                  <View style={[styles.paragraph,styles.educationData]}>
                    <Text style={styles.textBold}>{getData.education.degreeName}</Text> 
                    <Text>-</Text>
                    <Text>{getData.education.institution}</Text>
                    <Text>|</Text>
                    <Text>{getData.education.educationStartDate.split("-")[0]}-{getData.education.educationEndDate.split("-")[0]}</Text>
                  </View>
            </View>
        </Page>              
    </Document>  

)
}
export default function RenderCV(props) {
    return (
        <div className="resume">
            <div className="contact--name">
                <h1>{props.contactData.firstName} {props.contactData.lastName}</h1>
                <h2 className="contact--position">{props.contactData.position}</h2>
            </div>
            <div className="contact--info">
                <h2>Email: {props.contactData.email}</h2>
                <h2>Phone: {props.contactData.phoneNumber}</h2>
            </div>
            <div className="description--info">
                <h2 className="description--title">About Me</h2>
                <p className="description--list">{props.contactData.description}</p>            
            </div>
            <h1 className="experience--title">Experience</h1>
            <div className="job--title">
                <h1>{props.contactData.jobTitle}</h1>
                <h2>{props.contactData.startYear} - {props.contactData.endYear}</h2>
            </div>
            <div className="job--info">
                <h2>{props.contactData.company}</h2>
                <h2>{props.contactData.jobLocation}</h2>
            </div>
            <h1 className="education--title">Education</h1>
            <div className="university--title">
                <h2>{props.contactData.university}</h2>
                <h2>{props.contactData.universityLocation}</h2>
            </div>
            <div className="university--info">
                <h2>{props.contactData.degree} in {props.contactData.major}</h2>
                <h2>{props.contactData.degreeStartYear} - {props.contactData.degreeEndYear}</h2>
            </div>
        </div>
    )
}
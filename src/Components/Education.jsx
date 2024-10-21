import React from 'react'
import image from '../images/education.png'
import srmLogo from '../images/srm_logo.png'
import grmLogo from '../images/grm_logo.png'
const imageAltText = "Linkedin Education section screenshot";


function Education() {
  return (
    <section className="padding" id="education">
        <h2 style={{ textAlign: "center" }}>Education</h2>
        <div className='education_container'>
            <div style={{
                minHeight:"30%",
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                margin:"0 5%",
                borderBottom:"1px solid #4b4b4b",
            }}>
                <img src={srmLogo} style={{width:"10%",borderRadius:"50%"}} alt="" />
                <div className='details'>
                    <span className='institution'>SRMIST, Kattankulathur, Chennai, Tamil Nadu</span>
                    <span className='degree'  style={{
                        fontSize:"16px",
                        fontFamily:"inherit",
                        textAlign:"left"
                    }}>Bachelor of Technology - Btech, Computer Science</span>
                    <span className='duration'  style={{
                        fontSize:"16px",
                        fontFamily:"inherit",
                        textAlign:"left"
                    }}>Aug 2023 - Aug 2027</span>
                    <span className='cgpa'  style={{
                        fontSize:"16px",
                        fontFamily:"inherit",
                        textAlign:"left"
                    }}>Grade:&nbsp; Sem 1- 8.91 &nbsp; Sem 2- 9.52 &nbsp; Avg- 9.21</span>
                </div>
            </div>
            <div style={{
                minHeight:"30%",
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                margin:"0 5%",
                borderBottom:"1px solid #4b4b4b"
            }}>
                <img src={grmLogo} style={{width:"10%",borderRadius:"50%"}} alt="" />
                <div className='details'>
                    <span className='institution'>
                    Shri Gulab Rai Montessori Senior Secondary School</span>
                    <span className='degree'  style={{
                        fontSize:"16px",
                        fontFamily:"inherit",
                        textAlign:"left"
                    }}>Science, Class 12th, CBSE</span>
                    <span className='duration'  style={{
                        fontSize:"16px",
                        fontFamily:"inherit",
                        textAlign:"left"
                    }}>April 2022 - April 2023</span>
                    <span className='cgpa'  style={{
                        fontSize:"16px",
                        fontFamily:"inherit",
                        textAlign:"left"
                    }}>Percentage : 87.20 %</span>
                </div>
            </div>
            <div style={{
                minHeight:"30%",
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                margin:"0 5%",
            }}>
                <img src={grmLogo} style={{width:"10%",borderRadius:"50%"}} alt="" />
                <div className='details'>
                    <span className='institution'>
                    Shri Gulab Rai Montessori Senior Secondary School</span>
                    <span className='degree'  style={{
                        fontSize:"16px",
                        fontFamily:"inherit",
                        textAlign:"left"
                    }}>Class 10th, CBSE </span>
                    <span className='duration'  style={{
                        fontSize:"16px",
                        fontFamily:"inherit",
                        textAlign:"left"
                    }}>April 2020 - April 2021</span>
                    <span className='cgpa'  style={{
                        fontSize:"16px",
                        fontFamily:"inherit",
                        textAlign:"left"
                    }}>Percentage : 94 %</span>
                </div>
            </div>

        </div>
        
    </section>
  )
}

export default Education
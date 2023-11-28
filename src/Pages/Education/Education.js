import './Education.css'

function Education() {
  return (
    <div className='education'>
        <p className='education-title'>Education</p>
        <div className='transcript'>
            <div className='transcript-container'>
                <p className='transcript-title'>SFU Computer Science (Co-op)</p>
                <p className='transcript-date'>Expected Graduation: Fall 2027</p>
                <p className='transcript-courses-title'>Primary Courses:</p>
                <div className='transcript-section'>
                <p className='transcript-section-title'>Computer Science</p>
                <ul className='course-list'>
                    <li className='course'>CMPT 120: Programming I</li>
                    <li className='course'>CMPT 125: Programming II</li>
                    <li className='course'>CMPT 225: Data Structures and Algorithms</li>
                    <li className='course'>CMPT 276: Software Engineering</li>
                    <li className='course'>CMPT 295: Computer Systems</li>
                    <li className='course'>CMPT 354: Database Systems</li>
                </ul>
                </div>
                <div className='transcript-section'>
                <p className='transcript-section-title'>Mathematics</p>
                <ul className='course-list'>
                    <li className='course'>MACM 101: Discrete Mathematics</li>
                    <li className='course'>MATH 151: Differential Calculus</li>
                    <li className='course'>MATH 152: Integral Calculus</li>
                    <li className='course'>MATH 232: Linear Algebra</li>
                    <li className='course'>STAT 270: Probability and Statistics</li>
                </ul>
                </div>
                <div className='transcript-section'>
                <p className='transcript-section-title'>Business</p>
                <ul className='course-list'>
                    <li className='course'>Bus 200: Business Fundamentals</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Education;
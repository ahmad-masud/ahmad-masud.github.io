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
                    <li className='course'>Programming I (Python)</li>
                    <li className='course'>Programming II (C/C++)</li>
                    <li className='course'>Data Structures and Algorithms</li>
                    <li className='course'>Software Engineering</li>
                    <li className='course'>Computer Systems</li>
                    <li className='course'>Database Systems</li>
                </ul>
                </div>
                <div className='transcript-section'>
                <p className='transcript-section-title'>Mathematics</p>
                <ul className='course-list'>
                    <li className='course'>Discrete Mathematics</li>
                    <li className='course'>Differential Calculus</li>
                    <li className='course'>Integral Calculus</li>
                    <li className='course'>Linear Algebra</li>
                    <li className='course'>Probability and Statistics</li>
                </ul>
                </div>
                <div className='transcript-section'>
                <p className='transcript-section-title'>Business</p>
                <ul className='course-list'>
                    <li className='course'>Business Fundamentals</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Education;
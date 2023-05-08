import './Info.css';

function Info() {
  return (
    <div className='info'>
      <div className='info-container'>
        <header className="info-main-header">Nice to Meet You</header>
        <p className='info-paragraph'>
          <span>
            Hello! My name is <span className='highlight'>Ahmad Masud</span> and I am a motivated and dedicated individual currently pursuing my education at Simon 
            Fraser University. I thrive in a professional environment that encourages learning and fosters collaboration to solve 
            complex challenges efficiently and effectively.
          </span>
          <span>
            As an aspiring <span className='highlight'>software engineer</span>, I am deeply passionate about computer programming and constantly strive to innovate 
            and create solutions that make a positive impact on the world. I believe in the power of creativity and critical 
            problem-solving skills, and I am committed to leveraging these attributes to excel in the field of <span className='highlight'>Computer Science.</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Info;

import './AboutComponent.css';
import profileImage from '../../Images/profile.png';


function AboutComponent() {
  return (
    <div className='about'>
      <img src={profileImage} className='about-image'></img>
      <div className='about-container'>
        <header className='about-header'>Interests</header>
        <p className='about-paragraph'>
          Hello there! My name is Ahmad, and I attend Simon Fraser University to study computer science. 
          Web development, application development, and computer time complexity are some of my current 
          interests. I enjoy discovering new ideas and taking on challenging tasks.
        </p>
      </div>
      <div className='about-container'>
        <header className='about-header'>Passion</header>
        <p className='about-paragraph'>
          When I understood that technology was the best balancer, I fell in love with it. It provides chances for the unfortunate, 
          a platform for everyone to connect, and a voice for individuals who lack one. As a result, I make it 
          a point to have an impact in whatever I do.
        </p>
      </div>
      <div className='about-container'>
        <header className='about-header'>How I got here</header>
        <p className='about-paragraph'>
          I started off my watching a few youtube tutorials on HTML and CSS and got really excited about
          created my first website. I already knew the most of Javascript as I had learned it at school
          so I was ready to start my web development journey. Fast-forward a year I have learned HTML, CSS,
          Javascript, Java, Python, C, C++ and React. My journey is not over and I have still much too learn
          and I can not wait to see what is ahead of me.
        </p>
      </div>
    </div>
  );
}

export default AboutComponent;
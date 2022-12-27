import './AboutComponent.css';
import profileImage from '../../Images/profile.jpg'


function AboutComponent() {
  return (
    <div className='about'>
      <img src={profileImage} className='about-image'></img>
      <p className='about-paragraph'>
        Hello there! My name is Ahmad, and I attend Simon Fraser University to study computer science. 
        Web development, application development, and computer time complexity are some of my current 
        interests. I enjoy discovering new ideas and taking on challenging tasks.
      </p>
      <p className='about-paragraph'>
        When I understood that technology was the best balancer, I fell in love with it. It provides chances for the unfortunate, 
        a platform for everyone to connect, and a voice for individuals who lack one. As a result, I make it 
        a point to have an impact in whatever I do.
      </p>
    </div>
  );
}

export default AboutComponent;
import './ExperienceComponent.css';
import walmartImage from './walmart.png';
import kungfuImage from './kungfu.png'

function ExperienceComponent() {
  return (
    <div className='experience'>
      <header className='experience-header'>Experience <span>#</span></header>
      <div className='experience-container'>
        <img className='experience-image' src={kungfuImage}></img>
        <div className='experience-info-container'>
          <a className='experience-date'>03/2021 {'-'} 04/2021</a>
          <header className='experience-title experience-title-1'>Game Tester ⋅ Kung Fu Factory Games</header>
          <p className='experience-paragraph'>
            In grade 12, I took a job as a game tester at Kung Fu Factory Games. I did not get
            paid for the job and it was purely for experience. I had to look for bugs in mobile
            games and record myself playing the game to create of visual of the bug and write reports
            on each trial.
            
          </p>
          <ul className='experience-list'>
            <li className='experience-list-item'>
              Participated in product design reviews to provide input on functional requirements, 
              product designs, schedules, or potential problems
            </li>
            <li className='experience-list-item'>
              Generated written reports to detail discrepancies found during 
              game testing
            </li>
            <li className='experience-list-item'>
              Troubleshot bugs to find the root cause and improve data collection methods
            </li>
          </ul>
        </div>
      </div>
      <div className='experience-container'>
        <img className='experience-image' src={walmartImage}></img>
        <div className='experience-info-container'>
          <a className='experience-date'>10/2021 {'-'} Current</a>
          <header className='experience-title experience-title-2'>Store Standards Associate ⋅ Walmart</header>
          <p className='experience-paragraph'>
            I applied at walmart in october of 2021 and since then I have been a Store Standards
            Associate there. I love my job and love helping customers and moving stuff around the Store
            and pushing carts.
          </p>
          <ul className='experience-list'>
            <li className='experience-list-item'>
              Handled client inquiries with exceptional professionalism and enthusiasm
            </li>
            <li className='experience-list-item'>
              Informed customers about product lines and services offered by the company
            </li>
            <li className='experience-list-item'>
              Provided customer service and issue resolution to increase QA satisfaction levels
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent;

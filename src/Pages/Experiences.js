import Experience from '../Components/Experience/Experience.js';
import Header from '../Components/Header/Header.js';
import KungFuImage from '../Images/Kungfu.png';
import WalmartImage from '../Images/Walmart.png';
import Fade from 'react-reveal/Fade';

function Experiences() {
  return (
    <div className='experiences'>
      <Fade>
        <Header text='Experiences' />
      </Fade>
      <Fade left>
        <Experience 
          image={KungFuImage} 
          date={'03/2021 - 04/2021'}
          title={'Game Tester ⋅ Kung Fu Factory Games'}
          titleColor={'red'}
          paragraph={
            `In grade 12, I took a job as a game tester at Kung Fu Factory Games. I did not get
            paid for the job and it was purely for experience. I had to look for bugs in mobile
            games and record myself playing the game to create of visual of the bug and write reports
            on each trial.`
          }
          listItems={[
            `Participated in product design reviews to provide input on functional requirements, 
            product designs, schedules, or potential problems`,
            `Generated written reports to detail discrepancies found during 
            game testing`,
            `Troubleshot bugs to find the root cause and improve data collection methods`,
          ]}
        />
      </Fade>
      <Fade right>
        <Experience 
          image={WalmartImage} 
          date={'10/2021 - Current'}
          title={'Store Standards Associate ⋅ Walmart'}
          titleColor={'rgb(0,150,255'}
          paragraph={
            `I applied at walmart in october of 2021 and since then I have been a Store Standards
            Associate there. I love my job and love helping customers and moving stuff around the Store
            and pushing carts.`
          }
          listItems={[
            `Handled client inquiries with exceptional professionalism and enthusiasm`,
            `Informed customers about product lines and services offered by the company`,
            `Provided customer service and issue resolution to increase QA satisfaction levels`,
          ]}
        />
      </Fade>
    </div>
  );
}

export default Experiences;
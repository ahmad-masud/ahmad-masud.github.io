import './Header.css';
import Jello from 'react-reveal/Jello';

function Header(props) {
  return (
    <div className='header'>
      <Jello>
        <header className='header-text'>{props.text}</header>
      </Jello>
    </div>
  );
}

export default Header;
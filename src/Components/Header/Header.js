import './Header.css';

function Header(props) {
  return (
    <div className='header'>
      <div className='header-container'>
        <header className='header-text'>{props.text}</header>
      </div>
    </div>
  );
}

export default Header;
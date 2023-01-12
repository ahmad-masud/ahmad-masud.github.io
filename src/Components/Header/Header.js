import './Header.css';

function Header(props) {
  return (
    <div className='header'>
      <header className='header-text'>{props.text}</header>
    </div>
  );
}

export default Header;
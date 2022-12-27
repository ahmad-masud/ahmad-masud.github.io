import './Header.css';

function Header(props) {
  return (
    <div className='header'>
        <header className='header-text'>{props.text} <span>#</span></header>
    </div>
  );
}

export default Header;
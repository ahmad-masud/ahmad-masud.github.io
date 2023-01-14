import './Title.css';

function Title(props) {
    return (
        <div className='title'>
            <header className='title-text'><i className="fa-solid fa-diagram-project"></i> {props.text}</header>
        </div>
    )
}

export default Title;
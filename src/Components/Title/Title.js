import './Title.css'

function Title(props) {
    return (
        <div className='title'>
            <header className='title-text'>{props.text}</header>
        </div>
    )
}

export default Title;
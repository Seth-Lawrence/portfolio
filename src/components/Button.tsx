type ButtonProps = {
    handleClick: Function;
    text: string;
}


const Button = (props : ButtonProps) => {
    return (
        <button className='Button' onClick={(): void => { props.handleClick(props.text); }}>{props.text}</button>
    )
}

export default Button;

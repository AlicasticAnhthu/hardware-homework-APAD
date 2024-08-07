function CustomButton (props){
    function EventHandler () {
        console.log(props.button_alert);
    }
    return(
        <div>
            <button onClick = {EventHandler}>
                <h1>{props.button_name}</h1>
            </button>
        </div>
    );
}

export default CustomButton;
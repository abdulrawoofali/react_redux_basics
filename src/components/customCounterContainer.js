import React, {useState} from 'react';

const  CustomCounterContainer = (props) => {
    const [inputCounter, setInputCounter] = useState(0);
    const handleClick = (event) => {

    };
    return (
        <>
            <p>{props.counter}</p>
            <textarea
                onChange={(event)=> {setInputCounter(event.target.value)}}
                value={inputCounter}
            />
            <button onClick={(event) => {handleClick(event)}}>submit</button>
        </>
    )
};

export default CustomCounterContainer;

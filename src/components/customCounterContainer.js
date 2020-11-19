import React, {useState} from 'react';
import {connect} from "react-redux";
import {multipleCounterIncrementActionCreator} from '../redux/customCounter/actionCreator'

const  CustomCounterContainer = (props) => {
    const [inputCounter, setInputCounter] = useState(0);
    const handleClick = (event) => {
        props.multipleCounterIncrementActionCreator(parseInt(inputCounter, 10));
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

const mapStateToProps = (state) => {
    return {
        counter: state.multipleCounterReducer.multipleCounter
    }
};

export default connect(mapStateToProps, {
    multipleCounterIncrementActionCreator
})(CustomCounterContainer);

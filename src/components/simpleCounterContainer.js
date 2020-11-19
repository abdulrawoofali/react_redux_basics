import React from 'react';
import {connect} from "react-redux";
import {decrementSimpleCounterActionCreator, incrementSimpleCounterActionCreator} from '../redux/simpleCounter/actionCreator';

const  simpleCounterContainer = (props) => {
    const handleClick = (type, event) => {
        switch (type) {
            case "inr":
                props.decrementSimpleCounterActionCreator();
                break;
            case "dcr":
                props.incrementSimpleCounterActionCreator();
                break;
            default:
                return;
        }
    };
    return (
        <>
            <p>{props.xyz} {props.myCounter}</p>
            <button onClick={(event) => {handleClick("inr", event)}}>increment</button>
            <button onClick={(event) => {handleClick("dcr", event)}}>decrement</button>
        </>
    )
};
const mapStateToProps = (state) => {
    return {
        myCounter: state.simpleCounter.counter,
        xyz: "hello"
    }
};

export default connect(mapStateToProps, {
        decrementSimpleCounterActionCreator,
        incrementSimpleCounterActionCreator
    }
)(simpleCounterContainer);

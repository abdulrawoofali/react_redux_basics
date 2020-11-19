import React from 'react';
import {connect} from "react-redux";

const Display =  (props) => {
    return (
        <>
            <p>{props.counter}</p>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state.simpleCounter.counter
    }
};

export default connect(mapStateToProps, null)(Display);

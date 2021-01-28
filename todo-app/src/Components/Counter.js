import React from 'react'
import { connect } from 'react-redux'

const Counter = (props) => {
    return (
        <div>
            {props.count}
            <button onClick={props.handleIncrementClick}>+</button>
            <button onClick={props.handleDecrementClick}>-</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
        handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

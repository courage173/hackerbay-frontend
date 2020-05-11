import React from 'react';
import './square.css';


function Square(props) {
    function displayMatrix() {
        return props.data.map((item, i) => (
            <div className='square' key={i}>
                {item}
            </div>
        ))
    }
    return (
        <div className='rows'>
            {displayMatrix()}
        </div>
    )
}

export default Square

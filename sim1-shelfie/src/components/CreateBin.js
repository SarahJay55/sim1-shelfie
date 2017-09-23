import React from 'react'
import '../index.css';
function CreateBin(props) {
    return (
    <div className='bin'>
        <h1>Bin {props.binNum + 1}</h1>
    </div>
    )
}

export default CreateBin
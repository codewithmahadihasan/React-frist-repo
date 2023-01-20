import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";

import "./Result.css"

const Result = (props) => {
    const [inputValue, setInputValue] = useState(0);
    const [value, setValue] = useState([])
    useEffect(() => {
        const button = localStorage.setItem('value', value)
        setValue(button)
    }, [value])
    const buttonHandeler = () => {
        Swal.fire(
            'Wow This Is Amazing',
            'One Day I solve my All Problem',
            'success'
        )
    }

    return (
        <div className='all-info'>

            <div className='info'>
                <img src="https://avatars.githubusercontent.com/u/73072248?v=4" alt="" />
                <div>
                    <h4>Mahadi Hasan</h4>
                    <p>
                        <i className='fa-solid fa-location-dot'></i> Mirpur, Dhaka</p>
                </div>
            </div>
            <div className='personal-info'>
                <div>
                    <h5>Weight</h5>
                    <p>75 KG</p>
                </div>
                <div>
                    <h5>Age</h5>
                    <p>22</p>
                </div>
                <div>
                    <h5>Hight</h5>
                    <p>5.8</p>
                </div>
            </div>
            <h3>Add A Break</h3>
            <div className='brack'>
                <button onClick={() => setInputValue(10)}>10</button>
                <button onClick={() => setInputValue(20)}>20</button>
                <button onClick={() => setInputValue(30)}>30</button>
                <button onClick={() => setInputValue(40)}>40</button>
                <button onClick={() => setInputValue(50)}>50</button>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <div className='result-time'>
                    <h5 className='brack'>
                        Exercise time : <p>{props.total} Minute</p>
                    </h5>
                    <h5 className='brack'>
                        Break time : <p>{inputValue} Minute</p>

                    </h5>
                </div>
            </div>
            <button onClick={buttonHandeler}>Activity Completed</button>
        </div>
    );
};

export default Result;
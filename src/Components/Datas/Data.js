import React from 'react';
import './Data.css'

const Data = (props) => {

    const { name, picture, time, spend } = props.data

    return (
        <div className='datas'>
            <div className='data'>
                <img src={picture} alt="" />
                <h2>{name}</h2>
                <p>Time : {time} O Clock</p>
                <p> Spend Time: {spend} Minuite</p>
                <button onClick={() => { props.click(props.data) }}>Add to list</button>

            </div>
        </div>
    );
};

export default Data;
import React from 'react';
import Data from '../Datas/Data';
import Result from '../Result/Result';
import './Card.css'

const Card = (props) => {
    const datas = props.datas

    return (
        <div className='display'>
            <div className='datas'>
                {
                    datas.map(data => <Data key={data.id} data={data} click={props.clickButton}></Data>)
                }

            </div>
            <div>
                <Result cart={props.cart} total={props.total}></Result>
            </div>
        </div>
    );
};

export default Card;
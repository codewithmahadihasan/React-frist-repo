import { counter } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Question from '../Question/Question';
import './Home.css'



const Home = () => {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    const [cart, setCart] = useState([])

    const clickButton = (data) => {
        const newCart = [...cart, data]
        setCart(newCart)
    }
    let total = 0;
    for (const time of cart) {
        total = total + time.spend
    }

    return (
        <div>
            <div className='nav'>
                <h1><i className='fa-solid fa-medal'></i> Dhaka Fitness</h1>
            </div>
            <h2>Select today's exercise</h2>
            <Card datas={datas} total={total} clickButton={clickButton} cart={cart}></Card>
            <Question></Question>

        </div>
    );
};

export default Home;
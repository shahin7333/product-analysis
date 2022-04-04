import React, { useState, useEffect } from 'react';
import Comment from '../Comment/Comment';
import img from '../img/ice-cream.png';
import './Home.css'

const Home = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('comments.json')
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);
    return (
        <div>
            <div className='home-page-container'>
                <div className='page-title'>
                    <h1>YOU WILL KNOW</h1>
                    <h1 className='good-food'>GOOD FOOD</h1>
                    <p><b>Good food good mood.</b>We're all about good recipes, and about quality home cooking that everyone can enjoy.You will get the natural environmental place here.Also get many awesome services.</p>
                    <button>Order</button>
                </div>
                <div className='img-home'>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='reviews'>
                <h1>CUSTOMER REVIEWS({comments.length})</h1>
                <div className='review-container'>
                    {
                        comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                    }
                </div>
                <button className='see-all-reviews'>See all reviews</button>

            </div>
        </div>

    );
};

export default Home;
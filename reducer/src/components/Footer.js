import React from 'react';
import guitar from '../img/g-icon.jpg';
import '../App.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <h3>Learn to play guitar</h3>
                <a href="https://youtu.be/2fPrnwS9qi4">The BEST Way to Change Acoustic Guitar Strings</a>
                <a href="https://youtu.be/7si11pQ5mgw">How to Tune a Guitar For Beginners</a>
                <a href="https://youtu.be/cUxRhesT8gY">Guitar Lesson - How To Play Your First Chord

</a>
               
            </div>
            <div className='footer-misc'> 
                <img src={guitar} className='guitar' alt='guitar' />

            </div>
        </footer>
    )
}

export default Footer;
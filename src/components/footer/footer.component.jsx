import React from "react";

import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return(
        <div className='pa5'>
            <div className=''>
                <p className='mt4 mb1 f3 b'>LÓGAN</p>
            </div>
            <div className='flex justify-center pa3'>
                <p className='ph2'><FaEnvelope/> logiharaldss@gmail.com</p>
                <p className='ph2'></p>
                <p className='ph2'><FaPhoneAlt/>  {' +354-661-9613'}</p>
                
            </div>
            <div>
            <p>©LogiHaraldsson</p>
            </div>
        </div>
    );
};

export default Footer;
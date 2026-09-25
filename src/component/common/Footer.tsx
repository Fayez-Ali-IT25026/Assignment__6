import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-[#000000] text-white border-white/15 container mx-auto">
            <div>
                <Image src={Logo} alt=" Fit Logo" />
                <p>FITLOG</p>
            </div>
            <div>
                <p className='text-gray-400'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;
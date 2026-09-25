import React from 'react';
import Logo from '@/assets/logo.png';
import Image from 'next/image';


const Navbar = () => {
    return (
        <div>
        <nav className="flex justify-between items-center p-4 bg-[#000000] text-white border-white/15 container mx-auto">
            <div className="flex items-center gap-2">
                 <Image src={Logo} alt=" Fit Logo" />
                 <p>FITLOG</p>
            </div>
            <div className="flex gap-4">
                <p>Workouts</p>
                <p>My Plan</p>
            </div>
            <div className="flex gap-4">
                <p>Plan</p>
                <p>Saved</p>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
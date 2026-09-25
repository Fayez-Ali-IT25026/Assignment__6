import React from 'react';

const Library = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', { cache: 'no-store' });
    const data = await res.json();
    console.log(data,"Library Data");


  return (
        <div>
            <div>
                <p className="text-2xl font-bold">THE LIBRARY</p>
                <p className="text-gray-300">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
        </div>
    );
};

export default Library;
import React from 'react';
import download from "../../shared/assets/download.png"

const HomePage = () => {
    return (
            <div className="flex flex-col gap-12 relative font-body dark:bg-gray-800 bg-white dark:text-white w-full">

                <div className="flex flex-col items-center justify-center gap-4 text-center mt-[100px]">
                    <span className="font-bold text-[40px] tracking-tighter">
                        It's Now <span className="text-pink-500">More Easy</span> to <span className="text-yellow-500">Order</span><br/>
                        by Our Mobile <span className="text-pink-500">App</span>
                    </span>
                    <span>
                        All you need to do is downlode one of the best delivery apps, make a and most companies are opting for mobile app devlopment for food delivery
                    </span>
                    <img src={download} className='w-[300px]'/>
                </div>
            </div>
    );
}

export default HomePage;

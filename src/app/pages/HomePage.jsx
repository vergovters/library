
import download from "../../shared/assets/download.png";
import SearchBar from '../components/SearchBar';

const HomePage = () => {
   
    return (
        <div className="flex flex-col items-center justify-center relative font-body dark:bg-gray-800 bg-white dark:text-white w-full">
            <h1 className="text-5xl font-bold tracking-tight mb-6 font-body">
                The <span className="text-yellow-500 ">Best</span> Choice For Your <span className="text-pink-500">Reading</span>
            </h1>
                <span className="text-xl mb-3">Book is just waiting for you!</span>
            <SearchBar />
            <div className="flex flex-col items-center justify-center gap-4 text-center mt-[100px]">
                <span className="font-bold text-[40px] tracking-tighter">
                    It's Now <span className="text-pink-500">More Easy</span> to <span className="text-yellow-500">Read</span><br/>
                    by Our Mobile <span className="text-pink-500">App</span>
                </span>
                <span>
                    All you need to do is download one of the best delivery apps, make a and most companies are opting for mobile app development for food delivery
                </span>
                <img src={download} className='w-[300px]'/>
            </div>
        </div>
    );
}

export default HomePage;
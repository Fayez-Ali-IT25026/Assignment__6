import Image from "next/image";
import banner from "@/assets/banner.png";

const Banner = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-[#222630] text-white border-white/15 container mx-auto rounded-2xl m-10 mx-7">
            <div >
                <p className="text-[#C2F800]">
                    WORKOUT LIBRARY
                </p>
                <h1 className="text-4xl font-bold">TRAIN WITH INTENT. LOG <br/> EVERY SET.</h1>
                <p className="text-gray-300">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/> into todays plan, and watch the weeks work add up.
                </p>
                <button className="bg-[#C2F800] text-[#000000] font-bold py-2 px-4 rounded hover:bg-[#a8d500]">
                    BROWSE WORKOUTS
                </button>
            </div>
            <div>
                <Image src={banner} alt="banner" />
            </div>
        </div>
    );
};

export default Banner;
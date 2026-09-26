import Image from "next/image";
import banner from "@/assets/banner.png";

const Banner = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-[#222630] text-white border-white/15 container mx-auto rounded-2xl m-10 mx-7">
            <div >
                <p className="text-[#C2F800] pb-2 text-sm font-bold tracking-widest">
                    WORKOUT LIBRARY
                </p>
                <h1 className="text-4xl font-bold pb-5">TRAIN WITH INTENT. LOG <br/> EVERY SET.</h1>
                <p className="text-gray-300 pb-5">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/> into today's plan, and watch the week's work add up.
                </p>
                <button className="bg-[#C2F800] text-[#000000] font-bold py-2 px-4 rounded hover:bg-[#a8d500]">
                    <a
    href="#library"
    className="..."
>
    BROWSE WORKOUTS
</a>
                </button>
            </div>
            <div>
                <Image src={banner} alt="banner" />
            </div>
        </div>
    );
};
 
export default Banner;
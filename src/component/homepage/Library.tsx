import { Tcard } from "@/types/card.type";
import FileCard from "@/component/share/Fitcard";

const getAllData = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', { cache: 'no-store' });
    const data = await res.json();
   
    return data;
}

const Library = async() => {
    const data = await getAllData();
     console.log(data,"Library Data");


  return (
        <div className = "container mx-auto">
            <div>
                <p className="text-2xl font-bold">THE LIBRARY</p>
                <p className="text-gray-300">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            <div >
                {data.map((item:Tcard,ind:number) => {
                return (
                    <FileCard key={ind} exercise={item} />
                )})}
            </div>
        </div>
    );
};

export default Library;
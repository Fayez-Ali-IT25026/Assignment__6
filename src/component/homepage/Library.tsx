import { Tcard } from "@/types/card.type";
import Fitcard from "@/component/share/Fitcard";

const getAllData = async (): Promise<Tcard[]> => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog",
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch workouts");
    }

    const data = await res.json();

    return data;
};

const Library = async () => {
    const data = await getAllData();

    return (
        <section id="library" className="container mx-auto px-4 py-16">
            
            {/* Heading */}
            <div className="mb-10">
                <p className="text-2xl font-bold">
                    THE LIBRARY
                </p>

                <p className="text-gray-400">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Workout Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data.map((item: Tcard) => (
                    <Fitcard
                        key={item.id}
                        exercise={item}
                    />
                ))}
            </div>

        </section>
    );
};

export default Library;
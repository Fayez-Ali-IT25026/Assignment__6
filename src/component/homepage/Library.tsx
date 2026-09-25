import { Tcard } from "@/types/card.type";
import LibrarySort from "./LibrarySort";

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
        <section
            id="library"
            className="container mx-auto px-4 py-16"
        >
            <div className="mb-10">
                <p className="text-2xl font-bold">
                    THE LIBRARY
                </p>

                <p className="text-gray-400">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <LibrarySort data={data} />
        </section>
    );
};

export default Library;
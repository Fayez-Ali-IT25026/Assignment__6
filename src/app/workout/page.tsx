import { Tcard } from "@/types/card.type";

type WorkoutDetailsProps = {
    params: Promise<{
        id: string;
    }>;
};

const getWorkout = async (id: string): Promise<Tcard> => {
    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Workout not found");
    }

    return res.json();
};

const WorkoutDetails = async ({
    params,
}: WorkoutDetailsProps) => {

    const { id } = await params;

    const workout = await getWorkout(id);

    return (
        <main className="container mx-auto px-4 py-10">

            <h1 className="text-4xl font-bold">
                {workout.name}
            </h1>

            <p className="mt-4 text-gray-400">
                {workout.description}
            </p>

        </main>
    );
};

export default WorkoutDetails;
// src/app/workout/[id]/page.tsx

import { Tcard } from "@/types/card.type";
import Image from "next/image";

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

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                
                <div>
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={740}
                        height={700}
                        className="h-full max-h-[700px] w-full rounded-xl object-cover"
                    />
                </div>

                
                <div className="space-y-6">

                    
                    <div>
                        <h1 className="text-3xl font-bold uppercase md:text-4xl">
                            {workout.name}
                        </h1>

                        <p className="mt-3 text-base text-base-content/70">
                            {workout.description}
                        </p>
                    </div>

                    
                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="badge badge-primary"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    
                    <div>
                        <h2 className="mb-3 text-xl font-bold">
                            KEY SPECS
                        </h2>

                        <div className="space-y-2">

                            <div className="flex justify-between rounded-lg bg-base-200 p-3">
                                <span className="text-base-content/60">
                                    Equipment
                                </span>

                                <span className="font-semibold">
                                    {workout.equipment}
                                </span>
                            </div>

                            <div className="flex justify-between rounded-lg bg-base-200 p-3">
                                <span className="text-base-content/60">
                                    Difficulty
                                </span>

                                <span className="font-semibold">
                                    {workout.difficulty}
                                </span>
                            </div>

                            <div className="flex justify-between rounded-lg bg-base-200 p-3">
                                <span className="text-base-content/60">
                                    Sets
                                </span>

                                <span className="font-semibold">
                                    {workout.sets}
                                </span>
                            </div>

                            <div className="flex justify-between rounded-lg bg-base-200 p-3">
                                <span className="text-base-content/60">
                                    Reps
                                </span>

                                <span className="font-semibold">
                                    {workout.reps}
                                </span>
                            </div>

                            <div className="flex justify-between rounded-lg bg-base-200 p-3">
                                <span className="text-base-content/60">
                                    Duration
                                </span>

                                <span className="font-semibold">
                                    {workout.duration} min
                                </span>
                            </div>

                            <div className="flex justify-between rounded-lg bg-base-200 p-3">
                                <span className="text-base-content/60">
                                    Calories
                                </span>

                                <span className="font-semibold">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex justify-between rounded-lg bg-base-200 p-3">
                                <span className="text-base-content/60">
                                    Rating
                                </span>

                                <span className="font-semibold">
                                    ⭐ {workout.rating}
                                </span>
                            </div>

                        </div>
                    </div>

                  
                    <div>
                        <h2 className="mb-3 text-xl font-bold">
                            INSTRUCTIONS
                        </h2>

                        <ol className="space-y-3">
                            {workout.instructions.map(
                                (instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-3"
                                    >
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-content">
                                            {index + 1}
                                        </span>

                                        <p className="text-sm text-base-content/70">
                                            {instruction}
                                        </p>
                                    </li>
                                )
                            )}
                        </ol>
                    </div>

                    
                    <div className="flex flex-wrap gap-3">

                        <button className="btn btn-primary">
                            Add to todays plan
                        </button>

                        <button className="btn btn-outline">
                            Save for later
                        </button>

                    </div>

                </div>
            </div>
        </main>
    );
};

export default WorkoutDetails;
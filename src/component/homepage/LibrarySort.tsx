"use client";

import { useState } from "react";
import { Tcard } from "@/types/card.type";
import Fitcard from "@/component/share/Fitcard";

type LibrarySortProps = {
    data: Tcard[];
};

const LibrarySort = ({ data }: LibrarySortProps) => {
    const [sortBy, setSortBy] = useState("default");

    const sortedData = [...data].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        return 0;
    });

    return (
        <>
            <div className="mb-6 flex justify-end">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="select select-bordered"
                >
                    <option value="default">Sort By</option>
                    <option value="duration">Duration</option>
                    <option value="calories">Calories</option>
                    <option value="rating">Rating</option>
                </select>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sortedData.map((item) => (
                    <Fitcard
                        key={item.id}
                        exercise={item}
                    />
                ))}
            </div>
        </>
    );
};

export default LibrarySort;
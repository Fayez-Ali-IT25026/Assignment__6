"use client";

import Link from "next/link";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import Image from "next/image";
import { toast } from "react-toastify";

const MyPlan = () => {
    const {
        plan,
        saved,
        removeFromPlan,
        removeFromSaved,
    } = usePlan();

    const [activeTab, setActiveTab] =
        useState<"plan" | "saved">("plan");

    const workouts =
        activeTab === "plan" ? plan : saved;

    const totalMinutes = plan.reduce(
        (total, workout) =>
            total + workout.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) =>
            total + workout.caloriesBurned,
        0
    );

    return (
        <main className="container mx-auto px-4 py-10">

                                                                                                                 {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold uppercase">
                    MY PLAN
                </h1>

                <p className="mt-2 text-base-content/60">
                    Cap of five lifts for today. Finish them,
                    then load more.
                </p>
            </div>

                                                                                                                   {/* Metrics */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                {/* Exercises */}
                <div className="rounded-xl bg-base-200 p-5">
                    <p className="text-sm text-base-content/60">
                        EXERCISES
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                        {plan.length}
                    </p>
                </div>

                                                                                                                     {/* Minutes */}
                <div className="rounded-xl bg-base-200 p-5">
                    <p className="text-sm text-base-content/60">
                        MINUTES
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                        {totalMinutes}
                    </p>
                </div>

                                                                                                                       {/* Calories */}
                <div className="rounded-xl bg-base-200 p-5">
                    <p className="text-sm text-base-content/60">
                        CALORIES
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                        {totalCalories}
                    </p>
                </div>

            </div>

                                                                                                                            {/* Tabs */}
            <div className="mt-10 flex gap-3 border-b border-base-300 pb-3">

                <button
                    onClick={() => setActiveTab("plan")}
                    className={`btn ${
                        activeTab === "plan"
                            ? "btn-primary"
                            : "btn-ghost"
                    }`}
                >
                    Today's Plan ({plan.length})
                </button>

                <button
                    onClick={() => setActiveTab("saved")}
                    className={`btn ${
                        activeTab === "saved"
                            ? "btn-primary"
                            : "btn-ghost"
                    }`}
                >
                    Saved ({saved.length})
                </button>

            </div>

                                                                                                          {/* Workout List */}
            <div className="mt-8">

                {workouts.length === 0 ? (

                    /* Empty State */
                    <div className="py-20 text-center">

                        <h2 className="text-2xl font-bold">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-2 text-base-content/60">
                            Browse the library and add a lift
                            to get today moving.
                        </p>

                        <Link
                            href="/"
                            className="btn btn-primary mt-6"
                        >
                            Go to workouts
                        </Link>

                    </div>

                ) : (

                    <div className="space-y-4">

                        {workouts.map((workout) => (

                            <div
                                key={workout.id}
                                className="flex flex-col gap-5 rounded-xl bg-base-200 p-4 md:flex-row md:items-center"
                            >

                                                                                                                          {/* Image */}
                                <Image
                                    src={workout.image}
                                    alt={workout.name}
                                    width={192}
                                    height={128}
                                    className="h-32 w-full rounded-lg object-cover md:w-48"
                                />

                                                                                                                           {/* Workout Information */}
                                <div className="flex-1">

                                    <h2 className="text-xl font-bold uppercase">
                                        {workout.name}
                                    </h2>

                                    <p className="mt-1 text-sm text-base-content/60">
                                        {workout.equipment}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-4 text-sm">

                                        <span>
                                            ⏱ {workout.duration} min
                                        </span>

                                        <span>
                                            🔥 {workout.caloriesBurned} kcal
                                        </span>

                                        <span>
                                            ⭐ {workout.rating}
                                        </span>

                                    </div>

                                </div>

                                                                                                                                 {/* Actions */}
                                <div className="flex flex-wrap gap-2">

                                    {/* View Details */}
                                    <Link
                                        href={`/workout/${workout.id}`}
                                        className="btn btn-outline"
                                    >
                                        View Details
                                    </Link>

                                                                                                                   {/* Today's Plan Actions */}
                                    {activeTab === "plan" && (
                                        <>
                                                                                                                    {/* Mark as Done */}
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    removeFromPlan(
                                                        workout.id
                                                    );

                                                    toast.success(
                                                        `${workout.name} marked as done!`
                                                    );
                                                }}
                                            >
                                                ✓ Mark as Done
                                            </button>

                                                                                                                         {/* Remove */}
                                            <button
                                                className="btn btn-error btn-outline"
                                                onClick={() => {
                                                    removeFromPlan(
                                                        workout.id
                                                    );

                                                    toast.error(
                                                        `${workout.name} removed from plan!`
                                                    );
                                                }}
                                            >
                                                ✕
                                            </button>
                                        </>
                                    )}

                                                                                                                    {/* Saved Actions */}
                                    {activeTab === "saved" && (
                                        <button
                                            className="btn btn-error btn-outline"
                                            onClick={() => {
                                                removeFromSaved(
                                                    workout.id
                                                );

                                                toast.error(
                                                    `${workout.name} removed from saved!`
                                                );
                                            }}
                                        >
                                            ✕
                                        </button>
                                    )}

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </main>
    );
};

export default MyPlan;
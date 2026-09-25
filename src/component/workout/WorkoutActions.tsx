"use client";

import { Tcard } from "@/types/card.type";
import { usePlan } from "@/context/PlanContext";

type WorkoutActionsProps = {
    workout: Tcard;
};

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
    const {
        plan,
        saved,
        addToPlan,
        saveForLater,
    } = usePlan();

    const alreadyInPlan = plan.some(
        (item) => item.id === workout.id
    );

    const alreadySaved = saved.some(
        (item) => item.id === workout.id
    );

    return (
        <div className="flex flex-wrap gap-3">

            <button
                onClick={() => addToPlan(workout)}
                disabled={alreadyInPlan || plan.length >= 5}
                className="btn btn-primary"
            >
                {alreadyInPlan
                    ? "Already in today's plan"
                    : plan.length >= 5
                    ? "Plan is full"
                    : "Add to today's plan"}
            </button>

            <button
                onClick={() => saveForLater(workout)}
                disabled={alreadySaved}
                className="btn btn-outline"
            >
                {alreadySaved
                    ? "Already saved"
                    : "Save for later"}
            </button>

        </div>
    );
};

export default WorkoutActions;
"use client";

import { useState } from "react";

type WorkoutActionsProps = {
  workoutId: number;
};

const WorkoutActions = ({ workoutId }: WorkoutActionsProps) => {
  const [added, setAdded] = useState(false);

  const handleAddToPlan = () => {
    setAdded(true);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={handleAddToPlan}
        className="btn btn-primary"
      >
        {added ? "Added to today's plan" : "Add to today's plan"}
      </button>

      <button className="btn btn-outline">
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;
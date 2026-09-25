import { Tcard } from "@/types/card.type";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  exercise: Tcard;
};

const Fitcard = ({ exercise }: CardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl">

      {/* Image */}
      <figure>
        <Image
          src={exercise.image}
          alt={exercise.name}
          width={740}
          height={500}
          className="h-56 w-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">

        {/* Title + Difficulty */}
        <div className="flex items-center justify-between gap-2">
          <h2 className="card-title">
            {exercise.name}
          </h2>

          <div className="badge badge-primary">
            {exercise.difficulty}
          </div>
        </div>

        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {exercise.muscleGroups.map((muscle) => (
            <div
              key={muscle}
              className="badge badge-outline"
            >
              {muscle}
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-base-content/70">
          {exercise.description}
        </p>

        {/* Workout Information */}
        <div className="grid grid-cols-2 gap-3 mt-2">

          <div className="rounded-lg bg-base-200 p-3">
            <p className="text-xs text-base-content/60">
              Duration
            </p>
            <p className="font-semibold">
              {exercise.duration} min
            </p>
          </div>

          <div className="rounded-lg bg-base-200 p-3">
            <p className="text-xs text-base-content/60">
              Calories
            </p>
            <p className="font-semibold">
              {exercise.caloriesBurned} kcal
            </p>
          </div>

          <div className="rounded-lg bg-base-200 p-3">
            <p className="text-xs text-base-content/60">
              Sets
            </p>
            <p className="font-semibold">
              {exercise.sets}
            </p>
          </div>

          <div className="rounded-lg bg-base-200 p-3">
            <p className="text-xs text-base-content/60">
              Reps
            </p>
            <p className="font-semibold">
              {exercise.reps}
            </p>
          </div>

        </div>

        {/* Rating + Button */}
        <div className="card-actions items-center justify-between mt-3">

          <div>
            ⭐ {exercise.rating}
          </div>

          <Link
  href={`/workout/${exercise.id}`}
  className="btn btn-primary"
>
  View Details
</Link>

        </div>

      </div>
    </div>
  );
};

export default Fitcard;
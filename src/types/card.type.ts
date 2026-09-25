export type Tcard = {
    id:             number;
    name:           string;
    image:          string;
    muscleGroups:   string[];
    equipment:      string;
    difficulty:     Difficulty;
    duration:       number;
    caloriesBurned: number;
    sets:           number;
    reps:           string;
    rating:         number;
    description:    string;
    instructions:   string[];
}

export type Difficulty = "Intermediate" | "Advanced" | "Beginner";
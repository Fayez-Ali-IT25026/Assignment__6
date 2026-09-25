"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";
import { Tcard } from "@/types/card.type";
import { toast } from "react-toastify";

type PlanContextType = {
    plan: Tcard[];
    saved: Tcard[];

    addToPlan: (workout: Tcard) => void;
    saveForLater: (workout: Tcard) => void;

    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
};

const PlanContext = createContext<PlanContextType | undefined>(
    undefined
);

export const PlanProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
   const [plan, setPlan] = useState<Tcard[]>([]);
const [saved, setSaved] = useState<Tcard[]>([]);

useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
        setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
        setSaved(JSON.parse(storedSaved));
    }
}, []);


                                                                                           // it is addToPlan

   const addToPlan = (workout: Tcard) => {
    if (plan.length >= 5) {
        toast.error("You can add maximum 5 workouts.");
        return;
    }

    if (plan.some((item) => item.id === workout.id)) {
        toast.info("This workout is already in your plan.");
        return;
    }

    const newPlan = [...plan, workout];

    setPlan(newPlan);

    localStorage.setItem(
        "fitlog-plan",
        JSON.stringify(newPlan)
    );

    toast.success(`${workout.name} added to today's plan!`);
};
                                                                                           // addToPlan end



                                                                                          //saveForLater function
    const saveForLater = (workout: Tcard) => {
    if (saved.some((item) => item.id === workout.id)) {
        toast.info("This workout is already saved.");
        return;
    }

    const newSaved = [...saved, workout];

    setSaved(newSaved);

    localStorage.setItem(
        "fitlog-saved",
        JSON.stringify(newSaved)
    );

    toast.success(`${workout.name} saved for later!`);
};
                                                                                         //saveForLater function end



                                                                                          // removeFromPlan function
    const removeFromPlan = (id: number) => {
        setPlan((prev) => {
            const newPlan = prev.filter(
                (workout) => workout.id !== id
            );

            localStorage.setItem(
                "fitlog-plan",
                JSON.stringify(newPlan)
            );

            return newPlan;
        });
    };
                                                                                              // removeFromPlan function end


                                                                                                  // removeFromSaved function
    const removeFromSaved = (id: number) => {
        setSaved((prev) => {
            const newSaved = prev.filter(
                (workout) => workout.id !== id
            );

            localStorage.setItem(
                "fitlog-saved",
                JSON.stringify(newSaved)
            );

            return newSaved;
        });
    };
                                                                                                    // removeFromSaved function end
    return (
        <PlanContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                saveForLater,
                removeFromPlan,
                removeFromSaved,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export const usePlan = () => {
    const context = useContext(PlanContext);

    if (!context) {
        throw new Error(
            "usePlan must be used inside PlanProvider"
        );
    }

    return context;
};
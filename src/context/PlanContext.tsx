"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

import { Tcard } from "@/types/card.type";

type PlanContextType = {
  plan: Tcard[];
  saved: Tcard[];
  addToPlan: (workout: Tcard) => void;
  saveForLater: (workout: Tcard) => void;
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

  const addToPlan = (workout: Tcard) => {
    setPlan((prev) => {
      if (prev.length >= 5) {
        return prev;
      }

      if (prev.some((item) => item.id === workout.id)) {
        return prev;
      }

      const newPlan = [...prev, workout];

      localStorage.setItem(
        "fitlog-plan",
        JSON.stringify(newPlan)
      );

      return newPlan;
    });
  };

  const saveForLater = (workout: Tcard) => {
    setSaved((prev) => {
      if (prev.some((item) => item.id === workout.id)) {
        return prev;
      }

      const newSaved = [...prev, workout];

      localStorage.setItem(
        "fitlog-saved",
        JSON.stringify(newSaved)
      );

      return newSaved;
    });
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveForLater,
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
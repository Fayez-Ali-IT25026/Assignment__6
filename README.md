FitLog — Workout Library

FitLog is a modern workout library web application where users can explore different workouts, view workout details, build a personal workout plan, and save workouts for later.

Built with Next.js, React, TypeScript, Tailwind CSS, and DaisyUI.

Technologies Used
Next.js
React
TypeScript
Tailwind CSS
DaisyUI
React Toastify
REST API
LocalStorage
Next.js Image
React Context API
Features
1. Workout Library

Browse a library of workouts with details such as:

Workout name
Muscle groups
Equipment
Duration
Calories
Rating

Workouts can be sorted by duration, calories, or rating.

2. Personal Workout Plan

Add workouts to Today's Plan (up to 5 at a time). The plan supports:

Viewing workout details
Marking a workout as done
Removing a workout
Tracking total exercises, total minutes, and total calories
3. Saved Workouts

Save workouts to revisit later. The Saved section allows users to view, inspect, and remove saved workouts.

4. Toast Notifications

Users get instant feedback via toast notifications when they add a workout to their plan, save a workout, remove a workout, or mark one as done.

5. Responsive Design

FitLog is fully responsive across mobile, tablet, and desktop.

React Questions & Answers
1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write and read, since the UI structure lives directly alongside the logic that drives it.

tsx
<h1>MY PLAN</h1>
2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data that belongs to a component and can change over time.

For example, in FitLog, workout data is passed to Fitcard using props:

tsx
<Fitcard exercise={item} />
3. What does the useState hook do, and where did you use it in this project?

useState stores and updates data that changes inside a component. It's used in several places in this project — for example, in MyPlan.tsx:

tsx
const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

This controls whether the user sees Today's Plan or Saved workouts. State is also used for the sorting option and the mobile navbar menu.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders, and is commonly used for side effects such as fetching data or working with browser APIs.

In this project, workout data is fetched from an API — but in the current implementation, that fetch happens in a Next.js Server Component rather than through useEffect. For example, Library.tsx fetches the workout data with:

tsx
const data = await getAllData();

So useEffect wasn't required for the main data-loading step in the final version.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list, which helps it track what was added, removed, or changed.

tsx
{workouts.map((workout) => (
  <div key={workout.id}>{workout.name}</div>
))}

Here, workout.id is unique, so React can correctly track each item.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. In MyPlan.tsx, an empty message is shown when there are no workouts:

tsx
{workouts.length === 0 ? (
  <div>
    <h2>NOTHING HERE YET</h2>
    <p>Browse the library and add a lift to get today moving.</p>
  </div>
) : (
  <div>{/* Workout list */}</div>
)}

If there are no workouts, the empty state is shown; otherwise, the workout list renders.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props:

tsx
<Fitcard exercise={item} />

A child sends data back to the parent by calling a function passed down as a prop:

tsx
<Child onAdd={handleAdd} />

The child then calls onAdd() when needed. This project also uses React Context to share workout-plan functions — such as adding and removing workouts — across components.
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoals = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);
  function handleAddGoals(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoals: CourseGoals = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoals];
    });
  }

  function handleDeleteGoals(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        Your course goals!
      </Header>
      <NewGoal onAddGoal={handleAddGoals} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoals} />
    </main>
  );
}

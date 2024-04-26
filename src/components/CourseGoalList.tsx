import { type ReactNode } from "react";
import { CourseGoals } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalsList = {
  goals: CourseGoals[];
  onDeleteGoal: (id: number) => void;
};
export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalsList) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no coruse.</InfoBox>;
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        Goals can not be more then 3.
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

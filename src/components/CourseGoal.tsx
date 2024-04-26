import { type PropsWithChildren } from "react";

type CoruseGoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CoruseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <h4>{children}</h4>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

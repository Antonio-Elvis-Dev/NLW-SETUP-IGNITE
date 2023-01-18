interface HabitProps {
  completed: number;
}

export function Habit(props: HabitProps) {
  return (
    <div className="bg-zinc-900 w-5 ">
      <h2 className="text-white">{props.completed}</h2>
    </div>
  );
}

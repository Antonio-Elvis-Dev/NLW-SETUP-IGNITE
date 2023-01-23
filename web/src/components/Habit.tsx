interface HabitProps {
  completed: number;
}

export function Habit(props: HabitProps) {
  return (
    <div
      style={{ flex: 1 }}
      className="bg-zinc-900 w-10 h-10 rounded m-2 flex items-center justify-center"
    >
      <h2 className="bg-zinc-900 h-10 w-10 text-white m-2 ">
        {props.completed}
      </h2>
    </div>
  );
}

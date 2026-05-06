import { Button } from "./Button";

export function Habitlist() {
    const habits = [{id: 1, name: "hi"},
                    {id: 2, name: "hello"},
                    {id: 3, name: "greetings"},
    ];

    if (habits.length === 0) {
        return <p className="text-center text-zinc-500 py-12">No habits yet. Add one above to get started.</p>
    }

    return <div className="flex flex-col gap-3">
        {habits.map(habit => (
            <Habititem key = {habit.id} habit = {habit}/>
        ))}
    </div>;
}

type HabititemProps = {
    habit: {id:string, name:string}
}

function Habititem({ habit }: HabititemProps) {
    // return <h1>{habit.name}</h1>
    return <div className="rounded-xl bg-zinc-800 p-4 flex-col gap-3">
        <div className="flex items-center justify-between mb-3">{habit.name}</div>
    </div>
}
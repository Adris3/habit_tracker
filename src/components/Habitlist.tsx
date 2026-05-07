import { Button } from "./Button";
import { startOfWeek, eachDayOfInterval, endOfWeek, format, isFuture } from "date-fns";

export function Habitlist() {
    const habits = [{id: 1, name: "hi"}
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
    habit: {id:number, name:string}
}

function Habititem({ habit }: HabititemProps) {
    const visibleDates = eachDayOfInterval({
        start: startOfWeek(new Date()), 
        end: endOfWeek(new Date())
    });
    return (
        <div className="rounded-xl bg-zinc-800 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="font-medium">{habit.name}</span>
                    <span className="text-sm text-amber-400">3</span>
                </div>

                <Button>Delete</Button>
            </div>

            <div className="flex gap-1.5">
                {visibleDates.map(date => (
                    <Button key={date.toISOString()} disabled={isFuture(date)}>
                        <span className="font-medium">{format(date, "EEE")}</span>
                        <span>{format(date, "d")}</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}
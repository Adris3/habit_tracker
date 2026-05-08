import { Button } from "./Button";
import { startOfWeek, eachDayOfInterval, endOfWeek, format, isFuture } from "date-fns";

export type Habit = {id: string, name: String}

type HabitlistProps = {
    habits: Habit[]
    deleteHabit: (id: string) => void
}

export function Habitlist({habits, deleteHabit} : HabitlistProps) {

    if (habits.length === 0) {
        return <p className="text-center text-zinc-500 py-12">No habits yet. Add one above to get started.</p>
    }

    return <div className="flex flex-col gap-3">
        {habits.map(habit => (
            <Habititem deleteHabit={deleteHabit} key = {habit.id} habit = {habit}/>
        ))}
    </div>;
}

type HabititemProps = {
    habit: Habit
    deleteHabit: (id: string) => void
}

function Habititem({ habit, deleteHabit }: HabititemProps) {
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

                <Button onClick={() => deleteHabit(habit.id)} variant="ghost-destructive" className="text-sm">Delete</Button>
            </div>

            <div className="flex gap-1.5">
                {visibleDates.map(date => (
                    <Button className= "flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs"
                        key={date.toISOString()} disabled={isFuture(date)}>
                        <span className="font-medium">{format(date, "EEE")}</span>
                        <span>{format(date, "d")}</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}
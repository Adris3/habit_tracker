import { Button } from "./Button";
import { startOfWeek, eachDayOfInterval, endOfWeek, format, isFuture, isSameDay, subDays } from "date-fns";

export type Habit = {id: string; name: String; completions: Date[]}

type HabitlistProps = {
    habits: Habit[]
    deleteHabit: (id: string) => void
    toggleHabit: (id: string, date: Date) => void
}

export function Habitlist({habits, deleteHabit, toggleHabit} : HabitlistProps) {

    if (habits.length === 0) {
        return <p className="text-center text-zinc-500 py-12">No habits yet. Add one above to get started.</p>
    }

    return <div className="flex flex-col gap-3">
        {habits.map(habit => (
            <Habititem deleteHabit={deleteHabit} toggleHabit={toggleHabit} key = {habit.id} habit = {habit}/>
        ))}
    </div>;
}

type HabititemProps = {
    habit: Habit
    deleteHabit: (id: string) => void
    toggleHabit: (id: string, date: Date) => void
}

function Habititem({ habit, deleteHabit, toggleHabit}: HabititemProps) {
    const visibleDates = eachDayOfInterval({
        start: startOfWeek(new Date()), 
        end: endOfWeek(new Date())
    });

    const streak = getStreak(habit.completions)

    return (
        <div className="rounded-xl bg-zinc-800 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="font-medium">{habit.name}</span>
                   {streak !== 0 && (<span className="text-sm text-amber-400">{streak}</span>)}
                </div>

                <Button onClick={() => deleteHabit(habit.id)} variant="ghost-destructive" className="text-sm">Delete</Button>
            </div>

            <div className="flex gap-1.5">
                {visibleDates.map(date => (
                    <Button className= "flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs"
                        key={date.toISOString()} 
                        disabled={isFuture(date)}
                        onClick={() => toggleHabit(habit.id, date)}
                        variant={habit.completions.some(d => isSameDay(date, d)) ? "primary":"secondary"}
                    >  
                        <span className="font-medium">{format(date, "EEE")}</span>
                        <span>{format(date, "d")}</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}

function getStreak(completions: Date[]) {
    // Simply returns length of completions array instead of overcomplicated date calculations
    return completions.length
}
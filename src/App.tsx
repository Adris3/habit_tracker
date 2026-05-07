import { useState } from "react"
import { Habitform } from "./components/Habitform"
import { Habitlist, type Habit } from "./components/Habitlist.tsx"
import { Header } from "./components/Header.tsx"

export default function App() {

  const [habits, setHabits] = useState<Habit[]>([]);

  function addHabit(name: String) {
    
    setHabits([...habits, {id: crypto.randomUUID(), name }])
  }

  return (
  <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
    <Header/>
    <Habitform addHabit={addHabit}/>
    <Habitlist habits={habits}/>
  </div>
  )
}


import { Habitform } from "./components/Habitform"
import { Habitlist } from "./components/Habitlist.tsx"
import { Header } from "./components/Header.tsx"

export default function App() {
  return (
  <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
    <Header/>
    <Habitform/>
    <Habitlist/>
  </div>
  )
}


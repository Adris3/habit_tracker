import { Button } from "./Button";

export function Habitlist() {
    const habits = [];

    if (habits.length === 0) {
        return <h1>Empty</h1>
    }

    return <h1>Full</h1>;
}
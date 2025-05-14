import React from 'react';

type CounterProps = {
    initialValue: number;
    onCountChange: (newCount: number) => void

}
export function Counter(props: CounterProps) {
    const [count, setCount] = React.useState<number>(props.initialValue);

    function increment() {
        const newCount = count + 1;
        setCount(newCount);
        props.onCountChange(newCount);
    }

    function decrement() {
        const newCount = count - 1;
        setCount(newCount);
        props.onCountChange(newCount);
    }

    return (
        <div>
            <h4>Contatore: {count}</h4>
            <button onClick={decrement} disabled={count <= 0}>-</button>

            <button onClick={increment} disabled={count >= 10}>+</button>
        </div>
    )
}
type GreetingProps = {
    name: string;
    age: number;
    isLoggedIn: boolean;
}

export function Greeting(props: GreetingProps) {
    return (
        <div>
            <p>Ciao {props.name}, hai {props.age} anni{props.isLoggedIn && <span> e sei loggato al sito</span>}!</p>
        </div>
    )
}
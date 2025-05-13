type GreetingProps = {
    name: string;
    age: number;
    isLoggedIn: boolean;
}

export function Greeting(props: GreetingProps) {
    return (
        <div>
            {
                props.isLoggedIn == true
                ? <p>Ciao {props.name}, hai {props.age} anni e sei loggato al sito!</p>
                : <p>Ciao {props.name}, hai {props.age} anni!</p>
            }
        </div>
    )
}
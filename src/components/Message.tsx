import React from "react"

// type MessageProps = {
//     message: string;
//     onMessageChange: (newMessage: string) => void;
// }


export function Message() {
    const [message, setMessage] = React.useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.trim() !== "") {
            setMessage(value);
        } else {
            setMessage("")
        }
    }

    return (
        <div>
            <h3>Inserisci un messaggio</h3>
            <input value={message} onChange={handleChange} placeholder="Scrivi qualcosa"/>
            <button style={{ marginLeft: 10 }}>Salva</button>

            <p>Il tuo messaggio è: <strong>{message}</strong></p>
        </div>
    )
}
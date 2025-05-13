import React from "react";
import axios from "axios";


type User = {
  id: number;
  name: string;
  email: string;
};

export function ChiamataUser() {
    const [users, setUsers] = React.useState<User[]>([]); // [users = stato reattivo, setUsers = funzione che permette la modifica dello stato] = React.useState -> metodo di react, <User[]> -> Tipizazzione, ([]) -> Setting del valore iniziale dello Stato
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => { // useEffect serve per eseguire 'effetti collaterali' nel componente, ad esempio proprio una chiamata API 
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users') // <User[]> si inserisce per per dire che il risultato sarà un array di type User, rendendo accessibili le props (esempio: user.id, user.name ecc..)
        .then(res => {
            setUsers(res.data); // il setUsers andrà ad aggiornare lo stato, l'array precedentemente definito come vuoto, con i dati ottenuti dalla richiesta
        })
        .catch(err => {
            console.log('Errore nel caricamento:', err);
            setError('Errore nel caricamento')
        });
    }, []); // [] è il parametro che determina quando deve essere eseguito, in questo caso solo nel momento del montaggio dell'app

    if(error) return <p>{error}</p>

    return (
        <div>
            <h4>Utenti da API (Axios)</h4>

            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
};
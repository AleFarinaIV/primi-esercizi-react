import {UserCard} from "./components/UserCard";
import { Counter } from './components/Counter';
import { type Task } from './components/TodoList';
import { TodoList } from './components/TodoList';
import { Greeting } from "./components/Greeting";
import { Message } from "./components/Message";
import { type User } from "./components/UserList";
import { UserList } from "./components/UserList";
import { LikeButton } from "./components/LikeButton";
import { ChiamataUser } from "./components/ChiamataUser";
import { List } from "./components/List";

function App() {

  // Esercizio 2
  function handleCountChange(value: number) {
    console.log("Il contatore ora vale:", value)
  };

  // Esercizio 3
  const tasks: Task[] = [
    { id: '1', title: 'Studiare React', completed: true },
    { id: '2', title: 'Fare la spesa', completed: true },
    { id: '3', title: 'Scrivere codice', completed: false },
  ];

  // Esercizio 6 - Esercizio 9
  const users: User[] = [
    { id: 1, name: 'Alessandro', isOnline: true },
    { id: 2, name: 'Simone', isOnline: false },
    { id: 3, name: 'Laura', isOnline: true },
  ];

  //Esercizio 7
  function handleLikeChange(value: number) {
    console.log("Numero totale di like:", value)
  };

  //Esercizio 9
  const fruits = ['🍎 Apple', '🍌 Banana', '🍇 Grape'];
  return (
    <>
      <h1>Esercizio 1</h1>
        {/* Esercizio 2: Componenti Tipizzati di Base
          Obiettivo: Creare un componente che riceva proprietà fortemente tipizzate.
          Crea un componente UserCard che accetta le seguenti proprietà:
           name (string)
           age (number)
           isAdmin (boolean, opzionale)
          Visualizza il nome e l'età dell'utente e, se isAdmin è vero, aggiungi un badge "Admin". 
        */}

      <div>
        <UserCard name="Alessandro" age={24} isAdmin={true}/>
        <UserCard name="Laura" age={28} isAdmin={false} />
      </div>

      <h1>Esercizio 2</h1>
        {/*Obiettivo: Creare un componente che utilizzi callback tipizzati.
          Crea un componente Counter con:
          initialValue (number)
          onCountChange (callback che riceve il nuovo valore del contatore come parametro)

          Implementa un contatore con pulsanti per incrementare e decrementare il valore.
        */}

        <div>
          <Counter initialValue={5} onCountChange={handleCountChange} />
        </div>

      <h1>Esercizio 3</h1>
        {/*Esercizio 3: Tipi per Array e Oggetti Complessi
          Obiettivo: Gestire array di oggetti tipizzati.
          Crea un componente TodoList che accetta una lista di task, dove ogni task è un oggetto con:

          id (string)
          title (string)
          completed (boolean)

          Visualizza la lista di task, con la possibilità di filtrare i task completati e non completati.
        */}

        <div>
          <TodoList tasks={tasks}/>
        </div>
      
      <h1>Esercizio 4</h1>
        {/*🔹 Esercizio 1 – Componente con Props tipizzate
          Obiettivo: Crea un componente Greeting che accetta:

          name: string

          age: number

          Visualizza un messaggio come:

          "Ciao Mario, hai 30 anni!"

          ✅ Bonus: Aggiungi una prop isLoggedIn (boolean) per mostrare un messaggio personalizzato se è loggato o no.
        */}

        <div>
          <Greeting name ={'Alessandro'} age ={24} isLoggedIn={true}/>
          <Greeting name ={'Laura'} age ={27} isLoggedIn={false}/>
          <Greeting name ={'Simone'} age ={28} isLoggedIn={true}/>
        </div>

      <h1>Esercizio 5</h1>
        {/*🔹 Esercizio 3 – Evento tipizzato
          Obiettivo: Crea un campo input e un bottone Salva.

          Tipizza correttamente l’evento onChange

          Mostra in tempo reale il valore digitato

          tsx
          Copia
          Modifica
          <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => ...} />
          ✅ Bonus: Non permettere input vuoti
        */}

        <div>
          <Message/>
        </div>

      <h1>Esercizio 6</h1>
      {/* 🔹 Esercizio 4 – Lista di oggetti tipizzati
        Obiettivo: Crea un componente UserList che accetta un array di utenti:

        ts
        Copia
        Modifica
        type User = { id: number; name: string; isOnline: boolean }
        Mostra ogni utente con nome e stato (online/offline)

        Usa .map e key

        ✅ Bonus: Colora i nomi online in verde e offline in rosso 
      */}

      <div>
        <h4>Lista utenti</h4>
        <UserList users={users} />
      </div>

      <h1>Esercizio 7</h1>
      {/* 🔹 Esercizio 5 – Callback dal figlio al padre
        Obiettivo: Crea un componente LikeButton:

        accetta una onLike (callback)

        ogni click aumenta il contatore nel parent

        ✅ Bonus: Mostra un messaggio se i like sono > 10
      */}

      <div>
        <LikeButton onChangeLike={handleLikeChange}/>
      </div>

      <h1>Esercizio 8</h1>
      {/* 🧠 Obiettivo
        Recuperare dati da un’API (https://jsonplaceholder.typicode.com/users)

        Usare Axios per la chiamata HTTP

        Tipizzare la risposta

        Visualizzare i dati in una lista
      */}

        <div>
          <ChiamataUser />
        </div>

      <h1>Esercizio 9</h1>
      {/* Esercizio 4: Utilizzo di Generics
        Obiettivo: Creare un componente che utilizzi i tipi generici.
        Crea un componente List che accetta un array di elementi generici e una funzione per renderizzare ogni elemento.

        Usa il componente List per visualizzare sia una lista di stringhe che una lista di oggetti complessi (es. utenti).
      */}

      <div>
        {/* In entrambi i casi, il tipo T viene inserito automaticamente da TypeScript in base al tipo di items */}
        <h4>Lista di stringhe</h4>
        <List items={fruits} renderItem={(item) => <span>{item}</span>}/>

        <h4>Lista di oggetti</h4>
        <List 
        items={users} 
        renderItem={(user) => (
          <span>
            {user.name} - {user.isOnline ? 'Online' : 'Offline'}
          </span>
        )}/>
      </div>

      <h1>Esercizio 10</h1>
      {/* Esercizio 5: Utilizzo di Context e Tipizzazione Avanzata
        Obiettivo: Creare un contesto tipizzato per gestire lo stato globale.
        Crea un contesto per gestire l'autenticazione utente (AuthContext) con:
              
        user (oggetto utente o null)
              
        login (funzione che accetta nome e password e restituisce Promise<void>)
              
        logout (funzione che restituisce void)
              
        Usa il contesto in un'applicazione demo.
      */}
    </>
  )
}

export default App

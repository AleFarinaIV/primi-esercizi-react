import React from "react"

type ListProps<T> = { // T = Tipo generico, variabile che rappresenta qualsiasi tipo
    items: T[]; // Array di elementi di tipo generico T
    renderItem: (item: T) => React.ReactNode // Funzione che ci dice come renderizzare ogni elemento
};

export function List<T>(props: ListProps<T>) {
    return (
        <ul>
            {props.items.map((item, index) => (
                <li key={index}> {/* Utilizzare sempre un id univoco, in questo caso inserito come parametro nel map e utilizzato nell'attributo key */}
                    {props.renderItem(item)}
                </li>
            ))}
        </ul>
    )
}
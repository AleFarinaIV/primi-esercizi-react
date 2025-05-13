export type Task = {
    id: string;
    title: string;
    completed: boolean;
};

type TodoListProps = {
    tasks: Task[];
}

import React from 'react';

export function TodoList(props: TodoListProps) {
    const [showCompleated, setShowCompleated] = React.useState<boolean>(false);

    const filteredTasks = props.tasks.filter(task => task.completed === showCompleated);

    return (
        <div>
            <h4>Todo List</h4>
            <button onClick={() => setShowCompleated(!showCompleated)}>
                Mostra {showCompleated ? 'Incompleti': 'Completati' }
            </button>

            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id}>
                        {task.title} {task.completed && <span>(✓)</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}
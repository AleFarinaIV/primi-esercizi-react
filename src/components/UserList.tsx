export type User = {
    id: number,
    name: string;
    isOnline: boolean;
};

type UserListProps = {
    users: User[];
}

export const UserList = (props: UserListProps) => {
    return (
        <ul>
            {props.users.map( user => (
                <li key={user.id} style={{ color: user.isOnline ? 'green' : 'red', marginBottom: 2 }}>
                    {user.name} - {user.isOnline ? 'Online' : 'Offline'}
                </li>
            ))}
        </ul>
    )
}
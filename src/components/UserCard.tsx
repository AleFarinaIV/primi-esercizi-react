type UserCardProps = {
    name: string;
    age: number;
    isAdmin: boolean;
  }

  export function UserCard(props: UserCardProps) {
    return (
      <div>
        <span style={{ fontSize: 30}}>Nome: {props.name}</span> {props.isAdmin && <span style={{ color: 'red', margin: 10 }}>Admin</span>}
        <p>Età: {props.age}</p>
      </div>
    )
  }
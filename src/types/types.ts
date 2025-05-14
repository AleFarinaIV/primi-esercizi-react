export type User = { // oggetto di tipo User
    id: number;
    name: string;
    password: string;
}
export type AuthContextType = { // oggetto di tipo AuthContextType
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}
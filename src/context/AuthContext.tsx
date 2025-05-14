import React from "react";
import { type AuthContextType, type User } from "../types/types"; // import degli oggetti di tipo User e AuthContextType

const AuthContext = React.createContext<AuthContextType | undefined>(undefined) // creazione del contesto vuoto, specificando che sarà di tipo AuthContextType


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { //"contenitore" che fornirà lo stato e le funzioni agli altri componenti
    const [user, setUser] = React.useState<User | null>(null); // user sarà null se non si è loggati

    const login = (username: string, password: string): Promise<void> => {
        const loggedUser: User = {
            id: 1,
            name: username,
            password,
        };

        return new Promise((resolve) => {
            setTimeout(() => {
                setUser(loggedUser)
                resolve();
                console.log("Login effettuato");
            }, 2000)

        })
    };

    const logout = () => { // rimozione dell'utente
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}> {/* Restituiamo il contesto con valori e funzioni */}
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => { // questo permetterà di utilizzare const { user, login, logout } = useAuth();
    const context = React.useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth deve essere usato all\'interno di un AuthProvider');
    }

    return context;
}
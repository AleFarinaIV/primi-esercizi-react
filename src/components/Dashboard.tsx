import React from 'react';
import { useAuth } from '../context/AuthContext';

export const Dashboard: React.FC = () => {
    const { user, login, logout } = useAuth();

    const handleLogin = () => {
        login('Mario Rossi', 'password123')
    };

    return (
        <div>
            <h3>Dashboard login</h3>
            {user != null ? (
                <>
                    <p>Benvenuto, {user.name}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                  <p>Non sei loggato</p>
                  <button onClick={handleLogin}>Login</button>
                </>
            )}
        </div>
    )
}
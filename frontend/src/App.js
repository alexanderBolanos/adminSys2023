// App.js
import React, { useState, useEffect } from 'react';
import UserCard from './Components/UserCard';
import 'dotenv/config';

const App = ({ backendUri = process.env.BACKEND_URL }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(backendUri);
                const data = await response.json();
                console.log('### response: ', data);
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            }}
        >
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default App;

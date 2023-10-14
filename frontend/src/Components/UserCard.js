// UserCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const UserCard = ({ user }) => {
    const getBackgroundColor = () => {
        switch (user.gender.toLowerCase()) {
            case 'female':
                return 'pink';
            case 'male':
                return 'lightblue';
            default:
                return 'lightgreen';
        }
    };

    const cardStyle = {
        backgroundColor: getBackgroundColor(),
    };

    return (
        <Card style={cardStyle}>
            <CardContent>
                <Avatar
                    alt={user.username}
                    src={user.avatar}
                    sx={{ width: 100, height: 100 }}
                />
                <Typography variant="h6">{`${user.first_name} ${user.last_name}`}</Typography>
                <Typography color="textSecondary">{user.username}</Typography>
            </CardContent>
        </Card>
    );
};

export default UserCard;

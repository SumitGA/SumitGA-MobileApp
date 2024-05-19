import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import base from '../styles/base';

interface IUserLoginProps {}

const UserLogin: React.FunctionComponent<IUserLoginProps> = (props) => {
    return (
        <View style={base.root}>
            <Title>User Login</Title>
        </View>
    )
}

export default UserLogin;
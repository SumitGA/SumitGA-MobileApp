import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import base from '../styles/base';

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    return (
        <View style={base.root}>
            <Title>Welcome to Home Page</Title>
        </View>
    )
}

export default HomePage;
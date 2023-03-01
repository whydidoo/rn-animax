import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './Login';

type Authorization = {
  Login: undefined;
};

const AuthorizationStackCreator = createStackNavigator<Authorization>();

export const AuthorizationStack: React.FC = () => {
  return (
    <AuthorizationStackCreator.Navigator>
      <AuthorizationStackCreator.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </AuthorizationStackCreator.Navigator>
  );
};

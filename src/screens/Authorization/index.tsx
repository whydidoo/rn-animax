import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Start } from './Start';
import { Social } from './Social';

export type AuthorizationStackParams = {
  Start: undefined;
  Social: undefined;
};

const AuthorizationStackCreator = createStackNavigator<AuthorizationStackParams>();

const options = { headerShown: false };

export const AuthorizationStack: React.FC = () => {
  return (
    <AuthorizationStackCreator.Navigator>
      <AuthorizationStackCreator.Screen name="Start" component={Start} options={options} />
      <AuthorizationStackCreator.Screen name="Social" component={Social} options={options} />
    </AuthorizationStackCreator.Navigator>
  );
};

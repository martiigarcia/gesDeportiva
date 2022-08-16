import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from "../screens/Login";
import Menu from "../screens/Menu";

const Tab = createBottomTabNavigator(); //menu de abajo


const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{title: 'Login', headerTitleAlign: 'center'}}
                />
                <Tab.Screen
                    name="Menu"
                    component={Menu}
                    options={{title: 'Menu', headerTitleAlign: 'center'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default Navigation;
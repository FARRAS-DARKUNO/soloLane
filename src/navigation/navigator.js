import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//screenMain

import BerandaPage from '../screen/berandaPage';
import PembatalanPage from '../screen/pembatalanPage';
import PesananPage from '../screen/pesananPage';
import LainnyaPage from '../screen/lainnyaPage';

const Tab = createBottomTabNavigator();
const MainContainer = ({ navigation }) => {
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarActiveTintColor: '#206378',
                headerShown: false,
                tabBarStyle: { position: 'absolute' },
                tabBarStyle: { height: 70, backgroundColor: '#FCFEFF', },
            }}

        >

            <Tab.Screen
                name="Beranda"
                component={BerandaPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                }} />
            <Tab.Screen
                name="Pesanan"
                component={PesananPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="notebook-multiple" color={color} size={30} />
                    ),
                }} />
            <Tab.Screen
                name="Pembatalan"
                component={PembatalanPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="close-box-multiple" color={color} size={30} />
                    ),
                }} />
            <Tab.Screen
                name="Lainnya"
                component={LainnyaPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="menu" color={color} size={30} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default MainContainer;

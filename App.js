/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import HomeScreen from './js/home/home'
import DetailScreen from './js/detail/detail'
import SettingScreen from './js/setting/setting'
import MineScreen from './js/mine/mine'

const HomeNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: '主页',
                headerStyle: {
                    backgroundColor: '#F00'
                },
                headerTintColor: '#000'
            }
        }
    },
    {
        navigationOptions: {
            title: "主页"
        }
    }
);

const DetailNavigator = createStackNavigator(
    {
        Details: {
            screen: DetailScreen,
            navigationOptions: {
                title: '详情'
            }
        }
    },
    {
        navigationOptions: {
            title: "详情"
        }
    }
);

const SettingNavigator = createStackNavigator(
    {
        Setting: {
            screen: SettingScreen,
            navigationOptions: {
                headerTitle: "设置",
                headerStyle: {
                    backgroundColor: '#F0C8B1'
                },
                headerTintColor: '#587CF3',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }
        }
    },
    {
        navigationOptions: {
            title: "设置"
        }
    }
);

const MineNavigator = createStackNavigator(
    {
        Mine: {
            screen: MineScreen,
            navigationOptions: {
                headerTitle: "我的",
                headerStyle: {
                    backgroundColor: '#F0C8B1'
                },
                headerTintColor: '#587CF3',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }
        }
    },
    {
        navigationOptions: {
            title: "我的"
        }
    }
);

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeNavigator,
        Details: DetailNavigator,
        Setting: SettingNavigator,
        Mine: MineNavigator
    },
    {
        tabBarOptions: {
            activeTintColor: '#1296db',
            inactiveTintColor: '#8a8a8a'
        },
        defaultNavigationOptions: {

        }
    }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
    render() {
        return (
            <AppContainer>
            </AppContainer>
        );
    }
}

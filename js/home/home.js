/*
* home.js
*
* created by JimmyLTS on 2019.04.16
*/

'use strict';

import React, { Component } from 'react';
import {Button, StatusBar, Text, View} from "react-native";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <StatusBar barStyle={"dark-content"} />
                <Text>Home Screen</Text>
                <Button title="Go To Details" />
            </View>
        );
    }
}

module.exports = HomeScreen;

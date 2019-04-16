/*
* mine.js
*
* created by JimmyLTS on 2019.04.16
*/

'use strict';

import React, { Component } from 'react';
import {Button, StatusBar, Text, View} from "react-native";

class MineScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <StatusBar barStyle={"dark-content"} />
                <Text>Mine Screen</Text>
                <Button title="Go To Info" />
            </View>
        );
    }
}

module.exports = MineScreen;

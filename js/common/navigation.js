/*
* navigation.js
*
* created by JimmyLTS on 2019.04.16
*/

'use strict';

import React, {Component} from 'react';
import { StyleSheet, View, NavigatorIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
    route: any;
    navigator: any;
};

type State = {
    backIcon: any;
};

class BaseNavigator extends Component {
    props: Props;
    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {
            backIcon: null
        };
    }

    componentWillMount(): void {
        Icon.getImageSource('ios-close', 40, '#0074FF').then(
            (source) => this.setState({backIcon: source})
        );
    }

    render() {
        if (!this.state.backIcon) {
            return null;
        }
        return (
            <NavigatorIOS
                ref="navigator"
                itemWrapperStyle={styles.container}
                initialRoute={{
                    ...this.props.route,
                    leftButtonTitle: '',
                    leftButtonIcon: this.state.backIcon,
                    onLeftButtonPress: this.props.navigator.pop,
                    passProps: {
                        navigator: this
                    }
                }} />
        );
    }

    navigateTo(route: any) {
        this.push({
            ...route,
            passProps: {
                navigator: this
            }
        });
    }

    push(route: any) {
        this.refs.navigator.push(route);
    }

    pop() {
        this.refs.navigator.pop();
    }

    close() {
        this.props.navigator.pop();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1
    }
});

module.exports = BaseNavigator;

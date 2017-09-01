/**
 * Created by HY-58 on 2017/9/1.
 * ListView的学习
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    Navigator,
    TouchableOpacity,
    View
} from 'react-native';

import NavigationBar from './NavigationBar';

export default class ListViewTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // word: ''
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'ListView的学习'}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    text: {
        fontSize: 20,
    }
})

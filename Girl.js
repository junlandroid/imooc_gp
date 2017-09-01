/**
 * Created by HY-58 on 2017/9/1.
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

export default class Girl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // word: ''
        }
    }

    renderButton(image) {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigator.pop();
                }}
            >
                <Image style={{width: 30, height: 30, margin: 10}} source={image}/>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'Girl'}
                    style={{
                        backgroundColor: 'green'
                    }}
                    leftButton={
                        this.renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))
                    }
                    rightButton={
                        this.renderButton(require('./res/images/ic_star.png'))
                    }
                />
                <Text style={styles.text}>I'am Girl</Text>
                <Text style={styles.text}>女孩收到男孩送的：{this.props.word}</Text>
                <Text style={styles.text}
                      onPress={() => {
                          this.props.onCallBack('女孩--->男孩传递数据。。一盒巧克力');
                          this.props.navigator.pop();
                      }}>女孩送男孩一盒巧克力</Text>
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

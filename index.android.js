/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 * 页面跳转 Navigator
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Navigator from 'react-native-deprecated-custom-components';

import Boy from './Boy';


export default class Imooc_gp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <Navigator.Navigator
                    /***
                     * 初始化路由，也就是首先显示那个页面
                     */
                    initialRoute={{
                        //指定显示的页面
                        component: Boy
                    }}
                    /*
                     * 必不可少的方法，每一个人面被渲染（显示）的时候 首先回调这个方法
                     * 回调后 会传递两个参数，route， navigator
                     */
                    renderScene={(route, navigator) => {
                        // 1、从路由中取出组件 组件一定大写
                        let Component = route.component;
                        //2、 返回该组件  返回：1、navigator  2、组件的延展属性route.params
                        return <Component navigator={navigator} {...route.params}/>
                    }}
                />
              {/*  <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        selectedTitleStyle={{color: 'red'}}
                        title="Home"
                        renderIcon={() => <Image style={styles.page_images}
                                                 source={require('./res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.page_images, {tintColor: 'red'}]}
                                                         source={require('./res/images/ic_polular.png')}/>}
                        badgeText="1"
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        selectedTitleStyle={{color: 'blue'}}
                        title="Profile"
                        renderIcon={() => <Image style={styles.page_images}
                                                 source={require('./res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.page_images, {tintColor: 'yellow'}]}
                                                         source={require('./res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({selectedTab: 'profile'})}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                </TabNavigator>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    page1: {
        flex: 1,
        backgroundColor: 'red'
    },
    page2: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page_images: {
        width: 20,
        height: 20,
    }
});

AppRegistry.registerComponent('imooc_gp', () => Imooc_gp);

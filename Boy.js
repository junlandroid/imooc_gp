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
    View
} from 'react-native';

import NavigationBar from './NavigationBar';
import Girl from './Girl';
import ListViewTest from './ListViewTest';

export default class Boy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'Boy'}
                    statusBar={{
                        backgroundColor: 'red'
                    }}
                />

                <Text style={styles.text}>I'am boy</Text>
                <Text style={styles.text}
                      onPress={() => {
                          //点击文字 跳转到Girl
                          this.props.navigator.push({
                              //展示页面
                              component: Girl,
                              //传递参数
                              params: {
                                  word: '男孩给女孩传递数据。。。one rose',
                                  //女孩给男孩的反馈  通过回调方法
                                  onCallBack: (word) => {
                                      this.setState({
                                          /*注意该地方  通过setState来接收女孩--->男孩的数据*/
                                          word: word
                                      });
                                  }
                              }
                          })
                      }}
                >送女孩一枝玫瑰</Text>
                {/*用来展示 回调的word*/}
                <Text style={styles.text}>{this.state.word}</Text>
                <Text style={styles.text}
                      onPress={() => {
                          this.props.navigator.push({
                              componet: ListViewTest
                          });
                      }}
                >ListView的学习</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        // justifyContent: 'center'// 根节点View中的所有内容 居中
    },
    text: {
        fontSize: 20,
    }
})

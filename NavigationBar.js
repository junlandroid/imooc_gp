/**
 * Created by HY-58 on 2017/9/1.
 *
 * 自定义NavigationBar
 */


import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    StatusBar,
} from 'react-native';

const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;
const Status_Bar_Shape = {
    backgroundColor: PropTypes.string,//背景颜色 约束为string
    barStyle: PropTypes.oneOf('default', 'light-content', 'dark-content'),
    hidden: PropTypes.bool,
}

export default class NavigationBar extends Component {

    //属性约束
    static propTypes = {
        style: View.propTypes.style,//navbar导航栏样式约束
        title: PropTypes.string,//标题约束
        titleView: PropTypes.element,//标题 不光有文字 还有下拉框
        hide: PropTypes.bool,//导航栏是否隐藏
        leftButton: PropTypes.element,//左侧按钮
        rightButton: PropTypes.element,//右侧按钮
        statusBar: PropTypes.shape(Status_Bar_Shape)//允许用户 自定义状态栏的背景 颜色 等形状约束
    };

    //当状态栏有些属性用户不定义的时候 我们可以设置默认值
    static defaultProps = {//----->设置的是NavigationBar的属性
        //设置statusBar的默认属性
        statusBar: {
            barStyle: 'dark-content',//默认显示
            hidden: false,
        }
    }


    constructor(props) {
        super(props);
        this.state = {
            title: '',//标题
            hide: false//是否隐藏
        };
    }

    render() {

        //状态栏
        let status = <View style={[Styles.statusBar, this.props.statusBar/*该操作针对IOS端*/]}>
            <StatusBar {...this.props.statusBar}/>{/*拿到状态栏的约束*/}
        </View>;

        //接收标题部分，如果titleView不为空，则返回；否则 返回<Text>包裹的title
        let titleView = this.props.titleView ? this.props.titleView :
            <Text style={Styles.title}>{this.props.title}</Text>

        //接受用户传递过来的 左按钮、标题 、 右按钮 等， 用content接收
        let content = <View style={Styles.navBar}>
            {this.props.leftButton}
            <View style={Styles.titleViewContainer}>{titleView}</View>
            {this.props.rightButton}
        </View>

        return (
            //在根容器下 将用户设置的样式取出来
            <View style={[Styles.containers,this.props.style]}>
                {content}
                {status}
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    containers: {
        backgroundColor: 'red',
    },
    navBar: {
        justifyContent: 'space-between',
        alignItems: 'center',//居中显示
        height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,//判断平台
        flexDirection: 'row',
    },
    titleViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',//绝对显示
        left: 40,//左右上下边距
        right: 40,
        top: 0,
        bottom: 0,
    },
    title: {
        fontSize: 20,
        color: 'white',
    },
    statusBar: {
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
    },
})



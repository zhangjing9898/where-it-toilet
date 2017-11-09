import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
}from 'react-native'

class TWebView extends Component{

    constructor(props){
        super(props);
        this.state={
            url:this.props.url,
            isMargin:this.props.isMargin,
            isShowErrorPage:false,
            isNearBy:this.props.isNearBy,
            isWeather:this.props.isWeather
        }
    }

    render(){
        let url={uri: this.state.url};
        return(
            <View style={styles.container}>
                {
                    this.state.isShowErrorPage?
                        <View style={styles.textView}>
                            <Text style={styles.textView}>不好意思,请检查网络连接情况或者报告错误</Text>
                        </View>
                        :
                        <WebView
                            style={[styles.container,{marginTop: this.state.isMargin || 0}]}
                            startInLoadingState={true}
                            onError={this._loadError.bind(this)}
                                source={url}>
                        </WebView>
                }
            </View>
        );
    }

    _loadError(){
        this.setState({
            isShowErrorPage:true
        })
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        fontSize:16,
        fontWeight:'300'
    },
    textView:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    }
})

module.exports = TWebView;
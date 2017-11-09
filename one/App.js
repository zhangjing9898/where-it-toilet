import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

var ToolbarAndroid =require('ToolbarAndroid');

import ToiletPage from './android_views/toiletPage'

export default class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    // navIcon={require('./icon/logo.png')}
                    actions={toolbarActions}
                    style={styles.toolbar}
                    title="厕所在哪儿"
                >
                </ToolbarAndroid>
                {this._renderView()}
            </View>

        );
    }
    _renderView(){
        var view=null;
        view=<ToiletPage ></ToiletPage>;
        return view;
    }
}

var toolbarActions =[
    {title: 'Create', icon:require('./icon/1.png')},
    {title: 'Filter'},
    {title: 'Settings'},
];
const styles =StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
    container:{
        flex:1
    }
});


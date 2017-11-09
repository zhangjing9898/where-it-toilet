import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import TWebView from './webview';

const nearByURL = 'http://127.0.0.1:3000/html/nearby.html';

class ToiletPage extends Component{
    render(){
        return(
            <TWebView url="http://192.168.43.71:3000/html/nearby.html"/>
            );
    }
}

module.exports = ToiletPage;

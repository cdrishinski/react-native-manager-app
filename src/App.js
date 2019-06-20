import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers'

class App extends Component {
    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyAw8dnIPGTLbgZZ0778p1bueHXGz1EwpdA",
            authDomain: "manager-9f8c1.firebaseapp.com",
            databaseURL: "https://manager-9f8c1.firebaseio.com",
            projectId: "manager-9f8c1",
            storageBucket: "manager-9f8c1.appspot.com",
            messagingSenderId: "107896274220",
            appId: "1:107896274220:web:bd3fe924eb922a15"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }

    render () {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        )
    }
}

export default App;
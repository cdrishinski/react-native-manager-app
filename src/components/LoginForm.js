import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='email@myemail.com'
                        />
                </CardSection>

                <CardSection>
                    <Input
                        //makes dots appear as you type password
                        secureTextEntry
                        label='password'
                        placeholder='password'
                        />

                </CardSection>

                <CardSection>   
                    <Button>
                        Log In
                    </Button>

                </CardSection>

            </Card>
        )
    }

}

export default LoginForm;
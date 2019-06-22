//defines routes  a user can visit
import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate'

const RouterComponent = () => {
    return (
        <Router>
            {/* This is the parent scene, all other scenes are children */}
            <Scene key='root' hideNavBar>
                {/* initial prop makes this the first screen users see */}
                <Scene key="auth">
                    <Scene key='login' component={LoginForm} title='Please Login' initial />
                </Scene>
                <Scene key="main">
                    <Scene 
                        rightTitle="Add"
                        onRight={ () => { Actions.employeeCreate() }}
                        key='employeeList' 
                        component={EmployeeList} 
                        title='Employees'
                        initial  
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                </Scene>
                
                
            </Scene>
        </Router>

    )
}

export default RouterComponent;
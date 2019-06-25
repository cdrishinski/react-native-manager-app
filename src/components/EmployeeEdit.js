import _ from 'lodash'
import React, {Component } from 'react'
import Communications from 'react-native-communications'
import { connect } from 'react-redux'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave } from '../actions'
import { Button, Card, CardSection } from './common'

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })
    }

    onButtonPress(){
        const{ name,phone, shift } = this.props;

        this.props.employeeSave({ name, phone,shift, uid: this.props.employee.uid  })

        

    }

    onTextPress(){
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }

    render(){
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
            </Card>
        )


    }
}
const mapStateToProps = (state) =>{
    const { name, phone, shift } = state.EmployeeForm;

    return { name, phone, shift };
}

export default connect (mapStateToProps, { 
    EmployeeUpdate, employeeSave })(EmployeeEdit);
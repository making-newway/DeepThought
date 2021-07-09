import React, { Component } from 'react'
import { Input, Label } from 'reactstrap';

class Step2 extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        if(this.props.data.currentStep !== 2) {
            return null;
        }

        return (
            <>
                <div className="form-group">
                    <Label htmlFor="firstName">First Name: </Label>
                    <Input type="text" name="firstName" id="firstName" value={this.props.data.user.firstName} onChange={this.props.handleChange} />
                </div>

                <div className="form-group">
                    <Label htmlFor="lastName">Last Name: </Label>
                    <Input type="text" name="lastName" id="lastName" value={this.props.data.user.lastName} onChange={this.props.handleChange} />
                </div>

                <div className="form-group">
                    <Label htmlFor="age">Age: </Label>
                    <Input type="number" name="age" id="age" value={this.props.data.user.age} onChange={this.props.handleChange} />
                </div>
            </>
        )
    }
}

export default Step2
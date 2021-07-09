import React, { Component } from 'react'
import { Input, Label } from 'reactstrap';

class Step1 extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        if(this.props.data.currentStep !== 1) {
            return null;
        }

        return (
            <div className="form-group">
                <Label htmlFor="email">Email Id :</Label>
                <Input type="email" name="email" id="email" value={this.props.data.user.email} onChange={this.props.handleChange} />
            </div>
        )
    }
}

export default Step1
import React, { Component } from 'react'
import { Input, Label } from 'reactstrap';

class Step4 extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        if(this.props.data.currentStep !== 4) {
            return null;
        }

        return (
            <div className="form-group">
                <Label htmlFor="password">Password :</Label>
                <Input type="password" name="password" id="password" value={this.props.data.user.password} onChange={this.props.handleChange} />
            </div>
        )
    }
}

export default Step4
import React, { Component } from 'react'
import { Input, Label } from 'reactstrap';

class Step3 extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        if(this.props.data.currentStep !== 3) {
            return null;
        }

        return (
            <>
                <div className="form-group">
                    <Label htmlFor="eduction">Eduction: </Label>
                    <Input type="select" name="eduction" id="eduction" value={this.props.data.user.eduction} onChange={this.props.handleChange}>
                        <option value="select">Select Education Range</option>
                        <option value="10th Board">10th Board</option>
                        <option value="12th Board">12th Board</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Masters">Masters</option>
                        <option value="Higher">Higher</option>
                    </Input>
                </div>

                <div className="form-group">
                    <Label htmlFor="current">Current: </Label>
                    <Input type="select" name="current" id="current" value={this.props.data.user.current} onChange={this.props.handleChange}>
                        <option value="select">Select Current Job: </option>
                        <option value="Student">Student</option>
                        <option value="Government">Government</option>
                        <option value="Private">Private</option>
                        <option value="Self">Self</option>
                        <option value="Unemployed">Unemployed</option>
                    </Input>
                </div>
            </>
        )
    }
}

export default Step3
import React, { Component } from 'react'

class Step5 extends Component {

    render() {

        if(this.props.data.currentStep !== 5) {
            return null;
        }

        return (
            <div className="text-success">
                All is Done
            </div>
        )
    }
}

export default Step5

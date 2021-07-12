import React from 'react';

class MyComponent extends React.Component {

    constructor(props) {
        super(props);                                     // Using super()

        this.clickHandler = this.clickHandler.bind(this); // Binding Clickhandler

        this.state = {
            clicks: 0
        };
    }
    componentDidMount() {
        this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
    }

    componentWillUnmount() {
        this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
    }

    clickHandler() {
        this.setState({
            clicks: this.state.clicks + 1                 // Instead of (this.clicks + 1), use (this.state.clicks + 1) 
        });

    }
    render() {
        let children = this.props.children;
        return (
            <div className="my-component" ref="myComponentDiv">
                <h2>My Component ({this.state.clicks}  clicks)</h2>
                <h3>{this.props.headerText}</h3>
                {children}
            </div>
        );
    }
}

export default MyComponent;
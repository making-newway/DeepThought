There are Total 3 Problems in This Question.

1.  The constructor does not pass its props to the super class. It should include the following line:

    constructor(props) {
        super(props);
        // ...
    }

2. The event listener (when assigned via addEventListener()) is not properly scoped because ES2015 doesn’t provide autobinding. Therefore the developer can re-assign clickHandler in the constructor to include the correct binding to this:

    constructor(props) {
        super(props);
        
        this.clickHandler = this.clickHandler.bind(this);

        // ...
    }

3. The event listener is changing the value of click counter, which is inside the state object. So the value which is changing is needs to be under state object too. The correct value should be:

    clickHandler() {
        this.setState({
            clicks: this.state.clicks + 1
        });
    }

class Counter extends React.Component {
    constructor(props) {
        super(props);

        // count value starts at 0
        this.state = { count: 0 };

        // This binding ensures `this` refers to the class object in the callback
        this.addCount = this.addCount.bind(this);
    }

    addCount () {
        // add 1 to this.state.count
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <h2>Count {this.state.count}</h2>
                <button onClick={this.addCount}>
                    +1
                </button>
            </div>
        );
    }
}

const App = () => {
    return (
        <React.Fragment>
            <Counter />
        </React.Fragment>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
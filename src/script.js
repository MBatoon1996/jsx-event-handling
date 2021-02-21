class Counter extends React.Component {
    constructor(props) {
        super(props);

        // count value starts at 0
        this.state = { count: 0 };

        // This binding ensures `this` refers to the class object in the callback
        //this.addCount = this.addCount.bind(this);
        // only do this if we're not using arrow function in callback
    }

    addCount (amount) {
        // Accept an amount input and add it to the count state
        this.setState({
            count: this.state.count + amount
        });
    }

    render() {
        return (
            /* Original +1 needed to bind addCount in constructor
            <div>
                <h2>Count {this.state.count}</h2>
                <button onClick={this.addCount}>
                    +1
                </button>
            </div>

            */
            <div>
                <h2>Count {this.state.count}</h2>
                <button onClick={() => this.addCount(1)}>
                    +1
                </button>
                <button onClick={() => this.addCount(2)}>
                    +2
                </button>
                <button onClick={() => this.addCount(3)}>
                    +3
                </button>
            </div>
        );
    }
}

const Link = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log('Link clicked.');
    }

    return (
        <a href="altcademy.com" onClick={handleClick}>
            Click me
        </a>
    )
}

const App = () => {
    return (
        <React.Fragment>
            <Counter />
            <Link />
        </React.Fragment>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
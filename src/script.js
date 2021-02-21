class Counter extends React.Component {
    constructor(props) {
        super(props);

        // count value starts at 0
        this.state = { count: 0 };
    }

    render() {
        return (
            <div>
                <h2>Count {this.state.count}</h2>
                <button>
                    +1
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
);
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

class ScrollLogger extends React.Component {
    contsructor(props) {
        super(props);
        this.state = {
            scrollY: 0
        };

        // bind to the class object so updateScrollY can access this.setState
        this.updateScrollY = this.updateScrollY.bind(this);
    };

    updateScrollY(e) {
        this.setState({ scrollY: Math.round(window.scrollY) });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.updateScrollY);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateScrollY);
    }

    render() {
        return (
            <div className="position-fixed bg-white p-3" style={{right:0, top: 0}}>
                Scrolled: {this.state.scrollY}px
            </div>
        )
    }
}

const App = () => {
    return (
        <React.Fragment>
            <Counter />
            <Link />
            <ScrollLogger />
        </React.Fragment>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
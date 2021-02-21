var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        // count value starts at 0
        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.state = { count: 0 };

        // This binding ensures `this` refers to the class object in the callback
        //this.addCount = this.addCount.bind(this);
        // only do this if we're not using arrow function in callback
        return _this;
    }

    _createClass(Counter, [{
        key: 'addCount',
        value: function addCount(amount) {
            // Accept an amount input and add it to the count state
            this.setState({
                count: this.state.count + amount
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return (
                /* Original +1 needed to bind addCount in constructor
                <div>
                    <h2>Count {this.state.count}</h2>
                    <button onClick={this.addCount}>
                        +1
                    </button>
                </div>
                 */
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'h2',
                        null,
                        'Count ',
                        this.state.count
                    ),
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this2.addCount(1);
                            } },
                        '+1'
                    ),
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this2.addCount(2);
                            } },
                        '+2'
                    ),
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this2.addCount(3);
                            } },
                        '+3'
                    )
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

var Link = function Link() {
    var handleClick = function handleClick(e) {
        e.preventDefault();
        console.log('Link clicked.');
    };

    return React.createElement(
        'a',
        { href: 'altcademy.com', onClick: handleClick },
        'Click me'
    );
};

var App = function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Counter, null),
        React.createElement(Link, null)
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
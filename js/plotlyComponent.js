var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlotlyComponent = React.createClass({

  //displayName: 'PlotlyChart',
  propTypes: {
    data: React.PropTypes.array,
    layout: React.PropTypes.object,
    config: React.PropTypes.object,
    onClick: React.PropTypes.func,
    onBeforeHover: React.PropTypes.func,
    onHover: React.PropTypes.func,
    onUnHover: React.PropTypes.func,
    onSelected: React.PropTypes.func
  },

  attachListeners: function attachListeners() {
    if (this.props.onClick) this.container.on('plotly_click', this.props.onClick);
    if (this.props.onBeforeHover) this.container.on('plotly_beforehover', this.props.onBeforeHover);
    if (this.props.onHover) this.container.on('plotly_hover', this.props.onHover);
    if (this.props.onUnHover) this.container.on('plotly_unhover', this.props.onUnHover);
    if (this.props.onSelected) this.container.on('plotly_selected', this.props.onSelected);
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    //TODO logic for detecting change in props
    return true;
  },
  componentDidMount: function componentDidMount() {
    var _props = this.props;
    var data = _props.data;
    var layout = _props.layout;
    var config = _props.config;

    Plotly.newPlot(this.container, data, (0, _)(layout), config); //We clone the layout as plotly mutates it.
    this.attachListeners();
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    //TODO use minimal update for given changes
    if (prevProps.data !== this.props.data || prevProps.layout !== this.props.layout) {
      Plotly.newPlot(this.container, this.props.data, this.props.layout);
      this.attachListeners();
    }
  },


  componentWillUnmount: function componentWillUnmount() {
    Plotly.purge(this.container);
  },

  resize: function resize() {
    Plotly.Plots.resize(this.container);
  },

  render: function render() {
    var _this = this;

    var _props2 = this.props;
    var data = _props2.data;
    var layout = _props2.layout;
    var config = _props2.config;

    var other = _objectWithoutProperties(_props2, ['data', 'layout', 'config']);

    return React.createElement('div', _extends({}, other, { ref: function ref(node) {
        return _this.container = node;
      } }));
  }
});

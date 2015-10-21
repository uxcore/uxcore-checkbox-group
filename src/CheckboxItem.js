class CheckboxItem extends React.Component {
    constructor(props) {
        super(props)
    }
    _handleChange(e) {
        let me = this;
        me.props.onChange(e.currentTarget.checked, me.props.value);
    }
    render() {
        let me = this;
        let disabled = false;
        if ('disabled' in me.props) {
            disabled = me.props.disabled;
        }
        else {
            disabled = me.props.jsxdisabled;
        }
        return (
            <label style={me.props.labelStyle}>
                <input type="checkbox" disabled={disabled} ref="checkbox" checked={me.props.checked} className={me.props.className} onChange={me._handleChange.bind(me)}/>
                <s></s>
                {me.props.children}
            </label>
        );
    }
}

CheckboxItem.defaultProps = {
    value: "",
    className: "kuma-checkbox",
    onChange: function() {},
    labelStyle: {}
}

CheckboxItem.propTypes = {
    value: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    className: React.PropTypes.string,
    onChange: React.PropTypes.func,
    labelStyle:React.PropTypes.object
}

CheckboxItem.displayName = "CheckboxItem";

module.exports = CheckboxItem;
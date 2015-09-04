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
        return (
            <label>
                <input type="checkbox" ref="checkbox" checked={me.props.checked} className={me.props.className} onChange={me._handleChange.bind(me)}/>
                <s></s>
                {me.props.text}
            </label>
        );
    }
}

CheckboxItem.defaultProps = {
    text: "",
    value: "",
    className: "kuma-checkbox",
    onChange: function() {}
}

CheckboxItem.propTypes = {
    text: React.PropTypes.string,
    value: React.PropTypes.string,
    className: React.PropTypes.string,
    onChange: React.PropTypes.func
}

CheckboxItem.displayName = "CheckboxItem";

module.exports = CheckboxItem;
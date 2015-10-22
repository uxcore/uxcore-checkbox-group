/**
 * CheckboxGroup Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let Item = require("./CheckboxItem");
let assign = require("object-assign");

class CheckboxGroup extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let me = this;
        me.selected = me._copy(me.props.value) || [];
    }

    componentDidUpdate() {
        let me = this;
        me.selected = me._copy(me.props.value) || [];
    }

    _copy(a) {
        return JSON.parse(JSON.stringify(a))
    }

    _processChild() {
        let me = this;
        const length = React.Children.count(me.props.children);
        if (!length) return false;
        let elements = React.Children.map(me.props.children, (child, index) => {
            if (!!child.type  && child.type.displayName == "CheckboxItem") {
                return React.cloneElement(child, {
                    jsxdisabled: me.props.disabled,
                    onChange: me._handleChange.bind(me),
                    key: index,
                    checked: (me.props.value.indexOf(child.props.value) != -1)
                });
            }
        });
        return elements;
    }

    _handleChange(checked, value) {
        let me = this;
        if (checked) {
            // me.selected = me.selected.concat([value]);
            me.selected.push(value);
        }
        else {
            me.selected = me.selected.filter(function(item) {
                return item != value;
            })
        }
        me.props.onChange(JSON.parse(JSON.stringify(me.selected)));
    }

    render() {
        let me = this;
        return (
            <div className={me.props.className}>
                {me._processChild()}
            </div>
        );
    }
}

CheckboxGroup.Item = Item;

CheckboxGroup.defaultProps = {
    value: [],
    onChange: () => {},
    disabled: false,
    className: 'kuma-checkbox-group'
}


// http://facebook.github.io/react/docs/reusable-components.html
CheckboxGroup.propTypes = {
    value: React.PropTypes.array,
    onChange: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    className: React.PropTypes.string
}

CheckboxGroup.displayName = "CheckboxGroup";

module.exports = CheckboxGroup;

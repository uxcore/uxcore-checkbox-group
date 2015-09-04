/**
 * CheckboxGroup Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let Item = require("./CheckboxItem");

class CheckboxGroup extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let me = this;
        me.selected = me.props.value || [];
    }

    _processChild() {
        let me = this;
        const length = React.Children.count(me.props.children);
        if (!length) return false;
        let elements = React.Children.map(me.props.children, (child, index) => {
            if (!!child.type  && child.type.displayName == "CheckboxItem") {
                return React.cloneElement(child, {
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
        console.log(value);
        if (checked) {
            me.selected.push(value);
        }
        else {
            me.selected = me.selected.filter(function(item) {
                return item != value;
            })
        }
        console.log(me.selected);
        me.props.onChange(me.selected);
    }

    render() {
        let me = this;
        return (
            <div className="kuma-checkbox-group">
                {me._processChild()}
            </div>
        );
    }
}

CheckboxGroup.Item = Item;

CheckboxGroup.defaultProps = {
    value: [],
    onChange: () => {}
}


// http://facebook.github.io/react/docs/reusable-components.html
CheckboxGroup.propTypes = {
    value: React.PropTypes.array,
    onChange: React.PropTypes.func
}

CheckboxGroup.displayName = "CheckboxGroup";

module.exports = CheckboxGroup;
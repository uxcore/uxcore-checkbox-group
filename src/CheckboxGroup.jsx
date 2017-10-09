/**
 * CheckboxGroup Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Item from './CheckboxItem';


const shallowArrayCopy = (a) => {
  const value = a instanceof Array ? [...a] : a;
  return value;
};

class CheckboxGroup extends React.Component {
  componentWillMount() {
    const me = this;
    let selected = shallowArrayCopy(me.props.value);
    if (!Array.isArray(selected)) {
      selected = [selected];
    }
    me.selected = selected;
  }

  componentDidUpdate() {
    const me = this;
    let selected = shallowArrayCopy(me.props.value);
    if (!Array.isArray(selected)) {
      selected = [selected];
    }
    me.selected = selected;
  }

  processChild() {
    const me = this;
    const length = React.Children.count(me.props.children);
    if (!length) return false;
    const elements = React.Children.map(me.props.children, (child, index) => {
      if (!!child.type && child.type.displayName === 'CheckboxItem') {
        const value = me.props.value;
        return React.cloneElement(child, {
          jsxdisabled: me.props.disabled,
          onChange: me.handleChange.bind(me),
          key: index,
          checked: ((Array.isArray(value) ? value : [value]).indexOf(child.props.value) !== -1),
        });
      }
      return null;
    });
    return elements;
  }

  handleChange(checked, value) {
    const me = this;
    if (checked) {
      me.selected.push(value);
    } else {
      me.selected = me.selected.filter(item => item !== value);
    }
    me.props.onChange(shallowArrayCopy(me.selected));
  }

  render() {
    const me = this;
    return (
      <div className={me.props.className}>
        {me.processChild()}
      </div>
    );
  }
}

CheckboxGroup.Item = Item;

CheckboxGroup.defaultProps = {
  value: [],
  onChange: () => { },
  disabled: false,
  className: 'kuma-checkbox-group',
};


// http://facebook.github.io/react/docs/reusable-components.html
CheckboxGroup.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;

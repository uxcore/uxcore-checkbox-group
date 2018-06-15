import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


class CheckboxItem extends React.Component {
  handleChange(e) {
    const me = this;
    me.props.onChange(e.currentTarget.checked, me.props.value);
  }

  render() {
    const me = this;
    const {
      prefixCls,
      className,
      checked,
      addon,
      showAddonWhenChecked,
    } = me.props;
    let disabled = false;
    if (me.props.disabled !== undefined) {
      disabled = me.props.disabled;
    } else {
      disabled = me.props.jsxdisabled;
    }
    let showAddon = true;
    if (!addon || (showAddonWhenChecked && !checked)) {
      showAddon = false;
    }
    return (
      <label
        className={classnames(`${prefixCls}`, {
          [`${prefixCls}__disabled`]: disabled,
          [className]: !!className,
        })}
      >
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          className="kuma-checkbox"
          onChange={me.handleChange.bind(me)}
        />
        <s />
        <span className={`${prefixCls}-content`}>
          <span
            className="kuma-checkbox-group-item-text"
            dangerouslySetInnerHTML={{ __html: me.props.text }}
          />
          {showAddon ? (
            <span className="kuma-checkbox-group-item-addon">{addon}</span>
          ) : null}
        </span>
      </label>
    );
  }
}

CheckboxItem.defaultProps = {
  value: '',
  prefixCls: 'kuma-checkbox-group-item',
  onChange() {
  },
  addon: null,
  showAddonWhenChecked: false,
};

CheckboxItem.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  addon: PropTypes.node,
  showAddonWhenChecked: PropTypes.bool,
};

CheckboxItem.displayName = 'CheckboxItem';

export default CheckboxItem;

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
    const { prefixCls, className } = me.props;
    let disabled = false;
    if (me.props.disabled !== undefined) {
      disabled = me.props.disabled;
    } else {
      disabled = me.props.jsxdisabled;
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
          checked={me.props.checked}
          className="kuma-checkbox"
          onChange={me.handleChange.bind(me)}
        />
        <s />
        <span className={`${prefixCls}-content`}>
          <span dangerouslySetInnerHTML={{ __html: me.props.text }} />
          {me.props.addon}
        </span>
      </label>
    );
  }
}

CheckboxItem.defaultProps = {
  value: '',
  prefixCls: 'kuma-checkbox-group-item',
  onChange() { },
};

CheckboxItem.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

CheckboxItem.displayName = 'CheckboxItem';

export default CheckboxItem;

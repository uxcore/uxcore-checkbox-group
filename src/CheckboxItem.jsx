const React = require('react');

class CheckboxItem extends React.Component {

  handleChange(e) {
    const me = this;
    me.props.onChange(e.currentTarget.checked, me.props.value);
  }
  render() {
    const me = this;
    const { prefixCls } = me.props;
    let disabled = false;
    if ('disabled' in me.props) {
      disabled = me.props.disabled;
    } else {
      disabled = me.props.jsxdisabled;
    }
    return (
      <label className={`${prefixCls}`}>
        <input
          type="checkbox"
          disabled={disabled}
          checked={me.props.checked}
          className="kuma-checkbox"
          onChange={me.handleChange.bind(me)}
        />
        <s />
        <span className={`${prefixCls}-content`} dangerouslySetInnerHTML={{ __html: me.props.text }} />
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
  value: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  prefixCls: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

CheckboxItem.displayName = 'CheckboxItem';

module.exports = CheckboxItem;

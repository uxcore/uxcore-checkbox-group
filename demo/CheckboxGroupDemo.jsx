/**
 * CheckboxGroup Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

const Button = require('uxcore-button');
const React = require('react');
const Popover = require('uxcore-popover');

const CheckboxGroup = require('../src');

const Item = CheckboxGroup.Item;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ['air'],
      disabled: false,
    };
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }

  handleChange2() {
    this.setState({
      value: ['air'],
      disabled: !this.state.disabled,
    });
  }

  render() {
    return (
      <div>
        <CheckboxGroup
          disabled={this.state.disabled}
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
        >
          <Item
            text="天空天空天空" value="air"
            addon={
              <Popover overlay={<div>提示</div>}>
                <i className="kuma-icon kuma-icon-caution" style={{ color: 'blue', fontSize: '12px', marginLeft: '3px' }} />
              </Popover>
            }
          />
          <Item text="<b>大海大海大海</b>" value="sea" />
          <Item text="陆地陆地陆地" disabled value="land" />
          <Item text="飞机飞机飞机" value="plane" />
          <Item text="火车飞机飞机" value="train" />

        </CheckboxGroup>
        <Button onClick={this.handleChange2.bind(this)}>改变 state</Button>
      </div>
    );
  }
}

module.exports = Demo;

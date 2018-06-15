import expect from 'expect.js';
import React from 'react';
import assign from 'object-assign';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import CheckboxGroup from '../src';
import CheckboxGroupItem from '../src/CheckboxItem';

Enzyme.configure({ adapter: new Adapter() });

function renderWithProps(someProps) {
  const props = {
    value: '666',
    disabled: false,
  };
  const items = [
    { disabled: false, value: 'apple', text: '苹果' },
    { value: 'banana', text: '香蕉' },
    { value: 'orange', text: '橘子' },
    { value: 'sea', text: '大海' },
  ];
  assign(props, someProps);
  const CheckboxGroupItems = items.map(v => (
    <CheckboxGroupItem disabled={v.disabled} value={v.value} text={v.text} />
  ));
  const wrapper = mount(<CheckboxGroup {...props}>
    {CheckboxGroupItems}
  </CheckboxGroup>);
  return wrapper;
}

function renderWithProps2() {
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
      const items = [
        { disabled: false, value: 'apple', text: '苹果' },
        { value: 'banana', text: '香蕉' },
        { value: 'orange', text: '橘子' },
        { value: 'sea', text: '大海' },
      ];
      const CheckboxGroupItems = items.map(v => (
        <CheckboxGroupItem disabled={v.disabled} value={v.value} text={v.text} />
      ));
      return (
        <div>
          <CheckboxGroup
            disabled={this.state.disabled}
            onChange={this.handleChange.bind(this)}
            value={this.state.value}
          >
            {CheckboxGroupItems}

          </CheckboxGroup>
          {/* <Button onClick={this.handleChange2.bind(this)}>改变 state</Button> */}
        </div>
      );
    }
  }

  return mount(
    <Demo />,
  );
}

describe('CheckboxGroup', () => {
  describe('render', () => {
    it('should render correctly', (done) => {
      const wrapper = renderWithProps();
      expect(wrapper.find('.kuma-checkbox-group-item').length).to.be(4);
      done();
    });
  });

  describe('control', () => {
    const wrapper = renderWithProps2();
    it('should handle control correctly', (done) => {
      wrapper.instance().handleChange('air');
      expect(wrapper.instance().state.value).to.equal('air');
      done();
    });
  });
});

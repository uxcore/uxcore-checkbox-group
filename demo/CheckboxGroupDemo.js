/**
 * CheckboxGroup Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let CheckboxGroup = require('../src');
let Item = CheckboxGroup.Item
let Button = require('uxcore-button');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ["air"],
            disabled: false
        }
    }

    handleChange(value) {
        this.setState({
            value: value
        })
    }

    handleChange2() {
        this.setState({
            value: ['air'],
            disabled: !this.state.disabled
        })
    }

    render() {
        return (
            <div>
                <CheckboxGroup disabled={this.state.disabled} onChange={this.handleChange.bind(this)} value={this.state.value}>
                    <Item value="air">天空天空天空</Item>
                    <Item value="sea">大海大海大海</Item>
                    <Item value="land" disabled={true}>陆地陆地陆地</Item>
                    <Item value="plane">飞机飞机飞机</Item>
                    <Item value="train">火车飞机飞机</Item>

                </CheckboxGroup>
                <Button onClick={this.handleChange2.bind(this)}>改变 state</Button>
            </div>
        );
    }
};

module.exports = Demo;

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

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ["air"]
        }
    }

    handleChange(value) {
        this.setState({
            value: value
        })
    }

    render() {
        console.log(this.state.value)
        return (
            <div>
                <CheckboxGroup onChange={this.handleChange.bind(this)} value={this.state.value}>
                    <Item text="天空天空天空" value="air"/>
                    <Item text="大海大海大海" value="sea"/>
                    <Item text="陆地陆地陆地" value="land"/>
                    <Item text="飞机飞机飞机" value="plane"/>
                    <Item text="火车飞机飞机" value="train"/>

                </CheckboxGroup>
            </div>
        );
    }
};

module.exports = Demo;

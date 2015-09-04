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
        return (
            <div>
                <CheckboxGroup onChange={this.handleChange.bind(this)} value={this.state.value}>
                    <Item text="天空" value="air"/>
                    <Item text="大海" value="sea"/>
                </CheckboxGroup>
            </div>
        );
    }
};

module.exports = Demo;

---

## uxcore-checkbox-group [![Dependency Status](http://img.shields.io/david/uxcore/uxcore-checkbox-group.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-checkbox-group) [![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-checkbox-group.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-checkbox-group#info=devDependencies) 

## TL;DR

uxcore-checkbox-group ui component for react
ES5 support needed(like es5-shim)

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-checkbox-group
$ cd uxcore-checkbox-group
$ npm install
$ gulp server
```

## Usage

```javascript
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
                    <Item value="air">天空天空天空</Item>
                    <Item value="sea">大海大海大海</Item>
                    <Item value="land" disabled={true}>陆地陆地陆地</Item>
                    <Item value="plane">飞机飞机飞机</Item>
                    <Item value="train">火车飞机飞机</Item>
                </CheckboxGroup>
            </div>
        );
    }
};

module.exports = Demo;
```

## demo
http://uxcore.github.io/

## API

## Props

### CheckboxGroup

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|value|array|required|[]|由 value 组成地数组，与 React 受限组件表现一致，选中项与 value 保持一致，数组中的值与 item 的 value 相对应|
|onChange|function|required|-|与 React 受限组件表现一致，在 checkbox 群发生改变时触发，借此来更改 value|
|disabled|boolean|optional|false|是否为 disable 状态|
|className|string|optional|'kuma-checkbox-group'|暂无|
|style|object|optional|{}|暂无|

### CheckboxItem

> 通过 CheckboxGroup.Item 取得。

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|value|string|required|-|checkbox 对应的值|
|labelStyle|object|optional|{}|checkboxItem对应label的style|




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

### demo
http://uxcore.github.io/uxcore-checkbox-group/

### API

### props

CheckboxGroup

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|value|array|required|[]|与 React 受限组件表现一致，选中项与 value 保持一致，数组中的值与 item 的 value 相对应|
|onChange|function|required|-|与 React 受限组件表现一致，在 checkbox 群发生改变时触发，借此来更改 value|

CheckboxItem

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|text|string|optinal|-|checkbox 后面跟着的说明文字|
|value|string|required|-|checkbox 对应的值|




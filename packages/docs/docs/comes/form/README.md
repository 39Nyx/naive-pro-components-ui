---
title: Form
order: 1
group:
  title: 数据录入
  order: 2
---

## 基础表单

<code src="./demos/BaseFormDemo.vue"></code>

## 表单校验

<code src="./demos/ValidationFormDemo.vue"></code>

## 栅格化布局

通过设置`span`适配不同分辨率表单所占栅格数, `m`以下占`24`列, `m`占`12`列, `l`占`8`列, `xl`占`6`列

<code src="./demos/GridFormDemo.vue"></code>

## 表单联动

### 一对一联动

<code src="./demos/OneToOneFormDemo.vue"></code>

### 链式联动

<code src="./demos/ChainedFormDemo.vue"></code>

### 禁用联动

对于一些表单, 可能需要满足某些条件之后才能输入，这时候可以通过设置`disabled`属性为一个函数来实现禁用, 或者通过设置`readonly`属性为一个函数来实现只读

<code src="./demos/DisabledFormDemo.vue"></code>

### 数据联动

## 自定义表单组件

## 表单提交

# 原型和继承
> js 原型和继承, 原型链, 构造函数, 实例, 类, 继承, 组合, 组合继承, 寄生组合继承, 原型式继承, 寄生式继承, 寄生组合式继承, 组合寄生式继承, 组合寄生组合式继承,
## 原型式继承
```javascript
function Parent1() {
    this.name = 'parent1'
    this.play = [1,2,3]
}
function Child1() {
    this.type = 'child1'
}
Child1.prototype = new Parent1()
var s1 = new Child1()
var s2 = new Child1()
s1.play.push(4)
console.log(s1.play,s2.play);
```
- 缺点
  >  多个实例对象指向同一个原型对象, 所以修改其中一个, 另一个也会跟着改变

## 构造函数继承
```javascript
function Parent1() {
    this.name = 'parent1'
}
Parent1.prototype.getName = function() {
    return this.name
}
function Child1() {
    Parent1.call(this)
    this.type = 'child1'
}
let child = new Child1()
console.log(child);
console.log(child.getName());
```
- 缺点
  > 只能继承父类的实例属性和方法，不能继承原型属性或者方法
## 组合继承


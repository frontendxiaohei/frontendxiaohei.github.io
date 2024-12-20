# 词法分析
> 编译器做的事   把 源代码  变成  目标代码, 比如
```javascript
arr.map(e => e + 1)

arr.map(function(e) {
  return e + 1
})
```

## 过程
1. 词法分析
2. 语法分析
3. 语义分析
4. 生成中间代码
5. 优化
6. 生成目标代码


## 词法分析
> 主要依靠**正则** 和 **有限状态机** 来实现

有限状态机:   一个机器有 **有限个**状态, 每个状态有  **有限个**  转移条件,  每个状态  有  **有限个**  转移动作

let a = 100 

把  源代码  变成  词法单元  数组  [let, a, =, 100] 这个过程  叫做  词法分析



## 语法分析
> 会用到递归下降算法
把程序  变成  抽象语法树  AST  这个过程  叫做  语法分析
把
```javascript
let a = 100
```
变成
```json
{
  "type": "Program",
  "start": 0,
  "end": 11,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a"
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 11,
            "value": 100,
            "raw": "100"
          }
        }
      ],
      "kind": "let"
    }
  ],
  "sourceType": "module"
}
```

## 语义分析
> 语义分析就是要让计算机理解我们的真实意图，把一些模棱两可的地方消除掉, 要结合程序上下文  来判断


## 总结
1. 词法分析是把程序分割成一个个Token的过程，可以通过构造有限自动机来实现。
2. 语法分析是把程序的结构识别出来，并形成一棵便于由计算机处理的抽象语法树。可以用递归下降的算法来实现。
3. 语义分析是消除语义模糊，生成一些属性信息，让计算机能够依据这些信息生成目标代码



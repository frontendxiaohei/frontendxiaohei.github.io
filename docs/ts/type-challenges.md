---
outline: deep
---
# ts类型体操练习

实现pick
> Pick<T, K> 函数，返回一个新的类型，从对象 T 中抽取类型 K
```ts
interface TodoItem {
    title: string
    description: string
    completed: boolean
}

// type MyPick<T, K extends keyof T> = {
//     [P in K]: T[P]
// }

// with default
type MyPick<T, K extends keyof T = keyof T> = {
    [P in K]: T[P]
}

// type TodoPreview = MyPick<Todo, 'title' | 'completed'>


type TodoPreview = MyPick<Todo>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
    description: 'Clean the room'
}

export {}
```ts


## 实现readonly
> 内置 Readonly<T> 函数，将对象所有属性设置为只读
```typescript
interface TodoItem {
    title: string
    description: string
}

type MyReadonly<B> = {
    readonly [A in keyof B]: B[A]
}


const todo: MyReadonly<TodoItem> = {
    title: "Hey",
    description: "foobar"
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property

export {}
```typescript

## 类型 First<T>，取到数组第一项的类型
```typescript
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]



// type First<T extends any[]> = T[0]

// type First<T extends any[]> = T extends [] ? never : T[0]

// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

type First<T> = T extends [infer F, ...infer Rest] ? F : never



type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
```typescript

## Length<T> 获取元组长度

- 对 TS 来说，元组和数组都是数组，但元组对 TS 来说可以观测其长度，T['length'] 对元组来说返回的是具体值，而对数组来说返回的是 number。

```typescript
type X = ['x', 'y 3', 'z X', 'x Y']
type Y = ['x 9', 'x HEAVY', 'x', 'x', 'x y']

type Length<T extends any[]> = T['length']

type teslaLength = Length<X>  // expected 4
type spaceXLength = Length<Y> // expected 5
```typescript

## 实现Exclude<T, U>
> Exclude<T, U>，返回 T 中不存在于 U 的部分。
```typescript
// 本题答案
type MyExclude<T, U> = T extends U ? never : T


type C = MyExclude<'a' | 'b', 'a' | 'c'> // 'b'

type D = MyExclude<'a' , 'a' | 'c'> | MyExclude<'b', 'a' | 'c'>

// ts联合类型是执行分配律的
```typescript

## 实现Awaited
类型 Awaited，比如从 Promise<ExampleType> 拿到 ExampleType。

首先 TS 永远不会执行代码，所以脑子里不要有 “await 得等一下才知道结果” 的念头。该题关键就是从 Promise<T> 中抽取类型 T，很适合用 infer 做：

```typescript
interface User {
    id: number
    name: string
}
async function fetchUser(): Promise<User> {
    return new Promise<User>((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'John'
            })
        }, 1000)
    })
}
type UserResult = Awaited<ReturnType<typeof fetchUser>>
// type MyAwaited<T> = T extends Promise<infer U> ? U : never
// 该题答案
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer P>
  ? P extends Promise<unknown> ? MyAwaited<P> : P
  : never

```


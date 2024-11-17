## 响应性
> 响应性是 Vue 最强大的特性之一。当响应式数据变化时，视图会自动更新。


## 数据劫持原理
- 数组
> 重写数组的方法  
- 对象
> 普通对象: Object.defineProperty() , 对象套对象, 递归
> 对象的新增加的属性 $set


## 实现
```javascript

const arrMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']


const arrayPrototype = Array.prototype

const arrayMethods = Object.create(arrayPrototype)


arrMethods.forEach(methodName => {
    arrayMethods[methodName] = function(...args) {
        const result = arrayPrototype[methodName].apply(this, args)
        // 数组新增的元素也要变成响应式
        let inserted
        switch (methodName) {
            case 'push':
            case 'unshift':
                inserted = args
                break
            case 'splice':
                inserted = args.slice(2)
                break
        }
        if (inserted) {
            observe(inserted)
        }
        return result
    }
})



function defineReactive(obj, key, val) {
    // 递归
    observe(val)
    Object.defineProperty(obj, key, {
        get() {
            return val
        },
        set(newVal) {
            if (newVal!== val) {
                observe(newVal)
                val = newVal
            }
        }
    })
}

function observe(data) {
    if (typeof data!== 'object' || data === null) return
    if (Array.isArray(data)) {
        // 重写数组的方法
        data.__proto__ = arrayMethods
        // 数组中的对象也要变成响应式
        for (let i = 0; i < data.length; i++) {
            observe(data[i])
        }
    } else {
        // 普通对象
        for (let key in data) {
            defineReactive(data, key, data[key])
        }
    }
}



```


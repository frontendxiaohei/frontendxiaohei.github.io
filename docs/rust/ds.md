# rust 数组使用
### 声明数组

你可以使用以下语法声明一个数组：

```rust
let array: [Type; size] = [value1, value2, ..., valueN];
```
```rust
let arr: [i32; 5] = [1, 2, 3, 4, 5];
```

### 初始化数组

```rust
let array = [value; size];
```
```rust
let arr = [0; 5]; // [0, 0, 0, 0, 0]
```

### 访问数组元素
```rust
let first_element = arr[0]; 
let second_element = arr[1]; 
```

### 遍历数组

你可以使用 `for` 循环来遍历数组：

```rust
for element in arr.iter() {
    println!("{}", element);
}
```

或者使用索引：

```rust
for i in 0..arr.len() {
    println!("{}", arr[i]);
}
```

### 数组切片

你可以使用切片来获取数组的一部分：

```rust
let slice = &arr[1..3]; // 获取从索引 1 到 3（不包括 3）的元素
```

### 数组和函数

你可以将数组作为参数传递给函数：

```rust
fn print_array(arr: &[i32]) {
    for &element in arr {
        println!("{}", element);
    }
}

fn main() {
    let arr = [1, 2, 3, 4, 5];
    print_array(&arr);
}
```

注意，当你将数组传递给函数时，通常传递的是数组的切片（即 `&[Type]`），这样可以避免数组的所有权问题。

### 数组的大小和类型

数组的大小是其类型的一部分，这意味着不同大小的数组是不同的类型。例如，`[i32; 5]` 和 `[i32; 10]` 是两种不同的类型。

### 数组的限制

由于数组的大小是固定的，如果你需要一个大小可变的序列，你应该使用 `Vec<T>`，这是 Rust 的动态数组类型。

这些是 Rust 中数组使用的一些基本概念。数组是 Rust 中最简单的集合类型之一，但它们的大小固定且类型单一，这使得它们在某些情况下可能不够灵活。对于更复杂的数据集合需求，Rust 提供了如 `Vec<T>`、`HashMap<K, V>` 等更高级的数据结构。


# rust map

### 引入 HashMap

首先，你需要在文件顶部引入 `HashMap`：

```rust
use std::collections::HashMap;
```

### 创建 HashMap

你可以使用 `HashMap::new()` 来创建一个新的空 `HashMap`：

```rust
let mut map = HashMap::new();
```

### 插入键值对

使用 `insert` 方法来向 `HashMap` 中添加键值对：

```rust
map.insert("k1", "v1");
map.insert("k2", "v2");
```

### 访问值

你可以通过键来访问对应的值：

```rust
if let Some(value) = map.get("key1") {
    println!("The value is {}", value);
} else {
    println!("Key not found");
}
```

### 检查键是否存在

你可以使用 `contains_key` 方法来检查 `HashMap` 中是否包含特定的键：

```rust
if map.contains_key("key1") {
    println!("Key1 exists");
} else {
    println!("Key1 does not exist");
}
```

### 遍历 HashMap

你可以使用 `iter` 方法来遍历 `HashMap` 中的所有键值对：

```rust
for (key, value) in map.iter() {
    println!("{}: {}", key, value);
}
```

### 更新值

如果键已经存在于 `HashMap` 中，你可以使用 `insert` 方法来更新其值：

```rust
map.insert("key1", "new_value");
```

### 删除键值对

你可以使用 `remove` 方法来删除 `HashMap` 中的键值对：

```rust
map.remove("key1");
```

### 获取键值对的数量

你可以使用 `len` 方法来获取 `HashMap` 中键值对的数量：

```rust
println!("The map has {} entries", map.len());
```

### 清空 HashMap

你可以使用 `clear` 方法来清空 `HashMap` 中的所有键值对：

```rust
map.clear();
```

### 完整示例

这里是一个完整的示例，展示了如何在 Rust 中使用 `HashMap`：

```rust
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();

    // 插入键值对
    map.insert("key1", "value1");
    map.insert("key2", "value2");

    // 访问值
    if let Some(value) = map.get("key1") {
        println!("The value is {}", value);
    } else {
        println!("Key not found");
    }

    // 检查键是否存在
    if map.contains_key("key1") {
        println!("Key1 exists");
    } else {
        println!("Key1 does not exist");
    }

    // 遍历 HashMap
    for (key, value) in map.iter() {
        println!("{}: {}", key, value);
    }

    // 更新值
    map.insert("key1", "new_value");

    // 删除键值对
    map.remove("key1");

    // 获取键值对的数量
    println!("The map has {} entries", map.len());

    // 清空 HashMap
    map.clear();
}
```

这个示例涵盖了 `HashMap` 的基本操作，包括创建、插入、访问、更新、删除、遍历和清空。`HashMap` 是 Rust 中非常有用的数据结构，适用于需要快速查找和更新键值对的场景。









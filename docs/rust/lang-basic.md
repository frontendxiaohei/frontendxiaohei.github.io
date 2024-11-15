# 基本语法

## if
```rust
fn main() {
    let number = 6;
    if number % 2 == 0 {
        println!("偶数一个");
    } else if number % 2 == 1 {
        println!("奇数一个");
    } 
}
```

## 返回值if
```rust
fn main() {
    let number = 6;
    let result = if number % 2 == 0 {
        "偶数一个"
    } else {
        "奇数一个"
    };
    println!("{}", result);
}
```

## for循环
> 1..4 是一个范围，它表示从 1 到 4（不包括 4）的整数序列。
> 'a'..'z' 是一个范围，它表示从字符 'a' 到字符 'z'
```rust
fn main() {
    for number in 1..4 {
        println!("{}", number);
    }
}
```

## while循环
```rust
fn main() {
    let mut number = 1;
    while number!= 5 {
        println!("{}", number);
        number += 1;
    }
}

```

## loop循环
```rust
fn main() {
    let mut counter = 0;
    let result = loop {
        counter += 1;
        if counter == 10 {
            break counter * 2;
        }
    };
    println!("The result is {}", result);
}
```


## match匹配
> Some和None是枚举类型，Some表示有值，None表示无值。
```rust
fn main() {
    let number = Some(5);
    match number {
        Some(x) => println!("The number is {}", x),
        None => println!("No number was provided"),
    }
}
```
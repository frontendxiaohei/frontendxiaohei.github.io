在 Rust 中，`From` 和 `FromStr` 是两个非常有用的 trait，它们提供了类型转换的便利。下面将分别介绍这两个 trait 并给出示例。

### `From` Trait
`From` trait 用于定义一种类型到另一种类型的转换。当实现了 `From` trait 时，自动获得了 `Into` trait 的实现。`From` trait 的定义如下：

```rust
pub trait From<T>: Sized {
    fn from(T) -> Self;
}
```

#### 示例：自定义类型之间的转换
假设我们有一个表示二维点的结构体 `Point2D` 和一个表示三维点的结构体 `Point3D`，我们希望从 `Point2D` 转换为 `Point3D`：

```rust
#[derive(Debug)]
struct Point2D {
    x: i32,
    y: i32,
}

#[derive(Debug)]
struct Point3D {
    x: i32,
    y: i32,
    z: i32,
}

impl From<Point2D> for Point3D {
    fn from(point: Point2D) -> Self {
        Point3D {
            x: point.x,
            y: point.y,
            z: 0, // 默认 z 为 0
        }
    }
}

fn main() {
    let point2d = Point2D { x: 1, y: 2 };
    let point3d: Point3D = point2d.into(); // 使用 into 方法进行转换
    println!("{:?}", point3d); // 输出: Point3D { x: 1, y: 2, z: 0 }
}
```

在这个示例中，我们实现了 `From<Point2D> for Point3D`，这样就可以使用 `into` 方法将 `Point2D` 转换为 `Point3D`。

### `FromStr` Trait
`FromStr` trait 用于从字符串解析成特定的类型。它的定义如下：

```rust
pub trait FromStr: Sized {
    type Err;

    fn from_str(s: &str) -> Result<Self, Self::Err>;
}
```

+ `Err` 是一个关联类型，表示解析失败时的错误类型。
+ `from_str` 方法接受一个字符串切片 `&str`，返回一个 `Result<Self, Self::Err>`，表示解析成功或失败。

#### 示例：自定义类型从字符串解析
假设我们有一个表示日期的结构体 `Date`，我们希望从字符串解析成 `Date`：

```rust
use std::str::FromStr;

#[derive(Debug, PartialEq)]
struct Date {
    year: u32,
    month: u32,
    day: u32,
}

impl FromStr for Date {
    type Err = &'static str; // 使用静态字符串作为错误类型

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        let parts: Vec<&str> = s.split('-').collect();
        if parts.len() != 3 {
            return Err("Invalid date format");
        }

        let year = parts[0].parse().map_err(|_| "Invalid year")?;
        let month = parts[1].parse().map_err(|_| "Invalid month")?;
        let day = parts[2].parse().map_err(|_| "Invalid day")?;

        Ok(Date { year, month, day })
    }
}

fn main() {
    let date_str = "2025-01-13";
    match Date::from_str(date_str) {
        Ok(date) => println!("{:?}", date), // 输出: Date { year: 2025, month: 1, day: 13 }
        Err(e) => println!("Error: {}", e),
    }

    let invalid_date_str = "2025-01-32";
    match Date::from_str(invalid_date_str) {
        Ok(date) => println!("{:?}", date),
        Err(e) => println!("Error: {}", e), // 输出: Error: Invalid day
    }
}
```

在这个示例中，我们实现了 `FromStr` trait 用于从字符串解析 `Date` 结构体。解析过程中，我们使用 `split` 方法将字符串按 `-` 分割，然后分别解析年、月、日。如果解析失败，返回相应的错误信息。

+ `From` trait 用于类型之间的转换，提供了 `into` 方法的自动实现。
+ `FromStr` trait 用于从字符串解析成特定类型，返回 `Result` 类型，表示解析成功或失败。

### 示例 1：`From` Trait 用于基本类型转换
假设我们有一个自定义的 `Temperature` 结构体，我们希望从 `f32` 类型的温度值转换为 `Temperature`：

```rust
#[derive(Debug, PartialEq)]
struct Temperature {
    value: f32,
    unit: String,
}

impl From<f32> for Temperature {
    fn from(value: f32) -> Self {
        Temperature {
            value,
            unit: "Celsius".to_string(),
        }
    }
}

fn main() {
    let temp_f32 = 25.5;
    let temp: Temperature = temp_f32.into();
    println!("{:?}", temp); // 输出: Temperature { value: 25.5, unit: "Celsius" }
}
```

在这个示例中，我们实现了 `From<f32> for Temperature`，这样就可以使用 `into` 方法将 `f32` 转换为 `Temperature`，并且默认单位为 "Celsius"。

### 示例 2：`From` Trait 用于枚举类型转换
假设我们有一个表示颜色的枚举 `Color`，我们希望从一个元组 `(u8, u8, u8)` 转换为 `Color`：

```rust
#[derive(Debug, PartialEq)]
enum Color {
    RGB(u8, u8, u8),
    CMYK(u8, u8, u8, u8),
}

impl From<(u8, u8, u8)> for Color {
    fn from(rgb: (u8, u8, u8)) -> Self {
        Color::RGB(rgb.0, rgb.1, rgb.2)
    }
}

fn main() {
    let rgb = (255, 0, 0);
    let color: Color = rgb.into();
    println!("{:?}", color); // 输出: Color::RGB(255, 0, 0)
}
```

在这个示例中，我们实现了 `From<(u8, u8, u8)> for Color`，这样就可以使用 `into` 方法将元组 `(u8, u8, u8)` 转换为 `Color::RGB`。

### 示例 3：`FromStr` Trait 用于解析复杂字符串
假设我们有一个表示用户信息的结构体 `User`，我们希望从字符串解析成 `User`：

```rust
use std::str::FromStr;

#[derive(Debug, PartialEq)]
struct User {
    id: u32,
    name: String,
    email: String,
}

impl FromStr for User {
    type Err = &'static str;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        let parts: Vec<&str> = s.split(',').collect();
        if parts.len() != 3 {
            return Err("Invalid user format");
        }

        let id = parts[0].parse().map_err(|_| "Invalid id")?;
        let name = parts[1].to_string();
        let email = parts[2].to_string();

        Ok(User { id, name, email })
    }
}

fn main() {
    let user_str = "1,John Doe,john@example.com";
    match User::from_str(user_str) {
        Ok(user) => println!("{:?}", user), // 输出: User { id: 1, name: "John Doe", email: "john@example.com" }
        Err(e) => println!("Error: {}", e),
    }

    let invalid_user_str = "1,John Doe";
    match User::from_str(invalid_user_str) {
        Ok(user) => println!("{:?}", user),
        Err(e) => println!("Error: {}", e), // 输出: Error: Invalid user format
    }
}
```

在这个示例中，我们实现了 `FromStr` trait 用于从字符串解析 `User` 结构体。解析过程中，我们使用 `split` 方法将字符串按 `,` 分割，然后分别解析 `id`、`name` 和 `email`。如果解析失败，返回相应的错误信息。

### 示例 4：`FromStr` Trait 用于解析自定义错误类型
假设我们有一个表示版本号的结构体 `Version`，我们希望从字符串解析成 `Version`，并且定义一个自定义的错误类型 `VersionParseError`：

```rust
use std::str::FromStr;

#[derive(Debug, PartialEq)]
struct Version {
    major: u32,
    minor: u32,
    patch: u32,
}

#[derive(Debug, PartialEq)]
enum VersionParseError {
    InvalidFormat,
    InvalidNumber,
}

impl FromStr for Version {
    type Err = VersionParseError;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        let parts: Vec<&str> = s.split('.').collect();
        if parts.len() != 3 {
            return Err(VersionParseError::InvalidFormat);
        }

        let major = parts[0].parse().map_err(|_| VersionParseError::InvalidNumber)?;
        let minor = parts[1].parse().map_err(|_| VersionParseError::InvalidNumber)?;
        let patch = parts[2].parse().map_err(|_| VersionParseError::InvalidNumber)?;

        Ok(Version { major, minor, patch })
    }
}

fn main() {
    let version_str = "1.2.3";
    match Version::from_str(version_str) {
        Ok(version) => println!("{:?}", version), // 输出: Version { major: 1, minor: 2, patch: 3 }
        Err(e) => println!("Error: {:?}", e),
    }

    let invalid_version_str = "1.2";
    match Version::from_str(invalid_version_str) {
        Ok(version) => println!("{:?}", version),
        Err(e) => println!("Error: {:?}", e), // 输出: Error: InvalidFormat
    }

    let invalid_number_str = "1.2.a";
    match Version::from_str(invalid_number_str) {
        Ok(version) => println!("{:?}", version),
        Err(e) => println!("Error: {:?}", e), // 输出: Error: InvalidNumber
    }
}
```

在这个示例中，我们实现了 `FromStr` trait 用于从字符串解析 `Version` 结构体，并定义了一个自定义的错误类型 `VersionParseError`。解析过程中，我们使用 `split` 方法将字符串按 `.` 分割，然后分别解析 `major`、`minor` 和 `patch`。如果解析失败，返回相应的错误信息。

### 总结
+ `From` trait 用于类型之间的转换，提供了 `into` 方法的自动实现，适用于各种类型转换场景。
+ `FromStr` trait 用于从字符串解析成特定类型，返回 `Result` 类型，表示解析成功或失败，适用于需要从字符串解析复杂数据结构的场景。


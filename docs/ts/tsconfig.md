# tsconfig.json 配置的含义

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["es5", "dom"],
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "outDir": "./lib",
    "rootDir": "./src",
    "strict": true,
    "noImplicitAny": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```

>tsconfig.json 是 TypeScript 项目的配置文件。如果一个目录下存在一个 tsconfig.json 文件，那么往往意味着这个目录就是 TypeScript 项目的根目录。
tsconfig.json 包含 TypeScript 编译的相关配置，通过更改编译配置项，我们可以让 TypeScript 编译出 ES6、ES5、node 的代码。

compilerOptions
编译选项是 TypeScript 配置的核心部分，compilerOptions 内的配置根据功能可以分为 6 个部分

- target
>target 选项用来指定 TypeScript 编译代码的目标，不同的目标将影响代码中使用的特性是否会被降级。
target 的可选值包括ES3、ES5、ES6、ES7、ES2017、ES2018、ES2019、ES2020、ESNext这几种。
一般情况下，target 的默认值为ES3，如果不配置选项的话，代码中使用的ES6特性，比如箭头函数会被转换成等价的函数表达式。
- module
>module 选项可以用来设置 TypeScript 代码所使用的模块系统。
如果 target 的值设置为 ES3、ES5 ，那么 module 的默认值则为 CommonJS；如果 target 的值为 ES6 或者更高，那么 module 的默认值则为 ES6。
另外，module 还支持 ES2020、UMD、AMD、System、ESNext、None 的选项。
- jsx
>jsx 选项用来控制 jsx 文件转译成 JavaScript 的输出方式。该选项只影响.tsx文件的 JS 文件输出，并且没有默认值选项。
react: 将 jsx 改为等价的对 React.createElement 的调用，并生成 .js 文件。
react-jsx: 改为 __jsx 调用，并生成 .js 文件。
react-jsxdev: 改为 __jsx 调用，并生成 .js 文件。
preserve: 不对 jsx 进行改变，并生成 .jsx 文件。
react-native: 不对 jsx 进行改变，并生成 .js 文件。
- incremental
>incremental 选项用来表示是否启动增量编译。incremental 为true时，则会将上次编译的工程图信息保存到磁盘上的文件中。
- declaration
>declaration 选项用来表示是否为项目中的 TypeScript 或 JavaScript 文件生成 .d.ts 文件，这些 .d.ts 文件描述了模块导出的 API 类型。
具体的行为你可以在Playground中编写代码，并在右侧的 .D.TS 观察输出。
- sourceMap
>sourceMap 选项用来表示是否生成sourcemap 文件，这些文件允许调试器和其他工具在使用实际生成的 JavaScript 文件时，显示原始的 TypeScript 代码。
Source map 文件以 .js.map （或 .jsx.map）文件的形式被生成到与 .js 文件相对应的同一个目录下。
- lib
>lib 配置项允许我们更细粒度地控制代码运行时的库定义文件，比如说 Node.js 程序，由于并不依赖浏览器环境，因此不需要包含 DOM 类型定义；而如果需要使用一些最新的、高级 ES 特性，则需要包含 ESNext 类型。
具体的详情你可以在TypeScript 源码中查看完整的列表，并且自定义编译需要的lib类型定义。
严格模式
TypeScript 兼容 JavaScript 的代码，默认选项允许相当大的灵活性来适应这些模式。
在迁移 JavaScript 代码时，你可以先暂时关闭一些严格模式的设置。在正式的 TypeScript 项目中，我推荐开启 strict 设置启用更严格的类型检查，以减少错误的发生。
- strict
>开启 strict 选项时，一般我们会同时开启一系列的类型检查选项，以便更好地保证程序的正确性。
strict 为 true 时，一般我们会开启以下编译配置。
alwaysStrict：保证编译出的文件是 ECMAScript 的严格模式，并且每个文件的头部会添加 'use strict'。
- strictNullChecks
>更严格地检查 null 和 undefined 类型，比如数组的 find 方法的返回类型将是更严格的 T | undefined。
strictBindCallApply：更严格地检查 call、bind、apply 函数的调用，比如会检查参数的类型与函数类型是否一致。
strictFunctionTypes：更严格地检查函数参数类型和类型兼容性。
strictPropertyInitialization：更严格地检查类属性初始化，如果类的属性没有初始化，则会提示错误。
- noImplicitAny
>禁止隐式 any 类型，需要显式指定类型。TypeScript 在不能根据上下文推断出类型时，会回退到 any 类型。

- noImplicitThis
>禁止隐式 this 类型，需要显示指定 this 的类型。
注意：将strict设置为true，开启严格模式，
额外检查
TypeScript 支持一些额外的代码检查，在某种程度上介于编译器与静态分析工具之间。如果你想要更多的代码检查，可能更适合使用 ESLint 这类工具。
- noImplicitReturns
>禁止隐式返回。如果代码的逻辑分支中有返回，则所有的逻辑分支都应该有返回。
- noUnusedLocals
>禁止未使用的本地变量。如果一个本地变量声明未被使用，则会抛出错误。

- noUnusedParameters
>禁止未使用的函数参数。如果函数的参数未被使用，则会抛出错误。

- noFallthroughCasesInSwitch
>禁止 switch 语句中的穿透的情况。开启 noFallthroughCasesInSwitch 后，如果 switch 语句的流程分支中没有 break 或 return ，则会抛出错误，从而避免了意外的 swtich 判断穿透导致的问题。

- moduleResolution
>moduleResolution 用来指定模块解析策略。
module 配置值为 AMD、UMD、System、ES6 时，moduleResolution 默认为 classic，否则为 node。在目前的新代码中，我们一般都是使用 node，而不使用classic。
具体的模块解析策略，你可以查看模块解析策略。
- baseUrl
>baseUrl 指的是基准目录，用来设置解析非绝对路径模块名时的基准目录。比如设置 baseUrl 为 './' 时，TypeScript 将会从 tsconfig.json 所在的目录开始查找文件。
- paths
>paths 指的是路径设置，用来将模块路径重新映射到相对于 baseUrl 定位的其他路径配置。这里我们可以将 paths 理解为 webpack 的 alias 别名配置。
下面我们看一个具体的示例：

{
  "compilerOptions": {
    "paths": {
      "@src/*": ["src/*"],
      "@utils/*": ["src/hooks/*"]
    }
  }
}
在上面的例子中，TypeScript 模块解析支持以一些自定义前缀来寻找模块，避免在代码中出现过长的相对路径。
注意：因为 paths 中配置的别名仅在类型检测时生效，所以在使用 tsc 转译或者 webpack 构建 TypeScript 代码时，我们需要引入额外的插件将源码中的别名替换成正确的相对路径。
- rootDirs
> rootDirs 可以指定多个目录作为根目录。这将允许编译器在这些“虚拟”目录中解析相对应的模块导入，就像它们被合并到同一目录中一样。
- typeRoots
>typeRoots 用来指定类型文件的根目录。
在默认情况下，所有 node_modules/@types 中的任何包都被认为是可见的。如果手动指定了 typeRoots ，则仅会从指定的目录里查找类型文件。
- types
>在默认情况下，所有的 typeRoots 包都将被包含在编译过程中。
手动指定 types 时，只有列出的包才会被包含在全局范围内，如下示例：
{
  "compilerOptions": {
    "types": ["react", "vue", "express"]
  }
}
在上述示例中可以看到，手动指定 types 时 ，仅包含了 react、vue、express 三个 node 模块的类型包。
- allowSyntheticDefaultImports
>allowSyntheticDefaultImports****允许合成默认导出。
当 allowSyntheticDefaultImports 设置为 true，即使一个模块没有默认导出（export default），我们也可以在其他模块中像导入包含默认导出模块一样的方式导入这个模块，如下示例：
// allowSyntheticDefaultImports: true 可以使用
import echarts from 'echarts';
// allowSyntheticDefaultImports: false
import * as echarts from 'echarts';
在上面的示例中，对于没有默认导出的模块 react，如果设置了 allowSyntheticDefaultImports 为 true，则可以直接通过 import 导入 react；但如果设置 allowSyntheticDefaultImports 为 false，则需要通过 import * as 导入 echarts。
- esModuleInterop
>esModuleInterop 指的是 ES 模块的互操作性。
在默认情况下，TypeScript 像 ES6 模块一样对待 CommonJS / AMD / UMD，但是此时的 TypeScript 代码转移会导致不符合 ES6 模块规范。不过，开启 esModuleInterop 后，这些问题都将得到修复。
一般情况下，在启用 esModuleInterop 时，我们将同时启用 allowSyntheticDefaultImports。

- Source Maps
>为了支持丰富的调试工具，并为开发人员提供有意义的崩溃报告，TypeScript 支持生成符合 JavaScript Source Map 标准的附加文件（即 .map 文件）。
- sourceRoot
>sourceRoot 用来指定调试器需要定位的 TypeScript 文件位置，而不是相对于源文件的路径。
sourceRoot的取值可以是路径或者 URL。
- mapRoot
>mapRoot 用来指定调试器需要定位的 source map 文件的位置，而不是生成的文件位置。
- inlineSourceMap
>开启 inlineSourceMap 选项时，将不会生成 .js.map 文件，而是将 source map 文件内容生成内联字符串写入对应的 .js 文件中。虽然这样会生成较大的 JS 文件，但是在不支持 .map 调试的环境下将会很方便。
- inlineSources
>开启 inlineSources 选项时，将会把源文件的所有内容生成内联字符串并写入 source map 中。这个选项的用途和 inlineSourceMap 是一样的。
实验选项
TypeScript 支持一些尚未在 JavaScript 提案中稳定的语言特性，因此在 TypeScript 中实验选项是作为实验特性存在的。
- experimentalDecorators
>experimentalDecorators****选项会开启装饰器提案的特性。
目前，装饰器提案在 stage 2 仍未完全批准到 JavaScript 规范中，且 TypeScript 实现的装饰器版本可能和 JavaScript 有所不同。

- emitDecoratorMetadata
>emitDecoratorMetadata****选项允许装饰器使用反射数据的特性。
- skipLibCheck
>开启 skipLibCheck****选项，表示可以跳过检查声明文件。
如果我们开启了这个选项，则可以节省编译期的时间，但可能会牺牲类型系统的准确性。在设置该选项时，我推荐值为true**。**
- forceConsistentCasingInFileNames
>TypeScript 对文件的大小写是敏感的。如果有一部分的开发人员在大小写敏感的系统开发，而另一部分的开发人员在大小写不敏感的系统开发，则可能会出现问题。
开启此选项后，如果开发人员正在使用和系统不一致的大小写规则，则会抛出错误。
- include
>include 用来指定需要包括在 TypeScript 项目中的文件或者文件匹配路径。如果我们指定了 files 配置项，则 include 的 默认值为 []，否则 include 默认值为 ["**/*"] ，即包含了目录下的所有文件。
如果 glob 匹配的文件中没有包含文件的扩展名，则只有 files 支持的扩展名会被包含。
一般来说，include 的默认值为.ts、.tsx 和 .d.ts。如果我们开启了 allowJs 选项，还包括 .js 和 .jsx 文件。
- exclude
>exclude 用来指定解析 include 配置中需要跳过的文件或者文件匹配路径。一般来说，exclude 的默认值为 ["node_modules", "bower_components", "jspm_packages"]。
需要注意：exclude配置项只会改变include配置项中的结果。
- files
>files 选项用来指定 TypeScript 项目中需要包含的文件列表。
如果项目非常小，那么我们可以使用 files指定项目的文件，否则更适合使用include指定项目文件。
- extends
>extends 配置项的值是一个字符串，用来声明当前配置需要继承的另外一个配置的路径，这个路径使用 Node.js 风格的解析模式。TypeScript 首先会加载 extends 的配置文件，然后使用当前的 tsconfig.json 文件里的配置覆盖继承的文件里的配置。
TypeScript 会基于当前 tsconfig.json 配置文件的路径解析所继承的配置文件中出现的相对路径。

- isolatedDeclarations
> `isolatedDeclarations` 是 TypeScript 5.5 版本引入的一个新编译选项。这个选项的目的是提高生成声明文件（`.d.ts`）的速度和效率，特别是在大型项目和复杂的构建系统中。

当启用 `isolatedDeclarations` 选项时，TypeScript 会要求开发者为模块的公共 API（即导出内容）提供明确的类型注释。这意味着，如果一个文件的导出没有足够的类型注释，TypeScript 将会报告错误。这样做的好处是，其他工具可以在没有完整的类型检查器的情况下，快速生成声明文件。

这个选项对于以下场景特别有用：
1. 当你想要开发一个更快的工具来生成声明文件时，比如作为发布服务的一部分或者一个新的打包工具。
2. 当你需要在不同的项目之间进行并行构建和类型检查时，比如一个项目依赖于另一个项目的声明文件。

使用 `isolatedDeclarations` 选项的前提是需要设置 `declaration` 或 `composite` 编译选项。这个选项不会改变 TypeScript 生成声明文件的方式，它只影响错误报告的方式。此外，`isolatedDeclarations` 选项目前还不能为 TypeScript 带来编译性能的提升，但它可以帮助开发者写出类型更健壮的代码。

简而言之，`isolatedDeclarations` 是一个有助于优化和解锁不同并行构建策略的工具，但它要求开发者为导出的 API 进行充分的类型注释。这对于希望提高构建性能的开发者来说，是一个值得考虑的选项，尽管它可能会降低一些开发体验。

# 团队协作文档

### Typescript 代码规约

#### 命名

##### 命名风格

1. UPPER_CASE 用于常量
2. UpperCamelCase 大写驼峰式, 用于类, 类型, 接口, 组件名等
3. lowerCamelCase 普通变量

```ts
// BAD
const OBJEcttsssss = {}
const this_is_my_object = {}
const _bar = {}
function c() {}
class className {}

// GOOD
const thisIsMyObject = {}
function thisIsMyFunction() {}
class ClassName {}
```

##### 关于下划线

大多数情况下是不使用下划线进行命名，但是如果是表明是类中的私有变量或原型链中的私有变量，则通用使用\_进行表名。

##### 避免单字母命名

避免单字母命名。命名应该具备描述性。在如果循环语句跨度较大, 也要避免使用单字母变量. 特别是在多层嵌套的情况下, 这会让代码的可读性变低.

```ts
// BAD
function q() {
	// ...stuff...
}

// GOOD
function query() {
	// ..stuff..
}
```

##### 接口名

typescript 官方不建议为接口添加 I 这类前缀. 和类一样, 接口使用 PascalCased 格式.

```ts
// BAD
interface IProps {}

// GOOD
interface Props {}
```

##### 文件名

普通文件/目录使用驼峰形式, 这样和 npm 包的命名规则区分开来, 例如 global-style.

如果你的文件只输出一个类，那你的文件名必须和类名完全保持一致. 换句话说就是文件命名和默认导出保持一致:

```ts
// BAD
import CheckBox from "./check_box"

// GOOD
import CheckBox from "./CheckBox"
// or
import CheckBox from "./checkBox"
```

##### 不使用 var

#### 类

##### 成员顺序

静态成员 > 实例成员
属性 > 方法
公开 > 保护 > 私有

所以一般的类文件结构为:

```ts
class MyComponent extends React.Component {
	// 静态属性
	public static defaultProps = {}
	// 实例属性
	public state = {}
	// 私有属性
	private show: boolean

	// 静态方法
	public static getDerivedStateFromProps(props, state) {}

	// 构造方法, 在所有实例方法之前
	public constructor(props) {}

	// 公开实例方法
	public componentDidMount() {}
	public render() {}

	// 私有实例方法
	private handleClick() {}
}
```

##### 始终指定访问修饰符

始终指定访问修饰符. 不同语言的默认访问修饰符都是不一样的, Java 的默认访问修饰符是包级别, Typescript 的默认访问修饰符是 public, 始终指定 访问修饰符可以避免意外暴露接口; 另外可以减少不同语言切换的心智负担

##### 避免使用 Typescript 的构造函数定义属性

原因和上一条规则类似. 这是 Typescript 特有的东西, 我们可以忽略这个特性, 减少学习负担. 另外这种方式使用场景较窄, 但你要扩展更多参数时, 就不得不重新重构代码了.

```ts
// BAD
public MyClass {
  public constructor(public foo: boolean, public bar: number)
}

// GOOD
public MyClass {
  public foo: boolean
  public bar: number
  public constructor(foo: boolean, bar: number) {
    this.foo = foo
    this.bar = bar
  }
}
```

#### 模块

##### 模块导入顺序和分组

当文件越来越大, import 语句就会变成一团乱麻. import 语句一般可以分为三组:

1. npm 模块
2. src 相对导入模块(如~/components/MyComponent)
3. 相对路径
   每个分组之间使用空行分隔, 分组内按照'模块导入路径'以字典顺序进行排序:

```ts
import A from "a"
import A from "b"

import MyComponent from "~/components/MyComponent"
import Redirect from "~/components/Redirect"

// 按照相对路径的深度
import foo from "../../foo"
import bar from "../bar"
import bar from "./bar"
```

#### 类型定义顺序

对于一个 Typescript 文件, 要按照一下顺序规则定义语言元素:

1. 类型定义 > 变量/常量定义 > 类定义
2. 导出 > 非导出
   例如一个典型的 React 组件定义:

```ts
import {...} from 'components'

// 先定义类型
export interface MyComponentProps {
  value: string
  onChange: (value: string) => void
}

// 组件状态, 私有不导出
interface State {
  // ...
}

// 变量定义
export const MY_EXPORT_CONST = 1
const EXPORT_CONST = 1
let cache = {}

// 类定义
export class MyComponent {}

// 默认导出放在最后
export default injectSomething(MyComponent)
```

##### 如果类型在目录下的多个模块共享, 则提取到 types.ts 文件

```ts
MyContainers/
  index.tsx // 入口
  model.ts
  ...
  types.ts
```

##### 不要使用不标准的模块方式

统一使用标准的 es6 Module 模块方式

##### 一个模块一个类

如果一个模块导出一个类, 那么文件会以该类名命名. 一个文件中存在多个平级类很难表达它们的关系. 以下两种情况除外:

1. 类表达式. 这时候类作为一个常量存在
2. 静态成员类. 静态成员类嵌套在容器类中, 可以表示聚合关系 #必须在文件头部进行注释, 说明文件的主要功能

##### 使用 TSDoc 注释规范进行注释

##### 必须在文件头部进行注释, 说明文件的主要功能

#### 函数相关

##### 只使用 Error 类或其子类来表示异常

```ts
// BAD
throw "error"
throw 401
throw ERROR_CODE

// GOOD
throw new Error("message")
```

##### 只使用 undefined

避免使用 null, 因为 undefined 和 null 在职责上面是有些重叠的. 最初 Javascript 发明 undefined 就是为了表示一个值不存在. 而 null 则跟 Java 引用对象的概念一样, 表示一个引用为空. 所以推荐只使用一种方式, 避免困惑

另外在 ES6 的函数可选参数, 只有传 undefined 时才会回退使用默认值

```ts
// BAD
function foo(data: string | null) {}

// GOOD
function foo(data?: string) {}
```

#### Typescript 相关

##### 不要使用 any

##### 使用 as 关键字取代'<>'进行类型断言

##### 统一使用 Array<T> 来声明数组类型

##### 数据类型声明 使用 interface 取代 type ？？？

interface 可以被扩展, 语义表达能力更强

其他规则请看 eslint 和 prettier 配置。

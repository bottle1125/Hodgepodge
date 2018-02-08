### 名词释义
```
{
    human(id: "1000") {
        name
        height(unit: FOOT)
    }
}
```
这是个简单的GraphQL的请求体
* __字段名(Fields)__：`human`,`name`,`height`均为字段名

* __参数(Arguments)__：圆括号里的都是查询参数
```
query HeroNameAndFriends($episode: Episode){
    hero(episode: $episode) {
        name
    }
}
```
一般我们都会告诉GraphQL服务器应该进行什么操作，所以会加上更多的特性
* __操作类型(Operation type)__：`query`查询，`mutation`更新，`subscription`订阅，一共有这三种类型
* __操作名称(Operation name)__：`HeroNameAndFriends`就是这次操作的名称，类似于函数名，不是必须的，但为了方便调试和服务端打日志，最好赋予语义化的命名
* __变量定义(Variable definitions)__：一般动态查询的时候，会用到变量定义，上述例子中，`episode`的值是动态传入的，值为`$episode`，那么我们就要提前定义`$episode`，`($episode: Episode)`请求体中所有会用到的变量都要在这里定义类型，如果是必须传的参数，则`($episode: Episode!)`
* __选择集(Selection set)__：花括号里的内容就叫做选择集，一般标量类型的字段是没有选择集的，比如`Int`和`String`
```
{
    episode: 'JESD'
}
```
* __变量(Variable)__：传递给GraphQL值得字典
```
fragment comparisonFields on Character {
    name
    appearsIn
    friends {
        name
    }
}
```
* __片段名称(Fragment name)__：`comparisonFields`
* __类型条件(Type condition)__：`Character`这个一般根据文档来写，指定片段能够使用的类型，从而将校验片段`fragments`和校验`schema`独立开
```
query HeroForEpisode {
    hero {
        name
        ...comparisonFields  // fragment spread
        ...on Droid {       // inline fragment
            primaryFunction
        }
    }
}
```
* __片段扩展运算符(Fragment spread)__：将片段名置于`...`之后来表示片段
* __内联片段(Inline fragment)__：依赖结果类型，只有结果类型是`Droid`才返回`primaryFunction`。
```
query HeroForEpisode($var: Boolean!) {
    hero @skip(if: $var) {
        name
        ...comparisonFields @include(if: $var)
        ...on Droid @skip(if: $var) {
            primaryFunction
        }
    }
}
```
* __指令(Directive)__：`@include`表示只有在if参数为true才引入片段，`@skip`表示只有在if参数为true时忽略片段中的字段
* __指令参数(Directive argruments)__：指令后面的圆括号里就是指令参数，一般以if开头
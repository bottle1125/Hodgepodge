### 基础用法
这是官方文档的例子
```
{
  hero {
    name
    # Queries can have comments!
    friends {
      name
    }
  }
}
```
项目中, 以`ajax`请求为例
```
$.ajax({
    url: '/graphql',
    data: {
        query: `query{     // 使用反引号就可以啦
            hero{
                name
                friends {
                    name
                }
            }
        }`
    }
})
```
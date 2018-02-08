### Introduction
最近项目中后端接入了GraphQL，前端当然也要与时俱进，乍一看文档，前端好像什么都不用做，很简单的样子。
前端面临的主要问题是如何按graphQL的格式传参。

有两种方式：

一种是用ES6的反引号将参数包围起来；
第二种是安装能编译.gql格式的插件，我使用的是webpack插件`webpack-graphql-loader`

这里记录一下第一种方式。
### Variables
官方例子把query和variables分开写，然而我搞了半天不知道应该放在哪里
```
query HeroNameAndFriends($episode: Episode) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}
```
query variables
```
{
  "episode": "JEDI"
}
```

`Episode`我刚开始一直以为是某个特定的类型，纠结了半天，后来终于明白，这是个集，就是个笼统的说法，表示，这里应该写一个类型名。。

正确的书写形式
```
$.ajax({
    url: '/graphql',
    data: {
        query: `query HeroNameAndFriends($episode: Episode){    
            hero(episode: $episode) {
                name
                friends {
                    name
                }
            }
        }`,
        variables: {
            "episode": "JEDI"
        }
    }
})
```
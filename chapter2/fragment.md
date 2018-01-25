### Fragment
官方例子：
```
{
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}
​
fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}
```
我刚开始以为和`variables`一样，
```
$.ajax({
    url: '/graphql',
    data: {
        query: `query HeroNameAndFriends($episode: Episode){    
            leftComparison: hero(episode: EMPIRE) {
                ...comparisonFields
            }
            rightComparison: hero(episode: JEDI) {
                ...comparisonFields
            }
        }`,
        fragment: `fragment comparisonFields on Character {
            name
            appearsIn
            friends {
                name
            }
        }`
    }
})
```
结果一直报错，说找不到这个fragment，在我多方试验下，应该是这样的
```
$.ajax({
    url: '/graphql',
    data: {
        query: `
            query HeroNameAndFriends($episode: Episode){    
                leftComparison: hero(episode: EMPIRE) {
                    ...comparisonFields
                }
                rightComparison: hero(episode: JEDI) {
                    ...comparisonFields
                }
            }
            fragment comparisonFields on Character {
                name
                appearsIn
                friends {
                    name
                }
            }`
    }
})
```
想想也应该是这样，比较好理解
```
var x = {
    a: 1,
    toJSON() {
        return {
            b: 2,
            toJSON() {
                c: 3
            }
        }
    }
}

JSON.stringify(x)   // "{"b": 2}"
```
`stringify`忽略了函数
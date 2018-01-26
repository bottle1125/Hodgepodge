### 数组
关于数组的一些经常用到但不是特别熟悉的使用方法

#### 复制数组
```
var a = [1, 2, 3];
var b = a.slice();

var a = [1, 2, 3];
var b = Array.from(a);

var a = [1, 2, 3];
var b = [...a]; 
```

### 合并数组
```
var a = [1, 2, 3];
var b = [4, 5, 6];

var c = [];
c.concat(a, b);
```

### 在数组中找到最大值和最小值
```
var a = [1, 2, 3, 4];

var c = Math.max(...a);
var d = Math.min(...a);

var e = Math.max.apply(null, a);
var f = Math.min.apply(null, a);
```

### 判断是不是数组
```
var a = [];
console.log(Array.isArray(a));   // true

var a = [];
console.log(typeof a);   // 'object'

var a = [];
console.log(a instanceof Array);   // true

var a = [];
console.log(typeof a === 'object' && a !== null && Object.prototype.toString.apply(a) === [Object Array]);  // true
```

### 数组与其他值的运算
```
console.log([1, 2, 3] + 5);   // "1,2,35"

console.log([1, 2, 3] + [3, 4, 5]);   // "1,2,33,4,5"

console.log([4] - 2);   // 2

console.log([4] = [2]);   // 2
```

### 数组去重
```
const a = [3, 4, 6, 2, 2];
const b = new Set(a);
console.log(b);   // {3, 4, 6, 2}
console.log(Array.from(b));  // [3, 4, 6, 2]
```

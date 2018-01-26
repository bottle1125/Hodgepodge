### Style of React

#### Inline Style
`react`会自动填充单位`px`
```
render() {
    return (
        <div style={{ width: 100 }}></div>
    )
}
```
```
render() {
    const style = {
        width: 100
    }
    return (
        <div style={ style }></div>
    )
}
```

#### css modules
##### webpack配置 
`css-loader?modules`
##### 使用
每个元素样式尽量用一个`class`表示，借助`css modules`的 `composes`可以继承其他的`class`名
```
// app.js
import styles from './css/app.css';
...
render() {
    return (
        <div className={ styles.wrapper }></div>
        <div className="container"></div>
    )
}

// css/app.css
.base {
    display: inline-block;
}
.wrapper {
    composes: base;
    width: 100;
}

:global(.container) {
    composes: base from './base.css';
}
```
`:global`表示全局样式，没有这个标志的样式编译后的样式名会自动生成随机数，以保证项目中不会出现样式重复的情况。我一般是把常用的样式设为全局，再通过`composes`引用

#### classnames
可以很方便地用来表示动态修改样式
```
import classNames from 'classnames/bind';
import styles from '../css/app.css';

const cx = classNames.bind(styles);

render() {
    const className = cx({
        base: true,
        active: this.state.active
    })
    return(
        <div className={ className }></div>
    )
}

// 如果循环渲染列表的时候，样式与列表有关，可以直接写成行内样式
render() {
    const className = cx({
        base: true,
        active: this.state.active
    })
    return(
        <ul>
            { lists.map((list,key) => 
                <li key={key} className={cx({
                    base: true,
                    active: this.state.active === key
                })}>{ list }</li>
            ) }
        </ul>
    )
}
```
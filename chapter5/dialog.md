对话框弹出的时候，背景需要固定在原位
```
// fixed,body设置fixed后页面会飘到顶部，需要把它拖下来。
const currentScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
document.body.setAttribute('class', 'page-fixed');

document.body.style.top = -currentScrollTop + 'px';

// recover
document.body.setAttribute('class', '');
document.body.scrollTop = document.documentElement.scrollTop = currentScrollTop;

.page-fixed {
    position: fixed;
    width: 100%;
}
```
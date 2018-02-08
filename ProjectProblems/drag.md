一次项目中用到拖拽图片排序，在chrome浏览器上表现良好，但到了火狐浏览器和360浏览器就会出现一个情况，拖拽图片的时候，会打开新的标签页。
查了资料，可以通过以下方式解决：
```
document.body.ondrop = function(event) {
    event.preventDefault();
    event.stopPropagation();
};
```
把浏览器的默认行为禁止掉。
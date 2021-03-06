最近遇到个问题，ios移动端中的h5页面，有部分文字的字号大小比设置的字号偏大，查了很久的原因。

现象：
```
<div>
    <span>你好吗？我很好<br>不错哦，加油加油<br>嗯嗯嗯嗯嗯嗯</span>    
</div>
```
`<br>`导致字号全部变大，后来设置了`span {display: inline-block;}`恢复原状，之后当某一段内容比较长，需要换行时，就又变大了。

原因：

猜测是因为safari浏览器对文字进行了缩放，根据容器的宽来计算“适应”的字体大小，由于文字内容长短不一，导致容器的宽不一致，部分产生了换行，导致做了不同的缩放处理。

了解到下面这个属性：

 `-webkit-text-size-ajust`

禁用Webkit内核浏览器的文字大小调整功能,设置为`none`之后，浏览器就不会对我们设置的字号进行调整，即使小于12px也不会强制转化成12px。
解决了这个问题。

参考文章：[在IOS下，字体大小设置完全一致的文字，在显示上明显不同大小。有DEMO。](https://segmentfault.com/q/1010000011235455)
# css3+html5 demo
<b>1.高斯模糊和刮刮乐demo是采用的h5中的canvas标签实现的。</b><br>
    1、高斯模糊是将照片data通过getImagedata()方法提取出来，通过一个高斯函数处理后在用putImageData()放回去，通过toDataURL转成base64格式赋到img的src上，在插入到页面，全都要在img的load触发时执行<br>
    2、刮刮乐用fillRect()和clearReact()方法结合mouseup、mousemove、mousedown事件完成<br>
<b>2.轮播图和3ddemo是采用的css3的animition和transform实现的</b><br>
    3、3d要想实现要在运动目标的父级上添加perspective: 1000px，同时自己添加transform-style: preserve-3d。我做的是一个旋转的方块，先把每个面通过transform的rotete旋转组成一个正方形，他们的父级作为旋转目标，在爷爷级中旋转<br>
    4、轮播图纯用animition实现，由于没计算好百分比和运动距离的对应，导致有些许的bug，整体效果类似我之前用jquery写的轮播图。

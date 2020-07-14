## DOM库
这是一个我自己封装的DOM库，主要提供了如下的一些API

```
window.dom{}
将DOM库挂载在全局环境中,成为window的属性;
```
### 创建元素

dom.create('tag')    //tagName是想创建的标签;他只是创建，只会显示在JS线程中；


### 插入元素

###### 在后面插入
dom.after(oldNode,newNode);    

###### 在前面插入
dom.before(oldNode,newNode);   


###### 在最后添加
dom.append(parentNode,newNode);

###### 给某一元素添加父层节点
dom.wrap(node,parent);




###  移除节点

###### 移除指定节点
dom.remove(node);

###### 清空节点
dom.empty(parentNode)    移除属于parentNode的所有孩子节点;



### 修改节点

###### 修改节点属性
dom.attr(node,name,value)     node为想要修改的节点，name为想要修改的属性，value为修改属性的新的值

###### 修改节点文本
dom.text(node,string)

###### 修改html
dom.html(node,string)

###### 修改样式
dom.style(node,name,value)
dom.style(node,object)   //object={'color':'red','background':'blue'}

### 读取属性

###### 读取节点属性
dom.attr(node,name)   返回指定节点的具体属性的值;    

###### 读取节点内容
dom.text(node)

###### 读取html
dom.html(node)

###### 读取样式
dom.style(node,name);


### Class操作

###### 添加类
dom.class.add(node,className)

###### 移除类
dom.class.remove(node,className)

###### 检查元素是否拥有该类
dom.class.has(node,className)


### 事件监听

###### 添加事件监听
dom.on(node,eventName,fn)

###### 移除事件监听
dom.off(node,eventName,fn)


### 查找元素

###### 查找元素本身
dom.find(selector)[0]   

###### 查找元素的父节点
dom.parent(node)

###### 查找元素的儿子节点
dom.children(node)

###### 查找元素的兄弟节点
dom.siblings(node)

###### 查找元素的下一个元素节点
dom.next(node)

###### 查找元素的前一个元素节点
dom.previous(node)

###### 遍历节点列表
dom.each(node,fn)

###### 查找元素的下标
dom.index(node)




#### 目前就实现以上的功能
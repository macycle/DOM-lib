window.dom={
    create(string){   
        const container=document.createElement('template');
        container.innerHTML=string.trim();
        return container.content.firstChild;
    },
    after(oldNode,newNode){
        oldNode.parentNode.insertBefore(newNode,oldNode.nextSibling);  //找到元素的父节点，然后根据原生提供的前插api，查到后面；
    
    }, 
    before(oldNode,newNode){
        oldNode.parentNode.insertBefore(newNode,oldNode);
    },
    append(parent,newNode){
        parent.appendChild(newNode);
    },
    wrap(node,parent){
        dom.before(node,parent);
        dom.append(parent,node);  //将parent节点，也就是新节点查到node前面，然后然node作为新节点parent的子节点；
    },
    remove(node){
        node.parentNode.removeChild(node);
        return node;
    },
    empty(node){
        const array=[];
        let x=node.firstChild;
        while(x){
            array.push(dom.remove(node.firstChild));
            x=node.firstChild     //每移出第一个节点，第二个节点就会接替成为第一个节点；
        }
        return array
    },
    
    attr(node,name,value){
        if(arguments.length===3){
            node.setAttribute(name,value);
        }else if(arguments.length===2){
            return node.getAttribute(name);
        }
        
    },
    text(node,string){
        if(arguments.length===2){
            node.innerText=string;
        }else if(arguments.length===1){
            console.log(node.innerText); 
        }
        
    },
    html(node,string){
        if(arguments.length===2){
            return node.innerHTML=string;
            
        }else if(arguments.length===1){
            return node.innerHTML;
            
        }
    },
    style(node,name,value){
        if(arguments.length===3){
            node.style[name]=value;    //dom.style(div,'color','red');
        }else if(arguments.length===2){
            if(typeof name==='string'){
                return node.style[name];    //dom.style(div,'color')
            }else if(name instanceof Object){    //dom.style(div,{'color':'red','margin':'0px'})
                const object=name
                for(let key in object){
                    node.style[key]=object[key];
                }
            }
        }
    },

    class:{
        add(node,className){
            node.classList.add(className);
        },
        remove(node,className){
            node.classList.remove(className);
        },
        has(node,className){
            return node.classList.contains(className);
        },
        
    },
    on(node,eventName,fn){
        node.addEventListener(eventName,fn);
    },
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn);
    },
    find(selector){
        return document.querySelectorAll(selector);
    },
    parent(node){
        return node.parentNode;
    },
    children(node){
        return node.children;
    },
    siblings(node){
        return Array.from(node.parentNode.children).filter(n=>n!==node);
    },
    next(node){
        let x=node.nextSibling;
        while(x&&x.nodeType===3){
            x=x.nextSibling
        }
        return x
    },
    previous(node){
        let x=node.previousSibling
        while(x&&x.nodeType===3){
            x=x.previousSibling
        }
        return x 
    },
    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    index(node){
        const list=dom.children(node.parentNode)
        let i 
        for(i=0;i<list.length;i++){
            if(list[i]===node){
                break
            }
        }
        return i
    }

}



   
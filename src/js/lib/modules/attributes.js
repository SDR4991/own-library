import $ from '../core';

$.prototype.setAttr = function(attrName,value){
    for(let i = 0; i < this.length; i++){
        this[i].setAttribute(attrName,value);
    }

    return this;
}

$.prototype.removeAttr = function(attrName){
    for(let i = 0; i < this.length; i++){
        this[i].removeAttribute(attrName);
    }

    return this;
}

$.prototype.getAttr = function(attrName){
    for(let i = 0; i<this.length; i++){
        this[i].getAttribute(attrName);
    }

    return this;
}
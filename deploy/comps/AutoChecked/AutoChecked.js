(function(b,a){b(["JC.common"],function(){JC.Form&&(JC.Form.initCheckAll=c);JC.AutoChecked=c;JC.f.addAutoInit(c);function c(f){f=$(f);if(!(f&&f.length)){return}if(f.prop("nodeName").toLowerCase()!="input"){return c.init(f)}if(c.getInstance(f)){return c.getInstance(f)}c.getInstance(f,this);this._model=new e(f);this._view=new d(this._model);this._init()}c.init=function(g){g=$(g);if(!(g&&g.length)){return}var h=g.find("input[type=checkbox][checktype][checkfor]"),f;h.each(function(){f=$(this);if(!c.isAutoChecked(f)){return}if(c.getInstance(f)){c.getInstance(f).update();return}new c(f)})};c.prototype={_init:function(){var f=this;f._initHandlerEvent();$([f._view,f._model]).on("BindEvent",function(g,i,h){f.on(i,h)});$([f._view,f._model]).on("TriggerEvent",function(g,i){var h=JC.f.sliceArgs(arguments);h.shift();h.shift();f.trigger(i,h)});f._model.init();f._view.init();f._view.itemChange();return f},_initHandlerEvent:function(){var f=this;f.selector().on("change",function(){f.trigger(f._model.checktype())});f.on("all",function(){f._view.allChange()});f.on("inverse",function(){f._view.inverseChange()});if(!(f._model.checktype()=="inverse"&&f._model.hasCheckAll())){$(f._model.delegateElement()).delegate(f._model.delegateSelector(),"click",function(g){if(c.isAutoChecked($(this))){return}f._view.itemChange()})}},update:function(){this._view.itemChange();return this},selector:function(){return this._model.selector()},on:function(g,f){$(this).on(g,f);return this},trigger:function(g,f){$(this).trigger(g,f);return this}};c.getInstance=function(f,g){if(typeof f=="string"&&!/</.test(f)){f=$(f)}if(!(f&&f.length)||(typeof f=="string")){return}typeof g!="undefined"&&f.data("AutoCheckedIns",g);return f.data("AutoCheckedIns")};c.isAutoChecked=function(f){var g;f&&(f=$(f)).length&&(g=f.is("[checkfor]")&&f.is("[checktype]"));return g};function e(f){this._selector=f}e.isParentSelectorRe=/^[\/\|<\(]/;e.parentSelectorRe=/[^\/\|<\(]/g;e.childSelectorRe=/[\/\|<\(]/g;e.parentNodeRe=/^[<\(]/;e.prototype={init:function(){return this},checktype:function(){return(this.selector().attr("checktype")||"").toLowerCase()},checkfor:function(){return(this.selector().attr("checkfor")||"")},checkall:function(){return(this.selector().attr("checkall")||"")},checktrigger:function(){return(this.selector().attr("checktrigger")||"")},hasCheckAll:function(){return this.selector().is("[checkall]")&&this.selector().attr("checkall")},selector:function(){return this._selector},isParentSelector:function(){return e.isParentSelectorRe.test(this.selector().attr("checkfor"))},delegateSelector:function(){var g=this.selector().attr("checkfor"),f;if(this.isParentSelector()){if(e.parentNodeRe.test(this.checkfor())){this.checkfor().replace(/[\s]([\s\S]+)/,function(i,h){g=h})}else{g=this.checkfor().replace(e.childSelectorRe,"")}}return g},delegateElement:function(){var f=this,h=$(document),g;if(this.isParentSelector()){if(e.parentNodeRe.test(this.checkfor())){this.checkfor().replace(/^([^\s]+)/,function(j,i){h=JC.f.parentSelector(f.selector(),i)})}else{g=this.checkfor().replace(e.parentSelectorRe,"");h=JC.f.parentSelector(f.selector(),g)}}return h},items:function(){return this.delegateElement().find(this.delegateSelector())},checkedAll:function(){return this.selector().prop("checked")},checkedInverse:function(){return this.selector().prop("checked")},allSelector:function(){var f;if(this.checktype()=="inverse"){this.checkall()&&(f=JC.f.parentSelector(this.selector(),this.checkall()))}else{f=this.selector()}return f}};function d(f){this._model=f}d.prototype={init:function(){return this},itemChange:function(){switch(this._model.checktype()){case"all":this._fixAll();break}},allChange:function(){var f=this,g=f._model.checkedAll();f._model.items().each(function(){var h=$(this);if(c.isAutoChecked(h)){return}if(h.is("[disabled]")){return}h.prop("checked",g);f.triggerEvent(h)})},inverseChange:function(){var f=this;f._model.items().each(function(){var g=$(this);if(c.isAutoChecked(g)){return}if(g.is("[disabled]")){return}g.prop("checked",!g.prop("checked"));f.triggerEvent(g)});this._fixAll()},_fixAll:function(){var f=this,h=true,g=0;if(f._model.allSelector().prop("disabled")){return}f._model.items().each(function(){if(c.isAutoChecked($(this))){return}if($(this).is("[disabled]")){return}g++;if(!$(this).prop("checked")){return h=false}});if(!g){h=false}f._model.allSelector().prop("checked",h)},triggerEvent:function(g){var f=this,h=f._model.checktrigger();h&&$(g).trigger(h)}};$(document).ready(function(f){c.init($(document))});return JC.AutoChecked})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));
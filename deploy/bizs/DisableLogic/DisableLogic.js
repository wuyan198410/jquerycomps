(function(b,a){b(["JC.BaseMVC"],function(){window.Bizs.DisableLogic=e;JC.f.addAutoInit(e);function e(f){if(e.getInstance(f)){return e.getInstance(f)}e.getInstance(f,this);JC.log("Bizs.DisableLogic:",new Date().getTime());this._model=new d(f);this._view=new c(this._model);this._init()}e.prototype={_init:function(){var f=this,g;f._initHandlerEvent();$([f._view,f._model]).on("BindEvent",function(h,j,i){f.on(j,i)});$([f._view,f._model]).on("TriggerEvent",function(h,j){var i=JC.f.sliceArgs(arguments).slice(2);f.trigger(j,i)});f._model.init();f._view.init();f._model.dltrigger().on("change",function(h){JC.log("dltrigger change",new Date().getTime());f._view.change(this)});(g=f._model.dltrigger(true))&&g.trigger("change");return f},_initHandlerEvent:function(){var f=this;f.on("DisableItem",function(h,g){f._model.dldisablecallback()&&f._model.dldisablecallback().call(f,g,f._model.selector())});f.on("EnableItem",function(h,g){f._model.dlenablecallback()&&f._model.dlenablecallback().call(f,g,f._model.selector())});f.on("ChangeDone",function(h,g){f._model.dldonecallback()&&f._model.dldonecallback().call(f,g,f._model.selector())})},selector:function(){return this._model.selector()},on:function(g,f){$(this).on(g,f);return this},trigger:function(g,f){$(this).trigger(g,f);return this}};e.getInstance=function(f,g){if(typeof f=="string"&&!/</.test(f)){f=$(f)}if(!(f&&f.length)||(typeof f=="string")){return}typeof g!="undefined"&&f.data("DisableLogicIns",g);return f.data("DisableLogicIns")};e.doneCallback=null;e.enableCallback=null;e.disableCallback=null;e.init=function(f){f=$(f||document);f.find(["div.js_bizsDisableLogic","dl.js_bizsDisableLogic","table.js_bizsDisableLogic"].join()).each(function(){new e($(this))})};function d(f){this._selector=f}d.prototype={init:function(){return this},selector:function(){return this._selector},dltrigger:function(g){var f=this,i=JC.f.parentSelector(this.selector(),this.selector().attr("dltrigger")),h;if(g){i.each(function(){h=$(this);if(h.prop("checked")||h.prop("selected")){i=h;return false}})}return i},dltarget:function(g){var f=this,i,h;f.selector().attr("dltarget")&&(i=JC.f.parentSelector(f.selector(),f.selector().attr("dltarget")));g&&(g=$(g)).length&&g.attr("dltrigger")&&(i=JC.f.parentSelector(g,g.attr("dltarget")));return i},dldisable:function(f){var g=false;f&&(f=$(f)).length&&f.is("[dldisable]")&&(g=JC.f.parseBool(f.attr("dldisable")));if(f.prop("nodeName").toLowerCase()=="input"&&f.attr("type").toLowerCase()=="checkbox"){g=!f.prop("checked")}return g},dldisplay:function(f){var g=false;if(!f.is("[dldisplay]")){(f=$(f)).length&&f.is("[dldisable]")&&(g=!JC.f.parseBool(f.attr("dldisable")))}else{(f=$(f)).length&&f.is("[dldisplay]")&&(g=JC.f.parseBool(f.attr("dldisplay")))}if(f.prop("nodeName").toLowerCase()=="input"&&f.attr("type").toLowerCase()=="checkbox"){g=f.prop("checked")}return g},dlhidetarget:function(g){var f=this,i,h;f.selector().attr("dlhidetarget")&&(i=JC.f.parentSelector(f.selector(),f.selector().attr("dlhidetarget")));g&&(g=$(g)).length&&g.attr("dlhidetarget")&&(i=JC.f.parentSelector(g,g.attr("dlhidetarget")));return i},dlhidetoggle:function(f){var g;f&&f.is("[dlhidetoggle]")&&(g=JC.f.parseBool(f.attr("dlhidetoggle")));return g},dldonecallback:function(){var g=e.doneCallback,f;this.selector()&&(f=this.selector().attr("dldonecallback"))&&(f=window[f])&&(g=f);return g},dlenablecallback:function(){var g=e.enableCallback,f;this.selector()&&(f=this.selector().attr("dlenablecallback"))&&(f=window[f])&&(g=f);return g},dldisablecallback:function(){var g=e.disableCallback,f;this.selector()&&(f=this.selector().attr("dldisablecallback"))&&(f=window[f])&&(g=f);return g}};function c(f){this._model=f}c.prototype={init:function(){return this},change:function(g){g&&(g=$(g));if(!(g&&g.length&&g.is(":visible"))){return}var f=this,j=f._model.dldisable(g),l=f._model.dltarget(g),k=f._model.dldisplay(g),i=f._model.dlhidetarget(g);if(g.is("[dlhidetargetsub]")){var h=JC.f.parentSelector(g,g.attr("dlhidetargetsub"));if(h&&h.length){if(g.prop("checked")){h.show()}else{h.hide()}}}if(l&&l.length){l.each(function(){var n=$(this);n.attr("disabled",j);JC.Valid&&JC.Valid.setValid(n);if(n.is("[dlhidetargetsub]")){var m=JC.f.parentSelector(n,n.attr("dlhidetargetsub"));if(!(m&&m.length)){return}if(j){m.hide()}else{if(n.prop("checked")){m.show()}else{m.hide()}}}})}if(i&&i.length){i.each(function(){var m=f._model.dlhidetoggle($(this))?!k:k;m?$(this).show():$(this).hide()})}j?$(f).trigger("TriggerEvent",["DisableItem",g]):$(f).trigger("TriggerEvent",["EnableItem",g]);$(f).trigger("TriggerEvent",["ChangeDone",g]);JC.log("DisableLogic view change",new Date().getTime(),j)}};$(document).ready(function(){setTimeout(function(){e.init()},10)});return Bizs.DisableLogic})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));
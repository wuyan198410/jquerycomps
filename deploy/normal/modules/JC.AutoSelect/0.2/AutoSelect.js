(function(e,t){e(["JC.common"],function(){function e(t){var n=[];return t&&(t=$(t)),e.isSelect(t)?n.push(new r(t)):t&&t.length&&t.find("select[defaultselect]").each(function(){n.push(new r($(this)))}),n}function r(t){if(e.getInstance(t))return e.getInstance(t);e.getInstance(t,this),this._model=new i(t),this._view=new s(this._model,this),this._init()}function i(e){this._selector=e,this._items=[],this._isInited=!1,this._init()}function s(e,t){this._model=e,this._control=t,this._init()}JC.AutoSelect=e,JC.Form&&(JC.Form.initAutoSelect=e);var t={isSelect:function(e){var t;return e&&(e=$(e))&&e.is("select")&&e.is("[defaultselect]")&&(t=!0),t},hideEmpty:!1,dataFilter:null,beforeInited:null,inited:null,change:null,allChanged:null,triggerInitChange:!0,randomurl:!1,processUrl:null,ignoreInitRequest:!1,getInstance:function(e,t){var n;return e&&(e=$(e))&&(typeof t!="undefined"&&e.data("SelectIns",t),n=e.data("SelectIns")),n},removeItems:function(e){var t=e.find("> option:not([defaultoption])"),n=t.length;return t.remove(),n}};for(var n in t)e[n]=t[n];return r.prototype={_init:function(){var t=this;return $.each(t._model.items(),function(n,r){e.getInstance($(r),t)}),t._model.beforeInited()&&t.on("SelectBeforeInited",t._model.beforeInited()),t.on("SelectInited",function(){if(t._model.isInited())return;var e=t._model.first();while(t._model.next(e))e.on("change",t._responeChange),e=t._model.next(e);t._model.items().length&&$(t._model.items()[t._model.items().length-1]).on("change",function(e){t.trigger("SelectAllChanged")}),t._model.isInited(!0),t._model.inited()&&t._model.inited().call(t,t._model.items())}),t.on("SelectChange",function(e,n){t._model.change(n)&&t._model.change(n).call(n,e,t)}),t._model.allChanged()&&t.on("SelectAllChanged",function(e){t._model.allChanged().call(t,t._model.items())}),t.trigger("SelectBeforeInited"),t._model.selectignoreinitrequest()?(t._model.triggerInitChange()&&t._model.first().trigger("change"),t.trigger("SelectAllChanged"),t.trigger("SelectInited")):t._update(t._model.first(),t._firstInitCb),t},on:function(e,t){return $(this).on(e,t),this},trigger:function(e,t){return $(this).trigger(e,t),this},first:function(){return this._model.first()},last:function(){return this._model.last()},items:function(){return this._model.items()},isFirst:function(e){return this._model.isFirst(e)},isLast:function(e){return this._model.isLast(e)},isInited:function(){return this._model.isInited()},data:function(e){return this._model.data(e)},update:function(e){if(!e||!e.length)return this;if(typeof e=="string"){var t=e.replace(/[\s]+/g,"").trim();if(!t)return this;e=t.split(",")}var n=this,r=n._model.items();if(!r||!r.length)return;return $.each(e,function(e,t){if(!r[e])return;$(r[e]).attr("selectvalue",(t.toString()||"").trim())}),n._update(n._model.first(),n._changeCb),this},_responeChange:function(t,n){var r=$(this),i=e.getInstance(r),s=i._model.next(r),o=r.val();if(n)return;!s||!s.length?i.trigger("SelectChange"):i._update(s,i._changeCb,o)},_update:function(e,t,n,r){return this._model.isStatic(e)?this._updateStatic(e,t,n):this._model.isAjax(e)?this._updateAjax(e,t,n,r):this._updateNormal(e,t,n),this},_updateAjax:function(e,t,n,r){var s=this,o,u=s._model.next(e),a,f;if(s._model.isFirst(e))typeof n=="undefined"&&(n=s._model.selectparentid(e)||""),typeof n!="undefined"&&(a=s._model.selecturl(e,n),f=s._model.token(!0),s._model.selectCacheData()&&i.ajaxCache(a)?setTimeout(function(){o=i.ajaxCache(a),s._view.update(e,o,n),t&&t.call(s,e,o,f)},10):setTimeout(function(){$.get(a,function(r){r=i.ajaxCache(a,$.parseJSON(r)),s._view.update(e,r,n),t&&t.call(s,e,r,f)})},10));else{if(typeof r!="undefined"&&r!=s._model.token())return;a=s._model.selecturl(e,n),s._model.selectCacheData()&&i.ajaxCache(a)?(o=i.ajaxCache(a),s._processData(r,e,t,o,n)):$.get(a,function(o){o=$.parseJSON(o),s._processData(r,e,t,i.ajaxCache(a,o,n))})}return this},_processData:function(e,t,n,r,i){var s=this;setTimeout(function(){if(typeof e!="undefined"&&e!=s._model.token())return;s._view.update(t,r,i),n&&n.call(s,t,r,e)},10)},_changeCb:function(e,t,n){var r=this,i=r._model.next(e),s=r._model.token();if(typeof n!="undefined"&&n!==s)return;return r.trigger("SelectChange",[e]),e.trigger("change",[!0]),r._model.isLast(e),i&&i.length&&r._update(i,r._changeCb,e.val(),n),this},_firstInitCb:function(e,t){var n=this,r=n._model.next(e);return n._model.isInited()||n._model.triggerInitChange()&&e.trigger("change",[!0]),n.trigger("SelectChange",[e]),r&&r.length&&n._update(r,n._firstInitCb,e.val()),n._model.isLast(e)&&(n.trigger("SelectAllChanged"),!n._model.isInited()&&n.trigger("SelectInited")),this},_updateStatic:function(e,t,n){var r=this,i,s=!1;return r._model.isFirst(e)?(typeof n=="undefined"&&(n=r._model.selectparentid(e)||r._model.selectvalue(e)||""),r._model.hasVal(e,n)?(e.val(n),s=!0):typeof n!="undefined"&&(i=r._model.datacb(e)(n))):i=r._model.datacb(e)(n),!s&&r._view.update(e,i,n),t&&t.call(r,e,i),this},_updateNormal:function(e,t,n){var r=this,i;if(r._model.isFirst(e)){var s=r._model.next(e);typeof n=="undefined"&&(n=r._model.selectvalue(e)||e.val()||""),r._model.hasVal(e,n)&&e.val(n);if(s&&s.length)return r._update(s,t,n),this}else i=r._model.datacb(e)(n);return r._view.update(e,i,n),t&&t.call(r,e,i),this}},i._ajaxCache={},i.ajaxCache=function(e,t){return t&&(i._ajaxCache[e]=t),i._ajaxCache[e]},i.prototype={_init:function(){return this._findAllItems(this._selector),this._initRelationship(),this},token:function(e){return typeof this._token=="undefined"&&(this._token=0),e&&this._token++,this._token},selectCacheData:function(){var e=!0;return this.first().is("[selectCacheData]")&&(e=JC.f.parseBool(this.first().attr("selectCacheData"))),e},_findAllItems:function(e){this._items.push(e),e.is("[selecttarget]")&&this._findAllItems(JC.f.parentSelector(e,e.attr("selecttarget")))},_initRelationship:function(){this._selector.data("FirstSelect",!0);if(this._items.length>1){this._items[this._items.length-1].data("LastSelect",!0);for(var e=0;e<this._items.length;e++){var t=this._items[e],n=this._items[e-1];n&&(t.data("PrevSelect",n),n.data("NextSelect",t),t.data("parentSelect",n))}}},items:function(){return this._items},first:function(){return this._items[0]},last:function(){return this._items[this._items-1]},next:function(e){return e.data("NextSelect")},prev:function(e){return e.data("PrevSelect")},isFirst:function(e){return!!e.data("FirstSelect")},isLast:function(e){return!!e.data("LastSelect")},isStatic:function(e){return e.is("[selectdatacb]")},isAjax:function(e){return e.is("[selecturl]")},isInited:function(e){return typeof e!="undefined"&&(this._isInited=e),this._isInited},datacb:function(e){var t;return e.attr("selectdatacb")&&(t=window[e.attr("selectdatacb")]),t},selectparentid:function(e){var t;return e.attr("selectparentid")&&(t=e.attr("selectparentid")),e.removeAttr("selectparentid"),t||""},selectvalue:function(e){var t=e.attr("selectvalue");return e.removeAttr("selectvalue"),t||""},randomurl:function(t){var n=e.randomurl;return t.is("[selectrandomurl]")&&(n=JC.f.parseBool(t.attr("selectrandomurl"))),n},selectignoreinitrequest:function(t){var n=e.ignoreInitRequest;return this.first().is("[selectignoreinitrequest]")&&(n=JC.f.parseBool(this.first().attr("selectignoreinitrequest"))),t&&t.is("[selectignoreinitrequest]")&&(n=JC.f.parseBool(t.attr("selectignoreinitrequest"))),n},triggerInitChange:function(){var t=e.triggerInitChange,n=this.first();return n.attr("selecttriggerinitchange")&&(t=JC.f.parseBool(n.attr("selecttriggerinitchange"))),t},hideempty:function(t){var n=e.hideEmpty,r=this.first();return r&&r.length&&r.is("[selecthideempty]")&&(n=JC.f.parseBool(r.attr("selecthideempty"))),t&&t.length&&t.is("[selecthideempty]")&&(n=JC.f.parseBool(t.attr("selecthideempty"))),n},selecturl:function(t,n){var r=e.processUrl,i=t.attr("selecturl")||"";return t.attr("selectprocessurl")&&window[t.attr("selectprocessurl")]&&(r=window[t.attr("selectprocessurl")]),i=JC.f.printf(i,n),this.randomurl(t)&&(i=JC.f.addUrlParams(i,{rnd:(new Date).getTime()})),r&&(i=r.call(t,i,n)),i},_userdatafilter:function(e){var t;return e.attr("selectdatafilter")&&(t=window[e.attr("selectdatafilter")]),t},dataFilter:function(t,n){var r=this._userdatafilter(t)||e.dataFilter;return r&&(n=r(n,t)),n},beforeInited:function(){var t=e.beforeInited,n=this.first();return n.attr("selectbeforeInited")&&window[n.attr("selectbeforeInited")]&&(t=window[n.attr("selectbeforeinited")]),t},inited:function(){var t=e.inited,n=this.first();return n.attr("selectinited")&&window[n.attr("selectinited")]&&(t=window[n.attr("selectinited")]),t},change:function(t){var n=e.change;return t.attr("selectchange")&&window[t.attr("selectchange")]&&(n=window[t.attr("selectchange")]),n},allChanged:function(){var t=e.allChanged,n=this.first();return n.attr("selectallchanged")&&window[n.attr("selectallchanged")]&&(t=window[n.attr("selectallchanged")]),t},data:function(e,t){return typeof t!="undefined"&&e.data("SelectData",t),e.data("SelectData")},hasVal:function(e,t){var n=!1,t=t.toString();return e.find("option").each(function(){var e=$(this);if(e.val()==t)return n=!0,!1}),n},selectItemDataFilter:function(e){var t;return e&&e.is("[selectItemDataFilter]")&&(t=window[e.attr("selectItemDataFilter")]),t}},s.prototype={_init:function(){return this},update:function(t,n,r){var i=this,s=this._model.selectvalue(t);n=this._model.dataFilter(t,n),i._model.selectItemDataFilter(t)&&(n=i._model.selectItemDataFilter(t)(t,n,r)),this._model.data(t,n),this._control.trigger("SelectItemBeforeUpdate",[t,n]),e.removeItems(t);if(!n.length){if(this._model.hideempty(t)){this.hideItem(t),this._control.trigger("SelectItemUpdated",[t,n]);return}}else!t.is(":visible")&&t.show();var o=[],u,a;for(var f=0,l=n.length;f<l;f++)u=n[f],o.push(JC.f.printf('<option value="{0}" {2}>{1}</option>',u[0],u[1],a));$(o.join("")).appendTo(t),this._model.hasVal(t,s)&&t.val(s),this._control.trigger("SelectItemUpdated",[t,n])},hideItem:function(e){e.hide();while(e=this._model.next(e))e.hide()}},$(document).ready(function(t){setTimeout(function(){e(document.body)},200)}),JC.AutoSelect})})(typeof define=="function"&&define.amd?define:function(e,t,n){typeof e=="function"&&(n=e),typeof t=="function"&&(n=t),n&&n()},window);
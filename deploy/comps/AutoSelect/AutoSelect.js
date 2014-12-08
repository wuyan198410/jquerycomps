(function(b,a){b(["JC.common"],function(){JC.AutoSelect=h;JC.Form&&(JC.Form.initAutoSelect=h);JC.f.addAutoInit(h);function h(i){var j=[];i&&(i=$(i));if(h.isSelect(i)){j.push(new d(i))}else{if(i&&i.length){i.find("select[defaultselect]").each(function(){j.push(new d($(this)))})}}return j}var g={isSelect:function(i){var j;i&&(i=$(i))&&i.is("select")&&i.is("[defaultselect]")&&(j=true);return j},hideEmpty:false,dataFilter:null,beforeInited:null,inited:null,change:null,allChanged:null,triggerInitChange:true,randomurl:false,processUrl:null,ignoreInitRequest:false,getInstance:function(i,j){var k;i&&(i=$(i))&&(typeof j!="undefined"&&i.data("SelectIns",j),k=i.data("SelectIns"));return k},removeItems:function(j){var k=j.find("> option:not([defaultoption])"),i=k.length;k.remove();return i}};for(var c in g){h[c]=g[c]}function d(i){if(h.getInstance(i)){return h.getInstance(i)}h.getInstance(i,this);this._model=new f(i);this._view=new e(this._model,this);this._init()}d.prototype={_init:function(){var i=this;$.each(i._model.items(),function(k,j){h.getInstance($(j),i)});i._model.beforeInited()&&i.on("SelectBeforeInited",i._model.beforeInited());i.on("SelectInited",function(){if(i._model.isInited()){return}var j=i._model.first();while(i._model.next(j)){j.on("change",i._responeChange);j=i._model.next(j)}if(i._model.items().length){$(i._model.items()[i._model.items().length-1]).on("change",function(k){i.trigger("SelectAllChanged")})}i._model.isInited(true);i._model.inited()&&i._model.inited().call(i,i._model.items())});i.on("SelectChange",function(k,j){i._model.change(j)&&i._model.change(j).call(j,k,i)});i._model.allChanged()&&i.on("SelectAllChanged",function(j){i._model.allChanged().call(i,i._model.items())});i.trigger("SelectBeforeInited");if(i._model.selectignoreinitrequest()){i._model.triggerInitChange()&&i._model.first().trigger("change");i.trigger("SelectAllChanged");i.trigger("SelectInited")}else{i._update(i._model.first(),i._firstInitCb)}return i},on:function(i,j){$(this).on(i,j);return this},trigger:function(j,i){$(this).trigger(j,i);return this},first:function(){return this._model.first()},last:function(){return this._model.last()},items:function(){return this._model.items()},isFirst:function(i){return this._model.isFirst(i)},isLast:function(i){return this._model.isLast(i)},isInited:function(){return this._model.isInited()},data:function(i){return this._model.data(i)},update:function(k){if(!(k&&k.length)){return this}if(typeof k=="string"){var j=k.replace(/[\s]+/g,"").trim();if(!j){return this}k=j.split(",")}var i=this,l=i._model.items();if(!(l&&l.length)){return}$.each(k,function(n,m){if(!l[n]){return}$(l[n]).attr("selectvalue",(m.toString()||"").trim())});i._update(i._model.first(),i._changeCb);return this},_responeChange:function(k,m){var j=$(this),i=h.getInstance(j),l=i._model.next(j),n=j.val();if(m){return}if(!(l&&l.length)){i.trigger("SelectChange")}else{i._update(l,i._changeCb,n)}},_update:function(j,l,k,i){if(this._model.isStatic(j)){this._updateStatic(j,l,k)}else{if(this._model.isAjax(j)){this._updateAjax(j,l,k,i)}else{this._updateNormal(j,l,k)}}return this},_updateAjax:function(m,q,p,o){var i=this,j,k=i._model.next(m),l,n;if(i._model.isFirst(m)){typeof p=="undefined"&&(p=i._model.selectparentid(m)||"");if(typeof p!="undefined"){l=i._model.selecturl(m,p);n=i._model.token(true);if(i._model.selectCacheData()&&f.ajaxCache(l)){setTimeout(function(){j=f.ajaxCache(l);i._view.update(m,j,p);q&&q.call(i,m,j,n)},10)}else{setTimeout(function(){$.get(l,function(r){r=f.ajaxCache(l,$.parseJSON(r));i._view.update(m,r,p);q&&q.call(i,m,r,n)})},10)}}}else{if(typeof o!="undefined"&&o!=i._model.token()){return}l=i._model.selecturl(m,p);if(i._model.selectCacheData()&&f.ajaxCache(l)){j=f.ajaxCache(l);i._processData(o,m,q,j,p)}else{$.get(l,function(r){r=$.parseJSON(r);i._processData(o,m,q,f.ajaxCache(l,r,p))})}}return this},_processData:function(k,j,n,m,l){var i=this;setTimeout(function(){if(typeof k!="undefined"&&k!=i._model.token()){return}i._view.update(j,m,l);n&&n.call(i,j,m,k)},10)},_changeCb:function(k,m,j){var i=this,l=i._model.next(k),n=i._model.token();if(typeof j!="undefined"){if(j!==n){return}}i.trigger("SelectChange",[k]);k.trigger("change",[true]);if(i._model.isLast(k)){}if(l&&l.length){i._update(l,i._changeCb,k.val(),j)}return this},_firstInitCb:function(j,l){var i=this,k=i._model.next(j);if(!i._model.isInited()){i._model.triggerInitChange()&&j.trigger("change",[true])}i.trigger("SelectChange",[j]);if(k&&k.length){i._update(k,i._firstInitCb,j.val())}if(i._model.isLast(j)){i.trigger("SelectAllChanged");!i._model.isInited()&&i.trigger("SelectInited")}return this},_updateStatic:function(j,m,k){var i=this,l,n=false;if(i._model.isFirst(j)){typeof k=="undefined"&&(k=i._model.selectparentid(j)||i._model.selectvalue(j)||"");if(i._model.hasVal(j,k)){j.val(k);n=true}else{if(typeof k!="undefined"){l=i._model.datacb(j)(k)}}}else{l=i._model.datacb(j)(k)}!n&&i._view.update(j,l,k);m&&m.call(i,j,l);return this},_updateNormal:function(j,n,l){var i=this,m;if(i._model.isFirst(j)){var k=i._model.next(j);typeof l=="undefined"&&(l=i._model.selectvalue(j)||j.val()||"");if(i._model.hasVal(j,l)){j.val(l)}if(k&&k.length){i._update(k,n,l);return this}}else{m=i._model.datacb(j)(l)}i._view.update(j,m,l);n&&n.call(i,j,m);return this}};function f(i){this._selector=i;this._items=[];this._isInited=false;this._init()}f._ajaxCache={};f.ajaxCache=function(i,j){j&&(f._ajaxCache[i]=j);return f._ajaxCache[i]};f.prototype={_init:function(){this._findAllItems(this._selector);this._initRelationship();return this},token:function(i){typeof this._token=="undefined"&&(this._token=0);i&&(this._token++);return this._token},selectCacheData:function(){var i=true;this.first().is("[selectCacheData]")&&(i=JC.f.parseBool(this.first().attr("selectCacheData")));return i},_findAllItems:function(i){this._items.push(i);i.is("[selecttarget]")&&this._findAllItems(JC.f.parentSelector(i,i.attr("selecttarget")))},_initRelationship:function(){this._selector.data("FirstSelect",true);if(this._items.length>1){this._items[this._items.length-1].data("LastSelect",true);for(var j=0;j<this._items.length;j++){var k=this._items[j],l=this._items[j-1];if(l){k.data("PrevSelect",l);l.data("NextSelect",k);k.data("parentSelect",l)}}}},items:function(){return this._items},first:function(){return this._items[0]},last:function(){return this._items[this._items-1]},next:function(i){return i.data("NextSelect")},prev:function(i){return i.data("PrevSelect")},isFirst:function(i){return !!i.data("FirstSelect")},isLast:function(i){return !!i.data("LastSelect")},isStatic:function(i){return i.is("[selectdatacb]")},isAjax:function(i){return i.is("[selecturl]")},isInited:function(i){typeof i!="undefined"&&(this._isInited=i);return this._isInited},datacb:function(i){var j;i.attr("selectdatacb")&&(j=window[i.attr("selectdatacb")]);return j},selectparentid:function(i){var j;i.attr("selectparentid")&&(j=i.attr("selectparentid"));i.removeAttr("selectparentid");return j||""},selectvalue:function(i){var j=i.attr("selectvalue");i.removeAttr("selectvalue");return j||""},randomurl:function(i){var j=h.randomurl;i.is("[selectrandomurl]")&&(j=JC.f.parseBool(i.attr("selectrandomurl")));return j},selectignoreinitrequest:function(i){var j=h.ignoreInitRequest;this.first().is("[selectignoreinitrequest]")&&(j=JC.f.parseBool(this.first().attr("selectignoreinitrequest")));i&&i.is("[selectignoreinitrequest]")&&(j=JC.f.parseBool(i.attr("selectignoreinitrequest")));return j},triggerInitChange:function(){var j=h.triggerInitChange,i=this.first();i.attr("selecttriggerinitchange")&&(j=JC.f.parseBool(i.attr("selecttriggerinitchange")));return j},hideempty:function(i){var k=h.hideEmpty,j=this.first();j&&j.length&&j.is("[selecthideempty]")&&(k=JC.f.parseBool(j.attr("selecthideempty")));i&&i.length&&i.is("[selecthideempty]")&&(k=JC.f.parseBool(i.attr("selecthideempty")));return k},selecturl:function(i,j){var k=h.processUrl,l=i.attr("selecturl")||"";i.attr("selectprocessurl")&&window[i.attr("selectprocessurl")]&&(k=window[i.attr("selectprocessurl")]);l=JC.f.printf(l,j);this.randomurl(i)&&(l=JC.f.addUrlParams(l,{rnd:new Date().getTime()}));k&&(l=k.call(i,l,j));return l},_userdatafilter:function(i){var j;i.attr("selectdatafilter")&&(j=window[i.attr("selectdatafilter")]);return j},dataFilter:function(i,k){var j=this._userdatafilter(i)||h.dataFilter;j&&(k=j(k,i));return k},beforeInited:function(){var j=h.beforeInited,i=this.first();i.attr("selectbeforeInited")&&window[i.attr("selectbeforeInited")]&&(j=window[i.attr("selectbeforeinited")]);return j},inited:function(){var j=h.inited,i=this.first();i.attr("selectinited")&&window[i.attr("selectinited")]&&(j=window[i.attr("selectinited")]);return j},change:function(i){var j=h.change;i.attr("selectchange")&&window[i.attr("selectchange")]&&(j=window[i.attr("selectchange")]);return j},allChanged:function(){var j=h.allChanged,i=this.first();i.attr("selectallchanged")&&window[i.attr("selectallchanged")]&&(j=window[i.attr("selectallchanged")]);return j},data:function(i,j){typeof j!="undefined"&&(i.data("SelectData",j));return i.data("SelectData")},hasVal:function(i,k){var j=false,k=k.toString();i.find("option").each(function(){var l=$(this);if(l.val()==k){j=true;return false}});return j},selectItemDataFilter:function(i){var j;i&&i.is("[selectItemDataFilter]")&&(j=window[i.attr("selectItemDataFilter")]);return j}};function e(j,i){this._model=j;this._control=i;this._init()}e.prototype={_init:function(){return this},update:function(o,l,s){var k=this,t=this._model.selectvalue(o);l=this._model.dataFilter(o,l);k._model.selectItemDataFilter(o)&&(l=k._model.selectItemDataFilter(o)(o,l,s));this._model.data(o,l);this._control.trigger("SelectItemBeforeUpdate",[o,l]);h.removeItems(o);if(!l.length){if(this._model.hideempty(o)){this.hideItem(o);this._control.trigger("SelectItemUpdated",[o,l]);return}}else{!o.is(":visible")&&o.show()}var m=[],r,q;for(var p=0,n=l.length;p<n;p++){r=l[p];m.push(JC.f.printf('<option value="{0}" {2}>{1}</option>',r[0],r[1],q))}$(m.join("")).appendTo(o);if(this._model.hasVal(o,t)){o.val(t)}this._control.trigger("SelectItemUpdated",[o,l])},hideItem:function(i){i.hide();while(i=this._model.next(i)){i.hide()}}};$(document).ready(function(i){setTimeout(function(){h(document.body)},200)});return JC.AutoSelect})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));
(function(e,t){e(["JC.common"],function(){return function(e){function t(e){if(t.getInstance(e))return t.getInstance(e);t.getInstance(e,this);var n=t.type(e);JC.log("Calendar init:",n,(new Date).getTime());switch(n){case"week":this._model=new t.WeekModel(e),this._view=new t.WeekView(this._model);break;case"month":this._model=new t.MonthModel(e),this._view=new t.MonthView(this._model);break;case"season":this._model=new t.SeasonModel(e),this._view=new t.SeasonView(this._model);break;case"year":this._model=new t.YearModel(e),this._view=new t.YearView(this._model);break;case"monthday":this._model=new t.MonthDayModel(e),this._view=new t.MonthDayView(this._model);break;default:this._model=new t.Model(e),this._view=new t.View(this._model)}this._init()}function n(e){this._selector=e}function r(e){this._model=e}window.JC=window.JC||{log:function(){}},window.Calendar=JC.Calendar=t,t.prototype={_init:function(){var t=this;return t._initHanlderEvent(),e([t._view,t._model]).on("BindEvent",function(e,n,r){t.on(n,r)}),e([t._view,t._model]).on("TriggerEvent",function(e,n){var r=JC.f.sliceArgs(arguments).slice(2);t.trigger(n,r)}),t._model.init(),t._view.init(),t},_initHanlderEvent:function(){var e=this;return e.on(t.Model.INITED,function(t){e._model.calendarinited()&&e._model.calendarinited().call(e._model.selector(),e._model.layout(),e)}),e.on(t.Model.SHOW,function(t){e._model.calendarshow()&&e._model.calendarshow().call(e._model.selector(),e._model.selector(),e)}),e.on(t.Model.HIDE,function(t){e._model.calendarhide()&&e._model.calendarhide().call(e._model.selector(),e._model.selector(),e)}),e.on(t.Model.UPDATE,function(t){if(!e._model.selector())return;e._model.selector().blur(),e._model.selector().trigger("change");var n=[],r=e._model.selector().val().trim(),i,s,o,u,a,f;if(r){o=r.split(",");for(var l=0,c=o.length;l<c;l++){if(e._model.dateParse(e._model.selector())){var h=e._model.dateParse(e._model.selector())(o[l]);i=h.start,s=h.end,!s&&(s=i)}else u=o[l].replace(/[^\d]/g,""),u.length==16?(a=JC.f.parseISODate(u.slice(0,8)),f=JC.f.parseISODate(u.slice(8))):u.length==8&&(a=JC.f.parseISODate(u.slice(0,8)),f=JC.f.cloneDate(a)),l===0&&(i=JC.f.cloneDate(a),s=JC.f.cloneDate(f));n.push({start:a,end:f})}}e._model.calendarupdate()&&e._model.calendarupdate().apply(e._model.selector(),[i,s,e]),e._model.multiselect()&&e._model.calendarupdatemultiselect()&&e._model.calendarupdatemultiselect().call(e._model.selector(),n,e)}),e.on(t.Model.CLEAR,function(t){e._model.calendarclear()&&e._model.calendarclear().call(e._model.selector(),e._model.selector(),e)}),e.on(t.Model.CANCEL,function(t){e._model.calendarcancel()&&e._model.calendarcancel().call(e._model.selector(),e._model.selector(),e)}),e.on(t.Model.LAYOUT_CHANGE,function(t){e._model.calendarlayoutchange()&&e._model.calendarlayoutchange().call(e._model.selector(),e._model.selector(),e)}),e.on(t.Model.UPDATE_MULTISELECT,function(t){e._model.multiselect()&&e._model.calendarupdatemultiselect()&&e._model.calendarupdatemultiselect().call(e._model.selector(),e._model.selector(),e)}),e},show:function(){return t.hide(),t.lastIpt=this._model.selector(),this._view.show(),this.trigger(t.Model.SHOW),this},hide:function(){return this._view.hide(),this.trigger(t.Model.HIDE),this.selector()&&this.selector().blur(),this},selector:function(){return this._model.selector()},layout:function(){return this._model.layout()},on:function(t,n){return e(this).on(t,n),this},trigger:function(t,n){return e(this).trigger(t,n),this},updateLayout:function(){return this._view.updateLayout(),this},updateSelector:function(e){return t.lastIpt=e,this._model&&this._model.selector(e),this},updateYear:function(e){return this._view&&this._view.updateYear(e),this.trigger(t.Model.LAYOUT_CHANGE),this},updateMonth:function(e){return this._view&&this._view.updateMonth(e),this.trigger(t.Model.LAYOUT_CHANGE),this},updateSelected:function(e){return JC.log("JC.Calendar: updateSelector",(new Date).getTime()),this._view&&this._view.updateSelected(e),this},updatePosition:function(){return this._view&&this._view.updatePosition(),this},clear:function(){var e=!this._model.selector().val().trim();return this._model&&this._model.selector().val(""),!e&&this.trigger(t.Model.CLEAR),this},cancel:function(){return this.trigger(t.Model.CANCEL),this._view&&this._view.hide(),this},visible:function(){var e,t;return this._model&&(t=this._model.layout())&&(e=t.is(":visible")),e},defaultDate:function(e){return this._model.defaultDate(e)},updateFormat:function(e){this._model.updateFormat(e)}},t.getInstance=function(n,r){typeof n=="string"&&!/</.test(n)&&(n=e(n));if(!n||!n.length||typeof n=="string")return;var i=t.type(n);return typeof r!="undefined"&&(t._ins[i]=r),t._ins[i]&&t._ins[i].updateSelector(n),t._ins[i]},t._ins={},t.type=function(t){t=e(t);var n,r=e.trim(t.attr("multidate")||"").toLowerCase()||e.trim(t.attr("datatype")||"").toLowerCase();switch(r){case"week":case"month":case"season":case"year":case"monthday":n=r;break;default:n="date"}return n},t.isCalendar=function(t){t=e(t);var n=0;return t.length&&(t.hasClass("UXCCalendar_btn")&&(n=1),t.prop("nodeName")&&t.attr("datatype")&&(t.prop("nodeName").toLowerCase()=="input"||t.prop("nodeName").toLowerCase()=="button")&&(t.attr("datatype").toLowerCase()=="date"||t.attr("datatype").toLowerCase()=="week"||t.attr("datatype").toLowerCase()=="month"||t.attr("datatype").toLowerCase()=="season"||t.attr("datatype").toLowerCase()=="year"||t.attr("datatype").toLowerCase()=="daterange"||t.attr("datatype").toLowerCase()=="monthday")&&(n=1),t.prop("nodeName")&&t.attr("multidate")&&(t.prop("nodeName").toLowerCase()=="input"||t.prop("nodeName").toLowerCase()=="button")&&(n=1)),n},t.isCalendarElement=function(e){return t.isCalendar(e)},t.pickDate=function(n){n=e(n);if(!n||!n.length)return;var r,i=n.is("[ignoreprocess]");n.attr("ignoreprocess",!0),n.blur(),!i&&n.removeAttr("ignoreprocess"),r=t.getInstance(n),!r&&(r=new t(n)),r.show();return},t.autoInit=!0,t.defaultDateSpan=20,t.lastIpt=null,t.tpl="",t.layoutInitedCallback=null,t.layoutShowCallback=null,t.layoutHideCallback=null,t.domClickFilter=null,t.hide=function(){for(var e in t._ins)t._ins[e]&&t._ins[e].visible()&&t._ins[e].hide()},t.getDate=function(e){return t.getInstance(e).defaultDate()},t.cnWeek="日一二三四五六",t.cnUnit="十一二三四五六七八九",t.getCnNum=function(e){var n=t.cnUnit.charAt(e%10);return e>10&&(n=(e%10!==0?t.cnUnit.charAt(0):"")+n),e>19&&(n=t.cnUnit.charAt(Math.floor(e/10))+n),n},t.position=function(e){t.getInstance(e)&&t.getInstance(e).updatePosition()},t.setPosition=t.position,t.initTrigger=function(n){n.each(function(){var r=e(this),i=(r.prop("nodeName")||"").toLowerCase(),s,o;if(i!="input"&&i!="textarea"){t.initTrigger(n.find("input[type=text], textarea"));return}o=e.trim(r.attr("datatype")||"").toLowerCase();if(o!="date"&&o!="week"&&o!="month"&&o!="season"&&o!="year"&&o!="daterange"&&o!="monthday"&&!e.trim(r.attr("multidate")||""))return;var u=r.find("+ input.UXCCalendar_btn");u.length||r.after(u=e('<input type="button" class="UXCCalendar_btn"  />')),(s=r.val().trim())&&(s=JC.f.dateDetect(s))&&r.val(JC.f.formatISODate(s)),(s=r.attr("minvalue")||"")&&(s=JC.f.dateDetect(s))&&r.attr("minvalue",JC.f.formatISODate(s)),(s=r.attr("maxvalue")||"")&&(s=JC.f.dateDetect(s))&&r.attr("maxvalue",JC.f.formatISODate(s));if(r.is("[dateFormat]")||r.is("[fullDateFormat]")){var a=t.getInstance(n);!a&&(a=new t(n)),a.updateSelector(n),a.updateFormat(r)}if((r.attr("datatype")||"").toLowerCase()=="monthday"||(r.attr("multidate")||"").toLowerCase()=="monthday")if(!r.is("[placeholder]")){var f=new Date;r.attr("defaultdate")&&(f=JC.f.parseISODate(r.attr("defaultdate"))||f),r.val().trim()&&(f=JC.f.parseISODate(r.val().replace(/[^d]/g,"").slice(0,8))||f),f&&r.attr("placeholder",JC.f.printf("{0}年 {1}月",f.getFullYear(),f.getMonth()+1))}u.data(t.Model.INPUT,r)})},t.updateMultiYear=function(e,t){var n,r;return n=e.getDate(),e.setDate(1),e.setFullYear(e.getFullYear()+t),r=JC.f.maxDayOfMonth(e),n>r&&(n=r),e.setDate(n),e},t.updateMultiMonth=function(e,t){var n,r;return n=e.getDate(),e.setDate(1),e.setMonth(e.getMonth()+t),r=JC.f.maxDayOfMonth(e),n>r&&(n=r),e.setDate(n),e},t.clone=function(e,t){var i;if(e)for(i in n.prototype)e.prototype[i]=n.prototype[i];if(t)for(i in r.prototype)t.prototype[i]=r.prototype[i]},t.Model=n,t.Model.INPUT="CalendarInput",t.Model.INITED="CalendarInited",t.Model.SHOW="CalendarShow",t.Model.HIDE="CalendarHide",t.Model.UPDATE="CalendarUpdate",t.Model.CLEAR="CalendarClear",t.Model.CANCEL="CalendarCancel",t.Model.LAYOUT_CHANGE="CalendarLayoutChange",t.Model.UPDATE_MULTISELECT="CalendarUpdateMultiSelect",n.prototype={init:function(){return this},selector:function(e){return typeof e!="undefined"&&(this._selector=e),this._selector},layout:function(){var n=e("#UXCCalendar");if(!n.length){n=e(t.tpl||this.tpl).hide(),n.attr("id","UXCCalendar").hide().appendTo(document.body);var r=e(['<option value="0">一月</option>','<option value="1">二月</option>','<option value="2">三月</option>','<option value="3">四月</option>','<option value="4">五月</option>','<option value="5">六月</option>','<option value="6">七月</option>','<option value="7">八月</option>','<option value="8">九月</option>','<option value="9">十月</option>','<option value="10">十一月</option>','<option value="11">十二月</option>'].join("")).appendTo(n.find("select.UMonth"))}return n},startYear:function(e){var n=t.defaultDateSpan,r=e.date.getFullYear();return this.selector().is("[calendardatespan]")&&(n=parseInt(this.selector().attr("calendardatespan"),10)),r-n},endYear:function(e){var n=t.defaultDateSpan,r=e.date.getFullYear();return this.selector().is("[calendardatespan]")&&(n=parseInt(this.selector().attr("calendardatespan"),10)),r+n},currentcanselect:function(){var e=!0;return this.selector().is("[currentcanselect]")&&(e=JC.f.parseBool(this.selector().attr("currentcanselect"))),e},year:function(){return parseInt(this.layout().find("select.UYear").val(),10)||1},month:function(){return parseInt(this.layout().find("select.UMonth").val(),10)||0},day:function(){var e,t=new Date;return e=this.layout().find("td.cur > a[date], td.cur > a[dstart]"),e.length&&t.setTime(e.attr("date")||e.attr("dstart")),JC.log("dddddd",t.getDate()),t.getDate()},defaultDate:function(){var e=this,t={date:null,minvalue:null,maxvalue:null,enddate:null,multidate:null};return e.selector()&&(t=e.multiselect()?e.defaultMultiselectDate(t):e.defaultSingleSelectDate(t)),e.dateParse(e.selector())?(e.selector().is("[minvalue]")&&(t.minvalue=e.dateParse(e.selector())(e.selector().attr("minvalue")).start),e.selector().is("[maxvalue]")&&(t.maxvalue=e.dateParse(e.selector())(e.selector().attr("maxvalue")).start)):(e.selector().is("[minvalue]")&&(t.minvalue=JC.f.parseISODate(e.selector().attr("minvalue"))),e.selector().is("[maxvalue]")&&(t.maxvalue=JC.f.parseISODate(e.selector().attr("maxvalue")))),t},defaultSingleSelectDate:function(e){var n=this,r=n.selector(),i,s=r.val().trim();if(!s)return e.date=new Date,e.enddate=JC.f.cloneDate(e.date),e;if(n.dateParse(n.selector())){var o=n.dateParse(n.selector())(n.selector().val().trim());e.date=o.start,e.enddate=o.end,!e.enddate&&(e.enddate=e.date)}else(i=JC.f.parseISODate(r.val()))?e.date=i:r.val()&&(i=r.val().replace(/[^\d]/g,"")).length==16?(e.date=JC.f.parseISODate(i.slice(0,8)),e.enddate=JC.f.parseISODate(i.slice(8))):(i=new Date,t.lastIpt&&t.lastIpt.is("[defaultdate]")&&(i=JC.f.parseISODate(t.lastIpt.attr("defaultdate"))||i),e.date=new Date(i.getFullYear(),i.getMonth(),i.getDate()));return e},defaultMultiselectDate:function(n){var r=this,i=t.lastIpt,s,o,u,a;return i.val()?(s=i.val().trim().replace(/[^\d,]/g,"").split(","),o=[],e.each(s,function(e,t){if(r.dateParse(i)){var s=r.dateParse(i)(t);u=s.start,a=s.end,!a&&(a=u),o.push({start:u,end:a})}else t.length==16?(u=JC.f.parseISODate(t.slice(0,8)),a=JC.f.parseISODate(t.slice(8)),e||(n.date=JC.f.cloneDate(u),n.enddate=JC.f.cloneDate(a)),o.push({start:u,end:a})):t.length==8&&(u=JC.f.parseISODate(t.slice(0,8)),a=JC.f.cloneDate(u),e||(n.date=JC.f.cloneDate(u),n.enddate=JC.f.cloneDate(a)),o.push({start:u,end:a}))}),n.multidate=o):(s=new Date,t.lastIpt&&t.lastIpt.is("[defaultdate]")&&(s=JC.f.parseISODate(t.lastIpt.attr("defaultdate"))||s),n.date=new Date(s.getFullYear(),s.getMonth(),s.getDate()),n.enddate=JC.f.cloneDate(n.date),n.enddate.setDate(JC.f.maxDayOfMonth(n.enddate)),n.multidate=[],n.multidate.push({start:JC.f.cloneDate(n.date),end:JC.f.cloneDate(n.enddate)})),n},layoutDate:function(){return this.multiselect()?this.multiLayoutDate():this.singleLayoutDate()},singleLayoutDate:function(){var e=this,t=e.defaultDate(),n=this.day(),r;return t.date.setDate(1),t.date.setFullYear(this.year()),t.date.setMonth(this.month()),r=JC.f.maxDayOfMonth(t.date),n>r&&(n=r),t.date.setDate(n),t},multiLayoutDate:function(){JC.log("Calendar.Model multiLayoutDate",(new Date).getTime());var t=this,n=t.defaultDate(),r=t.year(),i=t.month(),s=t.layout().find("select.UMonth");return n.multidate=[],t.layout().find("td.cur").each(function(){var t=e(this),r=t.find("> a[dstart]"),i=new Date,s=new Date;i.setTime(r.attr("dstart")),s.setTime(r.attr("dend")),n.multidate.push({start:i,end:s})}),n.date.setFullYear(r),n.enddate.setFullYear(r),s.length&&(n.date.setMonth(i),n.enddate.setMonth(i)),e.each(n.multidate,function(e,t){t.start.setFullYear(r),t.end.setFullYear(r),s.length&&(t.start.setMonth(i),t.end.setMonth(i))}),n},selectedDate:function(){var e,t,n;return t=this.layout().find("td.cur"),t.length&&!t.hasClass("unable")&&(n=t.find("a[date]"))&&(e=new Date,e.setTime(n.attr("date"))),e},multiselectDate:function(){var e=[];return e},calendarinited:function(){var e=this.selector(),n=t.layoutInitedCallback,r;return e&&e.attr("calendarinited")&&(r=window[e.attr("calendarinited")])&&(n=r),n},calendarshow:function(){var e=this.selector(),n=t.layoutShowCallback,r;return e&&e.attr("calendarshow")&&(r=window[e.attr("calendarshow")])&&(n=r),n},calendarhide:function(){var e=this.selector(),n=t.layoutHideCallback,r;return e&&e.attr("calendarhide")&&(r=window[e.attr("calendarhide")])&&(n=r),n},calendarupdate:function(e){var t=this.selector(),n,r;return t&&t.attr("calendarupdate")&&(r=window[t.attr("calendarupdate")])&&(n=r),n},calendarclear:function(){var e=this.selector(),t,n;return e&&e.attr("calendarclear")&&(n=window[e.attr("calendarclear")])&&(t=n),t},calendarcancel:function(){var e=this.selector(),t,n;return e&&e.attr("calendarcancel")&&(n=window[e.attr("calendarcancel")])&&(t=n),t},calendarlayoutchange:function(){var e=this.selector(),t,n;return e&&e.attr("calendarlayoutchange")&&(n=window[e.attr("calendarlayoutchange")])&&(t=n),t},multiselect:function(){var e;return this.selector().is("[multiselect]")&&(e=JC.f.parseBool(this.selector().attr("multiselect"))),e},calendarupdatemultiselect:function(e){var t=this.selector(),n,r;return t&&t.attr("calendarupdatemultiselect")&&(r=window[t.attr("calendarupdatemultiselect")])&&(n=r),n},updateFormat:function(t){t&&(t=e(t));if(!t||!t.length)return;var n=this,r=(t.attr("datetype")||t.attr("multidate")||"").toLowerCase().trim(),i=t.val().trim(),s=n.dateParse(t),o,u,a;if(!i)return;r=="date"&&!t.attr("fullDateFormat")&&t.attr("fullDateFormat","{0}");if(s)switch(r){case"date":break;case"week":case"month":case"season":case"year":a=s(i),t.val(n.fullFormat(n.dateFormat(a.start,t),n.dateFormat(a.end,t),t))}else switch(r){case"date":o=JC.f.parseISODate(i),t.val(n.dateFormat(o,t)||i)}},dateFormat:function(e,t){t=t||this.selector();var n="",r=t.attr("dateFormat")||"YY-MM-DD";return e&&(n=JC.f.dateFormat(e,r)),n},fullFormat:function(e,t,n){n=n||this.selector();var r="",i=n.attr("fullDateFormat")||"{0} 至 {1}";return e&&t?r=JC.f.printf(i,this.dateFormat(e,n),this.dateFormat(t,n)):e?r=JC.f.printf(i,this.dateFormat(e,n)):t&&(r=JC.f.printf(i,this.dateFormat(t,n))),r},dateParse:function(e){var t;return e&&e.attr("dateParse")&&(t=window[e.attr("dateParse")]),t},tpl:['<div id="UXCCalendar" class="UXCCalendar">','    <div class="UHeader">','        <select class="UYear"></select>','        <img class="UImg yearctl" align="absMiddle" usemap="#UXCCalendar_Year" />','        <map name="UXCCalendar_Year"><area shape="rect" coords="0,0,13,8" href="#" action="up"><area shape="rect" coords="0,10,13,17" href="#" action="down"></map>','        <select class="UMonth"></select>','        <img class="UImg monthctl" align="absMiddle" usemap="#UXCCalendar_Month"  />','        <map name="UXCCalendar_Month"><area shape="rect" coords="0,0,13,8" href="#" action="up"><area shape="rect" coords="0,10,13,17" href="#" action="down"></map>',"    </div>",'    <table class="UTable">',"        <thead>","            <tr>","                <th>一</th>","                <th>二</th>","                <th>三</th>","                <th>四</th>","                <th>五</th>","                <th>六</th>","                <th>日</th>","            </tr>","        </thead>","   </table>",'   <table class="UTable UTableBorder">',"        <tbody>","           <!--<tr>",'                <td class="cur"><a href="#">2</a></td>','                <td class="unable"><a href="#">2</a></td>','                <td class="weekend cur"><a href="#">6</a></td>','                <td class="weekend hover"><a href="#">13</a></td>','                <td class="weekend other"><a href="#">41</a></td>','                <td class="weekend other"><a href="#">42</a></td>',"            </tr>-->","        </tbody>","    </table>",'    <div class="UFooter">','        <button type="button" class="UConfirm">确定</button>','        <button type="button" class="UClear">清空</button>','        <button type="button" class="UCancel">取消</button>',"    </div>","</div>"].join("")},t.View=r,r.prototype={init:function(){return this},hide:function(){this._model.layout().hide()},show:function(){var e=this._model.defaultDate();JC.log("Calendar.View: show",(new Date).getTime(),JC.f.formatISODate(e.date)),this._buildLayout(e),this._buildDone()},updateLayout:function(e){typeof e=="undefined"&&(e=this._model.layoutDate()),this._buildLayout(e),this._buildDone()},updateYear:function(e){if(typeof e=="undefined"||e==0)return;this._model.multiselect()?this.updateMultiYear(e):this.updateSingleYear(e)},updateSingleYear:function(e){var t=this._model.layoutDate(),n=t.date.getDate(),r;t.date.setDate(1),t.date.setFullYear(t.date.getFullYear()+e),r=JC.f.maxDayOfMonth(t.date),n>r&&(n=r),t.date.setDate(n),this._buildLayout(t),this._buildDone()},updateMultiYear:function(t){var n=this._model.layoutDate(),r,i;JC.Calendar.updateMultiYear(n.date,t),JC.Calendar.updateMultiYear(n.enddate,t),n.multidate&&e.each(n.multidate,function(e,n){JC.Calendar.updateMultiYear(n.start,t),JC.Calendar.updateMultiYear(n.end,t)}),this._buildLayout(n),this._buildDone()},updateMonth:function(e){if(typeof e=="undefined"||e==0)return;this._model.multiselect()?this.updateMultiMonth(e):this.updateSingleMonth(e)},updateMultiMonth:function(t){var n=this._model.layoutDate(),r,i;JC.Calendar.updateMultiMonth(n.date,t),JC.Calendar.updateMultiMonth(n.enddate,t),n.multidate&&e.each(n.multidate,function(e,n){JC.Calendar.updateMultiMonth(n.start,t),JC.Calendar.updateMultiMonth(n.end,t)}),this._buildLayout(n),this._buildDone()},updateSingleMonth:function(e){var t=this._model.layoutDate(),n=t.date.getDate(),r;t.date.setDate(1),t.date.setMonth(t.date.getMonth()+e),r=JC.f.maxDayOfMonth(t.date),n>r&&(n=r),t.date.setDate(n),this._buildLayout(t),this._buildDone()},updateSelected:function(n){var r=this,i,s;if(!n)i=this._model.selectedDate();else{n=e(n),s=JC.f.getJqParent(n,"td");if(s&&s.hasClass("unable"))return;i=new Date,i.setTime(n.attr("date"))}if(!i)return;r._model.selector().val(r._model.dateFormat(i)),e(r).trigger("TriggerEvent",[JC.Calendar.Model.UPDATE,"date",i,i]),t.hide()},updatePosition:function(){var t=this,n=t._model.selector(),r=t._model.layout();if(!(n&&r&&n.length&&r.length))return;r.css({left:"-9999px",top:"-9999px","z-index":ZINDEX_COUNT++}).show();var i=r.width(),s=r.height(),o=n.width(),u=n.height(),a=n.offset(),f,l,c=e(window).width(),h=e(window).height(),p=e(document).scrollLeft(),d=e(document).scrollTop();f=a.left,l=a.top+u+5,l+s-d>h&&(JC.log("y overflow"),l=a.top-s-3,l<d&&(l=d)),f+i-p>c&&(f=c-i+p-5),f<p&&(f=p+0),r.css({left:f+"px",top:l+"px"}),JC.log(i,s,o,u,a.left,a.top,c,h),JC.log(d,f,l)},_buildDone:function(){this.updatePosition(),e(this).trigger("TriggerEvent",[t.Model.INITED])},_buildLayout:function(e){this._model.layout();if(!e||!e.date)return;this._buildHeader(e),this._buildBody(e),this._buildFooter(e)},_buildHeader:function(t){var n=this,r=n._model.layout(),i=[],s,o=o=t.date.getFullYear(),u=n._model.startYear(t),a=n._model.endYear(t);JC.log(u,a);for(var f=u;f<=a;f++)i.push(JC.f.printf('<option value="{0}"{1}>{0}</option>',f,f===o?" selected":""));e(i.join("")).appendTo(r.find("select.UYear").html("")),e(r.find("select.UMonth").val(t.date.getMonth()))},_buildBody:function(t){var n=this,r=n._model.layout(),i=JC.f.maxDayOfMonth(t.date),s=t.date.getDay()||7,o=s+i,u=6,a=[],f,l,c,h,p,d=new Date(t.date.getFullYear(),t.date.getMonth(),1),v=d.getDay()||7;v<2?d.setDate(-(v-1+6)):d.setDate(-(v-2));var m=new Date;t.maxvalue&&!n._model.currentcanselect()&&t.maxvalue.setDate(t.maxvalue.getDate()-1),a.push("<tr>");for(h=1;h<=42;h++)p=[],(d.getDay()===0||d.getDay()==6)&&p.push("weekend"),JC.f.isSameMonth(t.date,d)||p.push("other"),t.minvalue&&d.getTime()<t.minvalue.getTime()&&p.push("unable"),t.maxvalue&&d.getTime()>t.maxvalue.getTime()&&p.push("unable"),JC.f.isSameDay(d,m)&&p.push("today"),JC.f.isSameDay(t.date,d)&&p.push("cur"),a.push('<td class="',p.join(" "),'">','<a href="javascript:" date="',d.getTime(),'" title="'+JC.f.formatISODate(d)+'" >',d.getDate(),"</a></td>"),d.setDate(d.getDate()+1),h%7===0&&h!=42&&a.push("</tr><tr>");a.push("</tr>"),r.find("table.UTableBorder tbody").html(e(a.join("")))},_buildFooter:function(e){}},e(document).delegate("body > div.UXCCalendar select.UYear, body > div.UXCCalendar select.UMonth","change",function(e){t.getInstance(t.lastIpt)&&t.getInstance(t.lastIpt).updateLayout()}),e(document).delegate("body > div.UXCCalendar button.UNextYear","click",function(e){t.getInstance(t.lastIpt)&&t.getInstance(t.lastIpt).updateYear(1)}),e(document).delegate("body > div.UXCCalendar button.UPreYear","click",function(e){t.getInstance(t.lastIpt)&&t.getInstance(t.lastIpt).updateYear(-1)}),e(document).delegate("map[name=UXCCalendar_Year] area","click",function(n){n.preventDefault();var r=e(this),i=t.getInstance(t.lastIpt);r.attr("action")&&i&&(r.attr("action").toLowerCase()=="up"&&i.updateYear(1),r.attr("action").toLowerCase()=="down"&&i.updateYear(-1))}),e(document).delegate("map[name=UXCCalendar_Month] area","click",function(n){n.preventDefault();var r=e(this),i=t.getInstance(t.lastIpt);r.attr("action")&&i&&(r.attr("action").toLowerCase()=="up"&&i.updateMonth(1),r.attr("action").toLowerCase()=="down"&&i.updateMonth(-1))}),e(document).delegate("body > div.UXCCalendar button.UNextMonth","click",function(e){t.getInstance(t.lastIpt)&&t.getInstance(t.lastIpt).updateMonth(1)}),e(document).delegate("body > div.UXCCalendar button.UPreMonth","click",function(e){t.getInstance(t.lastIpt)&&t.getInstance(t.lastIpt).updateMonth(-1)}),e(document).delegate("div.UXCCalendar table a[date], div.UXCCalendar table a[dstart]","click",function(n){n.preventDefault(),t.getInstance(t.lastIpt)&&t.getInstance(t.lastIpt).updateSelected(e(this))}),e(document).delegate("body > div.UXCCalendar button.UConfirm","click",function(e){t.getInstance(t.lastIpt)&&t.getInstance(t.lastIpt).updateSelected()}),e(document).delegate("body > div.UXCCalendar button.UClear","click",function(e){t.getInstance(t.lastIpt)&&t.getInstance(t.lastIpt).clear()}),e(document).delegate("body > div.UXCCalendar button.UCancel","click",function(e){t.getInstance(t.lastIpt)&&t.getInstance(t.lastIpt).cancel()}),e(document).delegate("input.UXCCalendar_btn","click",function(n){var r=e(this),i;r.data(t.Model.INPUT)||(i=r.prev("input[type=text], textarea"),i.length&&r.data(t.Model.INPUT,i)),r.data(t.Model.INPUT)&&!r.data(t.Model.INPUT).is("[disabled]")&&t.pickDate(r.data(t.Model.INPUT))}),e(document).delegate("body > div.UXCCalendar","click",function(e){e.stopPropagation()}),e(document).ready(function(n){JC.f.safeTimeout(function(n){if(!t.autoInit)return;t.initTrigger(e(document))},null,"CalendarInitTrigger",200),e(window).on("scroll resize",function(e){var n=t.getInstance(t.lastIpt);n&&n.visible()&&n.updatePosition()}),e(document).on("click",function(n){var r=n.target||n.srcElement;if(t.domClickFilter&&t.domClickFilter(e(r))===!1)return;if(t.isCalendar(n.target||n.targetElement))return;if(r&&r.nodeName.toLowerCase()!="input"&&r.nodeName.toLowerCase()!="button"&&r.nodeName.toLowerCase()!="textarea"){t.hide();return}JC.f.safeTimeout(function(){if(t.lastIpt&&t.lastIpt.length&&r==t.lastIpt[0])return;t.hide()},null,"CalendarClickHide",100)})}),e(document).delegate(["input[datatype=date]","input[datatype=daterange]","input[multidate=date]","input[multidate=daterange]"].join(),"focus",function(e){t.pickDate(this)}),e(document).delegate(["button[datatype=date]","button[datatype=daterange]","button[multidate=date]","button[multidate=daterange]"].join(),"click",function(e){t.pickDate(this)}),e(document).delegate(["textarea[datatype=date]","textarea[datatype=daterange]","textarea[multidate=date]","textarea[multidate=daterange]"].join(),"click",function(e){t.pickDate(this)})}(jQuery),JC.Calendar})})(typeof define=="function"&&define.amd?define:function(e,t,n){typeof e=="function"&&(n=e),typeof t=="function"&&(n=t),n&&n()},window);
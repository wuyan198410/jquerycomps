(function(e,t){e(["JC.Calendar.date"],function(){function e(e){this._selector=e}function t(e){this._model=e}JC.Calendar.monthTpl="",JC.Calendar.MonthModel=e,JC.Calendar.MonthView=t,JC.Calendar.clone(e,t),JC.f.extendObject(e.prototype,{layout:function(){var e=$("#UXCCalendar_month");return e.length||(e=$(JC.Calendar.monthTpl||this.tpl).hide(),e.attr("id","UXCCalendar_month").hide().appendTo(document.body)),e},tpl:['<div id="UXCCalendar_month" class="UXCCalendar UXCCalendar_week UXCCalendar_month" >','    <div class="UHeader">','        <button type="button" class="UButton UNextYear">&nbsp;&gt;&gt;&nbsp;</button>','        <button type="button" class="UButton UPreYear">&nbsp;&lt;&lt;&nbsp;</button>','        <select class="UYear" style=""></select>',"    </div>",'    <table class="UTable UTableBorder">',"        <tbody></tbody>","    </table>",'    <div class="UFooter">','        <button type="button" class="UConfirm">确定</button>','        <button type="button" class="UClear">清空</button>','        <button type="button" class="UCancel">取消</button>',"    </div>","</div>"].join(""),month:function(){var e=0,t,n;return(t=this.layout().find("td.cur a[dstart]")).length&&(n=new Date)&&(n.setTime(t.attr("dstart")),e=n.getMonth()),e},selectedDate:function(){var e,t,n;return t=this.layout().find("td.cur"),t.length&&!t.hasClass("unable")&&(n=t.find("a[dstart]"))&&(e={start:new Date,end:new Date},e.start.setTime(n.attr("dstart")),e.end.setTime(n.attr("dend"))),e},multiselectDate:function(){var e=this,t=[],n,r,i,s;return e.layout().find("td.cur").each(function(){n=$(this),r=n.find("> a[dstart]");if(n.hasClass("unable"))return;i=new Date,s=new Date,i.setTime(r.attr("dstart")),s.setTime(r.attr("dend")),t.push({start:i,end:s})}),t}}),JC.f.extendObject(t.prototype,{_buildBody:function(e){var t=this,n=e.date,r=t._model.layout(),i=(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())).getTime(),s=0,o=[],u,a,f,l,c,h=n.getFullYear(),p=4,d=JC.Calendar.lastIpt,v=JC.f.parseBool(d.attr("currentcanselect")),m=e.multidate?e.multidate.slice():null;e.maxvalue&&v&&e.maxvalue.setDate(JC.f.maxDayOfMonth(e.maxvalue)),o.push("<tr>");for(var g=1,y=12;g<=y;g++){l=new Date(h,g-1,1),c=new Date(h,g-1,JC.f.maxDayOfMonth(l)),f=JC.f.printf("{0}年 {1}月\n开始日期: {2} (周{4})\n结束日期: {3} (周{5})",h,JC.Calendar.getCnNum(g),JC.f.formatISODate(l),JC.f.formatISODate(c),JC.Calendar.cnWeek.charAt(l.getDay()%7),JC.Calendar.cnWeek.charAt(c.getDay()%7)),u=[],e.minvalue&&l.getTime()<e.minvalue.getTime()&&u.push("unable"),e.maxvalue&&c.getTime()>e.maxvalue.getTime()&&u.push("unable"),m?$.each(m,function(e,t){if(l.getTime()>=t.start.getTime()&&l.getTime()<=t.end.getTime())return u.push("cur"),m.splice(e,1),!1}):n.getTime()>=l.getTime()&&n.getTime()<=c.getTime()&&u.push("cur"),i>=l.getTime()&&i<=c.getTime()&&u.push("today");var b=JC.Calendar.cnUnit.charAt(g%10);g>10&&(b="十"+b),o.push(JC.f.printf('<td class="{0}"><a href="javascript:" title="{1}" dstart="{3}" dend="{4}" month="{5}" >{2}月</a></td>',u.join(" "),f,b,l.getTime(),c.getTime(),g)),g%3===0&&g!=y&&o.push("</tr><tr>")}o.push("</tr>"),r.find("table.UTableBorder tbody").html($(o.join("")))},updateSelected:function(e){var t=this,n,r,i,s,o;if(!e)if(t._model.multiselect()){i=this._model.multiselectDate();if(!i.length)return;o=[],$.each(i,function(e,n){o.push(s=t._model.fullFormat(t._model.dateFormat(n.start),t._model.dateFormat(n.end)))}),s=o.join(",")}else i=this._model.selectedDate(),i&&(n=i.start,r=i.end),n&&r&&(s=t._model.fullFormat(t._model.dateFormat(n),t._model.dateFormat(r)));else{e=$(e),i=JC.f.getJqParent(e,"td");if(i&&i.hasClass("unable"))return;if(t._model.multiselect()){i.toggleClass("cur");return}n=new Date,r=new Date,n.setTime(e.attr("dstart")),r.setTime(e.attr("dend")),s=t._model.fullFormat(t._model.dateFormat(n),t._model.dateFormat(r))}if(!s)return;t._model.selector().val(s),$(t).trigger("TriggerEvent",[JC.Calendar.Model.UPDATE,"month",n,r]),JC.Calendar.hide()}}),$(document).delegate(["input[datatype=month]","input[multidate=month]"].join(),"focus",function(e){Calendar.pickDate(this)}),$(document).delegate(["button[datatype=month]","button[multidate=month]"].join(),"click",function(e){Calendar.pickDate(this)}),$(document).delegate(["textarea[datatype=month]","textarea[multidate=month]"].join(),"click",function(e){Calendar.pickDate(this)})})})(typeof define=="function"&&define.amd?define:function(e,t,n){typeof e=="function"&&(n=e),typeof t=="function"&&(n=t),n&&n()},window);
(function(b,a){b([],function(){(function(A){window.JC=window.JC||{};JC.log=function(){JC.debug&&window.console&&console.log(I(arguments).join(" "))};JC.PATH=JC.PATH||N();window.Bizs=window.Bizs||{};JC.common=JC.f={addUrlParams:y,cloneDate:G,dateDetect:n,delUrlParam:m,easyEffect:M,filterXSS:H,formatISODate:o,funcName:g,getJqParent:j,getUrlParam:O,getUrlParams:x,hasUrlParam:i,urlHostName:r,httpRequire:B,isSameDay:J,isSameMonth:L,jcAutoInitComps:d,maxDayOfMonth:z,mousewheelEvent:p,padChar:w,parentSelector:h,parseBool:k,parseFinance:l,parseISODate:q,printf:e,pureDate:c,reloadPage:f,removeUrlSharp:D,relativePath:v,scriptContent:t,scriptPath:N,sliceArgs:I,urlDetect:K,moneyFormat:F,dateFormat:s,mergeObject:C,safeTimeout:u,encoder:E,backward:function(Q){if(window.JC_BACKWARD||Q){for(var P in JC.common){if(P=="backward"){continue}window[P]=window[P]||JC.common[P]}}},has_url_param:i,add_url_params:y,get_url_param:O,del_url_param:m,reload_page:f,parse_finance_num:l,pad_char_f:w,script_path_f:N};JC.f.backward();!String.prototype.trim&&(String.prototype.trim=function(){return A.trim(this)});if(!window.console){window.console={log:function(){window.status=[].slice.apply(arguments).join(" ")}}}window.ZINDEX_COUNT=window.ZINDEX_COUNT||50001;function I(Q){var S=[],R,P;for(R=0,P=Q.length;R<P;R++){S.push(Q[R])}return S}function r(P){var Q="",P=P||location.href;if(/\:\/\//.test(P)){P.replace(/^.*?\:\/\/([^\/]+)/,function(S,R){Q=R})}return Q}function v(R,Q){Q=Q||document.URL;Q=Q.replace(/^.*?\:\/\/[^\/]+/,"").replace(/[^\/]+$/,"");if(!R){return Q}if(!/\/$/.test(Q)){Q+="/"}if(/(^\.\.\/|^\.\/)/.test(R)){var S=new RegExp("^\\.\\.\\/"),T=0;while(S.exec(R)!=null){R=R.replace(S,"");T++}for(var P=0;P<T;P++){Q=Q.replace(/[^\/]+\/$/,"")}if(Q==""){return"/"}R=R.replace(/^\.\//,"");R.replace(/\/\/$/,"/");return Q+R}return R}function e(R){for(var Q=1,P=arguments.length;Q<P;Q++){R=R.replace(new RegExp("\\{"+(Q-1)+"\\}","g"),arguments[Q])}return R}function i(R,S){var T=false;if(!S){S=R;R=location.href}if(/\?/.test(R)){R=R.split("?");R=R[R.length-1];R=R.split("&");for(var Q=0,P=R.length;Q<P;Q++){if(R[Q].split("=")[0].toLowerCase()==S.toLowerCase()){T=true;break}}}return T}function y(R,Q){var S="";!Q&&(Q=R,R=location.href);R.indexOf("#")>-1&&(S=R.split("#")[1],R=R.split("#")[0]);for(var P in Q){R=m(R,P);R.indexOf("?")>-1?R+="&"+P+"="+Q[P]:R+="?"+P+"="+Q[P]}S&&(R+="#"+S);R=H(R.replace(/\?\&/g,"?"));return R}function H(P){P&&(P=P.replace(/</g,"&lt;").replace(/>/g,"&gt;"));return P}function O(Q,R){var U="",S,P,T;!R&&(R=Q,Q=location.href);Q.indexOf("#")>-1&&(Q=Q.split("#")[0]);if(Q.indexOf("?")>-1){S=Q.split("?")[1].split("&");for(P=0;P<S.length;P++){T=S[P].split("=");T[0]=T[0].replace(/^\s+|\s+$/g,"");if(T[0].toLowerCase()==R.toLowerCase()){U=H(T[1]||"");break}}}return U}function x(S,T){var V=[],P,R,Q,U;!T&&(T=S,S=location.href);S=S.replace(/[\?]+/g,"?").split("?");if(S.length>1){S=S[1];P=S.split("&");if(P.length){for(R=0,Q=P.length;R<Q;R++){U=P[R].split("=");if(U[0].trim()==T){V.push(H(U[1]||""))}}}}return V}function m(R,S){var V="",W,U=[],Q,T;!S&&(S=R,R=location.href);R.indexOf("#")>-1&&(V=R.split("#")[1],R=R.split("#")[0]);if(R.indexOf("?")>-1){W=R.split("?")[1].split("&");R=R.split("?")[0];for(Q=0;Q<W.length;Q++){var P=W[Q].split("=");P[0]=P[0].replace(/^\s+|\s+$/g,"");if(P[0].toLowerCase()==S.toLowerCase()){continue}U.push(P.join("="))}R+="?"+U.join("&")}V&&(R+="#"+V);R=H(R);return R}function B(P){P=P||"本示例需要HTTP环境";if(/file\:|\\/.test(location.href)){alert(P);return false}return true}function D(P,R,S){!P&&(P=location.href);P=P.replace(/\#[\s\S]*/,"");S=S||"rnd";var Q;!R&&(Q={},Q[S]=new Date().getTime(),P=y(P,Q));P=H(P);return P}function f(Q,R,P){P=P||0;Q=D(Q||location.href,R);!R&&(Q=y(Q,{rnd:new Date().getTime()}));Q=H(Q);setTimeout(function(){location.href=Q},P);return Q}function l(Q,P){Q=parseFloat(Q)||0;P=P||2;if(Q&&P){Q=parseFloat(Q.toFixed(P))}return Q}function w(R,P,Q){P=P||2;Q=Q||"0";R+="";if(R.length>R){return R}R=new Array(P+1).join(Q)+R;return R.slice(R.length-P)}function o(P,Q){P=P||new Date();typeof Q=="undefined"&&(Q="-");return[P.getFullYear(),w(P.getMonth()+1),w(P.getDate())].join(Q)}function q(P){if(!P){return}P=P.replace(/[^\d]+/g,"");var Q;if(P.length===8){Q=new Date(P.slice(0,4),parseInt(P.slice(4,6),10)-1,parseInt(P.slice(6),10))}return Q}function c(P){var Q;P=P||new Date();Q=new Date(P.getFullYear(),P.getMonth(),P.getDate());return Q}function G(P){var Q=new Date();Q.setTime(P.getTime());return Q}function J(Q,P){return[Q.getFullYear(),Q.getMonth(),Q.getDate()].join()===[P.getFullYear(),P.getMonth(),P.getDate()].join()}function L(Q,P){return[Q.getFullYear(),Q.getMonth()].join()===[P.getFullYear(),P.getMonth()].join()}function z(Q){var R,P=new Date(Q.getFullYear(),Q.getMonth()+1);P.setDate(P.getDate()-1);R=P.getDate();return R}function N(){var P=document.getElementsByTagName("script"),P=P[P.length-1],Q=P.getAttribute("src");if(/\//.test(Q)){Q=Q.split("/");Q.pop();Q=Q.join("/")+"/"}else{if(/\\/.test(Q)){Q=Q.split("\\");Q.pop();Q=Q.join("\\")+"/"}}return Q}function M(Y,U,Q,T,W){var S=new Date(),X,U=U||200,Q=Q||0,U=U-Q,V=0,P,T=T||200,W=W||2;var R=setInterval(function(){X=new Date()-S;V=X/T*U;V;if(V>=U){V=U;P=true;clearInterval(R)}Y&&Y(V+Q,P)},W);return R}function k(P){if(typeof P=="string"){P=P.replace(/[\s]/g,"").toLowerCase();if(P&&(P=="false"||P=="0"||P=="null"||P=="undefined")){P=false}else{if(P){P=true}}}return !!P}window.jQuery&&jQuery.support&&(jQuery.support.isFixed=(function(V){try{var S,U=V(document.documentElement),R=V("<div style='position:fixed;top:100px;visibility:hidden;'>x</div>").appendTo(U),T=U[0].style.height,P=window;U.height(screen.height*2+"px");P.scrollTo(0,100);S=R[0].getBoundingClientRect().top===100;U.height(T);R.remove();P.scrollTo(0,0);return S}catch(Q){}})(jQuery));function p(R,P){var Q=(/Firefox/i.test(navigator.userAgent))?"DOMMouseScroll":"mousewheel";document.attachEvent&&(Q="on"+Q);if(P){document.detachEvent&&document.detachEvent(Q,R);document.removeEventListener&&document.removeEventListener(Q,R)}else{document.attachEvent&&document.attachEvent(Q,R);document.addEventListener&&document.addEventListener(Q,R)}}function j(P,R){P=A(P);var Q;if(R){while((P=P.parent()).length){if(P.is(R)){Q=P;break}}}else{Q=P.parent()}return Q}function h(W,S,U){W&&(W=A(W));if(/\,/.test(S)){var Q=[],V;S=S.split(",");A.each(S,function(Z,Y){Y=Y.trim();V=h(W,Y,U);V&&V.length&&((V.each(function(){Q.push(A(this))})))});return A(Q)}var T=/^([\/]+)/,R=/^([\|]+)/,P=/^([<\(]+)/;if(T.test(S)){S=S.replace(T,function(Z,Y){for(var ab=0,aa=Y.length;ab<aa;ab++){W=W.parent()}U=W;return""});S=S.trim();return S?U.find(S):U}else{if(R.test(S)){S=S.replace(R,function(Z,Y){for(var ab=1,aa=Y.length;ab<aa;ab++){W=W.parent()}U=W;return""});S=S.trim();return S?U.find(S):U}else{if(P.test(S)){S=S.replace(P,"").trim();if(S){if(/[\s]/.test(S)){var X;S.replace(/^([^\s]+)([\s\S]+)/,function(Z,Y,aa){X=j(W,Y).find(aa.trim())});return X||S}else{return j(W,S)}}else{return W.parent()}}else{return U?U.find(S):jQuery(S)}}}}function t(P){var Q="";P&&(P=A(P)).length&&(Q=P.html().trim().replace(/[\r\n]/g,""));return Q}function g(P){var S=/^function\s+([^()]+)[\s\S]*/,R="",Q=P.toString();S.test(Q)&&(R=Q.replace(S,"$1"));return R.trim()}function d(P){P=A(P||document);if(!(P&&P.length&&window.JC)){return}JC.AutoSelect&&JC.AutoSelect(P);JC.Calendar&&JC.Calendar.initTrigger(P);JC.AutoChecked&&JC.AutoChecked(P);JC.AjaxUpload&&JC.AjaxUpload.init(P);JC.Placeholder&&JC.Placeholder.init(P);JC.TableFreeze&&JC.TableFreeze.init(P);if(!window.Bizs){return}Bizs.DisableLogic&&Bizs.DisableLogic.init(P);Bizs.FormLogic&&Bizs.FormLogic.init(P);Bizs.MoneyTips&&Bizs.MoneyTips.init(P);Bizs.AutoSelectComplete&&Bizs.AutoSelectComplete.init(P)}function K(T){T=T||"";var W=T,U,S,R,V;if(/^URL/.test(T)){U=T.replace(/^URL/,"").replace(/[\s]*,[\s]*/g,",").trim().split(",");T=location.href;var Q={},P=[];if(U.length){for(S=0,R=U.length;S<R;S++){/\&/.test(U[S])?(P=P.concat(U[S].split("&"))):(P=P.concat(U[S]))}U=P}for(S=0,R=U.length;S<R;S++){V=U[S].replace(/[\s]+/g,"").split("=");if(!V[0]){continue}Q[V[0]]=V[1]||""}T=y(T,Q);W=T}W=H(T);return W}function n(Q){var aa=null,V=/^now/i,W,Z,X;if(Q&&typeof Q=="string"){if(V.test(Q)){W=new Date();Q=Q.replace(V,"").replace(/[\s]+/g,"");Z=Q.split(",");var T=/d$/i,Y=/w$/i,P=/m$/i,U=/y$/i;for(var S=0,R=Z.length;S<R;S++){X=Z[S]||"";if(!X){continue}X=X.replace(/[^\-\ddwmy]+/gi,"");if(T.test(X)){X=parseInt(X.replace(T,""),10);X&&W.setDate(W.getDate()+X)}else{if(Y.test(X)){X=parseInt(X.replace(Y,""),10);X&&W.setDate(W.getDate()+X*7)}else{if(P.test(X)){X=parseInt(X.replace(P,""),10);X&&W.setMonth(W.getMonth()+X)}else{if(U.test(X)){X=parseInt(X.replace(U,""),10);X&&W.setFullYear(W.getFullYear()+X)}}}}}aa=W}else{aa=q(Q)}}return aa}(function(){if(!window.jQuery){return}var P=A.fn.val;A.fn.val=function(){var R=P.apply(this,arguments),Q=this;if(arguments.length&&(this.prop("nodeName")||"").toLowerCase()=="input"&&(this.attr("type")||"").toLowerCase()=="hidden"){setTimeout(function(){Q.trigger("change")},1)}return R}}());function F(W,P,R,T){var U="0.00";!P&&(P=3);typeof R=="undefined"&&(R=2);!T&&(T=",");typeof W=="number"&&(W=l(W,R));if(typeof W=="string"){W=W.replace(/[,]/g,"");if(!/^[\d\.]+$/.test(W)){return U}if(W.split(".").length>2){return U}}if(!W){return U}W+="";W=W.replace(/[^\d\.]/g,"");var Q=W.split("."),V=[];while(Q[0].length>P){var S=Q[0].slice(Q[0].length-P,Q[0].length);console.log(S);V.push(S);Q[0]=Q[0].slice(0,Q[0].length-P)}V.push(Q[0]);Q[0]=V.reverse().join(T);if(R){!Q[1]&&(Q[1]="");Q[1]+=new Array(R+1).join("0");Q[1]=Q[1].slice(0,R)}else{Q.length>1&&Q.pop()}return Q.join(".")}function s(S,R){typeof S=="string"&&(R=S,S=new Date());!S&&(S=new Date());!R&&(R="YY-MM-DD");var U=R,T,Q=["january","february","march","april","may","june","july","august","september","october","november","december"],P=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];U=U.replace(/YY/g,S.getFullYear()).replace(/MM/g,w(S.getMonth()+1)).replace(/DD/g,w(S.getDate())).replace(/yy/g,function(V){T=w(S.getYear());return T.slice(T.length-2)}).replace(/mm/g,S.getMonth()+1).replace(/dd/g,S.getDate()).replace(/d/g,S.getDate()).replace(/y/g,S.getFullYear()).replace(/m/g,function(V){return Q[S.getMonth()]}).replace(/M/g,function(V){return P[S.getMonth()]});return U}function C(P,S,R){typeof R=="undefined"&&(R=true);if(P&&S){for(var Q in S){if(R){P[Q]=S[Q]}else{if(!(Q in P)){P[Q]=S[Q]}}}}return P}function u(Q,R,P){if(typeof Q=="undefined"){return}R=A(R||(window.TIMEOUT_HOST=window.TIMEOUT_HOST||{}));P=P||"NORMAL";R.data(P)&&clearTimeout(R.data(P));R.data(P,Q)}function E(P){P&&(P=A(P));var Q;if(P&&P.length){Q=P.attr("validEncoder")||"encodeURIComponent";Q=window[Q]||encodeURIComponent}else{Q=encodeURIComponent}return Q}}(jQuery));return JC.f})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));
(function(b,a){b([],function(){(function(f){window.JC=window.JC||{};JC.log=function(){JC.debug&&window.console&&console.log(A(arguments).join(" "))};JC.PATH=JC.PATH||p();window.Bizs=window.Bizs||{};JC.common=JC.f={addUrlParams:t,cloneDate:E,dateDetect:C,delUrlParam:J,easyEffect:c,filterXSS:B,formatISODate:k,funcName:y,getJqParent:K,getUrlParam:j,getUrlParams:D,hasUrlParam:m,urlHostName:z,httpRequire:x,isSameDay:g,isSameMonth:d,jcAutoInitComps:I,maxDayOfMonth:n,mousewheelEvent:F,padChar:l,parentSelector:o,parseBool:v,parseFinance:G,parseISODate:r,printf:H,pureDate:i,reloadPage:q,removeUrlSharp:w,relativePath:e,scriptContent:h,scriptPath:p,sliceArgs:A,urlDetect:u,moneyFormat:s,backward:function(M){if(window.JC_BACKWARD||M){for(var L in JC.common){if(L=="backward"){continue}window[L]=window[L]||JC.common[L]}}},has_url_param:m,add_url_params:t,get_url_param:j,del_url_param:J,reload_page:q,parse_finance_num:G,pad_char_f:l,script_path_f:p};JC.f.backward();!String.prototype.trim&&(String.prototype.trim=function(){return f.trim(this)});if(!window.console){window.console={log:function(){window.status=[].slice.apply(arguments).join(" ")}}}window.ZINDEX_COUNT=window.ZINDEX_COUNT||50001;function A(M){var O=[],N,L;for(N=0,L=M.length;N<L;N++){O.push(M[N])}return O}function z(L){var M="",L=L||location.href;if(/\:\/\//.test(L)){L.replace(/^.*?\:\/\/([^\/]+)/,function(O,N){M=N})}return M}function e(N,M){M=M||document.URL;M=M.replace(/^.*?\:\/\/[^\/]+/,"").replace(/[^\/]+$/,"");if(!N){return M}if(!/\/$/.test(M)){M+="/"}if(/(^\.\.\/|^\.\/)/.test(N)){var O=new RegExp("^\\.\\.\\/"),P=0;while(O.exec(N)!=null){N=N.replace(O,"");P++}for(var L=0;L<P;L++){M=M.replace(/[^\/]+\/$/,"")}if(M==""){return"/"}N=N.replace(/^\.\//,"");N.replace(/\/\/$/,"/");return M+N}return N}function H(N){for(var M=1,L=arguments.length;M<L;M++){N=N.replace(new RegExp("\\{"+(M-1)+"\\}","g"),arguments[M])}return N}function m(N,O){var P=false;if(!O){O=N;N=location.href}if(/\?/.test(N)){N=N.split("?");N=N[N.length-1];N=N.split("&");for(var M=0,L=N.length;M<L;M++){if(N[M].split("=")[0].toLowerCase()==O.toLowerCase()){P=true;break}}}return P}function t(N,M){var O="";!M&&(M=N,N=location.href);N.indexOf("#")>-1&&(O=N.split("#")[1],N=N.split("#")[0]);for(var L in M){N=J(N,L);N.indexOf("?")>-1?N+="&"+L+"="+M[L]:N+="?"+L+"="+M[L]}O&&(N+="#"+O);N=B(N.replace(/\?\&/g,"?"));return N}function B(L){L&&(L=L.replace(/</g,"&lt;").replace(/>/g,"&gt;"));return L}function j(M,N){var Q="",O,L,P;!N&&(N=M,M=location.href);M.indexOf("#")>-1&&(M=M.split("#")[0]);if(M.indexOf("?")>-1){O=M.split("?")[1].split("&");for(L=0;L<O.length;L++){P=O[L].split("=");P[0]=P[0].replace(/^\s+|\s+$/g,"");if(P[0].toLowerCase()==N.toLowerCase()){Q=B(P[1]||"");break}}}return Q}function D(O,P){var R=[],L,N,M,Q;!P&&(P=O,O=location.href);O=O.replace(/[\?]+/g,"?").split("?");if(O.length>1){O=O[1];L=O.split("&");if(L.length){for(N=0,M=L.length;N<M;N++){Q=L[N].split("=");if(Q[0].trim()==P){R.push(B(Q[1]||""))}}}}return R}function J(N,O){var R="",S,Q=[],M,P;!O&&(O=N,N=location.href);N.indexOf("#")>-1&&(R=N.split("#")[1],N=N.split("#")[0]);if(N.indexOf("?")>-1){S=N.split("?")[1].split("&");N=N.split("?")[0];for(M=0;M<S.length;M++){var L=S[M].split("=");L[0]=L[0].replace(/^\s+|\s+$/g,"");if(L[0].toLowerCase()==O.toLowerCase()){continue}Q.push(L.join("="))}N+="?"+Q.join("&")}R&&(N+="#"+R);N=B(N);return N}function x(L){L=L||"本示例需要HTTP环境";if(/file\:|\\/.test(location.href)){alert(L);return false}return true}function w(L,N,O){!L&&(L=location.href);L=L.replace(/\#[\s\S]*/,"");O=O||"rnd";var M;!N&&(M={},M[O]=new Date().getTime(),L=t(L,M));L=B(L);return L}function q(M,N,L){L=L||0;M=w(M||location.href,N);!N&&(M=t(M,{rnd:new Date().getTime()}));M=B(M);setTimeout(function(){location.href=M},L);return M}function G(M,L){M=parseFloat(M)||0;L=L||2;if(M&&L){M=parseFloat(M.toFixed(L))}return M}function l(N,L,M){L=L||2;M=M||"0";N+="";if(N.length>N){return N}N=new Array(L+1).join(M)+N;return N.slice(N.length-L)}function k(L,M){L=L||new Date();typeof M=="undefined"&&(M="-");return[L.getFullYear(),l(L.getMonth()+1),l(L.getDate())].join(M)}function r(L){if(!L){return}L=L.replace(/[^\d]+/g,"");var M;if(L.length===8){M=new Date(L.slice(0,4),parseInt(L.slice(4,6),10)-1,parseInt(L.slice(6),10))}return M}function i(L){var M;L=L||new Date();M=new Date(L.getFullYear(),L.getMonth(),L.getDate());return M}function E(L){var M=new Date();M.setTime(L.getTime());return M}function g(M,L){return[M.getFullYear(),M.getMonth(),M.getDate()].join()===[L.getFullYear(),L.getMonth(),L.getDate()].join()}function d(M,L){return[M.getFullYear(),M.getMonth()].join()===[L.getFullYear(),L.getMonth()].join()}function n(M){var N,L=new Date(M.getFullYear(),M.getMonth()+1);L.setDate(L.getDate()-1);N=L.getDate();return N}function p(){var L=document.getElementsByTagName("script"),L=L[L.length-1],M=L.getAttribute("src");if(/\//.test(M)){M=M.split("/");M.pop();M=M.join("/")+"/"}else{if(/\\/.test(M)){M=M.split("\\");M.pop();M=M.join("\\")+"/"}}return M}function c(U,Q,M,P,S){var O=new Date(),T,Q=Q||200,M=M||0,Q=Q-M,R=0,L,P=P||200,S=S||2;var N=setInterval(function(){T=new Date()-O;R=T/P*Q;R;if(R>=Q){R=Q;L=true;clearInterval(N)}U&&U(R+M,L)},S);return N}function v(L){if(typeof L=="string"){L=L.replace(/[\s]/g,"").toLowerCase();if(L&&(L=="false"||L=="0"||L=="null"||L=="undefined")){L=false}else{if(L){L=true}}}return !!L}window.jQuery&&jQuery.support&&(jQuery.support.isFixed=(function(R){try{var O,Q=R(document.documentElement),N=R("<div style='position:fixed;top:100px;visibility:hidden;'>x</div>").appendTo(Q),P=Q[0].style.height,L=window;Q.height(screen.height*2+"px");L.scrollTo(0,100);O=N[0].getBoundingClientRect().top===100;Q.height(P);N.remove();L.scrollTo(0,0);return O}catch(M){}})(jQuery));function F(N,L){var M=(/Firefox/i.test(navigator.userAgent))?"DOMMouseScroll":"mousewheel";document.attachEvent&&(M="on"+M);if(L){document.detachEvent&&document.detachEvent(M,N);document.removeEventListener&&document.removeEventListener(M,N)}else{document.attachEvent&&document.attachEvent(M,N);document.addEventListener&&document.addEventListener(M,N)}}function K(L,N){L=f(L);var M;if(N){while((L=L.parent()).length){if(L.is(N)){M=L;break}}}else{M=L.parent()}return M}function o(S,O,Q){S&&(S=f(S));if(/\,/.test(O)){var M=[],R;O=O.split(",");f.each(O,function(V,U){U=U.trim();R=o(S,U,Q);R&&R.length&&((R.each(function(){M.push(f(this))})))});return f(M)}var P=/^([\/]+)/,N=/^([\|]+)/,L=/^([<\(]+)/;if(P.test(O)){O=O.replace(P,function(V,U){for(var X=0,W=U.length;X<W;X++){S=S.parent()}Q=S;return""});O=O.trim();return O?Q.find(O):Q}else{if(N.test(O)){O=O.replace(N,function(V,U){for(var X=1,W=U.length;X<W;X++){S=S.parent()}Q=S;return""});O=O.trim();return O?Q.find(O):Q}else{if(L.test(O)){O=O.replace(L,"").trim();if(O){if(/[\s]/.test(O)){var T;O.replace(/^([^\s]+)([\s\S]+)/,function(V,U,W){T=K(S,U).find(W.trim())});return T||O}else{return K(S,O)}}else{return S.parent()}}else{return Q?Q.find(O):jQuery(O)}}}}function h(L){var M="";L&&(L=f(L)).length&&(M=L.html().trim().replace(/[\r\n]/g,""));return M}function y(L){var O=/^function\s+([^()]+)[\s\S]*/,N="",M=L.toString();O.test(M)&&(N=M.replace(O,"$1"));return N.trim()}function I(L){L=f(L||document);if(!(L&&L.length&&window.JC)){return}JC.AutoSelect&&JC.AutoSelect(L);JC.Calendar&&JC.Calendar.initTrigger(L);JC.AutoChecked&&JC.AutoChecked(L);JC.AjaxUpload&&JC.AjaxUpload.init(L);JC.Placeholder&&JC.Placeholder.init(L);if(!window.Bizs){return}Bizs.DisableLogic&&Bizs.DisableLogic.init(L);Bizs.FormLogic&&Bizs.FormLogic.init(L);Bizs.MoneyTips&&Bizs.MoneyTips.init(L);Bizs.AutoSelectComplete&&Bizs.AutoSelectComplete.init(L)}function u(P){P=P||"";var S=P,Q,O,N,R;if(/^URL/.test(P)){Q=P.replace(/^URL/,"").replace(/[\s]*,[\s]*/g,",").trim().split(",");P=location.href;var M={},L=[];if(Q.length){for(O=0,N=Q.length;O<N;O++){/\&/.test(Q[O])?(L=L.concat(Q[O].split("&"))):(L=L.concat(Q[O]))}Q=L}for(O=0,N=Q.length;O<N;O++){R=Q[O].replace(/[\s]+/g,"").split("=");if(!R[0]){continue}M[R[0]]=R[1]||""}P=t(P,M);S=P}S=B(P);return S}function C(M){var W=null,R=/^now/i,S,V,T;if(M&&typeof M=="string"){if(R.test(M)){S=new Date();M=M.replace(R,"").replace(/[\s]+/g,"");V=M.split(",");var P=/d$/i,U=/w$/i,L=/m$/i,Q=/y$/i;for(var O=0,N=V.length;O<N;O++){T=V[O]||"";if(!T){continue}T=T.replace(/[^\-\ddwmy]+/gi,"");if(P.test(T)){T=parseInt(T.replace(P,""),10);T&&S.setDate(S.getDate()+T)}else{if(U.test(T)){T=parseInt(T.replace(U,""),10);T&&S.setDate(S.getDate()+T*7)}else{if(L.test(T)){T=parseInt(T.replace(L,""),10);T&&S.setMonth(S.getMonth()+T)}else{if(Q.test(T)){T=parseInt(T.replace(Q,""),10);T&&S.setFullYear(S.getFullYear()+T)}}}}}W=S}else{W=r(M)}}return W}(function(){if(!window.jQuery){return}var L=f.fn.val;f.fn.val=function(){var N=L.apply(this,arguments),M=this;if(arguments.length&&(this.prop("nodeName")||"").toLowerCase()=="input"&&(this.attr("type")||"").toLowerCase()=="hidden"){setTimeout(function(){M.trigger("change")},1)}return N}}());function s(S,L,N,P){var Q="0.00";!L&&(L=3);typeof N=="undefined"&&(N=2);!P&&(P=",");typeof S=="number"&&(S=G(S,N));if(typeof S=="string"){S=S.replace(/[,]/g,"");if(!/^[\d\.]+$/.test(S)){return Q}if(S.split(".").length>2){return Q}}if(!S){return Q}S+="";S=S.replace(/[^\d\.]/g,"");var M=S.split("."),R=[];while(M[0].length>L){var O=M[0].slice(M[0].length-L,M[0].length);console.log(O);R.push(O);M[0]=M[0].slice(0,M[0].length-L)}R.push(M[0]);M[0]=R.reverse().join(P);if(N){!M[1]&&(M[1]="");M[1]+=new Array(N+1).join("0");M[1]=M[1].slice(0,N)}else{M.length>1&&M.pop()}return M.join(".")}}(jQuery));return JC.f})}(typeof define==="function"&&define.amd?define:function(a,b){b&&b()},this));
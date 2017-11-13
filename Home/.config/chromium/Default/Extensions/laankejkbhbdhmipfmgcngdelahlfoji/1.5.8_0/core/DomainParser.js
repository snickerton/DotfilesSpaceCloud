define(["core/Logger"],function(t){var n={initAPI:function(t){t.mixin("Domain",{extractBaseDomain:this.extractBaseDomain.bind(this),extractFullDomain:this.extractFullDomain.bind(this),isMoreGeneralURL:this.isMoreGeneralURL.bind(this),matchesWildcard:this.matchesWildcard.bind(this)})},getCurrentURL:function(){API.Chrome.Tab.getSelected(null,function(t){if(void 0!==t)return t.url})},extractFullDomain:function(t){if(!t)return null;var n=t.match(/\/\/(.[^\/]+)/);if(null==n||n.length<2){var e=t.split("/");return e[0]}return n[1]},extractBaseDomain:function(t){var n=this.extractFullDomain(t);if(!n||0===n.length)return"";var e=n.split(".");if(1===e.length)return n;var r=e[e.length-1];return r=e[e.length-2]+"."+r,this.isMultiPartDomain(n)&&(r=e[e.length-3]+"."+r),r},isMultiPartDomain:function(t){var n=t.split("."),e=[];if(1===n.length)return!1;var r=n[n.length-2];if(1==r.length)return!0;if(2==r.length&&n.length>3)return!0;if(3==r.length&&n.length>=3){e=["com","edu","gov","mil","net","org","biz","www","pro","int","web","xxx"];for(var i in e)if(e.hasOwnProperty(i)&&r==e[i])return!0}if(4==r.length&&n.length>=3){e=["info","mobi","name","jobs","kiwi","aero","asia","coop"];for(var a in e)if(e.hasOwnProperty(a)&&r==e[a])return!0}if(n.length>=3){var l=n[n.length-3];if(2==r.length&&3===n.length&&l.length>2&&"www"!==l)return!0}return!1},isMoreGeneralURL:function(t,n){t="string"==typeof t?t.toLowerCase():t,n="string"==typeof n?n.toLowerCase():n;t=this.stripProtocol(t),n=this.stripProtocol(n);var e=this.extractBaseDomain(n);if(t===n)return!0;if(t===e)return!0;if(0===n.indexOf(t))return!0;var r=this.extractBaseDomain(t);return r===e&&t.length<=n.length&&n.indexOf(t)>=0&&(n.indexOf("/")>=0||n.indexOf("?")>=0)||e.length>r.length&&e.indexOf(t)>-1},matchesWildcard:function(t,n){var e=t.replace("*","");if(n.indexOf(e)==-1)return!1;var r=n.substring(0,n.indexOf(e)+e.length),i=n.substring(r.length-e.length,r.length),a=i===e;return a},stripProtocol:function(t){return t.indexOf("://")>-1?t.slice(t.indexOf("://")+3,t.length):t}};return n});
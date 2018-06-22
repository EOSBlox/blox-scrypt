import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `blox-scrypt`
 * A web component that exposes the scrypt password-based KDF
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BloxScrypt extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
    `;
  }
  static get properties() {
    return {
      password: {
        type: String,
        observer: "_start"
      },
      result: {
        type: String,
        notify: true,
        reflectToAttribute: true,
      },
      error: {
        type: String,
        notify: true,
        reflectToAttribute: true,
      },
      passwordLength: {
        type: Number,
        value: 8,
      },
      salt: {
        type: String,
        value: 'salt',
      },
      errorMessage: {
        type: String,
        value: 'password length',
      },
      memoryCost: {
        type: Number,
        value: 16384,
      },
      blocksize: {
        type: Number,
        value: 8,
      },
      parallelization: {
        type: Number,
        value: 1,
      },
      dkLen: {
        type: String,
        value: 16,
      },
      encoding: {
        type: String,
        value: 'hex',
      },
      scryptFunction: {
        type: Object,
      },
    };
  }

  _start(){
    if(this.password && this.password.length >= this.passwordLength){
      this.scrypt(this.password)
    } else {
      this.error = this.errorMessage;
    }
  }

  scrypt(password){
    return new Promise((resolve, reject) => {
      this.scryptFunction(password, this.salt, {
        N: this.memoryCost,
        r: this.blocksize,
        p: this.parallelization,
        dkLen: this.dkLen,
        encoding: this.encoding
      }, (derivedKey) => {
        this.result = derivedKey;
          resolve(derivedKey);
      })
    })
  }

  constructor() {
    super();
    var webpack=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n.n(r);n.d(t,"scrypt",function(){return o.a})},function(e,t,n){(function(t){e.exports=function(e,n,r,o,i,u,a,c){"use strict";function s(e){var t=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],n=1779033703,r=3144134277,o=1013904242,i=2773480762,u=1359893119,a=2600822924,c=528734635,s=1541459225,f=new Array(64);function l(e){for(var l=0,p=e.length;p>=64;){var h,d,m,v,g,y=n,w=r,T=o,b=i,I=u,E=a,_=c,A=s;for(d=0;d<16;d++)m=l+4*d,f[d]=(255&e[m])<<24|(255&e[m+1])<<16|(255&e[m+2])<<8|255&e[m+3];for(d=16;d<64;d++)v=((h=f[d-2])>>>17|h<<15)^(h>>>19|h<<13)^h>>>10,g=((h=f[d-15])>>>7|h<<25)^(h>>>18|h<<14)^h>>>3,f[d]=(v+f[d-7]|0)+(g+f[d-16]|0)|0;for(d=0;d<64;d++)v=(((I>>>6|I<<26)^(I>>>11|I<<21)^(I>>>25|I<<7))+(I&E^~I&_)|0)+(A+(t[d]+f[d]|0)|0)|0,g=((y>>>2|y<<30)^(y>>>13|y<<19)^(y>>>22|y<<10))+(y&w^y&T^w&T)|0,A=_,_=E,E=I,I=b+v|0,b=T,T=w,w=y,y=v+g|0;n=n+y|0,r=r+w|0,o=o+T|0,i=i+b|0,u=u+I|0,a=a+E|0,c=c+_|0,s=s+A|0,l+=64,p-=64}}l(e);var p,h=e.length%64,d=e.length/536870912|0,m=e.length<<3,v=h<56?56:120,g=e.slice(e.length-h,e.length);for(g.push(128),p=h+1;p<v;p++)g.push(0);return g.push(d>>>24&255),g.push(d>>>16&255),g.push(d>>>8&255),g.push(d>>>0&255),g.push(m>>>24&255),g.push(m>>>16&255),g.push(m>>>8&255),g.push(m>>>0&255),l(g),[n>>>24&255,n>>>16&255,n>>>8&255,n>>>0&255,r>>>24&255,r>>>16&255,r>>>8&255,r>>>0&255,o>>>24&255,o>>>16&255,o>>>8&255,o>>>0&255,i>>>24&255,i>>>16&255,i>>>8&255,i>>>0&255,u>>>24&255,u>>>16&255,u>>>8&255,u>>>0&255,a>>>24&255,a>>>16&255,a>>>8&255,a>>>0&255,c>>>24&255,c>>>16&255,c>>>8&255,c>>>0&255,s>>>24&255,s>>>16&255,s>>>8&255,s>>>0&255]}function f(e,t,n){e=e.length<=64?e:s(e);var r,o=64+t.length+4,i=new Array(o),u=new Array(64),a=[];for(r=0;r<64;r++)i[r]=54;for(r=0;r<e.length;r++)i[r]^=e[r];for(r=0;r<t.length;r++)i[64+r]=t[r];for(r=o-4;r<o;r++)i[r]=0;for(r=0;r<64;r++)u[r]=92;for(r=0;r<e.length;r++)u[r]^=e[r];function c(){for(var e=o-1;e>=o-4;e--){if(i[e]++,i[e]<=255)return;i[e]=0}}for(;n>=32;)c(),a=a.concat(s(u.concat(s(i)))),n-=32;return n>0&&(c(),a=a.concat(s(u.concat(s(i))).slice(0,n))),a}function l(e,t,n,r){var o,i,u=e[0]^t[n++],a=e[1]^t[n++],c=e[2]^t[n++],s=e[3]^t[n++],f=e[4]^t[n++],l=e[5]^t[n++],p=e[6]^t[n++],h=e[7]^t[n++],d=e[8]^t[n++],m=e[9]^t[n++],v=e[10]^t[n++],g=e[11]^t[n++],y=e[12]^t[n++],w=e[13]^t[n++],T=e[14]^t[n++],b=e[15]^t[n++],I=u,E=a,_=c,A=s,x=f,N=l,k=p,M=h,j=d,O=m,L=v,C=g,F=y,P=w,S=T,U=b;for(i=0;i<8;i+=2)I^=(o=(F^=(o=(j^=(o=(x^=(o=I+F)<<7|o>>>25)+I)<<9|o>>>23)+x)<<13|o>>>19)+j)<<18|o>>>14,N^=(o=(E^=(o=(P^=(o=(O^=(o=N+E)<<7|o>>>25)+N)<<9|o>>>23)+O)<<13|o>>>19)+P)<<18|o>>>14,L^=(o=(k^=(o=(_^=(o=(S^=(o=L+k)<<7|o>>>25)+L)<<9|o>>>23)+S)<<13|o>>>19)+_)<<18|o>>>14,U^=(o=(C^=(o=(M^=(o=(A^=(o=U+C)<<7|o>>>25)+U)<<9|o>>>23)+A)<<13|o>>>19)+M)<<18|o>>>14,I^=(o=(A^=(o=(_^=(o=(E^=(o=I+A)<<7|o>>>25)+I)<<9|o>>>23)+E)<<13|o>>>19)+_)<<18|o>>>14,N^=(o=(x^=(o=(M^=(o=(k^=(o=N+x)<<7|o>>>25)+N)<<9|o>>>23)+k)<<13|o>>>19)+M)<<18|o>>>14,L^=(o=(O^=(o=(j^=(o=(C^=(o=L+O)<<7|o>>>25)+L)<<9|o>>>23)+C)<<13|o>>>19)+j)<<18|o>>>14,U^=(o=(S^=(o=(P^=(o=(F^=(o=U+S)<<7|o>>>25)+U)<<9|o>>>23)+F)<<13|o>>>19)+P)<<18|o>>>14;t[r++]=e[0]=I+u|0,t[r++]=e[1]=E+a|0,t[r++]=e[2]=_+c|0,t[r++]=e[3]=A+s|0,t[r++]=e[4]=x+f|0,t[r++]=e[5]=N+l|0,t[r++]=e[6]=k+p|0,t[r++]=e[7]=M+h|0,t[r++]=e[8]=j+d|0,t[r++]=e[9]=O+m|0,t[r++]=e[10]=L+v|0,t[r++]=e[11]=C+g|0,t[r++]=e[12]=F+y|0,t[r++]=e[13]=P+w|0,t[r++]=e[14]=S+T|0,t[r++]=e[15]=U+b|0}function p(e,t,n,r,o){for(;o--;)e[t++]=n[r++]}function h(e,t,n,r,o){for(;o--;)e[t++]^=n[r++]}function d(e,t,n,r,o){p(e,0,t,n+16*(2*o-1),16);for(var i=0;i<2*o;i+=2)l(e,t,n+16*i,r+8*i),l(e,t,n+16*i+16,r+8*i+16*o)}function m(e,t,n){return e[t+16*(2*n-1)]}function v(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128)t.push(r);else if(r<2048)t.push(192|r>>6),t.push(128|63&r);else if(r<55296)t.push(224|r>>12),t.push(128|r>>6&63),t.push(128|63&r);else{if(n>=e.length-1)throw new Error("invalid string");n++,r=(1023&r)<<10,r|=1023&e.charCodeAt(n),r+=65536,t.push(240|r>>18),t.push(128|r>>12&63),t.push(128|r>>6&63),t.push(128|63&r)}}return t}var g=1;if("object"==typeof r){if(arguments.length>4)throw new Error("scrypt: incorrect number of arguments");var y=r;if(a=o,void 0===(r=y.logN)){if(void 0===y.N)throw new Error("scrypt: missing N parameter");if(y.N<2||y.N>-1>>>0)throw new Error("scrypt: N is out of range");if(0!=(y.N&y.N-1))throw new Error("scrypt: N is not a power of 2");r=Math.log(y.N)/Math.LN2}g=y.p||1,o=y.r,i=y.dkLen||32,u=y.interruptStep||0,c=y.encoding}if(g<1)throw new Error("scrypt: invalid p");if(o<=0)throw new Error("scrypt: invalid r");if(r<1||r>31)throw new Error("scrypt: logN must be between 1 and 31");var w,T,b,I,E=1<<r>>>0;if(o*g>=1<<30||o>(-1>>>0)/128/g||o>(-1>>>0)/256||E>(-1>>>0)/128/o)throw new Error("scrypt: parameters are too large");"string"==typeof e&&(e=v(e)),"string"==typeof n&&(n=v(n)),"undefined"!=typeof Int32Array?(w=new Int32Array(64*o),T=new Int32Array(32*E*o),I=new Int32Array(16)):(w=[],T=[],I=new Array(16)),b=f(e,n,128*g*o);var _=0,A=32*o;function x(e){for(var t=0;t<32*o;t++){var n=e+4*t;w[_+t]=(255&b[n+3])<<24|(255&b[n+2])<<16|(255&b[n+1])<<8|(255&b[n+0])<<0}}function N(e,t){for(var n=e;n<t;n+=2)p(T,n*(32*o),w,_,32*o),d(I,w,_,A,o),p(T,(n+1)*(32*o),w,A,32*o),d(I,w,A,_,o)}function k(e,t){for(var n=e;n<t;n+=2){var r=m(w,_,o)&E-1;h(w,_,T,r*(32*o),32*o),d(I,w,_,A,o),r=m(w,A,o)&E-1,h(w,A,T,r*(32*o),32*o),d(I,w,A,_,o)}}function M(e){for(var t=0;t<32*o;t++){var n=w[_+t];b[e+4*t+0]=n>>>0&255,b[e+4*t+1]=n>>>8&255,b[e+4*t+2]=n>>>16&255,b[e+4*t+3]=n>>>24&255}}var j=void 0!==t?t:setTimeout;function O(e,t,n,r,o){!function i(){j(function(){r(e,e+n<t?e+n:t),(e+=n)<t?i():o()})}()}function L(t){var n=f(e,b,i);return"base64"===t?function(e){for(var t,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),r=e.length,o=[],i=0;i<r;)t=((i<r?e[i++]:0)<<16)+((i<r?e[i++]:0)<<8)+(i<r?e[i++]:0),o.push(n[t>>>18&63]),o.push(n[t>>>12&63]),o.push(n[t>>>6&63]),o.push(n[t>>>0&63]);return r%3>0&&(o[o.length-1]="=",r%3==1&&(o[o.length-2]="=")),o.join("")}(n):"hex"===t?function(e){for(var t="0123456789abcdef".split(""),n=e.length,r=[],o=0;o<n;o++)r.push(t[e[o]>>>4&15]),r.push(t[e[o]>>>0&15]);return r.join("")}(n):"binary"===t?new Uint8Array(n):n}"function"==typeof u&&(c=a,a=u,u=1e3),u<=0?function(){for(var e=0;e<g;e++)x(128*e*o),N(0,E),k(0,E),M(128*e*o);a(L(c))}():function e(t){x(128*t*o),O(0,E,2*u,N,function(){O(0,E,2*u,k,function(){M(128*t*o),t+1<g?j(function(){e(t+1)}):a(L(c))})})}(0)}}).call(t,n(3).setImmediate)},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(4),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(t,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,u,a,c=1,s={},f=!1,l=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){d(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){d(e.data)},r=function(e){i.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(o=l.documentElement,r=function(e){var t=l.createElement("script");t.onreadystatechange=function(){d(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(d,0,e)}:(u="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(u)&&d(+t.data.slice(u.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),r=function(t){e.postMessage(u+t,"*")}),p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return s[c]=o,r(c),c++},p.clearImmediate=h}function h(e){delete s[e]}function d(e){if(f)setTimeout(d,0,e);else{var t=s[e];if(t){f=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{h(e),f=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(0),n(5))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var c,s=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&h())}function h(){if(!f){var e=a(p);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new d(e,t)),1!==s.length||f||a(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]);
    this.scryptFunction = webpack.scrypt
  }

} window.customElements.define('blox-scrypt', BloxScrypt);

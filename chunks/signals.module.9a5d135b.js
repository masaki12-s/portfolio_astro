import{l as _,i as ni,d as oi}from"./client.921f9e4b.js";var j,h,k,P,A=0,I=[],m=[],T=_.__b,G=_.__r,J=_.diffed,z=_.__c,B=_.unmount;function K(t,i){_.__h&&_.__h(h,t,A||i),A=0;var n=h.__H||(h.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:m}),n.__[t]}function ri(t,i){var n=K(j++,3);!_.__s&&M(n.__H,i)&&(n.__=t,n.i=i,h.__H.__h.push(n))}function L(t){return A=5,w(function(){return{current:t}},[])}function w(t,i){var n=K(j++,7);return M(n.__H,i)?(n.__V=t(),n.i=i,n.__h=t,n.__V):n.__}function fi(){for(var t;t=I.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(S),t.__H.__h.forEach(O),t.__H.__h=[]}catch(i){t.__H.__h=[],_.__e(i,t.__v)}}_.__b=function(t){h=null,T&&T(t)},_.__r=function(t){G&&G(t),j=0;var i=(h=t.__c).__H;i&&(k===h?(i.__h=[],h.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=m,n.__N=n.i=void 0})):(i.__h.forEach(S),i.__h.forEach(O),i.__h=[])),k=h},_.diffed=function(t){J&&J(t);var i=t.__c;i&&i.__H&&(i.__H.__h.length&&(I.push(i)!==1&&P===_.requestAnimationFrame||((P=_.requestAnimationFrame)||function(n){var o,r=function(){clearTimeout(f),D&&cancelAnimationFrame(o),setTimeout(n)},f=setTimeout(r,100);D&&(o=requestAnimationFrame(r))})(fi)),i.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==m&&(n.__=n.__V),n.i=void 0,n.__V=m})),k=h=null},_.__c=function(t,i){i.some(function(n){try{n.__h.forEach(S),n.__h=n.__h.filter(function(o){return!o.__||O(o)})}catch(o){i.some(function(r){r.__h&&(r.__h=[])}),i=[],_.__e(o,n.__v)}}),z&&z(t,i)},_.unmount=function(t){B&&B(t);var i,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{S(o)}catch(r){i=r}}),i&&_.__e(i,n.__v))};var D=typeof requestAnimationFrame=="function";function S(t){var i=h,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),h=i}function O(t){var i=h;t.__c=t.__(),h=i}function M(t,i){return!t||t.length!==i.length||i.some(function(n,o){return n!==t[o]})}function H(){throw new Error("Cycle detected")}var ei=Symbol.for("preact-signals");function x(){if(v>1)v--;else{for(var t,i=!1;p!==void 0;){var n=p;for(p=void 0,F++;n!==void 0;){var o=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&W(n))try{n.c()}catch(r){i||(t=r,i=!0)}n=o}}if(F=0,v--,i)throw t}}function vi(t){if(v>0)return t();v++;try{return t()}finally{x()}}var e=void 0,N=0;function ci(t){if(N>0)return t();var i=e;e=void 0,N++;try{return t()}finally{N--,e=i}}var p=void 0,v=0,F=0,b=0;function Q(t){if(e!==void 0){var i=t.n;if(i===void 0||i.t!==e)return i={i:0,S:t,p:e.s,n:void 0,t:e,e:void 0,x:void 0,r:i},e.s!==void 0&&(e.s.n=i),e.s=i,t.n=i,32&e.f&&t.S(i),i;if(i.i===-1)return i.i=0,i.n!==void 0&&(i.n.p=i.p,i.p!==void 0&&(i.p.n=i.n),i.p=e.s,i.n=void 0,e.s.n=i,e.s=i),i}}function s(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}s.prototype.brand=ei;s.prototype.h=function(){return!0};s.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};s.prototype.U=function(t){if(this.t!==void 0){var i=t.e,n=t.x;i!==void 0&&(i.x=n,t.e=void 0),n!==void 0&&(n.e=i,t.x=void 0),t===this.t&&(this.t=n)}};s.prototype.subscribe=function(t){var i=this;return E(function(){var n=i.value,o=32&this.f;this.f&=-33;try{t(n)}finally{this.f|=o}})};s.prototype.valueOf=function(){return this.value};s.prototype.toString=function(){return this.value+""};s.prototype.toJSON=function(){return this.value};s.prototype.peek=function(){return this.v};Object.defineProperty(s.prototype,"value",{get:function(){var t=Q(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(e instanceof c&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){F>100&&H(),this.v=t,this.i++,b++,v++;try{for(var i=this.t;i!==void 0;i=i.x)i.t.N()}finally{x()}}}});function R(t){return new s(t)}function W(t){for(var i=t.s;i!==void 0;i=i.n)if(i.S.i!==i.i||!i.S.h()||i.S.i!==i.i)return!0;return!1}function X(t){for(var i=t.s;i!==void 0;i=i.n){var n=i.S.n;if(n!==void 0&&(i.r=n),i.S.n=i,i.i=-1,i.n===void 0){t.s=i;break}}}function Y(t){for(var i=t.s,n=void 0;i!==void 0;){var o=i.p;i.i===-1?(i.S.U(i),o!==void 0&&(o.n=i.n),i.n!==void 0&&(i.n.p=o)):n=i,i.S.n=i.r,i.r!==void 0&&(i.r=void 0),i=o}t.s=n}function c(t){s.call(this,void 0),this.x=t,this.s=void 0,this.g=b-1,this.f=4}(c.prototype=new s).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===b))return!0;if(this.g=b,this.f|=1,this.i>0&&!W(this))return this.f&=-2,!0;var t=e;try{X(this),e=this;var i=this.x();(16&this.f||this.v!==i||this.i===0)&&(this.v=i,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return e=t,Y(this),this.f&=-2,!0};c.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var i=this.s;i!==void 0;i=i.n)i.S.S(i)}s.prototype.S.call(this,t)};c.prototype.U=function(t){if(this.t!==void 0&&(s.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var i=this.s;i!==void 0;i=i.n)i.S.U(i)}};c.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};c.prototype.peek=function(){if(this.h()||H(),16&this.f)throw this.v;return this.v};Object.defineProperty(c.prototype,"value",{get:function(){1&this.f&&H();var t=Q(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function Z(t){return new c(t)}function ii(t){var i=t.u;if(t.u=void 0,typeof i=="function"){v++;var n=e;e=void 0;try{i()}catch(o){throw t.f&=-2,t.f|=8,q(t),o}finally{e=n,x()}}}function q(t){for(var i=t.s;i!==void 0;i=i.n)i.S.U(i);t.x=void 0,t.s=void 0,ii(t)}function ui(t){if(e!==this)throw new Error("Out-of-order effect");Y(this),e=t,this.f&=-2,8&this.f&&q(this),x()}function l(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}l.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var i=this.x();typeof i=="function"&&(this.u=i)}finally{t()}};l.prototype.S=function(){1&this.f&&H(),this.f|=1,this.f&=-9,ii(this),X(this),v++;var t=e;return e=this,ui.bind(this,t)};l.prototype.N=function(){2&this.f||(this.f|=2,this.o=p,p=this)};l.prototype.d=function(){this.f|=8,1&this.f||q(this)};function E(t){var i=new l(t);try{i.c()}catch(n){throw i.d(),n}return i.d.bind(i)}var U,V;function d(t,i){_[t]=i.bind(null,_[t]||function(){})}function g(t){V&&V(),V=t&&t.S()}function ti(t){var i=this,n=t.data,o=si(n);o.value=n;var r=w(function(){for(var f=i.__v;f=f.__;)if(f.__c){f.__c.__$f|=4;break}return i.__$u.c=function(){var u;!ni(r.peek())&&((u=i.base)==null?void 0:u.nodeType)===3?i.base.data=r.peek():(i.__$f|=1,i.setState({}))},Z(function(){var u=o.value.value;return u===0?0:u===!0?"":u||""})},[]);return r.value}ti.displayName="_st";Object.defineProperties(s.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:ti},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});d("__b",function(t,i){if(typeof i.type=="string"){var n,o=i.props;for(var r in o)if(r!=="children"){var f=o[r];f instanceof s&&(n||(i.__np=n={}),n[r]=f,o[r]=f.peek())}}t(i)});d("__r",function(t,i){g();var n,o=i.__c;o&&(o.__$f&=-2,(n=o.__$u)===void 0&&(o.__$u=n=function(r){var f;return E(function(){f=this}),f.c=function(){o.__$f|=1,o.setState({})},f}())),U=o,g(n),t(i)});d("__e",function(t,i,n,o){g(),U=void 0,t(i,n,o)});d("diffed",function(t,i){g(),U=void 0;var n;if(typeof i.type=="string"&&(n=i.__e)){var o=i.__np,r=i.props;if(o){var f=n.U;if(f)for(var u in f){var a=f[u];a!==void 0&&!(u in o)&&(a.d(),f[u]=void 0)}else n.U=f={};for(var y in o){var $=f[y],C=o[y];$===void 0?($=_i(n,y,C,r),f[y]=$):$.o(C,r)}}}t(i)});function _i(t,i,n,o){var r=i in t&&t.ownerSVGElement===void 0,f=R(n);return{o:function(u,a){f.value=u,o=a},d:E(function(){var u=f.value.value;o[i]!==u&&(o[i]=u,r?t[i]=u:u?t.setAttribute(i,u):t.removeAttribute(i))})}}d("unmount",function(t,i){if(typeof i.type=="string"){var n=i.__e;if(n){var o=n.U;if(o){n.U=void 0;for(var r in o){var f=o[r];f&&f.d()}}}}else{var u=i.__c;if(u){var a=u.__$u;a&&(u.__$u=void 0,a.d())}}t(i)});d("__h",function(t,i,n,o){(o<3||o===9)&&(i.__$f|=2),t(i,n,o)});oi.prototype.shouldComponentUpdate=function(t,i){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var o in i)return!0;for(var r in t)if(r!=="__source"&&t[r]!==this.props[r])return!0;for(var f in this.props)if(!(f in t))return!0;return!1};function si(t){return w(function(){return R(t)},[])}function ai(t){var i=L(t);return i.current=t,U.__$f|=4,w(function(){return Z(function(){return i.current()})},[])}function di(t){var i=L(t);i.current=t,ri(function(){return E(function(){return i.current()})},[])}export{s as Signal,vi as batch,Z as computed,E as effect,R as signal,ci as untracked,ai as useComputed,si as useSignal,di as useSignalEffect};
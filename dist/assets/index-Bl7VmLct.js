(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sa="187",Ul=0,Ua=1,Fl=2,vs=1,No=2,Ni=3,Qn=0,Ht=1,bn=2,gi=0,Fi=1,mr=2,Fa=3,Oa=4,Ol=5,mi=100,Bl=101,Gl=102,kl=103,zl=104,Hl=200,Vl=201,Wl=202,Xl=203,Uo=204,Fo=205,ql=206,Yl=207,Kl=208,Zl=209,$l=210,Jl=211,Ql=212,jl=213,ec=214,gr=0,_r=1,xr=2,Gi=3,vr=4,Sr=5,Mr=6,Er=7,Oo=0,tc=1,nc=2,Rn=0,Bo=1,Go=2,ko=3,ra=4,zo=5,Ho=6,Vo=7,Wo=300,vi=301,ki=302,ks=303,zs=304,Gt=1e3,Tn=1001,yr=1002,Rt=1003,ic=1004,Yi=1005,zt=1006,Hs=1007,kn=1008,qt=1009,Xo=1010,qo=1011,zi=1012,aa=1013,mn=1014,hn=1015,gn=1016,oa=1017,la=1018,Si=1020,Yo=35902,Ko=35899,Zo=1021,$o=1022,dn=1023,Hn=1026,zn=1027,Jo=1028,ca=1029,jn=1030,ha=1031,da=1033,Ss=33776,Ms=33777,Es=33778,ys=33779,br=35840,Tr=35841,Ar=35842,wr=35843,Rr=36196,Cr=37492,Pr=37496,Lr=37488,Ir=37489,As=37490,Dr=37491,Nr=37808,Ur=37809,Fr=37810,Or=37811,Br=37812,Gr=37813,kr=37814,zr=37815,Hr=37816,Vr=37817,Wr=37818,Xr=37819,qr=37820,Yr=37821,Kr=36492,Zr=36494,$r=36495,Jr=36283,Qr=36284,ws=36285,jr=36286,sc=3200,ea=0,rc=1,Gn="",Zt="srgb",Rs="srgb-linear",Cs="linear",et="srgb",Vs=7680,ac=519,oc=512,lc=513,cc=514,Qo=515,hc=516,dc=517,jo=518,el=519,uc=35044,Ws=35048,Ba="300 es",an=2e3,Hi=2001;function fc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pc(){const i=Ps("canvas");return i.style.display="block",i}const Ga={};function ka(...i){const e="THREE."+i.shift();console.log(e,...i)}function tl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=tl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=tl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _i(...i){const e=i.join(" ");e in Ga||(Ga[e]=!0,Ie(...i))}function mc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const gc={[gr]:gr,[xr]:Mr,[vr]:vr,[Gi]:Sr,[_r]:_r,[Mr]:xr,[Er]:Er,[Sr]:Gi};class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let za=1234567;const Oi=Math.PI/180,Mi=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function ua(i,e){return(i%e+e)%e}function _c(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function xc(i,e,t){return i!==e?(t-i)/(e-i):0}function Bi(i,e,t){return(1-t)*i+t*e}function vc(i,e,t,n){return Bi(i,e,1-Math.exp(-t*n))}function Sc(i,e=1){return e-Math.abs(ua(i,e*2)-e)}function Mc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ec(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function yc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bc(i,e){return i+Math.random()*(e-i)}function Tc(i){return i*(.5-Math.random())}function Ac(i){i!==void 0&&(za=i);let e=za+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wc(i){return i*Oi}function Rc(i){return i*Mi}function Cc(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Pc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lc(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*u,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fa(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function il(i,e){if(e.constructor===Float32Array)return i;const t=fa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function sl(i,e){if(e.constructor===Float32Array)return i;const t=fa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const An={DEG2RAD:Oi,RAD2DEG:Mi,generateUUID:bi,clamp:ke,euclideanModulo:ua,mapLinear:_c,inverseLerp:xc,lerp:Bi,damp:vc,pingpong:Sc,smoothstep:Mc,smootherstep:Ec,randInt:yc,randFloat:bc,randFloatSpread:Tc,seededRandom:Ac,degToRad:wc,radToDeg:Rc,isPowerOfTwo:Cc,ceilPowerOfTwo:Pc,floorPowerOfTwo:nl,setQuaternionFromProperEuler:Lc,normalize:sl,denormalize:il},Sa=class Sa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sa.prototype.isVector2=!0;let Ve=Sa;class Ti{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],p=r[a+1],_=r[a+2],S=r[a+3];if(h!==S||l!==d||c!==p||u!==_){let m=l*d+c*p+u*_+h*S;m<0&&(d=-d,p=-p,_=-_,S=-S,m=-m);let f=1-o;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);f=Math.sin(f*M)/w,o=Math.sin(o*M)/w,l=l*f+d*o,c=c*f+p*o,u=u*f+_*o,h=h*f+S*o}else{l=l*f+d*o,c=c*f+p*o,u=u*f+_*o,h=h*f+S*o;const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*p-c*d,e[t+1]=l*_+u*d+c*h-o*p,e[t+2]=c*_+u*p+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ma=class Ma{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ha.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xs.copy(this).projectOnVector(e),this.sub(Xs)}reflect(e){return this.sub(Xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ma.prototype.isVector3=!0;let U=Ma;const Xs=new U,Ha=new Ti,Ea=class Ea{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],_=n[8],S=s[0],m=s[3],f=s[6],M=s[1],w=s[4],y=s[7],A=s[2],T=s[5],g=s[8];return r[0]=a*S+o*M+l*A,r[3]=a*m+o*w+l*T,r[6]=a*f+o*y+l*g,r[1]=c*S+u*M+h*A,r[4]=c*m+u*w+h*T,r[7]=c*f+u*y+h*g,r[2]=d*S+p*M+_*A,r[5]=d*m+p*w+_*T,r[8]=d*f+p*y+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,_=t*h+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=h*S,e[1]=(s*c-u*n)*S,e[2]=(o*n-s*a)*S,e[3]=d*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return _i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qs.makeScale(e,t)),this}rotate(e){return _i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qs.makeRotation(-e)),this}translate(e,t){return _i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ea.prototype.isMatrix3=!0;let Ne=Ea;const qs=new Ne,Va=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wa=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ic(){const i={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?Cs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rs]:{primaries:e,whitePoint:n,transfer:Cs,toXYZ:Va,fromXYZ:Wa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Va,fromXYZ:Wa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),i}const We=Ic();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ii;class Dc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ii===void 0&&(ii=Ps("canvas")),ii.width=e.width,ii.height=e.height;const s=ii.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ii}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nc=0;class pa{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ys(s[a].image)):r.push(Ys(s[a]))}else r=Ys(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ys(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Uc=0;const Ks=new U;class Nt extends ti{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Tn,s=Tn,r=zt,a=kn,o=dn,l=qt,c=Nt.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=bi(),this.name="",this.source=new pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ks).x}get height(){return this.source.getSize(Ks).y}get depth(){return this.source.getSize(Ks).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gt:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gt:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Wo;Nt.DEFAULT_ANISOTROPY=1;const ya=class ya{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],S=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(p+1)/2,A=(f+1)/2,T=(u+d)/4,g=(h+S)/4,E=(_+m)/4;return w>y&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=g/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=E/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=g/r,s=E/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-_)*(m-_)+(h-S)*(h-S)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-S)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ya.prototype.isVector4=!0;let ht=ya;class Fc extends ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Nt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new pa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends Fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rl extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oc extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Is=class Is{constructor(e,t,n,s,r,a,o,l,c,u,h,d,p,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,p,_,S,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,p,_,S,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Is().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/si.setFromMatrixColumn(e,0).length(),r=1/si.setFromMatrixColumn(e,1).length(),a=1/si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,_=o*u,S=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=d-S*c,t[9]=-o*l,t[2]=S-d*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,S=c*h;t[0]=d+S*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=S+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,S=c*h;t[0]=d-S*o,t[4]=-a*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=S-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,_=o*u,S=o*h;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+S,t[1]=l*h,t[5]=S*c+d,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=S-d*h,t[8]=_*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+_,t[10]=d-S*h}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+S,t[5]=a*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*u,t[10]=S*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bc,e,Gc)}lookAt(e,t,n){const s=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),In.crossVectors(n,Vt),In.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),In.crossVectors(n,Vt)),In.normalize(),Ki.crossVectors(Vt,In),s[0]=In.x,s[4]=Ki.x,s[8]=Vt.x,s[1]=In.y,s[5]=Ki.y,s[9]=Vt.y,s[2]=In.z,s[6]=Ki.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],_=n[2],S=n[6],m=n[10],f=n[14],M=n[3],w=n[7],y=n[11],A=n[15],T=s[0],g=s[4],E=s[8],I=s[12],C=s[1],N=s[5],F=s[9],V=s[13],L=s[2],z=s[6],K=s[10],k=s[14],ee=s[3],W=s[7],Q=s[11],j=s[15];return r[0]=a*T+o*C+l*L+c*ee,r[4]=a*g+o*N+l*z+c*W,r[8]=a*E+o*F+l*K+c*Q,r[12]=a*I+o*V+l*k+c*j,r[1]=u*T+h*C+d*L+p*ee,r[5]=u*g+h*N+d*z+p*W,r[9]=u*E+h*F+d*K+p*Q,r[13]=u*I+h*V+d*k+p*j,r[2]=_*T+S*C+m*L+f*ee,r[6]=_*g+S*N+m*z+f*W,r[10]=_*E+S*F+m*K+f*Q,r[14]=_*I+S*V+m*k+f*j,r[3]=M*T+w*C+y*L+A*ee,r[7]=M*g+w*N+y*z+A*W,r[11]=M*E+w*F+y*K+A*Q,r[15]=M*I+w*V+y*k+A*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],S=e[7],m=e[11],f=e[15],M=l*p-c*d,w=o*p-c*h,y=o*d-l*h,A=a*p-c*u,T=a*d-l*u,g=a*h-o*u;return t*(S*M-m*w+f*y)-n*(_*M-m*A+f*T)+s*(_*w-S*A+f*g)-r*(_*y-S*T+m*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],S=e[13],m=e[14],f=e[15],M=t*o-n*a,w=t*l-s*a,y=t*c-r*a,A=n*l-s*o,T=n*c-r*o,g=s*c-r*l,E=u*S-h*_,I=u*m-d*_,C=u*f-p*_,N=h*m-d*S,F=h*f-p*S,V=d*f-p*m,L=M*V-w*F+y*N+A*C-T*I+g*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return e[0]=(o*V-l*F+c*N)*z,e[1]=(s*F-n*V-r*N)*z,e[2]=(S*g-m*T+f*A)*z,e[3]=(d*T-h*g-p*A)*z,e[4]=(l*C-a*V-c*I)*z,e[5]=(t*V-s*C+r*I)*z,e[6]=(m*y-_*g-f*w)*z,e[7]=(u*g-d*y+p*w)*z,e[8]=(a*F-o*C+c*E)*z,e[9]=(n*C-t*F-r*E)*z,e[10]=(_*T-S*y+f*M)*z,e[11]=(h*y-u*T-p*M)*z,e[12]=(o*I-a*N-l*E)*z,e[13]=(t*N-n*I+s*E)*z,e[14]=(S*w-_*A-m*M)*z,e[15]=(u*A-h*w+d*M)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,_=r*h,S=a*u,m=a*h,f=o*h,M=l*c,w=l*u,y=l*h,A=n.x,T=n.y,g=n.z;return s[0]=(1-(S+f))*A,s[1]=(p+y)*A,s[2]=(_-w)*A,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(d+f))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(_+w)*g,s[9]=(m-M)*g,s[10]=(1-(d+S))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=si.set(s[0],s[1],s[2]).length();const o=si.set(s[4],s[5],s[6]).length(),l=si.set(s[8],s[9],s[10]).length();r<0&&(a=-a),en.copy(this);const c=1/a,u=1/o,h=1/l;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=an,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===an)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Hi)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=an,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===an)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Hi)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Is.prototype.isMatrix4=!0;let rt=Is;const si=new U,en=new rt,Bc=new U(0,0,0),Gc=new U(1,1,1),In=new U,Ki=new U,Vt=new U,Xa=new rt,qa=new Ti;class Vn{constructor(e=0,t=0,n=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qa.setFromEuler(this),this.setFromQuaternion(qa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kc=0;const Ya=new U,ri=new Ti,xn=new rt,Zi=new U,Ci=new U,zc=new U,Hc=new Ti,Ka=new U(1,0,0),Za=new U(0,1,0),$a=new U(0,0,1),Ja={type:"added"},Vc={type:"removed"},ai={type:"childadded",child:null},Zs={type:"childremoved",child:null};class gt extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new U,t=new Vn,n=new Ti,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ne}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(Ka,e)}rotateY(e){return this.rotateOnAxis(Za,e)}rotateZ(e){return this.rotateOnAxis($a,e)}translateOnAxis(e,t){return Ya.copy(e).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ka,e)}translateY(e){return this.translateOnAxis(Za,e)}translateZ(e){return this.translateOnAxis($a,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zi.copy(e):Zi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Ci,Zi,this.up):xn.lookAt(Zi,Ci,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),ri.setFromRotationMatrix(xn),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ja),ai.child=e,this.dispatchEvent(ai),ai.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vc),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ja),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,e,zc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,Hc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}gt.DEFAULT_UP=new U(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tt extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wc={type:"move"};class $s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),f=this._getHandJoint(c,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wc)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},$i={h:0,s:0,l:0};function Js(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=ua(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Js(a,r,e+1/3),this.g=Js(a,r,e),this.b=Js(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=ol[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return We.workingToColorSpace(Dt.copy(this),e),Math.round(ke(Dt.r*255,0,255))*65536+Math.round(ke(Dt.g*255,0,255))*256+Math.round(ke(Dt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Zt){We.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,s=Dt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL($i);const n=Bi(Dn.h,$i.h,t),s=Bi(Dn.s,$i.s,t),r=Bi(Dn.l,$i.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Ce;Ce.NAMES=ol;class ma{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new ma(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xc extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const tn=new U,vn=new U,Qs=new U,Sn=new U,oi=new U,li=new U,Qa=new U,js=new U,er=new U,tr=new U,nr=new ht,ir=new ht,sr=new ht;class rn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),vn.subVectors(n,t),Qs.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(vn),l=tn.dot(Qs),c=vn.dot(vn),u=vn.dot(Qs),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(o,Sn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return nr.setScalar(0),ir.setScalar(0),sr.setScalar(0),nr.fromBufferAttribute(e,t),ir.fromBufferAttribute(e,n),sr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(nr,r.x),a.addScaledVector(ir,r.y),a.addScaledVector(sr,r.z),a}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),vn.subVectors(e,t),tn.cross(vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),tn.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;oi.subVectors(s,n),li.subVectors(r,n),js.subVectors(e,n);const l=oi.dot(js),c=li.dot(js);if(l<=0&&c<=0)return t.copy(n);er.subVectors(e,s);const u=oi.dot(er),h=li.dot(er);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(oi,a);tr.subVectors(e,r);const p=oi.dot(tr),_=li.dot(tr);if(_>=0&&p<=_)return t.copy(r);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(li,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Qa.subVectors(r,s),o=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(Qa,o);const f=1/(m+S+d);return a=S*f,o=d*f,t.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ni{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pi),Qi.subVectors(this.max,Pi),ci.subVectors(e.a,Pi),hi.subVectors(e.b,Pi),di.subVectors(e.c,Pi),Nn.subVectors(hi,ci),Un.subVectors(di,hi),Yn.subVectors(ci,di);let t=[0,-Nn.z,Nn.y,0,-Un.z,Un.y,0,-Yn.z,Yn.y,Nn.z,0,-Nn.x,Un.z,0,-Un.x,Yn.z,0,-Yn.x,-Nn.y,Nn.x,0,-Un.y,Un.x,0,-Yn.y,Yn.x,0];return!rr(t,ci,hi,di,Qi)||(t=[1,0,0,0,1,0,0,0,1],!rr(t,ci,hi,di,Qi))?!1:(ji.crossVectors(Nn,Un),t=[ji.x,ji.y,ji.z],rr(t,ci,hi,di,Qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mn=[new U,new U,new U,new U,new U,new U,new U,new U],nn=new U,Ji=new ni,ci=new U,hi=new U,di=new U,Nn=new U,Un=new U,Yn=new U,Pi=new U,Qi=new U,ji=new U,Kn=new U;function rr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Kn.fromArray(i,r);const o=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),l=e.dot(Kn),c=t.dot(Kn),u=n.dot(Kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const mt=new U,es=new Ve;let qc=0;class pn extends ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uc,this.updateRanges=[],this.gpuType=hn,this.version=0,this._normalizationScale=e!==void 0?fa(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)es.fromBufferAttribute(this,t),es.applyMatrix3(e),this.setXY(t,es.x,es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):il(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):sl(e,this.array)}}class ll extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cl extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Yc=new ni,Li=new U,ar=new U;class Ds{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Li.subVectors(e,this.center);const t=Li.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Li,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Li.copy(e.center).add(ar)),this.expandByPoint(Li.copy(e.center).sub(ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Kc=0;const Kt=new rt,or=new gt,ui=new U,Wt=new ni,Ii=new ni,yt=new U;class Qt extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fc(e)?cl:ll)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return or.lookAt(e),or.updateMatrix(),this.applyMatrix4(or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new At(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Wt.min,Ii.min),Wt.expandByPoint(yt),yt.addVectors(Wt.max,Ii.max),Wt.expandByPoint(yt)):(Wt.expandByPoint(Ii.min),Wt.expandByPoint(Ii.max))}Wt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(ui.fromBufferAttribute(e,c),yt.add(ui)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new U,l[I]=new U;const u=new U,h=new U,d=new U,p=new Ve,_=new Ve,S=new Ve,m=new U,f=new U;function M(I,C,N){c[I]=c[C]=c[N]=1,u.fromBufferAttribute(n,I),h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,N),p.fromBufferAttribute(r,I),_.fromBufferAttribute(r,C),S.fromBufferAttribute(r,N),h.sub(u),d.sub(u),_.sub(p),S.sub(p);const F=1/(_.x*S.y-S.x*_.y);isFinite(F)&&(m.copy(h).multiplyScalar(S.y).addScaledVector(d,-_.y).multiplyScalar(F),f.copy(d).multiplyScalar(_.x).addScaledVector(h,-S.x).multiplyScalar(F),o[I].add(m),o[C].add(m),o[N].add(m),l[I].add(f),l[C].add(f),l[N].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,C=w.length;I<C;++I){const N=w[I],F=N.start,V=N.count;for(let L=F,z=F+V;L<z;L+=3)M(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new U,A=new U,T=new U,g=new U;function E(I){T.fromBufferAttribute(s,I),g.copy(T);const C=o[I];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),A.crossVectors(g,C);const F=A.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,F)}for(let I=0,C=n.count;I<C;++I)c[I]&&E(I);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new pn(d,u,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lr=new U,Zc=new U,$c=new Ne;class Bn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=lr.subVectors(n,t).cross(Zc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(lr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$c.getNormalMatrix(e),s=this.coplanarPoint(lr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Jc=0;class Ai extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Fi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uo,this.blendDst=Fo,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const En=new U,cr=new U,ts=new U,ns=new U;class hl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){cr.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(cr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ts),o=ns.dot(this.direction),l=-ns.dot(ts),c=ns.lengthSq(),u=Math.abs(1-a*a);let h,d,p,_;if(u>0)if(h=a*l-o,d=a*o-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const S=1/u;h*=S,d*=S,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(cr).addScaledVector(ts,d),p}intersectSphere(e,t){if(e.radius<0)return null;En.subVectors(e.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,p=e.z-a.z,_=t.x-a.x,S=t.y-a.y,m=t.z-a.z,f=n.x-a.x,M=n.y-a.y,w=n.z-a.z,y=Math.abs(l),A=Math.abs(c),T=Math.abs(u);let g,E,I,C,N,F,V,L,z,K,k,ee;if(y>=A&&y>=T?(I=l,F=h,z=_,ee=f,l>=0?(g=c,E=u,C=d,N=p,V=S,L=m,K=M,k=w):(g=u,E=c,C=p,N=d,V=m,L=S,K=w,k=M)):A>=T?(I=c,F=d,z=S,ee=M,c>=0?(g=u,E=l,C=p,N=h,V=m,L=_,K=w,k=f):(g=l,E=u,C=h,N=p,V=_,L=m,K=f,k=w)):(I=u,F=p,z=m,ee=w,u>=0?(g=l,E=c,C=h,N=d,V=_,L=S,K=f,k=M):(g=c,E=l,C=d,N=h,V=S,L=_,K=M,k=f)),I===0)return null;const W=g/I,Q=E/I,j=1/I,ve=C-W*F,Le=N-Q*F,Y=V-W*z,de=L-Q*z,xe=K-W*ee,Te=k-Q*ee,ue=xe*de-Te*Y,Pe=ve*Te-Le*xe,at=Y*Le-de*ve;if(s){if(ue<0||Pe<0||at<0)return null}else if((ue<0||Pe<0||at<0)&&(ue>0||Pe>0||at>0))return null;const Ae=ue+Pe+at;if(Ae===0)return null;const Ye=j*(ue*F+Pe*z+at*ee);return(Ae>0?Ye<0:Ye>0)?null:this.at(Ye/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wn extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ja=new rt,Zn=new hl,is=new Ds,eo=new U,ss=new U,rs=new U,as=new U,hr=new U,os=new U,to=new U,ls=new U;class pe extends gt{constructor(e=new Qt,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(hr.fromBufferAttribute(h,e),a?os.addScaledVector(hr,u):os.addScaledVector(hr.sub(t),u))}t.add(os)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(r),Zn.copy(e.ray).recast(e.near),!(is.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(is,eo)===null||Zn.origin.distanceToSquared(eo)>(e.far-e.near)**2))&&(ja.copy(r).invert(),Zn.copy(e.ray).applyMatrix4(ja),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],f=a[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,A=w;y<A;y+=3){const T=o.getX(y),g=o.getX(y+1),E=o.getX(y+2);s=cs(this,f,e,n,c,u,h,T,g,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,f=S;m<f;m+=3){const M=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);s=cs(this,a,e,n,c,u,h,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],f=a[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,A=w;y<A;y+=3){const T=y,g=y+1,E=y+2;s=cs(this,f,e,n,c,u,h,T,g,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,f=S;m<f;m+=3){const M=m,w=m+1,y=m+2;s=cs(this,a,e,n,c,u,h,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Qc(i,e,t,n,s,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Qn,o),l===null)return null;ls.copy(o),ls.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ls);return c<t.near||c>t.far?null:{distance:c,point:ls.clone(),object:i}}function cs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ss),i.getVertexPosition(l,rs),i.getVertexPosition(c,as);const u=Qc(i,e,t,n,ss,rs,as,to);if(u){const h=new U;rn.getBarycoord(to,ss,rs,as,h),s&&(u.uv=rn.getInterpolatedAttribute(s,o,l,c,h,new Ve)),r&&(u.uv1=rn.getInterpolatedAttribute(r,o,l,c,h,new Ve)),a&&(u.normal=rn.getInterpolatedAttribute(a,o,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};rn.getNormal(ss,rs,as,d.normal),u.face=d,u.barycoord=h}return u}class jc extends Nt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Rt,u=Rt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $n=new Ds,eh=new Ve(.5,.5),hs=new U;class Vi{constructor(e=new Bn,t=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],_=r[8],S=r[9],m=r[10],f=r[11],M=r[12],w=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,p-u,f-_,A-M).normalize(),s[1].setComponents(c+a,p+u,f+_,A+M).normalize(),s[2].setComponents(c+o,p+h,f+S,A+w).normalize(),s[3].setComponents(c-o,p-h,f-S,A-w).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,p-d,f-m,A-y).normalize();else if(s[4].setComponents(c-l,p-d,f-m,A-y).normalize(),t===an)s[5].setComponents(c+l,p+d,f+m,A+y).normalize();else if(t===Hi)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){$n.center.set(0,0,0);const t=eh.distanceTo(e.center);return $n.radius=.7071067811865476+t,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(hs.x=s.normal.x>0?e.max.x:e.min.x,hs.y=s.normal.y>0?e.max.y:e.min.y,hs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const no=new rt;class ga{constructor(){this.coordinateSystem=an,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];no.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Vi),n[s].setFromProjectionMatrix(no,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Vi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new ga().copy(this)}}class dl extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const io=new rt,ta=new hl,ds=new Ds,us=new U;class th extends gt{constructor(e=new Qt,t=new dl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(s),ds.radius+=r,e.ray.intersectsSphere(ds)===!1)return;io.copy(s).invert(),ta.copy(e.ray).applyMatrix4(io);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,S=p;_<S;_++){const m=c.getX(_);us.fromBufferAttribute(h,m),so(us,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,S=p;_<S;_++)us.fromBufferAttribute(h,_),so(us,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function so(i,e,t,n,s,r,a){const o=ta.distanceSqToPoint(i);if(o<t){const l=new U;ta.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ul extends Nt{constructor(e=[],t=vi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sn extends Nt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei extends Nt{constructor(e,t,n=mn,s,r,a,o=Rt,l=Rt,c,u=Hn,h=1){if(u!==Hn&&u!==zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class fl extends Ei{constructor(e,t=mn,n=vi,s,r,a=Rt,o=Rt,l,c=Hn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class pl extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xe extends Qt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2));function _(S,m,f,M,w,y,A,T,g,E,I){const C=y/g,N=A/E,F=y/2,V=A/2,L=T/2,z=g+1,K=E+1;let k=0,ee=0;const W=new U;for(let Q=0;Q<K;Q++){const j=Q*N-V;for(let ve=0;ve<z;ve++){const Le=ve*C-F;W[S]=Le*M,W[m]=j*w,W[f]=L,c.push(W.x,W.y,W.z),W[S]=0,W[m]=0,W[f]=T>0?1:-1,u.push(W.x,W.y,W.z),h.push(ve/g),h.push(1-Q/E),k+=1}}for(let Q=0;Q<E;Q++)for(let j=0;j<g;j++){const ve=d+j+z*Q,Le=d+j+z*(Q+1),Y=d+(j+1)+z*(Q+1),de=d+(j+1)+z*Q;l.push(ve,Le,de),l.push(Le,Y,de),ee+=6}o.addGroup(p,ee,I),p+=ee,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xt extends Qt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let _=0;const S=[],m=n/2;let f=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(d,3)),this.setAttribute("uv",new At(p,2));function M(){const y=new U,A=new U;let T=0;const g=(t-e)/n;for(let E=0;E<=r;E++){const I=[],C=E/r,N=C*(t-e)+e;for(let F=0;F<=s;F++){const V=F/s,L=V*l+o,z=Math.sin(L),K=Math.cos(L);A.x=N*z,A.y=-C*n+m,A.z=N*K,h.push(A.x,A.y,A.z),y.set(z,g,K).normalize(),d.push(y.x,y.y,y.z),p.push(V,1-C),I.push(_++)}S.push(I)}for(let E=0;E<s;E++)for(let I=0;I<r;I++){const C=S[I][E],N=S[I+1][E],F=S[I+1][E+1],V=S[I][E+1];(e>0||I!==0)&&(u.push(C,N,V),T+=3),(t>0||I!==r-1)&&(u.push(N,F,V),T+=3)}c.addGroup(f,T,0),f+=T}function w(y){const A=_,T=new Ve,g=new U;let E=0;const I=y===!0?e:t,C=y===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*C,0),d.push(0,C,0),p.push(.5,.5),_++;const N=_;for(let F=0;F<=s;F++){const L=F/s*l+o,z=Math.cos(L),K=Math.sin(L);g.x=I*K,g.y=m*C,g.z=I*z,h.push(g.x,g.y,g.z),d.push(0,C,0),T.x=z*.5+.5,T.y=K*.5*C+.5,p.push(T.x,T.y),_++}for(let F=0;F<s;F++){const V=A+F,L=N+F;y===!0?u.push(L,L+1,V):u.push(L+1,L,V),E+=3}c.addGroup(f,E,y===!0?1:2),f+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _a extends Xt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new _a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kt extends Qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,p=[],_=[],S=[],m=[];for(let f=0;f<u;f++){const M=f*d-a;for(let w=0;w<c;w++){const y=w*h-r;_.push(y,-M,0),S.push(0,0,1),m.push(w/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const w=M+c*f,y=M+c*(f+1),A=M+1+c*(f+1),T=M+1+c*f;p.push(w,y,T),p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(S,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.width,e.height,e.widthSegments,e.heightSegments)}}class xa extends Qt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new U,d=new U,p=[],_=[],S=[],m=[];for(let f=0;f<=n;f++){const M=[],w=f/n,y=a+w*o,A=e*Math.cos(y),T=Math.sqrt(e*e-A*A);let g=0;f===0&&a===0?g=.5/t:f===n&&l===Math.PI&&(g=-.5/t);for(let E=0;E<=t;E++){const I=E/t,C=s+I*r;h.x=-T*Math.cos(C),h.y=A,h.z=T*Math.sin(C),_.push(h.x,h.y,h.z),d.copy(h).normalize(),S.push(d.x,d.y,d.z),m.push(I+g,1-w),M.push(c++)}u.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){const w=u[f][M+1],y=u[f][M],A=u[f+1][M],T=u[f+1][M+1];(f!==0||a>0)&&p.push(w,y,T),(f!==n-1||l<Math.PI)&&p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(S,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ns extends Qt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],h=[],d=new U,p=new U,_=new U;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let f=0;f<=s;f++){const M=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(M),p.y=(e+t*Math.cos(m))*Math.sin(M),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),_.subVectors(p,d).normalize(),u.push(_.x,_.y,_.z),h.push(f/s),h.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){const f=(s+1)*S+m-1,M=(s+1)*(S-1)+m-1,w=(s+1)*(S-1)+m,y=(s+1)*S+m;l.push(f,M,y),l.push(M,w,y)}this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function yi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(ro(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ro(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=yi(i[t]);for(const s in n)e[s]=n[s]}return e}function ro(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function nh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ml(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const ih={clone:yi,merge:Bt};var sh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sh,this.fragmentShader=rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=nh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ah extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dt extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oh extends dt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return _i('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){_i('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class lh extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ch extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Us extends gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class hh extends Us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const dr=new rt,ao=new U,oo=new U;class gl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vi,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ao.setFromMatrixPosition(e.matrixWorld),t.position.copy(ao),oo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){dr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(dr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Hi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(dr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fs=new U,ps=new Ti,on=new U;class _l extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fs,ps,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fs,ps,on.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fs,ps,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fs,ps,on.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new U,lo=new Ve,co=new Ve;class $t extends _l{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mi*2*Math.atan(Math.tan(Oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,lo,co),t.subVectors(co,lo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class dh extends gl{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Mi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class uh extends Us{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new dh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class xl extends _l{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fh extends gl{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ph extends Us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new fh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class mh extends Us{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const fi=-90,pi=1;class na extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $t(fi,pi,e,t);s.layers=this.layers,this.add(s);const r=new $t(fi,pi,e,t);r.layers=this.layers,this.add(r);const a=new $t(fi,pi,e,t);a.layers=this.layers,this.add(a);const o=new $t(fi,pi,e,t);o.layers=this.layers,this.add(o);const l=new $t(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new $t(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class gh extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function ho(i,e,t,n){const s=_h(n);switch(t){case Zo:return i*e;case Jo:return i*e/s.components*s.byteLength;case ca:return i*e/s.components*s.byteLength;case jn:return i*e*2/s.components*s.byteLength;case ha:return i*e*2/s.components*s.byteLength;case $o:return i*e*3/s.components*s.byteLength;case dn:return i*e*4/s.components*s.byteLength;case da:return i*e*4/s.components*s.byteLength;case Ss:case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Es:case ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tr:case wr:return Math.max(i,16)*Math.max(e,8)/4;case br:case Ar:return Math.max(i,8)*Math.max(e,8)/2;case Rr:case Cr:case Lr:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pr:case As:case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ur:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Or:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Br:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case kr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Kr:case Zr:case $r:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jr:case Qr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ws:case jr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _h(i){switch(i){case qt:case Xo:return{byteLength:1,components:1};case zi:case qo:case gn:return{byteLength:2,components:1};case oa:case la:return{byteLength:2,components:4};case mn:case aa:case hn:return{byteLength:4,components:1};case Yo:case Ko:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vl(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xh(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],S=h[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,h[d]=S)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const S=h[p];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Th=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ih=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Hh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,id=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ud=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,md=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_d=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Md=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ed=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Id=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Od=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,su=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ru=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,au=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ou=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,du=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_u=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mu=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Au=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Du=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ou=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ku=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ku=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$u=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ju=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:vh,alphahash_pars_fragment:Sh,alphamap_fragment:Mh,alphamap_pars_fragment:Eh,alphatest_fragment:yh,alphatest_pars_fragment:bh,aomap_fragment:Th,aomap_pars_fragment:Ah,batching_pars_vertex:wh,batching_vertex:Rh,begin_vertex:Ch,beginnormal_vertex:Ph,bsdfs:Lh,iridescence_fragment:Ih,bumpmap_pars_fragment:Dh,clipping_planes_fragment:Nh,clipping_planes_pars_fragment:Uh,clipping_planes_pars_vertex:Fh,clipping_planes_vertex:Oh,color_fragment:Bh,color_pars_fragment:Gh,color_pars_vertex:kh,color_vertex:zh,common:Hh,defaultnormal_vertex:Vh,displacementmap_pars_vertex:Wh,displacementmap_vertex:Xh,emissivemap_fragment:qh,emissivemap_pars_fragment:Yh,colorspace_fragment:Kh,colorspace_pars_fragment:Zh,envmap_fragment:$h,envmap_common_pars_fragment:Jh,envmap_pars_fragment:Qh,envmap_pars_vertex:jh,envmap_physical_pars_fragment:hd,envmap_vertex:ed,fog_vertex:td,fog_pars_vertex:nd,fog_fragment:id,fog_pars_fragment:sd,gradientmap_pars_fragment:rd,lightmap_pars_fragment:ad,lights_lambert_fragment:od,lights_lambert_pars_fragment:ld,lights_pars_begin:cd,lights_toon_fragment:dd,lights_toon_pars_fragment:ud,lights_phong_fragment:fd,lights_phong_pars_fragment:pd,lights_physical_fragment:md,lights_physical_pars_fragment:gd,lights_fragment_begin:_d,lights_fragment_maps:xd,lights_fragment_end:vd,lightprobes_pars_fragment:Sd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:Ed,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:bd,map_fragment:Td,map_pars_fragment:Ad,map_particle_fragment:wd,map_particle_pars_fragment:Rd,metalnessmap_fragment:Cd,metalnessmap_pars_fragment:Pd,morphinstance_vertex:Ld,morphcolor_vertex:Id,morphnormal_vertex:Dd,morphtarget_pars_vertex:Nd,morphtarget_vertex:Ud,normal_fragment_begin:Fd,normal_fragment_maps:Od,normal_pars_fragment:Bd,normal_pars_vertex:Gd,normal_vertex:kd,normalmap_pars_fragment:zd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Vd,clearcoat_pars_fragment:Wd,iridescence_pars_fragment:Xd,opaque_fragment:qd,packing:Yd,premultiplied_alpha_fragment:Kd,project_vertex:Zd,dithering_fragment:$d,dithering_pars_fragment:Jd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:jd,shadowmap_pars_fragment:eu,shadowmap_pars_vertex:tu,shadowmap_vertex:nu,shadowmask_pars_fragment:iu,skinbase_vertex:su,skinning_pars_vertex:ru,skinning_vertex:au,skinnormal_vertex:ou,specularmap_fragment:lu,specularmap_pars_fragment:cu,tonemapping_fragment:hu,tonemapping_pars_fragment:du,transmission_fragment:uu,transmission_pars_fragment:fu,uv_pars_fragment:pu,uv_pars_vertex:mu,uv_vertex:gu,worldpos_vertex:_u,background_vert:xu,background_frag:vu,backgroundCube_vert:Su,backgroundCube_frag:Mu,cube_vert:Eu,cube_frag:yu,depth_vert:bu,depth_frag:Tu,distance_vert:Au,distance_frag:wu,equirect_vert:Ru,equirect_frag:Cu,linedashed_vert:Pu,linedashed_frag:Lu,meshbasic_vert:Iu,meshbasic_frag:Du,meshlambert_vert:Nu,meshlambert_frag:Uu,meshmatcap_vert:Fu,meshmatcap_frag:Ou,meshnormal_vert:Bu,meshnormal_frag:Gu,meshphong_vert:ku,meshphong_frag:zu,meshphysical_vert:Hu,meshphysical_frag:Vu,meshtoon_vert:Wu,meshtoon_frag:Xu,points_vert:qu,points_frag:Yu,shadow_vert:Ku,shadow_frag:Zu,sprite_vert:$u,sprite_frag:Ju},ge={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},cn={basic:{uniforms:Bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Bt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Bt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Bt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Bt([ge.points,ge.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Bt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Bt([ge.common,ge.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Bt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Bt([ge.sprite,ge.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Bt([ge.common,ge.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Bt([ge.lights,ge.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};cn.physical={uniforms:Bt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ms={r:0,b:0,g:0},Qu=new rt,Sl=new Ne;Sl.set(-1,0,0,0,1,0,0,0,1);function ju(i,e,t,n,s,r){const a=new Ce(0);let o=s===!0?0:1,l,c,u=null,h=0,d=null;function p(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const y=M.backgroundBlurriness>0;w=e.get(w,y)}return w}function _(M){let w=!1;const y=p(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,w){const y=p(w);y&&y.isCubeTexture?(c===void 0&&(c=new pe(new Xe(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:yi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qu.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sl),c.material.toneMapped=We.getTransfer(y.colorSpace)!==et,(u!==y||h!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new pe(new kt(2,2),new ei({name:"BackgroundMaterial",uniforms:yi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=We.getTransfer(y.colorSpace)!==et,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(ms,ml(i)),t.buffers.color.setClear(ms.r,ms.g,ms.b,w,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:_,addToRenderList:S,dispose:f}}function ef(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(N,F,V,L,z){let K=!1;const k=h(N,L,V,F);r!==k&&(r=k,c(r.object)),K=p(N,L,V,z),K&&_(N,L,V,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(N,F,V,L),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function h(N,F,V,L){const z=L.wireframe===!0;let K=n[F.id];K===void 0&&(K={},n[F.id]=K);const k=N.isInstancedMesh===!0?N.id:0;let ee=K[k];ee===void 0&&(ee={},K[k]=ee);let W=ee[V.id];W===void 0&&(W={},ee[V.id]=W);let Q=W[z];return Q===void 0&&(Q=d(l()),W[z]=Q),Q}function d(N){const F=[],V=[],L=[];for(let z=0;z<t;z++)F[z]=0,V[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:L,object:N,attributes:{},index:null}}function p(N,F,V,L){const z=r.attributes,K=F.attributes;let k=0;const ee=V.getAttributes();for(const W in ee)if(ee[W].location>=0){const j=z[W];let ve=K[W];if(ve===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor)),j===void 0||j.attribute!==ve||ve&&j.data!==ve.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function _(N,F,V,L){const z={},K=F.attributes;let k=0;const ee=V.getAttributes();for(const W in ee)if(ee[W].location>=0){let j=K[W];j===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(j=N.instanceColor));const ve={};ve.attribute=j,j&&j.data&&(ve.data=j.data),z[W]=ve,k++}r.attributes=z,r.attributesNum=k,r.index=L}function S(){const N=r.newAttributes;for(let F=0,V=N.length;F<V;F++)N[F]=0}function m(N){f(N,0)}function f(N,F){const V=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;V[N]=1,L[N]===0&&(i.enableVertexAttribArray(N),L[N]=1),z[N]!==F&&(i.vertexAttribDivisor(N,F),z[N]=F)}function M(){const N=r.newAttributes,F=r.enabledAttributes;for(let V=0,L=F.length;V<L;V++)F[V]!==N[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function w(N,F,V,L,z,K,k){k===!0?i.vertexAttribIPointer(N,F,V,z,K):i.vertexAttribPointer(N,F,V,L,z,K)}function y(N,F,V,L){S();const z=L.attributes,K=V.getAttributes(),k=F.defaultAttributeValues;for(const ee in K){const W=K[ee];if(W.location>=0){let Q=z[ee];if(Q===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const j=Q.normalized,ve=Q.itemSize,Le=e.get(Q);if(Le===void 0)continue;const Y=Le.buffer,de=Le.type,xe=Le.bytesPerElement,Te=de===i.INT||de===i.UNSIGNED_INT||Q.gpuType===aa;if(Q.isInterleavedBufferAttribute){const ue=Q.data,Pe=ue.isInterleavedBuffer===!0?ue.stride:ue.itemSize,at=Q.offset;if(ue.isInstancedInterleavedBuffer||ue.isInstancedBufferAttribute){for(let Ae=0;Ae<W.locationSize;Ae++)f(W.location+Ae,ue.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)m(W.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let Ae=0;Ae<W.locationSize;Ae++)w(W.location+Ae,ve/W.locationSize,de,j,Pe*xe,(at+ve/W.locationSize*Ae)*xe,Te)}else{if(Q.isInstancedBufferAttribute){for(let ue=0;ue<W.locationSize;ue++)f(W.location+ue,Q.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ue=0;ue<W.locationSize;ue++)m(W.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let ue=0;ue<W.locationSize;ue++)w(W.location+ue,ve/W.locationSize,de,j,ve*xe,ve/W.locationSize*ue*xe,Te)}}else if(k!==void 0){const j=k[ee];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(W.location,j);break;case 3:i.vertexAttrib3fv(W.location,j);break;case 4:i.vertexAttrib4fv(W.location,j);break;default:i.vertexAttrib1fv(W.location,j)}}}}M()}function A(){I();for(const N in n){const F=n[N];for(const V in F){const L=F[V];for(const z in L){const K=L[z];for(const k in K)u(K[k].object),delete K[k];delete L[z]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;const F=n[N.id];for(const V in F){const L=F[V];for(const z in L){const K=L[z];for(const k in K)u(K[k].object),delete K[k];delete L[z]}}delete n[N.id]}function g(N){for(const F in n){const V=n[F];for(const L in V){const z=V[L];if(z[N.id]===void 0)continue;const K=z[N.id];for(const k in K)u(K[k].object),delete K[k];delete z[N.id]}}}function E(N){for(const F in n){const V=n[F],L=N.isInstancedMesh===!0?N.id:0,z=V[L];if(z!==void 0){for(const K in z){const k=z[K];for(const ee in k)u(k[ee].object),delete k[ee];delete z[K]}delete V[L],Object.keys(V).length===0&&delete n[F]}}}function I(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function tf(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function nf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==dn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const E=g===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==qt&&g!==hn&&!E&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:A,samples:T}}function sf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Bn,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,w=M*4;let y=f.clippingState||null;l.value=y,y=u(_,d,w,p);for(let A=0;A!==w;++A)y[A]=t[A];f.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,_){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const f=p+S*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,y=p;w!==S;++w,y+=4)a.copy(h[w]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}class va extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ul(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xe(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:gi});r.uniforms.tEquirect.value=t;const a=new pe(s,r),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=zt),new na(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const uo=256,rf=3,af=20,Ml=256,El=16,of=3,lf=new U,cf=new Ce;class Ls{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new na(1,10,null),this._boxMesh=new pe(new Xe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=lf}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,_=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(cf));const m=new na(n,s,u);return m.position.copy(o),m.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=_,e.background=S,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(uo,nl(e))}_fromTexture(e,t){e.mapping===vi||e.mapping===ki?this._setSize(e.image.length===0?uo:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=fo(e,!1,!1),n=Math.log2(e)-rf;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=fo(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===vi||e.mapping===ki?(this._cubemapMaterial===null&&(this._cubemapMaterial=mo()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=po()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=hf(),this._integrationMaterial=df());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/El);for(let a=0;a<=n;a++){const o=Ls.lodToRoughness(a,n);if(a>n-of)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Ml*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=uf());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function fo(i,e,t){return new va(i,{minFilter:kn,generateMipmaps:e,type:gn,colorSpace:Rs,depthBuffer:t})}function Wi(i,e,t){return new ei({name:i,uniforms:e,vertexShader:Be.cube_vert,fragmentShader:t,side:Ht,blending:gi,depthTest:!1,depthWrite:!1})}function hf(){return Wi("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ml}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function df(){return Wi("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:El}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function uf(){return Wi("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${af}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function po(){return Wi("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function mo(){return Wi("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ff(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===ks||p===zs)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const S=new va(_.height);return S.fromEquirectangularTexture(i,d),e.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const p=d.mapping,_=p===ks||p===zs,S=p===vi||p===ki;if(_||S){let m=t.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Ls(i)),m=_?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return _&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new Ls(i)),m=_?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,p){return p===ks?d.mapping=vi:p===zs&&(d.mapping=ki),d}function l(d){let p=0;const _=6;for(let S=0;S<_;S++)d[S]!==void 0&&p++;return p===_}function c(d){const p=d.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function pf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&_i("WebGLRenderer: "+n+" extension not supported."),s}}}function mf(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);const S=r.get(_);S&&(e.remove(S),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function u(_){const S=_.attributes;for(const m in S)e.update(S[m],i.ARRAY_BUFFER)}function h(_){const S=_.index,m=_.attributes.position;let f=0;if(m===void 0)return;const M=S!==null?S.array.length:m.array.length/3-1,w=m.count>=65535?cl:ll,y=new w(Math.ceil(M/3)*6,1),A=y.array;if(S!==null){const g=S.array;f=S.version;for(let E=0,I=0;E<M;E+=3){const C=g[E+0],N=g[E+1],F=g[E+2];A[I++]=C,A[I++]=N,A[I++]=N,A[I++]=F,A[I++]=F,A[I++]=C}}else{f=m.version;for(let g=0,E=0;g<M;g+=3){const I=g+0,C=g+1,N=g+2;A[E++]=I,A[E++]=C,A[E++]=C,A[E++]=N,A[E++]=N,A[E++]=I}}y.version=f;const T=r.get(_);T&&e.remove(T),r.set(_,y)}function d(_){const S=r.get(_);if(S){const m=_.index;m!==null&&S.version<m.version&&h(_)}else h(_);return r.get(_)}function p(){for(const _ in s){const S=s[_].deref();S!==void 0&&l(S)}}return{get:c,update:u,getWireframeAttribute:d,dispose:p}}function gf(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*a),t.update(d,n,1)}function c(h,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,h*a,p),t.update(d,n,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,p);let S=0;for(let m=0;m<p;m++)S+=d[m];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function _f(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function xf(i,e,t){const n=new WeakMap,s=new ht;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let C=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var p=C;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),S===!0&&(y=2),m===!0&&(y=3);let A=o.attributes.position.count*y,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const g=new Float32Array(A*T*4*h),E=new rl(g,A,T,h);E.type=hn,E.needsUpdate=!0;const I=y*4;for(let N=0;N<h;N++){const F=f[N],V=M[N],L=w[N],z=A*T*4*N;for(let K=0;K<F.count;K++){const k=K*I;_===!0&&(s.fromBufferAttribute(F,K),g[z+k+0]=s.x,g[z+k+1]=s.y,g[z+k+2]=s.z,g[z+k+3]=0),S===!0&&(s.fromBufferAttribute(V,K),g[z+k+4]=s.x,g[z+k+5]=s.y,g[z+k+6]=s.z,g[z+k+7]=0),m===!0&&(s.fromBufferAttribute(L,K),g[z+k+8]=s.x,g[z+k+9]=s.y,g[z+k+10]=s.z,g[z+k+11]=L.itemSize===4?s.w:1)}}d={count:h,texture:E,size:new Ve(A,T)},n.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function vf(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Sf={[Bo]:"LINEAR_TONE_MAPPING",[Go]:"REINHARD_TONE_MAPPING",[ko]:"CINEON_TONE_MAPPING",[ra]:"ACES_FILMIC_TONE_MAPPING",[Ho]:"AGX_TONE_MAPPING",[Vo]:"NEUTRAL_TONE_MAPPING",[zo]:"CUSTOM_TONE_MAPPING"};function Mf(i,e,t,n,s,r){const a=new fn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Qt;u.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new At([0,2,0,0,2,0],2));const h=new ah({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new pe(u,h),p=new xl(-1,1,1,-1,0,1);let _=null,S=null,m=!1,f,M=null,w=[],y=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let g=0;g<w.length;g++){const E=w[g];E.setSize&&E.setSize(A,T)}},this.setEffects=function(A){w=A,y=w.length>0&&w[0].isRenderPass===!0;const T=a.width,g=a.height;w.length>0&&o===null&&(o=new fn(T,g,{type:gn,depthBuffer:!1,stencilBuffer:!1}),l=new fn(T,g,{type:gn,depthBuffer:!1,stencilBuffer:!1}));const E=s===!0&&w.some(I=>I.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Ei(T,g),r===!0&&(c.format=zn,c.type=Si)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let I=0;I<w.length;I++){const C=w[I];C.setSize&&C.setSize(T,g),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,T){if(m||A.toneMapping===Rn&&w.length===0)return!1;if(M=T,T!==null){const g=T.width,E=T.height;(a.width!==g||a.height!==E)&&this.setSize(g,E)}return y===!1&&A.setRenderTarget(a),f=A.toneMapping,A.toneMapping=Rn,!0},this.hasRenderPass=function(){return y},this.end=function(A,T){A.toneMapping=f,m=!0;let g=a,E=o;for(let I=0;I<w.length;I++){const C=w[I];C.enabled!==!1&&(C.render(A,E,g,T),C.needsSwap!==!1&&(g=E,E=E===o?l:o))}if(_!==A.outputColorSpace||S!==A.toneMapping){_=A.outputColorSpace,S=A.toneMapping,h.defines={},We.getTransfer(_)===et&&(h.defines.SRGB_TRANSFER="");const I=Sf[S];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(M),A.render(d,p),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}const yl=new Nt,bl=new Ei(1,1),Tl=new fl(1),Al=new rl,wl=new Oc,Rl=new ul,go=[],_o=[],xo=new Float32Array(16),vo=new Float32Array(9),So=new Float32Array(4);function wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=go[s];if(r===void 0&&(r=new Float32Array(s),go[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fs(i,e){let t=_o[e];t===void 0&&(t=new Int32Array(e),_o[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function Af(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(vt(t,n))return;So.set(n),i.uniformMatrix2fv(this.addr,!1,So),St(t,n)}}function wf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(vt(t,n))return;vo.set(n),i.uniformMatrix3fv(this.addr,!1,vo),St(t,n)}}function Rf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(vt(t,n))return;xo.set(n),i.uniformMatrix4fv(this.addr,!1,xo),St(t,n)}}function Cf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function If(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function Df(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function Uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function Os(i){return i.version===0&&(i.compareFunction=el,i.needsUpdate=!0),i}function Of(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Os(bl):r=yl,t.setTexture2D(e||r,s)}function Bf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wl,s)}function Gf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Os(Tl):r=Rl,t.setTextureCube(e||r,s)}function kf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Al,s)}function zf(i){switch(i){case 5126:return Ef;case 35664:return yf;case 35665:return bf;case 35666:return Tf;case 35674:return Af;case 35675:return wf;case 35676:return Rf;case 5124:case 35670:return Cf;case 35667:case 35671:return Pf;case 35668:case 35672:return Lf;case 35669:case 35673:return If;case 5125:return Df;case 36294:return Nf;case 36295:return Uf;case 36296:return Ff;case 35678:case 36198:case 36298:case 36306:case 35682:return Of;case 35679:case 36299:case 36307:return Bf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return kf}}function Hf(i,e){i.uniform1fv(this.addr,e)}function Vf(i,e){const t=wi(e,this.size,2);i.uniform2fv(this.addr,t)}function Wf(i,e){const t=wi(e,this.size,3);i.uniform3fv(this.addr,t)}function Xf(i,e){const t=wi(e,this.size,4);i.uniform4fv(this.addr,t)}function qf(i,e){const t=wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Yf(i,e){const t=wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kf(i,e){const t=wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zf(i,e){i.uniform1iv(this.addr,e)}function $f(i,e){i.uniform2iv(this.addr,e)}function Jf(i,e){i.uniform3iv(this.addr,e)}function Qf(i,e){i.uniform4iv(this.addr,e)}function jf(i,e){i.uniform1uiv(this.addr,e)}function ep(i,e){i.uniform2uiv(this.addr,e)}function tp(i,e){i.uniform3uiv(this.addr,e)}function np(i,e){i.uniform4uiv(this.addr,e)}function ip(i,e,t){const n=this.cache,s=e.length,r=Fs(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Os(bl):a=yl;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function sp(i,e,t){const n=this.cache,s=e.length,r=Fs(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wl,r[a])}function rp(i,e,t){const n=this.cache,s=e.length,r=Fs(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Os(Tl):a=Rl;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function ap(i,e,t){const n=this.cache,s=e.length,r=Fs(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Al,r[a])}function op(i){switch(i){case 5126:return Hf;case 35664:return Vf;case 35665:return Wf;case 35666:return Xf;case 35674:return qf;case 35675:return Yf;case 35676:return Kf;case 5124:case 35670:return Zf;case 35667:case 35671:return $f;case 35668:case 35672:return Jf;case 35669:case 35673:return Qf;case 5125:return jf;case 36294:return ep;case 36295:return tp;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return ap}}class lp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zf(t.type)}}class cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=op(t.type)}}class hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ur=/(\w+)(\])?(\[|\.)?/g;function Mo(i,e){i.seq.push(e),i.map[e.id]=e}function dp(i,e,t){const n=i.name,s=n.length;for(ur.lastIndex=0;;){const r=ur.exec(n),a=ur.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mo(t,c===void 0?new lp(o,i,e):new cp(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new hp(o),Mo(t,h)),t=h}}}class bs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);dp(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Eo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const up=37297;let fp=0;function pp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const yo=new Ne;function mp(i){We._getMatrix(yo,We.workingColorSpace,i);const e=`mat3( ${yo.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case Cs:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+pp(i.getShaderSource(e),o)}else return r}function gp(i,e){const t=mp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const _p={[Bo]:"Linear",[Go]:"Reinhard",[ko]:"Cineon",[ra]:"ACESFilmic",[Ho]:"AgX",[Vo]:"Neutral",[zo]:"Custom"};function xp(i,e){const t=_p[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gs=new U;function vp(){We.getLuminanceCoefficients(gs);const i=gs.x.toFixed(4),e=gs.y.toFixed(4),t=gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ui).join(`
`)}function Mp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ep(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ui(i){return i!==""}function To(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ao(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(i){return i.replace(yp,bp)}function bp(i,e){const t=Be[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ia(t)}const Tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wo(i){return i.replace(Tp,Ap)}function Ap(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ro(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const wp={[vs]:"SHADOWMAP_TYPE_PCF",[Ni]:"SHADOWMAP_TYPE_VSM"};function Rp(i){return wp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Cp={[ki]:"ENVMAP_MODE_REFRACTION"};function Pp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Cp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Lp={[Oo]:"ENVMAP_BLENDING_MULTIPLY",[tc]:"ENVMAP_BLENDING_MIX",[nc]:"ENVMAP_BLENDING_ADD"};function Ip(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Lp[i.combine]||"ENVMAP_BLENDING_NONE"}function Dp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Rp(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Pp(t),h=Ip(t),d=Sp(t),p=Mp(r),_=s.createProgram();let S,m,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ui).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ui).join(`
`),m.length>0&&(m+=`
`)):(S=[Ro(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),m=[Ro(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Rn?xp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,gp("linearToOutputTexel",t.outputColorSpace),vp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ui).join(`
`)),a=ia(a),a=To(a,t),a=Ao(a,t),o=ia(o),o=To(o,t),o=Ao(o,t),a=wo(a),o=wo(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",t.glslVersion===Ba?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=f+S+a,w=f+m+o,y=Eo(s,s.VERTEX_SHADER,M),A=Eo(s,s.FRAGMENT_SHADER,w);s.attachShader(_,y),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(y)||"",V=s.getShaderInfoLog(A)||"",L=N.trim(),z=F.trim(),K=V.trim();let k=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,y,A);else{const W=bo(s,y,"vertex"),Q=bo(s,A,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+W+`
`+Q)}else L!==""?Ie("WebGLProgram: Program Info Log:",L):(z===""||K==="")&&(ee=!1);ee&&(C.diagnostics={runnable:k,programLog:L,vertexShader:{log:z,prefix:S},fragmentShader:{log:K,prefix:m}})}s.deleteShader(y),s.deleteShader(A),g=new bs(s,_),E=Ep(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,up)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=A,this}let Np=0;class Up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fp(e),t.set(e,n)),n}}class Fp{constructor(e){this.id=Np++,this.code=e,this.usedTimes=0}}function Op(i){return i===jn||i===As||i===ws}function Bp(i,e,t,n,s,r){const a=new al,o=new Up,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,E,I,C,N,F){const V=C.fog,L=N.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,k=e.get(g.envMap||z,K),ee=d[g.type];let W=n.precision;g.precision!==null&&(W=n.getMaxPrecision(g.precision),W!==g.precision&&Ie("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));const Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,j=Q!==void 0?Q.length:0;let ve=0;L.morphAttributes.position!==void 0&&(ve=1),L.morphAttributes.normal!==void 0&&(ve=2),L.morphAttributes.color!==void 0&&(ve=3);let Le,Y,de,xe;if(ee){const me=cn[ee];Le=me.vertexShader,Y=me.fragmentShader}else{Le=g.vertexShader,Y=g.fragmentShader;const me=o.getVertexShaderStage(g),je=o.getFragmentShaderStage(g);o.update(g,me,je),de=me.id,xe=je.id}const Te=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,at=N.isBatchedMesh===!0,Ae=!!g.map,Ye=!!g.matcap,Ke=!!k,Ge=Ke&&k.isPMREMTexture===!0,ut=!!g.aoMap,ot=!!g.lightMap,ft=!!g.bumpMap&&g.wireframe===!1,Ze=!!g.normalMap,Ct=!!g.displacementMap,lt=!!g.emissiveMap,_t=!!g.metalnessMap,Ut=!!g.roughnessMap,Ft=g.anisotropy>0,D=g.clearcoat>0,Yt=g.diffuseRoughness>0,it=g.dispersion>0,st=g.retroreflectivity>0,fe=g.iridescence>0,xt=g.sheen>0,Re=g.transmission>0,De=Ft&&!!g.anisotropyMap,b=D&&!!g.clearcoatMap,x=D&&!!g.clearcoatNormalMap,B=D&&!!g.clearcoatRoughnessMap,te=Yt&&!!g.diffuseRoughnessMap,J=fe&&!!g.iridescenceMap,se=fe&&!!g.iridescenceThicknessMap,ce=xt&&!!g.sheenColorMap,q=xt&&!!g.sheenRoughnessMap,Z=!!g.specularMap,ae=!!g.specularColorMap,R=!!g.specularIntensityMap,$=Re&&!!g.transmissionMap,X=Re&&!!g.thicknessMap,oe=!!g.gradientMap,ie=!!g.alphaMap,re=g.alphaTest>0,be=!!g.alphaHash,Oe=!!g.extensions;let ne=Rn;g.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(ne=i.toneMapping);const we=Ge?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Fe={shaderID:ee,shaderType:g.type,shaderName:g.name,vertexShader:Le,fragmentShader:Y,defines:g.defines,customVertexShaderID:de,customFragmentShaderID:xe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:at,batchingColor:at&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ae,matcap:Ye,envMap:Ke,envMapMode:Ke&&k.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?we.length-1:null,envMapSize:Ge?we[0].width:null,aoMap:ut,lightMap:ot,bumpMap:ft,normalMap:Ze,displacementMap:Ct,emissiveMap:lt,normalMapObjectSpace:Ze&&g.normalMapType===rc,normalMapTangentSpace:Ze&&g.normalMapType===ea,packedNormalMap:Ze&&g.normalMapType===ea&&Op(g.normalMap.format),metalnessMap:_t,roughnessMap:Ut,anisotropy:Ft,anisotropyMap:De,clearcoat:D,clearcoatMap:b,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:Yt,diffuseRoughnessMap:te,dispersion:it,retroreflection:st,iridescence:fe,iridescenceMap:J,iridescenceThicknessMap:se,sheen:xt,sheenColorMap:ce,sheenRoughnessMap:q,specularMap:Z,specularColorMap:ae,specularIntensityMap:R,transmission:Re,transmissionMap:$,thicknessMap:X,gradientMap:oe,opaque:g.transparent===!1&&g.blending===Fi&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:be,combine:g.combine,mapUv:Ae&&p(g.map.channel),aoMapUv:ut&&p(g.aoMap.channel),lightMapUv:ot&&p(g.lightMap.channel),bumpMapUv:ft&&p(g.bumpMap.channel),normalMapUv:Ze&&p(g.normalMap.channel),displacementMapUv:Ct&&p(g.displacementMap.channel),emissiveMapUv:lt&&p(g.emissiveMap.channel),metalnessMapUv:_t&&p(g.metalnessMap.channel),roughnessMapUv:Ut&&p(g.roughnessMap.channel),anisotropyMapUv:De&&p(g.anisotropyMap.channel),clearcoatMapUv:b&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:J&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:se&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:q&&p(g.sheenRoughnessMap.channel),specularMapUv:Z&&p(g.specularMap.channel),specularColorMapUv:ae&&p(g.specularColorMap.channel),specularIntensityMapUv:R&&p(g.specularIntensityMap.channel),transmissionMapUv:$&&p(g.transmissionMap.channel),thicknessMapUv:X&&p(g.thicknessMap.channel),alphaMapUv:ie&&p(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ze||Ft),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(Ae||ie),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&Ze===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ue,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ve,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:F.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ae&&g.map.isVideoTexture===!0&&We.getTransfer(g.map.colorSpace)===et,decodeVideoTextureEmissive:lt&&g.emissiveMap.isVideoTexture===!0&&We.getTransfer(g.emissiveMap.colorSpace)===et,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===bn,flipSided:g.side===Ht,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Oe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&g.extensions.multiDraw===!0||at)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function S(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const I in g.defines)E.push(I),E.push(g.defines[I]);return g.isRawShaderMaterial===!1&&(m(E,g),f(E,g),E.push(i.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function m(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapPMREM),g.push(E.envMapMaxLod),g.push(E.envMapSize),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.diffuseRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.numSunLights),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numSunLightShadows),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.numLightProbeGrids),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function f(g,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){const E=d[g.type];let I;if(E){const C=cn[E];I=ih.clone(C.uniforms)}else I=g.uniforms;return I}function w(g,E){let I=u.get(E);return I!==void 0?++I.usedTimes:(I=new Dp(i,E,g,s),c.push(I),u.set(E,I)),I}function y(g){if(--g.usedTimes===0){const E=c.indexOf(g);c[E]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:M,acquireProgram:w,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:T}}function Gp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Co(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Po(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,_,S,m,f){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:p,material:_,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:f},i[e]=M):(M.id=d.id,M.object=d,M.geometry=p,M.material=_,M.materialVariant=a(d),M.groupOrder=S,M.renderOrder=d.renderOrder,M.z=m,M.group=f),e++,M}function l(d,p,_,S,m,f,M){M.reversedDepth===!0&&(m=-m);const w=o(d,p,_,S,m,f);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):t.push(w)}function c(d,p,_,S,m,f){const M=o(d,p,_,S,m,f);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):t.unshift(M)}function u(d,p){t.length>1&&t.sort(d||kp),n.length>1&&n.sort(p||Co),s.length>1&&s.sort(p||Co)}function h(){for(let d=e,p=i.length;d<p;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function zp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Po,i.set(n,[a])):s>=r.length?(a=new Po,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Ce};break;case"SpotLight":t={position:new U,direction:new U,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Vp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Wp=0;function Xp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qp(i){const e=new Hp,t=Vp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new rt,a=new rt;function o(c){let u=0,h=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,_=0,S=0,m=0,f=0,M=0,w=0,y=0,A=0,T=0,g=0,E=0,I=0,C=0;c.sort(Xp);for(let F=0,V=c.length;F<V;F++){const L=c[F],z=L.color,K=L.intensity,k=L.distance;let ee=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===jn?ee=L.shadow.map.texture:ee=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=z.r*K,h+=z.g*K,d+=z.b*K;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],K);C++}else if(L.isSunLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=j,n.sunShadowMap[_]=ee;const ve=Q.getViewportCount();for(let Le=0;Le<ve;Le++)n.sunShadowMatrix[S+Le]=Q.getMatrix(Le),n.sunShadowCascade[S+Le]=Q._cascadeData[Le];S+=ve,_++}n.sun[p]=W,p++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=L.shadow.matrix,A++}n.directional[m]=W,m++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(z).multiplyScalar(K),W.distance=k,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[M]=W;const Q=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,Q.updateMatrices(L),L.castShadow&&I++),n.spotLightMatrix[M]=Q.matrix,L.castShadow){const j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=ee,g++}M++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(z).multiplyScalar(K),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=W,w++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const Q=L.shadow,j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[f]=j,n.pointShadowMap[f]=ee,n.pointShadowMatrix[f]=L.shadow.matrix,T++}n.point[f]=W,f++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(K),W.groundColor.copy(L.groundColor).multiplyScalar(K),n.hemi[y]=W,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const N=n.hash;(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==f||N.spotLength!==M||N.rectAreaLength!==w||N.hemiLength!==y||N.numSunShadows!==_||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==g||N.numSpotMaps!==E||N.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=f,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+E-I,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,N.sunLength=p,N.directionalLength=m,N.pointLength=f,N.spotLength=M,N.rectAreaLength=w,N.hemiLength=y,N.numSunShadows=_,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=g,N.numSpotMaps=E,N.numLightProbes=C,n.version=Wp++)}function l(c,u){let h=0,d=0,p=0,_=0,S=0,m=0;const f=u.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){const y=c[M];if(y.isSunLight){const A=n.sun[h];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(f),h++}else if(y.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),d++}else if(y.isSpotLight){const A=n.spot[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const A=n.rectArea[S];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(f),a.identity(),r.copy(y.matrixWorld),r.premultiply(f),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){const A=n.point[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const A=n.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function Lo(i){const e=new qp(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){n.push(h)}function l(){e.setup(t),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Yp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Lo(i),e.set(s,[o])):r>=a.length?(o=new Lo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$p=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Jp=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Io=new rt,Di=new U,fr=new U;function Qp(i,e,t){let n=new Vi;const s=new Ve,r=new Ve,a=new ht,o=new lh,l=new ch,c={},u=t.maxTextureSize,h={[Qn]:Ht,[Ht]:Qn,[bn]:bn},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Kp,fragmentShader:Zp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Qt;_.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new pe(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vs;let f=this.type;this.render=function(T,g,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===No&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vs);const I=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(gi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=f!==this.type;V&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=T.length;L<z;L++){const K=T[L],k=K.shadow;if(k===void 0){Ie("WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ee=k.getFrameExtents();s.multiply(ee),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,k.mapSize.y=r.y));const W=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=W,k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ni){if(K.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new fn(s.x,s.y,{format:jn,type:gn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),k.map.texture.name=K.name+".shadowMap",k.map.depthTexture=new Ei(s.x,s.y,hn),k.map.depthTexture.name=K.name+".shadowMapDepth",k.map.depthTexture.format=Hn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Rt,k.map.depthTexture.magFilter=Rt}else K.isPointLight?(k.map=new va(s.x),k.map.depthTexture=new fl(s.x,mn)):(k.map=new fn(s.x,s.y),k.map.depthTexture=new Ei(s.x,s.y,mn)),k.map.depthTexture.name=K.name+".shadowMap",k.map.depthTexture.format=Hn,this.type===vs?(k.map.depthTexture.compareFunction=W?jo:Qo,k.map.depthTexture.minFilter=zt,k.map.depthTexture.magFilter=zt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Rt,k.map.depthTexture.magFilter=Rt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const Q=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();K.isPointLight!==!0&&k.updateMatrices(K,E);const j=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:E.layers;for(let ve=0;ve<Q;ve++){const Le=k.getCamera(ve);if(K.isPointLight){const Y=k.camera,de=k.matrix,xe=K.distance||Y.far;xe!==Y.far&&(Y.far=xe,Y.updateProjectionMatrix()),Di.setFromMatrixPosition(K.matrixWorld),Y.position.copy(Di),fr.copy(Y.position),fr.add($p[ve]),Y.up.copy(Jp[ve]),Y.lookAt(fr),Y.updateMatrixWorld(),de.makeTranslation(-Di.x,-Di.y,-Di.z),Io.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Io,Y.coordinateSystem,Y.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,ve),i.clear();else{ve===0&&(i.setRenderTarget(k.map),i.clear());const Y=k.getViewport(ve);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),F.viewport(a)}n=k.getFrustum(ve),y(g,E,Le,K,j,this.type)}k.isPointLightShadow!==!0&&this.type===Ni&&M(k,E),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(I,C,N)};function M(T,g){const E=e.update(S);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new fn(s.x,s.y,{format:jn,type:gn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,E,d,S,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,E,p,S,null)}function w(T,g,E,I){let C=null;const N=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)C=N;else if(C=E.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const F=C.uuid,V=g.uuid;let L=c[F];L===void 0&&(L={},c[F]=L);let z=L[V];z===void 0&&(z=C.clone(),L[V]=z,g.addEventListener("dispose",A)),C=z}if(C.visible=g.visible,C.wireframe=g.wireframe,I===Ni?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:h[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=i.properties.get(C);F.light=E}return C}function y(T,g,E,I,C,N){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Ni)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const L=e.update(T),z=T.material;if(Array.isArray(z)){const K=L.groups;for(let k=0,ee=K.length;k<ee;k++){const W=K[k],Q=z[W.materialIndex];if(Q&&Q.visible){const j=w(T,Q,I,N);T.onBeforeShadow(i,T,g,E,L,j,W),i.renderBufferDirect(E,null,L,j,T,W),T.onAfterShadow(i,T,g,E,L,j,W)}}}else if(z.visible){const K=w(T,z,I,N);T.onBeforeShadow(i,T,g,E,L,K,null),i.renderBufferDirect(E,null,L,K,T,null),T.onAfterShadow(i,T,g,E,L,K,null)}}const V=T.children;for(let L=0,z=V.length;L<z;L++)y(V[L],g,E,I,C,N)}function A(T){T.target.removeEventListener("dispose",A);for(const E in c){const I=c[E],C=T.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function jp(i,e){function t(){let R=!1;const $=new ht;let X=null;const oe=new ht(0,0,0,0);return{setMask:function(ie){X!==ie&&!R&&(i.colorMask(ie,ie,ie,ie),X=ie)},setLocked:function(ie){R=ie},setClear:function(ie,re,be,Oe,ne){ne===!0&&(ie*=Oe,re*=Oe,be*=Oe),$.set(ie,re,be,Oe),oe.equals($)===!1&&(i.clearColor(ie,re,be,Oe),oe.copy($))},reset:function(){R=!1,X=null,oe.set(-1,0,0,0)}}}function n(){let R=!1,$=!1,X=null,oe=null,ie=null;return{setReversed:function(re){if($!==re){const be=e.get("EXT_clip_control");re?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),$=re;const Oe=ie;ie=null,this.setClear(Oe)}},getReversed:function(){return $},setTest:function(re){re?ue(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(re){X!==re&&!R&&(i.depthMask(re),X=re)},setFunc:function(re){if($&&(re=gc[re]),oe!==re){switch(re){case gr:i.depthFunc(i.NEVER);break;case _r:i.depthFunc(i.ALWAYS);break;case xr:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case vr:i.depthFunc(i.EQUAL);break;case Sr:i.depthFunc(i.GEQUAL);break;case Mr:i.depthFunc(i.GREATER);break;case Er:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=re}},setLocked:function(re){R=re},setClear:function(re){ie!==re&&(ie=re,$&&(re=1-re),i.clearDepth(re))},reset:function(){R=!1,X=null,oe=null,ie=null,$=!1}}}function s(){let R=!1,$=null,X=null,oe=null,ie=null,re=null,be=null,Oe=null,ne=null;return{setTest:function(we){R||(we?ue(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(we){$!==we&&!R&&(i.stencilMask(we),$=we)},setFunc:function(we,Fe,me){(X!==we||oe!==Fe||ie!==me)&&(i.stencilFunc(we,Fe,me),X=we,oe=Fe,ie=me)},setOp:function(we,Fe,me){(re!==we||be!==Fe||Oe!==me)&&(i.stencilOp(we,Fe,me),re=we,be=Fe,Oe=me)},setLocked:function(we){R=we},setClear:function(we){ne!==we&&(i.clearStencil(we),ne=we)},reset:function(){R=!1,$=null,X=null,oe=null,ie=null,re=null,be=null,Oe=null,ne=null}}}const r=new t,a=new n,o=new s;let l={};const c=new WeakMap;let u={},h={},d={},p=new WeakMap,_=[],S=null,m=!1,f=null,M=null,w=null,y=null,A=null,T=null,g=null,E=new Ce(0,0,0),I=0,C=!1,N=null,F=null,V=null,L=null,z=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ee=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=ee>=2);let Q=null,j={};const ve=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),Y=new ht().fromArray(ve),de=new ht().fromArray(Le);function xe(R,$,X,oe){const ie=new Uint8Array(4),re=i.createTexture();i.bindTexture(R,re),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<X;be++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D($+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return re}const Te={};Te[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(Gi),ft(!1),Ze(Ua),ue(i.CULL_FACE),ut(gi);function ue(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function Pe(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function at(R,$){return d[R]!==$?(i.bindFramebuffer(R,$),d[R]=$,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Ae(R,$){let X=_,oe=!1;if(R){X=p.get($),X===void 0&&(X=[],p.set($,X));const ie=R.textures;if(X.length!==ie.length||X[0]!==i.COLOR_ATTACHMENT0){for(let re=0,be=ie.length;re<be;re++)X[re]=i.COLOR_ATTACHMENT0+re;X.length=ie.length,oe=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,oe=!0);oe&&i.drawBuffers(X)}function Ye(R){return S!==R?(i.useProgram(R),S=R,!0):!1}const Ke={[mi]:i.FUNC_ADD,[Bl]:i.FUNC_SUBTRACT,[Gl]:i.FUNC_REVERSE_SUBTRACT};Ke[kl]=i.MIN,Ke[zl]=i.MAX;const Ge={[Hl]:i.ZERO,[Vl]:i.ONE,[Wl]:i.SRC_COLOR,[Uo]:i.SRC_ALPHA,[$l]:i.SRC_ALPHA_SATURATE,[Kl]:i.DST_COLOR,[ql]:i.DST_ALPHA,[Xl]:i.ONE_MINUS_SRC_COLOR,[Fo]:i.ONE_MINUS_SRC_ALPHA,[Zl]:i.ONE_MINUS_DST_COLOR,[Yl]:i.ONE_MINUS_DST_ALPHA,[Jl]:i.CONSTANT_COLOR,[Ql]:i.ONE_MINUS_CONSTANT_COLOR,[jl]:i.CONSTANT_ALPHA,[ec]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(R,$,X,oe,ie,re,be,Oe,ne,we){if(R===gi){m===!0&&(Pe(i.BLEND),m=!1);return}if(m===!1&&(ue(i.BLEND),m=!0),R!==Ol){if(R!==f||we!==C){if((M!==mi||A!==mi)&&(i.blendEquation(i.FUNC_ADD),M=mi,A=mi),we)switch(R){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mr:i.blendFunc(i.ONE,i.ONE);break;case Fa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",R);break}else switch(R){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fa:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oa:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",R);break}w=null,y=null,T=null,g=null,E.set(0,0,0),I=0,f=R,C=we}return}ie=ie||$,re=re||X,be=be||oe,($!==M||ie!==A)&&(i.blendEquationSeparate(Ke[$],Ke[ie]),M=$,A=ie),(X!==w||oe!==y||re!==T||be!==g)&&(i.blendFuncSeparate(Ge[X],Ge[oe],Ge[re],Ge[be]),w=X,y=oe,T=re,g=be),(Oe.equals(E)===!1||ne!==I)&&(i.blendColor(Oe.r,Oe.g,Oe.b,ne),E.copy(Oe),I=ne),f=R,C=!1}function ot(R,$){R.side===bn?Pe(i.CULL_FACE):ue(i.CULL_FACE);let X=R.side===Ht;$&&(X=!X),ft(X),R.blending===Fi&&R.transparent===!1?ut(gi):ut(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const oe=R.stencilWrite;o.setTest(oe),oe&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),lt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(R){N!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),N=R)}function Ze(R){R!==Ul?(ue(i.CULL_FACE),R!==F&&(R===Ua?i.cullFace(i.BACK):R===Fl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),F=R}function Ct(R){R!==V&&(k&&i.lineWidth(R),V=R)}function lt(R,$,X){R?(ue(i.POLYGON_OFFSET_FILL),(L!==$||z!==X)&&(L=$,z=X,a.getReversed()&&($=-$,X=-X),i.polygonOffset($,X))):Pe(i.POLYGON_OFFSET_FILL)}function _t(R){R?ue(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function Ut(R){R===void 0&&(R=i.TEXTURE0+K-1),Q!==R&&(i.activeTexture(R),Q=R)}function Ft(R,$,X){X===void 0&&(Q===null?X=i.TEXTURE0+K-1:X=Q);let oe=j[X];oe===void 0&&(oe={type:void 0,texture:void 0},j[X]=oe),(oe.type!==R||oe.texture!==$)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(R,$||Te[R]),oe.type=R,oe.texture=$)}function D(){const R=j[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(R){Je("WebGLState:",R)}}function it(){try{i.compressedTexImage3D(...arguments)}catch(R){Je("WebGLState:",R)}}function st(){try{i.texSubImage2D(...arguments)}catch(R){Je("WebGLState:",R)}}function fe(){try{i.texSubImage3D(...arguments)}catch(R){Je("WebGLState:",R)}}function xt(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Je("WebGLState:",R)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Je("WebGLState:",R)}}function De(){try{i.texStorage2D(...arguments)}catch(R){Je("WebGLState:",R)}}function b(){try{i.texStorage3D(...arguments)}catch(R){Je("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){Je("WebGLState:",R)}}function B(){try{i.texImage3D(...arguments)}catch(R){Je("WebGLState:",R)}}function te(R){return h[R]!==void 0?h[R]:i.getParameter(R)}function J(R,$){h[R]!==$&&(i.pixelStorei(R,$),h[R]=$)}function se(R){Y.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Y.copy(R))}function ce(R){de.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),de.copy(R))}function q(R,$){let X=c.get($);X===void 0&&(X=new WeakMap,c.set($,X));let oe=X.get(R);oe===void 0&&(oe=i.getUniformBlockIndex($,R.name),i.uniformBlockBinding($,oe,oe),X.set(R,oe))}function Z(R,$,X){const ie=c.get($).get(R);l[ie]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,X),l[ie]=X)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},Q=null,j={},d={},l={},p=new WeakMap,_=[],S=null,m=!1,f=null,M=null,w=null,y=null,A=null,T=null,g=null,E=new Ce(0,0,0),I=0,C=!1,N=null,F=null,V=null,L=null,z=null,Y.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:Pe,bindFramebuffer:at,drawBuffers:Ae,useProgram:Ye,setBlending:ut,setMaterial:ot,setFlipSided:ft,setCullFace:Ze,setLineWidth:Ct,setPolygonOffset:lt,setScissorTest:_t,activeTexture:Ut,bindTexture:Ft,unbindTexture:D,compressedTexImage2D:Yt,compressedTexImage3D:it,texImage2D:x,texImage3D:B,pixelStorei:J,getParameter:te,updateUBOMapping:q,uniformBlockBinding:Z,texStorage2D:De,texStorage3D:b,texSubImage2D:st,texSubImage3D:fe,compressedTexSubImage2D:xt,compressedTexSubImage3D:Re,scissor:se,viewport:ce,reset:ae}}function em(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap,h=new Set;let d;const p=new WeakMap,_=new Set,S=new FinalizationRegistry(b=>_.delete(b));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(b,x){return m?new OffscreenCanvas(b,x):Ps("canvas")}function M(b,x,B){let te=1;const J=De(b);if((J.width>B||J.height>B)&&(te=B/Math.max(J.width,J.height)),te<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const se=Math.floor(te*J.width),ce=Math.floor(te*J.height);d===void 0&&(d=f(se,ce));const q=x?f(se,ce):d;return q.width=se,q.height=ce,q.getContext("2d").drawImage(b,0,0,se,ce),Ie("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+se+"x"+ce+")."),q}else return"data"in b&&Ie("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function w(b){return b.generateMipmaps}function y(b){i.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(b,x,B,te,J,se=!1){if(b!==null){if(i[b]!==void 0)return i[b];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce;te&&(ce=e.get("EXT_texture_norm16"),ce||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=x;if(x===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8),B===i.UNSIGNED_SHORT&&ce&&(q=ce.R16_EXT),B===i.SHORT&&ce&&(q=ce.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),x===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8),B===i.UNSIGNED_SHORT&&ce&&(q=ce.RG16_EXT),B===i.SHORT&&ce&&(q=ce.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&ce&&(q=ce.RGB16_EXT),B===i.SHORT&&ce&&(q=ce.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){const Z=se?Cs:We.getTransfer(J);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=Z===et?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ce&&(q=ce.RGBA16_EXT),B===i.SHORT&&ce&&(q=ce.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function g(b,x){let B;return b?x===null||x===mn||x===Si?B=i.DEPTH24_STENCIL8:x===hn?B=i.DEPTH32F_STENCIL8:x===zi&&(B=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===mn||x===Si?B=i.DEPTH_COMPONENT24:x===hn?B=i.DEPTH_COMPONENT32F:x===zi&&(B=i.DEPTH_COMPONENT16),B}function E(b,x){return w(b)===!0||b.isFramebufferTexture&&b.minFilter!==Rt&&b.minFilter!==zt?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function I(b){const x=new WeakRef(b);n.get(b).__ref=x,_.add(x),S.register(b,x,x)}function C(b){const x=n.get(b).__ref;x!==void 0&&(_.delete(x),S.unregister(x))}function N(b){V(b.target)}function F(b){L(b.target)}function V(b){b.removeEventListener("dispose",N),C(b),K(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&h.delete(b)}function L(b){b.removeEventListener("dispose",F),C(b),ee(b)}function z(){for(const b of _){const x=b.deref();x!==void 0&&(x.isRenderTarget===!0?L(x):V(x))}_.clear(),h.clear()}function K(b){const x=n.get(b);if(x.__webglInit===void 0)return;const B=b.source,te=p.get(B);if(te){const J=te[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&k(b),Object.keys(te).length===0&&p.delete(B)}n.remove(b)}function k(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const B=b.source,te=p.get(B);delete te[x.__cacheKey],a.memory.textures--}function ee(b){const x=n.get(b);x.__depthDisposeCallback&&x.__depthDisposeCallback();const B=b.depthTexture;if(B&&B.renderTarget===b&&V(B),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let se=0;se<x.__webglFramebuffer[J].length;se++)i.deleteFramebuffer(x.__webglFramebuffer[J][se]);else i.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)i.deleteFramebuffer(x.__webglFramebuffer[J]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const te=b.textures;for(let J=0,se=te.length;J<se;J++){const ce=n.get(te[J]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(te[J])}n.remove(b)}let W=0;function Q(){W=0}function j(){return W}function ve(b){W=b}function Le(){const b=W;return b>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,b}function Y(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.mipmapsAutoUpdate),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function de(b,x){const B=n.get(b);if(b.isVideoTexture&&xt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const te=b.image;if(te===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(B,b,x);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function xe(b,x){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){ot(B,b,x);return}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Te(b,x){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){ot(B,b,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function ue(b,x){const B=n.get(b);if(b.version>0&&B.__version!==b.version){ft(B,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const Pe={[Gt]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[yr]:i.MIRRORED_REPEAT},at={[Rt]:i.NEAREST,[ic]:i.NEAREST_MIPMAP_NEAREST,[Yi]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[Hs]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},Ae={[oc]:i.NEVER,[el]:i.ALWAYS,[lc]:i.LESS,[Qo]:i.LEQUAL,[cc]:i.EQUAL,[jo]:i.GEQUAL,[hc]:i.GREATER,[dc]:i.NOTEQUAL};function Ye(b,x){if(x.type===hn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===zt||x.magFilter===Hs||x.magFilter===Yi||x.magFilter===kn||x.minFilter===zt||x.minFilter===Hs||x.minFilter===Yi||x.minFilter===kn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Pe[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Pe[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Pe[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,at[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,at[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ae[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Rt||x.minFilter!==Yi&&x.minFilter!==kn||x.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ke(b,x){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",N),I(x));const te=x.source;let J=p.get(te);J===void 0&&(J={},p.set(te,J));const se=Y(x);if(se!==b.__cacheKey){J[se]===void 0&&(J[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[se].usedTimes++;const ce=J[b.__cacheKey];ce!==void 0&&(J[b.__cacheKey].usedTimes--,ce.usedTimes===0&&k(x)),b.__cacheKey=se,b.__webglTexture=J[se].texture}return B}function Ge(b,x,B){return Math.floor(Math.floor(b/B)/x)}function ut(b,x,B,te){const se=b.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,te,x.data);else{se.sort((R,$)=>R.start-$.start);let ce=0;for(let R=1;R<se.length;R++){const $=se[ce],X=se[R],oe=$.start+$.count,ie=Ge(X.start,x.width,4),re=Ge($.start,x.width,4);X.start<=oe+1&&ie===re&&Ge(X.start+X.count-1,x.width,4)===ie?$.count=Math.max($.count,X.start+X.count-$.start):(++ce,se[ce]=X)}se.length=ce+1;const q=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,$=se.length;R<$;R++){const X=se[R],oe=Math.floor(X.start/4),ie=Math.ceil(X.count/4),re=oe%x.width,be=Math.floor(oe/x.width),Oe=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,be),t.texSubImage2D(i.TEXTURE_2D,0,re,be,Oe,ne,B,te,x.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function ot(b,x,B){let te=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=i.TEXTURE_3D);const J=Ke(b,x),se=x.source;t.bindTexture(te,b.__webglTexture,i.TEXTURE0+B);const ce=n.get(se);if(se.version!==ce.__version||J===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ne=We.getPrimaries(We.workingColorSpace),we=x.colorSpace===Gn?null:We.getPrimaries(x.colorSpace),Fe=x.colorSpace===Gn||ne===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=M(x.image,!1,s.maxTextureSize);Z=Re(x,Z);const ae=r.convert(x.format,x.colorSpace),R=r.convert(x.type);let $=T(x.internalFormat,ae,R,x.normalized,x.colorSpace,x.isVideoTexture);Ye(te,x);let X;const oe=x.mipmaps,ie=x.isVideoTexture!==!0,re=ce.__version===void 0||J===!0,be=se.dataReady,Oe=E(x,Z);if(x.isDepthTexture)$=g(x.format===zn,x.type),re&&(ie?t.texStorage2D(i.TEXTURE_2D,1,$,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,$,Z.width,Z.height,0,ae,R,null));else if(x.isDataTexture)if(oe.length>0){ie&&re&&t.texStorage2D(i.TEXTURE_2D,Oe,$,oe[0].width,oe[0].height);for(let ne=0,we=oe.length;ne<we;ne++)X=oe[ne],ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,R,X.data):t.texImage2D(i.TEXTURE_2D,ne,$,X.width,X.height,0,ae,R,X.data);x.generateMipmaps=!1}else ie?(re&&t.texStorage2D(i.TEXTURE_2D,Oe,$,Z.width,Z.height),be&&ut(x,Z,ae,R)):t.texImage2D(i.TEXTURE_2D,0,$,Z.width,Z.height,0,ae,R,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ie&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,$,oe[0].width,oe[0].height,Z.depth);for(let ne=0,we=oe.length;ne<we;ne++)if(X=oe[ne],x.format!==dn)if(ae!==null)if(ie){if(be)if(x.layerUpdates.size>0){const Fe=ho(X.width,X.height,x.format,x.type);for(const me of x.layerUpdates){const je=X.data.subarray(me*Fe/X.data.BYTES_PER_ELEMENT,(me+1)*Fe/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,me,X.width,X.height,1,ae,je)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,Z.depth,ae,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,$,X.width,X.height,Z.depth,0,X.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,Z.depth,ae,R,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,$,X.width,X.height,Z.depth,0,ae,R,X.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(i.TEXTURE_2D,Oe,$,oe[0].width,oe[0].height);for(let ne=0,we=oe.length;ne<we;ne++)X=oe[ne],x.format!==dn?ae!==null?ie?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,$,X.width,X.height,0,X.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,R,X.data):t.texImage2D(i.TEXTURE_2D,ne,$,X.width,X.height,0,ae,R,X.data)}else if(x.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,$,Z.width,Z.height,Z.depth),be)if(x.layerUpdates.size>0){const ne=ho(Z.width,Z.height,x.format,x.type);for(const we of x.layerUpdates){const Fe=Z.data.subarray(we*ne/Z.data.BYTES_PER_ELEMENT,(we+1)*ne/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,Z.width,Z.height,1,ae,R,Fe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ae,R,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$,Z.width,Z.height,Z.depth,0,ae,R,Z.data);else if(x.isData3DTexture)ie?(re&&t.texStorage3D(i.TEXTURE_3D,Oe,$,Z.width,Z.height,Z.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ae,R,Z.data)):t.texImage3D(i.TEXTURE_3D,0,$,Z.width,Z.height,Z.depth,0,ae,R,Z.data);else if(x.isFramebufferTexture){if(re)if(ie)t.texStorage2D(i.TEXTURE_2D,Oe,$,Z.width,Z.height);else{let ne=Z.width,we=Z.height;for(let Fe=0;Fe<Oe;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,$,ne,we,0,ae,R,null),ne>>=1,we>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),Z.parentNode!==ne){ne.appendChild(Z),h.add(x),ne.onpaint=we=>{const Fe=we.changedElements;for(const me of h)Fe.includes(me.image)&&(me.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{const Fe=i.RGBA,me=i.RGBA,je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,me,je,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&re){const ne=De(oe[0]);t.texStorage2D(i.TEXTURE_2D,Oe,$,ne.width,ne.height)}for(let ne=0,we=oe.length;ne<we;ne++)X=oe[ne],ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae,R,X):t.texImage2D(i.TEXTURE_2D,ne,$,ae,R,X);x.generateMipmaps=!1}else if(ie){if(re){const ne=De(Z);t.texStorage2D(i.TEXTURE_2D,Oe,$,ne.width,ne.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,R,Z)}else t.texImage2D(i.TEXTURE_2D,0,$,ae,R,Z);w(x)&&x.mipmapsAutoUpdate===!0&&y(te),ce.__version=se.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ft(b,x,B){if(x.image.length!==6)return;const te=Ke(b,x),J=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const se=n.get(J);if(J.version!==se.__version||te===!0){t.activeTexture(i.TEXTURE0+B);const ce=We.getPrimaries(We.workingColorSpace),q=x.colorSpace===Gn?null:We.getPrimaries(x.colorSpace),Z=x.colorSpace===Gn||ce===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ae=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,$=[];for(let me=0;me<6;me++)!ae&&!R?$[me]=M(x.image[me],!0,s.maxCubemapSize):$[me]=R?x.image[me].image:x.image[me],$[me]=Re(x,$[me]);const X=$[0],oe=r.convert(x.format,x.colorSpace),ie=r.convert(x.type);let re=T(x.internalFormat,oe,ie,x.normalized,x.colorSpace);const be=x.isVideoTexture!==!0,Oe=se.__version===void 0||te===!0,ne=J.dataReady;let we=E(x,X);Ye(i.TEXTURE_CUBE_MAP,x);let Fe;if(x.isDepthTexture){if(re=g(x.format===zn,x.type),Oe)if(be)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,re,X.width,X.height);else for(let me=0;me<6;me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,re,X.width,X.height,0,oe,ie,null)}else if(ae){be&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,re,X.width,X.height);for(let me=0;me<6;me++){Fe=$[me].mipmaps;for(let je=0;je<Fe.length;je++){const Mt=Fe[je];x.format!==dn?oe!==null?be?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,Mt.width,Mt.height,oe,Mt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,re,Mt.width,Mt.height,0,Mt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,Mt.width,Mt.height,oe,ie,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,re,Mt.width,Mt.height,0,oe,ie,Mt.data)}}}else{if(Fe=x.mipmaps,be&&Oe){Fe.length>0&&we++;const me=De($[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,re,me.width,me.height)}for(let me=0;me<6;me++)if(R){be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,$[me].width,$[me].height,oe,ie,$[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,re,$[me].width,$[me].height,0,oe,ie,$[me].data);for(let je=0;je<Fe.length;je++){const Pn=Fe[je].image[me].image;be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,Pn.width,Pn.height,oe,ie,Pn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,re,Pn.width,Pn.height,0,oe,ie,Pn.data)}}else{be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,oe,ie,$[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,re,oe,ie,$[me]);for(let je=0;je<Fe.length;je++){const Mt=Fe[je];be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,oe,ie,Mt.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,re,oe,ie,Mt.image[me])}}}w(x)&&x.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),se.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Ze(b,x,B,te,J,se){const ce=r.convert(B.format,B.colorSpace),q=r.convert(B.type),Z=T(B.internalFormat,ce,q,B.normalized,B.colorSpace),ae=n.get(x),R=n.get(B);if(R.__renderTarget=x,!ae.__hasExternalTextures){const $=Math.max(1,x.width>>se),X=Math.max(1,x.height>>se);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,se,Z,$,X,x.depth,0,ce,q,null):t.texImage2D(J,se,Z,$,X,0,ce,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),fe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,R.__webglTexture,0,st(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,J,R.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(b,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const te=x.depthTexture,J=te&&te.isDepthTexture?te.type:null,se=g(x.stencilBuffer,J),ce=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(x),se,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(x),se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,se,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,b)}else{const te=x.textures;for(let J=0;J<te.length;J++){const se=te[J],ce=r.convert(se.format,se.colorSpace),q=r.convert(se.type),Z=T(se.internalFormat,ce,q,se.normalized,se.colorSpace);fe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(x),Z,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(x),Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(b,x,B){const te=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(x.depthTexture);J.__renderTarget=x;const se=te?x.depthTexture.image[0]:x.depthTexture.image;(!J.__webglTexture||se.width!==x.width||se.height!==x.height)&&(se.width=x.width,se.height=x.height,x.depthTexture.needsUpdate=!0),te?ue(x.depthTexture,0):de(x.depthTexture,0);const ce=J.__webglTexture,q=st(x),Z=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ae=x.depthTexture.format===zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Hn)fe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Z,ce,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Z,ce,0);else if(x.depthTexture.format===zn)fe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Z,ce,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Z,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(b){const x=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const te=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",J)};te.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=te}if(b.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let te=0;te<6;te++)lt(x.__webglFramebuffer[te],b,te);else b.texture.mipmaps.length>0?lt(x.__webglFramebuffer[0],b,0):lt(x.__webglFramebuffer,b,0);else if(B){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=i.createRenderbuffer(),Ct(x.__webglDepthbuffer[te],b,!1);else{const J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,se)}}else if(b.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ct(x.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(b,x,B){const te=n.get(b);x!==void 0&&Ze(te.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&_t(b)}function Ft(b){const x=b.texture,B=n.get(b),te=n.get(x);b.addEventListener("dispose",F),I(b);const J=b.textures,se=b.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=x.version,a.memory.textures++),se){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[q][Z]=i.createFramebuffer()}else B.__webglFramebuffer[q]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)B.__webglFramebuffer[q]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ce)for(let q=0,Z=J.length;q<Z;q++){const ae=n.get(J[q]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&fe(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<J.length;q++){const Z=J[q];B.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[q]);const ae=r.convert(Z.format,Z.colorSpace),R=r.convert(Z.type),$=T(Z.internalFormat,ae,R,Z.normalized,Z.colorSpace,b.isXRRenderTarget===!0),X=st(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,$,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,B.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)Ze(B.__webglFramebuffer[q][Z],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else Ze(B.__webglFramebuffer[q],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);w(x)?y(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let q=0,Z=J.length;q<Z;q++){const ae=J[q],R=n.get(ae);let $=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&($=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,R.__webglTexture),Ye($,ae),Ze(B.__webglFramebuffer,b,ae,i.COLOR_ATTACHMENT0+q,$,0),w(ae)&&y($)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(q=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,te.__webglTexture),Ye(q,x),x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)Ze(B.__webglFramebuffer[Z],b,x,i.COLOR_ATTACHMENT0,q,Z);else Ze(B.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,q,0);w(x)?y(q):x.mipmaps.length>0&&i.texParameteri(q,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}b.depthBuffer&&_t(b)}function D(b){const x=b.textures;for(let B=0,te=x.length;B<te;B++){const J=x[B];if(w(J)&&J.mipmapsAutoUpdate===!0){const se=A(b),ce=n.get(J).__webglTexture;t.bindTexture(se,ce),y(se),t.unbindTexture()}}}const Yt=[];function it(b){if(b.samples>0){if(fe(b)===!1){const x=b.textures,B=b.width,te=b.height;let J=i.COLOR_BUFFER_BIT;const se=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(b),q=x.length>1;if(q)for(let ae=0;ae<x.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const R=n.get(x[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,B,te,0,0,B,te,J,i.NEAREST),l===!0&&(Yt.length=0,Yt.push(i.COLOR_ATTACHMENT0+ae),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&Yt.push(se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let ae=0;ae<x.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const R=n.get(x[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function st(b){return Math.min(s.maxSamples,b.samples)}function fe(b){const x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function xt(b){const x=a.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function Re(b,x){const B=b.colorSpace,te=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Rs&&B!==Gn&&(We.getTransfer(B)===et?(te!==dn||J!==qt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",B)),x}function De(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Le,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=ve,this.setTexture2D=de,this.setTexture2DArray=xe,this.setTexture3D=Te,this.setTextureCube=ue,this.rebindTextures=Ut,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=fe,this.dispose=z}function tm(i,e){function t(n,s=Gn){let r;const a=We.getTransfer(s);if(n===qt)return i.UNSIGNED_BYTE;if(n===oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===la)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ko)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xo)return i.BYTE;if(n===qo)return i.SHORT;if(n===zi)return i.UNSIGNED_SHORT;if(n===aa)return i.INT;if(n===mn)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===Zo)return i.ALPHA;if(n===$o)return i.RGB;if(n===dn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===zn)return i.DEPTH_STENCIL;if(n===Jo)return i.RED;if(n===ca)return i.RED_INTEGER;if(n===jn)return i.RG;if(n===ha)return i.RG_INTEGER;if(n===da)return i.RGBA_INTEGER;if(n===Ss||n===Ms||n===Es||n===ys)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ss)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ss)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===br||n===Tr||n===Ar||n===wr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===br)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ar)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rr||n===Cr||n===Pr||n===Lr||n===Ir||n===As||n===Dr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rr||n===Cr)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lr)return r.COMPRESSED_R11_EAC;if(n===Ir)return r.COMPRESSED_SIGNED_R11_EAC;if(n===As)return r.COMPRESSED_RG11_EAC;if(n===Dr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nr||n===Ur||n===Fr||n===Or||n===Br||n===Gr||n===kr||n===zr||n===Hr||n===Vr||n===Wr||n===Xr||n===qr||n===Yr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ur)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Or)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Br)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kr||n===Zr||n===$r)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Kr)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$r)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jr||n===Qr||n===ws||n===jr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ws)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const nm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,im=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new pl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ei({vertexShader:nm,fragmentShader:im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pe(new kt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rm extends ti{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new sm,f={},M=t.getContextAttributes();let w=null,y=null;const A=[],T=[],g=new Ve;let E=null,I=null;const C=new $t;C.viewport=new ht;const N=new $t;N.viewport=new ht;const F=[C,N],V=new gh;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let de=A[Y];return de===void 0&&(de=new $s,A[Y]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Y){let de=A[Y];return de===void 0&&(de=new $s,A[Y]=de),de.getGripSpace()},this.getHand=function(Y){let de=A[Y];return de===void 0&&(de=new $s,A[Y]=de),de.getHandSpace()};function K(Y){const de=T.indexOf(Y.inputSource);if(de===-1)return;const xe=A[de];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,c||a),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ee);for(let Y=0;Y<A.length;Y++){const de=T[Y];de!==null&&(T[Y]=null,A[Y].disconnect(de))}L=null,z=null,m.reset();for(const Y in f)delete f[Y];if(e.setRenderTarget(w),p=null,d=null,h=null,s=null,y=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(g.width,g.height,!1),I!==null){const Y=I.camera;Y.fov=I.fov,Y.zoom=I.zoom,Y.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ee),M.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Te=null,ue=null;M.depth&&(ue=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=M.stencil?zn:Hn,Te=M.stencil?Si:mn);const Pe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new fn(d.textureWidth,d.textureHeight,{format:dn,type:qt,depthTexture:new Ei(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new fn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(Y){for(let de=0;de<Y.removed.length;de++){const xe=Y.removed[de],Te=T.indexOf(xe);Te>=0&&(T[Te]=null,A[Te].disconnect(xe))}for(let de=0;de<Y.added.length;de++){const xe=Y.added[de];let Te=T.indexOf(xe);if(Te===-1){for(let Pe=0;Pe<A.length;Pe++)if(Pe>=T.length){T.push(xe),Te=Pe;break}else if(T[Pe]===null){T[Pe]=xe,Te=Pe;break}if(Te===-1)break}const ue=A[Te];ue&&ue.connect(xe)}}function W(Y,de){de===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(de.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let de=Y.near,xe=Y.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),V.near=N.near=C.near=de,V.far=N.far=C.far=xe,(L!==V.near||z!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,z=V.far),V.layers.mask=Y.layers.mask|6,C.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;const Te=Y.parent,ue=V.cameras;W(V,Te);for(let Pe=0;Pe<ue.length;Pe++)W(ue[Pe],Te);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&Y.isPerspectiveCamera&&(I={camera:Y,fov:Y.fov,zoom:Y.zoom}),Q(Y,V,Te)};function Q(Y,de,xe){xe===null?Y.matrix.copy(de.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(de.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(de.projectionMatrix),Y.projectionMatrixInverse.copy(de.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Mi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Y){return f[Y]};let j=null;function ve(Y,de){if(u=de.getViewerPose(c||a),_=de,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Te=!1;xe.length!==V.cameras.length&&(V.cameras.length=0,Te=!0);for(let Ae=0;Ae<xe.length;Ae++){const Ye=xe[Ae];let Ke=null;if(p!==null)Ke=p.getViewport(Ye);else{const ut=h.getViewSubImage(d,Ye);Ke=ut.viewport,Ae===0&&(e.setRenderTargetTextures(y,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(y))}let Ge=F[Ae];Ge===void 0&&(Ge=new $t,Ge.layers.enable(Ae),Ge.viewport=new ht,F[Ae]=Ge),Ge.matrix.fromArray(Ye.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ye.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ae===0&&(V.matrix.copy(Ge.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Te===!0&&V.cameras.push(Ge)}const ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){h=n.getBinding();const Ae=h.getDepthInformation(xe[0]);Ae&&Ae.isValid&&Ae.texture&&m.init(Ae,s.renderState)}if(ue&&ue.includes("camera-access")&&S){e.state.unbindTexture(),h=n.getBinding();for(let Ae=0;Ae<xe.length;Ae++){const Ye=xe[Ae].camera;if(Ye){let Ke=f[Ye];Ke||(Ke=new pl,f[Ye]=Ke);const Ge=h.getCameraImage(Ye);Ke.sourceTexture=Ge}}}}for(let xe=0;xe<A.length;xe++){const Te=T[xe],ue=A[xe];Te!==null&&ue!==void 0&&ue.update(Te,de,c||a)}j&&j(Y,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),_=null}const Le=new vl;Le.setAnimationLoop(ve),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}}const am=new rt,Cl=new Ne;Cl.set(-1,0,0,0,1,0,0,0,1);function om(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ml(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,w,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),S(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ht&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ht&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),w=M.envMap,y=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(am.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cl),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lm(i,e,t,n){let s={},r={};function a(M,w){const y=w.program;n.uniformBlockBinding(M,y,s[M.id])}function o(M,w){let y=s[M.id];y===void 0&&(_(M),y=l(M),s[M.id]=y,M.addEventListener("dispose",m));const A=w.program;n.updateUBOMapping(M,A);const T=e.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){const w=i.createBuffer(),y=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,y,A),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(M){const w=s[M.id],y=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,g=y.length;T<g;T++){const E=y[T];if(Array.isArray(E))for(let I=0,C=E.length;I<C;I++)u(E[I],T,I,A);else u(E,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,w,y,A){if(d(M,w,y,A)===!0){const T=M.__offset,g=M.value;if(Array.isArray(g)){let E=0;for(let I=0;I<g.length;I++){const C=g[I],N=S(C,!0);h(C,M.__data,E),E+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else h(g,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function h(M,w,y){typeof M=="number"||typeof M=="boolean"?w[y]=M:M.isMatrix3?(w[y]=M.elements[0],w[y+1]=M.elements[1],w[y+2]=M.elements[2],w[y+3]=0,w[y+4]=M.elements[3],w[y+5]=M.elements[4],w[y+6]=M.elements[5],w[y+7]=0,w[y+8]=M.elements[6],w[y+9]=M.elements[7],w[y+10]=M.elements[8],w[y+11]=0):ArrayBuffer.isView(M)?w.set(M.subarray(0,w.length-y),y):M.toArray(w,y)}function d(M,w,y,A){const T=M.value,g=w+"_"+y;if(Array.isArray(T)){A[g]===void 0&&(A[g]=[]);const E=A[g];let I=!1;for(let C=0;C<T.length;C++)p(T[C],E,C)===!0&&(I=!0);return I}return p(T,A,g)}function p(M,w,y){if(w[y]===void 0)return typeof M=="number"||typeof M=="boolean"?w[y]=M:ArrayBuffer.isView(M)?w[y]=M.slice():w[y]=M.clone(),!0;{const A=w[y];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return w[y]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function _(M){const w=M.uniforms;let y=0;const A=16;for(let g=0,E=w.length;g<E;g++){const I=Array.isArray(w[g])?w[g]:[w[g]];for(let C=0,N=I.length;C<N;C++){const F=I[C],V=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(w[g])||Array.isArray(F.value);let z=y;for(let k=0,ee=V.length;k<ee;k++){const W=V[k],Q=S(W,L),j=y%A,ve=j%Q.boundary,Le=j+ve;y+=ve,Le!==0&&A-Le<Q.storage&&(y+=A-Le),k===0&&(z=y),y+=Q.storage}const K=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new K((y-z)/Float32Array.BYTES_PER_ELEMENT),F.__offset=z}}const T=y%A;return T>0&&(y+=A-T),M.__size=y,M.__cache={},this}function S(M,w){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=16,y.storage=48):M.isMatrix4?(y.boundary=16,y.storage=64):M.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",M),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(M){const w=M.target;w.removeEventListener("dispose",m),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:f}}const cm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ln=null;function hm(){return ln===null&&(ln=new jc(cm,16,16,jn,gn),ln.name="DFG_LUT",ln.minFilter=zt,ln.magFilter=zt,ln.wrapS=Tn,ln.wrapT=Tn,ln.generateMipmaps=!1,ln.needsUpdate=!0),ln}class dm{constructor(e={}){const{canvas:t=pc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=qt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=p,m=new Set([da,ha,ca]),f=new Set([qt,mn,zi,Si,oa,la]),M=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let A=null,T=null;const g=[],E=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1,F=null,V=null,L=null,z=null;this._outputColorSpace=Zt;let K=0,k=0,ee=null,W=-1,Q=null;const j=new ht,ve=new ht;let Le=null;const Y=new Ce(0);let de=0,xe=t.width,Te=t.height,ue=1,Pe=null,at=null;const Ae=new ht(0,0,xe,Te),Ye=new ht(0,0,xe,Te);let Ke=!1;const Ge=new Vi,ut=new ga;let ot=!1,ft=!1;const Ze=new rt,Ct=new U,lt=new ht,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Ft(){return ee===null?ue:1}let D=n;function Yt(v,P){return t.getContext(v,P)}let it,st,fe,xt,Re,De,b,x,B,te,J,se,ce,q,Z,ae,R,$,X,oe,ie,re,be;try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sa}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",me,!1),D===null){const P="webgl2";if(D=Yt(P,v),D===null)throw Yt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(v){throw t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Je("WebGLRenderer: "+v.message),v}function Oe(){it=new pf(D),it.init(),ie=new tm(D,it),st=new nf(D,it,e,ie),fe=new jp(D,it),st.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),V=D.createFramebuffer(),L=D.createFramebuffer(),z=D.createFramebuffer(),xt=new _f(D),Re=new Gp,De=new em(D,it,fe,Re,st,ie,xt),b=new ff(C),x=new xh(D),re=new ef(D,x),B=new mf(D,x,xt,re),te=new vf(D,B,x,re,xt),$=new xf(D,st,De),Z=new sf(Re),J=new Bp(C,b,it,st,re,Z),se=new om(C,Re),ce=new zp,q=new Yp(it),R=new ju(C,b,fe,te,_,l),ae=new Qp(C,te,st),be=new lm(D,xt,st,fe),X=new tf(D,it,xt),oe=new gf(D,it,xt),xt.programs=J.programs,C.capabilities=st,C.extensions=it,C.properties=Re,C.renderLists=ce,C.shadowMap=ae,C.state=fe,C.info=xt}S!==qt&&(I=new Mf(S,t.width,t.height,o,s,r));const ne=new rm(C,D);this.xr=ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=it.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=it.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(v){v!==void 0&&(ue=v,this.setSize(xe,Te,!1))},this.getSize=function(v){return v.set(xe,Te)},this.setSize=function(v,P,H=!0){if(ne.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=v,Te=P,t.width=Math.floor(v*ue),t.height=Math.floor(P*ue),H===!0&&(t.style.width=v+"px",t.style.height=P+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(xe*ue,Te*ue).floor()},this.setDrawingBufferSize=function(v,P,H){xe=v,Te=P,ue=H,t.width=Math.floor(v*H),t.height=Math.floor(P*H),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(S===qt){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(j)},this.getViewport=function(v){return v.copy(Ae)},this.setViewport=function(v,P,H,O){v.isVector4?Ae.set(v.x,v.y,v.z,v.w):Ae.set(v,P,H,O),fe.viewport(j.copy(Ae).multiplyScalar(Ft()).round())},this.getScissor=function(v){return v.copy(Ye)},this.setScissor=function(v,P,H,O){v.isVector4?Ye.set(v.x,v.y,v.z,v.w):Ye.set(v,P,H,O),fe.scissor(ve.copy(Ye).multiplyScalar(Ft()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(v){fe.setScissorTest(Ke=v)},this.setOpaqueSort=function(v){Pe=v},this.setTransparentSort=function(v){at=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,H=!0){let O=0;if(v){let G=!1;if(ee!==null){const he=ee.texture.format;G=m.has(he)}if(G){const he=ee.texture.type,Se=f.has(he),le=R.getClearColor(),_e=R.getClearAlpha(),ye=le.r,Ue=le.g,ze=le.b;Se?(M[0]=ye,M[1]=Ue,M[2]=ze,M[3]=_e,D.clearBufferuiv(D.COLOR,0,M)):(w[0]=ye,w[1]=Ue,w[2]=ze,w[3]=_e,D.clearBufferiv(D.COLOR,0,w))}else O|=D.COLOR_BUFFER_BIT}P&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),F=v},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),R.dispose(),ce.dispose(),q.dispose(),De.dispose(),Re.dispose(),b.dispose(),te.dispose(),B.dispose(),re.dispose(),be.dispose(),J.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Ta),ne.removeEventListener("sessionend",Aa),Wn.stop()};function we(v){v.preventDefault(),ka("WebGLRenderer: Context Lost."),N=!0}function Fe(){ka("WebGLRenderer: Context Restored."),N=!1;const v=xt.autoReset,P=ae.enabled,H=ae.autoUpdate,O=ae.needsUpdate,G=ae.type;Oe(),xt.autoReset=v,ae.enabled=P,ae.autoUpdate=H,ae.needsUpdate=O,ae.type=G}function me(v){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function je(v){const P=v.target;P.removeEventListener("dispose",je),Mt(P)}function Mt(v){Pn(v),Re.remove(v)}function Pn(v){const P=Re.get(v).programs;P!==void 0&&(P.forEach(function(H){J.releaseProgram(H)}),v.isShaderMaterial&&J.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,H,O,G,he){P===null&&(P=_t);const Se=G.isMesh&&G.matrixWorld.determinantAffine()<0,le=Il(v,P,H,O,G);fe.setMaterial(O,Se);let _e=H.index,ye=1;if(O.wireframe===!0){if(_e=B.getWireframeAttribute(H),_e===void 0)return;ye=2}const Ue=H.drawRange,ze=H.attributes.position;let Me=Ue.start*ye,He=(Ue.start+Ue.count)*ye;he!==null&&(Me=Math.max(Me,he.start*ye),He=Math.min(He,(he.start+he.count)*ye)),_e!==null?(Me=Math.max(Me,0),He=Math.min(He,_e.count)):ze!=null&&(Me=Math.max(Me,0),He=Math.min(He,ze.count));const pt=He-Me;if(pt<0||pt===1/0)return;re.setup(G,O,le,H,_e);let nt,tt=X;if(_e!==null&&(nt=x.get(_e),tt=oe,tt.setIndex(nt)),G.isMesh)O.wireframe===!0?(fe.setLineWidth(O.wireframeLinewidth*Ft()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(G.isLine){let Pt=O.linewidth;Pt===void 0&&(Pt=1),fe.setLineWidth(Pt*Ft()),G.isLineSegments?tt.setMode(D.LINES):G.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else G.isPoints?tt.setMode(D.POINTS):G.isSprite&&tt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(it.get("WEBGL_multi_draw"))tt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Pt=G._multiDrawStarts,Ee=G._multiDrawCounts,Ot=G._multiDrawCount,$e=_e?x.get(_e).bytesPerElement:1,Xn=Re.get(O).currentProgram.getUniforms();for(let Lt=0;Lt<Ot;Lt++)Xn.setValue(D,"_gl_DrawID",Lt),tt.render(Pt[Lt]/$e,Ee[Lt])}else if(G.isInstancedMesh)tt.renderInstances(Me,pt,G.count);else if(H.isInstancedBufferGeometry){const Pt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ee=Math.min(H.instanceCount,Pt);tt.renderInstances(Me,pt,Ee)}else tt.render(Me,pt)};function ba(v,P,H,O){F!==null&&v.isNodeMaterial&&F.setObject(O,v),ot===!0&&Z.setState(v,H,!1),v.transparent===!0&&v.side===bn&&v.forceSinglePass===!1?(v.side=Ht,v.needsUpdate=!0,Ri(v,P,O),v.side=Qn,v.needsUpdate=!0,Ri(v,P,O),v.side=bn):Ri(v,P,O)}this.compile=function(v,P,H=null){H===null&&(H=v),F!==null&&F.renderStart(v,P,H),T=q.get(H),T.init(P),E.push(T),H.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),v!==H&&v.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),ft=this.localClippingEnabled,ot=Z.init(this.clippingPlanes,ft),ot===!0&&Z.setGlobalState(this.clippingPlanes,P),F!==null&&ae.render(T.state.shadowsArray,H,P);const O=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const he=G.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const le=he[Se];ba(le,H,P,G),O.add(le)}else ba(he,H,P,G),O.add(he)}),T=E.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(v,P,H=null){const O=this.compile(v,P,H);return new Promise(G=>{function he(){if(O.forEach(function(Se){const _e=Re.get(Se).currentProgram;(_e===void 0||_e.isReady())&&O.delete(Se)}),O.size===0){G(v);return}setTimeout(he,10)}it.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Bs=null;function Pl(v){Bs&&Bs(v)}function Ta(){Wn.stop()}function Aa(){Wn.start()}const Wn=new vl;Wn.setAnimationLoop(Pl),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(v){Bs=v,ne.setAnimationLoop(v),v===null?Wn.stop():Wn.start()},ne.addEventListener("sessionstart",Ta),ne.addEventListener("sessionend",Aa),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(v,P);const H=ne.enabled===!0&&ne.isPresenting===!0,O=I!==null&&(ee===null||H)&&I.begin(C,ee);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(P),P=ne.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,P,ee),T=q.get(v,E.length),T.init(P),T.state.textureUnits=De.getTextureUnits(),E.push(T),Ze.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?ut.setFromArrayCamera(P):Ge.setFromProjectionMatrix(Ze,an,P.reversedDepth),ft=this.localClippingEnabled,ot=Z.init(this.clippingPlanes,ft),A=ce.get(v,g.length),A.init(),g.push(A),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&Gs(Se,P,-1/0,C.sortObjects)}Gs(v,P,0,C.sortObjects),A.finish(),F!==null&&F.updateLights(T.state.lightsArray),C.sortObjects===!0&&A.sort(Pe,at),Ut=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ut&&R.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),ot===!0&&Z.beginShadows();const G=T.state.shadowsArray;if(ae.render(G,v,P),ot===!0&&Z.endShadows(),(O&&I.hasRenderPass())===!1){const Se=A.opaque,le=A.transmissive;if(T.setupLights(),P.isArrayCamera){const _e=P.cameras;if(le.length>0)for(let ye=0,Ue=_e.length;ye<Ue;ye++){const ze=_e[ye];Ra(Se,le,v,ze)}Ut&&R.render(v);for(let ye=0,Ue=_e.length;ye<Ue;ye++){const ze=_e[ye];wa(A,v,ze,ze.viewport)}}else le.length>0&&Ra(Se,le,v,P),Ut&&R.render(v),wa(A,v,P)}ee!==null&&k===0&&(De.updateMultisampleRenderTarget(ee),De.updateRenderTargetMipmap(ee)),O&&I.end(C),v.isScene===!0&&v.onAfterRender(C,v,P),re.resetDefaultState(),W=-1,Q=null,E.pop(),E.length>0?(T=E[E.length-1],De.setTextureUnits(T.state.textureUnits),ot===!0&&Z.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,F!==null&&F.renderEnd()};function Gs(v,P,H,O){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){const Se=P.isArrayCamera?ut:Ge;if(!v.frustumCulled||v.intersectsFrustum(Se)){O&&lt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ze);const le=te.update(v),_e=v.material;_e.visible&&A.push(v,le,_e,H,lt.z,null,P)}}else if(v.isMesh||v.isLine||v.isPoints){const Se=P.isArrayCamera?ut:Ge;if(!v.frustumCulled||v.intersectsFrustum(Se)){const le=te.update(v),_e=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),lt.copy(v.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),lt.copy(le.boundingSphere.center)),lt.applyMatrix4(v.matrixWorld).applyMatrix4(Ze)),Array.isArray(_e)){const ye=le.groups;for(let Ue=0,ze=ye.length;Ue<ze;Ue++){const Me=ye[Ue],He=_e[Me.materialIndex];He&&He.visible&&A.push(v,le,He,H,lt.z,Me,P)}}else _e.visible&&A.push(v,le,_e,H,lt.z,null,P)}}}const he=v.children;for(let Se=0,le=he.length;Se<le;Se++)Gs(he[Se],P,H,O)}function wa(v,P,H,O){const{opaque:G,transmissive:he,transparent:Se}=v;T.setupLightsView(H),ot===!0&&Z.setGlobalState(C.clippingPlanes,H),O&&fe.viewport(j.copy(O)),G.length>0&&Xi(G,P,H),he.length>0&&Xi(he,P,H),Se.length>0&&Xi(Se,P,H),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Ra(v,P,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){const Me=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new fn(1,1,{generateMipmaps:!0,type:Me?gn:qt,minFilter:kn,samples:Math.max(4,st.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}const he=T.state.transmissionRenderTarget[O.id],Se=O.viewport||j;he.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);const le=C.getRenderTarget(),_e=C.getActiveCubeFace(),ye=C.getActiveMipmapLevel();C.setRenderTarget(he),C.getClearColor(Y),de=C.getClearAlpha(),de<1&&C.setClearColor(16777215,.5),C.clear(),Ut&&R.render(H);const Ue=C.toneMapping;C.toneMapping=Rn;const ze=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),ot===!0&&Z.setGlobalState(C.clippingPlanes,O),Xi(v,H,O),De.updateMultisampleRenderTarget(he),De.updateRenderTargetMipmap(he),it.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let He=0,pt=P.length;He<pt;He++){const nt=P[He],{object:tt,geometry:Pt,material:Ee,group:Ot}=nt;if(Ee.side===bn&&tt.layers.test(O.layers)){const $e=Ee.side;Ee.side=Ht,Ee.needsUpdate=!0,Ca(tt,H,O,Pt,Ee,Ot),Ee.side=$e,Ee.needsUpdate=!0,Me=!0}}Me===!0&&(De.updateMultisampleRenderTarget(he),De.updateRenderTargetMipmap(he))}C.setRenderTarget(le,_e,ye),C.setClearColor(Y,de),ze!==void 0&&(O.viewport=ze),C.toneMapping=Ue}function Xi(v,P,H){const O=P.isScene===!0?P.overrideMaterial:null;for(let G=0,he=v.length;G<he;G++){const Se=v[G],{object:le,geometry:_e,group:ye}=Se;let Ue=Se.material;Ue.allowOverride===!0&&O!==null&&(Ue=O),le.layers.test(H.layers)&&Ca(le,P,H,_e,Ue,ye)}}function Ca(v,P,H,O,G,he){F!==null&&G.isNodeMaterial&&F.setObject(v,G),v.onBeforeRender(C,P,H,O,G,he),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(C,P,H,O,v,he),G.transparent===!0&&G.side===bn&&G.forceSinglePass===!1?(G.side=Ht,G.needsUpdate=!0,C.renderBufferDirect(H,P,O,G,v,he),G.side=Qn,G.needsUpdate=!0,C.renderBufferDirect(H,P,O,G,v,he),G.side=bn):C.renderBufferDirect(H,P,O,G,v,he),v.onAfterRender(C,P,H,O,G,he)}function Pa(v){let P=0;for(const H of v)H.texture!==null&&P++;return P}function Ri(v,P,H){P.isScene!==!0&&(P=_t);const O=Re.get(v),G=T.state.lights,he=T.state.shadowsArray,Se=G.state.version,le=J.getParameters(v,G.state,he,P,H,T.state.lightProbeGridArray),_e=J.getProgramCacheKey(le);let ye=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;const Ue=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=b.get(v.envMap||O.environment,Ue),O.envMapRotation=O.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,ye===void 0&&(v.addEventListener("dispose",je),ye=new Map,O.programs=ye,O.programVariants=new Map);let ze=ye.get(_e);if(ze!==void 0){if(O.currentProgram===ze&&O.lightsStateVersion===Se)return Ia(v,le),ze}else le.uniforms=J.getUniforms(v),F!==null&&v.isNodeMaterial&&F.build(v,H,le),v.onBeforeCompile(le,C),ze=J.acquireProgram(le,_e),ye.set(_e,ze),O.uniforms=le.uniforms;const Me=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Me.clippingPlanes=Z.uniform),Ia(v,le),O.needsLights=Nl(v),O.lightsStateVersion=Se,O.needsLights&&(Me.ambientLightColor.value=G.state.ambient,Me.lightProbe.value=G.state.probe,Me.sunLights.value=G.state.sun,Me.sunLightShadows.value=G.state.sunShadow,Me.directionalLights.value=G.state.directional,Me.directionalLightShadows.value=G.state.directionalShadow,Me.spotLights.value=G.state.spot,Me.spotLightShadows.value=G.state.spotShadow,Me.rectAreaLights.value=G.state.rectArea,Me.ltc_1.value=G.state.rectAreaLTC1,Me.ltc_2.value=G.state.rectAreaLTC2,Me.pointLights.value=G.state.point,Me.pointLightShadows.value=G.state.pointShadow,Me.hemisphereLights.value=G.state.hemi,Me.sunShadowMatrix.value=G.state.sunShadowMatrix,Me.sunShadowCascade.value=G.state.sunShadowCascade,Me.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Me.spotLightMatrix.value=G.state.spotLightMatrix,Me.spotLightMap.value=G.state.spotLightMap,Me.pointShadowMatrix.value=G.state.pointShadowMatrix),O.numLightProbeGrids=Pa(T.state.lightProbeGridArray),O.currentProgram=ze,O.uniformsList=null,ze}function Ll(v,P,H,O,G){const he=Re.get(v),Se=he.currentProgram.id+","+O+","+G;let le=he.programVariants.get(Se);return le===void 0?(le=Ri(v,P,H),he.programVariants.set(Se,le)):(he.currentProgram=le,he.uniformsList=null,he.outputColorSpace=O,he.toneMapping=G),le}function La(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=bs.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Ia(v,P){const H=Re.get(v);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function Il(v,P,H,O,G){P.isScene!==!0&&(P=_t),De.resetTextureUnits();const he=P.fog,Se=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,le=ee===null?C.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:We.workingColorSpace,_e=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,ye=b.get(O.envMap||Se,_e),Ue=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Me=!!H.morphAttributes.position,He=!!H.morphAttributes.normal,pt=!!H.morphAttributes.color;let nt=Rn;O.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(nt=C.toneMapping);const tt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Pt=tt!==void 0?tt.length:0,Ee=Re.get(O),Ot=T.state.lights;if(ot===!0&&(ft===!0||v!==Q)){const ct=v===Q&&O.id===W;Z.setState(O,v,ct)}let $e=!1,Xn=!1;O.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==Ot.state.version||G.isBatchedMesh&&Ee.batching===!1||!G.isBatchedMesh&&Ee.batching===!0||G.isBatchedMesh&&Ee.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ee.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ee.instancing===!1||!G.isInstancedMesh&&Ee.instancing===!0||G.isSkinnedMesh&&Ee.skinning===!1||!G.isSkinnedMesh&&Ee.skinning===!0||G.isInstancedMesh&&Ee.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ee.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ee.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ee.instancingMorph===!1&&G.morphTexture!==null||Ee.envMap!==ye||O.fog===!0&&Ee.fog!==he||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Z.numPlanes||Ee.numIntersection!==Z.numIntersection)||Ee.vertexAlphas!==Ue||Ee.vertexTangents!==ze||Ee.morphTargets!==Me||Ee.morphNormals!==He||Ee.morphColors!==pt||Ee.morphTargetsCount!==Pt||Ee.numLightProbeGrids!==Pa(T.state.lightProbeGridArray)?$e=!0:(Ee.outputColorSpace!==le||Ee.toneMapping!==nt)&&(Xn=!0):($e=!0,Ee.__version=O.version);let Lt=Ee.currentProgram;($e===!0||Xn===!0)&&(Lt=Xn===!0?Ll(O,P,G,le,nt):Ri(O,P,G),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Lt,Ee));let qi=!1,Ln=!1,qn=!1;const qe=Lt.getUniforms(),wt=Ee.uniforms;if(fe.useProgram(Lt.program)&&(qi=!0,Ln=!0,qn=!0),O.id!==W&&(W=O.id,Ln=!0),qi||Q!==v){fe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),qe.setValue(D,"projectionMatrix",v.projectionMatrix),qe.setValue(D,"viewMatrix",v.matrixWorldInverse);const Et=qe.map.cameraPosition;Et!==void 0&&Et.setValue(D,Ct.setFromMatrixPosition(v.matrixWorld)),st.logarithmicDepthBuffer&&qe.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&qe.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Ln=!0,qn=!0)}if(Ee.needsLights&&(Ot.state.sunShadowMap.length>0&&qe.setValue(D,"sunShadowMap",Ot.state.sunShadowMap,De),Ot.state.directionalShadowMap.length>0&&qe.setValue(D,"directionalShadowMap",Ot.state.directionalShadowMap,De),Ot.state.spotShadowMap.length>0&&qe.setValue(D,"spotShadowMap",Ot.state.spotShadowMap,De),Ot.state.pointShadowMap.length>0&&qe.setValue(D,"pointShadowMap",Ot.state.pointShadowMap,De)),G.isSkinnedMesh){qe.setOptional(D,G,"bindMatrix"),qe.setOptional(D,G,"bindMatrixInverse");const ct=G.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),qe.setValue(D,"boneTexture",ct.boneTexture,De))}G.isBatchedMesh&&(qe.setOptional(D,G,"batchingTexture"),qe.setValue(D,"batchingTexture",G._matricesTexture,De),qe.setOptional(D,G,"batchingIdTexture"),qe.setValue(D,"batchingIdTexture",G._indirectTexture,De),qe.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&qe.setValue(D,"batchingColorTexture",G._colorsTexture,De));const jt=H.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&$.update(G,H,Lt),(Ln||Ee.receiveShadow!==G.receiveShadow)&&(Ee.receiveShadow=G.receiveShadow,qe.setValue(D,"receiveShadow",G.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(wt.envMapIntensity.value=P.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=hm()),Ln){if(qe.setValue(D,"toneMappingExposure",C.toneMappingExposure),Ee.needsLights&&Dl(wt,qn),he&&O.fog===!0&&se.refreshFogUniforms(wt,he),se.refreshMaterialUniforms(wt,O,ue,Te,T.state.transmissionRenderTarget[v.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){const ct=y;let Et=0;for(const _n of T.state.lightProbeGridArray)_n.texture!==null&&(ct.textures[Et]=_n.texture,ct.min[Et]=_n.boundingBox.min,ct.max[Et]=_n.boundingBox.max,ct.resolution[Et]=_n.resolution,Et++);for(const _n in ct)ct[_n].length=Et;wt.probesSH.value=ct.textures,wt.probesMin.value=ct.min,wt.probesMax.value=ct.max,wt.probesResolution.value=ct.resolution}bs.upload(D,La(Ee),wt,De)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(bs.upload(D,La(Ee),wt,De),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&qe.setValue(D,"center",G.center),qe.setValue(D,"modelViewMatrix",G.modelViewMatrix),qe.setValue(D,"normalMatrix",G.normalMatrix),qe.setValue(D,"modelMatrix",G.matrixWorld),O.uniformsGroups!==void 0){const ct=O.uniformsGroups;for(let Et=0,_n=ct.length;Et<_n;Et++){const Na=ct[Et];be.update(Na,Lt),be.bind(Na,Lt)}}return Lt}function Dl(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Nl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(v,P,H){const O=Re.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Re.get(v.texture).__webglTexture=P,Re.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){const H=Re.get(v);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,H=0){ee=v,K=P,k=H;let O=null,G=!1,he=!1;if(v){const le=Re.get(v);if(le.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(D.FRAMEBUFFER,le.__webglFramebuffer),j.copy(v.viewport),ve.copy(v.scissor),Le=v.scissorTest,fe.viewport(j),fe.scissor(ve),fe.setScissorTest(Le),W=-1;return}else if(le.__webglFramebuffer===void 0)De.setupRenderTarget(v);else if(le.__hasExternalTextures)De.rebindTextures(v,Re.get(v.texture).__webglTexture,Re.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ue=v.depthTexture;if(le.__boundDepthTexture!==Ue){if(Ue!==null&&Re.has(Ue)&&(v.width!==Ue.image.width||v.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(v)}}const _e=v.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(he=!0);const ye=Re.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ye[P])?O=ye[P][H]:O=ye[P],G=!0):v.samples>0&&De.useMultisampledRTT(v)===!1?O=Re.get(v).__webglMultisampledFramebuffer:Array.isArray(ye)?O=ye[H]:O=ye,j.copy(v.viewport),ve.copy(v.scissor),Le=v.scissorTest}else j.copy(Ae).multiplyScalar(ue).floor(),ve.copy(Ye).multiplyScalar(ue).floor(),Le=Ke;if(H!==0&&(O=V),fe.bindFramebuffer(D.FRAMEBUFFER,O)&&fe.drawBuffers(v,O),fe.viewport(j),fe.scissor(ve),fe.setScissorTest(Le),G){const le=Re.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,le.__webglTexture,H)}else if(he){const le=P;for(let _e=0;_e<v.textures.length;_e++){const ye=Re.get(v.textures[_e]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+_e,ye.__webglTexture,H,le)}}else if(v!==null&&H!==0){const le=Re.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,le.__webglTexture,H)}W=-1};function Da(v){const P=Re.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=st.textureFormatReadable(v.format),P.__typeReadable=st.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,H,O,G,he,Se,le=0){if(!(v&&v.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Se!==void 0&&(_e=_e[Se],Array.isArray(_e)&&(_e=_e[0])),_e){fe.bindFramebuffer(D.FRAMEBUFFER,_e);try{const ye=v.textures[le],Ue=ye.format,ze=ye.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+le);const Me=Da(ye);if(Me.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-O&&H>=0&&H<=v.height-G&&D.readPixels(P,H,O,G,ie.convert(Ue),ie.convert(ze),he)}finally{const ye=ee!==null?Re.get(ee).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(v,P,H,O,G,he,Se,le=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Se!==void 0&&(_e=_e[Se],Array.isArray(_e)&&(_e=_e[0])),_e)if(P>=0&&P<=v.width-O&&H>=0&&H<=v.height-G){fe.bindFramebuffer(D.FRAMEBUFFER,_e);const ye=v.textures[le],Ue=ye.format,ze=ye.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+le);const Me=Da(ye);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,He),D.bufferData(D.PIXEL_PACK_BUFFER,he.byteLength,D.STREAM_READ),D.readPixels(P,H,O,G,ie.convert(Ue),ie.convert(ze),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const pt=ee!==null?Re.get(ee).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,pt);const nt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await mc(D,nt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,He),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,he),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(He),D.deleteSync(nt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,H=0){const O=Math.pow(2,-H),G=Math.floor(v.image.width*O),he=Math.floor(v.image.height*O),Se=P!==null?P.x:0,le=P!==null?P.y:0;De.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,Se,le,G,he),fe.unbindTexture()},this.copyTextureToTexture=function(v,P,H=null,O=null,G=0,he=0){let Se,le,_e,ye,Ue,ze,Me,He,pt;const nt=v.isCompressedTexture?v.mipmaps[he]:v.image;if(H!==null)Se=H.max.x-H.min.x,le=H.max.y-H.min.y,_e=H.isBox3?H.max.z-H.min.z:1,ye=H.min.x,Ue=H.min.y,ze=H.isBox3?H.min.z:0;else{const qe=Math.pow(2,-G);Se=Math.floor(nt.width*qe),le=Math.floor(nt.height*qe),v.isDataArrayTexture?_e=nt.depth:v.isData3DTexture?_e=Math.floor(nt.depth*qe):_e=1,ye=0,Ue=0,ze=0}O!==null?(Me=O.x,He=O.y,pt=O.z):(Me=0,He=0,pt=0);const tt=ie.convert(P.format),Pt=ie.convert(P.type);let Ee;P.isData3DTexture?(De.setTexture3D(P,0),Ee=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(De.setTexture2DArray(P,0),Ee=D.TEXTURE_2D_ARRAY):(De.setTexture2D(P,0),Ee=D.TEXTURE_2D),fe.activeTexture(D.TEXTURE0),fe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),fe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),fe.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);const Ot=fe.getParameter(D.UNPACK_ROW_LENGTH),$e=fe.getParameter(D.UNPACK_IMAGE_HEIGHT),Xn=fe.getParameter(D.UNPACK_SKIP_PIXELS),Lt=fe.getParameter(D.UNPACK_SKIP_ROWS),qi=fe.getParameter(D.UNPACK_SKIP_IMAGES);fe.pixelStorei(D.UNPACK_ROW_LENGTH,nt.width),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt.height),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),fe.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,ze);const Ln=v.isDataArrayTexture||v.isData3DTexture,qn=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){const qe=Re.get(v),wt=Re.get(P),jt=Re.get(qe.__renderTarget),ct=Re.get(wt.__renderTarget);fe.bindFramebuffer(D.READ_FRAMEBUFFER,jt.__webglFramebuffer),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Et=0;Et<_e;Et++)Ln&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(v).__webglTexture,G,ze+Et),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(P).__webglTexture,he,pt+Et)),D.blitFramebuffer(ye,Ue,ye+Se,Ue+le,Me,He,Me+Se,He+le,D.DEPTH_BUFFER_BIT,D.NEAREST);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||Re.has(v)){const qe=Re.get(v),wt=Re.get(P);fe.bindFramebuffer(D.READ_FRAMEBUFFER,L),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,z);for(let jt=0;jt<_e;jt++)Ln?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qe.__webglTexture,G,ze+jt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qe.__webglTexture,G),qn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.__webglTexture,he,pt+jt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wt.__webglTexture,he),G!==0?D.blitFramebuffer(ye,Ue,ye+Se,Ue+le,Me,He,Me+Se,He+le,D.COLOR_BUFFER_BIT,D.NEAREST):qn?D.copyTexSubImage3D(Ee,he,Me,He,pt+jt,ye,Ue,Se,le):D.copyTexSubImage2D(Ee,he,Me,He,ye,Ue,Se,le);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else qn?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Ee,he,Me,He,pt,Se,le,_e,tt,Pt,nt.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,he,Me,He,pt,Se,le,_e,tt,nt.data):D.texSubImage3D(Ee,he,Me,He,pt,Se,le,_e,tt,Pt,nt):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,he,Me,He,Se,le,tt,Pt,nt.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,he,Me,He,nt.width,nt.height,tt,nt.data):D.texSubImage2D(D.TEXTURE_2D,he,Me,He,Se,le,tt,Pt,nt);fe.pixelStorei(D.UNPACK_ROW_LENGTH,Ot),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$e),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,Xn),fe.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,qi),he===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&D.generateMipmap(Ee),fe.unbindTexture()},this.initRenderTarget=function(v){Re.get(v).__webglFramebuffer===void 0&&De.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?De.setTextureCube(v,0):v.isData3DTexture?De.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?De.setTexture2DArray(v,0):De.setTexture2D(v,0),fe.unbindTexture()},this.resetState=function(){K=0,k=0,ee=null,fe.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}const un=[-6,-2,2,6],On=18,Ts=4,yn=On+Ts*2,_s=60,um=16,fm=70,Jt={ENDLESS:"endless",TIME_TRIAL:"time_trial",TRAFFIC_CHALLENGE:"traffic_challenge"},Qe={MENU:"menu",GARAGE:"garage",PLAYING:"playing",PAUSED:"paused",GAME_OVER:"game_over"},Jn={CHASE:"chase",CLOSE:"close",HOOD:"hood"},pm=[{id:"phantom_gt",name:"Phantom GT",tier:"Class C - Sports",description:"Balanced aerodynamics and reliable handling. The perfect highway starter.",price:0,unlocked:!0,color:"#00f0ff",stats:{topSpeed:180,acceleration:65,handling:70,braking:60,armor:75},dimensions:{width:1.85,height:1.25,length:4.2},bodyStyle:"sports"},{id:"apex_turbo",name:"Apex Turbo",tier:"Class B - Track Special",description:"High-revving twin turbo with rapid throttle response and sharp cornering.",price:3500,unlocked:!1,color:"#ff5500",stats:{topSpeed:215,acceleration:82,handling:85,braking:75,armor:65},dimensions:{width:1.9,height:1.2,length:4.3},bodyStyle:"coupe"},{id:"venom_rs",name:"Venom RS",tier:"Class A - Supercar",description:"V10 monster designed for extreme straight-line velocity and highway dominance.",price:8e3,unlocked:!1,color:"#e60050",stats:{topSpeed:250,acceleration:90,handling:80,braking:85,armor:60},dimensions:{width:1.98,height:1.15,length:4.5},bodyStyle:"supercar"},{id:"thunder_truck",name:"Thunder Truck",tier:"Class Heavy - Muscle Rig",description:"Reinforced steel chassis that shrugs off collisions with ease.",price:12e3,unlocked:!1,color:"#ffbb00",stats:{topSpeed:195,acceleration:70,handling:55,braking:70,armor:100},dimensions:{width:2.1,height:1.6,length:4.8},bodyStyle:"truck"},{id:"cyber_vortex",name:"Cyber Vortex",tier:"Class S - Prototype",description:"Next-gen experimental hypercar equipped with electromagnetic boost thrust.",price:25e3,unlocked:!1,color:"#9900ff",stats:{topSpeed:290,acceleration:98,handling:95,braking:92,armor:85},dimensions:{width:2.05,height:1.1,length:4.6},bodyStyle:"hypercar"}],pr=[{type:"sedan",name:"City Sedan",colorList:["#2c3e50","#7f8c8d","#bdc3c7","#34495e","#16a085"],dimensions:{width:1.8,height:1.3,length:4.1},speedRange:[75,105],weight:40},{type:"suv",name:"Family SUV",colorList:["#27ae60","#d35400","#2980b9","#8e44ad","#34495e"],dimensions:{width:1.95,height:1.6,length:4.5},speedRange:[70,95],weight:25},{type:"sports",name:"Speedster",colorList:["#c0392b","#f39c12","#1abc9c","#e74c3c"],dimensions:{width:1.85,height:1.18,length:4.2},speedRange:[95,125],weight:15},{type:"truck",name:"Freight Hauler",colorList:["#e67e22","#34495e","#7f8c8d","#95a5a6"],dimensions:{width:2.3,height:2.4,length:8.5},speedRange:[55,75],weight:20}],Do={LOW:{shadows:!1,particles:"low",pixelRatio:1,antiAlias:!1,sceneryDetail:"low"},MEDIUM:{shadows:!0,particles:"medium",pixelRatio:1.25,antiAlias:!0,sceneryDetail:"medium"},HIGH:{shadows:!0,particles:"high",pixelRatio:1.5,antiAlias:!0,sceneryDetail:"high"}};class mm{constructor(){this.currentState=Qe.MENU,this.currentMode=Jt.ENDLESS,this.listeners=[]}getState(){return this.currentState}getMode(){return this.currentMode}setState(e,t={}){if(this.currentState===e)return;const n=this.currentState;this.currentState=e;for(const s of this.listeners)s(this.currentState,n,t)}setMode(e){this.currentMode=e}onStateChange(e){this.listeners.push(e)}}class gm{constructor(e,t){this.update=e,this.render=t,this.isRunning=!1,this.lastTime=0,this.rafId=null,this.boundTick=this.tick.bind(this)}start(){this.isRunning||(this.isRunning=!0,this.lastTime=performance.now(),this.rafId=requestAnimationFrame(this.boundTick))}stop(){this.isRunning=!1,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}tick(e){if(!this.isRunning)return;const t=(e-this.lastTime)/1e3,n=Math.min(.08,Math.max(.001,t));this.lastTime=e,this.update(n),this.render(),this.rafId=requestAnimationFrame(this.boundTick)}}const bt={COINS:"vr3d_coins",HIGH_SCORES:"vr3d_high_scores",BEST_DISTANCES:"vr3d_best_distances",UNLOCKED_CARS:"vr3d_unlocked_cars",SELECTED_CAR:"vr3d_selected_car",CAR_COLORS:"vr3d_car_colors",SETTINGS:"vr3d_settings",TUTORIAL_SEEN:"vr3d_tutorial_seen"},xs={soundVolume:.8,musicVolume:.6,graphicsQuality:"HIGH",cameraMode:"chase",touchControls:"auto"};class _m{constructor(){this.isAvailable=this.checkStorageAvailability()}checkStorageAvailability(){try{const e="__vr3d_storage_test__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch{return console.warn("StorageManager: localStorage not available, using in-memory fallback."),!1}}getCoins(){if(!this.isAvailable)return 0;try{const e=parseInt(localStorage.getItem(bt.COINS),10);return isNaN(e)?0:Math.max(0,e)}catch{return 0}}addCoins(e){if(typeof e!="number"||e<=0)return this.getCoins();const n=this.getCoins()+Math.floor(e);return this.setCoins(n),n}spendCoins(e){if(typeof e!="number"||e<=0)return!1;const t=this.getCoins();return t<e?!1:(this.setCoins(t-Math.floor(e)),!0)}setCoins(e){if(this.isAvailable)try{localStorage.setItem(bt.COINS,Math.max(0,Math.floor(e)).toString())}catch(t){console.error("Failed to set coins:",t)}}getHighScores(){if(!this.isAvailable)return{endless:0,time_trial:0,traffic_challenge:0};try{const e=localStorage.getItem(bt.HIGH_SCORES);if(!e)return{endless:0,time_trial:0,traffic_challenge:0};const t=JSON.parse(e);return{endless:t.endless||0,time_trial:t.time_trial||0,traffic_challenge:t.traffic_challenge||0}}catch{return{endless:0,time_trial:0,traffic_challenge:0}}}saveHighScore(e,t){if(!this.isAvailable)return!1;try{const n=this.getHighScores(),s=n[e]||0;if(t>s)return n[e]=Math.floor(t),localStorage.setItem(bt.HIGH_SCORES,JSON.stringify(n)),!0}catch(n){console.error("Failed to save high score:",n)}return!1}getBestDistance(e="endless"){if(!this.isAvailable)return 0;try{const t=localStorage.getItem(bt.BEST_DISTANCES);return t&&JSON.parse(t)[e]||0}catch{return 0}}saveBestDistance(e,t){if(this.isAvailable)try{const n=localStorage.getItem(bt.BEST_DISTANCES),s=n?JSON.parse(n):{},r=s[e]||0;t>r&&(s[e]=Math.floor(t),localStorage.setItem(bt.BEST_DISTANCES,JSON.stringify(s)))}catch(n){console.error("Failed to save best distance:",n)}}getUnlockedCars(){if(!this.isAvailable)return["phantom_gt"];try{const e=localStorage.getItem(bt.UNLOCKED_CARS);if(!e)return["phantom_gt"];const t=JSON.parse(e);return Array.isArray(t)&&t.includes("phantom_gt")?t:["phantom_gt"]}catch{return["phantom_gt"]}}unlockCar(e){if(this.isAvailable)try{const t=this.getUnlockedCars();t.includes(e)||(t.push(e),localStorage.setItem(bt.UNLOCKED_CARS,JSON.stringify(t)))}catch(t){console.error("Failed to save unlocked car:",t)}}getSelectedCar(){if(!this.isAvailable)return"phantom_gt";try{return localStorage.getItem(bt.SELECTED_CAR)||"phantom_gt"}catch{return"phantom_gt"}}setSelectedCar(e){if(this.isAvailable)try{localStorage.setItem(bt.SELECTED_CAR,e)}catch(t){console.error("Failed to set selected car:",t)}}getCustomColor(e){if(!this.isAvailable)return null;try{const t=localStorage.getItem(bt.CAR_COLORS);return t&&JSON.parse(t)[e]||null}catch{return null}}setCustomColor(e,t){if(this.isAvailable)try{const n=localStorage.getItem(bt.CAR_COLORS),s=n?JSON.parse(n):{};s[e]=t,localStorage.setItem(bt.CAR_COLORS,JSON.stringify(s))}catch(n){console.error("Failed to set car color:",n)}}getSettings(){if(!this.isAvailable)return{...xs};try{const e=localStorage.getItem(bt.SETTINGS);return e?{...xs,...JSON.parse(e)}:{...xs}}catch{return{...xs}}}saveSettings(e){if(this.isAvailable)try{const n={...this.getSettings(),...e};localStorage.setItem(bt.SETTINGS,JSON.stringify(n))}catch(t){console.error("Failed to save settings:",t)}}hasSeenTutorial(){if(!this.isAvailable)return!1;try{return localStorage.getItem(bt.TUTORIAL_SEEN)==="true"}catch{return!1}}setSeenTutorial(e=!0){if(this.isAvailable)try{localStorage.setItem(bt.TUTORIAL_SEEN,e?"true":"false")}catch(t){console.error("Failed to set tutorial seen:",t)}}}class xm{constructor(e){this.storage=e;const t=this.storage.getSettings();this.sfxVolume=t.soundVolume!==void 0?t.soundVolume:.8,this.musicVolume=t.musicVolume!==void 0?t.musicVolume:.6,this.isMuted=!1,this.ctx=null,this.isInitialized=!1,this.engineOsc1=null,this.engineOsc2=null,this.engineSub=null,this.engineFilter=null,this.engineGain=null,this.isEngineRunning=!1,this.tireNoise=null,this.tireFilter=null,this.tireGain=null,this.isMusicPlaying=!1,this.musicTimer=null,this.musicBeat=0,this.musicGain=null,this.sfxMasterGain=null}ensureContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return console.warn("AudioManager: Web Audio API not supported in this browser."),!1;this.ctx=new e,this.sfxMasterGain=this.ctx.createGain(),this.sfxMasterGain.gain.setValueAtTime(this.isMuted?0:this.sfxVolume,this.ctx.currentTime),this.sfxMasterGain.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.setValueAtTime(this.isMuted?0:this.musicVolume,this.ctx.currentTime),this.musicGain.connect(this.ctx.destination),this.isInitialized=!0}return this.ctx.state==="suspended"&&this.ctx.resume().catch(e=>console.warn("Could not resume audio:",e)),!0}setSfxVolume(e){this.sfxVolume=Math.max(0,Math.min(1,e)),this.sfxMasterGain&&this.ctx&&!this.isMuted&&this.sfxMasterGain.gain.setTargetAtTime(this.sfxVolume,this.ctx.currentTime,.05)}setMusicVolume(e){this.musicVolume=Math.max(0,Math.min(1,e)),this.musicGain&&this.ctx&&!this.isMuted&&this.musicGain.gain.setTargetAtTime(this.musicVolume,this.ctx.currentTime,.05)}toggleMute(){if(this.isMuted=!this.isMuted,this.ctx){const e=this.isMuted?0:this.sfxVolume,t=this.isMuted?0:this.musicVolume;this.sfxMasterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.05),this.musicGain.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}return this.isMuted}startEngine(){if(!(!this.ensureContext()||this.isEngineRunning))try{const e=this.ctx.currentTime;this.engineOsc1=this.ctx.createOscillator(),this.engineOsc1.type="sawtooth",this.engineOsc1.frequency.setValueAtTime(45,e),this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="triangle",this.engineOsc2.frequency.setValueAtTime(90,e),this.engineSub=this.ctx.createOscillator(),this.engineSub.type="sine",this.engineSub.frequency.setValueAtTime(30,e),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(250,e),this.engineFilter.Q.setValueAtTime(2.5,e),this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.15,e),this.engineOsc1.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineSub.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.sfxMasterGain),this.engineOsc1.start(),this.engineOsc2.start(),this.engineSub.start(),this.isEngineRunning=!0}catch(e){console.warn("Engine sound init error:",e)}}updateEngine(e,t,n,s){if(!(!this.isEngineRunning||!this.ctx))try{const r=this.ctx.currentTime,a=Math.max(0,Math.min(1.2,e/t)),l=42+a*5%1*55+a*40+(s?30:0);this.engineOsc1.frequency.setTargetAtTime(l,r,.05),this.engineOsc2.frequency.setTargetAtTime(l*2,r,.05),this.engineSub.frequency.setTargetAtTime(l*.5,r,.05);const c=220+a*900+(n?250:0)+(s?500:0);this.engineFilter.frequency.setTargetAtTime(c,r,.08);const u=.12+a*.18+(n?.05:0)+(s?.08:0);this.engineGain.gain.setTargetAtTime(u,r,.05)}catch{}}stopEngine(){if(!(!this.isEngineRunning||!this.ctx))try{const e=this.ctx.currentTime;this.engineGain&&this.engineGain.gain.setTargetAtTime(0,e,.05),setTimeout(()=>{try{this.engineOsc1&&this.engineOsc1.stop(),this.engineOsc2&&this.engineOsc2.stop(),this.engineSub&&this.engineSub.stop()}catch{}this.isEngineRunning=!1},100)}catch{this.isEngineRunning=!1}}setTireScreech(e,t=1){if(!this.ensureContext())return;const n=this.ctx.currentTime;if(e){if(!this.tireNoise){const r=this.ctx.sampleRate*2,a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),o=a.getChannelData(0);for(let c=0;c<r;c++)o[c]=Math.random()*2-1;const l=this.ctx.createBufferSource();l.buffer=a,l.loop=!0,this.tireFilter=this.ctx.createBiquadFilter(),this.tireFilter.type="bandpass",this.tireFilter.frequency.setValueAtTime(1400,n),this.tireFilter.Q.setValueAtTime(3.5,n),this.tireGain=this.ctx.createGain(),this.tireGain.gain.setValueAtTime(0,n),l.connect(this.tireFilter),this.tireFilter.connect(this.tireGain),this.tireGain.connect(this.sfxMasterGain),l.start(),this.tireNoise=l}const s=Math.min(.25,.18*t);this.tireGain.gain.setTargetAtTime(s,n,.05),this.tireFilter.frequency.setTargetAtTime(1200+t*600,n,.05)}else this.tireGain&&this.tireGain.gain.setTargetAtTime(0,n,.08)}playCoinSound(){if(this.ensureContext())try{const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(987.77,e),n.gain.setValueAtTime(.22,e),n.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(n),n.connect(this.sfxMasterGain),t.start(e),t.stop(e+.18);const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(1318.51,e+.08),r.gain.setValueAtTime(.25,e+.08),r.gain.exponentialRampToValueAtTime(.001,e+.35),s.connect(r),r.connect(this.sfxMasterGain),s.start(e+.08),s.stop(e+.35)}catch{}}playCollisionSound(e=1){if(this.ensureContext())try{const t=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(150,t),n.frequency.exponentialRampToValueAtTime(30,t+.35),s.gain.setValueAtTime(.4*e,t),s.gain.exponentialRampToValueAtTime(.001,t+.38),n.connect(s),s.connect(this.sfxMasterGain),n.start(t),n.stop(t+.4);const r=this.ctx.sampleRate*.4,a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),o=a.getChannelData(0);for(let h=0;h<r;h++)o[h]=(Math.random()*2-1)*Math.exp(-h/(this.ctx.sampleRate*.12));const l=this.ctx.createBufferSource();l.buffer=a;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(1800,t),c.frequency.exponentialRampToValueAtTime(300,t+.4);const u=this.ctx.createGain();u.gain.setValueAtTime(.45*e,t),u.gain.exponentialRampToValueAtTime(.001,t+.4),l.connect(c),c.connect(u),u.connect(this.sfxMasterGain),l.start(t),l.stop(t+.4)}catch{}}playNearMissSound(){if(this.ensureContext())try{const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.createStereoPanner?this.ctx.createStereoPanner():null;t.type="triangle",t.frequency.setValueAtTime(450,e),t.frequency.exponentialRampToValueAtTime(180,e+.28),n.gain.setValueAtTime(.01,e),n.gain.linearRampToValueAtTime(.28,e+.1),n.gain.exponentialRampToValueAtTime(.001,e+.3),s?(s.pan.setValueAtTime(-.8,e),s.pan.linearRampToValueAtTime(.8,e+.3),t.connect(n),n.connect(s),s.connect(this.sfxMasterGain)):(t.connect(n),n.connect(this.sfxMasterGain)),t.start(e),t.stop(e+.3)}catch{}}playNitroSound(){if(this.ensureContext())try{const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(120,e),t.frequency.exponentialRampToValueAtTime(480,e+.4),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.001,e+.45);const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(600,e),s.Q.setValueAtTime(2,e),t.connect(s),s.connect(n),n.connect(this.sfxMasterGain),t.start(e),t.stop(e+.45)}catch{}}playButtonClick(){if(this.ensureContext())try{const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(400,e+.05),n.gain.setValueAtTime(.15,e),n.gain.exponentialRampToValueAtTime(.001,e+.05),t.connect(n),n.connect(this.sfxMasterGain),t.start(e),t.stop(e+.05)}catch{}}playCountdownBeep(e=!1){if(this.ensureContext())try{const t=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(e?880:440,t),s.gain.setValueAtTime(.3,t),s.gain.exponentialRampToValueAtTime(.001,t+(e?.45:.2)),n.connect(s),s.connect(this.sfxMasterGain),n.start(t),n.stop(t+(e?.45:.2))}catch{}}playGameOverStinger(){if(this.ensureContext())try{const e=this.ctx.currentTime;[329.63,293.66,261.63,220].forEach((n,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain(),o=e+s*.16;r.type="sawtooth",r.frequency.setValueAtTime(n,o);const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(600,o),a.gain.setValueAtTime(.2,o),a.gain.exponentialRampToValueAtTime(.001,o+.28),r.connect(l),l.connect(a),a.connect(this.sfxMasterGain),r.start(o),r.stop(o+.3)})}catch{}}startMusic(){if(!this.ensureContext()||this.isMusicPlaying)return;this.isMusicPlaying=!0,this.musicBeat=0;const t=60/128/4,n=[110,87.31,130.81,98],s=()=>{if(!this.isMusicPlaying||!this.ctx)return;const r=this.ctx.currentTime,a=this.musicBeat%16,o=Math.floor(this.musicBeat/16%4),l=n[o];if(a%4===0){const p=this.ctx.createOscillator(),_=this.ctx.createGain();p.type="sine",p.frequency.setValueAtTime(140,r),p.frequency.exponentialRampToValueAtTime(45,r+.08),_.gain.setValueAtTime(.35,r),_.gain.exponentialRampToValueAtTime(.001,r+.12),p.connect(_),_.connect(this.musicGain),p.start(r),p.stop(r+.12)}if(a===4||a===12){const p=this.ctx.createBufferSource(),_=Math.floor(this.ctx.sampleRate*.12),S=this.ctx.createBuffer(1,_,this.ctx.sampleRate),m=S.getChannelData(0);for(let w=0;w<_;w++)m[w]=Math.random()*2-1;p.buffer=S;const f=this.ctx.createBiquadFilter();f.type="highpass",f.frequency.setValueAtTime(800,r);const M=this.ctx.createGain();M.gain.setValueAtTime(.2,r),M.gain.exponentialRampToValueAtTime(.001,r+.12),p.connect(f),f.connect(M),M.connect(this.musicGain),p.start(r),p.stop(r+.12)}if(a%2===1||a%4===2){const p=this.ctx.createBufferSource(),_=Math.floor(this.ctx.sampleRate*.04),S=this.ctx.createBuffer(1,_,this.ctx.sampleRate),m=S.getChannelData(0);for(let w=0;w<_;w++)m[w]=Math.random()*2-1;p.buffer=S;const f=this.ctx.createBiquadFilter();f.type="highpass",f.frequency.setValueAtTime(7e3,r);const M=this.ctx.createGain();M.gain.setValueAtTime(.08,r),M.gain.exponentialRampToValueAtTime(.001,r+.04),p.connect(f),f.connect(M),M.connect(this.musicGain),p.start(r),p.stop(r+.04)}const c=a%2===0?1:2,u=this.ctx.createOscillator(),h=this.ctx.createGain();u.type="sawtooth",u.frequency.setValueAtTime(l*.5*c,r);const d=this.ctx.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(450,r),d.frequency.exponentialRampToValueAtTime(150,r+t*.9),h.gain.setValueAtTime(.2,r),h.gain.exponentialRampToValueAtTime(.01,r+t*.9),u.connect(d),d.connect(h),h.connect(this.musicGain),u.start(r),u.stop(r+t),this.musicBeat++,this.musicTimer=setTimeout(s,t*1e3)};s()}stopMusic(){this.isMusicPlaying=!1,this.musicTimer&&(clearTimeout(this.musicTimer),this.musicTimer=null)}}class vm{constructor(){this.keys={forward:!1,backward:!1,left:!1,right:!1,handbrake:!1,boost:!1},this.steerAxis=0,this.throttleAxis=0,this.actionPause=!1,this.actionCamera=!1,this.actionRestart=!1,this.onPauseCallback=null,this.onCameraCallback=null,this.initKeyboard(),this.initWindowListeners()}initKeyboard(){window.addEventListener("keydown",e=>{switch(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault(),e.code){case"KeyW":case"ArrowUp":this.keys.forward=!0;break;case"KeyS":case"ArrowDown":this.keys.backward=!0;break;case"KeyA":case"ArrowLeft":this.keys.left=!0;break;case"KeyD":case"ArrowRight":this.keys.right=!0;break;case"Space":this.keys.handbrake=!0;break;case"ShiftLeft":case"ShiftRight":case"KeyN":this.keys.boost=!0;break;case"Escape":case"KeyP":this.onPauseCallback&&this.onPauseCallback();break;case"KeyC":this.onCameraCallback&&this.onCameraCallback();break}this.updateAxes()}),window.addEventListener("keyup",e=>{switch(e.code){case"KeyW":case"ArrowUp":this.keys.forward=!1;break;case"KeyS":case"ArrowDown":this.keys.backward=!1;break;case"KeyA":case"ArrowLeft":this.keys.left=!1;break;case"KeyD":case"ArrowRight":this.keys.right=!1;break;case"Space":this.keys.handbrake=!1;break;case"ShiftLeft":case"ShiftRight":case"KeyN":this.keys.boost=!1;break}this.updateAxes()})}initWindowListeners(){window.addEventListener("blur",()=>{this.resetInputs()}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.resetInputs()})}updateAxes(){let e=0;this.keys.left&&(e-=1),this.keys.right&&(e+=1),this.steerAxis=e;let t=0;this.keys.forward&&(t+=1),this.keys.backward&&(t-=1),this.throttleAxis=t}resetInputs(){this.keys.forward=!1,this.keys.backward=!1,this.keys.left=!1,this.keys.right=!1,this.keys.handbrake=!1,this.keys.boost=!1,this.steerAxis=0,this.throttleAxis=0}bindTouchButton(e,t){if(!e)return;const n=r=>{r.preventDefault(),t==="left"&&(this.keys.left=!0),t==="right"&&(this.keys.right=!0),t==="gas"&&(this.keys.forward=!0),t==="brake"&&(this.keys.backward=!0),t==="nitro"&&(this.keys.boost=!0),this.updateAxes()},s=r=>{r.preventDefault(),t==="left"&&(this.keys.left=!1),t==="right"&&(this.keys.right=!1),t==="gas"&&(this.keys.forward=!1),t==="brake"&&(this.keys.backward=!1),t==="nitro"&&(this.keys.boost=!1),this.updateAxes()};e.addEventListener("touchstart",n,{passive:!1}),e.addEventListener("touchend",s,{passive:!1}),e.addEventListener("touchcancel",s,{passive:!1}),e.addEventListener("mousedown",n),e.addEventListener("mouseup",s),e.addEventListener("mouseleave",s)}}class Sm{constructor(){this.cache=new Map}getAsphaltTexture(){if(this.cache.has("asphalt"))return this.cache.get("asphalt");const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.fillStyle="#1c1f24",t.fillRect(0,0,512,512);const n=t.getImageData(0,0,512,512),s=n.data;for(let a=0;a<s.length;a+=4){const o=(Math.random()-.5)*35;s[a]=Math.min(255,Math.max(0,s[a]+o)),s[a+1]=Math.min(255,Math.max(0,s[a+1]+o)),s[a+2]=Math.min(255,Math.max(0,s[a+2]+o))}t.putImageData(n,0,0);for(let a=0;a<1500;a++){const o=Math.random()*512,l=Math.random()*512,c=Math.random()*1.5+.5,u=Math.floor(Math.random()*60+50);t.fillStyle=`rgb(${u},${u},${u+5})`,t.beginPath(),t.arc(o,l,c,0,Math.PI*2),t.fill()}t.fillStyle="rgba(10, 12, 15, 0.12)",t.fillRect(100,0,25,512),t.fillRect(145,0,25,512),t.fillRect(340,0,25,512),t.fillRect(385,0,25,512);const r=new sn(e);return r.wrapS=Gt,r.wrapT=Gt,r.repeat.set(2,8),this.cache.set("asphalt",r),r}getLaneDashTexture(){if(this.cache.has("lane_dash"))return this.cache.get("lane_dash");const e=document.createElement("canvas");e.width=64,e.height=256;const t=e.getContext("2d");t.clearRect(0,0,64,256),t.fillStyle="#ffffff",t.fillRect(16,20,32,140),t.fillStyle="rgba(255, 255, 255, 0.4)",t.fillRect(14,20,2,140),t.fillRect(48,20,2,140);const n=new sn(e);return n.wrapS=Gt,n.wrapT=Gt,n.repeat.set(1,4),this.cache.set("lane_dash",n),n}getRoadEdgeTexture(){if(this.cache.has("road_edge"))return this.cache.get("road_edge");const e=document.createElement("canvas");e.width=64,e.height=256;const t=e.getContext("2d");t.fillStyle="#ffd000",t.fillRect(20,0,24,256),t.fillStyle="#ffaa00",t.fillRect(22,0,4,256);const n=new sn(e);return n.wrapS=Gt,n.wrapT=Gt,n.repeat.set(1,4),this.cache.set("road_edge",n),n}getCurbTexture(){if(this.cache.has("curb"))return this.cache.get("curb");const e=document.createElement("canvas");e.width=64,e.height=128;const t=e.getContext("2d");t.fillStyle="#d32f2f",t.fillRect(0,0,64,64),t.fillStyle="#f5f5f5",t.fillRect(0,64,64,64);const n=new sn(e);return n.wrapS=Gt,n.wrapT=Gt,n.repeat.set(1,6),this.cache.set("curb",n),n}getGuardrailTexture(){if(this.cache.has("guardrail"))return this.cache.get("guardrail");const e=document.createElement("canvas");e.width=128,e.height=64;const t=e.getContext("2d");t.fillStyle="#8a959e",t.fillRect(0,0,128,64);const n=t.createLinearGradient(0,0,0,64);n.addColorStop(0,"#535c64"),n.addColorStop(.2,"#9ba7b0"),n.addColorStop(.4,"#c0ccd6"),n.addColorStop(.5,"#636c74"),n.addColorStop(.7,"#9ba7b0"),n.addColorStop(.9,"#c0ccd6"),n.addColorStop(1,"#535c64"),t.fillStyle=n,t.fillRect(0,0,128,64),t.fillStyle="#3a4147",t.beginPath(),t.arc(32,32,5,0,Math.PI*2),t.arc(96,32,5,0,Math.PI*2),t.fill();const s=new sn(e);return s.wrapS=Gt,s.wrapT=Gt,s.repeat.set(4,1),this.cache.set("guardrail",s),s}getBuildingTexture(e="modern"){const t=`building_${e}`;if(this.cache.has(t))return this.cache.get(t);const n=document.createElement("canvas");n.width=256,n.height=512;const s=n.getContext("2d");s.fillStyle=e==="cyber"?"#0d111a":"#141a24",s.fillRect(0,0,256,512);const r=8,a=24,o=20,l=12,c=12,u=8,h=8,d=16,p=["rgba(255, 230, 150, 0.85)","rgba(180, 230, 255, 0.85)","rgba(255, 120, 80, 0.75)","rgba(20, 30, 45, 0.95)","rgba(20, 30, 45, 0.95)","rgba(20, 30, 45, 0.95)"];for(let S=0;S<a;S++)for(let m=0;m<r;m++){const f=h+m*(o+c),M=d+S*(l+u),w=Math.floor(Math.random()*p.length);s.fillStyle=p[w],s.fillRect(f,M,o,l),s.strokeStyle="#080c12",s.lineWidth=1,s.strokeRect(f,M,o,l)}s.fillStyle="#0a0d14";for(let S=0;S<=r;S++)s.fillRect(h+S*(o+c)-3,0,3,512);const _=new sn(n);return _.wrapS=Gt,_.wrapT=Gt,this.cache.set(t,_),_}getHeadlightGlowTexture(){if(this.cache.has("headlight_glow"))return this.cache.get("headlight_glow");const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255, 255, 255, 1.0)"),n.addColorStop(.2,"rgba(220, 245, 255, 0.8)"),n.addColorStop(.5,"rgba(100, 200, 255, 0.3)"),n.addColorStop(1,"rgba(0, 150, 255, 0.0)"),t.fillStyle=n,t.fillRect(0,0,128,128);const s=new sn(e);return this.cache.set("headlight_glow",s),s}getTaillightGlowTexture(){if(this.cache.has("taillight_glow"))return this.cache.get("taillight_glow");const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255, 200, 200, 1.0)"),n.addColorStop(.25,"rgba(255, 30, 30, 0.8)"),n.addColorStop(.6,"rgba(200, 0, 0, 0.25)"),n.addColorStop(1,"rgba(120, 0, 0, 0.0)"),t.fillStyle=n,t.fillRect(0,0,128,128);const s=new sn(e);return this.cache.set("taillight_glow",s),s}getParticleTexture(){if(this.cache.has("particle"))return this.cache.get("particle");const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1.0)"),n.addColorStop(.3,"rgba(255, 255, 255, 0.7)"),n.addColorStop(.7,"rgba(255, 255, 255, 0.15)"),n.addColorStop(1,"rgba(255, 255, 255, 0.0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const s=new sn(e);return this.cache.set("particle",s),s}getCoinTexture(){if(this.cache.has("coin"))return this.cache.get("coin");const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(64,64,20,64,64,60);n.addColorStop(0,"#fff4a3"),n.addColorStop(.4,"#ffd700"),n.addColorStop(.8,"#d4af37"),n.addColorStop(1,"#996515"),t.fillStyle=n,t.beginPath(),t.arc(64,64,58,0,Math.PI*2),t.fill(),t.strokeStyle="#fff8b3",t.lineWidth=4,t.beginPath(),t.arc(64,64,48,0,Math.PI*2),t.stroke(),t.fillStyle="#664400",t.font="bold 52px Montserrat, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("V",64,66),t.fillStyle="#ffffff",t.fillText("V",63,64);const s=new sn(e);return this.cache.set("coin",s),s}}class Mm{constructor(e){this.textures=e,this.initSharedMaterials()}initSharedMaterials(){this.matTire=new dt({color:1579032,roughness:.9,metalness:.1}),this.matRim=new dt({color:13421772,roughness:.2,metalness:.9}),this.matGlass=new oh({color:1119781,roughness:.1,metalness:.9,transmission:.6,transparent:!0,opacity:.85}),this.matHeadlightOff=new dt({color:16777215,emissive:14545151,emissiveIntensity:.9,roughness:.2}),this.matTaillightOff=new dt({color:8912896,emissive:16711680,emissiveIntensity:.4,roughness:.3}),this.matCarbon=new dt({color:2236965,roughness:.4,metalness:.7}),this.matChrome=new dt({color:14540253,roughness:.15,metalness:.95})}createPlayerVehicle(e,t=null){const n=new Tt;n.name=`player_car_${e.id}`;const s=new Ce(t||e.color),r=new dt({color:s,roughness:.25,metalness:.75,envMapIntensity:1.2}),a=e.dimensions,o=a.length,l=a.width,c=a.height,u=new Xe(l*.95,.25,o*.96),h=new pe(u,this.matCarbon);h.position.y=.25,h.castShadow=!0,h.receiveShadow=!0,n.add(h);const d=new Tt,p=new Xe(l,c*.45,o),_=new pe(p,r);_.position.y=.45,_.castShadow=!0,_.receiveShadow=!0,d.add(_);const S=new Xe(l*.92,c*.25,o*.35),m=new pe(S,r);m.position.set(0,.58,-o*.26),m.rotation.x=.08,m.castShadow=!0,d.add(m);const f=new Xe(l*.85,.2,.2),M=new pe(f,this.matCarbon);M.position.set(0,.35,-o*.51),d.add(M);let w=o*.42,y=l*.82,A=c*.5;e.bodyStyle==="truck"&&(w=o*.45,y=l*.88,A=c*.65);const T=new Xe(y,A,w),g=new pe(T,r);g.position.set(0,.5+A*.5,o*.02),g.castShadow=!0,d.add(g);const E=new kt(y*.85,A*.8),I=new pe(E,this.matGlass);I.position.set(0,.5+A*.52,o*.02-w*.51),I.rotation.x=-.42,d.add(I);const C=new kt(y*.82,A*.75),N=new pe(C,this.matGlass);N.position.set(0,.5+A*.52,o*.02+w*.51),N.rotation.x=.42,N.rotation.y=Math.PI,d.add(N);const F=new kt(w*.8,A*.65),V=new pe(F,this.matGlass);V.position.set(-y*.505,.5+A*.48,o*.02),V.rotation.y=-Math.PI/2,d.add(V);const L=new pe(F,this.matGlass);if(L.position.set(y*.505,.5+A*.48,o*.02),L.rotation.y=Math.PI/2,d.add(L),e.bodyStyle==="supercar"||e.bodyStyle==="hypercar"){const ft=new Xe(.08,.35,.15),Ze=new pe(ft,this.matCarbon);Ze.position.set(-l*.35,.8,o*.44);const Ct=new pe(ft,this.matCarbon);Ct.position.set(l*.35,.8,o*.44),d.add(Ze),d.add(Ct);const lt=new Xe(l*1.05,.06,.35),_t=new pe(lt,this.matCarbon);_t.position.set(0,.98,o*.44),_t.rotation.x=-.1,d.add(_t);const Ut=new Xe(.12,.25,.6),Ft=new pe(Ut,this.matCarbon);Ft.position.set(-l*.49,.55,o*.1);const D=new pe(Ut,this.matCarbon);D.position.set(l*.49,.55,o*.1),d.add(Ft),d.add(D)}else if(e.bodyStyle==="sports"||e.bodyStyle==="coupe"){const ft=new Xe(l*.85,.08,.18),Ze=new pe(ft,this.matCarbon);Ze.position.set(0,.72,o*.48),d.add(Ze)}else if(e.bodyStyle==="truck"){const ft=new Xe(l*.9,.4,.15),Ze=new pe(ft,this.matChrome);Ze.position.set(0,.45,-o*.52),d.add(Ze);const Ct=new pe(new Xe(.1,.4,o*.35),r);Ct.position.set(-l*.44,.7,o*.3);const lt=new pe(new Xe(.1,.4,o*.35),r);lt.position.set(l*.44,.7,o*.3);const _t=new pe(new Xe(l*.9,.4,.1),r);_t.position.set(0,.7,o*.48),d.add(Ct),d.add(lt),d.add(_t)}const z=new Xe(l*.22,.14,.12),K=new pe(z,this.matHeadlightOff);K.position.set(-l*.35,.5,-o*.49);const k=new pe(z,this.matHeadlightOff);k.position.set(l*.35,.5,-o*.49),d.add(K),d.add(k);const ee=this.matTaillightOff.clone(),W=new Xe(l*.25,.14,.12),Q=new pe(W,ee);Q.position.set(-l*.34,.55,o*.49);const j=new pe(W,ee);j.position.set(l*.34,.55,o*.49),d.add(Q),d.add(j);const ve=new Xt(.06,.06,.2,12);ve.rotateX(Math.PI/2);const Le=new pe(ve,this.matChrome);Le.position.set(-l*.25,.28,o*.5);const Y=new pe(ve,this.matChrome);Y.position.set(l*.25,.28,o*.5),d.add(Le),d.add(Y),n.add(d);const de=e.bodyStyle==="truck"?.42:.34,xe=e.bodyStyle==="truck"?.32:.26,Te=o*.32,ue=l*.5+xe*.35,Pe=de,at=[],Ae=new Tt;Ae.position.set(-ue,Pe,-Te);const Ye=this.createWheelMesh(de,xe);Ae.add(Ye),n.add(Ae);const Ke=new Tt;Ke.position.set(ue,Pe,-Te);const Ge=this.createWheelMesh(de,xe);Ke.add(Ge),n.add(Ke);const ut=this.createWheelMesh(de,xe);ut.position.set(-ue,Pe,Te),n.add(ut);const ot=this.createWheelMesh(de,xe);return ot.position.set(ue,Pe,Te),n.add(ot),at.push(Ye,Ge,ut,ot),{group:n,mainBody:d,bodyMaterial:r,taillightMaterial:ee,steeringPivots:[Ae,Ke],wheels:at,exhaustPositions:[new U(-l*.25,.28,o*.52),new U(l*.25,.28,o*.52)],config:e}}createWheelMesh(e,t){const n=new Tt,s=new Xt(e,e,t,18);s.rotateZ(Math.PI/2);const r=new pe(s,this.matTire);r.castShadow=!0,n.add(r);const a=e*.65,o=new Xt(a,a,t*1.02,12);o.rotateZ(Math.PI/2);const l=new pe(o,this.matRim);n.add(l);const c=new Xe(t*1.04,a*1.8,.05),u=new pe(c,this.matRim),h=new pe(c,this.matRim);h.rotation.x=Math.PI/3;const d=new pe(c,this.matRim);return d.rotation.x=Math.PI/3*2,n.add(u),n.add(h),n.add(d),n}createTrafficVehicle(e){const t=new Tt;t.name=`traffic_${e.type}`;const n=e.colorList[Math.floor(Math.random()*e.colorList.length)],s=new dt({color:new Ce(n),roughness:.35,metalness:.55}),r=e.dimensions,a=r.width,o=r.height,l=r.length,c=[];if(e.type==="truck"){const f=l*.35,M=new Xe(a,o*.85,f),w=new pe(M,s);w.position.set(0,o*.5,-l*.3),w.castShadow=!0,t.add(w);const y=new pe(new kt(a*.88,o*.4),this.matGlass);y.position.set(0,o*.65,-l*.3-f*.51),y.rotation.x=-.15,t.add(y);const A=l*.6,T=new dt({color:9807270,roughness:.5,metalness:.4}),g=new Xe(a*1.05,o*.95,A),E=new pe(g,T);E.position.set(0,o*.55,l*.18),E.castShadow=!0,t.add(E);const I=.45,C=.35,N=[[-a*.55,I,-l*.38],[a*.55,I,-l*.38],[-a*.55,I,l*.25],[a*.55,I,l*.25],[-a*.55,I,l*.42],[a*.55,I,l*.42]];for(const F of N){const V=this.createWheelMesh(I,C);V.position.set(...F),t.add(V),c.push(V)}}else{const f=new Xe(a,o*.5,l),M=new pe(f,s);M.position.y=o*.35,M.castShadow=!0,t.add(M);const w=new Xe(a*.85,o*.55,l*.48),y=new pe(w,s);y.position.set(0,o*.75,l*.05),y.castShadow=!0,t.add(y);const A=new pe(new kt(a*.8,o*.4),this.matGlass);A.position.set(0,o*.75,l*.05-l*.48*.51),A.rotation.x=-.35,t.add(A);const T=.32,g=.24,E=[[-a*.52,T,-l*.3],[a*.52,T,-l*.3],[-a*.52,T,l*.3],[a*.52,T,l*.3]];for(const I of E){const C=this.createWheelMesh(T,g);C.position.set(...I),t.add(C),c.push(C)}}const u=this.matTaillightOff.clone(),h=new Xe(a*.25,.12,.1),d=new pe(h,u);d.position.set(-a*.32,o*.42,l*.5);const p=new pe(h,u);p.position.set(a*.32,o*.42,l*.5),t.add(d),t.add(p);const _=new Xe(a*.22,.12,.1),S=new pe(_,this.matHeadlightOff);S.position.set(-a*.32,o*.38,-l*.5);const m=new pe(_,this.matHeadlightOff);return m.position.set(a*.32,o*.38,-l*.5),t.add(S),t.add(m),{group:t,wheels:c,taillightMaterial:u,dimensions:r,trafficType:e}}createCoinMesh(){const e=new Tt;e.name="collectible_coin";const t=new Xt(.65,.65,.15,24);t.rotateZ(Math.PI/2);const n=new dt({color:16766720,metalness:.9,roughness:.2,emissive:16753920,emissiveIntensity:.3}),s=new pe(t,n);s.castShadow=!0,e.add(s);const r=new Ns(.5,.04,8,24);r.rotateY(Math.PI/2);const a=new wn({color:16777215}),o=new pe(r,a);return e.add(o),e}createNitroMesh(){const e=new Tt;e.name="collectible_nitro";const t=new Xt(.35,.35,1.1,16),n=new dt({color:53503,metalness:.85,roughness:.25,emissive:39423,emissiveIntensity:.6}),s=new pe(t,n);e.add(s);const r=new Xt(.18,.2,.25,12),a=new pe(r,this.matChrome);return a.position.y=.65,e.add(a),e}createStreetLight(){const e=new Tt,t=new Xt(.12,.16,7.5,8),n=new dt({color:3817544,metalness:.8,roughness:.3}),s=new pe(t,n);s.position.y=3.75,e.add(s);const r=new Xe(2.5,.1,.1),a=new pe(r,n);a.position.set(1.2,7.4,0),e.add(a);const o=new Xe(.8,.12,.35),l=new pe(o,n);l.position.set(2.4,7.35,0),e.add(l);const c=new kt(.7,.3);c.rotateX(Math.PI/2);const u=new wn({color:16773312}),h=new pe(c,u);return h.position.set(2.4,7.28,0),e.add(h),e}createBuilding(e,t,n,s="modern"){const r=new Tt,a=new Xe(e,t,n),o=new dt({color:1580842,roughness:.5,metalness:.5,map:this.textures.getBuildingTexture(s)}),l=new pe(a,o);l.position.y=t*.5,l.castShadow=!1,l.receiveShadow=!1,r.add(l);const c=new Xe(e*.4,3,n*.4),u=new dt({color:790551,roughness:.9}),h=new pe(c,u);h.position.y=t+1.5,r.add(h);const d=new xa(.4,8,8),p=new wn({color:16711714}),_=new pe(d,p);return _.position.y=t+3.4,r.add(_),r}createHighwayGantry(e){const t=new Tt,n=new dt({color:4871528,metalness:.8,roughness:.3}),s=new Xt(.2,.25,8.5,8),r=new pe(s,n);r.position.set(-e*.55,4.25,0),t.add(r);const a=new pe(s,n);a.position.set(e*.55,4.25,0),t.add(a);const o=new Xe(e*1.15,.7,.5),l=new pe(o,n);l.position.set(0,8.2,0),t.add(l);const c=new kt(6.5,2),u=document.createElement("canvas");u.width=512,u.height=160;const h=u.getContext("2d");h.fillStyle="#0a5c36",h.fillRect(0,0,512,160),h.strokeStyle="#ffffff",h.lineWidth=8,h.strokeRect(8,8,496,144),h.fillStyle="#ffffff",h.font="bold 36px Arial, sans-serif",h.textAlign="center",h.fillText("VELOCITY HIGHWAY 99",256,60),h.font="bold 26px Arial, sans-serif",h.fillText("SPEED ZONE ▲ NO SPEED LIMIT",256,115);const d=new sn(u),p=new wn({map:d}),_=new pe(c,p);return _.position.set(0,8.2,.3),t.add(_),t}}class Em{constructor(e,t){this.scene=e,this.textures=t,this.maxParticles=300,this.activeCount=0,this.positions=new Float32Array(this.maxParticles*3),this.velocities=new Float32Array(this.maxParticles*3),this.colors=new Float32Array(this.maxParticles*3),this.sizes=new Float32Array(this.maxParticles),this.lifespans=new Float32Array(this.maxParticles),this.maxLifespans=new Float32Array(this.maxParticles),this.opacities=new Float32Array(this.maxParticles),this.geometry=new Qt,this.posAttr=new pn(this.positions,3),this.colorAttr=new pn(this.colors,3),this.sizeAttr=new pn(this.sizes,1),this.posAttr.setUsage(Ws),this.colorAttr.setUsage(Ws),this.sizeAttr.setUsage(Ws),this.geometry.setAttribute("position",this.posAttr),this.geometry.setAttribute("color",this.colorAttr),this.geometry.setAttribute("size",this.sizeAttr),this.material=new dl({size:1,map:this.textures.getParticleTexture(),transparent:!0,vertexColors:!0,blending:mr,depthWrite:!1,sizeAttenuation:!0}),this.points=new th(this.geometry,this.material),this.points.frustumCulled=!1,this.scene.add(this.points),this.freeIndices=[];for(let n=0;n<this.maxParticles;n++)this.freeIndices.push(n),this.positions[n*3+1]=-9999}spawnParticle(e,t,n,s,r){if(this.freeIndices.length===0)return;const a=this.freeIndices.pop(),o=a*3;this.positions[o]=e.x,this.positions[o+1]=e.y,this.positions[o+2]=e.z,this.velocities[o]=t.x,this.velocities[o+1]=t.y,this.velocities[o+2]=t.z,this.colors[o]=n.r,this.colors[o+1]=n.g,this.colors[o+2]=n.b,this.sizes[a]=s,this.lifespans[a]=r,this.maxLifespans[a]=r,this.opacities[a]=1}emitTireSmoke(e,t=2){for(let n=0;n<t;n++){const s=new U(e.x+(Math.random()-.5)*.3,e.y+.1,e.z+(Math.random()-.5)*.3),r=new U((Math.random()-.5)*1.5,Math.random()*.8+.2,Math.random()*2+1),a=new Ce(.85,.85,.88);this.spawnParticle(s,r,a,1.2+Math.random()*.8,.45)}}emitNitroFlames(e){const t=[new Ce(0,.85,1),new Ce(.2,.4,1),new Ce(.9,.2,1)];for(const n of e){const s=n.clone().add(new U((Math.random()-.5)*.08,(Math.random()-.5)*.08,.05)),r=new U((Math.random()-.5)*.6,(Math.random()-.5)*.4,Math.random()*8+12),a=t[Math.floor(Math.random()*t.length)];this.spawnParticle(s,r,a,1.4,.18)}}emitCollisionSparks(e,t=18){for(let n=0;n<t;n++){const s=e.clone().add(new U((Math.random()-.5)*.8,(Math.random()-.5)*.6,(Math.random()-.5)*.8)),r=new U((Math.random()-.5)*12,Math.random()*8+2,(Math.random()-.5)*12),a=Math.random()>.4?new Ce(1,.8,.1):new Ce(1,.3,.05);this.spawnParticle(s,r,a,.8+Math.random()*.6,.5+Math.random()*.3)}}emitCoinSparkles(e,t=12){for(let n=0;n<t;n++){const s=e.clone(),r=Math.random()*Math.PI*2,a=Math.random()*4+2,o=new U(Math.cos(r)*a,Math.random()*5+2,Math.sin(r)*a),l=new Ce(1,.9,.2);this.spawnParticle(s,o,l,.9,.4)}}update(e){let t=!1;for(let n=0;n<this.maxParticles;n++){if(this.lifespans[n]<=0)continue;if(this.lifespans[n]-=e,this.lifespans[n]<=0){this.positions[n*3+1]=-9999,this.freeIndices.push(n);continue}t=!0,1-this.lifespans[n]/this.maxLifespans[n];const s=n*3;this.positions[s]+=this.velocities[s]*e,this.positions[s+1]+=this.velocities[s+1]*e,this.positions[s+2]+=this.velocities[s+2]*e,this.velocities[s+1]-=5*e,this.sizes[n]*=1+e*.8}(t||this.freeIndices.length<this.maxParticles)&&(this.posAttr.needsUpdate=!0,this.colorAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0)}clear(){this.freeIndices=[];for(let e=0;e<this.maxParticles;e++)this.lifespans[e]=0,this.positions[e*3+1]=-9999,this.freeIndices.push(e);this.posAttr.needsUpdate=!0}}class ym{constructor(e,t,n){this.scene=e,this.textures=t,this.models=n,this.segments=[],this.segmentPool=[],this.furthestZ=0,this.initMaterials(),this.initRoadSegments()}initMaterials(){this.matAsphalt=new dt({color:3356477,roughness:.85,metalness:.1,map:this.textures.getAsphaltTexture()}),this.matLaneDash=new wn({map:this.textures.getLaneDashTexture(),transparent:!0,depthWrite:!1}),this.matRoadEdge=new wn({map:this.textures.getRoadEdgeTexture(),transparent:!0,depthWrite:!1}),this.matCurb=new dt({roughness:.7,map:this.textures.getCurbTexture()}),this.matShoulder=new dt({color:2237994,roughness:.95}),this.matGuardrail=new dt({metalness:.8,roughness:.3,map:this.textures.getGuardrailTexture()})}getCurveOffset(e){return Math.sin(e*.0035)*14+Math.sin(e*.008)*4}getCurveTangent(e){const n=this.getCurveOffset(e-1),s=this.getCurveOffset(e+1);return(n-s)/2}createSingleSegmentMesh(){const e=new Tt;e.name="road_segment";const t=_s,n=new kt(On,t);n.rotateX(-Math.PI/2);const s=new pe(n,this.matAsphalt);s.receiveShadow=!0,e.add(s);const r=new kt(Ts,t);r.rotateX(-Math.PI/2);const a=new pe(r,this.matShoulder);a.position.set(-On*.5-Ts*.5,-.01,0),e.add(a);const o=new pe(r,this.matShoulder);o.position.set(On*.5+Ts*.5,-.01,0),e.add(o);const l=[-4,0,4];for(const A of l){const T=new kt(.25,t);T.rotateX(-Math.PI/2);const g=new pe(T,this.matLaneDash);g.position.set(A,.015,0),e.add(g)}const c=new kt(.3,t);c.rotateX(-Math.PI/2);const u=new pe(c,this.matRoadEdge);u.position.set(-On*.5+.25,.015,0),e.add(u);const h=new pe(c,this.matRoadEdge);h.position.set(On*.5-.25,.015,0),e.add(h);const d=new Xe(.4,.18,t),p=new pe(d,this.matCurb);p.position.set(-On*.5,.08,0),e.add(p);const _=new pe(d,this.matCurb);_.position.set(On*.5,.08,0),e.add(_);const S=new Xe(.12,.75,t),m=new pe(S,this.matGuardrail);m.position.set(-yn*.5,.55,0),m.castShadow=!0,e.add(m);const f=new pe(S,this.matGuardrail);f.position.set(yn*.5,.55,0),f.castShadow=!0,e.add(f);const M=new Xt(.08,.08,.8,6),w=new dt({color:5594211,metalness:.8,roughness:.3});for(let A=-t*.45;A<=t*.45;A+=10){const T=new pe(M,w);T.position.set(-yn*.5,.4,A),e.add(T);const g=new pe(M,w);g.position.set(yn*.5,.4,A),e.add(g)}const y=this.models.createStreetLight();return y.position.set(yn*.5+.8,0,0),y.rotation.y=Math.PI,e.add(y),e}initRoadSegments(){this.segments=[];let e=60;for(let t=0;t<um;t++){const n=this.createSingleSegmentMesh(),s=e-t*_s,r=this.getCurveOffset(s),a=Math.atan(this.getCurveTangent(s));if(n.position.set(r,0,s),n.rotation.y=a,t%4===2){const o=this.models.createHighwayGantry(yn);o.position.set(0,0,0),n.add(o)}this.scene.add(n),this.segments.push({mesh:n,z:s}),this.furthestZ=s}}update(e){for(let t=0;t<this.segments.length;t++){const n=this.segments[t];if(n.z>e+fm){const s=this.furthestZ-_s,r=this.getCurveOffset(s),a=Math.atan(this.getCurveTangent(s));n.z=s,n.mesh.position.set(r,0,s),n.mesh.rotation.y=a,this.furthestZ=s}}}reset(){let e=60;for(let t=0;t<this.segments.length;t++){const n=this.segments[t],s=e-t*_s,r=this.getCurveOffset(s),a=Math.atan(this.getCurveTangent(s));n.z=s,n.mesh.position.set(r,0,s),n.mesh.rotation.y=a,this.furthestZ=s}}}class bm{constructor(e,t,n){this.scene=e,this.textures=t,this.models=n,this.buildings=[],this.buildingPoolSize=24,this.furthestBuildingZ=0,this.initLighting(),this.initSkyAndFog(),this.initCityscape()}initLighting(){this.ambientLight=new mh(14543093,.85),this.scene.add(this.ambientLight),this.dirLight=new ph(16772829,1.4),this.dirLight.position.set(45,75,-50),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=1024,this.dirLight.shadow.mapSize.height=1024,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=250,this.dirLight.shadow.camera.left=-30,this.dirLight.shadow.camera.right=30,this.dirLight.shadow.camera.top=30,this.dirLight.shadow.camera.bottom=-30,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target),this.hemiLight=new hh(4219013,1712172,.6),this.scene.add(this.hemiLight)}initSkyAndFog(){const e=new Ce(922656);this.scene.background=e,this.scene.fog=new ma(922656,.0028);const t=new _a(80,70,4),n=new wn({color:527380});for(let s=0;s<8;s++){const r=new pe(t,n),a=s/8*Math.PI*2;r.position.set(Math.cos(a)*450,20,Math.sin(a)*450),r.scale.set(1.5+Math.random(),1+Math.random(),1.5+Math.random()),this.scene.add(r)}}initCityscape(){this.buildings=[];const e=yn*.5+16,t=yn*.5+45;let n=40;const s=50;for(let r=0;r<this.buildingPoolSize;r++){const a=r%2===0?-1:1,o=a*(e+Math.random()*(t-e)),l=20+Math.random()*25,c=45+Math.random()*75,u=20+Math.random()*25,h=Math.random()>.5?"cyber":"modern",d=this.models.createBuilding(l,c,u,h);d.position.set(o,0,n),this.scene.add(d),this.buildings.push({group:d,side:a,baseDist:Math.abs(o),z:n}),this.furthestBuildingZ=n,r%2===1&&(n-=s)}}update(e,t){this.dirLight.position.set(e+45,75,e-50),this.dirLight.target.position.set(0,0,e-30),this.dirLight.target.updateMatrixWorld();const n=e+80;for(const s of this.buildings)if(s.z>n){const r=this.furthestBuildingZ-50-Math.random()*20,o=t.getCurveOffset(r)+s.side*s.baseDist;s.z=r,s.group.position.set(o,0,r),this.furthestBuildingZ=r}}reset(){this.furthestBuildingZ=0;let e=40;const t=50;for(let n=0;n<this.buildings.length;n++){const s=this.buildings[n];s.z=e,s.group.position.set(s.side*s.baseDist,0,e),this.furthestBuildingZ=e,n%2===1&&(e-=t)}}}class Tm{constructor(e){this.storage=e,this.cars=JSON.parse(JSON.stringify(pm)),this.refreshUnlockStates()}refreshUnlockStates(){const e=this.storage.getUnlockedCars();for(const t of this.cars){t.unlocked=e.includes(t.id);const n=this.storage.getCustomColor(t.id);n&&(t.color=n)}}getAllCars(){return this.refreshUnlockStates(),this.cars}getCarById(e){return this.cars.find(t=>t.id===e)||this.cars[0]}getSelectedCar(){const e=this.storage.getSelectedCar();return this.getCarById(e)}selectCar(e){return this.getCarById(e).unlocked?(this.storage.setSelectedCar(e),!0):!1}canAfford(e){const t=this.getCarById(e);return!t||t.unlocked?!1:this.storage.getCoins()>=t.price}buyCar(e){const t=this.getCarById(e);return!t||t.unlocked?!1:this.storage.spendCoins(t.price)?(this.storage.unlockCar(e),this.refreshUnlockStates(),this.selectCar(e),!0):!1}setCarColor(e,t){const n=this.getCarById(e);n&&(n.color=t,this.storage.setCustomColor(e,t))}}class Am{constructor(e,t,n=null){this.models=e,this.config=t,this.customColor=n,this.vehicleData=this.models.createPlayerVehicle(this.config,this.customColor),this.group=this.vehicleData.group,this.lateralOffset=un[1],this.position=new U(un[1],0,0),this.velocity=new U(0,0,0),this.speedKmh=0,this.speedMs=0,this.maxSpeedKmh=this.config.stats.topSpeed,this.accelRate=this.config.stats.acceleration/100*18+8,this.brakeRate=this.config.stats.braking/100*28+15,this.handlingRate=this.config.stats.handling/100*14+10,this.armorRating=this.config.stats.armor,this.steerAngle=0,this.maxSteerAngle=.42,this.bodyRoll=0,this.bodyPitch=0,this.wheelRotation=0,this.nitro=100,this.maxNitro=100,this.isBoosting=!1,this.nitroDrainRate=35,this.nitroRechargeRate=4,this.health=100,this.maxHealth=100,this.isInvulnerable=!1,this.invulnerableTimer=0,this.isDrifting=!1,this.collider=new ni,this.updateCollider()}update(e,t,n,s,r){if(e<=0)return;const a=t.keys.forward,o=t.keys.backward,l=t.keys.handbrake;t.keys.boost&&this.nitro>5&&a?(this.isBoosting=!0,this.nitro=Math.max(0,this.nitro-this.nitroDrainRate*e)):(this.isBoosting=!1,this.speedKmh>100&&(this.nitro=Math.min(this.maxNitro,this.nitro+this.nitroRechargeRate*e)));const h=(this.isBoosting?this.maxSpeedKmh*1.25:this.maxSpeedKmh)/3.6;let d=0;if(a){const I=this.isBoosting?1.8:1;d=this.accelRate*I}else o?d=-this.brakeRate:d=-6.5;l?(d=-this.brakeRate*1.2,this.isDrifting=!0):this.isDrifting=!1,this.speedMs+=d*e,this.speedMs=Math.max(0,Math.min(h,this.speedMs)),this.speedKmh=this.speedMs*3.6;const p=t.steerAxis,_=Math.max(.4,1-this.speedKmh/(this.maxSpeedKmh*1.3)*.45),S=-p*this.maxSteerAngle*_;this.steerAngle=An.lerp(this.steerAngle,S,e*12);let m=0;this.speedMs>1&&(m=p*this.handlingRate*(this.speedKmh/100),m=Math.max(-22,Math.min(22,m))),this.position.z-=this.speedMs*e,this.lateralOffset+=m*e;const f=yn*.46;Math.abs(this.lateralOffset)>f&&(this.lateralOffset=Math.sign(this.lateralOffset)*f,this.speedMs=Math.max(0,this.speedMs-15*e),s.emitCollisionSparks(this.position,6),r&&r.setTireScreech(!0,.6));const M=n.getCurveOffset(this.position.z);this.position.x=M+this.lateralOffset,this.group.position.copy(this.position);const w=n.getCurveTangent(this.position.z),A=Math.atan(w)+this.steerAngle*.35+(this.isDrifting?-p*.25:0);this.group.rotation.y=A;const T=-p*(this.speedKmh/this.maxSpeedKmh)*.12;this.bodyRoll=An.lerp(this.bodyRoll,T,e*10),this.vehicleData.mainBody.rotation.z=this.bodyRoll;let g=0;a&&this.speedKmh<this.maxSpeedKmh*.9?g=-.04:o&&(g=.06),this.bodyPitch=An.lerp(this.bodyPitch,g,e*8),this.vehicleData.mainBody.rotation.x=this.bodyPitch;for(const I of this.vehicleData.steeringPivots)I.rotation.y=this.steerAngle;const E=Math.PI*.68;this.wheelRotation+=this.speedMs*e/E;for(const I of this.vehicleData.wheels)I.rotation.x=this.wheelRotation;if(o||l?(this.vehicleData.taillightMaterial.emissiveIntensity=2.4,this.vehicleData.taillightMaterial.color.setHex(16720418)):(this.vehicleData.taillightMaterial.emissiveIntensity=.4,this.vehicleData.taillightMaterial.color.setHex(8912896)),this.isBoosting){const I=this.vehicleData.exhaustPositions.map(C=>C.clone().applyMatrix4(this.group.matrixWorld));s.emitNitroFlames(I)}this.isDrifting||o&&this.speedKmh>60||Math.abs(p)>.8&&this.speedKmh>140?(s.emitTireSmoke(this.position,2),r&&r.setTireScreech(!0,1)):r&&r.setTireScreech(!1),this.isInvulnerable?(this.invulnerableTimer-=e,this.invulnerableTimer<=0?(this.isInvulnerable=!1,this.group.visible=!0):this.group.visible=Math.floor(this.invulnerableTimer*10)%2===0):this.group.visible=!0,r&&r.updateEngine(this.speedKmh,this.maxSpeedKmh,a,this.isBoosting),this.updateCollider()}updateCollider(){const e=this.config.dimensions,t=e.width*.45,n=e.height*.5,s=e.length*.48;this.collider.min.set(this.position.x-t,this.position.y+.1,this.position.z-s),this.collider.max.set(this.position.x+t,this.position.y+n*2,this.position.z+s)}takeDamage(e){if(this.isInvulnerable)return!1;const t=this.armorRating/100*.4,n=e*(1-t);return this.health=Math.max(0,this.health-n),this.isInvulnerable=!0,this.invulnerableTimer=1.6,this.speedMs*=.55,this.speedKmh=this.speedMs*3.6,this.health<=0}repair(e=35){this.health=Math.min(this.maxHealth,this.health+e)}addNitro(e=50){this.nitro=Math.min(this.maxNitro,this.nitro+e)}reset(e=1){this.lateralOffset=un[e],this.position.set(un[e],0,0),this.velocity.set(0,0,0),this.speedKmh=0,this.speedMs=0,this.steerAngle=0,this.bodyRoll=0,this.bodyPitch=0,this.health=this.maxHealth,this.nitro=this.maxNitro,this.isBoosting=!1,this.isInvulnerable=!1,this.invulnerableTimer=0,this.group.visible=!0,this.group.position.copy(this.position),this.group.rotation.set(0,0,0),this.updateCollider()}}class wm{constructor(e,t){this.scene=e,this.models=t,this.poolSize=14,this.vehicles=[],this.spawnInterval=1.4,this.spawnTimer=0,this.difficultyFactor=1,this.initPool()}initPool(){for(let e=0;e<this.poolSize;e++){const t=this.getRandomTrafficType(),n=this.models.createTrafficVehicle(t);n.group.visible=!1,this.scene.add(n.group),this.vehicles.push({group:n.group,wheels:n.wheels,taillightMat:n.taillightMaterial,dim:n.dimensions,type:t,active:!1,laneIndex:0,speedKmh:80,speedMs:80/3.6,z:0,x:0,lateralOffset:0,targetLaneIndex:0,isChangingLanes:!1,laneChangeProgress:0,wheelRotation:0,hasBeenPassed:!1,hasBeenNearMissed:!1,collider:new ni,isSpinning:!1,spinVelocity:0})}}getRandomTrafficType(){const e=pr.reduce((n,s)=>n+s.weight,0);let t=Math.random()*e;for(const n of pr){if(t<n.weight)return n;t-=n.weight}return pr[0]}spawnVehicle(e,t,n){const s=this.vehicles.find(p=>!p.active);if(!s)return;const r=e-(130+Math.random()*90),a=this.vehicles.filter(p=>p.active&&Math.abs(p.z-r)<25).map(p=>p.laneIndex),o=[0,1,2,3].filter(p=>!a.includes(p));if(o.length===0||o.length<2)return;const l=o[Math.floor(Math.random()*o.length)],[c,u]=s.type.speedRange,h=c+Math.random()*(u-c);s.active=!0,s.laneIndex=l,s.targetLaneIndex=l,s.isChangingLanes=!1,s.speedKmh=h,s.speedMs=h/3.6,s.z=r,s.lateralOffset=un[l],s.hasBeenPassed=!1,s.hasBeenNearMissed=!1,s.isSpinning=!1,s.spinVelocity=0;const d=n.getCurveOffset(r);s.x=d+s.lateralOffset,s.group.position.set(s.x,0,s.z),s.group.rotation.set(0,0,0),s.group.visible=!0,this.updateCollider(s)}update(e,t,n,s,r,a){this.spawnTimer+=e;const o=Math.max(.6,this.spawnInterval/this.difficultyFactor);this.spawnTimer>=o&&(this.spawnTimer=0,this.spawnVehicle(t.position.z,t.speedKmh,n));const l=t.position.z,c=t.position.x,u=t.speedKmh;for(const h of this.vehicles){if(!h.active)continue;if(h.isSpinning)h.group.rotation.y+=h.spinVelocity*e,h.speedMs=Math.max(0,h.speedMs-25*e),h.z-=h.speedMs*e,s.emitTireSmoke(h.group.position,1);else{if(h.z-=h.speedMs*e,!h.isChangingLanes&&Math.random()<.003*e*60){const f=[];h.laneIndex>0&&f.push(h.laneIndex-1),h.laneIndex<3&&f.push(h.laneIndex+1),f.length>0&&(h.targetLaneIndex=f[Math.floor(Math.random()*f.length)],h.isChangingLanes=!0,h.laneChangeProgress=0)}if(h.isChangingLanes){h.laneChangeProgress+=e*.7;const f=un[h.laneIndex],M=un[h.targetLaneIndex];h.lateralOffset=An.lerp(f,M,An.smoothstep(h.laneChangeProgress,0,1)),h.laneChangeProgress>=1&&(h.laneIndex=h.targetLaneIndex,h.lateralOffset=un[h.laneIndex],h.isChangingLanes=!1)}const _=n.getCurveOffset(h.z),S=n.getCurveTangent(h.z),m=Math.atan(S);h.x=_+h.lateralOffset,h.group.position.set(h.x,0,h.z),h.group.rotation.y=m}const d=Math.PI*.65;h.wheelRotation+=h.speedMs*e/d;for(const _ of h.wheels)_.rotation.x=h.wheelRotation;this.updateCollider(h);const p=h.z-l;if(!h.hasBeenPassed&&p>3&&(h.hasBeenPassed=!0,a&&a("PASS",{speed:u})),!h.hasBeenNearMissed&&!h.isSpinning&&u>85){const _=Math.abs(c-h.x),S=Math.abs(l-h.z);_<2.7&&_>1.6&&S<2.8&&(h.hasBeenNearMissed=!0,r&&r.playNearMissSound(),a&&a("NEAR_MISS",{speed:u}))}(h.z>l+55||h.z<l-280)&&this.despawn(h)}}updateCollider(e){const t=e.dim.width*.48;e.dim.height*.5;const n=e.dim.length*.48;e.collider.min.set(e.x-t,.1,e.z-n),e.collider.max.set(e.x+t,e.dim.height,e.z+n)}triggerCrash(e){e.isSpinning=!0,e.spinVelocity=(Math.random()>.5?1:-1)*(Math.random()*8+6)}despawn(e){e.active=!1,e.group.visible=!1,e.isSpinning=!1}setDifficulty(e){this.difficultyFactor=Math.max(1,Math.min(3,e))}reset(){for(const e of this.vehicles)this.despawn(e);this.spawnTimer=0,this.difficultyFactor=1}}class Rm{constructor(e,t){this.scene=e,this.models=t,this.items=[],this.poolSize=16,this.spawnTimer=0,this.spawnInterval=2.2,this.initPool()}initPool(){for(let e=0;e<this.poolSize;e++){const t=e%5===0,n=t?this.models.createNitroMesh():this.models.createCoinMesh();n.visible=!1,this.scene.add(n),this.items.push({group:n,type:t?"nitro":"coin",active:!1,laneIndex:0,z:0,x:0,baseY:.8,floatOffset:Math.random()*Math.PI*2,rotationSpeed:t?2.5:4,boundingRadius:t?1.4:1.2})}}spawnPickup(e,t){const n=this.items.filter(o=>!o.active);if(n.length===0)return;const s=Math.floor(Math.random()*4),r=e-(100+Math.random()*80),a=Math.min(n.length,Math.random()>.4?3:1);for(let o=0;o<a;o++){const l=n[o];l.active=!0,l.laneIndex=s,l.z=r-o*6;const c=t.getCurveOffset(l.z);l.x=c+un[s],l.group.position.set(l.x,l.baseY,l.z),l.group.visible=!0}}update(e,t,n,s,r,a){this.spawnTimer+=e,this.spawnTimer>=this.spawnInterval&&(this.spawnTimer=0,this.spawnPickup(t.position.z,n));const o=t.position,c=t.isBoosting?9:4,u=2.2;for(const h of this.items){if(!h.active)continue;h.floatOffset+=e*3.5,h.group.rotation.y+=h.rotationSpeed*e,h.group.position.y=h.baseY+Math.sin(h.floatOffset)*.15;const d=o.x-h.group.position.x,p=o.z-h.group.position.z,_=d*d+p*p,S=Math.sqrt(_);if(S<c){const m=(c-S)*16;h.group.position.x+=d/S*m*e,h.group.position.z+=p/S*m*e}else{const m=n.getCurveOffset(h.group.position.z);h.group.position.x=m+un[h.laneIndex]}if(S<u){this.collect(h,s,r,a);continue}h.group.position.z>o.z+40&&this.despawn(h)}}collect(e,t,n,s){e.type==="coin"?(t.emitCoinSparkles(e.group.position,14),n&&n.playCoinSound(),s&&s("coin",{amount:10,score:250})):e.type==="nitro"&&(t.emitNitroFlames([e.group.position]),n&&n.playNitroSound(),s&&s("nitro",{amount:50,score:150})),this.despawn(e)}despawn(e){e.active=!1,e.group.visible=!1}reset(){for(const e of this.items)this.despawn(e);this.spawnTimer=0}}class Cm{constructor(){this.contactPoint=new U}checkPlayerTrafficCollisions(e,t,n,s,r){if(e.isInvulnerable)return;const a=e.collider;for(const o of t.vehicles)if(!(!o.active||o.isSpinning)&&a.intersectsBox(o.collider)){this.contactPoint.set((e.position.x+o.x)*.5,.6,(e.position.z+o.z)*.5);const l=Math.abs(e.speedKmh-o.speedKmh),c=Math.min(2,Math.max(.4,l/60)),u=15+c*25;s&&s.playCollisionSound(c),n.emitCollisionSparks(this.contactPoint,24),t.triggerCrash(o);const h=e.takeDamage(u);r&&r({severity:c,damage:u,isDead:h});break}}}class Pm{constructor(e){this.camera=e,this.currentMode=Jn.CHASE,this.modeOffsets={[Jn.CHASE]:{posOffset:new U(0,3.2,7.5),lookOffset:new U(0,1.2,-18)},[Jn.CLOSE]:{posOffset:new U(0,2.1,5.2),lookOffset:new U(0,1,-15)},[Jn.HOOD]:{posOffset:new U(0,1.25,-.2),lookOffset:new U(0,1,-25)}},this.currentPos=new U(0,5,10),this.targetLook=new U(0,1,-10),this.baseFov=60,this.maxFov=76,this.currentFov=60,this.shakeIntensity=0,this.shakeDuration=0,this.shakeDecay=4}setMode(e){this.modeOffsets[e]&&(this.currentMode=e)}cycleMode(){const e=[Jn.CHASE,Jn.CLOSE,Jn.HOOD],t=(e.indexOf(this.currentMode)+1)%e.length;return this.currentMode=e[t],this.currentMode}addShake(e=.5,t=.35){this.shakeIntensity=Math.min(1.2,this.shakeIntensity+e),this.shakeDuration=Math.max(this.shakeDuration,t)}update(e,t,n){if(!t)return;const s=t.position,r=t.speedKmh,a=t.maxSpeedKmh,o=t.isBoosting,l=this.modeOffsets[this.currentMode],c=Math.min(1,r/a),u=o?6:0,h=this.baseFov+c*(this.maxFov-this.baseFov)+u;this.currentFov=An.lerp(this.currentFov,h,e*5),this.camera.fov=this.currentFov,this.camera.updateProjectionMatrix();const d=n.getCurveTangent(s.z),p=Math.atan(d),_=s.clone().add(new U(l.posOffset.x+Math.sin(p)*l.posOffset.z*.4,l.posOffset.y,l.posOffset.z));let S=0,m=0;if(this.shakeDuration>0){this.shakeDuration-=e;const T=this.shakeIntensity*(this.shakeDuration/.35);S=(Math.random()-.5)*T*.5,m=(Math.random()-.5)*T*.5}else if(r>120){const T=r/a*.04;S=(Math.random()-.5)*T,m=(Math.random()-.5)*T}_.x+=S,_.y+=m;const f=e*10,M=e*20;this.currentPos.x=An.lerp(this.currentPos.x,_.x,f),this.currentPos.y=An.lerp(this.currentPos.y,_.y,e*8),this.currentPos.z=An.lerp(this.currentPos.z,_.z,M),this.camera.position.copy(this.currentPos);const w=s.z+l.lookOffset.z,y=n.getCurveOffset(w)+l.lookOffset.x,A=new U(y,s.y+l.lookOffset.y,w);this.targetLook.lerp(A,e*12),this.camera.lookAt(this.targetLook)}reset(e){if(!e)return;const t=this.modeOffsets[this.currentMode];this.currentPos.copy(e.position).add(t.posOffset),this.targetLook.copy(e.position).add(t.lookOffset),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.targetLook),this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix(),this.shakeDuration=0,this.shakeIntensity=0}}class Lm{constructor(e){this.storage=e,this.mode=Jt.ENDLESS,this.score=0,this.distance=0,this.coins=0,this.nearMissCount=0,this.carsPassedCount=0,this.combo=1,this.comboTimer=0,this.maxCombo=5,this.timeRemaining=60,this.timeLimit=60,this.targetScore=2e4,this.targetOvertakes=20,this.onComboChange=null,this.onScorePopup=null,this.onChallengeComplete=null,this.onTimeExpired=null}setMode(e){this.mode=e,this.reset()}update(e,t,n){if(e<=0)return;const r=t.speedMs*e;this.distance+=r;const a=1+t.speedKmh/100;this.score+=Math.floor(r*.8*a*this.combo),this.combo>1&&(this.comboTimer-=e,this.comboTimer<=0&&(this.combo=1,this.onComboChange&&this.onComboChange(this.combo))),this.mode===Jt.TIME_TRIAL?(this.timeRemaining-=e,this.timeRemaining<=0&&(this.timeRemaining=0,n&&n())):this.mode===Jt.TRAFFIC_CHALLENGE&&(this.score>=this.targetScore||this.carsPassedCount>=this.targetOvertakes)&&this.onChallengeComplete&&this.onChallengeComplete()}handleScoreEvent(e,t={}){if(e==="PASS"){this.carsPassedCount++;const n=100*this.combo;this.score+=n,this.increaseCombo(),this.mode===Jt.TIME_TRIAL&&(this.timeRemaining=Math.min(60,this.timeRemaining+1.5)),this.onScorePopup&&this.onScorePopup({text:`+${n} OVERTAKE!`,type:"pass",combo:this.combo})}else if(e==="NEAR_MISS"){this.nearMissCount++;const n=500*this.combo;this.score+=n,this.increaseCombo(),this.mode===Jt.TIME_TRIAL&&(this.timeRemaining=Math.min(60,this.timeRemaining+3)),this.onScorePopup&&this.onScorePopup({text:`+${n} NEAR MISS!`,type:"near_miss",combo:this.combo})}}handleCollectEvent(e,t={}){if(e==="coin"){const n=t.amount||10;this.coins+=n,this.storage.addCoins(n),this.score+=(t.score||250)*this.combo,this.onScorePopup&&this.onScorePopup({text:`+${t.score||250} COIN`,type:"coin"})}else e==="nitro"&&(this.score+=(t.score||150)*this.combo,this.onScorePopup&&this.onScorePopup({text:"NITRO RECHARGED!",type:"nitro"}))}handleCrash(){this.combo=1,this.comboTimer=0,this.onComboChange&&this.onComboChange(this.combo)}increaseCombo(){this.combo=Math.min(this.maxCombo,this.combo+1),this.comboTimer=3.5,this.onComboChange&&this.onComboChange(this.combo)}finalizeRun(){const e=this.storage.saveHighScore(this.mode,this.score);return this.storage.saveBestDistance(this.mode,this.distance),{score:this.score,distance:Math.floor(this.distance),coins:this.coins,nearMisses:this.nearMissCount,carsPassed:this.carsPassedCount,isNewRecord:e,mode:this.mode}}reset(){this.score=0,this.distance=0,this.coins=0,this.nearMissCount=0,this.carsPassedCount=0,this.combo=1,this.comboTimer=0,this.timeRemaining=this.timeLimit}}class Im{constructor(e,t){this.container=e,this.callbacks=t,this.element=null,this.selectedMode=Jt.ENDLESS,this.render()}render(){this.element=document.createElement("div"),this.element.className="screen interactive active",this.element.id="main-menu-screen",this.element.innerHTML=`
      <div class="menu-container glass-panel">
        <div class="logo-box">
          <h1 class="game-title">VELOCITY RUSH 3D</h1>
          <div class="game-subtitle">HIGH-OCTANE HIGHWAY RACING</div>
        </div>

        <div class="top-status-bar">
          <div class="stat-pill coins">
            <span class="icon">🪙</span>
            <span id="menu-coin-count">0</span> COINS
          </div>
          <div class="stat-pill record">
            <span class="icon">🏆</span>
            BEST: <span id="menu-high-score">0</span> PTS
          </div>
        </div>

        <div class="mode-selector">
          <div class="mode-card selected" data-mode="${Jt.ENDLESS}">
            <div class="badge">SURVIVAL</div>
            <h3>ENDLESS HIGHWAY</h3>
            <p>Dodge dynamic traffic, chain near-miss combos, and push your machine to the limit.</p>
          </div>
          <div class="mode-card" data-mode="${Jt.TIME_TRIAL}">
            <div class="badge">AGAINST THE CLOCK</div>
            <h3>TIME TRIAL</h3>
            <p>60 seconds on the clock. Overtake traffic and make near misses to earn extra time!</p>
          </div>
          <div class="mode-card" data-mode="${Jt.TRAFFIC_CHALLENGE}">
            <div class="badge">PRECISION</div>
            <h3>TRAFFIC CHALLENGE</h3>
            <p>Execute 20 precision overtakes and score 20,000 points without totaling your car.</p>
          </div>
        </div>

        <div class="menu-actions">
          <button class="btn btn-secondary btn-icon" id="btn-menu-settings" title="Settings">⚙️</button>
          <button class="btn btn-secondary btn-icon" id="btn-menu-help" title="Controls">❓</button>
          <button class="btn btn-primary btn-play" id="btn-menu-play">START RACE</button>
          <button class="btn btn-secondary" id="btn-menu-garage">GARAGE 🚗</button>
        </div>
      </div>
    `,this.container.appendChild(this.element),this.bindEvents()}bindEvents(){const e=this.element.querySelectorAll(".mode-card");e.forEach(t=>{t.addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),e.forEach(n=>n.classList.remove("selected")),t.classList.add("selected"),this.selectedMode=t.getAttribute("data-mode"),this.callbacks.onModeSelect&&this.callbacks.onModeSelect(this.selectedMode)})}),this.element.querySelector("#btn-menu-play").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.callbacks.onPlay&&this.callbacks.onPlay(this.selectedMode)}),this.element.querySelector("#btn-menu-garage").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.callbacks.onGarage&&this.callbacks.onGarage()}),this.element.querySelector("#btn-menu-settings").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.callbacks.onSettings&&this.callbacks.onSettings()}),this.element.querySelector("#btn-menu-help").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.callbacks.onHelp&&this.callbacks.onHelp()})}updateStats(e,t){const n=this.element.querySelector("#menu-coin-count"),s=this.element.querySelector("#menu-high-score");if(n&&(n.textContent=e.toLocaleString()),s){const r=t[this.selectedMode]||0;s.textContent=r.toLocaleString()}}show(){this.element.classList.add("active")}hide(){this.element.classList.remove("active")}}class Dm{constructor(e,t,n){this.container=e,this.input=t,this.callbacks=n,this.element=null,this.render()}render(){this.element=document.createElement("div"),this.element.id="hud-screen",this.element.style.display="none",this.element.innerHTML=`
      <!-- Top HUD Bar -->
      <div class="hud-top-bar">
        <div class="hud-stats-left">
          <div class="hud-score-box">
            <span class="hud-score-label">SCORE</span>
            <span class="hud-score-value" id="hud-score">0</span>
          </div>
          <div class="hud-sub-stats">
            <div class="hud-pill distance">
              <span>🛣️</span> <span id="hud-distance">0</span> m
            </div>
            <div class="hud-pill coins">
              <span>🪙</span> <span id="hud-coins">0</span>
            </div>
          </div>
        </div>

        <div class="hud-center-status">
          <div class="combo-badge" id="hud-combo">COMBO 2X</div>
          <div class="time-trial-clock" id="hud-timer">60.0</div>
        </div>

        <div class="hud-top-right">
          <div class="health-meter-box">
            <span class="health-label">ARMOR INTEGRITY</span>
            <div class="health-bar-track">
              <div class="health-bar-fill" id="hud-health-fill" style="width: 100%;"></div>
            </div>
          </div>
          <button class="btn-hud" id="btn-hud-camera" title="Change Camera (C)">🎥</button>
          <button class="btn-hud" id="btn-hud-pause" title="Pause (ESC)">⏸️</button>
        </div>
      </div>

      <!-- Floating Notification Container -->
      <div class="stinger-container" id="hud-stingers"></div>

      <!-- Bottom Speedometer & Controls -->
      <div class="hud-bottom-bar">
        <!-- Touch Controls (Mobile / Tablets) -->
        <div class="touch-controls" id="touch-controls-box">
          <div class="touch-group">
            <button class="touch-btn" id="touch-left">◀</button>
            <button class="touch-btn" id="touch-right">▶</button>
          </div>
          <div class="touch-group">
            <button class="touch-btn nitro" id="touch-nitro">⚡</button>
            <button class="touch-btn" id="touch-brake">🛑</button>
            <button class="touch-btn" id="touch-gas">🏎️</button>
          </div>
        </div>

        <!-- Speedometer Cluster -->
        <div class="speedometer-cluster">
          <div class="nitro-gauge-box">
            <div class="nitro-gauge-track">
              <div class="nitro-gauge-fill" id="hud-nitro-fill" style="height: 100%;"></div>
            </div>
            <span class="nitro-label">NITRO</span>
          </div>

          <div class="speedo-dial-box">
            <div class="speedo-digital-row">
              <span class="speedo-number" id="hud-speed">0</span>
              <span class="speedo-unit">KM/H</span>
            </div>
            <div class="speedo-gear-pill" id="hud-gear">GEAR 1</div>
          </div>
        </div>
      </div>
    `,this.container.appendChild(this.element),this.bindEvents(),this.bindTouchControls()}bindEvents(){this.element.querySelector("#btn-hud-pause").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.callbacks.onPause&&this.callbacks.onPause()}),this.element.querySelector("#btn-hud-camera").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.callbacks.onCamera&&this.callbacks.onCamera()})}bindTouchControls(){const e=this.element.querySelector("#touch-left"),t=this.element.querySelector("#touch-right"),n=this.element.querySelector("#touch-gas"),s=this.element.querySelector("#touch-brake"),r=this.element.querySelector("#touch-nitro");this.input.bindTouchButton(e,"left"),this.input.bindTouchButton(t,"right"),this.input.bindTouchButton(n,"gas"),this.input.bindTouchButton(s,"brake"),this.input.bindTouchButton(r,"nitro")}update(e,t){if(!e)return;const n=Math.floor(e.speedKmh),s=this.element.querySelector("#hud-speed");s&&(s.textContent=n);const r=this.element.querySelector("#hud-gear");if(r){let p=1;n>190?p=6:n>150?p=5:n>110?p=4:n>70?p=3:n>30&&(p=2),r.textContent=`GEAR ${p}`}const a=this.element.querySelector("#hud-score");a&&(a.textContent=t.score.toLocaleString());const o=this.element.querySelector("#hud-distance");o&&(o.textContent=Math.floor(t.distance).toLocaleString());const l=this.element.querySelector("#hud-coins");l&&(l.textContent=t.coins);const c=this.element.querySelector("#hud-health-fill");if(c){const p=Math.max(0,Math.min(100,e.health/e.maxHealth*100));c.style.width=`${p}%`,p<30?c.style.background="#ff0055":c.style.background="linear-gradient(90deg, #ff0055 0%, #ffaa00 50%, #00ff88 100%)"}const u=this.element.querySelector("#hud-nitro-fill");if(u){const p=Math.max(0,Math.min(100,e.nitro/e.maxNitro*100));u.style.height=`${p}%`}const h=this.element.querySelector("#hud-combo");h&&(t.combo>1?(h.classList.add("active"),h.textContent=`COMBO ${t.combo}X 🔥`):h.classList.remove("active"));const d=this.element.querySelector("#hud-timer");if(d)if(t.mode===Jt.TIME_TRIAL){d.classList.add("active");const p=Math.max(0,t.timeRemaining);d.textContent=p.toFixed(1),p<=10?d.classList.add("urgent"):d.classList.remove("urgent")}else d.classList.remove("active")}showPopup(e){const t=this.element.querySelector("#hud-stingers");if(!t)return;const n=document.createElement("div");n.className=`stinger-popup ${e.type}`,n.textContent=e.text,t.appendChild(n),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},1200)}show(){this.element.style.display="flex"}hide(){this.element.style.display="none"}}class Nm{constructor(e,t,n){this.container=e,this.garage=t,this.callbacks=n,this.element=null,this.cars=this.garage.getAllCars(),this.currentIndex=0,this.palette=["#00f0ff","#ff5500","#e60050","#ffd700","#9900ff","#1a1e24","#00ff88"],this.render()}render(){this.element=document.createElement("div"),this.element.className="screen interactive",this.element.id="garage-screen",this.element.innerHTML=`
      <div class="garage-container glass-panel">
        <div class="garage-header">
          <div>
            <h2>SHOWROOM GARAGE</h2>
            <div style="font-size: 0.9rem; color: #94a3b8;">SELECT OR UNLOCK HIGH-PERFORMANCE MACHINES</div>
          </div>
          <div class="stat-pill coins">
            <span class="icon">🪙</span>
            <span id="garage-coins-val">0</span> COINS
          </div>
        </div>

        <div class="garage-content">
          <div class="garage-viewer-hint">
            <div class="carousel-nav">
              <button class="btn btn-secondary btn-icon" id="btn-car-prev">◀</button>
              <span style="font-weight: 800; font-size: 1.1rem; letter-spacing: 2px;" id="garage-car-index">1 / 5</span>
              <button class="btn btn-secondary btn-icon" id="btn-car-next">▶</button>
            </div>
          </div>

          <div class="car-specs-panel">
            <div class="car-title-box">
              <div class="tier-tag" id="garage-car-tier">CLASS C</div>
              <h3 id="garage-car-name">Phantom GT</h3>
              <p style="font-size: 0.85rem; color: #94a3b8; margin-top: 4px;" id="garage-car-desc"></p>
            </div>

            <div class="stat-bar-group">
              <div class="stat-row">
                <div class="stat-label-box">
                  <span>TOP SPEED</span>
                  <span id="stat-val-speed">180 KM/H</span>
                </div>
                <div class="stat-track"><div class="stat-fill" id="stat-fill-speed" style="width: 50%;"></div></div>
              </div>

              <div class="stat-row">
                <div class="stat-label-box">
                  <span>ACCELERATION</span>
                  <span id="stat-val-accel">65%</span>
                </div>
                <div class="stat-track"><div class="stat-fill" id="stat-fill-accel" style="width: 65%;"></div></div>
              </div>

              <div class="stat-row">
                <div class="stat-label-box">
                  <span>HANDLING</span>
                  <span id="stat-val-handling">70%</span>
                </div>
                <div class="stat-track"><div class="stat-fill" id="stat-fill-handling" style="width: 70%;"></div></div>
              </div>

              <div class="stat-row">
                <div class="stat-label-box">
                  <span>BRAKING</span>
                  <span id="stat-val-braking">60%</span>
                </div>
                <div class="stat-track"><div class="stat-fill" id="stat-fill-braking" style="width: 60%;"></div></div>
              </div>

              <div class="stat-row">
                <div class="stat-label-box">
                  <span>ARMOR INTEGRITY</span>
                  <span id="stat-val-armor">75%</span>
                </div>
                <div class="stat-track"><div class="stat-fill" id="stat-fill-armor" style="width: 75%;"></div></div>
              </div>
            </div>

            <div>
              <div style="font-size: 0.8rem; font-weight: 800; color: #cbd5e1; margin-bottom: 8px;">CUSTOM PAINT FINISH</div>
              <div class="color-picker-box" id="garage-color-palette"></div>
            </div>

            <div style="display: flex; gap: 12px; margin-top: 10px;">
              <button class="btn btn-primary" style="flex: 1;" id="btn-car-action">SELECT VEHICLE</button>
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-start;">
          <button class="btn btn-secondary" id="btn-garage-back">BACK TO MENU</button>
        </div>
      </div>
    `,this.container.appendChild(this.element),this.renderColorPalette(),this.bindEvents()}renderColorPalette(){const e=this.element.querySelector("#garage-color-palette");e.innerHTML="";for(const t of this.palette){const n=document.createElement("div");n.className="color-swatch",n.style.backgroundColor=t,n.addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.selectColor(t)}),e.appendChild(n)}}selectColor(e){const t=this.cars[this.currentIndex];this.garage.setCarColor(t.id,e),this.callbacks.onColorChange&&this.callbacks.onColorChange(t.id,e)}bindEvents(){this.element.querySelector("#btn-car-prev").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.currentIndex=(this.currentIndex-1+this.cars.length)%this.cars.length,this.updateView()}),this.element.querySelector("#btn-car-next").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.currentIndex=(this.currentIndex+1)%this.cars.length,this.updateView()}),this.element.querySelector("#btn-car-action").addEventListener("click",()=>{const e=this.cars[this.currentIndex];e.unlocked?(this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.garage.selectCar(e.id),this.updateView(),this.callbacks.onCarSelect&&this.callbacks.onCarSelect(e)):this.garage.canAfford(e.id)?(this.callbacks.onAudioBuy&&this.callbacks.onAudioBuy(),this.garage.buyCar(e.id),this.cars=this.garage.getAllCars(),this.updateView(),this.callbacks.onCarSelect&&this.callbacks.onCarSelect(e)):alert("Not enough coins! Race on the highway to earn more coins.")}),this.element.querySelector("#btn-garage-back").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.callbacks.onBack&&this.callbacks.onBack()})}updateView(){this.cars=this.garage.getAllCars();const e=this.cars[this.currentIndex],t=this.garage.getSelectedCar();this.element.querySelector("#garage-car-index").textContent=`${this.currentIndex+1} / ${this.cars.length}`,this.element.querySelector("#garage-car-tier").textContent=e.tier,this.element.querySelector("#garage-car-name").textContent=e.name,this.element.querySelector("#garage-car-desc").textContent=e.description,this.element.querySelector("#garage-coins-val").textContent=this.garage.storage.getCoins().toLocaleString();const n=e.stats;this.element.querySelector("#stat-val-speed").textContent=`${n.topSpeed} KM/H`,this.element.querySelector("#stat-fill-speed").style.width=`${n.topSpeed/300*100}%`,this.element.querySelector("#stat-val-accel").textContent=`${n.acceleration}%`,this.element.querySelector("#stat-fill-accel").style.width=`${n.acceleration}%`,this.element.querySelector("#stat-val-handling").textContent=`${n.handling}%`,this.element.querySelector("#stat-fill-handling").style.width=`${n.handling}%`,this.element.querySelector("#stat-val-braking").textContent=`${n.braking}%`,this.element.querySelector("#stat-fill-braking").style.width=`${n.braking}%`,this.element.querySelector("#stat-val-armor").textContent=`${n.armor}%`,this.element.querySelector("#stat-fill-armor").style.width=`${n.armor}%`;const s=this.element.querySelector("#btn-car-action");if(e.unlocked)t.id===e.id?(s.textContent="SELECTED ✓",s.className="btn btn-secondary",s.style.pointerEvents="none"):(s.textContent="SELECT VEHICLE",s.className="btn btn-primary",s.style.pointerEvents="auto");else{const r=this.garage.canAfford(e.id);s.textContent=`UNLOCK FOR ${e.price.toLocaleString()} COINS`,s.className=r?"btn btn-accent":"btn btn-secondary",s.style.pointerEvents="auto"}this.callbacks.onPreviewCar&&this.callbacks.onPreviewCar(e)}show(){this.element.classList.add("active");const e=this.garage.getSelectedCar();this.currentIndex=Math.max(0,this.cars.findIndex(t=>t.id===e.id)),this.updateView()}hide(){this.element.classList.remove("active")}}class Um{constructor(e,t){this.container=e,this.callbacks=t,this.element=null,this.render()}render(){this.element=document.createElement("div"),this.element.className="screen interactive",this.element.id="pause-screen",this.element.innerHTML=`
      <div class="results-box glass-panel">
        <h2 style="color: var(--primary-glow); text-shadow: 0 0 20px rgba(0,240,255,0.6);">RACE PAUSED</h2>
        <div style="font-size: 0.95rem; color: #94a3b8; margin-top: -10px;">TAKE A BREATHER BEFORE HITTING THE NITRO</div>

        <div style="display: flex; flex-direction: column; gap: 14px; width: 100%; margin-top: 15px;">
          <button class="btn btn-primary" id="btn-pause-resume">RESUME RACE</button>
          <button class="btn btn-secondary" id="btn-pause-restart">RESTART</button>
          <button class="btn btn-secondary" id="btn-pause-settings">SETTINGS</button>
          <button class="btn btn-accent" id="btn-pause-menu">MAIN MENU</button>
        </div>
      </div>
    `,this.container.appendChild(this.element),this.bindEvents()}bindEvents(){this.element.querySelector("#btn-pause-resume").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.callbacks.onResume&&this.callbacks.onResume()}),this.element.querySelector("#btn-pause-restart").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.callbacks.onRestart&&this.callbacks.onRestart()}),this.element.querySelector("#btn-pause-settings").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.callbacks.onSettings&&this.callbacks.onSettings()}),this.element.querySelector("#btn-pause-menu").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.callbacks.onMainMenu&&this.callbacks.onMainMenu()})}show(){this.element.classList.add("active")}hide(){this.element.classList.remove("active")}}class Fm{constructor(e,t){this.container=e,this.callbacks=t,this.element=null,this.render()}render(){this.element=document.createElement("div"),this.element.className="screen interactive",this.element.id="results-screen",this.element.innerHTML=`
      <div class="results-box glass-panel">
        <div id="results-record-badge" class="record-badge" style="display: none;">NEW HIGH SCORE RECORD!</div>
        <h2 id="results-title">RACE FINISHED</h2>

        <div class="results-stats-grid">
          <div class="result-card">
            <span class="label">FINAL SCORE</span>
            <span class="value" id="res-score" style="color: var(--primary-glow);">0</span>
          </div>

          <div class="result-card">
            <span class="label">DISTANCE</span>
            <span class="value" id="res-distance">0 m</span>
          </div>

          <div class="result-card">
            <span class="label">COINS EARNED</span>
            <span class="value" id="res-coins" style="color: var(--gold-color);">0</span>
          </div>

          <div class="result-card">
            <span class="label">NEAR MISSES</span>
            <span class="value" id="res-nearmiss">0</span>
          </div>
        </div>

        <div style="display: flex; gap: 12px; width: 100%; margin-top: 10px;">
          <button class="btn btn-primary" style="flex: 1.5;" id="btn-results-retry">RACE AGAIN</button>
          <button class="btn btn-secondary" style="flex: 1;" id="btn-results-garage">GARAGE</button>
          <button class="btn btn-secondary" style="flex: 1;" id="btn-results-menu">MENU</button>
        </div>
      </div>
    `,this.container.appendChild(this.element),this.bindEvents()}bindEvents(){this.element.querySelector("#btn-results-retry").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.callbacks.onRetry&&this.callbacks.onRetry()}),this.element.querySelector("#btn-results-garage").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.callbacks.onGarage&&this.callbacks.onGarage()}),this.element.querySelector("#btn-results-menu").addEventListener("click",()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.callbacks.onMainMenu&&this.callbacks.onMainMenu()})}show(e){this.element.classList.add("active");const t=this.element.querySelector("#results-title");e.reason==="crash"?(t.textContent="CAR TOTALED!",t.style.color="var(--danger-color)"):e.reason==="time_up"?(t.textContent="TIME EXPIRED!",t.style.color="var(--warning-color)"):e.reason==="challenge_won"?(t.textContent="CHALLENGE COMPLETE!",t.style.color="var(--success-color)"):(t.textContent="RACE OVER",t.style.color="var(--primary-glow)");const n=this.element.querySelector("#results-record-badge");n.style.display=e.isNewRecord?"block":"none",this.element.querySelector("#res-score").textContent=e.score.toLocaleString(),this.element.querySelector("#res-distance").textContent=`${e.distance.toLocaleString()} m`,this.element.querySelector("#res-coins").textContent=e.coins,this.element.querySelector("#res-nearmiss").textContent=e.nearMisses}hide(){this.element.classList.remove("active")}}class Om{constructor(e,t,n,s){this.container=e,this.storage=t,this.audio=n,this.callbacks=s,this.element=null,this.render()}render(){this.element=document.createElement("div"),this.element.className="screen interactive",this.element.id="settings-screen";const e=this.storage.getSettings();this.element.innerHTML=`
      <div class="modal-container glass-panel">
        <div class="modal-header">
          <h2>SETTINGS</h2>
          <button class="btn btn-secondary btn-icon" id="btn-settings-close">✕</button>
        </div>

        <div class="setting-row">
          <label>SOUND EFFECTS</label>
          <div class="setting-control">
            <input type="range" id="setting-sfx" min="0" max="1" step="0.05" value="${e.soundVolume}">
            <span id="setting-sfx-val">${Math.round(e.soundVolume*100)}%</span>
          </div>
        </div>

        <div class="setting-row">
          <label>SYNTHWAVE MUSIC</label>
          <div class="setting-control">
            <input type="range" id="setting-music" min="0" max="1" step="0.05" value="${e.musicVolume}">
            <span id="setting-music-val">${Math.round(e.musicVolume*100)}%</span>
          </div>
        </div>

        <div class="setting-row">
          <label>GRAPHICS QUALITY</label>
          <div class="setting-control">
            <select id="setting-graphics" style="padding: 8px 12px; background: rgba(15,23,42,0.9); border: 1px solid var(--border-light); color: #fff; border-radius: 6px; font-weight: 700;">
              <option value="LOW" ${e.graphicsQuality==="LOW"?"selected":""}>LOW (Max FPS)</option>
              <option value="MEDIUM" ${e.graphicsQuality==="MEDIUM"?"selected":""}>MEDIUM (Balanced)</option>
              <option value="HIGH" ${e.graphicsQuality==="HIGH"?"selected":""}>HIGH (Ultra Glow)</option>
            </select>
          </div>
        </div>

        <div class="setting-row">
          <label>CAMERA PERSPECTIVE</label>
          <div class="setting-control">
            <select id="setting-camera" style="padding: 8px 12px; background: rgba(15,23,42,0.9); border: 1px solid var(--border-light); color: #fff; border-radius: 6px; font-weight: 700;">
              <option value="chase" ${e.cameraMode==="chase"?"selected":""}>CHASE (Standard)</option>
              <option value="close" ${e.cameraMode==="close"?"selected":""}>CLOSE (Action)</option>
              <option value="hood" ${e.cameraMode==="hood"?"selected":""}>HOOD (First-Person)</option>
            </select>
          </div>
        </div>

        <div style="margin-top: 15px; display: flex; justify-content: flex-end;">
          <button class="btn btn-primary" id="btn-settings-save">SAVE & CLOSE</button>
        </div>
      </div>
    `,this.container.appendChild(this.element),this.bindEvents()}bindEvents(){const e=this.element.querySelector("#setting-sfx"),t=this.element.querySelector("#setting-sfx-val");e.addEventListener("input",l=>{const c=parseFloat(l.target.value);t.textContent=`${Math.round(c*100)}%`,this.audio.setSfxVolume(c)});const n=this.element.querySelector("#setting-music"),s=this.element.querySelector("#setting-music-val");n.addEventListener("input",l=>{const c=parseFloat(l.target.value);s.textContent=`${Math.round(c*100)}%`,this.audio.setMusicVolume(c)});const r=this.element.querySelector("#btn-settings-close"),a=this.element.querySelector("#btn-settings-save"),o=()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick();const l=parseFloat(e.value),c=parseFloat(n.value),u=this.element.querySelector("#setting-graphics").value,h=this.element.querySelector("#setting-camera").value;this.storage.saveSettings({soundVolume:l,musicVolume:c,graphicsQuality:u,cameraMode:h}),this.callbacks.onSettingsChanged&&this.callbacks.onSettingsChanged({graphicsQuality:u,cameraMode:h}),this.hide()};r.addEventListener("click",o),a.addEventListener("click",o)}show(){this.element.classList.add("active")}hide(){this.element.classList.remove("active")}}class Bm{constructor(e,t){this.container=e,this.callbacks=t,this.element=null,this.render()}render(){this.element=document.createElement("div"),this.element.className="screen interactive",this.element.id="instructions-screen",this.element.innerHTML=`
      <div class="modal-container glass-panel" style="max-width: 650px;">
        <div class="modal-header">
          <h2>HOW TO PLAY & CONTROLS</h2>
          <button class="btn btn-secondary btn-icon" id="btn-help-close">✕</button>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div>
            <h4 style="color: var(--primary-glow); margin-bottom: 10px;">DESKTOP CONTROLS</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem;">
              <li><strong>W / UP ARROW</strong>: Accelerate</li>
              <li><strong>S / DOWN ARROW</strong>: Brake / Reverse</li>
              <li><strong>A / LEFT ARROW</strong>: Steer Left</li>
              <li><strong>D / RIGHT ARROW</strong>: Steer Right</li>
              <li><strong>SHIFT / N</strong>: Nitro Boost ⚡</li>
              <li><strong>SPACE</strong>: Handbrake / Drift</li>
              <li><strong>C</strong>: Change Camera View</li>
              <li><strong>ESC / P</strong>: Pause Game</li>
            </ul>
          </div>

          <div>
            <h4 style="color: var(--gold-color); margin-bottom: 10px;">MOBILE CONTROLS</h4>
            <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 10px;">
              On touch devices, use the virtual buttons:
            </p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem;">
              <li><strong>◀ / ▶</strong>: Steer Left and Right</li>
              <li><strong>🏎️</strong>: Throttle / Gas</li>
              <li><strong>🛑</strong>: Foot Brake</li>
              <li><strong>⚡</strong>: Nitro Super Boost</li>
            </ul>
          </div>
        </div>

        <div style="background: rgba(0, 240, 255, 0.08); border-left: 4px solid var(--primary-glow); padding: 12px 16px; border-radius: 4px; font-size: 0.85rem; line-height: 1.4;">
          <strong>PRO TIPS:</strong><br>
          • Pass close to traffic vehicles at high speed to score massive <strong>NEAR MISS</strong> bonuses (+500 pts)!<br>
          • Chain consecutive passes and near misses without scraping the guardrails to build up to a <strong>5X COMBO</strong> multiplier!<br>
          • Collect floating <strong>GOLD COINS</strong> to unlock exotic supercars in the Showroom Garage!
        </div>

        <div style="display: flex; justify-content: flex-end; margin-top: 10px;">
          <button class="btn btn-primary" id="btn-help-gotit">GOT IT, LET'S RACE!</button>
        </div>
      </div>
    `,this.container.appendChild(this.element),this.bindEvents()}bindEvents(){const e=()=>{this.callbacks.onAudioClick&&this.callbacks.onAudioClick(),this.hide()};this.element.querySelector("#btn-help-close").addEventListener("click",e),this.element.querySelector("#btn-help-gotit").addEventListener("click",e)}show(){this.element.classList.add("active")}hide(){this.element.classList.remove("active")}}class Gm{constructor(e,t){this.game=e,this.container=t,this.initScreens()}initScreens(){const e=()=>this.game.audio.playButtonClick();this.mainMenu=new Im(this.container,{onAudioClick:e,onPlay:t=>{this.game.startRace(t)},onGarage:()=>{this.game.enterGarage()},onSettings:()=>{this.settingsScreen.show()},onHelp:()=>{this.instructionsModal.show()},onModeSelect:t=>{this.game.state.setMode(t),this.updateMenuStats()}}),this.hud=new Dm(this.container,this.game.input,{onAudioClick:e,onPause:()=>{this.game.pauseGame()},onCamera:()=>{this.game.cameraController.cycleMode()}}),this.garageScreen=new Nm(this.container,this.game.garage,{onAudioClick:e,onAudioBuy:()=>this.game.audio.playCoinSound(),onCarSelect:t=>{this.game.applySelectedCar(t),this.updateMenuStats()},onPreviewCar:t=>{this.game.previewGarageCar(t)},onColorChange:(t,n)=>{this.game.updateGarageCarColor(t,n)},onBack:()=>{this.game.exitGarage()}}),this.pauseMenu=new Um(this.container,{onAudioClick:e,onResume:()=>{this.game.resumeGame()},onRestart:()=>{this.game.restartRace()},onSettings:()=>{this.settingsScreen.show()},onMainMenu:()=>{this.game.returnToMainMenu()}}),this.resultsScreen=new Fm(this.container,{onAudioClick:e,onRetry:()=>{this.game.restartRace()},onGarage:()=>{this.game.enterGarage()},onMainMenu:()=>{this.game.returnToMainMenu()}}),this.settingsScreen=new Om(this.container,this.game.storage,this.game.audio,{onAudioClick:e,onSettingsChanged:t=>{this.game.applyGraphicsSettings(t.graphicsQuality),t.cameraMode&&this.game.cameraController.setMode(t.cameraMode)}}),this.instructionsModal=new Bm(this.container,{onAudioClick:e})}updateMenuStats(){const e=this.game.storage.getCoins(),t=this.game.storage.getHighScores();this.mainMenu.updateStats(e,t)}showScreen(e,t={}){switch(this.mainMenu.hide(),this.hud.hide(),this.garageScreen.hide(),this.pauseMenu.hide(),this.resultsScreen.hide(),e){case Qe.MENU:this.updateMenuStats(),this.mainMenu.show();break;case Qe.GARAGE:this.garageScreen.show();break;case Qe.PLAYING:this.hud.show();break;case Qe.PAUSED:this.hud.show(),this.pauseMenu.show();break;case Qe.GAME_OVER:this.resultsScreen.show(t);break}}updateHUD(e,t){this.hud.update(e,t)}showHUDPopup(e){this.hud.showPopup(e)}}class km{constructor(e,t){this.canvas=e,this.uiContainer=t,this.storage=new _m,this.audio=new xm(this.storage),this.input=new vm,this.state=new mm,this.score=new Lm(this.storage),this.garage=new Tm(this.storage),this.initThree(),this.textures=new Sm,this.models=new Mm(this.textures),this.particles=new Em(this.scene,this.textures),this.road=new ym(this.scene,this.textures,this.models),this.environment=new bm(this.scene,this.textures,this.models),this.traffic=new wm(this.scene,this.models),this.coins=new Rm(this.scene,this.models),this.collisions=new Cm,this.cameraController=new Pm(this.camera),this.playerCar=null,this.initPlayerCar(),this.initGarageShowroom(),this.ui=new Gm(this,this.uiContainer),this.loop=new gm(this.update.bind(this),this.render.bind(this)),this.bindInputActions(),window.addEventListener("resize",this.onWindowResize.bind(this));const n=this.storage.getSettings();this.applyGraphicsSettings(n.graphicsQuality),this.cameraController.setMode(n.cameraMode||"chase"),this.score.onScorePopup=s=>this.ui.showHUDPopup(s),this.score.onChallengeComplete=()=>this.endRace("challenge_won"),this.storage.hasSeenTutorial()||setTimeout(()=>{this.ui.instructionsModal.show(),this.storage.setSeenTutorial(!0)},500),this.state.setState(Qe.MENU),this.ui.showScreen(Qe.MENU),this.loop.start()}initThree(){this.scene=new Xc;const e=window.innerWidth/window.innerHeight;this.camera=new $t(60,e,.1,1e3),this.renderer=new dm({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=No,this.renderer.toneMapping=ra,this.renderer.toneMappingExposure=1.05}initPlayerCar(){const e=this.garage.getSelectedCar(),t=this.garage.storage.getCustomColor(e.id);this.playerCar&&this.scene.remove(this.playerCar.group),this.playerCar=new Am(this.models,e,t),this.scene.add(this.playerCar.group)}initGarageShowroom(){this.garagePedestal=new Tt,this.garagePedestal.position.set(0,0,0);const e=new Xt(3.5,3.8,.3,32),t=new dt({color:1119778,metalness:.85,roughness:.2}),n=new pe(e,t);n.position.y=-.15,this.garagePedestal.add(n);const s=new Ns(3.6,.06,8,32);s.rotateX(Math.PI/2);const r=new wn({color:61695}),a=new pe(s,r);this.garagePedestal.add(a),this.garageSpot=new uh(16777215,2.5,20,Math.PI/4,.3),this.garageSpot.position.set(0,8,0),this.garageSpot.target=this.garagePedestal,this.garagePedestal.add(this.garageSpot),this.garagePedestal.visible=!1,this.scene.add(this.garagePedestal),this.garageCarGroup=new Tt,this.garagePedestal.add(this.garageCarGroup)}bindInputActions(){this.input.onPauseCallback=()=>{const e=this.state.getState();e===Qe.PLAYING?this.pauseGame():e===Qe.PAUSED&&this.resumeGame()},this.input.onCameraCallback=()=>{this.state.getState()===Qe.PLAYING&&this.cameraController.cycleMode()}}onWindowResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}applyGraphicsSettings(e){const t=Do[e]||Do.HIGH;this.renderer.shadowMap.enabled=t.shadows,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,t.pixelRatio))}startRace(e=Jt.ENDLESS){this.audio.ensureContext(),this.audio.startEngine(),this.audio.startMusic(),this.state.setMode(e),this.score.setMode(e),this.initPlayerCar(),this.playerCar.reset(1),this.road.reset(),this.environment.reset(),this.traffic.reset(),this.coins.reset(),this.particles.clear(),this.cameraController.reset(this.playerCar),this.garagePedestal.visible=!1,this.playerCar.group.visible=!0,this.state.setState(Qe.PLAYING),this.ui.showScreen(Qe.PLAYING)}pauseGame(){this.state.getState()===Qe.PLAYING&&(this.audio.stopEngine(),this.state.setState(Qe.PAUSED),this.ui.showScreen(Qe.PAUSED))}resumeGame(){this.state.getState()===Qe.PAUSED&&(this.audio.startEngine(),this.state.setState(Qe.PLAYING),this.ui.showScreen(Qe.PLAYING))}restartRace(){this.startRace(this.state.getMode())}returnToMainMenu(){this.audio.stopEngine(),this.traffic.reset(),this.coins.reset(),this.particles.clear(),this.garagePedestal.visible=!1,this.playerCar&&(this.playerCar.group.visible=!0,this.playerCar.reset(1)),this.state.setState(Qe.MENU),this.ui.showScreen(Qe.MENU)}endRace(e){this.audio.stopEngine(),this.audio.playGameOverStinger();const t=this.score.finalizeRun();t.reason=e,this.state.setState(Qe.GAME_OVER),this.ui.showScreen(Qe.GAME_OVER,t)}enterGarage(){this.state.setState(Qe.GARAGE),this.ui.showScreen(Qe.GARAGE),this.playerCar.group.visible=!1,this.traffic.reset(),this.coins.reset(),this.garagePedestal.visible=!0,this.previewGarageCar(this.garage.getSelectedCar()),this.camera.position.set(0,3.2,8.5),this.camera.lookAt(0,1,0)}exitGarage(){this.garagePedestal.visible=!1,this.initPlayerCar(),this.playerCar.group.visible=!0,this.state.setState(Qe.MENU),this.ui.showScreen(Qe.MENU)}previewGarageCar(e){for(;this.garageCarGroup.children.length>0;)this.garageCarGroup.remove(this.garageCarGroup.children[0]);const t=this.garage.storage.getCustomColor(e.id),n=this.models.createPlayerVehicle(e,t);this.garageCarGroup.add(n.group),this.currentGaragePreviewData=n}updateGarageCarColor(e,t){this.currentGaragePreviewData&&this.currentGaragePreviewData.bodyMaterial.color.set(t)}applySelectedCar(e){this.initPlayerCar()}update(e){const t=this.state.getState();if(t===Qe.PLAYING){if(this.playerCar.update(e,this.input,this.road,this.particles,this.audio),this.playerCar.health<=0){this.endRace("crash");return}this.road.update(this.playerCar.position.z),this.environment.update(this.playerCar.position.z,this.road);const n=1+Math.min(2,this.score.distance/2500);this.traffic.setDifficulty(n),this.traffic.update(e,this.playerCar,this.road,this.particles,this.audio,(s,r)=>this.score.handleScoreEvent(s,r)),this.coins.update(e,this.playerCar,this.road,this.particles,this.audio,(s,r)=>{this.score.handleCollectEvent(s,r),s==="nitro"&&this.playerCar.addNitro(r.amount)}),this.collisions.checkPlayerTrafficCollisions(this.playerCar,this.traffic,this.particles,this.audio,s=>{this.score.handleCrash(),this.cameraController.addShake(.8,.45),s.isDead&&this.endRace("crash")}),this.score.update(e,this.playerCar,()=>{this.endRace("time_up")}),this.cameraController.update(e,this.playerCar,this.road),this.particles.update(e),this.ui.updateHUD(this.playerCar,this.score)}else if(t===Qe.GARAGE)this.garagePedestal.rotation.y+=e*.75,this.particles.update(e);else if(t===Qe.MENU){const n=performance.now()*4e-4;this.camera.position.set(Math.sin(n)*8,4.5,12),this.camera.lookAt(0,1.2,-15),this.particles.update(e)}}render(){this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("webgl-canvas"),e=document.getElementById("ui-root");if(!i||!e){console.error("Fatal: Required DOM containers not found.");return}const t=new km(i,e);window.__VELOCITY_RUSH_GAME__=t});
//# sourceMappingURL=index-Bl7VmLct.js.map

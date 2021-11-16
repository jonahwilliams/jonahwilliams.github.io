(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=="function")n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.r3(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.r4(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.mf(b)
return new s(c,this)}:function(){if(s===null)s=A.mf(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.mf(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={lX:function lX(){},
mR(a){return new A.cS("Field '"+a+"' has been assigned during initialization.")},
bS(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
m3(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
pk(a,b,c){return A.m3(A.bS(A.bS(c,a),b))},
eE(a,b,c){return a},
na(a,b,c,d){A.jY(b,"start")
if(c!=null){A.jY(c,"end")
if(b>c)A.V(A.bs(b,0,c,"start",null))}return new A.e4(a,b,c,d.i("e4<0>"))},
mU(a,b,c,d){if(t.gt.b(a))return new A.dC(a,b,c.i("@<0>").B(d).i("dC<1,2>"))
return new A.cm(a,b,c.i("@<0>").B(d).i("cm<1,2>"))},
mP(){return new A.bt("No element")},
oZ(){return new A.bt("Too many elements")},
oY(){return new A.bt("Too few elements")},
ph(a,b,c){A.fV(a,0,J.an(a)-1,b,c)},
fV(a,b,c,d,e){if(c-b<=32)A.n5(a,b,c,d,e)
else A.n4(a,b,c,d,e)},
n5(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.ax(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.Y()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
n4(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.T(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.T(a4+a5,2),f=g-j,e=g+j,d=J.ax(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.Y()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.Y()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.Y()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.Y()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.Y()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.Y()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.Y()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.Y()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.Y()
if(a2>0){s=a1
a1=a0
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.a_(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.j(a3,p,d.h(a3,r))
d.j(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.h(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.j(a3,p,d.h(a3,r))
l=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,o)
q=m
r=l
break}else{d.j(a3,p,d.h(a3,q))
d.j(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.j(a3,p,d.h(a3,r))
d.j(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.j(a3,p,d.h(a3,r))
l=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,o)
r=l}else{d.j(a3,p,d.h(a3,q))
d.j(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.j(a3,a4,d.h(a3,a2))
d.j(a3,a2,b)
a2=q+1
d.j(a3,a5,d.h(a3,a2))
d.j(a3,a2,a0)
A.fV(a3,a4,r-2,a6,a7)
A.fV(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.a_(a6.$2(d.h(a3,r),b),0);)++r
for(;J.a_(a6.$2(d.h(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.j(a3,p,d.h(a3,r))
d.j(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.j(a3,p,d.h(a3,r))
l=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,o)
r=l}else{d.j(a3,p,d.h(a3,q))
d.j(a3,q,o)}q=m
break}}A.fV(a3,r,q,a6,a7)}else A.fV(a3,r,q,a6,a7)},
cS:function cS(a){this.a=a},
k4:function k4(){},
p:function p(){},
aR:function aR(){},
e4:function e4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bp:function bp(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cm:function cm(a,b,c){this.a=a
this.b=b
this.$ti=c},
dC:function dC(a,b,c){this.a=a
this.b=b
this.$ti=c},
dP:function dP(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.$ti=c},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
e7:function e7(a,b,c){this.a=a
this.b=b
this.$ti=c},
aq:function aq(){},
oV(a){if(typeof a=="number")return B.c.gA(a)
if(t.ha.b(a))return A.cs(a)
return A.lk(a)},
oW(a){return new A.jd(a)},
nU(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
qS(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
B(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.c6(a)
return s},
cs(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
jU(a){return A.p7(a)},
p7(a){var s,r,q,p
if(a instanceof A.v)return A.al(A.b6(a),null)
if(J.dj(a)===B.dV||t.cx.b(a)){s=B.aF(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.al(A.b6(a),null)},
cZ(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
pe(a){var s=A.cZ(a).getUTCFullYear()+0
return s},
pc(a){var s=A.cZ(a).getUTCMonth()+1
return s},
p8(a){var s=A.cZ(a).getUTCDate()+0
return s},
p9(a){var s=A.cZ(a).getUTCHours()+0
return s},
pb(a){var s=A.cZ(a).getUTCMinutes()+0
return s},
pd(a){var s=A.cZ(a).getUTCSeconds()+0
return s},
pa(a){var s=A.cZ(a).getUTCMilliseconds()+0
return s},
cD(a){throw A.d(A.nE(a))},
b(a,b){if(a==null)J.an(a)
throw A.d(A.cC(a,b))},
cC(a,b){var s,r="index"
if(!A.mc(b))return new A.bi(!0,b,r,null)
s=A.G(J.an(a))
if(b<0||b>=s)return A.Q(b,a,r,null,s)
return A.n_(b,r)},
nE(a){return new A.bi(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.fG()
s=new Error()
s.dartException=a
r=A.r5
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
r5(){return J.c6(this.dartException)},
V(a){throw A.d(a)},
A(a){throw A.d(A.aX(a))},
bw(a){var s,r,q,p,o,n
a=A.r_(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.kg(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
kh(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
nd(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lY(a,b){var s=b==null,r=s?null:b.method
return new A.fn(a,r,s?null:b.receiver)},
bh(a){if(a==null)return new A.jQ(a)
if(a instanceof A.dD)return A.c5(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.c5(a,a.dartException)
return A.qs(a)},
c5(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qs(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.cp(r,16)&8191)===10)switch(q){case 438:return A.c5(a,A.lY(A.B(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.B(s)+" (Error "+q+")"
return A.c5(a,new A.dV(p,e))}}if(a instanceof TypeError){o=$.o5()
n=$.o6()
m=$.o7()
l=$.o8()
k=$.ob()
j=$.oc()
i=$.oa()
$.o9()
h=$.oe()
g=$.od()
f=o.a_(s)
if(f!=null)return A.c5(a,A.lY(A.ad(s),f))
else{f=n.a_(s)
if(f!=null){f.method="call"
return A.c5(a,A.lY(A.ad(s),f))}else{f=m.a_(s)
if(f==null){f=l.a_(s)
if(f==null){f=k.a_(s)
if(f==null){f=j.a_(s)
if(f==null){f=i.a_(s)
if(f==null){f=l.a_(s)
if(f==null){f=h.a_(s)
if(f==null){f=g.a_(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.ad(s)
return A.c5(a,new A.dV(s,f==null?e:f.method))}}}return A.c5(a,new A.hd(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.e2()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.c5(a,new A.bi(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.e2()
return a},
bE(a){var s
if(a instanceof A.dD)return a.b
if(a==null)return new A.eo(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.eo(a)},
lk(a){if(a==null||typeof a!="object")return J.ay(a)
else return A.cs(a)},
nG(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
qQ(a,b,c,d,e,f){t.gY.a(a)
switch(A.G(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.lU("Unsupported number of arguments for wrapped closure"))},
bg(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.qQ)
a.$identity=s
return s},
oK(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.h0().constructor.prototype):Object.create(new A.cJ(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.mJ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.oG(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.mJ(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
oG(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.oE)}throw A.d("Error in functionType of tearoff")},
oH(a,b,c,d){var s=A.mG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
mJ(a,b,c,d){var s,r
if(c)return A.oJ(a,b,d)
s=b.length
r=A.oH(s,d,a,b)
return r},
oI(a,b,c,d){var s=A.mG,r=A.oF
switch(b?-1:a){case 0:throw A.d(new A.fT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
oJ(a,b,c){var s,r,q,p=$.mE
p==null?$.mE=A.mD("interceptor"):p
s=$.mF
s==null?$.mF=A.mD("receiver"):s
r=b.length
q=A.oI(r,c,a,b)
return q},
mf(a){return A.oK(a)},
oE(a,b){return A.kW(v.typeUniverse,A.b6(a.a),b)},
mG(a){return a.a},
oF(a){return a.b},
mD(a){var s,r,q,p=new A.cJ("receiver","interceptor"),o=J.mQ(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.cG("Field name "+a+" not found.",null))},
O(a){if(a==null)A.qt("boolean expression must not be null")
return a},
qt(a){throw A.d(new A.hk(a))},
r3(a){throw A.d(new A.f5(a))},
qK(a){return v.getIsolateTag(a)},
tc(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qV(a){var s,r,q,p,o,n=A.ad($.nH.$1(a)),m=$.l9[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lh[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.pP($.nD.$2(a,n))
if(q!=null){m=$.l9[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lh[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.lj(s)
$.l9[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.lh[n]=s
return s}if(p==="-"){o=A.lj(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.nP(a,s)
if(p==="*")throw A.d(A.m4(n))
if(v.leafTags[n]===true){o=A.lj(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.nP(a,s)},
nP(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.mi(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lj(a){return J.mi(a,!1,null,!!a.$iy)},
qW(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.lj(s)
else return J.mi(s,c,null,null)},
qO(){if(!0===$.mg)return
$.mg=!0
A.qP()},
qP(){var s,r,q,p,o,n,m,l
$.l9=Object.create(null)
$.lh=Object.create(null)
A.qN()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nQ.$1(o)
if(n!=null){m=A.qW(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qN(){var s,r,q,p,o,n,m=B.bQ()
m=A.di(B.bR,A.di(B.bS,A.di(B.aG,A.di(B.aG,A.di(B.bT,A.di(B.bU,A.di(B.bV(B.aF),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nH=new A.le(p)
$.nD=new A.lf(o)
$.nQ=new A.lg(n)},
di(a,b){return a(b)||b},
r2(a,b,c){var s=a.indexOf(b,c)
return s>=0},
r_(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cL:function cL(){},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a7:function a7(a,b){this.a=a
this.$ti=b},
jd:function jd(a){this.a=a},
kg:function kg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dV:function dV(a,b){this.a=a
this.b=b},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
hd:function hd(a){this.a=a},
jQ:function jQ(a){this.a=a},
dD:function dD(a,b){this.a=a
this.b=b},
eo:function eo(a){this.a=a
this.b=null},
cb:function cb(){},
eZ:function eZ(){},
f_:function f_(){},
h4:function h4(){},
h0:function h0(){},
cJ:function cJ(a,b){this.a=a
this.b=b},
fT:function fT(a){this.a=a},
hk:function hk(a){this.a=a},
aB:function aB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jq:function jq(a){this.a=a},
jp:function jp(a){this.a=a},
js:function js(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dM:function dM(a,b){this.a=a
this.$ti=b},
dN:function dN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
le:function le(a){this.a=a},
lf:function lf(a){this.a=a},
lg:function lg(a){this.a=a},
r4(a){return A.V(A.mR(a))},
nf(a){var s=new A.kw(a)
return s.b=s},
c2(a,b){if(a===$)throw A.d(new A.cS("Field '"+b+"' has not been initialized."))
return a},
df(a,b){if(a!==$)throw A.d(A.mR(b))},
kw:function kw(a){this.a=a
this.b=null},
nt(a,b,c){},
cB(a){return a},
mV(a){return new Float32Array(A.cB(a))},
jN(a,b,c){A.nt(a,b,c)
return new Float32Array(a,b,c)},
mW(a,b,c){var s
A.nt(a,b,c)
s=new Uint8Array(a,b,c)
return s},
p6(a){return new Uint8Array(a)},
bB(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.cC(b,a))},
fx:function fx(){},
cr:function cr(){},
cV:function cV(){},
cq:function cq(){},
dS:function dS(){},
dR:function dR(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
cW:function cW(){},
dT:function dT(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
n1(a,b){var s=b.c
return s==null?b.c=A.m9(a,b.z,!0):s},
n0(a,b){var s=b.c
return s==null?b.c=A.ex(a,"ar",[b.z]):s},
n2(a){var s=a.y
if(s===6||s===7||s===8)return A.n2(a.z)
return s===11||s===12},
pg(a){return a.cy},
aL(a){return A.ig(v.typeUniverse,a,!1)},
c3(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.c3(a,s,a0,a1)
if(r===s)return b
return A.no(a,r,!0)
case 7:s=b.z
r=A.c3(a,s,a0,a1)
if(r===s)return b
return A.m9(a,r,!0)
case 8:s=b.z
r=A.c3(a,s,a0,a1)
if(r===s)return b
return A.nn(a,r,!0)
case 9:q=b.Q
p=A.eD(a,q,a0,a1)
if(p===q)return b
return A.ex(a,b.z,p)
case 10:o=b.z
n=A.c3(a,o,a0,a1)
m=b.Q
l=A.eD(a,m,a0,a1)
if(n===o&&l===m)return b
return A.m7(a,n,l)
case 11:k=b.z
j=A.c3(a,k,a0,a1)
i=b.Q
h=A.qp(a,i,a0,a1)
if(j===k&&h===i)return b
return A.nm(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.eD(a,g,a0,a1)
o=b.z
n=A.c3(a,o,a0,a1)
if(f===g&&n===o)return b
return A.m8(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.iy("Attempted to substitute unexpected RTI kind "+c))}},
eD(a,b,c,d){var s,r,q,p,o=b.length,n=A.kY(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.c3(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
qq(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.kY(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.c3(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
qp(a,b,c,d){var s,r=b.a,q=A.eD(a,r,c,d),p=b.b,o=A.eD(a,p,c,d),n=b.c,m=A.qq(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.hC()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
qB(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.qL(s)
return a.$S()}return null},
nJ(a,b){var s
if(A.n2(b))if(a instanceof A.cb){s=A.qB(a)
if(s!=null)return s}return A.b6(a)},
b6(a){var s
if(a instanceof A.v){s=a.$ti
return s!=null?s:A.ma(a)}if(Array.isArray(a))return A.U(a)
return A.ma(J.dj(a))},
U(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
E(a){var s=a.$ti
return s!=null?s:A.ma(a)},
ma(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.q5(a,s)},
q5(a,b){var s=a instanceof A.cb?a.__proto__.__proto__.constructor:b,r=A.pM(v.typeUniverse,s.name)
b.$ccache=r
return r},
qL(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.ig(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
qE(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.ev(a)
q=A.ig(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.ev(q):p},
r6(a){return A.qE(A.ig(v.typeUniverse,a,!1))},
q4(a){var s,r,q,p,o=this
if(o===t.K)return A.de(o,a,A.q9)
if(!A.bF(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.de(o,a,A.qc)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.mc
else if(r===t.i||r===t.cZ)q=A.q8
else if(r===t.N)q=A.qa
else q=r===t.k4?A.l0:null
if(q!=null)return A.de(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.qT)){o.r="$i"+p
if(p==="o")return A.de(o,a,A.q7)
return A.de(o,a,A.qb)}}else if(s===7)return A.de(o,a,A.q2)
return A.de(o,a,A.q0)},
de(a,b,c){a.b=c
return a.b(b)},
q3(a){var s,r=this,q=A.q_
if(!A.bF(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.pQ
else if(r===t.K)q=A.pO
else{s=A.eF(r)
if(s)q=A.q1}r.a=q
return r.a(a)},
l1(a){var s,r=a.y
if(!A.bF(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&A.l1(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
q0(a){var s=this
if(a==null)return A.l1(s)
return A.S(v.typeUniverse,A.nJ(a,s),null,s,null)},
q2(a){if(a==null)return!0
return this.z.b(a)},
qb(a){var s,r=this
if(a==null)return A.l1(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dj(a)[s]},
q7(a){var s,r=this
if(a==null)return A.l1(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dj(a)[s]},
q_(a){var s,r=this
if(a==null){s=A.eF(r)
if(s)return a}else if(r.b(a))return a
A.nw(a,r)},
q1(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.nw(a,s)},
nw(a,b){throw A.d(A.nl(A.ng(a,A.nJ(a,b),A.al(b,null))))},
qA(a,b,c,d){var s=null
if(A.S(v.typeUniverse,a,s,b,s))return a
throw A.d(A.nl("The type argument '"+A.al(a,s)+"' is not a subtype of the type variable bound '"+A.al(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
ng(a,b,c){var s=A.fa(a),r=A.al(b==null?A.b6(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
nl(a){return new A.ew("TypeError: "+a)},
aj(a,b){return new A.ew("TypeError: "+A.ng(a,null,b))},
q9(a){return a!=null},
pO(a){if(a!=null)return a
throw A.d(A.aj(a,"Object"))},
qc(a){return!0},
pQ(a){return a},
l0(a){return!0===a||!1===a},
nr(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.aj(a,"bool"))},
rZ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.aj(a,"bool"))},
rY(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.aj(a,"bool?"))},
ns(a){if(typeof a=="number")return a
throw A.d(A.aj(a,"double"))},
t0(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aj(a,"double"))},
t_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aj(a,"double?"))},
mc(a){return typeof a=="number"&&Math.floor(a)===a},
G(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.aj(a,"int"))},
t2(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.aj(a,"int"))},
t1(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.aj(a,"int?"))},
q8(a){return typeof a=="number"},
b4(a){if(typeof a=="number")return a
throw A.d(A.aj(a,"num"))},
t4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aj(a,"num"))},
t3(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aj(a,"num?"))},
qa(a){return typeof a=="string"},
ad(a){if(typeof a=="string")return a
throw A.d(A.aj(a,"String"))},
t5(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.aj(a,"String"))},
pP(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.aj(a,"String?"))},
ql(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.al(a[q],b)
return s},
nx(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.c([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.k(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.b(a5,j)
m=B.i.C(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.al(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.al(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.al(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.al(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.al(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
al(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.al(a.z,b)
return s}if(l===7){r=a.z
s=A.al(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.al(a.z,b)+">"
if(l===9){p=A.qr(a.z)
o=a.Q
return o.length>0?p+("<"+A.ql(o,b)+">"):p}if(l===11)return A.nx(a,b,null)
if(l===12)return A.nx(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
qr(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
pN(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pM(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.ig(a,b,!1)
else if(typeof m=="number"){s=m
r=A.ey(a,5,"#")
q=A.kY(s)
for(p=0;p<s;++p)q[p]=r
o=A.ex(a,b,q)
n[b]=o
return o}else return m},
pK(a,b){return A.np(a.tR,b)},
pJ(a,b){return A.np(a.eT,b)},
ig(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.nj(A.nh(a,null,b,c))
r.set(b,s)
return s},
kW(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.nj(A.nh(a,b,c,!0))
q.set(c,r)
return r},
pL(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.m7(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
c1(a,b){b.a=A.q3
b.b=A.q4
return b},
ey(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.b1(null,null)
s.y=b
s.cy=c
r=A.c1(a,s)
a.eC.set(c,r)
return r},
no(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.pH(a,b,r,c)
a.eC.set(r,s)
return s},
pH(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bF(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.b1(null,null)
q.y=6
q.z=b
q.cy=c
return A.c1(a,q)},
m9(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.pG(a,b,r,c)
a.eC.set(r,s)
return s},
pG(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.bF(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.eF(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.eF(q.z))return q
else return A.n1(a,b)}}p=new A.b1(null,null)
p.y=7
p.z=b
p.cy=c
return A.c1(a,p)},
nn(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.pE(a,b,r,c)
a.eC.set(r,s)
return s},
pE(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bF(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.ex(a,"ar",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.b1(null,null)
q.y=8
q.z=b
q.cy=c
return A.c1(a,q)},
pI(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.b1(null,null)
s.y=13
s.z=b
s.cy=q
r=A.c1(a,s)
a.eC.set(q,r)
return r},
ie(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pD(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
ex(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ie(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.b1(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.c1(a,r)
a.eC.set(p,q)
return q},
m7(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.ie(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b1(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.c1(a,o)
a.eC.set(q,n)
return n},
nm(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ie(m)
if(j>0){s=l>0?",":""
r=A.ie(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.pD(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b1(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.c1(a,o)
a.eC.set(q,r)
return r},
m8(a,b,c,d){var s,r=b.cy+("<"+A.ie(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.pF(a,b,c,r,d)
a.eC.set(r,s)
return s},
pF(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.kY(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.c3(a,b,r,0)
m=A.eD(a,c,r,0)
return A.m8(a,n,m,c!==m)}}l=new A.b1(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.c1(a,l)},
nh(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nj(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.px(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.ni(a,r,h,g,!1)
else if(q===46)r=A.ni(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.bZ(a.u,a.e,g.pop()))
break
case 94:g.push(A.pI(a.u,g.pop()))
break
case 35:g.push(A.ey(a.u,5,"#"))
break
case 64:g.push(A.ey(a.u,2,"@"))
break
case 126:g.push(A.ey(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.m6(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.ex(p,n,o))
else{m=A.bZ(p,a.e,n)
switch(m.y){case 11:g.push(A.m8(p,m,o,a.n))
break
default:g.push(A.m7(p,m,o))
break}}break
case 38:A.py(a,g)
break
case 42:p=a.u
g.push(A.no(p,A.bZ(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.m9(p,A.bZ(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.nn(p,A.bZ(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.hC()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
A.m6(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.nm(p,A.bZ(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.m6(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.pA(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.bZ(a.u,a.e,i)},
px(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ni(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.pN(s,o.z)[p]
if(n==null)A.V('No "'+p+'" in "'+A.pg(o)+'"')
d.push(A.kW(s,o,n))}else d.push(p)
return m},
py(a,b){var s=b.pop()
if(0===s){b.push(A.ey(a.u,1,"0&"))
return}if(1===s){b.push(A.ey(a.u,4,"1&"))
return}throw A.d(A.iy("Unexpected extended operation "+A.B(s)))},
bZ(a,b,c){if(typeof c=="string")return A.ex(a,c,a.sEA)
else if(typeof c=="number")return A.pz(a,b,c)
else return c},
m6(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bZ(a,b,c[s])},
pA(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bZ(a,b,c[s])},
pz(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.d(A.iy("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.d(A.iy("Bad index "+c+" for "+b.l(0)))},
S(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.bF(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.bF(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.S(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return A.S(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.S(a,b.z,c,d,e)
if(r===6)return A.S(a,b.z,c,d,e)
return r!==7}if(r===6)return A.S(a,b.z,c,d,e)
if(p===6){s=A.n1(a,d)
return A.S(a,b,c,s,e)}if(r===8){if(!A.S(a,b.z,c,d,e))return!1
return A.S(a,A.n0(a,b),c,d,e)}if(r===7){s=A.S(a,t.P,c,d,e)
return s&&A.S(a,b.z,c,d,e)}if(p===8){if(A.S(a,b,c,d.z,e))return!0
return A.S(a,b,c,A.n0(a,d),e)}if(p===7){s=A.S(a,b,c,t.P,e)
return s||A.S(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.gY)return!0
if(p===12){if(b===t.dY)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.S(a,k,c,j,e)||!A.S(a,j,e,k,c))return!1}return A.ny(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.ny(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.q6(a,b,c,d,e)}return!1},
ny(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.S(a3,a4.z,a5,a6.z,a7))return!1
s=a4.Q
r=a6.Q
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.S(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.S(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.S(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.S(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
q6(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.kW(a,b,r[o])
return A.nq(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.nq(a,n,null,c,m,e)},
nq(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.S(a,r,d,q,f))return!1}return!0},
eF(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.bF(a))if(r!==7)if(!(r===6&&A.eF(a.z)))s=r===8&&A.eF(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qT(a){var s
if(!A.bF(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bF(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.iD},
np(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
kY(a){return a>0?new Array(a):v.typeUniverse.sEA},
b1:function b1(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
hC:function hC(){this.c=this.b=this.a=null},
ev:function ev(a){this.a=a},
hx:function hx(){},
ew:function ew(a){this.a=a},
pp(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.qu()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bg(new A.kt(q),1)).observe(s,{childList:true})
return new A.ks(q,s,r)}else if(self.setImmediate!=null)return A.qv()
return A.qw()},
pq(a){self.scheduleImmediate(A.bg(new A.ku(t.M.a(a)),0))},
pr(a){self.setImmediate(A.bg(new A.kv(t.M.a(a)),0))},
ps(a){t.M.a(a)
A.pB(0,a)},
nb(a,b){var s=B.d.T(a.a,1000)
return A.pC(s<0?0:s,b)},
pB(a,b){var s=new A.eu(!0)
s.dI(a,b)
return s},
pC(a,b){var s=new A.eu(!1)
s.dJ(a,b)
return s},
bC(a){return new A.hl(new A.K($.F,a.i("K<0>")),a.i("hl<0>"))},
bA(a,b){a.$2(0,null)
b.b=!0
return b.a},
ak(a,b){A.pR(a,b)},
bz(a,b){b.a4(0,a)},
by(a,b){b.bi(A.bh(a),A.bE(a))},
pR(a,b){var s,r,q=new A.kZ(b),p=new A.l_(b)
if(a instanceof A.K)a.cr(q,p,t.z)
else{s=t.z
if(t.g.b(a))a.aQ(q,p,s)
else{r=new A.K($.F,t.f)
r.a=8
r.c=a
r.cr(q,p,s)}}},
bD(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.F.bA(new A.l3(s),t.H,t.S,t.z)},
rX(a){return new A.dc(a,1)},
pu(){return B.h0},
pv(a){return new A.dc(a,3)},
qf(a,b){return new A.er(a,b.i("er<0>"))},
iz(a,b){var s=A.eE(a,"error",t.K)
return new A.dt(s,b==null?A.lQ(a):b)},
lQ(a){var s
if(t.fz.b(a)){s=a.gaA()
if(s!=null)return s}return B.bY},
oT(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=null,e=!1,d=b.i("K<o<0>>"),c=new A.K($.F,d)
g.a=null
g.b=0
s=A.nf("error")
r=A.nf("stackTrace")
q=new A.jb(g,f,e,c,s,r)
try{for(l=a.length,k=t.P,j=0,i=0;j<a.length;a.length===l||(0,A.A)(a),++j){p=a[j]
o=i
p.aQ(new A.ja(g,o,c,f,e,s,r,b),q,k)
i=++g.b}if(i===0){l=c
l.at(A.c([],b.i("t<0>")))
return l}g.a=A.bb(i,null,!1,b.i("0?"))}catch(h){n=A.bh(h)
m=A.bE(h)
if(g.b===0||A.O(e)){l=n
r=m
A.eE(l,"error",t.K)
$.F!==B.k
if(r==null)r=A.lQ(l)
d=new A.K($.F,d)
d.aX(l,r)
return d}else{s.b=n
r.b=m}}return c},
kC(a,b){var s,r,q
for(s=t.f;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aF()
b.aZ(a)
A.db(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.ck(q)}},
db(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.g;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.is(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.db(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.is(i.a,i.b)
return}f=$.F
if(f!==g)$.F=g
else f=null
b=b.c
if((b&15)===8)new A.kK(p,c,m).$0()
else if(n){if((b&1)!==0)new A.kJ(p,i).$0()}else if((b&2)!==0)new A.kI(c,p).$0()
if(f!=null)$.F=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("ar<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.aG(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.kC(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.aG(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
qj(a,b){var s
if(t.ng.b(a))return b.bA(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.mA(a,"onError",u.c))},
qg(){var s,r
for(s=$.dg;s!=null;s=$.dg){$.eC=null
r=s.b
$.dg=r
if(r==null)$.eB=null
s.a.$0()}},
qo(){$.mb=!0
try{A.qg()}finally{$.eC=null
$.mb=!1
if($.dg!=null)$.mm().$1(A.nF())}},
nB(a){var s=new A.hm(a),r=$.eB
if(r==null){$.dg=$.eB=s
if(!$.mb)$.mm().$1(A.nF())}else $.eB=r.b=s},
qm(a){var s,r,q,p=$.dg
if(p==null){A.nB(a)
$.eC=$.eB
return}s=new A.hm(a)
r=$.eC
if(r==null){s.b=p
$.dg=$.eC=s}else{q=r.b
s.b=q
$.eC=r.b=s
if(q==null)$.eB=s}},
nR(a){var s=null,r=$.F
if(B.k===r){A.dh(s,s,B.k,a)
return}A.dh(s,s,r,t.M.a(r.cB(a)))},
rJ(a,b){A.eE(a,"stream",t.K)
return new A.i0(b.i("i0<0>"))},
n8(a){return new A.d9(null,null,null,a.i("d9<0>"))},
me(a){return},
pt(a,b){if(b==null)b=A.qy()
if(t.fQ.b(b))return a.bA(b,t.z,t.K,t.l)
if(t.i6.b(b))return t.y.a(b)
throw A.d(A.cG("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
qi(a,b){A.is(a,b)},
qh(){},
pl(a,b){var s=$.F
if(s===B.k)return A.nb(a,t.my.a(b))
return A.nb(a,t.my.a(s.cC(b,t.hU)))},
is(a,b){A.qm(new A.l2(a,b))},
nz(a,b,c,d,e){var s,r=$.F
if(r===c)return d.$0()
$.F=c
s=r
try{r=d.$0()
return r}finally{$.F=s}},
nA(a,b,c,d,e,f,g){var s,r=$.F
if(r===c)return d.$1(e)
$.F=c
s=r
try{r=d.$1(e)
return r}finally{$.F=s}},
qk(a,b,c,d,e,f,g,h,i){var s,r=$.F
if(r===c)return d.$2(e,f)
$.F=c
s=r
try{r=d.$2(e,f)
return r}finally{$.F=s}},
dh(a,b,c,d){t.M.a(d)
if(B.k!==c)d=c.cB(d)
A.nB(d)},
kt:function kt(a){this.a=a},
ks:function ks(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
eu:function eu(a){this.a=a
this.b=null
this.c=0},
kV:function kV(a,b){this.a=a
this.b=b},
kU:function kU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hl:function hl(a,b){this.a=a
this.b=!1
this.$ti=b},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l3:function l3(a){this.a=a},
dc:function dc(a,b){this.a=a
this.b=b},
c0:function c0(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
er:function er(a,b){this.a=a
this.$ti=b},
dt:function dt(a,b){this.a=a
this.b=b},
jb:function jb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ja:function ja(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
e9:function e9(){},
aW:function aW(a,b){this.a=a
this.$ti=b},
dd:function dd(a,b){this.a=a
this.$ti=b},
cz:function cz(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
K:function K(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
kz:function kz(a,b){this.a=a
this.b=b},
kH:function kH(a,b){this.a=a
this.b=b},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function kB(a,b){this.a=a
this.b=b},
kG:function kG(a,b){this.a=a
this.b=b},
kA:function kA(a,b,c){this.a=a
this.b=b
this.c=c},
kK:function kK(a,b,c){this.a=a
this.b=b
this.c=c},
kL:function kL(a){this.a=a},
kJ:function kJ(a,b){this.a=a
this.b=b},
kI:function kI(a,b){this.a=a
this.b=b},
hm:function hm(a){this.a=a
this.b=null},
ct:function ct(){},
k8:function k8(a,b){this.a=a
this.b=b},
k9:function k9(a,b){this.a=a
this.b=b},
bu:function bu(){},
ep:function ep(){},
kS:function kS(a){this.a=a},
hn:function hn(){},
d9:function d9(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
bY:function bY(a,b){this.a=a
this.$ti=b},
da:function da(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
e8:function e8(){},
eq:function eq(){},
hs:function hs(){},
cw:function cw(a,b){this.b=a
this.a=null
this.$ti=b},
c_:function c_(){},
kP:function kP(a,b){this.a=a
this.b=b},
bf:function bf(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
i0:function i0(a){this.$ti=a},
ez:function ez(){},
l2:function l2(a,b){this.a=a
this.b=b},
hU:function hU(){},
kQ:function kQ(a,b){this.a=a
this.b=b},
kR:function kR(a,b,c){this.a=a
this.b=b
this.c=c},
lZ(a,b,c,d){if(b==null){if(a==null)return new A.aB(c.i("@<0>").B(d).i("aB<1,2>"))}else if(a==null)a=A.qD()
return A.pw(A.qC(),a,b,c,d)},
b_(a,b,c){return b.i("@<0>").B(c).i("jr<1,2>").a(A.nG(a,new A.aB(b.i("@<0>").B(c).i("aB<1,2>"))))},
aa(a,b){return new A.aB(a.i("@<0>").B(b).i("aB<1,2>"))},
pw(a,b,c,d,e){var s=c!=null?c:new A.kN(d)
return new A.ed(a,b,s,d.i("@<0>").B(e).i("ed<1,2>"))},
ju(a){return new A.ee(a.i("ee<0>"))},
m5(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
pX(a,b){return J.a_(a,b)},
pY(a){return J.ay(a)},
mO(a,b,c){var s,r
if(A.md(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.k($.aK,a)
try{A.qd(a,s)}finally{if(0>=$.aK.length)return A.b($.aK,-1)
$.aK.pop()}r=A.n9(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
lW(a,b,c){var s,r
if(A.md(a))return b+"..."+c
s=new A.h2(b)
B.a.k($.aK,a)
try{r=s
r.a=A.n9(r.a,a,", ")}finally{if(0>=$.aK.length)return A.b($.aK,-1)
$.aK.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
md(a){var s,r
for(s=$.aK.length,r=0;r<s;++r)if(a===$.aK[r])return!0
return!1},
qd(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.B(l.gp(l))
B.a.k(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gp(l);++j
if(!l.n()){if(j<=4){B.a.k(b,A.B(p))
return}r=A.B(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp(l);++j
for(;l.n();p=o,o=n){n=l.gp(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.B(p)
r=A.B(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
p3(a,b,c){var s=A.lZ(null,null,b,c)
a.u(0,new A.jt(s,b,c))
return s},
mS(a,b,c){var s=A.lZ(null,null,b,c)
s.a3(0,a)
return s},
m0(a){var s,r={}
if(A.md(a))return"{...}"
s=new A.h2("")
try{B.a.k($.aK,a)
s.a+="{"
r.a=!0
J.oB(a,new A.jx(r,s))
s.a+="}"}finally{if(0>=$.aK.length)return A.b($.aK,-1)
$.aK.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
kO:function kO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ed:function ed(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
kN:function kN(a){this.a=a},
ee:function ee(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hJ:function hJ(a){this.a=a
this.b=null},
ef:function ef(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dI:function dI(){},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
dO:function dO(){},
jx:function jx(a,b){this.a=a
this.b=b},
z:function z(){},
jz:function jz(a){this.a=a},
e0:function e0(){},
el:function el(){},
eA:function eA(){},
oS(a){if(a instanceof A.cb)return a.l(0)
return"Instance of '"+A.jU(a)+"'"},
bb(a,b,c,d){var s,r=J.p_(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
p5(a,b){var s,r=A.c([],b.i("t<0>"))
for(s=J.am(a);s.n();)B.a.k(r,b.a(s.gp(s)))
return r},
mT(a,b,c){var s=A.p4(a,c)
return s},
p4(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("t<0>"))
s=A.c([],b.i("t<0>"))
for(r=J.am(a);r.n();)B.a.k(s,r.gp(r))
return s},
m_(a,b,c){var s,r=J.p0(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
n9(a,b,c){var s=J.am(b)
if(!s.n())return a
if(c.length===0){do a+=A.B(s.gp(s))
while(s.n())}else{a+=A.B(s.gp(s))
for(;s.n();)a=a+c+A.B(s.gp(s))}return a},
oM(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
oN(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
f6(a){if(a>=10)return""+a
return"0"+a},
j0(a){return new A.af(1000*a)},
fa(a){if(typeof a=="number"||A.l0(a)||a==null)return J.c6(a)
if(typeof a=="string")return JSON.stringify(a)
return A.oS(a)},
iy(a){return new A.ds(a)},
cG(a,b){return new A.bi(!1,null,b,a)},
mA(a,b,c){return new A.bi(!0,a,b,c)},
pf(a){var s=null
return new A.d_(s,s,!1,s,s,a)},
n_(a,b){return new A.d_(null,null,!0,a,b,"Value not in range")},
bs(a,b,c,d,e){return new A.d_(b,c,!0,a,d,"Invalid value")},
jZ(a,b,c){if(0>a||a>c)throw A.d(A.bs(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.bs(b,a,c,"end",null))
return b}return c},
jY(a,b){if(a<0)throw A.d(A.bs(a,0,null,b,null))
return a},
Q(a,b,c,d,e){var s=A.G(e==null?J.an(b):e)
return new A.fj(s,!0,a,c,"Index out of range")},
C(a){return new A.hf(a)},
m4(a){return new A.hc(a)},
ag(a){return new A.bt(a)},
aX(a){return new A.f1(a)},
lU(a){return new A.hz(a)},
fI(a,b,c,d){var s,r
if(B.C===c)return A.pk(J.ay(a),J.ay(b),$.lM())
if(B.C===d){s=J.ay(a)
b=J.ay(b)
c=J.ay(c)
return A.m3(A.bS(A.bS(A.bS($.lM(),s),b),c))}s=J.ay(a)
b=J.ay(b)
c=J.ay(c)
d=J.ay(d)
r=$.lM()
return A.m3(A.bS(A.bS(A.bS(A.bS(r,s),b),c),d))},
it(a){A.mj(A.B(a))},
cd:function cd(a,b){this.a=a
this.b=b},
af:function af(a){this.a=a},
kx:function kx(){},
L:function L(){},
ds:function ds(a){this.a=a},
bW:function bW(){},
fG:function fG(){},
bi:function bi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d_:function d_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fj:function fj(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hf:function hf(a){this.a=a},
hc:function hc(a){this.a=a},
bt:function bt(a){this.a=a},
f1:function f1(a){this.a=a},
fK:function fK(){},
e2:function e2(){},
f5:function f5(a){this.a=a},
hz:function hz(a){this.a=a},
j:function j(){},
R:function R(){},
cT:function cT(a,b,c){this.a=a
this.b=b
this.$ti=c},
X:function X(){},
v:function v(){},
i3:function i3(){},
h2:function h2(a){this.a=a},
qH(){return document},
hy(a,b,c,d,e){var s=A.nC(new A.ky(c),t.U)
if(s!=null&&!0)J.oz(a,b,s,!1)
return new A.ec(a,b,s,!1,e.i("ec<0>"))},
pU(a){var s
if(t.dA.b(a))return a
s=new A.kq([],[])
s.c=!0
return s.bK(a)},
nC(a,b){var s=$.F
if(s===B.k)return a
return s.cC(a,b)},
q:function q(){},
ix:function ix(){},
eN:function eN(){},
eO:function eO(){},
eT:function eT(){},
eU:function eU(){},
c8:function c8(){},
b9:function b9(){},
iS:function iS(){},
I:function I(){},
cM:function cM(){},
iT:function iT(){},
aY:function aY(){},
bk:function bk(){},
iU:function iU(){},
iV:function iV(){},
iW:function iW(){},
bl:function bl(){},
bM:function bM(){},
dA:function dA(){},
dB:function dB(){},
f8:function f8(){},
iX:function iX(){},
a5:function a5(){},
k:function k(){},
e:function e(){},
az:function az(){},
fb:function fb(){},
fc:function fc(){},
fe:function fe(){},
aA:function aA(){},
jh:function jh(){},
cg:function cg(){},
dH:function dH(){},
ch:function ch(){},
cQ:function cQ(){},
bo:function bo(){},
jw:function jw(){},
cp:function cp(){},
jB:function jB(){},
ft:function ft(){},
jJ:function jJ(a){this.a=a},
fu:function fu(){},
jK:function jK(a){this.a=a},
aC:function aC(){},
fv:function fv(){},
aD:function aD(){},
w:function w(){},
dU:function dU(){},
aE:function aE(){},
fN:function fN(){},
fS:function fS(){},
k1:function k1(a){this.a=a},
fU:function fU(){},
av:function av(){},
fX:function fX(){},
aF:function aF(){},
fY:function fY(){},
aG:function aG(){},
h1:function h1(){},
k7:function k7(a){this.a=a},
ah:function ah(){},
aw:function aw(){},
ab:function ab(){},
h6:function h6(){},
h7:function h7(){},
ke:function ke(){},
aH:function aH(){},
h9:function h9(){},
kf:function kf(){},
be:function be(){},
ki:function ki(){},
d7:function d7(){},
hh:function hh(){},
d8:function d8(){},
hq:function hq(){},
ea:function ea(){},
hD:function hD(){},
eg:function eg(){},
hY:function hY(){},
i4:function i4(){},
lT:function lT(a,b){this.a=a
this.$ti=b},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ec:function ec(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ky:function ky(a){this.a=a},
r:function r(){},
dE:function dE(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
hr:function hr(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hA:function hA(){},
hB:function hB(){},
hE:function hE(){},
hF:function hF(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hS:function hS(){},
hT:function hT(){},
hV:function hV(){},
em:function em(){},
en:function en(){},
hW:function hW(){},
hX:function hX(){},
hZ:function hZ(){},
i5:function i5(){},
i6:function i6(){},
es:function es(){},
et:function et(){},
i8:function i8(){},
i9:function i9(){},
ih:function ih(){},
ii:function ii(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
io:function io(){},
ip:function ip(){},
iq:function iq(){},
ir:function ir(){},
nu(a){var s,r
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.l0(a))return a
if(A.nM(a))return A.c4(a)
if(Array.isArray(a)){s=[]
for(r=0;r<a.length;++r)s.push(A.nu(a[r]))
return s}return a},
c4(a){var s,r,q,p,o
if(a==null)return null
s=A.aa(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.A)(r),++p){o=r[p]
s.j(0,o,A.nu(a[o]))}return s},
nM(a){var s=Object.getPrototypeOf(a)
return s===Object.prototype||s===null},
lR(){return window.navigator.userAgent},
kp:function kp(){},
kr:function kr(a,b){this.a=a
this.b=b},
kq:function kq(a,b){this.a=a
this.b=b
this.c=!1},
qZ(a,b){var s=new A.K($.F,b.i("K<0>")),r=new A.aW(s,b.i("aW<0>"))
a.then(A.bg(new A.lv(r,b),1),A.bg(new A.lw(r),1))
return s},
jP:function jP(a){this.a=a},
lv:function lv(a,b){this.a=a
this.b=b},
lw:function lw(a){this.a=a},
m2(){return B.m},
hG:function hG(){},
aQ:function aQ(){},
fo:function fo(){},
aT:function aT(){},
fH:function fH(){},
jT:function jT(){},
h3:function h3(){},
n:function n(){},
aU:function aU(){},
ha:function ha(){},
hH:function hH(){},
hI:function hI(){},
hQ:function hQ(){},
hR:function hR(){},
i1:function i1(){},
i2:function i2(){},
ia:function ia(){},
ib:function ib(){},
oU(a){return new GainNode(a)},
b7:function b7(){},
dv:function dv(){},
c7:function c7(){},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
H:function H(){},
eP:function eP(){},
eQ:function eQ(){},
iF:function iF(a){this.a=a},
bj:function bj(){},
eR:function eR(){},
dw:function dw(){},
cP:function cP(){},
fJ:function fJ(){},
hp:function hp(){},
eW:function eW(){},
ff:function ff(){},
fO:function fO(){},
d0:function d0(){},
bv:function bv(){},
hb:function hb(){},
hg:function hg(){},
bd:function bd(a){this.a=a},
e3:function e3(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iL:function iL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mL(a,b){var s=A.bb(7,null,!1,b.i("0?")),r=a==null?A.r7():a
return new A.fi(r,s,b.i("fi<0>"))},
fi:function fi(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
kX:function kX(a,b){this.a=a
this.$ti=b},
cA:function cA(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=-1
_.$ti=c},
bI(a){return new A.h(a)},
h:function h(a){this.a=a},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
at:function at(a,b){this.a=a
this.b=b},
lP(a,b,c,d,e,f,g){return new A.cF(g,b,e,a,f)},
nL(a,b){if(b.e)return!1
if(a.x)return!0
if(b.x)return!0
return!1},
qM(a,b){return B.a.eA(a.a,new A.ld(b))},
fw(a,b,c,d,e,f,g,h,i,j){return new A.bP(i,a,h,j,b,e,c,f)},
qI(a){var s,r,q=a.f.$0(),p=new A.jD(new Uint8ClampedArray(4000)),o=a.d,n=A.c([],t.I),m=A.mS(B.aq,t.b,t.R),l=A.c([],t.Q),k=A.c([],t.d)
for(s=J.am(a.r.$0());s.n();){r=s.gp(s)
switch(r.gbQ()){case B.as:m.h(0,B.G)
m.j(0,B.G,r)
break
case B.at:m.h(0,B.r)
m.j(0,B.r,r)
break
case B.au:m.h(0,B.H)
m.j(0,B.H,r)
break
default:B.a.k(n,r)}}return A.lP(new A.iv(q,p),new A.ca(o,o,1,0,0,0,0,new A.cN(n,m),a.c,l,k,new A.cO(a.a)),1,a.z,!1,!1,a.e.$0())},
cF:function cF(a,b,c,d,e){var _=this
_.a=100
_.b=a
_.c=b
_.e=c
_.r=d
_.x=e},
iw:function iw(a){this.a=a},
iv:function iv(a,b){this.a=a
this.b=b
this.c=null},
ac:function ac(a,b){this.a=a
this.b=b},
ap:function ap(){},
bT:function bT(){},
bU:function bU(){},
cK:function cK(){},
bR:function bR(){},
fQ:function fQ(){this.b=!1},
dY:function dY(){this.a=null},
fR:function fR(a){this.a=a},
ld:function ld(a){this.a=a},
bG:function bG(){},
ba:function ba(a){this.a=a},
bP:function bP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.z=h},
lF:function lF(){},
lD:function lD(){},
lE:function lE(){},
lz:function lz(){},
lx:function lx(){},
ly:function ly(){},
lI:function lI(){},
lG:function lG(){},
lH:function lH(){},
lL:function lL(){},
lJ:function lJ(){},
lK:function lK(){},
l7:function l7(){},
l5:function l5(){},
l6:function l6(){},
iM:function iM(){this.b=this.a=0},
Z:function Z(){},
co:function co(a,b){this.b=a
this.a=b},
cn:function cn(a,b){this.b=a
this.a=b},
qY(a,b,c){var s,r,q=b.e||b.a===0
if(q)return!1
s=b.c
if(s!=null&&s.b<=0){a.$1(new A.dz(b))
return!0}r=b.r
if(r!=null){a.$1(r.eB(b,c))
b.a=0
return!0}return!1},
fg:function fg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1
_.y=null
_.z=f
_.Q=null
_.ch=!1},
jc:function jc(a,b){this.a=a
this.b=b},
mK(a){switch(a.a){case 0:case 1:case 2:case 3:case 4:return!1
case 5:case 6:case 7:return!0}},
dx(a,b,c){var s,r,q,p
for(s=c.a,r=0,q=0;q<b;++q){switch(s){case 0:p=3
break
case 1:p=4
break
case 2:p=6
break
case 3:p=8
break
case 4:p=12
break
case 5:p=20
break
default:p=null}r+=a.D(p)+1}return r},
eJ(a,b,c,d,e,f){return new A.eI(f,c,b,d,e,a)},
my(){return new A.eI(10,10,10,10,10,10)},
oL(a){var s,r=a.a,q=a.b
if(r+q===1)return a
s=Math.sqrt(Math.pow(r,2)+Math.pow(q,2))
return new A.at(r/s,q/s)},
bN(a){switch(a){case B.am:case B.an:case B.J:case B.K:case B.M:case B.N:case B.a1:case B.a2:case B.X:case B.I:case B.Y:case B.Z:case B.a_:case null:return!1
case B.W:case B.w:case B.L:case B.a0:return!0}},
oX(a){switch(a){case B.am:case B.an:case B.J:case B.K:case B.M:case B.N:case B.a1:case B.a2:case B.X:case B.I:case B.Y:case B.Z:case null:case B.a_:return!1
case B.W:case B.w:case B.L:case B.a0:return!0}},
e1:function e1(a,b){this.a=a
this.b=b},
bm:function bm(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.b=b},
aP:function aP(a,b,c){this.b=a
this.c=b
this.e=c},
iR:function iR(){},
a0:function a0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fh:function fh(a,b){this.a=a
this.b=b},
bK:function bK(a,b){this.a=a
this.b=b},
bL:function bL(a,b){this.a=a
this.b=b},
aV:function aV(a,b){this.a=a
this.b=b},
jC:function jC(){},
bJ:function bJ(){},
cc:function cc(a,b){this.a=a
this.b=b},
a2:function a2(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.y=e
_.z=f},
dp:function dp(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
au:function au(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.f=c
_.r=d
_.Q=e
_.ch=f},
cH:function cH(a,b){this.a=a
this.b=b},
ao:function ao(a){this.c=a},
eI:function eI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ca:function ca(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.Q=j
_.ch=k
_.cx=l},
cI:function cI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cO:function cO(a){this.a=a},
cN:function cN(a,b){this.a=a
this.b=b},
fL:function fL(a,b){this.a=a
this.b=b},
ce:function ce(a,b){this.a=a
this.b=b},
f2:function f2(){},
d3:function d3(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.a=a
this.b=b},
as:function as(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a,b){this.a=a
this.b=b},
ai:function ai(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=a
this.b=b},
b8:function b8(a,b){this.a=a
this.b=b},
bV:function bV(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
fq:function fq(a,b){this.b=a
this.c=b},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
a1:function a1(a,b){this.a=a
this.b=b},
jy:function jy(a,b){this.a=a
this.b=b},
jD:function jD(a){this.a=a},
cU:function cU(a,b){this.a=a
this.b=b},
iY:function iY(a){var _=this
_.a=a
_.b=!1
_.c=null
_.d=0},
j1:function j1(a){this.a=a},
j2:function j2(){},
oR(a,a0,a1){var s,r,q,p,o,n,m,l,k="a_position",j=5126,i="u_resolution",h="u_offset",g=A.c([],t.ev),f=A.c(["alarm_1.mp3","background_1.mp3","background_2.mp3","bullet_impact_1.mp3","bullet_impact_2.mp3","bullet_miss_1.mp3","calm_menu_1.mp3","cave_1.mp3","click_1.mp3","death_1.mp3","door_1.mp3","door_unlock_1.mp3","drone_abandoned_desolate.mp3","fireball_1.mp3","fireball_2.mp3","flamethrower_1.mp3","heavy_punch_1.mp3","heavy_punch_2.mp3","heavy_punch_3.mp3","heavy_punch_4.mp3","Just_Pick_One_Already.mp3","laser_1.mp3","loop_1.mp3","menu_1.mp3","menu_2.mp3","miss_1.mp3","monster_deep_growl.mp3","monster_growl_1.mp3","monster_sceam_2.mp3","monster_scream_1.mp3","New_Bee.mp3","positive_1.mp3","rain_background_1.mp3","sewer_1.mp3","short_pulse_1.mp3","surface_day_1.mp3","surface_night_1.mp3","sword_impact_1.mp3","teleport_1.mp3","text_loop_1.mp3","water_footsteps_1.mp3","water_footsteps_2.mp3","water_footsteps_3.mp3","water_footsteps_4.mp3","water_footsteps_5.mp3","reload_1.mp3","pistol_1.mp3"],t.s),e=new (window.AudioContext||window.webkitAudioContext)(),d=A.pW(),c=t.G,b=t.o
d=A.aO(A.c([new A.Y(k,35044,j,2,d),new A.Y("a_color",35048,j,4,new Float32Array(192e3))],c),u.l,A.c([new A.x(i,B.f),new A.x(h,B.f)],b),u.q)
s=A.aO(A.c([new A.Y(k,35048,j,2,new Float32Array(8000))],c),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.c([new A.x(i,B.f),new A.x(h,B.f)],b),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
r=A.po(window)
q=new Uint8Array(4000)
p=t.j
o=A.c([],t.pl)
b=A.c([new A.x("u_texture",B.l),new A.x(i,B.f),new A.x("u_time",B.u)],b)
b=A.aO(A.c([new A.Y(k,35044,j,2,new Float32Array(A.cB(B.y)))],c),"#version 300 es\nprecision mediump float;\n\n\nuniform sampler2D u_texture;\nuniform vec2 u_resolution;\nuniform float u_time;\n\nout vec4 outColor;\n\nfloat density = 1.3;\nfloat opacityScanline = .3;\nfloat opacityNoise = .2;\n\nfloat random (vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nfloat blend(const in float x, const in float y) {\n\treturn (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));\n}\n\nvec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {\n\tvec3 z = vec3(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b));\n\treturn z * opacity + x * (1.0 - opacity);\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n  vec3 col = texture(u_texture, uv).rgb;\n  float count = u_resolution.y * density;\n  vec2 sl = vec2(sin(uv.y * count), cos(uv.y * count));\n\tvec3 scanlines = vec3(sl.x, sl.y, sl.x);\n  col += col * scanlines * opacityScanline;\n  col += col * vec3(random(uv * u_time)) * opacityNoise;\n  outColor = vec4(col, 1.0);\n}\n",b,u.p)
c=A.c([],t.fk)
n=new Uint8Array(16e6)
m=new Uint8Array(4000)
l=new Uint8Array(4000)
g=new A.f9(a0,a,g,a1,new A.fW(A.aa(t.N,t.bD),f,e),new A.j8(n,m,l,new Uint8Array(64e6),new A.i(0,0),A.aa(p,t.im),c),new A.iM(),new A.kd(d),new A.iY(s),r,new A.iw(new A.f7(q,A.aa(p,t.S))),new A.j1(o),new A.j9(b),a0.createFramebuffer(),a0.createFramebuffer(),new A.k_())
g.dF(a,a0,a1)
return g},
j5:function j5(){this.b=!1},
f9:function f9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=$
_.y=h
_.z=i
_.ch=_.Q=$
_.cx=j
_.db=_.cy=$
_.dx=k
_.dy=$
_.fr=l
_.fx=m
_.go=_.fy=null
_.id=n
_.k1=o
_.k3=_.k2=0
_.r1=!0
_.r2=null
_.rx=$
_.ry=p},
j6:function j6(a,b){this.a=a
this.b=b},
nT(a,b,c){return a*c+(1-c)*b},
a6:function a6(){},
bH:function bH(a,b,c){var _=this
_.a=a
_.d=0
_.e=null
_.f=!0
_.r=b
_.x=c},
J:function J(a,b,c,d,e,f,g){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
fD:function fD(a){this.a=a},
dX:function dX(a){this.a=a},
aS:function aS(a,b){this.a=a
this.b=b},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
jM:function jM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d2:function d2(){},
fp:function fp(a){this.a=a},
e5:function e5(a,b){this.a=a
this.b=b},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iC:function iC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iA:function iA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dz:function dz(a){this.a=a},
eS:function eS(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(a){this.a=a},
dW:function dW(a,b){this.a=a
this.b=b},
fP:function fP(a,b){this.b=a
this.c=b},
jV:function jV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a){this.a=a
this.b=null},
j8:function j8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
i7:function i7(a){this.a=a
this.b=!0},
kj:function kj(a,b,c){this.a=a
this.c=b
this.d=c},
c9:function c9(a,b){this.a=a
this.b=b},
jX:function jX(a,b){this.a=a
this.b=b},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
nK(a,b){var s=a.f
if(s==null)return A.c([],t.Y)
if(s===B.w)return A.c([new A.bO("Open Door",new A.e5(!1,a.b))],t.Y)
if(s===B.K){if(b.am(a.b)!=null)return A.c([],t.Y)
return A.c([new A.bO("Close Door",new A.e5(!0,a.b))],t.Y)}if(s===B.I)return A.c([new A.bO("Activate Mechanism",new A.he(a.b))],t.Y)
if(s===B.J)return A.c([new A.bO("Stairs",new A.fD(!1))],t.Y)
return A.c([],t.Y)},
bO:function bO(a,b){this.a=a
this.b=b},
p2(a){var s=u.p,r="a_position",q="u_player_visible_texture",p=t.G,o=t.o
return new A.fs(A.aO(A.c([new A.Y(r,35044,5126,2,new Float32Array(A.cB(B.y)))],p),u.e,A.c([new A.x("u_source_position",B.f),new A.x("u_source_color",B.bf),new A.x("u_source_strength",B.u),new A.x("u_time",B.u),new A.x("u_visible_texture",B.l),new A.x(q,B.l)],o),s),A.aO(A.c([new A.Y(r,35044,5126,2,new Float32Array(A.cB(B.y)))],p),u.A,A.c([new A.x("u_light_texture",B.l),new A.x("u_game_world_texture",B.l),new A.x(q,B.l),new A.x("u_resolution",B.f),new A.x("u_block_size",B.f),new A.x("u_offset",B.f)],o),s),a,A.c([],t.ow))},
fs:function fs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.x=d
_.y=null},
oP(a){switch(a.a){case 0:return B.al
case 1:return B.ak
case 2:return B.aj
case 3:return B.ai
case 4:return B.p
case 5:return B.q
case 6:return B.n
case 7:return B.o}},
oO(a){switch(a.a){case 4:return B.aU
case 5:return B.aT
case 6:return B.aU
case 7:return B.aT
default:return B.e5}},
a8(a,b){switch(b.a){case 4:return a.C(0,new A.i(0,-1))
case 1:return a.C(0,new A.i(1,-1))
case 5:return a.C(0,new A.i(1,0))
case 0:return a.C(0,new A.i(1,1))
case 6:return a.C(0,new A.i(0,1))
case 2:return a.C(0,new A.i(-1,1))
case 7:return a.C(0,new A.i(-1,0))
case 3:return a.C(0,new A.i(-1,-1))}},
l8(a,b,c){var s
switch(c.a){case 0:return!1
case 1:return a.c===B.b||A.O(A.bN(a.f))
case 2:s=a.f
if(s===B.w)return!1
return a.c===B.b||A.O(A.bN(s))
case 3:return a.c===B.b||A.O(A.bN(a.f))||b.am(a.b)!=null}},
qG(a,b){var s=B.d.bg(a,-1,1),r=B.d.bg(b,-1,1)
switch(s){case-1:switch(r){case-1:return B.al
case 0:return B.q
case 1:return B.ak}break
case 0:switch(r){case-1:return B.n
case 1:return B.p}break
case 1:switch(r){case-1:return B.aj
case 0:return B.o
case 1:return B.ai}break}throw A.d(A.ag(A.B(s)+","+A.B(r)))},
br:function br(a,b,c){var _=this
_.b=_.a=null
_.d=a
_.e=b
_.f=c},
aZ:function aZ(a,b){this.a=a
this.b=b},
jR:function jR(){},
f7:function f7(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
mB(a,b,c,d,e){return new A.Y(d,a,c,e,b)},
bX(a,b){return new A.x(b,a)},
aO(a,b,c,d){var s=t.N
return new A.jg(d,b,c,a,A.aa(s,t.o3),A.aa(s,t.aN))},
nv(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.a_(a.getShaderParameter(s,35713),!0)){A.it(a.getShaderInfoLog(s))
throw A.d(A.ag("Invalid Shader"))}return s},
Y:function Y(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x:function x(a,b){this.a=a
this.b=b},
d5:function d5(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.c=b},
ic:function ic(a,b){this.a=a
this.b=b},
jg:function jg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
k_:function k_(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
k0:function k0(){},
fE:function fE(){},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
k5:function k5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qn(a,b){var s=t.hd
s.a(a)
s.a(b)
return B.d.O(a.y,b.y)},
qU(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.K($.F,t.aa),p=J.oC(r),o=p.$ti,n=o.i("~(1)?").a(new A.li(a,s,r,new A.aW(q,t.fB)))
t.Z.a(null)
A.hy(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
n6(a,b){var s=35048,r=5126,q=A.c([new A.x("u_texture",B.l),new A.x("u_resolution",B.f),new A.x("u_offset",B.f)],t.o),p=new Float32Array(12e4),o=new Float32Array(12e4),n=new Float32Array(24e4)
q=new A.fZ(A.aO(A.c([new A.Y("a_position",s,r,2,p),new A.Y("a_texcoord",s,r,2,o),new A.Y("a_color",s,r,4,n),new A.Y("a_bg_color",s,r,4,new Float32Array(24e4))],t.G),"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\nin vec4 v_bg_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n  if (v_bg_color != vec4(0, 0, 0, 0)) {\n    outColor = outColor + v_bg_color;\n  }\n}\n",q,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"),A.mL(A.r1(),t.hd),b)
q.dG(a,b)
return q},
pj(a){return new A.P(a.a,a.b,-1,-1,null)},
mM(a,b,c,d){var s,r,q,p,o,n,m=null
switch(a){case B.am:case null:return m
case B.an:s=m
r=s
q=3
p=16
o=1
break
case B.J:q=14
p=3
o=1
r=B.ej
s=B.c3
break
case B.w:s=m
r=s
q=6
p=11
o=1
break
case B.K:s=m
r=s
q=15
p=5
o=1
break
case B.L:s=m
r=s
q=5
p=11
o=1
break
case B.M:n=t.e.i("Z.T")
if(d.a===B.z){n=B.b1.h(0,n.a(900))
n.toString
r=n}else{n=B.aZ.h(0,n.a(800))
n.toString
r=n}s=m
q=2
p=2
o=0.8
break
case B.N:r=new A.h(4294967142)
s=m
q=12
p=7
o=0.8
break
case B.a1:n=B.ap.h(0,t.e.i("Z.T").a(400))
n.toString
s=m
r=n
q=1
p=13
o=1
break
case B.a2:n=B.ap.h(0,t.e.i("Z.T").a(400))
n.toString
s=m
r=n
q=2
p=13
o=0.8
break
case B.W:n=B.aZ.h(0,t.e.i("Z.T").a(600))
n.toString
s=m
r=n
q=6
p=0
o=1
break
case B.X:n=B.b0.h(0,t.e.i("Z.T").a(900))
n.toString
s=n
r=m
q=0
p=15
o=1
break
case B.I:n=B.b2.h(0,t.e.i("Z.T").a(500))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.Y:n=B.b2.h(0,t.e.i("Z.T").a(100))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.Z:s=m
r=s
q=13
p=3
o=1
break
case B.a_:n=B.b0.h(0,t.e.i("Z.T").a(900))
n.toString
s=m
r=n
q=14
p=5
o=1
break
case B.a0:n=B.ap.h(0,t.e.i("Z.T").a(600))
n.toString
s=m
r=n
q=14
p=15
o=1
break
default:s=m
r=s
q=0
p=0
o=1}n=new A.P(q,p,b,c,r)
n.sds(0,o)
n.san(0,s)
return n},
li:function li(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fZ:function fZ(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c
_.e=!1
_.f=!0},
k6:function k6(a){this.a=a},
P:function P(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.f=1
_.r=null
_.x=e
_.y=0},
m:function m(a,b){this.a=a
this.b=b},
m1(a,b,c){return new A.jA(b,c,a)},
pW(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
for(s=0;s<40;++s)for(r=s*100,q=s*36,p=q+25,o=q+36,n=0;n<100;++n){m=(r+n)*24
l=n*24
if(!(m<96e3))return A.b(i,m)
i[m]=l
k=m+1
if(!(k<96e3))return A.b(i,k)
i[k]=q
k=m+2
j=l+24
if(!(k<96e3))return A.b(i,k)
i[k]=j
k=m+3
if(!(k<96e3))return A.b(i,k)
i[k]=q
k=m+4
if(!(k<96e3))return A.b(i,k)
i[k]=l
k=m+5
if(!(k<96e3))return A.b(i,k)
i[k]=p
k=m+6
if(!(k<96e3))return A.b(i,k)
i[k]=j
k=m+7
if(!(k<96e3))return A.b(i,k)
i[k]=p
k=m+8
if(!(k<96e3))return A.b(i,k)
i[k]=j
k=m+9
if(!(k<96e3))return A.b(i,k)
i[k]=q
k=m+10
if(!(k<96e3))return A.b(i,k)
i[k]=l
k=m+11
if(!(k<96e3))return A.b(i,k)
i[k]=p
k=m+18
if(!(k<96e3))return A.b(i,k)
i[k]=l
k=m+19
if(!(k<96e3))return A.b(i,k)
i[k]=p
k=m+20
if(!(k<96e3))return A.b(i,k)
i[k]=j
k=m+21
if(!(k<96e3))return A.b(i,k)
i[k]=p
k=m+22
if(!(k<96e3))return A.b(i,k)
i[k]=l
k=m+23
if(!(k<96e3))return A.b(i,k)
i[k]=o
k=m+14
if(!(k<96e3))return A.b(i,k)
i[k]=j
k=m+15
if(!(k<96e3))return A.b(i,k)
i[k]=o
k=m+12
if(!(k<96e3))return A.b(i,k)
i[k]=j
j=m+13
if(!(j<96e3))return A.b(i,j)
i[j]=p
j=m+16
if(!(j<96e3))return A.b(i,j)
i[j]=l
j=m+17
if(!(j<96e3))return A.b(i,j)
i[j]=o}return i},
jA:function jA(a,b,c){this.a=a
this.b=b
this.c=c},
kd:function kd(a){this.a=a
this.b=null
this.c=!1},
jE(a,b,c,d,e,f){return new A.dQ(e,a,d,b,A.c([],t.r),A.c([],t.ff),c,f.i("dQ<0>"))},
h5:function h5(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.y=_.x=_.r=_.f=0},
b0:function b0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null},
kT:function kT(a){this.a=a},
eL:function eL(a,b){this.a=a
this.b=b},
d4:function d4(){},
dQ:function dQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null
_.y=!1
_.ch=_.Q=_.z=0
_.$ti=h},
jH:function jH(a){this.a=a},
jI:function jI(){},
jF:function jF(a){this.a=a},
jG:function jG(){},
eV:function eV(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0
_.f=!1
_.x=_.r=0
_.y=$},
pV(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
for(s=0;s<40;++s)for(r=s*100,q=s*36,p=q+36,o=0;o<100;++o){n=(r+o)*12
m=o*24
if(!(n<96e3))return A.b(j,n)
j[n]=m
l=n+1
if(!(l<96e3))return A.b(j,l)
j[l]=q
l=n+2
k=m+24
if(!(l<96e3))return A.b(j,l)
j[l]=k
l=n+3
if(!(l<96e3))return A.b(j,l)
j[l]=q
l=n+4
if(!(l<96e3))return A.b(j,l)
j[l]=m
l=n+5
if(!(l<96e3))return A.b(j,l)
j[l]=p
l=n+6
if(!(l<96e3))return A.b(j,l)
j[l]=k
l=n+7
if(!(l<96e3))return A.b(j,l)
j[l]=p
l=n+8
if(!(l<96e3))return A.b(j,l)
j[l]=k
k=n+9
if(!(k<96e3))return A.b(j,k)
j[k]=q
k=n+10
if(!(k<96e3))return A.b(j,k)
j[k]=m
k=n+11
if(!(k<96e3))return A.b(j,k)
j[k]=p}return j},
j7:function j7(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
kk:function kk(a){this.b=a},
qz(a){var s,r=A.m_(4000,new A.l4(a),t.W),q=A.c([],t.c7)
for(s=0;s<4000;++s);return new A.h_(q,A.aa(t.K,t.lZ),new A.a4(100,40,r,t.h),a.b)},
la(a){var s,r,q,p,o
for(s=a.c,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.i(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.O(A.bN(o.f))))return p}throw A.d("Solid")},
qX(a,b){var s,r,q
for(s=a.c;!0;){r=$.eH()
q=new A.i(B.c.w(r.F()*98)+1,B.c.w(r.F()*38)+1)
r=s.h(0,q)
if(!(r.c===B.b||A.O(A.bN(r.f)))&&a.am(q)==null)return q}},
b5(a,b,c){return B.c.w(a.F()*(c-b))+b},
pZ(a,b,c){var s=b.length
if(s===1){if(0>=s)return A.b(b,0)
return b[0]}s=A.b5(a,0,s-1)
if(!(s>=0&&s<b.length))return A.b(b,s)
return b[s]},
hj:function hj(a,b){this.a=a
this.d=0
this.e=b},
l4:function l4(a){this.a=a},
h_:function h_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ko:function ko(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j_:function j_(a){this.a=a},
eX:function eX(a){this.a=a},
iQ:function iQ(a){this.a=a},
je:function je(){},
jf:function jf(a){this.a=a},
iN:function iN(a){this.a=a},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
lC(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.Q))break
q=A.a8(q,b);++p}return p},
mz(a,b,c){return new A.aM(a,b,c.i("aM<0>"))},
cE(a,b,c){var s=A.a8(a,b)
if(c.e.h(0,s)===B.Q)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
mX(a){return new A.cX(a)},
bx(a,b,c){return new A.cv(c,a,b)},
dl(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=A.c([],t.D),a4=t.S,a5=A.aa(t.c1,a4)
for(s=a7.length,r=0;r<a7.length;a7.length===s||(0,A.A)(a7),++r){q=a7[r]
if(q.gbz())q=new A.id(q)
p=a5.h(0,q)
if(p==null){a5.j(0,q,0)
p=0}a5.j(0,q,p+1)}for(s=a5.gak(a5),s=s.gv(s),o=t.q,n=t.n4,m=t.ld,l=t.bu,k=a6.a,j=J.dk(k),i=t.n;s.n();){h=s.gp(s)
q=h.a
g=h.b
f=A.c([],o)
e=A.c([],i)
for(h=j.gv(k);h.n();){d=h.gp(h)
c=q.gbj(q).P(d,a8)
if(c<1000){B.a.k(f,d)
B.a.k(e,c)}}if(f.length===0){B.a.k(a3,q)
continue}h=A.c([],l)
for(b=0;b<f.length;++b){d=f[b]
if(!(b<e.length))return A.b(e,b)
h.push(new A.b3(d,e[b]))}d=m.a(new A.lB())
if(!!h.immutable$list)A.V(A.C("sort"))
a=h.length-1
if(a-0<=32)A.n5(h,0,a,d,n)
else A.n4(h,0,a,d,n)
a0=B.a.dw(h,0,Math.min(3*g,e.length))
B.a.bN(a0)
a1=A.c([],o)
a2=A.ju(a4)
for(;!0;){for(b=0;b<a0.length;++b){if(a2.L(0,b))continue
if(a1.length===g)break
if($.og().F()<0.33){if(!(b<a0.length))return A.b(a0,b)
B.a.k(a1,a0[b].a)
a2.k(0,b)}}h=a1.length
if(h===g)break
else if(g-h>a0.length-a2.a)break}if(a1.length<g)B.a.k(a3,q)
for(h=a1.length,r=0;r<a1.length;a1.length===h||(0,A.A)(a1),++r)q.d2(a1[r],a8)
if(a0.length===0)B.a.k(a3,q)}for(a4=j.gv(k),s=a8.e,o=a6.c;a4.n();){n=a4.gp(a4)
if(s.h(0,n)===B.ax||s.h(0,n)===B.ay)B.a.k(o,n)}return a3},
nS(a,b){var s,r,q,p,o,n,m,l,k,j
B.a.aU(a,new A.lA())
if(0>=a.length)return A.b(a,0)
A.dl(a[0],$.ov(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.A)(s),++p)q.j(0,s[p],B.aX)
if(0>=a.length)return A.b(a,0)
a[0].e=!0
for(s=A.na(a,1,null,A.U(a).c),r=s.$ti,s=new A.bp(s,s.gm(s),r.i("bp<aR.E>")),o=b.a.a.a,r=r.i("aR.E"),n=t.c1,m=2;s.n();){l=r.a(s.d)
k=l.a
j=J.ax(k)
if(j.gm(k)<30){if(m>0){k=A.mT($.lN(),!0,n)
k.push($.mt())}else k=$.lN()
if(!B.a.L(A.dl(l,k,b),$.mt()))--m}else if(j.gm(k)<60)A.dl(l,$.on(),b)
else if(j.gm(k)<100)A.dl(l,$.ol(),b)
else switch(o){case 0:case 1:case 2:case 5:case 6:A.dl(l,$.oj(),b)
break
case 3:case 4:A.dl(l,$.ok(),b)
break}}if(m===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.A)(s),++p)q.j(0,s[p],B.aY)}},
aN:function aN(){},
hi:function hi(){},
aM:function aM(a,b,c){this.a=a
this.b=b
this.$ti=c},
cY:function cY(a,b){this.b=a
this.$ti=b},
fF:function fF(){},
eY:function eY(){},
eK:function eK(){},
f4:function f4(){},
dn:function dn(a){this.a=a},
cX:function cX(a){this.a=a},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
lu:function lu(){},
ln:function ln(){},
lr:function lr(){},
lm:function lm(){},
lo:function lo(){},
ls:function ls(){},
lt:function lt(){},
lq:function lq(){},
lp:function lp(){},
ll:function ll(){},
b3:function b3(a,b){this.a=a
this.b=b},
id:function id(a){this.a=a},
lB:function lB(){},
lA:function lA(){},
oQ(a){var s=t.q
return new A.a3(a,A.c([],s),A.c([],s),A.j4(a))},
j4(a){var s,r,q=J.ax(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gm(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.i(B.c.w(p/q.gm(a)),B.c.w(o/q.gm(a)))},
pS(a){switch(a.a){case 10:case 11:case 9:case 1:case 3:return!0
default:return!1}},
dF:function dF(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
iG:function iG(a,b){this.a=a
this.b=b},
iI:function iI(){},
iJ:function iJ(){},
iK:function iK(a){this.a=a},
iH:function iH(a){this.a=a},
e6:function e6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
fl:function fl(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jn:function jn(a,b){this.a=a
this.b=b},
jO:function jO(){},
ji:function ji(a){this.a=a},
jj:function jj(){},
jk:function jk(){},
jl:function jl(){},
jm:function jm(){},
jS:function jS(){},
bQ:function bQ(a,b){this.a=a
this.b=b},
e_:function e_(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.b=a
this.a=b},
dZ:function dZ(a,b){this.a=a
this.b=b},
ka:function ka(a){this.a=a},
kb:function kb(){},
kc:function kc(a){this.a=a},
po(a){var s=new A.kl(B.U,A.n8(t.E),A.n8(t.bd))
s.dH(a)
return s},
a9(a,b,c,d){return new A.ck(a,c,d,b)},
kl:function kl(a,b,c){this.a=a
this.b=b
this.c=c},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b){this.a=a
this.b=b},
f3:function f3(a,b){this.a=a
this.b=b},
mj(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
nN(a){var s=B.i.Z(u.a,a>>>6)+(a&63),r=s&1,q=B.i.Z(u.z,s>>>1)
return q>>>4&-r|q&15&r-1},
nI(a,b){var s=B.i.Z(u.a,1024+(a&1023))+(b&1023),r=s&1,q=B.i.Z(u.z,s>>>1)
return q>>>4&-r|q&15&r-1},
qF(a,b){return J.oA(t.n6.a(a),b)},
fk(a){var s,r
if(a instanceof A.a0){s=B.aO
r=null}else if(a instanceof A.a2){s=B.aM
r=null}else if(a instanceof A.au){s=B.aN
r=0}else{if(a instanceof A.iR)s=B.dW
else{J.c6(a)
s=B.aP}r=null}$.mN=$.mN+1
return new A.aP(a,s,r)},
qR(a,b,c){var s,r,q=a.r
if(q!=null){if(b===q.c)return!0
s=a.q()
r=b.q()
if(s==null||r==null)return!1
return c.f.a1(s).h(0,r)}return!0},
r0(a){A.b4(a)
$.mo().M(a,$.mq())
B.bj.d9(window,A.nO())},
mh(){var s=0,r=A.bC(t.z),q,p,o,n,m
var $async$mh=A.bD(function(a,b){if(a===1)return A.by(b,r)
while(true)switch(s){case 0:m=$.mo()
m.e.aN()
q=t.w
q=new A.fg(m,A.c([],q),A.c([],q),A.c([],t.fy),A.c([],t.ge),$.lO())
p=m.cx
o=p.b
new A.bY(o,A.E(o).i("bY<1>")).cY(q.geN())
o=m.gK()
n=q.z
n.toString
B.a.k(o.d,n)
p.a=B.F
q=t.x.a(q.gcj())
B.a.k(m.c,q)
B.bj.d9(window,A.nO())
return A.bz(null,r)}})
return A.bA($async$mh,r)}},J={
mi(a,b,c,d){return{i:a,p:b,e:c,x:d}},
lc(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.mg==null){A.qO()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.m4("Return interceptor for "+A.B(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.kM
if(o==null)o=$.kM=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.qV(a)
if(p!=null)return p
if(typeof a=="function")return B.dY
s=Object.getPrototypeOf(a)
if(s==null)return B.ba
if(s===Object.prototype)return B.ba
if(typeof q=="function"){o=$.kM
if(o==null)o=$.kM=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.az,enumerable:false,writable:true,configurable:true})
return B.az}return B.az},
p_(a,b){if(a<0||a>4294967295)throw A.d(A.bs(a,0,4294967295,"length",null))
return J.p1(new Array(a),b)},
p0(a,b){if(a<0)throw A.d(A.cG("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("t<0>"))},
p1(a,b){return J.mQ(A.c(a,b.i("t<0>")),b)},
mQ(a,b){a.fixed$length=Array
return a},
dj(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dK.prototype
return J.fm.prototype}if(typeof a=="string")return J.ci.prototype
if(a==null)return J.dL.prototype
if(typeof a=="boolean")return J.dJ.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof A.v)return a
return J.lc(a)},
ax(a){if(typeof a=="string")return J.ci.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof A.v)return a
return J.lc(a)},
dk(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof A.v)return a
return J.lc(a)},
qJ(a){if(typeof a=="number")return J.cR.prototype
if(typeof a=="string")return J.ci.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.d6.prototype
return a},
lb(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof A.v)return a
return J.lc(a)},
a_(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dj(a).E(a,b)},
mv(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.qS(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ax(a).h(a,b)},
mw(a,b,c){return J.dk(a).j(a,b,c)},
oz(a,b,c,d){return J.lb(a).ey(a,b,c,d)},
oA(a,b){return J.qJ(a).O(a,b)},
mx(a,b){return J.dk(a).t(a,b)},
oB(a,b){return J.dk(a).u(a,b)},
ay(a){return J.dj(a).gA(a)},
am(a){return J.dk(a).gv(a)},
an(a){return J.ax(a).gm(a)},
oC(a){return J.lb(a).gbu(a)},
oD(a,b,c){return J.dk(a).cZ(a,b,c)},
c6(a){return J.dj(a).l(a)},
a:function a(){},
dJ:function dJ(){},
dL:function dL(){},
cj:function cj(){},
fM:function fM(){},
d6:function d6(){},
bn:function bn(){},
t:function t(a){this.$ti=a},
jo:function jo(a){this.$ti=a},
dr:function dr(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cR:function cR(){},
dK:function dK(){},
fm:function fm(){},
ci:function ci(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.lX.prototype={}
J.a.prototype={
E(a,b){return a===b},
gA(a){return A.cs(a)},
l(a){return"Instance of '"+A.jU(a)+"'"}}
J.dJ.prototype={
l(a){return String(a)},
dq(a,b){return b||a},
gA(a){return a?519018:218159},
$iD:1}
J.dL.prototype={
E(a,b){return null==b},
l(a){return"null"},
gA(a){return 0},
$iX:1}
J.cj.prototype={
gA(a){return 0},
l(a){return String(a)}}
J.fM.prototype={}
J.d6.prototype={}
J.bn.prototype={
l(a){var s=a[$.nW()]
if(s==null)return this.dA(a)
return"JavaScript function for "+J.c6(s)},
$icf:1}
J.t.prototype={
k(a,b){A.U(a).c.a(b)
if(!!a.fixed$length)A.V(A.C("add"))
a.push(b)},
d7(a,b){var s
if(!!a.fixed$length)A.V(A.C("removeAt"))
s=a.length
if(b>=s)throw A.d(A.n_(b,null))
return a.splice(b,1)[0]},
H(a,b){var s
if(!!a.fixed$length)A.V(A.C("remove"))
for(s=0;s<a.length;++s)if(J.a_(a[s],b)){a.splice(s,1)
return!0}return!1},
eb(a,b,c){var s,r,q,p,o
A.U(a).i("D(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.O(b.$1(p)))s.push(p)
if(a.length!==r)throw A.d(A.aX(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
a3(a,b){A.U(a).i("j<1>").a(b)
if(!!a.fixed$length)A.V(A.C("addAll"))
this.dK(a,b)
return},
dK(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.aX(a))
for(r=0;r<s;++r)a.push(b[r])},
u(a,b){var s,r
A.U(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.d(A.aX(a))}},
cZ(a,b,c){var s=A.U(a)
return new A.bq(a,s.B(c).i("1(2)").a(b),s.i("@<1>").B(c).i("bq<1,2>"))},
eL(a,b,c){var s,r,q,p=A.U(a)
p.i("D(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(A.O(b.$1(q)))return q
if(a.length!==s)throw A.d(A.aX(a))}return c.$0()},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
dw(a,b,c){var s=a.length
if(b>s)throw A.d(A.bs(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.bs(c,b,s,"end",null))
if(b===c)return A.c([],A.U(a))
return A.c(a.slice(b,c),A.U(a))},
geK(a){if(a.length>0)return a[0]
throw A.d(A.mP())},
gdv(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.d(A.mP())
throw A.d(A.oZ())},
bM(a,b,c,d){var s,r,q,p
A.U(a).i("j<1>").a(d)
if(!!a.immutable$list)A.V(A.C("setRange"))
A.jZ(b,c,a.length)
s=c-b
if(s===0)return
A.jY(0,"skipCount")
r=d
q=J.ax(r)
if(s>q.gm(r))throw A.d(A.oY())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
eA(a,b){var s,r
A.U(a).i("D(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.O(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.aX(a))}return!1},
aU(a,b){var s=A.U(a)
s.i("f(1,1)?").a(b)
if(!!a.immutable$list)A.V(A.C("sort"))
A.ph(a,b,s.c)},
bN(a){var s,r,q,p
if(!!a.immutable$list)A.V(A.C("shuffle"))
s=a.length
for(;s>1;){r=B.m.D(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
eR(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.a_(a[s],b))return s}return-1},
L(a,b){var s
for(s=0;s<a.length;++s)if(J.a_(a[s],b))return!0
return!1},
l(a){return A.lW(a,"[","]")},
gv(a){return new J.dr(a,a.length,A.U(a).i("dr<1>"))},
gA(a){return A.cs(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.V(A.C("set length"))
if(b>a.length)A.U(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cC(a,b))
return a[b]},
j(a,b,c){A.G(b)
A.U(a).c.a(c)
if(!!a.immutable$list)A.V(A.C("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.cC(a,b))
a[b]=c},
$ip:1,
$ij:1,
$io:1}
J.jo.prototype={}
J.dr.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.A(q))
s=r.c
if(s>=p){r.sc7(null)
return!1}r.sc7(q[s]);++r.c
return!0},
sc7(a){this.d=this.$ti.i("1?").a(a)},
$iR:1}
J.cR.prototype={
O(a,b){var s
A.b4(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaO(b)
if(this.gaO(a)===s)return 0
if(this.gaO(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaO(a){return a===0?1/a<0:a<0},
az(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.C(""+a+".toInt()"))},
cE(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.C(""+a+".ceil()"))},
ab(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.C(""+a+".floor()"))},
w(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.C(""+a+".round()"))},
a8(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
bg(a,b,c){if(B.d.O(b,c)>0)throw A.d(A.nE(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
dd(a,b){var s
if(b>20)throw A.d(A.bs(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaO(a))return"-"+s
return s},
fb(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.bs(b,2,36,"radix",null))
s=a.toString(b)
if(B.i.bh(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.V(A.C("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.i.bL("0",p)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dn(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bT(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cq(a,b)},
T(a,b){return(a|0)===a?a/b|0:this.cq(a,b)},
cq(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.C("Result of truncating division is "+A.B(s)+": "+A.B(a)+" ~/ "+b))},
cp(a,b){var s
if(a>0)s=this.eh(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
eh(a,b){return b>31?0:a>>>b},
$iae:1,
$iM:1,
$iN:1}
J.dK.prototype={$if:1}
J.fm.prototype={}
J.ci.prototype={
bh(a,b){if(b<0)throw A.d(A.cC(a,b))
if(b>=a.length)A.V(A.cC(a,b))
return a.charCodeAt(b)},
Z(a,b){if(b>=a.length)throw A.d(A.cC(a,b))
return a.charCodeAt(b)},
C(a,b){return a+b},
bR(a,b,c){return a.substring(b,A.jZ(b,c,a.length))},
bL(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.bX)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
d3(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bL(c,s)+a},
bk(a,b,c){var s=a.length
if(c>s)throw A.d(A.bs(c,0,s,null,null))
return A.r2(a,b,c)},
O(a,b){var s
A.ad(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
l(a){return a},
gA(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cC(a,b))
return a[b]},
$iae:1,
$imY:1,
$iu:1}
A.cS.prototype={
l(a){var s="LateInitializationError: "+this.a
return s}}
A.k4.prototype={}
A.p.prototype={}
A.aR.prototype={
gv(a){var s=this
return new A.bp(s,s.gm(s),A.E(s).i("bp<aR.E>"))},
cN(a,b,c,d){var s,r,q,p=this
d.a(b)
A.E(p).B(d).i("1(1,aR.E)").a(c)
s=p.gm(p)
for(r=b,q=0;q<s;++q){r=c.$2(r,p.t(0,q))
if(s!==p.gm(p))throw A.d(A.aX(p))}return r}}
A.e4.prototype={
gdW(){var s=J.an(this.a),r=this.c
if(r==null||r>s)return s
return r},
gei(){var s=J.an(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.an(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.R()
return s-q},
t(a,b){var s=this,r=s.gei()+b
if(b<0||r>=s.gdW())throw A.d(A.Q(b,s,"index",null,null))
return J.mx(s.a,r)}}
A.bp.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.ax(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.aX(q))
s=r.c
if(s>=o){r.sas(null)
return!1}r.sas(p.t(q,s));++r.c
return!0},
sas(a){this.d=this.$ti.i("1?").a(a)},
$iR:1}
A.cm.prototype={
gv(a){var s=A.E(this)
return new A.dP(J.am(this.a),this.b,s.i("@<1>").B(s.Q[1]).i("dP<1,2>"))},
gm(a){return J.an(this.a)}}
A.dC.prototype={$ip:1}
A.dP.prototype={
n(){var s=this,r=s.b
if(r.n()){s.sas(s.c.$1(r.gp(r)))
return!0}s.sas(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
sas(a){this.a=this.$ti.i("2?").a(a)}}
A.bq.prototype={
gm(a){return J.an(this.a)},
t(a,b){return this.b.$1(J.mx(this.a,b))}}
A.aJ.prototype={
gv(a){return new A.e7(J.am(this.a),this.b,this.$ti.i("e7<1>"))}}
A.e7.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.O(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.aq.prototype={}
A.cL.prototype={
l(a){return A.m0(this)},
$iW:1}
A.dy.prototype={
gm(a){return this.a},
aL(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.aL(0,b))return null
return this.b[A.ad(b)]},
u(a,b){var s,r,q,p,o,n=this.$ti
n.i("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.ad(s[p])
b.$2(o,n.a(q[o]))}}}
A.a7.prototype={
b3(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.oW(r)
o=A.lZ(A.qe(),q,r,s.Q[1])
A.nG(p.a,o)
p.$map=o}return o},
h(a,b){return this.b3().h(0,b)},
u(a,b){this.$ti.i("~(1,2)").a(b)
this.b3().u(0,b)},
gm(a){var s=this.b3()
return s.gm(s)}}
A.jd.prototype={
$1(a){return this.a.b(a)},
$S:27}
A.kg.prototype={
a_(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.dV.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.fn.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hd.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.jQ.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.dD.prototype={}
A.eo.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ib2:1}
A.cb.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.nU(r==null?"unknown":r)+"'"},
$icf:1,
gfl(){return this},
$C:"$1",
$R:1,
$D:null}
A.eZ.prototype={$C:"$0",$R:0}
A.f_.prototype={$C:"$2",$R:2}
A.h4.prototype={}
A.h0.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.nU(s)+"'"}}
A.cJ.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cJ))return!1
return this.$_target===b.$_target&&this.a===b.a},
gA(a){return(A.lk(this.a)^A.cs(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.jU(t.K.a(this.a))+"'")}}
A.fT.prototype={
l(a){return"RuntimeError: "+this.a}}
A.hk.prototype={
l(a){return"Assertion failed: "+A.fa(this.a)}}
A.aB.prototype={
gm(a){return this.a},
ga5(a){return new A.dM(this,A.E(this).i("dM<1>"))},
gbI(a){var s=this,r=A.E(s)
return A.mU(s.ga5(s),new A.jq(s),r.c,r.Q[1])},
aL(a,b){var s=this.cS(b)
return s},
cS(a){var s=this,r=s.d
if(r==null)return!1
return s.aq(s.aB(r,s.ap(a)),a)>=0},
a3(a,b){A.E(this).i("W<1,2>").a(b).u(0,new A.jp(this))},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b4(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b4(p,b)
q=r==null?n:r.b
return q}else return o.cT(b)},
cT(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.aB(p,q.ap(a))
r=q.aq(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.E(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.bV(s==null?q.b=q.b9():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.bV(r==null?q.c=q.b9():r,b,c)}else q.cV(b,c)},
cV(a,b){var s,r,q,p,o=this,n=A.E(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.b9()
r=o.ap(a)
q=o.aB(s,r)
if(q==null)o.be(s,r,[o.ba(a,b)])
else{p=o.aq(q,a)
if(p>=0)q[p].b=b
else q.push(o.ba(a,b))}},
H(a,b){var s=this.cU(b)
return s},
cU(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ap(a)
r=o.aB(n,s)
q=o.aq(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.es(p)
if(r.length===0)o.c8(n,s)
return p.b},
aI(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.b8()}},
u(a,b){var s,r,q=this
A.E(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.aX(q))
s=s.c}},
bV(a,b,c){var s,r=this,q=A.E(r)
q.c.a(b)
q.Q[1].a(c)
s=r.b4(a,b)
if(s==null)r.be(a,b,r.ba(b,c))
else s.b=c},
b8(){this.r=this.r+1&67108863},
ba(a,b){var s=this,r=A.E(s),q=new A.js(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.b8()
return q},
es(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.b8()},
ap(a){return J.ay(a)&0x3ffffff},
aq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a_(a[r].a,b))return r
return-1},
l(a){return A.m0(this)},
b4(a,b){return a[b]},
aB(a,b){return a[b]},
be(a,b,c){a[b]=c},
c8(a,b){delete a[b]},
b9(){var s="<non-identifier-key>",r=Object.create(null)
this.be(r,s,r)
this.c8(r,s)
return r},
$ijr:1}
A.jq.prototype={
$1(a){var s=this.a,r=A.E(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.E(this.a).i("2(1)")}}
A.jp.prototype={
$2(a,b){var s=this.a,r=A.E(s)
s.j(0,r.c.a(a),r.Q[1].a(b))},
$S(){return A.E(this.a).i("~(1,2)")}}
A.js.prototype={}
A.dM.prototype={
gm(a){return this.a.a},
gv(a){var s=this.a,r=new A.dN(s,s.r,this.$ti.i("dN<1>"))
r.c=s.e
return r}}
A.dN.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.aX(q))
s=r.c
if(s==null){r.sbU(null)
return!1}else{r.sbU(s.a)
r.c=s.c
return!0}},
sbU(a){this.d=this.$ti.i("1?").a(a)},
$iR:1}
A.le.prototype={
$1(a){return this.a(a)},
$S:28}
A.lf.prototype={
$2(a,b){return this.a(a,b)},
$S:33}
A.lg.prototype={
$1(a){return this.a(A.ad(a))},
$S:61}
A.kw.prototype={
aE(){var s=this.b
if(s===this)throw A.d(new A.cS("Local '"+this.a+"' has not been initialized."))
return s}}
A.fx.prototype={$imH:1}
A.cr.prototype={$iaI:1}
A.cV.prototype={
gm(a){return a.length},
$iy:1}
A.cq.prototype={
h(a,b){A.bB(b,a,a.length)
return a[b]},
j(a,b,c){A.G(b)
A.ns(c)
A.bB(b,a,a.length)
a[b]=c},
$ip:1,
$ij:1,
$io:1}
A.dS.prototype={
j(a,b,c){A.G(b)
A.G(c)
A.bB(b,a,a.length)
a[b]=c},
$ip:1,
$ij:1,
$io:1}
A.dR.prototype={$ilV:1}
A.fy.prototype={
h(a,b){A.bB(b,a,a.length)
return a[b]}}
A.fz.prototype={
h(a,b){A.bB(b,a,a.length)
return a[b]}}
A.fA.prototype={
h(a,b){A.bB(b,a,a.length)
return a[b]}}
A.fB.prototype={
h(a,b){A.bB(b,a,a.length)
return a[b]}}
A.fC.prototype={
h(a,b){A.bB(b,a,a.length)
return a[b]}}
A.cW.prototype={
gm(a){return a.length},
h(a,b){A.bB(b,a,a.length)
return a[b]},
$ipm:1}
A.dT.prototype={
gm(a){return a.length},
h(a,b){A.bB(b,a,a.length)
return a[b]},
$ipn:1}
A.eh.prototype={}
A.ei.prototype={}
A.ej.prototype={}
A.ek.prototype={}
A.b1.prototype={
i(a){return A.kW(v.typeUniverse,this,a)},
B(a){return A.pL(v.typeUniverse,this,a)}}
A.hC.prototype={}
A.ev.prototype={
l(a){return A.al(this.a,null)},
$inc:1}
A.hx.prototype={
l(a){return this.a}}
A.ew.prototype={$ibW:1}
A.kt.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:14}
A.ks.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:26}
A.ku.prototype={
$0(){this.a.$0()},
$S:7}
A.kv.prototype={
$0(){this.a.$0()},
$S:7}
A.eu.prototype={
dI(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.bg(new A.kV(this,b),0),a)
else throw A.d(A.C("`setTimeout()` not found."))},
dJ(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.bg(new A.kU(this,a,Date.now(),b),0),a)
else throw A.d(A.C("Periodic timer."))},
eD(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.d(A.C("Canceling a timer."))},
$ih8:1}
A.kV.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.kU.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.d.bT(s,o)}q.c=p
r.d.$1(q)},
$S:7}
A.hl.prototype={
a4(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.bY(b)
else{s=r.a
if(q.i("ar<1>").b(b))s.c0(b)
else s.at(q.c.a(b))}},
bi(a,b){var s=this.a
if(this.b)s.N(a,b)
else s.aX(a,b)}}
A.kZ.prototype={
$1(a){return this.a.$2(0,a)},
$S:8}
A.l_.prototype={
$2(a,b){this.a.$2(1,new A.dD(a,t.l.a(b)))},
$S:39}
A.l3.prototype={
$2(a,b){this.a(A.G(a),b)},
$S:32}
A.dc.prototype={
l(a){return"IterationMarker("+this.b+", "+A.B(this.a)+")"}}
A.c0.prototype={
gp(a){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gp(s)},
n(){var s,r,q,p,o,n,m=this
for(s=m.$ti.i("R<1>");!0;){r=m.c
if(r!=null)if(r.n())return!0
else m.scf(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.dc){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sbX(null)
return!1}if(0>=o.length)return A.b(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.am(r))
if(n instanceof A.c0){r=m.d
if(r==null)r=m.d=[]
B.a.k(r,m.a)
m.a=n.a
continue}else{m.scf(n)
continue}}}}else{m.sbX(q)
return!0}}return!1},
sbX(a){this.b=this.$ti.i("1?").a(a)},
scf(a){this.c=this.$ti.i("R<1>?").a(a)},
$iR:1}
A.er.prototype={
gv(a){return new A.c0(this.a(),this.$ti.i("c0<1>"))}}
A.dt.prototype={
l(a){return A.B(this.a)},
$iL:1,
gaA(){return this.b}}
A.jb.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.N(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.N(q.e.aE(),q.f.aE())},
$S:9}
A.ja.prototype={
$1(a){var s,r,q=this,p=q.x
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.mw(s,q.b,a)
if(r.b===0)q.c.at(A.p5(s,p))}else if(r.b===0&&!q.e)q.c.N(q.f.aE(),q.r.aE())},
$S(){return this.x.i("X(0)")}}
A.e9.prototype={
bi(a,b){A.eE(a,"error",t.K)
if((this.a.a&30)!==0)throw A.d(A.ag("Future already completed"))
if(b==null)b=A.lQ(a)
this.N(a,b)},
aK(a){return this.bi(a,null)}}
A.aW.prototype={
a4(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.ag("Future already completed"))
s.bY(r.i("1/").a(b))},
aJ(a){return this.a4(a,null)},
N(a,b){this.a.aX(a,b)}}
A.dd.prototype={
a4(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.ag("Future already completed"))
s.c4(r.i("1/").a(b))},
aJ(a){return this.a4(a,null)},
N(a,b){this.a.N(a,b)}}
A.cz.prototype={
eS(a){if((this.c&15)!==6)return!0
return this.b.b.bE(t.iW.a(this.d),a.a,t.k4,t.K)},
eP(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.f6(q,m,a.b,o,n,t.l)
else p=l.bE(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bC.b(A.bh(s))){if((r.c&1)!==0)throw A.d(A.cG("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cG("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.K.prototype={
aQ(a,b,c){var s,r,q,p=this.$ti
p.B(c).i("1/(2)").a(a)
s=$.F
if(s===B.k){if(b!=null&&!t.ng.b(b)&&!t.y.b(b))throw A.d(A.mA(b,"onError",u.c))}else{c.i("@<0/>").B(p.c).i("1(2)").a(a)
if(b!=null)b=A.qj(b,s)}r=new A.K(s,c.i("K<0>"))
q=b==null?1:3
this.aW(new A.cz(r,q,a,b,p.i("@<1>").B(c).i("cz<1,2>")))
return r},
dc(a,b){return this.aQ(a,null,b)},
cr(a,b,c){var s,r=this.$ti
r.B(c).i("1/(2)").a(a)
s=new A.K($.F,c.i("K<0>"))
this.aW(new A.cz(s,19,a,b,r.i("@<1>").B(c).i("cz<1,2>")))
return s},
ef(a){this.a=this.a&1|16
this.c=a},
aZ(a){this.a=a.a&30|this.a&1
this.c=a.c},
aW(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.f.a(r.c)
if((s.a&24)===0){s.aW(a)
return}r.aZ(s)}A.dh(null,null,r.b,t.M.a(new A.kz(r,a)))}},
ck(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.f.a(m.c)
if((n.a&24)===0){n.ck(a)
return}m.aZ(n)}l.a=m.aG(a)
A.dh(null,null,m.b,t.M.a(new A.kH(l,m)))}},
aF(){var s=t.F.a(this.c)
this.c=null
return this.aG(s)},
aG(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
c_(a){var s,r,q,p=this
p.a^=2
try{a.aQ(new A.kD(p),new A.kE(p),t.P)}catch(q){s=A.bh(q)
r=A.bE(q)
A.nR(new A.kF(p,s,r))}},
c4(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("ar<1>").b(a))if(q.b(a))A.kC(a,r)
else r.c_(a)
else{s=r.aF()
q.c.a(a)
r.a=8
r.c=a
A.db(r,s)}},
at(a){var s,r=this
r.$ti.c.a(a)
s=r.aF()
r.a=8
r.c=a
A.db(r,s)},
N(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.aF()
this.ef(A.iz(a,b))
A.db(this,s)},
bY(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("ar<1>").b(a)){this.c0(a)
return}this.dN(s.c.a(a))},
dN(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.dh(null,null,s.b,t.M.a(new A.kB(s,a)))},
c0(a){var s=this,r=s.$ti
r.i("ar<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.dh(null,null,s.b,t.M.a(new A.kG(s,a)))}else A.kC(a,s)
return}s.c_(a)},
aX(a,b){t.l.a(b)
this.a^=2
A.dh(null,null,this.b,t.M.a(new A.kA(this,a,b)))},
$iar:1}
A.kz.prototype={
$0(){A.db(this.a,this.b)},
$S:0}
A.kH.prototype={
$0(){A.db(this.b,this.a.a)},
$S:0}
A.kD.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.at(p.$ti.c.a(a))}catch(q){s=A.bh(q)
r=A.bE(q)
p.N(s,r)}},
$S:14}
A.kE.prototype={
$2(a,b){this.a.N(t.K.a(a),t.l.a(b))},
$S:19}
A.kF.prototype={
$0(){this.a.N(this.b,this.c)},
$S:0}
A.kB.prototype={
$0(){this.a.at(this.b)},
$S:0}
A.kG.prototype={
$0(){A.kC(this.b,this.a)},
$S:0}
A.kA.prototype={
$0(){this.a.N(this.b,this.c)},
$S:0}
A.kK.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.f5(t.mY.a(q.d),t.z)}catch(p){s=A.bh(p)
r=A.bE(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.iz(s,r)
o.b=!0
return}if(l instanceof A.K&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.g.b(l)){n=m.b.a
q=m.a
q.c=l.dc(new A.kL(n),t.z)
q.b=!1}},
$S:0}
A.kL.prototype={
$1(a){return this.a},
$S:21}
A.kJ.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bE(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bh(l)
r=A.bE(l)
q=this.a
q.c=A.iz(s,r)
q.b=!0}},
$S:0}
A.kI.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.eS(s)&&p.a.e!=null){p.c=p.a.eP(s)
p.b=!1}}catch(o){r=A.bh(o)
q=A.bE(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.iz(r,q)
n.b=!0}},
$S:0}
A.hm.prototype={}
A.ct.prototype={
gm(a){var s={},r=new A.K($.F,t.hy)
s.a=0
this.bt(new A.k8(s,this),!0,new A.k9(s,r),r.gdR())
return r}}
A.k8.prototype={
$1(a){A.E(this.b).c.a(a);++this.a.a},
$S(){return A.E(this.b).i("~(1)")}}
A.k9.prototype={
$0(){this.b.c4(this.a.a)},
$S:0}
A.bu.prototype={}
A.ep.prototype={
ge8(){var s,r=this
if((r.b&8)===0)return A.E(r).i("c_<1>?").a(r.a)
s=A.E(r)
return s.i("c_<1>?").a(s.i("i_<1>").a(r.a).gbJ())},
dX(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.bf(A.E(q).i("bf<1>"))
return A.E(q).i("bf<1>").a(s)}r=A.E(q)
s=r.i("i_<1>").a(q.a).gbJ()
return r.i("bf<1>").a(s)},
gek(){var s=this.a
if((this.b&8)!==0)s=t.gL.a(s).gbJ()
return A.E(this).i("da<1>").a(s)},
dO(){if((this.b&4)!==0)return new A.bt("Cannot add event after closing")
return new A.bt("Cannot add event while adding a stream")},
k(a,b){var s,r=this,q=A.E(r)
q.c.a(b)
s=r.b
if(s>=4)throw A.d(r.dO())
if((s&1)!==0)r.bd(b)
else if((s&3)===0)r.dX().k(0,new A.cw(b,q.i("cw<1>")))},
ej(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=A.E(l)
k.i("~(1)?").a(a)
t.Z.a(c)
if((l.b&3)!==0)throw A.d(A.ag("Stream has already been listened to."))
s=$.F
r=d?1:0
t.bm.B(k.c).i("1(2)").a(a)
A.pt(s,b)
q=c==null?A.qx():c
p=t.M
p.a(q)
o=new A.da(l,a,s,r,k.i("da<1>"))
n=l.ge8()
r=l.b|=1
if((r&8)!==0){m=k.i("i_<1>").a(l.a)
m.sbJ(o)
m.f3(0)}else l.a=o
o.eg(n)
k=p.a(new A.kS(l))
s=o.e
o.e=s|32
k.$0()
o.e&=4294967263
o.c1((s&4)!==0)
return o},
$in7:1,
$ink:1,
$icy:1}
A.kS.prototype={
$0(){A.me(this.a.d)},
$S:0}
A.hn.prototype={
bd(a){var s=this.$ti
s.c.a(a)
this.gek().dM(new A.cw(a,s.i("cw<1>")))}}
A.d9.prototype={}
A.bY.prototype={
gA(a){return(A.cs(this.a)^892482866)>>>0},
E(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bY&&b.a===this.a}}
A.da.prototype={
cg(){var s=this.x,r=A.E(s)
r.i("bu<1>").a(this)
if((s.b&8)!==0)r.i("i_<1>").a(s.a).fn(0)
A.me(s.e)},
ci(){var s=this.x,r=A.E(s)
r.i("bu<1>").a(this)
if((s.b&8)!==0)r.i("i_<1>").a(s.a).f3(0)
A.me(s.f)}}
A.e8.prototype={
eg(a){var s=this
A.E(s).i("c_<1>?").a(a)
if(a==null)return
s.sbb(a)
if(a.c!=null){s.e|=64
a.aS(s)}},
cg(){},
ci(){},
dM(a){var s=this,r=A.E(s),q=r.i("bf<1>?").a(s.r)
if(q==null)q=new A.bf(r.i("bf<1>"))
s.sbb(q)
q.k(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.aS(s)}},
bd(a){var s,r=this,q=A.E(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.da(r.a,a,q)
r.e&=4294967263
r.c1((s&4)!==0)},
c1(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.sbb(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.cg()
else q.ci()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.aS(q)},
sbb(a){this.r=A.E(this).i("c_<1>?").a(a)},
$ibu:1,
$icy:1}
A.eq.prototype={
bt(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.ej(s.i("~(1)?").a(a),d,c,b===!0)},
cY(a){return this.bt(a,null,null,null)}}
A.hs.prototype={}
A.cw.prototype={}
A.c_.prototype={
aS(a){var s,r=this
r.$ti.i("cy<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.nR(new A.kP(r,a))
r.a=1}}
A.kP.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("cy<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.E(r).i("cy<1>").a(s).bd(r.b)},
$S:0}
A.bf.prototype={
k(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.i0.prototype={}
A.ez.prototype={$ine:1}
A.l2.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.l(0)
throw s},
$S:0}
A.hU.prototype={
f7(a){var s,r,q,p,o
t.M.a(a)
try{if(B.k===$.F){a.$0()
return}A.nz(null,null,this,a,t.H)}catch(q){s=A.bh(q)
r=A.bE(q)
p=t.K.a(s)
o=t.l.a(r)
A.is(p,o)}},
da(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.k===$.F){a.$1(b)
return}A.nA(null,null,this,a,b,t.H,c)}catch(q){s=A.bh(q)
r=A.bE(q)
p=t.K.a(s)
o=t.l.a(r)
A.is(p,o)}},
cB(a){return new A.kQ(this,t.M.a(a))},
cC(a,b){return new A.kR(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
f5(a,b){b.i("0()").a(a)
if($.F===B.k)return a.$0()
return A.nz(null,null,this,a,b)},
bE(a,b,c,d){c.i("@<0>").B(d).i("1(2)").a(a)
d.a(b)
if($.F===B.k)return a.$1(b)
return A.nA(null,null,this,a,b,c,d)},
f6(a,b,c,d,e,f){d.i("@<0>").B(e).B(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.F===B.k)return a.$2(b,c)
return A.qk(null,null,this,a,b,c,d,e,f)},
bA(a,b,c,d){return b.i("@<0>").B(c).B(d).i("1(2,3)").a(a)}}
A.kQ.prototype={
$0(){return this.a.f7(this.b)},
$S:0}
A.kR.prototype={
$1(a){var s=this.c
return this.a.da(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.kO.prototype={
ap(a){return A.lk(a)&1073741823},
aq(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.ed.prototype={
h(a,b){if(!A.O(this.z.$1(b)))return null
return this.dC(b)},
j(a,b,c){var s=this.$ti
this.dE(s.c.a(b),s.Q[1].a(c))},
aL(a,b){if(!A.O(this.z.$1(b)))return!1
return this.dB(b)},
H(a,b){if(!A.O(this.z.$1(b)))return null
return this.dD(b)},
ap(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
aq(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(A.O(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.kN.prototype={
$1(a){return this.a.b(a)},
$S:40}
A.ee.prototype={
gv(a){var s=this,r=new A.ef(s,s.r,s.$ti.i("ef<1>"))
r.c=s.e
return r},
gm(a){return this.a},
L(a,b){var s
if(typeof b=="number"&&(b&1073741823)===b){s=this.c
if(s==null)return!1
return t.nF.a(s[b])!=null}else return this.dS(b)},
dS(a){var s=this.d
if(s==null)return!1
return this.cb(s[J.ay(a)&1073741823],a)>=0},
k(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.c2(s==null?q.b=A.m5():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.c2(r==null?q.c=A.m5():r,b)}else return q.dQ(0,b)},
dQ(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.m5()
r=J.ay(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.b_(b)]
else{if(p.cb(q,b)>=0)return!1
q.push(p.b_(b))}return!0},
c2(a,b){this.$ti.c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.b_(b)
return!0},
b_(a){var s=this,r=new A.hJ(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
cb(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a_(a[r].a,b))return r
return-1}}
A.hJ.prototype={}
A.ef.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.aX(q))
else if(r==null){s.sc3(null)
return!1}else{s.sc3(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sc3(a){this.d=this.$ti.i("1?").a(a)},
$iR:1}
A.dI.prototype={}
A.jt.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:44}
A.l.prototype={
gv(a){return new A.bp(a,this.gm(a),A.b6(a).i("bp<l.E>"))},
t(a,b){return this.h(a,b)},
ao(a,b,c,d){var s,r=A.b6(a)
d=r.i("l.E").a(r.i("l.E?").a(d))
A.jZ(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
l(a){return A.lW(a,"[","]")}}
A.dO.prototype={}
A.jx.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.B(a)
r.a=s+": "
r.a+=A.B(b)},
$S:60}
A.z.prototype={
u(a,b){var s,r,q=A.b6(a)
q.i("~(z.K,z.V)").a(b)
for(s=J.am(this.ga5(a)),q=q.i("z.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gak(a){return J.oD(this.ga5(a),new A.jz(a),A.b6(a).i("cT<z.K,z.V>"))},
gm(a){return J.an(this.ga5(a))},
l(a){return A.m0(a)},
$iW:1}
A.jz.prototype={
$1(a){var s,r=this.a,q=A.b6(r)
q.i("z.K").a(a)
s=q.i("z.V")
return new A.cT(a,s.a(J.mv(r,a)),q.i("@<z.K>").B(s).i("cT<1,2>"))},
$S(){return A.b6(this.a).i("cT<z.K,z.V>(z.K)")}}
A.e0.prototype={
l(a){return A.lW(this,"{","}")}}
A.el.prototype={$ip:1,$ij:1,$in3:1}
A.eA.prototype={}
A.cd.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.cd&&this.a===b.a&&!0},
O(a,b){return B.d.O(this.a,t.cs.a(b).a)},
gA(a){var s=this.a
return(s^B.d.cp(s,30))&1073741823},
l(a){var s=this,r=A.oM(A.pe(s)),q=A.f6(A.pc(s)),p=A.f6(A.p8(s)),o=A.f6(A.p9(s)),n=A.f6(A.pb(s)),m=A.f6(A.pd(s)),l=A.oN(A.pa(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
return k},
$iae:1}
A.af.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.af&&this.a===b.a},
gA(a){return B.d.gA(this.a)},
O(a,b){return B.d.O(this.a,t.L.a(b).a)},
l(a){var s,r,q,p,o,n=this.a,m=B.d.T(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.d.T(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.d.T(n,1e6)
p=q<10?"0":""
o=B.i.d3(B.d.l(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o},
$iae:1}
A.kx.prototype={}
A.L.prototype={
gaA(){return A.bE(this.$thrownJsError)}}
A.ds.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fa(s)
return"Assertion failed"}}
A.bW.prototype={}
A.fG.prototype={
l(a){return"Throw of null."}}
A.bi.prototype={
gb2(){return"Invalid argument"+(!this.a?"(s)":"")},
gb1(){return""},
l(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+A.B(n),l=q.gb2()+o+m
if(!q.a)return l
s=q.gb1()
r=A.fa(q.b)
return l+s+": "+r}}
A.d_.prototype={
gb2(){return"RangeError"},
gb1(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.B(q):""
else if(q==null)s=": Not greater than or equal to "+A.B(r)
else if(q>r)s=": Not in inclusive range "+A.B(r)+".."+A.B(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.B(r)
return s}}
A.fj.prototype={
gb2(){return"RangeError"},
gb1(){if(A.G(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.hf.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.hc.prototype={
l(a){var s="UnimplementedError: "+this.a
return s}}
A.bt.prototype={
l(a){return"Bad state: "+this.a}}
A.f1.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fa(s)+"."}}
A.fK.prototype={
l(a){return"Out of Memory"},
gaA(){return null},
$iL:1}
A.e2.prototype={
l(a){return"Stack Overflow"},
gaA(){return null},
$iL:1}
A.f5.prototype={
l(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.hz.prototype={
l(a){return"Exception: "+this.a}}
A.j.prototype={
cZ(a,b,c){var s=A.E(this)
return A.mU(this,s.B(c).i("1(j.E)").a(b),s.i("j.E"),c)},
u(a,b){var s
A.E(this).i("~(j.E)").a(b)
for(s=this.gv(this);s.n();)b.$1(s.gp(s))},
gm(a){var s,r=this.gv(this)
for(s=0;r.n();)++s
return s},
t(a,b){var s,r,q
A.jY(b,"index")
for(s=this.gv(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.d(A.Q(b,this,"index",null,r))},
l(a){return A.mO(this,"(",")")}}
A.R.prototype={}
A.cT.prototype={
l(a){return"MapEntry("+A.B(this.a)+": "+A.B(this.b)+")"}}
A.X.prototype={
gA(a){return A.v.prototype.gA.call(this,this)},
l(a){return"null"}}
A.v.prototype={$iv:1,
E(a,b){return this===b},
gA(a){return A.cs(this)},
l(a){return"Instance of '"+A.jU(this)+"'"},
toString(){return this.l(this)}}
A.i3.prototype={
l(a){return""},
$ib2:1}
A.h2.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.q.prototype={}
A.ix.prototype={
gm(a){return a.length}}
A.eN.prototype={
l(a){return String(a)}}
A.eO.prototype={
l(a){return String(a)}}
A.eT.prototype={}
A.eU.prototype={
gbu(a){return new A.cx(a,"load",!1,t.bz)}}
A.c8.prototype={
sac(a,b){a.height=b},
sag(a,b){a.width=b},
dm(a,b){return a.getContext(b)},
$ic8:1}
A.b9.prototype={
gm(a){return a.length}}
A.iS.prototype={
gm(a){return a.length}}
A.I.prototype={$iI:1}
A.cM.prototype={
dP(a,b){var s=$.nV(),r=s[b]
if(typeof r=="string")return r
r=this.el(a,b)
s[b]=r
return r},
el(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.nX()+b
if(s in a)return s
return b},
gm(a){return a.length}}
A.iT.prototype={}
A.aY.prototype={}
A.bk.prototype={}
A.iU.prototype={
gm(a){return a.length}}
A.iV.prototype={
gm(a){return a.length}}
A.iW.prototype={
gm(a){return a.length},
h(a,b){return a[b]}}
A.bl.prototype={$ibl:1}
A.bM.prototype={
l(a){return String(a)},
$ibM:1}
A.dA.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.mx.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.dB.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.B(r)+", "
s=a.top
s.toString
return r+A.B(s)+") "+A.B(this.gag(a))+" x "+A.B(this.gac(a))},
E(a,b){var s,r
if(b==null)return!1
if(t.mx.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=J.lb(b)
s=this.gag(a)===s.gag(b)&&this.gac(a)===s.gac(b)}else s=!1}else s=!1}else s=!1
return s},
gA(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.fI(r,s,this.gag(a),this.gac(a))},
gcd(a){return a.height},
gac(a){var s=this.gcd(a)
s.toString
return s},
gct(a){return a.width},
gag(a){var s=this.gct(a)
s.toString
return s},
$ibc:1}
A.f8.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
A.ad(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.iX.prototype={
gm(a){return a.length}}
A.a5.prototype={
l(a){return a.localName},
gbu(a){return new A.cx(a,"load",!1,t.bz)},
$ia5:1}
A.k.prototype={$ik:1}
A.e.prototype={
ey(a,b,c,d){t.du.a(c)
if(c!=null)this.dL(a,b,c,!1)},
dL(a,b,c,d){return a.addEventListener(b,A.bg(t.du.a(c),1),!1)},
$ie:1}
A.az.prototype={$iaz:1}
A.fb.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.et.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.fc.prototype={
gm(a){return a.length}}
A.fe.prototype={
gm(a){return a.length}}
A.aA.prototype={$iaA:1}
A.jh.prototype={
gm(a){return a.length}}
A.cg.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.fh.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.dH.prototype={
eZ(a,b,c){return a.open(b,c)}}
A.ch.prototype={}
A.cQ.prototype={$icQ:1}
A.bo.prototype={$ibo:1}
A.jw.prototype={
l(a){return String(a)}}
A.cp.prototype={}
A.jB.prototype={
gm(a){return a.length}}
A.ft.prototype={
h(a,b){return A.c4(a.get(A.ad(b)))},
u(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c4(r.value[1]))}},
ga5(a){var s=A.c([],t.s)
this.u(a,new A.jJ(s))
return s},
gm(a){return a.size},
$iW:1}
A.jJ.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.fu.prototype={
h(a,b){return A.c4(a.get(A.ad(b)))},
u(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c4(r.value[1]))}},
ga5(a){var s=A.c([],t.s)
this.u(a,new A.jK(s))
return s},
gm(a){return a.size},
$iW:1}
A.jK.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.aC.prototype={$iaC:1}
A.fv.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.ib.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.aD.prototype={$iaD:1}
A.w.prototype={
l(a){var s=a.nodeValue
return s==null?this.dz(a):s},
$iw:1}
A.dU.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.fh.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.aE.prototype={
gm(a){return a.length},
$iaE:1}
A.fN.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.d8.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.fS.prototype={
h(a,b){return A.c4(a.get(A.ad(b)))},
u(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c4(r.value[1]))}},
ga5(a){var s=A.c([],t.s)
this.u(a,new A.k1(s))
return s},
gm(a){return a.size},
$iW:1}
A.k1.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.fU.prototype={
gm(a){return a.length}}
A.av.prototype={$iav:1}
A.fX.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.fm.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.aF.prototype={$iaF:1}
A.fY.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.cA.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.aG.prototype={
gm(a){return a.length},
$iaG:1}
A.h1.prototype={
h(a,b){return a.getItem(A.ad(b))},
u(a,b){var s,r,q
t.gS.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga5(a){var s=A.c([],t.s)
this.u(a,new A.k7(s))
return s},
gm(a){return a.length},
$iW:1}
A.k7.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:20}
A.ah.prototype={$iah:1}
A.aw.prototype={$iaw:1}
A.ab.prototype={$iab:1}
A.h6.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.gJ.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.h7.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.dQ.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.ke.prototype={
gm(a){return a.length}}
A.aH.prototype={$iaH:1}
A.h9.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.ki.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.kf.prototype={
gm(a){return a.length}}
A.be.prototype={}
A.ki.prototype={
l(a){return String(a)}}
A.d7.prototype={$id7:1}
A.hh.prototype={
gm(a){return a.length}}
A.d8.prototype={
d9(a,b){var s
t.hv.a(b)
this.dY(a)
s=A.nC(b,t.cZ)
s.toString
return this.ec(a,s)},
ec(a,b){return a.requestAnimationFrame(A.bg(t.hv.a(b),1))},
dY(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.hq.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.d5.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.ea.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.B(r)+", "
s=a.top
s.toString
s=r+A.B(s)+") "
r=a.width
r.toString
r=s+A.B(r)+" x "
s=a.height
s.toString
return r+A.B(s)},
E(a,b){var s,r
if(b==null)return!1
if(t.mx.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=J.lb(b)
if(s===r.gag(b)){s=a.height
s.toString
r=s===r.gac(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gA(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.fI(p,s,r,q)},
gcd(a){return a.height},
gac(a){var s=a.height
s.toString
return s},
gct(a){return a.width},
gag(a){var s=a.width
s.toString
return s}}
A.hD.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.ef.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.eg.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.fh.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.hY.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.hH.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.i4.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.lv.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.lT.prototype={}
A.eb.prototype={
bt(a,b,c,d){var s=A.E(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.hy(this.a,this.b,a,!1,s.c)}}
A.cx.prototype={}
A.ec.prototype={}
A.ky.prototype={
$1(a){return this.a.$1(t.U.a(a))},
$S:17}
A.r.prototype={
gv(a){return new A.dE(a,this.gm(a),A.b6(a).i("dE<r.E>"))}}
A.dE.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sce(J.mv(s.a,r))
s.c=r
return!0}s.sce(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
sce(a){this.d=this.$ti.i("1?").a(a)},
$iR:1}
A.hr.prototype={}
A.ht.prototype={}
A.hu.prototype={}
A.hv.prototype={}
A.hw.prototype={}
A.hA.prototype={}
A.hB.prototype={}
A.hE.prototype={}
A.hF.prototype={}
A.hK.prototype={}
A.hL.prototype={}
A.hM.prototype={}
A.hN.prototype={}
A.hO.prototype={}
A.hP.prototype={}
A.hS.prototype={}
A.hT.prototype={}
A.hV.prototype={}
A.em.prototype={}
A.en.prototype={}
A.hW.prototype={}
A.hX.prototype={}
A.hZ.prototype={}
A.i5.prototype={}
A.i6.prototype={}
A.es.prototype={}
A.et.prototype={}
A.i8.prototype={}
A.i9.prototype={}
A.ih.prototype={}
A.ii.prototype={}
A.ij.prototype={}
A.ik.prototype={}
A.il.prototype={}
A.im.prototype={}
A.io.prototype={}
A.ip.prototype={}
A.iq.prototype={}
A.ir.prototype={}
A.kp.prototype={
cL(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.k(r,a)
B.a.k(this.b,null)
return q},
bK(a){var s,r,q,p,o,n,m,l,k=this,j={}
if(a==null)return a
if(A.l0(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.V(A.cG("DateTime is outside valid range: "+s,null))
A.eE(!0,"isUtc",t.k4)
return new A.cd(s,!0)}if(a instanceof RegExp)throw A.d(A.m4("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.qZ(a,t.z)
if(A.nM(a)){q=k.cL(a)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=j.a=r[q]
if(p!=null)return p
o=t.z
p=A.aa(o,o)
j.a=p
B.a.j(r,q,p)
k.eM(a,new A.kr(j,k))
return j.a}if(a instanceof Array){n=a
q=k.cL(n)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p!=null)return p
o=J.ax(n)
m=o.gm(n)
p=k.c?new Array(m):n
B.a.j(r,q,p)
for(r=J.dk(p),l=0;l<m;++l)r.j(p,l,k.bK(o.h(n,l)))
return p}return a}}
A.kr.prototype={
$2(a,b){var s=this.a.a,r=this.b.bK(b)
J.mw(s,a,r)
return r},
$S:22}
A.kq.prototype={
eM(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.jP.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.lv.prototype={
$1(a){return this.a.a4(0,this.b.i("0/?").a(a))},
$S:8}
A.lw.prototype={
$1(a){if(a==null)return this.a.aK(new A.jP(a===undefined))
return this.a.aK(a)},
$S:8}
A.hG.prototype={
D(a){if(a<=0||a>4294967296)throw A.d(A.pf("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
F(){return Math.random()},
eU(){return Math.random()<0.5},
$imZ:1}
A.aQ.prototype={$iaQ:1}
A.fo.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.G(b)
t.kT.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.aT.prototype={$iaT:1}
A.fH.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.G(b)
t.ai.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.jT.prototype={
gm(a){return a.length}}
A.h3.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.G(b)
A.ad(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.n.prototype={
gbu(a){return new A.cx(a,"load",!1,t.bz)}}
A.aU.prototype={$iaU:1}
A.ha.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.G(b)
t.hk.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
t(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.hH.prototype={}
A.hI.prototype={}
A.hQ.prototype={}
A.hR.prototype={}
A.i1.prototype={}
A.i2.prototype={}
A.ia.prototype={}
A.ib.prototype={}
A.b7.prototype={
gm(a){return a.length},
$ib7:1}
A.dv.prototype={
seC(a,b){a.buffer=b}}
A.c7.prototype={
dU(a,b,c,d){t.p0.a(c)
t.lW.a(d)
return a.decodeAudioData(b,A.bg(c,1),A.bg(d,1))},
eF(a,b){var s=new A.K($.F,t.og),r=new A.aW(s,t.oJ)
this.dU(a,b,new A.iD(r),new A.iE(r))
return s},
$ic7:1}
A.iD.prototype={
$1(a){this.a.a4(0,t.bD.a(a))},
$S:23}
A.iE.prototype={
$1(a){this.a.aK(t.jW.a(a))},
$S:24}
A.H.prototype={
c5(a,b,c,d){return a.connect(b,c,d)},
$iH:1}
A.eP.prototype={
sfk(a,b){a.value=b}}
A.eQ.prototype={
h(a,b){return A.c4(a.get(A.ad(b)))},
u(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c4(r.value[1]))}},
ga5(a){var s=A.c([],t.s)
this.u(a,new A.iF(s))
return s},
gm(a){return a.size},
$iW:1}
A.iF.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.bj.prototype={}
A.eR.prototype={
gm(a){return a.length}}
A.dw.prototype={}
A.cP.prototype={}
A.fJ.prototype={
gm(a){return a.length}}
A.hp.prototype={}
A.eW.prototype={$ieW:1}
A.ff.prototype={$iff:1}
A.fO.prototype={$ifO:1}
A.d0.prototype={
cD(a,b){return a.bindVertexArray(b)},
cA(a,b,c){return a.bindBuffer(b,c)},
aw(a,b,c){return a.bindFramebuffer(b,c)},
U(a,b,c){return a.bindTexture(b,c)},
cG(a,b){return a.deleteTexture(b)},
bp(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ay(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.mc(g)){s.en(a,b,c,d,e,f,g,h,i,j)
return}if(t.hQ.b(g)&&h==null&&r&&j==null){s.eo(a,b,c,d,e,f,g)
return}if(t.jQ.b(g)&&h==null&&r&&j==null){s.ep(a,b,c,d,e,f,g)
return}if(t.eL.b(g)&&h==null&&r&&j==null){s.eq(a,b,c,d,e,f,g)
return}throw A.d(A.cG("Incorrect number or type of arguments",null))},
f9(a,b,c,d,e,f,g){return this.ay(a,b,c,d,e,f,g,null,null,null)},
en(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
eo(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ep(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
eq(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fd(a,b,c){return a.uniform1f(b,c)},
fe(a,b,c){return a.uniform1i(b,c)},
ff(a,b,c,d){return a.uniform2f(b,c,d)},
fg(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fh(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fj(a,b){return a.useProgram(b)},
$id0:1}
A.bv.prototype={$ibv:1}
A.hb.prototype={$ihb:1}
A.hg.prototype={$ihg:1}
A.bd.prototype={
gv(a){return new A.e3(this.a,0,0)},
gm(a){var s,r,q=this.a,p=q.length
if(p===0)return 0
s=new A.iL(q,p,0,176)
for(r=0;s.eV()>=0;)++r
return r},
E(a,b){if(b==null)return!1
return t.m1.b(b)&&this.a===b.a},
gA(a){return B.i.gA(this.a)},
l(a){return this.a},
$imI:1}
A.e3.prototype={
gp(a){var s=this,r=s.d
return r==null?s.d=B.i.bR(s.a,s.b,s.c):r},
n(){return this.bW(1,this.c)},
bW(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(a>0){s=j.c
for(r=j.a,q=r.length,p=176;s<q;s=n){o=B.i.bh(r,s)
n=s+1
if((o&64512)!==55296)m=A.nN(o)
else if(n<q){l=B.i.bh(r,n)
if((l&64512)===56320){++n
m=A.nI(o,l)}else m=2}else m=2
p=B.i.Z(u.o,(p&240|m)>>>0)
if((p&1)===0){--a
k=a===0}else k=!1
if(k){j.b=b
j.c=s
j.d=null
return!0}}j.b=b
j.c=q
j.d=null
return a===1&&p!==176}else{j.b=b
j.d=null
return!0}},
$iR:1}
A.iL.prototype={
eV(){var s,r,q,p,o,n,m,l=this,k=u.o
for(s=l.b,r=l.a;q=l.c,q<s;){p=l.c=q+1
o=B.i.Z(r,q)
if((o&64512)!==55296){p=B.i.Z(k,l.d&240|A.nN(o))
l.d=p
if((p&1)===0)return q
continue}if(p<s){n=B.i.Z(r,p)
if((n&64512)===56320){m=A.nI(o,n);++l.c}else m=2}else m=2
p=B.i.Z(k,(l.d&240|m)>>>0)
l.d=p
if((p&1)===0)return q}s=B.i.Z(k,l.d&240|15)
l.d=s
if((s&1)===0)return q
return-1}}
A.fi.prototype={
b0(a){var s=this.b
if(!(a>=0&&a<s.length))return A.b(s,a)
s=s[a]
return s==null?this.$ti.c.a(null):s},
k(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b);++o.d
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.bb(q,null,!1,n.i("1?"))
B.a.bM(p,0,o.c,o.b)
o.sbc(p)}o.aY(b,o.c++)},
gm(a){return this.c},
H(a,b){var s,r,q=this
q.$ti.c.a(b)
s=q.e4(b)
if(s<0)return!1;++q.d
r=q.ea()
if(s<q.c)if(q.a.$2(r,b)<=0)q.aY(r,s)
else q.bZ(r,s)
return!0},
er(){var s,r,q=this.$ti,p=A.c([],q.i("t<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
l(a){var s=this.b
return A.mO(A.na(s,0,A.eE(this.c,"count",t.S),A.U(s).c),"(",")")},
ai(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.bb(q,null,!1,n.i("1?"))
B.a.bM(p,0,o.c,o.b)
o.sbc(p)}o.aY(b,o.c++)},
e4(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.b0(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.a_(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
ea(){var s=this,r=s.c-1,q=s.b0(r)
B.a.j(s.b,r,null)
s.c=r
return q},
aY(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.d.T(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.Y()
if(q>0)break
B.a.j(o.b,b,p)}B.a.j(o.b,b,a)},
bZ(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.$ti.c
h.a(a)
s=b*2+2
for(r=i.a;q=i.c,s<q;b=k){p=s-1
q=i.b
o=q.length
if(!(p>=0&&p<o))return A.b(q,p)
n=q[p]
if(n==null)n=h.a(null)
if(!(s>=0&&s<o))return A.b(q,s)
m=q[s]
if(m==null)m=h.a(null)
if(r.$2(n,m)<0){l=n
k=p}else{l=m
k=s}if(r.$2(a,l)<=0){B.a.j(i.b,b,a)
return}B.a.j(i.b,b,l)
s=k*2+2}p=s-1
if(p<q){j=i.b0(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sbc(a){this.b=this.$ti.i("o<1?>").a(a)}}
A.kX.prototype={
gv(a){var s=this.a
return new A.cA(s,s.d,this.$ti.i("cA<1>"))}}
A.cA.prototype={
n(){var s,r=this,q=r.a
if(r.b!==q.d)throw A.d(A.aX(q))
s=r.d+1
if(0<=s&&s<q.c){q=q.b
if(!(s>=0&&s<q.length))return A.b(q,s)
r.scl(q[s])
r.d=s
return!0}r.scl(null)
r.d=-2
return!1},
gp(a){var s
if(this.d<0)s=A.V(A.ag("No element"))
else{s=this.c
if(s==null)s=this.$ti.c.a(null)}return s},
scl(a){this.c=this.$ti.i("1?").a(a)},
$iR:1}
A.h.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.h&&b.a===this.a},
gA(a){return B.d.gA(this.a)},
l(a){return"Color(0x"+B.i.d3(B.d.fb(this.a,16),8,"0")+")"}}
A.a4.prototype={
cO(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.d.az(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.d(A.ag(b.l(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.d.az(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.d(A.lU(b.l(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
a2(a,b,c){var s=B.d.az(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
G(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.d.az(d*s+c)
q=p.c
if(r>=q.length)throw A.d(A.lU("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
l(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.d.az(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.B(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.at.prototype={
R(a,b){t.mn.a(b)
return new A.at(this.a-b.a,this.b-b.b)},
C(a,b){return new A.at(this.a+b.a,this.b+b.b)},
E(a,b){if(b==null)return!1
return b instanceof A.at&&b.a===this.a&&b.b===this.b},
gA(a){return A.fI(this.a,this.b,B.C,B.C)},
l(a){return"Offset("+B.c.dd(this.a,1)+", "+B.c.dd(this.b,1)+")"}}
A.cF.prototype={
gI(a){return B.c.w(this.b.d/24)},
gJ(a){return B.c.w(this.b.e/36)},
q(){var s=this.b
return new A.i(B.c.w(s.d/24),B.c.w(s.e/36))},
$idG:1,
gbs(){return null}}
A.iw.prototype={}
A.iv.prototype={
eB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.b
c.eY()
s=t.c7
r=A.c([],s)
q=A.c([],s)
s=b.r2
p=s.e
s=s.d
if(!(s<p.length))return A.b(p,s)
o=p[s]
s=a.q()
s.toString
n=b.f.a1(s)
for(p=o.a,m=p.length,l=n.c,k=n.a,j=l.length,c=c.a,i=0;i<p.length;p.length===m||(0,A.A)(p),++i){h=p[i]
if(h.e)continue
g=h.q()
if(g==null)continue
f=g.aP(s)
e=g.b*k+g.a
if(!(e>=0&&e<j))return A.b(l,e)
if(l[e]<=0||h===a)continue
if(!A.nL(h,a))B.a.k(q,h)
else if(f<10.5){B.a.k(r,h)
e=h.q()
d=e.b*100+e.a
if(!(d>=0&&d<4000))return A.b(c,d)
B.ev.j(c,d,Math.max(c[d],20))}}c=this.a.a0(a,r,q,new A.ac(null,null),b).a
if(c==null)return new A.d2()
return c}}
A.ac.prototype={}
A.ap.prototype={}
A.bT.prototype={
a0(a,b,c,d,e){var s,r,q=null,p=t.k
p.a(b)
p.a(c)
t.O.a(e)
if(d.b!=null)return d
p=a.r
s=p==null
if((s?q:p.c)!=null)r=B.a.L(b,s?q:p.c)
else r=!1
if(r){if(s)p=q
else{p=p.c
p.toString}return new A.ac(q,p)}return d}}
A.bU.prototype={
a0(a,b,c,d,e){var s,r=t.k
r.a(b)
r.a(c)
t.O.a(e)
if(d.b!=null)return d
if(0<b.length){s=b[0]
r=a.r
if(r!=null)r.c=s
return new A.ac(null,s)}return d}}
A.cK.prototype={
a0(a,b,c,d,e){var s,r,q=t.k
q.a(b)
q.a(c)
t.O.a(e)
if(d.b!=null||c.length===0)return d
for(q=c.length,s=0;s<q;++s){r=c[s].r
if(r!=null&&r.c!=null){q=r.c
q.toString
return new A.ac(null,q)}}return d}}
A.bR.prototype={
a0(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=t.k
j.a(b)
j.a(c)
j=t.O.a(e).r2
s=j.e
j=j.d
if(!(j<s.length))return A.b(s,j)
r=s[j]
if(d.b!=null)return d
for(j=a.r.b.a,q=-1,p=0,o=0;o<4000;++o){n=j[o]
if(n>p){p=n
q=o}}if(q===-1)return d
j=B.d.dn(q,100)
s=B.d.T(q,100)
m=$.eG()
l=a.q()
l.toString
k=m.bn(l,new A.i(j,s),r)
if(k==null)return d
j=k.b.d
s=a.q()
s.toString
return new A.ac(new A.aS(j.R(0,s),a),null)}}
A.fQ.prototype={
a0(a,b,c,d,e){var s,r,q,p=t.k
p.a(b)
p.a(c)
t.O.a(e)
p=e.r2
s=p.e
p=p.d
if(!(p<s.length))return A.b(s,p)
r=s[p]
if(this.b){this.b=!1
return d}p=a.q()
p.toString
q=e.dx.a.bm(r,p,-1)
if(q==null)return d
this.b=!0
p=a.q()
p.toString
return new A.ac(new A.aS(q.R(0,p),a),null)}}
A.dY.prototype={
a0(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=t.k
c.a(b)
c.a(a0)
t.O.a(a2)
c=a2.r2
s=c.e
c=c.d
if(!(c<s.length))return A.b(s,c)
r=s[c]
c=a.c
if(c.b/c.a>0.3)return a1
c=e.a
if(c!=null){c=c.d
s=a.q()
s.toString
q=c.R(0,s)
e.a=e.a.b
return new A.ac(new A.aS(q,a),d)}c=a.q()
c.toString
s=a2.dx.a
p=s.bm(r,c,-1)
if(p==null){o=c.b*100+c.a
s=s.a
if(!(o>=0&&o<4000))return A.b(s,o)
n=s[o]
m=a2.f.a1(c)
for(c=m.c,l=m.a,k=c.length,j=d,i=1;i<100;++i)for(h=1;h<40;++h){o=h*100+i
if(!(o<4000))return A.b(s,o)
g=s[o]
f=h*l+i
if(!(f<k))return A.b(c,f)
if(c[f]>0&&g<n){j=new A.i(i,h)
n=g}}if(j!=null){c=$.eG()
s=a.q()
s.toString
e.a=c.bn(s,j,r)}return new A.ac(new A.d2(),d)}c=a.q()
c.toString
return new A.ac(new A.aS(p.R(0,c),a),d)}}
A.fR.prototype={
a0(a,b,c,d,e){var s,r,q,p,o,n,m=t.k
m.a(b)
m.a(c)
t.O.a(e)
m=e.r2
s=m.e
m=m.d
if(!(m<s.length))return A.b(s,m)
r=s[m]
for(m=c.length,s=this.a,q=0;q<c.length;c.length===m||(0,A.A)(c),++q){p=c[q].q()
p.toString
o=a.q()
o.toString
if(p.aP(o)<=s)return d}if(b.length===0)return d
m=a.q()
m.toString
n=e.dx.a.bm(r,m,-1)
if(n==null)return d
m=a.q()
m.toString
return new A.ac(new A.aS(n.R(0,m),a),null)}}
A.ld.prototype={
$1(a){t.lZ.a(a)
return a.c===B.aQ&&t.mm.a(a.b).a===this.a.Q.a},
$S:25}
A.bG.prototype={
a0(a,b,c,d,e){var s,r,q,p,o,n,m=t.k
m.a(b)
m.a(c)
m=t.O.a(e).r2
s=m.e
m=m.d
if(!(m<s.length))return A.b(s,m)
r=s[m]
if(d.a!=null||d.b==null)return d
m=d.b
m.toString
s=$.eG()
q=a.q()
q.toString
p=m.q()
p.toString
o=s.bn(q,p,r)
if(o==null)return d
s=a.c.x
n=s.gbx()
if(n!=null&&o.gcH()<=n.ch/5){q=s.b.h(0,B.r)
q.toString
if(q.e===0)if(A.qM(s,n))return new A.ac(new A.dX(a),m)
else{s=o.b.d
q=a.q()
q.toString
return new A.ac(new A.aS(s.R(0,q),a),m)}s=m.q()
s.toString
return new A.ac(new A.dW(s,a),m)}s=o.b.d
q=a.q()
q.toString
return new A.ac(new A.aS(s.R(0,q),a),m)}}
A.ba.prototype={
a0(a,b,c,d,e){var s,r,q,p,o=t.k
o.a(b)
o.a(c)
t.O.a(e)
for(o=this.a,s=o.length,r=d,q=0;q<o.length;o.length===s||(0,A.A)(o),++q,r=p){p=o[q].a0(a,b,c,r,e)
if(p.a!=null)return p}return r},
$iap:1}
A.bP.prototype={}
A.lF.prototype={
$0(){return new A.P(2,6,0,0,B.b3)},
$S:2}
A.lD.prototype={
$0(){return new A.ba(A.c([new A.bT(),new A.bU(),new A.dY(),new A.bG(),new A.bR()],t.a))},
$S:3}
A.lE.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lz.prototype={
$0(){return new A.P(2,4,0,0,B.D)},
$S:2}
A.lx.prototype={
$0(){return new A.ba(A.c([new A.bT(),new A.bU(),new A.dY(),new A.bG(),new A.bR()],t.a))},
$S:3}
A.ly.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lI.prototype={
$0(){return new A.P(10,7,0,0,B.D)},
$S:2}
A.lG.prototype={
$0(){return new A.ba(A.c([new A.bT(),new A.bU(),new A.cK(),new A.bG(),new A.bR()],t.a))},
$S:3}
A.lH.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lL.prototype={
$0(){return new A.P(10,7,0,0,B.b3)},
$S:2}
A.lJ.prototype={
$0(){return new A.ba(A.c([new A.bT(),new A.bU(),new A.cK(),new A.fQ(),new A.bG(),new A.bR()],t.a))},
$S:3}
A.lK.prototype={
$0(){var s=A.fk(B.P)
s.e=9
return A.c([s],t.I)},
$S:4}
A.l7.prototype={
$0(){return new A.P(3,7,0,0,B.ei)},
$S:2}
A.l5.prototype={
$0(){return new A.ba(A.c([new A.bT(),new A.bU(),new A.cK(),new A.fR(6),new A.bG(),new A.bR()],t.a))},
$S:3}
A.l6.prototype={
$0(){return A.c([A.fk(B.P)],t.I)},
$S:4}
A.iM.prototype={
de(a,b,c,d,e,f){var s,r=this,q=Math.min(Math.max(B.c.a8(c*24-f/2),0),B.d.a8(2400-f)),p=Math.min(Math.max(B.c.a8(d*36-e/2),0),B.d.a8(1476-e)),o=r.c9(Math.abs(q-r.a)),n=r.c9(Math.abs(p-r.b))
if(b){r.a=q
r.b=p
return}s=r.a
if(q>s)r.a=s+o
else if(q<s)r.a=s-o
s=r.b
if(p>s)r.b=s+n
else if(p<s)r.b=s-n},
c9(a){if(a>30)return 6
if(a>20)return 4
return 1}}
A.Z.prototype={
h(a,b){return this.b.h(0,A.E(this).i("Z.T").a(b))}}
A.co.prototype={}
A.cn.prototype={}
A.fg.prototype={
bq(a){return this.eO(t.E.a(a))},
eO(a){var s=0,r=A.bC(t.H),q,p=this,o
var $async$bq=A.bD(function(b,c){if(b===1)return A.by(c,r)
while(true)switch(s){case 0:o=p.e
if(o.length>3){s=1
break}B.a.k(o,a)
if(p.f){s=1
break}p.aD()
case 1:return A.bz(q,r)}})
return A.bA($async$bq,r)},
aD(){var s=0,r=A.bC(t.z),q=1,p,o=[],n=this,m
var $async$aD=A.bD(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.f=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.ak(n.aC(),$async$aD)
case 7:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
n.f=!1
s=o.pop()
break
case 4:return A.bz(null,r)
case 1:return A.by(p,r)}})
return A.bA($async$aD,r)},
cm(){var s=new A.K($.F,t.cU),r=new A.dd(s,t.iF)
B.a.k(this.a.c,t.x.a(t.nD.a(r.geE(r))))
return s},
S(){var s=0,r=A.bC(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$S=A.bD(function(a1,a2){if(a1===1)return A.by(a2,r)
while(true)$async$outer:switch(s){case 0:b=p.a
a=b.r2
a0=a.e
a=a.d
if(!(a<a0.length)){q=A.b(a0,a)
s=1
break}a=a0[a].a
o=A.c(a.slice(0),A.U(a))
a=p.b,a0=B.a.gex(a),n=t.nt,m=p.c,l=p.d,k=p.e,j=0,i=!1
case 4:if(!!0){s=5
break}case 6:if(!(h=a.length,h!==0)){s=7
break}if(0>=h){q=A.b(a,0)
s=1
break}s=8
return A.ak(a[0].ah(b),$async$S)
case 8:g=a2
B.a.a3(m,g.r)
case 9:if(!(h=g.a,h!=null)){s=10
break}B.a.j(a,0,h)
s=11
return A.ak(h.ah(b),$async$S)
case 11:g=a2
B.a.a3(m,g.r)
s=9
break
case 10:h=g.c
if(h!=null)A.mj(h)
f=g.x
s=f!=null?12:13
break
case 12:s=!g.f&&k.length===0?14:16
break
case 14:s=l.length!==0?17:18
break
case 17:s=19
return A.ak(p.ca(),$async$S)
case 19:case 18:s=20
return A.ak(p.au(f),$async$S)
case 20:s=15
break
case 16:B.a.k(l,f)
case 15:case 13:case 21:if(!(h=m.length,h!==0)){s=22
break}if(0>=h){q=A.b(m,-1)
s=1
break}s=23
return A.ak(m.pop().ah(b),$async$S)
case 23:e=a2
B.a.a3(m,e.r)
case 24:if(!(h=e.a,h!=null)){s=25
break}s=26
return A.ak(h.ah(b),$async$S)
case 26:e=a2
B.a.a3(m,e.r)
s=24
break
case 25:h=e.c
if(h!=null)A.mj(h)
s=21
break
case 22:if(g.d)i=B.dX.dq(i,!0)
B.a.d7(a,0)
s=6
break
case 7:if(!i){s=3
break}for(;h=o.length,j<h;){if(!(j>=0)){q=A.b(o,j)
s=1
break $async$outer}d=o[j];++j
if(d.q()==null)continue
if(A.qY(n.a(a0),d,b)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=l.length!==0?27:29
break
case 27:s=k.length===0?30:32
break
case 30:s=33
return A.ak(p.ca(),$async$S)
case 33:s=31
break
case 32:s=34
return A.ak(p.aH(),$async$S)
case 34:case 31:s=28
break
case 29:s=35
return A.ak(p.cm(),$async$S)
case 35:case 28:if(!i){s=1
break}for(b=o.length,c=0;c<b;++c)o[c].a=100
case 1:return A.bz(q,r)}})
return A.bA($async$S,r)},
aH(){var s=0,r=A.bC(t.H),q=this,p,o,n
var $async$aH=A.bD(function(a,b){if(a===1)return A.by(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.A)(p),++n)p[n].x.$0()
B.a.sm(p,0)
s=2
return A.ak(q.cm(),$async$aH)
case 2:return A.bz(null,r)}})
return A.bA($async$aH,r)},
au(a){var s=0,r=A.bC(t.H),q=this,p
var $async$au=A.bD(function(b,c){if(b===1)return A.by(c,r)
while(true)switch(s){case 0:p=new A.K($.F,t.cU)
if(a!=null)B.a.k(q.d,a)
B.a.k(q.a.c,t.x.a(new A.jc(q,new A.aW(p,t.ou))))
s=2
return A.ak(p,$async$au)
case 2:return A.bz(null,r)}})
return A.bA($async$au,r)},
ca(){return this.au(null)},
aC(){var s=0,r=A.bC(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$aC=A.bD(function(a,b){if(a===1)return A.by(b,r)
while(true)$async$outer:switch(s){case 0:e=p.e
if(e.length===0){s=1
break}e=B.a.d7(e,0).a
switch(e){case 23:if(p.z.f0())p.a.e.al("click_1.mp3",B.x)
o=null
break
case 24:if(p.z.eW())p.a.e.al("click_1.mp3",B.x)
o=null
break
case 1:case 2:case 3:case 4:switch(e){case 1:n=new A.i(0,-1)
break
case 2:n=new A.i(1,0)
break
case 3:n=new A.i(0,1)
break
case 4:n=new A.i(-1,0)
break
default:A.V(A.ag(""))
n=null}o=new A.aS(n,p.a.r2.a)
break
case 5:p.a.r2.toString
o=new A.d2()
break
case 21:e=p.a
if(p.Q==null){p.Q=A.jE(B.bm,B.a4,!1,["HP: "+e.r2.a.c.b+"/"+e.r2.a.c.a,"     ","STR: "+e.r2.a.c.y.a,"DEX: "+e.r2.a.c.y.b,"CON: "+e.r2.a.c.y.c,"INT: "+e.r2.a.c.y.d,"RES: "+e.r2.a.c.y.e,"CHA: "+e.r2.a.c.y.f],null,t.z)
e=e.gK()
m=p.Q
m.toString
B.a.k(e.d,m)}else{e=e.gK()
m=p.Q
m.toString
e.ar(m)
p.Q=null}o=null
break
case 6:e=p.a
l=e.d.b?e.gaT().c:null
if(l==null){o=null
break}o=new A.dW(l,e.r2.a)
break
case 0:if(p.ch){e=p.z
m=e.c
e=e.ch
if(!(e>=0&&e<m.length)){q=A.b(m,e)
s=1
break $async$outer}k=t.jC.a(m[e])
p.ch=!1
e=p.a
m=e.gK()
j=p.z
j.toString
m.ar(j)
o=k.b
p.z=null
e.cx.a=B.U}else{e=p.z
if(e!=null){m=e.c
e=e.ch
if(!(e>=0&&e<m.length)){q=A.b(m,e)
s=1
break $async$outer}k=A.ad(m[e])
if(k==="New Game"){e=p.a
e.r1=!0
m=$.eH()
j=t.t
i=t.ku
j=new A.iZ(new A.iG(B.m,new A.ji(B.m)),A.c([new A.as(B.a8,m.F()<=0.6,1),new A.as(B.A,m.F()<=0.4,2),new A.as(B.A,m.F()<=0.4,3),new A.as(B.A,m.F()<=0.4,4),new A.as(B.z,m.F()<=0.2,5),new A.as(B.z,m.F()<=0.2,6),new A.as(B.z,m.F()<=0.2,7),new A.as(B.B,m.F()<=0.1,8),new A.as(B.B,m.F()<=0.1,9),new A.as(B.B,m.F()<=0.1,10),new A.as(B.S,!1,11)],t.lR),A.c([2,4,4,4,6,6,6,10,10,10,12],j),A.c([A.b5(m,10,25),A.b5(m,115,125),A.b5(m,115,125),A.b5(m,115,125),A.b5(m,125,135),A.b5(m,125,135),A.b5(m,125,135),A.b5(m,135,145),A.b5(m,135,145),A.b5(m,135,145),A.b5(m,170,200)],j),A.c([A.c([],i),A.c([],i),A.c([],i),A.c([],i),A.c([],i),A.c([],i),A.c([],i),A.c([],i),A.c([],i),A.c([],i),A.c([],i)],t.fu),A.c([0,0,0,0,0,0,0,0,0,0,0],j),A.aa(t.ee,t.gN))
j.e1()
j.e_()
i=A.my()
m=A.c([],t.I)
h=A.p3(B.aq,t.b,t.R)
g=A.c([],t.d)
g=j.c6(A.lP(null,new A.ca(20,20,0,0,0,0,0,new A.cN(m,h),i,A.c([],t.Q),g,new A.cO("J")),0,null,!1,!0,new A.P(0,4,1,1,null)))
f=new A.c0(g.a(),g.$ti.i("c0<1>"))
f.n()
f.n()
g=new A.ko(f.gp(f),f)
e.rx=g
g=e.r2=A.c2(g,"worldWrapper").a
i=g.e
g=g.d
if(!(g<i.length)){q=A.b(i,g)
s=1
break $async$outer}g=A.la(i[g])
i=e.r2
h=i.e
i=i.d
if(!(i<h.length)){q=A.b(h,i)
s=1
break $async$outer}e.cQ(g,h[i])
i=e.r2
h=i.a
g=i.e
i=i.d
if(!(i<g.length)){q=A.b(g,i)
s=1
break $async$outer}e.cu(h,A.la(g[i]))
e.gK().sd4(e.r2.a.c)
i=e.y
g=e.r2
h=g.e
g=g.d
if(!(g<h.length)){q=A.b(h,g)
s=1
break $async$outer}g=i.b=h[g]
i.c=!0
i=e.z
i.c=g
i.b=!0
i=e.f
i.cW(g.c)
i.cR()
g=e.r2
h=g.e
g=g.d
if(!(g<h.length)){q=A.b(h,g)
s=1
break $async$outer}i.e=A.la(h[g])
g=e.gK()
h=p.z
h.toString
g.ar(h)
o=p.z=null
e.cx.a=B.U
break}if(k==="Quit"){e=p.a
m=e.gK()
j=p.z
j.toString
m.ar(j)
p.z=$.lO()
j=e.gK()
m=p.z
m.toString
B.a.k(j.d,m)
e.cx.a=B.F
e.r2=null
B.a.sm(e.ga6().x,0)
e.gX().aI(0)
m=e.y
m.b=null
m.c=!0
m=e.z
m.c=null
m.b=!0
m=e.f
B.O.ao(m.c,0,4000,0)
m.e=B.x
e.gK().sd4(null)
m=e.k2
e.r.de(0,!0,0,0,e.k3,m)
o=null
break}o=null
break}o=null}break
case 10:o=p.e2()
break
case 20:o=new A.dX(p.a.r2.a)
break
case 19:e=p.a.r2.a
m=p.y
m=m==null?null:m.b
j=m==null
if(j)m=new A.f7(new Uint8Array(4000),A.aa(t.j,t.S))
o=p.y=new A.eS(e,m,j)
break
case 8:e=p.a.d
m=!e.b
e.b=m
if(m){e=document.body.style
m=B.dv.dP(e,"cursor")
e.setProperty(m,"crosshair","")}else document.body.style.removeProperty("cursor")
o=null
break
case 9:if(p.z==$.lO()){o=null
break}e=p.a
m=e.d
if(m.b){m.b=!1
document.body.style.removeProperty("cursor")}if(p.z!=null){m=e.gK()
j=p.z
j.toString
m.ar(j)
p.z=null}p.ch=!1
e.cx.a=B.U
o=null
break
case 22:p.z=A.jE(B.a7,B.b4,!0,["New Game","Quit"],null,t.z)
e=p.a
m=e.gK()
j=p.z
j.toString
B.a.k(m.d,j)
e.cx.a=B.F
o=null
break
default:o=null
break}s=o!=null?3:4
break
case 3:B.a.k(p.b,o)
s=5
return A.ak(p.S(),$async$aC)
case 5:case 4:case 1:return A.bz(q,r)}})
return A.bA($async$aC,r)},
e2(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.c([],t.Y)
for(s=i.a,r=-1;r<2;++r)for(q=-1;q<2;++q){p=s.r2.a.q()
o=p.a+r
p=p.b+q
n=s.r2
m=n.e
n=n.d
if(!(n<m.length))return A.b(m,n)
n=m[n].c
if(!(o>=0&&p>=0&&o<n.a&&p<n.b))continue
l=n.h(0,new A.i(o,p))
if(l.f!=null){p=s.r2
o=p.e
p=p.d
if(!(p<o.length))return A.b(o,p)
B.a.a3(g,A.nK(l,o[p]))}}p=g.length
if(p===0)return h
if(p===1){if(0>=p)return A.b(g,0)
k=g[0]}else{o=[]
for(j=0;j<g.length;g.length===p||(0,A.A)(g),++j)o.push(g[j])
i.z=A.jE(B.a7,B.a4,!0,o,h,t.z)
i.ch=!0
s.cx.a=B.F
s=s.gK()
p=i.z
p.toString
B.a.k(s.d,p)
k=h}if(k==null)return h
return k.b},
e9(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.L.a(a)
for(s=h.d,r=s.length,q=a.a,p=h.e,o=0;o<s.length;s.length===r||(0,A.A)(s),++o){n=s[o]
if(p.length>=2)n.d=1
m=n.e
l=m==null?0:B.d.T(q-m.a,1000)
n.e=a
k=l/B.d.T(n.a.a,1000)
j=n.f
i=n.d
i=n.d=B.c.bg(j?n.d=i+k:n.d=i-k,-1,1)
i>=1||i<0
n.r.$1(n)}B.a.k(h.a.c,t.x.a(h.gcj()))}}
A.jc.prototype={
$1(a){var s,r,q,p,o,n,m
t.L.a(a)
s=A.c([],t.fy)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.A)(q),++n){m=q[n]
if(m.d>=1||o.length!==0){m.x.$0()
B.a.k(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.A)(s),++n)B.a.H(q,s[n])
if(q.length===0)this.b.aJ(0)
else B.a.k(r.a.c,t.x.a(this))},
$S:15}
A.e1.prototype={
l(a){return"SlotType."+this.b}}
A.bm.prototype={
l(a){return"ItemType."+this.b}}
A.eM.prototype={}
A.aP.prototype={
gbQ(){switch(this.c.a){case 0:return B.as
case 1:return B.at
case 2:return B.au
case 3:case 4:case 5:case 6:return null}}}
A.iR.prototype={}
A.a0.prototype={}
A.fh.prototype={
l(a){return"HandRequirement."+this.b}}
A.bK.prototype={
l(a){return"DamageType."+this.b}}
A.bL.prototype={
l(a){return"DiceType."+this.b}}
A.aV.prototype={
l(a){return"WeaponProperties."+this.b}}
A.jC.prototype={}
A.bJ.prototype={}
A.cc.prototype={
l(a){return"CriticalEffect."+this.b}}
A.a2.prototype={}
A.dp.prototype={
l(a){return"AmmoType."+this.b}}
A.dq.prototype={}
A.au.prototype={}
A.cH.prototype={
l(a){return"ArmorUpgradeType."+this.b}}
A.ao.prototype={}
A.eI.prototype={
aj(a){var s,r=a-10
if(r===0)return 0
else{s=r/2
if(r>0)return B.c.ab(s)
else return B.c.cE(s)}}}
A.ca.prototype={
d_(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x.gf1()
r=a.x.gbf()
q=A.dx(a0,1,B.aK)
p=b.y
o=p.a
n=q+p.aj(o)
m=a.y
l=10+Math.min(m.aj(m.b),r.e)
m=s.b
l=A.O(A.mK(m))?l+r.d:l+r.c
if(!a1)l-=2
k=t.Q
j=A.c([],k)
i=A.c([],k)
if(q===1){h=!1
g=!1}else{g=n>=l
if(q===20)h=!0
else{h=g
g=!1}}f="["+n+" vs "+A.B(l)+"]"
if(!h)return new A.cI(b.cx.a+" missed "+a.cx.a+" "+f,!1,0,B.a3,B.a3)
if(B.a.L(s.z,B.bh))B.a.k(j,new A.f2())
k=s.d
e=s.e
d=A.dx(a0,k,e)+p.aj(o)
if(g)d+=A.dx(a0,k,e)+p.aj(o)
B.a.L(b.ch,B.b9)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+s.y
return new A.cI(c,!0,d,j,i)},
d5(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x
r=s.gbx()
if(r==null)r=B.P
q=s.gbf()
s=b.y
p=Math.min(s.aj(s.b),q.e)
o=a.x.gbf()
n=A.dx(a0,1,B.aK)
m=n+p
l=a.y
k=10+Math.min(l.aj(l.b),o.e)
l=r.c
k=A.O(A.mK(l))?k+o.d:k+o.c
if(!a1)k-=2
j=t.Q
i=A.c([],j)
h=A.c([],j)
if(n===1){g=!1
f=!1}else{f=m>=k
if(n===20)g=!0
else{g=f
f=!1}}e="["+m+" vs "+A.B(k)+"]"
if(!g)return new A.cI(b.cx.a+" missed "+a.cx.a+" "+e,!1,0,B.a3,B.a3)
j=r.f
d=A.dx(a0,1,j)
if(f)d+=A.dx(a0,1,j)+s.aj(s.a)
B.a.L(b.ch,B.b9)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+r.a
return new A.cI(c,!0,d,i,h)}}
A.cI.prototype={}
A.cO.prototype={}
A.cN.prototype={
gbf(){var s,r,q
for(s=this.b,s=s.gak(s),s=s.gv(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a0)return q}return B.bE},
gf1(){var s,r,q
for(s=this.b,s=s.gak(s),s=s.gv(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a2)return q}return B.eo},
gbx(){var s,r,q
for(s=this.b,s=s.gak(s),s=s.gv(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.au)return q}return null},
eI(a,b){var s=this.b
s.h(0,b)
s.j(0,b,a)}}
A.fL.prototype={
l(a){return"Perk."+this.b}}
A.ce.prototype={
l(a){return"EquipmentSlot."+this.b}}
A.f2.prototype={}
A.d3.prototype={
l(a){return"TileType."+this.b}}
A.f0.prototype={
l(a){return"CollisionMode."+this.b}}
A.as.prototype={}
A.cu.prototype={
l(a){return"TerrainType."+this.b}}
A.ai.prototype={
l(a){return"TerrainWidget."+this.b}}
A.cl.prototype={
l(a){return"LockState."+this.b}}
A.b8.prototype={
l(a){return"Biome."+this.b}}
A.bV.prototype={
gI(a){return this.b.a},
gJ(a){return this.b.b},
sf8(a){t.dt.a(a)},
$idG:1,
gbs(){return this.z}}
A.fq.prototype={}
A.fr.prototype={$idG:1,
gbs(){return this.a},
gI(a){return this.b},
gJ(a){return this.c}}
A.i.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.i&&b.a===this.a&&b.b===this.b},
gA(a){return A.fI(this.a,this.b,B.C,B.C)},
C(a,b){return new A.i(this.a+b.a,this.b+b.b)},
R(a,b){return new A.i(this.a-b.a,this.b-b.b)},
bF(){return new A.at(this.a,this.b)},
aP(a){var s=Math.abs(this.a-a.a),r=Math.abs(this.b-a.b)
return s+r+-0.6000000000000001*Math.min(s,r)},
l(a){return"("+this.a+", "+this.b+")"}}
A.jv.prototype={
l(a){return"LiquidKind."+this.b}}
A.a1.prototype={
l(a){return"Interactable."+this.b}}
A.jy.prototype={}
A.jD.prototype={
eY(){var s,r
for(s=this.a,r=0;r<4000;++r)s[r]=s[r]-1}}
A.cU.prototype={
l(a){return"MonsterKind."+this.b}}
A.iY.prototype={
eu(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.a,i=j.a9(k,t.C),h=this.c
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.c.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.b||A.O(A.bN(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.d=r
j.af(b,k,i)},
M(a,b){var s=this
if(s.b){s.eu(0,a)
s.b=!1}if(s.c==null)return
s.a.a7(a,0,B.d.T(s.d,2),A.b_(["u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.j1.prototype={
M(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=t.t,p=t.n,o=t.g2,n=t.N,m=t.z,l=0;l<s.length;s.length===r||(0,A.A)(s),++l){k=s[l]
$.mp().a7(a,4,3,A.b_(["u_resolution",A.c([b.a,b.b],q),"u_time",k.gbl().geQ().fm(0,k.geH(k).geQ()),"u_offset",A.c([b.d,b.e],p),"u_origin",A.c([k.gI(k),k.gJ(k)],o)],n,m))
k.sbl(k.gbl().C(0,A.j0(11)))}r=A.U(s).i("D(1)").a(new A.j2())
if(!!s.fixed$length)A.V(A.C("removeWhere"))
B.a.eb(s,r,!0)}}
A.j2.prototype={
$1(a){t.ox.a(a)
return a.gbl().df(0,a.geH(a))},
$S:31}
A.j5.prototype={}
A.f9.prototype={
dF(a,b,c){var s,r,q,p=this
p.gX().a.W(p.a)
p.y.a.W(p.a)
p.z.a.W(p.a)
p.gbo().b.W(p.a)
s=p.ga6()
r=p.a
s.d=r.createFramebuffer()
s.a.W(r)
s.b.W(r)
q=p.cy
if(q===$){s=A.aO(A.c([new A.Y("a_position",35044,5126,2,new Float32Array(A.cB(B.y)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise(vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f * f * f + .6 * f * f + .5 * f) * color, 0.3);\n}\n",A.c([new A.x("u_resolution",B.f),new A.x("u_time",B.u),new A.x("u_offset",B.f),new A.x("u_player_vis_texture",B.l),new A.x("u_block_size",B.f)],t.o),u.h)
A.df(p.cy,"weather")
q=p.cy=new A.kk(s)}q.b.W(p.a)
p.gaT().b.W(p.a)
s=p.a
$.mp().W(s)
$.om().W(s)
p.fx.a.W(p.a)
p.gK().b.a.W(p.a)
s=p.cx.c
new A.bY(s,A.E(s).i("bY<1>")).cY(new A.j6(p,p.b.getBoundingClientRect()))},
gX(){var s,r=this,q=r.x
if(q===$){s=A.n6(r.a,r.f)
A.df(r.x,"sprites")
r.x=s
q=s}return q},
gbo(){var s,r=this,q=r.Q
if(q===$){s=A.pV()
s=A.aO(A.c([new A.Y("a_position",35044,5126,2,s),new A.Y("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.l,A.c([new A.x("u_resolution",B.f),new A.x("u_offset",B.f)],t.o),u.q)
A.df(r.Q,"fovRenderer")
q=r.Q=new A.j7(r.f,s,new A.i(-1,-1))}return q},
ga6(){var s,r,q,p=this,o=u.p,n="a_position",m="u_player_visible_texture",l=p.ch
if(l===$){s=t.G
r=t.o
q=A.aO(A.c([new A.Y(n,35044,5126,2,new Float32Array(A.cB(B.y)))],s),u.e,A.c([new A.x("u_source_position",B.f),new A.x("u_source_color",B.bf),new A.x("u_source_strength",B.u),new A.x("u_time",B.u),new A.x("u_visible_texture",B.l),new A.x(m,B.l)],r),o)
r=A.aO(A.c([new A.Y(n,35044,5126,2,new Float32Array(A.cB(B.y)))],s),u.A,A.c([new A.x("u_light_texture",B.l),new A.x("u_game_world_texture",B.l),new A.x(m,B.l),new A.x("u_resolution",B.f),new A.x("u_block_size",B.f),new A.x("u_offset",B.f)],r),o)
s=A.c([],t.ow)
A.df(p.ch,"lightingRenderer")
l=p.ch=new A.fs(q,r,p.f,s)}return l},
gaT(){var s,r=this,q=r.db
if(q===$){s=A.aO(A.c([new A.Y("a_position",35048,5126,2,new Float32Array(12))],t.G),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nuniform float u_time;\nuniform float u_visible;\n\nvoid main() {\n  if (u_visible == 0.0) {\n    discard;\n    return;\n  }\n  float scale = (sin(u_time * 3.0) + 1.0) / 4.0;\n  outColor = vec4(0.509, 0.69411, 1.0, scale + 0.3);\n}\n",A.c([new A.x("u_offset",B.f),new A.x("u_resolution",B.f),new A.x("u_time",B.u),new A.x("u_visible",B.u)],t.o),"#version 300 es\nin vec2 a_position;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n")
A.df(r.db,"selectionRenderer")
q=r.db=new A.k3(r.f,s,B.x)}return q},
gK(){var s,r,q,p,o,n=this,m=n.dy
if(m===$){s=n.a
r=t.ff
q=A.c([],r)
p=A.c([],t.c5)
o=A.c([],t.r)
r=A.c([],r)
s=A.n6(s,n.f)
A.df(n.dy,"textRenderer")
m=n.dy=new A.h5(s,q,p,new A.eV(o,r))}return m},
M(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=3553,b=6408,a=33071,a0=36160
d.a=a2
s=d.b
r=s.clientWidth
q=s.clientHeight
if(r!==d.k2||q!==d.k3){B.ab.sag(s,r)
B.ab.sac(s,q)
d.k2=r
d.k3=q
s=d.fy
if(s!=null)B.e.cG(a2,s)
s=d.go
if(s!=null)B.e.cG(a2,s)
d.fy=a2.createTexture()
d.go=a2.createTexture()
B.e.U(a2,c,d.fy)
B.e.ay(a2,c,0,b,d.k2,d.k3,0,b,5121,null)
a2.texParameteri(c,10241,9729)
a2.texParameteri(c,10242,a)
a2.texParameteri(c,10243,a)
B.e.U(a2,c,d.go)
B.e.ay(a2,c,0,b,d.k2,d.k3,0,b,5121,null)
a2.texParameteri(c,10241,9729)
a2.texParameteri(c,10242,a)
a2.texParameteri(c,10243,a)}s=d.r
p=d.f.e
s.de(0,d.r1,p.a,p.b,q,r)
p=d.ry
p.a=r
p.b=q
p.d=s.a
p.e=s.b
p.c=a1
a2.viewport(0,0,r,q)
a2.clearColor(0,0,0,1)
a2.clear(16640)
a2.enable(3042)
a2.blendFuncSeparate(770,771,1,771)
B.e.aw(a2,a0,d.id)
B.e.bp(a2,a0,36064,c,d.fy,0)
a2.clearColor(0,0,0,1)
a2.clear(16640)
d.y.M(a2,p)
d.z.M(a2,p)
d.gX().M(a2,p)
s=d.k1
B.e.aw(a2,a0,s)
B.e.bp(a2,a0,36064,c,d.go,0)
a2.viewport(0,0,r,q)
a2.clearColor(0,0,0,1)
d.ga6()
d.ga6().f=d.fy
d.ga6().y=s
d.ga6().M(a2,p)
s=d.gbo()
if(!s.a.e.E(0,s.c)||s.d)s.ew(a2)
o=t.t
n=t.n
m=t.N
l=t.z
s.b.a7(a2,4,48e3,A.b_(["u_resolution",A.c([p.a,p.b],o),"u_offset",A.c([p.d,p.e],n)],m,l))
d.fr.M(a2,p)
if(d.d.b){s=d.gaT()
s.e7(a2,p)
k=A.c([p.a,p.b],o)
n=A.c([p.d,p.e],n)
j=p.c
i=s.a
i=i.a1(i.e)
h=s.c
i=i.a2(0,h.a,h.b)?1:0
s.b.a7(a2,4,6,A.b_(["u_resolution",k,"u_offset",n,"u_time",j/1000,"u_visible",i],m,l))}B.e.aw(a2,a0,null)
s=d.fx
s.b=d.go
a2.activeTexture(33984)
B.e.U(a2,c,s.b)
s.a.a7(a2,4,3,A.b_(["u_resolution",A.c([p.a,p.b],o),"u_texture",0,"u_time",p.c/1000],m,l))
d.gK().M(a2,p)
a2.finish()
g=A.j0(B.c.w(a1))
l=d.c
f=A.c(l.slice(0),A.U(l))
B.a.sm(l,0)
for(s=f.length,e=0;e<f.length;f.length===s||(0,A.A)(f),++e)f[e].$1(g)
d.eX(p)
d.r1=!1},
eX(a){var s=this.r2
if(s==null)return
s=s.a.b
B.c.w(s.d/24)
B.c.w(s.e/36)},
bC(a){var s,r=this.r2,q=r.e
r=r.d
if(!(r<q.length))return A.b(q,r)
B.a.H(q[r].a,a)
s=a.b
s.sad(-1)
s.sae(-1)
this.gX().H(0,s)},
bS(a,b){var s=a.b,r=B.c.w(s.d/24),q=B.c.w(s.e/36),p=b.b,o=B.c.w(p.d/24),n=B.c.w(p.e/36)
s.sad(o)
s.sae(n)
p.sad(r)
p.sae(q)
if(a.x){s=this.f
s.e=new A.i(o,n)
s.bH()}if(b.x){s=this.f
s.e=new A.i(r,q)
s.bH()}},
d0(a,b){var s=a.b
s.sad(b.a)
s.sae(b.b)
if(a.x){s=this.f
s.e=b
s.bH()}},
cv(a,b,c){var s,r,q,p
if(c==null){s=this.r2
r=s.e
s=s.d
if(!(s<r.length))return A.b(r,s)
q=r[s]}else q=c
B.a.k(q.a,a)
p=a.b
p.sad(b.a)
p.sae(b.b)
p.san(0,B.v)
s=this.gX()
p.saM(0,1)
s.k(0,p)},
cu(a,b){return this.cv(a,b,null)},
cQ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
B.a.sm(g.ga6().x,0)
g.gX().aI(0)
s=g.y
s.b=b
s.c=!0
s=g.z
s.c=b
s.b=!0
s=g.f
r=b.c
s.cW(r)
s.cR()
B.O.ao(s.c,0,4000,0)
s.e=a
for(r=r.c,q=r.length,p=b.d,o=0;o<r.length;r.length===q||(0,A.A)(r),++o){n=r[o]
m=n.b
if(n.r!=null){l=new A.P(11,13,m.a*24,m.b*36,null)
l.x=B.b4
l.y=-1
k=l.a=g.gX()
j=k.c
j.$ti.c.a(l);++j.d
j.ai(0,l)
k.e=!0}l=A.mM(n.f,m.a*24,m.b*36,p)
if(l!=null){k=l.a=g.gX()
j=k.c
j.$ti.c.a(l);++j.d
j.ai(0,l)
k.e=!0
n.y=l}if(n.f===B.N){n.z=new A.fq(B.d7,7)
i=g.ch
if(i===$){h=A.p2(s)
A.df(i,"lightingRenderer")
g.ch=h
i=h}B.a.k(i.x,n)}}for(s=b.a,r=s.length,o=0;o<s.length;s.length===r||(0,A.A)(s),++o){l=s[o].b
l.r=B.v
q=l.a
if(q!=null)q.e=!0
q=g.gX()
l.y=1
p=l.a
if(p!=null)p.e=!0
l.a=q
p=q.c
p.$ti.c.a(l);++p.d
p.ai(0,l)
q.e=!0}}}
A.j6.prototype={
$1(a){var s,r,q
t.bd.a(a)
s=this.a.ry
r=J.ax(a)
s.seT(r.h(a,0))
r=r.h(a,1)
q=this.b
q.left.toString
q=q.top
q.toString
if(typeof r!=="number")return r.R()
s.r=r-q},
$S:65}
A.a6.prototype={
ah(a){return this.dr(a)},
dr(a){var s=0,r=A.bC(t.fq),q,p=2,o,n=[],m=this,l,k,j,i
var $async$ah=A.bD(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.ak(m.V(0,a),$async$ah)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
l=A.bh(i)
A.it("ERROR: "+A.B(l))
q=new A.J(null,null,!1,!0,!1,B.h,null)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.bz(q,r)
case 2:return A.by(o,r)}})
return A.bA($async$ah,r)}}
A.bH.prototype={}
A.J.prototype={}
A.fD.prototype={
V(a,b){var s,r,q,p,o=b.r2.a
A.c2(b.rx,"worldWrapper").b.n()
s=b.r2
r=s.e
s=s.d+1
if(!(s<r.length))return A.b(r,s)
q=r[s]
p=A.la(q)
b.cQ(p,q)
b.cv(o,p,q);++b.r2.d
b.r1=!0
return new A.J(null,null,!0,!0,!1,B.h,null)}}
A.dX.prototype={
V(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.c.x,g=h.gbx(),f=h.b.h(0,B.r)
if(g==null||f.e===g.Q.b)return new A.J(j,j,!1,!0,!1,B.h,j)
q=h.a
p=q.length
o=t.mm
n=0
while(!0){if(!(n<p)){s=j
r=s
break}m=q[n]
if(m.c===B.aQ){l=o.a(m.b)
if(l.a===g.Q.a){s=m
r=l
break}}++n}if(r==null)return new A.J(j,j,!1,!0,!1,B.h,j)
i=i.q()
i.toString
b.e.al("reload_1.mp3",i)
i=r.b
k=Math.min(i,g.Q.b)
i-=k
r.b=i
if(i===0)B.a.H(q,s)
i=f.e
i.toString
f.e=k+i
return new A.J(j,j,!0,!0,!1,B.h,j)}}
A.aS.prototype={
V(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e={},d=b.r2,c=d.e
d=d.d
if(!(d<c.length))return A.b(c,d)
s=c[d]
d=g.b
r=d.q()
q=r.C(0,g.a)
p=s.c
if(!p.cO(q))return new A.J(f,f,!1,!0,!1,B.h,f)
o=p.h(0,q)
n=s.am(q)
if((o.c===B.b||A.O(A.bN(o.f)))&&n==null){if(o.f==null)return new A.J(f,f,!1,!0,!1,B.h,f)
e=b.r2
d=e.e
e=e.d
if(!(e<d.length))return A.b(d,e)
m=A.nK(o,d[e])
if(m.length!==0)return new A.J(B.a.gdv(m).b,f,!1,!0,!1,B.h,f)
return new A.J(f,f,!1,!0,!1,B.h,f)}l=A.c([],t.w)
e.a=!1
if(n!=null){if(A.nL(n,d))return new A.J(new A.du(!1,d,n),f,!1,!0,!1,B.h,f)
c=e.a=!0}else c=!1
k=b.f
k=k.a1(k.e)
k.toString
j=!d.x
if(j)i=k.h(0,r)||k.h(0,q)
else i=!1
p.h(0,r)
if(o.r!=null)b.e.bw("water_footsteps_"+(B.m.D(5)+1)+".mp3",q,0.15)
if(i)h=new A.bH(A.j0(60),new A.jL(g,r,q),new A.jM(e,g,b,n,q))
else{if(c){n.toString
b.bS(n,d)}else b.d0(d,q)
h=f}d.a=0
return new A.J(f,f,!0,!0,j,l,h)}}
A.jL.prototype={
$1(a){var s=a.d,r=1-s,q=this.b,p=this.c,o=this.a.b.b
o.sI(0,q.a*24*r+p.a*24*s)
o.sJ(0,q.b*36*r+p.b*36*s)},
$S:10}
A.jM.prototype={
$0(){var s,r=this,q=r.c,p=r.b.b
if(r.a.a){s=r.d
s.toString
q.bS(s,p)}else q.d0(p,r.e)},
$S:0}
A.d2.prototype={
V(a,b){return new A.J(null,null,!0,!0,!1,B.h,null)}}
A.fp.prototype={
V(a,b){var s=this.a.c
s.d-=1000;++s.c;++s.e;++s.f;++s.r
A.it("LEVEL UP")
return new A.J(null,null,!0,!0,!1,B.h,null)}}
A.e5.prototype={
V(a,b){var s,r,q,p,o,n,m=b.r2,l=m.e
m=m.d
if(!(m<l.length))return A.b(l,m)
s=this.b
r=l[m].c.h(0,s)
q=r.y
r.f=this.a?B.w:B.K
m=b.gX()
q.toString
m.H(0,q)
m=r.f
m.toString
l=r.b
p=b.r2
o=p.e
p=p.d
if(!(p<o.length))return A.b(o,p)
n=A.mM(m,24*l.a,36*l.b,o[p].d)
if(n!=null)b.gX().k(0,n)
r.y=n
m=b.r2
l=m.e
m=m.d
if(!(m<l.length))return A.b(l,m)
b.f.cX(l[m].c,s)
b.gbo().d=!0
b.e.bw("door_1.mp3",s,0.8)
return new A.J(null,null,!0,!0,!1,B.h,null)}}
A.du.prototype={
V(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c={},b=d.b
b.a=0
c.a=null
s=d.c
r=A.qR(s,b,a0)
q=d.a
p=b.c
o=s.c
if(q){p.toString
o.toString
n=c.a=p.d5(o,B.m,r)}else{p.toString
o.toString
n=c.a=p.d_(o,B.m,r)}B.a.a3(p.Q,n.d)
B.a.a3(o.Q,n.e)
m=A.c([],t.w)
p=s.q()
p.toString
l=b.q()
l.toString
if(!q){q=b.b
k=q.y
j=s.b.r
q.saM(0,4)
i=l.bF()
h=p.bF()
q=l.bF()
g=h.R(0,i)
f=q.C(0,new A.at(g.a/1.5,g.b/1.5))
c.b=!0
e=new A.bH(B.dC,new A.iB(c,d,a0,p,l,i,f),new A.iC(c,d,a0,p,l,k,j))}else{q=b.x?B.ae:B.D
d.aV(n.c,p,l,a0,q)
e=null}q=s.r
if(q!=null)q.c=b
if(!n.b)return new A.J(null,n.a,!0,!0,!1,B.h,e)
b=o.b-n.c
o.b=b
if(b<=0)B.a.k(m,new A.dz(s))
return new A.J(null,c.a.a,!0,!0,!1,m,e)},
cc(a){if(this.a){if(a)return"bullet_impact_2.mp3"
return"bullet_miss_1.mp3"}if(a)return"heavy_punch_1.mp3"
return"miss_1.mp3"},
aV(a,b,c,d,e){var s,r,q={},p=c.a*24,o=c.b*36,n=new A.b0(B.d.l(a),e,1.25,p,o),m=b.a*24,l=b.b*36,k=A.oL(new A.at(m-p,l-o)),j=k.a*24
k=k.b*36
s=new A.at(j,k).C(0,new A.at(p,o))
r=new A.at(j*2,k*2).C(0,new A.at(m,l))
d.gK().av(n)
q.a=B.dB
A.pl(B.dD,new A.iA(q,d,n,r,s))},
l(a){return"TargetMeleeAttackEvent{"+this.b.l(0)+" -> "+this.c.l(0)+"}"}}
A.iB.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a
if(l.b&&a.d>=0.4){s=m.c
r=m.b
q=m.d
s.e.al(r.cc(l.a.b),q)
p=l.a
o=r.b.x?B.ae:B.D
r.aV(p.c,q,m.e,s,o)
l.b=!1
s=r.c.b
if(l.a.b)s.san(0,B.D)
else s.san(0,B.c2)}l=a.d
if(l<=0.4){s=m.f
r=m.r
n=l/0.6
l=m.b.b.b
l.sI(0,A.nT(r.a,s.a,n)*24)
l.sJ(0,A.nT(r.b,s.b,n)*36)}else{s=m.b.b
if(l>=0.6){l=s.b
s=m.e
l.sad(s.a)
l.sae(s.b)}else{l=s.b
s=m.r
l.sI(0,s.a*24)
l.sJ(0,s.b*36)}}},
$S:10}
A.iC.prototype={
$0(){var s,r,q,p,o,n=this,m=n.a
if(m.b){s=n.c
r=n.b
q=n.d
s.e.al(r.cc(m.a.b),q)
p=m.a
o=r.b.x?B.ae:B.D
r.aV(p.c,q,n.e,s,o)
m.b=!1}m=n.b
s=m.b.b
s.saM(0,n.f)
r=n.e
s.sad(r.a)
s.sae(r.b)
m.c.b.san(0,n.r)},
$S:0}
A.iA.prototype={
$1(a){var s,r,q,p,o,n=this
t.hU.a(a)
s=n.a
r=s.a.a+8000
s.a=new A.af(r)
if(r>5e5){a.eD(0)
n.b.gK().bD(n.c)}q=B.d.T(s.a.a,1000)/300
s=n.c
r=n.d
p=1-q
o=n.e
s.sI(0,q*r.a+p*o.a)
s.sJ(0,q*r.b+p*o.b)},
$S:34}
A.dz.prototype={
l(a){return"DeathEvent{"+this.a.l(0)+"}"},
V(a,b){var s,r=null,q=b.r2,p=q.e,o=q.d
if(!(o<p.length))return A.b(p,o)
p=this.a
if(p.e){b.bC(p)
return new A.J(r,r,!0,!0,!1,B.h,r)}if(p.x)return new A.J(r,"You Died!",!0,!0,!1,B.h,r)
q.a.c.d+=100
s=A.c([],t.w)
q=b.r2.a
if(q.c.d>=1000)B.a.k(s,new A.fp(q))
p.q()
p.c.toString
b.bC(p)
return new A.J(r,p.l(0)+" has died.",!1,!0,!1,s,r)}}
A.eS.prototype={
V(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=b.r2,d=e.e
e=e.d
if(!(e<d.length))return A.b(d,e)
s=d[e]
if($.mC!==s){$.mC=s
e=g.b
B.O.ao(e.a,0,4000,0)
e.b.aI(0)}for(e=b.f.c,d=g.c,r=!d,q=g.b,p=q.b,o=s.c,n=0;n<100;++n)for(m=0;m<40;++m){l=100*m+n
k=new A.i(n,m)
if(!(l<4000))return A.b(e,l)
j=e[l]
if(j===0&&d)if(o.h(0,k).f===B.w)p.j(0,k,100)
else{i=o.h(0,k)
if(!(i.c===B.b||A.O(A.bN(i.f))))p.j(0,k,80)}else if(j===1&&r)p.H(0,k)}q.f2(s,B.ac)
e=g.a
d=e.q()
d.toString
k=q.cJ(s,d,1,B.ac)
if(k==null)return new A.J(f,"No more areas to explore",!1,!0,!1,B.h,f)
d=$.eG()
r=e.q()
r.toString
r=d.cK(r,k,s,B.ac)
h=r==null?f:r.b
if(h==null)return new A.J(f,"No path to that location",!1,!0,!1,B.h,f)
d=h.d
r=e.q()
r.toString
return new A.J(new A.aS(d.R(0,r),e),f,!0,!0,!1,B.h,f)}}
A.he.prototype={
V(a,b){var s,r,q,p,o,n,m=null,l=b.r2,k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
s=k[l]
r=A.c([],t.q)
for(l=s.c.c,k=l.length,q=!1,p=0;p<l.length;l.length===k||(0,A.A)(l),++p){o=l[p]
if(o.f===B.L){o.f=B.w
B.a.k(r,o.b)
q=!0}}if(q){for(l=r.length,k=b.e,p=0;p<r.length;r.length===l||(0,A.A)(r),++p)k.al("door_unlock_1.mp3",r[p])
l=b.r2
k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
n=this.a
k[l].c.h(0,n).f=B.Y
l=b.r2
k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
k[l].am(n)
return new A.J(m,"A door has been unlocked",!0,!0,!1,B.h,m)}return new A.J(m,m,!1,!0,!1,B.h,m)}}
A.dW.prototype={
V(a,b){var s,r=null,q=this.b,p=q.c.x.b.h(0,B.r)
if(p==null||p.e===0)return new A.J(r,r,!1,!0,!1,B.h,r)
s=p.e
s.toString
p.e=s-1
return new A.J(new A.fP(this.a,q),r,!0,!0,!1,B.h,r)}}
A.fP.prototype={
V(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null,g=b.r2,f=g.e
g=g.d
if(!(g<f.length))return A.b(f,g)
s=f[g]
g=this.c
f=g.q()
f.toString
r=this.b
q=$.eG().eJ(f,r,s)
if(q==null)return new A.J(h,"Cant reach target",!1,!0,!1,B.h,h)
p=s.am(r)
o=A.c([],t.w)
if(p!=null)o.push(new A.du(!0,g,p))
n=q.fa(0)
m=b.e.al("pistol_1.mp3",f)
g=g.b
f=B.c.w(g.d/24)
g=B.c.w(g.e/36)
l=B.eg.h(0,t.gX.i("Z.T").a(700))
l.toString
k=new A.fr(new A.fq(l,10),f,g)
B.a.k(b.ga6().x,k)
g=B.b_.h(0,t.e.i("Z.T").a(800))
g.toString
j=new A.P(14,2,-1,-1,h)
j.scF(0,g)
i=A.lP(h,h,0,h,!0,!1,j)
b.cu(i,B.x)
j.san(0,new A.h(0))
return new A.J(h,h,!0,!0,!1,o,new A.bH(A.j0(16*n.length),new A.jV(n,j,m,k),new A.jW(b,i,k)))}}
A.jV.prototype={
$1(a){var s,r,q=this.a,p=B.c.ab(a.d*(q.length-1))
if(!(p>=0&&p<q.length))return A.b(q,p)
s=q[p]
p=this.b
q=s.a
p.sad(q)
r=s.b
p.sae(r)
B.d.w(q)
B.d.w(r)
this.d.a.c=10*(1-a.d)},
$S:10}
A.jW.prototype={
$0(){var s=this.a
s.bC(this.b)
B.a.H(s.ga6().x,this.c)},
$S:0}
A.j9.prototype={}
A.j8.prototype={
dT(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.e.U(b,f,c)
s=A.mW(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
r=this.a1(a)
for(q=s.length,p=r.c,o=r.a,n=p.length,m=0;m<40;++m)for(l=m*100,k=m*o,j=0;j<100;++j){i=(l+j)*4
h=k+j
if(!(h<n))return A.b(p,h)
g=p[h]>0?0:255
if(!(i<q))return A.b(s,i)
s[i]=0
h=i+1
if(!(h<q))return A.b(s,h)
s[h]=0
h=i+2
if(!(h<q))return A.b(s,h)
s[h]=0
h=i+3
if(!(h<q))return A.b(s,h)
s[h]=g}B.e.ay(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
aR(a,b){var s,r,q=a.b*100+a.a
if(q<0||q>=4000)return null
s=this.f
r=s.h(0,a)
if(r==null){r=new A.i7(b.createTexture())
s.j(0,a,r)}if(r.b){this.dT(a,b,r.a)
r.b=!1}return r.a},
a1(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.jZ(p,p+4000,B.d.bT(s.byteLength,r))
return new A.kj(100,A.mW(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
bH(){var s,r,q,p,o=this.a1(this.e).c
for(s=o.length,r=this.c,q=0;q<4000;++q){p=r[q]
if(!(q<s))return A.b(o,q)
r[q]=p|(o[q]>0?1:0)}},
cR(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.b5(new A.i(s,r))
for(q=this.f,q=q.gbI(q),q=q.gv(q);q.n();)q.gp(q).b=!0},
cX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.h.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.a2(0,r,q)
o=o.c===B.b||A.O(A.oX(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.b5(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]>0)g.b5(new A.i(m,l))}s=g.a1(b)
s.toString
for(p=g.f,p=p.gak(p),p=p.gv(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]>0)i.b.b=!0}},
cW(a){return this.cX(a,null)},
b5(a){var s,r,q,p=this.a1(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=15
for(q=0;q<4;++q)this.ee(new A.d1(1,-1,1),new A.jX(B.ea[q],a),o)},
ed(a,b,c){var s,r
if(a<0||a>=b.byteLength)return
s=b.length
if(this.b7(a,b)){if(!(a>=0&&a<s))return A.b(b,a)
s=b[a]
r=c.a
if(!(r<4))return A.b(B.aR,r)
b[a]=s|B.aR[r]}else{if(!(a>=0&&a<s))return A.b(b,a)
b[a]=15}},
b7(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
b6(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===0},
ee(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.r
B.a.sm(d,0)
B.a.k(d,a)
for(s=b.a;r=d.length,r!==0;){if(0>=r)return A.b(d,-1)
q=d.pop()
r=q.a
p=B.c.ab(r*q.b+0.5)
o=B.c.cE(r*q.c-0.5)
for(n=r+1,m=2*r,l=p,k=null;l<=o;++l,k=i){j=b.fc(0,new A.i(r,l))
i=j.b*100+j.a
h=e.b7(i,c)
if(!h)g=l>=r*q.b&&l<=r*q.c
else g=!0
if(g)e.ed(i,c,s)
g=k!=null
if(g&&e.b7(k,c)&&e.b6(i,c))q.b=(2*l-1)/m
if(g&&e.b6(k,c)&&h){f=new A.d1(n,q.b,q.c)
f.c=(2*l-1)/m
B.a.k(d,f)}}if(k!=null&&e.b6(k,c))B.a.k(d,new A.d1(n,q.b,q.c))}}}
A.i7.prototype={}
A.kj.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0},
a2(a,b,c){var s=this.c,r=c*this.a+b
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0}}
A.c9.prototype={
l(a){return"Cardinal."+this.b}}
A.jX.prototype={
fc(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a.a){case 0:s=r.b
return new A.i(s.a+p,s.b-q)
case 1:s=r.b
return new A.i(s.a+p,s.b+q)
case 2:s=r.b
return new A.i(s.a+q,s.b+p)
case 3:s=r.b
return new A.i(s.a-q,s.b+p)}}}
A.d1.prototype={}
A.bO.prototype={
l(a){return this.a}}
A.fs.prototype={
M(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=3553,a="u_player_visible_texture"
if(c.e==null){s=a0.createTexture()
c.e=s
B.e.U(a0,b,s)
B.e.ay(a0,b,0,6408,100,40,0,6408,5121,null)
a0.texParameteri(b,10241,9729)
a0.texParameteri(b,10242,33071)
a0.texParameteri(b,10243,33071)}B.e.aw(a0,36160,c.d)
B.e.bp(a0,36160,36064,b,c.e,0)
a0.clearColor(0,0,0,1)
a0.clear(16640)
a0.viewport(0,0,100,40)
s=c.c
r=s.aR(s.e,a0)
r.toString
a0.activeTexture(33985)
B.e.U(a0,b,r)
for(q=c.x,p=q.length,o=c.a,n=t.t,m=t.n,l=t.N,k=t.z,j=0;j<q.length;q.length===p||(0,A.A)(q),++j){i=q[j]
h=i.gbs()
g=s.aR(new A.i(i.gI(i),i.gJ(i)),a0)
if(g==null)continue
a0.activeTexture(33984)
B.e.U(a0,b,g)
f=h.c
e=A.c([i.gI(i),i.gJ(i)],n)
d=h.b.a
o.a7(a0,4,3,A.b_(["u_source_strength",f,"u_source_position",e,"u_source_color",A.c([(d>>>16&255)/255,(d>>>8&255)/255,(d&255)/255,0.2],m),"u_time",a1.c/1000,a,1,"u_visible_texture",0],l,k))}B.e.aw(a0,36160,c.y)
a0.viewport(0,0,a1.a,a1.b)
a0.activeTexture(33984)
B.e.U(a0,b,c.e)
a0.activeTexture(33985)
B.e.U(a0,b,c.f)
a0.activeTexture(33986)
B.e.U(a0,b,r)
c.b.a7(a0,4,3,A.b_(["u_light_texture",0,"u_game_world_texture",1,a,2,"u_block_size",B.e0,"u_resolution",A.c([a1.a,a1.b],n),"u_offset",A.c([a1.d,a1.e],m)],l,k))}}
A.br.prototype={
gcH(){var s=this.b
s=s==null?null:s.gcH()
return 1+(s==null?0:s)},
O(a,b){return B.c.O(this.f,t.p6.a(b).f)},
gcn(){var s,r=this.a
if(r==null)r=this
else{s=r.a
r=s==null?r:s.gcn()}return r},
dZ(){var s,r,q
for(s=this,r=null;s!=null;r=s,s=q){s.b=r
q=s.a}},
fa(a){var s,r=A.c([],t.q)
for(s=this;s!=null;){B.a.k(r,s.d)
s=s.b}return r},
l(a){var s,r,q,p
for(s=this.d,r=this,q="",p="";r!=null;q=", "){p=p+q+s.l(0)
r=r.b}return p.charCodeAt(0)==0?p:p},
$iae:1}
A.aZ.prototype={
l(a){return"Directions."+this.b}}
A.jR.prototype={
eJ(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.a,e=a1.a,d=a0.b,c=a1.b,b=Math.max(Math.abs(f-e),Math.abs(d-c)),a=new A.br(a0,0,b*1.02+0)
for(s=(b-1)*1.02+1,r=a2.c,q=t.W,p=r.a,o=r.b,n=a0,m=a,l=1;l<=b;++l,n=h,m=g){k=l/b
j=1-k
i=B.c.w(e*k+f*j)
j=B.c.w(c*k+d*j)
h=new A.i(i,j)
if(!(i>=0&&j>=0&&i<p&&j<o))return null
if(A.l8(q.a(r.h(0,h)),a2,B.ad)&&l!==b)return null
A.qG(i-n.a,j-n.b)
g=new A.br(h,1,s)
g.a=m
m.b=g}return a},
cK(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=A.mL(b,t.p6),a0=A.aa(t.j,t.i),a1=a4.c
a.k(0,new A.br(a2,0,a2.aP(a3)*1.02+0))
for(s=a.$ti.c,r=a1.a,q=a1.b,p=t.W;o=a.c,n=o===0,!n;){if(n)A.V(A.ag("No element"));++a.d
n=a.b
m=n.length
if(0>=m)return A.b(n,0)
l=n[0]
if(l==null)l=s.a(null)
k=o-1
if(!(k>=0&&k<m))return A.b(n,k)
j=n[k]
if(j==null)j=s.a(null)
B.a.j(n,k,b)
a.c=k
if(k>0)a.bZ(j,0)
o=l.d
i=a0.h(0,o)
if(i!=null&&i<l.e)continue
for(n=l.e,h=0;h<8;++h){g=B.ao[h]
f=A.a8(o,g)
m=f.a
if(m>=0){e=f.b
m=e>=0&&m<r&&e<q}else m=!1
if(m){m=l.a
if(!J.a_(m==null?b:m.d,f))m=A.l8(p.a(a1.h(0,f)),a4,a5)&&!f.E(0,a3)
else m=!0}else m=!0
if(m)continue
m=f.aP(a3)
e=this.e6(g)
if(typeof e!=="number")return A.cD(e)
e=n+e
d=new A.br(f,e,m*1.02+e)
d.a=l
if(f.E(0,a3)){d.dZ()
s=l.a
return s==null?l:s.gcn()}c=a0.h(0,f)
if(!(e>1/0))m=c!=null&&e>=c
else m=!0
if(m)continue
a0.j(0,f,e)
s.a(d);++a.d
a.ai(0,d)}}return b},
bn(a,b,c){return this.cK(a,b,c,B.ad)},
e6(a){switch(a.a){case 4:case 7:case 5:case 6:return 1
case 1:case 0:case 2:case 3:return 1.4}}}
A.f7.prototype={
cJ(a,b,c,d){var s,r,q,p,o,n,m,l,k=this.a,j=b.b*100+b.a
if(!(j>=0&&j<4000))return A.b(k,j)
s=k[j]*c
r=A.c([],t.q)
for(j=a.c,q=t.W,p=!1,o=0;o<8;++o){n=A.a8(b,B.ao[o])
m=n.b*100+n.a
if(m<0||m>=4000)continue
if(A.l8(q.a(j.h(0,n)),a,d))continue
if(!(m>=0&&m<4000))return A.b(k,m)
l=k[m]*c
if(l>s){B.a.sm(r,0)
B.a.k(r,n)
s=l
p=!0}else if(l===s)B.a.k(r,n)}k=r.length
if(k===0||!p)return null
k=$.o0().D(k)
if(!(k>=0&&k<r.length))return A.b(r,k)
return r[k]},
bm(a,b,c){return this.cJ(a,b,c,B.ad)},
f2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
B.O.ao(f,0,4000,0)
for(s=this.b,s=s.gak(s),s=s.gv(s);s.n();){r=s.gp(s)
q=r.a
B.O.j(f,q.b*100+q.a,r.b)}s=a.c
r=t.W
do for(p=!1,o=0;o<100;++o)for(n=0;n<40;++n){m=n*100+o
if(A.l8(r.a(s.h(0,new A.i(o,n))),a,b))continue
if(!(m<4000))return A.b(f,m)
l=f[m]
for(q=[m+100,m-100,m+1,m-1],k=-1,j=0,i=0;i<4;++i){h=q[i]
if(h<0||h>=4000)continue
if(!(h>=0&&h<4000))return A.b(f,h)
g=f[h]
if(g>j){j=g
k=h}}if(k!==-1&&j>l+1){f[m]=j-1
p=!0}}while(p)}}
A.k3.prototype={
e7(a,b){var s,r,q,p,o,n,m,l=this,k="a_position",j=B.c.ab((b.f+b.d)/24),i=B.c.ab((b.r+b.e)/36),h=new A.i(j,i)
if(h.E(0,l.c)||j<0||j>=100||i<0||i>=40)return
l.c=h
s=l.b
r=s.a9(k,t.C)
q=l.c
p=q.a*24
o=r.length
if(0>=o)return A.b(r,0)
r[0]=p
q=q.b*36
if(1>=o)return A.b(r,1)
r[1]=q
n=p+24
if(2>=o)return A.b(r,2)
r[2]=n
if(3>=o)return A.b(r,3)
r[3]=q
if(4>=o)return A.b(r,4)
r[4]=p
m=q+36
if(5>=o)return A.b(r,5)
r[5]=m
if(6>=o)return A.b(r,6)
r[6]=n
if(7>=o)return A.b(r,7)
r[7]=m
if(8>=o)return A.b(r,8)
r[8]=n
if(9>=o)return A.b(r,9)
r[9]=q
if(10>=o)return A.b(r,10)
r[10]=p
if(11>=o)return A.b(r,11)
r[11]=m
s.af(a,k,r)}}
A.Y.prototype={}
A.x.prototype={}
A.d5.prototype={
l(a){return"UniformKind."+this.b}}
A.ho.prototype={}
A.ic.prototype={}
A.jg.prototype={
W(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.nv(a,i.a,35633),f=A.nv(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.a_(a.getProgramParameter(e,35714),!0)){A.it(a.getProgramInfoLog(e))
A.V(A.ag("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.e.cD(a,A.c2(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.ic(a.getUniformLocation(A.c2(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.c2(i.e,h),n)
k=a.createBuffer()
B.e.cA(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.ho(k,j))}},
a9(a,b){A.qA(b,t.jv,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
af(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.d(A.ag("WARNING, NO ATTRIBUTE "+b))
B.e.cA(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
a7(a,b,c,d){var s,r,q,p,o,n
t.ea.a(d)
B.e.fj(a,A.c2(this.e,"_program"))
B.e.cD(a,A.c2(this.f,"_vertexArrayObject"))
for(s=d.gak(d),s=s.gv(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.ad(p)
n=r.h(0,p)
if(n==null)A.V(A.ag("WARNING, NO UNIFORM "+p))
switch(n.b.b.a){case 0:B.e.fd(a,n.a,A.b4(o))
break
case 1:q=J.ax(o)
B.e.ff(a,n.a,A.b4(q.h(o,0)),A.b4(q.h(o,1)))
break
case 2:q=J.ax(o)
B.e.fg(a,n.a,A.b4(q.h(o,0)),A.b4(q.h(o,1)),A.b4(q.h(o,2)))
break
case 3:q=J.ax(o)
B.e.fh(a,n.a,A.b4(q.h(o,0)),A.b4(q.h(o,1)),A.b4(q.h(o,2)),A.b4(q.h(o,3)))
break
case 4:B.e.fe(a,n.a,A.G(o))
break}}a.drawArrays(b,0,c)}}
A.k_.prototype={
seT(a){this.f=A.ns(a)}}
A.k0.prototype={}
A.fE.prototype={}
A.fW.prototype={
aN(){var s=0,r=A.bC(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aN=A.bD(function(a,b){if(a===1)return A.by(b,r)
while(true)switch(s){case 0:e=A.c([],t.iw)
for(p=q.b,o=t.cU,n=t.ou,m=t.oV,l=t.Z,k=t.U,j=0;j<47;++j){i=p[j]
h=new XMLHttpRequest()
g=new A.K($.F,o)
B.dF.eZ(h,"get","sounds/"+i)
h.responseType="arraybuffer"
f=m.a(new A.k5(q,h,i,new A.aW(g,n)))
l.a(null)
A.hy(h,"readystatechange",f,!1,k)
h.send()
B.a.k(e,g)}s=2
return A.ak(A.oT(e,t.H),$async$aN)
case 2:return A.bz(null,r)}})
return A.bA($async$aN,r)},
bw(a,b,c){var s,r,q,p=this.c,o=A.oU(p),n=this.a.h(0,a)
if(n==null)return new A.fE()
s=p.createBufferSource()
r=B.m.F()
q=o.gain
q.toString
B.bN.sfk(q,0.1*c+r/20)
p=p.destination
p.toString
B.dE.c5(o,p,0,0)
B.aE.c5(s,o,0,0)
B.aE.seC(s,n)
s.start()
return new A.fE()},
al(a,b){return this.bw(a,b,2)},
$ipi:1}
A.k5.prototype={
$1(a){var s=0,r=A.bC(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.bD(function(b,c){if(b===1)return A.by(c,r)
while(true)switch(s){case 0:m=q.b
s=m.readyState===4?2:3
break
case 2:p=q.d
o=q.c
s=m.status===200?4:6
break
case 4:n=q.a
l=n.a
k=o
s=7
return A.ak(B.bM.eF(n.c,t.lo.a(A.pU(m.response))),$async$$1)
case 7:l.j(0,k,c)
p.aJ(0)
s=5
break
case 6:p.aK(new A.hz("Failed to load "+o))
case 5:case 3:return A.bz(null,r)}})
return A.bA($async$$1,r)},
$S:35}
A.li.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.e.U(q,r,p)
B.e.f9(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.a4(0,p)},
$S:17}
A.fZ.prototype={
dG(a,b){A.qU(a,"CursesTransparent_24x36.png").dc(new A.k6(this),t.P)},
k(a,b){b.a=this
this.c.k(0,b)
this.e=!0},
H(a,b){t.hd.a(b)
this.c.H(0,b)
b.a=null
this.e=!0},
aI(a){var s,r,q,p
for(s=this.c,r=s.$ti,q=new A.cA(s,s.d,r.i("cA<1>")),r=r.c;q.n();){if(q.d<0)p=A.V(A.ag("No element"))
else{p=q.c
if(p==null)p=r.a(null)}p.a=null}++s.d
s.sbc(B.e4)
s.c=0
this.e=!0},
ev(c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9="a_position",c0="a_texcoord",c1="a_bg_color",c2=b8.c,c3=c2.c
if(c3>1e4){A.it("WARNING: TOO MANY SPRITES "+c3)
if(b8.f)b8.f=!1
c3=1e4}s=b8.a
r=t.jv
q=c3*12
p=A.jN(s.a9(b9,r).buffer,0,q)
o=A.jN(s.a9(c0,r).buffer,0,q)
q=c3*24
n=A.jN(s.a9("a_color",r).buffer,0,q)
m=A.jN(s.a9(c1,r).buffer,0,q)
l=c2.er()
B.a.aU(l,c2.a)
for(c2=m.length,r=n.length,q=p.length,k=o.length,j=0;j<c3;++j){if(!(j<l.length))return A.b(l,j)
i=l[j]
h=i.b/16
g=i.c/16
f=j*12
if(!(f<k))return A.b(o,f)
o[f]=h
e=f+1
if(!(e<k))return A.b(o,e)
o[e]=g
d=f+2
c=h+0.0625
if(!(d<k))return A.b(o,d)
o[d]=c
b=f+3
if(!(b<k))return A.b(o,b)
o[b]=g
a=f+4
if(!(a<k))return A.b(o,a)
o[a]=h
a0=f+5
a1=g+0.0625
if(!(a0<k))return A.b(o,a0)
o[a0]=a1
a2=f+6
if(!(a2<k))return A.b(o,a2)
o[a2]=c
a3=f+7
if(!(a3<k))return A.b(o,a3)
o[a3]=a1
a4=f+8
if(!(a4<k))return A.b(o,a4)
o[a4]=c
c=f+9
if(!(c<k))return A.b(o,c)
o[c]=g
a5=f+10
if(!(a5<k))return A.b(o,a5)
o[a5]=h
a6=f+11
if(!(a6<k))return A.b(o,a6)
o[a6]=a1
a7=i.d
a8=i.e
a9=i.f
if(a9===1){if(!(f<q))return A.b(p,f)
p[f]=a7
if(!(e<q))return A.b(p,e)
p[e]=a8
e=a7+24
if(!(d<q))return A.b(p,d)
p[d]=e
if(!(b<q))return A.b(p,b)
p[b]=a8
if(!(a<q))return A.b(p,a)
p[a]=a7
a=a8+36
if(!(a0<q))return A.b(p,a0)
p[a0]=a
if(!(a2<q))return A.b(p,a2)
p[a2]=e
if(!(a3<q))return A.b(p,a3)
p[a3]=a
if(!(a4<q))return A.b(p,a4)
p[a4]=e
if(!(c<q))return A.b(p,c)
p[c]=a8
if(!(a5<q))return A.b(p,a5)
p[a5]=a7
if(!(a6<q))return A.b(p,a6)
p[a6]=a}else{b0=B.c.a8(12*a9)
b1=B.c.a8(18*a9)
b2=a7+12-b0
b3=a8+18-b1
if(!(f<q))return A.b(p,f)
p[f]=b2
if(!(e<q))return A.b(p,e)
p[e]=b3
e=b2+b0*2
if(!(d<q))return A.b(p,d)
p[d]=e
if(!(b<q))return A.b(p,b)
p[b]=b3
if(!(a<q))return A.b(p,a)
p[a]=b2
a=b3+b1*2
if(!(a0<q))return A.b(p,a0)
p[a0]=a
if(!(a2<q))return A.b(p,a2)
p[a2]=e
if(!(a3<q))return A.b(p,a3)
p[a3]=a
if(!(a4<q))return A.b(p,a4)
p[a4]=e
if(!(c<q))return A.b(p,c)
p[c]=b3
if(!(a5<q))return A.b(p,a5)
p[a5]=b2
if(!(a6<q))return A.b(p,a6)
p[a6]=a}b4=j*24
b5=i.x
b6=i.r
if(b5==null)B.b6.ao(n,b4,b4+24,0)
else for(e=b5.a,d=(e>>>16&255)/255,c=(e>>>8&255)/255,b=(e&255)/255,e=(e>>>24&255)/255,b7=0;b7<24;b7+=4){a=b4+b7
if(!(a<r))return A.b(n,a)
n[a]=d
a0=a+1
if(!(a0<r))return A.b(n,a0)
n[a0]=c
a0=a+2
if(!(a0<r))return A.b(n,a0)
n[a0]=b
a+=3
if(!(a<r))return A.b(n,a)
n[a]=e}if(b6==null)B.b6.ao(m,b4,b4+24,0)
else for(e=b6.a,d=(e>>>16&255)/255,c=(e>>>8&255)/255,b=(e&255)/255,e=(e>>>24&255)/255,b7=0;b7<24;b7+=4){a=b4+b7
if(!(a<c2))return A.b(m,a)
m[a]=d
a0=a+1
if(!(a0<c2))return A.b(m,a0)
m[a0]=c
a0=a+2
if(!(a0<c2))return A.b(m,a0)
m[a0]=b
a+=3
if(!(a<c2))return A.b(m,a)
m[a]=e}}s.af(c4,b9,p)
s.af(c4,c0,o)
s.af(c4,"a_color",n)
s.af(c4,c1,m)},
M(a,b){var s,r=this
if(r.b==null||r.c.c===0)return
if(r.e){r.ev(a)
r.e=!1}s=r.d
s.aR(s.e,a)
a.activeTexture(33984)
B.e.U(a,3553,r.b)
r.a.a7(a,4,r.c.c*6,A.b_(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.k6.prototype={
$1(a){this.a.b=t.lJ.a(a)},
$S:37}
A.P.prototype={
sI(a,b){var s=this.a
if(s!=null)s.e=!0
this.d=b},
sJ(a,b){var s=this.a
if(s!=null)s.e=!0
this.e=b},
sds(a,b){var s=this.a
if(s!=null)s.e=!0
this.f=b},
sad(a){var s=this.a
if(s!=null)s.e=!0
this.d=a*24},
sae(a){var s=this.a
if(s!=null)s.e=!0
this.e=a*36},
san(a,b){var s
this.r=b
s=this.a
if(s!=null)s.e=!0},
scF(a,b){var s=this.a
if(s!=null)s.e=!0
this.x=b},
saM(a,b){var s
this.y=b
s=this.a
if(s!=null)s.e=!0},
l(a){return"Sprite("+this.b+", "+this.c+")"}}
A.m.prototype={}
A.jA.prototype={}
A.kd.prototype={
em(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(this.b==null)return
s=this.a
r=s.a9("a_color",t.C)
q=this.b
switch(q.d.a.a){case 0:case 1:case 6:case 5:p=$.o1()
break
case 2:p=$.ml()
break
case 4:p=$.o3()
break
case 3:p=$.o2()
break
default:p=null}for(o=r.length,q=q.c.c,n=q.length,m=0;m<40;++m)for(l=m<39,k=m*100,j=0;j<100;++j){i=k+j
h=i*48
if(!(i<n))return A.b(q,i)
if(q[i].c!==B.b)for(g=0;g<48;g+=4){f=g+h
e=p.c.a
if(!(f<o))return A.b(r,f)
r[f]=(e>>>16&255)/255
d=f+1
if(!(d<o))return A.b(r,d)
r[d]=(e>>>8&255)/255
d=f+2
if(!(d<o))return A.b(r,d)
r[d]=(e&255)/255
f+=3
if(!(f<o))return A.b(r,f)
r[f]=1}else{if(l){f=i+100
if(!(f<n))return A.b(q,f)
f=q[f]
f=!(f.c===B.b||A.O(A.bN(f.f)))}else f=!1
if(f){for(g=0;g<24;g+=4){f=g+h
e=p.b.a
if(!(f<o))return A.b(r,f)
r[f]=(e>>>16&255)/255
d=f+1
if(!(d<o))return A.b(r,d)
r[d]=(e>>>8&255)/255
d=f+2
if(!(d<o))return A.b(r,d)
r[d]=(e&255)/255
f+=3
if(!(f<o))return A.b(r,f)
r[f]=1}for(g=24;g<48;g+=4){f=g+h
e=p.a.a
if(!(f<o))return A.b(r,f)
r[f]=(e>>>16&255)/255
d=f+1
if(!(d<o))return A.b(r,d)
r[d]=(e>>>8&255)/255
d=f+2
if(!(d<o))return A.b(r,d)
r[d]=(e&255)/255
f+=3
if(!(f<o))return A.b(r,f)
r[f]=1}}else for(g=0;g<48;g+=4){f=g+h
e=p.b.a
if(!(f<o))return A.b(r,f)
r[f]=(e>>>16&255)/255
d=f+1
if(!(d<o))return A.b(r,d)
r[d]=(e>>>8&255)/255
d=f+2
if(!(d<o))return A.b(r,d)
r[d]=(e&255)/255
f+=3
if(!(f<o))return A.b(r,f)
r[f]=1}}}s.af(a,"a_color",r)},
M(a,b){var s=this
if(s.c){s.em(a)
s.c=!1}if(s.b==null)return
s.a.a7(a,4,48e3,A.b_(["u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.h5.prototype={
sd4(a){var s=this
if(s.a==null&&a!=null){s.a=a
B.a.k(s.d,s.e)}else if(a==null){s.ar(s.e)
s.a=null}},
ar(a){if(B.a.H(this.d,a)){a.sax(!1)
a.d6(0,this.b,this)}},
bD(a){var s
t.e8.a(a)
if(B.a.H(this.c,a)){s=this.b
B.a.u(a.f.a,s.gbB(s))}},
av(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.r),i=a.a
i=(i.length===0?B.E:new A.bd(i)).a
s=new A.e3(i,0,0)
r=this.b
q=r.c
p=q.$ti.c
o=a.c
n=a.b
for(;s.bW(1,s.c);){m=s.d
l=$.pT.h(0,m==null?s.d=B.i.bR(i,s.b,s.c):m)
if(l==null)l=B.eX
k=new A.P(l.a,l.b,-1,-1,null)
k.x=n
k.f=o
k.a=r
p.a(k);++q.d
q.ai(0,k)
r.e=!0
B.a.k(j,k)}a.r=this
i=new A.kT(j)
i.br(a.d,a.e)
a.f=i
B.a.k(this.c,a)},
M(a,b){var s,r,q,p,o,n,m=this
m.e.fi(0,m.a)
s=m.r
r=b.b
if(s!==r||m.f!==b.a||b.d!==m.x||b.e!==m.y){m.f=b.a
m.r=r
m.y=b.e
m.x=b.d
q=!0}else q=!1
for(s=m.d,r=s.length,p=m.b,o=0;o<s.length;s.length===r||(0,A.A)(s),++o){n=s[o]
if(!n.gax()){n.by(b.a,b.b,b.d,b.e)
n.cP(p,m)}else if(q)n.by(b.a,b.b,b.d,b.e)}p.M(a,b)}}
A.b0.prototype={
sI(a,b){var s,r=this
r.d=b
s=r.f
if(s!=null)s.br(b,r.e)
s=r.r
if(s!=null)s.b.e=!0},
sJ(a,b){var s,r=this
r.e=b
s=r.f
if(s!=null)s.br(r.d,b)
s=r.r
if(s!=null)s.b.e=!0}}
A.kT.prototype={
br(a,b){var s,r,q,p,o,n,m
for(s=this.a,r=s.length,q=0,p=0;p<r;++p){o=s[p]
n=o.a
m=n==null
if(!m)n.e=!0
o.d=a+q
if(!m)n.e=!0
o.e=b
q+=24}}}
A.eL.prototype={
l(a){return"Alignment."+this.b}}
A.d4.prototype={}
A.dQ.prototype={
by(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.c,g=h.length+6,f=A.U(h),e=f.i("f(1)").a(new A.jH(i)),d=i.a
if(d==null)d=null
else{d=d.length===0?B.E:new A.bd(d)
d=d.gm(d)}if(d==null)d=0
d=new A.bq(h,e,f.i("bq<1,f>")).cN(0,d,new A.jI(),t.S)
if(typeof d!=="number")return d.C()
s=d+6
d=h.length
r=s*24
switch(i.b.a){case 0:i.z=B.c.a8(a/2-r/2)+c
i.Q=B.c.a8(b/2-(d+6)*36/2)+a0
break
case 1:i.z=B.d.a8(a-r)+c
i.Q=a0
break}if(!i.y)return
for(f=i.e,q=0,p=0;p<g;++p)for(e=p*36,o=0;o<s;++o){if(!(q>=0&&q<f.length))return A.b(f,q)
n=f[q]
d=i.z
m=n.a
l=m==null
if(!l)m.e=!0
n.d=d+o*24
d=i.Q
if(!l)m.e=!0
n.e=d+e;++q}k=108+i.Q
for(f=i.f,q=0;q<h.length;++q){if(!(q<f.length))return A.b(f,q)
j=f[q]
j.sI(0,i.z+72)
j.sJ(0,k+36*q)}if(i.r){i.x.sJ(0,108+i.Q)
i.x.sI(0,i.z+48)}},
eW(){var s=this,r=s.ch
s.sco(Math.min(r+1,s.c.length-1))
if(r!==s.ch){s.cs()
return!0}return!1},
f0(){var s=this,r=s.ch
s.sco(Math.max(r-1,0))
if(r!==s.ch){s.cs()
return!0}return!1},
cs(){var s=this,r=s.Q,q=s.ch
s.x.sJ(0,108+r+36*q)
s.x.sI(0,48+s.z)},
cP(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.c,a1=a0.length+6,a2=A.U(a0),a3=a2.i("f(1)").a(new A.jF(a)),a4=a.a,a5=a4==null
if(a5)s=null
else{s=a4.length===0?B.E:new A.bd(a4)
s=s.gm(s)}if(s==null)s=0
s=new A.bq(a0,a3,a2.i("bq<1,f>")).cN(0,s,new A.jG(),t.S)
if(typeof s!=="number")return s.C()
r=s+6
for(a2=a.e,a3=a6.c,s=a3.$ti.c,q=a.d,p=a1-1,o=r-1,a5=!a5,n=0;n<a1;++n)for(m=n*36,l=n===p,k=n===0,j=0;j<r;++j){i=j===0
if(i&&k)h=B.fK
else if(i&&l)h=B.fE
else{g=j===o
if(g&&k)h=B.eR
else if(g&&l)h=B.eU
else if(i)h=B.bb
else if(g)h=B.bb
else if(k){if(a5)if(j>1){i=a4.length===0?B.E:new A.bd(a4)
i=j<=i.gm(i)+1}else i=!1
else i=!1
h=i?B.bc:B.bd}else h=l?B.bd:B.bc}f=new A.P(h.a,h.b,-1,-1,null)
i=a.z
f.d=i+j*24
i=a.Q
f.e=i+m
f.x=q
f.r=B.v
f.y=-1
B.a.k(a2,f)
f.a=a6
s.a(f);++a3.d
a3.ai(0,f)
a6.e=!0}if(a5){e=new A.b0(a4,B.v,1,a.z+48,a.Q)
a7.av(e)
B.a.k(a.f,e)}d=108+a.Q
for(a3=a.f,c=0;c<a0.length;++c){a4=a.z
e=new A.b0(J.c6(a0[c]),B.v,1,a4+72,d+36*c)
a7.av(e)
B.a.k(a3,e)}if(a.r){b=A.pj(B.eI)
b.scF(0,B.v)
a.x=b
b.sJ(0,108+a.Q)
b.sI(0,a.z+48)
b.saM(0,1)
a6.k(0,b)
B.a.k(a2,b)}a.y=!0},
d6(a,b,c){var s,r=this.e
B.a.u(r,b.gbB(b))
s=this.f
B.a.u(s,c.gd8())
B.a.sm(r,0)
B.a.sm(s,0)},
sax(a){this.y=A.nr(a)},
sco(a){this.ch=A.G(a)},
gax(){return this.y}}
A.jH.prototype={
$1(a){var s=J.c6(this.a.$ti.c.a(a))
s=s.length===0?B.E:new A.bd(s)
return s.gm(s)},
$S(){return this.a.$ti.i("f(1)")}}
A.jI.prototype={
$2(a,b){A.G(a)
A.G(b)
return a>b?a:b},
$S:11}
A.jF.prototype={
$1(a){var s=J.c6(this.a.$ti.c.a(a))
s=s.length===0?B.E:new A.bd(s)
return s.gm(s)},
$S(){return this.a.$ti.i("f(1)")}}
A.jG.prototype={
$2(a,b){A.G(a)
A.G(b)
return a>b?a:b},
$S:11}
A.eV.prototype={
d6(a,b,c){var s,r=this.a
B.a.u(r,b.gbB(b))
s=this.b
B.a.u(s,c.gd8())
B.a.sm(r,0)
B.a.sm(s,0)},
fi(a,b){var s,r,q,p=this,o="_textRenderer"
if(!p.f||b==null)return
s=p.r
r=b.b
if(s!==r||p.x!==b.a){p.r=r
p.x=b.a
if(p.c!=null){s=A.c2(p.y,o)
r=p.c
r.toString
s.bD(r)
r=p.c
r.toString
B.a.H(p.b,r)}s=p.d
r=p.e
q=p.c=new A.b0("HP: "+p.r+"/"+p.x,B.v,1,s+48,r)
A.c2(p.y,o).av(q)
B.a.k(p.b,q)}},
by(a,b,c,d){var s,r,q,p,o,n=this,m=b-36+d
n.e=m
n.d=c
if(!n.f)return
for(s=n.a,r=0;r<100;++r){if(!(r<s.length))return A.b(s,r)
q=s[r]
p=q.a
o=p==null
if(!o)p.e=!0
q.d=c+r*24
if(!o)p.e=!0
q.e=m}n.c.sI(0,c+48)
n.c.sJ(0,n.e)},
cP(a,b){var s,r,q,p,o,n,m,l=this
l.y=b
for(s=l.a,r=a.c,q=r.$ti.c,p=0;p<100;++p){o=new A.P(11,13,-1,-1,null)
n=l.d
o.d=n+p*24
n=l.e
o.e=n
o.x=B.a4
o.r=B.v
o.y=-1
B.a.k(s,o)
o.a=a
q.a(o);++r.d
r.ai(0,o)
a.e=!0}s=l.d
r=l.e
m=l.c=new A.b0("HP: "+l.r+"/"+l.x,B.v,1,s+48,r)
b.av(m)
B.a.k(l.b,m)
l.f=!0},
sax(a){this.f=A.nr(a)},
gax(){return this.f}}
A.j7.prototype={
ew(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.a,a4=a3.a1(a3.e),a5=a2.b,a6=a5.a9("a_color",t.C)
if(a4!=null)for(s=a6.length,r=a4.d,q=a4.c,p=a4.a,o=q.length,n=a3.e,m=n.a,n=n.b,l=0;l<40;++l)for(k=l*100,j=l*p,i=l===n,h=0;h<100;++h){g=k+h
f=g*24
e=h===m&&i
d=j+h
if(!(d<o))return A.b(q,d)
c=q[d]>0||e
if(!(g<4000))return A.b(r,g)
b=r[g]===1||e
for(a=0;a<48;a+=4){d=a+f
a0=c?0:0.01
if(!(d<s))return A.b(a6,d)
a6[d]=a0
a0=d+1
a1=c?0:0.01
if(!(a0<s))return A.b(a6,a0)
a6[a0]=a1
a1=d+2
a0=c?0:0.01
if(!(a1<s))return A.b(a6,a1)
a6[a1]=a0
d+=3
if(c)a0=0
else a0=b?0.8:1
if(!(d<s))return A.b(a6,d)
a6[d]=a0}}a2.c=a3.e
a2.d=!1
a5.af(a7,"a_color",a6)}}
A.kk.prototype={}
A.hj.prototype={}
A.l4.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:16}
A.h_.prototype={
am(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.e){m=n.b
l=B.c.w(m.d/24)
if(l===q){m=B.c.w(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.ko.prototype={}
A.iZ.prototype={
c6(a){var s=this
return A.qf(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5
return function $async$c6(a6,a7){if(a6===1){o=a7
q=p}while(true)switch(q){case 0:a5=A.fk(B.P)
a5.e=9
n=A.fk(new A.eM(B.aA,50))
m=r.c.x
m.eI(a5,B.r)
B.a.k(m.a,n)
l=A.c([],t.fF)
k=new A.hj(r,l)
m=s.a,j=s.b,i=s.e,h=0
case 2:if(!(h<10)){q=4
break}g=A.qz(m.dg(j[h]))
B.a.k(l,g)
f=i[h]
for(e=f.length,d=g.a,c=0;c<f.length;f.length===e||(0,A.A)(f),++c){b=A.qI(f[c])
a0=A.qX(g,b)
a1=b.b
a2=a0.a
a3=a1.a
a4=a3==null
if(!a4)a3.e=!0
a1.d=a2*24
a2=a0.b
if(!a4)a3.e=!0
a1.e=a2*36
B.a.k(d,b)}q=5
return k
case 5:case 3:++h
q=2
break
case 4:return A.pu()
case 1:return A.pv(o)}}},t.l7)},
e1(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.d,r=t.ee,q=this.e,p=this.b,o=0;o<10;++o){n=q[o]
m=p[o]
l=$.o4()
k=A.U(l)
j=k.i("aJ<1>")
i=A.mT(new A.aJ(l,k.i("D(1)").a(new A.j_(m.a)),j),!0,j.i("j.E"))
for(h=0;h<s[o];){g=A.pZ($.eH(),i,r)
B.a.k(n,g)
h+=g.d}}},
e_(){var s,r,q,p,o,n,m,l,k,j,i=this,h=new A.ca(1,1,1,0,0,0,0,new A.cN(A.c([],t.I),A.aa(t.b,t.R)),A.my(),A.c([],t.Q),A.c([],t.d),new A.cO(""))
for(s=i.f,r=i.c,q=i.e,p=0;p<10;++p){o=q[p]
for(n=0,m=0;m<o.length;++m){l=i.e0(o[m])
k=l.a
for(j=l.x.b.h(0,B.r)!=null;k>0;){n+=(j?l.d5(h,$.eH(),!0):l.d_(h,$.eH(),!0)).c
k-=r[p]}}B.a.j(s,p,n)}},
e0(a){var s,r,q,p,o,n=this.r
if(n.h(0,a)!=null){n=n.h(0,a)
n.toString
return n}s=a.d
r=A.c([],t.I)
q=A.mS(B.aq,t.b,t.R)
p=new A.ca(s,s,1,0,0,0,0,new A.cN(r,q),a.c,A.c([],t.Q),A.c([],t.d),new A.cO(a.a))
for(s=J.am(a.r.$0());s.n();){o=s.gp(s)
switch(o.gbQ()){case B.as:q.h(0,B.G)
q.j(0,B.G,o)
break
case B.at:q.h(0,B.r)
q.j(0,B.r,o)
break
case B.au:q.h(0,B.H)
q.j(0,B.H,o)
break
default:B.a.k(r,o)}}n.j(0,a,p)
return p}}
A.j_.prototype={
$1(a){return B.a.L(t.ee.a(a).x,this.a)},
$S:41}
A.eX.prototype={
bO(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.a4(a,a0,A.bb(a*a0,B.j,!1,t.ns),t.ba)
c.a=b
s=new A.iQ(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.C()
if(typeof m!=="number")return A.cD(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.cD(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.cD(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.cD(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.cD(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.cD(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.cD(f)
e=n+m+k+i+h+g+l+f
if(J.a_(s.$2(q,o),1))if(e<4)a1.G(0,B.j,q,o)
else a1.G(0,B.b,q,o)
else if(e>5)a1.G(0,B.b,q,o)
else a1.G(0,B.j,q,o)}d=c.a
c.a=a1}}}
A.iQ.prototype={
$2(a,b){return J.a_(this.a.a.a2(0,a,b),B.b)?0:1},
$S:11}
A.je.prototype={
bG(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.cM.a(b0)
s=t.q
r=A.c([],s)
q=new A.jf(a9)
for(p=J.am(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.df()
if(n>=1)B.a.k(r,o)}if(r.length===0)return
m=A.c([],t.oe)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.A)(r),++j){i=r[j]
h=A.c([],k)
g=i.a
f=i.b
if(o.h(0,new A.i(g+1,f))===B.b)B.a.k(h,B.o)
if(o.h(0,new A.i(g+-1,f))===B.b)B.a.k(h,B.q)
if(o.h(0,new A.i(g,f+1))===B.b)B.a.k(h,B.p)
if(o.h(0,new A.i(g,f+-1))===B.b)B.a.k(h,B.n)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.A)(h),++e){d=h[e]
c=A.a8(i,d)
b=A.c([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.b)break
a2=A.oO(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.a8(a,a2[0]))!==B.j){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.a8(a,a2[1]))===B.j}else a1=!0
if(a1)break
a=A.a8(a,d)
B.a.k(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.j&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.a8(a,A.oP(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.k(m,new A.e6(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.aa(t.v,t.fH)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.A)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.L(l,n))continue
if(a4.aL(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.j(0,n,a5)}else a4.j(0,n,a5)}for(s=a4.gbI(a4),s=s.gv(s),n=this.a,l=a9.e,k=a8.b;s.n();){g=s.gp(s)
f=g.d
a0=p.h(0,a8)
a0.toString
B.a.k(a0,f)
a0=p.h(0,f)
a0.toString
B.a.k(a0,a8)
for(g=g.c,a0=g.length,j=0;a1=g.length,j<a1;g.length===a0||(0,A.A)(g),++j)o.j(0,g[j],B.j)
a0=n.D(a1)
if(!(a0>=0&&a0<g.length))return A.b(g,a0)
a7=g[a0]
l.j(0,a7,B.Q)
B.a.k(k,a7)
B.a.k(f.b,a7)}for(s=a4.gbI(a4),s=s.gv(s);s.n();)this.bG(s.gp(s).d,a9,b0,b1)}}
A.jf.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.C(0,new A.i(1,0)))===B.b?1:0
if(s.h(0,a.C(0,new A.i(-1,0)))===B.b)++r
if(s.h(0,a.C(0,new A.i(0,-1)))===B.b)++r
return s.h(0,a.C(0,new A.i(1,1)))===B.b?r+1:r},
$S:42}
A.iN.prototype={
di(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.G(0,o.F()>0.45?B.j:B.b,n,m)
p.G(0,B.av,n,m)}new A.eX(a7).bO(3)
for(p=q-1,l=0;l<r;++l){s.G(0,B.b,l,0)
s.G(0,B.b,l,p)}for(o=r-1,k=0;k<q;++k){s.G(0,B.b,0,k)
s.G(0,B.b,o,k)}j=new A.iO(a7)
i=new A.iP(a7)
for(l=1;l<o;l=g)for(h=l-1,g=l+1,k=1;k<p;++k){if(!j.$2(l,k))continue
f=i.$2(g,k)
e=i.$2(h,k)
d=k+1
c=i.$2(l,d)
b=k-1
a=i.$2(l,b)
if(f&&e&&c&&a){s.G(0,B.b,l,k)
continue}if(j.$2(h,d)&&c&&e){s.G(0,B.b,l,k)
continue}if(j.$2(g,d)&&c&&f){s.G(0,B.b,l,k)
continue}if(j.$2(g,b)&&a&&f){s.G(0,B.b,l,k)
continue}if(j.$2(h,b)&&a&&e){s.G(0,B.b,l,k)
continue}}p=t.j
o=A.ju(p)
a0=new A.fd(a7,A.c([],t.do),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.i(l,k)
if(o.L(0,a1)||s.h(0,a1)===B.b)continue
a0.cM(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.A)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gv(a3);d.n();)s.j(0,d.gp(d),B.b)
else B.a.k(o,new A.a3(a3,A.c([],h),A.c([],h),A.j4(a3)))}a4=A.aa(p,t.v)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.c,a2=0;b=o.length,a2<b;o.length===r||(0,A.A)(o),++a2){a3=o[a2]
B.a.k(p,a3)
h.j(0,a3,A.c([],d))
for(b=J.am(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.A)(o),++a2){a3=o[a2]
r=a3.a
p=J.ax(r)
if(p.gm(r)>a6){a6=p.gm(r)
a5=a3}}this.bG(a5,a7,a4,q)
for(r=q.d1(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.A)(r),++a2){a3=r[a2]
B.a.H(o,a3)
for(p=J.am(a3.a);p.n();)s.j(0,p.gp(p),B.b)}A.nS(o,a7)}}
A.iO.prototype={
$2(a,b){return J.a_(this.a.b.a2(0,a,b),B.j)},
$S:12}
A.iP.prototype={
$2(a,b){return J.a_(this.a.b.a2(0,a,b),B.b)},
$S:12}
A.aN.prototype={}
A.hi.prototype={}
A.aM.prototype={
P(a,b){this.$ti.c.a(a)
return this.a.P(a,b)+this.b.P(a,b)}}
A.cY.prototype={
P(a,b){this.$ti.c.a(a)
return Math.min(B.aa.P(a,b),this.b.P(a,b))}}
A.fF.prototype={
P(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=b.b,r=a.a,q=a.b,p=b.e,o=p.a,p=p.b,n=-1;n<2;++n)for(m=r+n,l=m<o,k=-1;k<2;++k){j=q+k
if(!(m>=0&&j>=0&&l&&j<p))continue
if(s.h(0,new A.i(m,j))===B.b)return 1/0}return 0}}
A.eY.prototype={
P(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.t)return 1/0
s=A.lC(a,B.n,b)
r=A.lC(a,B.p,b)
q=A.lC(a,B.o,b)
p=A.lC(a,B.q,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.eK.prototype={
P(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.t)return 1/0
if(A.cE(a,B.n,b)+A.cE(a,B.p,b)+A.cE(a,B.o,b)+A.cE(a,B.q,b)===1)return 1
return 1/0}}
A.f4.prototype={
P(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.t)return 1/0
if(A.cE(a,B.n,b)+A.cE(a,B.p,b)+A.cE(a,B.o,b)+A.cE(a,B.q,b)===2)return 1
return 1/0}}
A.dn.prototype={
P(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.t)return 1/0
s=A.a8(a,B.n)
r=A.a8(a,B.p)
q=A.a8(a,B.o)
p=A.a8(a,B.q)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.cX.prototype={
P(a,b){var s,r,q,p,o,n,m,l,k,j,i
for(s=b.e,r=a.a,q=a.b,p=this.a,o=s.a,n=s.b,m=-2;m<4;++m)for(l=r+m,k=l<o,j=-2;j<4;++j){i=q+j
if(!(l>=0&&i>=0&&k&&i<n))continue
if(s.h(0,new A.i(l,i))===p)return 1/0}return 0}}
A.cv.prototype={
d2(a,b){return this.c.$2(a,b)},
gbz(){return this.a},
gbj(a){return this.b},
gbv(){return this.c}}
A.lu.prototype={
$2(a,b){b.e.j(0,a,B.be)},
$S:1}
A.ln.prototype={
$2(a,b){b.e.j(0,a,B.fS)},
$S:1}
A.lr.prototype={
$2(a,b){b.e.j(0,a,B.a6)},
$S:1}
A.lm.prototype={
$2(a,b){b.e.j(0,a,B.a6)},
$S:1}
A.lo.prototype={
$2(a,b){b.e.j(0,a,B.ax)},
$S:1}
A.ls.prototype={
$2(a,b){b.e.j(0,a,B.fT)
b.f.j(0,a,B.ec)},
$S:1}
A.lt.prototype={
$2(a,b){b.e.j(0,a,B.fR)},
$S:1}
A.lq.prototype={
$2(a,b){b.e.j(0,a,B.aw)},
$S:1}
A.lp.prototype={
$2(a,b){b.e.j(0,a,B.aw)},
$S:1}
A.ll.prototype={
$2(a,b){b.e.j(0,a,B.ay)},
$S:1}
A.b3.prototype={}
A.id.prototype={
gbj(a){var s=this.a
return s.gbj(s)},
gbv(){return this.a.gbv()},
gbz(){return this.a.gbz()},
l(a){return"Unique("+this.a.l(0)+")"},
$icv:1,
d2(a,b){return this.gbv().$2(a,b)}}
A.lB.prototype={
$2(a,b){var s=t.n4
return B.c.O(s.a(a).b,s.a(b).b)},
$S:45}
A.lA.prototype={
$2(a,b){var s=t.v
s.a(a)
s.a(b)
return J.an(a.a)-J.an(b.a)},
$S:64}
A.dF.prototype={}
A.iG.prototype={
dg(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=4000,a=new A.a4(100,40,A.bb(b,B.j,!1,t.ns),t.ba),a0=A.bb(b,0,!1,t.i),a1=A.bb(b,B.av,!1,t.dt),a2=new A.a4(100,40,A.bb(b,B.t,!1,t.dy),t.eN),a3=t.c,a4=new A.dF(a5,a,new A.a4(100,40,a0,t.de),new A.a4(100,40,a1,t.f5),a2,new A.a4(100,40,A.bb(b,B.aY,!1,t.gM),t.eT),new A.a4(100,40,A.bb(b,null,!1,t.R),t.oQ),new A.j3(A.c([],a3),A.aa(t.v,t.mw)),A.c([],a3))
if(a5.b)this.eG(a4)
a0=a5.a
switch(a0.a){case 1:case 2:new A.iN(B.m).di(a4)
break
case 3:case 4:new A.k2(A.ju(t.j),B.m).dl(a4)
break
case 6:case 0:case 5:new A.ka(B.m).dj(a4)
break}s=new Float32Array(4000)
new A.jS().dk(s,100,40)
r=new A.a4(100,40,A.m_(b,new A.iI(),t.W),t.h)
for(q=0;q<100;++q)for(a1=q!==0,a3=q!==99,p=0;p<40;++p)if(!a1||!a3||p===0||p===39){a.G(0,B.b,q,p)
a2.G(0,B.t,q,p)}a1=a4.y
this.b.dh(a1,a4,a5.c)
for(a3=a4.c,o=this.a,n=a4.d,m=a4.r,a0=a0!==B.bO,l=a4.f,q=0;q<100;++q)for(p=0;p<40;++p){k=J.a_(a.a2(0,q,p),B.j)
j=a.a2(0,q,p)
j.toString
i=new A.i(q,p)
o.F()
h=r.h(0,i)
g=n.h(0,i)
f=a2.h(0,i)
h.b=i
h.c=j
h.sf8(n.h(0,i))
j=p*100+q
if(!(j<4000))return A.b(s,j)
e=s[j]
d=m.a2(0,q,p)
if(J.a_(a3.h(0,i),1)){h.r=B.dZ
h.c=B.j}else if(f!==B.t)switch(f.a){case 0:if(l.h(0,i)===B.aX)h.f=B.L
else h.f=B.w
break
case 2:h.f=B.N
break
case 3:break
case 4:h.f=B.a2
break
case 5:h.f=B.a1
break
case 1:h.f=B.M
break
case 6:h.f=B.Z
if(d!=null)B.a.k(h.e,d)
break
case 7:h.f=B.X
break
case 8:h.f=B.I
break
case 9:h.f=B.W
break
case 10:h.f=B.a_
break
case 11:h.f=B.a0
break}else if(k&&e<0.42&&g!==B.a5&&a0)h.f=B.M
if(d!=null)B.a.k(h.e,d)}a=J.am(B.a.eL(a1,new A.iJ(),new A.iK(a4)).a)
while(!0){if(!a.n()){c=!1
break}a0=a.gp(a)
if(A.pS(a2.h(0,a0))){r.h(0,a0).f=B.J
c=!0
break}}if(!c)throw A.d(A.ag(""))
return new A.jy(r,a5)},
eG(a){var s,r,q=this.a,p=a.b,o=p.b,n=q.D(o-1)+1,m=n>o/2?-1:1,l=new A.iH(a)
for(p=p.a,s=n,r=0;r<p;++r){l.$1(new A.i(r,s))
l.$1(new A.i(r,s+1))
l.$1(new A.i(r,s-1))
s+=q.eU()?m:0}}}
A.iI.prototype={
$1(a){var s=A.c([],t.I)
return new A.bV(B.x,B.j,s)},
$S:16}
A.iJ.prototype={
$1(a){return t.v.a(a).e},
$S:47}
A.iK.prototype={
$0(){return B.a.geK(this.a.y)},
$S:48}
A.iH.prototype={
$1(a){var s=this.a,r=s.b
if(r.cO(a)){r.j(0,a,B.j)
s.c.j(0,a,1)}},
$S:49}
A.e6.prototype={
gm(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.j3.prototype={
d1(){var s,r,q,p,o,n=A.c([],t.c)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.k(n,o)}return n}}
A.a3.prototype={
l(a){return"Room{"+J.an(this.a)+"; "+this.d.l(0)+"}"}}
A.fd.prototype={
cM(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.c([a],k),i=A.c([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.L(0,o))continue
q.k(0,o)
B.a.k(i,o)
for(n=0;n<8;++n){m=A.a8(o,B.ao[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.L(0,m)&&k.h(0,m)===B.j)B.a.k(j,m)}}B.a.k(this.b,i)}}
A.fl.prototype={
cz(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.a0)s=B.aO
else if(a instanceof A.a2)s=B.aM
else s=a instanceof A.au?B.aN:B.aP
B.a.k(r.a,a)
B.a.k(r.b,s)
B.a.k(r.c,b)
r.d+=b},
cw(a){return this.cz(a,10)},
f_(a){var s,r,q,p={},o=p.a=0,n=A.m_(this.c.length,new A.jn(p,this),t.i),m=a.F()
for(s=n.length,r=m>-1;o<s;++o){q=n[o]
if(r&&m<=q){s=this.a
if(!(o<s.length))return A.b(s,o)
return A.fk(s[o])}}throw A.d(A.ag(""))},
du(a){var s,r,q=B.a.eR(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
dt(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p===0)return
B.a.j(r,q,p-2)
this.d-=2}}}
A.jn.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.b(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:51}
A.jO.prototype={}
A.ji.prototype={
dh(a,b,c){var s,r,q
t.mw.a(a)
s=new A.fl(A.c([],t.hf),A.c([],t.lB),A.c([],t.t))
r=s.gez()
new A.aJ(B.e7,t.ei.a(new A.jj()),t.kL).u(0,r)
new A.aJ(B.e8,t.eU.a(new A.jk()),t.eo).u(0,r)
new A.aJ(B.e9,t.hZ.a(new A.jl()),t.au).u(0,r)
new A.aJ(B.e_,t.g9.a(new A.jm()),t.b1).u(0,r)
s.cw(B.aH)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.A)(a),++q)this.dV(s,a[q],b)},
dV(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.ax(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.x
break}r=j.length
if(r!==0){r=l.D(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.D(k.gm(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.ax||q===B.t
else r=!1
if(r)break;++i}if(s.E(0,B.x))return
p=a.f_(l)
n=p.b
if(!J.a_(n,B.aH)){a.du(n)
a.dt(p.c)
o.j(0,s,p)}}}
A.jj.prototype={
$1(a){return t.bB.a(a).b<=1000},
$S:52}
A.jk.prototype={
$1(a){return t.li.a(a).f<=1000},
$S:53}
A.jl.prototype={
$1(a){return t.kB.a(a).r<=1000},
$S:54}
A.jm.prototype={
$1(a){return t.lE.a(a).c<=1000},
$S:55}
A.jS.prototype={
aa(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
dk(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
for(s=0;s<b0;++s)for(r=s*0.1,q=0;q<b1;++q){p=q*b0+s
o=q*0.1
n=B.c.ab(r)&255
m=B.c.ab(o)&255
l=B.c.ab(0.3)&255
k=r-Math.floor(r)
j=o-Math.floor(o)
i=0.3-Math.floor(0.3)
h=k*k*k*(k*(k*6-15)+10)
g=j*j*j*(j*(j*6-15)+10)
o=$.of()
f=o.length
if(!(n<f))return A.b(o,n)
e=o[n]+m
if(!(e<f))return A.b(o,e)
d=o[e]+l
c=e+1
if(!(c<f))return A.b(o,c)
b=o[c]+l
c=n+1
if(!(c<f))return A.b(o,c)
a=o[c]+m
if(!(a<f))return A.b(o,a)
a0=o[a]+l
c=a+1
if(!(c<f))return A.b(o,c)
a1=o[c]+l
if(!(d<f))return A.b(o,d)
c=a8.aa(0,o[d],k,j,i)
if(!(a0<f))return A.b(o,a0)
a2=k-1
c+=h*(a8.aa(0,o[a0],a2,j,i)-c)
if(!(b<f))return A.b(o,b)
a3=j-1
a4=a8.aa(0,o[b],k,a3,i)
if(!(a1<f))return A.b(o,a1)
c+=g*(a4+h*(a8.aa(0,o[a1],a2,a3,i)-a4)-c)
a4=d+1
if(!(a4<f))return A.b(o,a4)
a5=i-1
a4=a8.aa(0,o[a4],k,j,a5)
a6=a0+1
if(!(a6<f))return A.b(o,a6)
a4+=h*(a8.aa(0,o[a6],a2,j,a5)-a4)
a6=b+1
if(!(a6<f))return A.b(o,a6)
a6=a8.aa(0,o[a6],k,a3,a5)
a7=a1+1
if(!(a7<f))return A.b(o,a7)
a5=a8.aa(0,o[a7],a2,a3,a5)
if(!(p<4000))return A.b(a9,p)
a9[p]=(c+i*i*i*(i*(i*6-15)+10)*(a4+g*(a6+h*(a5-a6)-a4)-c)+1)/2}}}
A.bQ.prototype={
l(a){return"RuinOrientation."+this.b}}
A.e_.prototype={
l(a){return"RoomSizeKind."+this.b}}
A.k2.prototype={
dl(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.D(5)
if(!(a3>=0&&a3<5))return A.b(B.aS,a3)
s=B.aS[a3]
r=a1.bP(B.eB)
q=a1.e5(s)
p=A.oQ(a1.cI(a4,r,new A.i(B.c.w(Math.max(1,q.a-r.a/2)),B.c.w(Math.max(1,q.b-A.cs(r)/2)))))
a3=a4.y
B.a.k(a3,p)
for(o=t.q,n=0;n<2000;){m=new A.i(a2.D(98)+1,a2.D(38)+1)
l=[B.ar,B.ar,B.ar,B.eA]
k=a2.D(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a1.bP(l[k])
if(!a1.f4(a4,r,m)){l=a1.cI(a4,r,m)
B.a.k(a3,new A.a3(l,A.c([],o),A.c([],o),A.j4(l)))}else ++n}for(a2=a1.b,o=a4.d,l=a4.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.i(j,i)
o.G(0,B.a5,j,i)
if(!a2.L(0,h))l.j(0,h,B.b)}g=A.aa(t.j,t.v)
for(a2=a3.length,k=a4.x,f=k.a,e=k.b,d=t.c,c=0;c<a3.length;a3.length===a2||(0,A.A)(a3),++c){b=a3[c]
B.a.k(f,b)
e.j(0,b,A.c([],d))
for(a=J.am(b.a);a.n();)g.j(0,a.gp(a),b)}a1.bG(p,a4,g,k)
for(a2=k.d1(),k=a2.length,c=0;c<a2.length;a2.length===k||(0,A.A)(a2),++c){b=a2[c]
B.a.H(a3,b)
for(f=J.am(b.a);f.n();)l.j(0,f.gp(f),B.b)}A.nS(a3,a4)
for(a2=o.c,a0=0;a0<4000;++a0)B.a.j(a2,a0,B.a5)},
bP(a){var s
switch(a.a){case 0:s=this.a
return new A.dZ(s.D(5)+5,s.D(5)+5)
case 1:s=this.a
return new A.dZ(s.D(10)+9,s.D(10)+9)
case 2:s=this.a
return new A.dZ(s.D(10)+20,s.D(10)+20)}},
e5(a){switch(a.a){case 0:return new A.i(50,10)
case 1:return new A.i(50,30)
case 2:return new A.i(75,20)
case 3:return new A.i(25,20)
case 4:return new A.i(50,20)}},
cI(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.c([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.i(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.k(0,d)
r.j(0,d,f?B.b:B.j)
if(!f)B.a.k(a,d)}return a},
f4(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.i(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.b||n.L(0,i))return!0}return!1}}
A.dZ.prototype={}
A.ka.prototype={
e3(a){var s,r,q=a.a.a===B.a8?B.av:B.fQ
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
dj(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.e3(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.F()>0.6)r.j(0,new A.i(q,p),B.b)
new A.eX(b8).bO(10)
o=A.ju(t.j)
n=new A.fd(b8,A.c([],t.do),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.i(k,j)
if(o.L(0,i)||r.h(0,i)===B.b)continue
n.cM(i)}o=n.b
B.a.aU(o,new A.kb())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.A)(h),++f)r.j(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.j(e,q,B.fU)
B.a.j(o,q,B.j)}$label0$1:for(o=b8.y,e=t.q,d=b8.d,c=0;c<3;){b=s.D(3)+5
a=s.D(3)+5
q=s.D(100-b)
p=s.D(40-a)
for(a0=q-1,a1=q+b,a2=a1+1,a3=p-1,a4=p+a,a5=a4+1;a0<a2;++a0)for(a6=a0>=0,a7=a0<m,a8=a3;a8<a5;++a8){i=new A.i(a0,a8)
if(!(a6&&a8>=0&&a7&&a8<l))continue $label0$1
if(g.h(0,i)!==B.t||r.h(0,i)!==B.j)continue $label0$1}a9=A.c([],e)
b0=A.c([],e)
for(a2=a1-1,a5=a4-1,a0=q;a0<a1;++a0)for(a6=a0-q!==0,a7=a0!==a2,a3=p;a3<a4;++a3){i=new A.i(a0,a3)
if(!a6||!a7||a3-p===0||a3===a5){r.j(0,i,B.b)
B.a.k(a9,i)}else B.a.k(b0,i)
d.j(0,i,B.a5)}b1=new A.kc(b8)
B.a.bN(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.x
break}b3=a9[f]
b4=A.a8(b3,B.n)
b5=A.a8(b3,B.p)
b6=A.a8(b3,B.q)
b7=A.a8(b3,B.o)
if(A.O(b1.$1(b4))&&A.O(b1.$1(b5))){b2=b3
break}if(A.O(b1.$1(b6))&&A.O(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.A)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.j)
g.j(0,b2,B.Q)
B.a.k(o,new A.a3(b0,A.c([],e),A.c([],e),A.j4(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.A)(o),++f)A.dl(o[f],$.lN(),b8)}}
A.kb.prototype={
$2(a,b){var s=t.i8
s.a(a)
return J.an(s.a(b))-J.an(a)},
$S:56}
A.kc.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.j&&s.e.h(0,a)===B.t},
$S:57}
A.kl.prototype={
dH(a){var s=t.jV.a(new A.km(this))
t.Z.a(null)
A.hy(a,"keydown",s,!1,t.mT)
A.hy(a,"mousemove",t.b9.a(new A.kn(this)),!1,t.gD)}}
A.km.prototype={
$1(a){var s,r,q,p,o,n,m
t.mT.a(a)
s=a.key
if(s==null)s=""
r=a.metaKey
q=a.ctrlKey
p=a.shiftKey
o=this.a
n=o.a===B.F?$.oo():$.oi()
m=n.h(0,new A.ck(s,r,p,q))
if(m!=null){a.preventDefault()
o.b.k(0,m)}},
$S:58}
A.kn.prototype={
$1(a){var s,r
t.gD.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
this.a.c.k(0,A.c([s,r],t.n))},
$S:59}
A.ck.prototype={
E(a,b){var s=this
if(b==null)return!1
return b instanceof A.ck&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gA(a){var s=this
return A.fI(s.a,s.b,s.c,s.d)}}
A.T.prototype={
l(a){return"InputCommand."+this.b}}
A.f3.prototype={
l(a){return"ControlMode."+this.b}};(function aliases(){var s=J.a.prototype
s.dz=s.l
s=J.cj.prototype
s.dA=s.l
s=A.aB.prototype
s.dB=s.cS
s.dC=s.cT
s.dE=s.cV
s.dD=s.cU})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_1u
s(J.t.prototype,"gex","k",18)
r(A,"qe","oV",13)
r(A,"qu","pq",6)
r(A,"qv","pr",6)
r(A,"qw","ps",6)
q(A,"nF","qo",0)
p(A,"qy","qi",9)
q(A,"qx","qh",0)
o(A.dd.prototype,"geE",1,0,null,["$1","$0"],["a4","aJ"],30,0,0)
n(A.K.prototype,"gdR","N",9)
p(A,"qC","pX",62)
r(A,"qD","pY",13)
var l
m(l=A.fg.prototype,"geN","bq",29)
m(l,"gcj","e9",15)
p(A,"r1","qn",63)
s(A.fZ.prototype,"gbB","H",36)
m(A.h5.prototype,"gd8","bD",38)
o(A.fl.prototype,"gez",0,1,null,["$2","$1"],["cz","cw"],50,0,0)
p(A,"r7","qF",46)
r(A,"nO","r0",43)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.lX,J.a,J.dr,A.L,A.k4,A.j,A.bp,A.R,A.aq,A.cL,A.cb,A.kg,A.jQ,A.dD,A.eo,A.z,A.js,A.dN,A.kw,A.b1,A.hC,A.ev,A.eu,A.hl,A.dc,A.c0,A.dt,A.e9,A.cz,A.K,A.hm,A.ct,A.bu,A.ep,A.hn,A.e8,A.hs,A.c_,A.i0,A.ez,A.eA,A.hJ,A.ef,A.l,A.e0,A.cd,A.af,A.kx,A.fK,A.e2,A.hz,A.cT,A.X,A.i3,A.h2,A.iT,A.lT,A.r,A.dE,A.kp,A.jP,A.hG,A.e3,A.iL,A.fi,A.cA,A.h,A.a4,A.at,A.cF,A.iw,A.iv,A.ac,A.ap,A.ba,A.bP,A.iM,A.fg,A.eM,A.aP,A.iR,A.a0,A.jC,A.bJ,A.a2,A.dq,A.au,A.ao,A.eI,A.ca,A.cI,A.cO,A.cN,A.f2,A.as,A.bV,A.fq,A.fr,A.i,A.jy,A.jD,A.k0,A.j5,A.f9,A.a6,A.bH,A.J,A.j8,A.i7,A.kj,A.jX,A.d1,A.bO,A.br,A.jR,A.f7,A.Y,A.x,A.ho,A.ic,A.jg,A.k_,A.fE,A.fW,A.P,A.m,A.jA,A.b0,A.kT,A.d4,A.hj,A.h_,A.ko,A.iZ,A.eX,A.je,A.aN,A.cv,A.b3,A.id,A.dF,A.iG,A.e6,A.j3,A.a3,A.fd,A.fl,A.jO,A.ji,A.jS,A.dZ,A.ka,A.kl,A.ck])
q(J.a,[J.dJ,J.dL,J.cj,J.t,J.cR,J.ci,A.fx,A.cr,A.e,A.ix,A.eT,A.bk,A.I,A.hr,A.aY,A.iW,A.bM,A.ht,A.dB,A.hv,A.iX,A.k,A.hA,A.aA,A.jh,A.hE,A.jw,A.jB,A.hK,A.hL,A.aC,A.hM,A.hO,A.aE,A.hS,A.hV,A.aF,A.hW,A.aG,A.hZ,A.ah,A.i5,A.ke,A.aH,A.i8,A.kf,A.ki,A.ih,A.ij,A.il,A.io,A.iq,A.aQ,A.hH,A.aT,A.hQ,A.jT,A.i1,A.aU,A.ia,A.b7,A.eP,A.hp,A.eW,A.ff,A.fO,A.d0,A.bv,A.hb,A.hg])
q(J.cj,[J.fM,J.d6,J.bn])
r(J.jo,J.t)
q(J.cR,[J.dK,J.fm])
q(A.L,[A.cS,A.bW,A.fn,A.hd,A.fT,A.ds,A.hx,A.fG,A.bi,A.hf,A.hc,A.bt,A.f1,A.f5])
q(A.j,[A.p,A.cm,A.aJ,A.dI,A.bd,A.kX])
q(A.p,[A.aR,A.dM])
q(A.aR,[A.e4,A.bq])
r(A.dC,A.cm)
q(A.R,[A.dP,A.e7])
q(A.cL,[A.dy,A.a7])
q(A.cb,[A.jd,A.eZ,A.f_,A.h4,A.jq,A.le,A.lg,A.kt,A.ks,A.kZ,A.ja,A.kD,A.kL,A.k8,A.kR,A.kN,A.jz,A.ky,A.lv,A.lw,A.iD,A.iE,A.ld,A.jc,A.j2,A.j6,A.jL,A.iB,A.iA,A.jV,A.k5,A.li,A.k6,A.jH,A.jF,A.l4,A.j_,A.jf,A.iI,A.iJ,A.iH,A.jn,A.jj,A.jk,A.jl,A.jm,A.kc,A.km,A.kn])
r(A.dV,A.bW)
q(A.h4,[A.h0,A.cJ])
r(A.hk,A.ds)
r(A.dO,A.z)
r(A.aB,A.dO)
q(A.f_,[A.jp,A.lf,A.l_,A.l3,A.jb,A.kE,A.jt,A.jx,A.jJ,A.jK,A.k1,A.k7,A.kr,A.iF,A.jI,A.jG,A.iQ,A.iO,A.iP,A.lu,A.ln,A.lr,A.lm,A.lo,A.ls,A.lt,A.lq,A.lp,A.ll,A.lB,A.lA,A.kb])
r(A.cV,A.cr)
q(A.cV,[A.eh,A.ej])
r(A.ei,A.eh)
r(A.cq,A.ei)
r(A.ek,A.ej)
r(A.dS,A.ek)
r(A.dR,A.cq)
q(A.dS,[A.fy,A.fz,A.fA,A.fB,A.fC,A.cW,A.dT])
r(A.ew,A.hx)
q(A.eZ,[A.ku,A.kv,A.kV,A.kU,A.kz,A.kH,A.kF,A.kB,A.kG,A.kA,A.kK,A.kJ,A.kI,A.k9,A.kS,A.kP,A.l2,A.kQ,A.lF,A.lD,A.lE,A.lz,A.lx,A.ly,A.lI,A.lG,A.lH,A.lL,A.lJ,A.lK,A.l7,A.l5,A.l6,A.jM,A.iC,A.jW,A.iK])
r(A.er,A.dI)
q(A.e9,[A.aW,A.dd])
r(A.d9,A.ep)
q(A.ct,[A.eq,A.eb])
r(A.bY,A.eq)
r(A.da,A.e8)
r(A.cw,A.hs)
r(A.bf,A.c_)
r(A.hU,A.ez)
q(A.aB,[A.kO,A.ed])
r(A.el,A.eA)
r(A.ee,A.el)
q(A.bi,[A.d_,A.fj])
q(A.e,[A.w,A.fc,A.ch,A.av,A.em,A.aw,A.ab,A.es,A.hh,A.d8,A.H,A.dw,A.eR])
q(A.w,[A.a5,A.b9,A.bl])
q(A.a5,[A.q,A.n])
q(A.q,[A.eN,A.eO,A.eU,A.c8,A.fe,A.cQ,A.cp,A.fU])
r(A.iS,A.bk)
r(A.cM,A.hr)
q(A.aY,[A.iU,A.iV])
r(A.hu,A.ht)
r(A.dA,A.hu)
r(A.hw,A.hv)
r(A.f8,A.hw)
r(A.az,A.eT)
r(A.hB,A.hA)
r(A.fb,A.hB)
r(A.hF,A.hE)
r(A.cg,A.hF)
r(A.dH,A.ch)
r(A.be,A.k)
q(A.be,[A.bo,A.aD])
r(A.ft,A.hK)
r(A.fu,A.hL)
r(A.hN,A.hM)
r(A.fv,A.hN)
r(A.hP,A.hO)
r(A.dU,A.hP)
r(A.hT,A.hS)
r(A.fN,A.hT)
r(A.fS,A.hV)
r(A.en,A.em)
r(A.fX,A.en)
r(A.hX,A.hW)
r(A.fY,A.hX)
r(A.h1,A.hZ)
r(A.i6,A.i5)
r(A.h6,A.i6)
r(A.et,A.es)
r(A.h7,A.et)
r(A.i9,A.i8)
r(A.h9,A.i9)
r(A.d7,A.cp)
r(A.ii,A.ih)
r(A.hq,A.ii)
r(A.ea,A.dB)
r(A.ik,A.ij)
r(A.hD,A.ik)
r(A.im,A.il)
r(A.eg,A.im)
r(A.ip,A.io)
r(A.hY,A.ip)
r(A.ir,A.iq)
r(A.i4,A.ir)
r(A.cx,A.eb)
r(A.ec,A.bu)
r(A.kq,A.kp)
r(A.hI,A.hH)
r(A.fo,A.hI)
r(A.hR,A.hQ)
r(A.fH,A.hR)
r(A.i2,A.i1)
r(A.h3,A.i2)
r(A.ib,A.ia)
r(A.ha,A.ib)
q(A.H,[A.bj,A.cP])
r(A.dv,A.bj)
q(A.dw,[A.c7,A.fJ])
r(A.eQ,A.hp)
q(A.ap,[A.bT,A.bU,A.cK,A.bR,A.fQ,A.dY,A.fR,A.bG])
r(A.Z,A.h)
q(A.Z,[A.co,A.cn])
q(A.kx,[A.e1,A.bm,A.fh,A.bK,A.bL,A.aV,A.cc,A.dp,A.cH,A.fL,A.ce,A.d3,A.f0,A.cu,A.ai,A.cl,A.b8,A.jv,A.a1,A.cU,A.c9,A.aZ,A.d5,A.eL,A.bQ,A.e_,A.T,A.f3])
q(A.k0,[A.iY,A.j1,A.j9,A.fs,A.k3,A.fZ,A.kd,A.h5,A.j7,A.kk])
q(A.a6,[A.fD,A.dX,A.aS,A.d2,A.fp,A.e5,A.du,A.dz,A.eS,A.he,A.dW,A.fP])
q(A.d4,[A.dQ,A.eV])
q(A.je,[A.iN,A.k2])
q(A.aN,[A.hi,A.aM,A.cY])
q(A.hi,[A.fF,A.eY,A.eK,A.f4,A.dn,A.cX])
s(A.eh,A.l)
s(A.ei,A.aq)
s(A.ej,A.l)
s(A.ek,A.aq)
s(A.d9,A.hn)
s(A.eA,A.e0)
s(A.hr,A.iT)
s(A.ht,A.l)
s(A.hu,A.r)
s(A.hv,A.l)
s(A.hw,A.r)
s(A.hA,A.l)
s(A.hB,A.r)
s(A.hE,A.l)
s(A.hF,A.r)
s(A.hK,A.z)
s(A.hL,A.z)
s(A.hM,A.l)
s(A.hN,A.r)
s(A.hO,A.l)
s(A.hP,A.r)
s(A.hS,A.l)
s(A.hT,A.r)
s(A.hV,A.z)
s(A.em,A.l)
s(A.en,A.r)
s(A.hW,A.l)
s(A.hX,A.r)
s(A.hZ,A.z)
s(A.i5,A.l)
s(A.i6,A.r)
s(A.es,A.l)
s(A.et,A.r)
s(A.i8,A.l)
s(A.i9,A.r)
s(A.ih,A.l)
s(A.ii,A.r)
s(A.ij,A.l)
s(A.ik,A.r)
s(A.il,A.l)
s(A.im,A.r)
s(A.io,A.l)
s(A.ip,A.r)
s(A.iq,A.l)
s(A.ir,A.r)
s(A.hH,A.l)
s(A.hI,A.r)
s(A.hQ,A.l)
s(A.hR,A.r)
s(A.i1,A.l)
s(A.i2,A.r)
s(A.ia,A.l)
s(A.ib,A.r)
s(A.hp,A.z)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{f:"int",M:"double",N:"num",u:"String",D:"bool",X:"Null",o:"List"},mangledNames:{},types:["~()","~(i,dF)","P()","ba()","o<aP>()","~(u,@)","~(~())","X()","~(@)","~(v,b2)","~(bH)","f(f,f)","D(f,f)","f(v?)","X(@)","~(af)","bV(f)","~(k)","~(v?)","X(v,b2)","~(u,u)","K<@>(@)","@(@,@)","~(b7)","~(bM)","D(aP)","X(~())","D(v?)","@(@)","ar<~>(T)","~([v?])","D(lS)","~(f,@)","@(@,u)","~(h8)","ar<~>(k)","~(P)","X(bv)","~(b0)","X(@,b2)","D(@)","D(bP)","f(i)","~(N)","~(@,@)","f(b3,b3)","f(v?,v?)","D(a3)","a3()","~(i)","~(v[f])","M(f)","D(a0)","D(a2)","D(au)","D(ao)","f(o<i>,o<i>)","D(i)","~(bo)","~(aD)","~(v?,v?)","@(u)","D(v?,v?)","f(P,P)","f(a3,a3)","~(o<M>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.pK(v.typeUniverse,JSON.parse('{"fM":"cj","d6":"cj","bn":"cj","r9":"k","rs":"k","rb":"H","rg":"bj","r8":"n","rt":"n","ra":"e","rE":"e","rH":"e","rd":"q","rI":"w","rr":"w","ru":"bl","rG":"aD","rV":"ab","rf":"be","re":"b9","rK":"b9","rw":"ch","rv":"cg","rh":"I","rj":"ah","rc":"cp","rD":"cq","rC":"cr","dJ":{"D":[]},"dL":{"X":[]},"t":{"o":["1"],"p":["1"],"j":["1"]},"jo":{"t":["1"],"o":["1"],"p":["1"],"j":["1"]},"dr":{"R":["1"]},"cR":{"M":[],"N":[],"ae":["N"]},"dK":{"M":[],"f":[],"N":[],"ae":["N"]},"fm":{"M":[],"N":[],"ae":["N"]},"ci":{"u":[],"ae":["u"],"mY":[]},"cS":{"L":[]},"p":{"j":["1"]},"aR":{"p":["1"],"j":["1"]},"e4":{"aR":["1"],"p":["1"],"j":["1"],"j.E":"1","aR.E":"1"},"bp":{"R":["1"]},"cm":{"j":["2"],"j.E":"2"},"dC":{"cm":["1","2"],"p":["2"],"j":["2"],"j.E":"2"},"dP":{"R":["2"]},"bq":{"aR":["2"],"p":["2"],"j":["2"],"j.E":"2","aR.E":"2"},"aJ":{"j":["1"],"j.E":"1"},"e7":{"R":["1"]},"cL":{"W":["1","2"]},"dy":{"cL":["1","2"],"W":["1","2"]},"a7":{"cL":["1","2"],"W":["1","2"]},"dV":{"bW":[],"L":[]},"fn":{"L":[]},"hd":{"L":[]},"eo":{"b2":[]},"cb":{"cf":[]},"eZ":{"cf":[]},"f_":{"cf":[]},"h4":{"cf":[]},"h0":{"cf":[]},"cJ":{"cf":[]},"fT":{"L":[]},"hk":{"L":[]},"aB":{"z":["1","2"],"jr":["1","2"],"W":["1","2"],"z.K":"1","z.V":"2"},"dM":{"p":["1"],"j":["1"],"j.E":"1"},"dN":{"R":["1"]},"fx":{"mH":[]},"cr":{"aI":[]},"cV":{"y":["1"],"aI":[]},"cq":{"l":["M"],"y":["M"],"o":["M"],"p":["M"],"aI":[],"j":["M"],"aq":["M"],"l.E":"M"},"dS":{"l":["f"],"y":["f"],"o":["f"],"p":["f"],"aI":[],"j":["f"],"aq":["f"]},"dR":{"l":["M"],"lV":[],"y":["M"],"o":["M"],"p":["M"],"aI":[],"j":["M"],"aq":["M"],"l.E":"M"},"fy":{"l":["f"],"y":["f"],"o":["f"],"p":["f"],"aI":[],"j":["f"],"aq":["f"],"l.E":"f"},"fz":{"l":["f"],"y":["f"],"o":["f"],"p":["f"],"aI":[],"j":["f"],"aq":["f"],"l.E":"f"},"fA":{"l":["f"],"y":["f"],"o":["f"],"p":["f"],"aI":[],"j":["f"],"aq":["f"],"l.E":"f"},"fB":{"l":["f"],"y":["f"],"o":["f"],"p":["f"],"aI":[],"j":["f"],"aq":["f"],"l.E":"f"},"fC":{"l":["f"],"y":["f"],"o":["f"],"p":["f"],"aI":[],"j":["f"],"aq":["f"],"l.E":"f"},"cW":{"l":["f"],"pm":[],"y":["f"],"o":["f"],"p":["f"],"aI":[],"j":["f"],"aq":["f"],"l.E":"f"},"dT":{"l":["f"],"pn":[],"y":["f"],"o":["f"],"p":["f"],"aI":[],"j":["f"],"aq":["f"],"l.E":"f"},"ev":{"nc":[]},"hx":{"L":[]},"ew":{"bW":[],"L":[]},"K":{"ar":["1"]},"eu":{"h8":[]},"c0":{"R":["1"]},"er":{"j":["1"],"j.E":"1"},"dt":{"L":[]},"aW":{"e9":["1"]},"dd":{"e9":["1"]},"ep":{"n7":["1"],"nk":["1"],"cy":["1"]},"d9":{"hn":["1"],"ep":["1"],"n7":["1"],"nk":["1"],"cy":["1"]},"bY":{"eq":["1"],"ct":["1"]},"da":{"e8":["1"],"bu":["1"],"cy":["1"]},"e8":{"bu":["1"],"cy":["1"]},"eq":{"ct":["1"]},"cw":{"hs":["1"]},"bf":{"c_":["1"]},"ez":{"ne":[]},"hU":{"ez":[],"ne":[]},"kO":{"aB":["1","2"],"z":["1","2"],"jr":["1","2"],"W":["1","2"],"z.K":"1","z.V":"2"},"ed":{"aB":["1","2"],"z":["1","2"],"jr":["1","2"],"W":["1","2"],"z.K":"1","z.V":"2"},"ee":{"e0":["1"],"n3":["1"],"p":["1"],"j":["1"]},"ef":{"R":["1"]},"dI":{"j":["1"]},"dO":{"z":["1","2"],"W":["1","2"]},"z":{"W":["1","2"]},"el":{"e0":["1"],"n3":["1"],"p":["1"],"j":["1"]},"cd":{"ae":["cd"]},"M":{"N":[],"ae":["N"]},"af":{"ae":["af"]},"f":{"N":[],"ae":["N"]},"o":{"p":["1"],"j":["1"]},"N":{"ae":["N"]},"u":{"ae":["u"],"mY":[]},"ds":{"L":[]},"bW":{"L":[]},"fG":{"L":[]},"bi":{"L":[]},"d_":{"L":[]},"fj":{"L":[]},"hf":{"L":[]},"hc":{"L":[]},"bt":{"L":[]},"f1":{"L":[]},"fK":{"L":[]},"e2":{"L":[]},"f5":{"L":[]},"i3":{"b2":[]},"bo":{"k":[]},"aD":{"k":[]},"w":{"e":[]},"av":{"e":[]},"aw":{"e":[]},"ab":{"e":[]},"q":{"a5":[],"w":[],"e":[]},"eN":{"a5":[],"w":[],"e":[]},"eO":{"a5":[],"w":[],"e":[]},"eU":{"a5":[],"w":[],"e":[]},"c8":{"a5":[],"w":[],"e":[]},"b9":{"w":[],"e":[]},"bl":{"w":[],"e":[]},"dA":{"l":["bc<N>"],"r":["bc<N>"],"o":["bc<N>"],"y":["bc<N>"],"p":["bc<N>"],"j":["bc<N>"],"r.E":"bc<N>","l.E":"bc<N>"},"dB":{"bc":["N"]},"f8":{"l":["u"],"r":["u"],"o":["u"],"y":["u"],"p":["u"],"j":["u"],"r.E":"u","l.E":"u"},"a5":{"w":[],"e":[]},"fb":{"l":["az"],"r":["az"],"o":["az"],"y":["az"],"p":["az"],"j":["az"],"r.E":"az","l.E":"az"},"fc":{"e":[]},"fe":{"a5":[],"w":[],"e":[]},"cg":{"l":["w"],"r":["w"],"o":["w"],"y":["w"],"p":["w"],"j":["w"],"r.E":"w","l.E":"w"},"dH":{"e":[]},"ch":{"e":[]},"cQ":{"a5":[],"w":[],"e":[]},"cp":{"a5":[],"w":[],"e":[]},"ft":{"z":["u","@"],"W":["u","@"],"z.K":"u","z.V":"@"},"fu":{"z":["u","@"],"W":["u","@"],"z.K":"u","z.V":"@"},"fv":{"l":["aC"],"r":["aC"],"o":["aC"],"y":["aC"],"p":["aC"],"j":["aC"],"r.E":"aC","l.E":"aC"},"dU":{"l":["w"],"r":["w"],"o":["w"],"y":["w"],"p":["w"],"j":["w"],"r.E":"w","l.E":"w"},"fN":{"l":["aE"],"r":["aE"],"o":["aE"],"y":["aE"],"p":["aE"],"j":["aE"],"r.E":"aE","l.E":"aE"},"fS":{"z":["u","@"],"W":["u","@"],"z.K":"u","z.V":"@"},"fU":{"a5":[],"w":[],"e":[]},"fX":{"l":["av"],"r":["av"],"o":["av"],"y":["av"],"e":[],"p":["av"],"j":["av"],"r.E":"av","l.E":"av"},"fY":{"l":["aF"],"r":["aF"],"o":["aF"],"y":["aF"],"p":["aF"],"j":["aF"],"r.E":"aF","l.E":"aF"},"h1":{"z":["u","u"],"W":["u","u"],"z.K":"u","z.V":"u"},"h6":{"l":["ab"],"r":["ab"],"o":["ab"],"y":["ab"],"p":["ab"],"j":["ab"],"r.E":"ab","l.E":"ab"},"h7":{"l":["aw"],"r":["aw"],"o":["aw"],"y":["aw"],"e":[],"p":["aw"],"j":["aw"],"r.E":"aw","l.E":"aw"},"h9":{"l":["aH"],"r":["aH"],"o":["aH"],"y":["aH"],"p":["aH"],"j":["aH"],"r.E":"aH","l.E":"aH"},"be":{"k":[]},"d7":{"a5":[],"w":[],"e":[]},"hh":{"e":[]},"d8":{"e":[]},"hq":{"l":["I"],"r":["I"],"o":["I"],"y":["I"],"p":["I"],"j":["I"],"r.E":"I","l.E":"I"},"ea":{"bc":["N"]},"hD":{"l":["aA?"],"r":["aA?"],"o":["aA?"],"y":["aA?"],"p":["aA?"],"j":["aA?"],"r.E":"aA?","l.E":"aA?"},"eg":{"l":["w"],"r":["w"],"o":["w"],"y":["w"],"p":["w"],"j":["w"],"r.E":"w","l.E":"w"},"hY":{"l":["aG"],"r":["aG"],"o":["aG"],"y":["aG"],"p":["aG"],"j":["aG"],"r.E":"aG","l.E":"aG"},"i4":{"l":["ah"],"r":["ah"],"o":["ah"],"y":["ah"],"p":["ah"],"j":["ah"],"r.E":"ah","l.E":"ah"},"eb":{"ct":["1"]},"cx":{"eb":["1"],"ct":["1"]},"ec":{"bu":["1"]},"dE":{"R":["1"]},"hG":{"mZ":[]},"fo":{"l":["aQ"],"r":["aQ"],"o":["aQ"],"p":["aQ"],"j":["aQ"],"r.E":"aQ","l.E":"aQ"},"fH":{"l":["aT"],"r":["aT"],"o":["aT"],"p":["aT"],"j":["aT"],"r.E":"aT","l.E":"aT"},"h3":{"l":["u"],"r":["u"],"o":["u"],"p":["u"],"j":["u"],"r.E":"u","l.E":"u"},"n":{"a5":[],"w":[],"e":[]},"ha":{"l":["aU"],"r":["aU"],"o":["aU"],"p":["aU"],"j":["aU"],"r.E":"aU","l.E":"aU"},"dv":{"H":[],"e":[]},"c7":{"e":[]},"H":{"e":[]},"eQ":{"z":["u","@"],"W":["u","@"],"z.K":"u","z.V":"@"},"bj":{"H":[],"e":[]},"eR":{"e":[]},"dw":{"e":[]},"cP":{"H":[],"e":[]},"fJ":{"e":[]},"bd":{"mI":[],"j":["u"],"j.E":"u"},"e3":{"R":["u"]},"kX":{"j":["1"],"j.E":"1"},"cA":{"R":["1"]},"cF":{"dG":[]},"ba":{"ap":[]},"bT":{"ap":[]},"bU":{"ap":[]},"cK":{"ap":[]},"bR":{"ap":[]},"fQ":{"ap":[]},"dY":{"ap":[]},"fR":{"ap":[]},"bG":{"ap":[]},"Z":{"h":[]},"co":{"Z":["f"],"h":[],"Z.T":"f"},"cn":{"Z":["f"],"h":[],"Z.T":"f"},"bV":{"dG":[]},"fr":{"dG":[]},"fD":{"a6":[]},"dX":{"a6":[]},"aS":{"a6":[]},"d2":{"a6":[]},"fp":{"a6":[]},"e5":{"a6":[]},"du":{"a6":[]},"dz":{"a6":[]},"eS":{"a6":[]},"he":{"a6":[]},"dW":{"a6":[]},"fP":{"a6":[]},"br":{"ae":["br"]},"fW":{"pi":[]},"dQ":{"d4":[]},"eV":{"d4":[]},"hi":{"aN":["i"]},"aM":{"aN":["1"]},"cY":{"aN":["1"]},"fF":{"aN":["i"]},"eY":{"aN":["i"]},"eK":{"aN":["i"]},"f4":{"aN":["i"]},"dn":{"aN":["i"]},"cX":{"aN":["i"]},"id":{"cv":[]},"lV":{"o":["M"],"p":["M"],"j":["M"],"aI":[]}}'))
A.pJ(v.typeUniverse,JSON.parse('{"p":1,"cV":1,"dI":1,"dO":2,"el":1,"eA":1}'))
var u={o:" 0\x10000\xa0\x80\x10@P`p`p\xb1 0\x10000\xa0\x80\x10@P`p`p\xb0 0\x10000\xa0\x80\x11@P`p`p\xb0 1\x10011\xa0\x80\x10@P`p`p\xb0 1\x10111\xa1\x81\x10AQaqaq\xb0 1\x10011\xa0\x80\x10@Qapaq\xb0 1\x10011\xa0\x80\x10@Paq`p\xb0 1\x10011\xa0\x80\x10@P`q`p\xb0 \x91\x100\x811\xa0\x80\x10@P`p`p\xb0 1\x10011\xa0\x81\x10@P`p`p\xb0 1\x100111\x80\x10@P`p`p\xb0!1\x11111\xa1\x81\x11AQaqaq\xb1",z:'""""""""""""""""DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""3333s3#7333333339433333333333333CDDDDDDDDDDDDDDDDDDDDDDC433DDDDD4DDDDDDDDDDDDDDDDDD3CU33333333333333333333333333334T5333333333333333333333333333CCD3D33CD533333333333333333333333TEDTET53U5UE3333C33333333333333333333333333333CETUTDT5333333333333333333333333SUUUUUEUDDDDD43333433333333333333333333ET533E3333SDD3U3U4333343333C4333333333333CSD33343333333433333333333333333SUUUEDDDTE4333SDDSUSU\x94333343333C43333333333333333s333333333337333333333333wwwww73sw33sww7swwwwwss33373733s33333w33333\xa3\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xba\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xcb\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xec\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee>33333\xb3\xbb\xbb\xbb\xbb\xbb\xbb\xbb;3\xc3\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc334343C33333333333SET333333333333333EDTETD433333333CD33333333333333CD33333CDD4333333333333333333333333CDTDDDCTE43C4CD3C333333333333333D3C33333\x99\x99\x9933333DDDDD42333333333333333333CDDD4333333333333333333333333DDDD433334333C53333333333333333333333C33TEDCSUUU433333333S533333333333333333333333333333CD4DDDDD3D5333333333333333333333333333CSEUCUSE4333D33333C43333333333333CDDD9DDD3DCD433333333CDCDDDDDDEDDD33433C3E433#""""\x82" """"""""2333333333333333CDUUDU53SEUUUD43SDD3U3U4333C43333C43333333333333SE43CD33333333DD33333CDDDDDDDDDD3333333343333333B!233333333333#"""333333s3CD533333333333333333333333333CESEU3333333333333333333DDDD433333CD2333333333333333333333333""""23333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDD33333333333333333333333333333CDDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333SUDDDDUDT43333333333343333333333333333333333333333333333333333TEDDTTEETD333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CUDD3UUDE43333333333333D33333333333333333333333333333333333333333UEDDDTEE43333333333333333333333333333333333333333333333333333CEUDDDE33333333333333333333333333333333333333333333333333CDUDDEDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333D#"2333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CSUUUUUUUUUUUUUUUUUUUUUUUUUUU333CD4333333333333333333333333333333333333333333333333333333""""""33EDDCTSE3333333333D33333333333DDDDDDD\x94DDDDDDDDDDDDDDDDDDDDDDDDDDDDDCDDDDDDDD3DDD4DCDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CD4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDDDD333333333333333333333333333333333333333333333333333333333333333333333333333333333333333s73333s33333333333""""""""3333333373s333333333333333333333333333333CTDDDTU5D4DD333C433333D33333333333333DU433333333333333333333DDDUDUD3333S3333333333333333334333333333333s733333s33333333333CD4DDDD4D4DD4333333333sww73333333w3333333333sw3333s33333337333333sw333333333s733333333333333333UTEUS433333333C433333333333333C433333333333334443SUE4333333333333CDDDDDDDD4333333DDDDDT533333\xa3\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa3SDDDDUUT5DDD43333C43333333333333333C33333333333EEDDDCC3DDDDUUUDDDDD3T5333333333333333333333333333CSDDD433E533333333333333333333333333DDDDDDD4333333333333333333333333333CD53333333333333333333333UEDTE4\x933333333\x933333333333333333333333333D433333333333333333CDDEDDD43333333S5333333333333333333333C333333D533333333333333333333333SUDDDDT5\x9933CD433333333333333333333333333333333333333333333333UEDUTD33343333333333333333333333333333333333333333333333333333333333333333333333333333333CUEDDD43333333333DU333333333333333333333333333C4TTU5S5SU3333C33333U3DDD43DD4333333333333333333333333333333333333333333333333333333333333333333333DDDDDDD533333333333333333333333DDDTTU43333333333333333333333333333DDD733333s373ss33w7733333ww733333333333ss33333333333333333333333333333ww3333333333333333333333333333wwww33333www33333333333333333333wwww333333333333333wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww333333wwwwwwwwwwwwwwwwwwwwwww7wwwwwswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww733333333333333333333333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333333333333333333333333333333333333333333333333333333333swwwww7333333333333333333333333333333333333333333wwwwwwwwwwwwwwwwwwwww7wwwwwwswwwwwwwwwwwwwwwwwwwww73333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333333w7333333333333333733333333333333333333333333333sww733333s7333333s3wwwww333333333wwwwwwwwwwwwwwwwwwwwwwwwwwwwgffffffffffff6wwwwwww73333s33333333337swwwwsw73333wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwDDDDDDDDDDDDDDDDDDDDDDDD33333333DDDDDDDD33333333DDDDDDDDDDDDDDDD43333333DC44333333333333333333333333333SUDDDDTD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333UED4CTUE3S33333333333333DDDDD33333333333333333333DDD\x95DD333343333DDDUD43333333333333333333\x93\x99\x99IDDDDDDE4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDDDDDDDDDDDDDDDDDDDDDDDDDD33DDDDDDDDDDDDDDDDDDDDDDDDD33334333333C33333333333DD4DDDDDDD43333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333TD43EDD""""DDDD3DDD433333333333333CD43333333333333333333333333333333333333333333333333333333333333333333333333CD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333C33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333433333333333333333333333333333333333333333333333333333333333333333333333333DD4333333333333333333333333333333333333333333333333333333333333333333EDDDCDDT43333333333333333333333333333333333333333CDDDDDDDDDD4EDDDETD3333333333333333333333333333333333333333333333333333333333333DDD3CC4DDD\x94433333333333333333333333333333333SUUC4UT433333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333DU333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDD333333333333333333333333333333333333333333333333333333CDDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDC433DD33333333333333333333D43C3333333333333333333333333333333333333333333333333333333333333333333333333333333333C4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333334EDDDD3\x03',h:"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",q:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",p:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",l:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",e:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\n\nout vec4 outColor;\n\nvoid main() {\n    vec2 tex_position = gl_FragCoord.xy / vec2(100, 40);\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n    float source_strength = u_source_strength + sin(u_time * 2.0);\n    float dist = distance(gl_FragCoord.xy, (u_source_position + vec2(0.5, 0.5))) / 2.0;\n    if (dist > source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, source_strength, dist);\n    outColor = vec4(u_source_color.rgb, scale);\n}\n",A:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // back textures is already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 front = texture(u_light_texture, tex_position);\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  // front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",a:"\u0e3b\u1cdb\u05d0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b \u389c\u102b\u102b\u102b\u102b\u489c\u102b\u102b\u102b\u0620\u392b\u0c26\u0efa\u102b\u0dcb\u0601\u3e7e\u228f\u0c77\u24d3\u40b2\u102b\u1d51\u0f6f\u2681\u0698\u0851\u0d63\u0be6\u0d63\u1d2a\u06d5\u0e9b\u0771\u075c\u2b98\u23fe\u2707\u0da1\u2a52\u08eb\u0d13\u0ce3\u2712\u0c62\u4d9d\u0b97\u25cb\u2b21\u0659\u42c5\u0baa\u0ec5\u088d\u102b\u09b9\u09d9\u09f9\u0a21\u102b\u102b\u102b\u102b\u102b\u40ae\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0b5f\u25b1\u23c1\u07f5\u0fe2\u102b\u269e\u102b\u0e5b\u102b\u102b\u102b\u2427\u26c9\u275a\u102b\u2b5c\u0fad\u0b31\u0789\u08ab\u102b\u102b\u0dfb\u102b\u102b\u102b\u1d74\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0f2f\u2372\u102b\u38ec\u090f\u102b\u2501\u102b\u102b\u102b\u102b\u102b\u24a9\u102b\u35c8\u0939\u102b\u102b\u102b\u23b5\u102b\u102b\u2345\u2c27\u3457\u2d9d\u3491\u2d9d\u0979\u2be5\u252c\u102b\u102b\u102b\u102b\u102b\u233b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2566\u23a2\u102b\u102b\u102b\u102b\u102b\u409c\u102b\u428c\u102b\u3db9\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2bac\u102b\u16c9\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2c0e\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0d24\u4c95\u4c83\u102b\u102b\u102b\u102b\u0b0c\u102b\u07bb\u2609\u0c43\u2641\u071f\u2483\u2443\u0cb1\u06e1\u0811\u102b\u102b\u102b\u2583\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a95\u0ace\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u42ad\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u38bc\u102b\u102b\u1cdb\u102b\u102b\u4c95\u1cea\u40ce\u102b\u49ce\u1f6f\u2752\u1506\u393f\u449f\u102b\u102b\u102b\u102b\u102b\u0ff2\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u113b\u191a\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u1869\u102b\u102b\u102b\u102b\u3e89\u102b\u3bd9\u102b\u1da7\u102b\u47cf\u102b\u34a1\u305d\u2c56\u2d9d\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\x00\u01f0\u01f0\u01f0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b"}
var t=(function rtii(){var s=A.aL
return{bm:s("@<~>"),mm:s("eM"),A:s("aM<i>"),bB:s("a0"),lE:s("ao"),u:s("dt"),bD:s("b7"),lo:s("mH"),jQ:s("c8"),gN:s("ca"),m1:s("mI"),n6:s("ae<v?>"),d5:s("I"),cs:s("cd"),dA:s("bl"),jW:s("bM"),L:s("af"),ox:s("lS"),gt:s("p<@>"),v:s("a3"),O:s("f9"),b:s("ce"),fz:s("L"),U:s("k"),fq:s("J"),et:s("az"),C:s("lV"),gY:s("cf"),g:s("ar<@>"),m:s("a7<f,h>"),eT:s("a4<cl>"),f5:s("a4<cu>"),eN:s("a4<ai>"),h:s("a4<bV>"),ba:s("a4<d3>"),de:s("a4<M>"),oQ:s("a4<aP?>"),hQ:s("cQ"),E:s("T"),jC:s("bO"),lZ:s("aP"),e7:s("j<@>"),c7:s("t<cF>"),p:s("t<cH>"),G:s("t<Y>"),a:s("t<ap>"),V:s("t<b8>"),fy:s("t<bH>"),Q:s("t<f2>"),X:s("t<aZ>"),pl:s("t<lS>"),c:s("t<a3>"),w:s("t<a6>"),iw:s("t<ar<~>>"),ow:s("t<dG>"),ge:s("t<T>"),Y:s("t<bO>"),I:s("t<aP>"),lB:s("t<bm>"),fu:s("t<o<bP>>"),do:s("t<o<i>>"),lR:s("t<as>"),ku:s("t<bP>"),hf:s("t<v>"),d:s("t<fL>"),q:s("t<i>"),ff:s("t<b0>"),fk:s("t<d1>"),r:s("t<P>"),fF:s("t<h_>"),s:s("t<u>"),oe:s("t<e6>"),c5:s("t<d4>"),o:s("t<x>"),B:s("t<aV>"),D:s("t<cv>"),bu:s("t<b3>"),n:s("t<M>"),dG:s("t<@>"),t:s("t<f>"),g2:s("t<N>"),ev:s("t<~(af)>"),T:s("dL"),dY:s("bn"),dX:s("y<@>"),mT:s("bo"),kT:s("aQ"),k:s("o<cF>"),mw:s("o<a3>"),i8:s("o<i>"),bd:s("o<M>"),gM:s("cl"),cM:s("W<i,a3>"),ea:s("W<u,@>"),gX:s("cn"),e:s("co"),li:s("a2"),ib:s("aC"),ee:s("bP"),gD:s("aD"),fh:s("w"),P:s("X"),ai:s("aT"),K:s("v"),mn:s("at"),gm:s("cY<i>"),p6:s("br"),d8:s("aE"),j:s("i"),o5:s("mZ"),kB:s("au"),mx:s("bc<N>"),e8:s("b0"),fm:s("av"),cA:s("aF"),hH:s("aG"),hd:s("P"),l:s("b2"),N:s("u"),lv:s("ah"),dt:s("cu"),dy:s("ai"),dQ:s("aw"),gJ:s("ab"),lJ:s("bv"),W:s("bV"),ns:s("d3"),hU:s("h8"),ki:s("aH"),hk:s("aU"),fH:s("e6"),ha:s("nc"),bC:s("bW"),jv:s("aI"),cx:s("d6"),eL:s("d7"),kL:s("aJ<a0>"),b1:s("aJ<ao>"),eo:s("aJ<a2>"),au:s("aJ<au>"),c1:s("cv"),l7:s("hj"),oJ:s("aW<b7>"),fB:s("aW<bv>"),ou:s("aW<~>"),aN:s("ho"),n4:s("b3"),bz:s("cx<k>"),og:s("K<b7>"),aa:s("K<bv>"),f:s("K<@>"),hy:s("K<f>"),cU:s("K<~>"),gL:s("i_<v?>"),iF:s("dd<~>"),im:s("i7"),o3:s("ic"),k4:s("D"),ei:s("D(a0)"),g9:s("D(ao)"),eU:s("D(a2)"),iW:s("D(v)"),hZ:s("D(au)"),i:s("M"),z:s("@"),mY:s("@()"),y:s("@(v)"),ng:s("@(v,b2)"),p1:s("@(@,@)"),S:s("f"),eK:s("0&*"),_:s("v*"),gK:s("ar<X>?"),ef:s("aA?"),R:s("aP?"),iD:s("v?"),F:s("cz<@,@>?"),nF:s("hJ?"),du:s("@(k)?"),ld:s("f(b3,b3)?"),Z:s("~()?"),p0:s("~(b7)?"),lW:s("~(bM)?"),oV:s("~(k)?"),jV:s("~(bo)?"),b9:s("~(aD)?"),cZ:s("N"),H:s("~"),M:s("~()"),nD:s("~([~])"),x:s("~(af)"),nt:s("~(a6)"),i6:s("~(v)"),fQ:s("~(v,b2)"),gS:s("~(u,u)"),J:s("~(u,@)"),my:s("~(h8)"),hv:s("~(N)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aE=A.dv.prototype
B.bM=A.c7.prototype
B.bN=A.eP.prototype
B.ab=A.c8.prototype
B.dv=A.cM.prototype
B.dE=A.cP.prototype
B.dF=A.dH.prototype
B.dV=J.a.prototype
B.a=J.t.prototype
B.dX=J.dJ.prototype
B.d=J.dK.prototype
B.c=J.cR.prototype
B.i=J.ci.prototype
B.dY=J.bn.prototype
B.b6=A.dR.prototype
B.ev=A.cW.prototype
B.O=A.dT.prototype
B.ba=J.fM.prototype
B.e=A.d0.prototype
B.az=J.d6.prototype
B.bj=A.d8.prototype
B.be=new A.ai(5,"table")
B.bk=new A.dn(B.be)
B.a7=new A.eL(0,"center")
B.bm=new A.eL(1,"rightTopAnchor")
B.aA=new A.dp(2,"rounds")
B.T=new A.eY()
B.aw=new A.ai(11,"column")
B.b8=new A.cX(B.aw)
B.bx=new A.aM(B.T,B.b8,t.A)
B.Q=new A.ai(0,"door")
B.b7=new A.cX(B.Q)
B.bs=new A.aM(B.bx,B.b7,t.A)
B.bW=new A.fF()
B.bt=new A.aM(B.bs,B.bW,t.A)
B.a9=new A.eK()
B.bv=new A.aM(B.a9,B.b8,t.A)
B.bw=new A.aM(B.bv,B.b7,t.A)
B.bE=new A.a0("",0,0,0,99)
B.a8=new A.b8(0,"surface")
B.A=new A.b8(1,"caves")
B.z=new A.b8(2,"deepCaves")
B.S=new A.b8(3,"facility")
B.B=new A.b8(4,"ruins")
B.bO=new A.b8(5,"village")
B.bP=new A.b8(6,"snow")
B.aa=new A.f4()
B.aF=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bQ=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.bV=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.bR=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bS=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.bU=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.bT=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.aG=function(hooks) { return hooks; }

B.aH=new A.jO()
B.bX=new A.fK()
B.C=new A.k4()
B.m=new A.hG()
B.k=new A.hU()
B.bY=new A.i3()
B.ac=new A.f0(2,"ignoreAgentsAndUnlockedDoors")
B.ad=new A.f0(3,"normal")
B.c2=new A.h(1660944383)
B.c3=new A.h(3707764736)
B.v=new A.h(4278190080)
B.d7=new A.h(4294278144)
B.ae=new A.h(4294967295)
B.F=new A.f3(0,"menu")
B.U=new A.f3(1,"game")
B.aK=new A.bL(5,"d20")
B.ai=new A.aZ(0,"se")
B.aj=new A.aZ(1,"ne")
B.ak=new A.aZ(2,"sw")
B.al=new A.aZ(3,"nw")
B.n=new A.aZ(4,"n")
B.o=new A.aZ(5,"e")
B.p=new A.aZ(6,"s")
B.q=new A.aZ(7,"w")
B.dB=new A.af(0)
B.dC=new A.af(25e4)
B.dD=new A.af(8000)
B.G=new A.ce(0,"primaryMelee")
B.r=new A.ce(1,"primaryRanged")
B.H=new A.ce(2,"armor")
B.aL=new A.T(0,"enter")
B.dG=new A.T(1,"north")
B.dH=new A.T(10,"activate")
B.dI=new A.T(12,"equipment")
B.dJ=new A.T(19,"autoexplore")
B.dK=new A.T(2,"east")
B.dL=new A.T(20,"reload")
B.dM=new A.T(21,"toggleStats")
B.dN=new A.T(22,"showMenu")
B.dO=new A.T(23,"prevItem")
B.dP=new A.T(24,"nextItem")
B.dQ=new A.T(3,"south")
B.dR=new A.T(4,"west")
B.dS=new A.T(6,"fire")
B.dT=new A.T(8,"look")
B.dU=new A.T(9,"reset")
B.am=new A.a1(0,"none")
B.an=new A.a1(1,"stairsUp")
B.W=new A.a1(10,"tree")
B.X=new A.a1(11,"bookshelf")
B.I=new A.a1(12,"mechanism")
B.Y=new A.a1(13,"activatedMechanism")
B.Z=new A.a1(14,"chest")
B.a_=new A.a1(15,"stalagmite")
B.a0=new A.a1(16,"column")
B.J=new A.a1(2,"stairsDown")
B.w=new A.a1(3,"door")
B.K=new A.a1(4,"openDoor")
B.L=new A.a1(5,"lockedDoor")
B.M=new A.a1(6,"grass")
B.N=new A.a1(7,"torch")
B.a1=new A.a1(8,"table")
B.a2=new A.a1(9,"chair")
B.aM=new A.bm(0,"melee")
B.aN=new A.bm(1,"ranged")
B.aO=new A.bm(2,"armor")
B.aP=new A.bm(3,"other")
B.dW=new A.bm(5,"corpse")
B.aQ=new A.bm(6,"ammo")
B.dZ=new A.jv(1,"water")
B.aB=new A.cH(0,"light")
B.aC=new A.cH(1,"heavy")
B.aD=new A.cH(2,"powered")
B.hh=A.c(s([B.aB,B.aC,B.aD]),t.p)
B.by=new A.ao(1)
B.bz=new A.ao(1)
B.bA=new A.ao(1)
B.bB=new A.ao(1)
B.hf=A.c(s([B.aD]),t.p)
B.bC=new A.ao(2)
B.hj=A.c(s([B.aB,B.aC]),t.p)
B.bD=new A.ao(2)
B.e_=A.c(s([B.by,B.bz,B.bA,B.bB,B.bC,B.bD]),A.aL("t<ao>"))
B.aR=A.c(s([1,2,4,8]),t.t)
B.e0=A.c(s([24,36]),t.n)
B.eC=new A.bQ(0,"north")
B.eD=new A.bQ(1,"south")
B.eE=new A.bQ(2,"east")
B.eF=new A.bQ(3,"west")
B.eG=new A.bQ(4,"center")
B.aS=A.c(s([B.eC,B.eD,B.eE,B.eF,B.eG]),A.aL("t<bQ>"))
B.aT=A.c(s([B.n,B.p]),t.X)
B.aU=A.c(s([B.o,B.q]),t.X)
B.ao=A.c(s([B.ai,B.aj,B.ak,B.al,B.n,B.o,B.p,B.q]),t.X)
B.y=A.c(s([-1,3,-1,-1,3,-1]),t.n)
B.a3=A.c(s([]),t.Q)
B.e5=A.c(s([]),t.X)
B.h=A.c(s([]),t.w)
B.e4=A.c(s([]),A.aL("t<X>"))
B.bK=new A.a0("Second Skin",1,1,2,5)
B.bL=new A.a0("Estex Suit I",1,0,1,5)
B.bH=new A.a0("Flight Suit",1,0,1,6)
B.bI=new A.a0("Freebooter Armor I",2,2,3,4)
B.bF=new A.a0("Kasatha microcord I",2,1,3,3)
B.bG=new A.a0("Ceremonial Plate",1,1,3,2)
B.bJ=new A.a0("Golemforged Plating",1,2,5,0)
B.e7=A.c(s([B.bK,B.bL,B.bH,B.bI,B.bF,B.bG,B.bJ]),A.aL("t<a0>"))
B.hd=new A.fh(0,"oneHand")
B.ag=new A.bK(5,"bludgeoning")
B.h8=new A.cc(0,"none")
B.h1=new A.bJ()
B.V=new A.bL(2,"d6")
B.bg=new A.aV(0,"archaic")
B.R=new A.aV(2,"analog")
B.eb=A.c(s([B.bg,B.R]),t.B)
B.em=new A.a2(B.ag,1,B.V,0,"Club",B.eb)
B.ah=new A.bL(1,"d4")
B.fX=new A.aV(3,"operative")
B.aV=A.c(s([B.R,B.fX]),t.B)
B.ek=new A.a2(B.ag,1,B.ah,1,"Tactical Baton",B.aV)
B.dy=new A.bK(7,"slashing")
B.eq=new A.a2(B.dy,1,B.ah,1,"Survival Knife",B.aV)
B.he=new A.fh(1,"twoHand")
B.aI=new A.bK(6,"piercing")
B.bh=new A.aV(4,"block")
B.e2=A.c(s([B.R,B.bh]),t.B)
B.ep=new A.a2(B.aI,1,B.V,1,"Tactical Spear",B.e2)
B.af=new A.bK(3,"fire")
B.hb=new A.cc(4,"burn")
B.h2=new A.bJ()
B.bi=new A.aV(5,"powered")
B.aW=A.c(s([B.bi]),t.B)
B.h7=new A.jC()
B.el=new A.a2(B.af,2,B.ah,7,"Flame Sword",B.aW)
B.ha=new A.cc(11,"wound")
B.h3=new A.bJ()
B.aJ=new A.bL(3,"d8")
B.en=new A.a2(B.af,2,B.aJ,9,"Plasma Sword",B.aW)
B.dx=new A.bK(2,"electricity")
B.h9=new A.cc(1,"arc")
B.h4=new A.bJ()
B.dA=new A.bL(4,"d12")
B.fY=new A.aV(6,"stun")
B.e1=A.c(s([B.fY,B.bi]),t.B)
B.er=new A.a2(B.dx,1,B.dA,8,"Shock Staff",B.e1)
B.e8=A.c(s([B.em,B.ek,B.eq,B.ep,B.el,B.en,B.er]),A.aL("t<a2>"))
B.dw=new A.bK(1,"cold")
B.hc=new A.cc(9,"staggered")
B.h5=new A.bJ()
B.bo=new A.dp(1,"charge")
B.bq=new A.dq(B.bo,20)
B.ey=new A.au("Zero pistol",B.dw,B.V,5,B.bq,60)
B.hi=A.c(s([B.R]),t.B)
B.br=new A.dq(B.aA,9)
B.P=new A.au("Tac Pistol",B.aI,B.V,1,B.br,30)
B.dz=new A.bL(0,"d3")
B.h6=new A.bJ()
B.fZ=new A.aV(7,"line")
B.h_=new A.aV(8,"unwieldy")
B.hg=A.c(s([B.fZ,B.h_]),t.B)
B.bn=new A.dp(0,"petro")
B.bp=new A.dq(B.bn,20)
B.ez=new A.au("Flame Rifle",B.af,B.aJ,2,B.bp,25)
B.e9=A.c(s([B.ey,B.P,B.ez]),A.aL("t<au>"))
B.bZ=new A.c9(0,"north")
B.c_=new A.c9(1,"south")
B.c0=new A.c9(2,"east")
B.c1=new A.c9(3,"west")
B.ea=A.c(s([B.bZ,B.c_,B.c0,B.c1]),A.aL("t<c9>"))
B.aX=new A.cl(0,"lockedDoor")
B.ec=new A.cl(3,"doorMechanism")
B.aY=new A.cl(4,"none")
B.db=new A.h(4294638330)
B.d9=new A.h(4294309365)
B.d2=new A.h(4293848814)
B.cX=new A.h(4292927712)
B.cV=new A.h(4292269782)
B.cQ=new A.h(4290624957)
B.cI=new A.h(4288585374)
B.cA=new A.h(4285887861)
B.cv=new A.h(4284572001)
B.cl=new A.h(4282532418)
B.ch=new A.h(4281348144)
B.cb=new A.h(4280361249)
B.ap=new A.a7([50,B.db,100,B.d9,200,B.d2,300,B.cX,350,B.cV,400,B.cQ,500,B.cI,600,B.cA,700,B.cv,800,B.cl,850,B.ch,900,B.cb],t.m)
B.d0=new A.h(4293457385)
B.cS=new A.h(4291356361)
B.cK=new A.h(4289058471)
B.cD=new A.h(4286695300)
B.cx=new A.h(4284922730)
B.cq=new A.h(4283215696)
B.cn=new A.h(4282622023)
B.cj=new A.h(4281896508)
B.cg=new A.h(4281236786)
B.c9=new A.h(4279983648)
B.aZ=new A.a7([50,B.d0,100,B.cS,200,B.cK,300,B.cD,400,B.cx,500,B.cq,600,B.cn,700,B.cj,800,B.cg,900,B.c9],t.m)
B.ds=new A.h(4294966759)
B.dr=new A.h(4294965700)
B.dq=new A.h(4294964637)
B.dp=new A.h(4294963574)
B.dn=new A.h(4294962776)
B.dl=new A.h(4294961979)
B.dd=new A.h(4294826037)
B.dc=new A.h(4294688813)
B.da=new A.h(4294551589)
B.d8=new A.h(4294278935)
B.b_=new A.a7([50,B.ds,100,B.dr,200,B.dq,300,B.dp,400,B.dn,500,B.dl,600,B.dd,700,B.dc,800,B.da,900,B.d8],t.m)
B.d5=new A.h(4293913577)
B.cW=new A.h(4292332744)
B.cP=new A.h(4290554532)
B.cJ=new A.h(4288776319)
B.cF=new A.h(4287458915)
B.cC=new A.h(4286141768)
B.cz=new A.h(4285353025)
B.ct=new A.h(4284301367)
B.cr=new A.h(4283315246)
B.ck=new A.h(4282263331)
B.b0=new A.a7([50,B.d5,100,B.cW,200,B.cP,300,B.cJ,400,B.cF,500,B.cC,600,B.cz,700,B.ct,800,B.cr,900,B.ck],t.m)
B.cY=new A.h(4293128957)
B.cO=new A.h(4290502395)
B.cH=new A.h(4287679225)
B.cw=new A.h(4284790262)
B.cm=new A.h(4282557941)
B.cc=new A.h(4280391411)
B.ca=new A.h(4280191205)
B.c8=new A.h(4279858898)
B.c7=new A.h(4279592384)
B.c6=new A.h(4279060385)
B.b1=new A.a7([50,B.cY,100,B.cO,200,B.cH,300,B.cw,400,B.cm,500,B.cc,600,B.ca,700,B.c8,800,B.c7,900,B.c6],t.m)
B.d1=new A.h(4293718001)
B.cT=new A.h(4291811548)
B.cL=new A.h(4289773253)
B.cG=new A.h(4287669422)
B.cB=new A.h(4286091420)
B.cu=new A.h(4284513675)
B.cs=new A.h(4283723386)
B.cp=new A.h(4282735204)
B.ci=new A.h(4281812815)
B.cd=new A.h(4280693304)
B.b2=new A.a7([50,B.d1,100,B.cT,200,B.cL,300,B.cG,400,B.cB,500,B.cu,600,B.cs,700,B.cp,800,B.ci,900,B.cd],t.m)
B.e6=A.c(s([]),t.s)
B.hk=new A.dy(0,{},B.e6,A.aL("dy<u,@>"))
B.di=new A.h(4294955392)
B.dg=new A.h(4294945600)
B.df=new A.h(4294938880)
B.de=new A.h(4294929664)
B.eg=new A.a7([100,B.di,200,B.dg,400,B.df,700,B.de],t.m)
B.aq=new A.a7([B.H,null,B.G,null,B.r,null],A.aL("a7<ce,aP?>"))
B.cE=new A.h(4286755327)
B.co=new A.h(4282682111)
B.cf=new A.h(4280908287)
B.ce=new A.h(4280902399)
B.ee=new A.a7([100,B.cE,200,B.co,400,B.cf,700,B.ce],t.m)
B.a4=new A.cn(B.ee,4282682111)
B.cN=new A.h(4290377418)
B.cy=new A.h(4285132974)
B.c5=new A.h(4278249078)
B.c4=new A.h(4278241363)
B.ef=new A.a7([100,B.cN,200,B.cy,400,B.c5,700,B.c4],t.m)
B.ei=new A.cn(B.ef,4285132974)
B.du=new A.h(4294967181)
B.dt=new A.h(4294967040)
B.dk=new A.h(4294961664)
B.dj=new A.h(4294956544)
B.eh=new A.a7([100,B.du,200,B.dt,400,B.dk,700,B.dj],t.m)
B.ej=new A.cn(B.eh,4294967040)
B.b3=new A.co(B.b_,4294961979)
B.dm=new A.h(4294962158)
B.dh=new A.h(4294954450)
B.d4=new A.h(4293892762)
B.d_=new A.h(4293227379)
B.d3=new A.h(4293874512)
B.d6=new A.h(4294198070)
B.cZ=new A.h(4293212469)
B.cU=new A.h(4292030255)
B.cR=new A.h(4291176488)
B.cM=new A.h(4290190364)
B.ed=new A.a7([50,B.dm,100,B.dh,200,B.d4,300,B.d_,400,B.d3,500,B.d6,600,B.cZ,700,B.cU,800,B.cR,900,B.cM],t.m)
B.D=new A.co(B.ed,4294198070)
B.b4=new A.co(B.b1,4280391411)
B.fW=new A.aV(1,"nonlethal")
B.e3=A.c(s([B.bg,B.fW,B.R]),t.B)
B.eo=new A.a2(B.ag,1,B.dz,0,"Fists",B.e3)
B.b5=new A.cU(0,"wildBoar")
B.es=new A.cU(1,"zyborgMelee")
B.et=new A.cU(2,"zyborgRanged")
B.eu=new A.cU(3,"caveScanner")
B.ew=new A.cY(B.a9,t.gm)
B.ay=new A.ai(7,"bookshelf")
B.bl=new A.dn(B.ay)
B.bu=new A.aM(B.a9,B.bl,t.A)
B.ex=new A.cY(B.bu,t.gm)
B.b9=new A.fL(2,"elementalAffinity")
B.x=new A.i(0,0)
B.ar=new A.e_(0,"small")
B.eA=new A.e_(1,"medium")
B.eB=new A.e_(2,"large")
B.as=new A.e1(0,"melee")
B.at=new A.e1(1,"ranged")
B.au=new A.e1(2,"armor")
B.eH=new A.m(0,0)
B.eI=new A.m(0,1)
B.eJ=new A.m(0,3)
B.eK=new A.m(0,5)
B.eL=new A.m(0,7)
B.bb=new A.m(10,11)
B.eM=new A.m(10,3)
B.eN=new A.m(10,4)
B.eO=new A.m(10,5)
B.eP=new A.m(10,6)
B.eQ=new A.m(10,7)
B.eR=new A.m(11,11)
B.bc=new A.m(11,13)
B.eS=new A.m(11,4)
B.eT=new A.m(11,6)
B.eU=new A.m(12,11)
B.eV=new A.m(12,4)
B.eW=new A.m(12,6)
B.eX=new A.m(13,0)
B.bd=new A.m(13,12)
B.eY=new A.m(13,2)
B.eZ=new A.m(13,4)
B.f_=new A.m(13,6)
B.f0=new A.m(14,4)
B.f1=new A.m(14,6)
B.f2=new A.m(15,2)
B.f3=new A.m(15,4)
B.f4=new A.m(15,6)
B.f5=new A.m(1,3)
B.f6=new A.m(1,4)
B.f7=new A.m(1,5)
B.f8=new A.m(1,6)
B.f9=new A.m(1,7)
B.fa=new A.m(2,3)
B.fb=new A.m(2,4)
B.fc=new A.m(2,5)
B.fd=new A.m(2,6)
B.fe=new A.m(2,7)
B.ff=new A.m(3,3)
B.fg=new A.m(3,4)
B.fh=new A.m(3,5)
B.fi=new A.m(3,6)
B.fj=new A.m(3,7)
B.fk=new A.m(4,3)
B.fl=new A.m(4,4)
B.fm=new A.m(4,5)
B.fn=new A.m(4,6)
B.fo=new A.m(4,7)
B.fp=new A.m(5,3)
B.fq=new A.m(5,4)
B.fr=new A.m(5,5)
B.fs=new A.m(5,6)
B.ft=new A.m(5,7)
B.fu=new A.m(6,3)
B.fv=new A.m(6,4)
B.fw=new A.m(6,5)
B.fx=new A.m(6,6)
B.fy=new A.m(6,7)
B.fz=new A.m(7,3)
B.fA=new A.m(7,4)
B.fB=new A.m(7,5)
B.fC=new A.m(7,6)
B.fD=new A.m(7,7)
B.fE=new A.m(8,12)
B.fF=new A.m(8,3)
B.fG=new A.m(8,4)
B.fH=new A.m(8,5)
B.fI=new A.m(8,6)
B.fJ=new A.m(8,7)
B.fK=new A.m(9,12)
B.fL=new A.m(9,3)
B.fM=new A.m(9,4)
B.fN=new A.m(9,5)
B.fO=new A.m(9,6)
B.fP=new A.m(9,7)
B.E=new A.bd("")
B.av=new A.cu(0,"dirt")
B.a5=new A.cu(2,"metal")
B.fQ=new A.cu(4,"snow")
B.fR=new A.ai(10,"stalagmite")
B.a6=new A.ai(2,"light")
B.t=new A.ai(3,"none")
B.fS=new A.ai(4,"chair")
B.ax=new A.ai(6,"chest")
B.fT=new A.ai(8,"mechanism")
B.fU=new A.ai(9,"tree")
B.j=new A.d3(0,"floor")
B.b=new A.d3(1,"wall")
B.fV=A.r6("v")
B.u=new A.d5(0,"float_1")
B.f=new A.d5(1,"float_2")
B.bf=new A.d5(3,"float_4")
B.l=new A.d5(4,"texture_1")
B.h0=new A.dc(null,2)})();(function staticFields(){$.kM=null
$.mF=null
$.mE=null
$.nH=null
$.nD=null
$.nQ=null
$.l9=null
$.lh=null
$.mg=null
$.dg=null
$.eB=null
$.eC=null
$.mb=!1
$.F=B.k
$.aK=A.c([],t.hf)
$.mN=0
$.mC=null
$.pT=A.b_(["0",B.eJ,"1",B.f5,"2",B.fa,"3",B.ff,"4",B.fk,"5",B.fp,"6",B.fu,"7",B.fz,"8",B.fF,"9",B.fL," ",B.eH,"-",B.eY,"a",B.f8,"b",B.fd,"c",B.fi,"d",B.fn,"e",B.fs,"f",B.fx,"g",B.fC,"h",B.fI,"i",B.fO,"j",B.eP,"k",B.eT,"l",B.eW,"m",B.f_,"n",B.f1,"o",B.f4,"p",B.eL,"q",B.f9,"r",B.fe,"s",B.fj,"t",B.fo,"u",B.ft,"v",B.fy,"w",B.fD,"x",B.fJ,"y",B.fP,"z",B.eQ,"A",B.f6,"B",B.fb,"C",B.fg,"D",B.fl,"E",B.fq,"F",B.fv,"G",B.fA,"H",B.fG,"I",B.fM,"J",B.eN,"K",B.eS,"L",B.eV,"M",B.eZ,"N",B.f0,"O",B.f3,"P",B.eK,"Q",B.f7,"R",B.fc,"S",B.fh,"T",B.fm,"U",B.fr,"V",B.fw,"W",B.fB,"X",B.fH,"Y",B.fN,"Z",B.eO,"/",B.f2,":",B.eM],t.N,A.aL("m"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"rk","nW",()=>A.qK("_$dart_dartClosure"))
s($,"rL","o5",()=>A.bw(A.kh({
toString:function(){return"$receiver$"}})))
s($,"rM","o6",()=>A.bw(A.kh({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"rN","o7",()=>A.bw(A.kh(null)))
s($,"rO","o8",()=>A.bw(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"rR","ob",()=>A.bw(A.kh(void 0)))
s($,"rS","oc",()=>A.bw(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"rQ","oa",()=>A.bw(A.nd(null)))
s($,"rP","o9",()=>A.bw(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"rU","oe",()=>A.bw(A.nd(void 0)))
s($,"rT","od",()=>A.bw(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"rW","mm",()=>A.pp())
s($,"t6","lM",()=>A.lk(B.fV))
s($,"ri","nV",()=>({}))
s($,"ro","mk",()=>B.i.bk(A.lR(),"Opera",0))
s($,"rn","nZ",()=>!A.O($.mk())&&B.i.bk(A.lR(),"Trident/",0))
s($,"rm","nY",()=>B.i.bk(A.lR(),"Firefox",0))
s($,"rl","nX",()=>"-"+$.o_()+"-")
s($,"rp","o_",()=>{if(A.O($.nY()))var r="moz"
else if($.nZ())r="ms"
else r=A.O($.mk())?"o":"webkit"
return r})
s($,"rB","o4",()=>A.c([$.ow(),$.ox(),$.oy(),$.oh(),$.ou()],t.ku))
s($,"tC","ow",()=>A.fw(A.eJ(4,6,8,4,4,8),new A.lD(),A.c([B.a8],t.V),"death_1.mp3",new A.lE(),B.b5,0,4,"Wild Boar",new A.lF()))
s($,"tz","ou",()=>A.fw(A.eJ(4,6,8,4,4,10),new A.lx(),A.c([B.bP],t.V),"death_1.mp3",new A.ly(),B.b5,2,4,"Snow Bear",new A.lz()))
s($,"tD","ox",()=>A.fw(A.eJ(4,8,8,4,4,10),new A.lG(),A.c([B.A,B.z,B.S,B.B],t.V),"monster_scream_1.mp3",new A.lH(),B.es,1,6,"Zyborg",new A.lI()))
s($,"tE","oy",()=>A.fw(A.eJ(4,8,10,4,4,10),new A.lJ(),A.c([B.A,B.z,B.S,B.B],t.V),"monster_scream_1.mp3",new A.lK(),B.et,2,6,"Zyborg Ranged",new A.lL()))
s($,"tb","oh",()=>A.fw(A.eJ(4,6,12,6,4,6),new A.l5(),A.c([B.A,B.z,B.S,B.B],t.V),null,new A.l6(),B.eu,3,6,"Cave Scanner",new A.l7()))
s($,"tA","lO",()=>A.jE(B.a7,B.a4,!0,A.c(["New Game"],t.s),"The Something of Something",t.N))
s($,"te","mp",()=>{var r=A.c([A.bX(B.f,"u_resolution"),A.bX(B.u,"u_time"),A.bX(B.f,"u_offset"),A.bX(B.f,"u_origin")],t.o)
return A.aO(A.c([A.mB(35044,A.mV(B.y),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\nuniform vec2 u_origin;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  float dist = distance(snapped_position, (u_origin + vec2(0.5, 0.5)) * vec2(24.0, 36.0)) / 50.0;\n  float rand = -1.0 + random(relative_position) / 2.0;\n  float scale_rate = 0.8 * (u_time);\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(249.0 / 255.0, 168.0 / 255.0, 37.0 / 255.0, scale);\n}\n",r,u.h)})
s($,"tk","om",()=>{var r=A.c([A.bX(B.f,"u_resolution"),A.bX(B.u,"u_time"),A.bX(B.f,"u_offset"),A.bX(B.f,"u_source"),A.bX(B.f,"u_target")],t.o)
return A.aO(A.c([A.mB(35044,A.mV(B.y),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nuniform vec2 u_source;\nuniform vec2 u_target;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 p0 = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  vec2 p1 = (u_source + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n  vec2 p2 = (u_target + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n\n  if ((p1.x != p2.x) && (p0.x < p1.x && p0.x < p2.x) || (p0.x > p1.x && p0.x > p2.x)) {\n    discard;\n    return;\n  }\n  if ((p1.y != p2.y) && (p0.y < p1.y && p0.y < p2.y) || (p0.y > p1.y && p0.y > p2.y)) {\n    discard;\n    return;\n  }\n\n  float dist = abs( (p2.x - p1.x) * (p1.y - p0.y) - (p1.x - p0.x) * (p2.y - p1.y) ) / sqrt( pow(p2.x - p1.x, 2.0) + pow(p2.y - p1.y, 2.0) );\n  float rand = random(relative_position);\n  float scale_rate = 1.5;\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = 1.0 - smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(0.1, 0.2, 1.0, 0.8 * scale - u_time);\n}\n",r,u.h)})
s($,"rF","eG",()=>new A.jR())
s($,"rq","o0",()=>A.m2())
s($,"rx","ml",()=>A.m1(A.bI(4278780675),A.bI(4279308561),A.bI(4280361249)))
s($,"ry","o1",()=>A.m1(A.bI(4279898637),A.bI(4281017118),A.bI(4282858034)))
s($,"rA","o3",()=>A.m1(A.bI(4279765786),A.bI(4280096038),A.bI(4282463311)))
s($,"rz","o2",()=>$.ml())
s($,"t7","eH",()=>A.m2())
s($,"t9","og",()=>A.m2())
s($,"tx","mu",()=>A.bx(B.T,new A.lu(),!0))
s($,"tq","ms",()=>A.bx(B.bk,new A.ln(),!0))
s($,"tu","dm",()=>A.bx(A.mz(B.aa,A.mX(B.a6),t.j),new A.lr(),!0))
s($,"tp","mr",()=>A.bx(A.mz(B.T,A.mX(B.a6),t.j),new A.lm(),!0))
s($,"tr","oq",()=>A.bx(B.T,new A.lo(),!0))
s($,"tv","mt",()=>A.bx(B.aa,new A.ls(),!0))
s($,"tw","os",()=>A.bx(B.ew,new A.lt(),!1))
s($,"ts","iu",()=>A.bx(B.bt,new A.lq(),!0))
s($,"tt","or",()=>A.bx(B.bw,new A.lp(),!0))
s($,"to","op",()=>A.bx(B.ex,new A.ll(),!0))
s($,"tn","lN",()=>{var r=$.mu(),q=$.ms()
return A.c([r,q,q,$.dm(),$.iu()],t.D)})
s($,"tl","on",()=>{var r=$.op()
return A.c([r,r,r,r,r,$.dm(),$.mu(),$.ms(),$.iu()],t.D)})
s($,"tj","ol",()=>{var r=$.dm(),q=$.iu()
return A.c([r,r,r,q,q,q],t.D)})
s($,"th","oj",()=>{var r,q=$.dm(),p=$.mr()
p=A.c([q,q,q,p,p,p,p,p,p],t.D)
for(r=0;r<500;++r)p.push($.os())
return p})
s($,"ti","ok",()=>{var r,q=$.dm(),p=$.mr()
p=A.c([q,q,q,p,p,p],t.D)
for(r=0;r<10;++r)p.push($.iu())
for(r=0;r<10;++r)p.push($.or())
return p})
s($,"tB","ov",()=>A.c([$.oq(),$.dm()],t.D))
s($,"t8","of",()=>A.p6(A.cB(A.c([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t))))
s($,"tf","oi",()=>A.b_([A.a9("ArrowUp",!1,!1,!1),B.dG,A.a9("ArrowDown",!1,!1,!1),B.dQ,A.a9("ArrowRight",!1,!1,!1),B.dK,A.a9("ArrowLeft",!1,!1,!1),B.dR,A.a9("q",!1,!1,!1),B.dS,A.a9(" ",!1,!1,!1),B.dH,A.a9("0",!1,!1,!1),B.dJ,A.a9("l",!1,!1,!1),B.dT,A.a9("Escape",!1,!1,!1),B.dN,A.a9("r",!1,!1,!1),B.dL,A.a9("e",!1,!1,!1),B.dI,A.a9("p",!1,!1,!1),B.dM],A.aL("ck"),t.E))
s($,"tm","oo",()=>A.b_([A.a9("ArrowUp",!1,!1,!1),B.dO,A.a9("ArrowDown",!1,!1,!1),B.dP,A.a9("Enter",!1,!1,!1),B.aL,A.a9(" ",!1,!1,!1),B.aL,A.a9("Escape",!1,!1,!1),B.dU],A.aL("ck"),t.E))
s($,"ta","mn",()=>t.jQ.a(A.qH().querySelector("#glCanvas")))
s($,"tg","mq",()=>A.aL("d0").a(B.ab.dm($.mn(),"webgl2")))
s($,"ty","ot",()=>new A.j5())
s($,"td","mo",()=>A.oR($.mn(),$.mq(),$.ot()))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.fx,DataView:A.cr,ArrayBufferView:A.cr,Float64Array:A.cq,Float32Array:A.dR,Int16Array:A.fy,Int32Array:A.fz,Int8Array:A.fA,Uint16Array:A.fB,Uint32Array:A.fC,Uint8ClampedArray:A.cW,CanvasPixelArray:A.cW,Uint8Array:A.dT,HTMLBRElement:A.q,HTMLBaseElement:A.q,HTMLButtonElement:A.q,HTMLContentElement:A.q,HTMLDListElement:A.q,HTMLDataElement:A.q,HTMLDataListElement:A.q,HTMLDetailsElement:A.q,HTMLDialogElement:A.q,HTMLDivElement:A.q,HTMLEmbedElement:A.q,HTMLFieldSetElement:A.q,HTMLHRElement:A.q,HTMLHeadElement:A.q,HTMLHeadingElement:A.q,HTMLHtmlElement:A.q,HTMLIFrameElement:A.q,HTMLInputElement:A.q,HTMLLIElement:A.q,HTMLLabelElement:A.q,HTMLLegendElement:A.q,HTMLLinkElement:A.q,HTMLMapElement:A.q,HTMLMenuElement:A.q,HTMLMetaElement:A.q,HTMLMeterElement:A.q,HTMLModElement:A.q,HTMLOListElement:A.q,HTMLObjectElement:A.q,HTMLOptGroupElement:A.q,HTMLOptionElement:A.q,HTMLOutputElement:A.q,HTMLParagraphElement:A.q,HTMLParamElement:A.q,HTMLPictureElement:A.q,HTMLPreElement:A.q,HTMLProgressElement:A.q,HTMLQuoteElement:A.q,HTMLScriptElement:A.q,HTMLShadowElement:A.q,HTMLSlotElement:A.q,HTMLSourceElement:A.q,HTMLSpanElement:A.q,HTMLStyleElement:A.q,HTMLTableCaptionElement:A.q,HTMLTableCellElement:A.q,HTMLTableDataCellElement:A.q,HTMLTableHeaderCellElement:A.q,HTMLTableColElement:A.q,HTMLTableElement:A.q,HTMLTableRowElement:A.q,HTMLTableSectionElement:A.q,HTMLTemplateElement:A.q,HTMLTextAreaElement:A.q,HTMLTimeElement:A.q,HTMLTitleElement:A.q,HTMLTrackElement:A.q,HTMLUListElement:A.q,HTMLUnknownElement:A.q,HTMLDirectoryElement:A.q,HTMLFontElement:A.q,HTMLFrameElement:A.q,HTMLFrameSetElement:A.q,HTMLMarqueeElement:A.q,HTMLElement:A.q,AccessibleNodeList:A.ix,HTMLAnchorElement:A.eN,HTMLAreaElement:A.eO,Blob:A.eT,HTMLBodyElement:A.eU,HTMLCanvasElement:A.c8,CDATASection:A.b9,CharacterData:A.b9,Comment:A.b9,ProcessingInstruction:A.b9,Text:A.b9,CSSPerspective:A.iS,CSSCharsetRule:A.I,CSSConditionRule:A.I,CSSFontFaceRule:A.I,CSSGroupingRule:A.I,CSSImportRule:A.I,CSSKeyframeRule:A.I,MozCSSKeyframeRule:A.I,WebKitCSSKeyframeRule:A.I,CSSKeyframesRule:A.I,MozCSSKeyframesRule:A.I,WebKitCSSKeyframesRule:A.I,CSSMediaRule:A.I,CSSNamespaceRule:A.I,CSSPageRule:A.I,CSSRule:A.I,CSSStyleRule:A.I,CSSSupportsRule:A.I,CSSViewportRule:A.I,CSSStyleDeclaration:A.cM,MSStyleCSSProperties:A.cM,CSS2Properties:A.cM,CSSImageValue:A.aY,CSSKeywordValue:A.aY,CSSNumericValue:A.aY,CSSPositionValue:A.aY,CSSResourceValue:A.aY,CSSUnitValue:A.aY,CSSURLImageValue:A.aY,CSSStyleValue:A.aY,CSSMatrixComponent:A.bk,CSSRotation:A.bk,CSSScale:A.bk,CSSSkew:A.bk,CSSTranslation:A.bk,CSSTransformComponent:A.bk,CSSTransformValue:A.iU,CSSUnparsedValue:A.iV,DataTransferItemList:A.iW,Document:A.bl,HTMLDocument:A.bl,XMLDocument:A.bl,DOMException:A.bM,ClientRectList:A.dA,DOMRectList:A.dA,DOMRectReadOnly:A.dB,DOMStringList:A.f8,DOMTokenList:A.iX,Element:A.a5,AbortPaymentEvent:A.k,AnimationEvent:A.k,AnimationPlaybackEvent:A.k,ApplicationCacheErrorEvent:A.k,BackgroundFetchClickEvent:A.k,BackgroundFetchEvent:A.k,BackgroundFetchFailEvent:A.k,BackgroundFetchedEvent:A.k,BeforeInstallPromptEvent:A.k,BeforeUnloadEvent:A.k,BlobEvent:A.k,CanMakePaymentEvent:A.k,ClipboardEvent:A.k,CloseEvent:A.k,CustomEvent:A.k,DeviceMotionEvent:A.k,DeviceOrientationEvent:A.k,ErrorEvent:A.k,ExtendableEvent:A.k,ExtendableMessageEvent:A.k,FetchEvent:A.k,FontFaceSetLoadEvent:A.k,ForeignFetchEvent:A.k,GamepadEvent:A.k,HashChangeEvent:A.k,InstallEvent:A.k,MediaEncryptedEvent:A.k,MediaKeyMessageEvent:A.k,MediaQueryListEvent:A.k,MediaStreamEvent:A.k,MediaStreamTrackEvent:A.k,MessageEvent:A.k,MIDIConnectionEvent:A.k,MIDIMessageEvent:A.k,MutationEvent:A.k,NotificationEvent:A.k,PageTransitionEvent:A.k,PaymentRequestEvent:A.k,PaymentRequestUpdateEvent:A.k,PopStateEvent:A.k,PresentationConnectionAvailableEvent:A.k,PresentationConnectionCloseEvent:A.k,ProgressEvent:A.k,PromiseRejectionEvent:A.k,PushEvent:A.k,RTCDataChannelEvent:A.k,RTCDTMFToneChangeEvent:A.k,RTCPeerConnectionIceEvent:A.k,RTCTrackEvent:A.k,SecurityPolicyViolationEvent:A.k,SensorErrorEvent:A.k,SpeechRecognitionError:A.k,SpeechRecognitionEvent:A.k,SpeechSynthesisEvent:A.k,StorageEvent:A.k,SyncEvent:A.k,TrackEvent:A.k,TransitionEvent:A.k,WebKitTransitionEvent:A.k,VRDeviceEvent:A.k,VRDisplayEvent:A.k,VRSessionEvent:A.k,MojoInterfaceRequestEvent:A.k,ResourceProgressEvent:A.k,USBConnectionEvent:A.k,IDBVersionChangeEvent:A.k,AudioProcessingEvent:A.k,OfflineAudioCompletionEvent:A.k,WebGLContextEvent:A.k,Event:A.k,InputEvent:A.k,SubmitEvent:A.k,AbsoluteOrientationSensor:A.e,Accelerometer:A.e,AccessibleNode:A.e,AmbientLightSensor:A.e,Animation:A.e,ApplicationCache:A.e,DOMApplicationCache:A.e,OfflineResourceList:A.e,BackgroundFetchRegistration:A.e,BatteryManager:A.e,BroadcastChannel:A.e,CanvasCaptureMediaStreamTrack:A.e,DedicatedWorkerGlobalScope:A.e,EventSource:A.e,FileReader:A.e,FontFaceSet:A.e,Gyroscope:A.e,LinearAccelerationSensor:A.e,Magnetometer:A.e,MediaDevices:A.e,MediaKeySession:A.e,MediaQueryList:A.e,MediaRecorder:A.e,MediaSource:A.e,MediaStream:A.e,MediaStreamTrack:A.e,MessagePort:A.e,MIDIAccess:A.e,MIDIInput:A.e,MIDIOutput:A.e,MIDIPort:A.e,NetworkInformation:A.e,Notification:A.e,OffscreenCanvas:A.e,OrientationSensor:A.e,PaymentRequest:A.e,Performance:A.e,PermissionStatus:A.e,PresentationAvailability:A.e,PresentationConnection:A.e,PresentationConnectionList:A.e,PresentationRequest:A.e,RelativeOrientationSensor:A.e,RemotePlayback:A.e,RTCDataChannel:A.e,DataChannel:A.e,RTCDTMFSender:A.e,RTCPeerConnection:A.e,webkitRTCPeerConnection:A.e,mozRTCPeerConnection:A.e,ScreenOrientation:A.e,Sensor:A.e,ServiceWorker:A.e,ServiceWorkerContainer:A.e,ServiceWorkerGlobalScope:A.e,ServiceWorkerRegistration:A.e,SharedWorker:A.e,SharedWorkerGlobalScope:A.e,SpeechRecognition:A.e,SpeechSynthesis:A.e,SpeechSynthesisUtterance:A.e,VR:A.e,VRDevice:A.e,VRDisplay:A.e,VRSession:A.e,VisualViewport:A.e,WebSocket:A.e,Worker:A.e,WorkerGlobalScope:A.e,WorkerPerformance:A.e,BluetoothDevice:A.e,BluetoothRemoteGATTCharacteristic:A.e,Clipboard:A.e,MojoInterfaceInterceptor:A.e,USB:A.e,IDBDatabase:A.e,IDBOpenDBRequest:A.e,IDBVersionChangeRequest:A.e,IDBRequest:A.e,IDBTransaction:A.e,EventTarget:A.e,File:A.az,FileList:A.fb,FileWriter:A.fc,HTMLFormElement:A.fe,Gamepad:A.aA,History:A.jh,HTMLCollection:A.cg,HTMLFormControlsCollection:A.cg,HTMLOptionsCollection:A.cg,XMLHttpRequest:A.dH,XMLHttpRequestUpload:A.ch,XMLHttpRequestEventTarget:A.ch,HTMLImageElement:A.cQ,KeyboardEvent:A.bo,Location:A.jw,HTMLAudioElement:A.cp,HTMLMediaElement:A.cp,MediaList:A.jB,MIDIInputMap:A.ft,MIDIOutputMap:A.fu,MimeType:A.aC,MimeTypeArray:A.fv,MouseEvent:A.aD,DragEvent:A.aD,PointerEvent:A.aD,WheelEvent:A.aD,DocumentFragment:A.w,ShadowRoot:A.w,Attr:A.w,DocumentType:A.w,Node:A.w,NodeList:A.dU,RadioNodeList:A.dU,Plugin:A.aE,PluginArray:A.fN,RTCStatsReport:A.fS,HTMLSelectElement:A.fU,SourceBuffer:A.av,SourceBufferList:A.fX,SpeechGrammar:A.aF,SpeechGrammarList:A.fY,SpeechRecognitionResult:A.aG,Storage:A.h1,CSSStyleSheet:A.ah,StyleSheet:A.ah,TextTrack:A.aw,TextTrackCue:A.ab,VTTCue:A.ab,TextTrackCueList:A.h6,TextTrackList:A.h7,TimeRanges:A.ke,Touch:A.aH,TouchList:A.h9,TrackDefaultList:A.kf,CompositionEvent:A.be,FocusEvent:A.be,TextEvent:A.be,TouchEvent:A.be,UIEvent:A.be,URL:A.ki,HTMLVideoElement:A.d7,VideoTrackList:A.hh,Window:A.d8,DOMWindow:A.d8,CSSRuleList:A.hq,ClientRect:A.ea,DOMRect:A.ea,GamepadList:A.hD,NamedNodeMap:A.eg,MozNamedAttrMap:A.eg,SpeechRecognitionResultList:A.hY,StyleSheetList:A.i4,SVGLength:A.aQ,SVGLengthList:A.fo,SVGNumber:A.aT,SVGNumberList:A.fH,SVGPointList:A.jT,SVGStringList:A.h3,SVGAElement:A.n,SVGAnimateElement:A.n,SVGAnimateMotionElement:A.n,SVGAnimateTransformElement:A.n,SVGAnimationElement:A.n,SVGCircleElement:A.n,SVGClipPathElement:A.n,SVGDefsElement:A.n,SVGDescElement:A.n,SVGDiscardElement:A.n,SVGEllipseElement:A.n,SVGFEBlendElement:A.n,SVGFEColorMatrixElement:A.n,SVGFEComponentTransferElement:A.n,SVGFECompositeElement:A.n,SVGFEConvolveMatrixElement:A.n,SVGFEDiffuseLightingElement:A.n,SVGFEDisplacementMapElement:A.n,SVGFEDistantLightElement:A.n,SVGFEFloodElement:A.n,SVGFEFuncAElement:A.n,SVGFEFuncBElement:A.n,SVGFEFuncGElement:A.n,SVGFEFuncRElement:A.n,SVGFEGaussianBlurElement:A.n,SVGFEImageElement:A.n,SVGFEMergeElement:A.n,SVGFEMergeNodeElement:A.n,SVGFEMorphologyElement:A.n,SVGFEOffsetElement:A.n,SVGFEPointLightElement:A.n,SVGFESpecularLightingElement:A.n,SVGFESpotLightElement:A.n,SVGFETileElement:A.n,SVGFETurbulenceElement:A.n,SVGFilterElement:A.n,SVGForeignObjectElement:A.n,SVGGElement:A.n,SVGGeometryElement:A.n,SVGGraphicsElement:A.n,SVGImageElement:A.n,SVGLineElement:A.n,SVGLinearGradientElement:A.n,SVGMarkerElement:A.n,SVGMaskElement:A.n,SVGMetadataElement:A.n,SVGPathElement:A.n,SVGPatternElement:A.n,SVGPolygonElement:A.n,SVGPolylineElement:A.n,SVGRadialGradientElement:A.n,SVGRectElement:A.n,SVGScriptElement:A.n,SVGSetElement:A.n,SVGStopElement:A.n,SVGStyleElement:A.n,SVGElement:A.n,SVGSVGElement:A.n,SVGSwitchElement:A.n,SVGSymbolElement:A.n,SVGTSpanElement:A.n,SVGTextContentElement:A.n,SVGTextElement:A.n,SVGTextPathElement:A.n,SVGTextPositioningElement:A.n,SVGTitleElement:A.n,SVGUseElement:A.n,SVGViewElement:A.n,SVGGradientElement:A.n,SVGComponentTransferFunctionElement:A.n,SVGFEDropShadowElement:A.n,SVGMPathElement:A.n,SVGTransform:A.aU,SVGTransformList:A.ha,AudioBuffer:A.b7,AudioBufferSourceNode:A.dv,AudioContext:A.c7,webkitAudioContext:A.c7,AnalyserNode:A.H,RealtimeAnalyserNode:A.H,AudioDestinationNode:A.H,AudioWorkletNode:A.H,BiquadFilterNode:A.H,ChannelMergerNode:A.H,AudioChannelMerger:A.H,ChannelSplitterNode:A.H,AudioChannelSplitter:A.H,ConvolverNode:A.H,DelayNode:A.H,DynamicsCompressorNode:A.H,IIRFilterNode:A.H,MediaElementAudioSourceNode:A.H,MediaStreamAudioDestinationNode:A.H,MediaStreamAudioSourceNode:A.H,PannerNode:A.H,AudioPannerNode:A.H,webkitAudioPannerNode:A.H,ScriptProcessorNode:A.H,JavaScriptAudioNode:A.H,StereoPannerNode:A.H,WaveShaperNode:A.H,AudioNode:A.H,AudioParam:A.eP,AudioParamMap:A.eQ,ConstantSourceNode:A.bj,OscillatorNode:A.bj,Oscillator:A.bj,AudioScheduledSourceNode:A.bj,AudioTrackList:A.eR,BaseAudioContext:A.dw,GainNode:A.cP,AudioGainNode:A.cP,OfflineAudioContext:A.fJ,WebGLBuffer:A.eW,WebGLFramebuffer:A.ff,WebGLProgram:A.fO,WebGL2RenderingContext:A.d0,WebGLTexture:A.bv,WebGLUniformLocation:A.hb,WebGLVertexArrayObject:A.hg})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,AudioParam:true,AudioParamMap:true,ConstantSourceNode:true,OscillatorNode:true,Oscillator:true,AudioScheduledSourceNode:false,AudioTrackList:true,BaseAudioContext:false,GainNode:true,AudioGainNode:true,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true})
A.cV.$nativeSuperclassTag="ArrayBufferView"
A.eh.$nativeSuperclassTag="ArrayBufferView"
A.ei.$nativeSuperclassTag="ArrayBufferView"
A.cq.$nativeSuperclassTag="ArrayBufferView"
A.ej.$nativeSuperclassTag="ArrayBufferView"
A.ek.$nativeSuperclassTag="ArrayBufferView"
A.dS.$nativeSuperclassTag="ArrayBufferView"
A.em.$nativeSuperclassTag="EventTarget"
A.en.$nativeSuperclassTag="EventTarget"
A.es.$nativeSuperclassTag="EventTarget"
A.et.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.mh
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

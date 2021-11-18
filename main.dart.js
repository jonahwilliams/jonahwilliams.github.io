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
a[c]=function(){a[c]=function(){A.rR(b)}
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
if(a[b]!==s)A.rS(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.mX(b)
return new s(c,this)}:function(){if(s===null)s=A.mX(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.mX(a).prototype
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
a(hunkHelpers,v,w,$)}var A={mD:function mD(){},
nA(a){return new A.cu("Field '"+a+"' has been assigned during initialization.")},
nB(a){return new A.cu("Field '"+a+"' has not been initialized.")},
c2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mK(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
q8(a,b,c){return A.mK(A.c2(A.c2(c,a),b))},
f2(a,b,c){return a},
nU(a,b,c,d){A.kE(b,"start")
if(c!=null){A.kE(c,"end")
if(b>c)A.T(A.bG(b,0,c,"start",null))}return new A.eq(a,b,c,d.i("eq<0>"))},
nD(a,b,c,d){if(t.gt.b(a))return new A.dU(a,b,c.i("@<0>").E(d).i("dU<1,2>"))
return new A.cw(a,b,c.i("@<0>").E(d).i("cw<1,2>"))},
nx(){return new A.b8("No element")},
pL(){return new A.b8("Too many elements")},
pK(){return new A.b8("Too few elements")},
q6(a,b,c){A.hu(a,0,J.as(a)-1,b,c)},
hu(a,b,c,d,e){if(c-b<=32)A.nP(a,b,c,d,e)
else A.nO(a,b,c,d,e)},
nP(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aD(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a5()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
nO(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.e.a2(a5-a4+1,6),i=a4+j,h=a5-j,g=B.e.a2(a4+a5,2),f=g-j,e=g+j,d=J.aD(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a1
a1=a0
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.Y(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
A.hu(a3,a4,r-2,a6,a7)
A.hu(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.Y(a6.$2(d.h(a3,r),b),0);)++r
for(;J.Y(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}A.hu(a3,r,q,a6,a7)}else A.hu(a3,r,q,a6,a7)},
cu:function cu(a){this.a=a},
kJ:function kJ(){},
p:function p(){},
b5:function b5(){},
eq:function eq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bE:function bE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cw:function cw(a,b,c){this.a=a
this.b=b
this.$ti=c},
dU:function dU(a,b,c){this.a=a
this.b=b
this.$ti=c},
e9:function e9(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ea:function ea(a,b,c){this.a=a
this.b=b
this.$ti=c},
aR:function aR(a,b,c){this.a=a
this.b=b
this.$ti=c},
eu:function eu(a,b,c){this.a=a
this.b=b
this.$ti=c},
av:function av(){},
pH(a){if(typeof a=="number")return B.b.gA(a)
if(t.ha.b(a))return A.cD(a)
return A.m_(a)},
pI(a){return new A.k_(a)},
oG(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
rD(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
C(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dC(a)
return s},
cD(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
kA(a){return A.pX(a)},
pX(a){var s,r,q,p
if(a instanceof A.v)return A.aq(A.bd(a),null)
if(J.dx(a)===B.f1||t.cx.b(a)){s=B.aO(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.aq(A.bd(a),null)},
d8(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
q3(a){var s=A.d8(a).getUTCFullYear()+0
return s},
q1(a){var s=A.d8(a).getUTCMonth()+1
return s},
pY(a){var s=A.d8(a).getUTCDate()+0
return s},
pZ(a){var s=A.d8(a).getUTCHours()+0
return s},
q0(a){var s=A.d8(a).getUTCMinutes()+0
return s},
q2(a){var s=A.d8(a).getUTCSeconds()+0
return s},
q_(a){var s=A.d8(a).getUTCMilliseconds()+0
return s},
cN(a){throw A.d(A.oo(a))},
b(a,b){if(a==null)J.as(a)
throw A.d(A.cM(a,b))},
cM(a,b){var s,r="index"
if(!A.mV(b))return new A.bx(!0,b,r,null)
s=A.K(J.as(a))
if(b<0||b>=s)return A.U(b,a,r,null,s)
return A.nJ(b,r)},
oo(a){return new A.bx(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.hc()
s=new Error()
s.dartException=a
r=A.rT
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
rT(){return J.dC(this.dartException)},
T(a){throw A.d(a)},
y(a){throw A.d(A.bi(a))},
bJ(a){var s,r,q,p,o,n
a=A.rN(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.kU(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
kV(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
nX(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mE(a,b){var s=b==null,r=s?null:b.method
return new A.fS(a,r,s?null:b.receiver)},
bw(a){if(a==null)return new A.kv(a)
if(a instanceof A.dV)return A.cf(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.cf(a,a.dartException)
return A.re(a)},
cf(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
re(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.cM(r,16)&8191)===10)switch(q){case 438:return A.cf(a,A.mE(A.C(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.C(s)+" (Error "+q+")"
return A.cf(a,new A.ef(p,e))}}if(a instanceof TypeError){o=$.oS()
n=$.oT()
m=$.oU()
l=$.oV()
k=$.oY()
j=$.oZ()
i=$.oX()
$.oW()
h=$.p0()
g=$.p_()
f=o.aa(s)
if(f!=null)return A.cf(a,A.mE(A.a7(s),f))
else{f=n.aa(s)
if(f!=null){f.method="call"
return A.cf(a,A.mE(A.a7(s),f))}else{f=m.aa(s)
if(f==null){f=l.aa(s)
if(f==null){f=k.aa(s)
if(f==null){f=j.aa(s)
if(f==null){f=i.aa(s)
if(f==null){f=l.aa(s)
if(f==null){f=h.aa(s)
if(f==null){f=g.aa(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.a7(s)
return A.cf(a,new A.ef(s,f==null?e:f.method))}}}return A.cf(a,new A.hQ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ep()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.cf(a,new A.bx(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ep()
return a},
bP(a){var s
if(a instanceof A.dV)return a.b
if(a==null)return new A.eO(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.eO(a)},
m_(a){if(a==null||typeof a!="object")return J.aE(a)
else return A.cD(a)},
or(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
rB(a,b,c,d,e,f){t.gY.a(a)
switch(A.K(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.mA("Unsupported number of arguments for wrapped closure"))},
bv(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.rB)
a.$identity=s
return s},
pu(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.hz().constructor.prototype):Object.create(new A.cU(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.nr(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.pq(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.nr(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
pq(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.po)}throw A.d("Error in functionType of tearoff")},
pr(a,b,c,d){var s=A.no
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
nr(a,b,c,d){var s,r
if(c)return A.pt(a,b,d)
s=b.length
r=A.pr(s,d,a,b)
return r},
ps(a,b,c,d){var s=A.no,r=A.pp
switch(b?-1:a){case 0:throw A.d(new A.hr("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
pt(a,b,c){var s,r,q,p=$.nm
p==null?$.nm=A.nl("interceptor"):p
s=$.nn
s==null?$.nn=A.nl("receiver"):s
r=b.length
q=A.ps(r,c,a,b)
return q},
mX(a){return A.pu(a)},
po(a,b){return A.lz(v.typeUniverse,A.bd(a.a),b)},
no(a){return a.a},
pp(a){return a.b},
nl(a){var s,r,q,p=new A.cU("receiver","interceptor"),o=J.ny(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.cR("Field name "+a+" not found.",null))},
N(a){if(a==null)A.rf("boolean expression must not be null")
return a},
rf(a){throw A.d(new A.hZ(a))},
rR(a){throw A.d(new A.fv(a))},
rv(a){return v.getIsolateTag(a)},
u0(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
rH(a){var s,r,q,p,o,n=A.a7($.os.$1(a)),m=$.lO[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lW[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.qB($.on.$2(a,n))
if(q!=null){m=$.lO[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lW[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.lZ(s)
$.lO[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.lW[n]=s
return s}if(p==="-"){o=A.lZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.oA(a,s)
if(p==="*")throw A.d(A.mM(n))
if(v.leafTags[n]===true){o=A.lZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.oA(a,s)},
oA(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.n_(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lZ(a){return J.n_(a,!1,null,!!a.$iz)},
rI(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.lZ(s)
else return J.n_(s,c,null,null)},
rz(){if(!0===$.mY)return
$.mY=!0
A.rA()},
rA(){var s,r,q,p,o,n,m,l
$.lO=Object.create(null)
$.lW=Object.create(null)
A.ry()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.oC.$1(o)
if(n!=null){m=A.rI(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ry(){var s,r,q,p,o,n,m=B.d_()
m=A.dw(B.d0,A.dw(B.d1,A.dw(B.aP,A.dw(B.aP,A.dw(B.d2,A.dw(B.d3,A.dw(B.d4(B.aO),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.os=new A.lT(p)
$.on=new A.lU(o)
$.oC=new A.lV(n)},
dw(a,b){return a(b)||b},
rQ(a,b,c){var s=a.indexOf(b,c)
return s>=0},
rN(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cW:function cW(){},
dO:function dO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a9:function a9(a,b){this.a=a
this.$ti=b},
k_:function k_(a){this.a=a},
kU:function kU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ef:function ef(a,b){this.a=a
this.b=b},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a){this.a=a},
kv:function kv(a){this.a=a},
dV:function dV(a,b){this.a=a
this.b=b},
eO:function eO(a){this.a=a
this.b=null},
ck:function ck(){},
fn:function fn(){},
fo:function fo(){},
hE:function hE(){},
hz:function hz(){},
cU:function cU(a,b){this.a=a
this.b=b},
hr:function hr(a){this.a=a},
hZ:function hZ(a){this.a=a},
aI:function aI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kc:function kc(a){this.a=a},
kb:function kb(a){this.a=a},
ke:function ke(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e6:function e6(a,b){this.a=a
this.$ti=b},
e7:function e7(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lT:function lT(a){this.a=a},
lU:function lU(a){this.a=a},
lV:function lV(a){this.a=a},
rS(a){return A.T(A.nA(a))},
mN(a){var s=new A.l9(a)
return s.b=s},
du(a,b){if(a===$)throw A.d(A.nB(b))
return a},
bO(a,b){if(a!==$)throw A.d(A.nA(b))},
l9:function l9(a){this.a=a
this.b=null},
oc(a,b,c){},
cK(a){return a},
nE(a){return new Float32Array(A.cK(a))},
cz(a,b,c){A.oc(a,b,c)
return new Float32Array(a,b,c)},
nF(a,b,c){var s
A.oc(a,b,c)
s=new Uint8Array(a,b,c)
return s},
pW(a){return new Uint8Array(a)},
bN(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.cM(b,a))},
h3:function h3(){},
cB:function cB(){},
d4:function d4(){},
cA:function cA(){},
ec:function ec(){},
eb:function eb(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
d5:function d5(){},
ed:function ed(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
nL(a,b){var s=b.c
return s==null?b.c=A.mS(a,b.z,!0):s},
nK(a,b){var s=b.c
return s==null?b.c=A.eW(a,"aw",[b.z]):s},
nM(a){var s=a.y
if(s===6||s===7||s===8)return A.nM(a.z)
return s===11||s===12},
q5(a){return a.cy},
aT(a){return A.iV(v.typeUniverse,a,!1)},
cd(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.cd(a,s,a0,a1)
if(r===s)return b
return A.o8(a,r,!0)
case 7:s=b.z
r=A.cd(a,s,a0,a1)
if(r===s)return b
return A.mS(a,r,!0)
case 8:s=b.z
r=A.cd(a,s,a0,a1)
if(r===s)return b
return A.o7(a,r,!0)
case 9:q=b.Q
p=A.f1(a,q,a0,a1)
if(p===q)return b
return A.eW(a,b.z,p)
case 10:o=b.z
n=A.cd(a,o,a0,a1)
m=b.Q
l=A.f1(a,m,a0,a1)
if(n===o&&l===m)return b
return A.mQ(a,n,l)
case 11:k=b.z
j=A.cd(a,k,a0,a1)
i=b.Q
h=A.rb(a,i,a0,a1)
if(j===k&&h===i)return b
return A.o6(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.f1(a,g,a0,a1)
o=b.z
n=A.cd(a,o,a0,a1)
if(f===g&&n===o)return b
return A.mR(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.ja("Attempted to substitute unexpected RTI kind "+c))}},
f1(a,b,c,d){var s,r,q,p,o=b.length,n=A.lB(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.cd(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
rc(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.lB(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.cd(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
rb(a,b,c,d){var s,r=b.a,q=A.f1(a,r,c,d),p=b.b,o=A.f1(a,p,c,d),n=b.c,m=A.rc(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ie()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
rm(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.rw(s)
return a.$S()}return null},
ou(a,b){var s
if(A.nM(b))if(a instanceof A.ck){s=A.rm(a)
if(s!=null)return s}return A.bd(a)},
bd(a){var s
if(a instanceof A.v){s=a.$ti
return s!=null?s:A.mT(a)}if(Array.isArray(a))return A.a0(a)
return A.mT(J.dx(a))},
a0(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
B(a){var s=a.$ti
return s!=null?s:A.mT(a)},
mT(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.qT(a,s)},
qT(a,b){var s=a instanceof A.ck?a.__proto__.__proto__.constructor:b,r=A.qy(v.typeUniverse,s.name)
b.$ccache=r
return r},
rw(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.iV(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
rp(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.eU(a)
q=A.iV(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.eU(q):p},
rU(a){return A.rp(A.iV(v.typeUniverse,a,!1))},
qS(a){var s,r,q,p,o=this
if(o===t.K)return A.dt(o,a,A.qX)
if(!A.bQ(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.dt(o,a,A.r_)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.mV
else if(r===t.i||r===t.cZ)q=A.qW
else if(r===t.N)q=A.qY
else q=r===t.k4?A.lE:null
if(q!=null)return A.dt(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.rE)){o.r="$i"+p
if(p==="n")return A.dt(o,a,A.qV)
return A.dt(o,a,A.qZ)}}else if(s===7)return A.dt(o,a,A.qQ)
return A.dt(o,a,A.qO)},
dt(a,b,c){a.b=c
return a.b(b)},
qR(a){var s,r=this,q=A.qN
if(!A.bQ(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.qC
else if(r===t.K)q=A.qA
else{s=A.f3(r)
if(s)q=A.qP}r.a=q
return r.a(a)},
lF(a){var s,r=a.y
if(!A.bQ(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&A.lF(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qO(a){var s=this
if(a==null)return A.lF(s)
return A.W(v.typeUniverse,A.ou(a,s),null,s,null)},
qQ(a){if(a==null)return!0
return this.z.b(a)},
qZ(a){var s,r=this
if(a==null)return A.lF(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dx(a)[s]},
qV(a){var s,r=this
if(a==null)return A.lF(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dx(a)[s]},
qN(a){var s,r=this
if(a==null){s=A.f3(r)
if(s)return a}else if(r.b(a))return a
A.of(a,r)},
qP(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.of(a,s)},
of(a,b){throw A.d(A.o5(A.o_(a,A.ou(a,b),A.aq(b,null))))},
rl(a,b,c,d){var s=null
if(A.W(v.typeUniverse,a,s,b,s))return a
throw A.d(A.o5("The type argument '"+A.aq(a,s)+"' is not a subtype of the type variable bound '"+A.aq(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
o_(a,b,c){var s=A.fC(a),r=A.aq(b==null?A.bd(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
o5(a){return new A.eV("TypeError: "+a)},
ap(a,b){return new A.eV("TypeError: "+A.o_(a,null,b))},
qX(a){return a!=null},
qA(a){if(a!=null)return a
throw A.d(A.ap(a,"Object"))},
r_(a){return!0},
qC(a){return a},
lE(a){return!0===a||!1===a},
tL(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.ap(a,"bool"))},
tN(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.ap(a,"bool"))},
tM(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.ap(a,"bool?"))},
ob(a){if(typeof a=="number")return a
throw A.d(A.ap(a,"double"))},
tP(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ap(a,"double"))},
tO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ap(a,"double?"))},
mV(a){return typeof a=="number"&&Math.floor(a)===a},
K(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.ap(a,"int"))},
tR(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.ap(a,"int"))},
tQ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.ap(a,"int?"))},
qW(a){return typeof a=="number"},
bb(a){if(typeof a=="number")return a
throw A.d(A.ap(a,"num"))},
tT(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ap(a,"num"))},
tS(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ap(a,"num?"))},
qY(a){return typeof a=="string"},
a7(a){if(typeof a=="string")return a
throw A.d(A.ap(a,"String"))},
tU(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.ap(a,"String"))},
qB(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.ap(a,"String?"))},
r7(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.aq(a[q],b)
return s},
og(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.c([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.k(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.b(a5,j)
m=B.f.D(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.aq(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.aq(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.aq(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.aq(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.aq(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
aq(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.aq(a.z,b)
return s}if(l===7){r=a.z
s=A.aq(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.aq(a.z,b)+">"
if(l===9){p=A.rd(a.z)
o=a.Q
return o.length>0?p+("<"+A.r7(o,b)+">"):p}if(l===11)return A.og(a,b,null)
if(l===12)return A.og(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
rd(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
qz(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
qy(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.iV(a,b,!1)
else if(typeof m=="number"){s=m
r=A.eX(a,5,"#")
q=A.lB(s)
for(p=0;p<s;++p)q[p]=r
o=A.eW(a,b,q)
n[b]=o
return o}else return m},
qw(a,b){return A.o9(a.tR,b)},
qv(a,b){return A.o9(a.eT,b)},
iV(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.o4(A.o2(a,null,b,c))
r.set(b,s)
return s},
lz(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.o4(A.o2(a,b,c,!0))
q.set(c,r)
return r},
qx(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.mQ(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
cc(a,b){b.a=A.qR
b.b=A.qS
return b},
eX(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.b6(null,null)
s.y=b
s.cy=c
r=A.cc(a,s)
a.eC.set(c,r)
return r},
o8(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.qt(a,b,r,c)
a.eC.set(r,s)
return s},
qt(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bQ(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.b6(null,null)
q.y=6
q.z=b
q.cy=c
return A.cc(a,q)},
mS(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.qs(a,b,r,c)
a.eC.set(r,s)
return s},
qs(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.bQ(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.f3(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.f3(q.z))return q
else return A.nL(a,b)}}p=new A.b6(null,null)
p.y=7
p.z=b
p.cy=c
return A.cc(a,p)},
o7(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.qq(a,b,r,c)
a.eC.set(r,s)
return s},
qq(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bQ(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.eW(a,"aw",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.b6(null,null)
q.y=8
q.z=b
q.cy=c
return A.cc(a,q)},
qu(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.b6(null,null)
s.y=13
s.z=b
s.cy=q
r=A.cc(a,s)
a.eC.set(q,r)
return r},
iU(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
qp(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
eW(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iU(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.b6(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.cc(a,r)
a.eC.set(p,q)
return q},
mQ(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.iU(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b6(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.cc(a,o)
a.eC.set(q,n)
return n},
o6(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iU(m)
if(j>0){s=l>0?",":""
r=A.iU(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.qp(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b6(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.cc(a,o)
a.eC.set(q,r)
return r},
mR(a,b,c,d){var s,r=b.cy+("<"+A.iU(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.qr(a,b,c,r,d)
a.eC.set(r,s)
return s},
qr(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.lB(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.cd(a,b,r,0)
m=A.f1(a,c,r,0)
return A.mR(a,n,m,c!==m)}}l=new A.b6(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.cc(a,l)},
o2(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
o4(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.qj(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.o3(a,r,h,g,!1)
else if(q===46)r=A.o3(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.c9(a.u,a.e,g.pop()))
break
case 94:g.push(A.qu(a.u,g.pop()))
break
case 35:g.push(A.eX(a.u,5,"#"))
break
case 64:g.push(A.eX(a.u,2,"@"))
break
case 126:g.push(A.eX(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.mP(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.eW(p,n,o))
else{m=A.c9(p,a.e,n)
switch(m.y){case 11:g.push(A.mR(p,m,o,a.n))
break
default:g.push(A.mQ(p,m,o))
break}}break
case 38:A.qk(a,g)
break
case 42:p=a.u
g.push(A.o8(p,A.c9(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.mS(p,A.c9(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.o7(p,A.c9(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.ie()
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
A.mP(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.o6(p,A.c9(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.mP(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.qm(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.c9(a.u,a.e,i)},
qj(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
o3(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.qz(s,o.z)[p]
if(n==null)A.T('No "'+p+'" in "'+A.q5(o)+'"')
d.push(A.lz(s,o,n))}else d.push(p)
return m},
qk(a,b){var s=b.pop()
if(0===s){b.push(A.eX(a.u,1,"0&"))
return}if(1===s){b.push(A.eX(a.u,4,"1&"))
return}throw A.d(A.ja("Unexpected extended operation "+A.C(s)))},
c9(a,b,c){if(typeof c=="string")return A.eW(a,c,a.sEA)
else if(typeof c=="number")return A.ql(a,b,c)
else return c},
mP(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.c9(a,b,c[s])},
qm(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.c9(a,b,c[s])},
ql(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.d(A.ja("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.d(A.ja("Bad index "+c+" for "+b.l(0)))},
W(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.bQ(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.bQ(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.W(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return A.W(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.W(a,b.z,c,d,e)
if(r===6)return A.W(a,b.z,c,d,e)
return r!==7}if(r===6)return A.W(a,b.z,c,d,e)
if(p===6){s=A.nL(a,d)
return A.W(a,b,c,s,e)}if(r===8){if(!A.W(a,b.z,c,d,e))return!1
return A.W(a,A.nK(a,b),c,d,e)}if(r===7){s=A.W(a,t.P,c,d,e)
return s&&A.W(a,b.z,c,d,e)}if(p===8){if(A.W(a,b,c,d.z,e))return!0
return A.W(a,b,c,A.nK(a,d),e)}if(p===7){s=A.W(a,b,c,t.P,e)
return s||A.W(a,b,c,d.z,e)}if(q)return!1
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
if(!A.W(a,k,c,j,e)||!A.W(a,j,e,k,c))return!1}return A.oh(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.oh(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.qU(a,b,c,d,e)}return!1},
oh(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.W(a3,a4.z,a5,a6.z,a7))return!1
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
if(!A.W(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.W(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.W(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.W(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
qU(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.lz(a,b,r[o])
return A.oa(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.oa(a,n,null,c,m,e)},
oa(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.W(a,r,d,q,f))return!1}return!0},
f3(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.bQ(a))if(r!==7)if(!(r===6&&A.f3(a.z)))s=r===8&&A.f3(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
rE(a){var s
if(!A.bQ(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bQ(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.iD},
o9(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
lB(a){return a>0?new Array(a):v.typeUniverse.sEA},
b6:function b6(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
ie:function ie(){this.c=this.b=this.a=null},
eU:function eU(a){this.a=a},
ia:function ia(){},
eV:function eV(a){this.a=a},
qd(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.rg()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bv(new A.l6(q),1)).observe(s,{childList:true})
return new A.l5(q,s,r)}else if(self.setImmediate!=null)return A.rh()
return A.ri()},
qe(a){self.scheduleImmediate(A.bv(new A.l7(t.M.a(a)),0))},
qf(a){self.setImmediate(A.bv(new A.l8(t.M.a(a)),0))},
qg(a){t.M.a(a)
A.qn(0,a)},
nV(a,b){var s=B.e.a2(a.a,1000)
return A.qo(s<0?0:s,b)},
qn(a,b){var s=new A.eT(!0)
s.e2(a,b)
return s},
qo(a,b){var s=new A.eT(!1)
s.e3(a,b)
return s},
bt(a){return new A.ev(new A.H($.E,a.i("H<0>")),a.i("ev<0>"))},
bs(a,b){a.$2(0,null)
b.b=!0
return b.a},
aa(a,b){A.qD(a,b)},
br(a,b){b.a3(0,a)},
bq(a,b){b.bz(A.bw(a),A.bP(a))},
qD(a,b){var s,r,q=new A.lC(b),p=new A.lD(b)
if(a instanceof A.H)a.cP(q,p,t.z)
else{s=t.z
if(t.h.b(a))a.b0(q,p,s)
else{r=new A.H($.E,t.g)
r.a=8
r.c=a
r.cP(q,p,s)}}},
bu(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.E.bT(new A.lI(s),t.H,t.S,t.z)},
tK(a){return new A.dq(a,1)},
o0(){return B.hi},
o1(a){return new A.dq(a,3)},
oi(a,b){return new A.eQ(a,b.i("eQ<0>"))},
jb(a,b){var s=A.f2(a,"error",t.K)
return new A.dI(s,b==null?A.mu(a):b)},
mu(a){var s
if(t.fz.b(a)){s=a.gaJ()
if(s!=null)return s}return B.d7},
pE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=null,e=!1,d=b.i("H<n<0>>"),c=new A.H($.E,d)
g.a=null
g.b=0
s=A.mN("error")
r=A.mN("stackTrace")
q=new A.jK(g,f,e,c,s,r)
try{for(l=a.length,k=t.P,j=0,i=0;j<a.length;a.length===l||(0,A.y)(a),++j){p=a[j]
o=i
p.b0(new A.jJ(g,o,c,f,e,s,r,b),q,k)
i=++g.b}if(i===0){l=c
l.aB(A.c([],b.i("t<0>")))
return l}g.a=A.bl(i,null,!1,b.i("0?"))}catch(h){n=A.bw(h)
m=A.bP(h)
if(g.b===0||A.N(e)){l=n
r=m
A.f2(l,"error",t.K)
$.E!==B.m
if(r==null)r=A.mu(l)
d=new A.H($.E,d)
d.b9(l,r)
return d}else{s.b=n
r.b=m}}return c},
lf(a,b){var s,r,q
for(s=t.g;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aP()
b.bb(a)
A.dp(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.cF(q)}},
dp(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.h;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.j5(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.dp(c.a,b)
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
A.j5(i.a,i.b)
return}f=$.E
if(f!==g)$.E=g
else f=null
b=b.c
if((b&15)===8)new A.ln(p,c,m).$0()
else if(n){if((b&1)!==0)new A.lm(p,i).$0()}else if((b&2)!==0)new A.ll(c,p).$0()
if(f!=null)$.E=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("aw<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.aQ(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.lf(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.aQ(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
r5(a,b){var s
if(t.ng.b(a))return b.bT(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.nh(a,"onError",u.w))},
r2(){var s,r
for(s=$.dv;s!=null;s=$.dv){$.f0=null
r=s.b
$.dv=r
if(r==null)$.f_=null
s.a.$0()}},
ra(){$.mU=!0
try{A.r2()}finally{$.f0=null
$.mU=!1
if($.dv!=null)$.n2().$1(A.oq())}},
ol(a){var s=new A.i_(a),r=$.f_
if(r==null){$.dv=$.f_=s
if(!$.mU)$.n2().$1(A.oq())}else $.f_=r.b=s},
r8(a){var s,r,q,p=$.dv
if(p==null){A.ol(a)
$.f0=$.f_
return}s=new A.i_(a)
r=$.f0
if(r==null){s.b=p
$.dv=$.f0=s}else{q=r.b
s.b=q
$.f0=r.b=s
if(q==null)$.f_=s}},
oD(a){var s=null,r=$.E
if(B.m===r){A.cL(s,s,B.m,a)
return}A.cL(s,s,r,t.M.a(r.cX(a)))},
tw(a,b){A.f2(a,"stream",t.K)
return new A.iG(b.i("iG<0>"))},
nS(a){return new A.dk(null,null,null,a.i("dk<0>"))},
lH(a){return},
qh(a,b,c,d,e,f){var s,r=$.E,q=e?1:0
t.bm.E(f).i("1(2)").a(b)
A.nZ(r,c)
s=d==null?A.op():d
t.M.a(s)
return new A.c8(a,b,r,q,f.i("c8<0>"))},
nZ(a,b){if(b==null)b=A.rj()
if(t.fQ.b(b))return a.bT(b,t.z,t.K,t.l)
if(t.i6.b(b))return t.y.a(b)
throw A.d(A.cR("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
r4(a,b){A.j5(a,b)},
r3(){},
q9(a,b){var s=$.E
if(s===B.m)return A.nV(a,t.my.a(b))
return A.nV(a,t.my.a(s.cY(b,t.hU)))},
j5(a,b){A.r8(new A.lG(a,b))},
oj(a,b,c,d,e){var s,r=$.E
if(r===c)return d.$0()
$.E=c
s=r
try{r=d.$0()
return r}finally{$.E=s}},
ok(a,b,c,d,e,f,g){var s,r=$.E
if(r===c)return d.$1(e)
$.E=c
s=r
try{r=d.$1(e)
return r}finally{$.E=s}},
r6(a,b,c,d,e,f,g,h,i){var s,r=$.E
if(r===c)return d.$2(e,f)
$.E=c
s=r
try{r=d.$2(e,f)
return r}finally{$.E=s}},
cL(a,b,c,d){t.M.a(d)
if(B.m!==c)d=c.cX(d)
A.ol(d)},
l6:function l6(a){this.a=a},
l5:function l5(a,b,c){this.a=a
this.b=b
this.c=c},
l7:function l7(a){this.a=a},
l8:function l8(a){this.a=a},
eT:function eT(a){this.a=a
this.b=null
this.c=0},
ly:function ly(a,b){this.a=a
this.b=b},
lx:function lx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ev:function ev(a,b){this.a=a
this.b=!1
this.$ti=b},
lC:function lC(a){this.a=a},
lD:function lD(a){this.a=a},
lI:function lI(a){this.a=a},
dq:function dq(a,b){this.a=a
this.b=b},
cb:function cb(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
eQ:function eQ(a,b){this.a=a
this.$ti=b},
dI:function dI(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.$ti=b},
bL:function bL(a,b,c,d,e){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
ey:function ey(){},
ew:function ew(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
jK:function jK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jJ:function jJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
dm:function dm(){},
ao:function ao(a,b){this.a=a
this.$ti=b},
ds:function ds(a,b){this.a=a
this.$ti=b},
cI:function cI(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
H:function H(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
lc:function lc(a,b){this.a=a
this.b=b},
lk:function lk(a,b){this.a=a
this.b=b},
lg:function lg(a){this.a=a},
lh:function lh(a){this.a=a},
li:function li(a,b,c){this.a=a
this.b=b
this.c=c},
le:function le(a,b){this.a=a
this.b=b},
lj:function lj(a,b){this.a=a
this.b=b},
ld:function ld(a,b,c){this.a=a
this.b=b
this.c=c},
ln:function ln(a,b,c){this.a=a
this.b=b
this.c=c},
lo:function lo(a){this.a=a},
lm:function lm(a,b){this.a=a
this.b=b},
ll:function ll(a,b){this.a=a
this.b=b},
i_:function i_(a){this.a=a
this.b=null},
c1:function c1(){},
kN:function kN(a,b){this.a=a
this.b=b},
kO:function kO(a,b){this.a=a
this.b=b},
aB:function aB(){},
eP:function eP(){},
lv:function lv(a){this.a=a},
i0:function i0(){},
dk:function dk(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
bo:function bo(a,b){this.a=a
this.$ti=b},
c8:function c8(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
dl:function dl(){},
dr:function dr(){},
i5:function i5(){},
bM:function bM(a,b){this.b=a
this.a=null
this.$ti=b},
ca:function ca(){},
ls:function ls(a,b){this.a=a
this.b=b},
bp:function bp(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
iG:function iG(a){this.$ti=a},
eY:function eY(){},
lG:function lG(a,b){this.a=a
this.b=b},
iy:function iy(){},
lt:function lt(a,b){this.a=a
this.b=b},
lu:function lu(a,b,c){this.a=a
this.b=b
this.c=c},
mF(a,b,c,d){if(b==null){if(a==null)return new A.aI(c.i("@<0>").E(d).i("aI<1,2>"))}else if(a==null)a=A.ro()
return A.qi(A.rn(),a,b,c,d)},
aX(a,b,c){return b.i("@<0>").E(c).i("kd<1,2>").a(A.or(a,new A.aI(b.i("@<0>").E(c).i("aI<1,2>"))))},
ae(a,b){return new A.aI(a.i("@<0>").E(b).i("aI<1,2>"))},
qi(a,b,c,d,e){var s=c!=null?c:new A.lq(d)
return new A.eD(a,b,s,d.i("@<0>").E(e).i("eD<1,2>"))},
fX(a){return new A.eE(a.i("eE<0>"))},
mO(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
qK(a,b){return J.Y(a,b)},
qL(a){return J.aE(a)},
nw(a,b,c){var s,r
if(A.mW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.k($.aS,a)
try{A.r0(a,s)}finally{if(0>=$.aS.length)return A.b($.aS,-1)
$.aS.pop()}r=A.nT(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
mC(a,b,c){var s,r
if(A.mW(a))return b+"..."+c
s=new A.hC(b)
B.a.k($.aS,a)
try{r=s
r.a=A.nT(r.a,a,", ")}finally{if(0>=$.aS.length)return A.b($.aS,-1)
$.aS.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mW(a){var s,r
for(s=$.aS.length,r=0;r<s;++r)if(a===$.aS[r])return!0
return!1},
r0(a,b){var s,r,q,p,o,n,m,l=a.gw(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.C(l.gp(l))
B.a.k(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gp(l);++j
if(!l.n()){if(j<=4){B.a.k(b,A.C(p))
return}r=A.C(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp(l);++j
for(;l.n();p=o,o=n){n=l.gp(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.C(p)
r=A.C(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
pT(a,b,c){var s=A.mF(null,null,b,c)
a.F(0,new A.kf(s,b,c))
return s},
nC(a,b,c){var s=A.mF(null,null,b,c)
s.L(0,a)
return s},
mH(a){var s,r={}
if(A.mW(a))return"{...}"
s=new A.hC("")
try{B.a.k($.aS,a)
s.a+="{"
r.a=!0
J.pm(a,new A.ki(r,s))
s.a+="}"}finally{if(0>=$.aS.length)return A.b($.aS,-1)
$.aS.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
lr:function lr(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eD:function eD(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
lq:function lq(a){this.a=a},
eE:function eE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
im:function im(a){this.a=a
this.c=this.b=null},
eF:function eF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
e1:function e1(){},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
e8:function e8(){},
ki:function ki(a,b){this.a=a
this.b=b},
A:function A(){},
kk:function kk(a){this.a=a},
em:function em(){},
eL:function eL(){},
eZ:function eZ(){},
pD(a){if(a instanceof A.ck)return a.l(0)
return"Instance of '"+A.kA(a)+"'"},
bl(a,b,c,d){var s,r=J.pM(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
pV(a,b){var s,r=A.c([],b.i("t<0>"))
for(s=J.ar(a);s.n();)B.a.k(r,b.a(s.gp(s)))
return r},
fY(a,b,c){var s=A.pU(a,c)
return s},
pU(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("t<0>"))
s=A.c([],b.i("t<0>"))
for(r=J.ar(a);r.n();)B.a.k(s,r.gp(r))
return s},
mG(a,b,c){var s,r=J.pN(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
nT(a,b,c){var s=J.ar(b)
if(!s.n())return a
if(c.length===0){do a+=A.C(s.gp(s))
while(s.n())}else{a+=A.C(s.gp(s))
for(;s.n();)a=a+c+A.C(s.gp(s))}return a},
pw(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
px(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
fw(a){if(a>=10)return""+a
return"0"+a},
jC(a){return new A.ai(1000*a)},
fC(a){if(typeof a=="number"||A.lE(a)||a==null)return J.dC(a)
if(typeof a=="string")return JSON.stringify(a)
return A.pD(a)},
ja(a){return new A.dH(a)},
cR(a,b){return new A.bx(!1,null,b,a)},
nh(a,b,c){return new A.bx(!0,a,b,c)},
q4(a){var s=null
return new A.d9(s,s,!1,s,s,a)},
nJ(a,b){return new A.d9(null,null,!0,a,b,"Value not in range")},
bG(a,b,c,d,e){return new A.d9(b,c,!0,a,d,"Invalid value")},
kF(a,b,c){if(0>a||a>c)throw A.d(A.bG(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.bG(b,a,c,"end",null))
return b}return c},
kE(a,b){if(a<0)throw A.d(A.bG(a,0,null,b,null))
return a},
U(a,b,c,d,e){var s=A.K(e==null?J.as(b):e)
return new A.fP(s,!0,a,c,"Index out of range")},
D(a){return new A.hS(a)},
mM(a){return new A.hP(a)},
al(a){return new A.b8(a)},
bi(a){return new A.fs(a)},
mA(a){return new A.ib(a)},
cC(a,b,c,d){var s,r
if(B.y===c)return A.q8(J.aE(a),J.aE(b),$.mr())
if(B.y===d){s=J.aE(a)
b=J.aE(b)
c=J.aE(c)
return A.mK(A.c2(A.c2(A.c2($.mr(),s),b),c))}s=J.aE(a)
b=J.aE(b)
c=J.aE(c)
d=J.aE(d)
r=$.mr()
return A.mK(A.c2(A.c2(A.c2(A.c2(r,s),b),c),d))},
f4(a){A.oB(A.C(a))},
cm:function cm(a,b){this.a=a
this.b=b},
ai:function ai(a){this.a=a},
la:function la(){},
L:function L(){},
dH:function dH(a){this.a=a},
c6:function c6(){},
hc:function hc(){},
bx:function bx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d9:function d9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fP:function fP(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hS:function hS(a){this.a=a},
hP:function hP(a){this.a=a},
b8:function b8(a){this.a=a},
fs:function fs(a){this.a=a},
hf:function hf(){},
ep:function ep(){},
fv:function fv(a){this.a=a},
ib:function ib(a){this.a=a},
j:function j(){},
V:function V(){},
d2:function d2(a,b,c){this.a=a
this.b=b
this.$ti=c},
a_:function a_(){},
v:function v(){},
iJ:function iJ(){},
hC:function hC(a){this.a=a},
rs(){return document},
eC(a,b,c,d,e){var s=A.om(new A.lb(c),t.U)
if(s!=null&&!0)J.pk(a,b,s,!1)
return new A.eB(a,b,s,!1,e.i("eB<0>"))},
qH(a){var s
if(t.dA.b(a))return a
s=new A.l3([],[])
s.c=!0
return s.c2(a)},
om(a,b){var s=$.E
if(s===B.m)return a
return s.cY(a,b)},
q:function q(){},
j9:function j9(){},
fa:function fa(){},
fb:function fb(){},
fh:function fh(){},
fi:function fi(){},
ch:function ch(){},
bg:function bg(){},
ju:function ju(){},
J:function J(){},
cX:function cX(){},
jv:function jv(){},
b1:function b1(){},
bz:function bz(){},
jw:function jw(){},
jx:function jx(){},
jy:function jy(){},
bA:function bA(){},
bX:function bX(){},
dR:function dR(){},
dS:function dS(){},
fy:function fy(){},
jz:function jz(){},
a8:function a8(){},
l:function l(){},
e:function e(){},
aF:function aF(){},
fE:function fE(){},
fF:function fF(){},
fI:function fI(){},
aG:function aG(){},
k3:function k3(){},
cq:function cq(){},
e_:function e_(){},
cr:function cr(){},
d0:function d0(){},
bD:function bD(){},
kh:function kh(){},
cy:function cy(){},
km:function km(){},
h_:function h_(){},
kp:function kp(a){this.a=a},
h0:function h0(){},
kq:function kq(a){this.a=a},
aJ:function aJ(){},
h1:function h1(){},
aK:function aK(){},
w:function w(){},
ee:function ee(){},
aL:function aL(){},
hj:function hj(){},
hq:function hq(){},
kH:function kH(a){this.a=a},
hs:function hs(){},
aA:function aA(){},
hw:function hw(){},
aN:function aN(){},
hx:function hx(){},
aO:function aO(){},
hA:function hA(){},
kM:function kM(a){this.a=a},
am:function am(){},
aC:function aC(){},
af:function af(){},
hI:function hI(){},
hJ:function hJ(){},
kS:function kS(){},
aP:function aP(){},
hL:function hL(){},
kT:function kT(){},
bn:function bn(){},
kX:function kX(){},
di:function di(){},
hV:function hV(){},
dj:function dj(){},
i3:function i3(){},
ez:function ez(){},
ig:function ig(){},
eG:function eG(){},
iC:function iC(){},
iK:function iK(){},
mz:function mz(a,b){this.a=a
this.$ti=b},
eA:function eA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eB:function eB(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
lb:function lb(a){this.a=a},
r:function r(){},
dW:function dW(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
i4:function i4(){},
i6:function i6(){},
i7:function i7(){},
i8:function i8(){},
i9:function i9(){},
ic:function ic(){},
id:function id(){},
ih:function ih(){},
ii:function ii(){},
io:function io(){},
ip:function ip(){},
iq:function iq(){},
ir:function ir(){},
is:function is(){},
it:function it(){},
iw:function iw(){},
ix:function ix(){},
iz:function iz(){},
eM:function eM(){},
eN:function eN(){},
iA:function iA(){},
iB:function iB(){},
iD:function iD(){},
iL:function iL(){},
iM:function iM(){},
eR:function eR(){},
eS:function eS(){},
iO:function iO(){},
iP:function iP(){},
iW:function iW(){},
iX:function iX(){},
iY:function iY(){},
iZ:function iZ(){},
j_:function j_(){},
j0:function j0(){},
j1:function j1(){},
j2:function j2(){},
j3:function j3(){},
j4:function j4(){},
od(a){var s,r
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.lE(a))return a
if(A.ox(a))return A.ce(a)
if(Array.isArray(a)){s=[]
for(r=0;r<a.length;++r)s.push(A.od(a[r]))
return s}return a},
ce(a){var s,r,q,p,o
if(a==null)return null
s=A.ae(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.y)(r),++p){o=r[p]
s.j(0,o,A.od(a[o]))}return s},
ox(a){var s=Object.getPrototypeOf(a)
return s===Object.prototype||s===null},
mx(){return window.navigator.userAgent},
l2:function l2(){},
l4:function l4(a,b){this.a=a
this.b=b},
l3:function l3(a,b){this.a=a
this.b=b
this.c=!1},
rM(a,b){var s=new A.H($.E,b.i("H<0>")),r=new A.ao(s,b.i("ao<0>"))
a.then(A.bv(new A.ma(r,b),1),A.bv(new A.mb(r),1))
return s},
ku:function ku(a){this.a=a},
ma:function ma(a,b){this.a=a
this.b=b},
mb:function mb(a){this.a=a},
mJ(){return B.o},
ij:function ij(){},
aW:function aW(){},
fT:function fT(){},
aZ:function aZ(){},
hd:function hd(){},
kz:function kz(){},
hD:function hD(){},
o:function o(){},
b_:function b_(){},
hM:function hM(){},
ik:function ik(){},
il:function il(){},
iu:function iu(){},
iv:function iv(){},
iH:function iH(){},
iI:function iI(){},
iQ:function iQ(){},
iR:function iR(){},
pF(a){return new GainNode(a)},
be:function be(){},
dK:function dK(){},
cg:function cg(){},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
I:function I(){},
fc:function fc(){},
fd:function fd(){},
jh:function jh(a){this.a=a},
by:function by(){},
fe:function fe(){},
dL:function dL(){},
d_:function d_(){},
he:function he(){},
i2:function i2(){},
fk:function fk(){},
fK:function fK(){},
hk:function hk(){},
da:function da(){},
bI:function bI(){},
hO:function hO(){},
hU:function hU(){},
bH:function bH(a){this.a=a},
de:function de(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
jn:function jn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nt(a,b){var s=A.bl(7,null,!1,b.i("0?")),r=a==null?A.rV():a
return new A.fO(r,s,b.i("fO<0>"))},
fO:function fO(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
lA:function lA(a,b){this.a=a
this.$ti=b},
cJ:function cJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=-1
_.$ti=c},
bT(a){return new A.f(a)},
f:function f(a){this.a=a},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
P:function P(a,b){this.a=a
this.b=b},
mt(a,b,c,d,e,f,g){return new A.cQ(g,b,e,a,f)},
ow(a,b){if(b.e)return!1
if(a.x)return!0
if(b.x)return!0
return!1},
rx(a,b){return B.a.f8(a.a,new A.lS(b))},
h2(a,b,c,d,e,f,g,h,i,j){return new A.bZ(i,a,h,j,b,e,c,f)},
rt(a){var s,r,q=a.f.$0(),p=new A.ko(new Uint8ClampedArray(4000)),o=a.d,n=A.c([],t.I),m=A.nC(B.aB,t.b,t.R),l=A.c([],t.Q),k=A.c([],t.d)
for(s=J.ar(a.r.$0());s.n();){r=s.gp(s)
switch(r.gb4()){case B.a7:m.h(0,B.E)
m.j(0,B.E,r)
break
case B.a8:m.h(0,B.p)
m.j(0,B.p,r)
break
case B.a9:m.h(0,B.F)
m.j(0,B.F,r)
break
default:B.a.k(n,r)}}return A.mt(new A.j7(q,p),new A.cj(o,o,1,0,0,0,0,new A.cY(n,m),a.c,l,k,new A.cZ(a.a)),1,a.z,!1,!1,a.e.$0())},
cQ:function cQ(a,b,c,d,e){var _=this
_.a=100
_.b=a
_.c=b
_.e=c
_.r=d
_.x=e},
j8:function j8(a){this.a=a},
j7:function j7(a,b){this.a=a
this.b=b
this.c=null},
ag:function ag(a,b){this.a=a
this.b=b},
au:function au(){},
c3:function c3(){},
c4:function c4(){},
cV:function cV(){},
c0:function c0(){},
hn:function hn(){this.b=!1},
ei:function ei(){this.a=null},
ho:function ho(a){this.a=a},
lS:function lS(a){this.a=a},
bR:function bR(){},
bh:function bh(a){this.a=a},
bZ:function bZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.z=h},
mk:function mk(){},
mi:function mi(){},
mj:function mj(){},
me:function me(){},
mc:function mc(){},
md:function md(){},
mn:function mn(){},
ml:function ml(){},
mm:function mm(){},
mq:function mq(){},
mo:function mo(){},
mp:function mp(){},
lM:function lM(){},
lK:function lK(){},
lL:function lL(){},
jo:function jo(){this.b=this.a=0},
X:function X(){},
bY:function bY(a,b){this.b=a
this.a=b},
cx:function cx(a,b){this.b=a
this.a=b},
pG(a){var s=t.w
s=new A.fL(a,A.c([],s),A.c([],s),A.c([],t.fy),A.c([],t.ge))
s.dZ(a)
return s},
rL(a,b,c){var s,r,q=b.e||b.a===0
if(q)return!1
s=b.c
if(s!=null&&s.b<=0){a.$1(new A.dQ(b))
return!0}r=b.r
if(r!=null){a.$1(r.f9(b,c))
b.a=0
return!0}return!1},
fL:function fL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
jM:function jM(a){this.a=a},
jL:function jL(a,b){this.a=a
this.b=b},
ns(a){switch(a.a){case 0:case 1:case 2:case 3:case 4:return!1
case 5:case 6:case 7:return!0}},
dN(a,b,c){var s,r,q,p
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
default:p=null}r+=a.I(p)+1}return r},
f7(a,b,c,d,e,f){return new A.f6(f,c)},
nf(){return new A.f6(10,10)},
pv(a){var s,r=a.a,q=a.b
if(r+q===1)return a
s=Math.sqrt(Math.pow(r,2)+Math.pow(q,2))
return new A.P(r/s,q/s)},
bB(a){switch(a){case B.aq:case B.ar:case B.I:case B.J:case B.L:case B.M:case B.a2:case B.a3:case B.Y:case B.H:case B.Z:case B.a_:case B.a0:case null:return!1
case B.X:case B.z:case B.K:case B.a1:return!0}},
pJ(a){switch(a){case B.aq:case B.ar:case B.I:case B.J:case B.L:case B.M:case B.a2:case B.a3:case B.Y:case B.H:case B.Z:case B.a_:case null:case B.a0:return!1
case B.X:case B.z:case B.K:case B.a1:return!0}},
en:function en(a,b){this.a=a
this.b=b},
bk:function bk(a,b){this.a=a
this.b=b},
f9:function f9(a,b){this.a=a
this.b=b},
aj:function aj(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=null},
jt:function jt(){},
a1:function a1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fN:function fN(a,b){this.a=a
this.b=b},
bV:function bV(a,b){this.a=a
this.b=b},
bW:function bW(a,b){this.a=a
this.b=b},
b0:function b0(a,b){this.a=a
this.b=b},
kn:function kn(){},
bU:function bU(){},
cl:function cl(a,b){this.a=a
this.b=b},
dP:function dP(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.y=e
_.z=f},
dE:function dE(a,b){this.a=a
this.b=b},
dF:function dF(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.f=c
_.r=d
_.Q=e
_.ch=f},
cS:function cS(a,b){this.a=a
this.b=b},
at:function at(a){this.c=a},
f6:function f6(a,b){this.a=a
this.b=b},
cj:function cj(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
cT:function cT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cZ:function cZ(a){this.a=a},
cY:function cY(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
ft:function ft(){},
df:function df(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
ax:function ax(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a,b){this.a=a
this.b=b},
an:function an(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=a
this.b=b},
bf:function bf(a,b){this.a=a
this.b=b},
c5:function c5(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
fV:function fV(a,b){this.b=a
this.c=b},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(a,b){this.a=a
this.b=b},
kg:function kg(a,b){this.a=a
this.b=b},
a2:function a2(a,b){this.a=a
this.b=b},
kj:function kj(a,b){this.a=a
this.b=b},
ko:function ko(a){this.a=a},
d3:function d3(a,b){this.a=a
this.b=b},
fz:function fz(a){var _=this
_.b=a
_.c=!1
_.d=null
_.e=0
_.a=!1},
fA:function fA(a){this.b=a
this.a=!1},
jD:function jD(){},
pB(a,a0,a1){var s,r,q,p,o,n,m,l,k="a_position",j=5126,i="u_resolution",h="u_offset",g=A.c([],t.ev),f=A.c(["alarm_1.mp3","background_1.mp3","background_2.mp3","bullet_impact_1.mp3","bullet_impact_2.mp3","bullet_miss_1.mp3","calm_menu_1.mp3","cave_1.mp3","click_1.mp3","death_1.mp3","door_1.mp3","door_unlock_1.mp3","drone_abandoned_desolate.mp3","fireball_1.mp3","fireball_2.mp3","flamethrower_1.mp3","heavy_punch_1.mp3","heavy_punch_2.mp3","heavy_punch_3.mp3","heavy_punch_4.mp3","Just_Pick_One_Already.mp3","laser_1.mp3","loop_1.mp3","menu_1.mp3","menu_2.mp3","miss_1.mp3","monster_deep_growl.mp3","monster_growl_1.mp3","monster_sceam_2.mp3","monster_scream_1.mp3","New_Bee.mp3","positive_1.mp3","rain_background_1.mp3","sewer_1.mp3","short_pulse_1.mp3","surface_day_1.mp3","surface_night_1.mp3","sword_impact_1.mp3","teleport_1.mp3","text_loop_1.mp3","water_footsteps_1.mp3","water_footsteps_2.mp3","water_footsteps_3.mp3","water_footsteps_4.mp3","water_footsteps_5.mp3","reload_1.mp3","pistol_1.mp3"],t.s),e=new (window.AudioContext||window.webkitAudioContext)(),d=A.qJ(),c=t.G,b=t.o
d=A.aH(A.c([new A.S(k,35044,j,2,d),new A.S("a_color",35048,j,4,new Float32Array(192e3))],c),u.t,A.c([new A.x(i,B.h),new A.x(h,B.h)],b),u.Z)
s=A.aH(A.c([new A.S(k,35048,j,2,new Float32Array(8000))],c),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.c([new A.x(i,B.h),new A.x(h,B.h)],b),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
r=A.qc(window)
q=new Uint8Array(4000)
p=t.j
o=A.c([],t.pl)
b=A.c([new A.x("u_texture",B.l),new A.x(i,B.h),new A.x("u_time",B.x)],b)
b=A.aH(A.c([new A.S(k,35044,j,2,new Float32Array(A.cK(B.A)))],c),"#version 300 es\nprecision mediump float;\n\n\nuniform sampler2D u_texture;\nuniform vec2 u_resolution;\nuniform float u_time;\n\nout vec4 outColor;\n\nfloat density = 1.3;\nfloat opacityScanline = .3;\nfloat opacityNoise = .2;\n\nfloat random (vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nfloat blend(const in float x, const in float y) {\n\treturn (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));\n}\n\nvec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {\n\tvec3 z = vec3(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b));\n\treturn z * opacity + x * (1.0 - opacity);\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n  vec3 col = texture(u_texture, uv).rgb;\n  float count = u_resolution.y * density;\n  vec2 sl = vec2(sin(uv.y * count), cos(uv.y * count));\n\tvec3 scanlines = vec3(sl.x, sl.y, sl.x);\n  col += col * scanlines * opacityScanline;\n  col += col * vec3(random(uv * u_time)) * opacityNoise;\n  outColor = vec4(col, 1.0);\n}\n",b,u.v)
c=A.c([],t.hd)
n=new Uint8Array(16e6)
m=new Uint8Array(4000)
l=new Uint8Array(4000)
g=new A.fB(a0,a,g,a1,new A.hv(A.ae(t.N,t.bD),f,e),new A.jI(n,m,l,new Uint8Array(64e6),new A.i(0,0),A.ae(p,t.im),c),new A.jo(),new A.hF(d),new A.fz(s),r,new A.j8(new A.fx(q,A.ae(p,t.S))),new A.fA(o),new A.fG(b),new A.ew(null,null,t.np),a0.createFramebuffer(),a0.createFramebuffer(),new A.kG())
g.dY(a,a0,a1)
return g},
jG:function jG(){this.b=!1},
fB:function fB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.fy=$
_.go=n
_.k2=_.k1=_.id=null
_.k3=o
_.k4=p
_.r2=_.r1=0
_.ry=!0
_.x1=null
_.x2=$
_.y1=q},
jH:function jH(a,b){this.a=a
this.b=b},
oF(a,b,c){return a*c+(1-c)*b},
R:function R(){},
bS:function bS(a,b,c){var _=this
_.a=a
_.d=0
_.e=null
_.f=!0
_.r=b
_.x=c},
G:function G(a,b,c,d,e,f,g){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
h9:function h9(a){this.a=a},
eh:function eh(a){this.a=a},
aY:function aY(a,b){this.a=a
this.b=b},
kr:function kr(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dd:function dd(){},
fU:function fU(a){this.a=a},
es:function es(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
je:function je(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jc:function jc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dQ:function dQ(a){this.a=a},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
hR:function hR(a){this.a=a},
eg:function eg(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.b=a
this.c=b},
kB:function kB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kC:function kC(a,b,c){this.a=a
this.b=b
this.c=c},
fM:function fM(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
fG:function fG(a){this.b=a
this.c=null
this.a=!1},
jI:function jI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iN:function iN(a){this.a=a
this.b=!0},
kY:function kY(a,b,c){this.a=a
this.c=b
this.d=c},
ci:function ci(a,b){this.a=a
this.b=b},
kD:function kD(a,b){this.a=a
this.b=b},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
ov(a,b){var s=a.f
if(s==null)return A.c([],t.Y)
if(s===B.z)return A.c([new A.b3("Open Door",new A.es(!1,a.b))],t.Y)
if(s===B.J){if(b.ax(a.b)!=null)return A.c([],t.Y)
return A.c([new A.b3("Close Door",new A.es(!0,a.b))],t.Y)}if(s===B.H)return A.c([new A.b3("Activate Mechanism",new A.hR(a.b))],t.Y)
if(s===B.I)return A.c([new A.b3("Stairs",new A.h9(!1))],t.Y)
return A.c([],t.Y)},
b3:function b3(a,b){this.a=a
this.b=b},
pS(a){var s=u.v,r="a_position",q="u_player_visible_texture",p=t.G,o=t.o
return new A.e5(A.aH(A.c([new A.S(r,35044,5126,2,new Float32Array(A.cK(B.A)))],p),u._,A.c([new A.x("u_source_position",B.h),new A.x("u_source_color",B.cq),new A.x("u_source_strength",B.x),new A.x("u_time",B.x),new A.x("u_visible_texture",B.l),new A.x(q,B.l)],o),s),A.aH(A.c([new A.S(r,35044,5126,2,new Float32Array(A.cK(B.A)))],p),u.L,A.c([new A.x("u_light_texture",B.l),new A.x("u_game_world_texture",B.l),new A.x(q,B.l),new A.x("u_resolution",B.h),new A.x("u_block_size",B.h),new A.x("u_offset",B.h)],o),s),a,A.c([],t.ow))},
e5:function e5(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.r=_.f=_.e=null
_.y=d
_.z=null
_.a=!1},
pz(a){switch(a.a){case 0:return B.ap
case 1:return B.ao
case 2:return B.an
case 3:return B.am
case 4:return B.u
case 5:return B.v
case 6:return B.r
case 7:return B.t}},
py(a){switch(a.a){case 4:return B.b3
case 5:return B.b2
case 6:return B.b3
case 7:return B.b2
default:return B.ff}},
ab(a,b){switch(b.a){case 4:return a.D(0,new A.i(0,-1))
case 1:return a.D(0,new A.i(1,-1))
case 5:return a.D(0,new A.i(1,0))
case 0:return a.D(0,new A.i(1,1))
case 6:return a.D(0,new A.i(0,1))
case 2:return a.D(0,new A.i(-1,1))
case 7:return a.D(0,new A.i(-1,0))
case 3:return a.D(0,new A.i(-1,-1))}},
lN(a,b,c){var s
switch(c.a){case 0:return!1
case 1:return a.c===B.c||A.N(A.bB(a.f))
case 2:s=a.f
if(s===B.z)return!1
return a.c===B.c||A.N(A.bB(s))
case 3:return a.c===B.c||A.N(A.bB(a.f))||b.ax(a.b)!=null||b.a.N(0,a.b)}},
rr(a,b){var s=B.e.by(a,-1,1),r=B.e.by(b,-1,1)
switch(s){case-1:switch(r){case-1:return B.ap
case 0:return B.v
case 1:return B.ao}break
case 0:switch(r){case-1:return B.r
case 1:return B.u}break
case 1:switch(r){case-1:return B.an
case 0:return B.t
case 1:return B.am}break}throw A.d(A.al(A.C(s)+","+A.C(r)))},
bF:function bF(a,b,c){var _=this
_.b=_.a=null
_.d=a
_.e=b
_.f=c},
b2:function b2(a,b){this.a=a
this.b=b},
kx:function kx(){},
fx:function fx(a,b){this.a=a
this.b=b},
ht:function ht(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.a=!1},
ni(a,b,c,d,e){return new A.S(d,a,c,e,b)},
c7(a,b){return new A.x(b,a)},
aH(a,b,c,d){var s=t.N
return new A.k2(d,b,c,a,A.ae(s,t.o3),A.ae(s,t.aN))},
oe(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.Y(a.getShaderParameter(s,35713),!0)){A.f4(a.getShaderInfoLog(s))
throw A.d(A.al("Invalid Shader"))}return s},
S:function S(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x:function x(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.c=b},
iS:function iS(a,b){this.a=a
this.b=b},
k2:function k2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
kG:function kG(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
az:function az(){},
ha:function ha(){},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
kK:function kK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r9(a,b){var s=t.r
s.a(a)
s.a(b)
return B.e.W(a.y,b.y)},
rG(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.H($.E,t.aa),p=J.ne(r),o=p.$ti,n=o.i("~(1)?").a(new A.lY(a,s,r,new A.ao(q,t.fB)))
t.Z.a(null)
A.eC(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
nQ(a,b){var s=35048,r=5126,q=A.c([new A.x("u_texture",B.l),new A.x("u_resolution",B.h),new A.x("u_offset",B.h)],t.o),p=new Float32Array(12e4),o=new Float32Array(12e4),n=new Float32Array(24e4)
q=new A.eo(A.aH(A.c([new A.S("a_position",s,r,2,p),new A.S("a_texcoord",s,r,2,o),new A.S("a_color",s,r,4,n),new A.S("a_bg_color",s,r,4,new Float32Array(24e4))],t.G),u.I,q,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"),A.nt(A.rP(),t.r),b)
q.e_(a,b)
return q},
cE(a){return new A.Q(a.a,a.b,-1,-1,null)},
nR(a){var s
switch(a.c.a){case 0:return A.cE(B.aD)
case 1:return A.cE(B.fV)
case 2:return A.cE(B.bv)
case 4:s=A.cE(B.h1)
s.saI(0,0.8)
s.saT(0,B.ft)
return s
case 6:return A.cE(B.fU)
case 3:s=A.cE(B.bo)
s.saI(0,0.6)
return s
case 5:s=A.cE(B.bo)
s.saI(0,0.6)
s.saT(0,B.n)
return s}},
nu(a,b,c,d){var s,r,q,p,o,n,m=null
switch(a){case B.aq:case null:return m
case B.ar:s=m
r=s
q=3
p=16
o=1
break
case B.I:q=14
p=3
o=1
r=B.fs
s=B.dd
break
case B.z:s=m
r=s
q=6
p=11
o=1
break
case B.J:s=m
r=s
q=15
p=5
o=1
break
case B.K:s=m
r=s
q=5
p=11
o=1
break
case B.L:n=t.e.i("X.T")
if(d.a===B.B){n=B.bb.h(0,n.a(900))
n.toString
r=n}else{n=B.b8.h(0,n.a(800))
n.toString
r=n}s=m
q=2
p=2
o=0.8
break
case B.M:r=new A.f(4294967142)
s=m
q=12
p=7
o=0.8
break
case B.a2:n=B.a5.h(0,t.e.i("X.T").a(400))
n.toString
s=m
r=n
q=1
p=13
o=1
break
case B.a3:n=B.a5.h(0,t.e.i("X.T").a(400))
n.toString
s=m
r=n
q=2
p=13
o=0.8
break
case B.X:n=B.b8.h(0,t.e.i("X.T").a(600))
n.toString
s=m
r=n
q=6
p=0
o=1
break
case B.Y:n=B.ba.h(0,t.e.i("X.T").a(900))
n.toString
s=n
r=m
q=0
p=15
o=1
break
case B.H:n=B.bc.h(0,t.e.i("X.T").a(500))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.Z:n=B.bc.h(0,t.e.i("X.T").a(100))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.a_:s=m
r=s
q=13
p=3
o=1
break
case B.a0:n=B.ba.h(0,t.e.i("X.T").a(900))
n.toString
s=m
r=n
q=14
p=5
o=1
break
case B.a1:n=B.a5.h(0,t.e.i("X.T").a(600))
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
o=1}n=new A.Q(q,p,b,c,r)
n.saI(0,o)
n.sau(0,s)
return n},
lY:function lY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eo:function eo(a,b,c){var _=this
_.b=a
_.c=null
_.d=b
_.e=c
_.f=!0
_.a=!1},
kL:function kL(a){this.a=a},
Q:function Q(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.f=1
_.r=null
_.x=e
_.y=0},
k:function k(a,b){this.a=a
this.b=b},
mI(a,b,c){return new A.kl(b,c,a)},
qJ(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
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
kl:function kl(a,b,c){this.a=a
this.b=b
this.c=c},
hF:function hF(a){var _=this
_.b=a
_.c=null
_.a=_.d=!1},
hH:function hH(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=0
_.a=!1},
hm:function hm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null},
lw:function lw(a){this.a=a},
rF(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.H($.E,t.aa),p=J.ne(r),o=p.$ti,n=o.i("~(1)?").a(new A.lX(a,s,r,new A.ao(q,t.fB)))
t.Z.a(null)
A.eC(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
mL(a){var s,r,q,p,o=35048,n=5126,m=t.f,l=A.c([],m)
l=new A.fj(B.P,l,B.k)
l.a6(null)
s=A.c([],t.s)
r=A.mw(A.c([],m),!0)
q=A.c([],m)
s=new A.hp(r,s,q,B.k)
s.a6(null)
r=A.kw(108,r,0,0,0)
q=B.aA.h(0,t.e.i("X.T").a(900))
q.toString
s.M(A.mv(r,q))
m=A.c([],m)
m=new A.dX(l,s,m,B.k)
m.a6(null)
m.M(l)
m.M(s)
s=m.be("The Something of Something")
m.e=s
m.M(s)
s=A.c([],t.k)
l=A.c([new A.x("u_texture",B.l),new A.x("u_resolution",B.h)],t.o)
r=new Float32Array(12e4)
q=new Float32Array(12e4)
p=new Float32Array(24e4)
m=new A.hN(m,s,A.aH(A.c([new A.S("a_position",o,n,2,r),new A.S("a_texcoord",o,n,2,q),new A.S("a_color",o,n,4,p),new A.S("a_bg_color",o,n,4,new Float32Array(24e4))],t.G),u.I,l,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = ((a_position / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"))
m.e0(a)
return m},
er(a){var s=A.c([],t.fC),r=A.c([],t.f)
s=new A.hG(a,s,B.G,B.P,r,B.k)
s.a6(null)
return s},
mw(a,b){var s=new A.fq(b,a,B.k)
s.a6(a)
return s},
mv(a,b){var s=A.c([a],t.f),r=new A.fg(b,new A.aM(B.k,0,0),s,B.k)
r.a6(s)
return r},
kw(a,b,c,d,e){var s=A.c([b],t.f),r=new A.hg(e,a,c,d,s,B.k)
r.a6(s)
return r},
nk(a,b,c){var s=A.c([a],t.f),r=new A.dM(c,b,B.P,s,B.k)
r.a6(s)
if(c!=null){s=A.er(c)
s.e=B.n
r.e=s
r.M(s)}return r},
el(a,b,c,d,e){var s,r=t.f,q=A.c([],r),p=a.length
if(p!==0)for(s=0;s<a.length;a.length===p||(0,A.y)(a),++s)q.push(A.er(J.dC(a[s])))
else q.push(A.er("Empty"))
r=A.c([A.nk(A.mv(A.kw(36,A.mw(q,!1),48,24,36),B.n),B.n,d)],r)
q=new A.dc(a,c,b,r,B.k,e.i("dc<0>"))
q.a6(r)
return q},
lX:function lX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hN:function hN(a,b,c){var _=this
_.b=null
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!0
_.a=!1},
kW:function kW(a){this.a=a},
aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},
ac:function ac(){},
hG:function hG(a,b,c,d,e,f){var _=this
_.e=null
_.f=a
_.r=1
_.x=b
_.y=c
_.z=null
_.Q=d
_.a=null
_.b=!0
_.c=e
_.d=f},
fq:function fq(a,b,c){var _=this
_.e=a
_.a=null
_.b=!0
_.c=b
_.d=c},
fg:function fg(a,b,c,d){var _=this
_.e=a
_.f=b
_.a=null
_.b=!0
_.c=c
_.d=d},
hg:function hg(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.a=null
_.b=!0
_.c=e
_.d=f},
dM:function dM(a,b,c,d,e){var _=this
_.e=null
_.f=a
_.r=b
_.ch=c
_.a=null
_.b=!0
_.c=d
_.d=e},
dc:function dc(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.r=c
_.x=0
_.a=null
_.b=!0
_.c=d
_.d=e
_.$ti=f},
cP:function cP(a,b,c){var _=this
_.e=a
_.a=null
_.b=!0
_.c=b
_.d=c},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dX:function dX(a,b,c,d){var _=this
_.e=null
_.f=a
_.r=b
_.x=null
_.z=_.y=0
_.a=_.Q=null
_.b=!0
_.c=c
_.d=d},
jZ:function jZ(a){this.a=a},
jU:function jU(a,b){this.a=a
this.b=b},
jT:function jT(a){this.a=a},
jW:function jW(a,b){this.a=a
this.b=b},
jV:function jV(a){this.a=a},
jQ:function jQ(a){this.a=a},
jP:function jP(a){this.a=a},
jO:function jO(a,b){this.a=a
this.b=b},
jN:function jN(a){this.a=a},
jS:function jS(a){this.a=a},
jR:function jR(a){this.a=a},
jY:function jY(a){this.a=a},
jX:function jX(a){this.a=a},
cn:function cn(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b){this.a=a
this.b=b},
fj:function fj(a,b,c){var _=this
_.f=_.e=null
_.r=a
_.a=null
_.b=!0
_.c=b
_.d=c},
hp:function hp(a,b,c,d){var _=this
_.e=!1
_.f=a
_.r=b
_.a=null
_.b=!0
_.c=c
_.d=d},
bj:function bj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qI(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
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
fD:function fD(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.a=_.e=!1},
hW:function hW(a){this.c=a
this.a=!1},
rk(a){var s,r=A.mG(4000,new A.lJ(a),t.W),q=A.c([],t.c7)
for(s=0;s<4000;++s);return new A.hy(A.fX(t.j),q,A.ae(t.K,t.J),new A.a5(100,40,r,t.nr),a.b)},
lP(a){var s,r,q,p,o
for(s=a.d,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.i(q,r)
o=s.h(0,p)
if(!(o.c===B.c||A.N(A.bB(o.f))))return p}throw A.d("Solid")},
rJ(a,b){var s,r,q
for(s=a.d;!0;){r=$.dA()
q=new A.i(B.b.t(r.J()*98)+1,B.b.t(r.J()*38)+1)
r=s.h(0,q)
if(!(r.c===B.c||A.N(A.bB(r.f)))&&a.ax(q)==null)return q}},
rK(a){var s,r,q,p
for(s=a.d;!0;){r=$.dA()
q=new A.i(B.b.t(r.J()*98)+1,B.b.t(r.J()*38)+1)
p=s.h(0,q)
if(p.c===B.c||A.N(A.bB(p.f)))continue
if(p.r!=null)continue
if(p.f!=null)continue
return q}},
bc(a,b,c){return B.b.t(a.J()*(c-b))+b},
qM(a,b,c){var s=b.length
if(s===1){if(0>=s)return A.b(b,0)
return b[0]}s=A.bc(a,0,s-1)
if(!(s>=0&&s<b.length))return A.b(b,s)
return b[s]},
hY:function hY(a,b){this.a=a
this.d=0
this.e=b},
lJ:function lJ(a){this.a=a},
hy:function hy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
l1:function l1(a,b){this.a=a
this.b=b},
jA:function jA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jB:function jB(a){this.a=a},
fl:function fl(a){this.a=a},
js:function js(a){this.a=a},
k0:function k0(){},
k1:function k1(a){this.a=a},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
jr:function jr(a){this.a=a},
mh(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.c&&r.h(0,q)!==B.R))break
q=A.ab(q,b);++p}return p},
ng(a,b,c){return new A.aU(a,b,c.i("aU<0>"))},
cO(a,b,c){var s=A.ab(a,b)
if(c.e.h(0,s)===B.R)return 1/0
if(c.b.h(0,s)===B.c)return 1
return 0},
nG(a){return new A.d6(a)},
bK(a,b,c){return new A.cG(c,a,b)},
dz(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=A.c([],t.D),a4=t.S,a5=A.ae(t.c1,a4)
for(s=a7.length,r=0;r<a7.length;a7.length===s||(0,A.y)(a7),++r){q=a7[r]
if(q.gbS())q=new A.iT(q)
p=a5.h(0,q)
if(p==null){a5.j(0,q,0)
p=0}a5.j(0,q,p+1)}for(s=a5.gak(a5),s=s.gw(s),o=t.q,n=t.n4,m=t.ld,l=t.bu,k=a6.a,j=J.dy(k),i=t.n;s.n();){h=s.gp(s)
q=h.a
g=h.b
f=A.c([],o)
e=A.c([],i)
for(h=j.gw(k);h.n();){d=h.gp(h)
c=q.gbA(q).Z(d,a8)
if(c<1000){B.a.k(f,d)
B.a.k(e,c)}}if(f.length===0){B.a.k(a3,q)
continue}h=A.c([],l)
for(b=0;b<f.length;++b){d=f[b]
if(!(b<e.length))return A.b(e,b)
h.push(new A.b9(d,e[b]))}d=m.a(new A.mg())
if(!!h.immutable$list)A.T(A.D("sort"))
a=h.length-1
if(a-0<=32)A.nP(h,0,a,d,n)
else A.nO(h,0,a,d,n)
a0=B.a.dR(h,0,Math.min(3*g,e.length))
B.a.c5(a0)
a1=A.c([],o)
a2=A.fX(a4)
for(;!0;){for(b=0;b<a0.length;++b){if(a2.N(0,b))continue
if(a1.length===g)break
if($.p2().J()<0.33){if(!(b<a0.length))return A.b(a0,b)
B.a.k(a1,a0[b].a)
a2.k(0,b)}}h=a1.length
if(h===g)break
else if(g-h>a0.length-a2.a)break}if(a1.length<g)B.a.k(a3,q)
for(h=a1.length,r=0;r<a1.length;a1.length===h||(0,A.y)(a1),++r)q.dm(a1[r],a8)
if(a0.length===0)B.a.k(a3,q)}for(a4=j.gw(k),s=a8.e,o=a6.c;a4.n();){n=a4.gp(a4)
if(s.h(0,n)===B.aG||s.h(0,n)===B.aH)B.a.k(o,n)}return a3},
oE(a,b){var s,r,q,p,o,n,m,l,k,j
B.a.b5(a,new A.mf())
if(0>=a.length)return A.b(a,0)
A.dz(a[0],$.pg(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.y)(s),++p)q.j(0,s[p],B.b6)
if(0>=a.length)return A.b(a,0)
a[0].e=!0
for(s=A.nU(a,1,null,A.a0(a).c),r=s.$ti,s=new A.bE(s,s.gm(s),r.i("bE<b5.E>")),o=b.a.a.a,r=r.i("b5.E"),n=t.c1,m=2;s.n();){l=r.a(s.d)
k=l.a
j=J.aD(k)
if(j.gm(k)<30){if(m>0){k=A.fY($.ms(),!0,n)
k.push($.n9())}else k=$.ms()
if(!B.a.N(A.dz(l,k,b),$.n9()))--m}else if(j.gm(k)<60)A.dz(l,$.p9(),b)
else if(j.gm(k)<100)A.dz(l,$.p7(),b)
else switch(o){case 0:case 1:case 2:case 5:case 6:A.dz(l,$.p5(),b)
break
case 3:case 4:A.dz(l,$.p6(),b)
break}}if(m===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.y)(s),++p)q.j(0,s[p],B.b7)}},
aV:function aV(){},
hX:function hX(){},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b){this.b=a
this.$ti=b},
hb:function hb(){},
fm:function fm(){},
f8:function f8(){},
fu:function fu(){},
dD:function dD(a){this.a=a},
d6:function d6(a){this.a=a},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
m9:function m9(){},
m2:function m2(){},
m6:function m6(){},
m1:function m1(){},
m3:function m3(){},
m7:function m7(){},
m8:function m8(){},
m5:function m5(){},
m4:function m4(){},
m0:function m0(){},
b9:function b9(a,b){this.a=a
this.b=b},
iT:function iT(a){this.a=a},
mg:function mg(){},
mf:function mf(){},
pA(a){var s=t.q
return new A.a4(a,A.c([],s),A.c([],s),A.jF(a))},
jF(a){var s,r,q=J.aD(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gm(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.i(B.b.t(p/q.gm(a)),B.b.t(o/q.gm(a)))},
qE(a){switch(a.a){case 10:case 11:case 9:case 1:case 3:return!0
default:return!1}},
dY:function dY(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ji:function ji(a,b){this.a=a
this.b=b},
jk:function jk(){},
jl:function jl(){},
jm:function jm(a){this.a=a},
jj:function jj(a){this.a=a},
et:function et(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jE:function jE(a,b){this.a=a
this.b=b},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
k9:function k9(a,b){this.a=a
this.b=b},
kt:function kt(){},
k4:function k4(a){this.a=a},
k5:function k5(){},
k6:function k6(){},
k7:function k7(){},
k8:function k8(){},
ky:function ky(){},
c_:function c_(a,b){this.a=a
this.b=b},
ek:function ek(a,b){this.a=a
this.b=b},
kI:function kI(a,b){this.b=a
this.a=b},
ej:function ej(a,b){this.a=a
this.b=b},
kP:function kP(a){this.a=a},
kQ:function kQ(){},
kR:function kR(a){this.a=a},
qc(a){var s=new A.kZ(A.nS(t.h8),A.nS(t.bd))
s.e1(a)
return s},
b4(a,b,c,d){return new A.ak(a,c,d,b)},
kZ:function kZ(a,b){this.a=null
this.b=a
this.c=b},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(a,b){this.a=a
this.b=b},
oB(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
oy(a){var s=B.f.a0(u.s,a>>>6)+(a&63),r=s&1,q=B.f.a0(u.M,s>>>1)
return q>>>4&-r|q&15&r-1},
ot(a,b){var s=B.f.a0(u.s,1024+(a&1023))+(b&1023),r=s&1,q=B.f.a0(u.M,s>>>1)
return q>>>4&-r|q&15&r-1},
rq(a,b){return J.pl(t.n6.a(a),b)},
pC(a){switch(a.a){case 0:return B.a7
case 1:return B.a8
case 2:return B.a9}},
e0(a){var s,r,q,p
if(a instanceof A.a1){s=a.a
r=B.au
q=null}else if(a instanceof A.a3){s=a.y
r=B.as
q=null}else if(a instanceof A.ay){s=a.a
r=B.at
q=0}else{if(a instanceof A.jt){s=a.a
r=B.f2}else if(a instanceof A.dP){p=("Consumable."+a.b).split(".")
if(1>=p.length)return A.b(p,1)
s=p[1]
r=B.av}else{s=J.dC(a)
r=B.aV}q=null}$.nv=$.nv+1
return new A.aj(a,r,s,q)},
rC(a,b,c){var s,r,q=a.r
if(q!=null){if(b===q.c)return!0
s=a.u()
r=b.u()
if(s==null||r==null)return!1
return c.f.ad(s).h(0,r)}return!0},
rO(a){A.bb(a)
$.n4().T(a,$.n6())
B.cu.dr(window,A.oz())},
mZ(){var s=0,r=A.bt(t.z),q
var $async$mZ=A.bu(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:q=$.n4()
q.e.aX()
q=A.pG(q)
B.a.k(q.a.c,t.x.a(q.gcE()))
B.cu.dr(window,A.oz())
return A.br(null,r)}})
return A.bs($async$mZ,r)}},J={
n_(a,b,c,d){return{i:a,p:b,e:c,x:d}},
lR(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.mY==null){A.rz()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.mM("Return interceptor for "+A.C(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.lp
if(o==null)o=$.lp=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.rH(a)
if(p!=null)return p
if(typeof a=="function")return B.f4
s=Object.getPrototypeOf(a)
if(s==null)return B.bi
if(s===Object.prototype)return B.bi
if(typeof q=="function"){o=$.lp
if(o==null)o=$.lp=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aI,enumerable:false,writable:true,configurable:true})
return B.aI}return B.aI},
pM(a,b){if(a<0||a>4294967295)throw A.d(A.bG(a,0,4294967295,"length",null))
return J.pO(new Array(a),b)},
pN(a,b){if(a<0)throw A.d(A.cR("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("t<0>"))},
pO(a,b){return J.ny(A.c(a,b.i("t<0>")),b)},
ny(a,b){a.fixed$length=Array
return a},
nz(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
pP(a,b){var s,r
for(s=a.length;b<s;){r=B.f.a0(a,b)
if(r!==32&&r!==13&&!J.nz(r))break;++b}return b},
pQ(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.f.av(a,s)
if(r!==32&&r!==13&&!J.nz(r))break}return b},
dx(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e3.prototype
return J.fR.prototype}if(typeof a=="string")return J.cs.prototype
if(a==null)return J.e4.prototype
if(typeof a=="boolean")return J.e2.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof A.v)return a
return J.lR(a)},
aD(a){if(typeof a=="string")return J.cs.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof A.v)return a
return J.lR(a)},
dy(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof A.v)return a
return J.lR(a)},
ru(a){if(typeof a=="number")return J.d1.prototype
if(typeof a=="string")return J.cs.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.dh.prototype
return a},
lQ(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof A.v)return a
return J.lR(a)},
Y(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dx(a).q(a,b)},
nb(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.rD(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aD(a).h(a,b)},
nc(a,b,c){return J.dy(a).j(a,b,c)},
pk(a,b,c,d){return J.lQ(a).f4(a,b,c,d)},
pl(a,b){return J.ru(a).W(a,b)},
nd(a,b){return J.dy(a).B(a,b)},
pm(a,b){return J.dy(a).F(a,b)},
aE(a){return J.dx(a).gA(a)},
ar(a){return J.dy(a).gw(a)},
as(a){return J.aD(a).gm(a)},
ne(a){return J.lQ(a).gbO(a)},
pn(a,b,c){return J.dy(a).di(a,b,c)},
dC(a){return J.dx(a).l(a)},
a:function a(){},
e2:function e2(){},
e4:function e4(){},
ct:function ct(){},
hi:function hi(){},
dh:function dh(){},
bC:function bC(){},
t:function t(a){this.$ti=a},
ka:function ka(a){this.$ti=a},
dG:function dG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d1:function d1(){},
e3:function e3(){},
fR:function fR(){},
cs:function cs(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.mD.prototype={}
J.a.prototype={
q(a,b){return a===b},
gA(a){return A.cD(a)},
l(a){return"Instance of '"+A.kA(a)+"'"}}
J.e2.prototype={
l(a){return String(a)},
dJ(a,b){return b||a},
gA(a){return a?519018:218159},
$iF:1}
J.e4.prototype={
q(a,b){return null==b},
l(a){return"null"},
gA(a){return 0},
$ia_:1}
J.ct.prototype={
gA(a){return 0},
l(a){return String(a)}}
J.hi.prototype={}
J.dh.prototype={}
J.bC.prototype={
l(a){var s=a[$.oI()]
if(s==null)return this.dT(a)
return"JavaScript function for "+J.dC(s)},
$icp:1}
J.t.prototype={
k(a,b){A.a0(a).c.a(b)
if(!!a.fixed$length)A.T(A.D("add"))
a.push(b)},
bV(a,b){var s
if(!!a.fixed$length)A.T(A.D("removeAt"))
s=a.length
if(b>=s)throw A.d(A.nJ(b,null))
return a.splice(b,1)[0]},
G(a,b){var s
if(!!a.fixed$length)A.T(A.D("remove"))
for(s=0;s<a.length;++s)if(J.Y(a[s],b)){a.splice(s,1)
return!0}return!1},
eG(a,b,c){var s,r,q,p,o
A.a0(a).i("F(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.N(b.$1(p)))s.push(p)
if(a.length!==r)throw A.d(A.bi(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
L(a,b){A.a0(a).i("j<1>").a(b)
if(!!a.fixed$length)A.T(A.D("addAll"))
this.e4(a,b)
return},
e4(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.bi(a))
for(r=0;r<s;++r)a.push(b[r])},
F(a,b){var s,r
A.a0(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.d(A.bi(a))}},
di(a,b,c){var s=A.a0(a)
return new A.ea(a,s.E(c).i("1(2)").a(b),s.i("@<1>").E(c).i("ea<1,2>"))},
fk(a,b,c){var s,r,q,p=A.a0(a)
p.i("F(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(A.N(b.$1(q)))return q
if(a.length!==s)throw A.d(A.bi(a))}return c.$0()},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
dR(a,b,c){var s=a.length
if(b>s)throw A.d(A.bG(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.bG(c,b,s,"end",null))
if(b===c)return A.c([],A.a0(a))
return A.c(a.slice(b,c),A.a0(a))},
gfj(a){if(a.length>0)return a[0]
throw A.d(A.nx())},
gdQ(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.d(A.nx())
throw A.d(A.pL())},
c4(a,b,c,d){var s,r,q,p
A.a0(a).i("j<1>").a(d)
if(!!a.immutable$list)A.T(A.D("setRange"))
A.kF(b,c,a.length)
s=c-b
if(s===0)return
A.kE(0,"skipCount")
r=d
q=J.aD(r)
if(s>q.gm(r))throw A.d(A.pK())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
f8(a,b){var s,r
A.a0(a).i("F(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.N(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.bi(a))}return!1},
b5(a,b){var s=A.a0(a)
s.i("h(1,1)?").a(b)
if(!!a.immutable$list)A.T(A.D("sort"))
A.q6(a,b,s.c)},
c5(a){var s,r,q,p
if(!!a.immutable$list)A.T(A.D("shuffle"))
s=a.length
for(;s>1;){r=B.o.I(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
fs(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.Y(a[s],b))return s}return-1},
N(a,b){var s
for(s=0;s<a.length;++s)if(J.Y(a[s],b))return!0
return!1},
l(a){return A.mC(a,"[","]")},
gw(a){return new J.dG(a,a.length,A.a0(a).i("dG<1>"))},
gA(a){return A.cD(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.T(A.D("set length"))
if(b>a.length)A.a0(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cM(a,b))
return a[b]},
j(a,b,c){A.K(b)
A.a0(a).c.a(c)
if(!!a.immutable$list)A.T(A.D("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.cM(a,b))
a[b]=c},
$ip:1,
$ij:1,
$in:1}
J.ka.prototype={}
J.dG.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.y(q))
s=r.c
if(s>=p){r.sct(null)
return!1}r.sct(q[s]);++r.c
return!0},
sct(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
J.d1.prototype={
W(a,b){var s
A.bb(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaY(b)
if(this.gaY(a)===s)return 0
if(this.gaY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaY(a){return a===0?1/a<0:a<0},
aH(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.D(""+a+".toInt()"))},
d_(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.D(""+a+".ceil()"))},
am(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.D(""+a+".floor()"))},
t(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.D(""+a+".round()"))},
ap(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
by(a,b,c){if(B.e.W(b,c)>0)throw A.d(A.oo(b))
if(this.W(a,b)<0)return b
if(this.W(a,c)>0)return c
return a},
dv(a,b){var s
if(b>20)throw A.d(A.bG(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaY(a))return"-"+s
return s},
fQ(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.bG(b,2,36,"radix",null))
s=a.toString(b)
if(B.f.av(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.T(A.D("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.f.c3("0",p)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dI(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
ca(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cO(a,b)},
a2(a,b){return(a|0)===a?a/b|0:this.cO(a,b)},
cO(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.D("Result of truncating division is "+A.C(s)+": "+A.C(a)+" ~/ "+b))},
cM(a,b){var s
if(a>0)s=this.eP(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
eP(a,b){return b>31?0:a>>>b},
$iah:1,
$iM:1,
$iO:1}
J.e3.prototype={$ih:1}
J.fR.prototype={}
J.cs.prototype={
av(a,b){if(b<0)throw A.d(A.cM(a,b))
if(b>=a.length)A.T(A.cM(a,b))
return a.charCodeAt(b)},
a0(a,b){if(b>=a.length)throw A.d(A.cM(a,b))
return a.charCodeAt(b)},
D(a,b){return a+b},
aK(a,b,c){return a.substring(b,A.kF(b,c,a.length))},
fS(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.a0(p,0)===133){s=J.pP(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.av(p,r)===133?J.pQ(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
c3(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.d6)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
dn(a,b,c){var s=b-a.length
if(s<=0)return a
return this.c3(c,s)+a},
bB(a,b,c){var s=a.length
if(c>s)throw A.d(A.bG(c,0,s,null,null))
return A.rQ(a,b,c)},
W(a,b){var s
A.a7(b)
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
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cM(a,b))
return a[b]},
$iah:1,
$inH:1,
$iu:1}
A.cu.prototype={
l(a){var s="LateInitializationError: "+this.a
return s}}
A.kJ.prototype={}
A.p.prototype={}
A.b5.prototype={
gw(a){var s=this
return new A.bE(s,s.gm(s),A.B(s).i("bE<b5.E>"))}}
A.eq.prototype={
gel(){var s=J.as(this.a),r=this.c
if(r==null||r>s)return s
return r},
geR(){var s=J.as(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.as(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.a_()
return s-q},
B(a,b){var s=this,r=s.geR()+b
if(b<0||r>=s.gel())throw A.d(A.U(b,s,"index",null,null))
return J.nd(s.a,r)}}
A.bE.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.aD(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.bi(q))
s=r.c
if(s>=o){r.saA(null)
return!1}r.saA(p.B(q,s));++r.c
return!0},
saA(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
A.cw.prototype={
gw(a){var s=A.B(this)
return new A.e9(J.ar(this.a),this.b,s.i("@<1>").E(s.Q[1]).i("e9<1,2>"))},
gm(a){return J.as(this.a)}}
A.dU.prototype={$ip:1}
A.e9.prototype={
n(){var s=this,r=s.b
if(r.n()){s.saA(s.c.$1(r.gp(r)))
return!0}s.saA(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
saA(a){this.a=this.$ti.i("2?").a(a)}}
A.ea.prototype={
gm(a){return J.as(this.a)},
B(a,b){return this.b.$1(J.nd(this.a,b))}}
A.aR.prototype={
gw(a){return new A.eu(J.ar(this.a),this.b,this.$ti.i("eu<1>"))}}
A.eu.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.N(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.av.prototype={}
A.cW.prototype={
l(a){return A.mH(this)},
$iZ:1}
A.dO.prototype={
gm(a){return this.a},
aW(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.aW(0,b))return null
return this.b[A.a7(b)]},
F(a,b){var s,r,q,p,o,n=this.$ti
n.i("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.a7(s[p])
b.$2(o,n.a(q[o]))}}}
A.a9.prototype={
bj(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.pI(r)
o=A.mF(A.r1(),q,r,s.Q[1])
A.or(p.a,o)
p.$map=o}return o},
h(a,b){return this.bj().h(0,b)},
F(a,b){this.$ti.i("~(1,2)").a(b)
this.bj().F(0,b)},
gm(a){var s=this.bj()
return s.gm(s)}}
A.k_.prototype={
$1(a){return this.a.b(a)},
$S:28}
A.kU.prototype={
aa(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.ef.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.fS.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hQ.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.kv.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.dV.prototype={}
A.eO.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ib7:1}
A.ck.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.oG(r==null?"unknown":r)+"'"},
$icp:1,
gh_(){return this},
$C:"$1",
$R:1,
$D:null}
A.fn.prototype={$C:"$0",$R:0}
A.fo.prototype={$C:"$2",$R:2}
A.hE.prototype={}
A.hz.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.oG(s)+"'"}}
A.cU.prototype={
q(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cU))return!1
return this.$_target===b.$_target&&this.a===b.a},
gA(a){return(A.m_(this.a)^A.cD(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kA(t.K.a(this.a))+"'")}}
A.hr.prototype={
l(a){return"RuntimeError: "+this.a}}
A.hZ.prototype={
l(a){return"Assertion failed: "+A.fC(this.a)}}
A.aI.prototype={
gm(a){return this.a},
ga9(a){return new A.e6(this,A.B(this).i("e6<1>"))},
gc0(a){var s=this,r=A.B(s)
return A.nD(s.ga9(s),new A.kc(s),r.c,r.Q[1])},
aW(a,b){var s=this.da(b)
return s},
da(a){var s=this,r=s.d
if(r==null)return!1
return s.az(s.aL(r,s.ay(a)),a)>=0},
L(a,b){A.B(this).i("Z<1,2>").a(b).F(0,new A.kb(this))},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bk(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bk(p,b)
q=r==null?n:r.b
return q}else return o.dc(b)},
dc(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.aL(p,q.ay(a))
r=q.az(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.B(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.cc(s==null?q.b=q.bp():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cc(r==null?q.c=q.bp():r,b,c)}else q.de(b,c)},
de(a,b){var s,r,q,p,o=this,n=A.B(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.bp()
r=o.ay(a)
q=o.aL(s,r)
if(q==null)o.bw(s,r,[o.bq(a,b)])
else{p=o.az(q,a)
if(p>=0)q[p].b=b
else q.push(o.bq(a,b))}},
G(a,b){var s=this.dd(b)
return s},
dd(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ay(a)
r=o.aL(n,s)
q=o.az(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.f_(p)
if(r.length===0)o.cu(n,s)
return p.b},
aS(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bo()}},
F(a,b){var s,r,q=this
A.B(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.bi(q))
s=s.c}},
cc(a,b,c){var s,r=this,q=A.B(r)
q.c.a(b)
q.Q[1].a(c)
s=r.bk(a,b)
if(s==null)r.bw(a,b,r.bq(b,c))
else s.b=c},
bo(){this.r=this.r+1&67108863},
bq(a,b){var s=this,r=A.B(s),q=new A.ke(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.bo()
return q},
f_(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.bo()},
ay(a){return J.aE(a)&0x3ffffff},
az(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1},
l(a){return A.mH(this)},
bk(a,b){return a[b]},
aL(a,b){return a[b]},
bw(a,b,c){a[b]=c},
cu(a,b){delete a[b]},
bp(){var s="<non-identifier-key>",r=Object.create(null)
this.bw(r,s,r)
this.cu(r,s)
return r},
$ikd:1}
A.kc.prototype={
$1(a){var s=this.a,r=A.B(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.B(this.a).i("2(1)")}}
A.kb.prototype={
$2(a,b){var s=this.a,r=A.B(s)
s.j(0,r.c.a(a),r.Q[1].a(b))},
$S(){return A.B(this.a).i("~(1,2)")}}
A.ke.prototype={}
A.e6.prototype={
gm(a){return this.a.a},
gw(a){var s=this.a,r=new A.e7(s,s.r,this.$ti.i("e7<1>"))
r.c=s.e
return r}}
A.e7.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.bi(q))
s=r.c
if(s==null){r.scb(null)
return!1}else{r.scb(s.a)
r.c=s.c
return!0}},
scb(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
A.lT.prototype={
$1(a){return this.a(a)},
$S:64}
A.lU.prototype={
$2(a,b){return this.a(a,b)},
$S:21}
A.lV.prototype={
$1(a){return this.a(A.a7(a))},
$S:26}
A.l9.prototype={
aO(){var s=this.b
if(s===this)throw A.d(new A.cu("Local '"+this.a+"' has not been initialized."))
return s},
a1(){var s=this.b
if(s===this)throw A.d(A.nB(this.a))
return s}}
A.h3.prototype={$inp:1}
A.cB.prototype={$iaQ:1}
A.d4.prototype={
gm(a){return a.length},
$iz:1}
A.cA.prototype={
h(a,b){A.bN(b,a,a.length)
return a[b]},
j(a,b,c){A.K(b)
A.ob(c)
A.bN(b,a,a.length)
a[b]=c},
$ip:1,
$ij:1,
$in:1}
A.ec.prototype={
j(a,b,c){A.K(b)
A.K(c)
A.bN(b,a,a.length)
a[b]=c},
$ip:1,
$ij:1,
$in:1}
A.eb.prototype={$imB:1}
A.h4.prototype={
h(a,b){A.bN(b,a,a.length)
return a[b]}}
A.h5.prototype={
h(a,b){A.bN(b,a,a.length)
return a[b]}}
A.h6.prototype={
h(a,b){A.bN(b,a,a.length)
return a[b]}}
A.h7.prototype={
h(a,b){A.bN(b,a,a.length)
return a[b]}}
A.h8.prototype={
h(a,b){A.bN(b,a,a.length)
return a[b]}}
A.d5.prototype={
gm(a){return a.length},
h(a,b){A.bN(b,a,a.length)
return a[b]},
$iqa:1}
A.ed.prototype={
gm(a){return a.length},
h(a,b){A.bN(b,a,a.length)
return a[b]},
$iqb:1}
A.eH.prototype={}
A.eI.prototype={}
A.eJ.prototype={}
A.eK.prototype={}
A.b6.prototype={
i(a){return A.lz(v.typeUniverse,this,a)},
E(a){return A.qx(v.typeUniverse,this,a)}}
A.ie.prototype={}
A.eU.prototype={
l(a){return A.aq(this.a,null)},
$inW:1}
A.ia.prototype={
l(a){return this.a}}
A.eV.prototype={$ic6:1}
A.l6.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:13}
A.l5.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:30}
A.l7.prototype={
$0(){this.a.$0()},
$S:8}
A.l8.prototype={
$0(){this.a.$0()},
$S:8}
A.eT.prototype={
e2(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.bv(new A.ly(this,b),0),a)
else throw A.d(A.D("`setTimeout()` not found."))},
e3(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.bv(new A.lx(this,a,Date.now(),b),0),a)
else throw A.d(A.D("Periodic timer."))},
fb(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.d(A.D("Canceling a timer."))},
$ihK:1}
A.ly.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.lx.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.e.ca(s,o)}q.c=p
r.d.$1(q)},
$S:8}
A.ev.prototype={
a3(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.cf(b)
else{s=r.a
if(q.i("aw<1>").b(b))s.cj(b)
else s.aB(q.c.a(b))}},
bz(a,b){var s=this.a
if(this.b)s.U(a,b)
else s.b9(a,b)},
$ifr:1}
A.lC.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.lD.prototype={
$2(a,b){this.a.$2(1,new A.dV(a,t.l.a(b)))},
$S:27}
A.lI.prototype={
$2(a,b){this.a(A.K(a),b)},
$S:34}
A.dq.prototype={
l(a){return"IterationMarker("+this.b+", "+A.C(this.a)+")"}}
A.cb.prototype={
gp(a){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gp(s)},
n(){var s,r,q,p,o,n,m=this
for(s=m.$ti.i("V<1>");!0;){r=m.c
if(r!=null)if(r.n())return!0
else m.scD(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.dq){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sce(null)
return!1}if(0>=o.length)return A.b(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.ar(r))
if(n instanceof A.cb){r=m.d
if(r==null)r=m.d=[]
B.a.k(r,m.a)
m.a=n.a
continue}else{m.scD(n)
continue}}}}else{m.sce(q)
return!0}}return!1},
sce(a){this.b=this.$ti.i("1?").a(a)},
scD(a){this.c=this.$ti.i("V<1>?").a(a)},
$iV:1}
A.eQ.prototype={
gw(a){return new A.cb(this.a(),this.$ti.i("cb<1>"))}}
A.dI.prototype={
l(a){return A.C(this.a)},
$iL:1,
gaJ(){return this.b}}
A.ex.prototype={}
A.bL.prototype={
bs(){},
bt(){},
sbr(a){this.dy=this.$ti.i("bL<1>?").a(a)},
scG(a){this.fr=this.$ti.i("bL<1>?").a(a)}}
A.ey.prototype={
gey(){return this.c<4},
cN(a,b,c,d){var s,r,q,p,o,n=this,m=A.B(n)
m.i("~(1)?").a(a)
t.Z.a(c)
if((n.c&4)!==0){m=new A.dn($.E,c,m.i("dn<1>"))
m.eK()
return m}s=$.E
r=d?1:0
t.bm.E(m.c).i("1(2)").a(a)
A.nZ(s,b)
q=c==null?A.op():c
t.M.a(q)
m=m.i("bL<1>")
p=new A.bL(n,a,s,r,m)
p.scG(p)
p.sbr(p)
m.a(p)
p.dx=n.c&1
o=n.e
n.sev(p)
p.sbr(null)
p.scG(o)
if(o==null)n.sep(p)
else o.sbr(p)
if(n.d==n.e)A.lH(n.a)
return p},
cJ(a){A.B(this).i("aB<1>").a(a)},
cK(a){A.B(this).i("aB<1>").a(a)},
e5(){if((this.c&4)!==0)return new A.b8("Cannot add new events after calling close")
return new A.b8("Cannot add new events while doing an addStream")},
k(a,b){var s=this
A.B(s).c.a(b)
if(!s.gey())throw A.d(s.e5())
s.aE(b)},
sep(a){this.d=A.B(this).i("bL<1>?").a(a)},
sev(a){this.e=A.B(this).i("bL<1>?").a(a)},
$ihB:1,
$iiF:1,
$iba:1}
A.ew.prototype={
aE(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.i("bM<1>");s!=null;s=s.dy)s.cd(new A.bM(a,r))}}
A.jK.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.U(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.U(q.e.aO(),q.f.aO())},
$S:10}
A.jJ.prototype={
$1(a){var s,r,q=this,p=q.x
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.nc(s,q.b,a)
if(r.b===0)q.c.aB(A.pV(s,p))}else if(r.b===0&&!q.e)q.c.U(q.f.aO(),q.r.aO())},
$S(){return this.x.i("a_(0)")}}
A.dm.prototype={
bz(a,b){A.f2(a,"error",t.K)
if((this.a.a&30)!==0)throw A.d(A.al("Future already completed"))
if(b==null)b=A.mu(a)
this.U(a,b)},
aV(a){return this.bz(a,null)},
$ifr:1}
A.ao.prototype={
a3(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.al("Future already completed"))
s.cf(r.i("1/").a(b))},
aU(a){return this.a3(a,null)},
U(a,b){this.a.b9(a,b)}}
A.ds.prototype={
a3(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.al("Future already completed"))
s.co(r.i("1/").a(b))},
aU(a){return this.a3(a,null)},
U(a,b){this.a.U(a,b)}}
A.cI.prototype={
ft(a){if((this.c&15)!==6)return!0
return this.b.b.bW(t.iW.a(this.d),a.a,t.k4,t.K)},
fo(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.fL(q,m,a.b,o,n,t.l)
else p=l.bW(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bE.b(A.bw(s))){if((r.c&1)!==0)throw A.d(A.cR("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cR("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.H.prototype={
b0(a,b,c){var s,r,q,p=this.$ti
p.E(c).i("1/(2)").a(a)
s=$.E
if(s===B.m){if(b!=null&&!t.ng.b(b)&&!t.y.b(b))throw A.d(A.nh(b,"onError",u.w))}else{c.i("@<0/>").E(p.c).i("1(2)").a(a)
if(b!=null)b=A.r5(b,s)}r=new A.H(s,c.i("H<0>"))
q=b==null?1:3
this.b7(new A.cI(r,q,a,b,p.i("@<1>").E(c).i("cI<1,2>")))
return r},
bX(a,b){return this.b0(a,null,b)},
cP(a,b,c){var s,r=this.$ti
r.E(c).i("1/(2)").a(a)
s=new A.H($.E,c.i("H<0>"))
this.b7(new A.cI(s,19,a,b,r.i("@<1>").E(c).i("cI<1,2>")))
return s},
eN(a){this.a=this.a&1|16
this.c=a},
bb(a){this.a=a.a&30|this.a&1
this.c=a.c},
b7(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.g.a(r.c)
if((s.a&24)===0){s.b7(a)
return}r.bb(s)}A.cL(null,null,r.b,t.M.a(new A.lc(r,a)))}},
cF(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.g.a(m.c)
if((n.a&24)===0){n.cF(a)
return}m.bb(n)}l.a=m.aQ(a)
A.cL(null,null,m.b,t.M.a(new A.lk(l,m)))}},
aP(){var s=t.F.a(this.c)
this.c=null
return this.aQ(s)},
aQ(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ci(a){var s,r,q,p=this
p.a^=2
try{a.b0(new A.lg(p),new A.lh(p),t.P)}catch(q){s=A.bw(q)
r=A.bP(q)
A.oD(new A.li(p,s,r))}},
co(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("aw<1>").b(a))if(q.b(a))A.lf(a,r)
else r.ci(a)
else{s=r.aP()
q.c.a(a)
r.a=8
r.c=a
A.dp(r,s)}},
aB(a){var s,r=this
r.$ti.c.a(a)
s=r.aP()
r.a=8
r.c=a
A.dp(r,s)},
U(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.aP()
this.eN(A.jb(a,b))
A.dp(this,s)},
cf(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aw<1>").b(a)){this.cj(a)
return}this.e7(s.c.a(a))},
e7(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.cL(null,null,s.b,t.M.a(new A.le(s,a)))},
cj(a){var s=this,r=s.$ti
r.i("aw<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.cL(null,null,s.b,t.M.a(new A.lj(s,a)))}else A.lf(a,s)
return}s.ci(a)},
b9(a,b){t.l.a(b)
this.a^=2
A.cL(null,null,this.b,t.M.a(new A.ld(this,a,b)))},
$iaw:1}
A.lc.prototype={
$0(){A.dp(this.a,this.b)},
$S:0}
A.lk.prototype={
$0(){A.dp(this.b,this.a.a)},
$S:0}
A.lg.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.aB(p.$ti.c.a(a))}catch(q){s=A.bw(q)
r=A.bP(q)
p.U(s,r)}},
$S:13}
A.lh.prototype={
$2(a,b){this.a.U(t.K.a(a),t.l.a(b))},
$S:40}
A.li.prototype={
$0(){this.a.U(this.b,this.c)},
$S:0}
A.le.prototype={
$0(){this.a.aB(this.b)},
$S:0}
A.lj.prototype={
$0(){A.lf(this.b,this.a)},
$S:0}
A.ld.prototype={
$0(){this.a.U(this.b,this.c)},
$S:0}
A.ln.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.fK(t.mY.a(q.d),t.z)}catch(p){s=A.bw(p)
r=A.bP(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.jb(s,r)
o.b=!0
return}if(l instanceof A.H&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.h.b(l)){n=m.b.a
q=m.a
q.c=l.bX(new A.lo(n),t.z)
q.b=!1}},
$S:0}
A.lo.prototype={
$1(a){return this.a},
$S:42}
A.lm.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bW(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bw(l)
r=A.bP(l)
q=this.a
q.c=A.jb(s,r)
q.b=!0}},
$S:0}
A.ll.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.ft(s)&&p.a.e!=null){p.c=p.a.fo(s)
p.b=!1}}catch(o){r=A.bw(o)
q=A.bP(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.jb(r,q)
n.b=!0}},
$S:0}
A.i_.prototype={}
A.c1.prototype={
gm(a){var s={},r=new A.H($.E,t.hy)
s.a=0
this.bN(new A.kN(s,this),!0,new A.kO(s,r),r.gec())
return r}}
A.kN.prototype={
$1(a){A.B(this.b).c.a(a);++this.a.a},
$S(){return A.B(this.b).i("~(1)")}}
A.kO.prototype={
$0(){this.b.co(this.a.a)},
$S:0}
A.aB.prototype={}
A.eP.prototype={
geC(){var s,r=this
if((r.b&8)===0)return A.B(r).i("ca<1>?").a(r.a)
s=A.B(r)
return s.i("ca<1>?").a(s.i("iE<1>").a(r.a).gc1())},
em(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.bp(A.B(q).i("bp<1>"))
return A.B(q).i("bp<1>").a(s)}r=A.B(q)
s=r.i("iE<1>").a(q.a).gc1()
return r.i("bp<1>").a(s)},
geS(){var s=this.a
if((this.b&8)!==0)s=t.gL.a(s).gc1()
return A.B(this).i("c8<1>").a(s)},
e8(){if((this.b&4)!==0)return new A.b8("Cannot add event after closing")
return new A.b8("Cannot add event while adding a stream")},
k(a,b){var s,r=this,q=A.B(r)
q.c.a(b)
s=r.b
if(s>=4)throw A.d(r.e8())
if((s&1)!==0)r.aE(b)
else if((s&3)===0)r.em().k(0,new A.bM(b,q.i("bM<1>")))},
cN(a,b,c,d){var s,r,q,p,o=this,n=A.B(o)
n.i("~(1)?").a(a)
t.Z.a(c)
if((o.b&3)!==0)throw A.d(A.al("Stream has already been listened to."))
s=A.qh(o,a,b,c,d,n.c)
r=o.geC()
q=o.b|=1
if((q&8)!==0){p=n.i("iE<1>").a(o.a)
p.sc1(s)
p.fI(0)}else o.a=s
s.eO(r)
n=t.M.a(new A.lv(o))
q=s.e
s.e=q|32
n.$0()
s.e&=4294967263
s.ck((q&4)!==0)
return s},
cJ(a){var s=this,r=A.B(s)
r.i("aB<1>").a(a)
if((s.b&8)!==0)r.i("iE<1>").a(s.a).h1(0)
A.lH(s.e)},
cK(a){var s=this,r=A.B(s)
r.i("aB<1>").a(a)
if((s.b&8)!==0)r.i("iE<1>").a(s.a).fI(0)
A.lH(s.f)},
$ihB:1,
$iiF:1,
$iba:1}
A.lv.prototype={
$0(){A.lH(this.a.d)},
$S:0}
A.i0.prototype={
aE(a){var s=this.$ti
s.c.a(a)
this.geS().cd(new A.bM(a,s.i("bM<1>")))}}
A.dk.prototype={}
A.bo.prototype={
gA(a){return(A.cD(this.a)^892482866)>>>0},
q(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bo&&b.a===this.a}}
A.c8.prototype={
bs(){this.x.cJ(this)},
bt(){this.x.cK(this)}}
A.dl.prototype={
eO(a){var s=this
A.B(s).i("ca<1>?").a(a)
if(a==null)return
s.sbu(a)
if(a.c!=null){s.e|=64
a.b2(s)}},
bs(){},
bt(){},
cd(a){var s=this,r=A.B(s),q=r.i("bp<1>?").a(s.r)
if(q==null)q=new A.bp(r.i("bp<1>"))
s.sbu(q)
q.k(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.b2(s)}},
aE(a){var s,r=this,q=A.B(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.dt(r.a,a,q)
r.e&=4294967263
r.ck((s&4)!==0)},
ck(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.sbu(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.bs()
else q.bt()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.b2(q)},
sbu(a){this.r=A.B(this).i("ca<1>?").a(a)},
$iaB:1,
$iba:1}
A.dr.prototype={
bN(a,b,c,d){var s=A.B(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.cN(s.i("~(1)?").a(a),d,c,b===!0)},
bM(a){return this.bN(a,null,null,null)}}
A.i5.prototype={}
A.bM.prototype={}
A.ca.prototype={
b2(a){var s,r=this
r.$ti.i("ba<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.oD(new A.ls(r,a))
r.a=1}}
A.ls.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("ba<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.B(r).i("ba<1>").a(s).aE(r.b)},
$S:0}
A.bp.prototype={
k(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.dn.prototype={
eK(){var s=this
if((s.b&2)!==0)return
A.cL(null,null,s.a,t.M.a(s.geL()))
s.b|=2},
eM(){var s,r=this,q=r.b&=4294967293
if(q>=4)return
r.b=q|1
s=r.c
if(s!=null)r.a.ds(s)},
$iaB:1}
A.iG.prototype={}
A.eY.prototype={$inY:1}
A.lG.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.l(0)
throw s},
$S:0}
A.iy.prototype={
ds(a){var s,r,q,p,o
t.M.a(a)
try{if(B.m===$.E){a.$0()
return}A.oj(null,null,this,a,t.H)}catch(q){s=A.bw(q)
r=A.bP(q)
p=t.K.a(s)
o=t.l.a(r)
A.j5(p,o)}},
dt(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.m===$.E){a.$1(b)
return}A.ok(null,null,this,a,b,t.H,c)}catch(q){s=A.bw(q)
r=A.bP(q)
p=t.K.a(s)
o=t.l.a(r)
A.j5(p,o)}},
cX(a){return new A.lt(this,t.M.a(a))},
cY(a,b){return new A.lu(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
fK(a,b){b.i("0()").a(a)
if($.E===B.m)return a.$0()
return A.oj(null,null,this,a,b)},
bW(a,b,c,d){c.i("@<0>").E(d).i("1(2)").a(a)
d.a(b)
if($.E===B.m)return a.$1(b)
return A.ok(null,null,this,a,b,c,d)},
fL(a,b,c,d,e,f){d.i("@<0>").E(e).E(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.E===B.m)return a.$2(b,c)
return A.r6(null,null,this,a,b,c,d,e,f)},
bT(a,b,c,d){return b.i("@<0>").E(c).E(d).i("1(2,3)").a(a)}}
A.lt.prototype={
$0(){return this.a.ds(this.b)},
$S:0}
A.lu.prototype={
$1(a){var s=this.c
return this.a.dt(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.lr.prototype={
ay(a){return A.m_(a)&1073741823},
az(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.eD.prototype={
h(a,b){if(!A.N(this.z.$1(b)))return null
return this.dV(b)},
j(a,b,c){var s=this.$ti
this.dX(s.c.a(b),s.Q[1].a(c))},
aW(a,b){if(!A.N(this.z.$1(b)))return!1
return this.dU(b)},
G(a,b){if(!A.N(this.z.$1(b)))return null
return this.dW(b)},
ay(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
az(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(A.N(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.lq.prototype={
$1(a){return this.a.b(a)},
$S:46}
A.eE.prototype={
gw(a){var s=this,r=new A.eF(s,s.r,s.$ti.i("eF<1>"))
r.c=s.e
return r},
gm(a){return this.a},
N(a,b){var s
if(typeof b=="number"&&(b&1073741823)===b){s=this.c
if(s==null)return!1
return t.nF.a(s[b])!=null}else return this.ed(b)},
ed(a){var s=this.d
if(s==null)return!1
return this.bi(s[J.aE(a)&1073741823],a)>=0},
k(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cl(s==null?q.b=A.mO():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cl(r==null?q.c=A.mO():r,b)}else return q.ea(0,b)},
ea(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.mO()
r=J.aE(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.bc(b)]
else{if(p.bi(q,b)>=0)return!1
q.push(p.bc(b))}return!0},
G(a,b){var s=this.eE(0,b)
return s},
eE(a,b){var s,r,q,p,o=this.d
if(o==null)return!1
s=b.gA(b)&1073741823
r=o[s]
q=this.bi(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.eb(p)
return!0},
cl(a,b){this.$ti.c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.bc(b)
return!0},
cn(){this.r=this.r+1&1073741823},
bc(a){var s,r=this,q=new A.im(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cn()
return q},
eb(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cn()},
bi(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1}}
A.im.prototype={}
A.eF.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.bi(q))
else if(r==null){s.scm(null)
return!1}else{s.scm(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
scm(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
A.e1.prototype={}
A.kf.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:47}
A.m.prototype={
gw(a){return new A.bE(a,this.gm(a),A.bd(a).i("bE<m.E>"))},
B(a,b){return this.h(a,b)},
al(a,b,c,d){var s,r=A.bd(a)
d=r.i("m.E").a(r.i("m.E?").a(d))
A.kF(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
l(a){return A.mC(a,"[","]")}}
A.e8.prototype={}
A.ki.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.C(a)
r.a=s+": "
r.a+=A.C(b)},
$S:63}
A.A.prototype={
F(a,b){var s,r,q=A.bd(a)
q.i("~(A.K,A.V)").a(b)
for(s=J.ar(this.ga9(a)),q=q.i("A.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gak(a){return J.pn(this.ga9(a),new A.kk(a),A.bd(a).i("d2<A.K,A.V>"))},
gm(a){return J.as(this.ga9(a))},
l(a){return A.mH(a)},
$iZ:1}
A.kk.prototype={
$1(a){var s,r=this.a,q=A.bd(r)
q.i("A.K").a(a)
s=q.i("A.V")
return new A.d2(a,s.a(J.nb(r,a)),q.i("@<A.K>").E(s).i("d2<1,2>"))},
$S(){return A.bd(this.a).i("d2<A.K,A.V>(A.K)")}}
A.em.prototype={
l(a){return A.mC(this,"{","}")}}
A.eL.prototype={$ip:1,$ij:1,$inN:1}
A.eZ.prototype={}
A.cm.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.cm&&this.a===b.a&&!0},
W(a,b){return B.e.W(this.a,t.cs.a(b).a)},
gA(a){var s=this.a
return(s^B.e.cM(s,30))&1073741823},
l(a){var s=this,r=A.pw(A.q3(s)),q=A.fw(A.q1(s)),p=A.fw(A.pY(s)),o=A.fw(A.pZ(s)),n=A.fw(A.q0(s)),m=A.fw(A.q2(s)),l=A.px(A.q_(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
return k},
$iah:1}
A.ai.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.ai&&this.a===b.a},
gA(a){return B.e.gA(this.a)},
W(a,b){return B.e.W(this.a,t.L.a(b).a)},
l(a){var s,r,q,p,o,n=this.a,m=B.e.a2(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.e.a2(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.e.a2(n,1e6)
p=q<10?"0":""
o=B.f.dn(B.e.l(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o},
$iah:1}
A.la.prototype={}
A.L.prototype={
gaJ(){return A.bP(this.$thrownJsError)}}
A.dH.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fC(s)
return"Assertion failed"}}
A.c6.prototype={}
A.hc.prototype={
l(a){return"Throw of null."}}
A.bx.prototype={
gbh(){return"Invalid argument"+(!this.a?"(s)":"")},
gbg(){return""},
l(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+A.C(n),l=q.gbh()+o+m
if(!q.a)return l
s=q.gbg()
r=A.fC(q.b)
return l+s+": "+r}}
A.d9.prototype={
gbh(){return"RangeError"},
gbg(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.C(q):""
else if(q==null)s=": Not greater than or equal to "+A.C(r)
else if(q>r)s=": Not in inclusive range "+A.C(r)+".."+A.C(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.C(r)
return s}}
A.fP.prototype={
gbh(){return"RangeError"},
gbg(){if(A.K(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.hS.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.hP.prototype={
l(a){var s="UnimplementedError: "+this.a
return s}}
A.b8.prototype={
l(a){return"Bad state: "+this.a}}
A.fs.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fC(s)+"."}}
A.hf.prototype={
l(a){return"Out of Memory"},
gaJ(){return null},
$iL:1}
A.ep.prototype={
l(a){return"Stack Overflow"},
gaJ(){return null},
$iL:1}
A.fv.prototype={
l(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.ib.prototype={
l(a){return"Exception: "+this.a}}
A.j.prototype={
di(a,b,c){var s=A.B(this)
return A.nD(this,s.E(c).i("1(j.E)").a(b),s.i("j.E"),c)},
F(a,b){var s
A.B(this).i("~(j.E)").a(b)
for(s=this.gw(this);s.n();)b.$1(s.gp(s))},
gm(a){var s,r=this.gw(this)
for(s=0;r.n();)++s
return s},
B(a,b){var s,r,q
A.kE(b,"index")
for(s=this.gw(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.d(A.U(b,this,"index",null,r))},
l(a){return A.nw(this,"(",")")}}
A.V.prototype={}
A.d2.prototype={
l(a){return"MapEntry("+A.C(this.a)+": "+A.C(this.b)+")"}}
A.a_.prototype={
gA(a){return A.v.prototype.gA.call(this,this)},
l(a){return"null"}}
A.v.prototype={$iv:1,
q(a,b){return this===b},
gA(a){return A.cD(this)},
l(a){return"Instance of '"+A.kA(this)+"'"},
toString(){return this.l(this)}}
A.iJ.prototype={
l(a){return""},
$ib7:1}
A.hC.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.q.prototype={}
A.j9.prototype={
gm(a){return a.length}}
A.fa.prototype={
l(a){return String(a)}}
A.fb.prototype={
l(a){return String(a)}}
A.fh.prototype={}
A.fi.prototype={
gbO(a){return new A.cH(a,"load",!1,t.bz)}}
A.ch.prototype={
sao(a,b){a.height=b},
sar(a,b){a.width=b},
dH(a,b){return a.getContext(b)},
$ich:1}
A.bg.prototype={
gm(a){return a.length}}
A.ju.prototype={
gm(a){return a.length}}
A.J.prototype={$iJ:1}
A.cX.prototype={
e9(a,b){var s=$.oH(),r=s[b]
if(typeof r=="string")return r
r=this.eT(a,b)
s[b]=r
return r},
eT(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.oJ()+b
if(s in a)return s
return b},
gm(a){return a.length}}
A.jv.prototype={}
A.b1.prototype={}
A.bz.prototype={}
A.jw.prototype={
gm(a){return a.length}}
A.jx.prototype={
gm(a){return a.length}}
A.jy.prototype={
gm(a){return a.length},
h(a,b){return a[b]}}
A.bA.prototype={$ibA:1}
A.bX.prototype={
l(a){return String(a)},
$ibX:1}
A.dR.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.mx.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.dS.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.C(r)+", "
s=a.top
s.toString
return r+A.C(s)+") "+A.C(this.gar(a))+" x "+A.C(this.gao(a))},
q(a,b){var s,r
if(b==null)return!1
if(t.mx.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=J.lQ(b)
s=this.gar(a)===s.gar(b)&&this.gao(a)===s.gao(b)}else s=!1}else s=!1}else s=!1
return s},
gA(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.cC(r,s,this.gar(a),this.gao(a))},
gcA(a){return a.height},
gao(a){var s=this.gcA(a)
s.toString
return s},
gcQ(a){return a.width},
gar(a){var s=this.gcQ(a)
s.toString
return s},
$ibm:1}
A.fy.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
A.a7(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.jz.prototype={
gm(a){return a.length}}
A.a8.prototype={
l(a){return a.localName},
gbO(a){return new A.cH(a,"load",!1,t.bz)},
$ia8:1}
A.l.prototype={$il:1}
A.e.prototype={
f4(a,b,c,d){t.du.a(c)
if(c!=null)this.e6(a,b,c,!1)},
e6(a,b,c,d){return a.addEventListener(b,A.bv(t.du.a(c),1),!1)},
$ie:1}
A.aF.prototype={$iaF:1}
A.fE.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.et.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.fF.prototype={
gm(a){return a.length}}
A.fI.prototype={
gm(a){return a.length}}
A.aG.prototype={$iaG:1}
A.k3.prototype={
gm(a){return a.length}}
A.cq.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fh.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.e_.prototype={
fC(a,b,c){return a.open(b,c)}}
A.cr.prototype={}
A.d0.prototype={$id0:1}
A.bD.prototype={$ibD:1}
A.kh.prototype={
l(a){return String(a)}}
A.cy.prototype={}
A.km.prototype={
gm(a){return a.length}}
A.h_.prototype={
h(a,b){return A.ce(a.get(A.a7(b)))},
F(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.ce(r.value[1]))}},
ga9(a){var s=A.c([],t.s)
this.F(a,new A.kp(s))
return s},
gm(a){return a.size},
$iZ:1}
A.kp.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:6}
A.h0.prototype={
h(a,b){return A.ce(a.get(A.a7(b)))},
F(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.ce(r.value[1]))}},
ga9(a){var s=A.c([],t.s)
this.F(a,new A.kq(s))
return s},
gm(a){return a.size},
$iZ:1}
A.kq.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:6}
A.aJ.prototype={$iaJ:1}
A.h1.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.ib.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.aK.prototype={$iaK:1}
A.w.prototype={
l(a){var s=a.nodeValue
return s==null?this.dS(a):s},
$iw:1}
A.ee.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fh.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.aL.prototype={
gm(a){return a.length},
$iaL:1}
A.hj.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.d8.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.hq.prototype={
h(a,b){return A.ce(a.get(A.a7(b)))},
F(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.ce(r.value[1]))}},
ga9(a){var s=A.c([],t.s)
this.F(a,new A.kH(s))
return s},
gm(a){return a.size},
$iZ:1}
A.kH.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:6}
A.hs.prototype={
gm(a){return a.length}}
A.aA.prototype={$iaA:1}
A.hw.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fm.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.aN.prototype={$iaN:1}
A.hx.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.cA.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.aO.prototype={
gm(a){return a.length},
$iaO:1}
A.hA.prototype={
h(a,b){return a.getItem(A.a7(b))},
F(a,b){var s,r,q
t.gS.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga9(a){var s=A.c([],t.s)
this.F(a,new A.kM(s))
return s},
gm(a){return a.length},
$iZ:1}
A.kM.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:20}
A.am.prototype={$iam:1}
A.aC.prototype={$iaC:1}
A.af.prototype={$iaf:1}
A.hI.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.gJ.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.hJ.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.dQ.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.kS.prototype={
gm(a){return a.length}}
A.aP.prototype={$iaP:1}
A.hL.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.ki.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.kT.prototype={
gm(a){return a.length}}
A.bn.prototype={}
A.kX.prototype={
l(a){return String(a)}}
A.di.prototype={$idi:1}
A.hV.prototype={
gm(a){return a.length}}
A.dj.prototype={
dr(a,b){var s
t.hv.a(b)
this.en(a)
s=A.om(b,t.cZ)
s.toString
return this.eH(a,s)},
eH(a,b){return a.requestAnimationFrame(A.bv(t.hv.a(b),1))},
en(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.i3.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.d5.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.ez.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.C(r)+", "
s=a.top
s.toString
s=r+A.C(s)+") "
r=a.width
r.toString
r=s+A.C(r)+" x "
s=a.height
s.toString
return r+A.C(s)},
q(a,b){var s,r
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
r=J.lQ(b)
if(s===r.gar(b)){s=a.height
s.toString
r=s===r.gao(b)
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
return A.cC(p,s,r,q)},
gcA(a){return a.height},
gao(a){var s=a.height
s.toString
return s},
gcQ(a){return a.width},
gar(a){var s=a.width
s.toString
return s}}
A.ig.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.ef.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.eG.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fh.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.iC.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.hH.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.iK.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.lv.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.mz.prototype={}
A.eA.prototype={
bN(a,b,c,d){var s=A.B(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.eC(this.a,this.b,a,!1,s.c)}}
A.cH.prototype={}
A.eB.prototype={}
A.lb.prototype={
$1(a){return this.a.$1(t.U.a(a))},
$S:11}
A.r.prototype={
gw(a){return new A.dW(a,this.gm(a),A.bd(a).i("dW<r.E>"))}}
A.dW.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.scB(J.nb(s.a,r))
s.c=r
return!0}s.scB(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
scB(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
A.i4.prototype={}
A.i6.prototype={}
A.i7.prototype={}
A.i8.prototype={}
A.i9.prototype={}
A.ic.prototype={}
A.id.prototype={}
A.ih.prototype={}
A.ii.prototype={}
A.io.prototype={}
A.ip.prototype={}
A.iq.prototype={}
A.ir.prototype={}
A.is.prototype={}
A.it.prototype={}
A.iw.prototype={}
A.ix.prototype={}
A.iz.prototype={}
A.eM.prototype={}
A.eN.prototype={}
A.iA.prototype={}
A.iB.prototype={}
A.iD.prototype={}
A.iL.prototype={}
A.iM.prototype={}
A.eR.prototype={}
A.eS.prototype={}
A.iO.prototype={}
A.iP.prototype={}
A.iW.prototype={}
A.iX.prototype={}
A.iY.prototype={}
A.iZ.prototype={}
A.j_.prototype={}
A.j0.prototype={}
A.j1.prototype={}
A.j2.prototype={}
A.j3.prototype={}
A.j4.prototype={}
A.l2.prototype={
d5(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.k(r,a)
B.a.k(this.b,null)
return q},
c2(a){var s,r,q,p,o,n,m,l,k=this,j={}
if(a==null)return a
if(A.lE(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.T(A.cR("DateTime is outside valid range: "+s,null))
A.f2(!0,"isUtc",t.k4)
return new A.cm(s,!0)}if(a instanceof RegExp)throw A.d(A.mM("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.rM(a,t.z)
if(A.ox(a)){q=k.d5(a)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=j.a=r[q]
if(p!=null)return p
o=t.z
p=A.ae(o,o)
j.a=p
B.a.j(r,q,p)
k.fl(a,new A.l4(j,k))
return j.a}if(a instanceof Array){n=a
q=k.d5(n)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p!=null)return p
o=J.aD(n)
m=o.gm(n)
p=k.c?new Array(m):n
B.a.j(r,q,p)
for(r=J.dy(p),l=0;l<m;++l)r.j(p,l,k.c2(o.h(n,l)))
return p}return a}}
A.l4.prototype={
$2(a,b){var s=this.a.a,r=this.b.c2(b)
J.nc(s,a,r)
return r},
$S:22}
A.l3.prototype={
fl(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.ku.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.ma.prototype={
$1(a){return this.a.a3(0,this.b.i("0/?").a(a))},
$S:5}
A.mb.prototype={
$1(a){if(a==null)return this.a.aV(new A.ku(a===undefined))
return this.a.aV(a)},
$S:5}
A.ij.prototype={
I(a){if(a<=0||a>4294967296)throw A.d(A.q4("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
J(){return Math.random()},
fw(){return Math.random()<0.5},
$inI:1}
A.aW.prototype={$iaW:1}
A.fT.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
t.kT.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$in:1}
A.aZ.prototype={$iaZ:1}
A.hd.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
t.ai.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$in:1}
A.kz.prototype={
gm(a){return a.length}}
A.hD.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
A.a7(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$in:1}
A.o.prototype={
gbO(a){return new A.cH(a,"load",!1,t.bz)}}
A.b_.prototype={$ib_:1}
A.hM.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.U(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
t.hk.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
B(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$in:1}
A.ik.prototype={}
A.il.prototype={}
A.iu.prototype={}
A.iv.prototype={}
A.iH.prototype={}
A.iI.prototype={}
A.iQ.prototype={}
A.iR.prototype={}
A.be.prototype={
gm(a){return a.length},
$ibe:1}
A.dK.prototype={
sfa(a,b){a.buffer=b}}
A.cg.prototype={
ej(a,b,c,d){t.p0.a(c)
t.lW.a(d)
return a.decodeAudioData(b,A.bv(c,1),A.bv(d,1))},
fe(a,b){var s=new A.H($.E,t.og),r=new A.ao(s,t.oJ)
this.ej(a,b,new A.jf(r),new A.jg(r))
return s},
$icg:1}
A.jf.prototype={
$1(a){this.a.a3(0,t.bD.a(a))},
$S:19}
A.jg.prototype={
$1(a){this.a.aV(t.jW.a(a))},
$S:24}
A.I.prototype={
cp(a,b,c,d){return a.connect(b,c,d)},
$iI:1}
A.fc.prototype={
sfZ(a,b){a.value=b}}
A.fd.prototype={
h(a,b){return A.ce(a.get(A.a7(b)))},
F(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.ce(r.value[1]))}},
ga9(a){var s=A.c([],t.s)
this.F(a,new A.jh(s))
return s},
gm(a){return a.size},
$iZ:1}
A.jh.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:6}
A.by.prototype={}
A.fe.prototype={
gm(a){return a.length}}
A.dL.prototype={}
A.d_.prototype={}
A.he.prototype={
gm(a){return a.length}}
A.i2.prototype={}
A.fk.prototype={$ifk:1}
A.fK.prototype={$ifK:1}
A.hk.prototype={$ihk:1}
A.da.prototype={
cZ(a,b){return a.bindVertexArray(b)},
cW(a,b,c){return a.bindBuffer(b,c)},
aF(a,b,c){return a.bindFramebuffer(b,c)},
S(a,b,c){return a.bindTexture(b,c)},
d0(a,b){return a.deleteTexture(b)},
bI(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aG(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.mV(g)){s.eV(a,b,c,d,e,f,g,h,i,j)
return}if(t.hQ.b(g)&&h==null&&r&&j==null){s.eW(a,b,c,d,e,f,g)
return}if(t.jQ.b(g)&&h==null&&r&&j==null){s.eX(a,b,c,d,e,f,g)
return}if(t.eL.b(g)&&h==null&&r&&j==null){s.eY(a,b,c,d,e,f,g)
return}throw A.d(A.cR("Incorrect number or type of arguments",null))},
du(a,b,c,d,e,f,g){return this.aG(a,b,c,d,e,f,g,null,null,null)},
eV(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
eW(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
eX(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
eY(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fT(a,b,c){return a.uniform1f(b,c)},
fU(a,b,c){return a.uniform1i(b,c)},
fV(a,b,c,d){return a.uniform2f(b,c,d)},
fW(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fX(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fY(a,b){return a.useProgram(b)},
$ida:1}
A.bI.prototype={$ibI:1}
A.hO.prototype={$ihO:1}
A.hU.prototype={$ihU:1}
A.bH.prototype={
gw(a){return new A.de(this.a,0,0)},
gm(a){var s,r,q=this.a,p=q.length
if(p===0)return 0
s=new A.jn(q,p,0,176)
for(r=0;s.fz()>=0;)++r
return r},
q(a,b){if(b==null)return!1
return t.m1.b(b)&&this.a===b.a},
gA(a){return B.f.gA(this.a)},
l(a){return this.a},
$inq:1}
A.de.prototype={
gp(a){var s=this,r=s.d
return r==null?s.d=B.f.aK(s.a,s.b,s.c):r},
n(){return this.b8(1,this.c)},
b8(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(a>0){s=j.c
for(r=j.a,q=r.length,p=176;s<q;s=n){o=B.f.av(r,s)
n=s+1
if((o&64512)!==55296)m=A.oy(o)
else if(n<q){l=B.f.av(r,n)
if((l&64512)===56320){++n
m=A.ot(o,l)}else m=2}else m=2
p=B.f.a0(u.S,(p&240|m)>>>0)
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
$iV:1}
A.jn.prototype={
fz(){var s,r,q,p,o,n,m,l=this,k=u.S
for(s=l.b,r=l.a;q=l.c,q<s;){p=l.c=q+1
o=B.f.a0(r,q)
if((o&64512)!==55296){p=B.f.a0(k,l.d&240|A.oy(o))
l.d=p
if((p&1)===0)return q
continue}if(p<s){n=B.f.a0(r,p)
if((n&64512)===56320){m=A.ot(o,n);++l.c}else m=2}else m=2
p=B.f.a0(k,(l.d&240|m)>>>0)
l.d=p
if((p&1)===0)return q}s=B.f.a0(k,l.d&240|15)
l.d=s
if((s&1)===0)return q
return-1}}
A.fO.prototype={
bf(a){var s=this.b
if(!(a>=0&&a<s.length))return A.b(s,a)
s=s[a]
return s==null?this.$ti.c.a(null):s},
k(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b);++o.d
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.bl(q,null,!1,n.i("1?"))
B.a.c4(p,0,o.c,o.b)
o.sbv(p)}o.ba(b,o.c++)},
gm(a){return this.c},
G(a,b){var s,r,q=this
q.$ti.c.a(b)
s=q.ew(b)
if(s<0)return!1;++q.d
r=q.eF()
if(s<q.c)if(q.a.$2(r,b)<=0)q.ba(r,s)
else q.cg(r,s)
return!0},
eZ(){var s,r,q=this.$ti,p=A.c([],q.i("t<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
l(a){var s=this.b
return A.nw(A.nU(s,0,A.f2(this.c,"count",t.S),A.a0(s).c),"(",")")},
aw(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.bl(q,null,!1,n.i("1?"))
B.a.c4(p,0,o.c,o.b)
o.sbv(p)}o.ba(b,o.c++)},
ew(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.bf(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.Y(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
eF(){var s=this,r=s.c-1,q=s.bf(r)
B.a.j(s.b,r,null)
s.c=r
return q},
ba(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.e.a2(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.a5()
if(q>0)break
B.a.j(o.b,b,p)}B.a.j(o.b,b,a)},
cg(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.$ti.c
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
if(p<q){j=i.bf(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sbv(a){this.b=this.$ti.i("n<1?>").a(a)}}
A.lA.prototype={
gw(a){var s=this.a
return new A.cJ(s,s.d,this.$ti.i("cJ<1>"))}}
A.cJ.prototype={
n(){var s,r=this,q=r.a
if(r.b!==q.d)throw A.d(A.bi(q))
s=r.d+1
if(0<=s&&s<q.c){q=q.b
if(!(s>=0&&s<q.length))return A.b(q,s)
r.scH(q[s])
r.d=s
return!0}r.scH(null)
r.d=-2
return!1},
gp(a){var s
if(this.d<0)s=A.T(A.al("No element"))
else{s=this.c
if(s==null)s=this.$ti.c.a(null)}return s},
scH(a){this.c=this.$ti.i("1?").a(a)},
$iV:1}
A.f.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.f&&b.a===this.a},
gA(a){return B.e.gA(this.a)},
l(a){return"Color(0x"+B.f.dn(B.e.fQ(this.a,16),8,"0")+")"}}
A.a5.prototype={
d7(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.e.aH(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.d(A.al(b.l(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.e.aH(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.d(A.mA(b.l(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
ae(a,b,c){var s=B.e.aH(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
K(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.e.aH(d*s+c)
q=p.c
if(r>=q.length)throw A.d(A.mA("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
l(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.e.aH(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.C(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.P.prototype={
a_(a,b){t.mn.a(b)
return new A.P(this.a-b.a,this.b-b.b)},
D(a,b){return new A.P(this.a+b.a,this.b+b.b)},
q(a,b){if(b==null)return!1
return b instanceof A.P&&b.a===this.a&&b.b===this.b},
gA(a){return A.cC(this.a,this.b,B.y,B.y)},
l(a){return"Offset("+B.b.dv(this.a,1)+", "+B.b.dv(this.b,1)+")"}}
A.cQ.prototype={
ga7(a){return B.b.t(this.b.d/24)},
ga8(a){return B.b.t(this.b.e/36)},
u(){var s=this.b
return new A.i(B.b.t(s.d/24),B.b.t(s.e/36))},
$idZ:1,
gbL(){return null}}
A.j8.prototype={}
A.j7.prototype={
f9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.b
c.fB()
s=t.c7
r=A.c([],s)
q=A.c([],s)
s=b.x1
p=s.e
s=s.d
if(!(s<p.length))return A.b(p,s)
o=p[s]
s=a.u()
s.toString
n=b.f.ad(s)
for(p=o.b,m=p.length,l=n.c,k=n.a,j=l.length,c=c.a,i=0;i<p.length;p.length===m||(0,A.y)(p),++i){h=p[i]
if(h.e)continue
g=h.u()
if(g==null)continue
f=g.aZ(s)
e=g.b*k+g.a
if(!(e>=0&&e<j))return A.b(l,e)
if(l[e]<=0||h===a)continue
if(!A.ow(h,a))B.a.k(q,h)
else if(f<10.5){B.a.k(r,h)
e=h.u()
d=e.b*100+e.a
if(!(d>=0&&d<4000))return A.b(c,d)
B.fG.j(c,d,Math.max(c[d],20))}}c=this.a.ac(a,r,q,new A.ag(null,null),b).a
if(c==null)return new A.dd()
return c}}
A.ag.prototype={}
A.au.prototype={}
A.c3.prototype={
ac(a,b,c,d,e){var s,r,q=null,p=t.p
p.a(b)
p.a(c)
t.O.a(e)
if(d.b!=null)return d
p=a.r
s=p==null
if((s?q:p.c)!=null)r=B.a.N(b,s?q:p.c)
else r=!1
if(r){if(s)p=q
else{p=p.c
p.toString}return new A.ag(q,p)}return d}}
A.c4.prototype={
ac(a,b,c,d,e){var s,r=t.p
r.a(b)
r.a(c)
t.O.a(e)
if(d.b!=null)return d
if(0<b.length){s=b[0]
r=a.r
if(r!=null)r.c=s
return new A.ag(null,s)}return d}}
A.cV.prototype={
ac(a,b,c,d,e){var s,r,q=t.p
q.a(b)
q.a(c)
t.O.a(e)
if(d.b!=null||c.length===0)return d
for(q=c.length,s=0;s<q;++s){r=c[s].r
if(r!=null&&r.c!=null){q=r.c
q.toString
return new A.ag(null,q)}}return d}}
A.c0.prototype={
ac(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=t.p
j.a(b)
j.a(c)
j=t.O.a(e).x1
s=j.e
j=j.d
if(!(j<s.length))return A.b(s,j)
r=s[j]
if(d.b!=null)return d
for(j=a.r.b.a,q=-1,p=0,o=0;o<4000;++o){n=j[o]
if(n>p){p=n
q=o}}if(q===-1)return d
j=B.e.dI(q,100)
s=B.e.a2(q,100)
m=$.f5()
l=a.u()
l.toString
k=m.bG(l,new A.i(j,s),r,B.V)
if(k==null)return d
j=k.b.d
s=a.u()
s.toString
return new A.ag(new A.aY(j.a_(0,s),a),null)}}
A.hn.prototype={
ac(a,b,c,d,e){var s,r,q,p=t.p
p.a(b)
p.a(c)
t.O.a(e)
p=e.x1
s=p.e
p=p.d
if(!(p<s.length))return A.b(s,p)
r=s[p]
if(this.b){this.b=!1
return d}p=a.u()
p.toString
q=e.dx.a.bF(r,p,-1)
if(q==null)return d
this.b=!0
p=a.u()
p.toString
return new A.ag(new A.aY(q.a_(0,p),a),null)}}
A.ei.prototype={
ac(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=t.p
c.a(b)
c.a(a0)
t.O.a(a2)
c=a2.x1
s=c.e
c=c.d
if(!(c<s.length))return A.b(s,c)
r=s[c]
c=a.c
if(c.b/c.a>0.3)return a1
c=e.a
if(c!=null){c=c.d
s=a.u()
s.toString
q=c.a_(0,s)
e.a=e.a.b
return new A.ag(new A.aY(q,a),d)}c=a.u()
c.toString
s=a2.dx.a
p=s.bF(r,c,-1)
if(p==null){o=c.b*100+c.a
s=s.a
if(!(o>=0&&o<4000))return A.b(s,o)
n=s[o]
m=a2.f.ad(c)
for(c=m.c,l=m.a,k=c.length,j=d,i=1;i<100;++i)for(h=1;h<40;++h){o=h*100+i
if(!(o<4000))return A.b(s,o)
g=s[o]
f=h*l+i
if(!(f<k))return A.b(c,f)
if(c[f]>0&&g<n){j=new A.i(i,h)
n=g}}if(j!=null){c=$.f5()
s=a.u()
s.toString
e.a=c.d4(s,j,r)}return new A.ag(new A.dd(),d)}c=a.u()
c.toString
return new A.ag(new A.aY(p.a_(0,c),a),d)}}
A.ho.prototype={
ac(a,b,c,d,e){var s,r,q,p,o,n,m=t.p
m.a(b)
m.a(c)
t.O.a(e)
m=e.x1
s=m.e
m=m.d
if(!(m<s.length))return A.b(s,m)
r=s[m]
for(m=c.length,s=this.a,q=0;q<c.length;c.length===m||(0,A.y)(c),++q){p=c[q].u()
p.toString
o=a.u()
o.toString
if(p.aZ(o)<=s)return d}if(b.length===0)return d
m=a.u()
m.toString
n=e.dx.a.bF(r,m,-1)
if(n==null)return d
m=a.u()
m.toString
return new A.ag(new A.aY(n.a_(0,m),a),null)}}
A.lS.prototype={
$1(a){t.J.a(a)
return a.c===B.aW&&t.mm.a(a.b).a===this.a.Q.a},
$S:25}
A.bR.prototype={
ac(a,b,c,d,e){var s,r,q,p,o,n,m=t.p
m.a(b)
m.a(c)
m=t.O.a(e).x1
s=m.e
m=m.d
if(!(m<s.length))return A.b(s,m)
r=s[m]
if(d.a!=null||d.b==null)return d
m=d.b
m.toString
s=$.f5()
q=a.u()
q.toString
p=m.u()
p.toString
o=s.d4(q,p,r)
if(o==null)return d
s=a.c.x
n=s.gbR()
if(n!=null&&o.gd1()<=n.ch/5){q=s.b.h(0,B.p)
q.toString
if(q.e===0)if(A.rx(s,n))return new A.ag(new A.eh(a),m)
else{s=o.b.d
q=a.u()
q.toString
return new A.ag(new A.aY(s.a_(0,q),a),m)}s=m.u()
s.toString
return new A.ag(new A.eg(s,a),m)}s=o.b.d
q=a.u()
q.toString
return new A.ag(new A.aY(s.a_(0,q),a),m)}}
A.bh.prototype={
ac(a,b,c,d,e){var s,r,q,p,o=t.p
o.a(b)
o.a(c)
t.O.a(e)
for(o=this.a,s=o.length,r=d,q=0;q<o.length;o.length===s||(0,A.y)(o),++q,r=p){p=o[q].ac(a,b,c,r,e)
if(p.a!=null)return p}return r},
$iau:1}
A.bZ.prototype={}
A.mk.prototype={
$0(){return new A.Q(2,6,0,0,B.bd)},
$S:2}
A.mi.prototype={
$0(){return new A.bh(A.c([new A.c3(),new A.c4(),new A.ei(),new A.bR(),new A.c0()],t.a))},
$S:3}
A.mj.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.me.prototype={
$0(){return new A.Q(2,4,0,0,B.n)},
$S:2}
A.mc.prototype={
$0(){return new A.bh(A.c([new A.c3(),new A.c4(),new A.ei(),new A.bR(),new A.c0()],t.a))},
$S:3}
A.md.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.mn.prototype={
$0(){return new A.Q(10,7,0,0,B.n)},
$S:2}
A.ml.prototype={
$0(){return new A.bh(A.c([new A.c3(),new A.c4(),new A.cV(),new A.bR(),new A.c0()],t.a))},
$S:3}
A.mm.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.mq.prototype={
$0(){return new A.Q(10,7,0,0,B.bd)},
$S:2}
A.mo.prototype={
$0(){return new A.bh(A.c([new A.c3(),new A.c4(),new A.cV(),new A.hn(),new A.bR(),new A.c0()],t.a))},
$S:3}
A.mp.prototype={
$0(){var s=A.e0(B.O)
s.e=2
return A.c([s],t.I)},
$S:4}
A.lM.prototype={
$0(){return new A.Q(3,7,0,0,B.fr)},
$S:2}
A.lK.prototype={
$0(){return new A.bh(A.c([new A.c3(),new A.c4(),new A.cV(),new A.ho(6),new A.bR(),new A.c0()],t.a))},
$S:3}
A.lL.prototype={
$0(){return A.c([A.e0(B.O)],t.I)},
$S:4}
A.jo.prototype={
dz(a,b,c,d,e,f){var s,r=this,q=Math.min(Math.max(B.b.ap(c*24-f/2),0),B.e.ap(2688-f)),p=Math.min(Math.max(B.b.ap(d*36-e/2),0),B.e.ap(1476-e)),o=r.cv(Math.abs(q-r.a)),n=r.cv(Math.abs(p-r.b))
if(b){r.a=q
r.b=p
return}s=r.a
if(q>s)r.a=s+o
else if(q<s)r.a=s-o
s=r.b
if(p>s)r.b=s+n
else if(p<s)r.b=s-n},
cv(a){if(a>30)return 6
if(a>20)return 4
return 1}}
A.X.prototype={
h(a,b){return this.b.h(0,A.B(this).i("X.T").a(b))}}
A.bY.prototype={}
A.cx.prototype={}
A.fL.prototype={
dZ(a){var s=this.a,r=s.cx.b
new A.bo(r,A.B(r).i("bo<1>")).bM(this.gfm())
s=s.go
new A.ex(s,A.B(s).i("ex<1>")).bM(new A.jM(this))},
bJ(a){return this.fn(t.h8.a(a))},
fn(a){var s=0,r=A.bt(t.H),q,p=this,o
var $async$bJ=A.bu(function(b,c){if(b===1)return A.bq(c,r)
while(true)switch(s){case 0:o=p.e
if(o.length>3){s=1
break}B.a.k(o,a)
if(p.f){s=1
break}p.aN()
case 1:return A.br(q,r)}})
return A.bs($async$bJ,r)},
aN(){var s=0,r=A.bt(t.z),q=1,p,o=[],n=this,m
var $async$aN=A.bu(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.f=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.aa(n.aD(),$async$aN)
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
case 4:return A.br(null,r)
case 1:return A.bq(p,r)}})
return A.bs($async$aN,r)},
cI(){var s=new A.H($.E,t.cU),r=new A.ds(s,t.iF)
B.a.k(this.a.c,t.x.a(t.nD.a(r.gfc(r))))
return s},
V(){var s=0,r=A.bt(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$V=A.bu(function(a2,a3){if(a2===1)return A.bq(a3,r)
while(true)$async$outer:switch(s){case 0:a=p.a
a0=a.x1
a1=a0.e
a0=a0.d
if(!(a0<a1.length)){q=A.b(a1,a0)
s=1
break}a0=a1[a0].b
o=A.c(a0.slice(0),A.a0(a0))
a0=p.b,a1=B.a.gf3(a0),n=t.nt,m=p.c,l=p.d,k=p.e,j=0,i=!1
case 4:if(!!0){s=5
break}case 6:if(!(h=a0.length,h!==0)){s=7
break}if(0>=h){q=A.b(a0,0)
s=1
break}s=8
return A.aa(a0[0].as(a),$async$V)
case 8:g=a3
B.a.L(m,g.r)
case 9:if(!(h=g.a,h!=null)){s=10
break}B.a.j(a0,0,h)
s=11
return A.aa(h.as(a),$async$V)
case 11:g=a3
B.a.L(m,g.r)
s=9
break
case 10:h=g.c
if(h!=null){f=a.fy
if(f===$){e=A.mL(a.a)
A.bO(a.fy,"ui")
a.fy=e
f=e}f.c.r.cV(h)}d=g.x
s=d!=null?12:13
break
case 12:s=!g.f&&k.length===0?14:16
break
case 14:s=l.length!==0?17:18
break
case 17:s=19
return A.aa(p.cw(),$async$V)
case 19:case 18:s=20
return A.aa(p.aC(d),$async$V)
case 20:s=15
break
case 16:B.a.k(l,d)
case 15:case 13:case 21:if(!(h=m.length,h!==0)){s=22
break}if(0>=h){q=A.b(m,-1)
s=1
break}s=23
return A.aa(m.pop().as(a),$async$V)
case 23:e=a3
B.a.L(m,e.r)
case 24:if(!(h=e.a,h!=null)){s=25
break}s=26
return A.aa(h.as(a),$async$V)
case 26:e=a3
B.a.L(m,e.r)
s=24
break
case 25:h=e.c
if(h!=null){f=a.fy
if(f===$){e=A.mL(a.a)
A.bO(a.fy,"ui")
a.fy=e
f=e}f.c.r.cV(h)}s=21
break
case 22:if(g.d)i=B.f3.dJ(i,!0)
B.a.bV(a0,0)
s=6
break
case 7:if(!i){s=3
break}for(;h=o.length,j<h;){if(!(j>=0)){q=A.b(o,j)
s=1
break $async$outer}c=o[j];++j
if(c.u()==null)continue
if(A.rL(n.a(a1),c,a)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=l.length!==0?27:29
break
case 27:s=k.length===0?30:32
break
case 30:s=33
return A.aa(p.cw(),$async$V)
case 33:s=31
break
case 32:s=34
return A.aa(p.aR(),$async$V)
case 34:case 31:s=28
break
case 29:s=35
return A.aa(p.cI(),$async$V)
case 35:case 28:if(!i){s=1
break}for(a=o.length,b=0;b<a;++b)o[b].a=100
case 1:return A.br(q,r)}})
return A.bs($async$V,r)},
aR(){var s=0,r=A.bt(t.H),q=this,p,o,n
var $async$aR=A.bu(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.y)(p),++n)p[n].x.$0()
B.a.sm(p,0)
s=2
return A.aa(q.cI(),$async$aR)
case 2:return A.br(null,r)}})
return A.bs($async$aR,r)},
aC(a){var s=0,r=A.bt(t.H),q=this,p
var $async$aC=A.bu(function(b,c){if(b===1)return A.bq(c,r)
while(true)switch(s){case 0:p=new A.H($.E,t.cU)
if(a!=null)B.a.k(q.d,a)
B.a.k(q.a.c,t.x.a(new A.jL(q,new A.ao(p,t.ou))))
s=2
return A.aa(p,$async$aC)
case 2:return A.br(null,r)}})
return A.bs($async$aC,r)},
cw(){return this.aC(null)},
aD(){var s=0,r=A.bt(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$aD=A.bu(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:e=p.e
if(e.length===0){s=1
break}e=B.a.bV(e,0).a
case 3:switch(e){case 1:s=5
break
case 2:s=6
break
case 3:s=7
break
case 4:s=8
break
case 5:s=9
break
case 21:s=10
break
case 6:s=11
break
case 0:s=12
break
case 10:s=13
break
case 20:s=14
break
case 19:s=15
break
case 8:s=16
break
case 9:s=17
break
default:s=18
break}break
case 5:case 6:case 7:case 8:switch(e){case 1:o=new A.i(0,-1)
break
case 2:o=new A.i(1,0)
break
case 3:o=new A.i(0,1)
break
case 4:o=new A.i(-1,0)
break
default:A.T(A.al(""))
o=null}n=new A.aY(o,p.a.x1.a)
s=4
break
case 9:p.a.x1.toString
n=new A.dd()
s=4
break
case 10:e=p.a.x1
m=e.e
e=e.d
if(!(e<m.length)){q=A.b(m,e)
s=1
break}e=m[e].b
m=e.length
l=0
for(;l<e.length;e.length===m||(0,A.y)(e),++l){k=e[l]
j=k.$identityHash
if(j==null){j=Math.random()*0x3fffffff|0
k.$identityHash=j}i=""+j+": "
h=k.b
g=B.b.t(h.d/24)
i=i+g+"|"
h=B.b.t(h.e/36)
A.oB(i+h)}n=null
s=4
break
case 11:e=p.a
f=e.d.b?e.gb3().d:null
if(f==null){n=null
s=4
break}n=new A.eg(f,e.x1.a)
s=4
break
case 12:n=null
s=4
break
case 13:s=19
return A.aa(p.aM(),$async$aD)
case 19:n=b
s=4
break
case 14:n=new A.eh(p.a.x1.a)
s=4
break
case 15:e=p.a
m=e.x1.a
i=e.id
i=i==null?null:i.b
h=i==null
if(h)i=new A.fx(new Uint8Array(4000),A.ae(t.j,t.S))
n=e.id=new A.ff(m,i,h)
s=4
break
case 16:e=p.a.d
m=!e.b
e.b=m
if(m){e=document.body.style
m=B.eG.e9(e,"cursor")
e.setProperty(m,"crosshair","")}else document.body.style.removeProperty("cursor")
n=null
s=4
break
case 17:e=p.a.d
if(e.b){e.b=!1
document.body.style.removeProperty("cursor")}n=null
s=4
break
case 18:n=null
s=4
break
case 4:s=n!=null?20:21
break
case 20:B.a.k(p.b,n)
s=22
return A.aa(p.V(),$async$aD)
case 22:case 21:case 1:return A.br(q,r)}})
return A.bs($async$aD,r)},
aM(){var s=0,r=A.bt(t.oL),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$aM=A.bu(function(a,b){if(a===1)return A.bq(b,r)
while(true)$async$outer:switch(s){case 0:c=A.c([],t.Y)
for(o=p.a,n=!1,m=-1;m<2;++m)for(l=-1;l<2;++l){k=o.x1.a.u()
j=k.a+m
k=k.b+l
i=o.x1
h=i.e
i=i.d
if(!(i<h.length)){q=A.b(h,i)
s=1
break $async$outer}i=h[i].d
if(!(j>=0&&k>=0&&j<i.a&&k<i.b))continue
g=i.h(0,new A.i(j,k))
if(g.f!=null){k=o.x1
j=k.e
k=k.d
if(!(k<j.length)){q=A.b(j,k)
s=1
break $async$outer}B.a.L(c,A.ov(g,j[k]))}k=g.e
j=k.length
if(j!==0)for(f=0;f<k.length;k.length===j||(0,A.y)(k),++f,n=!0){e=k[f]
B.a.k(c,new A.b3("Pick up "+e.d,new A.fM(e,g,o.x1.a)))}}k=c.length
if(k===0){q=null
s=1
break}s=k===1&&!n?3:5
break
case 3:if(0>=k){q=A.b(c,0)
s=1
break}d=c[0]
s=4
break
case 5:k=new A.H($.E,t.j7)
o.gaq().c.sfu(new A.fZ(c,new A.ao(k,t.pn),t.km))
s=6
return A.aa(k,$async$aM)
case 6:d=b
case 4:if(d==null){q=null
s=1
break}q=d.b
s=1
break
case 1:return A.br(q,r)}})
return A.bs($async$aM,r)},
eD(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.L.a(a)
for(s=h.d,r=s.length,q=a.a,p=h.e,o=0;o<s.length;s.length===r||(0,A.y)(s),++o){n=s[o]
if(p.length>=2)n.d=1
m=n.e
l=m==null?0:B.e.a2(q-m.a,1000)
n.e=a
k=l/B.e.a2(n.a.a,1000)
j=n.f
i=n.d
i=n.d=B.b.by(j?n.d=i+k:n.d=i-k,-1,1)
i>=1||i<0
n.r.$1(n)}B.a.k(h.a.c,t.x.a(h.gcE()))}}
A.jM.prototype={
$1(a){var s=this.a
B.a.k(s.b,t.cM.a(a))
s.V()},
$S:31}
A.jL.prototype={
$1(a){var s,r,q,p,o,n,m
t.L.a(a)
s=A.c([],t.fy)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.y)(q),++n){m=q[n]
if(m.d>=1||o.length!==0){m.x.$0()
B.a.k(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.y)(s),++n)B.a.G(q,s[n])
if(q.length===0)this.b.aU(0)
else B.a.k(r.a.c,t.x.a(this))},
$S:14}
A.en.prototype={
l(a){return"SlotType."+this.b}}
A.bk.prototype={
l(a){return"ItemType."+this.b}}
A.f9.prototype={}
A.aj.prototype={
gb4(){switch(this.c.a){case 0:return B.a7
case 1:return B.a8
case 2:return B.a9
case 3:case 4:case 5:case 6:return null}},
gfh(){switch(this.c.a){case 0:return B.E
case 1:return B.p
case 2:return B.F
case 3:case 4:case 5:case 6:return null}},
l(a){return this.d}}
A.jt.prototype={}
A.a1.prototype={}
A.fN.prototype={
l(a){return"HandRequirement."+this.b}}
A.bV.prototype={
l(a){return"DamageType."+this.b}}
A.bW.prototype={
l(a){return"DiceType."+this.b}}
A.b0.prototype={
l(a){return"WeaponProperties."+this.b}}
A.kn.prototype={}
A.bU.prototype={}
A.cl.prototype={
l(a){return"CriticalEffect."+this.b}}
A.dP.prototype={
l(a){return"Consumable."+this.b}}
A.a3.prototype={}
A.dE.prototype={
l(a){return"AmmoType."+this.b}}
A.dF.prototype={}
A.ay.prototype={}
A.cS.prototype={
l(a){return"ArmorUpgradeType."+this.b}}
A.at.prototype={}
A.f6.prototype={
at(a){var s,r=a-10
if(r===0)return 0
else{s=r/2
if(r>0)return B.b.am(s)
else return B.b.d_(s)}}}
A.cj.prototype={
dj(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x.gfE()
r=a.x.gbx()
q=A.dN(a0,1,B.aU)
p=b.y
o=p.a
n=q+p.at(o)
m=a.y
l=10+Math.min(m.at(m.b),r.e)
m=s.b
l=A.N(A.ns(m))?l+r.d:l+r.c
if(!a1)l-=2
k=t.Q
j=A.c([],k)
i=A.c([],k)
if(q===1){h=!1
g=!1}else{g=n>=l
if(q===20)h=!0
else{h=g
g=!1}}f="["+n+" vs "+A.C(l)+"]"
if(!h)return new A.cT(b.cx.a+" missed "+a.cx.a+" "+f,!1,0,B.a4,B.a4)
if(B.a.N(s.z,B.cs))B.a.k(j,new A.ft())
k=s.d
e=s.e
d=Math.max(A.dN(a0,k,e)+p.at(o),0)
if(g)d+=Math.max(A.dN(a0,k,e)+p.at(o),0)
B.a.N(b.ch,B.bh)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+s.y
return new A.cT(c,!0,d,j,i)},
dq(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x
r=s.gbR()
if(r==null)r=B.O
q=s.gbx()
s=b.y
p=Math.min(s.at(s.b),q.e)
o=a.x.gbx()
n=A.dN(a0,1,B.aU)
m=n+p
l=a.y
k=10+Math.min(l.at(l.b),o.e)
l=r.c
k=A.N(A.ns(l))?k+o.d:k+o.c
if(!a1)k-=2
j=t.Q
i=A.c([],j)
h=A.c([],j)
if(n===1){g=!1
f=!1}else{f=m>=k
if(n===20)g=!0
else{g=f
f=!1}}e="["+m+" vs "+A.C(k)+"]"
if(!g)return new A.cT(b.cx.a+" missed "+a.cx.a+" "+e,!1,0,B.a4,B.a4)
j=r.f
d=A.dN(a0,1,j)
if(f)d+=A.dN(a0,1,j)+s.at(s.a)
B.a.N(b.ch,B.bh)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+r.a
return new A.cT(c,!0,d,i,h)},
sfd(a){this.b=A.K(a)}}
A.cT.prototype={}
A.cZ.prototype={}
A.cY.prototype={
dh(a){var s=this
return A.oi(function(){var r=a
var q=0,p=1,o,n,m,l,k
return function $async$dh(b,c){if(b===1){o=c
q=p}while(true)switch(q){case 0:n=s.a,m=n.length,l=0
case 2:if(!(l<n.length)){q=4
break}k=n[l]
q=k.gb4()==A.pC(r)?5:6
break
case 5:q=7
return k
case 7:case 6:case 3:n.length===m||(0,A.y)(n),++l
q=2
break
case 4:return A.o0()
case 1:return A.o1(o)}}},t.J)},
gbx(){var s,r,q
for(s=this.b,s=s.gak(s),s=s.gw(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a1)return q}return B.cO},
gfE(){var s,r,q
for(s=this.b,s=s.gak(s),s=s.gw(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a3)return q}return B.fz},
gbR(){var s,r,q
for(s=this.b,s=s.gak(s),s=s.gw(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.ay)return q}return null},
bE(a,b){var s=this.b
s.h(0,b)
s.j(0,b,a)},
dw(a){var s,r,q
for(s=this.b,r=s.ga9(s),r=r.gw(r);r.n();){q=r.gp(r)
if(J.Y(s.h(0,q),a))s.j(0,q,null)}}}
A.hh.prototype={
l(a){return"Perk."+this.b}}
A.co.prototype={
l(a){return"EquipmentSlot."+this.b}}
A.ft.prototype={}
A.df.prototype={
l(a){return"TileType."+this.b}}
A.fp.prototype={
l(a){return"CollisionMode."+this.b}}
A.ax.prototype={}
A.cF.prototype={
l(a){return"TerrainType."+this.b}}
A.an.prototype={
l(a){return"TerrainWidget."+this.b}}
A.cv.prototype={
l(a){return"LockState."+this.b}}
A.bf.prototype={
l(a){return"Biome."+this.b}}
A.c5.prototype={
ga7(a){return this.b.a},
ga8(a){return this.b.b},
sfM(a){t.dt.a(a)},
$idZ:1,
gbL(){return this.z}}
A.fV.prototype={}
A.fW.prototype={$idZ:1,
gbL(){return this.a},
ga7(a){return this.b},
ga8(a){return this.c}}
A.i.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.i&&b.a===this.a&&b.b===this.b},
gA(a){return A.cC(this.a,this.b,B.y,B.y)},
D(a,b){return new A.i(this.a+b.a,this.b+b.b)},
a_(a,b){return new A.i(this.a-b.a,this.b-b.b)},
bY(){return new A.P(this.a,this.b)},
aZ(a){var s=Math.abs(this.a-a.a),r=Math.abs(this.b-a.b)
return s+r+-0.6000000000000001*Math.min(s,r)},
l(a){return"("+this.a+", "+this.b+")"}}
A.kg.prototype={
l(a){return"LiquidKind."+this.b}}
A.a2.prototype={
l(a){return"Interactable."+this.b}}
A.kj.prototype={}
A.ko.prototype={
fB(){var s,r
for(s=this.a,r=0;r<4000;++r)s[r]=s[r]-1}}
A.d3.prototype={
l(a){return"MonsterKind."+this.b}}
A.fz.prototype={
f0(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.b,i=j.Y(k,t.C),h=this.d
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.d.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.c||A.N(A.bB(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.e=r
j.a4(b,k,i)},
T(a,b){var s=this
if(s.c){s.f0(0,a)
s.c=!1}if(s.d==null)return
s.b.ab(a,0,B.e.a2(s.e,2),A.aX(["u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.fA.prototype={
T(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.b,r=s.length,q=t.t,p=t.n,o=t.g2,n=t.N,m=t.z,l=0;l<s.length;s.length===r||(0,A.y)(s),++l){k=s[l]
$.n5().ab(a,4,3,A.aX(["u_resolution",A.c([b.a,b.b],q),"u_time",k.gbD().gfq().h0(0,k.gfg(k).gfq()),"u_offset",A.c([b.d,b.e],p),"u_origin",A.c([k.ga7(k),k.ga8(k)],o)],n,m))
k.sbD(k.gbD().D(0,A.jC(11)))}r=A.a0(s).i("F(1)").a(new A.jD())
if(!!s.fixed$length)A.T(A.D("removeWhere"))
B.a.eG(s,r,!0)}}
A.jD.prototype={
$1(a){t.ox.a(a)
return a.gbD().dA(0,a.gfg(a))},
$S:32}
A.jG.prototype={}
A.fB.prototype={
dY(a,b,c){var s,r,q,p=this
p.gR().b.X(p.a)
p.y.b.X(p.a)
p.z.b.X(p.a)
p.gbH().c.X(p.a)
s=p.gaf()
r=p.a
s.e=r.createFramebuffer()
s.b.X(r)
s.c.X(r)
q=p.cy
if(q===$){s=A.aH(A.c([new A.S("a_position",35044,5126,2,new Float32Array(A.cK(B.A)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise(vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f * f * f + .6 * f * f + .5 * f) * color, 0.3);\n}\n",A.c([new A.x("u_resolution",B.h),new A.x("u_time",B.x),new A.x("u_offset",B.h),new A.x("u_player_vis_texture",B.l),new A.x("u_block_size",B.h)],t.o),u.d)
A.bO(p.cy,"weather")
q=p.cy=new A.hW(s)}q.c.X(p.a)
p.gb3().c.X(p.a)
s=p.a
$.n5().X(s)
$.p8().X(s)
p.fx.b.X(p.a)
p.gb_().b.b.X(p.a)
p.gaq().e.X(p.a)
s=$.ad.b
if(s==null?$.ad!=null:s!==$.ad)A.T(new A.cu("Field '"+$.ad.a+"' has already been initialized."))
$.ad.b=p
s=p.cx
r=s.c
new A.bo(r,A.B(r).i("bo<1>")).bM(new A.jH(p,p.b.getBoundingClientRect()))
s.a=p.gaq()},
gR(){var s,r=this,q=r.x
if(q===$){s=A.nQ(r.a,r.f)
A.bO(r.x,"sprites")
r.x=s
q=s}return q},
gbH(){var s,r=this,q=r.Q
if(q===$){s=A.qI()
s=A.aH(A.c([new A.S("a_position",35044,5126,2,s),new A.S("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.t,A.c([new A.x("u_resolution",B.h),new A.x("u_offset",B.h)],t.o),u.Z)
A.bO(r.Q,"fovRenderer")
q=r.Q=new A.fD(r.f,s,new A.i(-1,-1))}return q},
gaf(){var s,r,q,p=this,o=u.v,n="a_position",m="u_player_visible_texture",l=p.ch
if(l===$){s=t.G
r=t.o
q=A.aH(A.c([new A.S(n,35044,5126,2,new Float32Array(A.cK(B.A)))],s),u._,A.c([new A.x("u_source_position",B.h),new A.x("u_source_color",B.cq),new A.x("u_source_strength",B.x),new A.x("u_time",B.x),new A.x("u_visible_texture",B.l),new A.x(m,B.l)],r),o)
r=A.aH(A.c([new A.S(n,35044,5126,2,new Float32Array(A.cK(B.A)))],s),u.L,A.c([new A.x("u_light_texture",B.l),new A.x("u_game_world_texture",B.l),new A.x(m,B.l),new A.x("u_resolution",B.h),new A.x("u_block_size",B.h),new A.x("u_offset",B.h)],r),o)
s=A.c([],t.ow)
A.bO(p.ch,"lightingRenderer")
l=p.ch=new A.e5(q,r,p.f,s)}return l},
gb3(){var s,r=this,q=r.db
if(q===$){s=A.aH(A.c([new A.S("a_position",35048,5126,2,new Float32Array(12))],t.G),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nuniform float u_time;\nuniform float u_visible;\n\nvoid main() {\n  if (u_visible == 0.0) {\n    discard;\n    return;\n  }\n  float scale = (sin(u_time * 3.0) + 1.0) / 4.0;\n  outColor = vec4(0.509, 0.69411, 1.0, scale + 0.3);\n}\n",A.c([new A.x("u_offset",B.h),new A.x("u_resolution",B.h),new A.x("u_time",B.x),new A.x("u_visible",B.x)],t.o),"#version 300 es\nin vec2 a_position;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n")
A.bO(r.db,"selectionRenderer")
q=r.db=new A.ht(r.f,s,B.q)}return q},
gb_(){var s,r,q=this,p=q.dy
if(p===$){s=q.a
r=A.c([],t.ff)
s=A.nQ(s,q.f)
A.bO(q.dy,"textRenderer")
p=q.dy=new A.hH(s,r)}return p},
gaq(){var s,r=this,q=r.fy
if(q===$){s=A.mL(r.a)
A.bO(r.fy,"ui")
r.fy=s
q=s}return q},
bC(){var s,r=this
r.x1=null
B.a.sm(r.gaf().y,0)
r.gR().aS(0)
s=r.y
s.c=null
s.d=!0
s=r.z
s.d=null
s.c=!0
s=r.f
B.N.al(s.c,0,4000,0)
s.e=B.q
r.gaq().b=null
s=r.r1
r.r.dz(0,!0,0,0,r.r2,s)
r.id=null},
T(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=3553,b=6408,a=33071,a0=36160
d.a=a2
s=d.b
r=s.clientWidth
q=s.clientHeight
if(r!==d.r1||q!==d.r2){d.ry=!0
B.af.sar(s,r)
B.af.sao(s,q)
d.r1=r
d.r2=q
s=d.k1
if(s!=null)B.d.d0(a2,s)
s=d.k2
if(s!=null)B.d.d0(a2,s)
d.k1=a2.createTexture()
d.k2=a2.createTexture()
B.d.S(a2,c,d.k1)
B.d.aG(a2,c,0,b,d.r1,d.r2,0,b,5121,null)
a2.texParameteri(c,10241,9729)
a2.texParameteri(c,10242,a)
a2.texParameteri(c,10243,a)
B.d.S(a2,c,d.k2)
B.d.aG(a2,c,0,b,d.r1,d.r2,0,b,5121,null)
a2.texParameteri(c,10241,9729)
a2.texParameteri(c,10242,a)
a2.texParameteri(c,10243,a)}s=d.r
p=d.f.e
s.dz(0,d.ry,p.a,p.b,q,r)
p=d.y1
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
B.d.aF(a2,a0,d.k3)
B.d.bI(a2,a0,36064,c,d.k1,0)
a2.clearColor(0,0,0,1)
a2.clear(16640)
d.y.T(a2,p)
d.z.T(a2,p)
d.gR().T(a2,p)
s=d.k4
B.d.aF(a2,a0,s)
B.d.bI(a2,a0,36064,c,d.k2,0)
a2.viewport(0,0,r,q)
a2.clearColor(0,0,0,1)
d.gaf()
d.gaf().r=d.k1
d.gaf().z=s
d.gaf().T(a2,p)
s=d.gbH()
if(!s.b.e.q(0,s.d)||s.e)s.f2(a2)
o=t.t
n=t.n
m=t.N
l=t.z
s.c.ab(a2,4,48e3,A.aX(["u_resolution",A.c([p.a,p.b],o),"u_offset",A.c([p.d,p.e],n)],m,l))
d.fr.T(a2,p)
if(d.d.b){s=d.gb3()
s.eA(a2,p)
k=A.c([p.a,p.b],o)
n=A.c([p.d,p.e],n)
j=p.c
i=s.b
i=i.ad(i.e)
h=s.d
i=i.ae(0,h.a,h.b)?1:0
s.c.ab(a2,4,6,A.aX(["u_resolution",k,"u_offset",n,"u_time",j/1000,"u_visible",i],m,l))}B.d.aF(a2,a0,null)
s=d.fx
s.c=d.k2
a2.activeTexture(33984)
B.d.S(a2,c,s.c)
s.b.ab(a2,4,3,A.aX(["u_resolution",A.c([p.a,p.b],o),"u_texture",0,"u_time",p.c/1000],m,l))
l=d.gb_()
s=l.e
o=p.b
if(s!==o||l.d!==p.a||p.d!==l.f||p.e!==l.r){l.d=p.a
l.e=o
l.r=p.e
l.f=p.d}l.b.T(a2,p)
d.gaq().T(a2,p)
a2.finish()
g=A.jC(B.b.t(a1))
s=d.c
f=A.c(s.slice(0),A.a0(s))
B.a.sm(s,0)
for(s=f.length,e=0;e<f.length;f.length===s||(0,A.y)(f),++e)f[e].$1(g)
d.fA(p)
d.ry=!1},
fA(a){var s=this.x1
if(s==null)return
s=s.a.b
B.b.t(s.d/24)
B.b.t(s.e/36)},
bU(a){var s,r=this.x1,q=r.e
r=r.d
if(!(r<q.length))return A.b(q,r)
B.a.G(q[r].b,a)
s=a.b
s.sag(-1)
s.sah(-1)
this.gR().G(0,s)},
c9(a,b){var s=a.b,r=B.b.t(s.d/24),q=B.b.t(s.e/36),p=b.b,o=B.b.t(p.d/24),n=B.b.t(p.e/36)
s.sag(o)
s.sah(n)
p.sag(r)
p.sah(q)
if(a.x){s=this.f
s.e=new A.i(o,n)
s.c_()}if(b.x){s=this.f
s.e=new A.i(r,q)
s.c_()}},
dk(a,b){var s=a.b
s.sag(b.a)
s.sah(b.b)
if(a.x){s=this.f
s.e=b
s.c_()}},
cS(a,b,c){var s,r,q,p
if(c==null){s=this.x1
r=s.e
s=s.d
if(!(s<r.length))return A.b(r,s)
q=r[s]}else q=c
B.a.k(q.b,a)
p=a.b
p.sag(b.a)
p.sah(b.b)
p.sau(0,B.W)
s=this.gR()
p.sbK(0,1)
s.k(0,p)},
cR(a,b){return this.cS(a,b,null)},
d8(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
a.id=null
B.a.sm(a.gaf().y,0)
a.gR().aS(0)
s=a.y
s.c=a1
s.d=!0
s=a.z
s.d=a1
s.c=!0
s=a.f
r=a1.d
s.df(r)
s.d9()
B.N.al(s.c,0,4000,0)
s.e=a0
for(r=r.c,q=r.length,p=a1.e,o=0;o<r.length;r.length===q||(0,A.y)(r),++o){n=r[o]
m=n.b
if(n.r!=null){l=new A.Q(11,13,m.a*24,m.b*36,null)
l.x=B.fu
l.y=-1
k=l.a=a.gR()
j=k.d
j.$ti.c.a(l);++j.d
j.aw(0,l)
k.a=!0}k=m.a*24
j=m.b*36
l=A.nu(n.f,k,j,p)
if(l!=null){i=l.a=a.gR()
h=i.d
h.$ti.c.a(l);++h.d
h.aw(0,l)
i.a=!0
n.y=l}if(n.f===B.M){n.z=new A.fV(B.ei,7)
g=a.ch
if(g===$){f=A.pS(s)
A.bO(g,"lightingRenderer")
a.ch=f
g=f}B.a.k(g.y,n)}for(i=n.e,h=i.length,e=0;e<i.length;i.length===h||(0,A.y)(i),++e){d=i[e]
l=A.nR(d)
c=l.a
b=c==null
if(!b)c.a=!0
l.d=k
if(!b)c.a=!0
l.e=j
c=l.a=a.gR()
b=c.d
b.$ti.c.a(l);++b.d
b.aw(0,l)
c.a=!0
d.f=l}}for(s=a1.b,r=s.length,o=0;o<s.length;s.length===r||(0,A.y)(s),++o){l=s[o].b
l.r=B.W
q=l.a
if(q!=null)q.a=!0
q=a.gR()
l.y=1
p=l.a
if(p!=null)p.a=!0
l.a=q
p=q.d
p.$ti.c.a(l);++p.d
p.aw(0,l)
q.a=!0}s=a.gaq().c.r
B.a.sm(s.r,0)
s.f.fH()}}
A.jH.prototype={
$1(a){var s,r,q
t.bd.a(a)
s=this.a.y1
r=J.aD(a)
s.sfv(r.h(a,0))
r=r.h(a,1)
q=this.b
q.left.toString
q=q.top
q.toString
if(typeof r!=="number")return r.a_()
s.r=r-q},
$S:33}
A.R.prototype={
as(a){return this.dK(a)},
dK(a){var s=0,r=A.bt(t.fq),q,p=2,o,n=[],m=this,l,k,j,i
var $async$as=A.bu(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.aa(m.O(0,a),$async$as)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
l=A.bw(i)
A.f4("ERROR: "+A.C(l))
q=new A.G(null,null,!1,!0,!1,B.i,null)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.br(q,r)
case 2:return A.bq(o,r)}})
return A.bs($async$as,r)}}
A.bS.prototype={}
A.G.prototype={}
A.h9.prototype={
O(a,b){var s,r,q,p,o=b.x1.a
A.du(b.x2,"worldWrapper").b.n()
s=b.x1
r=s.e
s=s.d+1
if(!(s<r.length))return A.b(r,s)
q=r[s]
p=A.lP(q)
b.d8(p,q)
b.cS(o,p,q);++b.x1.d
b.ry=!0
return new A.G(null,null,!0,!0,!1,B.i,null)}}
A.eh.prototype={
O(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.c.x,g=h.gbR(),f=h.b.h(0,B.p)
if(g==null||f.e===g.Q.b)return new A.G(j,j,!1,!0,!1,B.i,j)
q=h.a
p=q.length
o=t.mm
n=0
while(!0){if(!(n<p)){s=j
r=s
break}m=q[n]
if(m.c===B.aW){l=o.a(m.b)
if(l.a===g.Q.a){s=m
r=l
break}}++n}if(r==null)return new A.G(j,j,!1,!0,!1,B.i,j)
i=i.u()
i.toString
b.e.ai("reload_1.mp3",i)
i=r.b
k=Math.min(i,g.Q.b)
i-=k
r.b=i
if(i===0)B.a.G(q,s)
i=f.e
i.toString
f.e=k+i
return new A.G(j,j,!0,!0,!1,B.i,j)}}
A.aY.prototype={
O(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e={},d=b.x1,c=d.e
d=d.d
if(!(d<c.length))return A.b(c,d)
s=c[d]
d=g.b
r=d.u()
q=r.D(0,g.a)
p=s.d
if(!p.d7(q))return new A.G(f,f,!1,!0,!1,B.i,f)
o=p.h(0,q)
n=s.ax(q)
if((o.c===B.c||A.N(A.bB(o.f)))&&n==null){if(o.f==null)return new A.G(f,f,!1,!0,!1,B.i,f)
e=b.x1
d=e.e
e=e.d
if(!(e<d.length))return A.b(d,e)
m=A.ov(o,d[e])
if(m.length!==0)return new A.G(B.a.gdQ(m).b,f,!1,!0,!1,B.i,f)
return new A.G(f,f,!1,!0,!1,B.i,f)}l=A.c([],t.w)
e.a=!1
if(n!=null){if(A.ow(n,d))return new A.G(new A.dJ(!1,d,n),f,!1,!0,!1,B.i,f)
c=e.a=!0}else c=!1
k=b.f
k=k.ad(k.e)
k.toString
j=!d.x
if(j)i=k.h(0,r)||k.h(0,q)
else i=!1
p.h(0,r)
if(o.r!=null)b.e.bQ("water_footsteps_"+(B.o.I(5)+1)+".mp3",q,0.15)
k=s.a
k.k(0,q)
if(i)h=new A.bS(A.jC(60),new A.kr(g,r,q),new A.ks(e,g,b,n,q,s))
else{if(c){n.toString
b.c9(n,d)}else b.dk(d,q)
k.G(0,q)
h=f}d.a=0
return new A.G(f,f,!0,!0,j,l,h)}}
A.kr.prototype={
$1(a){var s=a.d,r=1-s,q=this.b,p=this.c,o=this.a.b.b
o.sa7(0,q.a*24*r+p.a*24*s)
o.sa8(0,q.b*36*r+p.b*36*s)},
$S:9}
A.ks.prototype={
$0(){var s,r=this,q=r.c,p=r.b.b
if(r.a.a){s=r.d
s.toString
q.c9(s,p)}else q.dk(p,r.e)
r.f.a.G(0,r.e)},
$S:0}
A.dd.prototype={
O(a,b){return new A.G(null,null,!0,!0,!1,B.i,null)}}
A.fU.prototype={
O(a,b){var s=this.a.c
s.d-=1000;++s.c;++s.e;++s.f;++s.r
A.f4("LEVEL UP")
return new A.G(null,null,!0,!0,!1,B.i,null)}}
A.es.prototype={
O(a,b){var s,r,q,p,o,n,m=b.x1,l=m.e
m=m.d
if(!(m<l.length))return A.b(l,m)
s=this.b
r=l[m].d.h(0,s)
q=r.y
r.f=this.a?B.z:B.J
m=b.gR()
q.toString
m.G(0,q)
m=r.f
m.toString
l=r.b
p=b.x1
o=p.e
p=p.d
if(!(p<o.length))return A.b(o,p)
n=A.nu(m,24*l.a,36*l.b,o[p].e)
if(n!=null)b.gR().k(0,n)
r.y=n
m=b.x1
l=m.e
m=m.d
if(!(m<l.length))return A.b(l,m)
b.f.dg(l[m].d,s)
b.gbH().e=!0
b.e.bQ("door_1.mp3",s,0.8)
return new A.G(null,null,!0,!0,!1,B.i,null)}}
A.dJ.prototype={
O(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c={},b=d.b
b.a=0
c.a=null
s=d.c
r=A.rC(s,b,a0)
q=d.a
p=b.c
o=s.c
if(q){p.toString
o.toString
n=c.a=p.dq(o,B.o,r)}else{p.toString
o.toString
n=c.a=p.dj(o,B.o,r)}B.a.L(p.Q,n.d)
B.a.L(o.Q,n.e)
m=A.c([],t.w)
p=s.u()
p.toString
l=b.u()
l.toString
if(!q){q=b.b
k=q.y
j=s.b.r
q.sbK(0,4)
i=l.bY()
h=p.bY()
q=l.bY()
g=h.a_(0,i)
f=q.D(0,new A.P(g.a/1.5,g.b/1.5))
c.b=!0
e=new A.bS(B.eM,new A.jd(c,d,a0,p,l,i,f),new A.je(c,d,a0,p,l,k,j))}else{q=b.x?B.ah:B.n
d.b6(n.c,p,l,a0,q)
e=null}q=s.r
if(q!=null)q.c=b
if(!n.b)return new A.G(null,n.a,!0,!0,!1,B.i,e)
b=o.b-n.c
o.b=b
if(b<=0)B.a.k(m,new A.dQ(s))
return new A.G(null,c.a.a,!0,!0,!1,m,e)},
cz(a){if(this.a){if(a)return"bullet_impact_2.mp3"
return"bullet_miss_1.mp3"}if(a)return"heavy_punch_1.mp3"
return"miss_1.mp3"},
b6(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j={}
if(a<=0)return
s=c.a*24
r=c.b*36
q=new A.hm(B.e.l(a),e,1.25,s,r)
p=b.a*24
o=b.b*36
n=A.pv(new A.P(p-s,o-r))
m=n.a*24
n=n.b*36
l=new A.P(m,n).D(0,new A.P(s,r))
k=new A.P(m*2,n*2).D(0,new A.P(p,o))
d.gb_().f6(q)
j.a=B.eL
A.q9(B.eN,new A.jc(j,d,q,k,l))},
l(a){return"TargetMeleeAttackEvent{"+this.b.l(0)+" -> "+this.c.l(0)+"}"}}
A.jd.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a
if(l.b&&a.d>=0.4){s=m.c
r=m.b
q=m.d
s.e.ai(r.cz(l.a.b),q)
p=l.a
o=r.b.x?B.ah:B.n
r.b6(p.c,q,m.e,s,o)
l.b=!1
l=l.a
if(l.b)r.c.b.sau(0,B.n)
else{s=r.c.b
if(l.c<=0)s.sau(0,B.fq)
else s.sau(0,B.dc)}}l=a.d
if(l<=0.4){s=m.f
r=m.r
n=l/0.6
l=m.b.b.b
l.sa7(0,A.oF(r.a,s.a,n)*24)
l.sa8(0,A.oF(r.b,s.b,n)*36)}else{s=m.b.b
if(l>=0.6){l=s.b
s=m.e
l.sag(s.a)
l.sah(s.b)}else{l=s.b
s=m.r
l.sa7(0,s.a*24)
l.sa8(0,s.b*36)}}},
$S:9}
A.je.prototype={
$0(){var s,r,q,p,o,n=this,m=n.a
if(m.b){s=n.c
r=n.b
q=n.d
s.e.ai(r.cz(m.a.b),q)
p=m.a
o=r.b.x?B.ah:B.n
r.b6(p.c,q,n.e,s,o)
m.b=!1}m=n.b
s=m.b.b
s.sbK(0,n.f)
r=n.e
s.sag(r.a)
s.sah(r.b)
m.c.b.sau(0,n.r)},
$S:0}
A.jc.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
t.hU.a(a)
s=l.a
r=s.a.a+8000
s.a=new A.ai(r)
if(r>5e5){a.fb(0)
r=l.b.gb_()
q=l.c
if(B.a.G(r.c,q)){r=r.b
B.a.F(q.f.a,r.gfG(r))}}p=B.e.a2(s.a.a,1000)/300
s=l.c
r=l.d
q=1-p
o=l.e
n=p*r.a+q*o.a
s.d=n
m=s.f
if(m!=null)m.v(n,s.e)
n=s.r
if(n!=null)n.b.a=!0
r=p*r.b+q*o.b
s.e=r
q=s.f
if(q!=null)q.v(s.d,r)
s=s.r
if(s!=null)s.b.a=!0},
$S:35}
A.dQ.prototype={
l(a){return"DeathEvent{"+this.a.l(0)+"}"},
O(a,b){var s,r=null,q=b.x1,p=q.e,o=q.d
if(!(o<p.length))return A.b(p,o)
p=this.a
if(p.e){b.bU(p)
return new A.G(r,r,!0,!0,!1,B.i,r)}if(p.x){b.bC()
q=b.gaq().c
p=q.e
if(p!=null)q.P(p)
p=q.be("GAME OVER")
q.e=p
q.M(p)
return new A.G(r,"You Died!",!0,!0,!1,B.i,r)}q.a.c.d+=100
s=A.c([],t.w)
q=b.x1.a
if(q.c.d>=1000)B.a.k(s,new A.fU(q))
p.u()
p.c.toString
b.bU(p)
return new A.G(r,p.l(0)+" has died.",!1,!0,!1,s,r)}}
A.ff.prototype={
O(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=b.x1,d=e.e
e=e.d
if(!(e<d.length))return A.b(d,e)
s=d[e]
if($.nj!==s){$.nj=s
e=g.b
B.N.al(e.a,0,4000,0)
e.b.aS(0)}for(e=b.f.c,d=g.c,r=!d,q=g.b,p=q.b,o=s.d,n=0;n<100;++n)for(m=0;m<40;++m){l=100*m+n
k=new A.i(n,m)
if(!(l<4000))return A.b(e,l)
j=e[l]
if(j===0&&d)if(o.h(0,k).f===B.z)p.j(0,k,100)
else{i=o.h(0,k)
if(!(i.c===B.c||A.N(A.bB(i.f))))p.j(0,k,80)}else if(j===1&&r)p.G(0,k)}q.fF(s,B.ag)
e=g.a
d=e.u()
d.toString
k=q.d3(s,d,1,B.ag)
if(k==null)return new A.G(f,"No more areas to explore",!1,!0,!1,B.i,f)
d=$.f5()
r=e.u()
r.toString
r=d.bG(r,k,s,B.ag)
h=r==null?f:r.b
if(h==null)return new A.G(f,"No path to that location",!1,!0,!1,B.i,f)
d=h.d
r=e.u()
r.toString
return new A.G(new A.aY(d.a_(0,r),e),f,!0,!0,!1,B.i,f)}}
A.hR.prototype={
O(a,b){var s,r,q,p,o,n,m=null,l=b.x1,k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
s=k[l]
r=A.c([],t.q)
for(l=s.d.c,k=l.length,q=!1,p=0;p<l.length;l.length===k||(0,A.y)(l),++p){o=l[p]
if(o.f===B.K){o.f=B.z
B.a.k(r,o.b)
q=!0}}if(q){for(l=r.length,k=b.e,p=0;p<r.length;r.length===l||(0,A.y)(r),++p)k.ai("door_unlock_1.mp3",r[p])
l=b.x1
k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
n=this.a
k[l].d.h(0,n).f=B.Z
l=b.x1
k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
k[l].ax(n)
return new A.G(m,"A door has been unlocked",!0,!0,!1,B.i,m)}return new A.G(m,m,!1,!0,!1,B.i,m)}}
A.eg.prototype={
O(a,b){var s,r=null,q=this.b,p=q.c.x.b.h(0,B.p)
if(p==null||p.e===0)return new A.G(r,r,!1,!0,!1,B.i,r)
s=p.e
s.toString
p.e=s-1
return new A.G(new A.hl(this.a,q),r,!0,!0,!1,B.i,r)}}
A.hl.prototype={
O(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null,g=b.x1,f=g.e
g=g.d
if(!(g<f.length))return A.b(f,g)
s=f[g]
g=this.c
f=g.u()
f.toString
r=this.b
q=$.f5().fi(f,r,s)
if(q==null)return new A.G(h,"Cant reach target",!1,!0,!1,B.i,h)
p=s.ax(r)
o=A.c([],t.w)
if(p!=null)o.push(new A.dJ(!0,g,p))
n=q.fP(0)
m=b.e.ai("pistol_1.mp3",f)
g=g.b
f=B.b.t(g.d/24)
g=B.b.t(g.e/36)
l=B.fo.h(0,t.gX.i("X.T").a(700))
l.toString
k=new A.fW(new A.fV(l,10),f,g)
B.a.k(b.gaf().y,k)
g=B.b9.h(0,t.e.i("X.T").a(800))
g.toString
j=new A.Q(14,2,-1,-1,h)
j.saT(0,g)
i=A.mt(h,h,0,h,!0,!1,j)
b.cR(i,B.q)
j.sau(0,new A.f(0))
return new A.G(h,h,!0,!0,!1,o,new A.bS(A.jC(16*n.length),new A.kB(n,j,m,k),new A.kC(b,i,k)))}}
A.kB.prototype={
$1(a){var s,r,q=this.a,p=B.b.am(a.d*(q.length-1))
if(!(p>=0&&p<q.length))return A.b(q,p)
s=q[p]
p=this.b
q=s.a
p.sag(q)
r=s.b
p.sah(r)
B.e.t(q)
B.e.t(r)
this.d.a.c=10*(1-a.d)},
$S:9}
A.kC.prototype={
$0(){var s=this.a
s.bU(this.b)
B.a.G(s.gaf().y,this.c)},
$S:0}
A.fM.prototype={
O(a,b){var s,r=this.a
B.a.G(this.b.e,r)
B.a.k(this.c.c.x.a,r)
if(r.f!=null){s=b.gR()
r=r.f
r.toString
s.G(0,r)}return new A.G(null,null,!0,!0,!1,B.i,null)}}
A.dT.prototype={
O(a,b){var s,r,q,p=this.a,o=p.u()
o.toString
s=this.b
B.a.G(p.c.x.a,s)
r=A.nR(s)
r.sag(o.a)
r.sah(o.b)
s.f=r
b.gR().k(0,r)
p=b.x1
q=p.e
p=p.d
if(!(p<q.length))return A.b(q,p)
B.a.k(q[p].d.h(0,o).e,s)
return new A.G(null,null,!0,!0,!1,B.i,null)}}
A.hT.prototype={
O(a,b){var s,r=null,q=this.b
if(q.c!==B.av)return new A.G(r,r,!1,!0,!1,B.i,r)
s=this.a.c
s.toString
switch(t.i_.a(q.b).a){case 0:s.sfd(Math.min(s.b+5,s.a))
break}B.a.G(s.x.a,q)
return new A.G(r,r,!0,!0,!1,B.i,r)}}
A.fG.prototype={}
A.jI.prototype={
ei(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.d.S(b,f,c)
s=A.nF(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
r=this.ad(a)
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
s[h]=g}B.d.aG(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
b1(a,b){var s,r,q=a.b*100+a.a
if(q<0||q>=4000)return null
s=this.f
r=s.h(0,a)
if(r==null){r=new A.iN(b.createTexture())
s.j(0,a,r)}if(r.b){this.ei(a,b,r.a)
r.b=!1}return r.a},
ad(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.kF(p,p+4000,B.e.ca(s.byteLength,r))
return new A.kY(100,A.nF(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
c_(){var s,r,q,p,o=this.ad(this.e).c
for(s=o.length,r=this.c,q=0;q<4000;++q){p=r[q]
if(!(q<s))return A.b(o,q)
r[q]=p|(o[q]>0?1:0)}},
d9(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.bl(new A.i(s,r))
for(q=this.f,q=q.gc0(q),q=q.gw(q);q.n();)q.gp(q).b=!0},
dg(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.nr.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.ae(0,r,q)
o=o.c===B.c||A.N(A.pJ(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.bl(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]>0)g.bl(new A.i(m,l))}s=g.ad(b)
s.toString
for(p=g.f,p=p.gak(p),p=p.gw(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]>0)i.b.b=!0}},
df(a){return this.dg(a,null)},
bl(a){var s,r,q,p=this.ad(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=15
for(q=0;q<4;++q)this.eJ(new A.db(1,-1,1),new A.kD(B.fj[q],a),o)},
eI(a,b,c){var s,r
if(a<0||a>=b.byteLength)return
s=b.length
if(this.bn(a,b)){if(!(a>=0&&a<s))return A.b(b,a)
s=b[a]
r=c.a
if(!(r<4))return A.b(B.b0,r)
b[a]=s|B.b0[r]}else{if(!(a>=0&&a<s))return A.b(b,a)
b[a]=15}},
bn(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
bm(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===0},
eJ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.r
B.a.sm(d,0)
B.a.k(d,a)
for(s=b.a;r=d.length,r!==0;){if(0>=r)return A.b(d,-1)
q=d.pop()
r=q.a
p=B.b.am(r*q.b+0.5)
o=B.b.d_(r*q.c-0.5)
for(n=r+1,m=2*r,l=p,k=null;l<=o;++l,k=i){j=b.fR(0,new A.i(r,l))
i=j.b*100+j.a
h=e.bn(i,c)
if(!h)g=l>=r*q.b&&l<=r*q.c
else g=!0
if(g)e.eI(i,c,s)
g=k!=null
if(g&&e.bn(k,c)&&e.bm(i,c))q.b=(2*l-1)/m
if(g&&e.bm(k,c)&&h){f=new A.db(n,q.b,q.c)
f.c=(2*l-1)/m
B.a.k(d,f)}}if(k!=null&&e.bm(k,c))B.a.k(d,new A.db(n,q.b,q.c))}}}
A.iN.prototype={}
A.kY.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0},
ae(a,b,c){var s=this.c,r=c*this.a+b
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0}}
A.ci.prototype={
l(a){return"Cardinal."+this.b}}
A.kD.prototype={
fR(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a.a){case 0:s=r.b
return new A.i(s.a+p,s.b-q)
case 1:s=r.b
return new A.i(s.a+p,s.b+q)
case 2:s=r.b
return new A.i(s.a+q,s.b+p)
case 3:s=r.b
return new A.i(s.a-q,s.b+p)}}}
A.db.prototype={}
A.b3.prototype={
l(a){return this.a}}
A.e5.prototype={
T(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=3553,a="u_player_visible_texture"
if(c.f==null){s=a0.createTexture()
c.f=s
B.d.S(a0,b,s)
B.d.aG(a0,b,0,6408,100,40,0,6408,5121,null)
a0.texParameteri(b,10241,9729)
a0.texParameteri(b,10242,33071)
a0.texParameteri(b,10243,33071)}B.d.aF(a0,36160,c.e)
B.d.bI(a0,36160,36064,b,c.f,0)
a0.clearColor(0,0,0,1)
a0.clear(16640)
a0.viewport(0,0,100,40)
s=c.d
r=s.b1(s.e,a0)
r.toString
a0.activeTexture(33985)
B.d.S(a0,b,r)
for(q=c.y,p=q.length,o=c.b,n=t.t,m=t.n,l=t.N,k=t.z,j=0;j<q.length;q.length===p||(0,A.y)(q),++j){i=q[j]
h=i.gbL()
g=s.b1(new A.i(i.ga7(i),i.ga8(i)),a0)
if(g==null)continue
a0.activeTexture(33984)
B.d.S(a0,b,g)
f=h.c
e=A.c([i.ga7(i),i.ga8(i)],n)
d=h.b.a
o.ab(a0,4,3,A.aX(["u_source_strength",f,"u_source_position",e,"u_source_color",A.c([(d>>>16&255)/255,(d>>>8&255)/255,(d&255)/255,0.2],m),"u_time",a1.c/1000,a,1,"u_visible_texture",0],l,k))}B.d.aF(a0,36160,c.z)
a0.viewport(0,0,a1.a,a1.b)
a0.activeTexture(33984)
B.d.S(a0,b,c.f)
a0.activeTexture(33985)
B.d.S(a0,b,c.r)
a0.activeTexture(33986)
B.d.S(a0,b,r)
c.c.ab(a0,4,3,A.aX(["u_light_texture",0,"u_game_world_texture",1,a,2,"u_block_size",B.f9,"u_resolution",A.c([a1.a,a1.b],n),"u_offset",A.c([a1.d,a1.e],m)],l,k))}}
A.bF.prototype={
gd1(){var s=this.b
s=s==null?null:s.gd1()
return 1+(s==null?0:s)},
W(a,b){return B.b.W(this.f,t.p6.a(b).f)},
gcL(){var s,r=this.a
if(r==null)r=this
else{s=r.a
r=s==null?r:s.gcL()}return r},
eo(){var s,r,q
for(s=this,r=null;s!=null;r=s,s=q){s.b=r
q=s.a}},
fP(a){var s,r=A.c([],t.q)
for(s=this;s!=null;){B.a.k(r,s.d)
s=s.b}return r},
l(a){var s,r,q,p
for(s=this.d,r=this,q="",p="";r!=null;q=", "){p=p+q+s.l(0)
r=r.b}return p.charCodeAt(0)==0?p:p},
$iah:1}
A.b2.prototype={
l(a){return"Directions."+this.b}}
A.kx.prototype={
fi(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.a,e=a1.a,d=a0.b,c=a1.b,b=Math.max(Math.abs(f-e),Math.abs(d-c)),a=new A.bF(a0,0,b*1.02+0)
for(s=(b-1)*1.02+1,r=a2.d,q=t.W,p=r.a,o=r.b,n=a0,m=a,l=1;l<=b;++l,n=h,m=g){k=l/b
j=1-k
i=B.b.t(e*k+f*j)
j=B.b.t(c*k+d*j)
h=new A.i(i,j)
if(!(i>=0&&j>=0&&i<p&&j<o))return null
if(A.lN(q.a(r.h(0,h)),a2,B.V)&&l!==b)return null
A.rr(i-n.a,j-n.b)
g=new A.bF(h,1,s)
g.a=m
m.b=g}return a},
bG(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=A.nt(b,t.p6),a0=A.ae(t.j,t.i),a1=a4.d
a.k(0,new A.bF(a2,0,a2.aZ(a3)*1.02+0))
for(s=a.$ti.c,r=a1.a,q=a1.b,p=t.W;o=a.c,n=o===0,!n;){if(n)A.T(A.al("No element"));++a.d
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
if(k>0)a.cg(j,0)
o=l.d
i=a0.h(0,o)
if(i!=null&&i<l.e)continue
for(n=l.e,h=0;h<8;++h){g=B.az[h]
f=A.ab(o,g)
m=f.a
if(m>=0){e=f.b
m=e>=0&&m<r&&e<q}else m=!1
if(m){m=l.a
if(!J.Y(m==null?b:m.d,f))m=A.lN(p.a(a1.h(0,f)),a4,a5)&&!f.q(0,a3)
else m=!0}else m=!0
if(m)continue
m=f.aZ(a3)
e=this.ez(g)
if(typeof e!=="number")return A.cN(e)
e=n+e
d=new A.bF(f,e,m*1.02+e)
d.a=l
if(f.q(0,a3)){d.eo()
s=l.a
return s==null?l:s.gcL()}c=a0.h(0,f)
if(!(e>1/0))m=c!=null&&e>=c
else m=!0
if(m)continue
a0.j(0,f,e)
s.a(d);++a.d
a.aw(0,d)}}return b},
d4(a,b,c){return this.bG(a,b,c,B.V)},
ez(a){switch(a.a){case 4:case 7:case 5:case 6:return 1
case 1:case 0:case 2:case 3:return 1.4}}}
A.fx.prototype={
d3(a,b,c,d){var s,r,q,p,o,n,m,l,k=this.a,j=b.b*100+b.a
if(!(j>=0&&j<4000))return A.b(k,j)
s=k[j]*c
r=A.c([],t.q)
for(j=a.d,q=t.W,p=!1,o=0;o<8;++o){n=A.ab(b,B.az[o])
m=n.b*100+n.a
if(m<0||m>=4000)continue
if(A.lN(q.a(j.h(0,n)),a,d))continue
if(!(m>=0&&m<4000))return A.b(k,m)
l=k[m]*c
if(l>s){B.a.sm(r,0)
B.a.k(r,n)
s=l
p=!0}else if(l===s)B.a.k(r,n)}k=r.length
if(k===0||!p)return null
k=$.oN().I(k)
if(!(k>=0&&k<r.length))return A.b(r,k)
return r[k]},
bF(a,b,c){return this.d3(a,b,c,B.V)},
fF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
B.N.al(f,0,4000,0)
for(s=this.b,s=s.gak(s),s=s.gw(s);s.n();){r=s.gp(s)
q=r.a
B.N.j(f,q.b*100+q.a,r.b)}s=a.d
r=t.W
do for(p=!1,o=0;o<100;++o)for(n=0;n<40;++n){m=n*100+o
if(A.lN(r.a(s.h(0,new A.i(o,n))),a,b))continue
if(!(m<4000))return A.b(f,m)
l=f[m]
for(q=[m+100,m-100,m+1,m-1],k=-1,j=0,i=0;i<4;++i){h=q[i]
if(h<0||h>=4000)continue
if(!(h>=0&&h<4000))return A.b(f,h)
g=f[h]
if(g>j){j=g
k=h}}if(k!==-1&&j>l+1){f[m]=j-1
p=!0}}while(p)}}
A.ht.prototype={
eA(a,b){var s,r,q,p,o,n,m,l=this,k="a_position",j=B.b.am((b.f+b.d)/24),i=B.b.am((b.r+b.e)/36),h=new A.i(j,i)
if(h.q(0,l.d)||j<0||j>=100||i<0||i>=40)return
l.d=h
s=l.c
r=s.Y(k,t.C)
q=l.d
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
s.a4(a,k,r)}}
A.S.prototype={}
A.x.prototype={}
A.dg.prototype={
l(a){return"UniformKind."+this.b}}
A.i1.prototype={}
A.iS.prototype={}
A.k2.prototype={
X(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.oe(a,i.a,35633),f=A.oe(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.Y(a.getProgramParameter(e,35714),!0)){A.f4(a.getProgramInfoLog(e))
A.T(A.al("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.d.cZ(a,A.du(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.y)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.iS(a.getUniformLocation(A.du(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.y)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.du(i.e,h),n)
k=a.createBuffer()
B.d.cW(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.i1(k,j))}},
Y(a,b){A.rl(b,t.jv,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
a4(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.d(A.al("WARNING, NO ATTRIBUTE "+b))
B.d.cW(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
ab(a,b,c,d){var s,r,q,p,o,n
t.ea.a(d)
B.d.fY(a,A.du(this.e,"_program"))
B.d.cZ(a,A.du(this.f,"_vertexArrayObject"))
for(s=d.gak(d),s=s.gw(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.a7(p)
n=r.h(0,p)
if(n==null)A.T(A.al("WARNING, NO UNIFORM "+p))
switch(n.b.b.a){case 0:B.d.fT(a,n.a,A.bb(o))
break
case 1:q=J.aD(o)
B.d.fV(a,n.a,A.bb(q.h(o,0)),A.bb(q.h(o,1)))
break
case 2:q=J.aD(o)
B.d.fW(a,n.a,A.bb(q.h(o,0)),A.bb(q.h(o,1)),A.bb(q.h(o,2)))
break
case 3:q=J.aD(o)
B.d.fX(a,n.a,A.bb(q.h(o,0)),A.bb(q.h(o,1)),A.bb(q.h(o,2)),A.bb(q.h(o,3)))
break
case 4:B.d.fU(a,n.a,A.K(o))
break}}a.drawArrays(b,0,c)}}
A.kG.prototype={
sfv(a){this.f=A.ob(a)}}
A.az.prototype={}
A.ha.prototype={}
A.hv.prototype={
aX(){var s=0,r=A.bt(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aX=A.bu(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:e=A.c([],t.iw)
for(p=q.b,o=t.cU,n=t.ou,m=t.oV,l=t.Z,k=t.U,j=0;j<47;++j){i=p[j]
h=new XMLHttpRequest()
g=new A.H($.E,o)
B.eP.fC(h,"get","sounds/"+i)
h.responseType="arraybuffer"
f=m.a(new A.kK(q,h,i,new A.ao(g,n)))
l.a(null)
A.eC(h,"readystatechange",f,!1,k)
h.send()
B.a.k(e,g)}s=2
return A.aa(A.pE(e,t.H),$async$aX)
case 2:return A.br(null,r)}})
return A.bs($async$aX,r)},
bQ(a,b,c){var s,r,q,p=this.c,o=A.pF(p),n=this.a.h(0,a)
if(n==null)return new A.ha()
s=p.createBufferSource()
r=B.o.J()
q=o.gain
q.toString
B.cX.sfZ(q,0.1*c+r/20)
p=p.destination
p.toString
B.eO.cp(o,p,0,0)
B.aN.cp(s,o,0,0)
B.aN.sfa(s,n)
s.start()
return new A.ha()},
ai(a,b){return this.bQ(a,b,2)},
$iq7:1}
A.kK.prototype={
$1(a){var s=0,r=A.bt(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.bu(function(b,c){if(b===1)return A.bq(c,r)
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
return A.aa(B.cW.fe(n.c,t.lo.a(A.qH(m.response))),$async$$1)
case 7:l.j(0,k,c)
p.aU(0)
s=5
break
case 6:p.aV(new A.ib("Failed to load "+o))
case 5:case 3:return A.br(null,r)}})
return A.bs($async$$1,r)},
$S:36}
A.lY.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.d.S(q,r,p)
B.d.du(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.a3(0,p)},
$S:11}
A.eo.prototype={
e_(a,b){A.rG(a,"CursesTransparent_24x36.png").bX(new A.kL(this),t.P)},
k(a,b){b.a=this
this.d.k(0,b)
this.a=!0},
G(a,b){t.r.a(b)
this.d.G(0,b)
b.a=null
this.a=!0},
aS(a){var s,r,q,p
for(s=this.d,r=s.$ti,q=new A.cJ(s,s.d,r.i("cJ<1>")),r=r.c;q.n();){if(q.d<0)p=A.T(A.al("No element"))
else{p=q.c
if(p==null)p=r.a(null)}p.a=null}++s.d
s.sbv(B.fe)
s.c=0
this.a=!0},
eQ(c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9="a_position",c0="a_texcoord",c1="a_bg_color",c2=b8.d,c3=c2.c
if(c3>1e4){A.f4("WARNING: TOO MANY SPRITES "+c3)
if(b8.f)b8.f=!1
c3=1e4}s=b8.b
r=t.jv
q=c3*12
p=A.cz(s.Y(b9,r).buffer,0,q)
o=A.cz(s.Y(c0,r).buffer,0,q)
q=c3*24
n=A.cz(s.Y("a_color",r).buffer,0,q)
m=A.cz(s.Y(c1,r).buffer,0,q)
l=c2.eZ()
B.a.b5(l,c2.a)
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
p[a6]=a}else{b0=B.b.ap(12*a9)
b1=B.b.ap(18*a9)
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
if(b5==null)B.a6.al(n,b4,b4+24,0)
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
n[a]=e}if(b6==null)B.a6.al(m,b4,b4+24,0)
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
m[a]=e}}s.a4(c4,b9,p)
s.a4(c4,c0,o)
s.a4(c4,"a_color",n)
s.a4(c4,c1,m)},
T(a,b){var s,r=this
if(r.c==null||r.d.c===0)return
if(r.a){r.eQ(a)
r.a=!1}s=r.e
s.b1(s.e,a)
a.activeTexture(33984)
B.d.S(a,3553,r.c)
r.b.ab(a,4,r.d.c*6,A.aX(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.kL.prototype={
$1(a){this.a.c=t.lJ.a(a)},
$S:15}
A.Q.prototype={
sa7(a,b){var s=this.a
if(s!=null)s.a=!0
this.d=b},
sa8(a,b){var s=this.a
if(s!=null)s.a=!0
this.e=b},
saI(a,b){var s=this.a
if(s!=null)s.a=!0
this.f=b},
sag(a){var s=this.a
if(s!=null)s.a=!0
this.d=a*24},
sah(a){var s=this.a
if(s!=null)s.a=!0
this.e=a*36},
sau(a,b){var s
this.r=b
s=this.a
if(s!=null)s.a=!0},
saT(a,b){var s=this.a
if(s!=null)s.a=!0
this.x=b},
sbK(a,b){var s
this.y=b
s=this.a
if(s!=null)s.a=!0},
l(a){return"Sprite("+this.b+", "+this.c+")"}}
A.k.prototype={}
A.kl.prototype={}
A.hF.prototype={
eU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(this.c==null)return
s=this.b
r=s.Y("a_color",t.C)
q=this.c
switch(q.e.a.a){case 0:case 1:case 6:case 5:p=$.oO()
break
case 2:p=$.n1()
break
case 4:p=$.oQ()
break
case 3:p=$.oP()
break
default:p=null}for(o=r.length,q=q.d.c,n=q.length,m=0;m<40;++m)for(l=m<39,k=m*100,j=0;j<100;++j){i=k+j
h=i*48
if(!(i<n))return A.b(q,i)
if(q[i].c!==B.c)for(g=0;g<48;g+=4){f=g+h
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
f=!(f.c===B.c||A.N(A.bB(f.f)))}else f=!1
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
r[f]=1}}}s.a4(a,"a_color",r)},
T(a,b){var s=this
if(s.d){s.eU(a)
s.d=!1}if(s.c==null)return
s.b.ab(a,4,48e3,A.aX(["u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.hH.prototype={
f6(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.k),i=a.a
i=(i.length===0?B.Q:new A.bH(i)).a
s=new A.de(i,0,0)
r=this.b
q=r.d
p=q.$ti.c
o=a.c
n=a.b
for(;s.b8(1,s.c);){m=s.d
l=$.qG.h(0,m==null?s.d=B.f.aK(i,s.b,s.c):m)
if(l==null)l=B.fZ
k=new A.Q(l.a,l.b,-1,-1,null)
k.x=n
k.f=o
k.a=r
p.a(k);++q.d
q.aw(0,k)
r.a=!0
B.a.k(j,k)}a.r=this
i=new A.lw(j)
i.v(a.d,a.e)
a.f=i
B.a.k(this.c,a)}}
A.hm.prototype={}
A.lw.prototype={
v(a,b){var s,r,q,p,o,n,m
for(s=this.a,r=s.length,q=0,p=0;p<r;++p){o=s[p]
n=o.a
m=n==null
if(!m)n.a=!0
o.d=a+q
if(!m)n.a=!0
o.e=b
q+=24}}}
A.lX.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.d.S(q,r,p)
B.d.du(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.a3(0,p)},
$S:11}
A.hN.prototype={
e0(a){A.rF(a,"CursesTransparent_24x36.png").bX(new A.kW(this),t.P)},
f1(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5="a_position",b6="a_texcoord",b7="a_bg_color",b8=b4.d,b9=b8.length
if(b9>1e4){A.f4("WARNING: TOO MANY SPRITES "+b9)
if(b4.r)b4.r=!1
b9=1e4}s=b4.e
r=t.jv
q=b9*12
p=A.cz(s.Y(b5,r).buffer,0,q)
o=A.cz(s.Y(b6,r).buffer,0,q)
q=b9*24
n=A.cz(s.Y("a_color",r).buffer,0,q)
m=A.cz(s.Y(b7,r).buffer,0,q)
for(r=m.length,q=n.length,l=o.length,k=p.length,j=0;j<b9;++j){if(!(j<b8.length))return A.b(b8,j)
i=b8[j]
h=i.b/16
g=i.c/16
f=j*12
if(!(f<l))return A.b(o,f)
o[f]=h
e=f+1
if(!(e<l))return A.b(o,e)
o[e]=g
d=f+2
c=h+0.0625
if(!(d<l))return A.b(o,d)
o[d]=c
b=f+3
if(!(b<l))return A.b(o,b)
o[b]=g
a=f+4
if(!(a<l))return A.b(o,a)
o[a]=h
a0=f+5
a1=g+0.0625
if(!(a0<l))return A.b(o,a0)
o[a0]=a1
a2=f+6
if(!(a2<l))return A.b(o,a2)
o[a2]=c
a3=f+7
if(!(a3<l))return A.b(o,a3)
o[a3]=a1
a4=f+8
if(!(a4<l))return A.b(o,a4)
o[a4]=c
c=f+9
if(!(c<l))return A.b(o,c)
o[c]=g
a5=f+10
if(!(a5<l))return A.b(o,a5)
o[a5]=h
a6=f+11
if(!(a6<l))return A.b(o,a6)
o[a6]=a1
a7=i.d
a8=i.e
a9=i.f
if(!(f<k))return A.b(p,f)
p[f]=a7
if(!(e<k))return A.b(p,e)
p[e]=a8
e=a7+24*a9
if(!(d<k))return A.b(p,d)
p[d]=e
if(!(b<k))return A.b(p,b)
p[b]=a8
if(!(a<k))return A.b(p,a)
p[a]=a7
a=a8+36*a9
if(!(a0<k))return A.b(p,a0)
p[a0]=a
if(!(a2<k))return A.b(p,a2)
p[a2]=e
if(!(a3<k))return A.b(p,a3)
p[a3]=a
if(!(a4<k))return A.b(p,a4)
p[a4]=e
if(!(c<k))return A.b(p,c)
p[c]=a8
if(!(a5<k))return A.b(p,a5)
p[a5]=a7
if(!(a6<k))return A.b(p,a6)
p[a6]=a
b0=j*24
b1=i.x
b2=i.r
if(b1==null)B.a6.al(n,b0,b0+24,0)
else for(e=b1.a,d=(e>>>16&255)/255,c=(e>>>8&255)/255,b=(e&255)/255,e=(e>>>24&255)/255,b3=0;b3<24;b3+=4){a=b0+b3
if(!(a<q))return A.b(n,a)
n[a]=d
a0=a+1
if(!(a0<q))return A.b(n,a0)
n[a0]=c
a0=a+2
if(!(a0<q))return A.b(n,a0)
n[a0]=b
a+=3
if(!(a<q))return A.b(n,a)
n[a]=e}if(b2==null)B.a6.al(m,b0,b0+24,0)
else for(e=b2.a,d=(e>>>16&255)/255,c=(e>>>8&255)/255,b=(e&255)/255,e=(e>>>24&255)/255,b3=0;b3<24;b3+=4){a=b0+b3
if(!(a<r))return A.b(m,a)
m[a]=d
a0=a+1
if(!(a0<r))return A.b(m,a0)
m[a0]=c
a0=a+2
if(!(a0<r))return A.b(m,a0)
m[a0]=b
a+=3
if(!(a<r))return A.b(m,a)
m[a]=e}}s.a4(c0,b5,p)
s.a4(c0,b6,o)
s.a4(c0,"a_color",n)
s.a4(c0,b7,m)},
T(a,b){var s,r,q=this
if(q.f==null)return
s=q.c
s.sf7(q.b)
s.sdN(b.b)
s.sdO(b.a)
r=q.b
if(r==null)r=null
else{r=r.c
r=new A.fJ(r.b,r.a)}s.f.sfp(r)
s.r.sdP(0,q.b!=null)
if(s.b){r=b.b
s.v(B.k,new A.bj(0,0,b.a,r))
r=q.d
B.a.sm(r,0)
B.a.L(r,s.H())
s.cC()
q.a=!0}if(q.a){q.f1(a)
q.a=!1}a.activeTexture(33984)
B.d.S(a,3553,q.f)
q.e.ab(a,4,q.d.length*6,A.aX(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t)],t.N,t.z))},
$ipR:1}
A.kW.prototype={
$1(a){this.a.f=t.lJ.a(a)},
$S:15}
A.aM.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.aM&&b.a.q(0,this.a)&&b.b===this.b&&b.c===this.c},
gA(a){return A.cC(this.a,this.b,this.c,B.y)},
l(a){var s=this.a
return"Rect("+A.C(s.a)+", "+A.C(s.b)+", "+this.b+", "+this.c+")"}}
A.ac.prototype={
a6(a){var s=a==null?[]:a,r=s.length,q=0
for(;q<s.length;s.length===r||(0,A.y)(s),++q)s[q].seB(this)},
fH(){var s,r,q
for(s=this.c,r=s.length,q=0;q<r;++q)s[q].a=null
B.a.sm(s,0)
this.C()},
M(a){B.a.k(this.c,a)
a.a=this
this.C()},
P(a){if(a==null)return
B.a.G(this.c,a)
a.a=null
this.C()},
an(a){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)if(s[q].an(a))return!0
return!1},
C(){this.b=!0
var s=this.a
if(s!=null)s.C()},
cC(){var s,r,q
this.b=!1
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)s[q].cC()},
seB(a){this.a=t.mV.a(a)}}
A.hG.prototype={
sfN(a,b){this.f=b
this.C()},
sfO(a){if(a===this.r)return
this.r=a
this.C()},
v(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.d=a
j.C()
if(b.q(0,j.y)&&j.f===j.z)return j.Q
s=j.x
B.a.sm(s,0)
r=b.c
if(r==null)r=1/0
q=t.t
p=0
o=0
while(!0){n=j.f
n=n.length===0?B.Q:new A.bH(n)
if(!(p<n.gm(n)))break
m=p
l=0
while(!0){if(l<r){n=j.f
n=n.length===0?B.Q:new A.bH(n)
n=m<n.gm(n)}else n=!1
if(!n)break
if(B.f.av(j.f,m)===10){++m
break}l+=24*j.r;++m}k=m
while(!0){n=j.f
n=n.length===0?B.Q:new A.bH(n)
if(!(k<n.gm(n)&&k>0&&B.f.av(j.f,k-1)!==32&&k>p))break;--k
l-=24*j.r}m=k===p?m:k
if(l>o)o=l
B.a.k(s,A.c([p,m],q))
p=m}j.y=b
j.z=j.f
return j.Q=new A.aM(a,B.b.t(o),B.b.t(s.length*36*j.r))},
H(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=A.c([],t.k)
for(s=f.x,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.y)(s),++p){o=s[p]
n=f.f
m=o.length
if(0>=m)return A.b(o,0)
l=o[0]
if(1>=m)return A.b(o,1)
l=B.f.fS(B.f.aK(n,l,o[1]))
n=(l.length===0?B.Q:new A.bH(l)).a
m=new A.de(n,0,0)
l=q*36
k=0
for(;m.b8(1,m.c);){j=m.d
i=$.qF.h(0,j==null?m.d=B.f.aK(n,m.b,m.c):j)
if(i==null)i=B.h2
i=new A.Q(i.a,i.b,-1,-1,null)
i.r=f.e
h=f.r
i.f=h
g=f.d
i.d=g.a+k*24*h
i.e=g.b+l*h
B.a.k(e,i);++k}++q}return e}}
A.fq.prototype={
H(){var s,r,q,p=A.c([],t.k)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)B.a.L(p,s[q].H())
return p},
v(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.d=a
j.C()
if(j.e){s=b.d
s.toString
for(r=j.c,q=a.a,p=a.b,o=s,n=0,m=0;m<r.length;++m){l=r[m]
k=l.v(new A.P(q,p),b)
n=Math.max(k.b,n)
o-=k.c
l.v(new A.P(q,p+o),b)}o=s}else for(s=j.c,r=a.a,q=a.b,n=0,o=0,m=0;m<s.length;++m){k=s[m].v(new A.P(r,q+o),b)
n=Math.max(k.b,n)
o+=k.c}return new A.aM(a,n,o)}}
A.fg.prototype={
v(a,b){var s,r,q,p=this
p.d=a
p.C()
s=b.q(0,B.G)
r=p.c
q=r.length
if(s){if(0>=q)return A.b(r,0)
return p.f=r[0].v(a,b)}else{if(0>=q)return A.b(r,0)
r[0].v(a,b)
s=b.c
s.toString
r=b.d
r.toString
return p.f=new A.aM(a,s,r)}},
H(){var s,r,q,p,o,n,m=this,l=A.c([],t.k)
for(s=m.e,r=0;r<m.f.c/36;++r)for(q=r*36,p=0;p<m.f.b/24;++p){o=new A.Q(11,13,-1,-1,null)
n=m.d
o.d=n.a+p*24
o.e=n.b+q
o.x=s
l.push(o)}s=m.c
if(0>=s.length)return A.b(s,0)
B.a.L(l,s[0].H())
return l}}
A.hg.prototype={
H(){var s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].H()},
v(a,b){var s,r,q,p,o,n=this
n.d=a
n.C()
if(!b.q(0,B.G)){s=b.d
s.toString
r=b.c
r.toString
q=new A.bj(b.a,b.b,r-n.r-n.x,s-n.e-n.f)}else q=b
s=n.c
if(0>=s.length)return A.b(s,0)
r=n.r
p=n.e
o=s[0].v(a.D(0,new A.P(r,p)),q)
return new A.aM(a,o.b+r+n.x,o.c+p+n.f)}}
A.dM.prototype={
v(a,b){var s,r,q,p,o,n,m=this
m.d=a
m.C()
if(!b.q(0,B.G)){s=b.d
s.toString
r=b.c
r.toString
q=new A.bj(b.a,b.b,r-48,s-72)}else q=b
s=m.c
if(0>=s.length)return A.b(s,0)
r=s[0]
p=r.v(a.D(0,new A.P(24,36)),q)
r=m.e
o=r==null?null:r.v(a.D(0,new A.P(24,0)),b)
if(o!=null){r=o.b
n=p.b
if(r>n){if(0>=s.length)return A.b(s,0)
s=s[0]
s.v(a.D(0,new A.P(24,36)),new A.bj(0,0,r,p.c))}return m.ch=new A.aM(a,Math.max(n,r)+48,p.c+72)}return m.ch=new A.aM(a,p.b+48,p.c+72)},
H(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.c([],t.k),f=h.ch,e=B.b.t(f.c/36),d=B.b.t(f.b/24)
for(f=h.r,s=e-1,r=d-1,q=0;q<e;++q)for(p=q*36,o=q===s,n=q===0,m=0;m<d;++m){l=m===0
if(l&&n)k=B.h5
else if(l&&o)k=B.h3
else{j=m===r
if(j&&n)k=B.fT
else if(j&&o)k=B.fW
else if(l)k=B.bn
else if(j)k=B.bn
else if(n)k=B.bz
else k=o?B.bz:null}if(k==null)continue
i=new A.Q(k.a,k.b,-1,-1,null)
l=h.d
i.d=l.a+m*24
i.e=l.b+p
i.x=f
i.r=B.W
B.a.k(g,i)}f=h.c
if(0>=f.length)return A.b(f,0)
f=A.fY(f[0].H(),!0,t.r)
B.a.L(f,g)
s=h.e
s=s==null?null:s.H()
if(s!=null)B.a.L(f,s)
return f}}
A.dc.prototype={
an(a){var s,r,q=this,p="click_1.mp3"
if(a.q(0,B.ax)&&q.x>0){--q.x
q.C()
$.ad.a1().e.ai(p,B.q)
return!0}if(a.q(0,B.aw)&&q.x<q.e.length-1){++q.x
q.C()
$.ad.a1().e.ai(p,B.q)
return!0}if(a.q(0,B.b_)||a.q(0,B.aX)){s=q.e
r=q.x
if(!(r>=0&&r<s.length))return A.b(s,r)
q.f.$1(s[r])
$.ad.a1().e.ai(p,B.q)
return!0}if(a.q(0,B.ay)){q.r.$0()
return!0}if(q.c8(a))return!0
if(a.q(0,B.ax)||a.q(0,B.aw)||a.q(0,B.aY)||a.q(0,B.aZ))return!0
return!1},
H(){var s,r=this,q=r.c
if(0>=q.length)return A.b(q,0)
q=A.fY(q[0].H(),!0,t.r)
if(r.e.length!==0){s=A.cE(B.fS)
s.saT(0,B.W)
s.sa7(0,r.d.a+48)
s.sa8(0,r.d.b+r.x*36+72)
q.push(s)}return q},
v(a,b){var s
this.d=a
this.C()
s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].v(a,b)}}
A.cP.prototype={
an(a){if(a.q(0,B.b_)||a.q(0,B.aX)||a.q(0,B.ay)){this.e.$0()
$.ad.a1().e.ai("click_1.mp3",B.q)
return!0}if(a.q(0,B.ax)||a.q(0,B.aw)||a.q(0,B.aY)||a.q(0,B.aZ))return!0
return this.c8(a)},
H(){var s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].H()},
v(a,b){var s
this.d=a
this.C()
s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].v(a,b)}}
A.fZ.prototype={}
A.dX.prototype={
sf7(a){if(this.x==a)return
this.x=a
this.C()},
sdO(a){if(a===this.y)return
this.y=a
this.C()},
sdN(a){if(a===this.z)return
this.z=a
this.C()},
sfu(a){var s,r=this
if(a===r.Q)return
r.Q=a
s=r.ef()
r.e=s
r.M(s)
r.C()},
eh(){var s,r=t.f
r=A.c([A.nk(A.mv(A.kw(36,A.mw(A.c([A.er("After a difficult journey through <NAME> mountains, you arrive at the base of the <FACTION> mining camp. Delve to the 10th level to discover the secret of <ARTIFACT>.\n\nPress [Enter] To Start")],r),!1),48,24,36),B.n),B.n,null)],r)
s=new A.cP(new A.jZ(this),r,B.k)
s.a6(r)
return s},
cr(a,b){var s,r,q,p
t.fb.a(a)
s=A.c([],t.I)
r=a==null?this.x.c.x.a:a
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.y)(r),++p)s.push(r[p])
return A.el(s,new A.jT(this),new A.jU(this,b),"Inventory",t.J)},
bd(a){return this.cr(a,null)},
eg(a){var s=A.c([],t.s),r=a.c
if(r===B.av)s.push("Use")
if(r===B.au||r===B.as||r===B.at)s.push("Equip")
s.push("Drop")
return A.el(s,new A.jV(this),new A.jW(this,a),a.d,t.N)},
cq(){var s,r,q=A.c([],t.lT)
for(s=this.x.c.x.b,s=s.gak(s),s=s.gw(s);s.n();){r=s.gp(s)
q.push(new A.cn(r.a,r.b))}return A.el(q,new A.jP(this),new A.jQ(this),"Equipment",t.l8)},
ee(a){var s=a.b.d
return A.el(A.c(["Unequip","Drop"],t.s),new A.jN(this),new A.jO(this,a),s,t.N)},
ef(){var s,r,q,p=[]
for(s=this.Q.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)p.push(s[q])
return A.el(p,new A.jR(this),new A.jS(this),null,t.z)},
be(a){return A.el(A.c(["New Game","Settings","Quit"],t.s),new A.jX(this),new A.jY(this),a,t.N)},
an(a){var s,r=this
if(a.q(0,B.ay)&&r.e==null){s=r.be("")
r.e=s
r.M(s)
return!0}if(a.q(0,B.f6)&&r.e==null){s=r.bd(null)
r.e=s
r.M(s)
return!0}if(a.q(0,B.f5)&&r.e==null){s=r.cq()
r.e=s
r.M(s)
return!0}s=r.e
s=s==null?null:s.an(a)
return s==null?r.f.an(a):s},
H(){var s=A.c([],t.k),r=this.e
r=r==null?null:r.H()
if(r!=null)B.a.L(s,r)
B.a.L(s,this.f.H())
B.a.L(s,this.r.H())
return s},
v(a,b){var s,r,q,p,o,n=this
n.d=a
n.C()
s=n.e
if(s!=null){r=s instanceof A.cP?new A.bj(0,0,864,432):B.G
s=B.b.ap(n.y/2)
q=B.b.ap(n.z/2)
p=n.e.v(new A.P(s,q),r)
n.e.v(new A.P(s-p.b/2,q-p.c/2),r)}n.f.v(new A.P(0,n.z-36),b)
s=n.r
o=s.v(B.k,b)
s.v(new A.P(n.y-o.b,0),b)
return new A.aM(a,n.y,n.z)}}
A.jZ.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.P(r)
s.e=null},
$S:0}
A.jU.prototype={
$1(a){var s,r
t.J.a(a)
s=this.a
r=s.e
r.toString
s.P(r)
s.e=null
r=this.b
if(r!=null){s.x.c.x.bE(a,r)
r=s.cq()
s.e=r
s.M(r)}else{r=s.eg(a)
s.e=r
s.M(r)}},
$S:39}
A.jT.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.P(r)
s.e=null},
$S:0}
A.jW.prototype={
$1(a){var s,r,q,p,o=this
A.a7(a)
if(a==="Drop"){s=$.ad.a1().go
r=o.a.x
r.toString
s.k(0,new A.dT(r,o.b))}if(a==="Use"){s=$.ad.a1().go
r=o.a.x
r.toString
s.k(0,new A.hT(r,o.b))}if(a==="Equip"){s=o.b
r=s.gfh()
r.toString
q=o.a
p=q.x.c.x.b.h(0,r)
if(p!=null){q.x.c.x.dw(p)
B.a.k(q.x.c.x.a,p)}q.x.c.x.bE(s,r)}s=o.a
r=s.e
r.toString
s.P(r)
s.e=null},
$S:12}
A.jV.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.P(r)
r=s.bd(null)
s.e=r
s.M(r)},
$S:0}
A.jQ.prototype={
$1(a){var s,r,q
t.l8.a(a)
s=this.a
r=s.e
r.toString
s.P(r)
s.e=null
if(a.b==null){r=a.a
q=s.x.c.x.dh(r)
r=s.cr(A.fY(q,!0,q.$ti.i("j.E")),r)
s.e=r
s.M(r)}else{r=s.ee(a)
s.e=r
s.M(r)}},
$S:41}
A.jP.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.P(r)
s.e=null},
$S:0}
A.jO.prototype={
$1(a){var s,r,q,p=this
A.a7(a)
if(a==="Drop"){s=$.ad.a1().go
r=p.a.x
r.toString
q=p.b.b
q.toString
s.k(0,new A.dT(r,q))}if(a==="Unequip"){s=p.a.x.c.x
r=p.b.b
r.toString
s.dw(r)}s=p.a
r=s.e
r.toString
s.P(r)
s.e=null},
$S:12}
A.jN.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.P(r)
r=s.bd(null)
s.e=r
s.M(r)},
$S:0}
A.jS.prototype={
$1(a){var s=this.a,r=s.e
r.toString
s.P(r)
s.e=null
s.Q.b.a3(0,a)
s.Q=null},
$S:5}
A.jR.prototype={
$0(){var s,r=this.a
r.Q.b.a3(0,null)
s=r.e
s.toString
r.P(s)
r.e=null},
$S:0}
A.jY.prototype={
$1(a){var s,r,q,p,o,n,m
A.a7(a)
if(a==="New Game"){$.ad.a1().ry=!0
$.ad.a1().bC()
s=$.ad.a1()
r=$.dA()
q=t.t
p=t.ku
q=new A.jA(new A.ji(B.o,new A.k4(B.o)),A.c([new A.ax(B.ac,r.J()<=0.6,1),new A.ax(B.C,r.J()<=0.4,2),new A.ax(B.C,r.J()<=0.4,3),new A.ax(B.C,r.J()<=0.4,4),new A.ax(B.B,r.J()<=0.2,5),new A.ax(B.B,r.J()<=0.2,6),new A.ax(B.B,r.J()<=0.2,7),new A.ax(B.D,r.J()<=0.1,8),new A.ax(B.D,r.J()<=0.1,9),new A.ax(B.D,r.J()<=0.1,10),new A.ax(B.T,!1,11)],t.lR),A.c([2,4,4,4,6,6,6,10,10,10,12],q),A.c([A.bc(r,10,25),A.bc(r,115,125),A.bc(r,115,125),A.bc(r,115,125),A.bc(r,125,135),A.bc(r,125,135),A.bc(r,125,135),A.bc(r,135,145),A.bc(r,135,145),A.bc(r,135,145),A.bc(r,170,200)],q),A.c([A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p)],t.fu),A.c([0,0,0,0,0,0,0,0,0,0,0],q),A.ae(t.ee,t.gN))
q.es()
q.eq()
p=A.nf()
r=A.c([],t.I)
o=A.pT(B.aB,t.b,t.R)
n=A.c([],t.d)
n=q.cs(A.mt(null,new A.cj(20,20,0,0,0,0,0,new A.cY(r,o),p,A.c([],t.Q),n,new A.cZ("J")),0,null,!1,!0,new A.Q(0,4,1,1,null)))
m=new A.cb(n.a(),n.$ti.i("cb<1>"))
m.n()
m.n()
n=new A.l1(m.gp(m),m)
s.x2=n
n=s.x1=A.du(n,"worldWrapper").a
p=n.e
n=n.d
if(!(n<p.length))return A.b(p,n)
n=A.lP(p[n])
p=s.x1
o=p.e
p=p.d
if(!(p<o.length))return A.b(o,p)
s.d8(n,o[p])
p=s.x1
o=p.a
n=p.e
p=p.d
if(!(p<n.length))return A.b(n,p)
s.cR(o,A.lP(n[p]))
p=s.gaq()
n=s.x1
p.b=n.a
p=s.y
o=n.e
n=n.d
if(!(n<o.length))return A.b(o,n)
n=p.c=o[n]
p.d=!0
p=s.z
p.d=n
p.c=!0
p=s.f
p.df(n.d)
p.d9()
s=s.x1
n=s.e
s=s.d
if(!(s<n.length))return A.b(n,s)
p.e=A.lP(n[s])
s=this.a
n=s.e
n.toString
s.P(n)
n=s.eh()
s.e=n
s.M(n)}else if(a==="Quit"){s=t.e4.a(this.a.e).c
if(0>=s.length)return A.b(s,0)
s=t.fr.a(s[0])
if(s!=null){s=s.e
if(s!=null)s.sfN(0,"The Something of Something")}$.ad.a1().ry=!0
$.ad.a1().bC()}},
$S:12}
A.jX.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.P(r)
s.e=null},
$S:0}
A.cn.prototype={
l(a){var s,r=("EquipmentSlot."+this.a.b).split(".")
if(1>=r.length)return A.b(r,1)
r=A.C(r[1])+" "
s=this.b
return r+(s==null?"[ empty ]":"["+s.d+"]")}}
A.fJ.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.fJ&&b.a===this.a&&b.b===this.b},
gA(a){return A.cC(this.a,this.b,B.y,B.y)}}
A.fj.prototype={
sfp(a){var s,r=this
if(J.Y(a,r.e))return
r.P(r.f)
r.e=a
if(a!=null){s=A.er("HP: "+a.a+"/"+a.b+"  |  [i] Inventory  [e] Equipment")
r.f=s
r.M(s)}r.C()},
H(){var s,r,q,p,o,n,m=this
if(m.e==null)return A.c([],t.k)
s=B.b.t(m.r.b/24)+1
r=A.c([],t.k)
for(q=t.e.i("X.T"),p=0;p<s;++p){o=new A.Q(11,13,-1,-1,null)
n=B.aA.h(0,q.a(900))
n.toString
o.x=n
n=m.d
o.d=n.a+p*24
o.e=n.b
r.push(o)}q=m.f
q=q==null?null:q.H()
if(q!=null)B.a.L(r,q)
return r},
v(a,b){var s,r=this
r.d=a
r.C()
if(r.e==null)return B.P
s=r.f
if(s!=null)s.v(a.D(0,new A.P(24,0)),b)
return r.r=new A.aM(a,t.bC.a(r.a).y,36)}}
A.hp.prototype={
sdP(a,b){if(b===this.e)return
this.e=b
this.C()},
cV(a){var s,r,q,p=this.r
B.a.k(p,a)
s=this.f
r=A.er(a)
r.sfO(0.5)
r=A.kw(4,r,4,4,4)
q=s.c
A.a0(q).c.a(r)
if(!!q.fixed$length)A.T(A.D("insert"))
q.splice(0,0,r)
r.a=s
s.C()
if(p.length>50){B.a.bV(p,0)
if(0>=q.length)return A.b(q,-1)
q.pop().a=null
s.C()}this.C()},
H(){if(!this.e)return A.c([],t.k)
var s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].H()},
v(a,b){var s,r=this
r.d=a
r.C()
if(!r.e)return B.P
s=r.c
if(0>=s.length)return A.b(s,0)
return s[0].v(a,new A.bj(0,0,288,b.d))}}
A.bj.prototype={
gA(a){var s=this
return A.cC(s.a,s.b,s.c,s.d)},
q(a,b){var s=this
if(b==null)return!1
return b instanceof A.bj&&b.a==s.a&&b.c==s.c&&b.b==s.b&&b.d==s.d}}
A.fD.prototype={
f2(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.b,a4=a3.ad(a3.e),a5=a2.c,a6=a5.Y("a_color",t.C)
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
a6[d]=a0}}a2.d=a3.e
a2.e=!1
a5.a4(a7,"a_color",a6)}}
A.hW.prototype={}
A.hY.prototype={}
A.lJ.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:16}
A.hy.prototype={
ax(a){var s,r,q,p,o,n,m,l
for(s=this.b,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.e){m=n.b
l=B.b.t(m.d/24)
if(l===q){m=B.b.t(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.l1.prototype={}
A.jA.prototype={
cs(a){var s=this
return A.oi(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6
return function $async$cs(a7,a8){if(a7===1){o=a8
q=p}while(true)switch(q){case 0:a6=A.e0(B.O)
a6.e=9
n=A.e0(new A.f9(B.aJ,50))
m=r.c.x
m.bE(a6,B.p)
B.a.k(m.a,n)
l=A.c([],t.fF)
k=new A.hY(r,l)
m=s.a,j=s.b,i=s.e,h=0
case 2:if(!(h<10)){q=4
break}g=A.rk(m.dB(j[h]))
B.a.k(l,g)
f=i[h]
for(e=f.length,d=g.b,c=0;c<f.length;f.length===e||(0,A.y)(f),++c){b=A.rt(f[c])
a0=A.rJ(g,b)
a1=b.b
a2=a0.a
a3=a1.a
a4=a3==null
if(!a4)a3.a=!0
a1.d=a2*24
a2=a0.b
if(!a4)a3.a=!0
a1.e=a2*36
B.a.k(d,b)}for(e=g.d,a5=0;a5<3;++a5){a6=A.e0(B.eF)
B.a.k(e.h(0,A.rK(g)).e,a6)}q=5
return k
case 5:case 3:++h
q=2
break
case 4:return A.o0()
case 1:return A.o1(o)}}},t.l7)},
es(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.d,r=t.ee,q=this.e,p=this.b,o=0;o<10;++o){n=q[o]
m=p[o]
l=$.oR()
k=A.a0(l)
j=k.i("aR<1>")
i=A.fY(new A.aR(l,k.i("F(1)").a(new A.jB(m.a)),j),!0,j.i("j.E"))
for(h=0;h<s[o];){g=A.qM($.dA(),i,r)
B.a.k(n,g)
h+=g.d}}},
eq(){var s,r,q,p,o,n,m,l,k,j,i=this,h=new A.cj(1,1,1,0,0,0,0,new A.cY(A.c([],t.I),A.ae(t.b,t.R)),A.nf(),A.c([],t.Q),A.c([],t.d),new A.cZ(""))
for(s=i.f,r=i.c,q=i.e,p=0;p<10;++p){o=q[p]
for(n=0,m=0;m<o.length;++m){l=i.er(o[m])
k=l.a
for(j=l.x.b.h(0,B.p)!=null;k>0;){n+=(j?l.dq(h,$.dA(),!0):l.dj(h,$.dA(),!0)).c
k-=r[p]}}B.a.j(s,p,n)}},
er(a){var s,r,q,p,o,n=this.r
if(n.h(0,a)!=null){n=n.h(0,a)
n.toString
return n}s=a.d
r=A.c([],t.I)
q=A.nC(B.aB,t.b,t.R)
p=new A.cj(s,s,1,0,0,0,0,new A.cY(r,q),a.c,A.c([],t.Q),A.c([],t.d),new A.cZ(a.a))
for(s=J.ar(a.r.$0());s.n();){o=s.gp(s)
switch(o.gb4()){case B.a7:q.h(0,B.E)
q.j(0,B.E,o)
break
case B.a8:q.h(0,B.p)
q.j(0,B.p,o)
break
case B.a9:q.h(0,B.F)
q.j(0,B.F,o)
break
default:B.a.k(r,o)}}n.j(0,a,p)
return p}}
A.jB.prototype={
$1(a){return B.a.N(t.ee.a(a).x,this.a)},
$S:43}
A.fl.prototype={
c6(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.a5(a,a0,A.bl(a*a0,B.j,!1,t.ns),t.ba)
c.a=b
s=new A.js(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.D()
if(typeof m!=="number")return A.cN(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.cN(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.cN(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.cN(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.cN(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.cN(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.cN(f)
e=n+m+k+i+h+g+l+f
if(J.Y(s.$2(q,o),1))if(e<4)a1.K(0,B.j,q,o)
else a1.K(0,B.c,q,o)
else if(e>5)a1.K(0,B.c,q,o)
else a1.K(0,B.j,q,o)}d=c.a
c.a=a1}}}
A.js.prototype={
$2(a,b){return J.Y(this.a.a.ae(0,a,b),B.c)?0:1},
$S:44}
A.k0.prototype={
bZ(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.nW.a(b0)
s=t.q
r=A.c([],s)
q=new A.k1(a9)
for(p=J.ar(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.dA()
if(n>=1)B.a.k(r,o)}if(r.length===0)return
m=A.c([],t.oe)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.y)(r),++j){i=r[j]
h=A.c([],k)
g=i.a
f=i.b
if(o.h(0,new A.i(g+1,f))===B.c)B.a.k(h,B.t)
if(o.h(0,new A.i(g+-1,f))===B.c)B.a.k(h,B.v)
if(o.h(0,new A.i(g,f+1))===B.c)B.a.k(h,B.u)
if(o.h(0,new A.i(g,f+-1))===B.c)B.a.k(h,B.r)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.y)(h),++e){d=h[e]
c=A.ab(i,d)
b=A.c([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.c)break
a2=A.py(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.ab(a,a2[0]))!==B.j){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.ab(a,a2[1]))===B.j}else a1=!0
if(a1)break
a=A.ab(a,d)
B.a.k(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.j&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.ab(a,A.pz(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.k(m,new A.et(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.ae(t.v,t.fH)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.y)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.N(l,n))continue
if(a4.aW(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.j(0,n,a5)}else a4.j(0,n,a5)}for(s=a4.gc0(a4),s=s.gw(s),n=this.a,l=a9.e,k=a8.b;s.n();){g=s.gp(s)
f=g.d
a0=p.h(0,a8)
a0.toString
B.a.k(a0,f)
a0=p.h(0,f)
a0.toString
B.a.k(a0,a8)
for(g=g.c,a0=g.length,j=0;a1=g.length,j<a1;g.length===a0||(0,A.y)(g),++j)o.j(0,g[j],B.j)
a0=n.I(a1)
if(!(a0>=0&&a0<g.length))return A.b(g,a0)
a7=g[a0]
l.j(0,a7,B.R)
B.a.k(k,a7)
B.a.k(f.b,a7)}for(s=a4.gc0(a4),s=s.gw(s);s.n();)this.bZ(s.gp(s).d,a9,b0,b1)}}
A.k1.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.D(0,new A.i(1,0)))===B.c?1:0
if(s.h(0,a.D(0,new A.i(-1,0)))===B.c)++r
if(s.h(0,a.D(0,new A.i(0,-1)))===B.c)++r
return s.h(0,a.D(0,new A.i(1,1)))===B.c?r+1:r},
$S:68}
A.jp.prototype={
dD(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.K(0,o.J()>0.45?B.j:B.c,n,m)
p.K(0,B.aE,n,m)}new A.fl(a7).c6(3)
for(p=q-1,l=0;l<r;++l){s.K(0,B.c,l,0)
s.K(0,B.c,l,p)}for(o=r-1,k=0;k<q;++k){s.K(0,B.c,0,k)
s.K(0,B.c,o,k)}j=new A.jq(a7)
i=new A.jr(a7)
for(l=1;l<o;l=g)for(h=l-1,g=l+1,k=1;k<p;++k){if(!j.$2(l,k))continue
f=i.$2(g,k)
e=i.$2(h,k)
d=k+1
c=i.$2(l,d)
b=k-1
a=i.$2(l,b)
if(f&&e&&c&&a){s.K(0,B.c,l,k)
continue}if(j.$2(h,d)&&c&&e){s.K(0,B.c,l,k)
continue}if(j.$2(g,d)&&c&&f){s.K(0,B.c,l,k)
continue}if(j.$2(g,b)&&a&&f){s.K(0,B.c,l,k)
continue}if(j.$2(h,b)&&a&&e){s.K(0,B.c,l,k)
continue}}p=t.j
o=A.fX(p)
a0=new A.fH(a7,A.c([],t.do),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.i(l,k)
if(o.N(0,a1)||s.h(0,a1)===B.c)continue
a0.d6(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.y)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gw(a3);d.n();)s.j(0,d.gp(d),B.c)
else B.a.k(o,new A.a4(a3,A.c([],h),A.c([],h),A.jF(a3)))}a4=A.ae(p,t.v)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.c,a2=0;b=o.length,a2<b;o.length===r||(0,A.y)(o),++a2){a3=o[a2]
B.a.k(p,a3)
h.j(0,a3,A.c([],d))
for(b=J.ar(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.y)(o),++a2){a3=o[a2]
r=a3.a
p=J.aD(r)
if(p.gm(r)>a6){a6=p.gm(r)
a5=a3}}this.bZ(a5,a7,a4,q)
for(r=q.dl(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.y)(r),++a2){a3=r[a2]
B.a.G(o,a3)
for(p=J.ar(a3.a);p.n();)s.j(0,p.gp(p),B.c)}A.oE(o,a7)}}
A.jq.prototype={
$2(a,b){return J.Y(this.a.b.ae(0,a,b),B.j)},
$S:17}
A.jr.prototype={
$2(a,b){return J.Y(this.a.b.ae(0,a,b),B.c)},
$S:17}
A.aV.prototype={}
A.hX.prototype={}
A.aU.prototype={
Z(a,b){this.$ti.c.a(a)
return this.a.Z(a,b)+this.b.Z(a,b)}}
A.d7.prototype={
Z(a,b){this.$ti.c.a(a)
return Math.min(B.ae.Z(a,b),this.b.Z(a,b))}}
A.hb.prototype={
Z(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=b.b,r=a.a,q=a.b,p=b.e,o=p.a,p=p.b,n=-1;n<2;++n)for(m=r+n,l=m<o,k=-1;k<2;++k){j=q+k
if(!(m>=0&&j>=0&&l&&j<p))continue
if(s.h(0,new A.i(m,j))===B.c)return 1/0}return 0}}
A.fm.prototype={
Z(a,b){var s,r,q,p
if(b.b.h(0,a)===B.c||b.e.h(0,a)!==B.w)return 1/0
s=A.mh(a,B.r,b)
r=A.mh(a,B.u,b)
q=A.mh(a,B.t,b)
p=A.mh(a,B.v,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.f8.prototype={
Z(a,b){if(b.b.h(0,a)===B.c||b.e.h(0,a)!==B.w)return 1/0
if(A.cO(a,B.r,b)+A.cO(a,B.u,b)+A.cO(a,B.t,b)+A.cO(a,B.v,b)===1)return 1
return 1/0}}
A.fu.prototype={
Z(a,b){if(b.b.h(0,a)===B.c||b.e.h(0,a)!==B.w)return 1/0
if(A.cO(a,B.r,b)+A.cO(a,B.u,b)+A.cO(a,B.t,b)+A.cO(a,B.v,b)===2)return 1
return 1/0}}
A.dD.prototype={
Z(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.c||b.e.h(0,a)!==B.w)return 1/0
s=A.ab(a,B.r)
r=A.ab(a,B.u)
q=A.ab(a,B.t)
p=A.ab(a,B.v)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.d6.prototype={
Z(a,b){var s,r,q,p,o,n,m,l,k,j,i
for(s=b.e,r=a.a,q=a.b,p=this.a,o=s.a,n=s.b,m=-2;m<4;++m)for(l=r+m,k=l<o,j=-2;j<4;++j){i=q+j
if(!(l>=0&&i>=0&&k&&i<n))continue
if(s.h(0,new A.i(l,i))===p)return 1/0}return 0}}
A.cG.prototype={
dm(a,b){return this.c.$2(a,b)},
gbS(){return this.a},
gbA(a){return this.b},
gbP(){return this.c}}
A.m9.prototype={
$2(a,b){b.e.j(0,a,B.cp)},
$S:1}
A.m2.prototype={
$2(a,b){b.e.j(0,a,B.h9)},
$S:1}
A.m6.prototype={
$2(a,b){b.e.j(0,a,B.ab)},
$S:1}
A.m1.prototype={
$2(a,b){b.e.j(0,a,B.ab)},
$S:1}
A.m3.prototype={
$2(a,b){b.e.j(0,a,B.aG)},
$S:1}
A.m7.prototype={
$2(a,b){b.e.j(0,a,B.ha)
b.f.j(0,a,B.fl)},
$S:1}
A.m8.prototype={
$2(a,b){b.e.j(0,a,B.h8)},
$S:1}
A.m5.prototype={
$2(a,b){b.e.j(0,a,B.aF)},
$S:1}
A.m4.prototype={
$2(a,b){b.e.j(0,a,B.aF)},
$S:1}
A.m0.prototype={
$2(a,b){b.e.j(0,a,B.aH)},
$S:1}
A.b9.prototype={}
A.iT.prototype={
gbA(a){var s=this.a
return s.gbA(s)},
gbP(){return this.a.gbP()},
gbS(){return this.a.gbS()},
l(a){return"Unique("+this.a.l(0)+")"},
$icG:1,
dm(a,b){return this.gbP().$2(a,b)}}
A.mg.prototype={
$2(a,b){var s=t.n4
return B.b.W(s.a(a).b,s.a(b).b)},
$S:48}
A.mf.prototype={
$2(a,b){var s=t.v
s.a(a)
s.a(b)
return J.as(a.a)-J.as(b.a)},
$S:49}
A.dY.prototype={}
A.ji.prototype={
dB(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=4000,a=new A.a5(100,40,A.bl(b,B.j,!1,t.ns),t.ba),a0=A.bl(b,0,!1,t.i),a1=A.bl(b,B.aE,!1,t.dt),a2=new A.a5(100,40,A.bl(b,B.w,!1,t.dy),t.eN),a3=t.c,a4=new A.dY(a5,a,new A.a5(100,40,a0,t.de),new A.a5(100,40,a1,t.f5),a2,new A.a5(100,40,A.bl(b,B.b7,!1,t.gM),t.eT),new A.a5(100,40,A.bl(b,null,!1,t.R),t.oQ),new A.jE(A.c([],a3),A.ae(t.v,t.mw)),A.c([],a3))
if(a5.b)this.ff(a4)
a0=a5.a
switch(a0.a){case 1:case 2:new A.jp(B.o).dD(a4)
break
case 3:case 4:new A.kI(A.fX(t.j),B.o).dG(a4)
break
case 6:case 0:case 5:new A.kP(B.o).dE(a4)
break}s=new Float32Array(4000)
new A.ky().dF(s,100,40)
r=new A.a5(100,40,A.mG(b,new A.jk(),t.W),t.nr)
for(q=0;q<100;++q)for(a1=q!==0,a3=q!==99,p=0;p<40;++p)if(!a1||!a3||p===0||p===39){a.K(0,B.c,q,p)
a2.K(0,B.w,q,p)}a1=a4.y
this.b.dC(a1,a4,a5.c)
for(a3=a4.c,o=this.a,n=a4.d,m=a4.r,a0=a0!==B.cY,l=a4.f,q=0;q<100;++q)for(p=0;p<40;++p){k=J.Y(a.ae(0,q,p),B.j)
j=a.ae(0,q,p)
j.toString
i=new A.i(q,p)
o.J()
h=r.h(0,i)
g=n.h(0,i)
f=a2.h(0,i)
h.b=i
h.c=j
h.sfM(n.h(0,i))
j=p*100+q
if(!(j<4000))return A.b(s,j)
e=s[j]
d=m.ae(0,q,p)
if(J.Y(a3.h(0,i),1)){h.r=B.f7
h.c=B.j}else if(f!==B.w)switch(f.a){case 0:if(l.h(0,i)===B.b6)h.f=B.K
else h.f=B.z
break
case 2:h.f=B.M
break
case 3:break
case 4:h.f=B.a3
break
case 5:h.f=B.a2
break
case 1:h.f=B.L
break
case 6:h.f=B.a_
if(d!=null)B.a.k(h.e,d)
break
case 7:h.f=B.Y
break
case 8:h.f=B.H
break
case 9:h.f=B.X
break
case 10:h.f=B.a0
break
case 11:h.f=B.a1
break}else if(k&&e<0.42&&g!==B.aa&&a0)h.f=B.L
if(d!=null)B.a.k(h.e,d)}a=J.ar(B.a.fk(a1,new A.jl(),new A.jm(a4)).a)
while(!0){if(!a.n()){c=!1
break}a0=a.gp(a)
if(A.qE(a2.h(0,a0))){r.h(0,a0).f=B.I
c=!0
break}}if(!c)throw A.d(A.al(""))
return new A.kj(r,a5)},
ff(a){var s,r,q=this.a,p=a.b,o=p.b,n=q.I(o-1)+1,m=n>o/2?-1:1,l=new A.jj(a)
for(p=p.a,s=n,r=0;r<p;++r){l.$1(new A.i(r,s))
l.$1(new A.i(r,s+1))
l.$1(new A.i(r,s-1))
s+=q.fw()?m:0}}}
A.jk.prototype={
$1(a){var s=A.c([],t.I)
return new A.c5(B.q,B.j,s)},
$S:16}
A.jl.prototype={
$1(a){return t.v.a(a).e},
$S:50}
A.jm.prototype={
$0(){return B.a.gfj(this.a.y)},
$S:51}
A.jj.prototype={
$1(a){var s=this.a,r=s.b
if(r.d7(a)){r.j(0,a,B.j)
s.c.j(0,a,1)}},
$S:52}
A.et.prototype={
gm(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.jE.prototype={
dl(){var s,r,q,p,o,n=A.c([],t.c)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.y)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.k(n,o)}return n}}
A.a4.prototype={
l(a){return"Room{"+J.as(this.a)+"; "+this.d.l(0)+"}"}}
A.fH.prototype={
d6(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.c([a],k),i=A.c([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.N(0,o))continue
q.k(0,o)
B.a.k(i,o)
for(n=0;n<8;++n){m=A.ab(o,B.az[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.N(0,m)&&k.h(0,m)===B.j)B.a.k(j,m)}}B.a.k(this.b,i)}}
A.fQ.prototype={
cU(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.a1)s=B.au
else if(a instanceof A.a3)s=B.as
else s=a instanceof A.ay?B.at:B.aV
B.a.k(r.a,a)
B.a.k(r.b,s)
B.a.k(r.c,b)
r.d+=b},
cT(a){return this.cU(a,10)},
fD(a){var s,r,q,p={},o=p.a=0,n=A.mG(this.c.length,new A.k9(p,this),t.i),m=a.J()
for(s=n.length,r=m>-1;o<s;++o){q=n[o]
if(r&&m<=q){s=this.a
if(!(o<s.length))return A.b(s,o)
return A.e0(s[o])}}throw A.d(A.al(""))},
dM(a){var s,r,q=B.a.fs(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
dL(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p===0)return
B.a.j(r,q,p-2)
this.d-=2}}}
A.k9.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.b(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:54}
A.kt.prototype={}
A.k4.prototype={
dC(a,b,c){var s,r,q
t.mw.a(a)
s=new A.fQ(A.c([],t.hf),A.c([],t.lB),A.c([],t.t))
r=s.gf5()
new A.aR(B.fh,t.ei.a(new A.k5()),t.kL).F(0,r)
new A.aR(B.fi,t.eU.a(new A.k6()),t.eo).F(0,r)
new A.aR(B.fa,t.hZ.a(new A.k7()),t.au).F(0,r)
new A.aR(B.f8,t.g9.a(new A.k8()),t.b1).F(0,r)
s.cT(B.aQ)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.y)(a),++q)this.ek(s,a[q],b)},
ek(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.aD(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.q
break}r=j.length
if(r!==0){r=l.I(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.I(k.gm(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.aG||q===B.w
else r=!1
if(r)break;++i}if(s.q(0,B.q))return
p=a.fD(l)
n=p.b
if(!J.Y(n,B.aQ)){a.dM(n)
a.dL(p.c)
o.j(0,s,p)}}}
A.k5.prototype={
$1(a){return t.bB.a(a).b<=1000},
$S:55}
A.k6.prototype={
$1(a){return t.li.a(a).f<=1000},
$S:56}
A.k7.prototype={
$1(a){return t.kB.a(a).r<=1000},
$S:57}
A.k8.prototype={
$1(a){return t.lE.a(a).c<=1000},
$S:58}
A.ky.prototype={
aj(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
dF(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
for(s=0;s<b0;++s)for(r=s*0.1,q=0;q<b1;++q){p=q*b0+s
o=q*0.1
n=B.b.am(r)&255
m=B.b.am(o)&255
l=B.b.am(0.3)&255
k=r-Math.floor(r)
j=o-Math.floor(o)
i=0.3-Math.floor(0.3)
h=k*k*k*(k*(k*6-15)+10)
g=j*j*j*(j*(j*6-15)+10)
o=$.p1()
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
c=a8.aj(0,o[d],k,j,i)
if(!(a0<f))return A.b(o,a0)
a2=k-1
c+=h*(a8.aj(0,o[a0],a2,j,i)-c)
if(!(b<f))return A.b(o,b)
a3=j-1
a4=a8.aj(0,o[b],k,a3,i)
if(!(a1<f))return A.b(o,a1)
c+=g*(a4+h*(a8.aj(0,o[a1],a2,a3,i)-a4)-c)
a4=d+1
if(!(a4<f))return A.b(o,a4)
a5=i-1
a4=a8.aj(0,o[a4],k,j,a5)
a6=a0+1
if(!(a6<f))return A.b(o,a6)
a4+=h*(a8.aj(0,o[a6],a2,j,a5)-a4)
a6=b+1
if(!(a6<f))return A.b(o,a6)
a6=a8.aj(0,o[a6],k,a3,a5)
a7=a1+1
if(!(a7<f))return A.b(o,a7)
a5=a8.aj(0,o[a7],a2,a3,a5)
if(!(p<4000))return A.b(a9,p)
a9[p]=(c+i*i*i*(i*(i*6-15)+10)*(a4+g*(a6+h*(a5-a6)-a4)-c)+1)/2}}}
A.c_.prototype={
l(a){return"RuinOrientation."+this.b}}
A.ek.prototype={
l(a){return"RoomSizeKind."+this.b}}
A.kI.prototype={
dG(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.I(5)
if(!(a3>=0&&a3<5))return A.b(B.b1,a3)
s=B.b1[a3]
r=a1.c7(B.fM)
q=a1.ex(s)
p=A.pA(a1.d2(a4,r,new A.i(B.b.t(Math.max(1,q.a-r.a/2)),B.b.t(Math.max(1,q.b-A.cD(r)/2)))))
a3=a4.y
B.a.k(a3,p)
for(o=t.q,n=0;n<2000;){m=new A.i(a2.I(98)+1,a2.I(38)+1)
l=[B.aC,B.aC,B.aC,B.fL]
k=a2.I(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a1.c7(l[k])
if(!a1.fJ(a4,r,m)){l=a1.d2(a4,r,m)
B.a.k(a3,new A.a4(l,A.c([],o),A.c([],o),A.jF(l)))}else ++n}for(a2=a1.b,o=a4.d,l=a4.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.i(j,i)
o.K(0,B.aa,j,i)
if(!a2.N(0,h))l.j(0,h,B.c)}g=A.ae(t.j,t.v)
for(a2=a3.length,k=a4.x,f=k.a,e=k.b,d=t.c,c=0;c<a3.length;a3.length===a2||(0,A.y)(a3),++c){b=a3[c]
B.a.k(f,b)
e.j(0,b,A.c([],d))
for(a=J.ar(b.a);a.n();)g.j(0,a.gp(a),b)}a1.bZ(p,a4,g,k)
for(a2=k.dl(),k=a2.length,c=0;c<a2.length;a2.length===k||(0,A.y)(a2),++c){b=a2[c]
B.a.G(a3,b)
for(f=J.ar(b.a);f.n();)l.j(0,f.gp(f),B.c)}A.oE(a3,a4)
for(a2=o.c,a0=0;a0<4000;++a0)B.a.j(a2,a0,B.aa)},
c7(a){var s
switch(a.a){case 0:s=this.a
return new A.ej(s.I(5)+5,s.I(5)+5)
case 1:s=this.a
return new A.ej(s.I(10)+9,s.I(10)+9)
case 2:s=this.a
return new A.ej(s.I(10)+20,s.I(10)+20)}},
ex(a){switch(a.a){case 0:return new A.i(50,10)
case 1:return new A.i(50,30)
case 2:return new A.i(75,20)
case 3:return new A.i(25,20)
case 4:return new A.i(50,20)}},
d2(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.c([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.i(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.k(0,d)
r.j(0,d,f?B.c:B.j)
if(!f)B.a.k(a,d)}return a},
fJ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.i(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.c||n.N(0,i))return!0}return!1}}
A.ej.prototype={}
A.kP.prototype={
eu(a){var s,r,q=a.a.a===B.ac?B.aE:B.h7
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
dE(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.eu(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.J()>0.6)r.j(0,new A.i(q,p),B.c)
new A.fl(b8).c6(10)
o=A.fX(t.j)
n=new A.fH(b8,A.c([],t.do),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.i(k,j)
if(o.N(0,i)||r.h(0,i)===B.c)continue
n.d6(i)}o=n.b
B.a.b5(o,new A.kQ())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.y)(h),++f)r.j(0,h[f],B.c)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.c){B.a.j(e,q,B.hb)
B.a.j(o,q,B.j)}$label0$1:for(o=b8.y,e=t.q,d=b8.d,c=0;c<3;){b=s.I(3)+5
a=s.I(3)+5
q=s.I(100-b)
p=s.I(40-a)
for(a0=q-1,a1=q+b,a2=a1+1,a3=p-1,a4=p+a,a5=a4+1;a0<a2;++a0)for(a6=a0>=0,a7=a0<m,a8=a3;a8<a5;++a8){i=new A.i(a0,a8)
if(!(a6&&a8>=0&&a7&&a8<l))continue $label0$1
if(g.h(0,i)!==B.w||r.h(0,i)!==B.j)continue $label0$1}a9=A.c([],e)
b0=A.c([],e)
for(a2=a1-1,a5=a4-1,a0=q;a0<a1;++a0)for(a6=a0-q!==0,a7=a0!==a2,a3=p;a3<a4;++a3){i=new A.i(a0,a3)
if(!a6||!a7||a3-p===0||a3===a5){r.j(0,i,B.c)
B.a.k(a9,i)}else B.a.k(b0,i)
d.j(0,i,B.aa)}b1=new A.kR(b8)
B.a.c5(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.q
break}b3=a9[f]
b4=A.ab(b3,B.r)
b5=A.ab(b3,B.u)
b6=A.ab(b3,B.v)
b7=A.ab(b3,B.t)
if(A.N(b1.$1(b4))&&A.N(b1.$1(b5))){b2=b3
break}if(A.N(b1.$1(b6))&&A.N(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.y)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.j)
g.j(0,b2,B.R)
B.a.k(o,new A.a4(b0,A.c([],e),A.c([],e),A.jF(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.y)(o),++f)A.dz(o[f],$.ms(),b8)}}
A.kQ.prototype={
$2(a,b){var s=t.i8
s.a(a)
return J.as(s.a(b))-J.as(a)},
$S:59}
A.kR.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.j&&s.e.h(0,a)===B.w},
$S:60}
A.kZ.prototype={
e1(a){var s=t.jV.a(new A.l_(this))
t.Z.a(null)
A.eC(a,"keydown",s,!1,t.mT)
A.eC(a,"mousemove",t.b9.a(new A.l0(this)),!1,t.gD)}}
A.l_.prototype={
$1(a){var s,r,q,p,o
t.mT.a(a)
s=a.key
if(s==null)s=""
r=a.metaKey
q=a.ctrlKey
p=new A.ak(s,r,a.shiftKey,q)
s=this.a
r=s.a
r=r==null?null:r.c.an(p)
if(r===!0){a.preventDefault()
return}o=$.p4().h(0,p)
if(o!=null){a.preventDefault()
s.b.k(0,o)
return}},
$S:61}
A.l0.prototype={
$1(a){var s,r
t.gD.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
this.a.c.k(0,A.c([s,r],t.n))},
$S:62}
A.ak.prototype={
q(a,b){var s=this
if(b==null)return!1
return b instanceof A.ak&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gA(a){var s=this
return A.cC(s.a,s.b,s.c,s.d)}}
A.a6.prototype={
l(a){return"InputCommand."+this.b}};(function aliases(){var s=J.a.prototype
s.dS=s.l
s=J.ct.prototype
s.dT=s.l
s=A.aI.prototype
s.dU=s.da
s.dV=s.dc
s.dX=s.de
s.dW=s.dd
s=A.ac.prototype
s.c8=s.an})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u
s(J.t.prototype,"gf3","k",23)
r(A,"r1","pH",18)
r(A,"rg","qe",7)
r(A,"rh","qf",7)
r(A,"ri","qg",7)
q(A,"oq","ra",0)
p(A,"rj","r4",10)
q(A,"op","r3",0)
o(A.ds.prototype,"gfc",1,0,null,["$1","$0"],["a3","aU"],38,0,0)
n(A.H.prototype,"gec","U",10)
m(A.dn.prototype,"geL","eM",0)
p(A,"rn","qK",65)
r(A,"ro","qL",18)
var k
l(k=A.fL.prototype,"gfm","bJ",29)
l(k,"gcE","eD",14)
p(A,"rP","r9",66)
s(A.eo.prototype,"gfG","G",37)
o(A.fQ.prototype,"gf5",0,1,null,["$2","$1"],["cU","cT"],53,0,0)
p(A,"rV","rq",67)
r(A,"oz","rO",45)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.mD,J.a,J.dG,A.L,A.kJ,A.j,A.bE,A.V,A.av,A.cW,A.ck,A.kU,A.kv,A.dV,A.eO,A.A,A.ke,A.e7,A.l9,A.b6,A.ie,A.eU,A.eT,A.ev,A.dq,A.cb,A.dI,A.c1,A.dl,A.ey,A.dm,A.cI,A.H,A.i_,A.aB,A.eP,A.i0,A.i5,A.ca,A.dn,A.iG,A.eY,A.eZ,A.im,A.eF,A.m,A.em,A.cm,A.ai,A.la,A.hf,A.ep,A.ib,A.d2,A.a_,A.iJ,A.hC,A.jv,A.mz,A.r,A.dW,A.l2,A.ku,A.ij,A.de,A.jn,A.fO,A.cJ,A.f,A.a5,A.P,A.cQ,A.j8,A.j7,A.ag,A.au,A.bh,A.bZ,A.jo,A.fL,A.f9,A.aj,A.jt,A.a1,A.kn,A.bU,A.a3,A.dF,A.ay,A.at,A.f6,A.cj,A.cT,A.cZ,A.cY,A.ft,A.ax,A.c5,A.fV,A.fW,A.i,A.kj,A.ko,A.az,A.jG,A.fB,A.R,A.bS,A.G,A.jI,A.iN,A.kY,A.kD,A.db,A.b3,A.bF,A.kx,A.fx,A.S,A.x,A.i1,A.iS,A.k2,A.kG,A.ha,A.hv,A.Q,A.k,A.kl,A.hm,A.lw,A.aM,A.ac,A.fZ,A.cn,A.fJ,A.bj,A.hY,A.hy,A.l1,A.jA,A.fl,A.k0,A.aV,A.cG,A.b9,A.iT,A.dY,A.ji,A.et,A.jE,A.a4,A.fH,A.fQ,A.kt,A.k4,A.ky,A.ej,A.kP,A.kZ,A.ak])
q(J.a,[J.e2,J.e4,J.ct,J.t,J.d1,J.cs,A.h3,A.cB,A.e,A.j9,A.fh,A.bz,A.J,A.i4,A.b1,A.jy,A.bX,A.i6,A.dS,A.i8,A.jz,A.l,A.ic,A.aG,A.k3,A.ih,A.kh,A.km,A.io,A.ip,A.aJ,A.iq,A.is,A.aL,A.iw,A.iz,A.aN,A.iA,A.aO,A.iD,A.am,A.iL,A.kS,A.aP,A.iO,A.kT,A.kX,A.iW,A.iY,A.j_,A.j1,A.j3,A.aW,A.ik,A.aZ,A.iu,A.kz,A.iH,A.b_,A.iQ,A.be,A.fc,A.i2,A.fk,A.fK,A.hk,A.da,A.bI,A.hO,A.hU])
q(J.ct,[J.hi,J.dh,J.bC])
r(J.ka,J.t)
q(J.d1,[J.e3,J.fR])
q(A.L,[A.cu,A.c6,A.fS,A.hQ,A.hr,A.dH,A.ia,A.hc,A.bx,A.hS,A.hP,A.b8,A.fs,A.fv])
q(A.j,[A.p,A.cw,A.aR,A.e1,A.bH,A.lA])
q(A.p,[A.b5,A.e6])
q(A.b5,[A.eq,A.ea])
r(A.dU,A.cw)
q(A.V,[A.e9,A.eu])
q(A.cW,[A.dO,A.a9])
q(A.ck,[A.k_,A.fn,A.fo,A.hE,A.kc,A.lT,A.lV,A.l6,A.l5,A.lC,A.jJ,A.lg,A.lo,A.kN,A.lu,A.lq,A.kk,A.lb,A.ma,A.mb,A.jf,A.jg,A.lS,A.jM,A.jL,A.jD,A.jH,A.kr,A.jd,A.jc,A.kB,A.kK,A.lY,A.kL,A.lX,A.kW,A.jU,A.jW,A.jQ,A.jO,A.jS,A.jY,A.lJ,A.jB,A.k1,A.jk,A.jl,A.jj,A.k9,A.k5,A.k6,A.k7,A.k8,A.kR,A.l_,A.l0])
r(A.ef,A.c6)
q(A.hE,[A.hz,A.cU])
r(A.hZ,A.dH)
r(A.e8,A.A)
r(A.aI,A.e8)
q(A.fo,[A.kb,A.lU,A.lD,A.lI,A.jK,A.lh,A.kf,A.ki,A.kp,A.kq,A.kH,A.kM,A.l4,A.jh,A.js,A.jq,A.jr,A.m9,A.m2,A.m6,A.m1,A.m3,A.m7,A.m8,A.m5,A.m4,A.m0,A.mg,A.mf,A.kQ])
r(A.d4,A.cB)
q(A.d4,[A.eH,A.eJ])
r(A.eI,A.eH)
r(A.cA,A.eI)
r(A.eK,A.eJ)
r(A.ec,A.eK)
r(A.eb,A.cA)
q(A.ec,[A.h4,A.h5,A.h6,A.h7,A.h8,A.d5,A.ed])
r(A.eV,A.ia)
q(A.fn,[A.l7,A.l8,A.ly,A.lx,A.lc,A.lk,A.li,A.le,A.lj,A.ld,A.ln,A.lm,A.ll,A.kO,A.lv,A.ls,A.lG,A.lt,A.mk,A.mi,A.mj,A.me,A.mc,A.md,A.mn,A.ml,A.mm,A.mq,A.mo,A.mp,A.lM,A.lK,A.lL,A.ks,A.je,A.kC,A.jZ,A.jT,A.jV,A.jP,A.jN,A.jR,A.jX,A.jm])
r(A.eQ,A.e1)
q(A.c1,[A.dr,A.eA])
r(A.bo,A.dr)
r(A.ex,A.bo)
r(A.c8,A.dl)
r(A.bL,A.c8)
r(A.ew,A.ey)
q(A.dm,[A.ao,A.ds])
r(A.dk,A.eP)
r(A.bM,A.i5)
r(A.bp,A.ca)
r(A.iy,A.eY)
q(A.aI,[A.lr,A.eD])
r(A.eL,A.eZ)
r(A.eE,A.eL)
q(A.bx,[A.d9,A.fP])
q(A.e,[A.w,A.fF,A.cr,A.aA,A.eM,A.aC,A.af,A.eR,A.hV,A.dj,A.I,A.dL,A.fe])
q(A.w,[A.a8,A.bg,A.bA])
q(A.a8,[A.q,A.o])
q(A.q,[A.fa,A.fb,A.fi,A.ch,A.fI,A.d0,A.cy,A.hs])
r(A.ju,A.bz)
r(A.cX,A.i4)
q(A.b1,[A.jw,A.jx])
r(A.i7,A.i6)
r(A.dR,A.i7)
r(A.i9,A.i8)
r(A.fy,A.i9)
r(A.aF,A.fh)
r(A.id,A.ic)
r(A.fE,A.id)
r(A.ii,A.ih)
r(A.cq,A.ii)
r(A.e_,A.cr)
r(A.bn,A.l)
q(A.bn,[A.bD,A.aK])
r(A.h_,A.io)
r(A.h0,A.ip)
r(A.ir,A.iq)
r(A.h1,A.ir)
r(A.it,A.is)
r(A.ee,A.it)
r(A.ix,A.iw)
r(A.hj,A.ix)
r(A.hq,A.iz)
r(A.eN,A.eM)
r(A.hw,A.eN)
r(A.iB,A.iA)
r(A.hx,A.iB)
r(A.hA,A.iD)
r(A.iM,A.iL)
r(A.hI,A.iM)
r(A.eS,A.eR)
r(A.hJ,A.eS)
r(A.iP,A.iO)
r(A.hL,A.iP)
r(A.di,A.cy)
r(A.iX,A.iW)
r(A.i3,A.iX)
r(A.ez,A.dS)
r(A.iZ,A.iY)
r(A.ig,A.iZ)
r(A.j0,A.j_)
r(A.eG,A.j0)
r(A.j2,A.j1)
r(A.iC,A.j2)
r(A.j4,A.j3)
r(A.iK,A.j4)
r(A.cH,A.eA)
r(A.eB,A.aB)
r(A.l3,A.l2)
r(A.il,A.ik)
r(A.fT,A.il)
r(A.iv,A.iu)
r(A.hd,A.iv)
r(A.iI,A.iH)
r(A.hD,A.iI)
r(A.iR,A.iQ)
r(A.hM,A.iR)
q(A.I,[A.by,A.d_])
r(A.dK,A.by)
q(A.dL,[A.cg,A.he])
r(A.fd,A.i2)
q(A.au,[A.c3,A.c4,A.cV,A.c0,A.hn,A.ei,A.ho,A.bR])
r(A.X,A.f)
q(A.X,[A.bY,A.cx])
q(A.la,[A.en,A.bk,A.fN,A.bV,A.bW,A.b0,A.cl,A.dP,A.dE,A.cS,A.hh,A.co,A.df,A.fp,A.cF,A.an,A.cv,A.bf,A.kg,A.a2,A.d3,A.ci,A.b2,A.dg,A.c_,A.ek,A.a6])
q(A.az,[A.fz,A.fA,A.fG,A.e5,A.ht,A.eo,A.hF,A.hH,A.hN,A.fD,A.hW])
q(A.R,[A.h9,A.eh,A.aY,A.dd,A.fU,A.es,A.dJ,A.dQ,A.ff,A.hR,A.eg,A.hl,A.fM,A.dT,A.hT])
q(A.ac,[A.hG,A.fq,A.fg,A.hg,A.dM,A.dc,A.cP,A.dX,A.fj,A.hp])
q(A.k0,[A.jp,A.kI])
q(A.aV,[A.hX,A.aU,A.d7])
q(A.hX,[A.hb,A.fm,A.f8,A.fu,A.dD,A.d6])
s(A.eH,A.m)
s(A.eI,A.av)
s(A.eJ,A.m)
s(A.eK,A.av)
s(A.dk,A.i0)
s(A.eZ,A.em)
s(A.i4,A.jv)
s(A.i6,A.m)
s(A.i7,A.r)
s(A.i8,A.m)
s(A.i9,A.r)
s(A.ic,A.m)
s(A.id,A.r)
s(A.ih,A.m)
s(A.ii,A.r)
s(A.io,A.A)
s(A.ip,A.A)
s(A.iq,A.m)
s(A.ir,A.r)
s(A.is,A.m)
s(A.it,A.r)
s(A.iw,A.m)
s(A.ix,A.r)
s(A.iz,A.A)
s(A.eM,A.m)
s(A.eN,A.r)
s(A.iA,A.m)
s(A.iB,A.r)
s(A.iD,A.A)
s(A.iL,A.m)
s(A.iM,A.r)
s(A.eR,A.m)
s(A.eS,A.r)
s(A.iO,A.m)
s(A.iP,A.r)
s(A.iW,A.m)
s(A.iX,A.r)
s(A.iY,A.m)
s(A.iZ,A.r)
s(A.j_,A.m)
s(A.j0,A.r)
s(A.j1,A.m)
s(A.j2,A.r)
s(A.j3,A.m)
s(A.j4,A.r)
s(A.ik,A.m)
s(A.il,A.r)
s(A.iu,A.m)
s(A.iv,A.r)
s(A.iH,A.m)
s(A.iI,A.r)
s(A.iQ,A.m)
s(A.iR,A.r)
s(A.i2,A.A)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",M:"double",O:"num",u:"String",F:"bool",a_:"Null",n:"List"},mangledNames:{},types:["~()","~(i,dY)","Q()","bh()","n<aj>()","~(@)","~(u,@)","~(~())","a_()","~(bS)","~(v,b7)","~(l)","~(u)","a_(@)","~(ai)","a_(bI)","c5(h)","F(h,h)","h(v?)","~(be)","~(u,u)","@(@,u)","@(@,@)","~(v?)","~(bX)","F(aj)","@(u)","a_(@,b7)","F(v?)","aw<~>(a6)","a_(~())","~(R)","F(my)","~(n<M>)","~(h,@)","~(hK)","aw<~>(l)","~(Q)","~([v?])","~(aj)","a_(v,b7)","~(cn)","H<@>(@)","F(bZ)","h(h,h)","~(O)","F(@)","~(@,@)","h(b9,b9)","h(a4,a4)","F(a4)","a4()","~(i)","~(v[h])","M(h)","F(a1)","F(a3)","F(ay)","F(at)","h(n<i>,n<i>)","F(i)","~(bD)","~(aK)","~(v?,v?)","@(@)","F(v?,v?)","h(Q,Q)","h(v?,v?)","h(i)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.qw(v.typeUniverse,JSON.parse('{"hi":"ct","dh":"ct","bC":"ct","rX":"l","tf":"l","rZ":"I","t3":"by","rW":"o","tg":"o","rY":"e","tr":"e","tu":"e","t0":"q","tv":"w","te":"w","th":"bA","tt":"aK","tI":"af","t2":"bn","t1":"bg","tx":"bg","tj":"cr","ti":"cq","t4":"J","t6":"am","t_":"cy","tq":"cA","tp":"cB","e2":{"F":[]},"e4":{"a_":[]},"t":{"n":["1"],"p":["1"],"j":["1"]},"ka":{"t":["1"],"n":["1"],"p":["1"],"j":["1"]},"dG":{"V":["1"]},"d1":{"M":[],"O":[],"ah":["O"]},"e3":{"M":[],"h":[],"O":[],"ah":["O"]},"fR":{"M":[],"O":[],"ah":["O"]},"cs":{"u":[],"ah":["u"],"nH":[]},"cu":{"L":[]},"p":{"j":["1"]},"b5":{"p":["1"],"j":["1"]},"eq":{"b5":["1"],"p":["1"],"j":["1"],"j.E":"1","b5.E":"1"},"bE":{"V":["1"]},"cw":{"j":["2"],"j.E":"2"},"dU":{"cw":["1","2"],"p":["2"],"j":["2"],"j.E":"2"},"e9":{"V":["2"]},"ea":{"b5":["2"],"p":["2"],"j":["2"],"j.E":"2","b5.E":"2"},"aR":{"j":["1"],"j.E":"1"},"eu":{"V":["1"]},"cW":{"Z":["1","2"]},"dO":{"cW":["1","2"],"Z":["1","2"]},"a9":{"cW":["1","2"],"Z":["1","2"]},"ef":{"c6":[],"L":[]},"fS":{"L":[]},"hQ":{"L":[]},"eO":{"b7":[]},"ck":{"cp":[]},"fn":{"cp":[]},"fo":{"cp":[]},"hE":{"cp":[]},"hz":{"cp":[]},"cU":{"cp":[]},"hr":{"L":[]},"hZ":{"L":[]},"aI":{"A":["1","2"],"kd":["1","2"],"Z":["1","2"],"A.K":"1","A.V":"2"},"e6":{"p":["1"],"j":["1"],"j.E":"1"},"e7":{"V":["1"]},"h3":{"np":[]},"cB":{"aQ":[]},"d4":{"z":["1"],"aQ":[]},"cA":{"m":["M"],"z":["M"],"n":["M"],"p":["M"],"aQ":[],"j":["M"],"av":["M"],"m.E":"M"},"ec":{"m":["h"],"z":["h"],"n":["h"],"p":["h"],"aQ":[],"j":["h"],"av":["h"]},"eb":{"m":["M"],"mB":[],"z":["M"],"n":["M"],"p":["M"],"aQ":[],"j":["M"],"av":["M"],"m.E":"M"},"h4":{"m":["h"],"z":["h"],"n":["h"],"p":["h"],"aQ":[],"j":["h"],"av":["h"],"m.E":"h"},"h5":{"m":["h"],"z":["h"],"n":["h"],"p":["h"],"aQ":[],"j":["h"],"av":["h"],"m.E":"h"},"h6":{"m":["h"],"z":["h"],"n":["h"],"p":["h"],"aQ":[],"j":["h"],"av":["h"],"m.E":"h"},"h7":{"m":["h"],"z":["h"],"n":["h"],"p":["h"],"aQ":[],"j":["h"],"av":["h"],"m.E":"h"},"h8":{"m":["h"],"z":["h"],"n":["h"],"p":["h"],"aQ":[],"j":["h"],"av":["h"],"m.E":"h"},"d5":{"m":["h"],"qa":[],"z":["h"],"n":["h"],"p":["h"],"aQ":[],"j":["h"],"av":["h"],"m.E":"h"},"ed":{"m":["h"],"qb":[],"z":["h"],"n":["h"],"p":["h"],"aQ":[],"j":["h"],"av":["h"],"m.E":"h"},"eU":{"nW":[]},"ia":{"L":[]},"eV":{"c6":[],"L":[]},"H":{"aw":["1"]},"eT":{"hK":[]},"ev":{"fr":["1"]},"cb":{"V":["1"]},"eQ":{"j":["1"],"j.E":"1"},"dI":{"L":[]},"ex":{"bo":["1"],"dr":["1"],"c1":["1"]},"bL":{"c8":["1"],"dl":["1"],"aB":["1"],"ba":["1"]},"ey":{"hB":["1"],"iF":["1"],"ba":["1"]},"ew":{"ey":["1"],"hB":["1"],"iF":["1"],"ba":["1"]},"dm":{"fr":["1"]},"ao":{"dm":["1"],"fr":["1"]},"ds":{"dm":["1"],"fr":["1"]},"eP":{"hB":["1"],"iF":["1"],"ba":["1"]},"dk":{"i0":["1"],"eP":["1"],"hB":["1"],"iF":["1"],"ba":["1"]},"bo":{"dr":["1"],"c1":["1"]},"c8":{"dl":["1"],"aB":["1"],"ba":["1"]},"dl":{"aB":["1"],"ba":["1"]},"dr":{"c1":["1"]},"bM":{"i5":["1"]},"bp":{"ca":["1"]},"dn":{"aB":["1"]},"eY":{"nY":[]},"iy":{"eY":[],"nY":[]},"lr":{"aI":["1","2"],"A":["1","2"],"kd":["1","2"],"Z":["1","2"],"A.K":"1","A.V":"2"},"eD":{"aI":["1","2"],"A":["1","2"],"kd":["1","2"],"Z":["1","2"],"A.K":"1","A.V":"2"},"eE":{"em":["1"],"nN":["1"],"p":["1"],"j":["1"]},"eF":{"V":["1"]},"e1":{"j":["1"]},"e8":{"A":["1","2"],"Z":["1","2"]},"A":{"Z":["1","2"]},"eL":{"em":["1"],"nN":["1"],"p":["1"],"j":["1"]},"cm":{"ah":["cm"]},"M":{"O":[],"ah":["O"]},"ai":{"ah":["ai"]},"h":{"O":[],"ah":["O"]},"n":{"p":["1"],"j":["1"]},"O":{"ah":["O"]},"u":{"ah":["u"],"nH":[]},"dH":{"L":[]},"c6":{"L":[]},"hc":{"L":[]},"bx":{"L":[]},"d9":{"L":[]},"fP":{"L":[]},"hS":{"L":[]},"hP":{"L":[]},"b8":{"L":[]},"fs":{"L":[]},"hf":{"L":[]},"ep":{"L":[]},"fv":{"L":[]},"iJ":{"b7":[]},"bD":{"l":[]},"aK":{"l":[]},"w":{"e":[]},"aA":{"e":[]},"aC":{"e":[]},"af":{"e":[]},"q":{"a8":[],"w":[],"e":[]},"fa":{"a8":[],"w":[],"e":[]},"fb":{"a8":[],"w":[],"e":[]},"fi":{"a8":[],"w":[],"e":[]},"ch":{"a8":[],"w":[],"e":[]},"bg":{"w":[],"e":[]},"bA":{"w":[],"e":[]},"dR":{"m":["bm<O>"],"r":["bm<O>"],"n":["bm<O>"],"z":["bm<O>"],"p":["bm<O>"],"j":["bm<O>"],"r.E":"bm<O>","m.E":"bm<O>"},"dS":{"bm":["O"]},"fy":{"m":["u"],"r":["u"],"n":["u"],"z":["u"],"p":["u"],"j":["u"],"r.E":"u","m.E":"u"},"a8":{"w":[],"e":[]},"fE":{"m":["aF"],"r":["aF"],"n":["aF"],"z":["aF"],"p":["aF"],"j":["aF"],"r.E":"aF","m.E":"aF"},"fF":{"e":[]},"fI":{"a8":[],"w":[],"e":[]},"cq":{"m":["w"],"r":["w"],"n":["w"],"z":["w"],"p":["w"],"j":["w"],"r.E":"w","m.E":"w"},"e_":{"e":[]},"cr":{"e":[]},"d0":{"a8":[],"w":[],"e":[]},"cy":{"a8":[],"w":[],"e":[]},"h_":{"A":["u","@"],"Z":["u","@"],"A.K":"u","A.V":"@"},"h0":{"A":["u","@"],"Z":["u","@"],"A.K":"u","A.V":"@"},"h1":{"m":["aJ"],"r":["aJ"],"n":["aJ"],"z":["aJ"],"p":["aJ"],"j":["aJ"],"r.E":"aJ","m.E":"aJ"},"ee":{"m":["w"],"r":["w"],"n":["w"],"z":["w"],"p":["w"],"j":["w"],"r.E":"w","m.E":"w"},"hj":{"m":["aL"],"r":["aL"],"n":["aL"],"z":["aL"],"p":["aL"],"j":["aL"],"r.E":"aL","m.E":"aL"},"hq":{"A":["u","@"],"Z":["u","@"],"A.K":"u","A.V":"@"},"hs":{"a8":[],"w":[],"e":[]},"hw":{"m":["aA"],"r":["aA"],"n":["aA"],"z":["aA"],"e":[],"p":["aA"],"j":["aA"],"r.E":"aA","m.E":"aA"},"hx":{"m":["aN"],"r":["aN"],"n":["aN"],"z":["aN"],"p":["aN"],"j":["aN"],"r.E":"aN","m.E":"aN"},"hA":{"A":["u","u"],"Z":["u","u"],"A.K":"u","A.V":"u"},"hI":{"m":["af"],"r":["af"],"n":["af"],"z":["af"],"p":["af"],"j":["af"],"r.E":"af","m.E":"af"},"hJ":{"m":["aC"],"r":["aC"],"n":["aC"],"z":["aC"],"e":[],"p":["aC"],"j":["aC"],"r.E":"aC","m.E":"aC"},"hL":{"m":["aP"],"r":["aP"],"n":["aP"],"z":["aP"],"p":["aP"],"j":["aP"],"r.E":"aP","m.E":"aP"},"bn":{"l":[]},"di":{"a8":[],"w":[],"e":[]},"hV":{"e":[]},"dj":{"e":[]},"i3":{"m":["J"],"r":["J"],"n":["J"],"z":["J"],"p":["J"],"j":["J"],"r.E":"J","m.E":"J"},"ez":{"bm":["O"]},"ig":{"m":["aG?"],"r":["aG?"],"n":["aG?"],"z":["aG?"],"p":["aG?"],"j":["aG?"],"r.E":"aG?","m.E":"aG?"},"eG":{"m":["w"],"r":["w"],"n":["w"],"z":["w"],"p":["w"],"j":["w"],"r.E":"w","m.E":"w"},"iC":{"m":["aO"],"r":["aO"],"n":["aO"],"z":["aO"],"p":["aO"],"j":["aO"],"r.E":"aO","m.E":"aO"},"iK":{"m":["am"],"r":["am"],"n":["am"],"z":["am"],"p":["am"],"j":["am"],"r.E":"am","m.E":"am"},"eA":{"c1":["1"]},"cH":{"eA":["1"],"c1":["1"]},"eB":{"aB":["1"]},"dW":{"V":["1"]},"ij":{"nI":[]},"fT":{"m":["aW"],"r":["aW"],"n":["aW"],"p":["aW"],"j":["aW"],"r.E":"aW","m.E":"aW"},"hd":{"m":["aZ"],"r":["aZ"],"n":["aZ"],"p":["aZ"],"j":["aZ"],"r.E":"aZ","m.E":"aZ"},"hD":{"m":["u"],"r":["u"],"n":["u"],"p":["u"],"j":["u"],"r.E":"u","m.E":"u"},"o":{"a8":[],"w":[],"e":[]},"hM":{"m":["b_"],"r":["b_"],"n":["b_"],"p":["b_"],"j":["b_"],"r.E":"b_","m.E":"b_"},"dK":{"I":[],"e":[]},"cg":{"e":[]},"I":{"e":[]},"fd":{"A":["u","@"],"Z":["u","@"],"A.K":"u","A.V":"@"},"by":{"I":[],"e":[]},"fe":{"e":[]},"dL":{"e":[]},"d_":{"I":[],"e":[]},"he":{"e":[]},"bH":{"nq":[],"j":["u"],"j.E":"u"},"de":{"V":["u"]},"lA":{"j":["1"],"j.E":"1"},"cJ":{"V":["1"]},"cQ":{"dZ":[]},"bh":{"au":[]},"c3":{"au":[]},"c4":{"au":[]},"cV":{"au":[]},"c0":{"au":[]},"hn":{"au":[]},"ei":{"au":[]},"ho":{"au":[]},"bR":{"au":[]},"X":{"f":[]},"bY":{"X":["h"],"f":[],"X.T":"h"},"cx":{"X":["h"],"f":[],"X.T":"h"},"c5":{"dZ":[]},"fW":{"dZ":[]},"fz":{"az":[]},"fA":{"az":[]},"h9":{"R":[]},"eh":{"R":[]},"aY":{"R":[]},"dd":{"R":[]},"fU":{"R":[]},"es":{"R":[]},"dJ":{"R":[]},"dQ":{"R":[]},"ff":{"R":[]},"hR":{"R":[]},"eg":{"R":[]},"hl":{"R":[]},"fM":{"R":[]},"dT":{"R":[]},"hT":{"R":[]},"fG":{"az":[]},"e5":{"az":[]},"bF":{"ah":["bF"]},"ht":{"az":[]},"hv":{"q7":[]},"eo":{"az":[]},"hF":{"az":[]},"hH":{"az":[]},"hN":{"az":[],"pR":[]},"hG":{"ac":[]},"fq":{"ac":[]},"fg":{"ac":[]},"hg":{"ac":[]},"dM":{"ac":[]},"dc":{"ac":[]},"cP":{"ac":[]},"dX":{"ac":[]},"fj":{"ac":[]},"hp":{"ac":[]},"fD":{"az":[]},"hW":{"az":[]},"hX":{"aV":["i"]},"aU":{"aV":["1"]},"d7":{"aV":["1"]},"hb":{"aV":["i"]},"fm":{"aV":["i"]},"f8":{"aV":["i"]},"fu":{"aV":["i"]},"dD":{"aV":["i"]},"d6":{"aV":["i"]},"iT":{"cG":[]},"mB":{"n":["M"],"p":["M"],"j":["M"],"aQ":[]}}'))
A.qv(v.typeUniverse,JSON.parse('{"p":1,"d4":1,"e1":1,"e8":2,"eL":1,"eZ":1,"cP":1}'))
var u={S:" 0\x10000\xa0\x80\x10@P`p`p\xb1 0\x10000\xa0\x80\x10@P`p`p\xb0 0\x10000\xa0\x80\x11@P`p`p\xb0 1\x10011\xa0\x80\x10@P`p`p\xb0 1\x10111\xa1\x81\x10AQaqaq\xb0 1\x10011\xa0\x80\x10@Qapaq\xb0 1\x10011\xa0\x80\x10@Paq`p\xb0 1\x10011\xa0\x80\x10@P`q`p\xb0 \x91\x100\x811\xa0\x80\x10@P`p`p\xb0 1\x10011\xa0\x81\x10@P`p`p\xb0 1\x100111\x80\x10@P`p`p\xb0!1\x11111\xa1\x81\x11AQaqaq\xb1",M:'""""""""""""""""DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""3333s3#7333333339433333333333333CDDDDDDDDDDDDDDDDDDDDDDC433DDDDD4DDDDDDDDDDDDDDDDDD3CU33333333333333333333333333334T5333333333333333333333333333CCD3D33CD533333333333333333333333TEDTET53U5UE3333C33333333333333333333333333333CETUTDT5333333333333333333333333SUUUUUEUDDDDD43333433333333333333333333ET533E3333SDD3U3U4333343333C4333333333333CSD33343333333433333333333333333SUUUEDDDTE4333SDDSUSU\x94333343333C43333333333333333s333333333337333333333333wwwww73sw33sww7swwwwwss33373733s33333w33333\xa3\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xba\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xcb\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xec\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee>33333\xb3\xbb\xbb\xbb\xbb\xbb\xbb\xbb;3\xc3\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc334343C33333333333SET333333333333333EDTETD433333333CD33333333333333CD33333CDD4333333333333333333333333CDTDDDCTE43C4CD3C333333333333333D3C33333\x99\x99\x9933333DDDDD42333333333333333333CDDD4333333333333333333333333DDDD433334333C53333333333333333333333C33TEDCSUUU433333333S533333333333333333333333333333CD4DDDDD3D5333333333333333333333333333CSEUCUSE4333D33333C43333333333333CDDD9DDD3DCD433333333CDCDDDDDDEDDD33433C3E433#""""\x82" """"""""2333333333333333CDUUDU53SEUUUD43SDD3U3U4333C43333C43333333333333SE43CD33333333DD33333CDDDDDDDDDD3333333343333333B!233333333333#"""333333s3CD533333333333333333333333333CESEU3333333333333333333DDDD433333CD2333333333333333333333333""""23333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDD33333333333333333333333333333CDDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333SUDDDDUDT43333333333343333333333333333333333333333333333333333TEDDTTEETD333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CUDD3UUDE43333333333333D33333333333333333333333333333333333333333UEDDDTEE43333333333333333333333333333333333333333333333333333CEUDDDE33333333333333333333333333333333333333333333333333CDUDDEDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333D#"2333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CSUUUUUUUUUUUUUUUUUUUUUUUUUUU333CD4333333333333333333333333333333333333333333333333333333""""""33EDDCTSE3333333333D33333333333DDDDDDD\x94DDDDDDDDDDDDDDDDDDDDDDDDDDDDDCDDDDDDDD3DDD4DCDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CD4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDDDD333333333333333333333333333333333333333333333333333333333333333333333333333333333333333s73333s33333333333""""""""3333333373s333333333333333333333333333333CTDDDTU5D4DD333C433333D33333333333333DU433333333333333333333DDDUDUD3333S3333333333333333334333333333333s733333s33333333333CD4DDDD4D4DD4333333333sww73333333w3333333333sw3333s33333337333333sw333333333s733333333333333333UTEUS433333333C433333333333333C433333333333334443SUE4333333333333CDDDDDDDD4333333DDDDDT533333\xa3\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa3SDDDDUUT5DDD43333C43333333333333333C33333333333EEDDDCC3DDDDUUUDDDDD3T5333333333333333333333333333CSDDD433E533333333333333333333333333DDDDDDD4333333333333333333333333333CD53333333333333333333333UEDTE4\x933333333\x933333333333333333333333333D433333333333333333CDDEDDD43333333S5333333333333333333333C333333D533333333333333333333333SUDDDDT5\x9933CD433333333333333333333333333333333333333333333333UEDUTD33343333333333333333333333333333333333333333333333333333333333333333333333333333333CUEDDD43333333333DU333333333333333333333333333C4TTU5S5SU3333C33333U3DDD43DD4333333333333333333333333333333333333333333333333333333333333333333333DDDDDDD533333333333333333333333DDDTTU43333333333333333333333333333DDD733333s373ss33w7733333ww733333333333ss33333333333333333333333333333ww3333333333333333333333333333wwww33333www33333333333333333333wwww333333333333333wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww333333wwwwwwwwwwwwwwwwwwwwwww7wwwwwswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww733333333333333333333333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333333333333333333333333333333333333333333333333333333333swwwww7333333333333333333333333333333333333333333wwwwwwwwwwwwwwwwwwwww7wwwwwwswwwwwwwwwwwwwwwwwwwww73333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333333w7333333333333333733333333333333333333333333333sww733333s7333333s3wwwww333333333wwwwwwwwwwwwwwwwwwwwwwwwwwwwgffffffffffff6wwwwwww73333s33333333337swwwwsw73333wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwDDDDDDDDDDDDDDDDDDDDDDDD33333333DDDDDDDD33333333DDDDDDDDDDDDDDDD43333333DC44333333333333333333333333333SUDDDDTD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333UED4CTUE3S33333333333333DDDDD33333333333333333333DDD\x95DD333343333DDDUD43333333333333333333\x93\x99\x99IDDDDDDE4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDDDDDDDDDDDDDDDDDDDDDDDDDD33DDDDDDDDDDDDDDDDDDDDDDDDD33334333333C33333333333DD4DDDDDDD43333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333TD43EDD""""DDDD3DDD433333333333333CD43333333333333333333333333333333333333333333333333333333333333333333333333CD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333C33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333433333333333333333333333333333333333333333333333333333333333333333333333333DD4333333333333333333333333333333333333333333333333333333333333333333EDDDCDDT43333333333333333333333333333333333333333CDDDDDDDDDD4EDDDETD3333333333333333333333333333333333333333333333333333333333333DDD3CC4DDD\x94433333333333333333333333333333333SUUC4UT433333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333DU333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDD333333333333333333333333333333333333333333333333333333CDDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDC433DD33333333333333333333D43C3333333333333333333333333333333333333333333333333333333333333333333333333333333333C4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333334EDDDD3\x03',d:"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",Z:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",v:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",I:"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\nin vec4 v_bg_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n  if (v_bg_color != vec4(0, 0, 0, 0)) {\n    outColor = outColor + v_bg_color;\n  }\n}\n",t:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",_:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\n\nout vec4 outColor;\n\nvoid main() {\n    vec2 tex_position = gl_FragCoord.xy / vec2(100, 40);\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n    float source_strength = u_source_strength + sin(u_time * 2.0);\n    float dist = distance(gl_FragCoord.xy, (u_source_position + vec2(0.5, 0.5))) / 2.0;\n    if (dist > source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, source_strength, dist);\n    outColor = vec4(u_source_color.rgb, scale);\n}\n",L:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // back textures is already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 front = texture(u_light_texture, tex_position);\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  // front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",s:"\u0e3b\u1cdb\u05d0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b \u389c\u102b\u102b\u102b\u102b\u489c\u102b\u102b\u102b\u0620\u392b\u0c26\u0efa\u102b\u0dcb\u0601\u3e7e\u228f\u0c77\u24d3\u40b2\u102b\u1d51\u0f6f\u2681\u0698\u0851\u0d63\u0be6\u0d63\u1d2a\u06d5\u0e9b\u0771\u075c\u2b98\u23fe\u2707\u0da1\u2a52\u08eb\u0d13\u0ce3\u2712\u0c62\u4d9d\u0b97\u25cb\u2b21\u0659\u42c5\u0baa\u0ec5\u088d\u102b\u09b9\u09d9\u09f9\u0a21\u102b\u102b\u102b\u102b\u102b\u40ae\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0b5f\u25b1\u23c1\u07f5\u0fe2\u102b\u269e\u102b\u0e5b\u102b\u102b\u102b\u2427\u26c9\u275a\u102b\u2b5c\u0fad\u0b31\u0789\u08ab\u102b\u102b\u0dfb\u102b\u102b\u102b\u1d74\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0f2f\u2372\u102b\u38ec\u090f\u102b\u2501\u102b\u102b\u102b\u102b\u102b\u24a9\u102b\u35c8\u0939\u102b\u102b\u102b\u23b5\u102b\u102b\u2345\u2c27\u3457\u2d9d\u3491\u2d9d\u0979\u2be5\u252c\u102b\u102b\u102b\u102b\u102b\u233b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2566\u23a2\u102b\u102b\u102b\u102b\u102b\u409c\u102b\u428c\u102b\u3db9\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2bac\u102b\u16c9\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2c0e\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0d24\u4c95\u4c83\u102b\u102b\u102b\u102b\u0b0c\u102b\u07bb\u2609\u0c43\u2641\u071f\u2483\u2443\u0cb1\u06e1\u0811\u102b\u102b\u102b\u2583\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a95\u0ace\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u42ad\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u38bc\u102b\u102b\u1cdb\u102b\u102b\u4c95\u1cea\u40ce\u102b\u49ce\u1f6f\u2752\u1506\u393f\u449f\u102b\u102b\u102b\u102b\u102b\u0ff2\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u113b\u191a\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u1869\u102b\u102b\u102b\u102b\u3e89\u102b\u3bd9\u102b\u1da7\u102b\u47cf\u102b\u34a1\u305d\u2c56\u2d9d\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\x00\u01f0\u01f0\u01f0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b"}
var t=(function rtii(){var s=A.aT
return{bm:s("@<~>"),mm:s("f9"),A:s("aU<i>"),bB:s("a1"),lE:s("at"),u:s("dI"),bD:s("be"),lo:s("np"),jQ:s("ch"),gN:s("cj"),m1:s("nq"),n6:s("ah<v?>"),i_:s("dP"),d5:s("J"),cs:s("cm"),dA:s("bA"),jW:s("bX"),L:s("ai"),ox:s("my"),gt:s("p<@>"),v:s("a4"),O:s("fB"),l8:s("cn"),b:s("co"),fz:s("L"),U:s("l"),fq:s("G"),cM:s("R"),et:s("aF"),C:s("mB"),gY:s("cp"),h:s("aw<@>"),bC:s("dX"),m:s("a9<h,f>"),eT:s("a5<cv>"),f5:s("a5<cF>"),eN:s("a5<an>"),nr:s("a5<c5>"),ba:s("a5<df>"),de:s("a5<M>"),oQ:s("a5<aj?>"),hQ:s("d0"),h8:s("a6"),J:s("aj"),e7:s("j<@>"),c7:s("t<cQ>"),if:s("t<cS>"),G:s("t<S>"),a:s("t<au>"),V:s("t<bf>"),fy:s("t<bS>"),Q:s("t<ft>"),X:s("t<b2>"),pl:s("t<my>"),f:s("t<ac>"),c:s("t<a4>"),lT:s("t<cn>"),w:s("t<R>"),iw:s("t<aw<~>>"),ow:s("t<dZ>"),ge:s("t<a6>"),Y:s("t<b3>"),I:s("t<aj>"),lB:s("t<bk>"),fu:s("t<n<bZ>>"),do:s("t<n<i>>"),fC:s("t<n<h>>"),lR:s("t<ax>"),ku:s("t<bZ>"),hf:s("t<v>"),d:s("t<hh>"),q:s("t<i>"),ff:s("t<hm>"),hd:s("t<db>"),k:s("t<Q>"),fF:s("t<hy>"),s:s("t<u>"),oe:s("t<et>"),o:s("t<x>"),B:s("t<b0>"),D:s("t<cG>"),bu:s("t<b9>"),n:s("t<M>"),dG:s("t<@>"),t:s("t<h>"),g2:s("t<O>"),ev:s("t<~(ai)>"),T:s("e4"),dY:s("bC"),dX:s("z<@>"),mT:s("bD"),kT:s("aW"),p:s("n<cQ>"),mw:s("n<a4>"),i8:s("n<i>"),bd:s("n<M>"),gM:s("cv"),nW:s("Z<i,a4>"),ea:s("Z<u,@>"),gX:s("cx"),e:s("bY"),li:s("a3"),km:s("fZ<b3>"),ib:s("aJ"),ee:s("bZ"),gD:s("aK"),fh:s("w"),P:s("a_"),ai:s("aZ"),K:s("v"),mn:s("P"),gm:s("d7<i>"),p6:s("bF"),d8:s("aL"),j:s("i"),o5:s("nI"),kB:s("ay"),mx:s("bm<O>"),e4:s("dc<@>"),fm:s("aA"),cA:s("aN"),hH:s("aO"),r:s("Q"),l:s("b7"),N:s("u"),lv:s("am"),dt:s("cF"),dy:s("an"),dQ:s("aC"),gJ:s("af"),lJ:s("bI"),W:s("c5"),ns:s("df"),hU:s("hK"),ki:s("aP"),hk:s("b_"),fH:s("et"),ha:s("nW"),bE:s("c6"),jv:s("aQ"),cx:s("dh"),eL:s("di"),kL:s("aR<a1>"),b1:s("aR<at>"),eo:s("aR<a3>"),au:s("aR<ay>"),c1:s("cG"),l7:s("hY"),np:s("ew<R>"),oJ:s("ao<be>"),fB:s("ao<bI>"),pn:s("ao<b3?>"),ou:s("ao<~>"),aN:s("i1"),n4:s("b9"),bz:s("cH<l>"),og:s("H<be>"),aa:s("H<bI>"),g:s("H<@>"),hy:s("H<h>"),j7:s("H<b3?>"),cU:s("H<~>"),gL:s("iE<v?>"),iF:s("ds<~>"),im:s("iN"),o3:s("iS"),k4:s("F"),ei:s("F(a1)"),g9:s("F(at)"),eU:s("F(a3)"),iW:s("F(v)"),hZ:s("F(ay)"),i:s("M"),z:s("@"),mY:s("@()"),y:s("@(v)"),ng:s("@(v,b7)"),p1:s("@(@,@)"),S:s("h"),eK:s("0&*"),_:s("v*"),fr:s("dM?"),mV:s("ac?"),oL:s("R?"),gK:s("aw<a_>?"),ef:s("aG?"),R:s("aj?"),fb:s("n<aj>?"),iD:s("v?"),F:s("cI<@,@>?"),nF:s("im?"),du:s("@(l)?"),ld:s("h(b9,b9)?"),Z:s("~()?"),p0:s("~(be)?"),lW:s("~(bX)?"),oV:s("~(l)?"),jV:s("~(bD)?"),b9:s("~(aK)?"),cZ:s("O"),H:s("~"),M:s("~()"),nD:s("~([~])"),x:s("~(ai)"),nt:s("~(R)"),i6:s("~(v)"),fQ:s("~(v,b7)"),gS:s("~(u,u)"),E:s("~(u,@)"),my:s("~(hK)"),hv:s("~(O)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aN=A.dK.prototype
B.cW=A.cg.prototype
B.cX=A.fc.prototype
B.af=A.ch.prototype
B.eG=A.cX.prototype
B.eO=A.d_.prototype
B.eP=A.e_.prototype
B.f1=J.a.prototype
B.a=J.t.prototype
B.f3=J.e2.prototype
B.e=J.e3.prototype
B.b=J.d1.prototype
B.f=J.cs.prototype
B.f4=J.bC.prototype
B.a6=A.eb.prototype
B.fG=A.d5.prototype
B.N=A.ed.prototype
B.bi=J.hi.prototype
B.d=A.da.prototype
B.aI=J.dh.prototype
B.cu=A.dj.prototype
B.cp=new A.an(5,"table")
B.cv=new A.dD(B.cp)
B.aJ=new A.dE(2,"rounds")
B.U=new A.fm()
B.aF=new A.an(11,"column")
B.bg=new A.d6(B.aF)
B.cH=new A.aU(B.U,B.bg,t.A)
B.R=new A.an(0,"door")
B.bf=new A.d6(B.R)
B.cC=new A.aU(B.cH,B.bf,t.A)
B.d5=new A.hb()
B.cD=new A.aU(B.cC,B.d5,t.A)
B.ad=new A.f8()
B.cF=new A.aU(B.ad,B.bg,t.A)
B.cG=new A.aU(B.cF,B.bf,t.A)
B.cO=new A.a1("",0,0,0,99)
B.ac=new A.bf(0,"surface")
B.C=new A.bf(1,"caves")
B.B=new A.bf(2,"deepCaves")
B.T=new A.bf(3,"facility")
B.D=new A.bf(4,"ruins")
B.cY=new A.bf(5,"village")
B.cZ=new A.bf(6,"snow")
B.ae=new A.fu()
B.aO=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.d_=function() {
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
B.d4=function(getTagFallback) {
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
B.d0=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.d1=function(hooks) {
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
B.d3=function(hooks) {
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
B.d2=function(hooks) {
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
B.aP=function(hooks) { return hooks; }

B.aQ=new A.kt()
B.d6=new A.hf()
B.y=new A.kJ()
B.o=new A.ij()
B.m=new A.iy()
B.d7=new A.iJ()
B.ag=new A.fp(2,"ignoreAgentsAndUnlockedDoors")
B.V=new A.fp(3,"normal")
B.dc=new A.f(1660944383)
B.dd=new A.f(3707764736)
B.W=new A.f(4278190080)
B.ei=new A.f(4294278144)
B.ah=new A.f(4294967295)
B.G=new A.bj(null,null,null,null)
B.eF=new A.dP(0,"health")
B.aU=new A.bW(5,"d20")
B.am=new A.b2(0,"se")
B.an=new A.b2(1,"ne")
B.ao=new A.b2(2,"sw")
B.ap=new A.b2(3,"nw")
B.r=new A.b2(4,"n")
B.t=new A.b2(5,"e")
B.u=new A.b2(6,"s")
B.v=new A.b2(7,"w")
B.eL=new A.ai(0)
B.eM=new A.ai(25e4)
B.eN=new A.ai(8000)
B.E=new A.co(0,"primaryMelee")
B.p=new A.co(1,"primaryRanged")
B.F=new A.co(2,"armor")
B.eQ=new A.a6(1,"north")
B.eR=new A.a6(10,"activate")
B.eS=new A.a6(12,"equipment")
B.eT=new A.a6(19,"autoexplore")
B.eU=new A.a6(2,"east")
B.eV=new A.a6(20,"reload")
B.eW=new A.a6(21,"toggleStats")
B.eX=new A.a6(22,"showMenu")
B.eY=new A.a6(3,"south")
B.eZ=new A.a6(4,"west")
B.f_=new A.a6(6,"fire")
B.f0=new A.a6(8,"look")
B.aq=new A.a2(0,"none")
B.ar=new A.a2(1,"stairsUp")
B.X=new A.a2(10,"tree")
B.Y=new A.a2(11,"bookshelf")
B.H=new A.a2(12,"mechanism")
B.Z=new A.a2(13,"activatedMechanism")
B.a_=new A.a2(14,"chest")
B.a0=new A.a2(15,"stalagmite")
B.a1=new A.a2(16,"column")
B.I=new A.a2(2,"stairsDown")
B.z=new A.a2(3,"door")
B.J=new A.a2(4,"openDoor")
B.K=new A.a2(5,"lockedDoor")
B.L=new A.a2(6,"grass")
B.M=new A.a2(7,"torch")
B.a2=new A.a2(8,"table")
B.a3=new A.a2(9,"chair")
B.as=new A.bk(0,"melee")
B.at=new A.bk(1,"ranged")
B.au=new A.bk(2,"armor")
B.aV=new A.bk(3,"other")
B.av=new A.bk(4,"consumable")
B.f2=new A.bk(5,"corpse")
B.aW=new A.bk(6,"ammo")
B.aX=new A.ak(" ",!1,!1,!1)
B.aw=new A.ak("ArrowDown",!1,!1,!1)
B.aY=new A.ak("ArrowLeft",!1,!1,!1)
B.aZ=new A.ak("ArrowRight",!1,!1,!1)
B.ax=new A.ak("ArrowUp",!1,!1,!1)
B.b_=new A.ak("Enter",!1,!1,!1)
B.ay=new A.ak("Escape",!1,!1,!1)
B.f5=new A.ak("e",!1,!1,!1)
B.f6=new A.ak("i",!1,!1,!1)
B.f7=new A.kg(1,"water")
B.aK=new A.cS(0,"light")
B.aL=new A.cS(1,"heavy")
B.aM=new A.cS(2,"powered")
B.hz=A.c(s([B.aK,B.aL,B.aM]),t.if)
B.cI=new A.at(1)
B.cJ=new A.at(1)
B.cK=new A.at(1)
B.cL=new A.at(1)
B.hx=A.c(s([B.aM]),t.if)
B.cM=new A.at(2)
B.hB=A.c(s([B.aK,B.aL]),t.if)
B.cN=new A.at(2)
B.f8=A.c(s([B.cI,B.cJ,B.cK,B.cL,B.cM,B.cN]),A.aT("t<at>"))
B.b0=A.c(s([1,2,4,8]),t.t)
B.f9=A.c(s([24,36]),t.n)
B.hv=new A.fN(0,"oneHand")
B.eH=new A.bV(1,"cold")
B.hu=new A.cl(9,"staggered")
B.hj=new A.bU()
B.al=new A.bW(2,"d6")
B.hf=new A.b0(6,"stun")
B.ct=new A.b0(5,"powered")
B.fb=A.c(s([B.hf,B.ct]),t.B)
B.cy=new A.dE(1,"charge")
B.cA=new A.dF(B.cy,20)
B.fJ=new A.ay("Zero pistol",B.eH,B.al,5,B.cA,60)
B.aR=new A.bV(6,"piercing")
B.hq=new A.cl(0,"none")
B.hk=new A.bU()
B.aS=new A.bW(0,"d3")
B.S=new A.b0(2,"analog")
B.hA=A.c(s([B.S]),t.B)
B.cB=new A.dF(B.aJ,9)
B.O=new A.ay("Tac Pistol",B.aR,B.aS,1,B.cB,30)
B.ai=new A.bV(3,"fire")
B.ht=new A.cl(4,"burn")
B.hl=new A.bU()
B.aT=new A.bW(3,"d8")
B.hg=new A.b0(7,"line")
B.hh=new A.b0(8,"unwieldy")
B.hy=A.c(s([B.hg,B.hh]),t.B)
B.cx=new A.dE(0,"petro")
B.cz=new A.dF(B.cx,20)
B.fK=new A.ay("Flame Rifle",B.ai,B.aT,2,B.cz,25)
B.fa=A.c(s([B.fJ,B.O,B.fK]),A.aT("t<ay>"))
B.fN=new A.c_(0,"north")
B.fO=new A.c_(1,"south")
B.fP=new A.c_(2,"east")
B.fQ=new A.c_(3,"west")
B.fR=new A.c_(4,"center")
B.b1=A.c(s([B.fN,B.fO,B.fP,B.fQ,B.fR]),A.aT("t<c_>"))
B.b2=A.c(s([B.r,B.u]),t.X)
B.b3=A.c(s([B.t,B.v]),t.X)
B.az=A.c(s([B.am,B.an,B.ao,B.ap,B.r,B.t,B.u,B.v]),t.X)
B.A=A.c(s([-1,3,-1,-1,3,-1]),t.n)
B.a4=A.c(s([]),t.Q)
B.ff=A.c(s([]),t.X)
B.i=A.c(s([]),t.w)
B.fe=A.c(s([]),A.aT("t<a_>"))
B.cU=new A.a1("Second Skin",1,1,2,5)
B.cV=new A.a1("Estex Suit I",1,0,1,5)
B.cR=new A.a1("Flight Suit",1,0,1,6)
B.cS=new A.a1("Freebooter Armor I",2,2,3,4)
B.cP=new A.a1("Kasatha microcord I",2,1,3,3)
B.cQ=new A.a1("Ceremonial Plate",1,1,3,2)
B.cT=new A.a1("Golemforged Plating",1,2,5,0)
B.fh=A.c(s([B.cU,B.cV,B.cR,B.cS,B.cP,B.cQ,B.cT]),A.aT("t<a1>"))
B.aj=new A.bV(5,"bludgeoning")
B.cr=new A.b0(0,"archaic")
B.fk=A.c(s([B.cr,B.S]),t.B)
B.fx=new A.a3(B.aj,1,B.al,0,"Club",B.fk)
B.ak=new A.bW(1,"d4")
B.he=new A.b0(3,"operative")
B.b4=A.c(s([B.S,B.he]),t.B)
B.fv=new A.a3(B.aj,1,B.ak,1,"Tactical Baton",B.b4)
B.eJ=new A.bV(7,"slashing")
B.fB=new A.a3(B.eJ,1,B.ak,1,"Survival Knife",B.b4)
B.hw=new A.fN(1,"twoHand")
B.cs=new A.b0(4,"block")
B.fc=A.c(s([B.S,B.cs]),t.B)
B.fA=new A.a3(B.aR,1,B.al,1,"Tactical Spear",B.fc)
B.hm=new A.bU()
B.b5=A.c(s([B.ct]),t.B)
B.hp=new A.kn()
B.fw=new A.a3(B.ai,2,B.ak,7,"Flame Sword",B.b5)
B.hs=new A.cl(11,"wound")
B.hn=new A.bU()
B.fy=new A.a3(B.ai,2,B.aT,9,"Plasma Sword",B.b5)
B.eI=new A.bV(2,"electricity")
B.hr=new A.cl(1,"arc")
B.ho=new A.bU()
B.eK=new A.bW(4,"d12")
B.fC=new A.a3(B.eI,1,B.eK,8,"Shock Staff",B.fb)
B.fi=A.c(s([B.fx,B.fv,B.fB,B.fA,B.fw,B.fy,B.fC]),A.aT("t<a3>"))
B.d8=new A.ci(0,"north")
B.d9=new A.ci(1,"south")
B.da=new A.ci(2,"east")
B.db=new A.ci(3,"west")
B.fj=A.c(s([B.d8,B.d9,B.da,B.db]),A.aT("t<ci>"))
B.b6=new A.cv(0,"lockedDoor")
B.fl=new A.cv(3,"doorMechanism")
B.b7=new A.cv(4,"none")
B.em=new A.f(4294638330)
B.ek=new A.f(4294309365)
B.ed=new A.f(4293848814)
B.e7=new A.f(4292927712)
B.e5=new A.f(4292269782)
B.e0=new A.f(4290624957)
B.dT=new A.f(4288585374)
B.dL=new A.f(4285887861)
B.dG=new A.f(4284572001)
B.dw=new A.f(4282532418)
B.ds=new A.f(4281348144)
B.dl=new A.f(4280361249)
B.a5=new A.a9([50,B.em,100,B.ek,200,B.ed,300,B.e7,350,B.e5,400,B.e0,500,B.dT,600,B.dL,700,B.dG,800,B.dw,850,B.ds,900,B.dl],t.m)
B.eb=new A.f(4293457385)
B.e2=new A.f(4291356361)
B.dV=new A.f(4289058471)
B.dO=new A.f(4286695300)
B.dI=new A.f(4284922730)
B.dB=new A.f(4283215696)
B.dy=new A.f(4282622023)
B.du=new A.f(4281896508)
B.dr=new A.f(4281236786)
B.dj=new A.f(4279983648)
B.b8=new A.a9([50,B.eb,100,B.e2,200,B.dV,300,B.dO,400,B.dI,500,B.dB,600,B.dy,700,B.du,800,B.dr,900,B.dj],t.m)
B.eC=new A.f(4294966759)
B.eB=new A.f(4294965700)
B.eA=new A.f(4294964637)
B.ez=new A.f(4294963574)
B.ey=new A.f(4294962776)
B.ew=new A.f(4294961979)
B.eo=new A.f(4294826037)
B.en=new A.f(4294688813)
B.el=new A.f(4294551589)
B.ej=new A.f(4294278935)
B.b9=new A.a9([50,B.eC,100,B.eB,200,B.eA,300,B.ez,400,B.ey,500,B.ew,600,B.eo,700,B.en,800,B.el,900,B.ej],t.m)
B.eg=new A.f(4293913577)
B.e6=new A.f(4292332744)
B.e_=new A.f(4290554532)
B.dU=new A.f(4288776319)
B.dQ=new A.f(4287458915)
B.dN=new A.f(4286141768)
B.dK=new A.f(4285353025)
B.dE=new A.f(4284301367)
B.dC=new A.f(4283315246)
B.dv=new A.f(4282263331)
B.ba=new A.a9([50,B.eg,100,B.e6,200,B.e_,300,B.dU,400,B.dQ,500,B.dN,600,B.dK,700,B.dE,800,B.dC,900,B.dv],t.m)
B.ex=new A.f(4294962158)
B.es=new A.f(4294954450)
B.ef=new A.f(4293892762)
B.ea=new A.f(4293227379)
B.ee=new A.f(4293874512)
B.eh=new A.f(4294198070)
B.e9=new A.f(4293212469)
B.e4=new A.f(4292030255)
B.e1=new A.f(4291176488)
B.dX=new A.f(4290190364)
B.aA=new A.a9([50,B.ex,100,B.es,200,B.ef,300,B.ea,400,B.ee,500,B.eh,600,B.e9,700,B.e4,800,B.e1,900,B.dX],t.m)
B.e8=new A.f(4293128957)
B.dZ=new A.f(4290502395)
B.dS=new A.f(4287679225)
B.dH=new A.f(4284790262)
B.dx=new A.f(4282557941)
B.dm=new A.f(4280391411)
B.dk=new A.f(4280191205)
B.di=new A.f(4279858898)
B.dh=new A.f(4279592384)
B.dg=new A.f(4279060385)
B.bb=new A.a9([50,B.e8,100,B.dZ,200,B.dS,300,B.dH,400,B.dx,500,B.dm,600,B.dk,700,B.di,800,B.dh,900,B.dg],t.m)
B.ec=new A.f(4293718001)
B.e3=new A.f(4291811548)
B.dW=new A.f(4289773253)
B.dR=new A.f(4287669422)
B.dM=new A.f(4286091420)
B.dF=new A.f(4284513675)
B.dD=new A.f(4283723386)
B.dA=new A.f(4282735204)
B.dt=new A.f(4281812815)
B.dn=new A.f(4280693304)
B.bc=new A.a9([50,B.ec,100,B.e3,200,B.dW,300,B.dR,400,B.dM,500,B.dF,600,B.dD,700,B.dA,800,B.dt,900,B.dn],t.m)
B.fg=A.c(s([]),t.s)
B.hC=new A.dO(0,{},B.fg,A.aT("dO<u,@>"))
B.et=new A.f(4294955392)
B.er=new A.f(4294945600)
B.eq=new A.f(4294938880)
B.ep=new A.f(4294929664)
B.fo=new A.a9([100,B.et,200,B.er,400,B.eq,700,B.ep],t.m)
B.aB=new A.a9([B.F,null,B.E,null,B.p,null],A.aT("a9<co,aj?>"))
B.dP=new A.f(4286755327)
B.dz=new A.f(4282682111)
B.dq=new A.f(4280908287)
B.dp=new A.f(4280902399)
B.fm=new A.a9([100,B.dP,200,B.dz,400,B.dq,700,B.dp],t.m)
B.fq=new A.cx(B.fm,4282682111)
B.dY=new A.f(4290377418)
B.dJ=new A.f(4285132974)
B.df=new A.f(4278249078)
B.de=new A.f(4278241363)
B.fn=new A.a9([100,B.dY,200,B.dJ,400,B.df,700,B.de],t.m)
B.fr=new A.cx(B.fn,4285132974)
B.eE=new A.f(4294967181)
B.eD=new A.f(4294967040)
B.ev=new A.f(4294961664)
B.eu=new A.f(4294956544)
B.fp=new A.a9([100,B.eE,200,B.eD,400,B.ev,700,B.eu],t.m)
B.fs=new A.cx(B.fp,4294967040)
B.ft=new A.bY(B.a5,4288585374)
B.bd=new A.bY(B.b9,4294961979)
B.n=new A.bY(B.aA,4294198070)
B.fu=new A.bY(B.bb,4280391411)
B.hd=new A.b0(1,"nonlethal")
B.fd=A.c(s([B.cr,B.hd,B.S]),t.B)
B.fz=new A.a3(B.aj,1,B.aS,0,"Fists",B.fd)
B.be=new A.d3(0,"wildBoar")
B.fD=new A.d3(1,"zyborgMelee")
B.fE=new A.d3(2,"zyborgRanged")
B.fF=new A.d3(3,"caveScanner")
B.k=new A.P(0,0)
B.fH=new A.d7(B.ad,t.gm)
B.aH=new A.an(7,"bookshelf")
B.cw=new A.dD(B.aH)
B.cE=new A.aU(B.ad,B.cw,t.A)
B.fI=new A.d7(B.cE,t.gm)
B.bh=new A.hh(2,"elementalAffinity")
B.q=new A.i(0,0)
B.P=new A.aM(B.k,0,0)
B.aC=new A.ek(0,"small")
B.fL=new A.ek(1,"medium")
B.fM=new A.ek(2,"large")
B.a7=new A.en(0,"melee")
B.a8=new A.en(1,"ranged")
B.a9=new A.en(2,"armor")
B.bj=new A.k(0,0)
B.fS=new A.k(0,1)
B.bk=new A.k(0,3)
B.bl=new A.k(0,5)
B.bm=new A.k(0,7)
B.bn=new A.k(10,11)
B.bo=new A.k(10,2)
B.bp=new A.k(10,3)
B.bq=new A.k(10,4)
B.br=new A.k(10,5)
B.bs=new A.k(10,6)
B.bt=new A.k(10,7)
B.fT=new A.k(11,11)
B.fU=new A.k(11,2)
B.bu=new A.k(11,4)
B.bv=new A.k(11,5)
B.bw=new A.k(11,6)
B.fV=new A.k(11,7)
B.fW=new A.k(12,11)
B.fX=new A.k(12,2)
B.bx=new A.k(12,4)
B.by=new A.k(12,6)
B.fY=new A.k(12,7)
B.fZ=new A.k(13,0)
B.bz=new A.k(13,12)
B.bA=new A.k(13,2)
B.bB=new A.k(13,4)
B.h_=new A.k(13,5)
B.bC=new A.k(13,6)
B.h0=new A.k(14,2)
B.bD=new A.k(14,4)
B.bE=new A.k(14,6)
B.aD=new A.k(15,2)
B.bF=new A.k(15,4)
B.bG=new A.k(15,6)
B.h1=new A.k(1,2)
B.bH=new A.k(1,3)
B.bI=new A.k(1,4)
B.bJ=new A.k(1,5)
B.bK=new A.k(1,6)
B.bL=new A.k(1,7)
B.bM=new A.k(2,3)
B.bN=new A.k(2,4)
B.bO=new A.k(2,5)
B.bP=new A.k(2,6)
B.bQ=new A.k(2,7)
B.bR=new A.k(3,3)
B.bS=new A.k(3,4)
B.bT=new A.k(3,5)
B.bU=new A.k(3,6)
B.bV=new A.k(3,7)
B.bW=new A.k(4,3)
B.bX=new A.k(4,4)
B.bY=new A.k(4,5)
B.bZ=new A.k(4,6)
B.c_=new A.k(4,7)
B.h2=new A.k(5,0)
B.c0=new A.k(5,3)
B.c1=new A.k(5,4)
B.c2=new A.k(5,5)
B.c3=new A.k(5,6)
B.c4=new A.k(5,7)
B.c5=new A.k(6,3)
B.c6=new A.k(6,4)
B.c7=new A.k(6,5)
B.c8=new A.k(6,6)
B.c9=new A.k(6,7)
B.ca=new A.k(7,3)
B.cb=new A.k(7,4)
B.cc=new A.k(7,5)
B.cd=new A.k(7,6)
B.ce=new A.k(7,7)
B.h3=new A.k(8,12)
B.h4=new A.k(8,2)
B.cf=new A.k(8,3)
B.cg=new A.k(8,4)
B.ch=new A.k(8,5)
B.ci=new A.k(8,6)
B.cj=new A.k(8,7)
B.h5=new A.k(9,12)
B.h6=new A.k(9,2)
B.ck=new A.k(9,3)
B.cl=new A.k(9,4)
B.cm=new A.k(9,5)
B.cn=new A.k(9,6)
B.co=new A.k(9,7)
B.Q=new A.bH("")
B.aE=new A.cF(0,"dirt")
B.aa=new A.cF(2,"metal")
B.h7=new A.cF(4,"snow")
B.h8=new A.an(10,"stalagmite")
B.ab=new A.an(2,"light")
B.w=new A.an(3,"none")
B.h9=new A.an(4,"chair")
B.aG=new A.an(6,"chest")
B.ha=new A.an(8,"mechanism")
B.hb=new A.an(9,"tree")
B.j=new A.df(0,"floor")
B.c=new A.df(1,"wall")
B.hc=A.rU("v")
B.x=new A.dg(0,"float_1")
B.h=new A.dg(1,"float_2")
B.cq=new A.dg(3,"float_4")
B.l=new A.dg(4,"texture_1")
B.hi=new A.dq(null,2)})();(function staticFields(){$.lp=null
$.nn=null
$.nm=null
$.os=null
$.on=null
$.oC=null
$.lO=null
$.lW=null
$.mY=null
$.dv=null
$.f_=null
$.f0=null
$.mU=!1
$.E=B.m
$.aS=A.c([],t.hf)
$.nv=0
$.nj=null
$.qG=A.aX(["0",B.bk,"1",B.bH,"2",B.bM,"3",B.bR,"4",B.bW,"5",B.c0,"6",B.c5,"7",B.ca,"8",B.cf,"9",B.ck," ",B.bj,"-",B.bA,"a",B.bK,"b",B.bP,"c",B.bU,"d",B.bZ,"e",B.c3,"f",B.c8,"g",B.cd,"h",B.ci,"i",B.cn,"j",B.bs,"k",B.bw,"l",B.by,"m",B.bC,"n",B.bE,"o",B.bG,"p",B.bm,"q",B.bL,"r",B.bQ,"s",B.bV,"t",B.c_,"u",B.c4,"v",B.c9,"w",B.ce,"x",B.cj,"y",B.co,"z",B.bt,"A",B.bI,"B",B.bN,"C",B.bS,"D",B.bX,"E",B.c1,"F",B.c6,"G",B.cb,"H",B.cg,"I",B.cl,"J",B.bq,"K",B.bu,"L",B.bx,"M",B.bB,"N",B.bD,"O",B.bF,"P",B.bl,"Q",B.bJ,"R",B.bO,"S",B.bT,"T",B.bY,"U",B.c2,"V",B.c7,"W",B.cc,"X",B.ch,"Y",B.cm,"Z",B.br,"/",B.aD,":",B.bp],t.N,A.aT("k"))
$.qF=A.aX(["0",B.bk,"1",B.bH,"2",B.bM,"3",B.bR,"4",B.bW,"5",B.c0,"6",B.c5,"7",B.ca,"8",B.cf,"9",B.ck," ",B.bj,"-",B.bA,"a",B.bK,"b",B.bP,"c",B.bU,"d",B.bZ,"e",B.c3,"f",B.c8,"g",B.cd,"h",B.ci,"i",B.cn,"j",B.bs,"k",B.bw,"l",B.by,"m",B.bC,"n",B.bE,"o",B.bG,"p",B.bm,"q",B.bL,"r",B.bQ,"s",B.bV,"t",B.c_,"u",B.c4,"v",B.c9,"w",B.ce,"x",B.cj,"y",B.co,"z",B.bt,"A",B.bI,"B",B.bN,"C",B.bS,"D",B.bX,"E",B.c1,"F",B.c6,"G",B.cb,"H",B.cg,"I",B.cl,"J",B.bq,"K",B.bu,"L",B.bx,"M",B.bB,"N",B.bD,"O",B.bF,"P",B.bl,"Q",B.bJ,"R",B.bO,"S",B.bT,"T",B.bY,"U",B.c2,"V",B.c7,"W",B.cc,"X",B.ch,"Y",B.cm,"Z",B.br,"/",B.aD,":",B.bp,".",B.h0,"(",B.h4,")",B.h6,",",B.fX,"[",B.bv,"]",B.h_,"|",B.fY],t.N,A.aT("k"))
$.ad=A.mN("engine")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"t7","oI",()=>A.rv("_$dart_dartClosure"))
s($,"ty","oS",()=>A.bJ(A.kV({
toString:function(){return"$receiver$"}})))
s($,"tz","oT",()=>A.bJ(A.kV({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"tA","oU",()=>A.bJ(A.kV(null)))
s($,"tB","oV",()=>A.bJ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"tE","oY",()=>A.bJ(A.kV(void 0)))
s($,"tF","oZ",()=>A.bJ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"tD","oX",()=>A.bJ(A.nX(null)))
s($,"tC","oW",()=>A.bJ(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"tH","p0",()=>A.bJ(A.nX(void 0)))
s($,"tG","p_",()=>A.bJ(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"tJ","n2",()=>A.qd())
s($,"tV","mr",()=>A.m_(B.hc))
s($,"t5","oH",()=>({}))
s($,"tb","n0",()=>B.f.bB(A.mx(),"Opera",0))
s($,"ta","oL",()=>!A.N($.n0())&&B.f.bB(A.mx(),"Trident/",0))
s($,"t9","oK",()=>B.f.bB(A.mx(),"Firefox",0))
s($,"t8","oJ",()=>"-"+$.oM()+"-")
s($,"tc","oM",()=>{if(A.N($.oK()))var r="moz"
else if($.oL())r="ms"
else r=A.N($.n0())?"o":"webkit"
return r})
s($,"to","oR",()=>A.c([$.ph(),$.pi(),$.pj(),$.p3(),$.pf()],t.ku))
s($,"uo","ph",()=>A.h2(A.f7(4,6,8,4,4,8),new A.mi(),A.c([B.ac],t.V),"death_1.mp3",new A.mj(),B.be,0,4,"Wild Boar",new A.mk()))
s($,"um","pf",()=>A.h2(A.f7(4,6,8,4,4,10),new A.mc(),A.c([B.cZ],t.V),"death_1.mp3",new A.md(),B.be,2,4,"Snow Bear",new A.me()))
s($,"up","pi",()=>A.h2(A.f7(4,6,8,4,4,8),new A.ml(),A.c([B.C,B.B,B.T,B.D],t.V),"monster_scream_1.mp3",new A.mm(),B.fD,1,6,"Zyborg",new A.mn()))
s($,"uq","pj",()=>A.h2(A.f7(4,6,9,4,4,4),new A.mo(),A.c([B.C,B.B,B.T,B.D],t.V),"monster_scream_1.mp3",new A.mp(),B.fE,2,5,"Zyborg Ranged",new A.mq()))
s($,"u_","p3",()=>A.h2(A.f7(4,4,10,6,4,2),new A.lK(),A.c([B.C,B.B,B.T,B.D],t.V),null,new A.lL(),B.fF,3,3,"Cave Scanner",new A.lM()))
s($,"u2","n5",()=>{var r=A.c([A.c7(B.h,"u_resolution"),A.c7(B.x,"u_time"),A.c7(B.h,"u_offset"),A.c7(B.h,"u_origin")],t.o)
return A.aH(A.c([A.ni(35044,A.nE(B.A),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\nuniform vec2 u_origin;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  float dist = distance(snapped_position, (u_origin + vec2(0.5, 0.5)) * vec2(24.0, 36.0)) / 50.0;\n  float rand = -1.0 + random(relative_position) / 2.0;\n  float scale_rate = 0.8 * (u_time);\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(249.0 / 255.0, 168.0 / 255.0, 37.0 / 255.0, scale);\n}\n",r,u.d)})
s($,"u8","p8",()=>{var r=A.c([A.c7(B.h,"u_resolution"),A.c7(B.x,"u_time"),A.c7(B.h,"u_offset"),A.c7(B.h,"u_source"),A.c7(B.h,"u_target")],t.o)
return A.aH(A.c([A.ni(35044,A.nE(B.A),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nuniform vec2 u_source;\nuniform vec2 u_target;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 p0 = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  vec2 p1 = (u_source + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n  vec2 p2 = (u_target + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n\n  if ((p1.x != p2.x) && (p0.x < p1.x && p0.x < p2.x) || (p0.x > p1.x && p0.x > p2.x)) {\n    discard;\n    return;\n  }\n  if ((p1.y != p2.y) && (p0.y < p1.y && p0.y < p2.y) || (p0.y > p1.y && p0.y > p2.y)) {\n    discard;\n    return;\n  }\n\n  float dist = abs( (p2.x - p1.x) * (p1.y - p0.y) - (p1.x - p0.x) * (p2.y - p1.y) ) / sqrt( pow(p2.x - p1.x, 2.0) + pow(p2.y - p1.y, 2.0) );\n  float rand = random(relative_position);\n  float scale_rate = 1.5;\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = 1.0 - smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(0.1, 0.2, 1.0, 0.8 * scale - u_time);\n}\n",r,u.d)})
s($,"ts","f5",()=>new A.kx())
s($,"td","oN",()=>A.mJ())
s($,"tk","n1",()=>A.mI(A.bT(4278780675),A.bT(4279308561),A.bT(4280361249)))
s($,"tl","oO",()=>A.mI(A.bT(4279898637),A.bT(4281017118),A.bT(4282858034)))
s($,"tn","oQ",()=>A.mI(A.bT(4279765786),A.bT(4280096038),A.bT(4282463311)))
s($,"tm","oP",()=>$.n1())
s($,"tW","dA",()=>A.mJ())
s($,"tY","p2",()=>A.mJ())
s($,"uk","na",()=>A.bK(B.U,new A.m9(),!0))
s($,"ud","n8",()=>A.bK(B.cv,new A.m2(),!0))
s($,"uh","dB",()=>A.bK(A.ng(B.ae,A.nG(B.ab),t.j),new A.m6(),!0))
s($,"uc","n7",()=>A.bK(A.ng(B.U,A.nG(B.ab),t.j),new A.m1(),!0))
s($,"ue","pb",()=>A.bK(B.U,new A.m3(),!0))
s($,"ui","n9",()=>A.bK(B.ae,new A.m7(),!0))
s($,"uj","pd",()=>A.bK(B.fH,new A.m8(),!1))
s($,"uf","j6",()=>A.bK(B.cD,new A.m5(),!0))
s($,"ug","pc",()=>A.bK(B.cG,new A.m4(),!0))
s($,"ub","pa",()=>A.bK(B.fI,new A.m0(),!0))
s($,"ua","ms",()=>{var r=$.na(),q=$.n8()
return A.c([r,q,q,$.dB(),$.j6()],t.D)})
s($,"u9","p9",()=>{var r=$.pa()
return A.c([r,r,r,r,r,$.dB(),$.na(),$.n8(),$.j6()],t.D)})
s($,"u7","p7",()=>{var r=$.dB(),q=$.j6()
return A.c([r,r,r,q,q,q],t.D)})
s($,"u5","p5",()=>{var r,q=$.dB(),p=$.n7()
p=A.c([q,q,q,p,p,p,p,p,p],t.D)
for(r=0;r<500;++r)p.push($.pd())
return p})
s($,"u6","p6",()=>{var r,q=$.dB(),p=$.n7()
p=A.c([q,q,q,p,p,p],t.D)
for(r=0;r<10;++r)p.push($.j6())
for(r=0;r<10;++r)p.push($.pc())
return p})
s($,"un","pg",()=>A.c([$.pb(),$.dB()],t.D))
s($,"tX","p1",()=>A.pW(A.cK(A.c([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t))))
s($,"u3","p4",()=>A.aX([A.b4("ArrowUp",!1,!1,!1),B.eQ,A.b4("ArrowDown",!1,!1,!1),B.eY,A.b4("ArrowRight",!1,!1,!1),B.eU,A.b4("ArrowLeft",!1,!1,!1),B.eZ,A.b4("q",!1,!1,!1),B.f_,A.b4(" ",!1,!1,!1),B.eR,A.b4("0",!1,!1,!1),B.eT,A.b4("l",!1,!1,!1),B.f0,A.b4("Escape",!1,!1,!1),B.eX,A.b4("r",!1,!1,!1),B.eV,A.b4("e",!1,!1,!1),B.eS,A.b4("p",!1,!1,!1),B.eW],A.aT("ak"),t.h8))
s($,"tZ","n3",()=>t.jQ.a(A.rs().querySelector("#glCanvas")))
s($,"u4","n6",()=>A.aT("da").a(B.af.dH($.n3(),"webgl2")))
s($,"ul","pe",()=>new A.jG())
s($,"u1","n4",()=>A.pB($.n3(),$.n6(),$.pe()))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.h3,DataView:A.cB,ArrayBufferView:A.cB,Float64Array:A.cA,Float32Array:A.eb,Int16Array:A.h4,Int32Array:A.h5,Int8Array:A.h6,Uint16Array:A.h7,Uint32Array:A.h8,Uint8ClampedArray:A.d5,CanvasPixelArray:A.d5,Uint8Array:A.ed,HTMLBRElement:A.q,HTMLBaseElement:A.q,HTMLButtonElement:A.q,HTMLContentElement:A.q,HTMLDListElement:A.q,HTMLDataElement:A.q,HTMLDataListElement:A.q,HTMLDetailsElement:A.q,HTMLDialogElement:A.q,HTMLDivElement:A.q,HTMLEmbedElement:A.q,HTMLFieldSetElement:A.q,HTMLHRElement:A.q,HTMLHeadElement:A.q,HTMLHeadingElement:A.q,HTMLHtmlElement:A.q,HTMLIFrameElement:A.q,HTMLInputElement:A.q,HTMLLIElement:A.q,HTMLLabelElement:A.q,HTMLLegendElement:A.q,HTMLLinkElement:A.q,HTMLMapElement:A.q,HTMLMenuElement:A.q,HTMLMetaElement:A.q,HTMLMeterElement:A.q,HTMLModElement:A.q,HTMLOListElement:A.q,HTMLObjectElement:A.q,HTMLOptGroupElement:A.q,HTMLOptionElement:A.q,HTMLOutputElement:A.q,HTMLParagraphElement:A.q,HTMLParamElement:A.q,HTMLPictureElement:A.q,HTMLPreElement:A.q,HTMLProgressElement:A.q,HTMLQuoteElement:A.q,HTMLScriptElement:A.q,HTMLShadowElement:A.q,HTMLSlotElement:A.q,HTMLSourceElement:A.q,HTMLSpanElement:A.q,HTMLStyleElement:A.q,HTMLTableCaptionElement:A.q,HTMLTableCellElement:A.q,HTMLTableDataCellElement:A.q,HTMLTableHeaderCellElement:A.q,HTMLTableColElement:A.q,HTMLTableElement:A.q,HTMLTableRowElement:A.q,HTMLTableSectionElement:A.q,HTMLTemplateElement:A.q,HTMLTextAreaElement:A.q,HTMLTimeElement:A.q,HTMLTitleElement:A.q,HTMLTrackElement:A.q,HTMLUListElement:A.q,HTMLUnknownElement:A.q,HTMLDirectoryElement:A.q,HTMLFontElement:A.q,HTMLFrameElement:A.q,HTMLFrameSetElement:A.q,HTMLMarqueeElement:A.q,HTMLElement:A.q,AccessibleNodeList:A.j9,HTMLAnchorElement:A.fa,HTMLAreaElement:A.fb,Blob:A.fh,HTMLBodyElement:A.fi,HTMLCanvasElement:A.ch,CDATASection:A.bg,CharacterData:A.bg,Comment:A.bg,ProcessingInstruction:A.bg,Text:A.bg,CSSPerspective:A.ju,CSSCharsetRule:A.J,CSSConditionRule:A.J,CSSFontFaceRule:A.J,CSSGroupingRule:A.J,CSSImportRule:A.J,CSSKeyframeRule:A.J,MozCSSKeyframeRule:A.J,WebKitCSSKeyframeRule:A.J,CSSKeyframesRule:A.J,MozCSSKeyframesRule:A.J,WebKitCSSKeyframesRule:A.J,CSSMediaRule:A.J,CSSNamespaceRule:A.J,CSSPageRule:A.J,CSSRule:A.J,CSSStyleRule:A.J,CSSSupportsRule:A.J,CSSViewportRule:A.J,CSSStyleDeclaration:A.cX,MSStyleCSSProperties:A.cX,CSS2Properties:A.cX,CSSImageValue:A.b1,CSSKeywordValue:A.b1,CSSNumericValue:A.b1,CSSPositionValue:A.b1,CSSResourceValue:A.b1,CSSUnitValue:A.b1,CSSURLImageValue:A.b1,CSSStyleValue:A.b1,CSSMatrixComponent:A.bz,CSSRotation:A.bz,CSSScale:A.bz,CSSSkew:A.bz,CSSTranslation:A.bz,CSSTransformComponent:A.bz,CSSTransformValue:A.jw,CSSUnparsedValue:A.jx,DataTransferItemList:A.jy,Document:A.bA,HTMLDocument:A.bA,XMLDocument:A.bA,DOMException:A.bX,ClientRectList:A.dR,DOMRectList:A.dR,DOMRectReadOnly:A.dS,DOMStringList:A.fy,DOMTokenList:A.jz,Element:A.a8,AbortPaymentEvent:A.l,AnimationEvent:A.l,AnimationPlaybackEvent:A.l,ApplicationCacheErrorEvent:A.l,BackgroundFetchClickEvent:A.l,BackgroundFetchEvent:A.l,BackgroundFetchFailEvent:A.l,BackgroundFetchedEvent:A.l,BeforeInstallPromptEvent:A.l,BeforeUnloadEvent:A.l,BlobEvent:A.l,CanMakePaymentEvent:A.l,ClipboardEvent:A.l,CloseEvent:A.l,CustomEvent:A.l,DeviceMotionEvent:A.l,DeviceOrientationEvent:A.l,ErrorEvent:A.l,ExtendableEvent:A.l,ExtendableMessageEvent:A.l,FetchEvent:A.l,FontFaceSetLoadEvent:A.l,ForeignFetchEvent:A.l,GamepadEvent:A.l,HashChangeEvent:A.l,InstallEvent:A.l,MediaEncryptedEvent:A.l,MediaKeyMessageEvent:A.l,MediaQueryListEvent:A.l,MediaStreamEvent:A.l,MediaStreamTrackEvent:A.l,MessageEvent:A.l,MIDIConnectionEvent:A.l,MIDIMessageEvent:A.l,MutationEvent:A.l,NotificationEvent:A.l,PageTransitionEvent:A.l,PaymentRequestEvent:A.l,PaymentRequestUpdateEvent:A.l,PopStateEvent:A.l,PresentationConnectionAvailableEvent:A.l,PresentationConnectionCloseEvent:A.l,ProgressEvent:A.l,PromiseRejectionEvent:A.l,PushEvent:A.l,RTCDataChannelEvent:A.l,RTCDTMFToneChangeEvent:A.l,RTCPeerConnectionIceEvent:A.l,RTCTrackEvent:A.l,SecurityPolicyViolationEvent:A.l,SensorErrorEvent:A.l,SpeechRecognitionError:A.l,SpeechRecognitionEvent:A.l,SpeechSynthesisEvent:A.l,StorageEvent:A.l,SyncEvent:A.l,TrackEvent:A.l,TransitionEvent:A.l,WebKitTransitionEvent:A.l,VRDeviceEvent:A.l,VRDisplayEvent:A.l,VRSessionEvent:A.l,MojoInterfaceRequestEvent:A.l,ResourceProgressEvent:A.l,USBConnectionEvent:A.l,IDBVersionChangeEvent:A.l,AudioProcessingEvent:A.l,OfflineAudioCompletionEvent:A.l,WebGLContextEvent:A.l,Event:A.l,InputEvent:A.l,SubmitEvent:A.l,AbsoluteOrientationSensor:A.e,Accelerometer:A.e,AccessibleNode:A.e,AmbientLightSensor:A.e,Animation:A.e,ApplicationCache:A.e,DOMApplicationCache:A.e,OfflineResourceList:A.e,BackgroundFetchRegistration:A.e,BatteryManager:A.e,BroadcastChannel:A.e,CanvasCaptureMediaStreamTrack:A.e,DedicatedWorkerGlobalScope:A.e,EventSource:A.e,FileReader:A.e,FontFaceSet:A.e,Gyroscope:A.e,LinearAccelerationSensor:A.e,Magnetometer:A.e,MediaDevices:A.e,MediaKeySession:A.e,MediaQueryList:A.e,MediaRecorder:A.e,MediaSource:A.e,MediaStream:A.e,MediaStreamTrack:A.e,MessagePort:A.e,MIDIAccess:A.e,MIDIInput:A.e,MIDIOutput:A.e,MIDIPort:A.e,NetworkInformation:A.e,Notification:A.e,OffscreenCanvas:A.e,OrientationSensor:A.e,PaymentRequest:A.e,Performance:A.e,PermissionStatus:A.e,PresentationAvailability:A.e,PresentationConnection:A.e,PresentationConnectionList:A.e,PresentationRequest:A.e,RelativeOrientationSensor:A.e,RemotePlayback:A.e,RTCDataChannel:A.e,DataChannel:A.e,RTCDTMFSender:A.e,RTCPeerConnection:A.e,webkitRTCPeerConnection:A.e,mozRTCPeerConnection:A.e,ScreenOrientation:A.e,Sensor:A.e,ServiceWorker:A.e,ServiceWorkerContainer:A.e,ServiceWorkerGlobalScope:A.e,ServiceWorkerRegistration:A.e,SharedWorker:A.e,SharedWorkerGlobalScope:A.e,SpeechRecognition:A.e,SpeechSynthesis:A.e,SpeechSynthesisUtterance:A.e,VR:A.e,VRDevice:A.e,VRDisplay:A.e,VRSession:A.e,VisualViewport:A.e,WebSocket:A.e,Worker:A.e,WorkerGlobalScope:A.e,WorkerPerformance:A.e,BluetoothDevice:A.e,BluetoothRemoteGATTCharacteristic:A.e,Clipboard:A.e,MojoInterfaceInterceptor:A.e,USB:A.e,IDBDatabase:A.e,IDBOpenDBRequest:A.e,IDBVersionChangeRequest:A.e,IDBRequest:A.e,IDBTransaction:A.e,EventTarget:A.e,File:A.aF,FileList:A.fE,FileWriter:A.fF,HTMLFormElement:A.fI,Gamepad:A.aG,History:A.k3,HTMLCollection:A.cq,HTMLFormControlsCollection:A.cq,HTMLOptionsCollection:A.cq,XMLHttpRequest:A.e_,XMLHttpRequestUpload:A.cr,XMLHttpRequestEventTarget:A.cr,HTMLImageElement:A.d0,KeyboardEvent:A.bD,Location:A.kh,HTMLAudioElement:A.cy,HTMLMediaElement:A.cy,MediaList:A.km,MIDIInputMap:A.h_,MIDIOutputMap:A.h0,MimeType:A.aJ,MimeTypeArray:A.h1,MouseEvent:A.aK,DragEvent:A.aK,PointerEvent:A.aK,WheelEvent:A.aK,DocumentFragment:A.w,ShadowRoot:A.w,Attr:A.w,DocumentType:A.w,Node:A.w,NodeList:A.ee,RadioNodeList:A.ee,Plugin:A.aL,PluginArray:A.hj,RTCStatsReport:A.hq,HTMLSelectElement:A.hs,SourceBuffer:A.aA,SourceBufferList:A.hw,SpeechGrammar:A.aN,SpeechGrammarList:A.hx,SpeechRecognitionResult:A.aO,Storage:A.hA,CSSStyleSheet:A.am,StyleSheet:A.am,TextTrack:A.aC,TextTrackCue:A.af,VTTCue:A.af,TextTrackCueList:A.hI,TextTrackList:A.hJ,TimeRanges:A.kS,Touch:A.aP,TouchList:A.hL,TrackDefaultList:A.kT,CompositionEvent:A.bn,FocusEvent:A.bn,TextEvent:A.bn,TouchEvent:A.bn,UIEvent:A.bn,URL:A.kX,HTMLVideoElement:A.di,VideoTrackList:A.hV,Window:A.dj,DOMWindow:A.dj,CSSRuleList:A.i3,ClientRect:A.ez,DOMRect:A.ez,GamepadList:A.ig,NamedNodeMap:A.eG,MozNamedAttrMap:A.eG,SpeechRecognitionResultList:A.iC,StyleSheetList:A.iK,SVGLength:A.aW,SVGLengthList:A.fT,SVGNumber:A.aZ,SVGNumberList:A.hd,SVGPointList:A.kz,SVGStringList:A.hD,SVGAElement:A.o,SVGAnimateElement:A.o,SVGAnimateMotionElement:A.o,SVGAnimateTransformElement:A.o,SVGAnimationElement:A.o,SVGCircleElement:A.o,SVGClipPathElement:A.o,SVGDefsElement:A.o,SVGDescElement:A.o,SVGDiscardElement:A.o,SVGEllipseElement:A.o,SVGFEBlendElement:A.o,SVGFEColorMatrixElement:A.o,SVGFEComponentTransferElement:A.o,SVGFECompositeElement:A.o,SVGFEConvolveMatrixElement:A.o,SVGFEDiffuseLightingElement:A.o,SVGFEDisplacementMapElement:A.o,SVGFEDistantLightElement:A.o,SVGFEFloodElement:A.o,SVGFEFuncAElement:A.o,SVGFEFuncBElement:A.o,SVGFEFuncGElement:A.o,SVGFEFuncRElement:A.o,SVGFEGaussianBlurElement:A.o,SVGFEImageElement:A.o,SVGFEMergeElement:A.o,SVGFEMergeNodeElement:A.o,SVGFEMorphologyElement:A.o,SVGFEOffsetElement:A.o,SVGFEPointLightElement:A.o,SVGFESpecularLightingElement:A.o,SVGFESpotLightElement:A.o,SVGFETileElement:A.o,SVGFETurbulenceElement:A.o,SVGFilterElement:A.o,SVGForeignObjectElement:A.o,SVGGElement:A.o,SVGGeometryElement:A.o,SVGGraphicsElement:A.o,SVGImageElement:A.o,SVGLineElement:A.o,SVGLinearGradientElement:A.o,SVGMarkerElement:A.o,SVGMaskElement:A.o,SVGMetadataElement:A.o,SVGPathElement:A.o,SVGPatternElement:A.o,SVGPolygonElement:A.o,SVGPolylineElement:A.o,SVGRadialGradientElement:A.o,SVGRectElement:A.o,SVGScriptElement:A.o,SVGSetElement:A.o,SVGStopElement:A.o,SVGStyleElement:A.o,SVGElement:A.o,SVGSVGElement:A.o,SVGSwitchElement:A.o,SVGSymbolElement:A.o,SVGTSpanElement:A.o,SVGTextContentElement:A.o,SVGTextElement:A.o,SVGTextPathElement:A.o,SVGTextPositioningElement:A.o,SVGTitleElement:A.o,SVGUseElement:A.o,SVGViewElement:A.o,SVGGradientElement:A.o,SVGComponentTransferFunctionElement:A.o,SVGFEDropShadowElement:A.o,SVGMPathElement:A.o,SVGTransform:A.b_,SVGTransformList:A.hM,AudioBuffer:A.be,AudioBufferSourceNode:A.dK,AudioContext:A.cg,webkitAudioContext:A.cg,AnalyserNode:A.I,RealtimeAnalyserNode:A.I,AudioDestinationNode:A.I,AudioWorkletNode:A.I,BiquadFilterNode:A.I,ChannelMergerNode:A.I,AudioChannelMerger:A.I,ChannelSplitterNode:A.I,AudioChannelSplitter:A.I,ConvolverNode:A.I,DelayNode:A.I,DynamicsCompressorNode:A.I,IIRFilterNode:A.I,MediaElementAudioSourceNode:A.I,MediaStreamAudioDestinationNode:A.I,MediaStreamAudioSourceNode:A.I,PannerNode:A.I,AudioPannerNode:A.I,webkitAudioPannerNode:A.I,ScriptProcessorNode:A.I,JavaScriptAudioNode:A.I,StereoPannerNode:A.I,WaveShaperNode:A.I,AudioNode:A.I,AudioParam:A.fc,AudioParamMap:A.fd,ConstantSourceNode:A.by,OscillatorNode:A.by,Oscillator:A.by,AudioScheduledSourceNode:A.by,AudioTrackList:A.fe,BaseAudioContext:A.dL,GainNode:A.d_,AudioGainNode:A.d_,OfflineAudioContext:A.he,WebGLBuffer:A.fk,WebGLFramebuffer:A.fK,WebGLProgram:A.hk,WebGL2RenderingContext:A.da,WebGLTexture:A.bI,WebGLUniformLocation:A.hO,WebGLVertexArrayObject:A.hU})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,AudioParam:true,AudioParamMap:true,ConstantSourceNode:true,OscillatorNode:true,Oscillator:true,AudioScheduledSourceNode:false,AudioTrackList:true,BaseAudioContext:false,GainNode:true,AudioGainNode:true,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true})
A.d4.$nativeSuperclassTag="ArrayBufferView"
A.eH.$nativeSuperclassTag="ArrayBufferView"
A.eI.$nativeSuperclassTag="ArrayBufferView"
A.cA.$nativeSuperclassTag="ArrayBufferView"
A.eJ.$nativeSuperclassTag="ArrayBufferView"
A.eK.$nativeSuperclassTag="ArrayBufferView"
A.ec.$nativeSuperclassTag="ArrayBufferView"
A.eM.$nativeSuperclassTag="EventTarget"
A.eN.$nativeSuperclassTag="EventTarget"
A.eR.$nativeSuperclassTag="EventTarget"
A.eS.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.mZ
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

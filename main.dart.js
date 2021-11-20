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
a[c]=function(){a[c]=function(){A.t5(b)}
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
if(a[b]!==s)A.t6(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.n6(b)
return new s(c,this)}:function(){if(s===null)s=A.n6(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.n6(a).prototype
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
a(hunkHelpers,v,w,$)}var A={mM:function mM(){},
nN(a){return new A.cx("Field '"+a+"' has been assigned during initialization.")},
nO(a){return new A.cx("Field '"+a+"' has not been initialized.")},
c6(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mT(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ql(a,b,c){return A.mT(A.c6(A.c6(c,a),b))},
f8(a,b,c){return a},
o6(a,b,c,d){A.kL(b,"start")
if(c!=null){A.kL(c,"end")
if(b>c)A.U(A.bK(b,0,c,"start",null))}return new A.ex(a,b,c,d.i("ex<0>"))},
nQ(a,b,c,d){if(t.gt.b(a))return new A.e_(a,b,c.i("@<0>").F(d).i("e_<1,2>"))
return new A.cz(a,b,c.i("@<0>").F(d).i("cz<1,2>"))},
nJ(){return new A.ba("No element")},
pZ(){return new A.ba("Too many elements")},
pY(){return new A.ba("Too few elements")},
qj(a,b,c){A.hy(a,0,J.at(a)-1,b,c)},
hy(a,b,c,d,e){if(c-b<=32)A.o1(a,b,c,d,e)
else A.o0(a,b,c,d,e)},
o1(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aE(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a5()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
o0(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.e.W(a5-a4+1,6),i=a4+j,h=a5-j,g=B.e.W(a4+a5,2),f=g-j,e=g+j,d=J.aE(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
if(J.Z(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
A.hy(a3,a4,r-2,a6,a7)
A.hy(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.Z(a6.$2(d.h(a3,r),b),0);)++r
for(;J.Z(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}A.hy(a3,r,q,a6,a7)}else A.hy(a3,r,q,a6,a7)},
cx:function cx(a){this.a=a},
kQ:function kQ(){},
p:function p(){},
b7:function b7(){},
ex:function ex(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bI:function bI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.$ti=c},
e_:function e_(a,b,c){this.a=a
this.b=b
this.$ti=c},
eg:function eg(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
eh:function eh(a,b,c){this.a=a
this.b=b
this.$ti=c},
aT:function aT(a,b,c){this.a=a
this.b=b
this.$ti=c},
eA:function eA(a,b,c){this.a=a
this.b=b
this.$ti=c},
aw:function aw(){},
pV(a){if(typeof a=="number")return B.c.gB(a)
if(t.ha.b(a))return A.cG(a)
return A.m7(a)},
pW(a){return new A.k6(a)},
oT(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
rR(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
D(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cT(a)
return s},
cG(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
kH(a){return A.q9(a)},
q9(a){var s,r,q,p
if(a instanceof A.v)return A.ar(A.bk(a),null)
if(J.dF(a)===B.fl||t.cx.b(a)){s=B.b7(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.ar(A.bk(a),null)},
dh(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
qg(a){var s=A.dh(a).getUTCFullYear()+0
return s},
qe(a){var s=A.dh(a).getUTCMonth()+1
return s},
qa(a){var s=A.dh(a).getUTCDate()+0
return s},
qb(a){var s=A.dh(a).getUTCHours()+0
return s},
qd(a){var s=A.dh(a).getUTCMinutes()+0
return s},
qf(a){var s=A.dh(a).getUTCSeconds()+0
return s},
qc(a){var s=A.dh(a).getUTCMilliseconds()+0
return s},
cQ(a){throw A.d(A.oB(a))},
b(a,b){if(a==null)J.at(a)
throw A.d(A.cP(a,b))},
cP(a,b){var s,r="index"
if(!A.n4(b))return new A.bA(!0,b,r,null)
s=A.K(J.at(a))
if(b<0||b>=s)return A.V(b,a,r,null,s)
return A.nW(b,r)},
oB(a){return new A.bA(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.hg()
s=new Error()
s.dartException=a
r=A.t7
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
t7(){return J.cT(this.dartException)},
U(a){throw A.d(a)},
y(a){throw A.d(A.bp(a))},
bN(a){var s,r,q,p,o,n
a=A.t1(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.l0(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
l1(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
o9(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mN(a,b){var s=b==null,r=s?null:b.method
return new A.fW(a,r,s?null:b.receiver)},
bz(a){if(a==null)return new A.kC(a)
if(a instanceof A.e0)return A.cj(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.cj(a,a.dartException)
return A.rs(a)},
cj(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
rs(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.cO(r,16)&8191)===10)switch(q){case 438:return A.cj(a,A.mN(A.D(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.D(s)+" (Error "+q+")"
return A.cj(a,new A.em(p,e))}}if(a instanceof TypeError){o=$.p4()
n=$.p5()
m=$.p6()
l=$.p7()
k=$.pa()
j=$.pb()
i=$.p9()
$.p8()
h=$.pd()
g=$.pc()
f=o.aa(s)
if(f!=null)return A.cj(a,A.mN(A.a5(s),f))
else{f=n.aa(s)
if(f!=null){f.method="call"
return A.cj(a,A.mN(A.a5(s),f))}else{f=m.aa(s)
if(f==null){f=l.aa(s)
if(f==null){f=k.aa(s)
if(f==null){f=j.aa(s)
if(f==null){f=i.aa(s)
if(f==null){f=l.aa(s)
if(f==null){f=h.aa(s)
if(f==null){f=g.aa(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.a5(s)
return A.cj(a,new A.em(s,f==null?e:f.method))}}}return A.cj(a,new A.hT(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ew()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.cj(a,new A.bA(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ew()
return a},
bU(a){var s
if(a instanceof A.e0)return a.b
if(a==null)return new A.eU(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.eU(a)},
m7(a){if(a==null||typeof a!="object")return J.aF(a)
else return A.cG(a)},
oF(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
rP(a,b,c,d,e,f){t.gY.a(a)
switch(A.K(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.mJ("Unsupported number of arguments for wrapped closure"))},
by(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.rP)
a.$identity=s
return s},
pI(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.hD().constructor.prototype):Object.create(new A.d1(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.nC(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.pE(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.nC(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
pE(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.pC)}throw A.d("Error in functionType of tearoff")},
pF(a,b,c,d){var s=A.nz
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
nC(a,b,c,d){var s,r
if(c)return A.pH(a,b,d)
s=b.length
r=A.pF(s,d,a,b)
return r},
pG(a,b,c,d){var s=A.nz,r=A.pD
switch(b?-1:a){case 0:throw A.d(new A.hv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
pH(a,b,c){var s,r,q,p=$.nx
p==null?$.nx=A.nw("interceptor"):p
s=$.ny
s==null?$.ny=A.nw("receiver"):s
r=b.length
q=A.pG(r,c,a,b)
return q},
n6(a){return A.pI(a)},
pC(a,b){return A.lG(v.typeUniverse,A.bk(a.a),b)},
nz(a){return a.a},
pD(a){return a.b},
nw(a){var s,r,q,p=new A.d1("receiver","interceptor"),o=J.nL(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.cW("Field name "+a+" not found.",null))},
O(a){if(a==null)A.rt("boolean expression must not be null")
return a},
rt(a){throw A.d(new A.i1(a))},
t5(a){throw A.d(new A.fy(a))},
rJ(a){return v.getIsolateTag(a)},
uh(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
rV(a){var s,r,q,p,o,n=A.a5($.oG.$1(a)),m=$.lV[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.m2[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.qP($.oA.$2(a,n))
if(q!=null){m=$.lV[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.m2[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.m6(s)
$.lV[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.m2[n]=s
return s}if(p==="-"){o=A.m6(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.oO(a,s)
if(p==="*")throw A.d(A.mW(n))
if(v.leafTags[n]===true){o=A.m6(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.oO(a,s)},
oO(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.n9(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
m6(a){return J.n9(a,!1,null,!!a.$iz)},
rW(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.m6(s)
else return J.n9(s,c,null,null)},
rN(){if(!0===$.n7)return
$.n7=!0
A.rO()},
rO(){var s,r,q,p,o,n,m,l
$.lV=Object.create(null)
$.m2=Object.create(null)
A.rM()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.oP.$1(o)
if(n!=null){m=A.rW(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
rM(){var s,r,q,p,o,n,m=B.dx()
m=A.dE(B.dy,A.dE(B.dz,A.dE(B.b8,A.dE(B.b8,A.dE(B.dA,A.dE(B.dB,A.dE(B.dC(B.b7),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.oG=new A.m_(p)
$.oA=new A.m0(o)
$.oP=new A.m1(n)},
dE(a,b){return a(b)||b},
t4(a,b,c){var s=a.indexOf(b,c)
return s>=0},
t1(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
d4:function d4(){},
dU:function dU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aa:function aa(a,b){this.a=a
this.$ti=b},
k6:function k6(a){this.a=a},
l0:function l0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
em:function em(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(a){this.a=a},
kC:function kC(a){this.a=a},
e0:function e0(a,b){this.a=a
this.b=b},
eU:function eU(a){this.a=a
this.b=null},
co:function co(){},
fr:function fr(){},
fs:function fs(){},
hI:function hI(){},
hD:function hD(){},
d1:function d1(a,b){this.a=a
this.b=b},
hv:function hv(a){this.a=a},
i1:function i1(a){this.a=a},
aJ:function aJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kj:function kj(a){this.a=a},
ki:function ki(a){this.a=a},
kl:function kl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ec:function ec(a,b){this.a=a
this.$ti=b},
ed:function ed(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
m_:function m_(a){this.a=a},
m0:function m0(a){this.a=a},
m1:function m1(a){this.a=a},
t6(a){return A.U(A.nN(a))},
mX(a){var s=new A.lg(a)
return s.b=s},
dC(a,b){if(a===$)throw A.d(A.nO(b))
return a},
bT(a,b){if(a!==$)throw A.d(A.nN(b))},
lg:function lg(a){this.a=a
this.b=null},
op(a,b,c){},
cN(a){return a},
nR(a){return new Float32Array(A.cN(a))},
cC(a,b,c){A.op(a,b,c)
return new Float32Array(a,b,c)},
nS(a,b,c){var s
A.op(a,b,c)
s=new Uint8Array(a,b,c)
return s},
q8(a){return new Uint8Array(a)},
bS(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.cP(b,a))},
h6:function h6(){},
cE:function cE(){},
dd:function dd(){},
cD:function cD(){},
ej:function ej(){},
ei:function ei(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
de:function de(){},
ek:function ek(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
nY(a,b){var s=b.c
return s==null?b.c=A.n1(a,b.z,!0):s},
nX(a,b){var s=b.c
return s==null?b.c=A.f1(a,"ah",[b.z]):s},
nZ(a){var s=a.y
if(s===6||s===7||s===8)return A.nZ(a.z)
return s===11||s===12},
qi(a){return a.cy},
aV(a){return A.iY(v.typeUniverse,a,!1)},
ch(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.ch(a,s,a0,a1)
if(r===s)return b
return A.ol(a,r,!0)
case 7:s=b.z
r=A.ch(a,s,a0,a1)
if(r===s)return b
return A.n1(a,r,!0)
case 8:s=b.z
r=A.ch(a,s,a0,a1)
if(r===s)return b
return A.ok(a,r,!0)
case 9:q=b.Q
p=A.f7(a,q,a0,a1)
if(p===q)return b
return A.f1(a,b.z,p)
case 10:o=b.z
n=A.ch(a,o,a0,a1)
m=b.Q
l=A.f7(a,m,a0,a1)
if(n===o&&l===m)return b
return A.n_(a,n,l)
case 11:k=b.z
j=A.ch(a,k,a0,a1)
i=b.Q
h=A.rp(a,i,a0,a1)
if(j===k&&h===i)return b
return A.oj(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.f7(a,g,a0,a1)
o=b.z
n=A.ch(a,o,a0,a1)
if(f===g&&n===o)return b
return A.n0(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.jd("Attempted to substitute unexpected RTI kind "+c))}},
f7(a,b,c,d){var s,r,q,p,o=b.length,n=A.lI(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ch(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
rq(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.lI(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ch(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
rp(a,b,c,d){var s,r=b.a,q=A.f7(a,r,c,d),p=b.b,o=A.f7(a,p,c,d),n=b.c,m=A.rq(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ii()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
rA(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.rK(s)
return a.$S()}return null},
oI(a,b){var s
if(A.nZ(b))if(a instanceof A.co){s=A.rA(a)
if(s!=null)return s}return A.bk(a)},
bk(a){var s
if(a instanceof A.v){s=a.$ti
return s!=null?s:A.n2(a)}if(Array.isArray(a))return A.Y(a)
return A.n2(J.dF(a))},
Y(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
B(a){var s=a.$ti
return s!=null?s:A.n2(a)},
n2(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.r6(a,s)},
r6(a,b){var s=a instanceof A.co?a.__proto__.__proto__.constructor:b,r=A.qM(v.typeUniverse,s.name)
b.$ccache=r
return r},
rK(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.iY(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
rD(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.f_(a)
q=A.iY(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.f_(q):p},
t8(a){return A.rD(A.iY(v.typeUniverse,a,!1))},
r5(a){var s,r,q,p,o=this
if(o===t.K)return A.dB(o,a,A.ra)
if(!A.bV(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.dB(o,a,A.rd)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.n4
else if(r===t.i||r===t.cZ)q=A.r9
else if(r===t.N)q=A.rb
else q=r===t.k4?A.lL:null
if(q!=null)return A.dB(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.rS)){o.r="$i"+p
if(p==="n")return A.dB(o,a,A.r8)
return A.dB(o,a,A.rc)}}else if(s===7)return A.dB(o,a,A.r3)
return A.dB(o,a,A.r1)},
dB(a,b,c){a.b=c
return a.b(b)},
r4(a){var s,r=this,q=A.r0
if(!A.bV(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.qQ
else if(r===t.K)q=A.qO
else{s=A.f9(r)
if(s)q=A.r2}r.a=q
return r.a(a)},
lM(a){var s,r=a.y
if(!A.bV(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&A.lM(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
r1(a){var s=this
if(a==null)return A.lM(s)
return A.X(v.typeUniverse,A.oI(a,s),null,s,null)},
r3(a){if(a==null)return!0
return this.z.b(a)},
rc(a){var s,r=this
if(a==null)return A.lM(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dF(a)[s]},
r8(a){var s,r=this
if(a==null)return A.lM(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dF(a)[s]},
r0(a){var s,r=this
if(a==null){s=A.f9(r)
if(s)return a}else if(r.b(a))return a
A.os(a,r)},
r2(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.os(a,s)},
os(a,b){throw A.d(A.oi(A.oc(a,A.oI(a,b),A.ar(b,null))))},
rz(a,b,c,d){var s=null
if(A.X(v.typeUniverse,a,s,b,s))return a
throw A.d(A.oi("The type argument '"+A.ar(a,s)+"' is not a subtype of the type variable bound '"+A.ar(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
oc(a,b,c){var s=A.fF(a),r=A.ar(b==null?A.bk(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
oi(a){return new A.f0("TypeError: "+a)},
aq(a,b){return new A.f0("TypeError: "+A.oc(a,null,b))},
ra(a){return a!=null},
qO(a){if(a!=null)return a
throw A.d(A.aq(a,"Object"))},
rd(a){return!0},
qQ(a){return a},
lL(a){return!0===a||!1===a},
u1(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.aq(a,"bool"))},
u3(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.aq(a,"bool"))},
u2(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.aq(a,"bool?"))},
oo(a){if(typeof a=="number")return a
throw A.d(A.aq(a,"double"))},
u5(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aq(a,"double"))},
u4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aq(a,"double?"))},
n4(a){return typeof a=="number"&&Math.floor(a)===a},
K(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.aq(a,"int"))},
u7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.aq(a,"int"))},
u6(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.aq(a,"int?"))},
r9(a){return typeof a=="number"},
bd(a){if(typeof a=="number")return a
throw A.d(A.aq(a,"num"))},
u9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aq(a,"num"))},
u8(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aq(a,"num?"))},
rb(a){return typeof a=="string"},
a5(a){if(typeof a=="string")return a
throw A.d(A.aq(a,"String"))},
ua(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.aq(a,"String"))},
qP(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.aq(a,"String?"))},
rl(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.ar(a[q],b)
return s},
ot(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.c([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.k(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.b(a5,j)
m=B.h.w(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.ar(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.ar(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.ar(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.ar(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.ar(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ar(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.ar(a.z,b)
return s}if(l===7){r=a.z
s=A.ar(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.ar(a.z,b)+">"
if(l===9){p=A.rr(a.z)
o=a.Q
return o.length>0?p+("<"+A.rl(o,b)+">"):p}if(l===11)return A.ot(a,b,null)
if(l===12)return A.ot(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
rr(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
qN(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
qM(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.iY(a,b,!1)
else if(typeof m=="number"){s=m
r=A.f2(a,5,"#")
q=A.lI(s)
for(p=0;p<s;++p)q[p]=r
o=A.f1(a,b,q)
n[b]=o
return o}else return m},
qK(a,b){return A.om(a.tR,b)},
qJ(a,b){return A.om(a.eT,b)},
iY(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.oh(A.of(a,null,b,c))
r.set(b,s)
return s},
lG(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.oh(A.of(a,b,c,!0))
q.set(c,r)
return r},
qL(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.n_(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
cg(a,b){b.a=A.r4
b.b=A.r5
return b},
f2(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.b8(null,null)
s.y=b
s.cy=c
r=A.cg(a,s)
a.eC.set(c,r)
return r},
ol(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.qH(a,b,r,c)
a.eC.set(r,s)
return s},
qH(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bV(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.b8(null,null)
q.y=6
q.z=b
q.cy=c
return A.cg(a,q)},
n1(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.qG(a,b,r,c)
a.eC.set(r,s)
return s},
qG(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.bV(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.f9(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.f9(q.z))return q
else return A.nY(a,b)}}p=new A.b8(null,null)
p.y=7
p.z=b
p.cy=c
return A.cg(a,p)},
ok(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.qE(a,b,r,c)
a.eC.set(r,s)
return s},
qE(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bV(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.f1(a,"ah",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.b8(null,null)
q.y=8
q.z=b
q.cy=c
return A.cg(a,q)},
qI(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.b8(null,null)
s.y=13
s.z=b
s.cy=q
r=A.cg(a,s)
a.eC.set(q,r)
return r},
iX(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
qD(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
f1(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iX(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.b8(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.cg(a,r)
a.eC.set(p,q)
return q},
n_(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.iX(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b8(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.cg(a,o)
a.eC.set(q,n)
return n},
oj(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iX(m)
if(j>0){s=l>0?",":""
r=A.iX(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.qD(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b8(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.cg(a,o)
a.eC.set(q,r)
return r},
n0(a,b,c,d){var s,r=b.cy+("<"+A.iX(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.qF(a,b,c,r,d)
a.eC.set(r,s)
return s},
qF(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.lI(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.ch(a,b,r,0)
m=A.f7(a,c,r,0)
return A.n0(a,n,m,c!==m)}}l=new A.b8(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.cg(a,l)},
of(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
oh(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.qx(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.og(a,r,h,g,!1)
else if(q===46)r=A.og(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.cd(a.u,a.e,g.pop()))
break
case 94:g.push(A.qI(a.u,g.pop()))
break
case 35:g.push(A.f2(a.u,5,"#"))
break
case 64:g.push(A.f2(a.u,2,"@"))
break
case 126:g.push(A.f2(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.mZ(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.f1(p,n,o))
else{m=A.cd(p,a.e,n)
switch(m.y){case 11:g.push(A.n0(p,m,o,a.n))
break
default:g.push(A.n_(p,m,o))
break}}break
case 38:A.qy(a,g)
break
case 42:p=a.u
g.push(A.ol(p,A.cd(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.n1(p,A.cd(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.ok(p,A.cd(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.ii()
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
A.mZ(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.oj(p,A.cd(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.mZ(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.qA(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.cd(a.u,a.e,i)},
qx(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
og(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.qN(s,o.z)[p]
if(n==null)A.U('No "'+p+'" in "'+A.qi(o)+'"')
d.push(A.lG(s,o,n))}else d.push(p)
return m},
qy(a,b){var s=b.pop()
if(0===s){b.push(A.f2(a.u,1,"0&"))
return}if(1===s){b.push(A.f2(a.u,4,"1&"))
return}throw A.d(A.jd("Unexpected extended operation "+A.D(s)))},
cd(a,b,c){if(typeof c=="string")return A.f1(a,c,a.sEA)
else if(typeof c=="number")return A.qz(a,b,c)
else return c},
mZ(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.cd(a,b,c[s])},
qA(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.cd(a,b,c[s])},
qz(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.d(A.jd("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.d(A.jd("Bad index "+c+" for "+b.l(0)))},
X(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.bV(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.bV(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.X(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return A.X(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.X(a,b.z,c,d,e)
if(r===6)return A.X(a,b.z,c,d,e)
return r!==7}if(r===6)return A.X(a,b.z,c,d,e)
if(p===6){s=A.nY(a,d)
return A.X(a,b,c,s,e)}if(r===8){if(!A.X(a,b.z,c,d,e))return!1
return A.X(a,A.nX(a,b),c,d,e)}if(r===7){s=A.X(a,t.P,c,d,e)
return s&&A.X(a,b.z,c,d,e)}if(p===8){if(A.X(a,b,c,d.z,e))return!0
return A.X(a,b,c,A.nX(a,d),e)}if(p===7){s=A.X(a,b,c,t.P,e)
return s||A.X(a,b,c,d.z,e)}if(q)return!1
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
if(!A.X(a,k,c,j,e)||!A.X(a,j,e,k,c))return!1}return A.ou(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.ou(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.r7(a,b,c,d,e)}return!1},
ou(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.X(a3,a4.z,a5,a6.z,a7))return!1
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
if(!A.X(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.X(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.X(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.X(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
r7(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.lG(a,b,r[o])
return A.on(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.on(a,n,null,c,m,e)},
on(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.X(a,r,d,q,f))return!1}return!0},
f9(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.bV(a))if(r!==7)if(!(r===6&&A.f9(a.z)))s=r===8&&A.f9(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
rS(a){var s
if(!A.bV(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bV(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.iD},
om(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
lI(a){return a>0?new Array(a):v.typeUniverse.sEA},
b8:function b8(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
ii:function ii(){this.c=this.b=this.a=null},
f_:function f_(a){this.a=a},
id:function id(){},
f0:function f0(a){this.a=a},
qr(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.ru()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.by(new A.ld(q),1)).observe(s,{childList:true})
return new A.lc(q,s,r)}else if(self.setImmediate!=null)return A.rv()
return A.rw()},
qs(a){self.scheduleImmediate(A.by(new A.le(t.M.a(a)),0))},
qt(a){self.setImmediate(A.by(new A.lf(t.M.a(a)),0))},
qu(a){A.mU(B.bj,t.M.a(a))},
mU(a,b){var s=B.e.W(a.a,1000)
return A.qB(s<0?0:s,b)},
o7(a,b){var s=B.e.W(a.a,1000)
return A.qC(s<0?0:s,b)},
qB(a,b){var s=new A.eZ(!0)
s.e7(a,b)
return s},
qC(a,b){var s=new A.eZ(!1)
s.e8(a,b)
return s},
bi(a){return new A.eB(new A.F($.C,a.i("F<0>")),a.i("eB<0>"))},
bg(a,b){a.$2(0,null)
b.b=!0
return b.a},
a6(a,b){A.qR(a,b)},
bf(a,b){b.a3(0,a)},
be(a,b){b.bD(A.bz(a),A.bU(a))},
qR(a,b){var s,r,q=new A.lJ(b),p=new A.lK(b)
if(a instanceof A.F)a.cR(q,p,t.z)
else{s=t.z
if(t.g7.b(a))a.b4(q,p,s)
else{r=new A.F($.C,t.c)
r.a=8
r.c=a
r.cR(q,p,s)}}},
bj(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.C.bW(new A.lP(s),t.H,t.S,t.z)},
u0(a){return new A.dy(a,1)},
od(){return B.hr},
oe(a){return new A.dy(a,3)},
ov(a,b){return new A.eW(a,b.i("eW<0>"))},
je(a,b){var s=A.f8(a,"error",t.K)
return new A.dP(s,b==null?A.mD(a):b)},
mD(a){var s
if(t.fz.b(a)){s=a.gaK()
if(s!=null)return s}return B.dF},
pS(a,b){var s,r=!b.b(null)
if(r)throw A.d(A.mC(null,"computation","The type parameter is not nullable"))
s=new A.F($.C,b.i("F<0>"))
A.qm(a,new A.jM(null,s,b))
return s},
pT(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=null,e=!1,d=b.i("F<n<0>>"),c=new A.F($.C,d)
g.a=null
g.b=0
s=A.mX("error")
r=A.mX("stackTrace")
q=new A.jO(g,f,e,c,s,r)
try{for(l=a.length,k=t.P,j=0,i=0;j<a.length;a.length===l||(0,A.y)(a),++j){p=a[j]
o=i
p.b4(new A.jN(g,o,c,f,e,s,r,b),q,k)
i=++g.b}if(i===0){l=c
l.aB(A.c([],b.i("r<0>")))
return l}g.a=A.aK(i,null,!1,b.i("0?"))}catch(h){n=A.bz(h)
m=A.bU(h)
if(g.b===0||A.O(e)){l=n
r=m
A.f8(l,"error",t.K)
$.C!==B.l
if(r==null)r=A.mD(l)
d=new A.F($.C,d)
d.bd(l,r)
return d}else{s.b=n
r.b=m}}return c},
lm(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aT()
b.bf(a)
A.dx(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.cH(q)}},
dx(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.g7;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.j8(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.dx(c.a,b)
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
A.j8(i.a,i.b)
return}f=$.C
if(f!==g)$.C=g
else f=null
b=b.c
if((b&15)===8)new A.lu(p,c,m).$0()
else if(n){if((b&1)!==0)new A.lt(p,i).$0()}else if((b&2)!==0)new A.ls(c,p).$0()
if(f!=null)$.C=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("ah<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.aU(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.lm(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.aU(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
rj(a,b){var s
if(t.ng.b(a))return b.bW(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.mC(a,"onError",u.w))},
rg(){var s,r
for(s=$.dD;s!=null;s=$.dD){$.f6=null
r=s.b
$.dD=r
if(r==null)$.f5=null
s.a.$0()}},
ro(){$.n3=!0
try{A.rg()}finally{$.f6=null
$.n3=!1
if($.dD!=null)$.nc().$1(A.oD())}},
oy(a){var s=new A.i2(a),r=$.f5
if(r==null){$.dD=$.f5=s
if(!$.n3)$.nc().$1(A.oD())}else $.f5=r.b=s},
rm(a){var s,r,q,p=$.dD
if(p==null){A.oy(a)
$.f6=$.f5
return}s=new A.i2(a)
r=$.f6
if(r==null){s.b=p
$.dD=$.f6=s}else{q=r.b
s.b=q
$.f6=r.b=s
if(q==null)$.f5=s}},
oQ(a){var s=null,r=$.C
if(B.l===r){A.cO(s,s,B.l,a)
return}A.cO(s,s,r,t.M.a(r.bB(a)))},
tN(a,b){A.f8(a,"stream",t.K)
return new A.iJ(b.i("iJ<0>"))},
o4(a){return new A.dt(null,null,null,a.i("dt<0>"))},
lO(a){return},
qv(a,b,c,d,e,f){var s,r=$.C,q=e?1:0
t.bm.F(f).i("1(2)").a(b)
A.ob(r,c)
s=d==null?A.oC():d
t.M.a(s)
return new A.cc(a,b,r,q,f.i("cc<0>"))},
ob(a,b){if(b==null)b=A.rx()
if(t.fQ.b(b))return a.bW(b,t.z,t.K,t.l)
if(t.i6.b(b))return t.y.a(b)
throw A.d(A.cW("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
ri(a,b){A.j8(a,b)},
rh(){},
qm(a,b){var s=$.C
if(s===B.l)return A.mU(a,t.M.a(b))
return A.mU(a,t.M.a(s.bB(b)))},
qn(a,b){var s=$.C
if(s===B.l)return A.o7(a,t.my.a(b))
return A.o7(a,t.my.a(s.cZ(b,t.hU)))},
j8(a,b){A.rm(new A.lN(a,b))},
ow(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
ox(a,b,c,d,e,f,g){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
rk(a,b,c,d,e,f,g,h,i){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
cO(a,b,c,d){t.M.a(d)
if(B.l!==c)d=c.bB(d)
A.oy(d)},
ld:function ld(a){this.a=a},
lc:function lc(a,b,c){this.a=a
this.b=b
this.c=c},
le:function le(a){this.a=a},
lf:function lf(a){this.a=a},
eZ:function eZ(a){this.a=a
this.b=null
this.c=0},
lF:function lF(a,b){this.a=a
this.b=b},
lE:function lE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eB:function eB(a,b){this.a=a
this.b=!1
this.$ti=b},
lJ:function lJ(a){this.a=a},
lK:function lK(a){this.a=a},
lP:function lP(a){this.a=a},
dy:function dy(a,b){this.a=a
this.b=b},
cf:function cf(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
eW:function eW(a,b){this.a=a
this.$ti=b},
dP:function dP(a,b){this.a=a
this.b=b},
eD:function eD(a,b){this.a=a
this.$ti=b},
bP:function bP(a,b,c,d,e){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
eE:function eE(){},
eC:function eC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
jM:function jM(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jN:function jN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
dv:function dv(){},
ac:function ac(a,b){this.a=a
this.$ti=b},
dA:function dA(a,b){this.a=a
this.$ti=b},
bR:function bR(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
F:function F(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
lj:function lj(a,b){this.a=a
this.b=b},
lr:function lr(a,b){this.a=a
this.b=b},
ln:function ln(a){this.a=a},
lo:function lo(a){this.a=a},
lp:function lp(a,b,c){this.a=a
this.b=b
this.c=c},
ll:function ll(a,b){this.a=a
this.b=b},
lq:function lq(a,b){this.a=a
this.b=b},
lk:function lk(a,b,c){this.a=a
this.b=b
this.c=c},
lu:function lu(a,b,c){this.a=a
this.b=b
this.c=c},
lv:function lv(a){this.a=a},
lt:function lt(a,b){this.a=a
this.b=b},
ls:function ls(a,b){this.a=a
this.b=b},
i2:function i2(a){this.a=a
this.b=null},
c5:function c5(){},
kU:function kU(a,b){this.a=a
this.b=b},
kV:function kV(a,b){this.a=a
this.b=b},
aB:function aB(){},
eV:function eV(){},
lC:function lC(a){this.a=a},
i3:function i3(){},
dt:function dt(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
bw:function bw(a,b){this.a=a
this.$ti=b},
cc:function cc(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
du:function du(){},
dz:function dz(){},
i8:function i8(){},
bQ:function bQ(a,b){this.b=a
this.a=null
this.$ti=b},
ce:function ce(){},
lz:function lz(a,b){this.a=a
this.b=b},
bx:function bx(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
dw:function dw(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
iJ:function iJ(a){this.$ti=a},
f3:function f3(){},
lN:function lN(a,b){this.a=a
this.b=b},
iB:function iB(){},
lA:function lA(a,b){this.a=a
this.b=b},
lB:function lB(a,b,c){this.a=a
this.b=b
this.c=c},
mO(a,b,c,d){if(b==null){if(a==null)return new A.aJ(c.i("@<0>").F(d).i("aJ<1,2>"))}else if(a==null)a=A.rC()
return A.qw(A.rB(),a,b,c,d)},
b_(a,b,c){return b.i("@<0>").F(c).i("kk<1,2>").a(A.oF(a,new A.aJ(b.i("@<0>").F(c).i("aJ<1,2>"))))},
ai(a,b){return new A.aJ(a.i("@<0>").F(b).i("aJ<1,2>"))},
qw(a,b,c,d,e){var s=c!=null?c:new A.lx(d)
return new A.eJ(a,b,s,d.i("@<0>").F(e).i("eJ<1,2>"))},
h0(a){return new A.eK(a.i("eK<0>"))},
mY(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
qY(a,b){return J.Z(a,b)},
qZ(a){return J.aF(a)},
nI(a,b,c){var s,r
if(A.n5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.k($.aU,a)
try{A.re(a,s)}finally{if(0>=$.aU.length)return A.b($.aU,-1)
$.aU.pop()}r=A.o5(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
mL(a,b,c){var s,r
if(A.n5(a))return b+"..."+c
s=new A.hG(b)
B.a.k($.aU,a)
try{r=s
r.a=A.o5(r.a,a,", ")}finally{if(0>=$.aU.length)return A.b($.aU,-1)
$.aU.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
n5(a){var s,r
for(s=$.aU.length,r=0;r<s;++r)if(a===$.aU[r])return!0
return!1},
re(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.D(l.gp(l))
B.a.k(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gp(l);++j
if(!l.n()){if(j<=4){B.a.k(b,A.D(p))
return}r=A.D(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp(l);++j
for(;l.n();p=o,o=n){n=l.gp(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.D(p)
r=A.D(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
q5(a,b,c){var s=A.mO(null,null,b,c)
a.G(0,new A.km(s,b,c))
return s},
nP(a,b,c){var s=A.mO(null,null,b,c)
s.L(0,a)
return s},
mQ(a){var s,r={}
if(A.n5(a))return"{...}"
s=new A.hG("")
try{B.a.k($.aU,a)
s.a+="{"
r.a=!0
J.pA(a,new A.kp(r,s))
s.a+="}"}finally{if(0>=$.aU.length)return A.b($.aU,-1)
$.aU.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ly:function ly(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eJ:function eJ(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
lx:function lx(a){this.a=a},
eK:function eK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iq:function iq(a){this.a=a
this.c=this.b=null},
eL:function eL(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
e7:function e7(){},
km:function km(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
ef:function ef(){},
kp:function kp(a,b){this.a=a
this.b=b},
A:function A(){},
kr:function kr(a){this.a=a},
et:function et(){},
eR:function eR(){},
f4:function f4(){},
pR(a){if(a instanceof A.co)return a.l(0)
return"Instance of '"+A.kH(a)+"'"},
aK(a,b,c,d){var s,r=c?J.nK(a,d):J.q_(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
q7(a,b){var s,r=A.c([],b.i("r<0>"))
for(s=J.as(a);s.n();)B.a.k(r,b.a(s.gp(s)))
return r},
ee(a,b,c){var s=A.q6(a,c)
return s},
q6(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("r<0>"))
s=A.c([],b.i("r<0>"))
for(r=J.as(a);r.n();)B.a.k(s,r.gp(r))
return s},
mP(a,b,c){var s,r=J.nK(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
o5(a,b,c){var s=J.as(b)
if(!s.n())return a
if(c.length===0){do a+=A.D(s.gp(s))
while(s.n())}else{a+=A.D(s.gp(s))
for(;s.n();)a=a+c+A.D(s.gp(s))}return a},
pK(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
pL(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
fz(a){if(a>=10)return""+a
return"0"+a},
jF(a){return new A.ae(1000*a)},
fF(a){if(typeof a=="number"||A.lL(a)||a==null)return J.cT(a)
if(typeof a=="string")return JSON.stringify(a)
return A.pR(a)},
jd(a){return new A.dO(a)},
cW(a,b){return new A.bA(!1,null,b,a)},
mC(a,b,c){return new A.bA(!0,a,b,c)},
qh(a){var s=null
return new A.di(s,s,!1,s,s,a)},
nW(a,b){return new A.di(null,null,!0,a,b,"Value not in range")},
bK(a,b,c,d,e){return new A.di(b,c,!0,a,d,"Invalid value")},
kM(a,b,c){if(0>a||a>c)throw A.d(A.bK(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.bK(b,a,c,"end",null))
return b}return c},
kL(a,b){if(a<0)throw A.d(A.bK(a,0,null,b,null))
return a},
V(a,b,c,d,e){var s=A.K(e==null?J.at(b):e)
return new A.fS(s,!0,a,c,"Index out of range")},
E(a){return new A.hV(a)},
mW(a){return new A.hS(a)},
ao(a){return new A.ba(a)},
bp(a){return new A.fv(a)},
mJ(a){return new A.ie(a)},
cF(a,b,c,d){var s,r
if(B.D===c)return A.ql(J.aF(a),J.aF(b),$.mz())
if(B.D===d){s=J.aF(a)
b=J.aF(b)
c=J.aF(c)
return A.mT(A.c6(A.c6(A.c6($.mz(),s),b),c))}s=J.aF(a)
b=J.aF(b)
c=J.aF(c)
d=J.aF(d)
r=$.mz()
return A.mT(A.c6(A.c6(A.c6(A.c6(r,s),b),c),d))},
cS(a){A.rZ(A.D(a))},
cq:function cq(a,b){this.a=a
this.b=b},
ae:function ae(a){this.a=a},
lh:function lh(){},
L:function L(){},
dO:function dO(a){this.a=a},
ca:function ca(){},
hg:function hg(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fS:function fS(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hV:function hV(a){this.a=a},
hS:function hS(a){this.a=a},
ba:function ba(a){this.a=a},
fv:function fv(a){this.a=a},
hj:function hj(){},
ew:function ew(){},
fy:function fy(a){this.a=a},
ie:function ie(a){this.a=a},
j:function j(){},
W:function W(){},
db:function db(a,b,c){this.a=a
this.b=b
this.$ti=c},
a1:function a1(){},
v:function v(){},
iM:function iM(){},
hG:function hG(a){this.a=a},
oE(){return document},
eI(a,b,c,d,e){var s=A.oz(new A.li(c),t.fq)
if(s!=null&&!0)J.py(a,b,s,!1)
return new A.eH(a,b,s,!1,e.i("eH<0>"))},
qV(a){var s
if(t.dA.b(a))return a
s=new A.la([],[])
s.c=!0
return s.c5(a)},
oz(a,b){var s=$.C
if(s===B.l)return a
return s.cZ(a,b)},
q:function q(){},
jc:function jc(){},
ff:function ff(){},
fg:function fg(){},
fl:function fl(){},
fm:function fm(){},
cl:function cl(){},
bn:function bn(){},
jx:function jx(){},
J:function J(){},
d5:function d5(){},
jy:function jy(){},
b4:function b4(){},
bC:function bC(){},
jz:function jz(){},
jA:function jA(){},
jB:function jB(){},
bD:function bD(){},
c0:function c0(){},
dX:function dX(){},
dY:function dY(){},
fB:function fB(){},
jC:function jC(){},
a9:function a9(){},
l:function l(){},
e:function e(){},
aG:function aG(){},
fH:function fH(){},
fI:function fI(){},
fL:function fL(){},
aH:function aH(){},
ka:function ka(){},
ct:function ct(){},
e5:function e5(){},
cu:function cu(){},
d9:function d9(){},
bH:function bH(){},
ko:function ko(){},
cB:function cB(){},
kt:function kt(){},
h2:function h2(){},
kw:function kw(a){this.a=a},
h3:function h3(){},
kx:function kx(a){this.a=a},
aL:function aL(){},
h4:function h4(){},
aM:function aM(){},
w:function w(){},
el:function el(){},
aN:function aN(){},
hn:function hn(){},
hu:function hu(){},
kO:function kO(a){this.a=a},
hw:function hw(){},
aA:function aA(){},
hA:function hA(){},
aP:function aP(){},
hB:function hB(){},
aQ:function aQ(){},
hE:function hE(){},
kT:function kT(a){this.a=a},
ap:function ap(){},
aD:function aD(){},
ak:function ak(){},
hL:function hL(){},
hM:function hM(){},
kZ:function kZ(){},
aR:function aR(){},
hO:function hO(){},
l_:function l_(){},
bv:function bv(){},
l3:function l3(){},
dr:function dr(){},
hY:function hY(){},
ds:function ds(){},
i6:function i6(){},
eF:function eF(){},
ij:function ij(){},
eM:function eM(){},
iF:function iF(){},
iN:function iN(){},
mI:function mI(a,b){this.a=a
this.$ti=b},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eH:function eH(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
li:function li(a){this.a=a},
t:function t(){},
e1:function e1(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
i7:function i7(){},
i9:function i9(){},
ia:function ia(){},
ib:function ib(){},
ic:function ic(){},
ig:function ig(){},
ih:function ih(){},
ik:function ik(){},
il:function il(){},
ir:function ir(){},
is:function is(){},
it:function it(){},
iu:function iu(){},
iv:function iv(){},
iw:function iw(){},
iz:function iz(){},
iA:function iA(){},
iC:function iC(){},
eS:function eS(){},
eT:function eT(){},
iD:function iD(){},
iE:function iE(){},
iG:function iG(){},
iO:function iO(){},
iP:function iP(){},
eX:function eX(){},
eY:function eY(){},
iR:function iR(){},
iS:function iS(){},
iZ:function iZ(){},
j_:function j_(){},
j0:function j0(){},
j1:function j1(){},
j2:function j2(){},
j3:function j3(){},
j4:function j4(){},
j5:function j5(){},
j6:function j6(){},
j7:function j7(){},
oq(a){var s,r
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.lL(a))return a
if(A.oL(a))return A.ci(a)
if(Array.isArray(a)){s=[]
for(r=0;r<a.length;++r)s.push(A.oq(a[r]))
return s}return a},
ci(a){var s,r,q,p,o
if(a==null)return null
s=A.ai(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.y)(r),++p){o=r[p]
s.j(0,o,A.oq(a[o]))}return s},
oL(a){var s=Object.getPrototypeOf(a)
return s===Object.prototype||s===null},
mG(){return window.navigator.userAgent},
l9:function l9(){},
lb:function lb(a,b){this.a=a
this.b=b},
la:function la(a,b){this.a=a
this.b=b
this.c=!1},
t0(a,b){var s=new A.F($.C,b.i("F<0>")),r=new A.ac(s,b.i("ac<0>"))
a.then(A.by(new A.mi(r,b),1),A.by(new A.mj(r),1))
return s},
kB:function kB(a){this.a=a},
mi:function mi(a,b){this.a=a
this.b=b},
mj:function mj(a){this.a=a},
mS(){return B.r},
im:function im(){},
aZ:function aZ(){},
fX:function fX(){},
b1:function b1(){},
hh:function hh(){},
kG:function kG(){},
hH:function hH(){},
o:function o(){},
b2:function b2(){},
hP:function hP(){},
io:function io(){},
ip:function ip(){},
ix:function ix(){},
iy:function iy(){},
iK:function iK(){},
iL:function iL(){},
iT:function iT(){},
iU:function iU(){},
nE(a){return new GainNode(a)},
bl:function bl(){},
cZ:function cZ(){},
ck:function ck(){},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
I:function I(){},
fh:function fh(){},
fi:function fi(){},
jk:function jk(a){this.a=a},
bB:function bB(){},
fj:function fj(){},
dR:function dR(){},
d8:function d8(){},
hi:function hi(){},
i5:function i5(){},
fo:function fo(){},
fN:function fN(){},
ho:function ho(){},
dj:function dj(){},
bM:function bM(){},
hR:function hR(){},
hX:function hX(){},
bL:function bL(a){this.a=a},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
jr:function jr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nF(a,b){var s=A.aK(7,null,!1,b.i("0?")),r=a==null?A.tb():a
return new A.fR(r,s,b.i("fR<0>"))},
fR:function fR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
lH:function lH(a,b){this.a=a
this.$ti=b},
cM:function cM(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=-1
_.$ti=c},
bY(a){return new A.f(a)},
f:function f(a){this.a=a},
a8:function a8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
N:function N(a,b){this.a=a
this.b=b},
mB(a,b,c,d,e,f,g,h){return new A.cV(h,b,f,a,g,c)},
oK(a,b){if(b.e)return!1
if(a.x)return!0
if(b.x)return!0
return!1},
rL(a,b){return B.a.ff(a.a,new A.lZ(b))},
h5(a,b,c,d,e,f,g,h,i,j){return new A.c2(i,a,h,j,b,e,c,d,f)},
rH(a){var s,r,q=a.f.$0(),p=new A.kv(new Uint8ClampedArray(4000)),o=a.d,n=A.c([],t.I),m=A.nP(B.aV,t.b,t.R),l=A.c([],t.Q),k=A.c([],t.g)
for(s=J.as(a.r.$0());s.n();){r=s.gp(s)
switch(r.gb8()){case B.aw:m.h(0,B.I)
m.j(0,B.I,r)
break
case B.ax:m.h(0,B.v)
m.j(0,B.v,r)
break
case B.ay:m.h(0,B.J)
m.j(0,B.J,r)
break
default:B.a.k(n,r)}}return A.mB(new A.ja(q,p),new A.cn(o,o,1,0,0,0,0,new A.d6(n,m),a.c,l,k,new A.d7(a.a)),a.y,1,a.z,!1,!1,a.e.$0())},
cV:function cV(a,b,c,d,e,f){var _=this
_.a=100
_.b=a
_.c=b
_.e=c
_.r=d
_.x=e
_.Q=f},
jb:function jb(a){this.a=a},
ja:function ja(a,b){this.a=a
this.b=b
this.c=null},
al:function al(a,b){this.a=a
this.b=b},
av:function av(){},
c7:function c7(){},
c8:function c8(){},
d3:function d3(){},
c4:function c4(){},
hr:function hr(){this.b=!1},
ep:function ep(){this.a=null},
hs:function hs(a){this.a=a},
lZ:function lZ(a){this.a=a},
bW:function bW(){},
bo:function bo(a){this.a=a},
c2:function c2(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
ms:function ms(){},
mq:function mq(){},
mr:function mr(){},
mm:function mm(){},
mk:function mk(){},
ml:function ml(){},
mv:function mv(){},
mt:function mt(){},
mu:function mu(){},
my:function my(){},
mw:function mw(){},
mx:function mx(){},
lT:function lT(){},
lR:function lR(){},
lS:function lS(){},
js:function js(){this.b=this.a=0},
R:function R(){},
c1:function c1(a,b){this.b=a
this.a=b},
cA:function cA(a,b){this.b=a
this.a=b},
pU(a){var s=t.w
s=new A.fO(a,A.c([],s),A.c([],s),A.c([],t.fy),A.c([],t.ge))
s.e3(a)
return s},
t_(a,b,c){var s,r,q=b.e||b.a===0
if(q)return!1
s=b.c
if(s!=null&&s.b<=0){a.$1(new A.dW(b))
return!0}r=b.r
if(r!=null){a.$1(r.fh(b,c))
b.a=0
return!0}return!1},
fO:function fO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1
_.r=null},
jR:function jR(a){this.a=a},
jQ:function jQ(a,b){this.a=a
this.b=b},
jP:function jP(a,b){this.a=a
this.b=b},
nD(a){switch(a){case B.fa:case B.bf:case B.bg:case B.ag:case B.fb:return!1
case B.ah:case B.aF:case B.bh:return!0}},
dT(a,b,c){var s,r,q
for(s=0,r=0;r<b;++r){switch(c){case B.aG:q=3
break
case B.ai:q=4
break
case B.aj:q=6
break
case B.aH:q=8
break
case B.bi:q=12
break
case B.aI:q=20
break
default:q=null}s+=a.J(q)+1}return s},
fc(a,b,c,d,e,f){return new A.fb(f,c)},
np(){return new A.fb(10,10)},
pJ(a){var s,r=a.a,q=a.b
if(r+q===1)return a
s=Math.sqrt(Math.pow(r,2)+Math.pow(q,2))
return new A.N(r/s,q/s)},
bF(a){switch(a){case B.aN:case B.aO:case B.a1:case B.a2:case B.a4:case B.a5:case B.aq:case B.ar:case B.al:case B.a0:case B.am:case B.an:case B.ao:case null:return!1
case B.ak:case B.E:case B.a3:case B.ap:return!0}},
pX(a){switch(a){case B.aN:case B.aO:case B.a1:case B.a2:case B.a4:case B.a5:case B.aq:case B.ar:case B.al:case B.a0:case B.am:case B.an:case null:case B.ao:return!1
case B.ak:case B.E:case B.a3:case B.ap:return!0}},
eu:function eu(a){this.b=a},
bs:function bs(a){this.b=a},
fe:function fe(a,b){this.a=a
this.b=b},
ab:function ab(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=null},
a2:function a2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fQ:function fQ(a){this.b=a},
br:function br(a){this.b=a},
c_:function c_(a){this.b=a},
b3:function b3(a){this.b=a},
ku:function ku(){},
bZ:function bZ(){},
cp:function cp(a){this.b=a},
dV:function dV(a){this.b=a},
a4:function a4(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.y=e
_.z=f},
dL:function dL(a){this.b=a},
dM:function dM(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.f=c
_.r=d
_.Q=e
_.ch=f},
cX:function cX(a){this.b=a},
au:function au(a){this.c=a},
fb:function fb(a,b){this.a=a
this.b=b},
cn:function cn(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
cY:function cY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d7:function d7(a){this.a=a},
d6:function d6(a,b){this.a=a
this.b=b},
hl:function hl(a){this.b=a},
cr:function cr(a){this.b=a},
fw:function fw(){},
dp:function dp(a){this.b=a},
d2:function d2(a){this.b=a},
ax:function ax(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a){this.b=a},
aj:function aj(a){this.b=a},
cy:function cy(a){this.b=a},
bm:function bm(a){this.b=a},
c9:function c9(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
fZ:function fZ(a,b){this.b=a
this.c=b},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(a,b){this.a=a
this.b=b},
kn:function kn(a){this.b=a},
a3:function a3(a){this.b=a},
kq:function kq(a,b){this.a=a
this.b=b},
kv:function kv(a){this.a=a},
dc:function dc(a){this.b=a},
fC:function fC(a){var _=this
_.b=a
_.c=!1
_.d=null
_.e=0
_.a=!1},
fD:function fD(a){this.b=a
this.a=!1},
jG:function jG(){},
pP(a,a0,a1){var s,r,q,p,o,n,m,l,k="a_position",j=5126,i="u_resolution",h="u_offset",g=A.c([],t.ev),f=A.c(["alarm_1.mp3","background_1.mp3","background_2.mp3","bullet_impact_1.mp3","bullet_impact_2.mp3","bullet_miss_1.mp3","calm_menu_1.mp3","cave_1.mp3","click_1.mp3","death_1.mp3","door_1.mp3","door_unlock_1.mp3","drone_abandoned_desolate.mp3","fireball_1.mp3","fireball_2.mp3","flamethrower_1.mp3","heavy_punch_1.mp3","heavy_punch_2.mp3","heavy_punch_3.mp3","heavy_punch_4.mp3","Just_Pick_One_Already.mp3","laser_1.mp3","loop_1.mp3","menu_1.mp3","menu_2.mp3","miss_1.mp3","monster_deep_growl.mp3","monster_growl_1.mp3","monster_sceam_2.mp3","monster_scream_1.mp3","New_Bee.mp3","positive_1.mp3","rain_background_1.mp3","sewer_1.mp3","short_pulse_1.mp3","surface_day_1.mp3","surface_night_1.mp3","sword_impact_1.mp3","teleport_1.mp3","text_loop_1.mp3","water_footsteps_1.mp3","water_footsteps_2.mp3","water_footsteps_3.mp3","water_footsteps_4.mp3","water_footsteps_5.mp3","reload_1.mp3","pistol_1.mp3"],t.s),e=new (window.AudioContext||window.webkitAudioContext)(),d=A.qX(),c=t.G,b=t.o
d=A.aI(A.c([new A.T(k,35044,j,2,d),new A.T("a_color",35048,j,4,new Float32Array(192e3))],c),u.t,A.c([new A.x(i,B.f),new A.x(h,B.f)],b),u.Z)
s=A.aI(A.c([new A.T(k,35048,j,2,new Float32Array(8000))],c),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.c([new A.x(i,B.f),new A.x(h,B.f)],b),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
r=A.qq(window)
q=new Uint8Array(4000)
p=t.j
o=A.c([],t.pl)
b=A.c([new A.x("u_texture",B.k),new A.x(i,B.f),new A.x("u_time",B.A)],b)
b=A.aI(A.c([new A.T(k,35044,j,2,new Float32Array(A.cN(B.G)))],c),"#version 300 es\nprecision mediump float;\n\n\nuniform sampler2D u_texture;\nuniform vec2 u_resolution;\nuniform float u_time;\n\nout vec4 outColor;\n\nfloat density = 1.3;\nfloat opacityScanline = .3;\nfloat opacityNoise = .2;\n\nfloat random (vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nfloat blend(const in float x, const in float y) {\n\treturn (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));\n}\n\nvec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {\n\tvec3 z = vec3(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b));\n\treturn z * opacity + x * (1.0 - opacity);\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n  vec3 col = texture(u_texture, uv).rgb;\n  float count = u_resolution.y * density;\n  vec2 sl = vec2(sin(uv.y * count), cos(uv.y * count));\n\tvec3 scanlines = vec3(sl.x, sl.y, sl.x);\n  col += col * scanlines * opacityScanline;\n  col += col * vec3(random(uv * u_time)) * opacityNoise;\n  outColor = vec4(col, 1.0);\n}\n",b,u.v)
c=A.c([],t.hd)
n=new Uint8Array(16e6)
m=new Uint8Array(4000)
l=new Uint8Array(4000)
g=new A.fE(a0,a,g,a1,new A.hz(A.ai(t.N,t.bD),f,e),new A.jL(n,m,l,new Uint8Array(64e6),new A.i(0,0),A.ai(p,t.im),c),new A.js(),new A.hJ(d),new A.fC(s),r,new A.jb(new A.fA(q,A.ai(p,t.S))),new A.fD(o),new A.fJ(b),new A.eC(null,null,t.np),a0.createFramebuffer(),a0.createFramebuffer(),new A.kN())
g.e2(a,a0,a1)
return g},
jJ:function jJ(){this.b=!1},
fE:function fE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.k3=_.k2=_.k1=_.id=null
_.k4=o
_.r1=p
_.rx=_.r2=0
_.x1=!0
_.x2=null
_.y1=$
_.y2=q},
jK:function jK(a,b){this.a=a
this.b=b},
nt(a,b){var s,r=b==null
if(r)s=new A.fA(new Uint8Array(4000),A.ai(t.j,t.S))
else s=b
return new A.d0(a,s,r)},
oS(a,b,c){return a*c+(1-c)*b},
S:function S(){},
bX:function bX(a,b,c){var _=this
_.a=a
_.d=0
_.e=null
_.f=!0
_.r=b
_.x=c},
H:function H(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h},
hc:function hc(a){this.a=a},
eo:function eo(a){this.a=a},
b0:function b0(a,b){this.a=a
this.b=b},
ky:function ky(a,b,c){this.a=a
this.b=b
this.c=c},
kz:function kz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dm:function dm(){},
fY:function fY(a){this.a=a},
ey:function ey(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.c=c},
jg:function jg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jh:function jh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jf:function jf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dW:function dW(a){this.a=a},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function jl(a){this.a=a},
hU:function hU(a){this.a=a},
en:function en(a,b){this.a=a
this.b=b},
hp:function hp(a,b){this.b=a
this.c=b},
kI:function kI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kJ:function kJ(a,b,c){this.a=a
this.b=b
this.c=c},
fP:function fP(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
fJ:function fJ(a){this.b=a
this.c=null
this.a=!1},
jL:function jL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iQ:function iQ(a){this.a=a
this.b=!0},
l4:function l4(a,b,c){this.a=a
this.c=b
this.d=c},
cm:function cm(a){this.b=a},
kK:function kK(a,b){this.a=a
this.b=b},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
oJ(a,b){var s=null,r=a.f
if(r==null)return A.c([],t.Y)
if(r===B.E)return A.c([new A.aY("Open Door",s,new A.ey(!1,a.b))],t.Y)
if(r===B.a2){if(b.ax(a.b)!=null)return A.c([],t.Y)
return A.c([new A.aY("Close Door",s,new A.ey(!0,a.b))],t.Y)}if(r===B.a0)return A.c([new A.aY("Activate Mechanism",s,new A.hU(a.b))],t.Y)
if(r===B.a1)return A.c([new A.aY("Stairs",s,new A.hc(!1))],t.Y)
return A.c([],t.Y)},
aY:function aY(a,b,c){this.a=a
this.b=b
this.c=c},
q4(a){var s=u.v,r="a_position",q="u_player_visible_texture",p=t.G,o=t.o
return new A.eb(A.aI(A.c([new A.T(r,35044,5126,2,new Float32Array(A.cN(B.G)))],p),u._,A.c([new A.x("u_source_position",B.f),new A.x("u_source_color",B.b0),new A.x("u_source_strength",B.A),new A.x("u_time",B.A),new A.x("u_visible_texture",B.k),new A.x(q,B.k)],o),s),A.aI(A.c([new A.T(r,35044,5126,2,new Float32Array(A.cN(B.G)))],p),u.L,A.c([new A.x("u_light_texture",B.k),new A.x("u_game_world_texture",B.k),new A.x(q,B.k),new A.x("u_resolution",B.f),new A.x("u_block_size",B.f),new A.x("u_offset",B.f)],o),s),a,A.c([],t.ow))},
eb:function eb(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.r=_.f=_.e=null
_.y=d
_.z=null
_.a=!1},
pN(a){switch(a){case B.O:return B.R
case B.P:return B.Q
case B.Q:return B.P
case B.R:return B.O
case B.m:return B.o
case B.n:return B.p
case B.o:return B.m
case B.p:return B.n}},
pM(a){switch(a){case B.m:return B.bw
case B.n:return B.bv
case B.o:return B.bw
case B.p:return B.bv
default:return B.fy}},
ad(a,b){switch(b){case B.m:return a.w(0,new A.i(0,-1))
case B.P:return a.w(0,new A.i(1,-1))
case B.n:return a.w(0,new A.i(1,0))
case B.O:return a.w(0,new A.i(1,1))
case B.o:return a.w(0,new A.i(0,1))
case B.Q:return a.w(0,new A.i(-1,1))
case B.p:return a.w(0,new A.i(-1,0))
case B.R:return a.w(0,new A.i(-1,-1))}},
lU(a,b,c){var s
switch(c){case B.dG:return!1
case B.dH:return a.c===B.b||A.O(A.bF(a.f))
case B.af:s=a.f
if(s===B.E)return!1
return a.c===B.b||A.O(A.bF(s))
case B.Y:return a.c===B.b||A.O(A.bF(a.f))||b.ax(a.b)!=null||b.a.O(0,a.b)}},
rF(a,b){var s=B.e.bC(a,-1,1),r=B.e.bC(b,-1,1)
switch(s){case-1:switch(r){case-1:return B.R
case 0:return B.p
case 1:return B.Q}break
case 0:switch(r){case-1:return B.m
case 1:return B.o}break
case 1:switch(r){case-1:return B.P
case 0:return B.n
case 1:return B.O}break}throw A.d(A.ao(A.D(s)+","+A.D(r)))},
bJ:function bJ(a,b,c){var _=this
_.b=_.a=null
_.d=a
_.e=b
_.f=c},
b5:function b5(a){this.b=a},
kE:function kE(){},
fA:function fA(a,b){this.a=a
this.b=b},
hx:function hx(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.a=!1},
ns(a,b,c,d,e){return new A.T(d,a,c,e,b)},
cb(a,b){return new A.x(b,a)},
aI(a,b,c,d){var s=t.N
return new A.k9(d,b,c,a,A.ai(s,t.o3),A.ai(s,t.aN))},
or(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.Z(a.getShaderParameter(s,35713),!0)){A.cS(a.getShaderInfoLog(s))
throw A.d(A.ao("Invalid Shader"))}return s},
T:function T(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x:function x(a,b){this.a=a
this.b=b},
cJ:function cJ(a){this.b=a},
i4:function i4(a,b){this.a=a
this.c=b},
iV:function iV(a,b){this.a=a
this.b=b},
k9:function k9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
kN:function kN(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
az:function az(){},
d_:function d_(){},
hd:function hd(){},
he:function he(){},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
kR:function kR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fU:function fU(a){this.a=a},
rn(a,b){var s=t.r
s.a(a)
s.a(b)
return B.e.X(a.y,b.y)},
rU(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.F($.C,t.aa),p=J.no(r),o=p.$ti,n=o.i("~(1)?").a(new A.m4(a,s,r,new A.ac(q,t.fB)))
t.Z.a(null)
A.eI(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
o2(a,b){var s=35048,r=5126,q=A.c([new A.x("u_texture",B.k),new A.x("u_resolution",B.f),new A.x("u_offset",B.f)],t.o),p=new Float32Array(12e4),o=new Float32Array(12e4),n=new Float32Array(24e4)
q=new A.ev(A.aI(A.c([new A.T("a_position",s,r,2,p),new A.T("a_texcoord",s,r,2,o),new A.T("a_color",s,r,4,n),new A.T("a_bg_color",s,r,4,new Float32Array(24e4))],t.G),u.I,q,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"),A.nF(A.t3(),t.r),b)
q.e4(a,b)
return q},
cH(a){return new A.Q(a.a,a.b,-1,-1,null)},
o3(a){var s
switch(a.c){case B.K:return A.cH(B.aW)
case B.L:return A.cH(B.h6)
case B.M:return A.cH(B.c3)
case B.N:s=A.cH(B.hd)
s.saJ(0,0.8)
s.saX(0,B.t)
return s
case B.T:return A.cH(B.h5)
case B.S:s=A.cH(B.bX)
s.saJ(0,0.6)
return s
case B.as:s=A.cH(B.bX)
s.saJ(0,0.6)
s.saX(0,B.t)
return s}},
nG(a,b,c,d){var s,r,q,p,o,n,m=null
switch(a){case B.aN:case null:return m
case B.aO:s=m
r=s
q=3
p=16
o=1
break
case B.a1:q=14
p=3
o=1
r=B.fL
s=B.dJ
break
case B.E:s=m
r=s
q=6
p=11
o=1
break
case B.a2:s=m
r=s
q=15
p=5
o=1
break
case B.a3:s=m
r=s
q=5
p=11
o=1
break
case B.a4:n=t.e.i("R.T")
if(d.a===B.w){n=B.bE.h(0,n.a(900))
n.toString
r=n}else{n=B.bC.h(0,n.a(800))
n.toString
r=n}s=m
q=2
p=2
o=0.8
break
case B.a5:r=new A.f(4294967142)
s=m
q=12
p=7
o=0.8
break
case B.aq:n=B.x.h(0,t.e.i("R.T").a(400))
n.toString
s=m
r=n
q=1
p=13
o=1
break
case B.ar:n=B.x.h(0,t.e.i("R.T").a(400))
n.toString
s=m
r=n
q=2
p=13
o=0.8
break
case B.ak:n=B.bC.h(0,t.e.i("R.T").a(600))
n.toString
s=m
r=n
q=6
p=0
o=1
break
case B.al:n=B.aT.h(0,t.e.i("R.T").a(900))
n.toString
s=n
r=m
q=0
p=15
o=1
break
case B.a0:n=B.bF.h(0,t.e.i("R.T").a(500))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.am:n=B.bF.h(0,t.e.i("R.T").a(100))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.an:s=m
r=s
q=13
p=3
o=1
break
case B.ao:n=B.aT.h(0,t.e.i("R.T").a(900))
n.toString
s=m
r=n
q=14
p=5
o=1
break
case B.ap:n=B.x.h(0,t.e.i("R.T").a(600))
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
n.saJ(0,o)
n.sau(0,s)
return n},
m4:function m4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ev:function ev(a,b,c){var _=this
_.b=a
_.c=null
_.d=b
_.e=c
_.f=!0
_.a=!1},
kS:function kS(a){this.a=a},
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
mR(a,b,c){return new A.ks(b,c,a)},
qX(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
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
ks:function ks(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a){var _=this
_.b=a
_.c=null
_.a=_.d=!1},
hK:function hK(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=0
_.a=!1},
hq:function hq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null},
lD:function lD(a){this.a=a},
rT(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.F($.C,t.aa),p=J.no(r),o=p.$ti,n=o.i("~(1)?").a(new A.m3(a,s,r,new A.ac(q,t.fB)))
t.Z.a(null)
A.eI(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
mV(a){var s,r,q,p,o,n=null,m=35048,l=5126,k=A.aC("  [i] Inventory  [e] Equipment",n)
k.sdA(0.5)
s=t.f
r=A.c([],s)
r=new A.fn(k,B.a9,r,B.q)
r.a6(n)
r.K(k)
k=A.c([],t.s)
q=A.mF(A.c([],s),!0)
p=A.c([],s)
k=new A.ht(q,k,p,B.q)
k.a6(n)
q=A.kD(108,q,0,0,0)
p=B.aU.h(0,t.e.i("R.T").a(900))
p.toString
k.K(A.mE(q,p))
s=A.c([],s)
s=new A.e2(r,k,s,B.q)
s.a6(n)
s.K(r)
s.K(k)
k=s.aO("The Something of Something")
s.e=k
s.K(k)
k=A.c([],t.k)
r=A.c([new A.x("u_texture",B.k),new A.x("u_resolution",B.f)],t.o)
q=new Float32Array(12e4)
p=new Float32Array(12e4)
o=new Float32Array(24e4)
k=new A.hQ(s,k,A.aI(A.c([new A.T("a_position",m,l,2,q),new A.T("a_texcoord",m,l,2,p),new A.T("a_color",m,l,4,o),new A.T("a_bg_color",m,l,4,new Float32Array(24e4))],t.G),u.I,r,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = ((a_position / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"))
k.e5(a)
return k},
aC(a,b){var s=A.c([],t.fC),r=A.c([],t.f)
s=new A.bu(b,a,s,B.a_,B.a9,r,B.q)
s.a6(null)
return s},
mF(a,b){var s=new A.ft(b,a,B.q)
s.a6(a)
return s},
mE(a,b){var s=A.c([a],t.f),r=new A.fk(b,new A.aO(B.q,0,0),s,B.q)
r.a6(s)
return r},
kD(a,b,c,d,e){var s=A.c([b],t.f),r=new A.hk(e,a,c,d,s,B.q)
r.a6(s)
return r},
nv(a,b,c){var s=A.c([a],t.f),r=new A.dS(c,b,B.a9,s,B.q)
r.a6(s)
if(c!=null){s=A.aC(c,null)
s.e=B.t
r.e=s
r.K(s)}return r},
es(a,b,c,d,e,f){var s,r,q,p=t.f,o=A.c([],p),n=b.length
if(n!==0)for(s=a==null,r=0;r<b.length;b.length===n||(0,A.y)(b),++r){q=b[r]
o.push(s?A.aC(J.cT(q),null):a.$1(q))}else o.push(A.aC("Empty",null))
p=A.c([A.nv(A.mE(A.kD(36,A.mF(o,!1),48,24,36),B.t),B.t,e)],p)
o=new A.dl(b,d,c,p,B.q,f.i("dl<0>"))
o.a6(p)
return o},
nq(a,b){var s,r=t.f
r=A.c([A.nv(A.mE(A.kD(36,A.mF(A.c([A.aC(a,null)],r),!1),48,24,36),B.t),B.t,null)],r)
s=new A.cU(b,r,B.q)
s.a6(r)
return s},
n8(a){var s,r,q,p,o,n,m,l
t.W.a(a)
switch(a.c){case B.K:s=a.d
r=t.li.a(a.b)
q=("DiceType."+r.e.b).split(".")
if(1>=q.length)return A.b(q,1)
q=q[1]
p=""+r.d+q
q=A.c([],t.bk)
for(o=s.length+1,n=0;n<o;++n)q.push(B.u)
t.e.i("R.T").a(900)
o=B.x.h(0,900)
o.toString
q.push(o)
for(o=p.length,n=0;n<o;++n)q.push(B.a6)
o=B.x.h(0,900)
o.toString
q.push(o)
return A.aC(s+" ["+p+"]",q)
case B.L:s=a.d
q=("DiceType."+t.kB.a(a.b).f.b).split(".")
if(1>=q.length)return A.b(q,1)
p="1"+q[1]
q=A.c([],t.bk)
for(o=s.length+1,n=0;n<o;++n)q.push(B.u)
t.e.i("R.T").a(900)
o=B.x.h(0,900)
o.toString
q.push(o)
for(o=p.length,n=0;n<o;++n)q.push(B.a6)
o=B.x.h(0,900)
o.toString
q.push(o)
return A.aC(s+" ["+p+"]",q)
case B.M:s=a.d
r=t.bB.a(a.b)
m=""+r.c
l=""+r.d
q=A.c([],t.bk)
for(o=s.length+1,n=0;n<o;++n)q.push(B.u)
t.e.i("R.T").a(900)
o=B.x.h(0,900)
o.toString
q.push(o)
for(o=l.length,n=0;n<o;++n)q.push(B.fM)
o=B.x.h(0,900)
o.toString
q.push(o)
for(o=m.length,n=0;n<o;++n)q.push(B.a6)
o=B.x.h(0,900)
o.toString
q.push(o)
return A.aC(s+" ["+m+"|"+l+"]",q)
case B.S:case B.N:case B.as:case B.T:q=a.d
return A.aC(q,A.aK(q.length,B.u,!0,t.L))}},
rG(a){var s,r,q,p
t.h.a(a)
s=("EquipmentSlot."+a.a.b).split(".")
if(1>=s.length)return A.b(s,1)
r=s[1]
s=a.b
if(s==null)return A.aC(r+" | <EMPTY>",null)
q=A.n8(s)
p=A.aK(r.length,B.u,!0,t.L)
B.a.k(p,B.u)
s=B.x.h(0,t.e.i("R.T").a(900))
s.toString
B.a.k(p,s)
B.a.k(p,B.u)
s=A.aC(r+" | ",p)
s.fg(0,q)
return s},
m3:function m3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hQ:function hQ(a,b,c){var _=this
_.b=null
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!0
_.a=!1},
l2:function l2(a){this.a=a},
aO:function aO(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(){},
bu:function bu(a,b,c,d,e,f,g){var _=this
_.e=null
_.f=a
_.r=b
_.x=1
_.y=c
_.z=d
_.Q=null
_.ch=e
_.a=null
_.b=!0
_.c=f
_.d=g},
ft:function ft(a,b,c){var _=this
_.e=a
_.a=null
_.b=!0
_.c=b
_.d=c},
fk:function fk(a,b,c,d){var _=this
_.e=a
_.f=b
_.a=null
_.b=!0
_.c=c
_.d=d},
hk:function hk(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.a=null
_.b=!0
_.c=e
_.d=f},
dS:function dS(a,b,c,d,e){var _=this
_.e=null
_.f=a
_.r=b
_.ch=c
_.a=null
_.b=!0
_.c=d
_.d=e},
dl:function dl(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.r=c
_.x=0
_.a=null
_.b=!0
_.c=d
_.d=e
_.$ti=f},
cU:function cU(a,b,c){var _=this
_.e=a
_.a=null
_.b=!0
_.c=b
_.d=c},
h1:function h1(a,b,c){this.a=a
this.b=b
this.$ti=c},
e2:function e2(a,b,c,d){var _=this
_.e=null
_.f=a
_.r=b
_.x=null
_.z=_.y=0
_.a=_.Q=null
_.b=!0
_.c=c
_.d=d},
k5:function k5(a){this.a=a},
k_:function k_(a,b){this.a=a
this.b=b},
jZ:function jZ(a){this.a=a},
k1:function k1(a,b){this.a=a
this.b=b},
k0:function k0(a){this.a=a},
k2:function k2(a){this.a=a},
jV:function jV(a){this.a=a},
jU:function jU(a){this.a=a},
jT:function jT(a,b){this.a=a
this.b=b},
jS:function jS(a){this.a=a},
jY:function jY(a){this.a=a},
jX:function jX(a){this.a=a},
jW:function jW(){},
k4:function k4(a){this.a=a},
k3:function k3(a){this.a=a},
bE:function bE(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.a=a
this.b=b},
fn:function fn(a,b,c,d){var _=this
_.e=a
_.r=_.f=null
_.x=b
_.a=null
_.b=!0
_.c=c
_.d=d},
ht:function ht(a,b,c,d){var _=this
_.e=!1
_.f=a
_.r=b
_.a=null
_.b=!0
_.c=c
_.d=d},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qW(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
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
fG:function fG(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.a=_.e=!1},
hZ:function hZ(a){this.c=a
this.a=!1},
ry(a){var s,r=A.mP(4000,new A.lQ(a),t.J),q=A.c([],t.c7)
for(s=0;s<4000;++s);return new A.hC(A.h0(t.j),q,A.ai(t.K,t.W),new A.a8(100,40,r,t.nr),a.b)},
lW(a){var s,r,q,p,o
for(s=a.d,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.i(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.O(A.bF(o.f))))return p}throw A.d("Solid")},
rX(a,b){var s,r,q
for(s=a.d;!0;){r=$.dI()
q=new A.i(B.c.v(r.I()*98)+1,B.c.v(r.I()*38)+1)
r=s.h(0,q)
if(!(r.c===B.b||A.O(A.bF(r.f)))&&a.ax(q)==null)return q}},
rY(a){var s,r,q,p
for(s=a.d;!0;){r=$.dI()
q=new A.i(B.c.v(r.I()*98)+1,B.c.v(r.I()*38)+1)
p=s.h(0,q)
if(p.c===B.b||A.O(A.bF(p.f)))continue
if(p.r!=null)continue
if(p.f!=null)continue
return q}},
bh(a,b,c){return B.c.v(a.I()*(c-b))+b},
r_(a,b,c){var s=b.length
if(s===1){if(0>=s)return A.b(b,0)
return b[0]}s=A.bh(a,0,s-1)
if(!(s>=0&&s<b.length))return A.b(b,s)
return b[s]},
i0:function i0(a,b){this.a=a
this.d=0
this.e=b},
lQ:function lQ(a){this.a=a},
hC:function hC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
l8:function l8(a,b){this.a=a
this.b=b},
jD:function jD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jE:function jE(a){this.a=a},
fp:function fp(a){this.a=a},
jw:function jw(a){this.a=a},
k7:function k7(){},
k8:function k8(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
mp(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.U))break
q=A.ad(q,b);++p}return p},
nr(a,b,c){return new A.aW(a,b,c.i("aW<0>"))},
cR(a,b,c){var s=A.ad(a,b)
if(c.e.h(0,s)===B.U)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
nT(a){return new A.df(a)},
bO(a,b,c){return new A.cK(c,a,b)},
dH(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=A.c([],t.D),a4=t.S,a5=A.ai(t.c1,a4)
for(s=a7.length,r=0;r<a7.length;a7.length===s||(0,A.y)(a7),++r){q=a7[r]
if(q.gbV())q=new A.iW(q)
p=a5.h(0,q)
if(p==null){a5.j(0,q,0)
p=0}a5.j(0,q,p+1)}for(s=a5.gak(a5),s=s.gA(s),o=t.q,n=t.n4,m=t.ld,l=t.bu,k=a6.a,j=J.dG(k),i=t.n;s.n();){h=s.gp(s)
q=h.a
g=h.b
f=A.c([],o)
e=A.c([],i)
for(h=j.gA(k);h.n();){d=h.gp(h)
c=q.gbE(q).a_(d,a8)
if(c<1000){B.a.k(f,d)
B.a.k(e,c)}}if(f.length===0){B.a.k(a3,q)
continue}h=A.c([],l)
for(b=0;b<f.length;++b){d=f[b]
if(!(b<e.length))return A.b(e,b)
h.push(new A.bb(d,e[b]))}d=m.a(new A.mo())
if(!!h.immutable$list)A.U(A.E("sort"))
a=h.length-1
if(a-0<=32)A.o1(h,0,a,d,n)
else A.o0(h,0,a,d,n)
a0=B.a.dW(h,0,Math.min(3*g,e.length))
B.a.c8(a0)
a1=A.c([],o)
a2=A.h0(a4)
for(;!0;){for(b=0;b<a0.length;++b){if(a2.O(0,b))continue
if(a1.length===g)break
if($.pf().I()<0.33){if(!(b<a0.length))return A.b(a0,b)
B.a.k(a1,a0[b].a)
a2.k(0,b)}}h=a1.length
if(h===g)break
else if(g-h>a0.length-a2.a)break}if(a1.length<g)B.a.k(a3,q)
for(h=a1.length,r=0;r<a1.length;a1.length===h||(0,A.y)(a1),++r)q.dr(a1[r],a8)
if(a0.length===0)B.a.k(a3,q)}for(a4=j.gA(k),s=a8.e,o=a6.c;a4.n();){n=a4.gp(a4)
if(s.h(0,n)===B.aA||s.h(0,n)===B.aB)B.a.k(o,n)}return a3},
oR(a,b){var s,r,q,p,o,n,m,l,k,j
B.a.b9(a,new A.mn())
if(0>=a.length)return A.b(a,0)
A.dH(a[0],$.pu(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.y)(s),++p)q.j(0,s[p],B.bA)
if(0>=a.length)return A.b(a,0)
a[0].e=!0
for(s=A.o6(a,1,null,A.Y(a).c),r=s.$ti,s=new A.bI(s,s.gm(s),r.i("bI<b7.E>")),o=b.a.a,r=r.i("b7.E"),n=t.c1,m=2;s.n();){l=r.a(s.d)
k=l.a
j=J.aE(k)
if(j.gm(k)<30){if(m>0){k=A.ee($.mA(),!0,n)
k.push($.nj())}else k=$.mA()
if(!B.a.O(A.dH(l,k,b),$.nj()))--m}else if(j.gm(k)<60)A.dH(l,$.pm(),b)
else if(j.gm(k)<100)A.dH(l,$.pk(),b)
else switch(o){case B.H:case B.B:case B.w:case B.W:case B.X:A.dH(l,$.pi(),b)
break
case B.F:case B.C:A.dH(l,$.pj(),b)
break}}if(m===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.y)(s),++p)q.j(0,s[p],B.bB)}},
aX:function aX(){},
i_:function i_(){},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c},
dg:function dg(a,b){this.b=a
this.$ti=b},
hf:function hf(){},
fq:function fq(){},
fd:function fd(){},
fx:function fx(){},
dK:function dK(a){this.a=a},
df:function df(a){this.a=a},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
mh:function mh(){},
ma:function ma(){},
me:function me(){},
m9:function m9(){},
mb:function mb(){},
mf:function mf(){},
mg:function mg(){},
md:function md(){},
mc:function mc(){},
m8:function m8(){},
bb:function bb(a,b){this.a=a
this.b=b},
iW:function iW(a){this.a=a},
mo:function mo(){},
mn:function mn(){},
pO(a){var s=t.q
return new A.a7(a,A.c([],s),A.c([],s),A.jI(a))},
jI(a){var s,r,q=J.aE(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gm(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.i(B.c.v(p/q.gm(a)),B.c.v(o/q.gm(a)))},
qS(a){switch(a){case B.aY:case B.ab:case B.b_:case B.cY:case B.z:return!0
default:return!1}},
e3:function e3(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
jm:function jm(a,b){this.a=a
this.b=b},
jo:function jo(){},
jp:function jp(){},
jq:function jq(a){this.a=a},
jn:function jn(a){this.a=a},
ez:function ez(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jH:function jH(a,b){this.a=a
this.b=b},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
fT:function fT(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
kg:function kg(a,b){this.a=a
this.b=b},
kA:function kA(){},
kb:function kb(a){this.a=a},
kc:function kc(){},
kd:function kd(){},
ke:function ke(){},
kf:function kf(){},
kF:function kF(){},
c3:function c3(a){this.b=a},
er:function er(a){this.b=a},
kP:function kP(a,b){this.b=a
this.a=b},
eq:function eq(a,b){this.a=a
this.b=b},
kW:function kW(a){this.a=a},
kX:function kX(){},
kY:function kY(a){this.a=a},
qq(a){var s=new A.l5(A.o4(t.h8),A.o4(t.bd))
s.e6(a)
return s},
b6(a,b,c,d){return new A.an(a,c,d,b)},
l5:function l5(a,b){this.a=null
this.b=a
this.c=b},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(a){this.b=a},
rZ(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
oM(a){var s=B.h.a1(u.s,a>>>6)+(a&63),r=s&1,q=B.h.a1(u.M,s>>>1)
return q>>>4&-r|q&15&r-1},
oH(a,b){var s=B.h.a1(u.s,1024+(a&1023))+(b&1023),r=s&1,q=B.h.a1(u.M,s>>>1)
return q>>>4&-r|q&15&r-1},
rE(a,b){return J.pz(t.n6.a(a),b)},
pQ(a){switch(a){case B.I:return B.aw
case B.v:return B.ax
case B.J:return B.ay}},
e6(a){var s,r,q,p
if(a instanceof A.a2){s=a.a
r=B.M
q=null}else if(a instanceof A.a4){s=a.y
r=B.K
q=null}else if(a instanceof A.ay){s=a.a
r=B.L
q=0}else{if(a instanceof A.dV){p=("Consumable."+a.b).split(".")
if(1>=p.length)return A.b(p,1)
s=p[1]
r=B.N}else{s=J.cT(a)
r=B.S}q=null}$.nH=$.nH+1
return new A.ab(a,r,s,q)},
rQ(a,b,c){var s,r,q=a.r
if(q!=null){if(b===q.c)return!0
s=a.t()
r=b.t()
if(s==null||r==null)return!1
return c.f.ad(s).h(0,r)}return!0},
t2(a){A.bd(a)
$.ne().U(a,$.ng())
B.d3.du(window,A.oN())},
m5(){var s=0,r=A.bi(t.z),q,p
var $async$m5=A.bj(function(a,b){if(a===1)return A.be(b,r)
while(true)switch(s){case 0:p=$.ne()
s=2
return A.a6(p.e.b_(),$async$m5)
case 2:p=A.pU(p)
B.a.k(p.a.c,t.x.a(p.gcG()))
p=$.pn()
if(p!=null){q=p.parentNode
if(q!=null)q.removeChild(p)}B.d3.du(window,A.oN())
return A.bf(null,r)}})
return A.bg($async$m5,r)}},J={
n9(a,b,c,d){return{i:a,p:b,e:c,x:d}},
lY(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.n7==null){A.rN()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.mW("Return interceptor for "+A.D(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.lw
if(o==null)o=$.lw=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.rV(a)
if(p!=null)return p
if(typeof a=="function")return B.fn
s=Object.getPrototypeOf(a)
if(s==null)return B.bK
if(s===Object.prototype)return B.bK
if(typeof q=="function"){o=$.lw
if(o==null)o=$.lw=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.b1,enumerable:false,writable:true,configurable:true})
return B.b1}return B.b1},
q_(a,b){if(a<0||a>4294967295)throw A.d(A.bK(a,0,4294967295,"length",null))
return J.q0(new Array(a),b)},
nK(a,b){if(a<0)throw A.d(A.cW("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
q0(a,b){return J.nL(A.c(a,b.i("r<0>")),b)},
nL(a,b){a.fixed$length=Array
return a},
nM(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
q1(a,b){var s,r
for(s=a.length;b<s;){r=B.h.a1(a,b)
if(r!==32&&r!==13&&!J.nM(r))break;++b}return b},
q2(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.h.av(a,s)
if(r!==32&&r!==13&&!J.nM(r))break}return b},
dF(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e9.prototype
return J.fV.prototype}if(typeof a=="string")return J.cv.prototype
if(a==null)return J.ea.prototype
if(typeof a=="boolean")return J.e8.prototype
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof A.v)return a
return J.lY(a)},
aE(a){if(typeof a=="string")return J.cv.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof A.v)return a
return J.lY(a)},
dG(a){if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof A.v)return a
return J.lY(a)},
rI(a){if(typeof a=="number")return J.da.prototype
if(typeof a=="string")return J.cv.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.dq.prototype
return a},
lX(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof A.v)return a
return J.lY(a)},
Z(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dF(a).q(a,b)},
nl(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.rR(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aE(a).h(a,b)},
nm(a,b,c){return J.dG(a).j(a,b,c)},
py(a,b,c,d){return J.lX(a).fb(a,b,c,d)},
pz(a,b){return J.rI(a).X(a,b)},
nn(a,b){return J.dG(a).C(a,b)},
pA(a,b){return J.dG(a).G(a,b)},
aF(a){return J.dF(a).gB(a)},
as(a){return J.dG(a).gA(a)},
at(a){return J.aE(a).gm(a)},
no(a){return J.lX(a).gbS(a)},
pB(a,b,c){return J.dG(a).dl(a,b,c)},
cT(a){return J.dF(a).l(a)},
a:function a(){},
e8:function e8(){},
ea:function ea(){},
cw:function cw(){},
hm:function hm(){},
dq:function dq(){},
bG:function bG(){},
r:function r(a){this.$ti=a},
kh:function kh(a){this.$ti=a},
dN:function dN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
da:function da(){},
e9:function e9(){},
fV:function fV(){},
cv:function cv(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.mM.prototype={}
J.a.prototype={
q(a,b){return a===b},
gB(a){return A.cG(a)},
l(a){return"Instance of '"+A.kH(a)+"'"}}
J.e8.prototype={
l(a){return String(a)},
dO(a,b){return b||a},
gB(a){return a?519018:218159},
$iG:1}
J.ea.prototype={
q(a,b){return null==b},
l(a){return"null"},
gB(a){return 0},
$ia1:1}
J.cw.prototype={
gB(a){return 0},
l(a){return String(a)}}
J.hm.prototype={}
J.dq.prototype={}
J.bG.prototype={
l(a){var s=a[$.oV()]
if(s==null)return this.dY(a)
return"JavaScript function for "+J.cT(s)},
$ics:1}
J.r.prototype={
k(a,b){A.Y(a).c.a(b)
if(!!a.fixed$length)A.U(A.E("add"))
a.push(b)},
bY(a,b){var s
if(!!a.fixed$length)A.U(A.E("removeAt"))
s=a.length
if(b>=s)throw A.d(A.nW(b,null))
return a.splice(b,1)[0]},
E(a,b){var s
if(!!a.fixed$length)A.U(A.E("remove"))
for(s=0;s<a.length;++s)if(J.Z(a[s],b)){a.splice(s,1)
return!0}return!1},
eN(a,b,c){var s,r,q,p,o
A.Y(a).i("G(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.O(b.$1(p)))s.push(p)
if(a.length!==r)throw A.d(A.bp(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
L(a,b){A.Y(a).i("j<1>").a(b)
if(!!a.fixed$length)A.U(A.E("addAll"))
this.e9(a,b)
return},
e9(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.bp(a))
for(r=0;r<s;++r)a.push(b[r])},
G(a,b){var s,r
A.Y(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.d(A.bp(a))}},
dl(a,b,c){var s=A.Y(a)
return new A.eh(a,s.F(c).i("1(2)").a(b),s.i("@<1>").F(c).i("eh<1,2>"))},
fs(a,b,c){var s,r,q,p=A.Y(a)
p.i("G(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(A.O(b.$1(q)))return q
if(a.length!==s)throw A.d(A.bp(a))}return c.$0()},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
dW(a,b,c){var s=a.length
if(b>s)throw A.d(A.bK(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.bK(c,b,s,"end",null))
if(b===c)return A.c([],A.Y(a))
return A.c(a.slice(b,c),A.Y(a))},
gfq(a){if(a.length>0)return a[0]
throw A.d(A.nJ())},
gdV(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.d(A.nJ())
throw A.d(A.pZ())},
c7(a,b,c,d){var s,r,q,p
A.Y(a).i("j<1>").a(d)
if(!!a.immutable$list)A.U(A.E("setRange"))
A.kM(b,c,a.length)
s=c-b
if(s===0)return
A.kL(0,"skipCount")
r=d
q=J.aE(r)
if(s>q.gm(r))throw A.d(A.pY())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
ff(a,b){var s,r
A.Y(a).i("G(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.O(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.bp(a))}return!1},
b9(a,b){var s=A.Y(a)
s.i("h(1,1)?").a(b)
if(!!a.immutable$list)A.U(A.E("sort"))
A.qj(a,b,s.c)},
c8(a){var s,r,q,p
if(!!a.immutable$list)A.U(A.E("shuffle"))
s=a.length
for(;s>1;){r=B.r.J(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
fB(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.Z(a[s],b))return s}return-1},
O(a,b){var s
for(s=0;s<a.length;++s)if(J.Z(a[s],b))return!0
return!1},
l(a){return A.mL(a,"[","]")},
gA(a){return new J.dN(a,a.length,A.Y(a).i("dN<1>"))},
gB(a){return A.cG(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.U(A.E("set length"))
if(b>a.length)A.Y(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cP(a,b))
return a[b]},
j(a,b,c){A.K(b)
A.Y(a).c.a(c)
if(!!a.immutable$list)A.U(A.E("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.cP(a,b))
a[b]=c},
w(a,b){var s=A.Y(a)
s.i("n<1>").a(b)
s=A.ee(a,!0,s.c)
this.L(s,b)
return s},
$ip:1,
$ij:1,
$in:1}
J.kh.prototype={}
J.dN.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.y(q))
s=r.c
if(s>=p){r.scu(null)
return!1}r.scu(q[s]);++r.c
return!0},
scu(a){this.d=this.$ti.i("1?").a(a)},
$iW:1}
J.da.prototype={
X(a,b){var s
A.bd(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gb0(b)
if(this.gb0(a)===s)return 0
if(this.gb0(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb0(a){return a===0?1/a<0:a<0},
aI(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.E(""+a+".toInt()"))},
d1(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.E(""+a+".ceil()"))},
am(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.E(""+a+".floor()"))},
v(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.E(""+a+".round()"))},
ap(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
bC(a,b,c){if(B.e.X(b,c)>0)throw A.d(A.oB(b))
if(this.X(a,b)<0)return b
if(this.X(a,c)>0)return c
return a},
dB(a,b){var s
if(b>20)throw A.d(A.bK(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gb0(a))return"-"+s
return s},
fY(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.bK(b,2,36,"radix",null))
s=a.toString(b)
if(B.h.av(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.U(A.E("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.h.c6("0",p)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dN(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
cd(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cQ(a,b)},
W(a,b){return(a|0)===a?a/b|0:this.cQ(a,b)},
cQ(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.E("Result of truncating division is "+A.D(s)+": "+A.D(a)+" ~/ "+b))},
cO(a,b){var s
if(a>0)s=this.eW(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
eW(a,b){return b>31?0:a>>>b},
$iam:1,
$iM:1,
$iP:1}
J.e9.prototype={$ih:1}
J.fV.prototype={}
J.cv.prototype={
av(a,b){if(b<0)throw A.d(A.cP(a,b))
if(b>=a.length)A.U(A.cP(a,b))
return a.charCodeAt(b)},
a1(a,b){if(b>=a.length)throw A.d(A.cP(a,b))
return a.charCodeAt(b)},
w(a,b){return a+b},
aL(a,b,c){return a.substring(b,A.kM(b,c,a.length))},
h_(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.a1(p,0)===133){s=J.q1(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.av(p,r)===133?J.q2(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
c6(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.dE)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ds(a,b,c){var s=b-a.length
if(s<=0)return a
return this.c6(c,s)+a},
bF(a,b,c){var s=a.length
if(c>s)throw A.d(A.bK(c,0,s,null,null))
return A.t4(a,b,c)},
X(a,b){var s
A.a5(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
l(a){return a},
gB(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cP(a,b))
return a[b]},
$iam:1,
$inU:1,
$iu:1}
A.cx.prototype={
l(a){var s="LateInitializationError: "+this.a
return s}}
A.kQ.prototype={}
A.p.prototype={}
A.b7.prototype={
gA(a){var s=this
return new A.bI(s,s.gm(s),A.B(s).i("bI<b7.E>"))}}
A.ex.prototype={
ges(){var s=J.at(this.a),r=this.c
if(r==null||r>s)return s
return r},
geY(){var s=J.at(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.at(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.a0()
return s-q},
C(a,b){var s=this,r=s.geY()+b
if(b<0||r>=s.ges())throw A.d(A.V(b,s,"index",null,null))
return J.nn(s.a,r)}}
A.bI.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.aE(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.bp(q))
s=r.c
if(s>=o){r.saA(null)
return!1}r.saA(p.C(q,s));++r.c
return!0},
saA(a){this.d=this.$ti.i("1?").a(a)},
$iW:1}
A.cz.prototype={
gA(a){var s=A.B(this)
return new A.eg(J.as(this.a),this.b,s.i("@<1>").F(s.Q[1]).i("eg<1,2>"))},
gm(a){return J.at(this.a)}}
A.e_.prototype={$ip:1}
A.eg.prototype={
n(){var s=this,r=s.b
if(r.n()){s.saA(s.c.$1(r.gp(r)))
return!0}s.saA(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
saA(a){this.a=this.$ti.i("2?").a(a)}}
A.eh.prototype={
gm(a){return J.at(this.a)},
C(a,b){return this.b.$1(J.nn(this.a,b))}}
A.aT.prototype={
gA(a){return new A.eA(J.as(this.a),this.b,this.$ti.i("eA<1>"))}}
A.eA.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.O(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.aw.prototype={}
A.d4.prototype={
l(a){return A.mQ(this)},
$ia0:1}
A.dU.prototype={
gm(a){return this.a},
aZ(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.aZ(0,b))return null
return this.b[A.a5(b)]},
G(a,b){var s,r,q,p,o,n=this.$ti
n.i("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.a5(s[p])
b.$2(o,n.a(q[o]))}}}
A.aa.prototype={
bn(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.pW(r)
o=A.mO(A.rf(),q,r,s.Q[1])
A.oF(p.a,o)
p.$map=o}return o},
h(a,b){return this.bn().h(0,b)},
G(a,b){this.$ti.i("~(1,2)").a(b)
this.bn().G(0,b)},
gm(a){var s=this.bn()
return s.gm(s)}}
A.k6.prototype={
$1(a){return this.a.b(a)},
$S:35}
A.l0.prototype={
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
A.em.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.fW.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hT.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.kC.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.e0.prototype={}
A.eU.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ib9:1}
A.co.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.oT(r==null?"unknown":r)+"'"},
$ics:1,
gh6(){return this},
$C:"$1",
$R:1,
$D:null}
A.fr.prototype={$C:"$0",$R:0}
A.fs.prototype={$C:"$2",$R:2}
A.hI.prototype={}
A.hD.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.oT(s)+"'"}}
A.d1.prototype={
q(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.d1))return!1
return this.$_target===b.$_target&&this.a===b.a},
gB(a){return(A.m7(this.a)^A.cG(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kH(t.K.a(this.a))+"'")}}
A.hv.prototype={
l(a){return"RuntimeError: "+this.a}}
A.i1.prototype={
l(a){return"Assertion failed: "+A.fF(this.a)}}
A.aJ.prototype={
gm(a){return this.a},
ga9(a){return new A.ec(this,A.B(this).i("ec<1>"))},
gc3(a){var s=this,r=A.B(s)
return A.nQ(s.ga9(s),new A.kj(s),r.c,r.Q[1])},
aZ(a,b){var s=this.de(b)
return s},
de(a){var s=this,r=s.d
if(r==null)return!1
return s.az(s.aP(r,s.ay(a)),a)>=0},
L(a,b){A.B(this).i("a0<1,2>").a(b).G(0,new A.ki(this))},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bo(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bo(p,b)
q=r==null?n:r.b
return q}else return o.df(b)},
df(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.aP(p,q.ay(a))
r=q.az(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.B(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.cf(s==null?q.b=q.bs():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cf(r==null?q.c=q.bs():r,b,c)}else q.dh(b,c)},
dh(a,b){var s,r,q,p,o=this,n=A.B(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.bs()
r=o.ay(a)
q=o.aP(s,r)
if(q==null)o.bz(s,r,[o.bt(a,b)])
else{p=o.az(q,a)
if(p>=0)q[p].b=b
else q.push(o.bt(a,b))}},
E(a,b){var s=this.dg(b)
return s},
dg(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ay(a)
r=o.aP(n,s)
q=o.az(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.f6(p)
if(r.length===0)o.cv(n,s)
return p.b},
aW(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.br()}},
G(a,b){var s,r,q=this
A.B(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.bp(q))
s=s.c}},
cf(a,b,c){var s,r=this,q=A.B(r)
q.c.a(b)
q.Q[1].a(c)
s=r.bo(a,b)
if(s==null)r.bz(a,b,r.bt(b,c))
else s.b=c},
br(){this.r=this.r+1&67108863},
bt(a,b){var s=this,r=A.B(s),q=new A.kl(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.br()
return q},
f6(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.br()},
ay(a){return J.aF(a)&0x3ffffff},
az(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Z(a[r].a,b))return r
return-1},
l(a){return A.mQ(this)},
bo(a,b){return a[b]},
aP(a,b){return a[b]},
bz(a,b,c){a[b]=c},
cv(a,b){delete a[b]},
bs(){var s="<non-identifier-key>",r=Object.create(null)
this.bz(r,s,r)
this.cv(r,s)
return r},
$ikk:1}
A.kj.prototype={
$1(a){var s=this.a,r=A.B(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.B(this.a).i("2(1)")}}
A.ki.prototype={
$2(a,b){var s=this.a,r=A.B(s)
s.j(0,r.c.a(a),r.Q[1].a(b))},
$S(){return A.B(this.a).i("~(1,2)")}}
A.kl.prototype={}
A.ec.prototype={
gm(a){return this.a.a},
gA(a){var s=this.a,r=new A.ed(s,s.r,this.$ti.i("ed<1>"))
r.c=s.e
return r}}
A.ed.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.bp(q))
s=r.c
if(s==null){r.sce(null)
return!1}else{r.sce(s.a)
r.c=s.c
return!0}},
sce(a){this.d=this.$ti.i("1?").a(a)},
$iW:1}
A.m_.prototype={
$1(a){return this.a(a)},
$S:21}
A.m0.prototype={
$2(a,b){return this.a(a,b)},
$S:26}
A.m1.prototype={
$1(a){return this.a(A.a5(a))},
$S:27}
A.lg.prototype={
aS(){var s=this.b
if(s===this)throw A.d(new A.cx("Local '"+this.a+"' has not been initialized."))
return s},
a2(){var s=this.b
if(s===this)throw A.d(A.nO(this.a))
return s}}
A.h6.prototype={$inA:1}
A.cE.prototype={$iaS:1}
A.dd.prototype={
gm(a){return a.length},
$iz:1}
A.cD.prototype={
h(a,b){A.bS(b,a,a.length)
return a[b]},
j(a,b,c){A.K(b)
A.oo(c)
A.bS(b,a,a.length)
a[b]=c},
$ip:1,
$ij:1,
$in:1}
A.ej.prototype={
j(a,b,c){A.K(b)
A.K(c)
A.bS(b,a,a.length)
a[b]=c},
$ip:1,
$ij:1,
$in:1}
A.ei.prototype={$imK:1}
A.h7.prototype={
h(a,b){A.bS(b,a,a.length)
return a[b]}}
A.h8.prototype={
h(a,b){A.bS(b,a,a.length)
return a[b]}}
A.h9.prototype={
h(a,b){A.bS(b,a,a.length)
return a[b]}}
A.ha.prototype={
h(a,b){A.bS(b,a,a.length)
return a[b]}}
A.hb.prototype={
h(a,b){A.bS(b,a,a.length)
return a[b]}}
A.de.prototype={
gm(a){return a.length},
h(a,b){A.bS(b,a,a.length)
return a[b]},
$iqo:1}
A.ek.prototype={
gm(a){return a.length},
h(a,b){A.bS(b,a,a.length)
return a[b]},
$iqp:1}
A.eN.prototype={}
A.eO.prototype={}
A.eP.prototype={}
A.eQ.prototype={}
A.b8.prototype={
i(a){return A.lG(v.typeUniverse,this,a)},
F(a){return A.qL(v.typeUniverse,this,a)}}
A.ii.prototype={}
A.f_.prototype={
l(a){return A.ar(this.a,null)},
$io8:1}
A.id.prototype={
l(a){return this.a}}
A.f0.prototype={$ica:1}
A.ld.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:13}
A.lc.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:67}
A.le.prototype={
$0(){this.a.$0()},
$S:8}
A.lf.prototype={
$0(){this.a.$0()},
$S:8}
A.eZ.prototype={
e7(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.by(new A.lF(this,b),0),a)
else throw A.d(A.E("`setTimeout()` not found."))},
e8(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.by(new A.lE(this,a,Date.now(),b),0),a)
else throw A.d(A.E("Periodic timer."))},
fi(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.d(A.E("Canceling a timer."))},
$ihN:1}
A.lF.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.lE.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.e.cd(s,o)}q.c=p
r.d.$1(q)},
$S:8}
A.eB.prototype={
a3(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.cj(b)
else{s=r.a
if(q.i("ah<1>").b(b))s.cm(b)
else s.aB(q.c.a(b))}},
bD(a,b){var s=this.a
if(this.b)s.V(a,b)
else s.bd(a,b)},
$ifu:1}
A.lJ.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.lK.prototype={
$2(a,b){this.a.$2(1,new A.e0(a,t.l.a(b)))},
$S:28}
A.lP.prototype={
$2(a,b){this.a(A.K(a),b)},
$S:30}
A.dy.prototype={
l(a){return"IterationMarker("+this.b+", "+A.D(this.a)+")"}}
A.cf.prototype={
gp(a){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gp(s)},
n(){var s,r,q,p,o,n,m=this
for(s=m.$ti.i("W<1>");!0;){r=m.c
if(r!=null)if(r.n())return!0
else m.scF(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.dy){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sci(null)
return!1}if(0>=o.length)return A.b(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.as(r))
if(n instanceof A.cf){r=m.d
if(r==null)r=m.d=[]
B.a.k(r,m.a)
m.a=n.a
continue}else{m.scF(n)
continue}}}}else{m.sci(q)
return!0}}return!1},
sci(a){this.b=this.$ti.i("1?").a(a)},
scF(a){this.c=this.$ti.i("W<1>?").a(a)},
$iW:1}
A.eW.prototype={
gA(a){return new A.cf(this.a(),this.$ti.i("cf<1>"))}}
A.dP.prototype={
l(a){return A.D(this.a)},
$iL:1,
gaK(){return this.b}}
A.eD.prototype={}
A.bP.prototype={
bv(){},
bw(){},
sbu(a){this.dy=this.$ti.i("bP<1>?").a(a)},
scI(a){this.fr=this.$ti.i("bP<1>?").a(a)}}
A.eE.prototype={
geF(){return this.c<4},
cP(a,b,c,d){var s,r,q,p,o,n=this,m=A.B(n)
m.i("~(1)?").a(a)
t.Z.a(c)
if((n.c&4)!==0){m=new A.dw($.C,c,m.i("dw<1>"))
m.eR()
return m}s=$.C
r=d?1:0
t.bm.F(m.c).i("1(2)").a(a)
A.ob(s,b)
q=c==null?A.oC():c
t.M.a(q)
m=m.i("bP<1>")
p=new A.bP(n,a,s,r,m)
p.scI(p)
p.sbu(p)
m.a(p)
p.dx=n.c&1
o=n.e
n.seC(p)
p.sbu(null)
p.scI(o)
if(o==null)n.sex(p)
else o.sbu(p)
if(n.d==n.e)A.lO(n.a)
return p},
cL(a){A.B(this).i("aB<1>").a(a)},
cM(a){A.B(this).i("aB<1>").a(a)},
ea(){if((this.c&4)!==0)return new A.ba("Cannot add new events after calling close")
return new A.ba("Cannot add new events while doing an addStream")},
k(a,b){var s=this
A.B(s).c.a(b)
if(!s.geF())throw A.d(s.ea())
s.aE(b)},
sex(a){this.d=A.B(this).i("bP<1>?").a(a)},
seC(a){this.e=A.B(this).i("bP<1>?").a(a)},
$ihF:1,
$iiI:1,
$ibc:1}
A.eC.prototype={
aE(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.i("bQ<1>");s!=null;s=s.dy)s.cg(new A.bQ(a,r))}}
A.jM.prototype={
$0(){this.b.bh(this.c.a(null))},
$S:0}
A.jO.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.V(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.V(q.e.aS(),q.f.aS())},
$S:9}
A.jN.prototype={
$1(a){var s,r,q=this,p=q.x
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.nm(s,q.b,a)
if(r.b===0)q.c.aB(A.q7(s,p))}else if(r.b===0&&!q.e)q.c.V(q.f.aS(),q.r.aS())},
$S(){return this.x.i("a1(0)")}}
A.dv.prototype={
bD(a,b){A.f8(a,"error",t.K)
if((this.a.a&30)!==0)throw A.d(A.ao("Future already completed"))
if(b==null)b=A.mD(a)
this.V(a,b)},
aY(a){return this.bD(a,null)},
$ifu:1}
A.ac.prototype={
a3(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.ao("Future already completed"))
s.cj(r.i("1/").a(b))},
aG(a){return this.a3(a,null)},
V(a,b){this.a.bd(a,b)}}
A.dA.prototype={
a3(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.ao("Future already completed"))
s.bh(r.i("1/").a(b))},
aG(a){return this.a3(a,null)},
V(a,b){this.a.V(a,b)}}
A.bR.prototype={
fD(a){if((this.c&15)!==6)return!0
return this.b.b.bZ(t.iW.a(this.d),a.a,t.k4,t.K)},
fw(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.fU(q,m,a.b,o,n,t.l)
else p=l.bZ(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bE.b(A.bz(s))){if((r.c&1)!==0)throw A.d(A.cW("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cW("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.F.prototype={
b4(a,b,c){var s,r,q,p=this.$ti
p.F(c).i("1/(2)").a(a)
s=$.C
if(s===B.l){if(b!=null&&!t.ng.b(b)&&!t.y.b(b))throw A.d(A.mC(b,"onError",u.w))}else{c.i("@<0/>").F(p.c).i("1(2)").a(a)
if(b!=null)b=A.rj(b,s)}r=new A.F(s,c.i("F<0>"))
q=b==null?1:3
this.aM(new A.bR(r,q,a,b,p.i("@<1>").F(c).i("bR<1,2>")))
return r},
c_(a,b){return this.b4(a,null,b)},
cR(a,b,c){var s,r=this.$ti
r.F(c).i("1/(2)").a(a)
s=new A.F($.C,c.i("F<0>"))
this.aM(new A.bR(s,19,a,b,r.i("@<1>").F(c).i("bR<1,2>")))
return s},
eU(a){this.a=this.a&1|16
this.c=a},
bf(a){this.a=a.a&30|this.a&1
this.c=a.c},
aM(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.aM(a)
return}r.bf(s)}A.cO(null,null,r.b,t.M.a(new A.lj(r,a)))}},
cH(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.cH(a)
return}m.bf(n)}l.a=m.aU(a)
A.cO(null,null,m.b,t.M.a(new A.lr(l,m)))}},
aT(){var s=t.F.a(this.c)
this.c=null
return this.aU(s)},
aU(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cl(a){var s,r,q,p=this
p.a^=2
try{a.b4(new A.ln(p),new A.lo(p),t.P)}catch(q){s=A.bz(q)
r=A.bU(q)
A.oQ(new A.lp(p,s,r))}},
bh(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("ah<1>").b(a))if(q.b(a))A.lm(a,r)
else r.cl(a)
else{s=r.aT()
q.c.a(a)
r.a=8
r.c=a
A.dx(r,s)}},
aB(a){var s,r=this
r.$ti.c.a(a)
s=r.aT()
r.a=8
r.c=a
A.dx(r,s)},
V(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.aT()
this.eU(A.je(a,b))
A.dx(this,s)},
cj(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("ah<1>").b(a)){this.cm(a)
return}this.ec(s.c.a(a))},
ec(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.cO(null,null,s.b,t.M.a(new A.ll(s,a)))},
cm(a){var s=this,r=s.$ti
r.i("ah<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.cO(null,null,s.b,t.M.a(new A.lq(s,a)))}else A.lm(a,s)
return}s.cl(a)},
bd(a,b){t.l.a(b)
this.a^=2
A.cO(null,null,this.b,t.M.a(new A.lk(this,a,b)))},
$iah:1}
A.lj.prototype={
$0(){A.dx(this.a,this.b)},
$S:0}
A.lr.prototype={
$0(){A.dx(this.b,this.a.a)},
$S:0}
A.ln.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.aB(p.$ti.c.a(a))}catch(q){s=A.bz(q)
r=A.bU(q)
p.V(s,r)}},
$S:13}
A.lo.prototype={
$2(a,b){this.a.V(t.K.a(a),t.l.a(b))},
$S:42}
A.lp.prototype={
$0(){this.a.V(this.b,this.c)},
$S:0}
A.ll.prototype={
$0(){this.a.aB(this.b)},
$S:0}
A.lq.prototype={
$0(){A.lm(this.b,this.a)},
$S:0}
A.lk.prototype={
$0(){this.a.V(this.b,this.c)},
$S:0}
A.lu.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.fT(t.mY.a(q.d),t.z)}catch(p){s=A.bz(p)
r=A.bU(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.je(s,r)
o.b=!0
return}if(l instanceof A.F&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.g7.b(l)){n=m.b.a
q=m.a
q.c=l.c_(new A.lv(n),t.z)
q.b=!1}},
$S:0}
A.lv.prototype={
$1(a){return this.a},
$S:45}
A.lt.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bZ(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bz(l)
r=A.bU(l)
q=this.a
q.c=A.je(s,r)
q.b=!0}},
$S:0}
A.ls.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.fD(s)&&p.a.e!=null){p.c=p.a.fw(s)
p.b=!1}}catch(o){r=A.bz(o)
q=A.bU(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.je(r,q)
n.b=!0}},
$S:0}
A.i2.prototype={}
A.c5.prototype={
gm(a){var s={},r=new A.F($.C,t.hy)
s.a=0
this.bR(new A.kU(s,this),!0,new A.kV(s,r),r.gei())
return r}}
A.kU.prototype={
$1(a){A.B(this.b).c.a(a);++this.a.a},
$S(){return A.B(this.b).i("~(1)")}}
A.kV.prototype={
$0(){this.b.bh(this.a.a)},
$S:0}
A.aB.prototype={}
A.eV.prototype={
geJ(){var s,r=this
if((r.b&8)===0)return A.B(r).i("ce<1>?").a(r.a)
s=A.B(r)
return s.i("ce<1>?").a(s.i("iH<1>").a(r.a).gc4())},
eu(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.bx(A.B(q).i("bx<1>"))
return A.B(q).i("bx<1>").a(s)}r=A.B(q)
s=r.i("iH<1>").a(q.a).gc4()
return r.i("bx<1>").a(s)},
geZ(){var s=this.a
if((this.b&8)!==0)s=t.gL.a(s).gc4()
return A.B(this).i("cc<1>").a(s)},
ee(){if((this.b&4)!==0)return new A.ba("Cannot add event after closing")
return new A.ba("Cannot add event while adding a stream")},
k(a,b){var s,r=this,q=A.B(r)
q.c.a(b)
s=r.b
if(s>=4)throw A.d(r.ee())
if((s&1)!==0)r.aE(b)
else if((s&3)===0)r.eu().k(0,new A.bQ(b,q.i("bQ<1>")))},
cP(a,b,c,d){var s,r,q,p,o=this,n=A.B(o)
n.i("~(1)?").a(a)
t.Z.a(c)
if((o.b&3)!==0)throw A.d(A.ao("Stream has already been listened to."))
s=A.qv(o,a,b,c,d,n.c)
r=o.geJ()
q=o.b|=1
if((q&8)!==0){p=n.i("iH<1>").a(o.a)
p.sc4(s)
p.fR(0)}else o.a=s
s.eV(r)
n=t.M.a(new A.lC(o))
q=s.e
s.e=q|32
n.$0()
s.e&=4294967263
s.cn((q&4)!==0)
return s},
cL(a){var s=this,r=A.B(s)
r.i("aB<1>").a(a)
if((s.b&8)!==0)r.i("iH<1>").a(s.a).h8(0)
A.lO(s.e)},
cM(a){var s=this,r=A.B(s)
r.i("aB<1>").a(a)
if((s.b&8)!==0)r.i("iH<1>").a(s.a).fR(0)
A.lO(s.f)},
$ihF:1,
$iiI:1,
$ibc:1}
A.lC.prototype={
$0(){A.lO(this.a.d)},
$S:0}
A.i3.prototype={
aE(a){var s=this.$ti
s.c.a(a)
this.geZ().cg(new A.bQ(a,s.i("bQ<1>")))}}
A.dt.prototype={}
A.bw.prototype={
gB(a){return(A.cG(this.a)^892482866)>>>0},
q(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bw&&b.a===this.a}}
A.cc.prototype={
bv(){this.x.cL(this)},
bw(){this.x.cM(this)}}
A.du.prototype={
eV(a){var s=this
A.B(s).i("ce<1>?").a(a)
if(a==null)return
s.sbx(a)
if(a.c!=null){s.e|=64
a.b6(s)}},
bv(){},
bw(){},
cg(a){var s=this,r=A.B(s),q=r.i("bx<1>?").a(s.r)
if(q==null)q=new A.bx(r.i("bx<1>"))
s.sbx(q)
q.k(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.b6(s)}},
aE(a){var s,r=this,q=A.B(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.dw(r.a,a,q)
r.e&=4294967263
r.cn((s&4)!==0)},
cn(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.sbx(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.bv()
else q.bw()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.b6(q)},
sbx(a){this.r=A.B(this).i("ce<1>?").a(a)},
$iaB:1,
$ibc:1}
A.dz.prototype={
bR(a,b,c,d){var s=A.B(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.cP(s.i("~(1)?").a(a),d,c,b===!0)},
bQ(a){return this.bR(a,null,null,null)}}
A.i8.prototype={}
A.bQ.prototype={}
A.ce.prototype={
b6(a){var s,r=this
r.$ti.i("bc<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.oQ(new A.lz(r,a))
r.a=1}}
A.lz.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("bc<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.B(r).i("bc<1>").a(s).aE(r.b)},
$S:0}
A.bx.prototype={
k(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.dw.prototype={
eR(){var s=this
if((s.b&2)!==0)return
A.cO(null,null,s.a,t.M.a(s.geS()))
s.b|=2},
eT(){var s,r=this,q=r.b&=4294967293
if(q>=4)return
r.b=q|1
s=r.c
if(s!=null)r.a.dv(s)},
$iaB:1}
A.iJ.prototype={}
A.f3.prototype={$ioa:1}
A.lN.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.l(0)
throw s},
$S:0}
A.iB.prototype={
dv(a){var s,r,q,p,o
t.M.a(a)
try{if(B.l===$.C){a.$0()
return}A.ow(null,null,this,a,t.H)}catch(q){s=A.bz(q)
r=A.bU(q)
p=t.K.a(s)
o=t.l.a(r)
A.j8(p,o)}},
dw(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.l===$.C){a.$1(b)
return}A.ox(null,null,this,a,b,t.H,c)}catch(q){s=A.bz(q)
r=A.bU(q)
p=t.K.a(s)
o=t.l.a(r)
A.j8(p,o)}},
bB(a){return new A.lA(this,t.M.a(a))},
cZ(a,b){return new A.lB(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
fT(a,b){b.i("0()").a(a)
if($.C===B.l)return a.$0()
return A.ow(null,null,this,a,b)},
bZ(a,b,c,d){c.i("@<0>").F(d).i("1(2)").a(a)
d.a(b)
if($.C===B.l)return a.$1(b)
return A.ox(null,null,this,a,b,c,d)},
fU(a,b,c,d,e,f){d.i("@<0>").F(e).F(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.C===B.l)return a.$2(b,c)
return A.rk(null,null,this,a,b,c,d,e,f)},
bW(a,b,c,d){return b.i("@<0>").F(c).F(d).i("1(2,3)").a(a)}}
A.lA.prototype={
$0(){return this.a.dv(this.b)},
$S:0}
A.lB.prototype={
$1(a){var s=this.c
return this.a.dw(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.ly.prototype={
ay(a){return A.m7(a)&1073741823},
az(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.eJ.prototype={
h(a,b){if(!A.O(this.z.$1(b)))return null
return this.e_(b)},
j(a,b,c){var s=this.$ti
this.e1(s.c.a(b),s.Q[1].a(c))},
aZ(a,b){if(!A.O(this.z.$1(b)))return!1
return this.dZ(b)},
E(a,b){if(!A.O(this.z.$1(b)))return null
return this.e0(b)},
ay(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
az(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(A.O(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.lx.prototype={
$1(a){return this.a.b(a)},
$S:49}
A.eK.prototype={
gA(a){var s=this,r=new A.eL(s,s.r,s.$ti.i("eL<1>"))
r.c=s.e
return r},
gm(a){return this.a},
O(a,b){var s
if(typeof b=="number"&&(b&1073741823)===b){s=this.c
if(s==null)return!1
return t.nF.a(s[b])!=null}else return this.ej(b)},
ej(a){var s=this.d
if(s==null)return!1
return this.bm(s[J.aF(a)&1073741823],a)>=0},
k(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.co(s==null?q.b=A.mY():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.co(r==null?q.c=A.mY():r,b)}else return q.eg(0,b)},
eg(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.mY()
r=J.aF(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.bg(b)]
else{if(p.bm(q,b)>=0)return!1
q.push(p.bg(b))}return!0},
E(a,b){var s=this.eL(0,b)
return s},
eL(a,b){var s,r,q,p,o=this.d
if(o==null)return!1
s=b.gB(b)&1073741823
r=o[s]
q=this.bm(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.eh(p)
return!0},
co(a,b){this.$ti.c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.bg(b)
return!0},
cq(){this.r=this.r+1&1073741823},
bg(a){var s,r=this,q=new A.iq(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cq()
return q},
eh(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cq()},
bm(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Z(a[r].a,b))return r
return-1}}
A.iq.prototype={}
A.eL.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.bp(q))
else if(r==null){s.scp(null)
return!1}else{s.scp(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
scp(a){this.d=this.$ti.i("1?").a(a)},
$iW:1}
A.e7.prototype={}
A.km.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:50}
A.m.prototype={
gA(a){return new A.bI(a,this.gm(a),A.bk(a).i("bI<m.E>"))},
C(a,b){return this.h(a,b)},
al(a,b,c,d){var s,r=A.bk(a)
d=r.i("m.E").a(r.i("m.E?").a(d))
A.kM(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
l(a){return A.mL(a,"[","]")}}
A.ef.prototype={}
A.kp.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.D(a)
r.a=s+": "
r.a+=A.D(b)},
$S:66}
A.A.prototype={
G(a,b){var s,r,q=A.bk(a)
q.i("~(A.K,A.V)").a(b)
for(s=J.as(this.ga9(a)),q=q.i("A.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gak(a){return J.pB(this.ga9(a),new A.kr(a),A.bk(a).i("db<A.K,A.V>"))},
gm(a){return J.at(this.ga9(a))},
l(a){return A.mQ(a)},
$ia0:1}
A.kr.prototype={
$1(a){var s,r=this.a,q=A.bk(r)
q.i("A.K").a(a)
s=q.i("A.V")
return new A.db(a,s.a(J.nl(r,a)),q.i("@<A.K>").F(s).i("db<1,2>"))},
$S(){return A.bk(this.a).i("db<A.K,A.V>(A.K)")}}
A.et.prototype={
l(a){return A.mL(this,"{","}")}}
A.eR.prototype={$ip:1,$ij:1,$io_:1}
A.f4.prototype={}
A.cq.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.cq&&this.a===b.a&&!0},
X(a,b){return B.e.X(this.a,t.cs.a(b).a)},
gB(a){var s=this.a
return(s^B.e.cO(s,30))&1073741823},
l(a){var s=this,r=A.pK(A.qg(s)),q=A.fz(A.qe(s)),p=A.fz(A.qa(s)),o=A.fz(A.qb(s)),n=A.fz(A.qd(s)),m=A.fz(A.qf(s)),l=A.pL(A.qc(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
return k},
$iam:1}
A.ae.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.ae&&this.a===b.a},
gB(a){return B.e.gB(this.a)},
X(a,b){return B.e.X(this.a,t.U.a(b).a)},
l(a){var s,r,q,p,o,n=this.a,m=B.e.W(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.e.W(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.e.W(n,1e6)
p=q<10?"0":""
o=B.h.ds(B.e.l(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o},
$iam:1}
A.lh.prototype={}
A.L.prototype={
gaK(){return A.bU(this.$thrownJsError)}}
A.dO.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fF(s)
return"Assertion failed"}}
A.ca.prototype={}
A.hg.prototype={
l(a){return"Throw of null."}}
A.bA.prototype={
gbl(){return"Invalid argument"+(!this.a?"(s)":"")},
gbk(){return""},
l(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+A.D(n),l=q.gbl()+o+m
if(!q.a)return l
s=q.gbk()
r=A.fF(q.b)
return l+s+": "+r}}
A.di.prototype={
gbl(){return"RangeError"},
gbk(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.D(q):""
else if(q==null)s=": Not greater than or equal to "+A.D(r)
else if(q>r)s=": Not in inclusive range "+A.D(r)+".."+A.D(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.D(r)
return s}}
A.fS.prototype={
gbl(){return"RangeError"},
gbk(){if(A.K(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.hV.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.hS.prototype={
l(a){var s="UnimplementedError: "+this.a
return s}}
A.ba.prototype={
l(a){return"Bad state: "+this.a}}
A.fv.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fF(s)+"."}}
A.hj.prototype={
l(a){return"Out of Memory"},
gaK(){return null},
$iL:1}
A.ew.prototype={
l(a){return"Stack Overflow"},
gaK(){return null},
$iL:1}
A.fy.prototype={
l(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.ie.prototype={
l(a){return"Exception: "+this.a}}
A.j.prototype={
dl(a,b,c){var s=A.B(this)
return A.nQ(this,s.F(c).i("1(j.E)").a(b),s.i("j.E"),c)},
G(a,b){var s
A.B(this).i("~(j.E)").a(b)
for(s=this.gA(this);s.n();)b.$1(s.gp(s))},
gm(a){var s,r=this.gA(this)
for(s=0;r.n();)++s
return s},
C(a,b){var s,r,q
A.kL(b,"index")
for(s=this.gA(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.d(A.V(b,this,"index",null,r))},
l(a){return A.nI(this,"(",")")}}
A.W.prototype={}
A.db.prototype={
l(a){return"MapEntry("+A.D(this.a)+": "+A.D(this.b)+")"}}
A.a1.prototype={
gB(a){return A.v.prototype.gB.call(this,this)},
l(a){return"null"}}
A.v.prototype={$iv:1,
q(a,b){return this===b},
gB(a){return A.cG(this)},
l(a){return"Instance of '"+A.kH(this)+"'"},
toString(){return this.l(this)}}
A.iM.prototype={
l(a){return""},
$ib9:1}
A.hG.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.q.prototype={}
A.jc.prototype={
gm(a){return a.length}}
A.ff.prototype={
l(a){return String(a)}}
A.fg.prototype={
l(a){return String(a)}}
A.fl.prototype={}
A.fm.prototype={
gbS(a){return new A.cL(a,"load",!1,t.bz)}}
A.cl.prototype={
sao(a,b){a.height=b},
sar(a,b){a.width=b},
dM(a,b){return a.getContext(b)},
$icl:1}
A.bn.prototype={
gm(a){return a.length}}
A.jx.prototype={
gm(a){return a.length}}
A.J.prototype={$iJ:1}
A.d5.prototype={
ef(a,b){var s=$.oU(),r=s[b]
if(typeof r=="string")return r
r=this.f_(a,b)
s[b]=r
return r},
f_(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.oW()+b
if(s in a)return s
return b},
gm(a){return a.length}}
A.jy.prototype={}
A.b4.prototype={}
A.bC.prototype={}
A.jz.prototype={
gm(a){return a.length}}
A.jA.prototype={
gm(a){return a.length}}
A.jB.prototype={
gm(a){return a.length},
h(a,b){return a[b]}}
A.bD.prototype={$ibD:1}
A.c0.prototype={
l(a){return String(a)},
$ic0:1}
A.dX.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.mx.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.dY.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.D(r)+", "
s=a.top
s.toString
return r+A.D(s)+") "+A.D(this.gar(a))+" x "+A.D(this.gao(a))},
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
if(s===r){s=J.lX(b)
s=this.gar(a)===s.gar(b)&&this.gao(a)===s.gao(b)}else s=!1}else s=!1}else s=!1
return s},
gB(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.cF(r,s,this.gar(a),this.gao(a))},
gcB(a){return a.height},
gao(a){var s=this.gcB(a)
s.toString
return s},
gcS(a){return a.width},
gar(a){var s=this.gcS(a)
s.toString
return s},
$ibt:1}
A.fB.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
A.a5(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.jC.prototype={
gm(a){return a.length}}
A.a9.prototype={
l(a){return a.localName},
gbS(a){return new A.cL(a,"load",!1,t.bz)},
$ia9:1}
A.l.prototype={$il:1}
A.e.prototype={
fb(a,b,c,d){t.du.a(c)
if(c!=null)this.eb(a,b,c,!1)},
eb(a,b,c,d){return a.addEventListener(b,A.by(t.du.a(c),1),!1)},
$ie:1}
A.aG.prototype={$iaG:1}
A.fH.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.et.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.fI.prototype={
gm(a){return a.length}}
A.fL.prototype={
gm(a){return a.length}}
A.aH.prototype={$iaH:1}
A.ka.prototype={
gm(a){return a.length}}
A.ct.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fh.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.e5.prototype={
fK(a,b,c){return a.open(b,c)}}
A.cu.prototype={}
A.d9.prototype={$id9:1}
A.bH.prototype={$ibH:1}
A.ko.prototype={
l(a){return String(a)}}
A.cB.prototype={}
A.kt.prototype={
gm(a){return a.length}}
A.h2.prototype={
h(a,b){return A.ci(a.get(A.a5(b)))},
G(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.ci(r.value[1]))}},
ga9(a){var s=A.c([],t.s)
this.G(a,new A.kw(s))
return s},
gm(a){return a.size},
$ia0:1}
A.kw.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:6}
A.h3.prototype={
h(a,b){return A.ci(a.get(A.a5(b)))},
G(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.ci(r.value[1]))}},
ga9(a){var s=A.c([],t.s)
this.G(a,new A.kx(s))
return s},
gm(a){return a.size},
$ia0:1}
A.kx.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:6}
A.aL.prototype={$iaL:1}
A.h4.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.ib.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.aM.prototype={$iaM:1}
A.w.prototype={
l(a){var s=a.nodeValue
return s==null?this.dX(a):s},
$iw:1}
A.el.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fh.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.aN.prototype={
gm(a){return a.length},
$iaN:1}
A.hn.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.d8.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.hu.prototype={
h(a,b){return A.ci(a.get(A.a5(b)))},
G(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.ci(r.value[1]))}},
ga9(a){var s=A.c([],t.s)
this.G(a,new A.kO(s))
return s},
gm(a){return a.size},
$ia0:1}
A.kO.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:6}
A.hw.prototype={
gm(a){return a.length}}
A.aA.prototype={$iaA:1}
A.hA.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fm.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.aP.prototype={$iaP:1}
A.hB.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.cA.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.aQ.prototype={
gm(a){return a.length},
$iaQ:1}
A.hE.prototype={
h(a,b){return a.getItem(A.a5(b))},
G(a,b){var s,r,q
t.gS.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga9(a){var s=A.c([],t.s)
this.G(a,new A.kT(s))
return s},
gm(a){return a.length},
$ia0:1}
A.kT.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:20}
A.ap.prototype={$iap:1}
A.aD.prototype={$iaD:1}
A.ak.prototype={$iak:1}
A.hL.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.gJ.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.hM.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.dQ.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.kZ.prototype={
gm(a){return a.length}}
A.aR.prototype={$iaR:1}
A.hO.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.ki.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.l_.prototype={
gm(a){return a.length}}
A.bv.prototype={}
A.l3.prototype={
l(a){return String(a)}}
A.dr.prototype={$idr:1}
A.hY.prototype={
gm(a){return a.length}}
A.ds.prototype={
du(a,b){var s
t.hv.a(b)
this.ev(a)
s=A.oz(b,t.cZ)
s.toString
return this.eO(a,s)},
eO(a,b){return a.requestAnimationFrame(A.by(t.hv.a(b),1))},
ev(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.i6.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.d5.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.eF.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.D(r)+", "
s=a.top
s.toString
s=r+A.D(s)+") "
r=a.width
r.toString
r=s+A.D(r)+" x "
s=a.height
s.toString
return r+A.D(s)},
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
r=J.lX(b)
if(s===r.gar(b)){s=a.height
s.toString
r=s===r.gao(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gB(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.cF(p,s,r,q)},
gcB(a){return a.height},
gao(a){var s=a.height
s.toString
return s},
gcS(a){return a.width},
gar(a){var s=a.width
s.toString
return s}}
A.ij.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.ef.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.eM.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fh.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.iF.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.hH.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.iN.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.lv.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$in:1}
A.mI.prototype={}
A.eG.prototype={
bR(a,b,c,d){var s=A.B(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.eI(this.a,this.b,a,!1,s.c)}}
A.cL.prototype={}
A.eH.prototype={}
A.li.prototype={
$1(a){return this.a.$1(t.fq.a(a))},
$S:10}
A.t.prototype={
gA(a){return new A.e1(a,this.gm(a),A.bk(a).i("e1<t.E>"))}}
A.e1.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.scC(J.nl(s.a,r))
s.c=r
return!0}s.scC(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
scC(a){this.d=this.$ti.i("1?").a(a)},
$iW:1}
A.i7.prototype={}
A.i9.prototype={}
A.ia.prototype={}
A.ib.prototype={}
A.ic.prototype={}
A.ig.prototype={}
A.ih.prototype={}
A.ik.prototype={}
A.il.prototype={}
A.ir.prototype={}
A.is.prototype={}
A.it.prototype={}
A.iu.prototype={}
A.iv.prototype={}
A.iw.prototype={}
A.iz.prototype={}
A.iA.prototype={}
A.iC.prototype={}
A.eS.prototype={}
A.eT.prototype={}
A.iD.prototype={}
A.iE.prototype={}
A.iG.prototype={}
A.iO.prototype={}
A.iP.prototype={}
A.eX.prototype={}
A.eY.prototype={}
A.iR.prototype={}
A.iS.prototype={}
A.iZ.prototype={}
A.j_.prototype={}
A.j0.prototype={}
A.j1.prototype={}
A.j2.prototype={}
A.j3.prototype={}
A.j4.prototype={}
A.j5.prototype={}
A.j6.prototype={}
A.j7.prototype={}
A.l9.prototype={
d8(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.k(r,a)
B.a.k(this.b,null)
return q},
c5(a){var s,r,q,p,o,n,m,l,k=this,j={}
if(a==null)return a
if(A.lL(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.U(A.cW("DateTime is outside valid range: "+s,null))
A.f8(!0,"isUtc",t.k4)
return new A.cq(s,!0)}if(a instanceof RegExp)throw A.d(A.mW("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.t0(a,t.z)
if(A.oL(a)){q=k.d8(a)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=j.a=r[q]
if(p!=null)return p
o=t.z
p=A.ai(o,o)
j.a=p
B.a.j(r,q,p)
k.ft(a,new A.lb(j,k))
return j.a}if(a instanceof Array){n=a
q=k.d8(n)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p!=null)return p
o=J.aE(n)
m=o.gm(n)
p=k.c?new Array(m):n
B.a.j(r,q,p)
for(r=J.dG(p),l=0;l<m;++l)r.j(p,l,k.c5(o.h(n,l)))
return p}return a}}
A.lb.prototype={
$2(a,b){var s=this.a.a,r=this.b.c5(b)
J.nm(s,a,r)
return r},
$S:22}
A.la.prototype={
ft(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.kB.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.mi.prototype={
$1(a){return this.a.a3(0,this.b.i("0/?").a(a))},
$S:5}
A.mj.prototype={
$1(a){if(a==null)return this.a.aY(new A.kB(a===undefined))
return this.a.aY(a)},
$S:5}
A.im.prototype={
J(a){if(a<=0||a>4294967296)throw A.d(A.qh("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
I(){return Math.random()},
fG(){return Math.random()<0.5},
$inV:1}
A.aZ.prototype={$iaZ:1}
A.fX.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
t.kT.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$in:1}
A.b1.prototype={$ib1:1}
A.hh.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
t.ai.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$in:1}
A.kG.prototype={
gm(a){return a.length}}
A.hH.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
A.a5(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$in:1}
A.o.prototype={
gbS(a){return new A.cL(a,"load",!1,t.bz)}}
A.b2.prototype={$ib2:1}
A.hP.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.V(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
t.hk.a(c)
throw A.d(A.E("Cannot assign element of immutable List."))},
C(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$in:1}
A.io.prototype={}
A.ip.prototype={}
A.ix.prototype={}
A.iy.prototype={}
A.iK.prototype={}
A.iL.prototype={}
A.iT.prototype={}
A.iU.prototype={}
A.bl.prototype={
gm(a){return a.length},
$ibl:1}
A.cZ.prototype={
sd0(a,b){a.buffer=b},
sfC(a,b){a.loop=!0},
$icZ:1}
A.ck.prototype={
eq(a,b,c,d){t.p0.a(c)
t.lW.a(d)
return a.decodeAudioData(b,A.by(c,1),A.by(d,1))},
fl(a,b){var s=new A.F($.C,t.og),r=new A.ac(s,t.oJ)
this.eq(a,b,new A.ji(r),new A.jj(r))
return s},
$ick:1}
A.ji.prototype={
$1(a){this.a.a3(0,t.bD.a(a))},
$S:23}
A.jj.prototype={
$1(a){this.a.aY(t.jW.a(a))},
$S:19}
A.I.prototype={
aN(a,b,c,d){return a.connect(b,c,d)},
$iI:1}
A.fh.prototype={
sdE(a,b){a.value=b}}
A.fi.prototype={
h(a,b){return A.ci(a.get(A.a5(b)))},
G(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.ci(r.value[1]))}},
ga9(a){var s=A.c([],t.s)
this.G(a,new A.jk(s))
return s},
gm(a){return a.size},
$ia0:1}
A.jk.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:6}
A.bB.prototype={}
A.fj.prototype={
gm(a){return a.length}}
A.dR.prototype={}
A.d8.prototype={}
A.hi.prototype={
gm(a){return a.length}}
A.i5.prototype={}
A.fo.prototype={$ifo:1}
A.fN.prototype={$ifN:1}
A.ho.prototype={$iho:1}
A.dj.prototype={
d_(a,b){return a.bindVertexArray(b)},
cY(a,b,c){return a.bindBuffer(b,c)},
aF(a,b,c){return a.bindFramebuffer(b,c)},
T(a,b,c){return a.bindTexture(b,c)},
d3(a,b){return a.deleteTexture(b)},
bM(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aH(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.n4(g)){s.f1(a,b,c,d,e,f,g,h,i,j)
return}if(t.hQ.b(g)&&h==null&&r&&j==null){s.f2(a,b,c,d,e,f,g)
return}if(t.jQ.b(g)&&h==null&&r&&j==null){s.f3(a,b,c,d,e,f,g)
return}if(t.eL.b(g)&&h==null&&r&&j==null){s.f4(a,b,c,d,e,f,g)
return}throw A.d(A.cW("Incorrect number or type of arguments",null))},
dz(a,b,c,d,e,f,g){return this.aH(a,b,c,d,e,f,g,null,null,null)},
f1(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
f2(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
f3(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
f4(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
h0(a,b,c){return a.uniform1f(b,c)},
h1(a,b,c){return a.uniform1i(b,c)},
h2(a,b,c,d){return a.uniform2f(b,c,d)},
h3(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
h4(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
h5(a,b){return a.useProgram(b)},
$idj:1}
A.bM.prototype={$ibM:1}
A.hR.prototype={$ihR:1}
A.hX.prototype={$ihX:1}
A.bL.prototype={
gA(a){return new A.dn(this.a,0,0)},
gm(a){var s,r,q=this.a,p=q.length
if(p===0)return 0
s=new A.jr(q,p,0,176)
for(r=0;s.fH()>=0;)++r
return r},
q(a,b){if(b==null)return!1
return t.m1.b(b)&&this.a===b.a},
gB(a){return B.h.gB(this.a)},
l(a){return this.a},
$inB:1}
A.dn.prototype={
gp(a){var s=this,r=s.d
return r==null?s.d=B.h.aL(s.a,s.b,s.c):r},
n(){return this.bc(1,this.c)},
bc(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(a>0){s=j.c
for(r=j.a,q=r.length,p=176;s<q;s=n){o=B.h.av(r,s)
n=s+1
if((o&64512)!==55296)m=A.oM(o)
else if(n<q){l=B.h.av(r,n)
if((l&64512)===56320){++n
m=A.oH(o,l)}else m=2}else m=2
p=B.h.a1(u.S,(p&240|m)>>>0)
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
$iW:1}
A.jr.prototype={
fH(){var s,r,q,p,o,n,m,l=this,k=u.S
for(s=l.b,r=l.a;q=l.c,q<s;){p=l.c=q+1
o=B.h.a1(r,q)
if((o&64512)!==55296){p=B.h.a1(k,l.d&240|A.oM(o))
l.d=p
if((p&1)===0)return q
continue}if(p<s){n=B.h.a1(r,p)
if((n&64512)===56320){m=A.oH(o,n);++l.c}else m=2}else m=2
p=B.h.a1(k,(l.d&240|m)>>>0)
l.d=p
if((p&1)===0)return q}s=B.h.a1(k,l.d&240|15)
l.d=s
if((s&1)===0)return q
return-1}}
A.fR.prototype={
bj(a){var s=this.b
if(!(a>=0&&a<s.length))return A.b(s,a)
s=s[a]
return s==null?this.$ti.c.a(null):s},
k(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b);++o.d
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.aK(q,null,!1,n.i("1?"))
B.a.c7(p,0,o.c,o.b)
o.sby(p)}o.be(b,o.c++)},
gm(a){return this.c},
E(a,b){var s,r,q=this
q.$ti.c.a(b)
s=q.eD(b)
if(s<0)return!1;++q.d
r=q.eM()
if(s<q.c)if(q.a.$2(r,b)<=0)q.be(r,s)
else q.ck(r,s)
return!0},
f5(){var s,r,q=this.$ti,p=A.c([],q.i("r<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
l(a){var s=this.b
return A.nI(A.o6(s,0,A.f8(this.c,"count",t.S),A.Y(s).c),"(",")")},
aw(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.aK(q,null,!1,n.i("1?"))
B.a.c7(p,0,o.c,o.b)
o.sby(p)}o.be(b,o.c++)},
eD(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.bj(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.Z(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
eM(){var s=this,r=s.c-1,q=s.bj(r)
B.a.j(s.b,r,null)
s.c=r
return q},
be(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.e.W(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.a5()
if(q>0)break
B.a.j(o.b,b,p)}B.a.j(o.b,b,a)},
ck(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.$ti.c
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
if(p<q){j=i.bj(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sby(a){this.b=this.$ti.i("n<1?>").a(a)}}
A.lH.prototype={
gA(a){var s=this.a
return new A.cM(s,s.d,this.$ti.i("cM<1>"))}}
A.cM.prototype={
n(){var s,r=this,q=r.a
if(r.b!==q.d)throw A.d(A.bp(q))
s=r.d+1
if(0<=s&&s<q.c){q=q.b
if(!(s>=0&&s<q.length))return A.b(q,s)
r.scJ(q[s])
r.d=s
return!0}r.scJ(null)
r.d=-2
return!1},
gp(a){var s
if(this.d<0)s=A.U(A.ao("No element"))
else{s=this.c
if(s==null)s=this.$ti.c.a(null)}return s},
scJ(a){this.c=this.$ti.i("1?").a(a)},
$iW:1}
A.f.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.f&&b.a===this.a},
gB(a){return B.e.gB(this.a)},
l(a){return"Color(0x"+B.h.ds(B.e.fY(this.a,16),8,"0")+")"}}
A.a8.prototype={
da(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.e.aI(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.d(A.ao(b.l(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.e.aI(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.d(A.mJ(b.l(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
ae(a,b,c){var s=B.e.aI(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
N(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.e.aI(d*s+c)
q=p.c
if(r>=q.length)throw A.d(A.mJ("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
l(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.e.aI(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.D(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.N.prototype={
a0(a,b){t.mn.a(b)
return new A.N(this.a-b.a,this.b-b.b)},
w(a,b){return new A.N(this.a+b.a,this.b+b.b)},
q(a,b){if(b==null)return!1
return b instanceof A.N&&b.a===this.a&&b.b===this.b},
gB(a){return A.cF(this.a,this.b,B.D,B.D)},
l(a){return"Offset("+B.c.dB(this.a,1)+", "+B.c.dB(this.b,1)+")"}}
A.cV.prototype={
ga7(a){return B.c.v(this.b.d/24)},
ga8(a){return B.c.v(this.b.e/36)},
t(){var s=this.b
return new A.i(B.c.v(s.d/24),B.c.v(s.e/36))},
$ie4:1,
gbP(){return null}}
A.jb.prototype={}
A.ja.prototype={
fh(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.b
c.fJ()
s=t.c7
r=A.c([],s)
q=A.c([],s)
s=b.x2
p=s.e
s=s.d
if(!(s<p.length))return A.b(p,s)
o=p[s]
s=a.t()
s.toString
n=b.f.ad(s)
for(p=o.b,m=p.length,l=n.c,k=n.a,j=l.length,c=c.a,i=0;i<p.length;p.length===m||(0,A.y)(p),++i){h=p[i]
if(h.e)continue
g=h.t()
if(g==null)continue
f=g.b1(s)
e=g.b*k+g.a
if(!(e>=0&&e<j))return A.b(l,e)
if(l[e]<=0||h===a)continue
if(!A.oK(h,a))B.a.k(q,h)
else if(f<10.5){B.a.k(r,h)
e=h.t()
d=e.b*100+e.a
if(!(d>=0&&d<4000))return A.b(c,d)
B.fZ.j(c,d,Math.max(c[d],20))}}c=this.a.ac(a,r,q,new A.al(null,null),b).a
if(c==null)return new A.dm()
return c}}
A.al.prototype={}
A.av.prototype={}
A.c7.prototype={
ac(a,b,c,d,e){var s,r,q=null,p=t.p
p.a(b)
p.a(c)
t.O.a(e)
if(d.b!=null)return d
p=a.r
s=p==null
if((s?q:p.c)!=null)r=B.a.O(b,s?q:p.c)
else r=!1
if(r){if(s)p=q
else{p=p.c
p.toString}return new A.al(q,p)}return d}}
A.c8.prototype={
ac(a,b,c,d,e){var s,r=t.p
r.a(b)
r.a(c)
t.O.a(e)
if(d.b!=null)return d
if(0<b.length){s=b[0]
r=a.r
if(r!=null)r.c=s
return new A.al(null,s)}return d}}
A.d3.prototype={
ac(a,b,c,d,e){var s,r,q=t.p
q.a(b)
q.a(c)
t.O.a(e)
if(d.b!=null||c.length===0)return d
for(q=c.length,s=0;s<q;++s){r=c[s].r
if(r!=null&&r.c!=null){q=r.c
q.toString
return new A.al(null,q)}}return d}}
A.c4.prototype={
ac(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=t.p
j.a(b)
j.a(c)
j=t.O.a(e).x2
s=j.e
j=j.d
if(!(j<s.length))return A.b(s,j)
r=s[j]
if(d.b!=null)return d
for(j=a.r.b.a,q=-1,p=0,o=0;o<4000;++o){n=j[o]
if(n>p){p=n
q=o}}if(q===-1)return d
j=B.e.dN(q,100)
s=B.e.W(q,100)
m=$.fa()
l=a.t()
l.toString
k=m.bK(l,new A.i(j,s),r,B.Y)
if(k==null)return d
j=k.b.d
s=a.t()
s.toString
return new A.al(new A.b0(j.a0(0,s),a),null)}}
A.hr.prototype={
ac(a,b,c,d,e){var s,r,q,p=t.p
p.a(b)
p.a(c)
t.O.a(e)
p=e.x2
s=p.e
p=p.d
if(!(p<s.length))return A.b(s,p)
r=s[p]
if(this.b){this.b=!1
return d}p=a.t()
p.toString
q=e.dx.a.bJ(r,p,-1)
if(q==null)return d
this.b=!0
p=a.t()
p.toString
return new A.al(new A.b0(q.a0(0,p),a),null)}}
A.ep.prototype={
ac(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=t.p
c.a(b)
c.a(a0)
t.O.a(a2)
c=a2.x2
s=c.e
c=c.d
if(!(c<s.length))return A.b(s,c)
r=s[c]
c=a.c
if(c.b/c.a>0.3)return a1
c=e.a
if(c!=null){c=c.d
s=a.t()
s.toString
q=c.a0(0,s)
e.a=e.a.b
return new A.al(new A.b0(q,a),d)}c=a.t()
c.toString
s=a2.dx.a
p=s.bJ(r,c,-1)
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
n=g}}if(j!=null){c=$.fa()
s=a.t()
s.toString
e.a=c.d7(s,j,r)}return new A.al(new A.dm(),d)}c=a.t()
c.toString
return new A.al(new A.b0(p.a0(0,c),a),d)}}
A.hs.prototype={
ac(a,b,c,d,e){var s,r,q,p,o,n,m=t.p
m.a(b)
m.a(c)
t.O.a(e)
m=e.x2
s=m.e
m=m.d
if(!(m<s.length))return A.b(s,m)
r=s[m]
for(m=c.length,s=this.a,q=0;q<c.length;c.length===m||(0,A.y)(c),++q){p=c[q].t()
p.toString
o=a.t()
o.toString
if(p.b1(o)<=s)return d}if(b.length===0)return d
m=a.t()
m.toString
n=e.dx.a.bJ(r,m,-1)
if(n==null)return d
m=a.t()
m.toString
return new A.al(new A.b0(n.a0(0,m),a),null)}}
A.lZ.prototype={
$1(a){t.W.a(a)
return a.c===B.T&&t.mm.a(a.b).a===this.a.Q.a},
$S:25}
A.bW.prototype={
ac(a,b,c,d,e){var s,r,q,p,o,n,m=t.p
m.a(b)
m.a(c)
m=t.O.a(e).x2
s=m.e
m=m.d
if(!(m<s.length))return A.b(s,m)
r=s[m]
if(d.a!=null||d.b==null)return d
m=d.b
m.toString
s=$.fa()
q=a.t()
q.toString
p=m.t()
p.toString
o=s.d7(q,p,r)
if(o==null)return d
s=a.c.x
n=s.gbU()
if(n!=null&&o.gd4()<=n.ch/5){q=s.b.h(0,B.v)
q.toString
if(q.e===0)if(A.rL(s,n))return new A.al(new A.eo(a),m)
else{s=o.b.d
q=a.t()
q.toString
return new A.al(new A.b0(s.a0(0,q),a),m)}s=m.t()
s.toString
return new A.al(new A.en(s,a),m)}s=o.b.d
q=a.t()
q.toString
return new A.al(new A.b0(s.a0(0,q),a),m)}}
A.bo.prototype={
ac(a,b,c,d,e){var s,r,q,p,o=t.p
o.a(b)
o.a(c)
t.O.a(e)
for(o=this.a,s=o.length,r=d,q=0;q<o.length;o.length===s||(0,A.y)(o),++q,r=p){p=o[q].ac(a,b,c,r,e)
if(p.a!=null)return p}return r},
$iav:1}
A.c2.prototype={}
A.ms.prototype={
$0(){return new A.Q(2,6,0,0,B.a6)},
$S:2}
A.mq.prototype={
$0(){return new A.bo(A.c([new A.c7(),new A.c8(),new A.ep(),new A.bW(),new A.c4()],t.a))},
$S:3}
A.mr.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.mm.prototype={
$0(){return new A.Q(2,4,0,0,B.t)},
$S:2}
A.mk.prototype={
$0(){return new A.bo(A.c([new A.c7(),new A.c8(),new A.ep(),new A.bW(),new A.c4()],t.a))},
$S:3}
A.ml.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.mv.prototype={
$0(){return new A.Q(10,7,0,0,B.t)},
$S:2}
A.mt.prototype={
$0(){return new A.bo(A.c([new A.c7(),new A.c8(),new A.d3(),new A.bW(),new A.c4()],t.a))},
$S:3}
A.mu.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.my.prototype={
$0(){return new A.Q(10,7,0,0,B.a6)},
$S:2}
A.mw.prototype={
$0(){return new A.bo(A.c([new A.c7(),new A.c8(),new A.d3(),new A.hr(),new A.bW(),new A.c4()],t.a))},
$S:3}
A.mx.prototype={
$0(){var s=A.e6(B.a8)
s.e=2
return A.c([s],t.I)},
$S:4}
A.lT.prototype={
$0(){return new A.Q(3,7,0,0,B.fK)},
$S:2}
A.lR.prototype={
$0(){return new A.bo(A.c([new A.c7(),new A.c8(),new A.d3(),new A.hs(6),new A.bW(),new A.c4()],t.a))},
$S:3}
A.lS.prototype={
$0(){return A.c([A.e6(B.a8)],t.I)},
$S:4}
A.js.prototype={
dD(a,b,c,d,e,f){var s,r=this,q=Math.min(Math.max(B.c.ap(c*24-f/2),0),B.e.ap(2688-f)),p=Math.min(Math.max(B.c.ap(d*36-e/2),0),B.e.ap(1476-e)),o=r.cw(Math.abs(q-r.a)),n=r.cw(Math.abs(p-r.b))
if(b){r.a=q
r.b=p
return}s=r.a
if(q>s)r.a=s+o
else if(q<s)r.a=s-o
s=r.b
if(p>s)r.b=s+n
else if(p<s)r.b=s-n},
cw(a){if(a>30)return 6
if(a>20)return 4
return 1}}
A.R.prototype={
h(a,b){return this.b.h(0,A.B(this).i("R.T").a(b))}}
A.c1.prototype={}
A.cA.prototype={}
A.fO.prototype={
e3(a){var s=this.a,r=s.cx.b
new A.bw(r,A.B(r).i("bw<1>")).bQ(this.gfu())
s=s.go
new A.eD(s,A.B(s).i("eD<1>")).bQ(new A.jR(this))},
bN(a){return this.fv(t.h8.a(a))},
fv(a){var s=0,r=A.bi(t.H),q,p=this,o
var $async$bN=A.bj(function(b,c){if(b===1)return A.be(c,r)
while(true)switch(s){case 0:p.r=null
o=p.e
if(o.length>3){s=1
break}B.a.k(o,a)
if(p.f){s=1
break}p.aR()
case 1:return A.bf(q,r)}})
return A.bg($async$bN,r)},
aR(){var s=0,r=A.bi(t.z),q=1,p,o=[],n=this,m
var $async$aR=A.bj(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.f=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.a6(n.aD(),$async$aR)
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
case 4:return A.bf(null,r)
case 1:return A.be(p,r)}})
return A.bg($async$aR,r)},
cK(){var s=new A.F($.C,t.cU),r=new A.dA(s,t.iF)
B.a.k(this.a.c,t.x.a(t.nD.a(r.gfj(r))))
return s},
S(){var s=0,r=A.bi(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$S=A.bj(function(a9,b0){if(a9===1)return A.be(b0,r)
while(true)$async$outer:switch(s){case 0:p.r=null
o=t.c
n=new A.F($.C,o)
m=p.a
l=m.x2
k=l.e
l=l.d
if(!(l<k.length)){q=A.b(k,l)
s=1
break}l=k[l].b
j=A.c(l.slice(0),A.Y(l))
l=p.b,k=B.a.gfa(l),i=t.nt,h=p.c,g=p.d,f=p.e,e=t.mY,d=t.eF,c=0,b=!1
case 4:if(!!0){s=5
break}case 6:if(!(a=l.length,a!==0)){s=7
break}if(0>=a){q=A.b(l,0)
s=1
break}s=8
return A.a6(l[0].as(m),$async$S)
case 8:a0=b0
B.a.L(h,a0.r)
a1=a0
case 9:if(!(a=a1.a,a!=null)){s=10
break}B.a.j(l,0,a)
s=11
return A.a6(a.as(m),$async$S)
case 11:a1=b0
B.a.L(h,a1.r)
s=9
break
case 10:a=a1.c
if(a!=null){a2=m.fy
if(a2===$){a3=A.mV(m.a)
A.bT(m.fy,"ui")
m.fy=a3
a2=a3}a2.c.r.cX(a)}a4=a1.x
s=a4!=null?12:13
break
case 12:s=!a1.f&&f.length===0?14:16
break
case 14:s=g.length!==0?17:18
break
case 17:s=19
return A.a6(p.cz(),$async$S)
case 19:case 18:s=20
return A.a6(p.aC(a4),$async$S)
case 20:s=15
break
case 16:B.a.k(g,a4)
case 15:case 13:a=a0.y
if(a!=null&&p.r==null){a5=a.$0()
p.r=a5
a6=e.a(new A.jQ(p,a5))
a=$.C
n.aM(new A.bR(new A.F(a,o),8,a6,null,d))}case 21:if(!(a=h.length,a!==0)){s=22
break}if(0>=a){q=A.b(h,-1)
s=1
break}s=23
return A.a6(h.pop().as(m),$async$S)
case 23:a0=b0
B.a.L(h,a0.r)
case 24:if(!(a=a0.a,a!=null)){s=25
break}s=26
return A.a6(a.as(m),$async$S)
case 26:a0=b0
B.a.L(h,a0.r)
s=24
break
case 25:a=a0.c
if(a!=null){a2=m.fy
if(a2===$){a0=A.mV(m.a)
A.bT(m.fy,"ui")
m.fy=a0
a2=a0}a2.c.r.cX(a)}s=21
break
case 22:if(a1.d)b=B.fm.dO(b,!0)
B.a.bY(l,0)
s=6
break
case 7:if(!b){s=3
break}for(;a=j.length,c<a;){if(!(c>=0)){q=A.b(j,c)
s=1
break $async$outer}a7=j[c];++c
if(a7.t()==null)continue
if(A.t_(i.a(k),a7,m)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=g.length!==0?27:29
break
case 27:s=f.length===0?30:32
break
case 30:s=33
return A.a6(p.cz(),$async$S)
case 33:s=31
break
case 32:s=34
return A.a6(p.aV(),$async$S)
case 34:case 31:s=28
break
case 29:s=35
return A.a6(p.cK(),$async$S)
case 35:case 28:if(!b){s=1
break}for(o=j.length,a8=0;a8<o;++a8)j[a8].a=100
new A.ac(n,t.jk).aG(0)
case 1:return A.bf(q,r)}})
return A.bg($async$S,r)},
aV(){var s=0,r=A.bi(t.H),q=this,p,o,n
var $async$aV=A.bj(function(a,b){if(a===1)return A.be(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.y)(p),++n)p[n].x.$0()
B.a.sm(p,0)
s=2
return A.a6(q.cK(),$async$aV)
case 2:return A.bf(null,r)}})
return A.bg($async$aV,r)},
aC(a){var s=0,r=A.bi(t.H),q=this,p
var $async$aC=A.bj(function(b,c){if(b===1)return A.be(c,r)
while(true)switch(s){case 0:p=new A.F($.C,t.cU)
if(a!=null)B.a.k(q.d,a)
B.a.k(q.a.c,t.x.a(new A.jP(q,new A.ac(p,t.ou))))
s=2
return A.a6(p,$async$aC)
case 2:return A.bf(null,r)}})
return A.bg($async$aC,r)},
cz(){return this.aC(null)},
aD(){var s=0,r=A.bi(t.H),q,p=this,o,n,m,l,k,j,i
var $async$aD=A.bj(function(a,b){if(a===1)return A.be(b,r)
while(true)switch(s){case 0:i=p.e
if(i.length===0){s=1
break}o=B.a.bY(i,0)
case 3:switch(o){case B.aJ:s=5
break
case B.aK:s=6
break
case B.aL:s=7
break
case B.aM:s=8
break
case B.fj:s=9
break
case B.bo:s=10
break
case B.bp:s=11
break
case B.fg:s=12
break
case B.bl:s=13
break
case B.bn:s=14
break
case B.bm:s=15
break
case B.bq:s=16
break
case B.fk:s=17
break
default:s=18
break}break
case 5:case 6:case 7:case 8:switch(o){case B.aJ:n=new A.i(0,-1)
break
case B.aK:n=new A.i(1,0)
break
case B.aL:n=new A.i(0,1)
break
case B.aM:n=new A.i(-1,0)
break
default:A.U(A.ao(""))
n=null}m=new A.b0(n,p.a.x2.a)
s=4
break
case 9:p.a.x2.toString
m=new A.dm()
s=4
break
case 10:m=null
s=4
break
case 11:i=p.a
l=i.d.b?i.gb7().d:null
if(l==null){m=null
s=4
break}m=new A.en(l,i.x2.a)
s=4
break
case 12:m=null
s=4
break
case 13:s=19
return A.a6(p.aQ(),$async$aD)
case 19:m=b
s=4
break
case 14:m=new A.eo(p.a.x2.a)
s=4
break
case 15:i=p.a
k=i.x2.a
j=i.id
m=i.id=A.nt(k,j==null?null:j.b)
s=4
break
case 16:i=p.a.d
k=!i.b
i.b=k
if(k){i=document.body.style
k=B.f9.ef(i,"cursor")
i.setProperty(k,"crosshair","")}else document.body.style.removeProperty("cursor")
m=null
s=4
break
case 17:i=p.a.d
if(i.b){i.b=!1
document.body.style.removeProperty("cursor")}m=null
s=4
break
case 18:m=null
s=4
break
case 4:s=m!=null?20:21
break
case 20:B.a.k(p.b,m)
s=22
return A.a6(p.S(),$async$aD)
case 22:case 21:case 1:return A.bf(q,r)}})
return A.bg($async$aD,r)},
aQ(){var s=0,r=A.bi(t.oL),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$aQ=A.bj(function(a3,a4){if(a3===1)return A.be(a4,r)
while(true)$async$outer:switch(s){case 0:a2=A.c([],t.Y)
for(o=p.a,n=t.L,m=!1,l=-1;l<2;++l)for(k=-1;k<2;++k){j=o.x2.a.t()
i=j.a+l
j=j.b+k
h=o.x2
g=h.e
h=h.d
if(!(h<g.length)){q=A.b(g,h)
s=1
break $async$outer}h=g[h].d
if(!(i>=0&&j>=0&&i<h.a&&j<h.b))continue
f=h.h(0,new A.i(i,j))
if(f.f!=null){j=o.x2
i=j.e
j=j.d
if(!(j<i.length)){q=A.b(i,j)
s=1
break $async$outer}B.a.L(a2,A.oJ(f,i[j]))}j=f.e
i=j.length
if(i!==0)for(e=0;e<j.length;j.length===i||(0,A.y)(j),++e,m=!0){d=j[e]
c=A.n8(d)
b=A.aK(8,B.u,!0,n)
h="Pick up "+d.d
g=A.aC("Pick up ",b)
g.r=g.r+c.r
a=g.f
if(a!=null){a0=c.f
a0.toString
g.sd2(B.a.w(a,a0))}B.a.k(a2,new A.aY(h,g,new A.fP(d,f,o.x2.a)))}}n=a2.length
if(n===0){q=null
s=1
break}s=n===1&&!m?3:5
break
case 3:if(0>=n){q=A.b(a2,0)
s=1
break}a1=a2[0]
s=4
break
case 5:n=new A.F($.C,t.j7)
o.gaq().c.sfE(new A.h1(a2,new A.ac(n,t.pn),t.km))
s=6
return A.a6(n,$async$aQ)
case 6:a1=a4
case 4:if(a1==null){q=null
s=1
break}q=a1.c
s=1
break
case 1:return A.bf(q,r)}})
return A.bg($async$aQ,r)},
eK(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.U.a(a)
for(s=h.d,r=s.length,q=a.a,p=h.e,o=0;o<s.length;s.length===r||(0,A.y)(s),++o){n=s[o]
if(p.length>=2)n.d=1
m=n.e
l=m==null?0:B.e.W(q-m.a,1000)
n.e=a
k=l/B.e.W(n.a.a,1000)
j=n.f
i=n.d
i=n.d=B.c.bC(j?n.d=i+k:n.d=i-k,-1,1)
i>=1||i<0
n.r.$1(n)}B.a.k(h.a.c,t.x.a(h.gcG()))}}
A.jR.prototype={
$1(a){var s
t.cM.a(a)
s=this.a
s.r=null
B.a.k(s.b,a)
s.S()},
$S:31}
A.jQ.prototype={
$0(){var s=0,r=A.bi(t.H),q,p=this,o,n,m
var $async$$0=A.bj(function(a,b){if(a===1)return A.be(b,r)
while(true)switch(s){case 0:n=p.a
m=n.b
if(m.length!==0||n.e.length!==0){s=1
break}s=3
return A.a6(A.pS(B.fc,t.z),$async$$0)
case 3:o=n.r
if(o!==p.b||m.length!==0){s=1
break}o.toString
B.a.k(m,o)
n.r=null
n.S()
case 1:return A.bf(q,r)}})
return A.bg($async$$0,r)},
$S:32}
A.jP.prototype={
$1(a){var s,r,q,p,o,n,m
t.U.a(a)
s=A.c([],t.fy)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.y)(q),++n){m=q[n]
if(m.d>=1||o.length!==0){m.x.$0()
B.a.k(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.y)(s),++n)B.a.E(q,s[n])
if(q.length===0)this.b.aG(0)
else B.a.k(r.a.c,t.x.a(this))},
$S:14}
A.eu.prototype={
l(a){return"SlotType."+this.b}}
A.bs.prototype={
l(a){return"ItemType."+this.b}}
A.fe.prototype={}
A.ab.prototype={
gb8(){switch(this.c){case B.K:return B.aw
case B.L:return B.ax
case B.M:return B.ay
case B.S:case B.N:case B.as:case B.T:return null}},
gfo(){switch(this.c){case B.K:return B.I
case B.L:return B.v
case B.M:return B.J
case B.S:case B.N:case B.as:case B.T:return null}},
l(a){return this.d}}
A.a2.prototype={}
A.fQ.prototype={
l(a){return"HandRequirement."+this.b}}
A.br.prototype={
l(a){return"DamageType."+this.b}}
A.c_.prototype={
l(a){return"DiceType."+this.b}}
A.b3.prototype={
l(a){return"WeaponProperties."+this.b}}
A.ku.prototype={}
A.bZ.prototype={}
A.cp.prototype={
l(a){return"CriticalEffect."+this.b}}
A.dV.prototype={
l(a){return"Consumable."+this.b}}
A.a4.prototype={}
A.dL.prototype={
l(a){return"AmmoType."+this.b}}
A.dM.prototype={}
A.ay.prototype={}
A.cX.prototype={
l(a){return"ArmorUpgradeType."+this.b}}
A.au.prototype={}
A.fb.prototype={
at(a){var s,r=a-10
if(r===0)return 0
else{s=r/2
if(r>0)return B.c.am(s)
else return B.c.d1(s)}}}
A.cn.prototype={
dm(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x.gfM()
r=a.x.gbA()
q=A.dT(a0,1,B.aI)
p=b.y
o=p.a
n=q+p.at(o)
m=a.y
l=10+Math.min(m.at(m.b),r.e)
m=s.b
l=A.O(A.nD(m))?l+r.d:l+r.c
if(!a1)l-=2
k=t.Q
j=A.c([],k)
i=A.c([],k)
if(q===1){h=!1
g=!1}else{g=n>=l
if(q===20)h=!0
else{h=g
g=!1}}f="["+n+" vs "+A.D(l)+"]"
if(!h)return new A.cY(b.cx.a+" missed "+a.cx.a+" "+f,!1,0,B.at,B.at)
if(B.a.O(s.z,B.d1))B.a.k(j,new A.fw())
k=s.d
e=s.e
d=Math.max(A.dT(a0,k,e)+p.at(o),0)
if(g)d+=Math.max(A.dT(a0,k,e)+p.at(o),0)
B.a.O(b.ch,B.bJ)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+s.y
return new A.cY(c,!0,d,j,i)},
dt(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x
r=s.gbU()
if(r==null)r=B.a8
q=s.gbA()
s=b.y
p=Math.min(s.at(s.b),q.e)
o=a.x.gbA()
n=A.dT(a0,1,B.aI)
m=n+p
l=a.y
k=10+Math.min(l.at(l.b),o.e)
l=r.c
k=A.O(A.nD(l))?k+o.d:k+o.c
if(!a1)k-=2
j=t.Q
i=A.c([],j)
h=A.c([],j)
if(n===1){g=!1
f=!1}else{f=m>=k
if(n===20)g=!0
else{g=f
f=!1}}e="["+m+" vs "+A.D(k)+"]"
if(!g)return new A.cY(b.cx.a+" missed "+a.cx.a+" "+e,!1,0,B.at,B.at)
j=r.f
d=A.dT(a0,1,j)
if(f)d+=A.dT(a0,1,j)+s.at(s.a)
B.a.O(b.ch,B.bJ)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+r.a
return new A.cY(c,!0,d,i,h)},
sfk(a){this.b=A.K(a)}}
A.cY.prototype={}
A.d7.prototype={}
A.d6.prototype={
dk(a){var s=this
return A.ov(function(){var r=a
var q=0,p=1,o,n,m,l,k
return function $async$dk(b,c){if(b===1){o=c
q=p}while(true)switch(q){case 0:n=s.a,m=n.length,l=0
case 2:if(!(l<n.length)){q=4
break}k=n[l]
q=k.gb8()==A.pQ(r)?5:6
break
case 5:q=7
return k
case 7:case 6:case 3:n.length===m||(0,A.y)(n),++l
q=2
break
case 4:return A.od()
case 1:return A.oe(o)}}},t.W)},
gbA(){var s,r,q
for(s=this.b,s=s.gak(s),s=s.gA(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a2)return q}return B.dn},
gfM(){var s,r,q
for(s=this.b,s=s.gak(s),s=s.gA(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a4)return q}return B.fQ},
gbU(){var s,r,q
for(s=this.b,s=s.gak(s),s=s.gA(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.ay)return q}return null},
bI(a,b){var s=this.b
s.h(0,b)
s.j(0,b,a)},
dC(a){var s,r,q
for(s=this.b,r=s.ga9(s),r=r.gA(r);r.n();){q=r.gp(r)
if(J.Z(s.h(0,q),a))s.j(0,q,null)}}}
A.hl.prototype={
l(a){return"Perk."+this.b}}
A.cr.prototype={
l(a){return"EquipmentSlot."+this.b}}
A.fw.prototype={}
A.dp.prototype={
l(a){return"TileType."+this.b}}
A.d2.prototype={
l(a){return"CollisionMode."+this.b}}
A.ax.prototype={}
A.cI.prototype={
l(a){return"TerrainType."+this.b}}
A.aj.prototype={
l(a){return"TerrainWidget."+this.b}}
A.cy.prototype={
l(a){return"LockState."+this.b}}
A.bm.prototype={
l(a){return"Biome."+this.b}}
A.c9.prototype={
ga7(a){return this.b.a},
ga8(a){return this.b.b},
sfV(a){t.dt.a(a)},
$ie4:1,
gbP(){return this.z}}
A.fZ.prototype={}
A.h_.prototype={$ie4:1,
gbP(){return this.a},
ga7(a){return this.b},
ga8(a){return this.c}}
A.i.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.i&&b.a===this.a&&b.b===this.b},
gB(a){return A.cF(this.a,this.b,B.D,B.D)},
w(a,b){return new A.i(this.a+b.a,this.b+b.b)},
a0(a,b){return new A.i(this.a-b.a,this.b-b.b)},
c0(){return new A.N(this.a,this.b)},
b1(a){var s=Math.abs(this.a-a.a),r=Math.abs(this.b-a.b)
return s+r+-0.6000000000000001*Math.min(s,r)},
l(a){return"("+this.a+", "+this.b+")"}}
A.kn.prototype={
l(a){return"LiquidKind."+this.b}}
A.a3.prototype={
l(a){return"Interactable."+this.b}}
A.kq.prototype={}
A.kv.prototype={
fJ(){var s,r
for(s=this.a,r=0;r<4000;++r)s[r]=s[r]-1}}
A.dc.prototype={
l(a){return"MonsterKind."+this.b}}
A.fC.prototype={
f7(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.b,i=j.Z(k,t.C),h=this.d
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.d.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.b||A.O(A.bF(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.e=r
j.a4(b,k,i)},
U(a,b){var s=this
if(s.c){s.f7(0,a)
s.c=!1}if(s.d==null)return
s.b.ab(a,0,B.e.W(s.e,2),A.b_(["u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.fD.prototype={
U(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.b,r=s.length,q=t.t,p=t.n,o=t.g2,n=t.N,m=t.z,l=0;l<s.length;s.length===r||(0,A.y)(s),++l){k=s[l]
$.nf().ab(a,4,3,A.b_(["u_resolution",A.c([b.a,b.b],q),"u_time",k.gbH().gfA().h7(0,k.gfn(k).gfA()),"u_offset",A.c([b.d,b.e],p),"u_origin",A.c([k.ga7(k),k.ga8(k)],o)],n,m))
k.sbH(k.gbH().w(0,A.jF(11)))}r=A.Y(s).i("G(1)").a(new A.jG())
if(!!s.fixed$length)A.U(A.E("removeWhere"))
B.a.eN(s,r,!0)}}
A.jG.prototype={
$1(a){t.ox.a(a)
return a.gbH().dF(0,a.gfn(a))},
$S:33}
A.jJ.prototype={}
A.fE.prototype={
e2(a,b,c){var s,r,q,p=this
p.gR().b.Y(p.a)
p.y.b.Y(p.a)
p.z.b.Y(p.a)
p.gbL().c.Y(p.a)
s=p.gaf()
r=p.a
s.e=r.createFramebuffer()
s.b.Y(r)
s.c.Y(r)
q=p.cy
if(q===$){s=A.aI(A.c([new A.T("a_position",35044,5126,2,new Float32Array(A.cN(B.G)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise(vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f * f * f + .6 * f * f + .5 * f) * color, 0.3);\n}\n",A.c([new A.x("u_resolution",B.f),new A.x("u_time",B.A),new A.x("u_offset",B.f),new A.x("u_player_vis_texture",B.k),new A.x("u_block_size",B.f)],t.o),u.d)
A.bT(p.cy,"weather")
q=p.cy=new A.hZ(s)}q.c.Y(p.a)
p.gb7().c.Y(p.a)
s=p.a
$.nf().Y(s)
$.pl().Y(s)
p.fx.b.Y(p.a)
p.gb3().b.b.Y(p.a)
p.gaq().e.Y(p.a)
s=$.ag.b
if(s==null?$.ag!=null:s!==$.ag)A.U(new A.cx("Field '"+$.ag.a+"' has already been initialized."))
$.ag.b=p
s=p.cx
r=s.c
new A.bw(r,A.B(r).i("bw<1>")).bQ(new A.jK(p,p.b.getBoundingClientRect()))
s.a=p.gaq()},
gR(){var s,r=this,q=r.x
if(q===$){s=A.o2(r.a,r.f)
A.bT(r.x,"sprites")
r.x=s
q=s}return q},
gbL(){var s,r=this,q=r.Q
if(q===$){s=A.qW()
s=A.aI(A.c([new A.T("a_position",35044,5126,2,s),new A.T("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.t,A.c([new A.x("u_resolution",B.f),new A.x("u_offset",B.f)],t.o),u.Z)
A.bT(r.Q,"fovRenderer")
q=r.Q=new A.fG(r.f,s,new A.i(-1,-1))}return q},
gaf(){var s,r,q,p=this,o=u.v,n="a_position",m="u_player_visible_texture",l=p.ch
if(l===$){s=t.G
r=t.o
q=A.aI(A.c([new A.T(n,35044,5126,2,new Float32Array(A.cN(B.G)))],s),u._,A.c([new A.x("u_source_position",B.f),new A.x("u_source_color",B.b0),new A.x("u_source_strength",B.A),new A.x("u_time",B.A),new A.x("u_visible_texture",B.k),new A.x(m,B.k)],r),o)
r=A.aI(A.c([new A.T(n,35044,5126,2,new Float32Array(A.cN(B.G)))],s),u.L,A.c([new A.x("u_light_texture",B.k),new A.x("u_game_world_texture",B.k),new A.x(m,B.k),new A.x("u_resolution",B.f),new A.x("u_block_size",B.f),new A.x("u_offset",B.f)],r),o)
s=A.c([],t.ow)
A.bT(p.ch,"lightingRenderer")
l=p.ch=new A.eb(q,r,p.f,s)}return l},
gb7(){var s,r=this,q=r.db
if(q===$){s=A.aI(A.c([new A.T("a_position",35048,5126,2,new Float32Array(12))],t.G),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nuniform float u_time;\nuniform float u_visible;\n\nvoid main() {\n  if (u_visible == 0.0) {\n    discard;\n    return;\n  }\n  float scale = (sin(u_time * 3.0) + 1.0) / 4.0;\n  outColor = vec4(0.509, 0.69411, 1.0, scale + 0.3);\n}\n",A.c([new A.x("u_offset",B.f),new A.x("u_resolution",B.f),new A.x("u_time",B.A),new A.x("u_visible",B.A)],t.o),"#version 300 es\nin vec2 a_position;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n")
A.bT(r.db,"selectionRenderer")
q=r.db=new A.hx(r.f,s,B.y)}return q},
gb3(){var s,r,q=this,p=q.dy
if(p===$){s=q.a
r=A.c([],t.ff)
s=A.o2(s,q.f)
A.bT(q.dy,"textRenderer")
p=q.dy=new A.hK(s,r)}return p},
gaq(){var s,r=this,q=r.fy
if(q===$){s=A.mV(r.a)
A.bT(r.fy,"ui")
r.fy=s
q=s}return q},
bG(){var s,r=this
r.x2=null
B.a.sm(r.gaf().y,0)
r.gR().aW(0)
s=r.y
s.c=null
s.d=!0
s=r.z
s.d=null
s.c=!0
s=r.f
B.a7.al(s.c,0,4000,0)
s.e=B.y
r.gaq().b=null
s=r.r2
r.r.dD(0,!0,0,0,r.rx,s)
r.id=null
s=r.k1
if(s!=null)s.ba(0)},
U(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=3553,b=6408,a=33071,a0=36160
d.a=a2
s=d.b
r=s.clientWidth
q=s.clientHeight
if(r!==d.r2||q!==d.rx){d.x1=!0
B.aE.sar(s,r)
B.aE.sao(s,q)
d.r2=r
d.rx=q
s=d.k2
if(s!=null)B.d.d3(a2,s)
s=d.k3
if(s!=null)B.d.d3(a2,s)
d.k2=a2.createTexture()
d.k3=a2.createTexture()
B.d.T(a2,c,d.k2)
B.d.aH(a2,c,0,b,d.r2,d.rx,0,b,5121,null)
a2.texParameteri(c,10241,9729)
a2.texParameteri(c,10242,a)
a2.texParameteri(c,10243,a)
B.d.T(a2,c,d.k3)
B.d.aH(a2,c,0,b,d.r2,d.rx,0,b,5121,null)
a2.texParameteri(c,10241,9729)
a2.texParameteri(c,10242,a)
a2.texParameteri(c,10243,a)}s=d.r
p=d.f.e
s.dD(0,d.x1,p.a,p.b,q,r)
p=d.y2
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
B.d.aF(a2,a0,d.k4)
B.d.bM(a2,a0,36064,c,d.k2,0)
a2.clearColor(0,0,0,1)
a2.clear(16640)
d.y.U(a2,p)
d.z.U(a2,p)
d.gR().U(a2,p)
s=d.r1
B.d.aF(a2,a0,s)
B.d.bM(a2,a0,36064,c,d.k3,0)
a2.viewport(0,0,r,q)
a2.clearColor(0,0,0,1)
d.gaf()
d.gaf().r=d.k2
d.gaf().z=s
d.gaf().U(a2,p)
s=d.gbL()
if(!s.b.e.q(0,s.d)||s.e)s.f9(a2)
o=t.t
n=t.n
m=t.N
l=t.z
s.c.ab(a2,4,48e3,A.b_(["u_resolution",A.c([p.a,p.b],o),"u_offset",A.c([p.d,p.e],n)],m,l))
d.fr.U(a2,p)
if(d.d.b){s=d.gb7()
s.eH(a2,p)
k=A.c([p.a,p.b],o)
n=A.c([p.d,p.e],n)
j=p.c
i=s.b
i=i.ad(i.e)
h=s.d
i=i.ae(0,h.a,h.b)?1:0
s.c.ab(a2,4,6,A.b_(["u_resolution",k,"u_offset",n,"u_time",j/1000,"u_visible",i],m,l))}B.d.aF(a2,a0,null)
s=d.fx
s.c=d.k3
a2.activeTexture(33984)
B.d.T(a2,c,s.c)
s.b.ab(a2,4,3,A.b_(["u_resolution",A.c([p.a,p.b],o),"u_texture",0,"u_time",p.c/1000],m,l))
l=d.gb3()
s=l.e
o=p.b
if(s!==o||l.d!==p.a||p.d!==l.f||p.e!==l.r){l.d=p.a
l.e=o
l.r=p.e
l.f=p.d}l.b.U(a2,p)
d.gaq().U(a2,p)
a2.finish()
g=A.jF(B.c.v(a1))
s=d.c
f=A.c(s.slice(0),A.Y(s))
B.a.sm(s,0)
for(s=f.length,e=0;e<f.length;f.length===s||(0,A.y)(f),++e)f[e].$1(g)
d.fI(p)
d.x1=!1},
fI(a){var s=this.x2
if(s==null)return
s=s.a.b
B.c.v(s.d/24)
B.c.v(s.e/36)},
bX(a){var s,r=this.x2,q=r.e
r=r.d
if(!(r<q.length))return A.b(q,r)
B.a.E(q[r].b,a)
s=a.b
s.sag(-1)
s.sah(-1)
this.gR().E(0,s)},
cc(a,b){var s=a.b,r=B.c.v(s.d/24),q=B.c.v(s.e/36),p=b.b,o=B.c.v(p.d/24),n=B.c.v(p.e/36)
s.sag(o)
s.sah(n)
p.sag(r)
p.sah(q)
if(a.x){s=this.f
s.e=new A.i(o,n)
s.c2()}if(b.x){s=this.f
s.e=new A.i(r,q)
s.c2()}},
dn(a,b){var s=a.b
s.sag(b.a)
s.sah(b.b)
if(a.x){s=this.f
s.e=b
s.c2()}},
cU(a,b,c){var s,r,q,p
if(c==null){s=this.x2
r=s.e
s=s.d
if(!(s<r.length))return A.b(r,s)
q=r[s]}else q=c
B.a.k(q.b,a)
p=a.b
p.sag(b.a)
p.sah(b.b)
p.sau(0,B.Z)
s=this.gR()
p.sbO(0,1)
s.k(0,p)},
cT(a,b){return this.cU(a,b,null)},
ed(a){var s="cave_1.mp3"
switch(a.a){case B.H:case B.W:case B.X:return"surface_day_1.mp3"
case B.B:return s
case B.w:return s
case B.F:case B.C:return"drone_abandoned_desolate.mp3"}},
dc(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
a.id=null
B.a.sm(a.gaf().y,0)
a.gR().aW(0)
s=a.y
s.c=a1
s.d=!0
s=a.z
s.d=a1
s.c=!0
s=a.f
r=a1.d
s.di(r)
s.dd()
B.a7.al(s.c,0,4000,0)
s.e=a0
q=a.k1
if(q!=null)q.ba(0)
q=a1.e
a.k1=a.e.fQ(a.ed(q))
for(r=r.c,p=r.length,o=0;o<r.length;r.length===p||(0,A.y)(r),++o){n=r[o]
m=n.b
if(n.r!=null){l=new A.Q(11,13,m.a*24,m.b*36,null)
l.x=B.fN
l.y=-1
k=l.a=a.gR()
j=k.d
j.$ti.c.a(l);++j.d
j.aw(0,l)
k.a=!0}k=m.a*24
j=m.b*36
l=A.nG(n.f,k,j,q)
if(l!=null){i=l.a=a.gR()
h=i.d
h.$ti.c.a(l);++h.d
h.aw(0,l)
i.a=!0
n.y=l}if(n.f===B.a5){n.z=new A.fZ(B.eN,7)
g=a.ch
if(g===$){f=A.q4(s)
A.bT(g,"lightingRenderer")
a.ch=f
g=f}B.a.k(g.y,n)}for(i=n.e,h=i.length,e=0;e<i.length;i.length===h||(0,A.y)(i),++e){d=i[e]
l=A.o3(d)
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
l.r=B.Z
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
s.f.fP()}}
A.jK.prototype={
$1(a){var s,r,q
t.bd.a(a)
s=this.a.y2
r=J.aE(a)
s.sfF(r.h(a,0))
r=r.h(a,1)
q=this.b
q.left.toString
q=q.top
q.toString
if(typeof r!=="number")return r.a0()
s.r=r-q},
$S:34}
A.S.prototype={
as(a){return this.dP(a)},
dP(a){var s=0,r=A.bi(t.lM),q,p=2,o,n=[],m=this,l,k,j,i
var $async$as=A.bj(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a6(m.P(0,a),$async$as)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
l=A.bz(i)
A.cS("ERROR: "+A.D(l))
q=new A.H(null,null,!1,!0,!1,B.i,null,null)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.bf(q,r)
case 2:return A.be(o,r)}})
return A.bg($async$as,r)}}
A.bX.prototype={}
A.H.prototype={}
A.hc.prototype={
P(a,b){var s,r,q,p,o=null,n=b.x2.a
A.dC(b.y1,"worldWrapper").b.n()
s=b.x2
r=s.e
s=s.d+1
if(!(s<r.length))return A.b(r,s)
q=r[s]
p=A.lW(q)
b.dc(p,q)
b.cU(n,p,q);++b.x2.d
b.x1=!0
return new A.H(o,o,!0,!0,!1,B.i,o,o)}}
A.eo.prototype={
P(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.c.x,g=h.gbU(),f=h.b.h(0,B.v)
if(g==null||f.e===g.Q.b)return new A.H(j,j,!1,!0,!1,B.i,j,j)
q=h.a
p=q.length
o=t.mm
n=0
while(!0){if(!(n<p)){s=j
r=s
break}m=q[n]
if(m.c===B.T){l=o.a(m.b)
if(l.a===g.Q.a){s=m
r=l
break}}++n}if(r==null)return new A.H(j,j,!1,!0,!1,B.i,j,j)
i=i.t()
i.toString
b.e.ai("reload_1.mp3",i)
i=r.b
k=Math.min(i,g.Q.b)
i-=k
r.b=i
if(i===0)B.a.E(q,s)
i=f.e
i.toString
f.e=k+i
return new A.H(j,j,!0,!0,!1,B.i,j,j)}}
A.b0.prototype={
P(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e={},d=b.x2,c=d.e
d=d.d
if(!(d<c.length))return A.b(c,d)
s=c[d]
d=g.b
r=d.t()
q=r.w(0,g.a)
p=s.d
if(!p.da(q))return new A.H(f,f,!1,!0,!1,B.i,f,f)
o=p.h(0,q)
n=s.ax(q)
if((o.c===B.b||A.O(A.bF(o.f)))&&n==null){if(o.f==null)return new A.H(f,f,!1,!0,!1,B.i,f,f)
e=b.x2
d=e.e
e=e.d
if(!(e<d.length))return A.b(d,e)
m=A.oJ(o,d[e])
if(m.length!==0)return new A.H(B.a.gdV(m).c,f,!1,!0,!1,B.i,f,f)
return new A.H(f,f,!1,!0,!1,B.i,f,f)}l=A.c([],t.w)
e.a=!1
if(n!=null){if(A.oK(n,d))return new A.H(new A.dQ(!1,d,n),f,!1,!0,!1,B.i,f,f)
c=e.a=!0}else c=!1
k=b.f
k=k.ad(k.e)
k.toString
j=!d.x
if(j)i=k.h(0,r)||k.h(0,q)
else i=!1
p.h(0,r)
if(o.r!=null)b.e.b2("water_footsteps_"+(B.r.J(5)+1)+".mp3",q,0.15)
k=s.a
k.k(0,q)
if(i)h=new A.bX(A.jF(60),new A.ky(g,r,q),new A.kz(e,g,b,n,q,s))
else{if(c){n.toString
b.cc(n,d)}else b.dn(d,q)
k.E(0,q)
h=f}d.a=0
return new A.H(f,f,!0,!0,j,l,h,f)}}
A.ky.prototype={
$1(a){var s=a.d,r=1-s,q=this.b,p=this.c,o=this.a.b.b
o.sa7(0,q.a*24*r+p.a*24*s)
o.sa8(0,q.b*36*r+p.b*36*s)},
$S:11}
A.kz.prototype={
$0(){var s,r=this,q=r.c,p=r.b.b
if(r.a.a){s=r.d
s.toString
q.cc(s,p)}else q.dn(p,r.e)
r.f.a.E(0,r.e)},
$S:0}
A.dm.prototype={
P(a,b){var s=null
return new A.H(s,s,!0,!0,!1,B.i,s,s)}}
A.fY.prototype={
P(a,b){var s=null,r=this.a.c
r.d-=1000;++r.c;++r.e;++r.f;++r.r
A.cS("LEVEL UP")
return new A.H(s,s,!0,!0,!1,B.i,s,s)}}
A.ey.prototype={
P(a,b){var s,r,q,p,o,n,m=null,l=b.x2,k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
s=this.b
r=k[l].d.h(0,s)
q=r.y
r.f=this.a?B.E:B.a2
l=b.gR()
q.toString
l.E(0,q)
l=r.f
l.toString
k=r.b
p=b.x2
o=p.e
p=p.d
if(!(p<o.length))return A.b(o,p)
n=A.nG(l,24*k.a,36*k.b,o[p].e)
if(n!=null)b.gR().k(0,n)
r.y=n
l=b.x2
k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
b.f.dj(k[l].d,s)
b.gbL().e=!0
b.e.b2("door_1.mp3",s,0.8)
return new A.H(m,m,!0,!0,!1,B.i,m,m)}}
A.dQ.prototype={
P(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c={},b=e.b
b.a=0
c.a=null
s=e.c
r=A.rQ(s,b,a0)
q=e.a
p=b.c
o=s.c
if(q){p.toString
o.toString
n=c.a=p.dt(o,B.r,r)}else{p.toString
o.toString
n=c.a=p.dm(o,B.r,r)}B.a.L(p.Q,n.d)
B.a.L(o.Q,n.e)
m=A.c([],t.w)
p=s.t()
p.toString
l=b.t()
l.toString
if(!q){q=b.b
k=q.y
q.sbO(0,4)
j=l.c0()
i=p.c0()
q=l.c0()
h=i.a0(0,j)
g=q.w(0,new A.N(h.a/1.5,h.b/1.5))
c.b=!0
f=new A.bX(B.fd,new A.jg(c,e,a0,p,l,j,g),new A.jh(c,e,a0,p,l,k))}else{q=b.x?B.u:B.t
e.bb(n.c,p,l,a0,q)
f=d}q=s.r
if(q!=null)q.c=b
if(!n.b)return new A.H(d,n.a,!0,!0,!1,B.i,f,d)
b=o.b-n.c
o.b=b
if(b<=0)B.a.k(m,new A.dW(s))
return new A.H(d,c.a.a,!0,!0,!1,m,f,d)},
cA(a){if(this.a){if(a)return"bullet_impact_2.mp3"
return"bullet_miss_1.mp3"}if(a)return"heavy_punch_1.mp3"
return"miss_1.mp3"},
bb(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j={}
if(a<=0)return
s=c.a*24
r=c.b*36
q=new A.hq(B.e.l(a),e,1.25,s,r)
p=b.a*24
o=b.b*36
n=A.pJ(new A.N(p-s,o-r))
m=n.a*24
n=n.b*36
l=new A.N(m,n).w(0,new A.N(s,r))
k=new A.N(m*2,n*2).w(0,new A.N(p,o))
d.gb3().fd(q)
j.a=B.bj
A.qn(B.fe,new A.jf(j,d,q,k,l))},
l(a){return"TargetMeleeAttackEvent{"+this.b.l(0)+" -> "+this.c.l(0)+"}"}}
A.jg.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a
if(l.b&&a.d>=0.4){s=m.c
r=m.b
q=m.d
s.e.ai(r.cA(l.a.b),q)
p=l.a
o=r.b.x?B.u:B.t
r.bb(p.c,q,m.e,s,o)
l.b=!1
l=l.a
if(l.b)r.c.b.sau(0,B.t)
else{s=r.c.b
if(l.c<=0)s.sau(0,B.fJ)
else s.sau(0,B.dI)}}l=a.d
if(l<=0.4){s=m.f
r=m.r
n=l/0.6
l=m.b.b.b
l.sa7(0,A.oS(r.a,s.a,n)*24)
l.sa8(0,A.oS(r.b,s.b,n)*36)}else{s=m.b.b
if(l>=0.6){l=s.b
s=m.e
l.sag(s.a)
l.sah(s.b)}else{l=s.b
s=m.r
l.sa7(0,s.a*24)
l.sa8(0,s.b*36)}}},
$S:11}
A.jh.prototype={
$0(){var s,r,q,p,o,n=this,m=n.a
if(m.b){s=n.c
r=n.b
q=n.d
s.e.ai(r.cA(m.a.b),q)
p=m.a
o=r.b.x?B.u:B.t
r.bb(p.c,q,n.e,s,o)
m.b=!1}m=n.b
s=m.b.b
s.sbO(0,n.f)
r=n.e
s.sag(r.a)
s.sah(r.b)
m.c.b.sau(0,B.Z)},
$S:0}
A.jf.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
t.hU.a(a)
s=l.a
r=s.a.a+8000
s.a=new A.ae(r)
if(r>5e5){a.fi(0)
r=l.b.gb3()
q=l.c
if(B.a.E(r.c,q)){r=r.b
B.a.G(q.f.a,r.gfO(r))}}p=B.e.W(s.a.a,1000)/300
s=l.c
r=l.d
q=1-p
o=l.e
n=p*r.a+q*o.a
s.d=n
m=s.f
if(m!=null)m.u(n,s.e)
n=s.r
if(n!=null)n.b.a=!0
r=p*r.b+q*o.b
s.e=r
q=s.f
if(q!=null)q.u(s.d,r)
s=s.r
if(s!=null)s.b.a=!0},
$S:36}
A.dW.prototype={
l(a){return"DeathEvent{"+this.a.l(0)+"}"},
P(a,b){var s,r,q=null,p=b.x2,o=p.e,n=p.d
if(!(n<o.length))return A.b(o,n)
o=this.a
if(o.e){b.bX(o)
return new A.H(q,q,!0,!0,!1,B.i,q,q)}if(o.x){b.bG()
p=b.gaq().c
o=p.e
if(o!=null)p.M(o)
o=p.aO("GAME OVER")
p.e=o
p.K(o)
return new A.H(q,"You Died!",!0,!0,!1,B.i,q,q)}p.a.c.d+=100
s=A.c([],t.w)
p=b.x2.a
if(p.c.d>=1000)B.a.k(s,new A.fY(p))
r=o.t()
p=o.Q
if(p!=null)n=B.r.I()<0.33
else n=!1
if(n){p.toString
r.toString
b.e.b2(p,r,0.8)}b.bX(o)
return new A.H(q,o.l(0)+" has died.",!1,!0,!1,s,q,q)}}
A.d0.prototype={
P(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=b.x2,d=e.e
e=e.d
if(!(e<d.length))return A.b(d,e)
s=d[e]
if($.nu!==s){$.nu=s
e=g.b
B.a7.al(e.a,0,4000,0)
e.b.aW(0)}for(e=b.f.c,d=g.c,r=!d,q=g.b,p=q.b,o=s.d,n=0;n<100;++n)for(m=0;m<40;++m){l=100*m+n
k=new A.i(n,m)
if(!(l<4000))return A.b(e,l)
j=e[l]
if(j===0&&d)if(o.h(0,k).f===B.E)p.j(0,k,100)
else{i=o.h(0,k)
if(!(i.c===B.b||A.O(A.bF(i.f))))p.j(0,k,80)}else if(j===1&&r)p.E(0,k)}q.fN(s,B.af)
e=g.a
d=e.t()
d.toString
k=q.d6(s,d,1,B.af)
if(k==null)return new A.H(f,"No more areas to explore",!1,!0,!1,B.i,f,f)
d=$.fa()
r=e.t()
r.toString
r=d.bK(r,k,s,B.af)
h=r==null?f:r.b
if(h==null)return new A.H(f,"No path to that location",!1,!0,!1,B.i,f,f)
d=h.d
r=e.t()
r.toString
return new A.H(new A.b0(d.a0(0,r),e),f,!0,!0,!1,B.i,f,new A.jl(g))}}
A.jl.prototype={
$0(){var s=this.a
return A.nt(s.a,s.b)},
$S:37}
A.hU.prototype={
P(a,b){var s,r,q,p,o,n,m=null,l=b.x2,k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
s=k[l]
r=A.c([],t.q)
for(l=s.d.c,k=l.length,q=!1,p=0;p<l.length;l.length===k||(0,A.y)(l),++p){o=l[p]
if(o.f===B.a3){o.f=B.E
B.a.k(r,o.b)
q=!0}}if(q){for(l=r.length,k=b.e,p=0;p<r.length;r.length===l||(0,A.y)(r),++p)k.ai("door_unlock_1.mp3",r[p])
l=b.x2
k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
n=this.a
k[l].d.h(0,n).f=B.am
l=b.x2
k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
k[l].ax(n)
return new A.H(m,"A door has been unlocked",!0,!0,!1,B.i,m,m)}return new A.H(m,m,!1,!0,!1,B.i,m,m)}}
A.en.prototype={
P(a,b){var s,r=null,q=this.b,p=q.c.x.b.h(0,B.v)
if(p==null||p.e===0)return new A.H(r,r,!1,!0,!1,B.i,r,r)
s=p.e
s.toString
p.e=s-1
return new A.H(new A.hp(this.a,q),r,!0,!0,!1,B.i,r,r)}}
A.hp.prototype={
P(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null,g=b.x2,f=g.e
g=g.d
if(!(g<f.length))return A.b(f,g)
s=f[g]
g=this.c
f=g.t()
f.toString
r=this.b
q=$.fa().fp(f,r,s)
if(q==null)return new A.H(h,"Cant reach target",!1,!0,!1,B.i,h,h)
p=s.ax(r)
o=A.c([],t.w)
if(p!=null)o.push(new A.dQ(!0,g,p))
n=q.fX(0)
m=b.e.ai("pistol_1.mp3",f)
g=g.b
f=B.c.v(g.d/24)
g=B.c.v(g.e/36)
l=B.fH.h(0,t.gX.i("R.T").a(700))
l.toString
k=new A.h_(new A.fZ(l,10),f,g)
B.a.k(b.gaf().y,k)
g=B.bD.h(0,t.e.i("R.T").a(800))
g.toString
j=new A.Q(14,2,-1,-1,h)
j.saX(0,g)
i=A.mB(h,h,h,0,h,!0,!1,j)
b.cT(i,B.y)
j.sau(0,new A.f(0))
return new A.H(h,h,!0,!0,!1,o,new A.bX(A.jF(16*n.length),new A.kI(n,j,m,k),new A.kJ(b,i,k)),h)}}
A.kI.prototype={
$1(a){var s,r,q=this.a,p=B.c.am(a.d*(q.length-1))
if(!(p>=0&&p<q.length))return A.b(q,p)
s=q[p]
p=this.b
q=s.a
p.sag(q)
r=s.b
p.sah(r)
B.e.v(q)
B.e.v(r)
this.d.a.c=10*(1-a.d)},
$S:11}
A.kJ.prototype={
$0(){var s=this.a
s.bX(this.b)
B.a.E(s.gaf().y,this.c)},
$S:0}
A.fP.prototype={
P(a,b){var s,r=null,q=this.a
B.a.E(this.b.e,q)
B.a.k(this.c.c.x.a,q)
if(q.f!=null){s=b.gR()
q=q.f
q.toString
s.E(0,q)}return new A.H(r,r,!0,!0,!1,B.i,r,r)}}
A.dZ.prototype={
P(a,b){var s,r,q,p=null,o=this.a,n=o.t()
n.toString
s=this.b
B.a.E(o.c.x.a,s)
r=A.o3(s)
r.sag(n.a)
r.sah(n.b)
s.f=r
b.gR().k(0,r)
o=b.x2
q=o.e
o=o.d
if(!(o<q.length))return A.b(q,o)
B.a.k(q[o].d.h(0,n).e,s)
return new A.H(p,p,!0,!0,!1,B.i,p,p)}}
A.hW.prototype={
P(a,b){var s,r=null,q=this.b
if(q.c!==B.N)return new A.H(r,r,!1,!0,!1,B.i,r,r)
s=this.a.c
s.toString
switch(t.i_.a(q.b)){case B.be:s.sfk(Math.min(s.b+5,s.a))
break}B.a.E(s.x.a,q)
return new A.H(r,r,!0,!0,!1,B.i,r,r)}}
A.fJ.prototype={}
A.jL.prototype={
ep(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.d.T(b,f,c)
s=A.nS(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
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
s[h]=g}B.d.aH(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
b5(a,b){var s,r,q=a.b*100+a.a
if(q<0||q>=4000)return null
s=this.f
r=s.h(0,a)
if(r==null){r=new A.iQ(b.createTexture())
s.j(0,a,r)}if(r.b){this.ep(a,b,r.a)
r.b=!1}return r.a},
ad(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.kM(p,p+4000,B.e.cd(s.byteLength,r))
return new A.l4(100,A.nS(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
c2(){var s,r,q,p,o=this.ad(this.e).c
for(s=o.length,r=this.c,q=0;q<4000;++q){p=r[q]
if(!(q<s))return A.b(o,q)
r[q]=p|(o[q]>0?1:0)}},
dd(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.bp(new A.i(s,r))
for(q=this.f,q=q.gc3(q),q=q.gA(q);q.n();)q.gp(q).b=!0},
dj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.nr.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.ae(0,r,q)
o=o.c===B.b||A.O(A.pX(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.bp(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]>0)g.bp(new A.i(m,l))}s=g.ad(b)
s.toString
for(p=g.f,p=p.gak(p),p=p.gA(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]>0)i.b.b=!0}},
di(a){return this.dj(a,null)},
bp(a){var s,r,q,p=this.ad(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=1
for(q=0;q<4;++q)this.eQ(new A.dk(1,-1,1),new A.kK(B.ft[q],a),o)},
eP(a,b,c){if(a<0||a>=b.byteLength)return
if(!(a>=0&&a<b.length))return A.b(b,a)
b[a]=1},
cD(a,b){var s
if(a<0||a>=b.byteLength)return!0
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
bq(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===0},
eQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.r
B.a.sm(d,0)
B.a.k(d,a)
for(s=b.a;r=d.length,r!==0;){if(0>=r)return A.b(d,-1)
q=d.pop()
r=q.a
p=B.c.am(r*q.b+0.5)
o=B.c.d1(r*q.c-0.5)
for(n=r+1,m=2*r,l=p,k=null;l<=o;++l,k=i){j=b.fZ(0,new A.i(r,l))
i=j.b*100+j.a
h=e.cD(i,c)
if(!h)g=l>=r*q.b&&l<=r*q.c
else g=!0
if(g)e.eP(i,c,s)
g=k!=null
if(g&&e.cD(k,c)&&e.bq(i,c))q.b=(2*l-1)/m
if(g&&e.bq(k,c)&&h){f=new A.dk(n,q.b,q.c)
f.c=(2*l-1)/m
B.a.k(d,f)}}if(k!=null&&e.bq(k,c))B.a.k(d,new A.dk(n,q.b,q.c))}}}
A.iQ.prototype={}
A.l4.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0},
ae(a,b,c){var s=this.c,r=c*this.a+b
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0}}
A.cm.prototype={
l(a){return"Cardinal."+this.b}}
A.kK.prototype={
fZ(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a){case B.ba:s=r.b
return new A.i(s.a+p,s.b-q)
case B.bb:s=r.b
return new A.i(s.a+p,s.b+q)
case B.bc:s=r.b
return new A.i(s.a+q,s.b+p)
case B.bd:s=r.b
return new A.i(s.a-q,s.b+p)}}}
A.dk.prototype={}
A.aY.prototype={
l(a){return this.a}}
A.eb.prototype={
U(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=3553,a="u_player_visible_texture"
if(c.f==null){s=a0.createTexture()
c.f=s
B.d.T(a0,b,s)
B.d.aH(a0,b,0,6408,100,40,0,6408,5121,null)
a0.texParameteri(b,10241,9729)
a0.texParameteri(b,10242,33071)
a0.texParameteri(b,10243,33071)}B.d.aF(a0,36160,c.e)
B.d.bM(a0,36160,36064,b,c.f,0)
a0.clearColor(0,0,0,1)
a0.clear(16640)
a0.viewport(0,0,100,40)
s=c.d
r=s.b5(s.e,a0)
r.toString
a0.activeTexture(33985)
B.d.T(a0,b,r)
for(q=c.y,p=q.length,o=c.b,n=t.t,m=t.n,l=t.N,k=t.z,j=0;j<q.length;q.length===p||(0,A.y)(q),++j){i=q[j]
h=i.gbP()
g=s.b5(new A.i(i.ga7(i),i.ga8(i)),a0)
if(g==null)continue
a0.activeTexture(33984)
B.d.T(a0,b,g)
f=h.c
e=A.c([i.ga7(i),i.ga8(i)],n)
d=h.b.a
o.ab(a0,4,3,A.b_(["u_source_strength",f,"u_source_position",e,"u_source_color",A.c([(d>>>16&255)/255,(d>>>8&255)/255,(d&255)/255,0.2],m),"u_time",a1.c/1000,a,1,"u_visible_texture",0],l,k))}B.d.aF(a0,36160,c.z)
a0.viewport(0,0,a1.a,a1.b)
a0.activeTexture(33984)
B.d.T(a0,b,c.f)
a0.activeTexture(33985)
B.d.T(a0,b,c.r)
a0.activeTexture(33986)
B.d.T(a0,b,r)
c.c.ab(a0,4,3,A.b_(["u_light_texture",0,"u_game_world_texture",1,a,2,"u_block_size",B.fs,"u_resolution",A.c([a1.a,a1.b],n),"u_offset",A.c([a1.d,a1.e],m)],l,k))}}
A.bJ.prototype={
gd4(){var s=this.b
s=s==null?null:s.gd4()
return 1+(s==null?0:s)},
X(a,b){return B.c.X(this.f,t.p6.a(b).f)},
gcN(){var s,r=this.a
if(r==null)r=this
else{s=r.a
r=s==null?r:s.gcN()}return r},
ew(){var s,r,q
for(s=this,r=null;s!=null;r=s,s=q){s.b=r
q=s.a}},
fX(a){var s,r=A.c([],t.q)
for(s=this;s!=null;){B.a.k(r,s.d)
s=s.b}return r},
l(a){var s,r,q,p
for(s=this.d,r=this,q="",p="";r!=null;q=", "){p=p+q+s.l(0)
r=r.b}return p.charCodeAt(0)==0?p:p},
$iam:1}
A.b5.prototype={
l(a){return"Directions."+this.b}}
A.kE.prototype={
fp(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.a,e=a1.a,d=a0.b,c=a1.b,b=Math.max(Math.abs(f-e),Math.abs(d-c)),a=new A.bJ(a0,0,b*1.02+0)
for(s=(b-1)*1.02+1,r=a2.d,q=t.J,p=r.a,o=r.b,n=a0,m=a,l=1;l<=b;++l,n=h,m=g){k=l/b
j=1-k
i=B.c.v(e*k+f*j)
j=B.c.v(c*k+d*j)
h=new A.i(i,j)
if(!(i>=0&&j>=0&&i<p&&j<o))return null
if(A.lU(q.a(r.h(0,h)),a2,B.Y)&&l!==b)return null
A.rF(i-n.a,j-n.b)
g=new A.bJ(h,1,s)
g.a=m
m.b=g}return a},
bK(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=A.nF(b,t.p6),a0=A.ai(t.j,t.i),a1=a4.d
a.k(0,new A.bJ(a2,0,a2.b1(a3)*1.02+0))
for(s=a.$ti.c,r=a1.a,q=a1.b,p=t.J;o=a.c,n=o===0,!n;){if(n)A.U(A.ao("No element"));++a.d
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
if(k>0)a.ck(j,0)
o=l.d
i=a0.h(0,o)
if(i!=null&&i<l.e)continue
for(n=l.e,h=0;h<8;++h){g=B.aS[h]
f=A.ad(o,g)
m=f.a
if(m>=0){e=f.b
m=e>=0&&m<r&&e<q}else m=!1
if(m){m=l.a
if(!J.Z(m==null?b:m.d,f))m=A.lU(p.a(a1.h(0,f)),a4,a5)&&!f.q(0,a3)
else m=!0}else m=!0
if(m)continue
m=f.b1(a3)
e=this.eG(g)
if(typeof e!=="number")return A.cQ(e)
e=n+e
d=new A.bJ(f,e,m*1.02+e)
d.a=l
if(f.q(0,a3)){d.ew()
s=l.a
return s==null?l:s.gcN()}c=a0.h(0,f)
if(!(e>1/0))m=c!=null&&e>=c
else m=!0
if(m)continue
a0.j(0,f,e)
s.a(d);++a.d
a.aw(0,d)}}return b},
d7(a,b,c){return this.bK(a,b,c,B.Y)},
eG(a){switch(a){case B.m:case B.p:case B.n:case B.o:return 1
case B.P:case B.O:case B.Q:case B.R:return 1.4}}}
A.fA.prototype={
d6(a,b,c,d){var s,r,q,p,o,n,m,l,k=this.a,j=b.b*100+b.a
if(!(j>=0&&j<4000))return A.b(k,j)
s=k[j]*c
r=A.c([],t.q)
for(j=a.d,q=t.J,p=!1,o=0;o<8;++o){n=A.ad(b,B.aS[o])
m=n.b*100+n.a
if(m<0||m>=4000)continue
if(A.lU(q.a(j.h(0,n)),a,d))continue
if(!(m>=0&&m<4000))return A.b(k,m)
l=k[m]*c
if(l>s){B.a.sm(r,0)
B.a.k(r,n)
s=l
p=!0}else if(l===s)B.a.k(r,n)}k=r.length
if(k===0||!p)return null
k=$.p_().J(k)
if(!(k>=0&&k<r.length))return A.b(r,k)
return r[k]},
bJ(a,b,c){return this.d6(a,b,c,B.Y)},
fN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
B.a7.al(f,0,4000,0)
for(s=this.b,s=s.gak(s),s=s.gA(s);s.n();){r=s.gp(s)
q=r.a
B.a7.j(f,q.b*100+q.a,r.b)}s=a.d
r=t.J
do for(p=!1,o=0;o<100;++o)for(n=0;n<40;++n){m=n*100+o
if(A.lU(r.a(s.h(0,new A.i(o,n))),a,b))continue
if(!(m<4000))return A.b(f,m)
l=f[m]
for(q=[m+100,m-100,m+1,m-1],k=-1,j=0,i=0;i<4;++i){h=q[i]
if(h<0||h>=4000)continue
if(!(h>=0&&h<4000))return A.b(f,h)
g=f[h]
if(g>j){j=g
k=h}}if(k!==-1&&j>l+1){f[m]=j-1
p=!0}}while(p)}}
A.hx.prototype={
eH(a,b){var s,r,q,p,o,n,m,l=this,k="a_position",j=B.c.am((b.f+b.d)/24),i=B.c.am((b.r+b.e)/36),h=new A.i(j,i)
if(h.q(0,l.d)||j<0||j>=100||i<0||i>=40)return
l.d=h
s=l.c
r=s.Z(k,t.C)
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
A.T.prototype={}
A.x.prototype={}
A.cJ.prototype={
l(a){return"UniformKind."+this.b}}
A.i4.prototype={}
A.iV.prototype={}
A.k9.prototype={
Y(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.or(a,i.a,35633),f=A.or(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.Z(a.getProgramParameter(e,35714),!0)){A.cS(a.getProgramInfoLog(e))
A.U(A.ao("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.d.d_(a,A.dC(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.y)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.iV(a.getUniformLocation(A.dC(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.y)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.dC(i.e,h),n)
k=a.createBuffer()
B.d.cY(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.i4(k,j))}},
Z(a,b){A.rz(b,t.jv,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
a4(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.d(A.ao("WARNING, NO ATTRIBUTE "+b))
B.d.cY(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
ab(a,b,c,d){var s,r,q,p,o,n
t.ea.a(d)
B.d.h5(a,A.dC(this.e,"_program"))
B.d.d_(a,A.dC(this.f,"_vertexArrayObject"))
for(s=d.gak(d),s=s.gA(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.a5(p)
n=r.h(0,p)
if(n==null)A.U(A.ao("WARNING, NO UNIFORM "+p))
switch(n.b.b){case B.A:B.d.h0(a,n.a,A.bd(o))
break
case B.f:q=J.aE(o)
B.d.h2(a,n.a,A.bd(q.h(o,0)),A.bd(q.h(o,1)))
break
case B.hl:q=J.aE(o)
B.d.h3(a,n.a,A.bd(q.h(o,0)),A.bd(q.h(o,1)),A.bd(q.h(o,2)))
break
case B.b0:q=J.aE(o)
B.d.h4(a,n.a,A.bd(q.h(o,0)),A.bd(q.h(o,1)),A.bd(q.h(o,2)),A.bd(q.h(o,3)))
break
case B.k:B.d.h1(a,n.a,A.K(o))
break}}a.drawArrays(b,0,c)}}
A.kN.prototype={
sfF(a){this.f=A.oo(a)}}
A.az.prototype={}
A.d_.prototype={}
A.hd.prototype={}
A.he.prototype={
ba(a){},
$id_:1}
A.hz.prototype={
b_(){var s=0,r=A.bi(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$b_=A.bj(function(a,b){if(a===1)return A.be(b,r)
while(true)switch(s){case 0:e=A.c([],t.iw)
for(p=q.b,o=t.cU,n=t.ou,m=t.oV,l=t.Z,k=t.fq,j=0;j<47;++j){i=p[j]
h=new XMLHttpRequest()
g=new A.F($.C,o)
B.ff.fK(h,"get","sounds/"+i)
h.responseType="arraybuffer"
f=m.a(new A.kR(q,h,i,new A.ac(g,n)))
l.a(null)
A.eI(h,"readystatechange",f,!1,k)
h.send()
B.a.k(e,g)}s=2
return A.a6(A.pT(e,t.H),$async$b_)
case 2:return A.bf(null,r)}})
return A.bg($async$b_,r)},
b2(a,b,c){var s,r,q,p=this.c,o=A.nE(p),n=this.a.h(0,a)
if(n==null)return new A.hd()
s=p.createBufferSource()
r=B.r.I()
q=o.gain
q.toString
B.b6.sdE(q,0.1*c+r/20)
p=p.destination
p.toString
B.bk.aN(o,p,0,0)
B.V.aN(s,o,0,0)
B.V.sd0(s,n)
s.start()
return new A.hd()},
ai(a,b){return this.b2(a,b,2)},
fQ(a){var s,r,q,p,o,n
A.a5(a)
A.cS("playing "+a)
s=this.c
r=A.nE(s)
q=this.a.h(0,a)
if(q==null){A.cS("no name")
return new A.he()}p=s.createBufferSource()
o=B.r.I()
n=r.gain
n.toString
B.b6.sdE(n,0.2+o/20)
s=s.destination
s.toString
B.bk.aN(r,s,0,0)
B.V.aN(p,r,0,0)
B.V.sd0(p,q)
B.V.sfC(p,!0)
p.start()
return new A.fU(p)},
$iqk:1}
A.kR.prototype={
$1(a){var s=0,r=A.bi(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.bj(function(b,c){if(b===1)return A.be(c,r)
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
return A.a6(B.dw.fl(n.c,t.lo.a(A.qV(m.response))),$async$$1)
case 7:l.j(0,k,c)
p.aG(0)
s=5
break
case 6:p.aY(new A.ie("Failed to load "+o))
case 5:case 3:return A.bf(null,r)}})
return A.bg($async$$1,r)},
$S:38}
A.fU.prototype={
ba(a){this.a.stop()}}
A.m4.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.d.T(q,r,p)
B.d.dz(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.a3(0,p)},
$S:10}
A.ev.prototype={
e4(a,b){A.rU(a,"CursesTransparent_24x36.png").c_(new A.kS(this),t.P)},
k(a,b){b.a=this
this.d.k(0,b)
this.a=!0},
E(a,b){t.r.a(b)
this.d.E(0,b)
b.a=null
this.a=!0},
aW(a){var s,r,q,p
for(s=this.d,r=s.$ti,q=new A.cM(s,s.d,r.i("cM<1>")),r=r.c;q.n();){if(q.d<0)p=A.U(A.ao("No element"))
else{p=q.c
if(p==null)p=r.a(null)}p.a=null}++s.d
s.sby(B.fx)
s.c=0
this.a=!0},
eX(c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9="a_position",c0="a_texcoord",c1="a_bg_color",c2=b8.d,c3=c2.c
if(c3>1e4){A.cS("WARNING: TOO MANY SPRITES "+c3)
if(b8.f)b8.f=!1
c3=1e4}s=b8.b
r=t.jv
q=c3*12
p=A.cC(s.Z(b9,r).buffer,0,q)
o=A.cC(s.Z(c0,r).buffer,0,q)
q=c3*24
n=A.cC(s.Z("a_color",r).buffer,0,q)
m=A.cC(s.Z(c1,r).buffer,0,q)
l=c2.f5()
B.a.b9(l,c2.a)
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
p[a6]=a}else{b0=B.c.ap(12*a9)
b1=B.c.ap(18*a9)
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
if(b5==null)B.au.al(n,b4,b4+24,0)
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
n[a]=e}if(b6==null)B.au.al(m,b4,b4+24,0)
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
U(a,b){var s,r=this
if(r.c==null||r.d.c===0)return
if(r.a){r.eX(a)
r.a=!1}s=r.e
s.b5(s.e,a)
a.activeTexture(33984)
B.d.T(a,3553,r.c)
r.b.ab(a,4,r.d.c*6,A.b_(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.kS.prototype={
$1(a){this.a.c=t.lJ.a(a)},
$S:15}
A.Q.prototype={
sa7(a,b){var s=this.a
if(s!=null)s.a=!0
this.d=b},
sa8(a,b){var s=this.a
if(s!=null)s.a=!0
this.e=b},
saJ(a,b){var s=this.a
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
saX(a,b){var s=this.a
if(s!=null)s.a=!0
this.x=b},
sbO(a,b){var s
this.y=b
s=this.a
if(s!=null)s.a=!0},
l(a){return"Sprite("+this.b+", "+this.c+")"}}
A.k.prototype={}
A.ks.prototype={}
A.hJ.prototype={
f0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(this.c==null)return
s=this.b
r=s.Z("a_color",t.C)
q=this.c
switch(q.e.a){case B.H:case B.B:case B.X:case B.W:p=$.p0()
break
case B.w:p=$.nb()
break
case B.C:p=$.p2()
break
case B.F:p=$.p1()
break
default:p=null}for(o=r.length,q=q.d.c,n=q.length,m=0;m<40;++m)for(l=m<39,k=m*100,j=0;j<100;++j){i=k+j
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
f=!(f.c===B.b||A.O(A.bF(f.f)))}else f=!1
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
U(a,b){var s=this
if(s.d){s.f0(a)
s.d=!1}if(s.c==null)return
s.b.ab(a,4,48e3,A.b_(["u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.hK.prototype={
fd(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.k),i=a.a
i=(i.length===0?B.aa:new A.bL(i)).a
s=new A.dn(i,0,0)
r=this.b
q=r.d
p=q.$ti.c
o=a.c
n=a.b
for(;s.bc(1,s.c);){m=s.d
l=$.qU.h(0,m==null?s.d=B.h.aL(i,s.b,s.c):m)
if(l==null)l=B.ha
k=new A.Q(l.a,l.b,-1,-1,null)
k.x=n
k.f=o
k.a=r
p.a(k);++q.d
q.aw(0,k)
r.a=!0
B.a.k(j,k)}a.r=this
i=new A.lD(j)
i.u(a.d,a.e)
a.f=i
B.a.k(this.c,a)}}
A.hq.prototype={}
A.lD.prototype={
u(a,b){var s,r,q,p,o,n,m
for(s=this.a,r=s.length,q=0,p=0;p<r;++p){o=s[p]
n=o.a
m=n==null
if(!m)n.a=!0
o.d=a+q
if(!m)n.a=!0
o.e=b
q+=24}}}
A.m3.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.d.T(q,r,p)
B.d.dz(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.a3(0,p)},
$S:10}
A.hQ.prototype={
e5(a){A.rT(a,"CursesTransparent_24x36.png").c_(new A.l2(this),t.P)},
f8(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5="a_position",b6="a_texcoord",b7="a_bg_color",b8=b4.d,b9=b8.length
if(b9>1e4){A.cS("WARNING: TOO MANY SPRITES "+b9)
if(b4.r)b4.r=!1
b9=1e4}s=b4.e
r=t.jv
q=b9*12
p=A.cC(s.Z(b5,r).buffer,0,q)
o=A.cC(s.Z(b6,r).buffer,0,q)
q=b9*24
n=A.cC(s.Z("a_color",r).buffer,0,q)
m=A.cC(s.Z(b7,r).buffer,0,q)
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
if(b1==null)B.au.al(n,b0,b0+24,0)
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
n[a]=e}if(b2==null)B.au.al(m,b0,b0+24,0)
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
U(a,b){var s,r,q=this
if(q.f==null)return
s=q.c
s.sfe(q.b)
s.sdS(b.b)
s.sdT(b.a)
r=q.b
if(r==null)r=null
else{r=r.c
r=new A.fM(r.b,r.a)}s.f.sfz(r)
s.r.sdU(0,q.b!=null)
if(s.b){r=b.b
s.u(B.q,new A.bq(0,0,b.a,r))
r=q.d
B.a.sm(r,0)
B.a.L(r,s.H())
s.cE()
q.a=!0}if(q.a){q.f8(a)
q.a=!1}a.activeTexture(33984)
B.d.T(a,3553,q.f)
q.e.ab(a,4,q.d.length*6,A.b_(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t)],t.N,t.z))},
$iq3:1}
A.l2.prototype={
$1(a){this.a.f=t.lJ.a(a)},
$S:15}
A.aO.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.aO&&b.a.q(0,this.a)&&b.b===this.b&&b.c===this.c},
gB(a){return A.cF(this.a,this.b,this.c,B.D)},
l(a){var s=this.a
return"Rect("+A.D(s.a)+", "+A.D(s.b)+", "+this.b+", "+this.c+")"}}
A.af.prototype={
a6(a){var s=a==null?[]:a,r=s.length,q=0
for(;q<s.length;s.length===r||(0,A.y)(s),++q)s[q].seI(this)},
fP(){var s,r,q
for(s=this.c,r=s.length,q=0;q<r;++q)s[q].a=null
B.a.sm(s,0)
this.D()},
K(a){B.a.k(this.c,a)
a.a=this
this.D()},
M(a){if(a==null)return
B.a.E(this.c,a)
a.a=null
this.D()},
an(a){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)if(s[q].an(a))return!0
return!1},
D(){this.b=!0
var s=this.a
if(s!=null)s.D()},
cE(){var s,r,q
this.b=!1
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)s[q].cE()},
seI(a){this.a=t.mV.a(a)}}
A.bu.prototype={
fg(a,b){var s,r,q=this
q.r=q.r+b.r
s=q.f
if(s!=null){r=b.f
r.toString
q.sd2(B.a.w(s,r))}},
sfW(a,b){this.r=b
this.D()},
sdA(a){if(a===this.x)return
this.x=a
this.D()},
u(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.d=a
j.D()
if(b.q(0,j.z)&&j.r===j.Q)return j.ch
s=j.y
B.a.sm(s,0)
r=b.c
if(r==null)r=1/0
q=t.t
p=0
o=0
while(!0){n=j.r
n=n.length===0?B.aa:new A.bL(n)
if(!(p<n.gm(n)))break
m=p
l=0
while(!0){if(l<r){n=j.r
n=n.length===0?B.aa:new A.bL(n)
n=m<n.gm(n)}else n=!1
if(!n)break
if(B.h.av(j.r,m)===10){++m
break}l+=24*j.x;++m}k=m
while(!0){n=j.r
n=n.length===0?B.aa:new A.bL(n)
if(!(k<n.gm(n)&&k>0&&B.h.av(j.r,k-1)!==32&&k>p))break;--k
l-=24*j.x}m=k===p?m:k
if(l>o)o=l
B.a.k(s,A.c([p,m],q))
p=m}j.z=b
j.Q=j.r
return j.ch=new A.aO(a,B.c.v(o),B.c.v(s.length*36*j.x))},
H(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.c([],t.k)
for(s=e.y,r=s.length,q=t.n8,p=0,o=0;o<s.length;s.length===r||(0,A.y)(s),++o){n=s[o]
m=e.r
l=n.length
if(0>=l)return A.b(n,0)
k=n[0]
if(1>=l)return A.b(n,1)
k=B.h.h_(B.h.aL(m,k,n[1]))
m=(k.length===0?B.aa:new A.bL(k)).a
l=new A.dn(m,0,0)
k=p*36
j=0
for(;l.bc(1,l.c);){i=l.d
h=$.qT.h(0,i==null?l.d=B.h.aL(m,l.b,l.c):i)
if(h==null)h=B.he
h=new A.Q(h.a,h.b,-1,-1,null)
g=e.f
if(g==null)g=B.u
else{f=j+p
if(!(f<g.length))return A.b(g,f)
f=g[f]
g=f}q.a(g)
h.x=g
h.r=e.e
g=e.x
h.f=g
f=e.d
h.d=f.a+j*24*g
h.e=f.b+k*g
B.a.k(d,h);++j}++p}return d},
sd2(a){this.f=t.jw.a(a)}}
A.ft.prototype={
H(){var s,r,q,p=A.c([],t.k)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)B.a.L(p,s[q].H())
return p},
u(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.d=a
j.D()
if(j.e){s=b.d
s.toString
for(r=j.c,q=a.a,p=a.b,o=s,n=0,m=0;m<r.length;++m){l=r[m]
k=l.u(new A.N(q,p),b)
n=Math.max(k.b,n)
o-=k.c
l.u(new A.N(q,p+o),b)}o=s}else for(s=j.c,r=a.a,q=a.b,n=0,o=0,m=0;m<s.length;++m){k=s[m].u(new A.N(r,q+o),b)
n=Math.max(k.b,n)
o+=k.c}return new A.aO(a,n,o)}}
A.fk.prototype={
u(a,b){var s,r,q,p=this
p.d=a
p.D()
s=b.q(0,B.a_)
r=p.c
q=r.length
if(s){if(0>=q)return A.b(r,0)
return p.f=r[0].u(a,b)}else{if(0>=q)return A.b(r,0)
r[0].u(a,b)
s=b.c
s.toString
r=b.d
r.toString
return p.f=new A.aO(a,s,r)}},
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
A.hk.prototype={
H(){var s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].H()},
u(a,b){var s,r,q,p,o,n=this
n.d=a
n.D()
if(!b.q(0,B.a_)){s=b.d
s.toString
r=b.c
r.toString
q=new A.bq(b.a,b.b,r-n.r-n.x,s-n.e-n.f)}else q=b
s=n.c
if(0>=s.length)return A.b(s,0)
r=n.r
p=n.e
o=s[0].u(a.w(0,new A.N(r,p)),q)
return new A.aO(a,o.b+r+n.x,o.c+p+n.f)}}
A.dS.prototype={
u(a,b){var s,r,q,p,o,n,m=this
m.d=a
m.D()
if(!b.q(0,B.a_)){s=b.d
s.toString
r=b.c
r.toString
q=new A.bq(b.a,b.b,r-48,s-72)}else q=b
s=m.c
if(0>=s.length)return A.b(s,0)
r=s[0]
p=r.u(a.w(0,new A.N(24,36)),q)
r=m.e
o=r==null?null:r.u(a.w(0,new A.N(24,0)),b)
if(o!=null){r=o.b
n=p.b
if(r>n){if(0>=s.length)return A.b(s,0)
s=s[0]
s.u(a.w(0,new A.N(24,36)),new A.bq(0,0,r,p.c))}return m.ch=new A.aO(a,Math.max(n,r)+48,p.c+72)}return m.ch=new A.aO(a,p.b+48,p.c+72)},
H(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.c([],t.k),f=h.ch,e=B.c.v(f.c/36),d=B.c.v(f.b/24)
for(f=h.r,s=e-1,r=d-1,q=0;q<e;++q)for(p=q*36,o=q===s,n=q===0,m=0;m<d;++m){l=m===0
if(l&&n)k=B.hh
else if(l&&o)k=B.hf
else{j=m===r
if(j&&n)k=B.h4
else if(j&&o)k=B.h7
else if(l)k=B.bW
else if(j)k=B.bW
else if(n)k=B.c7
else k=o?B.c7:null}if(k==null)continue
i=new A.Q(k.a,k.b,-1,-1,null)
l=h.d
i.d=l.a+m*24
i.e=l.b+p
i.x=f
i.r=B.Z
B.a.k(g,i)}f=h.c
if(0>=f.length)return A.b(f,0)
f=A.ee(f[0].H(),!0,t.r)
B.a.L(f,g)
s=h.e
s=s==null?null:s.H()
if(s!=null)B.a.L(f,s)
return f}}
A.dl.prototype={
an(a){var s,r,q=this,p="click_1.mp3"
if(a.q(0,B.aQ)&&q.x>0){--q.x
q.D()
$.ag.a2().e.ai(p,B.y)
return!0}if(a.q(0,B.aP)&&q.x<q.e.length-1){++q.x
q.D()
$.ag.a2().e.ai(p,B.y)
return!0}if(a.q(0,B.bu)||a.q(0,B.br)){s=q.e
r=q.x
if(!(r>=0&&r<s.length))return A.b(s,r)
q.f.$1(s[r])
$.ag.a2().e.ai(p,B.y)
return!0}if(a.q(0,B.aR)){q.r.$0()
return!0}if(q.cb(a))return!0
if(a.q(0,B.aQ)||a.q(0,B.aP)||a.q(0,B.bs)||a.q(0,B.bt))return!0
return!1},
H(){var s,r=this,q=r.c
if(0>=q.length)return A.b(q,0)
q=A.ee(q[0].H(),!0,t.r)
if(r.e.length!==0){s=A.cH(B.h3)
s.saX(0,B.Z)
s.sa7(0,r.d.a+48)
s.sa8(0,r.d.b+r.x*36+72)
q.push(s)}return q},
u(a,b){var s
this.d=a
this.D()
s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].u(a,b)}}
A.cU.prototype={
an(a){if(a.q(0,B.bu)||a.q(0,B.br)||a.q(0,B.aR)){this.e.$0()
$.ag.a2().e.ai("click_1.mp3",B.y)
return!0}if(a.q(0,B.aQ)||a.q(0,B.aP)||a.q(0,B.bs)||a.q(0,B.bt))return!0
return this.cb(a)},
H(){var s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].H()},
u(a,b){var s
this.d=a
this.D()
s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].u(a,b)}}
A.h1.prototype={}
A.e2.prototype={
sfe(a){if(this.x==a)return
this.x=a
this.D()},
sdT(a){if(a===this.y)return
this.y=a
this.D()},
sdS(a){if(a===this.z)return
this.z=a
this.D()},
sfE(a){var s,r=this
if(a===r.Q)return
r.Q=a
s=r.el()
r.e=s
r.K(s)
r.D()},
eo(){return A.nq("After a difficult journey through <NAME> mountains, you arrive at the base of the <FACTION> mining camp. Delve to the 10th level to discover the secret of <ARTIFACT>.\n\nPress [Enter] To Start",new A.k5(this))},
cs(a,b){var s,r,q,p
t.fb.a(a)
s=A.c([],t.I)
r=a==null?this.x.c.x.a:a
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.y)(r),++p)s.push(r[p])
return A.es(A.ta(),s,new A.jZ(this),new A.k_(this,b),"Inventory",t.W)},
bi(a){return this.cs(a,null)},
em(a){var s=A.c([],t.s),r=a.c
if(r===B.N)s.push("Use")
if(r===B.M||r===B.K||r===B.L)s.push("Equip")
s.push("Drop")
return A.es(null,s,new A.k0(this),new A.k1(this,a),a.d,t.N)},
en(){return A.nq("The Something of Something by Jonah Williams.\nSounds from Zapsplat.com.\n\nMade with Love in California.",new A.k2(this))},
cr(){var s,r,q=A.c([],t.lT)
for(s=this.x.c.x.b,s=s.gak(s),s=s.gA(s);s.n();){r=s.gp(s)
q.push(new A.bE(r.a,r.b))}return A.es(A.t9(),q,new A.jU(this),new A.jV(this),"Equipment",t.h)},
ek(a){var s=a.b.d
return A.es(null,A.c(["Unequip","Drop"],t.s),new A.jS(this),new A.jT(this,a),s,t.N)},
el(){var s,r,q,p=[]
for(s=this.Q.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)p.push(s[q])
return A.es(new A.jW(),p,new A.jX(this),new A.jY(this),null,t.z)},
aO(a){return A.es(null,A.c(["New Game","Settings","Credits","Quit"],t.s),new A.k3(this),new A.k4(this),a,t.N)},
an(a){var s,r=this
if(a.q(0,B.aR)&&r.e==null){s=r.aO("")
r.e=s
r.K(s)
return!0}if(a.q(0,B.fp)&&r.e==null){s=r.bi(null)
r.e=s
r.K(s)
return!0}if(a.q(0,B.fo)&&r.e==null){s=r.cr()
r.e=s
r.K(s)
return!0}s=r.e
s=s==null?null:s.an(a)
return s==null?r.f.an(a):s},
H(){var s=A.c([],t.k),r=this.e
r=r==null?null:r.H()
if(r!=null)B.a.L(s,r)
B.a.L(s,this.f.H())
B.a.L(s,this.r.H())
return s},
u(a,b){var s,r,q,p,o,n=this
n.d=a
n.D()
s=n.e
if(s!=null){r=s instanceof A.cU?new A.bq(0,0,864,432):B.a_
s=B.c.ap(n.y/2)
q=B.c.ap(n.z/2)
p=n.e.u(new A.N(s,q),r)
n.e.u(new A.N(s-p.b/2,q-p.c/2),r)}n.f.u(new A.N(0,n.z-36),b)
s=n.r
o=s.u(B.q,b)
s.u(new A.N(n.y-o.b,0),b)
return new A.aO(a,n.y,n.z)}}
A.k5.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.M(r)
s.e=null},
$S:0}
A.k_.prototype={
$1(a){var s,r
t.W.a(a)
s=this.a
r=s.e
r.toString
s.M(r)
s.e=null
r=this.b
if(r!=null){B.a.E(s.x.c.x.a,a)
s.x.c.x.bI(a,r)
r=s.cr()
s.e=r
s.K(r)}else{r=s.em(a)
s.e=r
s.K(r)}},
$S:41}
A.jZ.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.M(r)
s.e=null},
$S:0}
A.k1.prototype={
$1(a){var s,r,q,p,o=this
A.a5(a)
if(a==="Drop"){s=$.ag.a2().go
r=o.a.x
r.toString
s.k(0,new A.dZ(r,o.b))}if(a==="Use"){s=$.ag.a2().go
r=o.a.x
r.toString
s.k(0,new A.hW(r,o.b))}if(a==="Equip"){s=o.b
r=s.gfo()
r.toString
q=o.a
p=q.x.c.x.b.h(0,r)
if(p!=null){q.x.c.x.dC(p)
B.a.k(q.x.c.x.a,p)}B.a.E(q.x.c.x.a,s)
q.x.c.x.bI(s,r)}s=o.a
r=s.e
r.toString
s.M(r)
s.e=null},
$S:12}
A.k0.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.M(r)
r=s.bi(null)
s.e=r
s.K(r)},
$S:0}
A.k2.prototype={
$0(){var s,r=this.a
r.M(r.e)
s=r.aO("The Something of Something")
r.e=s
r.K(s)},
$S:0}
A.jV.prototype={
$1(a){var s,r,q
t.h.a(a)
s=this.a
r=s.e
r.toString
s.M(r)
s.e=null
if(a.b==null){r=a.a
q=s.x.c.x.dk(r)
r=s.cs(A.ee(q,!0,q.$ti.i("j.E")),r)
s.e=r
s.K(r)}else{r=s.ek(a)
s.e=r
s.K(r)}},
$S:43}
A.jU.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.M(r)
s.e=null},
$S:0}
A.jT.prototype={
$1(a){var s,r,q,p=this
A.a5(a)
if(a==="Drop"){s=$.ag.a2().go
r=p.a.x
r.toString
q=p.b.b
q.toString
s.k(0,new A.dZ(r,q))}if(a==="Unequip"){s=p.a
r=s.x.c.x
q=p.b.b
q.toString
B.a.k(r.a,q)
s.x.c.x.dC(q)}s=p.a
r=s.e
r.toString
s.M(r)
s.e=null},
$S:12}
A.jS.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.M(r)
r=s.bi(null)
s.e=r
s.K(r)},
$S:0}
A.jY.prototype={
$1(a){var s=this.a,r=s.e
r.toString
s.M(r)
s.e=null
s.Q.b.a3(0,a)
s.Q=null},
$S:5}
A.jX.prototype={
$0(){var s,r=this.a
r.Q.b.a3(0,null)
s=r.e
s.toString
r.M(s)
r.e=null},
$S:0}
A.jW.prototype={
$1(a){var s
if(a instanceof A.aY&&a.b!=null){s=a.b
s.toString
return s}return A.aC(J.cT(a),null)},
$S:44}
A.k4.prototype={
$1(a){var s,r,q,p,o,n,m,l=null
A.a5(a)
if(a==="New Game"){$.ag.a2().x1=!0
$.ag.a2().bG()
s=$.ag.a2()
r=$.dI()
q=t.t
p=t.ku
q=new A.jD(new A.jm(B.r,new A.kb(B.r)),A.c([new A.ax(B.H,r.I()<=0.6,1),new A.ax(B.B,r.I()<=0.4,2),new A.ax(B.B,r.I()<=0.4,3),new A.ax(B.B,r.I()<=0.4,4),new A.ax(B.w,r.I()<=0.2,5),new A.ax(B.w,r.I()<=0.2,6),new A.ax(B.w,r.I()<=0.2,7),new A.ax(B.C,r.I()<=0.1,8),new A.ax(B.C,r.I()<=0.1,9),new A.ax(B.C,r.I()<=0.1,10),new A.ax(B.F,!1,11)],t.lR),A.c([2,4,4,4,6,6,6,10,10,10,12],q),A.c([A.bh(r,10,25),A.bh(r,115,125),A.bh(r,115,125),A.bh(r,115,125),A.bh(r,125,135),A.bh(r,125,135),A.bh(r,125,135),A.bh(r,135,145),A.bh(r,135,145),A.bh(r,135,145),A.bh(r,170,200)],q),A.c([A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p)],t.fu),A.c([0,0,0,0,0,0,0,0,0,0,0],q),A.ai(t.ee,t.gN))
q.eA()
q.ey()
p=A.np()
r=A.c([],t.I)
o=A.q5(B.aV,t.b,t.R)
n=A.c([],t.g)
n=q.ct(A.mB(l,new A.cn(20,20,0,0,0,0,0,new A.d6(r,o),p,A.c([],t.Q),n,new A.d7("You")),l,0,l,!1,!0,new A.Q(0,4,1,1,l)))
m=new A.cf(n.a(),n.$ti.i("cf<1>"))
m.n()
m.n()
n=new A.l8(m.gp(m),m)
s.y1=n
n=s.x2=A.dC(n,"worldWrapper").a
p=n.e
n=n.d
if(!(n<p.length))return A.b(p,n)
n=A.lW(p[n])
p=s.x2
o=p.e
p=p.d
if(!(p<o.length))return A.b(o,p)
s.dc(n,o[p])
p=s.x2
o=p.a
n=p.e
p=p.d
if(!(p<n.length))return A.b(n,p)
s.cT(o,A.lW(n[p]))
p=s.gaq()
n=s.x2
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
p.di(n.d)
p.dd()
s=s.x2
n=s.e
s=s.d
if(!(s<n.length))return A.b(n,s)
p.e=A.lW(n[s])
s=this.a
n=s.e
n.toString
s.M(n)
n=s.eo()
s.e=n
s.K(n)}else if(a==="Quit"){s=t.e4.a(this.a.e).c
if(0>=s.length)return A.b(s,0)
s=t.fr.a(s[0])
if(s!=null){s=s.e
if(s!=null)s.sfW(0,"The Something of Something")}$.ag.a2().x1=!0
$.ag.a2().bG()}else if(a==="Credits"){s=this.a
s.M(s.e)
r=s.en()
s.e=r
s.K(r)}},
$S:12}
A.k3.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.M(r)
s.e=null},
$S:0}
A.bE.prototype={}
A.fM.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.fM&&b.a===this.a&&b.b===this.b},
gB(a){return A.cF(this.a,this.b,B.D,B.D)}}
A.fn.prototype={
sfz(a){var s,r=this
if(J.Z(a,r.f))return
r.M(r.r)
r.f=a
if(a!=null){s=A.aC("HP: "+a.a+"/"+a.b,null)
r.r=s
r.K(s)}r.D()},
H(){var s,r,q,p,o,n,m=this
if(m.f==null)return A.c([],t.k)
s=B.c.v(m.x.b/24)+1
r=A.c([],t.k)
for(q=t.e.i("R.T"),p=0;p<s;++p){o=new A.Q(11,13,-1,-1,null)
n=B.aU.h(0,q.a(900))
n.toString
o.x=n
n=m.d
o.d=n.a+p*24
o.e=n.b
r.push(o)}q=m.r
q=q==null?null:q.H()
if(q!=null)B.a.L(r,q)
if(m.r!=null)B.a.L(r,m.e.H())
return r},
u(a,b){var s,r,q=this
q.d=a
q.D()
if(q.f==null)return B.a9
s=q.r
r=s==null?null:s.u(a.w(0,new A.N(24,0)),b)
if(r!=null)q.e.u(a.w(0,new A.N(r.b+100,12)),b)
return q.x=new A.aO(a,t.bC.a(q.a).y,36)}}
A.ht.prototype={
sdU(a,b){if(b===this.e)return
this.e=b
this.D()},
cX(a){var s,r,q,p=this.r
B.a.k(p,a)
s=this.f
r=A.aC(a,null)
r.sdA(0.5)
r=A.kD(4,r,4,4,4)
q=s.c
A.Y(q).c.a(r)
if(!!q.fixed$length)A.U(A.E("insert"))
q.splice(0,0,r)
r.a=s
s.D()
if(p.length>50){B.a.bY(p,0)
if(0>=q.length)return A.b(q,-1)
q.pop().a=null
s.D()}this.D()},
H(){if(!this.e)return A.c([],t.k)
var s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].H()},
u(a,b){var s,r=this
r.d=a
r.D()
if(!r.e)return B.a9
s=r.c
if(0>=s.length)return A.b(s,0)
return s[0].u(a,new A.bq(0,0,288,b.d))}}
A.bq.prototype={
gB(a){var s=this
return A.cF(s.a,s.b,s.c,s.d)},
q(a,b){var s=this
if(b==null)return!1
return b instanceof A.bq&&b.a==s.a&&b.c==s.c&&b.b==s.b&&b.d==s.d}}
A.fG.prototype={
f9(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.b,a4=a3.ad(a3.e),a5=a2.c,a6=a5.Z("a_color",t.C)
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
A.hZ.prototype={}
A.i0.prototype={}
A.lQ.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:16}
A.hC.prototype={
ax(a){var s,r,q,p,o,n,m,l
for(s=this.b,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.e){m=n.b
l=B.c.v(m.d/24)
if(l===q){m=B.c.v(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.l8.prototype={}
A.jD.prototype={
ct(a){var s=this
return A.ov(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6
return function $async$ct(a7,a8){if(a7===1){o=a8
q=p}while(true)switch(q){case 0:a6=A.e6(B.a8)
a6.e=9
n=A.e6(new A.fe(B.b2,50))
m=r.c.x
m.bI(a6,B.v)
B.a.k(m.a,n)
l=A.c([],t.fF)
k=new A.i0(r,l)
m=s.a,j=s.b,i=s.e,h=0
case 2:if(!(h<10)){q=4
break}g=A.ry(m.dG(j[h]))
B.a.k(l,g)
f=i[h]
for(e=f.length,d=g.b,c=0;c<f.length;f.length===e||(0,A.y)(f),++c){b=A.rH(f[c])
a0=A.rX(g,b)
a1=b.b
a2=a0.a
a3=a1.a
a4=a3==null
if(!a4)a3.a=!0
a1.d=a2*24
a2=a0.b
if(!a4)a3.a=!0
a1.e=a2*36
B.a.k(d,b)}for(e=g.d,a5=0;a5<3;++a5){a6=A.e6(B.be)
B.a.k(e.h(0,A.rY(g)).e,a6)}q=5
return k
case 5:case 3:++h
q=2
break
case 4:return A.od()
case 1:return A.oe(o)}}},t.l7)},
eA(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.d,r=t.ee,q=this.e,p=this.b,o=0;o<10;++o){n=q[o]
m=p[o]
l=$.p3()
k=A.Y(l)
j=k.i("aT<1>")
i=A.ee(new A.aT(l,k.i("G(1)").a(new A.jE(m.a)),j),!0,j.i("j.E"))
for(h=0;h<s[o];){g=A.r_($.dI(),i,r)
B.a.k(n,g)
h+=g.d}}},
ey(){var s,r,q,p,o,n,m,l,k,j,i=this,h=new A.cn(1,1,1,0,0,0,0,new A.d6(A.c([],t.I),A.ai(t.b,t.R)),A.np(),A.c([],t.Q),A.c([],t.g),new A.d7(""))
for(s=i.f,r=i.c,q=i.e,p=0;p<10;++p){o=q[p]
for(n=0,m=0;m<o.length;++m){l=i.ez(o[m])
k=l.a
for(j=l.x.b.h(0,B.v)!=null;k>0;){n+=(j?l.dt(h,$.dI(),!0):l.dm(h,$.dI(),!0)).c
k-=r[p]}}B.a.j(s,p,n)}},
ez(a){var s,r,q,p,o,n=this.r
if(n.h(0,a)!=null){n=n.h(0,a)
n.toString
return n}s=a.d
r=A.c([],t.I)
q=A.nP(B.aV,t.b,t.R)
p=new A.cn(s,s,1,0,0,0,0,new A.d6(r,q),a.c,A.c([],t.Q),A.c([],t.g),new A.d7(a.a))
for(s=J.as(a.r.$0());s.n();){o=s.gp(s)
switch(o.gb8()){case B.aw:q.h(0,B.I)
q.j(0,B.I,o)
break
case B.ax:q.h(0,B.v)
q.j(0,B.v,o)
break
case B.ay:q.h(0,B.J)
q.j(0,B.J,o)
break
default:B.a.k(r,o)}}n.j(0,a,p)
return p}}
A.jE.prototype={
$1(a){return B.a.O(t.ee.a(a).x,this.a)},
$S:46}
A.fp.prototype={
c9(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.a8(a,a0,A.aK(a*a0,B.j,!1,t.ns),t.ba)
c.a=b
s=new A.jw(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.w()
if(typeof m!=="number")return A.cQ(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.cQ(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.cQ(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.cQ(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.cQ(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.cQ(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.cQ(f)
e=n+m+k+i+h+g+l+f
if(J.Z(s.$2(q,o),1))if(e<4)a1.N(0,B.j,q,o)
else a1.N(0,B.b,q,o)
else if(e>5)a1.N(0,B.b,q,o)
else a1.N(0,B.j,q,o)}d=c.a
c.a=a1}}}
A.jw.prototype={
$2(a,b){return J.Z(this.a.a.ae(0,a,b),B.b)?0:1},
$S:47}
A.k7.prototype={
c1(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.nW.a(b0)
s=t.q
r=A.c([],s)
q=new A.k8(a9)
for(p=J.as(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.dF()
if(n>=1)B.a.k(r,o)}if(r.length===0)return
m=A.c([],t.oe)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.y)(r),++j){i=r[j]
h=A.c([],k)
g=i.a
f=i.b
if(o.h(0,new A.i(g+1,f))===B.b)B.a.k(h,B.n)
if(o.h(0,new A.i(g+-1,f))===B.b)B.a.k(h,B.p)
if(o.h(0,new A.i(g,f+1))===B.b)B.a.k(h,B.o)
if(o.h(0,new A.i(g,f+-1))===B.b)B.a.k(h,B.m)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.y)(h),++e){d=h[e]
c=A.ad(i,d)
b=A.c([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.b)break
a2=A.pM(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.ad(a,a2[0]))!==B.j){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.ad(a,a2[1]))===B.j}else a1=!0
if(a1)break
a=A.ad(a,d)
B.a.k(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.j&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.ad(a,A.pN(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.k(m,new A.ez(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.ai(t.v,t.fH)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.y)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.O(l,n))continue
if(a4.aZ(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.j(0,n,a5)}else a4.j(0,n,a5)}for(s=a4.gc3(a4),s=s.gA(s),n=this.a,l=a9.e,k=a8.b;s.n();){g=s.gp(s)
f=g.d
a0=p.h(0,a8)
a0.toString
B.a.k(a0,f)
a0=p.h(0,f)
a0.toString
B.a.k(a0,a8)
for(g=g.c,a0=g.length,j=0;a1=g.length,j<a1;g.length===a0||(0,A.y)(g),++j)o.j(0,g[j],B.j)
a0=n.J(a1)
if(!(a0>=0&&a0<g.length))return A.b(g,a0)
a7=g[a0]
l.j(0,a7,B.U)
B.a.k(k,a7)
B.a.k(f.b,a7)}for(s=a4.gc3(a4),s=s.gA(s);s.n();)this.c1(s.gp(s).d,a9,b0,b1)}}
A.k8.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.w(0,new A.i(1,0)))===B.b?1:0
if(s.h(0,a.w(0,new A.i(-1,0)))===B.b)++r
if(s.h(0,a.w(0,new A.i(0,-1)))===B.b)++r
return s.h(0,a.w(0,new A.i(1,1)))===B.b?r+1:r},
$S:73}
A.jt.prototype={
dI(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.N(0,o.I()>0.45?B.j:B.b,n,m)
p.N(0,B.aX,n,m)}new A.fp(a7).c9(3)
for(p=q-1,l=0;l<r;++l){s.N(0,B.b,l,0)
s.N(0,B.b,l,p)}for(o=r-1,k=0;k<q;++k){s.N(0,B.b,0,k)
s.N(0,B.b,o,k)}j=new A.ju(a7)
i=new A.jv(a7)
for(l=1;l<o;l=g)for(h=l-1,g=l+1,k=1;k<p;++k){if(!j.$2(l,k))continue
f=i.$2(g,k)
e=i.$2(h,k)
d=k+1
c=i.$2(l,d)
b=k-1
a=i.$2(l,b)
if(f&&e&&c&&a){s.N(0,B.b,l,k)
continue}if(j.$2(h,d)&&c&&e){s.N(0,B.b,l,k)
continue}if(j.$2(g,d)&&c&&f){s.N(0,B.b,l,k)
continue}if(j.$2(g,b)&&a&&f){s.N(0,B.b,l,k)
continue}if(j.$2(h,b)&&a&&e){s.N(0,B.b,l,k)
continue}}p=t.j
o=A.h0(p)
a0=new A.fK(a7,A.c([],t.do),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.i(l,k)
if(o.O(0,a1)||s.h(0,a1)===B.b)continue
a0.d9(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.y)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gA(a3);d.n();)s.j(0,d.gp(d),B.b)
else B.a.k(o,new A.a7(a3,A.c([],h),A.c([],h),A.jI(a3)))}a4=A.ai(p,t.v)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.d,a2=0;b=o.length,a2<b;o.length===r||(0,A.y)(o),++a2){a3=o[a2]
B.a.k(p,a3)
h.j(0,a3,A.c([],d))
for(b=J.as(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.y)(o),++a2){a3=o[a2]
r=a3.a
p=J.aE(r)
if(p.gm(r)>a6){a6=p.gm(r)
a5=a3}}this.c1(a5,a7,a4,q)
for(r=q.dq(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.y)(r),++a2){a3=r[a2]
B.a.E(o,a3)
for(p=J.as(a3.a);p.n();)s.j(0,p.gp(p),B.b)}A.oR(o,a7)}}
A.ju.prototype={
$2(a,b){return J.Z(this.a.b.ae(0,a,b),B.j)},
$S:17}
A.jv.prototype={
$2(a,b){return J.Z(this.a.b.ae(0,a,b),B.b)},
$S:17}
A.aX.prototype={}
A.i_.prototype={}
A.aW.prototype={
a_(a,b){this.$ti.c.a(a)
return this.a.a_(a,b)+this.b.a_(a,b)}}
A.dg.prototype={
a_(a,b){this.$ti.c.a(a)
return Math.min(B.aD.a_(a,b),this.b.a_(a,b))}}
A.hf.prototype={
a_(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=b.b,r=a.a,q=a.b,p=b.e,o=p.a,p=p.b,n=-1;n<2;++n)for(m=r+n,l=m<o,k=-1;k<2;++k){j=q+k
if(!(m>=0&&j>=0&&l&&j<p))continue
if(s.h(0,new A.i(m,j))===B.b)return 1/0}return 0}}
A.fq.prototype={
a_(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.z)return 1/0
s=A.mp(a,B.m,b)
r=A.mp(a,B.o,b)
q=A.mp(a,B.n,b)
p=A.mp(a,B.p,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.fd.prototype={
a_(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.z)return 1/0
if(A.cR(a,B.m,b)+A.cR(a,B.o,b)+A.cR(a,B.n,b)+A.cR(a,B.p,b)===1)return 1
return 1/0}}
A.fx.prototype={
a_(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.z)return 1/0
if(A.cR(a,B.m,b)+A.cR(a,B.o,b)+A.cR(a,B.n,b)+A.cR(a,B.p,b)===2)return 1
return 1/0}}
A.dK.prototype={
a_(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.z)return 1/0
s=A.ad(a,B.m)
r=A.ad(a,B.o)
q=A.ad(a,B.n)
p=A.ad(a,B.p)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.df.prototype={
a_(a,b){var s,r,q,p,o,n,m,l,k,j,i
for(s=b.e,r=a.a,q=a.b,p=this.a,o=s.a,n=s.b,m=-2;m<4;++m)for(l=r+m,k=l<o,j=-2;j<4;++j){i=q+j
if(!(l>=0&&i>=0&&k&&i<n))continue
if(s.h(0,new A.i(l,i))===p)return 1/0}return 0}}
A.cK.prototype={
dr(a,b){return this.c.$2(a,b)},
gbV(){return this.a},
gbE(a){return this.b},
gbT(){return this.c}}
A.mh.prototype={
$2(a,b){b.e.j(0,a,B.aZ)},
$S:1}
A.ma.prototype={
$2(a,b){b.e.j(0,a,B.cZ)},
$S:1}
A.me.prototype={
$2(a,b){b.e.j(0,a,B.ac)},
$S:1}
A.m9.prototype={
$2(a,b){b.e.j(0,a,B.ac)},
$S:1}
A.mb.prototype={
$2(a,b){b.e.j(0,a,B.aA)},
$S:1}
A.mf.prototype={
$2(a,b){b.e.j(0,a,B.d_)
b.f.j(0,a,B.fE)},
$S:1}
A.mg.prototype={
$2(a,b){b.e.j(0,a,B.aY)},
$S:1}
A.md.prototype={
$2(a,b){b.e.j(0,a,B.ab)},
$S:1}
A.mc.prototype={
$2(a,b){b.e.j(0,a,B.ab)},
$S:1}
A.m8.prototype={
$2(a,b){b.e.j(0,a,B.aB)},
$S:1}
A.bb.prototype={}
A.iW.prototype={
gbE(a){var s=this.a
return s.gbE(s)},
gbT(){return this.a.gbT()},
gbV(){return this.a.gbV()},
l(a){return"Unique("+this.a.l(0)+")"},
$icK:1,
dr(a,b){return this.gbT().$2(a,b)}}
A.mo.prototype={
$2(a,b){var s=t.n4
return B.c.X(s.a(a).b,s.a(b).b)},
$S:51}
A.mn.prototype={
$2(a,b){var s=t.v
s.a(a)
s.a(b)
return J.at(a.a)-J.at(b.a)},
$S:52}
A.e3.prototype={}
A.jm.prototype={
dG(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=4000,c=new A.a8(100,40,A.aK(d,B.j,!1,t.ns),t.ba),b=new A.a8(100,40,A.aK(d,0,!1,t.i),t.de),a=new A.a8(100,40,A.aK(d,B.aX,!1,t.dt),t.f5),a0=new A.a8(100,40,A.aK(d,B.z,!1,t.dy),t.eN),a1=new A.a8(100,40,A.aK(d,B.bB,!1,t.gM),t.eT),a2=new A.a8(100,40,A.aK(d,null,!1,t.R),t.oQ),a3=t.d,a4=A.c([],a3)
a3=A.c([],a3)
s=new A.e3(a5,c,b,a,a0,a1,a2,new A.jH(a4,A.ai(t.v,t.mw)),a3)
if(a5.b)this.fm(s)
a4=a5.a
switch(a4){case B.B:case B.w:new A.jt(B.r).dI(s)
break
case B.F:case B.C:new A.kP(A.h0(t.j),B.r).dL(s)
break
case B.X:case B.H:case B.W:new A.kW(B.r).dJ(s)
break}r=new Float32Array(4000)
new A.kF().dK(r,100,40)
q=new A.a8(100,40,A.mP(d,new A.jo(),t.J),t.nr)
this.b.dH(a3,s,a5.c)
for(p=this.a,a4=a4!==B.W,o=0;o<100;++o)for(n=0;n<40;++n){m=J.Z(c.ae(0,o,n),B.j)
l=c.ae(0,o,n)
l.toString
k=new A.i(o,n)
p.I()
j=q.h(0,k)
i=a.h(0,k)
h=a0.h(0,k)
j.b=k
j.c=l
j.sfV(a.h(0,k))
l=n*100+o
if(!(l<4000))return A.b(r,l)
g=r[l]
f=a2.ae(0,o,n)
if(J.Z(b.h(0,k),1)){j.r=B.fq
j.c=B.j}else if(h!==B.z)switch(h){case B.U:if(a1.h(0,k)===B.bA)j.f=B.a3
else j.f=B.E
break
case B.ac:j.f=B.a5
break
case B.z:break
case B.cZ:j.f=B.ar
break
case B.aZ:j.f=B.aq
break
case B.cY:j.f=B.a4
break
case B.aA:j.f=B.an
if(f!=null)B.a.k(j.e,f)
break
case B.aB:j.f=B.al
break
case B.d_:j.f=B.a0
break
case B.b_:j.f=B.ak
break
case B.aY:j.f=B.ao
break
case B.ab:j.f=B.ap
break}else if(m&&g<0.42&&i!==B.az&&a4)j.f=B.a4
if(f!=null)B.a.k(j.e,f)}c=J.as(B.a.fs(a3,new A.jp(),new A.jq(s)).a)
while(!0){if(!c.n()){e=!1
break}b=c.gp(c)
if(A.qS(a0.h(0,b))){q.h(0,b).f=B.a1
e=!0
break}}if(!e)throw A.d(A.ao(""))
return new A.kq(q,a5)},
fm(a){var s,r,q=this.a,p=a.b,o=p.b,n=q.J(o-1)+1,m=n>o/2?-1:1,l=new A.jn(a)
for(p=p.a,s=n,r=0;r<p;++r){l.$1(new A.i(r,s))
l.$1(new A.i(r,s+1))
l.$1(new A.i(r,s-1))
s+=q.fG()?m:0}}}
A.jo.prototype={
$1(a){var s=A.c([],t.I)
return new A.c9(B.y,B.j,s)},
$S:16}
A.jp.prototype={
$1(a){return t.v.a(a).e},
$S:53}
A.jq.prototype={
$0(){return B.a.gfq(this.a.y)},
$S:54}
A.jn.prototype={
$1(a){var s=this.a,r=s.b
if(r.da(a)){r.j(0,a,B.j)
s.c.j(0,a,1)}},
$S:55}
A.ez.prototype={
gm(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.jH.prototype={
dq(){var s,r,q,p,o,n=A.c([],t.d)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.y)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.k(n,o)}return n}}
A.a7.prototype={
l(a){return"Room{"+J.at(this.a)+"; "+this.d.l(0)+"}"}}
A.fK.prototype={
d9(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.c([a],k),i=A.c([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.O(0,o))continue
q.k(0,o)
B.a.k(i,o)
for(n=0;n<8;++n){m=A.ad(o,B.aS[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.O(0,m)&&k.h(0,m)===B.j)B.a.k(j,m)}}B.a.k(this.b,i)}}
A.fT.prototype={
cW(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.a2)s=B.M
else if(a instanceof A.a4)s=B.K
else s=a instanceof A.ay?B.L:B.S
B.a.k(r.a,a)
B.a.k(r.b,s)
B.a.k(r.c,b)
r.d+=b},
cV(a){return this.cW(a,10)},
fL(a){var s,r,q,p={},o=p.a=0,n=A.mP(this.c.length,new A.kg(p,this),t.i),m=a.I()
for(s=n.length,r=m>-1;o<s;++o){q=n[o]
if(r&&m<=q){s=this.a
if(!(o<s.length))return A.b(s,o)
return A.e6(s[o])}}throw A.d(A.ao(""))},
dR(a){var s,r,q=B.a.fB(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
dQ(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p===0)return
B.a.j(r,q,p-2)
this.d-=2}}}
A.kg.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.b(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:57}
A.kA.prototype={}
A.kb.prototype={
dH(a,b,c){var s,r,q
t.mw.a(a)
s=new A.fT(A.c([],t.hf),A.c([],t.lB),A.c([],t.t))
r=s.gfc()
new A.aT(B.fA,t.ei.a(new A.kc()),t.kL).G(0,r)
new A.aT(B.fw,t.eU.a(new A.kd()),t.eo).G(0,r)
new A.aT(B.fD,t.hZ.a(new A.ke()),t.au).G(0,r)
new A.aT(B.fr,t.g9.a(new A.kf()),t.b1).G(0,r)
s.cV(B.b9)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.y)(a),++q)this.er(s,a[q],b)},
er(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.aE(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.y
break}r=j.length
if(r!==0){r=l.J(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.J(k.gm(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.aA||q===B.z
else r=!1
if(r)break;++i}if(s.q(0,B.y))return
p=a.fL(l)
n=p.b
if(!J.Z(n,B.b9)){a.dR(n)
a.dQ(p.c)
o.j(0,s,p)}}}
A.kc.prototype={
$1(a){return t.bB.a(a).b<=1000},
$S:58}
A.kd.prototype={
$1(a){return t.li.a(a).f<=1000},
$S:59}
A.ke.prototype={
$1(a){return t.kB.a(a).r<=1000},
$S:60}
A.kf.prototype={
$1(a){return t.lE.a(a).c<=1000},
$S:61}
A.kF.prototype={
aj(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
dK(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
for(s=0;s<b0;++s)for(r=s*0.1,q=0;q<b1;++q){p=q*b0+s
o=q*0.1
n=B.c.am(r)&255
m=B.c.am(o)&255
l=B.c.am(0.3)&255
k=r-Math.floor(r)
j=o-Math.floor(o)
i=0.3-Math.floor(0.3)
h=k*k*k*(k*(k*6-15)+10)
g=j*j*j*(j*(j*6-15)+10)
o=$.pe()
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
A.c3.prototype={
l(a){return"RuinOrientation."+this.b}}
A.er.prototype={
l(a){return"RoomSizeKind."+this.b}}
A.kP.prototype={
dL(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.J(5)
if(!(a3>=0&&a3<5))return A.b(B.bz,a3)
s=B.bz[a3]
r=a1.ca(B.bM)
q=a1.eE(s)
p=A.pO(a1.d5(a4,r,new A.i(B.c.v(Math.max(1,q.a-r.a/2)),B.c.v(Math.max(1,q.b-A.cG(r)/2)))))
a3=a4.y
B.a.k(a3,p)
for(o=t.q,n=0;n<2000;){m=new A.i(a2.J(98)+1,a2.J(38)+1)
l=[B.av,B.av,B.av,B.bL]
k=a2.J(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a1.ca(l[k])
if(!a1.fS(a4,r,m)){l=a1.d5(a4,r,m)
B.a.k(a3,new A.a7(l,A.c([],o),A.c([],o),A.jI(l)))}else ++n}for(a2=a1.b,o=a4.d,l=a4.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.i(j,i)
o.N(0,B.az,j,i)
if(!a2.O(0,h))l.j(0,h,B.b)}g=A.ai(t.j,t.v)
for(a2=a3.length,k=a4.x,f=k.a,e=k.b,d=t.d,c=0;c<a3.length;a3.length===a2||(0,A.y)(a3),++c){b=a3[c]
B.a.k(f,b)
e.j(0,b,A.c([],d))
for(a=J.as(b.a);a.n();)g.j(0,a.gp(a),b)}a1.c1(p,a4,g,k)
for(a2=k.dq(),k=a2.length,c=0;c<a2.length;a2.length===k||(0,A.y)(a2),++c){b=a2[c]
B.a.E(a3,b)
for(f=J.as(b.a);f.n();)l.j(0,f.gp(f),B.b)}A.oR(a3,a4)
for(a2=o.c,a0=0;a0<4000;++a0)B.a.j(a2,a0,B.az)},
ca(a){var s
switch(a){case B.av:s=this.a
return new A.eq(s.J(5)+5,s.J(5)+5)
case B.bL:s=this.a
return new A.eq(s.J(10)+9,s.J(10)+9)
case B.bM:s=this.a
return new A.eq(s.J(10)+20,s.J(10)+20)}},
eE(a){switch(a){case B.bN:return new A.i(50,10)
case B.bO:return new A.i(50,30)
case B.bP:return new A.i(75,20)
case B.bQ:return new A.i(25,20)
case B.bR:return new A.i(50,20)}},
d5(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.c([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.i(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.k(0,d)
r.j(0,d,f?B.b:B.j)
if(!f)B.a.k(a,d)}return a},
fS(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.i(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.b||n.O(0,i))return!0}return!1}}
A.eq.prototype={}
A.kW.prototype={
eB(a){var s,r,q=a.a.a===B.H?B.aX:B.hj
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
dJ(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.eB(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.I()>0.6)r.j(0,new A.i(q,p),B.b)
new A.fp(b8).c9(10)
o=A.h0(t.j)
n=new A.fK(b8,A.c([],t.do),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.i(k,j)
if(o.O(0,i)||r.h(0,i)===B.b)continue
n.d9(i)}o=n.b
B.a.b9(o,new A.kX())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.y)(h),++f)r.j(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.j(e,q,B.b_)
B.a.j(o,q,B.j)}$label0$1:for(o=b8.y,e=t.q,d=b8.d,c=0;c<3;){b=s.J(3)+5
a=s.J(3)+5
q=s.J(100-b)
p=s.J(40-a)
for(a0=q-1,a1=q+b,a2=a1+1,a3=p-1,a4=p+a,a5=a4+1;a0<a2;++a0)for(a6=a0>=0,a7=a0<m,a8=a3;a8<a5;++a8){i=new A.i(a0,a8)
if(!(a6&&a8>=0&&a7&&a8<l))continue $label0$1
if(g.h(0,i)!==B.z||r.h(0,i)!==B.j)continue $label0$1}a9=A.c([],e)
b0=A.c([],e)
for(a2=a1-1,a5=a4-1,a0=q;a0<a1;++a0)for(a6=a0-q!==0,a7=a0!==a2,a3=p;a3<a4;++a3){i=new A.i(a0,a3)
if(!a6||!a7||a3-p===0||a3===a5){r.j(0,i,B.b)
B.a.k(a9,i)}else B.a.k(b0,i)
d.j(0,i,B.az)}b1=new A.kY(b8)
B.a.c8(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.y
break}b3=a9[f]
b4=A.ad(b3,B.m)
b5=A.ad(b3,B.o)
b6=A.ad(b3,B.p)
b7=A.ad(b3,B.n)
if(A.O(b1.$1(b4))&&A.O(b1.$1(b5))){b2=b3
break}if(A.O(b1.$1(b6))&&A.O(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.y)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.j)
g.j(0,b2,B.U)
B.a.k(o,new A.a7(b0,A.c([],e),A.c([],e),A.jI(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.y)(o),++f)A.dH(o[f],$.mA(),b8)}}
A.kX.prototype={
$2(a,b){var s=t.i8
s.a(a)
return J.at(s.a(b))-J.at(a)},
$S:62}
A.kY.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.j&&s.e.h(0,a)===B.z},
$S:63}
A.l5.prototype={
e6(a){var s=t.jV.a(new A.l6(this))
t.Z.a(null)
A.eI(a,"keydown",s,!1,t.mT)
A.eI(a,"mousemove",t.b9.a(new A.l7(this)),!1,t.gD)}}
A.l6.prototype={
$1(a){var s,r,q,p,o
t.mT.a(a)
s=a.key
if(s==null)s=""
r=a.metaKey
q=a.ctrlKey
p=new A.an(s,r,a.shiftKey,q)
s=this.a
r=s.a
r=r==null?null:r.c.an(p)
if(r===!0){a.preventDefault()
return}o=$.ph().h(0,p)
if(o!=null){a.preventDefault()
s.b.k(0,o)
return}},
$S:64}
A.l7.prototype={
$1(a){var s,r
t.gD.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
this.a.c.k(0,A.c([s,r],t.n))},
$S:65}
A.an.prototype={
q(a,b){var s=this
if(b==null)return!1
return b instanceof A.an&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gB(a){var s=this
return A.cF(s.a,s.b,s.c,s.d)}}
A.a_.prototype={
l(a){return"InputCommand."+this.b}};(function aliases(){var s=J.a.prototype
s.dX=s.l
s=J.cw.prototype
s.dY=s.l
s=A.aJ.prototype
s.dZ=s.de
s.e_=s.df
s.e1=s.dh
s.e0=s.dg
s=A.af.prototype
s.cb=s.an})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u
s(J.r.prototype,"gfa","k",24)
r(A,"rf","pV",18)
r(A,"ru","qs",7)
r(A,"rv","qt",7)
r(A,"rw","qu",7)
q(A,"oD","ro",0)
p(A,"rx","ri",9)
q(A,"oC","rh",0)
o(A.dA.prototype,"gfj",1,0,null,["$1","$0"],["a3","aG"],40,0,0)
n(A.F.prototype,"gei","V",9)
m(A.dw.prototype,"geS","eT",0)
p(A,"rB","qY",68)
r(A,"rC","qZ",18)
var k
l(k=A.fO.prototype,"gfu","bN",29)
l(k,"gcG","eK",14)
p(A,"t3","rn",69)
s(A.ev.prototype,"gfO","E",39)
r(A,"ta","n8",70)
r(A,"t9","rG",71)
o(A.fT.prototype,"gfc",0,1,null,["$2","$1"],["cW","cV"],56,0,0)
p(A,"tb","rE",72)
r(A,"oN","t2",48)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.mM,J.a,J.dN,A.L,A.kQ,A.j,A.bI,A.W,A.aw,A.d4,A.co,A.l0,A.kC,A.e0,A.eU,A.A,A.kl,A.ed,A.lg,A.b8,A.ii,A.f_,A.eZ,A.eB,A.dy,A.cf,A.dP,A.c5,A.du,A.eE,A.dv,A.bR,A.F,A.i2,A.aB,A.eV,A.i3,A.i8,A.ce,A.dw,A.iJ,A.f3,A.f4,A.iq,A.eL,A.m,A.et,A.cq,A.ae,A.lh,A.hj,A.ew,A.ie,A.db,A.a1,A.iM,A.hG,A.jy,A.mI,A.t,A.e1,A.l9,A.kB,A.im,A.dn,A.jr,A.fR,A.cM,A.f,A.a8,A.N,A.cV,A.jb,A.ja,A.al,A.av,A.bo,A.c2,A.js,A.fO,A.fe,A.ab,A.a2,A.ku,A.bZ,A.a4,A.dM,A.ay,A.au,A.fb,A.cn,A.cY,A.d7,A.d6,A.fw,A.ax,A.c9,A.fZ,A.h_,A.i,A.kq,A.kv,A.az,A.jJ,A.fE,A.S,A.bX,A.H,A.jL,A.iQ,A.l4,A.kK,A.dk,A.aY,A.bJ,A.kE,A.fA,A.T,A.x,A.i4,A.iV,A.k9,A.kN,A.d_,A.hd,A.he,A.hz,A.Q,A.k,A.ks,A.hq,A.lD,A.aO,A.af,A.h1,A.bE,A.fM,A.bq,A.i0,A.hC,A.l8,A.jD,A.fp,A.k7,A.aX,A.cK,A.bb,A.iW,A.e3,A.jm,A.ez,A.jH,A.a7,A.fK,A.fT,A.kA,A.kb,A.kF,A.eq,A.kW,A.l5,A.an])
q(J.a,[J.e8,J.ea,J.cw,J.r,J.da,J.cv,A.h6,A.cE,A.e,A.jc,A.fl,A.bC,A.J,A.i7,A.b4,A.jB,A.c0,A.i9,A.dY,A.ib,A.jC,A.l,A.ig,A.aH,A.ka,A.ik,A.ko,A.kt,A.ir,A.is,A.aL,A.it,A.iv,A.aN,A.iz,A.iC,A.aP,A.iD,A.aQ,A.iG,A.ap,A.iO,A.kZ,A.aR,A.iR,A.l_,A.l3,A.iZ,A.j0,A.j2,A.j4,A.j6,A.aZ,A.io,A.b1,A.ix,A.kG,A.iK,A.b2,A.iT,A.bl,A.fh,A.i5,A.fo,A.fN,A.ho,A.dj,A.bM,A.hR,A.hX])
q(J.cw,[J.hm,J.dq,J.bG])
r(J.kh,J.r)
q(J.da,[J.e9,J.fV])
q(A.L,[A.cx,A.ca,A.fW,A.hT,A.hv,A.dO,A.id,A.hg,A.bA,A.hV,A.hS,A.ba,A.fv,A.fy])
q(A.j,[A.p,A.cz,A.aT,A.e7,A.bL,A.lH])
q(A.p,[A.b7,A.ec])
q(A.b7,[A.ex,A.eh])
r(A.e_,A.cz)
q(A.W,[A.eg,A.eA])
q(A.d4,[A.dU,A.aa])
q(A.co,[A.k6,A.fr,A.fs,A.hI,A.kj,A.m_,A.m1,A.ld,A.lc,A.lJ,A.jN,A.ln,A.lv,A.kU,A.lB,A.lx,A.kr,A.li,A.mi,A.mj,A.ji,A.jj,A.lZ,A.jR,A.jP,A.jG,A.jK,A.ky,A.jg,A.jf,A.kI,A.kR,A.m4,A.kS,A.m3,A.l2,A.k_,A.k1,A.jV,A.jT,A.jY,A.jW,A.k4,A.lQ,A.jE,A.k8,A.jo,A.jp,A.jn,A.kg,A.kc,A.kd,A.ke,A.kf,A.kY,A.l6,A.l7])
r(A.em,A.ca)
q(A.hI,[A.hD,A.d1])
r(A.i1,A.dO)
r(A.ef,A.A)
r(A.aJ,A.ef)
q(A.fs,[A.ki,A.m0,A.lK,A.lP,A.jO,A.lo,A.km,A.kp,A.kw,A.kx,A.kO,A.kT,A.lb,A.jk,A.jw,A.ju,A.jv,A.mh,A.ma,A.me,A.m9,A.mb,A.mf,A.mg,A.md,A.mc,A.m8,A.mo,A.mn,A.kX])
r(A.dd,A.cE)
q(A.dd,[A.eN,A.eP])
r(A.eO,A.eN)
r(A.cD,A.eO)
r(A.eQ,A.eP)
r(A.ej,A.eQ)
r(A.ei,A.cD)
q(A.ej,[A.h7,A.h8,A.h9,A.ha,A.hb,A.de,A.ek])
r(A.f0,A.id)
q(A.fr,[A.le,A.lf,A.lF,A.lE,A.jM,A.lj,A.lr,A.lp,A.ll,A.lq,A.lk,A.lu,A.lt,A.ls,A.kV,A.lC,A.lz,A.lN,A.lA,A.ms,A.mq,A.mr,A.mm,A.mk,A.ml,A.mv,A.mt,A.mu,A.my,A.mw,A.mx,A.lT,A.lR,A.lS,A.jQ,A.kz,A.jh,A.jl,A.kJ,A.k5,A.jZ,A.k0,A.k2,A.jU,A.jS,A.jX,A.k3,A.jq])
r(A.eW,A.e7)
q(A.c5,[A.dz,A.eG])
r(A.bw,A.dz)
r(A.eD,A.bw)
r(A.cc,A.du)
r(A.bP,A.cc)
r(A.eC,A.eE)
q(A.dv,[A.ac,A.dA])
r(A.dt,A.eV)
r(A.bQ,A.i8)
r(A.bx,A.ce)
r(A.iB,A.f3)
q(A.aJ,[A.ly,A.eJ])
r(A.eR,A.f4)
r(A.eK,A.eR)
q(A.bA,[A.di,A.fS])
q(A.e,[A.w,A.fI,A.cu,A.aA,A.eS,A.aD,A.ak,A.eX,A.hY,A.ds,A.I,A.dR,A.fj])
q(A.w,[A.a9,A.bn,A.bD])
q(A.a9,[A.q,A.o])
q(A.q,[A.ff,A.fg,A.fm,A.cl,A.fL,A.d9,A.cB,A.hw])
r(A.jx,A.bC)
r(A.d5,A.i7)
q(A.b4,[A.jz,A.jA])
r(A.ia,A.i9)
r(A.dX,A.ia)
r(A.ic,A.ib)
r(A.fB,A.ic)
r(A.aG,A.fl)
r(A.ih,A.ig)
r(A.fH,A.ih)
r(A.il,A.ik)
r(A.ct,A.il)
r(A.e5,A.cu)
r(A.bv,A.l)
q(A.bv,[A.bH,A.aM])
r(A.h2,A.ir)
r(A.h3,A.is)
r(A.iu,A.it)
r(A.h4,A.iu)
r(A.iw,A.iv)
r(A.el,A.iw)
r(A.iA,A.iz)
r(A.hn,A.iA)
r(A.hu,A.iC)
r(A.eT,A.eS)
r(A.hA,A.eT)
r(A.iE,A.iD)
r(A.hB,A.iE)
r(A.hE,A.iG)
r(A.iP,A.iO)
r(A.hL,A.iP)
r(A.eY,A.eX)
r(A.hM,A.eY)
r(A.iS,A.iR)
r(A.hO,A.iS)
r(A.dr,A.cB)
r(A.j_,A.iZ)
r(A.i6,A.j_)
r(A.eF,A.dY)
r(A.j1,A.j0)
r(A.ij,A.j1)
r(A.j3,A.j2)
r(A.eM,A.j3)
r(A.j5,A.j4)
r(A.iF,A.j5)
r(A.j7,A.j6)
r(A.iN,A.j7)
r(A.cL,A.eG)
r(A.eH,A.aB)
r(A.la,A.l9)
r(A.ip,A.io)
r(A.fX,A.ip)
r(A.iy,A.ix)
r(A.hh,A.iy)
r(A.iL,A.iK)
r(A.hH,A.iL)
r(A.iU,A.iT)
r(A.hP,A.iU)
q(A.I,[A.bB,A.d8])
r(A.cZ,A.bB)
q(A.dR,[A.ck,A.hi])
r(A.fi,A.i5)
q(A.av,[A.c7,A.c8,A.d3,A.c4,A.hr,A.ep,A.hs,A.bW])
r(A.R,A.f)
q(A.R,[A.c1,A.cA])
q(A.lh,[A.eu,A.bs,A.fQ,A.br,A.c_,A.b3,A.cp,A.dV,A.dL,A.cX,A.hl,A.cr,A.dp,A.d2,A.cI,A.aj,A.cy,A.bm,A.kn,A.a3,A.dc,A.cm,A.b5,A.cJ,A.c3,A.er,A.a_])
q(A.az,[A.fC,A.fD,A.fJ,A.eb,A.hx,A.ev,A.hJ,A.hK,A.hQ,A.fG,A.hZ])
q(A.S,[A.hc,A.eo,A.b0,A.dm,A.fY,A.ey,A.dQ,A.dW,A.d0,A.hU,A.en,A.hp,A.fP,A.dZ,A.hW])
r(A.fU,A.d_)
q(A.af,[A.bu,A.ft,A.fk,A.hk,A.dS,A.dl,A.cU,A.e2,A.fn,A.ht])
q(A.k7,[A.jt,A.kP])
q(A.aX,[A.i_,A.aW,A.dg])
q(A.i_,[A.hf,A.fq,A.fd,A.fx,A.dK,A.df])
s(A.eN,A.m)
s(A.eO,A.aw)
s(A.eP,A.m)
s(A.eQ,A.aw)
s(A.dt,A.i3)
s(A.f4,A.et)
s(A.i7,A.jy)
s(A.i9,A.m)
s(A.ia,A.t)
s(A.ib,A.m)
s(A.ic,A.t)
s(A.ig,A.m)
s(A.ih,A.t)
s(A.ik,A.m)
s(A.il,A.t)
s(A.ir,A.A)
s(A.is,A.A)
s(A.it,A.m)
s(A.iu,A.t)
s(A.iv,A.m)
s(A.iw,A.t)
s(A.iz,A.m)
s(A.iA,A.t)
s(A.iC,A.A)
s(A.eS,A.m)
s(A.eT,A.t)
s(A.iD,A.m)
s(A.iE,A.t)
s(A.iG,A.A)
s(A.iO,A.m)
s(A.iP,A.t)
s(A.eX,A.m)
s(A.eY,A.t)
s(A.iR,A.m)
s(A.iS,A.t)
s(A.iZ,A.m)
s(A.j_,A.t)
s(A.j0,A.m)
s(A.j1,A.t)
s(A.j2,A.m)
s(A.j3,A.t)
s(A.j4,A.m)
s(A.j5,A.t)
s(A.j6,A.m)
s(A.j7,A.t)
s(A.io,A.m)
s(A.ip,A.t)
s(A.ix,A.m)
s(A.iy,A.t)
s(A.iK,A.m)
s(A.iL,A.t)
s(A.iT,A.m)
s(A.iU,A.t)
s(A.i5,A.A)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",M:"double",P:"num",u:"String",G:"bool",a1:"Null",n:"List"},mangledNames:{},types:["~()","~(i,e3)","Q()","bo()","n<ab>()","~(@)","~(u,@)","~(~())","a1()","~(v,b9)","~(l)","~(bX)","~(u)","a1(@)","~(ae)","a1(bM)","c9(h)","G(h,h)","h(v?)","~(c0)","~(u,u)","@(@)","@(@,@)","~(bl)","~(v?)","G(ab)","@(@,u)","@(u)","a1(@,b9)","ah<~>(a_)","~(h,@)","~(S)","ah<~>()","G(mH)","~(n<M>)","G(v?)","~(hN)","d0()","ah<~>(l)","~(Q)","~([v?])","~(ab)","a1(v,b9)","~(bE)","bu(v?)","F<@>(@)","G(c2)","h(h,h)","~(P)","G(@)","~(@,@)","h(bb,bb)","h(a7,a7)","G(a7)","a7()","~(i)","~(v[h])","M(h)","G(a2)","G(a4)","G(ay)","G(au)","h(n<i>,n<i>)","G(i)","~(bH)","~(aM)","~(v?,v?)","a1(~())","G(v?,v?)","h(Q,Q)","bu(ab)","bu(bE)","h(v?,v?)","h(i)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.qK(v.typeUniverse,JSON.parse('{"hm":"cw","dq":"cw","bG":"cw","td":"l","tw":"l","tf":"I","tk":"bB","tc":"o","tx":"o","te":"e","tI":"e","tL":"e","th":"q","tM":"w","tv":"w","ty":"bD","tK":"aM","tZ":"ak","tj":"bv","ti":"bn","tO":"bn","tA":"cu","tz":"ct","tl":"J","tn":"ap","tg":"cB","tH":"cD","tG":"cE","e8":{"G":[]},"ea":{"a1":[]},"r":{"n":["1"],"p":["1"],"j":["1"]},"kh":{"r":["1"],"n":["1"],"p":["1"],"j":["1"]},"dN":{"W":["1"]},"da":{"M":[],"P":[],"am":["P"]},"e9":{"M":[],"h":[],"P":[],"am":["P"]},"fV":{"M":[],"P":[],"am":["P"]},"cv":{"u":[],"am":["u"],"nU":[]},"cx":{"L":[]},"p":{"j":["1"]},"b7":{"p":["1"],"j":["1"]},"ex":{"b7":["1"],"p":["1"],"j":["1"],"j.E":"1","b7.E":"1"},"bI":{"W":["1"]},"cz":{"j":["2"],"j.E":"2"},"e_":{"cz":["1","2"],"p":["2"],"j":["2"],"j.E":"2"},"eg":{"W":["2"]},"eh":{"b7":["2"],"p":["2"],"j":["2"],"j.E":"2","b7.E":"2"},"aT":{"j":["1"],"j.E":"1"},"eA":{"W":["1"]},"d4":{"a0":["1","2"]},"dU":{"d4":["1","2"],"a0":["1","2"]},"aa":{"d4":["1","2"],"a0":["1","2"]},"em":{"ca":[],"L":[]},"fW":{"L":[]},"hT":{"L":[]},"eU":{"b9":[]},"co":{"cs":[]},"fr":{"cs":[]},"fs":{"cs":[]},"hI":{"cs":[]},"hD":{"cs":[]},"d1":{"cs":[]},"hv":{"L":[]},"i1":{"L":[]},"aJ":{"A":["1","2"],"kk":["1","2"],"a0":["1","2"],"A.K":"1","A.V":"2"},"ec":{"p":["1"],"j":["1"],"j.E":"1"},"ed":{"W":["1"]},"h6":{"nA":[]},"cE":{"aS":[]},"dd":{"z":["1"],"aS":[]},"cD":{"m":["M"],"z":["M"],"n":["M"],"p":["M"],"aS":[],"j":["M"],"aw":["M"],"m.E":"M"},"ej":{"m":["h"],"z":["h"],"n":["h"],"p":["h"],"aS":[],"j":["h"],"aw":["h"]},"ei":{"m":["M"],"mK":[],"z":["M"],"n":["M"],"p":["M"],"aS":[],"j":["M"],"aw":["M"],"m.E":"M"},"h7":{"m":["h"],"z":["h"],"n":["h"],"p":["h"],"aS":[],"j":["h"],"aw":["h"],"m.E":"h"},"h8":{"m":["h"],"z":["h"],"n":["h"],"p":["h"],"aS":[],"j":["h"],"aw":["h"],"m.E":"h"},"h9":{"m":["h"],"z":["h"],"n":["h"],"p":["h"],"aS":[],"j":["h"],"aw":["h"],"m.E":"h"},"ha":{"m":["h"],"z":["h"],"n":["h"],"p":["h"],"aS":[],"j":["h"],"aw":["h"],"m.E":"h"},"hb":{"m":["h"],"z":["h"],"n":["h"],"p":["h"],"aS":[],"j":["h"],"aw":["h"],"m.E":"h"},"de":{"m":["h"],"qo":[],"z":["h"],"n":["h"],"p":["h"],"aS":[],"j":["h"],"aw":["h"],"m.E":"h"},"ek":{"m":["h"],"qp":[],"z":["h"],"n":["h"],"p":["h"],"aS":[],"j":["h"],"aw":["h"],"m.E":"h"},"f_":{"o8":[]},"id":{"L":[]},"f0":{"ca":[],"L":[]},"F":{"ah":["1"]},"eZ":{"hN":[]},"eB":{"fu":["1"]},"cf":{"W":["1"]},"eW":{"j":["1"],"j.E":"1"},"dP":{"L":[]},"eD":{"bw":["1"],"dz":["1"],"c5":["1"]},"bP":{"cc":["1"],"du":["1"],"aB":["1"],"bc":["1"]},"eE":{"hF":["1"],"iI":["1"],"bc":["1"]},"eC":{"eE":["1"],"hF":["1"],"iI":["1"],"bc":["1"]},"dv":{"fu":["1"]},"ac":{"dv":["1"],"fu":["1"]},"dA":{"dv":["1"],"fu":["1"]},"eV":{"hF":["1"],"iI":["1"],"bc":["1"]},"dt":{"i3":["1"],"eV":["1"],"hF":["1"],"iI":["1"],"bc":["1"]},"bw":{"dz":["1"],"c5":["1"]},"cc":{"du":["1"],"aB":["1"],"bc":["1"]},"du":{"aB":["1"],"bc":["1"]},"dz":{"c5":["1"]},"bQ":{"i8":["1"]},"bx":{"ce":["1"]},"dw":{"aB":["1"]},"f3":{"oa":[]},"iB":{"f3":[],"oa":[]},"ly":{"aJ":["1","2"],"A":["1","2"],"kk":["1","2"],"a0":["1","2"],"A.K":"1","A.V":"2"},"eJ":{"aJ":["1","2"],"A":["1","2"],"kk":["1","2"],"a0":["1","2"],"A.K":"1","A.V":"2"},"eK":{"et":["1"],"o_":["1"],"p":["1"],"j":["1"]},"eL":{"W":["1"]},"e7":{"j":["1"]},"ef":{"A":["1","2"],"a0":["1","2"]},"A":{"a0":["1","2"]},"eR":{"et":["1"],"o_":["1"],"p":["1"],"j":["1"]},"cq":{"am":["cq"]},"M":{"P":[],"am":["P"]},"ae":{"am":["ae"]},"h":{"P":[],"am":["P"]},"n":{"p":["1"],"j":["1"]},"P":{"am":["P"]},"u":{"am":["u"],"nU":[]},"dO":{"L":[]},"ca":{"L":[]},"hg":{"L":[]},"bA":{"L":[]},"di":{"L":[]},"fS":{"L":[]},"hV":{"L":[]},"hS":{"L":[]},"ba":{"L":[]},"fv":{"L":[]},"hj":{"L":[]},"ew":{"L":[]},"fy":{"L":[]},"iM":{"b9":[]},"bH":{"l":[]},"aM":{"l":[]},"w":{"e":[]},"aA":{"e":[]},"aD":{"e":[]},"ak":{"e":[]},"q":{"a9":[],"w":[],"e":[]},"ff":{"a9":[],"w":[],"e":[]},"fg":{"a9":[],"w":[],"e":[]},"fm":{"a9":[],"w":[],"e":[]},"cl":{"a9":[],"w":[],"e":[]},"bn":{"w":[],"e":[]},"bD":{"w":[],"e":[]},"dX":{"m":["bt<P>"],"t":["bt<P>"],"n":["bt<P>"],"z":["bt<P>"],"p":["bt<P>"],"j":["bt<P>"],"t.E":"bt<P>","m.E":"bt<P>"},"dY":{"bt":["P"]},"fB":{"m":["u"],"t":["u"],"n":["u"],"z":["u"],"p":["u"],"j":["u"],"t.E":"u","m.E":"u"},"a9":{"w":[],"e":[]},"fH":{"m":["aG"],"t":["aG"],"n":["aG"],"z":["aG"],"p":["aG"],"j":["aG"],"t.E":"aG","m.E":"aG"},"fI":{"e":[]},"fL":{"a9":[],"w":[],"e":[]},"ct":{"m":["w"],"t":["w"],"n":["w"],"z":["w"],"p":["w"],"j":["w"],"t.E":"w","m.E":"w"},"e5":{"e":[]},"cu":{"e":[]},"d9":{"a9":[],"w":[],"e":[]},"cB":{"a9":[],"w":[],"e":[]},"h2":{"A":["u","@"],"a0":["u","@"],"A.K":"u","A.V":"@"},"h3":{"A":["u","@"],"a0":["u","@"],"A.K":"u","A.V":"@"},"h4":{"m":["aL"],"t":["aL"],"n":["aL"],"z":["aL"],"p":["aL"],"j":["aL"],"t.E":"aL","m.E":"aL"},"el":{"m":["w"],"t":["w"],"n":["w"],"z":["w"],"p":["w"],"j":["w"],"t.E":"w","m.E":"w"},"hn":{"m":["aN"],"t":["aN"],"n":["aN"],"z":["aN"],"p":["aN"],"j":["aN"],"t.E":"aN","m.E":"aN"},"hu":{"A":["u","@"],"a0":["u","@"],"A.K":"u","A.V":"@"},"hw":{"a9":[],"w":[],"e":[]},"hA":{"m":["aA"],"t":["aA"],"n":["aA"],"z":["aA"],"e":[],"p":["aA"],"j":["aA"],"t.E":"aA","m.E":"aA"},"hB":{"m":["aP"],"t":["aP"],"n":["aP"],"z":["aP"],"p":["aP"],"j":["aP"],"t.E":"aP","m.E":"aP"},"hE":{"A":["u","u"],"a0":["u","u"],"A.K":"u","A.V":"u"},"hL":{"m":["ak"],"t":["ak"],"n":["ak"],"z":["ak"],"p":["ak"],"j":["ak"],"t.E":"ak","m.E":"ak"},"hM":{"m":["aD"],"t":["aD"],"n":["aD"],"z":["aD"],"e":[],"p":["aD"],"j":["aD"],"t.E":"aD","m.E":"aD"},"hO":{"m":["aR"],"t":["aR"],"n":["aR"],"z":["aR"],"p":["aR"],"j":["aR"],"t.E":"aR","m.E":"aR"},"bv":{"l":[]},"dr":{"a9":[],"w":[],"e":[]},"hY":{"e":[]},"ds":{"e":[]},"i6":{"m":["J"],"t":["J"],"n":["J"],"z":["J"],"p":["J"],"j":["J"],"t.E":"J","m.E":"J"},"eF":{"bt":["P"]},"ij":{"m":["aH?"],"t":["aH?"],"n":["aH?"],"z":["aH?"],"p":["aH?"],"j":["aH?"],"t.E":"aH?","m.E":"aH?"},"eM":{"m":["w"],"t":["w"],"n":["w"],"z":["w"],"p":["w"],"j":["w"],"t.E":"w","m.E":"w"},"iF":{"m":["aQ"],"t":["aQ"],"n":["aQ"],"z":["aQ"],"p":["aQ"],"j":["aQ"],"t.E":"aQ","m.E":"aQ"},"iN":{"m":["ap"],"t":["ap"],"n":["ap"],"z":["ap"],"p":["ap"],"j":["ap"],"t.E":"ap","m.E":"ap"},"eG":{"c5":["1"]},"cL":{"eG":["1"],"c5":["1"]},"eH":{"aB":["1"]},"e1":{"W":["1"]},"im":{"nV":[]},"fX":{"m":["aZ"],"t":["aZ"],"n":["aZ"],"p":["aZ"],"j":["aZ"],"t.E":"aZ","m.E":"aZ"},"hh":{"m":["b1"],"t":["b1"],"n":["b1"],"p":["b1"],"j":["b1"],"t.E":"b1","m.E":"b1"},"hH":{"m":["u"],"t":["u"],"n":["u"],"p":["u"],"j":["u"],"t.E":"u","m.E":"u"},"o":{"a9":[],"w":[],"e":[]},"hP":{"m":["b2"],"t":["b2"],"n":["b2"],"p":["b2"],"j":["b2"],"t.E":"b2","m.E":"b2"},"cZ":{"I":[],"e":[]},"ck":{"e":[]},"I":{"e":[]},"fi":{"A":["u","@"],"a0":["u","@"],"A.K":"u","A.V":"@"},"bB":{"I":[],"e":[]},"fj":{"e":[]},"dR":{"e":[]},"d8":{"I":[],"e":[]},"hi":{"e":[]},"bL":{"nB":[],"j":["u"],"j.E":"u"},"dn":{"W":["u"]},"lH":{"j":["1"],"j.E":"1"},"cM":{"W":["1"]},"cV":{"e4":[]},"bo":{"av":[]},"c7":{"av":[]},"c8":{"av":[]},"d3":{"av":[]},"c4":{"av":[]},"hr":{"av":[]},"ep":{"av":[]},"hs":{"av":[]},"bW":{"av":[]},"R":{"f":[]},"c1":{"R":["h"],"f":[],"R.T":"h"},"cA":{"R":["h"],"f":[],"R.T":"h"},"c9":{"e4":[]},"h_":{"e4":[]},"fC":{"az":[]},"fD":{"az":[]},"d0":{"S":[]},"hc":{"S":[]},"eo":{"S":[]},"b0":{"S":[]},"dm":{"S":[]},"fY":{"S":[]},"ey":{"S":[]},"dQ":{"S":[]},"dW":{"S":[]},"hU":{"S":[]},"en":{"S":[]},"hp":{"S":[]},"fP":{"S":[]},"dZ":{"S":[]},"hW":{"S":[]},"fJ":{"az":[]},"eb":{"az":[]},"bJ":{"am":["bJ"]},"hx":{"az":[]},"he":{"d_":[]},"hz":{"qk":[]},"fU":{"d_":[]},"ev":{"az":[]},"hJ":{"az":[]},"hK":{"az":[]},"bu":{"af":[]},"hQ":{"az":[],"q3":[]},"ft":{"af":[]},"fk":{"af":[]},"hk":{"af":[]},"dS":{"af":[]},"dl":{"af":[]},"cU":{"af":[]},"e2":{"af":[]},"fn":{"af":[]},"ht":{"af":[]},"fG":{"az":[]},"hZ":{"az":[]},"i_":{"aX":["i"]},"aW":{"aX":["1"]},"dg":{"aX":["1"]},"hf":{"aX":["i"]},"fq":{"aX":["i"]},"fd":{"aX":["i"]},"fx":{"aX":["i"]},"dK":{"aX":["i"]},"df":{"aX":["i"]},"iW":{"cK":[]},"mK":{"n":["M"],"p":["M"],"j":["M"],"aS":[]}}'))
A.qJ(v.typeUniverse,JSON.parse('{"p":1,"dd":1,"e7":1,"ef":2,"eR":1,"f4":1,"cU":1}'))
var u={S:" 0\x10000\xa0\x80\x10@P`p`p\xb1 0\x10000\xa0\x80\x10@P`p`p\xb0 0\x10000\xa0\x80\x11@P`p`p\xb0 1\x10011\xa0\x80\x10@P`p`p\xb0 1\x10111\xa1\x81\x10AQaqaq\xb0 1\x10011\xa0\x80\x10@Qapaq\xb0 1\x10011\xa0\x80\x10@Paq`p\xb0 1\x10011\xa0\x80\x10@P`q`p\xb0 \x91\x100\x811\xa0\x80\x10@P`p`p\xb0 1\x10011\xa0\x81\x10@P`p`p\xb0 1\x100111\x80\x10@P`p`p\xb0!1\x11111\xa1\x81\x11AQaqaq\xb1",M:'""""""""""""""""DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""3333s3#7333333339433333333333333CDDDDDDDDDDDDDDDDDDDDDDC433DDDDD4DDDDDDDDDDDDDDDDDD3CU33333333333333333333333333334T5333333333333333333333333333CCD3D33CD533333333333333333333333TEDTET53U5UE3333C33333333333333333333333333333CETUTDT5333333333333333333333333SUUUUUEUDDDDD43333433333333333333333333ET533E3333SDD3U3U4333343333C4333333333333CSD33343333333433333333333333333SUUUEDDDTE4333SDDSUSU\x94333343333C43333333333333333s333333333337333333333333wwwww73sw33sww7swwwwwss33373733s33333w33333\xa3\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xba\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xcb\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xec\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee>33333\xb3\xbb\xbb\xbb\xbb\xbb\xbb\xbb;3\xc3\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc334343C33333333333SET333333333333333EDTETD433333333CD33333333333333CD33333CDD4333333333333333333333333CDTDDDCTE43C4CD3C333333333333333D3C33333\x99\x99\x9933333DDDDD42333333333333333333CDDD4333333333333333333333333DDDD433334333C53333333333333333333333C33TEDCSUUU433333333S533333333333333333333333333333CD4DDDDD3D5333333333333333333333333333CSEUCUSE4333D33333C43333333333333CDDD9DDD3DCD433333333CDCDDDDDDEDDD33433C3E433#""""\x82" """"""""2333333333333333CDUUDU53SEUUUD43SDD3U3U4333C43333C43333333333333SE43CD33333333DD33333CDDDDDDDDDD3333333343333333B!233333333333#"""333333s3CD533333333333333333333333333CESEU3333333333333333333DDDD433333CD2333333333333333333333333""""23333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDD33333333333333333333333333333CDDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333SUDDDDUDT43333333333343333333333333333333333333333333333333333TEDDTTEETD333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CUDD3UUDE43333333333333D33333333333333333333333333333333333333333UEDDDTEE43333333333333333333333333333333333333333333333333333CEUDDDE33333333333333333333333333333333333333333333333333CDUDDEDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333D#"2333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CSUUUUUUUUUUUUUUUUUUUUUUUUUUU333CD4333333333333333333333333333333333333333333333333333333""""""33EDDCTSE3333333333D33333333333DDDDDDD\x94DDDDDDDDDDDDDDDDDDDDDDDDDDDDDCDDDDDDDD3DDD4DCDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CD4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDDDD333333333333333333333333333333333333333333333333333333333333333333333333333333333333333s73333s33333333333""""""""3333333373s333333333333333333333333333333CTDDDTU5D4DD333C433333D33333333333333DU433333333333333333333DDDUDUD3333S3333333333333333334333333333333s733333s33333333333CD4DDDD4D4DD4333333333sww73333333w3333333333sw3333s33333337333333sw333333333s733333333333333333UTEUS433333333C433333333333333C433333333333334443SUE4333333333333CDDDDDDDD4333333DDDDDT533333\xa3\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa3SDDDDUUT5DDD43333C43333333333333333C33333333333EEDDDCC3DDDDUUUDDDDD3T5333333333333333333333333333CSDDD433E533333333333333333333333333DDDDDDD4333333333333333333333333333CD53333333333333333333333UEDTE4\x933333333\x933333333333333333333333333D433333333333333333CDDEDDD43333333S5333333333333333333333C333333D533333333333333333333333SUDDDDT5\x9933CD433333333333333333333333333333333333333333333333UEDUTD33343333333333333333333333333333333333333333333333333333333333333333333333333333333CUEDDD43333333333DU333333333333333333333333333C4TTU5S5SU3333C33333U3DDD43DD4333333333333333333333333333333333333333333333333333333333333333333333DDDDDDD533333333333333333333333DDDTTU43333333333333333333333333333DDD733333s373ss33w7733333ww733333333333ss33333333333333333333333333333ww3333333333333333333333333333wwww33333www33333333333333333333wwww333333333333333wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww333333wwwwwwwwwwwwwwwwwwwwwww7wwwwwswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww733333333333333333333333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333333333333333333333333333333333333333333333333333333333swwwww7333333333333333333333333333333333333333333wwwwwwwwwwwwwwwwwwwww7wwwwwwswwwwwwwwwwwwwwwwwwwww73333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333333w7333333333333333733333333333333333333333333333sww733333s7333333s3wwwww333333333wwwwwwwwwwwwwwwwwwwwwwwwwwwwgffffffffffff6wwwwwww73333s33333333337swwwwsw73333wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwDDDDDDDDDDDDDDDDDDDDDDDD33333333DDDDDDDD33333333DDDDDDDDDDDDDDDD43333333DC44333333333333333333333333333SUDDDDTD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333UED4CTUE3S33333333333333DDDDD33333333333333333333DDD\x95DD333343333DDDUD43333333333333333333\x93\x99\x99IDDDDDDE4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDDDDDDDDDDDDDDDDDDDDDDDDDD33DDDDDDDDDDDDDDDDDDDDDDDDD33334333333C33333333333DD4DDDDDDD43333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333TD43EDD""""DDDD3DDD433333333333333CD43333333333333333333333333333333333333333333333333333333333333333333333333CD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333C33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333433333333333333333333333333333333333333333333333333333333333333333333333333DD4333333333333333333333333333333333333333333333333333333333333333333EDDDCDDT43333333333333333333333333333333333333333CDDDDDDDDDD4EDDDETD3333333333333333333333333333333333333333333333333333333333333DDD3CC4DDD\x94433333333333333333333333333333333SUUC4UT433333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333DU333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDD333333333333333333333333333333333333333333333333333333CDDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDC433DD33333333333333333333D43C3333333333333333333333333333333333333333333333333333333333333333333333333333333333C4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333334EDDDD3\x03',d:"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",Z:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",v:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",I:"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\nin vec4 v_bg_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n  if (v_bg_color != vec4(0, 0, 0, 0)) {\n    outColor = outColor + v_bg_color;\n  }\n}\n",t:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",_:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\n\nout vec4 outColor;\n\nvoid main() {\n    vec2 tex_position = gl_FragCoord.xy / vec2(100, 40);\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n    float source_strength = u_source_strength + sin(u_time * 2.0);\n    float dist = distance(gl_FragCoord.xy, (u_source_position + vec2(0.5, 0.5))) / 2.0;\n    if (dist > source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, source_strength, dist);\n    outColor = vec4(u_source_color.rgb, scale);\n}\n",L:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // back textures is already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 front = texture(u_light_texture, tex_position);\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  // front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",s:"\u0e3b\u1cdb\u05d0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b \u389c\u102b\u102b\u102b\u102b\u489c\u102b\u102b\u102b\u0620\u392b\u0c26\u0efa\u102b\u0dcb\u0601\u3e7e\u228f\u0c77\u24d3\u40b2\u102b\u1d51\u0f6f\u2681\u0698\u0851\u0d63\u0be6\u0d63\u1d2a\u06d5\u0e9b\u0771\u075c\u2b98\u23fe\u2707\u0da1\u2a52\u08eb\u0d13\u0ce3\u2712\u0c62\u4d9d\u0b97\u25cb\u2b21\u0659\u42c5\u0baa\u0ec5\u088d\u102b\u09b9\u09d9\u09f9\u0a21\u102b\u102b\u102b\u102b\u102b\u40ae\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0b5f\u25b1\u23c1\u07f5\u0fe2\u102b\u269e\u102b\u0e5b\u102b\u102b\u102b\u2427\u26c9\u275a\u102b\u2b5c\u0fad\u0b31\u0789\u08ab\u102b\u102b\u0dfb\u102b\u102b\u102b\u1d74\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0f2f\u2372\u102b\u38ec\u090f\u102b\u2501\u102b\u102b\u102b\u102b\u102b\u24a9\u102b\u35c8\u0939\u102b\u102b\u102b\u23b5\u102b\u102b\u2345\u2c27\u3457\u2d9d\u3491\u2d9d\u0979\u2be5\u252c\u102b\u102b\u102b\u102b\u102b\u233b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2566\u23a2\u102b\u102b\u102b\u102b\u102b\u409c\u102b\u428c\u102b\u3db9\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2bac\u102b\u16c9\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2c0e\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0d24\u4c95\u4c83\u102b\u102b\u102b\u102b\u0b0c\u102b\u07bb\u2609\u0c43\u2641\u071f\u2483\u2443\u0cb1\u06e1\u0811\u102b\u102b\u102b\u2583\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a95\u0ace\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u42ad\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u38bc\u102b\u102b\u1cdb\u102b\u102b\u4c95\u1cea\u40ce\u102b\u49ce\u1f6f\u2752\u1506\u393f\u449f\u102b\u102b\u102b\u102b\u102b\u0ff2\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u113b\u191a\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u1869\u102b\u102b\u102b\u102b\u3e89\u102b\u3bd9\u102b\u1da7\u102b\u47cf\u102b\u34a1\u305d\u2c56\u2d9d\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\x00\u01f0\u01f0\u01f0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b"}
var t=(function rtii(){var s=A.aV
return{bm:s("@<~>"),mm:s("fe"),A:s("aW<i>"),bB:s("a2"),lE:s("au"),u:s("dP"),bD:s("bl"),lo:s("nA"),jQ:s("cl"),gN:s("cn"),m1:s("nB"),L:s("f"),n6:s("am<v?>"),i_:s("dV"),d5:s("J"),cs:s("cq"),dA:s("bD"),jW:s("c0"),U:s("ae"),ox:s("mH"),gt:s("p<@>"),v:s("a7"),O:s("fE"),h:s("bE"),b:s("cr"),fz:s("L"),fq:s("l"),lM:s("H"),cM:s("S"),et:s("aG"),C:s("mK"),gY:s("cs"),g7:s("ah<@>"),bC:s("e2"),m:s("aa<h,f>"),eT:s("a8<cy>"),f5:s("a8<cI>"),eN:s("a8<aj>"),nr:s("a8<c9>"),ba:s("a8<dp>"),de:s("a8<M>"),oQ:s("a8<ab?>"),hQ:s("d9"),h8:s("a_"),W:s("ab"),e7:s("j<@>"),c7:s("r<cV>"),if:s("r<cX>"),G:s("r<T>"),a:s("r<av>"),V:s("r<bm>"),fy:s("r<bX>"),bk:s("r<f>"),Q:s("r<fw>"),X:s("r<b5>"),pl:s("r<mH>"),f:s("r<af>"),d:s("r<a7>"),lT:s("r<bE>"),w:s("r<S>"),iw:s("r<ah<~>>"),ow:s("r<e4>"),ge:s("r<a_>"),Y:s("r<aY>"),I:s("r<ab>"),lB:s("r<bs>"),fu:s("r<n<c2>>"),do:s("r<n<i>>"),fC:s("r<n<h>>"),lR:s("r<ax>"),ku:s("r<c2>"),hf:s("r<v>"),g:s("r<hl>"),q:s("r<i>"),ff:s("r<hq>"),hd:s("r<dk>"),k:s("r<Q>"),fF:s("r<hC>"),s:s("r<u>"),oe:s("r<ez>"),o:s("r<x>"),B:s("r<b3>"),D:s("r<cK>"),bu:s("r<bb>"),n:s("r<M>"),dG:s("r<@>"),t:s("r<h>"),g2:s("r<P>"),ev:s("r<~(ae)>"),T:s("ea"),dY:s("bG"),dX:s("z<@>"),mT:s("bH"),kT:s("aZ"),p:s("n<cV>"),mw:s("n<a7>"),i8:s("n<i>"),bd:s("n<M>"),gM:s("cy"),nW:s("a0<i,a7>"),ea:s("a0<u,@>"),gX:s("cA"),e:s("c1"),li:s("a4"),km:s("h1<aY>"),ib:s("aL"),ee:s("c2"),gD:s("aM"),fh:s("w"),P:s("a1"),ai:s("b1"),K:s("v"),mn:s("N"),gm:s("dg<i>"),p6:s("bJ"),d8:s("aN"),j:s("i"),o5:s("nV"),kB:s("ay"),mx:s("bt<P>"),e4:s("dl<@>"),fm:s("aA"),cA:s("aP"),hH:s("aQ"),r:s("Q"),l:s("b9"),N:s("u"),lv:s("ap"),dt:s("cI"),dy:s("aj"),dQ:s("aD"),gJ:s("ak"),lJ:s("bM"),J:s("c9"),ns:s("dp"),hU:s("hN"),ki:s("aR"),hk:s("b2"),fH:s("ez"),ha:s("o8"),bE:s("ca"),jv:s("aS"),cx:s("dq"),eL:s("dr"),kL:s("aT<a2>"),b1:s("aT<au>"),eo:s("aT<a4>"),au:s("aT<ay>"),c1:s("cK"),l7:s("i0"),np:s("eC<S>"),oJ:s("ac<bl>"),fB:s("ac<bM>"),jk:s("ac<@>"),pn:s("ac<aY?>"),ou:s("ac<~>"),aN:s("i4"),n4:s("bb"),bz:s("cL<l>"),eF:s("bR<@,@>"),og:s("F<bl>"),aa:s("F<bM>"),c:s("F<@>"),hy:s("F<h>"),j7:s("F<aY?>"),cU:s("F<~>"),gL:s("iH<v?>"),iF:s("dA<~>"),im:s("iQ"),o3:s("iV"),k4:s("G"),ei:s("G(a2)"),g9:s("G(au)"),eU:s("G(a4)"),iW:s("G(v)"),hZ:s("G(ay)"),i:s("M"),z:s("@"),mY:s("@()"),y:s("@(v)"),ng:s("@(v,b9)"),p1:s("@(@,@)"),S:s("h"),eK:s("0&*"),_:s("v*"),fr:s("dS?"),n8:s("f?"),mV:s("af?"),oL:s("S?"),gK:s("ah<a1>?"),ef:s("aH?"),R:s("ab?"),jw:s("n<f>?"),fb:s("n<ab>?"),iD:s("v?"),F:s("bR<@,@>?"),nF:s("iq?"),du:s("@(l)?"),ld:s("h(bb,bb)?"),Z:s("~()?"),p0:s("~(bl)?"),lW:s("~(c0)?"),oV:s("~(l)?"),jV:s("~(bH)?"),b9:s("~(aM)?"),cZ:s("P"),H:s("~"),M:s("~()"),nD:s("~([~])"),x:s("~(ae)"),nt:s("~(S)"),i6:s("~(v)"),fQ:s("~(v,b9)"),gS:s("~(u,u)"),E:s("~(u,@)"),my:s("~(hN)"),hv:s("~(P)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.V=A.cZ.prototype
B.dw=A.ck.prototype
B.b6=A.fh.prototype
B.aE=A.cl.prototype
B.f9=A.d5.prototype
B.bk=A.d8.prototype
B.ff=A.e5.prototype
B.fl=J.a.prototype
B.a=J.r.prototype
B.fm=J.e8.prototype
B.e=J.e9.prototype
B.c=J.da.prototype
B.h=J.cv.prototype
B.fn=J.bG.prototype
B.au=A.ei.prototype
B.fZ=A.de.prototype
B.a7=A.ek.prototype
B.bK=J.hm.prototype
B.d=A.dj.prototype
B.b1=J.dq.prototype
B.d3=A.ds.prototype
B.aZ=new A.aj("table")
B.d4=new A.dK(B.aZ)
B.b2=new A.dL("rounds")
B.ae=new A.fq()
B.ab=new A.aj("column")
B.bI=new A.df(B.ab)
B.df=new A.aW(B.ae,B.bI,t.A)
B.U=new A.aj("door")
B.bH=new A.df(B.U)
B.db=new A.aW(B.df,B.bH,t.A)
B.dD=new A.hf()
B.dd=new A.aW(B.db,B.dD,t.A)
B.aC=new A.fd()
B.dg=new A.aW(B.aC,B.bI,t.A)
B.de=new A.aW(B.dg,B.bH,t.A)
B.dn=new A.a2("",0,0,0,99)
B.H=new A.bm("surface")
B.B=new A.bm("caves")
B.w=new A.bm("deepCaves")
B.F=new A.bm("facility")
B.C=new A.bm("ruins")
B.W=new A.bm("village")
B.X=new A.bm("snow")
B.aD=new A.fx()
B.b7=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.dx=function() {
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
B.dC=function(getTagFallback) {
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
B.dy=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.dz=function(hooks) {
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
B.dB=function(hooks) {
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
B.dA=function(hooks) {
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
B.b8=function(hooks) { return hooks; }

B.b9=new A.kA()
B.dE=new A.hj()
B.D=new A.kQ()
B.r=new A.im()
B.l=new A.iB()
B.dF=new A.iM()
B.ba=new A.cm("north")
B.bb=new A.cm("south")
B.bc=new A.cm("east")
B.bd=new A.cm("west")
B.dG=new A.d2("none")
B.dH=new A.d2("ignoreAgents")
B.af=new A.d2("ignoreAgentsAndUnlockedDoors")
B.Y=new A.d2("normal")
B.dI=new A.f(1660944383)
B.dJ=new A.f(3707764736)
B.Z=new A.f(4278190080)
B.eN=new A.f(4294278144)
B.u=new A.f(4294967295)
B.a_=new A.bq(null,null,null,null)
B.be=new A.dV("health")
B.fa=new A.br("acid")
B.bf=new A.br("cold")
B.bg=new A.br("electricity")
B.ag=new A.br("fire")
B.fb=new A.br("sonic")
B.ah=new A.br("bludgeoning")
B.aF=new A.br("piercing")
B.bh=new A.br("slashing")
B.aG=new A.c_("d3")
B.ai=new A.c_("d4")
B.aj=new A.c_("d6")
B.aH=new A.c_("d8")
B.bi=new A.c_("d12")
B.aI=new A.c_("d20")
B.O=new A.b5("se")
B.P=new A.b5("ne")
B.Q=new A.b5("sw")
B.R=new A.b5("nw")
B.m=new A.b5("n")
B.n=new A.b5("e")
B.o=new A.b5("s")
B.p=new A.b5("w")
B.bj=new A.ae(0)
B.fc=new A.ae(1e5)
B.fd=new A.ae(25e4)
B.fe=new A.ae(8000)
B.I=new A.cr("primaryMelee")
B.v=new A.cr("primaryRanged")
B.J=new A.cr("armor")
B.fg=new A.a_("enter")
B.aJ=new A.a_("north")
B.bl=new A.a_("activate")
B.fh=new A.a_("equipment")
B.bm=new A.a_("autoexplore")
B.bn=new A.a_("reload")
B.bo=new A.a_("toggleStats")
B.aK=new A.a_("east")
B.fi=new A.a_("showMenu")
B.aL=new A.a_("south")
B.aM=new A.a_("west")
B.fj=new A.a_("skip")
B.bp=new A.a_("fire")
B.bq=new A.a_("look")
B.fk=new A.a_("reset")
B.aN=new A.a3("none")
B.aO=new A.a3("stairsUp")
B.ak=new A.a3("tree")
B.al=new A.a3("bookshelf")
B.a0=new A.a3("mechanism")
B.am=new A.a3("activatedMechanism")
B.an=new A.a3("chest")
B.ao=new A.a3("stalagmite")
B.ap=new A.a3("column")
B.a1=new A.a3("stairsDown")
B.E=new A.a3("door")
B.a2=new A.a3("openDoor")
B.a3=new A.a3("lockedDoor")
B.a4=new A.a3("grass")
B.a5=new A.a3("torch")
B.aq=new A.a3("table")
B.ar=new A.a3("chair")
B.K=new A.bs("melee")
B.L=new A.bs("ranged")
B.M=new A.bs("armor")
B.S=new A.bs("other")
B.N=new A.bs("consumable")
B.as=new A.bs("corpse")
B.T=new A.bs("ammo")
B.br=new A.an(" ",!1,!1,!1)
B.aP=new A.an("ArrowDown",!1,!1,!1)
B.bs=new A.an("ArrowLeft",!1,!1,!1)
B.bt=new A.an("ArrowRight",!1,!1,!1)
B.aQ=new A.an("ArrowUp",!1,!1,!1)
B.bu=new A.an("Enter",!1,!1,!1)
B.aR=new A.an("Escape",!1,!1,!1)
B.fo=new A.an("e",!1,!1,!1)
B.fp=new A.an("i",!1,!1,!1)
B.fq=new A.kn("water")
B.b3=new A.cX("light")
B.b4=new A.cX("heavy")
B.b5=new A.cX("powered")
B.hK=A.c(s([B.b3,B.b4,B.b5]),t.if)
B.dh=new A.au(1)
B.di=new A.au(1)
B.dj=new A.au(1)
B.dk=new A.au(1)
B.hG=A.c(s([B.b5]),t.if)
B.dl=new A.au(2)
B.hH=A.c(s([B.b3,B.b4]),t.if)
B.dm=new A.au(2)
B.fr=A.c(s([B.dh,B.di,B.dj,B.dk,B.dl,B.dm]),A.aV("r<au>"))
B.fs=A.c(s([24,36]),t.n)
B.ft=A.c(s([B.ba,B.bb,B.bc,B.bd]),A.aV("r<cm>"))
B.aS=A.c(s([B.O,B.P,B.Q,B.R,B.m,B.n,B.o,B.p]),t.X)
B.bv=A.c(s([B.m,B.o]),t.X)
B.bw=A.c(s([B.n,B.p]),t.X)
B.hE=new A.fQ("oneHand")
B.hz=new A.cp("none")
B.hs=new A.bZ()
B.d0=new A.b3("archaic")
B.ad=new A.b3("analog")
B.fB=A.c(s([B.d0,B.ad]),t.B)
B.fV=new A.a4(B.ah,1,B.aj,0,"Club",B.fB)
B.hn=new A.b3("operative")
B.by=A.c(s([B.ad,B.hn]),t.B)
B.fS=new A.a4(B.ah,1,B.ai,1,"Tactical Baton",B.by)
B.fT=new A.a4(B.bh,1,B.ai,1,"Survival Knife",B.by)
B.hF=new A.fQ("twoHand")
B.d1=new A.b3("block")
B.fu=A.c(s([B.ad,B.d1]),t.B)
B.fP=new A.a4(B.aF,1,B.aj,1,"Tactical Spear",B.fu)
B.hC=new A.cp("burn")
B.ht=new A.bZ()
B.d2=new A.b3("powered")
B.bx=A.c(s([B.d2]),t.B)
B.hy=new A.ku()
B.fU=new A.a4(B.ag,2,B.ai,7,"Flame Sword",B.bx)
B.hB=new A.cp("wound")
B.hu=new A.bZ()
B.fR=new A.a4(B.ag,2,B.aH,9,"Plasma Sword",B.bx)
B.hA=new A.cp("arc")
B.hv=new A.bZ()
B.ho=new A.b3("stun")
B.fv=A.c(s([B.ho,B.d2]),t.B)
B.fO=new A.a4(B.bg,1,B.bi,8,"Shock Staff",B.fv)
B.fw=A.c(s([B.fV,B.fS,B.fT,B.fP,B.fU,B.fR,B.fO]),A.aV("r<a4>"))
B.G=A.c(s([-1,3,-1,-1,3,-1]),t.n)
B.at=A.c(s([]),t.Q)
B.fy=A.c(s([]),t.X)
B.i=A.c(s([]),t.w)
B.fx=A.c(s([]),A.aV("r<a1>"))
B.du=new A.a2("Second Skin",1,1,2,5)
B.dv=new A.a2("Estex Suit I",1,0,1,5)
B.dr=new A.a2("Flight Suit",1,0,1,6)
B.ds=new A.a2("Freebooter Armor I",2,2,3,4)
B.dp=new A.a2("Kasatha microcord I",2,1,3,3)
B.dq=new A.a2("Ceremonial Plate",1,1,3,2)
B.dt=new A.a2("Golemforged Plating",1,2,5,0)
B.fA=A.c(s([B.du,B.dv,B.dr,B.ds,B.dp,B.dq,B.dt]),A.aV("r<a2>"))
B.bN=new A.c3("north")
B.bO=new A.c3("south")
B.bP=new A.c3("east")
B.bQ=new A.c3("west")
B.bR=new A.c3("center")
B.bz=A.c(s([B.bN,B.bO,B.bP,B.bQ,B.bR]),A.aV("r<c3>"))
B.hD=new A.cp("staggered")
B.hw=new A.bZ()
B.d7=new A.dL("charge")
B.d9=new A.dM(B.d7,20)
B.h1=new A.ay("Zero pistol",B.bf,B.aj,5,B.d9,60)
B.hI=A.c(s([B.ad]),t.B)
B.da=new A.dM(B.b2,9)
B.a8=new A.ay("Tac Pistol",B.aF,B.aG,1,B.da,30)
B.hx=new A.bZ()
B.hp=new A.b3("line")
B.hq=new A.b3("unwieldy")
B.hJ=A.c(s([B.hp,B.hq]),t.B)
B.d6=new A.dL("petro")
B.d8=new A.dM(B.d6,20)
B.h2=new A.ay("Flame Rifle",B.ag,B.aH,2,B.d8,25)
B.fD=A.c(s([B.h1,B.a8,B.h2]),A.aV("r<ay>"))
B.bA=new A.cy("lockedDoor")
B.fE=new A.cy("doorMechanism")
B.bB=new A.cy("none")
B.eR=new A.f(4294638330)
B.eP=new A.f(4294309365)
B.eI=new A.f(4293848814)
B.eC=new A.f(4292927712)
B.eA=new A.f(4292269782)
B.ev=new A.f(4290624957)
B.en=new A.f(4288585374)
B.ef=new A.f(4285887861)
B.ea=new A.f(4284572001)
B.e0=new A.f(4282532418)
B.dX=new A.f(4281348144)
B.dR=new A.f(4280361249)
B.x=new A.aa([50,B.eR,100,B.eP,200,B.eI,300,B.eC,350,B.eA,400,B.ev,500,B.en,600,B.ef,700,B.ea,800,B.e0,850,B.dX,900,B.dR],t.m)
B.eG=new A.f(4293457385)
B.ex=new A.f(4291356361)
B.ep=new A.f(4289058471)
B.ei=new A.f(4286695300)
B.ec=new A.f(4284922730)
B.e5=new A.f(4283215696)
B.e2=new A.f(4282622023)
B.dZ=new A.f(4281896508)
B.dW=new A.f(4281236786)
B.dP=new A.f(4279983648)
B.bC=new A.aa([50,B.eG,100,B.ex,200,B.ep,300,B.ei,400,B.ec,500,B.e5,600,B.e2,700,B.dZ,800,B.dW,900,B.dP],t.m)
B.f6=new A.f(4294966759)
B.f5=new A.f(4294965700)
B.f4=new A.f(4294964637)
B.f3=new A.f(4294963574)
B.f2=new A.f(4294962776)
B.f0=new A.f(4294961979)
B.eT=new A.f(4294826037)
B.eS=new A.f(4294688813)
B.eQ=new A.f(4294551589)
B.eO=new A.f(4294278935)
B.bD=new A.aa([50,B.f6,100,B.f5,200,B.f4,300,B.f3,400,B.f2,500,B.f0,600,B.eT,700,B.eS,800,B.eQ,900,B.eO],t.m)
B.eL=new A.f(4293913577)
B.eB=new A.f(4292332744)
B.eu=new A.f(4290554532)
B.eo=new A.f(4288776319)
B.ek=new A.f(4287458915)
B.eh=new A.f(4286141768)
B.ee=new A.f(4285353025)
B.e8=new A.f(4284301367)
B.e6=new A.f(4283315246)
B.e_=new A.f(4282263331)
B.aT=new A.aa([50,B.eL,100,B.eB,200,B.eu,300,B.eo,400,B.ek,500,B.eh,600,B.ee,700,B.e8,800,B.e6,900,B.e_],t.m)
B.f1=new A.f(4294962158)
B.eX=new A.f(4294954450)
B.eK=new A.f(4293892762)
B.eF=new A.f(4293227379)
B.eJ=new A.f(4293874512)
B.eM=new A.f(4294198070)
B.eE=new A.f(4293212469)
B.ez=new A.f(4292030255)
B.ew=new A.f(4291176488)
B.er=new A.f(4290190364)
B.aU=new A.aa([50,B.f1,100,B.eX,200,B.eK,300,B.eF,400,B.eJ,500,B.eM,600,B.eE,700,B.ez,800,B.ew,900,B.er],t.m)
B.eD=new A.f(4293128957)
B.et=new A.f(4290502395)
B.em=new A.f(4287679225)
B.eb=new A.f(4284790262)
B.e1=new A.f(4282557941)
B.dS=new A.f(4280391411)
B.dQ=new A.f(4280191205)
B.dO=new A.f(4279858898)
B.dN=new A.f(4279592384)
B.dM=new A.f(4279060385)
B.bE=new A.aa([50,B.eD,100,B.et,200,B.em,300,B.eb,400,B.e1,500,B.dS,600,B.dQ,700,B.dO,800,B.dN,900,B.dM],t.m)
B.eH=new A.f(4293718001)
B.ey=new A.f(4291811548)
B.eq=new A.f(4289773253)
B.el=new A.f(4287669422)
B.eg=new A.f(4286091420)
B.e9=new A.f(4284513675)
B.e7=new A.f(4283723386)
B.e4=new A.f(4282735204)
B.dY=new A.f(4281812815)
B.dT=new A.f(4280693304)
B.bF=new A.aa([50,B.eH,100,B.ey,200,B.eq,300,B.el,400,B.eg,500,B.e9,600,B.e7,700,B.e4,800,B.dY,900,B.dT],t.m)
B.aV=new A.aa([B.J,null,B.I,null,B.v,null],A.aV("aa<cr,ab?>"))
B.fz=A.c(s([]),t.s)
B.hL=new A.dU(0,{},B.fz,A.aV("dU<u,@>"))
B.eY=new A.f(4294955392)
B.eW=new A.f(4294945600)
B.eV=new A.f(4294938880)
B.eU=new A.f(4294929664)
B.fH=new A.aa([100,B.eY,200,B.eW,400,B.eV,700,B.eU],t.m)
B.ej=new A.f(4286755327)
B.e3=new A.f(4282682111)
B.dV=new A.f(4280908287)
B.dU=new A.f(4280902399)
B.fF=new A.aa([100,B.ej,200,B.e3,400,B.dV,700,B.dU],t.m)
B.fJ=new A.cA(B.fF,4282682111)
B.es=new A.f(4290377418)
B.ed=new A.f(4285132974)
B.dL=new A.f(4278249078)
B.dK=new A.f(4278241363)
B.fG=new A.aa([100,B.es,200,B.ed,400,B.dL,700,B.dK],t.m)
B.fK=new A.cA(B.fG,4285132974)
B.f8=new A.f(4294967181)
B.f7=new A.f(4294967040)
B.f_=new A.f(4294961664)
B.eZ=new A.f(4294956544)
B.fI=new A.aa([100,B.f8,200,B.f7,400,B.f_,700,B.eZ],t.m)
B.fL=new A.cA(B.fI,4294967040)
B.a6=new A.c1(B.bD,4294961979)
B.fM=new A.c1(B.aT,4286141768)
B.t=new A.c1(B.aU,4294198070)
B.fN=new A.c1(B.bE,4280391411)
B.hm=new A.b3("nonlethal")
B.fC=A.c(s([B.d0,B.hm,B.ad]),t.B)
B.fQ=new A.a4(B.ah,1,B.aG,0,"Fists",B.fC)
B.bG=new A.dc("wildBoar")
B.fW=new A.dc("zyborgMelee")
B.fX=new A.dc("zyborgRanged")
B.fY=new A.dc("caveScanner")
B.q=new A.N(0,0)
B.h_=new A.dg(B.aC,t.gm)
B.aB=new A.aj("bookshelf")
B.d5=new A.dK(B.aB)
B.dc=new A.aW(B.aC,B.d5,t.A)
B.h0=new A.dg(B.dc,t.gm)
B.bJ=new A.hl("elementalAffinity")
B.y=new A.i(0,0)
B.a9=new A.aO(B.q,0,0)
B.av=new A.er("small")
B.bL=new A.er("medium")
B.bM=new A.er("large")
B.aw=new A.eu("melee")
B.ax=new A.eu("ranged")
B.ay=new A.eu("armor")
B.bS=new A.k(0,0)
B.h3=new A.k(0,1)
B.bT=new A.k(0,3)
B.bU=new A.k(0,5)
B.bV=new A.k(0,7)
B.bW=new A.k(10,11)
B.bX=new A.k(10,2)
B.bY=new A.k(10,3)
B.bZ=new A.k(10,4)
B.c_=new A.k(10,5)
B.c0=new A.k(10,6)
B.c1=new A.k(10,7)
B.h4=new A.k(11,11)
B.h5=new A.k(11,2)
B.c2=new A.k(11,4)
B.c3=new A.k(11,5)
B.c4=new A.k(11,6)
B.h6=new A.k(11,7)
B.h7=new A.k(12,11)
B.h8=new A.k(12,2)
B.c5=new A.k(12,4)
B.c6=new A.k(12,6)
B.h9=new A.k(12,7)
B.ha=new A.k(13,0)
B.c7=new A.k(13,12)
B.c8=new A.k(13,2)
B.c9=new A.k(13,4)
B.hb=new A.k(13,5)
B.ca=new A.k(13,6)
B.hc=new A.k(14,2)
B.cb=new A.k(14,4)
B.cc=new A.k(14,6)
B.aW=new A.k(15,2)
B.cd=new A.k(15,4)
B.ce=new A.k(15,6)
B.hd=new A.k(1,2)
B.cf=new A.k(1,3)
B.cg=new A.k(1,4)
B.ch=new A.k(1,5)
B.ci=new A.k(1,6)
B.cj=new A.k(1,7)
B.ck=new A.k(2,3)
B.cl=new A.k(2,4)
B.cm=new A.k(2,5)
B.cn=new A.k(2,6)
B.co=new A.k(2,7)
B.cp=new A.k(3,3)
B.cq=new A.k(3,4)
B.cr=new A.k(3,5)
B.cs=new A.k(3,6)
B.ct=new A.k(3,7)
B.cu=new A.k(4,3)
B.cv=new A.k(4,4)
B.cw=new A.k(4,5)
B.cx=new A.k(4,6)
B.cy=new A.k(4,7)
B.he=new A.k(5,0)
B.cz=new A.k(5,3)
B.cA=new A.k(5,4)
B.cB=new A.k(5,5)
B.cC=new A.k(5,6)
B.cD=new A.k(5,7)
B.cE=new A.k(6,3)
B.cF=new A.k(6,4)
B.cG=new A.k(6,5)
B.cH=new A.k(6,6)
B.cI=new A.k(6,7)
B.cJ=new A.k(7,3)
B.cK=new A.k(7,4)
B.cL=new A.k(7,5)
B.cM=new A.k(7,6)
B.cN=new A.k(7,7)
B.hf=new A.k(8,12)
B.hg=new A.k(8,2)
B.cO=new A.k(8,3)
B.cP=new A.k(8,4)
B.cQ=new A.k(8,5)
B.cR=new A.k(8,6)
B.cS=new A.k(8,7)
B.hh=new A.k(9,12)
B.hi=new A.k(9,2)
B.cT=new A.k(9,3)
B.cU=new A.k(9,4)
B.cV=new A.k(9,5)
B.cW=new A.k(9,6)
B.cX=new A.k(9,7)
B.aa=new A.bL("")
B.aX=new A.cI("dirt")
B.az=new A.cI("metal")
B.hj=new A.cI("snow")
B.cY=new A.aj("grass")
B.aY=new A.aj("stalagmite")
B.ac=new A.aj("light")
B.z=new A.aj("none")
B.cZ=new A.aj("chair")
B.aA=new A.aj("chest")
B.d_=new A.aj("mechanism")
B.b_=new A.aj("tree")
B.j=new A.dp("floor")
B.b=new A.dp("wall")
B.hk=A.t8("v")
B.A=new A.cJ("float_1")
B.f=new A.cJ("float_2")
B.hl=new A.cJ("float_3")
B.b0=new A.cJ("float_4")
B.k=new A.cJ("texture_1")
B.hr=new A.dy(null,2)})();(function staticFields(){$.lw=null
$.ny=null
$.nx=null
$.oG=null
$.oA=null
$.oP=null
$.lV=null
$.m2=null
$.n7=null
$.dD=null
$.f5=null
$.f6=null
$.n3=!1
$.C=B.l
$.aU=A.c([],t.hf)
$.nH=0
$.nu=null
$.qU=A.b_(["0",B.bT,"1",B.cf,"2",B.ck,"3",B.cp,"4",B.cu,"5",B.cz,"6",B.cE,"7",B.cJ,"8",B.cO,"9",B.cT," ",B.bS,"-",B.c8,"a",B.ci,"b",B.cn,"c",B.cs,"d",B.cx,"e",B.cC,"f",B.cH,"g",B.cM,"h",B.cR,"i",B.cW,"j",B.c0,"k",B.c4,"l",B.c6,"m",B.ca,"n",B.cc,"o",B.ce,"p",B.bV,"q",B.cj,"r",B.co,"s",B.ct,"t",B.cy,"u",B.cD,"v",B.cI,"w",B.cN,"x",B.cS,"y",B.cX,"z",B.c1,"A",B.cg,"B",B.cl,"C",B.cq,"D",B.cv,"E",B.cA,"F",B.cF,"G",B.cK,"H",B.cP,"I",B.cU,"J",B.bZ,"K",B.c2,"L",B.c5,"M",B.c9,"N",B.cb,"O",B.cd,"P",B.bU,"Q",B.ch,"R",B.cm,"S",B.cr,"T",B.cw,"U",B.cB,"V",B.cG,"W",B.cL,"X",B.cQ,"Y",B.cV,"Z",B.c_,"/",B.aW,":",B.bY],t.N,A.aV("k"))
$.qT=A.b_(["0",B.bT,"1",B.cf,"2",B.ck,"3",B.cp,"4",B.cu,"5",B.cz,"6",B.cE,"7",B.cJ,"8",B.cO,"9",B.cT," ",B.bS,"-",B.c8,"a",B.ci,"b",B.cn,"c",B.cs,"d",B.cx,"e",B.cC,"f",B.cH,"g",B.cM,"h",B.cR,"i",B.cW,"j",B.c0,"k",B.c4,"l",B.c6,"m",B.ca,"n",B.cc,"o",B.ce,"p",B.bV,"q",B.cj,"r",B.co,"s",B.ct,"t",B.cy,"u",B.cD,"v",B.cI,"w",B.cN,"x",B.cS,"y",B.cX,"z",B.c1,"A",B.cg,"B",B.cl,"C",B.cq,"D",B.cv,"E",B.cA,"F",B.cF,"G",B.cK,"H",B.cP,"I",B.cU,"J",B.bZ,"K",B.c2,"L",B.c5,"M",B.c9,"N",B.cb,"O",B.cd,"P",B.bU,"Q",B.ch,"R",B.cm,"S",B.cr,"T",B.cw,"U",B.cB,"V",B.cG,"W",B.cL,"X",B.cQ,"Y",B.cV,"Z",B.c_,"/",B.aW,":",B.bY,".",B.hc,"(",B.hg,")",B.hi,",",B.h8,"[",B.c3,"]",B.hb,"|",B.h9],t.N,A.aV("k"))
$.ag=A.mX("engine")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"to","oV",()=>A.rJ("_$dart_dartClosure"))
s($,"tP","p4",()=>A.bN(A.l1({
toString:function(){return"$receiver$"}})))
s($,"tQ","p5",()=>A.bN(A.l1({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"tR","p6",()=>A.bN(A.l1(null)))
s($,"tS","p7",()=>A.bN(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"tV","pa",()=>A.bN(A.l1(void 0)))
s($,"tW","pb",()=>A.bN(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"tU","p9",()=>A.bN(A.o9(null)))
s($,"tT","p8",()=>A.bN(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"tY","pd",()=>A.bN(A.o9(void 0)))
s($,"tX","pc",()=>A.bN(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"u_","nc",()=>A.qr())
s($,"ub","mz",()=>A.m7(B.hk))
s($,"tm","oU",()=>({}))
s($,"ts","na",()=>B.h.bF(A.mG(),"Opera",0))
s($,"tr","oY",()=>!A.O($.na())&&B.h.bF(A.mG(),"Trident/",0))
s($,"tq","oX",()=>B.h.bF(A.mG(),"Firefox",0))
s($,"tp","oW",()=>"-"+$.oZ()+"-")
s($,"tt","oZ",()=>{if(A.O($.oX()))var r="moz"
else if($.oY())r="ms"
else r=A.O($.na())?"o":"webkit"
return r})
s($,"tF","p3",()=>A.c([$.pv(),$.pw(),$.px(),$.pg(),$.pt()],t.ku))
s($,"uG","pv",()=>A.h5(A.fc(4,6,8,4,4,8),new A.mq(),A.c([B.H],t.V),"death_1.mp3",new A.mr(),B.bG,0,4,"Wild Boar",new A.ms()))
s($,"uE","pt",()=>A.h5(A.fc(4,6,8,4,4,10),new A.mk(),A.c([B.X],t.V),"death_1.mp3",new A.ml(),B.bG,2,4,"Snow Bear",new A.mm()))
s($,"uH","pw",()=>A.h5(A.fc(4,6,8,4,4,8),new A.mt(),A.c([B.B,B.w,B.F,B.C],t.V),"monster_scream_1.mp3",new A.mu(),B.fW,1,6,"Zyborg",new A.mv()))
s($,"uI","px",()=>A.h5(A.fc(4,6,9,4,4,4),new A.mw(),A.c([B.B,B.w,B.F,B.C],t.V),"monster_scream_1.mp3",new A.mx(),B.fX,2,5,"Zyborg Ranged",new A.my()))
s($,"ug","pg",()=>A.h5(A.fc(4,4,10,6,4,2),new A.lR(),A.c([B.B,B.w,B.F,B.C],t.V),null,new A.lS(),B.fY,3,3,"Cave Scanner",new A.lT()))
s($,"uj","nf",()=>{var r=A.c([A.cb(B.f,"u_resolution"),A.cb(B.A,"u_time"),A.cb(B.f,"u_offset"),A.cb(B.f,"u_origin")],t.o)
return A.aI(A.c([A.ns(35044,A.nR(B.G),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\nuniform vec2 u_origin;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  float dist = distance(snapped_position, (u_origin + vec2(0.5, 0.5)) * vec2(24.0, 36.0)) / 50.0;\n  float rand = -1.0 + random(relative_position) / 2.0;\n  float scale_rate = 0.8 * (u_time);\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(249.0 / 255.0, 168.0 / 255.0, 37.0 / 255.0, scale);\n}\n",r,u.d)})
s($,"up","pl",()=>{var r=A.c([A.cb(B.f,"u_resolution"),A.cb(B.A,"u_time"),A.cb(B.f,"u_offset"),A.cb(B.f,"u_source"),A.cb(B.f,"u_target")],t.o)
return A.aI(A.c([A.ns(35044,A.nR(B.G),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nuniform vec2 u_source;\nuniform vec2 u_target;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 p0 = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  vec2 p1 = (u_source + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n  vec2 p2 = (u_target + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n\n  if ((p1.x != p2.x) && (p0.x < p1.x && p0.x < p2.x) || (p0.x > p1.x && p0.x > p2.x)) {\n    discard;\n    return;\n  }\n  if ((p1.y != p2.y) && (p0.y < p1.y && p0.y < p2.y) || (p0.y > p1.y && p0.y > p2.y)) {\n    discard;\n    return;\n  }\n\n  float dist = abs( (p2.x - p1.x) * (p1.y - p0.y) - (p1.x - p0.x) * (p2.y - p1.y) ) / sqrt( pow(p2.x - p1.x, 2.0) + pow(p2.y - p1.y, 2.0) );\n  float rand = random(relative_position);\n  float scale_rate = 1.5;\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = 1.0 - smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(0.1, 0.2, 1.0, 0.8 * scale - u_time);\n}\n",r,u.d)})
s($,"tJ","fa",()=>new A.kE())
s($,"tu","p_",()=>A.mS())
s($,"tB","nb",()=>A.mR(A.bY(4278780675),A.bY(4279308561),A.bY(4280361249)))
s($,"tC","p0",()=>A.mR(A.bY(4279898637),A.bY(4281017118),A.bY(4282858034)))
s($,"tE","p2",()=>A.mR(A.bY(4279765786),A.bY(4280096038),A.bY(4282463311)))
s($,"tD","p1",()=>$.nb())
s($,"uc","dI",()=>A.mS())
s($,"ue","pf",()=>A.mS())
s($,"uC","nk",()=>A.bO(B.ae,new A.mh(),!0))
s($,"uv","ni",()=>A.bO(B.d4,new A.ma(),!0))
s($,"uz","dJ",()=>A.bO(A.nr(B.aD,A.nT(B.ac),t.j),new A.me(),!0))
s($,"uu","nh",()=>A.bO(A.nr(B.ae,A.nT(B.ac),t.j),new A.m9(),!0))
s($,"uw","pp",()=>A.bO(B.ae,new A.mb(),!0))
s($,"uA","nj",()=>A.bO(B.aD,new A.mf(),!0))
s($,"uB","pr",()=>A.bO(B.h_,new A.mg(),!1))
s($,"ux","j9",()=>A.bO(B.dd,new A.md(),!0))
s($,"uy","pq",()=>A.bO(B.de,new A.mc(),!0))
s($,"ut","po",()=>A.bO(B.h0,new A.m8(),!0))
s($,"us","mA",()=>{var r=$.nk(),q=$.ni()
return A.c([r,q,q,$.dJ(),$.j9()],t.D)})
s($,"uq","pm",()=>{var r=$.po()
return A.c([r,r,r,r,r,$.dJ(),$.nk(),$.ni(),$.j9()],t.D)})
s($,"uo","pk",()=>{var r=$.dJ(),q=$.j9()
return A.c([r,r,r,q,q,q],t.D)})
s($,"um","pi",()=>{var r,q=$.dJ(),p=$.nh()
p=A.c([q,q,q,p,p,p,p,p,p],t.D)
for(r=0;r<500;++r)p.push($.pr())
return p})
s($,"un","pj",()=>{var r,q=$.dJ(),p=$.nh()
p=A.c([q,q,q,p,p,p],t.D)
for(r=0;r<10;++r)p.push($.j9())
for(r=0;r<10;++r)p.push($.pq())
return p})
s($,"uF","pu",()=>A.c([$.pp(),$.dJ()],t.D))
s($,"ud","pe",()=>A.q8(A.cN(A.c([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t))))
s($,"uk","ph",()=>A.b_([A.b6("ArrowUp",!1,!1,!1),B.aJ,A.b6("ArrowDown",!1,!1,!1),B.aL,A.b6("ArrowRight",!1,!1,!1),B.aK,A.b6("ArrowLeft",!1,!1,!1),B.aM,A.b6("q",!1,!1,!1),B.bp,A.b6(" ",!1,!1,!1),B.bl,A.b6("0",!1,!1,!1),B.bm,A.b6("l",!1,!1,!1),B.bq,A.b6("Escape",!1,!1,!1),B.fi,A.b6("r",!1,!1,!1),B.bn,A.b6("e",!1,!1,!1),B.fh,A.b6("p",!1,!1,!1),B.bo],A.aV("an"),t.h8))
s($,"ur","pn",()=>A.oE().querySelector("#loading"))
s($,"uf","nd",()=>t.jQ.a(A.oE().querySelector("#glCanvas")))
s($,"ul","ng",()=>A.aV("dj").a(B.aE.dM($.nd(),"webgl2")))
s($,"uD","ps",()=>new A.jJ())
s($,"ui","ne",()=>A.pP($.nd(),$.ng(),$.ps()))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.h6,DataView:A.cE,ArrayBufferView:A.cE,Float64Array:A.cD,Float32Array:A.ei,Int16Array:A.h7,Int32Array:A.h8,Int8Array:A.h9,Uint16Array:A.ha,Uint32Array:A.hb,Uint8ClampedArray:A.de,CanvasPixelArray:A.de,Uint8Array:A.ek,HTMLBRElement:A.q,HTMLBaseElement:A.q,HTMLButtonElement:A.q,HTMLContentElement:A.q,HTMLDListElement:A.q,HTMLDataElement:A.q,HTMLDataListElement:A.q,HTMLDetailsElement:A.q,HTMLDialogElement:A.q,HTMLDivElement:A.q,HTMLEmbedElement:A.q,HTMLFieldSetElement:A.q,HTMLHRElement:A.q,HTMLHeadElement:A.q,HTMLHeadingElement:A.q,HTMLHtmlElement:A.q,HTMLIFrameElement:A.q,HTMLInputElement:A.q,HTMLLIElement:A.q,HTMLLabelElement:A.q,HTMLLegendElement:A.q,HTMLLinkElement:A.q,HTMLMapElement:A.q,HTMLMenuElement:A.q,HTMLMetaElement:A.q,HTMLMeterElement:A.q,HTMLModElement:A.q,HTMLOListElement:A.q,HTMLObjectElement:A.q,HTMLOptGroupElement:A.q,HTMLOptionElement:A.q,HTMLOutputElement:A.q,HTMLParagraphElement:A.q,HTMLParamElement:A.q,HTMLPictureElement:A.q,HTMLPreElement:A.q,HTMLProgressElement:A.q,HTMLQuoteElement:A.q,HTMLScriptElement:A.q,HTMLShadowElement:A.q,HTMLSlotElement:A.q,HTMLSourceElement:A.q,HTMLSpanElement:A.q,HTMLStyleElement:A.q,HTMLTableCaptionElement:A.q,HTMLTableCellElement:A.q,HTMLTableDataCellElement:A.q,HTMLTableHeaderCellElement:A.q,HTMLTableColElement:A.q,HTMLTableElement:A.q,HTMLTableRowElement:A.q,HTMLTableSectionElement:A.q,HTMLTemplateElement:A.q,HTMLTextAreaElement:A.q,HTMLTimeElement:A.q,HTMLTitleElement:A.q,HTMLTrackElement:A.q,HTMLUListElement:A.q,HTMLUnknownElement:A.q,HTMLDirectoryElement:A.q,HTMLFontElement:A.q,HTMLFrameElement:A.q,HTMLFrameSetElement:A.q,HTMLMarqueeElement:A.q,HTMLElement:A.q,AccessibleNodeList:A.jc,HTMLAnchorElement:A.ff,HTMLAreaElement:A.fg,Blob:A.fl,HTMLBodyElement:A.fm,HTMLCanvasElement:A.cl,CDATASection:A.bn,CharacterData:A.bn,Comment:A.bn,ProcessingInstruction:A.bn,Text:A.bn,CSSPerspective:A.jx,CSSCharsetRule:A.J,CSSConditionRule:A.J,CSSFontFaceRule:A.J,CSSGroupingRule:A.J,CSSImportRule:A.J,CSSKeyframeRule:A.J,MozCSSKeyframeRule:A.J,WebKitCSSKeyframeRule:A.J,CSSKeyframesRule:A.J,MozCSSKeyframesRule:A.J,WebKitCSSKeyframesRule:A.J,CSSMediaRule:A.J,CSSNamespaceRule:A.J,CSSPageRule:A.J,CSSRule:A.J,CSSStyleRule:A.J,CSSSupportsRule:A.J,CSSViewportRule:A.J,CSSStyleDeclaration:A.d5,MSStyleCSSProperties:A.d5,CSS2Properties:A.d5,CSSImageValue:A.b4,CSSKeywordValue:A.b4,CSSNumericValue:A.b4,CSSPositionValue:A.b4,CSSResourceValue:A.b4,CSSUnitValue:A.b4,CSSURLImageValue:A.b4,CSSStyleValue:A.b4,CSSMatrixComponent:A.bC,CSSRotation:A.bC,CSSScale:A.bC,CSSSkew:A.bC,CSSTranslation:A.bC,CSSTransformComponent:A.bC,CSSTransformValue:A.jz,CSSUnparsedValue:A.jA,DataTransferItemList:A.jB,Document:A.bD,HTMLDocument:A.bD,XMLDocument:A.bD,DOMException:A.c0,ClientRectList:A.dX,DOMRectList:A.dX,DOMRectReadOnly:A.dY,DOMStringList:A.fB,DOMTokenList:A.jC,Element:A.a9,AbortPaymentEvent:A.l,AnimationEvent:A.l,AnimationPlaybackEvent:A.l,ApplicationCacheErrorEvent:A.l,BackgroundFetchClickEvent:A.l,BackgroundFetchEvent:A.l,BackgroundFetchFailEvent:A.l,BackgroundFetchedEvent:A.l,BeforeInstallPromptEvent:A.l,BeforeUnloadEvent:A.l,BlobEvent:A.l,CanMakePaymentEvent:A.l,ClipboardEvent:A.l,CloseEvent:A.l,CustomEvent:A.l,DeviceMotionEvent:A.l,DeviceOrientationEvent:A.l,ErrorEvent:A.l,ExtendableEvent:A.l,ExtendableMessageEvent:A.l,FetchEvent:A.l,FontFaceSetLoadEvent:A.l,ForeignFetchEvent:A.l,GamepadEvent:A.l,HashChangeEvent:A.l,InstallEvent:A.l,MediaEncryptedEvent:A.l,MediaKeyMessageEvent:A.l,MediaQueryListEvent:A.l,MediaStreamEvent:A.l,MediaStreamTrackEvent:A.l,MessageEvent:A.l,MIDIConnectionEvent:A.l,MIDIMessageEvent:A.l,MutationEvent:A.l,NotificationEvent:A.l,PageTransitionEvent:A.l,PaymentRequestEvent:A.l,PaymentRequestUpdateEvent:A.l,PopStateEvent:A.l,PresentationConnectionAvailableEvent:A.l,PresentationConnectionCloseEvent:A.l,ProgressEvent:A.l,PromiseRejectionEvent:A.l,PushEvent:A.l,RTCDataChannelEvent:A.l,RTCDTMFToneChangeEvent:A.l,RTCPeerConnectionIceEvent:A.l,RTCTrackEvent:A.l,SecurityPolicyViolationEvent:A.l,SensorErrorEvent:A.l,SpeechRecognitionError:A.l,SpeechRecognitionEvent:A.l,SpeechSynthesisEvent:A.l,StorageEvent:A.l,SyncEvent:A.l,TrackEvent:A.l,TransitionEvent:A.l,WebKitTransitionEvent:A.l,VRDeviceEvent:A.l,VRDisplayEvent:A.l,VRSessionEvent:A.l,MojoInterfaceRequestEvent:A.l,ResourceProgressEvent:A.l,USBConnectionEvent:A.l,IDBVersionChangeEvent:A.l,AudioProcessingEvent:A.l,OfflineAudioCompletionEvent:A.l,WebGLContextEvent:A.l,Event:A.l,InputEvent:A.l,SubmitEvent:A.l,AbsoluteOrientationSensor:A.e,Accelerometer:A.e,AccessibleNode:A.e,AmbientLightSensor:A.e,Animation:A.e,ApplicationCache:A.e,DOMApplicationCache:A.e,OfflineResourceList:A.e,BackgroundFetchRegistration:A.e,BatteryManager:A.e,BroadcastChannel:A.e,CanvasCaptureMediaStreamTrack:A.e,DedicatedWorkerGlobalScope:A.e,EventSource:A.e,FileReader:A.e,FontFaceSet:A.e,Gyroscope:A.e,LinearAccelerationSensor:A.e,Magnetometer:A.e,MediaDevices:A.e,MediaKeySession:A.e,MediaQueryList:A.e,MediaRecorder:A.e,MediaSource:A.e,MediaStream:A.e,MediaStreamTrack:A.e,MessagePort:A.e,MIDIAccess:A.e,MIDIInput:A.e,MIDIOutput:A.e,MIDIPort:A.e,NetworkInformation:A.e,Notification:A.e,OffscreenCanvas:A.e,OrientationSensor:A.e,PaymentRequest:A.e,Performance:A.e,PermissionStatus:A.e,PresentationAvailability:A.e,PresentationConnection:A.e,PresentationConnectionList:A.e,PresentationRequest:A.e,RelativeOrientationSensor:A.e,RemotePlayback:A.e,RTCDataChannel:A.e,DataChannel:A.e,RTCDTMFSender:A.e,RTCPeerConnection:A.e,webkitRTCPeerConnection:A.e,mozRTCPeerConnection:A.e,ScreenOrientation:A.e,Sensor:A.e,ServiceWorker:A.e,ServiceWorkerContainer:A.e,ServiceWorkerGlobalScope:A.e,ServiceWorkerRegistration:A.e,SharedWorker:A.e,SharedWorkerGlobalScope:A.e,SpeechRecognition:A.e,SpeechSynthesis:A.e,SpeechSynthesisUtterance:A.e,VR:A.e,VRDevice:A.e,VRDisplay:A.e,VRSession:A.e,VisualViewport:A.e,WebSocket:A.e,Worker:A.e,WorkerGlobalScope:A.e,WorkerPerformance:A.e,BluetoothDevice:A.e,BluetoothRemoteGATTCharacteristic:A.e,Clipboard:A.e,MojoInterfaceInterceptor:A.e,USB:A.e,IDBDatabase:A.e,IDBOpenDBRequest:A.e,IDBVersionChangeRequest:A.e,IDBRequest:A.e,IDBTransaction:A.e,EventTarget:A.e,File:A.aG,FileList:A.fH,FileWriter:A.fI,HTMLFormElement:A.fL,Gamepad:A.aH,History:A.ka,HTMLCollection:A.ct,HTMLFormControlsCollection:A.ct,HTMLOptionsCollection:A.ct,XMLHttpRequest:A.e5,XMLHttpRequestUpload:A.cu,XMLHttpRequestEventTarget:A.cu,HTMLImageElement:A.d9,KeyboardEvent:A.bH,Location:A.ko,HTMLAudioElement:A.cB,HTMLMediaElement:A.cB,MediaList:A.kt,MIDIInputMap:A.h2,MIDIOutputMap:A.h3,MimeType:A.aL,MimeTypeArray:A.h4,MouseEvent:A.aM,DragEvent:A.aM,PointerEvent:A.aM,WheelEvent:A.aM,DocumentFragment:A.w,ShadowRoot:A.w,Attr:A.w,DocumentType:A.w,Node:A.w,NodeList:A.el,RadioNodeList:A.el,Plugin:A.aN,PluginArray:A.hn,RTCStatsReport:A.hu,HTMLSelectElement:A.hw,SourceBuffer:A.aA,SourceBufferList:A.hA,SpeechGrammar:A.aP,SpeechGrammarList:A.hB,SpeechRecognitionResult:A.aQ,Storage:A.hE,CSSStyleSheet:A.ap,StyleSheet:A.ap,TextTrack:A.aD,TextTrackCue:A.ak,VTTCue:A.ak,TextTrackCueList:A.hL,TextTrackList:A.hM,TimeRanges:A.kZ,Touch:A.aR,TouchList:A.hO,TrackDefaultList:A.l_,CompositionEvent:A.bv,FocusEvent:A.bv,TextEvent:A.bv,TouchEvent:A.bv,UIEvent:A.bv,URL:A.l3,HTMLVideoElement:A.dr,VideoTrackList:A.hY,Window:A.ds,DOMWindow:A.ds,CSSRuleList:A.i6,ClientRect:A.eF,DOMRect:A.eF,GamepadList:A.ij,NamedNodeMap:A.eM,MozNamedAttrMap:A.eM,SpeechRecognitionResultList:A.iF,StyleSheetList:A.iN,SVGLength:A.aZ,SVGLengthList:A.fX,SVGNumber:A.b1,SVGNumberList:A.hh,SVGPointList:A.kG,SVGStringList:A.hH,SVGAElement:A.o,SVGAnimateElement:A.o,SVGAnimateMotionElement:A.o,SVGAnimateTransformElement:A.o,SVGAnimationElement:A.o,SVGCircleElement:A.o,SVGClipPathElement:A.o,SVGDefsElement:A.o,SVGDescElement:A.o,SVGDiscardElement:A.o,SVGEllipseElement:A.o,SVGFEBlendElement:A.o,SVGFEColorMatrixElement:A.o,SVGFEComponentTransferElement:A.o,SVGFECompositeElement:A.o,SVGFEConvolveMatrixElement:A.o,SVGFEDiffuseLightingElement:A.o,SVGFEDisplacementMapElement:A.o,SVGFEDistantLightElement:A.o,SVGFEFloodElement:A.o,SVGFEFuncAElement:A.o,SVGFEFuncBElement:A.o,SVGFEFuncGElement:A.o,SVGFEFuncRElement:A.o,SVGFEGaussianBlurElement:A.o,SVGFEImageElement:A.o,SVGFEMergeElement:A.o,SVGFEMergeNodeElement:A.o,SVGFEMorphologyElement:A.o,SVGFEOffsetElement:A.o,SVGFEPointLightElement:A.o,SVGFESpecularLightingElement:A.o,SVGFESpotLightElement:A.o,SVGFETileElement:A.o,SVGFETurbulenceElement:A.o,SVGFilterElement:A.o,SVGForeignObjectElement:A.o,SVGGElement:A.o,SVGGeometryElement:A.o,SVGGraphicsElement:A.o,SVGImageElement:A.o,SVGLineElement:A.o,SVGLinearGradientElement:A.o,SVGMarkerElement:A.o,SVGMaskElement:A.o,SVGMetadataElement:A.o,SVGPathElement:A.o,SVGPatternElement:A.o,SVGPolygonElement:A.o,SVGPolylineElement:A.o,SVGRadialGradientElement:A.o,SVGRectElement:A.o,SVGScriptElement:A.o,SVGSetElement:A.o,SVGStopElement:A.o,SVGStyleElement:A.o,SVGElement:A.o,SVGSVGElement:A.o,SVGSwitchElement:A.o,SVGSymbolElement:A.o,SVGTSpanElement:A.o,SVGTextContentElement:A.o,SVGTextElement:A.o,SVGTextPathElement:A.o,SVGTextPositioningElement:A.o,SVGTitleElement:A.o,SVGUseElement:A.o,SVGViewElement:A.o,SVGGradientElement:A.o,SVGComponentTransferFunctionElement:A.o,SVGFEDropShadowElement:A.o,SVGMPathElement:A.o,SVGTransform:A.b2,SVGTransformList:A.hP,AudioBuffer:A.bl,AudioBufferSourceNode:A.cZ,AudioContext:A.ck,webkitAudioContext:A.ck,AnalyserNode:A.I,RealtimeAnalyserNode:A.I,AudioDestinationNode:A.I,AudioWorkletNode:A.I,BiquadFilterNode:A.I,ChannelMergerNode:A.I,AudioChannelMerger:A.I,ChannelSplitterNode:A.I,AudioChannelSplitter:A.I,ConvolverNode:A.I,DelayNode:A.I,DynamicsCompressorNode:A.I,IIRFilterNode:A.I,MediaElementAudioSourceNode:A.I,MediaStreamAudioDestinationNode:A.I,MediaStreamAudioSourceNode:A.I,PannerNode:A.I,AudioPannerNode:A.I,webkitAudioPannerNode:A.I,ScriptProcessorNode:A.I,JavaScriptAudioNode:A.I,StereoPannerNode:A.I,WaveShaperNode:A.I,AudioNode:A.I,AudioParam:A.fh,AudioParamMap:A.fi,ConstantSourceNode:A.bB,OscillatorNode:A.bB,Oscillator:A.bB,AudioScheduledSourceNode:A.bB,AudioTrackList:A.fj,BaseAudioContext:A.dR,GainNode:A.d8,AudioGainNode:A.d8,OfflineAudioContext:A.hi,WebGLBuffer:A.fo,WebGLFramebuffer:A.fN,WebGLProgram:A.ho,WebGL2RenderingContext:A.dj,WebGLTexture:A.bM,WebGLUniformLocation:A.hR,WebGLVertexArrayObject:A.hX})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,AudioParam:true,AudioParamMap:true,ConstantSourceNode:true,OscillatorNode:true,Oscillator:true,AudioScheduledSourceNode:false,AudioTrackList:true,BaseAudioContext:false,GainNode:true,AudioGainNode:true,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true})
A.dd.$nativeSuperclassTag="ArrayBufferView"
A.eN.$nativeSuperclassTag="ArrayBufferView"
A.eO.$nativeSuperclassTag="ArrayBufferView"
A.cD.$nativeSuperclassTag="ArrayBufferView"
A.eP.$nativeSuperclassTag="ArrayBufferView"
A.eQ.$nativeSuperclassTag="ArrayBufferView"
A.ej.$nativeSuperclassTag="ArrayBufferView"
A.eS.$nativeSuperclassTag="EventTarget"
A.eT.$nativeSuperclassTag="EventTarget"
A.eX.$nativeSuperclassTag="EventTarget"
A.eY.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.m5
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

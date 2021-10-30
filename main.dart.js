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
a[c]=function(){a[c]=function(){A.pc(b)}
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
if(a[b]!==s)A.pd(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=b.fs[0]
if(a)return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"(receiver) {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(receiver, this);"+"}")(b,A.l9,null)
else return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"() {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(this, null);"+"}")(b,A.l9,null)}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.l9(a).prototype
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
a(hunkHelpers,v,w,$)}var A={kP:function kP(){},
lw(a){return new A.d1("Field '"+a+"' has been assigned during initialization.")},
bm(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kW(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
nC(a,b,c){return A.kW(A.bm(A.bm(c,a),b))},
k8(a,b,c){return a},
lH(a,b,c,d){A.j3(b,"start")
if(c!=null){A.j3(c,"end")
if(b>c)A.Z(A.ck(b,0,c,"start",null))}return new A.dj(a,b,c,d.i("dj<0>"))},
lx(a,b,c,d){if(t.gw.b(a))return new A.cU(a,b,c.i("@<0>").w(d).i("cU<1,2>"))
return new A.bO(a,b,c.i("@<0>").w(d).i("bO<1,2>"))},
ng(){return new A.b6("No element")},
ni(){return new A.b6("Too many elements")},
nh(){return new A.b6("Too few elements")},
ny(a,b,c){A.f7(a,0,J.a7(a)-1,b,c)},
f7(a,b,c,d,e){if(c-b<=32)A.nx(a,b,c,d,e)
else A.nw(a,b,c,d,e)},
nx(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aw(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.N()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
nw(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.H(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.H(a4+a5,2),f=g-j,e=g+j,d=J.aw(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.N()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.N()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.N()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.N()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.N()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.N()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.N()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.N()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.N()
if(a2>0){s=a1
a1=a0
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.N(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
A.f7(a3,a4,r-2,a6,a7)
A.f7(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.N(a6.$2(d.h(a3,r),b),0);)++r
for(;J.N(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}A.f7(a3,r,q,a6,a7)}else A.f7(a3,r,q,a6,a7)},
d1:function d1(a){this.a=a},
j9:function j9(){},
m:function m(){},
aE:function aE(){},
dj:function dj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b4:function b4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bO:function bO(a,b,c){this.a=a
this.b=b
this.$ti=c},
cU:function cU(a,b,c){this.a=a
this.b=b
this.$ti=c},
d5:function d5(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
aH:function aH(a,b,c){this.a=a
this.b=b
this.$ti=c},
dm:function dm(a,b,c){this.a=a
this.b=b
this.$ti=c},
ab:function ab(){},
nd(a){if(typeof a=="number")return B.c.gt(a)
if(t.dd.b(a))return A.bT(a)
return A.ki(a)},
ne(a){return new A.il(a)},
mn(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
p1(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
B(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.c4(a)
return s},
bT(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
j0(a){return A.ns(a)},
ns(a){var s,r,q,p
if(a instanceof A.u)return A.a6(A.aJ(a),null)
if(J.cE(a)===B.ca||t.bI.b(a)){s=B.ao(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.a6(A.aJ(a),null)},
c1(a){throw A.e(A.m8(a))},
b(a,b){if(a==null)J.a7(a)
throw A.e(A.cD(a,b))},
cD(a,b){var s,r="index"
if(!A.l6(b))return new A.aV(!0,b,r,null)
s=A.cw(J.a7(a))
if(b<0||b>=s)return A.K(b,a,r,null,s)
return A.lz(b,r)},
m8(a){return new A.aV(!0,a,null,null)},
e(a){var s,r
if(a==null)a=new A.eU()
s=new Error()
s.dartException=a
r=A.pe
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
pe(){return J.c4(this.dartException)},
Z(a){throw A.e(a)},
C(a){throw A.e(A.cO(a))},
b9(a){var s,r,q,p,o,n
a=A.p9(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.jn(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jo(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lK(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kQ(a,b){var s=b==null,r=s?null:b.method
return new A.eD(a,r,s?null:b.receiver)},
bz(a){if(a==null)return new A.iW(a)
if(a instanceof A.cV)return A.by(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.by(a,a.dartException)
return A.oG(a)},
by(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
oG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.d4(r,16)&8191)===10)switch(q){case 438:return A.by(a,A.kQ(A.B(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.B(s)+" (Error "+q+")"
return A.by(a,new A.db(p,e))}}if(a instanceof TypeError){o=$.ms()
n=$.mt()
m=$.mu()
l=$.mv()
k=$.my()
j=$.mz()
i=$.mx()
$.mw()
h=$.mB()
g=$.mA()
f=o.S(s)
if(f!=null)return A.by(a,A.kQ(A.a5(s),f))
else{f=n.S(s)
if(f!=null){f.method="call"
return A.by(a,A.kQ(A.a5(s),f))}else{f=m.S(s)
if(f==null){f=l.S(s)
if(f==null){f=k.S(s)
if(f==null){f=j.S(s)
if(f==null){f=i.S(s)
if(f==null){f=l.S(s)
if(f==null){f=h.S(s)
if(f==null){f=g.S(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.a5(s)
return A.by(a,new A.db(s,f==null?e:f.method))}}}return A.by(a,new A.fp(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.di()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.by(a,new A.aV(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.di()
return a},
bx(a){var s
if(a instanceof A.cV)return a.b
if(a==null)return new A.dE(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.dE(a)},
ki(a){if(a==null||typeof a!="object")return J.c3(a)
else return A.bT(a)},
mb(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
p_(a,b,c,d,e,f){t.b8.a(a)
switch(A.cw(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(A.kM("Unsupported number of arguments for wrapped closure"))},
cC(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.p_)
a.$identity=s
return s},
n4(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.fc().constructor.prototype):Object.create(new A.c7(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else{q=$.aW
if(typeof q!=="number")return q.C()
$.aW=q+1
q=new Function("a,b"+q,"this.$initialize(a,b"+q+")")
r=q}s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.lp(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.n0(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.lp(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
n0(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.mY)}throw A.e("Error in functionType of tearoff")},
n1(a,b,c,d){var s=A.lo
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lp(a,b,c,d){var s,r,q,p,o,n="receiver"
if(c)return A.n3(a,b,d)
s=b.length
r=d||s>=27
if(r)return A.n1(s,d,a,b)
if(s===0){r=$.aW
if(typeof r!=="number")return r.C()
$.aW=r+1
q="self"+r
r="return function(){var "+q+" = this."
p=$.cN
return new Function(r+(p==null?$.cN=A.hV(n):p)+";return "+q+"."+a+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
r=$.aW
if(typeof r!=="number")return r.C()
$.aW=r+1
o+=r
r="return function("+o+"){return this."
p=$.cN
return new Function(r+(p==null?$.cN=A.hV(n):p)+"."+a+"("+o+");}")()},
n2(a,b,c,d){var s=A.lo,r=A.mZ
switch(b?-1:a){case 0:throw A.e(new A.f5("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
n3(a,b,c){var s,r,q,p,o,n=$.ln
if(n==null)n=$.ln=A.hV("interceptor")
s=$.cN
if(s==null)s=$.cN=A.hV("receiver")
r=b.length
q=c||r>=28
if(q)return A.n2(r,c,a,b)
if(r===1){q="return function(){return this."+n+"."+a+"(this."+s+");"
p=$.aW
if(typeof p!=="number")return p.C()
$.aW=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
q="return function("+o+"){return this."+n+"."+a+"(this."+s+", "+o+");"
p=$.aW
if(typeof p!=="number")return p.C()
$.aW=p+1
return new Function(q+p+"}")()},
l9(a){return A.n4(a)},
mY(a,b){return A.jY(v.typeUniverse,A.aJ(a.a),b)},
lo(a){return a.a},
mZ(a){return a.b},
hV(a){var s,r,q,p=new A.c7("receiver","interceptor"),o=J.lv(Object.getOwnPropertyNames(p),t.r)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.e(A.cJ("Field name "+a+" not found.",null))},
X(a){if(a==null)A.oH("boolean expression must not be null")
return a},
oH(a){throw A.e(new A.fu(a))},
pc(a){throw A.e(new A.el(a))},
oV(a){return v.getIsolateTag(a)},
q8(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p4(a){var s,r,q,p,o,n=A.a5($.md.$1(a)),m=$.k9[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kf[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.o5($.m7.$2(a,n))
if(q!=null){m=$.k9[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kf[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.kh(s)
$.k9[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kf[n]=s
return s}if(p==="-"){o=A.kh(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.mi(a,s)
if(p==="*")throw A.e(A.lL(n))
if(v.leafTags[n]===true){o=A.kh(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.mi(a,s)},
mi(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lb(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kh(a){return J.lb(a,!1,null,!!a.$iw)},
p6(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.kh(s)
else return J.lb(s,c,null,null)},
oY(){if(!0===$.la)return
$.la=!0
A.oZ()},
oZ(){var s,r,q,p,o,n,m,l
$.k9=Object.create(null)
$.kf=Object.create(null)
A.oX()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mj.$1(o)
if(n!=null){m=A.p6(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
oX(){var s,r,q,p,o,n,m=B.br()
m=A.cB(B.bs,A.cB(B.bt,A.cB(B.ap,A.cB(B.ap,A.cB(B.bu,A.cB(B.bv,A.cB(B.bw(B.ao),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.md=new A.kc(p)
$.m7=new A.kd(o)
$.mj=new A.ke(n)},
cB(a,b){return a(b)||b},
p9(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cb:function cb(){},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aZ:function aZ(a,b){this.a=a
this.$ti=b},
il:function il(a){this.a=a},
jn:function jn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
db:function db(a,b){this.a=a
this.b=b},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a){this.a=a},
iW:function iW(a){this.a=a},
cV:function cV(a,b){this.a=a
this.b=b},
dE:function dE(a){this.a=a
this.b=null},
bD:function bD(){},
eg:function eg(){},
eh:function eh(){},
fg:function fg(){},
fc:function fc(){},
c7:function c7(a,b){this.a=a
this.b=b},
f5:function f5(a){this.a=a},
fu:function fu(a){this.a=a},
ak:function ak(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iA:function iA(a){this.a=a},
iz:function iz(a){this.a=a},
iC:function iC(a,b){this.a=a
this.b=b
this.c=null},
d2:function d2(a,b){this.a=a
this.$ti=b},
d3:function d3(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
lY(a,b,c){},
cx(a){return a},
kU(a,b,c){A.lY(a,b,c)
return new Float32Array(a,b,c)},
ly(a,b,c){var s
A.lY(a,b,c)
s=new Uint8Array(a,b,c)
return s},
bb(a,b,c){if(a>>>0!==a||a>=c)throw A.e(A.cD(b,a))},
bR:function bR(){},
ch:function ch(){},
bQ:function bQ(){},
d9:function d9(){},
d8:function d8(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
ci:function ci(){},
eT:function eT(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
lB(a,b){var s=b.c
return s==null?b.c=A.l1(a,b.z,!0):s},
lA(a,b){var s=b.c
return s==null?b.c=A.dM(a,"aO",[b.z]):s},
lC(a){var s=a.y
if(s===6||s===7||s===8)return A.lC(a.z)
return s===11||s===12},
nv(a){return a.cy},
av(a){return A.hq(v.typeUniverse,a,!1)},
bw(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.bw(a,s,a0,a1)
if(r===s)return b
return A.lV(a,r,!0)
case 7:s=b.z
r=A.bw(a,s,a0,a1)
if(r===s)return b
return A.l1(a,r,!0)
case 8:s=b.z
r=A.bw(a,s,a0,a1)
if(r===s)return b
return A.lU(a,r,!0)
case 9:q=b.Q
p=A.dX(a,q,a0,a1)
if(p===q)return b
return A.dM(a,b.z,p)
case 10:o=b.z
n=A.bw(a,o,a0,a1)
m=b.Q
l=A.dX(a,m,a0,a1)
if(n===o&&l===m)return b
return A.l_(a,n,l)
case 11:k=b.z
j=A.bw(a,k,a0,a1)
i=b.Q
h=A.oD(a,i,a0,a1)
if(j===k&&h===i)return b
return A.lT(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.dX(a,g,a0,a1)
o=b.z
n=A.bw(a,o,a0,a1)
if(f===g&&n===o)return b
return A.l0(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.e(A.hM("Attempted to substitute unexpected RTI kind "+c))}},
dX(a,b,c,d){var s,r,q,p,o=b.length,n=A.jZ(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bw(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
oE(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.jZ(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bw(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
oD(a,b,c,d){var s,r=b.a,q=A.dX(a,r,c,d),p=b.b,o=A.dX(a,p,c,d),n=b.c,m=A.oE(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.fM()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
oP(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.oW(s)
return a.$S()}return null},
me(a,b){var s
if(A.lC(b))if(a instanceof A.bD){s=A.oP(a)
if(s!=null)return s}return A.aJ(a)},
aJ(a){var s
if(a instanceof A.u){s=a.$ti
return s!=null?s:A.l3(a)}if(Array.isArray(a))return A.aB(a)
return A.l3(J.cE(a))},
aB(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
A(a){var s=a.$ti
return s!=null?s:A.l3(a)},
l3(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ok(a,s)},
ok(a,b){var s=a instanceof A.bD?a.__proto__.__proto__.constructor:b,r=A.o2(v.typeUniverse,s.name)
b.$ccache=r
return r},
oW(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.hq(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
oS(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.dK(a)
q=A.hq(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.dK(q):p},
pf(a){return A.oS(A.hq(v.typeUniverse,a,!1))},
oj(a){var s,r,q,p,o=this
if(o===t.K)return A.cy(o,a,A.oo)
if(!A.bd(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.cy(o,a,A.or)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.l6
else if(r===t.i||r===t.di)q=A.on
else if(r===t.N)q=A.op
else q=r===t.cJ?A.l4:null
if(q!=null)return A.cy(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.p2)){o.r="$i"+p
if(p==="n")return A.cy(o,a,A.om)
return A.cy(o,a,A.oq)}}else if(s===7)return A.cy(o,a,A.oh)
return A.cy(o,a,A.of)},
cy(a,b,c){a.b=c
return a.b(b)},
oi(a){var s,r=this,q=A.oe
if(!A.bd(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.o6
else if(r===t.K)q=A.o4
else{s=A.dZ(r)
if(s)q=A.og}r.a=q
return r.a(a)},
k1(a){var s,r=a.y
if(!A.bd(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&A.k1(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
of(a){var s=this
if(a==null)return A.k1(s)
return A.L(v.typeUniverse,A.me(a,s),null,s,null)},
oh(a){if(a==null)return!0
return this.z.b(a)},
oq(a){var s,r=this
if(a==null)return A.k1(r)
s=r.r
if(a instanceof A.u)return!!a[s]
return!!J.cE(a)[s]},
om(a){var s,r=this
if(a==null)return A.k1(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.u)return!!a[s]
return!!J.cE(a)[s]},
oe(a){var s,r=this
if(a==null){s=A.dZ(r)
if(s)return a}else if(r.b(a))return a
A.m0(a,r)},
og(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.m0(a,s)},
m0(a,b){throw A.e(A.lS(A.lN(a,A.me(a,b),A.a6(b,null))))},
oO(a,b,c,d){var s=null
if(A.L(v.typeUniverse,a,s,b,s))return a
throw A.e(A.lS("The type argument '"+A.a6(a,s)+"' is not a subtype of the type variable bound '"+A.a6(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
lN(a,b,c){var s=A.ep(a),r=A.a6(b==null?A.aJ(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
lS(a){return new A.dL("TypeError: "+a)},
a4(a,b){return new A.dL("TypeError: "+A.lN(a,null,b))},
oo(a){return a!=null},
o4(a){if(a!=null)return a
throw A.e(A.a4(a,"Object"))},
or(a){return!0},
o6(a){return a},
l4(a){return!0===a||!1===a},
pV(a){if(!0===a)return!0
if(!1===a)return!1
throw A.e(A.a4(a,"bool"))},
pX(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.a4(a,"bool"))},
pW(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.a4(a,"bool?"))},
l2(a){if(typeof a=="number")return a
throw A.e(A.a4(a,"double"))},
pZ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.a4(a,"double"))},
pY(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.a4(a,"double?"))},
l6(a){return typeof a=="number"&&Math.floor(a)===a},
cw(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.e(A.a4(a,"int"))},
q0(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.a4(a,"int"))},
q_(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.a4(a,"int?"))},
on(a){return typeof a=="number"},
aI(a){if(typeof a=="number")return a
throw A.e(A.a4(a,"num"))},
q2(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.a4(a,"num"))},
q1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.a4(a,"num?"))},
op(a){return typeof a=="string"},
a5(a){if(typeof a=="string")return a
throw A.e(A.a4(a,"String"))},
q3(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.a4(a,"String"))},
o5(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.a4(a,"String?"))},
oz(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.a6(a[q],b)
return s},
m1(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.c([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.l(a5,"T"+(q+p))
for(o=t.r,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.b(a5,j)
m=B.H.C(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.a6(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.a6(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.a6(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.a6(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.a6(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a6(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.a6(a.z,b)
return s}if(l===7){r=a.z
s=A.a6(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.a6(a.z,b)+">"
if(l===9){p=A.oF(a.z)
o=a.Q
return o.length>0?p+("<"+A.oz(o,b)+">"):p}if(l===11)return A.m1(a,b,null)
if(l===12)return A.m1(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
oF(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
o3(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
o2(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.hq(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dN(a,5,"#")
q=A.jZ(s)
for(p=0;p<s;++p)q[p]=r
o=A.dM(a,b,q)
n[b]=o
return o}else return m},
o0(a,b){return A.lW(a.tR,b)},
o_(a,b){return A.lW(a.eT,b)},
hq(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.lQ(A.lO(a,null,b,c))
r.set(b,s)
return s},
jY(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.lQ(A.lO(a,b,c,!0))
q.set(c,r)
return r},
o1(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.l_(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bv(a,b){b.a=A.oi
b.b=A.oj
return b},
dN(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aF(null,null)
s.y=b
s.cy=c
r=A.bv(a,s)
a.eC.set(c,r)
return r},
lV(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.nY(a,b,r,c)
a.eC.set(r,s)
return s},
nY(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bd(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.aF(null,null)
q.y=6
q.z=b
q.cy=c
return A.bv(a,q)},
l1(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.nX(a,b,r,c)
a.eC.set(r,s)
return s},
nX(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.bd(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.dZ(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.dZ(q.z))return q
else return A.lB(a,b)}}p=new A.aF(null,null)
p.y=7
p.z=b
p.cy=c
return A.bv(a,p)},
lU(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.nV(a,b,r,c)
a.eC.set(r,s)
return s},
nV(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bd(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.dM(a,"aO",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.aF(null,null)
q.y=8
q.z=b
q.cy=c
return A.bv(a,q)},
nZ(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aF(null,null)
s.y=13
s.z=b
s.cy=q
r=A.bv(a,s)
a.eC.set(q,r)
return r},
hp(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
nU(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dM(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.hp(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aF(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.bv(a,r)
a.eC.set(p,q)
return q},
l_(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.hp(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aF(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.bv(a,o)
a.eC.set(q,n)
return n},
lT(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.hp(m)
if(j>0){s=l>0?",":""
r=A.hp(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.nU(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aF(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.bv(a,o)
a.eC.set(q,r)
return r},
l0(a,b,c,d){var s,r=b.cy+("<"+A.hp(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.nW(a,b,c,r,d)
a.eC.set(r,s)
return s},
nW(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.jZ(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.bw(a,b,r,0)
m=A.dX(a,c,r,0)
return A.l0(a,n,m,c!==m)}}l=new A.aF(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.bv(a,l)},
lO(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lQ(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.nO(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.lP(a,r,h,g,!1)
else if(q===46)r=A.lP(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.bt(a.u,a.e,g.pop()))
break
case 94:g.push(A.nZ(a.u,g.pop()))
break
case 35:g.push(A.dN(a.u,5,"#"))
break
case 64:g.push(A.dN(a.u,2,"@"))
break
case 126:g.push(A.dN(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.kZ(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.dM(p,n,o))
else{m=A.bt(p,a.e,n)
switch(m.y){case 11:g.push(A.l0(p,m,o,a.n))
break
default:g.push(A.l_(p,m,o))
break}}break
case 38:A.nP(a,g)
break
case 42:p=a.u
g.push(A.lV(p,A.bt(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.l1(p,A.bt(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.lU(p,A.bt(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.fM()
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
A.kZ(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.lT(p,A.bt(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.kZ(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.nR(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.bt(a.u,a.e,i)},
nO(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lP(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.o3(s,o.z)[p]
if(n==null)A.Z('No "'+p+'" in "'+A.nv(o)+'"')
d.push(A.jY(s,o,n))}else d.push(p)
return m},
nP(a,b){var s=b.pop()
if(0===s){b.push(A.dN(a.u,1,"0&"))
return}if(1===s){b.push(A.dN(a.u,4,"1&"))
return}throw A.e(A.hM("Unexpected extended operation "+A.B(s)))},
bt(a,b,c){if(typeof c=="string")return A.dM(a,c,a.sEA)
else if(typeof c=="number")return A.nQ(a,b,c)
else return c},
kZ(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bt(a,b,c[s])},
nR(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bt(a,b,c[s])},
nQ(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.e(A.hM("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.e(A.hM("Bad index "+c+" for "+b.k(0)))},
L(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.bd(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.bd(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.L(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return A.L(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.L(a,b.z,c,d,e)
if(r===6)return A.L(a,b.z,c,d,e)
return r!==7}if(r===6)return A.L(a,b.z,c,d,e)
if(p===6){s=A.lB(a,d)
return A.L(a,b,c,s,e)}if(r===8){if(!A.L(a,b.z,c,d,e))return!1
return A.L(a,A.lA(a,b),c,d,e)}if(r===7){s=A.L(a,t.P,c,d,e)
return s&&A.L(a,b.z,c,d,e)}if(p===8){if(A.L(a,b,c,d.z,e))return!0
return A.L(a,b,c,A.lA(a,d),e)}if(p===7){s=A.L(a,b,c,t.P,e)
return s||A.L(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.b8)return!0
if(p===12){if(b===t.cj)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.L(a,k,c,j,e)||!A.L(a,j,e,k,c))return!1}return A.m2(a,b.z,c,d.z,e)}if(p===11){if(b===t.cj)return!0
if(s)return!1
return A.m2(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.ol(a,b,c,d,e)}return!1},
m2(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.L(a3,a4.z,a5,a6.z,a7))return!1
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
if(!A.L(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.L(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.L(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.L(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
ol(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.jY(a,b,r[o])
return A.lX(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.lX(a,n,null,c,m,e)},
lX(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.L(a,r,d,q,f))return!1}return!0},
dZ(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.bd(a))if(r!==7)if(!(r===6&&A.dZ(a.z)))s=r===8&&A.dZ(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
p2(a){var s
if(!A.bd(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bd(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.r},
lW(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
jZ(a){return a>0?new Array(a):v.typeUniverse.sEA},
aF:function aF(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fM:function fM(){this.c=this.b=this.a=null},
dK:function dK(a){this.a=a},
fJ:function fJ(){},
dL:function dL(a){this.a=a},
nH(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.oI()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.cC(new A.jx(q),1)).observe(s,{childList:true})
return new A.jw(q,s,r)}else if(self.setImmediate!=null)return A.oJ()
return A.oK()},
nI(a){self.scheduleImmediate(A.cC(new A.jy(t.M.a(a)),0))},
nJ(a){self.setImmediate(A.cC(new A.jz(t.M.a(a)),0))},
nK(a){t.M.a(a)
A.nS(0,a)},
lI(a,b){var s=B.d.H(a.a,1000)
return A.nT(s<0?0:s,b)},
nS(a,b){var s=new A.dJ(!0)
s.cv(a,b)
return s},
nT(a,b){var s=new A.dJ(!1)
s.cw(a,b)
return s},
dW(a){return new A.fv(new A.M($.H,a.i("M<0>")),a.i("fv<0>"))},
dS(a,b){a.$2(0,null)
b.b=!0
return b.a},
ba(a,b){A.o7(a,b)},
dR(a,b){b.aq(0,a)},
dQ(a,b){b.bP(A.bz(a),A.bx(a))},
o7(a,b){var s,r,q=new A.k_(b),p=new A.k0(b)
if(a instanceof A.M)a.bC(q,p,t.z)
else{s=t.z
if(t.f.b(a))a.b1(q,p,s)
else{r=new A.M($.H,t.c)
r.a=8
r.c=a
r.bC(q,p,s)}}},
dY(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.H.aY(new A.k3(s),t.H,t.S,t.z)},
hN(a,b){var s=A.k8(a,"error",t.K)
return new A.cM(s,b==null?A.mX(a):b)},
mX(a){var s
if(t.bU.b(a)){s=a.gaj()
if(s!=null)return s}return B.bz},
kX(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.an()
b.aB(a)
A.cv(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.by(q)}},
cv(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.f;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.hB(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.cv(c.a,b)
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
A.hB(i.a,i.b)
return}f=$.H
if(f!==g)$.H=g
else f=null
b=b.c
if((b&15)===8)new A.jN(p,c,m).$0()
else if(n){if((b&1)!==0)new A.jM(p,i).$0()}else if((b&2)!==0)new A.jL(c,p).$0()
if(f!=null)$.H=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("aO<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.ao(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.kX(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.ao(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
ox(a,b){var s
if(t.C.b(a))return b.aY(a,t.z,t.K,t.k)
s=t.y
if(s.b(a))return s.a(a)
throw A.e(A.lm(a,"onError",u.c))},
ou(){var s,r
for(s=$.cz;s!=null;s=$.cz){$.dU=null
r=s.b
$.cz=r
if(r==null)$.dT=null
s.a.$0()}},
oC(){$.l5=!0
try{A.ou()}finally{$.dU=null
$.l5=!1
if($.cz!=null)$.ld().$1(A.m9())}},
m5(a){var s=new A.fw(a),r=$.dT
if(r==null){$.cz=$.dT=s
if(!$.l5)$.ld().$1(A.m9())}else $.dT=r.b=s},
oA(a){var s,r,q,p=$.cz
if(p==null){A.m5(a)
$.dU=$.dT
return}s=new A.fw(a)
r=$.dU
if(r==null){s.b=p
$.cz=$.dU=s}else{q=r.b
s.b=q
$.dU=r.b=s
if(q==null)$.dT=s}},
mk(a){var s=null,r=$.H
if(B.o===r){A.cA(s,s,B.o,a)
return}A.cA(s,s,r,t.M.a(r.bK(a)))},
pH(a,b){A.k8(a,"stream",t.K)
return new A.hc(b.i("hc<0>"))},
lF(a){return new A.ct(null,null,null,a.i("ct<0>"))},
l8(a){return},
nL(a,b){if(b==null)b=A.oM()
if(t.da.b(b))return a.aY(b,t.z,t.K,t.k)
if(t.d5.b(b))return t.y.a(b)
throw A.e(A.cJ("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
ow(a,b){A.hB(a,b)},
ov(){},
nD(a,b){var s=$.H
if(s===B.o)return A.lI(a,t.cB.a(b))
return A.lI(a,t.cB.a(s.bL(b,t.aF)))},
hB(a,b){A.oA(new A.k2(a,b))},
m3(a,b,c,d,e){var s,r=$.H
if(r===c)return d.$0()
$.H=c
s=r
try{r=d.$0()
return r}finally{$.H=s}},
m4(a,b,c,d,e,f,g){var s,r=$.H
if(r===c)return d.$1(e)
$.H=c
s=r
try{r=d.$1(e)
return r}finally{$.H=s}},
oy(a,b,c,d,e,f,g,h,i){var s,r=$.H
if(r===c)return d.$2(e,f)
$.H=c
s=r
try{r=d.$2(e,f)
return r}finally{$.H=s}},
cA(a,b,c,d){t.M.a(d)
if(B.o!==c)d=c.bK(d)
A.m5(d)},
jx:function jx(a){this.a=a},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
dJ:function dJ(a){this.a=a
this.b=null
this.c=0},
jX:function jX(a,b){this.a=a
this.b=b},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fv:function fv(a,b){this.a=a
this.b=!1
this.$ti=b},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k3:function k3(a){this.a=a},
cM:function cM(a,b){this.a=a
this.b=b},
fA:function fA(){},
bX:function bX(a,b){this.a=a
this.$ti=b},
c0:function c0(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
M:function M(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jD:function jD(a,b){this.a=a
this.b=b},
jK:function jK(a,b){this.a=a
this.b=b},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a,b){this.a=a
this.b=b},
jJ:function jJ(a,b){this.a=a
this.b=b},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a){this.a=a},
jM:function jM(a,b){this.a=a
this.b=b},
jL:function jL(a,b){this.a=a
this.b=b},
fw:function fw(a){this.a=a
this.b=null},
bU:function bU(){},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(a,b){this.a=a
this.b=b},
b7:function b7(){},
dF:function dF(){},
jV:function jV(a){this.a=a},
fx:function fx(){},
ct:function ct(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
br:function br(a,b){this.a=a
this.$ti=b},
cu:function cu(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
dp:function dp(){},
dG:function dG(){},
fE:function fE(){},
bY:function bY(a,b){this.b=a
this.a=null
this.$ti=b},
bu:function bu(){},
jS:function jS(a,b){this.a=a
this.b=b},
aT:function aT(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
hc:function hc(a){this.$ti=a},
dO:function dO(){},
k2:function k2(a,b){this.a=a
this.b=b},
h3:function h3(){},
jT:function jT(a,b){this.a=a
this.b=b},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
kR(a,b,c,d){if(b==null){if(a==null)return new A.ak(c.i("@<0>").w(d).i("ak<1,2>"))}else if(a==null)a=A.oR()
return A.nN(A.oQ(),a,b,c,d)},
bM(a,b,c){return b.i("@<0>").w(c).i("iB<1,2>").a(A.mb(a,new A.ak(b.i("@<0>").w(c).i("ak<1,2>"))))},
b3(a,b){return new A.ak(a.i("@<0>").w(b).i("ak<1,2>"))},
nN(a,b,c,d,e){var s=c!=null?c:new A.jQ(d)
return new A.dt(a,b,s,d.i("@<0>").w(e).i("dt<1,2>"))},
iE(a){return new A.du(a.i("du<0>"))},
kY(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ob(a,b){return J.N(a,b)},
oc(a){return J.c3(a)},
lu(a,b,c){var s,r
if(A.l7(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.au,a)
try{A.os(a,s)}finally{if(0>=$.au.length)return A.b($.au,-1)
$.au.pop()}r=A.lG(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
kO(a,b,c){var s,r
if(A.l7(a))return b+"..."+c
s=new A.fe(b)
B.a.l($.au,a)
try{r=s
r.a=A.lG(r.a,a,", ")}finally{if(0>=$.au.length)return A.b($.au,-1)
$.au.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
l7(a){var s,r
for(s=$.au.length,r=0;r<s;++r)if(a===$.au[r])return!0
return!1},
os(a,b){var s,r,q,p,o,n,m,l=a.gB(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.B(l.gp(l))
B.a.l(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gp(l);++j
if(!l.n()){if(j<=4){B.a.l(b,A.B(p))
return}r=A.B(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp(l);++j
for(;l.n();p=o,o=n){n=l.gp(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.B(p)
r=A.B(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
nn(a,b,c){var s=A.kR(null,null,b,c)
a.A(0,new A.iD(s,b,c))
return s},
kT(a){var s,r={}
if(A.l7(a))return"{...}"
s=new A.fe("")
try{B.a.l($.au,a)
s.a+="{"
r.a=!0
J.mT(a,new A.iH(r,s))
s.a+="}"}finally{if(0>=$.au.length)return A.b($.au,-1)
$.au.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
jR:function jR(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dt:function dt(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
jQ:function jQ(a){this.a=a},
du:function du(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fT:function fT(a){this.a=a
this.b=null},
dv:function dv(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
h:function h(){},
d4:function d4(){},
iH:function iH(a,b){this.a=a
this.b=b},
x:function x(){},
iK:function iK(a){this.a=a},
dh:function dh(){},
dB:function dB(){},
dP:function dP(){},
nb(a){if(a instanceof A.bD)return a.k(0)
return"Instance of '"+A.j0(a)+"'"},
b5(a,b,c,d){var s,r=J.nj(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
np(a,b,c){var s=A.no(a,c)
return s},
no(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("t<0>"))
s=A.c([],b.i("t<0>"))
for(r=J.aU(a);r.n();)B.a.l(s,r.gp(r))
return s},
kS(a,b,c){var s,r=J.nk(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
lG(a,b,c){var s=J.aU(b)
if(!s.n())return a
if(c.length===0){do a+=A.B(s.gp(s))
while(s.n())}else{a+=A.B(s.gp(s))
for(;s.n();)a=a+c+A.B(s.gp(s))}return a},
kK(a,b){return new A.a0(1000*a+1e6*b)},
ep(a){if(typeof a=="number"||A.l4(a)||a==null)return J.c4(a)
if(typeof a=="string")return JSON.stringify(a)
return A.nb(a)},
hM(a){return new A.cL(a)},
cJ(a,b){return new A.aV(!1,null,b,a)},
lm(a,b,c){return new A.aV(!0,a,b,c)},
nu(a){var s=null
return new A.cj(s,s,!1,s,s,a)},
lz(a,b){return new A.cj(null,null,!0,a,b,"Value not in range")},
ck(a,b,c,d,e){return new A.cj(b,c,!0,a,d,"Invalid value")},
kV(a,b,c){if(0>a||a>c)throw A.e(A.ck(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.ck(b,a,c,"end",null))
return b}return c},
j3(a,b){if(a<0)throw A.e(A.ck(a,0,null,b,null))
return a},
K(a,b,c,d,e){var s=A.cw(e==null?J.a7(b):e)
return new A.eA(s,!0,a,c,"Index out of range")},
y(a){return new A.fq(a)},
lL(a){return new A.fo(a)},
aR(a){return new A.b6(a)},
cO(a){return new A.ei(a)},
kM(a){return new A.jC(a)},
iX(a,b,c,d){var s,r
if(B.t===c)return A.nC(B.c.gt(a),B.c.gt(b),$.kF())
if(B.t===d){s=B.c.gt(a)
b=B.c.gt(b)
c=J.c3(c)
return A.kW(A.bm(A.bm(A.bm($.kF(),s),b),c))}s=B.c.gt(a)
b=B.c.gt(b)
c=J.c3(c)
d=J.c3(d)
r=$.kF()
return A.kW(A.bm(A.bm(A.bm(A.bm(r,s),b),c),d))},
hE(a){A.lc(a)},
a0:function a0(a){this.a=a},
jA:function jA(){},
E:function E(){},
cL:function cL(a){this.a=a},
bq:function bq(){},
eU:function eU(){},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cj:function cj(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eA:function eA(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fq:function fq(a){this.a=a},
fo:function fo(a){this.a=a},
b6:function b6(a){this.a=a},
ei:function ei(a){this.a=a},
eX:function eX(){},
di:function di(){},
el:function el(a){this.a=a},
jC:function jC(a){this.a=a},
i:function i(){},
a1:function a1(){},
cf:function cf(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(){},
u:function u(){},
hf:function hf(){},
fe:function fe(a){this.a=a},
ka(){return document},
lr(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{J.mW(q,a)}catch(s){}return q},
c_(a,b,c,d,e){var s=A.m6(new A.jB(c),t.aD)
if(s!=null&&!0)J.mR(a,b,s,!1)
return new A.ds(a,b,s,!1,e.i("ds<0>"))},
o8(a){var s
if("postMessage" in a){s=A.nM(a)
return s}else return t.ch.a(a)},
nM(a){if(a===window)return t.ci.a(a)
else return new A.fD()},
m6(a,b){var s=$.H
if(s===B.o)return a
return s.bL(a,b)},
p:function p(){},
hH:function hH(){},
e4:function e4(){},
e5:function e5(){},
ea:function ea(){},
eb:function eb(){},
bB:function bB(){},
c8:function c8(){},
aK:function aK(){},
i1:function i1(){},
D:function D(){},
cQ:function cQ(){},
i2:function i2(){},
aC:function aC(){},
aY:function aY(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
cc:function cc(){},
i7:function i7(){},
cS:function cS(){},
cT:function cT(){},
em:function em(){},
i8:function i8(){},
P:function P(){},
j:function j(){},
d:function d(){},
ah:function ah(){},
eq:function eq(){},
er:function er(){},
ev:function ev(){},
ai:function ai(){},
ir:function ir(){},
bH:function bH(){},
cd:function cd(){},
bI:function bI(){},
b2:function b2(){},
iG:function iG(){},
bP:function bP(){},
iM:function iM(){},
eJ:function eJ(){},
iP:function iP(a){this.a=a},
eK:function eK(){},
iQ:function iQ(a){this.a=a},
al:function al(){},
eL:function eL(){},
ac:function ac(){},
q:function q(){},
da:function da(){},
am:function am(){},
f_:function f_(){},
f4:function f4(){},
j6:function j6(a){this.a=a},
f6:function f6(){},
ad:function ad(){},
f9:function f9(){},
ao:function ao(){},
fa:function fa(){},
ap:function ap(){},
fd:function fd(){},
jd:function jd(a){this.a=a},
a2:function a2(){},
ae:function ae(){},
a_:function a_(){},
fh:function fh(){},
fi:function fi(){},
jl:function jl(){},
ar:function ar(){},
fk:function fk(){},
jm:function jm(){},
aS:function aS(){},
jp:function jp(){},
cq:function cq(){},
fs:function fs(){},
cs:function cs(){},
fB:function fB(){},
dq:function dq(){},
fN:function fN(){},
dw:function dw(){},
h7:function h7(){},
hg:function hg(){},
kL:function kL(a,b){this.a=a
this.$ti=b},
dr:function dr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ds:function ds(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jB:function jB(a){this.a=a},
o:function o(){},
cW:function cW(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
fD:function fD(){},
fC:function fC(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fK:function fK(){},
fL:function fL(){},
fO:function fO(){},
fP:function fP(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h1:function h1(){},
h2:function h2(){},
h4:function h4(){},
dC:function dC(){},
dD:function dD(){},
h5:function h5(){},
h6:function h6(){},
ha:function ha(){},
hh:function hh(){},
hi:function hi(){},
dH:function dH(){},
dI:function dI(){},
hk:function hk(){},
hl:function hl(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
j2(){return B.q},
fQ:function fQ(){},
ax:function ax(){},
eE:function eE(){},
ay:function ay(){},
eV:function eV(){},
j_:function j_(){},
ff:function ff(){},
l:function l(){},
az:function az(){},
fl:function fl(){},
fR:function fR(){},
fS:function fS(){},
h_:function h_(){},
h0:function h0(){},
hd:function hd(){},
he:function he(){},
hm:function hm(){},
hn:function hn(){},
hR:function hR(){},
e8:function e8(){},
hS:function hS(a){this.a=a},
e9:function e9(){},
bf:function bf(){},
eW:function eW(){},
fz:function fz(){},
ec:function ec(){},
ew:function ew(){},
f0:function f0(){},
cl:function cl(){},
b8:function b8(){},
fn:function fn(){},
fr:function fr(){},
fb:function fb(){},
h8:function h8(){},
h9:function h9(){},
lq(a,b){var s=A.b5(7,null,!1,b.i("0?")),r=a==null?A.pg():a
return new A.ez(r,s,b.i("ez<0>"))},
ez:function ez(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
kI(a){return new A.z(a)},
z:function z(a){this.a=a},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dc:function dc(a,b){this.a=a
this.b=b},
kH(a,b,c,d,e,f,g,h){return new A.c5(h,b,f,a,g,d)},
mg(a,b){if(b.f)return!1
if(a.y)return!0
if(b.y)return!0
return!1},
eN(a,b,c,d,e,f,g,h,i,j){return new A.eM(i,a,h,j,b,e,f)},
nr(a,b,c){var s,r,q,p,o,n,m,l,k,j=null,i=$.mr(),h=c.v(5)
if(!(h>=0&&h<5))return A.b(i,h)
s=i[h]
h=s.f.$0()
r=new A.iO(new Uint8ClampedArray(4000))
q=s.d
p=s.a
o=s.c
n=A.kR(j,j,t.cZ,t.p)
n.U(0,B.aR)
m=A.c([],t.Q)
l=A.c([],t.dV)
s.r.$0()
k=s.e.$0()
return A.kH(new A.hF(h,r),new A.ef(q,q,1,0,0,0,0,new A.eo(n),o,m,l,new A.et(p)),1,j,s.z,!1,!1,k)},
c5:function c5(a,b,c,d,e,f){var _=this
_.a=100
_.c=a
_.d=b
_.f=c
_.x=d
_.y=e
_.ch=f},
hG:function hG(a){this.a=a},
hF:function hF(a,b){this.a=a
this.b=b
this.c=null},
aq:function aq(a,b){this.a=a
this.b=b},
a9:function a9(){},
bn:function bn(){},
bo:function bo(){},
ca:function ca(){},
bl:function bl(){},
f2:function f2(){this.b=!1},
de:function de(){this.a=null},
f3:function f3(a){this.a=a},
be:function be(){},
aL:function aL(a){this.a=a},
eM:function eM(a,b,c,d,e,f,g){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.z=g},
kx:function kx(){},
kv:function kv(){},
kw:function kw(){},
ks:function ks(){},
kq:function kq(){},
kr:function kr(){},
kA:function kA(){},
ky:function ky(){},
kz:function kz(){},
kD:function kD(){},
kB:function kB(){},
kC:function kC(){},
k7:function k7(){},
k5:function k5(){},
k6:function k6(){},
hW:function hW(){this.b=this.a=0},
aX:function aX(){},
d7:function d7(a,b){this.b=a
this.a=b},
eI:function eI(a,b){this.b=a
this.a=b},
p8(a,b,c){var s,r,q=b.f||b.a===0
if(q)return!1
s=b.d
if(s!=null&&s.b<=0){a.$1(new A.cR(b))
return!0}r=b.x
if(r!=null){a.$1(r.dl(b,c))
b.a=0
return!0}return!1},
ex:function ex(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
ik:function ik(a,b){this.a=a
this.b=b},
n5(a){switch(a){case B.c1:case B.av:case B.aw:case B.M:case B.c2:return!1
case B.N:case B.a2:case B.ax:return!0}},
kJ(a,b,c){var s,r,q
for(s=0,r=0;r<b;++r){switch(c){case B.ay:q=3
break
case B.O:q=4
break
case B.y:q=6
break
case B.a3:q=8
break
case B.az:q=12
break
case B.aA:q=20
break
default:q=null}s+=a.v(q)+1}return s},
e2(a,b,c,d,e,f){return new A.e1(f,c)},
n_(a,b,c,d,e,f,g,h,i,j,k,l,m){return new A.ef(h,c,g,e,m,k,i,d,a,b,j,f)},
nc(a,b){return new A.et(a)},
na(a,b){return new A.eo(a)},
bJ(a){switch(a){case B.a8:case B.a9:case B.ab:case B.E:case B.F:case B.G:case B.U:case B.V:case B.P:case B.Q:case B.R:case B.aa:case B.S:case B.D:case null:return!1
case B.r:case B.T:return!0}},
nf(a){switch(a){case B.a8:case B.a9:case B.ab:case B.E:case B.F:case B.G:case B.U:case B.V:case B.P:case B.Q:case B.R:case B.aa:case B.S:case B.D:case null:return!1
case B.r:case B.T:return!0}},
bj:function bj(a){this.b=a},
b0:function b0(a,b){this.b=a
this.c=b},
i0:function i0(){},
O:function O(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ey:function ey(a){this.b=a},
aN:function aN(a){this.b=a},
bi:function bi(a){this.b=a},
aA:function aA(a){this.b=a},
iN:function iN(){},
bh:function bh(){},
bE:function bE(a){this.b=a},
R:function R(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.y=e
_.z=f},
cG:function cG(a){this.b=a},
cH:function cH(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.c=b
_.f=c
_.r=d},
c6:function c6(a){this.b=a},
a8:function a8(a){this.c=a},
e1:function e1(a,b){this.a=a
this.b=b},
ef:function ef(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
e7:function e7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
et:function et(a){this.a=a},
eo:function eo(a){this.b=a},
eY:function eY(a){this.b=a},
bF:function bF(a){this.b=a},
ej:function ej(){},
co:function co(a){this.b=a},
c9:function c9(a){this.b=a},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(a){this.b=a},
a3:function a3(a){this.b=a},
bN:function bN(a){this.b=a},
bA:function bA(a){this.b=a},
bp:function bp(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
eG:function eG(a){this.b=a},
k:function k(a,b){this.a=a
this.b=b},
iF:function iF(a){this.b=a},
U:function U(a){this.b=a},
iJ:function iJ(a,b){this.a=a
this.b=b},
iO:function iO(a){this.a=a},
cg:function cg(a){this.b=a},
i9:function i9(a){var _=this
_.a=a
_.b=!1
_.c=null
_.d=0},
p7(a,b,c,d){var s,r,q,p,o,n,m,l=A.c([],t.g),k=A.iE(t.j)
for(s=b.b,r=d.c,q=d.a,p=40;p>=0;){o=new A.k(c.v(100),c.v(40))
n=s.h(0,o)
if(!(n.c===B.b||A.X(A.bJ(n.f)))&&!k.G(0,o)){m=A.nr(r,q,c)
if(m==null)break
a.bF(m,o,b)
B.a.l(l,m)
k.l(0,o);--p}}return l},
n9(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k="a_position",j=5126,i="u_resolution",h="u_offset",g=A.c([],t.c6),f=A.oa(),e=t.G,d=t.o
f=A.b_(A.c([new A.V(k,35044,j,2,f),new A.V("a_color",35048,j,4,new Float32Array(192e3))],e),u.l,A.c([new A.v(i,B.f),new A.v(h,B.f)],d),u.q)
s=$.mq()
r=A.b_(A.c([new A.V(k,35048,j,2,new Float32Array(8000))],e),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.c([new A.v(i,B.f),new A.v(h,B.f)],d),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
q=A.nG(window)
d=A.b_(A.c([new A.V(k,35044,j,2,new Float32Array(A.cx(B.v)))],e),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\n\nout vec4 outColor;\n\nvoid main() {\n  vec2 d = vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y);\n  if (abs(d.x - u_mouse.x) > 24.0 || abs(d.y - u_mouse.y) > 36.0) {\n    discard;\n    return;\n  }\n  outColor = vec4(1, 0, 0, 0.2);\n}\n",A.c([new A.v("u_mouse",B.f),new A.v(i,B.f)],d),u.h)
e=new Uint8Array(4000)
p=t.j
o=A.c([],t.dG)
n=new Uint8Array(16e6)
m=new Uint8Array(4000)
l=new Uint8Array(4000)
g=new A.ic(c,a2,a,b,a1,g,a0,new A.f8(),new A.ig(n,m,l,new Uint8Array(64e6),new A.k(0,0),A.b3(p,t.dR),o),new A.hW(),new A.jj(f,s),new A.i9(r),q,new A.j8(d),new A.hG(new A.i6(e,A.b3(p,t.S))),c.createFramebuffer(),new A.j4())
g.cr(a,b,c,a0,a1,a2)
return g},
en:function en(){this.b=this.a=!1},
ic:function ic(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=$
_.ch=k
_.cx=l
_.db=_.cy=$
_.dx=m
_.dy=$
_.fr=n
_.fx=o
_.fy=$
_.go=null
_.id=p
_.k2=_.k1=0
_.k4=q},
id:function id(a){this.a=a},
mm(a,b,c){return a*c+(1-c)*b},
ag:function ag(){},
bg:function bg(a,b,c){var _=this
_.a=a
_.d=0
_.e=null
_.f=!0
_.r=b
_.x=c},
Q:function Q(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.f=d
_.r=e
_.x=f},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b){this.a=a
this.b=b},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cn:function cn(){},
eF:function eF(a){this.a=a},
dk:function dk(a,b){this.a=a
this.b=b},
es:function es(a){this.a=a},
ii:function ii(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
e6:function e6(a,b){this.b=a
this.c=b},
hP:function hP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hQ:function hQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hO:function hO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cR:function cR(a){this.a=a},
ih:function ih(a,b){this.a=a
this.b=b},
ig:function ig(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hj:function hj(a){this.a=a
this.b=!0},
jq:function jq(a,b,c){this.a=a
this.c=b
this.d=c},
bC:function bC(a){this.b=a},
j1:function j1(a,b){this.a=a
this.b=b},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
mf(a){var s=a.f
if(s==null)return A.c([],t.Y)
if(s===B.r)return A.c([new A.cY(new A.dk(!1,a.b))],t.Y)
if(s===B.E)return A.c([new A.cY(new A.dk(!0,a.b))],t.Y)
return A.c([],t.Y)},
cY:function cY(a){this.b=a},
nm(a){var s=u.p,r="a_position",q="u_resolution",p="u_block_size",o="u_player_visible_texture",n="u_offset",m=t.G,l=t.o
return new A.eH(A.b_(A.c([new A.V(r,35044,5126,2,new Float32Array(A.cx(B.v)))],m),u.k,A.c([new A.v(q,B.f),new A.v("u_source_position",B.f),new A.v(p,B.f),new A.v("u_source_color",B.ah),new A.v("u_source_strength",B.w),new A.v("u_time",B.w),new A.v("u_visible_texture",B.n),new A.v(o,B.n),new A.v(n,B.f)],l),s),A.b_(A.c([new A.V(r,35044,5126,2,new Float32Array(A.cx(B.v)))],m),u.f,A.c([new A.v("u_light_texture",B.n),new A.v("u_game_world_texture",B.n),new A.v(o,B.n),new A.v(q,B.f),new A.v(p,B.f),new A.v(n,B.f)],l),s),a,A.c([],t.cd))},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1
_.x=d
_.z=_.y=0},
n7(a){switch(a){case B.z:return B.C
case B.A:return B.B
case B.B:return B.A
case B.C:return B.z
case B.j:return B.l
case B.k:return B.m
case B.l:return B.j
case B.m:return B.k}},
n6(a){switch(a){case B.j:return B.aK
case B.k:return B.aJ
case B.l:return B.aK
case B.m:return B.aJ
default:return B.cl}},
Y(a,b){switch(b){case B.j:return a.C(0,new A.k(0,-1))
case B.A:return a.C(0,new A.k(1,-1))
case B.k:return a.C(0,new A.k(1,0))
case B.z:return a.C(0,new A.k(1,1))
case B.l:return a.C(0,new A.k(0,1))
case B.B:return a.C(0,new A.k(-1,1))
case B.m:return a.C(0,new A.k(-1,0))
case B.C:return a.C(0,new A.k(-1,-1))}},
ma(a,b,c){var s
switch(c){case B.bB:return!1
case B.bC:return a.c===B.b||A.X(A.bJ(a.f))
case B.bD:s=a.f
if(s===B.r)return!1
return a.c===B.b||A.X(A.bJ(s))
case B.a1:return a.c===B.b||A.X(A.bJ(a.f))||b.bI(a.b)!=null}},
bS:function bS(a,b,c){var _=this
_.b=_.a=null
_.d=a
_.e=b
_.f=c},
aD:function aD(a){this.b=a},
iY:function iY(){},
i6:function i6(a,b){this.a=a
this.b=b},
j8:function j8(a){this.a=a},
b_(a,b,c,d){var s=t.N
return new A.ip(d,b,c,a,A.b3(s,t.gz),A.b3(s,t.f2))},
m_(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.N(a.getShaderParameter(s,35713),!0)){A.hE(J.c4(a.getShaderInfoLog(s)))
throw A.e(A.aR("Invalid Shader"))}return s},
V:function V(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v:function v(a,b){this.a=a
this.b=b},
bW:function bW(a){this.b=a},
fy:function fy(a,b){this.a=a
this.c=b},
ho:function ho(a,b){this.a=a
this.b=b},
ip:function ip(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
j4:function j4(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
j5:function j5(){},
f8:function f8(){},
oB(a,b){var s=t.d8
s.a(a)
s.a(b)
return B.d.P(a.r,b.r)},
p3(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.M($.H,t.du),p=J.mU(r),o=p.$ti,n=o.i("~(1)?").a(new A.kg(a,s,r,new A.bX(q,t.f0)))
t.Z.a(null)
A.c_(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
nB(a,b){var s=A.c([new A.v("u_texture",B.n),new A.v("u_resolution",B.f),new A.v("u_offset",B.f)],t.o),r=new Float32Array(12e3),q=new Float32Array(12e3)
s=new A.ja(A.b_(A.c([new A.V("a_position",35048,5126,2,r),new A.V("a_texcoord",35048,5126,2,q),new A.V("a_color",35048,5126,4,new Float32Array(24e3))],t.G),"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n}\n",s,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n}\n"),A.lq(A.pb(),t.d8),b)
s.ct(a,b)
return s},
nA(a,b,c,d,e){return new A.W(c,d,a,b,e)},
ls(a,b,c){var s,r,q,p=null
switch(a){case B.a8:case null:return p
case B.a9:s=p
r=3
q=16
break
case B.ab:s=p
r=2
q=16
break
case B.r:s=p
r=6
q=11
break
case B.E:s=p
r=15
q=5
break
case B.T:s=p
r=5
q=11
break
case B.F:s=new A.z(4286578432)
r=2
q=2
break
case B.G:s=new A.z(4294967142)
r=12
q=7
break
case B.U:s=p
r=1
q=13
break
case B.V:s=p
r=1
q=13
break
case B.P:s=p
r=6
q=0
break
case B.Q:s=p
r=0
q=15
break
case B.R:s=p
r=12
q=16
break
case B.aa:s=p
r=0
q=16
break
case B.S:s=p
r=13
q=3
break
case B.D:s=p
r=6
q=16
break
default:s=p
r=0
q=0}return new A.W(r,q,b,c,s)},
kg:function kg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ja:function ja(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c
_.e=!1},
jb:function jb(a){this.a=a},
W:function W(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=0},
oa(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
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
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a,b){var _=this
_.a=a
_.b=null
_.c=!1
_.d=b},
jk:function jk(a,b){this.a=a
this.b=b},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=d},
o9(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
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
ie:function ie(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
oN(a){var s,r=A.kS(4000,new A.k4(a),t.W),q=A.c([],t.g)
for(s=0;s<4000;++s);return new A.jc(q,new A.T(100,40,r,t.L),a.b)},
mc(a){var s,r,q,p,o
for(s=a.b,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.k(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.X(A.bJ(o.f))))return p}throw A.e("Solid")},
jv:function jv(a,b){this.a=a
this.d=b},
k4:function k4(a){this.a=a},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a){this.a=a},
i_:function i_(a){this.a=a},
im:function im(){},
io:function io(a){this.a=a},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
ku(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.K))break
q=A.Y(q,b);++p}return p},
c2(a,b,c){var s=A.Y(a,b)
if(c.e.h(0,s)===B.K)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
cr(a,b){return new A.dn(a,b)},
e_(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.c([],t.D)
for(s=a2.length,r=a1.a,q=J.hC(r),p=t.q,o=t.n,n=0;n<a2.length;a2.length===s||(0,A.C)(a2),++n){m=a2[n]
l=A.c([],p)
k=A.c([],o)
for(j=q.gB(r),i=0;j.n();){h=j.gp(j)
g=m.a.Z(h,a3)
if(g<1000){B.a.l(l,h)
B.a.l(k,g)
i+=g}}if(l.length===0){B.a.l(a0,m)
continue}for(f=0,e=0;e<k.length;++e,f=d){d=k[e]/i+f
B.a.j(k,e,d)}c=$.mD().ag()
for(j=k.length,h=l.length,b=B.I,a=-1,e=0;e<j;++e,a=g){g=k[e]
if(c>=a&&c<g){if(!(e<h))return A.b(l,e)
b=l[e]}}j=0===b.a&&0===b.b
if(j){B.a.l(a0,m)
continue}m.dJ(b,a3)}for(s=q.gB(r),r=a3.e,q=a1.c;s.n();){p=s.gp(s)
if(r.h(0,p)===B.X||r.h(0,p)===B.Y)B.a.l(q,p)}return a0},
ml(a,b){var s,r,q,p,o,n,m,l,k
B.a.ay(a,new A.kt())
if(0>=a.length)return A.b(a,0)
A.e_(a[0],$.mM(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.C)(s),++p)q.j(0,s[p],B.aP)
for(s=A.lH(a,1,null,A.aB(a).c),r=s.$ti,s=new A.b4(s,s.gm(s),r.i("b4<aE.E>")),r=r.i("aE.E"),o=t.h0,n=2;s.n();){m=r.a(s.d)
l=m.a
k=J.aw(l)
if(k.gm(l)<30){if(n>0){l=A.np($.kG(),!0,o)
l.push($.lh())}else l=$.kG()
if(!B.a.G(A.e_(m,l,b),$.lh()))--n}else if(k.gm(l)<60)A.e_(m,$.mH(),b)
else if(k.gm(l)<100)A.e_(m,$.mG(),b)
else A.e_(m,$.mF(),b)}if(n===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.C)(s),++p)q.j(0,s[p],B.aQ)}},
aM:function aM(){},
ft:function ft(){},
cI:function cI(a){this.$ti=a},
dd:function dd(a){this.$ti=a},
ee:function ee(){},
e3:function e3(){},
ek:function ek(){},
cF:function cF(a){this.a=a},
dn:function dn(a,b){this.a=a
this.b=b},
kp:function kp(){},
kl:function kl(){},
kn:function kn(){},
kk:function kk(){},
km:function km(){},
ko:function ko(){},
kj:function kj(){},
kt:function kt(){},
n8(a){var s=t.q
return new A.aa(a,A.c([],s),A.c([],s),A.ib(a))},
ib(a){var s,r,q=J.aw(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gm(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.k(B.c.E(p/q.gm(a)),B.c.E(o/q.gm(a)))},
cX:function cX(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
hT:function hT(a,b){this.a=a
this.b=b},
hU:function hU(){},
dl:function dl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ia:function ia(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
ix:function ix(a,b){this.a=a
this.b=b},
iV:function iV(){},
is:function is(a){this.a=a},
it:function it(){},
iu:function iu(){},
iv:function iv(){},
iw:function iw(){},
iZ:function iZ(){},
bk:function bk(a){this.b=a},
dg:function dg(a){this.b=a},
j7:function j7(a,b){this.b=a
this.a=b},
df:function df(a,b){this.a=a
this.b=b},
jg:function jg(a){this.a=a},
jh:function jh(){},
ji:function ji(a){this.a=a},
nG(a){var s=new A.jr(A.lF(t.O),A.lF(t.dg))
s.cu(a)
return s},
jr:function jr(a,b){this.a=a
this.b=b},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
aj:function aj(a){this.b=a},
hI:function hI(a,b){this.a=a
this.b=$
this.c=b},
hJ:function hJ(a){this.a=a},
hK:function hK(a,b){this.a=a
this.b=b},
hL:function hL(a,b){this.a=a
this.b=b},
nq(){var s=new A.iR()
s.cs()
return s},
iR:function iR(){this.a=$},
iS:function iS(a){this.a=a},
lc(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
pd(a){return A.Z(A.lw(a))},
at(a,b){if(a===$)throw A.e(new A.d1("Field '"+b+"' has not been initialized."))
return a},
dV(a,b){if(a!==$)throw A.e(A.lw(b))},
lZ(a){var s,r,q
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.l4(a))return a
s=Object.getPrototypeOf(a)
if(s===Object.prototype||s===null)return A.bc(a)
if(Array.isArray(a)){r=[]
for(q=0;q<a.length;++q)r.push(A.lZ(a[q]))
return r}return a},
bc(a){var s,r,q,p,o
if(a==null)return null
s=A.b3(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.C)(r),++p){o=r[p]
s.j(0,o,A.lZ(a[o]))}return s},
oT(a,b){return J.mS(t.d_.a(a),b)},
p0(a,b,c){var s,r,q=a.x
if(q!=null){if(b===q.c)return!0
s=a.u()
r=b.u()
if(s==null||r==null)return!1
return c.y.M(s).h(0,r)}return!0},
pa(a){A.aI(a)
$.le().I(a,$.lf())
B.b8.c5(window,A.mh())},
p5(){var s,r,q
new A.hI(A.nq(),A.c(["spell","stats","inventory"],t.s)).R($.lj())
s=$.le()
r=t.w
r=new A.ex(s,A.c([],r),A.c([],r),A.c([],t.f_),A.c([],t.eU))
q=s.dx.a
new A.br(q,A.A(q).i("br<1>")).c_(r.gdw())
r=t.x.a(r.gbx())
B.a.l(s.f,r)
B.b8.c5(window,A.mh())}},J={
lb(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kb(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.la==null){A.oY()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.e(A.lL("Return interceptor for "+A.B(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jP
if(o==null)o=$.jP=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.p4(a)
if(p!=null)return p
if(typeof a=="function")return B.cd
s=Object.getPrototypeOf(a)
if(s==null)return B.aV
if(s===Object.prototype)return B.aV
if(typeof q=="function"){o=$.jP
if(o==null)o=$.jP=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.ai,enumerable:false,writable:true,configurable:true})
return B.ai}return B.ai},
nj(a,b){if(a<0||a>4294967295)throw A.e(A.ck(a,0,4294967295,"length",null))
return J.nl(new Array(a),b)},
nk(a,b){if(a<0)throw A.e(A.cJ("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("t<0>"))},
nl(a,b){return J.lv(A.c(a,b.i("t<0>")),b)},
lv(a,b){a.fixed$length=Array
return a},
cE(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d_.prototype
return J.eC.prototype}if(typeof a=="string")return J.bK.prototype
if(a==null)return J.d0.prototype
if(typeof a=="boolean")return J.cZ.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof A.u)return a
return J.kb(a)},
aw(a){if(typeof a=="string")return J.bK.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof A.u)return a
return J.kb(a)},
hC(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof A.u)return a
return J.kb(a)},
oU(a){if(typeof a=="number")return J.ce.prototype
if(typeof a=="string")return J.bK.prototype
if(a==null)return a
if(!(a instanceof A.u))return J.cp.prototype
return a},
hD(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof A.u)return a
return J.kb(a)},
N(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cE(a).F(a,b)},
lk(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.p1(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aw(a).h(a,b)},
mR(a,b,c,d){return J.hD(a).dj(a,b,c,d)},
mS(a,b){return J.oU(a).P(a,b)},
ll(a,b){return J.hC(a).q(a,b)},
mT(a,b){return J.hC(a).A(a,b)},
c3(a){return J.cE(a).gt(a)},
aU(a){return J.hC(a).gB(a)},
a7(a){return J.aw(a).gm(a)},
mU(a){return J.hD(a).gaX(a)},
mV(a,b,c){return J.hC(a).c0(a,b,c)},
mW(a,b){return J.hD(a).sdX(a,b)},
c4(a){return J.cE(a).k(a)},
a:function a(){},
cZ:function cZ(){},
d0:function d0(){},
bL:function bL(){},
eZ:function eZ(){},
cp:function cp(){},
b1:function b1(){},
t:function t(a){this.$ti=a},
iy:function iy(a){this.$ti=a},
cK:function cK(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ce:function ce(){},
d_:function d_(){},
eC:function eC(){},
bK:function bK(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.kP.prototype={}
J.a.prototype={
F(a,b){return a===b},
gt(a){return A.bT(a)},
k(a){return"Instance of '"+A.j0(a)+"'"}}
J.cZ.prototype={
k(a){return String(a)},
cg(a,b){return b||a},
gt(a){return a?519018:218159},
$iJ:1}
J.d0.prototype={
F(a,b){return null==b},
k(a){return"null"},
gt(a){return 0},
$iS:1}
J.bL.prototype={
gt(a){return 0},
k(a){return String(a)}}
J.eZ.prototype={}
J.cp.prototype={}
J.b1.prototype={
k(a){var s=a[$.mo()]
if(s==null)return this.cn(a)
return"JavaScript function for "+J.c4(s)},
$ibG:1}
J.t.prototype={
l(a,b){A.aB(a).c.a(b)
if(!!a.fixed$length)A.Z(A.y("add"))
a.push(b)},
c4(a,b){var s
if(!!a.fixed$length)A.Z(A.y("removeAt"))
s=a.length
if(b>=s)throw A.e(A.lz(b,null))
return a.splice(b,1)[0]},
L(a,b){var s
if(!!a.fixed$length)A.Z(A.y("remove"))
for(s=0;s<a.length;++s)if(J.N(a[s],b)){a.splice(s,1)
return!0}return!1},
U(a,b){A.aB(a).i("i<1>").a(b)
if(!!a.fixed$length)A.Z(A.y("addAll"))
this.cz(a,b)
return},
cz(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.e(A.cO(a))
for(r=0;r<s;++r)a.push(b[r])},
c0(a,b,c){var s=A.aB(a)
return new A.d6(a,s.w(c).i("1(2)").a(b),s.i("@<1>").w(c).i("d6<1,2>"))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
gcl(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.e(A.ng())
throw A.e(A.ni())},
b9(a,b,c,d){var s,r,q,p
A.aB(a).i("i<1>").a(d)
if(!!a.immutable$list)A.Z(A.y("setRange"))
A.kV(b,c,a.length)
s=c-b
if(s===0)return
A.j3(0,"skipCount")
r=d
q=J.aw(r)
if(s>q.gm(r))throw A.e(A.nh())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
ay(a,b){var s=A.aB(a)
s.i("f(1,1)?").a(b)
if(!!a.immutable$list)A.Z(A.y("sort"))
A.ny(a,b,s.c)},
ck(a){var s,r,q,p
if(!!a.immutable$list)A.Z(A.y("shuffle"))
s=a.length
for(;s>1;){r=B.q.v(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
dC(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.N(a[s],b))return s}return-1},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.N(a[s],b))return!0
return!1},
k(a){return A.kO(a,"[","]")},
gB(a){return new J.cK(a,a.length,A.aB(a).i("cK<1>"))},
gt(a){return A.bT(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.Z(A.y("set length"))
if(b>a.length)A.aB(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.e(A.cD(a,b))
return a[b]},
j(a,b,c){A.aB(a).c.a(c)
if(!!a.immutable$list)A.Z(A.y("indexed set"))
if(!(b>=0&&b<a.length))throw A.e(A.cD(a,b))
a[b]=c},
$im:1,
$ii:1,
$in:1}
J.iy.prototype={}
J.cK.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.e(A.C(q))
s=r.c
if(s>=p){r.sbo(null)
return!1}r.sbo(q[s]);++r.c
return!0},
sbo(a){this.d=this.$ti.i("1?").a(a)},
$ia1:1}
J.ce.prototype={
P(a,b){var s
A.aI(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gat(b)
if(this.gat(a)===s)return 0
if(this.gat(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gat(a){return a===0?1/a<0:a<0},
ah(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.e(A.y(""+a+".toInt()"))},
bN(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.e(A.y(""+a+".ceil()"))},
ad(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.e(A.y(""+a+".floor()"))},
E(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.e(A.y(""+a+".round()"))},
av(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
dq(a,b,c){if(B.d.P(b,c)>0)throw A.e(A.m8(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
c8(a,b){var s
if(b>20)throw A.e(A.ck(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gat(a))return"-"+s
return s},
dV(a,b){var s,r,q,p
if(b<2||b>36)throw A.e(A.ck(b,2,36,"radix",null))
s=a.toString(b)
if(B.H.dr(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.Z(A.y("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.H.b8("0",p)},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
cf(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bd(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bB(a,b)},
H(a,b){return(a|0)===a?a/b|0:this.bB(a,b)},
bB(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.e(A.y("Result of truncating division is "+A.B(s)+": "+A.B(a)+" ~/ "+b))},
d4(a,b){var s
if(a>0)s=this.d3(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
d3(a,b){return b>31?0:a>>>b},
$iaf:1,
$iG:1,
$iI:1}
J.d_.prototype={$if:1}
J.eC.prototype={}
J.bK.prototype={
dr(a,b){if(b<0)throw A.e(A.cD(a,b))
if(b>=a.length)A.Z(A.cD(a,b))
return a.charCodeAt(b)},
C(a,b){return a+b},
b8(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.by)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
c3(a,b,c){var s=b-a.length
if(s<=0)return a
return this.b8(c,s)+a},
P(a,b){var s
A.a5(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
k(a){return a},
gt(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return a.length},
h(a,b){if(b>=a.length)throw A.e(A.cD(a,b))
return a[b]},
$iaf:1,
$ir:1}
A.d1.prototype={
k(a){var s="LateInitializationError: "+this.a
return s}}
A.j9.prototype={}
A.m.prototype={}
A.aE.prototype={
gB(a){var s=this
return new A.b4(s,s.gm(s),A.A(s).i("b4<aE.E>"))}}
A.dj.prototype={
gcN(){var s=J.a7(this.a),r=this.c
if(r==null||r>s)return s
return r},
gd5(){var s=J.a7(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.a7(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.a1()
return s-q},
q(a,b){var s=this,r=s.gd5()+b
if(b<0||r>=s.gcN())throw A.e(A.K(b,s,"index",null,null))
return J.ll(s.a,r)}}
A.b4.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.aw(q),o=p.gm(q)
if(r.b!==o)throw A.e(A.cO(q))
s=r.c
if(s>=o){r.sab(null)
return!1}r.sab(p.q(q,s));++r.c
return!0},
sab(a){this.d=this.$ti.i("1?").a(a)},
$ia1:1}
A.bO.prototype={
gB(a){var s=A.A(this)
return new A.d5(J.aU(this.a),this.b,s.i("@<1>").w(s.Q[1]).i("d5<1,2>"))},
gm(a){return J.a7(this.a)}}
A.cU.prototype={$im:1}
A.d5.prototype={
n(){var s=this,r=s.b
if(r.n()){s.sab(s.c.$1(r.gp(r)))
return!0}s.sab(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
sab(a){this.a=this.$ti.i("2?").a(a)}}
A.d6.prototype={
gm(a){return J.a7(this.a)},
q(a,b){return this.b.$1(J.ll(this.a,b))}}
A.aH.prototype={
gB(a){return new A.dm(J.aU(this.a),this.b,this.$ti.i("dm<1>"))}}
A.dm.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.X(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.ab.prototype={}
A.cb.prototype={
k(a){return A.kT(this)},
$iF:1}
A.cP.prototype={
gm(a){return this.a},
ar(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.ar(0,b))return null
return this.b[A.a5(b)]},
A(a,b){var s,r,q,p,o,n=this.$ti
n.i("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.a5(s[p])
b.$2(o,n.a(q[o]))}}}
A.aZ.prototype={
aH(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.ne(r)
o=A.kR(A.ot(),q,r,s.Q[1])
A.mb(p.a,o)
p.$map=o}return o},
h(a,b){return this.aH().h(0,b)},
A(a,b){this.$ti.i("~(1,2)").a(b)
this.aH().A(0,b)},
gm(a){var s=this.aH()
return s.gm(s)}}
A.il.prototype={
$1(a){return this.a.b(a)},
$S:27}
A.jn.prototype={
S(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.db.prototype={
k(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.eD.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.fp.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.iW.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.cV.prototype={}
A.dE.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaG:1}
A.bD.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.mn(r==null?"unknown":r)+"'"},
$ibG:1,
ge3(){return this},
$C:"$1",
$R:1,
$D:null}
A.eg.prototype={$C:"$0",$R:0}
A.eh.prototype={$C:"$2",$R:2}
A.fg.prototype={}
A.fc.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.mn(s)+"'"}}
A.c7.prototype={
F(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.c7))return!1
return this.$_target===b.$_target&&this.a===b.a},
gt(a){return(A.ki(this.a)^A.bT(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.j0(t.K.a(this.a))+"'")}}
A.f5.prototype={
k(a){return"RuntimeError: "+this.a}}
A.fu.prototype={
k(a){return"Assertion failed: "+A.ep(this.a)}}
A.ak.prototype={
gm(a){return this.a},
gW(a){return new A.d2(this,A.A(this).i("d2<1>"))},
gb5(a){var s=this,r=A.A(s)
return A.lx(s.gW(s),new A.iA(s),r.c,r.Q[1])},
ar(a,b){var s=this.bV(b)
return s},
bV(a){var s=this,r=s.d
if(r==null)return!1
return s.af(s.aI(r,s.ae(a)),a)>=0},
U(a,b){A.A(this).i("F<1,2>").a(b).A(0,new A.iz(this))},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.aJ(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.aJ(p,b)
q=r==null?n:r.b
return q}else return o.bW(b)},
bW(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.aI(p,q.ae(a))
r=q.af(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.A(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.bg(s==null?q.b=q.aM():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.bg(r==null?q.c=q.aM():r,b,c)}else q.bX(b,c)},
bX(a,b){var s,r,q,p,o=this,n=A.A(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.aM()
r=o.ae(a)
q=o.aI(s,r)
if(q==null)o.aQ(s,r,[o.aN(a,b)])
else{p=o.af(q,a)
if(p>=0)q[p].b=b
else q.push(o.aN(a,b))}},
A(a,b){var s,r,q=this
A.A(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.e(A.cO(q))
s=s.c}},
bg(a,b,c){var s,r=this,q=A.A(r)
q.c.a(b)
q.Q[1].a(c)
s=r.aJ(a,b)
if(s==null)r.aQ(a,b,r.aN(b,c))
else s.b=c},
aN(a,b){var s=this,r=A.A(s),q=new A.iC(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&67108863
return q},
ae(a){return J.c3(a)&0x3ffffff},
af(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.N(a[r].a,b))return r
return-1},
k(a){return A.kT(this)},
aJ(a,b){return a[b]},
aI(a,b){return a[b]},
aQ(a,b,c){a[b]=c},
cL(a,b){delete a[b]},
aM(){var s="<non-identifier-key>",r=Object.create(null)
this.aQ(r,s,r)
this.cL(r,s)
return r},
$iiB:1}
A.iA.prototype={
$1(a){var s=this.a,r=A.A(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.A(this.a).i("2(1)")}}
A.iz.prototype={
$2(a,b){var s=this.a,r=A.A(s)
s.j(0,r.c.a(a),r.Q[1].a(b))},
$S(){return A.A(this.a).i("~(1,2)")}}
A.iC.prototype={}
A.d2.prototype={
gm(a){return this.a.a},
gB(a){var s=this.a,r=new A.d3(s,s.r,this.$ti.i("d3<1>"))
r.c=s.e
return r}}
A.d3.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.cO(q))
s=r.c
if(s==null){r.sbe(null)
return!1}else{r.sbe(s.a)
r.c=s.c
return!0}},
sbe(a){this.d=this.$ti.i("1?").a(a)},
$ia1:1}
A.kc.prototype={
$1(a){return this.a(a)},
$S:34}
A.kd.prototype={
$2(a,b){return this.a(a,b)},
$S:18}
A.ke.prototype={
$1(a){return this.a(A.a5(a))},
$S:21}
A.bR.prototype={$ias:1}
A.ch.prototype={
gm(a){return a.length},
$iw:1}
A.bQ.prototype={
h(a,b){A.bb(b,a,a.length)
return a[b]},
j(a,b,c){A.l2(c)
A.bb(b,a,a.length)
a[b]=c},
$im:1,
$ii:1,
$in:1}
A.d9.prototype={
j(a,b,c){A.cw(c)
A.bb(b,a,a.length)
a[b]=c},
$im:1,
$ii:1,
$in:1}
A.d8.prototype={$ikN:1}
A.eO.prototype={
h(a,b){A.bb(b,a,a.length)
return a[b]}}
A.eP.prototype={
h(a,b){A.bb(b,a,a.length)
return a[b]}}
A.eQ.prototype={
h(a,b){A.bb(b,a,a.length)
return a[b]}}
A.eR.prototype={
h(a,b){A.bb(b,a,a.length)
return a[b]}}
A.eS.prototype={
h(a,b){A.bb(b,a,a.length)
return a[b]}}
A.ci.prototype={
gm(a){return a.length},
h(a,b){A.bb(b,a,a.length)
return a[b]},
$inE:1}
A.eT.prototype={
gm(a){return a.length},
h(a,b){A.bb(b,a,a.length)
return a[b]},
$inF:1}
A.dx.prototype={}
A.dy.prototype={}
A.dz.prototype={}
A.dA.prototype={}
A.aF.prototype={
i(a){return A.jY(v.typeUniverse,this,a)},
w(a){return A.o1(v.typeUniverse,this,a)}}
A.fM.prototype={}
A.dK.prototype={
k(a){return A.a6(this.a,null)},
$ilJ:1}
A.fJ.prototype={
k(a){return this.a}}
A.dL.prototype={$ibq:1}
A.jx.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:15}
A.jw.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:23}
A.jy.prototype={
$0(){this.a.$0()},
$S:8}
A.jz.prototype={
$0(){this.a.$0()},
$S:8}
A.dJ.prototype={
cv(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.cC(new A.jX(this,b),0),a)
else throw A.e(A.y("`setTimeout()` not found."))},
cw(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.cC(new A.jW(this,a,Date.now(),b),0),a)
else throw A.e(A.y("Periodic timer."))},
dn(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.e(A.y("Canceling a timer."))},
$ifj:1}
A.jX.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.jW.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.d.bd(s,o)}q.c=p
r.d.$1(q)},
$S:8}
A.fv.prototype={
aq(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.bh(b)
else{s=r.a
if(q.i("aO<1>").b(b))s.bk(b)
else s.aD(q.c.a(b))}},
bP(a,b){var s=this.a
if(this.b)s.a8(a,b)
else s.bi(a,b)}}
A.k_.prototype={
$1(a){return this.a.$2(0,a)},
$S:45}
A.k0.prototype={
$2(a,b){this.a.$2(1,new A.cV(a,t.k.a(b)))},
$S:47}
A.k3.prototype={
$2(a,b){this.a(A.cw(a),b)},
$S:24}
A.cM.prototype={
k(a){return A.B(this.a)},
$iE:1,
gaj(){return this.b}}
A.fA.prototype={
bP(a,b){var s
A.k8(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.e(A.aR("Future already completed"))
s.bi(a,b)}}
A.bX.prototype={
aq(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.e(A.aR("Future already completed"))
s.bh(r.i("1/").a(b))},
ds(a){return this.aq(a,null)}}
A.c0.prototype={
dF(a){if((this.c&15)!==6)return!0
return this.b.b.b_(t.al.a(this.d),a.a,t.cJ,t.K)},
dA(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.dR(q,m,a.b,o,n,t.k)
else p=l.b_(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.eK.b(A.bz(s))){if((r.c&1)!==0)throw A.e(A.cJ("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.cJ("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.M.prototype={
b1(a,b,c){var s,r,q,p=this.$ti
p.w(c).i("1/(2)").a(a)
s=$.H
if(s===B.o){if(b!=null&&!t.C.b(b)&&!t.y.b(b))throw A.e(A.lm(b,"onError",u.c))}else{c.i("@<0/>").w(p.c).i("1(2)").a(a)
if(b!=null)b=A.ox(b,s)}r=new A.M(s,c.i("M<0>"))
q=b==null?1:3
this.az(new A.c0(r,q,a,b,p.i("@<1>").w(c).i("c0<1,2>")))
return r},
c7(a,b){return this.b1(a,null,b)},
bC(a,b,c){var s,r=this.$ti
r.w(c).i("1/(2)").a(a)
s=new A.M($.H,c.i("M<0>"))
this.az(new A.c0(s,19,a,b,r.i("@<1>").w(c).i("c0<1,2>")))
return s},
d1(a){this.a=this.a&1|16
this.c=a},
aB(a){this.a=a.a&30|this.a&1
this.c=a.c},
az(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.az(a)
return}r.aB(s)}A.cA(null,null,r.b,t.M.a(new A.jD(r,a)))}},
by(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.by(a)
return}m.aB(n)}l.a=m.ao(a)
A.cA(null,null,m.b,t.M.a(new A.jK(l,m)))}},
an(){var s=t.F.a(this.c)
this.c=null
return this.ao(s)},
ao(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cF(a){var s,r,q,p=this
p.a^=2
try{a.b1(new A.jG(p),new A.jH(p),t.P)}catch(q){s=A.bz(q)
r=A.bx(q)
A.mk(new A.jI(p,s,r))}},
aD(a){var s,r=this
r.$ti.c.a(a)
s=r.an()
r.a=8
r.c=a
A.cv(r,s)},
a8(a,b){var s
t.K.a(a)
t.k.a(b)
s=this.an()
this.d1(A.hN(a,b))
A.cv(this,s)},
bh(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aO<1>").b(a)){this.bk(a)
return}this.cD(s.c.a(a))},
cD(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.cA(null,null,s.b,t.M.a(new A.jF(s,a)))},
bk(a){var s=this,r=s.$ti
r.i("aO<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.cA(null,null,s.b,t.M.a(new A.jJ(s,a)))}else A.kX(a,s)
return}s.cF(a)},
bi(a,b){this.a^=2
A.cA(null,null,this.b,t.M.a(new A.jE(this,a,b)))},
$iaO:1}
A.jD.prototype={
$0(){A.cv(this.a,this.b)},
$S:0}
A.jK.prototype={
$0(){A.cv(this.b,this.a.a)},
$S:0}
A.jG.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.aD(p.$ti.c.a(a))}catch(q){s=A.bz(q)
r=A.bx(q)
p.a8(s,r)}},
$S:15}
A.jH.prototype={
$2(a,b){this.a.a8(t.K.a(a),t.k.a(b))},
$S:46}
A.jI.prototype={
$0(){this.a.a8(this.b,this.c)},
$S:0}
A.jF.prototype={
$0(){this.a.aD(this.b)},
$S:0}
A.jJ.prototype={
$0(){A.kX(this.b,this.a)},
$S:0}
A.jE.prototype={
$0(){this.a.a8(this.b,this.c)},
$S:0}
A.jN.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.dQ(t.fO.a(q.d),t.z)}catch(p){s=A.bz(p)
r=A.bx(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.hN(s,r)
o.b=!0
return}if(l instanceof A.M&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.f.b(l)){n=m.b.a
q=m.a
q.c=l.c7(new A.jO(n),t.z)
q.b=!1}},
$S:0}
A.jO.prototype={
$1(a){return this.a},
$S:20}
A.jM.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.b_(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bz(l)
r=A.bx(l)
q=this.a
q.c=A.hN(s,r)
q.b=!0}},
$S:0}
A.jL.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.dF(s)&&p.a.e!=null){p.c=p.a.dA(s)
p.b=!1}}catch(o){r=A.bz(o)
q=A.bx(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.hN(r,q)
n.b=!0}},
$S:0}
A.fw.prototype={}
A.bU.prototype={
gm(a){var s={},r=new A.M($.H,t.fJ)
s.a=0
this.aW(new A.je(s,this),!0,new A.jf(s,r),r.gcH())
return r}}
A.je.prototype={
$1(a){A.A(this.b).c.a(a);++this.a.a},
$S(){return A.A(this.b).i("~(1)")}}
A.jf.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.an()
r.c.a(q)
s.a=8
s.c=q
A.cv(s,p)},
$S:0}
A.b7.prototype={}
A.dF.prototype={
gcW(){var s,r=this
if((r.b&8)===0)return A.A(r).i("bu<1>?").a(r.a)
s=A.A(r)
return s.i("bu<1>?").a(s.i("hb<1>").a(r.a).gb6())},
cO(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.aT(A.A(q).i("aT<1>"))
return A.A(q).i("aT<1>").a(s)}r=A.A(q)
s=r.i("hb<1>").a(q.a).gb6()
return r.i("aT<1>").a(s)},
gd7(){var s=this.a
if((this.b&8)!==0)s=t.fv.a(s).gb6()
return A.A(this).i("cu<1>").a(s)},
cE(){if((this.b&4)!==0)return new A.b6("Cannot add event after closing")
return new A.b6("Cannot add event while adding a stream")},
l(a,b){var s,r=this,q=A.A(r)
q.c.a(b)
s=r.b
if(s>=4)throw A.e(r.cE())
if((s&1)!==0)r.aP(b)
else if((s&3)===0)r.cO().l(0,new A.bY(b,q.i("bY<1>")))},
d6(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=A.A(l)
k.i("~(1)?").a(a)
t.Z.a(c)
if((l.b&3)!==0)throw A.e(A.aR("Stream has already been listened to."))
s=$.H
r=d?1:0
t.a7.w(k.c).i("1(2)").a(a)
A.nL(s,b)
q=c==null?A.oL():c
p=t.M
p.a(q)
o=new A.cu(l,a,s,r,k.i("cu<1>"))
n=l.gcW()
r=l.b|=1
if((r&8)!==0){m=k.i("hb<1>").a(l.a)
m.sb6(o)
m.dO(0)}else l.a=o
o.d2(n)
k=p.a(new A.jV(l))
s=o.e
o.e=s|32
k.$0()
o.e&=4294967263
o.bl((s&4)!==0)
return o},
$ilE:1,
$ilR:1,
$ibZ:1}
A.jV.prototype={
$0(){A.l8(this.a.d)},
$S:0}
A.fx.prototype={
aP(a){var s=this.$ti
s.c.a(a)
this.gd7().cC(new A.bY(a,s.i("bY<1>")))}}
A.ct.prototype={}
A.br.prototype={
gt(a){return(A.bT(this.a)^892482866)>>>0},
F(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.br&&b.a===this.a}}
A.cu.prototype={
bv(){var s=this.x,r=A.A(s)
r.i("b7<1>").a(this)
if((s.b&8)!==0)r.i("hb<1>").a(s.a).e5(0)
A.l8(s.e)},
bw(){var s=this.x,r=A.A(s)
r.i("b7<1>").a(this)
if((s.b&8)!==0)r.i("hb<1>").a(s.a).dO(0)
A.l8(s.f)}}
A.dp.prototype={
d2(a){var s=this
A.A(s).i("bu<1>?").a(a)
if(a==null)return
s.saO(a)
if(a.c!=null){s.e|=64
a.ax(s)}},
bv(){},
bw(){},
cC(a){var s=this,r=A.A(s),q=r.i("aT<1>?").a(s.r)
if(q==null)q=new A.aT(r.i("aT<1>"))
s.saO(q)
q.l(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.ax(s)}},
aP(a){var s,r=this,q=A.A(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.c6(r.a,a,q)
r.e&=4294967263
r.bl((s&4)!==0)},
bl(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.saO(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.bv()
else q.bw()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.ax(q)},
saO(a){this.r=A.A(this).i("bu<1>?").a(a)},
$ib7:1,
$ibZ:1}
A.dG.prototype={
aW(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.d6(s.i("~(1)?").a(a),d,c,b===!0)},
c_(a){return this.aW(a,null,null,null)}}
A.fE.prototype={}
A.bY.prototype={}
A.bu.prototype={
ax(a){var s,r=this
r.$ti.i("bZ<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.mk(new A.jS(r,a))
r.a=1}}
A.jS.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("bZ<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.A(r).i("bZ<1>").a(s).aP(r.b)},
$S:0}
A.aT.prototype={
l(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.hc.prototype={}
A.dO.prototype={$ilM:1}
A.k2.prototype={
$0(){var s=t.K.a(A.e(this.a))
s.stack=this.b.k(0)
throw s},
$S:0}
A.h3.prototype={
dS(a){var s,r,q,p,o
t.M.a(a)
try{if(B.o===$.H){a.$0()
return}A.m3(null,null,this,a,t.H)}catch(q){s=A.bz(q)
r=A.bx(q)
p=t.K.a(s)
o=t.k.a(r)
A.hB(p,o)}},
c6(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.o===$.H){a.$1(b)
return}A.m4(null,null,this,a,b,t.H,c)}catch(q){s=A.bz(q)
r=A.bx(q)
p=t.K.a(s)
o=t.k.a(r)
A.hB(p,o)}},
bK(a){return new A.jT(this,t.M.a(a))},
bL(a,b){return new A.jU(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
dQ(a,b){b.i("0()").a(a)
if($.H===B.o)return a.$0()
return A.m3(null,null,this,a,b)},
b_(a,b,c,d){c.i("@<0>").w(d).i("1(2)").a(a)
d.a(b)
if($.H===B.o)return a.$1(b)
return A.m4(null,null,this,a,b,c,d)},
dR(a,b,c,d,e,f){d.i("@<0>").w(e).w(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.H===B.o)return a.$2(b,c)
return A.oy(null,null,this,a,b,c,d,e,f)},
aY(a,b,c,d){return b.i("@<0>").w(c).w(d).i("1(2,3)").a(a)}}
A.jT.prototype={
$0(){return this.a.dS(this.b)},
$S:0}
A.jU.prototype={
$1(a){var s=this.c
return this.a.c6(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.jR.prototype={
ae(a){return A.ki(a)&1073741823},
af(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.dt.prototype={
h(a,b){if(!A.X(this.z.$1(b)))return null
return this.cp(b)},
j(a,b,c){var s=this.$ti
this.cq(s.c.a(b),s.Q[1].a(c))},
ar(a,b){if(!A.X(this.z.$1(b)))return!1
return this.co(b)},
ae(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
af(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(A.X(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.jQ.prototype={
$1(a){return this.a.b(a)},
$S:22}
A.du.prototype={
gB(a){var s=this,r=new A.dv(s,s.r,s.$ti.i("dv<1>"))
r.c=s.e
return r},
gm(a){return this.a},
G(a,b){var s=this.cI(b)
return s},
cI(a){var s=this.d
if(s==null)return!1
return this.bq(s[a.gt(a)&1073741823],a)>=0},
l(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bm(s==null?q.b=A.kY():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bm(r==null?q.c=A.kY():r,b)}else return q.cG(0,b)},
cG(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.kY()
r=J.c3(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.aC(b)]
else{if(p.bq(q,b)>=0)return!1
q.push(p.aC(b))}return!0},
bm(a,b){this.$ti.c.a(b)
if(t.br.a(a[b])!=null)return!1
a[b]=this.aC(b)
return!0},
aC(a){var s=this,r=new A.fT(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
bq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.N(a[r].a,b))return r
return-1}}
A.fT.prototype={}
A.dv.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.e(A.cO(q))
else if(r==null){s.sbn(null)
return!1}else{s.sbn(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sbn(a){this.d=this.$ti.i("1?").a(a)},
$ia1:1}
A.iD.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:25}
A.h.prototype={
gB(a){return new A.b4(a,this.gm(a),A.aJ(a).i("b4<h.E>"))},
q(a,b){return this.h(a,b)},
du(a,b,c,d){var s,r=A.aJ(a)
d=r.i("h.E").a(r.i("h.E?").a(d))
A.kV(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
k(a){return A.kO(a,"[","]")}}
A.d4.prototype={}
A.iH.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.B(a)
r.a=s+": "
r.a+=A.B(b)},
$S:51}
A.x.prototype={
A(a,b){var s,r,q=A.aJ(a)
q.i("~(x.K,x.V)").a(b)
for(s=J.aU(this.gW(a)),q=q.i("x.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gas(a){return J.mV(this.gW(a),new A.iK(a),A.aJ(a).i("cf<x.K,x.V>"))},
gm(a){return J.a7(this.gW(a))},
k(a){return A.kT(a)},
$iF:1}
A.iK.prototype={
$1(a){var s,r=this.a,q=A.aJ(r)
q.i("x.K").a(a)
s=q.i("x.V")
return new A.cf(a,s.a(J.lk(r,a)),q.i("@<x.K>").w(s).i("cf<1,2>"))},
$S(){return A.aJ(this.a).i("cf<x.K,x.V>(x.K)")}}
A.dh.prototype={
k(a){return A.kO(this,"{","}")}}
A.dB.prototype={$im:1,$ii:1,$ilD:1}
A.dP.prototype={}
A.a0.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.a0&&this.a===b.a},
gt(a){return B.d.gt(this.a)},
P(a,b){return B.d.P(this.a,t.d.a(b).a)},
k(a){var s,r,q,p,o,n=this.a,m=B.d.H(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.d.H(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.d.H(n,1e6)
p=q<10?"0":""
o=B.H.c3(B.d.k(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o},
$iaf:1}
A.jA.prototype={}
A.E.prototype={
gaj(){return A.bx(this.$thrownJsError)}}
A.cL.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ep(s)
return"Assertion failed"}}
A.bq.prototype={}
A.eU.prototype={
k(a){return"Throw of null."}}
A.aV.prototype={
gaG(){return"Invalid argument"+(!this.a?"(s)":"")},
gaF(){return""},
k(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gaG()+o+m
if(!q.a)return l
s=q.gaF()
r=A.ep(q.b)
return l+s+": "+r}}
A.cj.prototype={
gaG(){return"RangeError"},
gaF(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.B(q):""
else if(q==null)s=": Not greater than or equal to "+A.B(r)
else if(q>r)s=": Not in inclusive range "+A.B(r)+".."+A.B(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.B(r)
return s}}
A.eA.prototype={
gaG(){return"RangeError"},
gaF(){if(A.cw(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.fq.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.fo.prototype={
k(a){var s="UnimplementedError: "+this.a
return s}}
A.b6.prototype={
k(a){return"Bad state: "+this.a}}
A.ei.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ep(s)+"."}}
A.eX.prototype={
k(a){return"Out of Memory"},
gaj(){return null},
$iE:1}
A.di.prototype={
k(a){return"Stack Overflow"},
gaj(){return null},
$iE:1}
A.el.prototype={
k(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.jC.prototype={
k(a){return"Exception: "+this.a}}
A.i.prototype={
c0(a,b,c){var s=A.A(this)
return A.lx(this,s.w(c).i("1(i.E)").a(b),s.i("i.E"),c)},
A(a,b){var s
A.A(this).i("~(i.E)").a(b)
for(s=this.gB(this);s.n();)b.$1(s.gp(s))},
gm(a){var s,r=this.gB(this)
for(s=0;r.n();)++s
return s},
q(a,b){var s,r,q
A.j3(b,"index")
for(s=this.gB(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.e(A.K(b,this,"index",null,r))},
k(a){return A.lu(this,"(",")")}}
A.a1.prototype={}
A.cf.prototype={
k(a){return"MapEntry("+A.B(this.a)+": "+A.B(this.b)+")"}}
A.S.prototype={
gt(a){return A.u.prototype.gt.call(this,this)},
k(a){return"null"}}
A.u.prototype={$iu:1,
F(a,b){return this===b},
gt(a){return A.bT(this)},
k(a){return"Instance of '"+A.j0(this)+"'"},
toString(){return this.k(this)}}
A.hf.prototype={
k(a){return""},
$iaG:1}
A.fe.prototype={
gm(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.p.prototype={}
A.hH.prototype={
gm(a){return a.length}}
A.e4.prototype={
k(a){return String(a)}}
A.e5.prototype={
k(a){return String(a)}}
A.ea.prototype={}
A.eb.prototype={
gaX(a){return new A.bs(a,"load",!1,t.h)}}
A.bB.prototype={
sV(a,b){a.height=b},
sX(a,b){a.width=b},
b7(a,b){return a.getContext(b)},
$ibB:1}
A.c8.prototype={
sdv(a,b){a.fillStyle=b},
$ic8:1}
A.aK.prototype={
gm(a){return a.length}}
A.i1.prototype={
gm(a){return a.length}}
A.D.prototype={$iD:1}
A.cQ.prototype={
gm(a){return a.length}}
A.i2.prototype={}
A.aC.prototype={}
A.aY.prototype={}
A.i3.prototype={
gm(a){return a.length}}
A.i4.prototype={
gm(a){return a.length}}
A.i5.prototype={
gm(a){return a.length},
h(a,b){return a[b]}}
A.cc.prototype={$icc:1}
A.i7.prototype={
k(a){return String(a)}}
A.cS.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.U.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.cT.prototype={
k(a){var s,r=a.left
r.toString
r="Rectangle ("+A.B(r)+", "
s=a.top
s.toString
return r+A.B(s)+") "+A.B(this.gX(a))+" x "+A.B(this.gV(a))},
F(a,b){var s,r
if(b==null)return!1
if(t.U.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=J.hD(b)
s=this.gX(a)===s.gX(b)&&this.gV(a)===s.gV(b)}else s=!1}else s=!1}else s=!1
return s},
gt(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.iX(r,s,this.gX(a),this.gV(a))},
gbs(a){return a.height},
gV(a){var s=this.gbs(a)
s.toString
return s},
gbD(a){return a.width},
gX(a){var s=this.gbD(a)
s.toString
return s},
$iaQ:1}
A.em.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){A.a5(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.i8.prototype={
gm(a){return a.length}}
A.P.prototype={
k(a){return a.localName},
gaX(a){return new A.bs(a,"load",!1,t.h)},
$iP:1}
A.j.prototype={$ij:1}
A.d.prototype={
dj(a,b,c,d){t.bw.a(c)
if(c!=null)this.cB(a,b,c,!1)},
cB(a,b,c,d){return a.addEventListener(b,A.cC(t.bw.a(c),1),!1)},
$id:1}
A.ah.prototype={$iah:1}
A.eq.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.c8.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.er.prototype={
gm(a){return a.length}}
A.ev.prototype={
gm(a){return a.length}}
A.ai.prototype={$iai:1}
A.ir.prototype={
gm(a){return a.length}}
A.bH.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.R.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.cd.prototype={$icd:1}
A.bI.prototype={
sbO(a,b){a.checked=!1},
sdX(a,b){a.type=b},
$ibI:1}
A.b2.prototype={$ib2:1}
A.iG.prototype={
k(a){return String(a)}}
A.bP.prototype={}
A.iM.prototype={
gm(a){return a.length}}
A.eJ.prototype={
h(a,b){return A.bc(a.get(A.a5(b)))},
A(a,b){var s,r
t.A.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bc(r.value[1]))}},
gW(a){var s=A.c([],t.s)
this.A(a,new A.iP(s))
return s},
gm(a){return a.size},
$iF:1}
A.iP.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.eK.prototype={
h(a,b){return A.bc(a.get(A.a5(b)))},
A(a,b){var s,r
t.A.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bc(r.value[1]))}},
gW(a){var s=A.c([],t.s)
this.A(a,new A.iQ(s))
return s},
gm(a){return a.size},
$iF:1}
A.iQ.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.al.prototype={$ial:1}
A.eL.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.cI.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.ac.prototype={$iac:1}
A.q.prototype={
k(a){var s=a.nodeValue
return s==null?this.cm(a):s},
$iq:1}
A.da.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.R.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.am.prototype={
gm(a){return a.length},
$iam:1}
A.f_.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.he.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.f4.prototype={
h(a,b){return A.bc(a.get(A.a5(b)))},
A(a,b){var s,r
t.A.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bc(r.value[1]))}},
gW(a){var s=A.c([],t.s)
this.A(a,new A.j6(s))
return s},
gm(a){return a.size},
$iF:1}
A.j6.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.f6.prototype={
gm(a){return a.length}}
A.ad.prototype={$iad:1}
A.f9.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.fY.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.ao.prototype={$iao:1}
A.fa.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.f7.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.ap.prototype={
gm(a){return a.length},
$iap:1}
A.fd.prototype={
h(a,b){return a.getItem(A.a5(b))},
A(a,b){var s,r,q
t.eA.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gW(a){var s=A.c([],t.s)
this.A(a,new A.jd(s))
return s},
gm(a){return a.length},
$iF:1}
A.jd.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:19}
A.a2.prototype={$ia2:1}
A.ae.prototype={$iae:1}
A.a_.prototype={$ia_:1}
A.fh.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.c7.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.fi.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.a0.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.jl.prototype={
gm(a){return a.length}}
A.ar.prototype={$iar:1}
A.fk.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.aK.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.jm.prototype={
gm(a){return a.length}}
A.aS.prototype={}
A.jp.prototype={
k(a){return String(a)}}
A.cq.prototype={$icq:1}
A.fs.prototype={
gm(a){return a.length}}
A.cs.prototype={
c5(a,b){var s
t.c4.a(b)
this.cP(a)
s=A.m6(b,t.di)
s.toString
return this.cZ(a,s)},
cZ(a,b){return a.requestAnimationFrame(A.cC(t.c4.a(b),1))},
cP(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iju:1}
A.fB.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.g5.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.dq.prototype={
k(a){var s,r=a.left
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
F(a,b){var s,r
if(b==null)return!1
if(t.U.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=J.hD(b)
if(s===r.gX(b)){s=a.height
s.toString
r=s===r.gV(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gt(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.iX(p,s,r,q)},
gbs(a){return a.height},
gV(a){var s=a.height
s.toString
return s},
gbD(a){return a.width},
gX(a){var s=a.width
s.toString
return s}}
A.fN.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.g7.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.dw.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.R.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.h7.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.gf.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.hg.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a[b]},
j(a,b,c){t.cP.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$in:1}
A.kL.prototype={}
A.dr.prototype={
aW(a,b,c,d){var s=A.A(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.c_(this.a,this.b,a,!1,s.c)}}
A.bs.prototype={}
A.ds.prototype={}
A.jB.prototype={
$1(a){return this.a.$1(t.aD.a(a))},
$S:14}
A.o.prototype={
gB(a){return new A.cW(a,this.gm(a),A.aJ(a).i("cW<o.E>"))}}
A.cW.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbt(J.lk(s.a,r))
s.c=r
return!0}s.sbt(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
sbt(a){this.d=this.$ti.i("1?").a(a)},
$ia1:1}
A.fD.prototype={$id:1,$iju:1}
A.fC.prototype={}
A.fF.prototype={}
A.fG.prototype={}
A.fH.prototype={}
A.fI.prototype={}
A.fK.prototype={}
A.fL.prototype={}
A.fO.prototype={}
A.fP.prototype={}
A.fU.prototype={}
A.fV.prototype={}
A.fW.prototype={}
A.fX.prototype={}
A.fY.prototype={}
A.fZ.prototype={}
A.h1.prototype={}
A.h2.prototype={}
A.h4.prototype={}
A.dC.prototype={}
A.dD.prototype={}
A.h5.prototype={}
A.h6.prototype={}
A.ha.prototype={}
A.hh.prototype={}
A.hi.prototype={}
A.dH.prototype={}
A.dI.prototype={}
A.hk.prototype={}
A.hl.prototype={}
A.hr.prototype={}
A.hs.prototype={}
A.ht.prototype={}
A.hu.prototype={}
A.hv.prototype={}
A.hw.prototype={}
A.hx.prototype={}
A.hy.prototype={}
A.hz.prototype={}
A.hA.prototype={}
A.fQ.prototype={
v(a){if(a<=0||a>4294967296)throw A.e(A.nu("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
ag(){return Math.random()},
$int:1}
A.ax.prototype={$iax:1}
A.eE.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){t.bG.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$in:1}
A.ay.prototype={$iay:1}
A.eV.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){t.ck.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$in:1}
A.j_.prototype={
gm(a){return a.length}}
A.ff.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.a5(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$in:1}
A.l.prototype={
gaX(a){return new A.bs(a,"load",!1,t.h)}}
A.az.prototype={$iaz:1}
A.fl.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){t.cM.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$in:1}
A.fR.prototype={}
A.fS.prototype={}
A.h_.prototype={}
A.h0.prototype={}
A.hd.prototype={}
A.he.prototype={}
A.hm.prototype={}
A.hn.prototype={}
A.hR.prototype={
gm(a){return a.length}}
A.e8.prototype={
h(a,b){return A.bc(a.get(A.a5(b)))},
A(a,b){var s,r
t.A.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bc(r.value[1]))}},
gW(a){var s=A.c([],t.s)
this.A(a,new A.hS(s))
return s},
gm(a){return a.size},
$iF:1}
A.hS.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.e9.prototype={
gm(a){return a.length}}
A.bf.prototype={}
A.eW.prototype={
gm(a){return a.length}}
A.fz.prototype={}
A.ec.prototype={$iec:1}
A.ew.prototype={$iew:1}
A.f0.prototype={$if0:1}
A.cl.prototype={
bM(a,b){return a.bindVertexArray(b)},
bJ(a,b,c){return a.bindBuffer(b,c)},
ap(a,b,c){return a.bindFramebuffer(b,c)},
J(a,b,c){return a.bindTexture(b,c)},
dt(a,b){return a.deleteTexture(b)},
bT(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aw(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.l6(g)){s.d9(a,b,c,d,e,f,g,h,i,j)
return}if(t.fS.b(g)&&h==null&&r&&j==null){s.da(a,b,c,d,e,f,g)
return}if(t.E.b(g)&&h==null&&r&&j==null){s.dc(a,b,c,d,e,f,g)
return}if(t.dz.b(g)&&h==null&&r&&j==null){s.dd(a,b,c,d,e,f,g)
return}throw A.e(A.cJ("Incorrect number or type of arguments",null))},
dU(a,b,c,d,e,f,g){return this.aw(a,b,c,d,e,f,g,null,null,null)},
d9(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
da(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
dc(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
dd(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
dY(a,b,c){return a.uniform1f(b,c)},
dZ(a,b,c){return a.uniform1i(b,c)},
e_(a,b,c,d){return a.uniform2f(b,c,d)},
e0(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
e1(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
e2(a,b){return a.useProgram(b)},
$icl:1}
A.b8.prototype={$ib8:1}
A.fn.prototype={$ifn:1}
A.fr.prototype={$ifr:1}
A.fb.prototype={
gm(a){return a.length},
h(a,b){var s
if(b>>>0!==b||b>=a.length)throw A.e(A.K(b,a,null,null,null))
s=A.bc(a.item(b))
s.toString
return s},
j(a,b,c){t.eO.a(c)
throw A.e(A.y("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$in:1}
A.h8.prototype={}
A.h9.prototype={}
A.ez.prototype={
aE(a){var s=this.b
if(!(a>=0&&a<s.length))return A.b(s,a)
s=s[a]
return s==null?this.$ti.c.a(null):s},
l(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b);++o.d
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.b5(q,null,!1,n.i("1?"))
B.a.b9(p,0,o.c,o.b)
o.sbz(p)}o.aA(b,o.c++)},
gm(a){return this.c},
L(a,b){var s,r,q=this
q.$ti.c.a(b)
s=q.cT(b)
if(s<0)return!1;++q.d
r=q.cY()
if(s<q.c)if(q.a.$2(r,b)<=0)q.aA(r,s)
else q.bj(r,s)
return!0},
de(){var s,r,q=this.$ti,p=A.c([],q.i("t<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
k(a){var s=this.b
return A.lu(A.lH(s,0,A.k8(this.c,"count",t.S),A.aB(s).c),"(",")")},
bf(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.b5(q,null,!1,n.i("1?"))
B.a.b9(p,0,o.c,o.b)
o.sbz(p)}o.aA(b,o.c++)},
cT(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.aE(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.N(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
cY(){var s=this,r=s.c-1,q=s.aE(r)
B.a.j(s.b,r,null)
s.c=r
return q},
aA(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.d.H(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.N()
if(q>0)break
B.a.j(o.b,b,p)}B.a.j(o.b,b,a)},
bj(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.$ti.c
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
if(p<q){j=i.aE(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sbz(a){this.b=this.$ti.i("n<1?>").a(a)}}
A.z.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.z&&b.a===this.a},
gt(a){return B.d.gt(this.a)},
k(a){return"Color(0x"+B.H.c3(B.d.dV(this.a,16),8,"0")+")"}}
A.T.prototype={
dB(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.d.ah(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.e(A.aR(b.k(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.d.ah(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.e(A.kM(b.k(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
a0(a,b,c){var s=B.d.ah(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
D(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.d.ah(d*s+c)
q=p.c
if(r>=q.length)throw A.e(A.kM("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
k(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.d.ah(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.B(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.dc.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.dc&&b.a===this.a&&b.b===this.b},
gt(a){return A.iX(this.a,this.b,B.t,B.t)},
k(a){return"Offset("+B.d.c8(this.a,1)+", "+B.d.c8(this.b,1)+")"}}
A.c5.prototype={
ga2(a){return B.c.E(this.c.d/24)},
ga3(a){return B.c.E(this.c.e/36)},
u(){var s=this.c
return new A.k(B.c.E(s.d/24),B.c.E(s.e/36))},
$iiq:1,
gbZ(){return this.ch}}
A.hG.prototype={}
A.hF.prototype={
dl(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b
d.dK()
s=t.g
r=A.c([],s)
q=A.c([],s)
s=a.u()
s.toString
p=b.y.M(s)
for(o=b.c.d.a,n=o.length,m=p.c,l=p.a,k=m.length,d=d.a,j=0;j<o.length;o.length===n||(0,A.C)(o),++j){i=o[j]
if(i.f)continue
h=i.u()
if(h==null)continue
g=h.au(s)
f=h.b*l+h.a
if(!(f>=0&&f<k))return A.b(m,f)
if(m[f]!==1||i===a)continue
if(!A.mg(i,a))B.a.l(q,i)
else if(g<10.5){B.a.l(r,i)
f=i.u()
e=f.b*100+f.a
if(!(e>=0&&e<4000))return A.b(d,e)
B.cH.j(d,e,Math.max(d[e],20))}}d=this.a.T(a,r,q,new A.aq(null,null),b).a
if(d==null)return new A.cn()
return d}}
A.aq.prototype={}
A.a9.prototype={}
A.bn.prototype={
T(a,b,c,d,e){var s,r,q=null,p=t.l
p.a(b)
p.a(c)
if(d.b!=null)return d
p=a.x
s=p==null
if((s?q:p.c)!=null)r=B.a.G(b,s?q:p.c)
else r=!1
if(r){if(s)p=q
else{p=p.c
p.toString}return new A.aq(q,p)}return d}}
A.bo.prototype={
T(a,b,c,d,e){var s,r=t.l
r.a(b)
r.a(c)
if(d.b!=null)return d
if(0<b.length){s=b[0]
r=a.x
if(r!=null)r.c=s
return new A.aq(null,s)}return d}}
A.ca.prototype={
T(a,b,c,d,e){var s,r,q=t.l
q.a(b)
q.a(c)
if(d.b!=null||c.length===0)return d
for(q=c.length,s=0;s<q;++s){r=c[s].x
if(r!=null&&r.c!=null){q=r.c
q.toString
return new A.aq(null,q)}}return d}}
A.bl.prototype={
T(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=t.l
k.a(b)
k.a(c)
if(d.b!=null)return d
for(k=a.x.b.a,s=-1,r=0,q=0;q<4000;++q){p=k[q]
if(p>r){r=p
s=q}}if(s===-1)return d
k=B.d.cf(s,100)
o=B.d.H(s,100)
n=$.kE()
m=a.u()
m.toString
l=n.aT(m,new A.k(k,o),e.c.d)
if(l==null)return d
k=l.b.d
o=a.u()
o.toString
return new A.aq(new A.aP(k.a1(0,o),a),null)}}
A.f2.prototype={
T(a,b,c,d,e){var s,r=t.l
r.a(b)
r.a(c)
if(this.b){this.b=!1
return d}r=a.u()
r.toString
s=e.fx.a.aS(e.c.d,r,-1)
if(s==null)return d
this.b=!0
r=a.u()
r.toString
return new A.aq(new A.aP(s.a1(0,r),a),null)}}
A.de.prototype={
T(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=t.l
c.a(b)
c.a(a0)
s=a2.c.d
c=a.d
if(c.b/c.a>0.3)return a1
c=e.a
if(c!=null){c=c.d
r=a.u()
r.toString
q=c.a1(0,r)
e.a=e.a.b
return new A.aq(new A.aP(q,a),d)}c=a.u()
c.toString
r=a2.fx.a
p=r.aS(s,c,-1)
if(p==null){o=c.b*100+c.a
r=r.a
if(!(o>=0&&o<4000))return A.b(r,o)
n=r[o]
m=a2.y.M(c)
for(c=m.c,l=m.a,k=c.length,j=d,i=1;i<100;++i)for(h=1;h<40;++h){o=h*100+i
if(!(o<4000))return A.b(r,o)
g=r[o]
f=h*l+i
if(!(f<k))return A.b(c,f)
if(c[f]===1&&g<n){j=new A.k(i,h)
n=g}}if(j!=null){c=$.kE()
r=a.u()
r.toString
e.a=c.aT(r,j,s)}return new A.aq(new A.cn(),d)}c=a.u()
c.toString
return new A.aq(new A.aP(p.a1(0,c),a),d)}}
A.f3.prototype={
T(a,b,c,d,e){var s,r,q,p,o,n=t.l
n.a(b)
n.a(c)
for(n=c.length,s=this.a,r=0;r<c.length;c.length===n||(0,A.C)(c),++r){q=c[r].u()
q.toString
p=a.u()
p.toString
if(q.au(p)<=s)return d}if(b.length===0)return d
n=a.u()
n.toString
o=e.fx.a.aS(e.c.d,n,-1)
if(o==null)return d
n=a.u()
n.toString
return new A.aq(new A.aP(o.a1(0,n),a),null)}}
A.be.prototype={
T(a,b,c,d,e){var s,r,q,p,o=t.l
o.a(b)
o.a(c)
if(d.a!=null||d.b==null)return d
o=d.b
o.toString
s=$.kE()
r=a.u()
r.toString
q=o.u()
q.toString
p=s.aT(r,q,e.c.d)
if(p==null)return d
s=p.b.d
r=a.u()
r.toString
return new A.aq(new A.aP(s.a1(0,r),a),o)}}
A.aL.prototype={
T(a,b,c,d,e){var s,r,q,p,o=t.l
o.a(b)
o.a(c)
for(o=this.a,s=o.length,r=d,q=0;q<o.length;o.length===s||(0,A.C)(o),++q,r=p){p=o[q].T(a,b,c,r,e)
if(p.a!=null)return p}return r},
$ia9:1}
A.eM.prototype={}
A.kx.prototype={
$0(){return new A.W(2,6,0,0,B.aS)},
$S:2}
A.kv.prototype={
$0(){return new A.aL(A.c([new A.bn(),new A.bo(),new A.de(),new A.be(),new A.bl()],t.a))},
$S:3}
A.kw.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.ks.prototype={
$0(){return new A.W(2,4,0,0,B.aT)},
$S:2}
A.kq.prototype={
$0(){return new A.aL(A.c([new A.bn(),new A.bo(),new A.de(),new A.be(),new A.bl()],t.a))},
$S:3}
A.kr.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.kA.prototype={
$0(){return new A.W(10,7,0,0,B.aT)},
$S:2}
A.ky.prototype={
$0(){return new A.aL(A.c([new A.bn(),new A.bo(),new A.ca(),new A.be(),new A.bl()],t.a))},
$S:3}
A.kz.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.kD.prototype={
$0(){return new A.W(10,7,0,0,B.aS)},
$S:2}
A.kB.prototype={
$0(){return new A.aL(A.c([new A.bn(),new A.bo(),new A.ca(),new A.f2(),new A.be(),new A.bl()],t.a))},
$S:3}
A.kC.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.k7.prototype={
$0(){return new A.W(3,7,0,0,B.cu)},
$S:2}
A.k5.prototype={
$0(){return new A.aL(A.c([new A.bn(),new A.bo(),new A.ca(),new A.f3(6),new A.be(),new A.bl()],t.a))},
$S:3}
A.k6.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.hW.prototype={}
A.aX.prototype={
h(a,b){return this.b.h(0,A.A(this).i("aX.T").a(b))}}
A.d7.prototype={}
A.eI.prototype={}
A.ex.prototype={
aV(a){return this.dz(t.O.a(a))},
dz(a){var s=0,r=A.dW(t.H),q,p=this,o
var $async$aV=A.dY(function(b,c){if(b===1)return A.dQ(c,r)
while(true)switch(s){case 0:o=p.e
if(o.length>3){s=1
break}B.a.l(o,a)
if(p.f){s=1
break}p.am()
case 1:return A.dR(q,r)}})
return A.dS($async$aV,r)},
am(){var s=0,r=A.dW(t.z),q=1,p,o=[],n=this,m
var $async$am=A.dY(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.f=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.ba(n.al(),$async$am)
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
case 4:return A.dR(null,r)
case 1:return A.dQ(p,r)}})
return A.dS($async$am,r)},
O(){var s=0,r=A.dW(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$O=A.dY(function(a1,a2){if(a1===1)return A.dQ(a2,r)
while(true)$async$outer:switch(s){case 0:b=p.a
a=b.c.d.a
a0=A.c(a.slice(0),A.aB(a))
a=p.b,o=B.a.gdi(a),n=t.b7,m=p.c,l=p.d,k=p.e,j=0,i=!1
case 4:if(!!0){s=5
break}case 6:if(!(h=a.length,h!==0)){s=7
break}if(0>=h){q=A.b(a,0)
s=1
break}s=8
return A.ba(a[0].K(0,b),$async$O)
case 8:g=a2
B.a.U(m,g.r)
case 9:if(!(h=g.a,h!=null)){s=10
break}B.a.j(a,0,h)
s=11
return A.ba(h.K(0,b),$async$O)
case 11:g=a2
B.a.U(m,g.r)
s=9
break
case 10:h=g.c
if(h!=null)A.lc(h)
f=g.x
s=f!=null?12:13
break
case 12:s=!g.f&&k.length===0?14:16
break
case 14:s=l.length!==0?17:18
break
case 17:s=19
return A.ba(p.bp(),$async$O)
case 19:case 18:s=20
return A.ba(p.ac(f),$async$O)
case 20:s=15
break
case 16:B.a.l(l,f)
case 15:case 13:case 21:if(!(h=m.length,h!==0)){s=22
break}if(0>=h){q=A.b(m,-1)
s=1
break}s=23
return A.ba(m.pop().K(0,b),$async$O)
case 23:e=a2
B.a.U(m,e.r)
case 24:if(!(h=e.a,h!=null)){s=25
break}s=26
return A.ba(h.K(0,b),$async$O)
case 26:e=a2
B.a.U(m,e.r)
s=24
break
case 25:h=e.c
if(h!=null)A.lc(h)
s=21
break
case 22:if(g.d)i=B.cc.cg(i,!0)
B.a.c4(a,0)
s=6
break
case 7:if(!i){s=3
break}for(;h=a0.length,j<h;){if(!(j>=0)){q=A.b(a0,j)
s=1
break $async$outer}d=a0[j];++j
if(d.u()==null)continue
if(A.p8(n.a(o),d,b)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=l.length!==0?27:28
break
case 27:s=k.length===0?29:31
break
case 29:s=32
return A.ba(p.bp(),$async$O)
case 32:s=30
break
case 31:p.aR()
case 30:case 28:if(!i){s=1
break}for(b=a0.length,c=0;c<b;++c)a0[c].a=100
case 1:return A.dR(q,r)}})
return A.dS($async$O,r)},
aR(){var s=0,r=A.dW(t.z),q=this,p,o,n
var $async$aR=A.dY(function(a,b){if(a===1)return A.dQ(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.C)(p),++n)p[n].x.$0()
B.a.sm(p,0)
return A.dR(null,r)}})
return A.dS($async$aR,r)},
ac(a){var s=0,r=A.dW(t.H),q=this,p
var $async$ac=A.dY(function(b,c){if(b===1)return A.dQ(c,r)
while(true)switch(s){case 0:p=new A.M($.H,t.dS)
if(a!=null)B.a.l(q.d,a)
B.a.l(q.a.f,t.x.a(new A.ik(q,new A.bX(p,t.ez))))
s=2
return A.ba(p,$async$ac)
case 2:return A.dR(null,r)}})
return A.dS($async$ac,r)},
bp(){return this.ac(null)},
al(){var s=0,r=A.dW(t.H),q,p=this,o,n,m,l
var $async$al=A.dY(function(a,b){if(a===1)return A.dQ(b,r)
while(true)switch(s){case 0:l=p.e
if(l.length===0){s=1
break}o=B.a.c4(l,0)
switch(o){case B.a4:case B.a5:case B.a6:case B.a7:switch(o){case B.a4:n=new A.k(0,-1)
break
case B.a5:n=new A.k(1,0)
break
case B.a6:n=new A.k(0,1)
break
case B.a7:n=new A.k(-1,0)
break
default:A.Z(A.aR(""))
n=null}m=new A.aP(n,p.a.c.a)
break
case B.c9:m=new A.cn()
break
case B.aB:l=p.a.c.a.c
m=new A.es(new A.k(B.c.E(l.d/24),B.c.E(l.e/36)))
break
case B.aC:m=p.cR()
break
default:m=null
break}s=m!=null?3:4
break
case 3:B.a.l(p.b,m)
s=5
return A.ba(p.O(),$async$al)
case 5:case 4:case 1:return A.dR(q,r)}})
return A.dS($async$al,r)},
cR(){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Y)
for(s=this.a.c,r=s.d.b,s=s.a,q=r.a,p=r.b,o=-1;o<2;++o)for(n=-1;n<2;++n){m=s.u()
l=m.a+o
m=m.b+n
if(!(l>=0&&m>=0&&l<q&&m<p))continue
k=r.h(0,new A.k(l,m))
if(k.f!=null)B.a.U(i,A.mf(k))}s=i.length
if(s===0)return null
if(s===1){if(0>=s)return A.b(i,0)
j=i[0]}else j=null
if(j==null)return null
return j.b},
cX(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.d.a(a)
for(s=h.d,r=s.length,q=a.a,p=h.e,o=0;o<s.length;s.length===r||(0,A.C)(s),++o){n=s[o]
if(p.length>=2)n.d=1
m=n.e
l=m==null?0:B.d.H(q-m.a,1000)
n.e=a
k=l/B.d.H(n.a.a,1000)
j=n.f
i=n.d
i=n.d=B.c.dq(j?n.d=i+k:n.d=i-k,-1,1)
i>=1||i<0
n.r.$1(n)}B.a.l(h.a.f,t.x.a(h.gbx()))}}
A.ik.prototype={
$1(a){var s,r,q,p,o,n,m
t.d.a(a)
s=A.c([],t.f_)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.C)(q),++n){m=q[n]
if(m.d>=1||o.length!==0){m.x.$0()
B.a.l(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.C)(s),++n)B.a.L(q,s[n])
if(q.length===0)this.b.ds(0)
else B.a.l(r.a.f,t.x.a(this))},
$S:10}
A.bj.prototype={
k(a){return"ItemType."+this.b}}
A.b0.prototype={}
A.i0.prototype={}
A.O.prototype={}
A.ey.prototype={
k(a){return"HandRequirement."+this.b}}
A.aN.prototype={
k(a){return"DamageType."+this.b}}
A.bi.prototype={
k(a){return"DiceType."+this.b}}
A.aA.prototype={
k(a){return"WeaponProperties."+this.b}}
A.iN.prototype={}
A.bh.prototype={}
A.bE.prototype={
k(a){return"CriticalEffect."+this.b}}
A.R.prototype={}
A.cG.prototype={
k(a){return"AmmoType."+this.b}}
A.cH.prototype={}
A.an.prototype={}
A.c6.prototype={
k(a){return"ArmorUpgradeType."+this.b}}
A.a8.prototype={}
A.e1.prototype={
ak(a){var s,r=a-10
if(r===0)return 0
else{s=r/2
if(r>0)return B.c.ad(s)
else return B.c.bN(s)}}}
A.ef.prototype={
dG(a,a0,a1){var s,r,q,p,o,n,m,l,k,j=this,i=j.x.gdM(),h=a.x.gdm(),g=A.kJ(a0,1,B.aA),f=j.y,e=f.a,d=g+f.ak(e),c=a.y,b=10+Math.min(c.ak(c.b),h.e)
c=i.b
b=A.X(A.n5(c))?b+h.d:b+h.c
if(!a1)b-=2
s=t.Q
r=A.c([],s)
q=A.c([],s)
if(g===1){p=!1
o=!1}else{o=d>=b
if(g===20)p=!0
else{p=o
o=!1}}n="["+d+" vs "+A.B(b)+"]"
if(!p)return new A.e7(j.cx.a+" missed "+a.cx.a+" "+n,!1,0,B.aN,B.aN)
if(B.a.G(i.z,B.b6))B.a.l(r,new A.ej())
s=i.d
m=i.e
l=A.kJ(a0,s,m)+f.ak(e)
if(o)l+=A.kJ(a0,s,m)+f.ak(e)
B.a.G(j.ch,B.cI)
k=j.cx.a+" hit "+a.cx.a+" for "+l+" with "+i.y
return new A.e7(k,!0,l,r,q)}}
A.e7.prototype={}
A.et.prototype={}
A.eo.prototype={
gdm(){var s,r,q
for(s=this.b,s=s.gas(s),s=s.gB(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.O)return q}return B.bh},
gdM(){var s,r,q
for(s=this.b,s=s.gas(s),s=s.gB(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.R)return q}return B.cx}}
A.eY.prototype={
k(a){return"Perk."+this.b}}
A.bF.prototype={
k(a){return"EquipmentSlot."+this.b}}
A.ej.prototype={}
A.co.prototype={
k(a){return"TileType."+this.b}}
A.c9.prototype={
k(a){return"CollisionMode."+this.b}}
A.iI.prototype={}
A.bV.prototype={
k(a){return"TerrainType."+this.b}}
A.a3.prototype={
k(a){return"TerrainWidget."+this.b}}
A.bN.prototype={
k(a){return"LockState."+this.b}}
A.bA.prototype={
k(a){return"Biome."+this.b}}
A.bp.prototype={
ga2(a){return this.b.a},
ga3(a){return this.b.b},
sdT(a){t.d0.a(a)},
$iiq:1,
gbZ(){return this.z}}
A.eG.prototype={}
A.k.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.k&&b.a===this.a&&b.b===this.b},
gt(a){return A.iX(this.a,this.b,B.t,B.t)},
C(a,b){return new A.k(this.a+b.a,this.b+b.b)},
a1(a,b){return new A.k(this.a-b.a,this.b-b.b)},
b2(){return new A.dc(this.a,this.b)},
au(a){var s=Math.abs(this.a-a.a),r=Math.abs(this.b-a.b)
return s+r+-0.6000000000000001*Math.min(s,r)},
k(a){return"("+this.a+", "+this.b+")"}}
A.iF.prototype={
k(a){return"LiquidKind."+this.b}}
A.U.prototype={
k(a){return"Interactable."+this.b}}
A.iJ.prototype={}
A.iO.prototype={
dK(){var s,r
for(s=this.a,r=0;r<4000;++r)s[r]=s[r]-1}}
A.cg.prototype={
k(a){return"MonsterKind."+this.b}}
A.i9.prototype={
df(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.a,i=j.a7(k,t.J),h=this.c
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.b.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.b||A.X(A.bJ(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.d=r
j.aa(b,k,i)},
I(a,b){var s=this
if(s.b){s.df(0,a)
s.b=!1}s.a.a6(a,0,B.d.H(s.d,2),A.bM(["u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.en.prototype={}
A.ic.prototype={
cr(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.c,c=d.d
A.p7(e,c,B.q,c.c)
e.ga_().a.R(e.a)
s=e.ch
s.a.R(e.a)
r=e.cx
r.a.R(e.a)
e.gaU().b.R(e.a)
q=e.ga9()
p=e.a
q.d=p.createFramebuffer()
q.a.R(p)
q.b.R(p)
e.gbR().b.R(e.a)
e.fr.a.R(e.a)
for(q=c.b,p=q.c,o=p.length,n=e.y,m=0;m<p.length;p.length===o||(0,A.C)(p),++m){l=p[m]
k=l.b
j=A.ls(l.f,k.a*24,k.b*36)
if(j!=null){i=j.a=e.ga_()
h=i.c
h.$ti.c.a(j);++h.d
h.bf(0,j)
i.e=!0
l.y=j}i=l.f
if(i===B.G||i===B.D){l.z=new A.eG(new A.z(4294278144))
g=e.db
if(g===$){f=A.nm(n)
A.dV(g,"lightingRenderer")
e.db=f
g=f}B.a.l(g.x,l)}}e.bE(d.a,A.mc(c))
s.b=c
s.c=!0
r.c=c
r.b=!0
n.dE(q)
n.dD()
n.e=A.mc(c)
d=e.dx.b
new A.br(d,A.A(d).i("br<1>")).c_(new A.id(e))},
ga_(){var s,r=this,q=r.Q
if(q===$){s=A.nB(r.a,r.y)
A.dV(r.Q,"sprites")
r.Q=s
q=s}return q},
gaU(){var s,r=this,q=r.cy
if(q===$){s=A.o9()
s=A.b_(A.c([new A.V("a_position",35044,5126,2,s),new A.V("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.l,A.c([new A.v("u_resolution",B.f),new A.v("u_offset",B.f)],t.o),u.q)
A.dV(r.cy,"fovRenderer")
q=r.cy=new A.ie(r.y,s,new A.k(-1,-1))}return q},
ga9(){var s,r,q,p=this,o=u.p,n="a_position",m="u_resolution",l="u_block_size",k="u_player_visible_texture",j="u_offset",i=p.db
if(i===$){s=t.G
r=t.o
q=A.b_(A.c([new A.V(n,35044,5126,2,new Float32Array(A.cx(B.v)))],s),u.k,A.c([new A.v(m,B.f),new A.v("u_source_position",B.f),new A.v(l,B.f),new A.v("u_source_color",B.ah),new A.v("u_source_strength",B.w),new A.v("u_time",B.w),new A.v("u_visible_texture",B.n),new A.v(k,B.n),new A.v(j,B.f)],r),o)
r=A.b_(A.c([new A.V(n,35044,5126,2,new Float32Array(A.cx(B.v)))],s),u.f,A.c([new A.v("u_light_texture",B.n),new A.v("u_game_world_texture",B.n),new A.v(k,B.n),new A.v(m,B.f),new A.v(l,B.f),new A.v(j,B.f)],r),o)
s=A.c([],t.cd)
A.dV(p.db,"lightingRenderer")
i=p.db=new A.eH(q,r,p.y,s)}return i},
gbR(){var s,r=this,q=r.dy
if(q===$){s=A.b_(A.c([new A.V("a_position",35044,5126,2,new Float32Array(A.cx(B.v)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random (in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise (vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f*f*f+.6*f*f+.5*f)*color, 0.3);\n}\n",A.c([new A.v("u_resolution",B.f),new A.v("u_time",B.w),new A.v("u_offset",B.f),new A.v("u_player_vis_texture",B.n),new A.v("u_block_size",B.f)],t.o),u.h)
A.dV(r.dy,"filters")
q=r.dy=new A.ih(r.y,s)}return q},
gb0(){var s,r=this,q=r.fy
if(q===$){s=A.c([],t.eP)
A.dV(r.fy,"textRenderer")
q=r.fy=new A.jk(r.b,s)}return q},
I(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=3553
t.cl.a(b)
e.a=b
s=e.d
r=s.clientWidth
q=s.clientHeight
if(r!==e.k1||q!==e.k2){B.u.sX(s,r)
B.u.sV(s,q)
s=e.e
B.u.sX(s,r)
B.u.sV(s,q)
e.k1=r
e.k2=q
s=e.go
if(s!=null)B.e.dt(b,s)
s=b.createTexture()
e.go=s
B.e.J(b,d,s)
B.e.aw(b,d,0,6408,e.k1,e.k2,0,6408,5121,null)
b.texParameteri(d,10241,9729)
b.texParameteri(d,10242,33071)
b.texParameteri(d,10243,33071)}s=e.z
p=e.y.e
o=Math.min(Math.max(B.c.av(p.a*24-r/2),0),B.d.av(2400-r))
n=Math.min(Math.max(B.c.av(p.b*36-q/2),0),B.d.av(1440-q))
p=s.a
m=Math.abs(o-p)>20?3:1
l=s.b
k=Math.abs(n-l)>20?3:1
if(o>p)p=s.a=p+m
else if(o<p){p-=m
s.a=p}if(n>l)s=s.b=l+k
else if(n<l){l-=k
s.b=l
s=l}else s=l
l=e.k4
l.a=r
l.b=q
l.d=p
l.e=s
l.c=a
s=e.b
p=s.canvas
j=p.width
j.toString
p=p.height
p.toString
s.clearRect(0,0,j,p)
b.viewport(0,0,r,q)
b.clearColor(0,0,0,1)
b.clear(16640)
b.enable(3042)
b.blendFuncSeparate(770,771,1,771)
s=e.r
p=e.ch
j=e.cx
if(!s.a){B.e.ap(b,36160,e.id)
B.e.bT(b,36160,36064,d,e.go,0)
b.clearColor(0,0,0,1)
b.clear(16640)
p.I(b,l)
j.I(b,l)
e.ga_().I(b,l)
p=e.gbR()
j=p.a
i=j.ai(j.e,b)
b.activeTexture(33984)
B.e.J(b,d,i)
j=t.t
p.b.a6(b,4,3,A.bM(["u_time",l.c/1000,"u_resolution",A.c([l.a,l.b],j),"u_offset",A.c([l.d,l.e],t.n),"u_player_vis_texture",0,"u_block_size",A.c([24,36],j)],t.N,t.z))
B.e.ap(b,36160,null)
e.ga9().r=s.b
e.ga9().f=e.go
e.ga9().I(b,l)}else{p.I(b,l)
j.I(b,l)
e.ga_().I(b,l)}s=e.gaU()
if(!s.a.e.F(0,s.c)||s.d)s.dh(b)
s.b.a6(b,4,48e3,A.bM(["u_resolution",A.c([l.a,l.b],t.t),"u_offset",A.c([l.d,l.e],t.n)],t.N,t.z))
e.gb0().dN(l)
b.finish()
h=A.kK(B.c.E(a),0)
s=e.f
g=A.c(s.slice(0),A.aB(s))
B.a.sm(s,0)
for(s=g.length,f=0;f<g.length;g.length===s||(0,A.C)(g),++f)g[f].$1(h)},
aZ(a){var s
B.a.L(this.c.d.a,a)
s=a.c
s.sa4(-1)
s.sa5(-1)
this.ga_().L(0,s)
if(a.ch!=null)B.a.L(this.ga9().x,a)},
bc(a,b){var s=a.c,r=B.c.E(s.d/24),q=B.c.E(s.e/36),p=b.c,o=B.c.E(p.d/24),n=B.c.E(p.e/36)
s.sa4(o)
s.sa5(n)
p.sa4(r)
p.sa5(q)
if(a.y){s=this.y
s.e=new A.k(o,n)
s.b4()}if(b.y){s=this.y
s.e=new A.k(r,q)
s.b4()}},
c1(a,b){var s=a.c
s.sa4(b.a)
s.sa5(b.b)
if(a.y){s=this.y
s.e=b
s.b4()}},
bF(a,b,c){var s,r
B.a.l((c==null?this.c.d:c).a,a)
s=a.c
s.sa4(b.a)
s.sa5(b.b)
r=this.ga_()
s.sbU(0,1)
r.l(0,s)
if(a.ch!=null)B.a.l(this.ga9().x,a)},
bE(a,b){return this.bF(a,b,null)}}
A.id.prototype={
$1(a){var s,r
t.dg.a(a)
s=this.a.k4
r=J.aw(a)
s.sdH(r.h(a,0))
s.sdI(r.h(a,1))},
$S:26}
A.ag.prototype={}
A.bg.prototype={}
A.Q.prototype={}
A.fm.prototype={
K(a,b){return new A.Q(null,null,!1,!1,B.i,null)}}
A.aP.prototype={
K(a,b){var s,r,q,p,o,n,m,l,k=this,j=null,i={},h=b.c.d,g=k.b,f=g.u(),e=k.a,d=f.C(0,e),c=h.b
if(!c.dB(d))return new A.Q(j,j,!1,!1,B.i,j)
s=c.h(0,d)
r=h.bI(d)
if((s.c===B.b||A.X(A.bJ(s.f)))&&r==null){i=s.b
q=i.a
if(q!==0){i=i.b
i=i===0||q===99||i===39}else i=!0
if(i)return new A.Q(new A.fm(g,e.a,e.b),j,!1,!1,B.i,j)
if(s.f==null)return new A.Q(j,j,!1,!1,B.i,j)
p=A.mf(s)
if(p.length!==0)return new A.Q(B.a.gcl(p).b,j,!1,!1,B.i,j)
return new A.Q(j,j,!1,!1,B.i,j)}o=A.c([],t.w)
i.a=!1
if(r!=null){if(A.mg(r,g))return new A.Q(new A.e6(g,r),j,!1,!1,B.i,j)
e=i.a=!0}else e=!1
q=b.y
q=q.M(q.e)
q.toString
n=!g.y
if(n)m=q.h(0,f)||q.h(0,d)
else m=!1
c.h(0,f)
if(s.r!=null)self.window.secretPlayAudio("sounds/"+("water_footsteps_"+(B.q.v(5)+1)+".mp3"))
if(m)l=new A.bg(A.kK(60,0),new A.iT(k,f,d),new A.iU(i,k,b,r,d))
else{if(e){r.toString
b.bc(r,g)}else b.c1(g,d)
l=j}A.hE("SWAP:"+e)
g.a=0
return new A.Q(j,j,!0,n,o,l)}}
A.iT.prototype={
$1(a){var s=a.d,r=1-s,q=this.b,p=this.c,o=this.a.b.c
o.sa2(0,q.a*24*r+p.a*24*s)
o.sa3(0,q.b*36*r+p.b*36*s)},
$S:9}
A.iU.prototype={
$0(){var s,r=this,q=r.c,p=r.b.b
if(r.a.a){s=r.d
s.toString
q.bc(s,p)}else q.c1(p,r.e)},
$S:0}
A.cn.prototype={
K(a,b){return new A.Q(null,null,!0,!1,B.i,null)}}
A.eF.prototype={
K(a,b){var s=this.a.d
s.d-=1000;++s.c;++s.e;++s.f;++s.r
A.hE("LEVEL UP")
return new A.Q(null,null,!0,!1,B.i,null)}}
A.dk.prototype={
K(a,b){var s,r,q,p=b.c.d.b,o=this.b,n=p.h(0,o),m=n.y
n.f=this.a?B.r:B.E
s=b.ga_()
m.toString
s.L(0,m)
s=n.f
s.toString
r=n.b
q=A.ls(s,24*r.a,36*r.b)
if(q!=null)b.ga_().l(0,q)
n.y=q
b.y.bY(p,o)
b.gaU().d=!0
self.window.secretPlayAudio("sounds/door_1.mp3")
return new A.Q(null,null,!0,!1,B.i,null)}}
A.es.prototype={
K(a,b){var s,r,q=null,p=4294901760,o=new A.W(4,4,0,0,q)
o.f=new A.z(p)
s=this.a
o.sa4(s.a)
o.sa5(s.b)
o.sbU(0,1)
r=A.kH(q,q,0,new A.eG(new A.z(p)),q,!0,!1,o)
b.bE(r,s)
return new A.Q(q,q,!0,!1,B.i,new A.bg(A.kK(0,2),new A.ii(this,o),new A.ij(b,r)))}}
A.ii.prototype={
$1(a){var s=this.b,r=a.d,q=this.a.a
s.sa2(0,2400*r+(1-r)*q.a*24)
r=a.d
s.sa3(0,1440*r+(1-r)*q.b*36)},
$S:9}
A.ij.prototype={
$0(){this.a.aZ(this.b)},
$S:0}
A.e6.prototype={
K(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=h.b
f.a=0
g.a=null
s=h.c
r=A.p0(s,f,b)
q=f.d
q.toString
p=s.d
p.toString
p=g.a=q.dG(p,B.q,r)
B.a.U(q.Q,p.d)
q=s.d
B.a.U(q.Q,p.e)
o=A.c([],t.w)
n=s.u()
n.toString
m=f.u()
l=m.b2()
k=n.b2()
j=m.b2()
g.b=!0
i=new A.bg(B.c4,new A.hP(g,h,b,n,l,new A.dc(j.a+(k.a-l.a),j.b+(k.b-l.b))),new A.hQ(g,h,b,n,m))
j=s.x
if(j!=null)j.c=f
if(!p.b)return new A.Q(null,p.a,!0,!1,B.i,i)
f=q.b-p.c
q.b=f
if(f<=0)B.a.l(o,new A.cR(s))
h.cA(g.a.c,n,m,b)
return new A.Q(null,g.a.a,!0,!1,o,i)},
br(a){if(a)return"heavy_punch_1.mp3"
return"miss_1.mp3"},
cA(a,b,c,d){var s,r,q,p={}
if(a===0)return
this.c.d.toString
s=c.a*24
r=c.b*36
q=new A.f1(B.d.k(a),s,r,1)
B.a.l(d.gb0().b,q)
p.a=B.c3
A.nD(B.c5,new A.hO(p,d,q,b.a*24,s,b.b*36,r))},
k(a){return"TargetMeleeAttackEvent{"+this.b.k(0)+" -> "+this.c.k(0)+"}"}}
A.hP.prototype={
$1(a){var s,r,q,p=this,o=p.a
if(o.b&&a.d>0.6){self.window.secretPlayAudio("sounds/"+p.b.br(o.a.b))
o.b=!1}o=p.e
s=p.f
r=a.d
q=p.b.b.c
q.sa2(0,A.mm(s.a,o.a,r)*24)
q.sa3(0,A.mm(s.b,o.b,r)*36)},
$S:9}
A.hQ.prototype={
$0(){var s,r=this,q=r.a
if(q.b){self.window.secretPlayAudio("sounds/"+r.b.br(q.a.b))
q.b=!1}q=r.b.b.c
s=r.e
q.sa4(s.a)
q.sa5(s.b)},
$S:0}
A.hO.prototype={
$1(a){var s,r,q,p=this
t.aF.a(a)
s=p.a
r=s.a.a+8000
s.a=new A.a0(r)
if(r>3e5){a.dn(0)
B.a.L(p.b.gb0().b,p.c)}q=B.d.H(s.a.a,1000)/300
s=p.c
r=1-q
s.b=q*p.d+r*p.e
s.c=q*p.f+r*p.r},
$S:28}
A.cR.prototype={
k(a){return"DeathEvent{"+this.a.k(0)+"}"},
K(a,b){var s,r,q,p=null,o=this.a
if(o.f){b.aZ(o)
return new A.Q(p,p,!0,!1,B.i,p)}if(o.y)return new A.Q(p,"You Died!",!0,!1,B.i,p)
s=b.c.a
r=s.d
r.d+=100
q=A.c([],t.w)
if(r.d>=1000)B.a.l(q,new A.eF(s))
o.u()
o.d.toString
b.aZ(o)
return new A.Q(p,o.k(0)+" has died.",!1,!1,q,p)}}
A.ih.prototype={}
A.ig.prototype={
cJ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.e.J(b,f,c)
s=A.ly(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
r=this.M(a)
for(q=s.length,p=r.c,o=r.a,n=p.length,m=0;m<40;++m)for(l=m*100,k=m*o,j=0;j<100;++j){i=(l+j)*4
h=k+j
if(!(h<n))return A.b(p,h)
g=p[h]===1?0:255
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
s[h]=g}B.e.aw(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
ai(a,b){var s,r,q=a.b*100+a.a
if(q<0||q>=4000)return null
s=this.f
r=s.h(0,a)
if(r==null){r=new A.hj(b.createTexture())
s.j(0,a,r)}if(r.b){this.cJ(a,b,r.a)
r.b=!1}return r.a},
M(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.kV(p,p+4000,B.d.bd(s.byteLength,r))
return new A.jq(100,A.ly(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
b4(){var s,r,q,p,o=this.M(this.e).c
for(s=this.c,r=o.length,q=0;q<4000;++q){p=s[q]
if(!(q<r))return A.b(o,q)
s[q]=p|o[q]}},
dD(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.aK(new A.k(s,r))
for(q=this.f,q=q.gb5(q),q=q.gB(q);q.n();)q.gp(q).b=!0},
bY(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.L.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.a0(0,r,q)
o=o.c===B.b||A.X(A.nf(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.aK(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]===1)g.aK(new A.k(m,l))}s=g.M(b)
s.toString
for(p=g.f,p=p.gas(p),p=p.gB(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]===1)i.b.b=!0}},
dE(a){return this.bY(a,null)},
aK(a){var s,r,q,p=this.M(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=1
for(q=0;q<4;++q)this.d0(new A.cm(1,-1,1),new A.j1(B.ch[q],a),o)},
d_(a,b){if(a<0||a>=b.byteLength)return
if(!(a>=0&&a<b.length))return A.b(b,a)
b[a]=1},
bu(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
aL(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===0},
d0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.r
B.a.sm(e,0)
B.a.l(e,a)
for(;s=e.length,s!==0;){if(0>=s)return A.b(e,-1)
r=e.pop()
s=r.a
q=B.c.ad(s*r.b+0.5)
p=B.c.bN(s*r.c-0.5)
for(o=s+1,n=2*s,m=q,l=null;m<=p;++m,l=j){k=b.dW(0,new A.k(s,m))
j=k.b*100+k.a
i=f.bu(j,c)
if(!i)h=m>=s*r.b&&m<=s*r.c
else h=!0
if(h)f.d_(j,c)
h=l!=null
if(h&&f.bu(l,c)&&f.aL(j,c))r.b=(2*m-1)/n
if(h&&f.aL(l,c)&&i){g=new A.cm(o,r.b,r.c)
g.c=(2*m-1)/n
B.a.l(e,g)}}if(l!=null&&f.aL(l,c))B.a.l(e,new A.cm(o,r.b,r.c))}}}
A.hj.prototype={}
A.jq.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]===1}}
A.bC.prototype={
k(a){return"Cardinal."+this.b}}
A.j1.prototype={
dW(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a){case B.ar:s=r.b
return new A.k(s.a+p,s.b-q)
case B.as:s=r.b
return new A.k(s.a+p,s.b+q)
case B.at:s=r.b
return new A.k(s.a+q,s.b+p)
case B.au:s=r.b
return new A.k(s.a-q,s.b+p)}}}
A.cm.prototype={}
A.cY.prototype={}
A.eH.prototype={
cK(a,b){var s,r,q,p=this.c,o=p.M(a).c,n=p.M(b).c
for(p=o.length,s=n.length,r=0;r<4000;++r){if(!(r<p))return A.b(o,r)
if(o[r]===1){if(!(r<s))return A.b(n,r)
q=n[r]===1}else q=!1
if(q)return!1}return!0},
I(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=3553,a0="u_player_visible_texture",a1=a3.a
if(a1!==b.y||a3.b!==b.z){b.y=a1
s=a3.b
b.z=s
r=a2.createTexture()
b.e=r
B.e.J(a2,a,r)
B.e.aw(a2,a,0,6408,a1,s,0,6408,5121,null)
a2.texParameteri(a,10241,9729)
a2.texParameteri(a,10242,33071)
a2.texParameteri(a,10243,33071)}B.e.ap(a2,36160,b.d)
B.e.bT(a2,36160,36064,a,b.e,0)
a2.clearColor(0,0,0,1)
a2.clear(16640)
a1=b.c
s=a1.ai(a1.e,a2)
s.toString
a2.activeTexture(33985)
B.e.J(a2,a,s)
for(r=b.x,q=r.length,p=b.a,o=t.t,n=t.n,m=t.N,l=t.z,k=0;k<r.length;r.length===q||(0,A.C)(r),++k){j=r[k]
i=j.gbZ()
h=new A.k(j.ga2(j),j.ga3(j))
g=a1.ai(h,a2)
if(g==null)continue
if(b.r&&b.cK(a1.e,h))continue
a2.activeTexture(33984)
B.e.J(a2,a,g)
f=A.c([a3.a,a3.b],o)
e=A.c([j.ga2(j),j.ga3(j)],o)
d=A.c([a3.d,a3.e],n)
c=i.b.a
p.a6(a2,4,3,A.bM(["u_resolution",f,"u_source_strength",7,"u_block_size",B.aI,"u_source_position",e,"u_offset",d,"u_source_color",A.c([(c>>>16&255)/255,(c>>>8&255)/255,(c&255)/255,0.2],n),"u_time",a3.c/1000,a0,1,"u_visible_texture",0],m,l))}B.e.ap(a2,36160,null)
a2.activeTexture(33984)
B.e.J(a2,a,b.e)
a2.activeTexture(33985)
B.e.J(a2,a,b.f)
a2.activeTexture(33986)
B.e.J(a2,a,s)
b.b.a6(a2,4,3,A.bM(["u_light_texture",0,"u_game_world_texture",1,a0,2,"u_block_size",B.aI,"u_resolution",A.c([a3.a,a3.b],o),"u_offset",A.c([a3.d,a3.e],n)],m,l))}}
A.bS.prototype={
P(a,b){return B.c.P(this.f,t.ae.a(b).f)},
gbA(){var s,r=this.a
if(r==null)r=this
else{s=r.a
r=s==null?r:s.gbA()}return r},
cQ(){var s,r,q
for(s=this,r=null;s!=null;r=s,s=q){s.b=r
q=s.a}},
k(a){var s,r,q,p
for(s=this.d,r=this,q="",p="";r!=null;q=", "){p=p+q+s.k(0)
r=r.b}return p.charCodeAt(0)==0?p:p},
$iaf:1}
A.aD.prototype={
k(a){return"Directions."+this.b}}
A.iY.prototype={
aT(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=A.lq(b,t.ae),a0=A.b3(t.j,t.i),a1=a4.b
a.l(0,new A.bS(a2,0,a2.au(a3)*1.02+0))
for(s=a.$ti.c,r=a1.a,q=a1.b,p=t.W;o=a.c,n=o===0,!n;){if(n)A.Z(A.aR("No element"));++a.d
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
if(k>0)a.bj(j,0)
o=l.d
i=a0.h(0,o)
if(i!=null&&i<l.e)continue
for(n=l.e,h=0;h<8;++h){g=B.ac[h]
f=A.Y(o,g)
m=f.a
if(m>=0){e=f.b
m=e>=0&&m<r&&e<q}else m=!1
if(m){m=l.a
if(!J.N(m==null?b:m.d,f))m=A.ma(p.a(a1.h(0,f)),a4,B.a1)&&!f.F(0,a3)
else m=!0}else m=!0
if(m)continue
m=f.au(a3)
e=this.cV(g)
if(typeof e!=="number")return A.c1(e)
e=n+e
d=new A.bS(f,e,m*1.02+e)
d.a=l
if(f.F(0,a3)){d.cQ()
s=l.a
return s==null?l:s.gbA()}c=a0.h(0,f)
if(!(e>1/0))m=c!=null&&e>=c
else m=!0
if(m)continue
a0.j(0,f,e)
s.a(d);++a.d
a.bf(0,d)}}return b},
cV(a){switch(a){case B.j:case B.m:case B.k:case B.l:return 1
case B.A:case B.z:case B.B:case B.C:return 1.4}}}
A.i6.prototype={
aS(a,b,c){var s,r,q,p,o,n,m,l,k=this.a,j=b.b*100+b.a
if(!(j>=0&&j<4000))return A.b(k,j)
s=k[j]*c
r=A.c([],t.q)
for(j=a.b,q=t.W,p=!1,o=0;o<8;++o){n=A.Y(b,B.ac[o])
m=n.b*100+n.a
if(m<0||m>=4000)continue
if(A.ma(q.a(j.h(0,n)),a,B.a1))continue
if(!(m>=0&&m<4000))return A.b(k,m)
l=k[m]*c
if(l>s){B.a.sm(r,0)
B.a.l(r,n)
s=l
p=!0}else if(l===s)B.a.l(r,n)}k=r.length
if(k===0||!p)return null
k=$.mp().v(k)
if(!(k>=0&&k<r.length))return A.b(r,k)
return r[k]}}
A.j8.prototype={}
A.V.prototype={}
A.v.prototype={}
A.bW.prototype={
k(a){return"UniformKind."+this.b}}
A.fy.prototype={}
A.ho.prototype={}
A.ip.prototype={
R(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.m_(a,i.a,35633),f=A.m_(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.N(a.getProgramParameter(e,35714),!0)){A.hE(J.c4(a.getProgramInfoLog(e)))
A.Z(A.aR("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.e.bM(a,A.at(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.ho(a.getUniformLocation(A.at(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.at(i.e,h),n)
k=a.createBuffer()
B.e.bJ(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.fy(k,j))}},
a7(a,b){A.oO(b,t.ak,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
aa(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.e(A.aR("WARNING, NO ATTRIBUTE "+b))
B.e.bJ(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
a6(a,b,c,d){var s,r,q,p,o,n
t.d1.a(d)
B.e.e2(a,A.at(this.e,"_program"))
B.e.bM(a,A.at(this.f,"_vertexArrayObject"))
for(s=d.gas(d),s=s.gB(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.a5(p)
n=r.h(0,p)
if(n==null)A.Z(A.aR("WARNING, NO UNIFORM "+p))
switch(n.b.b){case B.w:B.e.dY(a,n.a,A.aI(o))
break
case B.f:q=J.aw(o)
B.e.e_(a,n.a,A.aI(q.h(o,0)),A.aI(q.h(o,1)))
break
case B.cP:q=J.aw(o)
B.e.e0(a,n.a,A.aI(q.h(o,0)),A.aI(q.h(o,1)),A.aI(q.h(o,2)))
break
case B.ah:q=J.aw(o)
B.e.e1(a,n.a,A.aI(q.h(o,0)),A.aI(q.h(o,1)),A.aI(q.h(o,2)),A.aI(q.h(o,3)))
break
case B.n:B.e.dZ(a,n.a,A.cw(o))
break}}a.drawArrays(b,0,c)}}
A.j4.prototype={
sdH(a){A.l2(a)},
sdI(a){A.l2(a)}}
A.j5.prototype={}
A.f8.prototype={$inz:1}
A.kg.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.e.J(q,r,p)
B.e.dU(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.aq(0,p)},
$S:14}
A.ja.prototype={
ct(a,b){A.p3(a,"CursesTransparent_24x36.png").c7(new A.jb(this),t.P)},
l(a,b){b.a=this
this.c.l(0,b)
this.e=!0},
L(a,b){this.c.L(0,b)
b.a=null
this.e=!0},
dg(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="a_position",a4="a_texcoord",a5=this.c,a6=a5.c,a7=this.a,a8=t.ak,a9=a6*12,b0=A.kU(a7.a7(a3,a8).buffer,0,a9),b1=A.kU(a7.a7(a4,a8).buffer,0,a9),b2=A.kU(a7.a7("a_color",a8).buffer,0,a6*24),b3=a5.de()
B.a.ay(b3,a5.a)
for(a5=b2.length,a8=b1.length,a9=b0.length,s=0;s<a6;++s){if(!(s<b3.length))return A.b(b3,s)
r=b3[s]
q=r.b/16
p=r.c/16
o=s*12
if(!(o<a8))return A.b(b1,o)
b1[o]=q
n=o+1
if(!(n<a8))return A.b(b1,n)
b1[n]=p
m=o+2
l=q+0.0625
if(!(m<a8))return A.b(b1,m)
b1[m]=l
k=o+3
if(!(k<a8))return A.b(b1,k)
b1[k]=p
j=o+4
if(!(j<a8))return A.b(b1,j)
b1[j]=q
i=o+5
h=p+0.0625
if(!(i<a8))return A.b(b1,i)
b1[i]=h
g=o+6
if(!(g<a8))return A.b(b1,g)
b1[g]=l
f=o+7
if(!(f<a8))return A.b(b1,f)
b1[f]=h
e=o+8
if(!(e<a8))return A.b(b1,e)
b1[e]=l
l=o+9
if(!(l<a8))return A.b(b1,l)
b1[l]=p
d=o+10
if(!(d<a8))return A.b(b1,d)
b1[d]=q
c=o+11
if(!(c<a8))return A.b(b1,c)
b1[c]=h
b=r.d
a=r.e
if(!(o<a9))return A.b(b0,o)
b0[o]=b
if(!(n<a9))return A.b(b0,n)
b0[n]=a
n=b+24
if(!(m<a9))return A.b(b0,m)
b0[m]=n
if(!(k<a9))return A.b(b0,k)
b0[k]=a
if(!(j<a9))return A.b(b0,j)
b0[j]=b
j=a+36
if(!(i<a9))return A.b(b0,i)
b0[i]=j
if(!(g<a9))return A.b(b0,g)
b0[g]=n
if(!(f<a9))return A.b(b0,f)
b0[f]=j
if(!(e<a9))return A.b(b0,e)
b0[e]=n
if(!(l<a9))return A.b(b0,l)
b0[l]=a
if(!(d<a9))return A.b(b0,d)
b0[d]=b
if(!(c<a9))return A.b(b0,c)
b0[c]=j
a0=s*24
a1=r.f
if(a1==null)B.cG.du(b2,a0,a0+24,0)
else for(n=a1.a,m=(n>>>16&255)/255,l=(n>>>8&255)/255,k=(n&255)/255,n=(n>>>24&255)/255,a2=0;a2<24;a2+=4){j=a0+a2
if(!(j<a5))return A.b(b2,j)
b2[j]=m
i=j+1
if(!(i<a5))return A.b(b2,i)
b2[i]=l
i=j+2
if(!(i<a5))return A.b(b2,i)
b2[i]=k
j+=3
if(!(j<a5))return A.b(b2,j)
b2[j]=n}}a7.aa(b4,a3,b0)
a7.aa(b4,a4,b1)
a7.aa(b4,"a_color",b2)},
I(a,b){var s,r=this
if(r.b==null||r.c.c===0)return
if(r.e){r.dg(a)
r.e=!1}s=r.d
s.ai(s.e,a)
a.activeTexture(33984)
B.e.J(a,3553,r.b)
r.a.a6(a,4,r.c.c*6,A.bM(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.jb.prototype={
$1(a){this.a.b=t.dy.a(a)},
$S:29}
A.W.prototype={
sa2(a,b){var s=this.a
if(s!=null)s.e=!0
this.d=b},
sa3(a,b){var s=this.a
if(s!=null)s.e=!0
this.e=b},
sa4(a){var s=this.a
if(s!=null)s.e=!0
this.d=a*24},
sa5(a){var s=this.a
if(s!=null)s.e=!0
this.e=a*36},
sbU(a,b){var s
this.r=b
s=this.a
if(s!=null)s.e=!0}}
A.iL.prototype={}
A.jj.prototype={
d8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.b==null)return
s=d.a
r=s.a7("a_color",t.J)
for(q=d.d,p=r.length,o=d.b,n=0;n<40;++n)for(m=n<39,l=n*100,k=0;k<100;++k){j=l+k
i=j*48
h=o.b.c
g=h.length
if(!(j<g))return A.b(h,j)
if(h[j].c!==B.b)for(f=0;f<48;f+=4){h=f+i
g=q.c.a
if(!(h<p))return A.b(r,h)
r[h]=(g>>>16&255)/255
e=h+1
if(!(e<p))return A.b(r,e)
r[e]=(g>>>8&255)/255
e=h+2
if(!(e<p))return A.b(r,e)
r[e]=(g&255)/255
h+=3
if(!(h<p))return A.b(r,h)
r[h]=1}else{if(m){e=j+100
if(!(e<g))return A.b(h,e)
e=h[e]
h=!(e.c===B.b||A.X(A.bJ(e.f)))}else h=!1
if(h){for(f=0;f<24;f+=4){h=f+i
g=q.b.a
if(!(h<p))return A.b(r,h)
r[h]=(g>>>16&255)/255
e=h+1
if(!(e<p))return A.b(r,e)
r[e]=(g>>>8&255)/255
e=h+2
if(!(e<p))return A.b(r,e)
r[e]=(g&255)/255
h+=3
if(!(h<p))return A.b(r,h)
r[h]=1}for(f=24;f<48;f+=4){h=f+i
g=q.a.a
if(!(h<p))return A.b(r,h)
r[h]=(g>>>16&255)/255
e=h+1
if(!(e<p))return A.b(r,e)
r[e]=(g>>>8&255)/255
e=h+2
if(!(e<p))return A.b(r,e)
r[e]=(g&255)/255
h+=3
if(!(h<p))return A.b(r,h)
r[h]=1}}else for(f=0;f<48;f+=4){h=f+i
g=q.b.a
if(!(h<p))return A.b(r,h)
r[h]=(g>>>16&255)/255
e=h+1
if(!(e<p))return A.b(r,e)
r[e]=(g>>>8&255)/255
e=h+2
if(!(e<p))return A.b(r,e)
r[e]=(g&255)/255
h+=3
if(!(h<p))return A.b(r,h)
r[h]=1}}}s.aa(a,"a_color",r)},
I(a,b){var s=this
if(s.c){s.d8(a)
s.c=!1}s.a.a6(a,4,48e3,A.bM(["u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.jk.prototype={
dN(a){var s,r,q,p,o=this.a
o.textAlign="left"
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.C)(s),++q){p=s[q]
o.font=""+48*p.e+"px sans serif"
B.bA.sdv(o,"red")
o.fillText(p.a,p.b-a.d,p.c-a.e)}}}
A.f1.prototype={}
A.ie.prototype={
dh(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.M(a2.e),a4=a1.b,a5=a4.a7("a_color",t.J)
if(a3!=null)for(s=a5.length,r=a3.d,q=a3.c,p=a3.a,o=q.length,n=a2.e,m=n.a,n=n.b,l=0;l<40;++l)for(k=l*100,j=l*p,i=l===n,h=0;h<100;++h){g=k+h
f=g*24
e=h===m&&i
d=j+h
if(!(d<o))return A.b(q,d)
c=q[d]===1||e
if(!(g<4000))return A.b(r,g)
b=r[g]===1||e
for(a=0;a<48;a+=4){d=a+f
if(!(d<s))return A.b(a5,d)
a5[d]=0
a0=d+1
if(!(a0<s))return A.b(a5,a0)
a5[a0]=0
a0=d+2
if(!(a0<s))return A.b(a5,a0)
a5[a0]=0
d+=3
if(c)a0=0
else a0=b?0.8:1
if(!(d<s))return A.b(a5,d)
a5[d]=a0}}a1.c=a2.e
a1.d=!1
a4.aa(a6,"a_color",a5)}}
A.jv.prototype={}
A.k4.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:13}
A.jc.prototype={
bI(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.f){m=n.c
l=B.c.E(m.d/24)
if(l===q){m=B.c.E(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.ed.prototype={
ba(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.T(a,a0,A.b5(a*a0,B.h,!1,t.a5),t.h5)
c.a=b
s=new A.i_(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.C()
if(typeof m!=="number")return A.c1(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.c1(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.c1(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.c1(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.c1(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.c1(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.c1(f)
e=n+m+k+i+h+g+l+f
if(J.N(s.$2(q,o),1))if(e<4)a1.D(0,B.h,q,o)
else a1.D(0,B.b,q,o)
else if(e>5)a1.D(0,B.b,q,o)
else a1.D(0,B.h,q,o)}d=c.a
c.a=a1}}}
A.i_.prototype={
$2(a,b){return J.N(this.a.a.a0(0,a,b),B.b)?0:1},
$S:31}
A.im.prototype={
b3(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.e8.a(b0)
s=t.q
r=A.c([],s)
q=new A.io(a9)
for(p=J.aU(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.e4()
if(n>=1)B.a.l(r,o)}if(r.length===0)return
m=A.c([],t.ap)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.C)(r),++j){i=r[j]
h=A.c([],k)
g=i.a
f=i.b
if(o.h(0,new A.k(g+1,f))===B.b)B.a.l(h,B.k)
if(o.h(0,new A.k(g+-1,f))===B.b)B.a.l(h,B.m)
if(o.h(0,new A.k(g,f+1))===B.b)B.a.l(h,B.l)
if(o.h(0,new A.k(g,f+-1))===B.b)B.a.l(h,B.j)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.C)(h),++e){d=h[e]
c=A.Y(i,d)
b=A.c([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.b)break
a2=A.n6(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.Y(a,a2[0]))!==B.h){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.Y(a,a2[1]))===B.h}else a1=!0
if(a1)break
a=A.Y(a,d)
B.a.l(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.h&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.Y(a,A.n7(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.l(m,new A.dl(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.b3(t.v,t.aO)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.C)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.G(l,n))continue
if(a4.ar(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.j(0,n,a5)}else a4.j(0,n,a5)}for(s=a4.gb5(a4),s=s.gB(s),n=this.a,l=a9.e,k=a8.b;s.n();){g=s.gp(s)
f=g.d
a0=p.h(0,a8)
a0.toString
B.a.l(a0,f)
a0=p.h(0,f)
a0.toString
B.a.l(a0,a8)
for(g=g.c,a0=g.length,j=0;a1=g.length,j<a1;g.length===a0||(0,A.C)(g),++j)o.j(0,g[j],B.h)
a0=n.v(a1)
if(!(a0>=0&&a0<g.length))return A.b(g,a0)
a7=g[a0]
l.j(0,a7,B.K)
B.a.l(k,a7)
B.a.l(f.b,a7)}for(s=a4.gb5(a4),s=s.gB(s);s.n();)this.b3(s.gp(s).d,a9,b0,b1)}}
A.io.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.C(0,new A.k(1,0)))===B.b?1:0
if(s.h(0,a.C(0,new A.k(-1,0)))===B.b)++r
if(s.h(0,a.C(0,new A.k(0,-1)))===B.b)++r
return s.h(0,a.C(0,new A.k(1,1)))===B.b?r+1:r},
$S:32}
A.hX.prototype={
cb(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.D(0,o.ag()>0.45?B.h:B.b,n,m)
p.D(0,B.ad,n,m)}new A.ed(a7).ba(3)
for(p=q-1,l=0;l<r;++l){s.D(0,B.b,l,0)
s.D(0,B.b,l,p)}for(o=r-1,k=0;k<q;++k){s.D(0,B.b,0,k)
s.D(0,B.b,o,k)}j=new A.hY(a7)
i=new A.hZ(a7)
for(l=1;l<o;l=g)for(h=l-1,g=l+1,k=1;k<p;++k){if(!j.$2(l,k))continue
f=i.$2(g,k)
e=i.$2(h,k)
d=k+1
c=i.$2(l,d)
b=k-1
a=i.$2(l,b)
if(f&&e&&c&&a){s.D(0,B.b,l,k)
continue}if(j.$2(h,d)&&c&&e){s.D(0,B.b,l,k)
continue}if(j.$2(g,d)&&c&&f){s.D(0,B.b,l,k)
continue}if(j.$2(g,b)&&a&&f){s.D(0,B.b,l,k)
continue}if(j.$2(h,b)&&a&&e){s.D(0,B.b,l,k)
continue}}p=t.j
o=A.iE(p)
a0=new A.eu(a7,A.c([],t.g2),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.k(l,k)
if(o.G(0,a1)||s.h(0,a1)===B.b)continue
a0.bS(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.C)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gB(a3);d.n();)s.j(0,d.gp(d),B.b)
else B.a.l(o,new A.aa(a3,A.c([],h),A.c([],h),A.ib(a3)))}a4=A.b3(p,t.v)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.b,a2=0;b=o.length,a2<b;o.length===r||(0,A.C)(o),++a2){a3=o[a2]
B.a.l(p,a3)
h.j(0,a3,A.c([],d))
for(b=J.aU(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.C)(o),++a2){a3=o[a2]
r=a3.a
p=J.aw(r)
if(p.gm(r)>a6){a6=p.gm(r)
a5=a3}}this.b3(a5,a7,a4,q)
for(r=q.c2(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.C)(r),++a2){a3=r[a2]
B.a.L(o,a3)
for(p=J.aU(a3.a);p.n();)s.j(0,p.gp(p),B.b)}A.ml(o,a7)}}
A.hY.prototype={
$2(a,b){return J.N(this.a.b.a0(0,a,b),B.h)},
$S:16}
A.hZ.prototype={
$2(a,b){return J.N(this.a.b.a0(0,a,b),B.b)},
$S:16}
A.aM.prototype={}
A.ft.prototype={}
A.cI.prototype={}
A.dd.prototype={
Z(a,b){this.$ti.c.a(a)
return Math.min(B.a0.Z(a,b),B.bq.Z(a,b)+B.ba.Z(a,b))}}
A.ee.prototype={
Z(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
s=A.ku(a,B.j,b)
r=A.ku(a,B.l,b)
q=A.ku(a,B.k,b)
p=A.ku(a,B.m,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.e3.prototype={
Z(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
if(A.c2(a,B.j,b)+A.c2(a,B.l,b)+A.c2(a,B.k,b)+A.c2(a,B.m,b)===1)return 1
return 1/0}}
A.ek.prototype={
Z(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
if(A.c2(a,B.j,b)+A.c2(a,B.l,b)+A.c2(a,B.k,b)+A.c2(a,B.m,b)===2)return 1
return 1/0}}
A.cF.prototype={
Z(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
s=A.Y(a,B.j)
r=A.Y(a,B.l)
q=A.Y(a,B.k)
p=A.Y(a,B.m)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.dn.prototype={
dJ(a,b){return this.b.$2(a,b)}}
A.kp.prototype={
$2(a,b){b.e.j(0,a,B.ag)},
$S:1}
A.kl.prototype={
$2(a,b){b.e.j(0,a,B.b2)},
$S:1}
A.kn.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.J)s.j(0,a,B.ae)
else s.j(0,a,B.af)},
$S:1}
A.kk.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.J)s.j(0,a,B.ae)
else s.j(0,a,B.af)},
$S:1}
A.km.prototype={
$2(a,b){b.e.j(0,a,B.X)},
$S:1}
A.ko.prototype={
$2(a,b){b.e.j(0,a,B.b3)
b.f.j(0,a,B.cq)},
$S:1}
A.kj.prototype={
$2(a,b){b.e.j(0,a,B.Y)},
$S:1}
A.kt.prototype={
$2(a,b){var s=t.v
s.a(a)
s.a(b)
return J.a7(a.a)-J.a7(b.a)},
$S:35}
A.cX.prototype={}
A.hT.prototype={
c9(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=4000,c=new A.T(100,40,A.b5(d,B.h,!1,t.a5),t.h5),b=A.b5(d,0,!1,t.i),a=A.b5(d,B.ad,!1,t.d0),a0=new A.T(100,40,A.b5(d,B.p,!1,t.gQ),t.gg),a1=t.b,a2=new A.cX(a3,c,new A.T(100,40,b,t.cL),new A.T(100,40,a,t.dl),a0,new A.T(100,40,A.b5(d,B.aQ,!1,t.ad),t.aE),new A.T(100,40,A.b5(d,null,!1,t.p),t.b1),new A.ia(A.c([],a1),A.b3(t.v,t.go)),A.c([],a1))
b=a3.a
switch(b){case B.x:new A.hX(B.q).cb(a2)
break
case B.bp:new A.j7(A.iE(t.j),B.q).ce(a2)
break
case B.an:case B.Z:case B.am:new A.jg(B.q).cc(a2)
break}s=new Float32Array(4000)
new A.iZ().cd(s,100,40)
r=new A.T(100,40,A.kS(d,new A.hU(),t.W),t.L)
for(q=0;q<100;++q)for(a=q!==0,a1=q!==99,p=0;p<40;++p)if(!a||!a1||p===0||p===39){c.D(0,B.b,q,p)
a0.D(0,B.p,q,p)}this.b.ca(a2.y,a2,a3.c)
for(a=a2.c,a1=this.a,o=a2.d,n=a2.r,b=b!==B.am,m=a2.f,q=0;q<100;++q)for(p=0;p<40;++p){l=J.N(c.a0(0,q,p),B.h)
k=c.a0(0,q,p)
k.toString
j=new A.k(q,p)
a1.ag()
i=r.h(0,j)
h=o.h(0,j)
g=a0.h(0,j)
i.b=j
i.c=k
i.sdT(o.h(0,j))
k=p*100+q
if(!(k<4000))return A.b(s,k)
f=s[k]
e=n.a0(0,q,p)
if(J.N(a.h(0,j),1))i.r=B.ce
else if(g!==B.p)switch(g){case B.K:if(m.h(0,j)===B.aP)i.f=B.T
else i.f=B.r
break
case B.af:i.f=B.G
break
case B.p:break
case B.b2:i.f=B.V
break
case B.ag:i.f=B.U
break
case B.cN:i.f=B.F
break
case B.X:i.f=B.S
if(e!=null)B.a.l(i.e,e)
break
case B.Y:i.f=B.Q
break
case B.b3:i.f=B.R
break
case B.b4:i.f=B.P
break
case B.ae:i.f=B.D
break}else if(l&&f<0.42&&h!==B.J&&b)i.f=B.F
if(e!=null)B.a.l(i.e,e)}return new A.iJ(r,a3)}}
A.hU.prototype={
$1(a){var s=A.c([],t.I)
return new A.bp(B.I,B.h,s)},
$S:13}
A.dl.prototype={
gm(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.ia.prototype={
c2(){var s,r,q,p,o,n=A.c([],t.b)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.l(n,o)}return n}}
A.aa.prototype={
k(a){return"Room{"+J.a7(this.a)+"; "+this.d.k(0)+"}"}}
A.eu.prototype={
bS(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.c([a],k),i=A.c([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.G(0,o))continue
q.l(0,o)
B.a.l(i,o)
for(n=0;n<8;++n){m=A.Y(o,B.ac[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.G(0,m)&&k.h(0,m)===B.h)B.a.l(j,m)}}B.a.l(this.b,i)}}
A.eB.prototype={
bH(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.O)s=B.aG
else if(a instanceof A.R)s=B.aE
else s=a instanceof A.an?B.aF:B.aH
B.a.l(r.a,a)
B.a.l(r.b,s)
B.a.l(r.c,b)
r.d+=b},
bG(a){return this.bH(a,10)},
dL(a){var s,r,q,p,o={},n=o.a=0,m=A.kS(this.c.length,new A.ix(o,this),t.i),l=a.ag()
for(s=m.length,r=l>-1;n<s;++n){q=m[n]
if(r&&l<=q){s=this.a
if(!(n<s.length))return A.b(s,n)
s=s[n]
if(s instanceof A.O)p=B.aG
else if(s instanceof A.R)p=B.aE
else if(s instanceof A.an)p=B.aF
else if(s instanceof A.i0)p=B.cb
else{J.c4(s)
p=B.aH}$.lt=$.lt+1
return new A.b0(s,p)}}throw A.e(A.aR(""))},
cj(a){var s,r,q=B.a.dC(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
ci(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p===0)return
B.a.j(r,q,p-2)
this.d-=2}}}
A.ix.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.b(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:37}
A.iV.prototype={}
A.is.prototype={
ca(a,b,c){var s,r,q
t.go.a(a)
s=new A.eB(A.c([],t.e3),A.c([],t.gr),A.c([],t.t))
r=s.gdk()
new A.aH(B.cn,t.bB.a(new A.it()),t.eL).A(0,r)
new A.aH(B.ck,t.aL.a(new A.iu()),t.fm).A(0,r)
new A.aH(B.cg,t.ei.a(new A.iv()),t.aC).A(0,r)
new A.aH(B.cf,t.gj.a(new A.iw()),t.dP).A(0,r)
s.bG(B.aq)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.C)(a),++q)this.cM(s,a[q],b)},
cM(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.aw(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.I
break}r=j.length
if(r!==0){r=l.v(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.v(k.gm(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.X||q===B.p
else r=!1
if(r)break;++i}if(s.F(0,B.I))return
p=a.dL(l)
n=p.b
if(!J.N(n,B.aq)){a.cj(n)
a.ci(p.c)
o.j(0,s,p)}}}
A.it.prototype={
$1(a){return t.eV.a(a).b<=1000},
$S:38}
A.iu.prototype={
$1(a){return t.bP.a(a).f<=1000},
$S:39}
A.iv.prototype={
$1(a){return t.e4.a(a).r<=1000},
$S:40}
A.iw.prototype={
$1(a){return t.fW.a(a).c<=1000},
$S:41}
A.iZ.prototype={
Y(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
cd(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
for(s=0;s<b0;++s)for(r=s*0.1,q=0;q<b1;++q){p=q*b0+s
o=q*0.1
n=B.c.ad(r)&255
m=B.c.ad(o)&255
l=B.c.ad(0.3)&255
k=r-Math.floor(r)
j=o-Math.floor(o)
i=0.3-Math.floor(0.3)
h=k*k*k*(k*(k*6-15)+10)
g=j*j*j*(j*(j*6-15)+10)
o=$.mC()
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
c=a8.Y(0,o[d],k,j,i)
if(!(a0<f))return A.b(o,a0)
a2=k-1
c+=h*(a8.Y(0,o[a0],a2,j,i)-c)
if(!(b<f))return A.b(o,b)
a3=j-1
a4=a8.Y(0,o[b],k,a3,i)
if(!(a1<f))return A.b(o,a1)
c+=g*(a4+h*(a8.Y(0,o[a1],a2,a3,i)-a4)-c)
a4=d+1
if(!(a4<f))return A.b(o,a4)
a5=i-1
a4=a8.Y(0,o[a4],k,j,a5)
a6=a0+1
if(!(a6<f))return A.b(o,a6)
a4+=h*(a8.Y(0,o[a6],a2,j,a5)-a4)
a6=b+1
if(!(a6<f))return A.b(o,a6)
a6=a8.Y(0,o[a6],k,a3,a5)
a7=a1+1
if(!(a7<f))return A.b(o,a7)
a5=a8.Y(0,o[a7],a2,a3,a5)
if(!(p<4000))return A.b(a9,p)
a9[p]=(c+i*i*i*(i*(i*6-15)+10)*(a4+g*(a6+h*(a5-a6)-a4)-c)+1)/2}}}
A.bk.prototype={
k(a){return"RuinOrientation."+this.b}}
A.dg.prototype={
k(a){return"RoomSizeKind."+this.b}}
A.j7.prototype={
ce(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a,a1=a0.v(5)
if(!(a1>=0&&a1<5))return A.b(B.aO,a1)
s=B.aO[a1]
r=a.bb(B.aX)
q=a.cU(s)
p=A.n8(a.bQ(a2,r,new A.k(B.c.E(Math.max(1,q.a-r.a/2)),B.c.E(Math.max(1,q.b-A.bT(r)/2)))))
a1=a2.y
B.a.l(a1,p)
for(o=t.q,n=0;n<2000;){m=new A.k(a0.v(98)+1,a0.v(38)+1)
l=[B.W,B.W,B.W,B.aW]
k=a0.v(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a.bb(l[k])
if(!a.dP(a2,r,m)){l=a.bQ(a2,r,m)
B.a.l(a1,new A.aa(l,A.c([],o),A.c([],o),A.ib(l)))}else ++n}for(a0=a.b,o=a2.d,l=a2.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.k(j,i)
o.D(0,B.J,j,i)
if(!a0.G(0,h))l.j(0,h,B.b)}g=A.b3(t.j,t.v)
for(a0=a1.length,o=a2.x,k=o.a,f=o.b,e=t.b,d=0;d<a1.length;a1.length===a0||(0,A.C)(a1),++d){c=a1[d]
B.a.l(k,c)
f.j(0,c,A.c([],e))
for(b=J.aU(c.a);b.n();)g.j(0,b.gp(b),c)}a.b3(p,a2,g,o)
for(a0=o.c2(),o=a0.length,d=0;d<a0.length;a0.length===o||(0,A.C)(a0),++d){c=a0[d]
B.a.L(a1,c)
for(k=J.aU(c.a);k.n();)l.j(0,k.gp(k),B.b)}A.ml(a1,a2)},
bb(a){var s
switch(a){case B.W:s=this.a
return new A.df(s.v(5)+5,s.v(5)+5)
case B.aW:s=this.a
return new A.df(s.v(10)+9,s.v(10)+9)
case B.aX:s=this.a
return new A.df(s.v(10)+20,s.v(10)+20)}},
cU(a){switch(a){case B.aY:return new A.k(50,10)
case B.aZ:return new A.k(50,30)
case B.b_:return new A.k(75,20)
case B.b0:return new A.k(25,20)
case B.b1:return new A.k(50,20)}},
bQ(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.c([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.k(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.l(0,d)
r.j(0,d,f?B.b:B.h)
if(!f)B.a.l(a,d)}return a},
dP(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.k(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.b||n.G(0,i))return!0}return!1}}
A.df.prototype={}
A.jg.prototype={
cS(a){var s,r,q=a.a.a===B.Z?B.ad:B.cM
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
cc(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.cS(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.ag()>0.6)r.j(0,new A.k(q,p),B.b)
new A.ed(b8).ba(10)
o=A.iE(t.j)
n=new A.eu(b8,A.c([],t.g2),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.k(k,j)
if(o.G(0,i)||r.h(0,i)===B.b)continue
n.bS(i)}o=n.b
B.a.ay(o,new A.jh())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.C)(h),++f)r.j(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.j(e,q,B.b4)
B.a.j(o,q,B.h)}$label0$1:for(o=b8.y,e=t.q,d=b8.d,c=0;c<3;){b=s.v(3)+5
a=s.v(3)+5
q=s.v(100-b)
p=s.v(40-a)
for(a0=q-1,a1=q+b,a2=a1+1,a3=p-1,a4=p+a,a5=a4+1;a0<a2;++a0)for(a6=a0>=0,a7=a0<m,a8=a3;a8<a5;++a8){i=new A.k(a0,a8)
if(!(a6&&a8>=0&&a7&&a8<l))continue $label0$1
if(g.h(0,i)!==B.p||r.h(0,i)!==B.h)continue $label0$1}a9=A.c([],e)
b0=A.c([],e)
for(a2=a1-1,a5=a4-1,a0=q;a0<a1;++a0)for(a6=a0-q!==0,a7=a0!==a2,a3=p;a3<a4;++a3){i=new A.k(a0,a3)
if(!a6||!a7||a3-p===0||a3===a5){r.j(0,i,B.b)
B.a.l(a9,i)}else B.a.l(b0,i)
d.j(0,i,B.J)}b1=new A.ji(b8)
B.a.ck(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.I
break}b3=a9[f]
b4=A.Y(b3,B.j)
b5=A.Y(b3,B.l)
b6=A.Y(b3,B.m)
b7=A.Y(b3,B.k)
if(A.X(b1.$1(b4))&&A.X(b1.$1(b5))){b2=b3
break}if(A.X(b1.$1(b6))&&A.X(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.C)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.h)
g.j(0,b2,B.K)
B.a.l(o,new A.aa(b0,A.c([],e),A.c([],e),A.ib(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.C)(o),++f)A.e_(o[f],$.kG(),b8)}}
A.jh.prototype={
$2(a,b){var s=t.fb
s.a(a)
return J.a7(s.a(b))-J.a7(a)},
$S:42}
A.ji.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.h&&s.e.h(0,a)===B.p},
$S:43}
A.jr.prototype={
cu(a){var s=t.eN.a(new A.js(this))
t.Z.a(null)
A.c_(a,"keydown",s,!1,t.cf)
A.c_(a,"mousemove",t.h2.a(new A.jt(this)),!1,t.V)}}
A.js.prototype={
$1(a){var s
t.cf.a(a)
s=$.od.h(0,a.key)
if(s!=null){a.preventDefault()
this.a.a.l(0,s)}else A.hE(":"+A.B(a.key)+":")},
$S:44}
A.jt.prototype={
$1(a){var s,r
t.V.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
this.a.b.l(0,A.c([s,r],t.n))},
$S:5}
A.aj.prototype={
k(a){return"InputCommand."+this.b}}
A.hI.prototype={
R(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="base",f="checkbox",e="click"
t.fQ.a(a)
s=document
h.b=t.cO.a(s.querySelector("#action_bar"))
for(r=h.c,q=t.do,p=q.i("~(1)?"),o=t.Z,q=q.c,n=0;n<3;++n){m=r[n]
l=s.createElement("button")
l.innerText=m
k=p.a(new A.hJ(h))
o.a(null)
A.c_(l,e,k,!1,q)
A.at(h.b,g).appendChild(l)}j=A.lr(f)
B.aD.sbO(j,!1)
r=p.a(new A.hK(a,j))
o.a(null)
A.c_(j,e,r,!1,q)
A.at(h.b,g).appendChild(s.createTextNode("Toggle Low Graphics"))
A.at(h.b,g).appendChild(j)
i=A.lr(f)
B.aD.sbO(i,!1)
A.c_(i,e,p.a(new A.hL(a,i)),!1,q)
A.at(h.b,g).appendChild(s.createTextNode("Toggle Light Culling"))
A.at(h.b,g).appendChild(i)}}
A.hJ.prototype={
$1(a){var s,r
t.V.a(a)
s=this.a.a
r=A.at(s.a,"_modal").style
r.display="none"
s=A.at(s.a,"_modal").style
s.display="block"},
$S:5}
A.hK.prototype={
$1(a){var s
t.V.a(a)
s=this.b.checked
s.toString
this.a.a=s},
$S:5}
A.hL.prototype={
$1(a){var s
t.V.a(a)
s=this.b.checked
s.toString
this.a.b=s},
$S:5}
A.iR.prototype={
cs(){var s,r=document.getElementById("myModal")
r.toString
this.a=r
r=window
s=t.h2.a(new A.iS(this))
t.Z.a(null)
A.c_(r,"click",s,!1,t.V)}}
A.iS.prototype={
$1(a){var s=this.a
if(A.o8(t.V.a(a).target)===A.at(s.a,"_modal")){s=A.at(s.a,"_modal").style
s.display="none"}},
$S:5};(function aliases(){var s=J.a.prototype
s.cm=s.k
s=J.bL.prototype
s.cn=s.k
s=A.ak.prototype
s.co=s.bV
s.cp=s.bW
s.cq=s.bX})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_1u,m=hunkHelpers.installInstanceTearOff
s(J.t.prototype,"gdi","l",30)
r(A,"ot","nd",11)
r(A,"oI","nI",7)
r(A,"oJ","nJ",7)
r(A,"oK","nK",7)
q(A,"m9","oC",0)
p(A,"oM","ow",12)
q(A,"oL","ov",0)
o(A.M.prototype,"gcH","a8",12)
p(A,"oQ","ob",48)
r(A,"oR","oc",11)
var l
n(l=A.ex.prototype,"gdw","aV",17)
n(l,"gbx","cX",10)
p(A,"pb","oB",49)
m(A.eB.prototype,"gdk",0,1,null,["$2","$1"],["bH","bG"],50,0,0)
p(A,"pg","oT",36)
r(A,"mh","pa",33)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.u,null)
q(A.u,[A.kP,J.a,J.cK,A.E,A.j9,A.i,A.b4,A.a1,A.ab,A.cb,A.bD,A.jn,A.iW,A.cV,A.dE,A.x,A.iC,A.d3,A.aF,A.fM,A.dK,A.dJ,A.fv,A.cM,A.fA,A.c0,A.M,A.fw,A.bU,A.b7,A.dF,A.fx,A.dp,A.fE,A.bu,A.hc,A.dO,A.dP,A.fT,A.dv,A.h,A.dh,A.a0,A.jA,A.eX,A.di,A.jC,A.cf,A.S,A.hf,A.fe,A.i2,A.kL,A.o,A.cW,A.fD,A.fQ,A.ez,A.z,A.T,A.dc,A.c5,A.hG,A.hF,A.aq,A.a9,A.aL,A.eM,A.hW,A.ex,A.b0,A.i0,A.O,A.iN,A.bh,A.R,A.cH,A.an,A.a8,A.e1,A.ef,A.e7,A.et,A.eo,A.ej,A.iI,A.bp,A.eG,A.k,A.iJ,A.iO,A.j5,A.en,A.ic,A.ag,A.bg,A.Q,A.ig,A.hj,A.jq,A.j1,A.cm,A.cY,A.bS,A.iY,A.i6,A.V,A.v,A.fy,A.ho,A.ip,A.j4,A.f8,A.W,A.iL,A.jk,A.f1,A.jv,A.jc,A.ed,A.im,A.aM,A.dn,A.cX,A.hT,A.dl,A.ia,A.aa,A.eu,A.eB,A.iV,A.is,A.iZ,A.df,A.jg,A.jr,A.hI,A.iR])
q(J.a,[J.cZ,J.d0,J.bL,J.t,J.ce,J.bK,A.bR,A.d,A.hH,A.ea,A.c8,A.aY,A.D,A.fC,A.aC,A.i5,A.i7,A.fF,A.cT,A.fH,A.i8,A.j,A.fK,A.ai,A.ir,A.fO,A.iG,A.iM,A.fU,A.fV,A.al,A.fW,A.fY,A.am,A.h1,A.h4,A.ao,A.h5,A.ap,A.ha,A.a2,A.hh,A.jl,A.ar,A.hk,A.jm,A.jp,A.hr,A.ht,A.hv,A.hx,A.hz,A.ax,A.fR,A.ay,A.h_,A.j_,A.hd,A.az,A.hm,A.hR,A.fz,A.ec,A.ew,A.f0,A.cl,A.b8,A.fn,A.fr,A.h8])
q(J.bL,[J.eZ,J.cp,J.b1])
r(J.iy,J.t)
q(J.ce,[J.d_,J.eC])
q(A.E,[A.d1,A.bq,A.eD,A.fp,A.f5,A.cL,A.fJ,A.eU,A.aV,A.fq,A.fo,A.b6,A.ei,A.el])
q(A.i,[A.m,A.bO,A.aH])
q(A.m,[A.aE,A.d2])
q(A.aE,[A.dj,A.d6])
r(A.cU,A.bO)
q(A.a1,[A.d5,A.dm])
q(A.cb,[A.cP,A.aZ])
q(A.bD,[A.il,A.eg,A.eh,A.fg,A.iA,A.kc,A.ke,A.jx,A.jw,A.k_,A.jG,A.jO,A.je,A.jU,A.jQ,A.iK,A.jB,A.ik,A.id,A.iT,A.ii,A.hP,A.hO,A.kg,A.jb,A.k4,A.io,A.hU,A.ix,A.it,A.iu,A.iv,A.iw,A.ji,A.js,A.jt,A.hJ,A.hK,A.hL,A.iS])
r(A.db,A.bq)
q(A.fg,[A.fc,A.c7])
r(A.fu,A.cL)
r(A.d4,A.x)
r(A.ak,A.d4)
q(A.eh,[A.iz,A.kd,A.k0,A.k3,A.jH,A.iD,A.iH,A.iP,A.iQ,A.j6,A.jd,A.hS,A.i_,A.hY,A.hZ,A.kp,A.kl,A.kn,A.kk,A.km,A.ko,A.kj,A.kt,A.jh])
r(A.ch,A.bR)
q(A.ch,[A.dx,A.dz])
r(A.dy,A.dx)
r(A.bQ,A.dy)
r(A.dA,A.dz)
r(A.d9,A.dA)
r(A.d8,A.bQ)
q(A.d9,[A.eO,A.eP,A.eQ,A.eR,A.eS,A.ci,A.eT])
r(A.dL,A.fJ)
q(A.eg,[A.jy,A.jz,A.jX,A.jW,A.jD,A.jK,A.jI,A.jF,A.jJ,A.jE,A.jN,A.jM,A.jL,A.jf,A.jV,A.jS,A.k2,A.jT,A.kx,A.kv,A.kw,A.ks,A.kq,A.kr,A.kA,A.ky,A.kz,A.kD,A.kB,A.kC,A.k7,A.k5,A.k6,A.iU,A.ij,A.hQ])
r(A.bX,A.fA)
r(A.ct,A.dF)
q(A.bU,[A.dG,A.dr])
r(A.br,A.dG)
r(A.cu,A.dp)
r(A.bY,A.fE)
r(A.aT,A.bu)
r(A.h3,A.dO)
q(A.ak,[A.jR,A.dt])
r(A.dB,A.dP)
r(A.du,A.dB)
q(A.aV,[A.cj,A.eA])
q(A.d,[A.q,A.er,A.ad,A.dC,A.ae,A.a_,A.dH,A.fs,A.cs,A.e9,A.bf])
q(A.q,[A.P,A.aK])
q(A.P,[A.p,A.l])
q(A.p,[A.e4,A.e5,A.eb,A.bB,A.cc,A.ev,A.cd,A.bI,A.bP,A.f6])
r(A.i1,A.aY)
r(A.cQ,A.fC)
q(A.aC,[A.i3,A.i4])
r(A.fG,A.fF)
r(A.cS,A.fG)
r(A.fI,A.fH)
r(A.em,A.fI)
r(A.ah,A.ea)
r(A.fL,A.fK)
r(A.eq,A.fL)
r(A.fP,A.fO)
r(A.bH,A.fP)
r(A.aS,A.j)
q(A.aS,[A.b2,A.ac])
r(A.eJ,A.fU)
r(A.eK,A.fV)
r(A.fX,A.fW)
r(A.eL,A.fX)
r(A.fZ,A.fY)
r(A.da,A.fZ)
r(A.h2,A.h1)
r(A.f_,A.h2)
r(A.f4,A.h4)
r(A.dD,A.dC)
r(A.f9,A.dD)
r(A.h6,A.h5)
r(A.fa,A.h6)
r(A.fd,A.ha)
r(A.hi,A.hh)
r(A.fh,A.hi)
r(A.dI,A.dH)
r(A.fi,A.dI)
r(A.hl,A.hk)
r(A.fk,A.hl)
r(A.cq,A.bP)
r(A.hs,A.hr)
r(A.fB,A.hs)
r(A.dq,A.cT)
r(A.hu,A.ht)
r(A.fN,A.hu)
r(A.hw,A.hv)
r(A.dw,A.hw)
r(A.hy,A.hx)
r(A.h7,A.hy)
r(A.hA,A.hz)
r(A.hg,A.hA)
r(A.bs,A.dr)
r(A.ds,A.b7)
r(A.fS,A.fR)
r(A.eE,A.fS)
r(A.h0,A.h_)
r(A.eV,A.h0)
r(A.he,A.hd)
r(A.ff,A.he)
r(A.hn,A.hm)
r(A.fl,A.hn)
r(A.e8,A.fz)
r(A.eW,A.bf)
r(A.h9,A.h8)
r(A.fb,A.h9)
q(A.a9,[A.bn,A.bo,A.ca,A.bl,A.f2,A.de,A.f3,A.be])
r(A.aX,A.z)
q(A.aX,[A.d7,A.eI])
q(A.jA,[A.bj,A.ey,A.aN,A.bi,A.aA,A.bE,A.cG,A.c6,A.eY,A.bF,A.co,A.c9,A.bV,A.a3,A.bN,A.bA,A.iF,A.U,A.cg,A.bC,A.aD,A.bW,A.bk,A.dg,A.aj])
q(A.j5,[A.i9,A.ih,A.eH,A.j8,A.ja,A.jj,A.ie])
q(A.ag,[A.fm,A.aP,A.cn,A.eF,A.dk,A.es,A.e6,A.cR])
q(A.im,[A.hX,A.j7])
q(A.aM,[A.ft,A.cI,A.dd])
q(A.ft,[A.ee,A.e3,A.ek,A.cF])
s(A.dx,A.h)
s(A.dy,A.ab)
s(A.dz,A.h)
s(A.dA,A.ab)
s(A.ct,A.fx)
s(A.dP,A.dh)
s(A.fC,A.i2)
s(A.fF,A.h)
s(A.fG,A.o)
s(A.fH,A.h)
s(A.fI,A.o)
s(A.fK,A.h)
s(A.fL,A.o)
s(A.fO,A.h)
s(A.fP,A.o)
s(A.fU,A.x)
s(A.fV,A.x)
s(A.fW,A.h)
s(A.fX,A.o)
s(A.fY,A.h)
s(A.fZ,A.o)
s(A.h1,A.h)
s(A.h2,A.o)
s(A.h4,A.x)
s(A.dC,A.h)
s(A.dD,A.o)
s(A.h5,A.h)
s(A.h6,A.o)
s(A.ha,A.x)
s(A.hh,A.h)
s(A.hi,A.o)
s(A.dH,A.h)
s(A.dI,A.o)
s(A.hk,A.h)
s(A.hl,A.o)
s(A.hr,A.h)
s(A.hs,A.o)
s(A.ht,A.h)
s(A.hu,A.o)
s(A.hv,A.h)
s(A.hw,A.o)
s(A.hx,A.h)
s(A.hy,A.o)
s(A.hz,A.h)
s(A.hA,A.o)
s(A.fR,A.h)
s(A.fS,A.o)
s(A.h_,A.h)
s(A.h0,A.o)
s(A.hd,A.h)
s(A.he,A.o)
s(A.hm,A.h)
s(A.hn,A.o)
s(A.fz,A.x)
s(A.h8,A.h)
s(A.h9,A.o)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{f:"int",G:"double",I:"num",r:"String",J:"bool",S:"Null",n:"List"},mangledNames:{},types:["~()","~(k,cX)","W()","aL()","n<b0>()","~(ac)","~(r,@)","~(~())","S()","~(bg)","~(a0)","f(u?)","~(u,aG)","bp(f)","~(j)","S(@)","J(f,f)","aO<~>(aj)","@(@,r)","~(r,r)","M<@>(@)","@(r)","J(@)","S(~())","~(f,@)","~(@,@)","~(n<G>)","J(u?)","~(fj)","S(b8)","~(u?)","f(f,f)","f(k)","~(I)","@(@)","f(aa,aa)","f(u?,u?)","G(f)","J(O)","J(R)","J(an)","J(a8)","f(n<k>,n<k>)","J(k)","~(b2)","~(@)","S(u,aG)","S(@,aG)","J(u?,u?)","f(W,W)","~(u[f])","~(u?,u?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.o0(v.typeUniverse,JSON.parse('{"eZ":"bL","cp":"bL","b1":"bL","pi":"j","pu":"j","pk":"bf","pj":"d","pC":"d","pF":"d","ph":"l","pv":"l","pm":"p","pw":"q","pt":"q","pE":"ac","pT":"a_","po":"aS","pn":"aK","pI":"aK","px":"bH","pp":"D","pq":"a2","pl":"bP","pB":"bQ","pA":"bR","cZ":{"J":[]},"d0":{"S":[]},"t":{"n":["1"],"m":["1"],"i":["1"]},"iy":{"t":["1"],"n":["1"],"m":["1"],"i":["1"]},"cK":{"a1":["1"]},"ce":{"G":[],"I":[],"af":["I"]},"d_":{"G":[],"f":[],"I":[],"af":["I"]},"eC":{"G":[],"I":[],"af":["I"]},"bK":{"r":[],"af":["r"]},"d1":{"E":[]},"m":{"i":["1"]},"aE":{"m":["1"],"i":["1"]},"dj":{"aE":["1"],"m":["1"],"i":["1"],"i.E":"1","aE.E":"1"},"b4":{"a1":["1"]},"bO":{"i":["2"],"i.E":"2"},"cU":{"bO":["1","2"],"m":["2"],"i":["2"],"i.E":"2"},"d5":{"a1":["2"]},"d6":{"aE":["2"],"m":["2"],"i":["2"],"i.E":"2","aE.E":"2"},"aH":{"i":["1"],"i.E":"1"},"dm":{"a1":["1"]},"cb":{"F":["1","2"]},"cP":{"cb":["1","2"],"F":["1","2"]},"aZ":{"cb":["1","2"],"F":["1","2"]},"db":{"bq":[],"E":[]},"eD":{"E":[]},"fp":{"E":[]},"dE":{"aG":[]},"bD":{"bG":[]},"eg":{"bG":[]},"eh":{"bG":[]},"fg":{"bG":[]},"fc":{"bG":[]},"c7":{"bG":[]},"f5":{"E":[]},"fu":{"E":[]},"ak":{"x":["1","2"],"iB":["1","2"],"F":["1","2"],"x.K":"1","x.V":"2"},"d2":{"m":["1"],"i":["1"],"i.E":"1"},"d3":{"a1":["1"]},"bR":{"as":[]},"ch":{"w":["1"],"as":[]},"bQ":{"h":["G"],"w":["G"],"n":["G"],"m":["G"],"as":[],"i":["G"],"ab":["G"],"h.E":"G"},"d9":{"h":["f"],"w":["f"],"n":["f"],"m":["f"],"as":[],"i":["f"],"ab":["f"]},"d8":{"h":["G"],"kN":[],"w":["G"],"n":["G"],"m":["G"],"as":[],"i":["G"],"ab":["G"],"h.E":"G"},"eO":{"h":["f"],"w":["f"],"n":["f"],"m":["f"],"as":[],"i":["f"],"ab":["f"],"h.E":"f"},"eP":{"h":["f"],"w":["f"],"n":["f"],"m":["f"],"as":[],"i":["f"],"ab":["f"],"h.E":"f"},"eQ":{"h":["f"],"w":["f"],"n":["f"],"m":["f"],"as":[],"i":["f"],"ab":["f"],"h.E":"f"},"eR":{"h":["f"],"w":["f"],"n":["f"],"m":["f"],"as":[],"i":["f"],"ab":["f"],"h.E":"f"},"eS":{"h":["f"],"w":["f"],"n":["f"],"m":["f"],"as":[],"i":["f"],"ab":["f"],"h.E":"f"},"ci":{"h":["f"],"nE":[],"w":["f"],"n":["f"],"m":["f"],"as":[],"i":["f"],"ab":["f"],"h.E":"f"},"eT":{"h":["f"],"nF":[],"w":["f"],"n":["f"],"m":["f"],"as":[],"i":["f"],"ab":["f"],"h.E":"f"},"dK":{"lJ":[]},"fJ":{"E":[]},"dL":{"bq":[],"E":[]},"M":{"aO":["1"]},"dJ":{"fj":[]},"cM":{"E":[]},"bX":{"fA":["1"]},"dF":{"lE":["1"],"lR":["1"],"bZ":["1"]},"ct":{"fx":["1"],"dF":["1"],"lE":["1"],"lR":["1"],"bZ":["1"]},"br":{"dG":["1"],"bU":["1"]},"cu":{"dp":["1"],"b7":["1"],"bZ":["1"]},"dp":{"b7":["1"],"bZ":["1"]},"dG":{"bU":["1"]},"bY":{"fE":["1"]},"aT":{"bu":["1"]},"dO":{"lM":[]},"h3":{"dO":[],"lM":[]},"jR":{"ak":["1","2"],"x":["1","2"],"iB":["1","2"],"F":["1","2"],"x.K":"1","x.V":"2"},"dt":{"ak":["1","2"],"x":["1","2"],"iB":["1","2"],"F":["1","2"],"x.K":"1","x.V":"2"},"du":{"dh":["1"],"lD":["1"],"m":["1"],"i":["1"]},"dv":{"a1":["1"]},"d4":{"x":["1","2"],"F":["1","2"]},"x":{"F":["1","2"]},"dB":{"dh":["1"],"lD":["1"],"m":["1"],"i":["1"]},"G":{"I":[],"af":["I"]},"a0":{"af":["a0"]},"f":{"I":[],"af":["I"]},"n":{"m":["1"],"i":["1"]},"I":{"af":["I"]},"r":{"af":["r"]},"cL":{"E":[]},"bq":{"E":[]},"eU":{"E":[]},"aV":{"E":[]},"cj":{"E":[]},"eA":{"E":[]},"fq":{"E":[]},"fo":{"E":[]},"b6":{"E":[]},"ei":{"E":[]},"eX":{"E":[]},"di":{"E":[]},"el":{"E":[]},"hf":{"aG":[]},"b2":{"j":[]},"ac":{"j":[]},"q":{"d":[]},"ad":{"d":[]},"ae":{"d":[]},"a_":{"d":[]},"p":{"P":[],"q":[],"d":[]},"e4":{"P":[],"q":[],"d":[]},"e5":{"P":[],"q":[],"d":[]},"eb":{"P":[],"q":[],"d":[]},"bB":{"P":[],"q":[],"d":[]},"aK":{"q":[],"d":[]},"cc":{"P":[],"q":[],"d":[]},"cS":{"h":["aQ<I>"],"o":["aQ<I>"],"n":["aQ<I>"],"w":["aQ<I>"],"m":["aQ<I>"],"i":["aQ<I>"],"o.E":"aQ<I>","h.E":"aQ<I>"},"cT":{"aQ":["I"]},"em":{"h":["r"],"o":["r"],"n":["r"],"w":["r"],"m":["r"],"i":["r"],"o.E":"r","h.E":"r"},"P":{"q":[],"d":[]},"eq":{"h":["ah"],"o":["ah"],"n":["ah"],"w":["ah"],"m":["ah"],"i":["ah"],"o.E":"ah","h.E":"ah"},"er":{"d":[]},"ev":{"P":[],"q":[],"d":[]},"bH":{"h":["q"],"o":["q"],"n":["q"],"w":["q"],"m":["q"],"i":["q"],"o.E":"q","h.E":"q"},"cd":{"P":[],"q":[],"d":[]},"bI":{"P":[],"q":[],"d":[]},"bP":{"P":[],"q":[],"d":[]},"eJ":{"x":["r","@"],"F":["r","@"],"x.K":"r","x.V":"@"},"eK":{"x":["r","@"],"F":["r","@"],"x.K":"r","x.V":"@"},"eL":{"h":["al"],"o":["al"],"n":["al"],"w":["al"],"m":["al"],"i":["al"],"o.E":"al","h.E":"al"},"da":{"h":["q"],"o":["q"],"n":["q"],"w":["q"],"m":["q"],"i":["q"],"o.E":"q","h.E":"q"},"f_":{"h":["am"],"o":["am"],"n":["am"],"w":["am"],"m":["am"],"i":["am"],"o.E":"am","h.E":"am"},"f4":{"x":["r","@"],"F":["r","@"],"x.K":"r","x.V":"@"},"f6":{"P":[],"q":[],"d":[]},"f9":{"h":["ad"],"o":["ad"],"n":["ad"],"w":["ad"],"d":[],"m":["ad"],"i":["ad"],"o.E":"ad","h.E":"ad"},"fa":{"h":["ao"],"o":["ao"],"n":["ao"],"w":["ao"],"m":["ao"],"i":["ao"],"o.E":"ao","h.E":"ao"},"fd":{"x":["r","r"],"F":["r","r"],"x.K":"r","x.V":"r"},"fh":{"h":["a_"],"o":["a_"],"n":["a_"],"w":["a_"],"m":["a_"],"i":["a_"],"o.E":"a_","h.E":"a_"},"fi":{"h":["ae"],"o":["ae"],"n":["ae"],"w":["ae"],"d":[],"m":["ae"],"i":["ae"],"o.E":"ae","h.E":"ae"},"fk":{"h":["ar"],"o":["ar"],"n":["ar"],"w":["ar"],"m":["ar"],"i":["ar"],"o.E":"ar","h.E":"ar"},"aS":{"j":[]},"cq":{"P":[],"q":[],"d":[]},"fs":{"d":[]},"cs":{"ju":[],"d":[]},"fB":{"h":["D"],"o":["D"],"n":["D"],"w":["D"],"m":["D"],"i":["D"],"o.E":"D","h.E":"D"},"dq":{"aQ":["I"]},"fN":{"h":["ai?"],"o":["ai?"],"n":["ai?"],"w":["ai?"],"m":["ai?"],"i":["ai?"],"o.E":"ai?","h.E":"ai?"},"dw":{"h":["q"],"o":["q"],"n":["q"],"w":["q"],"m":["q"],"i":["q"],"o.E":"q","h.E":"q"},"h7":{"h":["ap"],"o":["ap"],"n":["ap"],"w":["ap"],"m":["ap"],"i":["ap"],"o.E":"ap","h.E":"ap"},"hg":{"h":["a2"],"o":["a2"],"n":["a2"],"w":["a2"],"m":["a2"],"i":["a2"],"o.E":"a2","h.E":"a2"},"dr":{"bU":["1"]},"bs":{"dr":["1"],"bU":["1"]},"ds":{"b7":["1"]},"cW":{"a1":["1"]},"fD":{"ju":[],"d":[]},"fQ":{"nt":[]},"eE":{"h":["ax"],"o":["ax"],"n":["ax"],"m":["ax"],"i":["ax"],"o.E":"ax","h.E":"ax"},"eV":{"h":["ay"],"o":["ay"],"n":["ay"],"m":["ay"],"i":["ay"],"o.E":"ay","h.E":"ay"},"ff":{"h":["r"],"o":["r"],"n":["r"],"m":["r"],"i":["r"],"o.E":"r","h.E":"r"},"l":{"P":[],"q":[],"d":[]},"fl":{"h":["az"],"o":["az"],"n":["az"],"m":["az"],"i":["az"],"o.E":"az","h.E":"az"},"e8":{"x":["r","@"],"F":["r","@"],"x.K":"r","x.V":"@"},"e9":{"d":[]},"bf":{"d":[]},"eW":{"d":[]},"fb":{"h":["F<@,@>"],"o":["F<@,@>"],"n":["F<@,@>"],"m":["F<@,@>"],"i":["F<@,@>"],"o.E":"F<@,@>","h.E":"F<@,@>"},"c5":{"iq":[]},"aL":{"a9":[]},"bn":{"a9":[]},"bo":{"a9":[]},"ca":{"a9":[]},"bl":{"a9":[]},"f2":{"a9":[]},"de":{"a9":[]},"f3":{"a9":[]},"be":{"a9":[]},"aX":{"z":[]},"d7":{"aX":["f"],"z":[],"aX.T":"f"},"eI":{"aX":["f"],"z":[],"aX.T":"f"},"bp":{"iq":[]},"fm":{"ag":[]},"aP":{"ag":[]},"cn":{"ag":[]},"eF":{"ag":[]},"dk":{"ag":[]},"es":{"ag":[]},"e6":{"ag":[]},"cR":{"ag":[]},"bS":{"af":["bS"]},"f8":{"nz":[]},"ft":{"aM":["k"]},"cI":{"aM":["1"]},"dd":{"aM":["1"]},"ee":{"aM":["k"]},"e3":{"aM":["k"]},"ek":{"aM":["k"]},"cF":{"aM":["k"]},"kN":{"n":["G"],"m":["G"],"i":["G"],"as":[]}}'))
A.o_(v.typeUniverse,JSON.parse('{"m":1,"ch":1,"d4":2,"dB":1,"dP":1}'))
var u={h:"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",q:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",p:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",l:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",k:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x , u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n\n    float dist = distance(snapped_position, (u_source_position + vec2(0.5, 0.5)) * u_block_size) / 50.0;\n    if (dist > u_source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, u_source_strength, dist);\n    outColor = vec4(u_source_color.rgb * scale, scale);\n}\n",f:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // front and back textures are already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 front = texture(u_light_texture, d);\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.av
return{a7:s("@<~>"),eV:s("O"),fW:s("a8"),u:s("cM"),E:s("bB"),d_:s("af<u?>"),g5:s("D"),cO:s("cc"),d:s("a0"),gw:s("m<@>"),v:s("aa"),fQ:s("en"),cZ:s("bF"),bU:s("E"),aD:s("j"),c8:s("ah"),J:s("kN"),b8:s("bG"),f:s("aO<@>"),m:s("aZ<f,z>"),aE:s("T<bN>"),dl:s("T<bV>"),gg:s("T<a3>"),L:s("T<bp>"),h5:s("T<co>"),cL:s("T<G>"),b1:s("T<b0?>"),fS:s("cd"),O:s("aj"),gk:s("bI"),hf:s("i<@>"),g:s("t<c5>"),e:s("t<c6>"),G:s("t<V>"),a:s("t<a9>"),f_:s("t<bg>"),Q:s("t<ej>"),X:s("t<aD>"),b:s("t<aa>"),w:s("t<ag>"),cd:s("t<iq>"),eU:s("t<aj>"),Y:s("t<cY>"),I:s("t<b0>"),gr:s("t<bj>"),g2:s("t<n<k>>"),e3:s("t<u>"),dV:s("t<eY>"),q:s("t<k>"),eP:s("t<f1>"),dG:s("t<cm>"),s:s("t<r>"),ap:s("t<dl>"),o:s("t<v>"),B:s("t<aA>"),D:s("t<dn>"),n:s("t<G>"),gn:s("t<@>"),t:s("t<f>"),c6:s("t<~(a0)>"),T:s("d0"),cj:s("b1"),aU:s("w<@>"),cf:s("b2"),bG:s("ax"),l:s("n<c5>"),go:s("n<aa>"),fb:s("n<k>"),dg:s("n<G>"),ad:s("bN"),e8:s("F<k,aa>"),d1:s("F<r,@>"),eO:s("F<@,@>"),bP:s("R"),cI:s("al"),V:s("ac"),R:s("q"),P:s("S"),ck:s("ay"),K:s("u"),ae:s("bS"),he:s("am"),j:s("k"),e4:s("an"),U:s("aQ<I>"),cl:s("cl"),fY:s("ad"),f7:s("ao"),gf:s("ap"),d8:s("W"),k:s("aG"),N:s("r"),cP:s("a2"),d0:s("bV"),gQ:s("a3"),a0:s("ae"),c7:s("a_"),dy:s("b8"),W:s("bp"),a5:s("co"),aF:s("fj"),aK:s("ar"),cM:s("az"),aO:s("dl"),dd:s("lJ"),eK:s("bq"),ak:s("as"),bI:s("cp"),dz:s("cq"),eL:s("aH<O>"),dP:s("aH<a8>"),fm:s("aH<R>"),aC:s("aH<an>"),h0:s("dn"),ci:s("ju"),f0:s("bX<b8>"),ez:s("bX<~>"),f2:s("fy"),h:s("bs<j>"),do:s("bs<ac>"),du:s("M<b8>"),c:s("M<@>"),fJ:s("M<f>"),dS:s("M<~>"),fv:s("hb<u?>"),dR:s("hj"),gz:s("ho"),cJ:s("J"),bB:s("J(O)"),gj:s("J(a8)"),aL:s("J(R)"),al:s("J(u)"),ei:s("J(an)"),i:s("G"),z:s("@"),fO:s("@()"),y:s("@(u)"),C:s("@(u,aG)"),S:s("f"),aw:s("0&*"),_:s("u*"),ch:s("d?"),eH:s("aO<S>?"),g7:s("ai?"),p:s("b0?"),r:s("u?"),F:s("c0<@,@>?"),br:s("fT?"),bw:s("@(j)?"),Z:s("~()?"),eN:s("~(b2)?"),h2:s("~(ac)?"),di:s("I"),H:s("~"),M:s("~()"),x:s("~(a0)"),b7:s("~(ag)"),d5:s("~(u)"),da:s("~(u,aG)"),eA:s("~(r,r)"),A:s("~(r,@)"),cB:s("~(fj)"),c4:s("~(I)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.u=A.bB.prototype
B.bA=A.c8.prototype
B.aD=A.bI.prototype
B.ca=J.a.prototype
B.a=J.t.prototype
B.cc=J.cZ.prototype
B.d=J.d_.prototype
B.c=J.ce.prototype
B.H=J.bK.prototype
B.cd=J.b1.prototype
B.cG=A.d8.prototype
B.cH=A.ci.prototype
B.aV=J.eZ.prototype
B.e=A.cl.prototype
B.ai=J.cp.prototype
B.b8=A.cs.prototype
B.ag=new A.a3("table")
B.b9=new A.cF(B.ag)
B.Y=new A.a3("bookshelf")
B.ba=new A.cF(B.Y)
B.bh=new A.O("",0,0,0,99)
B.Z=new A.bA("surface")
B.x=new A.bA("caves")
B.bp=new A.bA("ruins")
B.am=new A.bA("village")
B.an=new A.bA("snow")
B.bq=new A.e3()
B.d0=new A.cI(A.av("cI<k>"))
B.a_=new A.ee()
B.a0=new A.ek()
B.ao=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.br=function() {
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
B.bw=function(getTagFallback) {
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
B.bs=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bt=function(hooks) {
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
B.bv=function(hooks) {
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
B.bu=function(hooks) {
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
B.ap=function(hooks) { return hooks; }

B.aq=new A.iV()
B.bx=new A.dd(A.av("dd<k>"))
B.by=new A.eX()
B.t=new A.j9()
B.q=new A.fQ()
B.o=new A.h3()
B.bz=new A.hf()
B.ar=new A.bC("north")
B.as=new A.bC("south")
B.at=new A.bC("east")
B.au=new A.bC("west")
B.bB=new A.c9("none")
B.bC=new A.c9("ignoreAgents")
B.bD=new A.c9("ignoreAgentsAndUnlockedDoors")
B.a1=new A.c9("normal")
B.c1=new A.aN("acid")
B.av=new A.aN("cold")
B.aw=new A.aN("electricity")
B.M=new A.aN("fire")
B.c2=new A.aN("sonic")
B.N=new A.aN("bludgeoning")
B.a2=new A.aN("piercing")
B.ax=new A.aN("slashing")
B.ay=new A.bi("d3")
B.O=new A.bi("d4")
B.y=new A.bi("d6")
B.a3=new A.bi("d8")
B.az=new A.bi("d12")
B.aA=new A.bi("d20")
B.z=new A.aD("se")
B.A=new A.aD("ne")
B.B=new A.aD("sw")
B.C=new A.aD("nw")
B.j=new A.aD("n")
B.k=new A.aD("e")
B.l=new A.aD("s")
B.m=new A.aD("w")
B.c3=new A.a0(0)
B.c4=new A.a0(15e4)
B.c5=new A.a0(8000)
B.a4=new A.aj("north")
B.a5=new A.aj("east")
B.a6=new A.aj("south")
B.a7=new A.aj("west")
B.c9=new A.aj("skip")
B.aB=new A.aj("fire")
B.aC=new A.aj("activate")
B.a8=new A.U("none")
B.a9=new A.U("stairsUp")
B.P=new A.U("tree")
B.Q=new A.U("bookshelf")
B.R=new A.U("mechanism")
B.aa=new A.U("activatedMechanism")
B.S=new A.U("chest")
B.D=new A.U("mechanicalLight")
B.ab=new A.U("stairsDown")
B.r=new A.U("door")
B.E=new A.U("openDoor")
B.T=new A.U("lockedDoor")
B.F=new A.U("grass")
B.G=new A.U("torch")
B.U=new A.U("table")
B.V=new A.U("chair")
B.aE=new A.bj("melee")
B.aF=new A.bj("ranged")
B.aG=new A.bj("armor")
B.aH=new A.bj("other")
B.cb=new A.bj("corpse")
B.ce=new A.iF("water")
B.aj=new A.c6("light")
B.ak=new A.c6("heavy")
B.al=new A.c6("powered")
B.dj=A.c(s([B.aj,B.ak,B.al]),t.e)
B.bb=new A.a8(1)
B.bc=new A.a8(1)
B.bd=new A.a8(1)
B.be=new A.a8(1)
B.df=A.c(s([B.al]),t.e)
B.bf=new A.a8(2)
B.dg=A.c(s([B.aj,B.ak]),t.e)
B.bg=new A.a8(2)
B.cf=A.c(s([B.bb,B.bc,B.bd,B.be,B.bf,B.bg]),A.av("t<a8>"))
B.aI=A.c(s([24,36]),t.n)
B.dd=new A.ey("oneHand")
B.dc=new A.bE("staggered")
B.d1=new A.bh()
B.cS=new A.aA("stun")
B.b7=new A.aA("powered")
B.cj=A.c(s([B.cS,B.b7]),t.B)
B.cW=new A.cG("charge")
B.cY=new A.cH()
B.cK=new A.an("Zero pistol",B.av,B.y,5)
B.d8=new A.bE("none")
B.d2=new A.bh()
B.L=new A.aA("analog")
B.dh=A.c(s([B.L]),t.B)
B.cX=new A.cG("rounds")
B.cZ=new A.cH()
B.cL=new A.an("Tac Pistol",B.a2,B.y,1)
B.db=new A.bE("burn")
B.d3=new A.bh()
B.cT=new A.aA("line")
B.cU=new A.aA("unwieldy")
B.di=A.c(s([B.cT,B.cU]),t.B)
B.cV=new A.cG("petro")
B.d_=new A.cH()
B.cJ=new A.an("Flame Rifle",B.M,B.a3,2)
B.cg=A.c(s([B.cK,B.cL,B.cJ]),A.av("t<an>"))
B.ch=A.c(s([B.ar,B.as,B.at,B.au]),A.av("t<bC>"))
B.ac=A.c(s([B.z,B.A,B.B,B.C,B.j,B.k,B.l,B.m]),t.X)
B.aJ=A.c(s([B.j,B.l]),t.X)
B.aK=A.c(s([B.k,B.m]),t.X)
B.b5=new A.aA("archaic")
B.co=A.c(s([B.b5,B.L]),t.B)
B.cC=new A.R(B.N,1,B.y,0,"Club",B.co)
B.cR=new A.aA("operative")
B.aM=A.c(s([B.L,B.cR]),t.B)
B.cz=new A.R(B.N,1,B.O,1,"Tactical Baton",B.aM)
B.cA=new A.R(B.ax,1,B.O,1,"Survival Knife",B.aM)
B.de=new A.ey("twoHand")
B.b6=new A.aA("block")
B.ci=A.c(s([B.L,B.b6]),t.B)
B.cw=new A.R(B.a2,1,B.y,1,"Tactical Spear",B.ci)
B.d4=new A.bh()
B.aL=A.c(s([B.b7]),t.B)
B.d7=new A.iN()
B.cB=new A.R(B.M,2,B.O,7,"Flame Sword",B.aL)
B.da=new A.bE("wound")
B.d5=new A.bh()
B.cy=new A.R(B.M,2,B.a3,9,"Plasma Sword",B.aL)
B.d9=new A.bE("arc")
B.d6=new A.bh()
B.cv=new A.R(B.aw,1,B.az,8,"Shock Staff",B.cj)
B.ck=A.c(s([B.cC,B.cz,B.cA,B.cw,B.cB,B.cy,B.cv]),A.av("t<R>"))
B.v=A.c(s([-1,3,-1,-1,3,-1]),t.n)
B.aN=A.c(s([]),t.Q)
B.cl=A.c(s([]),t.X)
B.i=A.c(s([]),t.w)
B.bn=new A.O("Second Skin",1,1,2,5)
B.bo=new A.O("Estex Suit I",1,0,1,5)
B.bk=new A.O("Flight Suit",1,0,1,6)
B.bl=new A.O("Freebooter Armor I",2,2,3,4)
B.bi=new A.O("Kasatha microcord I",2,1,3,3)
B.bj=new A.O("Ceremonial Plate",1,1,3,2)
B.bm=new A.O("Golemforged Plating",1,2,5,0)
B.cn=A.c(s([B.bn,B.bo,B.bk,B.bl,B.bi,B.bj,B.bm]),A.av("t<O>"))
B.aY=new A.bk("north")
B.aZ=new A.bk("south")
B.b_=new A.bk("east")
B.b0=new A.bk("west")
B.b1=new A.bk("center")
B.aO=A.c(s([B.aY,B.aZ,B.b_,B.b0,B.b1]),A.av("t<bk>"))
B.aP=new A.bN("lockedDoor")
B.cq=new A.bN("doorMechanism")
B.aQ=new A.bN("none")
B.c8=new A.bF("armor")
B.c6=new A.bF("primaryMelee")
B.c7=new A.bF("primaryRanged")
B.aR=new A.aZ([B.c8,null,B.c6,null,B.c7,null],A.av("aZ<bF,b0?>"))
B.cm=A.c(s([]),t.s)
B.dk=new A.cP(0,{},B.cm,A.av("cP<r,@>"))
B.bI=new A.z(4290377418)
B.bG=new A.z(4285132974)
B.bF=new A.z(4278249078)
B.bE=new A.z(4278241363)
B.ct=new A.aZ([100,B.bI,200,B.bG,400,B.bF,700,B.bE],t.m)
B.cu=new A.eI(B.ct,4285132974)
B.c0=new A.z(4294966759)
B.c_=new A.z(4294965700)
B.bZ=new A.z(4294964637)
B.bY=new A.z(4294963574)
B.bX=new A.z(4294962776)
B.bV=new A.z(4294961979)
B.bT=new A.z(4294826037)
B.bS=new A.z(4294688813)
B.bR=new A.z(4294551589)
B.bQ=new A.z(4294278935)
B.cr=new A.aZ([50,B.c0,100,B.c_,200,B.bZ,300,B.bY,400,B.bX,500,B.bV,600,B.bT,700,B.bS,800,B.bR,900,B.bQ],t.m)
B.aS=new A.d7(B.cr,4294961979)
B.bW=new A.z(4294962158)
B.bU=new A.z(4294954450)
B.bO=new A.z(4293892762)
B.bM=new A.z(4293227379)
B.bN=new A.z(4293874512)
B.bP=new A.z(4294198070)
B.bL=new A.z(4293212469)
B.bK=new A.z(4292030255)
B.bJ=new A.z(4291176488)
B.bH=new A.z(4290190364)
B.cs=new A.aZ([50,B.bW,100,B.bU,200,B.bO,300,B.bM,400,B.bN,500,B.bP,600,B.bL,700,B.bK,800,B.bJ,900,B.bH],t.m)
B.aT=new A.d7(B.cs,4294198070)
B.cQ=new A.aA("nonlethal")
B.cp=A.c(s([B.b5,B.cQ,B.L]),t.B)
B.cx=new A.R(B.N,1,B.ay,0,"Fists",B.cp)
B.aU=new A.cg("wildBoar")
B.cD=new A.cg("zyborgMelee")
B.cE=new A.cg("zyborgRanged")
B.cF=new A.cg("caveScanner")
B.cI=new A.eY("elementalAffinity")
B.I=new A.k(0,0)
B.W=new A.dg("small")
B.aW=new A.dg("medium")
B.aX=new A.dg("large")
B.ad=new A.bV("dirt")
B.J=new A.bV("metal")
B.cM=new A.bV("snow")
B.K=new A.a3("door")
B.cN=new A.a3("grass")
B.ae=new A.a3("mechanicalLight")
B.af=new A.a3("light")
B.p=new A.a3("none")
B.b2=new A.a3("chair")
B.X=new A.a3("chest")
B.b3=new A.a3("mechanism")
B.b4=new A.a3("tree")
B.h=new A.co("floor")
B.b=new A.co("wall")
B.cO=A.pf("u")
B.w=new A.bW("float_1")
B.f=new A.bW("float_2")
B.cP=new A.bW("float_3")
B.ah=new A.bW("float_4")
B.n=new A.bW("texture_1")})();(function staticFields(){$.jP=null
$.aW=0
$.cN=null
$.ln=null
$.md=null
$.m7=null
$.mj=null
$.k9=null
$.kf=null
$.la=null
$.cz=null
$.dT=null
$.dU=null
$.l5=!1
$.H=B.o
$.au=A.c([],t.e3)
$.lt=0
$.od=A.bM(["ArrowUp",B.a4,"ArrowDown",B.a6,"ArrowRight",B.a5,"ArrowLeft",B.a7,"q",B.aB," ",B.aC],t.N,t.O)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"pr","mo",function(){return A.oV("_$dart_dartClosure")})
s($,"pJ","ms",function(){return A.b9(A.jo({
toString:function(){return"$receiver$"}}))})
s($,"pK","mt",function(){return A.b9(A.jo({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"pL","mu",function(){return A.b9(A.jo(null))})
s($,"pM","mv",function(){return A.b9(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"pP","my",function(){return A.b9(A.jo(void 0))})
s($,"pQ","mz",function(){return A.b9(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"pO","mx",function(){return A.b9(A.lK(null))})
s($,"pN","mw",function(){return A.b9(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"pS","mB",function(){return A.b9(A.lK(void 0))})
s($,"pR","mA",function(){return A.b9(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"pU","ld",function(){return A.nH()})
s($,"q4","kF",function(){return A.ki(B.cO)})
s($,"pz","mr",function(){return A.c([$.mN(),$.mP(),$.mQ(),$.mE(),$.mL()],A.av("t<eM>"))})
s($,"qp","mN",function(){return A.eN(A.e2(4,6,8,4,4,8),new A.kv(),B.Z,"death_1.mp3",new A.kw(),B.aU,0,4,"Wild Boar",new A.kx())})
s($,"qn","mL",function(){return A.eN(A.e2(4,6,8,4,4,10),new A.kq(),B.an,"death_1.mp3",new A.kr(),B.aU,2,4,"Snow Bear",new A.ks())})
s($,"qr","mP",function(){return A.eN(A.e2(4,8,8,4,4,10),new A.ky(),B.x,"monster_scream_1.mp3",new A.kz(),B.cD,1,6,"Zyborg",new A.kA())})
s($,"qs","mQ",function(){return A.eN(A.e2(4,8,10,4,4,10),new A.kB(),B.x,"monster_scream_1.mp3",new A.kC(),B.cE,2,6,"Zyborg Ranged",new A.kD())})
s($,"q7","mE",function(){return A.eN(A.e2(4,6,12,6,4,6),new A.k5(),B.x,null,new A.k6(),B.cF,3,6,"Cave Scanner",new A.k7())})
s($,"pD","kE",function(){return new A.iY()})
s($,"ps","mp",function(){return A.j2()})
s($,"py","mq",function(){var r=A.kI(4278780675)
return new A.iL(A.kI(4279308561),A.kI(4280361249),r)})
s($,"q6","mD",function(){return A.j2()})
s($,"ql","li",function(){return A.cr(B.a_,new A.kp())})
s($,"qh","lg",function(){return A.cr(B.b9,new A.kl())})
s($,"qj","e0",function(){return A.cr(B.a0,new A.kn())})
s($,"qg","mJ",function(){return A.cr(B.a_,new A.kk())})
s($,"qi","mK",function(){return A.cr(B.a_,new A.km())})
s($,"qk","lh",function(){return A.cr(B.a0,new A.ko())})
s($,"qf","mI",function(){return A.cr(B.bx,new A.kj())})
s($,"qe","kG",function(){var r=$.li(),q=$.lg()
return A.c([r,q,q,$.e0()],t.D)})
s($,"qd","mH",function(){var r=$.mI()
return A.c([r,r,r,r,r,$.e0(),$.li(),$.lg()],t.D)})
s($,"qc","mG",function(){var r=$.e0()
return A.c([r,r,r,r],t.D)})
s($,"qb","mF",function(){var r=$.e0(),q=$.mJ()
return A.c([r,r,r,r,r,r,q,q,q,q],t.D)})
s($,"qo","mM",function(){return A.c([$.mK(),$.e0()],t.D)})
s($,"q5","mC",function(){return new Uint8Array(A.cx(A.c([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t)))})
s($,"qq","mO",function(){var r,q,p=null,o=A.c([],t.I)
o=A.na(A.nn(B.aR,t.cZ,t.p),o)
r=A.c([],t.dV)
q=A.c([],A.av("t<pG>"))
q=A.kH(p,A.n_(new A.e1(10,10),A.c([],t.Q),20,o,0,A.nc("J","he"),0,20,0,r,0,q,0),0,p,p,!1,!0,A.nA(1,1,0,4,p))
r=A.j2()
return new A.jv(q,A.oN(new A.hT(A.j2(),new A.is(r)).c9(new A.iI(B.x,!1,1))))})
s($,"qa","lf",function(){return t.cl.a(B.u.b7(t.E.a(A.ka().querySelector("#glCanvas")),"webgl2"))})
s($,"qm","lj",function(){return new A.en()})
s($,"q9","le",function(){var r=t.E
return A.n9($.mO(),r.a(A.ka().querySelector("#glCanvas")),$.lf(),$.lj(),r.a(A.ka().querySelector("#text")),A.av("c8").a(B.u.b7(r.a(A.ka().querySelector("#text")),"2d")))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:A.bR,ArrayBufferView:A.bR,Float64Array:A.bQ,Float32Array:A.d8,Int16Array:A.eO,Int32Array:A.eP,Int8Array:A.eQ,Uint16Array:A.eR,Uint32Array:A.eS,Uint8ClampedArray:A.ci,CanvasPixelArray:A.ci,Uint8Array:A.eT,HTMLBRElement:A.p,HTMLBaseElement:A.p,HTMLButtonElement:A.p,HTMLContentElement:A.p,HTMLDListElement:A.p,HTMLDataElement:A.p,HTMLDataListElement:A.p,HTMLDetailsElement:A.p,HTMLDialogElement:A.p,HTMLEmbedElement:A.p,HTMLFieldSetElement:A.p,HTMLHRElement:A.p,HTMLHeadElement:A.p,HTMLHeadingElement:A.p,HTMLHtmlElement:A.p,HTMLIFrameElement:A.p,HTMLLIElement:A.p,HTMLLabelElement:A.p,HTMLLegendElement:A.p,HTMLLinkElement:A.p,HTMLMapElement:A.p,HTMLMenuElement:A.p,HTMLMetaElement:A.p,HTMLMeterElement:A.p,HTMLModElement:A.p,HTMLOListElement:A.p,HTMLObjectElement:A.p,HTMLOptGroupElement:A.p,HTMLOptionElement:A.p,HTMLOutputElement:A.p,HTMLParagraphElement:A.p,HTMLParamElement:A.p,HTMLPictureElement:A.p,HTMLPreElement:A.p,HTMLProgressElement:A.p,HTMLQuoteElement:A.p,HTMLScriptElement:A.p,HTMLShadowElement:A.p,HTMLSlotElement:A.p,HTMLSourceElement:A.p,HTMLSpanElement:A.p,HTMLStyleElement:A.p,HTMLTableCaptionElement:A.p,HTMLTableCellElement:A.p,HTMLTableDataCellElement:A.p,HTMLTableHeaderCellElement:A.p,HTMLTableColElement:A.p,HTMLTableElement:A.p,HTMLTableRowElement:A.p,HTMLTableSectionElement:A.p,HTMLTemplateElement:A.p,HTMLTextAreaElement:A.p,HTMLTimeElement:A.p,HTMLTitleElement:A.p,HTMLTrackElement:A.p,HTMLUListElement:A.p,HTMLUnknownElement:A.p,HTMLDirectoryElement:A.p,HTMLFontElement:A.p,HTMLFrameElement:A.p,HTMLFrameSetElement:A.p,HTMLMarqueeElement:A.p,HTMLElement:A.p,AccessibleNodeList:A.hH,HTMLAnchorElement:A.e4,HTMLAreaElement:A.e5,Blob:A.ea,HTMLBodyElement:A.eb,HTMLCanvasElement:A.bB,CanvasRenderingContext2D:A.c8,CDATASection:A.aK,CharacterData:A.aK,Comment:A.aK,ProcessingInstruction:A.aK,Text:A.aK,CSSPerspective:A.i1,CSSCharsetRule:A.D,CSSConditionRule:A.D,CSSFontFaceRule:A.D,CSSGroupingRule:A.D,CSSImportRule:A.D,CSSKeyframeRule:A.D,MozCSSKeyframeRule:A.D,WebKitCSSKeyframeRule:A.D,CSSKeyframesRule:A.D,MozCSSKeyframesRule:A.D,WebKitCSSKeyframesRule:A.D,CSSMediaRule:A.D,CSSNamespaceRule:A.D,CSSPageRule:A.D,CSSRule:A.D,CSSStyleRule:A.D,CSSSupportsRule:A.D,CSSViewportRule:A.D,CSSStyleDeclaration:A.cQ,MSStyleCSSProperties:A.cQ,CSS2Properties:A.cQ,CSSImageValue:A.aC,CSSKeywordValue:A.aC,CSSNumericValue:A.aC,CSSPositionValue:A.aC,CSSResourceValue:A.aC,CSSUnitValue:A.aC,CSSURLImageValue:A.aC,CSSStyleValue:A.aC,CSSMatrixComponent:A.aY,CSSRotation:A.aY,CSSScale:A.aY,CSSSkew:A.aY,CSSTranslation:A.aY,CSSTransformComponent:A.aY,CSSTransformValue:A.i3,CSSUnparsedValue:A.i4,DataTransferItemList:A.i5,HTMLDivElement:A.cc,DOMException:A.i7,ClientRectList:A.cS,DOMRectList:A.cS,DOMRectReadOnly:A.cT,DOMStringList:A.em,DOMTokenList:A.i8,Element:A.P,AbortPaymentEvent:A.j,AnimationEvent:A.j,AnimationPlaybackEvent:A.j,ApplicationCacheErrorEvent:A.j,BackgroundFetchClickEvent:A.j,BackgroundFetchEvent:A.j,BackgroundFetchFailEvent:A.j,BackgroundFetchedEvent:A.j,BeforeInstallPromptEvent:A.j,BeforeUnloadEvent:A.j,BlobEvent:A.j,CanMakePaymentEvent:A.j,ClipboardEvent:A.j,CloseEvent:A.j,CustomEvent:A.j,DeviceMotionEvent:A.j,DeviceOrientationEvent:A.j,ErrorEvent:A.j,ExtendableEvent:A.j,ExtendableMessageEvent:A.j,FetchEvent:A.j,FontFaceSetLoadEvent:A.j,ForeignFetchEvent:A.j,GamepadEvent:A.j,HashChangeEvent:A.j,InstallEvent:A.j,MediaEncryptedEvent:A.j,MediaKeyMessageEvent:A.j,MediaQueryListEvent:A.j,MediaStreamEvent:A.j,MediaStreamTrackEvent:A.j,MessageEvent:A.j,MIDIConnectionEvent:A.j,MIDIMessageEvent:A.j,MutationEvent:A.j,NotificationEvent:A.j,PageTransitionEvent:A.j,PaymentRequestEvent:A.j,PaymentRequestUpdateEvent:A.j,PopStateEvent:A.j,PresentationConnectionAvailableEvent:A.j,PresentationConnectionCloseEvent:A.j,ProgressEvent:A.j,PromiseRejectionEvent:A.j,PushEvent:A.j,RTCDataChannelEvent:A.j,RTCDTMFToneChangeEvent:A.j,RTCPeerConnectionIceEvent:A.j,RTCTrackEvent:A.j,SecurityPolicyViolationEvent:A.j,SensorErrorEvent:A.j,SpeechRecognitionError:A.j,SpeechRecognitionEvent:A.j,SpeechSynthesisEvent:A.j,StorageEvent:A.j,SyncEvent:A.j,TrackEvent:A.j,TransitionEvent:A.j,WebKitTransitionEvent:A.j,VRDeviceEvent:A.j,VRDisplayEvent:A.j,VRSessionEvent:A.j,MojoInterfaceRequestEvent:A.j,ResourceProgressEvent:A.j,USBConnectionEvent:A.j,IDBVersionChangeEvent:A.j,AudioProcessingEvent:A.j,OfflineAudioCompletionEvent:A.j,WebGLContextEvent:A.j,Event:A.j,InputEvent:A.j,SubmitEvent:A.j,AbsoluteOrientationSensor:A.d,Accelerometer:A.d,AccessibleNode:A.d,AmbientLightSensor:A.d,Animation:A.d,ApplicationCache:A.d,DOMApplicationCache:A.d,OfflineResourceList:A.d,BackgroundFetchRegistration:A.d,BatteryManager:A.d,BroadcastChannel:A.d,CanvasCaptureMediaStreamTrack:A.d,DedicatedWorkerGlobalScope:A.d,EventSource:A.d,FileReader:A.d,FontFaceSet:A.d,Gyroscope:A.d,XMLHttpRequest:A.d,XMLHttpRequestEventTarget:A.d,XMLHttpRequestUpload:A.d,LinearAccelerationSensor:A.d,Magnetometer:A.d,MediaDevices:A.d,MediaKeySession:A.d,MediaQueryList:A.d,MediaRecorder:A.d,MediaSource:A.d,MediaStream:A.d,MediaStreamTrack:A.d,MessagePort:A.d,MIDIAccess:A.d,MIDIInput:A.d,MIDIOutput:A.d,MIDIPort:A.d,NetworkInformation:A.d,Notification:A.d,OffscreenCanvas:A.d,OrientationSensor:A.d,PaymentRequest:A.d,Performance:A.d,PermissionStatus:A.d,PresentationAvailability:A.d,PresentationConnection:A.d,PresentationConnectionList:A.d,PresentationRequest:A.d,RelativeOrientationSensor:A.d,RemotePlayback:A.d,RTCDataChannel:A.d,DataChannel:A.d,RTCDTMFSender:A.d,RTCPeerConnection:A.d,webkitRTCPeerConnection:A.d,mozRTCPeerConnection:A.d,ScreenOrientation:A.d,Sensor:A.d,ServiceWorker:A.d,ServiceWorkerContainer:A.d,ServiceWorkerGlobalScope:A.d,ServiceWorkerRegistration:A.d,SharedWorker:A.d,SharedWorkerGlobalScope:A.d,SpeechRecognition:A.d,SpeechSynthesis:A.d,SpeechSynthesisUtterance:A.d,VR:A.d,VRDevice:A.d,VRDisplay:A.d,VRSession:A.d,VisualViewport:A.d,WebSocket:A.d,Worker:A.d,WorkerGlobalScope:A.d,WorkerPerformance:A.d,BluetoothDevice:A.d,BluetoothRemoteGATTCharacteristic:A.d,Clipboard:A.d,MojoInterfaceInterceptor:A.d,USB:A.d,IDBDatabase:A.d,IDBOpenDBRequest:A.d,IDBVersionChangeRequest:A.d,IDBRequest:A.d,IDBTransaction:A.d,AnalyserNode:A.d,RealtimeAnalyserNode:A.d,AudioBufferSourceNode:A.d,AudioDestinationNode:A.d,AudioNode:A.d,AudioScheduledSourceNode:A.d,AudioWorkletNode:A.d,BiquadFilterNode:A.d,ChannelMergerNode:A.d,AudioChannelMerger:A.d,ChannelSplitterNode:A.d,AudioChannelSplitter:A.d,ConstantSourceNode:A.d,ConvolverNode:A.d,DelayNode:A.d,DynamicsCompressorNode:A.d,GainNode:A.d,AudioGainNode:A.d,IIRFilterNode:A.d,MediaElementAudioSourceNode:A.d,MediaStreamAudioDestinationNode:A.d,MediaStreamAudioSourceNode:A.d,OscillatorNode:A.d,Oscillator:A.d,PannerNode:A.d,AudioPannerNode:A.d,webkitAudioPannerNode:A.d,ScriptProcessorNode:A.d,JavaScriptAudioNode:A.d,StereoPannerNode:A.d,WaveShaperNode:A.d,EventTarget:A.d,File:A.ah,FileList:A.eq,FileWriter:A.er,HTMLFormElement:A.ev,Gamepad:A.ai,History:A.ir,HTMLCollection:A.bH,HTMLFormControlsCollection:A.bH,HTMLOptionsCollection:A.bH,HTMLImageElement:A.cd,HTMLInputElement:A.bI,KeyboardEvent:A.b2,Location:A.iG,HTMLAudioElement:A.bP,HTMLMediaElement:A.bP,MediaList:A.iM,MIDIInputMap:A.eJ,MIDIOutputMap:A.eK,MimeType:A.al,MimeTypeArray:A.eL,MouseEvent:A.ac,DragEvent:A.ac,PointerEvent:A.ac,WheelEvent:A.ac,Document:A.q,DocumentFragment:A.q,HTMLDocument:A.q,ShadowRoot:A.q,XMLDocument:A.q,Attr:A.q,DocumentType:A.q,Node:A.q,NodeList:A.da,RadioNodeList:A.da,Plugin:A.am,PluginArray:A.f_,RTCStatsReport:A.f4,HTMLSelectElement:A.f6,SourceBuffer:A.ad,SourceBufferList:A.f9,SpeechGrammar:A.ao,SpeechGrammarList:A.fa,SpeechRecognitionResult:A.ap,Storage:A.fd,CSSStyleSheet:A.a2,StyleSheet:A.a2,TextTrack:A.ae,TextTrackCue:A.a_,VTTCue:A.a_,TextTrackCueList:A.fh,TextTrackList:A.fi,TimeRanges:A.jl,Touch:A.ar,TouchList:A.fk,TrackDefaultList:A.jm,CompositionEvent:A.aS,FocusEvent:A.aS,TextEvent:A.aS,TouchEvent:A.aS,UIEvent:A.aS,URL:A.jp,HTMLVideoElement:A.cq,VideoTrackList:A.fs,Window:A.cs,DOMWindow:A.cs,CSSRuleList:A.fB,ClientRect:A.dq,DOMRect:A.dq,GamepadList:A.fN,NamedNodeMap:A.dw,MozNamedAttrMap:A.dw,SpeechRecognitionResultList:A.h7,StyleSheetList:A.hg,SVGLength:A.ax,SVGLengthList:A.eE,SVGNumber:A.ay,SVGNumberList:A.eV,SVGPointList:A.j_,SVGStringList:A.ff,SVGAElement:A.l,SVGAnimateElement:A.l,SVGAnimateMotionElement:A.l,SVGAnimateTransformElement:A.l,SVGAnimationElement:A.l,SVGCircleElement:A.l,SVGClipPathElement:A.l,SVGDefsElement:A.l,SVGDescElement:A.l,SVGDiscardElement:A.l,SVGEllipseElement:A.l,SVGFEBlendElement:A.l,SVGFEColorMatrixElement:A.l,SVGFEComponentTransferElement:A.l,SVGFECompositeElement:A.l,SVGFEConvolveMatrixElement:A.l,SVGFEDiffuseLightingElement:A.l,SVGFEDisplacementMapElement:A.l,SVGFEDistantLightElement:A.l,SVGFEFloodElement:A.l,SVGFEFuncAElement:A.l,SVGFEFuncBElement:A.l,SVGFEFuncGElement:A.l,SVGFEFuncRElement:A.l,SVGFEGaussianBlurElement:A.l,SVGFEImageElement:A.l,SVGFEMergeElement:A.l,SVGFEMergeNodeElement:A.l,SVGFEMorphologyElement:A.l,SVGFEOffsetElement:A.l,SVGFEPointLightElement:A.l,SVGFESpecularLightingElement:A.l,SVGFESpotLightElement:A.l,SVGFETileElement:A.l,SVGFETurbulenceElement:A.l,SVGFilterElement:A.l,SVGForeignObjectElement:A.l,SVGGElement:A.l,SVGGeometryElement:A.l,SVGGraphicsElement:A.l,SVGImageElement:A.l,SVGLineElement:A.l,SVGLinearGradientElement:A.l,SVGMarkerElement:A.l,SVGMaskElement:A.l,SVGMetadataElement:A.l,SVGPathElement:A.l,SVGPatternElement:A.l,SVGPolygonElement:A.l,SVGPolylineElement:A.l,SVGRadialGradientElement:A.l,SVGRectElement:A.l,SVGScriptElement:A.l,SVGSetElement:A.l,SVGStopElement:A.l,SVGStyleElement:A.l,SVGElement:A.l,SVGSVGElement:A.l,SVGSwitchElement:A.l,SVGSymbolElement:A.l,SVGTSpanElement:A.l,SVGTextContentElement:A.l,SVGTextElement:A.l,SVGTextPathElement:A.l,SVGTextPositioningElement:A.l,SVGTitleElement:A.l,SVGUseElement:A.l,SVGViewElement:A.l,SVGGradientElement:A.l,SVGComponentTransferFunctionElement:A.l,SVGFEDropShadowElement:A.l,SVGMPathElement:A.l,SVGTransform:A.az,SVGTransformList:A.fl,AudioBuffer:A.hR,AudioParamMap:A.e8,AudioTrackList:A.e9,AudioContext:A.bf,webkitAudioContext:A.bf,BaseAudioContext:A.bf,OfflineAudioContext:A.eW,WebGLBuffer:A.ec,WebGLFramebuffer:A.ew,WebGLProgram:A.f0,WebGL2RenderingContext:A.cl,WebGLTexture:A.b8,WebGLUniformLocation:A.fn,WebGLVertexArrayObject:A.fr,SQLResultSetRowList:A.fb})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,SQLResultSetRowList:true})
A.ch.$nativeSuperclassTag="ArrayBufferView"
A.dx.$nativeSuperclassTag="ArrayBufferView"
A.dy.$nativeSuperclassTag="ArrayBufferView"
A.bQ.$nativeSuperclassTag="ArrayBufferView"
A.dz.$nativeSuperclassTag="ArrayBufferView"
A.dA.$nativeSuperclassTag="ArrayBufferView"
A.d9.$nativeSuperclassTag="ArrayBufferView"
A.dC.$nativeSuperclassTag="EventTarget"
A.dD.$nativeSuperclassTag="EventTarget"
A.dH.$nativeSuperclassTag="EventTarget"
A.dI.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
Function.prototype.$9=function(a,b,c,d,e,f,g,h,i){return this(a,b,c,d,e,f,g,h,i)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.p5
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

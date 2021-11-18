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
a[c]=function(){a[c]=function(){A.rn(b)}
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
if(a[b]!==s)A.ro(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.mw(b)
return new s(c,this)}:function(){if(s===null)s=A.mw(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.mw(a).prototype
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
a(hunkHelpers,v,w,$)}var A={m9:function m9(){},
na(a){return new A.cn("Field '"+a+"' has been assigned during initialization.")},
nb(a){return new A.cn("Field '"+a+"' has not been initialized.")},
bX(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mh(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
pC(a,b,c){return A.mh(A.bX(A.bX(c,a),b))},
eO(a,b,c){return a},
nv(a,b,c,d){A.kd(b,"start")
if(c!=null){A.kd(c,"end")
if(b>c)A.S(A.bA(b,0,c,"start",null))}return new A.ed(a,b,c,d.i("ed<0>"))},
nd(a,b,c,d){if(t.gt.b(a))return new A.dI(a,b,c.i("@<0>").E(d).i("dI<1,2>"))
return new A.cp(a,b,c.i("@<0>").E(d).i("cp<1,2>"))},
n8(){return new A.bB("No element")},
pf(){return new A.bB("Too many elements")},
pe(){return new A.bB("Too few elements")},
pz(a,b,c){A.hf(a,0,J.ao(a)-1,b,c)},
hf(a,b,c,d,e){if(c-b<=32)A.nq(a,b,c,d,e)
else A.np(a,b,c,d,e)},
nq(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.az(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a1()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
np(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.e.X(a5-a4+1,6),i=a4+j,h=a5-j,g=B.e.X(a4+a5,2),f=g-j,e=g+j,d=J.az(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a1()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a1()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a1()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a1()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a1()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a1()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a1()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a1()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a1()
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
A.hf(a3,a4,r-2,a6,a7)
A.hf(a3,q+2,a5,a6,a7)
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
break}}A.hf(a3,r,q,a6,a7)}else A.hf(a3,r,q,a6,a7)},
cn:function cn(a){this.a=a},
ki:function ki(){},
p:function p(){},
b3:function b3(){},
ed:function ed(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
by:function by(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cp:function cp(a,b,c){this.a=a
this.b=b
this.$ti=c},
dI:function dI(a,b,c){this.a=a
this.b=b
this.$ti=c},
dX:function dX(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
dY:function dY(a,b,c){this.a=a
this.b=b
this.$ti=c},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
eg:function eg(a,b,c){this.a=a
this.b=b
this.$ti=c},
as:function as(){},
pb(a){if(typeof a=="number")return B.c.gv(a)
if(t.ha.b(a))return A.cw(a)
return A.ly(a)},
pc(a){return new A.jy(a)},
oc(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
ra(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
B(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dt(a)
return s},
cw(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
k9(a){return A.pp(a)},
pp(a){var s,r,q,p
if(a instanceof A.v)return A.am(A.b9(a),null)
if(J.dp(a)===B.eQ||t.cx.b(a)){s=B.aG(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.am(A.b9(a),null)},
d2(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
pw(a){var s=A.d2(a).getUTCFullYear()+0
return s},
pu(a){var s=A.d2(a).getUTCMonth()+1
return s},
pq(a){var s=A.d2(a).getUTCDate()+0
return s},
pr(a){var s=A.d2(a).getUTCHours()+0
return s},
pt(a){var s=A.d2(a).getUTCMinutes()+0
return s},
pv(a){var s=A.d2(a).getUTCSeconds()+0
return s},
ps(a){var s=A.d2(a).getUTCMilliseconds()+0
return s},
cH(a){throw A.d(A.nX(a))},
b(a,b){if(a==null)J.ao(a)
throw A.d(A.cG(a,b))},
cG(a,b){var s,r="index"
if(!A.mt(b))return new A.br(!0,b,r,null)
s=A.K(J.ao(a))
if(b<0||b>=s)return A.T(b,a,r,null,s)
return A.nj(b,r)},
nX(a){return new A.br(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.fY()
s=new Error()
s.dartException=a
r=A.rp
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
rp(){return J.dt(this.dartException)},
S(a){throw A.d(a)},
A(a){throw A.d(A.be(a))},
bE(a){var s,r,q,p,o,n
a=A.rj(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.kt(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ku(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ny(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ma(a,b){var s=b==null,r=s?null:b.method
return new A.fF(a,r,s?null:b.receiver)},
bq(a){if(a==null)return new A.k5(a)
if(a instanceof A.dJ)return A.c9(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.c9(a,a.dartException)
return A.qL(a)},
c9(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qL(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.cv(r,16)&8191)===10)switch(q){case 438:return A.c9(a,A.ma(A.B(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.B(s)+" (Error "+q+")"
return A.c9(a,new A.e2(p,e))}}if(a instanceof TypeError){o=$.oo()
n=$.op()
m=$.oq()
l=$.or()
k=$.ou()
j=$.ov()
i=$.ot()
$.os()
h=$.ox()
g=$.ow()
f=o.a5(s)
if(f!=null)return A.c9(a,A.ma(A.ae(s),f))
else{f=n.a5(s)
if(f!=null){f.method="call"
return A.c9(a,A.ma(A.ae(s),f))}else{f=m.a5(s)
if(f==null){f=l.a5(s)
if(f==null){f=k.a5(s)
if(f==null){f=j.a5(s)
if(f==null){f=i.a5(s)
if(f==null){f=l.a5(s)
if(f==null){f=h.a5(s)
if(f==null){f=g.a5(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.ae(s)
return A.c9(a,new A.e2(s,f==null?e:f.method))}}}return A.c9(a,new A.hA(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ec()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.c9(a,new A.br(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ec()
return a},
bI(a){var s
if(a instanceof A.dJ)return a.b
if(a==null)return new A.ey(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.ey(a)},
ly(a){if(a==null||typeof a!="object")return J.aA(a)
else return A.cw(a)},
nZ(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
r8(a,b,c,d,e,f){t.gY.a(a)
switch(A.K(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.m6("Unsupported number of arguments for wrapped closure"))},
bp(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.r8)
a.$identity=s
return s},
p0(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.hk().constructor.prototype):Object.create(new A.cN(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.n1(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.oX(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.n1(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
oX(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.oV)}throw A.d("Error in functionType of tearoff")},
oY(a,b,c,d){var s=A.mZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
n1(a,b,c,d){var s,r
if(c)return A.p_(a,b,d)
s=b.length
r=A.oY(s,d,a,b)
return r},
oZ(a,b,c,d){var s=A.mZ,r=A.oW
switch(b?-1:a){case 0:throw A.d(new A.hc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
p_(a,b,c){var s,r,q,p=$.mX
p==null?$.mX=A.mW("interceptor"):p
s=$.mY
s==null?$.mY=A.mW("receiver"):s
r=b.length
q=A.oZ(r,c,a,b)
return q},
mw(a){return A.p0(a)},
oV(a,b){return A.l8(v.typeUniverse,A.b9(a.a),b)},
mZ(a){return a.a},
oW(a){return a.b},
mW(a){var s,r,q,p=new A.cN("receiver","interceptor"),o=J.n9(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.cK("Field name "+a+" not found.",null))},
P(a){if(a==null)A.qM("boolean expression must not be null")
return a},
qM(a){throw A.d(new A.hI(a))},
rn(a){throw A.d(new A.fi(a))},
r2(a){return v.getIsolateTag(a)},
tx(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
re(a){var s,r,q,p,o,n=A.ae($.o_.$1(a)),m=$.lm[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lu[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.q6($.nW.$2(a,n))
if(q!=null){m=$.lm[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lu[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.lx(s)
$.lm[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.lu[n]=s
return s}if(p==="-"){o=A.lx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.o7(a,s)
if(p==="*")throw A.d(A.mk(n))
if(v.leafTags[n]===true){o=A.lx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.o7(a,s)},
o7(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.mz(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lx(a){return J.mz(a,!1,null,!!a.$iy)},
rf(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.lx(s)
else return J.mz(s,c,null,null)},
r6(){if(!0===$.mx)return
$.mx=!0
A.r7()},
r7(){var s,r,q,p,o,n,m,l
$.lm=Object.create(null)
$.lu=Object.create(null)
A.r5()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.o8.$1(o)
if(n!=null){m=A.rf(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
r5(){var s,r,q,p,o,n,m=B.cS()
m=A.dn(B.cT,A.dn(B.cU,A.dn(B.aH,A.dn(B.aH,A.dn(B.cV,A.dn(B.cW,A.dn(B.cX(B.aG),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.o_=new A.lr(p)
$.nW=new A.ls(o)
$.o8=new A.lt(n)},
dn(a,b){return a(b)||b},
rm(a,b,c){var s=a.indexOf(b,c)
return s>=0},
rj(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cP:function cP(){},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aa:function aa(a,b){this.a=a
this.$ti=b},
jy:function jy(a){this.a=a},
kt:function kt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e2:function e2(a,b){this.a=a
this.b=b},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(a){this.a=a},
k5:function k5(a){this.a=a},
dJ:function dJ(a,b){this.a=a
this.b=b},
ey:function ey(a){this.a=a
this.b=null},
ce:function ce(){},
fa:function fa(){},
fb:function fb(){},
ho:function ho(){},
hk:function hk(){},
cN:function cN(a,b){this.a=a
this.b=b},
hc:function hc(a){this.a=a},
hI:function hI(a){this.a=a},
aE:function aE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jL:function jL(a){this.a=a},
jK:function jK(a){this.a=a},
jN:function jN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dU:function dU(a,b){this.a=a
this.$ti=b},
dV:function dV(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lr:function lr(a){this.a=a},
ls:function ls(a){this.a=a},
lt:function lt(a){this.a=a},
ro(a){return A.S(A.na(a))},
ml(a){var s=new A.kJ(a)
return s.b=s},
dk(a,b){if(a===$)throw A.d(A.nb(b))
return a},
bH(a,b){if(a!==$)throw A.d(A.na(b))},
kJ:function kJ(a){this.a=a
this.b=null},
nM(a,b,c){},
cF(a){return a},
ne(a){return new Float32Array(A.cF(a))},
cs(a,b,c){A.nM(a,b,c)
return new Float32Array(a,b,c)},
nf(a,b,c){var s
A.nM(a,b,c)
s=new Uint8Array(a,b,c)
return s},
po(a){return new Uint8Array(a)},
bG(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.cG(b,a))},
fP:function fP(){},
cu:function cu(){},
cZ:function cZ(){},
ct:function ct(){},
e_:function e_(){},
dZ:function dZ(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
d_:function d_(){},
e0:function e0(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
nl(a,b){var s=b.c
return s==null?b.c=A.mq(a,b.z,!0):s},
nk(a,b){var s=b.c
return s==null?b.c=A.eH(a,"at",[b.z]):s},
nm(a){var s=a.y
if(s===6||s===7||s===8)return A.nm(a.z)
return s===11||s===12},
py(a){return a.cy},
aP(a){return A.iD(v.typeUniverse,a,!1)},
c7(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.c7(a,s,a0,a1)
if(r===s)return b
return A.nI(a,r,!0)
case 7:s=b.z
r=A.c7(a,s,a0,a1)
if(r===s)return b
return A.mq(a,r,!0)
case 8:s=b.z
r=A.c7(a,s,a0,a1)
if(r===s)return b
return A.nH(a,r,!0)
case 9:q=b.Q
p=A.eN(a,q,a0,a1)
if(p===q)return b
return A.eH(a,b.z,p)
case 10:o=b.z
n=A.c7(a,o,a0,a1)
m=b.Q
l=A.eN(a,m,a0,a1)
if(n===o&&l===m)return b
return A.mo(a,n,l)
case 11:k=b.z
j=A.c7(a,k,a0,a1)
i=b.Q
h=A.qI(a,i,a0,a1)
if(j===k&&h===i)return b
return A.nG(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.eN(a,g,a0,a1)
o=b.z
n=A.c7(a,o,a0,a1)
if(f===g&&n===o)return b
return A.mp(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.iT("Attempted to substitute unexpected RTI kind "+c))}},
eN(a,b,c,d){var s,r,q,p,o=b.length,n=A.la(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.c7(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
qJ(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.la(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.c7(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
qI(a,b,c,d){var s,r=b.a,q=A.eN(a,r,c,d),p=b.b,o=A.eN(a,p,c,d),n=b.c,m=A.qJ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.hY()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
qU(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.r3(s)
return a.$S()}return null},
o1(a,b){var s
if(A.nm(b))if(a instanceof A.ce){s=A.qU(a)
if(s!=null)return s}return A.b9(a)},
b9(a){var s
if(a instanceof A.v){s=a.$ti
return s!=null?s:A.mr(a)}if(Array.isArray(a))return A.Z(a)
return A.mr(J.dp(a))},
Z(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
F(a){var s=a.$ti
return s!=null?s:A.mr(a)},
mr(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.qo(a,s)},
qo(a,b){var s=a instanceof A.ce?a.__proto__.__proto__.constructor:b,r=A.q3(v.typeUniverse,s.name)
b.$ccache=r
return r},
r3(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.iD(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
qX(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.eF(a)
q=A.iD(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.eF(q):p},
rq(a){return A.qX(A.iD(v.typeUniverse,a,!1))},
qn(a){var s,r,q,p,o=this
if(o===t.K)return A.dj(o,a,A.qs)
if(!A.bJ(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.dj(o,a,A.qv)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.mt
else if(r===t.i||r===t.cZ)q=A.qr
else if(r===t.N)q=A.qt
else q=r===t.k4?A.ld:null
if(q!=null)return A.dj(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.rb)){o.r="$i"+p
if(p==="o")return A.dj(o,a,A.qq)
return A.dj(o,a,A.qu)}}else if(s===7)return A.dj(o,a,A.ql)
return A.dj(o,a,A.qj)},
dj(a,b,c){a.b=c
return a.b(b)},
qm(a){var s,r=this,q=A.qi
if(!A.bJ(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.q7
else if(r===t.K)q=A.q5
else{s=A.eP(r)
if(s)q=A.qk}r.a=q
return r.a(a)},
le(a){var s,r=a.y
if(!A.bJ(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&A.le(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qj(a){var s=this
if(a==null)return A.le(s)
return A.V(v.typeUniverse,A.o1(a,s),null,s,null)},
ql(a){if(a==null)return!0
return this.z.b(a)},
qu(a){var s,r=this
if(a==null)return A.le(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dp(a)[s]},
qq(a){var s,r=this
if(a==null)return A.le(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dp(a)[s]},
qi(a){var s,r=this
if(a==null){s=A.eP(r)
if(s)return a}else if(r.b(a))return a
A.nP(a,r)},
qk(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.nP(a,s)},
nP(a,b){throw A.d(A.nF(A.nA(a,A.o1(a,b),A.am(b,null))))},
qT(a,b,c,d){var s=null
if(A.V(v.typeUniverse,a,s,b,s))return a
throw A.d(A.nF("The type argument '"+A.am(a,s)+"' is not a subtype of the type variable bound '"+A.am(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
nA(a,b,c){var s=A.fp(a),r=A.am(b==null?A.b9(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
nF(a){return new A.eG("TypeError: "+a)},
al(a,b){return new A.eG("TypeError: "+A.nA(a,null,b))},
qs(a){return a!=null},
q5(a){if(a!=null)return a
throw A.d(A.al(a,"Object"))},
qv(a){return!0},
q7(a){return a},
ld(a){return!0===a||!1===a},
th(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.al(a,"bool"))},
tj(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.al(a,"bool"))},
ti(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.al(a,"bool?"))},
nL(a){if(typeof a=="number")return a
throw A.d(A.al(a,"double"))},
tl(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.al(a,"double"))},
tk(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.al(a,"double?"))},
mt(a){return typeof a=="number"&&Math.floor(a)===a},
K(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.al(a,"int"))},
tn(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.al(a,"int"))},
tm(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.al(a,"int?"))},
qr(a){return typeof a=="number"},
b7(a){if(typeof a=="number")return a
throw A.d(A.al(a,"num"))},
tp(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.al(a,"num"))},
to(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.al(a,"num?"))},
qt(a){return typeof a=="string"},
ae(a){if(typeof a=="string")return a
throw A.d(A.al(a,"String"))},
tq(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.al(a,"String"))},
q6(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.al(a,"String?"))},
qE(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.am(a[q],b)
return s},
nQ(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.c([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.l(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.b(a5,j)
m=B.h.C(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.am(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.am(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.am(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.am(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.am(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
am(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.am(a.z,b)
return s}if(l===7){r=a.z
s=A.am(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.am(a.z,b)+">"
if(l===9){p=A.qK(a.z)
o=a.Q
return o.length>0?p+("<"+A.qE(o,b)+">"):p}if(l===11)return A.nQ(a,b,null)
if(l===12)return A.nQ(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
qK(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
q4(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
q3(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.iD(a,b,!1)
else if(typeof m=="number"){s=m
r=A.eI(a,5,"#")
q=A.la(s)
for(p=0;p<s;++p)q[p]=r
o=A.eH(a,b,q)
n[b]=o
return o}else return m},
q1(a,b){return A.nJ(a.tR,b)},
q0(a,b){return A.nJ(a.eT,b)},
iD(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.nD(A.nB(a,null,b,c))
r.set(b,s)
return s},
l8(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.nD(A.nB(a,b,c,!0))
q.set(c,r)
return r},
q2(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.mo(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
c6(a,b){b.a=A.qm
b.b=A.qn
return b},
eI(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.b4(null,null)
s.y=b
s.cy=c
r=A.c6(a,s)
a.eC.set(c,r)
return r},
nI(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.pZ(a,b,r,c)
a.eC.set(r,s)
return s},
pZ(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bJ(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.b4(null,null)
q.y=6
q.z=b
q.cy=c
return A.c6(a,q)},
mq(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.pY(a,b,r,c)
a.eC.set(r,s)
return s},
pY(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.bJ(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.eP(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.eP(q.z))return q
else return A.nl(a,b)}}p=new A.b4(null,null)
p.y=7
p.z=b
p.cy=c
return A.c6(a,p)},
nH(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.pW(a,b,r,c)
a.eC.set(r,s)
return s},
pW(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bJ(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.eH(a,"at",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.b4(null,null)
q.y=8
q.z=b
q.cy=c
return A.c6(a,q)},
q_(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.b4(null,null)
s.y=13
s.z=b
s.cy=q
r=A.c6(a,s)
a.eC.set(q,r)
return r},
iC(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pV(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
eH(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iC(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.b4(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.c6(a,r)
a.eC.set(p,q)
return q},
mo(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.iC(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b4(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.c6(a,o)
a.eC.set(q,n)
return n},
nG(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iC(m)
if(j>0){s=l>0?",":""
r=A.iC(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.pV(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b4(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.c6(a,o)
a.eC.set(q,r)
return r},
mp(a,b,c,d){var s,r=b.cy+("<"+A.iC(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.pX(a,b,c,r,d)
a.eC.set(r,s)
return s},
pX(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.la(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.c7(a,b,r,0)
m=A.eN(a,c,r,0)
return A.mp(a,n,m,c!==m)}}l=new A.b4(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.c6(a,l)},
nB(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nD(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.pP(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.nC(a,r,h,g,!1)
else if(q===46)r=A.nC(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.c3(a.u,a.e,g.pop()))
break
case 94:g.push(A.q_(a.u,g.pop()))
break
case 35:g.push(A.eI(a.u,5,"#"))
break
case 64:g.push(A.eI(a.u,2,"@"))
break
case 126:g.push(A.eI(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.mn(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.eH(p,n,o))
else{m=A.c3(p,a.e,n)
switch(m.y){case 11:g.push(A.mp(p,m,o,a.n))
break
default:g.push(A.mo(p,m,o))
break}}break
case 38:A.pQ(a,g)
break
case 42:p=a.u
g.push(A.nI(p,A.c3(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.mq(p,A.c3(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.nH(p,A.c3(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.hY()
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
A.mn(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.nG(p,A.c3(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.mn(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.pS(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.c3(a.u,a.e,i)},
pP(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
nC(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.q4(s,o.z)[p]
if(n==null)A.S('No "'+p+'" in "'+A.py(o)+'"')
d.push(A.l8(s,o,n))}else d.push(p)
return m},
pQ(a,b){var s=b.pop()
if(0===s){b.push(A.eI(a.u,1,"0&"))
return}if(1===s){b.push(A.eI(a.u,4,"1&"))
return}throw A.d(A.iT("Unexpected extended operation "+A.B(s)))},
c3(a,b,c){if(typeof c=="string")return A.eH(a,c,a.sEA)
else if(typeof c=="number")return A.pR(a,b,c)
else return c},
mn(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.c3(a,b,c[s])},
pS(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.c3(a,b,c[s])},
pR(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.d(A.iT("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.d(A.iT("Bad index "+c+" for "+b.k(0)))},
V(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.bJ(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.bJ(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.V(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return A.V(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.V(a,b.z,c,d,e)
if(r===6)return A.V(a,b.z,c,d,e)
return r!==7}if(r===6)return A.V(a,b.z,c,d,e)
if(p===6){s=A.nl(a,d)
return A.V(a,b,c,s,e)}if(r===8){if(!A.V(a,b.z,c,d,e))return!1
return A.V(a,A.nk(a,b),c,d,e)}if(r===7){s=A.V(a,t.P,c,d,e)
return s&&A.V(a,b.z,c,d,e)}if(p===8){if(A.V(a,b,c,d.z,e))return!0
return A.V(a,b,c,A.nk(a,d),e)}if(p===7){s=A.V(a,b,c,t.P,e)
return s||A.V(a,b,c,d.z,e)}if(q)return!1
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
if(!A.V(a,k,c,j,e)||!A.V(a,j,e,k,c))return!1}return A.nR(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.nR(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.qp(a,b,c,d,e)}return!1},
nR(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.V(a3,a4.z,a5,a6.z,a7))return!1
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
if(!A.V(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.V(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.V(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.V(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
qp(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.l8(a,b,r[o])
return A.nK(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.nK(a,n,null,c,m,e)},
nK(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.V(a,r,d,q,f))return!1}return!0},
eP(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.bJ(a))if(r!==7)if(!(r===6&&A.eP(a.z)))s=r===8&&A.eP(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
rb(a){var s
if(!A.bJ(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bJ(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.iD},
nJ(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
la(a){return a>0?new Array(a):v.typeUniverse.sEA},
b4:function b4(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
hY:function hY(){this.c=this.b=this.a=null},
eF:function eF(a){this.a=a},
hU:function hU(){},
eG:function eG(a){this.a=a},
pH(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.qN()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bp(new A.kG(q),1)).observe(s,{childList:true})
return new A.kF(q,s,r)}else if(self.setImmediate!=null)return A.qO()
return A.qP()},
pI(a){self.scheduleImmediate(A.bp(new A.kH(t.M.a(a)),0))},
pJ(a){self.setImmediate(A.bp(new A.kI(t.M.a(a)),0))},
pK(a){t.M.a(a)
A.pT(0,a)},
nw(a,b){var s=B.e.X(a.a,1000)
return A.pU(s<0?0:s,b)},
pT(a,b){var s=new A.eE(!0)
s.dN(a,b)
return s},
pU(a,b){var s=new A.eE(!1)
s.dO(a,b)
return s},
bn(a){return new A.eh(new A.G($.E,a.i("G<0>")),a.i("eh<0>"))},
bm(a,b){a.$2(0,null)
b.b=!0
return b.a},
a8(a,b){A.q8(a,b)},
bl(a,b){b.Y(0,a)},
bk(a,b){b.bq(A.bq(a),A.bI(a))},
q8(a,b){var s,r,q=new A.lb(b),p=new A.lc(b)
if(a instanceof A.G)a.cz(q,p,t.z)
else{s=t.z
if(t.h.b(a))a.aX(q,p,s)
else{r=new A.G($.E,t.g)
r.a=8
r.c=a
r.cz(q,p,s)}}},
bo(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.E.bH(new A.lg(s),t.H,t.S,t.z)},
tg(a){return new A.dh(a,1)},
pM(){return B.fX},
pN(a){return new A.dh(a,3)},
qy(a,b){return new A.eB(a,b.i("eB<0>"))},
iU(a,b){var s=A.eO(a,"error",t.K)
return new A.dz(s,b==null?A.m2(a):b)},
m2(a){var s
if(t.fz.b(a)){s=a.gaG()
if(s!=null)return s}return B.d_},
p9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=null,e=!1,d=b.i("G<o<0>>"),c=new A.G($.E,d)
g.a=null
g.b=0
s=A.ml("error")
r=A.ml("stackTrace")
q=new A.js(g,f,e,c,s,r)
try{for(l=a.length,k=t.P,j=0,i=0;j<a.length;a.length===l||(0,A.A)(a),++j){p=a[j]
o=i
p.aX(new A.jr(g,o,c,f,e,s,r,b),q,k)
i=++g.b}if(i===0){l=c
l.az(A.c([],b.i("t<0>")))
return l}g.a=A.bg(i,null,!1,b.i("0?"))}catch(h){n=A.bq(h)
m=A.bI(h)
if(g.b===0||A.P(e)){l=n
r=m
A.eO(l,"error",t.K)
$.E!==B.l
if(r==null)r=A.m2(l)
d=new A.G($.E,d)
d.b4(l,r)
return d}else{s.b=n
r.b=m}}return c},
kP(a,b){var s,r,q
for(s=t.g;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aM()
b.b6(a)
A.dg(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.cr(q)}},
dg(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.h;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.iO(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.dg(c.a,b)
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
A.iO(i.a,i.b)
return}f=$.E
if(f!==g)$.E=g
else f=null
b=b.c
if((b&15)===8)new A.kX(p,c,m).$0()
else if(n){if((b&1)!==0)new A.kW(p,i).$0()}else if((b&2)!==0)new A.kV(c,p).$0()
if(f!=null)$.E=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("at<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.aN(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.kP(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.aN(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
qC(a,b){var s
if(t.ng.b(a))return b.bH(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.mS(a,"onError",u.w))},
qz(){var s,r
for(s=$.dl;s!=null;s=$.dl){$.eM=null
r=s.b
$.dl=r
if(r==null)$.eL=null
s.a.$0()}},
qH(){$.ms=!0
try{A.qz()}finally{$.eM=null
$.ms=!1
if($.dl!=null)$.mD().$1(A.nY())}},
nU(a){var s=new A.hJ(a),r=$.eL
if(r==null){$.dl=$.eL=s
if(!$.ms)$.mD().$1(A.nY())}else $.eL=r.b=s},
qF(a){var s,r,q,p=$.dl
if(p==null){A.nU(a)
$.eM=$.eL
return}s=new A.hJ(a)
r=$.eM
if(r==null){s.b=p
$.dl=$.eM=s}else{q=r.b
s.b=q
$.eM=r.b=s
if(q==null)$.eL=s}},
o9(a){var s=null,r=$.E
if(B.l===r){A.dm(s,s,B.l,a)
return}A.dm(s,s,r,t.M.a(r.cH(a)))},
t2(a,b){A.eO(a,"stream",t.K)
return new A.io(b.i("io<0>"))},
nt(a){return new A.dd(null,null,null,a.i("dd<0>"))},
mv(a){return},
pL(a,b){if(b==null)b=A.qR()
if(t.fQ.b(b))return a.bH(b,t.z,t.K,t.l)
if(t.i6.b(b))return t.y.a(b)
throw A.d(A.cK("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
qB(a,b){A.iO(a,b)},
qA(){},
pD(a,b){var s=$.E
if(s===B.l)return A.nw(a,t.my.a(b))
return A.nw(a,t.my.a(s.cI(b,t.hU)))},
iO(a,b){A.qF(new A.lf(a,b))},
nS(a,b,c,d,e){var s,r=$.E
if(r===c)return d.$0()
$.E=c
s=r
try{r=d.$0()
return r}finally{$.E=s}},
nT(a,b,c,d,e,f,g){var s,r=$.E
if(r===c)return d.$1(e)
$.E=c
s=r
try{r=d.$1(e)
return r}finally{$.E=s}},
qD(a,b,c,d,e,f,g,h,i){var s,r=$.E
if(r===c)return d.$2(e,f)
$.E=c
s=r
try{r=d.$2(e,f)
return r}finally{$.E=s}},
dm(a,b,c,d){t.M.a(d)
if(B.l!==c)d=c.cH(d)
A.nU(d)},
kG:function kG(a){this.a=a},
kF:function kF(a,b,c){this.a=a
this.b=b
this.c=c},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
eE:function eE(a){this.a=a
this.b=null
this.c=0},
l7:function l7(a,b){this.a=a
this.b=b},
l6:function l6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eh:function eh(a,b){this.a=a
this.b=!1
this.$ti=b},
lb:function lb(a){this.a=a},
lc:function lc(a){this.a=a},
lg:function lg(a){this.a=a},
dh:function dh(a,b){this.a=a
this.b=b},
c5:function c5(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
eB:function eB(a,b){this.a=a
this.$ti=b},
dz:function dz(a,b){this.a=a
this.b=b},
js:function js(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jr:function jr(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
de:function de(){},
ak:function ak(a,b){this.a=a
this.$ti=b},
di:function di(a,b){this.a=a
this.$ti=b},
cD:function cD(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
G:function G(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
kM:function kM(a,b){this.a=a
this.b=b},
kU:function kU(a,b){this.a=a
this.b=b},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a,b,c){this.a=a
this.b=b
this.c=c},
kO:function kO(a,b){this.a=a
this.b=b},
kT:function kT(a,b){this.a=a
this.b=b},
kN:function kN(a,b,c){this.a=a
this.b=b
this.c=c},
kX:function kX(a,b,c){this.a=a
this.b=b
this.c=c},
kY:function kY(a){this.a=a},
kW:function kW(a,b){this.a=a
this.b=b},
kV:function kV(a,b){this.a=a
this.b=b},
hJ:function hJ(a){this.a=a
this.b=null},
cx:function cx(){},
km:function km(a,b){this.a=a
this.b=b},
kn:function kn(a,b){this.a=a
this.b=b},
bC:function bC(){},
ez:function ez(){},
l4:function l4(a){this.a=a},
hK:function hK(){},
dd:function dd(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
c2:function c2(a,b){this.a=a
this.$ti=b},
df:function df(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
ei:function ei(){},
eA:function eA(){},
hP:function hP(){},
cA:function cA(a,b){this.b=a
this.a=null
this.$ti=b},
c4:function c4(){},
l1:function l1(a,b){this.a=a
this.b=b},
bj:function bj(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
io:function io(a){this.$ti=a},
eJ:function eJ(){},
lf:function lf(a,b){this.a=a
this.b=b},
ig:function ig(){},
l2:function l2(a,b){this.a=a
this.b=b},
l3:function l3(a,b,c){this.a=a
this.b=b
this.c=c},
mb(a,b,c,d){if(b==null){if(a==null)return new A.aE(c.i("@<0>").E(d).i("aE<1,2>"))}else if(a==null)a=A.qW()
return A.pO(A.qV(),a,b,c,d)},
aV(a,b,c){return b.i("@<0>").E(c).i("jM<1,2>").a(A.nZ(a,new A.aE(b.i("@<0>").E(c).i("aE<1,2>"))))},
ab(a,b){return new A.aE(a.i("@<0>").E(b).i("aE<1,2>"))},
pO(a,b,c,d,e){var s=c!=null?c:new A.l_(d)
return new A.en(a,b,s,d.i("@<0>").E(e).i("en<1,2>"))},
jP(a){return new A.eo(a.i("eo<0>"))},
mm(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
qf(a,b){return J.a_(a,b)},
qg(a){return J.aA(a)},
n7(a,b,c){var s,r
if(A.mu(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.aO,a)
try{A.qw(a,s)}finally{if(0>=$.aO.length)return A.b($.aO,-1)
$.aO.pop()}r=A.nu(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
m8(a,b,c){var s,r
if(A.mu(a))return b+"..."+c
s=new A.hm(b)
B.a.l($.aO,a)
try{r=s
r.a=A.nu(r.a,a,", ")}finally{if(0>=$.aO.length)return A.b($.aO,-1)
$.aO.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mu(a){var s,r
for(s=$.aO.length,r=0;r<s;++r)if(a===$.aO[r])return!0
return!1},
qw(a,b){var s,r,q,p,o,n,m,l=a.gw(a),k=0,j=0
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
pl(a,b,c){var s=A.mb(null,null,b,c)
a.D(0,new A.jO(s,b,c))
return s},
nc(a,b,c){var s=A.mb(null,null,b,c)
s.K(0,a)
return s},
md(a){var s,r={}
if(A.mu(a))return"{...}"
s=new A.hm("")
try{B.a.l($.aO,a)
s.a+="{"
r.a=!0
J.oT(a,new A.jT(r,s))
s.a+="}"}finally{if(0>=$.aO.length)return A.b($.aO,-1)
$.aO.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
l0:function l0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
en:function en(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
l_:function l_(a){this.a=a},
eo:function eo(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i4:function i4(a){this.a=a
this.b=null},
ep:function ep(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dP:function dP(){},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
dW:function dW(){},
jT:function jT(a,b){this.a=a
this.b=b},
z:function z(){},
jV:function jV(a){this.a=a},
e9:function e9(){},
ev:function ev(){},
eK:function eK(){},
p8(a){if(a instanceof A.ce)return a.k(0)
return"Instance of '"+A.k9(a)+"'"},
bg(a,b,c,d){var s,r=J.pg(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
pn(a,b){var s,r=A.c([],b.i("t<0>"))
for(s=J.an(a);s.n();)B.a.l(r,b.a(s.gp(s)))
return r},
jR(a,b,c){var s=A.pm(a,c)
return s},
pm(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("t<0>"))
s=A.c([],b.i("t<0>"))
for(r=J.an(a);r.n();)B.a.l(s,r.gp(r))
return s},
mc(a,b,c){var s,r=J.ph(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
nu(a,b,c){var s=J.an(b)
if(!s.n())return a
if(c.length===0){do a+=A.B(s.gp(s))
while(s.n())}else{a+=A.B(s.gp(s))
for(;s.n();)a=a+c+A.B(s.gp(s))}return a},
p2(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
p3(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
fj(a){if(a>=10)return""+a
return"0"+a},
jk(a){return new A.ag(1000*a)},
fp(a){if(typeof a=="number"||A.ld(a)||a==null)return J.dt(a)
if(typeof a=="string")return JSON.stringify(a)
return A.p8(a)},
iT(a){return new A.dy(a)},
cK(a,b){return new A.br(!1,null,b,a)},
mS(a,b,c){return new A.br(!0,a,b,c)},
px(a){var s=null
return new A.d3(s,s,!1,s,s,a)},
nj(a,b){return new A.d3(null,null,!0,a,b,"Value not in range")},
bA(a,b,c,d,e){return new A.d3(b,c,!0,a,d,"Invalid value")},
ke(a,b,c){if(0>a||a>c)throw A.d(A.bA(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.bA(b,a,c,"end",null))
return b}return c},
kd(a,b){if(a<0)throw A.d(A.bA(a,0,null,b,null))
return a},
T(a,b,c,d,e){var s=A.K(e==null?J.ao(b):e)
return new A.fB(s,!0,a,c,"Index out of range")},
C(a){return new A.hC(a)},
mk(a){return new A.hz(a)},
ah(a){return new A.bB(a)},
be(a){return new A.ff(a)},
m6(a){return new A.hV(a)},
cv(a,b,c,d){var s,r
if(B.x===c)return A.pC(J.aA(a),J.aA(b),$.m_())
if(B.x===d){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
return A.mh(A.bX(A.bX(A.bX($.m_(),s),b),c))}s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
r=$.m_()
return A.mh(A.bX(A.bX(A.bX(A.bX(r,s),b),c),d))},
eQ(a){A.mA(A.B(a))},
cg:function cg(a,b){this.a=a
this.b=b},
ag:function ag(a){this.a=a},
kK:function kK(){},
L:function L(){},
dy:function dy(a){this.a=a},
c0:function c0(){},
fY:function fY(){},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d3:function d3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fB:function fB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hC:function hC(a){this.a=a},
hz:function hz(a){this.a=a},
bB:function bB(a){this.a=a},
ff:function ff(a){this.a=a},
h0:function h0(){},
ec:function ec(){},
fi:function fi(a){this.a=a},
hV:function hV(a){this.a=a},
j:function j(){},
U:function U(){},
cW:function cW(a,b,c){this.a=a
this.b=b
this.$ti=c},
Y:function Y(){},
v:function v(){},
ir:function ir(){},
hm:function hm(a){this.a=a},
r_(){return document},
em(a,b,c,d,e){var s=A.nV(new A.kL(c),t.L)
if(s!=null&&!0)J.oR(a,b,s,!1)
return new A.el(a,b,s,!1,e.i("el<0>"))},
qc(a){var s
if(t.dA.b(a))return a
s=new A.kD([],[])
s.c=!0
return s.bR(a)},
nV(a,b){var s=$.E
if(s===B.l)return a
return s.cI(a,b)},
q:function q(){},
iS:function iS(){},
eX:function eX(){},
eY:function eY(){},
f3:function f3(){},
f4:function f4(){},
cb:function cb(){},
bc:function bc(){},
jc:function jc(){},
I:function I(){},
cQ:function cQ(){},
jd:function jd(){},
b0:function b0(){},
bt:function bt(){},
je:function je(){},
jf:function jf(){},
jg:function jg(){},
bu:function bu(){},
bR:function bR(){},
dG:function dG(){},
dH:function dH(){},
fl:function fl(){},
jh:function jh(){},
a7:function a7(){},
k:function k(){},
e:function e(){},
aB:function aB(){},
fr:function fr(){},
fs:function fs(){},
fv:function fv(){},
aC:function aC(){},
jC:function jC(){},
cj:function cj(){},
dO:function dO(){},
ck:function ck(){},
cU:function cU(){},
bx:function bx(){},
jS:function jS(){},
cr:function cr(){},
jX:function jX(){},
fL:function fL(){},
k_:function k_(a){this.a=a},
fM:function fM(){},
k0:function k0(a){this.a=a},
aG:function aG(){},
fN:function fN(){},
aH:function aH(){},
w:function w(){},
e1:function e1(){},
aI:function aI(){},
h4:function h4(){},
hb:function hb(){},
kg:function kg(a){this.a=a},
hd:function hd(){},
ax:function ax(){},
hh:function hh(){},
aJ:function aJ(){},
hi:function hi(){},
aK:function aK(){},
hl:function hl(){},
kl:function kl(a){this.a=a},
ai:function ai(){},
ay:function ay(){},
ac:function ac(){},
hs:function hs(){},
ht:function ht(){},
kr:function kr(){},
aL:function aL(){},
hv:function hv(){},
ks:function ks(){},
bi:function bi(){},
kw:function kw(){},
db:function db(){},
hE:function hE(){},
dc:function dc(){},
hN:function hN(){},
ej:function ej(){},
hZ:function hZ(){},
eq:function eq(){},
ik:function ik(){},
is:function is(){},
m5:function m5(a,b){this.a=a
this.$ti=b},
ek:function ek(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
el:function el(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
kL:function kL(a){this.a=a},
r:function r(){},
dK:function dK(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
hO:function hO(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){},
hW:function hW(){},
hX:function hX(){},
i_:function i_(){},
i0:function i0(){},
i5:function i5(){},
i6:function i6(){},
i7:function i7(){},
i8:function i8(){},
i9:function i9(){},
ia:function ia(){},
id:function id(){},
ie:function ie(){},
ih:function ih(){},
ew:function ew(){},
ex:function ex(){},
ii:function ii(){},
ij:function ij(){},
il:function il(){},
it:function it(){},
iu:function iu(){},
eC:function eC(){},
eD:function eD(){},
iw:function iw(){},
ix:function ix(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
iH:function iH(){},
iI:function iI(){},
iJ:function iJ(){},
iK:function iK(){},
iL:function iL(){},
iM:function iM(){},
iN:function iN(){},
nN(a){var s,r
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.ld(a))return a
if(A.o4(a))return A.c8(a)
if(Array.isArray(a)){s=[]
for(r=0;r<a.length;++r)s.push(A.nN(a[r]))
return s}return a},
c8(a){var s,r,q,p,o
if(a==null)return null
s=A.ab(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.A)(r),++p){o=r[p]
s.j(0,o,A.nN(a[o]))}return s},
o4(a){var s=Object.getPrototypeOf(a)
return s===Object.prototype||s===null},
m3(){return window.navigator.userAgent},
kC:function kC(){},
kE:function kE(a,b){this.a=a
this.b=b},
kD:function kD(a,b){this.a=a
this.b=b
this.c=!1},
ri(a,b){var s=new A.G($.E,b.i("G<0>")),r=new A.ak(s,b.i("ak<0>"))
a.then(A.bp(new A.lJ(r,b),1),A.bp(new A.lK(r),1))
return s},
k4:function k4(a){this.a=a},
lJ:function lJ(a,b){this.a=a
this.b=b},
lK:function lK(a){this.a=a},
mg(){return B.n},
i1:function i1(){},
aU:function aU(){},
fG:function fG(){},
aX:function aX(){},
fZ:function fZ(){},
k8:function k8(){},
hn:function hn(){},
n:function n(){},
aZ:function aZ(){},
hw:function hw(){},
i2:function i2(){},
i3:function i3(){},
ib:function ib(){},
ic:function ic(){},
ip:function ip(){},
iq:function iq(){},
iy:function iy(){},
iz:function iz(){},
pa(a){return new GainNode(a)},
ba:function ba(){},
dB:function dB(){},
ca:function ca(){},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
H:function H(){},
eZ:function eZ(){},
f_:function f_(){},
j_:function j_(a){this.a=a},
bs:function bs(){},
f0:function f0(){},
dC:function dC(){},
cT:function cT(){},
h_:function h_(){},
hM:function hM(){},
f7:function f7(){},
fx:function fx(){},
h5:function h5(){},
d4:function d4(){},
bD:function bD(){},
hy:function hy(){},
hD:function hD(){},
bW:function bW(a){this.a=a},
d7:function d7(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n4(a,b){var s=A.bg(7,null,!1,b.i("0?")),r=a==null?A.rr():a
return new A.fA(r,s,b.i("fA<0>"))},
fA:function fA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
l9:function l9(a,b){this.a=a
this.$ti=b},
cE:function cE(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=-1
_.$ti=c},
bM(a){return new A.f(a)},
f:function f(a){this.a=a},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
Q:function Q(a,b){this.a=a
this.b=b},
m1(a,b,c,d,e,f,g){return new A.cJ(g,b,e,a,f)},
o3(a,b){if(b.e)return!1
if(a.x)return!0
if(b.x)return!0
return!1},
r4(a,b){return B.a.eH(a.a,new A.lq(b))},
fO(a,b,c,d,e,f,g,h,i,j){return new A.bT(i,a,h,j,b,e,c,f)},
r0(a){var s,r,q=a.f.$0(),p=new A.jZ(new Uint8ClampedArray(4000)),o=a.d,n=A.c([],t.I),m=A.nc(B.aq,t.b,t.R),l=A.c([],t.Q),k=A.c([],t.d)
for(s=J.an(a.r.$0());s.n();){r=s.gp(s)
switch(r.gbX()){case B.at:m.h(0,B.F)
m.j(0,B.F,r)
break
case B.au:m.h(0,B.t)
m.j(0,B.t,r)
break
case B.av:m.h(0,B.G)
m.j(0,B.G,r)
break
default:B.a.l(n,r)}}return A.m1(new A.iQ(q,p),new A.cd(o,o,1,0,0,0,0,new A.cR(n,m),a.c,l,k,new A.cS(a.a)),1,a.z,!1,!1,a.e.$0())},
cJ:function cJ(a,b,c,d,e){var _=this
_.a=100
_.b=a
_.c=b
_.e=c
_.r=d
_.x=e},
iR:function iR(a){this.a=a},
iQ:function iQ(a,b){this.a=a
this.b=b
this.c=null},
ad:function ad(a,b){this.a=a
this.b=b},
aq:function aq(){},
bY:function bY(){},
bZ:function bZ(){},
cO:function cO(){},
bV:function bV(){},
h8:function h8(){this.b=!1},
e5:function e5(){this.a=null},
h9:function h9(a){this.a=a},
lq:function lq(a){this.a=a},
bK:function bK(){},
bd:function bd(a){this.a=a},
bT:function bT(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.z=h},
lT:function lT(){},
lR:function lR(){},
lS:function lS(){},
lN:function lN(){},
lL:function lL(){},
lM:function lM(){},
lW:function lW(){},
lU:function lU(){},
lV:function lV(){},
lZ:function lZ(){},
lX:function lX(){},
lY:function lY(){},
lk:function lk(){},
li:function li(){},
lj:function lj(){},
j6:function j6(){this.b=this.a=0},
W:function W(){},
cq:function cq(a,b){this.b=a
this.a=b},
cX:function cX(a,b){this.b=a
this.a=b},
rh(a,b,c){var s,r,q=b.e||b.a===0
if(q)return!1
s=b.c
if(s!=null&&s.b<=0){a.$1(new A.dF(b))
return!0}r=b.r
if(r!=null){a.$1(r.eI(b,c))
b.a=0
return!0}return!1},
fy:function fy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
jt:function jt(a,b){this.a=a
this.b=b},
n3(a){switch(a.a){case 0:case 1:case 2:case 3:case 4:return!1
case 5:case 6:case 7:return!0}},
dD(a,b,c){var s,r,q,p
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
default:p=null}r+=a.G(p)+1}return r},
eU(a,b,c,d,e,f){return new A.eT(f,c)},
mQ(){return new A.eT(10,10)},
p1(a){var s,r=a.a,q=a.b
if(r+q===1)return a
s=Math.sqrt(Math.pow(r,2)+Math.pow(q,2))
return new A.Q(r/s,q/s)},
bS(a){switch(a){case B.al:case B.am:case B.I:case B.J:case B.L:case B.M:case B.a0:case B.a1:case B.W:case B.H:case B.X:case B.Y:case B.Z:case null:return!1
case B.V:case B.y:case B.K:case B.a_:return!0}},
pd(a){switch(a){case B.al:case B.am:case B.I:case B.J:case B.L:case B.M:case B.a0:case B.a1:case B.W:case B.H:case B.X:case B.Y:case null:case B.Z:return!1
case B.V:case B.y:case B.K:case B.a_:return!0}},
ea:function ea(a,b){this.a=a
this.b=b},
bv:function bv(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.a=a
this.b=b},
aT:function aT(a,b,c){this.b=a
this.c=b
this.e=c},
jb:function jb(){},
a0:function a0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fz:function fz(a,b){this.a=a
this.b=b},
bP:function bP(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b){this.a=a
this.b=b},
b_:function b_(a,b){this.a=a
this.b=b},
jY:function jY(){},
bO:function bO(){},
cf:function cf(a,b){this.a=a
this.b=b},
a2:function a2(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.y=e
_.z=f},
dv:function dv(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.b=b},
av:function av(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.f=c
_.r=d
_.Q=e
_.ch=f},
cL:function cL(a,b){this.a=a
this.b=b},
ap:function ap(a){this.c=a},
eT:function eT(a,b){this.a=a
this.b=b},
cd:function cd(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
cM:function cM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cS:function cS(a){this.a=a},
cR:function cR(a,b){this.a=a
this.b=b},
h2:function h2(a,b){this.a=a
this.b=b},
ch:function ch(a,b){this.a=a
this.b=b},
fg:function fg(){},
d8:function d8(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
au:function au(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a,b){this.a=a
this.b=b},
aj:function aj(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
bb:function bb(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
fI:function fI(a,b){this.b=a
this.c=b},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b){this.a=a
this.b=b},
a1:function a1(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
jZ:function jZ(a){this.a=a},
cY:function cY(a,b){this.a=a
this.b=b},
fm:function fm(a){var _=this
_.b=a
_.c=!1
_.d=null
_.e=0
_.a=!1},
fn:function fn(a){this.b=a
this.a=!1},
jl:function jl(){},
p7(a,a0,a1){var s,r,q,p,o,n,m,l,k="a_position",j=5126,i="u_resolution",h="u_offset",g=A.c([],t.ev),f=A.c(["alarm_1.mp3","background_1.mp3","background_2.mp3","bullet_impact_1.mp3","bullet_impact_2.mp3","bullet_miss_1.mp3","calm_menu_1.mp3","cave_1.mp3","click_1.mp3","death_1.mp3","door_1.mp3","door_unlock_1.mp3","drone_abandoned_desolate.mp3","fireball_1.mp3","fireball_2.mp3","flamethrower_1.mp3","heavy_punch_1.mp3","heavy_punch_2.mp3","heavy_punch_3.mp3","heavy_punch_4.mp3","Just_Pick_One_Already.mp3","laser_1.mp3","loop_1.mp3","menu_1.mp3","menu_2.mp3","miss_1.mp3","monster_deep_growl.mp3","monster_growl_1.mp3","monster_sceam_2.mp3","monster_scream_1.mp3","New_Bee.mp3","positive_1.mp3","rain_background_1.mp3","sewer_1.mp3","short_pulse_1.mp3","surface_day_1.mp3","surface_night_1.mp3","sword_impact_1.mp3","teleport_1.mp3","text_loop_1.mp3","water_footsteps_1.mp3","water_footsteps_2.mp3","water_footsteps_3.mp3","water_footsteps_4.mp3","water_footsteps_5.mp3","reload_1.mp3","pistol_1.mp3"],t.s),e=new (window.AudioContext||window.webkitAudioContext)(),d=A.qe(),c=t.G,b=t.o
d=A.aD(A.c([new A.R(k,35044,j,2,d),new A.R("a_color",35048,j,4,new Float32Array(192e3))],c),u.t,A.c([new A.x(i,B.f),new A.x(h,B.f)],b),u.Z)
s=A.aD(A.c([new A.R(k,35048,j,2,new Float32Array(8000))],c),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.c([new A.x(i,B.f),new A.x(h,B.f)],b),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
r=A.pG(window)
q=new Uint8Array(4000)
p=t.j
o=A.c([],t.pl)
b=A.c([new A.x("u_texture",B.k),new A.x(i,B.f),new A.x("u_time",B.w)],b)
b=A.aD(A.c([new A.R(k,35044,j,2,new Float32Array(A.cF(B.z)))],c),"#version 300 es\nprecision mediump float;\n\n\nuniform sampler2D u_texture;\nuniform vec2 u_resolution;\nuniform float u_time;\n\nout vec4 outColor;\n\nfloat density = 1.3;\nfloat opacityScanline = .3;\nfloat opacityNoise = .2;\n\nfloat random (vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nfloat blend(const in float x, const in float y) {\n\treturn (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));\n}\n\nvec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {\n\tvec3 z = vec3(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b));\n\treturn z * opacity + x * (1.0 - opacity);\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n  vec3 col = texture(u_texture, uv).rgb;\n  float count = u_resolution.y * density;\n  vec2 sl = vec2(sin(uv.y * count), cos(uv.y * count));\n\tvec3 scanlines = vec3(sl.x, sl.y, sl.x);\n  col += col * scanlines * opacityScanline;\n  col += col * vec3(random(uv * u_time)) * opacityNoise;\n  outColor = vec4(col, 1.0);\n}\n",b,u.v)
c=A.c([],t.hd)
n=new Uint8Array(16e6)
m=new Uint8Array(4000)
l=new Uint8Array(4000)
g=new A.fo(a0,a,g,a1,new A.hg(A.ab(t.N,t.bD),f,e),new A.jq(n,m,l,new Uint8Array(64e6),new A.i(0,0),A.ab(p,t.im),c),new A.j6(),new A.hp(d),new A.fm(s),r,new A.iR(new A.fk(q,A.ab(p,t.S))),new A.fn(o),new A.ft(b),a0.createFramebuffer(),a0.createFramebuffer(),new A.kf())
g.dJ(a,a0,a1)
return g},
jo:function jo(){this.b=!1},
fo:function fo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.k1=_.id=_.go=null
_.k2=n
_.k3=o
_.r1=_.k4=0
_.rx=!0
_.ry=null
_.x1=$
_.x2=p},
jp:function jp(a,b){this.a=a
this.b=b},
ob(a,b,c){return a*c+(1-c)*b},
a4:function a4(){},
bL:function bL(a,b,c){var _=this
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
fV:function fV(a){this.a=a},
e4:function e4(a){this.a=a},
aW:function aW(a,b){this.a=a
this.b=b},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d6:function d6(){},
fH:function fH(a){this.a=a},
ee:function ee(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iX:function iX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iV:function iV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dF:function dF(a){this.a=a},
f1:function f1(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a){this.a=a},
e3:function e3(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.b=a
this.c=b},
ka:function ka(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kb:function kb(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a){this.b=a
this.c=null
this.a=!1},
jq:function jq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iv:function iv(a){this.a=a
this.b=!0},
kx:function kx(a,b,c){this.a=a
this.c=b
this.d=c},
cc:function cc(a,b){this.a=a
this.b=b},
kc:function kc(a,b){this.a=a
this.b=b},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
o2(a,b){var s=a.f
if(s==null)return A.c([],t.Y)
if(s===B.y)return A.c([new A.bf("Open Door",new A.ee(!1,a.b))],t.Y)
if(s===B.J){if(b.at(a.b)!=null)return A.c([],t.Y)
return A.c([new A.bf("Close Door",new A.ee(!0,a.b))],t.Y)}if(s===B.H)return A.c([new A.bf("Activate Mechanism",new A.hB(a.b))],t.Y)
if(s===B.I)return A.c([new A.bf("Stairs",new A.fV(!1))],t.Y)
return A.c([],t.Y)},
bf:function bf(a,b){this.a=a
this.b=b},
pk(a){var s=u.v,r="a_position",q="u_player_visible_texture",p=t.G,o=t.o
return new A.dT(A.aD(A.c([new A.R(r,35044,5126,2,new Float32Array(A.cF(B.z)))],p),u._,A.c([new A.x("u_source_position",B.f),new A.x("u_source_color",B.ci),new A.x("u_source_strength",B.w),new A.x("u_time",B.w),new A.x("u_visible_texture",B.k),new A.x(q,B.k)],o),s),A.aD(A.c([new A.R(r,35044,5126,2,new Float32Array(A.cF(B.z)))],p),u.L,A.c([new A.x("u_light_texture",B.k),new A.x("u_game_world_texture",B.k),new A.x(q,B.k),new A.x("u_resolution",B.f),new A.x("u_block_size",B.f),new A.x("u_offset",B.f)],o),s),a,A.c([],t.ow))},
dT:function dT(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.r=_.f=_.e=null
_.y=d
_.z=null
_.a=!1},
p5(a){switch(a.a){case 0:return B.ak
case 1:return B.aj
case 2:return B.ai
case 3:return B.ah
case 4:return B.q
case 5:return B.r
case 6:return B.o
case 7:return B.p}},
p4(a){switch(a.a){case 4:return B.aX
case 5:return B.aW
case 6:return B.aX
case 7:return B.aW
default:return B.f4}},
a9(a,b){switch(b.a){case 4:return a.C(0,new A.i(0,-1))
case 1:return a.C(0,new A.i(1,-1))
case 5:return a.C(0,new A.i(1,0))
case 0:return a.C(0,new A.i(1,1))
case 6:return a.C(0,new A.i(0,1))
case 2:return a.C(0,new A.i(-1,1))
case 7:return a.C(0,new A.i(-1,0))
case 3:return a.C(0,new A.i(-1,-1))}},
ll(a,b,c){var s
switch(c.a){case 0:return!1
case 1:return a.c===B.b||A.P(A.bS(a.f))
case 2:s=a.f
if(s===B.y)return!1
return a.c===B.b||A.P(A.bS(s))
case 3:return a.c===B.b||A.P(A.bS(a.f))||b.at(a.b)!=null}},
qZ(a,b){var s=B.e.bo(a,-1,1),r=B.e.bo(b,-1,1)
switch(s){case-1:switch(r){case-1:return B.ak
case 0:return B.r
case 1:return B.aj}break
case 0:switch(r){case-1:return B.o
case 1:return B.q}break
case 1:switch(r){case-1:return B.ai
case 0:return B.p
case 1:return B.ah}break}throw A.d(A.ah(A.B(s)+","+A.B(r)))},
bz:function bz(a,b,c){var _=this
_.b=_.a=null
_.d=a
_.e=b
_.f=c},
b1:function b1(a,b){this.a=a
this.b=b},
k6:function k6(){},
fk:function fk(a,b){this.a=a
this.b=b},
he:function he(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.a=!1},
mT(a,b,c,d,e){return new A.R(d,a,c,e,b)},
c1(a,b){return new A.x(b,a)},
aD(a,b,c,d){var s=t.N
return new A.jB(d,b,c,a,A.ab(s,t.o3),A.ab(s,t.aN))},
nO(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.a_(a.getShaderParameter(s,35713),!0)){A.eQ(a.getShaderInfoLog(s))
throw A.d(A.ah("Invalid Shader"))}return s},
R:function R(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x:function x(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=b},
hL:function hL(a,b){this.a=a
this.c=b},
iA:function iA(a,b){this.a=a
this.b=b},
jB:function jB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
kf:function kf(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
aw:function aw(){},
fW:function fW(){},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function kj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qG(a,b){var s=t.r
s.a(a)
s.a(b)
return B.e.R(a.y,b.y)},
rd(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.G($.E,t.aa),p=J.mP(r),o=p.$ti,n=o.i("~(1)?").a(new A.lw(a,s,r,new A.ak(q,t.fB)))
t.Z.a(null)
A.em(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
nr(a,b){var s=35048,r=5126,q=A.c([new A.x("u_texture",B.k),new A.x("u_resolution",B.f),new A.x("u_offset",B.f)],t.o),p=new Float32Array(12e4),o=new Float32Array(12e4),n=new Float32Array(24e4)
q=new A.eb(A.aD(A.c([new A.R("a_position",s,r,2,p),new A.R("a_texcoord",s,r,2,o),new A.R("a_color",s,r,4,n),new A.R("a_bg_color",s,r,4,new Float32Array(24e4))],t.G),u.I,q,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"),A.n4(A.rl(),t.r),b)
q.dK(a,b)
return q},
pB(a){return new A.O(a.a,a.b,-1,-1,null)},
n5(a,b,c,d){var s,r,q,p,o,n,m=null
switch(a){case B.al:case null:return m
case B.am:s=m
r=s
q=3
p=16
o=1
break
case B.I:q=14
p=3
o=1
r=B.fg
s=B.d5
break
case B.y:s=m
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
case B.L:n=t.e.i("W.T")
if(d.a===B.B){n=B.b4.h(0,n.a(900))
n.toString
r=n}else{n=B.b1.h(0,n.a(800))
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
case B.a0:n=B.ao.h(0,t.e.i("W.T").a(400))
n.toString
s=m
r=n
q=1
p=13
o=1
break
case B.a1:n=B.ao.h(0,t.e.i("W.T").a(400))
n.toString
s=m
r=n
q=2
p=13
o=0.8
break
case B.V:n=B.b1.h(0,t.e.i("W.T").a(600))
n.toString
s=m
r=n
q=6
p=0
o=1
break
case B.W:n=B.b3.h(0,t.e.i("W.T").a(900))
n.toString
s=n
r=m
q=0
p=15
o=1
break
case B.H:n=B.b5.h(0,t.e.i("W.T").a(500))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.X:n=B.b5.h(0,t.e.i("W.T").a(100))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.Y:s=m
r=s
q=13
p=3
o=1
break
case B.Z:n=B.b3.h(0,t.e.i("W.T").a(900))
n.toString
s=m
r=n
q=14
p=5
o=1
break
case B.a_:n=B.ao.h(0,t.e.i("W.T").a(600))
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
o=1}n=new A.O(q,p,b,c,r)
n.sdt(0,o)
n.sau(0,s)
return n},
lw:function lw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eb:function eb(a,b,c){var _=this
_.b=a
_.c=null
_.d=b
_.e=c
_.f=!0
_.a=!1},
kk:function kk(a){this.a=a},
O:function O(a,b,c,d,e){var _=this
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
me(a,b,c){return new A.jW(b,c,a)},
qe(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
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
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(a){var _=this
_.b=a
_.c=null
_.a=_.d=!1},
hr:function hr(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=0
_.a=!1},
h7:function h7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null},
l5:function l5(a){this.a=a},
rc(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.G($.E,t.aa),p=J.mP(r),o=p.$ti,n=o.i("~(1)?").a(new A.lv(a,s,r,new A.ak(q,t.fB)))
t.Z.a(null)
A.em(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
mj(a){var s,r,q,p,o=35048,n=5126,m=t.f,l=A.c([],m)
l=new A.f6(B.ar,l,B.m)
l.aa(null)
s=A.c([],t.s)
r=A.n2(A.c([],m),!0)
q=A.c([],m)
s=new A.ha(r,s,q,B.m)
s.aa(null)
r=A.mf(108,r,0,0,0)
q=B.ap.h(0,t.e.i("W.T").a(900))
q.toString
s.ap(A.mV(r,q))
m=A.c([],m)
m=new A.dL(l,s,m,B.m)
m.aa(null)
m.ap(l)
m.ap(s)
s=m.cb()
m.e=s
m.ap(s)
s=A.c([],t.k)
l=A.c([new A.x("u_texture",B.k),new A.x("u_resolution",B.f)],t.o)
r=new Float32Array(12e4)
q=new Float32Array(12e4)
p=new Float32Array(24e4)
m=new A.hx(m,s,A.aD(A.c([new A.R("a_position",o,n,2,r),new A.R("a_texcoord",o,n,2,q),new A.R("a_color",o,n,4,p),new A.R("a_bg_color",o,n,4,new Float32Array(24e4))],t.G),u.I,l,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = ((a_position / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"))
m.dL(a)
return m},
mi(a){var s=A.c([],t.fC),r=A.c([],t.f)
s=new A.hq(a,s,r,B.m)
s.aa(null)
return s},
n2(a,b){var s=new A.fd(b,a,B.m)
s.aa(a)
return s},
mV(a,b){var s=A.c([a],t.f),r=new A.f2(b,new A.aY(B.m,0,0),s,B.m)
r.aa(s)
return r},
mf(a,b,c,d,e){var s=A.c([b],t.f),r=new A.h1(e,a,c,d,s,B.m)
r.aa(s)
return r},
nn(a,b,c,d){var s,r,q,p=t.f,o=A.c([],p)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.A)(a),++r)o.push(A.mi(J.dt(a[r])))
o=A.c([A.mV(A.mf(36,A.n2(o,!1),48,24,36),B.A)],p)
q=new A.f5(B.A,B.ar,o,B.m)
q.aa(o)
p=A.c([q],p)
o=new A.e8(a,c,b,p,B.m,d.i("e8<0>"))
o.aa(p)
return o},
lv:function lv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(a,b,c){var _=this
_.b=null
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!0
_.a=!1},
kv:function kv(a){this.a=a},
aY:function aY(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(){},
hq:function hq(a,b,c,d){var _=this
_.e=a
_.f=1
_.r=b
_.a=null
_.b=!0
_.c=c
_.d=d},
fd:function fd(a,b,c){var _=this
_.e=a
_.a=null
_.b=!0
_.c=b
_.d=c},
f2:function f2(a,b,c,d){var _=this
_.e=a
_.f=b
_.a=null
_.b=!0
_.c=c
_.d=d},
h1:function h1(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.a=null
_.b=!0
_.c=e
_.d=f},
f5:function f5(a,b,c,d){var _=this
_.e=a
_.z=b
_.a=null
_.b=!0
_.c=c
_.d=d},
e8:function e8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.r=c
_.x=0
_.a=null
_.b=!0
_.c=d
_.d=e
_.$ti=f},
fK:function fK(a,b,c){this.a=a
this.b=b
this.$ti=c},
dL:function dL(a,b,c,d){var _=this
_.e=null
_.f=a
_.r=b
_.y=_.x=0
_.a=_.z=null
_.b=!0
_.c=c
_.d=d},
jv:function jv(a){this.a=a},
ju:function ju(a){this.a=a},
jx:function jx(a){this.a=a},
jw:function jw(a){this.a=a},
fw:function fw(a,b){this.a=a
this.b=b},
f6:function f6(a,b,c){var _=this
_.f=_.e=null
_.r=a
_.a=null
_.b=!0
_.c=b
_.d=c},
ha:function ha(a,b,c,d){var _=this
_.e=a
_.f=b
_.a=null
_.b=!0
_.c=c
_.d=d},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qd(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
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
fq:function fq(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.a=_.e=!1},
hF:function hF(a){this.c=a
this.a=!1},
qS(a){var s,r=A.mc(4000,new A.lh(a),t.W),q=A.c([],t.c7)
for(s=0;s<4000;++s);return new A.hj(q,A.ab(t.K,t.lZ),new A.a5(100,40,r,t.U),a.b)},
ln(a){var s,r,q,p,o
for(s=a.c,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.i(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.P(A.bS(o.f))))return p}throw A.d("Solid")},
rg(a,b){var s,r,q
for(s=a.c;!0;){r=$.eS()
q=new A.i(B.c.u(r.I()*98)+1,B.c.u(r.I()*38)+1)
r=s.h(0,q)
if(!(r.c===B.b||A.P(A.bS(r.f)))&&a.at(q)==null)return q}},
b8(a,b,c){return B.c.u(a.I()*(c-b))+b},
qh(a,b,c){var s=b.length
if(s===1){if(0>=s)return A.b(b,0)
return b[0]}s=A.b8(a,0,s-1)
if(!(s>=0&&s<b.length))return A.b(b,s)
return b[s]},
hH:function hH(a,b){this.a=a
this.d=0
this.e=b},
lh:function lh(a){this.a=a},
hj:function hj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kB:function kB(a,b){this.a=a
this.b=b},
ji:function ji(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jj:function jj(a){this.a=a},
f8:function f8(a){this.a=a},
ja:function ja(a){this.a=a},
jz:function jz(){},
jA:function jA(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
lQ(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.P))break
q=A.a9(q,b);++p}return p},
mR(a,b,c){return new A.aQ(a,b,c.i("aQ<0>"))},
cI(a,b,c){var s=A.a9(a,b)
if(c.e.h(0,s)===B.P)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
ng(a){return new A.d0(a)},
bF(a,b,c){return new A.cz(c,a,b)},
dr(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=A.c([],t.D),a4=t.S,a5=A.ab(t.c1,a4)
for(s=a7.length,r=0;r<a7.length;a7.length===s||(0,A.A)(a7),++r){q=a7[r]
if(q.gbG())q=new A.iB(q)
p=a5.h(0,q)
if(p==null){a5.j(0,q,0)
p=0}a5.j(0,q,p+1)}for(s=a5.gaq(a5),s=s.gw(s),o=t.q,n=t.n4,m=t.ld,l=t.bu,k=a6.a,j=J.dq(k),i=t.n;s.n();){h=s.gp(s)
q=h.a
g=h.b
f=A.c([],o)
e=A.c([],i)
for(h=j.gw(k);h.n();){d=h.gp(h)
c=q.gbr(q).U(d,a8)
if(c<1000){B.a.l(f,d)
B.a.l(e,c)}}if(f.length===0){B.a.l(a3,q)
continue}h=A.c([],l)
for(b=0;b<f.length;++b){d=f[b]
if(!(b<e.length))return A.b(e,b)
h.push(new A.b6(d,e[b]))}d=m.a(new A.lP())
if(!!h.immutable$list)A.S(A.C("sort"))
a=h.length-1
if(a-0<=32)A.nq(h,0,a,d,n)
else A.np(h,0,a,d,n)
a0=B.a.dB(h,0,Math.min(3*g,e.length))
B.a.bU(a0)
a1=A.c([],o)
a2=A.jP(a4)
for(;!0;){for(b=0;b<a0.length;++b){if(a2.M(0,b))continue
if(a1.length===g)break
if($.oz().I()<0.33){if(!(b<a0.length))return A.b(a0,b)
B.a.l(a1,a0[b].a)
a2.l(0,b)}}h=a1.length
if(h===g)break
else if(g-h>a0.length-a2.a)break}if(a1.length<g)B.a.l(a3,q)
for(h=a1.length,r=0;r<a1.length;a1.length===h||(0,A.A)(a1),++r)q.d7(a1[r],a8)
if(a0.length===0)B.a.l(a3,q)}for(a4=j.gw(k),s=a8.e,o=a6.c;a4.n();){n=a4.gp(a4)
if(s.h(0,n)===B.ay||s.h(0,n)===B.az)B.a.l(o,n)}return a3},
oa(a,b){var s,r,q,p,o,n,m,l,k,j
B.a.b0(a,new A.lO())
if(0>=a.length)return A.b(a,0)
A.dr(a[0],$.oN(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.A)(s),++p)q.j(0,s[p],B.b_)
if(0>=a.length)return A.b(a,0)
a[0].e=!0
for(s=A.nv(a,1,null,A.Z(a).c),r=s.$ti,s=new A.by(s,s.gm(s),r.i("by<b3.E>")),o=b.a.a.a,r=r.i("b3.E"),n=t.c1,m=2;s.n();){l=r.a(s.d)
k=l.a
j=J.az(k)
if(j.gm(k)<30){if(m>0){k=A.jR($.m0(),!0,n)
k.push($.mK())}else k=$.m0()
if(!B.a.M(A.dr(l,k,b),$.mK()))--m}else if(j.gm(k)<60)A.dr(l,$.oG(),b)
else if(j.gm(k)<100)A.dr(l,$.oE(),b)
else switch(o){case 0:case 1:case 2:case 5:case 6:A.dr(l,$.oC(),b)
break
case 3:case 4:A.dr(l,$.oD(),b)
break}}if(m===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.A)(s),++p)q.j(0,s[p],B.b0)}},
aR:function aR(){},
hG:function hG(){},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
d1:function d1(a,b){this.b=a
this.$ti=b},
fX:function fX(){},
f9:function f9(){},
eV:function eV(){},
fh:function fh(){},
du:function du(a){this.a=a},
d0:function d0(a){this.a=a},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
lI:function lI(){},
lB:function lB(){},
lF:function lF(){},
lA:function lA(){},
lC:function lC(){},
lG:function lG(){},
lH:function lH(){},
lE:function lE(){},
lD:function lD(){},
lz:function lz(){},
b6:function b6(a,b){this.a=a
this.b=b},
iB:function iB(a){this.a=a},
lP:function lP(){},
lO:function lO(){},
p6(a){var s=t.q
return new A.a3(a,A.c([],s),A.c([],s),A.jn(a))},
jn(a){var s,r,q=J.az(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gm(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.i(B.c.u(p/q.gm(a)),B.c.u(o/q.gm(a)))},
q9(a){switch(a.a){case 10:case 11:case 9:case 1:case 3:return!0
default:return!1}},
dM:function dM(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
j0:function j0(a,b){this.a=a
this.b=b},
j2:function j2(){},
j3:function j3(){},
j4:function j4(a){this.a=a},
j1:function j1(a){this.a=a},
ef:function ef(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jm:function jm(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
fD:function fD(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jI:function jI(a,b){this.a=a
this.b=b},
k3:function k3(){},
jD:function jD(a){this.a=a},
jE:function jE(){},
jF:function jF(){},
jG:function jG(){},
jH:function jH(){},
k7:function k7(){},
bU:function bU(a,b){this.a=a
this.b=b},
e7:function e7(a,b){this.a=a
this.b=b},
kh:function kh(a,b){this.b=a
this.a=b},
e6:function e6(a,b){this.a=a
this.b=b},
ko:function ko(a){this.a=a},
kp:function kp(){},
kq:function kq(a){this.a=a},
pG(a){var s=new A.ky(A.nt(t.h8),A.nt(t.bd))
s.dM(a)
return s},
b2(a,b,c,d){return new A.aF(a,c,d,b)},
ky:function ky(a,b){this.a=null
this.b=a
this.c=b},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(a,b){this.a=a
this.b=b},
mA(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
o5(a){var s=B.h.a2(u.s,a>>>6)+(a&63),r=s&1,q=B.h.a2(u.M,s>>>1)
return q>>>4&-r|q&15&r-1},
o0(a,b){var s=B.h.a2(u.s,1024+(a&1023))+(b&1023),r=s&1,q=B.h.a2(u.M,s>>>1)
return q>>>4&-r|q&15&r-1},
qY(a,b){return J.oS(t.n6.a(a),b)},
fC(a){var s,r
if(a instanceof A.a0){s=B.aO
r=null}else if(a instanceof A.a2){s=B.aM
r=null}else if(a instanceof A.av){s=B.aN
r=0}else{if(a instanceof A.jb)s=B.eR
else{J.dt(a)
s=B.aP}r=null}$.n6=$.n6+1
return new A.aT(a,s,r)},
r9(a,b,c){var s,r,q=a.r
if(q!=null){if(b===q.c)return!0
s=a.t()
r=b.t()
if(s==null||r==null)return!1
return c.f.a8(s).h(0,r)}return!0},
rk(a){A.b7(a)
$.mF().O(a,$.mH())
B.cm.da(window,A.o6())},
my(){var s=0,r=A.bn(t.z),q,p,o
var $async$my=A.bo(function(a,b){if(a===1)return A.bk(b,r)
while(true)switch(s){case 0:o=$.mF()
o.e.aT()
q=t.w
q=new A.fy(o,A.c([],q),A.c([],q),A.c([],t.fy),A.c([],t.ge))
p=o.cx.b
new A.c2(p,A.F(p).i("c2<1>")).d2(q.geU())
q=t.x.a(q.gcq())
B.a.l(o.c,q)
B.cm.da(window,A.o6())
return A.bl(null,r)}})
return A.bm($async$my,r)}},J={
mz(a,b,c,d){return{i:a,p:b,e:c,x:d}},
lp(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.mx==null){A.r6()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.mk("Return interceptor for "+A.B(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.kZ
if(o==null)o=$.kZ=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.re(a)
if(p!=null)return p
if(typeof a=="function")return B.eT
s=Object.getPrototypeOf(a)
if(s==null)return B.bb
if(s===Object.prototype)return B.bb
if(typeof q=="function"){o=$.kZ
if(o==null)o=$.kZ=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aA,enumerable:false,writable:true,configurable:true})
return B.aA}return B.aA},
pg(a,b){if(a<0||a>4294967295)throw A.d(A.bA(a,0,4294967295,"length",null))
return J.pi(new Array(a),b)},
ph(a,b){if(a<0)throw A.d(A.cK("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("t<0>"))},
pi(a,b){return J.n9(A.c(a,b.i("t<0>")),b)},
n9(a,b){a.fixed$length=Array
return a},
dp(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dR.prototype
return J.fE.prototype}if(typeof a=="string")return J.cl.prototype
if(a==null)return J.dS.prototype
if(typeof a=="boolean")return J.dQ.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof A.v)return a
return J.lp(a)},
az(a){if(typeof a=="string")return J.cl.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof A.v)return a
return J.lp(a)},
dq(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof A.v)return a
return J.lp(a)},
r1(a){if(typeof a=="number")return J.cV.prototype
if(typeof a=="string")return J.cl.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.da.prototype
return a},
lo(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof A.v)return a
return J.lp(a)},
a_(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dp(a).q(a,b)},
mM(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.ra(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.az(a).h(a,b)},
mN(a,b,c){return J.dq(a).j(a,b,c)},
oR(a,b,c,d){return J.lo(a).eE(a,b,c,d)},
oS(a,b){return J.r1(a).R(a,b)},
mO(a,b){return J.dq(a).B(a,b)},
oT(a,b){return J.dq(a).D(a,b)},
aA(a){return J.dp(a).gv(a)},
an(a){return J.dq(a).gw(a)},
ao(a){return J.az(a).gm(a)},
mP(a){return J.lo(a).gbC(a)},
oU(a,b,c){return J.dq(a).d3(a,b,c)},
dt(a){return J.dp(a).k(a)},
a:function a(){},
dQ:function dQ(){},
dS:function dS(){},
cm:function cm(){},
h3:function h3(){},
da:function da(){},
bw:function bw(){},
t:function t(a){this.$ti=a},
jJ:function jJ(a){this.$ti=a},
dx:function dx(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cV:function cV(){},
dR:function dR(){},
fE:function fE(){},
cl:function cl(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.m9.prototype={}
J.a.prototype={
q(a,b){return a===b},
gv(a){return A.cw(a)},
k(a){return"Instance of '"+A.k9(a)+"'"}}
J.dQ.prototype={
k(a){return String(a)},
dr(a,b){return b||a},
gv(a){return a?519018:218159},
$iD:1}
J.dS.prototype={
q(a,b){return null==b},
k(a){return"null"},
gv(a){return 0},
$iY:1}
J.cm.prototype={
gv(a){return 0},
k(a){return String(a)}}
J.h3.prototype={}
J.da.prototype={}
J.bw.prototype={
k(a){var s=a[$.oe()]
if(s==null)return this.dE(a)
return"JavaScript function for "+J.dt(s)},
$ici:1}
J.t.prototype={
l(a,b){A.Z(a).c.a(b)
if(!!a.fixed$length)A.S(A.C("add"))
a.push(b)},
bJ(a,b){var s
if(!!a.fixed$length)A.S(A.C("removeAt"))
s=a.length
if(b>=s)throw A.d(A.nj(b,null))
return a.splice(b,1)[0]},
L(a,b){var s
if(!!a.fixed$length)A.S(A.C("remove"))
for(s=0;s<a.length;++s)if(J.a_(a[s],b)){a.splice(s,1)
return!0}return!1},
eg(a,b,c){var s,r,q,p,o
A.Z(a).i("D(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.P(b.$1(p)))s.push(p)
if(a.length!==r)throw A.d(A.be(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
K(a,b){A.Z(a).i("j<1>").a(b)
if(!!a.fixed$length)A.S(A.C("addAll"))
this.dP(a,b)
return},
dP(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.be(a))
for(r=0;r<s;++r)a.push(b[r])},
D(a,b){var s,r
A.Z(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.d(A.be(a))}},
d3(a,b,c){var s=A.Z(a)
return new A.dY(a,s.E(c).i("1(2)").a(b),s.i("@<1>").E(c).i("dY<1,2>"))},
eS(a,b,c){var s,r,q,p=A.Z(a)
p.i("D(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(A.P(b.$1(q)))return q
if(a.length!==s)throw A.d(A.be(a))}return c.$0()},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
dB(a,b,c){var s=a.length
if(b>s)throw A.d(A.bA(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.bA(c,b,s,"end",null))
if(b===c)return A.c([],A.Z(a))
return A.c(a.slice(b,c),A.Z(a))},
geR(a){if(a.length>0)return a[0]
throw A.d(A.n8())},
gdA(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.d(A.n8())
throw A.d(A.pf())},
bT(a,b,c,d){var s,r,q,p
A.Z(a).i("j<1>").a(d)
if(!!a.immutable$list)A.S(A.C("setRange"))
A.ke(b,c,a.length)
s=c-b
if(s===0)return
A.kd(0,"skipCount")
r=d
q=J.az(r)
if(s>q.gm(r))throw A.d(A.pe())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
eH(a,b){var s,r
A.Z(a).i("D(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.P(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.be(a))}return!1},
b0(a,b){var s=A.Z(a)
s.i("h(1,1)?").a(b)
if(!!a.immutable$list)A.S(A.C("sort"))
A.pz(a,b,s.c)},
bU(a){var s,r,q,p
if(!!a.immutable$list)A.S(A.C("shuffle"))
s=a.length
for(;s>1;){r=B.n.G(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
eZ(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.a_(a[s],b))return s}return-1},
M(a,b){var s
for(s=0;s<a.length;++s)if(J.a_(a[s],b))return!0
return!1},
k(a){return A.m8(a,"[","]")},
gw(a){return new J.dx(a,a.length,A.Z(a).i("dx<1>"))},
gv(a){return A.cw(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.S(A.C("set length"))
if(b>a.length)A.Z(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cG(a,b))
return a[b]},
j(a,b,c){A.K(b)
A.Z(a).c.a(c)
if(!!a.immutable$list)A.S(A.C("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.cG(a,b))
a[b]=c},
$ip:1,
$ij:1,
$io:1}
J.jJ.prototype={}
J.dx.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.A(q))
s=r.c
if(s>=p){r.scd(null)
return!1}r.scd(q[s]);++r.c
return!0},
scd(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
J.cV.prototype={
R(a,b){var s
A.b7(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaU(b)
if(this.gaU(a)===s)return 0
if(this.gaU(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaU(a){return a===0?1/a<0:a<0},
aF(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.C(""+a+".toInt()"))},
cK(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.C(""+a+".ceil()"))},
ag(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.C(""+a+".floor()"))},
u(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.C(""+a+".round()"))},
al(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
bo(a,b,c){if(B.e.R(b,c)>0)throw A.d(A.nX(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
de(a,b){var s
if(b>20)throw A.d(A.bA(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaU(a))return"-"+s
return s},
fk(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.bA(b,2,36,"radix",null))
s=a.toString(b)
if(B.h.bp(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.S(A.C("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.h.bS("0",p)},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dq(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bZ(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cw(a,b)},
X(a,b){return(a|0)===a?a/b|0:this.cw(a,b)},
cw(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.C("Result of truncating division is "+A.B(s)+": "+A.B(a)+" ~/ "+b))},
cv(a,b){var s
if(a>0)s=this.em(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
em(a,b){return b>31?0:a>>>b},
$iaf:1,
$iM:1,
$iN:1}
J.dR.prototype={$ih:1}
J.fE.prototype={}
J.cl.prototype={
bp(a,b){if(b<0)throw A.d(A.cG(a,b))
if(b>=a.length)A.S(A.cG(a,b))
return a.charCodeAt(b)},
a2(a,b){if(b>=a.length)throw A.d(A.cG(a,b))
return a.charCodeAt(b)},
C(a,b){return a+b},
aH(a,b,c){return a.substring(b,A.ke(b,c,a.length))},
bS(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.cZ)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
d8(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bS(c,s)+a},
bs(a,b,c){var s=a.length
if(c>s)throw A.d(A.bA(c,0,s,null,null))
return A.rm(a,b,c)},
R(a,b){var s
A.ae(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
k(a){return a},
gv(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cG(a,b))
return a[b]},
$iaf:1,
$inh:1,
$iu:1}
A.cn.prototype={
k(a){var s="LateInitializationError: "+this.a
return s}}
A.ki.prototype={}
A.p.prototype={}
A.b3.prototype={
gw(a){var s=this
return new A.by(s,s.gm(s),A.F(s).i("by<b3.E>"))}}
A.ed.prototype={
ge1(){var s=J.ao(this.a),r=this.c
if(r==null||r>s)return s
return r},
geo(){var s=J.ao(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.ao(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.V()
return s-q},
B(a,b){var s=this,r=s.geo()+b
if(b<0||r>=s.ge1())throw A.d(A.T(b,s,"index",null,null))
return J.mO(s.a,r)}}
A.by.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.az(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.be(q))
s=r.c
if(s>=o){r.sax(null)
return!1}r.sax(p.B(q,s));++r.c
return!0},
sax(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
A.cp.prototype={
gw(a){var s=A.F(this)
return new A.dX(J.an(this.a),this.b,s.i("@<1>").E(s.Q[1]).i("dX<1,2>"))},
gm(a){return J.ao(this.a)}}
A.dI.prototype={$ip:1}
A.dX.prototype={
n(){var s=this,r=s.b
if(r.n()){s.sax(s.c.$1(r.gp(r)))
return!0}s.sax(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
sax(a){this.a=this.$ti.i("2?").a(a)}}
A.dY.prototype={
gm(a){return J.ao(this.a)},
B(a,b){return this.b.$1(J.mO(this.a,b))}}
A.aN.prototype={
gw(a){return new A.eg(J.an(this.a),this.b,this.$ti.i("eg<1>"))}}
A.eg.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.P(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.as.prototype={}
A.cP.prototype={
k(a){return A.md(this)},
$iX:1}
A.dE.prototype={
gm(a){return this.a},
aS(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.aS(0,b))return null
return this.b[A.ae(b)]},
D(a,b){var s,r,q,p,o,n=this.$ti
n.i("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.ae(s[p])
b.$2(o,n.a(q[o]))}}}
A.aa.prototype={
bb(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.pc(r)
o=A.mb(A.qx(),q,r,s.Q[1])
A.nZ(p.a,o)
p.$map=o}return o},
h(a,b){return this.bb().h(0,b)},
D(a,b){this.$ti.i("~(1,2)").a(b)
this.bb().D(0,b)},
gm(a){var s=this.bb()
return s.gm(s)}}
A.jy.prototype={
$1(a){return this.a.b(a)},
$S:26}
A.kt.prototype={
a5(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.e2.prototype={
k(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.fF.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hA.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.k5.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.dJ.prototype={}
A.ey.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ib5:1}
A.ce.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.oc(r==null?"unknown":r)+"'"},
$ici:1,
gfu(){return this},
$C:"$1",
$R:1,
$D:null}
A.fa.prototype={$C:"$0",$R:0}
A.fb.prototype={$C:"$2",$R:2}
A.ho.prototype={}
A.hk.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.oc(s)+"'"}}
A.cN.prototype={
q(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cN))return!1
return this.$_target===b.$_target&&this.a===b.a},
gv(a){return(A.ly(this.a)^A.cw(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.k9(t.K.a(this.a))+"'")}}
A.hc.prototype={
k(a){return"RuntimeError: "+this.a}}
A.hI.prototype={
k(a){return"Assertion failed: "+A.fp(this.a)}}
A.aE.prototype={
gm(a){return this.a},
gab(a){return new A.dU(this,A.F(this).i("dU<1>"))},
gbP(a){var s=this,r=A.F(s)
return A.nd(s.gab(s),new A.jL(s),r.c,r.Q[1])},
aS(a,b){var s=this.cX(b)
return s},
cX(a){var s=this,r=s.d
if(r==null)return!1
return s.aw(s.aI(r,s.av(a)),a)>=0},
K(a,b){A.F(this).i("X<1,2>").a(b).D(0,new A.jK(this))},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bc(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bc(p,b)
q=r==null?n:r.b
return q}else return o.cY(b)},
cY(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.aI(p,q.av(a))
r=q.aw(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.F(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.c0(s==null?q.b=q.bh():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.c0(r==null?q.c=q.bh():r,b,c)}else q.d_(b,c)},
d_(a,b){var s,r,q,p,o=this,n=A.F(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.bh()
r=o.av(a)
q=o.aI(s,r)
if(q==null)o.bm(s,r,[o.bi(a,b)])
else{p=o.aw(q,a)
if(p>=0)q[p].b=b
else q.push(o.bi(a,b))}},
L(a,b){var s=this.cZ(b)
return s},
cZ(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.av(a)
r=o.aI(n,s)
q=o.aw(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.ez(p)
if(r.length===0)o.ce(n,s)
return p.b},
aP(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bg()}},
D(a,b){var s,r,q=this
A.F(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.be(q))
s=s.c}},
c0(a,b,c){var s,r=this,q=A.F(r)
q.c.a(b)
q.Q[1].a(c)
s=r.bc(a,b)
if(s==null)r.bm(a,b,r.bi(b,c))
else s.b=c},
bg(){this.r=this.r+1&67108863},
bi(a,b){var s=this,r=A.F(s),q=new A.jN(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.bg()
return q},
ez(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.bg()},
av(a){return J.aA(a)&0x3ffffff},
aw(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a_(a[r].a,b))return r
return-1},
k(a){return A.md(this)},
bc(a,b){return a[b]},
aI(a,b){return a[b]},
bm(a,b,c){a[b]=c},
ce(a,b){delete a[b]},
bh(){var s="<non-identifier-key>",r=Object.create(null)
this.bm(r,s,r)
this.ce(r,s)
return r},
$ijM:1}
A.jL.prototype={
$1(a){var s=this.a,r=A.F(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.F(this.a).i("2(1)")}}
A.jK.prototype={
$2(a,b){var s=this.a,r=A.F(s)
s.j(0,r.c.a(a),r.Q[1].a(b))},
$S(){return A.F(this.a).i("~(1,2)")}}
A.jN.prototype={}
A.dU.prototype={
gm(a){return this.a.a},
gw(a){var s=this.a,r=new A.dV(s,s.r,this.$ti.i("dV<1>"))
r.c=s.e
return r}}
A.dV.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.be(q))
s=r.c
if(s==null){r.sc_(null)
return!1}else{r.sc_(s.a)
r.c=s.c
return!0}},
sc_(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
A.lr.prototype={
$1(a){return this.a(a)},
$S:27}
A.ls.prototype={
$2(a,b){return this.a(a,b)},
$S:28}
A.lt.prototype={
$1(a){return this.a(A.ae(a))},
$S:44}
A.kJ.prototype={
aL(){var s=this.b
if(s===this)throw A.d(new A.cn("Local '"+this.a+"' has not been initialized."))
return s},
ae(){var s=this.b
if(s===this)throw A.d(A.nb(this.a))
return s}}
A.fP.prototype={$in_:1}
A.cu.prototype={$iaM:1}
A.cZ.prototype={
gm(a){return a.length},
$iy:1}
A.ct.prototype={
h(a,b){A.bG(b,a,a.length)
return a[b]},
j(a,b,c){A.K(b)
A.nL(c)
A.bG(b,a,a.length)
a[b]=c},
$ip:1,
$ij:1,
$io:1}
A.e_.prototype={
j(a,b,c){A.K(b)
A.K(c)
A.bG(b,a,a.length)
a[b]=c},
$ip:1,
$ij:1,
$io:1}
A.dZ.prototype={$im7:1}
A.fQ.prototype={
h(a,b){A.bG(b,a,a.length)
return a[b]}}
A.fR.prototype={
h(a,b){A.bG(b,a,a.length)
return a[b]}}
A.fS.prototype={
h(a,b){A.bG(b,a,a.length)
return a[b]}}
A.fT.prototype={
h(a,b){A.bG(b,a,a.length)
return a[b]}}
A.fU.prototype={
h(a,b){A.bG(b,a,a.length)
return a[b]}}
A.d_.prototype={
gm(a){return a.length},
h(a,b){A.bG(b,a,a.length)
return a[b]},
$ipE:1}
A.e0.prototype={
gm(a){return a.length},
h(a,b){A.bG(b,a,a.length)
return a[b]},
$ipF:1}
A.er.prototype={}
A.es.prototype={}
A.et.prototype={}
A.eu.prototype={}
A.b4.prototype={
i(a){return A.l8(v.typeUniverse,this,a)},
E(a){return A.q2(v.typeUniverse,this,a)}}
A.hY.prototype={}
A.eF.prototype={
k(a){return A.am(this.a,null)},
$inx:1}
A.hU.prototype={
k(a){return this.a}}
A.eG.prototype={$ic0:1}
A.kG.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:13}
A.kF.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:19}
A.kH.prototype={
$0(){this.a.$0()},
$S:8}
A.kI.prototype={
$0(){this.a.$0()},
$S:8}
A.eE.prototype={
dN(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.bp(new A.l7(this,b),0),a)
else throw A.d(A.C("`setTimeout()` not found."))},
dO(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.bp(new A.l6(this,a,Date.now(),b),0),a)
else throw A.d(A.C("Periodic timer."))},
eK(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.d(A.C("Canceling a timer."))},
$ihu:1}
A.l7.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.l6.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.e.bZ(s,o)}q.c=p
r.d.$1(q)},
$S:8}
A.eh.prototype={
Y(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.c2(b)
else{s=r.a
if(q.i("at<1>").b(b))s.c5(b)
else s.az(q.c.a(b))}},
bq(a,b){var s=this.a
if(this.b)s.P(a,b)
else s.b4(a,b)},
$ife:1}
A.lb.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.lc.prototype={
$2(a,b){this.a.$2(1,new A.dJ(a,t.l.a(b)))},
$S:33}
A.lg.prototype={
$2(a,b){this.a(A.K(a),b)},
$S:32}
A.dh.prototype={
k(a){return"IterationMarker("+this.b+", "+A.B(this.a)+")"}}
A.c5.prototype={
gp(a){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gp(s)},
n(){var s,r,q,p,o,n,m=this
for(s=m.$ti.i("U<1>");!0;){r=m.c
if(r!=null)if(r.n())return!0
else m.scn(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.dh){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sc1(null)
return!1}if(0>=o.length)return A.b(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.an(r))
if(n instanceof A.c5){r=m.d
if(r==null)r=m.d=[]
B.a.l(r,m.a)
m.a=n.a
continue}else{m.scn(n)
continue}}}}else{m.sc1(q)
return!0}}return!1},
sc1(a){this.b=this.$ti.i("1?").a(a)},
scn(a){this.c=this.$ti.i("U<1>?").a(a)},
$iU:1}
A.eB.prototype={
gw(a){return new A.c5(this.a(),this.$ti.i("c5<1>"))}}
A.dz.prototype={
k(a){return A.B(this.a)},
$iL:1,
gaG(){return this.b}}
A.js.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.P(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.P(q.e.aL(),q.f.aL())},
$S:10}
A.jr.prototype={
$1(a){var s,r,q=this,p=q.x
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.mN(s,q.b,a)
if(r.b===0)q.c.az(A.pn(s,p))}else if(r.b===0&&!q.e)q.c.P(q.f.aL(),q.r.aL())},
$S(){return this.x.i("Y(0)")}}
A.de.prototype={
bq(a,b){A.eO(a,"error",t.K)
if((this.a.a&30)!==0)throw A.d(A.ah("Future already completed"))
if(b==null)b=A.m2(a)
this.P(a,b)},
aR(a){return this.bq(a,null)},
$ife:1}
A.ak.prototype={
Y(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.ah("Future already completed"))
s.c2(r.i("1/").a(b))},
aQ(a){return this.Y(a,null)},
P(a,b){this.a.b4(a,b)}}
A.di.prototype={
Y(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.ah("Future already completed"))
s.c9(r.i("1/").a(b))},
aQ(a){return this.Y(a,null)},
P(a,b){this.a.P(a,b)}}
A.cD.prototype={
f_(a){if((this.c&15)!==6)return!0
return this.b.b.bK(t.iW.a(this.d),a.a,t.k4,t.K)},
eW(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.ff(q,m,a.b,o,n,t.l)
else p=l.bK(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bE.b(A.bq(s))){if((r.c&1)!==0)throw A.d(A.cK("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cK("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.G.prototype={
aX(a,b,c){var s,r,q,p=this.$ti
p.E(c).i("1/(2)").a(a)
s=$.E
if(s===B.l){if(b!=null&&!t.ng.b(b)&&!t.y.b(b))throw A.d(A.mS(b,"onError",u.w))}else{c.i("@<0/>").E(p.c).i("1(2)").a(a)
if(b!=null)b=A.qC(b,s)}r=new A.G(s,c.i("G<0>"))
q=b==null?1:3
this.b2(new A.cD(r,q,a,b,p.i("@<1>").E(c).i("cD<1,2>")))
return r},
bL(a,b){return this.aX(a,null,b)},
cz(a,b,c){var s,r=this.$ti
r.E(c).i("1/(2)").a(a)
s=new A.G($.E,c.i("G<0>"))
this.b2(new A.cD(s,19,a,b,r.i("@<1>").E(c).i("cD<1,2>")))
return s},
ek(a){this.a=this.a&1|16
this.c=a},
b6(a){this.a=a.a&30|this.a&1
this.c=a.c},
b2(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.g.a(r.c)
if((s.a&24)===0){s.b2(a)
return}r.b6(s)}A.dm(null,null,r.b,t.M.a(new A.kM(r,a)))}},
cr(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.g.a(m.c)
if((n.a&24)===0){n.cr(a)
return}m.b6(n)}l.a=m.aN(a)
A.dm(null,null,m.b,t.M.a(new A.kU(l,m)))}},
aM(){var s=t.F.a(this.c)
this.c=null
return this.aN(s)},
aN(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
c4(a){var s,r,q,p=this
p.a^=2
try{a.aX(new A.kQ(p),new A.kR(p),t.P)}catch(q){s=A.bq(q)
r=A.bI(q)
A.o9(new A.kS(p,s,r))}},
c9(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("at<1>").b(a))if(q.b(a))A.kP(a,r)
else r.c4(a)
else{s=r.aM()
q.c.a(a)
r.a=8
r.c=a
A.dg(r,s)}},
az(a){var s,r=this
r.$ti.c.a(a)
s=r.aM()
r.a=8
r.c=a
A.dg(r,s)},
P(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.aM()
this.ek(A.iU(a,b))
A.dg(this,s)},
c2(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("at<1>").b(a)){this.c5(a)
return}this.dS(s.c.a(a))},
dS(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.dm(null,null,s.b,t.M.a(new A.kO(s,a)))},
c5(a){var s=this,r=s.$ti
r.i("at<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.dm(null,null,s.b,t.M.a(new A.kT(s,a)))}else A.kP(a,s)
return}s.c4(a)},
b4(a,b){t.l.a(b)
this.a^=2
A.dm(null,null,this.b,t.M.a(new A.kN(this,a,b)))},
$iat:1}
A.kM.prototype={
$0(){A.dg(this.a,this.b)},
$S:0}
A.kU.prototype={
$0(){A.dg(this.b,this.a.a)},
$S:0}
A.kQ.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.az(p.$ti.c.a(a))}catch(q){s=A.bq(q)
r=A.bI(q)
p.P(s,r)}},
$S:13}
A.kR.prototype={
$2(a,b){this.a.P(t.K.a(a),t.l.a(b))},
$S:21}
A.kS.prototype={
$0(){this.a.P(this.b,this.c)},
$S:0}
A.kO.prototype={
$0(){this.a.az(this.b)},
$S:0}
A.kT.prototype={
$0(){A.kP(this.b,this.a)},
$S:0}
A.kN.prototype={
$0(){this.a.P(this.b,this.c)},
$S:0}
A.kX.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.fe(t.mY.a(q.d),t.z)}catch(p){s=A.bq(p)
r=A.bI(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.iU(s,r)
o.b=!0
return}if(l instanceof A.G&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.h.b(l)){n=m.b.a
q=m.a
q.c=l.bL(new A.kY(n),t.z)
q.b=!1}},
$S:0}
A.kY.prototype={
$1(a){return this.a},
$S:37}
A.kW.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bK(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bq(l)
r=A.bI(l)
q=this.a
q.c=A.iU(s,r)
q.b=!0}},
$S:0}
A.kV.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.f_(s)&&p.a.e!=null){p.c=p.a.eW(s)
p.b=!1}}catch(o){r=A.bq(o)
q=A.bI(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.iU(r,q)
n.b=!0}},
$S:0}
A.hJ.prototype={}
A.cx.prototype={
gm(a){var s={},r=new A.G($.E,t.hy)
s.a=0
this.bB(new A.km(s,this),!0,new A.kn(s,r),r.gdW())
return r}}
A.km.prototype={
$1(a){A.F(this.b).c.a(a);++this.a.a},
$S(){return A.F(this.b).i("~(1)")}}
A.kn.prototype={
$0(){this.b.c9(this.a.a)},
$S:0}
A.bC.prototype={}
A.ez.prototype={
ged(){var s,r=this
if((r.b&8)===0)return A.F(r).i("c4<1>?").a(r.a)
s=A.F(r)
return s.i("c4<1>?").a(s.i("im<1>").a(r.a).gbQ())},
e2(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.bj(A.F(q).i("bj<1>"))
return A.F(q).i("bj<1>").a(s)}r=A.F(q)
s=r.i("im<1>").a(q.a).gbQ()
return r.i("bj<1>").a(s)},
geq(){var s=this.a
if((this.b&8)!==0)s=t.gL.a(s).gbQ()
return A.F(this).i("df<1>").a(s)},
dT(){if((this.b&4)!==0)return new A.bB("Cannot add event after closing")
return new A.bB("Cannot add event while adding a stream")},
l(a,b){var s,r=this,q=A.F(r)
q.c.a(b)
s=r.b
if(s>=4)throw A.d(r.dT())
if((s&1)!==0)r.bl(b)
else if((s&3)===0)r.e2().l(0,new A.cA(b,q.i("cA<1>")))},
ep(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=A.F(l)
k.i("~(1)?").a(a)
t.Z.a(c)
if((l.b&3)!==0)throw A.d(A.ah("Stream has already been listened to."))
s=$.E
r=d?1:0
t.bm.E(k.c).i("1(2)").a(a)
A.pL(s,b)
q=c==null?A.qQ():c
p=t.M
p.a(q)
o=new A.df(l,a,s,r,k.i("df<1>"))
n=l.ged()
r=l.b|=1
if((r&8)!==0){m=k.i("im<1>").a(l.a)
m.sbQ(o)
m.fc(0)}else l.a=o
o.el(n)
k=p.a(new A.l4(l))
s=o.e
o.e=s|32
k.$0()
o.e&=4294967263
o.c6((s&4)!==0)
return o},
$ins:1,
$inE:1,
$icC:1}
A.l4.prototype={
$0(){A.mv(this.a.d)},
$S:0}
A.hK.prototype={
bl(a){var s=this.$ti
s.c.a(a)
this.geq().dR(new A.cA(a,s.i("cA<1>")))}}
A.dd.prototype={}
A.c2.prototype={
gv(a){return(A.cw(this.a)^892482866)>>>0},
q(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.c2&&b.a===this.a}}
A.df.prototype={
co(){var s=this.x,r=A.F(s)
r.i("bC<1>").a(this)
if((s.b&8)!==0)r.i("im<1>").a(s.a).fw(0)
A.mv(s.e)},
cp(){var s=this.x,r=A.F(s)
r.i("bC<1>").a(this)
if((s.b&8)!==0)r.i("im<1>").a(s.a).fc(0)
A.mv(s.f)}}
A.ei.prototype={
el(a){var s=this
A.F(s).i("c4<1>?").a(a)
if(a==null)return
s.sbj(a)
if(a.c!=null){s.e|=64
a.aZ(s)}},
co(){},
cp(){},
dR(a){var s=this,r=A.F(s),q=r.i("bj<1>?").a(s.r)
if(q==null)q=new A.bj(r.i("bj<1>"))
s.sbj(q)
q.l(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.aZ(s)}},
bl(a){var s,r=this,q=A.F(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.dc(r.a,a,q)
r.e&=4294967263
r.c6((s&4)!==0)},
c6(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.sbj(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.co()
else q.cp()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.aZ(q)},
sbj(a){this.r=A.F(this).i("c4<1>?").a(a)},
$ibC:1,
$icC:1}
A.eA.prototype={
bB(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.ep(s.i("~(1)?").a(a),d,c,b===!0)},
d2(a){return this.bB(a,null,null,null)}}
A.hP.prototype={}
A.cA.prototype={}
A.c4.prototype={
aZ(a){var s,r=this
r.$ti.i("cC<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.o9(new A.l1(r,a))
r.a=1}}
A.l1.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("cC<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.F(r).i("cC<1>").a(s).bl(r.b)},
$S:0}
A.bj.prototype={
l(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.io.prototype={}
A.eJ.prototype={$inz:1}
A.lf.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.k(0)
throw s},
$S:0}
A.ig.prototype={
fg(a){var s,r,q,p,o
t.M.a(a)
try{if(B.l===$.E){a.$0()
return}A.nS(null,null,this,a,t.H)}catch(q){s=A.bq(q)
r=A.bI(q)
p=t.K.a(s)
o=t.l.a(r)
A.iO(p,o)}},
dc(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.l===$.E){a.$1(b)
return}A.nT(null,null,this,a,b,t.H,c)}catch(q){s=A.bq(q)
r=A.bI(q)
p=t.K.a(s)
o=t.l.a(r)
A.iO(p,o)}},
cH(a){return new A.l2(this,t.M.a(a))},
cI(a,b){return new A.l3(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
fe(a,b){b.i("0()").a(a)
if($.E===B.l)return a.$0()
return A.nS(null,null,this,a,b)},
bK(a,b,c,d){c.i("@<0>").E(d).i("1(2)").a(a)
d.a(b)
if($.E===B.l)return a.$1(b)
return A.nT(null,null,this,a,b,c,d)},
ff(a,b,c,d,e,f){d.i("@<0>").E(e).E(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.E===B.l)return a.$2(b,c)
return A.qD(null,null,this,a,b,c,d,e,f)},
bH(a,b,c,d){return b.i("@<0>").E(c).E(d).i("1(2,3)").a(a)}}
A.l2.prototype={
$0(){return this.a.fg(this.b)},
$S:0}
A.l3.prototype={
$1(a){var s=this.c
return this.a.dc(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.l0.prototype={
av(a){return A.ly(a)&1073741823},
aw(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.en.prototype={
h(a,b){if(!A.P(this.z.$1(b)))return null
return this.dG(b)},
j(a,b,c){var s=this.$ti
this.dI(s.c.a(b),s.Q[1].a(c))},
aS(a,b){if(!A.P(this.z.$1(b)))return!1
return this.dF(b)},
L(a,b){if(!A.P(this.z.$1(b)))return null
return this.dH(b)},
av(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
aw(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(A.P(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.l_.prototype={
$1(a){return this.a.b(a)},
$S:39}
A.eo.prototype={
gw(a){var s=this,r=new A.ep(s,s.r,s.$ti.i("ep<1>"))
r.c=s.e
return r},
gm(a){return this.a},
M(a,b){var s
if(typeof b=="number"&&(b&1073741823)===b){s=this.c
if(s==null)return!1
return t.nF.a(s[b])!=null}else return this.dX(b)},
dX(a){var s=this.d
if(s==null)return!1
return this.ci(s[J.aA(a)&1073741823],a)>=0},
l(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.c7(s==null?q.b=A.mm():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.c7(r==null?q.c=A.mm():r,b)}else return q.dV(0,b)},
dV(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.mm()
r=J.aA(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.b7(b)]
else{if(p.ci(q,b)>=0)return!1
q.push(p.b7(b))}return!0},
c7(a,b){this.$ti.c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.b7(b)
return!0},
b7(a){var s=this,r=new A.i4(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
ci(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a_(a[r].a,b))return r
return-1}}
A.i4.prototype={}
A.ep.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.be(q))
else if(r==null){s.sc8(null)
return!1}else{s.sc8(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sc8(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
A.dP.prototype={}
A.jO.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:60}
A.l.prototype={
gw(a){return new A.by(a,this.gm(a),A.b9(a).i("by<l.E>"))},
B(a,b){return this.h(a,b)},
af(a,b,c,d){var s,r=A.b9(a)
d=r.i("l.E").a(r.i("l.E?").a(d))
A.ke(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
k(a){return A.m8(a,"[","]")}}
A.dW.prototype={}
A.jT.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.B(a)
r.a=s+": "
r.a+=A.B(b)},
$S:61}
A.z.prototype={
D(a,b){var s,r,q=A.b9(a)
q.i("~(z.K,z.V)").a(b)
for(s=J.an(this.gab(a)),q=q.i("z.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gaq(a){return J.oU(this.gab(a),new A.jV(a),A.b9(a).i("cW<z.K,z.V>"))},
gm(a){return J.ao(this.gab(a))},
k(a){return A.md(a)},
$iX:1}
A.jV.prototype={
$1(a){var s,r=this.a,q=A.b9(r)
q.i("z.K").a(a)
s=q.i("z.V")
return new A.cW(a,s.a(J.mM(r,a)),q.i("@<z.K>").E(s).i("cW<1,2>"))},
$S(){return A.b9(this.a).i("cW<z.K,z.V>(z.K)")}}
A.e9.prototype={
k(a){return A.m8(this,"{","}")}}
A.ev.prototype={$ip:1,$ij:1,$ino:1}
A.eK.prototype={}
A.cg.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.cg&&this.a===b.a&&!0},
R(a,b){return B.e.R(this.a,t.cs.a(b).a)},
gv(a){var s=this.a
return(s^B.e.cv(s,30))&1073741823},
k(a){var s=this,r=A.p2(A.pw(s)),q=A.fj(A.pu(s)),p=A.fj(A.pq(s)),o=A.fj(A.pr(s)),n=A.fj(A.pt(s)),m=A.fj(A.pv(s)),l=A.p3(A.ps(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
return k},
$iaf:1}
A.ag.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.ag&&this.a===b.a},
gv(a){return B.e.gv(this.a)},
R(a,b){return B.e.R(this.a,t.J.a(b).a)},
k(a){var s,r,q,p,o,n=this.a,m=B.e.X(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.e.X(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.e.X(n,1e6)
p=q<10?"0":""
o=B.h.d8(B.e.k(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o},
$iaf:1}
A.kK.prototype={}
A.L.prototype={
gaG(){return A.bI(this.$thrownJsError)}}
A.dy.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fp(s)
return"Assertion failed"}}
A.c0.prototype={}
A.fY.prototype={
k(a){return"Throw of null."}}
A.br.prototype={
gba(){return"Invalid argument"+(!this.a?"(s)":"")},
gb9(){return""},
k(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+A.B(n),l=q.gba()+o+m
if(!q.a)return l
s=q.gb9()
r=A.fp(q.b)
return l+s+": "+r}}
A.d3.prototype={
gba(){return"RangeError"},
gb9(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.B(q):""
else if(q==null)s=": Not greater than or equal to "+A.B(r)
else if(q>r)s=": Not in inclusive range "+A.B(r)+".."+A.B(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.B(r)
return s}}
A.fB.prototype={
gba(){return"RangeError"},
gb9(){if(A.K(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.hC.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.hz.prototype={
k(a){var s="UnimplementedError: "+this.a
return s}}
A.bB.prototype={
k(a){return"Bad state: "+this.a}}
A.ff.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fp(s)+"."}}
A.h0.prototype={
k(a){return"Out of Memory"},
gaG(){return null},
$iL:1}
A.ec.prototype={
k(a){return"Stack Overflow"},
gaG(){return null},
$iL:1}
A.fi.prototype={
k(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.hV.prototype={
k(a){return"Exception: "+this.a}}
A.j.prototype={
d3(a,b,c){var s=A.F(this)
return A.nd(this,s.E(c).i("1(j.E)").a(b),s.i("j.E"),c)},
D(a,b){var s
A.F(this).i("~(j.E)").a(b)
for(s=this.gw(this);s.n();)b.$1(s.gp(s))},
gm(a){var s,r=this.gw(this)
for(s=0;r.n();)++s
return s},
B(a,b){var s,r,q
A.kd(b,"index")
for(s=this.gw(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.d(A.T(b,this,"index",null,r))},
k(a){return A.n7(this,"(",")")}}
A.U.prototype={}
A.cW.prototype={
k(a){return"MapEntry("+A.B(this.a)+": "+A.B(this.b)+")"}}
A.Y.prototype={
gv(a){return A.v.prototype.gv.call(this,this)},
k(a){return"null"}}
A.v.prototype={$iv:1,
q(a,b){return this===b},
gv(a){return A.cw(this)},
k(a){return"Instance of '"+A.k9(this)+"'"},
toString(){return this.k(this)}}
A.ir.prototype={
k(a){return""},
$ib5:1}
A.hm.prototype={
gm(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.q.prototype={}
A.iS.prototype={
gm(a){return a.length}}
A.eX.prototype={
k(a){return String(a)}}
A.eY.prototype={
k(a){return String(a)}}
A.f3.prototype={}
A.f4.prototype={
gbC(a){return new A.cB(a,"load",!1,t.bz)}}
A.cb.prototype={
sah(a,b){a.height=b},
sam(a,b){a.width=b},
dn(a,b){return a.getContext(b)},
$icb:1}
A.bc.prototype={
gm(a){return a.length}}
A.jc.prototype={
gm(a){return a.length}}
A.I.prototype={$iI:1}
A.cQ.prototype={
dU(a,b){var s=$.od(),r=s[b]
if(typeof r=="string")return r
r=this.er(a,b)
s[b]=r
return r},
er(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.of()+b
if(s in a)return s
return b},
gm(a){return a.length}}
A.jd.prototype={}
A.b0.prototype={}
A.bt.prototype={}
A.je.prototype={
gm(a){return a.length}}
A.jf.prototype={
gm(a){return a.length}}
A.jg.prototype={
gm(a){return a.length},
h(a,b){return a[b]}}
A.bu.prototype={$ibu:1}
A.bR.prototype={
k(a){return String(a)},
$ibR:1}
A.dG.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.mx.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.dH.prototype={
k(a){var s,r=a.left
r.toString
r="Rectangle ("+A.B(r)+", "
s=a.top
s.toString
return r+A.B(s)+") "+A.B(this.gam(a))+" x "+A.B(this.gah(a))},
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
if(s===r){s=J.lo(b)
s=this.gam(a)===s.gam(b)&&this.gah(a)===s.gah(b)}else s=!1}else s=!1}else s=!1
return s},
gv(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.cv(r,s,this.gam(a),this.gah(a))},
gck(a){return a.height},
gah(a){var s=this.gck(a)
s.toString
return s},
gcA(a){return a.width},
gam(a){var s=this.gcA(a)
s.toString
return s},
$ibh:1}
A.fl.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
A.ae(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.jh.prototype={
gm(a){return a.length}}
A.a7.prototype={
k(a){return a.localName},
gbC(a){return new A.cB(a,"load",!1,t.bz)},
$ia7:1}
A.k.prototype={$ik:1}
A.e.prototype={
eE(a,b,c,d){t.du.a(c)
if(c!=null)this.dQ(a,b,c,!1)},
dQ(a,b,c,d){return a.addEventListener(b,A.bp(t.du.a(c),1),!1)},
$ie:1}
A.aB.prototype={$iaB:1}
A.fr.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.et.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.fs.prototype={
gm(a){return a.length}}
A.fv.prototype={
gm(a){return a.length}}
A.aC.prototype={$iaC:1}
A.jC.prototype={
gm(a){return a.length}}
A.cj.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fh.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.dO.prototype={
f6(a,b,c){return a.open(b,c)}}
A.ck.prototype={}
A.cU.prototype={$icU:1}
A.bx.prototype={$ibx:1}
A.jS.prototype={
k(a){return String(a)}}
A.cr.prototype={}
A.jX.prototype={
gm(a){return a.length}}
A.fL.prototype={
h(a,b){return A.c8(a.get(A.ae(b)))},
D(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c8(r.value[1]))}},
gab(a){var s=A.c([],t.s)
this.D(a,new A.k_(s))
return s},
gm(a){return a.size},
$iX:1}
A.k_.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.fM.prototype={
h(a,b){return A.c8(a.get(A.ae(b)))},
D(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c8(r.value[1]))}},
gab(a){var s=A.c([],t.s)
this.D(a,new A.k0(s))
return s},
gm(a){return a.size},
$iX:1}
A.k0.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.aG.prototype={$iaG:1}
A.fN.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.ib.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.aH.prototype={$iaH:1}
A.w.prototype={
k(a){var s=a.nodeValue
return s==null?this.dD(a):s},
$iw:1}
A.e1.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fh.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.aI.prototype={
gm(a){return a.length},
$iaI:1}
A.h4.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.d8.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.hb.prototype={
h(a,b){return A.c8(a.get(A.ae(b)))},
D(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c8(r.value[1]))}},
gab(a){var s=A.c([],t.s)
this.D(a,new A.kg(s))
return s},
gm(a){return a.size},
$iX:1}
A.kg.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.hd.prototype={
gm(a){return a.length}}
A.ax.prototype={$iax:1}
A.hh.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fm.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.aJ.prototype={$iaJ:1}
A.hi.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.cA.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.aK.prototype={
gm(a){return a.length},
$iaK:1}
A.hl.prototype={
h(a,b){return a.getItem(A.ae(b))},
D(a,b){var s,r,q
t.gS.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gab(a){var s=A.c([],t.s)
this.D(a,new A.kl(s))
return s},
gm(a){return a.length},
$iX:1}
A.kl.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:20}
A.ai.prototype={$iai:1}
A.ay.prototype={$iay:1}
A.ac.prototype={$iac:1}
A.hs.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.gJ.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.ht.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.dQ.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.kr.prototype={
gm(a){return a.length}}
A.aL.prototype={$iaL:1}
A.hv.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.ki.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.ks.prototype={
gm(a){return a.length}}
A.bi.prototype={}
A.kw.prototype={
k(a){return String(a)}}
A.db.prototype={$idb:1}
A.hE.prototype={
gm(a){return a.length}}
A.dc.prototype={
da(a,b){var s
t.hv.a(b)
this.e3(a)
s=A.nV(b,t.cZ)
s.toString
return this.eh(a,s)},
eh(a,b){return a.requestAnimationFrame(A.bp(t.hv.a(b),1))},
e3(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.hN.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.d5.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.ej.prototype={
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
r=J.lo(b)
if(s===r.gam(b)){s=a.height
s.toString
r=s===r.gah(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gv(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.cv(p,s,r,q)},
gck(a){return a.height},
gah(a){var s=a.height
s.toString
return s},
gcA(a){return a.width},
gam(a){var s=a.width
s.toString
return s}}
A.hZ.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.ef.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.eq.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fh.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.ik.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.hH.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.is.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.lv.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.m5.prototype={}
A.ek.prototype={
bB(a,b,c,d){var s=A.F(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.em(this.a,this.b,a,!1,s.c)}}
A.cB.prototype={}
A.el.prototype={}
A.kL.prototype={
$1(a){return this.a.$1(t.L.a(a))},
$S:9}
A.r.prototype={
gw(a){return new A.dK(a,this.gm(a),A.b9(a).i("dK<r.E>"))}}
A.dK.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.scl(J.mM(s.a,r))
s.c=r
return!0}s.scl(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
scl(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
A.hO.prototype={}
A.hQ.prototype={}
A.hR.prototype={}
A.hS.prototype={}
A.hT.prototype={}
A.hW.prototype={}
A.hX.prototype={}
A.i_.prototype={}
A.i0.prototype={}
A.i5.prototype={}
A.i6.prototype={}
A.i7.prototype={}
A.i8.prototype={}
A.i9.prototype={}
A.ia.prototype={}
A.id.prototype={}
A.ie.prototype={}
A.ih.prototype={}
A.ew.prototype={}
A.ex.prototype={}
A.ii.prototype={}
A.ij.prototype={}
A.il.prototype={}
A.it.prototype={}
A.iu.prototype={}
A.eC.prototype={}
A.eD.prototype={}
A.iw.prototype={}
A.ix.prototype={}
A.iE.prototype={}
A.iF.prototype={}
A.iG.prototype={}
A.iH.prototype={}
A.iI.prototype={}
A.iJ.prototype={}
A.iK.prototype={}
A.iL.prototype={}
A.iM.prototype={}
A.iN.prototype={}
A.kC.prototype={
cS(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.l(r,a)
B.a.l(this.b,null)
return q},
bR(a){var s,r,q,p,o,n,m,l,k=this,j={}
if(a==null)return a
if(A.ld(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.S(A.cK("DateTime is outside valid range: "+s,null))
A.eO(!0,"isUtc",t.k4)
return new A.cg(s,!0)}if(a instanceof RegExp)throw A.d(A.mk("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.ri(a,t.z)
if(A.o4(a)){q=k.cS(a)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=j.a=r[q]
if(p!=null)return p
o=t.z
p=A.ab(o,o)
j.a=p
B.a.j(r,q,p)
k.eT(a,new A.kE(j,k))
return j.a}if(a instanceof Array){n=a
q=k.cS(n)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p!=null)return p
o=J.az(n)
m=o.gm(n)
p=k.c?new Array(m):n
B.a.j(r,q,p)
for(r=J.dq(p),l=0;l<m;++l)r.j(p,l,k.bR(o.h(n,l)))
return p}return a}}
A.kE.prototype={
$2(a,b){var s=this.a.a,r=this.b.bR(b)
J.mN(s,a,r)
return r},
$S:22}
A.kD.prototype={
eT(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.k4.prototype={
k(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.lJ.prototype={
$1(a){return this.a.Y(0,this.b.i("0/?").a(a))},
$S:5}
A.lK.prototype={
$1(a){if(a==null)return this.a.aR(new A.k4(a===undefined))
return this.a.aR(a)},
$S:5}
A.i1.prototype={
G(a){if(a<=0||a>4294967296)throw A.d(A.px("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
I(){return Math.random()},
f2(){return Math.random()<0.5},
$ini:1}
A.aU.prototype={$iaU:1}
A.fG.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
t.kT.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.aX.prototype={$iaX:1}
A.fZ.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
t.ai.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.k8.prototype={
gm(a){return a.length}}
A.hn.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
A.ae(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.n.prototype={
gbC(a){return new A.cB(a,"load",!1,t.bz)}}
A.aZ.prototype={$iaZ:1}
A.hw.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
t.hk.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.i2.prototype={}
A.i3.prototype={}
A.ib.prototype={}
A.ic.prototype={}
A.ip.prototype={}
A.iq.prototype={}
A.iy.prototype={}
A.iz.prototype={}
A.ba.prototype={
gm(a){return a.length},
$iba:1}
A.dB.prototype={
seJ(a,b){a.buffer=b}}
A.ca.prototype={
e_(a,b,c,d){t.p0.a(c)
t.lW.a(d)
return a.decodeAudioData(b,A.bp(c,1),A.bp(d,1))},
eM(a,b){var s=new A.G($.E,t.og),r=new A.ak(s,t.oJ)
this.e_(a,b,new A.iY(r),new A.iZ(r))
return s},
$ica:1}
A.iY.prototype={
$1(a){this.a.Y(0,t.bD.a(a))},
$S:23}
A.iZ.prototype={
$1(a){this.a.aR(t.jW.a(a))},
$S:24}
A.H.prototype={
ca(a,b,c,d){return a.connect(b,c,d)},
$iH:1}
A.eZ.prototype={
sft(a,b){a.value=b}}
A.f_.prototype={
h(a,b){return A.c8(a.get(A.ae(b)))},
D(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c8(r.value[1]))}},
gab(a){var s=A.c([],t.s)
this.D(a,new A.j_(s))
return s},
gm(a){return a.size},
$iX:1}
A.j_.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.bs.prototype={}
A.f0.prototype={
gm(a){return a.length}}
A.dC.prototype={}
A.cT.prototype={}
A.h_.prototype={
gm(a){return a.length}}
A.hM.prototype={}
A.f7.prototype={$if7:1}
A.fx.prototype={$ifx:1}
A.h5.prototype={$ih5:1}
A.d4.prototype={
cJ(a,b){return a.bindVertexArray(b)},
cG(a,b,c){return a.bindBuffer(b,c)},
aC(a,b,c){return a.bindFramebuffer(b,c)},
N(a,b,c){return a.bindTexture(b,c)},
cN(a,b){return a.deleteTexture(b)},
bx(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aE(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.mt(g)){s.eu(a,b,c,d,e,f,g,h,i,j)
return}if(t.hQ.b(g)&&h==null&&r&&j==null){s.ev(a,b,c,d,e,f,g)
return}if(t.jQ.b(g)&&h==null&&r&&j==null){s.ew(a,b,c,d,e,f,g)
return}if(t.eL.b(g)&&h==null&&r&&j==null){s.ex(a,b,c,d,e,f,g)
return}throw A.d(A.cK("Incorrect number or type of arguments",null))},
dd(a,b,c,d,e,f,g){return this.aE(a,b,c,d,e,f,g,null,null,null)},
eu(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
ev(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ew(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ex(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fm(a,b,c){return a.uniform1f(b,c)},
fn(a,b,c){return a.uniform1i(b,c)},
fo(a,b,c,d){return a.uniform2f(b,c,d)},
fp(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fq(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fs(a,b){return a.useProgram(b)},
$id4:1}
A.bD.prototype={$ibD:1}
A.hy.prototype={$ihy:1}
A.hD.prototype={$ihD:1}
A.bW.prototype={
gw(a){return new A.d7(this.a,0,0)},
gm(a){var s,r,q=this.a,p=q.length
if(p===0)return 0
s=new A.j5(q,p,0,176)
for(r=0;s.f3()>=0;)++r
return r},
q(a,b){if(b==null)return!1
return t.m1.b(b)&&this.a===b.a},
gv(a){return B.h.gv(this.a)},
k(a){return this.a},
$in0:1}
A.d7.prototype={
gp(a){var s=this,r=s.d
return r==null?s.d=B.h.aH(s.a,s.b,s.c):r},
n(){return this.b3(1,this.c)},
b3(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(a>0){s=j.c
for(r=j.a,q=r.length,p=176;s<q;s=n){o=B.h.bp(r,s)
n=s+1
if((o&64512)!==55296)m=A.o5(o)
else if(n<q){l=B.h.bp(r,n)
if((l&64512)===56320){++n
m=A.o0(o,l)}else m=2}else m=2
p=B.h.a2(u.S,(p&240|m)>>>0)
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
$iU:1}
A.j5.prototype={
f3(){var s,r,q,p,o,n,m,l=this,k=u.S
for(s=l.b,r=l.a;q=l.c,q<s;){p=l.c=q+1
o=B.h.a2(r,q)
if((o&64512)!==55296){p=B.h.a2(k,l.d&240|A.o5(o))
l.d=p
if((p&1)===0)return q
continue}if(p<s){n=B.h.a2(r,p)
if((n&64512)===56320){m=A.o0(o,n);++l.c}else m=2}else m=2
p=B.h.a2(k,(l.d&240|m)>>>0)
l.d=p
if((p&1)===0)return q}s=B.h.a2(k,l.d&240|15)
l.d=s
if((s&1)===0)return q
return-1}}
A.fA.prototype={
b8(a){var s=this.b
if(!(a>=0&&a<s.length))return A.b(s,a)
s=s[a]
return s==null?this.$ti.c.a(null):s},
l(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b);++o.d
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.bg(q,null,!1,n.i("1?"))
B.a.bT(p,0,o.c,o.b)
o.sbk(p)}o.b5(b,o.c++)},
gm(a){return this.c},
L(a,b){var s,r,q=this
q.$ti.c.a(b)
s=q.e9(b)
if(s<0)return!1;++q.d
r=q.ef()
if(s<q.c)if(q.a.$2(r,b)<=0)q.b5(r,s)
else q.c3(r,s)
return!0},
ey(){var s,r,q=this.$ti,p=A.c([],q.i("t<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
k(a){var s=this.b
return A.n7(A.nv(s,0,A.eO(this.c,"count",t.S),A.Z(s).c),"(",")")},
ay(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.bg(q,null,!1,n.i("1?"))
B.a.bT(p,0,o.c,o.b)
o.sbk(p)}o.b5(b,o.c++)},
e9(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.b8(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.a_(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
ef(){var s=this,r=s.c-1,q=s.b8(r)
B.a.j(s.b,r,null)
s.c=r
return q},
b5(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.e.X(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.a1()
if(q>0)break
B.a.j(o.b,b,p)}B.a.j(o.b,b,a)},
c3(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.$ti.c
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
if(p<q){j=i.b8(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sbk(a){this.b=this.$ti.i("o<1?>").a(a)}}
A.l9.prototype={
gw(a){var s=this.a
return new A.cE(s,s.d,this.$ti.i("cE<1>"))}}
A.cE.prototype={
n(){var s,r=this,q=r.a
if(r.b!==q.d)throw A.d(A.be(q))
s=r.d+1
if(0<=s&&s<q.c){q=q.b
if(!(s>=0&&s<q.length))return A.b(q,s)
r.scs(q[s])
r.d=s
return!0}r.scs(null)
r.d=-2
return!1},
gp(a){var s
if(this.d<0)s=A.S(A.ah("No element"))
else{s=this.c
if(s==null)s=this.$ti.c.a(null)}return s},
scs(a){this.c=this.$ti.i("1?").a(a)},
$iU:1}
A.f.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.f&&b.a===this.a},
gv(a){return B.e.gv(this.a)},
k(a){return"Color(0x"+B.h.d8(B.e.fk(this.a,16),8,"0")+")"}}
A.a5.prototype={
cU(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.e.aF(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.d(A.ah(b.k(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.e.aF(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.d(A.m6(b.k(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
a9(a,b,c){var s=B.e.aF(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
J(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.e.aF(d*s+c)
q=p.c
if(r>=q.length)throw A.d(A.m6("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
k(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.e.aF(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.B(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.Q.prototype={
V(a,b){t.mn.a(b)
return new A.Q(this.a-b.a,this.b-b.b)},
C(a,b){return new A.Q(this.a+b.a,this.b+b.b)},
q(a,b){if(b==null)return!1
return b instanceof A.Q&&b.a===this.a&&b.b===this.b},
gv(a){return A.cv(this.a,this.b,B.x,B.x)},
k(a){return"Offset("+B.c.de(this.a,1)+", "+B.c.de(this.b,1)+")"}}
A.cJ.prototype={
ga3(a){return B.c.u(this.b.d/24)},
ga4(a){return B.c.u(this.b.e/36)},
t(){var s=this.b
return new A.i(B.c.u(s.d/24),B.c.u(s.e/36))},
$idN:1,
gbA(){return null}}
A.iR.prototype={}
A.iQ.prototype={
eI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.b
c.f5()
s=t.c7
r=A.c([],s)
q=A.c([],s)
s=b.ry
p=s.e
s=s.d
if(!(s<p.length))return A.b(p,s)
o=p[s]
s=a.t()
s.toString
n=b.f.a8(s)
for(p=o.a,m=p.length,l=n.c,k=n.a,j=l.length,c=c.a,i=0;i<p.length;p.length===m||(0,A.A)(p),++i){h=p[i]
if(h.e)continue
g=h.t()
if(g==null)continue
f=g.aV(s)
e=g.b*k+g.a
if(!(e>=0&&e<j))return A.b(l,e)
if(l[e]<=0||h===a)continue
if(!A.o3(h,a))B.a.l(q,h)
else if(f<10.5){B.a.l(r,h)
e=h.t()
d=e.b*100+e.a
if(!(d>=0&&d<4000))return A.b(c,d)
B.ft.j(c,d,Math.max(c[d],20))}}c=this.a.a7(a,r,q,new A.ad(null,null),b).a
if(c==null)return new A.d6()
return c}}
A.ad.prototype={}
A.aq.prototype={}
A.bY.prototype={
a7(a,b,c,d,e){var s,r,q=null,p=t.p
p.a(b)
p.a(c)
t.O.a(e)
if(d.b!=null)return d
p=a.r
s=p==null
if((s?q:p.c)!=null)r=B.a.M(b,s?q:p.c)
else r=!1
if(r){if(s)p=q
else{p=p.c
p.toString}return new A.ad(q,p)}return d}}
A.bZ.prototype={
a7(a,b,c,d,e){var s,r=t.p
r.a(b)
r.a(c)
t.O.a(e)
if(d.b!=null)return d
if(0<b.length){s=b[0]
r=a.r
if(r!=null)r.c=s
return new A.ad(null,s)}return d}}
A.cO.prototype={
a7(a,b,c,d,e){var s,r,q=t.p
q.a(b)
q.a(c)
t.O.a(e)
if(d.b!=null||c.length===0)return d
for(q=c.length,s=0;s<q;++s){r=c[s].r
if(r!=null&&r.c!=null){q=r.c
q.toString
return new A.ad(null,q)}}return d}}
A.bV.prototype={
a7(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=t.p
j.a(b)
j.a(c)
j=t.O.a(e).ry
s=j.e
j=j.d
if(!(j<s.length))return A.b(s,j)
r=s[j]
if(d.b!=null)return d
for(j=a.r.b.a,q=-1,p=0,o=0;o<4000;++o){n=j[o]
if(n>p){p=n
q=o}}if(q===-1)return d
j=B.e.dq(q,100)
s=B.e.X(q,100)
m=$.eR()
l=a.t()
l.toString
k=m.bv(l,new A.i(j,s),r)
if(k==null)return d
j=k.b.d
s=a.t()
s.toString
return new A.ad(new A.aW(j.V(0,s),a),null)}}
A.h8.prototype={
a7(a,b,c,d,e){var s,r,q,p=t.p
p.a(b)
p.a(c)
t.O.a(e)
p=e.ry
s=p.e
p=p.d
if(!(p<s.length))return A.b(s,p)
r=s[p]
if(this.b){this.b=!1
return d}p=a.t()
p.toString
q=e.dx.a.bu(r,p,-1)
if(q==null)return d
this.b=!0
p=a.t()
p.toString
return new A.ad(new A.aW(q.V(0,p),a),null)}}
A.e5.prototype={
a7(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=t.p
c.a(b)
c.a(a0)
t.O.a(a2)
c=a2.ry
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
q=c.V(0,s)
e.a=e.a.b
return new A.ad(new A.aW(q,a),d)}c=a.t()
c.toString
s=a2.dx.a
p=s.bu(r,c,-1)
if(p==null){o=c.b*100+c.a
s=s.a
if(!(o>=0&&o<4000))return A.b(s,o)
n=s[o]
m=a2.f.a8(c)
for(c=m.c,l=m.a,k=c.length,j=d,i=1;i<100;++i)for(h=1;h<40;++h){o=h*100+i
if(!(o<4000))return A.b(s,o)
g=s[o]
f=h*l+i
if(!(f<k))return A.b(c,f)
if(c[f]>0&&g<n){j=new A.i(i,h)
n=g}}if(j!=null){c=$.eR()
s=a.t()
s.toString
e.a=c.bv(s,j,r)}return new A.ad(new A.d6(),d)}c=a.t()
c.toString
return new A.ad(new A.aW(p.V(0,c),a),d)}}
A.h9.prototype={
a7(a,b,c,d,e){var s,r,q,p,o,n,m=t.p
m.a(b)
m.a(c)
t.O.a(e)
m=e.ry
s=m.e
m=m.d
if(!(m<s.length))return A.b(s,m)
r=s[m]
for(m=c.length,s=this.a,q=0;q<c.length;c.length===m||(0,A.A)(c),++q){p=c[q].t()
p.toString
o=a.t()
o.toString
if(p.aV(o)<=s)return d}if(b.length===0)return d
m=a.t()
m.toString
n=e.dx.a.bu(r,m,-1)
if(n==null)return d
m=a.t()
m.toString
return new A.ad(new A.aW(n.V(0,m),a),null)}}
A.lq.prototype={
$1(a){t.lZ.a(a)
return a.c===B.aQ&&t.mm.a(a.b).a===this.a.Q.a},
$S:25}
A.bK.prototype={
a7(a,b,c,d,e){var s,r,q,p,o,n,m=t.p
m.a(b)
m.a(c)
m=t.O.a(e).ry
s=m.e
m=m.d
if(!(m<s.length))return A.b(s,m)
r=s[m]
if(d.a!=null||d.b==null)return d
m=d.b
m.toString
s=$.eR()
q=a.t()
q.toString
p=m.t()
p.toString
o=s.bv(q,p,r)
if(o==null)return d
s=a.c.x
n=s.gbF()
if(n!=null&&o.gcO()<=n.ch/5){q=s.b.h(0,B.t)
q.toString
if(q.e===0)if(A.r4(s,n))return new A.ad(new A.e4(a),m)
else{s=o.b.d
q=a.t()
q.toString
return new A.ad(new A.aW(s.V(0,q),a),m)}s=m.t()
s.toString
return new A.ad(new A.e3(s,a),m)}s=o.b.d
q=a.t()
q.toString
return new A.ad(new A.aW(s.V(0,q),a),m)}}
A.bd.prototype={
a7(a,b,c,d,e){var s,r,q,p,o=t.p
o.a(b)
o.a(c)
t.O.a(e)
for(o=this.a,s=o.length,r=d,q=0;q<o.length;o.length===s||(0,A.A)(o),++q,r=p){p=o[q].a7(a,b,c,r,e)
if(p.a!=null)return p}return r},
$iaq:1}
A.bT.prototype={}
A.lT.prototype={
$0(){return new A.O(2,6,0,0,B.b6)},
$S:2}
A.lR.prototype={
$0(){return new A.bd(A.c([new A.bY(),new A.bZ(),new A.e5(),new A.bK(),new A.bV()],t.a))},
$S:3}
A.lS.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lN.prototype={
$0(){return new A.O(2,4,0,0,B.A)},
$S:2}
A.lL.prototype={
$0(){return new A.bd(A.c([new A.bY(),new A.bZ(),new A.e5(),new A.bK(),new A.bV()],t.a))},
$S:3}
A.lM.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lW.prototype={
$0(){return new A.O(10,7,0,0,B.A)},
$S:2}
A.lU.prototype={
$0(){return new A.bd(A.c([new A.bY(),new A.bZ(),new A.cO(),new A.bK(),new A.bV()],t.a))},
$S:3}
A.lV.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lZ.prototype={
$0(){return new A.O(10,7,0,0,B.b6)},
$S:2}
A.lX.prototype={
$0(){return new A.bd(A.c([new A.bY(),new A.bZ(),new A.cO(),new A.h8(),new A.bK(),new A.bV()],t.a))},
$S:3}
A.lY.prototype={
$0(){var s=A.fC(B.O)
s.e=9
return A.c([s],t.I)},
$S:4}
A.lk.prototype={
$0(){return new A.O(3,7,0,0,B.ff)},
$S:2}
A.li.prototype={
$0(){return new A.bd(A.c([new A.bY(),new A.bZ(),new A.cO(),new A.h9(6),new A.bK(),new A.bV()],t.a))},
$S:3}
A.lj.prototype={
$0(){return A.c([A.fC(B.O)],t.I)},
$S:4}
A.j6.prototype={
df(a,b,c,d,e,f){var s,r=this,q=Math.min(Math.max(B.c.al(c*24-f/2),0),B.e.al(2688-f)),p=Math.min(Math.max(B.c.al(d*36-e/2),0),B.e.al(1476-e)),o=r.cf(Math.abs(q-r.a)),n=r.cf(Math.abs(p-r.b))
if(b){r.a=q
r.b=p
return}s=r.a
if(q>s)r.a=s+o
else if(q<s)r.a=s-o
s=r.b
if(p>s)r.b=s+n
else if(p<s)r.b=s-n},
cf(a){if(a>30)return 6
if(a>20)return 4
return 1}}
A.W.prototype={
h(a,b){return this.b.h(0,A.F(this).i("W.T").a(b))}}
A.cq.prototype={}
A.cX.prototype={}
A.fy.prototype={
by(a){return this.eV(t.h8.a(a))},
eV(a){var s=0,r=A.bn(t.H),q,p=this,o
var $async$by=A.bo(function(b,c){if(b===1)return A.bk(c,r)
while(true)switch(s){case 0:o=p.e
if(o.length>3){s=1
break}B.a.l(o,a)
if(p.f){s=1
break}p.aK()
case 1:return A.bl(q,r)}})
return A.bm($async$by,r)},
aK(){var s=0,r=A.bn(t.z),q=1,p,o=[],n=this,m
var $async$aK=A.bo(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.f=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.a8(n.aB(),$async$aK)
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
case 4:return A.bl(null,r)
case 1:return A.bk(p,r)}})
return A.bm($async$aK,r)},
ct(){var s=new A.G($.E,t.cU),r=new A.di(s,t.iF)
B.a.l(this.a.c,t.x.a(t.nD.a(r.geL(r))))
return s},
W(){var s=0,r=A.bn(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$W=A.bo(function(a2,a3){if(a2===1)return A.bk(a3,r)
while(true)$async$outer:switch(s){case 0:a=p.a
a0=a.ry
a1=a0.e
a0=a0.d
if(!(a0<a1.length)){q=A.b(a1,a0)
s=1
break}a0=a1[a0].a
o=A.c(a0.slice(0),A.Z(a0))
a0=p.b,a1=B.a.geD(a0),n=t.nt,m=p.c,l=p.d,k=p.e,j=0,i=!1
case 4:if(!!0){s=5
break}case 6:if(!(h=a0.length,h!==0)){s=7
break}if(0>=h){q=A.b(a0,0)
s=1
break}s=8
return A.a8(a0[0].an(a),$async$W)
case 8:g=a3
B.a.K(m,g.r)
case 9:if(!(h=g.a,h!=null)){s=10
break}B.a.j(a0,0,h)
s=11
return A.a8(h.an(a),$async$W)
case 11:g=a3
B.a.K(m,g.r)
s=9
break
case 10:h=g.c
if(h!=null){f=a.fy
if(f===$){e=A.mj(a.a)
A.bH(a.fy,"ui")
a.fy=e
f=e}f.c.r.cF(h)
A.mA(h)}d=g.x
s=d!=null?12:13
break
case 12:s=!g.f&&k.length===0?14:16
break
case 14:s=l.length!==0?17:18
break
case 17:s=19
return A.a8(p.cg(),$async$W)
case 19:case 18:s=20
return A.a8(p.aA(d),$async$W)
case 20:s=15
break
case 16:B.a.l(l,d)
case 15:case 13:case 21:if(!(h=m.length,h!==0)){s=22
break}if(0>=h){q=A.b(m,-1)
s=1
break}s=23
return A.a8(m.pop().an(a),$async$W)
case 23:e=a3
B.a.K(m,e.r)
case 24:if(!(h=e.a,h!=null)){s=25
break}s=26
return A.a8(h.an(a),$async$W)
case 26:e=a3
B.a.K(m,e.r)
s=24
break
case 25:h=e.c
if(h!=null){f=a.fy
if(f===$){e=A.mj(a.a)
A.bH(a.fy,"ui")
a.fy=e
f=e}f.c.r.cF(h)
A.mA(h)}s=21
break
case 22:if(g.d)i=B.eS.dr(i,!0)
B.a.bJ(a0,0)
s=6
break
case 7:if(!i){s=3
break}for(;h=o.length,j<h;){if(!(j>=0)){q=A.b(o,j)
s=1
break $async$outer}c=o[j];++j
if(c.t()==null)continue
if(A.rh(n.a(a1),c,a)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=l.length!==0?27:29
break
case 27:s=k.length===0?30:32
break
case 30:s=33
return A.a8(p.cg(),$async$W)
case 33:s=31
break
case 32:s=34
return A.a8(p.aO(),$async$W)
case 34:case 31:s=28
break
case 29:s=35
return A.a8(p.ct(),$async$W)
case 35:case 28:if(!i){s=1
break}for(a=o.length,b=0;b<a;++b)o[b].a=100
case 1:return A.bl(q,r)}})
return A.bm($async$W,r)},
aO(){var s=0,r=A.bn(t.H),q=this,p,o,n
var $async$aO=A.bo(function(a,b){if(a===1)return A.bk(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.A)(p),++n)p[n].x.$0()
B.a.sm(p,0)
s=2
return A.a8(q.ct(),$async$aO)
case 2:return A.bl(null,r)}})
return A.bm($async$aO,r)},
aA(a){var s=0,r=A.bn(t.H),q=this,p
var $async$aA=A.bo(function(b,c){if(b===1)return A.bk(c,r)
while(true)switch(s){case 0:p=new A.G($.E,t.cU)
if(a!=null)B.a.l(q.d,a)
B.a.l(q.a.c,t.x.a(new A.jt(q,new A.ak(p,t.ou))))
s=2
return A.a8(p,$async$aA)
case 2:return A.bl(null,r)}})
return A.bm($async$aA,r)},
cg(){return this.aA(null)},
aB(){var s=0,r=A.bn(t.H),q,p=this,o,n,m,l,k,j,i
var $async$aB=A.bo(function(a,b){if(a===1)return A.bk(b,r)
while(true)switch(s){case 0:i=p.e
if(i.length===0){s=1
break}i=B.a.bJ(i,0).a
case 3:switch(i){case 1:s=5
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
case 5:case 6:case 7:case 8:switch(i){case 1:o=new A.i(0,-1)
break
case 2:o=new A.i(1,0)
break
case 3:o=new A.i(0,1)
break
case 4:o=new A.i(-1,0)
break
default:A.S(A.ah(""))
o=null}n=new A.aW(o,p.a.ry.a)
s=4
break
case 9:p.a.ry.toString
n=new A.d6()
s=4
break
case 10:n=null
s=4
break
case 11:i=p.a
m=i.d.b?i.gb_().d:null
if(m==null){n=null
s=4
break}n=new A.e3(m,i.ry.a)
s=4
break
case 12:n=null
s=4
break
case 13:s=19
return A.a8(p.aJ(),$async$aB)
case 19:n=b
s=4
break
case 14:n=new A.e4(p.a.ry.a)
s=4
break
case 15:i=p.a
l=i.ry.a
k=i.go
k=k==null?null:k.b
j=k==null
if(j)k=new A.fk(new Uint8Array(4000),A.ab(t.j,t.S))
n=i.go=new A.f1(l,k,j)
s=4
break
case 16:i=p.a.d
l=!i.b
i.b=l
if(l){i=document.body.style
l=B.et.dU(i,"cursor")
i.setProperty(l,"crosshair","")}else document.body.style.removeProperty("cursor")
n=null
s=4
break
case 17:i=p.a.d
if(i.b){i.b=!1
document.body.style.removeProperty("cursor")}n=null
s=4
break
case 18:n=null
s=4
break
case 4:s=n!=null?20:21
break
case 20:B.a.l(p.b,n)
s=22
return A.a8(p.W(),$async$aB)
case 22:case 21:case 1:return A.bl(q,r)}})
return A.bm($async$aB,r)},
aJ(){var s=0,r=A.bn(t.oL),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$aJ=A.bo(function(a,b){if(a===1)return A.bk(b,r)
while(true)$async$outer:switch(s){case 0:f=A.c([],t.Y)
for(o=p.a,n=-1;n<2;++n)for(m=-1;m<2;++m){l=o.ry.a.t()
k=l.a+n
l=l.b+m
j=o.ry
i=j.e
j=j.d
if(!(j<i.length)){q=A.b(i,j)
s=1
break $async$outer}j=i[j].c
if(!(k>=0&&l>=0&&k<j.a&&l<j.b))continue
h=j.h(0,new A.i(k,l))
if(h.f!=null){l=o.ry
k=l.e
l=l.d
if(!(l<k.length)){q=A.b(k,l)
s=1
break $async$outer}B.a.K(f,A.o2(h,k[l]))}}l=f.length
if(l===0){q=null
s=1
break}s=l===1?3:5
break
case 3:if(0>=l){q=A.b(f,0)
s=1
break}g=f[0]
s=4
break
case 5:l=new A.G($.E,t.j7)
o.gas().c.sf0(new A.fK(f,new A.ak(l,t.pn),t.km))
s=6
return A.a8(l,$async$aJ)
case 6:g=b
case 4:if(g==null){q=null
s=1
break}q=g.b
s=1
break
case 1:return A.bl(q,r)}})
return A.bm($async$aJ,r)},
ee(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.J.a(a)
for(s=h.d,r=s.length,q=a.a,p=h.e,o=0;o<s.length;s.length===r||(0,A.A)(s),++o){n=s[o]
if(p.length>=2)n.d=1
m=n.e
l=m==null?0:B.e.X(q-m.a,1000)
n.e=a
k=l/B.e.X(n.a.a,1000)
j=n.f
i=n.d
i=n.d=B.c.bo(j?n.d=i+k:n.d=i-k,-1,1)
i>=1||i<0
n.r.$1(n)}B.a.l(h.a.c,t.x.a(h.gcq()))}}
A.jt.prototype={
$1(a){var s,r,q,p,o,n,m
t.J.a(a)
s=A.c([],t.fy)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.A)(q),++n){m=q[n]
if(m.d>=1||o.length!==0){m.x.$0()
B.a.l(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.A)(s),++n)B.a.L(q,s[n])
if(q.length===0)this.b.aQ(0)
else B.a.l(r.a.c,t.x.a(this))},
$S:14}
A.ea.prototype={
k(a){return"SlotType."+this.b}}
A.bv.prototype={
k(a){return"ItemType."+this.b}}
A.eW.prototype={}
A.aT.prototype={
gbX(){switch(this.c.a){case 0:return B.at
case 1:return B.au
case 2:return B.av
case 3:case 4:case 5:case 6:return null}}}
A.jb.prototype={}
A.a0.prototype={}
A.fz.prototype={
k(a){return"HandRequirement."+this.b}}
A.bP.prototype={
k(a){return"DamageType."+this.b}}
A.bQ.prototype={
k(a){return"DiceType."+this.b}}
A.b_.prototype={
k(a){return"WeaponProperties."+this.b}}
A.jY.prototype={}
A.bO.prototype={}
A.cf.prototype={
k(a){return"CriticalEffect."+this.b}}
A.a2.prototype={}
A.dv.prototype={
k(a){return"AmmoType."+this.b}}
A.dw.prototype={}
A.av.prototype={}
A.cL.prototype={
k(a){return"ArmorUpgradeType."+this.b}}
A.ap.prototype={}
A.eT.prototype={
ao(a){var s,r=a-10
if(r===0)return 0
else{s=r/2
if(r>0)return B.c.ag(s)
else return B.c.cK(s)}}}
A.cd.prototype={
d4(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x.gf8()
r=a.x.gbn()
q=A.dD(a0,1,B.aL)
p=b.y
o=p.a
n=q+p.ao(o)
m=a.y
l=10+Math.min(m.ao(m.b),r.e)
m=s.b
l=A.P(A.n3(m))?l+r.d:l+r.c
if(!a1)l-=2
k=t.Q
j=A.c([],k)
i=A.c([],k)
if(q===1){h=!1
g=!1}else{g=n>=l
if(q===20)h=!0
else{h=g
g=!1}}f="["+n+" vs "+A.B(l)+"]"
if(!h)return new A.cM(b.cx.a+" missed "+a.cx.a+" "+f,!1,0,B.a2,B.a2)
if(B.a.M(s.z,B.ck))B.a.l(j,new A.fg())
k=s.d
e=s.e
d=A.dD(a0,k,e)+p.ao(o)
if(g)d+=A.dD(a0,k,e)+p.ao(o)
B.a.M(b.ch,B.ba)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+s.y
return new A.cM(c,!0,d,j,i)},
d9(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x
r=s.gbF()
if(r==null)r=B.O
q=s.gbn()
s=b.y
p=Math.min(s.ao(s.b),q.e)
o=a.x.gbn()
n=A.dD(a0,1,B.aL)
m=n+p
l=a.y
k=10+Math.min(l.ao(l.b),o.e)
l=r.c
k=A.P(A.n3(l))?k+o.d:k+o.c
if(!a1)k-=2
j=t.Q
i=A.c([],j)
h=A.c([],j)
if(n===1){g=!1
f=!1}else{f=m>=k
if(n===20)g=!0
else{g=f
f=!1}}e="["+m+" vs "+A.B(k)+"]"
if(!g)return new A.cM(b.cx.a+" missed "+a.cx.a+" "+e,!1,0,B.a2,B.a2)
j=r.f
d=A.dD(a0,1,j)
if(f)d+=A.dD(a0,1,j)+s.ao(s.a)
B.a.M(b.ch,B.ba)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+r.a
return new A.cM(c,!0,d,i,h)}}
A.cM.prototype={}
A.cS.prototype={}
A.cR.prototype={
gbn(){var s,r,q
for(s=this.b,s=s.gaq(s),s=s.gw(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a0)return q}return B.cG},
gf8(){var s,r,q
for(s=this.b,s=s.gaq(s),s=s.gw(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a2)return q}return B.fm},
gbF(){var s,r,q
for(s=this.b,s=s.gaq(s),s=s.gw(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.av)return q}return null},
eP(a,b){var s=this.b
s.h(0,b)
s.j(0,b,a)}}
A.h2.prototype={
k(a){return"Perk."+this.b}}
A.ch.prototype={
k(a){return"EquipmentSlot."+this.b}}
A.fg.prototype={}
A.d8.prototype={
k(a){return"TileType."+this.b}}
A.fc.prototype={
k(a){return"CollisionMode."+this.b}}
A.au.prototype={}
A.cy.prototype={
k(a){return"TerrainType."+this.b}}
A.aj.prototype={
k(a){return"TerrainWidget."+this.b}}
A.co.prototype={
k(a){return"LockState."+this.b}}
A.bb.prototype={
k(a){return"Biome."+this.b}}
A.c_.prototype={
ga3(a){return this.b.a},
ga4(a){return this.b.b},
sfh(a){t.dt.a(a)},
$idN:1,
gbA(){return this.z}}
A.fI.prototype={}
A.fJ.prototype={$idN:1,
gbA(){return this.a},
ga3(a){return this.b},
ga4(a){return this.c}}
A.i.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.i&&b.a===this.a&&b.b===this.b},
gv(a){return A.cv(this.a,this.b,B.x,B.x)},
C(a,b){return new A.i(this.a+b.a,this.b+b.b)},
V(a,b){return new A.i(this.a-b.a,this.b-b.b)},
bM(){return new A.Q(this.a,this.b)},
aV(a){var s=Math.abs(this.a-a.a),r=Math.abs(this.b-a.b)
return s+r+-0.6000000000000001*Math.min(s,r)},
k(a){return"("+this.a+", "+this.b+")"}}
A.jQ.prototype={
k(a){return"LiquidKind."+this.b}}
A.a1.prototype={
k(a){return"Interactable."+this.b}}
A.jU.prototype={}
A.jZ.prototype={
f5(){var s,r
for(s=this.a,r=0;r<4000;++r)s[r]=s[r]-1}}
A.cY.prototype={
k(a){return"MonsterKind."+this.b}}
A.fm.prototype={
eA(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.b,i=j.T(k,t.C),h=this.d
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.c.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.b||A.P(A.bS(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.e=r
j.a_(b,k,i)},
O(a,b){var s=this
if(s.c){s.eA(0,a)
s.c=!1}if(s.d==null)return
s.b.a6(a,0,B.e.X(s.e,2),A.aV(["u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.fn.prototype={
O(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.b,r=s.length,q=t.t,p=t.n,o=t.g2,n=t.N,m=t.z,l=0;l<s.length;s.length===r||(0,A.A)(s),++l){k=s[l]
$.mG().a6(a,4,3,A.aV(["u_resolution",A.c([b.a,b.b],q),"u_time",k.gbt().geY().fv(0,k.geO(k).geY()),"u_offset",A.c([b.d,b.e],p),"u_origin",A.c([k.ga3(k),k.ga4(k)],o)],n,m))
k.sbt(k.gbt().C(0,A.jk(11)))}r=A.Z(s).i("D(1)").a(new A.jl())
if(!!s.fixed$length)A.S(A.C("removeWhere"))
B.a.eg(s,r,!0)}}
A.jl.prototype={
$1(a){t.ox.a(a)
return a.gbt().dg(0,a.geO(a))},
$S:31}
A.jo.prototype={}
A.fo.prototype={
dJ(a,b,c){var s,r,q,p=this
p.ga0().b.S(p.a)
p.y.b.S(p.a)
p.z.b.S(p.a)
p.gbw().c.S(p.a)
s=p.gac()
r=p.a
s.e=r.createFramebuffer()
s.b.S(r)
s.c.S(r)
q=p.cy
if(q===$){s=A.aD(A.c([new A.R("a_position",35044,5126,2,new Float32Array(A.cF(B.z)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise(vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f * f * f + .6 * f * f + .5 * f) * color, 0.3);\n}\n",A.c([new A.x("u_resolution",B.f),new A.x("u_time",B.w),new A.x("u_offset",B.f),new A.x("u_player_vis_texture",B.k),new A.x("u_block_size",B.f)],t.o),u.d)
A.bH(p.cy,"weather")
q=p.cy=new A.hF(s)}q.c.S(p.a)
p.gb_().c.S(p.a)
s=p.a
$.mG().S(s)
$.oF().S(s)
p.fx.b.S(p.a)
p.gaW().b.b.S(p.a)
p.gas().e.S(p.a)
s=$.aS.b
if(s==null?$.aS!=null:s!==$.aS)A.S(new A.cn("Field '"+$.aS.a+"' has already been initialized."))
$.aS.b=p
s=p.cx
r=s.c
new A.c2(r,A.F(r).i("c2<1>")).d2(new A.jp(p,p.b.getBoundingClientRect()))
s.a=p.gas()},
ga0(){var s,r=this,q=r.x
if(q===$){s=A.nr(r.a,r.f)
A.bH(r.x,"sprites")
r.x=s
q=s}return q},
gbw(){var s,r=this,q=r.Q
if(q===$){s=A.qd()
s=A.aD(A.c([new A.R("a_position",35044,5126,2,s),new A.R("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.t,A.c([new A.x("u_resolution",B.f),new A.x("u_offset",B.f)],t.o),u.Z)
A.bH(r.Q,"fovRenderer")
q=r.Q=new A.fq(r.f,s,new A.i(-1,-1))}return q},
gac(){var s,r,q,p=this,o=u.v,n="a_position",m="u_player_visible_texture",l=p.ch
if(l===$){s=t.G
r=t.o
q=A.aD(A.c([new A.R(n,35044,5126,2,new Float32Array(A.cF(B.z)))],s),u._,A.c([new A.x("u_source_position",B.f),new A.x("u_source_color",B.ci),new A.x("u_source_strength",B.w),new A.x("u_time",B.w),new A.x("u_visible_texture",B.k),new A.x(m,B.k)],r),o)
r=A.aD(A.c([new A.R(n,35044,5126,2,new Float32Array(A.cF(B.z)))],s),u.L,A.c([new A.x("u_light_texture",B.k),new A.x("u_game_world_texture",B.k),new A.x(m,B.k),new A.x("u_resolution",B.f),new A.x("u_block_size",B.f),new A.x("u_offset",B.f)],r),o)
s=A.c([],t.ow)
A.bH(p.ch,"lightingRenderer")
l=p.ch=new A.dT(q,r,p.f,s)}return l},
gb_(){var s,r=this,q=r.db
if(q===$){s=A.aD(A.c([new A.R("a_position",35048,5126,2,new Float32Array(12))],t.G),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nuniform float u_time;\nuniform float u_visible;\n\nvoid main() {\n  if (u_visible == 0.0) {\n    discard;\n    return;\n  }\n  float scale = (sin(u_time * 3.0) + 1.0) / 4.0;\n  outColor = vec4(0.509, 0.69411, 1.0, scale + 0.3);\n}\n",A.c([new A.x("u_offset",B.f),new A.x("u_resolution",B.f),new A.x("u_time",B.w),new A.x("u_visible",B.w)],t.o),"#version 300 es\nin vec2 a_position;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n")
A.bH(r.db,"selectionRenderer")
q=r.db=new A.he(r.f,s,B.u)}return q},
gaW(){var s,r,q=this,p=q.dy
if(p===$){s=q.a
r=A.c([],t.ff)
s=A.nr(s,q.f)
A.bH(q.dy,"textRenderer")
p=q.dy=new A.hr(s,r)}return p},
gas(){var s,r=this,q=r.fy
if(q===$){s=A.mj(r.a)
A.bH(r.fy,"ui")
r.fy=s
q=s}return q},
cM(){var s,r=this
r.ry=null
B.a.sm(r.gac().y,0)
r.ga0().aP(0)
s=r.y
s.c=null
s.d=!0
s=r.z
s.d=null
s.c=!0
s=r.f
B.N.af(s.c,0,4000,0)
s.e=B.u
r.gas().b=null
s=r.k4
r.r.df(0,!0,0,0,r.r1,s)
r.go=null},
O(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=3553,b=6408,a=33071,a0=36160
d.a=a2
s=d.b
r=s.clientWidth
q=s.clientHeight
if(r!==d.k4||q!==d.r1){d.rx=!0
B.aa.sam(s,r)
B.aa.sah(s,q)
d.k4=r
d.r1=q
s=d.id
if(s!=null)B.d.cN(a2,s)
s=d.k1
if(s!=null)B.d.cN(a2,s)
d.id=a2.createTexture()
d.k1=a2.createTexture()
B.d.N(a2,c,d.id)
B.d.aE(a2,c,0,b,d.k4,d.r1,0,b,5121,null)
a2.texParameteri(c,10241,9729)
a2.texParameteri(c,10242,a)
a2.texParameteri(c,10243,a)
B.d.N(a2,c,d.k1)
B.d.aE(a2,c,0,b,d.k4,d.r1,0,b,5121,null)
a2.texParameteri(c,10241,9729)
a2.texParameteri(c,10242,a)
a2.texParameteri(c,10243,a)}s=d.r
p=d.f.e
s.df(0,d.rx,p.a,p.b,q,r)
p=d.x2
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
B.d.aC(a2,a0,d.k2)
B.d.bx(a2,a0,36064,c,d.id,0)
a2.clearColor(0,0,0,1)
a2.clear(16640)
d.y.O(a2,p)
d.z.O(a2,p)
d.ga0().O(a2,p)
s=d.k3
B.d.aC(a2,a0,s)
B.d.bx(a2,a0,36064,c,d.k1,0)
a2.viewport(0,0,r,q)
a2.clearColor(0,0,0,1)
d.gac()
d.gac().r=d.id
d.gac().z=s
d.gac().O(a2,p)
s=d.gbw()
if(!s.b.e.q(0,s.d)||s.e)s.eC(a2)
o=t.t
n=t.n
m=t.N
l=t.z
s.c.a6(a2,4,48e3,A.aV(["u_resolution",A.c([p.a,p.b],o),"u_offset",A.c([p.d,p.e],n)],m,l))
d.fr.O(a2,p)
if(d.d.b){s=d.gb_()
s.ec(a2,p)
k=A.c([p.a,p.b],o)
n=A.c([p.d,p.e],n)
j=p.c
i=s.b
i=i.a8(i.e)
h=s.d
i=i.a9(0,h.a,h.b)?1:0
s.c.a6(a2,4,6,A.aV(["u_resolution",k,"u_offset",n,"u_time",j/1000,"u_visible",i],m,l))}B.d.aC(a2,a0,null)
s=d.fx
s.c=d.k1
a2.activeTexture(33984)
B.d.N(a2,c,s.c)
s.b.a6(a2,4,3,A.aV(["u_resolution",A.c([p.a,p.b],o),"u_texture",0,"u_time",p.c/1000],m,l))
l=d.gaW()
s=l.e
o=p.b
if(s!==o||l.d!==p.a||p.d!==l.f||p.e!==l.r){l.d=p.a
l.e=o
l.r=p.e
l.f=p.d}l.b.O(a2,p)
d.gas().O(a2,p)
a2.finish()
g=A.jk(B.c.u(a1))
s=d.c
f=A.c(s.slice(0),A.Z(s))
B.a.sm(s,0)
for(s=f.length,e=0;e<f.length;f.length===s||(0,A.A)(f),++e)f[e].$1(g)
d.f4(p)
d.rx=!1},
f4(a){var s=this.ry
if(s==null)return
s=s.a.b
B.c.u(s.d/24)
B.c.u(s.e/36)},
bI(a){var s,r=this.ry,q=r.e
r=r.d
if(!(r<q.length))return A.b(q,r)
B.a.L(q[r].a,a)
s=a.b
s.sai(-1)
s.saj(-1)
this.ga0().L(0,s)},
bY(a,b){var s=a.b,r=B.c.u(s.d/24),q=B.c.u(s.e/36),p=b.b,o=B.c.u(p.d/24),n=B.c.u(p.e/36)
s.sai(o)
s.saj(n)
p.sai(r)
p.saj(q)
if(a.x){s=this.f
s.e=new A.i(o,n)
s.bO()}if(b.x){s=this.f
s.e=new A.i(r,q)
s.bO()}},
d5(a,b){var s=a.b
s.sai(b.a)
s.saj(b.b)
if(a.x){s=this.f
s.e=b
s.bO()}},
cC(a,b,c){var s,r,q,p
if(c==null){s=this.ry
r=s.e
s=s.d
if(!(s<r.length))return A.b(r,s)
q=r[s]}else q=c
B.a.l(q.a,a)
p=a.b
p.sai(b.a)
p.saj(b.b)
p.sau(0,B.T)
s=this.ga0()
p.sbz(0,1)
s.l(0,p)},
cB(a,b){return this.cC(a,b,null)},
cV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.go=null
B.a.sm(g.gac().y,0)
g.ga0().aP(0)
s=g.y
s.c=b
s.d=!0
s=g.z
s.d=b
s.c=!0
s=g.f
r=b.c
s.d0(r)
s.cW()
B.N.af(s.c,0,4000,0)
s.e=a
for(r=r.c,q=r.length,p=b.d,o=0;o<r.length;r.length===q||(0,A.A)(r),++o){n=r[o]
m=n.b
if(n.r!=null){l=new A.O(11,13,m.a*24,m.b*36,null)
l.x=B.fh
l.y=-1
k=l.a=g.ga0()
j=k.d
j.$ti.c.a(l);++j.d
j.ay(0,l)
k.a=!0}l=A.n5(n.f,m.a*24,m.b*36,p)
if(l!=null){k=l.a=g.ga0()
j=k.d
j.$ti.c.a(l);++j.d
j.ay(0,l)
k.a=!0
n.y=l}if(n.f===B.M){n.z=new A.fI(B.e6,7)
i=g.ch
if(i===$){h=A.pk(s)
A.bH(i,"lightingRenderer")
g.ch=h
i=h}B.a.l(i.y,n)}}for(s=b.a,r=s.length,o=0;o<s.length;s.length===r||(0,A.A)(s),++o){l=s[o].b
l.r=B.T
q=l.a
if(q!=null)q.a=!0
q=g.ga0()
l.y=1
p=l.a
if(p!=null)p.a=!0
l.a=q
p=q.d
p.$ti.c.a(l);++p.d
p.ay(0,l)
q.a=!0}s=g.gas().c.r
B.a.sm(s.f,0)
s.e.fb()}}
A.jp.prototype={
$1(a){var s,r,q
t.bd.a(a)
s=this.a.x2
r=J.az(a)
s.sf1(r.h(a,0))
r=r.h(a,1)
q=this.b
q.left.toString
q=q.top
q.toString
if(typeof r!=="number")return r.V()
s.r=r-q},
$S:65}
A.a4.prototype={
an(a){return this.ds(a)},
ds(a){var s=0,r=A.bn(t.fq),q,p=2,o,n=[],m=this,l,k,j,i
var $async$an=A.bo(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a8(m.Z(0,a),$async$an)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
l=A.bq(i)
A.eQ("ERROR: "+A.B(l))
q=new A.J(null,null,!1,!0,!1,B.i,null)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.bl(q,r)
case 2:return A.bk(o,r)}})
return A.bm($async$an,r)}}
A.bL.prototype={}
A.J.prototype={}
A.fV.prototype={
Z(a,b){var s,r,q,p,o=b.ry.a
A.dk(b.x1,"worldWrapper").b.n()
s=b.ry
r=s.e
s=s.d+1
if(!(s<r.length))return A.b(r,s)
q=r[s]
p=A.ln(q)
b.cV(p,q)
b.cC(o,p,q);++b.ry.d
b.rx=!0
return new A.J(null,null,!0,!0,!1,B.i,null)}}
A.e4.prototype={
Z(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.c.x,g=h.gbF(),f=h.b.h(0,B.t)
if(g==null||f.e===g.Q.b)return new A.J(j,j,!1,!0,!1,B.i,j)
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
break}}++n}if(r==null)return new A.J(j,j,!1,!0,!1,B.i,j)
i=i.t()
i.toString
b.e.ak("reload_1.mp3",i)
i=r.b
k=Math.min(i,g.Q.b)
i-=k
r.b=i
if(i===0)B.a.L(q,s)
i=f.e
i.toString
f.e=k+i
return new A.J(j,j,!0,!0,!1,B.i,j)}}
A.aW.prototype={
Z(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e={},d=b.ry,c=d.e
d=d.d
if(!(d<c.length))return A.b(c,d)
s=c[d]
d=g.b
r=d.t()
q=r.C(0,g.a)
p=s.c
if(!p.cU(q))return new A.J(f,f,!1,!0,!1,B.i,f)
o=p.h(0,q)
n=s.at(q)
if((o.c===B.b||A.P(A.bS(o.f)))&&n==null){if(o.f==null)return new A.J(f,f,!1,!0,!1,B.i,f)
e=b.ry
d=e.e
e=e.d
if(!(e<d.length))return A.b(d,e)
m=A.o2(o,d[e])
if(m.length!==0)return new A.J(B.a.gdA(m).b,f,!1,!0,!1,B.i,f)
return new A.J(f,f,!1,!0,!1,B.i,f)}l=A.c([],t.w)
e.a=!1
if(n!=null){if(A.o3(n,d))return new A.J(new A.dA(!1,d,n),f,!1,!0,!1,B.i,f)
c=e.a=!0}else c=!1
k=b.f
k=k.a8(k.e)
k.toString
j=!d.x
if(j)i=k.h(0,r)||k.h(0,q)
else i=!1
p.h(0,r)
if(o.r!=null)b.e.bE("water_footsteps_"+(B.n.G(5)+1)+".mp3",q,0.15)
if(i)h=new A.bL(A.jk(60),new A.k1(g,r,q),new A.k2(e,g,b,n,q))
else{if(c){n.toString
b.bY(n,d)}else b.d5(d,q)
h=f}d.a=0
return new A.J(f,f,!0,!0,j,l,h)}}
A.k1.prototype={
$1(a){var s=a.d,r=1-s,q=this.b,p=this.c,o=this.a.b.b
o.sa3(0,q.a*24*r+p.a*24*s)
o.sa4(0,q.b*36*r+p.b*36*s)},
$S:11}
A.k2.prototype={
$0(){var s,r=this,q=r.c,p=r.b.b
if(r.a.a){s=r.d
s.toString
q.bY(s,p)}else q.d5(p,r.e)},
$S:0}
A.d6.prototype={
Z(a,b){return new A.J(null,null,!0,!0,!1,B.i,null)}}
A.fH.prototype={
Z(a,b){var s=this.a.c
s.d-=1000;++s.c;++s.e;++s.f;++s.r
A.eQ("LEVEL UP")
return new A.J(null,null,!0,!0,!1,B.i,null)}}
A.ee.prototype={
Z(a,b){var s,r,q,p,o,n,m=b.ry,l=m.e
m=m.d
if(!(m<l.length))return A.b(l,m)
s=this.b
r=l[m].c.h(0,s)
q=r.y
r.f=this.a?B.y:B.J
m=b.ga0()
q.toString
m.L(0,q)
m=r.f
m.toString
l=r.b
p=b.ry
o=p.e
p=p.d
if(!(p<o.length))return A.b(o,p)
n=A.n5(m,24*l.a,36*l.b,o[p].d)
if(n!=null)b.ga0().l(0,n)
r.y=n
m=b.ry
l=m.e
m=m.d
if(!(m<l.length))return A.b(l,m)
b.f.d1(l[m].c,s)
b.gbw().e=!0
b.e.bE("door_1.mp3",s,0.8)
return new A.J(null,null,!0,!0,!1,B.i,null)}}
A.dA.prototype={
Z(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c={},b=d.b
b.a=0
c.a=null
s=d.c
r=A.r9(s,b,a0)
q=d.a
p=b.c
o=s.c
if(q){p.toString
o.toString
n=c.a=p.d9(o,B.n,r)}else{p.toString
o.toString
n=c.a=p.d4(o,B.n,r)}B.a.K(p.Q,n.d)
B.a.K(o.Q,n.e)
m=A.c([],t.w)
p=s.t()
p.toString
l=b.t()
l.toString
if(!q){q=b.b
k=q.y
j=s.b.r
q.sbz(0,4)
i=l.bM()
h=p.bM()
q=l.bM()
g=h.V(0,i)
f=q.C(0,new A.Q(g.a/1.5,g.b/1.5))
c.b=!0
e=new A.bL(B.eA,new A.iW(c,d,a0,p,l,i,f),new A.iX(c,d,a0,p,l,k,j))}else{q=b.x?B.ad:B.A
d.b1(n.c,p,l,a0,q)
e=null}q=s.r
if(q!=null)q.c=b
if(!n.b)return new A.J(null,n.a,!0,!0,!1,B.i,e)
b=o.b-n.c
o.b=b
if(b<=0)B.a.l(m,new A.dF(s))
return new A.J(null,c.a.a,!0,!0,!1,m,e)},
cj(a){if(this.a){if(a)return"bullet_impact_2.mp3"
return"bullet_miss_1.mp3"}if(a)return"heavy_punch_1.mp3"
return"miss_1.mp3"},
b1(a,b,c,d,e){var s,r,q={},p=c.a*24,o=c.b*36,n=new A.h7(B.e.k(a),e,1.25,p,o),m=b.a*24,l=b.b*36,k=A.p1(new A.Q(m-p,l-o)),j=k.a*24
k=k.b*36
s=new A.Q(j,k).C(0,new A.Q(p,o))
r=new A.Q(j*2,k*2).C(0,new A.Q(m,l))
d.gaW().eG(n)
q.a=B.ez
A.pD(B.eB,new A.iV(q,d,n,r,s))},
k(a){return"TargetMeleeAttackEvent{"+this.b.k(0)+" -> "+this.c.k(0)+"}"}}
A.iW.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a
if(l.b&&a.d>=0.4){s=m.c
r=m.b
q=m.d
s.e.ak(r.cj(l.a.b),q)
p=l.a
o=r.b.x?B.ad:B.A
r.b1(p.c,q,m.e,s,o)
l.b=!1
s=r.c.b
if(l.a.b)s.sau(0,B.A)
else s.sau(0,B.d4)}l=a.d
if(l<=0.4){s=m.f
r=m.r
n=l/0.6
l=m.b.b.b
l.sa3(0,A.ob(r.a,s.a,n)*24)
l.sa4(0,A.ob(r.b,s.b,n)*36)}else{s=m.b.b
if(l>=0.6){l=s.b
s=m.e
l.sai(s.a)
l.saj(s.b)}else{l=s.b
s=m.r
l.sa3(0,s.a*24)
l.sa4(0,s.b*36)}}},
$S:11}
A.iX.prototype={
$0(){var s,r,q,p,o,n=this,m=n.a
if(m.b){s=n.c
r=n.b
q=n.d
s.e.ak(r.cj(m.a.b),q)
p=m.a
o=r.b.x?B.ad:B.A
r.b1(p.c,q,n.e,s,o)
m.b=!1}m=n.b
s=m.b.b
s.sbz(0,n.f)
r=n.e
s.sai(r.a)
s.saj(r.b)
m.c.b.sau(0,n.r)},
$S:0}
A.iV.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
t.hU.a(a)
s=l.a
r=s.a.a+8000
s.a=new A.ag(r)
if(r>5e5){a.eK(0)
r=l.b.gaW()
q=l.c
if(B.a.L(r.c,q)){r=r.b
B.a.D(q.f.a,r.gfa(r))}}p=B.e.X(s.a.a,1000)/300
s=l.c
r=l.d
q=1-p
o=l.e
n=p*r.a+q*o.a
s.d=n
m=s.f
if(m!=null)m.A(n,s.e)
n=s.r
if(n!=null)n.b.a=!0
r=p*r.b+q*o.b
s.e=r
q=s.f
if(q!=null)q.A(s.d,r)
s=s.r
if(s!=null)s.b.a=!0},
$S:34}
A.dF.prototype={
k(a){return"DeathEvent{"+this.a.k(0)+"}"},
Z(a,b){var s,r=null,q=b.ry,p=q.e,o=q.d
if(!(o<p.length))return A.b(p,o)
p=this.a
if(p.e){b.bI(p)
return new A.J(r,r,!0,!0,!1,B.i,r)}if(p.x)return new A.J(r,"You Died!",!0,!0,!1,B.i,r)
q.a.c.d+=100
s=A.c([],t.w)
q=b.ry.a
if(q.c.d>=1000)B.a.l(s,new A.fH(q))
p.t()
p.c.toString
b.bI(p)
return new A.J(r,p.k(0)+" has died.",!1,!0,!1,s,r)}}
A.f1.prototype={
Z(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=b.ry,d=e.e
e=e.d
if(!(e<d.length))return A.b(d,e)
s=d[e]
if($.mU!==s){$.mU=s
e=g.b
B.N.af(e.a,0,4000,0)
e.b.aP(0)}for(e=b.f.c,d=g.c,r=!d,q=g.b,p=q.b,o=s.c,n=0;n<100;++n)for(m=0;m<40;++m){l=100*m+n
k=new A.i(n,m)
if(!(l<4000))return A.b(e,l)
j=e[l]
if(j===0&&d)if(o.h(0,k).f===B.y)p.j(0,k,100)
else{i=o.h(0,k)
if(!(i.c===B.b||A.P(A.bS(i.f))))p.j(0,k,80)}else if(j===1&&r)p.L(0,k)}q.f9(s,B.ab)
e=g.a
d=e.t()
d.toString
k=q.cQ(s,d,1,B.ab)
if(k==null)return new A.J(f,"No more areas to explore",!1,!0,!1,B.i,f)
d=$.eR()
r=e.t()
r.toString
r=d.cR(r,k,s,B.ab)
h=r==null?f:r.b
if(h==null)return new A.J(f,"No path to that location",!1,!0,!1,B.i,f)
d=h.d
r=e.t()
r.toString
return new A.J(new A.aW(d.V(0,r),e),f,!0,!0,!1,B.i,f)}}
A.hB.prototype={
Z(a,b){var s,r,q,p,o,n,m=null,l=b.ry,k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
s=k[l]
r=A.c([],t.q)
for(l=s.c.c,k=l.length,q=!1,p=0;p<l.length;l.length===k||(0,A.A)(l),++p){o=l[p]
if(o.f===B.K){o.f=B.y
B.a.l(r,o.b)
q=!0}}if(q){for(l=r.length,k=b.e,p=0;p<r.length;r.length===l||(0,A.A)(r),++p)k.ak("door_unlock_1.mp3",r[p])
l=b.ry
k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
n=this.a
k[l].c.h(0,n).f=B.X
l=b.ry
k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
k[l].at(n)
return new A.J(m,"A door has been unlocked",!0,!0,!1,B.i,m)}return new A.J(m,m,!1,!0,!1,B.i,m)}}
A.e3.prototype={
Z(a,b){var s,r=null,q=this.b,p=q.c.x.b.h(0,B.t)
if(p==null||p.e===0)return new A.J(r,r,!1,!0,!1,B.i,r)
s=p.e
s.toString
p.e=s-1
return new A.J(new A.h6(this.a,q),r,!0,!0,!1,B.i,r)}}
A.h6.prototype={
Z(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null,g=b.ry,f=g.e
g=g.d
if(!(g<f.length))return A.b(f,g)
s=f[g]
g=this.c
f=g.t()
f.toString
r=this.b
q=$.eR().eQ(f,r,s)
if(q==null)return new A.J(h,"Cant reach target",!1,!0,!1,B.i,h)
p=s.at(r)
o=A.c([],t.w)
if(p!=null)o.push(new A.dA(!0,g,p))
n=q.fj(0)
m=b.e.ak("pistol_1.mp3",f)
g=g.b
f=B.c.u(g.d/24)
g=B.c.u(g.e/36)
l=B.fd.h(0,t.gX.i("W.T").a(700))
l.toString
k=new A.fJ(new A.fI(l,10),f,g)
B.a.l(b.gac().y,k)
g=B.b2.h(0,t.e.i("W.T").a(800))
g.toString
j=new A.O(14,2,-1,-1,h)
j.scL(0,g)
i=A.m1(h,h,0,h,!0,!1,j)
b.cB(i,B.u)
j.sau(0,new A.f(0))
return new A.J(h,h,!0,!0,!1,o,new A.bL(A.jk(16*n.length),new A.ka(n,j,m,k),new A.kb(b,i,k)))}}
A.ka.prototype={
$1(a){var s,r,q=this.a,p=B.c.ag(a.d*(q.length-1))
if(!(p>=0&&p<q.length))return A.b(q,p)
s=q[p]
p=this.b
q=s.a
p.sai(q)
r=s.b
p.saj(r)
B.e.u(q)
B.e.u(r)
this.d.a.c=10*(1-a.d)},
$S:11}
A.kb.prototype={
$0(){var s=this.a
s.bI(this.b)
B.a.L(s.gac().y,this.c)},
$S:0}
A.ft.prototype={}
A.jq.prototype={
dZ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.d.N(b,f,c)
s=A.nf(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
r=this.a8(a)
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
s[h]=g}B.d.aE(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
aY(a,b){var s,r,q=a.b*100+a.a
if(q<0||q>=4000)return null
s=this.f
r=s.h(0,a)
if(r==null){r=new A.iv(b.createTexture())
s.j(0,a,r)}if(r.b){this.dZ(a,b,r.a)
r.b=!1}return r.a},
a8(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.ke(p,p+4000,B.e.bZ(s.byteLength,r))
return new A.kx(100,A.nf(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
bO(){var s,r,q,p,o=this.a8(this.e).c
for(s=o.length,r=this.c,q=0;q<4000;++q){p=r[q]
if(!(q<s))return A.b(o,q)
r[q]=p|(o[q]>0?1:0)}},
cW(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.bd(new A.i(s,r))
for(q=this.f,q=q.gbP(q),q=q.gw(q);q.n();)q.gp(q).b=!0},
d1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.U.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.a9(0,r,q)
o=o.c===B.b||A.P(A.pd(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.bd(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]>0)g.bd(new A.i(m,l))}s=g.a8(b)
s.toString
for(p=g.f,p=p.gaq(p),p=p.gw(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]>0)i.b.b=!0}},
d0(a){return this.d1(a,null)},
bd(a){var s,r,q,p=this.a8(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=15
for(q=0;q<4;++q)this.ej(new A.d5(1,-1,1),new A.kc(B.f9[q],a),o)},
ei(a,b,c){var s,r
if(a<0||a>=b.byteLength)return
s=b.length
if(this.bf(a,b)){if(!(a>=0&&a<s))return A.b(b,a)
s=b[a]
r=c.a
if(!(r<4))return A.b(B.aU,r)
b[a]=s|B.aU[r]}else{if(!(a>=0&&a<s))return A.b(b,a)
b[a]=15}},
bf(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
be(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===0},
ej(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.r
B.a.sm(d,0)
B.a.l(d,a)
for(s=b.a;r=d.length,r!==0;){if(0>=r)return A.b(d,-1)
q=d.pop()
r=q.a
p=B.c.ag(r*q.b+0.5)
o=B.c.cK(r*q.c-0.5)
for(n=r+1,m=2*r,l=p,k=null;l<=o;++l,k=i){j=b.fl(0,new A.i(r,l))
i=j.b*100+j.a
h=e.bf(i,c)
if(!h)g=l>=r*q.b&&l<=r*q.c
else g=!0
if(g)e.ei(i,c,s)
g=k!=null
if(g&&e.bf(k,c)&&e.be(i,c))q.b=(2*l-1)/m
if(g&&e.be(k,c)&&h){f=new A.d5(n,q.b,q.c)
f.c=(2*l-1)/m
B.a.l(d,f)}}if(k!=null&&e.be(k,c))B.a.l(d,new A.d5(n,q.b,q.c))}}}
A.iv.prototype={}
A.kx.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0},
a9(a,b,c){var s=this.c,r=c*this.a+b
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0}}
A.cc.prototype={
k(a){return"Cardinal."+this.b}}
A.kc.prototype={
fl(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a.a){case 0:s=r.b
return new A.i(s.a+p,s.b-q)
case 1:s=r.b
return new A.i(s.a+p,s.b+q)
case 2:s=r.b
return new A.i(s.a+q,s.b+p)
case 3:s=r.b
return new A.i(s.a-q,s.b+p)}}}
A.d5.prototype={}
A.bf.prototype={
k(a){return this.a}}
A.dT.prototype={
O(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=3553,a="u_player_visible_texture"
if(c.f==null){s=a0.createTexture()
c.f=s
B.d.N(a0,b,s)
B.d.aE(a0,b,0,6408,100,40,0,6408,5121,null)
a0.texParameteri(b,10241,9729)
a0.texParameteri(b,10242,33071)
a0.texParameteri(b,10243,33071)}B.d.aC(a0,36160,c.e)
B.d.bx(a0,36160,36064,b,c.f,0)
a0.clearColor(0,0,0,1)
a0.clear(16640)
a0.viewport(0,0,100,40)
s=c.d
r=s.aY(s.e,a0)
r.toString
a0.activeTexture(33985)
B.d.N(a0,b,r)
for(q=c.y,p=q.length,o=c.b,n=t.t,m=t.n,l=t.N,k=t.z,j=0;j<q.length;q.length===p||(0,A.A)(q),++j){i=q[j]
h=i.gbA()
g=s.aY(new A.i(i.ga3(i),i.ga4(i)),a0)
if(g==null)continue
a0.activeTexture(33984)
B.d.N(a0,b,g)
f=h.c
e=A.c([i.ga3(i),i.ga4(i)],n)
d=h.b.a
o.a6(a0,4,3,A.aV(["u_source_strength",f,"u_source_position",e,"u_source_color",A.c([(d>>>16&255)/255,(d>>>8&255)/255,(d&255)/255,0.2],m),"u_time",a1.c/1000,a,1,"u_visible_texture",0],l,k))}B.d.aC(a0,36160,c.z)
a0.viewport(0,0,a1.a,a1.b)
a0.activeTexture(33984)
B.d.N(a0,b,c.f)
a0.activeTexture(33985)
B.d.N(a0,b,c.r)
a0.activeTexture(33986)
B.d.N(a0,b,r)
c.c.a6(a0,4,3,A.aV(["u_light_texture",0,"u_game_world_texture",1,a,2,"u_block_size",B.f_,"u_resolution",A.c([a1.a,a1.b],n),"u_offset",A.c([a1.d,a1.e],m)],l,k))}}
A.bz.prototype={
gcO(){var s=this.b
s=s==null?null:s.gcO()
return 1+(s==null?0:s)},
R(a,b){return B.c.R(this.f,t.p6.a(b).f)},
gcu(){var s,r=this.a
if(r==null)r=this
else{s=r.a
r=s==null?r:s.gcu()}return r},
e4(){var s,r,q
for(s=this,r=null;s!=null;r=s,s=q){s.b=r
q=s.a}},
fj(a){var s,r=A.c([],t.q)
for(s=this;s!=null;){B.a.l(r,s.d)
s=s.b}return r},
k(a){var s,r,q,p
for(s=this.d,r=this,q="",p="";r!=null;q=", "){p=p+q+s.k(0)
r=r.b}return p.charCodeAt(0)==0?p:p},
$iaf:1}
A.b1.prototype={
k(a){return"Directions."+this.b}}
A.k6.prototype={
eQ(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.a,e=a1.a,d=a0.b,c=a1.b,b=Math.max(Math.abs(f-e),Math.abs(d-c)),a=new A.bz(a0,0,b*1.02+0)
for(s=(b-1)*1.02+1,r=a2.c,q=t.W,p=r.a,o=r.b,n=a0,m=a,l=1;l<=b;++l,n=h,m=g){k=l/b
j=1-k
i=B.c.u(e*k+f*j)
j=B.c.u(c*k+d*j)
h=new A.i(i,j)
if(!(i>=0&&j>=0&&i<p&&j<o))return null
if(A.ll(q.a(r.h(0,h)),a2,B.ac)&&l!==b)return null
A.qZ(i-n.a,j-n.b)
g=new A.bz(h,1,s)
g.a=m
m.b=g}return a},
cR(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=A.n4(b,t.p6),a0=A.ab(t.j,t.i),a1=a4.c
a.l(0,new A.bz(a2,0,a2.aV(a3)*1.02+0))
for(s=a.$ti.c,r=a1.a,q=a1.b,p=t.W;o=a.c,n=o===0,!n;){if(n)A.S(A.ah("No element"));++a.d
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
if(k>0)a.c3(j,0)
o=l.d
i=a0.h(0,o)
if(i!=null&&i<l.e)continue
for(n=l.e,h=0;h<8;++h){g=B.an[h]
f=A.a9(o,g)
m=f.a
if(m>=0){e=f.b
m=e>=0&&m<r&&e<q}else m=!1
if(m){m=l.a
if(!J.a_(m==null?b:m.d,f))m=A.ll(p.a(a1.h(0,f)),a4,a5)&&!f.q(0,a3)
else m=!0}else m=!0
if(m)continue
m=f.aV(a3)
e=this.eb(g)
if(typeof e!=="number")return A.cH(e)
e=n+e
d=new A.bz(f,e,m*1.02+e)
d.a=l
if(f.q(0,a3)){d.e4()
s=l.a
return s==null?l:s.gcu()}c=a0.h(0,f)
if(!(e>1/0))m=c!=null&&e>=c
else m=!0
if(m)continue
a0.j(0,f,e)
s.a(d);++a.d
a.ay(0,d)}}return b},
bv(a,b,c){return this.cR(a,b,c,B.ac)},
eb(a){switch(a.a){case 4:case 7:case 5:case 6:return 1
case 1:case 0:case 2:case 3:return 1.4}}}
A.fk.prototype={
cQ(a,b,c,d){var s,r,q,p,o,n,m,l,k=this.a,j=b.b*100+b.a
if(!(j>=0&&j<4000))return A.b(k,j)
s=k[j]*c
r=A.c([],t.q)
for(j=a.c,q=t.W,p=!1,o=0;o<8;++o){n=A.a9(b,B.an[o])
m=n.b*100+n.a
if(m<0||m>=4000)continue
if(A.ll(q.a(j.h(0,n)),a,d))continue
if(!(m>=0&&m<4000))return A.b(k,m)
l=k[m]*c
if(l>s){B.a.sm(r,0)
B.a.l(r,n)
s=l
p=!0}else if(l===s)B.a.l(r,n)}k=r.length
if(k===0||!p)return null
k=$.oj().G(k)
if(!(k>=0&&k<r.length))return A.b(r,k)
return r[k]},
bu(a,b,c){return this.cQ(a,b,c,B.ac)},
f9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
B.N.af(f,0,4000,0)
for(s=this.b,s=s.gaq(s),s=s.gw(s);s.n();){r=s.gp(s)
q=r.a
B.N.j(f,q.b*100+q.a,r.b)}s=a.c
r=t.W
do for(p=!1,o=0;o<100;++o)for(n=0;n<40;++n){m=n*100+o
if(A.ll(r.a(s.h(0,new A.i(o,n))),a,b))continue
if(!(m<4000))return A.b(f,m)
l=f[m]
for(q=[m+100,m-100,m+1,m-1],k=-1,j=0,i=0;i<4;++i){h=q[i]
if(h<0||h>=4000)continue
if(!(h>=0&&h<4000))return A.b(f,h)
g=f[h]
if(g>j){j=g
k=h}}if(k!==-1&&j>l+1){f[m]=j-1
p=!0}}while(p)}}
A.he.prototype={
ec(a,b){var s,r,q,p,o,n,m,l=this,k="a_position",j=B.c.ag((b.f+b.d)/24),i=B.c.ag((b.r+b.e)/36),h=new A.i(j,i)
if(h.q(0,l.d)||j<0||j>=100||i<0||i>=40)return
l.d=h
s=l.c
r=s.T(k,t.C)
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
s.a_(a,k,r)}}
A.R.prototype={}
A.x.prototype={}
A.d9.prototype={
k(a){return"UniformKind."+this.b}}
A.hL.prototype={}
A.iA.prototype={}
A.jB.prototype={
S(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.nO(a,i.a,35633),f=A.nO(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.a_(a.getProgramParameter(e,35714),!0)){A.eQ(a.getProgramInfoLog(e))
A.S(A.ah("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.d.cJ(a,A.dk(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.iA(a.getUniformLocation(A.dk(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.dk(i.e,h),n)
k=a.createBuffer()
B.d.cG(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.hL(k,j))}},
T(a,b){A.qT(b,t.jv,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
a_(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.d(A.ah("WARNING, NO ATTRIBUTE "+b))
B.d.cG(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
a6(a,b,c,d){var s,r,q,p,o,n
t.ea.a(d)
B.d.fs(a,A.dk(this.e,"_program"))
B.d.cJ(a,A.dk(this.f,"_vertexArrayObject"))
for(s=d.gaq(d),s=s.gw(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.ae(p)
n=r.h(0,p)
if(n==null)A.S(A.ah("WARNING, NO UNIFORM "+p))
switch(n.b.b.a){case 0:B.d.fm(a,n.a,A.b7(o))
break
case 1:q=J.az(o)
B.d.fo(a,n.a,A.b7(q.h(o,0)),A.b7(q.h(o,1)))
break
case 2:q=J.az(o)
B.d.fp(a,n.a,A.b7(q.h(o,0)),A.b7(q.h(o,1)),A.b7(q.h(o,2)))
break
case 3:q=J.az(o)
B.d.fq(a,n.a,A.b7(q.h(o,0)),A.b7(q.h(o,1)),A.b7(q.h(o,2)),A.b7(q.h(o,3)))
break
case 4:B.d.fn(a,n.a,A.K(o))
break}}a.drawArrays(b,0,c)}}
A.kf.prototype={
sf1(a){this.f=A.nL(a)}}
A.aw.prototype={}
A.fW.prototype={}
A.hg.prototype={
aT(){var s=0,r=A.bn(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aT=A.bo(function(a,b){if(a===1)return A.bk(b,r)
while(true)switch(s){case 0:e=A.c([],t.iw)
for(p=q.b,o=t.cU,n=t.ou,m=t.oV,l=t.Z,k=t.L,j=0;j<47;++j){i=p[j]
h=new XMLHttpRequest()
g=new A.G($.E,o)
B.eD.f6(h,"get","sounds/"+i)
h.responseType="arraybuffer"
f=m.a(new A.kj(q,h,i,new A.ak(g,n)))
l.a(null)
A.em(h,"readystatechange",f,!1,k)
h.send()
B.a.l(e,g)}s=2
return A.a8(A.p9(e,t.H),$async$aT)
case 2:return A.bl(null,r)}})
return A.bm($async$aT,r)},
bE(a,b,c){var s,r,q,p=this.c,o=A.pa(p),n=this.a.h(0,a)
if(n==null)return new A.fW()
s=p.createBufferSource()
r=B.n.I()
q=o.gain
q.toString
B.cP.sft(q,0.1*c+r/20)
p=p.destination
p.toString
B.eC.ca(o,p,0,0)
B.aF.ca(s,o,0,0)
B.aF.seJ(s,n)
s.start()
return new A.fW()},
ak(a,b){return this.bE(a,b,2)},
$ipA:1}
A.kj.prototype={
$1(a){var s=0,r=A.bn(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.bo(function(b,c){if(b===1)return A.bk(c,r)
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
return A.a8(B.cO.eM(n.c,t.lo.a(A.qc(m.response))),$async$$1)
case 7:l.j(0,k,c)
p.aQ(0)
s=5
break
case 6:p.aR(new A.hV("Failed to load "+o))
case 5:case 3:return A.bl(null,r)}})
return A.bm($async$$1,r)},
$S:35}
A.lw.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.d.N(q,r,p)
B.d.dd(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.Y(0,p)},
$S:9}
A.eb.prototype={
dK(a,b){A.rd(a,"CursesTransparent_24x36.png").bL(new A.kk(this),t.P)},
l(a,b){b.a=this
this.d.l(0,b)
this.a=!0},
L(a,b){t.r.a(b)
this.d.L(0,b)
b.a=null
this.a=!0},
aP(a){var s,r,q,p
for(s=this.d,r=s.$ti,q=new A.cE(s,s.d,r.i("cE<1>")),r=r.c;q.n();){if(q.d<0)p=A.S(A.ah("No element"))
else{p=q.c
if(p==null)p=r.a(null)}p.a=null}++s.d
s.sbk(B.f3)
s.c=0
this.a=!0},
en(c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9="a_position",c0="a_texcoord",c1="a_bg_color",c2=b8.d,c3=c2.c
if(c3>1e4){A.eQ("WARNING: TOO MANY SPRITES "+c3)
if(b8.f)b8.f=!1
c3=1e4}s=b8.b
r=t.jv
q=c3*12
p=A.cs(s.T(b9,r).buffer,0,q)
o=A.cs(s.T(c0,r).buffer,0,q)
q=c3*24
n=A.cs(s.T("a_color",r).buffer,0,q)
m=A.cs(s.T(c1,r).buffer,0,q)
l=c2.ey()
B.a.b0(l,c2.a)
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
p[a6]=a}else{b0=B.c.al(12*a9)
b1=B.c.al(18*a9)
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
if(b5==null)B.a3.af(n,b4,b4+24,0)
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
n[a]=e}if(b6==null)B.a3.af(m,b4,b4+24,0)
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
m[a]=e}}s.a_(c4,b9,p)
s.a_(c4,c0,o)
s.a_(c4,"a_color",n)
s.a_(c4,c1,m)},
O(a,b){var s,r=this
if(r.c==null||r.d.c===0)return
if(r.a){r.en(a)
r.a=!1}s=r.e
s.aY(s.e,a)
a.activeTexture(33984)
B.d.N(a,3553,r.c)
r.b.a6(a,4,r.d.c*6,A.aV(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.kk.prototype={
$1(a){this.a.c=t.lJ.a(a)},
$S:15}
A.O.prototype={
sa3(a,b){var s=this.a
if(s!=null)s.a=!0
this.d=b},
sa4(a,b){var s=this.a
if(s!=null)s.a=!0
this.e=b},
sdt(a,b){var s=this.a
if(s!=null)s.a=!0
this.f=b},
sai(a){var s=this.a
if(s!=null)s.a=!0
this.d=a*24},
saj(a){var s=this.a
if(s!=null)s.a=!0
this.e=a*36},
sau(a,b){var s
this.r=b
s=this.a
if(s!=null)s.a=!0},
scL(a,b){var s=this.a
if(s!=null)s.a=!0
this.x=b},
sbz(a,b){var s
this.y=b
s=this.a
if(s!=null)s.a=!0},
k(a){return"Sprite("+this.b+", "+this.c+")"}}
A.m.prototype={}
A.jW.prototype={}
A.hp.prototype={
es(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(this.c==null)return
s=this.b
r=s.T("a_color",t.C)
q=this.c
switch(q.d.a.a){case 0:case 1:case 6:case 5:p=$.ok()
break
case 2:p=$.mC()
break
case 4:p=$.om()
break
case 3:p=$.ol()
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
f=!(f.c===B.b||A.P(A.bS(f.f)))}else f=!1
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
r[f]=1}}}s.a_(a,"a_color",r)},
O(a,b){var s=this
if(s.d){s.es(a)
s.d=!1}if(s.c==null)return
s.b.a6(a,4,48e3,A.aV(["u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.hr.prototype={
eG(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.k),i=a.a
i=(i.length===0?B.a4:new A.bW(i)).a
s=new A.d7(i,0,0)
r=this.b
q=r.d
p=q.$ti.c
o=a.c
n=a.b
for(;s.b3(1,s.c);){m=s.d
l=$.qb.h(0,m==null?s.d=B.h.aH(i,s.b,s.c):m)
if(l==null)l=B.fI
k=new A.O(l.a,l.b,-1,-1,null)
k.x=n
k.f=o
k.a=r
p.a(k);++q.d
q.ay(0,k)
r.a=!0
B.a.l(j,k)}a.r=this
i=new A.l5(j)
i.A(a.d,a.e)
a.f=i
B.a.l(this.c,a)}}
A.h7.prototype={}
A.l5.prototype={
A(a,b){var s,r,q,p,o,n,m
for(s=this.a,r=s.length,q=0,p=0;p<r;++p){o=s[p]
n=o.a
m=n==null
if(!m)n.a=!0
o.d=a+q
if(!m)n.a=!0
o.e=b
q+=24}}}
A.lv.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.d.N(q,r,p)
B.d.dd(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.Y(0,p)},
$S:9}
A.hx.prototype={
dL(a){A.rc(a,"CursesTransparent_24x36.png").bL(new A.kv(this),t.P)},
eB(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5="a_position",b6="a_texcoord",b7="a_bg_color",b8=b4.d,b9=b8.length
if(b9>1e4){A.eQ("WARNING: TOO MANY SPRITES "+b9)
if(b4.r)b4.r=!1
b9=1e4}s=b4.e
r=t.jv
q=b9*12
p=A.cs(s.T(b5,r).buffer,0,q)
o=A.cs(s.T(b6,r).buffer,0,q)
q=b9*24
n=A.cs(s.T("a_color",r).buffer,0,q)
m=A.cs(s.T(b7,r).buffer,0,q)
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
if(b1==null)B.a3.af(n,b0,b0+24,0)
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
n[a]=e}if(b2==null)B.a3.af(m,b0,b0+24,0)
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
m[a]=e}}s.a_(c0,b5,p)
s.a_(c0,b6,o)
s.a_(c0,"a_color",n)
s.a_(c0,b7,m)},
O(a,b){var s,r,q=this
if(q.f==null)return
s=q.c
s.sdw(b.b)
s.sdz(b.a)
r=q.b
r=r==null?null:new A.fw(r.b,r.a)
s.f.seX(r)
if(s.b){r=b.b
s.A(B.m,new A.bN(0,0,b.a,r))
r=q.d
B.a.sm(r,0)
B.a.K(r,s.H())
s.cm()
q.a=!0}if(q.a){q.eB(a)
q.a=!1}a.activeTexture(33984)
B.d.N(a,3553,q.f)
q.e.a6(a,4,q.d.length*6,A.aV(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t)],t.N,t.z))},
$ipj:1}
A.kv.prototype={
$1(a){this.a.f=t.lJ.a(a)},
$S:15}
A.aY.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.aY&&b.a.q(0,this.a)&&b.b===this.b&&b.c===this.c},
gv(a){return A.cv(this.a,this.b,this.c,B.x)},
k(a){var s=this.a
return"Rect("+A.B(s.a)+", "+A.B(s.b)+", "+this.b+", "+this.c+")"}}
A.ar.prototype={
aa(a){var s=a==null?[]:a,r=s.length,q=0
for(;q<r;++q)s[q].a=this},
fb(){var s,r,q
for(s=this.c,r=s.length,q=0;q<r;++q)s[q].a=null
B.a.sm(s,0)
this.F()},
ap(a){B.a.l(this.c,a)
a.a=this
this.F()},
aD(a){if(a==null)return
B.a.L(this.c,a)
a.a=null
this.F()},
ar(a){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)if(s[q].ar(a))return!0
return!1},
F(){this.b=!0
var s=this.a
if(s!=null)s.F()},
cm(){var s,r,q
this.b=!1
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)s[q].cm()}}
A.hq.prototype={
sfi(a){if(a===this.f)return
this.f=a
this.F()},
A(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=a
i.F()
s=i.r
B.a.sm(s,0)
r=b.c
if(r==null)r=1/0
q=i.e
p=t.t
o=q.length===0
n=0
m=0
while(!0){l=o?B.a4:new A.bW(q)
if(!(n<l.gm(l)))break
k=n
j=0
while(!0){if(j<r){l=o?B.a4:new A.bW(q)
l=k<l.gm(l)}else l=!1
if(!l)break
j+=24*i.f;++k}if(j>m)m=j
B.a.l(s,A.c([n,k],p))
n=k}return new A.aY(a,B.c.u(m),B.c.u(s.length*36*i.f))},
H(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.c([],t.k)
for(s=e.r,r=s.length,q=e.e,p=0,o=0;o<s.length;s.length===r||(0,A.A)(s),++o){n=s[o]
m=n.length
if(0>=m)return A.b(n,0)
l=n[0]
if(1>=m)return A.b(n,1)
l=B.h.aH(q,l,n[1])
m=(l.length===0?B.a4:new A.bW(l)).a
l=new A.d7(m,0,0)
k=p*36
j=0
for(;l.b3(1,l.c);){i=l.d
h=$.qa.h(0,i==null?l.d=B.h.aH(m,l.b,l.c):i)
if(h==null)h=B.fJ
h=new A.O(h.a,h.b,-1,-1,null)
g=e.f
h.f=g
f=e.d
h.d=f.a+j*24*g
h.e=f.b+k*g
B.a.l(d,h);++j}++p}return d}}
A.fd.prototype={
H(){var s,r,q,p=A.c([],t.k)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)B.a.K(p,s[q].H())
return p},
A(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.d=a
j.F()
if(j.e){s=b.d
s.toString
for(r=j.c,q=a.a,p=a.b,o=s,n=0,m=0;m<r.length;++m){l=r[m]
k=l.A(new A.Q(q,p),b)
n=Math.max(k.b,n)
o-=k.c
l.A(new A.Q(q,p+o),b)}o=s}else for(s=j.c,r=a.a,q=a.b,n=0,o=0,m=0;m<s.length;++m){k=s[m].A(new A.Q(r,q+o),b)
n=Math.max(k.b,n)
o+=k.c}return new A.aY(a,n,o)}}
A.f2.prototype={
A(a,b){var s,r,q,p=this
p.d=a
p.F()
s=b.q(0,B.E)
r=p.c
q=r.length
if(s){if(0>=q)return A.b(r,0)
return p.f=r[0].A(a,b)}else{if(0>=q)return A.b(r,0)
r[0].A(a,b)
s=b.c
s.toString
r=b.d
r.toString
return p.f=new A.aY(a,s,r)}},
H(){var s,r,q,p,o,n,m=this,l=A.c([],t.k)
for(s=m.e,r=0;r<m.f.c/36;++r)for(q=r*36,p=0;p<m.f.b/24;++p){o=new A.O(11,13,-1,-1,null)
n=m.d
o.d=n.a+p*24
o.e=n.b+q
o.x=s
l.push(o)}s=m.c
if(0>=s.length)return A.b(s,0)
B.a.K(l,s[0].H())
return l}}
A.h1.prototype={
H(){var s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].H()},
A(a,b){var s,r,q,p,o,n=this
n.d=a
n.F()
if(!b.q(0,B.E)){s=b.d
s.toString
r=b.c
r.toString
q=new A.bN(b.a,b.b,r-n.r-n.x,s-n.e-n.f)}else q=b
s=n.c
if(0>=s.length)return A.b(s,0)
r=n.r
p=n.e
o=s[0].A(a.C(0,new A.Q(r,p)),q)
return new A.aY(a,o.b+r+n.x,o.c+p+n.f)}}
A.f5.prototype={
A(a,b){var s,r,q,p,o=this
o.d=a
o.F()
if(!b.q(0,B.E)){s=b.d
s.toString
r=b.c
r.toString
q=new A.bN(b.a,b.b,r-48,s-72)}else q=b
s=o.c
if(0>=s.length)return A.b(s,0)
s=s[0]
p=s.A(a.C(0,new A.Q(24,36)),q)
return o.z=new A.aY(a,p.b+48,p.c+72)},
H(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.c([],t.k),f=h.z,e=B.c.u(f.c/36),d=B.c.u(f.b/24)
for(f=h.e,s=e-1,r=d-1,q=0;q<e;++q)for(p=q*36,o=q===s,n=q===0,m=0;m<d;++m){l=m===0
if(l&&n)k=B.fL
else if(l&&o)k=B.fK
else{j=m===r
if(j&&n)k=B.fG
else if(j&&o)k=B.fH
else if(l)k=B.bg
else if(j)k=B.bg
else if(n)k=B.bq
else k=o?B.bq:null}if(k==null)continue
i=new A.O(k.a,k.b,-1,-1,null)
l=h.d
i.d=l.a+m*24
i.e=l.b+p
i.x=f
i.r=B.T
B.a.l(g,i)}f=h.c
if(0>=f.length)return A.b(f,0)
f=A.jR(f[0].H(),!0,t.r)
B.a.K(f,g)
return f}}
A.e8.prototype={
ar(a){var s,r,q=this,p="click_1.mp3"
if(a.q(0,B.aS)&&q.x>0){--q.x
q.F()
$.aS.ae().e.ak(p,B.u)
return!0}if(a.q(0,B.aR)&&q.x<q.e.length-1){++q.x
q.F()
$.aS.ae().e.ak(p,B.u)
return!0}if(a.q(0,B.eX)||a.q(0,B.eU)){s=q.e
r=q.x
if(!(r>=0&&r<s.length))return A.b(s,r)
q.f.$1(s[r])
$.aS.ae().e.ak(p,B.u)
return!0}if(a.q(0,B.aT)){q.r.$0()
return!0}if(q.dC(a))return!0
if(a.q(0,B.aS)||a.q(0,B.aR)||a.q(0,B.eV)||a.q(0,B.eW))return!0
return!1},
H(){var s,r=this,q=r.c
if(0>=q.length)return A.b(q,0)
q=A.jR(q[0].H(),!0,t.r)
s=A.pB(B.fF)
s.scL(0,B.T)
s.sa3(0,r.d.a+48)
s.sa4(0,r.d.b+r.x*36+72)
q.push(s)
return q},
A(a,b){var s
this.d=a
this.F()
s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].A(a,b)}}
A.fK.prototype={}
A.dL.prototype={
sdz(a){if(a===this.x)return
this.x=a
this.F()},
sdw(a){if(a===this.y)return
this.y=a
this.F()},
sf0(a){var s,r=this
if(a===r.z)return
r.z=a
s=r.dY()
r.e=s
r.ap(s)
r.F()},
dY(){var s,r,q,p=[]
for(s=this.z.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)p.push(s[q])
return A.nn(p,new A.ju(this),new A.jv(this),t.z)},
cb(){return A.nn(A.c(["New Game","Quit"],t.s),new A.jw(this),new A.jx(this),t.N)},
ar(a){var s,r=this
if(a.q(0,B.aT)&&r.e==null){s=r.cb()
r.e=s
r.ap(s)
return!0}s=r.e
s=s==null?null:s.ar(a)
return s==null?r.f.ar(a):s},
H(){var s=A.c([],t.k),r=this.e
r=r==null?null:r.H()
if(r!=null)B.a.K(s,r)
B.a.K(s,this.f.H())
r=this.r.c
if(0>=r.length)return A.b(r,0)
B.a.K(s,r[0].H())
return s},
A(a,b){var s,r,q,p,o=this
o.d=a
o.F()
if(o.e!=null){s=B.c.al(o.x/2)
r=B.c.al(o.y/2)
q=o.e.A(new A.Q(s,r),B.E)
o.e.A(new A.Q(s-q.b/2,r-q.c/2),B.E)}o.f.A(new A.Q(0,o.y-36),b)
s=o.r
p=s.A(B.m,b)
s.A(new A.Q(o.x-p.b,0),b)
return new A.aY(a,o.x,o.y)}}
A.jv.prototype={
$1(a){var s=this.a,r=s.e
r.toString
s.aD(r)
s.e=null
s.z.b.Y(0,a)
s.z=null},
$S:5}
A.ju.prototype={
$0(){var s,r=this.a
r.z.b.Y(0,null)
s=r.e
s.toString
r.aD(s)
r.e=null},
$S:0}
A.jx.prototype={
$1(a){var s,r,q,p,o,n,m
A.ae(a)
if(a==="New Game"){$.aS.ae().rx=!0
$.aS.ae().cM()
s=$.aS.ae()
r=$.eS()
q=t.t
p=t.ku
q=new A.ji(new A.j0(B.n,new A.jD(B.n)),A.c([new A.au(B.a7,r.I()<=0.6,1),new A.au(B.C,r.I()<=0.4,2),new A.au(B.C,r.I()<=0.4,3),new A.au(B.C,r.I()<=0.4,4),new A.au(B.B,r.I()<=0.2,5),new A.au(B.B,r.I()<=0.2,6),new A.au(B.B,r.I()<=0.2,7),new A.au(B.D,r.I()<=0.1,8),new A.au(B.D,r.I()<=0.1,9),new A.au(B.D,r.I()<=0.1,10),new A.au(B.R,!1,11)],t.lR),A.c([2,4,4,4,6,6,6,10,10,10,12],q),A.c([A.b8(r,10,25),A.b8(r,115,125),A.b8(r,115,125),A.b8(r,115,125),A.b8(r,125,135),A.b8(r,125,135),A.b8(r,125,135),A.b8(r,135,145),A.b8(r,135,145),A.b8(r,135,145),A.b8(r,170,200)],q),A.c([A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p)],t.fu),A.c([0,0,0,0,0,0,0,0,0,0,0],q),A.ab(t.ee,t.gN))
q.e7()
q.e5()
p=A.mQ()
r=A.c([],t.I)
o=A.pl(B.aq,t.b,t.R)
n=A.c([],t.d)
n=q.cc(A.m1(null,new A.cd(20,20,0,0,0,0,0,new A.cR(r,o),p,A.c([],t.Q),n,new A.cS("J")),0,null,!1,!0,new A.O(0,4,1,1,null)))
m=new A.c5(n.a(),n.$ti.i("c5<1>"))
m.n()
m.n()
n=new A.kB(m.gp(m),m)
s.x1=n
n=s.ry=A.dk(n,"worldWrapper").a
p=n.e
n=n.d
if(!(n<p.length))return A.b(p,n)
n=A.ln(p[n])
p=s.ry
o=p.e
p=p.d
if(!(p<o.length))return A.b(o,p)
s.cV(n,o[p])
p=s.ry
o=p.a
n=p.e
p=p.d
if(!(p<n.length))return A.b(n,p)
s.cB(o,A.ln(n[p]))
p=s.gas()
n=s.ry
p.b=n.a.c
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
p.d0(n.c)
p.cW()
s=s.ry
n=s.e
s=s.d
if(!(s<n.length))return A.b(n,s)
p.e=A.ln(n[s])}else if(a==="Quit"){$.aS.ae().rx=!0
$.aS.ae().cM()}s=this.a
r=s.e
r.toString
s.aD(r)
s.e=null},
$S:38}
A.jw.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.aD(r)
s.e=null},
$S:0}
A.fw.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.fw&&b.a===this.a&&b.b===this.b},
gv(a){return A.cv(this.a,this.b,B.x,B.x)}}
A.f6.prototype={
seX(a){var s,r=this
if(J.a_(a,r.e))return
r.aD(r.f)
r.e=a
if(a!=null){s=A.mi("HP: "+a.a+"/"+a.b)
r.f=s
r.ap(s)}r.F()},
H(){var s,r,q,p,o,n,m=this
if(m.e==null)return A.c([],t.k)
s=B.c.u(m.r.b/24)+1
r=A.c([],t.k)
for(q=t.e.i("W.T"),p=0;p<s;++p){o=new A.O(11,13,-1,-1,null)
n=B.ap.h(0,q.a(900))
n.toString
o.x=n
n=m.d
o.d=n.a+p*24
o.e=n.b
r.push(o)}q=m.f
q=q==null?null:q.H()
if(q!=null)B.a.K(r,q)
return r},
A(a,b){var s,r=this
r.d=a
r.F()
if(r.e==null)return B.ar
s=r.f
if(s!=null)s.A(a.C(0,new A.Q(24,0)),b)
return r.r=new A.aY(a,t.bC.a(r.a).x,36)}}
A.ha.prototype={
cF(a){var s,r,q,p=this.f
B.a.l(p,a)
s=this.e
r=A.mi(a)
r.sfi(0.5)
r=A.mf(4,r,4,4,4)
q=s.c
A.Z(q).c.a(r)
if(!!q.fixed$length)A.S(A.C("insert"))
q.splice(0,0,r)
r.a=s
s.F()
if(p.length>50){B.a.bJ(p,0)
if(0>=q.length)return A.b(q,-1)
q.pop().a=null
s.F()}this.F()},
H(){var s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].H()},
A(a,b){var s
this.d=a
this.F()
s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].A(a,new A.bN(0,0,288,b.d))}}
A.bN.prototype={
gv(a){var s=this
return A.cv(s.a,s.b,s.c,s.d)},
q(a,b){var s=this
if(b==null)return!1
return b instanceof A.bN&&b.a==s.a&&b.c==s.c&&b.b==s.b&&b.d==s.d}}
A.fq.prototype={
eC(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.b,a4=a3.a8(a3.e),a5=a2.c,a6=a5.T("a_color",t.C)
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
a5.a_(a7,"a_color",a6)}}
A.hF.prototype={}
A.hH.prototype={}
A.lh.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:16}
A.hj.prototype={
at(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.e){m=n.b
l=B.c.u(m.d/24)
if(l===q){m=B.c.u(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.kB.prototype={}
A.ji.prototype={
cc(a){var s=this
return A.qy(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5
return function $async$cc(a6,a7){if(a6===1){o=a7
q=p}while(true)switch(q){case 0:a5=A.fC(B.O)
a5.e=9
n=A.fC(new A.eW(B.aB,50))
m=r.c.x
m.eP(a5,B.t)
B.a.l(m.a,n)
l=A.c([],t.fF)
k=new A.hH(r,l)
m=s.a,j=s.b,i=s.e,h=0
case 2:if(!(h<10)){q=4
break}g=A.qS(m.dh(j[h]))
B.a.l(l,g)
f=i[h]
for(e=f.length,d=g.a,c=0;c<f.length;f.length===e||(0,A.A)(f),++c){b=A.r0(f[c])
a0=A.rg(g,b)
a1=b.b
a2=a0.a
a3=a1.a
a4=a3==null
if(!a4)a3.a=!0
a1.d=a2*24
a2=a0.b
if(!a4)a3.a=!0
a1.e=a2*36
B.a.l(d,b)}q=5
return k
case 5:case 3:++h
q=2
break
case 4:return A.pM()
case 1:return A.pN(o)}}},t.l7)},
e7(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.d,r=t.ee,q=this.e,p=this.b,o=0;o<10;++o){n=q[o]
m=p[o]
l=$.on()
k=A.Z(l)
j=k.i("aN<1>")
i=A.jR(new A.aN(l,k.i("D(1)").a(new A.jj(m.a)),j),!0,j.i("j.E"))
for(h=0;h<s[o];){g=A.qh($.eS(),i,r)
B.a.l(n,g)
h+=g.d}}},
e5(){var s,r,q,p,o,n,m,l,k,j,i=this,h=new A.cd(1,1,1,0,0,0,0,new A.cR(A.c([],t.I),A.ab(t.b,t.R)),A.mQ(),A.c([],t.Q),A.c([],t.d),new A.cS(""))
for(s=i.f,r=i.c,q=i.e,p=0;p<10;++p){o=q[p]
for(n=0,m=0;m<o.length;++m){l=i.e6(o[m])
k=l.a
for(j=l.x.b.h(0,B.t)!=null;k>0;){n+=(j?l.d9(h,$.eS(),!0):l.d4(h,$.eS(),!0)).c
k-=r[p]}}B.a.j(s,p,n)}},
e6(a){var s,r,q,p,o,n=this.r
if(n.h(0,a)!=null){n=n.h(0,a)
n.toString
return n}s=a.d
r=A.c([],t.I)
q=A.nc(B.aq,t.b,t.R)
p=new A.cd(s,s,1,0,0,0,0,new A.cR(r,q),a.c,A.c([],t.Q),A.c([],t.d),new A.cS(a.a))
for(s=J.an(a.r.$0());s.n();){o=s.gp(s)
switch(o.gbX()){case B.at:q.h(0,B.F)
q.j(0,B.F,o)
break
case B.au:q.h(0,B.t)
q.j(0,B.t,o)
break
case B.av:q.h(0,B.G)
q.j(0,B.G,o)
break
default:B.a.l(r,o)}}n.j(0,a,p)
return p}}
A.jj.prototype={
$1(a){return B.a.M(t.ee.a(a).x,this.a)},
$S:40}
A.f8.prototype={
bV(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.a5(a,a0,A.bg(a*a0,B.j,!1,t.ns),t.ba)
c.a=b
s=new A.ja(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.C()
if(typeof m!=="number")return A.cH(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.cH(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.cH(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.cH(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.cH(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.cH(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.cH(f)
e=n+m+k+i+h+g+l+f
if(J.a_(s.$2(q,o),1))if(e<4)a1.J(0,B.j,q,o)
else a1.J(0,B.b,q,o)
else if(e>5)a1.J(0,B.b,q,o)
else a1.J(0,B.j,q,o)}d=c.a
c.a=a1}}}
A.ja.prototype={
$2(a,b){return J.a_(this.a.a.a9(0,a,b),B.b)?0:1},
$S:41}
A.jz.prototype={
bN(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.cM.a(b0)
s=t.q
r=A.c([],s)
q=new A.jA(a9)
for(p=J.an(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.dg()
if(n>=1)B.a.l(r,o)}if(r.length===0)return
m=A.c([],t.oe)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.A)(r),++j){i=r[j]
h=A.c([],k)
g=i.a
f=i.b
if(o.h(0,new A.i(g+1,f))===B.b)B.a.l(h,B.p)
if(o.h(0,new A.i(g+-1,f))===B.b)B.a.l(h,B.r)
if(o.h(0,new A.i(g,f+1))===B.b)B.a.l(h,B.q)
if(o.h(0,new A.i(g,f+-1))===B.b)B.a.l(h,B.o)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.A)(h),++e){d=h[e]
c=A.a9(i,d)
b=A.c([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.b)break
a2=A.p4(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.a9(a,a2[0]))!==B.j){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.a9(a,a2[1]))===B.j}else a1=!0
if(a1)break
a=A.a9(a,d)
B.a.l(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.j&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.a9(a,A.p5(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.l(m,new A.ef(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.ab(t.v,t.fH)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.A)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.M(l,n))continue
if(a4.aS(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.j(0,n,a5)}else a4.j(0,n,a5)}for(s=a4.gbP(a4),s=s.gw(s),n=this.a,l=a9.e,k=a8.b;s.n();){g=s.gp(s)
f=g.d
a0=p.h(0,a8)
a0.toString
B.a.l(a0,f)
a0=p.h(0,f)
a0.toString
B.a.l(a0,a8)
for(g=g.c,a0=g.length,j=0;a1=g.length,j<a1;g.length===a0||(0,A.A)(g),++j)o.j(0,g[j],B.j)
a0=n.G(a1)
if(!(a0>=0&&a0<g.length))return A.b(g,a0)
a7=g[a0]
l.j(0,a7,B.P)
B.a.l(k,a7)
B.a.l(f.b,a7)}for(s=a4.gbP(a4),s=s.gw(s);s.n();)this.bN(s.gp(s).d,a9,b0,b1)}}
A.jA.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.C(0,new A.i(1,0)))===B.b?1:0
if(s.h(0,a.C(0,new A.i(-1,0)))===B.b)++r
if(s.h(0,a.C(0,new A.i(0,-1)))===B.b)++r
return s.h(0,a.C(0,new A.i(1,1)))===B.b?r+1:r},
$S:42}
A.j7.prototype={
dj(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.J(0,o.I()>0.45?B.j:B.b,n,m)
p.J(0,B.aw,n,m)}new A.f8(a7).bV(3)
for(p=q-1,l=0;l<r;++l){s.J(0,B.b,l,0)
s.J(0,B.b,l,p)}for(o=r-1,k=0;k<q;++k){s.J(0,B.b,0,k)
s.J(0,B.b,o,k)}j=new A.j8(a7)
i=new A.j9(a7)
for(l=1;l<o;l=g)for(h=l-1,g=l+1,k=1;k<p;++k){if(!j.$2(l,k))continue
f=i.$2(g,k)
e=i.$2(h,k)
d=k+1
c=i.$2(l,d)
b=k-1
a=i.$2(l,b)
if(f&&e&&c&&a){s.J(0,B.b,l,k)
continue}if(j.$2(h,d)&&c&&e){s.J(0,B.b,l,k)
continue}if(j.$2(g,d)&&c&&f){s.J(0,B.b,l,k)
continue}if(j.$2(g,b)&&a&&f){s.J(0,B.b,l,k)
continue}if(j.$2(h,b)&&a&&e){s.J(0,B.b,l,k)
continue}}p=t.j
o=A.jP(p)
a0=new A.fu(a7,A.c([],t.do),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.i(l,k)
if(o.M(0,a1)||s.h(0,a1)===B.b)continue
a0.cT(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.A)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gw(a3);d.n();)s.j(0,d.gp(d),B.b)
else B.a.l(o,new A.a3(a3,A.c([],h),A.c([],h),A.jn(a3)))}a4=A.ab(p,t.v)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.c,a2=0;b=o.length,a2<b;o.length===r||(0,A.A)(o),++a2){a3=o[a2]
B.a.l(p,a3)
h.j(0,a3,A.c([],d))
for(b=J.an(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.A)(o),++a2){a3=o[a2]
r=a3.a
p=J.az(r)
if(p.gm(r)>a6){a6=p.gm(r)
a5=a3}}this.bN(a5,a7,a4,q)
for(r=q.d6(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.A)(r),++a2){a3=r[a2]
B.a.L(o,a3)
for(p=J.an(a3.a);p.n();)s.j(0,p.gp(p),B.b)}A.oa(o,a7)}}
A.j8.prototype={
$2(a,b){return J.a_(this.a.b.a9(0,a,b),B.j)},
$S:12}
A.j9.prototype={
$2(a,b){return J.a_(this.a.b.a9(0,a,b),B.b)},
$S:12}
A.aR.prototype={}
A.hG.prototype={}
A.aQ.prototype={
U(a,b){this.$ti.c.a(a)
return this.a.U(a,b)+this.b.U(a,b)}}
A.d1.prototype={
U(a,b){this.$ti.c.a(a)
return Math.min(B.a9.U(a,b),this.b.U(a,b))}}
A.fX.prototype={
U(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=b.b,r=a.a,q=a.b,p=b.e,o=p.a,p=p.b,n=-1;n<2;++n)for(m=r+n,l=m<o,k=-1;k<2;++k){j=q+k
if(!(m>=0&&j>=0&&l&&j<p))continue
if(s.h(0,new A.i(m,j))===B.b)return 1/0}return 0}}
A.f9.prototype={
U(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.v)return 1/0
s=A.lQ(a,B.o,b)
r=A.lQ(a,B.q,b)
q=A.lQ(a,B.p,b)
p=A.lQ(a,B.r,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.eV.prototype={
U(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.v)return 1/0
if(A.cI(a,B.o,b)+A.cI(a,B.q,b)+A.cI(a,B.p,b)+A.cI(a,B.r,b)===1)return 1
return 1/0}}
A.fh.prototype={
U(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.v)return 1/0
if(A.cI(a,B.o,b)+A.cI(a,B.q,b)+A.cI(a,B.p,b)+A.cI(a,B.r,b)===2)return 1
return 1/0}}
A.du.prototype={
U(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.v)return 1/0
s=A.a9(a,B.o)
r=A.a9(a,B.q)
q=A.a9(a,B.p)
p=A.a9(a,B.r)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.d0.prototype={
U(a,b){var s,r,q,p,o,n,m,l,k,j,i
for(s=b.e,r=a.a,q=a.b,p=this.a,o=s.a,n=s.b,m=-2;m<4;++m)for(l=r+m,k=l<o,j=-2;j<4;++j){i=q+j
if(!(l>=0&&i>=0&&k&&i<n))continue
if(s.h(0,new A.i(l,i))===p)return 1/0}return 0}}
A.cz.prototype={
d7(a,b){return this.c.$2(a,b)},
gbG(){return this.a},
gbr(a){return this.b},
gbD(){return this.c}}
A.lI.prototype={
$2(a,b){b.e.j(0,a,B.ch)},
$S:1}
A.lB.prototype={
$2(a,b){b.e.j(0,a,B.fO)},
$S:1}
A.lF.prototype={
$2(a,b){b.e.j(0,a,B.a6)},
$S:1}
A.lA.prototype={
$2(a,b){b.e.j(0,a,B.a6)},
$S:1}
A.lC.prototype={
$2(a,b){b.e.j(0,a,B.ay)},
$S:1}
A.lG.prototype={
$2(a,b){b.e.j(0,a,B.fP)
b.f.j(0,a,B.fb)},
$S:1}
A.lH.prototype={
$2(a,b){b.e.j(0,a,B.fN)},
$S:1}
A.lE.prototype={
$2(a,b){b.e.j(0,a,B.ax)},
$S:1}
A.lD.prototype={
$2(a,b){b.e.j(0,a,B.ax)},
$S:1}
A.lz.prototype={
$2(a,b){b.e.j(0,a,B.az)},
$S:1}
A.b6.prototype={}
A.iB.prototype={
gbr(a){var s=this.a
return s.gbr(s)},
gbD(){return this.a.gbD()},
gbG(){return this.a.gbG()},
k(a){return"Unique("+this.a.k(0)+")"},
$icz:1,
d7(a,b){return this.gbD().$2(a,b)}}
A.lP.prototype={
$2(a,b){var s=t.n4
return B.c.R(s.a(a).b,s.a(b).b)},
$S:45}
A.lO.prototype={
$2(a,b){var s=t.v
s.a(a)
s.a(b)
return J.ao(a.a)-J.ao(b.a)},
$S:64}
A.dM.prototype={}
A.j0.prototype={
dh(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=4000,a=new A.a5(100,40,A.bg(b,B.j,!1,t.ns),t.ba),a0=A.bg(b,0,!1,t.i),a1=A.bg(b,B.aw,!1,t.dt),a2=new A.a5(100,40,A.bg(b,B.v,!1,t.dy),t.eN),a3=t.c,a4=new A.dM(a5,a,new A.a5(100,40,a0,t.de),new A.a5(100,40,a1,t.f5),a2,new A.a5(100,40,A.bg(b,B.b0,!1,t.gM),t.eT),new A.a5(100,40,A.bg(b,null,!1,t.R),t.oQ),new A.jm(A.c([],a3),A.ab(t.v,t.mw)),A.c([],a3))
if(a5.b)this.eN(a4)
a0=a5.a
switch(a0.a){case 1:case 2:new A.j7(B.n).dj(a4)
break
case 3:case 4:new A.kh(A.jP(t.j),B.n).dm(a4)
break
case 6:case 0:case 5:new A.ko(B.n).dk(a4)
break}s=new Float32Array(4000)
new A.k7().dl(s,100,40)
r=new A.a5(100,40,A.mc(b,new A.j2(),t.W),t.U)
for(q=0;q<100;++q)for(a1=q!==0,a3=q!==99,p=0;p<40;++p)if(!a1||!a3||p===0||p===39){a.J(0,B.b,q,p)
a2.J(0,B.v,q,p)}a1=a4.y
this.b.di(a1,a4,a5.c)
for(a3=a4.c,o=this.a,n=a4.d,m=a4.r,a0=a0!==B.cQ,l=a4.f,q=0;q<100;++q)for(p=0;p<40;++p){k=J.a_(a.a9(0,q,p),B.j)
j=a.a9(0,q,p)
j.toString
i=new A.i(q,p)
o.I()
h=r.h(0,i)
g=n.h(0,i)
f=a2.h(0,i)
h.b=i
h.c=j
h.sfh(n.h(0,i))
j=p*100+q
if(!(j<4000))return A.b(s,j)
e=s[j]
d=m.a9(0,q,p)
if(J.a_(a3.h(0,i),1)){h.r=B.eY
h.c=B.j}else if(f!==B.v)switch(f.a){case 0:if(l.h(0,i)===B.b_)h.f=B.K
else h.f=B.y
break
case 2:h.f=B.M
break
case 3:break
case 4:h.f=B.a1
break
case 5:h.f=B.a0
break
case 1:h.f=B.L
break
case 6:h.f=B.Y
if(d!=null)B.a.l(h.e,d)
break
case 7:h.f=B.W
break
case 8:h.f=B.H
break
case 9:h.f=B.V
break
case 10:h.f=B.Z
break
case 11:h.f=B.a_
break}else if(k&&e<0.42&&g!==B.a5&&a0)h.f=B.L
if(d!=null)B.a.l(h.e,d)}a=J.an(B.a.eS(a1,new A.j3(),new A.j4(a4)).a)
while(!0){if(!a.n()){c=!1
break}a0=a.gp(a)
if(A.q9(a2.h(0,a0))){r.h(0,a0).f=B.I
c=!0
break}}if(!c)throw A.d(A.ah(""))
return new A.jU(r,a5)},
eN(a){var s,r,q=this.a,p=a.b,o=p.b,n=q.G(o-1)+1,m=n>o/2?-1:1,l=new A.j1(a)
for(p=p.a,s=n,r=0;r<p;++r){l.$1(new A.i(r,s))
l.$1(new A.i(r,s+1))
l.$1(new A.i(r,s-1))
s+=q.f2()?m:0}}}
A.j2.prototype={
$1(a){var s=A.c([],t.I)
return new A.c_(B.u,B.j,s)},
$S:16}
A.j3.prototype={
$1(a){return t.v.a(a).e},
$S:47}
A.j4.prototype={
$0(){return B.a.geR(this.a.y)},
$S:48}
A.j1.prototype={
$1(a){var s=this.a,r=s.b
if(r.cU(a)){r.j(0,a,B.j)
s.c.j(0,a,1)}},
$S:49}
A.ef.prototype={
gm(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.jm.prototype={
d6(){var s,r,q,p,o,n=A.c([],t.c)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.l(n,o)}return n}}
A.a3.prototype={
k(a){return"Room{"+J.ao(this.a)+"; "+this.d.k(0)+"}"}}
A.fu.prototype={
cT(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.c([a],k),i=A.c([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.M(0,o))continue
q.l(0,o)
B.a.l(i,o)
for(n=0;n<8;++n){m=A.a9(o,B.an[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.M(0,m)&&k.h(0,m)===B.j)B.a.l(j,m)}}B.a.l(this.b,i)}}
A.fD.prototype={
cE(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.a0)s=B.aO
else if(a instanceof A.a2)s=B.aM
else s=a instanceof A.av?B.aN:B.aP
B.a.l(r.a,a)
B.a.l(r.b,s)
B.a.l(r.c,b)
r.d+=b},
cD(a){return this.cE(a,10)},
f7(a){var s,r,q,p={},o=p.a=0,n=A.mc(this.c.length,new A.jI(p,this),t.i),m=a.I()
for(s=n.length,r=m>-1;o<s;++o){q=n[o]
if(r&&m<=q){s=this.a
if(!(o<s.length))return A.b(s,o)
return A.fC(s[o])}}throw A.d(A.ah(""))},
dv(a){var s,r,q=B.a.eZ(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
du(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p===0)return
B.a.j(r,q,p-2)
this.d-=2}}}
A.jI.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.b(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:51}
A.k3.prototype={}
A.jD.prototype={
di(a,b,c){var s,r,q
t.mw.a(a)
s=new A.fD(A.c([],t.hf),A.c([],t.lB),A.c([],t.t))
r=s.geF()
new A.aN(B.f6,t.ei.a(new A.jE()),t.kL).D(0,r)
new A.aN(B.f7,t.eU.a(new A.jF()),t.eo).D(0,r)
new A.aN(B.f8,t.hZ.a(new A.jG()),t.au).D(0,r)
new A.aN(B.eZ,t.g9.a(new A.jH()),t.b1).D(0,r)
s.cD(B.aI)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.A)(a),++q)this.e0(s,a[q],b)},
e0(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.az(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.u
break}r=j.length
if(r!==0){r=l.G(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.G(k.gm(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.ay||q===B.v
else r=!1
if(r)break;++i}if(s.q(0,B.u))return
p=a.f7(l)
n=p.b
if(!J.a_(n,B.aI)){a.dv(n)
a.du(p.c)
o.j(0,s,p)}}}
A.jE.prototype={
$1(a){return t.bB.a(a).b<=1000},
$S:52}
A.jF.prototype={
$1(a){return t.li.a(a).f<=1000},
$S:53}
A.jG.prototype={
$1(a){return t.kB.a(a).r<=1000},
$S:54}
A.jH.prototype={
$1(a){return t.lE.a(a).c<=1000},
$S:55}
A.k7.prototype={
ad(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
dl(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
for(s=0;s<b0;++s)for(r=s*0.1,q=0;q<b1;++q){p=q*b0+s
o=q*0.1
n=B.c.ag(r)&255
m=B.c.ag(o)&255
l=B.c.ag(0.3)&255
k=r-Math.floor(r)
j=o-Math.floor(o)
i=0.3-Math.floor(0.3)
h=k*k*k*(k*(k*6-15)+10)
g=j*j*j*(j*(j*6-15)+10)
o=$.oy()
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
c=a8.ad(0,o[d],k,j,i)
if(!(a0<f))return A.b(o,a0)
a2=k-1
c+=h*(a8.ad(0,o[a0],a2,j,i)-c)
if(!(b<f))return A.b(o,b)
a3=j-1
a4=a8.ad(0,o[b],k,a3,i)
if(!(a1<f))return A.b(o,a1)
c+=g*(a4+h*(a8.ad(0,o[a1],a2,a3,i)-a4)-c)
a4=d+1
if(!(a4<f))return A.b(o,a4)
a5=i-1
a4=a8.ad(0,o[a4],k,j,a5)
a6=a0+1
if(!(a6<f))return A.b(o,a6)
a4+=h*(a8.ad(0,o[a6],a2,j,a5)-a4)
a6=b+1
if(!(a6<f))return A.b(o,a6)
a6=a8.ad(0,o[a6],k,a3,a5)
a7=a1+1
if(!(a7<f))return A.b(o,a7)
a5=a8.ad(0,o[a7],a2,a3,a5)
if(!(p<4000))return A.b(a9,p)
a9[p]=(c+i*i*i*(i*(i*6-15)+10)*(a4+g*(a6+h*(a5-a6)-a4)-c)+1)/2}}}
A.bU.prototype={
k(a){return"RuinOrientation."+this.b}}
A.e7.prototype={
k(a){return"RoomSizeKind."+this.b}}
A.kh.prototype={
dm(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.G(5)
if(!(a3>=0&&a3<5))return A.b(B.aV,a3)
s=B.aV[a3]
r=a1.bW(B.fz)
q=a1.ea(s)
p=A.p6(a1.cP(a4,r,new A.i(B.c.u(Math.max(1,q.a-r.a/2)),B.c.u(Math.max(1,q.b-A.cw(r)/2)))))
a3=a4.y
B.a.l(a3,p)
for(o=t.q,n=0;n<2000;){m=new A.i(a2.G(98)+1,a2.G(38)+1)
l=[B.as,B.as,B.as,B.fy]
k=a2.G(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a1.bW(l[k])
if(!a1.fd(a4,r,m)){l=a1.cP(a4,r,m)
B.a.l(a3,new A.a3(l,A.c([],o),A.c([],o),A.jn(l)))}else ++n}for(a2=a1.b,o=a4.d,l=a4.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.i(j,i)
o.J(0,B.a5,j,i)
if(!a2.M(0,h))l.j(0,h,B.b)}g=A.ab(t.j,t.v)
for(a2=a3.length,k=a4.x,f=k.a,e=k.b,d=t.c,c=0;c<a3.length;a3.length===a2||(0,A.A)(a3),++c){b=a3[c]
B.a.l(f,b)
e.j(0,b,A.c([],d))
for(a=J.an(b.a);a.n();)g.j(0,a.gp(a),b)}a1.bN(p,a4,g,k)
for(a2=k.d6(),k=a2.length,c=0;c<a2.length;a2.length===k||(0,A.A)(a2),++c){b=a2[c]
B.a.L(a3,b)
for(f=J.an(b.a);f.n();)l.j(0,f.gp(f),B.b)}A.oa(a3,a4)
for(a2=o.c,a0=0;a0<4000;++a0)B.a.j(a2,a0,B.a5)},
bW(a){var s
switch(a.a){case 0:s=this.a
return new A.e6(s.G(5)+5,s.G(5)+5)
case 1:s=this.a
return new A.e6(s.G(10)+9,s.G(10)+9)
case 2:s=this.a
return new A.e6(s.G(10)+20,s.G(10)+20)}},
ea(a){switch(a.a){case 0:return new A.i(50,10)
case 1:return new A.i(50,30)
case 2:return new A.i(75,20)
case 3:return new A.i(25,20)
case 4:return new A.i(50,20)}},
cP(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.c([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.i(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.l(0,d)
r.j(0,d,f?B.b:B.j)
if(!f)B.a.l(a,d)}return a},
fd(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.i(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.b||n.M(0,i))return!0}return!1}}
A.e6.prototype={}
A.ko.prototype={
e8(a){var s,r,q=a.a.a===B.a7?B.aw:B.fM
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
dk(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.e8(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.I()>0.6)r.j(0,new A.i(q,p),B.b)
new A.f8(b8).bV(10)
o=A.jP(t.j)
n=new A.fu(b8,A.c([],t.do),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.i(k,j)
if(o.M(0,i)||r.h(0,i)===B.b)continue
n.cT(i)}o=n.b
B.a.b0(o,new A.kp())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.A)(h),++f)r.j(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.j(e,q,B.fQ)
B.a.j(o,q,B.j)}$label0$1:for(o=b8.y,e=t.q,d=b8.d,c=0;c<3;){b=s.G(3)+5
a=s.G(3)+5
q=s.G(100-b)
p=s.G(40-a)
for(a0=q-1,a1=q+b,a2=a1+1,a3=p-1,a4=p+a,a5=a4+1;a0<a2;++a0)for(a6=a0>=0,a7=a0<m,a8=a3;a8<a5;++a8){i=new A.i(a0,a8)
if(!(a6&&a8>=0&&a7&&a8<l))continue $label0$1
if(g.h(0,i)!==B.v||r.h(0,i)!==B.j)continue $label0$1}a9=A.c([],e)
b0=A.c([],e)
for(a2=a1-1,a5=a4-1,a0=q;a0<a1;++a0)for(a6=a0-q!==0,a7=a0!==a2,a3=p;a3<a4;++a3){i=new A.i(a0,a3)
if(!a6||!a7||a3-p===0||a3===a5){r.j(0,i,B.b)
B.a.l(a9,i)}else B.a.l(b0,i)
d.j(0,i,B.a5)}b1=new A.kq(b8)
B.a.bU(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.u
break}b3=a9[f]
b4=A.a9(b3,B.o)
b5=A.a9(b3,B.q)
b6=A.a9(b3,B.r)
b7=A.a9(b3,B.p)
if(A.P(b1.$1(b4))&&A.P(b1.$1(b5))){b2=b3
break}if(A.P(b1.$1(b6))&&A.P(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.A)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.j)
g.j(0,b2,B.P)
B.a.l(o,new A.a3(b0,A.c([],e),A.c([],e),A.jn(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.A)(o),++f)A.dr(o[f],$.m0(),b8)}}
A.kp.prototype={
$2(a,b){var s=t.i8
s.a(a)
return J.ao(s.a(b))-J.ao(a)},
$S:56}
A.kq.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.j&&s.e.h(0,a)===B.v},
$S:57}
A.ky.prototype={
dM(a){var s=t.jV.a(new A.kz(this))
t.Z.a(null)
A.em(a,"keydown",s,!1,t.mT)
A.em(a,"mousemove",t.b9.a(new A.kA(this)),!1,t.gD)}}
A.kz.prototype={
$1(a){var s,r,q,p,o
t.mT.a(a)
s=a.key
if(s==null)s=""
r=a.metaKey
q=a.ctrlKey
p=new A.aF(s,r,a.shiftKey,q)
s=this.a
r=s.a
r=r==null?null:r.c.ar(p)
if(r===!0){a.preventDefault()
return}o=$.oB().h(0,p)
if(o!=null){a.preventDefault()
s.b.l(0,o)
return}},
$S:58}
A.kA.prototype={
$1(a){var s,r
t.gD.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
this.a.c.l(0,A.c([s,r],t.n))},
$S:59}
A.aF.prototype={
q(a,b){var s=this
if(b==null)return!1
return b instanceof A.aF&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gv(a){var s=this
return A.cv(s.a,s.b,s.c,s.d)}}
A.a6.prototype={
k(a){return"InputCommand."+this.b}};(function aliases(){var s=J.a.prototype
s.dD=s.k
s=J.cm.prototype
s.dE=s.k
s=A.aE.prototype
s.dF=s.cX
s.dG=s.cY
s.dI=s.d_
s.dH=s.cZ
s=A.ar.prototype
s.dC=s.ar})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_1u
s(J.t.prototype,"geD","l",18)
r(A,"qx","pb",17)
r(A,"qN","pI",7)
r(A,"qO","pJ",7)
r(A,"qP","pK",7)
q(A,"nY","qH",0)
p(A,"qR","qB",10)
q(A,"qQ","qA",0)
o(A.di.prototype,"geL",1,0,null,["$1","$0"],["Y","aQ"],30,0,0)
n(A.G.prototype,"gdW","P",10)
p(A,"qV","qf",62)
r(A,"qW","qg",17)
var l
m(l=A.fy.prototype,"geU","by",29)
m(l,"gcq","ee",14)
p(A,"rl","qG",63)
s(A.eb.prototype,"gfa","L",36)
o(A.fD.prototype,"geF",0,1,null,["$2","$1"],["cE","cD"],50,0,0)
p(A,"rr","qY",46)
r(A,"o6","rk",43)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.m9,J.a,J.dx,A.L,A.ki,A.j,A.by,A.U,A.as,A.cP,A.ce,A.kt,A.k5,A.dJ,A.ey,A.z,A.jN,A.dV,A.kJ,A.b4,A.hY,A.eF,A.eE,A.eh,A.dh,A.c5,A.dz,A.de,A.cD,A.G,A.hJ,A.cx,A.bC,A.ez,A.hK,A.ei,A.hP,A.c4,A.io,A.eJ,A.eK,A.i4,A.ep,A.l,A.e9,A.cg,A.ag,A.kK,A.h0,A.ec,A.hV,A.cW,A.Y,A.ir,A.hm,A.jd,A.m5,A.r,A.dK,A.kC,A.k4,A.i1,A.d7,A.j5,A.fA,A.cE,A.f,A.a5,A.Q,A.cJ,A.iR,A.iQ,A.ad,A.aq,A.bd,A.bT,A.j6,A.fy,A.eW,A.aT,A.jb,A.a0,A.jY,A.bO,A.a2,A.dw,A.av,A.ap,A.eT,A.cd,A.cM,A.cS,A.cR,A.fg,A.au,A.c_,A.fI,A.fJ,A.i,A.jU,A.jZ,A.aw,A.jo,A.fo,A.a4,A.bL,A.J,A.jq,A.iv,A.kx,A.kc,A.d5,A.bf,A.bz,A.k6,A.fk,A.R,A.x,A.hL,A.iA,A.jB,A.kf,A.fW,A.hg,A.O,A.m,A.jW,A.h7,A.l5,A.aY,A.ar,A.fK,A.fw,A.bN,A.hH,A.hj,A.kB,A.ji,A.f8,A.jz,A.aR,A.cz,A.b6,A.iB,A.dM,A.j0,A.ef,A.jm,A.a3,A.fu,A.fD,A.k3,A.jD,A.k7,A.e6,A.ko,A.ky,A.aF])
q(J.a,[J.dQ,J.dS,J.cm,J.t,J.cV,J.cl,A.fP,A.cu,A.e,A.iS,A.f3,A.bt,A.I,A.hO,A.b0,A.jg,A.bR,A.hQ,A.dH,A.hS,A.jh,A.k,A.hW,A.aC,A.jC,A.i_,A.jS,A.jX,A.i5,A.i6,A.aG,A.i7,A.i9,A.aI,A.id,A.ih,A.aJ,A.ii,A.aK,A.il,A.ai,A.it,A.kr,A.aL,A.iw,A.ks,A.kw,A.iE,A.iG,A.iI,A.iK,A.iM,A.aU,A.i2,A.aX,A.ib,A.k8,A.ip,A.aZ,A.iy,A.ba,A.eZ,A.hM,A.f7,A.fx,A.h5,A.d4,A.bD,A.hy,A.hD])
q(J.cm,[J.h3,J.da,J.bw])
r(J.jJ,J.t)
q(J.cV,[J.dR,J.fE])
q(A.L,[A.cn,A.c0,A.fF,A.hA,A.hc,A.dy,A.hU,A.fY,A.br,A.hC,A.hz,A.bB,A.ff,A.fi])
q(A.j,[A.p,A.cp,A.aN,A.dP,A.bW,A.l9])
q(A.p,[A.b3,A.dU])
q(A.b3,[A.ed,A.dY])
r(A.dI,A.cp)
q(A.U,[A.dX,A.eg])
q(A.cP,[A.dE,A.aa])
q(A.ce,[A.jy,A.fa,A.fb,A.ho,A.jL,A.lr,A.lt,A.kG,A.kF,A.lb,A.jr,A.kQ,A.kY,A.km,A.l3,A.l_,A.jV,A.kL,A.lJ,A.lK,A.iY,A.iZ,A.lq,A.jt,A.jl,A.jp,A.k1,A.iW,A.iV,A.ka,A.kj,A.lw,A.kk,A.lv,A.kv,A.jv,A.jx,A.lh,A.jj,A.jA,A.j2,A.j3,A.j1,A.jI,A.jE,A.jF,A.jG,A.jH,A.kq,A.kz,A.kA])
r(A.e2,A.c0)
q(A.ho,[A.hk,A.cN])
r(A.hI,A.dy)
r(A.dW,A.z)
r(A.aE,A.dW)
q(A.fb,[A.jK,A.ls,A.lc,A.lg,A.js,A.kR,A.jO,A.jT,A.k_,A.k0,A.kg,A.kl,A.kE,A.j_,A.ja,A.j8,A.j9,A.lI,A.lB,A.lF,A.lA,A.lC,A.lG,A.lH,A.lE,A.lD,A.lz,A.lP,A.lO,A.kp])
r(A.cZ,A.cu)
q(A.cZ,[A.er,A.et])
r(A.es,A.er)
r(A.ct,A.es)
r(A.eu,A.et)
r(A.e_,A.eu)
r(A.dZ,A.ct)
q(A.e_,[A.fQ,A.fR,A.fS,A.fT,A.fU,A.d_,A.e0])
r(A.eG,A.hU)
q(A.fa,[A.kH,A.kI,A.l7,A.l6,A.kM,A.kU,A.kS,A.kO,A.kT,A.kN,A.kX,A.kW,A.kV,A.kn,A.l4,A.l1,A.lf,A.l2,A.lT,A.lR,A.lS,A.lN,A.lL,A.lM,A.lW,A.lU,A.lV,A.lZ,A.lX,A.lY,A.lk,A.li,A.lj,A.k2,A.iX,A.kb,A.ju,A.jw,A.j4])
r(A.eB,A.dP)
q(A.de,[A.ak,A.di])
r(A.dd,A.ez)
q(A.cx,[A.eA,A.ek])
r(A.c2,A.eA)
r(A.df,A.ei)
r(A.cA,A.hP)
r(A.bj,A.c4)
r(A.ig,A.eJ)
q(A.aE,[A.l0,A.en])
r(A.ev,A.eK)
r(A.eo,A.ev)
q(A.br,[A.d3,A.fB])
q(A.e,[A.w,A.fs,A.ck,A.ax,A.ew,A.ay,A.ac,A.eC,A.hE,A.dc,A.H,A.dC,A.f0])
q(A.w,[A.a7,A.bc,A.bu])
q(A.a7,[A.q,A.n])
q(A.q,[A.eX,A.eY,A.f4,A.cb,A.fv,A.cU,A.cr,A.hd])
r(A.jc,A.bt)
r(A.cQ,A.hO)
q(A.b0,[A.je,A.jf])
r(A.hR,A.hQ)
r(A.dG,A.hR)
r(A.hT,A.hS)
r(A.fl,A.hT)
r(A.aB,A.f3)
r(A.hX,A.hW)
r(A.fr,A.hX)
r(A.i0,A.i_)
r(A.cj,A.i0)
r(A.dO,A.ck)
r(A.bi,A.k)
q(A.bi,[A.bx,A.aH])
r(A.fL,A.i5)
r(A.fM,A.i6)
r(A.i8,A.i7)
r(A.fN,A.i8)
r(A.ia,A.i9)
r(A.e1,A.ia)
r(A.ie,A.id)
r(A.h4,A.ie)
r(A.hb,A.ih)
r(A.ex,A.ew)
r(A.hh,A.ex)
r(A.ij,A.ii)
r(A.hi,A.ij)
r(A.hl,A.il)
r(A.iu,A.it)
r(A.hs,A.iu)
r(A.eD,A.eC)
r(A.ht,A.eD)
r(A.ix,A.iw)
r(A.hv,A.ix)
r(A.db,A.cr)
r(A.iF,A.iE)
r(A.hN,A.iF)
r(A.ej,A.dH)
r(A.iH,A.iG)
r(A.hZ,A.iH)
r(A.iJ,A.iI)
r(A.eq,A.iJ)
r(A.iL,A.iK)
r(A.ik,A.iL)
r(A.iN,A.iM)
r(A.is,A.iN)
r(A.cB,A.ek)
r(A.el,A.bC)
r(A.kD,A.kC)
r(A.i3,A.i2)
r(A.fG,A.i3)
r(A.ic,A.ib)
r(A.fZ,A.ic)
r(A.iq,A.ip)
r(A.hn,A.iq)
r(A.iz,A.iy)
r(A.hw,A.iz)
q(A.H,[A.bs,A.cT])
r(A.dB,A.bs)
q(A.dC,[A.ca,A.h_])
r(A.f_,A.hM)
q(A.aq,[A.bY,A.bZ,A.cO,A.bV,A.h8,A.e5,A.h9,A.bK])
r(A.W,A.f)
q(A.W,[A.cq,A.cX])
q(A.kK,[A.ea,A.bv,A.fz,A.bP,A.bQ,A.b_,A.cf,A.dv,A.cL,A.h2,A.ch,A.d8,A.fc,A.cy,A.aj,A.co,A.bb,A.jQ,A.a1,A.cY,A.cc,A.b1,A.d9,A.bU,A.e7,A.a6])
q(A.aw,[A.fm,A.fn,A.ft,A.dT,A.he,A.eb,A.hp,A.hr,A.hx,A.fq,A.hF])
q(A.a4,[A.fV,A.e4,A.aW,A.d6,A.fH,A.ee,A.dA,A.dF,A.f1,A.hB,A.e3,A.h6])
q(A.ar,[A.hq,A.fd,A.f2,A.h1,A.f5,A.e8,A.dL,A.f6,A.ha])
q(A.jz,[A.j7,A.kh])
q(A.aR,[A.hG,A.aQ,A.d1])
q(A.hG,[A.fX,A.f9,A.eV,A.fh,A.du,A.d0])
s(A.er,A.l)
s(A.es,A.as)
s(A.et,A.l)
s(A.eu,A.as)
s(A.dd,A.hK)
s(A.eK,A.e9)
s(A.hO,A.jd)
s(A.hQ,A.l)
s(A.hR,A.r)
s(A.hS,A.l)
s(A.hT,A.r)
s(A.hW,A.l)
s(A.hX,A.r)
s(A.i_,A.l)
s(A.i0,A.r)
s(A.i5,A.z)
s(A.i6,A.z)
s(A.i7,A.l)
s(A.i8,A.r)
s(A.i9,A.l)
s(A.ia,A.r)
s(A.id,A.l)
s(A.ie,A.r)
s(A.ih,A.z)
s(A.ew,A.l)
s(A.ex,A.r)
s(A.ii,A.l)
s(A.ij,A.r)
s(A.il,A.z)
s(A.it,A.l)
s(A.iu,A.r)
s(A.eC,A.l)
s(A.eD,A.r)
s(A.iw,A.l)
s(A.ix,A.r)
s(A.iE,A.l)
s(A.iF,A.r)
s(A.iG,A.l)
s(A.iH,A.r)
s(A.iI,A.l)
s(A.iJ,A.r)
s(A.iK,A.l)
s(A.iL,A.r)
s(A.iM,A.l)
s(A.iN,A.r)
s(A.i2,A.l)
s(A.i3,A.r)
s(A.ib,A.l)
s(A.ic,A.r)
s(A.ip,A.l)
s(A.iq,A.r)
s(A.iy,A.l)
s(A.iz,A.r)
s(A.hM,A.z)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",M:"double",N:"num",u:"String",D:"bool",Y:"Null",o:"List"},mangledNames:{},types:["~()","~(i,dM)","O()","bd()","o<aT>()","~(@)","~(u,@)","~(~())","Y()","~(k)","~(v,b5)","~(bL)","D(h,h)","Y(@)","~(ag)","Y(bD)","c_(h)","h(v?)","~(v?)","Y(~())","~(u,u)","Y(v,b5)","@(@,@)","~(ba)","~(bR)","D(aT)","D(v?)","@(@)","@(@,u)","at<~>(a6)","~([v?])","D(m4)","~(h,@)","Y(@,b5)","~(hu)","at<~>(k)","~(O)","G<@>(@)","~(u)","D(@)","D(bT)","h(h,h)","h(i)","~(N)","@(u)","h(b6,b6)","h(v?,v?)","D(a3)","a3()","~(i)","~(v[h])","M(h)","D(a0)","D(a2)","D(av)","D(ap)","h(o<i>,o<i>)","D(i)","~(bx)","~(aH)","~(@,@)","~(v?,v?)","D(v?,v?)","h(O,O)","h(a3,a3)","~(o<M>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.q1(v.typeUniverse,JSON.parse('{"h3":"cm","da":"cm","bw":"cm","rt":"k","rM":"k","rv":"H","rA":"bs","rs":"n","rN":"n","ru":"e","rY":"e","t0":"e","rx":"q","t1":"w","rL":"w","rO":"bu","t_":"aH","te":"ac","rz":"bi","ry":"bc","t3":"bc","rQ":"ck","rP":"cj","rB":"I","rD":"ai","rw":"cr","rX":"ct","rW":"cu","dQ":{"D":[]},"dS":{"Y":[]},"t":{"o":["1"],"p":["1"],"j":["1"]},"jJ":{"t":["1"],"o":["1"],"p":["1"],"j":["1"]},"dx":{"U":["1"]},"cV":{"M":[],"N":[],"af":["N"]},"dR":{"M":[],"h":[],"N":[],"af":["N"]},"fE":{"M":[],"N":[],"af":["N"]},"cl":{"u":[],"af":["u"],"nh":[]},"cn":{"L":[]},"p":{"j":["1"]},"b3":{"p":["1"],"j":["1"]},"ed":{"b3":["1"],"p":["1"],"j":["1"],"j.E":"1","b3.E":"1"},"by":{"U":["1"]},"cp":{"j":["2"],"j.E":"2"},"dI":{"cp":["1","2"],"p":["2"],"j":["2"],"j.E":"2"},"dX":{"U":["2"]},"dY":{"b3":["2"],"p":["2"],"j":["2"],"j.E":"2","b3.E":"2"},"aN":{"j":["1"],"j.E":"1"},"eg":{"U":["1"]},"cP":{"X":["1","2"]},"dE":{"cP":["1","2"],"X":["1","2"]},"aa":{"cP":["1","2"],"X":["1","2"]},"e2":{"c0":[],"L":[]},"fF":{"L":[]},"hA":{"L":[]},"ey":{"b5":[]},"ce":{"ci":[]},"fa":{"ci":[]},"fb":{"ci":[]},"ho":{"ci":[]},"hk":{"ci":[]},"cN":{"ci":[]},"hc":{"L":[]},"hI":{"L":[]},"aE":{"z":["1","2"],"jM":["1","2"],"X":["1","2"],"z.K":"1","z.V":"2"},"dU":{"p":["1"],"j":["1"],"j.E":"1"},"dV":{"U":["1"]},"fP":{"n_":[]},"cu":{"aM":[]},"cZ":{"y":["1"],"aM":[]},"ct":{"l":["M"],"y":["M"],"o":["M"],"p":["M"],"aM":[],"j":["M"],"as":["M"],"l.E":"M"},"e_":{"l":["h"],"y":["h"],"o":["h"],"p":["h"],"aM":[],"j":["h"],"as":["h"]},"dZ":{"l":["M"],"m7":[],"y":["M"],"o":["M"],"p":["M"],"aM":[],"j":["M"],"as":["M"],"l.E":"M"},"fQ":{"l":["h"],"y":["h"],"o":["h"],"p":["h"],"aM":[],"j":["h"],"as":["h"],"l.E":"h"},"fR":{"l":["h"],"y":["h"],"o":["h"],"p":["h"],"aM":[],"j":["h"],"as":["h"],"l.E":"h"},"fS":{"l":["h"],"y":["h"],"o":["h"],"p":["h"],"aM":[],"j":["h"],"as":["h"],"l.E":"h"},"fT":{"l":["h"],"y":["h"],"o":["h"],"p":["h"],"aM":[],"j":["h"],"as":["h"],"l.E":"h"},"fU":{"l":["h"],"y":["h"],"o":["h"],"p":["h"],"aM":[],"j":["h"],"as":["h"],"l.E":"h"},"d_":{"l":["h"],"pE":[],"y":["h"],"o":["h"],"p":["h"],"aM":[],"j":["h"],"as":["h"],"l.E":"h"},"e0":{"l":["h"],"pF":[],"y":["h"],"o":["h"],"p":["h"],"aM":[],"j":["h"],"as":["h"],"l.E":"h"},"eF":{"nx":[]},"hU":{"L":[]},"eG":{"c0":[],"L":[]},"G":{"at":["1"]},"eE":{"hu":[]},"eh":{"fe":["1"]},"c5":{"U":["1"]},"eB":{"j":["1"],"j.E":"1"},"dz":{"L":[]},"de":{"fe":["1"]},"ak":{"de":["1"],"fe":["1"]},"di":{"de":["1"],"fe":["1"]},"ez":{"ns":["1"],"nE":["1"],"cC":["1"]},"dd":{"hK":["1"],"ez":["1"],"ns":["1"],"nE":["1"],"cC":["1"]},"c2":{"eA":["1"],"cx":["1"]},"df":{"ei":["1"],"bC":["1"],"cC":["1"]},"ei":{"bC":["1"],"cC":["1"]},"eA":{"cx":["1"]},"cA":{"hP":["1"]},"bj":{"c4":["1"]},"eJ":{"nz":[]},"ig":{"eJ":[],"nz":[]},"l0":{"aE":["1","2"],"z":["1","2"],"jM":["1","2"],"X":["1","2"],"z.K":"1","z.V":"2"},"en":{"aE":["1","2"],"z":["1","2"],"jM":["1","2"],"X":["1","2"],"z.K":"1","z.V":"2"},"eo":{"e9":["1"],"no":["1"],"p":["1"],"j":["1"]},"ep":{"U":["1"]},"dP":{"j":["1"]},"dW":{"z":["1","2"],"X":["1","2"]},"z":{"X":["1","2"]},"ev":{"e9":["1"],"no":["1"],"p":["1"],"j":["1"]},"cg":{"af":["cg"]},"M":{"N":[],"af":["N"]},"ag":{"af":["ag"]},"h":{"N":[],"af":["N"]},"o":{"p":["1"],"j":["1"]},"N":{"af":["N"]},"u":{"af":["u"],"nh":[]},"dy":{"L":[]},"c0":{"L":[]},"fY":{"L":[]},"br":{"L":[]},"d3":{"L":[]},"fB":{"L":[]},"hC":{"L":[]},"hz":{"L":[]},"bB":{"L":[]},"ff":{"L":[]},"h0":{"L":[]},"ec":{"L":[]},"fi":{"L":[]},"ir":{"b5":[]},"bx":{"k":[]},"aH":{"k":[]},"w":{"e":[]},"ax":{"e":[]},"ay":{"e":[]},"ac":{"e":[]},"q":{"a7":[],"w":[],"e":[]},"eX":{"a7":[],"w":[],"e":[]},"eY":{"a7":[],"w":[],"e":[]},"f4":{"a7":[],"w":[],"e":[]},"cb":{"a7":[],"w":[],"e":[]},"bc":{"w":[],"e":[]},"bu":{"w":[],"e":[]},"dG":{"l":["bh<N>"],"r":["bh<N>"],"o":["bh<N>"],"y":["bh<N>"],"p":["bh<N>"],"j":["bh<N>"],"r.E":"bh<N>","l.E":"bh<N>"},"dH":{"bh":["N"]},"fl":{"l":["u"],"r":["u"],"o":["u"],"y":["u"],"p":["u"],"j":["u"],"r.E":"u","l.E":"u"},"a7":{"w":[],"e":[]},"fr":{"l":["aB"],"r":["aB"],"o":["aB"],"y":["aB"],"p":["aB"],"j":["aB"],"r.E":"aB","l.E":"aB"},"fs":{"e":[]},"fv":{"a7":[],"w":[],"e":[]},"cj":{"l":["w"],"r":["w"],"o":["w"],"y":["w"],"p":["w"],"j":["w"],"r.E":"w","l.E":"w"},"dO":{"e":[]},"ck":{"e":[]},"cU":{"a7":[],"w":[],"e":[]},"cr":{"a7":[],"w":[],"e":[]},"fL":{"z":["u","@"],"X":["u","@"],"z.K":"u","z.V":"@"},"fM":{"z":["u","@"],"X":["u","@"],"z.K":"u","z.V":"@"},"fN":{"l":["aG"],"r":["aG"],"o":["aG"],"y":["aG"],"p":["aG"],"j":["aG"],"r.E":"aG","l.E":"aG"},"e1":{"l":["w"],"r":["w"],"o":["w"],"y":["w"],"p":["w"],"j":["w"],"r.E":"w","l.E":"w"},"h4":{"l":["aI"],"r":["aI"],"o":["aI"],"y":["aI"],"p":["aI"],"j":["aI"],"r.E":"aI","l.E":"aI"},"hb":{"z":["u","@"],"X":["u","@"],"z.K":"u","z.V":"@"},"hd":{"a7":[],"w":[],"e":[]},"hh":{"l":["ax"],"r":["ax"],"o":["ax"],"y":["ax"],"e":[],"p":["ax"],"j":["ax"],"r.E":"ax","l.E":"ax"},"hi":{"l":["aJ"],"r":["aJ"],"o":["aJ"],"y":["aJ"],"p":["aJ"],"j":["aJ"],"r.E":"aJ","l.E":"aJ"},"hl":{"z":["u","u"],"X":["u","u"],"z.K":"u","z.V":"u"},"hs":{"l":["ac"],"r":["ac"],"o":["ac"],"y":["ac"],"p":["ac"],"j":["ac"],"r.E":"ac","l.E":"ac"},"ht":{"l":["ay"],"r":["ay"],"o":["ay"],"y":["ay"],"e":[],"p":["ay"],"j":["ay"],"r.E":"ay","l.E":"ay"},"hv":{"l":["aL"],"r":["aL"],"o":["aL"],"y":["aL"],"p":["aL"],"j":["aL"],"r.E":"aL","l.E":"aL"},"bi":{"k":[]},"db":{"a7":[],"w":[],"e":[]},"hE":{"e":[]},"dc":{"e":[]},"hN":{"l":["I"],"r":["I"],"o":["I"],"y":["I"],"p":["I"],"j":["I"],"r.E":"I","l.E":"I"},"ej":{"bh":["N"]},"hZ":{"l":["aC?"],"r":["aC?"],"o":["aC?"],"y":["aC?"],"p":["aC?"],"j":["aC?"],"r.E":"aC?","l.E":"aC?"},"eq":{"l":["w"],"r":["w"],"o":["w"],"y":["w"],"p":["w"],"j":["w"],"r.E":"w","l.E":"w"},"ik":{"l":["aK"],"r":["aK"],"o":["aK"],"y":["aK"],"p":["aK"],"j":["aK"],"r.E":"aK","l.E":"aK"},"is":{"l":["ai"],"r":["ai"],"o":["ai"],"y":["ai"],"p":["ai"],"j":["ai"],"r.E":"ai","l.E":"ai"},"ek":{"cx":["1"]},"cB":{"ek":["1"],"cx":["1"]},"el":{"bC":["1"]},"dK":{"U":["1"]},"i1":{"ni":[]},"fG":{"l":["aU"],"r":["aU"],"o":["aU"],"p":["aU"],"j":["aU"],"r.E":"aU","l.E":"aU"},"fZ":{"l":["aX"],"r":["aX"],"o":["aX"],"p":["aX"],"j":["aX"],"r.E":"aX","l.E":"aX"},"hn":{"l":["u"],"r":["u"],"o":["u"],"p":["u"],"j":["u"],"r.E":"u","l.E":"u"},"n":{"a7":[],"w":[],"e":[]},"hw":{"l":["aZ"],"r":["aZ"],"o":["aZ"],"p":["aZ"],"j":["aZ"],"r.E":"aZ","l.E":"aZ"},"dB":{"H":[],"e":[]},"ca":{"e":[]},"H":{"e":[]},"f_":{"z":["u","@"],"X":["u","@"],"z.K":"u","z.V":"@"},"bs":{"H":[],"e":[]},"f0":{"e":[]},"dC":{"e":[]},"cT":{"H":[],"e":[]},"h_":{"e":[]},"bW":{"n0":[],"j":["u"],"j.E":"u"},"d7":{"U":["u"]},"l9":{"j":["1"],"j.E":"1"},"cE":{"U":["1"]},"cJ":{"dN":[]},"bd":{"aq":[]},"bY":{"aq":[]},"bZ":{"aq":[]},"cO":{"aq":[]},"bV":{"aq":[]},"h8":{"aq":[]},"e5":{"aq":[]},"h9":{"aq":[]},"bK":{"aq":[]},"W":{"f":[]},"cq":{"W":["h"],"f":[],"W.T":"h"},"cX":{"W":["h"],"f":[],"W.T":"h"},"c_":{"dN":[]},"fJ":{"dN":[]},"fm":{"aw":[]},"fn":{"aw":[]},"fV":{"a4":[]},"e4":{"a4":[]},"aW":{"a4":[]},"d6":{"a4":[]},"fH":{"a4":[]},"ee":{"a4":[]},"dA":{"a4":[]},"dF":{"a4":[]},"f1":{"a4":[]},"hB":{"a4":[]},"e3":{"a4":[]},"h6":{"a4":[]},"ft":{"aw":[]},"dT":{"aw":[]},"bz":{"af":["bz"]},"he":{"aw":[]},"hg":{"pA":[]},"eb":{"aw":[]},"hp":{"aw":[]},"hr":{"aw":[]},"hx":{"aw":[],"pj":[]},"hq":{"ar":[]},"fd":{"ar":[]},"f2":{"ar":[]},"h1":{"ar":[]},"f5":{"ar":[]},"e8":{"ar":[]},"dL":{"ar":[]},"f6":{"ar":[]},"ha":{"ar":[]},"fq":{"aw":[]},"hF":{"aw":[]},"hG":{"aR":["i"]},"aQ":{"aR":["1"]},"d1":{"aR":["1"]},"fX":{"aR":["i"]},"f9":{"aR":["i"]},"eV":{"aR":["i"]},"fh":{"aR":["i"]},"du":{"aR":["i"]},"d0":{"aR":["i"]},"iB":{"cz":[]},"m7":{"o":["M"],"p":["M"],"j":["M"],"aM":[]}}'))
A.q0(v.typeUniverse,JSON.parse('{"p":1,"cZ":1,"dP":1,"dW":2,"ev":1,"eK":1}'))
var u={S:" 0\x10000\xa0\x80\x10@P`p`p\xb1 0\x10000\xa0\x80\x10@P`p`p\xb0 0\x10000\xa0\x80\x11@P`p`p\xb0 1\x10011\xa0\x80\x10@P`p`p\xb0 1\x10111\xa1\x81\x10AQaqaq\xb0 1\x10011\xa0\x80\x10@Qapaq\xb0 1\x10011\xa0\x80\x10@Paq`p\xb0 1\x10011\xa0\x80\x10@P`q`p\xb0 \x91\x100\x811\xa0\x80\x10@P`p`p\xb0 1\x10011\xa0\x81\x10@P`p`p\xb0 1\x100111\x80\x10@P`p`p\xb0!1\x11111\xa1\x81\x11AQaqaq\xb1",M:'""""""""""""""""DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""3333s3#7333333339433333333333333CDDDDDDDDDDDDDDDDDDDDDDC433DDDDD4DDDDDDDDDDDDDDDDDD3CU33333333333333333333333333334T5333333333333333333333333333CCD3D33CD533333333333333333333333TEDTET53U5UE3333C33333333333333333333333333333CETUTDT5333333333333333333333333SUUUUUEUDDDDD43333433333333333333333333ET533E3333SDD3U3U4333343333C4333333333333CSD33343333333433333333333333333SUUUEDDDTE4333SDDSUSU\x94333343333C43333333333333333s333333333337333333333333wwwww73sw33sww7swwwwwss33373733s33333w33333\xa3\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xba\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xcb\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xec\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee>33333\xb3\xbb\xbb\xbb\xbb\xbb\xbb\xbb;3\xc3\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc334343C33333333333SET333333333333333EDTETD433333333CD33333333333333CD33333CDD4333333333333333333333333CDTDDDCTE43C4CD3C333333333333333D3C33333\x99\x99\x9933333DDDDD42333333333333333333CDDD4333333333333333333333333DDDD433334333C53333333333333333333333C33TEDCSUUU433333333S533333333333333333333333333333CD4DDDDD3D5333333333333333333333333333CSEUCUSE4333D33333C43333333333333CDDD9DDD3DCD433333333CDCDDDDDDEDDD33433C3E433#""""\x82" """"""""2333333333333333CDUUDU53SEUUUD43SDD3U3U4333C43333C43333333333333SE43CD33333333DD33333CDDDDDDDDDD3333333343333333B!233333333333#"""333333s3CD533333333333333333333333333CESEU3333333333333333333DDDD433333CD2333333333333333333333333""""23333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDD33333333333333333333333333333CDDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333SUDDDDUDT43333333333343333333333333333333333333333333333333333TEDDTTEETD333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CUDD3UUDE43333333333333D33333333333333333333333333333333333333333UEDDDTEE43333333333333333333333333333333333333333333333333333CEUDDDE33333333333333333333333333333333333333333333333333CDUDDEDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333D#"2333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CSUUUUUUUUUUUUUUUUUUUUUUUUUUU333CD4333333333333333333333333333333333333333333333333333333""""""33EDDCTSE3333333333D33333333333DDDDDDD\x94DDDDDDDDDDDDDDDDDDDDDDDDDDDDDCDDDDDDDD3DDD4DCDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CD4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDDDD333333333333333333333333333333333333333333333333333333333333333333333333333333333333333s73333s33333333333""""""""3333333373s333333333333333333333333333333CTDDDTU5D4DD333C433333D33333333333333DU433333333333333333333DDDUDUD3333S3333333333333333334333333333333s733333s33333333333CD4DDDD4D4DD4333333333sww73333333w3333333333sw3333s33333337333333sw333333333s733333333333333333UTEUS433333333C433333333333333C433333333333334443SUE4333333333333CDDDDDDDD4333333DDDDDT533333\xa3\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa3SDDDDUUT5DDD43333C43333333333333333C33333333333EEDDDCC3DDDDUUUDDDDD3T5333333333333333333333333333CSDDD433E533333333333333333333333333DDDDDDD4333333333333333333333333333CD53333333333333333333333UEDTE4\x933333333\x933333333333333333333333333D433333333333333333CDDEDDD43333333S5333333333333333333333C333333D533333333333333333333333SUDDDDT5\x9933CD433333333333333333333333333333333333333333333333UEDUTD33343333333333333333333333333333333333333333333333333333333333333333333333333333333CUEDDD43333333333DU333333333333333333333333333C4TTU5S5SU3333C33333U3DDD43DD4333333333333333333333333333333333333333333333333333333333333333333333DDDDDDD533333333333333333333333DDDTTU43333333333333333333333333333DDD733333s373ss33w7733333ww733333333333ss33333333333333333333333333333ww3333333333333333333333333333wwww33333www33333333333333333333wwww333333333333333wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww333333wwwwwwwwwwwwwwwwwwwwwww7wwwwwswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww733333333333333333333333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333333333333333333333333333333333333333333333333333333333swwwww7333333333333333333333333333333333333333333wwwwwwwwwwwwwwwwwwwww7wwwwwwswwwwwwwwwwwwwwwwwwwww73333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333333w7333333333333333733333333333333333333333333333sww733333s7333333s3wwwww333333333wwwwwwwwwwwwwwwwwwwwwwwwwwwwgffffffffffff6wwwwwww73333s33333333337swwwwsw73333wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwDDDDDDDDDDDDDDDDDDDDDDDD33333333DDDDDDDD33333333DDDDDDDDDDDDDDDD43333333DC44333333333333333333333333333SUDDDDTD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333UED4CTUE3S33333333333333DDDDD33333333333333333333DDD\x95DD333343333DDDUD43333333333333333333\x93\x99\x99IDDDDDDE4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDDDDDDDDDDDDDDDDDDDDDDDDDD33DDDDDDDDDDDDDDDDDDDDDDDDD33334333333C33333333333DD4DDDDDDD43333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333TD43EDD""""DDDD3DDD433333333333333CD43333333333333333333333333333333333333333333333333333333333333333333333333CD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333C33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333433333333333333333333333333333333333333333333333333333333333333333333333333DD4333333333333333333333333333333333333333333333333333333333333333333EDDDCDDT43333333333333333333333333333333333333333CDDDDDDDDDD4EDDDETD3333333333333333333333333333333333333333333333333333333333333DDD3CC4DDD\x94433333333333333333333333333333333SUUC4UT433333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333DU333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDD333333333333333333333333333333333333333333333333333333CDDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDC433DD33333333333333333333D43C3333333333333333333333333333333333333333333333333333333333333333333333333333333333C4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333334EDDDD3\x03',d:"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",Z:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",v:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",I:"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\nin vec4 v_bg_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n  if (v_bg_color != vec4(0, 0, 0, 0)) {\n    outColor = outColor + v_bg_color;\n  }\n}\n",t:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",_:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\n\nout vec4 outColor;\n\nvoid main() {\n    vec2 tex_position = gl_FragCoord.xy / vec2(100, 40);\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n    float source_strength = u_source_strength + sin(u_time * 2.0);\n    float dist = distance(gl_FragCoord.xy, (u_source_position + vec2(0.5, 0.5))) / 2.0;\n    if (dist > source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, source_strength, dist);\n    outColor = vec4(u_source_color.rgb, scale);\n}\n",L:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // back textures is already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 front = texture(u_light_texture, tex_position);\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  // front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",s:"\u0e3b\u1cdb\u05d0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b \u389c\u102b\u102b\u102b\u102b\u489c\u102b\u102b\u102b\u0620\u392b\u0c26\u0efa\u102b\u0dcb\u0601\u3e7e\u228f\u0c77\u24d3\u40b2\u102b\u1d51\u0f6f\u2681\u0698\u0851\u0d63\u0be6\u0d63\u1d2a\u06d5\u0e9b\u0771\u075c\u2b98\u23fe\u2707\u0da1\u2a52\u08eb\u0d13\u0ce3\u2712\u0c62\u4d9d\u0b97\u25cb\u2b21\u0659\u42c5\u0baa\u0ec5\u088d\u102b\u09b9\u09d9\u09f9\u0a21\u102b\u102b\u102b\u102b\u102b\u40ae\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0b5f\u25b1\u23c1\u07f5\u0fe2\u102b\u269e\u102b\u0e5b\u102b\u102b\u102b\u2427\u26c9\u275a\u102b\u2b5c\u0fad\u0b31\u0789\u08ab\u102b\u102b\u0dfb\u102b\u102b\u102b\u1d74\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0f2f\u2372\u102b\u38ec\u090f\u102b\u2501\u102b\u102b\u102b\u102b\u102b\u24a9\u102b\u35c8\u0939\u102b\u102b\u102b\u23b5\u102b\u102b\u2345\u2c27\u3457\u2d9d\u3491\u2d9d\u0979\u2be5\u252c\u102b\u102b\u102b\u102b\u102b\u233b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2566\u23a2\u102b\u102b\u102b\u102b\u102b\u409c\u102b\u428c\u102b\u3db9\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2bac\u102b\u16c9\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2c0e\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0d24\u4c95\u4c83\u102b\u102b\u102b\u102b\u0b0c\u102b\u07bb\u2609\u0c43\u2641\u071f\u2483\u2443\u0cb1\u06e1\u0811\u102b\u102b\u102b\u2583\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a95\u0ace\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u42ad\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u38bc\u102b\u102b\u1cdb\u102b\u102b\u4c95\u1cea\u40ce\u102b\u49ce\u1f6f\u2752\u1506\u393f\u449f\u102b\u102b\u102b\u102b\u102b\u0ff2\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u113b\u191a\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u1869\u102b\u102b\u102b\u102b\u3e89\u102b\u3bd9\u102b\u1da7\u102b\u47cf\u102b\u34a1\u305d\u2c56\u2d9d\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\x00\u01f0\u01f0\u01f0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b"}
var t=(function rtii(){var s=A.aP
return{bm:s("@<~>"),mm:s("eW"),A:s("aQ<i>"),bB:s("a0"),lE:s("ap"),u:s("dz"),bD:s("ba"),lo:s("n_"),jQ:s("cb"),gN:s("cd"),m1:s("n0"),n6:s("af<v?>"),d5:s("I"),cs:s("cg"),dA:s("bu"),jW:s("bR"),J:s("ag"),ox:s("m4"),gt:s("p<@>"),v:s("a3"),O:s("fo"),b:s("ch"),fz:s("L"),L:s("k"),fq:s("J"),et:s("aB"),C:s("m7"),gY:s("ci"),h:s("at<@>"),bC:s("dL"),m:s("aa<h,f>"),eT:s("a5<co>"),f5:s("a5<cy>"),eN:s("a5<aj>"),U:s("a5<c_>"),ba:s("a5<d8>"),de:s("a5<M>"),oQ:s("a5<aT?>"),hQ:s("cU"),h8:s("a6"),lZ:s("aT"),e7:s("j<@>"),c7:s("t<cJ>"),if:s("t<cL>"),G:s("t<R>"),a:s("t<aq>"),V:s("t<bb>"),fy:s("t<bL>"),Q:s("t<fg>"),X:s("t<b1>"),pl:s("t<m4>"),f:s("t<ar>"),c:s("t<a3>"),w:s("t<a4>"),iw:s("t<at<~>>"),ow:s("t<dN>"),ge:s("t<a6>"),Y:s("t<bf>"),I:s("t<aT>"),lB:s("t<bv>"),fu:s("t<o<bT>>"),do:s("t<o<i>>"),fC:s("t<o<h>>"),lR:s("t<au>"),ku:s("t<bT>"),hf:s("t<v>"),d:s("t<h2>"),q:s("t<i>"),ff:s("t<h7>"),hd:s("t<d5>"),k:s("t<O>"),fF:s("t<hj>"),s:s("t<u>"),oe:s("t<ef>"),o:s("t<x>"),B:s("t<b_>"),D:s("t<cz>"),bu:s("t<b6>"),n:s("t<M>"),dG:s("t<@>"),t:s("t<h>"),g2:s("t<N>"),ev:s("t<~(ag)>"),T:s("dS"),dY:s("bw"),dX:s("y<@>"),mT:s("bx"),kT:s("aU"),p:s("o<cJ>"),mw:s("o<a3>"),i8:s("o<i>"),bd:s("o<M>"),gM:s("co"),cM:s("X<i,a3>"),ea:s("X<u,@>"),gX:s("cX"),e:s("cq"),li:s("a2"),km:s("fK<bf>"),ib:s("aG"),ee:s("bT"),gD:s("aH"),fh:s("w"),P:s("Y"),ai:s("aX"),K:s("v"),mn:s("Q"),gm:s("d1<i>"),p6:s("bz"),d8:s("aI"),j:s("i"),o5:s("ni"),kB:s("av"),mx:s("bh<N>"),fm:s("ax"),cA:s("aJ"),hH:s("aK"),r:s("O"),l:s("b5"),N:s("u"),lv:s("ai"),dt:s("cy"),dy:s("aj"),dQ:s("ay"),gJ:s("ac"),lJ:s("bD"),W:s("c_"),ns:s("d8"),hU:s("hu"),ki:s("aL"),hk:s("aZ"),fH:s("ef"),ha:s("nx"),bE:s("c0"),jv:s("aM"),cx:s("da"),eL:s("db"),kL:s("aN<a0>"),b1:s("aN<ap>"),eo:s("aN<a2>"),au:s("aN<av>"),c1:s("cz"),l7:s("hH"),oJ:s("ak<ba>"),fB:s("ak<bD>"),pn:s("ak<bf?>"),ou:s("ak<~>"),aN:s("hL"),n4:s("b6"),bz:s("cB<k>"),og:s("G<ba>"),aa:s("G<bD>"),g:s("G<@>"),hy:s("G<h>"),j7:s("G<bf?>"),cU:s("G<~>"),gL:s("im<v?>"),iF:s("di<~>"),im:s("iv"),o3:s("iA"),k4:s("D"),ei:s("D(a0)"),g9:s("D(ap)"),eU:s("D(a2)"),iW:s("D(v)"),hZ:s("D(av)"),i:s("M"),z:s("@"),mY:s("@()"),y:s("@(v)"),ng:s("@(v,b5)"),p1:s("@(@,@)"),S:s("h"),eK:s("0&*"),_:s("v*"),oL:s("a4?"),gK:s("at<Y>?"),ef:s("aC?"),R:s("aT?"),iD:s("v?"),F:s("cD<@,@>?"),nF:s("i4?"),du:s("@(k)?"),ld:s("h(b6,b6)?"),Z:s("~()?"),p0:s("~(ba)?"),lW:s("~(bR)?"),oV:s("~(k)?"),jV:s("~(bx)?"),b9:s("~(aH)?"),cZ:s("N"),H:s("~"),M:s("~()"),nD:s("~([~])"),x:s("~(ag)"),nt:s("~(a4)"),i6:s("~(v)"),fQ:s("~(v,b5)"),gS:s("~(u,u)"),E:s("~(u,@)"),my:s("~(hu)"),hv:s("~(N)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aF=A.dB.prototype
B.cO=A.ca.prototype
B.cP=A.eZ.prototype
B.aa=A.cb.prototype
B.et=A.cQ.prototype
B.eC=A.cT.prototype
B.eD=A.dO.prototype
B.eQ=J.a.prototype
B.a=J.t.prototype
B.eS=J.dQ.prototype
B.e=J.dR.prototype
B.c=J.cV.prototype
B.h=J.cl.prototype
B.eT=J.bw.prototype
B.a3=A.dZ.prototype
B.ft=A.d_.prototype
B.N=A.e0.prototype
B.bb=J.h3.prototype
B.d=A.d4.prototype
B.aA=J.da.prototype
B.cm=A.dc.prototype
B.ch=new A.aj(5,"table")
B.cn=new A.du(B.ch)
B.aB=new A.dv(2,"rounds")
B.S=new A.f9()
B.ax=new A.aj(11,"column")
B.b9=new A.d0(B.ax)
B.cz=new A.aQ(B.S,B.b9,t.A)
B.P=new A.aj(0,"door")
B.b8=new A.d0(B.P)
B.cu=new A.aQ(B.cz,B.b8,t.A)
B.cY=new A.fX()
B.cv=new A.aQ(B.cu,B.cY,t.A)
B.a8=new A.eV()
B.cx=new A.aQ(B.a8,B.b9,t.A)
B.cy=new A.aQ(B.cx,B.b8,t.A)
B.cG=new A.a0("",0,0,0,99)
B.a7=new A.bb(0,"surface")
B.C=new A.bb(1,"caves")
B.B=new A.bb(2,"deepCaves")
B.R=new A.bb(3,"facility")
B.D=new A.bb(4,"ruins")
B.cQ=new A.bb(5,"village")
B.cR=new A.bb(6,"snow")
B.a9=new A.fh()
B.aG=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cS=function() {
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
B.cX=function(getTagFallback) {
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
B.cT=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cU=function(hooks) {
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
B.cW=function(hooks) {
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
B.cV=function(hooks) {
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
B.aH=function(hooks) { return hooks; }

B.aI=new A.k3()
B.cZ=new A.h0()
B.x=new A.ki()
B.n=new A.i1()
B.l=new A.ig()
B.d_=new A.ir()
B.ab=new A.fc(2,"ignoreAgentsAndUnlockedDoors")
B.ac=new A.fc(3,"normal")
B.d4=new A.f(1660944383)
B.d5=new A.f(3707764736)
B.T=new A.f(4278190080)
B.e6=new A.f(4294278144)
B.ad=new A.f(4294967295)
B.E=new A.bN(null,null,null,null)
B.aL=new A.bQ(5,"d20")
B.ah=new A.b1(0,"se")
B.ai=new A.b1(1,"ne")
B.aj=new A.b1(2,"sw")
B.ak=new A.b1(3,"nw")
B.o=new A.b1(4,"n")
B.p=new A.b1(5,"e")
B.q=new A.b1(6,"s")
B.r=new A.b1(7,"w")
B.ez=new A.ag(0)
B.eA=new A.ag(25e4)
B.eB=new A.ag(8000)
B.F=new A.ch(0,"primaryMelee")
B.t=new A.ch(1,"primaryRanged")
B.G=new A.ch(2,"armor")
B.eE=new A.a6(1,"north")
B.eF=new A.a6(10,"activate")
B.eG=new A.a6(12,"equipment")
B.eH=new A.a6(19,"autoexplore")
B.eI=new A.a6(2,"east")
B.eJ=new A.a6(20,"reload")
B.eK=new A.a6(21,"toggleStats")
B.eL=new A.a6(22,"showMenu")
B.eM=new A.a6(3,"south")
B.eN=new A.a6(4,"west")
B.eO=new A.a6(6,"fire")
B.eP=new A.a6(8,"look")
B.al=new A.a1(0,"none")
B.am=new A.a1(1,"stairsUp")
B.V=new A.a1(10,"tree")
B.W=new A.a1(11,"bookshelf")
B.H=new A.a1(12,"mechanism")
B.X=new A.a1(13,"activatedMechanism")
B.Y=new A.a1(14,"chest")
B.Z=new A.a1(15,"stalagmite")
B.a_=new A.a1(16,"column")
B.I=new A.a1(2,"stairsDown")
B.y=new A.a1(3,"door")
B.J=new A.a1(4,"openDoor")
B.K=new A.a1(5,"lockedDoor")
B.L=new A.a1(6,"grass")
B.M=new A.a1(7,"torch")
B.a0=new A.a1(8,"table")
B.a1=new A.a1(9,"chair")
B.aM=new A.bv(0,"melee")
B.aN=new A.bv(1,"ranged")
B.aO=new A.bv(2,"armor")
B.aP=new A.bv(3,"other")
B.eR=new A.bv(5,"corpse")
B.aQ=new A.bv(6,"ammo")
B.eU=new A.aF(" ",!1,!1,!1)
B.aR=new A.aF("ArrowDown",!1,!1,!1)
B.eV=new A.aF("ArrowLeft",!1,!1,!1)
B.eW=new A.aF("ArrowRight",!1,!1,!1)
B.aS=new A.aF("ArrowUp",!1,!1,!1)
B.eX=new A.aF("Enter",!1,!1,!1)
B.aT=new A.aF("Escape",!1,!1,!1)
B.eY=new A.jQ(1,"water")
B.aC=new A.cL(0,"light")
B.aD=new A.cL(1,"heavy")
B.aE=new A.cL(2,"powered")
B.hd=A.c(s([B.aC,B.aD,B.aE]),t.if)
B.cA=new A.ap(1)
B.cB=new A.ap(1)
B.cC=new A.ap(1)
B.cD=new A.ap(1)
B.hb=A.c(s([B.aE]),t.if)
B.cE=new A.ap(2)
B.hf=A.c(s([B.aC,B.aD]),t.if)
B.cF=new A.ap(2)
B.eZ=A.c(s([B.cA,B.cB,B.cC,B.cD,B.cE,B.cF]),A.aP("t<ap>"))
B.aU=A.c(s([1,2,4,8]),t.t)
B.f_=A.c(s([24,36]),t.n)
B.fA=new A.bU(0,"north")
B.fB=new A.bU(1,"south")
B.fC=new A.bU(2,"east")
B.fD=new A.bU(3,"west")
B.fE=new A.bU(4,"center")
B.aV=A.c(s([B.fA,B.fB,B.fC,B.fD,B.fE]),A.aP("t<bU>"))
B.aW=A.c(s([B.o,B.q]),t.X)
B.aX=A.c(s([B.p,B.r]),t.X)
B.an=A.c(s([B.ah,B.ai,B.aj,B.ak,B.o,B.p,B.q,B.r]),t.X)
B.z=A.c(s([-1,3,-1,-1,3,-1]),t.n)
B.a2=A.c(s([]),t.Q)
B.f4=A.c(s([]),t.X)
B.i=A.c(s([]),t.w)
B.f3=A.c(s([]),A.aP("t<Y>"))
B.cM=new A.a0("Second Skin",1,1,2,5)
B.cN=new A.a0("Estex Suit I",1,0,1,5)
B.cJ=new A.a0("Flight Suit",1,0,1,6)
B.cK=new A.a0("Freebooter Armor I",2,2,3,4)
B.cH=new A.a0("Kasatha microcord I",2,1,3,3)
B.cI=new A.a0("Ceremonial Plate",1,1,3,2)
B.cL=new A.a0("Golemforged Plating",1,2,5,0)
B.f6=A.c(s([B.cM,B.cN,B.cJ,B.cK,B.cH,B.cI,B.cL]),A.aP("t<a0>"))
B.h9=new A.fz(0,"oneHand")
B.af=new A.bP(5,"bludgeoning")
B.h4=new A.cf(0,"none")
B.fY=new A.bO()
B.U=new A.bQ(2,"d6")
B.cj=new A.b_(0,"archaic")
B.Q=new A.b_(2,"analog")
B.fa=A.c(s([B.cj,B.Q]),t.B)
B.fk=new A.a2(B.af,1,B.U,0,"Club",B.fa)
B.ag=new A.bQ(1,"d4")
B.fT=new A.b_(3,"operative")
B.aY=A.c(s([B.Q,B.fT]),t.B)
B.fi=new A.a2(B.af,1,B.ag,1,"Tactical Baton",B.aY)
B.ew=new A.bP(7,"slashing")
B.fo=new A.a2(B.ew,1,B.ag,1,"Survival Knife",B.aY)
B.ha=new A.fz(1,"twoHand")
B.aJ=new A.bP(6,"piercing")
B.ck=new A.b_(4,"block")
B.f1=A.c(s([B.Q,B.ck]),t.B)
B.fn=new A.a2(B.aJ,1,B.U,1,"Tactical Spear",B.f1)
B.ae=new A.bP(3,"fire")
B.h7=new A.cf(4,"burn")
B.fZ=new A.bO()
B.cl=new A.b_(5,"powered")
B.aZ=A.c(s([B.cl]),t.B)
B.h3=new A.jY()
B.fj=new A.a2(B.ae,2,B.ag,7,"Flame Sword",B.aZ)
B.h6=new A.cf(11,"wound")
B.h_=new A.bO()
B.aK=new A.bQ(3,"d8")
B.fl=new A.a2(B.ae,2,B.aK,9,"Plasma Sword",B.aZ)
B.ev=new A.bP(2,"electricity")
B.h5=new A.cf(1,"arc")
B.h0=new A.bO()
B.ey=new A.bQ(4,"d12")
B.fU=new A.b_(6,"stun")
B.f0=A.c(s([B.fU,B.cl]),t.B)
B.fp=new A.a2(B.ev,1,B.ey,8,"Shock Staff",B.f0)
B.f7=A.c(s([B.fk,B.fi,B.fo,B.fn,B.fj,B.fl,B.fp]),A.aP("t<a2>"))
B.eu=new A.bP(1,"cold")
B.h8=new A.cf(9,"staggered")
B.h1=new A.bO()
B.cq=new A.dv(1,"charge")
B.cs=new A.dw(B.cq,20)
B.fw=new A.av("Zero pistol",B.eu,B.U,5,B.cs,60)
B.he=A.c(s([B.Q]),t.B)
B.ct=new A.dw(B.aB,9)
B.O=new A.av("Tac Pistol",B.aJ,B.U,1,B.ct,30)
B.ex=new A.bQ(0,"d3")
B.h2=new A.bO()
B.fV=new A.b_(7,"line")
B.fW=new A.b_(8,"unwieldy")
B.hc=A.c(s([B.fV,B.fW]),t.B)
B.cp=new A.dv(0,"petro")
B.cr=new A.dw(B.cp,20)
B.fx=new A.av("Flame Rifle",B.ae,B.aK,2,B.cr,25)
B.f8=A.c(s([B.fw,B.O,B.fx]),A.aP("t<av>"))
B.d0=new A.cc(0,"north")
B.d1=new A.cc(1,"south")
B.d2=new A.cc(2,"east")
B.d3=new A.cc(3,"west")
B.f9=A.c(s([B.d0,B.d1,B.d2,B.d3]),A.aP("t<cc>"))
B.b_=new A.co(0,"lockedDoor")
B.fb=new A.co(3,"doorMechanism")
B.b0=new A.co(4,"none")
B.ea=new A.f(4294638330)
B.e8=new A.f(4294309365)
B.e1=new A.f(4293848814)
B.dW=new A.f(4292927712)
B.dU=new A.f(4292269782)
B.dP=new A.f(4290624957)
B.dH=new A.f(4288585374)
B.dA=new A.f(4285887861)
B.dv=new A.f(4284572001)
B.dl=new A.f(4282532418)
B.dh=new A.f(4281348144)
B.dd=new A.f(4280361249)
B.ao=new A.aa([50,B.ea,100,B.e8,200,B.e1,300,B.dW,350,B.dU,400,B.dP,500,B.dH,600,B.dA,700,B.dv,800,B.dl,850,B.dh,900,B.dd],t.m)
B.e_=new A.f(4293457385)
B.dR=new A.f(4291356361)
B.dJ=new A.f(4289058471)
B.dD=new A.f(4286695300)
B.dx=new A.f(4284922730)
B.dq=new A.f(4283215696)
B.dn=new A.f(4282622023)
B.dj=new A.f(4281896508)
B.dg=new A.f(4281236786)
B.db=new A.f(4279983648)
B.b1=new A.aa([50,B.e_,100,B.dR,200,B.dJ,300,B.dD,400,B.dx,500,B.dq,600,B.dn,700,B.dj,800,B.dg,900,B.db],t.m)
B.eq=new A.f(4294966759)
B.ep=new A.f(4294965700)
B.eo=new A.f(4294964637)
B.en=new A.f(4294963574)
B.em=new A.f(4294962776)
B.ek=new A.f(4294961979)
B.ec=new A.f(4294826037)
B.eb=new A.f(4294688813)
B.e9=new A.f(4294551589)
B.e7=new A.f(4294278935)
B.b2=new A.aa([50,B.eq,100,B.ep,200,B.eo,300,B.en,400,B.em,500,B.ek,600,B.ec,700,B.eb,800,B.e9,900,B.e7],t.m)
B.e4=new A.f(4293913577)
B.dV=new A.f(4292332744)
B.dO=new A.f(4290554532)
B.dI=new A.f(4288776319)
B.dE=new A.f(4287458915)
B.dC=new A.f(4286141768)
B.dz=new A.f(4285353025)
B.dt=new A.f(4284301367)
B.dr=new A.f(4283315246)
B.dk=new A.f(4282263331)
B.b3=new A.aa([50,B.e4,100,B.dV,200,B.dO,300,B.dI,400,B.dE,500,B.dC,600,B.dz,700,B.dt,800,B.dr,900,B.dk],t.m)
B.el=new A.f(4294962158)
B.eg=new A.f(4294954450)
B.e3=new A.f(4293892762)
B.dZ=new A.f(4293227379)
B.e2=new A.f(4293874512)
B.e5=new A.f(4294198070)
B.dY=new A.f(4293212469)
B.dT=new A.f(4292030255)
B.dQ=new A.f(4291176488)
B.dL=new A.f(4290190364)
B.ap=new A.aa([50,B.el,100,B.eg,200,B.e3,300,B.dZ,400,B.e2,500,B.e5,600,B.dY,700,B.dT,800,B.dQ,900,B.dL],t.m)
B.dX=new A.f(4293128957)
B.dN=new A.f(4290502395)
B.dG=new A.f(4287679225)
B.dw=new A.f(4284790262)
B.dm=new A.f(4282557941)
B.de=new A.f(4280391411)
B.dc=new A.f(4280191205)
B.da=new A.f(4279858898)
B.d9=new A.f(4279592384)
B.d8=new A.f(4279060385)
B.b4=new A.aa([50,B.dX,100,B.dN,200,B.dG,300,B.dw,400,B.dm,500,B.de,600,B.dc,700,B.da,800,B.d9,900,B.d8],t.m)
B.e0=new A.f(4293718001)
B.dS=new A.f(4291811548)
B.dK=new A.f(4289773253)
B.dF=new A.f(4287669422)
B.dB=new A.f(4286091420)
B.du=new A.f(4284513675)
B.ds=new A.f(4283723386)
B.dp=new A.f(4282735204)
B.di=new A.f(4281812815)
B.df=new A.f(4280693304)
B.b5=new A.aa([50,B.e0,100,B.dS,200,B.dK,300,B.dF,400,B.dB,500,B.du,600,B.ds,700,B.dp,800,B.di,900,B.df],t.m)
B.f5=A.c(s([]),t.s)
B.hg=new A.dE(0,{},B.f5,A.aP("dE<u,@>"))
B.eh=new A.f(4294955392)
B.ef=new A.f(4294945600)
B.ee=new A.f(4294938880)
B.ed=new A.f(4294929664)
B.fd=new A.aa([100,B.eh,200,B.ef,400,B.ee,700,B.ed],t.m)
B.aq=new A.aa([B.G,null,B.F,null,B.t,null],A.aP("aa<ch,aT?>"))
B.dM=new A.f(4290377418)
B.dy=new A.f(4285132974)
B.d7=new A.f(4278249078)
B.d6=new A.f(4278241363)
B.fc=new A.aa([100,B.dM,200,B.dy,400,B.d7,700,B.d6],t.m)
B.ff=new A.cX(B.fc,4285132974)
B.es=new A.f(4294967181)
B.er=new A.f(4294967040)
B.ej=new A.f(4294961664)
B.ei=new A.f(4294956544)
B.fe=new A.aa([100,B.es,200,B.er,400,B.ej,700,B.ei],t.m)
B.fg=new A.cX(B.fe,4294967040)
B.b6=new A.cq(B.b2,4294961979)
B.A=new A.cq(B.ap,4294198070)
B.fh=new A.cq(B.b4,4280391411)
B.fS=new A.b_(1,"nonlethal")
B.f2=A.c(s([B.cj,B.fS,B.Q]),t.B)
B.fm=new A.a2(B.af,1,B.ex,0,"Fists",B.f2)
B.b7=new A.cY(0,"wildBoar")
B.fq=new A.cY(1,"zyborgMelee")
B.fr=new A.cY(2,"zyborgRanged")
B.fs=new A.cY(3,"caveScanner")
B.m=new A.Q(0,0)
B.fu=new A.d1(B.a8,t.gm)
B.az=new A.aj(7,"bookshelf")
B.co=new A.du(B.az)
B.cw=new A.aQ(B.a8,B.co,t.A)
B.fv=new A.d1(B.cw,t.gm)
B.ba=new A.h2(2,"elementalAffinity")
B.u=new A.i(0,0)
B.ar=new A.aY(B.m,0,0)
B.as=new A.e7(0,"small")
B.fy=new A.e7(1,"medium")
B.fz=new A.e7(2,"large")
B.at=new A.ea(0,"melee")
B.au=new A.ea(1,"ranged")
B.av=new A.ea(2,"armor")
B.bc=new A.m(0,0)
B.fF=new A.m(0,1)
B.bd=new A.m(0,3)
B.be=new A.m(0,5)
B.bf=new A.m(0,7)
B.bg=new A.m(10,11)
B.bh=new A.m(10,3)
B.bi=new A.m(10,4)
B.bj=new A.m(10,5)
B.bk=new A.m(10,6)
B.bl=new A.m(10,7)
B.fG=new A.m(11,11)
B.bm=new A.m(11,4)
B.bn=new A.m(11,6)
B.fH=new A.m(12,11)
B.bo=new A.m(12,4)
B.bp=new A.m(12,6)
B.fI=new A.m(13,0)
B.bq=new A.m(13,12)
B.br=new A.m(13,2)
B.bs=new A.m(13,4)
B.bt=new A.m(13,6)
B.bu=new A.m(14,4)
B.bv=new A.m(14,6)
B.bw=new A.m(15,2)
B.bx=new A.m(15,4)
B.by=new A.m(15,6)
B.bz=new A.m(1,3)
B.bA=new A.m(1,4)
B.bB=new A.m(1,5)
B.bC=new A.m(1,6)
B.bD=new A.m(1,7)
B.bE=new A.m(2,3)
B.bF=new A.m(2,4)
B.bG=new A.m(2,5)
B.bH=new A.m(2,6)
B.bI=new A.m(2,7)
B.bJ=new A.m(3,3)
B.bK=new A.m(3,4)
B.bL=new A.m(3,5)
B.bM=new A.m(3,6)
B.bN=new A.m(3,7)
B.bO=new A.m(4,3)
B.bP=new A.m(4,4)
B.bQ=new A.m(4,5)
B.bR=new A.m(4,6)
B.bS=new A.m(4,7)
B.fJ=new A.m(5,0)
B.bT=new A.m(5,3)
B.bU=new A.m(5,4)
B.bV=new A.m(5,5)
B.bW=new A.m(5,6)
B.bX=new A.m(5,7)
B.bY=new A.m(6,3)
B.bZ=new A.m(6,4)
B.c_=new A.m(6,5)
B.c0=new A.m(6,6)
B.c1=new A.m(6,7)
B.c2=new A.m(7,3)
B.c3=new A.m(7,4)
B.c4=new A.m(7,5)
B.c5=new A.m(7,6)
B.c6=new A.m(7,7)
B.fK=new A.m(8,12)
B.c7=new A.m(8,3)
B.c8=new A.m(8,4)
B.c9=new A.m(8,5)
B.ca=new A.m(8,6)
B.cb=new A.m(8,7)
B.fL=new A.m(9,12)
B.cc=new A.m(9,3)
B.cd=new A.m(9,4)
B.ce=new A.m(9,5)
B.cf=new A.m(9,6)
B.cg=new A.m(9,7)
B.a4=new A.bW("")
B.aw=new A.cy(0,"dirt")
B.a5=new A.cy(2,"metal")
B.fM=new A.cy(4,"snow")
B.fN=new A.aj(10,"stalagmite")
B.a6=new A.aj(2,"light")
B.v=new A.aj(3,"none")
B.fO=new A.aj(4,"chair")
B.ay=new A.aj(6,"chest")
B.fP=new A.aj(8,"mechanism")
B.fQ=new A.aj(9,"tree")
B.j=new A.d8(0,"floor")
B.b=new A.d8(1,"wall")
B.fR=A.rq("v")
B.w=new A.d9(0,"float_1")
B.f=new A.d9(1,"float_2")
B.ci=new A.d9(3,"float_4")
B.k=new A.d9(4,"texture_1")
B.fX=new A.dh(null,2)})();(function staticFields(){$.kZ=null
$.mY=null
$.mX=null
$.o_=null
$.nW=null
$.o8=null
$.lm=null
$.lu=null
$.mx=null
$.dl=null
$.eL=null
$.eM=null
$.ms=!1
$.E=B.l
$.aO=A.c([],t.hf)
$.n6=0
$.mU=null
$.qb=A.aV(["0",B.bd,"1",B.bz,"2",B.bE,"3",B.bJ,"4",B.bO,"5",B.bT,"6",B.bY,"7",B.c2,"8",B.c7,"9",B.cc," ",B.bc,"-",B.br,"a",B.bC,"b",B.bH,"c",B.bM,"d",B.bR,"e",B.bW,"f",B.c0,"g",B.c5,"h",B.ca,"i",B.cf,"j",B.bk,"k",B.bn,"l",B.bp,"m",B.bt,"n",B.bv,"o",B.by,"p",B.bf,"q",B.bD,"r",B.bI,"s",B.bN,"t",B.bS,"u",B.bX,"v",B.c1,"w",B.c6,"x",B.cb,"y",B.cg,"z",B.bl,"A",B.bA,"B",B.bF,"C",B.bK,"D",B.bP,"E",B.bU,"F",B.bZ,"G",B.c3,"H",B.c8,"I",B.cd,"J",B.bi,"K",B.bm,"L",B.bo,"M",B.bs,"N",B.bu,"O",B.bx,"P",B.be,"Q",B.bB,"R",B.bG,"S",B.bL,"T",B.bQ,"U",B.bV,"V",B.c_,"W",B.c4,"X",B.c9,"Y",B.ce,"Z",B.bj,"/",B.bw,":",B.bh],t.N,A.aP("m"))
$.qa=A.aV(["0",B.bd,"1",B.bz,"2",B.bE,"3",B.bJ,"4",B.bO,"5",B.bT,"6",B.bY,"7",B.c2,"8",B.c7,"9",B.cc," ",B.bc,"-",B.br,"a",B.bC,"b",B.bH,"c",B.bM,"d",B.bR,"e",B.bW,"f",B.c0,"g",B.c5,"h",B.ca,"i",B.cf,"j",B.bk,"k",B.bn,"l",B.bp,"m",B.bt,"n",B.bv,"o",B.by,"p",B.bf,"q",B.bD,"r",B.bI,"s",B.bN,"t",B.bS,"u",B.bX,"v",B.c1,"w",B.c6,"x",B.cb,"y",B.cg,"z",B.bl,"A",B.bA,"B",B.bF,"C",B.bK,"D",B.bP,"E",B.bU,"F",B.bZ,"G",B.c3,"H",B.c8,"I",B.cd,"J",B.bi,"K",B.bm,"L",B.bo,"M",B.bs,"N",B.bu,"O",B.bx,"P",B.be,"Q",B.bB,"R",B.bG,"S",B.bL,"T",B.bQ,"U",B.bV,"V",B.c_,"W",B.c4,"X",B.c9,"Y",B.ce,"Z",B.bj,"/",B.bw,":",B.bh],t.N,A.aP("m"))
$.aS=A.ml("engine")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"rE","oe",()=>A.r2("_$dart_dartClosure"))
s($,"t4","oo",()=>A.bE(A.ku({
toString:function(){return"$receiver$"}})))
s($,"t5","op",()=>A.bE(A.ku({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"t6","oq",()=>A.bE(A.ku(null)))
s($,"t7","or",()=>A.bE(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ta","ou",()=>A.bE(A.ku(void 0)))
s($,"tb","ov",()=>A.bE(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"t9","ot",()=>A.bE(A.ny(null)))
s($,"t8","os",()=>A.bE(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"td","ox",()=>A.bE(A.ny(void 0)))
s($,"tc","ow",()=>A.bE(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"tf","mD",()=>A.pH())
s($,"tr","m_",()=>A.ly(B.fR))
s($,"rC","od",()=>({}))
s($,"rI","mB",()=>B.h.bs(A.m3(),"Opera",0))
s($,"rH","oh",()=>!A.P($.mB())&&B.h.bs(A.m3(),"Trident/",0))
s($,"rG","og",()=>B.h.bs(A.m3(),"Firefox",0))
s($,"rF","of",()=>"-"+$.oi()+"-")
s($,"rJ","oi",()=>{if(A.P($.og()))var r="moz"
else if($.oh())r="ms"
else r=A.P($.mB())?"o":"webkit"
return r})
s($,"rV","on",()=>A.c([$.oO(),$.oP(),$.oQ(),$.oA(),$.oM()],t.ku))
s($,"tV","oO",()=>A.fO(A.eU(4,6,8,4,4,8),new A.lR(),A.c([B.a7],t.V),"death_1.mp3",new A.lS(),B.b7,0,4,"Wild Boar",new A.lT()))
s($,"tT","oM",()=>A.fO(A.eU(4,6,8,4,4,10),new A.lL(),A.c([B.cR],t.V),"death_1.mp3",new A.lM(),B.b7,2,4,"Snow Bear",new A.lN()))
s($,"tW","oP",()=>A.fO(A.eU(4,8,8,4,4,10),new A.lU(),A.c([B.C,B.B,B.R,B.D],t.V),"monster_scream_1.mp3",new A.lV(),B.fq,1,6,"Zyborg",new A.lW()))
s($,"tX","oQ",()=>A.fO(A.eU(4,8,10,4,4,10),new A.lX(),A.c([B.C,B.B,B.R,B.D],t.V),"monster_scream_1.mp3",new A.lY(),B.fr,2,6,"Zyborg Ranged",new A.lZ()))
s($,"tw","oA",()=>A.fO(A.eU(4,6,12,6,4,6),new A.li(),A.c([B.C,B.B,B.R,B.D],t.V),null,new A.lj(),B.fs,3,6,"Cave Scanner",new A.lk()))
s($,"tz","mG",()=>{var r=A.c([A.c1(B.f,"u_resolution"),A.c1(B.w,"u_time"),A.c1(B.f,"u_offset"),A.c1(B.f,"u_origin")],t.o)
return A.aD(A.c([A.mT(35044,A.ne(B.z),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\nuniform vec2 u_origin;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  float dist = distance(snapped_position, (u_origin + vec2(0.5, 0.5)) * vec2(24.0, 36.0)) / 50.0;\n  float rand = -1.0 + random(relative_position) / 2.0;\n  float scale_rate = 0.8 * (u_time);\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(249.0 / 255.0, 168.0 / 255.0, 37.0 / 255.0, scale);\n}\n",r,u.d)})
s($,"tF","oF",()=>{var r=A.c([A.c1(B.f,"u_resolution"),A.c1(B.w,"u_time"),A.c1(B.f,"u_offset"),A.c1(B.f,"u_source"),A.c1(B.f,"u_target")],t.o)
return A.aD(A.c([A.mT(35044,A.ne(B.z),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nuniform vec2 u_source;\nuniform vec2 u_target;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 p0 = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  vec2 p1 = (u_source + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n  vec2 p2 = (u_target + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n\n  if ((p1.x != p2.x) && (p0.x < p1.x && p0.x < p2.x) || (p0.x > p1.x && p0.x > p2.x)) {\n    discard;\n    return;\n  }\n  if ((p1.y != p2.y) && (p0.y < p1.y && p0.y < p2.y) || (p0.y > p1.y && p0.y > p2.y)) {\n    discard;\n    return;\n  }\n\n  float dist = abs( (p2.x - p1.x) * (p1.y - p0.y) - (p1.x - p0.x) * (p2.y - p1.y) ) / sqrt( pow(p2.x - p1.x, 2.0) + pow(p2.y - p1.y, 2.0) );\n  float rand = random(relative_position);\n  float scale_rate = 1.5;\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = 1.0 - smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(0.1, 0.2, 1.0, 0.8 * scale - u_time);\n}\n",r,u.d)})
s($,"rZ","eR",()=>new A.k6())
s($,"rK","oj",()=>A.mg())
s($,"rR","mC",()=>A.me(A.bM(4278780675),A.bM(4279308561),A.bM(4280361249)))
s($,"rS","ok",()=>A.me(A.bM(4279898637),A.bM(4281017118),A.bM(4282858034)))
s($,"rU","om",()=>A.me(A.bM(4279765786),A.bM(4280096038),A.bM(4282463311)))
s($,"rT","ol",()=>$.mC())
s($,"ts","eS",()=>A.mg())
s($,"tu","oz",()=>A.mg())
s($,"tR","mL",()=>A.bF(B.S,new A.lI(),!0))
s($,"tK","mJ",()=>A.bF(B.cn,new A.lB(),!0))
s($,"tO","ds",()=>A.bF(A.mR(B.a9,A.ng(B.a6),t.j),new A.lF(),!0))
s($,"tJ","mI",()=>A.bF(A.mR(B.S,A.ng(B.a6),t.j),new A.lA(),!0))
s($,"tL","oI",()=>A.bF(B.S,new A.lC(),!0))
s($,"tP","mK",()=>A.bF(B.a9,new A.lG(),!0))
s($,"tQ","oK",()=>A.bF(B.fu,new A.lH(),!1))
s($,"tM","iP",()=>A.bF(B.cv,new A.lE(),!0))
s($,"tN","oJ",()=>A.bF(B.cy,new A.lD(),!0))
s($,"tI","oH",()=>A.bF(B.fv,new A.lz(),!0))
s($,"tH","m0",()=>{var r=$.mL(),q=$.mJ()
return A.c([r,q,q,$.ds(),$.iP()],t.D)})
s($,"tG","oG",()=>{var r=$.oH()
return A.c([r,r,r,r,r,$.ds(),$.mL(),$.mJ(),$.iP()],t.D)})
s($,"tE","oE",()=>{var r=$.ds(),q=$.iP()
return A.c([r,r,r,q,q,q],t.D)})
s($,"tC","oC",()=>{var r,q=$.ds(),p=$.mI()
p=A.c([q,q,q,p,p,p,p,p,p],t.D)
for(r=0;r<500;++r)p.push($.oK())
return p})
s($,"tD","oD",()=>{var r,q=$.ds(),p=$.mI()
p=A.c([q,q,q,p,p,p],t.D)
for(r=0;r<10;++r)p.push($.iP())
for(r=0;r<10;++r)p.push($.oJ())
return p})
s($,"tU","oN",()=>A.c([$.oI(),$.ds()],t.D))
s($,"tt","oy",()=>A.po(A.cF(A.c([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t))))
s($,"tA","oB",()=>A.aV([A.b2("ArrowUp",!1,!1,!1),B.eE,A.b2("ArrowDown",!1,!1,!1),B.eM,A.b2("ArrowRight",!1,!1,!1),B.eI,A.b2("ArrowLeft",!1,!1,!1),B.eN,A.b2("q",!1,!1,!1),B.eO,A.b2(" ",!1,!1,!1),B.eF,A.b2("0",!1,!1,!1),B.eH,A.b2("l",!1,!1,!1),B.eP,A.b2("Escape",!1,!1,!1),B.eL,A.b2("r",!1,!1,!1),B.eJ,A.b2("e",!1,!1,!1),B.eG,A.b2("p",!1,!1,!1),B.eK],A.aP("aF"),t.h8))
s($,"tv","mE",()=>t.jQ.a(A.r_().querySelector("#glCanvas")))
s($,"tB","mH",()=>A.aP("d4").a(B.aa.dn($.mE(),"webgl2")))
s($,"tS","oL",()=>new A.jo())
s($,"ty","mF",()=>A.p7($.mE(),$.mH(),$.oL()))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.fP,DataView:A.cu,ArrayBufferView:A.cu,Float64Array:A.ct,Float32Array:A.dZ,Int16Array:A.fQ,Int32Array:A.fR,Int8Array:A.fS,Uint16Array:A.fT,Uint32Array:A.fU,Uint8ClampedArray:A.d_,CanvasPixelArray:A.d_,Uint8Array:A.e0,HTMLBRElement:A.q,HTMLBaseElement:A.q,HTMLButtonElement:A.q,HTMLContentElement:A.q,HTMLDListElement:A.q,HTMLDataElement:A.q,HTMLDataListElement:A.q,HTMLDetailsElement:A.q,HTMLDialogElement:A.q,HTMLDivElement:A.q,HTMLEmbedElement:A.q,HTMLFieldSetElement:A.q,HTMLHRElement:A.q,HTMLHeadElement:A.q,HTMLHeadingElement:A.q,HTMLHtmlElement:A.q,HTMLIFrameElement:A.q,HTMLInputElement:A.q,HTMLLIElement:A.q,HTMLLabelElement:A.q,HTMLLegendElement:A.q,HTMLLinkElement:A.q,HTMLMapElement:A.q,HTMLMenuElement:A.q,HTMLMetaElement:A.q,HTMLMeterElement:A.q,HTMLModElement:A.q,HTMLOListElement:A.q,HTMLObjectElement:A.q,HTMLOptGroupElement:A.q,HTMLOptionElement:A.q,HTMLOutputElement:A.q,HTMLParagraphElement:A.q,HTMLParamElement:A.q,HTMLPictureElement:A.q,HTMLPreElement:A.q,HTMLProgressElement:A.q,HTMLQuoteElement:A.q,HTMLScriptElement:A.q,HTMLShadowElement:A.q,HTMLSlotElement:A.q,HTMLSourceElement:A.q,HTMLSpanElement:A.q,HTMLStyleElement:A.q,HTMLTableCaptionElement:A.q,HTMLTableCellElement:A.q,HTMLTableDataCellElement:A.q,HTMLTableHeaderCellElement:A.q,HTMLTableColElement:A.q,HTMLTableElement:A.q,HTMLTableRowElement:A.q,HTMLTableSectionElement:A.q,HTMLTemplateElement:A.q,HTMLTextAreaElement:A.q,HTMLTimeElement:A.q,HTMLTitleElement:A.q,HTMLTrackElement:A.q,HTMLUListElement:A.q,HTMLUnknownElement:A.q,HTMLDirectoryElement:A.q,HTMLFontElement:A.q,HTMLFrameElement:A.q,HTMLFrameSetElement:A.q,HTMLMarqueeElement:A.q,HTMLElement:A.q,AccessibleNodeList:A.iS,HTMLAnchorElement:A.eX,HTMLAreaElement:A.eY,Blob:A.f3,HTMLBodyElement:A.f4,HTMLCanvasElement:A.cb,CDATASection:A.bc,CharacterData:A.bc,Comment:A.bc,ProcessingInstruction:A.bc,Text:A.bc,CSSPerspective:A.jc,CSSCharsetRule:A.I,CSSConditionRule:A.I,CSSFontFaceRule:A.I,CSSGroupingRule:A.I,CSSImportRule:A.I,CSSKeyframeRule:A.I,MozCSSKeyframeRule:A.I,WebKitCSSKeyframeRule:A.I,CSSKeyframesRule:A.I,MozCSSKeyframesRule:A.I,WebKitCSSKeyframesRule:A.I,CSSMediaRule:A.I,CSSNamespaceRule:A.I,CSSPageRule:A.I,CSSRule:A.I,CSSStyleRule:A.I,CSSSupportsRule:A.I,CSSViewportRule:A.I,CSSStyleDeclaration:A.cQ,MSStyleCSSProperties:A.cQ,CSS2Properties:A.cQ,CSSImageValue:A.b0,CSSKeywordValue:A.b0,CSSNumericValue:A.b0,CSSPositionValue:A.b0,CSSResourceValue:A.b0,CSSUnitValue:A.b0,CSSURLImageValue:A.b0,CSSStyleValue:A.b0,CSSMatrixComponent:A.bt,CSSRotation:A.bt,CSSScale:A.bt,CSSSkew:A.bt,CSSTranslation:A.bt,CSSTransformComponent:A.bt,CSSTransformValue:A.je,CSSUnparsedValue:A.jf,DataTransferItemList:A.jg,Document:A.bu,HTMLDocument:A.bu,XMLDocument:A.bu,DOMException:A.bR,ClientRectList:A.dG,DOMRectList:A.dG,DOMRectReadOnly:A.dH,DOMStringList:A.fl,DOMTokenList:A.jh,Element:A.a7,AbortPaymentEvent:A.k,AnimationEvent:A.k,AnimationPlaybackEvent:A.k,ApplicationCacheErrorEvent:A.k,BackgroundFetchClickEvent:A.k,BackgroundFetchEvent:A.k,BackgroundFetchFailEvent:A.k,BackgroundFetchedEvent:A.k,BeforeInstallPromptEvent:A.k,BeforeUnloadEvent:A.k,BlobEvent:A.k,CanMakePaymentEvent:A.k,ClipboardEvent:A.k,CloseEvent:A.k,CustomEvent:A.k,DeviceMotionEvent:A.k,DeviceOrientationEvent:A.k,ErrorEvent:A.k,ExtendableEvent:A.k,ExtendableMessageEvent:A.k,FetchEvent:A.k,FontFaceSetLoadEvent:A.k,ForeignFetchEvent:A.k,GamepadEvent:A.k,HashChangeEvent:A.k,InstallEvent:A.k,MediaEncryptedEvent:A.k,MediaKeyMessageEvent:A.k,MediaQueryListEvent:A.k,MediaStreamEvent:A.k,MediaStreamTrackEvent:A.k,MessageEvent:A.k,MIDIConnectionEvent:A.k,MIDIMessageEvent:A.k,MutationEvent:A.k,NotificationEvent:A.k,PageTransitionEvent:A.k,PaymentRequestEvent:A.k,PaymentRequestUpdateEvent:A.k,PopStateEvent:A.k,PresentationConnectionAvailableEvent:A.k,PresentationConnectionCloseEvent:A.k,ProgressEvent:A.k,PromiseRejectionEvent:A.k,PushEvent:A.k,RTCDataChannelEvent:A.k,RTCDTMFToneChangeEvent:A.k,RTCPeerConnectionIceEvent:A.k,RTCTrackEvent:A.k,SecurityPolicyViolationEvent:A.k,SensorErrorEvent:A.k,SpeechRecognitionError:A.k,SpeechRecognitionEvent:A.k,SpeechSynthesisEvent:A.k,StorageEvent:A.k,SyncEvent:A.k,TrackEvent:A.k,TransitionEvent:A.k,WebKitTransitionEvent:A.k,VRDeviceEvent:A.k,VRDisplayEvent:A.k,VRSessionEvent:A.k,MojoInterfaceRequestEvent:A.k,ResourceProgressEvent:A.k,USBConnectionEvent:A.k,IDBVersionChangeEvent:A.k,AudioProcessingEvent:A.k,OfflineAudioCompletionEvent:A.k,WebGLContextEvent:A.k,Event:A.k,InputEvent:A.k,SubmitEvent:A.k,AbsoluteOrientationSensor:A.e,Accelerometer:A.e,AccessibleNode:A.e,AmbientLightSensor:A.e,Animation:A.e,ApplicationCache:A.e,DOMApplicationCache:A.e,OfflineResourceList:A.e,BackgroundFetchRegistration:A.e,BatteryManager:A.e,BroadcastChannel:A.e,CanvasCaptureMediaStreamTrack:A.e,DedicatedWorkerGlobalScope:A.e,EventSource:A.e,FileReader:A.e,FontFaceSet:A.e,Gyroscope:A.e,LinearAccelerationSensor:A.e,Magnetometer:A.e,MediaDevices:A.e,MediaKeySession:A.e,MediaQueryList:A.e,MediaRecorder:A.e,MediaSource:A.e,MediaStream:A.e,MediaStreamTrack:A.e,MessagePort:A.e,MIDIAccess:A.e,MIDIInput:A.e,MIDIOutput:A.e,MIDIPort:A.e,NetworkInformation:A.e,Notification:A.e,OffscreenCanvas:A.e,OrientationSensor:A.e,PaymentRequest:A.e,Performance:A.e,PermissionStatus:A.e,PresentationAvailability:A.e,PresentationConnection:A.e,PresentationConnectionList:A.e,PresentationRequest:A.e,RelativeOrientationSensor:A.e,RemotePlayback:A.e,RTCDataChannel:A.e,DataChannel:A.e,RTCDTMFSender:A.e,RTCPeerConnection:A.e,webkitRTCPeerConnection:A.e,mozRTCPeerConnection:A.e,ScreenOrientation:A.e,Sensor:A.e,ServiceWorker:A.e,ServiceWorkerContainer:A.e,ServiceWorkerGlobalScope:A.e,ServiceWorkerRegistration:A.e,SharedWorker:A.e,SharedWorkerGlobalScope:A.e,SpeechRecognition:A.e,SpeechSynthesis:A.e,SpeechSynthesisUtterance:A.e,VR:A.e,VRDevice:A.e,VRDisplay:A.e,VRSession:A.e,VisualViewport:A.e,WebSocket:A.e,Worker:A.e,WorkerGlobalScope:A.e,WorkerPerformance:A.e,BluetoothDevice:A.e,BluetoothRemoteGATTCharacteristic:A.e,Clipboard:A.e,MojoInterfaceInterceptor:A.e,USB:A.e,IDBDatabase:A.e,IDBOpenDBRequest:A.e,IDBVersionChangeRequest:A.e,IDBRequest:A.e,IDBTransaction:A.e,EventTarget:A.e,File:A.aB,FileList:A.fr,FileWriter:A.fs,HTMLFormElement:A.fv,Gamepad:A.aC,History:A.jC,HTMLCollection:A.cj,HTMLFormControlsCollection:A.cj,HTMLOptionsCollection:A.cj,XMLHttpRequest:A.dO,XMLHttpRequestUpload:A.ck,XMLHttpRequestEventTarget:A.ck,HTMLImageElement:A.cU,KeyboardEvent:A.bx,Location:A.jS,HTMLAudioElement:A.cr,HTMLMediaElement:A.cr,MediaList:A.jX,MIDIInputMap:A.fL,MIDIOutputMap:A.fM,MimeType:A.aG,MimeTypeArray:A.fN,MouseEvent:A.aH,DragEvent:A.aH,PointerEvent:A.aH,WheelEvent:A.aH,DocumentFragment:A.w,ShadowRoot:A.w,Attr:A.w,DocumentType:A.w,Node:A.w,NodeList:A.e1,RadioNodeList:A.e1,Plugin:A.aI,PluginArray:A.h4,RTCStatsReport:A.hb,HTMLSelectElement:A.hd,SourceBuffer:A.ax,SourceBufferList:A.hh,SpeechGrammar:A.aJ,SpeechGrammarList:A.hi,SpeechRecognitionResult:A.aK,Storage:A.hl,CSSStyleSheet:A.ai,StyleSheet:A.ai,TextTrack:A.ay,TextTrackCue:A.ac,VTTCue:A.ac,TextTrackCueList:A.hs,TextTrackList:A.ht,TimeRanges:A.kr,Touch:A.aL,TouchList:A.hv,TrackDefaultList:A.ks,CompositionEvent:A.bi,FocusEvent:A.bi,TextEvent:A.bi,TouchEvent:A.bi,UIEvent:A.bi,URL:A.kw,HTMLVideoElement:A.db,VideoTrackList:A.hE,Window:A.dc,DOMWindow:A.dc,CSSRuleList:A.hN,ClientRect:A.ej,DOMRect:A.ej,GamepadList:A.hZ,NamedNodeMap:A.eq,MozNamedAttrMap:A.eq,SpeechRecognitionResultList:A.ik,StyleSheetList:A.is,SVGLength:A.aU,SVGLengthList:A.fG,SVGNumber:A.aX,SVGNumberList:A.fZ,SVGPointList:A.k8,SVGStringList:A.hn,SVGAElement:A.n,SVGAnimateElement:A.n,SVGAnimateMotionElement:A.n,SVGAnimateTransformElement:A.n,SVGAnimationElement:A.n,SVGCircleElement:A.n,SVGClipPathElement:A.n,SVGDefsElement:A.n,SVGDescElement:A.n,SVGDiscardElement:A.n,SVGEllipseElement:A.n,SVGFEBlendElement:A.n,SVGFEColorMatrixElement:A.n,SVGFEComponentTransferElement:A.n,SVGFECompositeElement:A.n,SVGFEConvolveMatrixElement:A.n,SVGFEDiffuseLightingElement:A.n,SVGFEDisplacementMapElement:A.n,SVGFEDistantLightElement:A.n,SVGFEFloodElement:A.n,SVGFEFuncAElement:A.n,SVGFEFuncBElement:A.n,SVGFEFuncGElement:A.n,SVGFEFuncRElement:A.n,SVGFEGaussianBlurElement:A.n,SVGFEImageElement:A.n,SVGFEMergeElement:A.n,SVGFEMergeNodeElement:A.n,SVGFEMorphologyElement:A.n,SVGFEOffsetElement:A.n,SVGFEPointLightElement:A.n,SVGFESpecularLightingElement:A.n,SVGFESpotLightElement:A.n,SVGFETileElement:A.n,SVGFETurbulenceElement:A.n,SVGFilterElement:A.n,SVGForeignObjectElement:A.n,SVGGElement:A.n,SVGGeometryElement:A.n,SVGGraphicsElement:A.n,SVGImageElement:A.n,SVGLineElement:A.n,SVGLinearGradientElement:A.n,SVGMarkerElement:A.n,SVGMaskElement:A.n,SVGMetadataElement:A.n,SVGPathElement:A.n,SVGPatternElement:A.n,SVGPolygonElement:A.n,SVGPolylineElement:A.n,SVGRadialGradientElement:A.n,SVGRectElement:A.n,SVGScriptElement:A.n,SVGSetElement:A.n,SVGStopElement:A.n,SVGStyleElement:A.n,SVGElement:A.n,SVGSVGElement:A.n,SVGSwitchElement:A.n,SVGSymbolElement:A.n,SVGTSpanElement:A.n,SVGTextContentElement:A.n,SVGTextElement:A.n,SVGTextPathElement:A.n,SVGTextPositioningElement:A.n,SVGTitleElement:A.n,SVGUseElement:A.n,SVGViewElement:A.n,SVGGradientElement:A.n,SVGComponentTransferFunctionElement:A.n,SVGFEDropShadowElement:A.n,SVGMPathElement:A.n,SVGTransform:A.aZ,SVGTransformList:A.hw,AudioBuffer:A.ba,AudioBufferSourceNode:A.dB,AudioContext:A.ca,webkitAudioContext:A.ca,AnalyserNode:A.H,RealtimeAnalyserNode:A.H,AudioDestinationNode:A.H,AudioWorkletNode:A.H,BiquadFilterNode:A.H,ChannelMergerNode:A.H,AudioChannelMerger:A.H,ChannelSplitterNode:A.H,AudioChannelSplitter:A.H,ConvolverNode:A.H,DelayNode:A.H,DynamicsCompressorNode:A.H,IIRFilterNode:A.H,MediaElementAudioSourceNode:A.H,MediaStreamAudioDestinationNode:A.H,MediaStreamAudioSourceNode:A.H,PannerNode:A.H,AudioPannerNode:A.H,webkitAudioPannerNode:A.H,ScriptProcessorNode:A.H,JavaScriptAudioNode:A.H,StereoPannerNode:A.H,WaveShaperNode:A.H,AudioNode:A.H,AudioParam:A.eZ,AudioParamMap:A.f_,ConstantSourceNode:A.bs,OscillatorNode:A.bs,Oscillator:A.bs,AudioScheduledSourceNode:A.bs,AudioTrackList:A.f0,BaseAudioContext:A.dC,GainNode:A.cT,AudioGainNode:A.cT,OfflineAudioContext:A.h_,WebGLBuffer:A.f7,WebGLFramebuffer:A.fx,WebGLProgram:A.h5,WebGL2RenderingContext:A.d4,WebGLTexture:A.bD,WebGLUniformLocation:A.hy,WebGLVertexArrayObject:A.hD})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,AudioParam:true,AudioParamMap:true,ConstantSourceNode:true,OscillatorNode:true,Oscillator:true,AudioScheduledSourceNode:false,AudioTrackList:true,BaseAudioContext:false,GainNode:true,AudioGainNode:true,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true})
A.cZ.$nativeSuperclassTag="ArrayBufferView"
A.er.$nativeSuperclassTag="ArrayBufferView"
A.es.$nativeSuperclassTag="ArrayBufferView"
A.ct.$nativeSuperclassTag="ArrayBufferView"
A.et.$nativeSuperclassTag="ArrayBufferView"
A.eu.$nativeSuperclassTag="ArrayBufferView"
A.e_.$nativeSuperclassTag="ArrayBufferView"
A.ew.$nativeSuperclassTag="EventTarget"
A.ex.$nativeSuperclassTag="EventTarget"
A.eC.$nativeSuperclassTag="EventTarget"
A.eD.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.my
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

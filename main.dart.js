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
a[c]=function(){a[c]=function(){A.uq(b)}
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
if(a[b]!==s)A.ur(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.o4(b)
return new s(c,this)}:function(){if(s===null)s=A.o4(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.o4(a).prototype
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
a(hunkHelpers,v,w,$)}var A={nF:function nF(){},
oJ(a){return new A.cB("Field '"+a+"' has been assigned during initialization.")},
oK(a){return new A.cB("Field '"+a+"' has not been initialized.")},
cc(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
nM(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
rw(a,b,c){return A.nM(A.cc(A.cc(c,a),b))},
cW(a,b,c){return a},
p3(a,b,c,d){A.lA(b,"start")
if(c!=null){A.lA(c,"end")
if(b>c)A.W(A.c9(b,0,c,"start",null))}return new A.eK(a,b,c,d.i("eK<0>"))},
oN(a,b,c,d){if(t.gt.b(a))return new A.ec(a,b,c.i("@<0>").L(d).i("ec<1,2>"))
return new A.cE(a,b,c.i("@<0>").L(d).i("cE<1,2>"))},
kZ(){return new A.bj("No element")},
oF(){return new A.bj("Too many elements")},
r7(){return new A.bj("Too few elements")},
ru(a,b,c){A.hM(a,0,J.aw(a)-1,b,c)},
hM(a,b,c,d,e){if(c-b<=32)A.oZ(a,b,c,d,e)
else A.oY(a,b,c,d,e)},
oZ(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aN(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ab()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
oY(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.f.af(a5-a4+1,6),i=a4+j,h=a5-j,g=B.f.af(a4+a5,2),f=g-j,e=g+j,d=J.aN(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ab()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ab()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ab()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ab()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ab()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ab()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ab()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ab()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ab()
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
A.hM(a3,a4,r-2,a6,a7)
A.hM(a3,q+2,a5,a6,a7)
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
break}}A.hM(a3,r,q,a6,a7)}else A.hM(a3,r,q,a6,a7)},
cB:function cB(a){this.a=a},
lF:function lF(){},
o:function o(){},
bg:function bg(){},
eK:function eK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bQ:function bQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cE:function cE(a,b,c){this.a=a
this.b=b
this.$ti=c},
ec:function ec(a,b,c){this.a=a
this.b=b
this.$ti=c},
eu:function eu(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
cF:function cF(a,b,c){this.a=a
this.b=b
this.$ti=c},
b1:function b1(a,b,c){this.a=a
this.b=b
this.$ti=c},
eN:function eN(a,b,c){this.a=a
this.b=b
this.$ti=c},
ay:function ay(){},
r4(a){if(typeof a=="number")return B.b.gF(a)
if(t.ha.b(a))return A.cL(a)
return A.n4(a)},
r5(a){return new A.kL(a)},
pO(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
uc(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
G(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.co(a)
return s},
cL(a){var s,r,q=$.oR
if(q==null){s=Symbol("identityHashCode")
q=$.oR=s}r=a[q]
if(r==null){r=Math.random()*0x3fffffff|0
a[q]=r}return r},
lv(a){return A.rk(a)},
rk(a){var s,r,q,p
if(a instanceof A.v)return A.av(A.ba(a),null)
if(J.dT(a)===B.fI||t.cx.b(a)){s=B.bm(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.av(A.ba(a),null)},
ds(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
rr(a){var s=A.ds(a).getUTCFullYear()+0
return s},
rp(a){var s=A.ds(a).getUTCMonth()+1
return s},
rl(a){var s=A.ds(a).getUTCDate()+0
return s},
rm(a){var s=A.ds(a).getUTCHours()+0
return s},
ro(a){var s=A.ds(a).getUTCMinutes()+0
return s},
rq(a){var s=A.ds(a).getUTCSeconds()+0
return s},
rn(a){var s=A.ds(a).getUTCMilliseconds()+0
return s},
cZ(a){throw A.c(A.pu(a))},
a(a,b){if(a==null)J.aw(a)
throw A.c(A.cX(a,b))},
cX(a,b){var s,r="index"
if(!A.o1(b))return new A.bI(!0,b,r,null)
s=A.N(J.aw(a))
if(b<0||b>=s)return A.a0(b,a,r,null,s)
return A.oT(b,r)},
pu(a){return new A.bI(!0,a,null,null)},
c(a){var s,r
if(a==null)a=new A.hs()
s=new Error()
s.dartException=a
r=A.us
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
us(){return J.co(this.dartException)},
W(a){throw A.c(a)},
w(a){throw A.c(A.b4(a))},
bV(a){var s,r,q,p,o,n
a=A.un(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.lY(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
lZ(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
p6(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
nG(a,b){var s=b==null,r=s?null:b.method
return new A.h9(a,r,s?null:b.receiver)},
bE(a){if(a==null)return new A.lq(a)
if(a instanceof A.ed)return A.cn(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.cn(a,a.dartException)
return A.tG(a)},
cn(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
tG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.f.d8(r,16)&8191)===10)switch(q){case 438:return A.cn(a,A.nG(A.G(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.G(s)+" (Error "+q+")"
return A.cn(a,new A.eB(p,e))}}if(a instanceof TypeError){o=$.pZ()
n=$.q_()
m=$.q0()
l=$.q1()
k=$.q4()
j=$.q5()
i=$.q3()
$.q2()
h=$.q7()
g=$.q6()
f=o.an(s)
if(f!=null)return A.cn(a,A.nG(A.a6(s),f))
else{f=n.an(s)
if(f!=null){f.method="call"
return A.cn(a,A.nG(A.a6(s),f))}else{f=m.an(s)
if(f==null){f=l.an(s)
if(f==null){f=k.an(s)
if(f==null){f=j.an(s)
if(f==null){f=i.an(s)
if(f==null){f=l.an(s)
if(f==null){f=h.an(s)
if(f==null){f=g.an(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.a6(s)
return A.cn(a,new A.eB(s,f==null?e:f.method))}}}return A.cn(a,new A.i9(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.eJ()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.cn(a,new A.bI(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.eJ()
return a},
c1(a){var s
if(a instanceof A.ed)return a.b
if(a==null)return new A.f6(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.f6(a)},
n4(a){if(a==null||typeof a!="object")return J.aO(a)
else return A.cL(a)},
pA(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
u1(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
ua(a,b,c,d,e,f){t.gY.a(a)
switch(A.N(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(A.nC("Unsupported number of arguments for wrapped closure"))},
bD(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ua)
a.$identity=s
return s},
qN(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.hS().constructor.prototype):Object.create(new A.d9(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.ox(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.qJ(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.ox(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
qJ(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.qH)}throw A.c("Error in functionType of tearoff")},
qK(a,b,c,d){var s=A.ou
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ox(a,b,c,d){var s,r
if(c)return A.qM(a,b,d)
s=b.length
r=A.qK(s,d,a,b)
return r},
qL(a,b,c,d){var s=A.ou,r=A.qI
switch(b?-1:a){case 0:throw A.c(new A.hI("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
qM(a,b,c){var s,r,q,p=$.os
p==null?$.os=A.or("interceptor"):p
s=$.ot
s==null?$.ot=A.or("receiver"):s
r=b.length
q=A.qL(r,c,a,b)
return q},
o4(a){return A.qN(a)},
qH(a,b){return A.mG(v.typeUniverse,A.ba(a.a),b)},
ou(a){return a.a},
qI(a){return a.b},
or(a){var s,r,q,p=new A.d9("receiver","interceptor"),o=J.oH(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.c(A.d2("Field name "+a+" not found.",null))},
U(a){if(a==null)A.tM("boolean expression must not be null")
return a},
tM(a){throw A.c(new A.ik(a))},
uq(a){throw A.c(new A.fK(a))},
u5(a){return v.getIsolateTag(a)},
vE(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ug(a){var s,r,q,p,o,n=A.a6($.pB.$1(a)),m=$.mT[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.n_[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.t2($.pt.$2(a,n))
if(q!=null){m=$.mT[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.n_[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.n3(s)
$.mT[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.n_[n]=s
return s}if(p==="-"){o=A.n3(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.pK(a,s)
if(p==="*")throw A.c(A.nQ(n))
if(v.leafTags[n]===true){o=A.n3(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.pK(a,s)},
pK(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.o7(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
n3(a){return J.o7(a,!1,null,!!a.$iD)},
uh(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.n3(s)
else return J.o7(s,c,null,null)},
u8(){if(!0===$.o5)return
$.o5=!0
A.u9()},
u9(){var s,r,q,p,o,n,m,l
$.mT=Object.create(null)
$.n_=Object.create(null)
A.u7()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.pL.$1(o)
if(n!=null){m=A.uh(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
u7(){var s,r,q,p,o,n,m=B.dD()
m=A.dS(B.dE,A.dS(B.dF,A.dS(B.bn,A.dS(B.bn,A.dS(B.dG,A.dS(B.dH,A.dS(B.dI(B.bm),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.pB=new A.mX(p)
$.pt=new A.mY(o)
$.pL=new A.mZ(n)},
dS(a,b){return a(b)||b},
un(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
db:function db(){},
e6:function e6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
af:function af(a,b){this.a=a
this.$ti=b},
kL:function kL(a){this.a=a},
lY:function lY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eB:function eB(a,b){this.a=a
this.b=b},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a){this.a=a},
lq:function lq(a){this.a=a},
ed:function ed(a,b){this.a=a
this.b=b},
f6:function f6(a){this.a=a
this.b=null},
cs:function cs(){},
fD:function fD(){},
fE:function fE(){},
hY:function hY(){},
hS:function hS(){},
d9:function d9(a,b){this.a=a
this.b=b},
hI:function hI(a){this.a=a},
ik:function ik(a){this.a=a},
aT:function aT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
l3:function l3(a){this.a=a},
l2:function l2(a){this.a=a},
l9:function l9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eq:function eq(a,b){this.a=a
this.$ti=b},
er:function er(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
mX:function mX(a){this.a=a},
mY:function mY(a){this.a=a},
mZ:function mZ(a){this.a=a},
ur(a){return A.W(A.oJ(a))},
nR(a){var s=new A.mf(a)
return s.b=s},
dQ(a,b){if(a===$)throw A.c(A.oK(b))
return a},
aK(a,b){if(a!==$)throw A.c(A.oJ(b))},
mf:function mf(a){this.a=a
this.b=null},
pj(a,b,c){},
cU(a){return a},
oO(a){return new Float32Array(A.cU(a))},
c8(a,b,c){A.pj(a,b,c)
return new Float32Array(a,b,c)},
oP(a,b,c){var s
A.pj(a,b,c)
s=new Uint8Array(a,b,c)
return s},
ri(a){return new Uint8Array(a)},
c0(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.cX(b,a))},
hk:function hk(){},
cJ:function cJ(){},
dp:function dp(){},
cI:function cI(){},
ew:function ew(){},
ev:function ev(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
ex:function ex(){},
ey:function ey(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
oV(a,b){var s=b.c
return s==null?b.c=A.nY(a,b.z,!0):s},
oU(a,b){var s=b.c
return s==null?b.c=A.fe(a,"al",[b.z]):s},
oW(a){var s=a.y
if(s===6||s===7||s===8)return A.oW(a.z)
return s===11||s===12},
rt(a){return a.cy},
ap(a){return A.jg(v.typeUniverse,a,!1)},
cl(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.cl(a,s,a0,a1)
if(r===s)return b
return A.pg(a,r,!0)
case 7:s=b.z
r=A.cl(a,s,a0,a1)
if(r===s)return b
return A.nY(a,r,!0)
case 8:s=b.z
r=A.cl(a,s,a0,a1)
if(r===s)return b
return A.pf(a,r,!0)
case 9:q=b.Q
p=A.fk(a,q,a0,a1)
if(p===q)return b
return A.fe(a,b.z,p)
case 10:o=b.z
n=A.cl(a,o,a0,a1)
m=b.Q
l=A.fk(a,m,a0,a1)
if(n===o&&l===m)return b
return A.nW(a,n,l)
case 11:k=b.z
j=A.cl(a,k,a0,a1)
i=b.Q
h=A.tD(a,i,a0,a1)
if(j===k&&h===i)return b
return A.pe(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.fk(a,g,a0,a1)
o=b.z
n=A.cl(a,o,a0,a1)
if(f===g&&n===o)return b
return A.nX(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.c(A.jA("Attempted to substitute unexpected RTI kind "+c))}},
fk(a,b,c,d){var s,r,q,p,o=b.length,n=A.mI(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.cl(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
tE(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.mI(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.cl(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
tD(a,b,c,d){var s,r=b.a,q=A.fk(a,r,c,d),p=b.b,o=A.fk(a,p,c,d),n=b.c,m=A.tE(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.iC()
s.a=q
s.b=o
s.c=m
return s},
b(a,b){a[v.arrayRti]=b
return a},
tT(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.u6(s)
return a.$S()}return null},
pD(a,b){var s
if(A.oW(b))if(a instanceof A.cs){s=A.tT(a)
if(s!=null)return s}return A.ba(a)},
ba(a){var s
if(a instanceof A.v){s=a.$ti
return s!=null?s:A.o_(a)}if(Array.isArray(a))return A.T(a)
return A.o_(J.dT(a))},
T(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
E(a){var s=a.$ti
return s!=null?s:A.o_(a)},
o_(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.tk(a,s)},
tk(a,b){var s=a instanceof A.cs?a.__proto__.__proto__.constructor:b,r=A.t_(v.typeUniverse,s.name)
b.$ccache=r
return r},
u6(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.jg(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
tZ(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.fc(a)
q=A.jg(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.fc(q):p},
ut(a){return A.tZ(A.jg(v.typeUniverse,a,!1))},
tj(a){var s,r,q,p,o=this
if(o===t.K)return A.dP(o,a,A.to)
if(!A.c2(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.dP(o,a,A.tr)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.o1
else if(r===t.R||r===t.cZ)q=A.tn
else if(r===t.N)q=A.tp
else q=r===t.k4?A.mL:null
if(q!=null)return A.dP(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.ud)){o.r="$i"+p
if(p==="m")return A.dP(o,a,A.tm)
return A.dP(o,a,A.tq)}}else if(s===7)return A.dP(o,a,A.th)
return A.dP(o,a,A.tf)},
dP(a,b,c){a.b=c
return a.b(b)},
ti(a){var s,r=this,q=A.te
if(!A.c2(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.t3
else if(r===t.K)q=A.t1
else{s=A.fl(r)
if(s)q=A.tg}r.a=q
return r.a(a)},
mM(a){var s,r=a.y
if(!A.c2(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&A.mM(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
tf(a){var s=this
if(a==null)return A.mM(s)
return A.a2(v.typeUniverse,A.pD(a,s),null,s,null)},
th(a){if(a==null)return!0
return this.z.b(a)},
tq(a){var s,r=this
if(a==null)return A.mM(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dT(a)[s]},
tm(a){var s,r=this
if(a==null)return A.mM(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dT(a)[s]},
te(a){var s,r=this
if(a==null){s=A.fl(r)
if(s)return a}else if(r.b(a))return a
A.pm(a,r)},
tg(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.pm(a,s)},
pm(a,b){throw A.c(A.pd(A.p9(a,A.pD(a,b),A.av(b,null))))},
tS(a,b,c,d){var s=null
if(A.a2(v.typeUniverse,a,s,b,s))return a
throw A.c(A.pd("The type argument '"+A.av(a,s)+"' is not a subtype of the type variable bound '"+A.av(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
p9(a,b,c){var s=A.fS(a),r=A.av(b==null?A.ba(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
pd(a){return new A.fd("TypeError: "+a)},
au(a,b){return new A.fd("TypeError: "+A.p9(a,null,b))},
to(a){return a!=null},
t1(a){if(a!=null)return a
throw A.c(A.au(a,"Object"))},
tr(a){return!0},
t3(a){return a},
mL(a){return!0===a||!1===a},
vl(a){if(!0===a)return!0
if(!1===a)return!1
throw A.c(A.au(a,"bool"))},
vn(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.au(a,"bool"))},
vm(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.au(a,"bool?"))},
nZ(a){if(typeof a=="number")return a
throw A.c(A.au(a,"double"))},
vp(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.au(a,"double"))},
vo(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.au(a,"double?"))},
o1(a){return typeof a=="number"&&Math.floor(a)===a},
N(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.c(A.au(a,"int"))},
vr(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.au(a,"int"))},
vq(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.au(a,"int?"))},
tn(a){return typeof a=="number"},
bm(a){if(typeof a=="number")return a
throw A.c(A.au(a,"num"))},
vt(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.au(a,"num"))},
vs(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.au(a,"num?"))},
tp(a){return typeof a=="string"},
a6(a){if(typeof a=="string")return a
throw A.c(A.au(a,"String"))},
vu(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.au(a,"String"))},
t2(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.au(a,"String?"))},
tz(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.av(a[q],b)
return s},
pn(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.k(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.a(a5,j)
m=B.i.v(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.av(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.av(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.av(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.av(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.av(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
av(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.av(a.z,b)
return s}if(l===7){r=a.z
s=A.av(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.av(a.z,b)+">"
if(l===9){p=A.tF(a.z)
o=a.Q
return o.length>0?p+("<"+A.tz(o,b)+">"):p}if(l===11)return A.pn(a,b,null)
if(l===12)return A.pn(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
tF(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
t0(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
t_(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.jg(a,b,!1)
else if(typeof m=="number"){s=m
r=A.ff(a,5,"#")
q=A.mI(s)
for(p=0;p<s;++p)q[p]=r
o=A.fe(a,b,q)
n[b]=o
return o}else return m},
rY(a,b){return A.ph(a.tR,b)},
rX(a,b){return A.ph(a.eT,b)},
jg(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.pc(A.pa(a,null,b,c))
r.set(b,s)
return s},
mG(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.pc(A.pa(a,b,c,!0))
q.set(c,r)
return r},
rZ(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.nW(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
ck(a,b){b.a=A.ti
b.b=A.tj
return b},
ff(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bh(null,null)
s.y=b
s.cy=c
r=A.ck(a,s)
a.eC.set(c,r)
return r},
pg(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.rV(a,b,r,c)
a.eC.set(r,s)
return s},
rV(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.c2(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.bh(null,null)
q.y=6
q.z=b
q.cy=c
return A.ck(a,q)},
nY(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.rU(a,b,r,c)
a.eC.set(r,s)
return s},
rU(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.c2(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.fl(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.fl(q.z))return q
else return A.oV(a,b)}}p=new A.bh(null,null)
p.y=7
p.z=b
p.cy=c
return A.ck(a,p)},
pf(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.rS(a,b,r,c)
a.eC.set(r,s)
return s},
rS(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.c2(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.fe(a,"al",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.bh(null,null)
q.y=8
q.z=b
q.cy=c
return A.ck(a,q)},
rW(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bh(null,null)
s.y=13
s.z=b
s.cy=q
r=A.ck(a,s)
a.eC.set(q,r)
return r},
jf(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
rR(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
fe(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.jf(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bh(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.ck(a,r)
a.eC.set(p,q)
return q},
nW(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.jf(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bh(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.ck(a,o)
a.eC.set(q,n)
return n},
pe(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.jf(m)
if(j>0){s=l>0?",":""
r=A.jf(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.rR(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bh(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.ck(a,o)
a.eC.set(q,r)
return r},
nX(a,b,c,d){var s,r=b.cy+("<"+A.jf(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.rT(a,b,c,r,d)
a.eC.set(r,s)
return s},
rT(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.mI(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.cl(a,b,r,0)
m=A.fk(a,c,r,0)
return A.nX(a,n,m,c!==m)}}l=new A.bh(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.ck(a,l)},
pa(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
pc(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.rL(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.pb(a,r,h,g,!1)
else if(q===46)r=A.pb(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.ch(a.u,a.e,g.pop()))
break
case 94:g.push(A.rW(a.u,g.pop()))
break
case 35:g.push(A.ff(a.u,5,"#"))
break
case 64:g.push(A.ff(a.u,2,"@"))
break
case 126:g.push(A.ff(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.nV(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.fe(p,n,o))
else{m=A.ch(p,a.e,n)
switch(m.y){case 11:g.push(A.nX(p,m,o,a.n))
break
default:g.push(A.nW(p,m,o))
break}}break
case 38:A.rM(a,g)
break
case 42:p=a.u
g.push(A.pg(p,A.ch(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.nY(p,A.ch(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.pf(p,A.ch(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.iC()
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
A.nV(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.pe(p,A.ch(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.nV(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.rO(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.ch(a.u,a.e,i)},
rL(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
pb(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.t0(s,o.z)[p]
if(n==null)A.W('No "'+p+'" in "'+A.rt(o)+'"')
d.push(A.mG(s,o,n))}else d.push(p)
return m},
rM(a,b){var s=b.pop()
if(0===s){b.push(A.ff(a.u,1,"0&"))
return}if(1===s){b.push(A.ff(a.u,4,"1&"))
return}throw A.c(A.jA("Unexpected extended operation "+A.G(s)))},
ch(a,b,c){if(typeof c=="string")return A.fe(a,c,a.sEA)
else if(typeof c=="number")return A.rN(a,b,c)
else return c},
nV(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ch(a,b,c[s])},
rO(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ch(a,b,c[s])},
rN(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.c(A.jA("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.c(A.jA("Bad index "+c+" for "+b.l(0)))},
a2(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.c2(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.c2(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.a2(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return A.a2(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.a2(a,b.z,c,d,e)
if(r===6)return A.a2(a,b.z,c,d,e)
return r!==7}if(r===6)return A.a2(a,b.z,c,d,e)
if(p===6){s=A.oV(a,d)
return A.a2(a,b,c,s,e)}if(r===8){if(!A.a2(a,b.z,c,d,e))return!1
return A.a2(a,A.oU(a,b),c,d,e)}if(r===7){s=A.a2(a,t.P,c,d,e)
return s&&A.a2(a,b.z,c,d,e)}if(p===8){if(A.a2(a,b,c,d.z,e))return!0
return A.a2(a,b,c,A.oU(a,d),e)}if(p===7){s=A.a2(a,b,c,t.P,e)
return s||A.a2(a,b,c,d.z,e)}if(q)return!1
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
if(!A.a2(a,k,c,j,e)||!A.a2(a,j,e,k,c))return!1}return A.po(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.po(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.tl(a,b,c,d,e)}return!1},
po(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.a2(a3,a4.z,a5,a6.z,a7))return!1
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
if(!A.a2(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.a2(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.a2(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.a2(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
tl(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.mG(a,b,r[o])
return A.pi(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.pi(a,n,null,c,m,e)},
pi(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.a2(a,r,d,q,f))return!1}return!0},
fl(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.c2(a))if(r!==7)if(!(r===6&&A.fl(a.z)))s=r===8&&A.fl(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ud(a){var s
if(!A.c2(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
c2(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.iD},
ph(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
mI(a){return a>0?new Array(a):v.typeUniverse.sEA},
bh:function bh(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
iC:function iC(){this.c=this.b=this.a=null},
fc:function fc(a){this.a=a},
iy:function iy(){},
fd:function fd(a){this.a=a},
rD(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.tN()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bD(new A.mc(q),1)).observe(s,{childList:true})
return new A.mb(q,s,r)}else if(self.setImmediate!=null)return A.tO()
return A.tP()},
rE(a){self.scheduleImmediate(A.bD(new A.md(t.M.a(a)),0))},
rF(a){self.setImmediate(A.bD(new A.me(t.M.a(a)),0))},
rG(a){A.nO(B.bx,t.M.a(a))},
nO(a,b){var s=B.f.af(a.a,1000)
return A.rP(s<0?0:s,b)},
p4(a,b){var s=B.f.af(a.a,1000)
return A.rQ(s<0?0:s,b)},
rP(a,b){var s=new A.fb(!0)
s.eB(a,b)
return s},
rQ(a,b){var s=new A.fb(!1)
s.eC(a,b)
return s},
aL(a){return new A.eO(new A.I($.F,a.i("I<0>")),a.i("eO<0>"))},
aJ(a,b){a.$2(0,null)
b.b=!0
return b.a},
a4(a,b){A.t4(a,b)},
aI(a,b){b.ag(0,a)},
aH(a,b){b.c4(A.bE(a),A.c1(a))},
t4(a,b){var s,r,q=new A.mJ(b),p=new A.mK(b)
if(a instanceof A.I)a.dc(q,p,t.z)
else{s=t.z
if(t.g7.b(a))a.bs(q,p,s)
else{r=new A.I($.F,t.c)
r.a=8
r.c=a
r.dc(q,p,s)}}},
aM(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.F.ck(new A.mP(s),t.H,t.S,t.z)},
vk(a){return new A.dM(a,1)},
nS(){return B.hM},
nT(a){return new A.dM(a,3)},
o3(a,b){return new A.f8(a,b.i("f8<0>"))},
jB(a,b){var s=A.cW(a,"error",t.K)
return new A.e2(s,b==null?A.nx(a):b)},
nx(a){var s
if(t.fz.b(a)){s=a.gb1()
if(s!=null)return s}return B.dN},
r1(a,b){var s,r=!b.b(null)
if(r)throw A.c(A.nw(null,"computation","The type parameter is not nullable"))
s=new A.I($.F,b.i("I<0>"))
A.rx(a,new A.ki(null,s,b))
return s},
r2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=null,e=!1,d=b.i("I<m<0>>"),c=new A.I($.F,d)
g.a=null
g.b=0
s=A.nR("error")
r=A.nR("stackTrace")
q=new A.kk(g,f,e,c,s,r)
try{for(l=a.length,k=t.P,j=0,i=0;j<a.length;a.length===l||(0,A.w)(a),++j){p=a[j]
o=i
p.bs(new A.kj(g,o,c,f,e,s,r,b),q,k)
i=++g.b}if(i===0){l=c
l.aM(A.b([],b.i("p<0>")))
return l}g.a=A.as(i,null,!1,b.i("0?"))}catch(h){n=A.bE(h)
m=A.c1(h)
if(g.b===0||A.U(e)){l=n
r=m
A.cW(l,"error",t.K)
$.F!==B.v
if(r==null)r=A.nx(l)
d=new A.I($.F,d)
d.bD(l,r)
return d}else{s.b=n
r.b=m}}return c},
ml(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.bc()
b.bF(a)
A.dL(b,q)}else{q=t.d.a(b.c)
b.a=b.a&1|4
b.c=a
a.d0(q)}},
dL(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.d,q=t.g7;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.jr(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.dL(c.a,b)
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
A.jr(i.a,i.b)
return}f=$.F
if(f!==g)$.F=g
else f=null
b=b.c
if((b&15)===8)new A.mt(p,c,m).$0()
else if(n){if((b&1)!==0)new A.ms(p,i).$0()}else if((b&2)!==0)new A.mr(c,p).$0()
if(f!=null)$.F=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("al<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.bd(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.ml(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.bd(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
tx(a,b){var s
if(t.ng.b(a))return b.ck(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.c(A.nw(a,"onError",u.w))},
tu(){var s,r
for(s=$.dR;s!=null;s=$.dR){$.fj=null
r=s.b
$.dR=r
if(r==null)$.fi=null
s.a.$0()}},
tC(){$.o0=!0
try{A.tu()}finally{$.fj=null
$.o0=!1
if($.dR!=null)$.o9().$1(A.pw())}},
pr(a){var s=new A.il(a),r=$.fi
if(r==null){$.dR=$.fi=s
if(!$.o0)$.o9().$1(A.pw())}else $.fi=r.b=s},
tA(a){var s,r,q,p=$.dR
if(p==null){A.pr(a)
$.fj=$.fi
return}s=new A.il(a)
r=$.fj
if(r==null){s.b=p
$.dR=$.fj=s}else{q=r.b
s.b=q
$.fj=r.b=s
if(q==null)$.fi=s}},
pM(a){var s=null,r=$.F
if(B.v===r){A.cV(s,s,B.v,a)
return}A.cV(s,s,r,t.M.a(r.c1(a)))},
v6(a,b){A.cW(a,"stream",t.K)
return new A.j1(b.i("j1<0>"))},
p1(a){return new A.dH(null,null,null,a.i("dH<0>"))},
mO(a){return},
rH(a,b,c,d,e,f){var s,r=$.F,q=e?1:0
t.bm.L(f).i("1(2)").a(b)
A.p8(r,c)
s=d==null?A.pv():d
t.M.a(s)
return new A.cg(a,b,r,q,f.i("cg<0>"))},
p8(a,b){if(b==null)b=A.tQ()
if(t.fQ.b(b))return a.ck(b,t.z,t.K,t.l)
if(t.i6.b(b))return t.y.a(b)
throw A.c(A.d2("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
tw(a,b){A.jr(a,b)},
tv(){},
rx(a,b){var s=$.F
if(s===B.v)return A.nO(a,t.M.a(b))
return A.nO(a,t.M.a(s.c1(b)))},
ry(a,b){var s=$.F
if(s===B.v)return A.p4(a,t.my.a(b))
return A.p4(a,t.my.a(s.dl(b,t.hU)))},
jr(a,b){A.tA(new A.mN(a,b))},
pp(a,b,c,d,e){var s,r=$.F
if(r===c)return d.$0()
$.F=c
s=r
try{r=d.$0()
return r}finally{$.F=s}},
pq(a,b,c,d,e,f,g){var s,r=$.F
if(r===c)return d.$1(e)
$.F=c
s=r
try{r=d.$1(e)
return r}finally{$.F=s}},
ty(a,b,c,d,e,f,g,h,i){var s,r=$.F
if(r===c)return d.$2(e,f)
$.F=c
s=r
try{r=d.$2(e,f)
return r}finally{$.F=s}},
cV(a,b,c,d){t.M.a(d)
if(B.v!==c)d=c.c1(d)
A.pr(d)},
mc:function mc(a){this.a=a},
mb:function mb(a,b,c){this.a=a
this.b=b
this.c=c},
md:function md(a){this.a=a},
me:function me(a){this.a=a},
fb:function fb(a){this.a=a
this.b=null
this.c=0},
mF:function mF(a,b){this.a=a
this.b=b},
mE:function mE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eO:function eO(a,b){this.a=a
this.b=!1
this.$ti=b},
mJ:function mJ(a){this.a=a},
mK:function mK(a){this.a=a},
mP:function mP(a){this.a=a},
dM:function dM(a,b){this.a=a
this.b=b},
cj:function cj(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
f8:function f8(a,b){this.a=a
this.$ti=b},
e2:function e2(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.$ti=b},
bY:function bY(a,b,c,d,e){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
eR:function eR(){},
eP:function eP(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
ki:function ki(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kj:function kj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
dJ:function dJ(){},
aj:function aj(a,b){this.a=a
this.$ti=b},
dO:function dO(a,b){this.a=a
this.$ti=b},
c_:function c_(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
I:function I(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
mi:function mi(a,b){this.a=a
this.b=b},
mq:function mq(a,b){this.a=a
this.b=b},
mm:function mm(a){this.a=a},
mn:function mn(a){this.a=a},
mo:function mo(a,b,c){this.a=a
this.b=b
this.c=c},
mk:function mk(a,b){this.a=a
this.b=b},
mp:function mp(a,b){this.a=a
this.b=b},
mj:function mj(a,b,c){this.a=a
this.b=b
this.c=c},
mt:function mt(a,b,c){this.a=a
this.b=b
this.c=c},
mu:function mu(a){this.a=a},
ms:function ms(a,b){this.a=a
this.b=b},
mr:function mr(a,b){this.a=a
this.b=b},
il:function il(a){this.a=a
this.b=null},
cb:function cb(){},
lK:function lK(a,b){this.a=a
this.b=b},
lL:function lL(a,b){this.a=a
this.b=b},
aF:function aF(){},
f7:function f7(){},
mC:function mC(a){this.a=a},
im:function im(){},
dH:function dH(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
bB:function bB(a,b){this.a=a
this.$ti=b},
cg:function cg(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
dI:function dI(){},
dN:function dN(){},
it:function it(){},
bZ:function bZ(a,b){this.b=a
this.a=null
this.$ti=b},
ci:function ci(){},
mz:function mz(a,b){this.a=a
this.b=b},
bC:function bC(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
dK:function dK(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
j1:function j1(a){this.$ti=a},
fg:function fg(){},
mN:function mN(a,b){this.a=a
this.b=b},
iU:function iU(){},
mA:function mA(a,b){this.a=a
this.b=b},
mB:function mB(a,b,c){this.a=a
this.b=b
this.c=c},
nH(a,b,c,d){if(b==null){if(a==null)return new A.aT(c.i("@<0>").L(d).i("aT<1,2>"))}else if(a==null)a=A.tV()
return A.rI(A.tU(),a,b,c,d)},
aA(a,b,c){return b.i("@<0>").L(c).i("l8<1,2>").a(A.pA(a,new A.aT(b.i("@<0>").L(c).i("aT<1,2>"))))},
ac(a,b){return new A.aT(a.i("@<0>").L(b).i("aT<1,2>"))},
rK(a,b){return new A.eX(a.i("@<0>").L(b).i("eX<1,2>"))},
rI(a,b,c,d,e){var s=c!=null?c:new A.mw(d)
return new A.eW(a,b,s,d.i("@<0>").L(e).i("eW<1,2>"))},
bw(a){return new A.cR(a.i("cR<0>"))},
nI(a,b){return b.i("oM<0>").a(A.u1(a,new A.cR(b.i("cR<0>"))))},
nU(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
rJ(a,b,c){var s=new A.cS(a,b,c.i("cS<0>"))
s.c=a.e
return s},
tb(a,b){return J.a_(a,b)},
tc(a){return J.aO(a)},
oE(a,b,c){var s,r
if(A.o2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.b([],t.s)
B.a.k($.b2,a)
try{A.ts(a,s)}finally{if(0>=$.b2.length)return A.a($.b2,-1)
$.b2.pop()}r=A.p2(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
nE(a,b,c){var s,r
if(A.o2(a))return b+"..."+c
s=new A.hV(b)
B.a.k($.b2,a)
try{r=s
r.a=A.p2(r.a,a,", ")}finally{if(0>=$.b2.length)return A.a($.b2,-1)
$.b2.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
o2(a){var s,r
for(s=$.b2.length,r=0;r<s;++r)if(a===$.b2[r])return!0
return!1},
ts(a,b){var s,r,q,p,o,n,m,l=a.gC(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.p())return
s=A.G(l.gt(l))
B.a.k(b,s)
k+=s.length+2;++j}if(!l.p()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gt(l);++j
if(!l.p()){if(j<=4){B.a.k(b,A.G(p))
return}r=A.G(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gt(l);++j
for(;l.p();p=o,o=n){n=l.gt(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.G(p)
r=A.G(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
rf(a,b,c){var s=A.nH(null,null,b,c)
a.J(0,new A.la(s,b,c))
return s},
oL(a,b,c){var s=A.nH(null,null,b,c)
s.M(0,a)
return s},
nK(a){var s,r={}
if(A.o2(a))return"{...}"
s=new A.hV("")
try{B.a.k($.b2,a)
s.a+="{"
r.a=!0
J.qF(a,new A.ld(r,s))
s.a+="}"}finally{if(0>=$.b2.length)return A.a($.b2,-1)
$.b2.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
eX:function eX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eW:function eW(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
mw:function mw(a){this.a=a},
cR:function cR(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iJ:function iJ(a){this.a=a
this.c=this.b=null},
cS:function cS(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
el:function el(){},
la:function la(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
et:function et(){},
ld:function ld(a,b){this.a=a
this.b=b},
A:function A(){},
lf:function lf(a){this.a=a},
eG:function eG(){},
f3:function f3(){},
fh:function fh(){},
qY(a){if(a instanceof A.cs)return a.l(0)
return"Instance of '"+A.lv(a)+"'"},
qZ(a,b){a=t.K.a(A.c(a))
a.stack=b.l(0)
throw a
throw A.c("unreachable")},
as(a,b,c,d){var s,r=c?J.oG(a,d):J.r8(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
rh(a,b){var s,r=A.b([],b.i("p<0>"))
for(s=J.ak(a);s.p();)B.a.k(r,b.a(s.gt(s)))
return r},
dl(a,b,c){var s=A.rg(a,c)
return s},
rg(a,b){var s,r
if(Array.isArray(a))return A.b(a.slice(0),b.i("p<0>"))
s=A.b([],b.i("p<0>"))
for(r=J.ak(a);r.p();)B.a.k(s,r.gt(r))
return s},
nJ(a,b,c){var s,r=J.oG(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
p2(a,b,c){var s=J.ak(b)
if(!s.p())return a
if(c.length===0){do a+=A.G(s.gt(s))
while(s.p())}else{a+=A.G(s.gt(s))
for(;s.p();)a=a+c+A.G(s.gt(s))}return a},
qP(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
qQ(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
fL(a){if(a>=10)return""+a
return"0"+a},
fQ(a){return new A.ad(1000*a)},
fS(a){if(typeof a=="number"||A.mL(a)||a==null)return J.co(a)
if(typeof a=="string")return JSON.stringify(a)
return A.qY(a)},
jA(a){return new A.e1(a)},
d2(a,b){return new A.bI(!1,null,b,a)},
nw(a,b,c){return new A.bI(!0,a,b,c)},
rs(a){var s=null
return new A.dt(s,s,!1,s,s,a)},
oT(a,b){return new A.dt(null,null,!0,a,b,"Value not in range")},
c9(a,b,c,d,e){return new A.dt(b,c,!0,a,d,"Invalid value")},
lB(a,b,c){if(0>a||a>c)throw A.c(A.c9(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.c9(b,a,c,"end",null))
return b}return c},
lA(a,b){if(a<0)throw A.c(A.c9(a,0,null,b,null))
return a},
a0(a,b,c,d,e){var s=A.N(e==null?J.aw(b):e)
return new A.h5(s,!0,a,c,"Index out of range")},
B(a){return new A.ib(a)},
nQ(a){return new A.i8(a)},
am(a){return new A.bj(a)},
b4(a){return new A.fH(a)},
nC(a){return new A.iz(a)},
cK(a,b,c,d){var s,r
if(B.H===c)return A.rw(J.aO(a),J.aO(b),$.ns())
if(B.H===d){s=J.aO(a)
b=J.aO(b)
c=J.aO(c)
return A.nM(A.cc(A.cc(A.cc($.ns(),s),b),c))}s=J.aO(a)
b=J.aO(b)
c=J.aO(c)
d=J.aO(d)
r=$.ns()
return A.nM(A.cc(A.cc(A.cc(A.cc(r,s),b),c),d))},
fm(a){A.uk(A.G(a))},
ct:function ct(a,b){this.a=a
this.b=b},
ad:function ad(a){this.a=a},
mg:function mg(){},
P:function P(){},
e1:function e1(a){this.a=a},
ce:function ce(){},
hs:function hs(){},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dt:function dt(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h5:function h5(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ib:function ib(a){this.a=a},
i8:function i8(a){this.a=a},
bj:function bj(a){this.a=a},
fH:function fH(a){this.a=a},
hv:function hv(){},
eJ:function eJ(){},
fK:function fK(a){this.a=a},
iz:function iz(a){this.a=a},
i:function i(){},
a1:function a1(){},
dm:function dm(a,b,c){this.a=a
this.b=b
this.$ti=c},
a5:function a5(){},
v:function v(){},
j4:function j4(){},
hV:function hV(a){this.a=a},
pz(){return document},
eV(a,b,c,d,e){var s=A.ps(new A.mh(c),t.fq)
if(s!=null&&!0)J.qC(a,b,s,!1)
return new A.eU(a,b,s,!1,e.i("eU<0>"))},
t8(a){var s
if(t.dA.b(a))return a
s=new A.m9([],[])
s.c=!0
return s.cs(a)},
ps(a,b){var s=$.F
if(s===B.v)return a
return s.dl(a,b)},
q:function q(){},
jw:function jw(){},
fp:function fp(){},
fq:function fq(){},
fw:function fw(){},
fx:function fx(){},
cq:function cq(){},
bq:function bq(){},
k1:function k1(){},
L:function L(){},
e8:function e8(){},
k2:function k2(){},
bb:function bb(){},
bK:function bK(){},
k3:function k3(){},
k4:function k4(){},
k5:function k5(){},
bL:function bL(){},
c6:function c6(){},
e9:function e9(){},
ea:function ea(){},
fO:function fO(){},
k7:function k7(){},
ah:function ah(){},
k:function k(){},
f:function f(){},
aR:function aR(){},
fU:function fU(){},
fV:function fV(){},
fY:function fY(){},
aS:function aS(){},
kS:function kS(){},
cy:function cy(){},
ej:function ej(){},
cz:function cz(){},
df:function df(){},
bO:function bO(){},
lc:function lc(){},
cH:function cH(){},
lh:function lh(){},
hg:function hg(){},
li:function li(a){this.a=a},
hh:function hh(){},
lj:function lj(a){this.a=a},
aU:function aU(){},
hi:function hi(){},
aV:function aV(){},
z:function z(){},
eA:function eA(){},
aW:function aW(){},
hB:function hB(){},
hH:function hH(){},
lD:function lD(a){this.a=a},
hJ:function hJ(){},
aE:function aE(){},
hO:function hO(){},
aY:function aY(){},
hP:function hP(){},
aZ:function aZ(){},
hT:function hT(){},
lJ:function lJ(a){this.a=a},
at:function at(){},
aG:function aG(){},
an:function an(){},
i0:function i0(){},
i1:function i1(){},
lW:function lW(){},
b_:function b_(){},
i4:function i4(){},
lX:function lX(){},
bA:function bA(){},
m0:function m0(){},
dD:function dD(){},
ie:function ie(){},
dG:function dG(){},
ir:function ir(){},
eS:function eS(){},
iD:function iD(){},
eZ:function eZ(){},
iY:function iY(){},
j5:function j5(){},
nB:function nB(a,b){this.a=a
this.$ti=b},
eT:function eT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eU:function eU(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
mh:function mh(a){this.a=a},
r:function r(){},
ee:function ee(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
is:function is(){},
iu:function iu(){},
iv:function iv(){},
iw:function iw(){},
ix:function ix(){},
iA:function iA(){},
iB:function iB(){},
iE:function iE(){},
iF:function iF(){},
iK:function iK(){},
iL:function iL(){},
iM:function iM(){},
iN:function iN(){},
iO:function iO(){},
iP:function iP(){},
iS:function iS(){},
iT:function iT(){},
iV:function iV(){},
f4:function f4(){},
f5:function f5(){},
iW:function iW(){},
iX:function iX(){},
iZ:function iZ(){},
j6:function j6(){},
j7:function j7(){},
f9:function f9(){},
fa:function fa(){},
j9:function j9(){},
ja:function ja(){},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
jk:function jk(){},
jl:function jl(){},
jm:function jm(){},
jn:function jn(){},
jo:function jo(){},
jp:function jp(){},
jq:function jq(){},
pk(a){var s,r
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.mL(a))return a
if(A.pG(a))return A.cm(a)
if(Array.isArray(a)){s=[]
for(r=0;r<a.length;++r)s.push(A.pk(a[r]))
return s}return a},
cm(a){var s,r,q,p,o
if(a==null)return null
s=A.ac(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.w)(r),++p){o=r[p]
s.j(0,o,A.pk(a[o]))}return s},
pG(a){var s=Object.getPrototypeOf(a)
return s===Object.prototype||s===null},
m8:function m8(){},
ma:function ma(a,b){this.a=a
this.b=b},
m9:function m9(a,b){this.a=a
this.b=b
this.c=!1},
um(a,b){var s=new A.I($.F,b.i("I<0>")),r=new A.aj(s,b.i("aj<0>"))
a.then(A.bD(new A.nf(r,b),1),A.bD(new A.ng(r),1))
return s},
lp:function lp(a){this.a=a},
nf:function nf(a,b){this.a=a
this.b=b},
ng:function ng(a){this.a=a},
lz(){return B.u},
iG:function iG(){},
b6:function b6(){},
ha:function ha(){},
b7:function b7(){},
ht:function ht(){},
lu:function lu(){},
hW:function hW(){},
n:function n(){},
b9:function b9(){},
i5:function i5(){},
iH:function iH(){},
iI:function iI(){},
iQ:function iQ(){},
iR:function iR(){},
j2:function j2(){},
j3:function j3(){},
jb:function jb(){},
jc:function jc(){},
oA(a){return new GainNode(a)},
bo:function bo(){},
d6:function d6(){},
cp:function cp(){},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
J:function J(){},
fr:function fr(){},
fs:function fs(){},
jI:function jI(a){this.a=a},
bJ:function bJ(){},
ft:function ft(){},
e3:function e3(){},
de:function de(){},
hu:function hu(){},
ip:function ip(){},
fA:function fA(){},
h_:function h_(){},
hC:function hC(){},
du:function du(){},
bU:function bU(){},
i7:function i7(){},
id:function id(){},
bT:function bT(a){this.a=a},
dz:function dz(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
jQ:function jQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oB(a,b){var s=A.as(7,null,!1,b.i("0?")),r=a==null?A.uw():a
return new A.h4(r,s,b.i("h4<0>"))},
h4:function h4(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
mH:function mH(a,b){this.a=a
this.$ti=b},
cT:function cT(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=-1
_.$ti=c},
c4(a){return new A.e(a)},
e:function e(a){this.a=a},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
M:function M(a,b){this.a=a
this.b=b},
bH(a,b,c,d,e){return new A.bG(c,!1,a,e)},
rC(a,b){return new A.dF(t.p.a(a),t.j.a(b))},
re(a,b){var s=t.p
return new A.dj(s.a(a),s.a(b))},
rB(a){return new A.dE(t.p.a(a))},
rd(a,b){return new A.di(t.p.a(a),t.j.a(b))},
qT(a,b){return new A.dd(t.p.a(a),t.j.a(b))},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
dF:function dF(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
l4:function l4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
l5:function l5(a,b,c){this.a=a
this.b=b
this.c=c},
l6:function l6(a,b,c){this.a=a
this.b=b
this.c=c},
l7:function l7(a,b,c){this.a=a
this.b=b
this.c=c},
dE:function dE(a){this.a=a},
m5:function m5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m6:function m6(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
dd:function dd(a,b){this.a=a
this.b=b},
nv(a,b,c,d,e,f,g,h){return new A.O(h,a,f,d,g,e,b)},
pF(a,b){if(b.e)return!1
if(a.x)return!0
if(b.x)return!0
return!1},
u2(a,b,c){var s,r,q=b.q()
q.toString
s=c.a.ha(a,q,-1)
if(s==null)return null
q=$.bF()
r=b.q()
r.toString
return q.dC(r,s,a)},
hj(a,b,c,d,e,f,g,h,i,j){return new A.c7(i,a,h,j,e,c,d,f,b)},
u3(a){var s,r,q,p,o,n,m=A.b([],t.n7),l=A.rK(t.N,t.C),k=A.bw(t.F)
k.M(0,a.z)
s=a.d
r=A.b([],t.I)
q=A.oL(B.b5,t.a,t.O)
p=A.b([],t.Q)
for(o=J.ak(a.f.$0());o.p();){n=o.gt(o)
switch(n.gbz()){case B.aO:q.h(0,B.U)
q.j(0,B.U,n)
break
case B.aP:q.h(0,B.C)
q.j(0,B.C,n)
break
case B.aQ:q.h(0,B.V)
q.j(0,B.V,n)
break
default:B.a.k(r,n)}}return A.nv(new A.c3(s,s,1,0,0,0,0,new A.cu(r,q),a.c,p,new A.cw(a.a)),a.x,1,new A.jx(m,l,k,B.ad),a.y,!1,!1,a.e.$0())},
jW(a,b){var s=$.oy
$.oy=s+1
return new A.br(a,b,B.f.l(s))},
O:function O(a,b,c,d,e,f,g){var _=this
_.a=100
_.b=a
_.c=b
_.e=c
_.r=d
_.x=e
_.z=f
_.Q=g},
jv:function jv(a){this.a=a
this.b=null},
c7:function c7(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
nn:function nn(){},
nm:function nm(){},
ni:function ni(){},
nh:function nh(){},
np:function np(){},
no:function no(){},
nr:function nr(){},
nq:function nq(){},
mS:function mS(){},
mR:function mR(){},
fv:function fv(a){this.b=a},
jx:function jx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null
_.x=_.r=0},
jZ:function jZ(a){this.b=a},
ls:function ls(a){this.b=a},
ao:function ao(a,b){this.a=a
this.b=b},
cN:function cN(a){this.b=a},
lP:function lP(){},
lR:function lR(a){this.a=a},
lS:function lS(){},
lT:function lT(a,b){this.a=a
this.b=b},
lQ:function lQ(a){this.a=a},
lU:function lU(a){this.a=a},
lV:function lV(a){this.a=a},
br:function br(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c},
jX:function jX(a){this.a=a},
jY:function jY(){},
jR:function jR(){this.b=this.a=0},
K:function K(){},
bR:function bR(a,b){this.b=a
this.a=b},
cG:function cG(a,b){this.b=a
this.a=b},
r3(a){var s=t.w
s=new A.h0(a,A.b([],s),A.b([],s),A.b([],t.oW),A.b([],t.ge))
s.ex(a)
return s},
ul(a,b,c){var s=b.e||b.a===0
if(s)return!1
if(b.c.b<=0){a.$1(new A.dc(b))
return!0}if(b.r!=null){a.$1(B.dM.fY(b,c))
b.a=0
return!0}return!1},
jt(b1,b2,b3,b4){var s=0,r=A.aL(t.oL),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$jt=A.aM(function(b5,b6){if(b5===1)return A.aH(b6,r)
while(true)$async$outer:switch(s){case 0:a9=b1.y2
b0=a9.e
a9=a9.d
if(!(a9<b0.length)){q=A.a(b0,a9)
s=1
break}p=b0[a9]
o=A.b([],t.Y)
for(n=-b4,a9=b4+1,b0=p.d,m=b3.a,l=b3.b,k=b0.a,j=b0.b,i=t.i,h=n,g=!1;h<a9;++h)for(f=m+h,e=f<k,d=n;d<a9;++d){c=l+d
if(!(f>=0&&c>=0&&e&&c<j))continue
b=b0.h(0,new A.d(f,c))
a=b.f
if(a!=null){if(a!==B.p)g=!0
c=b1.y2
a0=c.e
c=c.d
if(!(c<a0.length)){q=A.a(a0,c)
s=1
break $async$outer}B.a.M(o,A.pE(b,a0[c],b2))}c=b.e
a0=c.length
if(a0!==0)for(a1=0;a1<c.length;c.length===a0||(0,A.w)(c),++a1,g=!0){a2=c[a1]
a3=A.o6(a2)
a4=A.as(8,B.z,!0,i)
a5="Pick up "+a2.d
a6=A.R("Pick up ",a4)
a6.r=a6.r+a3.r
a7=a6.f
if(a7!=null){a8=a3.f
a8.toString
a6.sds(B.a.v(a7,a8))}B.a.k(o,new A.ar(a5,a6,new A.h1(a2,b,b2)))}}a9=o.length
if(a9===0){q=null
s=1
break}s=a9===1&&!g?3:5
break
case 3:if(0>=a9){q=A.a(o,0)
s=1
break}a=o[0]
s=4
break
case 5:a9=new A.I($.F,t.j7)
b1.gav().c.shn(new A.hf(o,new A.aj(a9,t.pn),t.km))
s=6
return A.a4(a9,$async$jt)
case 6:a=b6
case 4:if(a==null){q=null
s=1
break}q=a.c
s=1
break
case 1:return A.aI(q,r)}})
return A.aJ($async$jt,r)},
h0:function h0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1
_.r=null},
kn:function kn(a){this.a=a},
km:function km(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.a=a
this.b=b},
oz(a){switch(a){case B.fr:case B.fs:case B.ft:case B.fu:case B.fv:return!1
case B.ae:case B.af:case B.av:return!0}},
e5(a,b,c){var s,r,q
for(s=0,r=0;r<b;++r){switch(c){case B.bv:q=2
break
case B.aW:q=3
break
case B.aw:q=4
break
case B.bw:q=5
break
case B.ag:q=6
break
case B.fw:q=8
break
case B.fx:q=12
break
case B.aX:q=20
break
default:q=null}s+=a.R(q)+1}return s},
fn(a,b,c,d,e,f){return new A.dY(f,c,b,d,e,a)},
om(){return new A.dY(10,10,10,10,10,10)},
r_(a,b){return new A.cw(a)},
qW(a,b){return new A.cu(b,a)},
nN(a,b,c,d,e,f,g,h){return new A.dA(d,c,!1,a,b,e)},
rj(a,b){return new A.d(a,b)},
qO(a){var s,r=a.a,q=a.b
if(r+q===1)return a
s=Math.sqrt(Math.pow(r,2)+Math.pow(q,2))
return new A.M(r/s,q/s)},
be(a){switch(a){case B.w:case B.aZ:case B.ak:case B.al:case B.a9:case B.F:case B.an:case B.aE:case B.a5:case B.ai:case B.aB:case B.M:case B.aj:case B.a6:case B.E:case null:return!1
case B.ah:case B.p:case B.am:case B.W:case B.a7:case B.aC:case B.a8:case B.aD:return!0}},
r6(a){switch(a){case B.w:case B.aZ:case B.ak:case B.al:case B.a9:case B.F:case B.an:case B.aE:case B.a5:case B.ai:case B.aB:case B.M:case null:case B.aj:case B.E:case B.a7:case B.a6:case B.aC:case B.a8:case B.aD:return!1
case B.ah:case B.p:case B.am:case B.W:return!0}},
eH:function eH(a){this.b=a},
bv:function bv(a){this.b=a},
e_:function e_(a,b){this.a=a
this.b=b},
ai:function ai(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=null},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kP:function kP(a){this.b=a},
bt:function bt(a){this.b=a},
bu:function bu(a){this.b=a},
ig:function ig(a){this.b=a},
k_:function k_(){},
k0:function k0(a){this.b=a},
e7:function e7(a){this.b=a},
a9:function a9(a,b,c,d){var _=this
_.b=a
_.e=b
_.f=c
_.y=d},
jy:function jy(a){this.b=a},
jz:function jz(){},
aX:function aX(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.f=c
_.r=d
_.ch=e},
d3:function d3(a){this.b=a},
ax:function ax(a){this.c=a},
dY:function dY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c3:function c3(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
_.ch=k},
d5:function d5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cw:function cw(a){this.a=a},
cu:function cu(a,b){this.a=a
this.b=b},
cv:function cv(a){this.b=a},
c5:function c5(a){this.a=a},
fI:function fI(a){this.b=a},
dB:function dB(a){this.b=a},
da:function da(a){this.b=a},
dA:function dA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=c
_.f=d
_.r=e
_.x=f},
hz:function hz(a){this.b=a},
aB:function aB(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a){this.b=a},
cD:function cD(a){this.b=a},
bp:function bp(a){this.b=a},
cd:function cd(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
bP:function bP(a,b){this.b=a
this.c=b},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(a,b){this.a=a
this.b=b},
lb:function lb(a){this.b=a},
X:function X(a){this.b=a},
le:function le(a,b){this.a=a
this.b=b},
aP:function aP(a){this.b=a},
dn:function dn(a){this.b=a},
tW(a){var s
if(a==null)return null
if(a.x)return new A.bc("It's you.")
s=a.z
if(s!=null)return new A.bc(s.l(0))
return null},
tX(a){if(a==null)return null
return new A.bc(a.b)},
tY(a){return new A.bc(J.co(t.J.a(a).b))},
bc:function bc(a){this.a=a},
fP:function fP(a){var _=this
_.b=a
_.c=!1
_.d=null
_.e=0
_.a=!1},
fR:function fR(a){this.b=a
this.a=!1},
ka:function ka(){},
qV(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j="a_position",i=5126,h="u_resolution",g="u_offset",f=A.b([],t.ev),e=A.b(["alarm_1.mp3","background_1.mp3","background_2.mp3","bullet_impact_1.mp3","bullet_impact_2.mp3","bullet_miss_1.mp3","calm_menu_1.mp3","cave_1.mp3","click_1.mp3","death_1.mp3","door_1.mp3","door_unlock_1.mp3","drone_abandoned_desolate.mp3","fireball_1.mp3","fireball_2.mp3","flamethrower_1.mp3","heavy_punch_1.mp3","heavy_punch_2.mp3","heavy_punch_3.mp3","heavy_punch_4.mp3","Just_Pick_One_Already.mp3","laser_1.mp3","loop_1.mp3","menu_1.mp3","menu_2.mp3","miss_1.mp3","monster_deep_growl.mp3","monster_growl_1.mp3","monster_sceam_2.mp3","monster_scream_1.mp3","New_Bee.mp3","positive_1.mp3","rain_background_1.mp3","sewer_1.mp3","short_pulse_1.mp3","surface_day_1.mp3","surface_night_1.mp3","sword_impact_1.mp3","teleport_1.mp3","text_loop_1.mp3","water_footsteps_1.mp3","water_footsteps_2.mp3","water_footsteps_3.mp3","water_footsteps_4.mp3","water_footsteps_5.mp3","reload_1.mp3","pistol_1.mp3","machine_on_1.mp3","switch_toggle_1.mp3","medical_beeps_1.mp3","impact_1.mp3","cut_attack_1.mp3","cut_attack_2.mp3"],t.s),d=new (window.AudioContext||window.webkitAudioContext)(),c=A.ta(),b=t.G,a=t.o
c=A.az(A.b([new A.Y(j,35044,i,2,c),new A.Y("a_color",35048,i,4,new Float32Array(192e3))],b),u.t,A.b([new A.u(h,B.h),new A.u(g,B.h)],a),u.Z)
s=A.az(A.b([new A.Y(j,35048,i,2,new Float32Array(8000))],b),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.b([new A.u(h,B.h),new A.u(g,B.h)],a),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
r=A.rA(window)
q=A.b([],t.pl)
a=A.b([new A.u("u_texture",B.t),new A.u(h,B.h),new A.u("u_time",B.B)],a)
a=A.az(A.b([new A.Y(j,35044,i,2,new Float32Array(A.cU(B.O)))],b),"#version 300 es\nprecision mediump float;\n\n\nuniform sampler2D u_texture;\nuniform vec2 u_resolution;\nuniform float u_time;\n\nout vec4 outColor;\n\nfloat density = 1.3;\nfloat opacityScanline = .3;\nfloat opacityNoise = .2;\n\nfloat random (vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nfloat blend(const in float x, const in float y) {\n\treturn (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));\n}\n\nvec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {\n\tvec3 z = vec3(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b));\n\treturn z * opacity + x * (1.0 - opacity);\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n  vec3 col = texture(u_texture, uv).rgb;\n  float count = u_resolution.y * density;\n  vec2 sl = vec2(sin(uv.y * count), cos(uv.y * count));\n\tvec3 scanlines = vec3(sl.x, sl.y, sl.x);\n  col += col * scanlines * opacityScanline;\n  col += col * vec3(random(uv * u_time)) * opacityNoise;\n  outColor = vec4(col, 1.0);\n}\n",a,u.v)
b=new Uint8Array(4000)
p=t.j
o=A.b([],t.n7)
n=A.b([],t.hd)
m=new Uint8Array(16e6)
l=new Uint8Array(4000)
k=new Uint8Array(4000)
f=new A.kd(a1,a0,f,a2,new A.hN(A.ac(t.N,t.bD),e,d),new A.kg(m,l,k,new Uint8Array(64e6),new A.d(0,0),A.ac(p,t.im),A.ac(p,t.i8),n),new A.jR(),new A.hZ(c),new A.fP(s),r,new A.fR(q),new A.fW(a),new A.jv(new A.fM(b,A.ac(p,t.S))),new A.jX(o),new A.eP(null,null,t.np),a1.createFramebuffer(),a1.createFramebuffer(),new A.lC())
f.ew(a0,a1,a2)
return f},
ke:function ke(){this.b=!1},
kd:function kd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.dx=_.db=_.cy=$
_.dy=k
_.fr=l
_.fy=_.fx=$
_.go=m
_.id=n
_.k1=o
_.r1=_.k4=_.k3=_.k2=null
_.r2=p
_.rx=q
_.x1=_.ry=0
_.y1=!0
_.y2=null
_.dw=$
_.dz=r},
kf:function kf(a,b){this.a=a
this.b=b},
pJ(a,b){var s,r,q=a.a,p=q.length,o=t.mm,n=0
while(!0){if(!(n<p)){s=null
break}r=q[n]
if(r.c===B.ab)if(o.a(r.b).a===B.bg){s=r
break}++n}return s},
op(a,b){var s,r=b==null
if(r)s=new A.fM(new Uint8Array(4000),A.ac(t.j,t.S))
else s=b
return new A.d8(a,s,r)},
dV(a,b,c){return a*c+(1-c)*b},
H:function H(){},
d1:function d1(){},
aQ:function aQ(a,b,c){var _=this
_.a=a
_.d=0
_.e=null
_.f=!0
_.r=b
_.x=c},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
x:function x(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h},
ez:function ez(a){this.a=a},
eD:function eD(a){this.a=a},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function lk(){},
ll:function ll(a,b,c){this.a=a
this.b=b
this.c=c},
lm:function lm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dy:function dy(){},
hb:function hb(a){this.a=a},
eL:function eL(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jD:function jD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jE:function jE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jC:function jC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hR:function hR(a){this.a=a},
lI:function lI(){},
dc:function dc(a){this.a=a},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a){this.a=a},
ia:function ia(a){this.a=a},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
hD:function hD(a,b){this.b=a
this.c=b},
lw:function lw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lx:function lx(a,b,c){this.a=a
this.b=b
this.c=c},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
kQ:function kQ(a,b){this.a=a
this.b=b},
kR:function kR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hd:function hd(a){this.a=a},
eY:function eY(a,b){this.a=a
this.b=b},
mx:function mx(){},
my:function my(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a){this.a=a},
fW:function fW(a){this.b=a
this.c=null
this.a=!1},
kg:function kg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1
_.r=f
_.x=g
_.y=h},
j8:function j8(a){this.a=a
this.b=!0},
m1:function m1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cr:function cr(a){this.b=a},
ly:function ly(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},
pE(a,b,c){var s=null,r=a.f
if(r==null)return A.b([],t.Y)
if(r===B.p)return A.b([new A.ar("Open Door",s,new A.eL(!1,a.b))],t.Y)
if(r===B.al){if(b.al(a.b)!=null)return A.b([],t.Y)
return A.b([new A.ar("Close Door",s,new A.eL(!0,a.b))],t.Y)}if(r===B.ai)return A.b([new A.ar("Activate Mechanism",s,new A.ia(a.b))],t.Y)
if(r===B.ak)return A.b([new A.ar("Stairs",s,new A.ez(!1))],t.Y)
if(r===B.a7)return A.b([new A.ar("Use Mapping Computer",s,new A.hd(a.b))],t.Y)
if(r===B.F)return A.b([new A.ar("Toggle Light",s,new A.i3(a.b))],t.Y)
if(r===B.a8)return A.b([new A.ar("Use Medical Station",s,new A.h3(a.b,c))],t.Y)
return A.b([],t.Y)},
ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},
hc(a){var s=u.v,r="a_position",q="u_player_visible_texture",p=t.G,o=t.o
return new A.ep(A.az(A.b([new A.Y(r,35044,5126,2,new Float32Array(A.cU(B.O)))],p),u._,A.b([new A.u("u_source_position",B.h),new A.u("u_source_color",B.b9),new A.u("u_source_strength",B.B),new A.u("u_time",B.B),new A.u("u_visible_texture",B.t),new A.u(q,B.t)],o),s),A.az(A.b([new A.Y(r,35044,5126,2,new Float32Array(A.cU(B.O)))],p),u.L,A.b([new A.u("u_light_texture",B.t),new A.u("u_game_world_texture",B.t),new A.u(q,B.t),new A.u("u_resolution",B.h),new A.u("u_block_size",B.h),new A.u("u_offset",B.h)],o),s),a,A.b([],t.ow))},
ep:function ep(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.r=_.f=_.e=null
_.y=d
_.z=null
_.a=!1},
qS(a){switch(a){case B.Q:return B.T
case B.R:return B.S
case B.S:return B.R
case B.T:return B.Q
case B.m:return B.k
case B.n:return B.o
case B.k:return B.m
case B.o:return B.n}},
qR(a){switch(a){case B.m:return B.bG
case B.n:return B.bF
case B.k:return B.bG
case B.o:return B.bF
default:return B.fY}},
Z(a,b){switch(b){case B.m:return a.v(0,new A.d(0,-1))
case B.R:return a.v(0,new A.d(1,-1))
case B.n:return a.v(0,new A.d(1,0))
case B.Q:return a.v(0,new A.d(1,1))
case B.k:return a.v(0,new A.d(0,1))
case B.S:return a.v(0,new A.d(-1,1))
case B.o:return a.v(0,new A.d(-1,0))
case B.T:return a.v(0,new A.d(-1,-1))}},
js(a,b,c){var s
switch(c){case B.a3:return!1
case B.bt:return a.c===B.c||A.U(A.be(a.f))
case B.K:s=a.f
if(s===B.p)return!1
return a.c===B.c||A.U(A.be(s))
case B.a4:return a.c===B.c||A.U(A.be(a.f))||b.al(a.b)!=null||b.a.S(0,a.b)}},
r0(a,b,c,d){var s,r=A.b([],t.m7),q=a.b,p=q==null?null:q.b
for(;q!=null;q=p,p=s){q.c.toString
B.a.k(r,new A.hy(q.d))
s=p==null?null:p.b}return new A.ef(r,b,c,d)},
py(a,b){var s=B.f.c3(a,-1,1),r=B.f.c3(b,-1,1)
switch(s){case-1:switch(r){case-1:return B.T
case 0:return B.o
case 1:return B.S}break
case 0:switch(r){case-1:return B.m
case 1:return B.k}break
case 1:switch(r){case-1:return B.R
case 0:return B.n
case 1:return B.Q}break}throw A.c(A.am(A.G(s)+","+A.G(r)))},
bS:function bS(a,b,c,d){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=c
_.f=d},
bd:function bd(a){this.b=a},
lr:function lr(){},
ef:function ef(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hy:function hy(a){this.b=a},
kh:function kh(){var _=this
_.b=_.a=null
_.c=!0
_.d=null},
fM:function fM(a,b){this.a=a
this.b=b},
k6:function k6(a){this.a=a},
hK:function hK(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.e=null
_.a=!1},
oo(a,b,c,d,e){return new A.Y(d,a,c,e,b)},
cf(a,b){return new A.u(b,a)},
az(a,b,c,d){var s=t.N
return new A.kO(d,b,c,a,A.ac(s,t.o3),A.ac(s,t.aN))},
pl(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.a_(a.getShaderParameter(s,35713),!0)){A.fm(a.getShaderInfoLog(s))
throw A.c(A.am("Invalid Shader"))}return s},
Y:function Y(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
u:function u(a,b){this.a=a
this.b=b},
cO:function cO(a){this.b=a},
io:function io(a,b){this.a=a
this.c=b},
jd:function jd(a,b){this.a=a
this.b=b},
kO:function kO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
lC:function lC(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
aD:function aD(){},
d7:function d7(){},
jH:function jH(){},
ln:function ln(){},
hq:function hq(){},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
lG:function lG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l_:function l_(a){this.a=a},
h7:function h7(a){this.a=a},
tB(a,b){var s=t.r
s.a(a)
s.a(b)
return B.f.a2(a.y,b.y)},
uf(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.I($.F,t.aa),p=J.ol(r),o=p.$ti,n=o.i("~(1)?").a(new A.n1(a,s,r,new A.aj(q,t.fB)))
t.Z.a(null)
A.eV(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
p_(a,b){var s=35048,r=5126,q=A.b([new A.u("u_texture",B.t),new A.u("u_resolution",B.h),new A.u("u_offset",B.h)],t.o),p=new Float32Array(12e4),o=new Float32Array(12e4),n=new Float32Array(24e4)
q=new A.eI(A.az(A.b([new A.Y("a_position",s,r,2,p),new A.Y("a_texcoord",s,r,2,o),new A.Y("a_color",s,r,4,n),new A.Y("a_bg_color",s,r,4,new Float32Array(24e4))],t.G),u.I,q,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"),A.oB(A.up(),t.r),b)
q.ey(a,b)
return q},
bz(a){return new A.Q(a.a,a.b,-1,-1,null)},
p0(a){var s
switch(a.c){case B.X:return A.bz(B.b7)
case B.Y:return A.bz(B.hu)
case B.Z:return A.bz(B.cb)
case B.a_:s=A.bz(B.cn)
s.sb_(0,0.8)
s.sam(0,B.q)
return s
case B.ab:return A.bz(B.ht)
case B.aa:s=A.bz(B.c4)
s.sb_(0,0.6)
return s
case B.aF:s=A.bz(B.c4)
s.sb_(0,0.6)
s.sam(0,B.q)
return s}},
oC(a,b,c,d){var s,r,q,p,o,n,m=null
switch(a){case B.w:case null:return m
case B.aZ:s=m
r=s
q=3
p=16
o=1
break
case B.ak:q=14
p=3
o=1
r=B.bM
s=B.dQ
break
case B.p:s=m
r=s
q=6
p=11
o=1
break
case B.al:s=m
r=s
q=15
p=5
o=1
break
case B.am:s=m
r=s
q=5
p=11
o=1
break
case B.a9:n=t.e.i("K.T")
if(d.a===B.r){n=B.aK.h(0,n.a(900))
n.toString
r=n}else{n=B.bK.h(0,n.a(800))
n.toString
r=n}s=m
q=2
p=2
o=0.8
break
case B.F:r=new A.e(4294967142)
s=m
q=12
p=7
o=0.8
break
case B.an:n=B.A.h(0,t.e.i("K.T").a(400))
n.toString
s=m
r=n
q=1
p=13
o=1
break
case B.aE:n=B.A.h(0,t.e.i("K.T").a(400))
n.toString
s=m
r=n
q=2
p=13
o=0.8
break
case B.ah:n=B.bK.h(0,t.e.i("K.T").a(600))
n.toString
s=m
r=n
q=6
p=0
o=1
break
case B.a5:n=B.b3.h(0,t.e.i("K.T").a(900))
n.toString
s=n
r=m
q=0
p=15
o=1
break
case B.ai:n=B.ao.h(0,t.e.i("K.T").a(500))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.aB:n=B.ao.h(0,t.e.i("K.T").a(100))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.M:s=m
r=s
q=13
p=3
o=1
break
case B.aj:n=B.b3.h(0,t.e.i("K.T").a(900))
n.toString
s=m
r=n
q=14
p=5
o=1
break
case B.W:n=B.A.h(0,t.e.i("K.T").a(600))
n.toString
s=m
r=n
q=14
p=15
o=1
break
case B.a6:n=B.ao.h(0,t.e.i("K.T").a(800))
n.toString
s=m
r=n
q=2
p=11
o=1
break
case B.E:n=B.ao.h(0,t.e.i("K.T").a(800))
n.toString
s=m
r=n
q=3
p=2
o=1
break
case B.aC:case B.a7:n=B.ao.h(0,t.e.i("K.T").a(200))
n.toString
s=m
r=n
q=2
p=15
o=1
break
case B.a8:case B.aD:q=11
p=2
o=1
r=B.bN
s=B.I
break
default:s=m
r=s
q=0
p=0
o=1}n=new A.Q(q,p,b,c,r)
n.sb_(0,o)
n.saA(0,s)
return n},
n1:function n1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eI:function eI(a,b,c){var _=this
_.b=a
_.c=null
_.d=b
_.e=c
_.f=!0
_.a=!1},
lH:function lH(a){this.a=a},
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
j:function j(a,b){this.a=a
this.b=b},
nL(a,b,c){return new A.lg(b,c,a)},
ta(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
for(s=0;s<40;++s)for(r=s*100,q=s*36,p=q+25,o=q+36,n=0;n<100;++n){m=(r+n)*24
l=n*24
if(!(m<96e3))return A.a(i,m)
i[m]=l
k=m+1
if(!(k<96e3))return A.a(i,k)
i[k]=q
k=m+2
j=l+24
if(!(k<96e3))return A.a(i,k)
i[k]=j
k=m+3
if(!(k<96e3))return A.a(i,k)
i[k]=q
k=m+4
if(!(k<96e3))return A.a(i,k)
i[k]=l
k=m+5
if(!(k<96e3))return A.a(i,k)
i[k]=p
k=m+6
if(!(k<96e3))return A.a(i,k)
i[k]=j
k=m+7
if(!(k<96e3))return A.a(i,k)
i[k]=p
k=m+8
if(!(k<96e3))return A.a(i,k)
i[k]=j
k=m+9
if(!(k<96e3))return A.a(i,k)
i[k]=q
k=m+10
if(!(k<96e3))return A.a(i,k)
i[k]=l
k=m+11
if(!(k<96e3))return A.a(i,k)
i[k]=p
k=m+18
if(!(k<96e3))return A.a(i,k)
i[k]=l
k=m+19
if(!(k<96e3))return A.a(i,k)
i[k]=p
k=m+20
if(!(k<96e3))return A.a(i,k)
i[k]=j
k=m+21
if(!(k<96e3))return A.a(i,k)
i[k]=p
k=m+22
if(!(k<96e3))return A.a(i,k)
i[k]=l
k=m+23
if(!(k<96e3))return A.a(i,k)
i[k]=o
k=m+14
if(!(k<96e3))return A.a(i,k)
i[k]=j
k=m+15
if(!(k<96e3))return A.a(i,k)
i[k]=o
k=m+12
if(!(k<96e3))return A.a(i,k)
i[k]=j
j=m+13
if(!(j<96e3))return A.a(i,j)
i[j]=p
j=m+16
if(!(j<96e3))return A.a(i,j)
i[j]=l
j=m+17
if(!(j<96e3))return A.a(i,j)
i[j]=o}return i},
lg:function lg(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(a){var _=this
_.b=a
_.c=null
_.a=_.d=!1},
i_:function i_(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=0
_.a=!1},
hF:function hF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null},
mD:function mD(a){this.a=a},
ue(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.I($.F,t.aa),p=J.ol(r),o=p.$ti,n=o.i("~(1)?").a(new A.n0(a,s,r,new A.aj(q,t.fB)))
t.Z.a(null)
A.eV(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
nP(a){var s,r,q,p=null,o=35048,n=5126,m=A.R("  [i]nventory  [e]quipment  [c]haracter  [a]bility",p),l=t.k,k=A.b([],l)
k=new A.fy(m,B.ar,k,B.l)
k.a0(p)
k.G(m)
m=A.b([],t.s)
s=A.nz(A.b([],l),!0)
r=A.b([],l)
m=new A.hG(s,m,r,B.l)
m.a0(p)
s=A.hx(108,s,0,0,0)
r=B.b4.h(0,t.e.i("K.T").a(900))
r.toString
r=A.jK(s,r,!1)
r.f=!1
m.G(r)
l=A.b([],l)
l=new A.eg(k,m,l,B.l)
l.a0(p)
l.G(k)
l.G(m)
m=l.b7("The Something of Something")
l.e=m
l.G(m)
m=A.b([],t.f)
k=A.b([new A.u("u_texture",B.t),new A.u("u_resolution",B.h)],t.o)
s=new Float32Array(12e4)
r=new Float32Array(12e4)
q=new Float32Array(24e4)
m=new A.i6(l,m,A.az(A.b([new A.Y("a_position",o,n,2,s),new A.Y("a_texcoord",o,n,2,r),new A.Y("a_color",o,n,4,q),new A.Y("a_bg_color",o,n,4,new Float32Array(24e4))],t.G),u.I,k,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = ((a_position / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"))
m.ez(a)
return m},
R(a,b){var s=A.b([],t.fC),r=A.b([],t.k)
s=new A.b8(b,a,s,B.L,B.ar,r,B.l)
s.a0(null)
return s},
nz(a,b){var s=new A.fF(b,a,B.l)
s.a0(a)
return s},
jK(a,b,c){var s=A.b([a],t.k),r=new A.fu(b,c,new A.aC(B.l,0,0),s,B.l)
r.a0(s)
return r},
hx(a,b,c,d,e){var s=A.b([b],t.k),r=new A.hw(e,a,c,d,s,B.l)
r.a0(s)
return r},
ny(a,b,c){var s=A.b([a],t.k),r=new A.e4(c,b,B.ar,s,B.l)
r.a0(s)
if(c!=null){s=A.R(c,null)
s.e=B.q
r.e=s
r.G(s)}return r},
dx(a,b,c,d,e,f){var s,r,q,p=B.b.a_(23.76),o=B.b.a_(15.84),n=t.k,m=A.b([],n),l=b.length
if(l!==0)for(s=a==null,r=0;r<b.length;b.length===l||(0,A.w)(b),++r){q=b[r]
m.push(s?A.R(J.co(q),null):a.$1(q))}else m.push(A.R("Empty",null))
p=A.b([A.ny(A.jK(A.hx(p,A.nz(m,!1),o*2,o,p),B.q,!1),B.q,e)],n)
o=new A.dw(b,d,c,p,B.l,f.i("dw<0>"))
o.a0(p)
return o},
nu(a,b,c){var s=B.b.a_(23.76),r=B.b.a_(15.84)
s=A.b([A.ny(A.jK(A.hx(s,a,r*2,r,s),B.q,!0),B.q,c)],t.k)
r=new A.d0(b,s,B.l)
r.a0(s)
return r},
o6(a){var s,r,q,p,o,n,m,l
t.J.a(a)
switch(a.c){case B.X:s=a.d
r=("DiceType."+t.li.a(a.b).e.b).split(".")
if(1>=r.length)return A.a(r,1)
q="1"+r[1]
r=A.b([],t.b)
for(p=s.length+1,o=0;o<p;++o)r.push(B.z)
t.e.i("K.T").a(900)
p=B.A.h(0,900)
p.toString
r.push(p)
for(p=q.length,o=0;o<p;++o)r.push(B.ac)
p=B.A.h(0,900)
p.toString
r.push(p)
return A.R(s+" ["+q+"]",r)
case B.Y:s=a.d
r=("DiceType."+t.kB.a(a.b).f.b).split(".")
if(1>=r.length)return A.a(r,1)
q="1"+r[1]
r=A.b([],t.b)
for(p=s.length+1,o=0;o<p;++o)r.push(B.z)
t.e.i("K.T").a(900)
p=B.A.h(0,900)
p.toString
r.push(p)
for(p=q.length,o=0;o<p;++o)r.push(B.ac)
p=B.A.h(0,900)
p.toString
r.push(p)
return A.R(s+" ["+q+"]",r)
case B.Z:s=a.d
n=t.bB.a(a.b)
m=""+n.c
l=""+n.d
r=A.b([],t.b)
for(p=s.length+1,o=0;o<p;++o)r.push(B.z)
t.e.i("K.T").a(900)
p=B.A.h(0,900)
p.toString
r.push(p)
for(p=l.length,o=0;o<p;++o)r.push(B.ha)
p=B.A.h(0,900)
p.toString
r.push(p)
for(p=m.length,o=0;o<p;++o)r.push(B.ac)
p=B.A.h(0,900)
p.toString
r.push(p)
return A.R(s+" ["+m+"|"+l+"]",r)
case B.aa:case B.a_:case B.aF:case B.ab:r=a.d
return A.R(r,A.as(r.length,B.z,!0,t.i))}},
u0(a){var s,r,q,p
t.l8.a(a)
s=("EquipmentSlot."+a.a.b).split(".")
if(1>=s.length)return A.a(s,1)
r=s[1]
s=a.b
if(s==null)return A.R(r+" | <EMPTY>",null)
q=A.o6(s)
p=A.as(r.length,B.z,!0,t.i)
B.a.k(p,B.z)
s=B.A.h(0,t.e.i("K.T").a(900))
s.toString
B.a.k(p,s)
B.a.k(p,B.z)
s=A.R(r+" | ",p)
s.fX(0,q)
return s},
n0:function n0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i6:function i6(a,b,c){var _=this
_.b=null
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!0
_.a=!1},
m_:function m_(a){this.a=a},
aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},
a7:function a7(){},
b8:function b8(a,b,c,d,e,f,g){var _=this
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
fF:function fF(a,b,c){var _=this
_.e=a
_.a=null
_.b=!0
_.c=b
_.d=c},
fu:function fu(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.b=!0
_.c=d
_.d=e},
hw:function hw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.a=null
_.b=!0
_.c=e
_.d=f},
e4:function e4(a,b,c,d,e){var _=this
_.e=null
_.f=a
_.r=b
_.ch=c
_.a=null
_.b=!0
_.c=d
_.d=e},
dw:function dw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.r=c
_.x=0
_.a=null
_.b=!0
_.c=d
_.d=e
_.$ti=f},
d0:function d0(a,b,c){var _=this
_.e=a
_.a=null
_.b=!0
_.c=b
_.d=c},
hf:function hf(a,b,c){this.a=a
this.b=b
this.$ti=c},
eg:function eg(a,b,c,d){var _=this
_.e=null
_.f=a
_.r=b
_.x=null
_.z=_.y=0
_.a=_.Q=null
_.b=!0
_.c=c
_.d=d},
kJ:function kJ(a){this.a=a},
kB:function kB(a,b){this.a=a
this.b=b},
kA:function kA(a){this.a=a},
kq:function kq(a){this.a=a},
kp:function kp(a){this.a=a},
ko:function ko(){},
ks:function ks(a){this.a=a},
kK:function kK(a){this.a=a},
kr:function kr(a){this.a=a},
kG:function kG(a){this.a=a},
kF:function kF(a){this.a=a},
kD:function kD(a,b){this.a=a
this.b=b},
kC:function kC(a){this.a=a},
kE:function kE(a){this.a=a},
kw:function kw(a){this.a=a},
kv:function kv(a){this.a=a},
ku:function ku(a,b){this.a=a
this.b=b},
kt:function kt(a){this.a=a},
kz:function kz(a){this.a=a},
ky:function ky(a){this.a=a},
kx:function kx(){},
kI:function kI(a){this.a=a},
kH:function kH(a){this.a=a},
bM:function bM(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
fy:function fy(a,b,c,d){var _=this
_.e=a
_.r=_.f=null
_.x=b
_.a=null
_.b=!0
_.c=c
_.d=d},
hG:function hG(a,b,c,d){var _=this
_.e=!1
_.f=a
_.r=b
_.a=null
_.b=!0
_.c=c
_.d=d},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hX:function hX(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.b=!0
_.c=d
_.d=e},
es:function es(a,b,c,d){var _=this
_.e=a
_.f=b
_.a=null
_.b=!0
_.c=c
_.d=d},
hE:function hE(a,b,c,d){var _=this
_.e=a
_.f=b
_.a=null
_.b=!0
_.c=c
_.d=d},
fN:function fN(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.b=!0
_.c=d
_.d=e},
t9(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
for(s=0;s<40;++s)for(r=s*100,q=s*36,p=q+36,o=0;o<100;++o){n=(r+o)*12
m=o*24
if(!(n<96e3))return A.a(j,n)
j[n]=m
l=n+1
if(!(l<96e3))return A.a(j,l)
j[l]=q
l=n+2
k=m+24
if(!(l<96e3))return A.a(j,l)
j[l]=k
l=n+3
if(!(l<96e3))return A.a(j,l)
j[l]=q
l=n+4
if(!(l<96e3))return A.a(j,l)
j[l]=m
l=n+5
if(!(l<96e3))return A.a(j,l)
j[l]=p
l=n+6
if(!(l<96e3))return A.a(j,l)
j[l]=k
l=n+7
if(!(l<96e3))return A.a(j,l)
j[l]=p
l=n+8
if(!(l<96e3))return A.a(j,l)
j[l]=k
k=n+9
if(!(k<96e3))return A.a(j,k)
j[k]=q
k=n+10
if(!(k<96e3))return A.a(j,k)
j[k]=m
k=n+11
if(!(k<96e3))return A.a(j,k)
j[k]=p}return j},
fT:function fT(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.a=_.e=!1},
ih:function ih(a){this.c=a
this.a=!1},
tR(a){var s,r=A.nJ(4000,new A.mQ(a),t.W),q=A.b([],t.c7)
for(s=0;s<4000;++s);return new A.hQ(A.bw(t.j),q,A.ac(t.K,t.J),new A.ag(100,40,r,t.nr),a.b)},
mU(a){var s,r,q,p,o
for(s=a.d,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.d(q,r)
o=s.h(0,p)
if(!(o.c===B.c||A.U(A.be(o.f))))return p}throw A.c("Solid")},
ui(a,b){var s,r,q
for(s=a.d;!0;){r=$.dW()
q=new A.d(B.b.B(r.K()*98)+1,B.b.B(r.K()*38)+1)
r=s.h(0,q)
if(!(r.c===B.c||A.U(A.be(r.f)))&&a.al(q)==null)return q}},
uj(a){var s,r,q,p
for(s=a.d;!0;){r=$.dW()
q=new A.d(B.b.B(r.K()*98)+1,B.b.B(r.K()*38)+1)
p=s.h(0,q)
if(p.c===B.c||A.U(A.be(p.f)))continue
if(p.r!=null)continue
if(p.f!=null)continue
return q}},
bn(a,b,c){return B.b.B(a.K()*(c-b))+b},
td(a,b,c){var s=b.length
if(s===1){if(0>=s)return A.a(b,0)
return b[0]}s=A.bn(a,0,s-1)
if(!(s>=0&&s<b.length))return A.a(b,s)
return b[s]},
ij:function ij(a,b){this.a=a
this.d=0
this.e=b},
mQ:function mQ(a){this.a=a},
hQ:function hQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
m7:function m7(a,b){this.a=a
this.b=b},
k8:function k8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
k9:function k9(a){this.a=a},
fB:function fB(a){this.a=a},
jV:function jV(a){this.a=a},
kM:function kM(){},
kN:function kN(a){this.a=a},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
nl(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.c&&r.h(0,q)!==B.p))break
q=A.Z(q,b);++p}return p},
on(a,b,c){return new A.b3(a,b,c.i("b3<0>"))},
d_(a,b,c){var s=A.Z(a,b)
if(c.e.h(0,s)===B.p)return 1/0
if(c.b.h(0,s)===B.c)return 1
return 0},
oQ(a){return new A.dq(a)},
bX(a,b,c){return new A.cP(c,a,b)},
dU(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=A.b([],t.D),a4=t.S,a5=A.ac(t.c1,a4)
for(s=a7.length,r=0;r<a7.length;a7.length===s||(0,A.w)(a7),++r){q=a7[r]
if(q.gcj())q=new A.je(q)
p=a5.h(0,q)
if(p==null){a5.j(0,q,0)
p=0}a5.j(0,q,p+1)}for(s=a5.gap(a5),s=s.gC(s),o=t.q,n=t.n4,m=t.ld,l=t.bu,k=a6.a,j=J.cY(k),i=t.n;s.p();){h=s.gt(s)
q=h.a
g=h.b
f=A.b([],o)
e=A.b([],i)
for(h=j.gC(k);h.p();){d=h.gt(h)
c=q.gc5(q).ac(d,a8)
if(c<1000){B.a.k(f,d)
B.a.k(e,c)}}if(f.length===0){B.a.k(a3,q)
continue}h=A.b([],l)
for(b=0;b<f.length;++b){d=f[b]
if(!(b<e.length))return A.a(e,b)
h.push(new A.bk(d,e[b]))}d=m.a(new A.nk())
if(!!h.immutable$list)A.W(A.B("sort"))
a=h.length-1
if(a-0<=32)A.oZ(h,0,a,d,n)
else A.oY(h,0,a,d,n)
a0=B.a.en(h,0,Math.min(3*g,e.length))
B.a.bx(a0)
a1=A.b([],o)
a2=A.bw(a4)
for(;!0;){for(b=0;b<a0.length;++b){if(a2.S(0,b))continue
if(a1.length===g)break
if($.q9().K()<0.33){if(!(b<a0.length))return A.a(a0,b)
B.a.k(a1,a0[b].a)
a2.k(0,b)}}h=a1.length
if(h===g)break
else if(g-h>a0.length-a2.a)break}if(a1.length<g)B.a.k(a3,q)
for(h=a1.length,r=0;r<a1.length;a1.length===h||(0,A.w)(a1),++r)q.dU(a1[r],a8)
if(a0.length===0)B.a.k(a3,q)}for(a4=j.gC(k),s=a8.e,o=a6.c;a4.p();){n=a4.gt(a4)
if(s.h(0,n)===B.M||s.h(0,n)===B.a5)B.a.k(o,n)}return a3},
pN(a,b){var s,r,q,p,o,n,m,l,k,j
B.a.b0(a,new A.nj())
if(0>=a.length)return A.a(a,0)
A.dU(a[0],$.qw(),b)
if(0>=a.length)return A.a(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.w)(s),++p)q.j(0,s[p],B.bI)
if(0>=a.length)return A.a(a,0)
a[0].e=!0
for(s=A.p3(a,1,null,A.T(a).c),r=s.$ti,s=new A.bQ(s,s.gm(s),r.i("bQ<bg.E>")),o=b.a.a,r=r.i("bg.E"),n=t.c1,m=2;s.p();){l=r.a(s.d)
k=l.a
j=J.aN(k)
if(j.gm(k)<30){if(m>0){k=A.dl($.nt(),!0,n)
k.push($.og())}else k=$.nt()
if(!B.a.S(A.dU(l,k,b),$.og()))--m}else if(j.gm(k)<60)A.dU(l,$.qn(),b)
else if(j.gm(k)<100)A.dU(l,$.ql(),b)
else switch(o){case B.J:case B.x:case B.r:case B.a1:case B.a2:A.dU(l,$.qh(),b)
break
case B.D:case B.y:A.dU(l,$.qi(),b)
break}}if(m===2){if(0>=a.length)return A.a(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.w)(s),++p)q.j(0,s[p],B.bJ)}},
b5:function b5(){},
ii:function ii(){},
b3:function b3(a,b,c){this.a=a
this.b=b
this.$ti=c},
dr:function dr(a,b){this.b=a
this.$ti=b},
hr:function hr(){},
fC:function fC(){},
fo:function fo(){},
fJ:function fJ(){},
dZ:function dZ(a){this.a=a},
dq:function dq(a){this.a=a},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
ne:function ne(){},
n7:function n7(){},
nb:function nb(){},
n6:function n6(){},
n8:function n8(){},
nc:function nc(){},
nd:function nd(){},
na:function na(){},
n9:function n9(){},
n5:function n5(){},
bk:function bk(a,b){this.a=a
this.b=b},
je:function je(a){this.a=a},
nk:function nk(){},
nj:function nj(){},
qU(a){var s=t.q
return new A.ae(a,A.b([],s),A.b([],s),A.kc(a))},
kc(a){var s,r,q=J.aN(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gm(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.d(B.b.B(p/q.gm(a)),B.b.B(o/q.gm(a)))},
t5(a){switch(a){case B.aj:case B.W:case B.ah:case B.a9:case B.w:case null:return!0
default:return!1}},
eh:function eh(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
jL:function jL(a,b){this.a=a
this.b=b},
jN:function jN(){},
jO:function jO(){},
jP:function jP(a){this.a=a},
jM:function jM(a){this.a=a},
eM:function eM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kb:function kb(a,b){this.a=a
this.b=b},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
fX:function fX(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
kY:function kY(a,b){this.a=a
this.b=b},
lo:function lo(){},
kT:function kT(a){this.a=a},
kU:function kU(){},
kV:function kV(){},
kW:function kW(){},
kX:function kX(){},
lt:function lt(){},
ca:function ca(a){this.b=a},
eF:function eF(a){this.b=a},
lE:function lE(a,b){this.b=a
this.a=b},
eE:function eE(a,b){this.a=a
this.b=b},
lM:function lM(a){this.a=a},
lN:function lN(){},
lO:function lO(a){this.a=a},
bW:function bW(){},
fz:function fz(){},
hL:function hL(){},
he:function he(){},
h2:function h2(){},
rA(a){var s=new A.m2(A.p1(t.h8),A.p1(t.bd))
s.eA(a)
return s},
bf(a,b,c,d){return new A.ab(a,c,d,b)},
m2:function m2(a,b){this.a=null
this.b=a
this.c=b},
m3:function m3(a){this.a=a},
m4:function m4(a){this.a=a},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(a){this.b=a},
uk(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
pH(a){var s=B.i.ae(u.s,a>>>6)+(a&63),r=s&1,q=B.i.ae(u.M,s>>>1)
return q>>>4&-r|q&15&r-1},
pC(a,b){var s=B.i.ae(u.s,1024+(a&1023))+(b&1023),r=s&1,q=B.i.ae(u.M,s>>>1)
return q>>>4&-r|q&15&r-1},
u_(a,b){return J.qD(t.n6.a(a),b)},
qX(a){switch(a){case B.U:return B.aO
case B.C:return B.aP
case B.V:return B.aQ}},
ek(a){var s,r,q
if(a instanceof A.aa){s=a.a
r=B.Z
q=null}else if(a instanceof A.a9){s=a.y
r=B.X
q=null}else if(a instanceof A.aX){s=a.a
r=B.Y
q=0}else{if(a instanceof A.e7){s=a.b
r=B.a_}else if(a instanceof A.e_){s="Ammo "+a.a.l(0)+"|"+a.b
r=B.ab}else{s=J.co(a)
r=B.aa}q=null}$.oD=$.oD+1
return new A.ai(a,r,s,q)},
ub(a,b,c){var s,r,q=a.r
if(q!=null){if(b===q.e)return!0
s=a.q()
r=b.q()
if(s==null||r==null)return!1
return c.f.aj(s).h(0,r)}return!0},
uo(a){A.bm(a)
$.ob().Y(a,$.od())
B.d7.dX(window,A.pI())},
n2(){var s=0,r=A.aL(t.z),q,p
var $async$n2=A.aM(function(a,b){if(a===1)return A.aH(b,r)
while(true)switch(s){case 0:p=$.ob()
s=2
return A.a4(p.e.bl(),$async$n2)
case 2:p=A.r3(p)
B.a.k(p.a.c,t.x.a(p.gd_()))
p=$.qo()
if(p!=null){q=p.parentNode
if(q!=null)q.removeChild(p)}B.d7.dX(window,A.pI())
return A.aI(null,r)}})
return A.aJ($async$n2,r)}},J={
o7(a,b,c,d){return{i:a,p:b,e:c,x:d}},
mW(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.o5==null){A.u8()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.c(A.nQ("Return interceptor for "+A.G(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.mv
if(o==null)o=$.mv=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.ug(a)
if(p!=null)return p
if(typeof a=="function")return B.fK
s=Object.getPrototypeOf(a)
if(s==null)return B.bS
if(s===Object.prototype)return B.bS
if(typeof q=="function"){o=$.mv
if(o==null)o=$.mv=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.ba,enumerable:false,writable:true,configurable:true})
return B.ba}return B.ba},
r8(a,b){if(a<0||a>4294967295)throw A.c(A.c9(a,0,4294967295,"length",null))
return J.r9(new Array(a),b)},
oG(a,b){if(a<0)throw A.c(A.d2("Length must be a non-negative integer: "+a,null))
return A.b(new Array(a),b.i("p<0>"))},
r9(a,b){return J.oH(A.b(a,b.i("p<0>")),b)},
oH(a,b){a.fixed$length=Array
return a},
oI(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ra(a,b){var s,r
for(s=a.length;b<s;){r=B.i.ae(a,b)
if(r!==32&&r!==13&&!J.oI(r))break;++b}return b},
rb(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.i.aB(a,s)
if(r!==32&&r!==13&&!J.oI(r))break}return b},
dT(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.en.prototype
return J.h8.prototype}if(typeof a=="string")return J.cA.prototype
if(a==null)return J.eo.prototype
if(typeof a=="boolean")return J.em.prototype
if(a.constructor==Array)return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bN.prototype
return a}if(a instanceof A.v)return a
return J.mW(a)},
aN(a){if(typeof a=="string")return J.cA.prototype
if(a==null)return a
if(a.constructor==Array)return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bN.prototype
return a}if(a instanceof A.v)return a
return J.mW(a)},
cY(a){if(a==null)return a
if(a.constructor==Array)return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bN.prototype
return a}if(a instanceof A.v)return a
return J.mW(a)},
u4(a){if(typeof a=="number")return J.dh.prototype
if(typeof a=="string")return J.cA.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.dC.prototype
return a},
mV(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bN.prototype
return a}if(a instanceof A.v)return a
return J.mW(a)},
a_(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dT(a).n(a,b)},
oi(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.uc(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aN(a).h(a,b)},
oj(a,b,c){return J.cY(a).j(a,b,c)},
qC(a,b,c,d){return J.mV(a).fR(a,b,c,d)},
qD(a,b){return J.u4(a).a2(a,b)},
qE(a,b){return J.cY(a).S(a,b)},
ok(a,b){return J.cY(a).H(a,b)},
qF(a,b){return J.cY(a).J(a,b)},
aO(a){return J.dT(a).gF(a)},
ak(a){return J.cY(a).gC(a)},
aw(a){return J.aN(a).gm(a)},
ol(a){return J.mV(a).gcg(a)},
qG(a,b,c){return J.cY(a).dO(a,b,c)},
co(a){return J.dT(a).l(a)},
dg:function dg(){},
em:function em(){},
eo:function eo(){},
l1:function l1(){},
cC:function cC(){},
hA:function hA(){},
dC:function dC(){},
bN:function bN(){},
p:function p(a){this.$ti=a},
l0:function l0(a){this.$ti=a},
e0:function e0(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dh:function dh(){},
en:function en(){},
h8:function h8(){},
cA:function cA(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.nF.prototype={}
J.dg.prototype={
n(a,b){return a===b},
gF(a){return A.cL(a)},
l(a){return"Instance of '"+A.lv(a)+"'"}}
J.em.prototype={
l(a){return String(a)},
ee(a,b){return b||a},
gF(a){return a?519018:218159},
$iC:1}
J.eo.prototype={
n(a,b){return null==b},
l(a){return"null"},
gF(a){return 0},
$ia5:1}
J.l1.prototype={}
J.cC.prototype={
gF(a){return 0},
l(a){return String(a)}}
J.hA.prototype={}
J.dC.prototype={}
J.bN.prototype={
l(a){var s=a[$.pT()]
if(s==null)return this.eu(a)
return"JavaScript function for "+J.co(s)},
$icx:1}
J.p.prototype={
k(a,b){A.T(a).c.a(b)
if(!!a.fixed$length)A.W(A.B("add"))
a.push(b)},
bp(a,b){var s
if(!!a.fixed$length)A.W(A.B("removeAt"))
s=a.length
if(b>=s)throw A.c(A.oT(b,null))
return a.splice(b,1)[0]},
A(a,b){var s
if(!!a.fixed$length)A.W(A.B("remove"))
for(s=0;s<a.length;++s)if(J.a_(a[s],b)){a.splice(s,1)
return!0}return!1},
aP(a,b,c){var s,r,q,p,o
A.T(a).i("C(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.U(b.$1(p)))s.push(p)
if(a.length!==r)throw A.c(A.b4(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
M(a,b){var s
A.T(a).i("i<1>").a(b)
if(!!a.fixed$length)A.W(A.B("addAll"))
if(Array.isArray(b)){this.eD(a,b)
return}for(s=J.ak(b);s.p();)a.push(s.gt(s))},
eD(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.c(A.b4(a))
for(r=0;r<s;++r)a.push(b[r])},
J(a,b){var s,r
A.T(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.c(A.b4(a))}},
dO(a,b,c){var s=A.T(a)
return new A.cF(a,s.L(c).i("1(2)").a(b),s.i("@<1>").L(c).i("cF<1,2>"))},
hz(a,b){var s,r,q
A.T(a).i("1(1,1)").a(b)
s=a.length
if(s===0)throw A.c(A.kZ())
if(0>=s)return A.a(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw A.c(A.b4(a))}return r},
hb(a,b,c){var s,r,q,p=A.T(a)
p.i("C(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(A.U(b.$1(q)))return q
if(a.length!==s)throw A.c(A.b4(a))}return c.$0()},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
en(a,b,c){var s=a.length
if(b>s)throw A.c(A.c9(b,0,s,"start",null))
if(c<b||c>s)throw A.c(A.c9(c,b,s,"end",null))
if(b===c)return A.b([],A.T(a))
return A.b(a.slice(b,c),A.T(a))},
gc9(a){if(a.length>0)return a[0]
throw A.c(A.kZ())},
gby(a){var s=a.length
if(s===1){if(0>=s)return A.a(a,0)
return a[0]}if(s===0)throw A.c(A.kZ())
throw A.c(A.oF())},
cv(a,b,c,d){var s,r,q,p
A.T(a).i("i<1>").a(d)
if(!!a.immutable$list)A.W(A.B("setRange"))
A.lB(b,c,a.length)
s=c-b
if(s===0)return
A.lA(0,"skipCount")
r=d
q=J.aN(r)
if(s>q.gm(r))throw A.c(A.r7())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
fW(a,b){var s,r
A.T(a).i("C(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.U(b.$1(a[r])))return!0
if(a.length!==s)throw A.c(A.b4(a))}return!1},
b0(a,b){var s=A.T(a)
s.i("h(1,1)?").a(b)
if(!!a.immutable$list)A.W(A.B("sort"))
A.ru(a,b,s.c)},
bx(a){var s,r,q,p
if(!!a.immutable$list)A.W(A.B("shuffle"))
s=a.length
for(;s>1;){r=B.u.R(s);--s
q=a.length
if(!(s<q))return A.a(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.a(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
hk(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.a(a,s)
if(J.a_(a[s],b))return s}return-1},
S(a,b){var s
for(s=0;s<a.length;++s)if(J.a_(a[s],b))return!0
return!1},
l(a){return A.nE(a,"[","]")},
gC(a){return new J.e0(a,a.length,A.T(a).i("e0<1>"))},
gF(a){return A.cL(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.W(A.B("set length"))
if(b>a.length)A.T(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.c(A.cX(a,b))
return a[b]},
j(a,b,c){A.N(b)
A.T(a).c.a(c)
if(!!a.immutable$list)A.W(A.B("indexed set"))
if(!(b>=0&&b<a.length))throw A.c(A.cX(a,b))
a[b]=c},
v(a,b){var s=A.T(a)
s.i("m<1>").a(b)
s=A.dl(a,!0,s.c)
this.M(s,b)
return s},
$io:1,
$ii:1,
$im:1}
J.l0.prototype={}
J.e0.prototype={
gt(a){return this.$ti.c.a(this.d)},
p(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.w(q))
s=r.c
if(s>=p){r.scS(null)
return!1}r.scS(q[s]);++r.c
return!0},
scS(a){this.d=this.$ti.i("1?").a(a)},
$ia1:1}
J.dh.prototype={
a2(a,b){var s
A.bm(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbm(b)
if(this.gbm(a)===s)return 0
if(this.gbm(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbm(a){return a===0?1/a<0:a<0},
a_(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.B(""+a+".toInt()"))},
dq(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.B(""+a+".ceil()"))},
aE(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.B(""+a+".floor()"))},
B(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.B(""+a+".round()"))},
ai(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
c3(a,b,c){if(B.f.a2(b,c)>0)throw A.c(A.pu(b))
if(this.a2(a,b)<0)return b
if(this.a2(a,c)>0)return c
return a},
e0(a,b){var s
if(b>20)throw A.c(A.c9(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbm(a))return"-"+s
return s},
hL(a,b){var s,r,q,p
if(b<2||b>36)throw A.c(A.c9(b,2,36,"radix",null))
s=a.toString(b)
if(B.i.aB(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.W(A.B("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.a(r,1)
s=r[1]
if(3>=q)return A.a(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.i.ct("0",p)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
cB(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.da(a,b)},
af(a,b){return(a|0)===a?a/b|0:this.da(a,b)},
da(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.B("Result of truncating division is "+A.G(s)+": "+A.G(a)+" ~/ "+b))},
d8(a,b){var s
if(a>0)s=this.fC(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fC(a,b){return b>31?0:a>>>b},
$iaq:1,
$iS:1,
$iV:1}
J.en.prototype={$ih:1}
J.h8.prototype={}
J.cA.prototype={
aB(a,b){if(b<0)throw A.c(A.cX(a,b))
if(b>=a.length)A.W(A.cX(a,b))
return a.charCodeAt(b)},
ae(a,b){if(b>=a.length)throw A.c(A.cX(a,b))
return a.charCodeAt(b)},
v(a,b){return a+b},
b2(a,b,c){return a.substring(b,A.lB(b,c,a.length))},
hN(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.ae(p,0)===133){s=J.ra(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.aB(p,r)===133?J.rb(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ct(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.dL)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
dV(a,b,c){var s=b-a.length
if(s<=0)return a
return this.ct(c,s)+a},
a2(a,b){var s
A.a6(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
l(a){return a},
gF(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return a.length},
h(a,b){if(b>=a.length)throw A.c(A.cX(a,b))
return a[b]},
$iaq:1,
$it:1}
A.cB.prototype={
l(a){var s="LateInitializationError: "+this.a
return s}}
A.lF.prototype={}
A.o.prototype={}
A.bg.prototype={
gC(a){var s=this
return new A.bQ(s,s.gm(s),A.E(s).i("bQ<bg.E>"))}}
A.eK.prototype={
gf4(){var s=J.aw(this.a),r=this.c
if(r==null||r>s)return s
return r},
gfE(){var s=J.aw(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.aw(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.ad()
return s-q},
H(a,b){var s=this,r=s.gfE()+b
if(b<0||r>=s.gf4())throw A.c(A.a0(b,s,"index",null,null))
return J.ok(s.a,r)}}
A.bQ.prototype={
gt(a){return this.$ti.c.a(this.d)},
p(){var s,r=this,q=r.a,p=J.aN(q),o=p.gm(q)
if(r.b!==o)throw A.c(A.b4(q))
s=r.c
if(s>=o){r.saL(null)
return!1}r.saL(p.H(q,s));++r.c
return!0},
saL(a){this.d=this.$ti.i("1?").a(a)},
$ia1:1}
A.cE.prototype={
gC(a){var s=A.E(this)
return new A.eu(J.ak(this.a),this.b,s.i("@<1>").L(s.Q[1]).i("eu<1,2>"))},
gm(a){return J.aw(this.a)}}
A.ec.prototype={$io:1}
A.eu.prototype={
p(){var s=this,r=s.b
if(r.p()){s.saL(s.c.$1(r.gt(r)))
return!0}s.saL(null)
return!1},
gt(a){return this.$ti.Q[1].a(this.a)},
saL(a){this.a=this.$ti.i("2?").a(a)}}
A.cF.prototype={
gm(a){return J.aw(this.a)},
H(a,b){return this.b.$1(J.ok(this.a,b))}}
A.b1.prototype={
gC(a){return new A.eN(J.ak(this.a),this.b,this.$ti.i("eN<1>"))}}
A.eN.prototype={
p(){var s,r
for(s=this.a,r=this.b;s.p();)if(A.U(r.$1(s.gt(s))))return!0
return!1},
gt(a){var s=this.a
return s.gt(s)}}
A.ay.prototype={}
A.db.prototype={
l(a){return A.nK(this)},
$ia3:1}
A.e6.prototype={
gm(a){return this.a},
aU(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.aU(0,b))return null
return this.b[A.a6(b)]},
J(a,b){var s,r,q,p,o,n=this.$ti
n.i("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.a6(s[p])
b.$2(o,n.a(q[o]))}}}
A.af.prototype={
bP(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.r5(r)
o=A.nH(A.tt(),q,r,s.Q[1])
A.pA(p.a,o)
p.$map=o}return o},
h(a,b){return this.bP().h(0,b)},
J(a,b){this.$ti.i("~(1,2)").a(b)
this.bP().J(0,b)},
gm(a){var s=this.bP()
return s.gm(s)}}
A.kL.prototype={
$1(a){return this.a.b(a)},
$S:16}
A.lY.prototype={
an(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.eB.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.h9.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.i9.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.lq.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ed.prototype={}
A.f6.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibi:1}
A.cs.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.pO(r==null?"unknown":r)+"'"},
$icx:1,
ghV(){return this},
$C:"$1",
$R:1,
$D:null}
A.fD.prototype={$C:"$0",$R:0}
A.fE.prototype={$C:"$2",$R:2}
A.hY.prototype={}
A.hS.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.pO(s)+"'"}}
A.d9.prototype={
n(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.d9))return!1
return this.$_target===b.$_target&&this.a===b.a},
gF(a){return(A.n4(this.a)^A.cL(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.lv(t.K.a(this.a))+"'")}}
A.hI.prototype={
l(a){return"RuntimeError: "+this.a}}
A.ik.prototype={
l(a){return"Assertion failed: "+A.fS(this.a)}}
A.aT.prototype={
gm(a){return this.a},
ga9(a){return new A.eq(this,A.E(this).i("eq<1>"))},
gcq(a){var s=this,r=A.E(s)
return A.oN(s.ga9(s),new A.l3(s),r.c,r.Q[1])},
aU(a,b){var s,r
if(typeof b=="string"){s=this.b
if(s==null)return!1
return this.eQ(s,b)}else{r=this.dH(b)
return r}},
dH(a){var s=this,r=s.d
if(r==null)return!1
return s.aJ(s.b8(r,s.aI(a)),a)>=0},
M(a,b){A.E(this).i("a3<1,2>").a(b).J(0,new A.l2(this))},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.aN(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.aN(p,b)
q=r==null?n:r.b
return q}else return o.dI(b)},
dI(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.b8(p,q.aI(a))
r=q.aJ(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.E(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.cD(s==null?q.b=q.bT():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cD(r==null?q.c=q.bT():r,b,c)}else q.dK(b,c)},
dK(a,b){var s,r,q,p,o=this,n=A.E(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.bT()
r=o.aI(a)
q=o.b8(s,r)
if(q==null)o.c_(s,r,[o.bU(a,b)])
else{p=o.aJ(q,a)
if(p>=0)q[p].b=b
else q.push(o.bU(a,b))}},
A(a,b){var s=this
if(typeof b=="string")return s.d6(s.b,b)
else if(typeof b=="number"&&(b&0x3ffffff)===b)return s.d6(s.c,b)
else return s.dJ(b)},
dJ(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.aI(a)
r=o.b8(n,s)
q=o.aJ(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.dd(p)
if(r.length===0)o.bJ(n,s)
return p.b},
bg(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bS()}},
J(a,b){var s,r,q=this
A.E(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.b4(q))
s=s.c}},
cD(a,b,c){var s,r=this,q=A.E(r)
q.c.a(b)
q.Q[1].a(c)
s=r.aN(a,b)
if(s==null)r.c_(a,b,r.bU(b,c))
else s.b=c},
d6(a,b){var s
if(a==null)return null
s=this.aN(a,b)
if(s==null)return null
this.dd(s)
this.bJ(a,b)
return s.b},
bS(){this.r=this.r+1&67108863},
bU(a,b){var s=this,r=A.E(s),q=new A.l9(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.bS()
return q},
dd(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.bS()},
aI(a){return J.aO(a)&0x3ffffff},
aJ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a_(a[r].a,b))return r
return-1},
l(a){return A.nK(this)},
aN(a,b){return a[b]},
b8(a,b){return a[b]},
c_(a,b,c){a[b]=c},
bJ(a,b){delete a[b]},
eQ(a,b){return this.aN(a,b)!=null},
bT(){var s="<non-identifier-key>",r=Object.create(null)
this.c_(r,s,r)
this.bJ(r,s)
return r},
$il8:1}
A.l3.prototype={
$1(a){var s=this.a,r=A.E(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.E(this.a).i("2(1)")}}
A.l2.prototype={
$2(a,b){var s=this.a,r=A.E(s)
s.j(0,r.c.a(a),r.Q[1].a(b))},
$S(){return A.E(this.a).i("~(1,2)")}}
A.l9.prototype={}
A.eq.prototype={
gm(a){return this.a.a},
gC(a){var s=this.a,r=new A.er(s,s.r,this.$ti.i("er<1>"))
r.c=s.e
return r}}
A.er.prototype={
gt(a){return this.d},
p(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.b4(q))
s=r.c
if(s==null){r.scC(null)
return!1}else{r.scC(s.a)
r.c=s.c
return!0}},
scC(a){this.d=this.$ti.i("1?").a(a)},
$ia1:1}
A.mX.prototype={
$1(a){return this.a(a)},
$S:25}
A.mY.prototype={
$2(a,b){return this.a(a,b)},
$S:83}
A.mZ.prototype={
$1(a){return this.a(A.a6(a))},
$S:33}
A.mf.prototype={
bb(){var s=this.b
if(s===this)throw A.c(new A.cB("Local '"+this.a+"' has not been initialized."))
return s},
u(){var s=this.b
if(s===this)throw A.c(A.oK(this.a))
return s}}
A.hk.prototype={$iov:1}
A.cJ.prototype={$ib0:1}
A.dp.prototype={
gm(a){return a.length},
$iD:1}
A.cI.prototype={
h(a,b){A.c0(b,a,a.length)
return a[b]},
j(a,b,c){A.N(b)
A.nZ(c)
A.c0(b,a,a.length)
a[b]=c},
$io:1,
$ii:1,
$im:1}
A.ew.prototype={
j(a,b,c){A.N(b)
A.N(c)
A.c0(b,a,a.length)
a[b]=c},
$io:1,
$ii:1,
$im:1}
A.ev.prototype={$inD:1}
A.hl.prototype={
h(a,b){A.c0(b,a,a.length)
return a[b]}}
A.hm.prototype={
h(a,b){A.c0(b,a,a.length)
return a[b]}}
A.hn.prototype={
h(a,b){A.c0(b,a,a.length)
return a[b]}}
A.ho.prototype={
h(a,b){A.c0(b,a,a.length)
return a[b]}}
A.hp.prototype={
h(a,b){A.c0(b,a,a.length)
return a[b]}}
A.ex.prototype={
gm(a){return a.length},
h(a,b){A.c0(b,a,a.length)
return a[b]}}
A.ey.prototype={
gm(a){return a.length},
h(a,b){A.c0(b,a,a.length)
return a[b]},
$irz:1}
A.f_.prototype={}
A.f0.prototype={}
A.f1.prototype={}
A.f2.prototype={}
A.bh.prototype={
i(a){return A.mG(v.typeUniverse,this,a)},
L(a){return A.rZ(v.typeUniverse,this,a)}}
A.iC.prototype={}
A.fc.prototype={
l(a){return A.av(this.a,null)},
$ip5:1}
A.iy.prototype={
l(a){return this.a}}
A.fd.prototype={$ice:1}
A.mc.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
A.mb.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:44}
A.md.prototype={
$0(){this.a.$0()},
$S:8}
A.me.prototype={
$0(){this.a.$0()},
$S:8}
A.fb.prototype={
eB(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.bD(new A.mF(this,b),0),a)
else throw A.c(A.B("`setTimeout()` not found."))},
eC(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.bD(new A.mE(this,a,Date.now(),b),0),a)
else throw A.c(A.B("Periodic timer."))},
fZ(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.c(A.B("Canceling a timer."))},
$ii2:1}
A.mF.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.mE.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.f.cB(s,o)}q.c=p
r.d.$1(q)},
$S:8}
A.eO.prototype={
ag(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.cG(b)
else{s=r.a
if(q.i("al<1>").b(b))s.cK(b)
else s.aM(q.c.a(b))}},
c4(a,b){var s=this.a
if(this.b)s.a7(a,b)
else s.bD(a,b)},
$ifG:1}
A.mJ.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.mK.prototype={
$2(a,b){this.a.$2(1,new A.ed(a,t.l.a(b)))},
$S:27}
A.mP.prototype={
$2(a,b){this.a(A.N(a),b)},
$S:30}
A.dM.prototype={
l(a){return"IterationMarker("+this.b+", "+A.G(this.a)+")"}}
A.cj.prototype={
gt(a){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gt(s)},
p(){var s,r,q,p,o,n,m=this
for(s=m.$ti.i("a1<1>");!0;){r=m.c
if(r!=null)if(r.p())return!0
else m.scZ(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.dM){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.scF(null)
return!1}if(0>=o.length)return A.a(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.ak(r))
if(n instanceof A.cj){r=m.d
if(r==null)r=m.d=[]
B.a.k(r,m.a)
m.a=n.a
continue}else{m.scZ(n)
continue}}}}else{m.scF(q)
return!0}}return!1},
scF(a){this.b=this.$ti.i("1?").a(a)},
scZ(a){this.c=this.$ti.i("a1<1>?").a(a)},
$ia1:1}
A.f8.prototype={
gC(a){return new A.cj(this.a(),this.$ti.i("cj<1>"))}}
A.e2.prototype={
l(a){return A.G(this.a)},
$iP:1,
gb1(){return this.b}}
A.eQ.prototype={}
A.bY.prototype={
bW(){},
bX(){},
sbV(a){this.dy=this.$ti.i("bY<1>?").a(a)},
sd1(a){this.fr=this.$ti.i("bY<1>?").a(a)}}
A.eR.prototype={
gfh(){return this.c<4},
d9(a,b,c,d){var s,r,q,p,o,n=this,m=A.E(n)
m.i("~(1)?").a(a)
t.Z.a(c)
if((n.c&4)!==0){m=new A.dK($.F,c,m.i("dK<1>"))
m.fv()
return m}s=$.F
r=d?1:0
t.bm.L(m.c).i("1(2)").a(a)
A.p8(s,b)
q=c==null?A.pv():c
t.M.a(q)
m=m.i("bY<1>")
p=new A.bY(n,a,s,r,m)
p.sd1(p)
p.sbV(p)
m.a(p)
p.dx=n.c&1
o=n.e
n.sfe(p)
p.sbV(null)
p.sd1(o)
if(o==null)n.sf8(p)
else o.sbV(p)
if(n.d==n.e)A.mO(n.a)
return p},
d4(a){A.E(this).i("aF<1>").a(a)},
d5(a){A.E(this).i("aF<1>").a(a)},
eE(){if((this.c&4)!==0)return new A.bj("Cannot add new events after calling close")
return new A.bj("Cannot add new events while doing an addStream")},
k(a,b){var s=this
A.E(s).c.a(b)
if(!s.gfh())throw A.c(s.eE())
s.aQ(b)},
sf8(a){this.d=A.E(this).i("bY<1>?").a(a)},
sfe(a){this.e=A.E(this).i("bY<1>?").a(a)},
$ihU:1,
$ij0:1,
$ibl:1}
A.eP.prototype={
aQ(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.i("bZ<1>");s!=null;s=s.dy)s.cE(new A.bZ(a,r))}}
A.ki.prototype={
$0(){this.b.bH(this.c.a(null))},
$S:0}
A.kk.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.a7(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.a7(q.e.bb(),q.f.bb())},
$S:9}
A.kj.prototype={
$1(a){var s,r,q=this,p=q.x
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.oj(s,q.b,a)
if(r.b===0)q.c.aM(A.rh(s,p))}else if(r.b===0&&!q.e)q.c.a7(q.f.bb(),q.r.bb())},
$S(){return this.x.i("a5(0)")}}
A.dJ.prototype={
c4(a,b){A.cW(a,"error",t.K)
if((this.a.a&30)!==0)throw A.c(A.am("Future already completed"))
if(b==null)b=A.nx(a)
this.a7(a,b)},
bh(a){return this.c4(a,null)},
$ifG:1}
A.aj.prototype={
ag(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.c(A.am("Future already completed"))
s.cG(r.i("1/").a(b))},
aS(a){return this.ag(a,null)},
a7(a,b){this.a.bD(a,b)}}
A.dO.prototype={
ag(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.c(A.am("Future already completed"))
s.bH(r.i("1/").a(b))},
aS(a){return this.ag(a,null)},
a7(a,b){this.a.a7(a,b)}}
A.c_.prototype={
hm(a){if((this.c&15)!==6)return!0
return this.b.b.cn(t.iW.a(this.d),a.a,t.k4,t.K)},
hh(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.hH(q,m,a.b,o,n,t.l)
else p=l.cn(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bE.b(A.bE(s))){if((r.c&1)!==0)throw A.c(A.d2("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.d2("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.I.prototype={
bs(a,b,c){var s,r,q,p=this.$ti
p.L(c).i("1/(2)").a(a)
s=$.F
if(s===B.v){if(b!=null&&!t.ng.b(b)&&!t.y.b(b))throw A.c(A.nw(b,"onError",u.w))}else{c.i("@<0/>").L(p.c).i("1(2)").a(a)
if(b!=null)b=A.tx(b,s)}r=new A.I(s,c.i("I<0>"))
q=b==null?1:3
this.b5(new A.c_(r,q,a,b,p.i("@<1>").L(c).i("c_<1,2>")))
return r},
co(a,b){return this.bs(a,null,b)},
dc(a,b,c){var s,r=this.$ti
r.L(c).i("1/(2)").a(a)
s=new A.I($.F,c.i("I<0>"))
this.b5(new A.c_(s,19,a,b,r.i("@<1>").L(c).i("c_<1,2>")))
return s},
fA(a){this.a=this.a&1|16
this.c=a},
bF(a){this.a=a.a&30|this.a&1
this.c=a.c},
b5(a){var s,r=this,q=r.a
if(q<=3){a.a=t.d.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.b5(a)
return}r.bF(s)}A.cV(null,null,r.b,t.M.a(new A.mi(r,a)))}},
d0(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.d.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.d0(a)
return}m.bF(n)}l.a=m.bd(a)
A.cV(null,null,m.b,t.M.a(new A.mq(l,m)))}},
bc(){var s=t.d.a(this.c)
this.c=null
return this.bd(s)},
bd(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cJ(a){var s,r,q,p=this
p.a^=2
try{a.bs(new A.mm(p),new A.mn(p),t.P)}catch(q){s=A.bE(q)
r=A.c1(q)
A.pM(new A.mo(p,s,r))}},
bH(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("al<1>").b(a))if(q.b(a))A.ml(a,r)
else r.cJ(a)
else{s=r.bc()
q.c.a(a)
r.a=8
r.c=a
A.dL(r,s)}},
aM(a){var s,r=this
r.$ti.c.a(a)
s=r.bc()
r.a=8
r.c=a
A.dL(r,s)},
a7(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.bc()
this.fA(A.jB(a,b))
A.dL(this,s)},
cG(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("al<1>").b(a)){this.cK(a)
return}this.eG(s.c.a(a))},
eG(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.cV(null,null,s.b,t.M.a(new A.mk(s,a)))},
cK(a){var s=this,r=s.$ti
r.i("al<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.cV(null,null,s.b,t.M.a(new A.mp(s,a)))}else A.ml(a,s)
return}s.cJ(a)},
bD(a,b){t.l.a(b)
this.a^=2
A.cV(null,null,this.b,t.M.a(new A.mj(this,a,b)))},
$ial:1}
A.mi.prototype={
$0(){A.dL(this.a,this.b)},
$S:0}
A.mq.prototype={
$0(){A.dL(this.b,this.a.a)},
$S:0}
A.mm.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.aM(p.$ti.c.a(a))}catch(q){s=A.bE(q)
r=A.c1(q)
p.a7(s,r)}},
$S:17}
A.mn.prototype={
$2(a,b){this.a.a7(t.K.a(a),t.l.a(b))},
$S:42}
A.mo.prototype={
$0(){this.a.a7(this.b,this.c)},
$S:0}
A.mk.prototype={
$0(){this.a.aM(this.b)},
$S:0}
A.mp.prototype={
$0(){A.ml(this.b,this.a)},
$S:0}
A.mj.prototype={
$0(){this.a.a7(this.b,this.c)},
$S:0}
A.mt.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.hG(t.mY.a(q.d),t.z)}catch(p){s=A.bE(p)
r=A.c1(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.jB(s,r)
o.b=!0
return}if(l instanceof A.I&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.g7.b(l)){n=m.b.a
q=m.a
q.c=l.co(new A.mu(n),t.z)
q.b=!1}},
$S:0}
A.mu.prototype={
$1(a){return this.a},
$S:38}
A.ms.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cn(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bE(l)
r=A.c1(l)
q=this.a
q.c=A.jB(s,r)
q.b=!0}},
$S:0}
A.mr.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.hm(s)&&p.a.e!=null){p.c=p.a.hh(s)
p.b=!1}}catch(o){r=A.bE(o)
q=A.c1(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.jB(r,q)
n.b=!0}},
$S:0}
A.il.prototype={}
A.cb.prototype={
gm(a){var s={},r=new A.I($.F,t.hy)
s.a=0
this.ce(new A.lK(s,this),!0,new A.lL(s,r),r.geO())
return r}}
A.lK.prototype={
$1(a){A.E(this.b).c.a(a);++this.a.a},
$S(){return A.E(this.b).i("~(1)")}}
A.lL.prototype={
$0(){this.b.bH(this.a.a)},
$S:0}
A.aF.prototype={}
A.f7.prototype={
gfm(){var s,r=this
if((r.b&8)===0)return A.E(r).i("ci<1>?").a(r.a)
s=A.E(r)
return s.i("ci<1>?").a(s.i("j_<1>").a(r.a).gcr())},
f5(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.bC(A.E(q).i("bC<1>"))
return A.E(q).i("bC<1>").a(s)}r=A.E(q)
s=r.i("j_<1>").a(q.a).gcr()
return r.i("bC<1>").a(s)},
gfF(){var s=this.a
if((this.b&8)!==0)s=t.gL.a(s).gcr()
return A.E(this).i("cg<1>").a(s)},
eL(){if((this.b&4)!==0)return new A.bj("Cannot add event after closing")
return new A.bj("Cannot add event while adding a stream")},
k(a,b){var s,r=this,q=A.E(r)
q.c.a(b)
s=r.b
if(s>=4)throw A.c(r.eL())
if((s&1)!==0)r.aQ(b)
else if((s&3)===0)r.f5().k(0,new A.bZ(b,q.i("bZ<1>")))},
d9(a,b,c,d){var s,r,q,p,o=this,n=A.E(o)
n.i("~(1)?").a(a)
t.Z.a(c)
if((o.b&3)!==0)throw A.c(A.am("Stream has already been listened to."))
s=A.rH(o,a,b,c,d,n.c)
r=o.gfm()
q=o.b|=1
if((q&8)!==0){p=n.i("j_<1>").a(o.a)
p.scr(s)
p.hE(0)}else o.a=s
s.fB(r)
n=t.M.a(new A.mC(o))
q=s.e
s.e=q|32
n.$0()
s.e&=4294967263
s.cL((q&4)!==0)
return s},
d4(a){var s=this,r=A.E(s)
r.i("aF<1>").a(a)
if((s.b&8)!==0)r.i("j_<1>").a(s.a).hW(0)
A.mO(s.e)},
d5(a){var s=this,r=A.E(s)
r.i("aF<1>").a(a)
if((s.b&8)!==0)r.i("j_<1>").a(s.a).hE(0)
A.mO(s.f)},
$ihU:1,
$ij0:1,
$ibl:1}
A.mC.prototype={
$0(){A.mO(this.a.d)},
$S:0}
A.im.prototype={
aQ(a){var s=this.$ti
s.c.a(a)
this.gfF().cE(new A.bZ(a,s.i("bZ<1>")))}}
A.dH.prototype={}
A.bB.prototype={
gF(a){return(A.cL(this.a)^892482866)>>>0},
n(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bB&&b.a===this.a}}
A.cg.prototype={
bW(){this.x.d4(this)},
bX(){this.x.d5(this)}}
A.dI.prototype={
fB(a){var s=this
A.E(s).i("ci<1>?").a(a)
if(a==null)return
s.sbY(a)
if(a.c!=null){s.e|=64
a.bw(s)}},
bW(){},
bX(){},
cE(a){var s=this,r=A.E(s),q=r.i("bC<1>?").a(s.r)
if(q==null)q=new A.bC(r.i("bC<1>"))
s.sbY(q)
q.k(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.bw(s)}},
aQ(a){var s,r=this,q=A.E(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.dZ(r.a,a,q)
r.e&=4294967263
r.cL((s&4)!==0)},
cL(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.sbY(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.bW()
else q.bX()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.bw(q)},
sbY(a){this.r=A.E(this).i("ci<1>?").a(a)},
$iaF:1,
$ibl:1}
A.dN.prototype={
ce(a,b,c,d){var s=A.E(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.d9(s.i("~(1)?").a(a),d,c,b===!0)},
cd(a){return this.ce(a,null,null,null)}}
A.it.prototype={}
A.bZ.prototype={}
A.ci.prototype={
bw(a){var s,r=this
r.$ti.i("bl<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.pM(new A.mz(r,a))
r.a=1}}
A.mz.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("bl<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.E(r).i("bl<1>").a(s).aQ(r.b)},
$S:0}
A.bC.prototype={
k(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.dK.prototype={
fv(){var s=this
if((s.b&2)!==0)return
A.cV(null,null,s.a,t.M.a(s.gfw()))
s.b|=2},
fz(){var s,r=this,q=r.b&=4294967293
if(q>=4)return
r.b=q|1
s=r.c
if(s!=null)r.a.dY(s)},
$iaF:1}
A.j1.prototype={}
A.fg.prototype={$ip7:1}
A.mN.prototype={
$0(){var s=this.a,r=this.b
A.cW(s,"error",t.K)
A.cW(r,"stackTrace",t.l)
A.qZ(s,r)},
$S:0}
A.iU.prototype={
dY(a){var s,r,q
t.M.a(a)
try{if(B.v===$.F){a.$0()
return}A.pp(null,null,this,a,t.H)}catch(q){s=A.bE(q)
r=A.c1(q)
A.jr(t.K.a(s),t.l.a(r))}},
dZ(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.v===$.F){a.$1(b)
return}A.pq(null,null,this,a,b,t.H,c)}catch(q){s=A.bE(q)
r=A.c1(q)
A.jr(t.K.a(s),t.l.a(r))}},
c1(a){return new A.mA(this,t.M.a(a))},
dl(a,b){return new A.mB(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
hG(a,b){b.i("0()").a(a)
if($.F===B.v)return a.$0()
return A.pp(null,null,this,a,b)},
cn(a,b,c,d){c.i("@<0>").L(d).i("1(2)").a(a)
d.a(b)
if($.F===B.v)return a.$1(b)
return A.pq(null,null,this,a,b,c,d)},
hH(a,b,c,d,e,f){d.i("@<0>").L(e).L(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.F===B.v)return a.$2(b,c)
return A.ty(null,null,this,a,b,c,d,e,f)},
ck(a,b,c,d){return b.i("@<0>").L(c).L(d).i("1(2,3)").a(a)}}
A.mA.prototype={
$0(){return this.a.dY(this.b)},
$S:0}
A.mB.prototype={
$1(a){var s=this.c
return this.a.dZ(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.eX.prototype={
aI(a){return A.n4(a)&1073741823},
aJ(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.eW.prototype={
h(a,b){if(!A.U(this.z.$1(b)))return null
return this.eq(b)},
j(a,b,c){var s=this.$ti
this.es(s.c.a(b),s.Q[1].a(c))},
aU(a,b){if(!A.U(this.z.$1(b)))return!1
return this.ep(b)},
A(a,b){if(!A.U(this.z.$1(b)))return null
return this.er(b)},
aI(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
aJ(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(A.U(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.mw.prototype={
$1(a){return this.a.b(a)},
$S:55}
A.cR.prototype={
gC(a){var s=this,r=new A.cS(s,s.r,s.$ti.i("cS<1>"))
r.c=s.e
return r},
gm(a){return this.a},
S(a,b){var s
if(typeof b=="number"&&(b&1073741823)===b){s=this.c
if(s==null)return!1
return t.nF.a(s[b])!=null}else return this.eP(b)},
eP(a){var s=this.d
if(s==null)return!1
return this.bO(s[J.aO(a)&1073741823],a)>=0},
k(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cM(s==null?q.b=A.nU():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cM(r==null?q.c=A.nU():r,b)}else return q.eM(0,b)},
eM(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.nU()
r=J.aO(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.bG(b)]
else{if(p.bO(q,b)>=0)return!1
q.push(p.bG(b))}return!0},
A(a,b){var s=this.fp(0,b)
return s},
fp(a,b){var s,r,q,p,o=this.d
if(o==null)return!1
s=b.gF(b)&1073741823
r=o[s]
q=this.bO(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.eN(p)
return!0},
cM(a,b){this.$ti.c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.bG(b)
return!0},
cO(){this.r=this.r+1&1073741823},
bG(a){var s,r=this,q=new A.iJ(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cO()
return q},
eN(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cO()},
bO(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a_(a[r].a,b))return r
return-1},
$ioM:1}
A.iJ.prototype={}
A.cS.prototype={
gt(a){return this.$ti.c.a(this.d)},
p(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.b4(q))
else if(r==null){s.scN(null)
return!1}else{s.scN(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
scN(a){this.d=this.$ti.i("1?").a(a)},
$ia1:1}
A.el.prototype={}
A.la.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:26}
A.l.prototype={
gC(a){return new A.bQ(a,this.gm(a),A.ba(a).i("bQ<l.E>"))},
H(a,b){return this.h(a,b)},
S(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.a_(this.h(a,s),b))return!0
if(r!==this.gm(a))throw A.c(A.b4(a))}return!1},
aC(a,b,c,d){var s,r=A.ba(a)
d=r.i("l.E").a(r.i("l.E?").a(d))
A.lB(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
l(a){return A.nE(a,"[","]")}}
A.et.prototype={}
A.ld.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.G(a)
r.a=s+": "
r.a+=A.G(b)},
$S:39}
A.A.prototype={
J(a,b){var s,r,q=A.ba(a)
q.i("~(A.K,A.V)").a(b)
for(s=J.ak(this.ga9(a)),q=q.i("A.V");s.p();){r=s.gt(s)
b.$2(r,q.a(this.h(a,r)))}},
gap(a){return J.qG(this.ga9(a),new A.lf(a),A.ba(a).i("dm<A.K,A.V>"))},
hB(a,b){var s,r,q,p,o=A.ba(a)
o.i("C(A.K,A.V)").a(b)
s=A.b([],o.i("p<A.K>"))
for(r=J.ak(this.ga9(a)),o=o.i("A.V");r.p();){q=r.gt(r)
if(A.U(b.$2(q,o.a(this.h(a,q)))))B.a.k(s,q)}for(o=s.length,p=0;p<s.length;s.length===o||(0,A.w)(s),++p)this.A(a,s[p])},
gm(a){return J.aw(this.ga9(a))},
l(a){return A.nK(a)},
$ia3:1}
A.lf.prototype={
$1(a){var s,r=this.a,q=A.ba(r)
q.i("A.K").a(a)
s=q.i("A.V")
return new A.dm(a,s.a(J.oi(r,a)),q.i("@<A.K>").L(s).i("dm<1,2>"))},
$S(){return A.ba(this.a).i("dm<A.K,A.V>(A.K)")}}
A.eG.prototype={
M(a,b){var s,r
this.$ti.i("i<1>").a(b)
for(s=A.rJ(b,b.r,b.$ti.c),r=s.$ti.c;s.p();)this.k(0,r.a(s.d))},
l(a){return A.nE(this,"{","}")}}
A.f3.prototype={$io:1,$ii:1,$ioX:1}
A.fh.prototype={}
A.ct.prototype={
n(a,b){if(b==null)return!1
return b instanceof A.ct&&this.a===b.a&&!0},
a2(a,b){return B.f.a2(this.a,t.cs.a(b).a)},
gF(a){var s=this.a
return(s^B.f.d8(s,30))&1073741823},
l(a){var s=this,r=A.qP(A.rr(s)),q=A.fL(A.rp(s)),p=A.fL(A.rl(s)),o=A.fL(A.rm(s)),n=A.fL(A.ro(s)),m=A.fL(A.rq(s)),l=A.qQ(A.rn(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
return k},
$iaq:1}
A.ad.prototype={
n(a,b){if(b==null)return!1
return b instanceof A.ad&&this.a===b.a},
gF(a){return B.f.gF(this.a)},
a2(a,b){return B.f.a2(this.a,t.E.a(b).a)},
l(a){var s,r,q,p,o,n=this.a,m=B.f.af(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.f.af(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.f.af(n,1e6)
p=q<10?"0":""
o=B.i.dV(B.f.l(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o},
$iaq:1}
A.mg.prototype={}
A.P.prototype={
gb1(){return A.c1(this.$thrownJsError)}}
A.e1.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fS(s)
return"Assertion failed"}}
A.ce.prototype={}
A.hs.prototype={
l(a){return"Throw of null."}}
A.bI.prototype={
gbN(){return"Invalid argument"+(!this.a?"(s)":"")},
gbM(){return""},
l(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+A.G(n),l=q.gbN()+o+m
if(!q.a)return l
s=q.gbM()
r=A.fS(q.b)
return l+s+": "+r}}
A.dt.prototype={
gbN(){return"RangeError"},
gbM(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.G(q):""
else if(q==null)s=": Not greater than or equal to "+A.G(r)
else if(q>r)s=": Not in inclusive range "+A.G(r)+".."+A.G(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.G(r)
return s}}
A.h5.prototype={
gbN(){return"RangeError"},
gbM(){if(A.N(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.ib.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.i8.prototype={
l(a){var s="UnimplementedError: "+this.a
return s}}
A.bj.prototype={
l(a){return"Bad state: "+this.a}}
A.fH.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fS(s)+"."}}
A.hv.prototype={
l(a){return"Out of Memory"},
gb1(){return null},
$iP:1}
A.eJ.prototype={
l(a){return"Stack Overflow"},
gb1(){return null},
$iP:1}
A.fK.prototype={
l(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.iz.prototype={
l(a){return"Exception: "+this.a}}
A.i.prototype={
dO(a,b,c){var s=A.E(this)
return A.oN(this,s.L(c).i("1(i.E)").a(b),s.i("i.E"),c)},
J(a,b){var s
A.E(this).i("~(i.E)").a(b)
for(s=this.gC(this);s.p();)b.$1(s.gt(s))},
gm(a){var s,r=this.gC(this)
for(s=0;r.p();)++s
return s},
gby(a){var s,r=this.gC(this)
if(!r.p())throw A.c(A.kZ())
s=r.gt(r)
if(r.p())throw A.c(A.oF())
return s},
H(a,b){var s,r,q
A.lA(b,"index")
for(s=this.gC(this),r=0;s.p();){q=s.gt(s)
if(b===r)return q;++r}throw A.c(A.a0(b,this,"index",null,r))},
l(a){return A.oE(this,"(",")")}}
A.a1.prototype={}
A.dm.prototype={
l(a){return"MapEntry("+A.G(this.a)+": "+A.G(this.b)+")"}}
A.a5.prototype={
gF(a){return A.v.prototype.gF.call(this,this)},
l(a){return"null"}}
A.v.prototype={$iv:1,
n(a,b){return this===b},
gF(a){return A.cL(this)},
l(a){return"Instance of '"+A.lv(this)+"'"},
toString(){return this.l(this)}}
A.j4.prototype={
l(a){return""},
$ibi:1}
A.hV.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.q.prototype={}
A.jw.prototype={
gm(a){return a.length}}
A.fp.prototype={
l(a){return String(a)}}
A.fq.prototype={
l(a){return String(a)}}
A.fw.prototype={}
A.fx.prototype={
gcg(a){return new A.cQ(a,"load",!1,t.bz)}}
A.cq.prototype={
sas(a,b){a.height=b},
saw(a,b){a.width=b},
ed(a,b){return a.getContext(b)},
$icq:1}
A.bq.prototype={
gm(a){return a.length}}
A.k1.prototype={
gm(a){return a.length}}
A.L.prototype={$iL:1}
A.e8.prototype={
gm(a){return a.length}}
A.k2.prototype={}
A.bb.prototype={}
A.bK.prototype={}
A.k3.prototype={
gm(a){return a.length}}
A.k4.prototype={
gm(a){return a.length}}
A.k5.prototype={
gm(a){return a.length},
h(a,b){return a[b]}}
A.bL.prototype={$ibL:1}
A.c6.prototype={
l(a){return String(a)},
$ic6:1}
A.e9.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.mx.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.ea.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.G(r)+", "
s=a.top
s.toString
return r+A.G(s)+") "+A.G(this.gaw(a))+" x "+A.G(this.gas(a))},
n(a,b){var s,r
if(b==null)return!1
if(t.mx.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=J.mV(b)
s=this.gaw(a)===s.gaw(b)&&this.gas(a)===s.gas(b)}else s=!1}else s=!1}else s=!1
return s},
gF(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.cK(r,s,this.gaw(a),this.gas(a))},
gcV(a){return a.height},
gas(a){var s=this.gcV(a)
s.toString
return s},
gde(a){return a.width},
gaw(a){var s=this.gde(a)
s.toString
return s},
$iby:1}
A.fO.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
A.a6(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.k7.prototype={
gm(a){return a.length}}
A.ah.prototype={
l(a){return a.localName},
gcg(a){return new A.cQ(a,"load",!1,t.bz)},
$iah:1}
A.k.prototype={$ik:1}
A.f.prototype={
fR(a,b,c,d){t.du.a(c)
if(c!=null)this.eF(a,b,c,!1)},
eF(a,b,c,d){return a.addEventListener(b,A.bD(t.du.a(c),1),!1)},
$if:1}
A.aR.prototype={$iaR:1}
A.fU.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.et.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.fV.prototype={
gm(a){return a.length}}
A.fY.prototype={
gm(a){return a.length}}
A.aS.prototype={$iaS:1}
A.kS.prototype={
gm(a){return a.length}}
A.cy.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.fh.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.ej.prototype={
ht(a,b,c){return a.open(b,c)}}
A.cz.prototype={}
A.df.prototype={$idf:1}
A.bO.prototype={$ibO:1}
A.lc.prototype={
l(a){return String(a)}}
A.cH.prototype={}
A.lh.prototype={
gm(a){return a.length}}
A.hg.prototype={
h(a,b){return A.cm(a.get(A.a6(b)))},
J(a,b){var s,r
t.U.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.cm(r.value[1]))}},
ga9(a){var s=A.b([],t.s)
this.J(a,new A.li(s))
return s},
gm(a){return a.size},
A(a,b){throw A.c(A.B("Not supported"))},
$ia3:1}
A.li.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:6}
A.hh.prototype={
h(a,b){return A.cm(a.get(A.a6(b)))},
J(a,b){var s,r
t.U.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.cm(r.value[1]))}},
ga9(a){var s=A.b([],t.s)
this.J(a,new A.lj(s))
return s},
gm(a){return a.size},
A(a,b){throw A.c(A.B("Not supported"))},
$ia3:1}
A.lj.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:6}
A.aU.prototype={$iaU:1}
A.hi.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.ib.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.aV.prototype={$iaV:1}
A.z.prototype={
l(a){var s=a.nodeValue
return s==null?this.eo(a):s},
$iz:1}
A.eA.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.fh.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.aW.prototype={
gm(a){return a.length},
$iaW:1}
A.hB.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.d8.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.hH.prototype={
h(a,b){return A.cm(a.get(A.a6(b)))},
J(a,b){var s,r
t.U.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.cm(r.value[1]))}},
ga9(a){var s=A.b([],t.s)
this.J(a,new A.lD(s))
return s},
gm(a){return a.size},
A(a,b){throw A.c(A.B("Not supported"))},
$ia3:1}
A.lD.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:6}
A.hJ.prototype={
gm(a){return a.length}}
A.aE.prototype={$iaE:1}
A.hO.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.fm.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.aY.prototype={$iaY:1}
A.hP.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.cA.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.aZ.prototype={
gm(a){return a.length},
$iaZ:1}
A.hT.prototype={
h(a,b){return a.getItem(A.a6(b))},
A(a,b){var s
A.a6(b)
s=a.getItem(b)
a.removeItem(b)
return s},
J(a,b){var s,r,q
t.gS.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga9(a){var s=A.b([],t.s)
this.J(a,new A.lJ(s))
return s},
gm(a){return a.length},
$ia3:1}
A.lJ.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:51}
A.at.prototype={$iat:1}
A.aG.prototype={$iaG:1}
A.an.prototype={$ian:1}
A.i0.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.gJ.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.i1.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.dQ.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.lW.prototype={
gm(a){return a.length}}
A.b_.prototype={$ib_:1}
A.i4.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.ki.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.lX.prototype={
gm(a){return a.length}}
A.bA.prototype={}
A.m0.prototype={
l(a){return String(a)}}
A.dD.prototype={$idD:1}
A.ie.prototype={
gm(a){return a.length}}
A.dG.prototype={
dX(a,b){var s
t.hv.a(b)
this.f6(a)
s=A.ps(b,t.cZ)
s.toString
return this.fs(a,s)},
fs(a,b){return a.requestAnimationFrame(A.bD(t.hv.a(b),1))},
f6(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.ir.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.d5.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.eS.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.G(r)+", "
s=a.top
s.toString
s=r+A.G(s)+") "
r=a.width
r.toString
r=s+A.G(r)+" x "
s=a.height
s.toString
return r+A.G(s)},
n(a,b){var s,r
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
r=J.mV(b)
if(s===r.gaw(b)){s=a.height
s.toString
r=s===r.gas(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gF(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.cK(p,s,r,q)},
gcV(a){return a.height},
gas(a){var s=a.height
s.toString
return s},
gde(a){return a.width},
gaw(a){var s=a.width
s.toString
return s}}
A.iD.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.ef.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.eZ.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.fh.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.iY.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.hH.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.j5.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a[b]},
j(a,b,c){A.N(b)
t.lv.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$io:1,
$iD:1,
$ii:1,
$im:1}
A.nB.prototype={}
A.eT.prototype={
ce(a,b,c,d){var s=A.E(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.eV(this.a,this.b,a,!1,s.c)}}
A.cQ.prototype={}
A.eU.prototype={}
A.mh.prototype={
$1(a){return this.a.$1(t.fq.a(a))},
$S:10}
A.r.prototype={
gC(a){return new A.ee(a,this.gm(a),A.ba(a).i("ee<r.E>"))}}
A.ee.prototype={
p(){var s=this,r=s.c+1,q=s.b
if(r<q){s.scW(J.oi(s.a,r))
s.c=r
return!0}s.scW(null)
s.c=q
return!1},
gt(a){return this.$ti.c.a(this.d)},
scW(a){this.d=this.$ti.i("1?").a(a)},
$ia1:1}
A.is.prototype={}
A.iu.prototype={}
A.iv.prototype={}
A.iw.prototype={}
A.ix.prototype={}
A.iA.prototype={}
A.iB.prototype={}
A.iE.prototype={}
A.iF.prototype={}
A.iK.prototype={}
A.iL.prototype={}
A.iM.prototype={}
A.iN.prototype={}
A.iO.prototype={}
A.iP.prototype={}
A.iS.prototype={}
A.iT.prototype={}
A.iV.prototype={}
A.f4.prototype={}
A.f5.prototype={}
A.iW.prototype={}
A.iX.prototype={}
A.iZ.prototype={}
A.j6.prototype={}
A.j7.prototype={}
A.f9.prototype={}
A.fa.prototype={}
A.j9.prototype={}
A.ja.prototype={}
A.jh.prototype={}
A.ji.prototype={}
A.jj.prototype={}
A.jk.prototype={}
A.jl.prototype={}
A.jm.prototype={}
A.jn.prototype={}
A.jo.prototype={}
A.jp.prototype={}
A.jq.prototype={}
A.m8.prototype={
dD(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.k(r,a)
B.a.k(this.b,null)
return q},
cs(a){var s,r,q,p,o,n,m,l,k=this,j={}
if(a==null)return a
if(A.mL(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.W(A.d2("DateTime is outside valid range: "+s,null))
A.cW(!0,"isUtc",t.k4)
return new A.ct(s,!0)}if(a instanceof RegExp)throw A.c(A.nQ("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.um(a,t.z)
if(A.pG(a)){q=k.dD(a)
r=k.b
if(!(q<r.length))return A.a(r,q)
p=j.a=r[q]
if(p!=null)return p
o=t.z
p=A.ac(o,o)
j.a=p
B.a.j(r,q,p)
k.he(a,new A.ma(j,k))
return j.a}if(a instanceof Array){n=a
q=k.dD(n)
r=k.b
if(!(q<r.length))return A.a(r,q)
p=r[q]
if(p!=null)return p
o=J.aN(n)
m=o.gm(n)
p=k.c?new Array(m):n
B.a.j(r,q,p)
for(r=J.cY(p),l=0;l<m;++l)r.j(p,l,k.cs(o.h(n,l)))
return p}return a}}
A.ma.prototype={
$2(a,b){var s=this.a.a,r=this.b.cs(b)
J.oj(s,a,r)
return r},
$S:71}
A.m9.prototype={
he(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.lp.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.nf.prototype={
$1(a){return this.a.ag(0,this.b.i("0/?").a(a))},
$S:5}
A.ng.prototype={
$1(a){if(a==null)return this.a.bh(new A.lp(a===undefined))
return this.a.bh(a)},
$S:5}
A.iG.prototype={
R(a){if(a<=0||a>4294967296)throw A.c(A.rs("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
K(){return Math.random()},
hp(){return Math.random()<0.5},
$ioS:1}
A.b6.prototype={$ib6:1}
A.ha.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.N(b)
t.kT.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){return this.h(a,b)},
$io:1,
$ii:1,
$im:1}
A.b7.prototype={$ib7:1}
A.ht.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.N(b)
t.ai.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){return this.h(a,b)},
$io:1,
$ii:1,
$im:1}
A.lu.prototype={
gm(a){return a.length}}
A.hW.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.N(b)
A.a6(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){return this.h(a,b)},
$io:1,
$ii:1,
$im:1}
A.n.prototype={
gcg(a){return new A.cQ(a,"load",!1,t.bz)}}
A.b9.prototype={$ib9:1}
A.i5.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.c(A.a0(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.N(b)
t.hk.a(c)
throw A.c(A.B("Cannot assign element of immutable List."))},
H(a,b){return this.h(a,b)},
$io:1,
$ii:1,
$im:1}
A.iH.prototype={}
A.iI.prototype={}
A.iQ.prototype={}
A.iR.prototype={}
A.j2.prototype={}
A.j3.prototype={}
A.jb.prototype={}
A.jc.prototype={}
A.bo.prototype={
gm(a){return a.length},
$ibo:1}
A.d6.prototype={
sdn(a,b){a.buffer=b},
shl(a,b){a.loop=!0},
em(a,b){return a.start(b)},
$id6:1}
A.cp.prototype={
f2(a,b,c,d){t.p0.a(c)
t.lW.a(d)
return a.decodeAudioData(b,A.bD(c,1),A.bD(d,1))},
h3(a,b){var s=new A.I($.F,t.og),r=new A.aj(s,t.oJ)
this.f2(a,b,new A.jF(r),new A.jG(r))
return s},
$icp:1}
A.jF.prototype={
$1(a){this.a.ag(0,t.bD.a(a))},
$S:23}
A.jG.prototype={
$1(a){this.a.bh(t.jW.a(a))},
$S:24}
A.J.prototype={
b6(a,b,c,d){return a.connect(b,c,d)},
$iJ:1}
A.fr.prototype={
se3(a,b){a.value=b}}
A.fs.prototype={
h(a,b){return A.cm(a.get(A.a6(b)))},
J(a,b){var s,r
t.U.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.cm(r.value[1]))}},
ga9(a){var s=A.b([],t.s)
this.J(a,new A.jI(s))
return s},
gm(a){return a.size},
A(a,b){throw A.c(A.B("Not supported"))},
$ia3:1}
A.jI.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:6}
A.bJ.prototype={}
A.ft.prototype={
gm(a){return a.length}}
A.e3.prototype={}
A.de.prototype={}
A.hu.prototype={
gm(a){return a.length}}
A.ip.prototype={}
A.fA.prototype={$ifA:1}
A.h_.prototype={$ih_:1}
A.hC.prototype={$ihC:1}
A.du.prototype={
dm(a,b){return a.bindVertexArray(b)},
dk(a,b,c){return a.bindBuffer(b,c)},
aR(a,b,c){return a.bindFramebuffer(b,c)},
a1(a,b,c){return a.bindTexture(b,c)},
du(a,b){return a.deleteTexture(b)},
ca(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aZ(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.o1(g)){s.fH(a,b,c,d,e,f,g,h,i,j)
return}if(t.hQ.b(g)&&h==null&&r&&j==null){s.fI(a,b,c,d,e,f,g)
return}if(t.jQ.b(g)&&h==null&&r&&j==null){s.fJ(a,b,c,d,e,f,g)
return}if(t.eL.b(g)&&h==null&&r&&j==null){s.fK(a,b,c,d,e,f,g)
return}throw A.c(A.d2("Incorrect number or type of arguments",null))},
e_(a,b,c,d,e,f,g){return this.aZ(a,b,c,d,e,f,g,null,null,null)},
fH(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
fI(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fJ(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fK(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hO(a,b,c){return a.uniform1f(b,c)},
hP(a,b,c){return a.uniform1i(b,c)},
hQ(a,b,c,d){return a.uniform2f(b,c,d)},
hR(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
hS(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
hT(a,b){return a.useProgram(b)},
$idu:1}
A.bU.prototype={$ibU:1}
A.i7.prototype={$ii7:1}
A.id.prototype={$iid:1}
A.bT.prototype={
gC(a){return new A.dz(this.a,0,0)},
gm(a){var s,r,q=this.a,p=q.length
if(p===0)return 0
s=new A.jQ(q,p,0,176)
for(r=0;s.hq()>=0;)++r
return r},
n(a,b){if(b==null)return!1
return t.m1.b(b)&&this.a===b.a},
gF(a){return B.i.gF(this.a)},
l(a){return this.a},
$iow:1}
A.dz.prototype={
gt(a){var s=this,r=s.d
return r==null?s.d=B.i.b2(s.a,s.b,s.c):r},
p(){return this.bC(1,this.c)},
bC(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(a>0){s=j.c
for(r=j.a,q=r.length,p=176;s<q;s=n){o=B.i.aB(r,s)
n=s+1
if((o&64512)!==55296)m=A.pH(o)
else if(n<q){l=B.i.aB(r,n)
if((l&64512)===56320){++n
m=A.pC(o,l)}else m=2}else m=2
p=B.i.ae(u.S,(p&240|m)>>>0)
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
$ia1:1}
A.jQ.prototype={
hq(){var s,r,q,p,o,n,m,l=this,k=u.S
for(s=l.b,r=l.a;q=l.c,q<s;){p=l.c=q+1
o=B.i.ae(r,q)
if((o&64512)!==55296){p=B.i.ae(k,l.d&240|A.pH(o))
l.d=p
if((p&1)===0)return q
continue}if(p<s){n=B.i.ae(r,p)
if((n&64512)===56320){m=A.pC(o,n);++l.c}else m=2}else m=2
p=B.i.ae(k,(l.d&240|m)>>>0)
l.d=p
if((p&1)===0)return q}s=B.i.ae(k,l.d&240|15)
l.d=s
if((s&1)===0)return q
return-1}}
A.h4.prototype={
bL(a){var s=this.b
if(!(a>=0&&a<s.length))return A.a(s,a)
s=s[a]
return s==null?this.$ti.c.a(null):s},
k(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b);++o.d
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.as(q,null,!1,n.i("1?"))
B.a.cv(p,0,o.c,o.b)
o.sbZ(p)}o.bE(b,o.c++)},
gm(a){return this.c},
A(a,b){var s,r,q=this
q.$ti.c.a(b)
s=q.ff(b)
if(s<0)return!1;++q.d
r=q.fq()
if(s<q.c)if(q.a.$2(r,b)<=0)q.bE(r,s)
else q.cH(r,s)
return!0},
fL(){var s,r,q=this.$ti,p=A.b([],q.i("p<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.a(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
l(a){var s=this.b
return A.oE(A.p3(s,0,A.cW(this.c,"count",t.S),A.T(s).c),"(",")")},
az(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.as(q,null,!1,n.i("1?"))
B.a.cv(p,0,o.c,o.b)
o.sbZ(p)}o.bE(b,o.c++)},
ff(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.bL(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.a_(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
fq(){var s=this,r=s.c-1,q=s.bL(r)
B.a.j(s.b,r,null)
s.c=r
return q},
bE(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.f.af(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.a(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.ab()
if(q>0)break
B.a.j(o.b,b,p)}B.a.j(o.b,b,a)},
cH(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.$ti.c
h.a(a)
s=b*2+2
for(r=i.a;q=i.c,s<q;b=k){p=s-1
q=i.b
o=q.length
if(!(p>=0&&p<o))return A.a(q,p)
n=q[p]
if(n==null)n=h.a(null)
if(!(s>=0&&s<o))return A.a(q,s)
m=q[s]
if(m==null)m=h.a(null)
if(r.$2(n,m)<0){l=n
k=p}else{l=m
k=s}if(r.$2(a,l)<=0){B.a.j(i.b,b,a)
return}B.a.j(i.b,b,l)
s=k*2+2}p=s-1
if(p<q){j=i.bL(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sbZ(a){this.b=this.$ti.i("m<1?>").a(a)}}
A.mH.prototype={
gC(a){var s=this.a
return new A.cT(s,s.d,this.$ti.i("cT<1>"))}}
A.cT.prototype={
p(){var s,r=this,q=r.a
if(r.b!==q.d)throw A.c(A.b4(q))
s=r.d+1
if(0<=s&&s<q.c){q=q.b
if(!(s>=0&&s<q.length))return A.a(q,s)
r.sd2(q[s])
r.d=s
return!0}r.sd2(null)
r.d=-2
return!1},
gt(a){var s
if(this.d<0)s=A.W(A.am("No element"))
else{s=this.c
if(s==null)s=this.$ti.c.a(null)}return s},
sd2(a){this.c=this.$ti.i("1?").a(a)},
$ia1:1}
A.e.prototype={
n(a,b){if(b==null)return!1
return b instanceof A.e&&b.a===this.a},
gF(a){return B.f.gF(this.a)},
l(a){return"Color(0x"+B.i.dV(B.f.hL(this.a,16),8,"0")+")"}}
A.ag.prototype={
bk(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.f.a_(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.a(q,r)
return q[r]}throw A.c(A.am(b.l(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.f.a_(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.c(A.nC(b.l(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
ax(a,b,c){var s=B.f.a_(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.a(r,s)
return r[s]}return null},
T(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.f.a_(d*s+c)
q=p.c
if(r>=q.length)throw A.c(A.nC("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
l(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.f.a_(o+m)
if(!(l>=0&&l<r.length))return A.a(r,l)
k=r[l]
p+=n+A.G(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.M.prototype={
ad(a,b){return new A.M(this.a-b.a,this.b-b.b)},
v(a,b){return new A.M(this.a+b.a,this.b+b.b)},
bu(a,b){return new A.M(this.a/b,this.b/b)},
n(a,b){if(b==null)return!1
return b instanceof A.M&&b.a===this.a&&b.b===this.b},
gF(a){return A.cK(this.a,this.b,B.H,B.H)},
l(a){return"Offset("+B.b.e0(this.a,1)+", "+B.b.e0(this.b,1)+")"}}
A.bG.prototype={}
A.dF.prototype={
D(a,b){var s=0,r=A.aL(t.g),q,p=this
var $async$D=A.aM(function(c,d){if(c===1)return A.aH(d,r)
while(true)switch(s){case 0:b.id.hU(p.a,p.b)
q=new A.x(null,"HEY, OVER HERE!",!0,!0,!1,B.d,null,null)
s=1
break
case 1:return A.aI(q,r)}})
return A.aJ($async$D,r)}}
A.dj.prototype={
D(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0={},a1=a4.y2,a2=a1.e
a1=a1.d
if(!(a1<a2.length))return A.a(a2,a1)
s=a2[a1]
a1=b.a
a2=a1.q()
a2.toString
r=b.b
q=r.q()
p=q.ad(0,a2)
o=a1.c.y
n=3+o.Z(o.a)
if(n<2)return new A.x(a,"Not strong enough to push this enemy.",!1,!0,!1,B.d,a,a)
a0.a=q
m=A.py(p.a,p.b)
a0.b=!1
for(l=s.d,k=q,j=0,i=0;i<n;++i,k=h){h=A.Z(k,m)
k=l.h(0,h)
if(k.c===B.c||A.U(A.be(k.f))||s.al(h)!=null){a0.b=!0
break}a0.a=h;++j}if(j===0)return new A.x(a,"No room to push enemy",!1,!0,!1,B.d,a,a)
a1=a1.b
g=a1.y
a1.sat(0,4)
f=a2.aK()
e=q.aK()
d=a2.aK().v(0,e.ad(0,f).bu(0,1.5))
a0.c=!1
a1=A.fQ(Math.max(32*j,100))
if(a0.b){o=r.c.b-=2+o.Z(o.a)
c=o<=0?new A.dc(r):a}else c=a
r=r.c.ch
r=a0.b?"Knocked "+r.a+" into something and delt 0 damage.":"Knocked "+r.a+" down."
o=A.b([],t.w)
if(c!=null)o.push(c)
return new A.x(a,r,!0,!0,!1,o,new A.iq(new A.aQ(B.aY,new A.l4(a0,b,f,d,a2,a4,q),new A.l5(b,g,a2)),new A.aQ(a1,new A.l6(a0,b,q),new A.l7(a0,b,a4)),0.4),a)}}
A.l4.prototype={
$1(a){var s,r,q,p=this,o=a.d
if(o<=0.4){s=p.c
r=p.d
q=o/0.6
o=p.b.a.b
o.sa8(0,A.dV(r.a,s.a,q)*24)
o.sa3(0,A.dV(r.b,s.b,q)*36)}else if(o>=0.6){o=p.b.a.b
s=p.e
o.sV(s.a)
o.sW(s.b)}else{o=p.a
if(!o.c){p.f.e.X("heavy_punch_1.mp3",p.r)
o.c=!0}o=p.b.a.b
s=p.d
o.sa8(0,s.a*24)
o.sa3(0,s.b*36)}},
$S:2}
A.l5.prototype={
$0(){var s,r=this.a.a.b
r.sat(0,this.b)
s=this.c
r.sV(s.a)
r.sW(s.b)},
$S:0}
A.l6.prototype={
$1(a){var s=this.a.a,r=this.c,q=a.d,p=A.dV(s.a,r.a,q)
q=A.dV(s.b,r.b,q)
r=this.b.b.b
r.sa8(0,p*24)
r.sa3(0,q*36)},
$S:2}
A.l7.prototype={
$0(){var s,r,q=this.a
if(q.b)this.c.e.X("impact_1.mp3",q.a)
s=this.b.b
B.a.k(s.c.Q,new A.c5(B.aV))
r=s.b
r.sV(q.a.a)
r.sW(q.a.b)
s.a=0},
$S:0}
A.dE.prototype={
D(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.q()
h.toString
s=[]
r=[]
for(q=0,p=0;p<8;++p){o=A.Z(h,B.b2[p])
n=b.y2
m=n.e
n=n.d
if(!(n<m.length))return A.a(m,n)
l=m[n].al(o)
if(l!=null){s.push(l)
r.push(q)}q+=1/0}k=new A.Q(0,0,3,11,j)
b.gP().k(0,k)
b.e.X("miss_1.mp3",h)
n=A.b([],t.w)
for(m=s.length,p=0;p<s.length;s.length===m||(0,A.w)(s),++p)n.push(new A.d4(!0,!0,i,s[p]))
return new A.x(j,j,!0,!0,!1,n,new A.aQ(B.aY,new A.m5(h,b,A.bw(t.p),k),new A.m6(b,k)),j)}}
A.m5.prototype={
$1(a){var s,r,q,p,o,n=this,m=B.b.aE(A.dV(1,0,a.d)*8)
if(m>=8)m=7
if(!(m>=0))return A.a(B.b2,m)
s=A.Z(n.a,B.b2[m])
r=n.b
q=r.y2
p=q.e
q=q.d
if(!(q<p.length))return A.a(p,q)
o=p[q].al(s)
if(o!=null&&!n.c.S(0,o)){n.c.k(0,o)
r.e.X("cut_attack_1.mp3",s)}r=n.d
r.sV(s.a)
r.sW(s.b)
if(m===0||m===4){r.sb3(3)
r.sb4(11)}else if(m===1||m===5){r.sb3(15)
r.sb4(2)}else if(m===2||m===6){r.sb3(4)
r.sb4(12)}else{r.sb3(12)
r.sb4(5)}},
$S:2}
A.m6.prototype={
$0(){this.a.gP().A(0,this.b)},
$S:0}
A.di.prototype={
D(a,b){var s=0,r=A.aL(t.g),q,p=this,o
var $async$D=A.aM(function(c,d){if(c===1)return A.aH(d,r)
while(true)switch(s){case 0:s=3
return A.a4(A.jt(b,p.a,p.b,0),$async$D)
case 3:o=d
if(o==null){q=new A.x(null,null,!1,!0,!1,B.d,null,null)
s=1
break}q=new A.x(o,null,!0,!0,!1,B.d,null,null)
s=1
break
case 1:return A.aI(q,r)}})
return A.aJ($async$D,r)}}
A.dd.prototype={
D(a,b){var s=0,r=A.aL(t.g),q,p=this,o,n
var $async$D=A.aM(function(c,d){if(c===1)return A.aH(d,r)
while(true)switch(s){case 0:o=p.a
n=o.q()
n.toString
q=new A.x(new A.bx(p.b.ad(0,n),o,!0),null,!0,!0,!1,B.d,null,null)
s=1
break
case 1:return A.aI(q,r)}})
return A.aJ($async$D,r)}}
A.O.prototype={
ga8(a){return B.b.B(this.b.d/24)},
ga3(a){return B.b.B(this.b.e/36)},
q(){var s=this.b
return new A.d(B.b.B(s.d/24),B.b.B(s.e/36))},
$iei:1,
gcc(){return null}}
A.jv.prototype={}
A.c7.prototype={}
A.nn.prototype={
$0(){return new A.Q(2,6,0,0,B.ac)},
$S:3}
A.nm.prototype={
$0(){return A.b([],t.I)},
$S:4}
A.ni.prototype={
$0(){return new A.Q(2,4,0,0,B.q)},
$S:3}
A.nh.prototype={
$0(){return A.b([],t.I)},
$S:4}
A.np.prototype={
$0(){return new A.Q(10,7,0,0,B.q)},
$S:3}
A.no.prototype={
$0(){return A.b([],t.I)},
$S:4}
A.nr.prototype={
$0(){return new A.Q(10,7,0,0,B.ac)},
$S:3}
A.nq.prototype={
$0(){var s=A.ek(B.aM)
s.e=1
return A.b([s],t.I)},
$S:4}
A.mS.prototype={
$0(){return new A.Q(3,7,0,0,B.h9)},
$S:3}
A.mR.prototype={
$0(){return A.b([A.ek(B.aM)],t.I)},
$S:4}
A.fv.prototype={
l(a){return"BehaviorTag."+this.b}}
A.jx.prototype={
sh2(a,b){this.e=t.le.a(b)},
sh1(a){this.f=t.lC.a(a)}}
A.jZ.prototype={
l(a){return"CombatDisposition."+this.b}}
A.ls.prototype={}
A.ao.prototype={}
A.cN.prototype={
l(a){return"ThinkingState."+this.b}}
A.lP.prototype={
fY(a,b){var s,r,q,p,o,n,m=this,l={},k=a.r
if(k==null)return new A.dy()
s=k.a
r=A.T(s).i("C(1)").a(new A.lR(a))
if(!!s.fixed$length)A.W(A.B("removeWhere"))
B.a.aP(s,r,!0)
s=k.b
s.hB(s,new A.lS())
q=k.d
for(s=q,p=null;p==null;){switch(s){case B.ad:o=m.hD(a,k,b)
break
case B.d6:o=m.hc(a,k,b)
break
case B.P:o=m.ek(0,a,k,b)
break
case B.hI:o=m.h7(a,k,b)
break
case B.at:o=m.fV(0,a,k,b)
break
default:o=null}p=o.b
s=o.a
k.d=s}l.a=null
r=q!==s
if(r&&s===B.at){n=A.bz(B.cn)
s=a.b
n.sV(B.b.B(s.d/24))
n.sW(B.b.B(s.e/36))
n.sam(0,B.q)
n.sat(0,20)
l.a=n
s=n}else if(r&&s===B.P){n=A.bz(B.hB)
s=a.b
n.sV(B.b.B(s.d/24))
n.sW(B.b.B(s.e/36))
n.sam(0,B.ac)
n.sat(0,20)
l.a=n
s=n}else s=null
if(s!=null){b.gP().k(0,l.a)
l.b=50
B.a.k(b.c,t.x.a(new A.lT(l,b)))}return p},
hD(a,b,c){var s
if(this.aT(a,c,b).b.length!==0)return new A.ao(B.P,null)
s=c.id.dr(a,c,b.b,11)
B.a.M(b.a,s)
if(s.length!==0)return new A.ao(B.P,null)
return new A.ao(B.ad,new A.dy())},
hc(a,b,c){var s,r,q
if(b.r<6){s=c.y2
r=s.e
s=s.d
if(!(s<r.length))return A.a(r,s)
q=A.u2(r[s],a,c.go)
if(q==null)b.r=6
else{s=q.b.d
r=a.q()
r.toString
return new A.ao(B.d6,new A.bx(s.ad(0,r),a,!1))}}b.r=0
return new A.ao(B.ad,null)},
fo(a,b,c){var s,r,q
if(b.e!=null)return
s=a.q()
s.toString
r=this.aT(a,c,b).b
q=r.length
if(q===1){if(0>=q)return A.a(r,0)
b.e=r[0]}else if(q>1)b.sh2(0,B.a.hz(r,new A.lQ(s)))},
ek(a,b,c,d){var s,r,q,p,o,n,m,l,k;++c.x
if(this.aT(b,d,c).b.length!==0){c.x=0
return new A.ao(B.at,null)}s=c.a
B.a.M(s,d.id.dr(b,d,c.b,0))
for(r=s.length,q=null,p=0,o=0;o<r;++o){n=s[o]
m=n.b
if(m>p){q=n.a
p=m}}if(q!=null){s=$.bF()
r=b.q()
r.toString
l=d.y2
k=l.e
l=l.d
if(!(l<k.length))return A.a(k,l)
l=s.aD(r,q,k[l],B.K).b.d
k=b.q()
k.toString
return new A.ao(B.P,new A.bx(l.ad(0,k),b,!1))}c.x=0
return new A.ao(B.ad,null)},
h7(a,b,c){var s,r,q,p,o,n
if(this.aT(a,c,b).b.length!==0)return new A.ao(B.at,null)
if(a.q().n(0,b.f)){b.f=null
return new A.ao(B.ad,null)}if(b.f==null){s=a.q()
s.toString
s=c.f.aj(s)
s=s.ge4(s)
r=A.dl(s,!0,s.$ti.i("i.E"))
B.a.b0(r,new A.lU(a))
A.T(r).i("C(1)").a(new A.lV(c))
b.sh1(B.a.gc9(r))}s=$.bF()
q=a.q()
q.toString
p=b.f
p.toString
o=c.y2
n=o.e
o=o.d
if(!(o<n.length))return A.a(n,o)
o=s.aD(q,p,n[o],B.K).b.d
n=a.q()
n.toString
return new A.ao(B.P,new A.bx(o.ad(0,n),a,!1))},
fV(a,b,c,d){var s,r
this.fo(b,c,d)
s=c.e
s.toString
if(!B.a.S(this.aT(b,d,c).b,c.e)){c.e=null
return new A.ao(B.P,null)}r=this.eJ(b,s,c,d)
if(r!=null)return new A.ao(B.at,r)
c.e=null
return new A.ao(B.P,null)},
eJ(a,b,c,d){var s=this.eH(a,b,c,d)
return s==null?this.eI(a,b,c,d):s},
eH(a,b,c,d){var s,r,q,p,o=$.bF(),n=a.q()
n.toString
s=c.e.q()
s.toString
r=d.y2
q=r.e
r=r.d
if(!(r<q.length))return A.a(q,r)
p=o.dC(n,s,q[r])
if(p==null)return null
o=p.b.d
n=a.q()
n.toString
return new A.bx(o.ad(0,n),a,!1)},
eI(a,b,c,d){var s,r,q,p,o,n=$.bF(),m=a.q()
m.toString
s=b.q()
s.toString
r=d.y2
q=r.e
r=r.d
if(!(r<q.length))return A.a(q,r)
p=n.aD(m,s,q[r],B.bt)
if(p==null)return null
n=a.c.x
if(n.gaY().ch>=p.gaV()){o=n.gaY()
if(n.b.h(0,B.C).e===0){o.toString
n=A.pJ(n,o)!=null}else n=!0
n=!n}else n=!0
if(n)return null
n=b.q()
n.toString
return new A.eC(n,a,!0)},
aT(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=t.c7,f=A.b([],g),e=A.b([],g)
g=b.y2
s=g.e
g=g.d
if(!(g<s.length))return A.a(s,g)
r=s[g]
g=a.q()
g.toString
q=b.f.aj(g)
for(s=r.b,p=s.length,o=q.c,n=q.a,m=o.length,l=0;l<s.length;s.length===p||(0,A.w)(s),++l){k=s[l]
if(k.e)continue
j=k.q()
if(j==null)continue
i=j.au(g)
h=j.b*n+j.a
if(!(h>=0&&h<m))return A.a(o,h)
if(o[h]<=0||a===k)continue
if(i<6)if(!A.pF(a,k))B.a.k(e,k)
else B.a.k(f,k)}return new A.ls(f)}}
A.lR.prototype={
$1(a){var s
t.C.a(a)
if(!a.c){s=this.a.q()
s.toString
s=a.a.n(0,s)}else s=!0
return s},
$S:14}
A.lS.prototype={
$2(a,b){A.a6(a)
return t.C.a(b).c},
$S:29}
A.lT.prototype={
$1(a){var s,r
t.E.a(a)
s=this.a
r=s.a
r.sa3(0,r.e-1)
r=this.b
if(--s.b>0)B.a.k(r.c,t.x.a(this))
else r.gP().A(0,s.a)},
$S:11}
A.lQ.prototype={
$2(a,b){var s=t.p
s.a(a)
s.a(b)
s=this.a
return a.q().au(s)<b.q().au(s)?a:b},
$S:31}
A.lU.prototype={
$2(a,b){var s,r=t.j
r.a(a)
r.a(b)
r=this.a
s=r.q()
s.toString
s=b.au(s)
r=r.q()
r.toString
return B.b.a2(s,a.au(r))},
$S:32}
A.lV.prototype={
$1(a){var s,r
t.j.a(a)
s=this.a.y2
r=s.e
s=s.d
if(!(s<r.length))return A.a(r,s)
s=r[s].d.h(0,a)
return!(s.c===B.c||A.U(A.be(s.f)))},
$S:12}
A.br.prototype={}
A.jX.prototype={
hs(){var s,r,q
for(s=this.a,r=0;r<s.length;++r)--s[r].b
q=A.T(s).i("C(1)").a(new A.jY())
if(!!s.fixed$length)A.W(A.B("removeWhere"))
B.a.aP(s,q,!0)},
hd(a,b){if(!a.x)return
B.a.k(this.a,A.jW(b,10))},
ev(a,b){if(!a.x)return
B.a.k(this.a,A.jW(b,15))},
h8(a,b){if(!a.x)return
B.a.k(this.a,A.jW(b,15))},
hU(a,b){if(!a.x)return
B.a.k(this.a,A.jW(b,15))},
dr(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h
t.mo.a(c)
s=A.b([],t.n7)
for(r=this.a,q=b.f,p=0;p<r.length;++p){o=r[p]
if(o.b<d||c.aU(0,o.d)){c.j(0,o.d,o)
continue}n=o.a
m=a.q()
m.toString
if(n.au(m)>30){c.j(0,o.d,o)
continue}m=$.bF()
l=a.q()
l.toString
k=b.y2
j=k.e
k=k.d
if(!(k<j.length))return A.a(j,k)
i=m.aD(n,l,j[k],B.K)
if(i==null){c.j(0,o.d,o)
continue}m=a.q()
m.toString
m=q.aj(m)
if(m==null)n=null
else{l=m.c
n=n.b*m.a+n.a
if(!(n>=0&&n<l.length))return A.a(l,n)
n=l[n]>0}m=o.b
l=i.b
l=l==null?null:l.gaV()
if(l==null)l=0
n=n===!0?5:0
h=(m-(1+l)+n)*0.05
if(h<=0||$.pS().K()>h){c.j(0,o.d,o)
continue}B.a.k(s,o)}return s}}
A.jY.prototype={
$1(a){t.C.a(a)
if(a.b<=0)return a.c=!0
return!1},
$S:14}
A.jR.prototype={
e2(a,b,c,d,e,f){var s,r=this,q=Math.min(Math.max(B.b.ai(c*24-f/2),0),B.f.ai(2688-f)),p=Math.min(Math.max(B.b.ai(d*36-e/2),0),B.f.ai(1476-e)),o=r.cT(Math.abs(q-r.a)),n=r.cT(Math.abs(p-r.b))
if(b){r.a=q
r.b=p
return}s=r.a
if(q>s)r.a=s+o
else if(q<s)r.a=s-o
s=r.b
if(p>s)r.b=s+n
else if(p<s)r.b=s-n},
cT(a){if(a>30)return 6
if(a>20)return 4
return 1}}
A.K.prototype={
h(a,b){return this.b.h(0,A.E(this).i("K.T").a(b))}}
A.bR.prototype={}
A.cG.prototype={}
A.h0.prototype={
ex(a){var s=this.a,r=s.cx.b
new A.bB(r,A.E(r).i("bB<1>")).cd(this.ghf())
s=s.k1
new A.eQ(s,A.E(s).i("eQ<1>")).cd(new A.kn(this))},
cb(a){return this.hg(t.h8.a(a))},
hg(a){var s=0,r=A.aL(t.H),q,p=this,o
var $async$cb=A.aM(function(b,c){if(b===1)return A.aH(c,r)
while(true)switch(s){case 0:p.r=null
o=p.e
if(o.length>3){s=1
break}B.a.k(o,a)
if(p.f){s=1
break}p.ba()
case 1:return A.aI(q,r)}})
return A.aJ($async$cb,r)},
ba(){var s=0,r=A.aL(t.z),q=1,p,o=[],n=this,m
var $async$ba=A.aM(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.f=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.a4(n.aO(),$async$ba)
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
case 4:return A.aI(null,r)
case 1:return A.aH(p,r)}})
return A.aJ($async$ba,r)},
d3(){var s=new A.I($.F,t.cU),r=new A.dO(s,t.iF)
B.a.k(this.a.c,t.x.a(t.nD.a(r.gh0(r))))
return s},
U(){var s=0,r=A.aL(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$U=A.aM(function(a9,b0){if(a9===1)return A.aH(b0,r)
while(true)$async$outer:switch(s){case 0:p.r=null
o=t.c
n=new A.I($.F,o)
m=p.a
l=m.y2
k=l.e
l=l.d
if(!(l<k.length)){q=A.a(k,l)
s=1
break}l=k[l].b
j=A.b(l.slice(0),A.T(l))
l=p.b,k=B.a.gfQ(l),i=t.nt,h=p.c,g=p.d,f=p.e,e=t.mY,d=t.eF,c=0,b=!1
case 4:if(!!0){s=5
break}case 6:if(!(a=l.length,a!==0)){s=7
break}if(0>=a){q=A.a(l,0)
s=1
break}s=8
return A.a4(l[0].ay(m),$async$U)
case 8:a0=b0
B.a.M(h,a0.r)
a1=a0
case 9:if(!(a=a1.a,a!=null)){s=10
break}B.a.j(l,0,a)
s=11
return A.a4(a.ay(m),$async$U)
case 11:a1=b0
B.a.M(h,a1.r)
s=9
break
case 10:a=a1.c
if(a!=null){a2=m.fx
if(a2===$){a3=A.nP(m.a)
A.aK(m.fx,"ui")
m.fx=a3
a2=a3}a2.c.r.dj(a)}a4=a1.x
s=a4!=null?12:13
break
case 12:s=!a1.f&&f.length===0?14:16
break
case 14:s=g.length!==0?17:18
break
case 17:s=19
return A.a4(p.bK(),$async$U)
case 19:case 18:s=20
return A.a4(p.aH(a4),$async$U)
case 20:s=15
break
case 16:B.a.k(g,a4)
case 15:case 13:a=a0.y
if(a!=null&&p.r==null){a5=a.$0()
p.r=a5
a6=e.a(new A.km(p,a5))
a=$.F
n.b5(new A.c_(new A.I(a,o),8,a6,null,d))}case 21:if(!(a=h.length,a!==0)){s=22
break}if(0>=a){q=A.a(h,-1)
s=1
break}s=23
return A.a4(h.pop().ay(m),$async$U)
case 23:a0=b0
B.a.M(h,a0.r)
case 24:if(!(a=a0.a,a!=null)){s=25
break}s=26
return A.a4(a.ay(m),$async$U)
case 26:a0=b0
B.a.M(h,a0.r)
s=24
break
case 25:a=a0.c
if(a!=null){a2=m.fx
if(a2===$){a3=A.nP(m.a)
A.aK(m.fx,"ui")
m.fx=a3
a2=a3}a2.c.r.dj(a)}a4=a0.x
s=a4!=null?27:28
break
case 27:s=!a0.f&&f.length===0?29:31
break
case 29:s=g.length!==0?32:33
break
case 32:s=34
return A.a4(p.bK(),$async$U)
case 34:case 33:s=35
return A.a4(p.aH(a4),$async$U)
case 35:s=30
break
case 31:B.a.k(g,a4)
case 30:case 28:s=21
break
case 22:if(a1.d)b=B.fJ.ee(b,!0)
B.a.bp(l,0)
s=6
break
case 7:if(!b){s=3
break}for(;a=j.length,c<a;){if(!(c>=0)){q=A.a(j,c)
s=1
break $async$outer}a7=j[c];++c
if(a7.q()==null)continue
if(A.ul(i.a(k),a7,m)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=g.length!==0?36:38
break
case 36:s=f.length===0?39:41
break
case 39:s=42
return A.a4(p.bK(),$async$U)
case 42:s=40
break
case 41:s=43
return A.a4(p.be(),$async$U)
case 43:case 40:s=37
break
case 38:s=44
return A.a4(p.d3(),$async$U)
case 44:case 37:if(!b){s=1
break}for(o=j.length,a8=0;a8<o;++a8)j[a8].a=100
new A.aj(n,t.jk).aS(0)
case 1:return A.aI(q,r)}})
return A.aJ($async$U,r)},
be(){var s=0,r=A.aL(t.H),q=this,p,o,n
var $async$be=A.aM(function(a,b){if(a===1)return A.aH(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.w)(p),++n)p[n].aX(0)
B.a.sm(p,0)
s=2
return A.a4(q.d3(),$async$be)
case 2:return A.aI(null,r)}})
return A.aJ($async$be,r)},
aH(a){var s=0,r=A.aL(t.H),q=this,p
var $async$aH=A.aM(function(b,c){if(b===1)return A.aH(c,r)
while(true)switch(s){case 0:p=new A.I($.F,t.cU)
if(a!=null)B.a.k(q.d,a)
B.a.k(q.a.c,t.x.a(new A.kl(q,new A.aj(p,t.ou))))
s=2
return A.a4(p,$async$aH)
case 2:return A.aI(null,r)}})
return A.aJ($async$aH,r)},
bK(){return this.aH(null)},
aO(){var s=0,r=A.aL(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$aO=A.aM(function(a,b){if(a===1)return A.aH(b,r)
while(true)switch(s){case 0:g=p.e
if(g.length===0){s=1
break}o=B.a.bp(g,0)
case 3:switch(o){case B.ax:s=5
break
case B.ay:s=6
break
case B.az:s=7
break
case B.aA:s=8
break
case B.fF:s=9
break
case B.bC:s=10
break
case B.fD:s=11
break
case B.bz:s=12
break
case B.bB:s=13
break
case B.bA:s=14
break
case B.bD:s=15
break
default:s=16
break}break
case 5:case 6:case 7:case 8:g=p.a
if(g.d.b){n=g.gO().d.b
m=g.gO()
l=A.Z(n,p.fd(o))
k=g.y2.a.q()
k.toString
g=g.y2
j=g.e
g=g.d
if(!(g<j.length)){q=A.a(j,g)
s=1
break}m.aW(l,k,j[g])
i=null}else{switch(o){case B.ax:h=new A.d(0,-1)
break
case B.ay:h=new A.d(1,0)
break
case B.az:h=new A.d(0,1)
break
case B.aA:h=new A.d(-1,0)
break
default:A.W(A.am(""))
h=null}i=new A.bx(h,g.y2.a,!1)}s=4
break
case 9:p.a.y2.toString
i=new A.dy()
s=4
break
case 10:i=new A.ez(!1)
p.a.y2.a.c.y.a=40
s=4
break
case 11:i=null
s=4
break
case 12:g=p.a
m=g.y2.a
l=m.q()
l.toString
s=17
return A.a4(A.jt(g,m,l,1),$async$aO)
case 17:i=b
s=4
break
case 13:i=new A.eD(p.a.y2.a)
s=4
break
case 14:g=p.a
m=g.y2.a
l=g.k2
i=g.k2=A.op(m,l==null?null:l.b)
s=4
break
case 15:g=p.a
m=g.d
if(m.b){g.gO().ar()
m.b=!1}else{m.b=!0
g.gO().b=new A.dA(0,1e4,!1,B.a3,!1,B.aq)
m=g.gO()
l=g.y2.a.q()
l.toString
k=g.y2.a.q()
k.toString
g=g.y2
j=g.e
g=g.d
if(!(g<j.length)){q=A.a(j,g)
s=1
break}m.aW(l,k,j[g])}i=null
s=4
break
case 16:i=null
s=4
break
case 4:s=i!=null?18:19
break
case 18:B.a.k(p.b,i)
s=20
return A.a4(p.U(),$async$aO)
case 20:p.a.id.hs()
case 19:case 1:return A.aI(q,r)}})
return A.aJ($async$aO,r)},
fd(a){switch(a){case B.ax:return B.m
case B.ay:return B.n
case B.az:return B.k
case B.aA:return B.o
default:throw A.c(A.am(""))}},
fn(a){var s,r,q,p,o,n=this
t.E.a(a)
for(s=n.d,r=s.length,q=n.e,p=0;p<s.length;s.length===r||(0,A.w)(s),++p){o=s[p]
if(q.length>=2)o.sao(1)
o.bf(0,a)}B.a.k(n.a.c,t.x.a(n.gd_()))}}
A.kn.prototype={
$1(a){var s
t.cM.a(a)
s=this.a
s.r=null
B.a.k(s.b,a)
s.U()},
$S:35}
A.km.prototype={
$0(){var s=0,r=A.aL(t.H),q,p=this,o,n,m
var $async$$0=A.aM(function(a,b){if(a===1)return A.aH(b,r)
while(true)switch(s){case 0:n=p.a
m=n.b
if(m.length!==0||n.e.length!==0){s=1
break}s=3
return A.a4(A.r1(B.fy,t.z),$async$$0)
case 3:o=n.r
if(o!==p.b||m.length!==0){s=1
break}o.toString
B.a.k(m,o)
n.r=null
n.U()
case 1:return A.aI(q,r)}})
return A.aJ($async$$0,r)},
$S:36}
A.kl.prototype={
$1(a){var s,r,q,p,o,n,m
t.E.a(a)
s=A.b([],t.oW)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.w)(q),++n){m=q[n]
if(m.gbi(m)||o.length!==0){m.aX(0)
B.a.k(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.w)(s),++n)B.a.A(q,s[n])
if(q.length===0)this.b.aS(0)
else B.a.k(r.a.c,t.x.a(this))},
$S:11}
A.eH.prototype={
l(a){return"SlotType."+this.b}}
A.bv.prototype={
l(a){return"ItemType."+this.b}}
A.e_.prototype={}
A.ai.prototype={
gbz(){switch(this.c){case B.X:return B.aO
case B.Y:return B.aP
case B.Z:return B.aQ
case B.aa:case B.a_:case B.aF:case B.ab:return null}},
gh6(){switch(this.c){case B.X:return B.U
case B.Y:return B.C
case B.Z:return B.V
case B.aa:case B.a_:case B.aF:case B.ab:return null}},
l(a){return this.d}}
A.aa.prototype={}
A.kP.prototype={
l(a){return"HandRequirement."+this.b}}
A.bt.prototype={
l(a){return"DamageType."+this.b}}
A.bu.prototype={
l(a){return"DiceType."+this.b}}
A.ig.prototype={
l(a){return"WeaponProperties."+this.b}}
A.k_.prototype={}
A.k0.prototype={
l(a){return"CriticalEffect."+this.b}}
A.e7.prototype={
l(a){return"Consumable."+this.b}}
A.a9.prototype={}
A.jy.prototype={
l(a){return"AmmoType."+this.b}}
A.jz.prototype={}
A.aX.prototype={}
A.d3.prototype={
l(a){return"ArmorUpgradeType."+this.b}}
A.ax.prototype={}
A.dY.prototype={
Z(a){var s,r=a-10
if(r===0)return 0
else{s=r/2
if(r>0)return B.b.aE(s)
else return B.b.dq(s)}}}
A.c3.prototype={
dQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
t.o5.a(b)
s=e.x.ghw()
r=a.x.gc0()
q=A.e5(b,1,B.aX)
p=e.y
o=q+p.Z(p.a)
n=a.y
m=10+Math.min(n.Z(n.b),r.e)
m=A.U(A.oz(s.b))?m+r.d:m+r.c
if(!c)m-=2
n=t.Q
l=A.b([],n)
k=A.b([],n)
if(q===1){j=!1
i=!1}else{i=o>=m
if(q===20)j=!0
else{j=i
i=!1}}h="\n["+o+" vs "+A.G(m)+"]"
if(!j)return new A.d5(e.ch.a+" missed "+a.ch.a+" "+h,!1,0,B.aJ,B.aJ)
if(B.a.S(B.fZ,B.hL))B.a.k(l,new A.c5(B.fq))
n=s.e
g=Math.max(A.e5(b,1,n)+p.Z(p.a),0)
if(i)g+=Math.max(A.e5(b,1,n)+p.Z(p.a),0)
f=e.ch.a+" hit "+a.ch.a+" for "+g+" with "+s.y
return new A.d5(f,!0,g,l,k)},
dW(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
t.o5.a(b)
s=c.x
r=s.gaY()
r.toString
q=s.gc0()
s=c.y
p=Math.min(s.Z(s.b),q.e)
o=a.x.gc0()
n=A.e5(b,1,B.aX)
m=n+p
l=a.y
k=10+Math.min(l.Z(l.b),o.e)
k=A.U(A.oz(r.c))?k+o.d:k+o.c
if(!a0)k-=2
l=t.Q
j=A.b([],l)
i=A.b([],l)
if(n===1){h=!1
g=!1}else{g=m>=k
if(n===20)h=!0
else{h=g
g=!1}}f="\n["+m+" vs "+A.G(k)+"]"
if(!h)return new A.d5(c.ch.a+" missed "+a.ch.a+" "+f,!1,0,B.aJ,B.aJ)
l=r.f
e=A.e5(b,1,l)
if(g)e+=A.e5(b,1,l)+s.Z(s.a)
d=c.ch.a+" hit "+a.ch.a+" for "+e+" with "+r.a
return new A.d5(d,!0,e,j,i)},
sdt(a){this.b=A.N(a)}}
A.d5.prototype={}
A.cw.prototype={}
A.cu.prototype={
dN(a){var s=this
return A.o3(function(){var r=a
var q=0,p=1,o,n,m,l,k
return function $async$dN(b,c){if(b===1){o=c
q=p}while(true)switch(q){case 0:n=s.a,m=n.length,l=0
case 2:if(!(l<n.length)){q=4
break}k=n[l]
q=k.gbz()==A.qX(r)?5:6
break
case 5:q=7
return k
case 7:case 6:case 3:n.length===m||(0,A.w)(n),++l
q=2
break
case 4:return A.nS()
case 1:return A.nT(o)}}},t.J)},
gc0(){var s,r,q
for(s=this.b,s=s.gap(s),s=s.gC(s);s.p();){r=s.gt(s).b
if(r==null)continue
q=r.b
if(q instanceof A.aa)return q}return B.ds},
ghw(){var s,r,q
for(s=this.b,s=s.gap(s),s=s.gC(s);s.p();){r=s.gt(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a9)return q}return B.hf},
gaY(){var s,r,q
for(s=this.b,s=s.gap(s),s=s.gC(s);s.p();){r=s.gt(s).b
if(r==null)continue
q=r.b
if(q instanceof A.aX)return q}return null},
c8(a,b){var s=this.b
s.h(0,b)
s.j(0,b,a)},
e1(a){var s,r,q
for(s=this.b,r=s.ga9(s),r=r.gC(r);r.p();){q=r.gt(r)
if(J.a_(s.h(0,q),a))s.j(0,q,null)}}}
A.cv.prototype={
l(a){return"EquipmentSlot."+this.b}}
A.c5.prototype={}
A.fI.prototype={
l(a){return"ConditionType."+this.b}}
A.dB.prototype={
l(a){return"TileType."+this.b}}
A.da.prototype={
l(a){return"CollisionMode."+this.b}}
A.dA.prototype={}
A.hz.prototype={
l(a){return"PathfindingMode."+this.b}}
A.aB.prototype={}
A.cM.prototype={
l(a){return"TerrainType."+this.b}}
A.cD.prototype={
l(a){return"LockState."+this.b}}
A.bp.prototype={
l(a){return"Biome."+this.b}}
A.cd.prototype={
ga8(a){return this.b.a},
ga3(a){return this.b.b},
shI(a){t.dt.a(a)},
$iei:1,
gcc(){return this.z}}
A.bP.prototype={}
A.dk.prototype={$iei:1,
gcc(){return this.a},
ga8(a){return this.b},
ga3(a){return this.c}}
A.d.prototype={
n(a,b){if(b==null)return!1
return b instanceof A.d&&b.a===this.a&&b.b===this.b},
gF(a){return A.cK(this.a,this.b,B.H,B.H)},
v(a,b){return new A.d(this.a+b.a,this.b+b.b)},
ad(a,b){return new A.d(this.a-b.a,this.b-b.b)},
aK(){return new A.M(this.a,this.b)},
au(a){var s=Math.abs(this.a-a.a),r=Math.abs(this.b-a.b)
return s+r+-0.6000000000000001*Math.min(s,r)},
l(a){return"("+this.a+", "+this.b+")"}}
A.lb.prototype={
l(a){return"LiquidKind."+this.b}}
A.X.prototype={
l(a){return"Interactable."+this.b}}
A.le.prototype={}
A.aP.prototype={
l(a){return"AbilityTag."+this.b}}
A.dn.prototype={
l(a){return"MonsterKind."+this.b}}
A.bc.prototype={}
A.fP.prototype={
fM(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.b,i=j.a6(k,t.B),h=this.d
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.d.c
l=p+n
if(!(l<m.length))return A.a(m,l)
l=m[l]
if(!(l.c===B.c||A.U(A.be(l.f)))){if(!(r>=0&&r<s))return A.a(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.a(i,m)
i[m]=o
r+=2}}this.e=r
j.aa(b,k,i)},
Y(a,b){var s=this
if(s.c){s.fM(0,a)
s.c=!1}if(s.d==null)return
s.b.ak(a,0,B.f.af(s.e,2),A.aA(["u_resolution",A.b([b.a,b.b],t.t),"u_offset",A.b([b.d,b.e],t.n)],t.N,t.z))}}
A.fR.prototype={
Y(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.b,r=s.length,q=t.t,p=t.n,o=t.g2,n=t.N,m=t.z,l=0;l<s.length;s.length===r||(0,A.w)(s),++l){k=s[l]
$.oc().ak(a,4,3,A.aA(["u_resolution",A.b([b.a,b.b],q),"u_time",k.gc7().ghj().bu(0,k.gh5(k).ghj()),"u_offset",A.b([b.d,b.e],p),"u_origin",A.b([k.ga8(k),k.ga3(k)],o)],n,m))
k.sc7(k.gc7().v(0,A.fQ(11)))}r=A.T(s).i("C(1)").a(new A.ka())
if(!!s.fixed$length)A.W(A.B("removeWhere"))
B.a.aP(s,r,!0)}}
A.ka.prototype={
$1(a){t.ox.a(a)
return a.gc7().e6(0,a.gh5(a))},
$S:37}
A.ke.prototype={}
A.kd.prototype={
ew(a,b,c){var s,r,q,p=this
p.gP().b.a4(p.a)
p.y.b.a4(p.a)
p.z.b.a4(p.a)
p.gbj().c.a4(p.a)
s=p.ga5()
r=p.a
s.e=r.createFramebuffer()
s.b.a4(r)
s.c.a4(r)
q=p.cy
if(q===$){s=A.az(A.b([new A.Y("a_position",35044,5126,2,new Float32Array(A.cU(B.O)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise(vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f * f * f + .6 * f * f + .5 * f) * color, 0.3);\n}\n",A.b([new A.u("u_resolution",B.h),new A.u("u_time",B.B),new A.u("u_offset",B.h),new A.u("u_player_vis_texture",B.t),new A.u("u_block_size",B.h)],t.o),u.d)
A.aK(p.cy,"weather")
q=p.cy=new A.ih(s)}q.c.a4(p.a)
s=p.gcu()
r=p.a
s.c.a4(r)
s.d.a4(r)
r=p.a
$.oc().a4(r)
$.qm().a4(r)
p.fr.b.a4(p.a)
p.gbr().b.b.a4(p.a)
p.gav().e.a4(p.a)
s=$.y.b
if(s==null?$.y!=null:s!==$.y)A.W(new A.cB("Field '"+$.y.a+"' has already been initialized."))
$.y.b=p
s=p.cx
r=s.c
new A.bB(r,A.E(r).i("bB<1>")).cd(new A.kf(p,p.b.getBoundingClientRect()))
s.a=p.gav()},
gP(){var s,r=this,q=r.x
if(q===$){s=A.p_(r.a,r.f)
A.aK(r.x,"sprites")
r.x=s
q=s}return q},
gbj(){var s,r=this,q=r.Q
if(q===$){s=A.t9()
s=A.az(A.b([new A.Y("a_position",35044,5126,2,s),new A.Y("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.t,A.b([new A.u("u_resolution",B.h),new A.u("u_offset",B.h)],t.o),u.Z)
A.aK(r.Q,"fovRenderer")
q=r.Q=new A.fT(r.f,s,new A.d(-1,-1))}return q},
ga5(){var s,r,q,p=this,o=u.v,n="a_position",m="u_player_visible_texture",l=p.ch
if(l===$){s=t.G
r=t.o
q=A.az(A.b([new A.Y(n,35044,5126,2,new Float32Array(A.cU(B.O)))],s),u._,A.b([new A.u("u_source_position",B.h),new A.u("u_source_color",B.b9),new A.u("u_source_strength",B.B),new A.u("u_time",B.B),new A.u("u_visible_texture",B.t),new A.u(m,B.t)],r),o)
r=A.az(A.b([new A.Y(n,35044,5126,2,new Float32Array(A.cU(B.O)))],s),u.L,A.b([new A.u("u_light_texture",B.t),new A.u("u_game_world_texture",B.t),new A.u(m,B.t),new A.u("u_resolution",B.h),new A.u("u_block_size",B.h),new A.u("u_offset",B.h)],r),o)
s=A.b([],t.ow)
A.aK(p.ch,"lightingRenderer")
l=p.ch=new A.ep(q,r,p.f,s)}return l},
gcu(){var s,r,q,p,o=this,n="#version 300 es\nin vec2 a_position;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n",m="#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nuniform float u_time;\nuniform float u_valid;\n\nvec4 valid_color = vec4(0.509, 0.69411, 1.0, 1.0);\nvec4 invalid_color = vec4(1.0, 0.0, 0.0, 1.0);\n\nvoid main() {\n  float scale = (sin(u_time * 3.0) + 1.0) / 4.0;\n  if (u_valid == 1.0) {\n    outColor = vec4(valid_color.xyz, scale + 0.3);\n  } else {\n    outColor = vec4(invalid_color.xyz, scale + 0.3);\n  }\n}\n",l="a_position",k="u_offset",j="u_resolution",i=o.db
if(i===$){s=o.gO()
r=t.G
q=t.o
p=A.az(A.b([new A.Y(l,35048,5126,2,new Float32Array(12))],r),m,A.b([new A.u(k,B.h),new A.u(j,B.h),new A.u("u_time",B.B),new A.u("u_valid",B.B)],q),n)
q=A.b([new A.u(k,B.h),new A.u(j,B.h),new A.u("u_time",B.B),new A.u("u_valid",B.B)],q)
r=A.az(A.b([new A.Y(l,35048,5126,2,new Float32Array(400))],r),m,q,n)
A.aK(o.db,"selectionRenderer")
i=o.db=new A.hK(s,p,r)}return i},
gbr(){var s,r,q=this,p=q.dx
if(p===$){s=q.a
r=A.b([],t.ff)
s=A.p_(s,q.f)
A.aK(q.dx,"textRenderer")
p=q.dx=new A.i_(s,r)}return p},
gav(){var s,r=this,q=r.fx
if(q===$){s=A.nP(r.a)
A.aK(r.fx,"ui")
r.fx=s
q=s}return q},
gO(){var s=this.fy
if(s===$){A.aK(s,"focusManager")
s=this.fy=new A.kh()}return s},
c6(){var s,r=this
r.y2=null
B.a.sm(r.ga5().y,0)
r.gP().bg(0)
s=r.y
s.c=null
s.d=!0
s=r.z
s.d=null
s.c=!0
s=r.f
B.ap.aC(s.c,0,4000,0)
s.e=B.G
r.gav().b=null
s=r.ry
r.r.e2(0,!0,0,0,r.x1,s)
r.k2=null
s=r.k3
if(s!=null)s.aF(0)
B.a.sm(r.id.a,0)},
Y(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=3553,g=6408,f=33071,e=36160
i.a=b
s=i.b
r=s.clientWidth
q=s.clientHeight
if(r!==i.ry||q!==i.x1){i.y1=!0
B.aU.saw(s,r)
B.aU.sas(s,q)
i.ry=r
i.x1=q
s=i.k4
if(s!=null)B.e.du(b,s)
s=i.r1
if(s!=null)B.e.du(b,s)
i.k4=b.createTexture()
i.r1=b.createTexture()
B.e.a1(b,h,i.k4)
B.e.aZ(b,h,0,g,i.ry,i.x1,0,g,5121,null)
b.texParameteri(h,10241,9729)
b.texParameteri(h,10242,f)
b.texParameteri(h,10243,f)
B.e.a1(b,h,i.r1)
B.e.aZ(b,h,0,g,i.ry,i.x1,0,g,5121,null)
b.texParameteri(h,10241,9729)
b.texParameteri(h,10242,f)
b.texParameteri(h,10243,f)}s=i.r
p=i.f.e
s.e2(0,i.y1,p.a,p.b,q,r)
p=i.dz
p.a=r
p.b=q
p.d=s.a
p.e=s.b
p.c=a
b.viewport(0,0,r,q)
b.clearColor(0,0,0,1)
b.clear(16640)
b.enable(3042)
b.blendFuncSeparate(770,771,1,771)
B.e.aR(b,e,i.r2)
B.e.ca(b,e,36064,h,i.k4,0)
b.clearColor(0,0,0,1)
b.clear(16640)
i.y.Y(b,p)
i.z.Y(b,p)
i.gP().Y(b,p)
s=i.rx
B.e.aR(b,e,s)
B.e.ca(b,e,36064,h,i.r1,0)
b.viewport(0,0,r,q)
b.clearColor(0,0,0,1)
i.ga5()
i.ga5().r=i.k4
i.ga5().z=s
i.ga5().Y(b,p)
s=i.gbj()
o=s.b
if(!o.e.n(0,s.d)||s.e||o.f){s.fP(b)
o.f=!1}o=t.t
n=t.N
m=t.z
s.c.ak(b,4,48e3,A.aA(["u_resolution",A.b([p.a,p.b],o),"u_offset",A.b([p.d,p.e],t.n)],n,m))
i.dy.Y(b,p)
if(i.d.b)i.gcu().Y(b,p)
B.e.aR(b,e,null)
s=i.fr
s.c=i.r1
b.activeTexture(33984)
B.e.a1(b,h,s.c)
s.b.ak(b,4,3,A.aA(["u_resolution",A.b([p.a,p.b],o),"u_texture",0,"u_time",p.c/1000],n,m))
m=i.gbr()
s=m.e
o=p.b
if(s!==o||m.d!==p.a||p.d!==m.f||p.e!==m.r){m.d=p.a
m.e=o
m.r=p.e
m.f=p.d}m.b.Y(b,p)
i.gav().Y(b,p)
b.finish()
l=A.fQ(B.b.B(a))
s=i.c
k=A.b(s.slice(0),A.T(s))
B.a.sm(s,0)
for(s=k.length,j=0;j<k.length;k.length===s||(0,A.w)(k),++j)k[j].$1(l)
i.hr(p)
i.y1=!1},
hr(a){var s=this.y2
if(s==null)return
s=s.a.b
B.b.B(s.d/24)
B.b.B(s.e/36)},
cl(a){var s,r=this.y2,q=r.e
r=r.d
if(!(r<q.length))return A.a(q,r)
B.a.A(q[r].b,a)
s=a.b
s.sV(-1)
s.sW(-1)
this.gP().A(0,s)},
cA(a,b){var s=a.b,r=B.b.B(s.d/24),q=B.b.B(s.e/36),p=b.b,o=B.b.B(p.d/24),n=B.b.B(p.e/36)
s.sV(o)
s.sW(n)
p.sV(r)
p.sW(q)
if(a.x){s=this.f
s.e=new A.d(o,n)
s.bt()}if(b.x){s=this.f
s.e=new A.d(r,q)
s.bt()}},
dR(a,b){var s=a.b
s.sV(b.a)
s.sW(b.b)
if(a.x){s=this.f
s.e=b
s.bt()}},
dg(a,b,c){var s,r,q,p
if(c==null){s=this.y2
r=s.e
s=s.d
if(!(s<r.length))return A.a(r,s)
q=r[s]}else q=c
B.a.k(q.b,a)
p=a.b
p.sV(b.a)
p.sW(b.b)
p.saA(0,B.I)
s=this.gP()
p.sat(0,1)
s.k(0,p)},
df(a,b){return this.dg(a,b,null)},
eK(a){var s="cave_1.mp3"
switch(a.a){case B.J:case B.a1:case B.a2:return"surface_day_1.mp3"
case B.x:return s
case B.r:return s
case B.D:case B.y:return"drone_abandoned_desolate.mp3"}},
dF(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3="lightingRenderer"
a2.k2=null
B.a.sm(a2.ga5().y,0)
a2.gP().bg(0)
s=a2.y
s.c=a5
s.d=!0
s=a2.z
s.d=a5
s.c=!0
s=a2.f
r=a5.d
s.dL(r)
s.dG()
B.ap.aC(s.c,0,4000,0)
s.e=a4
q=a2.k3
if(q!=null)q.aF(0)
q=a5.e
a2.k3=a2.e.hC(a2.eK(q))
for(r=r.c,p=r.length,o=q.a===B.r,n=!o,m=t.e.i("K.T"),l=0;l<r.length;r.length===p||(0,A.w)(r),++l){k=r[l]
j=k.b
if(k.r!=null&&k.f!==B.a6){i=new A.Q(11,13,j.a*24,j.b*36,null)
i.x=B.bO
i.y=-1
h=i.a=a2.gP()
g=h.d
g.$ti.c.a(i);++g.d
g.az(0,i)
h.a=!0}h=j.a*24
g=j.b*36
i=A.oC(k.f,h,g,q)
if(i!=null){f=i.a=a2.gP()
e=f.d
e.$ti.c.a(i);++e.d
e.az(0,i)
f.a=!0
k.y=i}if(k.f===B.F&&n){k.z=new A.bP(B.f3,7)
d=a2.ch
if(d===$){c=A.hc(s)
A.aK(d,a3)
a2.ch=c
d=c}B.a.k(d.y,k)}if(k.f===B.a9&&o){f=B.h3.h(0,m.a(900))
f.toString
k.z=new A.bP(f,1)
d=a2.ch
if(d===$){c=A.hc(s)
A.aK(d,a3)
a2.ch=c
d=c}B.a.k(d.y,k)}if(k.f===B.a7){f=B.aK.h(0,m.a(300))
f.toString
k.z=new A.bP(f,4)
d=a2.ch
if(d===$){c=A.hc(s)
A.aK(d,a3)
a2.ch=c
d=c}B.a.k(d.y,k)}if(k.f===B.a8){k.z=new A.bP(B.q,4)
d=a2.ch
if(d===$){c=A.hc(s)
A.aK(d,a3)
a2.ch=c
d=c}B.a.k(d.y,k)}for(f=k.e,e=f.length,b=0;b<f.length;f.length===e||(0,A.w)(f),++b){a=f[b]
i=A.p0(a)
a0=i.a
a1=a0==null
if(!a1)a0.a=!0
i.d=h
if(!a1)a0.a=!0
i.e=g
a0=i.a=a2.gP()
a1=a0.d
a1.$ti.c.a(i);++a1.d
a1.az(0,i)
a0.a=!0
a.f=i}}for(s=a5.b,r=s.length,l=0;l<s.length;s.length===r||(0,A.w)(s),++l){i=s[l].b
i.r=B.I
q=i.a
if(q!=null)q.a=!0
q=a2.gP()
i.y=1
p=i.a
if(p!=null)p.a=!0
i.a=q
p=q.d
p.$ti.c.a(i);++p.d
p.az(0,i)
q.a=!0}s=a2.gav().c.r
B.a.sm(s.r,0)
s.f.hA()}}
A.kf.prototype={
$1(a){var s,r
t.bd.a(a)
s=J.aN(a)
this.a.dz.sho(s.h(a,0))
s=s.h(a,1)
r=this.b
r.left.toString
r.top.toString
if(typeof s!=="number")return s.ad()},
$S:22}
A.H.prototype={
ay(a){return this.ef(a)},
ef(a){var s=0,r=A.aL(t.g),q,p=2,o,n=[],m=this,l,k,j,i
var $async$ay=A.aM(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a4(m.D(0,a),$async$ay)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
l=A.bE(i)
A.fm("ERROR: "+A.G(l))
q=new A.x(null,null,!1,!0,!1,B.d,null,null)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.aI(q,r)
case 2:return A.aH(o,r)}})
return A.aJ($async$ay,r)}}
A.d1.prototype={}
A.aQ.prototype={
gbi(a){return this.d>=1},
aX(a){this.d=1
this.x.$0()},
bf(a,b){var s,r,q,p=this,o=p.e,n=o==null?0:B.f.af(b.a-o.a,1000)
p.e=b
s=n/B.f.af(p.a.a,1000)
r=p.f
q=p.d
q=p.d=B.b.c3(r?p.d=q+s:p.d=q-s,-1,1)
q>=1||q<0
p.r.$1(p)},
sao(a){this.d=A.nZ(a)},
gao(){return this.d}}
A.iq.prototype={
gbi(a){var s=this.a
return s.gbi(s)&&this.b.d>=1},
gao(){return(this.a.gao()+this.b.d)/2},
sao(a){var s=this.a
if(a<0.5)s.sao(a*2)
else{s.sao(1)
this.b.d=(a-0.5)*2}},
bf(a,b){var s=this.a
if(!s.gbi(s))s.bf(0,b)
if(s.gao()>=this.c)this.b.bf(0,b)},
aX(a){var s,r=this.a
r.sao(1)
s=this.b
s.d=1
r.aX(0)
s.aX(0)}}
A.x.prototype={}
A.ez.prototype={
D(a,b){var s,r,q,p,o=null,n=b.y2.a
A.dQ(b.dw,"worldWrapper").b.p()
s=b.y2
r=s.e
s=s.d+1
if(!(s<r.length))return A.a(r,s)
q=r[s]
p=A.mU(q)
b.dF(p,q)
b.dg(n,p,q);++b.y2.d
b.y1=!0
return new A.x(o,o,!0,!0,!1,B.d,o,o)}}
A.eD.prototype={
D(a,b){var s,r,q,p=null,o=this.a,n=o.c.x,m=n.gaY(),l=n.b.h(0,B.C)
if(m==null||l.e===1)return new A.x(p,"Weapon does not need to be reloaded",!1,!0,!1,B.d,p,p)
s=A.pJ(n,m)
if(s==null)return new A.x(p,"No more ammo.",!1,!0,!1,B.d,p,p)
r=t.mm.a(s.b)
o=o.q()
o.toString
b.e.X("reload_1.mp3",o)
o=r.b
m.toString
q=Math.min(o,1)
o-=q
r.b=o
if(o===0)B.a.A(n.a,s)
o=l.e
o.toString
l.e=q+o
return new A.x(p,p,!0,!0,!1,B.d,p,p)}}
A.bx.prototype={
D(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a={},a0=c.b
if(B.a.fW(a0.c.Q,new A.lk()))return new A.x(new A.hR(a0),b,!1,!0,!1,B.d,b,b)
s=a2.y2
r=s.e
s=s.d
if(!(s<r.length))return A.a(r,s)
q=r[s]
p=a0.q()
o=p.v(0,c.a)
n=q.d
if(!n.bk(o))return new A.x(b,b,!1,!0,!1,B.d,b,b)
m=n.h(0,o)
l=q.al(o)
if((m.c===B.c||A.U(A.be(m.f)))&&l==null){k=m.f
if(k==null)return new A.x(b,b,!1,!0,!1,B.d,b,b)
if(k!==B.p)return new A.x(b,b,!1,!0,!1,B.d,b,b)
a=a2.y2
s=a.e
a=a.d
if(!(a<s.length))return A.a(s,a)
j=A.pE(m,s[a],a0)
if(j.length!==0)return new A.x(B.a.gby(j).c,b,!1,!0,!1,B.d,b,b)
return new A.x(b,b,!1,!0,!1,B.d,b,b)}i=A.b([],t.w)
a.a=!1
if(l!=null){if(A.pF(l,a0))return new A.x(new A.d4(!1,!0,a0,l),b,!1,!0,!1,B.d,b,b)
s=a.a=!0}else s=!1
r=a2.f
r=r.aj(r.e)
r.toString
h=a0.x
g=!h
if(g)f=r.h(0,p)||r.h(0,o)
else f=!1
n.h(0,p)
if(m.r!=null){e=B.u.R(5)
a2.id.ev(a0,o)
a2.e.bn("water_footsteps_"+(e+1)+".mp3",o,0.15)}else a2.id.hd(a0,o)
r=q.a
r.k(0,o)
if(f||c.c)d=new A.aQ(A.fQ(60),new A.ll(c,p,o),new A.lm(a,c,a2,l,o,q))
else{if(s){l.toString
a2.cA(l,a0)}else a2.dR(a0,o)
r.A(0,o)
d=b}a0.a=0
if(h){a=a2.go
if(q!==a.b){a.b=q
a.a.cm(0)}a=a.a
a.cm(0)
a0=a0.q()
a0.toString
a.b.j(0,a0,20)
a.hy(q,B.K)}return new A.x(b,b,!0,!0,g,i,d,b)}}
A.lk.prototype={
$1(a){return t.ex.a(a).a===B.aV},
$S:18}
A.ll.prototype={
$1(a){var s=a.d,r=1-s,q=this.b,p=this.c,o=this.a.b.b
o.sa8(0,q.a*24*r+p.a*24*s)
o.sa3(0,q.b*36*r+p.b*36*s)},
$S:2}
A.lm.prototype={
$0(){var s,r=this,q=r.c,p=r.b.b
if(r.a.a){s=r.d
s.toString
q.cA(s,p)}else q.dR(p,r.e)
r.f.a.A(0,r.e)},
$S:0}
A.dy.prototype={
D(a,b){var s=null
return new A.x(s,s,!0,!0,!1,B.d,s,s)}}
A.hb.prototype={
D(a,b){var s=this.a.c
s.d-=1000;++s.c;++s.e;++s.f;++s.r
return new A.x(null,"You have leveled up.",!0,!0,!1,B.d,null,null)}}
A.eL.prototype={
D(a,b){var s,r,q,p,o,n,m=null,l=b.y2,k=l.e
l=l.d
if(!(l<k.length))return A.a(k,l)
s=this.b
r=k[l].d.h(0,s)
q=r.y
r.f=this.a?B.p:B.al
l=b.gP()
q.toString
l.A(0,q)
l=r.f
l.toString
k=r.b
p=b.y2
o=p.e
p=p.d
if(!(p<o.length))return A.a(o,p)
n=A.oC(l,24*k.a,36*k.b,o[p].e)
if(n!=null)b.gP().k(0,n)
r.y=n
l=b.y2
k=l.e
l=l.d
if(!(l<k.length))return A.a(k,l)
b.f.dM(k[l].d,s)
b.gbj().e=!0
b.e.bn("door_1.mp3",s,0.8)
return new A.x(m,m,!0,!0,!1,B.d,m,m)}}
A.d4.prototype={
D(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e={},d=g.c
d.a=0
e.a=null
s=g.d
r=A.ub(s,d,b)
q=d.c
p=s.c
if(!g.b)o=e.a=q.dW(p,B.u,r)
else o=e.a=q.dQ(p,B.u,r)
B.a.M(q.Q,o.d)
B.a.M(p.Q,o.e)
q=d.q()
q.toString
b.id.h8(d,q)
n=A.b([],t.w)
q=s.q()
q.toString
m=d.q()
m.toString
if(!g.a){d=d.b
l=d.y
d.sat(0,4)
k=m.aK()
j=q.aK()
i=m.aK().v(0,j.ad(0,k).bu(0,1.5))
e.b=!0
h=new A.aQ(B.aY,new A.jD(e,g,b,q,m,k,i),new A.jE(e,g,b,q,m,l))}else{d=d.x?B.z:B.q
g.bB(o.c,q,m,b,d)
h=f}if(!o.b)return new A.x(f,o.a,!0,!0,!1,B.d,h,f)
d=p.b-o.c
p.b=d
if(d<=0)B.a.k(n,new A.dc(s))
return new A.x(f,e.a.a,!0,!0,!1,n,h,f)},
cU(a){if(!this.b){if(a)return"bullet_impact_2.mp3"
return"bullet_miss_1.mp3"}if(a)return"cut_attack_2.mp3"
return"miss_1.mp3"},
bB(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j={}
if(a<=0)return
s=c.a*24
r=c.b*36
q=new A.hF(B.f.l(a),e,1.25,s,r)
p=b.a*24
o=b.b*36
n=A.qO(new A.M(p-s,o-r))
m=n.a*24
n=n.b*36
l=new A.M(m,n).v(0,new A.M(s,r))
k=new A.M(m*2,n*2).v(0,new A.M(p,o))
d.gbr().fT(q)
j.a=B.bx
A.ry(B.fB,new A.jC(j,d,q,k,l))},
l(a){return"TargetMeleeAttackEvent{"+this.c.l(0)+" -> "+this.d.l(0)+"}"}}
A.jD.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a
if(l.b&&a.d>=0.4){s=m.c
r=m.b
q=m.d
s.e.X(r.cU(l.a.b),q)
p=l.a
o=r.c.x?B.z:B.q
r.bB(p.c,q,m.e,s,o)
l.b=!1
l=l.a
if(l.b)r.d.b.saA(0,B.q)
else{s=r.d.b
if(l.c<=0)s.saA(0,B.h8)
else s.saA(0,B.dP)}}l=a.d
if(l<=0.4){s=m.f
r=m.r
n=l/0.6
l=m.b.c.b
l.sa8(0,A.dV(r.a,s.a,n)*24)
l.sa3(0,A.dV(r.b,s.b,n)*36)}else{s=m.b.c
if(l>=0.6){l=s.b
s=m.e
l.sV(s.a)
l.sW(s.b)}else{l=s.b
s=m.r
l.sa8(0,s.a*24)
l.sa3(0,s.b*36)}}},
$S:2}
A.jE.prototype={
$0(){var s,r,q,p,o,n=this,m=n.a
if(m.b){s=n.c
r=n.b
q=n.d
s.e.X(r.cU(m.a.b),q)
p=m.a
o=r.c.x?B.z:B.q
r.bB(p.c,q,n.e,s,o)
m.b=!1}m=n.b
s=m.c.b
s.sat(0,n.f)
r=n.e
s.sV(r.a)
s.sW(r.b)
m.d.b.saA(0,B.I)},
$S:0}
A.jC.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
t.hU.a(a)
s=l.a
r=s.a.a+8000
s.a=new A.ad(r)
if(r>5e5){a.fZ(0)
r=l.b.gbr()
q=l.c
if(B.a.A(r.c,q)){r=r.b
B.a.J(q.f.a,r.gbo(r))}}p=B.f.af(s.a.a,1000)/300
s=l.c
r=l.d
q=1-p
o=l.e
n=p*r.a+q*o.a
s.d=n
m=s.f
if(m!=null)m.w(n,s.e)
n=s.r
if(n!=null)n.b.a=!0
r=p*r.b+q*o.b
s.e=r
q=s.f
if(q!=null)q.w(s.d,r)
s=s.r
if(s!=null)s.b.a=!0},
$S:40}
A.hR.prototype={
D(a,b){var s=this.a.c,r=s.Q,q=A.T(r).i("C(1)").a(new A.lI())
if(!!r.fixed$length)A.W(A.B("removeWhere"))
B.a.aP(r,q,!0)
return new A.x(null,s.ch.a+" stands up.",!0,!0,!1,B.d,null,null)}}
A.lI.prototype={
$1(a){return t.ex.a(a).a===B.aV},
$S:18}
A.dc.prototype={
l(a){return"DeathEvent{"+this.a.l(0)+"}"},
D(a,b){var s,r,q,p,o=null,n=this.a
if(n.e){b.cl(n)
return new A.x(o,o,!0,!0,!1,B.d,o,o)}if(n.x){b.c6()
n=b.gav().c
s=n.e
if(s!=null)n.N(s)
s=n.b7("GAME OVER")
n.e=s
n.G(s)
return new A.x(o,"You Died!",!0,!0,!1,B.d,o,o)}b.y2.a.c.d+=100
r=A.b([],t.w)
s=b.y2.a
if(s.c.d>=1000)B.a.k(r,new A.hb(s))
q=n.q()
s=n.Q
if(s!=null)p=B.u.K()<0.33
else p=!1
if(p){s.toString
q.toString
b.e.bn(s,q,0.8)}b.cl(n)
return new A.x(o,n.l(0)+" has died.",!1,!0,!1,r,o,o)}}
A.d8.prototype={
D(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=a0.y2,b=c.e
c=c.d
if(!(c<b.length))return A.a(b,c)
s=b[c]
if($.oq!==s){$.oq=s
e.b.cm(0)}for(c=a0.f.c,b=e.c,r=!b,q=e.b,p=q.a,o=q.b,n=s.d,m=0;m<100;++m)for(l=0;l<40;++l){k=100*l+m
j=new A.d(m,l)
if(!(k<4000))return A.a(c,k)
i=c[k]
if(i===0&&b)if(n.h(0,j).f===B.p)o.j(0,j,100)
else{h=n.h(0,j)
if(!(h.c===B.c||A.U(A.be(h.f))))o.j(0,j,80)}else if(i===1&&r){g=l*100+m
if(!(g<4000))return A.a(p,g)
p[g]=0
o.A(0,j)}}q.hx(s,B.K)
c=e.a
b=c.q()
b.toString
j=q.dB(s,b,1,B.K)
if(j==null)return new A.x(d,"No more areas to explore",!1,!0,!1,B.d,d,d)
b=$.bF()
r=c.q()
r.toString
r=b.aD(r,j,s,B.K)
f=r==null?d:r.b
if(f==null)return new A.x(d,"No path to that location",!1,!0,!1,B.d,d,d)
b=f.d
r=c.q()
r.toString
return new A.x(new A.bx(b.ad(0,r),c,!1),d,!0,!0,!1,B.d,d,new A.jJ(e))}}
A.jJ.prototype={
$0(){var s=this.a
return A.op(s.a,s.b)},
$S:41}
A.ia.prototype={
D(a,b){var s,r,q,p,o,n=null,m=b.y2,l=m.e
m=m.d
if(!(m<l.length))return A.a(l,m)
s=l[m]
r=A.b([],t.q)
for(m=s.d.c,l=m.length,q=!1,p=0;p<m.length;m.length===l||(0,A.w)(m),++p){o=m[p]
if(o.f===B.am){o.f=B.p
B.a.k(r,o.b)
q=!0}}if(q){for(m=r.length,l=b.e,p=0;p<r.length;r.length===m||(0,A.w)(r),++p)l.X("door_unlock_1.mp3",r[p])
m=b.y2
l=m.e
m=m.d
if(!(m<l.length))return A.a(l,m)
l[m].d.h(0,this.a).f=B.aB
return new A.x(n,"A door has been unlocked",!0,!0,!1,B.d,n,n)}return new A.x(n,n,!1,!0,!1,B.d,n,n)}}
A.eC.prototype={
D(a,b){var s,r=null,q=this.b,p=q.c.x.b.h(0,B.C)
if(p==null)return new A.x(r,r,!1,!0,!1,B.d,r,r)
s=p.e
if(s===0){if(this.c)return new A.x(new A.eD(q),r,!1,!0,!1,B.d,r,r)
return new A.x(r,"No ammo remaining",!1,!0,!1,B.d,r,r)}s.toString
p.e=s-1
return new A.x(new A.hD(this.a,q),r,!0,!0,!1,B.d,r,r)}}
A.hD.prototype={
D(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null,g=b.y2,f=g.e
g=g.d
if(!(g<f.length))return A.a(f,g)
s=f[g]
g=this.c
f=g.q()
f.toString
r=this.b
q=$.bF().h9(f,r,s)
if(q==null)return new A.x(h,"Cant reach target",!1,!0,!1,B.d,h,h)
p=s.al(r)
o=A.b([],t.w)
if(p!=null)o.push(new A.d4(!0,!1,g,p))
n=q.hK(0)
m=b.e.X("pistol_1.mp3",f)
g=g.b
f=B.b.B(g.d/24)
g=B.b.B(g.e/36)
l=B.h6.h(0,t.gX.i("K.T").a(700))
l.toString
k=new A.dk(new A.bP(l,10),f,g)
B.a.k(b.ga5().y,k)
g=B.bL.h(0,t.e.i("K.T").a(800))
g.toString
j=new A.Q(14,2,-1,-1,h)
j.sam(0,g)
i=A.nv($.pR(),h,0,h,h,!0,!1,j)
b.df(i,B.G)
j.saA(0,new A.e(0))
return new A.x(h,h,!0,!0,!1,o,new A.aQ(A.fQ(16*n.length),new A.lw(n,j,m,k),new A.lx(b,i,k)),h)}}
A.lw.prototype={
$1(a){var s,r,q=this,p=q.a,o=B.b.aE(a.d*(p.length-1))
if(!(o>=0&&o<p.length))return A.a(p,o)
s=p[o]
o=q.b
p=s.a
o.sV(p)
r=s.b
o.sW(r)
q.c.dS(0,new A.d(B.f.B(p),B.f.B(r)))
q.d.a.c=10*(1-a.d)},
$S:2}
A.lx.prototype={
$0(){var s=this.a
s.cl(this.b)
B.a.A(s.ga5().y,this.c)},
$S:0}
A.h1.prototype={
D(a,b){var s,r=null,q=this.a
B.a.A(this.b.e,q)
B.a.k(this.c.c.x.a,q)
if(q.f!=null){s=b.gP()
q=q.f
q.toString
s.A(0,q)}return new A.x(r,r,!0,!0,!1,B.d,r,r)}}
A.eb.prototype={
D(a,b){var s,r,q,p=null,o=this.a,n=o.q()
n.toString
s=this.b
B.a.A(o.c.x.a,s)
r=A.p0(s)
r.sV(n.a)
r.sW(n.b)
s.f=r
b.gP().k(0,r)
o=b.y2
q=o.e
o=o.d
if(!(o<q.length))return A.a(q,o)
B.a.k(q[o].d.h(0,n).e,s)
return new A.x(p,p,!0,!0,!1,B.d,p,p)}}
A.ic.prototype={
D(a,b){var s,r=null,q=this.b
if(q.c!==B.a_)return new A.x(r,r,!1,!0,!1,B.d,r,r)
s=this.a.c
switch(t.i_.a(q.b)){case B.bu:s.sdt(Math.min(s.b+5,s.a))
break}B.a.A(s.x.a,q)
return new A.x(r,r,!0,!0,!1,B.d,r,r)}}
A.h3.prototype={
D(a,b){var s,r,q,p=b.y2,o=p.e
p=p.d
if(!(p<o.length))return A.a(o,p)
s=o[p].d.h(0,this.a)
r=b.e.X("medical_beeps_1.mp3",s.b)
p=this.b
o=p.q()
o.toString
q=A.bz(B.hs)
q.sV(o.a)
q.sW(o.b)
q.sat(0,4)
q.sam(0,B.dO)
b.gP().k(0,q)
return new A.x(null,null,!0,!0,!1,B.d,new A.aQ(B.fA,new A.kQ(q,p.c),new A.kR(r,b,q,s)),null)}}
A.kQ.prototype={
$1(a){var s
this.a.sam(0,new A.e(((B.b.B(255*B.u.K())&255)<<24|16777215)>>>0))
s=this.b
s.sdt(Math.min(s.b+1,s.a))},
$S:2}
A.kR.prototype={
$0(){var s,r,q=this
q.a.aF(0)
s=q.b
s.gP().A(0,q.c)
r=q.d
r.f=B.aD
B.a.A(s.ga5().y,r)},
$S:0}
A.hd.prototype={
D(a,b){var s,r,q=b.y2,p=q.e
q=q.d
if(!(q<p.length))return A.a(p,q)
s=this.a
p[q].d.h(0,s).f=B.aC
q=b.y2
p=q.e
q=q.d
if(!(q<p.length))return A.a(p,q)
r=p[q].d.h(0,s)
B.a.A(b.ga5().y,r)
b.e.X("machine_on_1.mp3",r.b)
return new A.x(new A.eY(A.bw(t.j),A.b([s],t.q)),null,!0,!0,!1,B.d,null,null)}}
A.eY.prototype={
D(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=b0.y2,a8=a7.e
a7=a7.d
if(!(a7<a8.length))return A.a(a8,a7)
s=a8[a7]
a7=t.q
r=A.b([],a7)
for(a8=this.b,q=s.d,p=q.a,o=q.b,n=this.a,m=b0.f,l=m.c,k=m.x,j=m.r;i=a8.length,i!==0;){if(0>=i)return A.a(a8,-1)
h=a8.pop()
if(n.S(0,h))continue
n.k(0,h)
i=h.b
g=h.a
f=i*100+g
if(!(f>=0&&f<4000))return A.a(l,f)
l[f]=1
m.f=!0
e=m.aj(m.e)
d=e.c
g=i*e.a+g
i=d.length
if(!(g>=0&&g<i))return A.a(d,g)
if(d[g]<=0){g=m.e
if(k.h(0,g)==null)k.j(0,g,A.b([],a7))
g=k.h(0,m.e)
g.toString
B.a.k(g,h)
if(!(f<i))return A.a(d,f)
d[f]=1}i=j.h(0,m.e).b=!0
if(q.h(0,h).c===B.c)continue
for(g=[B.k,B.m,B.o,B.n],c=0;c<4;++c){b=A.Z(h,g[c])
f=b.a
if(f>=0){d=b.b
f=d>=0&&f<p&&d<o}else f=!1
if(f?n.S(0,b):i)continue
B.a.k(r,b)}}m.bt()
a=A.b([],t.f)
a0=A.b([],t.o9)
for(a7=r.length,a8=t.e.i("K.T"),c=0;q=r.length,c<q;r.length===a7||(0,A.w)(r),++c){a1=r[c]
a2=new A.Q(6,2,-1,-1,a6)
q=B.aK.h(0,a8.a(400))
q.toString
a2.x=q
q=a1.a
a2.d=q*24
p=a1.b
a2.e=p*36
a3=new A.dk(new A.bP(B.bO,10),q,p)
q=a2.a=b0.gP()
p=q.d
p.$ti.c.a(a2);++p.d
p.az(0,a2)
q.a=!0
B.a.k(a,a2)
B.a.k(a0,a3)
a4=b0.ch
if(a4===$){a5=A.hc(m)
A.aK(a4,"lightingRenderer")
b0.ch=a5
a4=a5}B.a.k(a4.y,a3)}if(q===0){m.h_()
return new A.x(a6,a6,!0,!0,!1,B.d,a6,a6)}return new A.x(a6,a6,!0,!0,!1,A.b([new A.eY(n,r)],t.w),new A.aQ(B.fz,new A.mx(),new A.my(a,b0,a0)),a6)}}
A.mx.prototype={
$1(a){},
$S:2}
A.my.prototype={
$0(){var s=this.b,r=s.gP()
B.a.J(this.a,r.gbo(r))
B.a.J(this.c,B.a.gbo(s.ga5().y))},
$S:0}
A.i3.prototype={
D(a,b){var s,r=null,q=b.y2,p=q.e
q=q.d
if(!(q<p.length))return A.a(p,q)
s=p[q].d.h(0,this.a)
b.e.X("switch_toggle_1.mp3",s.b)
if(s.z==null){s.z=new A.bP(new A.e(4294278144),7)
s.y.sam(0,B.bM)
B.a.k(b.ga5().y,s)}else{B.a.A(b.ga5().y,s)
s.y.sam(0,B.bN)
s.z=null}return new A.x(r,r,!0,!0,!1,B.d,r,r)}}
A.fW.prototype={}
A.kg.prototype={
f1(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.e.a1(b,f,c)
s=A.oP(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
r=this.aj(a)
for(q=s.length,p=r.c,o=r.a,n=p.length,m=0;m<40;++m)for(l=m*100,k=m*o,j=0;j<100;++j){i=(l+j)*4
h=k+j
if(!(h<n))return A.a(p,h)
g=p[h]>0?0:255
if(!(i<q))return A.a(s,i)
s[i]=0
h=i+1
if(!(h<q))return A.a(s,h)
s[h]=0
h=i+2
if(!(h<q))return A.a(s,h)
s[h]=0
h=i+3
if(!(h<q))return A.a(s,h)
s[h]=g}B.e.aZ(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
bv(a,b){var s,r,q=a.b*100+a.a
if(q<0||q>=4000)return null
s=this.r
r=s.h(0,a)
if(r==null){r=new A.j8(b.createTexture())
s.j(0,a,r)}if(r.b){this.f1(a,b,r.a)
r.b=!1}return r.a},
aj(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.lB(p,p+4000,B.f.cB(s.byteLength,r))
return new A.m1(100,40,A.oP(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
h_(){var s,r,q,p,o,n,m,l,k,j,i
for(s=this.x,r=s.ga9(s),r=r.gC(r),q=t.j,p=this.r;r.p();){o=r.gt(r)
p.h(0,o).b=!0
for(n=s.h(0,o),m=n.length,l=0;l<n.length;n.length===m||(0,A.w)(n),++l){k=n[l]
j=this.aj(o).c
q.a(k)
i=k.b*100+k.a
if(!(i>=0&&i<j.length))return A.a(j,i)
j[i]=0}}},
bt(){var s,r,q,p,o=this.aj(this.e).c
for(s=o.length,r=this.c,q=0;q<4000;++q){p=r[q]
if(!(q<s))return A.a(o,q)
r[q]=p|(o[q]>0?1:0)}},
dG(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.bQ(new A.d(s,r))
for(q=this.r,q=q.gcq(q),q=q.gC(q);q.p();)q.gt(q).b=!0},
dM(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.nr.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.ax(0,r,q)
o=o.c===B.c||A.U(A.r6(o.f))?1:0
if(!(p<4000))return A.a(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.bQ(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.a(s,p)
if(s[p]>0)g.bQ(new A.d(m,l))}s=g.aj(b)
s.toString
for(p=g.r,p=p.gap(p),p=p.gC(p),o=t.j,k=s.c,s=s.a,j=k.length;p.p();){i=p.gt(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.a(k,h)
if(k[h]>0)i.b.b=!0}},
dL(a){return this.dM(a,null)},
bQ(a){var s,r,q,p=this.aj(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.a(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.a(o,r)
o[r]=0}if(!(s<p))return A.a(o,s)
o[s]=1
for(q=0;q<4;++q)this.fu(new A.dv(1,-1,1),new A.ly(B.fU[q],a),o)},
ft(a,b,c){if(a<0||a>=b.byteLength)return
if(!(a>=0&&a<b.length))return A.a(b,a)
b[a]=1},
cX(a,b){var s
if(a<0||a>=b.byteLength)return!0
s=this.b
if(!(a>=0&&a<4000))return A.a(s,a)
return s[a]===1},
bR(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.a(s,a)
return s[a]===0},
fu(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.y
B.a.sm(d,0)
B.a.k(d,a)
for(s=b.a;r=d.length,r!==0;){if(0>=r)return A.a(d,-1)
q=d.pop()
r=q.a
p=B.b.aE(r*q.b+0.5)
o=B.b.dq(r*q.c-0.5)
for(n=r+1,m=2*r,l=p,k=null;l<=o;++l,k=i){j=b.hM(0,new A.d(r,l))
i=j.b*100+j.a
h=e.cX(i,c)
if(!h)g=l>=r*q.b&&l<=r*q.c
else g=!0
if(g)e.ft(i,c,s)
g=k!=null
if(g&&e.cX(k,c)&&e.bR(i,c))q.b=(2*l-1)/m
if(g&&e.bR(k,c)&&h){f=new A.dv(n,q.b,q.c)
f.c=(2*l-1)/m
B.a.k(d,f)}}if(k!=null&&e.bR(k,c))B.a.k(d,new A.dv(n,q.b,q.c))}}}
A.j8.prototype={}
A.m1.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]>0},
ge4(a){var s=this
return A.o3(function(){var r=a
var q=0,p=2,o,n,m,l,k,j,i,h
return function $async$ge4(b,c){if(b===1){o=c
q=p}while(true)switch(q){case 0:n=s.a,m=s.b,l=s.c,k=l.length,j=0
case 3:if(!(j<n)){q=5
break}i=0
case 6:if(!(i<m)){q=8
break}h=i*n+j
if(!(h<k)){A.a(l,h)
q=1
break}q=l[h]===1?9:10
break
case 9:q=11
return new A.d(j,i)
case 11:case 10:case 7:++i
q=6
break
case 8:case 4:++j
q=3
break
case 5:case 1:return A.nS()
case 2:return A.nT(o)}}},t.j)}}
A.cr.prototype={
l(a){return"Cardinal."+this.b}}
A.ly.prototype={
hM(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a){case B.bp:s=r.b
return new A.d(s.a+p,s.b-q)
case B.bq:s=r.b
return new A.d(s.a+p,s.b+q)
case B.br:s=r.b
return new A.d(s.a+q,s.b+p)
case B.bs:s=r.b
return new A.d(s.a-q,s.b+p)}}}
A.dv.prototype={}
A.ar.prototype={
l(a){return this.a}}
A.ep.prototype={
Y(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=3553,a="u_player_visible_texture"
if(c.f==null){s=a0.createTexture()
c.f=s
B.e.a1(a0,b,s)
B.e.aZ(a0,b,0,6408,100,40,0,6408,5121,null)
a0.texParameteri(b,10241,9729)
a0.texParameteri(b,10242,33071)
a0.texParameteri(b,10243,33071)}B.e.aR(a0,36160,c.e)
B.e.ca(a0,36160,36064,b,c.f,0)
a0.clearColor(0,0,0,1)
a0.clear(16640)
a0.viewport(0,0,100,40)
s=c.d
r=s.bv(s.e,a0)
r.toString
a0.activeTexture(33985)
B.e.a1(a0,b,r)
for(q=c.y,p=q.length,o=c.b,n=t.t,m=t.n,l=t.N,k=t.z,j=0;j<q.length;q.length===p||(0,A.w)(q),++j){i=q[j]
h=i.gcc()
g=s.bv(new A.d(i.ga8(i),i.ga3(i)),a0)
if(g==null)continue
a0.activeTexture(33984)
B.e.a1(a0,b,g)
f=h.c
e=A.b([i.ga8(i),i.ga3(i)],n)
d=h.b.a
o.ak(a0,4,3,A.aA(["u_source_strength",f,"u_source_position",e,"u_source_color",A.b([(d>>>16&255)/255,(d>>>8&255)/255,(d&255)/255,0.2],m),"u_time",a1.c/1000,a,1,"u_visible_texture",0],l,k))}B.e.aR(a0,36160,c.z)
a0.viewport(0,0,a1.a,a1.b)
a0.activeTexture(33984)
B.e.a1(a0,b,c.f)
a0.activeTexture(33985)
B.e.a1(a0,b,c.r)
a0.activeTexture(33986)
B.e.a1(a0,b,r)
c.c.ak(a0,4,3,A.aA(["u_light_texture",0,"u_game_world_texture",1,a,2,"u_block_size",B.fT,"u_resolution",A.b([a1.a,a1.b],n),"u_offset",A.b([a1.d,a1.e],m)],l,k))}}
A.bS.prototype={
gaV(){var s=this.b
s=s==null?null:s.gaV()
return 1+(s==null?0:s)},
a2(a,b){return B.b.a2(this.f,t.p6.a(b).f)},
gd7(){var s,r=this.a
if(r==null)r=this
else{s=r.a
r=s==null?r:s.gd7()}return r},
f7(){var s,r,q
for(s=this,r=null;s!=null;r=s,s=q){s.b=r
q=s.a}},
hK(a){var s,r=A.b([],t.q)
for(s=this;s!=null;){B.a.k(r,s.d)
s=s.b}return r},
l(a){var s,r,q,p
for(s=this.d,r=this,q="",p="";r!=null;q=", "){p=p+q+s.l(0)
r=r.b}return p.charCodeAt(0)==0?p:p},
$iaq:1}
A.bd.prototype={
l(a){return"Directions."+this.b}}
A.lr.prototype={
dA(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.a,e=a1.a,d=a0.b,c=a1.b,b=Math.max(Math.abs(f-e),Math.abs(d-c)),a=new A.bS(null,a0,0,b*1.02+0)
for(s=(b-1)*1.02+1,r=a2.d,q=t.W,p=r.a,o=r.b,n=a0,m=a,l=1;l<=b;++l,n=h,m=g){k=l/b
j=1-k
i=B.b.B(e*k+f*j)
j=B.b.B(c*k+d*j)
h=new A.d(i,j)
if(!(i>=0&&j>=0&&i<p&&j<o))return null
if(A.js(q.a(r.h(0,h)),a2,a3)&&l!==b)return null
g=new A.bS(A.py(i-n.a,j-n.b),h,1,s)
g.a=m
m.b=g}return a},
h9(a,b,c){return this.dA(a,b,c,B.a4)},
aD(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=A.oB(b,t.p6),a0=A.ac(t.j,t.R),a1=a4.d
a.k(0,new A.bS(b,a2,0,a2.au(a3)*1.02+0))
for(s=a.$ti.c,r=a1.a,q=a1.b,p=t.W;o=a.c,n=o===0,!n;){if(n)A.W(A.am("No element"));++a.d
n=a.b
m=n.length
if(0>=m)return A.a(n,0)
l=n[0]
if(l==null)l=s.a(null)
k=o-1
if(!(k>=0&&k<m))return A.a(n,k)
j=n[k]
if(j==null)j=s.a(null)
B.a.j(n,k,b)
a.c=k
if(k>0)a.cH(j,0)
o=l.d
i=a0.h(0,o)
if(i!=null&&i<l.e)continue
for(n=l.e,h=0;h<8;++h){g=B.b1[h]
f=A.Z(o,g)
m=f.a
if(m>=0){e=f.b
m=e>=0&&m<r&&e<q}else m=!1
if(m){m=l.a
if(!J.a_(m==null?b:m.d,f))m=A.js(p.a(a1.h(0,f)),a4,a5)&&!f.n(0,a3)
else m=!0}else m=!0
if(m)continue
m=f.au(a3)
e=this.fi(g)
if(typeof e!=="number")return A.cZ(e)
e=n+e
d=new A.bS(g,f,e,m*1.02+e)
d.a=l
if(f.n(0,a3)){d.f7()
s=l.a
return s==null?l:s.gd7()}c=a0.h(0,f)
if(!(e>1/0))m=c!=null&&e>=c
else m=!0
if(m)continue
a0.j(0,f,e)
s.a(d);++a.d
a.az(0,d)}}return b},
dC(a,b,c){return this.aD(a,b,c,B.a4)},
fi(a){switch(a){case B.m:case B.o:case B.n:case B.k:return 1
case B.R:case B.Q:case B.S:case B.T:return 1.4}}}
A.ef.prototype={}
A.hy.prototype={}
A.kh.prototype={
aW(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
t.j.a(a)
s=c.d
if(!s.bk(a))return!1
r=j.b
q=r==null
p=q?i:r.f
if(p==null)p=B.a4
o=q&&i
n=q?i:r.x
if(n==null)n=B.b6
m=q?i:r.r
j.c=m!==!1
if(o!==!1&&s.h(0,a).c===B.c){j.d=new A.ef(A.b([],t.m7),a,b,!1)
s=j.a
if(s!=null)s.$0()
return!1}l=n===B.b6?$.bF().aD(b,a,c,p):$.bF().dA(b,a,c,p)
if(l==null){j.d=new A.ef(A.b([],t.m7),a,b,!1)
return!1}if(!q)k=!(l.gaV()<r.a||l.gaV()>r.b)||!1
else k=!0
j.d=A.r0(l,a,b,k)
s=j.a
if(s!=null)s.$0()
return!0},
ar(){var s=this
s.scI(null)
s.d=null
s.c=!0
s.b=null},
scI(a){this.a=t.Z.a(a)}}
A.fM.prototype={
cm(a){B.ap.aC(this.a,0,4000,0)
this.b.bg(0)},
dB(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=b.b*100+b.a
if(!(f>=0&&f<4000))return A.a(g,f)
s=g[f]*c
r=A.b([],t.q)
for(f=a.d,q=t.W,p=f.a,o=f.b,n=!1,m=0;m<8;++m){l=A.Z(b,B.b1[m])
k=l.a
if(k>=0){j=l.b
j=j>=0&&k<p&&j<o}else j=!1
if(!j)continue
i=l.b*100+k
if(A.js(q.a(f.h(0,l)),a,d))continue
if(!(i>=0&&i<4000))return A.a(g,i)
h=g[i]*c
if(h>s){B.a.sm(r,0)
B.a.k(r,l)
s=h
n=!0}else if(h===s)B.a.k(r,l)}g=r.length
if(g===0||!n)return null
g=$.pU().R(g)
if(!(g>=0&&g<r.length))return A.a(r,g)
return r[g]},
ha(a,b,c){return this.dB(a,b,c,B.a4)},
hx(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=this.b,s=s.gap(s),s=s.gC(s),r=this.a;s.p();){q=s.gt(s)
p=q.a
B.ap.j(r,p.b*100+p.a,q.b)}s=a2.d
q=s.a
p=s.b
s=s.c
o=t.W
do for(n=!1,m=0;m<100;m=l)for(l=m+1,k=m-1,j=0;j<40;++j){i=j*100+m
if(!(i<s.length))return A.a(s,i)
if(A.js(o.a(s[i]),a2,a3))continue
if(!(i<4000))return A.a(r,i)
h=r[i]
for(g=[new A.d(m,j+1),new A.d(m,j-1),new A.d(l,j),new A.d(k,j)],f=-1,e=0,d=0;d<4;++d){c=g[d]
b=c.a
if(b>=0){a=c.b
a=a>=0&&b<q&&a<p}else a=!1
if(!a)continue
a0=c.b*100+b
if(!(a0>=0&&a0<4000))return A.a(r,a0)
a1=r[a0]
if(a1>e){e=a1
f=a0}}if(f!==-1&&e>h+1){r[i]=e-1
n=!0}}while(n)},
hy(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
for(s=this.b,r=s.gap(s),r=r.gC(r),q=this.a;r.p();){p=r.gt(r)
o=p.a
B.ap.j(q,o.b*100+o.a,p.b)}s=s.ga9(s)
n=s.gby(s)
s=n.a
r=n.b
m=A.b([new A.d(s,r-1),new A.d(s,r+1),new A.d(s+1,r),new A.d(s-1,r)],t.q)
r=t.aE.a(new A.k6(a4))
if(!!m.fixed$length)A.W(A.B("removeWhere"))
B.a.aP(m,r,!0)
l=A.nI([n],t.j)
for(s=a4.d,r=s.a,p=s.b,o=t.W;m.length!==0;){n=B.a.bp(m,0)
k=n.a
j=n.b
i=j-1
h=j+1
g=k+1
f=k-1
e=[new A.d(k,i),new A.d(k,h),new A.d(g,j),new A.d(f,j),new A.d(f,i),new A.d(g,i),new A.d(g,h),new A.d(f,h)]
for(d=0,c=!1,b=0;b<8;++b){a=e[b]
i=a.a
if(i>=0){h=a.b
h=h>=0&&i<r&&h<p}else h=!1
if(!h||A.js(o.a(s.h(0,a)),a4,a5)){l.k(0,a)
continue}a0=a.b*100+i
if(!(a0>=0&&a0<4000))return A.a(q,a0)
a1=q[a0]
if(a1>d){d=a1
c=!0}}a2=j*100+k
if(!(a2>=0&&a2<4000))return A.a(q,a2)
a3=q[a2]
if(c&&d>a3+1){q[a2]=d-1
for(b=0;b<8;++b){a=e[b]
if(!l.S(0,a)){l.k(0,a)
B.a.k(m,a)}}}}}}
A.k6.prototype={
$1(a){return!this.a.d.bk(t.j.a(a))},
$S:12}
A.hK.prototype={
fN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="a_position"
if(h.e===a)return
h.e=a
if(h.b.c){s=h.d
r=a.a
q=A.c8(s.a6(g,t.B).buffer,0,(r.length+1)*2)
p=a.c
o=q.length
if(0>=o)return A.a(q,0)
q[0]=p.a*24+12
if(1>=o)return A.a(q,1)
q[1]=p.b*36+18
for(p=r.length,n=2,m=0;m<p;++m){l=r[m].b
if(!(n<o))return A.a(q,n)
q[n]=l.a*24+12
k=n+1
if(!(k<o))return A.a(q,k)
q[k]=l.b*36+18
n+=2}s.aa(b,g,q)}s=h.c
j=s.a6(g,t.B)
i=a.b
r=i.a*24
p=j.length
if(0>=p)return A.a(j,0)
j[0]=r
o=i.b*36
if(1>=p)return A.a(j,1)
j[1]=o
l=r+24
if(2>=p)return A.a(j,2)
j[2]=l
if(3>=p)return A.a(j,3)
j[3]=o
if(4>=p)return A.a(j,4)
j[4]=r
k=o+36
if(5>=p)return A.a(j,5)
j[5]=k
if(6>=p)return A.a(j,6)
j[6]=l
if(7>=p)return A.a(j,7)
j[7]=k
if(8>=p)return A.a(j,8)
j[8]=l
if(9>=p)return A.a(j,9)
j[9]=o
if(10>=p)return A.a(j,10)
j[10]=r
if(11>=p)return A.a(j,11)
j[11]=k
s.aa(b,g,j)},
Y(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.b,h=i.d
if(h==null)return
j.fN(h,a)
s=t.t
r=A.b([b.a,b.b],s)
q=t.n
p=A.b([b.d,b.e],q)
o=b.c
n=h.d
m=n?1:0
l=t.N
k=t.z
j.c.ak(a,4,6,A.aA(["u_resolution",r,"u_offset",p,"u_time",o/1000,"u_valid",m],l,k))
if(i.c&&n){i=h.a.length
s=A.b([b.a,b.b],s)
q=A.b([b.d,b.e],q)
r=b.c
p=n?1:0
j.d.ak(a,3,i+1,A.aA(["u_resolution",s,"u_offset",q,"u_time",r/1000,"u_valid",p],l,k))}}}
A.Y.prototype={}
A.u.prototype={}
A.cO.prototype={
l(a){return"UniformKind."+this.b}}
A.io.prototype={}
A.jd.prototype={}
A.kO.prototype={
a4(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.pl(a,i.a,35633),f=A.pl(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.a_(a.getProgramParameter(e,35714),!0)){A.fm(a.getProgramInfoLog(e))
A.W(A.am("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.e.dm(a,A.dQ(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.w)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.jd(a.getUniformLocation(A.dQ(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.w)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.dQ(i.e,h),n)
k=a.createBuffer()
B.e.dk(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.io(k,j))}},
a6(a,b){A.tS(b,t.jv,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
aa(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.c(A.am("WARNING, NO ATTRIBUTE "+b))
B.e.dk(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
ak(a,b,c,d){var s,r,q,p,o,n
t.ea.a(d)
B.e.hT(a,A.dQ(this.e,"_program"))
B.e.dm(a,A.dQ(this.f,"_vertexArrayObject"))
for(s=d.gap(d),s=s.gC(s),r=this.r;s.p();){q=s.gt(s)
p=q.a
o=q.b
A.a6(p)
n=r.h(0,p)
if(n==null)A.W(A.am("WARNING, NO UNIFORM "+p))
switch(n.b.b){case B.B:B.e.hO(a,n.a,A.bm(o))
break
case B.h:q=J.aN(o)
B.e.hQ(a,n.a,A.bm(q.h(o,0)),A.bm(q.h(o,1)))
break
case B.hK:q=J.aN(o)
B.e.hR(a,n.a,A.bm(q.h(o,0)),A.bm(q.h(o,1)),A.bm(q.h(o,2)))
break
case B.b9:q=J.aN(o)
B.e.hS(a,n.a,A.bm(q.h(o,0)),A.bm(q.h(o,1)),A.bm(q.h(o,2)),A.bm(q.h(o,3)))
break
case B.t:B.e.hP(a,n.a,A.N(o))
break}}a.drawArrays(b,0,c)}}
A.lC.prototype={
sho(a){A.nZ(a)}}
A.aD.prototype={}
A.d7.prototype={}
A.jH.prototype={}
A.ln.prototype={
dS(a,b){},
aF(a){}}
A.hq.prototype={
aF(a){},
$id7:1}
A.hN.prototype={
bl(){var s=0,r=A.aL(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bl=A.aM(function(a,b){if(a===1)return A.aH(b,r)
while(true)switch(s){case 0:e=A.b([],t.iw)
for(p=q.b,o=t.cU,n=t.ou,m=t.oV,l=t.Z,k=t.fq,j=0;j<53;++j){i=p[j]
h=new XMLHttpRequest()
g=new A.I($.F,o)
B.fC.ht(h,"get","sounds/"+i)
h.responseType="arraybuffer"
f=m.a(new A.lG(q,h,i,new A.aj(g,n)))
l.a(null)
A.eV(h,"readystatechange",f,!1,k)
h.send()
B.a.k(e,g)}s=2
return A.a4(A.r2(e,t.H),$async$bl)
case 2:return A.aI(null,r)}})
return A.aJ($async$bl,r)},
bn(a,b,c){var s,r,q,p,o=this.c,n=A.oA(o),m=this.a.h(0,a)
if(m==null)return new A.ln()
s=o.createBufferSource()
r=B.u.K()
q=n.gain
q.toString
B.bk.se3(q,0.1*c+r/20)
o=o.destination
o.toString
B.by.b6(n,o,0,0)
p=a==="cut_attack_1.mp3"?0.5:0
B.a0.b6(s,n,0,0)
B.a0.sdn(s,m)
B.a0.em(s,p)
return new A.l_(s)},
X(a,b){return this.bn(a,b,2)},
hC(a){var s,r,q,p,o,n
A.a6(a)
s=this.c
r=A.oA(s)
q=this.a.h(0,a)
if(q==null){A.fm("no name")
return new A.hq()}p=s.createBufferSource()
o=B.u.K()
n=r.gain
n.toString
B.bk.se3(n,0.2+o/20)
s=s.destination
s.toString
B.by.b6(r,s,0,0)
B.a0.b6(p,r,0,0)
B.a0.sdn(p,q)
B.a0.shl(p,!0)
p.start()
return new A.h7(p)},
$irv:1}
A.lG.prototype={
$1(a){var s=0,r=A.aL(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.aM(function(b,c){if(b===1)return A.aH(c,r)
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
return A.a4(B.dA.h3(n.c,t.lo.a(A.t8(m.response))),$async$$1)
case 7:l.j(0,k,c)
p.aS(0)
s=5
break
case 6:p.bh(new A.iz("Failed to load "+o))
case 5:case 3:return A.aI(null,r)}})
return A.aJ($async$$1,r)},
$S:84}
A.l_.prototype={
dS(a,b){},
aF(a){this.a.stop()}}
A.h7.prototype={
aF(a){this.a.stop()}}
A.n1.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.e.a1(q,r,p)
B.e.e_(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.ag(0,p)},
$S:10}
A.eI.prototype={
ey(a,b){A.uf(a,"CursesTransparent_24x36.png").co(new A.lH(this),t.P)},
k(a,b){t.r.a(b)
b.a=this
this.d.k(0,b)
this.a=!0},
A(a,b){t.r.a(b)
this.d.A(0,b)
b.a=null
this.a=!0},
bg(a){var s,r,q,p
for(s=this.d,r=s.$ti,q=new A.cT(s,s.d,r.i("cT<1>")),r=r.c;q.p();){if(q.d<0)p=A.W(A.am("No element"))
else{p=q.c
if(p==null)p=r.a(null)}p.a=null}++s.d
s.sbZ(B.fX)
s.c=0
this.a=!0},
fD(c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9="a_position",c0="a_texcoord",c1="a_bg_color",c2=b8.d,c3=c2.c
if(c3>1e4){A.fm("WARNING: TOO MANY SPRITES "+c3)
if(b8.f)b8.f=!1
c3=1e4}s=b8.b
r=t.jv
q=c3*12
p=A.c8(s.a6(b9,r).buffer,0,q)
o=A.c8(s.a6(c0,r).buffer,0,q)
q=c3*24
n=A.c8(s.a6("a_color",r).buffer,0,q)
m=A.c8(s.a6(c1,r).buffer,0,q)
l=c2.fL()
B.a.b0(l,c2.a)
for(c2=m.length,r=n.length,q=p.length,k=o.length,j=0;j<c3;++j){if(!(j<l.length))return A.a(l,j)
i=l[j]
h=i.b/16
g=i.c/16
f=j*12
if(!(f<k))return A.a(o,f)
o[f]=h
e=f+1
if(!(e<k))return A.a(o,e)
o[e]=g
d=f+2
c=h+0.0625
if(!(d<k))return A.a(o,d)
o[d]=c
b=f+3
if(!(b<k))return A.a(o,b)
o[b]=g
a=f+4
if(!(a<k))return A.a(o,a)
o[a]=h
a0=f+5
a1=g+0.0625
if(!(a0<k))return A.a(o,a0)
o[a0]=a1
a2=f+6
if(!(a2<k))return A.a(o,a2)
o[a2]=c
a3=f+7
if(!(a3<k))return A.a(o,a3)
o[a3]=a1
a4=f+8
if(!(a4<k))return A.a(o,a4)
o[a4]=c
c=f+9
if(!(c<k))return A.a(o,c)
o[c]=g
a5=f+10
if(!(a5<k))return A.a(o,a5)
o[a5]=h
a6=f+11
if(!(a6<k))return A.a(o,a6)
o[a6]=a1
a7=i.d
a8=i.e
a9=i.f
if(a9===1){if(!(f<q))return A.a(p,f)
p[f]=a7
if(!(e<q))return A.a(p,e)
p[e]=a8
e=a7+24
if(!(d<q))return A.a(p,d)
p[d]=e
if(!(b<q))return A.a(p,b)
p[b]=a8
if(!(a<q))return A.a(p,a)
p[a]=a7
a=a8+36
if(!(a0<q))return A.a(p,a0)
p[a0]=a
if(!(a2<q))return A.a(p,a2)
p[a2]=e
if(!(a3<q))return A.a(p,a3)
p[a3]=a
if(!(a4<q))return A.a(p,a4)
p[a4]=e
if(!(c<q))return A.a(p,c)
p[c]=a8
if(!(a5<q))return A.a(p,a5)
p[a5]=a7
if(!(a6<q))return A.a(p,a6)
p[a6]=a}else{b0=B.b.ai(12*a9)
b1=B.b.ai(18*a9)
b2=a7+12-b0
b3=a8+18-b1
if(!(f<q))return A.a(p,f)
p[f]=b2
if(!(e<q))return A.a(p,e)
p[e]=b3
e=b2+b0*2
if(!(d<q))return A.a(p,d)
p[d]=e
if(!(b<q))return A.a(p,b)
p[b]=b3
if(!(a<q))return A.a(p,a)
p[a]=b2
a=b3+b1*2
if(!(a0<q))return A.a(p,a0)
p[a0]=a
if(!(a2<q))return A.a(p,a2)
p[a2]=e
if(!(a3<q))return A.a(p,a3)
p[a3]=a
if(!(a4<q))return A.a(p,a4)
p[a4]=e
if(!(c<q))return A.a(p,c)
p[c]=b3
if(!(a5<q))return A.a(p,a5)
p[a5]=b2
if(!(a6<q))return A.a(p,a6)
p[a6]=a}b4=j*24
b5=i.x
b6=i.r
if(b5==null)B.aL.aC(n,b4,b4+24,0)
else for(e=b5.a,d=(e>>>16&255)/255,c=(e>>>8&255)/255,b=(e&255)/255,e=(e>>>24&255)/255,b7=0;b7<24;b7+=4){a=b4+b7
if(!(a<r))return A.a(n,a)
n[a]=d
a0=a+1
if(!(a0<r))return A.a(n,a0)
n[a0]=c
a0=a+2
if(!(a0<r))return A.a(n,a0)
n[a0]=b
a+=3
if(!(a<r))return A.a(n,a)
n[a]=e}if(b6==null)B.aL.aC(m,b4,b4+24,0)
else for(e=b6.a,d=(e>>>16&255)/255,c=(e>>>8&255)/255,b=(e&255)/255,e=(e>>>24&255)/255,b7=0;b7<24;b7+=4){a=b4+b7
if(!(a<c2))return A.a(m,a)
m[a]=d
a0=a+1
if(!(a0<c2))return A.a(m,a0)
m[a0]=c
a0=a+2
if(!(a0<c2))return A.a(m,a0)
m[a0]=b
a+=3
if(!(a<c2))return A.a(m,a)
m[a]=e}}s.aa(c4,b9,p)
s.aa(c4,c0,o)
s.aa(c4,"a_color",n)
s.aa(c4,c1,m)},
Y(a,b){var s,r=this
if(r.c==null||r.d.c===0)return
if(r.a){r.fD(a)
r.a=!1}s=r.e
s.bv(s.e,a)
a.activeTexture(33984)
B.e.a1(a,3553,r.c)
r.b.ak(a,4,r.d.c*6,A.aA(["u_texture",0,"u_resolution",A.b([b.a,b.b],t.t),"u_offset",A.b([b.d,b.e],t.n)],t.N,t.z))}}
A.lH.prototype={
$1(a){this.a.c=t.lJ.a(a)},
$S:19}
A.Q.prototype={
sb3(a){var s=this.a
if(s!=null)s.a=!0
this.b=a},
sb4(a){var s=this.a
if(s!=null)s.a=!0
this.c=a},
sa8(a,b){var s=this.a
if(s!=null)s.a=!0
this.d=b},
sa3(a,b){var s=this.a
if(s!=null)s.a=!0
this.e=b},
sb_(a,b){var s=this.a
if(s!=null)s.a=!0
this.f=b},
sV(a){var s=this.a
if(s!=null)s.a=!0
this.d=a*24},
sW(a){var s=this.a
if(s!=null)s.a=!0
this.e=a*36},
saA(a,b){var s
this.r=b
s=this.a
if(s!=null)s.a=!0},
sam(a,b){var s=this.a
if(s!=null)s.a=!0
this.x=b},
sat(a,b){var s
this.y=b
s=this.a
if(s!=null)s.a=!0},
l(a){return"Sprite("+this.b+", "+this.c+")"}}
A.j.prototype={}
A.lg.prototype={}
A.hZ.prototype={
fG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(this.c==null)return
s=this.b
r=s.a6("a_color",t.B)
q=this.c
switch(q.e.a){case B.J:case B.x:case B.a2:case B.a1:p=$.pV()
break
case B.r:p=$.o8()
break
case B.y:p=$.pX()
break
case B.D:p=$.pW()
break
default:p=null}for(o=r.length,q=q.d.c,n=q.length,m=0;m<40;++m)for(l=m<39,k=m*100,j=0;j<100;++j){i=k+j
h=i*48
if(!(i<n))return A.a(q,i)
if(q[i].c!==B.c)for(g=0;g<48;g+=4){f=g+h
e=p.c.a
if(!(f<o))return A.a(r,f)
r[f]=(e>>>16&255)/255
d=f+1
if(!(d<o))return A.a(r,d)
r[d]=(e>>>8&255)/255
d=f+2
if(!(d<o))return A.a(r,d)
r[d]=(e&255)/255
f+=3
if(!(f<o))return A.a(r,f)
r[f]=1}else{if(l){f=i+100
if(!(f<n))return A.a(q,f)
f=q[f]
f=!(f.c===B.c||A.U(A.be(f.f)))}else f=!1
if(f){for(g=0;g<24;g+=4){f=g+h
e=p.b.a
if(!(f<o))return A.a(r,f)
r[f]=(e>>>16&255)/255
d=f+1
if(!(d<o))return A.a(r,d)
r[d]=(e>>>8&255)/255
d=f+2
if(!(d<o))return A.a(r,d)
r[d]=(e&255)/255
f+=3
if(!(f<o))return A.a(r,f)
r[f]=1}for(g=24;g<48;g+=4){f=g+h
e=p.a.a
if(!(f<o))return A.a(r,f)
r[f]=(e>>>16&255)/255
d=f+1
if(!(d<o))return A.a(r,d)
r[d]=(e>>>8&255)/255
d=f+2
if(!(d<o))return A.a(r,d)
r[d]=(e&255)/255
f+=3
if(!(f<o))return A.a(r,f)
r[f]=1}}else for(g=0;g<48;g+=4){f=g+h
e=p.b.a
if(!(f<o))return A.a(r,f)
r[f]=(e>>>16&255)/255
d=f+1
if(!(d<o))return A.a(r,d)
r[d]=(e>>>8&255)/255
d=f+2
if(!(d<o))return A.a(r,d)
r[d]=(e&255)/255
f+=3
if(!(f<o))return A.a(r,f)
r[f]=1}}}s.aa(a,"a_color",r)},
Y(a,b){var s=this
if(s.d){s.fG(a)
s.d=!1}if(s.c==null)return
s.b.ak(a,4,48e3,A.aA(["u_resolution",A.b([b.a,b.b],t.t),"u_offset",A.b([b.d,b.e],t.n)],t.N,t.z))}}
A.i_.prototype={
fT(a){var s,r,q,p,o,n,m,l,k,j=A.b([],t.f),i=a.a
i=(i.length===0?B.as:new A.bT(i)).a
s=new A.dz(i,0,0)
r=this.b
q=r.d
p=q.$ti.c
o=a.c
n=a.b
for(;s.bC(1,s.c);){m=s.d
l=$.t7.h(0,m==null?s.d=B.i.b2(i,s.b,s.c):m)
if(l==null)l=B.hy
k=new A.Q(l.a,l.b,-1,-1,null)
k.x=n
k.f=o
k.a=r
p.a(k);++q.d
q.az(0,k)
r.a=!0
B.a.k(j,k)}a.r=this
i=new A.mD(j)
i.w(a.d,a.e)
a.f=i
B.a.k(this.c,a)}}
A.hF.prototype={}
A.mD.prototype={
w(a,b){var s,r,q,p,o,n,m
for(s=this.a,r=s.length,q=0,p=0;p<r;++p){o=s[p]
n=o.a
m=n==null
if(!m)n.a=!0
o.d=a+q
if(!m)n.a=!0
o.e=b
q+=24}}}
A.n0.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.e.a1(q,r,p)
B.e.e_(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.ag(0,p)},
$S:10}
A.i6.prototype={
ez(a){A.ue(a,"CursesTransparent_24x36.png").co(new A.m_(this),t.P)},
fO(c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7="a_position",b8="a_texcoord",b9="a_bg_color",c0=b6.d,c1=c0.length
if(c1>1e4){A.fm("WARNING: TOO MANY SPRITES "+c1)
if(b6.r)b6.r=!1
c1=1e4}s=b6.e
r=t.jv
q=c1*12
p=A.c8(s.a6(b7,r).buffer,0,q)
o=A.c8(s.a6(b8,r).buffer,0,q)
q=c1*24
n=A.c8(s.a6("a_color",r).buffer,0,q)
m=A.c8(s.a6(b9,r).buffer,0,q)
for(r=m.length,q=n.length,l=o.length,k=p.length,j=0;j<c1;++j){if(!(j<c0.length))return A.a(c0,j)
i=c0[j]
h=i.b/16
g=i.c/16
f=j*12
if(!(f<l))return A.a(o,f)
o[f]=h
e=f+1
if(!(e<l))return A.a(o,e)
o[e]=g
d=f+2
c=h+0.0625
if(!(d<l))return A.a(o,d)
o[d]=c
b=f+3
if(!(b<l))return A.a(o,b)
o[b]=g
a=f+4
if(!(a<l))return A.a(o,a)
o[a]=h
a0=f+5
a1=g+0.0625
if(!(a0<l))return A.a(o,a0)
o[a0]=a1
a2=f+6
if(!(a2<l))return A.a(o,a2)
o[a2]=c
a3=f+7
if(!(a3<l))return A.a(o,a3)
o[a3]=a1
a4=f+8
if(!(a4<l))return A.a(o,a4)
o[a4]=c
c=f+9
if(!(c<l))return A.a(o,c)
o[c]=g
a5=f+10
if(!(a5<l))return A.a(o,a5)
o[a5]=h
a6=f+11
if(!(a6<l))return A.a(o,a6)
o[a6]=a1
a7=B.b.ai(i.d)
a8=B.b.ai(i.e)
a9=i.f
b0=B.b.ai(15.84*a9)
b1=B.b.ai(23.76*a9)
if(!(f<k))return A.a(p,f)
p[f]=a7
if(!(e<k))return A.a(p,e)
p[e]=a8
e=a7+b0
if(!(d<k))return A.a(p,d)
p[d]=e
if(!(b<k))return A.a(p,b)
p[b]=a8
if(!(a<k))return A.a(p,a)
p[a]=a7
a=a8+b1
if(!(a0<k))return A.a(p,a0)
p[a0]=a
if(!(a2<k))return A.a(p,a2)
p[a2]=e
if(!(a3<k))return A.a(p,a3)
p[a3]=a
if(!(a4<k))return A.a(p,a4)
p[a4]=e
if(!(c<k))return A.a(p,c)
p[c]=a8
if(!(a5<k))return A.a(p,a5)
p[a5]=a7
if(!(a6<k))return A.a(p,a6)
p[a6]=a
b2=j*24
b3=i.x
b4=i.r
if(b3==null)B.aL.aC(n,b2,b2+24,0)
else for(e=b3.a,d=(e>>>16&255)/255,c=(e>>>8&255)/255,b=(e&255)/255,e=(e>>>24&255)/255,b5=0;b5<24;b5+=4){a=b2+b5
if(!(a<q))return A.a(n,a)
n[a]=d
a0=a+1
if(!(a0<q))return A.a(n,a0)
n[a0]=c
a0=a+2
if(!(a0<q))return A.a(n,a0)
n[a0]=b
a+=3
if(!(a<q))return A.a(n,a)
n[a]=e}if(b4==null)B.aL.aC(m,b2,b2+24,0)
else for(e=b4.a,d=(e>>>16&255)/255,c=(e>>>8&255)/255,b=(e&255)/255,e=(e>>>24&255)/255,b5=0;b5<24;b5+=4){a=b2+b5
if(!(a<r))return A.a(m,a)
m[a]=d
a0=a+1
if(!(a0<r))return A.a(m,a0)
m[a0]=c
a0=a+2
if(!(a0<r))return A.a(m,a0)
m[a0]=b
a+=3
if(!(a<r))return A.a(m,a)
m[a]=e}}s.aa(c2,b7,p)
s.aa(c2,b8,o)
s.aa(c2,"a_color",n)
s.aa(c2,b9,m)},
Y(a,b){var s,r,q=this
if(q.f==null)return
s=q.c
s.sfU(q.b)
s.sei(b.b)
s.sej(b.a)
r=q.b
if(r==null)r=null
else{r=r.c
r=new A.fZ(r.b,r.a)}s.f.shi(r)
s.r.sel(0,q.b!=null)
if(s.b){r=b.b
s.w(B.l,new A.bs(0,0,b.a,r))
r=q.d
B.a.sm(r,0)
B.a.M(r,s.E())
s.cY()
q.a=!0}if(q.a){q.fO(a)
q.a=!1}a.activeTexture(33984)
B.e.a1(a,3553,q.f)
q.e.ak(a,4,q.d.length*6,A.aA(["u_texture",0,"u_resolution",A.b([b.a,b.b],t.t)],t.N,t.z))},
$irc:1}
A.m_.prototype={
$1(a){this.a.f=t.lJ.a(a)},
$S:19}
A.aC.prototype={
n(a,b){if(b==null)return!1
return b instanceof A.aC&&b.a.n(0,this.a)&&b.b===this.b&&b.c===this.c},
gF(a){return A.cK(this.a,this.b,this.c,B.H)},
l(a){var s=this.a
return"Rect("+A.G(s.a)+", "+A.G(s.b)+", "+this.b+", "+this.c+")"}}
A.a7.prototype={
a0(a){var s=a==null?[]:a,r=s.length,q=0
for(;q<s.length;s.length===r||(0,A.w)(s),++q)s[q].sfl(this)},
hA(){var s,r,q
for(s=this.c,r=s.length,q=0;q<r;++q)s[q].a=null
B.a.sm(s,0)
this.I()},
G(a){B.a.k(this.c,a)
a.a=this
this.I()},
N(a){if(a==null)return
B.a.A(this.c,a)
a.a=null
this.I()},
ah(a){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q)if(s[q].ah(a))return!0
return!1},
I(){this.b=!0
var s=this.a
if(s!=null)s.I()},
cY(){var s,r,q
this.b=!1
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q)s[q].cY()},
sfl(a){this.a=t.mV.a(a)}}
A.b8.prototype={
fX(a,b){var s,r,q=this
q.r=q.r+b.r
s=q.f
if(s!=null){r=b.f
r.toString
q.sds(B.a.v(s,r))}},
sbq(a,b){this.r=b
this.I()},
shJ(a){if(a===this.x)return
this.x=a
this.I()},
w(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.d=a
j.I()
if(b.n(0,j.z)&&j.r===j.Q)return j.ch
s=j.y
B.a.sm(s,0)
r=b.c
if(r==null)r=1/0
q=t.t
p=0
o=0
while(!0){n=j.r
n=n.length===0?B.as:new A.bT(n)
if(!(p<n.gm(n)))break
m=p
l=0
while(!0){if(l<r){n=j.r
n=n.length===0?B.as:new A.bT(n)
n=m<n.gm(n)}else n=!1
if(!n)break
if(B.i.aB(j.r,m)===10){++m
break}l+=15.84*j.x;++m}k=m
while(!0){n=j.r
n=n.length===0?B.as:new A.bT(n)
if(k<n.gm(n))if(k>0){n=B.i.aB(j.r,k-1)
n=!(n===10||n===32||n===9)&&k>p}else n=!1
else n=!1
if(!n)break;--k
l-=15.84*j.x}m=k===p?m:k
if(l>o)o=l
B.a.k(s,A.b([p,m],q))
p=m}j.z=b
j.Q=j.r
return j.ch=new A.aC(a,B.b.B(o),B.b.B(s.length*23.76*j.x))},
E(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=A.b([],t.f)
for(s=c.y,r=s.length,q=t.n8,p=0,o=0,n=0;n<s.length;s.length===r||(0,A.w)(s),++n){m=s[n]
l=c.r
k=m.length
if(0>=k)return A.a(m,0)
j=m[0]
if(1>=k)return A.a(m,1)
j=B.i.hN(B.i.b2(l,j,m[1]))
l=(j.length===0?B.as:new A.bT(j)).a
k=new A.dz(l,0,0)
j=p*23.76
i=p*4
h=0
for(;k.bC(1,k.c);){g=k.d
f=$.t6.h(0,g==null?k.d=B.i.b2(l,k.b,k.c):g)
if(f==null)f=B.hC
f=new A.Q(f.a,f.b,-1,-1,null)
e=c.f
if(e==null)e=B.z
else{if(!(o>=0&&o<e.length))return A.a(e,o)
e=e[o]}q.a(e)
f.x=e
f.r=c.e
e=c.x
f.f=e
d=c.d
f.d=d.a+h*15.84*e
f.e=d.b+j*e+i
B.a.k(b,f);++h;++o}++p}return b},
sds(a){this.f=t.jw.a(a)}}
A.fF.prototype={
E(){var s,r,q,p=A.b([],t.f)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q)B.a.M(p,s[q].E())
return p},
w(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.d=a
j.I()
if(j.e){s=b.d
s.toString
for(r=j.c,q=a.a,p=a.b,o=s,n=0,m=0;m<r.length;++m){l=r[m]
k=l.w(new A.M(q,p),b)
n=Math.max(k.b,n)
o-=k.c
l.w(new A.M(q,p+o),b)}o=s}else for(s=j.c,r=a.a,q=a.b,n=0,o=0,m=0;m<s.length;++m){k=s[m].w(new A.M(r,q+o),b)
n=Math.max(k.b,n)
o+=k.c}return new A.aC(a,n,o)}}
A.fu.prototype={
w(a,b){var s,r,q,p,o=this
o.d=a
o.I()
s=o.c
if(0>=s.length)return A.a(s,0)
r=s[0].w(a,b)
if(o.f){s=b.c
q=r.b
s=s==null?q:Math.min(q,s)
q=b.d
p=r.c
return o.r=new A.aC(a,s,q==null?p:Math.min(p,q))}else{s=b.c
q=r.b
s=s==null?q:Math.max(q,s)
q=b.d
p=r.c
return o.r=new A.aC(a,s,q==null?p:Math.max(p,q))}},
E(){var s,r,q,p,o,n,m=this,l=A.b([],t.f)
for(s=m.e,r=0;r<m.r.c/23.76;++r)for(q=r*23.76,p=0;p<m.r.b/15.84;++p){o=new A.Q(11,13,-1,-1,null)
n=m.d
o.d=n.a+p*15.84
o.e=n.b+q
o.x=s
l.push(o)}s=m.c
if(0>=s.length)return A.a(s,0)
B.a.M(l,s[0].E())
return l}}
A.hw.prototype={
E(){var s=this.c
if(0>=s.length)return A.a(s,0)
return s[0].E()},
w(a,b){var s,r,q,p,o,n=this
n.d=a
n.I()
if(!b.n(0,B.L)){s=b.d
s.toString
r=b.c
r.toString
q=new A.bs(b.a,b.b,r-n.r-n.x,s-n.e-n.f)}else q=b
s=n.c
if(0>=s.length)return A.a(s,0)
r=n.r
p=n.e
o=s[0].w(a.v(0,new A.M(r,p)),q)
return new A.aC(a,o.b+r+n.x,o.c+p+n.f)}}
A.e4.prototype={
w(a,b){var s,r,q,p,o,n,m,l,k=this
k.d=a
k.I()
s=B.b.a_(23.76)
s+=s
r=B.b.a_(15.84)
r+=r
if(!b.n(0,B.L)){q=b.d
q.toString
p=b.c
p.toString
o=new A.bs(b.a,b.b,p-r,q-s)}else o=b
q=k.c
if(0>=q.length)return A.a(q,0)
p=q[0]
n=p.w(a.v(0,new A.M(15.84,23.76)),o)
p=k.e
m=p==null?null:p.w(a.v(0,new A.M(15.84,0)),b)
if(m!=null){p=m.b
l=n.b
if(p>l){if(0>=q.length)return A.a(q,0)
q=q[0]
q.w(a.v(0,new A.M(15.84,23.76)),new A.bs(0,0,p,n.c))}return k.ch=new A.aC(a,Math.max(l,p)+r,n.c+s)}return k.ch=new A.aC(a,n.b+r,n.c+s)},
E(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.b([],t.f),f=h.ch,e=B.b.B(f.c/23.76),d=B.b.B(f.b/15.84)
for(f=h.r,s=e-1,r=d-1,q=0;q<e;++q)for(p=q*23.76,o=q===s,n=q===0,m=0;m<d;++m){l=m===0
if(l&&n)k=B.hF
else if(l&&o)k=B.hD
else{j=m===r
if(j&&n)k=B.hr
else if(j&&o)k=B.hv
else if(l)k=B.c3
else if(j)k=B.c3
else if(n)k=B.cf
else k=o?B.cf:null}if(k==null)continue
i=new A.Q(k.a,k.b,-1,-1,null)
l=h.d
i.d=l.a+m*15.84
i.e=l.b+p
i.x=f
i.r=B.I
B.a.k(g,i)}f=h.c
if(0>=f.length)return A.a(f,0)
f=A.dl(f[0].E(),!0,t.r)
B.a.M(f,g)
s=h.e
s=s==null?null:s.E()
if(s!=null)B.a.M(f,s)
return f}}
A.dw.prototype={
ah(a){var s,r,q=this,p="click_1.mp3"
if(a.n(0,B.aI)&&q.x>0){--q.x
q.I()
$.y.u().e.X(p,B.G)
return!0}if(a.n(0,B.aH)&&q.x<q.e.length-1){++q.x
q.I()
$.y.u().e.X(p,B.G)
return!0}if(a.n(0,B.bE)||a.n(0,B.aG)){s=q.e
r=q.x
if(!(r>=0&&r<s.length))return A.a(s,r)
q.f.$1(s[r])
$.y.u().e.X(p,B.G)
return!0}if(a.n(0,B.N)){q.r.$0()
return!0}if(q.aG(a))return!0
if(a.n(0,B.aI)||a.n(0,B.aH)||a.n(0,B.b_)||a.n(0,B.b0))return!0
return!1},
E(){var s,r=this,q=r.c
if(0>=q.length)return A.a(q,0)
q=A.dl(q[0].E(),!0,t.r)
if(r.e.length!==0){s=A.bz(B.hq)
s.sam(0,B.I)
s.sa8(0,r.d.a+31.68)
s.sa3(0,r.d.b+r.x*23.76+47.52)
q.push(s)}return q},
w(a,b){var s
this.d=a
this.I()
s=this.c
if(0>=s.length)return A.a(s,0)
return s[0].w(a,b)}}
A.d0.prototype={
ah(a){if(a.n(0,B.bE)||a.n(0,B.aG)||a.n(0,B.N)){this.e.$0()
$.y.u().e.X("click_1.mp3",B.G)
return!0}if(a.n(0,B.aI)||a.n(0,B.aH)||a.n(0,B.b_)||a.n(0,B.b0))return!0
return this.aG(a)},
E(){var s=this.c
if(0>=s.length)return A.a(s,0)
return s[0].E()},
w(a,b){var s
this.d=a
this.I()
s=this.c
if(0>=s.length)return A.a(s,0)
return s[0].w(a,b)}}
A.hf.prototype={}
A.eg.prototype={
sfU(a){if(this.x==a)return
this.x=a
this.I()},
sej(a){if(a===this.y)return
this.y=a
this.I()},
sei(a){if(a===this.z)return
this.z=a
this.I()},
shn(a){var s,r=this
if(a===r.Q)return
r.Q=a
s=r.eV()
r.e=s
r.G(s)
r.I()},
f_(){return A.nu(A.R("After a difficult journey through <NAME> mountains, you arrive at the base of the <FACTION> mining camp. Delve to the 10th level to discover the secret of <ARTIFACT>.\n\nPress [Enter] To Start",null),new A.kJ(this),null)},
cQ(a,b){var s,r,q,p
t.fb.a(a)
s=A.b([],t.I)
r=a==null?this.x.c.x.a:a
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.w)(r),++p)s.push(r[p])
return A.dx(A.uv(),s,new A.kA(this),new A.kB(this,b),"Inventory",t.J)},
bI(a){return this.cQ(a,null)},
eR(){var s,r,q,p,o=A.b([],t.eI)
for(s=[B.bb,B.be,B.bc,B.bf,B.bd],r=0;r<5;++r){q=s[r]
p=$.pP()
p.h(0,q).toString
p=p.h(0,q)
p.toString
o.push(p)}return A.dx(new A.ko(),o,new A.kp(this),new A.kq(this),null,t.L)},
eT(a){var s,r
t.gy.a(a)
s=this.x
s.toString
r=A.b([A.R("Choose a direction",null)],t.k)
s=new A.fN(a,s,new A.ks(this),r,B.l)
s.a0(r)
return s},
f0(a,b){var s,r,q,p,o,n=this
t.mD.a(a)
$.y.u().gO().ar()
$.y.u().gO().b=b
s=$.y.u().gO()
r=n.x.q()
r.toString
q=n.x.q()
q.toString
p=$.y.u().y2
o=p.e
p=p.d
if(!(p<o.length))return A.a(o,p)
s.aW(r,q,o[p])
$.y.u().d.b=!0
p=n.x
p.toString
o=A.b([A.R("Choose a location",null)],t.k)
s=new A.hX(a,p,new A.kK(n),o,B.l)
s.a0(o)
return s},
eS(){var s,r,q,p,o,n=null,m=this.x.c,l=m.y,k=A.R("HP: "+m.b+" / "+m.a,n),j=A.R("EXP: "+m.d,n),i=B.A.h(0,t.e.i("K.T").a(900))
i.toString
s=l.b
r=l.c
q=l.d
p=l.e
o=l.f
return A.nu(A.nz(A.b([k,j,A.R("-------------------",A.as(19,i,!1,t.i)),A.R("STR "+l.a+" ("+l.Z(l.a)+")",n),A.R("DEX "+s+" ("+l.Z(s)+")",n),A.R("CON "+r+" ("+l.Z(r)+")",n),A.R("INT "+q+" ("+l.Z(q)+")",n),A.R("RES "+p+" ("+l.Z(p)+")",n),A.R("CHA "+o+" ("+l.Z(o)+")",n)],t.k),!1),new A.kr(this),"Character")},
eZ(){var s,r,q,p,o,n=this,m=n.x.c.x.gaY()
if(m==null)return null
$.y.u().d.b=!0
$.y.u().gO().b=new A.dA(0,m.ch+1,!1,B.a3,!0,B.aq)
s=$.y.u().gO()
r=n.x.q()
r.toString
q=n.x.q()
q.toString
p=$.y.u().y2
o=p.e
p=p.d
if(!(p<o.length))return A.a(o,p)
s.aW(r,q,o[p])
p=n.x
p.toString
o=A.b([A.R("Fire Weapon",null)],t.k)
s=new A.hE(p,new A.kG(n),o,B.l)
s.a0(o)
return s},
eY(){var s,r,q,p,o,n
$.y.u().d.b=!0
$.y.u().gO().b=new A.dA(0,1e4,!1,B.a3,!1,B.aq)
s=$.y.u().gO()
r=this.x.q()
r.toString
q=this.x.q()
q.toString
p=$.y.u().y2
o=p.e
p=p.d
if(!(p<o.length))return A.a(o,p)
s.aW(r,q,o[p])
n=A.R("",null)
p=B.b.a_(23.76)
o=B.b.a_(15.84)
p=A.b([A.ny(A.jK(A.hx(p,n,o*2,o,p),B.q,!0),B.q,null)],t.k)
s=new A.es(n,new A.kF(this),p,B.l)
s.a0(p)
$.y.u().gO().scI(t.M.a(s.gfj()))
return s},
eW(a){var s=A.b([],t.s),r=a.c
if(r===B.a_)s.push("Use")
if(r===B.Z||r===B.X||r===B.Y)s.push("Equip")
s.push("Drop")
return A.dx(null,s,new A.kC(this),new A.kD(this,a),a.d,t.N)},
eX(){return A.nu(A.R("The Something of Something by Jonah Williams.\nSounds from Zapsplat.com.\n\nMade with Love in California.",null),new A.kE(this),null)},
cP(){var s,r,q=A.b([],t.lT)
for(s=this.x.c.x.b,s=s.gap(s),s=s.gC(s);s.p();){r=s.gt(s)
q.push(new A.bM(r.a,r.b))}return A.dx(A.uu(),q,new A.kv(this),new A.kw(this),"Equipment",t.l8)},
eU(a){var s=a.b.d
return A.dx(null,A.b(["Unequip","Drop"],t.s),new A.kt(this),new A.ku(this,a),s,t.N)},
eV(){var s,r,q,p=[]
for(s=this.Q.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q)p.push(s[q])
return A.dx(new A.kx(),p,new A.ky(this),new A.kz(this),null,t.z)},
b7(a){return A.dx(null,A.b(["New Game","Settings","Credits","Quit"],t.s),new A.kH(this),new A.kI(this),a,t.N)},
ah(a){var s,r,q=this
if(a.n(0,B.N)&&q.e==null){s=q.b7("")
q.e=s
q.G(s)
return!0}if(a.n(0,B.fP)&&q.e==null){s=q.bI(null)
q.e=s
q.G(s)
return!0}if(a.n(0,B.fN)&&q.e==null){s=q.cP()
q.e=s
q.G(s)
return!0}if(a.n(0,B.fM)&&q.e==null){s=q.eS()
q.e=s
q.G(s)
return!0}if(a.n(0,B.fL)&&q.e==null){s=q.eR()
q.e=s
q.G(s)
return!0}if(a.n(0,B.fO)&&q.e==null){s=q.e=q.eZ()
if(s!=null){q.G(s)
return!0}}if(a.n(0,B.fQ)&&q.e==null){s=q.eY()
q.e=s
q.G(s)
return!0}s=q.e
r=s==null?null:s.ah(a)
if(r==null?q.f.ah(a):r)return!0
if(a.n(0,B.N)&&$.y.u().gO().d!=null){$.y.u().gO().ar()
$.y.u().d.b=!1
return!0}return!1},
E(){var s=A.b([],t.f),r=this.e
r=r==null?null:r.E()
if(r!=null)B.a.M(s,r)
B.a.M(s,this.f.E())
B.a.M(s,this.r.E())
return s},
w(a,b){var s,r,q,p,o,n=this
n.d=a
n.I()
s=n.e
if(s!=null){r=s instanceof A.d0?new A.bs(0,0,864,432):B.L
s=B.b.ai(n.y/2)
q=B.b.ai(n.z/2)
p=n.e.w(new A.M(s,q),r)
n.e.w(new A.M(s-p.b/2,q-p.c/2),r)}n.f.w(new A.M(0,n.z-23.76),b)
s=n.r
o=s.w(B.l,b)
s.w(new A.M(n.y-o.b,0),b)
return new A.aC(a,n.y,n.z)}}
A.kJ.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.N(r)
s.e=null},
$S:0}
A.kB.prototype={
$1(a){var s,r
t.J.a(a)
s=this.a
r=s.e
r.toString
s.N(r)
s.e=null
r=this.b
if(r!=null){B.a.A(s.x.c.x.a,a)
s.x.c.x.c8(a,r)
r=s.cP()
s.e=r
s.G(r)}else{r=s.eW(a)
s.e=r
s.G(r)}},
$S:45}
A.kA.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.N(r)
s.e=null},
$S:0}
A.kq.prototype={
$1(a){var s,r,q,p
t.L.a(a)
s=this.a
r=s.e
r.toString
s.N(r)
s.e=null
q=a.d
if(t.gy.b(q)){r=s.eT(q)
s.e=r
s.G(r)
return}if(t.mD.b(q)){r=a.e
r.toString
r=s.f0(q,r)
s.e=r
s.G(r)
return}t.ci.a(q)
r=s.x
r.toString
p=q.$1(r)
$.y.u().k1.k(0,p)
r=s.e
r.toString
s.N(r)
s.e=null},
$S:46}
A.kp.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.N(r)
s.e=null},
$S:0}
A.ko.prototype={
$1(a){return A.R(t.L.a(a).a,null)},
$S:47}
A.ks.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.N(r)
s.e=null},
$S:0}
A.kK.prototype={
$0(){var s,r
$.y.u().gO().ar()
$.y.u().d.b=!1
s=this.a
r=s.e
r.toString
s.N(r)
s.e=null},
$S:0}
A.kr.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.N(r)
s.e=null},
$S:0}
A.kG.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.N(r)
s.e=null},
$S:0}
A.kF.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.N(r)
s.e=null},
$S:0}
A.kD.prototype={
$1(a){var s,r,q,p,o=this
A.a6(a)
if(a==="Drop"){s=$.y.u().k1
r=o.a.x
r.toString
s.k(0,new A.eb(r,o.b))}if(a==="Use"){s=$.y.u().k1
r=o.a.x
r.toString
s.k(0,new A.ic(r,o.b))}if(a==="Equip"){s=o.b
r=s.gh6()
r.toString
q=o.a
p=q.x.c.x.b.h(0,r)
if(p!=null){q.x.c.x.e1(p)
B.a.k(q.x.c.x.a,p)}B.a.A(q.x.c.x.a,s)
q.x.c.x.c8(s,r)}s=o.a
r=s.e
r.toString
s.N(r)
s.e=null},
$S:13}
A.kC.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.N(r)
r=s.bI(null)
s.e=r
s.G(r)},
$S:0}
A.kE.prototype={
$0(){var s,r=this.a
r.N(r.e)
s=r.b7("The Something of Something")
r.e=s
r.G(s)},
$S:0}
A.kw.prototype={
$1(a){var s,r,q
t.l8.a(a)
s=this.a
r=s.e
r.toString
s.N(r)
s.e=null
if(a.b==null){r=a.a
q=s.x.c.x.dN(r)
r=s.cQ(A.dl(q,!0,q.$ti.i("i.E")),r)
s.e=r
s.G(r)}else{r=s.eU(a)
s.e=r
s.G(r)}},
$S:49}
A.kv.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.N(r)
s.e=null},
$S:0}
A.ku.prototype={
$1(a){var s,r,q,p=this
A.a6(a)
if(a==="Drop"){s=$.y.u().k1
r=p.a.x
r.toString
q=p.b.b
q.toString
s.k(0,new A.eb(r,q))}if(a==="Unequip"){s=p.a
r=s.x.c
q=p.b.b
q.toString
B.a.k(r.x.a,q)
s.x.c.x.e1(q)}s=p.a
r=s.e
r.toString
s.N(r)
s.e=null},
$S:13}
A.kt.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.N(r)
r=s.bI(null)
s.e=r
s.G(r)},
$S:0}
A.kz.prototype={
$1(a){var s=this.a,r=s.e
r.toString
s.N(r)
s.e=null
s.Q.b.ag(0,a)
s.Q=null},
$S:5}
A.ky.prototype={
$0(){var s,r=this.a
r.Q.b.ag(0,null)
s=r.e
s.toString
r.N(s)
r.e=null},
$S:0}
A.kx.prototype={
$1(a){var s
if(a instanceof A.ar&&a.b!=null){s=a.b
s.toString
return s}return A.R(J.co(a),null)},
$S:50}
A.kI.prototype={
$1(a){var s,r,q,p,o,n=null
A.a6(a)
if(a==="New Game"){$.y.u().y1=!0
$.y.u().c6()
s=$.y.u()
r=$.dW()
q=t.t
p=t.ku
q=new A.k8(new A.jL(B.u,new A.kT(B.u)),A.b([new A.aB(B.J,r.K()<=0.6,1),new A.aB(B.x,r.K()<=0.4,2),new A.aB(B.x,r.K()<=0.4,3),new A.aB(B.x,r.K()<=0.4,4),new A.aB(B.r,r.K()<=0.2,5),new A.aB(B.r,r.K()<=0.2,6),new A.aB(B.r,r.K()<=0.2,7),new A.aB(B.y,r.K()<=0.1,8),new A.aB(B.y,r.K()<=0.1,9),new A.aB(B.y,r.K()<=0.1,10),new A.aB(B.D,!1,11)],t.lR),A.b([2,4,4,4,6,6,6,10,10,10,12],q),A.b([A.bn(r,10,25),A.bn(r,115,125),A.bn(r,115,125),A.bn(r,115,125),A.bn(r,125,135),A.bn(r,125,135),A.bn(r,125,135),A.bn(r,135,145),A.bn(r,135,145),A.bn(r,135,145),A.bn(r,170,200)],q),A.b([A.b([],p),A.b([],p),A.b([],p),A.b([],p),A.b([],p),A.b([],p),A.b([],p),A.b([],p),A.b([],p),A.b([],p),A.b([],p)],t.fu),A.b([0,0,0,0,0,0,0,0,0,0,0],q),A.ac(t.ee,t.gN))
q.fb()
q.f9()
p=A.om()
p=q.cR(A.nv(new A.c3(20,20,0,0,0,0,0,new A.cu(A.b([],t.I),A.rf(B.b5,t.a,t.O)),p,A.b([],t.Q),new A.cw("You")),n,0,n,n,!1,!0,new A.Q(0,4,1,1,n)))
o=new A.cj(p.a(),p.$ti.i("cj<1>"))
o.p()
o.p()
p=new A.m7(o.gt(o),o)
s.dw=p
p=s.y2=A.dQ(p,"worldWrapper").a
q=p.e
p=p.d
if(!(p<q.length))return A.a(q,p)
p=A.mU(q[p])
q=s.y2
r=q.e
q=q.d
if(!(q<r.length))return A.a(r,q)
s.dF(p,r[q])
q=s.y2
r=q.a
p=q.e
q=q.d
if(!(q<p.length))return A.a(p,q)
s.df(r,A.mU(p[q]))
q=s.gav()
p=s.y2
q.b=p.a
q=s.y
r=p.e
p=p.d
if(!(p<r.length))return A.a(r,p)
p=q.c=r[p]
q.d=!0
q=s.z
q.d=p
q.c=!0
q=s.f
q.dL(p.d)
q.dG()
p=s.y2
r=p.e
p=p.d
if(!(p<r.length))return A.a(r,p)
q.e=A.mU(r[p])
s.gbj().e=!0
s=this.a
p=s.e
p.toString
s.N(p)
p=s.f_()
s.e=p
s.G(p)}else if(a==="Quit"){s=t.e4.a(this.a.e).c
if(0>=s.length)return A.a(s,0)
s=t.fr.a(s[0])
if(s!=null){s=s.e
if(s!=null)s.sbq(0,"The Something of Something")}$.y.u().y1=!0
$.y.u().c6()}else if(a==="Credits"){s=this.a
s.N(s.e)
r=s.eX()
s.e=r
s.G(r)}},
$S:13}
A.kH.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.N(r)
s.e=null},
$S:0}
A.bM.prototype={}
A.fZ.prototype={
n(a,b){if(b==null)return!1
return b instanceof A.fZ&&b.a===this.a&&b.b===this.b},
gF(a){return A.cK(this.a,this.b,B.H,B.H)}}
A.fy.prototype={
shi(a){var s,r=this
if(J.a_(a,r.f))return
r.N(r.r)
r.f=a
if(a!=null){s=A.R("HP: "+a.a+"/"+a.b,null)
r.r=s
r.G(s)}r.I()},
E(){var s,r,q,p,o,n,m=this
if(m.f==null)return A.b([],t.f)
s=B.b.B(m.x.b/15.84)+1
r=A.b([],t.f)
for(q=t.e.i("K.T"),p=0;p<s;++p){o=new A.Q(11,13,-1,-1,null)
n=B.b4.h(0,q.a(900))
n.toString
o.x=n
n=m.d
o.d=n.a+p*15.84
o.e=n.b
r.push(o)}q=m.r
q=q==null?null:q.E()
if(q!=null)B.a.M(r,q)
if(m.r!=null)B.a.M(r,m.e.E())
return r},
w(a,b){var s,r,q=this
q.d=a
q.I()
if(q.f==null)return B.ar
s=q.r
r=s==null?null:s.w(a.v(0,new A.M(15.84,0)),b)
if(r!=null)q.e.w(a.v(0,new A.M(r.b+100,0)),b)
return q.x=new A.aC(a,t.bC.a(q.a).y,B.b.a_(23.76))}}
A.hG.prototype={
sel(a,b){if(b===this.e)return
this.e=b
this.I()},
dj(a){var s,r,q,p=this.r
B.a.k(p,a)
s=this.f
r=A.R(":: "+a,B.a.v(A.b([B.I,B.I,B.I],t.b),A.as(a.length,B.z,!1,t.i)))
r.shJ(0.6)
r=A.hx(4,r,4,4,4)
q=s.c
A.T(q).c.a(r)
if(!!q.fixed$length)A.W(A.B("insert"))
q.splice(0,0,r)
r.a=s
s.I()
if(p.length>50){B.a.bp(p,0)
if(0>=q.length)return A.a(q,-1)
q.pop().a=null
s.I()}this.I()},
E(){if(!this.e)return A.b([],t.f)
var s=this.c
if(0>=s.length)return A.a(s,0)
return s[0].E()},
w(a,b){var s,r=this
r.d=a
r.I()
if(!r.e)return B.ar
s=r.c
if(0>=s.length)return A.a(s,0)
return s[0].w(a,new A.bs(0,0,20*B.b.a_(15.84),b.d))}}
A.bs.prototype={
gF(a){var s=this
return A.cK(s.a,s.b,s.c,s.d)},
n(a,b){var s=this
if(b==null)return!1
return b instanceof A.bs&&b.a==s.a&&b.c==s.c&&b.b==s.b&&b.d==s.d}}
A.hX.prototype={
ah(a){var s,r,q=this
if(a.n(0,B.N)){$.y.u().gO().ar()
$.y.u().d.b=!1
q.r.$0()
return!0}if(a.n(0,B.aG)){s=$.y.u().gO().d
if(s==null||!s.d)return!1
r=q.e.$2(q.f,s.b)
$.y.u().k1.k(0,r)
$.y.u().gO().ar()
$.y.u().d.b=!1
q.r.$0()
return!0}return q.aG(a)},
E(){var s=this.c
if(0>=s.length)return A.a(s,0)
return s[0].E()},
w(a,b){var s=this.c
if(0>=s.length)return A.a(s,0)
return s[0].w(new A.M(50,50),B.L)}}
A.es.prototype={
fk(){var s,r,q,p,o,n=$.y.u().gO().d
if(n!=null&&n.d){s=$.y.u().y2
r=s.e
s=s.d
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=n.b
q=A.tW(s.al(r))
s=s.d
p=A.tX(s.h(0,r).f)
r=s.h(0,r).e
s=A.T(r)
s.i("bc(1)").a(A.px())
o=A.b([],t.ko)
if(q!=null)o.push(q)
if(p!=null)o.push(p)
B.a.M(o,new A.cF(r,A.px(),s.i("cF<1,bc>")))
s=this.e
if(o.length!==0)s.sbq(0,B.a.gc9(o).a)
else s.sbq(0,"")}else this.e.sbq(0,"")},
ah(a){if(a.n(0,B.N)){$.y.u().gO().ar()
$.y.u().d.b=!1
this.f.$0()
return!0}return this.aG(a)},
E(){var s=this.c
if(0>=s.length)return A.a(s,0)
return s[0].E()},
w(a,b){var s=this.c
if(0>=s.length)return A.a(s,0)
return s[0].w(new A.M(50,50),B.L)}}
A.hE.prototype={
ah(a){var s,r
if(a.n(0,B.N)){$.y.u().gO().ar()
$.y.u().d.b=!1
this.f.$0()
return!0}if(a.n(0,B.aG)){s=$.y.u().gO().d
if(s==null||!s.d)return!1
r=s.b
$.y.u().k1.k(0,new A.eC(r,this.e,!1))}return this.aG(a)},
E(){var s=this.c
if(0>=s.length)return A.a(s,0)
return s[0].E()},
w(a,b){var s=this.c
if(0>=s.length)return A.a(s,0)
return s[0].w(new A.M(50,50),B.L)}}
A.fN.prototype={
b9(a){var s,r,q=$.y.u().y2,p=q.e
q=q.d
if(!(q<p.length))return A.a(p,q)
s=p[q].al(a)
if(s!=null){r=this.e.$2(this.f,s)
$.y.u().k1.k(0,r)}this.r.$0()},
ah(a){var s=this,r=s.f.q()
r.toString
if(a.n(0,B.aI)){s.b9(r.v(0,new A.d(0,-1)))
return!0}if(a.n(0,B.aH)){s.b9(r.v(0,new A.d(0,1)))
return!0}if(a.n(0,B.b_)){s.b9(r.v(0,new A.d(-1,0)))
return!0}if(a.n(0,B.b0)){s.b9(r.v(0,new A.d(1,0)))
return!0}if(a.n(0,B.N)){s.r.$0()
return!0}return s.aG(a)},
E(){var s=this.c
if(0>=s.length)return A.a(s,0)
return s[0].E()},
w(a,b){var s=this.c
if(0>=s.length)return A.a(s,0)
return s[0].w(new A.M(50,50),B.L)}}
A.fT.prototype={
fP(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.b,a4=a3.aj(a3.e),a5=a2.c,a6=a5.a6("a_color",t.B)
if(a4!=null)for(s=a6.length,r=a4.d,q=a4.c,p=a4.a,o=q.length,n=a3.e,m=n.a,n=n.b,l=0;l<40;++l)for(k=l*100,j=l*p,i=l===n,h=0;h<100;++h){g=k+h
f=g*24
e=h===m&&i
d=j+h
if(!(d<o))return A.a(q,d)
c=q[d]>0||e
if(!(g<4000))return A.a(r,g)
b=r[g]===1||e
for(a=0;a<48;a+=4){d=a+f
a0=c?0:0.01
if(!(d<s))return A.a(a6,d)
a6[d]=a0
a0=d+1
a1=c?0:0.01
if(!(a0<s))return A.a(a6,a0)
a6[a0]=a1
a1=d+2
a0=c?0:0.01
if(!(a1<s))return A.a(a6,a1)
a6[a1]=a0
d+=3
if(c)a0=0
else a0=b?0.8:1
if(!(d<s))return A.a(a6,d)
a6[d]=a0}}a2.d=a3.e
a2.e=!1
a5.aa(a7,"a_color",a6)}}
A.ih.prototype={}
A.ij.prototype={}
A.mQ.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.a(s,a)
return s[a]},
$S:20}
A.hQ.prototype={
al(a){var s,r,q,p,o,n,m,l
for(s=this.b,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.e){m=n.b
l=B.b.B(m.d/24)
if(l===q){m=B.b.B(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.m7.prototype={}
A.k8.prototype={
cR(a){var s=this
return A.o3(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6
return function $async$cR(a7,a8){if(a7===1){o=a8
q=p}while(true)switch(q){case 0:a6=A.ek(B.aM)
a6.e=1
n=A.ek(new A.e_(B.bg,50))
m=r.c.x
m.c8(a6,B.C)
B.a.k(m.a,n)
l=A.b([],t.fF)
k=new A.ij(r,l)
m=s.a,j=s.b,i=s.e,h=0
case 2:if(!(h<10)){q=4
break}g=A.tR(m.e7(j[h]))
B.a.k(l,g)
f=i[h]
for(e=f.length,d=g.b,c=0;c<f.length;f.length===e||(0,A.w)(f),++c){b=A.u3(f[c])
a0=A.ui(g,b)
a1=b.b
a2=a0.a
a3=a1.a
a4=a3==null
if(!a4)a3.a=!0
a1.d=a2*24
a2=a0.b
if(!a4)a3.a=!0
a1.e=a2*36
B.a.k(d,b)}for(e=g.d,a5=0;a5<3;++a5){a6=A.ek(B.bu)
B.a.k(e.h(0,A.uj(g)).e,a6)}q=5
return k
case 5:case 3:++h
q=2
break
case 4:return A.nS()
case 1:return A.nT(o)}}},t.l7)},
fb(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.d,r=t.ee,q=this.e,p=this.b,o=0;o<10;++o){n=q[o]
m=p[o]
l=$.pY()
k=A.T(l)
j=k.i("b1<1>")
i=A.dl(new A.b1(l,k.i("C(1)").a(new A.k9(m.a)),j),!0,j.i("i.E"))
for(h=0;h<s[o];){g=A.td($.dW(),i,r)
B.a.k(n,g)
h+=g.d}}},
f9(){var s,r,q,p,o,n,m,l,k,j,i=this,h=new A.c3(1,1,1,0,0,0,0,new A.cu(A.b([],t.I),A.ac(t.a,t.O)),A.om(),A.b([],t.Q),new A.cw(""))
for(s=i.f,r=i.c,q=i.e,p=0;p<10;++p){o=q[p]
for(n=0,m=0;m<o.length;++m){l=i.fa(o[m])
k=l.a
for(j=l.x.b.h(0,B.C)!=null;k>0;){n+=(j?l.dW(h,$.dW(),!0):l.dQ(h,$.dW(),!0)).c
k-=r[p]}}B.a.j(s,p,n)}},
fa(a){var s,r,q,p,o,n=this.r
if(n.h(0,a)!=null){n=n.h(0,a)
n.toString
return n}s=a.d
r=A.b([],t.I)
q=A.oL(B.b5,t.a,t.O)
p=new A.c3(s,s,1,0,0,0,0,new A.cu(r,q),a.c,A.b([],t.Q),new A.cw(a.a))
for(s=J.ak(a.f.$0());s.p();){o=s.gt(s)
switch(o.gbz()){case B.aO:q.h(0,B.U)
q.j(0,B.U,o)
break
case B.aP:q.h(0,B.C)
q.j(0,B.C,o)
break
case B.aQ:q.h(0,B.V)
q.j(0,B.V,o)
break
default:B.a.k(r,o)}}n.j(0,a,p)
return p}}
A.k9.prototype={
$1(a){return B.a.S(t.ee.a(a).r,this.a)},
$S:52}
A.fB.prototype={
cw(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.ag(a,a0,A.as(a*a0,B.j,!1,t.ns),t.ba)
c.a=b
s=new A.jV(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.v()
if(typeof m!=="number")return A.cZ(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.cZ(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.cZ(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.cZ(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.cZ(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.cZ(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.cZ(f)
e=n+m+k+i+h+g+l+f
if(J.a_(s.$2(q,o),1))if(e<4)a1.T(0,B.j,q,o)
else a1.T(0,B.c,q,o)
else if(e>5)a1.T(0,B.c,q,o)
else a1.T(0,B.j,q,o)}d=c.a
c.a=a1}}}
A.jV.prototype={
$2(a,b){return J.a_(this.a.a.ax(0,a,b),B.c)?0:1},
$S:53}
A.kM.prototype={
cp(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.nW.a(b0)
s=t.q
r=A.b([],s)
q=new A.kN(a9)
for(p=J.ak(a8.a);p.p();){o=p.gt(p)
n=q.$1(o)
if(typeof n!=="number")return n.e6()
if(n>=1)B.a.k(r,o)}if(r.length===0)return
m=A.b([],t.oe)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.w)(r),++j){i=r[j]
h=A.b([],k)
g=i.a
f=i.b
if(o.h(0,new A.d(g+1,f))===B.c)B.a.k(h,B.n)
if(o.h(0,new A.d(g+-1,f))===B.c)B.a.k(h,B.o)
if(o.h(0,new A.d(g,f+1))===B.c)B.a.k(h,B.k)
if(o.h(0,new A.d(g,f+-1))===B.c)B.a.k(h,B.m)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.w)(h),++e){d=h[e]
c=A.Z(i,d)
b=A.b([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.c)break
a2=A.qR(d)
a1=a2.length
if(0>=a1)return A.a(a2,0)
if(o.h(0,A.Z(a,a2[0]))!==B.j){if(1>=a1)return A.a(a2,1)
a1=o.h(0,A.Z(a,a2[1]))===B.j}else a1=!0
if(a1)break
a=A.Z(a,d)
B.a.k(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.j&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.Z(a,A.qS(d))
if(0>=b.length)return A.a(b,-1)
b.pop()
a3.toString
B.a.k(m,new A.eM(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.ac(t.v,t.fH)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.w)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.S(l,n))continue
if(a4.aU(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.j(0,n,a5)}else a4.j(0,n,a5)}for(s=a4.gcq(a4),s=s.gC(s),n=this.a,l=a9.e,k=a8.b;s.p();){g=s.gt(s)
f=g.d
a0=p.h(0,a8)
a0.toString
B.a.k(a0,f)
a0=p.h(0,f)
a0.toString
B.a.k(a0,a8)
for(g=g.c,a0=g.length,j=0;a1=g.length,j<a1;g.length===a0||(0,A.w)(g),++j)o.j(0,g[j],B.j)
a0=n.R(a1)
if(!(a0>=0&&a0<g.length))return A.a(g,a0)
a7=g[a0]
l.j(0,a7,B.p)
B.a.k(k,a7)
B.a.k(f.b,a7)}for(s=a4.gcq(a4),s=s.gC(s);s.p();)this.cp(s.gt(s).d,a9,b0,b1)}}
A.kN.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.v(0,new A.d(1,0)))===B.c?1:0
if(s.h(0,a.v(0,new A.d(-1,0)))===B.c)++r
if(s.h(0,a.v(0,new A.d(0,-1)))===B.c)++r
return s.h(0,a.v(0,new A.d(1,1)))===B.c?r+1:r},
$S:54}
A.jS.prototype={
e9(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.T(0,o.K()>0.45?B.j:B.c,n,m)
p.T(0,B.b8,n,m)}new A.fB(a7).cw(3)
for(p=q-1,l=0;l<r;++l){s.T(0,B.c,l,0)
s.T(0,B.c,l,p)}for(o=r-1,k=0;k<q;++k){s.T(0,B.c,0,k)
s.T(0,B.c,o,k)}j=new A.jT(a7)
i=new A.jU(a7)
for(l=1;l<o;l=g)for(h=l-1,g=l+1,k=1;k<p;++k){if(!j.$2(l,k))continue
f=i.$2(g,k)
e=i.$2(h,k)
d=k+1
c=i.$2(l,d)
b=k-1
a=i.$2(l,b)
if(f&&e&&c&&a){s.T(0,B.c,l,k)
continue}if(j.$2(h,d)&&c&&e){s.T(0,B.c,l,k)
continue}if(j.$2(g,d)&&c&&f){s.T(0,B.c,l,k)
continue}if(j.$2(g,b)&&a&&f){s.T(0,B.c,l,k)
continue}if(j.$2(h,b)&&a&&e){s.T(0,B.c,l,k)
continue}}p=t.j
o=A.bw(p)
a0=new A.fX(a7,A.b([],t.do),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.d(l,k)
if(o.S(0,a1)||s.h(0,a1)===B.c)continue
a0.dE(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.w)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gC(a3);d.p();)s.j(0,d.gt(d),B.c)
else B.a.k(o,new A.ae(a3,A.b([],h),A.b([],h),A.kc(a3)))}a4=A.ac(p,t.v)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.h,a2=0;b=o.length,a2<b;o.length===r||(0,A.w)(o),++a2){a3=o[a2]
B.a.k(p,a3)
h.j(0,a3,A.b([],d))
for(b=J.ak(a3.a);b.p();)a4.j(0,b.gt(b),a3)}if(0>=b)return A.a(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.w)(o),++a2){a3=o[a2]
r=a3.a
p=J.aN(r)
if(p.gm(r)>a6){a6=p.gm(r)
a5=a3}}this.cp(a5,a7,a4,q)
for(r=q.dT(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.w)(r),++a2){a3=r[a2]
B.a.A(o,a3)
for(p=J.ak(a3.a);p.p();)s.j(0,p.gt(p),B.c)}A.pN(o,a7)}}
A.jT.prototype={
$2(a,b){return J.a_(this.a.b.ax(0,a,b),B.j)},
$S:21}
A.jU.prototype={
$2(a,b){return J.a_(this.a.b.ax(0,a,b),B.c)},
$S:21}
A.b5.prototype={}
A.ii.prototype={}
A.b3.prototype={
ac(a,b){this.$ti.c.a(a)
return this.a.ac(a,b)+this.b.ac(a,b)}}
A.dr.prototype={
ac(a,b){this.$ti.c.a(a)
return Math.min(B.aT.ac(a,b),this.b.ac(a,b))}}
A.hr.prototype={
ac(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=b.b,r=a.a,q=a.b,p=b.e,o=p.a,p=p.b,n=-1;n<2;++n)for(m=r+n,l=m<o,k=-1;k<2;++k){j=q+k
if(!(m>=0&&j>=0&&l&&j<p))continue
if(s.h(0,new A.d(m,j))===B.c)return 1/0}return 0}}
A.fC.prototype={
ac(a,b){var s,r,q,p
if(b.b.h(0,a)===B.c||b.e.h(0,a)!==B.w)return 1/0
s=A.nl(a,B.m,b)
r=A.nl(a,B.k,b)
q=A.nl(a,B.n,b)
p=A.nl(a,B.o,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.fo.prototype={
ac(a,b){if(b.b.h(0,a)===B.c||b.e.h(0,a)!==B.w)return 1/0
if(A.d_(a,B.m,b)+A.d_(a,B.k,b)+A.d_(a,B.n,b)+A.d_(a,B.o,b)===1)return 1
return 1/0}}
A.fJ.prototype={
ac(a,b){if(b.b.h(0,a)===B.c||b.e.h(0,a)!==B.w)return 1/0
if(A.d_(a,B.m,b)+A.d_(a,B.k,b)+A.d_(a,B.n,b)+A.d_(a,B.o,b)===2)return 1
return 1/0}}
A.dZ.prototype={
ac(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.c||b.e.h(0,a)!==B.w)return 1/0
s=A.Z(a,B.m)
r=A.Z(a,B.k)
q=A.Z(a,B.n)
p=A.Z(a,B.o)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.dq.prototype={
ac(a,b){var s,r,q,p,o,n,m,l,k,j,i
for(s=b.e,r=a.a,q=a.b,p=this.a,o=s.a,n=s.b,m=-2;m<4;++m)for(l=r+m,k=l<o,j=-2;j<4;++j){i=q+j
if(!(l>=0&&i>=0&&k&&i<n))continue
if(s.h(0,new A.d(l,i))===p)return 1/0}return 0}}
A.cP.prototype={
dU(a,b){return this.c.$2(a,b)},
gcj(){return this.a},
gc5(a){return this.b},
gci(){return this.c}}
A.ne.prototype={
$2(a,b){b.e.j(0,a,B.an)},
$S:1}
A.n7.prototype={
$2(a,b){b.e.j(0,a,B.aE)},
$S:1}
A.nb.prototype={
$2(a,b){b.e.j(0,a,B.F)},
$S:1}
A.n6.prototype={
$2(a,b){b.e.j(0,a,B.F)},
$S:1}
A.n8.prototype={
$2(a,b){b.e.j(0,a,B.M)},
$S:1}
A.nc.prototype={
$2(a,b){b.e.j(0,a,B.ai)
b.f.j(0,a,B.h2)},
$S:1}
A.nd.prototype={
$2(a,b){b.e.j(0,a,B.aj)},
$S:1}
A.na.prototype={
$2(a,b){b.e.j(0,a,B.W)},
$S:1}
A.n9.prototype={
$2(a,b){b.e.j(0,a,B.W)},
$S:1}
A.n5.prototype={
$2(a,b){b.e.j(0,a,B.a5)},
$S:1}
A.bk.prototype={}
A.je.prototype={
gc5(a){var s=this.a
return s.gc5(s)},
gci(){return this.a.gci()},
gcj(){return this.a.gcj()},
l(a){return"Unique("+this.a.l(0)+")"},
$icP:1,
dU(a,b){return this.gci().$2(a,b)}}
A.nk.prototype={
$2(a,b){var s=t.n4
return B.b.a2(s.a(a).b,s.a(b).b)},
$S:57}
A.nj.prototype={
$2(a,b){var s=t.v
s.a(a)
s.a(b)
return J.aw(a.a)-J.aw(b.a)},
$S:58}
A.eh.prototype={}
A.jL.prototype={
e7(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=4000,b=new A.ag(100,40,A.as(c,B.j,!1,t.ns),t.ba),a=new A.ag(100,40,A.as(c,0,!1,t.R),t.de),a0=new A.ag(100,40,A.as(c,B.b8,!1,t.dt),t.f5),a1=new A.ag(100,40,A.as(c,B.w,!1,t.gE),t.k_),a2=new A.ag(100,40,A.as(c,B.bJ,!1,t.gM),t.eT),a3=new A.ag(100,40,A.as(c,null,!1,t.O),t.oQ),a4=t.h,a5=A.b([],a4)
a4=A.b([],a4)
s=new A.eh(a6,b,a,a0,a1,a2,a3,new A.kb(a5,A.ac(t.v,t.mw)),a4)
if(a6.b)d.h4(s)
a5=a6.a
switch(a5){case B.x:case B.r:new A.jS(B.u).e9(s)
break
case B.D:case B.y:new A.lE(A.bw(t.j),B.u).ec(s)
break
case B.a2:case B.J:case B.a1:new A.lM(B.u).ea(s)
break}d.hv(s)
r=new Float32Array(4000)
new A.lt().eb(r,100,40)
q=new A.ag(100,40,A.nJ(c,new A.jN(),t.W),t.nr)
d.b.e8(a4,s,a6.c)
for(p=d.a,a5=a5!==B.a1,o=0;o<100;++o)for(n=0;n<40;++n){m=J.a_(b.ax(0,o,n),B.j)
l=b.ax(0,o,n)
l.toString
k=new A.d(o,n)
p.K()
j=q.h(0,k)
i=a0.h(0,k)
h=a1.h(0,k)
j.b=k
j.c=l
j.shI(a0.h(0,k))
l=n*100+o
if(!(l<4000))return A.a(r,l)
g=r[l]
f=a3.ax(0,o,n)
if(J.a_(a.h(0,k),1)){j.r=B.fR
j.c=B.j}else if(h!==B.w)switch(h){case B.p:if(a2.h(0,k)===B.bI)j.f=B.am
else j.f=B.p
break
case B.M:j.f=B.M
if(f!=null)B.a.k(j.e,f)
break
default:j.f=h}else if(m&&g<0.42&&i!==B.aR&&a5)j.f=B.a9
if(f!=null)B.a.k(j.e,f)}b=J.ak(B.a.hb(a4,new A.jO(),new A.jP(s)).a)
while(!0){if(!b.p()){e=!1
break}a=b.gt(b)
if(A.t5(a1.h(0,a))){q.h(0,a).f=B.ak
e=!0
break}}if(!e)throw A.c(A.am(""))
return new A.le(q,a6)},
hv(a){var s,r,q,p,o,n,m,l,k=A.ac(t.l9,t.S),j=$.pQ()
B.a.bx(j)
for(s=j.length,r=this.a,q=a.a.a,p=0;p<j.length;j.length===s||(0,A.w)(j),++p){o=j[p]
for(n=0;n<3;++n){m=$.ux[n]
if(k.h(0,m)==null)k.j(0,m,0)
l=k.h(0,m)
l.toString
if(l>=m.gcf()||!B.a.S(m.gbA(),q))continue
if(r.K()<=m.gc2()&&m.dP(0,a,o)){l=k.h(0,m)
l.toString
k.j(0,m,l+1)
break}}}},
h4(a){var s,r,q=this.a,p=a.b,o=p.b,n=q.R(o-1)+1,m=n>o/2?-1:1,l=new A.jM(a)
for(p=p.a,s=n,r=0;r<p;++r){l.$1(new A.d(r,s))
l.$1(new A.d(r,s+1))
l.$1(new A.d(r,s-1))
s+=q.hp()?m:0}}}
A.jN.prototype={
$1(a){var s=A.b([],t.I)
return new A.cd(B.G,B.j,s)},
$S:20}
A.jO.prototype={
$1(a){return t.v.a(a).e},
$S:59}
A.jP.prototype={
$0(){return B.a.gc9(this.a.y)},
$S:72}
A.jM.prototype={
$1(a){var s=this.a,r=s.b
if(r.bk(a)){r.j(0,a,B.j)
s.c.j(0,a,1)}},
$S:61}
A.eM.prototype={
gm(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.kb.prototype={
dT(){var s,r,q,p,o,n=A.b([],t.h)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.w)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.k(n,o)}return n}}
A.ae.prototype={
l(a){return"Room{"+J.aw(this.a)+"; "+this.d.l(0)+"}"}}
A.fX.prototype={
dE(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.b([a],k),i=A.b([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.a(j,-1)
o=j.pop()
if(q.S(0,o))continue
q.k(0,o)
B.a.k(i,o)
for(n=0;n<8;++n){m=A.Z(o,B.b1[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.S(0,m)&&k.h(0,m)===B.j)B.a.k(j,m)}}B.a.k(this.b,i)}}
A.h6.prototype={
di(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.aa)s=B.Z
else if(a instanceof A.a9)s=B.X
else s=a instanceof A.aX?B.Y:B.aa
B.a.k(r.a,a)
B.a.k(r.b,s)
B.a.k(r.c,b)
r.d+=b},
dh(a){return this.di(a,10)},
hu(a){var s,r,q,p={},o=p.a=0,n=A.nJ(this.c.length,new A.kY(p,this),t.R),m=a.K()
for(s=n.length,r=m>-1;o<s;++o){q=n[o]
if(r&&m<=q){s=this.a
if(!(o<s.length))return A.a(s,o)
return A.ek(s[o])}}throw A.c(A.am(""))},
eh(a){var s,r,q=B.a.hk(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.a(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
eg(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.a(r,q)
p=r[q]
if(p===0)return
B.a.j(r,q,p-2)
this.d-=2}}}
A.kY.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.a(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:63}
A.lo.prototype={}
A.kT.prototype={
e8(a,b,c){var s,r,q
t.mw.a(a)
s=new A.h6(A.b([],t.hf),A.b([],t.lB),A.b([],t.t))
r=s.gfS()
new A.b1(B.h0,t.ei.a(new A.kU()),t.kL).J(0,r)
new A.b1(B.fW,t.eU.a(new A.kV()),t.eo).J(0,r)
new A.b1(B.h1,t.hZ.a(new A.kW()),t.au).J(0,r)
new A.b1(B.fS,t.g9.a(new A.kX()),t.b1).J(0,r)
s.dh(B.bo)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.w)(a),++q)this.f3(s,a[q],b)},
f3(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.aN(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.G
break}r=j.length
if(r!==0){r=l.R(r)
if(!(r>=0&&r<j.length))return A.a(j,r)
s=j[r]}else s=k.h(m,l.R(k.gm(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.M||q===B.w
else r=!1
if(r)break;++i}if(s.n(0,B.G))return
p=a.hu(l)
n=p.b
if(!J.a_(n,B.bo)){a.eh(n)
a.eg(p.c)
o.j(0,s,p)}}}
A.kU.prototype={
$1(a){return t.bB.a(a).b<=1000},
$S:64}
A.kV.prototype={
$1(a){return t.li.a(a).f<=1000},
$S:65}
A.kW.prototype={
$1(a){return t.kB.a(a).r<=1000},
$S:66}
A.kX.prototype={
$1(a){return t.lE.a(a).c<=1000},
$S:67}
A.lt.prototype={
aq(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
eb(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
for(s=0;s<b0;++s)for(r=s*0.1,q=0;q<b1;++q){p=q*b0+s
o=q*0.1
n=B.b.aE(r)&255
m=B.b.aE(o)&255
l=B.b.aE(0.3)&255
k=r-Math.floor(r)
j=o-Math.floor(o)
i=0.3-Math.floor(0.3)
h=k*k*k*(k*(k*6-15)+10)
g=j*j*j*(j*(j*6-15)+10)
o=$.q8()
f=o.length
if(!(n<f))return A.a(o,n)
e=o[n]+m
if(!(e<f))return A.a(o,e)
d=o[e]+l
c=e+1
if(!(c<f))return A.a(o,c)
b=o[c]+l
c=n+1
if(!(c<f))return A.a(o,c)
a=o[c]+m
if(!(a<f))return A.a(o,a)
a0=o[a]+l
c=a+1
if(!(c<f))return A.a(o,c)
a1=o[c]+l
if(!(d<f))return A.a(o,d)
c=a8.aq(0,o[d],k,j,i)
if(!(a0<f))return A.a(o,a0)
a2=k-1
c+=h*(a8.aq(0,o[a0],a2,j,i)-c)
if(!(b<f))return A.a(o,b)
a3=j-1
a4=a8.aq(0,o[b],k,a3,i)
if(!(a1<f))return A.a(o,a1)
c+=g*(a4+h*(a8.aq(0,o[a1],a2,a3,i)-a4)-c)
a4=d+1
if(!(a4<f))return A.a(o,a4)
a5=i-1
a4=a8.aq(0,o[a4],k,j,a5)
a6=a0+1
if(!(a6<f))return A.a(o,a6)
a4+=h*(a8.aq(0,o[a6],a2,j,a5)-a4)
a6=b+1
if(!(a6<f))return A.a(o,a6)
a6=a8.aq(0,o[a6],k,a3,a5)
a7=a1+1
if(!(a7<f))return A.a(o,a7)
a5=a8.aq(0,o[a7],a2,a3,a5)
if(!(p<4000))return A.a(a9,p)
a9[p]=(c+i*i*i*(i*(i*6-15)+10)*(a4+g*(a6+h*(a5-a6)-a4)-c)+1)/2}}}
A.ca.prototype={
l(a){return"RuinOrientation."+this.b}}
A.eF.prototype={
l(a){return"RoomSizeKind."+this.b}}
A.lE.prototype={
ec(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.R(5)
if(!(a3>=0&&a3<5))return A.a(B.bH,a3)
s=B.bH[a3]
r=a1.cz(B.bU)
q=a1.fg(s)
p=A.qU(a1.dv(a4,r,new A.d(B.b.B(Math.max(1,q.a-r.a/2)),B.b.B(Math.max(1,q.b-A.cL(r)/2)))))
a3=a4.y
B.a.k(a3,p)
for(o=t.q,n=0;n<2000;){m=new A.d(a2.R(98)+1,a2.R(38)+1)
l=[B.aN,B.aN,B.aN,B.bT]
k=a2.R(4)
if(!(k>=0&&k<4))return A.a(l,k)
r=a1.cz(l[k])
if(!a1.hF(a4,r,m)){l=a1.dv(a4,r,m)
B.a.k(a3,new A.ae(l,A.b([],o),A.b([],o),A.kc(l)))}else ++n}for(a2=a1.b,o=a4.d,l=a4.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.d(j,i)
o.T(0,B.aR,j,i)
if(!a2.S(0,h))l.j(0,h,B.c)}g=A.ac(t.j,t.v)
for(a2=a3.length,k=a4.x,f=k.a,e=k.b,d=t.h,c=0;c<a3.length;a3.length===a2||(0,A.w)(a3),++c){b=a3[c]
B.a.k(f,b)
e.j(0,b,A.b([],d))
for(a=J.ak(b.a);a.p();)g.j(0,a.gt(a),b)}a1.cp(p,a4,g,k)
for(a2=k.dT(),k=a2.length,c=0;c<a2.length;a2.length===k||(0,A.w)(a2),++c){b=a2[c]
B.a.A(a3,b)
for(f=J.ak(b.a);f.p();)l.j(0,f.gt(f),B.c)}A.pN(a3,a4)
for(a2=o.c,a0=0;a0<4000;++a0)B.a.j(a2,a0,B.aR)},
cz(a){var s
switch(a){case B.aN:s=this.a
return new A.eE(s.R(5)+5,s.R(5)+5)
case B.bT:s=this.a
return new A.eE(s.R(10)+9,s.R(10)+9)
case B.bU:s=this.a
return new A.eE(s.R(10)+20,s.R(10)+20)}},
fg(a){switch(a){case B.bV:return new A.d(50,10)
case B.bW:return new A.d(50,30)
case B.bX:return new A.d(75,20)
case B.bY:return new A.d(25,20)
case B.bZ:return new A.d(50,20)}},
dv(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.b([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.d(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.k(0,d)
r.j(0,d,f?B.c:B.j)
if(!f)B.a.k(a,d)}return a},
hF(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.d(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.c||n.S(0,i))return!0}return!1}}
A.eE.prototype={}
A.lM.prototype={
fc(a){var s,r,q=a.a.a===B.J?B.b8:B.hH
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
ea(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.fc(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.K()>0.6)r.j(0,new A.d(q,p),B.c)
new A.fB(b8).cw(10)
o=A.bw(t.j)
n=new A.fX(b8,A.b([],t.do),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.d(k,j)
if(o.S(0,i)||r.h(0,i)===B.c)continue
n.dE(i)}o=n.b
B.a.b0(o,new A.lN())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.w)(h),++f)r.j(0,h[f],B.c)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.c){B.a.j(e,q,B.ah)
B.a.j(o,q,B.j)}$label0$1:for(o=b8.y,e=t.q,d=b8.d,c=0;c<3;){b=s.R(3)+5
a=s.R(3)+5
q=s.R(100-b)
p=s.R(40-a)
for(a0=q-1,a1=q+b,a2=a1+1,a3=p-1,a4=p+a,a5=a4+1;a0<a2;++a0)for(a6=a0>=0,a7=a0<m,a8=a3;a8<a5;++a8){i=new A.d(a0,a8)
if(!(a6&&a8>=0&&a7&&a8<l))continue $label0$1
if(g.h(0,i)!==B.w||r.h(0,i)!==B.j)continue $label0$1}a9=A.b([],e)
b0=A.b([],e)
for(a2=a1-1,a5=a4-1,a0=q;a0<a1;++a0)for(a6=a0-q!==0,a7=a0!==a2,a3=p;a3<a4;++a3){i=new A.d(a0,a3)
if(!a6||!a7||a3-p===0||a3===a5){r.j(0,i,B.c)
B.a.k(a9,i)}else B.a.k(b0,i)
d.j(0,i,B.aR)}b1=new A.lO(b8)
B.a.bx(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.G
break}b3=a9[f]
b4=A.Z(b3,B.m)
b5=A.Z(b3,B.k)
b6=A.Z(b3,B.o)
b7=A.Z(b3,B.n)
if(A.U(b1.$1(b4))&&A.U(b1.$1(b5))){b2=b3
break}if(A.U(b1.$1(b6))&&A.U(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.w)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.j)
g.j(0,b2,B.p)
B.a.k(o,new A.ae(b0,A.b([],e),A.b([],e),A.kc(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.w)(o),++f)A.dU(o[f],$.nt(),b8)}}
A.lN.prototype={
$2(a,b){var s=t.i8
s.a(a)
return J.aw(s.a(b))-J.aw(a)},
$S:68}
A.lO.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.j&&s.e.h(0,a)===B.w},
$S:12}
A.bW.prototype={}
A.fz.prototype={
gc2(){return 0.5},
gbA(){return B.fV},
gcf(){return 2},
dP(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k.h(0,c)===B.j){s=b.c.h(0,c)
if(typeof s!=="number")return s.ab()
s=s>0}else s=!0
if(s)return!1
for(s=k.a,r=k.b,q=b.c,p=c,o=1;o<6;){p=A.Z(p,B.k)
n=p.a
if(n>=0){m=p.b
n=m>=0&&n<s&&m<r}else n=!1
if(!n)return!1
if(k.h(0,p)!==B.j||J.a_(q.h(0,p),0))break;++o}if(o<3)return!1
k=b.e
k.j(0,c,B.a6)
for(p=c,l=0;l<o;++l){p=A.Z(p,B.k)
k.j(0,p,B.a6)
q.j(0,p,0)}return!0}}
A.hL.prototype={
dP(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=b.b,r=c.a,q=c.b,p=s.a,o=s.b,n=b.c,m=0;m<3;++m)for(l=q+m,k=l>=0,j=l<o,i=0;i<3;++i){h=r+i
g=new A.d(h,l)
if(!(h>=0&&k&&h<p&&j))return!1
if(s.h(0,g)===B.j){h=n.h(0,g)
if(typeof h!=="number")return h.ab()
h=h>0}else h=!0
if(h)return!1}s=b.e
s.j(0,c,B.E)
s.j(0,c.v(0,new A.d(1,0)),B.E)
s.j(0,c.v(0,new A.d(2,0)),B.E)
s.j(0,c.v(0,new A.d(0,1)),B.E)
s.j(0,c.v(0,new A.d(1,1)),this.ge5())
s.j(0,c.v(0,new A.d(2,1)),B.E)
s.j(0,c.v(0,new A.d(0,2)),B.E)
s.j(0,c.v(0,new A.d(2,2)),B.E)
for(p=b.y,o=p.length,f=0;f<p.length;p.length===o||(0,A.w)(p),++f)if(J.qE(p[f].a,c))break
for(p=s.a,o=s.b,i=-8;i<8;++i)for(n=i+r,l=n<p,m=-8;m<8;++m){k=m+q
g=new A.d(n,k)
if(!(n>=0&&k>=0&&l&&k<o))continue
if(s.h(0,g)===B.F)s.j(0,g,B.w)}return!0}}
A.he.prototype={
gc2(){return 0.1},
gcf(){return 1},
ge5(){return B.a7},
gbA(){return A.b([B.x,B.r,B.D,B.y],t.V)}}
A.h2.prototype={
gc2(){return 0.1},
gcf(){return 1},
ge5(){return B.a8},
gbA(){return A.b([B.x,B.r,B.D,B.y],t.V)}}
A.m2.prototype={
eA(a){var s=t.jV.a(new A.m3(this))
t.Z.a(null)
A.eV(a,"keydown",s,!1,t.mT)
A.eV(a,"mousemove",t.b9.a(new A.m4(this)),!1,t.gD)}}
A.m3.prototype={
$1(a){var s,r,q,p,o
t.mT.a(a)
s=a.key
if(s==null)s=""
r=a.metaKey
q=a.ctrlKey
p=new A.ab(s,r,a.shiftKey,q)
s=this.a
r=s.a
r=r==null?null:r.c.ah(p)
if(r===!0){a.preventDefault()
return}o=$.qg().h(0,p)
if(o!=null){a.preventDefault()
s.b.k(0,o)
return}},
$S:69}
A.m4.prototype={
$1(a){var s,r
t.gD.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
this.a.c.k(0,A.b([s,r],t.n))},
$S:70}
A.ab.prototype={
n(a,b){var s=this
if(b==null)return!1
return b instanceof A.ab&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gF(a){var s=this
return A.cK(s.a,s.b,s.c,s.d)}}
A.a8.prototype={
l(a){return"InputCommand."+this.b}};(function aliases(){var s=J.dg.prototype
s.eo=s.l
s=J.cC.prototype
s.eu=s.l
s=A.aT.prototype
s.ep=s.dH
s.eq=s.dI
s.es=s.dK
s.er=s.dJ
s=A.a7.prototype
s.aG=s.ah})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u
var k
s(k=J.p.prototype,"gfQ","k",28)
s(k,"gbo","A",16)
r(A,"tt","r4",15)
r(A,"tN","rE",7)
r(A,"tO","rF",7)
r(A,"tP","rG",7)
q(A,"pw","tC",0)
p(A,"tQ","tw",9)
q(A,"pv","tv",0)
o(A.dO.prototype,"gh0",1,0,null,["$1","$0"],["ag","aS"],48,0,0)
n(A.I.prototype,"geO","a7",9)
m(A.dK.prototype,"gfw","fz",0)
p(A,"tU","tb",73)
r(A,"tV","tc",15)
p(A,"tL","rC",74)
p(A,"tJ","re",75)
r(A,"tK","rB",76)
p(A,"tI","rd",77)
p(A,"tH","qT",78)
l(k=A.h0.prototype,"ghf","cb",34)
l(k,"gd_","fn",11)
r(A,"px","tY",79)
p(A,"up","tB",80)
s(A.eI.prototype,"gbo","A",43)
r(A,"uv","o6",81)
r(A,"uu","u0",82)
m(A.es.prototype,"gfj","fk",0)
o(A.h6.prototype,"gfS",0,1,null,["$2","$1"],["di","dh"],62,0,0)
p(A,"uw","u_",60)
r(A,"pI","uo",56)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.nF,J.dg,J.e0,A.P,A.lF,A.i,A.bQ,A.a1,A.ay,A.db,A.cs,A.lY,A.lq,A.ed,A.f6,A.A,A.l9,A.er,A.mf,A.bh,A.iC,A.fc,A.fb,A.eO,A.dM,A.cj,A.e2,A.cb,A.dI,A.eR,A.dJ,A.c_,A.I,A.il,A.aF,A.f7,A.im,A.it,A.ci,A.dK,A.j1,A.fg,A.fh,A.iJ,A.cS,A.l,A.eG,A.ct,A.ad,A.mg,A.hv,A.eJ,A.iz,A.dm,A.a5,A.j4,A.hV,A.k2,A.nB,A.r,A.ee,A.m8,A.lp,A.iG,A.dz,A.jQ,A.h4,A.cT,A.e,A.ag,A.M,A.bG,A.H,A.O,A.jv,A.c7,A.jx,A.ls,A.ao,A.lP,A.br,A.jX,A.jR,A.h0,A.e_,A.ai,A.aa,A.k_,A.a9,A.jz,A.aX,A.ax,A.dY,A.c3,A.d5,A.cw,A.cu,A.c5,A.dA,A.aB,A.cd,A.bP,A.dk,A.d,A.le,A.bc,A.aD,A.ke,A.kd,A.d1,A.x,A.kg,A.j8,A.m1,A.ly,A.dv,A.ar,A.bS,A.lr,A.ef,A.hy,A.kh,A.fM,A.Y,A.u,A.io,A.jd,A.kO,A.lC,A.d7,A.jH,A.ln,A.hq,A.hN,A.Q,A.j,A.lg,A.hF,A.mD,A.aC,A.a7,A.hf,A.bM,A.fZ,A.bs,A.ij,A.hQ,A.m7,A.k8,A.fB,A.kM,A.b5,A.cP,A.bk,A.je,A.eh,A.jL,A.eM,A.kb,A.ae,A.fX,A.h6,A.lo,A.kT,A.lt,A.eE,A.lM,A.bW,A.m2,A.ab])
q(J.dg,[J.em,J.eo,J.l1,J.p,J.dh,J.cA,A.hk,A.cJ])
q(J.l1,[J.cC,A.f,A.jw,A.fw,A.bK,A.L,A.is,A.bb,A.k5,A.c6,A.iu,A.ea,A.iw,A.k7,A.k,A.iA,A.aS,A.kS,A.iE,A.lc,A.lh,A.iK,A.iL,A.aU,A.iM,A.iO,A.aW,A.iS,A.iV,A.aY,A.iW,A.aZ,A.iZ,A.at,A.j6,A.lW,A.b_,A.j9,A.lX,A.m0,A.jh,A.jj,A.jl,A.jn,A.jp,A.b6,A.iH,A.b7,A.iQ,A.lu,A.j2,A.b9,A.jb,A.bo,A.fr,A.ip,A.fA,A.h_,A.hC,A.du,A.bU,A.i7,A.id])
q(J.cC,[J.hA,J.dC,J.bN])
r(J.l0,J.p)
q(J.dh,[J.en,J.h8])
q(A.P,[A.cB,A.ce,A.h9,A.i9,A.hI,A.e1,A.iy,A.hs,A.bI,A.ib,A.i8,A.bj,A.fH,A.fK])
q(A.i,[A.o,A.cE,A.b1,A.el,A.bT,A.mH])
q(A.o,[A.bg,A.eq])
q(A.bg,[A.eK,A.cF])
r(A.ec,A.cE)
q(A.a1,[A.eu,A.eN])
q(A.db,[A.e6,A.af])
q(A.cs,[A.kL,A.fD,A.fE,A.hY,A.l3,A.mX,A.mZ,A.mc,A.mb,A.mJ,A.kj,A.mm,A.mu,A.lK,A.mB,A.mw,A.lf,A.mh,A.nf,A.ng,A.jF,A.jG,A.l4,A.l6,A.m5,A.lR,A.lT,A.lV,A.jY,A.kn,A.kl,A.ka,A.kf,A.lk,A.ll,A.jD,A.jC,A.lI,A.lw,A.kQ,A.mx,A.k6,A.lG,A.n1,A.lH,A.n0,A.m_,A.kB,A.kq,A.ko,A.kD,A.kw,A.ku,A.kz,A.kx,A.kI,A.mQ,A.k9,A.kN,A.jN,A.jO,A.jM,A.kY,A.kU,A.kV,A.kW,A.kX,A.lO,A.m3,A.m4])
r(A.eB,A.ce)
q(A.hY,[A.hS,A.d9])
r(A.ik,A.e1)
r(A.et,A.A)
r(A.aT,A.et)
q(A.fE,[A.l2,A.mY,A.mK,A.mP,A.kk,A.mn,A.la,A.ld,A.li,A.lj,A.lD,A.lJ,A.ma,A.jI,A.lS,A.lQ,A.lU,A.jV,A.jT,A.jU,A.ne,A.n7,A.nb,A.n6,A.n8,A.nc,A.nd,A.na,A.n9,A.n5,A.nk,A.nj,A.lN])
r(A.dp,A.cJ)
q(A.dp,[A.f_,A.f1])
r(A.f0,A.f_)
r(A.cI,A.f0)
r(A.f2,A.f1)
r(A.ew,A.f2)
r(A.ev,A.cI)
q(A.ew,[A.hl,A.hm,A.hn,A.ho,A.hp,A.ex,A.ey])
r(A.fd,A.iy)
q(A.fD,[A.md,A.me,A.mF,A.mE,A.ki,A.mi,A.mq,A.mo,A.mk,A.mp,A.mj,A.mt,A.ms,A.mr,A.lL,A.mC,A.mz,A.mN,A.mA,A.l5,A.l7,A.m6,A.nn,A.nm,A.ni,A.nh,A.np,A.no,A.nr,A.nq,A.mS,A.mR,A.km,A.lm,A.jE,A.jJ,A.lx,A.kR,A.my,A.kJ,A.kA,A.kp,A.ks,A.kK,A.kr,A.kG,A.kF,A.kC,A.kE,A.kv,A.kt,A.ky,A.kH,A.jP])
r(A.f8,A.el)
q(A.cb,[A.dN,A.eT])
r(A.bB,A.dN)
r(A.eQ,A.bB)
r(A.cg,A.dI)
r(A.bY,A.cg)
r(A.eP,A.eR)
q(A.dJ,[A.aj,A.dO])
r(A.dH,A.f7)
r(A.bZ,A.it)
r(A.bC,A.ci)
r(A.iU,A.fg)
q(A.aT,[A.eX,A.eW])
r(A.f3,A.fh)
r(A.cR,A.f3)
q(A.bI,[A.dt,A.h5])
q(A.f,[A.z,A.fV,A.cz,A.aE,A.f4,A.aG,A.an,A.f9,A.ie,A.dG,A.J,A.e3,A.ft])
q(A.z,[A.ah,A.bq,A.bL])
q(A.ah,[A.q,A.n])
q(A.q,[A.fp,A.fq,A.fx,A.cq,A.fY,A.df,A.cH,A.hJ])
r(A.k1,A.bK)
r(A.e8,A.is)
q(A.bb,[A.k3,A.k4])
r(A.iv,A.iu)
r(A.e9,A.iv)
r(A.ix,A.iw)
r(A.fO,A.ix)
r(A.aR,A.fw)
r(A.iB,A.iA)
r(A.fU,A.iB)
r(A.iF,A.iE)
r(A.cy,A.iF)
r(A.ej,A.cz)
r(A.bA,A.k)
q(A.bA,[A.bO,A.aV])
r(A.hg,A.iK)
r(A.hh,A.iL)
r(A.iN,A.iM)
r(A.hi,A.iN)
r(A.iP,A.iO)
r(A.eA,A.iP)
r(A.iT,A.iS)
r(A.hB,A.iT)
r(A.hH,A.iV)
r(A.f5,A.f4)
r(A.hO,A.f5)
r(A.iX,A.iW)
r(A.hP,A.iX)
r(A.hT,A.iZ)
r(A.j7,A.j6)
r(A.i0,A.j7)
r(A.fa,A.f9)
r(A.i1,A.fa)
r(A.ja,A.j9)
r(A.i4,A.ja)
r(A.dD,A.cH)
r(A.ji,A.jh)
r(A.ir,A.ji)
r(A.eS,A.ea)
r(A.jk,A.jj)
r(A.iD,A.jk)
r(A.jm,A.jl)
r(A.eZ,A.jm)
r(A.jo,A.jn)
r(A.iY,A.jo)
r(A.jq,A.jp)
r(A.j5,A.jq)
r(A.cQ,A.eT)
r(A.eU,A.aF)
r(A.m9,A.m8)
r(A.iI,A.iH)
r(A.ha,A.iI)
r(A.iR,A.iQ)
r(A.ht,A.iR)
r(A.j3,A.j2)
r(A.hW,A.j3)
r(A.jc,A.jb)
r(A.i5,A.jc)
q(A.J,[A.bJ,A.de])
r(A.d6,A.bJ)
q(A.e3,[A.cp,A.hu])
r(A.fs,A.ip)
q(A.H,[A.dF,A.dj,A.dE,A.di,A.dd,A.ez,A.eD,A.bx,A.dy,A.hb,A.eL,A.d4,A.hR,A.dc,A.d8,A.ia,A.eC,A.hD,A.h1,A.eb,A.ic,A.h3,A.hd,A.eY,A.i3])
q(A.mg,[A.fv,A.jZ,A.cN,A.eH,A.bv,A.kP,A.bt,A.bu,A.ig,A.k0,A.e7,A.jy,A.d3,A.cv,A.fI,A.dB,A.da,A.hz,A.cM,A.cD,A.bp,A.lb,A.X,A.aP,A.dn,A.cr,A.bd,A.cO,A.ca,A.eF,A.a8])
r(A.K,A.e)
q(A.K,[A.bR,A.cG])
q(A.aD,[A.fP,A.fR,A.fW,A.ep,A.hK,A.eI,A.hZ,A.i_,A.i6,A.fT,A.ih])
q(A.d1,[A.aQ,A.iq])
r(A.l_,A.jH)
r(A.h7,A.d7)
q(A.a7,[A.b8,A.fF,A.fu,A.hw,A.e4,A.dw,A.d0,A.eg,A.fy,A.hG,A.hX,A.es,A.hE,A.fN])
q(A.kM,[A.jS,A.lE])
q(A.b5,[A.ii,A.b3,A.dr])
q(A.ii,[A.hr,A.fC,A.fo,A.fJ,A.dZ,A.dq])
q(A.bW,[A.fz,A.hL])
q(A.hL,[A.he,A.h2])
s(A.f_,A.l)
s(A.f0,A.ay)
s(A.f1,A.l)
s(A.f2,A.ay)
s(A.dH,A.im)
s(A.fh,A.eG)
s(A.is,A.k2)
s(A.iu,A.l)
s(A.iv,A.r)
s(A.iw,A.l)
s(A.ix,A.r)
s(A.iA,A.l)
s(A.iB,A.r)
s(A.iE,A.l)
s(A.iF,A.r)
s(A.iK,A.A)
s(A.iL,A.A)
s(A.iM,A.l)
s(A.iN,A.r)
s(A.iO,A.l)
s(A.iP,A.r)
s(A.iS,A.l)
s(A.iT,A.r)
s(A.iV,A.A)
s(A.f4,A.l)
s(A.f5,A.r)
s(A.iW,A.l)
s(A.iX,A.r)
s(A.iZ,A.A)
s(A.j6,A.l)
s(A.j7,A.r)
s(A.f9,A.l)
s(A.fa,A.r)
s(A.j9,A.l)
s(A.ja,A.r)
s(A.jh,A.l)
s(A.ji,A.r)
s(A.jj,A.l)
s(A.jk,A.r)
s(A.jl,A.l)
s(A.jm,A.r)
s(A.jn,A.l)
s(A.jo,A.r)
s(A.jp,A.l)
s(A.jq,A.r)
s(A.iH,A.l)
s(A.iI,A.r)
s(A.iQ,A.l)
s(A.iR,A.r)
s(A.j2,A.l)
s(A.j3,A.r)
s(A.jb,A.l)
s(A.jc,A.r)
s(A.ip,A.A)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",S:"double",V:"num",t:"String",C:"bool",a5:"Null",m:"List"},mangledNames:{},types:["~()","~(d,eh)","~(aQ)","Q()","m<ai>()","~(@)","~(t,@)","~(~())","a5()","~(v,bi)","~(k)","~(ad)","C(d)","~(t)","C(br)","h(v?)","C(v?)","a5(@)","C(c5)","a5(bU)","cd(h)","C(h,h)","~(m<S>)","~(bo)","~(c6)","@(@)","~(@,@)","a5(@,bi)","~(v?)","C(t,br)","~(h,@)","O(O,O)","h(d,d)","@(t)","al<~>(a8)","~(H)","al<~>()","C(nA)","I<@>(@)","~(v?,v?)","~(i2)","d8()","a5(v,bi)","~(Q)","a5(~())","~(ai)","~(bG)","b8(bG)","~([v?])","~(bM)","b8(v?)","~(t,t)","C(c7)","h(h,h)","h(d)","C(@)","~(V)","h(bk,bk)","h(ae,ae)","C(ae)","h(v?,v?)","~(d)","~(v[h])","S(h)","C(aa)","C(a9)","C(aX)","C(ax)","h(m<d>,m<d>)","~(bO)","~(aV)","@(@,@)","ae()","C(v?,v?)","dF(O,d)","dj(O,O)","dE(O)","di(O,d)","dd(O,d)","bc(ai)","h(Q,Q)","b8(ai)","b8(bM)","@(@,t)","al<~>(k)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.rY(v.typeUniverse,JSON.parse('{"hA":"cC","dC":"cC","bN":"cC","uA":"k","uQ":"k","uC":"J","uK":"bJ","uy":"n","uR":"n","uB":"f","v1":"f","v4":"f","uE":"q","v5":"z","uP":"z","uS":"bL","v3":"aV","vi":"an","uJ":"bA","uG":"bq","v7":"bq","uU":"cz","uT":"cy","uL":"L","uM":"at","uD":"cH","v0":"cI","v_":"cJ","em":{"C":[]},"eo":{"a5":[]},"p":{"m":["1"],"o":["1"],"i":["1"]},"l0":{"p":["1"],"m":["1"],"o":["1"],"i":["1"]},"e0":{"a1":["1"]},"dh":{"S":[],"V":[],"aq":["V"]},"en":{"S":[],"h":[],"V":[],"aq":["V"]},"h8":{"S":[],"V":[],"aq":["V"]},"cA":{"t":[],"aq":["t"]},"cB":{"P":[]},"o":{"i":["1"]},"bg":{"o":["1"],"i":["1"]},"eK":{"bg":["1"],"o":["1"],"i":["1"],"i.E":"1","bg.E":"1"},"bQ":{"a1":["1"]},"cE":{"i":["2"],"i.E":"2"},"ec":{"cE":["1","2"],"o":["2"],"i":["2"],"i.E":"2"},"eu":{"a1":["2"]},"cF":{"bg":["2"],"o":["2"],"i":["2"],"i.E":"2","bg.E":"2"},"b1":{"i":["1"],"i.E":"1"},"eN":{"a1":["1"]},"db":{"a3":["1","2"]},"e6":{"db":["1","2"],"a3":["1","2"]},"af":{"db":["1","2"],"a3":["1","2"]},"eB":{"ce":[],"P":[]},"h9":{"P":[]},"i9":{"P":[]},"f6":{"bi":[]},"cs":{"cx":[]},"fD":{"cx":[]},"fE":{"cx":[]},"hY":{"cx":[]},"hS":{"cx":[]},"d9":{"cx":[]},"hI":{"P":[]},"ik":{"P":[]},"aT":{"A":["1","2"],"l8":["1","2"],"a3":["1","2"],"A.K":"1","A.V":"2"},"eq":{"o":["1"],"i":["1"],"i.E":"1"},"er":{"a1":["1"]},"hk":{"ov":[]},"cJ":{"b0":[]},"dp":{"D":["1"],"b0":[]},"cI":{"l":["S"],"D":["S"],"m":["S"],"o":["S"],"b0":[],"i":["S"],"ay":["S"],"l.E":"S"},"ew":{"l":["h"],"D":["h"],"m":["h"],"o":["h"],"b0":[],"i":["h"],"ay":["h"]},"ev":{"l":["S"],"nD":[],"D":["S"],"m":["S"],"o":["S"],"b0":[],"i":["S"],"ay":["S"],"l.E":"S"},"hl":{"l":["h"],"D":["h"],"m":["h"],"o":["h"],"b0":[],"i":["h"],"ay":["h"],"l.E":"h"},"hm":{"l":["h"],"D":["h"],"m":["h"],"o":["h"],"b0":[],"i":["h"],"ay":["h"],"l.E":"h"},"hn":{"l":["h"],"D":["h"],"m":["h"],"o":["h"],"b0":[],"i":["h"],"ay":["h"],"l.E":"h"},"ho":{"l":["h"],"D":["h"],"m":["h"],"o":["h"],"b0":[],"i":["h"],"ay":["h"],"l.E":"h"},"hp":{"l":["h"],"D":["h"],"m":["h"],"o":["h"],"b0":[],"i":["h"],"ay":["h"],"l.E":"h"},"ex":{"l":["h"],"D":["h"],"m":["h"],"o":["h"],"b0":[],"i":["h"],"ay":["h"],"l.E":"h"},"ey":{"l":["h"],"rz":[],"D":["h"],"m":["h"],"o":["h"],"b0":[],"i":["h"],"ay":["h"],"l.E":"h"},"fc":{"p5":[]},"iy":{"P":[]},"fd":{"ce":[],"P":[]},"I":{"al":["1"]},"fb":{"i2":[]},"eO":{"fG":["1"]},"cj":{"a1":["1"]},"f8":{"i":["1"],"i.E":"1"},"e2":{"P":[]},"eQ":{"bB":["1"],"dN":["1"],"cb":["1"]},"bY":{"cg":["1"],"dI":["1"],"aF":["1"],"bl":["1"]},"eR":{"hU":["1"],"j0":["1"],"bl":["1"]},"eP":{"eR":["1"],"hU":["1"],"j0":["1"],"bl":["1"]},"dJ":{"fG":["1"]},"aj":{"dJ":["1"],"fG":["1"]},"dO":{"dJ":["1"],"fG":["1"]},"f7":{"hU":["1"],"j0":["1"],"bl":["1"]},"dH":{"im":["1"],"f7":["1"],"hU":["1"],"j0":["1"],"bl":["1"]},"bB":{"dN":["1"],"cb":["1"]},"cg":{"dI":["1"],"aF":["1"],"bl":["1"]},"dI":{"aF":["1"],"bl":["1"]},"dN":{"cb":["1"]},"bZ":{"it":["1"]},"bC":{"ci":["1"]},"dK":{"aF":["1"]},"fg":{"p7":[]},"iU":{"fg":[],"p7":[]},"eX":{"aT":["1","2"],"A":["1","2"],"l8":["1","2"],"a3":["1","2"],"A.K":"1","A.V":"2"},"eW":{"aT":["1","2"],"A":["1","2"],"l8":["1","2"],"a3":["1","2"],"A.K":"1","A.V":"2"},"cR":{"eG":["1"],"oM":["1"],"oX":["1"],"o":["1"],"i":["1"]},"cS":{"a1":["1"]},"el":{"i":["1"]},"et":{"A":["1","2"],"a3":["1","2"]},"A":{"a3":["1","2"]},"f3":{"eG":["1"],"oX":["1"],"o":["1"],"i":["1"]},"ct":{"aq":["ct"]},"S":{"V":[],"aq":["V"]},"ad":{"aq":["ad"]},"h":{"V":[],"aq":["V"]},"m":{"o":["1"],"i":["1"]},"V":{"aq":["V"]},"t":{"aq":["t"]},"e1":{"P":[]},"ce":{"P":[]},"hs":{"P":[]},"bI":{"P":[]},"dt":{"P":[]},"h5":{"P":[]},"ib":{"P":[]},"i8":{"P":[]},"bj":{"P":[]},"fH":{"P":[]},"hv":{"P":[]},"eJ":{"P":[]},"fK":{"P":[]},"j4":{"bi":[]},"bO":{"k":[]},"aV":{"k":[]},"z":{"f":[]},"aE":{"f":[]},"aG":{"f":[]},"an":{"f":[]},"q":{"ah":[],"z":[],"f":[]},"fp":{"ah":[],"z":[],"f":[]},"fq":{"ah":[],"z":[],"f":[]},"fx":{"ah":[],"z":[],"f":[]},"cq":{"ah":[],"z":[],"f":[]},"bq":{"z":[],"f":[]},"bL":{"z":[],"f":[]},"e9":{"l":["by<V>"],"r":["by<V>"],"m":["by<V>"],"D":["by<V>"],"o":["by<V>"],"i":["by<V>"],"r.E":"by<V>","l.E":"by<V>"},"ea":{"by":["V"]},"fO":{"l":["t"],"r":["t"],"m":["t"],"D":["t"],"o":["t"],"i":["t"],"r.E":"t","l.E":"t"},"ah":{"z":[],"f":[]},"fU":{"l":["aR"],"r":["aR"],"m":["aR"],"D":["aR"],"o":["aR"],"i":["aR"],"r.E":"aR","l.E":"aR"},"fV":{"f":[]},"fY":{"ah":[],"z":[],"f":[]},"cy":{"l":["z"],"r":["z"],"m":["z"],"D":["z"],"o":["z"],"i":["z"],"r.E":"z","l.E":"z"},"ej":{"f":[]},"cz":{"f":[]},"df":{"ah":[],"z":[],"f":[]},"cH":{"ah":[],"z":[],"f":[]},"hg":{"A":["t","@"],"a3":["t","@"],"A.K":"t","A.V":"@"},"hh":{"A":["t","@"],"a3":["t","@"],"A.K":"t","A.V":"@"},"hi":{"l":["aU"],"r":["aU"],"m":["aU"],"D":["aU"],"o":["aU"],"i":["aU"],"r.E":"aU","l.E":"aU"},"eA":{"l":["z"],"r":["z"],"m":["z"],"D":["z"],"o":["z"],"i":["z"],"r.E":"z","l.E":"z"},"hB":{"l":["aW"],"r":["aW"],"m":["aW"],"D":["aW"],"o":["aW"],"i":["aW"],"r.E":"aW","l.E":"aW"},"hH":{"A":["t","@"],"a3":["t","@"],"A.K":"t","A.V":"@"},"hJ":{"ah":[],"z":[],"f":[]},"hO":{"l":["aE"],"r":["aE"],"f":[],"m":["aE"],"D":["aE"],"o":["aE"],"i":["aE"],"r.E":"aE","l.E":"aE"},"hP":{"l":["aY"],"r":["aY"],"m":["aY"],"D":["aY"],"o":["aY"],"i":["aY"],"r.E":"aY","l.E":"aY"},"hT":{"A":["t","t"],"a3":["t","t"],"A.K":"t","A.V":"t"},"i0":{"l":["an"],"r":["an"],"m":["an"],"D":["an"],"o":["an"],"i":["an"],"r.E":"an","l.E":"an"},"i1":{"l":["aG"],"r":["aG"],"f":[],"m":["aG"],"D":["aG"],"o":["aG"],"i":["aG"],"r.E":"aG","l.E":"aG"},"i4":{"l":["b_"],"r":["b_"],"m":["b_"],"D":["b_"],"o":["b_"],"i":["b_"],"r.E":"b_","l.E":"b_"},"bA":{"k":[]},"dD":{"ah":[],"z":[],"f":[]},"ie":{"f":[]},"dG":{"f":[]},"ir":{"l":["L"],"r":["L"],"m":["L"],"D":["L"],"o":["L"],"i":["L"],"r.E":"L","l.E":"L"},"eS":{"by":["V"]},"iD":{"l":["aS?"],"r":["aS?"],"m":["aS?"],"D":["aS?"],"o":["aS?"],"i":["aS?"],"r.E":"aS?","l.E":"aS?"},"eZ":{"l":["z"],"r":["z"],"m":["z"],"D":["z"],"o":["z"],"i":["z"],"r.E":"z","l.E":"z"},"iY":{"l":["aZ"],"r":["aZ"],"m":["aZ"],"D":["aZ"],"o":["aZ"],"i":["aZ"],"r.E":"aZ","l.E":"aZ"},"j5":{"l":["at"],"r":["at"],"m":["at"],"D":["at"],"o":["at"],"i":["at"],"r.E":"at","l.E":"at"},"eT":{"cb":["1"]},"cQ":{"eT":["1"],"cb":["1"]},"eU":{"aF":["1"]},"ee":{"a1":["1"]},"iG":{"oS":[]},"ha":{"l":["b6"],"r":["b6"],"m":["b6"],"o":["b6"],"i":["b6"],"r.E":"b6","l.E":"b6"},"ht":{"l":["b7"],"r":["b7"],"m":["b7"],"o":["b7"],"i":["b7"],"r.E":"b7","l.E":"b7"},"hW":{"l":["t"],"r":["t"],"m":["t"],"o":["t"],"i":["t"],"r.E":"t","l.E":"t"},"n":{"ah":[],"z":[],"f":[]},"i5":{"l":["b9"],"r":["b9"],"m":["b9"],"o":["b9"],"i":["b9"],"r.E":"b9","l.E":"b9"},"d6":{"J":[],"f":[]},"cp":{"f":[]},"J":{"f":[]},"fs":{"A":["t","@"],"a3":["t","@"],"A.K":"t","A.V":"@"},"bJ":{"J":[],"f":[]},"ft":{"f":[]},"e3":{"f":[]},"de":{"J":[],"f":[]},"hu":{"f":[]},"bT":{"ow":[],"i":["t"],"i.E":"t"},"dz":{"a1":["t"]},"mH":{"i":["1"],"i.E":"1"},"cT":{"a1":["1"]},"dF":{"H":[]},"dj":{"H":[]},"dE":{"H":[]},"di":{"H":[]},"dd":{"H":[]},"O":{"ei":[]},"K":{"e":[]},"bR":{"K":["h"],"e":[],"K.T":"h"},"cG":{"K":["h"],"e":[],"K.T":"h"},"cd":{"ei":[]},"dk":{"ei":[]},"fP":{"aD":[]},"fR":{"aD":[]},"aQ":{"d1":[]},"d8":{"H":[]},"iq":{"d1":[]},"ez":{"H":[]},"eD":{"H":[]},"bx":{"H":[]},"dy":{"H":[]},"hb":{"H":[]},"eL":{"H":[]},"d4":{"H":[]},"hR":{"H":[]},"dc":{"H":[]},"ia":{"H":[]},"eC":{"H":[]},"hD":{"H":[]},"h1":{"H":[]},"eb":{"H":[]},"ic":{"H":[]},"h3":{"H":[]},"hd":{"H":[]},"eY":{"H":[]},"i3":{"H":[]},"fW":{"aD":[]},"ep":{"aD":[]},"bS":{"aq":["bS"]},"hK":{"aD":[]},"hq":{"d7":[]},"hN":{"rv":[]},"h7":{"d7":[]},"eI":{"aD":[]},"hZ":{"aD":[]},"i_":{"aD":[]},"b8":{"a7":[]},"i6":{"aD":[],"rc":[]},"fF":{"a7":[]},"fu":{"a7":[]},"hw":{"a7":[]},"e4":{"a7":[]},"dw":{"a7":[]},"d0":{"a7":[]},"eg":{"a7":[]},"fy":{"a7":[]},"hG":{"a7":[]},"hX":{"a7":[]},"es":{"a7":[]},"hE":{"a7":[]},"fN":{"a7":[]},"fT":{"aD":[]},"ih":{"aD":[]},"ii":{"b5":["d"]},"b3":{"b5":["1"]},"dr":{"b5":["1"]},"hr":{"b5":["d"]},"fC":{"b5":["d"]},"fo":{"b5":["d"]},"fJ":{"b5":["d"]},"dZ":{"b5":["d"]},"dq":{"b5":["d"]},"je":{"cP":[]},"fz":{"bW":[]},"hL":{"bW":[]},"he":{"bW":[]},"h2":{"bW":[]},"nD":{"m":["S"],"o":["S"],"i":["S"],"b0":[]}}'))
A.rX(v.typeUniverse,JSON.parse('{"o":1,"dp":1,"el":1,"et":2,"f3":1,"fh":1,"d0":1}'))
var u={S:" 0\x10000\xa0\x80\x10@P`p`p\xb1 0\x10000\xa0\x80\x10@P`p`p\xb0 0\x10000\xa0\x80\x11@P`p`p\xb0 1\x10011\xa0\x80\x10@P`p`p\xb0 1\x10111\xa1\x81\x10AQaqaq\xb0 1\x10011\xa0\x80\x10@Qapaq\xb0 1\x10011\xa0\x80\x10@Paq`p\xb0 1\x10011\xa0\x80\x10@P`q`p\xb0 \x91\x100\x811\xa0\x80\x10@P`p`p\xb0 1\x10011\xa0\x81\x10@P`p`p\xb0 1\x100111\x80\x10@P`p`p\xb0!1\x11111\xa1\x81\x11AQaqaq\xb1",M:'""""""""""""""""DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""3333s3#7333333339433333333333333CDDDDDDDDDDDDDDDDDDDDDDC433DDDDD4DDDDDDDDDDDDDDDDDD3CU33333333333333333333333333334T5333333333333333333333333333CCD3D33CD533333333333333333333333TEDTET53U5UE3333C33333333333333333333333333333CETUTDT5333333333333333333333333SUUUUUEUDDDDD43333433333333333333333333ET533E3333SDD3U3U4333343333C4333333333333CSD33343333333433333333333333333SUUUEDDDTE4333SDDSUSU\x94333343333C43333333333333333s333333333337333333333333wwwww73sw33sww7swwwwwss33373733s33333w33333\xa3\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xba\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xcb\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xec\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee>33333\xb3\xbb\xbb\xbb\xbb\xbb\xbb\xbb;3\xc3\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc334343C33333333333SET333333333333333EDTETD433333333CD33333333333333CD33333CDD4333333333333333333333333CDTDDDCTE43C4CD3C333333333333333D3C33333\x99\x99\x9933333DDDDD42333333333333333333CDDD4333333333333333333333333DDDD433334333C53333333333333333333333C33TEDCSUUU433333333S533333333333333333333333333333CD4DDDDD3D5333333333333333333333333333CSEUCUSE4333D33333C43333333333333CDDD9DDD3DCD433333333CDCDDDDDDEDDD33433C3E433#""""\x82" """"""""2333333333333333CDUUDU53SEUUUD43SDD3U3U4333C43333C43333333333333SE43CD33333333DD33333CDDDDDDDDDD3333333343333333B!233333333333#"""333333s3CD533333333333333333333333333CESEU3333333333333333333DDDD433333CD2333333333333333333333333""""23333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDD33333333333333333333333333333CDDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333SUDDDDUDT43333333333343333333333333333333333333333333333333333TEDDTTEETD333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CUDD3UUDE43333333333333D33333333333333333333333333333333333333333UEDDDTEE43333333333333333333333333333333333333333333333333333CEUDDDE33333333333333333333333333333333333333333333333333CDUDDEDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333D#"2333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CSUUUUUUUUUUUUUUUUUUUUUUUUUUU333CD4333333333333333333333333333333333333333333333333333333""""""33EDDCTSE3333333333D33333333333DDDDDDD\x94DDDDDDDDDDDDDDDDDDDDDDDDDDDDDCDDDDDDDD3DDD4DCDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CD4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDDDD333333333333333333333333333333333333333333333333333333333333333333333333333333333333333s73333s33333333333""""""""3333333373s333333333333333333333333333333CTDDDTU5D4DD333C433333D33333333333333DU433333333333333333333DDDUDUD3333S3333333333333333334333333333333s733333s33333333333CD4DDDD4D4DD4333333333sww73333333w3333333333sw3333s33333337333333sw333333333s733333333333333333UTEUS433333333C433333333333333C433333333333334443SUE4333333333333CDDDDDDDD4333333DDDDDT533333\xa3\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa3SDDDDUUT5DDD43333C43333333333333333C33333333333EEDDDCC3DDDDUUUDDDDD3T5333333333333333333333333333CSDDD433E533333333333333333333333333DDDDDDD4333333333333333333333333333CD53333333333333333333333UEDTE4\x933333333\x933333333333333333333333333D433333333333333333CDDEDDD43333333S5333333333333333333333C333333D533333333333333333333333SUDDDDT5\x9933CD433333333333333333333333333333333333333333333333UEDUTD33343333333333333333333333333333333333333333333333333333333333333333333333333333333CUEDDD43333333333DU333333333333333333333333333C4TTU5S5SU3333C33333U3DDD43DD4333333333333333333333333333333333333333333333333333333333333333333333DDDDDDD533333333333333333333333DDDTTU43333333333333333333333333333DDD733333s373ss33w7733333ww733333333333ss33333333333333333333333333333ww3333333333333333333333333333wwww33333www33333333333333333333wwww333333333333333wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww333333wwwwwwwwwwwwwwwwwwwwwww7wwwwwswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww733333333333333333333333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333333333333333333333333333333333333333333333333333333333swwwww7333333333333333333333333333333333333333333wwwwwwwwwwwwwwwwwwwww7wwwwwwswwwwwwwwwwwwwwwwwwwww73333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333333w7333333333333333733333333333333333333333333333sww733333s7333333s3wwwww333333333wwwwwwwwwwwwwwwwwwwwwwwwwwwwgffffffffffff6wwwwwww73333s33333333337swwwwsw73333wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwDDDDDDDDDDDDDDDDDDDDDDDD33333333DDDDDDDD33333333DDDDDDDDDDDDDDDD43333333DC44333333333333333333333333333SUDDDDTD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333UED4CTUE3S33333333333333DDDDD33333333333333333333DDD\x95DD333343333DDDUD43333333333333333333\x93\x99\x99IDDDDDDE4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDDDDDDDDDDDDDDDDDDDDDDDDDD33DDDDDDDDDDDDDDDDDDDDDDDDD33334333333C33333333333DD4DDDDDDD43333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333TD43EDD""""DDDD3DDD433333333333333CD43333333333333333333333333333333333333333333333333333333333333333333333333CD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333C33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333433333333333333333333333333333333333333333333333333333333333333333333333333DD4333333333333333333333333333333333333333333333333333333333333333333EDDDCDDT43333333333333333333333333333333333333333CDDDDDDDDDD4EDDDETD3333333333333333333333333333333333333333333333333333333333333DDD3CC4DDD\x94433333333333333333333333333333333SUUC4UT433333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333DU333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDD333333333333333333333333333333333333333333333333333333CDDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDC433DD33333333333333333333D43C3333333333333333333333333333333333333333333333333333333333333333333333333333333333C4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333334EDDDD3\x03',d:"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",Z:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",v:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",I:"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\nin vec4 v_bg_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n  if (v_bg_color != vec4(0, 0, 0, 0)) {\n    outColor = outColor + v_bg_color;\n  }\n}\n",t:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",_:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\n\nout vec4 outColor;\n\nvoid main() {\n    vec2 tex_position = gl_FragCoord.xy / vec2(100, 40);\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n    float source_strength = u_source_strength + sin(u_time * 2.0);\n    float dist = distance(gl_FragCoord.xy, (u_source_position + vec2(0.5, 0.5))) / 2.0;\n    if (dist > source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, source_strength, dist);\n    outColor = vec4(u_source_color.rgb, scale);\n}\n",L:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // back textures is already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 front = texture(u_light_texture, tex_position);\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  // front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",s:"\u0e3b\u1cdb\u05d0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b \u389c\u102b\u102b\u102b\u102b\u489c\u102b\u102b\u102b\u0620\u392b\u0c26\u0efa\u102b\u0dcb\u0601\u3e7e\u228f\u0c77\u24d3\u40b2\u102b\u1d51\u0f6f\u2681\u0698\u0851\u0d63\u0be6\u0d63\u1d2a\u06d5\u0e9b\u0771\u075c\u2b98\u23fe\u2707\u0da1\u2a52\u08eb\u0d13\u0ce3\u2712\u0c62\u4d9d\u0b97\u25cb\u2b21\u0659\u42c5\u0baa\u0ec5\u088d\u102b\u09b9\u09d9\u09f9\u0a21\u102b\u102b\u102b\u102b\u102b\u40ae\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0b5f\u25b1\u23c1\u07f5\u0fe2\u102b\u269e\u102b\u0e5b\u102b\u102b\u102b\u2427\u26c9\u275a\u102b\u2b5c\u0fad\u0b31\u0789\u08ab\u102b\u102b\u0dfb\u102b\u102b\u102b\u1d74\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0f2f\u2372\u102b\u38ec\u090f\u102b\u2501\u102b\u102b\u102b\u102b\u102b\u24a9\u102b\u35c8\u0939\u102b\u102b\u102b\u23b5\u102b\u102b\u2345\u2c27\u3457\u2d9d\u3491\u2d9d\u0979\u2be5\u252c\u102b\u102b\u102b\u102b\u102b\u233b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2566\u23a2\u102b\u102b\u102b\u102b\u102b\u409c\u102b\u428c\u102b\u3db9\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2bac\u102b\u16c9\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2c0e\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0d24\u4c95\u4c83\u102b\u102b\u102b\u102b\u0b0c\u102b\u07bb\u2609\u0c43\u2641\u071f\u2483\u2443\u0cb1\u06e1\u0811\u102b\u102b\u102b\u2583\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a95\u0ace\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u42ad\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u38bc\u102b\u102b\u1cdb\u102b\u102b\u4c95\u1cea\u40ce\u102b\u49ce\u1f6f\u2752\u1506\u393f\u449f\u102b\u102b\u102b\u102b\u102b\u0ff2\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u113b\u191a\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u1869\u102b\u102b\u102b\u102b\u3e89\u102b\u3bd9\u102b\u1da7\u102b\u47cf\u102b\u34a1\u305d\u2c56\u2d9d\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\x00\u01f0\u01f0\u01f0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b"}
var t=(function rtii(){var s=A.ap
return{bm:s("@<~>"),L:s("bG"),p:s("O"),mm:s("e_"),A:s("b3<d>"),bB:s("aa"),lE:s("ax"),u:s("e2"),bD:s("bo"),F:s("fv"),lo:s("ov"),jQ:s("cq"),gN:s("c3"),m1:s("ow"),C:s("br"),i:s("e"),n6:s("aq<v?>"),ex:s("c5"),i_:s("e7"),d5:s("L"),cs:s("ct"),dA:s("bL"),jW:s("c6"),E:s("ad"),ox:s("nA"),gt:s("o<@>"),v:s("ae"),l8:s("bM"),a:s("cv"),fz:s("P"),fq:s("k"),g:s("x"),cM:s("H"),ci:s("H(O)"),gy:s("H(O,O)"),mD:s("H(O,d)"),et:s("aR"),B:s("nD"),gY:s("cx"),g7:s("al<@>"),bC:s("eg"),m:s("af<h,e>"),k_:s("ag<X>"),eT:s("ag<cD>"),f5:s("ag<cM>"),nr:s("ag<cd>"),ba:s("ag<dB>"),de:s("ag<S>"),oQ:s("ag<ai?>"),hQ:s("df"),h8:s("a8"),gE:s("X"),J:s("ai"),e7:s("i<@>"),eI:s("p<bG>"),c7:s("p<O>"),oW:s("p<d1>"),if:s("p<d3>"),G:s("p<Y>"),V:s("p<bp>"),n7:s("p<br>"),b:s("p<e>"),Q:s("p<c5>"),ko:s("p<bc>"),X:s("p<bd>"),pl:s("p<nA>"),k:s("p<a7>"),h:s("p<ae>"),lT:s("p<bM>"),w:s("p<H>"),iw:s("p<al<~>>"),ow:s("p<ei>"),ge:s("p<a8>"),Y:s("p<ar>"),I:s("p<ai>"),lB:s("p<bv>"),o9:s("p<dk>"),fu:s("p<m<c7>>"),do:s("p<m<d>>"),fC:s("p<m<h>>"),lR:s("p<aB>"),ku:s("p<c7>"),hf:s("p<v>"),m7:s("p<hy>"),q:s("p<d>"),ff:s("p<hF>"),hd:s("p<dv>"),f:s("p<Q>"),fF:s("p<hQ>"),s:s("p<t>"),oe:s("p<eM>"),o:s("p<u>"),D:s("p<cP>"),bu:s("p<bk>"),n:s("p<S>"),dG:s("p<@>"),t:s("p<h>"),g2:s("p<V>"),ev:s("p<~(ad)>"),T:s("eo"),dY:s("bN"),dX:s("D<@>"),mT:s("bO"),kT:s("b6"),mw:s("m<ae>"),i8:s("m<d>"),bd:s("m<S>"),gM:s("cD"),nW:s("a3<d,ae>"),mo:s("a3<t,br>"),ea:s("a3<t,@>"),gX:s("cG"),e:s("bR"),li:s("a9"),km:s("hf<ar>"),ib:s("aU"),ee:s("c7"),gD:s("aV"),fh:s("z"),P:s("a5"),ai:s("b7"),K:s("v"),gm:s("dr<d>"),p6:s("bS"),d8:s("aW"),j:s("d"),o5:s("oS"),kB:s("aX"),mx:s("by<V>"),e4:s("dw<@>"),fm:s("aE"),cA:s("aY"),hH:s("aZ"),r:s("Q"),l:s("bi"),N:s("t"),lv:s("at"),dt:s("cM"),dQ:s("aG"),gJ:s("an"),lJ:s("bU"),W:s("cd"),ns:s("dB"),hU:s("i2"),ki:s("b_"),hk:s("b9"),fH:s("eM"),ha:s("p5"),bE:s("ce"),jv:s("b0"),cx:s("dC"),eL:s("dD"),kL:s("b1<aa>"),b1:s("b1<ax>"),eo:s("b1<a9>"),au:s("b1<aX>"),l9:s("bW"),c1:s("cP"),l7:s("ij"),np:s("eP<H>"),oJ:s("aj<bo>"),fB:s("aj<bU>"),jk:s("aj<@>"),pn:s("aj<ar?>"),ou:s("aj<~>"),aN:s("io"),n4:s("bk"),bz:s("cQ<k>"),eF:s("c_<@,@>"),og:s("I<bo>"),aa:s("I<bU>"),c:s("I<@>"),hy:s("I<h>"),j7:s("I<ar?>"),cU:s("I<~>"),gL:s("j_<v?>"),iF:s("dO<~>"),im:s("j8"),o3:s("jd"),k4:s("C"),ei:s("C(aa)"),g9:s("C(ax)"),eU:s("C(a9)"),iW:s("C(v)"),aE:s("C(d)"),hZ:s("C(aX)"),R:s("S"),z:s("@"),mY:s("@()"),y:s("@(v)"),ng:s("@(v,bi)"),p1:s("@(@,@)"),S:s("h"),eK:s("0&*"),_:s("v*"),le:s("O?"),fr:s("e4?"),n8:s("e?"),mV:s("a7?"),oL:s("H?"),gK:s("al<a5>?"),ef:s("aS?"),O:s("ai?"),jw:s("m<e>?"),fb:s("m<ai>?"),iD:s("v?"),lC:s("d?"),d:s("c_<@,@>?"),nF:s("iJ?"),du:s("@(k)?"),ld:s("h(bk,bk)?"),Z:s("~()?"),p0:s("~(bo)?"),lW:s("~(c6)?"),oV:s("~(k)?"),jV:s("~(bO)?"),b9:s("~(aV)?"),cZ:s("V"),H:s("~"),M:s("~()"),nD:s("~([~])"),x:s("~(ad)"),nt:s("~(H)"),i6:s("~(v)"),fQ:s("~(v,bi)"),gS:s("~(t,t)"),U:s("~(t,@)"),my:s("~(i2)"),hv:s("~(V)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.a0=A.d6.prototype
B.dA=A.cp.prototype
B.bk=A.fr.prototype
B.aU=A.cq.prototype
B.by=A.de.prototype
B.fC=A.ej.prototype
B.fI=J.dg.prototype
B.a=J.p.prototype
B.fJ=J.em.prototype
B.f=J.en.prototype
B.b=J.dh.prototype
B.i=J.cA.prototype
B.fK=J.bN.prototype
B.aL=A.ev.prototype
B.ap=A.ey.prototype
B.bS=J.hA.prototype
B.e=A.du.prototype
B.ba=J.dC.prototype
B.d7=A.dG.prototype
B.bb=new A.aP("knockback")
B.d8=new A.aP("disarm")
B.bc=new A.aP("knesis")
B.d9=new A.aP("cleave")
B.bd=new A.aP("whistle")
B.be=new A.aP("whirlwind")
B.bf=new A.aP("dive")
B.da=new A.aP("charge")
B.db=new A.aP("battleCry")
B.dc=new A.aP("throwWeapon")
B.an=new A.X("table")
B.de=new A.dZ(B.an)
B.bg=new A.jy("arrows")
B.aS=new A.fo()
B.W=new A.X("column")
B.bQ=new A.dq(B.W)
B.dg=new A.b3(B.aS,B.bQ,t.A)
B.p=new A.X("door")
B.bR=new A.dq(B.p)
B.dh=new A.b3(B.dg,B.bR,t.A)
B.au=new A.fC()
B.df=new A.b3(B.au,B.bQ,t.A)
B.dj=new A.b3(B.df,B.bR,t.A)
B.dK=new A.hr()
B.dk=new A.b3(B.dj,B.dK,t.A)
B.ds=new A.aa("",0,0,0,99)
B.bl=new A.fv("communicates")
B.J=new A.bp("surface")
B.x=new A.bp("caves")
B.r=new A.bp("deepCaves")
B.D=new A.bp("facility")
B.y=new A.bp("ruins")
B.a1=new A.bp("village")
B.a2=new A.bp("snow")
B.hN=new A.jz()
B.dB=new A.fz()
B.aT=new A.fJ()
B.dC=new A.h2()
B.bm=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.dD=function() {
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
B.dI=function(getTagFallback) {
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
B.dE=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.dF=function(hooks) {
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
B.dH=function(hooks) {
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
B.dG=function(hooks) {
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
B.bn=function(hooks) { return hooks; }

B.dJ=new A.he()
B.bo=new A.lo()
B.dL=new A.hv()
B.H=new A.lF()
B.dM=new A.lP()
B.u=new A.iG()
B.v=new A.iU()
B.dN=new A.j4()
B.bp=new A.cr("north")
B.bq=new A.cr("south")
B.br=new A.cr("east")
B.bs=new A.cr("west")
B.a3=new A.da("none")
B.bt=new A.da("ignoreAgents")
B.K=new A.da("ignoreAgentsAndUnlockedDoors")
B.a4=new A.da("normal")
B.dO=new A.e(1308622847)
B.dP=new A.e(1660944383)
B.dQ=new A.e(3707764736)
B.I=new A.e(4278190080)
B.f3=new A.e(4294278144)
B.z=new A.e(4294967295)
B.hP=new A.jZ("melee")
B.aV=new A.fI("prone")
B.fq=new A.fI("block")
B.L=new A.bs(null,null,null,null)
B.bu=new A.e7("health")
B.fr=new A.bt("acid")
B.fs=new A.bt("cold")
B.ft=new A.bt("electricity")
B.fu=new A.bt("fire")
B.fv=new A.bt("sonic")
B.ae=new A.bt("bludgeoning")
B.af=new A.bt("piercing")
B.av=new A.bt("slashing")
B.aW=new A.bu("d3")
B.bv=new A.bu("d2")
B.aw=new A.bu("d4")
B.bw=new A.bu("d5")
B.ag=new A.bu("d6")
B.fw=new A.bu("d8")
B.fx=new A.bu("d12")
B.aX=new A.bu("d20")
B.Q=new A.bd("se")
B.R=new A.bd("ne")
B.S=new A.bd("sw")
B.T=new A.bd("nw")
B.m=new A.bd("n")
B.n=new A.bd("e")
B.k=new A.bd("s")
B.o=new A.bd("w")
B.bx=new A.ad(0)
B.fy=new A.ad(1e5)
B.aY=new A.ad(25e4)
B.fz=new A.ad(4000)
B.fA=new A.ad(5e5)
B.fB=new A.ad(8000)
B.U=new A.cv("primaryMelee")
B.C=new A.cv("primaryRanged")
B.V=new A.cv("armor")
B.fD=new A.a8("enter")
B.ax=new A.a8("north")
B.bz=new A.a8("activate")
B.fE=new A.a8("equipment")
B.bA=new A.a8("autoexplore")
B.bB=new A.a8("reload")
B.bC=new A.a8("toggleStats")
B.ay=new A.a8("east")
B.az=new A.a8("south")
B.aA=new A.a8("west")
B.fF=new A.a8("skip")
B.fG=new A.a8("fire")
B.bD=new A.a8("look")
B.fH=new A.a8("reset")
B.w=new A.X("none")
B.aZ=new A.X("stairsUp")
B.ah=new A.X("tree")
B.a5=new A.X("bookshelf")
B.ai=new A.X("mechanism")
B.aB=new A.X("activatedMechanism")
B.M=new A.X("chest")
B.aj=new A.X("stalagmite")
B.a6=new A.X("bridge")
B.E=new A.X("widgetWall")
B.a7=new A.X("mapComputer")
B.ak=new A.X("stairsDown")
B.aC=new A.X("consumedMapComputer")
B.a8=new A.X("healthStation")
B.aD=new A.X("consumedHealthStation")
B.al=new A.X("openDoor")
B.am=new A.X("lockedDoor")
B.a9=new A.X("grass")
B.F=new A.X("torch")
B.aE=new A.X("chair")
B.X=new A.bv("melee")
B.Y=new A.bv("ranged")
B.Z=new A.bv("armor")
B.aa=new A.bv("other")
B.a_=new A.bv("consumable")
B.aF=new A.bv("corpse")
B.ab=new A.bv("ammo")
B.aG=new A.ab(" ",!1,!1,!1)
B.aH=new A.ab("ArrowDown",!1,!1,!1)
B.b_=new A.ab("ArrowLeft",!1,!1,!1)
B.b0=new A.ab("ArrowRight",!1,!1,!1)
B.aI=new A.ab("ArrowUp",!1,!1,!1)
B.bE=new A.ab("Enter",!1,!1,!1)
B.N=new A.ab("Escape",!1,!1,!1)
B.fL=new A.ab("a",!1,!1,!1)
B.fM=new A.ab("c",!1,!1,!1)
B.fN=new A.ab("e",!1,!1,!1)
B.fO=new A.ab("f",!1,!1,!1)
B.fP=new A.ab("i",!1,!1,!1)
B.fQ=new A.ab("l",!1,!1,!1)
B.fR=new A.lb("water")
B.bh=new A.d3("light")
B.bi=new A.d3("heavy")
B.bj=new A.d3("powered")
B.hU=A.b(s([B.bh,B.bi,B.bj]),t.if)
B.dl=new A.ax(1)
B.dm=new A.ax(1)
B.dn=new A.ax(1)
B.dp=new A.ax(1)
B.hS=A.b(s([B.bj]),t.if)
B.dq=new A.ax(2)
B.hT=A.b(s([B.bh,B.bi]),t.if)
B.dr=new A.ax(2)
B.fS=A.b(s([B.dl,B.dm,B.dn,B.dp,B.dq,B.dr]),A.ap("p<ax>"))
B.fT=A.b(s([24,36]),t.n)
B.fU=A.b(s([B.bp,B.bq,B.br,B.bs]),A.ap("p<cr>"))
B.fV=A.b(s([B.J,B.x,B.r,B.D,B.y,B.a1,B.a2]),t.V)
B.hR=new A.kP("oneHand")
B.hQ=new A.k0("none")
B.hO=new A.k_()
B.fZ=A.b(s([]),A.ap("p<ig>"))
B.hi=new A.a9(B.af,B.aw,1,"Spear")
B.hh=new A.a9(B.ae,B.aw,1,"Club")
B.hb=new A.a9(B.av,B.aW,1,"Knife")
B.hg=new A.a9(B.av,B.ag,2,"Sword")
B.hc=new A.a9(B.av,B.ag,2,"Axe")
B.he=new A.a9(B.ae,B.ag,2,"Mace")
B.hj=new A.a9(B.af,B.ag,2,"Pike")
B.hd=new A.a9(B.af,B.bw,2,"Dagger")
B.fW=A.b(s([B.hi,B.hh,B.hb,B.hg,B.hc,B.he,B.hj,B.hd]),A.ap("p<a9>"))
B.b1=A.b(s([B.Q,B.R,B.S,B.T,B.m,B.n,B.k,B.o]),t.X)
B.bF=A.b(s([B.m,B.k]),t.X)
B.bG=A.b(s([B.n,B.o]),t.X)
B.b2=A.b(s([B.m,B.R,B.n,B.Q,B.k,B.S,B.o,B.T]),t.X)
B.O=A.b(s([-1,3,-1,-1,3,-1]),t.n)
B.aJ=A.b(s([]),t.Q)
B.fY=A.b(s([]),t.X)
B.d=A.b(s([]),t.w)
B.fX=A.b(s([]),A.ap("p<a5>"))
B.dy=new A.aa("Second Skin",1,1,2,5)
B.dz=new A.aa("Estex Suit I",1,0,1,5)
B.dv=new A.aa("Flight Suit",1,0,1,6)
B.dw=new A.aa("Freebooter Armor I",2,2,3,4)
B.dt=new A.aa("Kasatha microcord I",2,1,3,3)
B.du=new A.aa("Ceremonial Plate",1,1,3,2)
B.dx=new A.aa("Golemforged Plating",1,2,5,0)
B.h0=A.b(s([B.dy,B.dz,B.dv,B.dw,B.dt,B.du,B.dx]),A.ap("p<aa>"))
B.aM=new A.aX("Sling",B.ae,B.aW,1,3)
B.hp=new A.aX("Bow",B.af,B.aw,2,5)
B.h1=A.b(s([B.aM,B.hp]),A.ap("p<aX>"))
B.bV=new A.ca("north")
B.bW=new A.ca("south")
B.bX=new A.ca("east")
B.bY=new A.ca("west")
B.bZ=new A.ca("center")
B.bH=A.b(s([B.bV,B.bW,B.bX,B.bY,B.bZ]),A.ap("p<ca>"))
B.bI=new A.cD("lockedDoor")
B.h2=new A.cD("doorMechanism")
B.bJ=new A.cD("none")
B.f7=new A.e(4294638330)
B.f5=new A.e(4294309365)
B.eY=new A.e(4293848814)
B.eR=new A.e(4292927712)
B.eP=new A.e(4292269782)
B.eJ=new A.e(4290624957)
B.ez=new A.e(4288585374)
B.eo=new A.e(4285887861)
B.ei=new A.e(4284572001)
B.e7=new A.e(4282532418)
B.e3=new A.e(4281348144)
B.dY=new A.e(4280361249)
B.A=new A.af([50,B.f7,100,B.f5,200,B.eY,300,B.eR,350,B.eP,400,B.eJ,500,B.ez,600,B.eo,700,B.ei,800,B.e7,850,B.e3,900,B.dY],t.m)
B.eW=new A.e(4293457385)
B.eL=new A.e(4291356361)
B.eB=new A.e(4289058471)
B.es=new A.e(4286695300)
B.ek=new A.e(4284922730)
B.ed=new A.e(4283215696)
B.e9=new A.e(4282622023)
B.e5=new A.e(4281896508)
B.e2=new A.e(4281236786)
B.dW=new A.e(4279983648)
B.bK=new A.af([50,B.eW,100,B.eL,200,B.eB,300,B.es,400,B.ek,500,B.ed,600,B.e9,700,B.e5,800,B.e2,900,B.dW],t.m)
B.fn=new A.e(4294966759)
B.fm=new A.e(4294965700)
B.fl=new A.e(4294964637)
B.fk=new A.e(4294963574)
B.fj=new A.e(4294962776)
B.fh=new A.e(4294961979)
B.f9=new A.e(4294826037)
B.f8=new A.e(4294688813)
B.f6=new A.e(4294551589)
B.f4=new A.e(4294278935)
B.bL=new A.af([50,B.fn,100,B.fm,200,B.fl,300,B.fk,400,B.fj,500,B.fh,600,B.f9,700,B.f8,800,B.f6,900,B.f4],t.m)
B.f1=new A.e(4294174197)
B.eS=new A.e(4292984551)
B.eM=new A.e(4291728344)
B.eG=new A.e(4290406600)
B.eC=new A.e(4289415100)
B.ey=new A.e(4288423856)
B.ev=new A.e(4287505578)
B.er=new A.e(4286259106)
B.em=new A.e(4285143962)
B.ec=new A.e(4283045004)
B.h3=new A.af([50,B.f1,100,B.eS,200,B.eM,300,B.eG,400,B.eC,500,B.ey,600,B.ev,700,B.er,800,B.em,900,B.ec],t.m)
B.f0=new A.e(4293913577)
B.eQ=new A.e(4292332744)
B.eI=new A.e(4290554532)
B.eA=new A.e(4288776319)
B.eu=new A.e(4287458915)
B.eq=new A.e(4286141768)
B.en=new A.e(4285353025)
B.eg=new A.e(4284301367)
B.ee=new A.e(4283315246)
B.e6=new A.e(4282263331)
B.b3=new A.af([50,B.f0,100,B.eQ,200,B.eI,300,B.eA,400,B.eu,500,B.eq,600,B.en,700,B.eg,800,B.ee,900,B.e6],t.m)
B.fi=new A.e(4294962158)
B.fd=new A.e(4294954450)
B.f_=new A.e(4293892762)
B.eV=new A.e(4293227379)
B.eZ=new A.e(4293874512)
B.f2=new A.e(4294198070)
B.eU=new A.e(4293212469)
B.eO=new A.e(4292030255)
B.eK=new A.e(4291176488)
B.eE=new A.e(4290190364)
B.b4=new A.af([50,B.fi,100,B.fd,200,B.f_,300,B.eV,400,B.eZ,500,B.f2,600,B.eU,700,B.eO,800,B.eK,900,B.eE],t.m)
B.eT=new A.e(4293128957)
B.eH=new A.e(4290502395)
B.ex=new A.e(4287679225)
B.ej=new A.e(4284790262)
B.e8=new A.e(4282557941)
B.dZ=new A.e(4280391411)
B.dX=new A.e(4280191205)
B.dV=new A.e(4279858898)
B.dU=new A.e(4279592384)
B.dT=new A.e(4279060385)
B.aK=new A.af([50,B.eT,100,B.eH,200,B.ex,300,B.ej,400,B.e8,500,B.dZ,600,B.dX,700,B.dV,800,B.dU,900,B.dT],t.m)
B.eX=new A.e(4293718001)
B.eN=new A.e(4291811548)
B.eD=new A.e(4289773253)
B.ew=new A.e(4287669422)
B.ep=new A.e(4286091420)
B.eh=new A.e(4284513675)
B.ef=new A.e(4283723386)
B.eb=new A.e(4282735204)
B.e4=new A.e(4281812815)
B.e_=new A.e(4280693304)
B.ao=new A.af([50,B.eX,100,B.eN,200,B.eD,300,B.ew,400,B.ep,500,B.eh,600,B.ef,700,B.eb,800,B.e4,900,B.e_],t.m)
B.b5=new A.af([B.V,null,B.U,null,B.C,null],A.ap("af<cv,ai?>"))
B.h_=A.b(s([]),t.s)
B.hV=new A.e6(0,{},B.h_,A.ap("e6<t,@>"))
B.fe=new A.e(4294955392)
B.fc=new A.e(4294945600)
B.fb=new A.e(4294938880)
B.fa=new A.e(4294929664)
B.h6=new A.af([100,B.fe,200,B.fc,400,B.fb,700,B.fa],t.m)
B.et=new A.e(4286755327)
B.ea=new A.e(4282682111)
B.e1=new A.e(4280908287)
B.e0=new A.e(4280902399)
B.h4=new A.af([100,B.et,200,B.ea,400,B.e1,700,B.e0],t.m)
B.h8=new A.cG(B.h4,4282682111)
B.eF=new A.e(4290377418)
B.el=new A.e(4285132974)
B.dS=new A.e(4278249078)
B.dR=new A.e(4278241363)
B.h5=new A.af([100,B.eF,200,B.el,400,B.dS,700,B.dR],t.m)
B.h9=new A.cG(B.h5,4285132974)
B.fp=new A.e(4294967181)
B.fo=new A.e(4294967040)
B.fg=new A.e(4294961664)
B.ff=new A.e(4294956544)
B.h7=new A.af([100,B.fp,200,B.fo,400,B.fg,700,B.ff],t.m)
B.bM=new A.cG(B.h7,4294967040)
B.bN=new A.bR(B.A,4288585374)
B.ac=new A.bR(B.bL,4294961979)
B.ha=new A.bR(B.b3,4286141768)
B.q=new A.bR(B.b4,4294198070)
B.bO=new A.bR(B.aK,4280391411)
B.hf=new A.a9(B.ae,B.bv,1,"Unarmed")
B.bP=new A.dn("wildBoar")
B.hk=new A.dn("zyborgMelee")
B.hl=new A.dn("zyborgRanged")
B.hm=new A.dn("caveScanner")
B.l=new A.M(0,0)
B.hn=new A.dr(B.aS,t.gm)
B.dd=new A.dZ(B.a5)
B.di=new A.b3(B.aS,B.dd,t.A)
B.ho=new A.dr(B.di,t.gm)
B.b6=new A.hz("pathfind")
B.aq=new A.hz("line")
B.G=new A.d(0,0)
B.ar=new A.aC(B.l,0,0)
B.aN=new A.eF("small")
B.bT=new A.eF("medium")
B.bU=new A.eF("large")
B.aO=new A.eH("melee")
B.aP=new A.eH("ranged")
B.aQ=new A.eH("armor")
B.c_=new A.j(0,0)
B.hq=new A.j(0,1)
B.c0=new A.j(0,3)
B.c1=new A.j(0,5)
B.c2=new A.j(0,7)
B.c3=new A.j(10,11)
B.c4=new A.j(10,2)
B.c5=new A.j(10,3)
B.c6=new A.j(10,4)
B.c7=new A.j(10,5)
B.c8=new A.j(10,6)
B.c9=new A.j(10,7)
B.hr=new A.j(11,11)
B.hs=new A.j(11,13)
B.ht=new A.j(11,2)
B.ca=new A.j(11,4)
B.cb=new A.j(11,5)
B.cc=new A.j(11,6)
B.hu=new A.j(11,7)
B.hv=new A.j(12,11)
B.hw=new A.j(12,2)
B.cd=new A.j(12,4)
B.ce=new A.j(12,6)
B.hx=new A.j(12,7)
B.hy=new A.j(13,0)
B.cf=new A.j(13,12)
B.cg=new A.j(13,2)
B.ch=new A.j(13,4)
B.hz=new A.j(13,5)
B.ci=new A.j(13,6)
B.hA=new A.j(14,2)
B.cj=new A.j(14,4)
B.ck=new A.j(14,6)
B.b7=new A.j(15,2)
B.hB=new A.j(15,3)
B.cl=new A.j(15,4)
B.cm=new A.j(15,6)
B.cn=new A.j(1,2)
B.co=new A.j(1,3)
B.cp=new A.j(1,4)
B.cq=new A.j(1,5)
B.cr=new A.j(1,6)
B.cs=new A.j(1,7)
B.ct=new A.j(2,3)
B.cu=new A.j(2,4)
B.cv=new A.j(2,5)
B.cw=new A.j(2,6)
B.cx=new A.j(2,7)
B.cy=new A.j(3,3)
B.cz=new A.j(3,4)
B.cA=new A.j(3,5)
B.cB=new A.j(3,6)
B.cC=new A.j(3,7)
B.cD=new A.j(4,3)
B.cE=new A.j(4,4)
B.cF=new A.j(4,5)
B.cG=new A.j(4,6)
B.cH=new A.j(4,7)
B.hC=new A.j(5,0)
B.cI=new A.j(5,3)
B.cJ=new A.j(5,4)
B.cK=new A.j(5,5)
B.cL=new A.j(5,6)
B.cM=new A.j(5,7)
B.cN=new A.j(6,3)
B.cO=new A.j(6,4)
B.cP=new A.j(6,5)
B.cQ=new A.j(6,6)
B.cR=new A.j(6,7)
B.cS=new A.j(7,3)
B.cT=new A.j(7,4)
B.cU=new A.j(7,5)
B.cV=new A.j(7,6)
B.cW=new A.j(7,7)
B.hD=new A.j(8,12)
B.hE=new A.j(8,2)
B.cX=new A.j(8,3)
B.cY=new A.j(8,4)
B.cZ=new A.j(8,5)
B.d_=new A.j(8,6)
B.d0=new A.j(8,7)
B.hF=new A.j(9,12)
B.hG=new A.j(9,2)
B.d1=new A.j(9,3)
B.d2=new A.j(9,4)
B.d3=new A.j(9,5)
B.d4=new A.j(9,6)
B.d5=new A.j(9,7)
B.as=new A.bT("")
B.b8=new A.cM("dirt")
B.aR=new A.cM("metal")
B.hH=new A.cM("snow")
B.ad=new A.cN("rest")
B.d6=new A.cN("flee")
B.P=new A.cN("search")
B.hI=new A.cN("explore")
B.at=new A.cN("alert")
B.j=new A.dB("floor")
B.c=new A.dB("wall")
B.hJ=A.ut("v")
B.B=new A.cO("float_1")
B.h=new A.cO("float_2")
B.hK=new A.cO("float_3")
B.b9=new A.cO("float_4")
B.t=new A.cO("texture_1")
B.hL=new A.ig("block")
B.hM=new A.dM(null,2)})();(function staticFields(){$.mv=null
$.oR=null
$.ot=null
$.os=null
$.pB=null
$.pt=null
$.pL=null
$.mT=null
$.n_=null
$.o5=null
$.dR=null
$.fi=null
$.fj=null
$.o0=!1
$.F=B.v
$.b2=A.b([],t.hf)
$.oy=0
$.oD=0
$.oq=null
$.t7=A.aA(["0",B.c0,"1",B.co,"2",B.ct,"3",B.cy,"4",B.cD,"5",B.cI,"6",B.cN,"7",B.cS,"8",B.cX,"9",B.d1," ",B.c_,"-",B.cg,"a",B.cr,"b",B.cw,"c",B.cB,"d",B.cG,"e",B.cL,"f",B.cQ,"g",B.cV,"h",B.d_,"i",B.d4,"j",B.c8,"k",B.cc,"l",B.ce,"m",B.ci,"n",B.ck,"o",B.cm,"p",B.c2,"q",B.cs,"r",B.cx,"s",B.cC,"t",B.cH,"u",B.cM,"v",B.cR,"w",B.cW,"x",B.d0,"y",B.d5,"z",B.c9,"A",B.cp,"B",B.cu,"C",B.cz,"D",B.cE,"E",B.cJ,"F",B.cO,"G",B.cT,"H",B.cY,"I",B.d2,"J",B.c6,"K",B.ca,"L",B.cd,"M",B.ch,"N",B.cj,"O",B.cl,"P",B.c1,"Q",B.cq,"R",B.cv,"S",B.cA,"T",B.cF,"U",B.cK,"V",B.cP,"W",B.cU,"X",B.cZ,"Y",B.d3,"Z",B.c7,"/",B.b7,":",B.c5],t.N,A.ap("j"))
$.t6=A.aA(["0",B.c0,"1",B.co,"2",B.ct,"3",B.cy,"4",B.cD,"5",B.cI,"6",B.cN,"7",B.cS,"8",B.cX,"9",B.d1," ",B.c_,"-",B.cg,"a",B.cr,"b",B.cw,"c",B.cB,"d",B.cG,"e",B.cL,"f",B.cQ,"g",B.cV,"h",B.d_,"i",B.d4,"j",B.c8,"k",B.cc,"l",B.ce,"m",B.ci,"n",B.ck,"o",B.cm,"p",B.c2,"q",B.cs,"r",B.cx,"s",B.cC,"t",B.cH,"u",B.cM,"v",B.cR,"w",B.cW,"x",B.d0,"y",B.d5,"z",B.c9,"A",B.cp,"B",B.cu,"C",B.cz,"D",B.cE,"E",B.cJ,"F",B.cO,"G",B.cT,"H",B.cY,"I",B.d2,"J",B.c6,"K",B.ca,"L",B.cd,"M",B.ch,"N",B.cj,"O",B.cl,"P",B.c1,"Q",B.cq,"R",B.cv,"S",B.cA,"T",B.cF,"U",B.cK,"V",B.cP,"W",B.cU,"X",B.cZ,"Y",B.d3,"Z",B.c7,"/",B.b7,":",B.c5,".",B.hA,"(",B.hE,")",B.hG,",",B.hw,"[",B.cb,"]",B.hz,"|",B.hx],t.N,A.ap("j"))
$.y=A.nR("engine")
$.ux=A.b([B.dB,B.dJ,B.dC],A.ap("p<bW>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"uN","pT",()=>A.u5("_$dart_dartClosure"))
s($,"v8","pZ",()=>A.bV(A.lZ({
toString:function(){return"$receiver$"}})))
s($,"v9","q_",()=>A.bV(A.lZ({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"va","q0",()=>A.bV(A.lZ(null)))
s($,"vb","q1",()=>A.bV(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ve","q4",()=>A.bV(A.lZ(void 0)))
s($,"vf","q5",()=>A.bV(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"vd","q3",()=>A.bV(A.p6(null)))
s($,"vc","q2",()=>A.bV(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"vh","q7",()=>A.bV(A.p6(void 0)))
s($,"vg","q6",()=>A.bV(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"vj","o9",()=>A.rD())
s($,"vv","ns",()=>A.n4(B.hJ))
s($,"uz","pP",()=>A.aA([B.bb,$.qk(),B.d8,$.qe(),B.d9,$.qd(),B.be,$.qx(),B.bf,$.qf(),B.da,$.qc(),B.db,$.qa(),B.dc,$.qv(),B.bc,$.qj(),B.bd,$.qy()],A.ap("aP"),t.L))
s($,"vO","qk",()=>A.bH(A.tJ(),"Push an enemy back 3 tiles plus STR and knock them to the ground. If they collide with a wall or other creature, they take 2 + STR damage.","Knockback",!1,null))
s($,"w8","qy",()=>A.bH(A.tL(),"Throw your voice to create a false sound, misleading pursuers.","Whistle",!1,A.nN(B.a3,!1,10,0,B.aq,!0,!0,!1)))
s($,"vF","qe",()=>A.bH(null,"Force opponent to drop equiped weapon.","Disarm",!1,null))
s($,"vD","qd",()=>A.bH(null,"Attack an additional target adjacent to your main target.","Cleave",!1,null))
s($,"w7","qx",()=>A.bH(A.tK(),"Attack all adjacent enemies.","Whirlwind",!1,null))
s($,"vC","qc",()=>A.bH(null,"Move 2-3 tiles plus STR to an enemy. Make a free attack at +1 hit and +1 damage.","Charge",!1,null))
s($,"vz","qa",()=>A.bH(null,"Cause all enemies within 3 tiles plus CHA to flee in terror.","Battle Cry",!1,null))
s($,"w5","qv",()=>A.bH(null,"Throw a melee weapon 3 tiles plus STR, performing a ranged attack rolled as if it were a melee attack.","Throw Weapon",!1,null))
s($,"vN","qj",()=>A.bH(A.tI(),"Activate a visible item or mechanism.","Kinesis",!1,A.nN(B.a3,!1,1e4,0,B.aq,!0,!0,!1)))
s($,"vG","qf",()=>A.bH(A.tH(),"Jump 2-3 spaces away","Dive",!1,A.nN(B.a4,!0,3,2,B.b6,!0,!0,!1)))
s($,"uZ","pY",()=>A.b([$.qz(),$.qA(),$.qB(),$.qb(),$.qu()],t.ku))
s($,"w9","qz",()=>A.hj(A.fn(4,6,8,4,4,8),A.bw(t.F),A.b([B.J],t.V),"death_1.mp3",new A.nm(),B.bP,0,4,"Wild Boar",new A.nn()))
s($,"w4","qu",()=>A.hj(A.fn(4,6,8,4,4,10),A.bw(t.F),A.b([B.a2],t.V),"death_1.mp3",new A.nh(),B.bP,2,4,"Snow Bear",new A.ni()))
s($,"wa","qA",()=>{var r=A.fn(4,6,8,4,4,8),q=A.b([B.x,B.r,B.D,B.y],t.V)
return A.hj(r,A.nI([B.bl],t.F),q,"monster_scream_1.mp3",new A.no(),B.hk,1,6,"Zyborg",new A.np())})
s($,"wb","qB",()=>{var r=A.fn(4,6,9,4,4,4),q=A.b([B.x,B.r,B.D,B.y],t.V)
return A.hj(r,A.nI([B.bl],t.F),q,"monster_scream_1.mp3",new A.nq(),B.hl,2,5,"Zyborg Ranged",new A.nr())})
s($,"vB","qb",()=>A.hj(A.fn(4,4,10,6,4,2),A.bw(t.F),A.b([B.x,B.r,B.D,B.y],t.V),null,new A.mR(),B.hm,3,3,"Cave Scanner",new A.mS()))
s($,"uI","pS",()=>A.lz())
s($,"uH","pR",()=>{var r=A.b([],t.Q),q=A.r_("","")
return new A.c3(0,0,0,0,0,0,0,A.qW(A.ac(t.a,t.O),A.b([],t.I)),new A.dY(0,0,0,0,0,0),r,q)})
s($,"vI","oc",()=>{var r=A.b([A.cf(B.h,"u_resolution"),A.cf(B.B,"u_time"),A.cf(B.h,"u_offset"),A.cf(B.h,"u_origin")],t.o)
return A.az(A.b([A.oo(35044,A.oO(B.O),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\nuniform vec2 u_origin;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  float dist = distance(snapped_position, (u_origin + vec2(0.5, 0.5)) * vec2(24.0, 36.0)) / 50.0;\n  float rand = -1.0 + random(relative_position) / 2.0;\n  float scale_rate = 0.8 * (u_time);\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(249.0 / 255.0, 168.0 / 255.0, 37.0 / 255.0, scale);\n}\n",r,u.d)})
s($,"vQ","qm",()=>{var r=A.b([A.cf(B.h,"u_resolution"),A.cf(B.B,"u_time"),A.cf(B.h,"u_offset"),A.cf(B.h,"u_source"),A.cf(B.h,"u_target")],t.o)
return A.az(A.b([A.oo(35044,A.oO(B.O),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nuniform vec2 u_source;\nuniform vec2 u_target;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 p0 = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  vec2 p1 = (u_source + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n  vec2 p2 = (u_target + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n\n  if ((p1.x != p2.x) && (p0.x < p1.x && p0.x < p2.x) || (p0.x > p1.x && p0.x > p2.x)) {\n    discard;\n    return;\n  }\n  if ((p1.y != p2.y) && (p0.y < p1.y && p0.y < p2.y) || (p0.y > p1.y && p0.y > p2.y)) {\n    discard;\n    return;\n  }\n\n  float dist = abs( (p2.x - p1.x) * (p1.y - p0.y) - (p1.x - p0.x) * (p2.y - p1.y) ) / sqrt( pow(p2.x - p1.x, 2.0) + pow(p2.y - p1.y, 2.0) );\n  float rand = random(relative_position);\n  float scale_rate = 1.5;\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = 1.0 - smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(0.1, 0.2, 1.0, 0.8 * scale - u_time);\n}\n",r,u.d)})
s($,"v2","bF",()=>new A.lr())
s($,"uO","pU",()=>A.lz())
s($,"uV","o8",()=>A.nL(A.c4(4278780675),A.c4(4279308561),A.c4(4280361249)))
s($,"uW","pV",()=>A.nL(A.c4(4279898637),A.c4(4281017118),A.c4(4282858034)))
s($,"uY","pX",()=>A.nL(A.c4(4279765786),A.c4(4280096038),A.c4(4282463311)))
s($,"uX","pW",()=>$.o8())
s($,"vw","dW",()=>A.lz())
s($,"vy","q9",()=>A.lz())
s($,"w2","oh",()=>A.bX(B.au,new A.ne(),!0))
s($,"vW","of",()=>A.bX(B.de,new A.n7(),!0))
s($,"w_","dX",()=>A.bX(A.on(B.aT,A.oQ(B.F),t.j),new A.nb(),!0))
s($,"vV","oe",()=>A.bX(A.on(B.au,A.oQ(B.F),t.j),new A.n6(),!0))
s($,"vX","qq",()=>A.bX(B.au,new A.n8(),!0))
s($,"w0","og",()=>A.bX(B.aT,new A.nc(),!0))
s($,"w1","qs",()=>A.bX(B.hn,new A.nd(),!1))
s($,"vY","ju",()=>A.bX(B.dk,new A.na(),!0))
s($,"vZ","qr",()=>A.bX(B.dh,new A.n9(),!0))
s($,"vU","qp",()=>A.bX(B.ho,new A.n5(),!0))
s($,"vT","nt",()=>{var r=$.oh(),q=$.of()
return A.b([r,q,q,$.dX(),$.ju()],t.D)})
s($,"vR","qn",()=>{var r=$.qp()
return A.b([r,r,r,r,r,$.dX(),$.oh(),$.of(),$.ju()],t.D)})
s($,"vP","ql",()=>{var r=$.dX(),q=$.ju()
return A.b([r,r,r,q,q,q],t.D)})
s($,"vL","qh",()=>{var r,q=$.dX(),p=$.oe()
p=A.b([q,q,q,p,p,p],t.D)
for(r=0;r<500;++r)p.push($.qs())
return p})
s($,"vM","qi",()=>{var r,q=$.dX(),p=$.oe()
p=A.b([q,q,q,p,p,p],t.D)
for(r=0;r<10;++r)p.push($.ju())
for(r=0;r<10;++r)p.push($.qr())
return p})
s($,"w6","qw",()=>A.b([$.qq(),$.dX()],t.D))
s($,"uF","pQ",()=>{var r,q,p=A.b([],t.q)
for(r=0;r<100;++r)for(q=0;q<40;++q)p.push(A.rj(r,q))
return p})
s($,"vx","q8",()=>A.ri(A.cU(A.b([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t))))
s($,"vJ","qg",()=>A.aA([A.bf("ArrowUp",!1,!1,!1),B.ax,A.bf("ArrowDown",!1,!1,!1),B.az,A.bf("ArrowRight",!1,!1,!1),B.ay,A.bf("ArrowLeft",!1,!1,!1),B.aA,A.bf("q",!1,!1,!1),B.fG,A.bf(" ",!1,!1,!1),B.bz,A.bf("0",!1,!1,!1),B.bA,A.bf("l",!1,!1,!1),B.bD,A.bf("Escape",!1,!1,!1),B.fH,A.bf("r",!1,!1,!1),B.bB,A.bf("e",!1,!1,!1),B.fE,A.bf("p",!1,!1,!1),B.bC],A.ap("ab"),t.h8))
s($,"vS","qo",()=>A.pz().querySelector("#loading"))
s($,"vA","oa",()=>t.jQ.a(A.pz().querySelector("#glCanvas")))
s($,"vK","od",()=>A.ap("du").a(B.aU.ed($.oa(),"webgl2")))
s($,"w3","qt",()=>new A.ke())
s($,"vH","ob",()=>A.qV($.oa(),$.od(),$.qt()))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({WebGL:J.dg,ArrayBuffer:A.hk,DataView:A.cJ,ArrayBufferView:A.cJ,Float64Array:A.cI,Float32Array:A.ev,Int16Array:A.hl,Int32Array:A.hm,Int8Array:A.hn,Uint16Array:A.ho,Uint32Array:A.hp,Uint8ClampedArray:A.ex,CanvasPixelArray:A.ex,Uint8Array:A.ey,HTMLBRElement:A.q,HTMLBaseElement:A.q,HTMLButtonElement:A.q,HTMLContentElement:A.q,HTMLDListElement:A.q,HTMLDataElement:A.q,HTMLDataListElement:A.q,HTMLDetailsElement:A.q,HTMLDialogElement:A.q,HTMLDivElement:A.q,HTMLEmbedElement:A.q,HTMLFieldSetElement:A.q,HTMLHRElement:A.q,HTMLHeadElement:A.q,HTMLHeadingElement:A.q,HTMLHtmlElement:A.q,HTMLIFrameElement:A.q,HTMLInputElement:A.q,HTMLLIElement:A.q,HTMLLabelElement:A.q,HTMLLegendElement:A.q,HTMLLinkElement:A.q,HTMLMapElement:A.q,HTMLMenuElement:A.q,HTMLMetaElement:A.q,HTMLMeterElement:A.q,HTMLModElement:A.q,HTMLOListElement:A.q,HTMLObjectElement:A.q,HTMLOptGroupElement:A.q,HTMLOptionElement:A.q,HTMLOutputElement:A.q,HTMLParagraphElement:A.q,HTMLParamElement:A.q,HTMLPictureElement:A.q,HTMLPreElement:A.q,HTMLProgressElement:A.q,HTMLQuoteElement:A.q,HTMLScriptElement:A.q,HTMLShadowElement:A.q,HTMLSlotElement:A.q,HTMLSourceElement:A.q,HTMLSpanElement:A.q,HTMLStyleElement:A.q,HTMLTableCaptionElement:A.q,HTMLTableCellElement:A.q,HTMLTableDataCellElement:A.q,HTMLTableHeaderCellElement:A.q,HTMLTableColElement:A.q,HTMLTableElement:A.q,HTMLTableRowElement:A.q,HTMLTableSectionElement:A.q,HTMLTemplateElement:A.q,HTMLTextAreaElement:A.q,HTMLTimeElement:A.q,HTMLTitleElement:A.q,HTMLTrackElement:A.q,HTMLUListElement:A.q,HTMLUnknownElement:A.q,HTMLDirectoryElement:A.q,HTMLFontElement:A.q,HTMLFrameElement:A.q,HTMLFrameSetElement:A.q,HTMLMarqueeElement:A.q,HTMLElement:A.q,AccessibleNodeList:A.jw,HTMLAnchorElement:A.fp,HTMLAreaElement:A.fq,Blob:A.fw,HTMLBodyElement:A.fx,HTMLCanvasElement:A.cq,CDATASection:A.bq,CharacterData:A.bq,Comment:A.bq,ProcessingInstruction:A.bq,Text:A.bq,CSSPerspective:A.k1,CSSCharsetRule:A.L,CSSConditionRule:A.L,CSSFontFaceRule:A.L,CSSGroupingRule:A.L,CSSImportRule:A.L,CSSKeyframeRule:A.L,MozCSSKeyframeRule:A.L,WebKitCSSKeyframeRule:A.L,CSSKeyframesRule:A.L,MozCSSKeyframesRule:A.L,WebKitCSSKeyframesRule:A.L,CSSMediaRule:A.L,CSSNamespaceRule:A.L,CSSPageRule:A.L,CSSRule:A.L,CSSStyleRule:A.L,CSSSupportsRule:A.L,CSSViewportRule:A.L,CSSStyleDeclaration:A.e8,MSStyleCSSProperties:A.e8,CSS2Properties:A.e8,CSSImageValue:A.bb,CSSKeywordValue:A.bb,CSSNumericValue:A.bb,CSSPositionValue:A.bb,CSSResourceValue:A.bb,CSSUnitValue:A.bb,CSSURLImageValue:A.bb,CSSStyleValue:A.bb,CSSMatrixComponent:A.bK,CSSRotation:A.bK,CSSScale:A.bK,CSSSkew:A.bK,CSSTranslation:A.bK,CSSTransformComponent:A.bK,CSSTransformValue:A.k3,CSSUnparsedValue:A.k4,DataTransferItemList:A.k5,Document:A.bL,HTMLDocument:A.bL,XMLDocument:A.bL,DOMException:A.c6,ClientRectList:A.e9,DOMRectList:A.e9,DOMRectReadOnly:A.ea,DOMStringList:A.fO,DOMTokenList:A.k7,Element:A.ah,AbortPaymentEvent:A.k,AnimationEvent:A.k,AnimationPlaybackEvent:A.k,ApplicationCacheErrorEvent:A.k,BackgroundFetchClickEvent:A.k,BackgroundFetchEvent:A.k,BackgroundFetchFailEvent:A.k,BackgroundFetchedEvent:A.k,BeforeInstallPromptEvent:A.k,BeforeUnloadEvent:A.k,BlobEvent:A.k,CanMakePaymentEvent:A.k,ClipboardEvent:A.k,CloseEvent:A.k,CustomEvent:A.k,DeviceMotionEvent:A.k,DeviceOrientationEvent:A.k,ErrorEvent:A.k,ExtendableEvent:A.k,ExtendableMessageEvent:A.k,FetchEvent:A.k,FontFaceSetLoadEvent:A.k,ForeignFetchEvent:A.k,GamepadEvent:A.k,HashChangeEvent:A.k,InstallEvent:A.k,MediaEncryptedEvent:A.k,MediaKeyMessageEvent:A.k,MediaQueryListEvent:A.k,MediaStreamEvent:A.k,MediaStreamTrackEvent:A.k,MessageEvent:A.k,MIDIConnectionEvent:A.k,MIDIMessageEvent:A.k,MutationEvent:A.k,NotificationEvent:A.k,PageTransitionEvent:A.k,PaymentRequestEvent:A.k,PaymentRequestUpdateEvent:A.k,PopStateEvent:A.k,PresentationConnectionAvailableEvent:A.k,PresentationConnectionCloseEvent:A.k,ProgressEvent:A.k,PromiseRejectionEvent:A.k,PushEvent:A.k,RTCDataChannelEvent:A.k,RTCDTMFToneChangeEvent:A.k,RTCPeerConnectionIceEvent:A.k,RTCTrackEvent:A.k,SecurityPolicyViolationEvent:A.k,SensorErrorEvent:A.k,SpeechRecognitionError:A.k,SpeechRecognitionEvent:A.k,SpeechSynthesisEvent:A.k,StorageEvent:A.k,SyncEvent:A.k,TrackEvent:A.k,TransitionEvent:A.k,WebKitTransitionEvent:A.k,VRDeviceEvent:A.k,VRDisplayEvent:A.k,VRSessionEvent:A.k,MojoInterfaceRequestEvent:A.k,ResourceProgressEvent:A.k,USBConnectionEvent:A.k,IDBVersionChangeEvent:A.k,AudioProcessingEvent:A.k,OfflineAudioCompletionEvent:A.k,WebGLContextEvent:A.k,Event:A.k,InputEvent:A.k,SubmitEvent:A.k,AbsoluteOrientationSensor:A.f,Accelerometer:A.f,AccessibleNode:A.f,AmbientLightSensor:A.f,Animation:A.f,ApplicationCache:A.f,DOMApplicationCache:A.f,OfflineResourceList:A.f,BackgroundFetchRegistration:A.f,BatteryManager:A.f,BroadcastChannel:A.f,CanvasCaptureMediaStreamTrack:A.f,DedicatedWorkerGlobalScope:A.f,EventSource:A.f,FileReader:A.f,FontFaceSet:A.f,Gyroscope:A.f,LinearAccelerationSensor:A.f,Magnetometer:A.f,MediaDevices:A.f,MediaKeySession:A.f,MediaQueryList:A.f,MediaRecorder:A.f,MediaSource:A.f,MediaStream:A.f,MediaStreamTrack:A.f,MessagePort:A.f,MIDIAccess:A.f,MIDIInput:A.f,MIDIOutput:A.f,MIDIPort:A.f,NetworkInformation:A.f,Notification:A.f,OffscreenCanvas:A.f,OrientationSensor:A.f,PaymentRequest:A.f,Performance:A.f,PermissionStatus:A.f,PresentationAvailability:A.f,PresentationConnection:A.f,PresentationConnectionList:A.f,PresentationRequest:A.f,RelativeOrientationSensor:A.f,RemotePlayback:A.f,RTCDataChannel:A.f,DataChannel:A.f,RTCDTMFSender:A.f,RTCPeerConnection:A.f,webkitRTCPeerConnection:A.f,mozRTCPeerConnection:A.f,ScreenOrientation:A.f,Sensor:A.f,ServiceWorker:A.f,ServiceWorkerContainer:A.f,ServiceWorkerGlobalScope:A.f,ServiceWorkerRegistration:A.f,SharedWorker:A.f,SharedWorkerGlobalScope:A.f,SpeechRecognition:A.f,SpeechSynthesis:A.f,SpeechSynthesisUtterance:A.f,VR:A.f,VRDevice:A.f,VRDisplay:A.f,VRSession:A.f,VisualViewport:A.f,WebSocket:A.f,Worker:A.f,WorkerGlobalScope:A.f,WorkerPerformance:A.f,BluetoothDevice:A.f,BluetoothRemoteGATTCharacteristic:A.f,Clipboard:A.f,MojoInterfaceInterceptor:A.f,USB:A.f,IDBDatabase:A.f,IDBOpenDBRequest:A.f,IDBVersionChangeRequest:A.f,IDBRequest:A.f,IDBTransaction:A.f,EventTarget:A.f,File:A.aR,FileList:A.fU,FileWriter:A.fV,HTMLFormElement:A.fY,Gamepad:A.aS,History:A.kS,HTMLCollection:A.cy,HTMLFormControlsCollection:A.cy,HTMLOptionsCollection:A.cy,XMLHttpRequest:A.ej,XMLHttpRequestUpload:A.cz,XMLHttpRequestEventTarget:A.cz,HTMLImageElement:A.df,KeyboardEvent:A.bO,Location:A.lc,HTMLAudioElement:A.cH,HTMLMediaElement:A.cH,MediaList:A.lh,MIDIInputMap:A.hg,MIDIOutputMap:A.hh,MimeType:A.aU,MimeTypeArray:A.hi,MouseEvent:A.aV,DragEvent:A.aV,PointerEvent:A.aV,WheelEvent:A.aV,DocumentFragment:A.z,ShadowRoot:A.z,Attr:A.z,DocumentType:A.z,Node:A.z,NodeList:A.eA,RadioNodeList:A.eA,Plugin:A.aW,PluginArray:A.hB,RTCStatsReport:A.hH,HTMLSelectElement:A.hJ,SourceBuffer:A.aE,SourceBufferList:A.hO,SpeechGrammar:A.aY,SpeechGrammarList:A.hP,SpeechRecognitionResult:A.aZ,Storage:A.hT,CSSStyleSheet:A.at,StyleSheet:A.at,TextTrack:A.aG,TextTrackCue:A.an,VTTCue:A.an,TextTrackCueList:A.i0,TextTrackList:A.i1,TimeRanges:A.lW,Touch:A.b_,TouchList:A.i4,TrackDefaultList:A.lX,CompositionEvent:A.bA,FocusEvent:A.bA,TextEvent:A.bA,TouchEvent:A.bA,UIEvent:A.bA,URL:A.m0,HTMLVideoElement:A.dD,VideoTrackList:A.ie,Window:A.dG,DOMWindow:A.dG,CSSRuleList:A.ir,ClientRect:A.eS,DOMRect:A.eS,GamepadList:A.iD,NamedNodeMap:A.eZ,MozNamedAttrMap:A.eZ,SpeechRecognitionResultList:A.iY,StyleSheetList:A.j5,SVGLength:A.b6,SVGLengthList:A.ha,SVGNumber:A.b7,SVGNumberList:A.ht,SVGPointList:A.lu,SVGStringList:A.hW,SVGAElement:A.n,SVGAnimateElement:A.n,SVGAnimateMotionElement:A.n,SVGAnimateTransformElement:A.n,SVGAnimationElement:A.n,SVGCircleElement:A.n,SVGClipPathElement:A.n,SVGDefsElement:A.n,SVGDescElement:A.n,SVGDiscardElement:A.n,SVGEllipseElement:A.n,SVGFEBlendElement:A.n,SVGFEColorMatrixElement:A.n,SVGFEComponentTransferElement:A.n,SVGFECompositeElement:A.n,SVGFEConvolveMatrixElement:A.n,SVGFEDiffuseLightingElement:A.n,SVGFEDisplacementMapElement:A.n,SVGFEDistantLightElement:A.n,SVGFEFloodElement:A.n,SVGFEFuncAElement:A.n,SVGFEFuncBElement:A.n,SVGFEFuncGElement:A.n,SVGFEFuncRElement:A.n,SVGFEGaussianBlurElement:A.n,SVGFEImageElement:A.n,SVGFEMergeElement:A.n,SVGFEMergeNodeElement:A.n,SVGFEMorphologyElement:A.n,SVGFEOffsetElement:A.n,SVGFEPointLightElement:A.n,SVGFESpecularLightingElement:A.n,SVGFESpotLightElement:A.n,SVGFETileElement:A.n,SVGFETurbulenceElement:A.n,SVGFilterElement:A.n,SVGForeignObjectElement:A.n,SVGGElement:A.n,SVGGeometryElement:A.n,SVGGraphicsElement:A.n,SVGImageElement:A.n,SVGLineElement:A.n,SVGLinearGradientElement:A.n,SVGMarkerElement:A.n,SVGMaskElement:A.n,SVGMetadataElement:A.n,SVGPathElement:A.n,SVGPatternElement:A.n,SVGPolygonElement:A.n,SVGPolylineElement:A.n,SVGRadialGradientElement:A.n,SVGRectElement:A.n,SVGScriptElement:A.n,SVGSetElement:A.n,SVGStopElement:A.n,SVGStyleElement:A.n,SVGElement:A.n,SVGSVGElement:A.n,SVGSwitchElement:A.n,SVGSymbolElement:A.n,SVGTSpanElement:A.n,SVGTextContentElement:A.n,SVGTextElement:A.n,SVGTextPathElement:A.n,SVGTextPositioningElement:A.n,SVGTitleElement:A.n,SVGUseElement:A.n,SVGViewElement:A.n,SVGGradientElement:A.n,SVGComponentTransferFunctionElement:A.n,SVGFEDropShadowElement:A.n,SVGMPathElement:A.n,SVGTransform:A.b9,SVGTransformList:A.i5,AudioBuffer:A.bo,AudioBufferSourceNode:A.d6,AudioContext:A.cp,webkitAudioContext:A.cp,AnalyserNode:A.J,RealtimeAnalyserNode:A.J,AudioDestinationNode:A.J,AudioWorkletNode:A.J,BiquadFilterNode:A.J,ChannelMergerNode:A.J,AudioChannelMerger:A.J,ChannelSplitterNode:A.J,AudioChannelSplitter:A.J,ConvolverNode:A.J,DelayNode:A.J,DynamicsCompressorNode:A.J,IIRFilterNode:A.J,MediaElementAudioSourceNode:A.J,MediaStreamAudioDestinationNode:A.J,MediaStreamAudioSourceNode:A.J,PannerNode:A.J,AudioPannerNode:A.J,webkitAudioPannerNode:A.J,ScriptProcessorNode:A.J,JavaScriptAudioNode:A.J,StereoPannerNode:A.J,WaveShaperNode:A.J,AudioNode:A.J,AudioParam:A.fr,AudioParamMap:A.fs,ConstantSourceNode:A.bJ,OscillatorNode:A.bJ,Oscillator:A.bJ,AudioScheduledSourceNode:A.bJ,AudioTrackList:A.ft,BaseAudioContext:A.e3,GainNode:A.de,AudioGainNode:A.de,OfflineAudioContext:A.hu,WebGLBuffer:A.fA,WebGLFramebuffer:A.h_,WebGLProgram:A.hC,WebGL2RenderingContext:A.du,WebGLTexture:A.bU,WebGLUniformLocation:A.i7,WebGLVertexArrayObject:A.id})
hunkHelpers.setOrUpdateLeafTags({WebGL:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,AudioParam:true,AudioParamMap:true,ConstantSourceNode:true,OscillatorNode:true,Oscillator:true,AudioScheduledSourceNode:false,AudioTrackList:true,BaseAudioContext:false,GainNode:true,AudioGainNode:true,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true})
A.dp.$nativeSuperclassTag="ArrayBufferView"
A.f_.$nativeSuperclassTag="ArrayBufferView"
A.f0.$nativeSuperclassTag="ArrayBufferView"
A.cI.$nativeSuperclassTag="ArrayBufferView"
A.f1.$nativeSuperclassTag="ArrayBufferView"
A.f2.$nativeSuperclassTag="ArrayBufferView"
A.ew.$nativeSuperclassTag="ArrayBufferView"
A.f4.$nativeSuperclassTag="EventTarget"
A.f5.$nativeSuperclassTag="EventTarget"
A.f9.$nativeSuperclassTag="EventTarget"
A.fa.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.n2
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

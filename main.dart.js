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
a[c]=function(){a[c]=function(){A.qY(b)}
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
if(a[b]!==s)A.qZ(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.md(b)
return new s(c,this)}:function(){if(s===null)s=A.md(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.md(a).prototype
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
a(hunkHelpers,v,w,$)}var A={lV:function lV(){},
mN(a){return new A.cR("Field '"+a+"' has been assigned during initialization.")},
bR(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
m1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
pe(a,b,c){return A.m1(A.bR(A.bR(c,a),b))},
eC(a,b,c){return a},
n6(a,b,c,d){A.jW(b,"start")
if(c!=null){A.jW(c,"end")
if(b>c)A.U(A.bp(b,0,c,"start",null))}return new A.e2(a,b,c,d.i("e2<0>"))},
mQ(a,b,c,d){if(t.gt.b(a))return new A.dB(a,b,c.i("@<0>").C(d).i("dB<1,2>"))
return new A.ck(a,b,c.i("@<0>").C(d).i("ck<1,2>"))},
lU(){return new A.bq("No element")},
oT(){return new A.bq("Too many elements")},
oS(){return new A.bq("Too few elements")},
pb(a,b,c){A.fR(a,0,J.am(a)-1,b,c)},
fR(a,b,c,d,e){if(c-b<=32)A.n1(a,b,c,d,e)
else A.n0(a,b,c,d,e)},
n1(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.ax(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.W()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
n0(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.S(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.S(a4+a5,2),f=g-j,e=g+j,d=J.ax(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.W()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.W()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.W()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.W()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.W()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.W()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.W()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.W()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.W()
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
A.fR(a3,a4,r-2,a6,a7)
A.fR(a3,q+2,a5,a6,a7)
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
break}}A.fR(a3,r,q,a6,a7)}else A.fR(a3,r,q,a6,a7)},
cR:function cR(a){this.a=a},
k2:function k2(){},
p:function p(){},
ar:function ar(){},
e2:function e2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bn:function bn(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ck:function ck(a,b,c){this.a=a
this.b=b
this.$ti=c},
dB:function dB(a,b,c){this.a=a
this.b=b
this.$ti=c},
dO:function dO(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
b8:function b8(a,b,c){this.a=a
this.b=b
this.$ti=c},
aI:function aI(a,b,c){this.a=a
this.b=b
this.$ti=c},
e5:function e5(a,b,c){this.a=a
this.b=b
this.$ti=c},
ap:function ap(){},
oP(a){if(typeof a=="number")return B.c.gt(a)
if(t.ha.b(a))return A.cr(a)
return A.li(a)},
oQ(a){return new A.j9(a)},
nQ(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
qM(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
B(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bD(a)
return s},
cr(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
jS(a){return A.p1(a)},
p1(a){var s,r,q,p
if(a instanceof A.v)return A.ak(A.b1(a),null)
if(J.di(a)===B.dP||t.cx.b(a)){s=B.aF(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.ak(A.b1(a),null)},
cY(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
p8(a){var s=A.cY(a).getUTCFullYear()+0
return s},
p6(a){var s=A.cY(a).getUTCMonth()+1
return s},
p2(a){var s=A.cY(a).getUTCDate()+0
return s},
p3(a){var s=A.cY(a).getUTCHours()+0
return s},
p5(a){var s=A.cY(a).getUTCMinutes()+0
return s},
p7(a){var s=A.cY(a).getUTCSeconds()+0
return s},
p4(a){var s=A.cY(a).getUTCMilliseconds()+0
return s},
cC(a){throw A.d(A.nz(a))},
b(a,b){if(a==null)J.am(a)
throw A.d(A.cB(a,b))},
cB(a,b){var s,r="index"
if(!A.ma(b))return new A.bg(!0,b,r,null)
s=A.E(J.am(a))
if(b<0||b>=s)return A.Q(b,a,r,null,s)
return A.mW(b,r)},
nz(a){return new A.bg(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.fD()
s=new Error()
s.dartException=a
r=A.r_
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
r_(){return J.bD(this.dartException)},
U(a){throw A.d(a)},
A(a){throw A.d(A.aU(a))},
bt(a){var s,r,q,p,o,n
a=A.qU(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.ke(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
kf(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
n9(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lW(a,b){var s=b==null,r=s?null:b.method
return new A.fk(a,r,s?null:b.receiver)},
bf(a){if(a==null)return new A.jN(a)
if(a instanceof A.dC)return A.c4(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.c4(a,a.dartException)
return A.qn(a)},
c4(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.cp(r,16)&8191)===10)switch(q){case 438:return A.c4(a,A.lW(A.B(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.B(s)+" (Error "+q+")"
return A.c4(a,new A.dT(p,e))}}if(a instanceof TypeError){o=$.o1()
n=$.o2()
m=$.o3()
l=$.o4()
k=$.o7()
j=$.o8()
i=$.o6()
$.o5()
h=$.oa()
g=$.o9()
f=o.Z(s)
if(f!=null)return A.c4(a,A.lW(A.a8(s),f))
else{f=n.Z(s)
if(f!=null){f.method="call"
return A.c4(a,A.lW(A.a8(s),f))}else{f=m.Z(s)
if(f==null){f=l.Z(s)
if(f==null){f=k.Z(s)
if(f==null){f=j.Z(s)
if(f==null){f=i.Z(s)
if(f==null){f=l.Z(s)
if(f==null){f=h.Z(s)
if(f==null){f=g.Z(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.a8(s)
return A.c4(a,new A.dT(s,f==null?e:f.method))}}}return A.c4(a,new A.h9(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.e0()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.c4(a,new A.bg(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.e0()
return a},
bB(a){var s
if(a instanceof A.dC)return a.b
if(a==null)return new A.em(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.em(a)},
li(a){if(a==null||typeof a!="object")return J.c5(a)
else return A.cr(a)},
nC(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
qK(a,b,c,d,e,f){t.gY.a(a)
switch(A.E(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.lR("Unsupported number of arguments for wrapped closure"))},
bd(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.qK)
a.$identity=s
return s},
oE(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.fX().constructor.prototype):Object.create(new A.cI(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.mG(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.oA(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.mG(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
oA(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.oy)}throw A.d("Error in functionType of tearoff")},
oB(a,b,c,d){var s=A.mD
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
mG(a,b,c,d){var s,r
if(c)return A.oD(a,b,d)
s=b.length
r=A.oB(s,d,a,b)
return r},
oC(a,b,c,d){var s=A.mD,r=A.oz
switch(b?-1:a){case 0:throw A.d(new A.fP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
oD(a,b,c){var s,r,q,p=$.mB
p==null?$.mB=A.mA("interceptor"):p
s=$.mC
s==null?$.mC=A.mA("receiver"):s
r=b.length
q=A.oC(r,c,a,b)
return q},
md(a){return A.oE(a)},
oy(a,b){return A.kU(v.typeUniverse,A.b1(a.a),b)},
mD(a){return a.a},
oz(a){return a.b},
mA(a){var s,r,q,p=new A.cI("receiver","interceptor"),o=J.mM(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.cF("Field name "+a+" not found.",null))},
O(a){if(a==null)A.qo("boolean expression must not be null")
return a},
qo(a){throw A.d(new A.hg(a))},
qY(a){throw A.d(new A.f2(a))},
qE(a){return v.getIsolateTag(a)},
t6(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qP(a){var s,r,q,p,o,n=A.a8($.nD.$1(a)),m=$.l7[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lf[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.pJ($.ny.$2(a,n))
if(q!=null){m=$.l7[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lf[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.lh(s)
$.l7[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.lf[n]=s
return s}if(p==="-"){o=A.lh(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.nL(a,s)
if(p==="*")throw A.d(A.m2(n))
if(v.leafTags[n]===true){o=A.lh(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.nL(a,s)},
nL(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.mg(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lh(a){return J.mg(a,!1,null,!!a.$iy)},
qQ(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.lh(s)
else return J.mg(s,c,null,null)},
qI(){if(!0===$.me)return
$.me=!0
A.qJ()},
qJ(){var s,r,q,p,o,n,m,l
$.l7=Object.create(null)
$.lf=Object.create(null)
A.qH()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nM.$1(o)
if(n!=null){m=A.qQ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qH(){var s,r,q,p,o,n,m=B.bQ()
m=A.dh(B.bR,A.dh(B.bS,A.dh(B.aG,A.dh(B.aG,A.dh(B.bT,A.dh(B.bU,A.dh(B.bV(B.aF),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nD=new A.lc(p)
$.ny=new A.ld(o)
$.nM=new A.le(n)},
dh(a,b){return a(b)||b},
qX(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qU(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cK:function cK(){},
dx:function dx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a7:function a7(a,b){this.a=a
this.$ti=b},
j9:function j9(a){this.a=a},
ke:function ke(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dT:function dT(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
h9:function h9(a){this.a=a},
jN:function jN(a){this.a=a},
dC:function dC(a,b){this.a=a
this.b=b},
em:function em(a){this.a=a
this.b=null},
ca:function ca(){},
eX:function eX(){},
eY:function eY(){},
h0:function h0(){},
fX:function fX(){},
cI:function cI(a,b){this.a=a
this.b=b},
fP:function fP(a){this.a=a},
hg:function hg(a){this.a=a},
aA:function aA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jm:function jm(a){this.a=a},
jl:function jl(a){this.a=a},
jo:function jo(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dL:function dL(a,b){this.a=a
this.$ti=b},
dM:function dM(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lc:function lc(a){this.a=a},
ld:function ld(a){this.a=a},
le:function le(a){this.a=a},
qZ(a){return A.U(A.mN(a))},
nb(a){var s=new A.ku(a)
return s.b=s},
c1(a,b){if(a===$)throw A.d(new A.cR("Field '"+b+"' has not been initialized."))
return a},
de(a,b){if(a!==$)throw A.d(A.mN(b))},
ku:function ku(a){this.a=a
this.b=null},
no(a,b,c){},
cA(a){return a},
mR(a){return new Float32Array(A.cA(a))},
jK(a,b,c){A.no(a,b,c)
return new Float32Array(a,b,c)},
mS(a,b,c){var s
A.no(a,b,c)
s=new Uint8Array(a,b,c)
return s},
p0(a){return new Uint8Array(a)},
by(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.cB(b,a))},
fu:function fu(){},
cq:function cq(){},
cU:function cU(){},
cp:function cp(){},
dQ:function dQ(){},
dP:function dP(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
cV:function cV(){},
dR:function dR(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
mY(a,b){var s=b.c
return s==null?b.c=A.m7(a,b.z,!0):s},
mX(a,b){var s=b.c
return s==null?b.c=A.ev(a,"aq",[b.z]):s},
mZ(a){var s=a.y
if(s===6||s===7||s===8)return A.mZ(a.z)
return s===11||s===12},
pa(a){return a.cy},
be(a){return A.ib(v.typeUniverse,a,!1)},
c2(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.c2(a,s,a0,a1)
if(r===s)return b
return A.nk(a,r,!0)
case 7:s=b.z
r=A.c2(a,s,a0,a1)
if(r===s)return b
return A.m7(a,r,!0)
case 8:s=b.z
r=A.c2(a,s,a0,a1)
if(r===s)return b
return A.nj(a,r,!0)
case 9:q=b.Q
p=A.eB(a,q,a0,a1)
if(p===q)return b
return A.ev(a,b.z,p)
case 10:o=b.z
n=A.c2(a,o,a0,a1)
m=b.Q
l=A.eB(a,m,a0,a1)
if(n===o&&l===m)return b
return A.m5(a,n,l)
case 11:k=b.z
j=A.c2(a,k,a0,a1)
i=b.Q
h=A.qk(a,i,a0,a1)
if(j===k&&h===i)return b
return A.ni(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.eB(a,g,a0,a1)
o=b.z
n=A.c2(a,o,a0,a1)
if(f===g&&n===o)return b
return A.m6(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.iu("Attempted to substitute unexpected RTI kind "+c))}},
eB(a,b,c,d){var s,r,q,p,o=b.length,n=A.kW(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.c2(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
ql(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.kW(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.c2(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
qk(a,b,c,d){var s,r=b.a,q=A.eB(a,r,c,d),p=b.b,o=A.eB(a,p,c,d),n=b.c,m=A.ql(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.hy()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
qw(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.qF(s)
return a.$S()}return null},
nF(a,b){var s
if(A.mZ(b))if(a instanceof A.ca){s=A.qw(a)
if(s!=null)return s}return A.b1(a)},
b1(a){var s
if(a instanceof A.v){s=a.$ti
return s!=null?s:A.m8(a)}if(Array.isArray(a))return A.T(a)
return A.m8(J.di(a))},
T(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
F(a){var s=a.$ti
return s!=null?s:A.m8(a)},
m8(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.q0(a,s)},
q0(a,b){var s=a instanceof A.ca?a.__proto__.__proto__.constructor:b,r=A.pG(v.typeUniverse,s.name)
b.$ccache=r
return r},
qF(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.ib(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
qz(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.et(a)
q=A.ib(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.et(q):p},
r0(a){return A.qz(A.ib(v.typeUniverse,a,!1))},
q_(a){var s,r,q,p,o=this
if(o===t.K)return A.dd(o,a,A.q4)
if(!A.bC(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.dd(o,a,A.q7)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.ma
else if(r===t.i||r===t.cZ)q=A.q3
else if(r===t.N)q=A.q5
else q=r===t.k4?A.kZ:null
if(q!=null)return A.dd(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.qN)){o.r="$i"+p
if(p==="o")return A.dd(o,a,A.q2)
return A.dd(o,a,A.q6)}}else if(s===7)return A.dd(o,a,A.pY)
return A.dd(o,a,A.pW)},
dd(a,b,c){a.b=c
return a.b(b)},
pZ(a){var s,r=this,q=A.pV
if(!A.bC(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.pK
else if(r===t.K)q=A.pI
else{s=A.eD(r)
if(s)q=A.pX}r.a=q
return r.a(a)},
l_(a){var s,r=a.y
if(!A.bC(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&A.l_(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pW(a){var s=this
if(a==null)return A.l_(s)
return A.S(v.typeUniverse,A.nF(a,s),null,s,null)},
pY(a){if(a==null)return!0
return this.z.b(a)},
q6(a){var s,r=this
if(a==null)return A.l_(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.di(a)[s]},
q2(a){var s,r=this
if(a==null)return A.l_(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.di(a)[s]},
pV(a){var s,r=this
if(a==null){s=A.eD(r)
if(s)return a}else if(r.b(a))return a
A.nr(a,r)},
pX(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.nr(a,s)},
nr(a,b){throw A.d(A.nh(A.nc(a,A.nF(a,b),A.ak(b,null))))},
qv(a,b,c,d){var s=null
if(A.S(v.typeUniverse,a,s,b,s))return a
throw A.d(A.nh("The type argument '"+A.ak(a,s)+"' is not a subtype of the type variable bound '"+A.ak(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
nc(a,b,c){var s=A.f7(a),r=A.ak(b==null?A.b1(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
nh(a){return new A.eu("TypeError: "+a)},
ai(a,b){return new A.eu("TypeError: "+A.nc(a,null,b))},
q4(a){return a!=null},
pI(a){if(a!=null)return a
throw A.d(A.ai(a,"Object"))},
q7(a){return!0},
pK(a){return a},
kZ(a){return!0===a||!1===a},
rS(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.ai(a,"bool"))},
rU(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.ai(a,"bool"))},
rT(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.ai(a,"bool?"))},
nn(a){if(typeof a=="number")return a
throw A.d(A.ai(a,"double"))},
rW(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ai(a,"double"))},
rV(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ai(a,"double?"))},
ma(a){return typeof a=="number"&&Math.floor(a)===a},
E(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.ai(a,"int"))},
rY(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.ai(a,"int"))},
rX(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.ai(a,"int?"))},
q3(a){return typeof a=="number"},
b_(a){if(typeof a=="number")return a
throw A.d(A.ai(a,"num"))},
t_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ai(a,"num"))},
rZ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ai(a,"num?"))},
q5(a){return typeof a=="string"},
a8(a){if(typeof a=="string")return a
throw A.d(A.ai(a,"String"))},
t0(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.ai(a,"String"))},
pJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.ai(a,"String?"))},
qg(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.ak(a[q],b)
return s},
ns(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.c([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.k(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.b(a5,j)
m=B.i.B(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.ak(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.ak(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.ak(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.ak(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.ak(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ak(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.ak(a.z,b)
return s}if(l===7){r=a.z
s=A.ak(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.ak(a.z,b)+">"
if(l===9){p=A.qm(a.z)
o=a.Q
return o.length>0?p+("<"+A.qg(o,b)+">"):p}if(l===11)return A.ns(a,b,null)
if(l===12)return A.ns(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
qm(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
pH(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pG(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.ib(a,b,!1)
else if(typeof m=="number"){s=m
r=A.ew(a,5,"#")
q=A.kW(s)
for(p=0;p<s;++p)q[p]=r
o=A.ev(a,b,q)
n[b]=o
return o}else return m},
pE(a,b){return A.nl(a.tR,b)},
pD(a,b){return A.nl(a.eT,b)},
ib(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.nf(A.nd(a,null,b,c))
r.set(b,s)
return s},
kU(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.nf(A.nd(a,b,c,!0))
q.set(c,r)
return r},
pF(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.m5(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
c0(a,b){b.a=A.pZ
b.b=A.q_
return b},
ew(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aX(null,null)
s.y=b
s.cy=c
r=A.c0(a,s)
a.eC.set(c,r)
return r},
nk(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.pB(a,b,r,c)
a.eC.set(r,s)
return s},
pB(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bC(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.aX(null,null)
q.y=6
q.z=b
q.cy=c
return A.c0(a,q)},
m7(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.pA(a,b,r,c)
a.eC.set(r,s)
return s},
pA(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.bC(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.eD(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.eD(q.z))return q
else return A.mY(a,b)}}p=new A.aX(null,null)
p.y=7
p.z=b
p.cy=c
return A.c0(a,p)},
nj(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.py(a,b,r,c)
a.eC.set(r,s)
return s},
py(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bC(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.ev(a,"aq",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.aX(null,null)
q.y=8
q.z=b
q.cy=c
return A.c0(a,q)},
pC(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aX(null,null)
s.y=13
s.z=b
s.cy=q
r=A.c0(a,s)
a.eC.set(q,r)
return r},
ia(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
px(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
ev(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ia(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aX(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.c0(a,r)
a.eC.set(p,q)
return q},
m5(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.ia(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aX(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.c0(a,o)
a.eC.set(q,n)
return n},
ni(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ia(m)
if(j>0){s=l>0?",":""
r=A.ia(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.px(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aX(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.c0(a,o)
a.eC.set(q,r)
return r},
m6(a,b,c,d){var s,r=b.cy+("<"+A.ia(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.pz(a,b,c,r,d)
a.eC.set(r,s)
return s},
pz(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.kW(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.c2(a,b,r,0)
m=A.eB(a,c,r,0)
return A.m6(a,n,m,c!==m)}}l=new A.aX(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.c0(a,l)},
nd(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nf(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.pr(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.ne(a,r,h,g,!1)
else if(q===46)r=A.ne(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.bY(a.u,a.e,g.pop()))
break
case 94:g.push(A.pC(a.u,g.pop()))
break
case 35:g.push(A.ew(a.u,5,"#"))
break
case 64:g.push(A.ew(a.u,2,"@"))
break
case 126:g.push(A.ew(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.m4(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.ev(p,n,o))
else{m=A.bY(p,a.e,n)
switch(m.y){case 11:g.push(A.m6(p,m,o,a.n))
break
default:g.push(A.m5(p,m,o))
break}}break
case 38:A.ps(a,g)
break
case 42:p=a.u
g.push(A.nk(p,A.bY(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.m7(p,A.bY(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.nj(p,A.bY(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.hy()
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
A.m4(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.ni(p,A.bY(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.m4(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.pu(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.bY(a.u,a.e,i)},
pr(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ne(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.pH(s,o.z)[p]
if(n==null)A.U('No "'+p+'" in "'+A.pa(o)+'"')
d.push(A.kU(s,o,n))}else d.push(p)
return m},
ps(a,b){var s=b.pop()
if(0===s){b.push(A.ew(a.u,1,"0&"))
return}if(1===s){b.push(A.ew(a.u,4,"1&"))
return}throw A.d(A.iu("Unexpected extended operation "+A.B(s)))},
bY(a,b,c){if(typeof c=="string")return A.ev(a,c,a.sEA)
else if(typeof c=="number")return A.pt(a,b,c)
else return c},
m4(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bY(a,b,c[s])},
pu(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bY(a,b,c[s])},
pt(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.d(A.iu("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.d(A.iu("Bad index "+c+" for "+b.l(0)))},
S(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.bC(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.bC(b))return!1
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
if(p===6){s=A.mY(a,d)
return A.S(a,b,c,s,e)}if(r===8){if(!A.S(a,b.z,c,d,e))return!1
return A.S(a,A.mX(a,b),c,d,e)}if(r===7){s=A.S(a,t.P,c,d,e)
return s&&A.S(a,b.z,c,d,e)}if(p===8){if(A.S(a,b,c,d.z,e))return!0
return A.S(a,b,c,A.mX(a,d),e)}if(p===7){s=A.S(a,b,c,t.P,e)
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
if(!A.S(a,k,c,j,e)||!A.S(a,j,e,k,c))return!1}return A.nt(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.nt(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.q1(a,b,c,d,e)}return!1},
nt(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
q1(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.kU(a,b,r[o])
return A.nm(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.nm(a,n,null,c,m,e)},
nm(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.S(a,r,d,q,f))return!1}return!0},
eD(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.bC(a))if(r!==7)if(!(r===6&&A.eD(a.z)))s=r===8&&A.eD(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qN(a){var s
if(!A.bC(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bC(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.iD},
nl(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
kW(a){return a>0?new Array(a):v.typeUniverse.sEA},
aX:function aX(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
hy:function hy(){this.c=this.b=this.a=null},
et:function et(a){this.a=a},
ht:function ht(){},
eu:function eu(a){this.a=a},
pj(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.qp()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bd(new A.kr(q),1)).observe(s,{childList:true})
return new A.kq(q,s,r)}else if(self.setImmediate!=null)return A.qq()
return A.qr()},
pk(a){self.scheduleImmediate(A.bd(new A.ks(t.M.a(a)),0))},
pl(a){self.setImmediate(A.bd(new A.kt(t.M.a(a)),0))},
pm(a){t.M.a(a)
A.pv(0,a)},
n7(a,b){var s=B.d.S(a.a,1000)
return A.pw(s<0?0:s,b)},
pv(a,b){var s=new A.es(!0)
s.dF(a,b)
return s},
pw(a,b){var s=new A.es(!1)
s.dG(a,b)
return s},
bz(a){return new A.hh(new A.K($.G,a.i("K<0>")),a.i("hh<0>"))},
bx(a,b){a.$2(0,null)
b.b=!0
return b.a},
aj(a,b){A.pL(a,b)},
bw(a,b){b.a4(0,a)},
bv(a,b){b.bh(A.bf(a),A.bB(a))},
pL(a,b){var s,r,q=new A.kX(b),p=new A.kY(b)
if(a instanceof A.K)a.cr(q,p,t.z)
else{s=t.z
if(t.p.b(a))a.aO(q,p,s)
else{r=new A.K($.G,t.g)
r.a=8
r.c=a
r.cr(q,p,s)}}},
bA(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.G.bB(new A.l1(s),t.H,t.S,t.z)},
rR(a){return new A.db(a,1)},
po(){return B.fW},
pp(a){return new A.db(a,3)},
qa(a,b){return new A.ep(a,b.i("ep<0>"))},
iv(a,b){var s=A.eC(a,"error",t.K)
return new A.ds(s,b==null?A.lN(a):b)},
lN(a){var s
if(t.fz.b(a)){s=a.gay()
if(s!=null)return s}return B.bY},
oN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=null,e=!1,d=b.i("K<o<0>>"),c=new A.K($.G,d)
g.a=null
g.b=0
s=A.nb("error")
r=A.nb("stackTrace")
q=new A.j7(g,f,e,c,s,r)
try{for(l=a.length,k=t.P,j=0,i=0;j<a.length;a.length===l||(0,A.A)(a),++j){p=a[j]
o=i
p.aO(new A.j6(g,o,c,f,e,s,r,b),q,k)
i=++g.b}if(i===0){l=c
l.ar(A.c([],b.i("t<0>")))
return l}g.a=A.b7(i,null,!1,b.i("0?"))}catch(h){n=A.bf(h)
m=A.bB(h)
if(g.b===0||A.O(e)){l=n
r=m
A.eC(l,"error",t.K)
$.G!==B.k
if(r==null)r=A.lN(l)
d=new A.K($.G,d)
d.aV(l,r)
return d}else{s.b=n
r.b=m}}return c},
kA(a,b){var s,r,q
for(s=t.g;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aD()
b.aX(a)
A.da(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.ck(q)}},
da(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.p;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.io(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.da(c.a,b)
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
A.io(i.a,i.b)
return}f=$.G
if(f!==g)$.G=g
else f=null
b=b.c
if((b&15)===8)new A.kI(p,c,m).$0()
else if(n){if((b&1)!==0)new A.kH(p,i).$0()}else if((b&2)!==0)new A.kG(c,p).$0()
if(f!=null)$.G=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("aq<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.aE(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.kA(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.aE(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
qe(a,b){var s
if(t.ng.b(a))return b.bB(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.mx(a,"onError",u.c))},
qb(){var s,r
for(s=$.df;s!=null;s=$.df){$.eA=null
r=s.b
$.df=r
if(r==null)$.ez=null
s.a.$0()}},
qj(){$.m9=!0
try{A.qb()}finally{$.eA=null
$.m9=!1
if($.df!=null)$.mk().$1(A.nA())}},
nw(a){var s=new A.hi(a),r=$.ez
if(r==null){$.df=$.ez=s
if(!$.m9)$.mk().$1(A.nA())}else $.ez=r.b=s},
qh(a){var s,r,q,p=$.df
if(p==null){A.nw(a)
$.eA=$.ez
return}s=new A.hi(a)
r=$.eA
if(r==null){s.b=p
$.df=$.eA=s}else{q=r.b
s.b=q
$.eA=r.b=s
if(q==null)$.ez=s}},
nN(a){var s=null,r=$.G
if(B.k===r){A.dg(s,s,B.k,a)
return}A.dg(s,s,r,t.M.a(r.cB(a)))},
rD(a,b){A.eC(a,"stream",t.K)
return new A.hX(b.i("hX<0>"))},
n4(a){return new A.d8(null,null,null,a.i("d8<0>"))},
mc(a){return},
pn(a,b){if(b==null)b=A.qt()
if(t.fQ.b(b))return a.bB(b,t.z,t.K,t.l)
if(t.i6.b(b))return t.y.a(b)
throw A.d(A.cF("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
qd(a,b){A.io(a,b)},
qc(){},
pf(a,b){var s=$.G
if(s===B.k)return A.n7(a,t.my.a(b))
return A.n7(a,t.my.a(s.cC(b,t.hU)))},
io(a,b){A.qh(new A.l0(a,b))},
nu(a,b,c,d,e){var s,r=$.G
if(r===c)return d.$0()
$.G=c
s=r
try{r=d.$0()
return r}finally{$.G=s}},
nv(a,b,c,d,e,f,g){var s,r=$.G
if(r===c)return d.$1(e)
$.G=c
s=r
try{r=d.$1(e)
return r}finally{$.G=s}},
qf(a,b,c,d,e,f,g,h,i){var s,r=$.G
if(r===c)return d.$2(e,f)
$.G=c
s=r
try{r=d.$2(e,f)
return r}finally{$.G=s}},
dg(a,b,c,d){t.M.a(d)
if(B.k!==c)d=c.cB(d)
A.nw(d)},
kr:function kr(a){this.a=a},
kq:function kq(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
es:function es(a){this.a=a
this.b=null
this.c=0},
kT:function kT(a,b){this.a=a
this.b=b},
kS:function kS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hh:function hh(a,b){this.a=a
this.b=!1
this.$ti=b},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
l1:function l1(a){this.a=a},
db:function db(a,b){this.a=a
this.b=b},
c_:function c_(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
ep:function ep(a,b){this.a=a
this.$ti=b},
ds:function ds(a,b){this.a=a
this.b=b},
j7:function j7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j6:function j6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
e7:function e7(){},
aT:function aT(a,b){this.a=a
this.$ti=b},
dc:function dc(a,b){this.a=a
this.$ti=b},
cy:function cy(a,b,c,d,e){var _=this
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
kx:function kx(a,b){this.a=a
this.b=b},
kF:function kF(a,b){this.a=a
this.b=b},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
kD:function kD(a,b,c){this.a=a
this.b=b
this.c=c},
kz:function kz(a,b){this.a=a
this.b=b},
kE:function kE(a,b){this.a=a
this.b=b},
ky:function ky(a,b,c){this.a=a
this.b=b
this.c=c},
kI:function kI(a,b,c){this.a=a
this.b=b
this.c=c},
kJ:function kJ(a){this.a=a},
kH:function kH(a,b){this.a=a
this.b=b},
kG:function kG(a,b){this.a=a
this.b=b},
hi:function hi(a){this.a=a
this.b=null},
cs:function cs(){},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(a,b){this.a=a
this.b=b},
br:function br(){},
en:function en(){},
kQ:function kQ(a){this.a=a},
hj:function hj(){},
d8:function d8(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
bX:function bX(a,b){this.a=a
this.$ti=b},
d9:function d9(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
e6:function e6(){},
eo:function eo(){},
ho:function ho(){},
cv:function cv(a,b){this.b=a
this.a=null
this.$ti=b},
bZ:function bZ(){},
kN:function kN(a,b){this.a=a
this.b=b},
bc:function bc(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
hX:function hX(a){this.$ti=a},
ex:function ex(){},
l0:function l0(a,b){this.a=a
this.b=b},
hQ:function hQ(){},
kO:function kO(a,b){this.a=a
this.b=b},
kP:function kP(a,b,c){this.a=a
this.b=b
this.c=c},
lX(a,b,c,d){if(b==null){if(a==null)return new A.aA(c.i("@<0>").C(d).i("aA<1,2>"))}else if(a==null)a=A.qy()
return A.pq(A.qx(),a,b,c,d)},
b6(a,b,c){return b.i("@<0>").C(c).i("jn<1,2>").a(A.nC(a,new A.aA(b.i("@<0>").C(c).i("aA<1,2>"))))},
aa(a,b){return new A.aA(a.i("@<0>").C(b).i("aA<1,2>"))},
pq(a,b,c,d,e){var s=c!=null?c:new A.kL(d)
return new A.eb(a,b,s,d.i("@<0>").C(e).i("eb<1,2>"))},
jq(a){return new A.ec(a.i("ec<0>"))},
m3(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
pR(a,b){return J.Z(a,b)},
pS(a){return J.c5(a)},
mL(a,b,c){var s,r
if(A.mb(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.k($.aJ,a)
try{A.q8(a,s)}finally{if(0>=$.aJ.length)return A.b($.aJ,-1)
$.aJ.pop()}r=A.n5(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
lT(a,b,c){var s,r
if(A.mb(a))return b+"..."+c
s=new A.fZ(b)
B.a.k($.aJ,a)
try{r=s
r.a=A.n5(r.a,a,", ")}finally{if(0>=$.aJ.length)return A.b($.aJ,-1)
$.aJ.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mb(a){var s,r
for(s=$.aJ.length,r=0;r<s;++r)if(a===$.aJ[r])return!0
return!1},
q8(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
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
oY(a,b,c){var s=A.lX(null,null,b,c)
a.w(0,new A.jp(s,b,c))
return s},
mO(a,b,c){var s=A.lX(null,null,b,c)
s.a3(0,a)
return s},
lZ(a){var s,r={}
if(A.mb(a))return"{...}"
s=new A.fZ("")
try{B.a.k($.aJ,a)
s.a+="{"
r.a=!0
J.ov(a,new A.jt(r,s))
s.a+="}"}finally{if(0>=$.aJ.length)return A.b($.aJ,-1)
$.aJ.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
kM:function kM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eb:function eb(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
kL:function kL(a){this.a=a},
ec:function ec(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hF:function hF(a){this.a=a
this.b=null},
ed:function ed(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dH:function dH(){},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
dN:function dN(){},
jt:function jt(a,b){this.a=a
this.b=b},
z:function z(){},
jv:function jv(a){this.a=a},
dZ:function dZ(){},
ej:function ej(){},
ey:function ey(){},
oM(a){if(a instanceof A.ca)return a.l(0)
return"Instance of '"+A.jS(a)+"'"},
b7(a,b,c,d){var s,r=J.oU(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
p_(a,b){var s,r=A.c([],b.i("t<0>"))
for(s=J.al(a);s.n();)B.a.k(r,b.a(s.gp(s)))
return r},
mP(a,b,c){var s=A.oZ(a,c)
return s},
oZ(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("t<0>"))
s=A.c([],b.i("t<0>"))
for(r=J.al(a);r.n();)B.a.k(s,r.gp(r))
return s},
lY(a,b,c){var s,r=J.oV(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
n5(a,b,c){var s=J.al(b)
if(!s.n())return a
if(c.length===0){do a+=A.B(s.gp(s))
while(s.n())}else{a+=A.B(s.gp(s))
for(;s.n();)a=a+c+A.B(s.gp(s))}return a},
oG(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
oH(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
f3(a){if(a>=10)return""+a
return"0"+a},
iX(a){return new A.ae(1000*a)},
f7(a){if(typeof a=="number"||A.kZ(a)||a==null)return J.bD(a)
if(typeof a=="string")return JSON.stringify(a)
return A.oM(a)},
iu(a){return new A.dr(a)},
cF(a,b){return new A.bg(!1,null,b,a)},
mx(a,b,c){return new A.bg(!0,a,b,c)},
p9(a){var s=null
return new A.cZ(s,s,!1,s,s,a)},
mW(a,b){return new A.cZ(null,null,!0,a,b,"Value not in range")},
bp(a,b,c,d,e){return new A.cZ(b,c,!0,a,d,"Invalid value")},
jX(a,b,c){if(0>a||a>c)throw A.d(A.bp(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.bp(b,a,c,"end",null))
return b}return c},
jW(a,b){if(a<0)throw A.d(A.bp(a,0,null,b,null))
return a},
Q(a,b,c,d,e){var s=A.E(e==null?J.am(b):e)
return new A.fg(s,!0,a,c,"Index out of range")},
C(a){return new A.hb(a)},
m2(a){return new A.h8(a)},
af(a){return new A.bq(a)},
aU(a){return new A.f_(a)},
lR(a){return new A.hv(a)},
jO(a,b,c,d){var s,r
if(B.B===c)return A.pe(B.c.gt(a),B.c.gt(b),$.lK())
if(B.B===d){s=B.c.gt(a)
b=B.c.gt(b)
c=J.c5(c)
return A.m1(A.bR(A.bR(A.bR($.lK(),s),b),c))}s=B.c.gt(a)
b=B.c.gt(b)
c=J.c5(c)
d=J.c5(d)
r=$.lK()
return A.m1(A.bR(A.bR(A.bR(A.bR(r,s),b),c),d))},
ip(a){A.mh(A.B(a))},
cc:function cc(a,b){this.a=a
this.b=b},
ae:function ae(a){this.a=a},
kv:function kv(){},
L:function L(){},
dr:function dr(a){this.a=a},
bV:function bV(){},
fD:function fD(){},
bg:function bg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cZ:function cZ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fg:function fg(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hb:function hb(a){this.a=a},
h8:function h8(a){this.a=a},
bq:function bq(a){this.a=a},
f_:function f_(a){this.a=a},
fG:function fG(){},
e0:function e0(){},
f2:function f2(a){this.a=a},
hv:function hv(a){this.a=a},
j:function j(){},
R:function R(){},
cS:function cS(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(){},
v:function v(){},
i_:function i_(){},
fZ:function fZ(a){this.a=a},
nB(){return document},
hu(a,b,c,d,e){var s=A.nx(new A.kw(c),t.U)
if(s!=null&&!0)J.ot(a,b,s,!1)
return new A.ea(a,b,s,!1,e.i("ea<0>"))},
pO(a){var s
if(t.dA.b(a))return a
s=new A.ko([],[])
s.c=!0
return s.bK(a)},
nx(a,b){var s=$.G
if(s===B.k)return a
return s.cC(a,b)},
q:function q(){},
it:function it(){},
eL:function eL(){},
eM:function eM(){},
eR:function eR(){},
eS:function eS(){},
c7:function c7(){},
b4:function b4(){},
iO:function iO(){},
I:function I(){},
cL:function cL(){},
iP:function iP(){},
aV:function aV(){},
bi:function bi(){},
iQ:function iQ(){},
iR:function iR(){},
iS:function iS(){},
bj:function bj(){},
bK:function bK(){},
dz:function dz(){},
dA:function dA(){},
f5:function f5(){},
iT:function iT(){},
a5:function a5(){},
k:function k(){},
e:function e(){},
ay:function ay(){},
f8:function f8(){},
f9:function f9(){},
fb:function fb(){},
az:function az(){},
jd:function jd(){},
cf:function cf(){},
dG:function dG(){},
cg:function cg(){},
cP:function cP(){},
bm:function bm(){},
js:function js(){},
cn:function cn(){},
jx:function jx(){},
fq:function fq(){},
jG:function jG(a){this.a=a},
fr:function fr(){},
jH:function jH(a){this.a=a},
aB:function aB(){},
fs:function fs(){},
aC:function aC(){},
w:function w(){},
dS:function dS(){},
aD:function aD(){},
fJ:function fJ(){},
fO:function fO(){},
k_:function k_(a){this.a=a},
fQ:function fQ(){},
av:function av(){},
fT:function fT(){},
aE:function aE(){},
fU:function fU(){},
aF:function aF(){},
fY:function fY(){},
k5:function k5(a){this.a=a},
ag:function ag(){},
aw:function aw(){},
ab:function ab(){},
h2:function h2(){},
h3:function h3(){},
kc:function kc(){},
aG:function aG(){},
h5:function h5(){},
kd:function kd(){},
bb:function bb(){},
kg:function kg(){},
d6:function d6(){},
hd:function hd(){},
d7:function d7(){},
hm:function hm(){},
e8:function e8(){},
hz:function hz(){},
ee:function ee(){},
hU:function hU(){},
i0:function i0(){},
lQ:function lQ(a,b){this.a=a
this.$ti=b},
e9:function e9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ea:function ea(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
kw:function kw(a){this.a=a},
r:function r(){},
dD:function dD(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
hn:function hn(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
hw:function hw(){},
hx:function hx(){},
hA:function hA(){},
hB:function hB(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
hO:function hO(){},
hP:function hP(){},
hR:function hR(){},
ek:function ek(){},
el:function el(){},
hS:function hS(){},
hT:function hT(){},
hV:function hV(){},
i1:function i1(){},
i2:function i2(){},
eq:function eq(){},
er:function er(){},
i4:function i4(){},
i5:function i5(){},
ic:function ic(){},
id:function id(){},
ie:function ie(){},
ig:function ig(){},
ih:function ih(){},
ii:function ii(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
np(a){var s,r
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.kZ(a))return a
if(A.nI(a))return A.c3(a)
if(Array.isArray(a)){s=[]
for(r=0;r<a.length;++r)s.push(A.np(a[r]))
return s}return a},
c3(a){var s,r,q,p,o
if(a==null)return null
s=A.aa(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.A)(r),++p){o=r[p]
s.j(0,o,A.np(a[o]))}return s},
nI(a){var s=Object.getPrototypeOf(a)
return s===Object.prototype||s===null},
lO(){return window.navigator.userAgent},
kn:function kn(){},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a,b){this.a=a
this.b=b
this.c=!1},
qT(a,b){var s=new A.K($.G,b.i("K<0>")),r=new A.aT(s,b.i("aT<0>"))
a.then(A.bd(new A.lt(r,b),1),A.bd(new A.lu(r),1))
return s},
jM:function jM(a){this.a=a},
lt:function lt(a,b){this.a=a
this.b=b},
lu:function lu(a){this.a=a},
m0(){return B.m},
hC:function hC(){},
aO:function aO(){},
fl:function fl(){},
aQ:function aQ(){},
fE:function fE(){},
jR:function jR(){},
h_:function h_(){},
n:function n(){},
aR:function aR(){},
h6:function h6(){},
hD:function hD(){},
hE:function hE(){},
hM:function hM(){},
hN:function hN(){},
hY:function hY(){},
hZ:function hZ(){},
i6:function i6(){},
i7:function i7(){},
oO(a){return new GainNode(a)},
b2:function b2(){},
du:function du(){},
c6:function c6(){},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
H:function H(){},
eN:function eN(){},
eO:function eO(){},
iB:function iB(a){this.a=a},
bh:function bh(){},
eP:function eP(){},
dv:function dv(){},
cO:function cO(){},
fF:function fF(){},
hl:function hl(){},
eU:function eU(){},
fc:function fc(){},
fK:function fK(){},
d_:function d_(){},
bs:function bs(){},
h7:function h7(){},
hc:function hc(){},
bQ:function bQ(a){this.a=a},
e1:function e1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mI(a,b){var s=A.b7(7,null,!1,b.i("0?")),r=a==null?A.r1():a
return new A.ff(r,s,b.i("ff<0>"))},
ff:function ff(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
kV:function kV(a,b){this.a=a
this.$ti=b},
cz:function cz(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=-1
_.$ti=c},
bG(a){return new A.h(a)},
h:function h(a){this.a=a},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
at:function at(a,b){this.a=a
this.b=b},
lM(a,b,c,d,e,f,g){return new A.cE(g,b,e,a,f)},
nH(a,b){if(b.e)return!1
if(a.x)return!0
if(b.x)return!0
return!1},
qG(a,b){return B.a.ex(a.a,new A.lb(b))},
ft(a,b,c,d,e,f,g,h,i,j){return new A.bN(i,a,h,j,b,e,c,f)},
qC(a){var s,r,q=a.f.$0(),p=new A.jz(new Uint8ClampedArray(4000)),o=a.d,n=A.c([],t.I),m=A.mO(B.ao,t.b,t.R),l=A.c([],t.Q),k=A.c([],t.d)
for(s=J.al(a.r.$0());s.n();){r=s.gp(s)
switch(r.gbQ()){case B.ar:m.h(0,B.E)
m.j(0,B.E,r)
break
case B.as:m.h(0,B.r)
m.j(0,B.r,r)
break
case B.at:m.h(0,B.F)
m.j(0,B.F,r)
break
default:B.a.k(n,r)}}return A.lM(new A.ir(q,p),new A.c9(o,o,1,0,0,0,0,new A.cM(n,m),a.c,l,k,new A.cN(a.a)),1,a.z,!1,!1,a.e.$0())},
cE:function cE(a,b,c,d,e){var _=this
_.a=100
_.b=a
_.c=b
_.e=c
_.r=d
_.x=e},
is:function is(a){this.a=a},
ir:function ir(a,b){this.a=a
this.b=b
this.c=null},
ac:function ac(a,b){this.a=a
this.b=b},
ao:function ao(){},
bS:function bS(){},
bT:function bT(){},
cJ:function cJ(){},
bP:function bP(){},
fM:function fM(){this.b=!1},
dW:function dW(){this.a=null},
fN:function fN(a){this.a=a},
lb:function lb(a){this.a=a},
bE:function bE(){},
b5:function b5(a){this.a=a},
bN:function bN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.z=h},
lD:function lD(){},
lB:function lB(){},
lC:function lC(){},
lx:function lx(){},
lv:function lv(){},
lw:function lw(){},
lG:function lG(){},
lE:function lE(){},
lF:function lF(){},
lJ:function lJ(){},
lH:function lH(){},
lI:function lI(){},
l5:function l5(){},
l3:function l3(){},
l4:function l4(){},
iI:function iI(){this.b=this.a=0},
Y:function Y(){},
cm:function cm(a,b){this.b=a
this.a=b},
cl:function cl(a,b){this.b=a
this.a=b},
qS(a,b,c){var s,r,q=b.e||b.a===0
if(q)return!1
s=b.c
if(s!=null&&s.b<=0){a.$1(new A.dy(b))
return!0}r=b.r
if(r!=null){a.$1(r.ey(b,c))
b.a=0
return!0}return!1},
fd:function fd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1
_.Q=_.z=_.y=null
_.ch=!1},
j8:function j8(a,b){this.a=a
this.b=b},
mH(a){switch(a.a){case 0:case 1:case 2:case 3:case 4:return!1
case 5:case 6:case 7:return!0}},
dw(a,b,c){var s,r,q,p
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
eH(a,b,c,d,e,f){return new A.eG(f,c,b,d,e,a)},
mv(){return new A.eG(10,10,10,10,10,10)},
oF(a){var s,r=a.a,q=a.b
if(r+q===1)return a
s=Math.sqrt(Math.pow(r,2)+Math.pow(q,2))
return new A.at(r/s,q/s)},
bL(a){switch(a){case B.ak:case B.al:case B.H:case B.I:case B.K:case B.L:case B.Y:case B.Z:case B.T:case B.G:case B.U:case B.V:case B.W:case null:return!1
case B.S:case B.v:case B.J:case B.X:return!0}},
oR(a){switch(a){case B.ak:case B.al:case B.H:case B.I:case B.K:case B.L:case B.Y:case B.Z:case B.T:case B.G:case B.U:case B.V:case null:case B.W:return!1
case B.S:case B.v:case B.J:case B.X:return!0}},
e_:function e_(a,b){this.a=a
this.b=b},
bk:function bk(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
aN:function aN(a,b,c){this.b=a
this.c=b
this.e=c},
iN:function iN(){},
a_:function a_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fe:function fe(a,b){this.a=a
this.b=b},
bI:function bI(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b){this.a=a
this.b=b},
aS:function aS(a,b){this.a=a
this.b=b},
jy:function jy(){},
bH:function bH(){},
cb:function cb(a,b){this.a=a
this.b=b},
a2:function a2(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.y=e
_.z=f},
dn:function dn(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
au:function au(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.f=c
_.r=d
_.Q=e
_.ch=f},
cG:function cG(a,b){this.a=a
this.b=b},
an:function an(a){this.c=a},
eG:function eG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c9:function c9(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
cH:function cH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cN:function cN(a){this.a=a},
cM:function cM(a,b){this.a=a
this.b=b},
fH:function fH(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=a
this.b=b},
f0:function f0(){},
d2:function d2(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b){this.a=a
this.b=b},
as:function as(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a,b){this.a=a
this.b=b},
ah:function ah(a,b){this.a=a
this.b=b},
cj:function cj(a,b){this.a=a
this.b=b},
b3:function b3(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
fn:function fn(a,b){this.b=a
this.c=b},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
a1:function a1(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b},
jz:function jz(a){this.a=a},
cT:function cT(a,b){this.a=a
this.b=b},
iU:function iU(a){var _=this
_.a=a
_.b=!1
_.c=null
_.d=0},
iY:function iY(a){this.a=a},
iZ:function iZ(){},
oL(a,a0,a1){var s,r,q,p,o,n,m,l,k="a_position",j=5126,i="u_resolution",h="u_offset",g=A.c([],t.ev),f=A.c(["alarm_1.mp3","background_1.mp3","background_2.mp3","bullet_impact_1.mp3","bullet_impact_2.mp3","bullet_miss_1.mp3","calm_menu_1.mp3","cave_1.mp3","click_1.mp3","death_1.mp3","door_1.mp3","door_unlock_1.mp3","drone_abandoned_desolate.mp3","fireball_1.mp3","fireball_2.mp3","flamethrower_1.mp3","heavy_punch_1.mp3","heavy_punch_2.mp3","heavy_punch_3.mp3","heavy_punch_4.mp3","Just_Pick_One_Already.mp3","laser_1.mp3","loop_1.mp3","menu_1.mp3","menu_2.mp3","miss_1.mp3","monster_deep_growl.mp3","monster_growl_1.mp3","monster_sceam_2.mp3","monster_scream_1.mp3","New_Bee.mp3","positive_1.mp3","rain_background_1.mp3","sewer_1.mp3","short_pulse_1.mp3","surface_day_1.mp3","surface_night_1.mp3","sword_impact_1.mp3","teleport_1.mp3","text_loop_1.mp3","water_footsteps_1.mp3","water_footsteps_2.mp3","water_footsteps_3.mp3","water_footsteps_4.mp3","water_footsteps_5.mp3","reload_1.mp3","pistol_1.mp3"],t.s),e=new (window.AudioContext||window.webkitAudioContext)(),d=A.pQ(),c=t.G,b=t.o
d=A.aM(A.c([new A.X(k,35044,j,2,d),new A.X("a_color",35048,j,4,new Float32Array(192e3))],c),u.l,A.c([new A.x(i,B.f),new A.x(h,B.f)],b),u.q)
s=A.aM(A.c([new A.X(k,35048,j,2,new Float32Array(8000))],c),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.c([new A.x(i,B.f),new A.x(h,B.f)],b),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
r=A.pi(window)
q=new Uint8Array(4000)
p=t.j
o=A.c([],t.pl)
b=A.c([new A.x("u_texture",B.l),new A.x(i,B.f),new A.x("u_time",B.u)],b)
b=A.aM(A.c([new A.X(k,35044,j,2,new Float32Array(A.cA(B.x)))],c),"#version 300 es\nprecision mediump float;\n\n\nuniform sampler2D u_texture;\nuniform vec2 u_resolution;\nuniform float u_time;\n\nout vec4 outColor;\n\nfloat density = 1.3;\nfloat opacityScanline = .3;\nfloat opacityNoise = .2;\n\nfloat random (vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nfloat blend(const in float x, const in float y) {\n\treturn (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));\n}\n\nvec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {\n\tvec3 z = vec3(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b));\n\treturn z * opacity + x * (1.0 - opacity);\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n  vec3 col = texture(u_texture, uv).rgb;\n  float count = u_resolution.y * density;\n  vec2 sl = vec2(sin(uv.y * count), cos(uv.y * count));\n\tvec3 scanlines = vec3(sl.x, sl.y, sl.x);\n  col += col * scanlines * opacityScanline;\n  col += col * vec3(random(uv * u_time)) * opacityNoise;\n  outColor = vec4(col, 1.0);\n}\n",b,u.p)
c=A.c([],t.fk)
n=new Uint8Array(16e6)
m=new Uint8Array(4000)
l=new Uint8Array(4000)
g=new A.f6(a0,a,g,a1,new A.fS(A.aa(t.N,t.bD),f,e),new A.j4(n,m,l,new Uint8Array(64e6),new A.i(0,0),A.aa(p,t.im),c),new A.iI(),new A.kb(d),new A.iU(s),r,new A.is(new A.f4(q,A.aa(p,t.S))),new A.iY(o),new A.j5(b),a0.createFramebuffer(),a0.createFramebuffer(),new A.jY())
g.dC(a,a0,a1)
return g},
j1:function j1(){this.b=!1},
f6:function f6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
j2:function j2(a,b){this.a=a
this.b=b},
nP(a,b,c){return a*c+(1-c)*b},
a6:function a6(){},
bF:function bF(a,b,c){var _=this
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
fA:function fA(a){this.a=a},
dV:function dV(a){this.a=a},
aP:function aP(a,b){this.a=a
this.b=b},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d1:function d1(){},
fm:function fm(a){this.a=a},
e3:function e3(a,b){this.a=a
this.b=b},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
ix:function ix(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iy:function iy(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iw:function iw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dy:function dy(a){this.a=a},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.c=c},
ha:function ha(a){this.a=a},
dU:function dU(a,b){this.a=a
this.b=b},
fL:function fL(a,b){this.b=a
this.c=b},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a){this.a=a
this.b=null},
j4:function j4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
i3:function i3(a){this.a=a
this.b=!0},
kh:function kh(a,b,c){this.a=a
this.c=b
this.d=c},
c8:function c8(a,b){this.a=a
this.b=b},
jV:function jV(a,b){this.a=a
this.b=b},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
nG(a,b){var s=a.f
if(s==null)return A.c([],t.Y)
if(s===B.v)return A.c([new A.bM("Open Door",new A.e3(!1,a.b))],t.Y)
if(s===B.I){if(b.al(a.b)!=null)return A.c([],t.Y)
return A.c([new A.bM("Close Door",new A.e3(!0,a.b))],t.Y)}if(s===B.G)return A.c([new A.bM("Activate Mechanism",new A.ha(a.b))],t.Y)
if(s===B.H)return A.c([new A.bM("Stairs",new A.fA(!1))],t.Y)
return A.c([],t.Y)},
bM:function bM(a,b){this.a=a
this.b=b},
oX(a){var s=u.p,r="a_position",q="u_player_visible_texture",p=t.G,o=t.o
return new A.fp(A.aM(A.c([new A.X(r,35044,5126,2,new Float32Array(A.cA(B.x)))],p),u.e,A.c([new A.x("u_source_position",B.f),new A.x("u_source_color",B.bf),new A.x("u_source_strength",B.u),new A.x("u_time",B.u),new A.x("u_visible_texture",B.l),new A.x(q,B.l)],o),s),A.aM(A.c([new A.X(r,35044,5126,2,new Float32Array(A.cA(B.x)))],p),u.A,A.c([new A.x("u_light_texture",B.l),new A.x("u_game_world_texture",B.l),new A.x(q,B.l),new A.x("u_resolution",B.f),new A.x("u_block_size",B.f),new A.x("u_offset",B.f)],o),s),a,A.c([],t.ow))},
fp:function fp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.x=d
_.y=null},
oJ(a){switch(a.a){case 0:return B.ah
case 1:return B.ag
case 2:return B.af
case 3:return B.ae
case 4:return B.p
case 5:return B.q
case 6:return B.n
case 7:return B.o}},
oI(a){switch(a.a){case 4:return B.aV
case 5:return B.aU
case 6:return B.aV
case 7:return B.aU
default:return B.e_}},
a9(a,b){switch(b.a){case 4:return a.B(0,new A.i(0,-1))
case 1:return a.B(0,new A.i(1,-1))
case 5:return a.B(0,new A.i(1,0))
case 0:return a.B(0,new A.i(1,1))
case 6:return a.B(0,new A.i(0,1))
case 2:return a.B(0,new A.i(-1,1))
case 7:return a.B(0,new A.i(-1,0))
case 3:return a.B(0,new A.i(-1,-1))}},
l6(a,b,c){var s
switch(c.a){case 0:return!1
case 1:return a.c===B.b||A.O(A.bL(a.f))
case 2:s=a.f
if(s===B.v)return!1
return a.c===B.b||A.O(A.bL(s))
case 3:return a.c===B.b||A.O(A.bL(a.f))||b.al(a.b)!=null}},
qB(a,b){var s=B.d.be(a,-1,1),r=B.d.be(b,-1,1)
switch(s){case-1:switch(r){case-1:return B.ah
case 0:return B.q
case 1:return B.ag}break
case 0:switch(r){case-1:return B.n
case 1:return B.p}break
case 1:switch(r){case-1:return B.af
case 0:return B.o
case 1:return B.ae}break}throw A.d(A.af(A.B(s)+","+A.B(r)))},
bo:function bo(a,b,c){var _=this
_.b=_.a=null
_.d=a
_.e=b
_.f=c},
aW:function aW(a,b){this.a=a
this.b=b},
jP:function jP(){},
f4:function f4(a,b){this.a=a
this.b=b},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
my(a,b,c,d,e){return new A.X(d,a,c,e,b)},
bW(a,b){return new A.x(b,a)},
aM(a,b,c,d){var s=t.N
return new A.jc(d,b,c,a,A.aa(s,t.o3),A.aa(s,t.aN))},
nq(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.Z(a.getShaderParameter(s,35713),!0)){A.ip(a.getShaderInfoLog(s))
throw A.d(A.af("Invalid Shader"))}return s},
X:function X(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x:function x(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
hk:function hk(a,b){this.a=a
this.c=b},
i8:function i8(a,b){this.a=a
this.b=b},
jc:function jc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
jY:function jY(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
jZ:function jZ(){},
fB:function fB(){},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qi(a,b){var s=t.hd
s.a(a)
s.a(b)
return B.d.N(a.y,b.y)},
qO(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.K($.G,t.aa),p=J.ow(r),o=p.$ti,n=o.i("~(1)?").a(new A.lg(a,s,r,new A.aT(q,t.fB)))
t.Z.a(null)
A.hu(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
n2(a,b){var s=35048,r=5126,q=A.c([new A.x("u_texture",B.l),new A.x("u_resolution",B.f),new A.x("u_offset",B.f)],t.o),p=new Float32Array(12e4),o=new Float32Array(12e4),n=new Float32Array(24e4)
q=new A.fV(A.aM(A.c([new A.X("a_position",s,r,2,p),new A.X("a_texcoord",s,r,2,o),new A.X("a_color",s,r,4,n),new A.X("a_bg_color",s,r,4,new Float32Array(24e4))],t.G),"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\nin vec4 v_bg_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n  if (v_bg_color != vec4(0, 0, 0, 0)) {\n    outColor = outColor + v_bg_color;\n  }\n}\n",q,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"),A.mI(A.qW(),t.hd),b)
q.dD(a,b)
return q},
pd(a){return new A.P(a.a,a.b,-1,-1,null)},
mJ(a,b,c,d){var s,r,q,p,o,n,m=null
switch(a){case B.ak:case null:return m
case B.al:s=m
r=s
q=3
p=16
o=1
break
case B.H:q=14
p=3
o=1
r=B.ed
s=B.c3
break
case B.v:s=m
r=s
q=6
p=11
o=1
break
case B.I:s=m
r=s
q=15
p=5
o=1
break
case B.J:s=m
r=s
q=5
p=11
o=1
break
case B.K:n=t.e.i("Y.T")
if(d.a===B.y){n=B.b2.h(0,n.a(900))
n.toString
r=n}else{n=B.b_.h(0,n.a(800))
n.toString
r=n}s=m
q=2
p=2
o=0.8
break
case B.L:r=new A.h(4294967142)
s=m
q=12
p=7
o=0.8
break
case B.Y:n=B.an.h(0,t.e.i("Y.T").a(400))
n.toString
s=m
r=n
q=1
p=13
o=1
break
case B.Z:n=B.an.h(0,t.e.i("Y.T").a(400))
n.toString
s=m
r=n
q=2
p=13
o=0.8
break
case B.S:n=B.b_.h(0,t.e.i("Y.T").a(600))
n.toString
s=m
r=n
q=6
p=0
o=1
break
case B.T:n=B.b1.h(0,t.e.i("Y.T").a(900))
n.toString
s=n
r=m
q=0
p=15
o=1
break
case B.G:n=B.b3.h(0,t.e.i("Y.T").a(500))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.U:n=B.b3.h(0,t.e.i("Y.T").a(100))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.V:s=m
r=s
q=13
p=3
o=1
break
case B.W:n=B.b1.h(0,t.e.i("Y.T").a(900))
n.toString
s=m
r=n
q=14
p=5
o=1
break
case B.X:n=B.an.h(0,t.e.i("Y.T").a(600))
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
n.sdn(0,o)
n.sam(0,s)
return n},
lg:function lg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c
_.e=!1
_.f=!0},
k4:function k4(a){this.a=a},
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
m_(a,b,c){return new A.jw(b,c,a)},
pQ(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
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
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
kb:function kb(a){this.a=a
this.b=null
this.c=!1},
h1:function h1(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.y=_.x=_.r=_.f=0},
ba:function ba(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null},
kR:function kR(a){this.a=a},
eJ:function eJ(a,b){this.a=a
this.b=b},
d3:function d3(){},
co:function co(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=null
_.x=!1
_.Q=_.z=_.y=0
_.$ti=g},
jC:function jC(a){this.a=a},
jD:function jD(){},
jE:function jE(a){this.a=a},
jF:function jF(){},
jA:function jA(a){this.a=a},
jB:function jB(){},
eT:function eT(a){var _=this
_.a=a
_.b=null
_.d=_.c=0
_.e=!1
_.r=_.f=0
_.x=$},
pP(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
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
j3:function j3(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
ki:function ki(a){this.b=a},
qu(a){var s,r=A.lY(4000,new A.l2(a),t.W),q=A.c([],t.c7)
for(s=0;s<4000;++s);return new A.fW(q,A.aa(t.K,t.lZ),new A.a4(100,40,r,t.r),a.b)},
l8(a){var s,r,q,p,o
for(s=a.c,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.i(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.O(A.bL(o.f))))return p}throw A.d("Solid")},
qR(a,b){var s,r,q
for(s=a.c;!0;){r=$.eF()
q=new A.i(B.c.A(r.E()*98)+1,B.c.A(r.E()*38)+1)
r=s.h(0,q)
if(!(r.c===B.b||A.O(A.bL(r.f)))&&a.al(q)==null)return q}},
b0(a,b,c){return B.c.A(a.E()*(c-b))+b},
pU(a,b,c){var s=b.length
if(s===1){if(0>=s)return A.b(b,0)
return b[0]}s=A.b0(a,0,s-1)
if(!(s>=0&&s<b.length))return A.b(b,s)
return b[s]},
hf:function hf(a,b){this.a=a
this.d=0
this.e=b},
l2:function l2(a){this.a=a},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
km:function km(a,b){this.a=a
this.b=b},
iV:function iV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iW:function iW(a){this.a=a},
eV:function eV(a){this.a=a},
iM:function iM(a){this.a=a},
ja:function ja(){},
jb:function jb(a){this.a=a},
iJ:function iJ(a){this.a=a},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
lA(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.N))break
q=A.a9(q,b);++p}return p},
mw(a,b,c){return new A.aK(a,b,c.i("aK<0>"))},
cD(a,b,c){var s=A.a9(a,b)
if(c.e.h(0,s)===B.N)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
mT(a){return new A.cW(a)},
bu(a,b,c){return new A.cu(c,a,b)},
dk(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=A.c([],t.D),a4=t.S,a5=A.aa(t.c1,a4)
for(s=a7.length,r=0;r<a7.length;a7.length===s||(0,A.A)(a7),++r){q=a7[r]
if(q.gbz())q=new A.i9(q)
p=a5.h(0,q)
if(p==null){a5.j(0,q,0)
p=0}a5.j(0,q,p+1)}for(s=a5.gak(a5),s=s.gv(s),o=t.q,n=t.n4,m=t.ld,l=t.bu,k=a6.a,j=J.dj(k),i=t.n;s.n();){h=s.gp(s)
q=h.a
g=h.b
f=A.c([],o)
e=A.c([],i)
for(h=j.gv(k);h.n();){d=h.gp(h)
c=q.gbi(q).O(d,a8)
if(c<1000){B.a.k(f,d)
B.a.k(e,c)}}if(f.length===0){B.a.k(a3,q)
continue}h=A.c([],l)
for(b=0;b<f.length;++b){d=f[b]
if(!(b<e.length))return A.b(e,b)
h.push(new A.aZ(d,e[b]))}d=m.a(new A.lz())
if(!!h.immutable$list)A.U(A.C("sort"))
a=h.length-1
if(a-0<=32)A.n1(h,0,a,d,n)
else A.n0(h,0,a,d,n)
a0=B.a.dt(h,0,Math.min(3*g,e.length))
B.a.bN(a0)
a1=A.c([],o)
a2=A.jq(a4)
for(;!0;){for(b=0;b<a0.length;++b){if(a2.K(0,b))continue
if(a1.length===g)break
if($.oc().E()<0.33){if(!(b<a0.length))return A.b(a0,b)
B.a.k(a1,a0[b].a)
a2.k(0,b)}}h=a1.length
if(h===g)break
else if(g-h>a0.length-a2.a)break}if(a1.length<g)B.a.k(a3,q)
for(h=a1.length,r=0;r<a1.length;a1.length===h||(0,A.A)(a1),++r)q.d2(a1[r],a8)
if(a0.length===0)B.a.k(a3,q)}for(a4=j.gv(k),s=a8.e,o=a6.c;a4.n();){n=a4.gp(a4)
if(s.h(0,n)===B.aw||s.h(0,n)===B.ax)B.a.k(o,n)}return a3},
nO(a,b){var s,r,q,p,o,n,m,l,k,j
B.a.aS(a,new A.ly())
if(0>=a.length)return A.b(a,0)
A.dk(a[0],$.op(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.A)(s),++p)q.j(0,s[p],B.aY)
if(0>=a.length)return A.b(a,0)
a[0].e=!0
for(s=A.n6(a,1,null,A.T(a).c),r=s.$ti,s=new A.bn(s,s.gm(s),r.i("bn<ar.E>")),o=b.a.a.a,r=r.i("ar.E"),n=t.c1,m=2;s.n();){l=r.a(s.d)
k=l.a
j=J.ax(k)
if(j.gm(k)<30){if(m>0){k=A.mP($.lL(),!0,n)
k.push($.mq())}else k=$.lL()
if(!B.a.K(A.dk(l,k,b),$.mq()))--m}else if(j.gm(k)<60)A.dk(l,$.oi(),b)
else if(j.gm(k)<100)A.dk(l,$.og(),b)
else switch(o){case 0:case 1:case 2:case 5:case 6:A.dk(l,$.oe(),b)
break
case 3:case 4:A.dk(l,$.of(),b)
break}}if(m===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.A)(s),++p)q.j(0,s[p],B.aZ)}},
aL:function aL(){},
he:function he(){},
aK:function aK(a,b,c){this.a=a
this.b=b
this.$ti=c},
cX:function cX(a,b){this.b=a
this.$ti=b},
fC:function fC(){},
eW:function eW(){},
eI:function eI(){},
f1:function f1(){},
dm:function dm(a){this.a=a},
cW:function cW(a){this.a=a},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
ls:function ls(){},
ll:function ll(){},
lp:function lp(){},
lk:function lk(){},
lm:function lm(){},
lq:function lq(){},
lr:function lr(){},
lo:function lo(){},
ln:function ln(){},
lj:function lj(){},
aZ:function aZ(a,b){this.a=a
this.b=b},
i9:function i9(a){this.a=a},
lz:function lz(){},
ly:function ly(){},
oK(a){var s=t.q
return new A.a3(a,A.c([],s),A.c([],s),A.j0(a))},
j0(a){var s,r,q=J.ax(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gm(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.i(B.c.A(p/q.gm(a)),B.c.A(o/q.gm(a)))},
pM(a){switch(a.a){case 10:case 11:case 9:case 1:case 3:return!0
default:return!1}},
dE:function dE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
iC:function iC(a,b){this.a=a
this.b=b},
iE:function iE(){},
iF:function iF(){},
iG:function iG(a){this.a=a},
iD:function iD(a){this.a=a},
e4:function e4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j_:function j_(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
fi:function fi(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jj:function jj(a,b){this.a=a
this.b=b},
jL:function jL(){},
je:function je(a){this.a=a},
jf:function jf(){},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
jQ:function jQ(){},
bO:function bO(a,b){this.a=a
this.b=b},
dY:function dY(a,b){this.a=a
this.b=b},
k0:function k0(a,b){this.b=a
this.a=b},
dX:function dX(a,b){this.a=a
this.b=b},
k8:function k8(a){this.a=a},
k9:function k9(){},
ka:function ka(a){this.a=a},
pi(a){var s=new A.kj(A.n4(t.h8),A.n4(t.bd))
s.dE(a)
return s},
kj:function kj(a,b){this.a=a
this.b=b},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
a0:function a0(a,b){this.a=a
this.b=b},
mh(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
nJ(a){var s=B.i.Y(u.a,a>>>6)+(a&63),r=s&1,q=B.i.Y(u.z,s>>>1)
return q>>>4&-r|q&15&r-1},
nE(a,b){var s=B.i.Y(u.a,1024+(a&1023))+(b&1023),r=s&1,q=B.i.Y(u.z,s>>>1)
return q>>>4&-r|q&15&r-1},
qA(a,b){return J.ou(t.n6.a(a),b)},
fh(a){var s,r
if(a instanceof A.a_){s=B.aP
r=null}else if(a instanceof A.a2){s=B.aN
r=null}else if(a instanceof A.au){s=B.aO
r=0}else{if(a instanceof A.iN)s=B.dQ
else{J.bD(a)
s=B.aQ}r=null}$.mK=$.mK+1
return new A.aN(a,s,r)},
qL(a,b,c){var s,r,q=a.r
if(q!=null){if(b===q.c)return!0
s=a.q()
r=b.q()
if(s==null||r==null)return!1
return c.f.a1(s).h(0,r)}return!0},
qV(a){A.b_(a)
$.ml().a_(a,$.mn())
B.bj.d7(window,A.nK())},
mf(){var s=0,r=A.bz(t.z),q,p,o
var $async$mf=A.bA(function(a,b){if(a===1)return A.bv(b,r)
while(true)switch(s){case 0:o=$.ml()
o.e.aL()
q=t.w
q=new A.fd(o,A.c([],q),A.c([],q),A.c([],t.fy),A.c([],t.ge))
p=o.cx.a
new A.bX(p,A.F(p).i("bX<1>")).cY(q.geK())
q=t.x.a(q.gcj())
B.a.k(o.c,q)
B.bj.d7(window,A.nK())
return A.bw(null,r)}})
return A.bx($async$mf,r)}},J={
mg(a,b,c,d){return{i:a,p:b,e:c,x:d}},
la(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.me==null){A.qI()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.m2("Return interceptor for "+A.B(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.kK
if(o==null)o=$.kK=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.qP(a)
if(p!=null)return p
if(typeof a=="function")return B.dS
s=Object.getPrototypeOf(a)
if(s==null)return B.bb
if(s===Object.prototype)return B.bb
if(typeof q=="function"){o=$.kK
if(o==null)o=$.kK=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.ay,enumerable:false,writable:true,configurable:true})
return B.ay}return B.ay},
oU(a,b){if(a<0||a>4294967295)throw A.d(A.bp(a,0,4294967295,"length",null))
return J.oW(new Array(a),b)},
oV(a,b){if(a<0)throw A.d(A.cF("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("t<0>"))},
oW(a,b){return J.mM(A.c(a,b.i("t<0>")),b)},
mM(a,b){a.fixed$length=Array
return a},
di(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dJ.prototype
return J.fj.prototype}if(typeof a=="string")return J.ch.prototype
if(a==null)return J.dK.prototype
if(typeof a=="boolean")return J.dI.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof A.v)return a
return J.la(a)},
ax(a){if(typeof a=="string")return J.ch.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof A.v)return a
return J.la(a)},
dj(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof A.v)return a
return J.la(a)},
qD(a){if(typeof a=="number")return J.cQ.prototype
if(typeof a=="string")return J.ch.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.d5.prototype
return a},
l9(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof A.v)return a
return J.la(a)},
Z(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.di(a).F(a,b)},
ms(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.qM(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ax(a).h(a,b)},
mt(a,b,c){return J.dj(a).j(a,b,c)},
ot(a,b,c,d){return J.l9(a).ev(a,b,c,d)},
ou(a,b){return J.qD(a).N(a,b)},
mu(a,b){return J.dj(a).u(a,b)},
ov(a,b){return J.dj(a).w(a,b)},
c5(a){return J.di(a).gt(a)},
al(a){return J.dj(a).gv(a)},
am(a){return J.ax(a).gm(a)},
ow(a){return J.l9(a).gbu(a)},
ox(a,b,c){return J.dj(a).cZ(a,b,c)},
bD(a){return J.di(a).l(a)},
a:function a(){},
dI:function dI(){},
dK:function dK(){},
ci:function ci(){},
fI:function fI(){},
d5:function d5(){},
bl:function bl(){},
t:function t(a){this.$ti=a},
jk:function jk(a){this.$ti=a},
dq:function dq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cQ:function cQ(){},
dJ:function dJ(){},
fj:function fj(){},
ch:function ch(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.lV.prototype={}
J.a.prototype={
F(a,b){return a===b},
gt(a){return A.cr(a)},
l(a){return"Instance of '"+A.jS(a)+"'"}}
J.dI.prototype={
l(a){return String(a)},
dl(a,b){return b||a},
gt(a){return a?519018:218159},
$iD:1}
J.dK.prototype={
F(a,b){return null==b},
l(a){return"null"},
gt(a){return 0},
$iW:1}
J.ci.prototype={
gt(a){return 0},
l(a){return String(a)}}
J.fI.prototype={}
J.d5.prototype={}
J.bl.prototype={
l(a){var s=a[$.nS()]
if(s==null)return this.dv(a)
return"JavaScript function for "+J.bD(s)},
$ice:1}
J.t.prototype={
k(a,b){A.T(a).c.a(b)
if(!!a.fixed$length)A.U(A.C("add"))
a.push(b)},
d6(a,b){var s
if(!!a.fixed$length)A.U(A.C("removeAt"))
s=a.length
if(b>=s)throw A.d(A.mW(b,null))
return a.splice(b,1)[0]},
H(a,b){var s
if(!!a.fixed$length)A.U(A.C("remove"))
for(s=0;s<a.length;++s)if(J.Z(a[s],b)){a.splice(s,1)
return!0}return!1},
e8(a,b,c){var s,r,q,p,o
A.T(a).i("D(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.O(b.$1(p)))s.push(p)
if(a.length!==r)throw A.d(A.aU(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
a3(a,b){A.T(a).i("j<1>").a(b)
if(!!a.fixed$length)A.U(A.C("addAll"))
this.dH(a,b)
return},
dH(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.aU(a))
for(r=0;r<s;++r)a.push(b[r])},
w(a,b){var s,r
A.T(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.d(A.aU(a))}},
cZ(a,b,c){var s=A.T(a)
return new A.b8(a,s.C(c).i("1(2)").a(b),s.i("@<1>").C(c).i("b8<1,2>"))},
eI(a,b,c){var s,r,q,p=A.T(a)
p.i("D(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(A.O(b.$1(q)))return q
if(a.length!==s)throw A.d(A.aU(a))}return c.$0()},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
dt(a,b,c){var s=a.length
if(b>s)throw A.d(A.bp(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.bp(c,b,s,"end",null))
if(b===c)return A.c([],A.T(a))
return A.c(a.slice(b,c),A.T(a))},
geH(a){if(a.length>0)return a[0]
throw A.d(A.lU())},
gds(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.d(A.lU())
throw A.d(A.oT())},
bM(a,b,c,d){var s,r,q,p
A.T(a).i("j<1>").a(d)
if(!!a.immutable$list)A.U(A.C("setRange"))
A.jX(b,c,a.length)
s=c-b
if(s===0)return
A.jW(0,"skipCount")
r=d
q=J.ax(r)
if(s>q.gm(r))throw A.d(A.oS())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
ex(a,b){var s,r
A.T(a).i("D(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.O(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.aU(a))}return!1},
aS(a,b){var s=A.T(a)
s.i("f(1,1)?").a(b)
if(!!a.immutable$list)A.U(A.C("sort"))
A.pb(a,b,s.c)},
bN(a){var s,r,q,p
if(!!a.immutable$list)A.U(A.C("shuffle"))
s=a.length
for(;s>1;){r=B.m.D(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
eO(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.Z(a[s],b))return s}return-1},
K(a,b){var s
for(s=0;s<a.length;++s)if(J.Z(a[s],b))return!0
return!1},
l(a){return A.lT(a,"[","]")},
gv(a){return new J.dq(a,a.length,A.T(a).i("dq<1>"))},
gt(a){return A.cr(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.U(A.C("set length"))
if(b>a.length)A.T(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cB(a,b))
return a[b]},
j(a,b,c){A.E(b)
A.T(a).c.a(c)
if(!!a.immutable$list)A.U(A.C("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.cB(a,b))
a[b]=c},
$ip:1,
$ij:1,
$io:1}
J.jk.prototype={}
J.dq.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.A(q))
s=r.c
if(s>=p){r.sc7(null)
return!1}r.sc7(q[s]);++r.c
return!0},
sc7(a){this.d=this.$ti.i("1?").a(a)},
$iR:1}
J.cQ.prototype={
N(a,b){var s
A.b_(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaM(b)
if(this.gaM(a)===s)return 0
if(this.gaM(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaM(a){return a===0?1/a<0:a<0},
ax(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.C(""+a+".toInt()"))},
cE(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.C(""+a+".ceil()"))},
aa(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.C(""+a+".floor()"))},
A(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.C(""+a+".round()"))},
a7(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
be(a,b,c){if(B.d.N(b,c)>0)throw A.d(A.nz(b))
if(this.N(a,b)<0)return b
if(this.N(a,c)>0)return c
return a},
da(a,b){var s
if(b>20)throw A.d(A.bp(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaM(a))return"-"+s
return s},
f7(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.bp(b,2,36,"radix",null))
s=a.toString(b)
if(B.i.bg(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.U(A.C("Unexpected toString result: "+s))
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
gt(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dk(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bT(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cq(a,b)},
S(a,b){return(a|0)===a?a/b|0:this.cq(a,b)},
cq(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.C("Result of truncating division is "+A.B(s)+": "+A.B(a)+" ~/ "+b))},
cp(a,b){var s
if(a>0)s=this.ee(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ee(a,b){return b>31?0:a>>>b},
$iad:1,
$iM:1,
$iN:1}
J.dJ.prototype={$if:1}
J.fj.prototype={}
J.ch.prototype={
bg(a,b){if(b<0)throw A.d(A.cB(a,b))
if(b>=a.length)A.U(A.cB(a,b))
return a.charCodeAt(b)},
Y(a,b){if(b>=a.length)throw A.d(A.cB(a,b))
return a.charCodeAt(b)},
B(a,b){return a+b},
bR(a,b,c){return a.substring(b,A.jX(b,c,a.length))},
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
bj(a,b,c){var s=a.length
if(c>s)throw A.d(A.bp(c,0,s,null,null))
return A.qX(a,b,c)},
N(a,b){var s
A.a8(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
l(a){return a},
gt(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cB(a,b))
return a[b]},
$iad:1,
$imU:1,
$iu:1}
A.cR.prototype={
l(a){var s="LateInitializationError: "+this.a
return s}}
A.k2.prototype={}
A.p.prototype={}
A.ar.prototype={
gv(a){var s=this
return new A.bn(s,s.gm(s),A.F(s).i("bn<ar.E>"))},
bA(a,b){var s,r,q,p=this
A.F(p).i("ar.E(ar.E,ar.E)").a(b)
s=p.gm(p)
if(s===0)throw A.d(A.lU())
r=p.u(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.u(0,q))
if(s!==p.gm(p))throw A.d(A.aU(p))}return r}}
A.e2.prototype={
gdT(){var s=J.am(this.a),r=this.c
if(r==null||r>s)return s
return r},
gef(){var s=J.am(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.am(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.P()
return s-q},
u(a,b){var s=this,r=s.gef()+b
if(b<0||r>=s.gdT())throw A.d(A.Q(b,s,"index",null,null))
return J.mu(s.a,r)}}
A.bn.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.ax(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.aU(q))
s=r.c
if(s>=o){r.saq(null)
return!1}r.saq(p.u(q,s));++r.c
return!0},
saq(a){this.d=this.$ti.i("1?").a(a)},
$iR:1}
A.ck.prototype={
gv(a){var s=A.F(this)
return new A.dO(J.al(this.a),this.b,s.i("@<1>").C(s.Q[1]).i("dO<1,2>"))},
gm(a){return J.am(this.a)}}
A.dB.prototype={$ip:1}
A.dO.prototype={
n(){var s=this,r=s.b
if(r.n()){s.saq(s.c.$1(r.gp(r)))
return!0}s.saq(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
saq(a){this.a=this.$ti.i("2?").a(a)}}
A.b8.prototype={
gm(a){return J.am(this.a)},
u(a,b){return this.b.$1(J.mu(this.a,b))}}
A.aI.prototype={
gv(a){return new A.e5(J.al(this.a),this.b,this.$ti.i("e5<1>"))}}
A.e5.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.O(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.ap.prototype={}
A.cK.prototype={
l(a){return A.lZ(this)},
$iV:1}
A.dx.prototype={
gm(a){return this.a},
aJ(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.aJ(0,b))return null
return this.b[A.a8(b)]},
w(a,b){var s,r,q,p,o,n=this.$ti
n.i("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.a8(s[p])
b.$2(o,n.a(q[o]))}}}
A.a7.prototype={
b1(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.oQ(r)
o=A.lX(A.q9(),q,r,s.Q[1])
A.nC(p.a,o)
p.$map=o}return o},
h(a,b){return this.b1().h(0,b)},
w(a,b){this.$ti.i("~(1,2)").a(b)
this.b1().w(0,b)},
gm(a){var s=this.b1()
return s.gm(s)}}
A.j9.prototype={
$1(a){return this.a.b(a)},
$S:27}
A.ke.prototype={
Z(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.dT.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.fk.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.h9.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.jN.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.dC.prototype={}
A.em.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaY:1}
A.ca.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.nQ(r==null?"unknown":r)+"'"},
$ice:1,
gfi(){return this},
$C:"$1",
$R:1,
$D:null}
A.eX.prototype={$C:"$0",$R:0}
A.eY.prototype={$C:"$2",$R:2}
A.h0.prototype={}
A.fX.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.nQ(s)+"'"}}
A.cI.prototype={
F(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cI))return!1
return this.$_target===b.$_target&&this.a===b.a},
gt(a){return(A.li(this.a)^A.cr(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.jS(t.K.a(this.a))+"'")}}
A.fP.prototype={
l(a){return"RuntimeError: "+this.a}}
A.hg.prototype={
l(a){return"Assertion failed: "+A.f7(this.a)}}
A.aA.prototype={
gm(a){return this.a},
ga5(a){return new A.dL(this,A.F(this).i("dL<1>"))},
gbI(a){var s=this,r=A.F(s)
return A.mQ(s.ga5(s),new A.jm(s),r.c,r.Q[1])},
aJ(a,b){var s=this.cS(b)
return s},
cS(a){var s=this,r=s.d
if(r==null)return!1
return s.ao(s.az(r,s.an(a)),a)>=0},
a3(a,b){A.F(this).i("V<1,2>").a(b).w(0,new A.jl(this))},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b2(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b2(p,b)
q=r==null?n:r.b
return q}else return o.cT(b)},
cT(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.az(p,q.an(a))
r=q.ao(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.F(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.bV(s==null?q.b=q.b7():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.bV(r==null?q.c=q.b7():r,b,c)}else q.cV(b,c)},
cV(a,b){var s,r,q,p,o=this,n=A.F(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.b7()
r=o.an(a)
q=o.az(s,r)
if(q==null)o.bc(s,r,[o.b8(a,b)])
else{p=o.ao(q,a)
if(p>=0)q[p].b=b
else q.push(o.b8(a,b))}},
H(a,b){var s=this.cU(b)
return s},
cU(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.an(a)
r=o.az(n,s)
q=o.ao(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.eo(p)
if(r.length===0)o.c8(n,s)
return p.b},
bf(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.b6()}},
w(a,b){var s,r,q=this
A.F(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.aU(q))
s=s.c}},
bV(a,b,c){var s,r=this,q=A.F(r)
q.c.a(b)
q.Q[1].a(c)
s=r.b2(a,b)
if(s==null)r.bc(a,b,r.b8(b,c))
else s.b=c},
b6(){this.r=this.r+1&67108863},
b8(a,b){var s=this,r=A.F(s),q=new A.jo(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.b6()
return q},
eo(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.b6()},
an(a){return J.c5(a)&0x3ffffff},
ao(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Z(a[r].a,b))return r
return-1},
l(a){return A.lZ(this)},
b2(a,b){return a[b]},
az(a,b){return a[b]},
bc(a,b,c){a[b]=c},
c8(a,b){delete a[b]},
b7(){var s="<non-identifier-key>",r=Object.create(null)
this.bc(r,s,r)
this.c8(r,s)
return r},
$ijn:1}
A.jm.prototype={
$1(a){var s=this.a,r=A.F(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.F(this.a).i("2(1)")}}
A.jl.prototype={
$2(a,b){var s=this.a,r=A.F(s)
s.j(0,r.c.a(a),r.Q[1].a(b))},
$S(){return A.F(this.a).i("~(1,2)")}}
A.jo.prototype={}
A.dL.prototype={
gm(a){return this.a.a},
gv(a){var s=this.a,r=new A.dM(s,s.r,this.$ti.i("dM<1>"))
r.c=s.e
return r}}
A.dM.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.aU(q))
s=r.c
if(s==null){r.sbU(null)
return!1}else{r.sbU(s.a)
r.c=s.c
return!0}},
sbU(a){this.d=this.$ti.i("1?").a(a)},
$iR:1}
A.lc.prototype={
$1(a){return this.a(a)},
$S:28}
A.ld.prototype={
$2(a,b){return this.a(a,b)},
$S:33}
A.le.prototype={
$1(a){return this.a(A.a8(a))},
$S:61}
A.ku.prototype={
aC(){var s=this.b
if(s===this)throw A.d(new A.cR("Local '"+this.a+"' has not been initialized."))
return s}}
A.fu.prototype={$imE:1}
A.cq.prototype={$iaH:1}
A.cU.prototype={
gm(a){return a.length},
$iy:1}
A.cp.prototype={
h(a,b){A.by(b,a,a.length)
return a[b]},
j(a,b,c){A.E(b)
A.nn(c)
A.by(b,a,a.length)
a[b]=c},
$ip:1,
$ij:1,
$io:1}
A.dQ.prototype={
j(a,b,c){A.E(b)
A.E(c)
A.by(b,a,a.length)
a[b]=c},
$ip:1,
$ij:1,
$io:1}
A.dP.prototype={$ilS:1}
A.fv.prototype={
h(a,b){A.by(b,a,a.length)
return a[b]}}
A.fw.prototype={
h(a,b){A.by(b,a,a.length)
return a[b]}}
A.fx.prototype={
h(a,b){A.by(b,a,a.length)
return a[b]}}
A.fy.prototype={
h(a,b){A.by(b,a,a.length)
return a[b]}}
A.fz.prototype={
h(a,b){A.by(b,a,a.length)
return a[b]}}
A.cV.prototype={
gm(a){return a.length},
h(a,b){A.by(b,a,a.length)
return a[b]},
$ipg:1}
A.dR.prototype={
gm(a){return a.length},
h(a,b){A.by(b,a,a.length)
return a[b]},
$iph:1}
A.ef.prototype={}
A.eg.prototype={}
A.eh.prototype={}
A.ei.prototype={}
A.aX.prototype={
i(a){return A.kU(v.typeUniverse,this,a)},
C(a){return A.pF(v.typeUniverse,this,a)}}
A.hy.prototype={}
A.et.prototype={
l(a){return A.ak(this.a,null)},
$in8:1}
A.ht.prototype={
l(a){return this.a}}
A.eu.prototype={$ibV:1}
A.kr.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:14}
A.kq.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:26}
A.ks.prototype={
$0(){this.a.$0()},
$S:8}
A.kt.prototype={
$0(){this.a.$0()},
$S:8}
A.es.prototype={
dF(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.bd(new A.kT(this,b),0),a)
else throw A.d(A.C("`setTimeout()` not found."))},
dG(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.bd(new A.kS(this,a,Date.now(),b),0),a)
else throw A.d(A.C("Periodic timer."))},
eA(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.d(A.C("Canceling a timer."))},
$ih4:1}
A.kT.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.kS.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.d.bT(s,o)}q.c=p
r.d.$1(q)},
$S:8}
A.hh.prototype={
a4(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.bY(b)
else{s=r.a
if(q.i("aq<1>").b(b))s.c0(b)
else s.ar(q.c.a(b))}},
bh(a,b){var s=this.a
if(this.b)s.M(a,b)
else s.aV(a,b)}}
A.kX.prototype={
$1(a){return this.a.$2(0,a)},
$S:9}
A.kY.prototype={
$2(a,b){this.a.$2(1,new A.dC(a,t.l.a(b)))},
$S:39}
A.l1.prototype={
$2(a,b){this.a(A.E(a),b)},
$S:32}
A.db.prototype={
l(a){return"IterationMarker("+this.b+", "+A.B(this.a)+")"}}
A.c_.prototype={
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
if(q instanceof A.db){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sbX(null)
return!1}if(0>=o.length)return A.b(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.al(r))
if(n instanceof A.c_){r=m.d
if(r==null)r=m.d=[]
B.a.k(r,m.a)
m.a=n.a
continue}else{m.scf(n)
continue}}}}else{m.sbX(q)
return!0}}return!1},
sbX(a){this.b=this.$ti.i("1?").a(a)},
scf(a){this.c=this.$ti.i("R<1>?").a(a)},
$iR:1}
A.ep.prototype={
gv(a){return new A.c_(this.a(),this.$ti.i("c_<1>"))}}
A.ds.prototype={
l(a){return A.B(this.a)},
$iL:1,
gay(){return this.b}}
A.j7.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.M(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.M(q.e.aC(),q.f.aC())},
$S:10}
A.j6.prototype={
$1(a){var s,r,q=this,p=q.x
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.mt(s,q.b,a)
if(r.b===0)q.c.ar(A.p_(s,p))}else if(r.b===0&&!q.e)q.c.M(q.f.aC(),q.r.aC())},
$S(){return this.x.i("W(0)")}}
A.e7.prototype={
bh(a,b){A.eC(a,"error",t.K)
if((this.a.a&30)!==0)throw A.d(A.af("Future already completed"))
if(b==null)b=A.lN(a)
this.M(a,b)},
aI(a){return this.bh(a,null)}}
A.aT.prototype={
a4(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.af("Future already completed"))
s.bY(r.i("1/").a(b))},
aH(a){return this.a4(a,null)},
M(a,b){this.a.aV(a,b)}}
A.dc.prototype={
a4(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.af("Future already completed"))
s.c4(r.i("1/").a(b))},
aH(a){return this.a4(a,null)},
M(a,b){this.a.M(a,b)}}
A.cy.prototype={
eP(a){if((this.c&15)!==6)return!0
return this.b.b.bE(t.iW.a(this.d),a.a,t.k4,t.K)},
eM(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.f2(q,m,a.b,o,n,t.l)
else p=l.bE(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bC.b(A.bf(s))){if((r.c&1)!==0)throw A.d(A.cF("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cF("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.K.prototype={
aO(a,b,c){var s,r,q,p=this.$ti
p.C(c).i("1/(2)").a(a)
s=$.G
if(s===B.k){if(b!=null&&!t.ng.b(b)&&!t.y.b(b))throw A.d(A.mx(b,"onError",u.c))}else{c.i("@<0/>").C(p.c).i("1(2)").a(a)
if(b!=null)b=A.qe(b,s)}r=new A.K(s,c.i("K<0>"))
q=b==null?1:3
this.aU(new A.cy(r,q,a,b,p.i("@<1>").C(c).i("cy<1,2>")))
return r},
d9(a,b){return this.aO(a,null,b)},
cr(a,b,c){var s,r=this.$ti
r.C(c).i("1/(2)").a(a)
s=new A.K($.G,c.i("K<0>"))
this.aU(new A.cy(s,19,a,b,r.i("@<1>").C(c).i("cy<1,2>")))
return s},
ec(a){this.a=this.a&1|16
this.c=a},
aX(a){this.a=a.a&30|this.a&1
this.c=a.c},
aU(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.g.a(r.c)
if((s.a&24)===0){s.aU(a)
return}r.aX(s)}A.dg(null,null,r.b,t.M.a(new A.kx(r,a)))}},
ck(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.g.a(m.c)
if((n.a&24)===0){n.ck(a)
return}m.aX(n)}l.a=m.aE(a)
A.dg(null,null,m.b,t.M.a(new A.kF(l,m)))}},
aD(){var s=t.F.a(this.c)
this.c=null
return this.aE(s)},
aE(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
c_(a){var s,r,q,p=this
p.a^=2
try{a.aO(new A.kB(p),new A.kC(p),t.P)}catch(q){s=A.bf(q)
r=A.bB(q)
A.nN(new A.kD(p,s,r))}},
c4(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("aq<1>").b(a))if(q.b(a))A.kA(a,r)
else r.c_(a)
else{s=r.aD()
q.c.a(a)
r.a=8
r.c=a
A.da(r,s)}},
ar(a){var s,r=this
r.$ti.c.a(a)
s=r.aD()
r.a=8
r.c=a
A.da(r,s)},
M(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.aD()
this.ec(A.iv(a,b))
A.da(this,s)},
bY(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aq<1>").b(a)){this.c0(a)
return}this.dK(s.c.a(a))},
dK(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.dg(null,null,s.b,t.M.a(new A.kz(s,a)))},
c0(a){var s=this,r=s.$ti
r.i("aq<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.dg(null,null,s.b,t.M.a(new A.kE(s,a)))}else A.kA(a,s)
return}s.c_(a)},
aV(a,b){t.l.a(b)
this.a^=2
A.dg(null,null,this.b,t.M.a(new A.ky(this,a,b)))},
$iaq:1}
A.kx.prototype={
$0(){A.da(this.a,this.b)},
$S:0}
A.kF.prototype={
$0(){A.da(this.b,this.a.a)},
$S:0}
A.kB.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.ar(p.$ti.c.a(a))}catch(q){s=A.bf(q)
r=A.bB(q)
p.M(s,r)}},
$S:14}
A.kC.prototype={
$2(a,b){this.a.M(t.K.a(a),t.l.a(b))},
$S:19}
A.kD.prototype={
$0(){this.a.M(this.b,this.c)},
$S:0}
A.kz.prototype={
$0(){this.a.ar(this.b)},
$S:0}
A.kE.prototype={
$0(){A.kA(this.b,this.a)},
$S:0}
A.ky.prototype={
$0(){this.a.M(this.b,this.c)},
$S:0}
A.kI.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.f1(t.mY.a(q.d),t.z)}catch(p){s=A.bf(p)
r=A.bB(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.iv(s,r)
o.b=!0
return}if(l instanceof A.K&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.p.b(l)){n=m.b.a
q=m.a
q.c=l.d9(new A.kJ(n),t.z)
q.b=!1}},
$S:0}
A.kJ.prototype={
$1(a){return this.a},
$S:21}
A.kH.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bE(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bf(l)
r=A.bB(l)
q=this.a
q.c=A.iv(s,r)
q.b=!0}},
$S:0}
A.kG.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.eP(s)&&p.a.e!=null){p.c=p.a.eM(s)
p.b=!1}}catch(o){r=A.bf(o)
q=A.bB(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.iv(r,q)
n.b=!0}},
$S:0}
A.hi.prototype={}
A.cs.prototype={
gm(a){var s={},r=new A.K($.G,t.hy)
s.a=0
this.bt(new A.k6(s,this),!0,new A.k7(s,r),r.gdO())
return r}}
A.k6.prototype={
$1(a){A.F(this.b).c.a(a);++this.a.a},
$S(){return A.F(this.b).i("~(1)")}}
A.k7.prototype={
$0(){this.b.c4(this.a.a)},
$S:0}
A.br.prototype={}
A.en.prototype={
ge5(){var s,r=this
if((r.b&8)===0)return A.F(r).i("bZ<1>?").a(r.a)
s=A.F(r)
return s.i("bZ<1>?").a(s.i("hW<1>").a(r.a).gbJ())},
dU(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.bc(A.F(q).i("bc<1>"))
return A.F(q).i("bc<1>").a(s)}r=A.F(q)
s=r.i("hW<1>").a(q.a).gbJ()
return r.i("bc<1>").a(s)},
geh(){var s=this.a
if((this.b&8)!==0)s=t.gL.a(s).gbJ()
return A.F(this).i("d9<1>").a(s)},
dL(){if((this.b&4)!==0)return new A.bq("Cannot add event after closing")
return new A.bq("Cannot add event while adding a stream")},
k(a,b){var s,r=this,q=A.F(r)
q.c.a(b)
s=r.b
if(s>=4)throw A.d(r.dL())
if((s&1)!==0)r.bb(b)
else if((s&3)===0)r.dU().k(0,new A.cv(b,q.i("cv<1>")))},
eg(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=A.F(l)
k.i("~(1)?").a(a)
t.Z.a(c)
if((l.b&3)!==0)throw A.d(A.af("Stream has already been listened to."))
s=$.G
r=d?1:0
t.bm.C(k.c).i("1(2)").a(a)
A.pn(s,b)
q=c==null?A.qs():c
p=t.M
p.a(q)
o=new A.d9(l,a,s,r,k.i("d9<1>"))
n=l.ge5()
r=l.b|=1
if((r&8)!==0){m=k.i("hW<1>").a(l.a)
m.sbJ(o)
m.f_(0)}else l.a=o
o.ed(n)
k=p.a(new A.kQ(l))
s=o.e
o.e=s|32
k.$0()
o.e&=4294967263
o.c1((s&4)!==0)
return o},
$in3:1,
$ing:1,
$icx:1}
A.kQ.prototype={
$0(){A.mc(this.a.d)},
$S:0}
A.hj.prototype={
bb(a){var s=this.$ti
s.c.a(a)
this.geh().dJ(new A.cv(a,s.i("cv<1>")))}}
A.d8.prototype={}
A.bX.prototype={
gt(a){return(A.cr(this.a)^892482866)>>>0},
F(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bX&&b.a===this.a}}
A.d9.prototype={
cg(){var s=this.x,r=A.F(s)
r.i("br<1>").a(this)
if((s.b&8)!==0)r.i("hW<1>").a(s.a).fk(0)
A.mc(s.e)},
ci(){var s=this.x,r=A.F(s)
r.i("br<1>").a(this)
if((s.b&8)!==0)r.i("hW<1>").a(s.a).f_(0)
A.mc(s.f)}}
A.e6.prototype={
ed(a){var s=this
A.F(s).i("bZ<1>?").a(a)
if(a==null)return
s.sb9(a)
if(a.c!=null){s.e|=64
a.aQ(s)}},
cg(){},
ci(){},
dJ(a){var s=this,r=A.F(s),q=r.i("bc<1>?").a(s.r)
if(q==null)q=new A.bc(r.i("bc<1>"))
s.sb9(q)
q.k(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.aQ(s)}},
bb(a){var s,r=this,q=A.F(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.d8(r.a,a,q)
r.e&=4294967263
r.c1((s&4)!==0)},
c1(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.sb9(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.cg()
else q.ci()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.aQ(q)},
sb9(a){this.r=A.F(this).i("bZ<1>?").a(a)},
$ibr:1,
$icx:1}
A.eo.prototype={
bt(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.eg(s.i("~(1)?").a(a),d,c,b===!0)},
cY(a){return this.bt(a,null,null,null)}}
A.ho.prototype={}
A.cv.prototype={}
A.bZ.prototype={
aQ(a){var s,r=this
r.$ti.i("cx<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.nN(new A.kN(r,a))
r.a=1}}
A.kN.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("cx<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.F(r).i("cx<1>").a(s).bb(r.b)},
$S:0}
A.bc.prototype={
k(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.hX.prototype={}
A.ex.prototype={$ina:1}
A.l0.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.l(0)
throw s},
$S:0}
A.hQ.prototype={
f3(a){var s,r,q,p,o
t.M.a(a)
try{if(B.k===$.G){a.$0()
return}A.nu(null,null,this,a,t.H)}catch(q){s=A.bf(q)
r=A.bB(q)
p=t.K.a(s)
o=t.l.a(r)
A.io(p,o)}},
d8(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.k===$.G){a.$1(b)
return}A.nv(null,null,this,a,b,t.H,c)}catch(q){s=A.bf(q)
r=A.bB(q)
p=t.K.a(s)
o=t.l.a(r)
A.io(p,o)}},
cB(a){return new A.kO(this,t.M.a(a))},
cC(a,b){return new A.kP(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
f1(a,b){b.i("0()").a(a)
if($.G===B.k)return a.$0()
return A.nu(null,null,this,a,b)},
bE(a,b,c,d){c.i("@<0>").C(d).i("1(2)").a(a)
d.a(b)
if($.G===B.k)return a.$1(b)
return A.nv(null,null,this,a,b,c,d)},
f2(a,b,c,d,e,f){d.i("@<0>").C(e).C(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.G===B.k)return a.$2(b,c)
return A.qf(null,null,this,a,b,c,d,e,f)},
bB(a,b,c,d){return b.i("@<0>").C(c).C(d).i("1(2,3)").a(a)}}
A.kO.prototype={
$0(){return this.a.f3(this.b)},
$S:0}
A.kP.prototype={
$1(a){var s=this.c
return this.a.d8(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.kM.prototype={
an(a){return A.li(a)&1073741823},
ao(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.eb.prototype={
h(a,b){if(!A.O(this.z.$1(b)))return null
return this.dz(b)},
j(a,b,c){var s=this.$ti
this.dB(s.c.a(b),s.Q[1].a(c))},
aJ(a,b){if(!A.O(this.z.$1(b)))return!1
return this.dw(b)},
H(a,b){if(!A.O(this.z.$1(b)))return null
return this.dA(b)},
an(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
ao(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(A.O(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.kL.prototype={
$1(a){return this.a.b(a)},
$S:40}
A.ec.prototype={
gv(a){var s=this,r=new A.ed(s,s.r,s.$ti.i("ed<1>"))
r.c=s.e
return r},
gm(a){return this.a},
K(a,b){var s
if(typeof b=="number"&&(b&1073741823)===b){s=this.c
if(s==null)return!1
return t.nF.a(s[b])!=null}else return this.dP(b)},
dP(a){var s=this.d
if(s==null)return!1
return this.cb(s[J.c5(a)&1073741823],a)>=0},
k(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.c2(s==null?q.b=A.m3():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.c2(r==null?q.c=A.m3():r,b)}else return q.dN(0,b)},
dN(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.m3()
r=J.c5(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.aY(b)]
else{if(p.cb(q,b)>=0)return!1
q.push(p.aY(b))}return!0},
c2(a,b){this.$ti.c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.aY(b)
return!0},
aY(a){var s=this,r=new A.hF(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
cb(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Z(a[r].a,b))return r
return-1}}
A.hF.prototype={}
A.ed.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.aU(q))
else if(r==null){s.sc3(null)
return!1}else{s.sc3(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sc3(a){this.d=this.$ti.i("1?").a(a)},
$iR:1}
A.dH.prototype={}
A.jp.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:44}
A.l.prototype={
gv(a){return new A.bn(a,this.gm(a),A.b1(a).i("bn<l.E>"))},
u(a,b){return this.h(a,b)},
au(a,b,c,d){var s,r=A.b1(a)
d=r.i("l.E").a(r.i("l.E?").a(d))
A.jX(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
l(a){return A.lT(a,"[","]")}}
A.dN.prototype={}
A.jt.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.B(a)
r.a=s+": "
r.a+=A.B(b)},
$S:60}
A.z.prototype={
w(a,b){var s,r,q=A.b1(a)
q.i("~(z.K,z.V)").a(b)
for(s=J.al(this.ga5(a)),q=q.i("z.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gak(a){return J.ox(this.ga5(a),new A.jv(a),A.b1(a).i("cS<z.K,z.V>"))},
gm(a){return J.am(this.ga5(a))},
l(a){return A.lZ(a)},
$iV:1}
A.jv.prototype={
$1(a){var s,r=this.a,q=A.b1(r)
q.i("z.K").a(a)
s=q.i("z.V")
return new A.cS(a,s.a(J.ms(r,a)),q.i("@<z.K>").C(s).i("cS<1,2>"))},
$S(){return A.b1(this.a).i("cS<z.K,z.V>(z.K)")}}
A.dZ.prototype={
l(a){return A.lT(this,"{","}")}}
A.ej.prototype={$ip:1,$ij:1,$in_:1}
A.ey.prototype={}
A.cc.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.cc&&this.a===b.a&&!0},
N(a,b){return B.d.N(this.a,t.cs.a(b).a)},
gt(a){var s=this.a
return(s^B.d.cp(s,30))&1073741823},
l(a){var s=this,r=A.oG(A.p8(s)),q=A.f3(A.p6(s)),p=A.f3(A.p2(s)),o=A.f3(A.p3(s)),n=A.f3(A.p5(s)),m=A.f3(A.p7(s)),l=A.oH(A.p4(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
return k},
$iad:1}
A.ae.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.ae&&this.a===b.a},
gt(a){return B.d.gt(this.a)},
N(a,b){return B.d.N(this.a,t.L.a(b).a)},
l(a){var s,r,q,p,o,n=this.a,m=B.d.S(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.d.S(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.d.S(n,1e6)
p=q<10?"0":""
o=B.i.d3(B.d.l(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o},
$iad:1}
A.kv.prototype={}
A.L.prototype={
gay(){return A.bB(this.$thrownJsError)}}
A.dr.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.f7(s)
return"Assertion failed"}}
A.bV.prototype={}
A.fD.prototype={
l(a){return"Throw of null."}}
A.bg.prototype={
gb0(){return"Invalid argument"+(!this.a?"(s)":"")},
gb_(){return""},
l(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+A.B(n),l=q.gb0()+o+m
if(!q.a)return l
s=q.gb_()
r=A.f7(q.b)
return l+s+": "+r}}
A.cZ.prototype={
gb0(){return"RangeError"},
gb_(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.B(q):""
else if(q==null)s=": Not greater than or equal to "+A.B(r)
else if(q>r)s=": Not in inclusive range "+A.B(r)+".."+A.B(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.B(r)
return s}}
A.fg.prototype={
gb0(){return"RangeError"},
gb_(){if(A.E(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.hb.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.h8.prototype={
l(a){var s="UnimplementedError: "+this.a
return s}}
A.bq.prototype={
l(a){return"Bad state: "+this.a}}
A.f_.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.f7(s)+"."}}
A.fG.prototype={
l(a){return"Out of Memory"},
gay(){return null},
$iL:1}
A.e0.prototype={
l(a){return"Stack Overflow"},
gay(){return null},
$iL:1}
A.f2.prototype={
l(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.hv.prototype={
l(a){return"Exception: "+this.a}}
A.j.prototype={
cZ(a,b,c){var s=A.F(this)
return A.mQ(this,s.C(c).i("1(j.E)").a(b),s.i("j.E"),c)},
w(a,b){var s
A.F(this).i("~(j.E)").a(b)
for(s=this.gv(this);s.n();)b.$1(s.gp(s))},
gm(a){var s,r=this.gv(this)
for(s=0;r.n();)++s
return s},
u(a,b){var s,r,q
A.jW(b,"index")
for(s=this.gv(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.d(A.Q(b,this,"index",null,r))},
l(a){return A.mL(this,"(",")")}}
A.R.prototype={}
A.cS.prototype={
l(a){return"MapEntry("+A.B(this.a)+": "+A.B(this.b)+")"}}
A.W.prototype={
gt(a){return A.v.prototype.gt.call(this,this)},
l(a){return"null"}}
A.v.prototype={$iv:1,
F(a,b){return this===b},
gt(a){return A.cr(this)},
l(a){return"Instance of '"+A.jS(this)+"'"},
toString(){return this.l(this)}}
A.i_.prototype={
l(a){return""},
$iaY:1}
A.fZ.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.q.prototype={}
A.it.prototype={
gm(a){return a.length}}
A.eL.prototype={
l(a){return String(a)}}
A.eM.prototype={
l(a){return String(a)}}
A.eR.prototype={}
A.eS.prototype={
gbu(a){return new A.cw(a,"load",!1,t.bz)}}
A.c7.prototype={
sab(a,b){a.height=b},
sag(a,b){a.width=b},
dj(a,b){return a.getContext(b)},
$ic7:1}
A.b4.prototype={
gm(a){return a.length}}
A.iO.prototype={
gm(a){return a.length}}
A.I.prototype={$iI:1}
A.cL.prototype={
dM(a,b){var s=$.nR(),r=s[b]
if(typeof r=="string")return r
r=this.ei(a,b)
s[b]=r
return r},
ei(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.nT()+b
if(s in a)return s
return b},
gm(a){return a.length}}
A.iP.prototype={}
A.aV.prototype={}
A.bi.prototype={}
A.iQ.prototype={
gm(a){return a.length}}
A.iR.prototype={
gm(a){return a.length}}
A.iS.prototype={
gm(a){return a.length},
h(a,b){return a[b]}}
A.bj.prototype={$ibj:1}
A.bK.prototype={
l(a){return String(a)},
$ibK:1}
A.dz.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.mx.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.dA.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.B(r)+", "
s=a.top
s.toString
return r+A.B(s)+") "+A.B(this.gag(a))+" x "+A.B(this.gab(a))},
F(a,b){var s,r
if(b==null)return!1
if(t.mx.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=J.l9(b)
s=this.gag(a)===s.gag(b)&&this.gab(a)===s.gab(b)}else s=!1}else s=!1}else s=!1
return s},
gt(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.jO(r,s,this.gag(a),this.gab(a))},
gcd(a){return a.height},
gab(a){var s=this.gcd(a)
s.toString
return s},
gct(a){return a.width},
gag(a){var s=this.gct(a)
s.toString
return s},
$ib9:1}
A.f5.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
A.a8(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.iT.prototype={
gm(a){return a.length}}
A.a5.prototype={
l(a){return a.localName},
gbu(a){return new A.cw(a,"load",!1,t.bz)},
$ia5:1}
A.k.prototype={$ik:1}
A.e.prototype={
ev(a,b,c,d){t.du.a(c)
if(c!=null)this.dI(a,b,c,!1)},
dI(a,b,c,d){return a.addEventListener(b,A.bd(t.du.a(c),1),!1)},
$ie:1}
A.ay.prototype={$iay:1}
A.f8.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.et.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.f9.prototype={
gm(a){return a.length}}
A.fb.prototype={
gm(a){return a.length}}
A.az.prototype={$iaz:1}
A.jd.prototype={
gm(a){return a.length}}
A.cf.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.fh.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.dG.prototype={
eV(a,b,c){return a.open(b,c)}}
A.cg.prototype={}
A.cP.prototype={$icP:1}
A.bm.prototype={$ibm:1}
A.js.prototype={
l(a){return String(a)}}
A.cn.prototype={}
A.jx.prototype={
gm(a){return a.length}}
A.fq.prototype={
h(a,b){return A.c3(a.get(A.a8(b)))},
w(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c3(r.value[1]))}},
ga5(a){var s=A.c([],t.s)
this.w(a,new A.jG(s))
return s},
gm(a){return a.size},
$iV:1}
A.jG.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.fr.prototype={
h(a,b){return A.c3(a.get(A.a8(b)))},
w(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c3(r.value[1]))}},
ga5(a){var s=A.c([],t.s)
this.w(a,new A.jH(s))
return s},
gm(a){return a.size},
$iV:1}
A.jH.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.aB.prototype={$iaB:1}
A.fs.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.ib.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.aC.prototype={$iaC:1}
A.w.prototype={
l(a){var s=a.nodeValue
return s==null?this.du(a):s},
$iw:1}
A.dS.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.fh.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.aD.prototype={
gm(a){return a.length},
$iaD:1}
A.fJ.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.d8.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.fO.prototype={
h(a,b){return A.c3(a.get(A.a8(b)))},
w(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c3(r.value[1]))}},
ga5(a){var s=A.c([],t.s)
this.w(a,new A.k_(s))
return s},
gm(a){return a.size},
$iV:1}
A.k_.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.fQ.prototype={
gm(a){return a.length}}
A.av.prototype={$iav:1}
A.fT.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.fm.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.aE.prototype={$iaE:1}
A.fU.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.cA.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.aF.prototype={
gm(a){return a.length},
$iaF:1}
A.fY.prototype={
h(a,b){return a.getItem(A.a8(b))},
w(a,b){var s,r,q
t.gS.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga5(a){var s=A.c([],t.s)
this.w(a,new A.k5(s))
return s},
gm(a){return a.length},
$iV:1}
A.k5.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:20}
A.ag.prototype={$iag:1}
A.aw.prototype={$iaw:1}
A.ab.prototype={$iab:1}
A.h2.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.gJ.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.h3.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.dQ.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.kc.prototype={
gm(a){return a.length}}
A.aG.prototype={$iaG:1}
A.h5.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.ki.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.kd.prototype={
gm(a){return a.length}}
A.bb.prototype={}
A.kg.prototype={
l(a){return String(a)}}
A.d6.prototype={$id6:1}
A.hd.prototype={
gm(a){return a.length}}
A.d7.prototype={
d7(a,b){var s
t.hv.a(b)
this.dV(a)
s=A.nx(b,t.cZ)
s.toString
return this.e9(a,s)},
e9(a,b){return a.requestAnimationFrame(A.bd(t.hv.a(b),1))},
dV(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.hm.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.d5.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.e8.prototype={
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
F(a,b){var s,r
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
r=J.l9(b)
if(s===r.gag(b)){s=a.height
s.toString
r=s===r.gab(b)
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
return A.jO(p,s,r,q)},
gcd(a){return a.height},
gab(a){var s=a.height
s.toString
return s},
gct(a){return a.width},
gag(a){var s=a.width
s.toString
return s}}
A.hz.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.ef.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.ee.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.fh.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.hU.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.hH.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.i0.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a[b]},
j(a,b,c){A.E(b)
t.lv.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$ij:1,
$io:1}
A.lQ.prototype={}
A.e9.prototype={
bt(a,b,c,d){var s=A.F(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.hu(this.a,this.b,a,!1,s.c)}}
A.cw.prototype={}
A.ea.prototype={}
A.kw.prototype={
$1(a){return this.a.$1(t.U.a(a))},
$S:17}
A.r.prototype={
gv(a){return new A.dD(a,this.gm(a),A.b1(a).i("dD<r.E>"))}}
A.dD.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sce(J.ms(s.a,r))
s.c=r
return!0}s.sce(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
sce(a){this.d=this.$ti.i("1?").a(a)},
$iR:1}
A.hn.prototype={}
A.hp.prototype={}
A.hq.prototype={}
A.hr.prototype={}
A.hs.prototype={}
A.hw.prototype={}
A.hx.prototype={}
A.hA.prototype={}
A.hB.prototype={}
A.hG.prototype={}
A.hH.prototype={}
A.hI.prototype={}
A.hJ.prototype={}
A.hK.prototype={}
A.hL.prototype={}
A.hO.prototype={}
A.hP.prototype={}
A.hR.prototype={}
A.ek.prototype={}
A.el.prototype={}
A.hS.prototype={}
A.hT.prototype={}
A.hV.prototype={}
A.i1.prototype={}
A.i2.prototype={}
A.eq.prototype={}
A.er.prototype={}
A.i4.prototype={}
A.i5.prototype={}
A.ic.prototype={}
A.id.prototype={}
A.ie.prototype={}
A.ig.prototype={}
A.ih.prototype={}
A.ii.prototype={}
A.ij.prototype={}
A.ik.prototype={}
A.il.prototype={}
A.im.prototype={}
A.kn.prototype={
cM(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.k(r,a)
B.a.k(this.b,null)
return q},
bK(a){var s,r,q,p,o,n,m,l,k=this,j={}
if(a==null)return a
if(A.kZ(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.U(A.cF("DateTime is outside valid range: "+s,null))
A.eC(!0,"isUtc",t.k4)
return new A.cc(s,!0)}if(a instanceof RegExp)throw A.d(A.m2("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.qT(a,t.z)
if(A.nI(a)){q=k.cM(a)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=j.a=r[q]
if(p!=null)return p
o=t.z
p=A.aa(o,o)
j.a=p
B.a.j(r,q,p)
k.eJ(a,new A.kp(j,k))
return j.a}if(a instanceof Array){n=a
q=k.cM(n)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p!=null)return p
o=J.ax(n)
m=o.gm(n)
p=k.c?new Array(m):n
B.a.j(r,q,p)
for(r=J.dj(p),l=0;l<m;++l)r.j(p,l,k.bK(o.h(n,l)))
return p}return a}}
A.kp.prototype={
$2(a,b){var s=this.a.a,r=this.b.bK(b)
J.mt(s,a,r)
return r},
$S:22}
A.ko.prototype={
eJ(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.jM.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.lt.prototype={
$1(a){return this.a.a4(0,this.b.i("0/?").a(a))},
$S:9}
A.lu.prototype={
$1(a){if(a==null)return this.a.aI(new A.jM(a===undefined))
return this.a.aI(a)},
$S:9}
A.hC.prototype={
D(a){if(a<=0||a>4294967296)throw A.d(A.p9("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
E(){return Math.random()},
eR(){return Math.random()<0.5},
$imV:1}
A.aO.prototype={$iaO:1}
A.fl.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.E(b)
t.kT.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.aQ.prototype={$iaQ:1}
A.fE.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.E(b)
t.ai.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.jR.prototype={
gm(a){return a.length}}
A.h_.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.E(b)
A.a8(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.n.prototype={
gbu(a){return new A.cw(a,"load",!1,t.bz)}}
A.aR.prototype={$iaR:1}
A.h6.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.Q(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.E(b)
t.hk.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
u(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.hD.prototype={}
A.hE.prototype={}
A.hM.prototype={}
A.hN.prototype={}
A.hY.prototype={}
A.hZ.prototype={}
A.i6.prototype={}
A.i7.prototype={}
A.b2.prototype={
gm(a){return a.length},
$ib2:1}
A.du.prototype={
sez(a,b){a.buffer=b}}
A.c6.prototype={
dR(a,b,c,d){t.p0.a(c)
t.lW.a(d)
return a.decodeAudioData(b,A.bd(c,1),A.bd(d,1))},
eC(a,b){var s=new A.K($.G,t.og),r=new A.aT(s,t.oJ)
this.dR(a,b,new A.iz(r),new A.iA(r))
return s},
$ic6:1}
A.iz.prototype={
$1(a){this.a.a4(0,t.bD.a(a))},
$S:23}
A.iA.prototype={
$1(a){this.a.aI(t.jW.a(a))},
$S:24}
A.H.prototype={
c5(a,b,c,d){return a.connect(b,c,d)},
$iH:1}
A.eN.prototype={
sfh(a,b){a.value=b}}
A.eO.prototype={
h(a,b){return A.c3(a.get(A.a8(b)))},
w(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c3(r.value[1]))}},
ga5(a){var s=A.c([],t.s)
this.w(a,new A.iB(s))
return s},
gm(a){return a.size},
$iV:1}
A.iB.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.bh.prototype={}
A.eP.prototype={
gm(a){return a.length}}
A.dv.prototype={}
A.cO.prototype={}
A.fF.prototype={
gm(a){return a.length}}
A.hl.prototype={}
A.eU.prototype={$ieU:1}
A.fc.prototype={$ifc:1}
A.fK.prototype={$ifK:1}
A.d_.prototype={
cD(a,b){return a.bindVertexArray(b)},
cA(a,b,c){return a.bindBuffer(b,c)},
at(a,b,c){return a.bindFramebuffer(b,c)},
T(a,b,c){return a.bindTexture(b,c)},
cG(a,b){return a.deleteTexture(b)},
bo(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aw(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.ma(g)){s.ej(a,b,c,d,e,f,g,h,i,j)
return}if(t.hQ.b(g)&&h==null&&r&&j==null){s.ek(a,b,c,d,e,f,g)
return}if(t.h.b(g)&&h==null&&r&&j==null){s.el(a,b,c,d,e,f,g)
return}if(t.eL.b(g)&&h==null&&r&&j==null){s.em(a,b,c,d,e,f,g)
return}throw A.d(A.cF("Incorrect number or type of arguments",null))},
f5(a,b,c,d,e,f,g){return this.aw(a,b,c,d,e,f,g,null,null,null)},
ej(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
ek(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
el(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
em(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
f9(a,b,c){return a.uniform1f(b,c)},
fa(a,b,c){return a.uniform1i(b,c)},
fb(a,b,c,d){return a.uniform2f(b,c,d)},
fc(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fd(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fg(a,b){return a.useProgram(b)},
$id_:1}
A.bs.prototype={$ibs:1}
A.h7.prototype={$ih7:1}
A.hc.prototype={$ihc:1}
A.bQ.prototype={
gv(a){return new A.e1(this.a,0,0)},
gm(a){var s,r,q=this.a,p=q.length
if(p===0)return 0
s=new A.iH(q,p,0,176)
for(r=0;s.eS()>=0;)++r
return r},
F(a,b){if(b==null)return!1
return t.m1.b(b)&&this.a===b.a},
gt(a){return B.i.gt(this.a)},
l(a){return this.a},
$imF:1}
A.e1.prototype={
gp(a){var s=this,r=s.d
return r==null?s.d=B.i.bR(s.a,s.b,s.c):r},
n(){return this.bW(1,this.c)},
bW(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(a>0){s=j.c
for(r=j.a,q=r.length,p=176;s<q;s=n){o=B.i.bg(r,s)
n=s+1
if((o&64512)!==55296)m=A.nJ(o)
else if(n<q){l=B.i.bg(r,n)
if((l&64512)===56320){++n
m=A.nE(o,l)}else m=2}else m=2
p=B.i.Y(u.o,(p&240|m)>>>0)
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
A.iH.prototype={
eS(){var s,r,q,p,o,n,m,l=this,k=u.o
for(s=l.b,r=l.a;q=l.c,q<s;){p=l.c=q+1
o=B.i.Y(r,q)
if((o&64512)!==55296){p=B.i.Y(k,l.d&240|A.nJ(o))
l.d=p
if((p&1)===0)return q
continue}if(p<s){n=B.i.Y(r,p)
if((n&64512)===56320){m=A.nE(o,n);++l.c}else m=2}else m=2
p=B.i.Y(k,(l.d&240|m)>>>0)
l.d=p
if((p&1)===0)return q}s=B.i.Y(k,l.d&240|15)
l.d=s
if((s&1)===0)return q
return-1}}
A.ff.prototype={
aZ(a){var s=this.b
if(!(a>=0&&a<s.length))return A.b(s,a)
s=s[a]
return s==null?this.$ti.c.a(null):s},
k(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b);++o.d
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.b7(q,null,!1,n.i("1?"))
B.a.bM(p,0,o.c,o.b)
o.sba(p)}o.aW(b,o.c++)},
gm(a){return this.c},
H(a,b){var s,r,q=this
q.$ti.c.a(b)
s=q.e1(b)
if(s<0)return!1;++q.d
r=q.e7()
if(s<q.c)if(q.a.$2(r,b)<=0)q.aW(r,s)
else q.bZ(r,s)
return!0},
en(){var s,r,q=this.$ti,p=A.c([],q.i("t<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
l(a){var s=this.b
return A.mL(A.n6(s,0,A.eC(this.c,"count",t.S),A.T(s).c),"(",")")},
ai(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.b7(q,null,!1,n.i("1?"))
B.a.bM(p,0,o.c,o.b)
o.sba(p)}o.aW(b,o.c++)},
e1(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.aZ(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.Z(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
e7(){var s=this,r=s.c-1,q=s.aZ(r)
B.a.j(s.b,r,null)
s.c=r
return q},
aW(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.d.S(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.W()
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
if(p<q){j=i.aZ(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sba(a){this.b=this.$ti.i("o<1?>").a(a)}}
A.kV.prototype={
gv(a){var s=this.a
return new A.cz(s,s.d,this.$ti.i("cz<1>"))}}
A.cz.prototype={
n(){var s,r=this,q=r.a
if(r.b!==q.d)throw A.d(A.aU(q))
s=r.d+1
if(0<=s&&s<q.c){q=q.b
if(!(s>=0&&s<q.length))return A.b(q,s)
r.scl(q[s])
r.d=s
return!0}r.scl(null)
r.d=-2
return!1},
gp(a){var s
if(this.d<0)s=A.U(A.af("No element"))
else{s=this.c
if(s==null)s=this.$ti.c.a(null)}return s},
scl(a){this.c=this.$ti.i("1?").a(a)},
$iR:1}
A.h.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.h&&b.a===this.a},
gt(a){return B.d.gt(this.a)},
l(a){return"Color(0x"+B.i.d3(B.d.f7(this.a,16),8,"0")+")"}}
A.a4.prototype={
cO(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.d.ax(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.d(A.af(b.l(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.d.ax(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.d(A.lR(b.l(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
a2(a,b,c){var s=B.d.ax(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
G(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.d.ax(d*s+c)
q=p.c
if(r>=q.length)throw A.d(A.lR("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
l(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.d.ax(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.B(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.at.prototype={
P(a,b){t.mn.a(b)
return new A.at(this.a-b.a,this.b-b.b)},
B(a,b){return new A.at(this.a+b.a,this.b+b.b)},
F(a,b){if(b==null)return!1
return b instanceof A.at&&b.a===this.a&&b.b===this.b},
gt(a){return A.jO(this.a,this.b,B.B,B.B)},
l(a){return"Offset("+B.c.da(this.a,1)+", "+B.c.da(this.b,1)+")"}}
A.cE.prototype={
gI(a){return B.c.A(this.b.d/24)},
gJ(a){return B.c.A(this.b.e/36)},
q(){var s=this.b
return new A.i(B.c.A(s.d/24),B.c.A(s.e/36))},
$idF:1,
gbs(){return null}}
A.is.prototype={}
A.ir.prototype={
ey(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.b
c.eU()
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
f=g.aN(s)
e=g.b*k+g.a
if(!(e>=0&&e<j))return A.b(l,e)
if(l[e]<=0||h===a)continue
if(!A.nH(h,a))B.a.k(q,h)
else if(f<10.5){B.a.k(r,h)
e=h.q()
d=e.b*100+e.a
if(!(d>=0&&d<4000))return A.b(c,d)
B.ep.j(c,d,Math.max(c[d],20))}}c=this.a.a0(a,r,q,new A.ac(null,null),b).a
if(c==null)return new A.d1()
return c}}
A.ac.prototype={}
A.ao.prototype={}
A.bS.prototype={
a0(a,b,c,d,e){var s,r,q=null,p=t.k
p.a(b)
p.a(c)
t.O.a(e)
if(d.b!=null)return d
p=a.r
s=p==null
if((s?q:p.c)!=null)r=B.a.K(b,s?q:p.c)
else r=!1
if(r){if(s)p=q
else{p=p.c
p.toString}return new A.ac(q,p)}return d}}
A.bT.prototype={
a0(a,b,c,d,e){var s,r=t.k
r.a(b)
r.a(c)
t.O.a(e)
if(d.b!=null)return d
if(0<b.length){s=b[0]
r=a.r
if(r!=null)r.c=s
return new A.ac(null,s)}return d}}
A.cJ.prototype={
a0(a,b,c,d,e){var s,r,q=t.k
q.a(b)
q.a(c)
t.O.a(e)
if(d.b!=null||c.length===0)return d
for(q=c.length,s=0;s<q;++s){r=c[s].r
if(r!=null&&r.c!=null){q=r.c
q.toString
return new A.ac(null,q)}}return d}}
A.bP.prototype={
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
j=B.d.dk(q,100)
s=B.d.S(q,100)
m=$.eE()
l=a.q()
l.toString
k=m.bm(l,new A.i(j,s),r)
if(k==null)return d
j=k.b.d
s=a.q()
s.toString
return new A.ac(new A.aP(j.P(0,s),a),null)}}
A.fM.prototype={
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
q=e.dx.a.bl(r,p,-1)
if(q==null)return d
this.b=!0
p=a.q()
p.toString
return new A.ac(new A.aP(q.P(0,p),a),null)}}
A.dW.prototype={
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
q=c.P(0,s)
e.a=e.a.b
return new A.ac(new A.aP(q,a),d)}c=a.q()
c.toString
s=a2.dx.a
p=s.bl(r,c,-1)
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
n=g}}if(j!=null){c=$.eE()
s=a.q()
s.toString
e.a=c.bm(s,j,r)}return new A.ac(new A.d1(),d)}c=a.q()
c.toString
return new A.ac(new A.aP(p.P(0,c),a),d)}}
A.fN.prototype={
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
if(p.aN(o)<=s)return d}if(b.length===0)return d
m=a.q()
m.toString
n=e.dx.a.bl(r,m,-1)
if(n==null)return d
m=a.q()
m.toString
return new A.ac(new A.aP(n.P(0,m),a),null)}}
A.lb.prototype={
$1(a){t.lZ.a(a)
return a.c===B.aR&&t.mm.a(a.b).a===this.a.Q.a},
$S:25}
A.bE.prototype={
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
s=$.eE()
q=a.q()
q.toString
p=m.q()
p.toString
o=s.bm(q,p,r)
if(o==null)return d
s=a.c.x
n=s.gbx()
if(n!=null&&o.gcH()<=n.ch/5){q=s.b.h(0,B.r)
q.toString
if(q.e===0)if(A.qG(s,n))return new A.ac(new A.dV(a),m)
else{s=o.b.d
q=a.q()
q.toString
return new A.ac(new A.aP(s.P(0,q),a),m)}s=m.q()
s.toString
return new A.ac(new A.dU(s,a),m)}s=o.b.d
q=a.q()
q.toString
return new A.ac(new A.aP(s.P(0,q),a),m)}}
A.b5.prototype={
a0(a,b,c,d,e){var s,r,q,p,o=t.k
o.a(b)
o.a(c)
t.O.a(e)
for(o=this.a,s=o.length,r=d,q=0;q<o.length;o.length===s||(0,A.A)(o),++q,r=p){p=o[q].a0(a,b,c,r,e)
if(p.a!=null)return p}return r},
$iao:1}
A.bN.prototype={}
A.lD.prototype={
$0(){return new A.P(2,6,0,0,B.b4)},
$S:2}
A.lB.prototype={
$0(){return new A.b5(A.c([new A.bS(),new A.bT(),new A.dW(),new A.bE(),new A.bP()],t.a))},
$S:3}
A.lC.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lx.prototype={
$0(){return new A.P(2,4,0,0,B.C)},
$S:2}
A.lv.prototype={
$0(){return new A.b5(A.c([new A.bS(),new A.bT(),new A.dW(),new A.bE(),new A.bP()],t.a))},
$S:3}
A.lw.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lG.prototype={
$0(){return new A.P(10,7,0,0,B.C)},
$S:2}
A.lE.prototype={
$0(){return new A.b5(A.c([new A.bS(),new A.bT(),new A.cJ(),new A.bE(),new A.bP()],t.a))},
$S:3}
A.lF.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lJ.prototype={
$0(){return new A.P(10,7,0,0,B.b4)},
$S:2}
A.lH.prototype={
$0(){return new A.b5(A.c([new A.bS(),new A.bT(),new A.cJ(),new A.fM(),new A.bE(),new A.bP()],t.a))},
$S:3}
A.lI.prototype={
$0(){var s=A.fh(B.M)
s.e=9
return A.c([s],t.I)},
$S:4}
A.l5.prototype={
$0(){return new A.P(3,7,0,0,B.ec)},
$S:2}
A.l3.prototype={
$0(){return new A.b5(A.c([new A.bS(),new A.bT(),new A.cJ(),new A.fN(6),new A.bE(),new A.bP()],t.a))},
$S:3}
A.l4.prototype={
$0(){return A.c([A.fh(B.M)],t.I)},
$S:4}
A.iI.prototype={
ff(a,b,c,d,e,f){var s,r=this,q=Math.min(Math.max(B.c.a7(c*24-f/2),0),B.d.a7(2400-f)),p=Math.min(Math.max(B.c.a7(d*36-e/2),0),B.d.a7(1440-e)),o=r.c9(Math.abs(q-r.a)),n=r.c9(Math.abs(p-r.b))
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
A.Y.prototype={
h(a,b){return this.b.h(0,A.F(this).i("Y.T").a(b))}}
A.cm.prototype={}
A.cl.prototype={}
A.fd.prototype={
bp(a){return this.eL(t.h8.a(a))},
eL(a){var s=0,r=A.bz(t.H),q,p=this,o
var $async$bp=A.bA(function(b,c){if(b===1)return A.bv(c,r)
while(true)switch(s){case 0:o=p.e
if(o.length>3){s=1
break}B.a.k(o,a)
if(p.f){s=1
break}p.aB()
case 1:return A.bw(q,r)}})
return A.bx($async$bp,r)},
aB(){var s=0,r=A.bz(t.z),q=1,p,o=[],n=this,m
var $async$aB=A.bA(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.f=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.aj(n.aA(),$async$aB)
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
case 4:return A.bw(null,r)
case 1:return A.bv(p,r)}})
return A.bx($async$aB,r)},
cm(){var s=new A.K($.G,t.cU),r=new A.dc(s,t.iF)
B.a.k(this.a.c,t.x.a(t.nD.a(r.geB(r))))
return s},
R(){var s=0,r=A.bz(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$R=A.bA(function(a1,a2){if(a1===1)return A.bv(a2,r)
while(true)$async$outer:switch(s){case 0:b=p.a
a=b.r2
a0=a.e
a=a.d
if(!(a<a0.length)){q=A.b(a0,a)
s=1
break}a=a0[a].a
o=A.c(a.slice(0),A.T(a))
a=p.b,a0=B.a.geu(a),n=t.nt,m=p.c,l=p.d,k=p.e,j=0,i=!1
case 4:if(!!0){s=5
break}case 6:if(!(h=a.length,h!==0)){s=7
break}if(0>=h){q=A.b(a,0)
s=1
break}s=8
return A.aj(a[0].ah(b),$async$R)
case 8:g=a2
B.a.a3(m,g.r)
case 9:if(!(h=g.a,h!=null)){s=10
break}B.a.j(a,0,h)
s=11
return A.aj(h.ah(b),$async$R)
case 11:g=a2
B.a.a3(m,g.r)
s=9
break
case 10:h=g.c
if(h!=null)A.mh(h)
f=g.x
s=f!=null?12:13
break
case 12:s=!g.f&&k.length===0?14:16
break
case 14:s=l.length!==0?17:18
break
case 17:s=19
return A.aj(p.ca(),$async$R)
case 19:case 18:s=20
return A.aj(p.as(f),$async$R)
case 20:s=15
break
case 16:B.a.k(l,f)
case 15:case 13:case 21:if(!(h=m.length,h!==0)){s=22
break}if(0>=h){q=A.b(m,-1)
s=1
break}s=23
return A.aj(m.pop().ah(b),$async$R)
case 23:e=a2
B.a.a3(m,e.r)
case 24:if(!(h=e.a,h!=null)){s=25
break}s=26
return A.aj(h.ah(b),$async$R)
case 26:e=a2
B.a.a3(m,e.r)
s=24
break
case 25:h=e.c
if(h!=null)A.mh(h)
s=21
break
case 22:if(g.d)i=B.dR.dl(i,!0)
B.a.d6(a,0)
s=6
break
case 7:if(!i){s=3
break}for(;h=o.length,j<h;){if(!(j>=0)){q=A.b(o,j)
s=1
break $async$outer}d=o[j];++j
if(d.q()==null)continue
if(A.qS(n.a(a0),d,b)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=l.length!==0?27:29
break
case 27:s=k.length===0?30:32
break
case 30:s=33
return A.aj(p.ca(),$async$R)
case 33:s=31
break
case 32:s=34
return A.aj(p.aF(),$async$R)
case 34:case 31:s=28
break
case 29:s=35
return A.aj(p.cm(),$async$R)
case 35:case 28:if(!i){s=1
break}for(b=o.length,c=0;c<b;++c)o[c].a=100
case 1:return A.bw(q,r)}})
return A.bx($async$R,r)},
aF(){var s=0,r=A.bz(t.H),q=this,p,o,n
var $async$aF=A.bA(function(a,b){if(a===1)return A.bv(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.A)(p),++n)p[n].x.$0()
B.a.sm(p,0)
s=2
return A.aj(q.cm(),$async$aF)
case 2:return A.bw(null,r)}})
return A.bx($async$aF,r)},
as(a){var s=0,r=A.bz(t.H),q=this,p
var $async$as=A.bA(function(b,c){if(b===1)return A.bv(c,r)
while(true)switch(s){case 0:p=new A.K($.G,t.cU)
if(a!=null)B.a.k(q.d,a)
B.a.k(q.a.c,t.x.a(new A.j8(q,new A.aT(p,t.ou))))
s=2
return A.aj(p,$async$as)
case 2:return A.bw(null,r)}})
return A.bx($async$as,r)},
ca(){return this.as(null)},
aA(){var s=0,r=A.bz(t.H),q,p=this,o,n,m,l,k,j,i,h
var $async$aA=A.bA(function(a,b){if(a===1)return A.bv(b,r)
while(true)$async$outer:switch(s){case 0:h=p.e
if(h.length===0){s=1
break}o=B.a.d6(h,0)
h=o.a
switch(h){case 1:case 2:case 3:case 4:n=p.z
if(n!=null){if(o===B.aj){n.sco(Math.min(n.Q+1,n.b.length))
n.cs()}else if(o===B.ai){n.sco(Math.max(n.Q-1,0))
n.cs()}m=null
break}else{switch(h){case 1:l=new A.i(0,-1)
break
case 2:l=new A.i(1,0)
break
case 3:l=new A.i(0,1)
break
case 4:l=new A.i(-1,0)
break
default:A.U(A.af(""))
l=null}m=new A.aP(l,p.a.r2.a)}break
case 5:p.a.r2.toString
m=new A.d1()
break
case 21:h=p.a
if(p.Q==null){p.Q=new A.co(B.bm,["HP: "+h.r2.a.c.b+"/"+h.r2.a.c.a,"     ","STR: "+h.r2.a.c.y.a,"DEX: "+h.r2.a.c.y.b,"CON: "+h.r2.a.c.y.c,"INT: "+h.r2.a.c.y.d,"RES: "+h.r2.a.c.y.e,"CHA: "+h.r2.a.c.y.f],B.ap,A.c([],t.f),A.c([],t.J),!1,t.gN)
h=h.gL()
n=p.Q
n.toString
B.a.k(h.d,n)}else{h=h.gL()
n=p.Q
n.toString
h.ap(n)
p.Q=null}m=null
break
case 6:h=p.a
k=h.d.b?h.gaR().c:null
if(k==null){m=null
break}m=new A.dU(k,h.r2.a)
break
case 0:if(p.ch){h=p.z
n=h.b
h=h.Q
if(!(h>=0&&h<n.length)){q=A.b(n,h)
s=1
break $async$outer}j=t.jC.a(n[h])
p.ch=!1
h=p.a.gL()
n=p.z
n.toString
h.ap(n)
m=j.b
p.z=null}else{h=p.z
if(h!=null){n=h.b
h=h.Q
if(!(h>=0&&h<n.length)){q=A.b(n,h)
s=1
break $async$outer}if(A.a8(n[h])==="NEW GAME"){h=p.a
h.r1=!0
h.bq()
h=h.gL()
n=p.z
n.toString
h.ap(n)
m=p.z=null
break}m=null
break}m=null}break
case 10:if(p.ch){h=p.z
n=h.b
h=h.Q
if(!(h>=0&&h<n.length)){q=A.b(n,h)
s=1
break $async$outer}j=t.jC.a(n[h])
p.ch=!1
h=p.a.gL()
n=p.z
n.toString
h.ap(n)
m=j.b
p.z=null}else{h=p.z
if(h!=null){n=h.b
h=h.Q
if(!(h>=0&&h<n.length)){q=A.b(n,h)
s=1
break $async$outer}if(A.a8(n[h])==="NEW GAME"){h=p.a
h.bq()
h=h.gL()
n=p.z
n.toString
h.ap(n)
m=p.z=null
break}m=null
break}else m=p.e_()}break
case 20:m=new A.dV(p.a.r2.a)
break
case 19:h=p.a.r2.a
n=p.y
n=n==null?null:n.b
i=n==null
if(i)n=new A.f4(new Uint8Array(4000),A.aa(t.j,t.S))
m=p.y=new A.eQ(h,n,i)
break
case 8:h=p.a.d
n=!h.b
h.b=n
if(n){h=document.body.style
n=B.dv.dM(h,"cursor")
h.setProperty(n,"crosshair","")}else document.body.style.removeProperty("cursor")
m=null
break
case 9:h=p.a
n=h.d
if(n.b){n.b=!1
document.body.style.removeProperty("cursor")}if(p.z!=null){h=h.gL()
n=p.z
n.toString
h.ap(n)
p.z=null}p.ch=!1
m=null
break
case 12:p.z=new A.co(B.az,["SPELLS","EQUIPMENT","JOURNAL","MAP","SETTINGS","QUIT","NEW GAME"],B.b5,A.c([],t.f),A.c([],t.J),!0,t.gN)
h=p.a.gL()
n=p.z
n.toString
B.a.k(h.d,n)
m=null
break
default:m=null
break}s=m!=null?3:4
break
case 3:B.a.k(p.b,m)
s=5
return A.aj(p.R(),$async$aA)
case 5:case 4:case 1:return A.bw(q,r)}})
return A.bx($async$aA,r)},
e_(){var s,r,q,p,o,n,m,l,k,j,i=this,h=A.c([],t.Y)
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
B.a.a3(h,A.nG(l,o[p]))}}p=h.length
if(p===0)return null
if(p===1){if(0>=p)return A.b(h,0)
k=h[0]}else{o=[]
for(j=0;j<h.length;h.length===p||(0,A.A)(h),++j)o.push(h[j])
i.z=new A.co(B.az,o,B.ap,A.c([],t.f),A.c([],t.J),!0,t.gN)
i.ch=!0
s=s.gL()
p=i.z
p.toString
B.a.k(s.d,p)
k=null}if(k==null)return null
return k.b},
e6(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.L.a(a)
for(s=h.d,r=s.length,q=a.a,p=h.e,o=0;o<s.length;s.length===r||(0,A.A)(s),++o){n=s[o]
if(p.length>=2)n.d=1
m=n.e
l=m==null?0:B.d.S(q-m.a,1000)
n.e=a
k=l/B.d.S(n.a.a,1000)
j=n.f
i=n.d
i=n.d=B.c.be(j?n.d=i+k:n.d=i-k,-1,1)
i>=1||i<0
n.r.$1(n)}B.a.k(h.a.c,t.x.a(h.gcj()))}}
A.j8.prototype={
$1(a){var s,r,q,p,o,n,m
t.L.a(a)
s=A.c([],t.fy)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.A)(q),++n){m=q[n]
if(m.d>=1||o.length!==0){m.x.$0()
B.a.k(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.A)(s),++n)B.a.H(q,s[n])
if(q.length===0)this.b.aH(0)
else B.a.k(r.a.c,t.x.a(this))},
$S:15}
A.e_.prototype={
l(a){return"SlotType."+this.b}}
A.bk.prototype={
l(a){return"ItemType."+this.b}}
A.eK.prototype={}
A.aN.prototype={
gbQ(){switch(this.c.a){case 0:return B.ar
case 1:return B.as
case 2:return B.at
case 3:case 4:case 5:case 6:return null}}}
A.iN.prototype={}
A.a_.prototype={}
A.fe.prototype={
l(a){return"HandRequirement."+this.b}}
A.bI.prototype={
l(a){return"DamageType."+this.b}}
A.bJ.prototype={
l(a){return"DiceType."+this.b}}
A.aS.prototype={
l(a){return"WeaponProperties."+this.b}}
A.jy.prototype={}
A.bH.prototype={}
A.cb.prototype={
l(a){return"CriticalEffect."+this.b}}
A.a2.prototype={}
A.dn.prototype={
l(a){return"AmmoType."+this.b}}
A.dp.prototype={}
A.au.prototype={}
A.cG.prototype={
l(a){return"ArmorUpgradeType."+this.b}}
A.an.prototype={}
A.eG.prototype={
aj(a){var s,r=a-10
if(r===0)return 0
else{s=r/2
if(r>0)return B.c.aa(s)
else return B.c.cE(s)}}}
A.c9.prototype={
d_(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x.geX()
r=a.x.gbd()
q=A.dw(a0,1,B.aK)
p=b.y
o=p.a
n=q+p.aj(o)
m=a.y
l=10+Math.min(m.aj(m.b),r.e)
m=s.b
l=A.O(A.mH(m))?l+r.d:l+r.c
if(!a1)l-=2
k=t.Q
j=A.c([],k)
i=A.c([],k)
if(q===1){h=!1
g=!1}else{g=n>=l
if(q===20)h=!0
else{h=g
g=!1}}f="["+n+" vs "+A.B(l)+"]"
if(!h)return new A.cH(b.cx.a+" missed "+a.cx.a+" "+f,!1,0,B.a_,B.a_)
if(B.a.K(s.z,B.bh))B.a.k(j,new A.f0())
k=s.d
e=s.e
d=A.dw(a0,k,e)+p.aj(o)
if(g)d+=A.dw(a0,k,e)+p.aj(o)
B.a.K(b.ch,B.ba)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+s.y
return new A.cH(c,!0,d,j,i)},
d4(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x
r=s.gbx()
if(r==null)r=B.M
q=s.gbd()
s=b.y
p=Math.min(s.aj(s.b),q.e)
o=a.x.gbd()
n=A.dw(a0,1,B.aK)
m=n+p
l=a.y
k=10+Math.min(l.aj(l.b),o.e)
l=r.c
k=A.O(A.mH(l))?k+o.d:k+o.c
if(!a1)k-=2
j=t.Q
i=A.c([],j)
h=A.c([],j)
if(n===1){g=!1
f=!1}else{f=m>=k
if(n===20)g=!0
else{g=f
f=!1}}e="["+m+" vs "+A.B(k)+"]"
if(!g)return new A.cH(b.cx.a+" missed "+a.cx.a+" "+e,!1,0,B.a_,B.a_)
j=r.f
d=A.dw(a0,1,j)
if(f)d+=A.dw(a0,1,j)+s.aj(s.a)
B.a.K(b.ch,B.ba)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+r.a
return new A.cH(c,!0,d,i,h)}}
A.cH.prototype={}
A.cN.prototype={}
A.cM.prototype={
gbd(){var s,r,q
for(s=this.b,s=s.gak(s),s=s.gv(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a_)return q}return B.bE},
geX(){var s,r,q
for(s=this.b,s=s.gak(s),s=s.gv(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a2)return q}return B.ei},
gbx(){var s,r,q
for(s=this.b,s=s.gak(s),s=s.gv(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.au)return q}return null},
eF(a,b){var s=this.b
s.h(0,b)
s.j(0,b,a)}}
A.fH.prototype={
l(a){return"Perk."+this.b}}
A.cd.prototype={
l(a){return"EquipmentSlot."+this.b}}
A.f0.prototype={}
A.d2.prototype={
l(a){return"TileType."+this.b}}
A.eZ.prototype={
l(a){return"CollisionMode."+this.b}}
A.as.prototype={}
A.ct.prototype={
l(a){return"TerrainType."+this.b}}
A.ah.prototype={
l(a){return"TerrainWidget."+this.b}}
A.cj.prototype={
l(a){return"LockState."+this.b}}
A.b3.prototype={
l(a){return"Biome."+this.b}}
A.bU.prototype={
gI(a){return this.b.a},
gJ(a){return this.b.b},
sf4(a){t.dt.a(a)},
$idF:1,
gbs(){return this.z}}
A.fn.prototype={}
A.fo.prototype={$idF:1,
gbs(){return this.a},
gI(a){return this.b},
gJ(a){return this.c}}
A.i.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.i&&b.a===this.a&&b.b===this.b},
gt(a){return A.jO(this.a,this.b,B.B,B.B)},
B(a,b){return new A.i(this.a+b.a,this.b+b.b)},
P(a,b){return new A.i(this.a-b.a,this.b-b.b)},
bF(){return new A.at(this.a,this.b)},
aN(a){var s=Math.abs(this.a-a.a),r=Math.abs(this.b-a.b)
return s+r+-0.6000000000000001*Math.min(s,r)},
l(a){return"("+this.a+", "+this.b+")"}}
A.jr.prototype={
l(a){return"LiquidKind."+this.b}}
A.a1.prototype={
l(a){return"Interactable."+this.b}}
A.ju.prototype={}
A.jz.prototype={
eU(){var s,r
for(s=this.a,r=0;r<4000;++r)s[r]=s[r]-1}}
A.cT.prototype={
l(a){return"MonsterKind."+this.b}}
A.iU.prototype={
ep(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.a,i=j.a8(k,t.C),h=this.c
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.c.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.b||A.O(A.bL(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.d=r
j.af(b,k,i)}}
A.iY.prototype={
a_(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=t.t,p=t.n,o=t.g2,n=t.N,m=t.z,l=0;l<s.length;s.length===r||(0,A.A)(s),++l){k=s[l]
$.mm().a6(a,4,3,A.b6(["u_resolution",A.c([b.a,b.b],q),"u_time",k.gbk().geN().fj(0,k.geE(k).geN()),"u_offset",A.c([b.d,b.e],p),"u_origin",A.c([k.gI(k),k.gJ(k)],o)],n,m))
k.sbk(k.gbk().B(0,A.iX(11)))}r=A.T(s).i("D(1)").a(new A.iZ())
if(!!s.fixed$length)A.U(A.C("removeWhere"))
B.a.e8(s,r,!0)}}
A.iZ.prototype={
$1(a){t.ox.a(a)
return a.gbk().dc(0,a.geE(a))},
$S:31}
A.j1.prototype={}
A.f6.prototype={
dC(a,b,c){var s,r,q,p=this
p.gX().a.V(p.a)
p.y.a.V(p.a)
p.z.a.V(p.a)
p.gbn().b.V(p.a)
s=p.gac()
r=p.a
s.d=r.createFramebuffer()
s.a.V(r)
s.b.V(r)
q=p.cy
if(q===$){s=A.aM(A.c([new A.X("a_position",35044,5126,2,new Float32Array(A.cA(B.x)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise(vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f * f * f + .6 * f * f + .5 * f) * color, 0.3);\n}\n",A.c([new A.x("u_resolution",B.f),new A.x("u_time",B.u),new A.x("u_offset",B.f),new A.x("u_player_vis_texture",B.l),new A.x("u_block_size",B.f)],t.o),u.h)
A.de(p.cy,"weather")
q=p.cy=new A.ki(s)}q.b.V(p.a)
p.gaR().b.V(p.a)
s=p.a
$.mm().V(s)
$.oh().V(s)
p.fx.a.V(p.a)
p.gL().b.a.V(p.a)
s=p.cx.b
new A.bX(s,A.F(s).i("bX<1>")).cY(new A.j2(p,p.b.getBoundingClientRect()))
p.bq()},
gX(){var s,r=this,q=r.x
if(q===$){s=A.n2(r.a,r.f)
A.de(r.x,"sprites")
r.x=s
q=s}return q},
gbn(){var s,r=this,q=r.Q
if(q===$){s=A.pP()
s=A.aM(A.c([new A.X("a_position",35044,5126,2,s),new A.X("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.l,A.c([new A.x("u_resolution",B.f),new A.x("u_offset",B.f)],t.o),u.q)
A.de(r.Q,"fovRenderer")
q=r.Q=new A.j3(r.f,s,new A.i(-1,-1))}return q},
gac(){var s,r,q,p=this,o=u.p,n="a_position",m="u_player_visible_texture",l=p.ch
if(l===$){s=t.G
r=t.o
q=A.aM(A.c([new A.X(n,35044,5126,2,new Float32Array(A.cA(B.x)))],s),u.e,A.c([new A.x("u_source_position",B.f),new A.x("u_source_color",B.bf),new A.x("u_source_strength",B.u),new A.x("u_time",B.u),new A.x("u_visible_texture",B.l),new A.x(m,B.l)],r),o)
r=A.aM(A.c([new A.X(n,35044,5126,2,new Float32Array(A.cA(B.x)))],s),u.A,A.c([new A.x("u_light_texture",B.l),new A.x("u_game_world_texture",B.l),new A.x(m,B.l),new A.x("u_resolution",B.f),new A.x("u_block_size",B.f),new A.x("u_offset",B.f)],r),o)
s=A.c([],t.ow)
A.de(p.ch,"lightingRenderer")
l=p.ch=new A.fp(q,r,p.f,s)}return l},
gaR(){var s,r=this,q=r.db
if(q===$){s=A.aM(A.c([new A.X("a_position",35048,5126,2,new Float32Array(12))],t.G),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nuniform float u_time;\nuniform float u_visible;\n\nvoid main() {\n  if (u_visible == 0.0) {\n    discard;\n    return;\n  }\n  float scale = (sin(u_time * 3.0) + 1.0) / 4.0;\n  outColor = vec4(0.509, 0.69411, 1.0, scale + 0.3);\n}\n",A.c([new A.x("u_offset",B.f),new A.x("u_resolution",B.f),new A.x("u_time",B.u),new A.x("u_visible",B.u)],t.o),"#version 300 es\nin vec2 a_position;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n")
A.de(r.db,"selectionRenderer")
q=r.db=new A.k1(r.f,s,B.D)}return q},
gL(){var s,r,q,p,o=this,n=o.dy
if(n===$){s=o.a
r=A.c([],t.J)
q=A.c([],t.c5)
p=new A.eT(A.c([],t.f))
s=A.n2(s,o.f)
B.a.k(q,p)
A.de(o.dy,"textRenderer")
n=o.dy=new A.h1(s,r,q,p)}return n},
bq(){var s,r,q,p=this,o=$.eF(),n=t.t,m=t.ku
n=new A.iV(new A.iC(B.m,new A.je(B.m)),A.c([new A.as(B.a4,o.E()<=0.6,1),new A.as(B.z,o.E()<=0.4,2),new A.as(B.z,o.E()<=0.4,3),new A.as(B.z,o.E()<=0.4,4),new A.as(B.y,o.E()<=0.2,5),new A.as(B.y,o.E()<=0.2,6),new A.as(B.y,o.E()<=0.2,7),new A.as(B.A,o.E()<=0.1,8),new A.as(B.A,o.E()<=0.1,9),new A.as(B.A,o.E()<=0.1,10),new A.as(B.P,!1,11)],t.lR),A.c([2,4,4,4,6,6,6,10,10,10,12],n),A.c([A.b0(o,10,25),A.b0(o,115,125),A.b0(o,115,125),A.b0(o,115,125),A.b0(o,125,135),A.b0(o,125,135),A.b0(o,125,135),A.b0(o,135,145),A.b0(o,135,145),A.b0(o,135,145),A.b0(o,170,200)],n),A.c([A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m)],t.fu),A.c([0,0,0,0,0,0,0,0,0,0,0],n),A.aa(t.ee,t.db))
n.dZ()
n.dX()
m=A.mv()
o=A.c([],t.I)
s=A.oY(B.ao,t.b,t.R)
r=A.c([],t.d)
r=n.c6(A.lM(null,new A.c9(20,20,0,0,0,0,0,new A.cM(o,s),m,A.c([],t.Q),r,new A.cN("J")),0,null,!1,!0,new A.P(0,4,1,1,null)))
q=new A.c_(r.a(),r.$ti.i("c_<1>"))
q.n()
q.n()
r=new A.km(q.gp(q),q)
p.rx=r
r=p.r2=A.c1(r,"worldWrapper").a
m=r.e
r=r.d
if(!(r<m.length))return A.b(m,r)
r=A.l8(m[r])
m=p.r2
s=m.e
m=m.d
if(!(m<s.length))return A.b(s,m)
p.cQ(r,s[m])
m=p.r2
s=m.a
r=m.e
m=m.d
if(!(m<r.length))return A.b(r,m)
p.cu(s,A.l8(r[m]))
m=p.gL()
r=p.r2
m.a=r.a.c
m=p.y
s=r.e
r=r.d
if(!(r<s.length))return A.b(s,r)
r=m.b=s[r]
m.c=!0
m=p.z
m.c=r
m.b=!0
m=p.f
m.cW(r.c)
m.cR()
r=p.r2
s=r.e
r=r.d
if(!(r<s.length))return A.b(s,r)
m.e=A.l8(s[r])},
a_(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=3553,b=6408,a=33071,a0=36160
t.cH.a(a2)
d.a=a2
s=d.b
r=s.clientWidth
q=s.clientHeight
if(r!==d.k2||q!==d.k3){B.a7.sag(s,r)
B.a7.sab(s,q)
d.k2=r
d.k3=q
s=d.fy
if(s!=null)B.e.cG(a2,s)
s=d.go
if(s!=null)B.e.cG(a2,s)
d.fy=a2.createTexture()
d.go=a2.createTexture()
B.e.T(a2,c,d.fy)
B.e.aw(a2,c,0,b,d.k2,d.k3,0,b,5121,null)
a2.texParameteri(c,10241,9729)
a2.texParameteri(c,10242,a)
a2.texParameteri(c,10243,a)
B.e.T(a2,c,d.go)
B.e.aw(a2,c,0,b,d.k2,d.k3,0,b,5121,null)
a2.texParameteri(c,10241,9729)
a2.texParameteri(c,10242,a)
a2.texParameteri(c,10243,a)}s=d.r
p=d.f.e
s.ff(0,d.r1,p.a,p.b,q,r)
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
B.e.at(a2,a0,d.id)
B.e.bo(a2,a0,36064,c,d.fy,0)
a2.clearColor(0,0,0,1)
a2.clear(16640)
s=d.y
if(s.c){s.er(a2)
s.c=!1}o=t.t
n=t.n
m=t.N
l=t.z
s.a.a6(a2,4,48e3,A.b6(["u_resolution",A.c([p.a,p.b],o),"u_offset",A.c([p.d,p.e],n)],m,l))
s=d.z
if(s.b){s.ep(0,a2)
s.b=!1}s.a.a6(a2,0,B.d.S(s.d,2),A.b6(["u_resolution",A.c([p.a,p.b],o),"u_offset",A.c([p.d,p.e],n)],m,l))
d.gX().a_(a2,p)
s=d.k1
B.e.at(a2,a0,s)
B.e.bo(a2,a0,36064,c,d.go,0)
a2.viewport(0,0,r,q)
a2.clearColor(0,0,0,1)
d.gac()
d.gac().f=d.fy
d.gac().y=s
d.gac().a_(a2,p)
s=d.gbn()
if(!s.a.e.F(0,s.c)||s.d)s.es(a2)
s.b.a6(a2,4,48e3,A.b6(["u_resolution",A.c([p.a,p.b],o),"u_offset",A.c([p.d,p.e],n)],m,l))
d.fr.a_(a2,p)
if(d.d.b){s=d.gaR()
s.e4(a2,p)
k=A.c([p.a,p.b],o)
n=A.c([p.d,p.e],n)
j=p.c
i=s.a
i=i.a1(i.e)
h=s.c
i=i.a2(0,h.a,h.b)?1:0
s.b.a6(a2,4,6,A.b6(["u_resolution",k,"u_offset",n,"u_time",j/1000,"u_visible",i],m,l))}B.e.at(a2,a0,null)
s=d.fx
s.b=d.go
a2.activeTexture(33984)
B.e.T(a2,c,s.b)
s.a.a6(a2,4,3,A.b6(["u_resolution",A.c([p.a,p.b],o),"u_texture",0,"u_time",p.c/1000],m,l))
d.gL().a_(a2,p)
a2.finish()
g=A.iX(B.c.A(a1))
l=d.c
f=A.c(l.slice(0),A.T(l))
B.a.sm(l,0)
for(s=f.length,e=0;e<f.length;f.length===s||(0,A.A)(f),++e)f[e].$1(g)
d.eT(p)
d.r1=!1},
eT(a){var s=this.r2
if(s==null)return
s=s.a.b
B.c.A(s.d/24)
B.c.A(s.e/36)},
bC(a){var s,r=this.r2,q=r.e
r=r.d
if(!(r<q.length))return A.b(q,r)
B.a.H(q[r].a,a)
s=a.b
s.sad(-1)
s.sae(-1)
this.gX().H(0,s)},
bS(a,b){var s=a.b,r=B.c.A(s.d/24),q=B.c.A(s.e/36),p=b.b,o=B.c.A(p.d/24),n=B.c.A(p.e/36)
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
p.sam(0,B.w)
s=this.gX()
p.saK(0,1)
s.k(0,p)},
cu(a,b){return this.cv(a,b,null)},
cQ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
B.a.sm(g.gac().x,0)
g.gX().bf(0)
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
B.a0.au(s.c,0,4000,0)
s.e=a
for(r=r.c,q=r.length,p=b.d,o=0;o<r.length;r.length===q||(0,A.A)(r),++o){n=r[o]
m=n.b
if(n.r!=null){l=new A.P(11,13,m.a*24,m.b*36,null)
l.x=B.b5
l.y=-1
k=l.a=g.gX()
j=k.c
j.$ti.c.a(l);++j.d
j.ai(0,l)
k.e=!0}l=A.mJ(n.f,m.a*24,m.b*36,p)
if(l!=null){k=l.a=g.gX()
j=k.c
j.$ti.c.a(l);++j.d
j.ai(0,l)
k.e=!0
n.y=l}if(n.f===B.L){n.z=new A.fn(B.d7,7)
i=g.ch
if(i===$){h=A.oX(s)
A.de(i,"lightingRenderer")
g.ch=h
i=h}B.a.k(i.x,n)}}for(s=b.a,r=s.length,o=0;o<s.length;s.length===r||(0,A.A)(s),++o){l=s[o].b
l.r=B.w
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
A.j2.prototype={
$1(a){var s,r,q
t.bd.a(a)
s=this.a.ry
r=J.ax(a)
s.seQ(r.h(a,0))
r=r.h(a,1)
q=this.b
q.left.toString
q=q.top
q.toString
if(typeof r!=="number")return r.P()
s.r=r-q},
$S:65}
A.a6.prototype={
ah(a){return this.dm(a)},
dm(a){var s=0,r=A.bz(t.fq),q,p=2,o,n=[],m=this,l,k,j,i
var $async$ah=A.bA(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.aj(m.U(0,a),$async$ah)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
l=A.bf(i)
A.ip("ERROR: "+A.B(l))
q=new A.J(null,null,!1,!0,!1,B.h,null)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.bw(q,r)
case 2:return A.bv(o,r)}})
return A.bx($async$ah,r)}}
A.bF.prototype={}
A.J.prototype={}
A.fA.prototype={
U(a,b){var s,r,q,p,o=b.r2.a
A.c1(b.rx,"worldWrapper").b.n()
s=b.r2
r=s.e
s=s.d+1
if(!(s<r.length))return A.b(r,s)
q=r[s]
p=A.l8(q)
b.cQ(p,q)
b.cv(o,p,q);++b.r2.d
b.r1=!0
return new A.J(null,null,!0,!0,!1,B.h,null)}}
A.dV.prototype={
U(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.c.x,g=h.gbx(),f=h.b.h(0,B.r)
if(g==null||f.e===g.Q.b)return new A.J(j,j,!1,!0,!1,B.h,j)
q=h.a
p=q.length
o=t.mm
n=0
while(!0){if(!(n<p)){s=j
r=s
break}m=q[n]
if(m.c===B.aR){l=o.a(m.b)
if(l.a===g.Q.a){s=m
r=l
break}}++n}if(r==null)return new A.J(j,j,!1,!0,!1,B.h,j)
i=i.q()
i.toString
b.e.av("reload_1.mp3",i)
i=r.b
k=Math.min(i,g.Q.b)
i-=k
r.b=i
if(i===0)B.a.H(q,s)
i=f.e
i.toString
f.e=k+i
return new A.J(j,j,!0,!0,!1,B.h,j)}}
A.aP.prototype={
U(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e={},d=b.r2,c=d.e
d=d.d
if(!(d<c.length))return A.b(c,d)
s=c[d]
d=g.b
r=d.q()
q=r.B(0,g.a)
p=s.c
if(!p.cO(q))return new A.J(f,f,!1,!0,!1,B.h,f)
o=p.h(0,q)
n=s.al(q)
if((o.c===B.b||A.O(A.bL(o.f)))&&n==null){if(o.f==null)return new A.J(f,f,!1,!0,!1,B.h,f)
e=b.r2
d=e.e
e=e.d
if(!(e<d.length))return A.b(d,e)
m=A.nG(o,d[e])
if(m.length!==0)return new A.J(B.a.gds(m).b,f,!1,!0,!1,B.h,f)
return new A.J(f,f,!1,!0,!1,B.h,f)}l=A.c([],t.w)
e.a=!1
if(n!=null){if(A.nH(n,d))return new A.J(new A.dt(!1,d,n),f,!1,!0,!1,B.h,f)
c=e.a=!0}else c=!1
k=b.f
k=k.a1(k.e)
k.toString
j=!d.x
if(j)i=k.h(0,r)||k.h(0,q)
else i=!1
p.h(0,r)
if(o.r!=null)b.e.bw("water_footsteps_"+(B.m.D(5)+1)+".mp3",q,0.15)
if(i)h=new A.bF(A.iX(60),new A.jI(g,r,q),new A.jJ(e,g,b,n,q))
else{if(c){n.toString
b.bS(n,d)}else b.d0(d,q)
h=f}d.a=0
return new A.J(f,f,!0,!0,j,l,h)}}
A.jI.prototype={
$1(a){var s=a.d,r=1-s,q=this.b,p=this.c,o=this.a.b.b
o.sI(0,q.a*24*r+p.a*24*s)
o.sJ(0,q.b*36*r+p.b*36*s)},
$S:11}
A.jJ.prototype={
$0(){var s,r=this,q=r.c,p=r.b.b
if(r.a.a){s=r.d
s.toString
q.bS(s,p)}else q.d0(p,r.e)},
$S:0}
A.d1.prototype={
U(a,b){return new A.J(null,null,!0,!0,!1,B.h,null)}}
A.fm.prototype={
U(a,b){var s=this.a.c
s.d-=1000;++s.c;++s.e;++s.f;++s.r
A.ip("LEVEL UP")
return new A.J(null,null,!0,!0,!1,B.h,null)}}
A.e3.prototype={
U(a,b){var s,r,q,p,o,n,m=b.r2,l=m.e
m=m.d
if(!(m<l.length))return A.b(l,m)
s=this.b
r=l[m].c.h(0,s)
q=r.y
r.f=this.a?B.v:B.I
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
n=A.mJ(m,24*l.a,36*l.b,o[p].d)
if(n!=null)b.gX().k(0,n)
r.y=n
m=b.r2
l=m.e
m=m.d
if(!(m<l.length))return A.b(l,m)
b.f.cX(l[m].c,s)
b.gbn().d=!0
b.e.bw("door_1.mp3",s,0.8)
return new A.J(null,null,!0,!0,!1,B.h,null)}}
A.dt.prototype={
U(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c={},b=d.b
b.a=0
c.a=null
s=d.c
r=A.qL(s,b,a0)
q=d.a
p=b.c
o=s.c
if(q){p.toString
o.toString
n=c.a=p.d4(o,B.m,r)}else{p.toString
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
q.saK(0,4)
i=l.bF()
h=p.bF()
q=l.bF()
g=h.P(0,i)
f=q.B(0,new A.at(g.a/1.5,g.b/1.5))
c.b=!0
e=new A.bF(B.dC,new A.ix(c,d,a0,p,l,i,f),new A.iy(c,d,a0,p,l,k,j))}else{q=b.x?B.aa:B.C
d.aT(n.c,p,l,a0,q)
e=null}q=s.r
if(q!=null)q.c=b
if(!n.b)return new A.J(null,n.a,!0,!0,!1,B.h,e)
b=o.b-n.c
o.b=b
if(b<=0)B.a.k(m,new A.dy(s))
return new A.J(null,c.a.a,!0,!0,!1,m,e)},
cc(a){if(this.a){if(a)return"bullet_impact_2.mp3"
return"bullet_miss_1.mp3"}if(a)return"heavy_punch_1.mp3"
return"miss_1.mp3"},
aT(a,b,c,d,e){var s,r,q={},p=c.a*24,o=c.b*36,n=new A.ba(B.d.l(a),e,1.25,p,o),m=b.a*24,l=b.b*36,k=A.oF(new A.at(m-p,l-o)),j=k.a*24
k=k.b*36
s=new A.at(j,k).B(0,new A.at(p,o))
r=new A.at(j*2,k*2).B(0,new A.at(m,l))
d.gL().aG(n)
q.a=B.dB
A.pf(B.dD,new A.iw(q,d,n,r,s))},
l(a){return"TargetMeleeAttackEvent{"+this.b.l(0)+" -> "+this.c.l(0)+"}"}}
A.ix.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a
if(l.b&&a.d>=0.4){s=m.c
r=m.b
q=m.d
s.e.av(r.cc(l.a.b),q)
p=l.a
o=r.b.x?B.aa:B.C
r.aT(p.c,q,m.e,s,o)
l.b=!1
s=r.c.b
if(l.a.b)s.sam(0,B.C)
else s.sam(0,B.c2)}l=a.d
if(l<=0.4){s=m.f
r=m.r
n=l/0.6
l=m.b.b.b
l.sI(0,A.nP(r.a,s.a,n)*24)
l.sJ(0,A.nP(r.b,s.b,n)*36)}else{s=m.b.b
if(l>=0.6){l=s.b
s=m.e
l.sad(s.a)
l.sae(s.b)}else{l=s.b
s=m.r
l.sI(0,s.a*24)
l.sJ(0,s.b*36)}}},
$S:11}
A.iy.prototype={
$0(){var s,r,q,p,o,n=this,m=n.a
if(m.b){s=n.c
r=n.b
q=n.d
s.e.av(r.cc(m.a.b),q)
p=m.a
o=r.b.x?B.aa:B.C
r.aT(p.c,q,n.e,s,o)
m.b=!1}m=n.b
s=m.b.b
s.saK(0,n.f)
r=n.e
s.sad(r.a)
s.sae(r.b)
m.c.b.sam(0,n.r)},
$S:0}
A.iw.prototype={
$1(a){var s,r,q,p,o,n=this
t.hU.a(a)
s=n.a
r=s.a.a+8000
s.a=new A.ae(r)
if(r>5e5){a.eA(0)
n.b.gL().bD(n.c)}q=B.d.S(s.a.a,1000)/300
s=n.c
r=n.d
p=1-q
o=n.e
s.sI(0,q*r.a+p*o.a)
s.sJ(0,q*r.b+p*o.b)},
$S:34}
A.dy.prototype={
l(a){return"DeathEvent{"+this.a.l(0)+"}"},
U(a,b){var s,r=null,q=b.r2,p=q.e,o=q.d
if(!(o<p.length))return A.b(p,o)
p=this.a
if(p.e){b.bC(p)
return new A.J(r,r,!0,!0,!1,B.h,r)}if(p.x)return new A.J(r,"You Died!",!0,!0,!1,B.h,r)
q.a.c.d+=100
s=A.c([],t.w)
q=b.r2.a
if(q.c.d>=1000)B.a.k(s,new A.fm(q))
p.q()
p.c.toString
b.bC(p)
return new A.J(r,p.l(0)+" has died.",!1,!0,!1,s,r)}}
A.eQ.prototype={
U(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=b.r2,d=e.e
e=e.d
if(!(e<d.length))return A.b(d,e)
s=d[e]
if($.mz!==s){$.mz=s
e=g.b
B.a0.au(e.a,0,4000,0)
e.b.bf(0)}for(e=b.f.c,d=g.c,r=!d,q=g.b,p=q.b,o=s.c,n=0;n<100;++n)for(m=0;m<40;++m){l=100*m+n
k=new A.i(n,m)
if(!(l<4000))return A.b(e,l)
j=e[l]
if(j===0&&d)if(o.h(0,k).f===B.v)p.j(0,k,100)
else{i=o.h(0,k)
if(!(i.c===B.b||A.O(A.bL(i.f))))p.j(0,k,80)}else if(j===1&&r)p.H(0,k)}q.eY(s,B.a8)
e=g.a
d=e.q()
d.toString
k=q.cK(s,d,1,B.a8)
if(k==null)return new A.J(f,"No more areas to explore",!1,!0,!1,B.h,f)
d=$.eE()
r=e.q()
r.toString
r=d.cL(r,k,s,B.a8)
h=r==null?f:r.b
if(h==null)return new A.J(f,"No path to that location",!1,!0,!1,B.h,f)
d=h.d
r=e.q()
r.toString
return new A.J(new A.aP(d.P(0,r),e),f,!0,!0,!1,B.h,f)}}
A.ha.prototype={
U(a,b){var s,r,q,p,o,n,m=null,l=b.r2,k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
s=k[l]
r=A.c([],t.q)
for(l=s.c.c,k=l.length,q=!1,p=0;p<l.length;l.length===k||(0,A.A)(l),++p){o=l[p]
if(o.f===B.J){o.f=B.v
B.a.k(r,o.b)
q=!0}}if(q){for(l=r.length,k=b.e,p=0;p<r.length;r.length===l||(0,A.A)(r),++p)k.av("door_unlock_1.mp3",r[p])
l=b.r2
k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
n=this.a
k[l].c.h(0,n).f=B.U
l=b.r2
k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
k[l].al(n)
return new A.J(m,"A door has been unlocked",!0,!0,!1,B.h,m)}return new A.J(m,m,!1,!0,!1,B.h,m)}}
A.dU.prototype={
U(a,b){var s,r=null,q=this.b,p=q.c.x.b.h(0,B.r)
if(p==null||p.e===0)return new A.J(r,r,!1,!0,!1,B.h,r)
s=p.e
s.toString
p.e=s-1
return new A.J(new A.fL(this.a,q),r,!0,!0,!1,B.h,r)}}
A.fL.prototype={
U(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null,g=b.r2,f=g.e
g=g.d
if(!(g<f.length))return A.b(f,g)
s=f[g]
g=this.c
f=g.q()
f.toString
r=this.b
q=$.eE().eG(f,r,s)
if(q==null)return new A.J(h,"Cant reach target",!1,!0,!1,B.h,h)
p=s.al(r)
o=A.c([],t.w)
if(p!=null)o.push(new A.dt(!0,g,p))
n=q.f6(0)
m=b.e.av("pistol_1.mp3",f)
g=g.b
f=B.c.A(g.d/24)
g=B.c.A(g.e/36)
l=B.ea.h(0,t.gX.i("Y.T").a(700))
l.toString
k=new A.fo(new A.fn(l,10),f,g)
B.a.k(b.gac().x,k)
g=B.b0.h(0,t.e.i("Y.T").a(800))
g.toString
j=new A.P(14,2,-1,-1,h)
j.scF(0,g)
i=A.lM(h,h,0,h,!0,!1,j)
b.cu(i,B.D)
j.sam(0,new A.h(0))
return new A.J(h,h,!0,!0,!1,o,new A.bF(A.iX(16*n.length),new A.jT(n,j,m,k),new A.jU(b,i,k)))}}
A.jT.prototype={
$1(a){var s,r,q=this.a,p=B.c.aa(a.d*(q.length-1))
if(!(p>=0&&p<q.length))return A.b(q,p)
s=q[p]
p=this.b
q=s.a
p.sad(q)
r=s.b
p.sae(r)
B.d.A(q)
B.d.A(r)
this.d.a.c=10*(1-a.d)},
$S:11}
A.jU.prototype={
$0(){var s=this.a
s.bC(this.b)
B.a.H(s.gac().x,this.c)},
$S:0}
A.j5.prototype={}
A.j4.prototype={
dQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.e.T(b,f,c)
s=A.mS(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
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
s[h]=g}B.e.aw(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
aP(a,b){var s,r,q=a.b*100+a.a
if(q<0||q>=4000)return null
s=this.f
r=s.h(0,a)
if(r==null){r=new A.i3(b.createTexture())
s.j(0,a,r)}if(r.b){this.dQ(a,b,r.a)
r.b=!1}return r.a},
a1(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.jX(p,p+4000,B.d.bT(s.byteLength,r))
return new A.kh(100,A.mS(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
bH(){var s,r,q,p,o=this.a1(this.e).c
for(s=o.length,r=this.c,q=0;q<4000;++q){p=r[q]
if(!(q<s))return A.b(o,q)
r[q]=p|(o[q]>0?1:0)}},
cR(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.b3(new A.i(s,r))
for(q=this.f,q=q.gbI(q),q=q.gv(q);q.n();)q.gp(q).b=!0},
cX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.r.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.a2(0,r,q)
o=o.c===B.b||A.O(A.oR(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.b3(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]>0)g.b3(new A.i(m,l))}s=g.a1(b)
s.toString
for(p=g.f,p=p.gak(p),p=p.gv(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]>0)i.b.b=!0}},
cW(a){return this.cX(a,null)},
b3(a){var s,r,q,p=this.a1(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=15
for(q=0;q<4;++q)this.eb(new A.d0(1,-1,1),new A.jV(B.e4[q],a),o)},
ea(a,b,c){var s,r
if(a<0||a>=b.byteLength)return
s=b.length
if(this.b5(a,b)){if(!(a>=0&&a<s))return A.b(b,a)
s=b[a]
r=c.a
if(!(r<4))return A.b(B.aS,r)
b[a]=s|B.aS[r]}else{if(!(a>=0&&a<s))return A.b(b,a)
b[a]=15}},
b5(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
b4(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===0},
eb(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.r
B.a.sm(d,0)
B.a.k(d,a)
for(s=b.a;r=d.length,r!==0;){if(0>=r)return A.b(d,-1)
q=d.pop()
r=q.a
p=B.c.aa(r*q.b+0.5)
o=B.c.cE(r*q.c-0.5)
for(n=r+1,m=2*r,l=p,k=null;l<=o;++l,k=i){j=b.f8(0,new A.i(r,l))
i=j.b*100+j.a
h=e.b5(i,c)
if(!h)g=l>=r*q.b&&l<=r*q.c
else g=!0
if(g)e.ea(i,c,s)
g=k!=null
if(g&&e.b5(k,c)&&e.b4(i,c))q.b=(2*l-1)/m
if(g&&e.b4(k,c)&&h){f=new A.d0(n,q.b,q.c)
f.c=(2*l-1)/m
B.a.k(d,f)}}if(k!=null&&e.b4(k,c))B.a.k(d,new A.d0(n,q.b,q.c))}}}
A.i3.prototype={}
A.kh.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0},
a2(a,b,c){var s=this.c,r=c*this.a+b
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0}}
A.c8.prototype={
l(a){return"Cardinal."+this.b}}
A.jV.prototype={
f8(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a.a){case 0:s=r.b
return new A.i(s.a+p,s.b-q)
case 1:s=r.b
return new A.i(s.a+p,s.b+q)
case 2:s=r.b
return new A.i(s.a+q,s.b+p)
case 3:s=r.b
return new A.i(s.a-q,s.b+p)}}}
A.d0.prototype={}
A.bM.prototype={
l(a){return this.a}}
A.fp.prototype={
a_(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=3553,a="u_player_visible_texture"
if(c.e==null){s=a0.createTexture()
c.e=s
B.e.T(a0,b,s)
B.e.aw(a0,b,0,6408,100,40,0,6408,5121,null)
a0.texParameteri(b,10241,9729)
a0.texParameteri(b,10242,33071)
a0.texParameteri(b,10243,33071)}B.e.at(a0,36160,c.d)
B.e.bo(a0,36160,36064,b,c.e,0)
a0.clearColor(0,0,0,1)
a0.clear(16640)
a0.viewport(0,0,100,40)
s=c.c
r=s.aP(s.e,a0)
r.toString
a0.activeTexture(33985)
B.e.T(a0,b,r)
for(q=c.x,p=q.length,o=c.a,n=t.t,m=t.n,l=t.N,k=t.z,j=0;j<q.length;q.length===p||(0,A.A)(q),++j){i=q[j]
h=i.gbs()
g=s.aP(new A.i(i.gI(i),i.gJ(i)),a0)
if(g==null)continue
a0.activeTexture(33984)
B.e.T(a0,b,g)
f=h.c
e=A.c([i.gI(i),i.gJ(i)],n)
d=h.b.a
o.a6(a0,4,3,A.b6(["u_source_strength",f,"u_source_position",e,"u_source_color",A.c([(d>>>16&255)/255,(d>>>8&255)/255,(d&255)/255,0.2],m),"u_time",a1.c/1000,a,1,"u_visible_texture",0],l,k))}B.e.at(a0,36160,c.y)
a0.viewport(0,0,a1.a,a1.b)
a0.activeTexture(33984)
B.e.T(a0,b,c.e)
a0.activeTexture(33985)
B.e.T(a0,b,c.f)
a0.activeTexture(33986)
B.e.T(a0,b,r)
c.b.a6(a0,4,3,A.b6(["u_light_texture",0,"u_game_world_texture",1,a,2,"u_block_size",B.dV,"u_resolution",A.c([a1.a,a1.b],n),"u_offset",A.c([a1.d,a1.e],m)],l,k))}}
A.bo.prototype={
gcH(){var s=this.b
s=s==null?null:s.gcH()
return 1+(s==null?0:s)},
N(a,b){return B.c.N(this.f,t.p6.a(b).f)},
gcn(){var s,r=this.a
if(r==null)r=this
else{s=r.a
r=s==null?r:s.gcn()}return r},
dW(){var s,r,q
for(s=this,r=null;s!=null;r=s,s=q){s.b=r
q=s.a}},
f6(a){var s,r=A.c([],t.q)
for(s=this;s!=null;){B.a.k(r,s.d)
s=s.b}return r},
l(a){var s,r,q,p
for(s=this.d,r=this,q="",p="";r!=null;q=", "){p=p+q+s.l(0)
r=r.b}return p.charCodeAt(0)==0?p:p},
$iad:1}
A.aW.prototype={
l(a){return"Directions."+this.b}}
A.jP.prototype={
eG(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.a,e=a1.a,d=a0.b,c=a1.b,b=Math.max(Math.abs(f-e),Math.abs(d-c)),a=new A.bo(a0,0,b*1.02+0)
for(s=(b-1)*1.02+1,r=a2.c,q=t.W,p=r.a,o=r.b,n=a0,m=a,l=1;l<=b;++l,n=h,m=g){k=l/b
j=1-k
i=B.c.A(e*k+f*j)
j=B.c.A(c*k+d*j)
h=new A.i(i,j)
if(!(i>=0&&j>=0&&i<p&&j<o))return null
if(A.l6(q.a(r.h(0,h)),a2,B.a9)&&l!==b)return null
A.qB(i-n.a,j-n.b)
g=new A.bo(h,1,s)
g.a=m
m.b=g}return a},
cL(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=A.mI(b,t.p6),a0=A.aa(t.j,t.i),a1=a4.c
a.k(0,new A.bo(a2,0,a2.aN(a3)*1.02+0))
for(s=a.$ti.c,r=a1.a,q=a1.b,p=t.W;o=a.c,n=o===0,!n;){if(n)A.U(A.af("No element"));++a.d
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
for(n=l.e,h=0;h<8;++h){g=B.am[h]
f=A.a9(o,g)
m=f.a
if(m>=0){e=f.b
m=e>=0&&m<r&&e<q}else m=!1
if(m){m=l.a
if(!J.Z(m==null?b:m.d,f))m=A.l6(p.a(a1.h(0,f)),a4,a5)&&!f.F(0,a3)
else m=!0}else m=!0
if(m)continue
m=f.aN(a3)
e=this.e3(g)
if(typeof e!=="number")return A.cC(e)
e=n+e
d=new A.bo(f,e,m*1.02+e)
d.a=l
if(f.F(0,a3)){d.dW()
s=l.a
return s==null?l:s.gcn()}c=a0.h(0,f)
if(!(e>1/0))m=c!=null&&e>=c
else m=!0
if(m)continue
a0.j(0,f,e)
s.a(d);++a.d
a.ai(0,d)}}return b},
bm(a,b,c){return this.cL(a,b,c,B.a9)},
e3(a){switch(a.a){case 4:case 7:case 5:case 6:return 1
case 1:case 0:case 2:case 3:return 1.4}}}
A.f4.prototype={
cK(a,b,c,d){var s,r,q,p,o,n,m,l,k=this.a,j=b.b*100+b.a
if(!(j>=0&&j<4000))return A.b(k,j)
s=k[j]*c
r=A.c([],t.q)
for(j=a.c,q=t.W,p=!1,o=0;o<8;++o){n=A.a9(b,B.am[o])
m=n.b*100+n.a
if(m<0||m>=4000)continue
if(A.l6(q.a(j.h(0,n)),a,d))continue
if(!(m>=0&&m<4000))return A.b(k,m)
l=k[m]*c
if(l>s){B.a.sm(r,0)
B.a.k(r,n)
s=l
p=!0}else if(l===s)B.a.k(r,n)}k=r.length
if(k===0||!p)return null
k=$.nX().D(k)
if(!(k>=0&&k<r.length))return A.b(r,k)
return r[k]},
bl(a,b,c){return this.cK(a,b,c,B.a9)},
eY(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
B.a0.au(f,0,4000,0)
for(s=this.b,s=s.gak(s),s=s.gv(s);s.n();){r=s.gp(s)
q=r.a
B.a0.j(f,q.b*100+q.a,r.b)}s=a.c
r=t.W
do for(p=!1,o=0;o<100;++o)for(n=0;n<40;++n){m=n*100+o
if(A.l6(r.a(s.h(0,new A.i(o,n))),a,b))continue
if(!(m<4000))return A.b(f,m)
l=f[m]
for(q=[m+100,m-100,m+1,m-1],k=-1,j=0,i=0;i<4;++i){h=q[i]
if(h<0||h>=4000)continue
if(!(h>=0&&h<4000))return A.b(f,h)
g=f[h]
if(g>j){j=g
k=h}}if(k!==-1&&j>l+1){f[m]=j-1
p=!0}}while(p)}}
A.k1.prototype={
e4(a,b){var s,r,q,p,o,n,m,l=this,k="a_position",j=B.c.aa((b.f+b.d)/24),i=B.c.aa((b.r+b.e)/36),h=new A.i(j,i)
if(h.F(0,l.c)||j<0||j>=100||i<0||i>=40)return
l.c=h
s=l.b
r=s.a8(k,t.C)
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
A.X.prototype={}
A.x.prototype={}
A.d4.prototype={
l(a){return"UniformKind."+this.b}}
A.hk.prototype={}
A.i8.prototype={}
A.jc.prototype={
V(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.nq(a,i.a,35633),f=A.nq(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.Z(a.getProgramParameter(e,35714),!0)){A.ip(a.getProgramInfoLog(e))
A.U(A.af("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.e.cD(a,A.c1(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.i8(a.getUniformLocation(A.c1(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.c1(i.e,h),n)
k=a.createBuffer()
B.e.cA(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.hk(k,j))}},
a8(a,b){A.qv(b,t.jv,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
af(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.d(A.af("WARNING, NO ATTRIBUTE "+b))
B.e.cA(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
a6(a,b,c,d){var s,r,q,p,o,n
t.ea.a(d)
B.e.fg(a,A.c1(this.e,"_program"))
B.e.cD(a,A.c1(this.f,"_vertexArrayObject"))
for(s=d.gak(d),s=s.gv(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.a8(p)
n=r.h(0,p)
if(n==null)A.U(A.af("WARNING, NO UNIFORM "+p))
switch(n.b.b.a){case 0:B.e.f9(a,n.a,A.b_(o))
break
case 1:q=J.ax(o)
B.e.fb(a,n.a,A.b_(q.h(o,0)),A.b_(q.h(o,1)))
break
case 2:q=J.ax(o)
B.e.fc(a,n.a,A.b_(q.h(o,0)),A.b_(q.h(o,1)),A.b_(q.h(o,2)))
break
case 3:q=J.ax(o)
B.e.fd(a,n.a,A.b_(q.h(o,0)),A.b_(q.h(o,1)),A.b_(q.h(o,2)),A.b_(q.h(o,3)))
break
case 4:B.e.fa(a,n.a,A.E(o))
break}}a.drawArrays(b,0,c)}}
A.jY.prototype={
seQ(a){this.f=A.nn(a)}}
A.jZ.prototype={}
A.fB.prototype={}
A.fS.prototype={
aL(){var s=0,r=A.bz(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aL=A.bA(function(a,b){if(a===1)return A.bv(b,r)
while(true)switch(s){case 0:e=A.c([],t.iw)
for(p=q.b,o=t.cU,n=t.ou,m=t.oV,l=t.Z,k=t.U,j=0;j<47;++j){i=p[j]
h=new XMLHttpRequest()
g=new A.K($.G,o)
B.dF.eV(h,"get","sounds/"+i)
h.responseType="arraybuffer"
f=m.a(new A.k3(q,h,i,new A.aT(g,n)))
l.a(null)
A.hu(h,"readystatechange",f,!1,k)
h.send()
B.a.k(e,g)}s=2
return A.aj(A.oN(e,t.H),$async$aL)
case 2:return A.bw(null,r)}})
return A.bx($async$aL,r)},
bw(a,b,c){var s,r,q,p=this.c,o=A.oO(p),n=this.a.h(0,a)
if(n==null)return new A.fB()
s=p.createBufferSource()
r=B.m.E()
q=o.gain
q.toString
B.bN.sfh(q,0.1*c+r/20)
p=p.destination
p.toString
B.dE.c5(o,p,0,0)
B.aE.c5(s,o,0,0)
B.aE.sez(s,n)
s.start()
return new A.fB()},
av(a,b){return this.bw(a,b,2)},
$ipc:1}
A.k3.prototype={
$1(a){var s=0,r=A.bz(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.bA(function(b,c){if(b===1)return A.bv(c,r)
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
return A.aj(B.bM.eC(n.c,t.lo.a(A.pO(m.response))),$async$$1)
case 7:l.j(0,k,c)
p.aH(0)
s=5
break
case 6:p.aI(new A.hv("Failed to load "+o))
case 5:case 3:return A.bw(null,r)}})
return A.bx($async$$1,r)},
$S:35}
A.lg.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.e.T(q,r,p)
B.e.f5(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.a4(0,p)},
$S:17}
A.fV.prototype={
dD(a,b){A.qO(a,"CursesTransparent_24x36.png").d9(new A.k4(this),t.P)},
k(a,b){b.a=this
this.c.k(0,b)
this.e=!0},
H(a,b){t.hd.a(b)
this.c.H(0,b)
b.a=null
this.e=!0},
bf(a){var s,r,q,p
for(s=this.c,r=s.$ti,q=new A.cz(s,s.d,r.i("cz<1>")),r=r.c;q.n();){if(q.d<0)p=A.U(A.af("No element"))
else{p=q.c
if(p==null)p=r.a(null)}p.a=null}++s.d
s.sba(B.dZ)
s.c=0
this.e=!0},
eq(c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9="a_position",c0="a_texcoord",c1="a_bg_color",c2=b8.c,c3=c2.c
if(c3>1e4){A.ip("WARNING: TOO MANY SPRITES "+c3)
if(b8.f)b8.f=!1
c3=1e4}s=b8.a
r=t.jv
q=c3*12
p=A.jK(s.a8(b9,r).buffer,0,q)
o=A.jK(s.a8(c0,r).buffer,0,q)
q=c3*24
n=A.jK(s.a8("a_color",r).buffer,0,q)
m=A.jK(s.a8(c1,r).buffer,0,q)
l=c2.en()
B.a.aS(l,c2.a)
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
p[a6]=a}else{b0=B.c.a7(12*a9)
b1=B.c.a7(18*a9)
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
if(b5==null)B.b7.au(n,b4,b4+24,0)
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
n[a]=e}if(b6==null)B.b7.au(m,b4,b4+24,0)
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
a_(a,b){var s,r=this
if(r.b==null||r.c.c===0)return
if(r.e){r.eq(a)
r.e=!1}s=r.d
s.aP(s.e,a)
a.activeTexture(33984)
B.e.T(a,3553,r.b)
r.a.a6(a,4,r.c.c*6,A.b6(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.k4.prototype={
$1(a){this.a.b=t.lJ.a(a)},
$S:37}
A.P.prototype={
sI(a,b){var s=this.a
if(s!=null)s.e=!0
this.d=b},
sJ(a,b){var s=this.a
if(s!=null)s.e=!0
this.e=b},
sdn(a,b){var s=this.a
if(s!=null)s.e=!0
this.f=b},
sad(a){var s=this.a
if(s!=null)s.e=!0
this.d=a*24},
sae(a){var s=this.a
if(s!=null)s.e=!0
this.e=a*36},
sam(a,b){var s
this.r=b
s=this.a
if(s!=null)s.e=!0},
scF(a,b){var s=this.a
if(s!=null)s.e=!0
this.x=b},
saK(a,b){var s
this.y=b
s=this.a
if(s!=null)s.e=!0},
l(a){return"Sprite("+this.b+", "+this.c+")"}}
A.m.prototype={}
A.jw.prototype={}
A.kb.prototype={
er(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(this.b==null)return
s=this.a
r=s.a8("a_color",t.C)
q=this.b
switch(q.d.a.a){case 0:case 1:case 6:case 5:p=$.nY()
break
case 2:p=$.mj()
break
case 4:p=$.o_()
break
case 3:p=$.nZ()
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
f=!(f.c===B.b||A.O(A.bL(f.f)))}else f=!1
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
r[f]=1}}}s.af(a,"a_color",r)}}
A.h1.prototype={
ap(a){var s
if(B.a.H(this.d,a)){s=this.b
B.a.w(a.d,s.gd5(s))
B.a.w(a.e,this.geZ())}},
bD(a){var s
t.e8.a(a)
if(B.a.H(this.c,a)){s=this.b
B.a.w(a.f.a,s.gd5(s))}},
aG(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.f),i=a.a
i=(i.length===0?B.a1:new A.bQ(i)).a
s=new A.e1(i,0,0)
r=this.b
q=r.c
p=q.$ti.c
o=a.c
n=a.b
for(;s.bW(1,s.c);){m=s.d
l=$.pN.h(0,m==null?s.d=B.i.bR(i,s.b,s.c):m)
if(l==null)l=B.eS
k=new A.P(l.a,l.b,-1,-1,null)
k.x=n
k.f=o
k.a=r
p.a(k);++q.d
q.ai(0,k)
r.e=!0
B.a.k(j,k)}a.r=this
i=new A.kR(j)
i.br(a.d,a.e)
a.f=i
B.a.k(this.c,a)},
a_(a,b){var s,r,q,p,o,n,m=this
m.e.fe(0,m.a)
s=m.r
r=b.b
if(s!==r||m.f!==b.a||b.d!==m.x||b.e!==m.y){m.f=b.a
m.r=r
m.y=b.e
m.x=b.d
q=!0}else q=!1
for(s=m.d,r=s.length,p=m.b,o=0;o<s.length;s.length===r||(0,A.A)(s),++o){n=s[o]
if(!n.gcJ()){n.by(b.a,b.b,b.d,b.e)
n.cP(p,m)}else if(q)n.by(b.a,b.b,b.d,b.e)}p.a_(a,b)}}
A.ba.prototype={
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
A.kR.prototype={
br(a,b){var s,r,q,p,o,n,m
for(s=this.a,r=s.length,q=0,p=0;p<r;++p){o=s[p]
n=o.a
m=n==null
if(!m)n.e=!0
o.d=a+q
if(!m)n.e=!0
o.e=b
q+=24}}}
A.eJ.prototype={
l(a){return"Alignment."+this.b}}
A.d3.prototype={}
A.co.prototype={
by(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b,f=g.length+6,e=A.T(g),d=e.i("f(1)")
e=e.i("b8<1,f>")
s=new A.b8(g,d.a(new A.jC(h)),e).bA(0,new A.jD())
if(typeof s!=="number")return s.B()
r=s+6
s=g.length
e=new A.b8(g,d.a(new A.jE(h)),e).bA(0,new A.jF())
if(typeof e!=="number")return e.B()
q=(e+6)*24
switch(h.a.a){case 0:h.y=B.c.a7(a/2-q/2)+c
h.z=B.c.a7(b/2-(s+6)*36/2)+a0
break
case 1:h.y=B.d.a7(a-q)+c
h.z=a0
break}if(!h.x)return
for(e=h.d,p=0,o=0;o<f;++o)for(d=o*36,n=0;n<r;++n){if(!(p>=0&&p<e.length))return A.b(e,p)
m=e[p]
s=h.y
l=m.a
k=l==null
if(!k)l.e=!0
m.d=s+n*24
s=h.z
if(!k)l.e=!0
m.e=s+d;++p}j=108+h.z
for(e=h.e,p=0;p<g.length;++p){if(!(p<e.length))return A.b(e,p)
i=e[p]
i.sI(0,h.y+72)
i.sJ(0,j+36*p)}if(h.f){h.r.sJ(0,108+h.z)
h.r.sI(0,h.y+48)}},
cs(){var s=this,r=s.z,q=s.Q
s.r.sJ(0,108+r+36*q)
s.r.sI(0,48+s.y)},
cP(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.b,a2=a1.length+6,a3=A.T(a1)
a3=new A.b8(a1,a3.i("f(1)").a(new A.jA(a0)),a3.i("b8<1,f>")).bA(0,new A.jB())
if(typeof a3!=="number")return a3.B()
s=a3+6
for(a3=a0.d,r=a4.c,q=r.$ti.c,p=a0.c,o=a2-1,n=s-1,m=0;m<a2;++m)for(l=m*36,k=m===o,j=m===0,i=0;i<s;++i){h=i===0
if(h&&j)g=B.fF
else if(h&&k)g=B.fz
else{f=i===n
if(f&&j)g=B.eL
else if(f&&k)g=B.eP
else if(h)g=B.bc
else if(f)g=B.bc
else if(j)g=B.bd
else g=k?B.bd:B.eM}e=new A.P(g.a,g.b,-1,-1,null)
h=a0.y
e.d=h+i*24
h=a0.z
e.e=h+l
e.x=p
e.r=B.w
e.y=-1
B.a.k(a3,e)
e.a=a4
q.a(e);++r.d
r.ai(0,e)
a4.e=!0}d=108+a0.z
for(r=a0.e,c=0;c<a1.length;++c){q=a0.y
b=new A.ba(J.bD(a1[c]),B.w,1,q+72,d+36*c)
a5.aG(b)
B.a.k(r,b)}if(a0.f){a=A.pd(B.eC)
a.scF(0,B.w)
a0.r=a
a.sJ(0,108+a0.z)
a.sI(0,a0.y+48)
a.saK(0,1)
a4.k(0,a)
B.a.k(a3,a)}a0.x=!0},
sco(a){this.Q=A.E(a)},
gcJ(){return this.x}}
A.jC.prototype={
$1(a){var s=J.bD(this.a.$ti.c.a(a))
s=s.length===0?B.a1:new A.bQ(s)
return s.gm(s)},
$S(){return this.a.$ti.i("f(1)")}}
A.jD.prototype={
$2(a,b){A.E(a)
A.E(b)
return a>b?a:b},
$S:6}
A.jE.prototype={
$1(a){var s=J.bD(this.a.$ti.c.a(a))
s=s.length===0?B.a1:new A.bQ(s)
return s.gm(s)},
$S(){return this.a.$ti.i("f(1)")}}
A.jF.prototype={
$2(a,b){A.E(a)
A.E(b)
return a>b?a:b},
$S:6}
A.jA.prototype={
$1(a){var s=J.bD(this.a.$ti.c.a(a))
s=s.length===0?B.a1:new A.bQ(s)
return s.gm(s)},
$S(){return this.a.$ti.i("f(1)")}}
A.jB.prototype={
$2(a,b){A.E(a)
A.E(b)
return a>b?a:b},
$S:6}
A.eT.prototype={
fe(a,b){var s,r,q,p=this,o="_textRenderer"
if(!p.e||b==null)return
s=p.f
r=b.b
if(s!==r||p.r!==b.a){p.f=r
p.r=b.a
if(p.b!=null){s=A.c1(p.x,o)
r=p.b
r.toString
s.bD(r)}s=p.c
r=p.d
q=new A.ba("HP: "+p.f+"/"+p.r,B.w,1,s+48,r)
p.b=q
A.c1(p.x,o).aG(q)}},
by(a,b,c,d){var s,r,q,p,o,n=this,m=b-36+d
n.d=m
n.c=c
if(!n.e)return
for(s=n.a,r=0;r<100;++r){if(!(r<s.length))return A.b(s,r)
q=s[r]
p=q.a
o=p==null
if(!o)p.e=!0
q.d=c+r*24
if(!o)p.e=!0
q.e=m}n.b.sI(0,c+48)
n.b.sJ(0,n.d)},
cP(a,b){var s,r,q,p,o,n,m,l=this
l.x=b
for(s=l.a,r=a.c,q=r.$ti.c,p=0;p<100;++p){o=new A.P(11,13,-1,-1,null)
n=l.c
o.d=n+p*24
n=l.d
o.e=n
o.x=B.ap
o.r=B.w
o.y=-1
B.a.k(s,o)
o.a=a
q.a(o);++r.d
r.ai(0,o)
a.e=!0}s=l.c
r=l.d
m=new A.ba("HP: "+l.f+"/"+l.r,B.w,1,s+48,r)
l.b=m
b.aG(m)
l.e=!0},
gcJ(){return this.e}}
A.j3.prototype={
es(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.a,a4=a3.a1(a3.e),a5=a2.b,a6=a5.a8("a_color",t.C)
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
A.ki.prototype={}
A.hf.prototype={}
A.l2.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:16}
A.fW.prototype={
al(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.e){m=n.b
l=B.c.A(m.d/24)
if(l===q){m=B.c.A(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.km.prototype={}
A.iV.prototype={
c6(a){var s=this
return A.qa(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5
return function $async$c6(a6,a7){if(a6===1){o=a7
q=p}while(true)switch(q){case 0:a5=A.fh(B.M)
a5.e=9
n=A.fh(new A.eK(B.aA,50))
m=r.c.x
m.eF(a5,B.r)
B.a.k(m.a,n)
l=A.c([],t.fF)
k=new A.hf(r,l)
m=s.a,j=s.b,i=s.e,h=0
case 2:if(!(h<10)){q=4
break}g=A.qu(m.dd(j[h]))
B.a.k(l,g)
f=i[h]
for(e=f.length,d=g.a,c=0;c<f.length;f.length===e||(0,A.A)(f),++c){b=A.qC(f[c])
a0=A.qR(g,b)
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
case 4:return A.po()
case 1:return A.pp(o)}}},t.l7)},
dZ(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.d,r=t.ee,q=this.e,p=this.b,o=0;o<10;++o){n=q[o]
m=p[o]
l=$.o0()
k=A.T(l)
j=k.i("aI<1>")
i=A.mP(new A.aI(l,k.i("D(1)").a(new A.iW(m.a)),j),!0,j.i("j.E"))
for(h=0;h<s[o];){g=A.pU($.eF(),i,r)
B.a.k(n,g)
h+=g.d}}},
dX(){var s,r,q,p,o,n,m,l,k,j,i=this,h=new A.c9(1,1,1,0,0,0,0,new A.cM(A.c([],t.I),A.aa(t.b,t.R)),A.mv(),A.c([],t.Q),A.c([],t.d),new A.cN(""))
for(s=i.f,r=i.c,q=i.e,p=0;p<10;++p){o=q[p]
for(n=0,m=0;m<o.length;++m){l=i.dY(o[m])
k=l.a
for(j=l.x.b.h(0,B.r)!=null;k>0;){n+=(j?l.d4(h,$.eF(),!0):l.d_(h,$.eF(),!0)).c
k-=r[p]}}B.a.j(s,p,n)}},
dY(a){var s,r,q,p,o,n=this.r
if(n.h(0,a)!=null){n=n.h(0,a)
n.toString
return n}s=a.d
r=A.c([],t.I)
q=A.mO(B.ao,t.b,t.R)
p=new A.c9(s,s,1,0,0,0,0,new A.cM(r,q),a.c,A.c([],t.Q),A.c([],t.d),new A.cN(a.a))
for(s=J.al(a.r.$0());s.n();){o=s.gp(s)
switch(o.gbQ()){case B.ar:q.h(0,B.E)
q.j(0,B.E,o)
break
case B.as:q.h(0,B.r)
q.j(0,B.r,o)
break
case B.at:q.h(0,B.F)
q.j(0,B.F,o)
break
default:B.a.k(r,o)}}n.j(0,a,p)
return p}}
A.iW.prototype={
$1(a){return B.a.K(t.ee.a(a).x,this.a)},
$S:41}
A.eV.prototype={
bO(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.a4(a,a0,A.b7(a*a0,B.j,!1,t.ns),t.ba)
c.a=b
s=new A.iM(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.B()
if(typeof m!=="number")return A.cC(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.cC(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.cC(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.cC(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.cC(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.cC(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.cC(f)
e=n+m+k+i+h+g+l+f
if(J.Z(s.$2(q,o),1))if(e<4)a1.G(0,B.j,q,o)
else a1.G(0,B.b,q,o)
else if(e>5)a1.G(0,B.b,q,o)
else a1.G(0,B.j,q,o)}d=c.a
c.a=a1}}}
A.iM.prototype={
$2(a,b){return J.Z(this.a.a.a2(0,a,b),B.b)?0:1},
$S:6}
A.ja.prototype={
bG(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.cM.a(b0)
s=t.q
r=A.c([],s)
q=new A.jb(a9)
for(p=J.al(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.dc()
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
c=A.a9(i,d)
b=A.c([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.b)break
a2=A.oI(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.a9(a,a2[0]))!==B.j){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.a9(a,a2[1]))===B.j}else a1=!0
if(a1)break
a=A.a9(a,d)
B.a.k(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.j&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.a9(a,A.oJ(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.k(m,new A.e4(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.aa(t.v,t.fH)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.A)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.K(l,n))continue
if(a4.aJ(0,n)){a6=a4.h(0,n)
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
l.j(0,a7,B.N)
B.a.k(k,a7)
B.a.k(f.b,a7)}for(s=a4.gbI(a4),s=s.gv(s);s.n();)this.bG(s.gp(s).d,a9,b0,b1)}}
A.jb.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.B(0,new A.i(1,0)))===B.b?1:0
if(s.h(0,a.B(0,new A.i(-1,0)))===B.b)++r
if(s.h(0,a.B(0,new A.i(0,-1)))===B.b)++r
return s.h(0,a.B(0,new A.i(1,1)))===B.b?r+1:r},
$S:42}
A.iJ.prototype={
df(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.G(0,o.E()>0.45?B.j:B.b,n,m)
p.G(0,B.au,n,m)}new A.eV(a7).bO(3)
for(p=q-1,l=0;l<r;++l){s.G(0,B.b,l,0)
s.G(0,B.b,l,p)}for(o=r-1,k=0;k<q;++k){s.G(0,B.b,0,k)
s.G(0,B.b,o,k)}j=new A.iK(a7)
i=new A.iL(a7)
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
o=A.jq(p)
a0=new A.fa(a7,A.c([],t.do),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.i(l,k)
if(o.K(0,a1)||s.h(0,a1)===B.b)continue
a0.cN(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.A)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gv(a3);d.n();)s.j(0,d.gp(d),B.b)
else B.a.k(o,new A.a3(a3,A.c([],h),A.c([],h),A.j0(a3)))}a4=A.aa(p,t.v)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.c,a2=0;b=o.length,a2<b;o.length===r||(0,A.A)(o),++a2){a3=o[a2]
B.a.k(p,a3)
h.j(0,a3,A.c([],d))
for(b=J.al(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.A)(o),++a2){a3=o[a2]
r=a3.a
p=J.ax(r)
if(p.gm(r)>a6){a6=p.gm(r)
a5=a3}}this.bG(a5,a7,a4,q)
for(r=q.d1(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.A)(r),++a2){a3=r[a2]
B.a.H(o,a3)
for(p=J.al(a3.a);p.n();)s.j(0,p.gp(p),B.b)}A.nO(o,a7)}}
A.iK.prototype={
$2(a,b){return J.Z(this.a.b.a2(0,a,b),B.j)},
$S:12}
A.iL.prototype={
$2(a,b){return J.Z(this.a.b.a2(0,a,b),B.b)},
$S:12}
A.aL.prototype={}
A.he.prototype={}
A.aK.prototype={
O(a,b){this.$ti.c.a(a)
return this.a.O(a,b)+this.b.O(a,b)}}
A.cX.prototype={
O(a,b){this.$ti.c.a(a)
return Math.min(B.a6.O(a,b),this.b.O(a,b))}}
A.fC.prototype={
O(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=b.b,r=a.a,q=a.b,p=b.e,o=p.a,p=p.b,n=-1;n<2;++n)for(m=r+n,l=m<o,k=-1;k<2;++k){j=q+k
if(!(m>=0&&j>=0&&l&&j<p))continue
if(s.h(0,new A.i(m,j))===B.b)return 1/0}return 0}}
A.eW.prototype={
O(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.t)return 1/0
s=A.lA(a,B.n,b)
r=A.lA(a,B.p,b)
q=A.lA(a,B.o,b)
p=A.lA(a,B.q,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.eI.prototype={
O(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.t)return 1/0
if(A.cD(a,B.n,b)+A.cD(a,B.p,b)+A.cD(a,B.o,b)+A.cD(a,B.q,b)===1)return 1
return 1/0}}
A.f1.prototype={
O(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.t)return 1/0
if(A.cD(a,B.n,b)+A.cD(a,B.p,b)+A.cD(a,B.o,b)+A.cD(a,B.q,b)===2)return 1
return 1/0}}
A.dm.prototype={
O(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.t)return 1/0
s=A.a9(a,B.n)
r=A.a9(a,B.p)
q=A.a9(a,B.o)
p=A.a9(a,B.q)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.cW.prototype={
O(a,b){var s,r,q,p,o,n,m,l,k,j,i
for(s=b.e,r=a.a,q=a.b,p=this.a,o=s.a,n=s.b,m=-2;m<4;++m)for(l=r+m,k=l<o,j=-2;j<4;++j){i=q+j
if(!(l>=0&&i>=0&&k&&i<n))continue
if(s.h(0,new A.i(l,i))===p)return 1/0}return 0}}
A.cu.prototype={
d2(a,b){return this.c.$2(a,b)},
gbz(){return this.a},
gbi(a){return this.b},
gbv(){return this.c}}
A.ls.prototype={
$2(a,b){b.e.j(0,a,B.be)},
$S:1}
A.ll.prototype={
$2(a,b){b.e.j(0,a,B.fN)},
$S:1}
A.lp.prototype={
$2(a,b){b.e.j(0,a,B.a3)},
$S:1}
A.lk.prototype={
$2(a,b){b.e.j(0,a,B.a3)},
$S:1}
A.lm.prototype={
$2(a,b){b.e.j(0,a,B.aw)},
$S:1}
A.lq.prototype={
$2(a,b){b.e.j(0,a,B.fO)
b.f.j(0,a,B.e6)},
$S:1}
A.lr.prototype={
$2(a,b){b.e.j(0,a,B.fM)},
$S:1}
A.lo.prototype={
$2(a,b){b.e.j(0,a,B.av)},
$S:1}
A.ln.prototype={
$2(a,b){b.e.j(0,a,B.av)},
$S:1}
A.lj.prototype={
$2(a,b){b.e.j(0,a,B.ax)},
$S:1}
A.aZ.prototype={}
A.i9.prototype={
gbi(a){var s=this.a
return s.gbi(s)},
gbv(){return this.a.gbv()},
gbz(){return this.a.gbz()},
l(a){return"Unique("+this.a.l(0)+")"},
$icu:1,
d2(a,b){return this.gbv().$2(a,b)}}
A.lz.prototype={
$2(a,b){var s=t.n4
return B.c.N(s.a(a).b,s.a(b).b)},
$S:45}
A.ly.prototype={
$2(a,b){var s=t.v
s.a(a)
s.a(b)
return J.am(a.a)-J.am(b.a)},
$S:64}
A.dE.prototype={}
A.iC.prototype={
dd(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=4000,a=new A.a4(100,40,A.b7(b,B.j,!1,t.ns),t.ba),a0=A.b7(b,0,!1,t.i),a1=A.b7(b,B.au,!1,t.dt),a2=new A.a4(100,40,A.b7(b,B.t,!1,t.dy),t.eN),a3=t.c,a4=new A.dE(a5,a,new A.a4(100,40,a0,t.de),new A.a4(100,40,a1,t.f5),a2,new A.a4(100,40,A.b7(b,B.aZ,!1,t.gM),t.eT),new A.a4(100,40,A.b7(b,null,!1,t.R),t.oQ),new A.j_(A.c([],a3),A.aa(t.v,t.mw)),A.c([],a3))
if(a5.b)this.eD(a4)
a0=a5.a
switch(a0.a){case 1:case 2:new A.iJ(B.m).df(a4)
break
case 3:case 4:new A.k0(A.jq(t.j),B.m).di(a4)
break
case 6:case 0:case 5:new A.k8(B.m).dg(a4)
break}s=new Float32Array(4000)
new A.jQ().dh(s,100,40)
r=new A.a4(100,40,A.lY(b,new A.iE(),t.W),t.r)
for(q=0;q<100;++q)for(a1=q!==0,a3=q!==99,p=0;p<40;++p)if(!a1||!a3||p===0||p===39){a.G(0,B.b,q,p)
a2.G(0,B.t,q,p)}a1=a4.y
this.b.de(a1,a4,a5.c)
for(a3=a4.c,o=this.a,n=a4.d,m=a4.r,a0=a0!==B.bO,l=a4.f,q=0;q<100;++q)for(p=0;p<40;++p){k=J.Z(a.a2(0,q,p),B.j)
j=a.a2(0,q,p)
j.toString
i=new A.i(q,p)
o.E()
h=r.h(0,i)
g=n.h(0,i)
f=a2.h(0,i)
h.b=i
h.c=j
h.sf4(n.h(0,i))
j=p*100+q
if(!(j<4000))return A.b(s,j)
e=s[j]
d=m.a2(0,q,p)
if(J.Z(a3.h(0,i),1)){h.r=B.dT
h.c=B.j}else if(f!==B.t)switch(f.a){case 0:if(l.h(0,i)===B.aY)h.f=B.J
else h.f=B.v
break
case 2:h.f=B.L
break
case 3:break
case 4:h.f=B.Z
break
case 5:h.f=B.Y
break
case 1:h.f=B.K
break
case 6:h.f=B.V
if(d!=null)B.a.k(h.e,d)
break
case 7:h.f=B.T
break
case 8:h.f=B.G
break
case 9:h.f=B.S
break
case 10:h.f=B.W
break
case 11:h.f=B.X
break}else if(k&&e<0.42&&g!==B.a2&&a0)h.f=B.K
if(d!=null)B.a.k(h.e,d)}a=J.al(B.a.eI(a1,new A.iF(),new A.iG(a4)).a)
while(!0){if(!a.n()){c=!1
break}a0=a.gp(a)
if(A.pM(a2.h(0,a0))){r.h(0,a0).f=B.H
c=!0
break}}if(!c)throw A.d(A.af(""))
return new A.ju(r,a5)},
eD(a){var s,r,q=this.a,p=a.b,o=p.b,n=q.D(o-1)+1,m=n>o/2?-1:1,l=new A.iD(a)
for(p=p.a,s=n,r=0;r<p;++r){l.$1(new A.i(r,s))
l.$1(new A.i(r,s+1))
l.$1(new A.i(r,s-1))
s+=q.eR()?m:0}}}
A.iE.prototype={
$1(a){var s=A.c([],t.I)
return new A.bU(B.D,B.j,s)},
$S:16}
A.iF.prototype={
$1(a){return t.v.a(a).e},
$S:47}
A.iG.prototype={
$0(){return B.a.geH(this.a.y)},
$S:48}
A.iD.prototype={
$1(a){var s=this.a,r=s.b
if(r.cO(a)){r.j(0,a,B.j)
s.c.j(0,a,1)}},
$S:49}
A.e4.prototype={
gm(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.j_.prototype={
d1(){var s,r,q,p,o,n=A.c([],t.c)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.k(n,o)}return n}}
A.a3.prototype={
l(a){return"Room{"+J.am(this.a)+"; "+this.d.l(0)+"}"}}
A.fa.prototype={
cN(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.c([a],k),i=A.c([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.K(0,o))continue
q.k(0,o)
B.a.k(i,o)
for(n=0;n<8;++n){m=A.a9(o,B.am[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.K(0,m)&&k.h(0,m)===B.j)B.a.k(j,m)}}B.a.k(this.b,i)}}
A.fi.prototype={
cz(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.a_)s=B.aP
else if(a instanceof A.a2)s=B.aN
else s=a instanceof A.au?B.aO:B.aQ
B.a.k(r.a,a)
B.a.k(r.b,s)
B.a.k(r.c,b)
r.d+=b},
cw(a){return this.cz(a,10)},
eW(a){var s,r,q,p={},o=p.a=0,n=A.lY(this.c.length,new A.jj(p,this),t.i),m=a.E()
for(s=n.length,r=m>-1;o<s;++o){q=n[o]
if(r&&m<=q){s=this.a
if(!(o<s.length))return A.b(s,o)
return A.fh(s[o])}}throw A.d(A.af(""))},
dr(a){var s,r,q=B.a.eO(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
dq(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p===0)return
B.a.j(r,q,p-2)
this.d-=2}}}
A.jj.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.b(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:51}
A.jL.prototype={}
A.je.prototype={
de(a,b,c){var s,r,q
t.mw.a(a)
s=new A.fi(A.c([],t.hf),A.c([],t.lB),A.c([],t.t))
r=s.gew()
new A.aI(B.e1,t.ei.a(new A.jf()),t.kL).w(0,r)
new A.aI(B.e2,t.eU.a(new A.jg()),t.eo).w(0,r)
new A.aI(B.e3,t.hZ.a(new A.jh()),t.au).w(0,r)
new A.aI(B.dU,t.g9.a(new A.ji()),t.b1).w(0,r)
s.cw(B.aH)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.A)(a),++q)this.dS(s,a[q],b)},
dS(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.ax(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.D
break}r=j.length
if(r!==0){r=l.D(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.D(k.gm(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.aw||q===B.t
else r=!1
if(r)break;++i}if(s.F(0,B.D))return
p=a.eW(l)
n=p.b
if(!J.Z(n,B.aH)){a.dr(n)
a.dq(p.c)
o.j(0,s,p)}}}
A.jf.prototype={
$1(a){return t.bB.a(a).b<=1000},
$S:52}
A.jg.prototype={
$1(a){return t.li.a(a).f<=1000},
$S:53}
A.jh.prototype={
$1(a){return t.kB.a(a).r<=1000},
$S:54}
A.ji.prototype={
$1(a){return t.lE.a(a).c<=1000},
$S:55}
A.jQ.prototype={
a9(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
dh(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
for(s=0;s<b0;++s)for(r=s*0.1,q=0;q<b1;++q){p=q*b0+s
o=q*0.1
n=B.c.aa(r)&255
m=B.c.aa(o)&255
l=B.c.aa(0.3)&255
k=r-Math.floor(r)
j=o-Math.floor(o)
i=0.3-Math.floor(0.3)
h=k*k*k*(k*(k*6-15)+10)
g=j*j*j*(j*(j*6-15)+10)
o=$.ob()
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
c=a8.a9(0,o[d],k,j,i)
if(!(a0<f))return A.b(o,a0)
a2=k-1
c+=h*(a8.a9(0,o[a0],a2,j,i)-c)
if(!(b<f))return A.b(o,b)
a3=j-1
a4=a8.a9(0,o[b],k,a3,i)
if(!(a1<f))return A.b(o,a1)
c+=g*(a4+h*(a8.a9(0,o[a1],a2,a3,i)-a4)-c)
a4=d+1
if(!(a4<f))return A.b(o,a4)
a5=i-1
a4=a8.a9(0,o[a4],k,j,a5)
a6=a0+1
if(!(a6<f))return A.b(o,a6)
a4+=h*(a8.a9(0,o[a6],a2,j,a5)-a4)
a6=b+1
if(!(a6<f))return A.b(o,a6)
a6=a8.a9(0,o[a6],k,a3,a5)
a7=a1+1
if(!(a7<f))return A.b(o,a7)
a5=a8.a9(0,o[a7],a2,a3,a5)
if(!(p<4000))return A.b(a9,p)
a9[p]=(c+i*i*i*(i*(i*6-15)+10)*(a4+g*(a6+h*(a5-a6)-a4)-c)+1)/2}}}
A.bO.prototype={
l(a){return"RuinOrientation."+this.b}}
A.dY.prototype={
l(a){return"RoomSizeKind."+this.b}}
A.k0.prototype={
di(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.D(5)
if(!(a3>=0&&a3<5))return A.b(B.aT,a3)
s=B.aT[a3]
r=a1.bP(B.ev)
q=a1.e2(s)
p=A.oK(a1.cI(a4,r,new A.i(B.c.A(Math.max(1,q.a-r.a/2)),B.c.A(Math.max(1,q.b-A.cr(r)/2)))))
a3=a4.y
B.a.k(a3,p)
for(o=t.q,n=0;n<2000;){m=new A.i(a2.D(98)+1,a2.D(38)+1)
l=[B.aq,B.aq,B.aq,B.eu]
k=a2.D(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a1.bP(l[k])
if(!a1.f0(a4,r,m)){l=a1.cI(a4,r,m)
B.a.k(a3,new A.a3(l,A.c([],o),A.c([],o),A.j0(l)))}else ++n}for(a2=a1.b,o=a4.d,l=a4.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.i(j,i)
o.G(0,B.a2,j,i)
if(!a2.K(0,h))l.j(0,h,B.b)}g=A.aa(t.j,t.v)
for(a2=a3.length,k=a4.x,f=k.a,e=k.b,d=t.c,c=0;c<a3.length;a3.length===a2||(0,A.A)(a3),++c){b=a3[c]
B.a.k(f,b)
e.j(0,b,A.c([],d))
for(a=J.al(b.a);a.n();)g.j(0,a.gp(a),b)}a1.bG(p,a4,g,k)
for(a2=k.d1(),k=a2.length,c=0;c<a2.length;a2.length===k||(0,A.A)(a2),++c){b=a2[c]
B.a.H(a3,b)
for(f=J.al(b.a);f.n();)l.j(0,f.gp(f),B.b)}A.nO(a3,a4)
for(a2=o.c,a0=0;a0<4000;++a0)B.a.j(a2,a0,B.a2)},
bP(a){var s
switch(a.a){case 0:s=this.a
return new A.dX(s.D(5)+5,s.D(5)+5)
case 1:s=this.a
return new A.dX(s.D(10)+9,s.D(10)+9)
case 2:s=this.a
return new A.dX(s.D(10)+20,s.D(10)+20)}},
e2(a){switch(a.a){case 0:return new A.i(50,10)
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
f0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.i(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.b||n.K(0,i))return!0}return!1}}
A.dX.prototype={}
A.k8.prototype={
e0(a){var s,r,q=a.a.a===B.a4?B.au:B.fL
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
dg(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.e0(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.E()>0.6)r.j(0,new A.i(q,p),B.b)
new A.eV(b8).bO(10)
o=A.jq(t.j)
n=new A.fa(b8,A.c([],t.do),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.i(k,j)
if(o.K(0,i)||r.h(0,i)===B.b)continue
n.cN(i)}o=n.b
B.a.aS(o,new A.k9())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.A)(h),++f)r.j(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.j(e,q,B.fP)
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
d.j(0,i,B.a2)}b1=new A.ka(b8)
B.a.bN(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.D
break}b3=a9[f]
b4=A.a9(b3,B.n)
b5=A.a9(b3,B.p)
b6=A.a9(b3,B.q)
b7=A.a9(b3,B.o)
if(A.O(b1.$1(b4))&&A.O(b1.$1(b5))){b2=b3
break}if(A.O(b1.$1(b6))&&A.O(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.A)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.j)
g.j(0,b2,B.N)
B.a.k(o,new A.a3(b0,A.c([],e),A.c([],e),A.j0(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.A)(o),++f)A.dk(o[f],$.lL(),b8)}}
A.k9.prototype={
$2(a,b){var s=t.i8
s.a(a)
return J.am(s.a(b))-J.am(a)},
$S:56}
A.ka.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.j&&s.e.h(0,a)===B.t},
$S:57}
A.kj.prototype={
dE(a){var s=t.jV.a(new A.kk(this))
t.Z.a(null)
A.hu(a,"keydown",s,!1,t.mT)
A.hu(a,"mousemove",t.b9.a(new A.kl(this)),!1,t.gD)}}
A.kk.prototype={
$1(a){var s
t.mT.a(a)
s=$.pT.h(0,a.key)
if(s!=null){a.preventDefault()
this.a.a.k(0,s)}},
$S:58}
A.kl.prototype={
$1(a){var s,r
t.gD.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
this.a.b.k(0,A.c([s,r],t.n))},
$S:59}
A.a0.prototype={
l(a){return"InputCommand."+this.b}};(function aliases(){var s=J.a.prototype
s.du=s.l
s=J.ci.prototype
s.dv=s.l
s=A.aA.prototype
s.dw=s.cS
s.dz=s.cT
s.dB=s.cV
s.dA=s.cU})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_1u
s(J.t.prototype,"geu","k",18)
r(A,"q9","oP",13)
r(A,"qp","pk",7)
r(A,"qq","pl",7)
r(A,"qr","pm",7)
q(A,"nA","qj",0)
p(A,"qt","qd",10)
q(A,"qs","qc",0)
o(A.dc.prototype,"geB",1,0,null,["$1","$0"],["a4","aH"],30,0,0)
n(A.K.prototype,"gdO","M",10)
p(A,"qx","pR",62)
r(A,"qy","pS",13)
var l
m(l=A.fd.prototype,"geK","bp",29)
m(l,"gcj","e6",15)
p(A,"qW","qi",63)
s(A.fV.prototype,"gd5","H",36)
m(A.h1.prototype,"geZ","bD",38)
o(A.fi.prototype,"gew",0,1,null,["$2","$1"],["cz","cw"],50,0,0)
p(A,"r1","qA",46)
r(A,"nK","qV",43)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.lV,J.a,J.dq,A.L,A.k2,A.j,A.bn,A.R,A.ap,A.cK,A.ca,A.ke,A.jN,A.dC,A.em,A.z,A.jo,A.dM,A.ku,A.aX,A.hy,A.et,A.es,A.hh,A.db,A.c_,A.ds,A.e7,A.cy,A.K,A.hi,A.cs,A.br,A.en,A.hj,A.e6,A.ho,A.bZ,A.hX,A.ex,A.ey,A.hF,A.ed,A.l,A.dZ,A.cc,A.ae,A.kv,A.fG,A.e0,A.hv,A.cS,A.W,A.i_,A.fZ,A.iP,A.lQ,A.r,A.dD,A.kn,A.jM,A.hC,A.e1,A.iH,A.ff,A.cz,A.h,A.a4,A.at,A.cE,A.is,A.ir,A.ac,A.ao,A.b5,A.bN,A.iI,A.fd,A.eK,A.aN,A.iN,A.a_,A.jy,A.bH,A.a2,A.dp,A.au,A.an,A.eG,A.c9,A.cH,A.cN,A.cM,A.f0,A.as,A.bU,A.fn,A.fo,A.i,A.ju,A.jz,A.jZ,A.j1,A.f6,A.a6,A.bF,A.J,A.j4,A.i3,A.kh,A.jV,A.d0,A.bM,A.bo,A.jP,A.f4,A.X,A.x,A.hk,A.i8,A.jc,A.jY,A.fB,A.fS,A.P,A.m,A.jw,A.ba,A.kR,A.d3,A.hf,A.fW,A.km,A.iV,A.eV,A.ja,A.aL,A.cu,A.aZ,A.i9,A.dE,A.iC,A.e4,A.j_,A.a3,A.fa,A.fi,A.jL,A.je,A.jQ,A.dX,A.k8,A.kj])
q(J.a,[J.dI,J.dK,J.ci,J.t,J.cQ,J.ch,A.fu,A.cq,A.e,A.it,A.eR,A.bi,A.I,A.hn,A.aV,A.iS,A.bK,A.hp,A.dA,A.hr,A.iT,A.k,A.hw,A.az,A.jd,A.hA,A.js,A.jx,A.hG,A.hH,A.aB,A.hI,A.hK,A.aD,A.hO,A.hR,A.aE,A.hS,A.aF,A.hV,A.ag,A.i1,A.kc,A.aG,A.i4,A.kd,A.kg,A.ic,A.ie,A.ih,A.ij,A.il,A.aO,A.hD,A.aQ,A.hM,A.jR,A.hY,A.aR,A.i6,A.b2,A.eN,A.hl,A.eU,A.fc,A.fK,A.d_,A.bs,A.h7,A.hc])
q(J.ci,[J.fI,J.d5,J.bl])
r(J.jk,J.t)
q(J.cQ,[J.dJ,J.fj])
q(A.L,[A.cR,A.bV,A.fk,A.h9,A.fP,A.dr,A.ht,A.fD,A.bg,A.hb,A.h8,A.bq,A.f_,A.f2])
q(A.j,[A.p,A.ck,A.aI,A.dH,A.bQ,A.kV])
q(A.p,[A.ar,A.dL])
q(A.ar,[A.e2,A.b8])
r(A.dB,A.ck)
q(A.R,[A.dO,A.e5])
q(A.cK,[A.dx,A.a7])
q(A.ca,[A.j9,A.eX,A.eY,A.h0,A.jm,A.lc,A.le,A.kr,A.kq,A.kX,A.j6,A.kB,A.kJ,A.k6,A.kP,A.kL,A.jv,A.kw,A.lt,A.lu,A.iz,A.iA,A.lb,A.j8,A.iZ,A.j2,A.jI,A.ix,A.iw,A.jT,A.k3,A.lg,A.k4,A.jC,A.jE,A.jA,A.l2,A.iW,A.jb,A.iE,A.iF,A.iD,A.jj,A.jf,A.jg,A.jh,A.ji,A.ka,A.kk,A.kl])
r(A.dT,A.bV)
q(A.h0,[A.fX,A.cI])
r(A.hg,A.dr)
r(A.dN,A.z)
r(A.aA,A.dN)
q(A.eY,[A.jl,A.ld,A.kY,A.l1,A.j7,A.kC,A.jp,A.jt,A.jG,A.jH,A.k_,A.k5,A.kp,A.iB,A.jD,A.jF,A.jB,A.iM,A.iK,A.iL,A.ls,A.ll,A.lp,A.lk,A.lm,A.lq,A.lr,A.lo,A.ln,A.lj,A.lz,A.ly,A.k9])
r(A.cU,A.cq)
q(A.cU,[A.ef,A.eh])
r(A.eg,A.ef)
r(A.cp,A.eg)
r(A.ei,A.eh)
r(A.dQ,A.ei)
r(A.dP,A.cp)
q(A.dQ,[A.fv,A.fw,A.fx,A.fy,A.fz,A.cV,A.dR])
r(A.eu,A.ht)
q(A.eX,[A.ks,A.kt,A.kT,A.kS,A.kx,A.kF,A.kD,A.kz,A.kE,A.ky,A.kI,A.kH,A.kG,A.k7,A.kQ,A.kN,A.l0,A.kO,A.lD,A.lB,A.lC,A.lx,A.lv,A.lw,A.lG,A.lE,A.lF,A.lJ,A.lH,A.lI,A.l5,A.l3,A.l4,A.jJ,A.iy,A.jU,A.iG])
r(A.ep,A.dH)
q(A.e7,[A.aT,A.dc])
r(A.d8,A.en)
q(A.cs,[A.eo,A.e9])
r(A.bX,A.eo)
r(A.d9,A.e6)
r(A.cv,A.ho)
r(A.bc,A.bZ)
r(A.hQ,A.ex)
q(A.aA,[A.kM,A.eb])
r(A.ej,A.ey)
r(A.ec,A.ej)
q(A.bg,[A.cZ,A.fg])
q(A.e,[A.w,A.f9,A.cg,A.av,A.ek,A.aw,A.ab,A.eq,A.hd,A.d7,A.H,A.dv,A.eP])
q(A.w,[A.a5,A.b4,A.bj])
q(A.a5,[A.q,A.n])
q(A.q,[A.eL,A.eM,A.eS,A.c7,A.fb,A.cP,A.cn,A.fQ])
r(A.iO,A.bi)
r(A.cL,A.hn)
q(A.aV,[A.iQ,A.iR])
r(A.hq,A.hp)
r(A.dz,A.hq)
r(A.hs,A.hr)
r(A.f5,A.hs)
r(A.ay,A.eR)
r(A.hx,A.hw)
r(A.f8,A.hx)
r(A.hB,A.hA)
r(A.cf,A.hB)
r(A.dG,A.cg)
r(A.bb,A.k)
q(A.bb,[A.bm,A.aC])
r(A.fq,A.hG)
r(A.fr,A.hH)
r(A.hJ,A.hI)
r(A.fs,A.hJ)
r(A.hL,A.hK)
r(A.dS,A.hL)
r(A.hP,A.hO)
r(A.fJ,A.hP)
r(A.fO,A.hR)
r(A.el,A.ek)
r(A.fT,A.el)
r(A.hT,A.hS)
r(A.fU,A.hT)
r(A.fY,A.hV)
r(A.i2,A.i1)
r(A.h2,A.i2)
r(A.er,A.eq)
r(A.h3,A.er)
r(A.i5,A.i4)
r(A.h5,A.i5)
r(A.d6,A.cn)
r(A.id,A.ic)
r(A.hm,A.id)
r(A.e8,A.dA)
r(A.ig,A.ie)
r(A.hz,A.ig)
r(A.ii,A.ih)
r(A.ee,A.ii)
r(A.ik,A.ij)
r(A.hU,A.ik)
r(A.im,A.il)
r(A.i0,A.im)
r(A.cw,A.e9)
r(A.ea,A.br)
r(A.ko,A.kn)
r(A.hE,A.hD)
r(A.fl,A.hE)
r(A.hN,A.hM)
r(A.fE,A.hN)
r(A.hZ,A.hY)
r(A.h_,A.hZ)
r(A.i7,A.i6)
r(A.h6,A.i7)
q(A.H,[A.bh,A.cO])
r(A.du,A.bh)
q(A.dv,[A.c6,A.fF])
r(A.eO,A.hl)
q(A.ao,[A.bS,A.bT,A.cJ,A.bP,A.fM,A.dW,A.fN,A.bE])
r(A.Y,A.h)
q(A.Y,[A.cm,A.cl])
q(A.kv,[A.e_,A.bk,A.fe,A.bI,A.bJ,A.aS,A.cb,A.dn,A.cG,A.fH,A.cd,A.d2,A.eZ,A.ct,A.ah,A.cj,A.b3,A.jr,A.a1,A.cT,A.c8,A.aW,A.d4,A.eJ,A.bO,A.dY,A.a0])
q(A.jZ,[A.iU,A.iY,A.j5,A.fp,A.k1,A.fV,A.kb,A.h1,A.j3,A.ki])
q(A.a6,[A.fA,A.dV,A.aP,A.d1,A.fm,A.e3,A.dt,A.dy,A.eQ,A.ha,A.dU,A.fL])
q(A.d3,[A.co,A.eT])
q(A.ja,[A.iJ,A.k0])
q(A.aL,[A.he,A.aK,A.cX])
q(A.he,[A.fC,A.eW,A.eI,A.f1,A.dm,A.cW])
s(A.ef,A.l)
s(A.eg,A.ap)
s(A.eh,A.l)
s(A.ei,A.ap)
s(A.d8,A.hj)
s(A.ey,A.dZ)
s(A.hn,A.iP)
s(A.hp,A.l)
s(A.hq,A.r)
s(A.hr,A.l)
s(A.hs,A.r)
s(A.hw,A.l)
s(A.hx,A.r)
s(A.hA,A.l)
s(A.hB,A.r)
s(A.hG,A.z)
s(A.hH,A.z)
s(A.hI,A.l)
s(A.hJ,A.r)
s(A.hK,A.l)
s(A.hL,A.r)
s(A.hO,A.l)
s(A.hP,A.r)
s(A.hR,A.z)
s(A.ek,A.l)
s(A.el,A.r)
s(A.hS,A.l)
s(A.hT,A.r)
s(A.hV,A.z)
s(A.i1,A.l)
s(A.i2,A.r)
s(A.eq,A.l)
s(A.er,A.r)
s(A.i4,A.l)
s(A.i5,A.r)
s(A.ic,A.l)
s(A.id,A.r)
s(A.ie,A.l)
s(A.ig,A.r)
s(A.ih,A.l)
s(A.ii,A.r)
s(A.ij,A.l)
s(A.ik,A.r)
s(A.il,A.l)
s(A.im,A.r)
s(A.hD,A.l)
s(A.hE,A.r)
s(A.hM,A.l)
s(A.hN,A.r)
s(A.hY,A.l)
s(A.hZ,A.r)
s(A.i6,A.l)
s(A.i7,A.r)
s(A.hl,A.z)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{f:"int",M:"double",N:"num",u:"String",D:"bool",W:"Null",o:"List"},mangledNames:{},types:["~()","~(i,dE)","P()","b5()","o<aN>()","~(u,@)","f(f,f)","~(~())","W()","~(@)","~(v,aY)","~(bF)","D(f,f)","f(v?)","W(@)","~(ae)","bU(f)","~(k)","~(v?)","W(v,aY)","~(u,u)","K<@>(@)","@(@,@)","~(b2)","~(bK)","D(aN)","W(~())","D(v?)","@(@)","aq<~>(a0)","~([v?])","D(lP)","~(f,@)","@(@,u)","~(h4)","aq<~>(k)","~(P)","W(bs)","~(ba)","W(@,aY)","D(@)","D(bN)","f(i)","~(N)","~(@,@)","f(aZ,aZ)","f(v?,v?)","D(a3)","a3()","~(i)","~(v[f])","M(f)","D(a_)","D(a2)","D(au)","D(an)","f(o<i>,o<i>)","D(i)","~(bm)","~(aC)","~(v?,v?)","@(u)","D(v?,v?)","f(P,P)","f(a3,a3)","~(o<M>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.pE(v.typeUniverse,JSON.parse('{"fI":"ci","d5":"ci","bl":"ci","r3":"k","rm":"k","r5":"H","ra":"bh","r2":"n","rn":"n","r4":"e","ry":"e","rB":"e","r7":"q","rC":"w","rl":"w","ro":"bj","rA":"aC","rP":"ab","r9":"bb","r8":"b4","rE":"b4","rq":"cg","rp":"cf","rb":"I","rd":"ag","r6":"cn","rx":"cp","rw":"cq","dI":{"D":[]},"dK":{"W":[]},"t":{"o":["1"],"p":["1"],"j":["1"]},"jk":{"t":["1"],"o":["1"],"p":["1"],"j":["1"]},"dq":{"R":["1"]},"cQ":{"M":[],"N":[],"ad":["N"]},"dJ":{"M":[],"f":[],"N":[],"ad":["N"]},"fj":{"M":[],"N":[],"ad":["N"]},"ch":{"u":[],"ad":["u"],"mU":[]},"cR":{"L":[]},"p":{"j":["1"]},"ar":{"p":["1"],"j":["1"]},"e2":{"ar":["1"],"p":["1"],"j":["1"],"ar.E":"1","j.E":"1"},"bn":{"R":["1"]},"ck":{"j":["2"],"j.E":"2"},"dB":{"ck":["1","2"],"p":["2"],"j":["2"],"j.E":"2"},"dO":{"R":["2"]},"b8":{"ar":["2"],"p":["2"],"j":["2"],"ar.E":"2","j.E":"2"},"aI":{"j":["1"],"j.E":"1"},"e5":{"R":["1"]},"cK":{"V":["1","2"]},"dx":{"cK":["1","2"],"V":["1","2"]},"a7":{"cK":["1","2"],"V":["1","2"]},"dT":{"bV":[],"L":[]},"fk":{"L":[]},"h9":{"L":[]},"em":{"aY":[]},"ca":{"ce":[]},"eX":{"ce":[]},"eY":{"ce":[]},"h0":{"ce":[]},"fX":{"ce":[]},"cI":{"ce":[]},"fP":{"L":[]},"hg":{"L":[]},"aA":{"z":["1","2"],"jn":["1","2"],"V":["1","2"],"z.K":"1","z.V":"2"},"dL":{"p":["1"],"j":["1"],"j.E":"1"},"dM":{"R":["1"]},"fu":{"mE":[]},"cq":{"aH":[]},"cU":{"y":["1"],"aH":[]},"cp":{"l":["M"],"y":["M"],"o":["M"],"p":["M"],"aH":[],"j":["M"],"ap":["M"],"l.E":"M"},"dQ":{"l":["f"],"y":["f"],"o":["f"],"p":["f"],"aH":[],"j":["f"],"ap":["f"]},"dP":{"l":["M"],"lS":[],"y":["M"],"o":["M"],"p":["M"],"aH":[],"j":["M"],"ap":["M"],"l.E":"M"},"fv":{"l":["f"],"y":["f"],"o":["f"],"p":["f"],"aH":[],"j":["f"],"ap":["f"],"l.E":"f"},"fw":{"l":["f"],"y":["f"],"o":["f"],"p":["f"],"aH":[],"j":["f"],"ap":["f"],"l.E":"f"},"fx":{"l":["f"],"y":["f"],"o":["f"],"p":["f"],"aH":[],"j":["f"],"ap":["f"],"l.E":"f"},"fy":{"l":["f"],"y":["f"],"o":["f"],"p":["f"],"aH":[],"j":["f"],"ap":["f"],"l.E":"f"},"fz":{"l":["f"],"y":["f"],"o":["f"],"p":["f"],"aH":[],"j":["f"],"ap":["f"],"l.E":"f"},"cV":{"l":["f"],"pg":[],"y":["f"],"o":["f"],"p":["f"],"aH":[],"j":["f"],"ap":["f"],"l.E":"f"},"dR":{"l":["f"],"ph":[],"y":["f"],"o":["f"],"p":["f"],"aH":[],"j":["f"],"ap":["f"],"l.E":"f"},"et":{"n8":[]},"ht":{"L":[]},"eu":{"bV":[],"L":[]},"K":{"aq":["1"]},"es":{"h4":[]},"c_":{"R":["1"]},"ep":{"j":["1"],"j.E":"1"},"ds":{"L":[]},"aT":{"e7":["1"]},"dc":{"e7":["1"]},"en":{"n3":["1"],"ng":["1"],"cx":["1"]},"d8":{"hj":["1"],"en":["1"],"n3":["1"],"ng":["1"],"cx":["1"]},"bX":{"eo":["1"],"cs":["1"]},"d9":{"e6":["1"],"br":["1"],"cx":["1"]},"e6":{"br":["1"],"cx":["1"]},"eo":{"cs":["1"]},"cv":{"ho":["1"]},"bc":{"bZ":["1"]},"ex":{"na":[]},"hQ":{"ex":[],"na":[]},"kM":{"aA":["1","2"],"z":["1","2"],"jn":["1","2"],"V":["1","2"],"z.K":"1","z.V":"2"},"eb":{"aA":["1","2"],"z":["1","2"],"jn":["1","2"],"V":["1","2"],"z.K":"1","z.V":"2"},"ec":{"dZ":["1"],"n_":["1"],"p":["1"],"j":["1"]},"ed":{"R":["1"]},"dH":{"j":["1"]},"dN":{"z":["1","2"],"V":["1","2"]},"z":{"V":["1","2"]},"ej":{"dZ":["1"],"n_":["1"],"p":["1"],"j":["1"]},"cc":{"ad":["cc"]},"M":{"N":[],"ad":["N"]},"ae":{"ad":["ae"]},"f":{"N":[],"ad":["N"]},"o":{"p":["1"],"j":["1"]},"N":{"ad":["N"]},"u":{"ad":["u"],"mU":[]},"dr":{"L":[]},"bV":{"L":[]},"fD":{"L":[]},"bg":{"L":[]},"cZ":{"L":[]},"fg":{"L":[]},"hb":{"L":[]},"h8":{"L":[]},"bq":{"L":[]},"f_":{"L":[]},"fG":{"L":[]},"e0":{"L":[]},"f2":{"L":[]},"i_":{"aY":[]},"bm":{"k":[]},"aC":{"k":[]},"w":{"e":[]},"av":{"e":[]},"aw":{"e":[]},"ab":{"e":[]},"q":{"a5":[],"w":[],"e":[]},"eL":{"a5":[],"w":[],"e":[]},"eM":{"a5":[],"w":[],"e":[]},"eS":{"a5":[],"w":[],"e":[]},"c7":{"a5":[],"w":[],"e":[]},"b4":{"w":[],"e":[]},"bj":{"w":[],"e":[]},"dz":{"l":["b9<N>"],"r":["b9<N>"],"o":["b9<N>"],"y":["b9<N>"],"p":["b9<N>"],"j":["b9<N>"],"r.E":"b9<N>","l.E":"b9<N>"},"dA":{"b9":["N"]},"f5":{"l":["u"],"r":["u"],"o":["u"],"y":["u"],"p":["u"],"j":["u"],"r.E":"u","l.E":"u"},"a5":{"w":[],"e":[]},"f8":{"l":["ay"],"r":["ay"],"o":["ay"],"y":["ay"],"p":["ay"],"j":["ay"],"r.E":"ay","l.E":"ay"},"f9":{"e":[]},"fb":{"a5":[],"w":[],"e":[]},"cf":{"l":["w"],"r":["w"],"o":["w"],"y":["w"],"p":["w"],"j":["w"],"r.E":"w","l.E":"w"},"dG":{"e":[]},"cg":{"e":[]},"cP":{"a5":[],"w":[],"e":[]},"cn":{"a5":[],"w":[],"e":[]},"fq":{"z":["u","@"],"V":["u","@"],"z.K":"u","z.V":"@"},"fr":{"z":["u","@"],"V":["u","@"],"z.K":"u","z.V":"@"},"fs":{"l":["aB"],"r":["aB"],"o":["aB"],"y":["aB"],"p":["aB"],"j":["aB"],"r.E":"aB","l.E":"aB"},"dS":{"l":["w"],"r":["w"],"o":["w"],"y":["w"],"p":["w"],"j":["w"],"r.E":"w","l.E":"w"},"fJ":{"l":["aD"],"r":["aD"],"o":["aD"],"y":["aD"],"p":["aD"],"j":["aD"],"r.E":"aD","l.E":"aD"},"fO":{"z":["u","@"],"V":["u","@"],"z.K":"u","z.V":"@"},"fQ":{"a5":[],"w":[],"e":[]},"fT":{"l":["av"],"r":["av"],"o":["av"],"y":["av"],"e":[],"p":["av"],"j":["av"],"r.E":"av","l.E":"av"},"fU":{"l":["aE"],"r":["aE"],"o":["aE"],"y":["aE"],"p":["aE"],"j":["aE"],"r.E":"aE","l.E":"aE"},"fY":{"z":["u","u"],"V":["u","u"],"z.K":"u","z.V":"u"},"h2":{"l":["ab"],"r":["ab"],"o":["ab"],"y":["ab"],"p":["ab"],"j":["ab"],"r.E":"ab","l.E":"ab"},"h3":{"l":["aw"],"r":["aw"],"o":["aw"],"y":["aw"],"e":[],"p":["aw"],"j":["aw"],"r.E":"aw","l.E":"aw"},"h5":{"l":["aG"],"r":["aG"],"o":["aG"],"y":["aG"],"p":["aG"],"j":["aG"],"r.E":"aG","l.E":"aG"},"bb":{"k":[]},"d6":{"a5":[],"w":[],"e":[]},"hd":{"e":[]},"d7":{"e":[]},"hm":{"l":["I"],"r":["I"],"o":["I"],"y":["I"],"p":["I"],"j":["I"],"r.E":"I","l.E":"I"},"e8":{"b9":["N"]},"hz":{"l":["az?"],"r":["az?"],"o":["az?"],"y":["az?"],"p":["az?"],"j":["az?"],"r.E":"az?","l.E":"az?"},"ee":{"l":["w"],"r":["w"],"o":["w"],"y":["w"],"p":["w"],"j":["w"],"r.E":"w","l.E":"w"},"hU":{"l":["aF"],"r":["aF"],"o":["aF"],"y":["aF"],"p":["aF"],"j":["aF"],"r.E":"aF","l.E":"aF"},"i0":{"l":["ag"],"r":["ag"],"o":["ag"],"y":["ag"],"p":["ag"],"j":["ag"],"r.E":"ag","l.E":"ag"},"e9":{"cs":["1"]},"cw":{"e9":["1"],"cs":["1"]},"ea":{"br":["1"]},"dD":{"R":["1"]},"hC":{"mV":[]},"fl":{"l":["aO"],"r":["aO"],"o":["aO"],"p":["aO"],"j":["aO"],"r.E":"aO","l.E":"aO"},"fE":{"l":["aQ"],"r":["aQ"],"o":["aQ"],"p":["aQ"],"j":["aQ"],"r.E":"aQ","l.E":"aQ"},"h_":{"l":["u"],"r":["u"],"o":["u"],"p":["u"],"j":["u"],"r.E":"u","l.E":"u"},"n":{"a5":[],"w":[],"e":[]},"h6":{"l":["aR"],"r":["aR"],"o":["aR"],"p":["aR"],"j":["aR"],"r.E":"aR","l.E":"aR"},"du":{"H":[],"e":[]},"c6":{"e":[]},"H":{"e":[]},"eO":{"z":["u","@"],"V":["u","@"],"z.K":"u","z.V":"@"},"bh":{"H":[],"e":[]},"eP":{"e":[]},"dv":{"e":[]},"cO":{"H":[],"e":[]},"fF":{"e":[]},"bQ":{"mF":[],"j":["u"],"j.E":"u"},"e1":{"R":["u"]},"kV":{"j":["1"],"j.E":"1"},"cz":{"R":["1"]},"cE":{"dF":[]},"b5":{"ao":[]},"bS":{"ao":[]},"bT":{"ao":[]},"cJ":{"ao":[]},"bP":{"ao":[]},"fM":{"ao":[]},"dW":{"ao":[]},"fN":{"ao":[]},"bE":{"ao":[]},"Y":{"h":[]},"cm":{"Y":["f"],"h":[],"Y.T":"f"},"cl":{"Y":["f"],"h":[],"Y.T":"f"},"bU":{"dF":[]},"fo":{"dF":[]},"fA":{"a6":[]},"dV":{"a6":[]},"aP":{"a6":[]},"d1":{"a6":[]},"fm":{"a6":[]},"e3":{"a6":[]},"dt":{"a6":[]},"dy":{"a6":[]},"eQ":{"a6":[]},"ha":{"a6":[]},"dU":{"a6":[]},"fL":{"a6":[]},"bo":{"ad":["bo"]},"fS":{"pc":[]},"co":{"d3":[]},"eT":{"d3":[]},"he":{"aL":["i"]},"aK":{"aL":["1"]},"cX":{"aL":["1"]},"fC":{"aL":["i"]},"eW":{"aL":["i"]},"eI":{"aL":["i"]},"f1":{"aL":["i"]},"dm":{"aL":["i"]},"cW":{"aL":["i"]},"i9":{"cu":[]},"lS":{"o":["M"],"p":["M"],"j":["M"],"aH":[]}}'))
A.pD(v.typeUniverse,JSON.parse('{"p":1,"cU":1,"dH":1,"dN":2,"ej":1,"ey":1}'))
var u={o:" 0\x10000\xa0\x80\x10@P`p`p\xb1 0\x10000\xa0\x80\x10@P`p`p\xb0 0\x10000\xa0\x80\x11@P`p`p\xb0 1\x10011\xa0\x80\x10@P`p`p\xb0 1\x10111\xa1\x81\x10AQaqaq\xb0 1\x10011\xa0\x80\x10@Qapaq\xb0 1\x10011\xa0\x80\x10@Paq`p\xb0 1\x10011\xa0\x80\x10@P`q`p\xb0 \x91\x100\x811\xa0\x80\x10@P`p`p\xb0 1\x10011\xa0\x81\x10@P`p`p\xb0 1\x100111\x80\x10@P`p`p\xb0!1\x11111\xa1\x81\x11AQaqaq\xb1",z:'""""""""""""""""DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""3333s3#7333333339433333333333333CDDDDDDDDDDDDDDDDDDDDDDC433DDDDD4DDDDDDDDDDDDDDDDDD3CU33333333333333333333333333334T5333333333333333333333333333CCD3D33CD533333333333333333333333TEDTET53U5UE3333C33333333333333333333333333333CETUTDT5333333333333333333333333SUUUUUEUDDDDD43333433333333333333333333ET533E3333SDD3U3U4333343333C4333333333333CSD33343333333433333333333333333SUUUEDDDTE4333SDDSUSU\x94333343333C43333333333333333s333333333337333333333333wwwww73sw33sww7swwwwwss33373733s33333w33333\xa3\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xba\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xcb\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xec\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee>33333\xb3\xbb\xbb\xbb\xbb\xbb\xbb\xbb;3\xc3\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc334343C33333333333SET333333333333333EDTETD433333333CD33333333333333CD33333CDD4333333333333333333333333CDTDDDCTE43C4CD3C333333333333333D3C33333\x99\x99\x9933333DDDDD42333333333333333333CDDD4333333333333333333333333DDDD433334333C53333333333333333333333C33TEDCSUUU433333333S533333333333333333333333333333CD4DDDDD3D5333333333333333333333333333CSEUCUSE4333D33333C43333333333333CDDD9DDD3DCD433333333CDCDDDDDDEDDD33433C3E433#""""\x82" """"""""2333333333333333CDUUDU53SEUUUD43SDD3U3U4333C43333C43333333333333SE43CD33333333DD33333CDDDDDDDDDD3333333343333333B!233333333333#"""333333s3CD533333333333333333333333333CESEU3333333333333333333DDDD433333CD2333333333333333333333333""""23333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDD33333333333333333333333333333CDDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333SUDDDDUDT43333333333343333333333333333333333333333333333333333TEDDTTEETD333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CUDD3UUDE43333333333333D33333333333333333333333333333333333333333UEDDDTEE43333333333333333333333333333333333333333333333333333CEUDDDE33333333333333333333333333333333333333333333333333CDUDDEDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333D#"2333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CSUUUUUUUUUUUUUUUUUUUUUUUUUUU333CD4333333333333333333333333333333333333333333333333333333""""""33EDDCTSE3333333333D33333333333DDDDDDD\x94DDDDDDDDDDDDDDDDDDDDDDDDDDDDDCDDDDDDDD3DDD4DCDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CD4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDDDD333333333333333333333333333333333333333333333333333333333333333333333333333333333333333s73333s33333333333""""""""3333333373s333333333333333333333333333333CTDDDTU5D4DD333C433333D33333333333333DU433333333333333333333DDDUDUD3333S3333333333333333334333333333333s733333s33333333333CD4DDDD4D4DD4333333333sww73333333w3333333333sw3333s33333337333333sw333333333s733333333333333333UTEUS433333333C433333333333333C433333333333334443SUE4333333333333CDDDDDDDD4333333DDDDDT533333\xa3\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa3SDDDDUUT5DDD43333C43333333333333333C33333333333EEDDDCC3DDDDUUUDDDDD3T5333333333333333333333333333CSDDD433E533333333333333333333333333DDDDDDD4333333333333333333333333333CD53333333333333333333333UEDTE4\x933333333\x933333333333333333333333333D433333333333333333CDDEDDD43333333S5333333333333333333333C333333D533333333333333333333333SUDDDDT5\x9933CD433333333333333333333333333333333333333333333333UEDUTD33343333333333333333333333333333333333333333333333333333333333333333333333333333333CUEDDD43333333333DU333333333333333333333333333C4TTU5S5SU3333C33333U3DDD43DD4333333333333333333333333333333333333333333333333333333333333333333333DDDDDDD533333333333333333333333DDDTTU43333333333333333333333333333DDD733333s373ss33w7733333ww733333333333ss33333333333333333333333333333ww3333333333333333333333333333wwww33333www33333333333333333333wwww333333333333333wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww333333wwwwwwwwwwwwwwwwwwwwwww7wwwwwswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww733333333333333333333333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333333333333333333333333333333333333333333333333333333333swwwww7333333333333333333333333333333333333333333wwwwwwwwwwwwwwwwwwwww7wwwwwwswwwwwwwwwwwwwwwwwwwww73333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333333w7333333333333333733333333333333333333333333333sww733333s7333333s3wwwww333333333wwwwwwwwwwwwwwwwwwwwwwwwwwwwgffffffffffff6wwwwwww73333s33333333337swwwwsw73333wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwDDDDDDDDDDDDDDDDDDDDDDDD33333333DDDDDDDD33333333DDDDDDDDDDDDDDDD43333333DC44333333333333333333333333333SUDDDDTD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333UED4CTUE3S33333333333333DDDDD33333333333333333333DDD\x95DD333343333DDDUD43333333333333333333\x93\x99\x99IDDDDDDE4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDDDDDDDDDDDDDDDDDDDDDDDDDD33DDDDDDDDDDDDDDDDDDDDDDDDD33334333333C33333333333DD4DDDDDDD43333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333TD43EDD""""DDDD3DDD433333333333333CD43333333333333333333333333333333333333333333333333333333333333333333333333CD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333C33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333433333333333333333333333333333333333333333333333333333333333333333333333333DD4333333333333333333333333333333333333333333333333333333333333333333EDDDCDDT43333333333333333333333333333333333333333CDDDDDDDDDD4EDDDETD3333333333333333333333333333333333333333333333333333333333333DDD3CC4DDD\x94433333333333333333333333333333333SUUC4UT433333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333DU333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDD333333333333333333333333333333333333333333333333333333CDDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDC433DD33333333333333333333D43C3333333333333333333333333333333333333333333333333333333333333333333333333333333333C4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333334EDDDD3\x03',h:"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",q:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",p:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",l:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",e:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\n\nout vec4 outColor;\n\nvoid main() {\n    vec2 tex_position = gl_FragCoord.xy / vec2(100, 40);\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n    float source_strength = u_source_strength + sin(u_time * 2.0);\n    float dist = distance(gl_FragCoord.xy, (u_source_position + vec2(0.5, 0.5))) / 2.0;\n    if (dist > source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, source_strength, dist);\n    outColor = vec4(u_source_color.rgb, scale);\n}\n",A:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // back textures is already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 front = texture(u_light_texture, tex_position);\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  // front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",a:"\u0e3b\u1cdb\u05d0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b \u389c\u102b\u102b\u102b\u102b\u489c\u102b\u102b\u102b\u0620\u392b\u0c26\u0efa\u102b\u0dcb\u0601\u3e7e\u228f\u0c77\u24d3\u40b2\u102b\u1d51\u0f6f\u2681\u0698\u0851\u0d63\u0be6\u0d63\u1d2a\u06d5\u0e9b\u0771\u075c\u2b98\u23fe\u2707\u0da1\u2a52\u08eb\u0d13\u0ce3\u2712\u0c62\u4d9d\u0b97\u25cb\u2b21\u0659\u42c5\u0baa\u0ec5\u088d\u102b\u09b9\u09d9\u09f9\u0a21\u102b\u102b\u102b\u102b\u102b\u40ae\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0b5f\u25b1\u23c1\u07f5\u0fe2\u102b\u269e\u102b\u0e5b\u102b\u102b\u102b\u2427\u26c9\u275a\u102b\u2b5c\u0fad\u0b31\u0789\u08ab\u102b\u102b\u0dfb\u102b\u102b\u102b\u1d74\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0f2f\u2372\u102b\u38ec\u090f\u102b\u2501\u102b\u102b\u102b\u102b\u102b\u24a9\u102b\u35c8\u0939\u102b\u102b\u102b\u23b5\u102b\u102b\u2345\u2c27\u3457\u2d9d\u3491\u2d9d\u0979\u2be5\u252c\u102b\u102b\u102b\u102b\u102b\u233b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2566\u23a2\u102b\u102b\u102b\u102b\u102b\u409c\u102b\u428c\u102b\u3db9\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2bac\u102b\u16c9\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2c0e\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0d24\u4c95\u4c83\u102b\u102b\u102b\u102b\u0b0c\u102b\u07bb\u2609\u0c43\u2641\u071f\u2483\u2443\u0cb1\u06e1\u0811\u102b\u102b\u102b\u2583\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a95\u0ace\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u42ad\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u38bc\u102b\u102b\u1cdb\u102b\u102b\u4c95\u1cea\u40ce\u102b\u49ce\u1f6f\u2752\u1506\u393f\u449f\u102b\u102b\u102b\u102b\u102b\u0ff2\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u113b\u191a\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u1869\u102b\u102b\u102b\u102b\u3e89\u102b\u3bd9\u102b\u1da7\u102b\u47cf\u102b\u34a1\u305d\u2c56\u2d9d\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\x00\u01f0\u01f0\u01f0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b"}
var t=(function rtii(){var s=A.be
return{bm:s("@<~>"),mm:s("eK"),A:s("aK<i>"),bB:s("a_"),lE:s("an"),u:s("ds"),bD:s("b2"),lo:s("mE"),h:s("c7"),db:s("c9"),m1:s("mF"),n6:s("ad<v?>"),d5:s("I"),cs:s("cc"),dA:s("bj"),jW:s("bK"),L:s("ae"),ox:s("lP"),gt:s("p<@>"),v:s("a3"),O:s("f6"),b:s("cd"),fz:s("L"),U:s("k"),fq:s("J"),et:s("ay"),C:s("lS"),gY:s("ce"),p:s("aq<@>"),m:s("a7<f,h>"),eT:s("a4<cj>"),f5:s("a4<ct>"),eN:s("a4<ah>"),r:s("a4<bU>"),ba:s("a4<d2>"),de:s("a4<M>"),oQ:s("a4<aN?>"),hQ:s("cP"),h8:s("a0"),jC:s("bM"),lZ:s("aN"),e7:s("j<@>"),c7:s("t<cE>"),if:s("t<cG>"),G:s("t<X>"),a:s("t<ao>"),V:s("t<b3>"),fy:s("t<bF>"),Q:s("t<f0>"),X:s("t<aW>"),pl:s("t<lP>"),c:s("t<a3>"),w:s("t<a6>"),iw:s("t<aq<~>>"),ow:s("t<dF>"),ge:s("t<a0>"),Y:s("t<bM>"),I:s("t<aN>"),lB:s("t<bk>"),fu:s("t<o<bN>>"),do:s("t<o<i>>"),lR:s("t<as>"),ku:s("t<bN>"),hf:s("t<v>"),d:s("t<fH>"),q:s("t<i>"),J:s("t<ba>"),fk:s("t<d0>"),f:s("t<P>"),fF:s("t<fW>"),s:s("t<u>"),oe:s("t<e4>"),c5:s("t<d3>"),o:s("t<x>"),B:s("t<aS>"),D:s("t<cu>"),bu:s("t<aZ>"),n:s("t<M>"),dG:s("t<@>"),t:s("t<f>"),g2:s("t<N>"),ev:s("t<~(ae)>"),T:s("dK"),dY:s("bl"),dX:s("y<@>"),mT:s("bm"),kT:s("aO"),k:s("o<cE>"),mw:s("o<a3>"),i8:s("o<i>"),bd:s("o<M>"),gM:s("cj"),cM:s("V<i,a3>"),ea:s("V<u,@>"),gX:s("cl"),e:s("cm"),li:s("a2"),gN:s("co<@>"),ib:s("aB"),ee:s("bN"),gD:s("aC"),fh:s("w"),P:s("W"),ai:s("aQ"),K:s("v"),mn:s("at"),gm:s("cX<i>"),p6:s("bo"),d8:s("aD"),j:s("i"),o5:s("mV"),kB:s("au"),mx:s("b9<N>"),e8:s("ba"),cH:s("d_"),fm:s("av"),cA:s("aE"),hH:s("aF"),hd:s("P"),l:s("aY"),N:s("u"),lv:s("ag"),dt:s("ct"),dy:s("ah"),dQ:s("aw"),gJ:s("ab"),lJ:s("bs"),W:s("bU"),ns:s("d2"),hU:s("h4"),ki:s("aG"),hk:s("aR"),fH:s("e4"),ha:s("n8"),bC:s("bV"),jv:s("aH"),cx:s("d5"),eL:s("d6"),kL:s("aI<a_>"),b1:s("aI<an>"),eo:s("aI<a2>"),au:s("aI<au>"),c1:s("cu"),l7:s("hf"),oJ:s("aT<b2>"),fB:s("aT<bs>"),ou:s("aT<~>"),aN:s("hk"),n4:s("aZ"),bz:s("cw<k>"),og:s("K<b2>"),aa:s("K<bs>"),g:s("K<@>"),hy:s("K<f>"),cU:s("K<~>"),gL:s("hW<v?>"),iF:s("dc<~>"),im:s("i3"),o3:s("i8"),k4:s("D"),ei:s("D(a_)"),g9:s("D(an)"),eU:s("D(a2)"),iW:s("D(v)"),hZ:s("D(au)"),i:s("M"),z:s("@"),mY:s("@()"),y:s("@(v)"),ng:s("@(v,aY)"),p1:s("@(@,@)"),S:s("f"),eK:s("0&*"),_:s("v*"),gK:s("aq<W>?"),ef:s("az?"),R:s("aN?"),iD:s("v?"),F:s("cy<@,@>?"),nF:s("hF?"),du:s("@(k)?"),ld:s("f(aZ,aZ)?"),Z:s("~()?"),p0:s("~(b2)?"),lW:s("~(bK)?"),oV:s("~(k)?"),jV:s("~(bm)?"),b9:s("~(aC)?"),cZ:s("N"),H:s("~"),M:s("~()"),nD:s("~([~])"),x:s("~(ae)"),nt:s("~(a6)"),i6:s("~(v)"),fQ:s("~(v,aY)"),gS:s("~(u,u)"),E:s("~(u,@)"),my:s("~(h4)"),hv:s("~(N)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aE=A.du.prototype
B.bM=A.c6.prototype
B.bN=A.eN.prototype
B.a7=A.c7.prototype
B.dv=A.cL.prototype
B.dE=A.cO.prototype
B.dF=A.dG.prototype
B.dP=J.a.prototype
B.a=J.t.prototype
B.dR=J.dI.prototype
B.d=J.dJ.prototype
B.c=J.cQ.prototype
B.i=J.ch.prototype
B.dS=J.bl.prototype
B.b7=A.dP.prototype
B.ep=A.cV.prototype
B.a0=A.dR.prototype
B.bb=J.fI.prototype
B.e=A.d_.prototype
B.ay=J.d5.prototype
B.bj=A.d7.prototype
B.be=new A.ah(5,"table")
B.bk=new A.dm(B.be)
B.az=new A.eJ(0,"center")
B.bm=new A.eJ(1,"rightTopAnchor")
B.aA=new A.dn(2,"rounds")
B.Q=new A.eW()
B.av=new A.ah(11,"column")
B.b9=new A.cW(B.av)
B.bx=new A.aK(B.Q,B.b9,t.A)
B.N=new A.ah(0,"door")
B.b8=new A.cW(B.N)
B.bs=new A.aK(B.bx,B.b8,t.A)
B.bW=new A.fC()
B.bt=new A.aK(B.bs,B.bW,t.A)
B.a5=new A.eI()
B.bv=new A.aK(B.a5,B.b9,t.A)
B.bw=new A.aK(B.bv,B.b8,t.A)
B.bE=new A.a_("",0,0,0,99)
B.a4=new A.b3(0,"surface")
B.z=new A.b3(1,"caves")
B.y=new A.b3(2,"deepCaves")
B.P=new A.b3(3,"facility")
B.A=new A.b3(4,"ruins")
B.bO=new A.b3(5,"village")
B.bP=new A.b3(6,"snow")
B.a6=new A.f1()
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

B.aH=new A.jL()
B.bX=new A.fG()
B.B=new A.k2()
B.m=new A.hC()
B.k=new A.hQ()
B.bY=new A.i_()
B.a8=new A.eZ(2,"ignoreAgentsAndUnlockedDoors")
B.a9=new A.eZ(3,"normal")
B.c2=new A.h(1660944383)
B.c3=new A.h(3707764736)
B.w=new A.h(4278190080)
B.d7=new A.h(4294278144)
B.aa=new A.h(4294967295)
B.aK=new A.bJ(5,"d20")
B.ae=new A.aW(0,"se")
B.af=new A.aW(1,"ne")
B.ag=new A.aW(2,"sw")
B.ah=new A.aW(3,"nw")
B.n=new A.aW(4,"n")
B.o=new A.aW(5,"e")
B.p=new A.aW(6,"s")
B.q=new A.aW(7,"w")
B.dB=new A.ae(0)
B.dC=new A.ae(25e4)
B.dD=new A.ae(8000)
B.E=new A.cd(0,"primaryMelee")
B.r=new A.cd(1,"primaryRanged")
B.F=new A.cd(2,"armor")
B.dG=new A.a0(0,"enter")
B.ai=new A.a0(1,"north")
B.dH=new A.a0(10,"activate")
B.dI=new A.a0(12,"equipment")
B.dJ=new A.a0(19,"autoexplore")
B.aL=new A.a0(2,"east")
B.dK=new A.a0(20,"reload")
B.dL=new A.a0(21,"toggleStats")
B.aj=new A.a0(3,"south")
B.aM=new A.a0(4,"west")
B.dM=new A.a0(6,"fire")
B.dN=new A.a0(8,"look")
B.dO=new A.a0(9,"reset")
B.ak=new A.a1(0,"none")
B.al=new A.a1(1,"stairsUp")
B.S=new A.a1(10,"tree")
B.T=new A.a1(11,"bookshelf")
B.G=new A.a1(12,"mechanism")
B.U=new A.a1(13,"activatedMechanism")
B.V=new A.a1(14,"chest")
B.W=new A.a1(15,"stalagmite")
B.X=new A.a1(16,"column")
B.H=new A.a1(2,"stairsDown")
B.v=new A.a1(3,"door")
B.I=new A.a1(4,"openDoor")
B.J=new A.a1(5,"lockedDoor")
B.K=new A.a1(6,"grass")
B.L=new A.a1(7,"torch")
B.Y=new A.a1(8,"table")
B.Z=new A.a1(9,"chair")
B.aN=new A.bk(0,"melee")
B.aO=new A.bk(1,"ranged")
B.aP=new A.bk(2,"armor")
B.aQ=new A.bk(3,"other")
B.dQ=new A.bk(5,"corpse")
B.aR=new A.bk(6,"ammo")
B.dT=new A.jr(1,"water")
B.aB=new A.cG(0,"light")
B.aC=new A.cG(1,"heavy")
B.aD=new A.cG(2,"powered")
B.hc=A.c(s([B.aB,B.aC,B.aD]),t.if)
B.by=new A.an(1)
B.bz=new A.an(1)
B.bA=new A.an(1)
B.bB=new A.an(1)
B.ha=A.c(s([B.aD]),t.if)
B.bC=new A.an(2)
B.he=A.c(s([B.aB,B.aC]),t.if)
B.bD=new A.an(2)
B.dU=A.c(s([B.by,B.bz,B.bA,B.bB,B.bC,B.bD]),A.be("t<an>"))
B.aS=A.c(s([1,2,4,8]),t.t)
B.dV=A.c(s([24,36]),t.n)
B.ew=new A.bO(0,"north")
B.ex=new A.bO(1,"south")
B.ey=new A.bO(2,"east")
B.ez=new A.bO(3,"west")
B.eA=new A.bO(4,"center")
B.aT=A.c(s([B.ew,B.ex,B.ey,B.ez,B.eA]),A.be("t<bO>"))
B.aU=A.c(s([B.n,B.p]),t.X)
B.aV=A.c(s([B.o,B.q]),t.X)
B.am=A.c(s([B.ae,B.af,B.ag,B.ah,B.n,B.o,B.p,B.q]),t.X)
B.x=A.c(s([-1,3,-1,-1,3,-1]),t.n)
B.a_=A.c(s([]),t.Q)
B.e_=A.c(s([]),t.X)
B.h=A.c(s([]),t.w)
B.dZ=A.c(s([]),A.be("t<W>"))
B.bK=new A.a_("Second Skin",1,1,2,5)
B.bL=new A.a_("Estex Suit I",1,0,1,5)
B.bH=new A.a_("Flight Suit",1,0,1,6)
B.bI=new A.a_("Freebooter Armor I",2,2,3,4)
B.bF=new A.a_("Kasatha microcord I",2,1,3,3)
B.bG=new A.a_("Ceremonial Plate",1,1,3,2)
B.bJ=new A.a_("Golemforged Plating",1,2,5,0)
B.e1=A.c(s([B.bK,B.bL,B.bH,B.bI,B.bF,B.bG,B.bJ]),A.be("t<a_>"))
B.h8=new A.fe(0,"oneHand")
B.ac=new A.bI(5,"bludgeoning")
B.h3=new A.cb(0,"none")
B.fX=new A.bH()
B.R=new A.bJ(2,"d6")
B.bg=new A.aS(0,"archaic")
B.O=new A.aS(2,"analog")
B.e5=A.c(s([B.bg,B.O]),t.B)
B.eg=new A.a2(B.ac,1,B.R,0,"Club",B.e5)
B.ad=new A.bJ(1,"d4")
B.fS=new A.aS(3,"operative")
B.aW=A.c(s([B.O,B.fS]),t.B)
B.ee=new A.a2(B.ac,1,B.ad,1,"Tactical Baton",B.aW)
B.dy=new A.bI(7,"slashing")
B.ek=new A.a2(B.dy,1,B.ad,1,"Survival Knife",B.aW)
B.h9=new A.fe(1,"twoHand")
B.aI=new A.bI(6,"piercing")
B.bh=new A.aS(4,"block")
B.dX=A.c(s([B.O,B.bh]),t.B)
B.ej=new A.a2(B.aI,1,B.R,1,"Tactical Spear",B.dX)
B.ab=new A.bI(3,"fire")
B.h6=new A.cb(4,"burn")
B.fY=new A.bH()
B.bi=new A.aS(5,"powered")
B.aX=A.c(s([B.bi]),t.B)
B.h2=new A.jy()
B.ef=new A.a2(B.ab,2,B.ad,7,"Flame Sword",B.aX)
B.h5=new A.cb(11,"wound")
B.fZ=new A.bH()
B.aJ=new A.bJ(3,"d8")
B.eh=new A.a2(B.ab,2,B.aJ,9,"Plasma Sword",B.aX)
B.dx=new A.bI(2,"electricity")
B.h4=new A.cb(1,"arc")
B.h_=new A.bH()
B.dA=new A.bJ(4,"d12")
B.fT=new A.aS(6,"stun")
B.dW=A.c(s([B.fT,B.bi]),t.B)
B.el=new A.a2(B.dx,1,B.dA,8,"Shock Staff",B.dW)
B.e2=A.c(s([B.eg,B.ee,B.ek,B.ej,B.ef,B.eh,B.el]),A.be("t<a2>"))
B.dw=new A.bI(1,"cold")
B.h7=new A.cb(9,"staggered")
B.h0=new A.bH()
B.bo=new A.dn(1,"charge")
B.bq=new A.dp(B.bo,20)
B.es=new A.au("Zero pistol",B.dw,B.R,5,B.bq,60)
B.hd=A.c(s([B.O]),t.B)
B.br=new A.dp(B.aA,9)
B.M=new A.au("Tac Pistol",B.aI,B.R,1,B.br,30)
B.dz=new A.bJ(0,"d3")
B.h1=new A.bH()
B.fU=new A.aS(7,"line")
B.fV=new A.aS(8,"unwieldy")
B.hb=A.c(s([B.fU,B.fV]),t.B)
B.bn=new A.dn(0,"petro")
B.bp=new A.dp(B.bn,20)
B.et=new A.au("Flame Rifle",B.ab,B.aJ,2,B.bp,25)
B.e3=A.c(s([B.es,B.M,B.et]),A.be("t<au>"))
B.bZ=new A.c8(0,"north")
B.c_=new A.c8(1,"south")
B.c0=new A.c8(2,"east")
B.c1=new A.c8(3,"west")
B.e4=A.c(s([B.bZ,B.c_,B.c0,B.c1]),A.be("t<c8>"))
B.aY=new A.cj(0,"lockedDoor")
B.e6=new A.cj(3,"doorMechanism")
B.aZ=new A.cj(4,"none")
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
B.an=new A.a7([50,B.db,100,B.d9,200,B.d2,300,B.cX,350,B.cV,400,B.cQ,500,B.cI,600,B.cA,700,B.cv,800,B.cl,850,B.ch,900,B.cb],t.m)
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
B.b_=new A.a7([50,B.d0,100,B.cS,200,B.cK,300,B.cD,400,B.cx,500,B.cq,600,B.cn,700,B.cj,800,B.cg,900,B.c9],t.m)
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
B.b0=new A.a7([50,B.ds,100,B.dr,200,B.dq,300,B.dp,400,B.dn,500,B.dl,600,B.dd,700,B.dc,800,B.da,900,B.d8],t.m)
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
B.b1=new A.a7([50,B.d5,100,B.cW,200,B.cP,300,B.cJ,400,B.cF,500,B.cC,600,B.cz,700,B.ct,800,B.cr,900,B.ck],t.m)
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
B.b2=new A.a7([50,B.cY,100,B.cO,200,B.cH,300,B.cw,400,B.cm,500,B.cc,600,B.ca,700,B.c8,800,B.c7,900,B.c6],t.m)
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
B.b3=new A.a7([50,B.d1,100,B.cT,200,B.cL,300,B.cG,400,B.cB,500,B.cu,600,B.cs,700,B.cp,800,B.ci,900,B.cd],t.m)
B.e0=A.c(s([]),t.s)
B.hf=new A.dx(0,{},B.e0,A.be("dx<u,@>"))
B.di=new A.h(4294955392)
B.dg=new A.h(4294945600)
B.df=new A.h(4294938880)
B.de=new A.h(4294929664)
B.ea=new A.a7([100,B.di,200,B.dg,400,B.df,700,B.de],t.m)
B.ao=new A.a7([B.F,null,B.E,null,B.r,null],A.be("a7<cd,aN?>"))
B.cE=new A.h(4286755327)
B.co=new A.h(4282682111)
B.cf=new A.h(4280908287)
B.ce=new A.h(4280902399)
B.e8=new A.a7([100,B.cE,200,B.co,400,B.cf,700,B.ce],t.m)
B.ap=new A.cl(B.e8,4282682111)
B.cN=new A.h(4290377418)
B.cy=new A.h(4285132974)
B.c5=new A.h(4278249078)
B.c4=new A.h(4278241363)
B.e9=new A.a7([100,B.cN,200,B.cy,400,B.c5,700,B.c4],t.m)
B.ec=new A.cl(B.e9,4285132974)
B.du=new A.h(4294967181)
B.dt=new A.h(4294967040)
B.dk=new A.h(4294961664)
B.dj=new A.h(4294956544)
B.eb=new A.a7([100,B.du,200,B.dt,400,B.dk,700,B.dj],t.m)
B.ed=new A.cl(B.eb,4294967040)
B.b4=new A.cm(B.b0,4294961979)
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
B.e7=new A.a7([50,B.dm,100,B.dh,200,B.d4,300,B.d_,400,B.d3,500,B.d6,600,B.cZ,700,B.cU,800,B.cR,900,B.cM],t.m)
B.C=new A.cm(B.e7,4294198070)
B.b5=new A.cm(B.b2,4280391411)
B.fR=new A.aS(1,"nonlethal")
B.dY=A.c(s([B.bg,B.fR,B.O]),t.B)
B.ei=new A.a2(B.ac,1,B.dz,0,"Fists",B.dY)
B.b6=new A.cT(0,"wildBoar")
B.em=new A.cT(1,"zyborgMelee")
B.en=new A.cT(2,"zyborgRanged")
B.eo=new A.cT(3,"caveScanner")
B.eq=new A.cX(B.a5,t.gm)
B.ax=new A.ah(7,"bookshelf")
B.bl=new A.dm(B.ax)
B.bu=new A.aK(B.a5,B.bl,t.A)
B.er=new A.cX(B.bu,t.gm)
B.ba=new A.fH(2,"elementalAffinity")
B.D=new A.i(0,0)
B.aq=new A.dY(0,"small")
B.eu=new A.dY(1,"medium")
B.ev=new A.dY(2,"large")
B.ar=new A.e_(0,"melee")
B.as=new A.e_(1,"ranged")
B.at=new A.e_(2,"armor")
B.eB=new A.m(0,0)
B.eC=new A.m(0,1)
B.eD=new A.m(0,3)
B.eE=new A.m(0,5)
B.eF=new A.m(0,7)
B.bc=new A.m(10,11)
B.eG=new A.m(10,3)
B.eH=new A.m(10,4)
B.eI=new A.m(10,5)
B.eJ=new A.m(10,6)
B.eK=new A.m(10,7)
B.eL=new A.m(11,11)
B.eM=new A.m(11,13)
B.eN=new A.m(11,4)
B.eO=new A.m(11,6)
B.eP=new A.m(12,11)
B.eQ=new A.m(12,4)
B.eR=new A.m(12,6)
B.eS=new A.m(13,0)
B.bd=new A.m(13,12)
B.eT=new A.m(13,2)
B.eU=new A.m(13,4)
B.eV=new A.m(13,6)
B.eW=new A.m(14,4)
B.eX=new A.m(14,6)
B.eY=new A.m(15,2)
B.eZ=new A.m(15,4)
B.f_=new A.m(15,6)
B.f0=new A.m(1,3)
B.f1=new A.m(1,4)
B.f2=new A.m(1,5)
B.f3=new A.m(1,6)
B.f4=new A.m(1,7)
B.f5=new A.m(2,3)
B.f6=new A.m(2,4)
B.f7=new A.m(2,5)
B.f8=new A.m(2,6)
B.f9=new A.m(2,7)
B.fa=new A.m(3,3)
B.fb=new A.m(3,4)
B.fc=new A.m(3,5)
B.fd=new A.m(3,6)
B.fe=new A.m(3,7)
B.ff=new A.m(4,3)
B.fg=new A.m(4,4)
B.fh=new A.m(4,5)
B.fi=new A.m(4,6)
B.fj=new A.m(4,7)
B.fk=new A.m(5,3)
B.fl=new A.m(5,4)
B.fm=new A.m(5,5)
B.fn=new A.m(5,6)
B.fo=new A.m(5,7)
B.fp=new A.m(6,3)
B.fq=new A.m(6,4)
B.fr=new A.m(6,5)
B.fs=new A.m(6,6)
B.ft=new A.m(6,7)
B.fu=new A.m(7,3)
B.fv=new A.m(7,4)
B.fw=new A.m(7,5)
B.fx=new A.m(7,6)
B.fy=new A.m(7,7)
B.fz=new A.m(8,12)
B.fA=new A.m(8,3)
B.fB=new A.m(8,4)
B.fC=new A.m(8,5)
B.fD=new A.m(8,6)
B.fE=new A.m(8,7)
B.fF=new A.m(9,12)
B.fG=new A.m(9,3)
B.fH=new A.m(9,4)
B.fI=new A.m(9,5)
B.fJ=new A.m(9,6)
B.fK=new A.m(9,7)
B.a1=new A.bQ("")
B.au=new A.ct(0,"dirt")
B.a2=new A.ct(2,"metal")
B.fL=new A.ct(4,"snow")
B.fM=new A.ah(10,"stalagmite")
B.a3=new A.ah(2,"light")
B.t=new A.ah(3,"none")
B.fN=new A.ah(4,"chair")
B.aw=new A.ah(6,"chest")
B.fO=new A.ah(8,"mechanism")
B.fP=new A.ah(9,"tree")
B.j=new A.d2(0,"floor")
B.b=new A.d2(1,"wall")
B.fQ=A.r0("v")
B.u=new A.d4(0,"float_1")
B.f=new A.d4(1,"float_2")
B.bf=new A.d4(3,"float_4")
B.l=new A.d4(4,"texture_1")
B.fW=new A.db(null,2)})();(function staticFields(){$.kK=null
$.mC=null
$.mB=null
$.nD=null
$.ny=null
$.nM=null
$.l7=null
$.lf=null
$.me=null
$.df=null
$.ez=null
$.eA=null
$.m9=!1
$.G=B.k
$.aJ=A.c([],t.hf)
$.mK=0
$.mz=null
$.pN=A.b6(["0",B.eD,"1",B.f0,"2",B.f5,"3",B.fa,"4",B.ff,"5",B.fk,"6",B.fp,"7",B.fu,"8",B.fA,"9",B.fG," ",B.eB,"-",B.eT,"a",B.f3,"b",B.f8,"c",B.fd,"d",B.fi,"e",B.fn,"f",B.fs,"g",B.fx,"h",B.fD,"i",B.fJ,"j",B.eJ,"k",B.eO,"l",B.eR,"m",B.eV,"n",B.eX,"o",B.f_,"p",B.eF,"q",B.f4,"r",B.f9,"s",B.fe,"t",B.fj,"u",B.fo,"v",B.ft,"w",B.fy,"x",B.fE,"y",B.fK,"z",B.eK,"A",B.f1,"B",B.f6,"C",B.fb,"D",B.fg,"E",B.fl,"F",B.fq,"G",B.fv,"H",B.fB,"I",B.fH,"J",B.eH,"K",B.eN,"L",B.eQ,"M",B.eU,"N",B.eW,"O",B.eZ,"P",B.eE,"Q",B.f2,"R",B.f7,"S",B.fc,"T",B.fh,"U",B.fm,"V",B.fr,"W",B.fw,"X",B.fC,"Y",B.fI,"Z",B.eI,"/",B.eY,":",B.eG],t.N,A.be("m"))
$.pT=A.b6(["ArrowUp",B.ai,"ArrowDown",B.aj,"ArrowRight",B.aL,"ArrowLeft",B.aM,"q",B.dM," ",B.dH,"0",B.dJ,"l",B.dN,"w",B.ai,"a",B.aM,"s",B.aj,"d",B.aL,"Escape",B.dO,"r",B.dK,"e",B.dI,"p",B.dL,"Enter",B.dG],t.N,t.h8)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"re","nS",()=>A.qE("_$dart_dartClosure"))
s($,"rF","o1",()=>A.bt(A.kf({
toString:function(){return"$receiver$"}})))
s($,"rG","o2",()=>A.bt(A.kf({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"rH","o3",()=>A.bt(A.kf(null)))
s($,"rI","o4",()=>A.bt(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"rL","o7",()=>A.bt(A.kf(void 0)))
s($,"rM","o8",()=>A.bt(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"rK","o6",()=>A.bt(A.n9(null)))
s($,"rJ","o5",()=>A.bt(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"rO","oa",()=>A.bt(A.n9(void 0)))
s($,"rN","o9",()=>A.bt(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"rQ","mk",()=>A.pj())
s($,"t1","lK",()=>A.li(B.fQ))
s($,"rc","nR",()=>({}))
s($,"ri","mi",()=>B.i.bj(A.lO(),"Opera",0))
s($,"rh","nV",()=>!A.O($.mi())&&B.i.bj(A.lO(),"Trident/",0))
s($,"rg","nU",()=>B.i.bj(A.lO(),"Firefox",0))
s($,"rf","nT",()=>"-"+$.nW()+"-")
s($,"rj","nW",()=>{if(A.O($.nU()))var r="moz"
else if($.nV())r="ms"
else r=A.O($.mi())?"o":"webkit"
return r})
s($,"rv","o0",()=>A.c([$.oq(),$.or(),$.os(),$.od(),$.oo()],t.ku))
s($,"tt","oq",()=>A.ft(A.eH(4,6,8,4,4,8),new A.lB(),A.c([B.a4],t.V),"death_1.mp3",new A.lC(),B.b6,0,4,"Wild Boar",new A.lD()))
s($,"tr","oo",()=>A.ft(A.eH(4,6,8,4,4,10),new A.lv(),A.c([B.bP],t.V),"death_1.mp3",new A.lw(),B.b6,2,4,"Snow Bear",new A.lx()))
s($,"tu","or",()=>A.ft(A.eH(4,8,8,4,4,10),new A.lE(),A.c([B.z,B.y,B.P,B.A],t.V),"monster_scream_1.mp3",new A.lF(),B.em,1,6,"Zyborg",new A.lG()))
s($,"tv","os",()=>A.ft(A.eH(4,8,10,4,4,10),new A.lH(),A.c([B.z,B.y,B.P,B.A],t.V),"monster_scream_1.mp3",new A.lI(),B.en,2,6,"Zyborg Ranged",new A.lJ()))
s($,"t5","od",()=>A.ft(A.eH(4,6,12,6,4,6),new A.l3(),A.c([B.z,B.y,B.P,B.A],t.V),null,new A.l4(),B.eo,3,6,"Cave Scanner",new A.l5()))
s($,"t8","mm",()=>{var r=A.c([A.bW(B.f,"u_resolution"),A.bW(B.u,"u_time"),A.bW(B.f,"u_offset"),A.bW(B.f,"u_origin")],t.o)
return A.aM(A.c([A.my(35044,A.mR(B.x),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\nuniform vec2 u_origin;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  float dist = distance(snapped_position, (u_origin + vec2(0.5, 0.5)) * vec2(24.0, 36.0)) / 50.0;\n  float rand = -1.0 + random(relative_position) / 2.0;\n  float scale_rate = 0.8 * (u_time);\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(249.0 / 255.0, 168.0 / 255.0, 37.0 / 255.0, scale);\n}\n",r,u.h)})
s($,"td","oh",()=>{var r=A.c([A.bW(B.f,"u_resolution"),A.bW(B.u,"u_time"),A.bW(B.f,"u_offset"),A.bW(B.f,"u_source"),A.bW(B.f,"u_target")],t.o)
return A.aM(A.c([A.my(35044,A.mR(B.x),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nuniform vec2 u_source;\nuniform vec2 u_target;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 p0 = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  vec2 p1 = (u_source + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n  vec2 p2 = (u_target + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n\n  if ((p1.x != p2.x) && (p0.x < p1.x && p0.x < p2.x) || (p0.x > p1.x && p0.x > p2.x)) {\n    discard;\n    return;\n  }\n  if ((p1.y != p2.y) && (p0.y < p1.y && p0.y < p2.y) || (p0.y > p1.y && p0.y > p2.y)) {\n    discard;\n    return;\n  }\n\n  float dist = abs( (p2.x - p1.x) * (p1.y - p0.y) - (p1.x - p0.x) * (p2.y - p1.y) ) / sqrt( pow(p2.x - p1.x, 2.0) + pow(p2.y - p1.y, 2.0) );\n  float rand = random(relative_position);\n  float scale_rate = 1.5;\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = 1.0 - smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(0.1, 0.2, 1.0, 0.8 * scale - u_time);\n}\n",r,u.h)})
s($,"rz","eE",()=>new A.jP())
s($,"rk","nX",()=>A.m0())
s($,"rr","mj",()=>A.m_(A.bG(4278780675),A.bG(4279308561),A.bG(4280361249)))
s($,"rs","nY",()=>A.m_(A.bG(4279898637),A.bG(4281017118),A.bG(4282858034)))
s($,"ru","o_",()=>A.m_(A.bG(4279765786),A.bG(4280096038),A.bG(4282463311)))
s($,"rt","nZ",()=>$.mj())
s($,"t2","eF",()=>A.m0())
s($,"t4","oc",()=>A.m0())
s($,"tp","mr",()=>A.bu(B.Q,new A.ls(),!0))
s($,"ti","mp",()=>A.bu(B.bk,new A.ll(),!0))
s($,"tm","dl",()=>A.bu(A.mw(B.a6,A.mT(B.a3),t.j),new A.lp(),!0))
s($,"th","mo",()=>A.bu(A.mw(B.Q,A.mT(B.a3),t.j),new A.lk(),!0))
s($,"tj","ok",()=>A.bu(B.Q,new A.lm(),!0))
s($,"tn","mq",()=>A.bu(B.a6,new A.lq(),!0))
s($,"to","om",()=>A.bu(B.eq,new A.lr(),!1))
s($,"tk","iq",()=>A.bu(B.bt,new A.lo(),!0))
s($,"tl","ol",()=>A.bu(B.bw,new A.ln(),!0))
s($,"tg","oj",()=>A.bu(B.er,new A.lj(),!0))
s($,"tf","lL",()=>{var r=$.mr(),q=$.mp()
return A.c([r,q,q,$.dl(),$.iq()],t.D)})
s($,"te","oi",()=>{var r=$.oj()
return A.c([r,r,r,r,r,$.dl(),$.mr(),$.mp(),$.iq()],t.D)})
s($,"tc","og",()=>{var r=$.dl(),q=$.iq()
return A.c([r,r,r,q,q,q],t.D)})
s($,"ta","oe",()=>{var r,q=$.dl(),p=$.mo()
p=A.c([q,q,q,p,p,p,p,p,p],t.D)
for(r=0;r<500;++r)p.push($.om())
return p})
s($,"tb","of",()=>{var r,q=$.dl(),p=$.mo()
p=A.c([q,q,q,p,p,p],t.D)
for(r=0;r<10;++r)p.push($.iq())
for(r=0;r<10;++r)p.push($.ol())
return p})
s($,"ts","op",()=>A.c([$.ok(),$.dl()],t.D))
s($,"t3","ob",()=>A.p0(A.cA(A.c([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t))))
s($,"t9","mn",()=>t.cH.a(B.a7.dj(t.h.a(A.nB().querySelector("#glCanvas")),"webgl2")))
s($,"tq","on",()=>new A.j1())
s($,"t7","ml",()=>A.oL(t.h.a(A.nB().querySelector("#glCanvas")),$.mn(),$.on()))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.fu,DataView:A.cq,ArrayBufferView:A.cq,Float64Array:A.cp,Float32Array:A.dP,Int16Array:A.fv,Int32Array:A.fw,Int8Array:A.fx,Uint16Array:A.fy,Uint32Array:A.fz,Uint8ClampedArray:A.cV,CanvasPixelArray:A.cV,Uint8Array:A.dR,HTMLBRElement:A.q,HTMLBaseElement:A.q,HTMLButtonElement:A.q,HTMLContentElement:A.q,HTMLDListElement:A.q,HTMLDataElement:A.q,HTMLDataListElement:A.q,HTMLDetailsElement:A.q,HTMLDialogElement:A.q,HTMLDivElement:A.q,HTMLEmbedElement:A.q,HTMLFieldSetElement:A.q,HTMLHRElement:A.q,HTMLHeadElement:A.q,HTMLHeadingElement:A.q,HTMLHtmlElement:A.q,HTMLIFrameElement:A.q,HTMLInputElement:A.q,HTMLLIElement:A.q,HTMLLabelElement:A.q,HTMLLegendElement:A.q,HTMLLinkElement:A.q,HTMLMapElement:A.q,HTMLMenuElement:A.q,HTMLMetaElement:A.q,HTMLMeterElement:A.q,HTMLModElement:A.q,HTMLOListElement:A.q,HTMLObjectElement:A.q,HTMLOptGroupElement:A.q,HTMLOptionElement:A.q,HTMLOutputElement:A.q,HTMLParagraphElement:A.q,HTMLParamElement:A.q,HTMLPictureElement:A.q,HTMLPreElement:A.q,HTMLProgressElement:A.q,HTMLQuoteElement:A.q,HTMLScriptElement:A.q,HTMLShadowElement:A.q,HTMLSlotElement:A.q,HTMLSourceElement:A.q,HTMLSpanElement:A.q,HTMLStyleElement:A.q,HTMLTableCaptionElement:A.q,HTMLTableCellElement:A.q,HTMLTableDataCellElement:A.q,HTMLTableHeaderCellElement:A.q,HTMLTableColElement:A.q,HTMLTableElement:A.q,HTMLTableRowElement:A.q,HTMLTableSectionElement:A.q,HTMLTemplateElement:A.q,HTMLTextAreaElement:A.q,HTMLTimeElement:A.q,HTMLTitleElement:A.q,HTMLTrackElement:A.q,HTMLUListElement:A.q,HTMLUnknownElement:A.q,HTMLDirectoryElement:A.q,HTMLFontElement:A.q,HTMLFrameElement:A.q,HTMLFrameSetElement:A.q,HTMLMarqueeElement:A.q,HTMLElement:A.q,AccessibleNodeList:A.it,HTMLAnchorElement:A.eL,HTMLAreaElement:A.eM,Blob:A.eR,HTMLBodyElement:A.eS,HTMLCanvasElement:A.c7,CDATASection:A.b4,CharacterData:A.b4,Comment:A.b4,ProcessingInstruction:A.b4,Text:A.b4,CSSPerspective:A.iO,CSSCharsetRule:A.I,CSSConditionRule:A.I,CSSFontFaceRule:A.I,CSSGroupingRule:A.I,CSSImportRule:A.I,CSSKeyframeRule:A.I,MozCSSKeyframeRule:A.I,WebKitCSSKeyframeRule:A.I,CSSKeyframesRule:A.I,MozCSSKeyframesRule:A.I,WebKitCSSKeyframesRule:A.I,CSSMediaRule:A.I,CSSNamespaceRule:A.I,CSSPageRule:A.I,CSSRule:A.I,CSSStyleRule:A.I,CSSSupportsRule:A.I,CSSViewportRule:A.I,CSSStyleDeclaration:A.cL,MSStyleCSSProperties:A.cL,CSS2Properties:A.cL,CSSImageValue:A.aV,CSSKeywordValue:A.aV,CSSNumericValue:A.aV,CSSPositionValue:A.aV,CSSResourceValue:A.aV,CSSUnitValue:A.aV,CSSURLImageValue:A.aV,CSSStyleValue:A.aV,CSSMatrixComponent:A.bi,CSSRotation:A.bi,CSSScale:A.bi,CSSSkew:A.bi,CSSTranslation:A.bi,CSSTransformComponent:A.bi,CSSTransformValue:A.iQ,CSSUnparsedValue:A.iR,DataTransferItemList:A.iS,Document:A.bj,HTMLDocument:A.bj,XMLDocument:A.bj,DOMException:A.bK,ClientRectList:A.dz,DOMRectList:A.dz,DOMRectReadOnly:A.dA,DOMStringList:A.f5,DOMTokenList:A.iT,Element:A.a5,AbortPaymentEvent:A.k,AnimationEvent:A.k,AnimationPlaybackEvent:A.k,ApplicationCacheErrorEvent:A.k,BackgroundFetchClickEvent:A.k,BackgroundFetchEvent:A.k,BackgroundFetchFailEvent:A.k,BackgroundFetchedEvent:A.k,BeforeInstallPromptEvent:A.k,BeforeUnloadEvent:A.k,BlobEvent:A.k,CanMakePaymentEvent:A.k,ClipboardEvent:A.k,CloseEvent:A.k,CustomEvent:A.k,DeviceMotionEvent:A.k,DeviceOrientationEvent:A.k,ErrorEvent:A.k,ExtendableEvent:A.k,ExtendableMessageEvent:A.k,FetchEvent:A.k,FontFaceSetLoadEvent:A.k,ForeignFetchEvent:A.k,GamepadEvent:A.k,HashChangeEvent:A.k,InstallEvent:A.k,MediaEncryptedEvent:A.k,MediaKeyMessageEvent:A.k,MediaQueryListEvent:A.k,MediaStreamEvent:A.k,MediaStreamTrackEvent:A.k,MessageEvent:A.k,MIDIConnectionEvent:A.k,MIDIMessageEvent:A.k,MutationEvent:A.k,NotificationEvent:A.k,PageTransitionEvent:A.k,PaymentRequestEvent:A.k,PaymentRequestUpdateEvent:A.k,PopStateEvent:A.k,PresentationConnectionAvailableEvent:A.k,PresentationConnectionCloseEvent:A.k,ProgressEvent:A.k,PromiseRejectionEvent:A.k,PushEvent:A.k,RTCDataChannelEvent:A.k,RTCDTMFToneChangeEvent:A.k,RTCPeerConnectionIceEvent:A.k,RTCTrackEvent:A.k,SecurityPolicyViolationEvent:A.k,SensorErrorEvent:A.k,SpeechRecognitionError:A.k,SpeechRecognitionEvent:A.k,SpeechSynthesisEvent:A.k,StorageEvent:A.k,SyncEvent:A.k,TrackEvent:A.k,TransitionEvent:A.k,WebKitTransitionEvent:A.k,VRDeviceEvent:A.k,VRDisplayEvent:A.k,VRSessionEvent:A.k,MojoInterfaceRequestEvent:A.k,ResourceProgressEvent:A.k,USBConnectionEvent:A.k,IDBVersionChangeEvent:A.k,AudioProcessingEvent:A.k,OfflineAudioCompletionEvent:A.k,WebGLContextEvent:A.k,Event:A.k,InputEvent:A.k,SubmitEvent:A.k,AbsoluteOrientationSensor:A.e,Accelerometer:A.e,AccessibleNode:A.e,AmbientLightSensor:A.e,Animation:A.e,ApplicationCache:A.e,DOMApplicationCache:A.e,OfflineResourceList:A.e,BackgroundFetchRegistration:A.e,BatteryManager:A.e,BroadcastChannel:A.e,CanvasCaptureMediaStreamTrack:A.e,DedicatedWorkerGlobalScope:A.e,EventSource:A.e,FileReader:A.e,FontFaceSet:A.e,Gyroscope:A.e,LinearAccelerationSensor:A.e,Magnetometer:A.e,MediaDevices:A.e,MediaKeySession:A.e,MediaQueryList:A.e,MediaRecorder:A.e,MediaSource:A.e,MediaStream:A.e,MediaStreamTrack:A.e,MessagePort:A.e,MIDIAccess:A.e,MIDIInput:A.e,MIDIOutput:A.e,MIDIPort:A.e,NetworkInformation:A.e,Notification:A.e,OffscreenCanvas:A.e,OrientationSensor:A.e,PaymentRequest:A.e,Performance:A.e,PermissionStatus:A.e,PresentationAvailability:A.e,PresentationConnection:A.e,PresentationConnectionList:A.e,PresentationRequest:A.e,RelativeOrientationSensor:A.e,RemotePlayback:A.e,RTCDataChannel:A.e,DataChannel:A.e,RTCDTMFSender:A.e,RTCPeerConnection:A.e,webkitRTCPeerConnection:A.e,mozRTCPeerConnection:A.e,ScreenOrientation:A.e,Sensor:A.e,ServiceWorker:A.e,ServiceWorkerContainer:A.e,ServiceWorkerGlobalScope:A.e,ServiceWorkerRegistration:A.e,SharedWorker:A.e,SharedWorkerGlobalScope:A.e,SpeechRecognition:A.e,SpeechSynthesis:A.e,SpeechSynthesisUtterance:A.e,VR:A.e,VRDevice:A.e,VRDisplay:A.e,VRSession:A.e,VisualViewport:A.e,WebSocket:A.e,Worker:A.e,WorkerGlobalScope:A.e,WorkerPerformance:A.e,BluetoothDevice:A.e,BluetoothRemoteGATTCharacteristic:A.e,Clipboard:A.e,MojoInterfaceInterceptor:A.e,USB:A.e,IDBDatabase:A.e,IDBOpenDBRequest:A.e,IDBVersionChangeRequest:A.e,IDBRequest:A.e,IDBTransaction:A.e,EventTarget:A.e,File:A.ay,FileList:A.f8,FileWriter:A.f9,HTMLFormElement:A.fb,Gamepad:A.az,History:A.jd,HTMLCollection:A.cf,HTMLFormControlsCollection:A.cf,HTMLOptionsCollection:A.cf,XMLHttpRequest:A.dG,XMLHttpRequestUpload:A.cg,XMLHttpRequestEventTarget:A.cg,HTMLImageElement:A.cP,KeyboardEvent:A.bm,Location:A.js,HTMLAudioElement:A.cn,HTMLMediaElement:A.cn,MediaList:A.jx,MIDIInputMap:A.fq,MIDIOutputMap:A.fr,MimeType:A.aB,MimeTypeArray:A.fs,MouseEvent:A.aC,DragEvent:A.aC,PointerEvent:A.aC,WheelEvent:A.aC,DocumentFragment:A.w,ShadowRoot:A.w,Attr:A.w,DocumentType:A.w,Node:A.w,NodeList:A.dS,RadioNodeList:A.dS,Plugin:A.aD,PluginArray:A.fJ,RTCStatsReport:A.fO,HTMLSelectElement:A.fQ,SourceBuffer:A.av,SourceBufferList:A.fT,SpeechGrammar:A.aE,SpeechGrammarList:A.fU,SpeechRecognitionResult:A.aF,Storage:A.fY,CSSStyleSheet:A.ag,StyleSheet:A.ag,TextTrack:A.aw,TextTrackCue:A.ab,VTTCue:A.ab,TextTrackCueList:A.h2,TextTrackList:A.h3,TimeRanges:A.kc,Touch:A.aG,TouchList:A.h5,TrackDefaultList:A.kd,CompositionEvent:A.bb,FocusEvent:A.bb,TextEvent:A.bb,TouchEvent:A.bb,UIEvent:A.bb,URL:A.kg,HTMLVideoElement:A.d6,VideoTrackList:A.hd,Window:A.d7,DOMWindow:A.d7,CSSRuleList:A.hm,ClientRect:A.e8,DOMRect:A.e8,GamepadList:A.hz,NamedNodeMap:A.ee,MozNamedAttrMap:A.ee,SpeechRecognitionResultList:A.hU,StyleSheetList:A.i0,SVGLength:A.aO,SVGLengthList:A.fl,SVGNumber:A.aQ,SVGNumberList:A.fE,SVGPointList:A.jR,SVGStringList:A.h_,SVGAElement:A.n,SVGAnimateElement:A.n,SVGAnimateMotionElement:A.n,SVGAnimateTransformElement:A.n,SVGAnimationElement:A.n,SVGCircleElement:A.n,SVGClipPathElement:A.n,SVGDefsElement:A.n,SVGDescElement:A.n,SVGDiscardElement:A.n,SVGEllipseElement:A.n,SVGFEBlendElement:A.n,SVGFEColorMatrixElement:A.n,SVGFEComponentTransferElement:A.n,SVGFECompositeElement:A.n,SVGFEConvolveMatrixElement:A.n,SVGFEDiffuseLightingElement:A.n,SVGFEDisplacementMapElement:A.n,SVGFEDistantLightElement:A.n,SVGFEFloodElement:A.n,SVGFEFuncAElement:A.n,SVGFEFuncBElement:A.n,SVGFEFuncGElement:A.n,SVGFEFuncRElement:A.n,SVGFEGaussianBlurElement:A.n,SVGFEImageElement:A.n,SVGFEMergeElement:A.n,SVGFEMergeNodeElement:A.n,SVGFEMorphologyElement:A.n,SVGFEOffsetElement:A.n,SVGFEPointLightElement:A.n,SVGFESpecularLightingElement:A.n,SVGFESpotLightElement:A.n,SVGFETileElement:A.n,SVGFETurbulenceElement:A.n,SVGFilterElement:A.n,SVGForeignObjectElement:A.n,SVGGElement:A.n,SVGGeometryElement:A.n,SVGGraphicsElement:A.n,SVGImageElement:A.n,SVGLineElement:A.n,SVGLinearGradientElement:A.n,SVGMarkerElement:A.n,SVGMaskElement:A.n,SVGMetadataElement:A.n,SVGPathElement:A.n,SVGPatternElement:A.n,SVGPolygonElement:A.n,SVGPolylineElement:A.n,SVGRadialGradientElement:A.n,SVGRectElement:A.n,SVGScriptElement:A.n,SVGSetElement:A.n,SVGStopElement:A.n,SVGStyleElement:A.n,SVGElement:A.n,SVGSVGElement:A.n,SVGSwitchElement:A.n,SVGSymbolElement:A.n,SVGTSpanElement:A.n,SVGTextContentElement:A.n,SVGTextElement:A.n,SVGTextPathElement:A.n,SVGTextPositioningElement:A.n,SVGTitleElement:A.n,SVGUseElement:A.n,SVGViewElement:A.n,SVGGradientElement:A.n,SVGComponentTransferFunctionElement:A.n,SVGFEDropShadowElement:A.n,SVGMPathElement:A.n,SVGTransform:A.aR,SVGTransformList:A.h6,AudioBuffer:A.b2,AudioBufferSourceNode:A.du,AudioContext:A.c6,webkitAudioContext:A.c6,AnalyserNode:A.H,RealtimeAnalyserNode:A.H,AudioDestinationNode:A.H,AudioWorkletNode:A.H,BiquadFilterNode:A.H,ChannelMergerNode:A.H,AudioChannelMerger:A.H,ChannelSplitterNode:A.H,AudioChannelSplitter:A.H,ConvolverNode:A.H,DelayNode:A.H,DynamicsCompressorNode:A.H,IIRFilterNode:A.H,MediaElementAudioSourceNode:A.H,MediaStreamAudioDestinationNode:A.H,MediaStreamAudioSourceNode:A.H,PannerNode:A.H,AudioPannerNode:A.H,webkitAudioPannerNode:A.H,ScriptProcessorNode:A.H,JavaScriptAudioNode:A.H,StereoPannerNode:A.H,WaveShaperNode:A.H,AudioNode:A.H,AudioParam:A.eN,AudioParamMap:A.eO,ConstantSourceNode:A.bh,OscillatorNode:A.bh,Oscillator:A.bh,AudioScheduledSourceNode:A.bh,AudioTrackList:A.eP,BaseAudioContext:A.dv,GainNode:A.cO,AudioGainNode:A.cO,OfflineAudioContext:A.fF,WebGLBuffer:A.eU,WebGLFramebuffer:A.fc,WebGLProgram:A.fK,WebGL2RenderingContext:A.d_,WebGLTexture:A.bs,WebGLUniformLocation:A.h7,WebGLVertexArrayObject:A.hc})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,AudioParam:true,AudioParamMap:true,ConstantSourceNode:true,OscillatorNode:true,Oscillator:true,AudioScheduledSourceNode:false,AudioTrackList:true,BaseAudioContext:false,GainNode:true,AudioGainNode:true,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true})
A.cU.$nativeSuperclassTag="ArrayBufferView"
A.ef.$nativeSuperclassTag="ArrayBufferView"
A.eg.$nativeSuperclassTag="ArrayBufferView"
A.cp.$nativeSuperclassTag="ArrayBufferView"
A.eh.$nativeSuperclassTag="ArrayBufferView"
A.ei.$nativeSuperclassTag="ArrayBufferView"
A.dQ.$nativeSuperclassTag="ArrayBufferView"
A.ek.$nativeSuperclassTag="EventTarget"
A.el.$nativeSuperclassTag="EventTarget"
A.eq.$nativeSuperclassTag="EventTarget"
A.er.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.mf
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

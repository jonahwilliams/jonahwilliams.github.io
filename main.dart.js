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
a[c]=function(){a[c]=function(){A.rT(b)}
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
if(a[b]!==s)A.rU(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.mO(b)
return new s(c,this)}:function(){if(s===null)s=A.mO(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.mO(a).prototype
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
a(hunkHelpers,v,w,$)}var A={mu:function mu(){},
np(a){return new A.cl("Field '"+a+"' has been assigned during initialization.")},
nq(a){return new A.cl("Field '"+a+"' has not been initialized.")},
bQ(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mB(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
q1(a,b,c){return A.mB(A.bQ(A.bQ(c,a),b))},
eW(a,b,c){return a},
nL(a,b,c,d){A.kn(b,"start")
if(c!=null){A.kn(c,"end")
if(b>c)A.T(A.bp(b,0,c,"start",null))}return new A.ei(a,b,c,d.i("ei<0>"))},
nu(a,b,c,d){if(t.gt.b(a))return new A.dO(a,b,c.i("@<0>").B(d).i("dO<1,2>"))
return new A.cn(a,b,c.i("@<0>").B(d).i("cn<1,2>"))},
mt(){return new A.bq("No element")},
nn(){return new A.bq("Too many elements")},
pE(){return new A.bq("Too few elements")},
pZ(a,b,c){A.hc(a,0,J.an(a)-1,b,c)},
hc(a,b,c,d,e){if(c-b<=32)A.nH(a,b,c,d,e)
else A.nG(a,b,c,d,e)},
nH(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.ax(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.U()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
nG(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.P(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.P(a4+a5,2),f=g-j,e=g+j,d=J.ax(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.U()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.U()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.U()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.U()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.U()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.U()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.U()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.U()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.U()
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
A.hc(a3,a4,r-2,a6,a7)
A.hc(a3,q+2,a5,a6,a7)
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
break}}A.hc(a3,r,q,a6,a7)}else A.hc(a3,r,q,a6,a7)},
cl:function cl(a){this.a=a},
kt:function kt(){},
p:function p(){},
aN:function aN(){},
ei:function ei(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bm:function bm(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cn:function cn(a,b,c){this.a=a
this.b=b
this.$ti=c},
dO:function dO(a,b,c){this.a=a
this.b=b
this.$ti=c},
e3:function e3(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
co:function co(a,b,c){this.a=a
this.b=b
this.$ti=c},
a8:function a8(a,b,c){this.a=a
this.b=b
this.$ti=c},
em:function em(a,b,c){this.a=a
this.b=b
this.$ti=c},
aq:function aq(){},
pB(a){if(typeof a=="number")return B.c.gu(a)
if(t.ha.b(a))return A.ct(a)
return A.lR(a)},
pC(a){return new A.jC(a)},
ot(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
rH(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dz(a)
return s},
ct(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
kj(a){return A.pP(a)},
pP(a){var s,r,q,p
if(a instanceof A.v)return A.am(A.aU(a),null)
if(J.dw(a)===B.dJ||t.cx.b(a)){s=B.aB(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.am(A.aU(a),null)},
d8(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
pW(a){var s=A.d8(a).getUTCFullYear()+0
return s},
pU(a){var s=A.d8(a).getUTCMonth()+1
return s},
pQ(a){var s=A.d8(a).getUTCDate()+0
return s},
pR(a){var s=A.d8(a).getUTCHours()+0
return s},
pT(a){var s=A.d8(a).getUTCMinutes()+0
return s},
pV(a){var s=A.d8(a).getUTCSeconds()+0
return s},
pS(a){var s=A.d8(a).getUTCMilliseconds()+0
return s},
cI(a){throw A.d(A.of(a))},
b(a,b){if(a==null)J.an(a)
throw A.d(A.dv(a,b))},
dv(a,b){var s,r="index"
if(!A.mL(b))return new A.b3(!0,b,r,null)
s=A.J(J.an(a))
if(b<0||b>=s)return A.R(b,a,r,null,s)
return A.nB(b,r)},
of(a){return new A.b3(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.fW()
s=new Error()
s.dartException=a
r=A.rV
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
rV(){return J.dz(this.dartException)},
T(a){throw A.d(a)},
C(a){throw A.d(A.bg(a))},
bt(a){var s,r,q,p,o,n
a=A.rP(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.kK(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
kL(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
nO(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mv(a,b){var s=b==null,r=s?null:b.method
return new A.fB(a,r,s?null:b.receiver)},
b2(a){if(a==null)return new A.ke(a)
if(a instanceof A.dQ)return A.c5(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.c5(a,a.dartException)
return A.re(a)},
c5(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
re(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.cu(r,16)&8191)===10)switch(q){case 438:return A.c5(a,A.mv(A.w(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.w(s)+" (Error "+q+")"
return A.c5(a,new A.e9(p,e))}}if(a instanceof TypeError){o=$.oF()
n=$.oG()
m=$.oH()
l=$.oI()
k=$.oL()
j=$.oM()
i=$.oK()
$.oJ()
h=$.oO()
g=$.oN()
f=o.X(s)
if(f!=null)return A.c5(a,A.mv(A.P(s),f))
else{f=n.X(s)
if(f!=null){f.method="call"
return A.c5(a,A.mv(A.P(s),f))}else{f=m.X(s)
if(f==null){f=l.X(s)
if(f==null){f=k.X(s)
if(f==null){f=j.X(s)
if(f==null){f=i.X(s)
if(f==null){f=l.X(s)
if(f==null){f=h.X(s)
if(f==null){f=g.X(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.P(s)
return A.c5(a,new A.e9(s,f==null?e:f.method))}}}return A.c5(a,new A.hv(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.eh()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.c5(a,new A.b3(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.eh()
return a},
bC(a){var s
if(a instanceof A.dQ)return a.b
if(a==null)return new A.eF(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.eF(a)},
lR(a){if(a==null||typeof a!="object")return J.cK(a)
else return A.ct(a)},
oh(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
rF(a,b,c,d,e,f){t.U.a(a)
switch(A.J(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.mq("Unsupported number of arguments for wrapped closure"))},
be(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.rF)
a.$identity=s
return s},
pp(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.hh().constructor.prototype):Object.create(new A.cR(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.nf(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.pl(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.nf(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
pl(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.pj)}throw A.d("Error in functionType of tearoff")},
pm(a,b,c,d){var s=A.nd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
nf(a,b,c,d){var s,r
if(c)return A.po(a,b,d)
s=b.length
r=A.pm(s,d,a,b)
return r},
pn(a,b,c,d){var s=A.nd,r=A.pk
switch(b?-1:a){case 0:throw A.d(new A.ha("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
po(a,b,c){var s,r,q,p=$.nb
p==null?$.nb=A.na("interceptor"):p
s=$.nc
s==null?$.nc=A.na("receiver"):s
r=b.length
q=A.pn(r,c,a,b)
return q},
mO(a){return A.pp(a)},
pj(a,b){return A.ls(v.typeUniverse,A.aU(a.a),b)},
nd(a){return a.a},
pk(a){return a.b},
na(a){var s,r,q,p=new A.cR("receiver","interceptor"),o=J.no(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.cN("Field name "+a+" not found.",null))},
N(a){if(a==null)A.rf("boolean expression must not be null")
return a},
rf(a){throw A.d(new A.hC(a))},
rT(a){throw A.d(new A.fi(a))},
rx(a){return v.getIsolateTag(a)},
u1(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
rK(a){var s,r,q,p,o,n=A.P($.oi.$1(a)),m=$.lH[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lO[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.o3($.oe.$2(a,n))
if(q!=null){m=$.lH[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lO[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.lQ(s)
$.lH[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.lO[n]=s
return s}if(p==="-"){o=A.lQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.oo(a,s)
if(p==="*")throw A.d(A.mC(n))
if(v.leafTags[n]===true){o=A.lQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.oo(a,s)},
oo(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.mR(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lQ(a){return J.mR(a,!1,null,!!a.$iA)},
rL(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.lQ(s)
else return J.mR(s,c,null,null)},
rD(){if(!0===$.mP)return
$.mP=!0
A.rE()},
rE(){var s,r,q,p,o,n,m,l
$.lH=Object.create(null)
$.lO=Object.create(null)
A.rC()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.op.$1(o)
if(n!=null){m=A.rL(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
rC(){var s,r,q,p,o,n,m=B.bP()
m=A.du(B.bQ,A.du(B.bR,A.du(B.aC,A.du(B.aC,A.du(B.bS,A.du(B.bT,A.du(B.bU(B.aB),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.oi=new A.lL(p)
$.oe=new A.lM(o)
$.op=new A.lN(n)},
du(a,b){return a(b)||b},
rS(a,b,c){var s=a.indexOf(b,c)
return s>=0},
rP(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cU:function cU(){},
dK:function dK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aa:function aa(a,b){this.a=a
this.$ti=b},
jC:function jC(a){this.a=a},
kK:function kK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e9:function e9(a,b){this.a=a
this.b=b},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a){this.a=a},
ke:function ke(a){this.a=a},
dQ:function dQ(a,b){this.a=a
this.b=b},
eF:function eF(a){this.a=a
this.b=null},
cb:function cb(){},
fc:function fc(){},
fd:function fd(){},
hn:function hn(){},
hh:function hh(){},
cR:function cR(a,b){this.a=a
this.b=b},
ha:function ha(a){this.a=a},
hC:function hC(a){this.a=a},
aA:function aA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jP:function jP(a){this.a=a},
jO:function jO(a){this.a=a},
jR:function jR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dZ:function dZ(a,b){this.a=a
this.$ti=b},
e_:function e_(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lL:function lL(a){this.a=a},
lM:function lM(a){this.a=a},
lN:function lN(a){this.a=a},
rU(a){return A.T(A.np(a))},
mD(a){var s=new A.l0(a)
return s.b=s},
c1(a,b){if(a===$)throw A.d(A.nq(b))
return a},
dr(a,b){if(a!==$)throw A.d(A.np(b))},
l0:function l0(a){this.a=a
this.b=null},
o4(a,b,c){},
cG(a){return a},
nv(a){return new Float32Array(A.cG(a))},
k9(a,b,c){A.o4(a,b,c)
return new Float32Array(a,b,c)},
nw(a,b,c){var s
A.o4(a,b,c)
s=new Uint8Array(a,b,c)
return s},
pN(a){return new Uint8Array(a)},
by(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.dv(b,a))},
fM:function fM(){},
cs:function cs(){},
d4:function d4(){},
cr:function cr(){},
e5:function e5(){},
e4:function e4(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
d5:function d5(){},
e6:function e6(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
nD(a,b){var s=b.c
return s==null?b.c=A.mI(a,b.z,!0):s},
nC(a,b){var s=b.c
return s==null?b.c=A.eO(a,"ar",[b.z]):s},
nE(a){var s=a.y
if(s===6||s===7||s===8)return A.nE(a.z)
return s===11||s===12},
pY(a){return a.cy},
aw(a){return A.iE(v.typeUniverse,a,!1)},
c2(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.c2(a,s,a0,a1)
if(r===s)return b
return A.o_(a,r,!0)
case 7:s=b.z
r=A.c2(a,s,a0,a1)
if(r===s)return b
return A.mI(a,r,!0)
case 8:s=b.z
r=A.c2(a,s,a0,a1)
if(r===s)return b
return A.nZ(a,r,!0)
case 9:q=b.Q
p=A.eV(a,q,a0,a1)
if(p===q)return b
return A.eO(a,b.z,p)
case 10:o=b.z
n=A.c2(a,o,a0,a1)
m=b.Q
l=A.eV(a,m,a0,a1)
if(n===o&&l===m)return b
return A.mG(a,n,l)
case 11:k=b.z
j=A.c2(a,k,a0,a1)
i=b.Q
h=A.rb(a,i,a0,a1)
if(j===k&&h===i)return b
return A.nY(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.eV(a,g,a0,a1)
o=b.z
n=A.c2(a,o,a0,a1)
if(f===g&&n===o)return b
return A.mH(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.iX("Attempted to substitute unexpected RTI kind "+c))}},
eV(a,b,c,d){var s,r,q,p,o=b.length,n=A.lu(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.c2(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
rc(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.lu(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.c2(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
rb(a,b,c,d){var s,r=b.a,q=A.eV(a,r,c,d),p=b.b,o=A.eV(a,p,c,d),n=b.c,m=A.rc(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.hW()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
rn(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.ry(s)
return a.$S()}return null},
oj(a,b){var s
if(A.nE(b))if(a instanceof A.cb){s=A.rn(a)
if(s!=null)return s}return A.aU(a)},
aU(a){var s
if(a instanceof A.v){s=a.$ti
return s!=null?s:A.mJ(a)}if(Array.isArray(a))return A.W(a)
return A.mJ(J.dw(a))},
W(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
B(a){var s=a.$ti
return s!=null?s:A.mJ(a)},
mJ(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.qS(a,s)},
qS(a,b){var s=a instanceof A.cb?a.__proto__.__proto__.constructor:b,r=A.qx(v.typeUniverse,s.name)
b.$ccache=r
return r},
ry(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.iE(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
rq(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.eM(a)
q=A.iE(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.eM(q):p},
rW(a){return A.rq(A.iE(v.typeUniverse,a,!1))},
qR(a){var s,r,q,p,o=this
if(o===t.K)return A.dq(o,a,A.qW)
if(!A.bD(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.dq(o,a,A.qZ)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.mL
else if(r===t.i||r===t.cZ)q=A.qV
else if(r===t.N)q=A.qX
else q=r===t.k4?A.ly:null
if(q!=null)return A.dq(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.rI)){o.r="$i"+p
if(p==="n")return A.dq(o,a,A.qU)
return A.dq(o,a,A.qY)}}else if(s===7)return A.dq(o,a,A.qP)
return A.dq(o,a,A.qN)},
dq(a,b,c){a.b=c
return a.b(b)},
qQ(a){var s,r=this,q=A.qM
if(!A.bD(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.qB
else if(r===t.K)q=A.qA
else{s=A.eX(r)
if(s)q=A.qO}r.a=q
return r.a(a)},
lz(a){var s,r=a.y
if(!A.bD(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&A.lz(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qN(a){var s=this
if(a==null)return A.lz(s)
return A.S(v.typeUniverse,A.oj(a,s),null,s,null)},
qP(a){if(a==null)return!0
return this.z.b(a)},
qY(a){var s,r=this
if(a==null)return A.lz(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dw(a)[s]},
qU(a){var s,r=this
if(a==null)return A.lz(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dw(a)[s]},
qM(a){var s,r=this
if(a==null){s=A.eX(r)
if(s)return a}else if(r.b(a))return a
A.o7(a,r)},
qO(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.o7(a,s)},
o7(a,b){throw A.d(A.nX(A.nQ(a,A.oj(a,b),A.am(b,null))))},
rm(a,b,c,d){var s=null
if(A.S(v.typeUniverse,a,s,b,s))return a
throw A.d(A.nX("The type argument '"+A.am(a,s)+"' is not a subtype of the type variable bound '"+A.am(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
nQ(a,b,c){var s=A.fo(a),r=A.am(b==null?A.aU(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
nX(a){return new A.eN("TypeError: "+a)},
ak(a,b){return new A.eN("TypeError: "+A.nQ(a,null,b))},
qW(a){return a!=null},
qA(a){if(a!=null)return a
throw A.d(A.ak(a,"Object"))},
qZ(a){return!0},
qB(a){return a},
ly(a){return!0===a||!1===a},
qz(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.ak(a,"bool"))},
tP(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.ak(a,"bool"))},
tO(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.ak(a,"bool?"))},
o2(a){if(typeof a=="number")return a
throw A.d(A.ak(a,"double"))},
tR(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ak(a,"double"))},
tQ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ak(a,"double?"))},
mL(a){return typeof a=="number"&&Math.floor(a)===a},
J(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.ak(a,"int"))},
tT(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.ak(a,"int"))},
tS(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.ak(a,"int?"))},
qV(a){return typeof a=="number"},
b0(a){if(typeof a=="number")return a
throw A.d(A.ak(a,"num"))},
tV(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ak(a,"num"))},
tU(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ak(a,"num?"))},
qX(a){return typeof a=="string"},
P(a){if(typeof a=="string")return a
throw A.d(A.ak(a,"String"))},
tW(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.ak(a,"String"))},
o3(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.ak(a,"String?"))},
r7(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.am(a[q],b)
return s},
o8(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.c([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.k(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.b(a5,j)
m=B.w.E(m,a5[j])
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
if(l===9){p=A.rd(a.z)
o=a.Q
return o.length>0?p+("<"+A.r7(o,b)+">"):p}if(l===11)return A.o8(a,b,null)
if(l===12)return A.o8(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
rd(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
qy(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
qx(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.iE(a,b,!1)
else if(typeof m=="number"){s=m
r=A.eP(a,5,"#")
q=A.lu(s)
for(p=0;p<s;++p)q[p]=r
o=A.eO(a,b,q)
n[b]=o
return o}else return m},
qv(a,b){return A.o0(a.tR,b)},
qu(a,b){return A.o0(a.eT,b)},
iE(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.nU(A.nS(a,null,b,c))
r.set(b,s)
return s},
ls(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.nU(A.nS(a,b,c,!0))
q.set(c,r)
return r},
qw(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.mG(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
c0(a,b){b.a=A.qQ
b.b=A.qR
return b},
eP(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aY(null,null)
s.y=b
s.cy=c
r=A.c0(a,s)
a.eC.set(c,r)
return r},
o_(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.qs(a,b,r,c)
a.eC.set(r,s)
return s},
qs(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bD(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.aY(null,null)
q.y=6
q.z=b
q.cy=c
return A.c0(a,q)},
mI(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.qr(a,b,r,c)
a.eC.set(r,s)
return s},
qr(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.bD(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.eX(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.eX(q.z))return q
else return A.nD(a,b)}}p=new A.aY(null,null)
p.y=7
p.z=b
p.cy=c
return A.c0(a,p)},
nZ(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.qp(a,b,r,c)
a.eC.set(r,s)
return s},
qp(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bD(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.eO(a,"ar",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.aY(null,null)
q.y=8
q.z=b
q.cy=c
return A.c0(a,q)},
qt(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aY(null,null)
s.y=13
s.z=b
s.cy=q
r=A.c0(a,s)
a.eC.set(q,r)
return r},
iD(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
qo(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
eO(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iD(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aY(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.c0(a,r)
a.eC.set(p,q)
return q},
mG(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.iD(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aY(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.c0(a,o)
a.eC.set(q,n)
return n},
nY(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iD(m)
if(j>0){s=l>0?",":""
r=A.iD(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.qo(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aY(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.c0(a,o)
a.eC.set(q,r)
return r},
mH(a,b,c,d){var s,r=b.cy+("<"+A.iD(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.qq(a,b,c,r,d)
a.eC.set(r,s)
return s},
qq(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.lu(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.c2(a,b,r,0)
m=A.eV(a,c,r,0)
return A.mH(a,n,m,c!==m)}}l=new A.aY(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.c0(a,l)},
nS(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nU(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.qi(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.nT(a,r,h,g,!1)
else if(q===46)r=A.nT(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.bY(a.u,a.e,g.pop()))
break
case 94:g.push(A.qt(a.u,g.pop()))
break
case 35:g.push(A.eP(a.u,5,"#"))
break
case 64:g.push(A.eP(a.u,2,"@"))
break
case 126:g.push(A.eP(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.mF(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.eO(p,n,o))
else{m=A.bY(p,a.e,n)
switch(m.y){case 11:g.push(A.mH(p,m,o,a.n))
break
default:g.push(A.mG(p,m,o))
break}}break
case 38:A.qj(a,g)
break
case 42:p=a.u
g.push(A.o_(p,A.bY(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.mI(p,A.bY(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.nZ(p,A.bY(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.hW()
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
A.mF(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.nY(p,A.bY(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.mF(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.ql(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.bY(a.u,a.e,i)},
qi(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
nT(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.qy(s,o.z)[p]
if(n==null)A.T('No "'+p+'" in "'+A.pY(o)+'"')
d.push(A.ls(s,o,n))}else d.push(p)
return m},
qj(a,b){var s=b.pop()
if(0===s){b.push(A.eP(a.u,1,"0&"))
return}if(1===s){b.push(A.eP(a.u,4,"1&"))
return}throw A.d(A.iX("Unexpected extended operation "+A.w(s)))},
bY(a,b,c){if(typeof c=="string")return A.eO(a,c,a.sEA)
else if(typeof c=="number")return A.qk(a,b,c)
else return c},
mF(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bY(a,b,c[s])},
ql(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bY(a,b,c[s])},
qk(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.d(A.iX("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.d(A.iX("Bad index "+c+" for "+b.l(0)))},
S(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.bD(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.bD(b))return!1
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
if(p===6){s=A.nD(a,d)
return A.S(a,b,c,s,e)}if(r===8){if(!A.S(a,b.z,c,d,e))return!1
return A.S(a,A.nC(a,b),c,d,e)}if(r===7){s=A.S(a,t.P,c,d,e)
return s&&A.S(a,b.z,c,d,e)}if(p===8){if(A.S(a,b,c,d.z,e))return!0
return A.S(a,b,c,A.nC(a,d),e)}if(p===7){s=A.S(a,b,c,t.P,e)
return s||A.S(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.U)return!0
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
if(!A.S(a,k,c,j,e)||!A.S(a,j,e,k,c))return!1}return A.o9(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.o9(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.qT(a,b,c,d,e)}return!1},
o9(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
qT(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.ls(a,b,r[o])
return A.o1(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.o1(a,n,null,c,m,e)},
o1(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.S(a,r,d,q,f))return!1}return!0},
eX(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.bD(a))if(r!==7)if(!(r===6&&A.eX(a.z)))s=r===8&&A.eX(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
rI(a){var s
if(!A.bD(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bD(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.iD},
o0(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
lu(a){return a>0?new Array(a):v.typeUniverse.sEA},
aY:function aY(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
hW:function hW(){this.c=this.b=this.a=null},
eM:function eM(a){this.a=a},
hS:function hS(){},
eN:function eN(a){this.a=a},
q7(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.rg()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.be(new A.kY(q),1)).observe(s,{childList:true})
return new A.kX(q,s,r)}else if(self.setImmediate!=null)return A.rh()
return A.ri()},
q8(a){self.scheduleImmediate(A.be(new A.kZ(t.M.a(a)),0))},
q9(a){self.setImmediate(A.be(new A.l_(t.M.a(a)),0))},
qa(a){t.M.a(a)
A.qm(0,a)},
nM(a,b){var s=B.d.P(a.a,1000)
return A.qn(s<0?0:s,b)},
qm(a,b){var s=new A.eL(!0)
s.dL(a,b)
return s},
qn(a,b){var s=new A.eL(!1)
s.dM(a,b)
return s},
bA(a){return new A.hD(new A.I($.E,a.i("I<0>")),a.i("hD<0>"))},
bx(a,b){a.$2(0,null)
b.b=!0
return b.a},
al(a,b){A.qC(a,b)},
bw(a,b){b.a1(0,a)},
bv(a,b){b.bp(A.b2(a),A.bC(a))},
qC(a,b){var s,r,q=new A.lw(b),p=new A.lx(b)
if(a instanceof A.I)a.cw(q,p,t.z)
else{s=t.z
if(t.g7.b(a))a.aQ(q,p,s)
else{r=new A.I($.E,t.p)
r.a=8
r.c=a
r.cw(q,p,s)}}},
bB(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.E.bG(new A.lB(s),t.H,t.S,t.z)},
tN(a){return new A.dn(a,1)},
qf(){return B.eH},
qg(a){return new A.dn(a,3)},
r1(a,b){return new A.eI(a,b.i("eI<0>"))},
iY(a,b){var s=A.eW(a,"error",t.K)
return new A.dF(s,b==null?A.ml(a):b)},
ml(a){var s
if(t.fz.b(a)){s=a.gaB()
if(s!=null)return s}return B.bX},
pz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=null,e=!1,d=b.i("I<n<0>>"),c=new A.I($.E,d)
g.a=null
g.b=0
s=A.mD("error")
r=A.mD("stackTrace")
q=new A.jA(g,f,e,c,s,r)
try{for(l=a.length,k=t.P,j=0,i=0;j<a.length;a.length===l||(0,A.C)(a),++j){p=a[j]
o=i
p.aQ(new A.jz(g,o,c,f,e,s,r,b),q,k)
i=++g.b}if(i===0){l=c
l.as(A.c([],b.i("t<0>")))
return l}g.a=A.b9(i,null,!1,b.i("0?"))}catch(h){n=A.b2(h)
m=A.bC(h)
if(g.b===0||A.N(e)){l=n
r=m
A.eW(l,"error",t.K)
$.E!==B.j
if(r==null)r=A.ml(l)
d=new A.I($.E,d)
d.b0(l,r)
return d}else{s.b=n
r.b=m}}return c},
l6(a,b){var s,r,q
for(s=t.p;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aH()
b.b2(a)
A.dm(b,q)}else{q=t.d.a(b.c)
b.a=b.a&1|4
b.c=a
a.cq(q)}},
dm(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.d,q=t.g7;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.iP(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.dm(c.a,b)
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
A.iP(i.a,i.b)
return}f=$.E
if(f!==g)$.E=g
else f=null
b=b.c
if((b&15)===8)new A.le(p,c,m).$0()
else if(n){if((b&1)!==0)new A.ld(p,i).$0()}else if((b&2)!==0)new A.lc(c,p).$0()
if(f!=null)$.E=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("ar<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.aI(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.l6(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.aI(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
r5(a,b){var s
if(t.ng.b(a))return b.bG(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.n7(a,"onError",u.c))},
r2(){var s,r
for(s=$.ds;s!=null;s=$.ds){$.eU=null
r=s.b
$.ds=r
if(r==null)$.eT=null
s.a.$0()}},
ra(){$.mK=!0
try{A.r2()}finally{$.eU=null
$.mK=!1
if($.ds!=null)$.mV().$1(A.og())}},
oc(a){var s=new A.hE(a),r=$.eT
if(r==null){$.ds=$.eT=s
if(!$.mK)$.mV().$1(A.og())}else $.eT=r.b=s},
r8(a){var s,r,q,p=$.ds
if(p==null){A.oc(a)
$.eU=$.eT
return}s=new A.hE(a)
r=$.eU
if(r==null){s.b=p
$.ds=$.eU=s}else{q=r.b
s.b=q
$.eU=r.b=s
if(q==null)$.eT=s}},
oq(a){var s=null,r=$.E
if(B.j===r){A.dt(s,s,B.j,a)
return}A.dt(s,s,r,t.M.a(r.cF(a)))},
tx(a,b){A.eW(a,"stream",t.K)
return new A.im(b.i("im<0>"))},
nJ(a){return new A.dj(null,null,null,a.i("dj<0>"))},
mN(a){return},
qb(a,b){if(b==null)b=A.rk()
if(t.fQ.b(b))return a.bG(b,t.z,t.K,t.l)
if(t.i6.b(b))return t.y.a(b)
throw A.d(A.cN("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
r4(a,b){A.iP(a,b)},
r3(){},
q2(a,b){var s=$.E
if(s===B.j)return A.nM(a,t.my.a(b))
return A.nM(a,t.my.a(s.cG(b,t.iK)))},
iP(a,b){A.r8(new A.lA(a,b))},
oa(a,b,c,d,e){var s,r=$.E
if(r===c)return d.$0()
$.E=c
s=r
try{r=d.$0()
return r}finally{$.E=s}},
ob(a,b,c,d,e,f,g){var s,r=$.E
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
dt(a,b,c,d){t.M.a(d)
if(B.j!==c)d=c.cF(d)
A.oc(d)},
kY:function kY(a){this.a=a},
kX:function kX(a,b,c){this.a=a
this.b=b
this.c=c},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
eL:function eL(a){this.a=a
this.b=null
this.c=0},
lr:function lr(a,b){this.a=a
this.b=b},
lq:function lq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hD:function hD(a,b){this.a=a
this.b=!1
this.$ti=b},
lw:function lw(a){this.a=a},
lx:function lx(a){this.a=a},
lB:function lB(a){this.a=a},
dn:function dn(a,b){this.a=a
this.b=b},
c_:function c_(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
eI:function eI(a,b){this.a=a
this.$ti=b},
dF:function dF(a,b){this.a=a
this.b=b},
jA:function jA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jz:function jz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
eo:function eo(){},
aT:function aT(a,b){this.a=a
this.$ti=b},
dp:function dp(a,b){this.a=a
this.$ti=b},
cB:function cB(a,b,c,d,e){var _=this
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
l3:function l3(a,b){this.a=a
this.b=b},
lb:function lb(a,b){this.a=a
this.b=b},
l7:function l7(a){this.a=a},
l8:function l8(a){this.a=a},
l9:function l9(a,b,c){this.a=a
this.b=b
this.c=c},
l5:function l5(a,b){this.a=a
this.b=b},
la:function la(a,b){this.a=a
this.b=b},
l4:function l4(a,b,c){this.a=a
this.b=b
this.c=c},
le:function le(a,b,c){this.a=a
this.b=b
this.c=c},
lf:function lf(a){this.a=a},
ld:function ld(a,b){this.a=a
this.b=b},
lc:function lc(a,b){this.a=a
this.b=b},
hE:function hE(a){this.a=a
this.b=null},
cu:function cu(){},
kB:function kB(a,b){this.a=a
this.b=b},
kC:function kC(a,b){this.a=a
this.b=b},
br:function br(){},
eG:function eG(){},
lo:function lo(a){this.a=a},
hF:function hF(){},
dj:function dj(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
bW:function bW(a,b){this.a=a
this.$ti=b},
dl:function dl(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
en:function en(){},
eH:function eH(){},
hM:function hM(){},
cy:function cy(a,b){this.b=a
this.a=null
this.$ti=b},
bZ:function bZ(){},
lj:function lj(a,b){this.a=a
this.b=b},
bd:function bd(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
im:function im(a){this.$ti=a},
eR:function eR(){},
lA:function lA(a,b){this.a=a
this.b=b},
id:function id(){},
lk:function lk(a,b){this.a=a
this.b=b},
ll:function ll(a,b,c){this.a=a
this.b=b
this.c=c},
mw(a,b,c,d){if(b==null){if(a==null)return new A.aA(c.i("@<0>").B(d).i("aA<1,2>"))}else if(a==null)a=A.rp()
return A.qh(A.ro(),a,b,c,d)},
bl(a,b,c){return b.i("@<0>").B(c).i("jQ<1,2>").a(A.oh(a,new A.aA(b.i("@<0>").B(c).i("aA<1,2>"))))},
a7(a,b){return new A.aA(a.i("@<0>").B(b).i("aA<1,2>"))},
qh(a,b,c,d,e){var s=c!=null?c:new A.lh(d)
return new A.et(a,b,s,d.i("@<0>").B(e).i("et<1,2>"))},
jT(a){return new A.cD(a.i("cD<0>"))},
jU(a){return new A.cD(a.i("cD<0>"))},
mE(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
qI(a,b){return J.Z(a,b)},
qJ(a){return J.cK(a)},
nm(a,b,c){var s,r
if(A.mM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.k($.aH,a)
try{A.r_(a,s)}finally{if(0>=$.aH.length)return A.b($.aH,-1)
$.aH.pop()}r=A.nK(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
ms(a,b,c){var s,r
if(A.mM(a))return b+"..."+c
s=new A.hj(b)
B.a.k($.aH,a)
try{r=s
r.a=A.nK(r.a,a,", ")}finally{if(0>=$.aH.length)return A.b($.aH,-1)
$.aH.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mM(a){var s,r
for(s=$.aH.length,r=0;r<s;++r)if(a===$.aH[r])return!0
return!1},
r_(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.w(l.gp(l))
B.a.k(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gp(l);++j
if(!l.n()){if(j<=4){B.a.k(b,A.w(p))
return}r=A.w(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp(l);++j
for(;l.n();p=o,o=n){n=l.gp(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.w(p)
r=A.w(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
pJ(a,b,c){var s=A.mw(null,null,b,c)
a.C(0,new A.jS(s,b,c))
return s},
nr(a,b,c){var s=A.mw(null,null,b,c)
s.G(0,a)
return s},
ns(a,b){var s,r,q=A.jT(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.C)(a),++r)q.k(0,b.a(a[r]))
return q},
my(a){var s,r={}
if(A.mM(a))return"{...}"
s=new A.hj("")
try{B.a.k($.aH,a)
s.a+="{"
r.a=!0
J.pc(a,new A.jW(r,s))
s.a+="}"}finally{if(0>=$.aH.length)return A.b($.aH,-1)
$.aH.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
li:function li(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
et:function et(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
lh:function lh(a){this.a=a},
cD:function cD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i2:function i2(a){this.a=a
this.b=null},
eu:function eu(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dV:function dV(){},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
e0:function e0(){},
k:function k(){},
e2:function e2(){},
jW:function jW(a,b){this.a=a
this.b=b},
x:function x(){},
jY:function jY(a){this.a=a},
ef:function ef(){},
eB:function eB(){},
ev:function ev(){},
eS:function eS(){},
py(a){if(a instanceof A.cb)return a.l(0)
return"Instance of '"+A.kj(a)+"'"},
b9(a,b,c,d){var s,r=J.pF(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
pL(a,b){var s,r=A.c([],b.i("t<0>"))
for(s=J.ae(a);s.n();)B.a.k(r,b.a(s.gp(s)))
return r},
nt(a,b,c){var s=A.pK(a,c)
return s},
pK(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("t<0>"))
s=A.c([],b.i("t<0>"))
for(r=J.ae(a);r.n();)B.a.k(s,r.gp(r))
return s},
mx(a,b,c){var s,r=J.pG(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
nK(a,b,c){var s=J.ae(b)
if(!s.n())return a
if(c.length===0){do a+=A.w(s.gp(s))
while(s.n())}else{a+=A.w(s.gp(s))
for(;s.n();)a=a+c+A.w(s.gp(s))}return a},
pr(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
ps(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
fj(a){if(a>=10)return""+a
return"0"+a},
jo(a){return new A.ag(1000*a)},
fo(a){if(typeof a=="number"||A.ly(a)||a==null)return J.dz(a)
if(typeof a=="string")return JSON.stringify(a)
return A.py(a)},
iX(a){return new A.dE(a)},
cN(a,b){return new A.b3(!1,null,b,a)},
n7(a,b,c){return new A.b3(!0,a,b,c)},
pX(a){var s=null
return new A.d9(s,s,!1,s,s,a)},
nB(a,b){return new A.d9(null,null,!0,a,b,"Value not in range")},
bp(a,b,c,d,e){return new A.d9(b,c,!0,a,d,"Invalid value")},
mA(a,b,c){if(0>a||a>c)throw A.d(A.bp(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.bp(b,a,c,"end",null))
return b}return c},
kn(a,b){if(a<0)throw A.d(A.bp(a,0,null,b,null))
return a},
R(a,b,c,d,e){var s=A.J(e==null?J.an(b):e)
return new A.fx(s,!0,a,c,"Index out of range")},
D(a){return new A.hx(a)},
mC(a){return new A.hu(a)},
a5(a){return new A.bq(a)},
bg(a){return new A.ff(a)},
mq(a){return new A.hT(a)},
kf(a,b,c,d){var s,r
if(B.B===c)return A.q1(B.c.gu(a),B.c.gu(b),$.mi())
if(B.B===d){s=B.c.gu(a)
b=B.c.gu(b)
c=J.cK(c)
return A.mB(A.bQ(A.bQ(A.bQ($.mi(),s),b),c))}s=B.c.gu(a)
b=B.c.gu(b)
c=J.cK(c)
d=J.cK(d)
r=$.mi()
return A.mB(A.bQ(A.bQ(A.bQ(A.bQ(r,s),b),c),d))},
iQ(a){A.mS(A.w(a))},
cd:function cd(a,b){this.a=a
this.b=b},
ag:function ag(a){this.a=a},
l1:function l1(){},
K:function K(){},
dE:function dE(a){this.a=a},
bU:function bU(){},
fW:function fW(){},
b3:function b3(a,b,c,d){var _=this
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
fx:function fx(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hx:function hx(a){this.a=a},
hu:function hu(a){this.a=a},
bq:function bq(a){this.a=a},
ff:function ff(a){this.a=a},
fZ:function fZ(){},
eh:function eh(){},
fi:function fi(a){this.a=a},
hT:function hT(a){this.a=a},
h:function h(){},
U:function U(){},
d1:function d1(a,b,c){this.a=a
this.b=b
this.$ti=c},
V:function V(){},
v:function v(){},
iq:function iq(){},
hj:function hj(a){this.a=a},
rt(){return document},
pv(a,b,c){var s,r=document.body
r.toString
s=t.e0
s=new A.a8(new A.aj(B.aA.T(r,a,b,c)),s.i("z(k.E)").a(new A.jr()),s.i("a8<k.E>"))
return t.h.a(s.ga9(s))},
dP(a){var s,r,q="element tag unavailable"
try{s=J.c4(a)
s.gda(a)
q=s.gda(a)}catch(r){}return q},
cA(a,b,c,d,e){var s=A.od(new A.l2(c),t.R)
if(s!=null&&!0)J.pa(a,b,s,!1)
return new A.er(a,b,s,!1,e.i("er<0>"))},
nR(a){var s=document.createElement("a"),r=new A.ig(s,t.oH.a(window.location))
r=new A.cC(r)
r.dJ(a)
return r},
qd(a,b,c,d){t.h.a(a)
A.P(b)
A.P(c)
t.dl.a(d)
return!0},
qe(a,b,c,d){var s,r,q
t.h.a(a)
A.P(b)
A.P(c)
s=t.dl.a(d).a
r=s.a
B.bq.sf3(r,c)
q=r.hostname
s=s.b
if(!(q==s.hostname&&r.port===s.port&&r.protocol===s.protocol))if(q==="")if(r.port===""){s=r.protocol
s=s===":"||s===""}else s=!1
else s=!1
else s=!0
return s},
nW(){var s=t.N,r=A.ns(B.aY,s),q=t.gL.a(new A.lp()),p=A.c(["TEMPLATE"],t.s)
s=new A.it(r,A.jT(s),A.jT(s),A.jT(s),null)
s.dK(null,new A.co(B.aY,q,t.gQ),p,null)
return s},
qE(a){var s
if("postMessage" in a){s=A.qc(a)
return s}else return t.iB.a(a)},
qF(a){var s
if(t.dA.b(a))return a
s=new A.kV([],[])
s.c=!0
return s.bP(a)},
qc(a){if(a===window)return t.kg.a(a)
else return new A.hL()},
od(a,b){var s=$.E
if(s===B.j)return a
return s.cG(a,b)},
u:function u(){},
iU:function iU(){},
cM:function cM(){},
f3:function f3(){},
cQ:function cQ(){},
f8:function f8(){},
c7:function c7(){},
c8:function c8(){},
cS:function cS(){},
b6:function b6(){},
jf:function jf(){},
G:function G(){},
cV:function cV(){},
jg:function jg(){},
aV:function aV(){},
bh:function bh(){},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
cW:function cW(){},
b8:function b8(){},
bK:function bK(){},
fl:function fl(){},
dM:function dM(){},
dN:function dN(){},
fm:function fm(){},
jk:function jk(){},
M:function M(){},
jr:function jr(){},
l:function l(){},
e:function e(){},
ay:function ay(){},
fp:function fp(){},
fq:function fq(){},
fs:function fs(){},
az:function az(){},
jG:function jG(){},
ch:function ch(){},
dT:function dT(){},
dU:function dU(){},
ci:function ci(){},
d_:function d_(){},
bk:function bk(){},
e1:function e1(){},
cq:function cq(){},
k_:function k_(){},
fI:function fI(){},
k2:function k2(a){this.a=a},
fJ:function fJ(){},
k3:function k3(a){this.a=a},
aB:function aB(){},
fK:function fK(){},
as:function as(){},
aj:function aj(a){this.a=a},
q:function q(){},
e7:function e7(){},
aC:function aC(){},
h2:function h2(){},
h9:function h9(){},
kq:function kq(a){this.a=a},
hb:function hb(){},
au:function au(){},
he:function he(){},
aD:function aD(){},
hf:function hf(){},
aE:function aE(){},
hi:function hi(){},
kA:function kA(a){this.a=a},
ah:function ah(){},
ej:function ej(){},
hl:function hl(){},
hm:function hm(){},
de:function de(){},
av:function av(){},
ac:function ac(){},
ho:function ho(){},
hp:function hp(){},
kI:function kI(){},
aF:function aF(){},
hr:function hr(){},
kJ:function kJ(){},
bc:function bc(){},
kM:function kM(){},
dh:function dh(){},
hz:function hz(){},
di:function di(){},
dk:function dk(){},
hJ:function hJ(){},
ep:function ep(){},
hX:function hX(){},
ew:function ew(){},
ij:function ij(){},
ir:function ir(){},
hH:function hH(){},
hR:function hR(a){this.a=a},
mp:function mp(a,b){this.a=a
this.$ti=b},
eq:function eq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
er:function er(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
l2:function l2(a){this.a=a},
cC:function cC(a){this.a=a},
r:function r(){},
e8:function e8(a){this.a=a},
kb:function kb(a){this.a=a},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(){},
lm:function lm(){},
ln:function ln(){},
it:function it(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
lp:function lp(){},
is:function is(){},
cf:function cf(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
hL:function hL(){},
ig:function ig(a,b){this.a=a
this.b=b},
eQ:function eQ(a){this.a=a
this.b=0},
lv:function lv(a){this.a=a},
hK:function hK(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hU:function hU(){},
hV:function hV(){},
hY:function hY(){},
hZ:function hZ(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
i6:function i6(){},
i7:function i7(){},
i8:function i8(){},
ib:function ib(){},
ic:function ic(){},
ie:function ie(){},
eD:function eD(){},
eE:function eE(){},
ih:function ih(){},
ii:function ii(){},
ik:function ik(){},
iu:function iu(){},
iv:function iv(){},
eJ:function eJ(){},
eK:function eK(){},
ix:function ix(){},
iy:function iy(){},
iF:function iF(){},
iG:function iG(){},
iH:function iH(){},
iI:function iI(){},
iJ:function iJ(){},
iK:function iK(){},
iL:function iL(){},
iM:function iM(){},
iN:function iN(){},
iO:function iO(){},
o5(a){var s,r
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.ly(a))return a
if(A.om(a))return A.c3(a)
if(Array.isArray(a)){s=[]
for(r=0;r<a.length;++r)s.push(A.o5(a[r]))
return s}return a},
c3(a){var s,r,q,p,o
if(a==null)return null
s=A.a7(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.C)(r),++p){o=r[p]
s.j(0,o,A.o5(a[o]))}return s},
om(a){var s=Object.getPrototypeOf(a)
return s===Object.prototype||s===null},
mm(){return window.navigator.userAgent},
kU:function kU(){},
kW:function kW(a,b){this.a=a
this.b=b},
kV:function kV(a,b){this.a=a
this.b=b
this.c=!1},
rO(a,b){var s=new A.I($.E,b.i("I<0>")),r=new A.aT(s,b.i("aT<0>"))
a.then(A.be(new A.m1(r,b),1),A.be(new A.m2(r),1))
return s},
kd:function kd(a){this.a=a},
m1:function m1(a,b){this.a=a
this.b=b},
m2:function m2(a){this.a=a},
h5(){return B.u},
i_:function i_(){},
aM:function aM(){},
fC:function fC(){},
aP:function aP(){},
fX:function fX(){},
ki:function ki(){},
dc:function dc(){},
hk:function hk(){},
m:function m(){},
aR:function aR(){},
hs:function hs(){},
i0:function i0(){},
i1:function i1(){},
i9:function i9(){},
ia:function ia(){},
io:function io(){},
ip:function ip(){},
iz:function iz(){},
iA:function iA(){},
pA(a){return new GainNode(a)},
b4:function b4(){},
dH:function dH(){},
c6:function c6(){},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
F:function F(){},
f4:function f4(){},
f5:function f5(){},
j3:function j3(a){this.a=a},
bf:function bf(){},
f6:function f6(){},
dI:function dI(){},
cZ:function cZ(){},
fY:function fY(){},
hI:function hI(){},
f9:function f9(){},
ft:function ft(){},
h3:function h3(){},
da:function da(){},
bs:function bs(){},
ht:function ht(){},
hy:function hy(){},
nj(a,b){var s=A.b9(7,null,!1,b.i("0?")),r=a==null?A.rX():a
return new A.fw(r,s,b.i("fw<0>"))},
fw:function fw(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
lt:function lt(a,b){this.a=a
this.$ti=b},
cE:function cE(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=-1
_.$ti=c},
bG(a){return new A.f(a)},
f:function f(a){this.a=a},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ny(a,b){return new A.fV(A.c([],t.f7),a,b.i("fV<0>"))},
fV:function fV(a,b,c){this.a=a
this.b=b
this.$ti=c},
aQ:function aQ(a,b){this.a=a
this.b=b},
mk(a,b,c,d,e,f,g){return new A.cL(g,b,e,a,f)},
ol(a,b){if(b.e)return!1
if(a.x)return!0
if(b.x)return!0
return!1},
rz(a,b){return B.a.bk(a.a,new A.lK(b))},
fL(a,b,c,d,e,f,g,h,i,j){return new A.bn(i,a,h,j,b,e,c,f)},
ru(a){var s,r,q=a.f.$0(),p=new A.k1(new Uint8ClampedArray(4000)),o=a.d,n=A.c([],t.I),m=A.nr(B.ak,t.b,t.O),l=A.c([],t.Q),k=A.c([],t.f)
for(s=J.ae(a.r.$0());s.n();){r=s.gp(s)
switch(r.gbX()){case B.an:m.h(0,B.E)
m.j(0,B.E,r)
break
case B.ao:m.h(0,B.q)
m.j(0,B.q,r)
break
case B.ap:m.h(0,B.F)
m.j(0,B.F,r)
break
default:B.a.k(n,r)}}return A.mk(new A.iS(q,p),new A.ca(o,o,1,0,0,0,0,new A.cX(n,m),a.c,l,k,new A.cY(a.a)),1,a.z,!1,!1,a.e.$0())},
cL:function cL(a,b,c,d,e){var _=this
_.a=100
_.b=a
_.c=b
_.e=c
_.r=d
_.x=e},
iT:function iT(a){this.a=a},
iS:function iS(a,b){this.a=a
this.b=b
this.c=null},
ad:function ad(a,b){this.a=a
this.b=b},
ap:function ap(){},
bR:function bR(){},
bS:function bS(){},
cT:function cT(){},
bP:function bP(){},
h7:function h7(){this.b=!1},
ec:function ec(){this.a=null},
h8:function h8(a){this.a=a},
lK:function lK(a){this.a=a},
bE:function bE(){},
b7:function b7(a){this.a=a},
bn:function bn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.z=h},
mb:function mb(){},
m9:function m9(){},
ma:function ma(){},
m5:function m5(){},
m3:function m3(){},
m4:function m4(){},
me:function me(){},
mc:function mc(){},
md:function md(){},
mh:function mh(){},
mf:function mf(){},
mg:function mg(){},
lF:function lF(){},
lD:function lD(){},
lE:function lE(){},
j9:function j9(){this.b=this.a=0},
Y:function Y(){},
cp:function cp(a,b){this.b=a
this.a=b},
d2:function d2(a,b){this.b=a
this.a=b},
rN(a,b,c){var s,r,q=b.e||b.a===0
if(q)return!1
s=b.c
if(s!=null&&s.b<=0){a.$1(new A.dL(b))
return!0}r=b.r
if(r!=null){a.$1(r.eI(b,c))
b.a=0
return!0}return!1},
fu:function fu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1
_.z=null},
jB:function jB(a,b){this.a=a
this.b=b},
ng(a){switch(a.a){case 0:case 1:case 2:case 3:case 4:return!1
case 5:case 6:case 7:return!0}},
dJ(a,b,c){var s,r,q,p
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
f0(a,b,c,d,e,f){return new A.f_(f,c)},
n5(){return new A.f_(10,10)},
ba(a,b,c){return new A.fH(a,c,b)},
pq(a){var s,r=a.a,q=a.b
if(r+q===1)return a
s=Math.sqrt(Math.pow(r,2)+Math.pow(q,2))
return new A.aQ(r/s,q/s)},
bM(a){switch(a){case B.af:case B.ag:case B.H:case B.I:case B.K:case B.L:case B.Y:case B.Z:case B.T:case B.G:case B.U:case B.V:case B.W:case null:return!1
case B.S:case B.v:case B.J:case B.X:return!0}},
pD(a){switch(a){case B.af:case B.ag:case B.H:case B.I:case B.K:case B.L:case B.Y:case B.Z:case B.T:case B.G:case B.U:case B.V:case null:case B.W:return!1
case B.S:case B.v:case B.J:case B.X:return!0}},
eg:function eg(a,b){this.a=a
this.b=b},
bi:function bi(a,b){this.a=a
this.b=b},
f2:function f2(a,b){this.a=a
this.b=b},
aL:function aL(a,b,c){this.b=a
this.c=b
this.e=c},
je:function je(){},
a_:function a_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fv:function fv(a,b){this.a=a
this.b=b},
bI:function bI(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b){this.a=a
this.b=b},
aS:function aS(a,b){this.a=a
this.b=b},
k0:function k0(){},
bH:function bH(){},
cc:function cc(a,b){this.a=a
this.b=b},
a1:function a1(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.y=e
_.z=f},
dB:function dB(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
at:function at(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.f=c
_.r=d
_.Q=e
_.ch=f},
cO:function cO(a,b){this.a=a
this.b=b},
ao:function ao(a){this.c=a},
f_:function f_(a,b){this.a=a
this.b=b},
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
cP:function cP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cY:function cY(a){this.a=a},
cX:function cX(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
ce:function ce(a,b){this.a=a
this.b=b},
fg:function fg(){},
df:function df(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a,b){this.a=a
this.b=b},
ai:function ai(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
b5:function b5(a,b){this.a=a
this.b=b},
bT:function bT(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
fE:function fE(a,b){this.b=a
this.c=b},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(a,b){this.a=a
this.b=b},
jV:function jV(a,b){this.a=a
this.b=b},
a0:function a0(a,b){this.a=a
this.b=b},
jX:function jX(a,b){this.a=a
this.b=b},
k1:function k1(a){this.a=a},
d3:function d3(a,b){this.a=a
this.b=b},
jl:function jl(a){var _=this
_.a=a
_.b=!1
_.c=null
_.d=0},
jp:function jp(a){this.a=a},
jq:function jq(){},
px(a,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k="a_position",j=5126,i="u_resolution",h="u_offset",g=A.c([],t.ev),f=A.c(["alarm_1.mp3","background_1.mp3","background_2.mp3","bullet_impact_1.mp3","bullet_impact_2.mp3","bullet_miss_1.mp3","calm_menu_1.mp3","cave_1.mp3","click_1.mp3","death_1.mp3","door_1.mp3","door_unlock_1.mp3","drone_abandoned_desolate.mp3","fireball_1.mp3","fireball_2.mp3","flamethrower_1.mp3","heavy_punch_1.mp3","heavy_punch_2.mp3","heavy_punch_3.mp3","heavy_punch_4.mp3","Just_Pick_One_Already.mp3","laser_1.mp3","loop_1.mp3","menu_1.mp3","menu_2.mp3","miss_1.mp3","monster_deep_growl.mp3","monster_growl_1.mp3","monster_sceam_2.mp3","monster_scream_1.mp3","New_Bee.mp3","positive_1.mp3","rain_background_1.mp3","sewer_1.mp3","short_pulse_1.mp3","surface_day_1.mp3","surface_night_1.mp3","sword_impact_1.mp3","teleport_1.mp3","text_loop_1.mp3","water_footsteps_1.mp3","water_footsteps_2.mp3","water_footsteps_3.mp3","water_footsteps_4.mp3","water_footsteps_5.mp3","reload_1.mp3","pistol_1.mp3"],t.s),e=new (window.AudioContext||window.webkitAudioContext)(),d=A.qH(),c=t.G,b=t.o
d=A.aK(A.c([new A.X(k,35044,j,2,d),new A.X("a_color",35048,j,4,new Float32Array(192e3))],c),u.l,A.c([new A.y(i,B.f),new A.y(h,B.f)],b),u.q)
s=A.aK(A.c([new A.X(k,35048,j,2,new Float32Array(8000))],c),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.c([new A.y(i,B.f),new A.y(h,B.f)],b),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
r=A.q6(window)
q=new Uint8Array(4000)
p=t.j
o=A.c([],t.pl)
b=A.c([new A.y("u_texture",B.k),new A.y(i,B.f),new A.y("u_time",B.t)],b)
b=A.aK(A.c([new A.X(k,35044,j,2,new Float32Array(A.cG(B.x)))],c),"#version 300 es\nprecision mediump float;\n\n\nuniform sampler2D u_texture;\nuniform vec2 u_resolution;\nuniform float u_time;\n\nout vec4 outColor;\n\nfloat density = 1.3;\nfloat opacityScanline = .3;\nfloat opacityNoise = .2;\n\nfloat random (vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nfloat blend(const in float x, const in float y) {\n\treturn (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));\n}\n\nvec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {\n\tvec3 z = vec3(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b));\n\treturn z * opacity + x * (1.0 - opacity);\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n  vec3 col = texture(u_texture, uv).rgb;\n  float count = u_resolution.y * density;\n  vec2 sl = vec2(sin(uv.y * count), cos(uv.y * count));\n\tvec3 scanlines = vec3(sl.x, sl.y, sl.x);\n  col += col * scanlines * opacityScanline;\n  col += col * vec3(random(uv * u_time)) * opacityNoise;\n  outColor = vec4(col, 1.0);\n}\n",b,u.p)
c=A.c([],t.fk)
n=new Uint8Array(16e6)
m=new Uint8Array(4000)
l=new Uint8Array(4000)
g=new A.ju(a1,a4,a.a,a,a0,a3,g,a2,new A.hd(A.a7(t.N,t.bD),f,e),new A.jx(n,m,l,new Uint8Array(64e6),new A.j(0,0),A.a7(p,t.im),c),new A.j9(),new A.kG(d),new A.jl(s),r,new A.iT(new A.fk(q,A.a7(p,t.S))),new A.jp(o),new A.jy(b),a1.createFramebuffer(),a1.createFramebuffer(),new A.ko())
g.dF(a,a0,a1,a2,a3,a4)
return g},
fn:function fn(){this.c=this.b=!1},
ju:function ju(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
_.Q=k
_.ch=$
_.cx=l
_.cy=m
_.dx=_.db=$
_.dy=n
_.fx=_.fr=$
_.fy=o
_.go=$
_.id=p
_.k1=q
_.k3=_.k2=null
_.k4=r
_.r1=s
_.rx=_.r2=0
_.x1=!1
_.x2=a0},
jv:function jv(a,b){this.a=a
this.b=b},
os(a,b,c){return a*c+(1-c)*b},
a6:function a6(){},
bF:function bF(a,b,c){var _=this
_.a=a
_.d=0
_.e=null
_.f=!0
_.r=b
_.x=c},
H:function H(a,b,c,d,e,f,g){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
fS:function fS(a){this.a=a},
eb:function eb(a){this.a=a},
aO:function aO(a,b){this.a=a
this.b=b},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
k8:function k8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dd:function dd(){},
fD:function fD(a){this.a=a},
ek:function ek(a,b){this.a=a
this.b=b},
dG:function dG(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j0:function j0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iZ:function iZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dL:function dL(a){this.a=a},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(a){this.a=a},
ea:function ea(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.b=a
this.c=b},
kk:function kk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kl:function kl(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function jy(a){this.a=a
this.b=null},
jx:function jx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iw:function iw(a){this.a=a
this.b=!0},
kN:function kN(a,b,c){this.a=a
this.c=b
this.d=c},
c9:function c9(a,b){this.a=a
this.b=b},
km:function km(a,b){this.a=a
this.b=b},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
ok(a,b){var s=a.f
if(s==null)return A.c([],t.Y)
if(s===B.v)return A.c([new A.cj(new A.ek(!1,a.b))],t.Y)
if(s===B.I){if(b.ak(a.b)!=null)return A.c([],t.Y)
return A.c([new A.cj(new A.ek(!0,a.b))],t.Y)}if(s===B.G)return A.c([new A.cj(new A.hw(a.b))],t.Y)
if(s===B.H)return A.c([new A.cj(new A.fS(!1))],t.Y)
return A.c([],t.Y)},
cj:function cj(a){this.b=a},
pI(a){var s=u.p,r="a_position",q="u_player_visible_texture",p=t.G,o=t.o
return new A.fG(A.aK(A.c([new A.X(r,35044,5126,2,new Float32Array(A.cG(B.x)))],p),u.z,A.c([new A.y("u_source_position",B.f),new A.y("u_source_color",B.be),new A.y("u_source_strength",B.t),new A.y("u_time",B.t),new A.y("u_visible_texture",B.k),new A.y(q,B.k)],o),s),A.aK(A.c([new A.X(r,35044,5126,2,new Float32Array(A.cG(B.x)))],p),u.A,A.c([new A.y("u_light_texture",B.k),new A.y("u_game_world_texture",B.k),new A.y(q,B.k),new A.y("u_resolution",B.f),new A.y("u_block_size",B.f),new A.y("u_offset",B.f)],o),s),a,A.c([],t.ow))},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.x=d
_.y=null},
pu(a){switch(a.a){case 0:return B.ae
case 1:return B.ad
case 2:return B.ac
case 3:return B.ab
case 4:return B.o
case 5:return B.p
case 6:return B.m
case 7:return B.n}},
pt(a){switch(a.a){case 4:return B.aU
case 5:return B.aT
case 6:return B.aU
case 7:return B.aT
default:return B.dW}},
a9(a,b){switch(b.a){case 4:return a.E(0,new A.j(0,-1))
case 1:return a.E(0,new A.j(1,-1))
case 5:return a.E(0,new A.j(1,0))
case 0:return a.E(0,new A.j(1,1))
case 6:return a.E(0,new A.j(0,1))
case 2:return a.E(0,new A.j(-1,1))
case 7:return a.E(0,new A.j(-1,0))
case 3:return a.E(0,new A.j(-1,-1))}},
lG(a,b,c){var s
switch(c.a){case 0:return!1
case 1:return a.c===B.b||A.N(A.bM(a.f))
case 2:s=a.f
if(s===B.v)return!1
return a.c===B.b||A.N(A.bM(s))
case 3:return a.c===B.b||A.N(A.bM(a.f))||b.ak(a.b)!=null}},
rs(a,b){var s=B.d.bm(a,-1,1),r=B.d.bm(b,-1,1)
switch(s){case-1:switch(r){case-1:return B.ae
case 0:return B.p
case 1:return B.ad}break
case 0:switch(r){case-1:return B.m
case 1:return B.o}break
case 1:switch(r){case-1:return B.ac
case 0:return B.n
case 1:return B.ab}break}throw A.d(A.a5(A.w(s)+","+A.w(r)))},
bo:function bo(a,b,c){var _=this
_.b=_.a=null
_.d=a
_.e=b
_.f=c},
aW:function aW(a,b){this.a=a
this.b=b},
kg:function kg(){},
fk:function fk(a,b){this.a=a
this.b=b},
ks:function ks(a,b,c){this.a=a
this.b=b
this.c=c},
n8(a,b,c,d,e){return new A.X(d,a,c,e,b)},
bV(a,b){return new A.y(b,a)},
aK(a,b,c,d){var s=t.N
return new A.jF(d,b,c,a,A.a7(s,t.o3),A.a7(s,t.aN))},
o6(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.Z(a.getShaderParameter(s,35713),!0)){A.iQ(a.getShaderInfoLog(s))
throw A.d(A.a5("Invalid Shader"))}return s},
X:function X(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
y:function y(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.c=b},
iB:function iB(a,b){this.a=a
this.b=b},
jF:function jF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
ko:function ko(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
kp:function kp(){},
fT:function fT(){},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function ku(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r9(a,b){var s=t.hd
s.a(a)
s.a(b)
return B.d.M(a.y,b.y)},
rJ(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.I($.E,t.aa),p=J.pe(r),o=p.$ti,n=o.i("~(1)?").a(new A.lP(a,s,r,new A.aT(q,t.fB)))
t.Z.a(null)
A.cA(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
q0(a,b){var s=35048,r=5126,q=A.c([new A.y("u_texture",B.k),new A.y("u_resolution",B.f),new A.y("u_offset",B.f)],t.o),p=new Float32Array(12e4),o=new Float32Array(12e4),n=new Float32Array(24e4)
q=new A.kv(A.aK(A.c([new A.X("a_position",s,r,2,p),new A.X("a_texcoord",s,r,2,o),new A.X("a_color",s,r,4,n),new A.X("a_bg_color",s,r,4,new Float32Array(24e4))],t.G),"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\nin vec4 v_bg_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n  if (v_bg_color != vec4(0, 0, 0, 0)) {\n    outColor = outColor + v_bg_color;\n  }\n}\n",q,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"),A.nj(A.rR(),t.hd),b)
q.dH(a,b)
return q},
nk(a,b,c,d){var s,r,q,p,o,n,m=null
switch(a){case B.af:case null:return m
case B.ag:s=m
r=s
q=3
p=16
o=1
break
case B.H:q=14
p=3
o=1
r=B.e7
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
if(d.a===B.y){n=B.b3.h(0,n.a(900))
n.toString
r=n}else{n=B.b0.h(0,n.a(800))
n.toString
r=n}s=m
q=2
p=2
o=0.8
break
case B.L:r=new A.f(4294967142)
s=m
q=12
p=7
o=0.8
break
case B.Y:n=B.aj.h(0,t.e.i("Y.T").a(400))
n.toString
s=m
r=n
q=1
p=13
o=1
break
case B.Z:n=B.aj.h(0,t.e.i("Y.T").a(400))
n.toString
s=m
r=n
q=2
p=13
o=0.8
break
case B.S:n=B.b0.h(0,t.e.i("Y.T").a(600))
n.toString
s=m
r=n
q=6
p=0
o=1
break
case B.T:n=B.b2.h(0,t.e.i("Y.T").a(900))
n.toString
s=n
r=m
q=0
p=15
o=1
break
case B.G:n=B.b4.h(0,t.e.i("Y.T").a(500))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.U:n=B.b4.h(0,t.e.i("Y.T").a(100))
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
case B.W:n=B.b2.h(0,t.e.i("Y.T").a(900))
n.toString
s=m
r=n
q=14
p=5
o=1
break
case B.X:n=B.aj.h(0,t.e.i("Y.T").a(600))
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
o=1}n=new A.a4(q,p,b,c,r)
n.f=o
n.sam(0,s)
return n},
lP:function lP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kv:function kv(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c
_.e=!1
_.f=!0},
kw:function kw(a){this.a=a},
a4:function a4(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.f=1
_.r=null
_.x=e
_.y=0},
mz(a,b,c){return new A.jZ(b,c,a)},
qH(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
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
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
kG:function kG(a){this.a=a
this.b=null
this.c=!1},
kH:function kH(a,b){this.a=a
this.b=b},
h6:function h6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qG(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
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
jw:function jw(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
kO:function kO(a){this.b=a},
rl(a){var s,r=A.mx(4000,new A.lC(a),t.W),q=A.c([],t.c7)
for(s=0;s<4000;++s);return new A.hg(q,A.a7(t.K,t.lZ),new A.a3(100,40,r,t.nr),a.b)},
lI(a){var s,r,q,p,o
for(s=a.c,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.j(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.N(A.bM(o.f))))return p}throw A.d("Solid")},
rM(a,b){var s,r,q
for(s=a.c;!0;){r=$.eZ()
q=new A.j(B.c.A(r.Y()*98)+1,B.c.A(r.Y()*38)+1)
r=s.h(0,q)
if(!(r.c===B.b||A.N(A.bM(r.f)))&&a.ak(q)==null)return q}},
bz(a,b){return a.Y()<=b/100},
b1(a,b,c){return B.c.A(a.Y()*(c-b))+b},
qL(a,b,c){var s=b.length
if(s===1){if(0>=s)return A.b(b,0)
return b[0]}s=A.b1(a,0,s-1)
if(!(s>=0&&s<b.length))return A.b(b,s)
return b[s]},
hB:function hB(a,b){this.a=a
this.d=0
this.e=b},
lC:function lC(a){this.a=a},
hg:function hg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kT:function kT(a,b){this.a=a
this.b=b},
jm:function jm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jn:function jn(a){this.a=a},
fa:function fa(a){this.a=a},
jd:function jd(a){this.a=a},
jD:function jD(){},
jE:function jE(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
m8(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.N))break
q=A.a9(q,b);++p}return p},
n6(a,b,c){return new A.aI(a,b,c.i("aI<0>"))},
cJ(a,b,c){var s=A.a9(a,b)
if(c.e.h(0,s)===B.N)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
nx(a){return new A.d6(a)},
bu(a,b,c){return new A.cx(c,a,b)},
dx(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=A.c([],t.D),a4=t.S,a5=A.a7(t.c1,a4)
for(s=a7.length,r=0;r<a7.length;a7.length===s||(0,A.C)(a7),++r){q=a7[r]
if(q.gbF())q=new A.iC(q)
p=a5.h(0,q)
if(p==null){a5.j(0,q,0)
p=0}a5.j(0,q,p+1)}for(s=a5.gai(a5),s=s.gt(s),o=t.q,n=t.n4,m=t.ld,l=t.bu,k=a6.a,j=J.cH(k),i=t.n;s.n();){h=s.gp(s)
q=h.a
g=h.b
f=A.c([],o)
e=A.c([],i)
for(h=j.gt(k);h.n();){d=h.gp(h)
c=q.gbq(q).N(d,a8)
if(c<1000){B.a.k(f,d)
B.a.k(e,c)}}if(f.length===0){B.a.k(a3,q)
continue}h=A.c([],l)
for(b=0;b<f.length;++b){d=f[b]
if(!(b<e.length))return A.b(e,b)
h.push(new A.b_(d,e[b]))}d=m.a(new A.m7())
if(!!h.immutable$list)A.T(A.D("sort"))
a=h.length-1
if(a-0<=32)A.nH(h,0,a,d,n)
else A.nG(h,0,a,d,n)
a0=B.a.du(h,0,Math.min(3*g,e.length))
B.a.bU(a0)
a1=A.c([],o)
a2=A.jU(a4)
for(;!0;){for(b=0;b<a0.length;++b){if(a2.v(0,b))continue
if(a1.length===g)break
if($.oR().Y()<0.33){if(!(b<a0.length))return A.b(a0,b)
B.a.k(a1,a0[b].a)
a2.k(0,b)}}h=a1.length
if(h===g)break
else if(g-h>a0.length-a2.a)break}if(a1.length<g)B.a.k(a3,q)
for(h=a1.length,r=0;r<a1.length;a1.length===h||(0,A.C)(a1),++r)q.d4(a1[r],a8)
if(a0.length===0)B.a.k(a3,q)}for(a4=j.gt(k),s=a8.e,o=a6.c;a4.n();){n=a4.gp(a4)
if(s.h(0,n)===B.as||s.h(0,n)===B.at)B.a.k(o,n)}return a3},
or(a,b){var s,r,q,p,o,n,m,l,k,j
B.a.aX(a,new A.m6())
if(0>=a.length)return A.b(a,0)
A.dx(a[0],$.p5(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.C)(s),++p)q.j(0,s[p],B.aZ)
if(0>=a.length)return A.b(a,0)
a[0].e=!0
for(s=A.nL(a,1,null,A.W(a).c),r=s.$ti,s=new A.bm(s,s.gm(s),r.i("bm<aN.E>")),o=b.a.a.a,r=r.i("aN.E"),n=t.c1,m=2;s.n();){l=r.a(s.d)
k=l.a
j=J.ax(k)
if(j.gm(k)<30){if(m>0){k=A.nt($.mj(),!0,n)
k.push($.n_())}else k=$.mj()
if(!B.a.v(A.dx(l,k,b),$.n_()))--m}else if(j.gm(k)<60)A.dx(l,$.oY(),b)
else if(j.gm(k)<100)A.dx(l,$.oW(),b)
else switch(o){case 0:case 1:case 2:case 5:case 6:A.dx(l,$.oU(),b)
break
case 3:case 4:A.dx(l,$.oV(),b)
break}}if(m===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.C)(s),++p)q.j(0,s[p],B.b_)}},
aJ:function aJ(){},
hA:function hA(){},
aI:function aI(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b){this.b=a
this.$ti=b},
fU:function fU(){},
fb:function fb(){},
f1:function f1(){},
fh:function fh(){},
dA:function dA(a){this.a=a},
d6:function d6(a){this.a=a},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
m0:function m0(){},
lU:function lU(){},
lY:function lY(){},
lT:function lT(){},
lV:function lV(){},
lZ:function lZ(){},
m_:function m_(){},
lX:function lX(){},
lW:function lW(){},
lS:function lS(){},
b_:function b_(a,b){this.a=a
this.b=b},
iC:function iC(a){this.a=a},
m7:function m7(){},
m6:function m6(){},
pw(a){var s=t.q
return new A.a2(a,A.c([],s),A.c([],s),A.jt(a))},
jt(a){var s,r,q=J.ax(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gm(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.j(B.c.A(p/q.gm(a)),B.c.A(o/q.gm(a)))},
qD(a){switch(a.a){case 10:case 11:case 9:case 1:case 3:return!0
default:return!1}},
dR:function dR(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
j4:function j4(a,b){this.a=a
this.b=b},
j6:function j6(){},
j7:function j7(){},
j8:function j8(a){this.a=a},
j5:function j5(a){this.a=a},
el:function el(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
js:function js(a,b){this.a=a
this.b=b},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jM:function jM(a,b){this.a=a
this.b=b},
kc:function kc(){},
jH:function jH(a){this.a=a},
jI:function jI(){},
jJ:function jJ(){},
jK:function jK(){},
jL:function jL(){},
kh:function kh(){},
bO:function bO(a,b){this.a=a
this.b=b},
ee:function ee(a,b){this.a=a
this.b=b},
kr:function kr(a,b){this.b=a
this.a=b},
ed:function ed(a,b){this.a=a
this.b=b},
kD:function kD(a){this.a=a},
kE:function kE(){},
kF:function kF(a){this.a=a},
q6(a){var s=new A.kP(A.nJ(t.h8),A.nJ(t.bd))
s.dI(a)
return s},
kP:function kP(a,b){this.a=a
this.b=b},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
ab:function ab(a,b){this.a=a
this.b=b},
iV:function iV(a,b,c){var _=this
_.a=a
_.b=$
_.c=b
_.d=c},
iW:function iW(a,b){this.a=a
this.b=b},
pM(a){var s=new A.k4(a)
s.dG(a)
return s},
k4:function k4(a){this.a=a
this.b=$
this.c=!1},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
h1:function h1(a,b){this.a=a
this.b=b},
kx:function kx(){},
ky:function ky(a,b){this.a=a
this.b=b},
kz:function kz(a,b){this.a=a
this.b=b},
mS(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
rr(a,b){return J.pb(t.n6.a(a),b)},
fy(a){var s,r
if(a instanceof A.a_){s=B.aO
r=null}else if(a instanceof A.a1){s=B.aM
r=null}else if(a instanceof A.at){s=B.aN
r=0}else{if(a instanceof A.je)s=B.dK
else{J.dz(a)
s=B.aP}r=null}$.nl=$.nl+1
return new A.aL(a,s,r)},
rG(a,b,c){var s,r,q=a.r
if(q!=null){if(b===q.c)return!0
s=a.q()
r=b.q()
if(s==null||r==null)return!1
return c.z.a_(s).h(0,r)}return!0},
rQ(a){A.b0(a)
$.cF.bh().aj(a,$.mX())
B.bi.d8(window,A.on())},
mQ(){var s=0,r=A.bA(t.z),q,p,o,n,m,l,k
var $async$mQ=A.bB(function(a,b){if(a===1)return A.bv(b,r)
while(true)switch(s){case 0:o=$.oT()
n=A.n5()
m=A.c([],t.I)
l=A.pJ(B.ak,t.b,t.O)
k=A.c([],t.f)
k=o.cc(A.mk(null,new A.ca(20,20,0,0,0,0,0,new A.cX(m,l),n,A.c([],t.Q),k,new A.cY("J")),0,null,!1,!0,new A.a4(0,4,1,1,null)))
q=new A.c_(k.a(),k.$ti.i("c_<1>"))
q.n()
q.n()
k=q.gp(q)
n=document
l=t.r
m=l.a(n.querySelector("#glCanvas"))
o=$.mX()
p=$.p3()
n=A.px(new A.kT(k,q),m,o,p,l.a(n.querySelector("#text")),t.nK.a(B.C.bQ(l.a(n.querySelector("#text")),"2d")))
o=$.cF.b
if(o==null?$.cF!=null:o!==$.cF)A.T(new A.cl("Field '"+$.cF.a+"' has already been initialized."))
$.cF.b=n
$.cF.bh().y.aN()
o=$.p2()
new A.kx().I(o)
n=t.s
m=A.c(["Controls"],n)
n=A.c(["<h1>Controls</h1>\n<ul>\n  <li>WASD / Arrow Keys - Movement</li>\n  <li>Space - Activate</li>\n  <li>ESC - Cancel</l1>\n</ul>\n"],n)
new A.iV(A.pM(p),m,n).I(p)
p=$.cF.bh()
n=t.w
o=new A.fu(p,A.c([],n),A.c([],n),A.c([],t.fy),A.c([],t.ge),o)
n=p.dy.a
new A.bW(n,A.B(n).i("bW<1>")).d_(o.gf0())
o=t.x.a(o.gcp())
B.a.k(p.r,o)
B.bi.d8(window,A.on())
return A.bw(null,r)}})
return A.bx($async$mQ,r)}},J={
mR(a,b,c,d){return{i:a,p:b,e:c,x:d}},
lJ(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.mP==null){A.rD()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.mC("Return interceptor for "+A.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.lg
if(o==null)o=$.lg=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.rK(a)
if(p!=null)return p
if(typeof a=="function")return B.dM
s=Object.getPrototypeOf(a)
if(s==null)return B.bb
if(s===Object.prototype)return B.bb
if(typeof q=="function"){o=$.lg
if(o==null)o=$.lg=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.au,enumerable:false,writable:true,configurable:true})
return B.au}return B.au},
pF(a,b){if(a<0||a>4294967295)throw A.d(A.bp(a,0,4294967295,"length",null))
return J.pH(new Array(a),b)},
pG(a,b){if(a<0)throw A.d(A.cN("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("t<0>"))},
pH(a,b){return J.no(A.c(a,b.i("t<0>")),b)},
no(a,b){a.fixed$length=Array
return a},
dw(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dX.prototype
return J.fA.prototype}if(typeof a=="string")return J.bN.prototype
if(a==null)return J.dY.prototype
if(typeof a=="boolean")return J.dW.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof A.v)return a
return J.lJ(a)},
ax(a){if(typeof a=="string")return J.bN.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof A.v)return a
return J.lJ(a)},
cH(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof A.v)return a
return J.lJ(a)},
rv(a){if(typeof a=="number")return J.d0.prototype
if(typeof a=="string")return J.bN.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.cw.prototype
return a},
rw(a){if(typeof a=="string")return J.bN.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.cw.prototype
return a},
c4(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof A.v)return a
return J.lJ(a)},
Z(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dw(a).H(a,b)},
n1(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.rH(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ax(a).h(a,b)},
n2(a,b,c){return J.cH(a).j(a,b,c)},
p9(a){return J.c4(a).dS(a)},
pa(a,b,c,d){return J.c4(a).eF(a,b,c,d)},
pb(a,b){return J.rv(a).M(a,b)},
n3(a,b){return J.cH(a).w(a,b)},
pc(a,b){return J.cH(a).C(a,b)},
pd(a){return J.c4(a).geJ(a)},
cK(a){return J.dw(a).gu(a)},
ae(a){return J.cH(a).gt(a)},
an(a){return J.ax(a).gm(a)},
pe(a){return J.c4(a).gbB(a)},
pf(a,b,c){return J.cH(a).d0(a,b,c)},
n4(a){return J.cH(a).ff(a)},
pg(a,b){return J.c4(a).se7(a,b)},
ph(a,b){return J.c4(a).scT(a,b)},
pi(a){return J.rw(a).fp(a)},
dz(a){return J.dw(a).l(a)},
a:function a(){},
dW:function dW(){},
dY:function dY(){},
ck:function ck(){},
h0:function h0(){},
cw:function cw(){},
bj:function bj(){},
t:function t(a){this.$ti=a},
jN:function jN(a){this.$ti=a},
dD:function dD(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d0:function d0(){},
dX:function dX(){},
fA:function fA(){},
bN:function bN(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.mu.prototype={}
J.a.prototype={
H(a,b){return a===b},
gu(a){return A.ct(a)},
l(a){return"Instance of '"+A.kj(a)+"'"}}
J.dW.prototype={
l(a){return String(a)},
dn(a,b){return b||a},
gu(a){return a?519018:218159},
$iz:1}
J.dY.prototype={
H(a,b){return null==b},
l(a){return"null"},
gu(a){return 0},
$iV:1}
J.ck.prototype={
gu(a){return 0},
l(a){return String(a)}}
J.h0.prototype={}
J.cw.prototype={}
J.bj.prototype={
l(a){var s=a[$.ov()]
if(s==null)return this.dz(a)
return"JavaScript function for "+J.dz(s)},
$icg:1}
J.t.prototype={
k(a,b){A.W(a).c.a(b)
if(!!a.fixed$length)A.T(A.D("add"))
a.push(b)},
d7(a,b){var s
if(!!a.fixed$length)A.T(A.D("removeAt"))
s=a.length
if(b>=s)throw A.d(A.nB(b,null))
return a.splice(b,1)[0]},
J(a,b){var s
if(!!a.fixed$length)A.T(A.D("remove"))
for(s=0;s<a.length;++s)if(J.Z(a[s],b)){a.splice(s,1)
return!0}return!1},
ef(a,b,c){var s,r,q,p,o
A.W(a).i("z(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.N(b.$1(p)))s.push(p)
if(a.length!==r)throw A.d(A.bg(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
G(a,b){A.W(a).i("h<1>").a(b)
if(!!a.fixed$length)A.T(A.D("addAll"))
this.dN(a,b)
return},
dN(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.bg(a))
for(r=0;r<s;++r)a.push(b[r])},
d0(a,b,c){var s=A.W(a)
return new A.co(a,s.B(c).i("1(2)").a(b),s.i("@<1>").B(c).i("co<1,2>"))},
eZ(a,b,c){var s,r,q,p=A.W(a)
p.i("z(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(A.N(b.$1(q)))return q
if(a.length!==s)throw A.d(A.bg(a))}return c.$0()},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
du(a,b,c){var s=a.length
if(b>s)throw A.d(A.bp(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.bp(c,b,s,"end",null))
if(b===c)return A.c([],A.W(a))
return A.c(a.slice(b,c),A.W(a))},
geY(a){if(a.length>0)return a[0]
throw A.d(A.mt())},
ga9(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.d(A.mt())
throw A.d(A.nn())},
bT(a,b,c,d){var s,r,q,p
A.W(a).i("h<1>").a(d)
if(!!a.immutable$list)A.T(A.D("setRange"))
A.mA(b,c,a.length)
s=c-b
if(s===0)return
A.kn(0,"skipCount")
r=d
q=J.ax(r)
if(s>q.gm(r))throw A.d(A.pE())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
bk(a,b){var s,r
A.W(a).i("z(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.N(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.bg(a))}return!1},
aX(a,b){var s=A.W(a)
s.i("i(1,1)?").a(b)
if(!!a.immutable$list)A.T(A.D("sort"))
A.pZ(a,b,s.c)},
bU(a){var s,r,q,p
if(!!a.immutable$list)A.T(A.D("shuffle"))
s=a.length
for(;s>1;){r=B.u.D(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
f5(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.Z(a[s],b))return s}return-1},
v(a,b){var s
for(s=0;s<a.length;++s)if(J.Z(a[s],b))return!0
return!1},
l(a){return A.ms(a,"[","]")},
gt(a){return new J.dD(a,a.length,A.W(a).i("dD<1>"))},
gu(a){return A.ct(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.T(A.D("set length"))
if(b>a.length)A.W(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.dv(a,b))
return a[b]},
j(a,b,c){A.J(b)
A.W(a).c.a(c)
if(!!a.immutable$list)A.T(A.D("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.dv(a,b))
a[b]=c},
$ip:1,
$ih:1,
$in:1}
J.jN.prototype={}
J.dD.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.C(q))
s=r.c
if(s>=p){r.scd(null)
return!1}r.scd(q[s]);++r.c
return!0},
scd(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
J.d0.prototype={
M(a,b){var s
A.b0(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaO(b)
if(this.gaO(a)===s)return 0
if(this.gaO(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaO(a){return a===0?1/a<0:a<0},
aA(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.D(""+a+".toInt()"))},
cI(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.D(""+a+".ceil()"))},
ab(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.D(""+a+".floor()"))},
A(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.D(""+a+".round()"))},
ap(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
bm(a,b,c){if(B.d.M(b,c)>0)throw A.d(A.of(b))
if(this.M(a,b)<0)return b
if(this.M(a,c)>0)return c
return a},
de(a,b){var s
if(b>20)throw A.d(A.bp(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaO(a))return"-"+s
return s},
fq(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.bp(b,2,36,"radix",null))
s=a.toString(b)
if(B.w.eN(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.T(A.D("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.w.bR("0",p)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dm(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bZ(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cv(a,b)},
P(a,b){return(a|0)===a?a/b|0:this.cv(a,b)},
cv(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.D("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
cu(a,b){var s
if(a>0)s=this.en(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
en(a,b){return b>31?0:a>>>b},
$iaf:1,
$iL:1,
$iO:1}
J.dX.prototype={$ii:1}
J.fA.prototype={}
J.bN.prototype={
eN(a,b){if(b<0)throw A.d(A.dv(a,b))
if(b>=a.length)A.T(A.dv(a,b))
return a.charCodeAt(b)},
E(a,b){return a+b},
dt(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
fp(a){return a.toLowerCase()},
bR(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.bW)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
d5(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bR(c,s)+a},
br(a,b,c){var s=a.length
if(c>s)throw A.d(A.bp(c,0,s,null,null))
return A.rS(a,b,c)},
M(a,b){var s
A.P(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
l(a){return a},
gu(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return a.length},
h(a,b){if(b>=a.length)throw A.d(A.dv(a,b))
return a[b]},
$iaf:1,
$inz:1,
$io:1}
A.cl.prototype={
l(a){var s="LateInitializationError: "+this.a
return s}}
A.kt.prototype={}
A.p.prototype={}
A.aN.prototype={
gt(a){var s=this
return new A.bm(s,s.gm(s),A.B(s).i("bm<aN.E>"))},
aS(a,b){return this.dw(0,A.B(this).i("z(aN.E)").a(b))}}
A.ei.prototype={
gdZ(){var s=J.an(this.a),r=this.c
if(r==null||r>s)return s
return r},
geo(){var s=J.an(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.an(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.W()
return s-q},
w(a,b){var s=this,r=s.geo()+b
if(b<0||r>=s.gdZ())throw A.d(A.R(b,s,"index",null,null))
return J.n3(s.a,r)}}
A.bm.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.ax(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.bg(q))
s=r.c
if(s>=o){r.saq(null)
return!1}r.saq(p.w(q,s));++r.c
return!0},
saq(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
A.cn.prototype={
gt(a){var s=A.B(this)
return new A.e3(J.ae(this.a),this.b,s.i("@<1>").B(s.Q[1]).i("e3<1,2>"))},
gm(a){return J.an(this.a)}}
A.dO.prototype={$ip:1}
A.e3.prototype={
n(){var s=this,r=s.b
if(r.n()){s.saq(s.c.$1(r.gp(r)))
return!0}s.saq(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
saq(a){this.a=this.$ti.i("2?").a(a)}}
A.co.prototype={
gm(a){return J.an(this.a)},
w(a,b){return this.b.$1(J.n3(this.a,b))}}
A.a8.prototype={
gt(a){return new A.em(J.ae(this.a),this.b,this.$ti.i("em<1>"))}}
A.em.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.N(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.aq.prototype={}
A.cU.prototype={
l(a){return A.my(this)},
$iQ:1}
A.dK.prototype={
gm(a){return this.a},
aM(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.aM(0,b))return null
return this.b[A.P(b)]},
C(a,b){var s,r,q,p,o,n=this.$ti
n.i("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.P(s[p])
b.$2(o,n.a(q[o]))}}}
A.aa.prototype={
b7(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.pC(r)
o=A.mw(A.r0(),q,r,s.Q[1])
A.oh(p.a,o)
p.$map=o}return o},
h(a,b){return this.b7().h(0,b)},
C(a,b){this.$ti.i("~(1,2)").a(b)
this.b7().C(0,b)},
gm(a){var s=this.b7()
return s.gm(s)}}
A.jC.prototype={
$1(a){return this.a.b(a)},
$S:32}
A.kK.prototype={
X(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.e9.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.fB.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hv.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ke.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.dQ.prototype={}
A.eF.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaZ:1}
A.cb.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ot(r==null?"unknown":r)+"'"},
$icg:1,
gfC(){return this},
$C:"$1",
$R:1,
$D:null}
A.fc.prototype={$C:"$0",$R:0}
A.fd.prototype={$C:"$2",$R:2}
A.hn.prototype={}
A.hh.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ot(s)+"'"}}
A.cR.prototype={
H(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cR))return!1
return this.$_target===b.$_target&&this.a===b.a},
gu(a){return(A.lR(this.a)^A.ct(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kj(t.K.a(this.a))+"'")}}
A.ha.prototype={
l(a){return"RuntimeError: "+this.a}}
A.hC.prototype={
l(a){return"Assertion failed: "+A.fo(this.a)}}
A.aA.prototype={
gm(a){return this.a},
gf6(a){return this.a===0},
gK(a){return new A.dZ(this,A.B(this).i("dZ<1>"))},
gbN(a){var s=this,r=A.B(s)
return A.nu(s.gK(s),new A.jP(s),r.c,r.Q[1])},
aM(a,b){var s=this.cU(b)
return s},
cU(a){var s=this,r=s.d
if(r==null)return!1
return s.ao(s.aD(r,s.an(a)),a)>=0},
G(a,b){A.B(this).i("Q<1,2>").a(b).C(0,new A.jO(this))},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b8(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b8(p,b)
q=r==null?n:r.b
return q}else return o.cV(b)},
cV(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.aD(p,q.an(a))
r=q.ao(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.B(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.c0(s==null?q.b=q.bd():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.c0(r==null?q.c=q.bd():r,b,c)}else q.cX(b,c)},
cX(a,b){var s,r,q,p,o=this,n=A.B(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.bd()
r=o.an(a)
q=o.aD(s,r)
if(q==null)o.bj(s,r,[o.be(a,b)])
else{p=o.ao(q,a)
if(p>=0)q[p].b=b
else q.push(o.be(a,b))}},
J(a,b){var s=this.cW(b)
return s},
cW(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.an(a)
r=o.aD(n,s)
q=o.ao(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.ey(p)
if(r.length===0)o.ce(n,s)
return p.b},
bn(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bc()}},
C(a,b){var s,r,q=this
A.B(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.bg(q))
s=s.c}},
c0(a,b,c){var s,r=this,q=A.B(r)
q.c.a(b)
q.Q[1].a(c)
s=r.b8(a,b)
if(s==null)r.bj(a,b,r.be(b,c))
else s.b=c},
bc(){this.r=this.r+1&67108863},
be(a,b){var s=this,r=A.B(s),q=new A.jR(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.bc()
return q},
ey(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.bc()},
an(a){return J.cK(a)&0x3ffffff},
ao(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Z(a[r].a,b))return r
return-1},
l(a){return A.my(this)},
b8(a,b){return a[b]},
aD(a,b){return a[b]},
bj(a,b,c){a[b]=c},
ce(a,b){delete a[b]},
bd(){var s="<non-identifier-key>",r=Object.create(null)
this.bj(r,s,r)
this.ce(r,s)
return r},
$ijQ:1}
A.jP.prototype={
$1(a){var s=this.a,r=A.B(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.B(this.a).i("2(1)")}}
A.jO.prototype={
$2(a,b){var s=this.a,r=A.B(s)
s.j(0,r.c.a(a),r.Q[1].a(b))},
$S(){return A.B(this.a).i("~(1,2)")}}
A.jR.prototype={}
A.dZ.prototype={
gm(a){return this.a.a},
gt(a){var s=this.a,r=new A.e_(s,s.r,this.$ti.i("e_<1>"))
r.c=s.e
return r}}
A.e_.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.bg(q))
s=r.c
if(s==null){r.sc_(null)
return!1}else{r.sc_(s.a)
r.c=s.c
return!0}},
sc_(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
A.lL.prototype={
$1(a){return this.a(a)},
$S:63}
A.lM.prototype={
$2(a,b){return this.a(a,b)},
$S:66}
A.lN.prototype={
$1(a){return this.a(A.P(a))},
$S:24}
A.l0.prototype={
aG(){var s=this.b
if(s===this)throw A.d(new A.cl("Local '"+this.a+"' has not been initialized."))
return s},
bh(){var s=this.b
if(s===this)throw A.d(A.nq(this.a))
return s}}
A.fM.prototype={$ine:1}
A.cs.prototype={$iaG:1}
A.d4.prototype={
gm(a){return a.length},
$iA:1}
A.cr.prototype={
h(a,b){A.by(b,a,a.length)
return a[b]},
j(a,b,c){A.J(b)
A.o2(c)
A.by(b,a,a.length)
a[b]=c},
$ip:1,
$ih:1,
$in:1}
A.e5.prototype={
j(a,b,c){A.J(b)
A.J(c)
A.by(b,a,a.length)
a[b]=c},
$ip:1,
$ih:1,
$in:1}
A.e4.prototype={$imr:1}
A.fN.prototype={
h(a,b){A.by(b,a,a.length)
return a[b]}}
A.fO.prototype={
h(a,b){A.by(b,a,a.length)
return a[b]}}
A.fP.prototype={
h(a,b){A.by(b,a,a.length)
return a[b]}}
A.fQ.prototype={
h(a,b){A.by(b,a,a.length)
return a[b]}}
A.fR.prototype={
h(a,b){A.by(b,a,a.length)
return a[b]}}
A.d5.prototype={
gm(a){return a.length},
h(a,b){A.by(b,a,a.length)
return a[b]},
$iq3:1}
A.e6.prototype={
gm(a){return a.length},
h(a,b){A.by(b,a,a.length)
return a[b]},
$iq4:1}
A.ex.prototype={}
A.ey.prototype={}
A.ez.prototype={}
A.eA.prototype={}
A.aY.prototype={
i(a){return A.ls(v.typeUniverse,this,a)},
B(a){return A.qw(v.typeUniverse,this,a)}}
A.hW.prototype={}
A.eM.prototype={
l(a){return A.am(this.a,null)},
$inN:1}
A.hS.prototype={
l(a){return this.a}}
A.eN.prototype={$ibU:1}
A.kY.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:13}
A.kX.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:33}
A.kZ.prototype={
$0(){this.a.$0()},
$S:6}
A.l_.prototype={
$0(){this.a.$0()},
$S:6}
A.eL.prototype={
dL(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.be(new A.lr(this,b),0),a)
else throw A.d(A.D("`setTimeout()` not found."))},
dM(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.be(new A.lq(this,a,Date.now(),b),0),a)
else throw A.d(A.D("Periodic timer."))},
eM(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.d(A.D("Canceling a timer."))},
$ihq:1}
A.lr.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.lq.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.d.bZ(s,o)}q.c=p
r.d.$1(q)},
$S:6}
A.hD.prototype={
a1(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.c2(b)
else{s=r.a
if(q.i("ar<1>").b(b))s.c5(b)
else s.as(q.c.a(b))}},
bp(a,b){var s=this.a
if(this.b)s.L(a,b)
else s.b0(a,b)}}
A.lw.prototype={
$1(a){return this.a.$2(0,a)},
$S:7}
A.lx.prototype={
$2(a,b){this.a.$2(1,new A.dQ(a,t.l.a(b)))},
$S:31}
A.lB.prototype={
$2(a,b){this.a(A.J(a),b)},
$S:22}
A.dn.prototype={
l(a){return"IterationMarker("+this.b+", "+A.w(this.a)+")"}}
A.c_.prototype={
gp(a){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gp(s)},
n(){var s,r,q,p,o,n,m=this
for(s=m.$ti.i("U<1>");!0;){r=m.c
if(r!=null)if(r.n())return!0
else m.scm(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.dn){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sc1(null)
return!1}if(0>=o.length)return A.b(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.ae(r))
if(n instanceof A.c_){r=m.d
if(r==null)r=m.d=[]
B.a.k(r,m.a)
m.a=n.a
continue}else{m.scm(n)
continue}}}}else{m.sc1(q)
return!0}}return!1},
sc1(a){this.b=this.$ti.i("1?").a(a)},
scm(a){this.c=this.$ti.i("U<1>?").a(a)},
$iU:1}
A.eI.prototype={
gt(a){return new A.c_(this.a(),this.$ti.i("c_<1>"))}}
A.dF.prototype={
l(a){return A.w(this.a)},
$iK:1,
gaB(){return this.b}}
A.jA.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.L(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.L(q.e.aG(),q.f.aG())},
$S:8}
A.jz.prototype={
$1(a){var s,r,q=this,p=q.x
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.n2(s,q.b,a)
if(r.b===0)q.c.as(A.pL(s,p))}else if(r.b===0&&!q.e)q.c.L(q.f.aG(),q.r.aG())},
$S(){return this.x.i("V(0)")}}
A.eo.prototype={
bp(a,b){A.eW(a,"error",t.K)
if((this.a.a&30)!==0)throw A.d(A.a5("Future already completed"))
if(b==null)b=A.ml(a)
this.L(a,b)},
aL(a){return this.bp(a,null)}}
A.aT.prototype={
a1(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.a5("Future already completed"))
s.c2(r.i("1/").a(b))},
aK(a){return this.a1(a,null)},
L(a,b){this.a.b0(a,b)}}
A.dp.prototype={
a1(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.a5("Future already completed"))
s.c9(r.i("1/").a(b))},
aK(a){return this.a1(a,null)},
L(a,b){this.a.L(a,b)}}
A.cB.prototype={
f7(a){if((this.c&15)!==6)return!0
return this.b.b.bI(t.iW.a(this.d),a.a,t.k4,t.K)},
f2(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.fk(q,m,a.b,o,n,t.l)
else p=l.bI(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bE.b(A.b2(s))){if((r.c&1)!==0)throw A.d(A.cN("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cN("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.I.prototype={
aQ(a,b,c){var s,r,q,p=this.$ti
p.B(c).i("1/(2)").a(a)
s=$.E
if(s===B.j){if(b!=null&&!t.ng.b(b)&&!t.y.b(b))throw A.d(A.n7(b,"onError",u.c))}else{c.i("@<0/>").B(p.c).i("1(2)").a(a)
if(b!=null)b=A.r5(b,s)}r=new A.I(s,c.i("I<0>"))
q=b==null?1:3
this.b_(new A.cB(r,q,a,b,p.i("@<1>").B(c).i("cB<1,2>")))
return r},
dd(a,b){return this.aQ(a,null,b)},
cw(a,b,c){var s,r=this.$ti
r.B(c).i("1/(2)").a(a)
s=new A.I($.E,c.i("I<0>"))
this.b_(new A.cB(s,19,a,b,r.i("@<1>").B(c).i("cB<1,2>")))
return s},
el(a){this.a=this.a&1|16
this.c=a},
b2(a){this.a=a.a&30|this.a&1
this.c=a.c},
b_(a){var s,r=this,q=r.a
if(q<=3){a.a=t.d.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.p.a(r.c)
if((s.a&24)===0){s.b_(a)
return}r.b2(s)}A.dt(null,null,r.b,t.M.a(new A.l3(r,a)))}},
cq(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.d.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.p.a(m.c)
if((n.a&24)===0){n.cq(a)
return}m.b2(n)}l.a=m.aI(a)
A.dt(null,null,m.b,t.M.a(new A.lb(l,m)))}},
aH(){var s=t.d.a(this.c)
this.c=null
return this.aI(s)},
aI(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
c4(a){var s,r,q,p=this
p.a^=2
try{a.aQ(new A.l7(p),new A.l8(p),t.P)}catch(q){s=A.b2(q)
r=A.bC(q)
A.oq(new A.l9(p,s,r))}},
c9(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("ar<1>").b(a))if(q.b(a))A.l6(a,r)
else r.c4(a)
else{s=r.aH()
q.c.a(a)
r.a=8
r.c=a
A.dm(r,s)}},
as(a){var s,r=this
r.$ti.c.a(a)
s=r.aH()
r.a=8
r.c=a
A.dm(r,s)},
L(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.aH()
this.el(A.iY(a,b))
A.dm(this,s)},
c2(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("ar<1>").b(a)){this.c5(a)
return}this.dQ(s.c.a(a))},
dQ(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.dt(null,null,s.b,t.M.a(new A.l5(s,a)))},
c5(a){var s=this,r=s.$ti
r.i("ar<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.dt(null,null,s.b,t.M.a(new A.la(s,a)))}else A.l6(a,s)
return}s.c4(a)},
b0(a,b){t.l.a(b)
this.a^=2
A.dt(null,null,this.b,t.M.a(new A.l4(this,a,b)))},
$iar:1}
A.l3.prototype={
$0(){A.dm(this.a,this.b)},
$S:0}
A.lb.prototype={
$0(){A.dm(this.b,this.a.a)},
$S:0}
A.l7.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.as(p.$ti.c.a(a))}catch(q){s=A.b2(q)
r=A.bC(q)
p.L(s,r)}},
$S:13}
A.l8.prototype={
$2(a,b){this.a.L(t.K.a(a),t.l.a(b))},
$S:38}
A.l9.prototype={
$0(){this.a.L(this.b,this.c)},
$S:0}
A.l5.prototype={
$0(){this.a.as(this.b)},
$S:0}
A.la.prototype={
$0(){A.l6(this.b,this.a)},
$S:0}
A.l4.prototype={
$0(){this.a.L(this.b,this.c)},
$S:0}
A.le.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.fj(t.mY.a(q.d),t.z)}catch(p){s=A.b2(p)
r=A.bC(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.iY(s,r)
o.b=!0
return}if(l instanceof A.I&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.g7.b(l)){n=m.b.a
q=m.a
q.c=l.dd(new A.lf(n),t.z)
q.b=!1}},
$S:0}
A.lf.prototype={
$1(a){return this.a},
$S:42}
A.ld.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bI(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.b2(l)
r=A.bC(l)
q=this.a
q.c=A.iY(s,r)
q.b=!0}},
$S:0}
A.lc.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.f7(s)&&p.a.e!=null){p.c=p.a.f2(s)
p.b=!1}}catch(o){r=A.b2(o)
q=A.bC(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.iY(r,q)
n.b=!0}},
$S:0}
A.hE.prototype={}
A.cu.prototype={
gm(a){var s={},r=new A.I($.E,t.hy)
s.a=0
this.bA(new A.kB(s,this),!0,new A.kC(s,r),r.gdU())
return r}}
A.kB.prototype={
$1(a){A.B(this.b).c.a(a);++this.a.a},
$S(){return A.B(this.b).i("~(1)")}}
A.kC.prototype={
$0(){this.b.c9(this.a.a)},
$S:0}
A.br.prototype={}
A.eG.prototype={
gec(){var s,r=this
if((r.b&8)===0)return A.B(r).i("bZ<1>?").a(r.a)
s=A.B(r)
return s.i("bZ<1>?").a(s.i("il<1>").a(r.a).gbO())},
e_(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.bd(A.B(q).i("bd<1>"))
return A.B(q).i("bd<1>").a(s)}r=A.B(q)
s=r.i("il<1>").a(q.a).gbO()
return r.i("bd<1>").a(s)},
geq(){var s=this.a
if((this.b&8)!==0)s=t.d1.a(s).gbO()
return A.B(this).i("dl<1>").a(s)},
dR(){if((this.b&4)!==0)return new A.bq("Cannot add event after closing")
return new A.bq("Cannot add event while adding a stream")},
k(a,b){var s,r=this,q=A.B(r)
q.c.a(b)
s=r.b
if(s>=4)throw A.d(r.dR())
if((s&1)!==0)r.bi(b)
else if((s&3)===0)r.e_().k(0,new A.cy(b,q.i("cy<1>")))},
ep(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=A.B(l)
k.i("~(1)?").a(a)
t.Z.a(c)
if((l.b&3)!==0)throw A.d(A.a5("Stream has already been listened to."))
s=$.E
r=d?1:0
t.gS.B(k.c).i("1(2)").a(a)
A.qb(s,b)
q=c==null?A.rj():c
p=t.M
p.a(q)
o=new A.dl(l,a,s,r,k.i("dl<1>"))
n=l.gec()
r=l.b|=1
if((r&8)!==0){m=k.i("il<1>").a(l.a)
m.sbO(o)
m.fh(0)}else l.a=o
o.em(n)
k=p.a(new A.lo(l))
s=o.e
o.e=s|32
k.$0()
o.e&=4294967263
o.c6((s&4)!==0)
return o},
$inI:1,
$inV:1,
$icz:1}
A.lo.prototype={
$0(){A.mN(this.a.d)},
$S:0}
A.hF.prototype={
bi(a){var s=this.$ti
s.c.a(a)
this.geq().dP(new A.cy(a,s.i("cy<1>")))}}
A.dj.prototype={}
A.bW.prototype={
gu(a){return(A.ct(this.a)^892482866)>>>0},
H(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bW&&b.a===this.a}}
A.dl.prototype={
cn(){var s=this.x,r=A.B(s)
r.i("br<1>").a(this)
if((s.b&8)!==0)r.i("il<1>").a(s.a).fE(0)
A.mN(s.e)},
co(){var s=this.x,r=A.B(s)
r.i("br<1>").a(this)
if((s.b&8)!==0)r.i("il<1>").a(s.a).fh(0)
A.mN(s.f)}}
A.en.prototype={
em(a){var s=this
A.B(s).i("bZ<1>?").a(a)
if(a==null)return
s.sbf(a)
if(a.c!=null){s.e|=64
a.aU(s)}},
cn(){},
co(){},
dP(a){var s=this,r=A.B(s),q=r.i("bd<1>?").a(s.r)
if(q==null)q=new A.bd(r.i("bd<1>"))
s.sbf(q)
q.k(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.aU(s)}},
bi(a){var s,r=this,q=A.B(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.d9(r.a,a,q)
r.e&=4294967263
r.c6((s&4)!==0)},
c6(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.sbf(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.cn()
else q.co()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.aU(q)},
sbf(a){this.r=A.B(this).i("bZ<1>?").a(a)},
$ibr:1,
$icz:1}
A.eH.prototype={
bA(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.ep(s.i("~(1)?").a(a),d,c,b===!0)},
d_(a){return this.bA(a,null,null,null)}}
A.hM.prototype={}
A.cy.prototype={}
A.bZ.prototype={
aU(a){var s,r=this
r.$ti.i("cz<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.oq(new A.lj(r,a))
r.a=1}}
A.lj.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("cz<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.B(r).i("cz<1>").a(s).bi(r.b)},
$S:0}
A.bd.prototype={
k(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.im.prototype={}
A.eR.prototype={$inP:1}
A.lA.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.l(0)
throw s},
$S:0}
A.id.prototype={
fl(a){var s,r,q,p,o
t.M.a(a)
try{if(B.j===$.E){a.$0()
return}A.oa(null,null,this,a,t.H)}catch(q){s=A.b2(q)
r=A.bC(q)
p=t.K.a(s)
o=t.l.a(r)
A.iP(p,o)}},
d9(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.j===$.E){a.$1(b)
return}A.ob(null,null,this,a,b,t.H,c)}catch(q){s=A.b2(q)
r=A.bC(q)
p=t.K.a(s)
o=t.l.a(r)
A.iP(p,o)}},
cF(a){return new A.lk(this,t.M.a(a))},
cG(a,b){return new A.ll(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
fj(a,b){b.i("0()").a(a)
if($.E===B.j)return a.$0()
return A.oa(null,null,this,a,b)},
bI(a,b,c,d){c.i("@<0>").B(d).i("1(2)").a(a)
d.a(b)
if($.E===B.j)return a.$1(b)
return A.ob(null,null,this,a,b,c,d)},
fk(a,b,c,d,e,f){d.i("@<0>").B(e).B(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.E===B.j)return a.$2(b,c)
return A.r6(null,null,this,a,b,c,d,e,f)},
bG(a,b,c,d){return b.i("@<0>").B(c).B(d).i("1(2,3)").a(a)}}
A.lk.prototype={
$0(){return this.a.fl(this.b)},
$S:0}
A.ll.prototype={
$1(a){var s=this.c
return this.a.d9(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.li.prototype={
an(a){return A.lR(a)&1073741823},
ao(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.et.prototype={
h(a,b){if(!A.N(this.z.$1(b)))return null
return this.dB(b)},
j(a,b,c){var s=this.$ti
this.dD(s.c.a(b),s.Q[1].a(c))},
aM(a,b){if(!A.N(this.z.$1(b)))return!1
return this.dA(b)},
J(a,b){if(!A.N(this.z.$1(b)))return null
return this.dC(b)},
an(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
ao(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(A.N(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.lh.prototype={
$1(a){return this.a.b(a)},
$S:46}
A.cD.prototype={
gt(a){var s=this,r=new A.eu(s,s.r,A.B(s).i("eu<1>"))
r.c=s.e
return r},
gm(a){return this.a},
v(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.dV(b)},
dV(a){var s=this.d
if(s==null)return!1
return this.ci(s[this.ca(a)],a)>=0},
k(a,b){var s,r,q=this
A.B(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.c7(s==null?q.b=A.mE():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.c7(r==null?q.c=A.mE():r,b)}else return q.dT(0,b)},
dT(a,b){var s,r,q,p=this
A.B(p).c.a(b)
s=p.d
if(s==null)s=p.d=A.mE()
r=p.ca(b)
q=s[r]
if(q==null)s[r]=[p.b3(b)]
else{if(p.ci(q,b)>=0)return!1
q.push(p.b3(b))}return!0},
c7(a,b){A.B(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.b3(b)
return!0},
b3(a){var s=this,r=new A.i2(A.B(s).c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
ca(a){return J.cK(a)&1073741823},
ci(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Z(a[r].a,b))return r
return-1}}
A.i2.prototype={}
A.eu.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.bg(q))
else if(r==null){s.sc8(null)
return!1}else{s.sc8(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sc8(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
A.dV.prototype={}
A.jS.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:47}
A.e0.prototype={$ip:1,$ih:1,$in:1}
A.k.prototype={
gt(a){return new A.bm(a,this.gm(a),A.aU(a).i("bm<k.E>"))},
w(a,b){return this.h(a,b)},
ax(a,b,c,d){var s,r=A.aU(a)
d=r.i("k.E").a(r.i("k.E?").a(d))
A.mA(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
l(a){return A.ms(a,"[","]")}}
A.e2.prototype={}
A.jW.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.w(a)
r.a=s+": "
r.a+=A.w(b)},
$S:61}
A.x.prototype={
C(a,b){var s,r,q=A.aU(a)
q.i("~(x.K,x.V)").a(b)
for(s=J.ae(this.gK(a)),q=q.i("x.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gai(a){return J.pf(this.gK(a),new A.jY(a),A.aU(a).i("d1<x.K,x.V>"))},
gm(a){return J.an(this.gK(a))},
l(a){return A.my(a)},
$iQ:1}
A.jY.prototype={
$1(a){var s,r=this.a,q=A.aU(r)
q.i("x.K").a(a)
s=q.i("x.V")
return new A.d1(a,s.a(J.n1(r,a)),q.i("@<x.K>").B(s).i("d1<1,2>"))},
$S(){return A.aU(this.a).i("d1<x.K,x.V>(x.K)")}}
A.ef.prototype={
G(a,b){var s
for(s=J.ae(A.B(this).i("h<1>").a(b));s.n();)this.k(0,s.gp(s))},
l(a){return A.ms(this,"{","}")}}
A.eB.prototype={$ip:1,$ih:1,$inF:1}
A.ev.prototype={}
A.eS.prototype={}
A.cd.prototype={
H(a,b){if(b==null)return!1
return b instanceof A.cd&&this.a===b.a&&!0},
M(a,b){return B.d.M(this.a,t.cs.a(b).a)},
gu(a){var s=this.a
return(s^B.d.cu(s,30))&1073741823},
l(a){var s=this,r=A.pr(A.pW(s)),q=A.fj(A.pU(s)),p=A.fj(A.pQ(s)),o=A.fj(A.pR(s)),n=A.fj(A.pT(s)),m=A.fj(A.pV(s)),l=A.ps(A.pS(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
return k},
$iaf:1}
A.ag.prototype={
H(a,b){if(b==null)return!1
return b instanceof A.ag&&this.a===b.a},
gu(a){return B.d.gu(this.a)},
M(a,b){return B.d.M(this.a,t.L.a(b).a)},
l(a){var s,r,q,p,o,n=this.a,m=B.d.P(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.d.P(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.d.P(n,1e6)
p=q<10?"0":""
o=B.w.d5(B.d.l(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o},
$iaf:1}
A.l1.prototype={}
A.K.prototype={
gaB(){return A.bC(this.$thrownJsError)}}
A.dE.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fo(s)
return"Assertion failed"}}
A.bU.prototype={}
A.fW.prototype={
l(a){return"Throw of null."}}
A.b3.prototype={
gb6(){return"Invalid argument"+(!this.a?"(s)":"")},
gb5(){return""},
l(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+A.w(n),l=q.gb6()+o+m
if(!q.a)return l
s=q.gb5()
r=A.fo(q.b)
return l+s+": "+r}}
A.d9.prototype={
gb6(){return"RangeError"},
gb5(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.fx.prototype={
gb6(){return"RangeError"},
gb5(){if(A.J(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.hx.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.hu.prototype={
l(a){var s="UnimplementedError: "+this.a
return s}}
A.bq.prototype={
l(a){return"Bad state: "+this.a}}
A.ff.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fo(s)+"."}}
A.fZ.prototype={
l(a){return"Out of Memory"},
gaB(){return null},
$iK:1}
A.eh.prototype={
l(a){return"Stack Overflow"},
gaB(){return null},
$iK:1}
A.fi.prototype={
l(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.hT.prototype={
l(a){return"Exception: "+this.a}}
A.h.prototype={
d0(a,b,c){var s=A.B(this)
return A.nu(this,s.B(c).i("1(h.E)").a(b),s.i("h.E"),c)},
aS(a,b){var s=A.B(this)
return new A.a8(this,s.i("z(h.E)").a(b),s.i("a8<h.E>"))},
C(a,b){var s
A.B(this).i("~(h.E)").a(b)
for(s=this.gt(this);s.n();)b.$1(s.gp(s))},
gm(a){var s,r=this.gt(this)
for(s=0;r.n();)++s
return s},
ga9(a){var s,r=this.gt(this)
if(!r.n())throw A.d(A.mt())
s=r.gp(r)
if(r.n())throw A.d(A.nn())
return s},
w(a,b){var s,r,q
A.kn(b,"index")
for(s=this.gt(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.d(A.R(b,this,"index",null,r))},
l(a){return A.nm(this,"(",")")}}
A.U.prototype={}
A.d1.prototype={
l(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.V.prototype={
gu(a){return A.v.prototype.gu.call(this,this)},
l(a){return"null"}}
A.v.prototype={$iv:1,
H(a,b){return this===b},
gu(a){return A.ct(this)},
l(a){return"Instance of '"+A.kj(this)+"'"},
toString(){return this.l(this)}}
A.iq.prototype={
l(a){return""},
$iaZ:1}
A.hj.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.u.prototype={}
A.iU.prototype={
gm(a){return a.length}}
A.cM.prototype={
sf3(a,b){a.href=b},
l(a){return String(a)},
$icM:1}
A.f3.prototype={
l(a){return String(a)}}
A.cQ.prototype={$icQ:1}
A.f8.prototype={}
A.c7.prototype={
gbB(a){return new A.bX(a,"load",!1,t.bz)},
$ic7:1}
A.c8.prototype={
sa4(a,b){a.height=b},
sa6(a,b){a.width=b},
bQ(a,b){return a.getContext(b)},
$ic8:1}
A.cS.prototype={
seW(a,b){a.fillStyle=b},
$icS:1}
A.b6.prototype={
gm(a){return a.length}}
A.jf.prototype={
gm(a){return a.length}}
A.G.prototype={$iG:1}
A.cV.prototype={
ar(a,b){var s=$.ou(),r=s[b]
if(typeof r=="string")return r
r=this.er(a,b)
s[b]=r
return r},
er(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.ow()+b
if(s in a)return s
return b},
av(a,b,c,d){if(d==null)d=""
a.setProperty(b,c,d)},
gm(a){return a.length}}
A.jg.prototype={}
A.aV.prototype={}
A.bh.prototype={}
A.jh.prototype={
gm(a){return a.length}}
A.ji.prototype={
gm(a){return a.length}}
A.jj.prototype={
gm(a){return a.length},
h(a,b){return a[b]}}
A.cW.prototype={$icW:1}
A.b8.prototype={$ib8:1}
A.bK.prototype={
l(a){return String(a)},
$ibK:1}
A.fl.prototype={
eR(a,b){return a.createHTMLDocument(b)}}
A.dM.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.mx.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.dN.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.w(r)+", "
s=a.top
s.toString
return r+A.w(s)+") "+A.w(this.ga6(a))+" x "+A.w(this.ga4(a))},
H(a,b){var s,r
if(b==null)return!1
if(t.mx.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=J.c4(b)
s=this.ga6(a)===s.ga6(b)&&this.ga4(a)===s.ga4(b)}else s=!1}else s=!1}else s=!1
return s},
gu(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.kf(r,s,this.ga6(a),this.ga4(a))},
gck(a){return a.height},
ga4(a){var s=this.gck(a)
s.toString
return s},
gcz(a){return a.width},
ga6(a){var s=this.gcz(a)
s.toString
return s},
$ibb:1}
A.fm.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
A.P(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.jk.prototype={
gm(a){return a.length}}
A.M.prototype={
geJ(a){return new A.hR(a)},
l(a){return a.localName},
T(a,b,c,d){var s,r,q,p
if(c==null){s=$.ni
if(s==null){s=A.c([],t.lN)
r=new A.e8(s)
B.a.k(s,A.nR(null))
B.a.k(s,A.nW())
$.ni=r
d=r}else d=s
s=$.nh
if(s==null){s=new A.eQ(d)
$.nh=s
c=s}else{s.a=d
c=s}}if($.bL==null){s=document
r=s.implementation
r.toString
r=B.dw.eR(r,"")
$.bL=r
$.mo=r.createRange()
r=$.bL.createElement("base")
t.az.a(r)
s=s.baseURI
s.toString
r.href=s
$.bL.head.appendChild(r)}s=$.bL
if(s.body==null){r=s.createElement("body")
B.dB.seK(s,t.hp.a(r))}s=$.bL
if(t.hp.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.bL.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!B.a.v(B.dU,a.tagName)){$.mo.selectNodeContents(q)
s=$.mo
p=s.createContextualFragment(b)}else{J.pg(q,b)
p=$.bL.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.bL.body)J.n4(q)
c.bS(p)
document.adoptNode(p)
return p},
eQ(a,b,c){return this.T(a,b,c,null)},
scT(a,b){this.aW(a,b)},
aW(a,b){this.sdc(a,null)
a.appendChild(this.T(a,b,null,null))},
se7(a,b){a.innerHTML=b},
gda(a){return a.tagName},
gbB(a){return new A.bX(a,"load",!1,t.bz)},
$iM:1}
A.jr.prototype={
$1(a){return t.h.b(t.F.a(a))},
$S:62}
A.l.prototype={$il:1}
A.e.prototype={
eF(a,b,c,d){t.du.a(c)
if(c!=null)this.dO(a,b,c,!1)},
dO(a,b,c,d){return a.addEventListener(b,A.be(t.du.a(c),1),!1)},
$ie:1}
A.ay.prototype={$iay:1}
A.fp.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.et.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.fq.prototype={
gm(a){return a.length}}
A.fs.prototype={
gm(a){return a.length}}
A.az.prototype={$iaz:1}
A.jG.prototype={
gm(a){return a.length}}
A.ch.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.F.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.dT.prototype={
seK(a,b){a.body=b}}
A.dU.prototype={
fb(a,b,c){return a.open(b,c)}}
A.ci.prototype={}
A.d_.prototype={$id_:1}
A.bk.prototype={$ibk:1}
A.e1.prototype={
l(a){return String(a)},
$ie1:1}
A.cq.prototype={}
A.k_.prototype={
gm(a){return a.length}}
A.fI.prototype={
h(a,b){return A.c3(a.get(A.P(b)))},
C(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c3(r.value[1]))}},
gK(a){var s=A.c([],t.s)
this.C(a,new A.k2(s))
return s},
gm(a){return a.size},
$iQ:1}
A.k2.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.fJ.prototype={
h(a,b){return A.c3(a.get(A.P(b)))},
C(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c3(r.value[1]))}},
gK(a){var s=A.c([],t.s)
this.C(a,new A.k3(s))
return s},
gm(a){return a.size},
$iQ:1}
A.k3.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.aB.prototype={$iaB:1}
A.fK.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.ib.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.as.prototype={$ias:1}
A.aj.prototype={
ga9(a){var s=this.a,r=s.childNodes.length
if(r===0)throw A.d(A.a5("No elements"))
if(r>1)throw A.d(A.a5("More than one element"))
s=s.firstChild
s.toString
return s},
G(a,b){var s,r,q,p,o
t.hl.a(b)
s=b.a
r=this.a
if(s!==r)for(q=s.childNodes.length,p=0;p<q;++p){o=s.firstChild
o.toString
r.appendChild(o)}return},
j(a,b,c){var s,r
A.J(b)
t.F.a(c)
s=this.a
r=s.childNodes
if(!(b>=0&&b<r.length))return A.b(r,b)
s.replaceChild(c,r[b])},
gt(a){var s=this.a.childNodes
return new A.cf(s,s.length,A.aU(s).i("cf<r.E>"))},
gm(a){return this.a.childNodes.length},
h(a,b){var s=this.a.childNodes
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b]}}
A.q.prototype={
ff(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
dS(a){var s
for(;s=a.firstChild,s!=null;)a.removeChild(s)},
l(a){var s=a.nodeValue
return s==null?this.dv(a):s},
sdc(a,b){a.textContent=b},
$iq:1}
A.e7.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.F.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.aC.prototype={
gm(a){return a.length},
$iaC:1}
A.h2.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.d8.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.h9.prototype={
h(a,b){return A.c3(a.get(A.P(b)))},
C(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c3(r.value[1]))}},
gK(a){var s=A.c([],t.s)
this.C(a,new A.kq(s))
return s},
gm(a){return a.size},
$iQ:1}
A.kq.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.hb.prototype={
gm(a){return a.length}}
A.au.prototype={$iau:1}
A.he.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.fm.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.aD.prototype={$iaD:1}
A.hf.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.cA.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.aE.prototype={
gm(a){return a.length},
$iaE:1}
A.hi.prototype={
h(a,b){return a.getItem(A.P(b))},
C(a,b){var s,r,q
t.bm.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gK(a){var s=A.c([],t.s)
this.C(a,new A.kA(s))
return s},
gm(a){return a.length},
$iQ:1}
A.kA.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:64}
A.ah.prototype={$iah:1}
A.ej.prototype={
T(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.aY(a,b,c,d)
s=A.pv("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
new A.aj(r).G(0,new A.aj(s))
return r}}
A.hl.prototype={
T(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.aY(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=new A.aj(B.bc.T(s.createElement("table"),b,c,d))
s=new A.aj(s.ga9(s))
new A.aj(r).G(0,new A.aj(s.ga9(s)))
return r}}
A.hm.prototype={
T(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.aY(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=new A.aj(B.bc.T(s.createElement("table"),b,c,d))
new A.aj(r).G(0,new A.aj(s.ga9(s)))
return r}}
A.de.prototype={
aW(a,b){var s,r
this.sdc(a,null)
s=a.content
s.toString
J.p9(s)
r=this.T(a,b,null,null)
a.content.appendChild(r)},
$ide:1}
A.av.prototype={$iav:1}
A.ac.prototype={$iac:1}
A.ho.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.gJ.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.hp.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.dQ.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.kI.prototype={
gm(a){return a.length}}
A.aF.prototype={$iaF:1}
A.hr.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.ki.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.kJ.prototype={
gm(a){return a.length}}
A.bc.prototype={}
A.kM.prototype={
l(a){return String(a)}}
A.dh.prototype={$idh:1}
A.hz.prototype={
gm(a){return a.length}}
A.di.prototype={
d8(a,b){var s
t.hv.a(b)
this.e0(a)
s=A.od(b,t.cZ)
s.toString
return this.eg(a,s)},
eg(a,b){return a.requestAnimationFrame(A.be(t.hv.a(b),1))},
e0(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ikS:1}
A.dk.prototype={$idk:1}
A.hJ.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.d5.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.ep.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.w(r)+", "
s=a.top
s.toString
s=r+A.w(s)+") "
r=a.width
r.toString
r=s+A.w(r)+" x "
s=a.height
s.toString
return r+A.w(s)},
H(a,b){var s,r
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
r=J.c4(b)
if(s===r.ga6(b)){s=a.height
s.toString
r=s===r.ga4(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gu(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.kf(p,s,r,q)},
gck(a){return a.height},
ga4(a){var s=a.height
s.toString
return s},
gcz(a){return a.width},
ga6(a){var s=a.width
s.toString
return s}}
A.hX.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.ef.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.ew.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.F.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.ij.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.hH.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.ir.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.J(b)
t.lv.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iA:1,
$ih:1,
$in:1}
A.hH.prototype={
C(a,b){var s,r,q,p,o
t.bm.a(b)
for(s=this.gK(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
b.$2(o,A.P(q.getAttribute(o)))}},
gK(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=A.c([],t.s)
for(r=m.length,q=t.nD,p=0;p<r;++p){if(!(p<m.length))return A.b(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
B.a.k(s,n)}}return s}}
A.hR.prototype={
h(a,b){return this.a.getAttribute(A.P(b))},
gm(a){return this.gK(this).length}}
A.mp.prototype={}
A.eq.prototype={
bA(a,b,c,d){var s=A.B(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.cA(this.a,this.b,a,!1,s.c)}}
A.bX.prototype={}
A.er.prototype={}
A.l2.prototype={
$1(a){return this.a.$1(t.R.a(a))},
$S:15}
A.cC.prototype={
dJ(a){var s
if($.es.gf6($.es)){for(s=0;s<262;++s)$.es.j(0,B.dQ[s],A.rA())
for(s=0;s<12;++s)$.es.j(0,B.ai[s],A.rB())}},
al(a){return $.oP().v(0,A.dP(a))},
aa(a,b,c){var s=$.es.h(0,A.dP(a)+"::"+b)
if(s==null)s=$.es.h(0,"*::"+b)
if(s==null)return!1
return A.qz(s.$4(a,b,c,this))},
$iaX:1}
A.r.prototype={
gt(a){return new A.cf(a,this.gm(a),A.aU(a).i("cf<r.E>"))}}
A.e8.prototype={
al(a){return B.a.bk(this.a,new A.kb(a))},
aa(a,b,c){return B.a.bk(this.a,new A.ka(a,b,c))},
$iaX:1}
A.kb.prototype={
$1(a){return t.hU.a(a).al(this.a)},
$S:14}
A.ka.prototype={
$1(a){return t.hU.a(a).aa(this.a,this.b,this.c)},
$S:14}
A.eC.prototype={
dK(a,b,c,d){var s,r,q
this.a.G(0,c)
s=b.aS(0,new A.lm())
r=b.aS(0,new A.ln())
this.b.G(0,s)
q=this.c
q.G(0,B.aX)
q.G(0,r)},
al(a){return this.a.v(0,A.dP(a))},
aa(a,b,c){var s=this,r=A.dP(a),q=s.c
if(q.v(0,r+"::"+b))return s.d.eH(c)
else if(q.v(0,"*::"+b))return s.d.eH(c)
else{q=s.b
if(q.v(0,r+"::"+b))return!0
else if(q.v(0,"*::"+b))return!0
else if(q.v(0,r+"::*"))return!0
else if(q.v(0,"*::*"))return!0}return!1},
$iaX:1}
A.lm.prototype={
$1(a){return!B.a.v(B.ai,A.P(a))},
$S:16}
A.ln.prototype={
$1(a){return B.a.v(B.ai,A.P(a))},
$S:16}
A.it.prototype={
aa(a,b,c){if(this.dE(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.v(0,b)
return!1}}
A.lp.prototype={
$1(a){return"TEMPLATE::"+A.P(a)},
$S:25}
A.is.prototype={
al(a){var s
if(t.nZ.b(a))return!1
s=t.bC.b(a)
if(s&&A.dP(a)==="foreignObject")return!1
if(s)return!0
return!1},
aa(a,b,c){if(b==="is"||B.w.dt(b,"on"))return!1
return this.al(a)},
$iaX:1}
A.cf.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.scl(J.n1(s.a,r))
s.c=r
return!0}s.scl(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
scl(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
A.hL.prototype={$ie:1,$ikS:1}
A.ig.prototype={$iq5:1}
A.eQ.prototype={
bS(a){var s,r=new A.lv(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
au(a,b){++this.b
if(b==null||b!==a.parentNode)J.n4(a)
else b.removeChild(a)},
ej(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.pd(a)
l=m.a.getAttribute("is")
t.h.a(a)
s=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=="lastChild"||c.name=="lastChild"||c.id=="previousSibling"||c.name=="previousSibling"||c.id=="children"||c.name=="children")return true
var k=c.childNodes
if(c.lastChild&&c.lastChild!==k[k.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var j=0
if(c.children)j=c.children.length
for(var i=0;i<j;i++){var h=c.children[i]
if(h.id=="attributes"||h.name=="attributes"||h.id=="lastChild"||h.name=="lastChild"||h.id=="previousSibling"||h.name=="previousSibling"||h.id=="children"||h.name=="children")return true}return false}(a)
n=A.N(s)?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){}r="element unprintable"
try{r=J.dz(a)}catch(p){}try{q=A.dP(a)
this.ei(t.h.a(a),b,n,r,q,t.av.a(m),A.o3(l))}catch(p){if(A.b2(p) instanceof A.b3)throw p
else{this.au(a,b)
window
o="Removing corrupted element "+A.w(r)
if(typeof console!="undefined")window.console.warn(o)}}},
ei(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.au(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.al(a)){m.au(a,b)
window
s="Removing disallowed element <"+e+"> from "+A.w(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.aa(a,"is",g)){m.au(a,b)
window
s="Removing disallowed type extension <"+e+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.gK(f)
r=A.c(s.slice(0),A.W(s))
for(q=f.gK(f).length-1,s=f.a;q>=0;--q){if(!(q<r.length))return A.b(r,q)
p=r[q]
o=m.a
n=J.pi(p)
A.P(p)
if(!o.aa(a,n,A.P(s.getAttribute(p)))){window
o="Removing disallowed attribute <"+e+" "+p+'="'+A.w(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.fD.b(a)){s=a.content
s.toString
m.bS(s)}},
$ipO:1}
A.lv.prototype={
$2(a,b){var s,r,q,p,o,n,m=this.a
switch(a.nodeType){case 1:m.ej(a,b)
break
case 8:case 11:case 3:case 4:break
default:m.au(a,b)}s=a.lastChild
for(q=t.F;s!=null;){r=null
try{r=s.previousSibling
if(r!=null){p=r.nextSibling
o=s
o=p==null?o!=null:p!==o
p=o}else p=!1
if(p){p=A.a5("Corrupt HTML")
throw A.d(p)}}catch(n){p=q.a(s);++m.b
o=p.parentNode
if(a!==o){if(o!=null)o.removeChild(p)}else a.removeChild(p)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:26}
A.hK.prototype={}
A.hN.prototype={}
A.hO.prototype={}
A.hP.prototype={}
A.hQ.prototype={}
A.hU.prototype={}
A.hV.prototype={}
A.hY.prototype={}
A.hZ.prototype={}
A.i3.prototype={}
A.i4.prototype={}
A.i5.prototype={}
A.i6.prototype={}
A.i7.prototype={}
A.i8.prototype={}
A.ib.prototype={}
A.ic.prototype={}
A.ie.prototype={}
A.eD.prototype={}
A.eE.prototype={}
A.ih.prototype={}
A.ii.prototype={}
A.ik.prototype={}
A.iu.prototype={}
A.iv.prototype={}
A.eJ.prototype={}
A.eK.prototype={}
A.ix.prototype={}
A.iy.prototype={}
A.iF.prototype={}
A.iG.prototype={}
A.iH.prototype={}
A.iI.prototype={}
A.iJ.prototype={}
A.iK.prototype={}
A.iL.prototype={}
A.iM.prototype={}
A.iN.prototype={}
A.iO.prototype={}
A.kU.prototype={
cO(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.k(r,a)
B.a.k(this.b,null)
return q},
bP(a){var s,r,q,p,o,n,m,l,k=this,j={}
if(a==null)return a
if(A.ly(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.T(A.cN("DateTime is outside valid range: "+s,null))
A.eW(!0,"isUtc",t.k4)
return new A.cd(s,!0)}if(a instanceof RegExp)throw A.d(A.mC("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.rO(a,t.z)
if(A.om(a)){q=k.cO(a)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=j.a=r[q]
if(p!=null)return p
o=t.z
p=A.a7(o,o)
j.a=p
B.a.j(r,q,p)
k.f_(a,new A.kW(j,k))
return j.a}if(a instanceof Array){n=a
q=k.cO(n)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p!=null)return p
o=J.ax(n)
m=o.gm(n)
p=k.c?new Array(m):n
B.a.j(r,q,p)
for(r=J.cH(p),l=0;l<m;++l)r.j(p,l,k.bP(o.h(n,l)))
return p}return a}}
A.kW.prototype={
$2(a,b){var s=this.a.a,r=this.b.bP(b)
J.n2(s,a,r)
return r},
$S:27}
A.kV.prototype={
f_(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.C)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.kd.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.m1.prototype={
$1(a){return this.a.a1(0,this.b.i("0/?").a(a))},
$S:7}
A.m2.prototype={
$1(a){if(a==null)return this.a.aL(new A.kd(a===undefined))
return this.a.aL(a)},
$S:7}
A.i_.prototype={
D(a){if(a<=0||a>4294967296)throw A.d(A.pX("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
Y(){return Math.random()},
f9(){return Math.random()<0.5},
$inA:1}
A.aM.prototype={$iaM:1}
A.fC.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.J(b)
t.kT.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){return this.h(a,b)},
$ip:1,
$ih:1,
$in:1}
A.aP.prototype={$iaP:1}
A.fX.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.J(b)
t.ai.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){return this.h(a,b)},
$ip:1,
$ih:1,
$in:1}
A.ki.prototype={
gm(a){return a.length}}
A.dc.prototype={$idc:1}
A.hk.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.J(b)
A.P(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){return this.h(a,b)},
$ip:1,
$ih:1,
$in:1}
A.m.prototype={
scT(a,b){this.aW(a,b)},
T(a,b,c,d){var s,r,q,p,o,n=A.c([],t.lN)
B.a.k(n,A.nR(null))
B.a.k(n,A.nW())
B.a.k(n,new A.is())
c=new A.eQ(new A.e8(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=B.aA.eQ(r,s,c)
p=n.createDocumentFragment()
n=new A.aj(q)
o=n.ga9(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
gbB(a){return new A.bX(a,"load",!1,t.bz)},
$im:1}
A.aR.prototype={$iaR:1}
A.hs.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.J(b)
t.hk.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
w(a,b){return this.h(a,b)},
$ip:1,
$ih:1,
$in:1}
A.i0.prototype={}
A.i1.prototype={}
A.i9.prototype={}
A.ia.prototype={}
A.io.prototype={}
A.ip.prototype={}
A.iz.prototype={}
A.iA.prototype={}
A.b4.prototype={
gm(a){return a.length},
$ib4:1}
A.dH.prototype={
seL(a,b){a.buffer=b}}
A.c6.prototype={
dX(a,b,c,d){t.p0.a(c)
t.lW.a(d)
return a.decodeAudioData(b,A.be(c,1),A.be(d,1))},
eS(a,b){var s=new A.I($.E,t.og),r=new A.aT(s,t.oJ)
this.dX(a,b,new A.j1(r),new A.j2(r))
return s},
$ic6:1}
A.j1.prototype={
$1(a){this.a.a1(0,t.bD.a(a))},
$S:28}
A.j2.prototype={
$1(a){this.a.aL(t.jW.a(a))},
$S:29}
A.F.prototype={
cb(a,b,c,d){return a.connect(b,c,d)},
$iF:1}
A.f4.prototype={
saR(a,b){a.value=b}}
A.f5.prototype={
h(a,b){return A.c3(a.get(A.P(b)))},
C(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c3(r.value[1]))}},
gK(a){var s=A.c([],t.s)
this.C(a,new A.j3(s))
return s},
gm(a){return a.size},
$iQ:1}
A.j3.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.bf.prototype={}
A.f6.prototype={
gm(a){return a.length}}
A.dI.prototype={}
A.cZ.prototype={}
A.fY.prototype={
gm(a){return a.length}}
A.hI.prototype={}
A.f9.prototype={$if9:1}
A.ft.prototype={$ift:1}
A.h3.prototype={$ih3:1}
A.da.prototype={
cH(a,b){return a.bindVertexArray(b)},
cE(a,b,c){return a.bindBuffer(b,c)},
aw(a,b,c){return a.bindFramebuffer(b,c)},
R(a,b,c){return a.bindTexture(b,c)},
cJ(a,b){return a.deleteTexture(b)},
bw(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
az(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.mL(g)){s.es(a,b,c,d,e,f,g,h,i,j)
return}if(t.hQ.b(g)&&h==null&&r&&j==null){s.eu(a,b,c,d,e,f,g)
return}if(t.r.b(g)&&h==null&&r&&j==null){s.ev(a,b,c,d,e,f,g)
return}if(t.eL.b(g)&&h==null&&r&&j==null){s.ew(a,b,c,d,e,f,g)
return}throw A.d(A.cN("Incorrect number or type of arguments",null))},
fn(a,b,c,d,e,f,g){return this.az(a,b,c,d,e,f,g,null,null,null)},
es(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
eu(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ev(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ew(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ft(a,b,c){return a.uniform1f(b,c)},
fu(a,b,c){return a.uniform1i(b,c)},
fv(a,b,c,d){return a.uniform2f(b,c,d)},
fw(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fz(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fB(a,b){return a.useProgram(b)},
$ida:1}
A.bs.prototype={$ibs:1}
A.ht.prototype={$iht:1}
A.hy.prototype={$ihy:1}
A.fw.prototype={
b4(a){var s=this.b
if(!(a>=0&&a<s.length))return A.b(s,a)
s=s[a]
return s==null?this.$ti.c.a(null):s},
k(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b);++o.d
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.b9(q,null,!1,n.i("1?"))
B.a.bT(p,0,o.c,o.b)
o.sbg(p)}o.b1(b,o.c++)},
gm(a){return this.c},
J(a,b){var s,r,q=this
q.$ti.c.a(b)
s=q.e8(b)
if(s<0)return!1;++q.d
r=q.ee()
if(s<q.c)if(q.a.$2(r,b)<=0)q.b1(r,s)
else q.c3(r,s)
return!0},
ex(){var s,r,q=this.$ti,p=A.c([],q.i("t<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
l(a){var s=this.b
return A.nm(A.nL(s,0,A.eW(this.c,"count",t.S),A.W(s).c),"(",")")},
aC(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.b9(q,null,!1,n.i("1?"))
B.a.bT(p,0,o.c,o.b)
o.sbg(p)}o.b1(b,o.c++)},
e8(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.b4(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.Z(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
ee(){var s=this,r=s.c-1,q=s.b4(r)
B.a.j(s.b,r,null)
s.c=r
return q},
b1(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.d.P(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.U()
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
if(p<q){j=i.b4(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sbg(a){this.b=this.$ti.i("n<1?>").a(a)}}
A.lt.prototype={
gt(a){var s=this.a
return new A.cE(s,s.d,this.$ti.i("cE<1>"))}}
A.cE.prototype={
n(){var s,r=this,q=r.a
if(r.b!==q.d)throw A.d(A.bg(q))
s=r.d+1
if(0<=s&&s<q.c){q=q.b
if(!(s>=0&&s<q.length))return A.b(q,s)
r.scr(q[s])
r.d=s
return!0}r.scr(null)
r.d=-2
return!1},
gp(a){var s
if(this.d<0)s=A.T(A.a5("No element"))
else{s=this.c
if(s==null)s=this.$ti.c.a(null)}return s},
scr(a){this.c=this.$ti.i("1?").a(a)},
$iU:1}
A.f.prototype={
H(a,b){if(b==null)return!1
return b instanceof A.f&&b.a===this.a},
gu(a){return B.d.gu(this.a)},
l(a){return"Color(0x"+B.w.d5(B.d.fq(this.a,16),8,"0")+")"}}
A.a3.prototype={
cQ(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.d.aA(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.d(A.a5(b.l(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.d.aA(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.d(A.mq(b.l(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
a0(a,b,c){var s=B.d.aA(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
F(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.d.aA(d*s+c)
q=p.c
if(r>=q.length)throw A.d(A.mq("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
l(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.d.aA(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.w(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.fV.prototype={
saR(a,b){var s,r,q,p=this
p.$ti.c.a(b)
if(b===p.b)return
p.seC(b)
s=p.a
r=A.c(s.slice(0),A.W(s))
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.C)(r),++q)r[q].$0()},
seC(a){this.b=this.$ti.c.a(a)}}
A.aQ.prototype={
E(a,b){return new A.aQ(this.a+b.a,this.b+b.b)},
H(a,b){if(b==null)return!1
return b instanceof A.aQ&&b.a===this.a&&b.b===this.b},
gu(a){return A.kf(this.a,this.b,B.B,B.B)},
l(a){return"Offset("+B.c.de(this.a,1)+", "+B.c.de(this.b,1)+")"}}
A.cL.prototype={
ga2(a){return B.c.A(this.b.d/24)},
ga3(a){return B.c.A(this.b.e/36)},
q(){var s=this.b
return new A.j(B.c.A(s.d/24),B.c.A(s.e/36))},
$idS:1,
gbz(){return null}}
A.iT.prototype={}
A.iS.prototype={
eI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.b
c.fa()
s=t.c7
r=A.c([],s)
q=A.c([],s)
s=b.c
p=s.e
s=s.d
if(!(s<p.length))return A.b(p,s)
o=p[s]
s=a.q()
s.toString
n=b.z.a_(s)
for(p=o.a,m=p.length,l=n.c,k=n.a,j=l.length,c=c.a,i=0;i<p.length;p.length===m||(0,A.C)(p),++i){h=p[i]
if(h.e)continue
g=h.q()
if(g==null)continue
f=g.aP(s)
e=g.b*k+g.a
if(!(e>=0&&e<j))return A.b(l,e)
if(l[e]<=0||h===a)continue
if(!A.ol(h,a))B.a.k(q,h)
else if(f<10.5){B.a.k(r,h)
e=h.q()
d=e.b*100+e.a
if(!(d>=0&&d<4000))return A.b(c,d)
B.ek.j(c,d,Math.max(c[d],20))}}c=this.a.Z(a,r,q,new A.ad(null,null),b).a
if(c==null)return new A.dd()
return c}}
A.ad.prototype={}
A.ap.prototype={}
A.bR.prototype={
Z(a,b,c,d,e){var s,r,q=null,p=t.k
p.a(b)
p.a(c)
if(d.b!=null)return d
p=a.r
s=p==null
if((s?q:p.c)!=null)r=B.a.v(b,s?q:p.c)
else r=!1
if(r){if(s)p=q
else{p=p.c
p.toString}return new A.ad(q,p)}return d}}
A.bS.prototype={
Z(a,b,c,d,e){var s,r=t.k
r.a(b)
r.a(c)
if(d.b!=null)return d
if(0<b.length){s=b[0]
r=a.r
if(r!=null)r.c=s
return new A.ad(null,s)}return d}}
A.cT.prototype={
Z(a,b,c,d,e){var s,r,q=t.k
q.a(b)
q.a(c)
if(d.b!=null||c.length===0)return d
for(q=c.length,s=0;s<q;++s){r=c[s].r
if(r!=null&&r.c!=null){q=r.c
q.toString
return new A.ad(null,q)}}return d}}
A.bP.prototype={
Z(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=t.k
j.a(b)
j.a(c)
j=e.c
s=j.e
j=j.d
if(!(j<s.length))return A.b(s,j)
r=s[j]
if(d.b!=null)return d
for(j=a.r.b.a,q=-1,p=0,o=0;o<4000;++o){n=j[o]
if(n>p){p=n
q=o}}if(q===-1)return d
j=B.d.dm(q,100)
s=B.d.P(q,100)
m=$.eY()
l=a.q()
l.toString
k=m.bu(l,new A.j(j,s),r)
if(k==null)return d
j=k.b.d
s=a.q()
s.toString
return new A.ad(new A.aO(j.W(0,s),a),null)}}
A.h7.prototype={
Z(a,b,c,d,e){var s,r,q,p=t.k
p.a(b)
p.a(c)
p=e.c
s=p.e
p=p.d
if(!(p<s.length))return A.b(s,p)
r=s[p]
if(this.b){this.b=!1
return d}p=a.q()
p.toString
q=e.fy.a.bt(r,p,-1)
if(q==null)return d
this.b=!0
p=a.q()
p.toString
return new A.ad(new A.aO(q.W(0,p),a),null)}}
A.ec.prototype={
Z(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=t.k
c.a(b)
c.a(a0)
c=a2.c
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
q=c.W(0,s)
e.a=e.a.b
return new A.ad(new A.aO(q,a),d)}c=a.q()
c.toString
s=a2.fy.a
p=s.bt(r,c,-1)
if(p==null){o=c.b*100+c.a
s=s.a
if(!(o>=0&&o<4000))return A.b(s,o)
n=s[o]
m=a2.z.a_(c)
for(c=m.c,l=m.a,k=c.length,j=d,i=1;i<100;++i)for(h=1;h<40;++h){o=h*100+i
if(!(o<4000))return A.b(s,o)
g=s[o]
f=h*l+i
if(!(f<k))return A.b(c,f)
if(c[f]>0&&g<n){j=new A.j(i,h)
n=g}}if(j!=null){c=$.eY()
s=a.q()
s.toString
e.a=c.bu(s,j,r)}return new A.ad(new A.dd(),d)}c=a.q()
c.toString
return new A.ad(new A.aO(p.W(0,c),a),d)}}
A.h8.prototype={
Z(a,b,c,d,e){var s,r,q,p,o,n,m=t.k
m.a(b)
m.a(c)
m=e.c
s=m.e
m=m.d
if(!(m<s.length))return A.b(s,m)
r=s[m]
for(m=c.length,s=this.a,q=0;q<c.length;c.length===m||(0,A.C)(c),++q){p=c[q].q()
p.toString
o=a.q()
o.toString
if(p.aP(o)<=s)return d}if(b.length===0)return d
m=a.q()
m.toString
n=e.fy.a.bt(r,m,-1)
if(n==null)return d
m=a.q()
m.toString
return new A.ad(new A.aO(n.W(0,m),a),null)}}
A.lK.prototype={
$1(a){t.lZ.a(a)
return a.c===B.aQ&&t.mm.a(a.b).a===this.a.Q.a},
$S:30}
A.bE.prototype={
Z(a,b,c,d,e){var s,r,q,p,o,n,m=t.k
m.a(b)
m.a(c)
m=e.c
s=m.e
m=m.d
if(!(m<s.length))return A.b(s,m)
r=s[m]
if(d.a!=null||d.b==null)return d
m=d.b
m.toString
s=$.eY()
q=a.q()
q.toString
p=m.q()
p.toString
o=s.bu(q,p,r)
if(o==null)return d
s=a.c.x
n=s.gbE()
if(n!=null&&o.gcK()<=n.ch/5){q=s.b.h(0,B.q)
q.toString
if(q.e===0)if(A.rz(s,n))return new A.ad(new A.eb(a),m)
else{s=o.b.d
q=a.q()
q.toString
return new A.ad(new A.aO(s.W(0,q),a),m)}s=m.q()
s.toString
return new A.ad(new A.ea(s,a),m)}s=o.b.d
q=a.q()
q.toString
return new A.ad(new A.aO(s.W(0,q),a),m)}}
A.b7.prototype={
Z(a,b,c,d,e){var s,r,q,p,o=t.k
o.a(b)
o.a(c)
for(o=this.a,s=o.length,r=d,q=0;q<o.length;o.length===s||(0,A.C)(o),++q,r=p){p=o[q].Z(a,b,c,r,e)
if(p.a!=null)return p}return r},
$iap:1}
A.bn.prototype={}
A.mb.prototype={
$0(){return new A.a4(2,6,0,0,B.b5)},
$S:2}
A.m9.prototype={
$0(){return new A.b7(A.c([new A.bR(),new A.bS(),new A.ec(),new A.bE(),new A.bP()],t.a))},
$S:3}
A.ma.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.m5.prototype={
$0(){return new A.a4(2,4,0,0,B.al)},
$S:2}
A.m3.prototype={
$0(){return new A.b7(A.c([new A.bR(),new A.bS(),new A.ec(),new A.bE(),new A.bP()],t.a))},
$S:3}
A.m4.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.me.prototype={
$0(){return new A.a4(10,7,0,0,B.al)},
$S:2}
A.mc.prototype={
$0(){return new A.b7(A.c([new A.bR(),new A.bS(),new A.cT(),new A.bE(),new A.bP()],t.a))},
$S:3}
A.md.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.mh.prototype={
$0(){return new A.a4(10,7,0,0,B.b5)},
$S:2}
A.mf.prototype={
$0(){return new A.b7(A.c([new A.bR(),new A.bS(),new A.cT(),new A.h7(),new A.bE(),new A.bP()],t.a))},
$S:3}
A.mg.prototype={
$0(){var s=A.fy(B.M)
s.e=9
return A.c([s],t.I)},
$S:4}
A.lF.prototype={
$0(){return new A.a4(3,7,0,0,B.e6)},
$S:2}
A.lD.prototype={
$0(){return new A.b7(A.c([new A.bR(),new A.bS(),new A.cT(),new A.h8(6),new A.bE(),new A.bP()],t.a))},
$S:3}
A.lE.prototype={
$0(){return A.c([A.fy(B.M)],t.I)},
$S:4}
A.j9.prototype={
fA(a,b,c,d,e,f){var s,r=this,q=Math.min(Math.max(B.c.ap(c*24-f/2),0),B.d.ap(2400-f)),p=Math.min(Math.max(B.c.ap(d*36-e/2),0),B.d.ap(1440-e)),o=r.cf(Math.abs(q-r.a)),n=r.cf(Math.abs(p-r.b))
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
A.Y.prototype={
h(a,b){return this.b.h(0,A.B(this).i("Y.T").a(b))}}
A.cp.prototype={}
A.d2.prototype={}
A.fu.prototype={
bx(a){return this.f1(t.h8.a(a))},
f1(a){var s=0,r=A.bA(t.H),q,p=this,o
var $async$bx=A.bB(function(b,c){if(b===1)return A.bv(c,r)
while(true)switch(s){case 0:if(p.a.x.c){s=1
break}o=p.e
if(o.length>3){s=1
break}B.a.k(o,a)
if(p.r){s=1
break}p.aF()
case 1:return A.bw(q,r)}})
return A.bx($async$bx,r)},
aF(){var s=0,r=A.bA(t.z),q=1,p,o=[],n=this,m
var $async$aF=A.bB(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.r=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.al(n.aE(),$async$aF)
case 7:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
n.r=!1
s=o.pop()
break
case 4:return A.bw(null,r)
case 1:return A.bv(p,r)}})
return A.bx($async$aF,r)},
cs(){var s=new A.I($.E,t.cU),r=new A.dp(s,t.iF)
B.a.k(this.a.r,t.x.a(t.gz.a(r.geP(r))))
return s},
O(){var s=0,r=A.bA(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$O=A.bB(function(a4,a5){if(a4===1)return A.bv(a5,r)
while(true)$async$outer:switch(s){case 0:a0=p.a
a1=a0.c
a2=a1.e
a3=a1.d
if(!(a3<a2.length)){q=A.b(a2,a3)
s=1
break}a3=a2[a3].a
o=A.c(a3.slice(0),A.W(a3))
a2=p.b,a3=B.a.geE(a2),n=t.nt,m=a1.a.c,a1=p.f,l=a1.a,a1=a1.b,k=p.c,j=p.d,i=p.e,h=0,g=!1
case 4:if(!!0){s=5
break}case 6:if(!(f=a2.length,f!==0)){s=7
break}if(0>=f){q=A.b(a2,0)
s=1
break}s=8
return A.al(a2[0].ag(a0),$async$O)
case 8:e=a5
B.a.G(k,e.r)
case 9:if(!(f=e.a,f!=null)){s=10
break}B.a.j(a2,0,f)
s=11
return A.al(f.ag(a0),$async$O)
case 11:e=a5
B.a.G(k,e.r)
s=9
break
case 10:f=e.c
if(f!=null)A.mS(f)
d=e.x
s=d!=null?12:13
break
case 12:s=!e.f&&i.length===0?14:16
break
case 14:s=j.length!==0?17:18
break
case 17:s=19
return A.al(p.cg(),$async$O)
case 19:case 18:s=20
return A.al(p.at(d),$async$O)
case 20:s=15
break
case 16:B.a.k(j,d)
case 15:case 13:case 21:if(!(f=k.length,f!==0)){s=22
break}if(0>=f){q=A.b(k,-1)
s=1
break}s=23
return A.al(k.pop().ag(a0),$async$O)
case 23:c=a5
B.a.G(k,c.r)
case 24:if(!(f=c.a,f!=null)){s=25
break}s=26
return A.al(f.ag(a0),$async$O)
case 26:c=a5
B.a.G(k,c.r)
s=24
break
case 25:f=c.c
if(f!=null)A.mS(f)
s=21
break
case 22:if(e.d)g=B.dL.dn(g,!0)
B.a.d7(a2,0)
l.saR(0,m.b/m.a)
a1.saR(0,m.d/1000)
s=6
break
case 7:if(!g){s=3
break}for(;f=o.length,h<f;){if(!(h>=0)){q=A.b(o,h)
s=1
break $async$outer}b=o[h];++h
if(b.q()==null)continue
if(A.rN(n.a(a3),b,a0)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=j.length!==0?27:29
break
case 27:s=i.length===0?30:32
break
case 30:s=33
return A.al(p.cg(),$async$O)
case 33:s=31
break
case 32:s=34
return A.al(p.aJ(),$async$O)
case 34:case 31:s=28
break
case 29:s=35
return A.al(p.cs(),$async$O)
case 35:case 28:if(!g){s=1
break}for(a0=o.length,a=0;a<a0;++a)o[a].a=100
case 1:return A.bw(q,r)}})
return A.bx($async$O,r)},
aJ(){var s=0,r=A.bA(t.H),q=this,p,o,n
var $async$aJ=A.bB(function(a,b){if(a===1)return A.bv(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.C)(p),++n)p[n].x.$0()
B.a.sm(p,0)
s=2
return A.al(q.cs(),$async$aJ)
case 2:return A.bw(null,r)}})
return A.bx($async$aJ,r)},
at(a){var s=0,r=A.bA(t.H),q=this,p
var $async$at=A.bB(function(b,c){if(b===1)return A.bv(c,r)
while(true)switch(s){case 0:p=new A.I($.E,t.cU)
if(a!=null)B.a.k(q.d,a)
B.a.k(q.a.r,t.x.a(new A.jB(q,new A.aT(p,t.ou))))
s=2
return A.al(p,$async$at)
case 2:return A.bw(null,r)}})
return A.bx($async$at,r)},
cg(){return this.at(null)},
aE(){var s=0,r=A.bA(t.H),q,p=this,o,n,m,l,k
var $async$aE=A.bB(function(a,b){if(a===1)return A.bv(b,r)
while(true)switch(s){case 0:k=p.e
if(k.length===0){s=1
break}k=B.a.d7(k,0).a
switch(k){case 0:case 1:case 2:case 3:switch(k){case 0:o=new A.j(0,-1)
break
case 1:o=new A.j(1,0)
break
case 2:o=new A.j(0,1)
break
case 3:o=new A.j(-1,0)
break
default:A.T(A.a5(""))
o=null}n=new A.aO(o,p.a.c.a)
break
case 4:n=new A.dd()
break
case 5:k=p.a
m=k.x.b?k.gaV().c:null
if(m==null){n=null
break}n=new A.ea(m,k.c.a)
break
case 9:n=p.e5()
break
case 19:n=new A.eb(p.a.c.a)
break
case 18:k=p.z
k=k==null?null:k.b
l=k==null
if(l)k=new A.fk(new Uint8Array(4000),A.a7(t.j,t.S))
n=p.z=new A.f7(p.a.c.a,k,l)
break
case 7:k=p.a.x
l=!k.b
k.b=l
if(l){k=document.body.style
B.l.av(k,B.l.ar(k,"cursor"),"crosshair",null)}else document.body.style.removeProperty("cursor")
n=null
break
case 8:k=p.a.x
if(k.b){k.b=!1
document.body.style.removeProperty("cursor")}n=null
break
default:n=null
break}s=n!=null?3:4
break
case 3:B.a.k(p.b,n)
s=5
return A.al(p.O(),$async$aE)
case 5:case 4:case 1:return A.bw(q,r)}})
return A.bx($async$aE,r)},
e5(){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Y)
for(s=this.a.c,r=s.e,q=s.a,p=-1;p<2;++p)for(o=-1;o<2;++o){n=q.q()
m=n.a+p
n=n.b+o
l=s.d
if(!(l<r.length))return A.b(r,l)
l=r[l].c
if(!(m>=0&&n>=0&&m<l.a&&n<l.b))continue
k=l.h(0,new A.j(m,n))
if(k.f!=null){n=s.d
if(!(n<r.length))return A.b(r,n)
B.a.G(i,A.ok(k,r[n]))}}s=i.length
if(s===0)return null
if(s===1){if(0>=s)return A.b(i,0)
j=i[0]}else j=null
if(j==null)return null
return j.b},
ed(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.L.a(a)
for(s=h.d,r=s.length,q=a.a,p=h.e,o=0;o<s.length;s.length===r||(0,A.C)(s),++o){n=s[o]
if(p.length>=2)n.d=1
m=n.e
l=m==null?0:B.d.P(q-m.a,1000)
n.e=a
k=l/B.d.P(n.a.a,1000)
j=n.f
i=n.d
i=n.d=B.c.bm(j?n.d=i+k:n.d=i-k,-1,1)
i>=1||i<0
n.r.$1(n)}B.a.k(h.a.r,t.x.a(h.gcp()))}}
A.jB.prototype={
$1(a){var s,r,q,p,o,n,m
t.L.a(a)
s=A.c([],t.fy)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.C)(q),++n){m=q[n]
if(m.d>=1||o.length!==0){m.x.$0()
B.a.k(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.C)(s),++n)B.a.J(q,s[n])
if(q.length===0)this.b.aK(0)
else B.a.k(r.a.r,t.x.a(this))},
$S:17}
A.eg.prototype={
l(a){return"SlotType."+this.b}}
A.bi.prototype={
l(a){return"ItemType."+this.b}}
A.f2.prototype={}
A.aL.prototype={
gbX(){switch(this.c.a){case 0:return B.an
case 1:return B.ao
case 2:return B.ap
case 3:case 4:case 5:case 6:return null}}}
A.je.prototype={}
A.a_.prototype={}
A.fv.prototype={
l(a){return"HandRequirement."+this.b}}
A.bI.prototype={
l(a){return"DamageType."+this.b}}
A.bJ.prototype={
l(a){return"DiceType."+this.b}}
A.aS.prototype={
l(a){return"WeaponProperties."+this.b}}
A.k0.prototype={}
A.bH.prototype={}
A.cc.prototype={
l(a){return"CriticalEffect."+this.b}}
A.a1.prototype={}
A.dB.prototype={
l(a){return"AmmoType."+this.b}}
A.dC.prototype={}
A.at.prototype={}
A.cO.prototype={
l(a){return"ArmorUpgradeType."+this.b}}
A.ao.prototype={}
A.f_.prototype={
ah(a){var s,r=a-10
if(r===0)return 0
else{s=r/2
if(r>0)return B.c.ab(s)
else return B.c.cI(s)}}}
A.ca.prototype={
d1(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x.gfd()
r=a.x.gbl()
q=A.dJ(a0,1,B.aH)
p=b.y
o=p.a
n=q+p.ah(o)
m=a.y
l=10+Math.min(m.ah(m.b),r.e)
m=s.b
l=A.N(A.ng(m))?l+r.d:l+r.c
if(!a1)l-=2
k=t.Q
j=A.c([],k)
i=A.c([],k)
if(q===1){h=!1
g=!1}else{g=n>=l
if(q===20)h=!0
else{h=g
g=!1}}f="["+n+" vs "+A.w(l)+"]"
if(!h)return new A.cP(b.cx.a+" missed "+a.cx.a+" "+f,!1,0,B.a_,B.a_)
if(B.a.v(s.z,B.bg))B.a.k(j,new A.fg())
k=s.d
e=s.e
d=A.dJ(a0,k,e)+p.ah(o)
if(g)d+=A.dJ(a0,k,e)+p.ah(o)
B.a.v(b.ch,B.ba)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+s.y
return new A.cP(c,!0,d,j,i)},
d6(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x
r=s.gbE()
if(r==null)r=B.M
q=s.gbl()
s=b.y
p=Math.min(s.ah(s.b),q.e)
o=a.x.gbl()
n=A.dJ(a0,1,B.aH)
m=n+p
l=a.y
k=10+Math.min(l.ah(l.b),o.e)
l=r.c
k=A.N(A.ng(l))?k+o.d:k+o.c
if(!a1)k-=2
j=t.Q
i=A.c([],j)
h=A.c([],j)
if(n===1){g=!1
f=!1}else{f=m>=k
if(n===20)g=!0
else{g=f
f=!1}}e="["+m+" vs "+A.w(k)+"]"
if(!g)return new A.cP(b.cx.a+" missed "+a.cx.a+" "+e,!1,0,B.a_,B.a_)
j=r.f
d=A.dJ(a0,1,j)
if(f)d+=A.dJ(a0,1,j)+s.ah(s.a)
B.a.v(b.ch,B.ba)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+r.a
return new A.cP(c,!0,d,i,h)}}
A.cP.prototype={}
A.cY.prototype={}
A.cX.prototype={
gbl(){var s,r,q
for(s=this.b,s=s.gai(s),s=s.gt(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a_)return q}return B.bD},
gfd(){var s,r,q
for(s=this.b,s=s.gai(s),s=s.gt(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a1)return q}return B.ed},
gbE(){var s,r,q
for(s=this.b,s=s.gai(s),s=s.gt(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.at)return q}return null},
eV(a,b){var s=this.b
s.h(0,b)
s.j(0,b,a)}}
A.h_.prototype={
l(a){return"Perk."+this.b}}
A.ce.prototype={
l(a){return"EquipmentSlot."+this.b}}
A.fg.prototype={}
A.df.prototype={
l(a){return"TileType."+this.b}}
A.fe.prototype={
l(a){return"CollisionMode."+this.b}}
A.fH.prototype={}
A.cv.prototype={
l(a){return"TerrainType."+this.b}}
A.ai.prototype={
l(a){return"TerrainWidget."+this.b}}
A.cm.prototype={
l(a){return"LockState."+this.b}}
A.b5.prototype={
l(a){return"Biome."+this.b}}
A.bT.prototype={
ga2(a){return this.b.a},
ga3(a){return this.b.b},
sfm(a){t.dt.a(a)},
$idS:1,
gbz(){return this.z}}
A.fE.prototype={}
A.fF.prototype={$idS:1,
gbz(){return this.a},
ga2(a){return this.b},
ga3(a){return this.c}}
A.j.prototype={
H(a,b){if(b==null)return!1
return b instanceof A.j&&b.a===this.a&&b.b===this.b},
gu(a){return A.kf(this.a,this.b,B.B,B.B)},
E(a,b){return new A.j(this.a+b.a,this.b+b.b)},
W(a,b){return new A.j(this.a-b.a,this.b-b.b)},
bK(){return new A.aQ(this.a,this.b)},
aP(a){var s=Math.abs(this.a-a.a),r=Math.abs(this.b-a.b)
return s+r+-0.6000000000000001*Math.min(s,r)},
l(a){return"("+this.a+", "+this.b+")"}}
A.jV.prototype={
l(a){return"LiquidKind."+this.b}}
A.a0.prototype={
l(a){return"Interactable."+this.b}}
A.jX.prototype={}
A.k1.prototype={
fa(){var s,r
for(s=this.a,r=0;r<4000;++r)s[r]=s[r]-1}}
A.d3.prototype={
l(a){return"MonsterKind."+this.b}}
A.jl.prototype={
ez(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.a,i=j.a7(k,t.C),h=this.c
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.c.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.b||A.N(A.bM(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.d=r
j.af(b,k,i)}}
A.jp.prototype={
aj(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=t.t,p=t.n,o=t.g2,n=t.N,m=t.z,l=0;l<s.length;s.length===r||(0,A.C)(s),++l){k=s[l]
$.mW().a5(a,4,3,A.bl(["u_resolution",A.c([b.a,b.b],q),"u_time",k.gbs().gf4().fD(0,k.geU(k).gf4()),"u_offset",A.c([b.d,b.e],p),"u_origin",A.c([k.ga2(k),k.ga3(k)],o)],n,m))
k.sbs(k.gbs().E(0,A.jo(11)))}r=A.W(s).i("z(1)").a(new A.jq())
if(!!s.fixed$length)A.T(A.D("removeWhere"))
B.a.ef(s,r,!0)}}
A.jq.prototype={
$1(a){t.ox.a(a)
return a.gbs().df(0,a.geU(a))},
$S:36}
A.fn.prototype={}
A.ju.prototype={
dF(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=this
l.gV().a.I(l.a)
s=l.cx
s.a.I(l.a)
r=l.cy
r.a.I(l.a)
l.gbv().b.I(l.a)
q=l.gac()
p=l.a
q.d=p.createFramebuffer()
q.a.I(p)
q.b.I(p)
o=l.fr
if(o===$){q=A.aK(A.c([new A.X("a_position",35044,5126,2,new Float32Array(A.cG(B.x)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise(vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f * f * f + .6 * f * f + .5 * f) * color, 0.3);\n}\n",A.c([new A.y("u_resolution",B.f),new A.y("u_time",B.t),new A.y("u_offset",B.f),new A.y("u_player_vis_texture",B.k),new A.y("u_block_size",B.f)],t.o),u.h)
A.dr(l.fr,"weather")
o=l.fr=new A.kO(q)}o.b.I(l.a)
l.gaV().b.I(l.a)
q=l.a
$.mW().I(q)
$.oX().I(q)
l.k1.a.I(l.a)
q=l.c
p=q.e
n=q.d
if(!(n<p.length))return A.b(p,n)
n=A.lI(p[n])
m=q.d
if(!(m<p.length))return A.b(p,m)
l.cR(n,p[m])
m=q.d
if(!(m<p.length))return A.b(p,m)
l.cA(q.a,A.lI(p[m]))
m=q.d
if(!(m<p.length))return A.b(p,m)
m=s.b=p[m]
s.c=!0
r.c=m
r.b=!0
r=l.z
r.cY(m.c)
r.cS()
q=q.d
if(!(q<p.length))return A.b(p,q)
r.e=A.lI(p[q])
q=l.dy.b
new A.bW(q,A.B(q).i("bW<1>")).d_(new A.jv(l,l.e.getBoundingClientRect()))},
gV(){var s,r=this,q=r.ch
if(q===$){s=A.q0(r.a,r.z)
A.dr(r.ch,"sprites")
r.ch=s
q=s}return q},
gbv(){var s,r=this,q=r.db
if(q===$){s=A.qG()
s=A.aK(A.c([new A.X("a_position",35044,5126,2,s),new A.X("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.l,A.c([new A.y("u_resolution",B.f),new A.y("u_offset",B.f)],t.o),u.q)
A.dr(r.db,"fovRenderer")
q=r.db=new A.jw(r.z,s,new A.j(-1,-1))}return q},
gac(){var s,r,q,p=this,o=u.p,n="a_position",m="u_player_visible_texture",l=p.dx
if(l===$){s=t.G
r=t.o
q=A.aK(A.c([new A.X(n,35044,5126,2,new Float32Array(A.cG(B.x)))],s),u.z,A.c([new A.y("u_source_position",B.f),new A.y("u_source_color",B.be),new A.y("u_source_strength",B.t),new A.y("u_time",B.t),new A.y("u_visible_texture",B.k),new A.y(m,B.k)],r),o)
r=A.aK(A.c([new A.X(n,35044,5126,2,new Float32Array(A.cG(B.x)))],s),u.A,A.c([new A.y("u_light_texture",B.k),new A.y("u_game_world_texture",B.k),new A.y(m,B.k),new A.y("u_resolution",B.f),new A.y("u_block_size",B.f),new A.y("u_offset",B.f)],r),o)
s=A.c([],t.ow)
A.dr(p.dx,"lightingRenderer")
l=p.dx=new A.fG(q,r,p.z,s)}return l},
gaV(){var s,r=this,q=r.fx
if(q===$){s=A.aK(A.c([new A.X("a_position",35048,5126,2,new Float32Array(12))],t.G),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nuniform float u_time;\nuniform float u_visible;\n\nvoid main() {\n  if (u_visible == 0.0) {\n    discard;\n    return;\n  }\n  float scale = (sin(u_time * 3.0) + 1.0) / 4.0;\n  outColor = vec4(0.509, 0.69411, 1.0, scale + 0.3);\n}\n",A.c([new A.y("u_offset",B.f),new A.y("u_resolution",B.f),new A.y("u_time",B.t),new A.y("u_visible",B.t)],t.o),"#version 300 es\nin vec2 a_position;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n")
A.dr(r.fx,"selectionRenderer")
q=r.fx=new A.ks(r.z,s,B.D)}return q},
gbJ(){var s,r=this,q=r.go
if(q===$){s=A.c([],t.ff)
A.dr(r.go,"textRenderer")
q=r.go=new A.kH(r.b,s)}return q},
aj(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=3553,a0=6408,a1=33071,a2=36160
t.cH.a(a4)
s=c.x
if(s.c)return
c.a=a4
r=c.e
q=r.clientWidth
p=r.clientHeight
if(q!==c.r2||p!==c.rx){B.C.sa6(r,q)
B.C.sa4(r,p)
o=c.f
B.C.sa6(o,q)
B.C.sa4(o,p)
n=r.getBoundingClientRect()
r=o.style
m=n.left
m.toString
m=A.w(m)+"px"
B.l.av(r,B.l.ar(r,"left"),m,b)
m=o.style
r=n.top
r.toString
r=A.w(r)+"px"
B.l.av(m,B.l.ar(m,"top"),r,b)
r=o.style
m=n.width
m.toString
m=A.w(m)+"px"
B.l.av(r,B.l.ar(r,"width"),m,b)
o=o.style
m=n.height
m.toString
m=A.w(m)+"px"
B.l.av(o,B.l.ar(o,"height"),m,b)
c.r2=q
c.rx=p
r=c.k2
if(r!=null)B.e.cJ(a4,r)
r=c.k3
if(r!=null)B.e.cJ(a4,r)
c.k2=a4.createTexture()
c.k3=a4.createTexture()
B.e.R(a4,a,c.k2)
B.e.az(a4,a,0,a0,c.r2,c.rx,0,a0,5121,b)
a4.texParameteri(a,10241,9729)
a4.texParameteri(a,10242,a1)
a4.texParameteri(a,10243,a1)
B.e.R(a4,a,c.k3)
B.e.az(a4,a,0,a0,c.r2,c.rx,0,a0,5121,b)
a4.texParameteri(a,10241,9729)
a4.texParameteri(a,10242,a1)
a4.texParameteri(a,10243,a1)}r=c.Q
o=c.z.e
r.fA(0,c.x1,o.a,o.b,p,q)
o=c.x2
o.a=q
o.b=p
o.d=r.a
o.e=r.b
o.c=a3
r=c.b
m=r.canvas
l=m.width
l.toString
m=m.height
m.toString
r.clearRect(0,0,l,m)
a4.viewport(0,0,q,p)
a4.clearColor(0,0,0,1)
a4.clear(16640)
a4.enable(3042)
a4.blendFuncSeparate(770,771,1,771)
B.e.aw(a4,a2,c.k4)
B.e.bw(a4,a2,36064,a,c.k2,0)
a4.clearColor(0,0,0,1)
a4.clear(16640)
m=c.cx
if(m.c){m.eB(a4)
m.c=!1}r=t.t
l=t.n
k=t.N
j=t.z
m.a.a5(a4,4,48e3,A.bl(["u_resolution",A.c([o.a,o.b],r),"u_offset",A.c([o.d,o.e],l)],k,j))
m=c.cy
if(m.b){m.ez(0,a4)
m.b=!1}m.a.a5(a4,0,B.d.P(m.d,2),A.bl(["u_resolution",A.c([o.a,o.b],r),"u_offset",A.c([o.d,o.e],l)],k,j))
c.gV().aj(a4,o)
m=c.r1
B.e.aw(a4,a2,m)
B.e.bw(a4,a2,36064,a,c.k3,0)
a4.viewport(0,0,q,p)
a4.clearColor(0,0,0,1)
c.gac()
c.gac().f=c.k2
c.gac().y=m
c.gac().aj(a4,o)
m=c.gbv()
if(!m.a.e.H(0,m.c)||m.d)m.eD(a4)
m.b.a5(a4,4,48e3,A.bl(["u_resolution",A.c([o.a,o.b],r),"u_offset",A.c([o.d,o.e],l)],k,j))
c.id.aj(a4,o)
if(s.b){s=c.gaV()
s.eb(a4,o)
m=A.c([o.a,o.b],r)
l=A.c([o.d,o.e],l)
i=o.c
h=s.a
h=h.a_(h.e)
g=s.c
h=h.a0(0,g.a,g.b)?1:0
s.b.a5(a4,4,6,A.bl(["u_resolution",m,"u_offset",l,"u_time",i/1000,"u_visible",h],k,j))}B.e.aw(a4,a2,b)
s=c.k1
s.b=c.k3
a4.activeTexture(33984)
B.e.R(a4,a,s.b)
s.a.a5(a4,4,3,A.bl(["u_resolution",A.c([o.a,o.b],r),"u_texture",0,"u_time",o.c/1000],k,j))
c.gbJ().fg(o)
a4.finish()
f=A.jo(B.c.A(a3))
o=c.r
e=A.c(o.slice(0),A.W(o))
B.a.sm(o,0)
for(s=e.length,d=0;d<e.length;e.length===s||(0,A.C)(e),++d)e[d].$1(f)
s=c.c.a.b
B.c.A(s.d/24)
B.c.A(s.e/36)
c.x1=!1},
bH(a){var s,r=this.c,q=r.e
r=r.d
if(!(r<q.length))return A.b(q,r)
B.a.J(q[r].a,a)
s=a.b
s.sad(-1)
s.sae(-1)
this.gV().J(0,s)},
bY(a,b){var s=a.b,r=B.c.A(s.d/24),q=B.c.A(s.e/36),p=b.b,o=B.c.A(p.d/24),n=B.c.A(p.e/36)
s.sad(o)
s.sae(n)
p.sad(r)
p.sae(q)
if(a.x){s=this.z
s.e=new A.j(o,n)
s.bM()}if(b.x){s=this.z
s.e=new A.j(r,q)
s.bM()}},
d2(a,b){var s=a.b
s.sad(b.a)
s.sae(b.b)
if(a.x){s=this.z
s.e=b
s.bM()}},
cB(a,b,c){var s,r,q,p
if(c==null){s=this.c
r=s.e
s=s.d
if(!(s<r.length))return A.b(r,s)
q=r[s]}else q=c
B.a.k(q.a,a)
p=a.b
p.sad(b.a)
p.sae(b.b)
p.sam(0,B.aE)
s=this.gV()
p.sby(0,1)
s.k(0,p)},
cA(a,b){return this.cB(a,b,null)},
cR(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
B.a.sm(g.gac().x,0)
g.gV().bn(0)
s=g.cx
s.b=b
s.c=!0
s=g.cy
s.c=b
s.b=!0
s=g.z
r=b.c
s.cY(r)
s.cS()
B.a0.ax(s.c,0,4000,0)
s.e=a
for(r=r.c,q=r.length,p=b.d,o=0;o<r.length;r.length===q||(0,A.C)(r),++o){n=r[o]
m=n.b
if(n.r!=null){l=new A.a4(11,13,m.a*24,m.b*36,null)
l.x=B.e8
l.y=-1
k=l.a=g.gV()
j=k.c
j.$ti.c.a(l);++j.d
j.aC(0,l)
k.e=!0}l=A.nk(n.f,m.a*24,m.b*36,p)
if(l!=null){k=l.a=g.gV()
j=k.c
j.$ti.c.a(l);++j.d
j.aC(0,l)
k.e=!0
n.y=l}if(n.f===B.L){n.z=new A.fE(B.d3,7)
i=g.dx
if(i===$){h=A.pI(s)
A.dr(i,"lightingRenderer")
g.dx=h
i=h}B.a.k(i.x,n)}}for(s=b.a,r=s.length,o=0;o<s.length;s.length===r||(0,A.C)(s),++o){l=s[o].b
l.r=B.aE
q=l.a
if(q!=null)q.e=!0
q=g.gV()
l.y=1
p=l.a
if(p!=null)p.e=!0
l.a=q
p=q.c
p.$ti.c.a(l);++p.d
p.aC(0,l)
q.e=!0}}}
A.jv.prototype={
$1(a){var s,r,q
t.bd.a(a)
s=this.a.x2
r=J.ax(a)
s.sf8(r.h(a,0))
r=r.h(a,1)
q=this.b
q.left.toString
q=q.top
q.toString
if(typeof r!=="number")return r.W()
s.r=r-q},
$S:37}
A.a6.prototype={
ag(a){return this.dq(a)},
dq(a){var s=0,r=A.bA(t.fq),q,p=2,o,n=[],m=this,l,k,j,i
var $async$ag=A.bB(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.al(m.S(0,a),$async$ag)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
l=A.b2(i)
A.iQ("ERROR: "+A.w(l))
q=new A.H(null,null,!1,!0,!1,B.h,null)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.bw(q,r)
case 2:return A.bv(o,r)}})
return A.bx($async$ag,r)}}
A.bF.prototype={}
A.H.prototype={}
A.fS.prototype={
S(a,b){var s,r,q,p,o=b.c
b.d.b.n()
s=o.e
r=o.d+1
if(!(r<s.length))return A.b(s,r)
q=s[r]
p=A.lI(q)
b.cR(p,q)
b.cB(o.a,p,q);++o.d
b.x1=!0
return new A.H(null,null,!0,!0,!1,B.h,null)}}
A.eb.prototype={
S(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.c.x,g=h.gbE(),f=h.b.h(0,B.q)
if(g==null||f.e===g.Q.b)return new A.H(j,j,!1,!0,!1,B.h,j)
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
break}}++n}if(r==null)return new A.H(j,j,!1,!0,!1,B.h,j)
i=i.q()
i.toString
b.y.ay("reload_1.mp3",i)
i=r.b
k=Math.min(i,g.Q.b)
i-=k
r.b=i
if(i===0)B.a.J(q,s)
i=f.e
i.toString
f.e=k+i
return new A.H(j,j,!0,!0,!1,B.h,j)}}
A.aO.prototype={
S(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f={},e=b.c,d=e.e,c=e.d
if(!(c<d.length))return A.b(d,c)
s=d[c]
c=h.b
r=c.q()
q=r.E(0,h.a)
p=s.c
if(!p.cQ(q))return new A.H(g,g,!1,!0,!1,B.h,g)
o=p.h(0,q)
n=s.ak(q)
if((o.c===B.b||A.N(A.bM(o.f)))&&n==null){if(o.f==null)return new A.H(g,g,!1,!0,!1,B.h,g)
f=e.d
if(!(f<d.length))return A.b(d,f)
m=A.ok(o,d[f])
if(m.length!==0)return new A.H(B.a.ga9(m).b,g,!1,!0,!1,B.h,g)
return new A.H(g,g,!1,!0,!1,B.h,g)}l=A.c([],t.w)
f.a=!1
if(n!=null){if(A.ol(n,c))return new A.H(new A.dG(!1,c,n),g,!1,!0,!1,B.h,g)
e=f.a=!0}else e=!1
d=b.z
d=d.a_(d.e)
d.toString
k=!c.x
if(k)j=d.h(0,r)||d.h(0,q)
else j=!1
p.h(0,r)
if(o.r!=null)b.y.bD("water_footsteps_"+(B.u.D(5)+1)+".mp3",q,0.15)
if(j)i=new A.bF(A.jo(60),new A.k7(h,r,q),new A.k8(f,h,b,n,q))
else{if(e){n.toString
b.bY(n,c)}else b.d2(c,q)
i=g}c.a=0
return new A.H(g,g,!0,!0,k,l,i)}}
A.k7.prototype={
$1(a){var s=a.d,r=1-s,q=this.b,p=this.c,o=this.a.b.b
o.sa2(0,q.a*24*r+p.a*24*s)
o.sa3(0,q.b*36*r+p.b*36*s)},
$S:9}
A.k8.prototype={
$0(){var s,r=this,q=r.c,p=r.b.b
if(r.a.a){s=r.d
s.toString
q.bY(s,p)}else q.d2(p,r.e)},
$S:0}
A.dd.prototype={
S(a,b){return new A.H(null,null,!0,!0,!1,B.h,null)}}
A.fD.prototype={
S(a,b){var s=this.a.c
s.d-=1000;++s.c;++s.e;++s.f;++s.r
A.iQ("LEVEL UP")
return new A.H(null,null,!0,!0,!1,B.h,null)}}
A.ek.prototype={
S(a,b){var s,r,q,p,o,n,m=b.c,l=m.e,k=m.d
if(!(k<l.length))return A.b(l,k)
s=this.b
r=l[k].c.h(0,s)
q=r.y
r.f=this.a?B.v:B.I
k=b.gV()
q.toString
k.J(0,q)
k=r.f
k.toString
p=r.b
o=m.d
if(!(o<l.length))return A.b(l,o)
n=A.nk(k,24*p.a,36*p.b,l[o].d)
if(n!=null)b.gV().k(0,n)
r.y=n
m=m.d
if(!(m<l.length))return A.b(l,m)
b.z.cZ(l[m].c,s)
b.gbv().d=!0
b.y.bD("door_1.mp3",s,0.8)
return new A.H(null,null,!0,!0,!1,B.h,null)}}
A.dG.prototype={
S(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d={},c=e.b
c.a=0
d.a=null
s=e.c
r=A.rG(s,c,b)
q=e.a
p=c.c
o=s.c
if(q){p.toString
o.toString
n=d.a=p.d6(o,B.u,r)}else{p.toString
o.toString
n=d.a=p.d1(o,B.u,r)}B.a.G(p.Q,n.d)
B.a.G(o.Q,n.e)
m=A.c([],t.w)
p=s.q()
p.toString
l=c.q()
l.toString
if(!q){q=c.b
k=q.y
j=s.b.r
q.sby(0,4)
i=l.bK()
h=p.bK()
g=l.bK().E(0,new A.aQ((h.a-i.a)/1.5,(h.b-i.b)/1.5))
d.b=!0
f=new A.bF(B.dy,new A.j_(d,e,b,p,l,i,g),new A.j0(d,e,b,p,l,k,j))}else{q=c.x?"white":"red"
e.aZ(n.c,p,l,b,q)
f=null}q=s.r
if(q!=null)q.c=c
if(!n.b)return new A.H(null,n.a,!0,!0,!1,B.h,f)
c=o.b-n.c
o.b=c
if(c<=0)B.a.k(m,new A.dL(s))
return new A.H(null,d.a.a,!0,!0,!1,m,f)},
cj(a){if(this.a){if(a)return"bullet_impact_2.mp3"
return"bullet_miss_1.mp3"}if(a)return"heavy_punch_1.mp3"
return"miss_1.mp3"},
aZ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j={}
if(a===0)return
this.c.c.toString
s=c.a*24
r=c.b*36
q=new A.h6(B.d.l(a),s,r,e,1.25)
p=b.a*24
o=b.b*36
n=A.pq(new A.aQ(p-s,o-r))
m=n.a*24
n=n.b*36
l=new A.aQ(m,n).E(0,new A.aQ(s,r))
k=new A.aQ(m*2,n*2).E(0,new A.aQ(p,o))
B.a.k(d.gbJ().b,q)
j.a=B.dx
A.q2(B.dz,new A.iZ(j,d,q,k,l))},
l(a){return"TargetMeleeAttackEvent{"+this.b.l(0)+" -> "+this.c.l(0)+"}"}}
A.j_.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a
if(l.b&&a.d>=0.4){s=m.c
r=m.b
q=m.d
s.y.ay(r.cj(l.a.b),q)
p=l.a
o=r.b.x?"white":"red"
r.aZ(p.c,q,m.e,s,o)
l.b=!1
s=r.c.b
if(l.a.b)s.sam(0,B.al)
else s.sam(0,B.c2)}l=a.d
if(l<=0.4){s=m.f
r=m.r
n=l/0.6
l=m.b.b.b
l.sa2(0,A.os(r.a,s.a,n)*24)
l.sa3(0,A.os(r.b,s.b,n)*36)}else{s=m.b.b
if(l>=0.6){l=s.b
s=m.e
l.sad(s.a)
l.sae(s.b)}else{l=s.b
s=m.r
l.sa2(0,s.a*24)
l.sa3(0,s.b*36)}}},
$S:9}
A.j0.prototype={
$0(){var s,r,q,p,o,n=this,m=n.a
if(m.b){s=n.c
r=n.b
q=n.d
s.y.ay(r.cj(m.a.b),q)
p=m.a
o=r.b.x?"white":"red"
r.aZ(p.c,q,n.e,s,o)
m.b=!1}m=n.b
s=m.b.b
s.sby(0,n.f)
r=n.e
s.sad(r.a)
s.sae(r.b)
m.c.b.sam(0,n.r)},
$S:0}
A.iZ.prototype={
$1(a){var s,r,q,p,o,n=this
t.iK.a(a)
s=n.a
r=s.a.a+8000
s.a=new A.ag(r)
if(r>5e5){a.eM(0)
B.a.J(n.b.gbJ().b,n.c)}q=B.d.P(s.a.a,1000)/300
s=n.c
r=n.d
p=1-q
o=n.e
s.b=q*r.a+p*o.a
s.c=q*r.b+p*o.b},
$S:39}
A.dL.prototype={
l(a){return"DeathEvent{"+this.a.l(0)+"}"},
S(a,b){var s,r=null,q=b.c,p=q.e,o=q.d
if(!(o<p.length))return A.b(p,o)
p=this.a
if(p.e){b.bH(p)
return new A.H(r,r,!0,!0,!1,B.h,r)}if(p.x)return new A.H(r,"You Died!",!0,!0,!1,B.h,r)
q=q.a
o=q.c
o.d+=100
s=A.c([],t.w)
if(o.d>=1000)B.a.k(s,new A.fD(q))
p.q()
p.c.toString
b.bH(p)
return new A.H(r,p.l(0)+" has died.",!1,!0,!1,s,r)}}
A.f7.prototype={
S(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=b.c,d=e.e
e=e.d
if(!(e<d.length))return A.b(d,e)
s=d[e]
if($.n9!==s){$.n9=s
e=g.b
B.a0.ax(e.a,0,4000,0)
e.b.bn(0)}for(e=b.z.c,d=g.c,r=!d,q=g.b,p=q.b,o=s.c,n=0;n<100;++n)for(m=0;m<40;++m){l=100*m+n
k=new A.j(n,m)
if(!(l<4000))return A.b(e,l)
j=e[l]
if(j===0&&d)if(o.h(0,k).f===B.v)p.j(0,k,100)
else{i=o.h(0,k)
if(!(i.c===B.b||A.N(A.bM(i.f))))p.j(0,k,80)}else if(j===1&&r)p.J(0,k)}q.fe(s,B.a6)
e=g.a
d=e.q()
d.toString
k=q.cM(s,d,1,B.a6)
if(k==null)return new A.H(f,"No more areas to explore",!1,!0,!1,B.h,f)
d=$.eY()
r=e.q()
r.toString
r=d.cN(r,k,s,B.a6)
h=r==null?f:r.b
if(h==null)return new A.H(f,"No path to that location",!1,!0,!1,B.h,f)
d=h.d
r=e.q()
r.toString
return new A.H(new A.aO(d.W(0,r),e),f,!0,!0,!1,B.h,f)}}
A.hw.prototype={
S(a,b){var s,r,q,p,o,n,m=null,l=b.c,k=l.e,j=l.d
if(!(j<k.length))return A.b(k,j)
s=k[j]
r=A.c([],t.q)
for(j=s.c.c,q=j.length,p=!1,o=0;o<j.length;j.length===q||(0,A.C)(j),++o){n=j[o]
if(n.f===B.J){n.f=B.v
B.a.k(r,n.b)
p=!0}}if(p){for(j=r.length,q=b.y,o=0;o<r.length;r.length===j||(0,A.C)(r),++o)q.ay("door_unlock_1.mp3",r[o])
j=l.d
if(!(j<k.length))return A.b(k,j)
q=this.a
k[j].c.h(0,q).f=B.U
l=l.d
if(!(l<k.length))return A.b(k,l)
k[l].ak(q)
return new A.H(m,"A door has been unlocked",!0,!0,!1,B.h,m)}return new A.H(m,m,!1,!0,!1,B.h,m)}}
A.ea.prototype={
S(a,b){var s,r=null,q=this.b,p=q.c.x.b.h(0,B.q)
if(p==null||p.e===0)return new A.H(r,r,!1,!0,!1,B.h,r)
s=p.e
s.toString
p.e=s-1
return new A.H(new A.h4(this.a,q),r,!0,!0,!1,B.h,r)}}
A.h4.prototype={
S(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null,g=b.c,f=g.e
g=g.d
if(!(g<f.length))return A.b(f,g)
s=f[g]
g=this.c
f=g.q()
f.toString
r=this.b
q=$.eY().eX(f,r,s)
if(q==null)return new A.H(h,"Cant reach target",!1,!0,!1,B.h,h)
p=s.ak(r)
o=A.c([],t.w)
if(p!=null)o.push(new A.dG(!0,g,p))
n=q.fo(0)
m=b.y.ay("pistol_1.mp3",f)
g=g.b
f=B.c.A(g.d/24)
g=B.c.A(g.e/36)
l=B.e4.h(0,t.gX.i("Y.T").a(700))
l.toString
k=new A.fF(new A.fE(l,10),f,g)
B.a.k(b.gac().x,k)
g=B.b1.h(0,t.e.i("Y.T").a(800))
g.toString
j=new A.a4(14,2,-1,-1,h)
j.seO(0,g)
i=A.mk(h,h,0,h,!0,!1,j)
b.cA(i,B.D)
j.sam(0,new A.f(0))
return new A.H(h,h,!0,!0,!1,o,new A.bF(A.jo(16*n.length),new A.kk(n,j,m,k),new A.kl(b,i,k)))}}
A.kk.prototype={
$1(a){var s,r,q=this.a,p=B.c.ab(a.d*(q.length-1))
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
$S:9}
A.kl.prototype={
$0(){var s=this.a
s.bH(this.b)
B.a.J(s.gac().x,this.c)},
$S:0}
A.jy.prototype={}
A.jx.prototype={
dW(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.e.R(b,f,c)
s=A.nw(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
r=this.a_(a)
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
s[h]=g}B.e.az(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
aT(a,b){var s,r,q=a.b*100+a.a
if(q<0||q>=4000)return null
s=this.f
r=s.h(0,a)
if(r==null){r=new A.iw(b.createTexture())
s.j(0,a,r)}if(r.b){this.dW(a,b,r.a)
r.b=!1}return r.a},
a_(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.mA(p,p+4000,B.d.bZ(s.byteLength,r))
return new A.kN(100,A.nw(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
bM(){var s,r,q,p,o=this.a_(this.e).c
for(s=o.length,r=this.c,q=0;q<4000;++q){p=r[q]
if(!(q<s))return A.b(o,q)
r[q]=p|(o[q]>0?1:0)}},
cS(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.b9(new A.j(s,r))
for(q=this.f,q=q.gbN(q),q=q.gt(q);q.n();)q.gp(q).b=!0},
cZ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.nr.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.a0(0,r,q)
o=o.c===B.b||A.N(A.pD(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.b9(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]>0)g.b9(new A.j(m,l))}s=g.a_(b)
s.toString
for(p=g.f,p=p.gai(p),p=p.gt(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]>0)i.b.b=!0}},
cY(a){return this.cZ(a,null)},
b9(a){var s,r,q,p=this.a_(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=15
for(q=0;q<4;++q)this.ek(new A.db(1,-1,1),new A.km(B.e_[q],a),o)},
eh(a,b,c){var s,r
if(a<0||a>=b.byteLength)return
s=b.length
if(this.bb(a,b)){if(!(a>=0&&a<s))return A.b(b,a)
s=b[a]
r=c.a
if(!(r<4))return A.b(B.aR,r)
b[a]=s|B.aR[r]}else{if(!(a>=0&&a<s))return A.b(b,a)
b[a]=15}},
bb(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
ba(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===0},
ek(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.r
B.a.sm(d,0)
B.a.k(d,a)
for(s=b.a;r=d.length,r!==0;){if(0>=r)return A.b(d,-1)
q=d.pop()
r=q.a
p=B.c.ab(r*q.b+0.5)
o=B.c.cI(r*q.c-0.5)
for(n=r+1,m=2*r,l=p,k=null;l<=o;++l,k=i){j=b.fs(0,new A.j(r,l))
i=j.b*100+j.a
h=e.bb(i,c)
if(!h)g=l>=r*q.b&&l<=r*q.c
else g=!0
if(g)e.eh(i,c,s)
g=k!=null
if(g&&e.bb(k,c)&&e.ba(i,c))q.b=(2*l-1)/m
if(g&&e.ba(k,c)&&h){f=new A.db(n,q.b,q.c)
f.c=(2*l-1)/m
B.a.k(d,f)}}if(k!=null&&e.ba(k,c))B.a.k(d,new A.db(n,q.b,q.c))}}}
A.iw.prototype={}
A.kN.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0},
a0(a,b,c){var s=this.c,r=c*this.a+b
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0}}
A.c9.prototype={
l(a){return"Cardinal."+this.b}}
A.km.prototype={
fs(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a.a){case 0:s=r.b
return new A.j(s.a+p,s.b-q)
case 1:s=r.b
return new A.j(s.a+p,s.b+q)
case 2:s=r.b
return new A.j(s.a+q,s.b+p)
case 3:s=r.b
return new A.j(s.a-q,s.b+p)}}}
A.db.prototype={}
A.cj.prototype={}
A.fG.prototype={
aj(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=3553,a="u_player_visible_texture"
if(c.e==null){s=a0.createTexture()
c.e=s
B.e.R(a0,b,s)
B.e.az(a0,b,0,6408,100,40,0,6408,5121,null)
a0.texParameteri(b,10241,9729)
a0.texParameteri(b,10242,33071)
a0.texParameteri(b,10243,33071)}B.e.aw(a0,36160,c.d)
B.e.bw(a0,36160,36064,b,c.e,0)
a0.clearColor(0,0,0,1)
a0.clear(16640)
a0.viewport(0,0,100,40)
s=c.c
r=s.aT(s.e,a0)
r.toString
a0.activeTexture(33985)
B.e.R(a0,b,r)
for(q=c.x,p=q.length,o=c.a,n=t.t,m=t.n,l=t.N,k=t.z,j=0;j<q.length;q.length===p||(0,A.C)(q),++j){i=q[j]
h=i.gbz()
g=s.aT(new A.j(i.ga2(i),i.ga3(i)),a0)
if(g==null)continue
a0.activeTexture(33984)
B.e.R(a0,b,g)
f=h.c
e=A.c([i.ga2(i),i.ga3(i)],n)
d=h.b.a
o.a5(a0,4,3,A.bl(["u_source_strength",f,"u_source_position",e,"u_source_color",A.c([(d>>>16&255)/255,(d>>>8&255)/255,(d&255)/255,0.2],m),"u_time",a1.c/1000,a,1,"u_visible_texture",0],l,k))}B.e.aw(a0,36160,c.y)
a0.viewport(0,0,a1.a,a1.b)
a0.activeTexture(33984)
B.e.R(a0,b,c.e)
a0.activeTexture(33985)
B.e.R(a0,b,c.f)
a0.activeTexture(33986)
B.e.R(a0,b,r)
c.b.a5(a0,4,3,A.bl(["u_light_texture",0,"u_game_world_texture",1,a,2,"u_block_size",B.dP,"u_resolution",A.c([a1.a,a1.b],n),"u_offset",A.c([a1.d,a1.e],m)],l,k))}}
A.bo.prototype={
gcK(){var s=this.b
s=s==null?null:s.gcK()
return 1+(s==null?0:s)},
M(a,b){return B.c.M(this.f,t.p6.a(b).f)},
gct(){var s,r=this.a
if(r==null)r=this
else{s=r.a
r=s==null?r:s.gct()}return r},
e1(){var s,r,q
for(s=this,r=null;s!=null;r=s,s=q){s.b=r
q=s.a}},
fo(a){var s,r=A.c([],t.q)
for(s=this;s!=null;){B.a.k(r,s.d)
s=s.b}return r},
l(a){var s,r,q,p
for(s=this.d,r=this,q="",p="";r!=null;q=", "){p=p+q+s.l(0)
r=r.b}return p.charCodeAt(0)==0?p:p},
$iaf:1}
A.aW.prototype={
l(a){return"Directions."+this.b}}
A.kg.prototype={
eX(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.a,e=a1.a,d=a0.b,c=a1.b,b=Math.max(Math.abs(f-e),Math.abs(d-c)),a=new A.bo(a0,0,b*1.02+0)
for(s=(b-1)*1.02+1,r=a2.c,q=t.W,p=r.a,o=r.b,n=a0,m=a,l=1;l<=b;++l,n=h,m=g){k=l/b
j=1-k
i=B.c.A(e*k+f*j)
j=B.c.A(c*k+d*j)
h=new A.j(i,j)
if(!(i>=0&&j>=0&&i<p&&j<o))return null
if(A.lG(q.a(r.h(0,h)),a2,B.a7)&&l!==b)return null
A.rs(i-n.a,j-n.b)
g=new A.bo(h,1,s)
g.a=m
m.b=g}return a},
cN(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=A.nj(b,t.p6),a0=A.a7(t.j,t.i),a1=a4.c
a.k(0,new A.bo(a2,0,a2.aP(a3)*1.02+0))
for(s=a.$ti.c,r=a1.a,q=a1.b,p=t.W;o=a.c,n=o===0,!n;){if(n)A.T(A.a5("No element"));++a.d
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
for(n=l.e,h=0;h<8;++h){g=B.ah[h]
f=A.a9(o,g)
m=f.a
if(m>=0){e=f.b
m=e>=0&&m<r&&e<q}else m=!1
if(m){m=l.a
if(!J.Z(m==null?b:m.d,f))m=A.lG(p.a(a1.h(0,f)),a4,a5)&&!f.H(0,a3)
else m=!0}else m=!0
if(m)continue
m=f.aP(a3)
e=this.ea(g)
if(typeof e!=="number")return A.cI(e)
e=n+e
d=new A.bo(f,e,m*1.02+e)
d.a=l
if(f.H(0,a3)){d.e1()
s=l.a
return s==null?l:s.gct()}c=a0.h(0,f)
if(!(e>1/0))m=c!=null&&e>=c
else m=!0
if(m)continue
a0.j(0,f,e)
s.a(d);++a.d
a.aC(0,d)}}return b},
bu(a,b,c){return this.cN(a,b,c,B.a7)},
ea(a){switch(a.a){case 4:case 7:case 5:case 6:return 1
case 1:case 0:case 2:case 3:return 1.4}}}
A.fk.prototype={
cM(a,b,c,d){var s,r,q,p,o,n,m,l,k=this.a,j=b.b*100+b.a
if(!(j>=0&&j<4000))return A.b(k,j)
s=k[j]*c
r=A.c([],t.q)
for(j=a.c,q=t.W,p=!1,o=0;o<8;++o){n=A.a9(b,B.ah[o])
m=n.b*100+n.a
if(m<0||m>=4000)continue
if(A.lG(q.a(j.h(0,n)),a,d))continue
if(!(m>=0&&m<4000))return A.b(k,m)
l=k[m]*c
if(l>s){B.a.sm(r,0)
B.a.k(r,n)
s=l
p=!0}else if(l===s)B.a.k(r,n)}k=r.length
if(k===0||!p)return null
k=$.oA().D(k)
if(!(k>=0&&k<r.length))return A.b(r,k)
return r[k]},
bt(a,b,c){return this.cM(a,b,c,B.a7)},
fe(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
B.a0.ax(f,0,4000,0)
for(s=this.b,s=s.gai(s),s=s.gt(s);s.n();){r=s.gp(s)
q=r.a
B.a0.j(f,q.b*100+q.a,r.b)}s=a.c
r=t.W
do for(p=!1,o=0;o<100;++o)for(n=0;n<40;++n){m=n*100+o
if(A.lG(r.a(s.h(0,new A.j(o,n))),a,b))continue
if(!(m<4000))return A.b(f,m)
l=f[m]
for(q=[m+100,m-100,m+1,m-1],k=-1,j=0,i=0;i<4;++i){h=q[i]
if(h<0||h>=4000)continue
if(!(h>=0&&h<4000))return A.b(f,h)
g=f[h]
if(g>j){j=g
k=h}}if(k!==-1&&j>l+1){f[m]=j-1
p=!0}}while(p)}}
A.ks.prototype={
eb(a,b){var s,r,q,p,o,n,m,l=this,k="a_position",j=B.c.ab((b.f+b.d)/24),i=B.c.ab((b.r+b.e)/36),h=new A.j(j,i)
if(h.H(0,l.c)||j<0||j>=100||i<0||i>=40)return
l.c=h
s=l.b
r=s.a7(k,t.C)
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
A.y.prototype={}
A.dg.prototype={
l(a){return"UniformKind."+this.b}}
A.hG.prototype={}
A.iB.prototype={}
A.jF.prototype={
I(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.o6(a,i.a,35633),f=A.o6(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.Z(a.getProgramParameter(e,35714),!0)){A.iQ(a.getProgramInfoLog(e))
A.T(A.a5("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.e.cH(a,A.c1(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.iB(a.getUniformLocation(A.c1(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.c1(i.e,h),n)
k=a.createBuffer()
B.e.cE(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.hG(k,j))}},
a7(a,b){A.rm(b,t.jv,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
af(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.d(A.a5("WARNING, NO ATTRIBUTE "+b))
B.e.cE(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
a5(a,b,c,d){var s,r,q,p,o,n
t.ea.a(d)
B.e.fB(a,A.c1(this.e,"_program"))
B.e.cH(a,A.c1(this.f,"_vertexArrayObject"))
for(s=d.gai(d),s=s.gt(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.P(p)
n=r.h(0,p)
if(n==null)A.T(A.a5("WARNING, NO UNIFORM "+p))
switch(n.b.b.a){case 0:B.e.ft(a,n.a,A.b0(o))
break
case 1:q=J.ax(o)
B.e.fv(a,n.a,A.b0(q.h(o,0)),A.b0(q.h(o,1)))
break
case 2:q=J.ax(o)
B.e.fw(a,n.a,A.b0(q.h(o,0)),A.b0(q.h(o,1)),A.b0(q.h(o,2)))
break
case 3:q=J.ax(o)
B.e.fz(a,n.a,A.b0(q.h(o,0)),A.b0(q.h(o,1)),A.b0(q.h(o,2)),A.b0(q.h(o,3)))
break
case 4:B.e.fu(a,n.a,A.J(o))
break}}a.drawArrays(b,0,c)}}
A.ko.prototype={
sf8(a){this.f=A.o2(a)}}
A.kp.prototype={}
A.fT.prototype={}
A.hd.prototype={
aN(){var s=0,r=A.bA(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aN=A.bB(function(a,b){if(a===1)return A.bv(b,r)
while(true)switch(s){case 0:e=A.c([],t.iw)
for(p=q.b,o=t.cU,n=t.ou,m=t.oV,l=t.Z,k=t.R,j=0;j<47;++j){i=p[j]
h=new XMLHttpRequest()
g=new A.I($.E,o)
B.dC.fb(h,"get","sounds/"+i)
h.responseType="arraybuffer"
f=m.a(new A.ku(q,h,i,new A.aT(g,n)))
l.a(null)
A.cA(h,"readystatechange",f,!1,k)
h.send()
B.a.k(e,g)}s=2
return A.al(A.pz(e,t.H),$async$aN)
case 2:return A.bw(null,r)}})
return A.bx($async$aN,r)},
bD(a,b,c){var s,r,q,p=this.c,o=A.pA(p),n=this.a.h(0,a)
if(n==null)return new A.fT()
s=p.createBufferSource()
r=B.u.Y()
q=o.gain
q.toString
B.bM.saR(q,0.1*c+r/20)
p=p.destination
p.toString
B.dA.cb(o,p,0,0)
B.az.cb(s,o,0,0)
B.az.seL(s,n)
s.start()
return new A.fT()},
ay(a,b){return this.bD(a,b,2)},
$iq_:1}
A.ku.prototype={
$1(a){var s=0,r=A.bA(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.bB(function(b,c){if(b===1)return A.bv(c,r)
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
return A.al(B.bL.eS(n.c,t.lo.a(A.qF(m.response))),$async$$1)
case 7:l.j(0,k,c)
p.aK(0)
s=5
break
case 6:p.aL(new A.hT("Failed to load "+o))
case 5:case 3:return A.bw(null,r)}})
return A.bx($async$$1,r)},
$S:40}
A.lP.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.e.R(q,r,p)
B.e.fn(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.a1(0,p)},
$S:15}
A.kv.prototype={
dH(a,b){A.rJ(a,"CursesTransparent_24x36.png").dd(new A.kw(this),t.P)},
k(a,b){b.a=this
this.c.k(0,b)
this.e=!0},
J(a,b){this.c.J(0,b)
b.a=null
this.e=!0},
bn(a){var s,r,q,p
for(s=this.c,r=s.$ti,q=new A.cE(s,s.d,r.i("cE<1>")),r=r.c;q.n();){if(q.d<0)p=A.T(A.a5("No element"))
else{p=q.c
if(p==null)p=r.a(null)}p.a=null}++s.d
s.sbg(B.dV)
s.c=0
this.e=!0},
eA(c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9="a_position",c0="a_texcoord",c1="a_bg_color",c2=b8.c,c3=c2.c
if(c3>1e4){A.iQ("WARNING: TOO MANY SPRITES "+c3)
if(b8.f)b8.f=!1
c3=1e4}s=b8.a
r=t.jv
q=c3*12
p=A.k9(s.a7(b9,r).buffer,0,q)
o=A.k9(s.a7(c0,r).buffer,0,q)
q=c3*24
n=A.k9(s.a7("a_color",r).buffer,0,q)
m=A.k9(s.a7(c1,r).buffer,0,q)
l=c2.ex()
B.a.aX(l,c2.a)
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
if(b5==null)B.b7.ax(n,b4,b4+24,0)
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
n[a]=e}if(b6==null)B.b7.ax(m,b4,b4+24,0)
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
aj(a,b){var s,r=this
if(r.b==null||r.c.c===0)return
if(r.e){r.eA(a)
r.e=!1}s=r.d
s.aT(s.e,a)
a.activeTexture(33984)
B.e.R(a,3553,r.b)
r.a.a5(a,4,r.c.c*6,A.bl(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.kw.prototype={
$1(a){this.a.b=t.lJ.a(a)},
$S:41}
A.a4.prototype={
sa2(a,b){var s=this.a
if(s!=null)s.e=!0
this.d=b},
sa3(a,b){var s=this.a
if(s!=null)s.e=!0
this.e=b},
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
seO(a,b){var s=this.a
if(s!=null)s.e=!0
this.x=b},
sby(a,b){var s
this.y=b
s=this.a
if(s!=null)s.e=!0},
l(a){return"Sprite("+this.b+", "+this.c+")"}}
A.jZ.prototype={}
A.kG.prototype={
eB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(this.b==null)return
s=this.a
r=s.a7("a_color",t.C)
q=this.b
switch(q.d.a.a){case 0:case 1:case 6:case 5:p=$.oB()
break
case 2:p=$.mU()
break
case 4:p=$.oD()
break
case 3:p=$.oC()
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
f=!(f.c===B.b||A.N(A.bM(f.f)))}else f=!1
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
A.kH.prototype={
fg(a){var s,r,q,p,o
for(s=this.b,r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
q.font=A.w(24*o.e)+'px "Press Start 2P"'
B.bY.seW(q,o.d)
q.fillText(o.a,o.b-a.d,o.c-a.e)}}}
A.h6.prototype={}
A.jw.prototype={
eD(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.a,a4=a3.a_(a3.e),a5=a2.b,a6=a5.a7("a_color",t.C)
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
A.kO.prototype={}
A.hB.prototype={}
A.lC.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:18}
A.hg.prototype={
ak(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.e){m=n.b
l=B.c.A(m.d/24)
if(l===q){m=B.c.A(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.kT.prototype={}
A.jm.prototype={
cc(a){var s=this
return A.r1(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5
return function $async$cc(a6,a7){if(a6===1){o=a7
q=p}while(true)switch(q){case 0:a5=A.fy(B.M)
a5.e=9
n=A.fy(new A.f2(B.av,50))
m=r.c.x
m.eV(a5,B.q)
B.a.k(m.a,n)
l=A.c([],t.fF)
k=new A.hB(r,l)
m=s.a,j=s.b,i=s.e,h=0
case 2:if(!(h<10)){q=4
break}g=A.rl(m.dg(j[h]))
B.a.k(l,g)
f=i[h]
for(e=f.length,d=g.a,c=0;c<f.length;f.length===e||(0,A.C)(f),++c){b=A.ru(f[c])
a0=A.rM(g,b)
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
case 4:return A.qf()
case 1:return A.qg(o)}}},t.l7)},
e4(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.d,r=t.ee,q=this.e,p=this.b,o=0;o<10;++o){n=q[o]
m=p[o]
l=$.oE()
k=A.W(l)
j=k.i("a8<1>")
i=A.nt(new A.a8(l,k.i("z(1)").a(new A.jn(m.a)),j),!0,j.i("h.E"))
for(h=0;h<s[o];){g=A.qL($.eZ(),i,r)
B.a.k(n,g)
h+=g.d}}},
e2(){var s,r,q,p,o,n,m,l,k,j,i=this,h=new A.ca(1,1,1,0,0,0,0,new A.cX(A.c([],t.I),A.a7(t.b,t.O)),A.n5(),A.c([],t.Q),A.c([],t.f),new A.cY(""))
for(s=i.f,r=i.c,q=i.e,p=0;p<10;++p){o=q[p]
for(n=0,m=0;m<o.length;++m){l=i.e3(o[m])
k=l.a
for(j=l.x.b.h(0,B.q)!=null;k>0;){n+=(j?l.d6(h,$.eZ(),!0):l.d1(h,$.eZ(),!0)).c
k-=r[p]}}B.a.j(s,p,n)}},
e3(a){var s,r,q,p,o,n=this.r
if(n.h(0,a)!=null){n=n.h(0,a)
n.toString
return n}s=a.d
r=A.c([],t.I)
q=A.nr(B.ak,t.b,t.O)
p=new A.ca(s,s,1,0,0,0,0,new A.cX(r,q),a.c,A.c([],t.Q),A.c([],t.f),new A.cY(a.a))
for(s=J.ae(a.r.$0());s.n();){o=s.gp(s)
switch(o.gbX()){case B.an:q.h(0,B.E)
q.j(0,B.E,o)
break
case B.ao:q.h(0,B.q)
q.j(0,B.q,o)
break
case B.ap:q.h(0,B.F)
q.j(0,B.F,o)
break
default:B.a.k(r,o)}}n.j(0,a,p)
return p}}
A.jn.prototype={
$1(a){return B.a.v(t.ee.a(a).x,this.a)},
$S:43}
A.fa.prototype={
bV(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.a3(a,a0,A.b9(a*a0,B.i,!1,t.ns),t.ba)
c.a=b
s=new A.jd(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.E()
if(typeof m!=="number")return A.cI(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.cI(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.cI(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.cI(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.cI(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.cI(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.cI(f)
e=n+m+k+i+h+g+l+f
if(J.Z(s.$2(q,o),1))if(e<4)a1.F(0,B.i,q,o)
else a1.F(0,B.b,q,o)
else if(e>5)a1.F(0,B.b,q,o)
else a1.F(0,B.i,q,o)}d=c.a
c.a=a1}}}
A.jd.prototype={
$2(a,b){return J.Z(this.a.a.a0(0,a,b),B.b)?0:1},
$S:44}
A.jD.prototype={
bL(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.cM.a(b0)
s=t.q
r=A.c([],s)
q=new A.jE(a9)
for(p=J.ae(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.df()
if(n>=1)B.a.k(r,o)}if(r.length===0)return
m=A.c([],t.oe)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.C)(r),++j){i=r[j]
h=A.c([],k)
g=i.a
f=i.b
if(o.h(0,new A.j(g+1,f))===B.b)B.a.k(h,B.n)
if(o.h(0,new A.j(g+-1,f))===B.b)B.a.k(h,B.p)
if(o.h(0,new A.j(g,f+1))===B.b)B.a.k(h,B.o)
if(o.h(0,new A.j(g,f+-1))===B.b)B.a.k(h,B.m)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.C)(h),++e){d=h[e]
c=A.a9(i,d)
b=A.c([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.b)break
a2=A.pt(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.a9(a,a2[0]))!==B.i){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.a9(a,a2[1]))===B.i}else a1=!0
if(a1)break
a=A.a9(a,d)
B.a.k(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.i&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.a9(a,A.pu(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.k(m,new A.el(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.a7(t.v,t.fH)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.C)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.v(l,n))continue
if(a4.aM(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.j(0,n,a5)}else a4.j(0,n,a5)}for(s=a4.gbN(a4),s=s.gt(s),n=this.a,l=a9.e,k=a8.b;s.n();){g=s.gp(s)
f=g.d
a0=p.h(0,a8)
a0.toString
B.a.k(a0,f)
a0=p.h(0,f)
a0.toString
B.a.k(a0,a8)
for(g=g.c,a0=g.length,j=0;a1=g.length,j<a1;g.length===a0||(0,A.C)(g),++j)o.j(0,g[j],B.i)
a0=n.D(a1)
if(!(a0>=0&&a0<g.length))return A.b(g,a0)
a7=g[a0]
l.j(0,a7,B.N)
B.a.k(k,a7)
B.a.k(f.b,a7)}for(s=a4.gbN(a4),s=s.gt(s);s.n();)this.bL(s.gp(s).d,a9,b0,b1)}}
A.jE.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.E(0,new A.j(1,0)))===B.b?1:0
if(s.h(0,a.E(0,new A.j(-1,0)))===B.b)++r
if(s.h(0,a.E(0,new A.j(0,-1)))===B.b)++r
return s.h(0,a.E(0,new A.j(1,1)))===B.b?r+1:r},
$S:69}
A.ja.prototype={
di(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.F(0,o.Y()>0.45?B.i:B.b,n,m)
p.F(0,B.aq,n,m)}new A.fa(a7).bV(3)
for(p=q-1,l=0;l<r;++l){s.F(0,B.b,l,0)
s.F(0,B.b,l,p)}for(o=r-1,k=0;k<q;++k){s.F(0,B.b,0,k)
s.F(0,B.b,o,k)}j=new A.jb(a7)
i=new A.jc(a7)
for(l=1;l<o;l=g)for(h=l-1,g=l+1,k=1;k<p;++k){if(!j.$2(l,k))continue
f=i.$2(g,k)
e=i.$2(h,k)
d=k+1
c=i.$2(l,d)
b=k-1
a=i.$2(l,b)
if(f&&e&&c&&a){s.F(0,B.b,l,k)
continue}if(j.$2(h,d)&&c&&e){s.F(0,B.b,l,k)
continue}if(j.$2(g,d)&&c&&f){s.F(0,B.b,l,k)
continue}if(j.$2(g,b)&&a&&f){s.F(0,B.b,l,k)
continue}if(j.$2(h,b)&&a&&e){s.F(0,B.b,l,k)
continue}}p=t.j
o=A.jU(p)
a0=new A.fr(a7,A.c([],t.do),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.j(l,k)
if(o.v(0,a1)||s.h(0,a1)===B.b)continue
a0.cP(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.C)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gt(a3);d.n();)s.j(0,d.gp(d),B.b)
else B.a.k(o,new A.a2(a3,A.c([],h),A.c([],h),A.jt(a3)))}a4=A.a7(p,t.v)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.c,a2=0;b=o.length,a2<b;o.length===r||(0,A.C)(o),++a2){a3=o[a2]
B.a.k(p,a3)
h.j(0,a3,A.c([],d))
for(b=J.ae(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.C)(o),++a2){a3=o[a2]
r=a3.a
p=J.ax(r)
if(p.gm(r)>a6){a6=p.gm(r)
a5=a3}}this.bL(a5,a7,a4,q)
for(r=q.d3(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.C)(r),++a2){a3=r[a2]
B.a.J(o,a3)
for(p=J.ae(a3.a);p.n();)s.j(0,p.gp(p),B.b)}A.or(o,a7)}}
A.jb.prototype={
$2(a,b){return J.Z(this.a.b.a0(0,a,b),B.i)},
$S:19}
A.jc.prototype={
$2(a,b){return J.Z(this.a.b.a0(0,a,b),B.b)},
$S:19}
A.aJ.prototype={}
A.hA.prototype={}
A.aI.prototype={
N(a,b){this.$ti.c.a(a)
return this.a.N(a,b)+this.b.N(a,b)}}
A.d7.prototype={
N(a,b){this.$ti.c.a(a)
return Math.min(B.a5.N(a,b),this.b.N(a,b))}}
A.fU.prototype={
N(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=b.b,r=a.a,q=a.b,p=b.e,o=p.a,p=p.b,n=-1;n<2;++n)for(m=r+n,l=m<o,k=-1;k<2;++k){j=q+k
if(!(m>=0&&j>=0&&l&&j<p))continue
if(s.h(0,new A.j(m,j))===B.b)return 1/0}return 0}}
A.fb.prototype={
N(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.r)return 1/0
s=A.m8(a,B.m,b)
r=A.m8(a,B.o,b)
q=A.m8(a,B.n,b)
p=A.m8(a,B.p,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.f1.prototype={
N(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.r)return 1/0
if(A.cJ(a,B.m,b)+A.cJ(a,B.o,b)+A.cJ(a,B.n,b)+A.cJ(a,B.p,b)===1)return 1
return 1/0}}
A.fh.prototype={
N(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.r)return 1/0
if(A.cJ(a,B.m,b)+A.cJ(a,B.o,b)+A.cJ(a,B.n,b)+A.cJ(a,B.p,b)===2)return 1
return 1/0}}
A.dA.prototype={
N(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.r)return 1/0
s=A.a9(a,B.m)
r=A.a9(a,B.o)
q=A.a9(a,B.n)
p=A.a9(a,B.p)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.d6.prototype={
N(a,b){var s,r,q,p,o,n,m,l,k,j,i
for(s=b.e,r=a.a,q=a.b,p=this.a,o=s.a,n=s.b,m=-2;m<4;++m)for(l=r+m,k=l<o,j=-2;j<4;++j){i=q+j
if(!(l>=0&&i>=0&&k&&i<n))continue
if(s.h(0,new A.j(l,i))===p)return 1/0}return 0}}
A.cx.prototype={
d4(a,b){return this.c.$2(a,b)},
gbF(){return this.a},
gbq(a){return this.b},
gbC(){return this.c}}
A.m0.prototype={
$2(a,b){b.e.j(0,a,B.bd)},
$S:1}
A.lU.prototype={
$2(a,b){b.e.j(0,a,B.ey)},
$S:1}
A.lY.prototype={
$2(a,b){b.e.j(0,a,B.a2)},
$S:1}
A.lT.prototype={
$2(a,b){b.e.j(0,a,B.a2)},
$S:1}
A.lV.prototype={
$2(a,b){b.e.j(0,a,B.as)},
$S:1}
A.lZ.prototype={
$2(a,b){b.e.j(0,a,B.ez)
b.f.j(0,a,B.e1)},
$S:1}
A.m_.prototype={
$2(a,b){b.e.j(0,a,B.ex)},
$S:1}
A.lX.prototype={
$2(a,b){b.e.j(0,a,B.ar)},
$S:1}
A.lW.prototype={
$2(a,b){b.e.j(0,a,B.ar)},
$S:1}
A.lS.prototype={
$2(a,b){b.e.j(0,a,B.at)},
$S:1}
A.b_.prototype={}
A.iC.prototype={
gbq(a){var s=this.a
return s.gbq(s)},
gbC(){return this.a.gbC()},
gbF(){return this.a.gbF()},
l(a){return"Unique("+this.a.l(0)+")"},
$icx:1,
d4(a,b){return this.gbC().$2(a,b)}}
A.m7.prototype={
$2(a,b){var s=t.n4
return B.c.M(s.a(a).b,s.a(b).b)},
$S:48}
A.m6.prototype={
$2(a,b){var s=t.v
s.a(a)
s.a(b)
return J.an(a.a)-J.an(b.a)},
$S:49}
A.dR.prototype={}
A.j4.prototype={
dg(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=4000,a=new A.a3(100,40,A.b9(b,B.i,!1,t.ns),t.ba),a0=A.b9(b,0,!1,t.i),a1=A.b9(b,B.aq,!1,t.dt),a2=new A.a3(100,40,A.b9(b,B.r,!1,t.dy),t.eN),a3=t.c,a4=new A.dR(a5,a,new A.a3(100,40,a0,t.de),new A.a3(100,40,a1,t.f5),a2,new A.a3(100,40,A.b9(b,B.b_,!1,t.gM),t.eT),new A.a3(100,40,A.b9(b,null,!1,t.O),t.oQ),new A.js(A.c([],a3),A.a7(t.v,t.mw)),A.c([],a3))
if(a5.b)this.eT(a4)
a0=a5.a
switch(a0.a){case 1:case 2:new A.ja(B.u).di(a4)
break
case 3:case 4:new A.kr(A.jU(t.j),B.u).dl(a4)
break
case 6:case 0:case 5:new A.kD(B.u).dj(a4)
break}s=new Float32Array(4000)
new A.kh().dk(s,100,40)
r=new A.a3(100,40,A.mx(b,new A.j6(),t.W),t.nr)
for(q=0;q<100;++q)for(a1=q!==0,a3=q!==99,p=0;p<40;++p)if(!a1||!a3||p===0||p===39){a.F(0,B.b,q,p)
a2.F(0,B.r,q,p)}a1=a4.y
this.b.dh(a1,a4,a5.c)
for(a3=a4.c,o=this.a,n=a4.d,m=a4.r,a0=a0!==B.bN,l=a4.f,q=0;q<100;++q)for(p=0;p<40;++p){k=J.Z(a.a0(0,q,p),B.i)
j=a.a0(0,q,p)
j.toString
i=new A.j(q,p)
o.Y()
h=r.h(0,i)
g=n.h(0,i)
f=a2.h(0,i)
h.b=i
h.c=j
h.sfm(n.h(0,i))
j=p*100+q
if(!(j<4000))return A.b(s,j)
e=s[j]
d=m.a0(0,q,p)
if(J.Z(a3.h(0,i),1)){h.r=B.dN
h.c=B.i}else if(f!==B.r)switch(f.a){case 0:if(l.h(0,i)===B.aZ)h.f=B.J
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
break}else if(k&&e<0.42&&g!==B.a1&&a0)h.f=B.K
if(d!=null)B.a.k(h.e,d)}a=J.ae(B.a.eZ(a1,new A.j7(),new A.j8(a4)).a)
while(!0){if(!a.n()){c=!1
break}a0=a.gp(a)
if(A.qD(a2.h(0,a0))){r.h(0,a0).f=B.H
c=!0
break}}if(!c)throw A.d(A.a5(""))
return new A.jX(r,a5)},
eT(a){var s,r,q=this.a,p=a.b,o=p.b,n=q.D(o-1)+1,m=n>o/2?-1:1,l=new A.j5(a)
for(p=p.a,s=n,r=0;r<p;++r){l.$1(new A.j(r,s))
l.$1(new A.j(r,s+1))
l.$1(new A.j(r,s-1))
s+=q.f9()?m:0}}}
A.j6.prototype={
$1(a){var s=A.c([],t.I)
return new A.bT(B.D,B.i,s)},
$S:18}
A.j7.prototype={
$1(a){return t.v.a(a).e},
$S:50}
A.j8.prototype={
$0(){return B.a.geY(this.a.y)},
$S:51}
A.j5.prototype={
$1(a){var s=this.a,r=s.b
if(r.cQ(a)){r.j(0,a,B.i)
s.c.j(0,a,1)}},
$S:52}
A.el.prototype={
gm(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.js.prototype={
d3(){var s,r,q,p,o,n=A.c([],t.c)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.k(n,o)}return n}}
A.a2.prototype={
l(a){return"Room{"+J.an(this.a)+"; "+this.d.l(0)+"}"}}
A.fr.prototype={
cP(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.c([a],k),i=A.c([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.v(0,o))continue
q.k(0,o)
B.a.k(i,o)
for(n=0;n<8;++n){m=A.a9(o,B.ah[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.v(0,m)&&k.h(0,m)===B.i)B.a.k(j,m)}}B.a.k(this.b,i)}}
A.fz.prototype={
cD(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.a_)s=B.aO
else if(a instanceof A.a1)s=B.aM
else s=a instanceof A.at?B.aN:B.aP
B.a.k(r.a,a)
B.a.k(r.b,s)
B.a.k(r.c,b)
r.d+=b},
cC(a){return this.cD(a,10)},
fc(a){var s,r,q,p={},o=p.a=0,n=A.mx(this.c.length,new A.jM(p,this),t.i),m=a.Y()
for(s=n.length,r=m>-1;o<s;++o){q=n[o]
if(r&&m<=q){s=this.a
if(!(o<s.length))return A.b(s,o)
return A.fy(s[o])}}throw A.d(A.a5(""))},
ds(a){var s,r,q=B.a.f5(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
dr(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p===0)return
B.a.j(r,q,p-2)
this.d-=2}}}
A.jM.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.b(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:54}
A.kc.prototype={}
A.jH.prototype={
dh(a,b,c){var s,r,q
t.mw.a(a)
s=new A.fz(A.c([],t.hf),A.c([],t.lB),A.c([],t.t))
r=s.geG()
new A.a8(B.dX,t.ei.a(new A.jI()),t.kL).C(0,r)
new A.a8(B.dY,t.eU.a(new A.jJ()),t.eo).C(0,r)
new A.a8(B.dZ,t.hZ.a(new A.jK()),t.au).C(0,r)
new A.a8(B.dO,t.g9.a(new A.jL()),t.b1).C(0,r)
s.cC(B.aD)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.C)(a),++q)this.dY(s,a[q],b)},
dY(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.ax(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.D
break}r=j.length
if(r!==0){r=l.D(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.D(k.gm(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.as||q===B.r
else r=!1
if(r)break;++i}if(s.H(0,B.D))return
p=a.fc(l)
n=p.b
if(!J.Z(n,B.aD)){a.ds(n)
a.dr(p.c)
o.j(0,s,p)}}}
A.jI.prototype={
$1(a){return t.bB.a(a).b<=1000},
$S:55}
A.jJ.prototype={
$1(a){return t.li.a(a).f<=1000},
$S:56}
A.jK.prototype={
$1(a){return t.kB.a(a).r<=1000},
$S:57}
A.jL.prototype={
$1(a){return t.lE.a(a).c<=1000},
$S:58}
A.kh.prototype={
a8(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
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
o=$.oQ()
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
c=a8.a8(0,o[d],k,j,i)
if(!(a0<f))return A.b(o,a0)
a2=k-1
c+=h*(a8.a8(0,o[a0],a2,j,i)-c)
if(!(b<f))return A.b(o,b)
a3=j-1
a4=a8.a8(0,o[b],k,a3,i)
if(!(a1<f))return A.b(o,a1)
c+=g*(a4+h*(a8.a8(0,o[a1],a2,a3,i)-a4)-c)
a4=d+1
if(!(a4<f))return A.b(o,a4)
a5=i-1
a4=a8.a8(0,o[a4],k,j,a5)
a6=a0+1
if(!(a6<f))return A.b(o,a6)
a4+=h*(a8.a8(0,o[a6],a2,j,a5)-a4)
a6=b+1
if(!(a6<f))return A.b(o,a6)
a6=a8.a8(0,o[a6],k,a3,a5)
a7=a1+1
if(!(a7<f))return A.b(o,a7)
a5=a8.a8(0,o[a7],a2,a3,a5)
if(!(p<4000))return A.b(a9,p)
a9[p]=(c+i*i*i*(i*(i*6-15)+10)*(a4+g*(a6+h*(a5-a6)-a4)-c)+1)/2}}}
A.bO.prototype={
l(a){return"RuinOrientation."+this.b}}
A.ee.prototype={
l(a){return"RoomSizeKind."+this.b}}
A.kr.prototype={
dl(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.D(5)
if(!(a3>=0&&a3<5))return A.b(B.aS,a3)
s=B.aS[a3]
r=a1.bW(B.eq)
q=a1.e9(s)
p=A.pw(a1.cL(a4,r,new A.j(B.c.A(Math.max(1,q.a-r.a/2)),B.c.A(Math.max(1,q.b-A.ct(r)/2)))))
a3=a4.y
B.a.k(a3,p)
for(o=t.q,n=0;n<2000;){m=new A.j(a2.D(98)+1,a2.D(38)+1)
l=[B.am,B.am,B.am,B.ep]
k=a2.D(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a1.bW(l[k])
if(!a1.fi(a4,r,m)){l=a1.cL(a4,r,m)
B.a.k(a3,new A.a2(l,A.c([],o),A.c([],o),A.jt(l)))}else ++n}for(a2=a1.b,o=a4.d,l=a4.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.j(j,i)
o.F(0,B.a1,j,i)
if(!a2.v(0,h))l.j(0,h,B.b)}g=A.a7(t.j,t.v)
for(a2=a3.length,k=a4.x,f=k.a,e=k.b,d=t.c,c=0;c<a3.length;a3.length===a2||(0,A.C)(a3),++c){b=a3[c]
B.a.k(f,b)
e.j(0,b,A.c([],d))
for(a=J.ae(b.a);a.n();)g.j(0,a.gp(a),b)}a1.bL(p,a4,g,k)
for(a2=k.d3(),k=a2.length,c=0;c<a2.length;a2.length===k||(0,A.C)(a2),++c){b=a2[c]
B.a.J(a3,b)
for(f=J.ae(b.a);f.n();)l.j(0,f.gp(f),B.b)}A.or(a3,a4)
for(a2=o.c,a0=0;a0<4000;++a0)B.a.j(a2,a0,B.a1)},
bW(a){var s
switch(a.a){case 0:s=this.a
return new A.ed(s.D(5)+5,s.D(5)+5)
case 1:s=this.a
return new A.ed(s.D(10)+9,s.D(10)+9)
case 2:s=this.a
return new A.ed(s.D(10)+20,s.D(10)+20)}},
e9(a){switch(a.a){case 0:return new A.j(50,10)
case 1:return new A.j(50,30)
case 2:return new A.j(75,20)
case 3:return new A.j(25,20)
case 4:return new A.j(50,20)}},
cL(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.c([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.j(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.k(0,d)
r.j(0,d,f?B.b:B.i)
if(!f)B.a.k(a,d)}return a},
fi(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.j(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.b||n.v(0,i))return!0}return!1}}
A.ed.prototype={}
A.kD.prototype={
e6(a){var s,r,q=a.a.a===B.a3?B.aq:B.ew
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
dj(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.e6(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.Y()>0.6)r.j(0,new A.j(q,p),B.b)
new A.fa(b8).bV(10)
o=A.jU(t.j)
n=new A.fr(b8,A.c([],t.do),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.j(k,j)
if(o.v(0,i)||r.h(0,i)===B.b)continue
n.cP(i)}o=n.b
B.a.aX(o,new A.kE())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.C)(h),++f)r.j(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.j(e,q,B.eA)
B.a.j(o,q,B.i)}$label0$1:for(o=b8.y,e=t.q,d=b8.d,c=0;c<3;){b=s.D(3)+5
a=s.D(3)+5
q=s.D(100-b)
p=s.D(40-a)
for(a0=q-1,a1=q+b,a2=a1+1,a3=p-1,a4=p+a,a5=a4+1;a0<a2;++a0)for(a6=a0>=0,a7=a0<m,a8=a3;a8<a5;++a8){i=new A.j(a0,a8)
if(!(a6&&a8>=0&&a7&&a8<l))continue $label0$1
if(g.h(0,i)!==B.r||r.h(0,i)!==B.i)continue $label0$1}a9=A.c([],e)
b0=A.c([],e)
for(a2=a1-1,a5=a4-1,a0=q;a0<a1;++a0)for(a6=a0-q!==0,a7=a0!==a2,a3=p;a3<a4;++a3){i=new A.j(a0,a3)
if(!a6||!a7||a3-p===0||a3===a5){r.j(0,i,B.b)
B.a.k(a9,i)}else B.a.k(b0,i)
d.j(0,i,B.a1)}b1=new A.kF(b8)
B.a.bU(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.D
break}b3=a9[f]
b4=A.a9(b3,B.m)
b5=A.a9(b3,B.o)
b6=A.a9(b3,B.p)
b7=A.a9(b3,B.n)
if(A.N(b1.$1(b4))&&A.N(b1.$1(b5))){b2=b3
break}if(A.N(b1.$1(b6))&&A.N(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.C)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.i)
g.j(0,b2,B.N)
B.a.k(o,new A.a2(b0,A.c([],e),A.c([],e),A.jt(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.C)(o),++f)A.dx(o[f],$.mj(),b8)}}
A.kE.prototype={
$2(a,b){var s=t.i8
s.a(a)
return J.an(s.a(b))-J.an(a)},
$S:59}
A.kF.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.i&&s.e.h(0,a)===B.r},
$S:60}
A.kP.prototype={
dI(a){var s=t.jV.a(new A.kQ(this))
t.Z.a(null)
A.cA(a,"keydown",s,!1,t.g)
A.cA(a,"mousemove",t.b9.a(new A.kR(this)),!1,t.E)}}
A.kQ.prototype={
$1(a){var s
t.g.a(a)
s=$.qK.h(0,a.key)
if(s!=null){a.preventDefault()
this.a.a.k(0,s)}},
$S:20}
A.kR.prototype={
$1(a){var s,r
t.E.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
this.a.b.k(0,A.c([s,r],t.n))},
$S:10}
A.ab.prototype={
l(a){return"InputCommand."+this.b}}
A.iV.prototype={
I(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.aW.a(a)
s=document
h.b=t.mX.a(s.querySelector("#action_bar"))
for(r=h.c,q=h.d,p=t.eX,o=p.i("~(1)?"),n=t.Z,p=p.c,m=0;m<1;++m){l=r[m]
k=q[m]
j=s.createElement("button")
j.innerText=l
i=o.a(new A.iW(h,k))
n.a(null)
A.cA(j,"click",i,!1,p)
A.c1(h.b,"base").appendChild(j)}}}
A.iW.prototype={
$1(a){var s
t.E.a(a)
s=this.a.a
s.bo(0)
s.c=!0
s.a.c=!0
s=A.c1(s.b,"_modal").style
s.display="block"
s=document.getElementById("modal-content")
s.toString
J.ph(s,this.b)},
$S:10}
A.k4.prototype={
dG(a){var s,r=document.getElementById("myModal")
r.toString
this.b=r
r=window
s=t.b9.a(new A.k5(this))
t.Z.a(null)
A.cA(r,"click",s,!1,t.E)
A.cA(window,"keydown",t.jV.a(new A.k6(this)),!1,t.g)},
bo(a){var s
this.c=!1
this.a.c=!1
s=A.c1(this.b,"_modal").style
s.display="none"}}
A.k5.prototype={
$1(a){var s=this.a
if(A.qE(t.E.a(a).target)===A.c1(s.b,"_modal"))s.bo(0)},
$S:10}
A.k6.prototype={
$1(a){var s
t.g.a(a)
s=this.a
if(s.c&&a.key==="Escape")s.bo(0)},
$S:20}
A.h1.prototype={}
A.kx.prototype={
I(a){var s,r,q
t.ni.a(a)
s=document
r=s.getElementById("health_bar")
r.toString
s=s.getElementById("exp_bar")
s.toString
q=t.M
B.a.k(a.a.a,q.a(new A.ky(r,a)))
B.a.k(a.b.a,q.a(new A.kz(s,a)))}}
A.ky.prototype={
$0(){var s=this.a.style,r=A.w(this.b.a.b*100)+"%"
s.width=r},
$S:0}
A.kz.prototype={
$0(){var s=this.a.style,r=A.w(this.b.b.b*100)+"%"
s.width=r},
$S:0};(function aliases(){var s=J.a.prototype
s.dv=s.l
s=J.ck.prototype
s.dz=s.l
s=A.aA.prototype
s.dA=s.cU
s.dB=s.cV
s.dD=s.cX
s.dC=s.cW
s=A.h.prototype
s.dw=s.aS
s=A.M.prototype
s.aY=s.T
s=A.eC.prototype
s.dE=s.aa})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers.installStaticTearOff,l=hunkHelpers._instance_1u
s(J.t.prototype,"geE","k",23)
r(A,"r0","pB",21)
r(A,"rg","q8",11)
r(A,"rh","q9",11)
r(A,"ri","qa",11)
q(A,"og","ra",0)
p(A,"rk","r4",8)
q(A,"rj","r3",0)
o(A.dp.prototype,"geP",1,0,null,["$1","$0"],["a1","aK"],35,0,0)
n(A.I.prototype,"gdU","L",8)
p(A,"ro","qI",65)
r(A,"rp","qJ",21)
m(A,"rA",4,null,["$4"],["qd"],12,0)
m(A,"rB",4,null,["$4"],["qe"],12,0)
var k
l(k=A.fu.prototype,"gf0","bx",34)
l(k,"gcp","ed",17)
p(A,"rR","r9",67)
o(A.fz.prototype,"geG",0,1,null,["$2","$1"],["cD","cC"],53,0,0)
p(A,"rX","rr",68)
r(A,"on","rQ",45)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.mu,J.a,J.dD,A.K,A.kt,A.h,A.bm,A.U,A.aq,A.cU,A.cb,A.kK,A.ke,A.dQ,A.eF,A.x,A.jR,A.e_,A.l0,A.aY,A.hW,A.eM,A.eL,A.hD,A.dn,A.c_,A.dF,A.eo,A.cB,A.I,A.hE,A.cu,A.br,A.eG,A.hF,A.en,A.hM,A.bZ,A.im,A.eR,A.eS,A.i2,A.eu,A.ev,A.k,A.ef,A.cd,A.ag,A.l1,A.fZ,A.eh,A.hT,A.d1,A.V,A.iq,A.hj,A.jg,A.mp,A.cC,A.r,A.e8,A.eC,A.is,A.cf,A.hL,A.ig,A.eQ,A.kU,A.kd,A.i_,A.fw,A.cE,A.f,A.a3,A.fV,A.aQ,A.cL,A.iT,A.iS,A.ad,A.ap,A.b7,A.bn,A.j9,A.fu,A.f2,A.aL,A.je,A.a_,A.k0,A.bH,A.a1,A.dC,A.at,A.ao,A.f_,A.ca,A.cP,A.cY,A.cX,A.fg,A.fH,A.bT,A.fE,A.fF,A.j,A.jX,A.k1,A.kp,A.fn,A.ju,A.a6,A.bF,A.H,A.jx,A.iw,A.kN,A.km,A.db,A.cj,A.bo,A.kg,A.fk,A.X,A.y,A.hG,A.iB,A.jF,A.ko,A.fT,A.hd,A.a4,A.jZ,A.kH,A.h6,A.hB,A.hg,A.kT,A.jm,A.fa,A.jD,A.aJ,A.cx,A.b_,A.iC,A.dR,A.j4,A.el,A.js,A.a2,A.fr,A.fz,A.kc,A.jH,A.kh,A.ed,A.kD,A.kP,A.iV,A.k4,A.h1,A.kx])
q(J.a,[J.dW,J.dY,J.ck,J.t,J.d0,J.bN,A.fM,A.cs,A.e,A.iU,A.f8,A.cS,A.bh,A.G,A.hK,A.aV,A.jj,A.bK,A.fl,A.hN,A.dN,A.hP,A.jk,A.l,A.hU,A.az,A.jG,A.hY,A.e1,A.k_,A.i3,A.i4,A.aB,A.i5,A.i7,A.aC,A.ib,A.ie,A.aD,A.ih,A.aE,A.ik,A.ah,A.iu,A.kI,A.aF,A.ix,A.kJ,A.kM,A.iF,A.iH,A.iJ,A.iL,A.iN,A.aM,A.i0,A.aP,A.i9,A.ki,A.io,A.aR,A.iz,A.b4,A.f4,A.hI,A.f9,A.ft,A.h3,A.da,A.bs,A.ht,A.hy])
q(J.ck,[J.h0,J.cw,J.bj])
r(J.jN,J.t)
q(J.d0,[J.dX,J.fA])
q(A.K,[A.cl,A.bU,A.fB,A.hv,A.ha,A.dE,A.hS,A.fW,A.b3,A.hx,A.hu,A.bq,A.ff,A.fi])
q(A.h,[A.p,A.cn,A.a8,A.dV,A.lt])
q(A.p,[A.aN,A.dZ])
q(A.aN,[A.ei,A.co])
r(A.dO,A.cn)
q(A.U,[A.e3,A.em])
q(A.cU,[A.dK,A.aa])
q(A.cb,[A.jC,A.fc,A.fd,A.hn,A.jP,A.lL,A.lN,A.kY,A.kX,A.lw,A.jz,A.l7,A.lf,A.kB,A.ll,A.lh,A.jY,A.jr,A.l2,A.kb,A.ka,A.lm,A.ln,A.lp,A.m1,A.m2,A.j1,A.j2,A.lK,A.jB,A.jq,A.jv,A.k7,A.j_,A.iZ,A.kk,A.ku,A.lP,A.kw,A.lC,A.jn,A.jE,A.j6,A.j7,A.j5,A.jM,A.jI,A.jJ,A.jK,A.jL,A.kF,A.kQ,A.kR,A.iW,A.k5,A.k6])
r(A.e9,A.bU)
q(A.hn,[A.hh,A.cR])
r(A.hC,A.dE)
r(A.e2,A.x)
q(A.e2,[A.aA,A.hH])
q(A.fd,[A.jO,A.lM,A.lx,A.lB,A.jA,A.l8,A.jS,A.jW,A.k2,A.k3,A.kq,A.kA,A.lv,A.kW,A.j3,A.jd,A.jb,A.jc,A.m0,A.lU,A.lY,A.lT,A.lV,A.lZ,A.m_,A.lX,A.lW,A.lS,A.m7,A.m6,A.kE])
r(A.d4,A.cs)
q(A.d4,[A.ex,A.ez])
r(A.ey,A.ex)
r(A.cr,A.ey)
r(A.eA,A.ez)
r(A.e5,A.eA)
r(A.e4,A.cr)
q(A.e5,[A.fN,A.fO,A.fP,A.fQ,A.fR,A.d5,A.e6])
r(A.eN,A.hS)
q(A.fc,[A.kZ,A.l_,A.lr,A.lq,A.l3,A.lb,A.l9,A.l5,A.la,A.l4,A.le,A.ld,A.lc,A.kC,A.lo,A.lj,A.lA,A.lk,A.mb,A.m9,A.ma,A.m5,A.m3,A.m4,A.me,A.mc,A.md,A.mh,A.mf,A.mg,A.lF,A.lD,A.lE,A.k8,A.j0,A.kl,A.j8,A.ky,A.kz])
r(A.eI,A.dV)
q(A.eo,[A.aT,A.dp])
r(A.dj,A.eG)
q(A.cu,[A.eH,A.eq])
r(A.bW,A.eH)
r(A.dl,A.en)
r(A.cy,A.hM)
r(A.bd,A.bZ)
r(A.id,A.eR)
q(A.aA,[A.li,A.et])
r(A.eB,A.eS)
r(A.cD,A.eB)
r(A.e0,A.ev)
q(A.b3,[A.d9,A.fx])
q(A.e,[A.q,A.fq,A.ci,A.au,A.eD,A.av,A.ac,A.eJ,A.hz,A.di,A.F,A.dI,A.f6])
q(A.q,[A.M,A.b6,A.b8,A.dk])
q(A.M,[A.u,A.m])
q(A.u,[A.cM,A.f3,A.cQ,A.c7,A.c8,A.cW,A.fs,A.d_,A.cq,A.hb,A.ej,A.hl,A.hm,A.de])
r(A.jf,A.bh)
r(A.cV,A.hK)
q(A.aV,[A.jh,A.ji])
r(A.hO,A.hN)
r(A.dM,A.hO)
r(A.hQ,A.hP)
r(A.fm,A.hQ)
r(A.ay,A.f8)
r(A.hV,A.hU)
r(A.fp,A.hV)
r(A.hZ,A.hY)
r(A.ch,A.hZ)
r(A.dT,A.b8)
r(A.dU,A.ci)
r(A.bc,A.l)
q(A.bc,[A.bk,A.as])
r(A.fI,A.i3)
r(A.fJ,A.i4)
r(A.i6,A.i5)
r(A.fK,A.i6)
r(A.aj,A.e0)
r(A.i8,A.i7)
r(A.e7,A.i8)
r(A.ic,A.ib)
r(A.h2,A.ic)
r(A.h9,A.ie)
r(A.eE,A.eD)
r(A.he,A.eE)
r(A.ii,A.ih)
r(A.hf,A.ii)
r(A.hi,A.ik)
r(A.iv,A.iu)
r(A.ho,A.iv)
r(A.eK,A.eJ)
r(A.hp,A.eK)
r(A.iy,A.ix)
r(A.hr,A.iy)
r(A.dh,A.cq)
r(A.iG,A.iF)
r(A.hJ,A.iG)
r(A.ep,A.dN)
r(A.iI,A.iH)
r(A.hX,A.iI)
r(A.iK,A.iJ)
r(A.ew,A.iK)
r(A.iM,A.iL)
r(A.ij,A.iM)
r(A.iO,A.iN)
r(A.ir,A.iO)
r(A.hR,A.hH)
r(A.bX,A.eq)
r(A.er,A.br)
r(A.it,A.eC)
r(A.kV,A.kU)
r(A.i1,A.i0)
r(A.fC,A.i1)
r(A.ia,A.i9)
r(A.fX,A.ia)
r(A.dc,A.m)
r(A.ip,A.io)
r(A.hk,A.ip)
r(A.iA,A.iz)
r(A.hs,A.iA)
q(A.F,[A.bf,A.cZ])
r(A.dH,A.bf)
q(A.dI,[A.c6,A.fY])
r(A.f5,A.hI)
q(A.ap,[A.bR,A.bS,A.cT,A.bP,A.h7,A.ec,A.h8,A.bE])
r(A.Y,A.f)
q(A.Y,[A.cp,A.d2])
q(A.l1,[A.eg,A.bi,A.fv,A.bI,A.bJ,A.aS,A.cc,A.dB,A.cO,A.h_,A.ce,A.df,A.fe,A.cv,A.ai,A.cm,A.b5,A.jV,A.a0,A.d3,A.c9,A.aW,A.dg,A.bO,A.ee,A.ab])
q(A.kp,[A.jl,A.jp,A.jy,A.fG,A.ks,A.kv,A.kG,A.jw,A.kO])
q(A.a6,[A.fS,A.eb,A.aO,A.dd,A.fD,A.ek,A.dG,A.dL,A.f7,A.hw,A.ea,A.h4])
q(A.jD,[A.ja,A.kr])
q(A.aJ,[A.hA,A.aI,A.d7])
q(A.hA,[A.fU,A.fb,A.f1,A.fh,A.dA,A.d6])
s(A.ex,A.k)
s(A.ey,A.aq)
s(A.ez,A.k)
s(A.eA,A.aq)
s(A.dj,A.hF)
s(A.ev,A.k)
s(A.eS,A.ef)
s(A.hK,A.jg)
s(A.hN,A.k)
s(A.hO,A.r)
s(A.hP,A.k)
s(A.hQ,A.r)
s(A.hU,A.k)
s(A.hV,A.r)
s(A.hY,A.k)
s(A.hZ,A.r)
s(A.i3,A.x)
s(A.i4,A.x)
s(A.i5,A.k)
s(A.i6,A.r)
s(A.i7,A.k)
s(A.i8,A.r)
s(A.ib,A.k)
s(A.ic,A.r)
s(A.ie,A.x)
s(A.eD,A.k)
s(A.eE,A.r)
s(A.ih,A.k)
s(A.ii,A.r)
s(A.ik,A.x)
s(A.iu,A.k)
s(A.iv,A.r)
s(A.eJ,A.k)
s(A.eK,A.r)
s(A.ix,A.k)
s(A.iy,A.r)
s(A.iF,A.k)
s(A.iG,A.r)
s(A.iH,A.k)
s(A.iI,A.r)
s(A.iJ,A.k)
s(A.iK,A.r)
s(A.iL,A.k)
s(A.iM,A.r)
s(A.iN,A.k)
s(A.iO,A.r)
s(A.i0,A.k)
s(A.i1,A.r)
s(A.i9,A.k)
s(A.ia,A.r)
s(A.io,A.k)
s(A.ip,A.r)
s(A.iz,A.k)
s(A.iA,A.r)
s(A.hI,A.x)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",L:"double",O:"num",o:"String",z:"bool",V:"Null",n:"List"},mangledNames:{},types:["~()","~(j,dR)","a4()","b7()","n<aL>()","~(o,@)","V()","~(@)","~(v,aZ)","~(bF)","~(as)","~(~())","z(M,o,o,cC)","V(@)","z(aX)","~(l)","z(o)","~(ag)","bT(i)","z(i,i)","~(bk)","i(v?)","~(i,@)","~(v?)","@(o)","o(o)","~(q,q?)","@(@,@)","~(b4)","~(bK)","z(aL)","V(@,aZ)","z(v?)","V(~())","ar<~>(ab)","~([v?])","z(mn)","~(n<L>)","V(v,aZ)","~(hq)","ar<~>(l)","V(bs)","I<@>(@)","z(bn)","i(i,i)","~(O)","z(@)","~(@,@)","i(b_,b_)","i(a2,a2)","z(a2)","a2()","~(j)","~(v[i])","L(i)","z(a_)","z(a1)","z(at)","z(ao)","i(n<j>,n<j>)","z(j)","~(v?,v?)","z(q)","@(@)","~(o,o)","z(v?,v?)","@(@,o)","i(a4,a4)","i(v?,v?)","i(j)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.qv(v.typeUniverse,JSON.parse('{"h0":"ck","cw":"ck","bj":"ck","rZ":"l","th":"l","t0":"F","t5":"bf","rY":"m","ti":"m","t_":"e","ts":"e","tv":"e","t2":"u","tw":"q","tg":"q","tK":"b8","tu":"as","tJ":"ac","t4":"bc","t3":"b6","ty":"b6","tk":"ci","tj":"ch","t6":"G","t8":"ah","t1":"cq","tr":"cr","tq":"cs","dW":{"z":[]},"dY":{"V":[]},"t":{"n":["1"],"p":["1"],"h":["1"]},"jN":{"t":["1"],"n":["1"],"p":["1"],"h":["1"]},"dD":{"U":["1"]},"d0":{"L":[],"O":[],"af":["O"]},"dX":{"L":[],"i":[],"O":[],"af":["O"]},"fA":{"L":[],"O":[],"af":["O"]},"bN":{"o":[],"af":["o"],"nz":[]},"cl":{"K":[]},"p":{"h":["1"]},"aN":{"p":["1"],"h":["1"]},"ei":{"aN":["1"],"p":["1"],"h":["1"],"aN.E":"1","h.E":"1"},"bm":{"U":["1"]},"cn":{"h":["2"],"h.E":"2"},"dO":{"cn":["1","2"],"p":["2"],"h":["2"],"h.E":"2"},"e3":{"U":["2"]},"co":{"aN":["2"],"p":["2"],"h":["2"],"aN.E":"2","h.E":"2"},"a8":{"h":["1"],"h.E":"1"},"em":{"U":["1"]},"cU":{"Q":["1","2"]},"dK":{"cU":["1","2"],"Q":["1","2"]},"aa":{"cU":["1","2"],"Q":["1","2"]},"e9":{"bU":[],"K":[]},"fB":{"K":[]},"hv":{"K":[]},"eF":{"aZ":[]},"cb":{"cg":[]},"fc":{"cg":[]},"fd":{"cg":[]},"hn":{"cg":[]},"hh":{"cg":[]},"cR":{"cg":[]},"ha":{"K":[]},"hC":{"K":[]},"aA":{"x":["1","2"],"jQ":["1","2"],"Q":["1","2"],"x.K":"1","x.V":"2"},"dZ":{"p":["1"],"h":["1"],"h.E":"1"},"e_":{"U":["1"]},"fM":{"ne":[]},"cs":{"aG":[]},"d4":{"A":["1"],"aG":[]},"cr":{"k":["L"],"A":["L"],"n":["L"],"p":["L"],"aG":[],"h":["L"],"aq":["L"],"k.E":"L"},"e5":{"k":["i"],"A":["i"],"n":["i"],"p":["i"],"aG":[],"h":["i"],"aq":["i"]},"e4":{"k":["L"],"mr":[],"A":["L"],"n":["L"],"p":["L"],"aG":[],"h":["L"],"aq":["L"],"k.E":"L"},"fN":{"k":["i"],"A":["i"],"n":["i"],"p":["i"],"aG":[],"h":["i"],"aq":["i"],"k.E":"i"},"fO":{"k":["i"],"A":["i"],"n":["i"],"p":["i"],"aG":[],"h":["i"],"aq":["i"],"k.E":"i"},"fP":{"k":["i"],"A":["i"],"n":["i"],"p":["i"],"aG":[],"h":["i"],"aq":["i"],"k.E":"i"},"fQ":{"k":["i"],"A":["i"],"n":["i"],"p":["i"],"aG":[],"h":["i"],"aq":["i"],"k.E":"i"},"fR":{"k":["i"],"A":["i"],"n":["i"],"p":["i"],"aG":[],"h":["i"],"aq":["i"],"k.E":"i"},"d5":{"k":["i"],"q3":[],"A":["i"],"n":["i"],"p":["i"],"aG":[],"h":["i"],"aq":["i"],"k.E":"i"},"e6":{"k":["i"],"q4":[],"A":["i"],"n":["i"],"p":["i"],"aG":[],"h":["i"],"aq":["i"],"k.E":"i"},"eM":{"nN":[]},"hS":{"K":[]},"eN":{"bU":[],"K":[]},"I":{"ar":["1"]},"eL":{"hq":[]},"c_":{"U":["1"]},"eI":{"h":["1"],"h.E":"1"},"dF":{"K":[]},"aT":{"eo":["1"]},"dp":{"eo":["1"]},"eG":{"nI":["1"],"nV":["1"],"cz":["1"]},"dj":{"hF":["1"],"eG":["1"],"nI":["1"],"nV":["1"],"cz":["1"]},"bW":{"eH":["1"],"cu":["1"]},"dl":{"en":["1"],"br":["1"],"cz":["1"]},"en":{"br":["1"],"cz":["1"]},"eH":{"cu":["1"]},"cy":{"hM":["1"]},"bd":{"bZ":["1"]},"eR":{"nP":[]},"id":{"eR":[],"nP":[]},"li":{"aA":["1","2"],"x":["1","2"],"jQ":["1","2"],"Q":["1","2"],"x.K":"1","x.V":"2"},"et":{"aA":["1","2"],"x":["1","2"],"jQ":["1","2"],"Q":["1","2"],"x.K":"1","x.V":"2"},"cD":{"ef":["1"],"nF":["1"],"p":["1"],"h":["1"]},"eu":{"U":["1"]},"dV":{"h":["1"]},"e0":{"k":["1"],"n":["1"],"p":["1"],"h":["1"]},"e2":{"x":["1","2"],"Q":["1","2"]},"x":{"Q":["1","2"]},"eB":{"ef":["1"],"nF":["1"],"p":["1"],"h":["1"]},"cd":{"af":["cd"]},"L":{"O":[],"af":["O"]},"ag":{"af":["ag"]},"i":{"O":[],"af":["O"]},"n":{"p":["1"],"h":["1"]},"O":{"af":["O"]},"o":{"af":["o"],"nz":[]},"dE":{"K":[]},"bU":{"K":[]},"fW":{"K":[]},"b3":{"K":[]},"d9":{"K":[]},"fx":{"K":[]},"hx":{"K":[]},"hu":{"K":[]},"bq":{"K":[]},"ff":{"K":[]},"fZ":{"K":[]},"eh":{"K":[]},"fi":{"K":[]},"iq":{"aZ":[]},"M":{"q":[],"e":[]},"bk":{"l":[]},"as":{"l":[]},"q":{"e":[]},"au":{"e":[]},"av":{"e":[]},"ac":{"e":[]},"cC":{"aX":[]},"u":{"M":[],"q":[],"e":[]},"cM":{"M":[],"q":[],"e":[]},"f3":{"M":[],"q":[],"e":[]},"cQ":{"M":[],"q":[],"e":[]},"c7":{"M":[],"q":[],"e":[]},"c8":{"M":[],"q":[],"e":[]},"b6":{"q":[],"e":[]},"cW":{"M":[],"q":[],"e":[]},"b8":{"q":[],"e":[]},"dM":{"k":["bb<O>"],"r":["bb<O>"],"n":["bb<O>"],"A":["bb<O>"],"p":["bb<O>"],"h":["bb<O>"],"r.E":"bb<O>","k.E":"bb<O>"},"dN":{"bb":["O"]},"fm":{"k":["o"],"r":["o"],"n":["o"],"A":["o"],"p":["o"],"h":["o"],"r.E":"o","k.E":"o"},"fp":{"k":["ay"],"r":["ay"],"n":["ay"],"A":["ay"],"p":["ay"],"h":["ay"],"r.E":"ay","k.E":"ay"},"fq":{"e":[]},"fs":{"M":[],"q":[],"e":[]},"ch":{"k":["q"],"r":["q"],"n":["q"],"A":["q"],"p":["q"],"h":["q"],"r.E":"q","k.E":"q"},"dT":{"b8":[],"q":[],"e":[]},"dU":{"e":[]},"ci":{"e":[]},"d_":{"M":[],"q":[],"e":[]},"cq":{"M":[],"q":[],"e":[]},"fI":{"x":["o","@"],"Q":["o","@"],"x.K":"o","x.V":"@"},"fJ":{"x":["o","@"],"Q":["o","@"],"x.K":"o","x.V":"@"},"fK":{"k":["aB"],"r":["aB"],"n":["aB"],"A":["aB"],"p":["aB"],"h":["aB"],"r.E":"aB","k.E":"aB"},"aj":{"k":["q"],"n":["q"],"p":["q"],"h":["q"],"k.E":"q"},"e7":{"k":["q"],"r":["q"],"n":["q"],"A":["q"],"p":["q"],"h":["q"],"r.E":"q","k.E":"q"},"h2":{"k":["aC"],"r":["aC"],"n":["aC"],"A":["aC"],"p":["aC"],"h":["aC"],"r.E":"aC","k.E":"aC"},"h9":{"x":["o","@"],"Q":["o","@"],"x.K":"o","x.V":"@"},"hb":{"M":[],"q":[],"e":[]},"he":{"k":["au"],"r":["au"],"n":["au"],"A":["au"],"e":[],"p":["au"],"h":["au"],"r.E":"au","k.E":"au"},"hf":{"k":["aD"],"r":["aD"],"n":["aD"],"A":["aD"],"p":["aD"],"h":["aD"],"r.E":"aD","k.E":"aD"},"hi":{"x":["o","o"],"Q":["o","o"],"x.K":"o","x.V":"o"},"ej":{"M":[],"q":[],"e":[]},"hl":{"M":[],"q":[],"e":[]},"hm":{"M":[],"q":[],"e":[]},"de":{"M":[],"q":[],"e":[]},"ho":{"k":["ac"],"r":["ac"],"n":["ac"],"A":["ac"],"p":["ac"],"h":["ac"],"r.E":"ac","k.E":"ac"},"hp":{"k":["av"],"r":["av"],"n":["av"],"A":["av"],"e":[],"p":["av"],"h":["av"],"r.E":"av","k.E":"av"},"hr":{"k":["aF"],"r":["aF"],"n":["aF"],"A":["aF"],"p":["aF"],"h":["aF"],"r.E":"aF","k.E":"aF"},"bc":{"l":[]},"dh":{"M":[],"q":[],"e":[]},"hz":{"e":[]},"di":{"kS":[],"e":[]},"dk":{"q":[],"e":[]},"hJ":{"k":["G"],"r":["G"],"n":["G"],"A":["G"],"p":["G"],"h":["G"],"r.E":"G","k.E":"G"},"ep":{"bb":["O"]},"hX":{"k":["az?"],"r":["az?"],"n":["az?"],"A":["az?"],"p":["az?"],"h":["az?"],"r.E":"az?","k.E":"az?"},"ew":{"k":["q"],"r":["q"],"n":["q"],"A":["q"],"p":["q"],"h":["q"],"r.E":"q","k.E":"q"},"ij":{"k":["aE"],"r":["aE"],"n":["aE"],"A":["aE"],"p":["aE"],"h":["aE"],"r.E":"aE","k.E":"aE"},"ir":{"k":["ah"],"r":["ah"],"n":["ah"],"A":["ah"],"p":["ah"],"h":["ah"],"r.E":"ah","k.E":"ah"},"hH":{"x":["o","o"],"Q":["o","o"]},"hR":{"x":["o","o"],"Q":["o","o"],"x.K":"o","x.V":"o"},"eq":{"cu":["1"]},"bX":{"eq":["1"],"cu":["1"]},"er":{"br":["1"]},"e8":{"aX":[]},"eC":{"aX":[]},"it":{"aX":[]},"is":{"aX":[]},"cf":{"U":["1"]},"hL":{"kS":[],"e":[]},"ig":{"q5":[]},"eQ":{"pO":[]},"i_":{"nA":[]},"fC":{"k":["aM"],"r":["aM"],"n":["aM"],"p":["aM"],"h":["aM"],"r.E":"aM","k.E":"aM"},"fX":{"k":["aP"],"r":["aP"],"n":["aP"],"p":["aP"],"h":["aP"],"r.E":"aP","k.E":"aP"},"dc":{"m":[],"M":[],"q":[],"e":[]},"hk":{"k":["o"],"r":["o"],"n":["o"],"p":["o"],"h":["o"],"r.E":"o","k.E":"o"},"m":{"M":[],"q":[],"e":[]},"hs":{"k":["aR"],"r":["aR"],"n":["aR"],"p":["aR"],"h":["aR"],"r.E":"aR","k.E":"aR"},"dH":{"F":[],"e":[]},"c6":{"e":[]},"F":{"e":[]},"f5":{"x":["o","@"],"Q":["o","@"],"x.K":"o","x.V":"@"},"bf":{"F":[],"e":[]},"f6":{"e":[]},"dI":{"e":[]},"cZ":{"F":[],"e":[]},"fY":{"e":[]},"lt":{"h":["1"],"h.E":"1"},"cE":{"U":["1"]},"cL":{"dS":[]},"b7":{"ap":[]},"bR":{"ap":[]},"bS":{"ap":[]},"cT":{"ap":[]},"bP":{"ap":[]},"h7":{"ap":[]},"ec":{"ap":[]},"h8":{"ap":[]},"bE":{"ap":[]},"Y":{"f":[]},"cp":{"Y":["i"],"f":[],"Y.T":"i"},"d2":{"Y":["i"],"f":[],"Y.T":"i"},"bT":{"dS":[]},"fF":{"dS":[]},"fS":{"a6":[]},"eb":{"a6":[]},"aO":{"a6":[]},"dd":{"a6":[]},"fD":{"a6":[]},"ek":{"a6":[]},"dG":{"a6":[]},"dL":{"a6":[]},"f7":{"a6":[]},"hw":{"a6":[]},"ea":{"a6":[]},"h4":{"a6":[]},"bo":{"af":["bo"]},"hd":{"q_":[]},"hA":{"aJ":["j"]},"aI":{"aJ":["1"]},"d7":{"aJ":["1"]},"fU":{"aJ":["j"]},"fb":{"aJ":["j"]},"f1":{"aJ":["j"]},"fh":{"aJ":["j"]},"dA":{"aJ":["j"]},"d6":{"aJ":["j"]},"iC":{"cx":[]},"mr":{"n":["L"],"p":["L"],"h":["L"],"aG":[]}}'))
A.qu(v.typeUniverse,JSON.parse('{"p":1,"d4":1,"dV":1,"e0":1,"e2":2,"eB":1,"ev":1,"eS":1}'))
var u={h:"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",q:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",p:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",l:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",z:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\n\nout vec4 outColor;\n\nvoid main() {\n    vec2 tex_position = gl_FragCoord.xy / vec2(100, 40);\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n    float source_strength = u_source_strength + sin(u_time * 2.0);\n    float dist = distance(gl_FragCoord.xy, (u_source_position + vec2(0.5, 0.5))) / 2.0;\n    if (dist > source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, source_strength, dist);\n    outColor = vec4(u_source_color.rgb, scale);\n}\n",A:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // back textures is already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 front = texture(u_light_texture, tex_position);\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  // front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.aw
return{gS:s("@<~>"),mm:s("f2"),A:s("aI<j>"),bB:s("a_"),lE:s("ao"),u:s("dF"),bD:s("b4"),az:s("cQ"),hp:s("c7"),lo:s("ne"),r:s("c8"),nK:s("cS"),n6:s("af<v?>"),d5:s("G"),cs:s("cd"),mX:s("cW"),dA:s("b8"),jW:s("bK"),L:s("ag"),ox:s("mn"),gt:s("p<@>"),h:s("M"),v:s("a2"),aW:s("fn"),b:s("ce"),fz:s("K"),R:s("l"),fq:s("H"),et:s("ay"),C:s("mr"),U:s("cg"),g7:s("ar<@>"),m:s("aa<i,f>"),eT:s("a3<cm>"),f5:s("a3<cv>"),eN:s("a3<ai>"),nr:s("a3<bT>"),ba:s("a3<df>"),de:s("a3<L>"),oQ:s("a3<aL?>"),hQ:s("d_"),h8:s("ab"),lZ:s("aL"),hl:s("h<q>"),e7:s("h<@>"),c7:s("t<cL>"),if:s("t<cO>"),G:s("t<X>"),a:s("t<ap>"),V:s("t<b5>"),fy:s("t<bF>"),Q:s("t<fg>"),X:s("t<aW>"),pl:s("t<mn>"),c:s("t<a2>"),w:s("t<a6>"),iw:s("t<ar<~>>"),ow:s("t<dS>"),ge:s("t<ab>"),Y:s("t<cj>"),I:s("t<aL>"),lB:s("t<bi>"),do:s("t<n<j>>"),lN:s("t<aX>"),hf:s("t<v>"),f:s("t<h_>"),q:s("t<j>"),ff:s("t<h6>"),fk:s("t<db>"),fF:s("t<hg>"),s:s("t<o>"),oe:s("t<el>"),o:s("t<y>"),B:s("t<aS>"),D:s("t<cx>"),bu:s("t<b_>"),n:s("t<L>"),dG:s("t<@>"),t:s("t<i>"),g2:s("t<O>"),f7:s("t<~()>"),ev:s("t<~(ag)>"),T:s("dY"),dY:s("bj"),dX:s("A<@>"),g:s("bk"),kT:s("aM"),k:s("n<cL>"),mw:s("n<a2>"),i8:s("n<j>"),bd:s("n<L>"),oH:s("e1"),gM:s("cm"),cM:s("Q<j,a2>"),ea:s("Q<o,@>"),av:s("Q<@,@>"),gQ:s("co<o,o>"),gX:s("d2"),e:s("cp"),li:s("a1"),ib:s("aB"),ee:s("bn"),E:s("as"),F:s("q"),hU:s("aX"),P:s("V"),ai:s("aP"),K:s("v"),gm:s("d7<j>"),p6:s("bo"),ni:s("h1"),d8:s("aC"),j:s("j"),o5:s("nA"),kB:s("at"),mx:s("bb<O>"),cH:s("da"),nZ:s("dc"),fm:s("au"),cA:s("aD"),hH:s("aE"),hd:s("a4"),l:s("aZ"),N:s("o"),gL:s("o(o)"),lv:s("ah"),bC:s("m"),fD:s("de"),dt:s("cv"),dy:s("ai"),dQ:s("av"),gJ:s("ac"),lJ:s("bs"),W:s("bT"),ns:s("df"),iK:s("hq"),ki:s("aF"),hk:s("aR"),fH:s("el"),ha:s("nN"),bE:s("bU"),jv:s("aG"),cx:s("cw"),eL:s("dh"),kL:s("a8<a_>"),b1:s("a8<ao>"),eo:s("a8<a1>"),au:s("a8<at>"),c1:s("cx"),kg:s("kS"),l7:s("hB"),oJ:s("aT<b4>"),fB:s("aT<bs>"),ou:s("aT<~>"),nD:s("dk"),aN:s("hG"),n4:s("b_"),e0:s("aj"),bz:s("bX<l>"),eX:s("bX<as>"),og:s("I<b4>"),aa:s("I<bs>"),p:s("I<@>"),hy:s("I<i>"),cU:s("I<~>"),dl:s("cC"),d1:s("il<v?>"),iF:s("dp<~>"),im:s("iw"),o3:s("iB"),k4:s("z"),ei:s("z(a_)"),g9:s("z(ao)"),eU:s("z(a1)"),iW:s("z(v)"),hZ:s("z(at)"),i:s("L"),z:s("@"),mY:s("@()"),y:s("@(v)"),ng:s("@(v,aZ)"),p1:s("@(@,@)"),S:s("i"),eK:s("0&*"),_:s("v*"),iB:s("e?"),gK:s("ar<V>?"),ef:s("az?"),O:s("aL?"),iD:s("v?"),d:s("cB<@,@>?"),nF:s("i2?"),du:s("@(l)?"),ld:s("i(b_,b_)?"),Z:s("~()?"),p0:s("~(b4)?"),lW:s("~(bK)?"),oV:s("~(l)?"),jV:s("~(bk)?"),b9:s("~(as)?"),cZ:s("O"),H:s("~"),M:s("~()"),gz:s("~([~])"),x:s("~(ag)"),nt:s("~(a6)"),i6:s("~(v)"),fQ:s("~(v,aZ)"),bm:s("~(o,o)"),J:s("~(o,@)"),my:s("~(hq)"),hv:s("~(O)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.bq=A.cM.prototype
B.az=A.dH.prototype
B.bL=A.c6.prototype
B.bM=A.f4.prototype
B.aA=A.c7.prototype
B.C=A.c8.prototype
B.bY=A.cS.prototype
B.l=A.cV.prototype
B.dw=A.fl.prototype
B.dA=A.cZ.prototype
B.dB=A.dT.prototype
B.dC=A.dU.prototype
B.dJ=J.a.prototype
B.a=J.t.prototype
B.dL=J.dW.prototype
B.d=J.dX.prototype
B.c=J.d0.prototype
B.w=J.bN.prototype
B.dM=J.bj.prototype
B.b7=A.e4.prototype
B.ek=A.d5.prototype
B.a0=A.e6.prototype
B.bb=J.h0.prototype
B.e=A.da.prototype
B.bc=A.ej.prototype
B.au=J.cw.prototype
B.bi=A.di.prototype
B.bd=new A.ai(5,"table")
B.bj=new A.dA(B.bd)
B.av=new A.dB(2,"rounds")
B.Q=new A.fb()
B.ar=new A.ai(11,"column")
B.b9=new A.d6(B.ar)
B.bw=new A.aI(B.Q,B.b9,t.A)
B.N=new A.ai(0,"door")
B.b8=new A.d6(B.N)
B.br=new A.aI(B.bw,B.b8,t.A)
B.bV=new A.fU()
B.bs=new A.aI(B.br,B.bV,t.A)
B.a4=new A.f1()
B.bu=new A.aI(B.a4,B.b9,t.A)
B.bv=new A.aI(B.bu,B.b8,t.A)
B.bD=new A.a_("",0,0,0,99)
B.a3=new A.b5(0,"surface")
B.z=new A.b5(1,"caves")
B.y=new A.b5(2,"deepCaves")
B.P=new A.b5(3,"facility")
B.A=new A.b5(4,"ruins")
B.bN=new A.b5(5,"village")
B.bO=new A.b5(6,"snow")
B.a5=new A.fh()
B.aB=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bP=function() {
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
B.bU=function(getTagFallback) {
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
B.bQ=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bR=function(hooks) {
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
B.bT=function(hooks) {
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
B.bS=function(hooks) {
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
B.aC=function(hooks) { return hooks; }

B.aD=new A.kc()
B.bW=new A.fZ()
B.B=new A.kt()
B.u=new A.i_()
B.j=new A.id()
B.bX=new A.iq()
B.a6=new A.fe(2,"ignoreAgentsAndUnlockedDoors")
B.a7=new A.fe(3,"normal")
B.c2=new A.f(1660944383)
B.c3=new A.f(3707764736)
B.aE=new A.f(4278190080)
B.d3=new A.f(4294278144)
B.aH=new A.bJ(5,"d20")
B.ab=new A.aW(0,"se")
B.ac=new A.aW(1,"ne")
B.ad=new A.aW(2,"sw")
B.ae=new A.aW(3,"nw")
B.m=new A.aW(4,"n")
B.n=new A.aW(5,"e")
B.o=new A.aW(6,"s")
B.p=new A.aW(7,"w")
B.dx=new A.ag(0)
B.dy=new A.ag(25e4)
B.dz=new A.ag(8000)
B.E=new A.ce(0,"primaryMelee")
B.q=new A.ce(1,"primaryRanged")
B.F=new A.ce(2,"armor")
B.aI=new A.ab(0,"north")
B.aJ=new A.ab(1,"east")
B.dD=new A.ab(18,"autoexplore")
B.dE=new A.ab(19,"reload")
B.aK=new A.ab(2,"south")
B.aL=new A.ab(3,"west")
B.dF=new A.ab(5,"fire")
B.dG=new A.ab(7,"look")
B.dH=new A.ab(8,"reset")
B.dI=new A.ab(9,"activate")
B.af=new A.a0(0,"none")
B.ag=new A.a0(1,"stairsUp")
B.S=new A.a0(10,"tree")
B.T=new A.a0(11,"bookshelf")
B.G=new A.a0(12,"mechanism")
B.U=new A.a0(13,"activatedMechanism")
B.V=new A.a0(14,"chest")
B.W=new A.a0(15,"stalagmite")
B.X=new A.a0(16,"column")
B.H=new A.a0(2,"stairsDown")
B.v=new A.a0(3,"door")
B.I=new A.a0(4,"openDoor")
B.J=new A.a0(5,"lockedDoor")
B.K=new A.a0(6,"grass")
B.L=new A.a0(7,"torch")
B.Y=new A.a0(8,"table")
B.Z=new A.a0(9,"chair")
B.aM=new A.bi(0,"melee")
B.aN=new A.bi(1,"ranged")
B.aO=new A.bi(2,"armor")
B.aP=new A.bi(3,"other")
B.dK=new A.bi(5,"corpse")
B.aQ=new A.bi(6,"ammo")
B.dN=new A.jV(1,"water")
B.aw=new A.cO(0,"light")
B.ax=new A.cO(1,"heavy")
B.ay=new A.cO(2,"powered")
B.eY=A.c(s([B.aw,B.ax,B.ay]),t.if)
B.bx=new A.ao(1)
B.by=new A.ao(1)
B.bz=new A.ao(1)
B.bA=new A.ao(1)
B.eW=A.c(s([B.ay]),t.if)
B.bB=new A.ao(2)
B.f_=A.c(s([B.aw,B.ax]),t.if)
B.bC=new A.ao(2)
B.dO=A.c(s([B.bx,B.by,B.bz,B.bA,B.bB,B.bC]),A.aw("t<ao>"))
B.aR=A.c(s([1,2,4,8]),t.t)
B.dP=A.c(s([24,36]),t.n)
B.dQ=A.c(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
B.er=new A.bO(0,"north")
B.es=new A.bO(1,"south")
B.et=new A.bO(2,"east")
B.eu=new A.bO(3,"west")
B.ev=new A.bO(4,"center")
B.aS=A.c(s([B.er,B.es,B.et,B.eu,B.ev]),A.aw("t<bO>"))
B.aT=A.c(s([B.m,B.o]),t.X)
B.aU=A.c(s([B.n,B.p]),t.X)
B.ah=A.c(s([B.ab,B.ac,B.ad,B.ae,B.m,B.n,B.o,B.p]),t.X)
B.x=A.c(s([-1,3,-1,-1,3,-1]),t.n)
B.dU=A.c(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
B.a_=A.c(s([]),t.Q)
B.dW=A.c(s([]),t.X)
B.h=A.c(s([]),t.w)
B.dV=A.c(s([]),A.aw("t<V>"))
B.aX=A.c(s([]),t.s)
B.bJ=new A.a_("Second Skin",1,1,2,5)
B.bK=new A.a_("Estex Suit I",1,0,1,5)
B.bG=new A.a_("Flight Suit",1,0,1,6)
B.bH=new A.a_("Freebooter Armor I",2,2,3,4)
B.bE=new A.a_("Kasatha microcord I",2,1,3,3)
B.bF=new A.a_("Ceremonial Plate",1,1,3,2)
B.bI=new A.a_("Golemforged Plating",1,2,5,0)
B.dX=A.c(s([B.bJ,B.bK,B.bG,B.bH,B.bE,B.bF,B.bI]),A.aw("t<a_>"))
B.eU=new A.fv(0,"oneHand")
B.a9=new A.bI(5,"bludgeoning")
B.eP=new A.cc(0,"none")
B.eI=new A.bH()
B.R=new A.bJ(2,"d6")
B.bf=new A.aS(0,"archaic")
B.O=new A.aS(2,"analog")
B.e0=A.c(s([B.bf,B.O]),t.B)
B.eb=new A.a1(B.a9,1,B.R,0,"Club",B.e0)
B.aa=new A.bJ(1,"d4")
B.eD=new A.aS(3,"operative")
B.aV=A.c(s([B.O,B.eD]),t.B)
B.e9=new A.a1(B.a9,1,B.aa,1,"Tactical Baton",B.aV)
B.dt=new A.bI(7,"slashing")
B.ef=new A.a1(B.dt,1,B.aa,1,"Survival Knife",B.aV)
B.eV=new A.fv(1,"twoHand")
B.aF=new A.bI(6,"piercing")
B.bg=new A.aS(4,"block")
B.dS=A.c(s([B.O,B.bg]),t.B)
B.ee=new A.a1(B.aF,1,B.R,1,"Tactical Spear",B.dS)
B.a8=new A.bI(3,"fire")
B.eS=new A.cc(4,"burn")
B.eJ=new A.bH()
B.bh=new A.aS(5,"powered")
B.aW=A.c(s([B.bh]),t.B)
B.eO=new A.k0()
B.ea=new A.a1(B.a8,2,B.aa,7,"Flame Sword",B.aW)
B.eR=new A.cc(11,"wound")
B.eK=new A.bH()
B.aG=new A.bJ(3,"d8")
B.ec=new A.a1(B.a8,2,B.aG,9,"Plasma Sword",B.aW)
B.ds=new A.bI(2,"electricity")
B.eQ=new A.cc(1,"arc")
B.eL=new A.bH()
B.dv=new A.bJ(4,"d12")
B.eE=new A.aS(6,"stun")
B.dR=A.c(s([B.eE,B.bh]),t.B)
B.eg=new A.a1(B.ds,1,B.dv,8,"Shock Staff",B.dR)
B.dY=A.c(s([B.eb,B.e9,B.ef,B.ee,B.ea,B.ec,B.eg]),A.aw("t<a1>"))
B.dr=new A.bI(1,"cold")
B.eT=new A.cc(9,"staggered")
B.eM=new A.bH()
B.bm=new A.dB(1,"charge")
B.bo=new A.dC(B.bm,20)
B.en=new A.at("Zero pistol",B.dr,B.R,5,B.bo,60)
B.eZ=A.c(s([B.O]),t.B)
B.bp=new A.dC(B.av,9)
B.M=new A.at("Tac Pistol",B.aF,B.R,1,B.bp,30)
B.du=new A.bJ(0,"d3")
B.eN=new A.bH()
B.eF=new A.aS(7,"line")
B.eG=new A.aS(8,"unwieldy")
B.eX=A.c(s([B.eF,B.eG]),t.B)
B.bl=new A.dB(0,"petro")
B.bn=new A.dC(B.bl,20)
B.eo=new A.at("Flame Rifle",B.a8,B.aG,2,B.bn,25)
B.dZ=A.c(s([B.en,B.M,B.eo]),A.aw("t<at>"))
B.bZ=new A.c9(0,"north")
B.c_=new A.c9(1,"south")
B.c0=new A.c9(2,"east")
B.c1=new A.c9(3,"west")
B.e_=A.c(s([B.bZ,B.c_,B.c0,B.c1]),A.aw("t<c9>"))
B.aY=A.c(s(["bind","if","ref","repeat","syntax"]),t.s)
B.ai=A.c(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
B.aZ=new A.cm(0,"lockedDoor")
B.e1=new A.cm(3,"doorMechanism")
B.b_=new A.cm(4,"none")
B.d7=new A.f(4294638330)
B.d5=new A.f(4294309365)
B.cZ=new A.f(4293848814)
B.cT=new A.f(4292927712)
B.cR=new A.f(4292269782)
B.cM=new A.f(4290624957)
B.cE=new A.f(4288585374)
B.cx=new A.f(4285887861)
B.cs=new A.f(4284572001)
B.cj=new A.f(4282532418)
B.cf=new A.f(4281348144)
B.cb=new A.f(4280361249)
B.aj=new A.aa([50,B.d7,100,B.d5,200,B.cZ,300,B.cT,350,B.cR,400,B.cM,500,B.cE,600,B.cx,700,B.cs,800,B.cj,850,B.cf,900,B.cb],t.m)
B.cX=new A.f(4293457385)
B.cO=new A.f(4291356361)
B.cG=new A.f(4289058471)
B.cA=new A.f(4286695300)
B.cu=new A.f(4284922730)
B.cn=new A.f(4283215696)
B.cl=new A.f(4282622023)
B.ch=new A.f(4281896508)
B.ce=new A.f(4281236786)
B.c9=new A.f(4279983648)
B.b0=new A.aa([50,B.cX,100,B.cO,200,B.cG,300,B.cA,400,B.cu,500,B.cn,600,B.cl,700,B.ch,800,B.ce,900,B.c9],t.m)
B.dn=new A.f(4294966759)
B.dm=new A.f(4294965700)
B.dl=new A.f(4294964637)
B.dk=new A.f(4294963574)
B.dj=new A.f(4294962776)
B.dh=new A.f(4294961979)
B.d9=new A.f(4294826037)
B.d8=new A.f(4294688813)
B.d6=new A.f(4294551589)
B.d4=new A.f(4294278935)
B.b1=new A.aa([50,B.dn,100,B.dm,200,B.dl,300,B.dk,400,B.dj,500,B.dh,600,B.d9,700,B.d8,800,B.d6,900,B.d4],t.m)
B.d1=new A.f(4293913577)
B.cS=new A.f(4292332744)
B.cL=new A.f(4290554532)
B.cF=new A.f(4288776319)
B.cB=new A.f(4287458915)
B.cz=new A.f(4286141768)
B.cw=new A.f(4285353025)
B.cq=new A.f(4284301367)
B.co=new A.f(4283315246)
B.ci=new A.f(4282263331)
B.b2=new A.aa([50,B.d1,100,B.cS,200,B.cL,300,B.cF,400,B.cB,500,B.cz,600,B.cw,700,B.cq,800,B.co,900,B.ci],t.m)
B.cU=new A.f(4293128957)
B.cK=new A.f(4290502395)
B.cD=new A.f(4287679225)
B.ct=new A.f(4284790262)
B.ck=new A.f(4282557941)
B.cc=new A.f(4280391411)
B.ca=new A.f(4280191205)
B.c8=new A.f(4279858898)
B.c7=new A.f(4279592384)
B.c6=new A.f(4279060385)
B.b3=new A.aa([50,B.cU,100,B.cK,200,B.cD,300,B.ct,400,B.ck,500,B.cc,600,B.ca,700,B.c8,800,B.c7,900,B.c6],t.m)
B.cY=new A.f(4293718001)
B.cP=new A.f(4291811548)
B.cH=new A.f(4289773253)
B.cC=new A.f(4287669422)
B.cy=new A.f(4286091420)
B.cr=new A.f(4284513675)
B.cp=new A.f(4283723386)
B.cm=new A.f(4282735204)
B.cg=new A.f(4281812815)
B.cd=new A.f(4280693304)
B.b4=new A.aa([50,B.cY,100,B.cP,200,B.cH,300,B.cC,400,B.cy,500,B.cr,600,B.cp,700,B.cm,800,B.cg,900,B.cd],t.m)
B.f0=new A.dK(0,{},B.aX,A.aw("dK<o,@>"))
B.de=new A.f(4294955392)
B.dc=new A.f(4294945600)
B.db=new A.f(4294938880)
B.da=new A.f(4294929664)
B.e4=new A.aa([100,B.de,200,B.dc,400,B.db,700,B.da],t.m)
B.ak=new A.aa([B.F,null,B.E,null,B.q,null],A.aw("aa<ce,aL?>"))
B.cJ=new A.f(4290377418)
B.cv=new A.f(4285132974)
B.c5=new A.f(4278249078)
B.c4=new A.f(4278241363)
B.e3=new A.aa([100,B.cJ,200,B.cv,400,B.c5,700,B.c4],t.m)
B.e6=new A.d2(B.e3,4285132974)
B.dq=new A.f(4294967181)
B.dp=new A.f(4294967040)
B.dg=new A.f(4294961664)
B.df=new A.f(4294956544)
B.e5=new A.aa([100,B.dq,200,B.dp,400,B.dg,700,B.df],t.m)
B.e7=new A.d2(B.e5,4294967040)
B.b5=new A.cp(B.b1,4294961979)
B.di=new A.f(4294962158)
B.dd=new A.f(4294954450)
B.d0=new A.f(4293892762)
B.cW=new A.f(4293227379)
B.d_=new A.f(4293874512)
B.d2=new A.f(4294198070)
B.cV=new A.f(4293212469)
B.cQ=new A.f(4292030255)
B.cN=new A.f(4291176488)
B.cI=new A.f(4290190364)
B.e2=new A.aa([50,B.di,100,B.dd,200,B.d0,300,B.cW,400,B.d_,500,B.d2,600,B.cV,700,B.cQ,800,B.cN,900,B.cI],t.m)
B.al=new A.cp(B.e2,4294198070)
B.e8=new A.cp(B.b3,4280391411)
B.eC=new A.aS(1,"nonlethal")
B.dT=A.c(s([B.bf,B.eC,B.O]),t.B)
B.ed=new A.a1(B.a9,1,B.du,0,"Fists",B.dT)
B.b6=new A.d3(0,"wildBoar")
B.eh=new A.d3(1,"zyborgMelee")
B.ei=new A.d3(2,"zyborgRanged")
B.ej=new A.d3(3,"caveScanner")
B.el=new A.d7(B.a4,t.gm)
B.at=new A.ai(7,"bookshelf")
B.bk=new A.dA(B.at)
B.bt=new A.aI(B.a4,B.bk,t.A)
B.em=new A.d7(B.bt,t.gm)
B.ba=new A.h_(2,"elementalAffinity")
B.D=new A.j(0,0)
B.am=new A.ee(0,"small")
B.ep=new A.ee(1,"medium")
B.eq=new A.ee(2,"large")
B.an=new A.eg(0,"melee")
B.ao=new A.eg(1,"ranged")
B.ap=new A.eg(2,"armor")
B.aq=new A.cv(0,"dirt")
B.a1=new A.cv(2,"metal")
B.ew=new A.cv(4,"snow")
B.ex=new A.ai(10,"stalagmite")
B.a2=new A.ai(2,"light")
B.r=new A.ai(3,"none")
B.ey=new A.ai(4,"chair")
B.as=new A.ai(6,"chest")
B.ez=new A.ai(8,"mechanism")
B.eA=new A.ai(9,"tree")
B.i=new A.df(0,"floor")
B.b=new A.df(1,"wall")
B.eB=A.rW("v")
B.t=new A.dg(0,"float_1")
B.f=new A.dg(1,"float_2")
B.be=new A.dg(3,"float_4")
B.k=new A.dg(4,"texture_1")
B.eH=new A.dn(null,2)})();(function staticFields(){$.lg=null
$.nc=null
$.nb=null
$.oi=null
$.oe=null
$.op=null
$.lH=null
$.lO=null
$.mP=null
$.ds=null
$.eT=null
$.eU=null
$.mK=!1
$.E=B.j
$.aH=A.c([],t.hf)
$.bL=null
$.mo=null
$.ni=null
$.nh=null
$.es=A.a7(t.N,t.U)
$.nl=0
$.n9=null
$.qK=A.bl(["ArrowUp",B.aI,"ArrowDown",B.aK,"ArrowRight",B.aJ,"ArrowLeft",B.aL,"q",B.dF," ",B.dI,"0",B.dD,"l",B.dG,"w",B.aI,"a",B.aL,"s",B.aK,"d",B.aJ,"Escape",B.dH,"r",B.dE],t.N,t.h8)
$.cF=A.mD("engine")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"t9","ov",()=>A.rx("_$dart_dartClosure"))
s($,"tz","oF",()=>A.bt(A.kL({
toString:function(){return"$receiver$"}})))
s($,"tA","oG",()=>A.bt(A.kL({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"tB","oH",()=>A.bt(A.kL(null)))
s($,"tC","oI",()=>A.bt(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"tF","oL",()=>A.bt(A.kL(void 0)))
s($,"tG","oM",()=>A.bt(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"tE","oK",()=>A.bt(A.nO(null)))
s($,"tD","oJ",()=>A.bt(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"tI","oO",()=>A.bt(A.nO(void 0)))
s($,"tH","oN",()=>A.bt(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"tL","mV",()=>A.q7())
s($,"tX","mi",()=>A.lR(B.eB))
s($,"t7","ou",()=>({}))
s($,"tM","oP",()=>A.ns(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N))
s($,"td","mT",()=>B.w.br(A.mm(),"Opera",0))
s($,"tc","oy",()=>!A.N($.mT())&&B.w.br(A.mm(),"Trident/",0))
s($,"tb","ox",()=>B.w.br(A.mm(),"Firefox",0))
s($,"ta","ow",()=>"-"+$.oz()+"-")
s($,"te","oz",()=>{if(A.N($.ox()))var r="moz"
else if($.oy())r="ms"
else r=A.N($.mT())?"o":"webkit"
return r})
s($,"tp","oE",()=>A.c([$.p6(),$.p7(),$.p8(),$.oS(),$.p4()],A.aw("t<bn>")))
s($,"up","p6",()=>A.fL(A.f0(4,6,8,4,4,8),new A.m9(),A.c([B.a3],t.V),"death_1.mp3",new A.ma(),B.b6,0,4,"Wild Boar",new A.mb()))
s($,"un","p4",()=>A.fL(A.f0(4,6,8,4,4,10),new A.m3(),A.c([B.bO],t.V),"death_1.mp3",new A.m4(),B.b6,2,4,"Snow Bear",new A.m5()))
s($,"uq","p7",()=>A.fL(A.f0(4,8,8,4,4,10),new A.mc(),A.c([B.z,B.y,B.P,B.A],t.V),"monster_scream_1.mp3",new A.md(),B.eh,1,6,"Zyborg",new A.me()))
s($,"ur","p8",()=>A.fL(A.f0(4,8,10,4,4,10),new A.mf(),A.c([B.z,B.y,B.P,B.A],t.V),"monster_scream_1.mp3",new A.mg(),B.ei,2,6,"Zyborg Ranged",new A.mh()))
s($,"u0","oS",()=>A.fL(A.f0(4,6,12,6,4,6),new A.lD(),A.c([B.z,B.y,B.P,B.A],t.V),null,new A.lE(),B.ej,3,6,"Cave Scanner",new A.lF()))
s($,"u3","mW",()=>{var r=A.c([A.bV(B.f,"u_resolution"),A.bV(B.t,"u_time"),A.bV(B.f,"u_offset"),A.bV(B.f,"u_origin")],t.o)
return A.aK(A.c([A.n8(35044,A.nv(B.x),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\nuniform vec2 u_origin;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  float dist = distance(snapped_position, (u_origin + vec2(0.5, 0.5)) * vec2(24.0, 36.0)) / 50.0;\n  float rand = -1.0 + random(relative_position) / 2.0;\n  float scale_rate = 0.8 * (u_time);\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(249.0 / 255.0, 168.0 / 255.0, 37.0 / 255.0, scale);\n}\n",r,u.h)})
s($,"u8","oX",()=>{var r=A.c([A.bV(B.f,"u_resolution"),A.bV(B.t,"u_time"),A.bV(B.f,"u_offset"),A.bV(B.f,"u_source"),A.bV(B.f,"u_target")],t.o)
return A.aK(A.c([A.n8(35044,A.nv(B.x),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nuniform vec2 u_source;\nuniform vec2 u_target;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 p0 = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  vec2 p1 = (u_source + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n  vec2 p2 = (u_target + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n\n  if ((p1.x != p2.x) && (p0.x < p1.x && p0.x < p2.x) || (p0.x > p1.x && p0.x > p2.x)) {\n    discard;\n    return;\n  }\n  if ((p1.y != p2.y) && (p0.y < p1.y && p0.y < p2.y) || (p0.y > p1.y && p0.y > p2.y)) {\n    discard;\n    return;\n  }\n\n  float dist = abs( (p2.x - p1.x) * (p1.y - p0.y) - (p1.x - p0.x) * (p2.y - p1.y) ) / sqrt( pow(p2.x - p1.x, 2.0) + pow(p2.y - p1.y, 2.0) );\n  float rand = random(relative_position);\n  float scale_rate = 1.5;\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = 1.0 - smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(0.1, 0.2, 1.0, 0.8 * scale - u_time);\n}\n",r,u.h)})
s($,"tt","eY",()=>new A.kg())
s($,"tf","oA",()=>A.h5())
s($,"tl","mU",()=>A.mz(A.bG(4278780675),A.bG(4279308561),A.bG(4280361249)))
s($,"tm","oB",()=>A.mz(A.bG(4279898637),A.bG(4281017118),A.bG(4282858034)))
s($,"to","oD",()=>A.mz(A.bG(4279765786),A.bG(4280096038),A.bG(4282463311)))
s($,"tn","oC",()=>$.mU())
s($,"tY","eZ",()=>A.h5())
s($,"u_","oR",()=>A.h5())
s($,"uk","n0",()=>A.bu(B.Q,new A.m0(),!0))
s($,"ud","mZ",()=>A.bu(B.bj,new A.lU(),!0))
s($,"uh","dy",()=>A.bu(A.n6(B.a5,A.nx(B.a2),t.j),new A.lY(),!0))
s($,"uc","mY",()=>A.bu(A.n6(B.Q,A.nx(B.a2),t.j),new A.lT(),!0))
s($,"ue","p_",()=>A.bu(B.Q,new A.lV(),!0))
s($,"ui","n_",()=>A.bu(B.a5,new A.lZ(),!0))
s($,"uj","p1",()=>A.bu(B.el,new A.m_(),!1))
s($,"uf","iR",()=>A.bu(B.bs,new A.lX(),!0))
s($,"ug","p0",()=>A.bu(B.bv,new A.lW(),!0))
s($,"ub","oZ",()=>A.bu(B.em,new A.lS(),!0))
s($,"ua","mj",()=>{var r=$.n0(),q=$.mZ()
return A.c([r,q,q,$.dy(),$.iR()],t.D)})
s($,"u9","oY",()=>{var r=$.oZ()
return A.c([r,r,r,r,r,$.dy(),$.n0(),$.mZ(),$.iR()],t.D)})
s($,"u7","oW",()=>{var r=$.dy(),q=$.iR()
return A.c([r,r,r,q,q,q],t.D)})
s($,"u5","oU",()=>{var r,q=$.dy(),p=$.mY()
p=A.c([q,q,q,p,p,p,p,p,p],t.D)
for(r=0;r<500;++r)p.push($.p1())
return p})
s($,"u6","oV",()=>{var r,q=$.dy(),p=$.mY()
p=A.c([q,q,q,p,p,p],t.D)
for(r=0;r<10;++r)p.push($.iR())
for(r=0;r<10;++r)p.push($.p0())
return p})
s($,"uo","p5",()=>A.c([$.p_(),$.dy()],t.D))
s($,"tZ","oQ",()=>A.pN(A.cG(A.c([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t))))
s($,"u2","oT",()=>{var r=A.h5(),q=A.h5(),p=$.eZ(),o=t.t,n=A.aw("t<bn>")
o=new A.jm(new A.j4(q,new A.jH(r)),A.c([A.ba(B.a3,1,A.bz(p,60)),A.ba(B.z,2,A.bz(p,40)),A.ba(B.z,3,A.bz(p,40)),A.ba(B.z,4,A.bz(p,40)),A.ba(B.y,5,A.bz(p,20)),A.ba(B.y,6,A.bz(p,20)),A.ba(B.y,7,A.bz(p,20)),A.ba(B.A,8,A.bz(p,10)),A.ba(B.A,9,A.bz(p,10)),A.ba(B.A,10,A.bz(p,10)),A.ba(B.P,11,!1)],A.aw("t<fH>")),A.c([2,4,4,4,6,6,6,10,10,10,12],o),A.c([A.b1(p,10,25),A.b1(p,115,125),A.b1(p,115,125),A.b1(p,115,125),A.b1(p,125,135),A.b1(p,125,135),A.b1(p,125,135),A.b1(p,135,145),A.b1(p,135,145),A.b1(p,135,145),A.b1(p,170,200)],o),A.c([A.c([],n),A.c([],n),A.c([],n),A.c([],n),A.c([],n),A.c([],n),A.c([],n),A.c([],n),A.c([],n),A.c([],n),A.c([],n)],A.aw("t<n<bn>>")),A.c([0,0,0,0,0,0,0,0,0,0,0],o),A.a7(t.ee,A.aw("ca")))
o.e4()
o.e2()
return o})
s($,"u4","mX",()=>t.cH.a(B.C.bQ(t.r.a(A.rt().querySelector("#glCanvas")),"webgl2")))
s($,"um","p3",()=>new A.fn())
s($,"ul","p2",()=>{var r=t.i
return new A.h1(A.ny(0,r),A.ny(0,r))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.fM,DataView:A.cs,ArrayBufferView:A.cs,Float64Array:A.cr,Float32Array:A.e4,Int16Array:A.fN,Int32Array:A.fO,Int8Array:A.fP,Uint16Array:A.fQ,Uint32Array:A.fR,Uint8ClampedArray:A.d5,CanvasPixelArray:A.d5,Uint8Array:A.e6,HTMLBRElement:A.u,HTMLButtonElement:A.u,HTMLContentElement:A.u,HTMLDListElement:A.u,HTMLDataElement:A.u,HTMLDataListElement:A.u,HTMLDetailsElement:A.u,HTMLDialogElement:A.u,HTMLEmbedElement:A.u,HTMLFieldSetElement:A.u,HTMLHRElement:A.u,HTMLHeadElement:A.u,HTMLHeadingElement:A.u,HTMLHtmlElement:A.u,HTMLIFrameElement:A.u,HTMLInputElement:A.u,HTMLLIElement:A.u,HTMLLabelElement:A.u,HTMLLegendElement:A.u,HTMLLinkElement:A.u,HTMLMapElement:A.u,HTMLMenuElement:A.u,HTMLMetaElement:A.u,HTMLMeterElement:A.u,HTMLModElement:A.u,HTMLOListElement:A.u,HTMLObjectElement:A.u,HTMLOptGroupElement:A.u,HTMLOptionElement:A.u,HTMLOutputElement:A.u,HTMLParagraphElement:A.u,HTMLParamElement:A.u,HTMLPictureElement:A.u,HTMLPreElement:A.u,HTMLProgressElement:A.u,HTMLQuoteElement:A.u,HTMLScriptElement:A.u,HTMLShadowElement:A.u,HTMLSlotElement:A.u,HTMLSourceElement:A.u,HTMLSpanElement:A.u,HTMLStyleElement:A.u,HTMLTableCaptionElement:A.u,HTMLTableCellElement:A.u,HTMLTableDataCellElement:A.u,HTMLTableHeaderCellElement:A.u,HTMLTableColElement:A.u,HTMLTextAreaElement:A.u,HTMLTimeElement:A.u,HTMLTitleElement:A.u,HTMLTrackElement:A.u,HTMLUListElement:A.u,HTMLUnknownElement:A.u,HTMLDirectoryElement:A.u,HTMLFontElement:A.u,HTMLFrameElement:A.u,HTMLFrameSetElement:A.u,HTMLMarqueeElement:A.u,HTMLElement:A.u,AccessibleNodeList:A.iU,HTMLAnchorElement:A.cM,HTMLAreaElement:A.f3,HTMLBaseElement:A.cQ,Blob:A.f8,HTMLBodyElement:A.c7,HTMLCanvasElement:A.c8,CanvasRenderingContext2D:A.cS,CDATASection:A.b6,CharacterData:A.b6,Comment:A.b6,ProcessingInstruction:A.b6,Text:A.b6,CSSPerspective:A.jf,CSSCharsetRule:A.G,CSSConditionRule:A.G,CSSFontFaceRule:A.G,CSSGroupingRule:A.G,CSSImportRule:A.G,CSSKeyframeRule:A.G,MozCSSKeyframeRule:A.G,WebKitCSSKeyframeRule:A.G,CSSKeyframesRule:A.G,MozCSSKeyframesRule:A.G,WebKitCSSKeyframesRule:A.G,CSSMediaRule:A.G,CSSNamespaceRule:A.G,CSSPageRule:A.G,CSSRule:A.G,CSSStyleRule:A.G,CSSSupportsRule:A.G,CSSViewportRule:A.G,CSSStyleDeclaration:A.cV,MSStyleCSSProperties:A.cV,CSS2Properties:A.cV,CSSImageValue:A.aV,CSSKeywordValue:A.aV,CSSNumericValue:A.aV,CSSPositionValue:A.aV,CSSResourceValue:A.aV,CSSUnitValue:A.aV,CSSURLImageValue:A.aV,CSSStyleValue:A.aV,CSSMatrixComponent:A.bh,CSSRotation:A.bh,CSSScale:A.bh,CSSSkew:A.bh,CSSTranslation:A.bh,CSSTransformComponent:A.bh,CSSTransformValue:A.jh,CSSUnparsedValue:A.ji,DataTransferItemList:A.jj,HTMLDivElement:A.cW,XMLDocument:A.b8,Document:A.b8,DOMException:A.bK,DOMImplementation:A.fl,ClientRectList:A.dM,DOMRectList:A.dM,DOMRectReadOnly:A.dN,DOMStringList:A.fm,DOMTokenList:A.jk,Element:A.M,AbortPaymentEvent:A.l,AnimationEvent:A.l,AnimationPlaybackEvent:A.l,ApplicationCacheErrorEvent:A.l,BackgroundFetchClickEvent:A.l,BackgroundFetchEvent:A.l,BackgroundFetchFailEvent:A.l,BackgroundFetchedEvent:A.l,BeforeInstallPromptEvent:A.l,BeforeUnloadEvent:A.l,BlobEvent:A.l,CanMakePaymentEvent:A.l,ClipboardEvent:A.l,CloseEvent:A.l,CustomEvent:A.l,DeviceMotionEvent:A.l,DeviceOrientationEvent:A.l,ErrorEvent:A.l,ExtendableEvent:A.l,ExtendableMessageEvent:A.l,FetchEvent:A.l,FontFaceSetLoadEvent:A.l,ForeignFetchEvent:A.l,GamepadEvent:A.l,HashChangeEvent:A.l,InstallEvent:A.l,MediaEncryptedEvent:A.l,MediaKeyMessageEvent:A.l,MediaQueryListEvent:A.l,MediaStreamEvent:A.l,MediaStreamTrackEvent:A.l,MessageEvent:A.l,MIDIConnectionEvent:A.l,MIDIMessageEvent:A.l,MutationEvent:A.l,NotificationEvent:A.l,PageTransitionEvent:A.l,PaymentRequestEvent:A.l,PaymentRequestUpdateEvent:A.l,PopStateEvent:A.l,PresentationConnectionAvailableEvent:A.l,PresentationConnectionCloseEvent:A.l,ProgressEvent:A.l,PromiseRejectionEvent:A.l,PushEvent:A.l,RTCDataChannelEvent:A.l,RTCDTMFToneChangeEvent:A.l,RTCPeerConnectionIceEvent:A.l,RTCTrackEvent:A.l,SecurityPolicyViolationEvent:A.l,SensorErrorEvent:A.l,SpeechRecognitionError:A.l,SpeechRecognitionEvent:A.l,SpeechSynthesisEvent:A.l,StorageEvent:A.l,SyncEvent:A.l,TrackEvent:A.l,TransitionEvent:A.l,WebKitTransitionEvent:A.l,VRDeviceEvent:A.l,VRDisplayEvent:A.l,VRSessionEvent:A.l,MojoInterfaceRequestEvent:A.l,ResourceProgressEvent:A.l,USBConnectionEvent:A.l,IDBVersionChangeEvent:A.l,AudioProcessingEvent:A.l,OfflineAudioCompletionEvent:A.l,WebGLContextEvent:A.l,Event:A.l,InputEvent:A.l,SubmitEvent:A.l,AbsoluteOrientationSensor:A.e,Accelerometer:A.e,AccessibleNode:A.e,AmbientLightSensor:A.e,Animation:A.e,ApplicationCache:A.e,DOMApplicationCache:A.e,OfflineResourceList:A.e,BackgroundFetchRegistration:A.e,BatteryManager:A.e,BroadcastChannel:A.e,CanvasCaptureMediaStreamTrack:A.e,DedicatedWorkerGlobalScope:A.e,EventSource:A.e,FileReader:A.e,FontFaceSet:A.e,Gyroscope:A.e,LinearAccelerationSensor:A.e,Magnetometer:A.e,MediaDevices:A.e,MediaKeySession:A.e,MediaQueryList:A.e,MediaRecorder:A.e,MediaSource:A.e,MediaStream:A.e,MediaStreamTrack:A.e,MessagePort:A.e,MIDIAccess:A.e,MIDIInput:A.e,MIDIOutput:A.e,MIDIPort:A.e,NetworkInformation:A.e,Notification:A.e,OffscreenCanvas:A.e,OrientationSensor:A.e,PaymentRequest:A.e,Performance:A.e,PermissionStatus:A.e,PresentationAvailability:A.e,PresentationConnection:A.e,PresentationConnectionList:A.e,PresentationRequest:A.e,RelativeOrientationSensor:A.e,RemotePlayback:A.e,RTCDataChannel:A.e,DataChannel:A.e,RTCDTMFSender:A.e,RTCPeerConnection:A.e,webkitRTCPeerConnection:A.e,mozRTCPeerConnection:A.e,ScreenOrientation:A.e,Sensor:A.e,ServiceWorker:A.e,ServiceWorkerContainer:A.e,ServiceWorkerGlobalScope:A.e,ServiceWorkerRegistration:A.e,SharedWorker:A.e,SharedWorkerGlobalScope:A.e,SpeechRecognition:A.e,SpeechSynthesis:A.e,SpeechSynthesisUtterance:A.e,VR:A.e,VRDevice:A.e,VRDisplay:A.e,VRSession:A.e,VisualViewport:A.e,WebSocket:A.e,Worker:A.e,WorkerGlobalScope:A.e,WorkerPerformance:A.e,BluetoothDevice:A.e,BluetoothRemoteGATTCharacteristic:A.e,Clipboard:A.e,MojoInterfaceInterceptor:A.e,USB:A.e,IDBDatabase:A.e,IDBOpenDBRequest:A.e,IDBVersionChangeRequest:A.e,IDBRequest:A.e,IDBTransaction:A.e,EventTarget:A.e,File:A.ay,FileList:A.fp,FileWriter:A.fq,HTMLFormElement:A.fs,Gamepad:A.az,History:A.jG,HTMLCollection:A.ch,HTMLFormControlsCollection:A.ch,HTMLOptionsCollection:A.ch,HTMLDocument:A.dT,XMLHttpRequest:A.dU,XMLHttpRequestUpload:A.ci,XMLHttpRequestEventTarget:A.ci,HTMLImageElement:A.d_,KeyboardEvent:A.bk,Location:A.e1,HTMLAudioElement:A.cq,HTMLMediaElement:A.cq,MediaList:A.k_,MIDIInputMap:A.fI,MIDIOutputMap:A.fJ,MimeType:A.aB,MimeTypeArray:A.fK,MouseEvent:A.as,DragEvent:A.as,PointerEvent:A.as,WheelEvent:A.as,DocumentFragment:A.q,ShadowRoot:A.q,DocumentType:A.q,Node:A.q,NodeList:A.e7,RadioNodeList:A.e7,Plugin:A.aC,PluginArray:A.h2,RTCStatsReport:A.h9,HTMLSelectElement:A.hb,SourceBuffer:A.au,SourceBufferList:A.he,SpeechGrammar:A.aD,SpeechGrammarList:A.hf,SpeechRecognitionResult:A.aE,Storage:A.hi,CSSStyleSheet:A.ah,StyleSheet:A.ah,HTMLTableElement:A.ej,HTMLTableRowElement:A.hl,HTMLTableSectionElement:A.hm,HTMLTemplateElement:A.de,TextTrack:A.av,TextTrackCue:A.ac,VTTCue:A.ac,TextTrackCueList:A.ho,TextTrackList:A.hp,TimeRanges:A.kI,Touch:A.aF,TouchList:A.hr,TrackDefaultList:A.kJ,CompositionEvent:A.bc,FocusEvent:A.bc,TextEvent:A.bc,TouchEvent:A.bc,UIEvent:A.bc,URL:A.kM,HTMLVideoElement:A.dh,VideoTrackList:A.hz,Window:A.di,DOMWindow:A.di,Attr:A.dk,CSSRuleList:A.hJ,ClientRect:A.ep,DOMRect:A.ep,GamepadList:A.hX,NamedNodeMap:A.ew,MozNamedAttrMap:A.ew,SpeechRecognitionResultList:A.ij,StyleSheetList:A.ir,SVGLength:A.aM,SVGLengthList:A.fC,SVGNumber:A.aP,SVGNumberList:A.fX,SVGPointList:A.ki,SVGScriptElement:A.dc,SVGStringList:A.hk,SVGAElement:A.m,SVGAnimateElement:A.m,SVGAnimateMotionElement:A.m,SVGAnimateTransformElement:A.m,SVGAnimationElement:A.m,SVGCircleElement:A.m,SVGClipPathElement:A.m,SVGDefsElement:A.m,SVGDescElement:A.m,SVGDiscardElement:A.m,SVGEllipseElement:A.m,SVGFEBlendElement:A.m,SVGFEColorMatrixElement:A.m,SVGFEComponentTransferElement:A.m,SVGFECompositeElement:A.m,SVGFEConvolveMatrixElement:A.m,SVGFEDiffuseLightingElement:A.m,SVGFEDisplacementMapElement:A.m,SVGFEDistantLightElement:A.m,SVGFEFloodElement:A.m,SVGFEFuncAElement:A.m,SVGFEFuncBElement:A.m,SVGFEFuncGElement:A.m,SVGFEFuncRElement:A.m,SVGFEGaussianBlurElement:A.m,SVGFEImageElement:A.m,SVGFEMergeElement:A.m,SVGFEMergeNodeElement:A.m,SVGFEMorphologyElement:A.m,SVGFEOffsetElement:A.m,SVGFEPointLightElement:A.m,SVGFESpecularLightingElement:A.m,SVGFESpotLightElement:A.m,SVGFETileElement:A.m,SVGFETurbulenceElement:A.m,SVGFilterElement:A.m,SVGForeignObjectElement:A.m,SVGGElement:A.m,SVGGeometryElement:A.m,SVGGraphicsElement:A.m,SVGImageElement:A.m,SVGLineElement:A.m,SVGLinearGradientElement:A.m,SVGMarkerElement:A.m,SVGMaskElement:A.m,SVGMetadataElement:A.m,SVGPathElement:A.m,SVGPatternElement:A.m,SVGPolygonElement:A.m,SVGPolylineElement:A.m,SVGRadialGradientElement:A.m,SVGRectElement:A.m,SVGSetElement:A.m,SVGStopElement:A.m,SVGStyleElement:A.m,SVGSVGElement:A.m,SVGSwitchElement:A.m,SVGSymbolElement:A.m,SVGTSpanElement:A.m,SVGTextContentElement:A.m,SVGTextElement:A.m,SVGTextPathElement:A.m,SVGTextPositioningElement:A.m,SVGTitleElement:A.m,SVGUseElement:A.m,SVGViewElement:A.m,SVGGradientElement:A.m,SVGComponentTransferFunctionElement:A.m,SVGFEDropShadowElement:A.m,SVGMPathElement:A.m,SVGElement:A.m,SVGTransform:A.aR,SVGTransformList:A.hs,AudioBuffer:A.b4,AudioBufferSourceNode:A.dH,AudioContext:A.c6,webkitAudioContext:A.c6,AnalyserNode:A.F,RealtimeAnalyserNode:A.F,AudioDestinationNode:A.F,AudioWorkletNode:A.F,BiquadFilterNode:A.F,ChannelMergerNode:A.F,AudioChannelMerger:A.F,ChannelSplitterNode:A.F,AudioChannelSplitter:A.F,ConvolverNode:A.F,DelayNode:A.F,DynamicsCompressorNode:A.F,IIRFilterNode:A.F,MediaElementAudioSourceNode:A.F,MediaStreamAudioDestinationNode:A.F,MediaStreamAudioSourceNode:A.F,PannerNode:A.F,AudioPannerNode:A.F,webkitAudioPannerNode:A.F,ScriptProcessorNode:A.F,JavaScriptAudioNode:A.F,StereoPannerNode:A.F,WaveShaperNode:A.F,AudioNode:A.F,AudioParam:A.f4,AudioParamMap:A.f5,ConstantSourceNode:A.bf,OscillatorNode:A.bf,Oscillator:A.bf,AudioScheduledSourceNode:A.bf,AudioTrackList:A.f6,BaseAudioContext:A.dI,GainNode:A.cZ,AudioGainNode:A.cZ,OfflineAudioContext:A.fY,WebGLBuffer:A.f9,WebGLFramebuffer:A.ft,WebGLProgram:A.h3,WebGL2RenderingContext:A.da,WebGLTexture:A.bs,WebGLUniformLocation:A.ht,WebGLVertexArrayObject:A.hy})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,AudioParam:true,AudioParamMap:true,ConstantSourceNode:true,OscillatorNode:true,Oscillator:true,AudioScheduledSourceNode:false,AudioTrackList:true,BaseAudioContext:false,GainNode:true,AudioGainNode:true,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true})
A.d4.$nativeSuperclassTag="ArrayBufferView"
A.ex.$nativeSuperclassTag="ArrayBufferView"
A.ey.$nativeSuperclassTag="ArrayBufferView"
A.cr.$nativeSuperclassTag="ArrayBufferView"
A.ez.$nativeSuperclassTag="ArrayBufferView"
A.eA.$nativeSuperclassTag="ArrayBufferView"
A.e5.$nativeSuperclassTag="ArrayBufferView"
A.eD.$nativeSuperclassTag="EventTarget"
A.eE.$nativeSuperclassTag="EventTarget"
A.eJ.$nativeSuperclassTag="EventTarget"
A.eK.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.mQ
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

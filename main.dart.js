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
a[c]=function(){a[c]=function(){A.rt(b)}
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
if(a[b]!==s)A.ru(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.my(b)
return new s(c,this)}:function(){if(s===null)s=A.my(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.my(a).prototype
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
a(hunkHelpers,v,w,$)}var A={me:function me(){},
n7(a){return new A.cf("Field '"+a+"' has been assigned during initialization.")},
n8(a){return new A.cf("Field '"+a+"' has not been initialized.")},
bL(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ml(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
pI(a,b,c){return A.ml(A.bL(A.bL(c,a),b))},
eR(a,b,c){return a},
nq(a,b,c,d){A.kc(b,"start")
if(c!=null){A.kc(c,"end")
if(b>c)A.T(A.cp(b,0,c,"start",null))}return new A.ed(a,b,c,d.i("ed<0>"))},
nc(a,b,c,d){if(t.gt.b(a))return new A.dJ(a,b,c.i("@<0>").B(d).i("dJ<1,2>"))
return new A.ch(a,b,c.i("@<0>").B(d).i("ch<1,2>"))},
n4(){return new A.bm("No element")},
n5(){return new A.bm("Too many elements")},
pi(){return new A.bm("Too few elements")},
pF(a,b,c){A.h5(a,0,J.al(a)-1,b,c)},
h5(a,b,c,d,e){if(c-b<=32)A.pE(a,b,c,d,e)
else A.pD(a,b,c,d,e)},
pE(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aw(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.U()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
pD(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.e.O(a5-a4+1,6),i=a4+j,h=a5-j,g=B.e.O(a4+a5,2),f=g-j,e=g+j,d=J.aw(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
if(J.W(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
A.h5(a3,a4,r-2,a6,a7)
A.h5(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.W(a6.$2(d.h(a3,r),b),0);)++r
for(;J.W(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}A.h5(a3,r,q,a6,a7)}else A.h5(a3,r,q,a6,a7)},
cf:function cf(a){this.a=a},
ki:function ki(){},
p:function p(){},
aL:function aL(){},
ed:function ed(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bk:function bk(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ch:function ch(a,b,c){this.a=a
this.b=b
this.$ti=c},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dY:function dY(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ci:function ci(a,b,c){this.a=a
this.b=b
this.$ti=c},
a5:function a5(a,b,c){this.a=a
this.b=b
this.$ti=c},
eh:function eh(a,b,c){this.a=a
this.b=b
this.$ti=c},
ap:function ap(){},
pf(a){if(typeof a=="number")return B.c.gt(a)
if(t.ha.b(a))return A.co(a)
return A.lE(a)},
pg(a){return new A.jr(a)},
o8(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
rh(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
z(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ds(a)
return s},
co(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
k8(a){return A.pt(a)},
pt(a){var s,r,q,p
if(a instanceof A.v)return A.ak(A.aS(a),null)
if(J.dp(a)===B.ds||t.cx.b(a)){s=B.ar(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.ak(A.aS(a),null)},
d1(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
pA(a){var s=A.d1(a).getUTCFullYear()+0
return s},
py(a){var s=A.d1(a).getUTCMonth()+1
return s},
pu(a){var s=A.d1(a).getUTCDate()+0
return s},
pv(a){var s=A.d1(a).getUTCHours()+0
return s},
px(a){var s=A.d1(a).getUTCMinutes()+0
return s},
pz(a){var s=A.d1(a).getUTCSeconds()+0
return s},
pw(a){var s=A.d1(a).getUTCMilliseconds()+0
return s},
cD(a){throw A.d(A.nW(a))},
b(a,b){if(a==null)J.al(a)
throw A.d(A.dn(a,b))},
dn(a,b){var s,r="index"
if(!A.mv(b))return new A.b_(!0,b,r,null)
s=A.I(J.al(a))
if(b<0||b>=s)return A.R(b,a,r,null,s)
return A.ni(b,r)},
nW(a){return new A.b_(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.fP()
s=new Error()
s.dartException=a
r=A.rv
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
rv(){return J.ds(this.dartException)},
T(a){throw A.d(a)},
C(a){throw A.d(A.bC(a))},
bp(a){var s,r,q,p,o,n
a=A.rp(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.kz(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
kA(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
nt(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mf(a,b){var s=b==null,r=s?null:b.method
return new A.fv(a,r,s?null:b.receiver)},
bc(a){if(a==null)return new A.k3(a)
if(a instanceof A.dL)return A.c_(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.c_(a,a.dartException)
return A.qQ(a)},
c_(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.cn(r,16)&8191)===10)switch(q){case 438:return A.c_(a,A.mf(A.z(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.z(s)+" (Error "+q+")"
return A.c_(a,new A.e3(p,e))}}if(a instanceof TypeError){o=$.ok()
n=$.ol()
m=$.om()
l=$.on()
k=$.oq()
j=$.or()
i=$.op()
$.oo()
h=$.ot()
g=$.os()
f=o.Z(s)
if(f!=null)return A.c_(a,A.mf(A.P(s),f))
else{f=n.Z(s)
if(f!=null){f.method="call"
return A.c_(a,A.mf(A.P(s),f))}else{f=m.Z(s)
if(f==null){f=l.Z(s)
if(f==null){f=k.Z(s)
if(f==null){f=j.Z(s)
if(f==null){f=i.Z(s)
if(f==null){f=l.Z(s)
if(f==null){f=h.Z(s)
if(f==null){f=g.Z(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.P(s)
return A.c_(a,new A.e3(s,f==null?e:f.method))}}}return A.c_(a,new A.ho(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ec()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.c_(a,new A.b_(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ec()
return a},
bx(a){var s
if(a instanceof A.dL)return a.b
if(a==null)return new A.eB(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.eB(a)},
lE(a){if(a==null||typeof a!="object")return J.cF(a)
else return A.co(a)},
nY(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
rf(a,b,c,d,e,f){t.r.a(a)
switch(A.I(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.mb("Unsupported number of arguments for wrapped closure"))},
bb(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.rf)
a.$identity=s
return s},
p3(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ha().constructor.prototype):Object.create(new A.cM(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.mX(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.p_(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.mX(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
p_(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.oY)}throw A.d("Error in functionType of tearoff")},
p0(a,b,c,d){var s=A.mV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
mX(a,b,c,d){var s,r
if(c)return A.p2(a,b,d)
s=b.length
r=A.p0(s,d,a,b)
return r},
p1(a,b,c,d){var s=A.mV,r=A.oZ
switch(b?-1:a){case 0:throw A.d(new A.h3("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
p2(a,b,c){var s,r,q,p=$.mT
p==null?$.mT=A.mS("interceptor"):p
s=$.mU
s==null?$.mU=A.mS("receiver"):s
r=b.length
q=A.p1(r,c,a,b)
return q},
my(a){return A.p3(a)},
oY(a,b){return A.lg(v.typeUniverse,A.aS(a.a),b)},
mV(a){return a.a},
oZ(a){return a.b},
mS(a){var s,r,q,p=new A.cM("receiver","interceptor"),o=J.n6(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.cI("Field name "+a+" not found.",null))},
N(a){if(a==null)A.qR("boolean expression must not be null")
return a},
qR(a){throw A.d(new A.hv(a))},
rt(a){throw A.d(new A.fc(a))},
r7(a){return v.getIsolateTag(a)},
tC(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
rk(a){var s,r,q,p,o,n=A.P($.nZ.$1(a)),m=$.lu[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lA[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.nJ($.nV.$2(a,n))
if(q!=null){m=$.lu[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lA[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.lD(s)
$.lu[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.lA[n]=s
return s}if(p==="-"){o=A.lD(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.o4(a,s)
if(p==="*")throw A.d(A.mm(n))
if(v.leafTags[n]===true){o=A.lD(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.o4(a,s)},
o4(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.mB(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lD(a){return J.mB(a,!1,null,!!a.$iy)},
rl(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.lD(s)
else return J.mB(s,c,null,null)},
rd(){if(!0===$.mA)return
$.mA=!0
A.re()},
re(){var s,r,q,p,o,n,m,l
$.lu=Object.create(null)
$.lA=Object.create(null)
A.rc()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.o5.$1(o)
if(n!=null){m=A.rl(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
rc(){var s,r,q,p,o,n,m=B.bD()
m=A.dm(B.bE,A.dm(B.bF,A.dm(B.as,A.dm(B.as,A.dm(B.bG,A.dm(B.bH,A.dm(B.bI(B.ar),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nZ=new A.lx(p)
$.nV=new A.ly(o)
$.o5=new A.lz(n)},
dm(a,b){return a(b)||b},
rs(a,b,c){var s=a.indexOf(b,c)
return s>=0},
rp(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cP:function cP(){},
dF:function dF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a9:function a9(a,b){this.a=a
this.$ti=b},
jr:function jr(a){this.a=a},
kz:function kz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e3:function e3(a,b){this.a=a
this.b=b},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
ho:function ho(a){this.a=a},
k3:function k3(a){this.a=a},
dL:function dL(a,b){this.a=a
this.b=b},
eB:function eB(a){this.a=a
this.b=null},
c5:function c5(){},
f7:function f7(){},
f8:function f8(){},
hg:function hg(){},
ha:function ha(){},
cM:function cM(a,b){this.a=a
this.b=b},
h3:function h3(a){this.a=a},
hv:function hv(a){this.a=a},
az:function az(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jE:function jE(a){this.a=a},
jD:function jD(a){this.a=a},
jG:function jG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dT:function dT(a,b){this.a=a
this.$ti=b},
dU:function dU(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lx:function lx(a){this.a=a},
ly:function ly(a){this.a=a},
lz:function lz(a){this.a=a},
ru(a){return A.T(A.n7(a))},
mn(a){var s=new A.kP(a)
return s.b=s},
bW(a,b){if(a===$)throw A.d(A.n8(b))
return a},
dj(a,b){if(a!==$)throw A.d(A.n7(b))},
kP:function kP(a){this.a=a
this.b=null},
nK(a,b,c){},
cB(a){return a},
nd(a){return new Float32Array(A.cB(a))},
jZ(a,b,c){A.nK(a,b,c)
return new Float32Array(a,b,c)},
ne(a,b,c){var s
A.nK(a,b,c)
s=new Uint8Array(a,b,c)
return s},
bt(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.dn(b,a))},
fG:function fG(){},
cm:function cm(){},
d_:function d_(){},
cl:function cl(){},
e_:function e_(){},
dZ:function dZ(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
d0:function d0(){},
e0:function e0(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
nk(a,b){var s=b.c
return s==null?b.c=A.ms(a,b.z,!0):s},
nj(a,b){var s=b.c
return s==null?b.c=A.eJ(a,"aq",[b.z]):s},
nl(a){var s=a.y
if(s===6||s===7||s===8)return A.nl(a.z)
return s===11||s===12},
pC(a){return a.cy},
af(a){return A.iw(v.typeUniverse,a,!1)},
bX(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.bX(a,s,a0,a1)
if(r===s)return b
return A.nF(a,r,!0)
case 7:s=b.z
r=A.bX(a,s,a0,a1)
if(r===s)return b
return A.ms(a,r,!0)
case 8:s=b.z
r=A.bX(a,s,a0,a1)
if(r===s)return b
return A.nE(a,r,!0)
case 9:q=b.Q
p=A.eQ(a,q,a0,a1)
if(p===q)return b
return A.eJ(a,b.z,p)
case 10:o=b.z
n=A.bX(a,o,a0,a1)
m=b.Q
l=A.eQ(a,m,a0,a1)
if(n===o&&l===m)return b
return A.mq(a,n,l)
case 11:k=b.z
j=A.bX(a,k,a0,a1)
i=b.Q
h=A.qN(a,i,a0,a1)
if(j===k&&h===i)return b
return A.nD(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.eQ(a,g,a0,a1)
o=b.z
n=A.bX(a,o,a0,a1)
if(f===g&&n===o)return b
return A.mr(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.iO("Attempted to substitute unexpected RTI kind "+c))}},
eQ(a,b,c,d){var s,r,q,p,o=b.length,n=A.li(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bX(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
qO(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.li(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bX(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
qN(a,b,c,d){var s,r=b.a,q=A.eQ(a,r,c,d),p=b.b,o=A.eQ(a,p,c,d),n=b.c,m=A.qO(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.hP()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
qZ(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.r8(s)
return a.$S()}return null},
o_(a,b){var s
if(A.nl(b))if(a instanceof A.c5){s=A.qZ(a)
if(s!=null)return s}return A.aS(a)},
aS(a){var s
if(a instanceof A.v){s=a.$ti
return s!=null?s:A.mt(a)}if(Array.isArray(a))return A.a1(a)
return A.mt(J.dp(a))},
a1(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
B(a){var s=a.$ti
return s!=null?s:A.mt(a)},
mt(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.qu(a,s)},
qu(a,b){var s=a instanceof A.c5?a.__proto__.__proto__.constructor:b,r=A.qb(v.typeUniverse,s.name)
b.$ccache=r
return r},
r8(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.iw(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
r1(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.eH(a)
q=A.iw(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.eH(q):p},
rw(a){return A.r1(A.iw(v.typeUniverse,a,!1))},
qt(a){var s,r,q,p,o=this
if(o===t.K)return A.di(o,a,A.qy)
if(!A.by(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.di(o,a,A.qB)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.mv
else if(r===t.i||r===t.cZ)q=A.qx
else if(r===t.N)q=A.qz
else q=r===t.k4?A.lm:null
if(q!=null)return A.di(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.ri)){o.r="$i"+p
if(p==="n")return A.di(o,a,A.qw)
return A.di(o,a,A.qA)}}else if(s===7)return A.di(o,a,A.qr)
return A.di(o,a,A.qp)},
di(a,b,c){a.b=c
return a.b(b)},
qs(a){var s,r=this,q=A.qo
if(!A.by(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.qf
else if(r===t.K)q=A.qe
else{s=A.eS(r)
if(s)q=A.qq}r.a=q
return r.a(a)},
ln(a){var s,r=a.y
if(!A.by(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&A.ln(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qp(a){var s=this
if(a==null)return A.ln(s)
return A.S(v.typeUniverse,A.o_(a,s),null,s,null)},
qr(a){if(a==null)return!0
return this.z.b(a)},
qA(a){var s,r=this
if(a==null)return A.ln(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dp(a)[s]},
qw(a){var s,r=this
if(a==null)return A.ln(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dp(a)[s]},
qo(a){var s,r=this
if(a==null){s=A.eS(r)
if(s)return a}else if(r.b(a))return a
A.nO(a,r)},
qq(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.nO(a,s)},
nO(a,b){throw A.d(A.nC(A.nv(a,A.o_(a,b),A.ak(b,null))))},
qY(a,b,c,d){var s=null
if(A.S(v.typeUniverse,a,s,b,s))return a
throw A.d(A.nC("The type argument '"+A.ak(a,s)+"' is not a subtype of the type variable bound '"+A.ak(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
nv(a,b,c){var s=A.fi(a),r=A.ak(b==null?A.aS(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
nC(a){return new A.eI("TypeError: "+a)},
aj(a,b){return new A.eI("TypeError: "+A.nv(a,null,b))},
qy(a){return a!=null},
qe(a){if(a!=null)return a
throw A.d(A.aj(a,"Object"))},
qB(a){return!0},
qf(a){return a},
lm(a){return!0===a||!1===a},
qd(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.aj(a,"bool"))},
to(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.aj(a,"bool"))},
tn(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.aj(a,"bool?"))},
nI(a){if(typeof a=="number")return a
throw A.d(A.aj(a,"double"))},
tq(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aj(a,"double"))},
tp(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aj(a,"double?"))},
mv(a){return typeof a=="number"&&Math.floor(a)===a},
I(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.aj(a,"int"))},
ts(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.aj(a,"int"))},
tr(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.aj(a,"int?"))},
qx(a){return typeof a=="number"},
aY(a){if(typeof a=="number")return a
throw A.d(A.aj(a,"num"))},
tu(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aj(a,"num"))},
tt(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aj(a,"num?"))},
qz(a){return typeof a=="string"},
P(a){if(typeof a=="string")return a
throw A.d(A.aj(a,"String"))},
tv(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.aj(a,"String"))},
nJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.aj(a,"String?"))},
qJ(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.ak(a[q],b)
return s},
nP(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
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
if(l===9){p=A.qP(a.z)
o=a.Q
return o.length>0?p+("<"+A.qJ(o,b)+">"):p}if(l===11)return A.nP(a,b,null)
if(l===12)return A.nP(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
qP(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
qc(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
qb(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.iw(a,b,!1)
else if(typeof m=="number"){s=m
r=A.eK(a,5,"#")
q=A.li(s)
for(p=0;p<s;++p)q[p]=r
o=A.eJ(a,b,q)
n[b]=o
return o}else return m},
q9(a,b){return A.nG(a.tR,b)},
q8(a,b){return A.nG(a.eT,b)},
iw(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.nz(A.nx(a,null,b,c))
r.set(b,s)
return s},
lg(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.nz(A.nx(a,b,c,!0))
q.set(c,r)
return r},
qa(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.mq(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bV(a,b){b.a=A.qs
b.b=A.qt
return b},
eK(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aW(null,null)
s.y=b
s.cy=c
r=A.bV(a,s)
a.eC.set(c,r)
return r},
nF(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.q6(a,b,r,c)
a.eC.set(r,s)
return s},
q6(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.by(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.aW(null,null)
q.y=6
q.z=b
q.cy=c
return A.bV(a,q)},
ms(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.q5(a,b,r,c)
a.eC.set(r,s)
return s},
q5(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.by(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.eS(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.eS(q.z))return q
else return A.nk(a,b)}}p=new A.aW(null,null)
p.y=7
p.z=b
p.cy=c
return A.bV(a,p)},
nE(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.q3(a,b,r,c)
a.eC.set(r,s)
return s},
q3(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.by(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.eJ(a,"aq",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.aW(null,null)
q.y=8
q.z=b
q.cy=c
return A.bV(a,q)},
q7(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aW(null,null)
s.y=13
s.z=b
s.cy=q
r=A.bV(a,s)
a.eC.set(q,r)
return r},
iv(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
q2(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
eJ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iv(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aW(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.bV(a,r)
a.eC.set(p,q)
return q},
mq(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.iv(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aW(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.bV(a,o)
a.eC.set(q,n)
return n},
nD(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iv(m)
if(j>0){s=l>0?",":""
r=A.iv(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.q2(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aW(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.bV(a,o)
a.eC.set(q,r)
return r},
mr(a,b,c,d){var s,r=b.cy+("<"+A.iv(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.q4(a,b,c,r,d)
a.eC.set(r,s)
return s},
q4(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.li(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.bX(a,b,r,0)
m=A.eQ(a,c,r,0)
return A.mr(a,n,m,c!==m)}}l=new A.aW(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.bV(a,l)},
nx(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nz(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.pX(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.ny(a,r,h,g,!1)
else if(q===46)r=A.ny(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.bT(a.u,a.e,g.pop()))
break
case 94:g.push(A.q7(a.u,g.pop()))
break
case 35:g.push(A.eK(a.u,5,"#"))
break
case 64:g.push(A.eK(a.u,2,"@"))
break
case 126:g.push(A.eK(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.mp(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.eJ(p,n,o))
else{m=A.bT(p,a.e,n)
switch(m.y){case 11:g.push(A.mr(p,m,o,a.n))
break
default:g.push(A.mq(p,m,o))
break}}break
case 38:A.pY(a,g)
break
case 42:p=a.u
g.push(A.nF(p,A.bT(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.ms(p,A.bT(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.nE(p,A.bT(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.hP()
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
A.mp(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.nD(p,A.bT(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.mp(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.q_(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.bT(a.u,a.e,i)},
pX(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ny(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.qc(s,o.z)[p]
if(n==null)A.T('No "'+p+'" in "'+A.pC(o)+'"')
d.push(A.lg(s,o,n))}else d.push(p)
return m},
pY(a,b){var s=b.pop()
if(0===s){b.push(A.eK(a.u,1,"0&"))
return}if(1===s){b.push(A.eK(a.u,4,"1&"))
return}throw A.d(A.iO("Unexpected extended operation "+A.z(s)))},
bT(a,b,c){if(typeof c=="string")return A.eJ(a,c,a.sEA)
else if(typeof c=="number")return A.pZ(a,b,c)
else return c},
mp(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bT(a,b,c[s])},
q_(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bT(a,b,c[s])},
pZ(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.d(A.iO("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.d(A.iO("Bad index "+c+" for "+b.l(0)))},
S(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.by(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.by(b))return!1
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
if(p===6){s=A.nk(a,d)
return A.S(a,b,c,s,e)}if(r===8){if(!A.S(a,b.z,c,d,e))return!1
return A.S(a,A.nj(a,b),c,d,e)}if(r===7){s=A.S(a,t.P,c,d,e)
return s&&A.S(a,b.z,c,d,e)}if(p===8){if(A.S(a,b,c,d.z,e))return!0
return A.S(a,b,c,A.nj(a,d),e)}if(p===7){s=A.S(a,b,c,t.P,e)
return s||A.S(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.r)return!0
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
if(!A.S(a,k,c,j,e)||!A.S(a,j,e,k,c))return!1}return A.nQ(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.nQ(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.qv(a,b,c,d,e)}return!1},
nQ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
qv(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.lg(a,b,r[o])
return A.nH(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.nH(a,n,null,c,m,e)},
nH(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.S(a,r,d,q,f))return!1}return!0},
eS(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.by(a))if(r!==7)if(!(r===6&&A.eS(a.z)))s=r===8&&A.eS(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ri(a){var s
if(!A.by(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
by(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.iD},
nG(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
li(a){return a>0?new Array(a):v.typeUniverse.sEA},
aW:function aW(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
hP:function hP(){this.c=this.b=this.a=null},
eH:function eH(a){this.a=a},
hL:function hL(){},
eI:function eI(a){this.a=a},
pO(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.qS()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bb(new A.kM(q),1)).observe(s,{childList:true})
return new A.kL(q,s,r)}else if(self.setImmediate!=null)return A.qT()
return A.qU()},
pP(a){self.scheduleImmediate(A.bb(new A.kN(t.M.a(a)),0))},
pQ(a){self.setImmediate(A.bb(new A.kO(t.M.a(a)),0))},
pR(a){t.M.a(a)
A.q0(0,a)},
nr(a,b){var s=B.e.O(a.a,1000)
return A.q1(s<0?0:s,b)},
q0(a,b){var s=new A.eG(!0)
s.dA(a,b)
return s},
q1(a,b){var s=new A.eG(!1)
s.dB(a,b)
return s},
bv(a){return new A.hw(new A.H($.E,a.i("H<0>")),a.i("hw<0>"))},
bs(a,b){a.$2(0,null)
b.b=!0
return b.a},
a6(a,b){A.qg(a,b)},
br(a,b){b.a2(0,a)},
bq(a,b){b.bn(A.bc(a),A.bx(a))},
qg(a,b){var s,r,q=new A.lk(b),p=new A.ll(b)
if(a instanceof A.H)a.cp(q,p,t.z)
else{s=t.z
if(t.U.b(a))a.aR(q,p,s)
else{r=new A.H($.E,t.f)
r.a=8
r.c=a
r.cp(q,p,s)}}},
bw(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.E.bC(new A.lp(s),t.H,t.S,t.z)},
iP(a,b){var s=A.eR(a,"error",t.K)
return new A.dz(s,b==null?A.m6(a):b)},
m6(a){var s
if(t.fz.b(a)){s=a.gaB()
if(s!=null)return s}return B.bL},
pd(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=null,e=!1,d=b.i("H<n<0>>"),c=new A.H($.E,d)
g.a=null
g.b=0
s=A.mn("error")
r=A.mn("stackTrace")
q=new A.jp(g,f,e,c,s,r)
try{for(l=a.length,k=t.P,j=0,i=0;j<a.length;a.length===l||(0,A.C)(a),++j){p=a[j]
o=i
p.aR(new A.jo(g,o,c,f,e,s,r,b),q,k)
i=++g.b}if(i===0){l=c
l.ar(A.c([],b.i("u<0>")))
return l}g.a=A.b6(i,null,!1,b.i("0?"))}catch(h){n=A.bc(h)
m=A.bx(h)
if(g.b===0||A.N(e)){l=n
r=m
A.eR(l,"error",t.K)
$.E!==B.j
if(r==null)r=A.m6(l)
d=new A.H($.E,d)
d.b1(l,r)
return d}else{s.b=n
r.b=m}}return c},
kV(a,b){var s,r,q
for(s=t.f;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aH()
b.b3(a)
A.dg(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.cj(q)}},
dg(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.U;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.iH(l.a,l.b)}return}p.a=a0
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
A.iH(i.a,i.b)
return}f=$.E
if(f!==g)$.E=g
else f=null
b=b.c
if((b&15)===8)new A.l2(p,c,m).$0()
else if(n){if((b&1)!==0)new A.l1(p,i).$0()}else if((b&2)!==0)new A.l0(c,p).$0()
if(f!=null)$.E=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("aq<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.aI(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.kV(b,e)
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
qH(a,b){var s
if(t.ng.b(a))return b.bC(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.mQ(a,"onError",u.c))},
qE(){var s,r
for(s=$.dk;s!=null;s=$.dk){$.eP=null
r=s.b
$.dk=r
if(r==null)$.eO=null
s.a.$0()}},
qM(){$.mu=!0
try{A.qE()}finally{$.eP=null
$.mu=!1
if($.dk!=null)$.mF().$1(A.nX())}},
nT(a){var s=new A.hx(a),r=$.eO
if(r==null){$.dk=$.eO=s
if(!$.mu)$.mF().$1(A.nX())}else $.eO=r.b=s},
qK(a){var s,r,q,p=$.dk
if(p==null){A.nT(a)
$.eP=$.eO
return}s=new A.hx(a)
r=$.eP
if(r==null){s.b=p
$.dk=$.eP=s}else{q=r.b
s.b=q
$.eP=r.b=s
if(q==null)$.eO=s}},
o6(a){var s=null,r=$.E
if(B.j===r){A.dl(s,s,B.j,a)
return}A.dl(s,s,r,t.M.a(r.cw(a)))},
t7(a,b){A.eR(a,"stream",t.K)
return new A.ie(b.i("ie<0>"))},
no(a){return new A.dd(null,null,null,a.i("dd<0>"))},
mx(a){return},
pS(a,b){if(b==null)b=A.qW()
if(t.fQ.b(b))return a.bC(b,t.z,t.K,t.l)
if(t.i6.b(b))return t.y.a(b)
throw A.d(A.cI("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
qG(a,b){A.iH(a,b)},
qF(){},
pJ(a,b){var s=$.E
if(s===B.j)return A.nr(a,t.my.a(b))
return A.nr(a,t.my.a(s.cz(b,t.iK)))},
iH(a,b){A.qK(new A.lo(a,b))},
nR(a,b,c,d,e){var s,r=$.E
if(r===c)return d.$0()
$.E=c
s=r
try{r=d.$0()
return r}finally{$.E=s}},
nS(a,b,c,d,e,f,g){var s,r=$.E
if(r===c)return d.$1(e)
$.E=c
s=r
try{r=d.$1(e)
return r}finally{$.E=s}},
qI(a,b,c,d,e,f,g,h,i){var s,r=$.E
if(r===c)return d.$2(e,f)
$.E=c
s=r
try{r=d.$2(e,f)
return r}finally{$.E=s}},
dl(a,b,c,d){t.M.a(d)
if(B.j!==c)d=c.cw(d)
A.nT(d)},
kM:function kM(a){this.a=a},
kL:function kL(a,b,c){this.a=a
this.b=b
this.c=c},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
eG:function eG(a){this.a=a
this.b=null
this.c=0},
lf:function lf(a,b){this.a=a
this.b=b},
le:function le(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hw:function hw(a,b){this.a=a
this.b=!1
this.$ti=b},
lk:function lk(a){this.a=a},
ll:function ll(a){this.a=a},
lp:function lp(a){this.a=a},
dz:function dz(a,b){this.a=a
this.b=b},
jp:function jp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jo:function jo(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
ek:function ek(){},
aR:function aR(a,b){this.a=a
this.$ti=b},
dh:function dh(a,b){this.a=a
this.$ti=b},
cw:function cw(a,b,c,d,e){var _=this
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
kS:function kS(a,b){this.a=a
this.b=b},
l_:function l_(a,b){this.a=a
this.b=b},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a,b,c){this.a=a
this.b=b
this.c=c},
kU:function kU(a,b){this.a=a
this.b=b},
kZ:function kZ(a,b){this.a=a
this.b=b},
kT:function kT(a,b,c){this.a=a
this.b=b
this.c=c},
l2:function l2(a,b,c){this.a=a
this.b=b
this.c=c},
l3:function l3(a){this.a=a},
l1:function l1(a,b){this.a=a
this.b=b},
l0:function l0(a,b){this.a=a
this.b=b},
hx:function hx(a){this.a=a
this.b=null},
cq:function cq(){},
kq:function kq(a,b){this.a=a
this.b=b},
kr:function kr(a,b){this.a=a
this.b=b},
bn:function bn(){},
eC:function eC(){},
lc:function lc(a){this.a=a},
hy:function hy(){},
dd:function dd(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
bR:function bR(a,b){this.a=a
this.$ti=b},
df:function df(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
ej:function ej(){},
eD:function eD(){},
hF:function hF(){},
ct:function ct(a,b){this.b=a
this.a=null
this.$ti=b},
bU:function bU(){},
l7:function l7(a,b){this.a=a
this.b=b},
ba:function ba(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
ie:function ie(a){this.$ti=a},
eM:function eM(){},
lo:function lo(a,b){this.a=a
this.b=b},
i6:function i6(){},
l8:function l8(a,b){this.a=a
this.b=b},
l9:function l9(a,b,c){this.a=a
this.b=b
this.c=c},
mg(a,b,c,d){if(b==null){if(a==null)return new A.az(c.i("@<0>").B(d).i("az<1,2>"))}else if(a==null)a=A.r0()
return A.pW(A.r_(),a,b,c,d)},
bj(a,b,c){return b.i("@<0>").B(c).i("jF<1,2>").a(A.nY(a,new A.az(b.i("@<0>").B(c).i("az<1,2>"))))},
ab(a,b){return new A.az(a.i("@<0>").B(b).i("az<1,2>"))},
pW(a,b,c,d,e){var s=c!=null?c:new A.l5(d)
return new A.ep(a,b,s,d.i("@<0>").B(e).i("ep<1,2>"))},
jI(a){return new A.cy(a.i("cy<0>"))},
jJ(a){return new A.cy(a.i("cy<0>"))},
mo(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ql(a,b){return J.W(a,b)},
qm(a){return J.cF(a)},
n3(a,b,c){var s,r
if(A.mw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.k($.aG,a)
try{A.qC(a,s)}finally{if(0>=$.aG.length)return A.b($.aG,-1)
$.aG.pop()}r=A.np(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
md(a,b,c){var s,r
if(A.mw(a))return b+"..."+c
s=new A.hc(b)
B.a.k($.aG,a)
try{r=s
r.a=A.np(r.a,a,", ")}finally{if(0>=$.aG.length)return A.b($.aG,-1)
$.aG.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mw(a){var s,r
for(s=$.aG.length,r=0;r<s;++r)if(a===$.aG[r])return!0
return!1},
qC(a,b){var s,r,q,p,o,n,m,l=a.gw(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.z(l.gp(l))
B.a.k(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gp(l);++j
if(!l.n()){if(j<=4){B.a.k(b,A.z(p))
return}r=A.z(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp(l);++j
for(;l.n();p=o,o=n){n=l.gp(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.z(p)
r=A.z(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
pn(a,b,c){var s=A.mg(null,null,b,c)
a.C(0,new A.jH(s,b,c))
return s},
n9(a,b,c){var s=A.mg(null,null,b,c)
s.G(0,a)
return s},
na(a,b){var s,r,q=A.jI(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.C)(a),++r)q.k(0,b.a(a[r]))
return q},
mi(a){var s,r={}
if(A.mw(a))return"{...}"
s=new A.hc("")
try{B.a.k($.aG,a)
s.a+="{"
r.a=!0
J.oR(a,new A.jL(r,s))
s.a+="}"}finally{if(0>=$.aG.length)return A.b($.aG,-1)
$.aG.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
l6:function l6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ep:function ep(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
l5:function l5(a){this.a=a},
cy:function cy(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hW:function hW(a){this.a=a
this.b=null},
eq:function eq(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jH:function jH(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(){},
i:function i(){},
dX:function dX(){},
jL:function jL(a,b){this.a=a
this.b=b},
w:function w(){},
jN:function jN(a){this.a=a},
ea:function ea(){},
ex:function ex(){},
er:function er(){},
eN:function eN(){},
pc(a){if(a instanceof A.c5)return a.l(0)
return"Instance of '"+A.k8(a)+"'"},
b6(a,b,c,d){var s,r=J.pj(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
pp(a,b){var s,r,q=A.c([],b.i("u<0>"))
for(s=a.length,r=0;r<s;++r)B.a.k(q,b.a(a[r]))
return q},
nb(a,b,c){var s=A.po(a,c)
return s},
po(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("u<0>"))
s=A.c([],b.i("u<0>"))
for(r=J.aH(a);r.n();)B.a.k(s,r.gp(r))
return s},
mh(a,b,c){var s,r=J.pk(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
np(a,b,c){var s=J.aH(b)
if(!s.n())return a
if(c.length===0){do a+=A.z(s.gp(s))
while(s.n())}else{a+=A.z(s.gp(s))
for(;s.n();)a=a+c+A.z(s.gp(s))}return a},
p5(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
p6(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
fd(a){if(a>=10)return""+a
return"0"+a},
jd(a){return new A.a8(1000*a)},
fi(a){if(typeof a=="number"||A.lm(a)||a==null)return J.ds(a)
if(typeof a=="string")return JSON.stringify(a)
return A.pc(a)},
iO(a){return new A.dy(a)},
cI(a,b){return new A.b_(!1,null,b,a)},
mQ(a,b,c){return new A.b_(!0,a,b,c)},
pB(a){var s=null
return new A.d2(s,s,!1,s,s,a)},
ni(a,b){return new A.d2(null,null,!0,a,b,"Value not in range")},
cp(a,b,c,d,e){return new A.d2(b,c,!0,a,d,"Invalid value")},
mk(a,b,c){if(0>a||a>c)throw A.d(A.cp(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.cp(b,a,c,"end",null))
return b}return c},
kc(a,b){if(a<0)throw A.d(A.cp(a,0,null,b,null))
return a},
R(a,b,c,d,e){var s=A.I(e==null?J.al(b):e)
return new A.fr(s,!0,a,c,"Index out of range")},
D(a){return new A.hq(a)},
mm(a){return new A.hn(a)},
ac(a){return new A.bm(a)},
bC(a){return new A.f9(a)},
mb(a){return new A.hM(a)},
k4(a,b,c,d){var s,r
if(B.C===c)return A.pI(B.c.gt(a),B.c.gt(b),$.m3())
if(B.C===d){s=B.c.gt(a)
b=B.c.gt(b)
c=J.cF(c)
return A.ml(A.bL(A.bL(A.bL($.m3(),s),b),c))}s=B.c.gt(a)
b=B.c.gt(b)
c=J.cF(c)
d=J.cF(d)
r=$.m3()
return A.ml(A.bL(A.bL(A.bL(A.bL(r,s),b),c),d))},
lM(a){A.mC(A.z(a))},
c7:function c7(a,b){this.a=a
this.b=b},
a8:function a8(a){this.a=a},
kQ:function kQ(){},
J:function J(){},
dy:function dy(a){this.a=a},
bP:function bP(){},
fP:function fP(){},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d2:function d2(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fr:function fr(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hq:function hq(a){this.a=a},
hn:function hn(a){this.a=a},
bm:function bm(a){this.a=a},
f9:function f9(a){this.a=a},
fS:function fS(){},
ec:function ec(){},
fc:function fc(a){this.a=a},
hM:function hM(a){this.a=a},
f:function f(){},
a4:function a4(){},
cX:function cX(a,b,c){this.a=a
this.b=b
this.$ti=c},
U:function U(){},
v:function v(){},
ii:function ii(){},
hc:function hc(a){this.a=a},
r3(){return document},
p9(a,b,c){var s,r=document.body
r.toString
s=t.e0
s=new A.a5(new A.ai(B.aq.S(r,a,b,c)),s.i("A(i.E)").a(new A.jg()),s.i("a5<i.E>"))
return t.h.a(s.ga9(s))},
dK(a){var s,r,q="element tag unavailable"
try{s=J.bZ(a)
s.gd0(a)
q=s.gd0(a)}catch(r){}return q},
cv(a,b,c,d,e){var s=A.nU(new A.kR(c),t.R)
if(s!=null&&!0)J.oP(a,b,s,!1)
return new A.en(a,b,s,!1,e.i("en<0>"))},
nw(a){var s=document.createElement("a"),r=new A.i8(s,t.oH.a(window.location))
r=new A.cx(r)
r.dw(a)
return r},
pU(a,b,c,d){t.h.a(a)
A.P(b)
A.P(c)
t.dl.a(d)
return!0},
pV(a,b,c,d){var s,r,q
t.h.a(a)
A.P(b)
A.P(c)
s=t.dl.a(d).a
r=s.a
B.bj.seT(r,c)
q=r.hostname
s=s.b
if(!(q==s.hostname&&r.port===s.port&&r.protocol===s.protocol))if(q==="")if(r.port===""){s=r.protocol
s=s===":"||s===""}else s=!1
else s=!1
else s=!0
return s},
nB(){var s=t.N,r=A.na(B.aT,s),q=t.gL.a(new A.ld()),p=A.c(["TEMPLATE"],t.s)
s=new A.il(r,A.jI(s),A.jI(s),A.jI(s),null)
s.dz(null,new A.ci(B.aT,q,t.gQ),p,null)
return s},
qh(a){var s
if("postMessage" in a){s=A.pT(a)
return s}else return t.iB.a(a)},
qi(a){var s
if(t.dA.b(a))return a
s=new A.kJ([],[])
s.c=!0
return s.bL(a)},
pT(a){if(a===window)return t.kg.a(a)
else return new A.hE()},
nU(a,b){var s=$.E
if(s===B.j)return a
return s.cz(a,b)},
t:function t(){},
iL:function iL(){},
cH:function cH(){},
eZ:function eZ(){},
cL:function cL(){},
f3:function f3(){},
c1:function c1(){},
c2:function c2(){},
cN:function cN(){},
b2:function b2(){},
j4:function j4(){},
G:function G(){},
cQ:function cQ(){},
j5:function j5(){},
aT:function aT(){},
be:function be(){},
j6:function j6(){},
j7:function j7(){},
j8:function j8(){},
cR:function cR(){},
b5:function b5(){},
bG:function bG(){},
ff:function ff(){},
dH:function dH(){},
dI:function dI(){},
fg:function fg(){},
j9:function j9(){},
M:function M(){},
jg:function jg(){},
l:function l(){},
e:function e(){},
ax:function ax(){},
fj:function fj(){},
fk:function fk(){},
fm:function fm(){},
ay:function ay(){},
jv:function jv(){},
cb:function cb(){},
dO:function dO(){},
dP:function dP(){},
cc:function cc(){},
cV:function cV(){},
bi:function bi(){},
dW:function dW(){},
ck:function ck(){},
jP:function jP(){},
fC:function fC(){},
jS:function jS(a){this.a=a},
fD:function fD(){},
jT:function jT(a){this.a=a},
aA:function aA(){},
fE:function fE(){},
ar:function ar(){},
ai:function ai(a){this.a=a},
q:function q(){},
e1:function e1(){},
aB:function aB(){},
fW:function fW(){},
h2:function h2(){},
kf:function kf(a){this.a=a},
h4:function h4(){},
at:function at(){},
h7:function h7(){},
aC:function aC(){},
h8:function h8(){},
aD:function aD(){},
hb:function hb(){},
kp:function kp(a){this.a=a},
ah:function ah(){},
ee:function ee(){},
he:function he(){},
hf:function hf(){},
d7:function d7(){},
av:function av(){},
ad:function ad(){},
hh:function hh(){},
hi:function hi(){},
kx:function kx(){},
aE:function aE(){},
hk:function hk(){},
ky:function ky(){},
b9:function b9(){},
kB:function kB(){},
da:function da(){},
hs:function hs(){},
dc:function dc(){},
de:function de(){},
hC:function hC(){},
el:function el(){},
hQ:function hQ(){},
es:function es(){},
ib:function ib(){},
ij:function ij(){},
hA:function hA(){},
hK:function hK(a){this.a=a},
ma:function ma(a,b){this.a=a
this.$ti=b},
em:function em(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
en:function en(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
kR:function kR(a){this.a=a},
cx:function cx(a){this.a=a},
r:function r(){},
e2:function e2(a){this.a=a},
k0:function k0(a){this.a=a},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(){},
la:function la(){},
lb:function lb(){},
il:function il(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ld:function ld(){},
ik:function ik(){},
c9:function c9(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
hE:function hE(){},
i8:function i8(a,b){this.a=a
this.b=b},
eL:function eL(a){this.a=a
this.b=0},
lj:function lj(a){this.a=a},
hD:function hD(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hN:function hN(){},
hO:function hO(){},
hR:function hR(){},
hS:function hS(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
i4:function i4(){},
i5:function i5(){},
i7:function i7(){},
ez:function ez(){},
eA:function eA(){},
i9:function i9(){},
ia:function ia(){},
ic:function ic(){},
im:function im(){},
io:function io(){},
eE:function eE(){},
eF:function eF(){},
iq:function iq(){},
ir:function ir(){},
ix:function ix(){},
iy:function iy(){},
iz:function iz(){},
iA:function iA(){},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
nL(a){var s,r
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.lm(a))return a
if(A.o2(a))return A.bY(a)
if(Array.isArray(a)){s=[]
for(r=0;r<a.length;++r)s.push(A.nL(a[r]))
return s}return a},
bY(a){var s,r,q,p,o
if(a==null)return null
s=A.ab(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.C)(r),++p){o=r[p]
s.j(0,o,A.nL(a[o]))}return s},
o2(a){var s=Object.getPrototypeOf(a)
return s===Object.prototype||s===null},
m7(){return window.navigator.userAgent},
kI:function kI(){},
kK:function kK(a,b){this.a=a
this.b=b},
kJ:function kJ(a,b){this.a=a
this.b=b
this.c=!1},
ro(a,b){var s=new A.H($.E,b.i("H<0>")),r=new A.aR(s,b.i("aR<0>"))
a.then(A.bb(new A.lN(r,b),1),A.bb(new A.lO(r),1))
return s},
k2:function k2(a){this.a=a},
lN:function lN(a,b){this.a=a
this.b=b},
lO:function lO(a){this.a=a},
fZ(){return B.p},
hT:function hT(){},
aK:function aK(){},
fw:function fw(){},
aN:function aN(){},
fQ:function fQ(){},
k7:function k7(){},
d5:function d5(){},
hd:function hd(){},
m:function m(){},
aP:function aP(){},
hl:function hl(){},
hU:function hU(){},
hV:function hV(){},
i2:function i2(){},
i3:function i3(){},
ig:function ig(){},
ih:function ih(){},
is:function is(){},
it:function it(){},
pe(a){return new GainNode(a)},
b0:function b0(){},
dB:function dB(){},
c0:function c0(){},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
F:function F(){},
f_:function f_(){},
f0:function f0(){},
iV:function iV(a){this.a=a},
bd:function bd(){},
f1:function f1(){},
dC:function dC(){},
cU:function cU(){},
fR:function fR(){},
hB:function hB(){},
f4:function f4(){},
fn:function fn(){},
fX:function fX(){},
d3:function d3(){},
bo:function bo(){},
hm:function hm(){},
hr:function hr(){},
n0(a,b){var s=A.b6(7,null,!1,b.i("0?")),r=a==null?A.rx():a
return new A.fq(r,s,b.i("fq<0>"))},
fq:function fq(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
lh:function lh(a,b){this.a=a
this.$ti=b},
cz:function cz(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=-1
_.$ti=c},
bB(a){return new A.j(a)},
j:function j(a){this.a=a},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
nf(a,b){return new A.fO(A.c([],t.f7),a,b.i("fO<0>"))},
fO:function fO(a,b,c){this.a=a
this.b=b
this.$ti=c},
aO:function aO(a,b){this.a=a
this.b=b},
m5(a,b,c,d,e,f,g){return new A.cG(g,b,e,a,f)},
o1(a,b){if(b.e)return!1
if(a.x)return!0
if(b.x)return!0
return!1},
r9(a,b){return B.a.bk(a.a,new A.lw(b))},
fF(a,b,c,d,e,f,g,h,i,j){return new A.bl(i,a,h,j,b,e,c,f)},
r4(a){var s,r,q=a.f.$0(),p=new A.jR(new Uint8ClampedArray(4000)),o=a.d,n=A.c([],t.I),m=A.n9(B.a9,t.b,t.O),l=A.c([],t.Q),k=A.c([],t.d)
for(s=J.aH(a.r.$0());s.n();){r=s.gp(s)
switch(r.gbS()){case B.ad:m.h(0,B.G)
m.j(0,B.G,r)
break
case B.ae:m.h(0,B.m)
m.j(0,B.m,r)
break
case B.af:m.h(0,B.H)
m.j(0,B.H,r)
break
default:B.a.k(n,r)}}return A.m5(new A.iJ(q,p),new A.c4(o,o,1,0,0,0,0,new A.cS(n,m),a.c,l,k,new A.cT(a.a)),1,a.z,!1,!1,a.e.$0())},
cG:function cG(a,b,c,d,e){var _=this
_.a=100
_.b=a
_.c=b
_.e=c
_.r=d
_.x=e},
iK:function iK(a){this.a=a},
iJ:function iJ(a,b){this.a=a
this.b=b
this.c=null},
ae:function ae(a,b){this.a=a
this.b=b},
an:function an(){},
bM:function bM(){},
bN:function bN(){},
cO:function cO(){},
bK:function bK(){},
h0:function h0(){this.b=!1},
e7:function e7(){this.a=null},
h1:function h1(a){this.a=a},
lw:function lw(a){this.a=a},
bz:function bz(){},
b3:function b3(a){this.a=a},
bl:function bl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.z=h},
lX:function lX(){},
lV:function lV(){},
lW:function lW(){},
lR:function lR(){},
lP:function lP(){},
lQ:function lQ(){},
m_:function m_(){},
lY:function lY(){},
lZ:function lZ(){},
m2:function m2(){},
m0:function m0(){},
m1:function m1(){},
lt:function lt(){},
lr:function lr(){},
ls:function ls(){},
iZ:function iZ(){this.b=this.a=0},
a2:function a2(){},
cj:function cj(a,b){this.b=a
this.a=b},
cY:function cY(a,b){this.b=a
this.a=b},
rn(a,b,c){var s,r,q=b.e||b.a===0
if(q)return!1
s=b.c
if(s!=null&&s.b<=0){a.$1(new A.dG(b))
return!0}r=b.r
if(r!=null){a.$1(r.ey(b,c))
b.a=0
return!0}return!1},
fo:function fo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1
_.z=null},
jq:function jq(a,b){this.a=a
this.b=b},
mY(a){switch(a.a){case 0:case 1:case 2:case 3:case 4:return!1
case 5:case 6:case 7:return!0}},
dE(a,b,c){var s,r,q,p
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
eW(a,b,c,d,e,f){return new A.eV(f,c)},
mP(){return new A.eV(10,10)},
b7(a,b,c){return new A.fB(a,c,b)},
ps(a,b){return new A.k(a,b)},
p4(a){var s,r=a.a,q=a.b
if(r+q===1)return a
s=Math.sqrt(Math.pow(r,2)+Math.pow(q,2))
return new A.aO(r/s,q/s)},
bf(a){switch(a){case B.a5:case B.a6:case B.K:case B.L:case B.E:case B.N:case B.W:case B.X:case B.T:case B.I:case B.U:case B.V:case B.J:case null:return!1
case B.S:case B.v:case B.M:return!0}},
ph(a){switch(a){case B.a5:case B.a6:case B.K:case B.L:case B.E:case B.N:case B.W:case B.X:case B.T:case B.I:case B.U:case B.V:case B.J:case null:return!1
case B.S:case B.v:case B.M:return!0}},
eb:function eb(a,b){this.a=a
this.b=b},
bg:function bg(a,b){this.a=a
this.b=b},
eY:function eY(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b,c){this.b=a
this.c=b
this.e=c},
j3:function j3(){},
X:function X(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fp:function fp(a,b){this.a=a
this.b=b},
bE:function bE(a,b){this.a=a
this.b=b},
bF:function bF(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b){this.a=a
this.b=b},
jQ:function jQ(){},
bD:function bD(){},
c6:function c6(a,b){this.a=a
this.b=b},
Y:function Y(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.y=e
_.z=f},
du:function du(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
as:function as(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.f=c
_.r=d
_.Q=e
_.ch=f},
cJ:function cJ(a,b){this.a=a
this.b=b},
am:function am(a){this.c=a},
eV:function eV(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
cK:function cK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cT:function cT(a){this.a=a},
cS:function cS(a,b){this.a=a
this.b=b},
fT:function fT(a,b){this.a=a
this.b=b},
c8:function c8(a,b){this.a=a
this.b=b},
fa:function fa(){},
d8:function d8(a,b){this.a=a
this.b=b},
dD:function dD(a,b){this.a=a
this.b=b},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a,b){this.a=a
this.b=b},
au:function au(a,b){this.a=a
this.b=b},
cg:function cg(a,b){this.a=a
this.b=b},
b1:function b1(a,b){this.a=a
this.b=b},
bO:function bO(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
fy:function fy(a,b){this.b=a
this.c=b},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(a,b){this.a=a
this.b=b},
jK:function jK(a,b){this.a=a
this.b=b},
a_:function a_(a,b){this.a=a
this.b=b},
jM:function jM(a,b){this.a=a
this.b=b},
jR:function jR(a){this.a=a},
cZ:function cZ(a,b){this.a=a
this.b=b},
ja:function ja(a){var _=this
_.a=a
_.b=!1
_.c=null
_.d=0},
je:function je(a){this.a=a},
jf:function jf(){},
pb(a,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k="a_position",j=5126,i="u_resolution",h="u_offset",g=A.c([],t.ev),f=A.c(["alarm_1.mp3","background_1.mp3","background_2.mp3","bullet_impact_1.mp3","bullet_impact_2.mp3","bullet_miss_1.mp3","calm_menu_1.mp3","cave_1.mp3","click_1.mp3","death_1.mp3","door_1.mp3","door_unlock_1.mp3","drone_abandoned_desolate.mp3","fireball_1.mp3","fireball_2.mp3","flamethrower_1.mp3","heavy_punch_1.mp3","heavy_punch_2.mp3","heavy_punch_3.mp3","heavy_punch_4.mp3","Just_Pick_One_Already.mp3","laser_1.mp3","loop_1.mp3","menu_1.mp3","menu_2.mp3","miss_1.mp3","monster_deep_growl.mp3","monster_growl_1.mp3","monster_sceam_2.mp3","monster_scream_1.mp3","New_Bee.mp3","positive_1.mp3","rain_background_1.mp3","sewer_1.mp3","short_pulse_1.mp3","surface_day_1.mp3","surface_night_1.mp3","sword_impact_1.mp3","teleport_1.mp3","text_loop_1.mp3","water_footsteps_1.mp3","water_footsteps_2.mp3","water_footsteps_3.mp3","water_footsteps_4.mp3","water_footsteps_5.mp3","reload_1.mp3","pistol_1.mp3"],t.s),e=new (window.AudioContext||window.webkitAudioContext)(),d=A.qk(),c=t.G,b=t.o
d=A.aI(A.c([new A.V(k,35044,j,2,d),new A.V("a_color",35048,j,4,new Float32Array(192e3))],c),u.l,A.c([new A.x(i,B.f),new A.x(h,B.f)],b),u.q)
s=A.aI(A.c([new A.V(k,35048,j,2,new Float32Array(8000))],c),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.c([new A.x(i,B.f),new A.x(h,B.f)],b),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
r=A.pN(window)
q=new Uint8Array(4000)
p=t.j
o=A.c([],t.pl)
b=A.c([new A.x("u_texture",B.k),new A.x(i,B.f),new A.x("u_time",B.o)],b)
b=A.aI(A.c([new A.V(k,35044,j,2,new Float32Array(A.cB(B.x)))],c),"#version 300 es\nprecision mediump float;\n\n\nuniform sampler2D u_texture;\nuniform vec2 u_resolution;\nuniform float u_time;\n\nout vec4 outColor;\n\nfloat density = 1.3;\nfloat opacityScanline = .3;\nfloat opacityNoise = .2;\n\nfloat random (vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nfloat blend(const in float x, const in float y) {\n\treturn (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));\n}\n\nvec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {\n\tvec3 z = vec3(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b));\n\treturn z * opacity + x * (1.0 - opacity);\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n  vec3 col = texture(u_texture, uv).rgb;\n  float count = u_resolution.y * density;\n  vec2 sl = vec2(sin(uv.y * count), cos(uv.y * count));\n\tvec3 scanlines = vec3(sl.x, sl.y, sl.x);\n  col += col * scanlines * opacityScanline;\n  col += col * vec3(random(uv * u_time)) * opacityNoise;\n  outColor = vec4(col, 1.0);\n}\n",b,u.p)
c=A.c([],t.fk)
n=new Uint8Array(16e6)
m=new Uint8Array(4000)
l=new Uint8Array(4000)
g=new A.jj(a1,a4,a,a0,a3,g,a2,new A.h6(A.ab(t.N,t.bD),f,e),new A.jm(n,m,l,new Uint8Array(64e6),new A.k(0,0),A.ab(p,t.im),c),new A.iZ(),new A.kv(d),new A.ja(s),r,new A.iK(new A.fe(q,A.ab(p,t.S))),new A.je(o),new A.jn(b),a1.createFramebuffer(),a1.createFramebuffer(),new A.kd())
g.ds(a,a0,a1,a2,a3,a4)
return g},
fh:function fh(){this.c=this.b=!1},
jj:function jj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
_.fr=_.dy=$
_.fx=n
_.fy=$
_.go=o
_.id=p
_.k2=_.k1=null
_.k3=q
_.k4=r
_.r2=_.r1=0
_.ry=!1
_.x1=s},
jk:function jk(a,b){this.a=a
this.b=b},
lT(a,b,c){return a*c+(1-c)*b},
a3:function a3(){},
bA:function bA(a,b,c){var _=this
_.a=a
_.d=0
_.e=null
_.f=!0
_.r=b
_.x=c},
K:function K(a,b,c,d,e,f,g){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
fM:function fM(a){this.a=a},
e6:function e6(a){this.a=a},
aM:function aM(a,b){this.a=a
this.b=b},
jX:function jX(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d6:function d6(){},
fx:function fx(a){this.a=a},
ef:function ef(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iS:function iS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iQ:function iQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dG:function dG(a){this.a=a},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(a){this.a=a},
e5:function e5(a,b){this.a=a
this.b=b},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
k9:function k9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
jn:function jn(a){this.a=a
this.b=null},
jm:function jm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ip:function ip(a){this.a=a
this.b=!0},
kC:function kC(a,b,c){this.a=a
this.c=b
this.d=c},
c3:function c3(a,b){this.a=a
this.b=b},
kb:function kb(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
o0(a,b){var s=a.f
if(s==null)return A.c([],t.Y)
if(s===B.v)return A.c([new A.cd(new A.ef(!1,a.b))],t.Y)
if(s===B.L){if(b.ai(a.b)!=null)return A.c([],t.Y)
return A.c([new A.cd(new A.ef(!0,a.b))],t.Y)}if(s===B.I)return A.c([new A.cd(new A.hp(a.b))],t.Y)
if(s===B.K)return A.c([new A.cd(new A.fM(!1))],t.Y)
return A.c([],t.Y)},
cd:function cd(a){this.b=a},
pm(a){var s=u.p,r="a_position",q="u_player_visible_texture",p=t.G,o=t.o
return new A.fA(A.aI(A.c([new A.V(r,35044,5126,2,new Float32Array(A.cB(B.x)))],p),u.z,A.c([new A.x("u_source_position",B.f),new A.x("u_source_color",B.b7),new A.x("u_source_strength",B.o),new A.x("u_time",B.o),new A.x("u_visible_texture",B.k),new A.x(q,B.k)],o),s),A.aI(A.c([new A.V(r,35044,5126,2,new Float32Array(A.cB(B.x)))],p),u.A,A.c([new A.x("u_light_texture",B.k),new A.x("u_game_world_texture",B.k),new A.x(q,B.k),new A.x("u_resolution",B.f),new A.x("u_block_size",B.f),new A.x("u_offset",B.f)],o),s),a,A.c([],t.ow))},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.x=d
_.y=null},
p8(a){switch(a.a){case 0:return B.aC
case 1:return B.aB
case 2:return B.aA
case 3:return B.az
case 4:return B.t
case 5:return B.u
case 6:return B.q
case 7:return B.r}},
p7(a){switch(a.a){case 4:return B.aP
case 5:return B.aO
case 6:return B.aP
case 7:return B.aO
default:return B.dF}},
a7(a,b){switch(b.a){case 4:return a.E(0,new A.k(0,-1))
case 1:return a.E(0,new A.k(1,-1))
case 5:return a.E(0,new A.k(1,0))
case 0:return a.E(0,new A.k(1,1))
case 6:return a.E(0,new A.k(0,1))
case 2:return a.E(0,new A.k(-1,1))
case 7:return a.E(0,new A.k(-1,0))
case 3:return a.E(0,new A.k(-1,-1))}},
mz(a,b,c){var s
switch(c.a){case 0:return!1
case 1:return a.c===B.b||A.N(A.bf(a.f))
case 2:s=a.f
if(s===B.v)return!1
return a.c===B.b||A.N(A.bf(s))
case 3:return a.c===B.b||A.N(A.bf(a.f))||b.ai(a.b)!=null}},
cn:function cn(a,b,c){var _=this
_.b=_.a=null
_.d=a
_.e=b
_.f=c},
aU:function aU(a,b){this.a=a
this.b=b},
k5:function k5(){},
fe:function fe(a,b){this.a=a
this.b=b},
kh:function kh(a,b,c){this.a=a
this.b=b
this.c=c},
mR(a,b,c,d,e){return new A.V(d,a,c,e,b)},
bQ(a,b){return new A.x(b,a)},
aI(a,b,c,d){var s=t.N
return new A.ju(d,b,c,a,A.ab(s,t.o3),A.ab(s,t.aN))},
nM(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.W(a.getShaderParameter(s,35713),!0)){A.lM(a.getShaderInfoLog(s))
throw A.d(A.ac("Invalid Shader"))}return s},
V:function V(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x:function x(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.c=b},
iu:function iu(a,b){this.a=a
this.b=b},
ju:function ju(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
kd:function kd(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
ke:function ke(){},
fN:function fN(){},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function kj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qL(a,b){var s=t.hd
s.a(a)
s.a(b)
return B.e.R(a.y,b.y)},
rj(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.H($.E,t.aa),p=J.oT(r),o=p.$ti,n=o.i("~(1)?").a(new A.lB(a,s,r,new A.aR(q,t.fB)))
t.Z.a(null)
A.cv(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
pH(a,b){var s=35048,r=5126,q=A.c([new A.x("u_texture",B.k),new A.x("u_resolution",B.f),new A.x("u_offset",B.f)],t.o),p=new Float32Array(12e4),o=new Float32Array(12e4),n=new Float32Array(24e4)
q=new A.kk(A.aI(A.c([new A.V("a_position",s,r,2,p),new A.V("a_texcoord",s,r,2,o),new A.V("a_color",s,r,4,n),new A.V("a_bg_color",s,r,4,new Float32Array(24e4))],t.G),"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\nin vec4 v_bg_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n  if (v_bg_color != vec4(0, 0, 0, 0)) {\n    outColor = outColor + v_bg_color;\n  }\n}\n",q,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"),A.n0(A.rr(),t.hd),b)
q.du(a,b)
return q},
n1(a,b,c){var s,r,q,p,o,n,m=null
switch(a){case B.a5:case null:return m
case B.a6:s=m
r=s
q=3
p=16
o=1
break
case B.K:q=14
p=3
o=1
r=B.dU
s=B.bT
break
case B.v:s=m
r=s
q=6
p=11
o=1
break
case B.L:s=m
r=s
q=15
p=5
o=1
break
case B.M:s=m
r=s
q=5
p=11
o=1
break
case B.E:n=B.aW.h(0,t.e.i("a2.T").a(800))
n.toString
s=m
r=n
q=2
p=2
o=0.8
break
case B.N:r=new A.j(4294967142)
s=m
q=12
p=7
o=0.8
break
case B.W:s=m
r=s
q=1
p=13
o=1
break
case B.X:s=m
r=s
q=2
p=13
o=1
break
case B.S:n=B.aW.h(0,t.e.i("a2.T").a(600))
n.toString
s=m
r=n
q=6
p=0
o=1
break
case B.T:n=B.dM.h(0,t.e.i("a2.T").a(900))
n.toString
s=n
r=m
q=0
p=15
o=1
break
case B.I:n=B.aY.h(0,t.e.i("a2.T").a(500))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.U:n=B.aY.h(0,t.e.i("a2.T").a(100))
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
case B.J:n=B.dP.h(0,t.gX.i("a2.T").a(700))
n.toString
s=m
r=n
q=12
p=7
o=1
break
default:s=m
r=s
q=0
p=0
o=1}n=new A.a0(q,p,b,c,r)
n.f=o
n.sak(0,s)
return n},
lB:function lB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kk:function kk(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c
_.e=!1
_.f=!0},
kl:function kl(a){this.a=a},
a0:function a0(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.f=1
_.r=null
_.x=e
_.y=0},
mj(a,b,c){return new A.jO(b,c,a)},
qk(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
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
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(a){this.a=a
this.b=null
this.c=!1},
kw:function kw(a,b){this.a=a
this.b=b},
h_:function h_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qj(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
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
jl:function jl(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
kD:function kD(a){this.b=a},
qX(a){var s,r=A.mh(4000,new A.lq(a),t.W),q=A.c([],t.c7)
for(s=0;s<4000;++s);return new A.h9(q,A.ab(t.K,t.lZ),new A.Z(100,40,r,t.nr),a.b)},
iI(a){var s,r,q,p,o
for(s=a.c,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.k(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.N(A.bf(o.f))))return p}throw A.d("Solid")},
rm(a,b){var s,r,q
for(s=a.c;!0;){r=$.dr()
q=new A.k(B.c.A(r.T()*98)+1,B.c.A(r.T()*38)+1)
r=s.h(0,q)
if(!(r.c===B.b||A.N(A.bf(r.f)))&&a.ai(q)==null)return q}},
bu(a,b){return a.T()<=b/100},
aZ(a,b,c){return B.c.A(a.T()*(c-b))+b},
nN(a,b,c){var s=b.length
if(s===1){if(0>=s)return A.b(b,0)
return b[0]}s=A.aZ(a,0,s-1)
if(!(s>=0&&s<b.length))return A.b(b,s)
return b[s]},
hu:function hu(a,b){this.a=a
this.d=0
this.e=b},
lq:function lq(a){this.a=a},
h9:function h9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jc:function jc(a){this.a=a},
f5:function f5(a){this.a=a},
j2:function j2(a){this.a=a},
js:function js(){},
jt:function jt(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
lU(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.Z))break
q=A.a7(q,b);++p}return p},
cE(a,b,c){var s=A.a7(a,b)
if(c.e.h(0,s)===B.Z)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
db(a,b){return new A.ei(a,b)},
eT(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.c([],t.D)
for(s=a2.length,r=a1.a,q=J.cC(r),p=t.q,o=t.n,n=0;n<a2.length;a2.length===s||(0,A.C)(a2),++n){m=a2[n]
l=A.c([],p)
k=A.c([],o)
for(j=q.gw(r),i=0;j.n();){h=j.gp(j)
g=m.a.a8(h,a3)
if(g<1000){B.a.k(l,h)
B.a.k(k,g)
i+=g}}if(l.length===0){B.a.k(a0,m)
continue}for(f=0,e=0;e<k.length;++e,f=d){d=k[e]/i+f
B.a.j(k,e,d)}c=$.ow().T()
for(j=k.length,h=l.length,b=B.y,a=-1,e=0;e<j;++e,a=g){g=k[e]
if(c>=a&&c<g){if(!(e<h))return A.b(l,e)
b=l[e]}}j=0===b.a&&0===b.b
if(j){B.a.k(a0,m)
continue}m.f_(b,a3)}for(s=q.gw(r),r=a3.e,q=a1.c;s.n();){p=s.gp(s)
if(r.h(0,p)===B.ah||r.h(0,p)===B.ai)B.a.k(q,p)}return a0},
o7(a,b){var s,r,q,p,o,n,m,l,k
B.a.aY(a,new A.lS())
if(0>=a.length)return A.b(a,0)
A.eT(a[0],$.oK(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.C)(s),++p)q.j(0,s[p],B.aU)
for(s=A.nq(a,1,null,A.a1(a).c),r=s.$ti,s=new A.bk(s,s.gm(s),r.i("bk<aL.E>")),r=r.i("aL.E"),o=t.c1,n=2;s.n();){m=r.a(s.d)
l=m.a
k=J.aw(l)
if(k.gm(l)<30){if(n>0){l=A.nb($.m4(),!0,o)
l.push($.mJ())}else l=$.m4()
if(!B.a.u(A.eT(m,l,b),$.mJ()))--n}else if(k.gm(l)<60)A.eT(m,$.oD(),b)
else if(k.gm(l)<100)A.eT(m,$.oB(),b)
else A.eT(m,$.oA(),b)}if(n===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.C)(s),++p)q.j(0,s[p],B.aV)}},
b4:function b4(){},
ht:function ht(){},
dw:function dw(a){this.$ti=a},
e4:function e4(a){this.$ti=a},
f6:function f6(){},
eX:function eX(){},
fb:function fb(){},
dt:function dt(a){this.a=a},
ei:function ei(a,b){this.a=a
this.b=b},
lL:function lL(){},
lH:function lH(){},
lJ:function lJ(){},
lG:function lG(){},
lI:function lI(){},
lK:function lK(){},
lF:function lF(){},
lS:function lS(){},
pa(a){var s=t.q
return new A.ao(a,A.c([],s),A.c([],s),A.ji(a))},
ji(a){var s,r,q=J.aw(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gm(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.k(B.c.A(p/q.gm(a)),B.c.A(o/q.gm(a)))},
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
iW:function iW(a,b){this.a=a
this.b=b},
iY:function iY(){},
iX:function iX(a){this.a=a},
eg:function eg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jh:function jh(a,b){this.a=a
this.b=b},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jB:function jB(a,b){this.a=a
this.b=b},
k1:function k1(){},
jw:function jw(a){this.a=a},
jx:function jx(){},
jy:function jy(){},
jz:function jz(){},
jA:function jA(){},
k6:function k6(){},
bJ:function bJ(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
kg:function kg(a,b){this.b=a
this.a=b},
e8:function e8(a,b){this.a=a
this.b=b},
ks:function ks(a){this.a=a},
kt:function kt(){},
ku:function ku(a){this.a=a},
pN(a){var s=new A.kE(A.no(t.h8),A.no(t.bd))
s.dv(a)
return s},
kE:function kE(a,b){this.a=a
this.b=b},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
aa:function aa(a,b){this.a=a
this.b=b},
iM:function iM(a,b,c){var _=this
_.a=a
_.b=$
_.c=b
_.d=c},
iN:function iN(a,b){this.a=a
this.b=b},
pq(a){var s=new A.jU(a)
s.dt(a)
return s},
jU:function jU(a){this.a=a
this.b=$
this.c=!1},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
fV:function fV(a,b){this.a=a
this.b=b},
km:function km(){},
kn:function kn(a,b){this.a=a
this.b=b},
ko:function ko(a,b){this.a=a
this.b=b},
mC(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
r2(a,b){return J.oQ(t.n6.a(a),b)},
fs(a){var s,r
if(a instanceof A.X){s=B.aJ
r=null}else if(a instanceof A.Y){s=B.aH
r=null}else if(a instanceof A.as){s=B.aI
r=0}else{if(a instanceof A.j3)s=B.dt
else{J.ds(a)
s=B.aK}r=null}$.n2=$.n2+1
return new A.aJ(a,s,r)},
rg(a,b,c){var s,r,q=a.r
if(q!=null){if(b===q.c)return!0
s=a.q()
r=b.q()
if(s==null||r==null)return!1
return c.y.a0(s).h(0,r)}return!0},
rq(a){A.aY(a)
$.cA.bh().ah(a,$.mH())
B.bb.cZ(window,A.o3())},
lC(){var s=0,r=A.bv(t.z),q,p,o,n,m,l
var $async$lC=A.bw(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:q=$.oz()
p=A.mP()
o=A.c([],t.I)
n=A.pn(B.a9,t.b,t.O)
m=A.c([],t.d)
s=2
return A.a6(q.aw(A.m5(null,new A.c4(20,20,0,0,0,0,0,new A.cS(o,n),p,A.c([],t.Q),m,new A.cT("J")),0,null,!1,!0,new A.a0(0,4,1,1,null))),$async$lC)
case 2:l=b
m=document
p=t.p
n=p.a(m.querySelector("#glCanvas"))
o=$.mH()
q=$.oI()
m=A.pb(l,n,o,q,p.a(m.querySelector("#text")),t.nK.a(B.D.bM(p.a(m.querySelector("#text")),"2d")))
p=$.cA.b
if(p==null?$.cA!=null:p!==$.cA)A.T(new A.cf("Field '"+$.cA.a+"' has already been initialized."))
$.cA.b=m
$.cA.bh().x.aP()
p=$.oH()
new A.km().J(p)
o=t.s
n=A.c(["Controls"],o)
o=A.c(["<h1>Controls</h1>\n<ul>\n  <li>WASD / Arrow Keys - Movement</li>\n  <li>Space - Activate</li>\n  <li>ESC - Cancel</l1>\n</ul>\n"],o)
new A.iM(A.pq(q),n,o).J(q)
q=$.cA.bh()
o=t.w
p=new A.fo(q,A.c([],o),A.c([],o),A.c([],t.fy),A.c([],t.ge),p)
o=q.dx.a
new A.bR(o,A.B(o).i("bR<1>")).cR(p.geQ())
p=t.x.a(p.gci())
B.a.k(q.f,p)
B.bb.cZ(window,A.o3())
return A.br(null,r)}})
return A.bs($async$lC,r)}},J={
mB(a,b,c,d){return{i:a,p:b,e:c,x:d}},
lv(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.mA==null){A.rd()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.mm("Return interceptor for "+A.z(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.l4
if(o==null)o=$.l4=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.rk(a)
if(p!=null)return p
if(typeof a=="function")return B.dv
s=Object.getPrototypeOf(a)
if(s==null)return B.b2
if(s===Object.prototype)return B.b2
if(typeof q=="function"){o=$.l4
if(o==null)o=$.l4=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aj,enumerable:false,writable:true,configurable:true})
return B.aj}return B.aj},
pj(a,b){if(a<0||a>4294967295)throw A.d(A.cp(a,0,4294967295,"length",null))
return J.pl(new Array(a),b)},
pk(a,b){if(a<0)throw A.d(A.cI("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("u<0>"))},
pl(a,b){return J.n6(A.c(a,b.i("u<0>")),b)},
n6(a,b){a.fixed$length=Array
return a},
dp(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dR.prototype
return J.fu.prototype}if(typeof a=="string")return J.bI.prototype
if(a==null)return J.dS.prototype
if(typeof a=="boolean")return J.dQ.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof A.v)return a
return J.lv(a)},
aw(a){if(typeof a=="string")return J.bI.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof A.v)return a
return J.lv(a)},
cC(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof A.v)return a
return J.lv(a)},
r5(a){if(typeof a=="number")return J.cW.prototype
if(typeof a=="string")return J.bI.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.cs.prototype
return a},
r6(a){if(typeof a=="string")return J.bI.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.cs.prototype
return a},
bZ(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof A.v)return a
return J.lv(a)},
W(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dp(a).H(a,b)},
mL(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.rh(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aw(a).h(a,b)},
mM(a,b,c){return J.cC(a).j(a,b,c)},
oO(a){return J.bZ(a).dI(a)},
oP(a,b,c,d){return J.bZ(a).ev(a,b,c,d)},
oQ(a,b){return J.r5(a).R(a,b)},
mN(a,b){return J.cC(a).v(a,b)},
oR(a,b){return J.cC(a).C(a,b)},
oS(a){return J.bZ(a).gez(a)},
cF(a){return J.dp(a).gt(a)},
aH(a){return J.cC(a).gw(a)},
al(a){return J.aw(a).gm(a)},
oT(a){return J.bZ(a).gbz(a)},
oU(a,b,c){return J.cC(a).cS(a,b,c)},
mO(a){return J.cC(a).f5(a)},
oV(a,b){return J.bZ(a).sdY(a,b)},
oW(a,b){return J.bZ(a).scK(a,b)},
oX(a){return J.r6(a).ff(a)},
ds(a){return J.dp(a).l(a)},
a:function a(){},
dQ:function dQ(){},
dS:function dS(){},
ce:function ce(){},
fU:function fU(){},
cs:function cs(){},
bh:function bh(){},
u:function u(a){this.$ti=a},
jC:function jC(a){this.$ti=a},
dx:function dx(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cW:function cW(){},
dR:function dR(){},
fu:function fu(){},
bI:function bI(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.me.prototype={}
J.a.prototype={
H(a,b){return a===b},
gt(a){return A.co(a)},
l(a){return"Instance of '"+A.k8(a)+"'"}}
J.dQ.prototype={
l(a){return String(a)},
dd(a,b){return b||a},
gt(a){return a?519018:218159},
$iA:1}
J.dS.prototype={
H(a,b){return null==b},
l(a){return"null"},
gt(a){return 0},
$iU:1}
J.ce.prototype={
gt(a){return 0},
l(a){return String(a)}}
J.fU.prototype={}
J.cs.prototype={}
J.bh.prototype={
l(a){var s=a[$.oa()]
if(s==null)return this.dk(a)
return"JavaScript function for "+J.ds(s)},
$ica:1}
J.u.prototype={
k(a,b){A.a1(a).c.a(b)
if(!!a.fixed$length)A.T(A.D("add"))
a.push(b)},
cY(a,b){var s
if(!!a.fixed$length)A.T(A.D("removeAt"))
s=a.length
if(b>=s)throw A.d(A.ni(b,null))
return a.splice(b,1)[0]},
K(a,b){var s
if(!!a.fixed$length)A.T(A.D("remove"))
for(s=0;s<a.length;++s)if(J.W(a[s],b)){a.splice(s,1)
return!0}return!1},
e5(a,b,c){var s,r,q,p,o
A.a1(a).i("A(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.N(b.$1(p)))s.push(p)
if(a.length!==r)throw A.d(A.bC(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
G(a,b){A.a1(a).i("f<1>").a(b)
if(!!a.fixed$length)A.T(A.D("addAll"))
this.dC(a,b)
return},
dC(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.bC(a))
for(r=0;r<s;++r)a.push(b[r])},
cS(a,b,c){var s=A.a1(a)
return new A.ci(a,s.B(c).i("1(2)").a(b),s.i("@<1>").B(c).i("ci<1,2>"))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
ga9(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.d(A.n4())
throw A.d(A.n5())},
bP(a,b,c,d){var s,r,q,p
A.a1(a).i("f<1>").a(d)
if(!!a.immutable$list)A.T(A.D("setRange"))
A.mk(b,c,a.length)
s=c-b
if(s===0)return
A.kc(0,"skipCount")
r=d
q=J.aw(r)
if(s>q.gm(r))throw A.d(A.pi())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
bk(a,b){var s,r
A.a1(a).i("A(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.N(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.bC(a))}return!1},
aY(a,b){var s=A.a1(a)
s.i("h(1,1)?").a(b)
if(!!a.immutable$list)A.T(A.D("sort"))
A.pF(a,b,s.c)},
dg(a){var s,r,q,p
if(!!a.immutable$list)A.T(A.D("shuffle"))
s=a.length
for(;s>1;){r=B.p.D(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
eV(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.W(a[s],b))return s}return-1},
u(a,b){var s
for(s=0;s<a.length;++s)if(J.W(a[s],b))return!0
return!1},
l(a){return A.md(a,"[","]")},
gw(a){return new J.dx(a,a.length,A.a1(a).i("dx<1>"))},
gt(a){return A.co(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.T(A.D("set length"))
if(b>a.length)A.a1(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.dn(a,b))
return a[b]},
j(a,b,c){A.I(b)
A.a1(a).c.a(c)
if(!!a.immutable$list)A.T(A.D("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.dn(a,b))
a[b]=c},
$ip:1,
$if:1,
$in:1}
J.jC.prototype={}
J.dx.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.C(q))
s=r.c
if(s>=p){r.sc6(null)
return!1}r.sc6(q[s]);++r.c
return!0},
sc6(a){this.d=this.$ti.i("1?").a(a)},
$ia4:1}
J.cW.prototype={
R(a,b){var s
A.aY(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaQ(b)
if(this.gaQ(a)===s)return 0
if(this.gaQ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaQ(a){return a===0?1/a<0:a<0},
aA(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.D(""+a+".toInt()"))},
cB(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.D(""+a+".ceil()"))},
ae(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.D(""+a+".floor()"))},
A(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.D(""+a+".round()"))},
ao(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
eD(a,b,c){if(B.e.R(b,c)>0)throw A.d(A.nW(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
d3(a,b){var s
if(b>20)throw A.d(A.cp(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaQ(a))return"-"+s
return s},
fg(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.cp(b,2,36,"radix",null))
s=a.toString(b)
if(B.w.eF(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.T(A.D("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.w.bN("0",p)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dc(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bU(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.co(a,b)},
O(a,b){return(a|0)===a?a/b|0:this.co(a,b)},
co(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.D("Result of truncating division is "+A.z(s)+": "+A.z(a)+" ~/ "+b))},
cn(a,b){var s
if(a>0)s=this.ed(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ed(a,b){return b>31?0:a>>>b},
$iag:1,
$iL:1,
$iO:1}
J.dR.prototype={$ih:1}
J.fu.prototype={}
J.bI.prototype={
eF(a,b){if(b<0)throw A.d(A.dn(a,b))
if(b>=a.length)A.T(A.dn(a,b))
return a.charCodeAt(b)},
E(a,b){return a+b},
dh(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
ff(a){return a.toLowerCase()},
bN(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.bK)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cW(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bN(c,s)+a},
bo(a,b,c){var s=a.length
if(c>s)throw A.d(A.cp(c,0,s,null,null))
return A.rs(a,b,c)},
R(a,b){var s
A.P(b)
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
h(a,b){if(b>=a.length)throw A.d(A.dn(a,b))
return a[b]},
$iag:1,
$ing:1,
$io:1}
A.cf.prototype={
l(a){var s="LateInitializationError: "+this.a
return s}}
A.ki.prototype={}
A.p.prototype={}
A.aL.prototype={
gw(a){var s=this
return new A.bk(s,s.gm(s),A.B(s).i("bk<aL.E>"))},
aT(a,b){return this.dj(0,A.B(this).i("A(aL.E)").a(b))}}
A.ed.prototype={
gdP(){var s=J.al(this.a),r=this.c
if(r==null||r>s)return s
return r},
gee(){var s=J.al(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.al(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.W()
return s-q},
v(a,b){var s=this,r=s.gee()+b
if(b<0||r>=s.gdP())throw A.d(A.R(b,s,"index",null,null))
return J.mN(s.a,r)}}
A.bk.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.aw(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.bC(q))
s=r.c
if(s>=o){r.sap(null)
return!1}r.sap(p.v(q,s));++r.c
return!0},
sap(a){this.d=this.$ti.i("1?").a(a)},
$ia4:1}
A.ch.prototype={
gw(a){var s=A.B(this)
return new A.dY(J.aH(this.a),this.b,s.i("@<1>").B(s.Q[1]).i("dY<1,2>"))},
gm(a){return J.al(this.a)}}
A.dJ.prototype={$ip:1}
A.dY.prototype={
n(){var s=this,r=s.b
if(r.n()){s.sap(s.c.$1(r.gp(r)))
return!0}s.sap(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
sap(a){this.a=this.$ti.i("2?").a(a)}}
A.ci.prototype={
gm(a){return J.al(this.a)},
v(a,b){return this.b.$1(J.mN(this.a,b))}}
A.a5.prototype={
gw(a){return new A.eh(J.aH(this.a),this.b,this.$ti.i("eh<1>"))}}
A.eh.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.N(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.ap.prototype={}
A.cP.prototype={
l(a){return A.mi(this)},
$iQ:1}
A.dF.prototype={
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
A.a9.prototype={
b8(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.pg(r)
o=A.mg(A.qD(),q,r,s.Q[1])
A.nY(p.a,o)
p.$map=o}return o},
h(a,b){return this.b8().h(0,b)},
C(a,b){this.$ti.i("~(1,2)").a(b)
this.b8().C(0,b)},
gm(a){var s=this.b8()
return s.gm(s)}}
A.jr.prototype={
$1(a){return this.a.b(a)},
$S:22}
A.kz.prototype={
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
A.e3.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.fv.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.ho.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.k3.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.dL.prototype={}
A.eB.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaX:1}
A.c5.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.o8(r==null?"unknown":r)+"'"},
$ica:1,
gfp(){return this},
$C:"$1",
$R:1,
$D:null}
A.f7.prototype={$C:"$0",$R:0}
A.f8.prototype={$C:"$2",$R:2}
A.hg.prototype={}
A.ha.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.o8(s)+"'"}}
A.cM.prototype={
H(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cM))return!1
return this.$_target===b.$_target&&this.a===b.a},
gt(a){return(A.lE(this.a)^A.co(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.k8(t.K.a(this.a))+"'")}}
A.h3.prototype={
l(a){return"RuntimeError: "+this.a}}
A.hv.prototype={
l(a){return"Assertion failed: "+A.fi(this.a)}}
A.az.prototype={
gm(a){return this.a},
geW(a){return this.a===0},
gL(a){return new A.dT(this,A.B(this).i("dT<1>"))},
gbJ(a){var s=this,r=A.B(s)
return A.nc(s.gL(s),new A.jE(s),r.c,r.Q[1])},
aM(a,b){var s=this.cL(b)
return s},
cL(a){var s=this,r=s.d
if(r==null)return!1
return s.an(s.aD(r,s.am(a)),a)>=0},
G(a,b){A.B(this).i("Q<1,2>").a(b).C(0,new A.jD(this))},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b9(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b9(p,b)
q=r==null?n:r.b
return q}else return o.cM(b)},
cM(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.aD(p,q.am(a))
r=q.an(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.B(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.bW(s==null?q.b=q.bd():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.bW(r==null?q.c=q.bd():r,b,c)}else q.cO(b,c)},
cO(a,b){var s,r,q,p,o=this,n=A.B(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.bd()
r=o.am(a)
q=o.aD(s,r)
if(q==null)o.bj(s,r,[o.be(a,b)])
else{p=o.an(q,a)
if(p>=0)q[p].b=b
else q.push(o.be(a,b))}},
K(a,b){var s=this.cN(b)
return s},
cN(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.am(a)
r=o.aD(n,s)
q=o.an(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.en(p)
if(r.length===0)o.c7(n,s)
return p.b},
C(a,b){var s,r,q=this
A.B(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.bC(q))
s=s.c}},
bW(a,b,c){var s,r=this,q=A.B(r)
q.c.a(b)
q.Q[1].a(c)
s=r.b9(a,b)
if(s==null)r.bj(a,b,r.be(b,c))
else s.b=c},
ce(){this.r=this.r+1&67108863},
be(a,b){var s=this,r=A.B(s),q=new A.jG(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.ce()
return q},
en(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.ce()},
am(a){return J.cF(a)&0x3ffffff},
an(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1},
l(a){return A.mi(this)},
b9(a,b){return a[b]},
aD(a,b){return a[b]},
bj(a,b,c){a[b]=c},
c7(a,b){delete a[b]},
bd(){var s="<non-identifier-key>",r=Object.create(null)
this.bj(r,s,r)
this.c7(r,s)
return r},
$ijF:1}
A.jE.prototype={
$1(a){var s=this.a,r=A.B(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.B(this.a).i("2(1)")}}
A.jD.prototype={
$2(a,b){var s=this.a,r=A.B(s)
s.j(0,r.c.a(a),r.Q[1].a(b))},
$S(){return A.B(this.a).i("~(1,2)")}}
A.jG.prototype={}
A.dT.prototype={
gm(a){return this.a.a},
gw(a){var s=this.a,r=new A.dU(s,s.r,this.$ti.i("dU<1>"))
r.c=s.e
return r}}
A.dU.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.bC(q))
s=r.c
if(s==null){r.sbV(null)
return!1}else{r.sbV(s.a)
r.c=s.c
return!0}},
sbV(a){this.d=this.$ti.i("1?").a(a)},
$ia4:1}
A.lx.prototype={
$1(a){return this.a(a)},
$S:32}
A.ly.prototype={
$2(a,b){return this.a(a,b)},
$S:38}
A.lz.prototype={
$1(a){return this.a(A.P(a))},
$S:59}
A.kP.prototype={
aG(){var s=this.b
if(s===this)throw A.d(new A.cf("Local '"+this.a+"' has not been initialized."))
return s},
bh(){var s=this.b
if(s===this)throw A.d(A.n8(this.a))
return s}}
A.fG.prototype={$imW:1}
A.cm.prototype={$iaF:1}
A.d_.prototype={
gm(a){return a.length},
$iy:1}
A.cl.prototype={
h(a,b){A.bt(b,a,a.length)
return a[b]},
j(a,b,c){A.I(b)
A.nI(c)
A.bt(b,a,a.length)
a[b]=c},
$ip:1,
$if:1,
$in:1}
A.e_.prototype={
j(a,b,c){A.I(b)
A.I(c)
A.bt(b,a,a.length)
a[b]=c},
$ip:1,
$if:1,
$in:1}
A.dZ.prototype={$imc:1}
A.fH.prototype={
h(a,b){A.bt(b,a,a.length)
return a[b]}}
A.fI.prototype={
h(a,b){A.bt(b,a,a.length)
return a[b]}}
A.fJ.prototype={
h(a,b){A.bt(b,a,a.length)
return a[b]}}
A.fK.prototype={
h(a,b){A.bt(b,a,a.length)
return a[b]}}
A.fL.prototype={
h(a,b){A.bt(b,a,a.length)
return a[b]}}
A.d0.prototype={
gm(a){return a.length},
h(a,b){A.bt(b,a,a.length)
return a[b]},
$ipK:1}
A.e0.prototype={
gm(a){return a.length},
h(a,b){A.bt(b,a,a.length)
return a[b]},
$ipL:1}
A.et.prototype={}
A.eu.prototype={}
A.ev.prototype={}
A.ew.prototype={}
A.aW.prototype={
i(a){return A.lg(v.typeUniverse,this,a)},
B(a){return A.qa(v.typeUniverse,this,a)}}
A.hP.prototype={}
A.eH.prototype={
l(a){return A.ak(this.a,null)},
$ins:1}
A.hL.prototype={
l(a){return this.a}}
A.eI.prototype={$ibP:1}
A.kM.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:21}
A.kL.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:60}
A.kN.prototype={
$0(){this.a.$0()},
$S:7}
A.kO.prototype={
$0(){this.a.$0()},
$S:7}
A.eG.prototype={
dA(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.bb(new A.lf(this,b),0),a)
else throw A.d(A.D("`setTimeout()` not found."))},
dB(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.bb(new A.le(this,a,Date.now(),b),0),a)
else throw A.d(A.D("Periodic timer."))},
eC(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.d(A.D("Canceling a timer."))},
$ihj:1}
A.lf.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.le.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.e.bU(s,o)}q.c=p
r.d.$1(q)},
$S:7}
A.hw.prototype={
a2(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.bX(b)
else{s=r.a
if(q.i("aq<1>").b(b))s.c_(b)
else s.ar(q.c.a(b))}},
bn(a,b){var s=this.a
if(this.b)s.M(a,b)
else s.b1(a,b)}}
A.lk.prototype={
$1(a){return this.a.$2(0,a)},
$S:8}
A.ll.prototype={
$2(a,b){this.a.$2(1,new A.dL(a,t.l.a(b)))},
$S:65}
A.lp.prototype={
$2(a,b){this.a(A.I(a),b)},
$S:33}
A.dz.prototype={
l(a){return A.z(this.a)},
$iJ:1,
gaB(){return this.b}}
A.jp.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.M(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.M(q.e.aG(),q.f.aG())},
$S:9}
A.jo.prototype={
$1(a){var s,r,q=this,p=q.x
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.mM(s,q.b,a)
if(r.b===0)q.c.ar(A.pp(s,p))}else if(r.b===0&&!q.e)q.c.M(q.f.aG(),q.r.aG())},
$S(){return this.x.i("U(0)")}}
A.ek.prototype={
bn(a,b){A.eR(a,"error",t.K)
if((this.a.a&30)!==0)throw A.d(A.ac("Future already completed"))
if(b==null)b=A.m6(a)
this.M(a,b)},
aL(a){return this.bn(a,null)}}
A.aR.prototype={
a2(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.ac("Future already completed"))
s.bX(r.i("1/").a(b))},
aK(a){return this.a2(a,null)},
M(a,b){this.a.b1(a,b)}}
A.dh.prototype={
a2(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.ac("Future already completed"))
s.c3(r.i("1/").a(b))},
aK(a){return this.a2(a,null)},
M(a,b){this.a.M(a,b)}}
A.cw.prototype={
eX(a){if((this.c&15)!==6)return!0
return this.b.b.bE(t.iW.a(this.d),a.a,t.k4,t.K)},
eS(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.fa(q,m,a.b,o,n,t.l)
else p=l.bE(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bE.b(A.bc(s))){if((r.c&1)!==0)throw A.d(A.cI("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cI("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.H.prototype={
aR(a,b,c){var s,r,q,p=this.$ti
p.B(c).i("1/(2)").a(a)
s=$.E
if(s===B.j){if(b!=null&&!t.ng.b(b)&&!t.y.b(b))throw A.d(A.mQ(b,"onError",u.c))}else{c.i("@<0/>").B(p.c).i("1(2)").a(a)
if(b!=null)b=A.qH(b,s)}r=new A.H(s,c.i("H<0>"))
q=b==null?1:3
this.b0(new A.cw(r,q,a,b,p.i("@<1>").B(c).i("cw<1,2>")))
return r},
d2(a,b){return this.aR(a,null,b)},
cp(a,b,c){var s,r=this.$ti
r.B(c).i("1/(2)").a(a)
s=new A.H($.E,c.i("H<0>"))
this.b0(new A.cw(s,19,a,b,r.i("@<1>").B(c).i("cw<1,2>")))
return s},
eb(a){this.a=this.a&1|16
this.c=a},
b3(a){this.a=a.a&30|this.a&1
this.c=a.c},
b0(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.f.a(r.c)
if((s.a&24)===0){s.b0(a)
return}r.b3(s)}A.dl(null,null,r.b,t.M.a(new A.kS(r,a)))}},
cj(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.f.a(m.c)
if((n.a&24)===0){n.cj(a)
return}m.b3(n)}l.a=m.aI(a)
A.dl(null,null,m.b,t.M.a(new A.l_(l,m)))}},
aH(){var s=t.F.a(this.c)
this.c=null
return this.aI(s)},
aI(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bZ(a){var s,r,q,p=this
p.a^=2
try{a.aR(new A.kW(p),new A.kX(p),t.P)}catch(q){s=A.bc(q)
r=A.bx(q)
A.o6(new A.kY(p,s,r))}},
c3(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("aq<1>").b(a))if(q.b(a))A.kV(a,r)
else r.bZ(a)
else{s=r.aH()
q.c.a(a)
r.a=8
r.c=a
A.dg(r,s)}},
ar(a){var s,r=this
r.$ti.c.a(a)
s=r.aH()
r.a=8
r.c=a
A.dg(r,s)},
M(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.aH()
this.eb(A.iP(a,b))
A.dg(this,s)},
bX(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aq<1>").b(a)){this.c_(a)
return}this.dF(s.c.a(a))},
dF(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.dl(null,null,s.b,t.M.a(new A.kU(s,a)))},
c_(a){var s=this,r=s.$ti
r.i("aq<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.dl(null,null,s.b,t.M.a(new A.kZ(s,a)))}else A.kV(a,s)
return}s.bZ(a)},
b1(a,b){t.l.a(b)
this.a^=2
A.dl(null,null,this.b,t.M.a(new A.kT(this,a,b)))},
$iaq:1}
A.kS.prototype={
$0(){A.dg(this.a,this.b)},
$S:0}
A.l_.prototype={
$0(){A.dg(this.b,this.a.a)},
$S:0}
A.kW.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.ar(p.$ti.c.a(a))}catch(q){s=A.bc(q)
r=A.bx(q)
p.M(s,r)}},
$S:21}
A.kX.prototype={
$2(a,b){this.a.M(t.K.a(a),t.l.a(b))},
$S:23}
A.kY.prototype={
$0(){this.a.M(this.b,this.c)},
$S:0}
A.kU.prototype={
$0(){this.a.ar(this.b)},
$S:0}
A.kZ.prototype={
$0(){A.kV(this.b,this.a)},
$S:0}
A.kT.prototype={
$0(){this.a.M(this.b,this.c)},
$S:0}
A.l2.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.f9(t.mY.a(q.d),t.z)}catch(p){s=A.bc(p)
r=A.bx(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.iP(s,r)
o.b=!0
return}if(l instanceof A.H&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.U.b(l)){n=m.b.a
q=m.a
q.c=l.d2(new A.l3(n),t.z)
q.b=!1}},
$S:0}
A.l3.prototype={
$1(a){return this.a},
$S:24}
A.l1.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bE(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bc(l)
r=A.bx(l)
q=this.a
q.c=A.iP(s,r)
q.b=!0}},
$S:0}
A.l0.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.eX(s)&&p.a.e!=null){p.c=p.a.eS(s)
p.b=!1}}catch(o){r=A.bc(o)
q=A.bx(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.iP(r,q)
n.b=!0}},
$S:0}
A.hx.prototype={}
A.cq.prototype={
gm(a){var s={},r=new A.H($.E,t.hy)
s.a=0
this.by(new A.kq(s,this),!0,new A.kr(s,r),r.gdK())
return r}}
A.kq.prototype={
$1(a){A.B(this.b).c.a(a);++this.a.a},
$S(){return A.B(this.b).i("~(1)")}}
A.kr.prototype={
$0(){this.b.c3(this.a.a)},
$S:0}
A.bn.prototype={}
A.eC.prototype={
ge2(){var s,r=this
if((r.b&8)===0)return A.B(r).i("bU<1>?").a(r.a)
s=A.B(r)
return s.i("bU<1>?").a(s.i("id<1>").a(r.a).gbK())},
dQ(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.ba(A.B(q).i("ba<1>"))
return A.B(q).i("ba<1>").a(s)}r=A.B(q)
s=r.i("id<1>").a(q.a).gbK()
return r.i("ba<1>").a(s)},
geg(){var s=this.a
if((this.b&8)!==0)s=t.d1.a(s).gbK()
return A.B(this).i("df<1>").a(s)},
dG(){if((this.b&4)!==0)return new A.bm("Cannot add event after closing")
return new A.bm("Cannot add event while adding a stream")},
k(a,b){var s,r=this,q=A.B(r)
q.c.a(b)
s=r.b
if(s>=4)throw A.d(r.dG())
if((s&1)!==0)r.bi(b)
else if((s&3)===0)r.dQ().k(0,new A.ct(b,q.i("ct<1>")))},
ef(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=A.B(l)
k.i("~(1)?").a(a)
t.Z.a(c)
if((l.b&3)!==0)throw A.d(A.ac("Stream has already been listened to."))
s=$.E
r=d?1:0
t.gS.B(k.c).i("1(2)").a(a)
A.pS(s,b)
q=c==null?A.qV():c
p=t.M
p.a(q)
o=new A.df(l,a,s,r,k.i("df<1>"))
n=l.ge2()
r=l.b|=1
if((r&8)!==0){m=k.i("id<1>").a(l.a)
m.sbK(o)
m.f7(0)}else l.a=o
o.ec(n)
k=p.a(new A.lc(l))
s=o.e
o.e=s|32
k.$0()
o.e&=4294967263
o.c0((s&4)!==0)
return o},
$inn:1,
$inA:1,
$icu:1}
A.lc.prototype={
$0(){A.mx(this.a.d)},
$S:0}
A.hy.prototype={
bi(a){var s=this.$ti
s.c.a(a)
this.geg().dE(new A.ct(a,s.i("ct<1>")))}}
A.dd.prototype={}
A.bR.prototype={
gt(a){return(A.co(this.a)^892482866)>>>0},
H(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bR&&b.a===this.a}}
A.df.prototype={
cf(){var s=this.x,r=A.B(s)
r.i("bn<1>").a(this)
if((s.b&8)!==0)r.i("id<1>").a(s.a).fs(0)
A.mx(s.e)},
cg(){var s=this.x,r=A.B(s)
r.i("bn<1>").a(this)
if((s.b&8)!==0)r.i("id<1>").a(s.a).f7(0)
A.mx(s.f)}}
A.ej.prototype={
ec(a){var s=this
A.B(s).i("bU<1>?").a(a)
if(a==null)return
s.sbf(a)
if(a.c!=null){s.e|=64
a.aV(s)}},
cf(){},
cg(){},
dE(a){var s=this,r=A.B(s),q=r.i("ba<1>?").a(s.r)
if(q==null)q=new A.ba(r.i("ba<1>"))
s.sbf(q)
q.k(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.aV(s)}},
bi(a){var s,r=this,q=A.B(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.d_(r.a,a,q)
r.e&=4294967263
r.c0((s&4)!==0)},
c0(a){var s,r,q=this,p=q.e
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
if(r)q.cf()
else q.cg()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.aV(q)},
sbf(a){this.r=A.B(this).i("bU<1>?").a(a)},
$ibn:1,
$icu:1}
A.eD.prototype={
by(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.ef(s.i("~(1)?").a(a),d,c,b===!0)},
cR(a){return this.by(a,null,null,null)}}
A.hF.prototype={}
A.ct.prototype={}
A.bU.prototype={
aV(a){var s,r=this
r.$ti.i("cu<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.o6(new A.l7(r,a))
r.a=1}}
A.l7.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("cu<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.B(r).i("cu<1>").a(s).bi(r.b)},
$S:0}
A.ba.prototype={
k(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.ie.prototype={}
A.eM.prototype={$inu:1}
A.lo.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.l(0)
throw s},
$S:0}
A.i6.prototype={
fb(a){var s,r,q,p,o
t.M.a(a)
try{if(B.j===$.E){a.$0()
return}A.nR(null,null,this,a,t.H)}catch(q){s=A.bc(q)
r=A.bx(q)
p=t.K.a(s)
o=t.l.a(r)
A.iH(p,o)}},
d_(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.j===$.E){a.$1(b)
return}A.nS(null,null,this,a,b,t.H,c)}catch(q){s=A.bc(q)
r=A.bx(q)
p=t.K.a(s)
o=t.l.a(r)
A.iH(p,o)}},
cw(a){return new A.l8(this,t.M.a(a))},
cz(a,b){return new A.l9(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
f9(a,b){b.i("0()").a(a)
if($.E===B.j)return a.$0()
return A.nR(null,null,this,a,b)},
bE(a,b,c,d){c.i("@<0>").B(d).i("1(2)").a(a)
d.a(b)
if($.E===B.j)return a.$1(b)
return A.nS(null,null,this,a,b,c,d)},
fa(a,b,c,d,e,f){d.i("@<0>").B(e).B(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.E===B.j)return a.$2(b,c)
return A.qI(null,null,this,a,b,c,d,e,f)},
bC(a,b,c,d){return b.i("@<0>").B(c).B(d).i("1(2,3)").a(a)}}
A.l8.prototype={
$0(){return this.a.fb(this.b)},
$S:0}
A.l9.prototype={
$1(a){var s=this.c
return this.a.d_(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.l6.prototype={
am(a){return A.lE(a)&1073741823},
an(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.ep.prototype={
h(a,b){if(!A.N(this.z.$1(b)))return null
return this.dm(b)},
j(a,b,c){var s=this.$ti
this.dq(s.c.a(b),s.Q[1].a(c))},
aM(a,b){if(!A.N(this.z.$1(b)))return!1
return this.dl(b)},
K(a,b){if(!A.N(this.z.$1(b)))return null
return this.dn(b)},
am(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
an(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(A.N(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.l5.prototype={
$1(a){return this.a.b(a)},
$S:35}
A.cy.prototype={
gw(a){var s=this,r=new A.eq(s,s.r,A.B(s).i("eq<1>"))
r.c=s.e
return r},
gm(a){return this.a},
u(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else{r=this.dL(b)
return r}},
dL(a){var s=this.d
if(s==null)return!1
return this.ca(s[this.c4(a)],a)>=0},
k(a,b){var s,r,q=this
A.B(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.c1(s==null?q.b=A.mo():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.c1(r==null?q.c=A.mo():r,b)}else return q.dJ(0,b)},
dJ(a,b){var s,r,q,p=this
A.B(p).c.a(b)
s=p.d
if(s==null)s=p.d=A.mo()
r=p.c4(b)
q=s[r]
if(q==null)s[r]=[p.b4(b)]
else{if(p.ca(q,b)>=0)return!1
q.push(p.b4(b))}return!0},
c1(a,b){A.B(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.b4(b)
return!0},
b4(a){var s=this,r=new A.hW(A.B(s).c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
c4(a){return J.cF(a)&1073741823},
ca(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1}}
A.hW.prototype={}
A.eq.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.bC(q))
else if(r==null){s.sc2(null)
return!1}else{s.sc2(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sc2(a){this.d=this.$ti.i("1?").a(a)},
$ia4:1}
A.jH.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:42}
A.dV.prototype={$ip:1,$if:1,$in:1}
A.i.prototype={
gw(a){return new A.bk(a,this.gm(a),A.aS(a).i("bk<i.E>"))},
v(a,b){return this.h(a,b)},
aN(a,b,c,d){var s,r=A.aS(a)
d=r.i("i.E").a(r.i("i.E?").a(d))
A.mk(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
l(a){return A.md(a,"[","]")}}
A.dX.prototype={}
A.jL.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.z(a)
r.a=s+": "
r.a+=A.z(b)},
$S:46}
A.w.prototype={
C(a,b){var s,r,q=A.aS(a)
q.i("~(w.K,w.V)").a(b)
for(s=J.aH(this.gL(a)),q=q.i("w.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gal(a){return J.oU(this.gL(a),new A.jN(a),A.aS(a).i("cX<w.K,w.V>"))},
gm(a){return J.al(this.gL(a))},
l(a){return A.mi(a)},
$iQ:1}
A.jN.prototype={
$1(a){var s,r=this.a,q=A.aS(r)
q.i("w.K").a(a)
s=q.i("w.V")
return new A.cX(a,s.a(J.mL(r,a)),q.i("@<w.K>").B(s).i("cX<1,2>"))},
$S(){return A.aS(this.a).i("cX<w.K,w.V>(w.K)")}}
A.ea.prototype={
G(a,b){var s
for(s=J.aH(A.B(this).i("f<1>").a(b));s.n();)this.k(0,s.gp(s))},
l(a){return A.md(this,"{","}")}}
A.ex.prototype={$ip:1,$if:1,$inm:1}
A.er.prototype={}
A.eN.prototype={}
A.c7.prototype={
H(a,b){if(b==null)return!1
return b instanceof A.c7&&this.a===b.a&&!0},
R(a,b){return B.e.R(this.a,t.cs.a(b).a)},
gt(a){var s=this.a
return(s^B.e.cn(s,30))&1073741823},
l(a){var s=this,r=A.p5(A.pA(s)),q=A.fd(A.py(s)),p=A.fd(A.pu(s)),o=A.fd(A.pv(s)),n=A.fd(A.px(s)),m=A.fd(A.pz(s)),l=A.p6(A.pw(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
return k},
$iag:1}
A.a8.prototype={
H(a,b){if(b==null)return!1
return b instanceof A.a8&&this.a===b.a},
gt(a){return B.e.gt(this.a)},
R(a,b){return B.e.R(this.a,t.L.a(b).a)},
l(a){var s,r,q,p,o,n=this.a,m=B.e.O(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.e.O(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.e.O(n,1e6)
p=q<10?"0":""
o=B.w.cW(B.e.l(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o},
$iag:1}
A.kQ.prototype={}
A.J.prototype={
gaB(){return A.bx(this.$thrownJsError)}}
A.dy.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fi(s)
return"Assertion failed"}}
A.bP.prototype={}
A.fP.prototype={
l(a){return"Throw of null."}}
A.b_.prototype={
gb7(){return"Invalid argument"+(!this.a?"(s)":"")},
gb6(){return""},
l(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+A.z(n),l=q.gb7()+o+m
if(!q.a)return l
s=q.gb6()
r=A.fi(q.b)
return l+s+": "+r}}
A.d2.prototype={
gb7(){return"RangeError"},
gb6(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.z(q):""
else if(q==null)s=": Not greater than or equal to "+A.z(r)
else if(q>r)s=": Not in inclusive range "+A.z(r)+".."+A.z(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.z(r)
return s}}
A.fr.prototype={
gb7(){return"RangeError"},
gb6(){if(A.I(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.hq.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.hn.prototype={
l(a){var s="UnimplementedError: "+this.a
return s}}
A.bm.prototype={
l(a){return"Bad state: "+this.a}}
A.f9.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fi(s)+"."}}
A.fS.prototype={
l(a){return"Out of Memory"},
gaB(){return null},
$iJ:1}
A.ec.prototype={
l(a){return"Stack Overflow"},
gaB(){return null},
$iJ:1}
A.fc.prototype={
l(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.hM.prototype={
l(a){return"Exception: "+this.a}}
A.f.prototype={
cS(a,b,c){var s=A.B(this)
return A.nc(this,s.B(c).i("1(f.E)").a(b),s.i("f.E"),c)},
aT(a,b){var s=A.B(this)
return new A.a5(this,s.i("A(f.E)").a(b),s.i("a5<f.E>"))},
C(a,b){var s
A.B(this).i("~(f.E)").a(b)
for(s=this.gw(this);s.n();)b.$1(s.gp(s))},
gm(a){var s,r=this.gw(this)
for(s=0;r.n();)++s
return s},
ga9(a){var s,r=this.gw(this)
if(!r.n())throw A.d(A.n4())
s=r.gp(r)
if(r.n())throw A.d(A.n5())
return s},
v(a,b){var s,r,q
A.kc(b,"index")
for(s=this.gw(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.d(A.R(b,this,"index",null,r))},
l(a){return A.n3(this,"(",")")}}
A.a4.prototype={}
A.cX.prototype={
l(a){return"MapEntry("+A.z(this.a)+": "+A.z(this.b)+")"}}
A.U.prototype={
gt(a){return A.v.prototype.gt.call(this,this)},
l(a){return"null"}}
A.v.prototype={$iv:1,
H(a,b){return this===b},
gt(a){return A.co(this)},
l(a){return"Instance of '"+A.k8(this)+"'"},
toString(){return this.l(this)}}
A.ii.prototype={
l(a){return""},
$iaX:1}
A.hc.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.t.prototype={}
A.iL.prototype={
gm(a){return a.length}}
A.cH.prototype={
seT(a,b){a.href=b},
l(a){return String(a)},
$icH:1}
A.eZ.prototype={
l(a){return String(a)}}
A.cL.prototype={$icL:1}
A.f3.prototype={}
A.c1.prototype={
gbz(a){return new A.bS(a,"load",!1,t.bz)},
$ic1:1}
A.c2.prototype={
sa3(a,b){a.height=b},
sa5(a,b){a.width=b},
bM(a,b){return a.getContext(b)},
$ic2:1}
A.cN.prototype={
seO(a,b){a.fillStyle=b},
$icN:1}
A.b2.prototype={
gm(a){return a.length}}
A.j4.prototype={
gm(a){return a.length}}
A.G.prototype={$iG:1}
A.cQ.prototype={
aq(a,b){var s=$.o9(),r=s[b]
if(typeof r=="string")return r
r=this.eh(a,b)
s[b]=r
return r},
eh(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.ob()+b
if(s in a)return s
return b},
au(a,b,c,d){if(d==null)d=""
a.setProperty(b,c,d)},
gm(a){return a.length}}
A.j5.prototype={}
A.aT.prototype={}
A.be.prototype={}
A.j6.prototype={
gm(a){return a.length}}
A.j7.prototype={
gm(a){return a.length}}
A.j8.prototype={
gm(a){return a.length},
h(a,b){return a[b]}}
A.cR.prototype={$icR:1}
A.b5.prototype={$ib5:1}
A.bG.prototype={
l(a){return String(a)},
$ibG:1}
A.ff.prototype={
eJ(a,b){return a.createHTMLDocument(b)}}
A.dH.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.mx.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.dI.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.z(r)+", "
s=a.top
s.toString
return r+A.z(s)+") "+A.z(this.ga5(a))+" x "+A.z(this.ga3(a))},
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
if(s===r){s=J.bZ(b)
s=this.ga5(a)===s.ga5(b)&&this.ga3(a)===s.ga3(b)}else s=!1}else s=!1}else s=!1
return s},
gt(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.k4(r,s,this.ga5(a),this.ga3(a))},
gcc(a){return a.height},
ga3(a){var s=this.gcc(a)
s.toString
return s},
gcq(a){return a.width},
ga5(a){var s=this.gcq(a)
s.toString
return s},
$ib8:1}
A.fg.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
A.P(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.j9.prototype={
gm(a){return a.length}}
A.M.prototype={
gez(a){return new A.hK(a)},
l(a){return a.localName},
S(a,b,c,d){var s,r,q,p
if(c==null){s=$.n_
if(s==null){s=A.c([],t.lN)
r=new A.e2(s)
B.a.k(s,A.nw(null))
B.a.k(s,A.nB())
$.n_=r
d=r}else d=s
s=$.mZ
if(s==null){s=new A.eL(d)
$.mZ=s
c=s}else{s.a=d
c=s}}if($.bH==null){s=document
r=s.implementation
r.toString
r=B.de.eJ(r,"")
$.bH=r
$.m9=r.createRange()
r=$.bH.createElement("base")
t.az.a(r)
s=s.baseURI
s.toString
r.href=s
$.bH.head.appendChild(r)}s=$.bH
if(s.body==null){r=s.createElement("body")
B.dj.seA(s,t.hp.a(r))}s=$.bH
if(t.hp.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.bH.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!B.a.u(B.dD,a.tagName)){$.m9.selectNodeContents(q)
s=$.m9
p=s.createContextualFragment(b)}else{J.oV(q,b)
p=$.bH.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.bH.body)J.mO(q)
c.bO(p)
document.adoptNode(p)
return p},
eI(a,b,c){return this.S(a,b,c,null)},
scK(a,b){this.aX(a,b)},
aX(a,b){this.sd1(a,null)
a.appendChild(this.S(a,b,null,null))},
sdY(a,b){a.innerHTML=b},
gd0(a){return a.tagName},
gbz(a){return new A.bS(a,"load",!1,t.bz)},
$iM:1}
A.jg.prototype={
$1(a){return t.h.b(t.A.a(a))},
$S:58}
A.l.prototype={$il:1}
A.e.prototype={
ev(a,b,c,d){t.du.a(c)
if(c!=null)this.dD(a,b,c,!1)},
dD(a,b,c,d){return a.addEventListener(b,A.bb(t.du.a(c),1),!1)},
$ie:1}
A.ax.prototype={$iax:1}
A.fj.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.et.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.fk.prototype={
gm(a){return a.length}}
A.fm.prototype={
gm(a){return a.length}}
A.ay.prototype={$iay:1}
A.jv.prototype={
gm(a){return a.length}}
A.cb.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.A.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.dO.prototype={
seA(a,b){a.body=b}}
A.dP.prototype={
f1(a,b,c){return a.open(b,c)}}
A.cc.prototype={}
A.cV.prototype={$icV:1}
A.bi.prototype={$ibi:1}
A.dW.prototype={
l(a){return String(a)},
$idW:1}
A.ck.prototype={}
A.jP.prototype={
gm(a){return a.length}}
A.fC.prototype={
h(a,b){return A.bY(a.get(A.P(b)))},
C(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bY(r.value[1]))}},
gL(a){var s=A.c([],t.s)
this.C(a,new A.jS(s))
return s},
gm(a){return a.size},
$iQ:1}
A.jS.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.fD.prototype={
h(a,b){return A.bY(a.get(A.P(b)))},
C(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bY(r.value[1]))}},
gL(a){var s=A.c([],t.s)
this.C(a,new A.jT(s))
return s},
gm(a){return a.size},
$iQ:1}
A.jT.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.aA.prototype={$iaA:1}
A.fE.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.ib.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.ar.prototype={$iar:1}
A.ai.prototype={
ga9(a){var s=this.a,r=s.childNodes.length
if(r===0)throw A.d(A.ac("No elements"))
if(r>1)throw A.d(A.ac("More than one element"))
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
A.I(b)
t.A.a(c)
s=this.a
r=s.childNodes
if(!(b>=0&&b<r.length))return A.b(r,b)
s.replaceChild(c,r[b])},
gw(a){var s=this.a.childNodes
return new A.c9(s,s.length,A.aS(s).i("c9<r.E>"))},
gm(a){return this.a.childNodes.length},
h(a,b){var s=this.a.childNodes
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b]}}
A.q.prototype={
f5(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
dI(a){var s
for(;s=a.firstChild,s!=null;)a.removeChild(s)},
l(a){var s=a.nodeValue
return s==null?this.di(a):s},
sd1(a,b){a.textContent=b},
$iq:1}
A.e1.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.A.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.aB.prototype={
gm(a){return a.length},
$iaB:1}
A.fW.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.d8.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.h2.prototype={
h(a,b){return A.bY(a.get(A.P(b)))},
C(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bY(r.value[1]))}},
gL(a){var s=A.c([],t.s)
this.C(a,new A.kf(s))
return s},
gm(a){return a.size},
$iQ:1}
A.kf.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.h4.prototype={
gm(a){return a.length}}
A.at.prototype={$iat:1}
A.h7.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.fm.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.aC.prototype={$iaC:1}
A.h8.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.cA.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.aD.prototype={
gm(a){return a.length},
$iaD:1}
A.hb.prototype={
h(a,b){return a.getItem(A.P(b))},
C(a,b){var s,r,q
t.bm.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gL(a){var s=A.c([],t.s)
this.C(a,new A.kp(s))
return s},
gm(a){return a.length},
$iQ:1}
A.kp.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:61}
A.ah.prototype={$iah:1}
A.ee.prototype={
S(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.aZ(a,b,c,d)
s=A.p9("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
new A.ai(r).G(0,new A.ai(s))
return r}}
A.he.prototype={
S(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.aZ(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=new A.ai(B.b3.S(s.createElement("table"),b,c,d))
s=new A.ai(s.ga9(s))
new A.ai(r).G(0,new A.ai(s.ga9(s)))
return r}}
A.hf.prototype={
S(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.aZ(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=new A.ai(B.b3.S(s.createElement("table"),b,c,d))
new A.ai(r).G(0,new A.ai(s.ga9(s)))
return r}}
A.d7.prototype={
aX(a,b){var s,r
this.sd1(a,null)
s=a.content
s.toString
J.oO(s)
r=this.S(a,b,null,null)
a.content.appendChild(r)},
$id7:1}
A.av.prototype={$iav:1}
A.ad.prototype={$iad:1}
A.hh.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.gJ.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.hi.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.dQ.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.kx.prototype={
gm(a){return a.length}}
A.aE.prototype={$iaE:1}
A.hk.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.ki.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.ky.prototype={
gm(a){return a.length}}
A.b9.prototype={}
A.kB.prototype={
l(a){return String(a)}}
A.da.prototype={$ida:1}
A.hs.prototype={
gm(a){return a.length}}
A.dc.prototype={
cZ(a,b){var s
t.hv.a(b)
this.dR(a)
s=A.nU(b,t.cZ)
s.toString
return this.e6(a,s)},
e6(a,b){return a.requestAnimationFrame(A.bb(t.hv.a(b),1))},
dR(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ikH:1}
A.de.prototype={$ide:1}
A.hC.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.d5.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.el.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.z(r)+", "
s=a.top
s.toString
s=r+A.z(s)+") "
r=a.width
r.toString
r=s+A.z(r)+" x "
s=a.height
s.toString
return r+A.z(s)},
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
r=J.bZ(b)
if(s===r.ga5(b)){s=a.height
s.toString
r=s===r.ga3(b)
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
return A.k4(p,s,r,q)},
gcc(a){return a.height},
ga3(a){var s=a.height
s.toString
return s},
gcq(a){return a.width},
ga5(a){var s=a.width
s.toString
return s}}
A.hQ.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.ef.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.es.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.A.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.ib.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.hH.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.ij.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.lv.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iy:1,
$if:1,
$in:1}
A.hA.prototype={
C(a,b){var s,r,q,p,o
t.bm.a(b)
for(s=this.gL(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
b.$2(o,A.P(q.getAttribute(o)))}},
gL(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=A.c([],t.s)
for(r=m.length,q=t.nD,p=0;p<r;++p){if(!(p<m.length))return A.b(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
B.a.k(s,n)}}return s}}
A.hK.prototype={
h(a,b){return this.a.getAttribute(A.P(b))},
gm(a){return this.gL(this).length}}
A.ma.prototype={}
A.em.prototype={
by(a,b,c,d){var s=A.B(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.cv(this.a,this.b,a,!1,s.c)}}
A.bS.prototype={}
A.en.prototype={}
A.kR.prototype={
$1(a){return this.a.$1(t.R.a(a))},
$S:12}
A.cx.prototype={
dw(a){var s
if($.eo.geW($.eo)){for(s=0;s<262;++s)$.eo.j(0,B.dz[s],A.ra())
for(s=0;s<12;++s)$.eo.j(0,B.a8[s],A.rb())}},
aj(a){return $.ou().u(0,A.dK(a))},
aa(a,b,c){var s=$.eo.h(0,A.dK(a)+"::"+b)
if(s==null)s=$.eo.h(0,"*::"+b)
if(s==null)return!1
return A.qd(s.$4(a,b,c,this))},
$iaV:1}
A.r.prototype={
gw(a){return new A.c9(a,this.gm(a),A.aS(a).i("c9<r.E>"))}}
A.e2.prototype={
aj(a){return B.a.bk(this.a,new A.k0(a))},
aa(a,b,c){return B.a.bk(this.a,new A.k_(a,b,c))},
$iaV:1}
A.k0.prototype={
$1(a){return t.hU.a(a).aj(this.a)},
$S:14}
A.k_.prototype={
$1(a){return t.hU.a(a).aa(this.a,this.b,this.c)},
$S:14}
A.ey.prototype={
dz(a,b,c,d){var s,r,q
this.a.G(0,c)
s=b.aT(0,new A.la())
r=b.aT(0,new A.lb())
this.b.G(0,s)
q=this.c
q.G(0,B.aS)
q.G(0,r)},
aj(a){return this.a.u(0,A.dK(a))},
aa(a,b,c){var s=this,r=A.dK(a),q=s.c
if(q.u(0,r+"::"+b))return s.d.ex(c)
else if(q.u(0,"*::"+b))return s.d.ex(c)
else{q=s.b
if(q.u(0,r+"::"+b))return!0
else if(q.u(0,"*::"+b))return!0
else if(q.u(0,r+"::*"))return!0
else if(q.u(0,"*::*"))return!0}return!1},
$iaV:1}
A.la.prototype={
$1(a){return!B.a.u(B.a8,A.P(a))},
$S:15}
A.lb.prototype={
$1(a){return B.a.u(B.a8,A.P(a))},
$S:15}
A.il.prototype={
aa(a,b,c){if(this.dr(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.u(0,b)
return!1}}
A.ld.prototype={
$1(a){return"TEMPLATE::"+A.P(a)},
$S:25}
A.ik.prototype={
aj(a){var s
if(t.nZ.b(a))return!1
s=t.bC.b(a)
if(s&&A.dK(a)==="foreignObject")return!1
if(s)return!0
return!1},
aa(a,b,c){if(b==="is"||B.w.dh(b,"on"))return!1
return this.aj(a)},
$iaV:1}
A.c9.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.scd(J.mL(s.a,r))
s.c=r
return!0}s.scd(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
scd(a){this.d=this.$ti.i("1?").a(a)},
$ia4:1}
A.hE.prototype={$ie:1,$ikH:1}
A.i8.prototype={$ipM:1}
A.eL.prototype={
bO(a){var s,r=new A.lj(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
at(a,b){++this.b
if(b==null||b!==a.parentNode)J.mO(a)
else b.removeChild(a)},
e9(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.oS(a)
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
try{r=J.ds(a)}catch(p){}try{q=A.dK(a)
this.e8(t.h.a(a),b,n,r,q,t.av.a(m),A.nJ(l))}catch(p){if(A.bc(p) instanceof A.b_)throw p
else{this.at(a,b)
window
o="Removing corrupted element "+A.z(r)
if(typeof console!="undefined")window.console.warn(o)}}},
e8(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.at(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aj(a)){m.at(a,b)
window
s="Removing disallowed element <"+e+"> from "+A.z(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.aa(a,"is",g)){m.at(a,b)
window
s="Removing disallowed type extension <"+e+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.gL(f)
r=A.c(s.slice(0),A.a1(s))
for(q=f.gL(f).length-1,s=f.a;q>=0;--q){if(!(q<r.length))return A.b(r,q)
p=r[q]
o=m.a
n=J.oX(p)
A.P(p)
if(!o.aa(a,n,A.P(s.getAttribute(p)))){window
o="Removing disallowed attribute <"+e+" "+p+'="'+A.z(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.fD.b(a)){s=a.content
s.toString
m.bO(s)}},
$ipr:1}
A.lj.prototype={
$2(a,b){var s,r,q,p,o,n,m=this.a
switch(a.nodeType){case 1:m.e9(a,b)
break
case 8:case 11:case 3:case 4:break
default:m.at(a,b)}s=a.lastChild
for(q=t.A;s!=null;){r=null
try{r=s.previousSibling
if(r!=null){p=r.nextSibling
o=s
o=p==null?o!=null:p!==o
p=o}else p=!1
if(p){p=A.ac("Corrupt HTML")
throw A.d(p)}}catch(n){p=q.a(s);++m.b
o=p.parentNode
if(a!==o){if(o!=null)o.removeChild(p)}else a.removeChild(p)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:26}
A.hD.prototype={}
A.hG.prototype={}
A.hH.prototype={}
A.hI.prototype={}
A.hJ.prototype={}
A.hN.prototype={}
A.hO.prototype={}
A.hR.prototype={}
A.hS.prototype={}
A.hX.prototype={}
A.hY.prototype={}
A.hZ.prototype={}
A.i_.prototype={}
A.i0.prototype={}
A.i1.prototype={}
A.i4.prototype={}
A.i5.prototype={}
A.i7.prototype={}
A.ez.prototype={}
A.eA.prototype={}
A.i9.prototype={}
A.ia.prototype={}
A.ic.prototype={}
A.im.prototype={}
A.io.prototype={}
A.eE.prototype={}
A.eF.prototype={}
A.iq.prototype={}
A.ir.prototype={}
A.ix.prototype={}
A.iy.prototype={}
A.iz.prototype={}
A.iA.prototype={}
A.iB.prototype={}
A.iC.prototype={}
A.iD.prototype={}
A.iE.prototype={}
A.iF.prototype={}
A.iG.prototype={}
A.kI.prototype={
cF(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.k(r,a)
B.a.k(this.b,null)
return q},
bL(a){var s,r,q,p,o,n,m,l,k=this,j={}
if(a==null)return a
if(A.lm(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.T(A.cI("DateTime is outside valid range: "+s,null))
A.eR(!0,"isUtc",t.k4)
return new A.c7(s,!0)}if(a instanceof RegExp)throw A.d(A.mm("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.ro(a,t.z)
if(A.o2(a)){q=k.cF(a)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=j.a=r[q]
if(p!=null)return p
o=t.z
p=A.ab(o,o)
j.a=p
B.a.j(r,q,p)
k.eP(a,new A.kK(j,k))
return j.a}if(a instanceof Array){n=a
q=k.cF(n)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p!=null)return p
o=J.aw(n)
m=o.gm(n)
p=k.c?new Array(m):n
B.a.j(r,q,p)
for(r=J.cC(p),l=0;l<m;++l)r.j(p,l,k.bL(o.h(n,l)))
return p}return a}}
A.kK.prototype={
$2(a,b){var s=this.a.a,r=this.b.bL(b)
J.mM(s,a,r)
return r},
$S:27}
A.kJ.prototype={
eP(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.C)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.k2.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.lN.prototype={
$1(a){return this.a.a2(0,this.b.i("0/?").a(a))},
$S:8}
A.lO.prototype={
$1(a){if(a==null)return this.a.aL(new A.k2(a===undefined))
return this.a.aL(a)},
$S:8}
A.hT.prototype={
D(a){if(a<=0||a>4294967296)throw A.d(A.pB("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
T(){return Math.random()},
eZ(){return Math.random()<0.5},
$inh:1}
A.aK.prototype={$iaK:1}
A.fw.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.I(b)
t.kT.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){return this.h(a,b)},
$ip:1,
$if:1,
$in:1}
A.aN.prototype={$iaN:1}
A.fQ.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.I(b)
t.ai.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){return this.h(a,b)},
$ip:1,
$if:1,
$in:1}
A.k7.prototype={
gm(a){return a.length}}
A.d5.prototype={$id5:1}
A.hd.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.I(b)
A.P(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){return this.h(a,b)},
$ip:1,
$if:1,
$in:1}
A.m.prototype={
scK(a,b){this.aX(a,b)},
S(a,b,c,d){var s,r,q,p,o,n=A.c([],t.lN)
B.a.k(n,A.nw(null))
B.a.k(n,A.nB())
B.a.k(n,new A.ik())
c=new A.eL(new A.e2(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=B.aq.eI(r,s,c)
p=n.createDocumentFragment()
n=new A.ai(q)
o=n.ga9(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
gbz(a){return new A.bS(a,"load",!1,t.bz)},
$im:1}
A.aP.prototype={$iaP:1}
A.hl.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.I(b)
t.hk.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
v(a,b){return this.h(a,b)},
$ip:1,
$if:1,
$in:1}
A.hU.prototype={}
A.hV.prototype={}
A.i2.prototype={}
A.i3.prototype={}
A.ig.prototype={}
A.ih.prototype={}
A.is.prototype={}
A.it.prototype={}
A.b0.prototype={
gm(a){return a.length},
$ib0:1}
A.dB.prototype={
seB(a,b){a.buffer=b}}
A.c0.prototype={
dN(a,b,c,d){t.p0.a(c)
t.lW.a(d)
return a.decodeAudioData(b,A.bb(c,1),A.bb(d,1))},
eK(a,b){var s=new A.H($.E,t.og),r=new A.aR(s,t.oJ)
this.dN(a,b,new A.iT(r),new A.iU(r))
return s},
$ic0:1}
A.iT.prototype={
$1(a){this.a.a2(0,t.bD.a(a))},
$S:28}
A.iU.prototype={
$1(a){this.a.aL(t.jW.a(a))},
$S:29}
A.F.prototype={
c5(a,b,c,d){return a.connect(b,c,d)},
$iF:1}
A.f_.prototype={
saS(a,b){a.value=b}}
A.f0.prototype={
h(a,b){return A.bY(a.get(A.P(b)))},
C(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bY(r.value[1]))}},
gL(a){var s=A.c([],t.s)
this.C(a,new A.iV(s))
return s},
gm(a){return a.size},
$iQ:1}
A.iV.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.bd.prototype={}
A.f1.prototype={
gm(a){return a.length}}
A.dC.prototype={}
A.cU.prototype={}
A.fR.prototype={
gm(a){return a.length}}
A.hB.prototype={}
A.f4.prototype={$if4:1}
A.fn.prototype={$ifn:1}
A.fX.prototype={$ifX:1}
A.d3.prototype={
cA(a,b){return a.bindVertexArray(b)},
cv(a,b,c){return a.bindBuffer(b,c)},
av(a,b,c){return a.bindFramebuffer(b,c)},
P(a,b,c){return a.bindTexture(b,c)},
cC(a,b){return a.deleteTexture(b)},
bu(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
az(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.mv(g)){s.ei(a,b,c,d,e,f,g,h,i,j)
return}if(t.hQ.b(g)&&h==null&&r&&j==null){s.ej(a,b,c,d,e,f,g)
return}if(t.p.b(g)&&h==null&&r&&j==null){s.ek(a,b,c,d,e,f,g)
return}if(t.eL.b(g)&&h==null&&r&&j==null){s.el(a,b,c,d,e,f,g)
return}throw A.d(A.cI("Incorrect number or type of arguments",null))},
fd(a,b,c,d,e,f,g){return this.az(a,b,c,d,e,f,g,null,null,null)},
ei(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
ej(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ek(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
el(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fi(a,b,c){return a.uniform1f(b,c)},
fj(a,b,c){return a.uniform1i(b,c)},
fk(a,b,c,d){return a.uniform2f(b,c,d)},
fl(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fm(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fo(a,b){return a.useProgram(b)},
$id3:1}
A.bo.prototype={$ibo:1}
A.hm.prototype={$ihm:1}
A.hr.prototype={$ihr:1}
A.fq.prototype={
b5(a){var s=this.b
if(!(a>=0&&a<s.length))return A.b(s,a)
s=s[a]
return s==null?this.$ti.c.a(null):s},
k(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b);++o.d
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.b6(q,null,!1,n.i("1?"))
B.a.bP(p,0,o.c,o.b)
o.sbg(p)}o.b2(b,o.c++)},
gm(a){return this.c},
K(a,b){var s,r,q=this
q.$ti.c.a(b)
s=q.dZ(b)
if(s<0)return!1;++q.d
r=q.e4()
if(s<q.c)if(q.a.$2(r,b)<=0)q.b2(r,s)
else q.bY(r,s)
return!0},
em(){var s,r,q=this.$ti,p=A.c([],q.i("u<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
l(a){var s=this.b
return A.n3(A.nq(s,0,A.eR(this.c,"count",t.S),A.a1(s).c),"(",")")},
aC(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.b6(q,null,!1,n.i("1?"))
B.a.bP(p,0,o.c,o.b)
o.sbg(p)}o.b2(b,o.c++)},
dZ(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.b5(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.W(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
e4(){var s=this,r=s.c-1,q=s.b5(r)
B.a.j(s.b,r,null)
s.c=r
return q},
b2(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.e.O(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.U()
if(q>0)break
B.a.j(o.b,b,p)}B.a.j(o.b,b,a)},
bY(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.$ti.c
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
if(p<q){j=i.b5(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sbg(a){this.b=this.$ti.i("n<1?>").a(a)}}
A.lh.prototype={
gw(a){var s=this.a
return new A.cz(s,s.d,this.$ti.i("cz<1>"))}}
A.cz.prototype={
n(){var s,r=this,q=r.a
if(r.b!==q.d)throw A.d(A.bC(q))
s=r.d+1
if(0<=s&&s<q.c){q=q.b
if(!(s>=0&&s<q.length))return A.b(q,s)
r.sck(q[s])
r.d=s
return!0}r.sck(null)
r.d=-2
return!1},
gp(a){var s
if(this.d<0)s=A.T(A.ac("No element"))
else{s=this.c
if(s==null)s=this.$ti.c.a(null)}return s},
sck(a){this.c=this.$ti.i("1?").a(a)},
$ia4:1}
A.j.prototype={
H(a,b){if(b==null)return!1
return b instanceof A.j&&b.a===this.a},
gt(a){return B.e.gt(this.a)},
l(a){return"Color(0x"+B.w.cW(B.e.fg(this.a,16),8,"0")+")"}}
A.Z.prototype={
cH(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.e.aA(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.d(A.ac(b.l(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.e.aA(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.d(A.mb(b.l(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
a1(a,b,c){var s=B.e.aA(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
F(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.e.aA(d*s+c)
q=p.c
if(r>=q.length)throw A.d(A.mb("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
l(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.e.aA(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.z(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.fO.prototype={
saS(a,b){var s,r,q,p=this
p.$ti.c.a(b)
if(b===p.b)return
p.ser(b)
s=p.a
r=A.c(s.slice(0),A.a1(s))
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.C)(r),++q)r[q].$0()},
ser(a){this.b=this.$ti.c.a(a)}}
A.aO.prototype={
E(a,b){return new A.aO(this.a+b.a,this.b+b.b)},
H(a,b){if(b==null)return!1
return b instanceof A.aO&&b.a===this.a&&b.b===this.b},
gt(a){return A.k4(this.a,this.b,B.C,B.C)},
l(a){return"Offset("+B.c.d3(this.a,1)+", "+B.c.d3(this.b,1)+")"}}
A.cG.prototype={
gX(a){return B.c.A(this.b.d/24)},
gY(a){return B.c.A(this.b.e/36)},
q(){var s=this.b
return new A.k(B.c.A(s.d/24),B.c.A(s.e/36))},
$idN:1,
gbx(){return null}}
A.iK.prototype={}
A.iJ.prototype={
ey(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.b
c.f0()
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
n=b.y.a0(s)
for(p=o.a,m=p.length,l=n.c,k=n.a,j=l.length,c=c.a,i=0;i<p.length;p.length===m||(0,A.C)(p),++i){h=p[i]
if(h.e)continue
g=h.q()
if(g==null)continue
f=g.ax(s)
e=g.b*k+g.a
if(!(e>=0&&e<j))return A.b(l,e)
if(l[e]<=0||h===a)continue
if(!A.o1(h,a))B.a.k(q,h)
else if(f<10.5){B.a.k(r,h)
e=h.q()
d=e.b*100+e.a
if(!(d>=0&&d<4000))return A.b(c,d)
B.e6.j(c,d,Math.max(c[d],20))}}c=this.a.a_(a,r,q,new A.ae(null,null),b).a
if(c==null)return new A.d6()
return c}}
A.ae.prototype={}
A.an.prototype={}
A.bM.prototype={
a_(a,b,c,d,e){var s,r,q=null,p=t.k
p.a(b)
p.a(c)
if(d.b!=null)return d
p=a.r
s=p==null
if((s?q:p.c)!=null)r=B.a.u(b,s?q:p.c)
else r=!1
if(r){if(s)p=q
else{p=p.c
p.toString}return new A.ae(q,p)}return d}}
A.bN.prototype={
a_(a,b,c,d,e){var s,r=t.k
r.a(b)
r.a(c)
if(d.b!=null)return d
if(0<b.length){s=b[0]
r=a.r
if(r!=null)r.c=s
return new A.ae(null,s)}return d}}
A.cO.prototype={
a_(a,b,c,d,e){var s,r,q=t.k
q.a(b)
q.a(c)
if(d.b!=null||c.length===0)return d
for(q=c.length,s=0;s<q;++s){r=c[s].r
if(r!=null&&r.c!=null){q=r.c
q.toString
return new A.ae(null,q)}}return d}}
A.bK.prototype={
a_(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=t.k
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
j=B.e.dc(q,100)
s=B.e.O(q,100)
m=$.dq()
l=a.q()
l.toString
k=m.aO(l,new A.k(j,s),r)
if(k==null)return d
j=k.b.d
s=a.q()
s.toString
return new A.ae(new A.aM(j.W(0,s),a),null)}}
A.h0.prototype={
a_(a,b,c,d,e){var s,r,q,p=t.k
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
q=e.fx.a.br(r,p,-1)
if(q==null)return d
this.b=!0
p=a.q()
p.toString
return new A.ae(new A.aM(q.W(0,p),a),null)}}
A.e7.prototype={
a_(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=t.k
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
return new A.ae(new A.aM(q,a),d)}c=a.q()
c.toString
s=a2.fx.a
p=s.br(r,c,-1)
if(p==null){o=c.b*100+c.a
s=s.a
if(!(o>=0&&o<4000))return A.b(s,o)
n=s[o]
m=a2.y.a0(c)
for(c=m.c,l=m.a,k=c.length,j=d,i=1;i<100;++i)for(h=1;h<40;++h){o=h*100+i
if(!(o<4000))return A.b(s,o)
g=s[o]
f=h*l+i
if(!(f<k))return A.b(c,f)
if(c[f]>0&&g<n){j=new A.k(i,h)
n=g}}if(j!=null){c=$.dq()
s=a.q()
s.toString
e.a=c.aO(s,j,r)}return new A.ae(new A.d6(),d)}c=a.q()
c.toString
return new A.ae(new A.aM(p.W(0,c),a),d)}}
A.h1.prototype={
a_(a,b,c,d,e){var s,r,q,p,o,n,m=t.k
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
if(p.ax(o)<=s)return d}if(b.length===0)return d
m=a.q()
m.toString
n=e.fx.a.br(r,m,-1)
if(n==null)return d
m=a.q()
m.toString
return new A.ae(new A.aM(n.W(0,m),a),null)}}
A.lw.prototype={
$1(a){t.lZ.a(a)
return a.c===B.aL&&t.mm.a(a.b).a===this.a.Q.a},
$S:30}
A.bz.prototype={
a_(a,b,c,d,e){var s,r,q,p,o,n,m=t.k
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
s=$.dq()
q=a.q()
q.toString
p=m.q()
p.toString
o=s.aO(q,p,r)
if(o==null)return d
s=a.c.x
n=s.gbB()
if(n!=null&&o.gbp()<=n.ch/5){q=s.b.h(0,B.m)
q.toString
if(q.e===0)if(A.r9(s,n))return new A.ae(new A.e6(a),m)
else{s=o.b.d
q=a.q()
q.toString
return new A.ae(new A.aM(s.W(0,q),a),m)}s=m.q()
s.toString
return new A.ae(new A.e5(s,a),m)}s=o.b.d
q=a.q()
q.toString
return new A.ae(new A.aM(s.W(0,q),a),m)}}
A.b3.prototype={
a_(a,b,c,d,e){var s,r,q,p,o=t.k
o.a(b)
o.a(c)
for(o=this.a,s=o.length,r=d,q=0;q<o.length;o.length===s||(0,A.C)(o),++q,r=p){p=o[q].a_(a,b,c,r,e)
if(p.a!=null)return p}return r},
$ian:1}
A.bl.prototype={}
A.lX.prototype={
$0(){return new A.a0(2,6,0,0,B.aZ)},
$S:3}
A.lV.prototype={
$0(){return new A.b3(A.c([new A.bM(),new A.bN(),new A.e7(),new A.bz(),new A.bK()],t.a))},
$S:4}
A.lW.prototype={
$0(){return A.c([],t.I)},
$S:2}
A.lR.prototype={
$0(){return new A.a0(2,4,0,0,B.aa)},
$S:3}
A.lP.prototype={
$0(){return new A.b3(A.c([new A.bM(),new A.bN(),new A.e7(),new A.bz(),new A.bK()],t.a))},
$S:4}
A.lQ.prototype={
$0(){return A.c([],t.I)},
$S:2}
A.m_.prototype={
$0(){return new A.a0(10,7,0,0,B.aa)},
$S:3}
A.lY.prototype={
$0(){return new A.b3(A.c([new A.bM(),new A.bN(),new A.cO(),new A.bz(),new A.bK()],t.a))},
$S:4}
A.lZ.prototype={
$0(){return A.c([],t.I)},
$S:2}
A.m2.prototype={
$0(){return new A.a0(10,7,0,0,B.aZ)},
$S:3}
A.m0.prototype={
$0(){return new A.b3(A.c([new A.bM(),new A.bN(),new A.cO(),new A.h0(),new A.bz(),new A.bK()],t.a))},
$S:4}
A.m1.prototype={
$0(){var s=A.fs(B.O)
s.e=9
return A.c([s],t.I)},
$S:2}
A.lt.prototype={
$0(){return new A.a0(3,7,0,0,B.dT)},
$S:3}
A.lr.prototype={
$0(){return new A.b3(A.c([new A.bM(),new A.bN(),new A.cO(),new A.h1(6),new A.bz(),new A.bK()],t.a))},
$S:4}
A.ls.prototype={
$0(){return A.c([A.fs(B.O)],t.I)},
$S:2}
A.iZ.prototype={
fn(a,b,c,d,e,f){var s,r=this,q=Math.min(Math.max(B.c.ao(c*24-f/2),0),B.e.ao(2400-f)),p=Math.min(Math.max(B.c.ao(d*36-e/2),0),B.e.ao(1440-e)),o=r.c8(Math.abs(q-r.a)),n=r.c8(Math.abs(p-r.b))
if(b){r.a=q
r.b=p
return}s=r.a
if(q>s)r.a=s+o
else if(q<s)r.a=s-o
s=r.b
if(p>s)r.b=s+n
else if(p<s)r.b=s-n},
c8(a){if(a>30)return 6
if(a>20)return 4
return 1}}
A.a2.prototype={
h(a,b){return this.b.h(0,A.B(this).i("a2.T").a(b))}}
A.cj.prototype={}
A.cY.prototype={}
A.fo.prototype={
bv(a){return this.eR(t.h8.a(a))},
eR(a){var s=0,r=A.bv(t.H),q,p=this,o
var $async$bv=A.bw(function(b,c){if(b===1)return A.bq(c,r)
while(true)switch(s){case 0:if(p.a.r.c){s=1
break}o=p.e
if(o.length>3){s=1
break}B.a.k(o,a)
if(p.r){s=1
break}p.aF()
case 1:return A.br(q,r)}})
return A.bs($async$bv,r)},
aF(){var s=0,r=A.bv(t.z),q=1,p,o=[],n=this,m
var $async$aF=A.bw(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.r=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.a6(n.aE(),$async$aF)
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
case 4:return A.br(null,r)
case 1:return A.bq(p,r)}})
return A.bs($async$aF,r)},
cl(){var s=new A.H($.E,t.cU),r=new A.dh(s,t.iF)
B.a.k(this.a.f,t.x.a(t.gz.a(r.geH(r))))
return s},
N(){var s=0,r=A.bv(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$N=A.bw(function(a4,a5){if(a4===1)return A.bq(a5,r)
while(true)$async$outer:switch(s){case 0:a0=p.a
a1=a0.c
a2=a1.e
a3=a1.d
if(!(a3<a2.length)){q=A.b(a2,a3)
s=1
break}a3=a2[a3].a
o=A.c(a3.slice(0),A.a1(a3))
a2=p.b,a3=B.a.geu(a2),n=t.nt,m=a1.a.c,a1=p.f,l=a1.a,a1=a1.b,k=p.c,j=p.d,i=p.e,h=0,g=!1
case 4:if(!!0){s=5
break}case 6:if(!(f=a2.length,f!==0)){s=7
break}if(0>=f){q=A.b(a2,0)
s=1
break}s=8
return A.a6(a2[0].I(0,a0),$async$N)
case 8:e=a5
B.a.G(k,e.r)
case 9:if(!(f=e.a,f!=null)){s=10
break}B.a.j(a2,0,f)
s=11
return A.a6(f.I(0,a0),$async$N)
case 11:e=a5
B.a.G(k,e.r)
s=9
break
case 10:f=e.c
if(f!=null)A.mC(f)
d=e.x
s=d!=null?12:13
break
case 12:s=!e.f&&i.length===0?14:16
break
case 14:s=j.length!==0?17:18
break
case 17:s=19
return A.a6(p.c9(),$async$N)
case 19:case 18:s=20
return A.a6(p.as(d),$async$N)
case 20:s=15
break
case 16:B.a.k(j,d)
case 15:case 13:case 21:if(!(f=k.length,f!==0)){s=22
break}if(0>=f){q=A.b(k,-1)
s=1
break}s=23
return A.a6(k.pop().I(0,a0),$async$N)
case 23:c=a5
B.a.G(k,c.r)
case 24:if(!(f=c.a,f!=null)){s=25
break}s=26
return A.a6(f.I(0,a0),$async$N)
case 26:c=a5
B.a.G(k,c.r)
s=24
break
case 25:f=c.c
if(f!=null)A.mC(f)
s=21
break
case 22:if(e.d)g=B.du.dd(g,!0)
B.a.cY(a2,0)
l.saS(0,m.b/m.a)
a1.saS(0,m.d/1000)
s=6
break
case 7:if(!g){s=3
break}for(;f=o.length,h<f;){if(!(h>=0)){q=A.b(o,h)
s=1
break $async$outer}b=o[h];++h
if(b.q()==null)continue
if(A.rn(n.a(a3),b,a0)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=j.length!==0?27:29
break
case 27:s=i.length===0?30:32
break
case 30:s=33
return A.a6(p.c9(),$async$N)
case 33:s=31
break
case 32:s=34
return A.a6(p.aJ(),$async$N)
case 34:case 31:s=28
break
case 29:s=35
return A.a6(p.cl(),$async$N)
case 35:case 28:if(!g){s=1
break}for(a0=o.length,a=0;a<a0;++a)o[a].a=100
case 1:return A.br(q,r)}})
return A.bs($async$N,r)},
aJ(){var s=0,r=A.bv(t.H),q=this,p,o,n
var $async$aJ=A.bw(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.C)(p),++n)p[n].x.$0()
B.a.sm(p,0)
s=2
return A.a6(q.cl(),$async$aJ)
case 2:return A.br(null,r)}})
return A.bs($async$aJ,r)},
as(a){var s=0,r=A.bv(t.H),q=this,p
var $async$as=A.bw(function(b,c){if(b===1)return A.bq(c,r)
while(true)switch(s){case 0:p=new A.H($.E,t.cU)
if(a!=null)B.a.k(q.d,a)
B.a.k(q.a.f,t.x.a(new A.jq(q,new A.aR(p,t.ou))))
s=2
return A.a6(p,$async$as)
case 2:return A.br(null,r)}})
return A.bs($async$as,r)},
c9(){return this.as(null)},
aE(){var s=0,r=A.bv(t.H),q,p=this,o,n,m,l,k
var $async$aE=A.bw(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:k=p.e
if(k.length===0){s=1
break}k=B.a.cY(k,0).a
switch(k){case 0:case 1:case 2:case 3:switch(k){case 0:o=new A.k(0,-1)
break
case 1:o=new A.k(1,0)
break
case 2:o=new A.k(0,1)
break
case 3:o=new A.k(-1,0)
break
default:A.T(A.ac(""))
o=null}n=new A.aM(o,p.a.c.a)
break
case 4:n=new A.d6()
break
case 5:k=p.a
m=k.r.b?k.gaW().c:null
if(m==null){n=null
break}n=new A.e5(m,k.c.a)
break
case 9:n=p.dW()
break
case 19:n=new A.e6(p.a.c.a)
break
case 18:k=p.z
k=k==null?null:k.b
l=k==null
if(l)k=new A.fe(new Uint8Array(4000),A.ab(t.j,t.S))
n=p.z=new A.f2(p.a.c.a,k,l)
break
case 7:k=p.a.r
l=!k.b
k.b=l
if(l){k=document.body.style
B.l.au(k,B.l.aq(k,"cursor"),"crosshair",null)}else document.body.style.removeProperty("cursor")
n=null
break
case 8:k=p.a.r
if(k.b){k.b=!1
document.body.style.removeProperty("cursor")}n=null
break
default:n=null
break}s=n!=null?3:4
break
case 3:B.a.k(p.b,n)
s=5
return A.a6(p.N(),$async$aE)
case 5:case 4:case 1:return A.br(q,r)}})
return A.bs($async$aE,r)},
dW(){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Y)
for(s=this.a.c,r=s.e,q=s.a,p=-1;p<2;++p)for(o=-1;o<2;++o){n=q.q()
m=n.a+p
n=n.b+o
l=s.d
if(!(l<r.length))return A.b(r,l)
l=r[l].c
if(!(m>=0&&n>=0&&m<l.a&&n<l.b))continue
k=l.h(0,new A.k(m,n))
if(k.f!=null){n=s.d
if(!(n<r.length))return A.b(r,n)
B.a.G(i,A.o0(k,r[n]))}}s=i.length
if(s===0)return null
if(s===1){if(0>=s)return A.b(i,0)
j=i[0]}else j=null
if(j==null)return null
return j.b},
e3(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.L.a(a)
for(s=h.d,r=s.length,q=a.a,p=h.e,o=0;o<s.length;s.length===r||(0,A.C)(s),++o){n=s[o]
if(p.length>=2)n.d=1
m=n.e
l=m==null?0:B.e.O(q-m.a,1000)
n.e=a
k=l/B.e.O(n.a.a,1000)
j=n.f
i=n.d
i=n.d=B.c.eD(j?n.d=i+k:n.d=i-k,-1,1)
i>=1||i<0
n.r.$1(n)}B.a.k(h.a.f,t.x.a(h.gci()))}}
A.jq.prototype={
$1(a){var s,r,q,p,o,n,m
t.L.a(a)
s=A.c([],t.fy)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.C)(q),++n){m=q[n]
if(m.d>=1||o.length!==0){m.x.$0()
B.a.k(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.C)(s),++n)B.a.K(q,s[n])
if(q.length===0)this.b.aK(0)
else B.a.k(r.a.f,t.x.a(this))},
$S:16}
A.eb.prototype={
l(a){return"SlotType."+this.b}}
A.bg.prototype={
l(a){return"ItemType."+this.b}}
A.eY.prototype={}
A.aJ.prototype={
gbS(){switch(this.c.a){case 0:return B.ad
case 1:return B.ae
case 2:return B.af
case 3:case 4:case 5:case 6:return null}}}
A.j3.prototype={}
A.X.prototype={}
A.fp.prototype={
l(a){return"HandRequirement."+this.b}}
A.bE.prototype={
l(a){return"DamageType."+this.b}}
A.bF.prototype={
l(a){return"DiceType."+this.b}}
A.aQ.prototype={
l(a){return"WeaponProperties."+this.b}}
A.jQ.prototype={}
A.bD.prototype={}
A.c6.prototype={
l(a){return"CriticalEffect."+this.b}}
A.Y.prototype={}
A.du.prototype={
l(a){return"AmmoType."+this.b}}
A.dv.prototype={}
A.as.prototype={}
A.cJ.prototype={
l(a){return"ArmorUpgradeType."+this.b}}
A.am.prototype={}
A.eV.prototype={
ad(a){var s,r=a-10
if(r===0)return 0
else{s=r/2
if(r>0)return B.c.ae(s)
else return B.c.cB(s)}}}
A.c4.prototype={
cT(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x.gf3()
r=a.x.gbl()
q=A.dE(a0,1,B.ay)
p=b.y
o=p.a
n=q+p.ad(o)
m=a.y
l=10+Math.min(m.ad(m.b),r.e)
m=s.b
l=A.N(A.mY(m))?l+r.d:l+r.c
if(!a1)l-=2
k=t.Q
j=A.c([],k)
i=A.c([],k)
if(q===1){h=!1
g=!1}else{g=n>=l
if(q===20)h=!0
else{h=g
g=!1}}f="["+n+" vs "+A.z(l)+"]"
if(!h)return new A.cK(b.cx.a+" missed "+a.cx.a+" "+f,!1,0,B.Y,B.Y)
if(B.a.u(s.z,B.b9))B.a.k(j,new A.fa())
k=s.d
e=s.e
d=A.dE(a0,k,e)+p.ad(o)
if(g)d+=A.dE(a0,k,e)+p.ad(o)
B.a.u(b.ch,B.b1)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+s.y
return new A.cK(c,!0,d,j,i)},
cX(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x
r=s.gbB()
if(r==null)r=B.O
q=s.gbl()
s=b.y
p=Math.min(s.ad(s.b),q.e)
o=a.x.gbl()
n=A.dE(a0,1,B.ay)
m=n+p
l=a.y
k=10+Math.min(l.ad(l.b),o.e)
l=r.c
k=A.N(A.mY(l))?k+o.d:k+o.c
if(!a1)k-=2
j=t.Q
i=A.c([],j)
h=A.c([],j)
if(n===1){g=!1
f=!1}else{f=m>=k
if(n===20)g=!0
else{g=f
f=!1}}e="["+m+" vs "+A.z(k)+"]"
if(!g)return new A.cK(b.cx.a+" missed "+a.cx.a+" "+e,!1,0,B.Y,B.Y)
j=r.f
d=A.dE(a0,1,j)
if(f)d+=A.dE(a0,1,j)+s.ad(s.a)
B.a.u(b.ch,B.b1)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+r.a
return new A.cK(c,!0,d,i,h)}}
A.cK.prototype={}
A.cT.prototype={}
A.cS.prototype={
gbl(){var s,r,q
for(s=this.b,s=s.gal(s),s=s.gw(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.X)return q}return B.bq},
gf3(){var s,r,q
for(s=this.b,s=s.gal(s),s=s.gw(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.Y)return q}return B.e_},
gbB(){var s,r,q
for(s=this.b,s=s.gal(s),s=s.gw(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.as)return q}return null},
eN(a,b){var s=this.b
s.h(0,b)
s.j(0,b,a)}}
A.fT.prototype={
l(a){return"Perk."+this.b}}
A.c8.prototype={
l(a){return"EquipmentSlot."+this.b}}
A.fa.prototype={}
A.d8.prototype={
l(a){return"TileType."+this.b}}
A.dD.prototype={
l(a){return"CollisionMode."+this.b}}
A.fB.prototype={}
A.cr.prototype={
l(a){return"TerrainType."+this.b}}
A.au.prototype={
l(a){return"TerrainWidget."+this.b}}
A.cg.prototype={
l(a){return"LockState."+this.b}}
A.b1.prototype={
l(a){return"Biome."+this.b}}
A.bO.prototype={
gX(a){return this.b.a},
gY(a){return this.b.b},
sfc(a){t.dt.a(a)},
$idN:1,
gbx(){return this.z}}
A.fy.prototype={}
A.fz.prototype={$idN:1,
gbx(){return this.a},
gX(a){return this.b},
gY(a){return this.c}}
A.k.prototype={
H(a,b){if(b==null)return!1
return b instanceof A.k&&b.a===this.a&&b.b===this.b},
gt(a){return A.k4(this.a,this.b,B.C,B.C)},
E(a,b){return new A.k(this.a+b.a,this.b+b.b)},
W(a,b){return new A.k(this.a-b.a,this.b-b.b)},
bG(){return new A.aO(this.a,this.b)},
ax(a){var s=Math.abs(this.a-a.a),r=Math.abs(this.b-a.b)
return s+r+-0.6000000000000001*Math.min(s,r)},
l(a){return"("+this.a+", "+this.b+")"}}
A.jK.prototype={
l(a){return"LiquidKind."+this.b}}
A.a_.prototype={
l(a){return"Interactable."+this.b}}
A.jM.prototype={}
A.jR.prototype={
f0(){var s,r
for(s=this.a,r=0;r<4000;++r)s[r]=s[r]-1}}
A.cZ.prototype={
l(a){return"MonsterKind."+this.b}}
A.ja.prototype={
eo(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.a,i=j.a6(k,t.C),h=this.c
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.c.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.b||A.N(A.bf(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.d=r
j.ac(b,k,i)}}
A.je.prototype={
ah(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=t.t,p=t.n,o=t.g2,n=t.N,m=t.z,l=0;l<s.length;s.length===r||(0,A.C)(s),++l){k=s[l]
$.mG().a4(a,4,3,A.bj(["u_resolution",A.c([b.a,b.b],q),"u_time",k.gbq().geU().fq(0,k.geM(k).geU()),"u_offset",A.c([b.d,b.e],p),"u_origin",A.c([k.gX(k),k.gY(k)],o)],n,m))
k.sbq(k.gbq().E(0,A.jd(11)))}r=A.a1(s).i("A(1)").a(new A.jf())
if(!!s.fixed$length)A.T(A.D("removeWhere"))
B.a.e5(s,r,!0)}}
A.jf.prototype={
$1(a){t.ox.a(a)
return a.gbq().d4(0,a.geM(a))},
$S:36}
A.fh.prototype={}
A.jj.prototype={
ds(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=this
l.gV().a.J(l.a)
s=l.ch
s.a.J(l.a)
r=l.cx
r.a.J(l.a)
l.gbt().b.J(l.a)
q=l.gab()
p=l.a
q.d=p.createFramebuffer()
q.a.J(p)
q.b.J(p)
o=l.dy
if(o===$){q=A.aI(A.c([new A.V("a_position",35044,5126,2,new Float32Array(A.cB(B.x)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise(vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f * f * f + .6 * f * f + .5 * f) * color, 0.3);\n}\n",A.c([new A.x("u_resolution",B.f),new A.x("u_time",B.o),new A.x("u_offset",B.f),new A.x("u_player_vis_texture",B.k),new A.x("u_block_size",B.f)],t.o),u.h)
A.dj(l.dy,"weather")
o=l.dy=new A.kD(q)}o.b.J(l.a)
l.gaW().b.J(l.a)
q=l.a
$.mG().J(q)
$.oC().J(q)
l.id.a.J(l.a)
q=l.c
p=q.e
n=q.d
if(!(n<p.length))return A.b(p,n)
n=A.iI(p[n])
m=q.d
if(!(m<p.length))return A.b(p,m)
l.cI(n,p[m])
m=q.d
if(!(m<p.length))return A.b(p,m)
l.cr(q.a,A.iI(p[m]))
m=q.d
if(!(m<p.length))return A.b(p,m)
m=s.b=p[m]
s.c=!0
r.c=m
r.b=!0
r=l.y
r.cP(m.c)
r.cJ()
q=q.d
if(!(q<p.length))return A.b(p,q)
r.e=A.iI(p[q])
q=l.dx.b
new A.bR(q,A.B(q).i("bR<1>")).cR(new A.jk(l,l.d.getBoundingClientRect()))},
gV(){var s,r=this,q=r.Q
if(q===$){s=A.pH(r.a,r.y)
A.dj(r.Q,"sprites")
r.Q=s
q=s}return q},
gbt(){var s,r=this,q=r.cy
if(q===$){s=A.qj()
s=A.aI(A.c([new A.V("a_position",35044,5126,2,s),new A.V("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.l,A.c([new A.x("u_resolution",B.f),new A.x("u_offset",B.f)],t.o),u.q)
A.dj(r.cy,"fovRenderer")
q=r.cy=new A.jl(r.y,s,new A.k(-1,-1))}return q},
gab(){var s,r,q,p=this,o=u.p,n="a_position",m="u_player_visible_texture",l=p.db
if(l===$){s=t.G
r=t.o
q=A.aI(A.c([new A.V(n,35044,5126,2,new Float32Array(A.cB(B.x)))],s),u.z,A.c([new A.x("u_source_position",B.f),new A.x("u_source_color",B.b7),new A.x("u_source_strength",B.o),new A.x("u_time",B.o),new A.x("u_visible_texture",B.k),new A.x(m,B.k)],r),o)
r=A.aI(A.c([new A.V(n,35044,5126,2,new Float32Array(A.cB(B.x)))],s),u.A,A.c([new A.x("u_light_texture",B.k),new A.x("u_game_world_texture",B.k),new A.x(m,B.k),new A.x("u_resolution",B.f),new A.x("u_block_size",B.f),new A.x("u_offset",B.f)],r),o)
s=A.c([],t.ow)
A.dj(p.db,"lightingRenderer")
l=p.db=new A.fA(q,r,p.y,s)}return l},
gaW(){var s,r=this,q=r.fr
if(q===$){s=A.aI(A.c([new A.V("a_position",35048,5126,2,new Float32Array(12))],t.G),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nuniform float u_time;\nuniform float u_visible;\n\nvoid main() {\n  if (u_visible == 0.0) {\n    discard;\n    return;\n  }\n  float scale = (sin(u_time * 3.0) + 1.0) / 4.0;\n  outColor = vec4(0.509, 0.69411, 1.0, scale + 0.3);\n}\n",A.c([new A.x("u_offset",B.f),new A.x("u_resolution",B.f),new A.x("u_time",B.o),new A.x("u_visible",B.o)],t.o),"#version 300 es\nin vec2 a_position;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n")
A.dj(r.fr,"selectionRenderer")
q=r.fr=new A.kh(r.y,s,B.y)}return q},
gbF(){var s,r=this,q=r.fy
if(q===$){s=A.c([],t.ff)
A.dj(r.fy,"textRenderer")
q=r.fy=new A.kw(r.b,s)}return q},
ah(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=3553,a0=6408,a1=33071,a2=36160
t.cH.a(a4)
s=c.r
if(s.c)return
c.a=a4
r=c.d
q=r.clientWidth
p=r.clientHeight
if(q!==c.r1||p!==c.r2){B.D.sa5(r,q)
B.D.sa3(r,p)
o=c.e
B.D.sa5(o,q)
B.D.sa3(o,p)
n=r.getBoundingClientRect()
r=o.style
m=n.left
m.toString
m=A.z(m)+"px"
B.l.au(r,B.l.aq(r,"left"),m,b)
m=o.style
r=n.top
r.toString
r=A.z(r)+"px"
B.l.au(m,B.l.aq(m,"top"),r,b)
r=o.style
m=n.width
m.toString
m=A.z(m)+"px"
B.l.au(r,B.l.aq(r,"width"),m,b)
o=o.style
m=n.height
m.toString
m=A.z(m)+"px"
B.l.au(o,B.l.aq(o,"height"),m,b)
c.r1=q
c.r2=p
r=c.k1
if(r!=null)B.d.cC(a4,r)
r=c.k2
if(r!=null)B.d.cC(a4,r)
c.k1=a4.createTexture()
c.k2=a4.createTexture()
B.d.P(a4,a,c.k1)
B.d.az(a4,a,0,a0,c.r1,c.r2,0,a0,5121,b)
a4.texParameteri(a,10241,9729)
a4.texParameteri(a,10242,a1)
a4.texParameteri(a,10243,a1)
B.d.P(a4,a,c.k2)
B.d.az(a4,a,0,a0,c.r1,c.r2,0,a0,5121,b)
a4.texParameteri(a,10241,9729)
a4.texParameteri(a,10242,a1)
a4.texParameteri(a,10243,a1)}r=c.z
o=c.y.e
r.fn(0,c.ry,o.a,o.b,p,q)
o=c.x1
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
B.d.av(a4,a2,c.k3)
B.d.bu(a4,a2,36064,a,c.k1,0)
a4.clearColor(0,0,0,1)
a4.clear(16640)
m=c.ch
if(m.c){m.eq(a4)
m.c=!1}r=t.t
l=t.n
k=t.N
j=t.z
m.a.a4(a4,4,48e3,A.bj(["u_resolution",A.c([o.a,o.b],r),"u_offset",A.c([o.d,o.e],l)],k,j))
m=c.cx
if(m.b){m.eo(0,a4)
m.b=!1}m.a.a4(a4,0,B.e.O(m.d,2),A.bj(["u_resolution",A.c([o.a,o.b],r),"u_offset",A.c([o.d,o.e],l)],k,j))
c.gV().ah(a4,o)
m=c.k4
B.d.av(a4,a2,m)
B.d.bu(a4,a2,36064,a,c.k2,0)
a4.viewport(0,0,q,p)
a4.clearColor(0,0,0,1)
c.gab()
c.gab().f=c.k1
c.gab().y=m
c.gab().ah(a4,o)
m=c.gbt()
if(!m.a.e.H(0,m.c)||m.d)m.es(a4)
m.b.a4(a4,4,48e3,A.bj(["u_resolution",A.c([o.a,o.b],r),"u_offset",A.c([o.d,o.e],l)],k,j))
c.go.ah(a4,o)
if(s.b){s=c.gaW()
s.e1(a4,o)
m=A.c([o.a,o.b],r)
l=A.c([o.d,o.e],l)
i=o.c
h=s.a
h=h.a0(h.e)
g=s.c
h=h.a1(0,g.a,g.b)?1:0
s.b.a4(a4,4,6,A.bj(["u_resolution",m,"u_offset",l,"u_time",i/1000,"u_visible",h],k,j))}B.d.av(a4,a2,b)
s=c.id
s.b=c.k2
a4.activeTexture(33984)
B.d.P(a4,a,s.b)
s.a.a4(a4,4,3,A.bj(["u_resolution",A.c([o.a,o.b],r),"u_texture",0,"u_time",o.c/1000],k,j))
c.gbF().f6(o)
a4.finish()
f=A.jd(B.c.A(a3))
o=c.f
e=A.c(o.slice(0),A.a1(o))
B.a.sm(o,0)
for(s=e.length,d=0;d<e.length;e.length===s||(0,A.C)(e),++d)e[d].$1(f)
s=c.c.a.b
B.c.A(s.d/24)
B.c.A(s.e/36)
c.ry=!1},
bD(a){var s,r=this.c,q=r.e
r=r.d
if(!(r<q.length))return A.b(q,r)
B.a.K(q[r].a,a)
s=a.b
s.saf(-1)
s.sag(-1)
this.gV().K(0,s)},
bT(a,b){var s=a.b,r=B.c.A(s.d/24),q=B.c.A(s.e/36),p=b.b,o=B.c.A(p.d/24),n=B.c.A(p.e/36)
s.saf(o)
s.sag(n)
p.saf(r)
p.sag(q)
if(a.x){s=this.y
s.e=new A.k(o,n)
s.bI()}if(b.x){s=this.y
s.e=new A.k(r,q)
s.bI()}},
cU(a,b){var s=a.b
s.saf(b.a)
s.sag(b.b)
if(a.x){s=this.y
s.e=b
s.bI()}},
cs(a,b,c){var s,r,q,p
if(c==null){s=this.c
r=s.e
s=s.d
if(!(s<r.length))return A.b(r,s)
q=r[s]}else q=c
B.a.k(q.a,a)
p=a.b
p.saf(b.a)
p.sag(b.b)
p.sak(0,B.av)
s=this.gV()
p.sbw(0,1)
s.k(0,p)},
cr(a,b){return this.cs(a,b,null)},
cI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
B.a.sm(g.gab().x,0)
g.gV().eE(0)
s=g.ch
s.b=b
s.c=!0
s=g.cx
s.c=b
s.b=!0
s=g.y
r=b.c
s.cP(r)
s.cJ()
B.ab.aN(s.c,0,4000,0)
s.e=a
switch(b.d.a.a){case 3:q=B.cB
break
case 4:q=B.cp
break
default:q=B.cP
break}for(r=r.c,p=r.length,o=0;o<r.length;r.length===p||(0,A.C)(r),++o){n=r[o]
m=n.b
if(n.r!=null){l=new A.a0(11,13,m.a*24,m.b*36,null)
l.x=B.dV
l.y=-1
k=l.a=g.gV()
j=k.c
j.$ti.c.a(l);++j.d
j.aC(0,l)
k.e=!0}l=A.n1(n.f,m.a*24,m.b*36)
if(l!=null){k=l.a=g.gV()
j=k.c
j.$ti.c.a(l);++j.d
j.aC(0,l)
k.e=!0
n.y=l}k=n.f
if(k===B.N||k===B.J){n.z=new A.fy(q,7)
i=g.db
if(i===$){h=A.pm(s)
A.dj(i,"lightingRenderer")
g.db=h
i=h}B.a.k(i.x,n)}}for(s=b.a,r=s.length,o=0;o<s.length;s.length===r||(0,A.C)(s),++o){l=s[o].b
l.r=B.av
p=l.a
if(p!=null)p.e=!0
p=g.gV()
l.y=1
k=l.a
if(k!=null)k.e=!0
l.a=p
k=p.c
k.$ti.c.a(l);++k.d
k.aC(0,l)
p.e=!0}}}
A.jk.prototype={
$1(a){var s,r,q
t.bd.a(a)
s=this.a.x1
r=J.aw(a)
s.seY(r.h(a,0))
r=r.h(a,1)
q=this.b
q.left.toString
q=q.top
q.toString
if(typeof r!=="number")return r.W()
s.r=r-q},
$S:37}
A.a3.prototype={}
A.bA.prototype={}
A.K.prototype={}
A.fM.prototype={
I(a,b){var s,r,q=b.c,p=q.e,o=q.d+1
if(!(o<p.length))return A.b(p,o)
s=p[o]
r=A.iI(s)
b.cI(r,s)
b.cs(q.a,r,s);++q.d
b.ry=!0
return new A.K(null,null,!0,!0,!1,B.h,null)}}
A.e6.prototype={
I(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.c.x,g=h.gbB(),f=h.b.h(0,B.m)
if(g==null||f.e===g.Q.b)return new A.K(j,j,!1,!0,!1,B.h,j)
q=h.a
p=q.length
o=t.mm
n=0
while(!0){if(!(n<p)){s=j
r=s
break}m=q[n]
if(m.c===B.aL){l=o.a(m.b)
if(l.a===g.Q.a){s=m
r=l
break}}++n}if(r==null)return new A.K(j,j,!1,!0,!1,B.h,j)
i=i.q()
i.toString
b.x.ay("reload_1.mp3",i)
i=r.b
k=Math.min(i,g.Q.b)
i-=k
r.b=i
if(i===0)B.a.K(q,s)
i=f.e
i.toString
f.e=k+i
return new A.K(j,j,!0,!0,!1,B.h,j)}}
A.aM.prototype={
I(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f={},e=b.c,d=e.e,c=e.d
if(!(c<d.length))return A.b(d,c)
s=d[c]
c=h.b
r=c.q()
q=r.E(0,h.a)
p=s.c
if(!p.cH(q))return new A.K(g,g,!1,!0,!1,B.h,g)
o=p.h(0,q)
n=s.ai(q)
if((o.c===B.b||A.N(A.bf(o.f)))&&n==null){if(o.f==null)return new A.K(g,g,!1,!0,!1,B.h,g)
f=e.d
if(!(f<d.length))return A.b(d,f)
m=A.o0(o,d[f])
if(m.length!==0)return new A.K(B.a.ga9(m).b,g,!1,!0,!1,B.h,g)
return new A.K(g,g,!1,!0,!1,B.h,g)}l=A.c([],t.w)
f.a=!1
if(n!=null){if(A.o1(n,c))return new A.K(new A.dA(!1,c,n),g,!1,!0,!1,B.h,g)
e=f.a=!0}else e=!1
d=b.y
d=d.a0(d.e)
d.toString
k=!c.x
if(k)j=d.h(0,r)||d.h(0,q)
else j=!1
p.h(0,r)
if(o.r!=null)b.x.bA("water_footsteps_"+(B.p.D(5)+1)+".mp3",q,0.15)
if(j)i=new A.bA(A.jd(60),new A.jX(h,r,q),new A.jY(f,h,b,n,q))
else{if(e){n.toString
b.bT(n,c)}else b.cU(c,q)
i=g}c.a=0
return new A.K(g,g,!0,!0,k,l,i)}}
A.jX.prototype={
$1(a){var s=a.d,r=1-s,q=this.b,p=this.c,o=this.a.b.b
o.sX(0,q.a*24*r+p.a*24*s)
o.sY(0,q.b*36*r+p.b*36*s)},
$S:10}
A.jY.prototype={
$0(){var s,r=this,q=r.c,p=r.b.b
if(r.a.a){s=r.d
s.toString
q.bT(s,p)}else q.cU(p,r.e)},
$S:0}
A.d6.prototype={
I(a,b){return new A.K(null,null,!0,!0,!1,B.h,null)}}
A.fx.prototype={
I(a,b){var s=this.a.c
s.d-=1000;++s.c;++s.e;++s.f;++s.r
A.lM("LEVEL UP")
return new A.K(null,null,!0,!0,!1,B.h,null)}}
A.ef.prototype={
I(a,b){var s,r,q,p,o,n=b.c,m=n.e,l=n.d
if(!(l<m.length))return A.b(m,l)
s=this.b
r=m[l].c.h(0,s)
q=r.y
r.f=this.a?B.v:B.L
l=b.gV()
q.toString
l.K(0,q)
l=r.f
l.toString
p=r.b
o=A.n1(l,24*p.a,36*p.b)
if(o!=null)b.gV().k(0,o)
r.y=o
n=n.d
if(!(n<m.length))return A.b(m,n)
b.y.cQ(m[n].c,s)
b.gbt().d=!0
b.x.bA("door_1.mp3",s,0.8)
return new A.K(null,null,!0,!0,!1,B.h,null)}}
A.dA.prototype={
I(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d={},c=e.b
c.a=0
d.a=null
s=e.c
r=A.rg(s,c,b)
q=e.a
p=c.c
o=s.c
if(q){p.toString
o.toString
n=d.a=p.cX(o,B.p,r)}else{p.toString
o.toString
n=d.a=p.cT(o,B.p,r)}B.a.G(p.Q,n.d)
B.a.G(o.Q,n.e)
m=A.c([],t.w)
p=s.q()
p.toString
l=c.q()
l.toString
if(!q){q=c.b
k=q.y
j=s.b.r
q.sbw(0,4)
i=l.bG()
h=p.bG()
g=l.bG().E(0,new A.aO((h.a-i.a)/1.5,(h.b-i.b)/1.5))
d.b=!0
f=new A.bA(B.dg,new A.iR(d,e,b,p,l,i,g),new A.iS(d,e,b,p,l,k,j))}else{q=c.x?"white":"red"
e.b_(n.c,p,l,b,q)
f=null}q=s.r
if(q!=null)q.c=c
if(!n.b)return new A.K(null,n.a,!0,!0,!1,B.h,f)
c=o.b-n.c
o.b=c
if(c<=0)B.a.k(m,new A.dG(s))
return new A.K(null,d.a.a,!0,!0,!1,m,f)},
cb(a){if(this.a){if(a)return"bullet_impact_2.mp3"
return"bullet_miss_1.mp3"}if(a)return"heavy_punch_1.mp3"
return"miss_1.mp3"},
b_(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j={}
if(a===0)return
this.c.c.toString
s=c.a*24
r=c.b*36
q=new A.h_(B.e.l(a),s,r,e,1.25)
p=b.a*24
o=b.b*36
n=A.p4(new A.aO(p-s,o-r))
m=n.a*24
n=n.b*36
l=new A.aO(m,n).E(0,new A.aO(s,r))
k=new A.aO(m*2,n*2).E(0,new A.aO(p,o))
B.a.k(d.gbF().b,q)
j.a=B.df
A.pJ(B.dh,new A.iQ(j,d,q,k,l))},
l(a){return"TargetMeleeAttackEvent{"+this.b.l(0)+" -> "+this.c.l(0)+"}"}}
A.iR.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a
if(l.b&&a.d>=0.4){s=m.c
r=m.b
q=m.d
s.x.ay(r.cb(l.a.b),q)
p=l.a
o=r.b.x?"white":"red"
r.b_(p.c,q,m.e,s,o)
l.b=!1
s=r.c.b
if(l.a.b)s.sak(0,B.aa)
else s.sak(0,B.bS)}l=a.d
if(l<=0.4){s=m.f
r=m.r
n=l/0.6
l=m.b.b.b
l.sX(0,A.lT(r.a,s.a,n)*24)
l.sY(0,A.lT(r.b,s.b,n)*36)}else{s=m.b.b
if(l>=0.6){l=s.b
s=m.e
l.saf(s.a)
l.sag(s.b)}else{l=s.b
s=m.r
l.sX(0,s.a*24)
l.sY(0,s.b*36)}}},
$S:10}
A.iS.prototype={
$0(){var s,r,q,p,o,n=this,m=n.a
if(m.b){s=n.c
r=n.b
q=n.d
s.x.ay(r.cb(m.a.b),q)
p=m.a
o=r.b.x?"white":"red"
r.b_(p.c,q,n.e,s,o)
m.b=!1}m=n.b
s=m.b.b
s.sbw(0,n.f)
r=n.e
s.saf(r.a)
s.sag(r.b)
m.c.b.sak(0,n.r)},
$S:0}
A.iQ.prototype={
$1(a){var s,r,q,p,o,n=this
t.iK.a(a)
s=n.a
r=s.a.a+8000
s.a=new A.a8(r)
if(r>5e5){a.eC(0)
B.a.K(n.b.gbF().b,n.c)}q=B.e.O(s.a.a,1000)/300
s=n.c
r=n.d
p=1-q
o=n.e
s.b=q*r.a+p*o.a
s.c=q*r.b+p*o.b},
$S:39}
A.dG.prototype={
l(a){return"DeathEvent{"+this.a.l(0)+"}"},
I(a,b){var s,r=null,q=b.c,p=q.e,o=q.d
if(!(o<p.length))return A.b(p,o)
p=this.a
if(p.e){b.bD(p)
return new A.K(r,r,!0,!0,!1,B.h,r)}if(p.x)return new A.K(r,"You Died!",!0,!0,!1,B.h,r)
q=q.a
o=q.c
o.d+=100
s=A.c([],t.w)
if(o.d>=1000)B.a.k(s,new A.fx(q))
p.q()
p.c.toString
b.bD(p)
return new A.K(r,p.l(0)+" has died.",!1,!0,!1,s,r)}}
A.f2.prototype={
I(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=b.c,e=f.e
f=f.d
if(!(f<e.length))return A.b(e,f)
s=e[f]
for(f=b.y.c,e=this.c,r=!e,q=this.b,p=q.b,o=s.c,n=0;n<100;++n)for(m=0;m<40;++m){l=100*m+n
k=new A.k(n,m)
if(!(l<4000))return A.b(f,l)
j=f[l]
if(j===0&&e)if(o.h(0,k).f===B.v)p.j(0,k,100)
else{i=o.h(0,k)
if(!(i.c===B.b||A.N(A.bf(i.f))))p.j(0,k,80)}else if(j===1&&r)p.K(0,k)}q.f4(s,B.a1)
f=this.a
e=f.q()
e.toString
k=q.cE(s,e,1,B.a1)
if(k==null)return new A.K(g,"No more areas to explore",!1,!0,!1,B.h,g)
e=$.dq()
r=f.q()
r.toString
r=e.bs(r,k,s,B.a1)
h=r==null?g:r.b
if(h==null)return new A.K(g,"No path to that location",!1,!0,!1,B.h,g)
e=h.d
r=f.q()
r.toString
return new A.K(new A.aM(e.W(0,r),f),g,!0,!0,!1,B.h,g)}}
A.hp.prototype={
I(a,b){var s,r,q,p,o,n,m=null,l=b.c,k=l.e,j=l.d
if(!(j<k.length))return A.b(k,j)
s=k[j]
r=A.c([],t.q)
for(j=s.c.c,q=j.length,p=!1,o=0;o<j.length;j.length===q||(0,A.C)(j),++o){n=j[o]
if(n.f===B.M){n.f=B.v
B.a.k(r,n.b)
p=!0}}if(p){for(j=r.length,q=b.x,o=0;o<r.length;r.length===j||(0,A.C)(r),++o)q.ay("door_unlock_1.mp3",r[o])
j=l.d
if(!(j<k.length))return A.b(k,j)
q=this.a
k[j].c.h(0,q).f=B.U
l=l.d
if(!(l<k.length))return A.b(k,l)
k[l].ai(q)
return new A.K(m,"A door has been unlocked",!0,!0,!1,B.h,m)}return new A.K(m,m,!1,!0,!1,B.h,m)}}
A.e5.prototype={
I(a,b){var s,r=null,q=this.b,p=q.c.x.b.h(0,B.m)
if(p==null||p.e===0)return new A.K(r,r,!1,!0,!1,B.h,r)
s=p.e
s.toString
p.e=s-1
return new A.K(new A.fY(4,this.a,q),r,!0,!0,!1,B.h,r)}}
A.fY.prototype={
I(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=b.c,e=f.e
f=f.d
if(!(f<e.length))return A.b(e,f)
s=e[f]
f=this.c
e=f.q()
e.toString
r=this.b
q=$.dq().aO(e,r,s)
if(q==null)return new A.K(g,g,!0,!0,!1,B.h,g)
p=s.ai(r)
o=A.c([],t.w)
if(p!=null)o.push(new A.dA(!0,f,p))
n=q.fe(0)
m=b.x.ay("pistol_1.mp3",e)
f=f.b
l=B.c.A(f.d/24)
f=B.c.A(f.e/36)
k=B.dR.h(0,t.gX.i("a2.T").a(700))
k.toString
j=new A.fz(new A.fy(k,10),l,f)
B.a.k(b.gab().x,j)
f=B.aX.h(0,t.e.i("a2.T").a(800))
f.toString
i=new A.a0(14,2,-1,-1,g)
i.seG(0,f)
h=A.m5(g,g,0,g,!0,!1,i)
b.cr(h,B.y)
i.sak(0,new A.j(0))
return new A.K(g,g,!0,!0,!1,o,new A.bA(new A.a8(B.e.A(A.jd(B.c.A(16/this.a)).a*n.length)),new A.k9(r,e,i,m,j),new A.ka(b,h,j)))}}
A.k9.prototype={
$1(a){var s=this,r=s.a,q=s.b,p=a.d,o=A.lT(r.a,q.a,p)*24
p=A.lT(r.b,q.b,p)*36
q=s.c
q.sX(0,o)
q.sY(0,p)
B.c.A(o)
B.c.A(p)
s.e.a.c=10*(1-a.d)},
$S:10}
A.ka.prototype={
$0(){var s=this.a
s.bD(this.b)
B.a.K(s.gab().x,this.c)},
$S:0}
A.jn.prototype={}
A.jm.prototype={
dM(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.d.P(b,f,c)
s=A.ne(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
r=this.a0(a)
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
s[h]=g}B.d.az(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
aU(a,b){var s,r,q=a.b*100+a.a
if(q<0||q>=4000)return null
s=this.f
r=s.h(0,a)
if(r==null){r=new A.ip(b.createTexture())
s.j(0,a,r)}if(r.b){this.dM(a,b,r.a)
r.b=!1}return r.a},
a0(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.mk(p,p+4000,B.e.bU(s.byteLength,r))
return new A.kC(100,A.ne(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
bI(){var s,r,q,p,o=this.a0(this.e).c
for(s=o.length,r=this.c,q=0;q<4000;++q){p=r[q]
if(!(q<s))return A.b(o,q)
r[q]=p|(o[q]>0?1:0)}},
cJ(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.ba(new A.k(s,r))
for(q=this.f,q=q.gbJ(q),q=q.gw(q);q.n();)q.gp(q).b=!0},
cQ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.nr.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.a1(0,r,q)
o=o.c===B.b||A.N(A.ph(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.ba(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]>0)g.ba(new A.k(m,l))}s=g.a0(b)
s.toString
for(p=g.f,p=p.gal(p),p=p.gw(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]>0)i.b.b=!0}},
cP(a){return this.cQ(a,null)},
ba(a){var s,r,q,p=this.a0(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=15
for(q=0;q<4;++q)this.ea(new A.d4(1,-1,1),new A.kb(B.dJ[q],a),o)},
e7(a,b,c){var s,r
if(a<0||a>=b.byteLength)return
s=b.length
if(this.bc(a,b)){if(!(a>=0&&a<s))return A.b(b,a)
s=b[a]
r=c.a
if(!(r<4))return A.b(B.aM,r)
b[a]=s|B.aM[r]}else{if(!(a>=0&&a<s))return A.b(b,a)
b[a]=15}},
bc(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
bb(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===0},
ea(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.r
B.a.sm(d,0)
B.a.k(d,a)
for(s=b.a;r=d.length,r!==0;){if(0>=r)return A.b(d,-1)
q=d.pop()
r=q.a
p=B.c.ae(r*q.b+0.5)
o=B.c.cB(r*q.c-0.5)
for(n=r+1,m=2*r,l=p,k=null;l<=o;++l,k=i){j=b.fh(0,new A.k(r,l))
i=j.b*100+j.a
h=e.bc(i,c)
if(!h)g=l>=r*q.b&&l<=r*q.c
else g=!0
if(g)e.e7(i,c,s)
g=k!=null
if(g&&e.bc(k,c)&&e.bb(i,c))q.b=(2*l-1)/m
if(g&&e.bb(k,c)&&h){f=new A.d4(n,q.b,q.c)
f.c=(2*l-1)/m
B.a.k(d,f)}}if(k!=null&&e.bb(k,c))B.a.k(d,new A.d4(n,q.b,q.c))}}}
A.ip.prototype={}
A.kC.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0},
a1(a,b,c){var s=this.c,r=c*this.a+b
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0}}
A.c3.prototype={
l(a){return"Cardinal."+this.b}}
A.kb.prototype={
fh(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a.a){case 0:s=r.b
return new A.k(s.a+p,s.b-q)
case 1:s=r.b
return new A.k(s.a+p,s.b+q)
case 2:s=r.b
return new A.k(s.a+q,s.b+p)
case 3:s=r.b
return new A.k(s.a-q,s.b+p)}}}
A.d4.prototype={}
A.cd.prototype={}
A.fA.prototype={
ah(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=3553,a="u_player_visible_texture"
if(c.e==null){s=a0.createTexture()
c.e=s
B.d.P(a0,b,s)
B.d.az(a0,b,0,6408,100,40,0,6408,5121,null)
a0.texParameteri(b,10241,9729)
a0.texParameteri(b,10242,33071)
a0.texParameteri(b,10243,33071)}B.d.av(a0,36160,c.d)
B.d.bu(a0,36160,36064,b,c.e,0)
a0.clearColor(0,0,0,1)
a0.clear(16640)
a0.viewport(0,0,100,40)
s=c.c
r=s.aU(s.e,a0)
r.toString
a0.activeTexture(33985)
B.d.P(a0,b,r)
for(q=c.x,p=q.length,o=c.a,n=t.t,m=t.n,l=t.N,k=t.z,j=0;j<q.length;q.length===p||(0,A.C)(q),++j){i=q[j]
h=i.gbx()
g=s.aU(new A.k(i.gX(i),i.gY(i)),a0)
if(g==null)continue
a0.activeTexture(33984)
B.d.P(a0,b,g)
f=h.c
e=A.c([i.gX(i),i.gY(i)],n)
d=h.b.a
o.a4(a0,4,3,A.bj(["u_source_strength",f,"u_source_position",e,"u_source_color",A.c([(d>>>16&255)/255,(d>>>8&255)/255,(d&255)/255,0.2],m),"u_time",a1.c/1000,a,1,"u_visible_texture",0],l,k))}B.d.av(a0,36160,c.y)
a0.viewport(0,0,a1.a,a1.b)
a0.activeTexture(33984)
B.d.P(a0,b,c.e)
a0.activeTexture(33985)
B.d.P(a0,b,c.f)
a0.activeTexture(33986)
B.d.P(a0,b,r)
c.b.a4(a0,4,3,A.bj(["u_light_texture",0,"u_game_world_texture",1,a,2,"u_block_size",B.dy,"u_resolution",A.c([a1.a,a1.b],n),"u_offset",A.c([a1.d,a1.e],m)],l,k))}}
A.cn.prototype={
gbp(){var s=this.b
s=s==null?null:s.gbp()
return 1+(s==null?0:s)},
R(a,b){return B.c.R(this.f,t.p6.a(b).f)},
gcm(){var s,r=this.a
if(r==null)r=this
else{s=r.a
r=s==null?r:s.gcm()}return r},
dS(){var s,r,q
for(s=this,r=null;s!=null;r=s,s=q){s.b=r
q=s.a}},
fe(a){var s,r=A.c([],t.q)
for(s=this;s!=null;){B.a.k(r,s.d)
s=s.b}return r},
l(a){var s,r,q,p
for(s=this.d,r=this,q="",p="";r!=null;q=", "){p=p+q+s.l(0)
r=r.b}return p.charCodeAt(0)==0?p:p},
$iag:1}
A.aU.prototype={
l(a){return"Directions."+this.b}}
A.k5.prototype={
bs(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=A.n0(b,t.p6),a0=A.ab(t.j,t.i),a1=a4.c
a.k(0,new A.cn(a2,0,a2.ax(a3)*1.02+0))
for(s=a.$ti.c,r=a1.a,q=a1.b,p=t.W;o=a.c,n=o===0,!n;){if(n)A.T(A.ac("No element"));++a.d
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
if(k>0)a.bY(j,0)
o=l.d
i=a0.h(0,o)
if(i!=null&&i<l.e)continue
for(n=l.e,h=0;h<8;++h){g=B.a7[h]
f=A.a7(o,g)
m=f.a
if(m>=0){e=f.b
m=e>=0&&m<r&&e<q}else m=!1
if(m){m=l.a
if(!J.W(m==null?b:m.d,f))m=A.mz(p.a(a1.h(0,f)),a4,a5)&&!f.H(0,a3)
else m=!0}else m=!0
if(m)continue
m=f.ax(a3)
e=this.e0(g)
if(typeof e!=="number")return A.cD(e)
e=n+e
d=new A.cn(f,e,m*1.02+e)
d.a=l
if(f.H(0,a3)){d.dS()
s=l.a
return s==null?l:s.gcm()}c=a0.h(0,f)
if(!(e>1/0))m=c!=null&&e>=c
else m=!0
if(m)continue
a0.j(0,f,e)
s.a(d);++a.d
a.aC(0,d)}}return b},
aO(a,b,c){return this.bs(a,b,c,B.au)},
e0(a){switch(a.a){case 4:case 7:case 5:case 6:return 1
case 1:case 0:case 2:case 3:return 1.4}}}
A.fe.prototype={
cE(a,b,c,d){var s,r,q,p,o,n,m,l,k=this.a,j=b.b*100+b.a
if(!(j>=0&&j<4000))return A.b(k,j)
s=k[j]*c
r=A.c([],t.q)
for(j=a.c,q=t.W,p=!1,o=0;o<8;++o){n=A.a7(b,B.a7[o])
m=n.b*100+n.a
if(m<0||m>=4000)continue
if(A.mz(q.a(j.h(0,n)),a,d))continue
if(!(m>=0&&m<4000))return A.b(k,m)
l=k[m]*c
if(l>s){B.a.sm(r,0)
B.a.k(r,n)
s=l
p=!0}else if(l===s)B.a.k(r,n)}k=r.length
if(k===0||!p)return null
k=$.of().D(k)
if(!(k>=0&&k<r.length))return A.b(r,k)
return r[k]},
br(a,b,c){return this.cE(a,b,c,B.au)},
f4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.a
B.ab.aN(d,0,4000,0)
for(s=this.b,s=s.gal(s),s=s.gw(s);s.n();){r=s.gp(s)
q=r.a
B.ab.j(d,q.b*100+q.a,r.b)}s=a.c
r=t.W
do for(p=!1,o=0;o<100;++o)for(n=0;n<40;++n){m=n*100+o
if(A.mz(r.a(s.h(0,new A.k(o,n))),a,b))continue
if(!(m<4000))return A.b(d,m)
l=d[m]
k=m-1
for(q=[m+100,m-100,m+1,k],j=k>=0,i=-1,h=0,g=0;g<4;++g){f=q[g]
if(!j||!1)continue
if(!(f>=0&&f<4000))return A.b(d,f)
e=d[f]
if(e>h){h=e
i=f}}if(i!==-1&&h>l+1){d[m]=h-1
p=!0}}while(p)}}
A.kh.prototype={
e1(a,b){var s,r,q,p,o,n,m,l=this,k="a_position",j=B.c.ae((b.f+b.d)/24),i=B.c.ae((b.r+b.e)/36),h=new A.k(j,i)
if(h.H(0,l.c)||j<0||j>=100||i<0||i>=40)return
l.c=h
s=l.b
r=s.a6(k,t.C)
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
s.ac(a,k,r)}}
A.V.prototype={}
A.x.prototype={}
A.d9.prototype={
l(a){return"UniformKind."+this.b}}
A.hz.prototype={}
A.iu.prototype={}
A.ju.prototype={
J(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.nM(a,i.a,35633),f=A.nM(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.W(a.getProgramParameter(e,35714),!0)){A.lM(a.getProgramInfoLog(e))
A.T(A.ac("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.d.cA(a,A.bW(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.iu(a.getUniformLocation(A.bW(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.bW(i.e,h),n)
k=a.createBuffer()
B.d.cv(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.hz(k,j))}},
a6(a,b){A.qY(b,t.jv,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
ac(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.d(A.ac("WARNING, NO ATTRIBUTE "+b))
B.d.cv(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
a4(a,b,c,d){var s,r,q,p,o,n
t.ea.a(d)
B.d.fo(a,A.bW(this.e,"_program"))
B.d.cA(a,A.bW(this.f,"_vertexArrayObject"))
for(s=d.gal(d),s=s.gw(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.P(p)
n=r.h(0,p)
if(n==null)A.T(A.ac("WARNING, NO UNIFORM "+p))
switch(n.b.b.a){case 0:B.d.fi(a,n.a,A.aY(o))
break
case 1:q=J.aw(o)
B.d.fk(a,n.a,A.aY(q.h(o,0)),A.aY(q.h(o,1)))
break
case 2:q=J.aw(o)
B.d.fl(a,n.a,A.aY(q.h(o,0)),A.aY(q.h(o,1)),A.aY(q.h(o,2)))
break
case 3:q=J.aw(o)
B.d.fm(a,n.a,A.aY(q.h(o,0)),A.aY(q.h(o,1)),A.aY(q.h(o,2)),A.aY(q.h(o,3)))
break
case 4:B.d.fj(a,n.a,A.I(o))
break}}a.drawArrays(b,0,c)}}
A.kd.prototype={
seY(a){this.f=A.nI(a)}}
A.ke.prototype={}
A.fN.prototype={}
A.h6.prototype={
aP(){var s=0,r=A.bv(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aP=A.bw(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:e=A.c([],t.iw)
for(p=q.b,o=t.cU,n=t.ou,m=t.oV,l=t.Z,k=t.R,j=0;j<47;++j){i=p[j]
h=new XMLHttpRequest()
g=new A.H($.E,o)
B.dk.f1(h,"get","sounds/"+i)
h.responseType="arraybuffer"
f=m.a(new A.kj(q,h,i,new A.aR(g,n)))
l.a(null)
A.cv(h,"readystatechange",f,!1,k)
h.send()
B.a.k(e,g)}s=2
return A.a6(A.pd(e,t.H),$async$aP)
case 2:return A.br(null,r)}})
return A.bs($async$aP,r)},
bA(a,b,c){var s,r,q,p=this.c,o=A.pe(p),n=this.a.h(0,a)
if(n==null)return new A.fN()
s=p.createBufferSource()
r=B.p.T()
q=o.gain
q.toString
B.bz.saS(q,0.1*c+r/20)
p=p.destination
p.toString
B.di.c5(o,p,0,0)
B.ao.c5(s,o,0,0)
B.ao.seB(s,n)
s.start()
return new A.fN()},
ay(a,b){return this.bA(a,b,2)},
$ipG:1}
A.kj.prototype={
$1(a){var s=0,r=A.bv(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.bw(function(b,c){if(b===1)return A.bq(c,r)
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
return A.a6(B.by.eK(n.c,t.lo.a(A.qi(m.response))),$async$$1)
case 7:l.j(0,k,c)
p.aK(0)
s=5
break
case 6:p.aL(new A.hM("Failed to load "+o))
case 5:case 3:return A.br(null,r)}})
return A.bs($async$$1,r)},
$S:40}
A.lB.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.d.P(q,r,p)
B.d.fd(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.a2(0,p)},
$S:12}
A.kk.prototype={
du(a,b){A.rj(a,"CursesTransparent_24x36.png").d2(new A.kl(this),t.P)},
k(a,b){b.a=this
this.c.k(0,b)
this.e=!0},
K(a,b){this.c.K(0,b)
b.a=null
this.e=!0},
eE(a){var s,r,q,p
for(s=this.c,r=s.$ti,q=new A.cz(s,s.d,r.i("cz<1>")),r=r.c;q.n();){if(q.d<0)p=A.T(A.ac("No element"))
else{p=q.c
if(p==null)p=r.a(null)}p.a=null}++s.d
s.sbg(B.dE)
s.c=0
this.e=!0},
ep(c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9="a_position",c0="a_texcoord",c1="a_bg_color",c2=b8.c,c3=c2.c
if(c3>1e4){A.lM("WARNING: TOO MANY SPRITES "+c3)
if(b8.f)b8.f=!1
c3=1e4}s=b8.a
r=t.jv
q=c3*12
p=A.jZ(s.a6(b9,r).buffer,0,q)
o=A.jZ(s.a6(c0,r).buffer,0,q)
q=c3*24
n=A.jZ(s.a6("a_color",r).buffer,0,q)
m=A.jZ(s.a6(c1,r).buffer,0,q)
l=c2.em()
B.a.aY(l,c2.a)
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
p[a6]=a}else{b0=B.c.ao(12*a9)
b1=B.c.ao(18*a9)
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
if(b5==null)B.b0.aN(n,b4,b4+24,0)
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
n[a]=e}if(b6==null)B.b0.aN(m,b4,b4+24,0)
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
m[a]=e}}s.ac(c4,b9,p)
s.ac(c4,c0,o)
s.ac(c4,"a_color",n)
s.ac(c4,c1,m)},
ah(a,b){var s,r=this
if(r.b==null||r.c.c===0)return
if(r.e){r.ep(a)
r.e=!1}s=r.d
s.aU(s.e,a)
a.activeTexture(33984)
B.d.P(a,3553,r.b)
r.a.a4(a,4,r.c.c*6,A.bj(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.kl.prototype={
$1(a){this.a.b=t.lJ.a(a)},
$S:41}
A.a0.prototype={
sX(a,b){var s=this.a
if(s!=null)s.e=!0
this.d=b},
sY(a,b){var s=this.a
if(s!=null)s.e=!0
this.e=b},
saf(a){var s=this.a
if(s!=null)s.e=!0
this.d=a*24},
sag(a){var s=this.a
if(s!=null)s.e=!0
this.e=a*36},
sak(a,b){var s
this.r=b
s=this.a
if(s!=null)s.e=!0},
seG(a,b){var s=this.a
if(s!=null)s.e=!0
this.x=b},
sbw(a,b){var s
this.y=b
s=this.a
if(s!=null)s.e=!0},
l(a){return"Sprite("+this.b+", "+this.c+")"}}
A.jO.prototype={}
A.kv.prototype={
eq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(this.b==null)return
s=this.a
r=s.a6("a_color",t.C)
q=this.b
switch(q.d.a.a){case 0:case 1:case 6:case 5:p=$.og()
break
case 2:p=$.mE()
break
case 4:p=$.oi()
break
case 3:p=$.oh()
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
f=!(f.c===B.b||A.N(A.bf(f.f)))}else f=!1
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
r[f]=1}}}s.ac(a,"a_color",r)}}
A.kw.prototype={
f6(a){var s,r,q,p,o
for(s=this.b,r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
q.font=A.z(24*o.e)+'px "Press Start 2P"'
B.bM.seO(q,o.d)
q.fillText(o.a,o.b-a.d,o.c-a.e)}}}
A.h_.prototype={}
A.jl.prototype={
es(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.a,a4=a3.a0(a3.e),a5=a2.b,a6=a5.a6("a_color",t.C)
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
a5.ac(a7,"a_color",a6)}}
A.kD.prototype={}
A.hu.prototype={}
A.lq.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:17}
A.h9.prototype={
ai(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.e){m=n.b
l=B.c.A(m.d/24)
if(l===q){m=B.c.A(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.jb.prototype={
aw(a8){var s=0,r=A.bv(t.l7),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$aw=A.bw(function(a9,b0){if(a9===1)return A.bq(b0,r)
while(true)switch(s){case 0:a7=A.c([],t.fF)
for(o=p.a,n=p.b,m=p.e,l=0;l<11;++l){k=A.qX(o.d5(n[l]))
B.a.k(a7,k)
j=m[l]
for(i=j.length,h=k.a,g=0;g<j.length;j.length===i||(0,A.C)(j),++g){f=A.r4(j[g])
e=A.rm(k,f)
d=f.b
c=e.a
b=d.a
a=b==null
if(!a)b.e=!0
d.d=c*24
c=e.b
if(!a)b.e=!0
d.e=c*36
B.a.k(h,f)}}s=3
return A.a6(null,$async$aw)
case 3:o=t.j,l=0
case 4:if(!(l<a7.length-1)){s=6
break}a0=A.iI(a7[l])
if(!(l<a7.length)){q=A.b(a7,l)
s=1
break}k=a7[l]
a1=A.jJ(o)
n=k.c
case 7:if(!!0){s=8
break}if(!!0){a2=B.y
s=8
break}s=10
return A.a6(null,$async$aw)
case 10:m=$.dr()
a3=A.nN(m,$.ox(),o)
if(a1.u(0,a3)){s=9
break}i=n.h(0,a3)
if(i.c===B.b||A.N(A.bf(i.f))||!p.dH(n.h(0,a3).f)){a1.k(0,a3)
s=9
break}if(a3.ax(a0)<20){a1.k(0,a3)
s=9
break}a4=$.dq().bs(a0,a3,k,B.bR)
if(a4==null){a1.k(0,a3)
s=9
break}i=a4.b
i=i==null?null:i.gbp()
if(i==null)i=0
if(m.T()<=(1+i)/140/100){a2=a3
s=8
break}case 9:s=7
break
case 8:n.h(0,a2).f=B.K
case 5:++l
s=4
break
case 6:a5=A.fs(B.O)
a5.e=9
a6=A.fs(new A.eY(B.ak,50))
o=a8.c.x
o.eN(a5,B.m)
B.a.k(o.a,a6)
q=new A.hu(a8,a7)
s=1
break
case 1:return A.br(q,r)}})
return A.bs($async$aw,r)},
dV(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.d,r=t.ee,q=this.e,p=this.b,o=0;o<11;++o){n=q[o]
m=p[o]
l=$.oj()
k=A.a1(l)
j=k.i("a5<1>")
i=A.nb(new A.a5(l,k.i("A(1)").a(new A.jc(m.a)),j),!0,j.i("f.E"))
for(h=0;h<s[o];){g=A.nN($.dr(),i,r)
B.a.k(n,g)
h+=g.d}}},
dT(){var s,r,q,p,o,n,m,l,k,j,i=this,h=new A.c4(1,1,1,0,0,0,0,new A.cS(A.c([],t.I),A.ab(t.b,t.O)),A.mP(),A.c([],t.Q),A.c([],t.d),new A.cT(""))
for(s=i.f,r=i.c,q=i.e,p=0;p<11;++p){o=q[p]
for(n=0,m=0;m<o.length;++m){l=i.dU(o[m])
k=l.a
for(j=l.x.b.h(0,B.m)!=null;k>0;){n+=(j?l.cX(h,$.dr(),!0):l.cT(h,$.dr(),!0)).c
k-=r[p]}}B.a.j(s,p,n)}},
dU(a){var s,r,q,p,o,n=this.r
if(n.h(0,a)!=null){n=n.h(0,a)
n.toString
return n}s=a.d
r=A.c([],t.I)
q=A.n9(B.a9,t.b,t.O)
p=new A.c4(s,s,1,0,0,0,0,new A.cS(r,q),a.c,A.c([],t.Q),A.c([],t.d),new A.cT(a.a))
for(s=J.aH(a.r.$0());s.n();){o=s.gp(s)
switch(o.gbS()){case B.ad:q.h(0,B.G)
q.j(0,B.G,o)
break
case B.ae:q.h(0,B.m)
q.j(0,B.m,o)
break
case B.af:q.h(0,B.H)
q.j(0,B.H,o)
break
default:B.a.k(r,o)}}n.j(0,a,p)
return p},
dH(a){switch(a){case null:case B.E:return!0
default:return!1}}}
A.jc.prototype={
$1(a){return B.a.u(t.ee.a(a).x,this.a)},
$S:43}
A.f5.prototype={
bQ(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.Z(a,a0,A.b6(a*a0,B.i,!1,t.ns),t.ba)
c.a=b
s=new A.j2(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.E()
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
if(J.W(s.$2(q,o),1))if(e<4)a1.F(0,B.i,q,o)
else a1.F(0,B.b,q,o)
else if(e>5)a1.F(0,B.b,q,o)
else a1.F(0,B.i,q,o)}d=c.a
c.a=a1}}}
A.j2.prototype={
$2(a,b){return J.W(this.a.a.a1(0,a,b),B.b)?0:1},
$S:66}
A.js.prototype={
bH(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.cM.a(b0)
s=t.q
r=A.c([],s)
q=new A.jt(a9)
for(p=J.aH(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.d4()
if(n>=1)B.a.k(r,o)}if(r.length===0)return
m=A.c([],t.oe)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.C)(r),++j){i=r[j]
h=A.c([],k)
g=i.a
f=i.b
if(o.h(0,new A.k(g+1,f))===B.b)B.a.k(h,B.r)
if(o.h(0,new A.k(g+-1,f))===B.b)B.a.k(h,B.u)
if(o.h(0,new A.k(g,f+1))===B.b)B.a.k(h,B.t)
if(o.h(0,new A.k(g,f+-1))===B.b)B.a.k(h,B.q)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.C)(h),++e){d=h[e]
c=A.a7(i,d)
b=A.c([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.b)break
a2=A.p7(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.a7(a,a2[0]))!==B.i){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.a7(a,a2[1]))===B.i}else a1=!0
if(a1)break
a=A.a7(a,d)
B.a.k(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.i&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.a7(a,A.p8(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.k(m,new A.eg(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.ab(t.v,t.fH)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.C)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.u(l,n))continue
if(a4.aM(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.j(0,n,a5)}else a4.j(0,n,a5)}for(s=a4.gbJ(a4),s=s.gw(s),n=this.a,l=a9.e,k=a8.b;s.n();){g=s.gp(s)
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
l.j(0,a7,B.Z)
B.a.k(k,a7)
B.a.k(f.b,a7)}for(s=a4.gbJ(a4),s=s.gw(s);s.n();)this.bH(s.gp(s).d,a9,b0,b1)}}
A.jt.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.E(0,new A.k(1,0)))===B.b?1:0
if(s.h(0,a.E(0,new A.k(-1,0)))===B.b)++r
if(s.h(0,a.E(0,new A.k(0,-1)))===B.b)++r
return s.h(0,a.E(0,new A.k(1,1)))===B.b?r+1:r},
$S:45}
A.j_.prototype={
d7(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.F(0,o.T()>0.45?B.i:B.b,n,m)
p.F(0,B.ag,n,m)}new A.f5(a7).bQ(3)
for(p=q-1,l=0;l<r;++l){s.F(0,B.b,l,0)
s.F(0,B.b,l,p)}for(o=r-1,k=0;k<q;++k){s.F(0,B.b,0,k)
s.F(0,B.b,o,k)}j=new A.j0(a7)
i=new A.j1(a7)
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
o=A.jJ(p)
a0=new A.fl(a7,A.c([],t.do),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.k(l,k)
if(o.u(0,a1)||s.h(0,a1)===B.b)continue
a0.cG(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.C)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gw(a3);d.n();)s.j(0,d.gp(d),B.b)
else B.a.k(o,new A.ao(a3,A.c([],h),A.c([],h),A.ji(a3)))}a4=A.ab(p,t.v)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.c,a2=0;b=o.length,a2<b;o.length===r||(0,A.C)(o),++a2){a3=o[a2]
B.a.k(p,a3)
h.j(0,a3,A.c([],d))
for(b=J.aH(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.C)(o),++a2){a3=o[a2]
r=a3.a
p=J.aw(r)
if(p.gm(r)>a6){a6=p.gm(r)
a5=a3}}this.bH(a5,a7,a4,q)
for(r=q.cV(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.C)(r),++a2){a3=r[a2]
B.a.K(o,a3)
for(p=J.aH(a3.a);p.n();)s.j(0,p.gp(p),B.b)}A.o7(o,a7)}}
A.j0.prototype={
$2(a,b){return J.W(this.a.b.a1(0,a,b),B.i)},
$S:18}
A.j1.prototype={
$2(a,b){return J.W(this.a.b.a1(0,a,b),B.b)},
$S:18}
A.b4.prototype={}
A.ht.prototype={}
A.dw.prototype={}
A.e4.prototype={
a8(a,b){this.$ti.c.a(a)
return Math.min(B.a0.a8(a,b),B.bC.a8(a,b)+B.bd.a8(a,b))}}
A.f6.prototype={
a8(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.n)return 1/0
s=A.lU(a,B.q,b)
r=A.lU(a,B.t,b)
q=A.lU(a,B.r,b)
p=A.lU(a,B.u,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.eX.prototype={
a8(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.n)return 1/0
if(A.cE(a,B.q,b)+A.cE(a,B.t,b)+A.cE(a,B.r,b)+A.cE(a,B.u,b)===1)return 1
return 1/0}}
A.fb.prototype={
a8(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.n)return 1/0
if(A.cE(a,B.q,b)+A.cE(a,B.t,b)+A.cE(a,B.r,b)+A.cE(a,B.u,b)===2)return 1
return 1/0}}
A.dt.prototype={
a8(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.n)return 1/0
s=A.a7(a,B.q)
r=A.a7(a,B.t)
q=A.a7(a,B.r)
p=A.a7(a,B.u)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.ei.prototype={
f_(a,b){return this.b.$2(a,b)}}
A.lL.prototype={
$2(a,b){b.e.j(0,a,B.b6)},
$S:1}
A.lH.prototype={
$2(a,b){b.e.j(0,a,B.eh)},
$S:1}
A.lJ.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.F)s.j(0,a,B.b4)
else s.j(0,a,B.b5)},
$S:1}
A.lG.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.F)s.j(0,a,B.b4)
else s.j(0,a,B.b5)},
$S:1}
A.lI.prototype={
$2(a,b){b.e.j(0,a,B.ah)},
$S:1}
A.lK.prototype={
$2(a,b){b.e.j(0,a,B.ei)
b.f.j(0,a,B.dL)},
$S:1}
A.lF.prototype={
$2(a,b){b.e.j(0,a,B.ai)},
$S:1}
A.lS.prototype={
$2(a,b){var s=t.v
s.a(a)
s.a(b)
return J.al(a.a)-J.al(b.a)},
$S:48}
A.dM.prototype={}
A.iW.prototype={
d5(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=4000,c=new A.Z(100,40,A.b6(d,B.i,!1,t.ns),t.ba),b=A.b6(d,0,!1,t.i),a=A.b6(d,B.ag,!1,t.dt),a0=new A.Z(100,40,A.b6(d,B.n,!1,t.dy),t.eN),a1=t.c,a2=new A.dM(a3,c,new A.Z(100,40,b,t.de),new A.Z(100,40,a,t.f5),a0,new A.Z(100,40,A.b6(d,B.aV,!1,t.gM),t.eT),new A.Z(100,40,A.b6(d,null,!1,t.O),t.oQ),new A.jh(A.c([],a1),A.ab(t.v,t.mw)),A.c([],a1))
if(a3.b)this.eL(a2)
b=a3.a
switch(b.a){case 1:case 2:new A.j_(B.p).d7(a2)
break
case 3:case 4:new A.kg(A.jJ(t.j),B.p).da(a2)
break
case 6:case 0:case 5:new A.ks(B.p).d8(a2)
break}s=new Float32Array(4000)
new A.k6().d9(s,100,40)
r=new A.Z(100,40,A.mh(d,new A.iY(),t.W),t.nr)
for(q=0;q<100;++q)for(a=q!==0,a1=q!==99,p=0;p<40;++p)if(!a||!a1||p===0||p===39){c.F(0,B.b,q,p)
a0.F(0,B.n,q,p)}this.b.d6(a2.y,a2,a3.c)
for(a=a2.c,a1=this.a,o=a2.d,n=a2.r,b=b!==B.bA,m=a2.f,q=0;q<100;++q)for(p=0;p<40;++p){l=J.W(c.a1(0,q,p),B.i)
k=c.a1(0,q,p)
k.toString
j=new A.k(q,p)
a1.T()
i=r.h(0,j)
h=o.h(0,j)
g=a0.h(0,j)
i.b=j
i.c=k
i.sfc(o.h(0,j))
k=p*100+q
if(!(k<4000))return A.b(s,k)
f=s[k]
e=n.a1(0,q,p)
if(J.W(a.h(0,j),1)){i.r=B.dw
i.c=B.i}else if(g!==B.n)switch(g.a){case 0:if(m.h(0,j)===B.aU)i.f=B.M
else i.f=B.v
break
case 2:i.f=B.N
break
case 3:break
case 4:i.f=B.X
break
case 5:i.f=B.W
break
case 1:i.f=B.E
break
case 6:i.f=B.V
if(e!=null)B.a.k(i.e,e)
break
case 7:i.f=B.T
break
case 8:i.f=B.I
break
case 9:i.f=B.S
break
case 10:i.f=B.J
break}else if(l&&f<0.42&&h!==B.F&&b)i.f=B.E
if(e!=null)B.a.k(i.e,e)}return new A.jM(r,a3)},
eL(a){var s,r,q=this.a,p=a.b,o=p.b,n=q.D(o-1)+1,m=n>o/2?-1:1,l=new A.iX(a)
for(p=p.a,s=n,r=0;r<p;++r){l.$1(new A.k(r,s))
l.$1(new A.k(r,s+1))
l.$1(new A.k(r,s-1))
s+=q.eZ()?m:0}}}
A.iY.prototype={
$1(a){var s=A.c([],t.I)
return new A.bO(B.y,B.i,s)},
$S:17}
A.iX.prototype={
$1(a){var s=this.a,r=s.b
if(r.cH(a)){r.j(0,a,B.i)
s.c.j(0,a,1)}},
$S:49}
A.eg.prototype={
gm(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.jh.prototype={
cV(){var s,r,q,p,o,n=A.c([],t.c)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.k(n,o)}return n}}
A.ao.prototype={
l(a){return"Room{"+J.al(this.a)+"; "+this.d.l(0)+"}"}}
A.fl.prototype={
cG(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.c([a],k),i=A.c([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.u(0,o))continue
q.k(0,o)
B.a.k(i,o)
for(n=0;n<8;++n){m=A.a7(o,B.a7[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.u(0,m)&&k.h(0,m)===B.i)B.a.k(j,m)}}B.a.k(this.b,i)}}
A.ft.prototype={
cu(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.X)s=B.aJ
else if(a instanceof A.Y)s=B.aH
else s=a instanceof A.as?B.aI:B.aK
B.a.k(r.a,a)
B.a.k(r.b,s)
B.a.k(r.c,b)
r.d+=b},
ct(a){return this.cu(a,10)},
f2(a){var s,r,q,p={},o=p.a=0,n=A.mh(this.c.length,new A.jB(p,this),t.i),m=a.T()
for(s=n.length,r=m>-1;o<s;++o){q=n[o]
if(r&&m<=q){s=this.a
if(!(o<s.length))return A.b(s,o)
return A.fs(s[o])}}throw A.d(A.ac(""))},
df(a){var s,r,q=B.a.eV(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
de(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p===0)return
B.a.j(r,q,p-2)
this.d-=2}}}
A.jB.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.b(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:51}
A.k1.prototype={}
A.jw.prototype={
d6(a,b,c){var s,r,q
t.mw.a(a)
s=new A.ft(A.c([],t.hf),A.c([],t.lB),A.c([],t.t))
r=s.gew()
new A.a5(B.dG,t.ei.a(new A.jx()),t.kL).C(0,r)
new A.a5(B.dH,t.eU.a(new A.jy()),t.eo).C(0,r)
new A.a5(B.dI,t.hZ.a(new A.jz()),t.au).C(0,r)
new A.a5(B.dx,t.g9.a(new A.jA()),t.b1).C(0,r)
s.ct(B.at)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.C)(a),++q)this.dO(s,a[q],b)},
dO(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.aw(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.y
break}r=j.length
if(r!==0){r=l.D(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.D(k.gm(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.ah||q===B.n
else r=!1
if(r)break;++i}if(s.H(0,B.y))return
p=a.f2(l)
n=p.b
if(!J.W(n,B.at)){a.df(n)
a.de(p.c)
o.j(0,s,p)}}}
A.jx.prototype={
$1(a){return t.bB.a(a).b<=1000},
$S:52}
A.jy.prototype={
$1(a){return t.li.a(a).f<=1000},
$S:53}
A.jz.prototype={
$1(a){return t.kB.a(a).r<=1000},
$S:54}
A.jA.prototype={
$1(a){return t.lE.a(a).c<=1000},
$S:55}
A.k6.prototype={
a7(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
d9(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
for(s=0;s<b0;++s)for(r=s*0.1,q=0;q<b1;++q){p=q*b0+s
o=q*0.1
n=B.c.ae(r)&255
m=B.c.ae(o)&255
l=B.c.ae(0.3)&255
k=r-Math.floor(r)
j=o-Math.floor(o)
i=0.3-Math.floor(0.3)
h=k*k*k*(k*(k*6-15)+10)
g=j*j*j*(j*(j*6-15)+10)
o=$.ov()
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
c=a8.a7(0,o[d],k,j,i)
if(!(a0<f))return A.b(o,a0)
a2=k-1
c+=h*(a8.a7(0,o[a0],a2,j,i)-c)
if(!(b<f))return A.b(o,b)
a3=j-1
a4=a8.a7(0,o[b],k,a3,i)
if(!(a1<f))return A.b(o,a1)
c+=g*(a4+h*(a8.a7(0,o[a1],a2,a3,i)-a4)-c)
a4=d+1
if(!(a4<f))return A.b(o,a4)
a5=i-1
a4=a8.a7(0,o[a4],k,j,a5)
a6=a0+1
if(!(a6<f))return A.b(o,a6)
a4+=h*(a8.a7(0,o[a6],a2,j,a5)-a4)
a6=b+1
if(!(a6<f))return A.b(o,a6)
a6=a8.a7(0,o[a6],k,a3,a5)
a7=a1+1
if(!(a7<f))return A.b(o,a7)
a5=a8.a7(0,o[a7],a2,a3,a5)
if(!(p<4000))return A.b(a9,p)
a9[p]=(c+i*i*i*(i*(i*6-15)+10)*(a4+g*(a6+h*(a5-a6)-a4)-c)+1)/2}}}
A.bJ.prototype={
l(a){return"RuinOrientation."+this.b}}
A.e9.prototype={
l(a){return"RoomSizeKind."+this.b}}
A.kg.prototype={
da(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.D(5)
if(!(a3>=0&&a3<5))return A.b(B.aN,a3)
s=B.aN[a3]
r=a1.bR(B.ea)
q=a1.e_(s)
p=A.pa(a1.cD(a4,r,new A.k(B.c.A(Math.max(1,q.a-r.a/2)),B.c.A(Math.max(1,q.b-A.co(r)/2)))))
a3=a4.y
B.a.k(a3,p)
for(o=t.q,n=0;n<2000;){m=new A.k(a2.D(98)+1,a2.D(38)+1)
l=[B.ac,B.ac,B.ac,B.e9]
k=a2.D(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a1.bR(l[k])
if(!a1.f8(a4,r,m)){l=a1.cD(a4,r,m)
B.a.k(a3,new A.ao(l,A.c([],o),A.c([],o),A.ji(l)))}else ++n}for(a2=a1.b,o=a4.d,l=a4.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.k(j,i)
o.F(0,B.F,j,i)
if(!a2.u(0,h))l.j(0,h,B.b)}g=A.ab(t.j,t.v)
for(a2=a3.length,k=a4.x,f=k.a,e=k.b,d=t.c,c=0;c<a3.length;a3.length===a2||(0,A.C)(a3),++c){b=a3[c]
B.a.k(f,b)
e.j(0,b,A.c([],d))
for(a=J.aH(b.a);a.n();)g.j(0,a.gp(a),b)}a1.bH(p,a4,g,k)
for(a2=k.cV(),k=a2.length,c=0;c<a2.length;a2.length===k||(0,A.C)(a2),++c){b=a2[c]
B.a.K(a3,b)
for(f=J.aH(b.a);f.n();)l.j(0,f.gp(f),B.b)}A.o7(a3,a4)
for(a2=o.c,a0=0;a0<4000;++a0)B.a.j(a2,a0,B.F)},
bR(a){var s
switch(a.a){case 0:s=this.a
return new A.e8(s.D(5)+5,s.D(5)+5)
case 1:s=this.a
return new A.e8(s.D(10)+9,s.D(10)+9)
case 2:s=this.a
return new A.e8(s.D(10)+20,s.D(10)+20)}},
e_(a){switch(a.a){case 0:return new A.k(50,10)
case 1:return new A.k(50,30)
case 2:return new A.k(75,20)
case 3:return new A.k(25,20)
case 4:return new A.k(50,20)}},
cD(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.c([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.k(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.k(0,d)
r.j(0,d,f?B.b:B.i)
if(!f)B.a.k(a,d)}return a},
f8(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.k(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.b||n.u(0,i))return!0}return!1}}
A.e8.prototype={}
A.ks.prototype={
dX(a){var s,r,q=a.a.a===B.ap?B.ag:B.eg
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
d8(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.dX(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.T()>0.6)r.j(0,new A.k(q,p),B.b)
new A.f5(b8).bQ(10)
o=A.jJ(t.j)
n=new A.fl(b8,A.c([],t.do),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.k(k,j)
if(o.u(0,i)||r.h(0,i)===B.b)continue
n.cG(i)}o=n.b
B.a.aY(o,new A.kt())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.C)(h),++f)r.j(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.j(e,q,B.ej)
B.a.j(o,q,B.i)}$label0$1:for(o=b8.y,e=t.q,d=b8.d,c=0;c<3;){b=s.D(3)+5
a=s.D(3)+5
q=s.D(100-b)
p=s.D(40-a)
for(a0=q-1,a1=q+b,a2=a1+1,a3=p-1,a4=p+a,a5=a4+1;a0<a2;++a0)for(a6=a0>=0,a7=a0<m,a8=a3;a8<a5;++a8){i=new A.k(a0,a8)
if(!(a6&&a8>=0&&a7&&a8<l))continue $label0$1
if(g.h(0,i)!==B.n||r.h(0,i)!==B.i)continue $label0$1}a9=A.c([],e)
b0=A.c([],e)
for(a2=a1-1,a5=a4-1,a0=q;a0<a1;++a0)for(a6=a0-q!==0,a7=a0!==a2,a3=p;a3<a4;++a3){i=new A.k(a0,a3)
if(!a6||!a7||a3-p===0||a3===a5){r.j(0,i,B.b)
B.a.k(a9,i)}else B.a.k(b0,i)
d.j(0,i,B.F)}b1=new A.ku(b8)
B.a.dg(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.y
break}b3=a9[f]
b4=A.a7(b3,B.q)
b5=A.a7(b3,B.t)
b6=A.a7(b3,B.u)
b7=A.a7(b3,B.r)
if(A.N(b1.$1(b4))&&A.N(b1.$1(b5))){b2=b3
break}if(A.N(b1.$1(b6))&&A.N(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.C)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.i)
g.j(0,b2,B.Z)
B.a.k(o,new A.ao(b0,A.c([],e),A.c([],e),A.ji(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.C)(o),++f)A.eT(o[f],$.m4(),b8)}}
A.kt.prototype={
$2(a,b){var s=t.i8
s.a(a)
return J.al(s.a(b))-J.al(a)},
$S:56}
A.ku.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.i&&s.e.h(0,a)===B.n},
$S:57}
A.kE.prototype={
dv(a){var s=t.jV.a(new A.kF(this))
t.Z.a(null)
A.cv(a,"keydown",s,!1,t.g)
A.cv(a,"mousemove",t.b9.a(new A.kG(this)),!1,t.E)}}
A.kF.prototype={
$1(a){var s
t.g.a(a)
s=$.qn.h(0,a.key)
if(s!=null){a.preventDefault()
this.a.a.k(0,s)}},
$S:19}
A.kG.prototype={
$1(a){var s,r
t.E.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
this.a.b.k(0,A.c([s,r],t.n))},
$S:11}
A.aa.prototype={
l(a){return"InputCommand."+this.b}}
A.iM.prototype={
J(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.aW.a(a)
s=document
h.b=t.mX.a(s.querySelector("#action_bar"))
for(r=h.c,q=h.d,p=t.eX,o=p.i("~(1)?"),n=t.Z,p=p.c,m=0;m<1;++m){l=r[m]
k=q[m]
j=s.createElement("button")
j.innerText=l
i=o.a(new A.iN(h,k))
n.a(null)
A.cv(j,"click",i,!1,p)
A.bW(h.b,"base").appendChild(j)}}}
A.iN.prototype={
$1(a){var s
t.E.a(a)
s=this.a.a
s.bm(0)
s.c=!0
s.a.c=!0
s=A.bW(s.b,"_modal").style
s.display="block"
s=document.getElementById("modal-content")
s.toString
J.oW(s,this.b)},
$S:11}
A.jU.prototype={
dt(a){var s,r=document.getElementById("myModal")
r.toString
this.b=r
r=window
s=t.b9.a(new A.jV(this))
t.Z.a(null)
A.cv(r,"click",s,!1,t.E)
A.cv(window,"keydown",t.jV.a(new A.jW(this)),!1,t.g)},
bm(a){var s
this.c=!1
this.a.c=!1
s=A.bW(this.b,"_modal").style
s.display="none"}}
A.jV.prototype={
$1(a){var s=this.a
if(A.qh(t.E.a(a).target)===A.bW(s.b,"_modal"))s.bm(0)},
$S:11}
A.jW.prototype={
$1(a){var s
t.g.a(a)
s=this.a
if(s.c&&a.key==="Escape")s.bm(0)},
$S:19}
A.fV.prototype={}
A.km.prototype={
J(a){var s,r,q
t.ni.a(a)
s=document
r=s.getElementById("health_bar")
r.toString
s=s.getElementById("exp_bar")
s.toString
q=t.M
B.a.k(a.a.a,q.a(new A.kn(r,a)))
B.a.k(a.b.a,q.a(new A.ko(s,a)))}}
A.kn.prototype={
$0(){var s=this.a.style,r=A.z(this.b.a.b*100)+"%"
s.width=r},
$S:0}
A.ko.prototype={
$0(){var s=this.a.style,r=A.z(this.b.b.b*100)+"%"
s.width=r},
$S:0};(function aliases(){var s=J.a.prototype
s.di=s.l
s=J.ce.prototype
s.dk=s.l
s=A.az.prototype
s.dl=s.cL
s.dm=s.cM
s.dq=s.cO
s.dn=s.cN
s=A.f.prototype
s.dj=s.aT
s=A.M.prototype
s.aZ=s.S
s=A.ey.prototype
s.dr=s.aa})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers.installStaticTearOff,l=hunkHelpers._instance_1u
s(J.u.prototype,"geu","k",63)
r(A,"qD","pf",20)
r(A,"qS","pP",6)
r(A,"qT","pQ",6)
r(A,"qU","pR",6)
q(A,"nX","qM",0)
p(A,"qW","qG",9)
q(A,"qV","qF",0)
o(A.dh.prototype,"geH",1,0,null,["$1","$0"],["a2","aK"],31,0,0)
n(A.H.prototype,"gdK","M",9)
p(A,"r_","ql",62)
r(A,"r0","qm",20)
m(A,"ra",4,null,["$4"],["pU"],13,0)
m(A,"rb",4,null,["$4"],["pV"],13,0)
var k
l(k=A.fo.prototype,"geQ","bv",34)
l(k,"gci","e3",16)
p(A,"rr","qL",64)
o(A.ft.prototype,"gew",0,1,null,["$2","$1"],["cu","ct"],50,0,0)
p(A,"rx","r2",47)
r(A,"o3","rq",44)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.me,J.a,J.dx,A.J,A.ki,A.f,A.bk,A.a4,A.ap,A.cP,A.c5,A.kz,A.k3,A.dL,A.eB,A.w,A.jG,A.dU,A.kP,A.aW,A.hP,A.eH,A.eG,A.hw,A.dz,A.ek,A.cw,A.H,A.hx,A.cq,A.bn,A.eC,A.hy,A.ej,A.hF,A.bU,A.ie,A.eM,A.eN,A.hW,A.eq,A.er,A.i,A.ea,A.c7,A.a8,A.kQ,A.fS,A.ec,A.hM,A.cX,A.U,A.ii,A.hc,A.j5,A.ma,A.cx,A.r,A.e2,A.ey,A.ik,A.c9,A.hE,A.i8,A.eL,A.kI,A.k2,A.hT,A.fq,A.cz,A.j,A.Z,A.fO,A.aO,A.cG,A.iK,A.iJ,A.ae,A.an,A.b3,A.bl,A.iZ,A.fo,A.eY,A.aJ,A.j3,A.X,A.jQ,A.bD,A.Y,A.dv,A.as,A.am,A.eV,A.c4,A.cK,A.cT,A.cS,A.fa,A.fB,A.bO,A.fy,A.fz,A.k,A.jM,A.jR,A.ke,A.fh,A.jj,A.a3,A.bA,A.K,A.jm,A.ip,A.kC,A.kb,A.d4,A.cd,A.cn,A.k5,A.fe,A.V,A.x,A.hz,A.iu,A.ju,A.kd,A.fN,A.h6,A.a0,A.jO,A.kw,A.h_,A.hu,A.h9,A.jb,A.f5,A.js,A.b4,A.ei,A.dM,A.iW,A.eg,A.jh,A.ao,A.fl,A.ft,A.k1,A.jw,A.k6,A.e8,A.ks,A.kE,A.iM,A.jU,A.fV,A.km])
q(J.a,[J.dQ,J.dS,J.ce,J.u,J.cW,J.bI,A.fG,A.cm,A.e,A.iL,A.f3,A.cN,A.be,A.G,A.hD,A.aT,A.j8,A.bG,A.ff,A.hG,A.dI,A.hI,A.j9,A.l,A.hN,A.ay,A.jv,A.hR,A.dW,A.jP,A.hX,A.hY,A.aA,A.hZ,A.i0,A.aB,A.i4,A.i7,A.aC,A.i9,A.aD,A.ic,A.ah,A.im,A.kx,A.aE,A.iq,A.ky,A.kB,A.ix,A.iz,A.iB,A.iD,A.iF,A.aK,A.hU,A.aN,A.i2,A.k7,A.ig,A.aP,A.is,A.b0,A.f_,A.hB,A.f4,A.fn,A.fX,A.d3,A.bo,A.hm,A.hr])
q(J.ce,[J.fU,J.cs,J.bh])
r(J.jC,J.u)
q(J.cW,[J.dR,J.fu])
q(A.J,[A.cf,A.bP,A.fv,A.ho,A.h3,A.dy,A.hL,A.fP,A.b_,A.hq,A.hn,A.bm,A.f9,A.fc])
q(A.f,[A.p,A.ch,A.a5,A.lh])
q(A.p,[A.aL,A.dT])
q(A.aL,[A.ed,A.ci])
r(A.dJ,A.ch)
q(A.a4,[A.dY,A.eh])
q(A.cP,[A.dF,A.a9])
q(A.c5,[A.jr,A.f7,A.f8,A.hg,A.jE,A.lx,A.lz,A.kM,A.kL,A.lk,A.jo,A.kW,A.l3,A.kq,A.l9,A.l5,A.jN,A.jg,A.kR,A.k0,A.k_,A.la,A.lb,A.ld,A.lN,A.lO,A.iT,A.iU,A.lw,A.jq,A.jf,A.jk,A.jX,A.iR,A.iQ,A.k9,A.kj,A.lB,A.kl,A.lq,A.jc,A.jt,A.iY,A.iX,A.jB,A.jx,A.jy,A.jz,A.jA,A.ku,A.kF,A.kG,A.iN,A.jV,A.jW])
r(A.e3,A.bP)
q(A.hg,[A.ha,A.cM])
r(A.hv,A.dy)
r(A.dX,A.w)
q(A.dX,[A.az,A.hA])
q(A.f8,[A.jD,A.ly,A.ll,A.lp,A.jp,A.kX,A.jH,A.jL,A.jS,A.jT,A.kf,A.kp,A.lj,A.kK,A.iV,A.j2,A.j0,A.j1,A.lL,A.lH,A.lJ,A.lG,A.lI,A.lK,A.lF,A.lS,A.kt])
r(A.d_,A.cm)
q(A.d_,[A.et,A.ev])
r(A.eu,A.et)
r(A.cl,A.eu)
r(A.ew,A.ev)
r(A.e_,A.ew)
r(A.dZ,A.cl)
q(A.e_,[A.fH,A.fI,A.fJ,A.fK,A.fL,A.d0,A.e0])
r(A.eI,A.hL)
q(A.f7,[A.kN,A.kO,A.lf,A.le,A.kS,A.l_,A.kY,A.kU,A.kZ,A.kT,A.l2,A.l1,A.l0,A.kr,A.lc,A.l7,A.lo,A.l8,A.lX,A.lV,A.lW,A.lR,A.lP,A.lQ,A.m_,A.lY,A.lZ,A.m2,A.m0,A.m1,A.lt,A.lr,A.ls,A.jY,A.iS,A.ka,A.kn,A.ko])
q(A.ek,[A.aR,A.dh])
r(A.dd,A.eC)
q(A.cq,[A.eD,A.em])
r(A.bR,A.eD)
r(A.df,A.ej)
r(A.ct,A.hF)
r(A.ba,A.bU)
r(A.i6,A.eM)
q(A.az,[A.l6,A.ep])
r(A.ex,A.eN)
r(A.cy,A.ex)
r(A.dV,A.er)
q(A.b_,[A.d2,A.fr])
q(A.e,[A.q,A.fk,A.cc,A.at,A.ez,A.av,A.ad,A.eE,A.hs,A.dc,A.F,A.dC,A.f1])
q(A.q,[A.M,A.b2,A.b5,A.de])
q(A.M,[A.t,A.m])
q(A.t,[A.cH,A.eZ,A.cL,A.c1,A.c2,A.cR,A.fm,A.cV,A.ck,A.h4,A.ee,A.he,A.hf,A.d7])
r(A.j4,A.be)
r(A.cQ,A.hD)
q(A.aT,[A.j6,A.j7])
r(A.hH,A.hG)
r(A.dH,A.hH)
r(A.hJ,A.hI)
r(A.fg,A.hJ)
r(A.ax,A.f3)
r(A.hO,A.hN)
r(A.fj,A.hO)
r(A.hS,A.hR)
r(A.cb,A.hS)
r(A.dO,A.b5)
r(A.dP,A.cc)
r(A.b9,A.l)
q(A.b9,[A.bi,A.ar])
r(A.fC,A.hX)
r(A.fD,A.hY)
r(A.i_,A.hZ)
r(A.fE,A.i_)
r(A.ai,A.dV)
r(A.i1,A.i0)
r(A.e1,A.i1)
r(A.i5,A.i4)
r(A.fW,A.i5)
r(A.h2,A.i7)
r(A.eA,A.ez)
r(A.h7,A.eA)
r(A.ia,A.i9)
r(A.h8,A.ia)
r(A.hb,A.ic)
r(A.io,A.im)
r(A.hh,A.io)
r(A.eF,A.eE)
r(A.hi,A.eF)
r(A.ir,A.iq)
r(A.hk,A.ir)
r(A.da,A.ck)
r(A.iy,A.ix)
r(A.hC,A.iy)
r(A.el,A.dI)
r(A.iA,A.iz)
r(A.hQ,A.iA)
r(A.iC,A.iB)
r(A.es,A.iC)
r(A.iE,A.iD)
r(A.ib,A.iE)
r(A.iG,A.iF)
r(A.ij,A.iG)
r(A.hK,A.hA)
r(A.bS,A.em)
r(A.en,A.bn)
r(A.il,A.ey)
r(A.kJ,A.kI)
r(A.hV,A.hU)
r(A.fw,A.hV)
r(A.i3,A.i2)
r(A.fQ,A.i3)
r(A.d5,A.m)
r(A.ih,A.ig)
r(A.hd,A.ih)
r(A.it,A.is)
r(A.hl,A.it)
q(A.F,[A.bd,A.cU])
r(A.dB,A.bd)
q(A.dC,[A.c0,A.fR])
r(A.f0,A.hB)
q(A.an,[A.bM,A.bN,A.cO,A.bK,A.h0,A.e7,A.h1,A.bz])
r(A.a2,A.j)
q(A.a2,[A.cj,A.cY])
q(A.kQ,[A.eb,A.bg,A.fp,A.bE,A.bF,A.aQ,A.c6,A.du,A.cJ,A.fT,A.c8,A.d8,A.dD,A.cr,A.au,A.cg,A.b1,A.jK,A.a_,A.cZ,A.c3,A.aU,A.d9,A.bJ,A.e9,A.aa])
q(A.ke,[A.ja,A.je,A.jn,A.fA,A.kh,A.kk,A.kv,A.jl,A.kD])
q(A.a3,[A.fM,A.e6,A.aM,A.d6,A.fx,A.ef,A.dA,A.dG,A.f2,A.hp,A.e5,A.fY])
q(A.js,[A.j_,A.kg])
q(A.b4,[A.ht,A.dw,A.e4])
q(A.ht,[A.f6,A.eX,A.fb,A.dt])
s(A.et,A.i)
s(A.eu,A.ap)
s(A.ev,A.i)
s(A.ew,A.ap)
s(A.dd,A.hy)
s(A.er,A.i)
s(A.eN,A.ea)
s(A.hD,A.j5)
s(A.hG,A.i)
s(A.hH,A.r)
s(A.hI,A.i)
s(A.hJ,A.r)
s(A.hN,A.i)
s(A.hO,A.r)
s(A.hR,A.i)
s(A.hS,A.r)
s(A.hX,A.w)
s(A.hY,A.w)
s(A.hZ,A.i)
s(A.i_,A.r)
s(A.i0,A.i)
s(A.i1,A.r)
s(A.i4,A.i)
s(A.i5,A.r)
s(A.i7,A.w)
s(A.ez,A.i)
s(A.eA,A.r)
s(A.i9,A.i)
s(A.ia,A.r)
s(A.ic,A.w)
s(A.im,A.i)
s(A.io,A.r)
s(A.eE,A.i)
s(A.eF,A.r)
s(A.iq,A.i)
s(A.ir,A.r)
s(A.ix,A.i)
s(A.iy,A.r)
s(A.iz,A.i)
s(A.iA,A.r)
s(A.iB,A.i)
s(A.iC,A.r)
s(A.iD,A.i)
s(A.iE,A.r)
s(A.iF,A.i)
s(A.iG,A.r)
s(A.hU,A.i)
s(A.hV,A.r)
s(A.i2,A.i)
s(A.i3,A.r)
s(A.ig,A.i)
s(A.ih,A.r)
s(A.is,A.i)
s(A.it,A.r)
s(A.hB,A.w)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",L:"double",O:"num",o:"String",A:"bool",U:"Null",n:"List"},mangledNames:{},types:["~()","~(k,dM)","n<aJ>()","a0()","b3()","~(o,@)","~(~())","U()","~(@)","~(v,aX)","~(bA)","~(ar)","~(l)","A(M,o,o,cx)","A(aV)","A(o)","~(a8)","bO(h)","A(h,h)","~(bi)","h(v?)","U(@)","A(v?)","U(v,aX)","H<@>(@)","o(o)","~(q,q?)","@(@,@)","~(b0)","~(bG)","A(aJ)","~([v?])","@(@)","~(h,@)","aq<~>(aa)","A(@)","A(m8)","~(n<L>)","@(@,o)","~(hj)","aq<~>(l)","U(bo)","~(@,@)","A(bl)","~(O)","h(k)","~(v?,v?)","h(v?,v?)","h(ao,ao)","~(k)","~(v[h])","L(h)","A(X)","A(Y)","A(as)","A(am)","h(n<k>,n<k>)","A(k)","A(q)","@(o)","U(~())","~(o,o)","A(v?,v?)","~(v?)","h(a0,a0)","U(@,aX)","h(h,h)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.q9(v.typeUniverse,JSON.parse('{"fU":"ce","cs":"ce","bh":"ce","rz":"l","rS":"l","rB":"F","rG":"bd","ry":"m","rT":"m","rA":"e","t2":"e","t5":"e","rD":"t","t6":"q","rR":"q","tk":"b5","t4":"ar","tj":"ad","rF":"b9","rE":"b2","t8":"b2","rV":"cc","rU":"cb","rH":"G","rJ":"ah","rC":"ck","t1":"cl","t0":"cm","dQ":{"A":[]},"dS":{"U":[]},"u":{"n":["1"],"p":["1"],"f":["1"]},"jC":{"u":["1"],"n":["1"],"p":["1"],"f":["1"]},"dx":{"a4":["1"]},"cW":{"L":[],"O":[],"ag":["O"]},"dR":{"L":[],"h":[],"O":[],"ag":["O"]},"fu":{"L":[],"O":[],"ag":["O"]},"bI":{"o":[],"ag":["o"],"ng":[]},"cf":{"J":[]},"p":{"f":["1"]},"aL":{"p":["1"],"f":["1"]},"ed":{"aL":["1"],"p":["1"],"f":["1"],"aL.E":"1","f.E":"1"},"bk":{"a4":["1"]},"ch":{"f":["2"],"f.E":"2"},"dJ":{"ch":["1","2"],"p":["2"],"f":["2"],"f.E":"2"},"dY":{"a4":["2"]},"ci":{"aL":["2"],"p":["2"],"f":["2"],"aL.E":"2","f.E":"2"},"a5":{"f":["1"],"f.E":"1"},"eh":{"a4":["1"]},"cP":{"Q":["1","2"]},"dF":{"cP":["1","2"],"Q":["1","2"]},"a9":{"cP":["1","2"],"Q":["1","2"]},"e3":{"bP":[],"J":[]},"fv":{"J":[]},"ho":{"J":[]},"eB":{"aX":[]},"c5":{"ca":[]},"f7":{"ca":[]},"f8":{"ca":[]},"hg":{"ca":[]},"ha":{"ca":[]},"cM":{"ca":[]},"h3":{"J":[]},"hv":{"J":[]},"az":{"w":["1","2"],"jF":["1","2"],"Q":["1","2"],"w.K":"1","w.V":"2"},"dT":{"p":["1"],"f":["1"],"f.E":"1"},"dU":{"a4":["1"]},"fG":{"mW":[]},"cm":{"aF":[]},"d_":{"y":["1"],"aF":[]},"cl":{"i":["L"],"y":["L"],"n":["L"],"p":["L"],"aF":[],"f":["L"],"ap":["L"],"i.E":"L"},"e_":{"i":["h"],"y":["h"],"n":["h"],"p":["h"],"aF":[],"f":["h"],"ap":["h"]},"dZ":{"i":["L"],"mc":[],"y":["L"],"n":["L"],"p":["L"],"aF":[],"f":["L"],"ap":["L"],"i.E":"L"},"fH":{"i":["h"],"y":["h"],"n":["h"],"p":["h"],"aF":[],"f":["h"],"ap":["h"],"i.E":"h"},"fI":{"i":["h"],"y":["h"],"n":["h"],"p":["h"],"aF":[],"f":["h"],"ap":["h"],"i.E":"h"},"fJ":{"i":["h"],"y":["h"],"n":["h"],"p":["h"],"aF":[],"f":["h"],"ap":["h"],"i.E":"h"},"fK":{"i":["h"],"y":["h"],"n":["h"],"p":["h"],"aF":[],"f":["h"],"ap":["h"],"i.E":"h"},"fL":{"i":["h"],"y":["h"],"n":["h"],"p":["h"],"aF":[],"f":["h"],"ap":["h"],"i.E":"h"},"d0":{"i":["h"],"pK":[],"y":["h"],"n":["h"],"p":["h"],"aF":[],"f":["h"],"ap":["h"],"i.E":"h"},"e0":{"i":["h"],"pL":[],"y":["h"],"n":["h"],"p":["h"],"aF":[],"f":["h"],"ap":["h"],"i.E":"h"},"eH":{"ns":[]},"hL":{"J":[]},"eI":{"bP":[],"J":[]},"H":{"aq":["1"]},"eG":{"hj":[]},"dz":{"J":[]},"aR":{"ek":["1"]},"dh":{"ek":["1"]},"eC":{"nn":["1"],"nA":["1"],"cu":["1"]},"dd":{"hy":["1"],"eC":["1"],"nn":["1"],"nA":["1"],"cu":["1"]},"bR":{"eD":["1"],"cq":["1"]},"df":{"ej":["1"],"bn":["1"],"cu":["1"]},"ej":{"bn":["1"],"cu":["1"]},"eD":{"cq":["1"]},"ct":{"hF":["1"]},"ba":{"bU":["1"]},"eM":{"nu":[]},"i6":{"eM":[],"nu":[]},"l6":{"az":["1","2"],"w":["1","2"],"jF":["1","2"],"Q":["1","2"],"w.K":"1","w.V":"2"},"ep":{"az":["1","2"],"w":["1","2"],"jF":["1","2"],"Q":["1","2"],"w.K":"1","w.V":"2"},"cy":{"ea":["1"],"nm":["1"],"p":["1"],"f":["1"]},"eq":{"a4":["1"]},"dV":{"i":["1"],"n":["1"],"p":["1"],"f":["1"]},"dX":{"w":["1","2"],"Q":["1","2"]},"w":{"Q":["1","2"]},"ex":{"ea":["1"],"nm":["1"],"p":["1"],"f":["1"]},"c7":{"ag":["c7"]},"L":{"O":[],"ag":["O"]},"a8":{"ag":["a8"]},"h":{"O":[],"ag":["O"]},"n":{"p":["1"],"f":["1"]},"O":{"ag":["O"]},"o":{"ag":["o"],"ng":[]},"dy":{"J":[]},"bP":{"J":[]},"fP":{"J":[]},"b_":{"J":[]},"d2":{"J":[]},"fr":{"J":[]},"hq":{"J":[]},"hn":{"J":[]},"bm":{"J":[]},"f9":{"J":[]},"fS":{"J":[]},"ec":{"J":[]},"fc":{"J":[]},"ii":{"aX":[]},"M":{"q":[],"e":[]},"bi":{"l":[]},"ar":{"l":[]},"q":{"e":[]},"at":{"e":[]},"av":{"e":[]},"ad":{"e":[]},"cx":{"aV":[]},"t":{"M":[],"q":[],"e":[]},"cH":{"M":[],"q":[],"e":[]},"eZ":{"M":[],"q":[],"e":[]},"cL":{"M":[],"q":[],"e":[]},"c1":{"M":[],"q":[],"e":[]},"c2":{"M":[],"q":[],"e":[]},"b2":{"q":[],"e":[]},"cR":{"M":[],"q":[],"e":[]},"b5":{"q":[],"e":[]},"dH":{"i":["b8<O>"],"r":["b8<O>"],"n":["b8<O>"],"y":["b8<O>"],"p":["b8<O>"],"f":["b8<O>"],"r.E":"b8<O>","i.E":"b8<O>"},"dI":{"b8":["O"]},"fg":{"i":["o"],"r":["o"],"n":["o"],"y":["o"],"p":["o"],"f":["o"],"r.E":"o","i.E":"o"},"fj":{"i":["ax"],"r":["ax"],"n":["ax"],"y":["ax"],"p":["ax"],"f":["ax"],"r.E":"ax","i.E":"ax"},"fk":{"e":[]},"fm":{"M":[],"q":[],"e":[]},"cb":{"i":["q"],"r":["q"],"n":["q"],"y":["q"],"p":["q"],"f":["q"],"r.E":"q","i.E":"q"},"dO":{"b5":[],"q":[],"e":[]},"dP":{"e":[]},"cc":{"e":[]},"cV":{"M":[],"q":[],"e":[]},"ck":{"M":[],"q":[],"e":[]},"fC":{"w":["o","@"],"Q":["o","@"],"w.K":"o","w.V":"@"},"fD":{"w":["o","@"],"Q":["o","@"],"w.K":"o","w.V":"@"},"fE":{"i":["aA"],"r":["aA"],"n":["aA"],"y":["aA"],"p":["aA"],"f":["aA"],"r.E":"aA","i.E":"aA"},"ai":{"i":["q"],"n":["q"],"p":["q"],"f":["q"],"i.E":"q"},"e1":{"i":["q"],"r":["q"],"n":["q"],"y":["q"],"p":["q"],"f":["q"],"r.E":"q","i.E":"q"},"fW":{"i":["aB"],"r":["aB"],"n":["aB"],"y":["aB"],"p":["aB"],"f":["aB"],"r.E":"aB","i.E":"aB"},"h2":{"w":["o","@"],"Q":["o","@"],"w.K":"o","w.V":"@"},"h4":{"M":[],"q":[],"e":[]},"h7":{"i":["at"],"r":["at"],"n":["at"],"y":["at"],"e":[],"p":["at"],"f":["at"],"r.E":"at","i.E":"at"},"h8":{"i":["aC"],"r":["aC"],"n":["aC"],"y":["aC"],"p":["aC"],"f":["aC"],"r.E":"aC","i.E":"aC"},"hb":{"w":["o","o"],"Q":["o","o"],"w.K":"o","w.V":"o"},"ee":{"M":[],"q":[],"e":[]},"he":{"M":[],"q":[],"e":[]},"hf":{"M":[],"q":[],"e":[]},"d7":{"M":[],"q":[],"e":[]},"hh":{"i":["ad"],"r":["ad"],"n":["ad"],"y":["ad"],"p":["ad"],"f":["ad"],"r.E":"ad","i.E":"ad"},"hi":{"i":["av"],"r":["av"],"n":["av"],"y":["av"],"e":[],"p":["av"],"f":["av"],"r.E":"av","i.E":"av"},"hk":{"i":["aE"],"r":["aE"],"n":["aE"],"y":["aE"],"p":["aE"],"f":["aE"],"r.E":"aE","i.E":"aE"},"b9":{"l":[]},"da":{"M":[],"q":[],"e":[]},"hs":{"e":[]},"dc":{"kH":[],"e":[]},"de":{"q":[],"e":[]},"hC":{"i":["G"],"r":["G"],"n":["G"],"y":["G"],"p":["G"],"f":["G"],"r.E":"G","i.E":"G"},"el":{"b8":["O"]},"hQ":{"i":["ay?"],"r":["ay?"],"n":["ay?"],"y":["ay?"],"p":["ay?"],"f":["ay?"],"r.E":"ay?","i.E":"ay?"},"es":{"i":["q"],"r":["q"],"n":["q"],"y":["q"],"p":["q"],"f":["q"],"r.E":"q","i.E":"q"},"ib":{"i":["aD"],"r":["aD"],"n":["aD"],"y":["aD"],"p":["aD"],"f":["aD"],"r.E":"aD","i.E":"aD"},"ij":{"i":["ah"],"r":["ah"],"n":["ah"],"y":["ah"],"p":["ah"],"f":["ah"],"r.E":"ah","i.E":"ah"},"hA":{"w":["o","o"],"Q":["o","o"]},"hK":{"w":["o","o"],"Q":["o","o"],"w.K":"o","w.V":"o"},"em":{"cq":["1"]},"bS":{"em":["1"],"cq":["1"]},"en":{"bn":["1"]},"e2":{"aV":[]},"ey":{"aV":[]},"il":{"aV":[]},"ik":{"aV":[]},"c9":{"a4":["1"]},"hE":{"kH":[],"e":[]},"i8":{"pM":[]},"eL":{"pr":[]},"hT":{"nh":[]},"fw":{"i":["aK"],"r":["aK"],"n":["aK"],"p":["aK"],"f":["aK"],"r.E":"aK","i.E":"aK"},"fQ":{"i":["aN"],"r":["aN"],"n":["aN"],"p":["aN"],"f":["aN"],"r.E":"aN","i.E":"aN"},"d5":{"m":[],"M":[],"q":[],"e":[]},"hd":{"i":["o"],"r":["o"],"n":["o"],"p":["o"],"f":["o"],"r.E":"o","i.E":"o"},"m":{"M":[],"q":[],"e":[]},"hl":{"i":["aP"],"r":["aP"],"n":["aP"],"p":["aP"],"f":["aP"],"r.E":"aP","i.E":"aP"},"dB":{"F":[],"e":[]},"c0":{"e":[]},"F":{"e":[]},"f0":{"w":["o","@"],"Q":["o","@"],"w.K":"o","w.V":"@"},"bd":{"F":[],"e":[]},"f1":{"e":[]},"dC":{"e":[]},"cU":{"F":[],"e":[]},"fR":{"e":[]},"lh":{"f":["1"],"f.E":"1"},"cz":{"a4":["1"]},"cG":{"dN":[]},"b3":{"an":[]},"bM":{"an":[]},"bN":{"an":[]},"cO":{"an":[]},"bK":{"an":[]},"h0":{"an":[]},"e7":{"an":[]},"h1":{"an":[]},"bz":{"an":[]},"a2":{"j":[]},"cj":{"a2":["h"],"j":[],"a2.T":"h"},"cY":{"a2":["h"],"j":[],"a2.T":"h"},"bO":{"dN":[]},"fz":{"dN":[]},"fM":{"a3":[]},"e6":{"a3":[]},"aM":{"a3":[]},"d6":{"a3":[]},"fx":{"a3":[]},"ef":{"a3":[]},"dA":{"a3":[]},"dG":{"a3":[]},"f2":{"a3":[]},"hp":{"a3":[]},"e5":{"a3":[]},"fY":{"a3":[]},"cn":{"ag":["cn"]},"h6":{"pG":[]},"ht":{"b4":["k"]},"dw":{"b4":["1"]},"e4":{"b4":["1"]},"f6":{"b4":["k"]},"eX":{"b4":["k"]},"fb":{"b4":["k"]},"dt":{"b4":["k"]},"mc":{"n":["L"],"p":["L"],"f":["L"],"aF":[]}}'))
A.q8(v.typeUniverse,JSON.parse('{"p":1,"d_":1,"dV":1,"dX":2,"ex":1,"er":1,"eN":1}'))
var u={h:"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",q:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",p:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",l:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",z:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\n\nout vec4 outColor;\n\nvoid main() {\n    vec2 tex_position = gl_FragCoord.xy / vec2(100, 40);\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n    float source_strength = u_source_strength + sin(u_time * 2.0);\n    float dist = distance(gl_FragCoord.xy, (u_source_position + vec2(0.5, 0.5))) / 2.0;\n    if (dist > source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, source_strength, dist);\n    outColor = vec4(u_source_color.rgb, scale);\n}\n",A:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // back textures is already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 front = texture(u_light_texture, tex_position);\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  // front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.af
return{gS:s("@<~>"),mm:s("eY"),bB:s("X"),lE:s("am"),u:s("dz"),bD:s("b0"),az:s("cL"),hp:s("c1"),lo:s("mW"),p:s("c2"),nK:s("cN"),n6:s("ag<v?>"),d5:s("G"),cs:s("c7"),mX:s("cR"),dA:s("b5"),jW:s("bG"),L:s("a8"),ox:s("m8"),gt:s("p<@>"),h:s("M"),v:s("ao"),aW:s("fh"),b:s("c8"),fz:s("J"),R:s("l"),et:s("ax"),C:s("mc"),r:s("ca"),U:s("aq<@>"),m:s("a9<h,j>"),eT:s("Z<cg>"),f5:s("Z<cr>"),eN:s("Z<au>"),nr:s("Z<bO>"),ba:s("Z<d8>"),de:s("Z<L>"),oQ:s("Z<aJ?>"),hQ:s("cV"),h8:s("aa"),lZ:s("aJ"),hl:s("f<q>"),e7:s("f<@>"),c7:s("u<cG>"),if:s("u<cJ>"),G:s("u<V>"),a:s("u<an>"),V:s("u<b1>"),fy:s("u<bA>"),Q:s("u<fa>"),X:s("u<aU>"),pl:s("u<m8>"),c:s("u<ao>"),w:s("u<a3>"),iw:s("u<aq<~>>"),ow:s("u<dN>"),ge:s("u<aa>"),Y:s("u<cd>"),I:s("u<aJ>"),lB:s("u<bg>"),do:s("u<n<k>>"),lN:s("u<aV>"),hf:s("u<v>"),d:s("u<fT>"),q:s("u<k>"),ff:s("u<h_>"),fk:s("u<d4>"),fF:s("u<h9>"),s:s("u<o>"),oe:s("u<eg>"),o:s("u<x>"),B:s("u<aQ>"),D:s("u<ei>"),n:s("u<L>"),dG:s("u<@>"),t:s("u<h>"),g2:s("u<O>"),f7:s("u<~()>"),ev:s("u<~(a8)>"),T:s("dS"),dY:s("bh"),dX:s("y<@>"),g:s("bi"),kT:s("aK"),k:s("n<cG>"),mw:s("n<ao>"),i8:s("n<k>"),bd:s("n<L>"),oH:s("dW"),gM:s("cg"),cM:s("Q<k,ao>"),ea:s("Q<o,@>"),av:s("Q<@,@>"),gQ:s("ci<o,o>"),gX:s("cY"),e:s("cj"),li:s("Y"),ib:s("aA"),ee:s("bl"),E:s("ar"),A:s("q"),hU:s("aV"),P:s("U"),ai:s("aN"),K:s("v"),p6:s("cn"),ni:s("fV"),d8:s("aB"),j:s("k"),o5:s("nh"),kB:s("as"),mx:s("b8<O>"),cH:s("d3"),nZ:s("d5"),fm:s("at"),cA:s("aC"),hH:s("aD"),hd:s("a0"),l:s("aX"),N:s("o"),gL:s("o(o)"),lv:s("ah"),bC:s("m"),fD:s("d7"),dt:s("cr"),dy:s("au"),dQ:s("av"),gJ:s("ad"),lJ:s("bo"),W:s("bO"),ns:s("d8"),iK:s("hj"),ki:s("aE"),hk:s("aP"),fH:s("eg"),ha:s("ns"),bE:s("bP"),jv:s("aF"),cx:s("cs"),eL:s("da"),kL:s("a5<X>"),b1:s("a5<am>"),eo:s("a5<Y>"),au:s("a5<as>"),c1:s("ei"),kg:s("kH"),l7:s("hu"),oJ:s("aR<b0>"),fB:s("aR<bo>"),ou:s("aR<~>"),nD:s("de"),aN:s("hz"),e0:s("ai"),bz:s("bS<l>"),eX:s("bS<ar>"),og:s("H<b0>"),aa:s("H<bo>"),f:s("H<@>"),hy:s("H<h>"),cU:s("H<~>"),dl:s("cx"),d1:s("id<v?>"),iF:s("dh<~>"),im:s("ip"),o3:s("iu"),k4:s("A"),ei:s("A(X)"),g9:s("A(am)"),eU:s("A(Y)"),iW:s("A(v)"),hZ:s("A(as)"),i:s("L"),z:s("@"),mY:s("@()"),y:s("@(v)"),ng:s("@(v,aX)"),p1:s("@(@,@)"),S:s("h"),eK:s("0&*"),_:s("v*"),iB:s("e?"),gK:s("aq<U>?"),ef:s("ay?"),O:s("aJ?"),iD:s("v?"),F:s("cw<@,@>?"),nF:s("hW?"),du:s("@(l)?"),Z:s("~()?"),p0:s("~(b0)?"),lW:s("~(bG)?"),oV:s("~(l)?"),jV:s("~(bi)?"),b9:s("~(ar)?"),cZ:s("O"),H:s("~"),M:s("~()"),gz:s("~([~])"),x:s("~(a8)"),nt:s("~(a3)"),i6:s("~(v)"),fQ:s("~(v,aX)"),bm:s("~(o,o)"),J:s("~(o,@)"),my:s("~(hj)"),hv:s("~(O)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.bj=A.cH.prototype
B.ao=A.dB.prototype
B.by=A.c0.prototype
B.bz=A.f_.prototype
B.aq=A.c1.prototype
B.D=A.c2.prototype
B.bM=A.cN.prototype
B.l=A.cQ.prototype
B.de=A.ff.prototype
B.di=A.cU.prototype
B.dj=A.dO.prototype
B.dk=A.dP.prototype
B.ds=J.a.prototype
B.a=J.u.prototype
B.du=J.dQ.prototype
B.e=J.dR.prototype
B.c=J.cW.prototype
B.w=J.bI.prototype
B.dv=J.bh.prototype
B.b0=A.dZ.prototype
B.e6=A.d0.prototype
B.ab=A.e0.prototype
B.b2=J.fU.prototype
B.d=A.d3.prototype
B.b3=A.ee.prototype
B.aj=J.cs.prototype
B.bb=A.dc.prototype
B.b6=new A.au(5,"table")
B.bc=new A.dt(B.b6)
B.ai=new A.au(7,"bookshelf")
B.bd=new A.dt(B.ai)
B.ak=new A.du(2,"rounds")
B.bq=new A.X("",0,0,0,99)
B.ap=new A.b1(0,"surface")
B.z=new A.b1(1,"caves")
B.A=new A.b1(2,"deepCaves")
B.Q=new A.b1(3,"facility")
B.B=new A.b1(4,"ruins")
B.bA=new A.b1(5,"village")
B.bB=new A.b1(6,"snow")
B.bC=new A.eX()
B.eq=new A.dw(A.af("dw<k>"))
B.a_=new A.f6()
B.a0=new A.fb()
B.ar=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bD=function() {
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
B.bI=function(getTagFallback) {
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
B.bE=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bF=function(hooks) {
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
B.bH=function(hooks) {
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
B.bG=function(hooks) {
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
B.as=function(hooks) { return hooks; }

B.at=new A.k1()
B.bJ=new A.e4(A.af("e4<k>"))
B.bK=new A.fS()
B.C=new A.ki()
B.p=new A.hT()
B.j=new A.i6()
B.bL=new A.ii()
B.bR=new A.dD(0,"none")
B.a1=new A.dD(2,"ignoreAgentsAndUnlockedDoors")
B.au=new A.dD(3,"normal")
B.bS=new A.j(1660944383)
B.bT=new A.j(3707764736)
B.av=new A.j(4278190080)
B.cp=new A.j(4286941355)
B.cB=new A.j(4291232805)
B.cP=new A.j(4294278144)
B.ay=new A.bF(5,"d20")
B.az=new A.aU(0,"se")
B.aA=new A.aU(1,"ne")
B.aB=new A.aU(2,"sw")
B.aC=new A.aU(3,"nw")
B.q=new A.aU(4,"n")
B.r=new A.aU(5,"e")
B.t=new A.aU(6,"s")
B.u=new A.aU(7,"w")
B.df=new A.a8(0)
B.dg=new A.a8(25e4)
B.dh=new A.a8(8000)
B.G=new A.c8(0,"primaryMelee")
B.m=new A.c8(1,"primaryRanged")
B.H=new A.c8(2,"armor")
B.aD=new A.aa(0,"north")
B.aE=new A.aa(1,"east")
B.dl=new A.aa(18,"autoexplore")
B.dm=new A.aa(19,"reload")
B.aF=new A.aa(2,"south")
B.aG=new A.aa(3,"west")
B.dn=new A.aa(5,"fire")
B.dp=new A.aa(7,"look")
B.dq=new A.aa(8,"reset")
B.dr=new A.aa(9,"activate")
B.a5=new A.a_(0,"none")
B.a6=new A.a_(1,"stairsUp")
B.S=new A.a_(10,"tree")
B.T=new A.a_(11,"bookshelf")
B.I=new A.a_(12,"mechanism")
B.U=new A.a_(13,"activatedMechanism")
B.V=new A.a_(14,"chest")
B.J=new A.a_(15,"mechanicalLight")
B.K=new A.a_(2,"stairsDown")
B.v=new A.a_(3,"door")
B.L=new A.a_(4,"openDoor")
B.M=new A.a_(5,"lockedDoor")
B.E=new A.a_(6,"grass")
B.N=new A.a_(7,"torch")
B.W=new A.a_(8,"table")
B.X=new A.a_(9,"chair")
B.aH=new A.bg(0,"melee")
B.aI=new A.bg(1,"ranged")
B.aJ=new A.bg(2,"armor")
B.aK=new A.bg(3,"other")
B.dt=new A.bg(5,"corpse")
B.aL=new A.bg(6,"ammo")
B.dw=new A.jK(1,"water")
B.al=new A.cJ(0,"light")
B.am=new A.cJ(1,"heavy")
B.an=new A.cJ(2,"powered")
B.eH=A.c(s([B.al,B.am,B.an]),t.if)
B.bk=new A.am(1)
B.bl=new A.am(1)
B.bm=new A.am(1)
B.bn=new A.am(1)
B.eF=A.c(s([B.an]),t.if)
B.bo=new A.am(2)
B.eJ=A.c(s([B.al,B.am]),t.if)
B.bp=new A.am(2)
B.dx=A.c(s([B.bk,B.bl,B.bm,B.bn,B.bo,B.bp]),A.af("u<am>"))
B.aM=A.c(s([1,2,4,8]),t.t)
B.dy=A.c(s([24,36]),t.n)
B.dz=A.c(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
B.eb=new A.bJ(0,"north")
B.ec=new A.bJ(1,"south")
B.ed=new A.bJ(2,"east")
B.ee=new A.bJ(3,"west")
B.ef=new A.bJ(4,"center")
B.aN=A.c(s([B.eb,B.ec,B.ed,B.ee,B.ef]),A.af("u<bJ>"))
B.aO=A.c(s([B.q,B.t]),t.X)
B.aP=A.c(s([B.r,B.u]),t.X)
B.a7=A.c(s([B.az,B.aA,B.aB,B.aC,B.q,B.r,B.t,B.u]),t.X)
B.x=A.c(s([-1,3,-1,-1,3,-1]),t.n)
B.dD=A.c(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
B.Y=A.c(s([]),t.Q)
B.dF=A.c(s([]),t.X)
B.h=A.c(s([]),t.w)
B.dE=A.c(s([]),A.af("u<U>"))
B.aS=A.c(s([]),t.s)
B.bw=new A.X("Second Skin",1,1,2,5)
B.bx=new A.X("Estex Suit I",1,0,1,5)
B.bt=new A.X("Flight Suit",1,0,1,6)
B.bu=new A.X("Freebooter Armor I",2,2,3,4)
B.br=new A.X("Kasatha microcord I",2,1,3,3)
B.bs=new A.X("Ceremonial Plate",1,1,3,2)
B.bv=new A.X("Golemforged Plating",1,2,5,0)
B.dG=A.c(s([B.bw,B.bx,B.bt,B.bu,B.br,B.bs,B.bv]),A.af("u<X>"))
B.eD=new A.fp(0,"oneHand")
B.a3=new A.bE(5,"bludgeoning")
B.ey=new A.c6(0,"none")
B.er=new A.bD()
B.R=new A.bF(2,"d6")
B.b8=new A.aQ(0,"archaic")
B.P=new A.aQ(2,"analog")
B.dK=A.c(s([B.b8,B.P]),t.B)
B.dY=new A.Y(B.a3,1,B.R,0,"Club",B.dK)
B.a4=new A.bF(1,"d4")
B.em=new A.aQ(3,"operative")
B.aQ=A.c(s([B.P,B.em]),t.B)
B.dW=new A.Y(B.a3,1,B.a4,1,"Tactical Baton",B.aQ)
B.db=new A.bE(7,"slashing")
B.e1=new A.Y(B.db,1,B.a4,1,"Survival Knife",B.aQ)
B.eE=new A.fp(1,"twoHand")
B.aw=new A.bE(6,"piercing")
B.b9=new A.aQ(4,"block")
B.dB=A.c(s([B.P,B.b9]),t.B)
B.e0=new A.Y(B.aw,1,B.R,1,"Tactical Spear",B.dB)
B.a2=new A.bE(3,"fire")
B.eB=new A.c6(4,"burn")
B.es=new A.bD()
B.ba=new A.aQ(5,"powered")
B.aR=A.c(s([B.ba]),t.B)
B.ex=new A.jQ()
B.dX=new A.Y(B.a2,2,B.a4,7,"Flame Sword",B.aR)
B.eA=new A.c6(11,"wound")
B.et=new A.bD()
B.ax=new A.bF(3,"d8")
B.dZ=new A.Y(B.a2,2,B.ax,9,"Plasma Sword",B.aR)
B.da=new A.bE(2,"electricity")
B.ez=new A.c6(1,"arc")
B.eu=new A.bD()
B.dd=new A.bF(4,"d12")
B.en=new A.aQ(6,"stun")
B.dA=A.c(s([B.en,B.ba]),t.B)
B.e2=new A.Y(B.da,1,B.dd,8,"Shock Staff",B.dA)
B.dH=A.c(s([B.dY,B.dW,B.e1,B.e0,B.dX,B.dZ,B.e2]),A.af("u<Y>"))
B.d9=new A.bE(1,"cold")
B.eC=new A.c6(9,"staggered")
B.ev=new A.bD()
B.bf=new A.du(1,"charge")
B.bh=new A.dv(B.bf,20)
B.e7=new A.as("Zero pistol",B.d9,B.R,5,B.bh,60)
B.eI=A.c(s([B.P]),t.B)
B.bi=new A.dv(B.ak,9)
B.O=new A.as("Tac Pistol",B.aw,B.R,1,B.bi,30)
B.dc=new A.bF(0,"d3")
B.ew=new A.bD()
B.eo=new A.aQ(7,"line")
B.ep=new A.aQ(8,"unwieldy")
B.eG=A.c(s([B.eo,B.ep]),t.B)
B.be=new A.du(0,"petro")
B.bg=new A.dv(B.be,20)
B.e8=new A.as("Flame Rifle",B.a2,B.ax,2,B.bg,25)
B.dI=A.c(s([B.e7,B.O,B.e8]),A.af("u<as>"))
B.bN=new A.c3(0,"north")
B.bO=new A.c3(1,"south")
B.bP=new A.c3(2,"east")
B.bQ=new A.c3(3,"west")
B.dJ=A.c(s([B.bN,B.bO,B.bP,B.bQ]),A.af("u<c3>"))
B.aT=A.c(s(["bind","if","ref","repeat","syntax"]),t.s)
B.a8=A.c(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
B.aU=new A.cg(0,"lockedDoor")
B.dL=new A.cg(3,"doorMechanism")
B.aV=new A.cg(4,"none")
B.cJ=new A.j(4293457385)
B.cC=new A.j(4291356361)
B.cu=new A.j(4289058471)
B.cn=new A.j(4286695300)
B.ci=new A.j(4284922730)
B.cc=new A.j(4283215696)
B.c9=new A.j(4282622023)
B.c6=new A.j(4281896508)
B.c4=new A.j(4281236786)
B.bZ=new A.j(4279983648)
B.aW=new A.a9([50,B.cJ,100,B.cC,200,B.cu,300,B.cn,400,B.ci,500,B.cc,600,B.c9,700,B.c6,800,B.c4,900,B.bZ],t.m)
B.d6=new A.j(4294966759)
B.d5=new A.j(4294965700)
B.d4=new A.j(4294964637)
B.d3=new A.j(4294963574)
B.d2=new A.j(4294962776)
B.d0=new A.j(4294961979)
B.cT=new A.j(4294826037)
B.cS=new A.j(4294688813)
B.cR=new A.j(4294551589)
B.cQ=new A.j(4294278935)
B.aX=new A.a9([50,B.d6,100,B.d5,200,B.d4,300,B.d3,400,B.d2,500,B.d0,600,B.cT,700,B.cS,800,B.cR,900,B.cQ],t.m)
B.cN=new A.j(4293913577)
B.cF=new A.j(4292332744)
B.cz=new A.j(4290554532)
B.ct=new A.j(4288776319)
B.cq=new A.j(4287458915)
B.cm=new A.j(4286141768)
B.ck=new A.j(4285353025)
B.cf=new A.j(4284301367)
B.cd=new A.j(4283315246)
B.c7=new A.j(4282263331)
B.dM=new A.a9([50,B.cN,100,B.cF,200,B.cz,300,B.ct,400,B.cq,500,B.cm,600,B.ck,700,B.cf,800,B.cd,900,B.c7],t.m)
B.cK=new A.j(4293718001)
B.cD=new A.j(4291811548)
B.cv=new A.j(4289773253)
B.cr=new A.j(4287669422)
B.cl=new A.j(4286091420)
B.cg=new A.j(4284513675)
B.ce=new A.j(4283723386)
B.cb=new A.j(4282735204)
B.c5=new A.j(4281812815)
B.c1=new A.j(4280693304)
B.aY=new A.a9([50,B.cK,100,B.cD,200,B.cv,300,B.cr,400,B.cl,500,B.cg,600,B.ce,700,B.cb,800,B.c5,900,B.c1],t.m)
B.eK=new A.dF(0,{},B.aS,A.af("dF<o,@>"))
B.co=new A.j(4286755327)
B.ca=new A.j(4282682111)
B.c3=new A.j(4280908287)
B.c2=new A.j(4280902399)
B.dP=new A.a9([100,B.co,200,B.ca,400,B.c3,700,B.c2],t.m)
B.cY=new A.j(4294955392)
B.cW=new A.j(4294945600)
B.cV=new A.j(4294938880)
B.cU=new A.j(4294929664)
B.dR=new A.a9([100,B.cY,200,B.cW,400,B.cV,700,B.cU],t.m)
B.a9=new A.a9([B.H,null,B.G,null,B.m,null],A.af("a9<c8,aJ?>"))
B.cx=new A.j(4290377418)
B.cj=new A.j(4285132974)
B.bV=new A.j(4278249078)
B.bU=new A.j(4278241363)
B.dQ=new A.a9([100,B.cx,200,B.cj,400,B.bV,700,B.bU],t.m)
B.dT=new A.cY(B.dQ,4285132974)
B.d8=new A.j(4294967181)
B.d7=new A.j(4294967040)
B.d_=new A.j(4294961664)
B.cZ=new A.j(4294956544)
B.dS=new A.a9([100,B.d8,200,B.d7,400,B.d_,700,B.cZ],t.m)
B.dU=new A.cY(B.dS,4294967040)
B.aZ=new A.cj(B.aX,4294961979)
B.d1=new A.j(4294962158)
B.cX=new A.j(4294954450)
B.cM=new A.j(4293892762)
B.cI=new A.j(4293227379)
B.cL=new A.j(4293874512)
B.cO=new A.j(4294198070)
B.cH=new A.j(4293212469)
B.cE=new A.j(4292030255)
B.cA=new A.j(4291176488)
B.cw=new A.j(4290190364)
B.dN=new A.a9([50,B.d1,100,B.cX,200,B.cM,300,B.cI,400,B.cL,500,B.cO,600,B.cH,700,B.cE,800,B.cA,900,B.cw],t.m)
B.aa=new A.cj(B.dN,4294198070)
B.cG=new A.j(4293128957)
B.cy=new A.j(4290502395)
B.cs=new A.j(4287679225)
B.ch=new A.j(4284790262)
B.c8=new A.j(4282557941)
B.c0=new A.j(4280391411)
B.c_=new A.j(4280191205)
B.bY=new A.j(4279858898)
B.bX=new A.j(4279592384)
B.bW=new A.j(4279060385)
B.dO=new A.a9([50,B.cG,100,B.cy,200,B.cs,300,B.ch,400,B.c8,500,B.c0,600,B.c_,700,B.bY,800,B.bX,900,B.bW],t.m)
B.dV=new A.cj(B.dO,4280391411)
B.el=new A.aQ(1,"nonlethal")
B.dC=A.c(s([B.b8,B.el,B.P]),t.B)
B.e_=new A.Y(B.a3,1,B.dc,0,"Fists",B.dC)
B.b_=new A.cZ(0,"wildBoar")
B.e3=new A.cZ(1,"zyborgMelee")
B.e4=new A.cZ(2,"zyborgRanged")
B.e5=new A.cZ(3,"caveScanner")
B.b1=new A.fT(2,"elementalAffinity")
B.y=new A.k(0,0)
B.ac=new A.e9(0,"small")
B.e9=new A.e9(1,"medium")
B.ea=new A.e9(2,"large")
B.ad=new A.eb(0,"melee")
B.ae=new A.eb(1,"ranged")
B.af=new A.eb(2,"armor")
B.ag=new A.cr(0,"dirt")
B.F=new A.cr(2,"metal")
B.eg=new A.cr(4,"snow")
B.Z=new A.au(0,"door")
B.b4=new A.au(10,"mechanicalLight")
B.b5=new A.au(2,"light")
B.n=new A.au(3,"none")
B.eh=new A.au(4,"chair")
B.ah=new A.au(6,"chest")
B.ei=new A.au(8,"mechanism")
B.ej=new A.au(9,"tree")
B.i=new A.d8(0,"floor")
B.b=new A.d8(1,"wall")
B.ek=A.rw("v")
B.o=new A.d9(0,"float_1")
B.f=new A.d9(1,"float_2")
B.b7=new A.d9(3,"float_4")
B.k=new A.d9(4,"texture_1")})();(function staticFields(){$.l4=null
$.mU=null
$.mT=null
$.nZ=null
$.nV=null
$.o5=null
$.lu=null
$.lA=null
$.mA=null
$.dk=null
$.eO=null
$.eP=null
$.mu=!1
$.E=B.j
$.aG=A.c([],t.hf)
$.bH=null
$.m9=null
$.n_=null
$.mZ=null
$.eo=A.ab(t.N,t.r)
$.n2=0
$.qn=A.bj(["ArrowUp",B.aD,"ArrowDown",B.aF,"ArrowRight",B.aE,"ArrowLeft",B.aG,"q",B.dn," ",B.dr,"0",B.dl,"l",B.dp,"w",B.aD,"a",B.aG,"s",B.aF,"d",B.aE,"Escape",B.dq,"r",B.dm],t.N,t.h8)
$.cA=A.mn("engine")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"rK","oa",()=>A.r7("_$dart_dartClosure"))
s($,"t9","ok",()=>A.bp(A.kA({
toString:function(){return"$receiver$"}})))
s($,"ta","ol",()=>A.bp(A.kA({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"tb","om",()=>A.bp(A.kA(null)))
s($,"tc","on",()=>A.bp(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"tf","oq",()=>A.bp(A.kA(void 0)))
s($,"tg","or",()=>A.bp(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"te","op",()=>A.bp(A.nt(null)))
s($,"td","oo",()=>A.bp(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"ti","ot",()=>A.bp(A.nt(void 0)))
s($,"th","os",()=>A.bp(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"tl","mF",()=>A.pO())
s($,"tw","m3",()=>A.lE(B.ek))
s($,"rI","o9",()=>({}))
s($,"tm","ou",()=>A.na(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N))
s($,"rO","mD",()=>B.w.bo(A.m7(),"Opera",0))
s($,"rN","od",()=>!A.N($.mD())&&B.w.bo(A.m7(),"Trident/",0))
s($,"rM","oc",()=>B.w.bo(A.m7(),"Firefox",0))
s($,"rL","ob",()=>"-"+$.oe()+"-")
s($,"rP","oe",()=>{if(A.N($.oc()))var q="moz"
else if($.od())q="ms"
else q=A.N($.mD())?"o":"webkit"
return q})
s($,"t_","oj",()=>A.c([$.oL(),$.oM(),$.oN(),$.oy(),$.oJ()],A.af("u<bl>")))
s($,"tW","oL",()=>A.fF(A.eW(4,6,8,4,4,8),new A.lV(),A.c([B.ap],t.V),"death_1.mp3",new A.lW(),B.b_,0,4,"Wild Boar",new A.lX()))
s($,"tU","oJ",()=>A.fF(A.eW(4,6,8,4,4,10),new A.lP(),A.c([B.bB],t.V),"death_1.mp3",new A.lQ(),B.b_,2,4,"Snow Bear",new A.lR()))
s($,"tX","oM",()=>A.fF(A.eW(4,8,8,4,4,10),new A.lY(),A.c([B.z,B.A,B.Q,B.B],t.V),"monster_scream_1.mp3",new A.lZ(),B.e3,1,6,"Zyborg",new A.m_()))
s($,"tY","oN",()=>A.fF(A.eW(4,8,10,4,4,10),new A.m0(),A.c([B.z,B.A,B.Q,B.B],t.V),"monster_scream_1.mp3",new A.m1(),B.e4,2,6,"Zyborg Ranged",new A.m2()))
s($,"tB","oy",()=>A.fF(A.eW(4,6,12,6,4,6),new A.lr(),A.c([B.z,B.A,B.Q,B.B],t.V),null,new A.ls(),B.e5,3,6,"Cave Scanner",new A.lt()))
s($,"tE","mG",()=>{var q=A.c([A.bQ(B.f,"u_resolution"),A.bQ(B.o,"u_time"),A.bQ(B.f,"u_offset"),A.bQ(B.f,"u_origin")],t.o)
return A.aI(A.c([A.mR(35044,A.nd(B.x),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\nuniform vec2 u_origin;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  float dist = distance(snapped_position, (u_origin + vec2(0.5, 0.5)) * vec2(24.0, 36.0)) / 50.0;\n  float rand = -1.0 + random(relative_position) / 2.0;\n  float scale_rate = 0.8 * (u_time);\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(249.0 / 255.0, 168.0 / 255.0, 37.0 / 255.0, scale);\n}\n",q,u.h)})
s($,"tI","oC",()=>{var q=A.c([A.bQ(B.f,"u_resolution"),A.bQ(B.o,"u_time"),A.bQ(B.f,"u_offset"),A.bQ(B.f,"u_source"),A.bQ(B.f,"u_target")],t.o)
return A.aI(A.c([A.mR(35044,A.nd(B.x),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nuniform vec2 u_source;\nuniform vec2 u_target;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 p0 = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  vec2 p1 = (u_source + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n  vec2 p2 = (u_target + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n\n  if ((p1.x != p2.x) && (p0.x < p1.x && p0.x < p2.x) || (p0.x > p1.x && p0.x > p2.x)) {\n    discard;\n    return;\n  }\n  if ((p1.y != p2.y) && (p0.y < p1.y && p0.y < p2.y) || (p0.y > p1.y && p0.y > p2.y)) {\n    discard;\n    return;\n  }\n\n  float dist = abs( (p2.x - p1.x) * (p1.y - p0.y) - (p1.x - p0.x) * (p2.y - p1.y) ) / sqrt( pow(p2.x - p1.x, 2.0) + pow(p2.y - p1.y, 2.0) );\n  float rand = random(relative_position);\n  float scale_rate = 1.5;\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = 1.0 - smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(0.1, 0.2, 1.0, 0.8 * scale - u_time);\n}\n",q,u.h)})
s($,"t3","dq",()=>new A.k5())
s($,"rQ","of",()=>A.fZ())
s($,"rW","mE",()=>A.mj(A.bB(4278780675),A.bB(4279308561),A.bB(4280361249)))
s($,"rX","og",()=>A.mj(A.bB(4279898637),A.bB(4281017118),A.bB(4282858034)))
s($,"rZ","oi",()=>A.mj(A.bB(4279765786),A.bB(4280096038),A.bB(4282463311)))
s($,"rY","oh",()=>$.mE())
s($,"tx","dr",()=>A.fZ())
r($,"tA","ox",()=>{var q,p,o=A.c([],t.q)
for(q=1;q<99;++q)for(p=q;p<39;++p)o.push(A.ps(q,p))
return o})
s($,"tz","ow",()=>A.fZ())
s($,"tR","mK",()=>A.db(B.a_,new A.lL()))
s($,"tN","mI",()=>A.db(B.bc,new A.lH()))
s($,"tP","eU",()=>A.db(B.a0,new A.lJ()))
s($,"tM","oF",()=>A.db(B.a_,new A.lG()))
s($,"tO","oG",()=>A.db(B.a_,new A.lI()))
s($,"tQ","mJ",()=>A.db(B.a0,new A.lK()))
s($,"tL","oE",()=>A.db(B.bJ,new A.lF()))
s($,"tK","m4",()=>{var q=$.mK(),p=$.mI()
return A.c([q,p,p,$.eU()],t.D)})
s($,"tJ","oD",()=>{var q=$.oE()
return A.c([q,q,q,q,q,$.eU(),$.mK(),$.mI()],t.D)})
s($,"tH","oB",()=>{var q=$.eU()
return A.c([q,q,q,q],t.D)})
s($,"tG","oA",()=>{var q=$.eU(),p=$.oF()
return A.c([q,q,q,q,q,q,p,p,p,p],t.D)})
s($,"tV","oK",()=>A.c([$.oG(),$.eU()],t.D))
s($,"ty","ov",()=>new Uint8Array(A.cB(A.c([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t))))
s($,"tD","oz",()=>{var q=A.fZ(),p=A.fZ(),o=$.dr(),n=t.t,m=A.af("u<bl>")
n=new A.jb(new A.iW(p,new A.jw(q)),A.c([A.b7(B.z,1,A.bu(o,60)),A.b7(B.z,2,A.bu(o,40)),A.b7(B.z,3,A.bu(o,40)),A.b7(B.z,4,A.bu(o,40)),A.b7(B.A,5,A.bu(o,20)),A.b7(B.A,6,A.bu(o,20)),A.b7(B.A,7,A.bu(o,20)),A.b7(B.B,8,A.bu(o,10)),A.b7(B.B,9,A.bu(o,10)),A.b7(B.B,10,A.bu(o,10)),A.b7(B.Q,11,!1)],A.af("u<fB>")),A.c([2,4,4,4,6,6,6,10,10,10,12],n),A.c([A.aZ(o,10,25),A.aZ(o,115,125),A.aZ(o,115,125),A.aZ(o,115,125),A.aZ(o,125,135),A.aZ(o,125,135),A.aZ(o,125,135),A.aZ(o,135,145),A.aZ(o,135,145),A.aZ(o,135,145),A.aZ(o,170,200)],n),A.c([A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m)],A.af("u<n<bl>>")),A.c([0,0,0,0,0,0,0,0,0,0,0],n),A.ab(t.ee,A.af("c4")))
n.dV()
n.dT()
return n})
s($,"tF","mH",()=>t.cH.a(B.D.bM(t.p.a(A.r3().querySelector("#glCanvas")),"webgl2")))
s($,"tT","oI",()=>new A.fh())
s($,"tS","oH",()=>{var q=t.i
return new A.fV(A.nf(0,q),A.nf(0,q))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.fG,DataView:A.cm,ArrayBufferView:A.cm,Float64Array:A.cl,Float32Array:A.dZ,Int16Array:A.fH,Int32Array:A.fI,Int8Array:A.fJ,Uint16Array:A.fK,Uint32Array:A.fL,Uint8ClampedArray:A.d0,CanvasPixelArray:A.d0,Uint8Array:A.e0,HTMLBRElement:A.t,HTMLButtonElement:A.t,HTMLContentElement:A.t,HTMLDListElement:A.t,HTMLDataElement:A.t,HTMLDataListElement:A.t,HTMLDetailsElement:A.t,HTMLDialogElement:A.t,HTMLEmbedElement:A.t,HTMLFieldSetElement:A.t,HTMLHRElement:A.t,HTMLHeadElement:A.t,HTMLHeadingElement:A.t,HTMLHtmlElement:A.t,HTMLIFrameElement:A.t,HTMLInputElement:A.t,HTMLLIElement:A.t,HTMLLabelElement:A.t,HTMLLegendElement:A.t,HTMLLinkElement:A.t,HTMLMapElement:A.t,HTMLMenuElement:A.t,HTMLMetaElement:A.t,HTMLMeterElement:A.t,HTMLModElement:A.t,HTMLOListElement:A.t,HTMLObjectElement:A.t,HTMLOptGroupElement:A.t,HTMLOptionElement:A.t,HTMLOutputElement:A.t,HTMLParagraphElement:A.t,HTMLParamElement:A.t,HTMLPictureElement:A.t,HTMLPreElement:A.t,HTMLProgressElement:A.t,HTMLQuoteElement:A.t,HTMLScriptElement:A.t,HTMLShadowElement:A.t,HTMLSlotElement:A.t,HTMLSourceElement:A.t,HTMLSpanElement:A.t,HTMLStyleElement:A.t,HTMLTableCaptionElement:A.t,HTMLTableCellElement:A.t,HTMLTableDataCellElement:A.t,HTMLTableHeaderCellElement:A.t,HTMLTableColElement:A.t,HTMLTextAreaElement:A.t,HTMLTimeElement:A.t,HTMLTitleElement:A.t,HTMLTrackElement:A.t,HTMLUListElement:A.t,HTMLUnknownElement:A.t,HTMLDirectoryElement:A.t,HTMLFontElement:A.t,HTMLFrameElement:A.t,HTMLFrameSetElement:A.t,HTMLMarqueeElement:A.t,HTMLElement:A.t,AccessibleNodeList:A.iL,HTMLAnchorElement:A.cH,HTMLAreaElement:A.eZ,HTMLBaseElement:A.cL,Blob:A.f3,HTMLBodyElement:A.c1,HTMLCanvasElement:A.c2,CanvasRenderingContext2D:A.cN,CDATASection:A.b2,CharacterData:A.b2,Comment:A.b2,ProcessingInstruction:A.b2,Text:A.b2,CSSPerspective:A.j4,CSSCharsetRule:A.G,CSSConditionRule:A.G,CSSFontFaceRule:A.G,CSSGroupingRule:A.G,CSSImportRule:A.G,CSSKeyframeRule:A.G,MozCSSKeyframeRule:A.G,WebKitCSSKeyframeRule:A.G,CSSKeyframesRule:A.G,MozCSSKeyframesRule:A.G,WebKitCSSKeyframesRule:A.G,CSSMediaRule:A.G,CSSNamespaceRule:A.G,CSSPageRule:A.G,CSSRule:A.G,CSSStyleRule:A.G,CSSSupportsRule:A.G,CSSViewportRule:A.G,CSSStyleDeclaration:A.cQ,MSStyleCSSProperties:A.cQ,CSS2Properties:A.cQ,CSSImageValue:A.aT,CSSKeywordValue:A.aT,CSSNumericValue:A.aT,CSSPositionValue:A.aT,CSSResourceValue:A.aT,CSSUnitValue:A.aT,CSSURLImageValue:A.aT,CSSStyleValue:A.aT,CSSMatrixComponent:A.be,CSSRotation:A.be,CSSScale:A.be,CSSSkew:A.be,CSSTranslation:A.be,CSSTransformComponent:A.be,CSSTransformValue:A.j6,CSSUnparsedValue:A.j7,DataTransferItemList:A.j8,HTMLDivElement:A.cR,XMLDocument:A.b5,Document:A.b5,DOMException:A.bG,DOMImplementation:A.ff,ClientRectList:A.dH,DOMRectList:A.dH,DOMRectReadOnly:A.dI,DOMStringList:A.fg,DOMTokenList:A.j9,Element:A.M,AbortPaymentEvent:A.l,AnimationEvent:A.l,AnimationPlaybackEvent:A.l,ApplicationCacheErrorEvent:A.l,BackgroundFetchClickEvent:A.l,BackgroundFetchEvent:A.l,BackgroundFetchFailEvent:A.l,BackgroundFetchedEvent:A.l,BeforeInstallPromptEvent:A.l,BeforeUnloadEvent:A.l,BlobEvent:A.l,CanMakePaymentEvent:A.l,ClipboardEvent:A.l,CloseEvent:A.l,CustomEvent:A.l,DeviceMotionEvent:A.l,DeviceOrientationEvent:A.l,ErrorEvent:A.l,ExtendableEvent:A.l,ExtendableMessageEvent:A.l,FetchEvent:A.l,FontFaceSetLoadEvent:A.l,ForeignFetchEvent:A.l,GamepadEvent:A.l,HashChangeEvent:A.l,InstallEvent:A.l,MediaEncryptedEvent:A.l,MediaKeyMessageEvent:A.l,MediaQueryListEvent:A.l,MediaStreamEvent:A.l,MediaStreamTrackEvent:A.l,MessageEvent:A.l,MIDIConnectionEvent:A.l,MIDIMessageEvent:A.l,MutationEvent:A.l,NotificationEvent:A.l,PageTransitionEvent:A.l,PaymentRequestEvent:A.l,PaymentRequestUpdateEvent:A.l,PopStateEvent:A.l,PresentationConnectionAvailableEvent:A.l,PresentationConnectionCloseEvent:A.l,ProgressEvent:A.l,PromiseRejectionEvent:A.l,PushEvent:A.l,RTCDataChannelEvent:A.l,RTCDTMFToneChangeEvent:A.l,RTCPeerConnectionIceEvent:A.l,RTCTrackEvent:A.l,SecurityPolicyViolationEvent:A.l,SensorErrorEvent:A.l,SpeechRecognitionError:A.l,SpeechRecognitionEvent:A.l,SpeechSynthesisEvent:A.l,StorageEvent:A.l,SyncEvent:A.l,TrackEvent:A.l,TransitionEvent:A.l,WebKitTransitionEvent:A.l,VRDeviceEvent:A.l,VRDisplayEvent:A.l,VRSessionEvent:A.l,MojoInterfaceRequestEvent:A.l,ResourceProgressEvent:A.l,USBConnectionEvent:A.l,IDBVersionChangeEvent:A.l,AudioProcessingEvent:A.l,OfflineAudioCompletionEvent:A.l,WebGLContextEvent:A.l,Event:A.l,InputEvent:A.l,SubmitEvent:A.l,AbsoluteOrientationSensor:A.e,Accelerometer:A.e,AccessibleNode:A.e,AmbientLightSensor:A.e,Animation:A.e,ApplicationCache:A.e,DOMApplicationCache:A.e,OfflineResourceList:A.e,BackgroundFetchRegistration:A.e,BatteryManager:A.e,BroadcastChannel:A.e,CanvasCaptureMediaStreamTrack:A.e,DedicatedWorkerGlobalScope:A.e,EventSource:A.e,FileReader:A.e,FontFaceSet:A.e,Gyroscope:A.e,LinearAccelerationSensor:A.e,Magnetometer:A.e,MediaDevices:A.e,MediaKeySession:A.e,MediaQueryList:A.e,MediaRecorder:A.e,MediaSource:A.e,MediaStream:A.e,MediaStreamTrack:A.e,MessagePort:A.e,MIDIAccess:A.e,MIDIInput:A.e,MIDIOutput:A.e,MIDIPort:A.e,NetworkInformation:A.e,Notification:A.e,OffscreenCanvas:A.e,OrientationSensor:A.e,PaymentRequest:A.e,Performance:A.e,PermissionStatus:A.e,PresentationAvailability:A.e,PresentationConnection:A.e,PresentationConnectionList:A.e,PresentationRequest:A.e,RelativeOrientationSensor:A.e,RemotePlayback:A.e,RTCDataChannel:A.e,DataChannel:A.e,RTCDTMFSender:A.e,RTCPeerConnection:A.e,webkitRTCPeerConnection:A.e,mozRTCPeerConnection:A.e,ScreenOrientation:A.e,Sensor:A.e,ServiceWorker:A.e,ServiceWorkerContainer:A.e,ServiceWorkerGlobalScope:A.e,ServiceWorkerRegistration:A.e,SharedWorker:A.e,SharedWorkerGlobalScope:A.e,SpeechRecognition:A.e,SpeechSynthesis:A.e,SpeechSynthesisUtterance:A.e,VR:A.e,VRDevice:A.e,VRDisplay:A.e,VRSession:A.e,VisualViewport:A.e,WebSocket:A.e,Worker:A.e,WorkerGlobalScope:A.e,WorkerPerformance:A.e,BluetoothDevice:A.e,BluetoothRemoteGATTCharacteristic:A.e,Clipboard:A.e,MojoInterfaceInterceptor:A.e,USB:A.e,IDBDatabase:A.e,IDBOpenDBRequest:A.e,IDBVersionChangeRequest:A.e,IDBRequest:A.e,IDBTransaction:A.e,EventTarget:A.e,File:A.ax,FileList:A.fj,FileWriter:A.fk,HTMLFormElement:A.fm,Gamepad:A.ay,History:A.jv,HTMLCollection:A.cb,HTMLFormControlsCollection:A.cb,HTMLOptionsCollection:A.cb,HTMLDocument:A.dO,XMLHttpRequest:A.dP,XMLHttpRequestUpload:A.cc,XMLHttpRequestEventTarget:A.cc,HTMLImageElement:A.cV,KeyboardEvent:A.bi,Location:A.dW,HTMLAudioElement:A.ck,HTMLMediaElement:A.ck,MediaList:A.jP,MIDIInputMap:A.fC,MIDIOutputMap:A.fD,MimeType:A.aA,MimeTypeArray:A.fE,MouseEvent:A.ar,DragEvent:A.ar,PointerEvent:A.ar,WheelEvent:A.ar,DocumentFragment:A.q,ShadowRoot:A.q,DocumentType:A.q,Node:A.q,NodeList:A.e1,RadioNodeList:A.e1,Plugin:A.aB,PluginArray:A.fW,RTCStatsReport:A.h2,HTMLSelectElement:A.h4,SourceBuffer:A.at,SourceBufferList:A.h7,SpeechGrammar:A.aC,SpeechGrammarList:A.h8,SpeechRecognitionResult:A.aD,Storage:A.hb,CSSStyleSheet:A.ah,StyleSheet:A.ah,HTMLTableElement:A.ee,HTMLTableRowElement:A.he,HTMLTableSectionElement:A.hf,HTMLTemplateElement:A.d7,TextTrack:A.av,TextTrackCue:A.ad,VTTCue:A.ad,TextTrackCueList:A.hh,TextTrackList:A.hi,TimeRanges:A.kx,Touch:A.aE,TouchList:A.hk,TrackDefaultList:A.ky,CompositionEvent:A.b9,FocusEvent:A.b9,TextEvent:A.b9,TouchEvent:A.b9,UIEvent:A.b9,URL:A.kB,HTMLVideoElement:A.da,VideoTrackList:A.hs,Window:A.dc,DOMWindow:A.dc,Attr:A.de,CSSRuleList:A.hC,ClientRect:A.el,DOMRect:A.el,GamepadList:A.hQ,NamedNodeMap:A.es,MozNamedAttrMap:A.es,SpeechRecognitionResultList:A.ib,StyleSheetList:A.ij,SVGLength:A.aK,SVGLengthList:A.fw,SVGNumber:A.aN,SVGNumberList:A.fQ,SVGPointList:A.k7,SVGScriptElement:A.d5,SVGStringList:A.hd,SVGAElement:A.m,SVGAnimateElement:A.m,SVGAnimateMotionElement:A.m,SVGAnimateTransformElement:A.m,SVGAnimationElement:A.m,SVGCircleElement:A.m,SVGClipPathElement:A.m,SVGDefsElement:A.m,SVGDescElement:A.m,SVGDiscardElement:A.m,SVGEllipseElement:A.m,SVGFEBlendElement:A.m,SVGFEColorMatrixElement:A.m,SVGFEComponentTransferElement:A.m,SVGFECompositeElement:A.m,SVGFEConvolveMatrixElement:A.m,SVGFEDiffuseLightingElement:A.m,SVGFEDisplacementMapElement:A.m,SVGFEDistantLightElement:A.m,SVGFEFloodElement:A.m,SVGFEFuncAElement:A.m,SVGFEFuncBElement:A.m,SVGFEFuncGElement:A.m,SVGFEFuncRElement:A.m,SVGFEGaussianBlurElement:A.m,SVGFEImageElement:A.m,SVGFEMergeElement:A.m,SVGFEMergeNodeElement:A.m,SVGFEMorphologyElement:A.m,SVGFEOffsetElement:A.m,SVGFEPointLightElement:A.m,SVGFESpecularLightingElement:A.m,SVGFESpotLightElement:A.m,SVGFETileElement:A.m,SVGFETurbulenceElement:A.m,SVGFilterElement:A.m,SVGForeignObjectElement:A.m,SVGGElement:A.m,SVGGeometryElement:A.m,SVGGraphicsElement:A.m,SVGImageElement:A.m,SVGLineElement:A.m,SVGLinearGradientElement:A.m,SVGMarkerElement:A.m,SVGMaskElement:A.m,SVGMetadataElement:A.m,SVGPathElement:A.m,SVGPatternElement:A.m,SVGPolygonElement:A.m,SVGPolylineElement:A.m,SVGRadialGradientElement:A.m,SVGRectElement:A.m,SVGSetElement:A.m,SVGStopElement:A.m,SVGStyleElement:A.m,SVGSVGElement:A.m,SVGSwitchElement:A.m,SVGSymbolElement:A.m,SVGTSpanElement:A.m,SVGTextContentElement:A.m,SVGTextElement:A.m,SVGTextPathElement:A.m,SVGTextPositioningElement:A.m,SVGTitleElement:A.m,SVGUseElement:A.m,SVGViewElement:A.m,SVGGradientElement:A.m,SVGComponentTransferFunctionElement:A.m,SVGFEDropShadowElement:A.m,SVGMPathElement:A.m,SVGElement:A.m,SVGTransform:A.aP,SVGTransformList:A.hl,AudioBuffer:A.b0,AudioBufferSourceNode:A.dB,AudioContext:A.c0,webkitAudioContext:A.c0,AnalyserNode:A.F,RealtimeAnalyserNode:A.F,AudioDestinationNode:A.F,AudioWorkletNode:A.F,BiquadFilterNode:A.F,ChannelMergerNode:A.F,AudioChannelMerger:A.F,ChannelSplitterNode:A.F,AudioChannelSplitter:A.F,ConvolverNode:A.F,DelayNode:A.F,DynamicsCompressorNode:A.F,IIRFilterNode:A.F,MediaElementAudioSourceNode:A.F,MediaStreamAudioDestinationNode:A.F,MediaStreamAudioSourceNode:A.F,PannerNode:A.F,AudioPannerNode:A.F,webkitAudioPannerNode:A.F,ScriptProcessorNode:A.F,JavaScriptAudioNode:A.F,StereoPannerNode:A.F,WaveShaperNode:A.F,AudioNode:A.F,AudioParam:A.f_,AudioParamMap:A.f0,ConstantSourceNode:A.bd,OscillatorNode:A.bd,Oscillator:A.bd,AudioScheduledSourceNode:A.bd,AudioTrackList:A.f1,BaseAudioContext:A.dC,GainNode:A.cU,AudioGainNode:A.cU,OfflineAudioContext:A.fR,WebGLBuffer:A.f4,WebGLFramebuffer:A.fn,WebGLProgram:A.fX,WebGL2RenderingContext:A.d3,WebGLTexture:A.bo,WebGLUniformLocation:A.hm,WebGLVertexArrayObject:A.hr})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,AudioParam:true,AudioParamMap:true,ConstantSourceNode:true,OscillatorNode:true,Oscillator:true,AudioScheduledSourceNode:false,AudioTrackList:true,BaseAudioContext:false,GainNode:true,AudioGainNode:true,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true})
A.d_.$nativeSuperclassTag="ArrayBufferView"
A.et.$nativeSuperclassTag="ArrayBufferView"
A.eu.$nativeSuperclassTag="ArrayBufferView"
A.cl.$nativeSuperclassTag="ArrayBufferView"
A.ev.$nativeSuperclassTag="ArrayBufferView"
A.ew.$nativeSuperclassTag="ArrayBufferView"
A.e_.$nativeSuperclassTag="ArrayBufferView"
A.ez.$nativeSuperclassTag="EventTarget"
A.eA.$nativeSuperclassTag="EventTarget"
A.eE.$nativeSuperclassTag="EventTarget"
A.eF.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.lC
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

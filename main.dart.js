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
a[c]=function(){a[c]=function(){A.qK(b)}
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
if(a[b]!==s)A.qL(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=b.fs[0]
if(a)return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"(receiver) {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(receiver, this);"+"}")(b,A.m8,null)
else return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"() {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(this, null);"+"}")(b,A.m8,null)}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.m8(a).prototype
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
a(hunkHelpers,v,w,$)}var A={lP:function lP(){},
mD(a){return new A.cc("Field '"+a+"' has been assigned during initialization.")},
mE(a){return new A.cc("Field '"+a+"' has not been initialized.")},
bK(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lW(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
p4(a,b,c){return A.lW(A.bK(A.bK(c,a),b))},
eA(a,b,c){return a},
mV(a,b,c,d){A.jT(b,"start")
if(c!=null){A.jT(c,"end")
if(b>c)A.R(A.ck(b,0,c,"start",null))}return new A.e0(a,b,c,d.i("e0<0>"))},
mH(a,b,c,d){if(t.gt.b(a))return new A.dz(a,b,c.i("@<0>").B(d).i("dz<1,2>"))
return new A.ce(a,b,c.i("@<0>").B(d).i("ce<1,2>"))},
oE(){return new A.bm("No element")},
oG(){return new A.bm("Too many elements")},
oF(){return new A.bm("Too few elements")},
p1(a,b,c){A.fP(a,0,J.aj(a)-1,b,c)},
fP(a,b,c,d,e){if(c-b<=32)A.p0(a,b,c,d,e)
else A.p_(a,b,c,d,e)},
p0(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.at(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.T()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
p_(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.e.N(a5-a4+1,6),i=a4+j,h=a5-j,g=B.e.N(a4+a5,2),f=g-j,e=g+j,d=J.at(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.T()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.T()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.T()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.T()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.T()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.T()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.T()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.T()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.T()
if(a2>0){s=a1
a1=a0
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.T(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
A.fP(a3,a4,r-2,a6,a7)
A.fP(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.T(a6.$2(d.h(a3,r),b),0);)++r
for(;J.T(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}A.fP(a3,r,q,a6,a7)}else A.fP(a3,r,q,a6,a7)},
cc:function cc(a){this.a=a},
jZ:function jZ(){},
o:function o(){},
aT:function aT(){},
e0:function e0(a,b,c,d){var _=this
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
ce:function ce(a,b,c){this.a=a
this.b=b
this.$ti=c},
dz:function dz(a,b,c){this.a=a
this.b=b
this.$ti=c},
dL:function dL(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
dM:function dM(a,b,c){this.a=a
this.b=b
this.$ti=c},
aF:function aF(a,b,c){this.a=a
this.b=b
this.$ti=c},
e3:function e3(a,b,c){this.a=a
this.b=b
this.$ti=c},
an:function an(){},
oB(a){if(typeof a=="number")return B.c.gt(a)
if(t.ha.b(a))return A.cj(a)
return A.lf(a)},
oC(a){return new A.ja(a)},
nA(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
qy(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
z(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cw(a)
return s},
cj(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
jP(a){return A.oQ(a)},
oQ(a){var s,r,q,p
if(a instanceof A.v)return A.ai(A.aY(a),null)
if(J.dd(a)===B.dq||t.cx.b(a)){s=B.aL(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.ai(A.aY(a),null)},
cT(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oX(a){var s=A.cT(a).getUTCFullYear()+0
return s},
oV(a){var s=A.cT(a).getUTCMonth()+1
return s},
oR(a){var s=A.cT(a).getUTCDate()+0
return s},
oS(a){var s=A.cT(a).getUTCHours()+0
return s},
oU(a){var s=A.cT(a).getUTCMinutes()+0
return s},
oW(a){var s=A.cT(a).getUTCSeconds()+0
return s},
oT(a){var s=A.cT(a).getUTCMilliseconds()+0
return s},
ct(a){throw A.d(A.nn(a))},
b(a,b){if(a==null)J.aj(a)
throw A.d(A.dc(a,b))},
dc(a,b){var s,r="index"
if(!A.m5(b))return new A.bb(!0,b,r,null)
s=A.I(J.aj(a))
if(b<0||b>=s)return A.P(b,a,r,null,s)
return A.mN(b,r)},
nn(a){return new A.bb(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.fy()
s=new Error()
s.dartException=a
r=A.qM
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qM(){return J.cw(this.dartException)},
R(a){throw A.d(a)},
B(a){throw A.d(A.bE(a))},
bp(a){var s,r,q,p,o,n
a=A.qG(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.kf(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
kg(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mY(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lQ(a,b){var s=b==null,r=s?null:b.method
return new A.fe(a,r,s?null:b.receiver)},
bA(a){if(a==null)return new A.jK(a)
if(a instanceof A.dA)return A.bX(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.bX(a,a.dartException)
return A.q9(a)},
bX(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.c8(r,16)&8191)===10)switch(q){case 438:return A.bX(a,A.lQ(A.z(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.z(s)+" (Error "+q+")"
return A.bX(a,new A.dR(p,e))}}if(a instanceof TypeError){o=$.nM()
n=$.nN()
m=$.nO()
l=$.nP()
k=$.nS()
j=$.nT()
i=$.nR()
$.nQ()
h=$.nV()
g=$.nU()
f=o.Y(s)
if(f!=null)return A.bX(a,A.lQ(A.ah(s),f))
else{f=n.Y(s)
if(f!=null){f.method="call"
return A.bX(a,A.lQ(A.ah(s),f))}else{f=m.Y(s)
if(f==null){f=l.Y(s)
if(f==null){f=k.Y(s)
if(f==null){f=j.Y(s)
if(f==null){f=i.Y(s)
if(f==null){f=l.Y(s)
if(f==null){f=h.Y(s)
if(f==null){f=g.Y(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.ah(s)
return A.bX(a,new A.dR(s,f==null?e:f.method))}}}return A.bX(a,new A.h6(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.e_()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.bX(a,new A.bb(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.e_()
return a},
by(a){var s
if(a instanceof A.dA)return a.b
if(a==null)return new A.el(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.el(a)},
lf(a){if(a==null||typeof a!="object")return J.cv(a)
else return A.cj(a)},
np(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
qw(a,b,c,d,e,f){t.gY.a(a)
switch(A.I(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.lL("Unsupported number of arguments for wrapped closure"))},
ba(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.qw)
a.$identity=s
return s},
oq(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.fV().constructor.prototype):Object.create(new A.cB(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else{q=$.bd
if(typeof q!=="number")return q.v()
$.bd=q+1
q=new Function("a,b"+q,"this.$initialize(a,b"+q+")")
r=q}s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.mt(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.om(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.mt(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
om(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ok)}throw A.d("Error in functionType of tearoff")},
on(a,b,c,d){var s=A.mr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
mt(a,b,c,d){var s,r,q,p,o,n="receiver"
if(c)return A.op(a,b,d)
s=b.length
r=d||s>=27
if(r)return A.on(s,d,a,b)
if(s===0){r=$.bd
if(typeof r!=="number")return r.v()
$.bd=r+1
q="self"+r
r="return function(){var "+q+" = this."
p=$.dt
return new Function(r+(p==null?$.dt=A.iI(n):p)+";return "+q+"."+a+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
r=$.bd
if(typeof r!=="number")return r.v()
$.bd=r+1
o+=r
r="return function("+o+"){return this."
p=$.dt
return new Function(r+(p==null?$.dt=A.iI(n):p)+"."+a+"("+o+");}")()},
oo(a,b,c,d){var s=A.mr,r=A.ol
switch(b?-1:a){case 0:throw A.d(new A.fN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
op(a,b,c){var s,r,q,p,o,n=$.mq
if(n==null)n=$.mq=A.iI("interceptor")
s=$.dt
if(s==null)s=$.dt=A.iI("receiver")
r=b.length
q=c||r>=28
if(q)return A.oo(r,c,a,b)
if(r===1){q="return function(){return this."+n+"."+a+"(this."+s+");"
p=$.bd
if(typeof p!=="number")return p.v()
$.bd=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
q="return function("+o+"){return this."+n+"."+a+"(this."+s+", "+o+");"
p=$.bd
if(typeof p!=="number")return p.v()
$.bd=p+1
return new Function(q+p+"}")()},
m8(a){return A.oq(a)},
ok(a,b){return A.kT(v.typeUniverse,A.aY(a.a),b)},
mr(a){return a.a},
ol(a){return a.b},
iI(a){var s,r,q,p=new A.cB("receiver","interceptor"),o=J.mC(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.cy("Field name "+a+" not found.",null))},
O(a){if(a==null)A.qa("boolean expression must not be null")
return a},
qa(a){throw A.d(new A.hd(a))},
qK(a){throw A.d(new A.eY(a))},
qq(a){return v.getIsolateTag(a)},
rT(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qB(a){var s,r,q,p,o,n=A.ah($.nq.$1(a)),m=$.l5[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lb[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.py($.nm.$2(a,n))
if(q!=null){m=$.l5[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lb[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.le(s)
$.l5[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.lb[n]=s
return s}if(p==="-"){o=A.le(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.nw(a,s)
if(p==="*")throw A.d(A.lX(n))
if(v.leafTags[n]===true){o=A.le(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.nw(a,s)},
nw(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.mb(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
le(a){return J.mb(a,!1,null,!!a.$ix)},
qC(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.le(s)
else return J.mb(s,c,null,null)},
qu(){if(!0===$.ma)return
$.ma=!0
A.qv()},
qv(){var s,r,q,p,o,n,m,l
$.l5=Object.create(null)
$.lb=Object.create(null)
A.qt()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nx.$1(o)
if(n!=null){m=A.qC(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qt(){var s,r,q,p,o,n,m=B.bZ()
m=A.db(B.c_,A.db(B.c0,A.db(B.aM,A.db(B.aM,A.db(B.c1,A.db(B.c2,A.db(B.c3(B.aL),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nq=new A.l8(p)
$.nm=new A.l9(o)
$.nx=new A.la(n)},
db(a,b){return a(b)||b},
qJ(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qG(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cF:function cF(){},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ac:function ac(a,b){this.a=a
this.$ti=b},
ja:function ja(a){this.a=a},
kf:function kf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dR:function dR(a,b){this.a=a
this.b=b},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a){this.a=a},
jK:function jK(a){this.a=a},
dA:function dA(a,b){this.a=a
this.b=b},
el:function el(a){this.a=a
this.b=null},
c1:function c1(){},
eT:function eT(){},
eU:function eU(){},
fZ:function fZ(){},
fV:function fV(){},
cB:function cB(a,b){this.a=a
this.b=b},
fN:function fN(a){this.a=a},
hd:function hd(a){this.a=a},
ax:function ax(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jn:function jn(a){this.a=a},
jm:function jm(a){this.a=a},
jp:function jp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dI:function dI(a,b){this.a=a
this.$ti=b},
dJ:function dJ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
la:function la(a){this.a=a},
qL(a){return A.R(A.mD(a))},
lY(a){var s=new A.ku(a)
return s.b=s},
aG(a,b){if(a===$)throw A.d(A.mE(b))
return a},
d8(a,b){if(a!==$)throw A.d(A.mD(b))},
ku:function ku(a){this.a=a
this.b=null},
nb(a,b,c){},
d6(a){return a},
mI(a){return new Float32Array(A.d6(a))},
jH(a,b,c){A.nb(a,b,c)
return new Float32Array(a,b,c)},
mJ(a,b,c){var s
A.nb(a,b,c)
s=new Uint8Array(a,b,c)
return s},
bt(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.dc(b,a))},
fp:function fp(){},
ch:function ch(){},
cR:function cR(){},
cg:function cg(){},
dO:function dO(){},
dN:function dN(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
cS:function cS(){},
dP:function dP(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
mP(a,b){var s=b.c
return s==null?b.c=A.m2(a,b.z,!0):s},
mO(a,b){var s=b.c
return s==null?b.c=A.et(a,"ao",[b.z]):s},
mQ(a){var s=a.y
if(s===6||s===7||s===8)return A.mQ(a.z)
return s===11||s===12},
oZ(a){return a.cy},
aa(a){return A.i9(v.typeUniverse,a,!1)},
bW(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.bW(a,s,a0,a1)
if(r===s)return b
return A.n7(a,r,!0)
case 7:s=b.z
r=A.bW(a,s,a0,a1)
if(r===s)return b
return A.m2(a,r,!0)
case 8:s=b.z
r=A.bW(a,s,a0,a1)
if(r===s)return b
return A.n6(a,r,!0)
case 9:q=b.Q
p=A.ez(a,q,a0,a1)
if(p===q)return b
return A.et(a,b.z,p)
case 10:o=b.z
n=A.bW(a,o,a0,a1)
m=b.Q
l=A.ez(a,m,a0,a1)
if(n===o&&l===m)return b
return A.m0(a,n,l)
case 11:k=b.z
j=A.bW(a,k,a0,a1)
i=b.Q
h=A.q6(a,i,a0,a1)
if(j===k&&h===i)return b
return A.n5(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.ez(a,g,a0,a1)
o=b.z
n=A.bW(a,o,a0,a1)
if(f===g&&n===o)return b
return A.m1(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.ix("Attempted to substitute unexpected RTI kind "+c))}},
ez(a,b,c,d){var s,r,q,p,o=b.length,n=A.kV(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bW(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
q7(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.kV(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bW(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
q6(a,b,c,d){var s,r=b.a,q=A.ez(a,r,c,d),p=b.b,o=A.ez(a,p,c,d),n=b.c,m=A.q7(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.hv()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
qi(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.qr(s)
return a.$S()}return null},
nr(a,b){var s
if(A.mQ(b))if(a instanceof A.c1){s=A.qi(a)
if(s!=null)return s}return A.aY(a)},
aY(a){var s
if(a instanceof A.v){s=a.$ti
return s!=null?s:A.m3(a)}if(Array.isArray(a))return A.a4(a)
return A.m3(J.dd(a))},
a4(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
C(a){var s=a.$ti
return s!=null?s:A.m3(a)},
m3(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.pO(a,s)},
pO(a,b){var s=a instanceof A.c1?a.__proto__.__proto__.constructor:b,r=A.pv(v.typeUniverse,s.name)
b.$ccache=r
return r},
qr(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.i9(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ql(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.er(a)
q=A.i9(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.er(q):p},
qN(a){return A.ql(A.i9(v.typeUniverse,a,!1))},
pN(a){var s,r,q,p,o=this
if(o===t.K)return A.d7(o,a,A.pS)
if(!A.bz(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.d7(o,a,A.pV)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.m5
else if(r===t.i||r===t.cZ)q=A.pR
else if(r===t.N)q=A.pT
else q=r===t.k4?A.kY:null
if(q!=null)return A.d7(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.qz)){o.r="$i"+p
if(p==="m")return A.d7(o,a,A.pQ)
return A.d7(o,a,A.pU)}}else if(s===7)return A.d7(o,a,A.pL)
return A.d7(o,a,A.pJ)},
d7(a,b,c){a.b=c
return a.b(b)},
pM(a){var s,r=this,q=A.pI
if(!A.bz(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.pz
else if(r===t.K)q=A.px
else{s=A.eB(r)
if(s)q=A.pK}r.a=q
return r.a(a)},
kZ(a){var s,r=a.y
if(!A.bz(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&A.kZ(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pJ(a){var s=this
if(a==null)return A.kZ(s)
return A.Q(v.typeUniverse,A.nr(a,s),null,s,null)},
pL(a){if(a==null)return!0
return this.z.b(a)},
pU(a){var s,r=this
if(a==null)return A.kZ(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dd(a)[s]},
pQ(a){var s,r=this
if(a==null)return A.kZ(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dd(a)[s]},
pI(a){var s,r=this
if(a==null){s=A.eB(r)
if(s)return a}else if(r.b(a))return a
A.nf(a,r)},
pK(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.nf(a,s)},
nf(a,b){throw A.d(A.n4(A.n_(a,A.nr(a,b),A.ai(b,null))))},
qh(a,b,c,d){var s=null
if(A.Q(v.typeUniverse,a,s,b,s))return a
throw A.d(A.n4("The type argument '"+A.ai(a,s)+"' is not a subtype of the type variable bound '"+A.ai(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
n_(a,b,c){var s=A.f2(a),r=A.ai(b==null?A.aY(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
n4(a){return new A.es("TypeError: "+a)},
ag(a,b){return new A.es("TypeError: "+A.n_(a,null,b))},
pS(a){return a!=null},
px(a){if(a!=null)return a
throw A.d(A.ag(a,"Object"))},
pV(a){return!0},
pz(a){return a},
kY(a){return!0===a||!1===a},
rD(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.ag(a,"bool"))},
rF(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.ag(a,"bool"))},
rE(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.ag(a,"bool?"))},
na(a){if(typeof a=="number")return a
throw A.d(A.ag(a,"double"))},
rH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ag(a,"double"))},
rG(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ag(a,"double?"))},
m5(a){return typeof a=="number"&&Math.floor(a)===a},
I(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.ag(a,"int"))},
rJ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.ag(a,"int"))},
rI(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.ag(a,"int?"))},
pR(a){return typeof a=="number"},
aW(a){if(typeof a=="number")return a
throw A.d(A.ag(a,"num"))},
rL(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ag(a,"num"))},
rK(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ag(a,"num?"))},
pT(a){return typeof a=="string"},
ah(a){if(typeof a=="string")return a
throw A.d(A.ag(a,"String"))},
rM(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.ag(a,"String"))},
py(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.ag(a,"String?"))},
q2(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.ai(a[q],b)
return s},
ng(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.c([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.l(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.b(a5,j)
m=B.y.v(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.ai(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.ai(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.ai(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.ai(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.ai(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ai(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.ai(a.z,b)
return s}if(l===7){r=a.z
s=A.ai(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.ai(a.z,b)+">"
if(l===9){p=A.q8(a.z)
o=a.Q
return o.length>0?p+("<"+A.q2(o,b)+">"):p}if(l===11)return A.ng(a,b,null)
if(l===12)return A.ng(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
q8(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
pw(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pv(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.i9(a,b,!1)
else if(typeof m=="number"){s=m
r=A.eu(a,5,"#")
q=A.kV(s)
for(p=0;p<s;++p)q[p]=r
o=A.et(a,b,q)
n[b]=o
return o}else return m},
pt(a,b){return A.n8(a.tR,b)},
ps(a,b){return A.n8(a.eT,b)},
i9(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.n2(A.n0(a,null,b,c))
r.set(b,s)
return s},
kT(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.n2(A.n0(a,b,c,!0))
q.set(c,r)
return r},
pu(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.m0(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bV(a,b){b.a=A.pM
b.b=A.pN
return b},
eu(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aU(null,null)
s.y=b
s.cy=c
r=A.bV(a,s)
a.eC.set(c,r)
return r},
n7(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.pq(a,b,r,c)
a.eC.set(r,s)
return s},
pq(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bz(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.aU(null,null)
q.y=6
q.z=b
q.cy=c
return A.bV(a,q)},
m2(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.pp(a,b,r,c)
a.eC.set(r,s)
return s},
pp(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.bz(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.eB(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.eB(q.z))return q
else return A.mP(a,b)}}p=new A.aU(null,null)
p.y=7
p.z=b
p.cy=c
return A.bV(a,p)},
n6(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.pn(a,b,r,c)
a.eC.set(r,s)
return s},
pn(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bz(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.et(a,"ao",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.aU(null,null)
q.y=8
q.z=b
q.cy=c
return A.bV(a,q)},
pr(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aU(null,null)
s.y=13
s.z=b
s.cy=q
r=A.bV(a,s)
a.eC.set(q,r)
return r},
i8(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pm(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
et(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.i8(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aU(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.bV(a,r)
a.eC.set(p,q)
return q},
m0(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.i8(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aU(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.bV(a,o)
a.eC.set(q,n)
return n},
n5(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.i8(m)
if(j>0){s=l>0?",":""
r=A.i8(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.pm(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aU(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.bV(a,o)
a.eC.set(q,r)
return r},
m1(a,b,c,d){var s,r=b.cy+("<"+A.i8(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.po(a,b,c,r,d)
a.eC.set(r,s)
return s},
po(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.kV(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.bW(a,b,r,0)
m=A.ez(a,c,r,0)
return A.m1(a,n,m,c!==m)}}l=new A.aU(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.bV(a,l)},
n0(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
n2(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.pg(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.n1(a,r,h,g,!1)
else if(q===46)r=A.n1(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.bT(a.u,a.e,g.pop()))
break
case 94:g.push(A.pr(a.u,g.pop()))
break
case 35:g.push(A.eu(a.u,5,"#"))
break
case 64:g.push(A.eu(a.u,2,"@"))
break
case 126:g.push(A.eu(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.m_(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.et(p,n,o))
else{m=A.bT(p,a.e,n)
switch(m.y){case 11:g.push(A.m1(p,m,o,a.n))
break
default:g.push(A.m0(p,m,o))
break}}break
case 38:A.ph(a,g)
break
case 42:p=a.u
g.push(A.n7(p,A.bT(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.m2(p,A.bT(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.n6(p,A.bT(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.hv()
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
A.m_(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.n5(p,A.bT(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.m_(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.pj(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.bT(a.u,a.e,i)},
pg(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
n1(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.pw(s,o.z)[p]
if(n==null)A.R('No "'+p+'" in "'+A.oZ(o)+'"')
d.push(A.kT(s,o,n))}else d.push(p)
return m},
ph(a,b){var s=b.pop()
if(0===s){b.push(A.eu(a.u,1,"0&"))
return}if(1===s){b.push(A.eu(a.u,4,"1&"))
return}throw A.d(A.ix("Unexpected extended operation "+A.z(s)))},
bT(a,b,c){if(typeof c=="string")return A.et(a,c,a.sEA)
else if(typeof c=="number")return A.pi(a,b,c)
else return c},
m_(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bT(a,b,c[s])},
pj(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bT(a,b,c[s])},
pi(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.d(A.ix("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.d(A.ix("Bad index "+c+" for "+b.k(0)))},
Q(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.bz(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.bz(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.Q(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return A.Q(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.Q(a,b.z,c,d,e)
if(r===6)return A.Q(a,b.z,c,d,e)
return r!==7}if(r===6)return A.Q(a,b.z,c,d,e)
if(p===6){s=A.mP(a,d)
return A.Q(a,b,c,s,e)}if(r===8){if(!A.Q(a,b.z,c,d,e))return!1
return A.Q(a,A.mO(a,b),c,d,e)}if(r===7){s=A.Q(a,t.P,c,d,e)
return s&&A.Q(a,b.z,c,d,e)}if(p===8){if(A.Q(a,b,c,d.z,e))return!0
return A.Q(a,b,c,A.mO(a,d),e)}if(p===7){s=A.Q(a,b,c,t.P,e)
return s||A.Q(a,b,c,d.z,e)}if(q)return!1
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
if(!A.Q(a,k,c,j,e)||!A.Q(a,j,e,k,c))return!1}return A.nh(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.nh(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.pP(a,b,c,d,e)}return!1},
nh(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.Q(a3,a4.z,a5,a6.z,a7))return!1
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
if(!A.Q(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.Q(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.Q(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.Q(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pP(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.kT(a,b,r[o])
return A.n9(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.n9(a,n,null,c,m,e)},
n9(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.Q(a,r,d,q,f))return!1}return!0},
eB(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.bz(a))if(r!==7)if(!(r===6&&A.eB(a.z)))s=r===8&&A.eB(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qz(a){var s
if(!A.bz(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bz(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.iD},
n8(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
kV(a){return a>0?new Array(a):v.typeUniverse.sEA},
aU:function aU(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
hv:function hv(){this.c=this.b=this.a=null},
er:function er(a){this.a=a},
hr:function hr(){},
es:function es(a){this.a=a},
p9(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.qb()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.ba(new A.kr(q),1)).observe(s,{childList:true})
return new A.kq(q,s,r)}else if(self.setImmediate!=null)return A.qc()
return A.qd()},
pa(a){self.scheduleImmediate(A.ba(new A.ks(t.M.a(a)),0))},
pb(a){self.setImmediate(A.ba(new A.kt(t.M.a(a)),0))},
pc(a){t.M.a(a)
A.pk(0,a)},
mW(a,b){var s=B.e.N(a.a,1000)
return A.pl(s<0?0:s,b)},
pk(a,b){var s=new A.eq(!0)
s.dd(a,b)
return s},
pl(a,b){var s=new A.eq(!1)
s.de(a,b)
return s},
bv(a){return new A.he(new A.H($.D,a.i("H<0>")),a.i("he<0>"))},
bs(a,b){a.$2(0,null)
b.b=!0
return b.a},
a5(a,b){A.pA(a,b)},
br(a,b){b.a1(0,a)},
bq(a,b){b.bc(A.bA(a),A.by(a))},
pA(a,b){var s,r,q=new A.kW(b),p=new A.kX(b)
if(a instanceof A.H)a.ca(q,p,t.z)
else{s=t.z
if(t.h.b(a))a.aK(q,p,s)
else{r=new A.H($.D,t.f)
r.a=8
r.c=a
r.ca(q,p,s)}}},
bw(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.D.bp(new A.l0(s),t.H,t.S,t.z)},
iy(a,b){var s=A.eA(a,"error",t.K)
return new A.dp(s,b==null?A.lH(a):b)},
lH(a){var s
if(t.fz.b(a)){s=a.gas()
if(s!=null)return s}return B.c6},
oz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=null,e=!1,d=b.i("H<m<0>>"),c=new A.H($.D,d)
g.a=null
g.b=0
s=A.lY("error")
r=A.lY("stackTrace")
q=new A.j8(g,f,e,c,s,r)
try{for(l=a.length,k=t.P,j=0,i=0;j<a.length;a.length===l||(0,A.B)(a),++j){p=a[j]
o=i
p.aK(new A.j7(g,o,c,f,e,s,r,b),q,k)
i=++g.b}if(i===0){l=c
l.al(A.c([],b.i("r<0>")))
return l}g.a=A.b5(i,null,!1,b.i("0?"))}catch(h){n=A.bA(h)
m=A.by(h)
if(g.b===0||A.O(e)){l=n
r=m
A.eA(l,"error",t.K)
$.D!==B.j
if(r==null)r=A.lH(l)
d=new A.H($.D,d)
d.aT(l,r)
return d}else{s.b=n
r.b=m}}return c},
kA(a,b){var s,r,q
for(s=t.f;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.ax()
b.aV(a)
A.d4(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.c4(q)}},
d4(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.h;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.il(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.d4(c.a,b)
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
A.il(i.a,i.b)
return}f=$.D
if(f!==g)$.D=g
else f=null
b=b.c
if((b&15)===8)new A.kI(p,c,m).$0()
else if(n){if((b&1)!==0)new A.kH(p,i).$0()}else if((b&2)!==0)new A.kG(c,p).$0()
if(f!=null)$.D=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("ao<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.ay(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.kA(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.ay(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
q0(a,b){var s
if(t.ng.b(a))return b.bp(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.mo(a,"onError",u.c))},
pY(){var s,r
for(s=$.d9;s!=null;s=$.d9){$.ey=null
r=s.b
$.d9=r
if(r==null)$.ex=null
s.a.$0()}},
q5(){$.m4=!0
try{A.pY()}finally{$.ey=null
$.m4=!1
if($.d9!=null)$.me().$1(A.no())}},
nk(a){var s=new A.hf(a),r=$.ex
if(r==null){$.d9=$.ex=s
if(!$.m4)$.me().$1(A.no())}else $.ex=r.b=s},
q3(a){var s,r,q,p=$.d9
if(p==null){A.nk(a)
$.ey=$.ex
return}s=new A.hf(a)
r=$.ey
if(r==null){s.b=p
$.d9=$.ey=s}else{q=r.b
s.b=q
$.ey=r.b=s
if(q==null)$.ex=s}},
ny(a){var s=null,r=$.D
if(B.j===r){A.da(s,s,B.j,a)
return}A.da(s,s,r,t.M.a(r.ci(a)))},
rp(a,b){A.eA(a,"stream",t.K)
return new A.hW(b.i("hW<0>"))},
mT(a){return new A.d2(null,null,null,a.i("d2<0>"))},
m7(a){return},
pd(a,b){if(b==null)b=A.qf()
if(t.fQ.b(b))return a.bp(b,t.z,t.K,t.l)
if(t.i6.b(b))return t.y.a(b)
throw A.d(A.cy("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
q_(a,b){A.il(a,b)},
pZ(){},
p5(a,b){var s=$.D
if(s===B.j)return A.mW(a,t.my.a(b))
return A.mW(a,t.my.a(s.cj(b,t.hU)))},
il(a,b){A.q3(new A.l_(a,b))},
ni(a,b,c,d,e){var s,r=$.D
if(r===c)return d.$0()
$.D=c
s=r
try{r=d.$0()
return r}finally{$.D=s}},
nj(a,b,c,d,e,f,g){var s,r=$.D
if(r===c)return d.$1(e)
$.D=c
s=r
try{r=d.$1(e)
return r}finally{$.D=s}},
q1(a,b,c,d,e,f,g,h,i){var s,r=$.D
if(r===c)return d.$2(e,f)
$.D=c
s=r
try{r=d.$2(e,f)
return r}finally{$.D=s}},
da(a,b,c,d){t.M.a(d)
if(B.j!==c)d=c.ci(d)
A.nk(d)},
kr:function kr(a){this.a=a},
kq:function kq(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
eq:function eq(a){this.a=a
this.b=null
this.c=0},
kS:function kS(a,b){this.a=a
this.b=b},
kR:function kR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
he:function he(a,b){this.a=a
this.b=!1
this.$ti=b},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
l0:function l0(a){this.a=a},
dp:function dp(a,b){this.a=a
this.b=b},
j8:function j8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j7:function j7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
e6:function e6(){},
aO:function aO(a,b){this.a=a
this.$ti=b},
d5:function d5(a,b){this.a=a
this.$ti=b},
cq:function cq(a,b,c,d,e){var _=this
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
hf:function hf(a){this.a=a
this.b=null},
cl:function cl(){},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(a,b){this.a=a
this.b=b},
bn:function bn(){},
em:function em(){},
kQ:function kQ(a){this.a=a},
hg:function hg(){},
d2:function d2(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
bQ:function bQ(a,b){this.a=a
this.$ti=b},
d3:function d3(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
e5:function e5(){},
en:function en(){},
hm:function hm(){},
co:function co(a,b){this.b=a
this.a=null
this.$ti=b},
bU:function bU(){},
kN:function kN(a,b){this.a=a
this.b=b},
b9:function b9(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
hW:function hW(a){this.$ti=a},
ev:function ev(){},
l_:function l_(a,b){this.a=a
this.b=b},
hN:function hN(){},
kO:function kO(a,b){this.a=a
this.b=b},
kP:function kP(a,b,c){this.a=a
this.b=b
this.c=c},
lR(a,b,c,d){if(b==null){if(a==null)return new A.ax(c.i("@<0>").B(d).i("ax<1,2>"))}else if(a==null)a=A.qk()
return A.pf(A.qj(),a,b,c,d)},
bj(a,b,c){return b.i("@<0>").B(c).i("jo<1,2>").a(A.np(a,new A.ax(b.i("@<0>").B(c).i("ax<1,2>"))))},
ad(a,b){return new A.ax(a.i("@<0>").B(b).i("ax<1,2>"))},
pf(a,b,c,d,e){var s=c!=null?c:new A.kL(d)
return new A.ea(a,b,s,d.i("@<0>").B(e).i("ea<1,2>"))},
jr(a){return new A.eb(a.i("eb<0>"))},
lZ(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
pF(a,b){return J.T(a,b)},
pG(a){return J.cv(a)},
mB(a,b,c){var s,r
if(A.m6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.aH,a)
try{A.pW(a,s)}finally{if(0>=$.aH.length)return A.b($.aH,-1)
$.aH.pop()}r=A.mU(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
lO(a,b,c){var s,r
if(A.m6(a))return b+"..."+c
s=new A.fX(b)
B.a.l($.aH,a)
try{r=s
r.a=A.mU(r.a,a,", ")}finally{if(0>=$.aH.length)return A.b($.aH,-1)
$.aH.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
m6(a){var s,r
for(s=$.aH.length,r=0;r<s;++r)if(a===$.aH[r])return!0
return!1},
pW(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.z(l.gp(l))
B.a.l(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gp(l);++j
if(!l.n()){if(j<=4){B.a.l(b,A.z(p))
return}r=A.z(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp(l);++j
for(;l.n();p=o,o=n){n=l.gp(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.z(p)
r=A.z(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
oL(a,b,c){var s=A.lR(null,null,b,c)
a.C(0,new A.jq(s,b,c))
return s},
mF(a,b,c){var s=A.lR(null,null,b,c)
s.a0(0,a)
return s},
lT(a){var s,r={}
if(A.m6(a))return"{...}"
s=new A.fX("")
try{B.a.l($.aH,a)
s.a+="{"
r.a=!0
J.og(a,new A.ju(r,s))
s.a+="}"}finally{if(0>=$.aH.length)return A.b($.aH,-1)
$.aH.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
kM:function kM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ea:function ea(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
kL:function kL(a){this.a=a},
eb:function eb(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hC:function hC(a){this.a=a
this.b=null},
ec:function ec(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
h:function h(){},
dK:function dK(){},
ju:function ju(a,b){this.a=a
this.b=b},
y:function y(){},
jw:function jw(a){this.a=a},
dY:function dY(){},
ei:function ei(){},
ew:function ew(){},
oy(a){if(a instanceof A.c1)return a.k(0)
return"Instance of '"+A.jP(a)+"'"},
b5(a,b,c,d){var s,r=J.oH(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
oN(a,b){var s,r,q=A.c([],b.i("r<0>"))
for(s=a.length,r=0;r<s;++r)B.a.l(q,b.a(a[r]))
return q},
mG(a,b,c){var s=A.oM(a,c)
return s},
oM(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("r<0>"))
s=A.c([],b.i("r<0>"))
for(r=J.aP(a);r.n();)B.a.l(s,r.gp(r))
return s},
lS(a,b,c){var s,r=J.oI(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
mU(a,b,c){var s=J.aP(b)
if(!s.n())return a
if(c.length===0){do a+=A.z(s.gp(s))
while(s.n())}else{a+=A.z(s.gp(s))
for(;s.n();)a=a+c+A.z(s.gp(s))}return a},
os(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
ot(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
eZ(a){if(a>=10)return""+a
return"0"+a},
iY(a){return new A.a7(1000*a)},
f2(a){if(typeof a=="number"||A.kY(a)||a==null)return J.cw(a)
if(typeof a=="string")return JSON.stringify(a)
return A.oy(a)},
ix(a){return new A.dn(a)},
cy(a,b){return new A.bb(!1,null,b,a)},
mo(a,b,c){return new A.bb(!0,a,b,c)},
oY(a){var s=null
return new A.cU(s,s,!1,s,s,a)},
mN(a,b){return new A.cU(null,null,!0,a,b,"Value not in range")},
ck(a,b,c,d,e){return new A.cU(b,c,!0,a,d,"Invalid value")},
lV(a,b,c){if(0>a||a>c)throw A.d(A.ck(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.ck(b,a,c,"end",null))
return b}return c},
jT(a,b){if(a<0)throw A.d(A.ck(a,0,null,b,null))
return a},
P(a,b,c,d,e){var s=A.I(e==null?J.aj(b):e)
return new A.fb(s,!0,a,c,"Index out of range")},
A(a){return new A.h8(a)},
lX(a){return new A.h5(a)},
aC(a){return new A.bm(a)},
bE(a){return new A.eV(a)},
lL(a){return new A.hs(a)},
jL(a,b,c,d){var s,r
if(B.C===c)return A.p4(B.c.gt(a),B.c.gt(b),$.lE())
if(B.C===d){s=B.c.gt(a)
b=B.c.gt(b)
c=J.cv(c)
return A.lW(A.bK(A.bK(A.bK($.lE(),s),b),c))}s=B.c.gt(a)
b=B.c.gt(b)
c=J.cv(c)
d=J.cv(d)
r=$.lE()
return A.lW(A.bK(A.bK(A.bK(A.bK(r,s),b),c),d))},
eC(a){A.ip(A.z(a))},
c3:function c3(a,b){this.a=a
this.b=b},
a7:function a7(a){this.a=a},
kv:function kv(){},
J:function J(){},
dn:function dn(a){this.a=a},
bO:function bO(){},
fy:function fy(){},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cU:function cU(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fb:function fb(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
h8:function h8(a){this.a=a},
h5:function h5(a){this.a=a},
bm:function bm(a){this.a=a},
eV:function eV(a){this.a=a},
fB:function fB(){},
e_:function e_(){},
eY:function eY(a){this.a=a},
hs:function hs(a){this.a=a},
j:function j(){},
a2:function a2(){},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(){},
v:function v(){},
hZ:function hZ(){},
fX:function fX(a){this.a=a},
qn(){return document},
mw(a){var s,r=document.createElement("input"),q=t.fY.a(r)
try{J.oj(q,a)}catch(s){}return q},
bS(a,b,c,d,e){var s=A.nl(new A.kw(c),t.L)
if(s!=null&&!0)J.oe(a,b,s,!1)
return new A.e9(a,b,s,!1,e.i("e9<0>"))},
pB(a){var s
if("postMessage" in a){s=A.pe(a)
return s}else return t.iB.a(a)},
pC(a){var s
if(t.dA.b(a))return a
s=new A.ko([],[])
s.c=!0
return s.by(a)},
pe(a){if(a===window)return t.kg.a(a)
else return new A.hl()},
nl(a,b){var s=$.D
if(s===B.j)return a
return s.cj(a,b)},
q:function q(){},
is:function is(){},
eI:function eI(){},
eJ:function eJ(){},
eO:function eO(){},
eP:function eP(){},
bZ:function bZ(){},
cC:function cC(){},
b0:function b0(){},
iP:function iP(){},
G:function G(){},
cG:function cG(){},
iQ:function iQ(){},
aQ:function aQ(){},
be:function be(){},
iR:function iR(){},
iS:function iS(){},
iT:function iT(){},
cH:function cH(){},
bf:function bf(){},
bH:function bH(){},
dx:function dx(){},
dy:function dy(){},
f0:function f0(){},
iU:function iU(){},
W:function W(){},
k:function k(){},
e:function e(){},
au:function au(){},
f3:function f3(){},
f4:function f4(){},
f6:function f6(){},
av:function av(){},
je:function je(){},
c6:function c6(){},
dE:function dE(){},
c7:function c7(){},
cL:function cL(){},
c8:function c8(){},
bi:function bi(){},
jt:function jt(){},
cf:function cf(){},
jy:function jy(){},
fl:function fl(){},
jB:function jB(a){this.a=a},
fm:function fm(){},
jC:function jC(a){this.a=a},
ay:function ay(){},
fn:function fn(){},
ap:function ap(){},
u:function u(){},
dQ:function dQ(){},
az:function az(){},
fF:function fF(){},
fM:function fM(){},
jW:function jW(a){this.a=a},
fO:function fO(){},
ar:function ar(){},
fR:function fR(){},
aA:function aA(){},
fS:function fS(){},
aB:function aB(){},
fW:function fW(){},
k5:function k5(a){this.a=a},
ae:function ae(){},
as:function as(){},
a8:function a8(){},
h_:function h_(){},
h0:function h0(){},
kd:function kd(){},
aD:function aD(){},
h2:function h2(){},
ke:function ke(){},
b8:function b8(){},
kh:function kh(){},
d_:function d_(){},
ha:function ha(){},
d1:function d1(){},
hj:function hj(){},
e7:function e7(){},
hw:function hw(){},
ed:function ed(){},
hR:function hR(){},
i_:function i_(){},
lK:function lK(a,b){this.a=a
this.$ti=b},
e8:function e8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
e9:function e9(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
kw:function kw(a){this.a=a},
p:function p(){},
dB:function dB(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
hl:function hl(){},
hk:function hk(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
ht:function ht(){},
hu:function hu(){},
hx:function hx(){},
hy:function hy(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hL:function hL(){},
hM:function hM(){},
hO:function hO(){},
ej:function ej(){},
ek:function ek(){},
hP:function hP(){},
hQ:function hQ(){},
hU:function hU(){},
i0:function i0(){},
i1:function i1(){},
eo:function eo(){},
ep:function ep(){},
i3:function i3(){},
i4:function i4(){},
ia:function ia(){},
ib:function ib(){},
ic:function ic(){},
id:function id(){},
ie:function ie(){},
ig:function ig(){},
ih:function ih(){},
ii:function ii(){},
ij:function ij(){},
ik:function ik(){},
nc(a){var s,r
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.kY(a))return a
if(A.nu(a))return A.bx(a)
if(Array.isArray(a)){s=[]
for(r=0;r<a.length;++r)s.push(A.nc(a[r]))
return s}return a},
bx(a){var s,r,q,p,o
if(a==null)return null
s=A.ad(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.B)(r),++p){o=r[p]
s.j(0,o,A.nc(a[o]))}return s},
nu(a){var s=Object.getPrototypeOf(a)
return s===Object.prototype||s===null},
lI(){return window.navigator.userAgent},
kn:function kn(){},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a,b){this.a=a
this.b=b
this.c=!1},
qF(a,b){var s=new A.H($.D,b.i("H<0>")),r=new A.aO(s,b.i("aO<0>"))
a.then(A.ba(new A.ln(r,b),1),A.ba(new A.lo(r),1))
return s},
jJ:function jJ(a){this.a=a},
ln:function ln(a,b){this.a=a
this.b=b},
lo:function lo(a){this.a=a},
fH(){return B.u},
hz:function hz(){},
aI:function aI(){},
ff:function ff(){},
aK:function aK(){},
fz:function fz(){},
jO:function jO(){},
fY:function fY(){},
n:function n(){},
aM:function aM(){},
h3:function h3(){},
hA:function hA(){},
hB:function hB(){},
hJ:function hJ(){},
hK:function hK(){},
hX:function hX(){},
hY:function hY(){},
i5:function i5(){},
i6:function i6(){},
oA(a){return new GainNode(a)},
aZ:function aZ(){},
dr:function dr(){},
bY:function bY(){},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
F:function F(){},
eK:function eK(){},
eL:function eL(){},
iE:function iE(a){this.a=a},
bc:function bc(){},
eM:function eM(){},
ds:function ds(){},
cK:function cK(){},
fA:function fA(){},
hi:function hi(){},
eQ:function eQ(){},
f7:function f7(){},
fG:function fG(){},
cV:function cV(){},
bo:function bo(){},
h4:function h4(){},
h9:function h9(){},
fT:function fT(){},
hS:function hS(){},
hT:function hT(){},
mv(a,b){var s=A.b5(7,null,!1,b.i("0?")),r=a==null?A.qO():a
return new A.fa(r,s,b.i("fa<0>"))},
fa:function fa(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
kU:function kU(a,b){this.a=a
this.$ti=b},
cr:function cr(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=-1
_.$ti=c},
bD(a){return new A.l(a)},
l:function l(a){this.a=a},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
mK(a,b){return new A.fx(A.c([],t.f7),a,b.i("fx<0>"))},
fx:function fx(a,b,c){this.a=a
this.b=b
this.$ti=c},
aL:function aL(a,b){this.a=a
this.b=b},
lG(a,b,c,d,e,f,g){return new A.cx(g,b,e,a,f)},
nt(a,b){if(b.e)return!1
if(a.x)return!0
if(b.x)return!0
return!1},
qs(a,b){return B.a.ec(a.a,new A.l7(b))},
fo(a,b,c,d,e,f,g,h,i,j){return new A.bl(i,a,h,j,b,e,c,f)},
qo(a){var s,r,q=a.f.$0(),p=new A.jA(new Uint8ClampedArray(4000)),o=a.d,n=A.c([],t.I),m=A.mF(B.au,t.b,t.O),l=A.c([],t.Q),k=A.c([],t.d)
for(s=J.aP(a.r.$0());s.n();){r=s.gp(s)
switch(r.gbE()){case B.ax:m.h(0,B.M)
m.j(0,B.M,r)
break
case B.ay:m.h(0,B.q)
m.j(0,B.q,r)
break
case B.az:m.h(0,B.N)
m.j(0,B.N,r)
break
default:B.a.l(n,r)}}return A.lG(new A.iq(q,p),new A.c0(o,o,1,0,0,0,0,new A.cI(n,m),a.c,l,k,new A.cJ(a.a)),1,a.z,!1,!1,a.e.$0())},
cx:function cx(a,b,c,d,e){var _=this
_.a=100
_.b=a
_.c=b
_.e=c
_.r=d
_.x=e},
ir:function ir(a){this.a=a},
iq:function iq(a,b){this.a=a
this.b=b
this.c=null},
a9:function a9(a,b){this.a=a
this.b=b},
al:function al(){},
bL:function bL(){},
bM:function bM(){},
cE:function cE(){},
bJ:function bJ(){},
fK:function fK(){this.b=!1},
dV:function dV(){this.a=null},
fL:function fL(a){this.a=a},
l7:function l7(a){this.a=a},
bB:function bB(){},
b1:function b1(a){this.a=a},
bl:function bl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.z=h},
lx:function lx(){},
lv:function lv(){},
lw:function lw(){},
lr:function lr(){},
lp:function lp(){},
lq:function lq(){},
lA:function lA(){},
ly:function ly(){},
lz:function lz(){},
lD:function lD(){},
lB:function lB(){},
lC:function lC(){},
l4:function l4(){},
l2:function l2(){},
l3:function l3(){},
iJ:function iJ(){this.b=this.a=0},
a_:function a_(){},
cP:function cP(a,b){this.b=a
this.a=b},
cO:function cO(a,b){this.b=a
this.a=b},
qE(a,b,c){var s,r,q=b.e||b.a===0
if(q)return!1
s=b.c
if(s!=null&&s.b<=0){a.$1(new A.dw(b))
return!0}r=b.r
if(r!=null){a.$1(r.ed(b,c))
b.a=0
return!0}return!1},
f8:function f8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1
_.z=null},
j9:function j9(a,b){this.a=a
this.b=b},
mu(a){switch(a){case B.dh:case B.aV:case B.aW:case B.Y:case B.di:return!1
case B.Z:case B.al:case B.aX:return!0}},
du(a,b,c){var s,r,q
for(s=0,r=0;r<b;++r){switch(c){case B.aY:q=3
break
case B.a_:q=4
break
case B.H:q=6
break
case B.am:q=8
break
case B.aZ:q=12
break
case B.an:q=20
break
default:q=null}s+=a.D(q)+1}return s},
eG(a,b,c,d,e,f){return new A.eF(f,c)},
mn(){return new A.eF(10,10)},
b6(a,b,c){return new A.fk(a,c,b)},
oP(a,b){return new A.i(a,b)},
or(a){var s,r=a.a,q=a.b
if(r+q===1)return a
s=Math.sqrt(Math.pow(r,2)+Math.pow(q,2))
return new A.aL(r/s,q/s)},
bg(a){switch(a){case B.ao:case B.ap:case B.Q:case B.R:case B.E:case B.T:case B.a8:case B.a9:case B.a5:case B.O:case B.a6:case B.a7:case B.P:case null:return!1
case B.a4:case B.v:case B.S:return!0}},
oD(a){switch(a){case B.ao:case B.ap:case B.Q:case B.R:case B.E:case B.T:case B.a8:case B.a9:case B.a5:case B.O:case B.a6:case B.a7:case B.P:case null:return!1
case B.a4:case B.v:case B.S:return!0}},
dZ:function dZ(a){this.b=a},
b4:function b4(a){this.b=a},
di:function di(a,b){this.a=a
this.b=b},
aw:function aw(a,b){this.b=a
this.c=b
this.e=null},
iO:function iO(){},
U:function U(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f9:function f9(a){this.b=a},
b3:function b3(a){this.b=a},
bG:function bG(a){this.b=a},
aN:function aN(a){this.b=a},
jz:function jz(){},
bF:function bF(){},
c2:function c2(a){this.b=a},
X:function X(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.y=e
_.z=f},
dj:function dj(a){this.b=a},
dk:function dk(a,b){this.a=a
this.b=b},
aq:function aq(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.f=c
_.r=d
_.Q=e
_.ch=f},
cz:function cz(a){this.b=a},
ak:function ak(a){this.c=a},
eF:function eF(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
cA:function cA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cJ:function cJ(a){this.a=a},
cI:function cI(a,b){this.a=a
this.b=b},
fC:function fC(a){this.b=a},
c4:function c4(a){this.b=a},
eW:function eW(){},
cY:function cY(a){this.b=a},
cD:function cD(a){this.b=a},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(a){this.b=a},
af:function af(a){this.b=a},
cd:function cd(a){this.b=a},
b_:function b_(a){this.b=a},
bN:function bN(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
fh:function fh(a,b){this.b=a
this.c=b},
fi:function fi(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(a,b){this.a=a
this.b=b},
js:function js(a){this.b=a},
Z:function Z(a){this.b=a},
jv:function jv(a,b){this.a=a
this.b=b},
jA:function jA(a){this.a=a},
cQ:function cQ(a){this.b=a},
iV:function iV(a){var _=this
_.a=a
_.b=!1
_.c=null
_.d=0},
iZ:function iZ(a){this.a=a},
j_:function j_(){},
ox(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l="a_position",k="u_resolution",j="u_offset",i=A.c([],t.ev),h=A.c(["alarm_1.mp3","background_1.mp3","background_2.mp3","bullet_impact_1.mp3","bullet_impact_2.mp3","bullet_miss_1.mp3","calm_menu_1.mp3","cave_1.mp3","click_1.mp3","death_1.mp3","door_1.mp3","door_unlock_1.mp3","drone_abandoned_desolate.mp3","fireball_1.mp3","fireball_2.mp3","flamethrower_1.mp3","heavy_punch_1.mp3","heavy_punch_2.mp3","heavy_punch_3.mp3","heavy_punch_4.mp3","Just_Pick_One_Already.mp3","laser_1.mp3","loop_1.mp3","menu_1.mp3","menu_2.mp3","miss_1.mp3","monster_deep_growl.mp3","monster_growl_1.mp3","monster_sceam_2.mp3","monster_scream_1.mp3","New_Bee.mp3","positive_1.mp3","rain_background_1.mp3","sewer_1.mp3","short_pulse_1.mp3","surface_day_1.mp3","surface_night_1.mp3","sword_impact_1.mp3","teleport_1.mp3","text_loop_1.mp3","water_footsteps_1.mp3","water_footsteps_2.mp3","water_footsteps_3.mp3","water_footsteps_4.mp3","water_footsteps_5.mp3","reload_1.mp3","pistol_1.mp3"],t.s),g=new (window.AudioContext||window.webkitAudioContext)(),f=A.pE(),e=t.G,d=t.o
f=A.aS(A.c([new A.V(l,35044,5126,2,f),new A.V("a_color",35048,5126,4,new Float32Array(192e3))],e),u.l,A.c([new A.w(k,B.d),new A.w(j,B.d)],d),u.q)
e=A.aS(A.c([new A.V(l,35048,5126,2,new Float32Array(8000))],e),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.c([new A.w(k,B.d),new A.w(j,B.d)],d),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
d=A.p8(window)
s=new Uint8Array(4000)
r=t.j
q=A.c([],t.pl)
p=A.c([],t.fk)
o=new Uint8Array(16e6)
n=new Uint8Array(4000)
m=new Uint8Array(4000)
i=new A.j2(c,a2,a,b,a1,i,a0,new A.fQ(A.ad(t.N,t.bD),h,g),new A.j5(o,n,m,new Uint8Array(64e6),new A.i(0,0),A.ad(r,t.im),p),new A.iJ(),new A.kb(f),new A.iV(e),d,new A.ir(new A.f_(s,A.ad(r,t.S))),new A.iZ(q),c.createFramebuffer(),new A.jU())
i.d8(a,b,c,a0,a1,a2)
return i},
f1:function f1(){this.c=this.b=this.a=!1},
j2:function j2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.id=null
_.k1=p
_.k3=_.k2=0
_.r1=q},
j3:function j3(a,b){this.a=a
this.b=b},
lt(a,b,c){return a*c+(1-c)*b},
a0:function a0(){},
bC:function bC(a,b,c){var _=this
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
fv:function fv(a){this.a=a},
dU:function dU(a){this.a=a},
aJ:function aJ(a,b){this.a=a
this.b=b},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function jG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cX:function cX(){},
fg:function fg(a){this.a=a},
e1:function e1(a,b){this.a=a
this.b=b},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iB:function iB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iz:function iz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dw:function dw(a){this.a=a},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a){this.a=a},
fI:function fI(a,b){this.a=a
this.b=b},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a,b){this.a=a
this.b=b},
j5:function j5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
i2:function i2(a){this.a=a
this.b=!0},
ki:function ki(a,b,c){this.a=a
this.c=b
this.d=c},
c_:function c_(a){this.b=a},
jS:function jS(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
ns(a,b){var s=a.f
if(s==null)return A.c([],t.Y)
if(s===B.v)return A.c([new A.c9(new A.e1(!1,a.b))],t.Y)
if(s===B.R){if(b.af(a.b)!=null)return A.c([],t.Y)
return A.c([new A.c9(new A.e1(!0,a.b))],t.Y)}if(s===B.O)return A.c([new A.c9(new A.h7(a.b))],t.Y)
if(s===B.Q)return A.c([new A.c9(new A.fv(!1))],t.Y)
return A.c([],t.Y)},
c9:function c9(a){this.b=a},
oK(a){var s=u.p,r="a_position",q="u_resolution",p="u_block_size",o="u_player_visible_texture",n="u_offset",m=t.G,l=t.o
return new A.fj(A.aS(A.c([new A.V(r,35044,5126,2,new Float32Array(A.d6(B.B)))],m),u.j,A.c([new A.w(q,B.d),new A.w("u_source_position",B.d),new A.w(p,B.d),new A.w("u_source_color",B.aE),new A.w("u_source_strength",B.r),new A.w("u_time",B.r),new A.w("u_visible_texture",B.o),new A.w(o,B.o),new A.w(n,B.d)],l),s),A.aS(A.c([new A.V(r,35044,5126,2,new Float32Array(A.d6(B.B)))],m),u.B,A.c([new A.w("u_light_texture",B.o),new A.w("u_game_world_texture",B.o),new A.w(o,B.o),new A.w(q,B.d),new A.w(p,B.d),new A.w(n,B.d)],l),s),a,A.c([],t.ow))},
fj:function fj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1
_.x=d
_.z=_.y=0},
ov(a){switch(a){case B.I:return B.L
case B.J:return B.K
case B.K:return B.J
case B.L:return B.I
case B.k:return B.m
case B.l:return B.n
case B.m:return B.k
case B.n:return B.l}},
ou(a){switch(a){case B.k:return B.b9
case B.l:return B.b8
case B.m:return B.b9
case B.n:return B.b8
default:return B.dC}},
a6(a,b){switch(b){case B.k:return a.v(0,new A.i(0,-1))
case B.J:return a.v(0,new A.i(1,-1))
case B.l:return a.v(0,new A.i(1,0))
case B.I:return a.v(0,new A.i(1,1))
case B.m:return a.v(0,new A.i(0,1))
case B.K:return a.v(0,new A.i(-1,1))
case B.n:return a.v(0,new A.i(-1,0))
case B.L:return a.v(0,new A.i(-1,-1))}},
m9(a,b,c){var s
switch(c){case B.aS:return!1
case B.c8:return a.c===B.b||A.O(A.bg(a.f))
case B.X:s=a.f
if(s===B.v)return!1
return a.c===B.b||A.O(A.bg(s))
case B.ak:return a.c===B.b||A.O(A.bg(a.f))||b.af(a.b)!=null}},
ci:function ci(a,b,c){var _=this
_.b=_.a=null
_.d=a
_.e=b
_.f=c},
aR:function aR(a){this.b=a},
jM:function jM(){},
f_:function f_(a,b){this.a=a
this.b=b},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
mp(a,b,c,d,e){return new A.V(d,a,c,e,b)},
bP(a,b){return new A.w(b,a)},
aS(a,b,c,d){var s=t.N
return new A.jd(d,b,c,a,A.ad(s,t.o3),A.ad(s,t.aN))},
nd(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.T(a.getShaderParameter(s,35713),!0)){A.eC(J.cw(a.getShaderInfoLog(s)))
throw A.d(A.aC("Invalid Shader"))}return s},
V:function V(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w:function w(a,b){this.a=a
this.b=b},
cn:function cn(a){this.b=a},
hh:function hh(a,b){this.a=a
this.c=b},
i7:function i7(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
jU:function jU(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
jV:function jV(){},
fw:function fw(){},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q4(a,b){var s=t.hd
s.a(a)
s.a(b)
return B.e.O(a.x,b.x)},
qA(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.H($.D,t.aa),p=J.oh(r),o=p.$ti,n=o.i("~(1)?").a(new A.lc(a,s,r,new A.aO(q,t.fB)))
t.Z.a(null)
A.bS(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
p3(a,b){var s=35048,r=5126,q=A.c([new A.w("u_texture",B.o),new A.w("u_resolution",B.d),new A.w("u_offset",B.d)],t.o),p=new Float32Array(12e4),o=new Float32Array(12e4),n=new Float32Array(24e4)
q=new A.k0(A.aS(A.c([new A.V("a_position",s,r,2,p),new A.V("a_texcoord",s,r,2,o),new A.V("a_color",s,r,4,n),new A.V("a_bg_color",s,r,4,new Float32Array(24e4))],t.G),"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\nin vec4 v_bg_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n  if (v_bg_color != vec4(0, 0, 0, 0)) {\n    outColor = outColor + v_bg_color;\n  }\n}\n",q,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"),A.mv(A.qI(),t.hd),b)
q.da(a,b)
return q},
mx(a,b,c){var s,r,q,p,o,n=null
switch(a){case B.ao:case null:return n
case B.ap:s=n
r=s
q=3
p=16
break
case B.Q:q=14
p=3
r=B.dP
s=B.ca
break
case B.v:s=n
r=s
q=6
p=11
break
case B.R:s=n
r=s
q=15
p=5
break
case B.S:s=n
r=s
q=5
p=11
break
case B.E:o=B.bf.h(0,t.e.i("a_.T").a(800))
o.toString
s=n
r=o
q=2
p=2
break
case B.T:r=new A.l(4294967142)
s=n
q=12
p=7
break
case B.a8:s=n
r=s
q=1
p=13
break
case B.a9:s=n
r=s
q=2
p=13
break
case B.a4:o=B.bf.h(0,t.e.i("a_.T").a(600))
o.toString
s=n
r=o
q=6
p=0
break
case B.a5:o=B.dI.h(0,t.e.i("a_.T").a(900))
o.toString
s=o
r=n
q=0
p=15
break
case B.O:o=B.bh.h(0,t.e.i("a_.T").a(500))
o.toString
s=n
r=o
q=15
p=0
break
case B.a6:o=B.bh.h(0,t.e.i("a_.T").a(100))
o.toString
s=n
r=o
q=15
p=0
break
case B.a7:s=n
r=s
q=13
p=3
break
case B.P:o=B.dK.h(0,t.gX.i("a_.T").a(700))
o.toString
s=n
r=o
q=12
p=7
break
default:s=n
r=s
q=0
p=0}o=new A.a3(q,p,b,c,r)
o.sag(0,s)
return o},
lc:function lc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k0:function k0(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c
_.e=!1
_.f=!0},
k1:function k1(a){this.a=a},
a3:function a3(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.f=null
_.r=e
_.x=0},
lU(a,b,c){return new A.jx(b,c,a)},
pE(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
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
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
kb:function kb(a){this.a=a
this.b=null
this.c=!1},
kc:function kc(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pD(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
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
j4:function j4(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
qg(a){var s,r=A.lS(4000,new A.l1(a),t.W),q=A.c([],t.c7)
for(s=0;s<4000;++s);return new A.fU(q,A.ad(t.K,t.lZ),new A.Y(100,40,r,t.R),a.b)},
im(a){var s,r,q,p,o
for(s=a.c,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.i(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.O(A.bg(o.f))))return p}throw A.d("Solid")},
qD(a,b){var s,r,q
for(s=a.c;!0;){r=$.dg()
q=new A.i(B.c.w(r.S()*98)+1,B.c.w(r.S()*38)+1)
r=s.h(0,q)
if(!(r.c===B.b||A.O(A.bg(r.f)))&&a.af(q)==null)return q}},
bu(a,b){return a.S()<=b},
aX(a,b,c){return B.c.w(a.S()*(c-b))+b},
ne(a,b,c){var s=b.length
if(s===1){if(0>=s)return A.b(b,0)
return b[0]}s=A.aX(a,0,s-1)
if(!(s>=0&&s<b.length))return A.b(b,s)
return b[s]},
hc:function hc(a,b){this.a=a
this.d=0
this.e=b},
l1:function l1(a){this.a=a},
fU:function fU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iW:function iW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iX:function iX(a){this.a=a},
eR:function eR(a){this.a=a},
iN:function iN(a){this.a=a},
jb:function jb(){},
jc:function jc(a){this.a=a},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
lu(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.V))break
q=A.a6(q,b);++p}return p},
cu(a,b,c){var s=A.a6(a,b)
if(c.e.h(0,s)===B.V)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
d0(a,b){return new A.e4(a,b)},
eD(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.c([],t.D)
for(s=a2.length,r=a1.a,q=J.de(r),p=t.q,o=t.n,n=0;n<a2.length;a2.length===s||(0,A.B)(a2),++n){m=a2[n]
l=A.c([],p)
k=A.c([],o)
for(j=q.gA(r),i=0;j.n();){h=j.gp(j)
g=m.a.a8(h,a3)
if(g<1000){B.a.l(l,h)
B.a.l(k,g)
i+=g}}if(l.length===0){B.a.l(a0,m)
continue}for(f=0,e=0;e<k.length;++e,f=d){d=k[e]/i+f
B.a.j(k,e,d)}c=$.nX().S()
for(j=k.length,h=l.length,b=B.z,a=-1,e=0;e<j;++e,a=g){g=k[e]
if(c>=a&&c<g){if(!(e<h))return A.b(l,e)
b=l[e]}}j=0===b.a&&0===b.b
if(j){B.a.l(a0,m)
continue}m.eA(b,a3)}for(s=q.gA(r),r=a3.e,q=a1.c;s.n();){p=s.gp(s)
if(r.h(0,p)===B.ae||r.h(0,p)===B.af)B.a.l(q,p)}return a0},
nz(a,b){var s,r,q,p,o,n,m,l,k
B.a.aP(a,new A.ls())
if(0>=a.length)return A.b(a,0)
A.eD(a[0],$.oa(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.B)(s),++p)q.j(0,s[p],B.bd)
for(s=A.mV(a,1,null,A.a4(a).c),r=s.$ti,s=new A.bk(s,s.gm(s),r.i("bk<aT.E>")),r=r.i("aT.E"),o=t.c1,n=2;s.n();){m=r.a(s.d)
l=m.a
k=J.at(l)
if(k.gm(l)<30){if(n>0){l=A.mG($.lF(),!0,o)
l.push($.mi())}else l=$.lF()
if(!B.a.G(A.eD(m,l,b),$.mi()))--n}else if(k.gm(l)<60)A.eD(m,$.o3(),b)
else if(k.gm(l)<100)A.eD(m,$.o1(),b)
else A.eD(m,$.o0(),b)}if(n===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.B)(s),++p)q.j(0,s[p],B.be)}},
b2:function b2(){},
hb:function hb(){},
dl:function dl(a){this.$ti=a},
dS:function dS(a){this.$ti=a},
eS:function eS(){},
eH:function eH(){},
eX:function eX(){},
dh:function dh(a){this.a=a},
e4:function e4(a,b){this.a=a
this.b=b},
lm:function lm(){},
li:function li(){},
lk:function lk(){},
lh:function lh(){},
lj:function lj(){},
ll:function ll(){},
lg:function lg(){},
ls:function ls(){},
ow(a){var s=t.q
return new A.am(a,A.c([],s),A.c([],s),A.j1(a))},
j1(a){var s,r,q=J.at(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gm(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.i(B.c.w(p/q.gm(a)),B.c.w(o/q.gm(a)))},
dC:function dC(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
iF:function iF(a,b){this.a=a
this.b=b},
iH:function iH(){},
iG:function iG(a){this.a=a},
e2:function e2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j0:function j0(a,b){this.a=a
this.b=b},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
lN(a){var s
if(a instanceof A.U)s=B.ar
else if(a instanceof A.X)s=B.aq
else if(a instanceof A.aq)s=B.aa
else if(a instanceof A.iO)s=B.b6
else if(a instanceof A.di)s=B.ab
else{J.cw(a)
s=B.as}$.mz=$.mz+1
return new A.aw(a,s)},
fc:function fc(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jk:function jk(a,b){this.a=a
this.b=b},
jI:function jI(){},
jf:function jf(a){this.a=a},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
jN:function jN(){},
bI:function bI(a){this.b=a},
dX:function dX(a){this.b=a},
jX:function jX(a,b){this.b=a
this.a=b},
dW:function dW(a,b){this.a=a
this.b=b},
k8:function k8(a){this.a=a},
k9:function k9(){},
ka:function ka(a){this.a=a},
p8(a){var s=new A.kj(A.mT(t.U),A.mT(t.bd))
s.dc(a)
return s},
kj:function kj(a,b){this.a=a
this.b=b},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
a1:function a1(a){this.b=a},
it:function it(a,b){this.a=a
this.b=$
this.c=b},
iu:function iu(a){this.a=a},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(a,b){this.a=a
this.b=b},
oO(){var s=new A.jD()
s.d9()
return s},
jD:function jD(){this.a=$},
jE:function jE(a){this.a=a},
fE:function fE(a,b){this.a=a
this.b=b},
k2:function k2(){},
k3:function k3(a,b){this.a=a
this.b=b},
k4:function k4(a,b){this.a=a
this.b=b},
ip(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
qm(a,b){return J.of(t.n6.a(a),b)},
my(a){$.mA=$.mA+1
return new A.aw(a,B.aa)},
qx(a,b,c){var s,r,q=a.r
if(q!=null){if(b===q.c)return!0
s=a.q()
r=b.q()
if(s==null||r==null)return!1
return c.y.P(s).h(0,r)}return!0},
qH(a){A.aW(a)
$.cs.b8().K(a,$.mg())
B.bA.cM(window,A.nv())},
ld(){var s=0,r=A.bv(t.z),q,p,o,n,m,l
var $async$ld=A.bw(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:q=$.o_()
p=A.mn()
o=A.c([],t.I)
n=A.oL(B.au,t.b,t.O)
m=A.c([],t.d)
s=2
return A.a5(q.an(A.lG(null,new A.c0(20,20,0,0,0,0,0,new A.cI(o,n),p,A.c([],t.Q),m,new A.cJ("J")),0,null,!1,!0,new A.a3(0,4,1,1,null))),$async$ld)
case 2:l=b
m=document
p=t.g
n=p.a(m.querySelector("#glCanvas"))
o=$.mg()
q=$.o8()
m=A.ox(l,n,o,q,p.a(m.querySelector("#text")),t.nK.a(B.D.bz(p.a(m.querySelector("#text")),"2d")))
p=$.cs.b
if(p==null?$.cs!=null:p!==$.cs)A.R(new A.cc("Field '"+$.cs.a+"' has already been initialized."))
$.cs.b=m
$.cs.b8().x.aG()
p=$.o7()
new A.k2().J(p)
new A.it(A.oO(),A.c(["spell","stats","inventory"],t.s)).J(q)
q=$.cs.b8()
o=t.w
p=new A.f8(q,A.c([],o),A.c([],o),A.c([],t.fy),A.c([],t.ge),p)
o=q.dx.a
new A.bQ(o,A.C(o).i("bQ<1>")).cE(p.ger())
p=t.x.a(p.gc3())
B.a.l(q.f,p)
B.bA.cM(window,A.nv())
return A.br(null,r)}})
return A.bs($async$ld,r)}},J={
mb(a,b,c,d){return{i:a,p:b,e:c,x:d}},
l6(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.ma==null){A.qu()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.lX("Return interceptor for "+A.z(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.kK
if(o==null)o=$.kK=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.qB(a)
if(p!=null)return p
if(typeof a=="function")return B.dt
s=Object.getPrototypeOf(a)
if(s==null)return B.bm
if(s===Object.prototype)return B.bm
if(typeof q=="function"){o=$.kK
if(o==null)o=$.kK=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aF,enumerable:false,writable:true,configurable:true})
return B.aF}return B.aF},
oH(a,b){if(a<0||a>4294967295)throw A.d(A.ck(a,0,4294967295,"length",null))
return J.oJ(new Array(a),b)},
oI(a,b){if(a<0)throw A.d(A.cy("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
oJ(a,b){return J.mC(A.c(a,b.i("r<0>")),b)},
mC(a,b){a.fixed$length=Array
return a},
dd(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dG.prototype
return J.fd.prototype}if(typeof a=="string")return J.ca.prototype
if(a==null)return J.dH.prototype
if(typeof a=="boolean")return J.dF.prototype
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof A.v)return a
return J.l6(a)},
at(a){if(typeof a=="string")return J.ca.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof A.v)return a
return J.l6(a)},
de(a){if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof A.v)return a
return J.l6(a)},
qp(a){if(typeof a=="number")return J.cM.prototype
if(typeof a=="string")return J.ca.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.cZ.prototype
return a},
io(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof A.v)return a
return J.l6(a)},
T(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dd(a).F(a,b)},
mk(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.qy(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.at(a).h(a,b)},
ml(a,b,c){return J.de(a).j(a,b,c)},
oe(a,b,c,d){return J.io(a).ea(a,b,c,d)},
of(a,b){return J.qp(a).O(a,b)},
mm(a,b){return J.de(a).u(a,b)},
og(a,b){return J.de(a).C(a,b)},
cv(a){return J.dd(a).gt(a)},
aP(a){return J.de(a).gA(a)},
aj(a){return J.at(a).gm(a)},
oh(a){return J.io(a).gbm(a)},
oi(a,b,c){return J.de(a).cF(a,b,c)},
oj(a,b){return J.io(a).seQ(a,b)},
cw(a){return J.dd(a).k(a)},
a:function a(){},
dF:function dF(){},
dH:function dH(){},
cb:function cb(){},
fD:function fD(){},
cZ:function cZ(){},
bh:function bh(){},
r:function r(a){this.$ti=a},
jl:function jl(a){this.$ti=a},
dm:function dm(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cM:function cM(){},
dG:function dG(){},
fd:function fd(){},
ca:function ca(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.lP.prototype={}
J.a.prototype={
F(a,b){return a===b},
gt(a){return A.cj(a)},
k(a){return"Instance of '"+A.jP(a)+"'"}}
J.dF.prototype={
k(a){return String(a)},
cY(a,b){return b||a},
gt(a){return a?519018:218159},
$iE:1}
J.dH.prototype={
F(a,b){return null==b},
k(a){return"null"},
gt(a){return 0},
$iS:1}
J.cb.prototype={
gt(a){return 0},
k(a){return String(a)}}
J.fD.prototype={}
J.cZ.prototype={}
J.bh.prototype={
k(a){var s=a[$.nC()]
if(s==null)return this.d3(a)
return"JavaScript function for "+J.cw(s)},
$ic5:1}
J.r.prototype={
l(a,b){A.a4(a).c.a(b)
if(!!a.fixed$length)A.R(A.A("add"))
a.push(b)},
cL(a,b){var s
if(!!a.fixed$length)A.R(A.A("removeAt"))
s=a.length
if(b>=s)throw A.d(A.mN(b,null))
return a.splice(b,1)[0]},
I(a,b){var s
if(!!a.fixed$length)A.R(A.A("remove"))
for(s=0;s<a.length;++s)if(J.T(a[s],b)){a.splice(s,1)
return!0}return!1},
dN(a,b,c){var s,r,q,p,o
A.a4(a).i("E(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.O(b.$1(p)))s.push(p)
if(a.length!==r)throw A.d(A.bE(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
a0(a,b){A.a4(a).i("j<1>").a(b)
if(!!a.fixed$length)A.R(A.A("addAll"))
this.df(a,b)
return},
df(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.bE(a))
for(r=0;r<s;++r)a.push(b[r])},
cF(a,b,c){var s=A.a4(a)
return new A.dM(a,s.B(c).i("1(2)").a(b),s.i("@<1>").B(c).i("dM<1,2>"))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
gd1(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.d(A.oE())
throw A.d(A.oG())},
bB(a,b,c,d){var s,r,q,p
A.a4(a).i("j<1>").a(d)
if(!!a.immutable$list)A.R(A.A("setRange"))
A.lV(b,c,a.length)
s=c-b
if(s===0)return
A.jT(0,"skipCount")
r=d
q=J.at(r)
if(s>q.gm(r))throw A.d(A.oF())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
ec(a,b){var s,r
A.a4(a).i("E(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.O(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.bE(a))}return!1},
aP(a,b){var s=A.a4(a)
s.i("f(1,1)?").a(b)
if(!!a.immutable$list)A.R(A.A("sort"))
A.p1(a,b,s.c)},
d0(a){var s,r,q,p
if(!!a.immutable$list)A.R(A.A("shuffle"))
s=a.length
for(;s>1;){r=B.u.D(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
ew(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.T(a[s],b))return s}return-1},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.T(a[s],b))return!0
return!1},
k(a){return A.lO(a,"[","]")},
gA(a){return new J.dm(a,a.length,A.a4(a).i("dm<1>"))},
gt(a){return A.cj(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.R(A.A("set length"))
if(b>a.length)A.a4(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.dc(a,b))
return a[b]},
j(a,b,c){A.I(b)
A.a4(a).c.a(c)
if(!!a.immutable$list)A.R(A.A("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.dc(a,b))
a[b]=c},
$io:1,
$ij:1,
$im:1}
J.jl.prototype={}
J.dm.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.B(q))
s=r.c
if(s>=p){r.sbS(null)
return!1}r.sbS(q[s]);++r.c
return!0},
sbS(a){this.d=this.$ti.i("1?").a(a)},
$ia2:1}
J.cM.prototype={
O(a,b){var s
A.aW(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaH(b)
if(this.gaH(a)===s)return 0
if(this.gaH(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaH(a){return a===0?1/a<0:a<0},
aq(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.A(""+a+".toInt()"))},
cl(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.A(""+a+".ceil()"))},
ab(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.A(""+a+".floor()"))},
w(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.A(""+a+".round()"))},
aI(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
eg(a,b,c){if(B.e.O(b,c)>0)throw A.d(A.nn(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
cP(a,b){var s
if(b>20)throw A.d(A.ck(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaH(a))return"-"+s
return s},
eO(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.ck(b,2,36,"radix",null))
s=a.toString(b)
if(B.y.ei(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.R(A.A("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.y.bA("0",p)},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
cX(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bG(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c9(a,b)},
N(a,b){return(a|0)===a?a/b|0:this.c9(a,b)},
c9(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.A("Result of truncating division is "+A.z(s)+": "+A.z(a)+" ~/ "+b))},
c8(a,b){var s
if(a>0)s=this.dU(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dU(a,b){return b>31?0:a>>>b},
$iab:1,
$iM:1,
$iN:1}
J.dG.prototype={$if:1}
J.fd.prototype={}
J.ca.prototype={
ei(a,b){if(b<0)throw A.d(A.dc(a,b))
if(b>=a.length)A.R(A.dc(a,b))
return a.charCodeAt(b)},
v(a,b){return a+b},
bA(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.c5)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cJ(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bA(c,s)+a},
bd(a,b,c){var s=a.length
if(c>s)throw A.d(A.ck(c,0,s,null,null))
return A.qJ(a,b,c)},
O(a,b){var s
A.ah(b)
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
h(a,b){if(b>=a.length)throw A.d(A.dc(a,b))
return a[b]},
$iab:1,
$imL:1,
$it:1}
A.cc.prototype={
k(a){var s="LateInitializationError: "+this.a
return s}}
A.jZ.prototype={}
A.o.prototype={}
A.aT.prototype={
gA(a){var s=this
return new A.bk(s,s.gm(s),A.C(s).i("bk<aT.E>"))}}
A.e0.prototype={
gdv(){var s=J.aj(this.a),r=this.c
if(r==null||r>s)return s
return r},
gdV(){var s=J.aj(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.aj(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.V()
return s-q},
u(a,b){var s=this,r=s.gdV()+b
if(b<0||r>=s.gdv())throw A.d(A.P(b,s,"index",null,null))
return J.mm(s.a,r)}}
A.bk.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.at(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.bE(q))
s=r.c
if(s>=o){r.sak(null)
return!1}r.sak(p.u(q,s));++r.c
return!0},
sak(a){this.d=this.$ti.i("1?").a(a)},
$ia2:1}
A.ce.prototype={
gA(a){var s=A.C(this)
return new A.dL(J.aP(this.a),this.b,s.i("@<1>").B(s.Q[1]).i("dL<1,2>"))},
gm(a){return J.aj(this.a)}}
A.dz.prototype={$io:1}
A.dL.prototype={
n(){var s=this,r=s.b
if(r.n()){s.sak(s.c.$1(r.gp(r)))
return!0}s.sak(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
sak(a){this.a=this.$ti.i("2?").a(a)}}
A.dM.prototype={
gm(a){return J.aj(this.a)},
u(a,b){return this.b.$1(J.mm(this.a,b))}}
A.aF.prototype={
gA(a){return new A.e3(J.aP(this.a),this.b,this.$ti.i("e3<1>"))}}
A.e3.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.O(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.an.prototype={}
A.cF.prototype={
k(a){return A.lT(this)},
$iL:1}
A.dv.prototype={
gm(a){return this.a},
aD(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.aD(0,b))return null
return this.b[A.ah(b)]},
C(a,b){var s,r,q,p,o,n=this.$ti
n.i("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.ah(s[p])
b.$2(o,n.a(q[o]))}}}
A.ac.prototype={
b0(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.oC(r)
o=A.lR(A.pX(),q,r,s.Q[1])
A.np(p.a,o)
p.$map=o}return o},
h(a,b){return this.b0().h(0,b)},
C(a,b){this.$ti.i("~(1,2)").a(b)
this.b0().C(0,b)},
gm(a){var s=this.b0()
return s.gm(s)}}
A.ja.prototype={
$1(a){return this.a.b(a)},
$S:27}
A.kf.prototype={
Y(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.dR.prototype={
k(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.fe.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.h6.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.jK.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.dA.prototype={}
A.el.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaV:1}
A.c1.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.nA(r==null?"unknown":r)+"'"},
$ic5:1,
geX(){return this},
$C:"$1",
$R:1,
$D:null}
A.eT.prototype={$C:"$0",$R:0}
A.eU.prototype={$C:"$2",$R:2}
A.fZ.prototype={}
A.fV.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.nA(s)+"'"}}
A.cB.prototype={
F(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cB))return!1
return this.$_target===b.$_target&&this.a===b.a},
gt(a){return(A.lf(this.a)^A.cj(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.jP(t.K.a(this.a))+"'")}}
A.fN.prototype={
k(a){return"RuntimeError: "+this.a}}
A.hd.prototype={
k(a){return"Assertion failed: "+A.f2(this.a)}}
A.ax.prototype={
gm(a){return this.a},
ga3(a){return new A.dI(this,A.C(this).i("dI<1>"))},
gbw(a){var s=this,r=A.C(s)
return A.mH(s.ga3(s),new A.jn(s),r.c,r.Q[1])},
aD(a,b){var s=this.cw(b)
return s},
cw(a){var s=this,r=s.d
if(r==null)return!1
return s.aj(s.at(r,s.ai(a)),a)>=0},
a0(a,b){A.C(this).i("L<1,2>").a(b).C(0,new A.jm(this))},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b1(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b1(p,b)
q=r==null?n:r.b
return q}else return o.cz(b)},
cz(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.at(p,q.ai(a))
r=q.aj(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.C(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.bI(s==null?q.b=q.b4():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.bI(r==null?q.c=q.b4():r,b,c)}else q.cB(b,c)},
cB(a,b){var s,r,q,p,o=this,n=A.C(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.b4()
r=o.ai(a)
q=o.at(s,r)
if(q==null)o.ba(s,r,[o.b5(a,b)])
else{p=o.aj(q,a)
if(p>=0)q[p].b=b
else q.push(o.b5(a,b))}},
I(a,b){var s=this.cA(b)
return s},
cA(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ai(a)
r=o.at(n,s)
q=o.aj(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.e4(p)
if(r.length===0)o.bT(n,s)
return p.b},
C(a,b){var s,r,q=this
A.C(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.bE(q))
s=s.c}},
bI(a,b,c){var s,r=this,q=A.C(r)
q.c.a(b)
q.Q[1].a(c)
s=r.b1(a,b)
if(s==null)r.ba(a,b,r.b5(b,c))
else s.b=c},
c0(){this.r=this.r+1&67108863},
b5(a,b){var s=this,r=A.C(s),q=new A.jp(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.c0()
return q},
e4(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.c0()},
ai(a){return J.cv(a)&0x3ffffff},
aj(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1},
k(a){return A.lT(this)},
b1(a,b){return a[b]},
at(a,b){return a[b]},
ba(a,b,c){a[b]=c},
bT(a,b){delete a[b]},
b4(){var s="<non-identifier-key>",r=Object.create(null)
this.ba(r,s,r)
this.bT(r,s)
return r},
$ijo:1}
A.jn.prototype={
$1(a){var s=this.a,r=A.C(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.C(this.a).i("2(1)")}}
A.jm.prototype={
$2(a,b){var s=this.a,r=A.C(s)
s.j(0,r.c.a(a),r.Q[1].a(b))},
$S(){return A.C(this.a).i("~(1,2)")}}
A.jp.prototype={}
A.dI.prototype={
gm(a){return this.a.a},
gA(a){var s=this.a,r=new A.dJ(s,s.r,this.$ti.i("dJ<1>"))
r.c=s.e
return r}}
A.dJ.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.bE(q))
s=r.c
if(s==null){r.sbH(null)
return!1}else{r.sbH(s.a)
r.c=s.c
return!0}},
sbH(a){this.d=this.$ti.i("1?").a(a)},
$ia2:1}
A.l8.prototype={
$1(a){return this.a(a)},
$S:19}
A.l9.prototype={
$2(a,b){return this.a(a,b)},
$S:21}
A.la.prototype={
$1(a){return this.a(A.ah(a))},
$S:26}
A.ku.prototype={
aw(){var s=this.b
if(s===this)throw A.d(new A.cc("Local '"+this.a+"' has not been initialized."))
return s},
b8(){var s=this.b
if(s===this)throw A.d(A.mE(this.a))
return s}}
A.fp.prototype={$ims:1}
A.ch.prototype={$iaE:1}
A.cR.prototype={
gm(a){return a.length},
$ix:1}
A.cg.prototype={
h(a,b){A.bt(b,a,a.length)
return a[b]},
j(a,b,c){A.I(b)
A.na(c)
A.bt(b,a,a.length)
a[b]=c},
$io:1,
$ij:1,
$im:1}
A.dO.prototype={
j(a,b,c){A.I(b)
A.I(c)
A.bt(b,a,a.length)
a[b]=c},
$io:1,
$ij:1,
$im:1}
A.dN.prototype={$ilM:1}
A.fq.prototype={
h(a,b){A.bt(b,a,a.length)
return a[b]}}
A.fr.prototype={
h(a,b){A.bt(b,a,a.length)
return a[b]}}
A.fs.prototype={
h(a,b){A.bt(b,a,a.length)
return a[b]}}
A.ft.prototype={
h(a,b){A.bt(b,a,a.length)
return a[b]}}
A.fu.prototype={
h(a,b){A.bt(b,a,a.length)
return a[b]}}
A.cS.prototype={
gm(a){return a.length},
h(a,b){A.bt(b,a,a.length)
return a[b]},
$ip6:1}
A.dP.prototype={
gm(a){return a.length},
h(a,b){A.bt(b,a,a.length)
return a[b]},
$ip7:1}
A.ee.prototype={}
A.ef.prototype={}
A.eg.prototype={}
A.eh.prototype={}
A.aU.prototype={
i(a){return A.kT(v.typeUniverse,this,a)},
B(a){return A.pu(v.typeUniverse,this,a)}}
A.hv.prototype={}
A.er.prototype={
k(a){return A.ai(this.a,null)},
$imX:1}
A.hr.prototype={
k(a){return this.a}}
A.es.prototype={$ibO:1}
A.kr.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:12}
A.kq.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:33}
A.ks.prototype={
$0(){this.a.$0()},
$S:8}
A.kt.prototype={
$0(){this.a.$0()},
$S:8}
A.eq.prototype={
dd(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.ba(new A.kS(this,b),0),a)
else throw A.d(A.A("`setTimeout()` not found."))},
de(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.ba(new A.kR(this,a,Date.now(),b),0),a)
else throw A.d(A.A("Periodic timer."))},
ef(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.d(A.A("Canceling a timer."))},
$ih1:1}
A.kS.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.kR.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.e.bG(s,o)}q.c=p
r.d.$1(q)},
$S:8}
A.he.prototype={
a1(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.bJ(b)
else{s=r.a
if(q.i("ao<1>").b(b))s.bM(b)
else s.al(q.c.a(b))}},
bc(a,b){var s=this.a
if(this.b)s.L(a,b)
else s.aT(a,b)}}
A.kW.prototype={
$1(a){return this.a.$2(0,a)},
$S:9}
A.kX.prototype={
$2(a,b){this.a.$2(1,new A.dA(a,t.l.a(b)))},
$S:30}
A.l0.prototype={
$2(a,b){this.a(A.I(a),b)},
$S:28}
A.dp.prototype={
k(a){return A.z(this.a)},
$iJ:1,
gas(){return this.b}}
A.j8.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.L(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.L(q.e.aw(),q.f.aw())},
$S:10}
A.j7.prototype={
$1(a){var s,r,q=this,p=q.x
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.ml(s,q.b,a)
if(r.b===0)q.c.al(A.oN(s,p))}else if(r.b===0&&!q.e)q.c.L(q.f.aw(),q.r.aw())},
$S(){return this.x.i("S(0)")}}
A.e6.prototype={
bc(a,b){A.eA(a,"error",t.K)
if((this.a.a&30)!==0)throw A.d(A.aC("Future already completed"))
if(b==null)b=A.lH(a)
this.L(a,b)},
aC(a){return this.bc(a,null)}}
A.aO.prototype={
a1(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.aC("Future already completed"))
s.bJ(r.i("1/").a(b))},
aB(a){return this.a1(a,null)},
L(a,b){this.a.aT(a,b)}}
A.d5.prototype={
a1(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.aC("Future already completed"))
s.bQ(r.i("1/").a(b))},
aB(a){return this.a1(a,null)},
L(a,b){this.a.L(a,b)}}
A.cq.prototype={
ex(a){if((this.c&15)!==6)return!0
return this.b.b.br(t.iW.a(this.d),a.a,t.k4,t.K)},
eu(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.eK(q,m,a.b,o,n,t.l)
else p=l.br(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bC.b(A.bA(s))){if((r.c&1)!==0)throw A.d(A.cy("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cy("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.H.prototype={
aK(a,b,c){var s,r,q,p=this.$ti
p.B(c).i("1/(2)").a(a)
s=$.D
if(s===B.j){if(b!=null&&!t.ng.b(b)&&!t.y.b(b))throw A.d(A.mo(b,"onError",u.c))}else{c.i("@<0/>").B(p.c).i("1(2)").a(a)
if(b!=null)b=A.q0(b,s)}r=new A.H(s,c.i("H<0>"))
q=b==null?1:3
this.aS(new A.cq(r,q,a,b,p.i("@<1>").B(c).i("cq<1,2>")))
return r},
cO(a,b){return this.aK(a,null,b)},
ca(a,b,c){var s,r=this.$ti
r.B(c).i("1/(2)").a(a)
s=new A.H($.D,c.i("H<0>"))
this.aS(new A.cq(s,19,a,b,r.i("@<1>").B(c).i("cq<1,2>")))
return s},
dR(a){this.a=this.a&1|16
this.c=a},
aV(a){this.a=a.a&30|this.a&1
this.c=a.c},
aS(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.f.a(r.c)
if((s.a&24)===0){s.aS(a)
return}r.aV(s)}A.da(null,null,r.b,t.M.a(new A.kx(r,a)))}},
c4(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.f.a(m.c)
if((n.a&24)===0){n.c4(a)
return}m.aV(n)}l.a=m.ay(a)
A.da(null,null,m.b,t.M.a(new A.kF(l,m)))}},
ax(){var s=t.F.a(this.c)
this.c=null
return this.ay(s)},
ay(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bL(a){var s,r,q,p=this
p.a^=2
try{a.aK(new A.kB(p),new A.kC(p),t.P)}catch(q){s=A.bA(q)
r=A.by(q)
A.ny(new A.kD(p,s,r))}},
bQ(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("ao<1>").b(a))if(q.b(a))A.kA(a,r)
else r.bL(a)
else{s=r.ax()
q.c.a(a)
r.a=8
r.c=a
A.d4(r,s)}},
al(a){var s,r=this
r.$ti.c.a(a)
s=r.ax()
r.a=8
r.c=a
A.d4(r,s)},
L(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.ax()
this.dR(A.iy(a,b))
A.d4(this,s)},
bJ(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("ao<1>").b(a)){this.bM(a)
return}this.di(s.c.a(a))},
di(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.da(null,null,s.b,t.M.a(new A.kz(s,a)))},
bM(a){var s=this,r=s.$ti
r.i("ao<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.da(null,null,s.b,t.M.a(new A.kE(s,a)))}else A.kA(a,s)
return}s.bL(a)},
aT(a,b){t.l.a(b)
this.a^=2
A.da(null,null,this.b,t.M.a(new A.ky(this,a,b)))},
$iao:1}
A.kx.prototype={
$0(){A.d4(this.a,this.b)},
$S:0}
A.kF.prototype={
$0(){A.d4(this.b,this.a.a)},
$S:0}
A.kB.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.al(p.$ti.c.a(a))}catch(q){s=A.bA(q)
r=A.by(q)
p.L(s,r)}},
$S:12}
A.kC.prototype={
$2(a,b){this.a.L(t.K.a(a),t.l.a(b))},
$S:41}
A.kD.prototype={
$0(){this.a.L(this.b,this.c)},
$S:0}
A.kz.prototype={
$0(){this.a.al(this.b)},
$S:0}
A.kE.prototype={
$0(){A.kA(this.b,this.a)},
$S:0}
A.ky.prototype={
$0(){this.a.L(this.b,this.c)},
$S:0}
A.kI.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.eJ(t.mY.a(q.d),t.z)}catch(p){s=A.bA(p)
r=A.by(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.iy(s,r)
o.b=!0
return}if(l instanceof A.H&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.h.b(l)){n=m.b.a
q=m.a
q.c=l.cO(new A.kJ(n),t.z)
q.b=!1}},
$S:0}
A.kJ.prototype={
$1(a){return this.a},
$S:42}
A.kH.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.br(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bA(l)
r=A.by(l)
q=this.a
q.c=A.iy(s,r)
q.b=!0}},
$S:0}
A.kG.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.ex(s)&&p.a.e!=null){p.c=p.a.eu(s)
p.b=!1}}catch(o){r=A.bA(o)
q=A.by(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.iy(r,q)
n.b=!0}},
$S:0}
A.hf.prototype={}
A.cl.prototype={
gm(a){var s={},r=new A.H($.D,t.hy)
s.a=0
this.bl(new A.k6(s,this),!0,new A.k7(s,r),r.gdn())
return r}}
A.k6.prototype={
$1(a){A.C(this.b).c.a(a);++this.a.a},
$S(){return A.C(this.b).i("~(1)")}}
A.k7.prototype={
$0(){this.b.bQ(this.a.a)},
$S:0}
A.bn.prototype={}
A.em.prototype={
gdK(){var s,r=this
if((r.b&8)===0)return A.C(r).i("bU<1>?").a(r.a)
s=A.C(r)
return s.i("bU<1>?").a(s.i("hV<1>").a(r.a).gbx())},
dw(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.b9(A.C(q).i("b9<1>"))
return A.C(q).i("b9<1>").a(s)}r=A.C(q)
s=r.i("hV<1>").a(q.a).gbx()
return r.i("b9<1>").a(s)},
gdX(){var s=this.a
if((this.b&8)!==0)s=t.gL.a(s).gbx()
return A.C(this).i("d3<1>").a(s)},
dj(){if((this.b&4)!==0)return new A.bm("Cannot add event after closing")
return new A.bm("Cannot add event while adding a stream")},
l(a,b){var s,r=this,q=A.C(r)
q.c.a(b)
s=r.b
if(s>=4)throw A.d(r.dj())
if((s&1)!==0)r.b9(b)
else if((s&3)===0)r.dw().l(0,new A.co(b,q.i("co<1>")))},
dW(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=A.C(l)
k.i("~(1)?").a(a)
t.Z.a(c)
if((l.b&3)!==0)throw A.d(A.aC("Stream has already been listened to."))
s=$.D
r=d?1:0
t.bm.B(k.c).i("1(2)").a(a)
A.pd(s,b)
q=c==null?A.qe():c
p=t.M
p.a(q)
o=new A.d3(l,a,s,r,k.i("d3<1>"))
n=l.gdK()
r=l.b|=1
if((r&8)!==0){m=k.i("hV<1>").a(l.a)
m.sbx(o)
m.eH(0)}else l.a=o
o.dS(n)
k=p.a(new A.kQ(l))
s=o.e
o.e=s|32
k.$0()
o.e&=4294967263
o.bN((s&4)!==0)
return o},
$imS:1,
$in3:1,
$icp:1}
A.kQ.prototype={
$0(){A.m7(this.a.d)},
$S:0}
A.hg.prototype={
b9(a){var s=this.$ti
s.c.a(a)
this.gdX().dh(new A.co(a,s.i("co<1>")))}}
A.d2.prototype={}
A.bQ.prototype={
gt(a){return(A.cj(this.a)^892482866)>>>0},
F(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bQ&&b.a===this.a}}
A.d3.prototype={
c1(){var s=this.x,r=A.C(s)
r.i("bn<1>").a(this)
if((s.b&8)!==0)r.i("hV<1>").a(s.a).eZ(0)
A.m7(s.e)},
c2(){var s=this.x,r=A.C(s)
r.i("bn<1>").a(this)
if((s.b&8)!==0)r.i("hV<1>").a(s.a).eH(0)
A.m7(s.f)}}
A.e5.prototype={
dS(a){var s=this
A.C(s).i("bU<1>?").a(a)
if(a==null)return
s.sb6(a)
if(a.c!=null){s.e|=64
a.aN(s)}},
c1(){},
c2(){},
dh(a){var s=this,r=A.C(s),q=r.i("b9<1>?").a(s.r)
if(q==null)q=new A.b9(r.i("b9<1>"))
s.sb6(q)
q.l(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.aN(s)}},
b9(a){var s,r=this,q=A.C(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.cN(r.a,a,q)
r.e&=4294967263
r.bN((s&4)!==0)},
bN(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.sb6(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.c1()
else q.c2()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.aN(q)},
sb6(a){this.r=A.C(this).i("bU<1>?").a(a)},
$ibn:1,
$icp:1}
A.en.prototype={
bl(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.dW(s.i("~(1)?").a(a),d,c,b===!0)},
cE(a){return this.bl(a,null,null,null)}}
A.hm.prototype={}
A.co.prototype={}
A.bU.prototype={
aN(a){var s,r=this
r.$ti.i("cp<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.ny(new A.kN(r,a))
r.a=1}}
A.kN.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("cp<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.C(r).i("cp<1>").a(s).b9(r.b)},
$S:0}
A.b9.prototype={
l(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.hW.prototype={}
A.ev.prototype={$imZ:1}
A.l_.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.k(0)
throw s},
$S:0}
A.hN.prototype={
eL(a){var s,r,q,p,o
t.M.a(a)
try{if(B.j===$.D){a.$0()
return}A.ni(null,null,this,a,t.H)}catch(q){s=A.bA(q)
r=A.by(q)
p=t.K.a(s)
o=t.l.a(r)
A.il(p,o)}},
cN(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.j===$.D){a.$1(b)
return}A.nj(null,null,this,a,b,t.H,c)}catch(q){s=A.bA(q)
r=A.by(q)
p=t.K.a(s)
o=t.l.a(r)
A.il(p,o)}},
ci(a){return new A.kO(this,t.M.a(a))},
cj(a,b){return new A.kP(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
eJ(a,b){b.i("0()").a(a)
if($.D===B.j)return a.$0()
return A.ni(null,null,this,a,b)},
br(a,b,c,d){c.i("@<0>").B(d).i("1(2)").a(a)
d.a(b)
if($.D===B.j)return a.$1(b)
return A.nj(null,null,this,a,b,c,d)},
eK(a,b,c,d,e,f){d.i("@<0>").B(e).B(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.D===B.j)return a.$2(b,c)
return A.q1(null,null,this,a,b,c,d,e,f)},
bp(a,b,c,d){return b.i("@<0>").B(c).B(d).i("1(2,3)").a(a)}}
A.kO.prototype={
$0(){return this.a.eL(this.b)},
$S:0}
A.kP.prototype={
$1(a){var s=this.c
return this.a.cN(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.kM.prototype={
ai(a){return A.lf(a)&1073741823},
aj(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.ea.prototype={
h(a,b){if(!A.O(this.z.$1(b)))return null
return this.d5(b)},
j(a,b,c){var s=this.$ti
this.d7(s.c.a(b),s.Q[1].a(c))},
aD(a,b){if(!A.O(this.z.$1(b)))return!1
return this.d4(b)},
I(a,b){if(!A.O(this.z.$1(b)))return null
return this.d6(b)},
ai(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
aj(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(A.O(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.kL.prototype={
$1(a){return this.a.b(a)},
$S:54}
A.eb.prototype={
gA(a){var s=this,r=new A.ec(s,s.r,s.$ti.i("ec<1>"))
r.c=s.e
return r},
gm(a){return this.a},
G(a,b){var s=this.dq(b)
return s},
dq(a){var s=this.d
if(s==null)return!1
return this.bW(s[a.gt(a)&1073741823],a)>=0},
l(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bO(s==null?q.b=A.lZ():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bO(r==null?q.c=A.lZ():r,b)}else return q.dm(0,b)},
dm(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.lZ()
r=J.cv(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.aW(b)]
else{if(p.bW(q,b)>=0)return!1
q.push(p.aW(b))}return!0},
bO(a,b){this.$ti.c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.aW(b)
return!0},
aW(a){var s=this,r=new A.hC(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
bW(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1}}
A.hC.prototype={}
A.ec.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.bE(q))
else if(r==null){s.sbP(null)
return!1}else{s.sbP(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sbP(a){this.d=this.$ti.i("1?").a(a)},
$ia2:1}
A.jq.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:55}
A.h.prototype={
gA(a){return new A.bk(a,this.gm(a),A.aY(a).i("bk<h.E>"))},
u(a,b){return this.h(a,b)},
aE(a,b,c,d){var s,r=A.aY(a)
d=r.i("h.E").a(r.i("h.E?").a(d))
A.lV(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
k(a){return A.lO(a,"[","]")}}
A.dK.prototype={}
A.ju.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.z(a)
r.a=s+": "
r.a+=A.z(b)},
$S:56}
A.y.prototype={
C(a,b){var s,r,q=A.aY(a)
q.i("~(y.K,y.V)").a(b)
for(s=J.aP(this.ga3(a)),q=q.i("y.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gah(a){return J.oi(this.ga3(a),new A.jw(a),A.aY(a).i("cN<y.K,y.V>"))},
gm(a){return J.aj(this.ga3(a))},
k(a){return A.lT(a)},
$iL:1}
A.jw.prototype={
$1(a){var s,r=this.a,q=A.aY(r)
q.i("y.K").a(a)
s=q.i("y.V")
return new A.cN(a,s.a(J.mk(r,a)),q.i("@<y.K>").B(s).i("cN<1,2>"))},
$S(){return A.aY(this.a).i("cN<y.K,y.V>(y.K)")}}
A.dY.prototype={
k(a){return A.lO(this,"{","}")}}
A.ei.prototype={$io:1,$ij:1,$imR:1}
A.ew.prototype={}
A.c3.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.c3&&this.a===b.a&&!0},
O(a,b){return B.e.O(this.a,t.cs.a(b).a)},
gt(a){var s=this.a
return(s^B.e.c8(s,30))&1073741823},
k(a){var s=this,r=A.os(A.oX(s)),q=A.eZ(A.oV(s)),p=A.eZ(A.oR(s)),o=A.eZ(A.oS(s)),n=A.eZ(A.oU(s)),m=A.eZ(A.oW(s)),l=A.ot(A.oT(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
return k},
$iab:1}
A.a7.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.a7&&this.a===b.a},
gt(a){return B.e.gt(this.a)},
O(a,b){return B.e.O(this.a,t.J.a(b).a)},
k(a){var s,r,q,p,o,n=this.a,m=B.e.N(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.e.N(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.e.N(n,1e6)
p=q<10?"0":""
o=B.y.cJ(B.e.k(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o},
$iab:1}
A.kv.prototype={}
A.J.prototype={
gas(){return A.by(this.$thrownJsError)}}
A.dn.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.f2(s)
return"Assertion failed"}}
A.bO.prototype={}
A.fy.prototype={
k(a){return"Throw of null."}}
A.bb.prototype={
gb_(){return"Invalid argument"+(!this.a?"(s)":"")},
gaZ(){return""},
k(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+A.z(n),l=q.gb_()+o+m
if(!q.a)return l
s=q.gaZ()
r=A.f2(q.b)
return l+s+": "+r}}
A.cU.prototype={
gb_(){return"RangeError"},
gaZ(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.z(q):""
else if(q==null)s=": Not greater than or equal to "+A.z(r)
else if(q>r)s=": Not in inclusive range "+A.z(r)+".."+A.z(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.z(r)
return s}}
A.fb.prototype={
gb_(){return"RangeError"},
gaZ(){if(A.I(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.h8.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.h5.prototype={
k(a){var s="UnimplementedError: "+this.a
return s}}
A.bm.prototype={
k(a){return"Bad state: "+this.a}}
A.eV.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.f2(s)+"."}}
A.fB.prototype={
k(a){return"Out of Memory"},
gas(){return null},
$iJ:1}
A.e_.prototype={
k(a){return"Stack Overflow"},
gas(){return null},
$iJ:1}
A.eY.prototype={
k(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.hs.prototype={
k(a){return"Exception: "+this.a}}
A.j.prototype={
cF(a,b,c){var s=A.C(this)
return A.mH(this,s.B(c).i("1(j.E)").a(b),s.i("j.E"),c)},
C(a,b){var s
A.C(this).i("~(j.E)").a(b)
for(s=this.gA(this);s.n();)b.$1(s.gp(s))},
gm(a){var s,r=this.gA(this)
for(s=0;r.n();)++s
return s},
u(a,b){var s,r,q
A.jT(b,"index")
for(s=this.gA(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.d(A.P(b,this,"index",null,r))},
k(a){return A.mB(this,"(",")")}}
A.a2.prototype={}
A.cN.prototype={
k(a){return"MapEntry("+A.z(this.a)+": "+A.z(this.b)+")"}}
A.S.prototype={
gt(a){return A.v.prototype.gt.call(this,this)},
k(a){return"null"}}
A.v.prototype={$iv:1,
F(a,b){return this===b},
gt(a){return A.cj(this)},
k(a){return"Instance of '"+A.jP(this)+"'"},
toString(){return this.k(this)}}
A.hZ.prototype={
k(a){return""},
$iaV:1}
A.fX.prototype={
gm(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.q.prototype={}
A.is.prototype={
gm(a){return a.length}}
A.eI.prototype={
k(a){return String(a)}}
A.eJ.prototype={
k(a){return String(a)}}
A.eO.prototype={}
A.eP.prototype={
gbm(a){return new A.bR(a,"load",!1,t.bz)}}
A.bZ.prototype={
sa2(a,b){a.height=b},
sa5(a,b){a.width=b},
bz(a,b){return a.getContext(b)},
$ibZ:1}
A.cC.prototype={
sep(a,b){a.fillStyle=b},
$icC:1}
A.b0.prototype={
gm(a){return a.length}}
A.iP.prototype={
gm(a){return a.length}}
A.G.prototype={$iG:1}
A.cG.prototype={
dk(a,b){var s=$.nB(),r=s[b]
if(typeof r=="string")return r
r=this.dY(a,b)
s[b]=r
return r},
dY(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.nD()+b
if(s in a)return s
return b},
dT(a,b,c,d){if(d==null)d=""
a.setProperty(b,c,d)},
gm(a){return a.length}}
A.iQ.prototype={}
A.aQ.prototype={}
A.be.prototype={}
A.iR.prototype={
gm(a){return a.length}}
A.iS.prototype={
gm(a){return a.length}}
A.iT.prototype={
gm(a){return a.length},
h(a,b){return a[b]}}
A.cH.prototype={$icH:1}
A.bf.prototype={$ibf:1}
A.bH.prototype={
k(a){return String(a)},
$ibH:1}
A.dx.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.mx.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.dy.prototype={
k(a){var s,r=a.left
r.toString
r="Rectangle ("+A.z(r)+", "
s=a.top
s.toString
return r+A.z(s)+") "+A.z(this.ga5(a))+" x "+A.z(this.ga2(a))},
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
if(s===r){s=J.io(b)
s=this.ga5(a)===s.ga5(b)&&this.ga2(a)===s.ga2(b)}else s=!1}else s=!1}else s=!1
return s},
gt(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.jL(r,s,this.ga5(a),this.ga2(a))},
gbY(a){return a.height},
ga2(a){var s=this.gbY(a)
s.toString
return s},
gcb(a){return a.width},
ga5(a){var s=this.gcb(a)
s.toString
return s},
$ib7:1}
A.f0.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
A.ah(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.iU.prototype={
gm(a){return a.length}}
A.W.prototype={
k(a){return a.localName},
gbm(a){return new A.bR(a,"load",!1,t.bz)},
$iW:1}
A.k.prototype={$ik:1}
A.e.prototype={
ea(a,b,c,d){t.du.a(c)
if(c!=null)this.dg(a,b,c,!1)},
dg(a,b,c,d){return a.addEventListener(b,A.ba(t.du.a(c),1),!1)},
$ie:1}
A.au.prototype={$iau:1}
A.f3.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.et.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.f4.prototype={
gm(a){return a.length}}
A.f6.prototype={
gm(a){return a.length}}
A.av.prototype={$iav:1}
A.je.prototype={
gm(a){return a.length}}
A.c6.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.fh.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.dE.prototype={
eC(a,b,c){return a.open(b,c)}}
A.c7.prototype={}
A.cL.prototype={$icL:1}
A.c8.prototype={
scm(a,b){a.checked=!1},
seQ(a,b){a.type=b},
$ic8:1}
A.bi.prototype={$ibi:1}
A.jt.prototype={
k(a){return String(a)}}
A.cf.prototype={}
A.jy.prototype={
gm(a){return a.length}}
A.fl.prototype={
h(a,b){return A.bx(a.get(A.ah(b)))},
C(a,b){var s,r
t.C.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bx(r.value[1]))}},
ga3(a){var s=A.c([],t.s)
this.C(a,new A.jB(s))
return s},
gm(a){return a.size},
$iL:1}
A.jB.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.fm.prototype={
h(a,b){return A.bx(a.get(A.ah(b)))},
C(a,b){var s,r
t.C.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bx(r.value[1]))}},
ga3(a){var s=A.c([],t.s)
this.C(a,new A.jC(s))
return s},
gm(a){return a.size},
$iL:1}
A.jC.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.ay.prototype={$iay:1}
A.fn.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.ib.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.ap.prototype={$iap:1}
A.u.prototype={
k(a){var s=a.nodeValue
return s==null?this.d2(a):s},
$iu:1}
A.dQ.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.fh.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.az.prototype={
gm(a){return a.length},
$iaz:1}
A.fF.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.d8.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.fM.prototype={
h(a,b){return A.bx(a.get(A.ah(b)))},
C(a,b){var s,r
t.C.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bx(r.value[1]))}},
ga3(a){var s=A.c([],t.s)
this.C(a,new A.jW(s))
return s},
gm(a){return a.size},
$iL:1}
A.jW.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.fO.prototype={
gm(a){return a.length}}
A.ar.prototype={$iar:1}
A.fR.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.fm.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.aA.prototype={$iaA:1}
A.fS.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.cA.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.aB.prototype={
gm(a){return a.length},
$iaB:1}
A.fW.prototype={
h(a,b){return a.getItem(A.ah(b))},
C(a,b){var s,r,q
t.gS.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga3(a){var s=A.c([],t.s)
this.C(a,new A.k5(s))
return s},
gm(a){return a.length},
$iL:1}
A.k5.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:18}
A.ae.prototype={$iae:1}
A.as.prototype={$ias:1}
A.a8.prototype={$ia8:1}
A.h_.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.gJ.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.h0.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.dQ.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.kd.prototype={
gm(a){return a.length}}
A.aD.prototype={$iaD:1}
A.h2.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.ki.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.ke.prototype={
gm(a){return a.length}}
A.b8.prototype={}
A.kh.prototype={
k(a){return String(a)}}
A.d_.prototype={$id_:1}
A.ha.prototype={
gm(a){return a.length}}
A.d1.prototype={
cM(a,b){var s
t.hv.a(b)
this.dz(a)
s=A.nl(b,t.cZ)
s.toString
return this.dO(a,s)},
dO(a,b){return a.requestAnimationFrame(A.ba(t.hv.a(b),1))},
dz(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ikm:1}
A.hj.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.d5.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.e7.prototype={
k(a){var s,r=a.left
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
r=J.io(b)
if(s===r.ga5(b)){s=a.height
s.toString
r=s===r.ga2(b)
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
return A.jL(p,s,r,q)},
gbY(a){return a.height},
ga2(a){var s=a.height
s.toString
return s},
gcb(a){return a.width},
ga5(a){var s=a.width
s.toString
return s}}
A.hw.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.ef.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.ed.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.fh.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.hR.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.hH.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.i_.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a[b]},
j(a,b,c){A.I(b)
t.lv.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$ix:1,
$ij:1,
$im:1}
A.lK.prototype={}
A.e8.prototype={
bl(a,b,c,d){var s=A.C(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.bS(this.a,this.b,a,!1,s.c)}}
A.bR.prototype={}
A.e9.prototype={}
A.kw.prototype={
$1(a){return this.a.$1(t.L.a(a))},
$S:14}
A.p.prototype={
gA(a){return new A.dB(a,this.gm(a),A.aY(a).i("dB<p.E>"))}}
A.dB.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbZ(J.mk(s.a,r))
s.c=r
return!0}s.sbZ(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
sbZ(a){this.d=this.$ti.i("1?").a(a)},
$ia2:1}
A.hl.prototype={$ie:1,$ikm:1}
A.hk.prototype={}
A.hn.prototype={}
A.ho.prototype={}
A.hp.prototype={}
A.hq.prototype={}
A.ht.prototype={}
A.hu.prototype={}
A.hx.prototype={}
A.hy.prototype={}
A.hD.prototype={}
A.hE.prototype={}
A.hF.prototype={}
A.hG.prototype={}
A.hH.prototype={}
A.hI.prototype={}
A.hL.prototype={}
A.hM.prototype={}
A.hO.prototype={}
A.ej.prototype={}
A.ek.prototype={}
A.hP.prototype={}
A.hQ.prototype={}
A.hU.prototype={}
A.i0.prototype={}
A.i1.prototype={}
A.eo.prototype={}
A.ep.prototype={}
A.i3.prototype={}
A.i4.prototype={}
A.ia.prototype={}
A.ib.prototype={}
A.ic.prototype={}
A.id.prototype={}
A.ie.prototype={}
A.ig.prototype={}
A.ih.prototype={}
A.ii.prototype={}
A.ij.prototype={}
A.ik.prototype={}
A.kn.prototype={
cq(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.l(r,a)
B.a.l(this.b,null)
return q},
by(a){var s,r,q,p,o,n,m,l,k=this,j={}
if(a==null)return a
if(A.kY(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.R(A.cy("DateTime is outside valid range: "+s,null))
A.eA(!0,"isUtc",t.k4)
return new A.c3(s,!0)}if(a instanceof RegExp)throw A.d(A.lX("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.qF(a,t.z)
if(A.nu(a)){q=k.cq(a)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=j.a=r[q]
if(p!=null)return p
o=t.z
p=A.ad(o,o)
j.a=p
B.a.j(r,q,p)
k.eq(a,new A.kp(j,k))
return j.a}if(a instanceof Array){n=a
q=k.cq(n)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p!=null)return p
o=J.at(n)
m=o.gm(n)
p=k.c?new Array(m):n
B.a.j(r,q,p)
for(r=J.de(p),l=0;l<m;++l)r.j(p,l,k.by(o.h(n,l)))
return p}return a}}
A.kp.prototype={
$2(a,b){var s=this.a.a,r=this.b.by(b)
J.ml(s,a,r)
return r},
$S:22}
A.ko.prototype={
eq(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.B)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.jJ.prototype={
k(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.ln.prototype={
$1(a){return this.a.a1(0,this.b.i("0/?").a(a))},
$S:9}
A.lo.prototype={
$1(a){if(a==null)return this.a.aC(new A.jJ(a===undefined))
return this.a.aC(a)},
$S:9}
A.hz.prototype={
D(a){if(a<=0||a>4294967296)throw A.d(A.oY("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
S(){return Math.random()},
ez(){return Math.random()<0.5},
$imM:1}
A.aI.prototype={$iaI:1}
A.ff.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.I(b)
t.kT.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){return this.h(a,b)},
$io:1,
$ij:1,
$im:1}
A.aK.prototype={$iaK:1}
A.fz.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.I(b)
t.ai.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){return this.h(a,b)},
$io:1,
$ij:1,
$im:1}
A.jO.prototype={
gm(a){return a.length}}
A.fY.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.I(b)
A.ah(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){return this.h(a,b)},
$io:1,
$ij:1,
$im:1}
A.n.prototype={
gbm(a){return new A.bR(a,"load",!1,t.bz)}}
A.aM.prototype={$iaM:1}
A.h3.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.I(b)
t.hk.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){return this.h(a,b)},
$io:1,
$ij:1,
$im:1}
A.hA.prototype={}
A.hB.prototype={}
A.hJ.prototype={}
A.hK.prototype={}
A.hX.prototype={}
A.hY.prototype={}
A.i5.prototype={}
A.i6.prototype={}
A.aZ.prototype={
gm(a){return a.length},
$iaZ:1}
A.dr.prototype={
see(a,b){a.buffer=b}}
A.bY.prototype={
dt(a,b,c,d){t.p0.a(c)
t.lW.a(d)
return a.decodeAudioData(b,A.ba(c,1),A.ba(d,1))},
ek(a,b){var s=new A.H($.D,t.og),r=new A.aO(s,t.oJ)
this.dt(a,b,new A.iC(r),new A.iD(r))
return s},
$ibY:1}
A.iC.prototype={
$1(a){this.a.a1(0,t.bD.a(a))},
$S:23}
A.iD.prototype={
$1(a){this.a.aC(t.jW.a(a))},
$S:24}
A.F.prototype={
bR(a,b,c,d){return a.connect(b,c,d)},
$iF:1}
A.eK.prototype={
saM(a,b){a.value=b}}
A.eL.prototype={
h(a,b){return A.bx(a.get(A.ah(b)))},
C(a,b){var s,r
t.C.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bx(r.value[1]))}},
ga3(a){var s=A.c([],t.s)
this.C(a,new A.iE(s))
return s},
gm(a){return a.size},
$iL:1}
A.iE.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.bc.prototype={}
A.eM.prototype={
gm(a){return a.length}}
A.ds.prototype={}
A.cK.prototype={}
A.fA.prototype={
gm(a){return a.length}}
A.hi.prototype={}
A.eQ.prototype={$ieQ:1}
A.f7.prototype={$if7:1}
A.fG.prototype={$ifG:1}
A.cV.prototype={
ck(a,b){return a.bindVertexArray(b)},
cg(a,b,c){return a.bindBuffer(b,c)},
aA(a,b,c){return a.bindFramebuffer(b,c)},
R(a,b,c){return a.bindTexture(b,c)},
el(a,b){return a.deleteTexture(b)},
cs(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aJ(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.m5(g)){s.e_(a,b,c,d,e,f,g,h,i,j)
return}if(t.hQ.b(g)&&h==null&&r&&j==null){s.e0(a,b,c,d,e,f,g)
return}if(t.g.b(g)&&h==null&&r&&j==null){s.e1(a,b,c,d,e,f,g)
return}if(t.eL.b(g)&&h==null&&r&&j==null){s.e2(a,b,c,d,e,f,g)
return}throw A.d(A.cy("Incorrect number or type of arguments",null))},
eN(a,b,c,d,e,f,g){return this.aJ(a,b,c,d,e,f,g,null,null,null)},
e_(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
e0(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
e1(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
e2(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
eR(a,b,c){return a.uniform1f(b,c)},
eS(a,b,c){return a.uniform1i(b,c)},
eT(a,b,c,d){return a.uniform2f(b,c,d)},
eU(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eV(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eW(a,b){return a.useProgram(b)},
$icV:1}
A.bo.prototype={$ibo:1}
A.h4.prototype={$ih4:1}
A.h9.prototype={$ih9:1}
A.fT.prototype={
gm(a){return a.length},
h(a,b){var s
if(b>>>0!==b||b>=a.length)throw A.d(A.P(b,a,null,null,null))
s=A.bx(a.item(b))
s.toString
return s},
j(a,b,c){A.I(b)
t.av.a(c)
throw A.d(A.A("Cannot assign element of immutable List."))},
u(a,b){return this.h(a,b)},
$io:1,
$ij:1,
$im:1}
A.hS.prototype={}
A.hT.prototype={}
A.fa.prototype={
aY(a){var s=this.b
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
B.a.bB(p,0,o.c,o.b)
o.sb7(p)}o.aU(b,o.c++)},
gm(a){return this.c},
I(a,b){var s,r,q=this
q.$ti.c.a(b)
s=q.dG(b)
if(s<0)return!1;++q.d
r=q.dM()
if(s<q.c)if(q.a.$2(r,b)<=0)q.aU(r,s)
else q.bK(r,s)
return!0},
aL(a){var s=this.e3()
B.a.aP(s,this.a)
return s},
e3(){var s,r,q=this.$ti,p=A.c([],q.i("r<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
k(a){var s=this.b
return A.mB(A.mV(s,0,A.eA(this.c,"count",t.S),A.a4(s).c),"(",")")},
aQ(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.b5(q,null,!1,n.i("1?"))
B.a.bB(p,0,o.c,o.b)
o.sb7(p)}o.aU(b,o.c++)},
dG(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.aY(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.T(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
dM(){var s=this,r=s.c-1,q=s.aY(r)
B.a.j(s.b,r,null)
s.c=r
return q},
aU(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.e.N(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.T()
if(q>0)break
B.a.j(o.b,b,p)}B.a.j(o.b,b,a)},
bK(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.$ti.c
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
if(p<q){j=i.aY(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sb7(a){this.b=this.$ti.i("m<1?>").a(a)}}
A.kU.prototype={
gA(a){var s=this.a
return new A.cr(s,s.d,this.$ti.i("cr<1>"))}}
A.cr.prototype={
n(){var s,r=this,q=r.a
if(r.b!==q.d)throw A.d(A.bE(q))
s=r.d+1
if(0<=s&&s<q.c){q=q.b
if(!(s>=0&&s<q.length))return A.b(q,s)
r.sc5(q[s])
r.d=s
return!0}r.sc5(null)
r.d=-2
return!1},
gp(a){var s
if(this.d<0)s=A.R(A.aC("No element"))
else{s=this.c
if(s==null)s=this.$ti.c.a(null)}return s},
sc5(a){this.c=this.$ti.i("1?").a(a)},
$ia2:1}
A.l.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.l&&b.a===this.a},
gt(a){return B.e.gt(this.a)},
k(a){return"Color(0x"+B.y.cJ(B.e.eO(this.a,16),8,"0")+")"}}
A.Y.prototype={
ct(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.e.aq(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.d(A.aC(b.k(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.e.aq(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.d(A.lL(b.k(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
a_(a,b,c){var s=B.e.aq(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
E(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.e.aq(d*s+c)
q=p.c
if(r>=q.length)throw A.d(A.lL("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
k(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.e.aq(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.z(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.fx.prototype={
saM(a,b){var s,r,q,p=this
p.$ti.c.a(b)
if(b===p.b)return
p.se8(b)
s=p.a
r=A.c(s.slice(0),A.a4(s))
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.B)(r),++q)r[q].$0()},
se8(a){this.b=this.$ti.c.a(a)}}
A.aL.prototype={
v(a,b){return new A.aL(this.a+b.a,this.b+b.b)},
F(a,b){if(b==null)return!1
return b instanceof A.aL&&b.a===this.a&&b.b===this.b},
gt(a){return A.jL(this.a,this.b,B.C,B.C)},
k(a){return"Offset("+B.c.cP(this.a,1)+", "+B.c.cP(this.b,1)+")"}}
A.cx.prototype={
gW(a){return B.c.w(this.b.d/24)},
gX(a){return B.c.w(this.b.e/36)},
q(){var s=this.b
return new A.i(B.c.w(s.d/24),B.c.w(s.e/36))},
$idD:1,
gbk(){return null}}
A.ir.prototype={}
A.iq.prototype={
ed(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.b
c.eB()
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
n=b.y.P(s)
for(p=o.a,m=p.length,l=n.c,k=n.a,j=l.length,c=c.a,i=0;i<p.length;p.length===m||(0,A.B)(p),++i){h=p[i]
if(h.e)continue
g=h.q()
if(g==null)continue
f=g.ao(s)
e=g.b*k+g.a
if(!(e>=0&&e<j))return A.b(l,e)
if(l[e]!==1||h===a)continue
if(!A.nt(h,a))B.a.l(q,h)
else if(f<10.5){B.a.l(r,h)
e=h.q()
d=e.b*100+e.a
if(!(d>=0&&d<4000))return A.b(c,d)
B.e0.j(c,d,Math.max(c[d],20))}}c=this.a.Z(a,r,q,new A.a9(null,null),b).a
if(c==null)return new A.cX()
return c}}
A.a9.prototype={}
A.al.prototype={}
A.bL.prototype={
Z(a,b,c,d,e){var s,r,q=null,p=t.k
p.a(b)
p.a(c)
if(d.b!=null)return d
p=a.r
s=p==null
if((s?q:p.c)!=null)r=B.a.G(b,s?q:p.c)
else r=!1
if(r){if(s)p=q
else{p=p.c
p.toString}return new A.a9(q,p)}return d}}
A.bM.prototype={
Z(a,b,c,d,e){var s,r=t.k
r.a(b)
r.a(c)
if(d.b!=null)return d
if(0<b.length){s=b[0]
r=a.r
if(r!=null)r.c=s
return new A.a9(null,s)}return d}}
A.cE.prototype={
Z(a,b,c,d,e){var s,r,q=t.k
q.a(b)
q.a(c)
if(d.b!=null||c.length===0)return d
for(q=c.length,s=0;s<q;++s){r=c[s].r
if(r!=null&&r.c!=null){q=r.c
q.toString
return new A.a9(null,q)}}return d}}
A.bJ.prototype={
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
j=B.e.cX(q,100)
s=B.e.N(q,100)
m=$.df()
l=a.q()
l.toString
k=m.aF(l,new A.i(j,s),r)
if(k==null)return d
j=k.b.d
s=a.q()
s.toString
return new A.a9(new A.aJ(j.V(0,s),a),null)}}
A.fK.prototype={
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
q=e.fx.a.bf(r,p,-1)
if(q==null)return d
this.b=!0
p=a.q()
p.toString
return new A.a9(new A.aJ(q.V(0,p),a),null)}}
A.dV.prototype={
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
q=c.V(0,s)
e.a=e.a.b
return new A.a9(new A.aJ(q,a),d)}c=a.q()
c.toString
s=a2.fx.a
p=s.bf(r,c,-1)
if(p==null){o=c.b*100+c.a
s=s.a
if(!(o>=0&&o<4000))return A.b(s,o)
n=s[o]
m=a2.y.P(c)
for(c=m.c,l=m.a,k=c.length,j=d,i=1;i<100;++i)for(h=1;h<40;++h){o=h*100+i
if(!(o<4000))return A.b(s,o)
g=s[o]
f=h*l+i
if(!(f<k))return A.b(c,f)
if(c[f]===1&&g<n){j=new A.i(i,h)
n=g}}if(j!=null){c=$.df()
s=a.q()
s.toString
e.a=c.aF(s,j,r)}return new A.a9(new A.cX(),d)}c=a.q()
c.toString
return new A.a9(new A.aJ(p.V(0,c),a),d)}}
A.fL.prototype={
Z(a,b,c,d,e){var s,r,q,p,o,n,m=t.k
m.a(b)
m.a(c)
m=e.c
s=m.e
m=m.d
if(!(m<s.length))return A.b(s,m)
r=s[m]
for(m=c.length,s=this.a,q=0;q<c.length;c.length===m||(0,A.B)(c),++q){p=c[q].q()
p.toString
o=a.q()
o.toString
if(p.ao(o)<=s)return d}if(b.length===0)return d
m=a.q()
m.toString
n=e.fx.a.bf(r,m,-1)
if(n==null)return d
m=a.q()
m.toString
return new A.a9(new A.aJ(n.V(0,m),a),null)}}
A.l7.prototype={
$1(a){t.lZ.a(a)
return a.c===B.ab&&t.mm.a(a.b).a===this.a.Q.a},
$S:25}
A.bB.prototype={
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
s=$.df()
q=a.q()
q.toString
p=m.q()
p.toString
o=s.aF(q,p,r)
if(o==null)return d
s=a.c.x
n=s.gbo()
if(n!=null&&o.gbe()<=n.ch/5){q=s.b.h(0,B.q)
q.toString
q=q.e
q.toString
if(q===0)if(A.qs(s,n))return new A.a9(new A.dU(a),m)
else{s=o.b.d
q=a.q()
q.toString
return new A.a9(new A.aJ(s.V(0,q),a),m)}s=m.q()
s.toString
return new A.a9(new A.dT(4,s,a),m)}s=o.b.d
q=a.q()
q.toString
return new A.a9(new A.aJ(s.V(0,q),a),m)}}
A.b1.prototype={
Z(a,b,c,d,e){var s,r,q,p,o=t.k
o.a(b)
o.a(c)
for(o=this.a,s=o.length,r=d,q=0;q<o.length;o.length===s||(0,A.B)(o),++q,r=p){p=o[q].Z(a,b,c,r,e)
if(p.a!=null)return p}return r},
$ial:1}
A.bl.prototype={}
A.lx.prototype={
$0(){return new A.a3(2,6,0,0,B.bi)},
$S:2}
A.lv.prototype={
$0(){return new A.b1(A.c([new A.bL(),new A.bM(),new A.dV(),new A.bB(),new A.bJ()],t.a))},
$S:3}
A.lw.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lr.prototype={
$0(){return new A.a3(2,4,0,0,B.av)},
$S:2}
A.lp.prototype={
$0(){return new A.b1(A.c([new A.bL(),new A.bM(),new A.dV(),new A.bB(),new A.bJ()],t.a))},
$S:3}
A.lq.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lA.prototype={
$0(){return new A.a3(10,7,0,0,B.av)},
$S:2}
A.ly.prototype={
$0(){return new A.b1(A.c([new A.bL(),new A.bM(),new A.cE(),new A.bB(),new A.bJ()],t.a))},
$S:3}
A.lz.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lD.prototype={
$0(){return new A.a3(10,7,0,0,B.bi)},
$S:2}
A.lB.prototype={
$0(){return new A.b1(A.c([new A.bL(),new A.bM(),new A.cE(),new A.fK(),new A.bB(),new A.bJ()],t.a))},
$S:3}
A.lC.prototype={
$0(){var s=A.my(B.U)
s.e=9
return A.c([s],t.I)},
$S:4}
A.l4.prototype={
$0(){return new A.a3(3,7,0,0,B.dO)},
$S:2}
A.l2.prototype={
$0(){return new A.b1(A.c([new A.bL(),new A.bM(),new A.cE(),new A.fL(6),new A.bB(),new A.bJ()],t.a))},
$S:3}
A.l3.prototype={
$0(){return A.c([A.my(B.U)],t.I)},
$S:4}
A.iJ.prototype={
bU(a){if(a>30)return 6
if(a>20)return 4
return 1}}
A.a_.prototype={
h(a,b){return this.b.h(0,A.C(this).i("a_.T").a(b))}}
A.cP.prototype={}
A.cO.prototype={}
A.f8.prototype={
bi(a){return this.es(t.U.a(a))},
es(a){var s=0,r=A.bv(t.H),q,p=this,o
var $async$bi=A.bw(function(b,c){if(b===1)return A.bq(c,r)
while(true)switch(s){case 0:o=p.e
if(o.length>3){s=1
break}B.a.l(o,a)
if(p.r){s=1
break}p.av()
case 1:return A.br(q,r)}})
return A.bs($async$bi,r)},
av(){var s=0,r=A.bv(t.z),q=1,p,o=[],n=this,m
var $async$av=A.bw(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.r=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.a5(n.au(),$async$av)
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
return A.bs($async$av,r)},
c6(){var s=new A.H($.D,t.cU),r=new A.d5(s,t.iF)
B.a.l(this.a.f,t.x.a(t.nD.a(r.gej(r))))
return s},
M(){var s=0,r=A.bv(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$M=A.bw(function(a4,a5){if(a4===1)return A.bq(a5,r)
while(true)$async$outer:switch(s){case 0:a0=p.a
a1=a0.c
a2=a1.e
a3=a1.d
if(!(a3<a2.length)){q=A.b(a2,a3)
s=1
break}a3=a2[a3].a
o=A.c(a3.slice(0),A.a4(a3))
a2=p.b,a3=B.a.ge9(a2),n=t.nt,m=a1.a.c,a1=p.f,l=a1.a,a1=a1.b,k=p.c,j=p.d,i=p.e,h=0,g=!1
case 4:if(!!0){s=5
break}case 6:if(!(f=a2.length,f!==0)){s=7
break}if(0>=f){q=A.b(a2,0)
s=1
break}s=8
return A.a5(a2[0].H(0,a0),$async$M)
case 8:e=a5
B.a.a0(k,e.r)
case 9:if(!(f=e.a,f!=null)){s=10
break}B.a.j(a2,0,f)
s=11
return A.a5(f.H(0,a0),$async$M)
case 11:e=a5
B.a.a0(k,e.r)
s=9
break
case 10:f=e.c
if(f!=null)A.ip(f)
d=e.x
s=d!=null?12:13
break
case 12:s=!e.f&&i.length===0?14:16
break
case 14:s=j.length!==0?17:18
break
case 17:s=19
return A.a5(p.bV(),$async$M)
case 19:case 18:s=20
return A.a5(p.am(d),$async$M)
case 20:s=15
break
case 16:B.a.l(j,d)
case 15:case 13:case 21:if(!(f=k.length,f!==0)){s=22
break}if(0>=f){q=A.b(k,-1)
s=1
break}s=23
return A.a5(k.pop().H(0,a0),$async$M)
case 23:c=a5
B.a.a0(k,c.r)
case 24:if(!(f=c.a,f!=null)){s=25
break}s=26
return A.a5(f.H(0,a0),$async$M)
case 26:c=a5
B.a.a0(k,c.r)
s=24
break
case 25:f=c.c
if(f!=null)A.ip(f)
s=21
break
case 22:if(e.d)g=B.ds.cY(g,!0)
B.a.cL(a2,0)
l.saM(0,m.b/m.a)
a1.saM(0,m.d/1000)
s=6
break
case 7:if(!g){s=3
break}for(;f=o.length,h<f;){if(!(h>=0)){q=A.b(o,h)
s=1
break $async$outer}b=o[h];++h
if(b.q()==null)continue
if(A.qE(n.a(a3),b,a0)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=j.length!==0?27:29
break
case 27:s=i.length===0?30:32
break
case 30:s=33
return A.a5(p.bV(),$async$M)
case 33:s=31
break
case 32:s=34
return A.a5(p.az(),$async$M)
case 34:case 31:s=28
break
case 29:s=35
return A.a5(p.c6(),$async$M)
case 35:case 28:if(!g){s=1
break}for(a0=o.length,a=0;a<a0;++a)o[a].a=100
case 1:return A.br(q,r)}})
return A.bs($async$M,r)},
az(){var s=0,r=A.bv(t.H),q=this,p,o,n
var $async$az=A.bw(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.B)(p),++n)p[n].x.$0()
B.a.sm(p,0)
s=2
return A.a5(q.c6(),$async$az)
case 2:return A.br(null,r)}})
return A.bs($async$az,r)},
am(a){var s=0,r=A.bv(t.H),q=this,p
var $async$am=A.bw(function(b,c){if(b===1)return A.bq(c,r)
while(true)switch(s){case 0:p=new A.H($.D,t.cU)
if(a!=null)B.a.l(q.d,a)
B.a.l(q.a.f,t.x.a(new A.j9(q,new A.aO(p,t.ou))))
s=2
return A.a5(p,$async$am)
case 2:return A.br(null,r)}})
return A.bs($async$am,r)},
bV(){return this.am(null)},
au(){var s=0,r=A.bv(t.H),q,p=this,o,n,m,l,k,j
var $async$au=A.bw(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:j=p.e
if(j.length===0){s=1
break}o=B.a.cL(j,0)
switch(o){case B.a0:case B.a1:case B.a2:case B.a3:switch(o){case B.a0:n=new A.i(0,-1)
break
case B.a1:n=new A.i(1,0)
break
case B.a2:n=new A.i(0,1)
break
case B.a3:n=new A.i(-1,0)
break
default:A.R(A.aC(""))
n=null}m=new A.aJ(n,p.a.c.a)
break
case B.dp:m=new A.cX()
break
case B.b1:j=p.a
l=j.r.c?j.gaO().c:null
if(l==null){m=null
break}m=new A.fI(l,j.c.a)
break
case B.b4:m=p.dE()
break
case B.b0:m=new A.dU(p.a.c.a)
break
case B.b_:j=p.z
j=j==null?null:j.b
k=j==null
if(k)j=new A.f_(new Uint8Array(4000),A.ad(t.j,t.S))
m=p.z=new A.eN(p.a.c.a,j,k)
break
case B.b2:j=p.a.r
k=!j.c
j.c=k
if(k){j=document.body.style
B.aU.dT(j,B.aU.dk(j,"cursor"),"crosshair",null)}else document.body.style.removeProperty("cursor")
m=null
break
case B.b3:j=p.a.r
if(j.c){j.c=!1
document.body.style.removeProperty("cursor")}m=null
break
default:m=null
break}s=m!=null?3:4
break
case 3:B.a.l(p.b,m)
s=5
return A.a5(p.M(),$async$au)
case 5:case 4:case 1:return A.br(q,r)}})
return A.bs($async$au,r)},
dE(){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Y)
for(s=this.a.c,r=s.e,q=s.a,p=-1;p<2;++p)for(o=-1;o<2;++o){n=q.q()
m=n.a+p
n=n.b+o
l=s.d
if(!(l<r.length))return A.b(r,l)
l=r[l].c
if(!(m>=0&&n>=0&&m<l.a&&n<l.b))continue
k=l.h(0,new A.i(m,n))
if(k.f!=null){n=s.d
if(!(n<r.length))return A.b(r,n)
B.a.a0(i,A.ns(k,r[n]))}}s=i.length
if(s===0)return null
if(s===1){if(0>=s)return A.b(i,0)
j=i[0]}else j=null
if(j==null)return null
return j.b},
dL(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.J.a(a)
for(s=h.d,r=s.length,q=a.a,p=h.e,o=0;o<s.length;s.length===r||(0,A.B)(s),++o){n=s[o]
if(p.length>=2)n.d=1
m=n.e
l=m==null?0:B.e.N(q-m.a,1000)
n.e=a
k=l/B.e.N(n.a.a,1000)
j=n.f
i=n.d
i=n.d=B.c.eg(j?n.d=i+k:n.d=i-k,-1,1)
i>=1||i<0
n.r.$1(n)}B.a.l(h.a.f,t.x.a(h.gc3()))}}
A.j9.prototype={
$1(a){var s,r,q,p,o,n,m
t.J.a(a)
s=A.c([],t.fy)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.B)(q),++n){m=q[n]
if(m.d>=1||o.length!==0){m.x.$0()
B.a.l(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.B)(s),++n)B.a.I(q,s[n])
if(q.length===0)this.b.aB(0)
else B.a.l(r.a.f,t.x.a(this))},
$S:13}
A.dZ.prototype={
k(a){return"SlotType."+this.b}}
A.b4.prototype={
k(a){return"ItemType."+this.b}}
A.di.prototype={}
A.aw.prototype={
gbE(){switch(this.c){case B.aq:return B.ax
case B.aa:return B.ay
case B.ar:return B.az
case B.as:case B.dr:case B.b6:case B.ab:return null}}}
A.iO.prototype={}
A.U.prototype={}
A.f9.prototype={
k(a){return"HandRequirement."+this.b}}
A.b3.prototype={
k(a){return"DamageType."+this.b}}
A.bG.prototype={
k(a){return"DiceType."+this.b}}
A.aN.prototype={
k(a){return"WeaponProperties."+this.b}}
A.jz.prototype={}
A.bF.prototype={}
A.c2.prototype={
k(a){return"CriticalEffect."+this.b}}
A.X.prototype={}
A.dj.prototype={
k(a){return"AmmoType."+this.b}}
A.dk.prototype={}
A.aq.prototype={}
A.cz.prototype={
k(a){return"ArmorUpgradeType."+this.b}}
A.ak.prototype={}
A.eF.prototype={
aa(a){var s,r=a-10
if(r===0)return 0
else{s=r/2
if(r>0)return B.c.ab(s)
else return B.c.cl(s)}}}
A.c0.prototype={
cG(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x.geE()
r=a.x.gbb()
q=A.du(a0,1,B.an)
p=b.y
o=p.a
n=q+p.aa(o)
m=a.y
l=10+Math.min(m.aa(m.b),r.e)
m=s.b
l=A.O(A.mu(m))?l+r.d:l+r.c
if(!a1)l-=2
k=t.Q
j=A.c([],k)
i=A.c([],k)
if(q===1){h=!1
g=!1}else{g=n>=l
if(q===20)h=!0
else{h=g
g=!1}}f="["+n+" vs "+A.z(l)+"]"
if(!h)return new A.cA(b.cx.a+" missed "+a.cx.a+" "+f,!1,0,B.ac,B.ac)
if(B.a.G(s.z,B.by))B.a.l(j,new A.eW())
k=s.d
e=s.e
d=A.du(a0,k,e)+p.aa(o)
if(g)d+=A.du(a0,k,e)+p.aa(o)
B.a.G(b.ch,B.bl)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+s.y
return new A.cA(c,!0,d,j,i)},
cK(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x
r=s.gbo()
if(r==null)r=B.U
q=s.gbb()
s=b.y
p=Math.min(s.aa(s.b),q.e)
o=a.x.gbb()
n=A.du(a0,1,B.an)
m=n+p
l=a.y
k=10+Math.min(l.aa(l.b),o.e)
l=r.c
k=A.O(A.mu(l))?k+o.d:k+o.c
if(!a1)k-=2
j=t.Q
i=A.c([],j)
h=A.c([],j)
if(n===1){g=!1
f=!1}else{f=m>=k
if(n===20)g=!0
else{g=f
f=!1}}e="["+m+" vs "+A.z(k)+"]"
if(!g)return new A.cA(b.cx.a+" missed "+a.cx.a+" "+e,!1,0,B.ac,B.ac)
j=r.f
d=A.du(a0,1,j)
if(f)d+=A.du(a0,1,j)+s.aa(s.a)
B.a.G(b.ch,B.bl)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+r.a
return new A.cA(c,!0,d,i,h)}}
A.cA.prototype={}
A.cJ.prototype={}
A.cI.prototype={
gbb(){var s,r,q
for(s=this.b,s=s.gah(s),s=s.gA(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.U)return q}return B.bO},
geE(){var s,r,q
for(s=this.b,s=s.gah(s),s=s.gA(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.X)return q}return B.dS},
gbo(){var s,r,q
for(s=this.b,s=s.gah(s),s=s.gA(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.aq)return q}return null},
eo(a,b){var s=this.b
s.h(0,b)
s.j(0,b,a)}}
A.fC.prototype={
k(a){return"Perk."+this.b}}
A.c4.prototype={
k(a){return"EquipmentSlot."+this.b}}
A.eW.prototype={}
A.cY.prototype={
k(a){return"TileType."+this.b}}
A.cD.prototype={
k(a){return"CollisionMode."+this.b}}
A.fk.prototype={}
A.cm.prototype={
k(a){return"TerrainType."+this.b}}
A.af.prototype={
k(a){return"TerrainWidget."+this.b}}
A.cd.prototype={
k(a){return"LockState."+this.b}}
A.b_.prototype={
k(a){return"Biome."+this.b}}
A.bN.prototype={
gW(a){return this.b.a},
gX(a){return this.b.b},
seM(a){t.dt.a(a)},
$idD:1,
gbk(){return this.z}}
A.fh.prototype={}
A.fi.prototype={$idD:1,
gbk(){return this.a},
gW(a){return this.b},
gX(a){return this.c}}
A.i.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.i&&b.a===this.a&&b.b===this.b},
gt(a){return A.jL(this.a,this.b,B.C,B.C)},
v(a,b){return new A.i(this.a+b.a,this.b+b.b)},
V(a,b){return new A.i(this.a-b.a,this.b-b.b)},
bt(){return new A.aL(this.a,this.b)},
ao(a){var s=Math.abs(this.a-a.a),r=Math.abs(this.b-a.b)
return s+r+-0.6000000000000001*Math.min(s,r)},
k(a){return"("+this.a+", "+this.b+")"}}
A.js.prototype={
k(a){return"LiquidKind."+this.b}}
A.Z.prototype={
k(a){return"Interactable."+this.b}}
A.jv.prototype={}
A.jA.prototype={
eB(){var s,r
for(s=this.a,r=0;r<4000;++r)s[r]=s[r]-1}}
A.cQ.prototype={
k(a){return"MonsterKind."+this.b}}
A.iV.prototype={
e5(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.a,i=j.a6(k,t.A),h=this.c
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.c.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.b||A.O(A.bg(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.d=r
j.a9(b,k,i)},
K(a,b){var s=this
if(s.b){s.e5(0,a)
s.b=!1}s.a.a4(a,0,B.e.N(s.d,2),A.bj(["u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.iZ.prototype={
K(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=t.t,p=t.n,o=t.g2,n=t.N,m=t.z,l=0;l<s.length;s.length===r||(0,A.B)(s),++l){k=s[l]
$.mf().a4(a,4,3,A.bj(["u_resolution",A.c([b.a,b.b],q),"u_time",k.gaX().gev().eY(0,k.gen(k).gev()),"u_offset",A.c([b.d,b.e],p),"u_origin",A.c([k.gW(k),k.gX(k)],o)],n,m))
k.saX(k.gaX().v(0,A.iY(11)))}r=A.a4(s).i("E(1)").a(new A.j_())
if(!!s.fixed$length)A.R(A.A("removeWhere"))
B.a.dN(s,r,!0)}}
A.j_.prototype={
$1(a){t.ox.a(a)
return a.gaX().cQ(0,a.gen(a))},
$S:31}
A.f1.prototype={}
A.j2.prototype={
d8(a,b,c,d,e,f){var s,r,q,p,o,n,m=this
m.gU().a.J(m.a)
s=m.ch
s.a.J(m.a)
r=m.cx
r.a.J(m.a)
m.gbh().b.J(m.a)
q=m.gac()
p=m.a
q.d=p.createFramebuffer()
q.a.J(p)
q.b.J(p)
m.gco().b.J(m.a)
m.gaO().b.J(m.a)
p=m.a
$.mf().J(p)
$.o2().J(p)
p=m.c
q=p.e
o=p.d
if(!(o<q.length))return A.b(q,o)
o=A.im(q[o])
n=p.d
if(!(n<q.length))return A.b(q,n)
m.cu(o,q[n])
n=p.d
if(!(n<q.length))return A.b(q,n)
m.cc(p.a,A.im(q[n]))
n=p.d
if(!(n<q.length))return A.b(q,n)
n=s.b=q[n]
s.c=!0
r.c=n
r.b=!0
r=m.y
r.cC(n.c)
r.cv()
p=p.d
if(!(p<q.length))return A.b(q,p)
r.e=A.im(q[p])
p=m.dx.b
new A.bQ(p,A.C(p).i("bQ<1>")).cE(new A.j3(m,m.d.getBoundingClientRect()))},
gU(){var s,r=this,q=r.Q
if(q===$){s=A.p3(r.a,r.y)
A.d8(r.Q,"sprites")
r.Q=s
q=s}return q},
gbh(){var s,r=this,q=r.cy
if(q===$){s=A.pD()
s=A.aS(A.c([new A.V("a_position",35044,5126,2,s),new A.V("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.l,A.c([new A.w("u_resolution",B.d),new A.w("u_offset",B.d)],t.o),u.q)
A.d8(r.cy,"fovRenderer")
q=r.cy=new A.j4(r.y,s,new A.i(-1,-1))}return q},
gac(){var s,r,q,p=this,o=u.p,n="a_position",m="u_resolution",l="u_block_size",k="u_player_visible_texture",j="u_offset",i=p.db
if(i===$){s=t.G
r=t.o
q=A.aS(A.c([new A.V(n,35044,5126,2,new Float32Array(A.d6(B.B)))],s),u.j,A.c([new A.w(m,B.d),new A.w("u_source_position",B.d),new A.w(l,B.d),new A.w("u_source_color",B.aE),new A.w("u_source_strength",B.r),new A.w("u_time",B.r),new A.w("u_visible_texture",B.o),new A.w(k,B.o),new A.w(j,B.d)],r),o)
r=A.aS(A.c([new A.V(n,35044,5126,2,new Float32Array(A.d6(B.B)))],s),u.B,A.c([new A.w("u_light_texture",B.o),new A.w("u_game_world_texture",B.o),new A.w(k,B.o),new A.w(m,B.d),new A.w(l,B.d),new A.w(j,B.d)],r),o)
s=A.c([],t.ow)
A.d8(p.db,"lightingRenderer")
i=p.db=new A.fj(q,r,p.y,s)}return i},
gco(){var s,r=this,q=r.dy
if(q===$){s=A.aS(A.c([new A.V("a_position",35044,5126,2,new Float32Array(A.d6(B.B)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise(vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f*f*f+.6*f*f+.5*f)*color, 0.3);\n}\n",A.c([new A.w("u_resolution",B.d),new A.w("u_time",B.r),new A.w("u_offset",B.d),new A.w("u_player_vis_texture",B.o),new A.w("u_block_size",B.d)],t.o),u.h)
A.d8(r.dy,"filters")
q=r.dy=new A.j6(r.y,s)}return q},
gaO(){var s,r=this,q=r.fr
if(q===$){s=A.aS(A.c([new A.V("a_position",35048,5126,2,new Float32Array(12))],t.G),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nuniform float u_time;\nuniform float u_visible;\n\nvoid main() {\n  if (u_visible == 0.0) {\n    discard;\n    return;\n  }\n  float scale = (sin(u_time * 3.0) + 1.0) / 4.0;\n  outColor = vec4(0.509, 0.69411, 1.0, scale + 0.3);\n}\n",A.c([new A.w("u_offset",B.d),new A.w("u_resolution",B.d),new A.w("u_time",B.r),new A.w("u_visible",B.r)],t.o),"#version 300 es\nin vec2 a_position;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n")
A.d8(r.fr,"selectionRenderer")
q=r.fr=new A.jY(r.y,s,B.z)}return q},
gbs(){var s,r=this,q=r.fy
if(q===$){s=A.c([],t.ff)
A.d8(r.fy,"textRenderer")
q=r.fy=new A.kc(r.b,s)}return q},
K(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=3553
t.cH.a(a3)
a0.a=a3
s=a0.d
r=s.clientWidth
q=s.clientHeight
if(r!==a0.k2||q!==a0.k3){B.D.sa5(s,r)
B.D.sa2(s,q)
s=a0.e
B.D.sa5(s,r)
B.D.sa2(s,q)
a0.k2=r
a0.k3=q
s=a0.id
if(s!=null)B.f.el(a3,s)
s=a3.createTexture()
a0.id=s
B.f.R(a3,a1,s)
B.f.aJ(a3,a1,0,6408,a0.k2,a0.k3,0,6408,5121,null)
a3.texParameteri(a1,10241,9729)
a3.texParameteri(a1,10242,33071)
a3.texParameteri(a1,10243,33071)}s=a0.z
p=a0.y.e
o=Math.min(Math.max(B.c.aI(p.a*24-r/2),0),B.e.aI(2400-r))
n=Math.min(Math.max(B.c.aI(p.b*36-q/2),0),B.e.aI(1440-q))
m=s.bU(Math.abs(o-s.a))
l=s.bU(Math.abs(n-s.b))
p=s.a
if(o>p)p=s.a=p+m
else if(o<p){p-=m
s.a=p}k=s.b
if(n>k)s=s.b=k+l
else if(n<k){k-=l
s.b=k
s=k}else s=k
k=a0.r1
k.a=r
k.b=q
k.d=p
k.e=s
k.c=a2
s=a0.b
p=s.canvas
j=p.width
j.toString
p=p.height
p.toString
s.clearRect(0,0,j,p)
a3.viewport(0,0,r,q)
a3.clearColor(0,0,0,1)
a3.clear(16640)
a3.enable(3042)
a3.blendFuncSeparate(770,771,1,771)
s=a0.r
p=a0.ch
j=a0.cx
if(!s.a){B.f.aA(a3,36160,a0.k1)
B.f.cs(a3,36160,36064,a1,a0.id,0)
a3.clearColor(0,0,0,1)
a3.clear(16640)
p.K(a3,k)
j.K(a3,k)
a0.gU().K(a3,k)
p=a0.gco()
j=p.a
i=j.ar(j.e,a3)
a3.activeTexture(33984)
B.f.R(a3,a1,i)
j=t.t
p.b.a4(a3,4,3,A.bj(["u_time",k.c/1000,"u_resolution",A.c([k.a,k.b],j),"u_offset",A.c([k.d,k.e],t.n),"u_player_vis_texture",0,"u_block_size",A.c([24,36],j)],t.N,t.z))
B.f.aA(a3,36160,null)
a0.gac().r=s.b
a0.gac().f=a0.id
a0.gac().K(a3,k)}else{p.K(a3,k)
j.K(a3,k)
a0.gU().K(a3,k)}p=a0.gbh()
if(!p.a.e.F(0,p.c)||p.d)p.e7(a3)
j=t.t
h=t.n
g=t.N
f=t.z
p.b.a4(a3,4,48e3,A.bj(["u_resolution",A.c([k.a,k.b],j),"u_offset",A.c([k.d,k.e],h)],g,f))
a0.go.K(a3,k)
if(s.c){s=a0.gaO()
s.dJ(a3,k)
j=A.c([k.a,k.b],j)
h=A.c([k.d,k.e],h)
p=k.c
e=s.a
e=e.P(e.e)
d=s.c
e=e.a_(0,d.a,d.b)?1:0
s.b.a4(a3,4,6,A.bj(["u_resolution",j,"u_offset",h,"u_time",p/1000,"u_visible",e],g,f))}a0.gbs().eG(k)
a3.finish()
c=A.iY(B.c.w(a2))
s=a0.f
b=A.c(s.slice(0),A.a4(s))
B.a.sm(s,0)
for(s=b.length,a=0;a<b.length;b.length===s||(0,A.B)(b),++a)b[a].$1(c)
s=a0.c.a.b
B.c.w(s.d/24)
B.c.w(s.e/36)},
bq(a){var s,r=this.c,q=r.e
r=r.d
if(!(r<q.length))return A.b(q,r)
B.a.I(q[r].a,a)
s=a.b
s.sad(-1)
s.sae(-1)
this.gU().I(0,s)},
bF(a,b){var s=a.b,r=B.c.w(s.d/24),q=B.c.w(s.e/36),p=b.b,o=B.c.w(p.d/24),n=B.c.w(p.e/36)
s.sad(o)
s.sae(n)
p.sad(r)
p.sae(q)
if(a.x){s=this.y
s.e=new A.i(o,n)
s.bv()}if(b.x){s=this.y
s.e=new A.i(r,q)
s.bv()}},
cH(a,b){var s=a.b
s.sad(b.a)
s.sae(b.b)
if(a.x){s=this.y
s.e=b
s.bv()}},
cd(a,b,c){var s,r,q,p
if(c==null){s=this.c
r=s.e
s=s.d
if(!(s<r.length))return A.b(r,s)
q=r[s]}else q=c
B.a.l(q.a,a)
p=a.b
p.sad(b.a)
p.sae(b.b)
p.sag(0,B.aT)
s=this.gU()
p.sbj(0,1)
s.l(0,p)},
cc(a,b){return this.cd(a,b,null)},
cu(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
B.a.sm(g.gac().x,0)
g.gU().eh(0)
s=g.ch
s.b=b
s.c=!0
s=g.cx
s.c=b
s.b=!0
s=g.y
r=b.c
s.cC(r)
s.cv()
B.aw.aE(s.c,0,4000,0)
s.e=a
switch(b.d.a){case B.A:q=B.cK
break
case B.t:q=B.cA
break
default:q=B.cX
break}for(r=r.c,p=r.length,o=0;o<r.length;r.length===p||(0,A.B)(r),++o){n=r[o]
m=n.b
l=A.mx(n.f,m.a*24,m.b*36)
if(l!=null){k=l.a=g.gU()
j=k.c
j.$ti.c.a(l);++j.d
j.aQ(0,l)
k.e=!0
n.y=l}k=n.f
if(k===B.T||k===B.P){n.z=new A.fh(q,7)
i=g.db
if(i===$){h=A.oK(s)
A.d8(i,"lightingRenderer")
g.db=h
i=h}B.a.l(i.x,n)}}for(s=b.a,r=s.length,o=0;o<s.length;s.length===r||(0,A.B)(s),++o){l=s[o].b
l.f=B.aT
p=l.a
if(p!=null)p.e=!0
p=g.gU()
l.x=1
k=l.a
if(k!=null)k.e=!0
l.a=p
k=p.c
k.$ti.c.a(l);++k.d
k.aQ(0,l)
p.e=!0}}}
A.j3.prototype={
$1(a){var s,r,q
t.bd.a(a)
s=this.a.r1
r=J.at(a)
s.sey(r.h(a,0))
r=r.h(a,1)
q=this.b
q.left.toString
q=q.top
q.toString
if(typeof r!=="number")return r.V()
s.r=r-q},
$S:32}
A.a0.prototype={}
A.bC.prototype={}
A.K.prototype={}
A.fv.prototype={
H(a,b){var s,r,q=b.c,p=q.e,o=q.d+1
if(!(o<p.length))return A.b(p,o)
s=p[o]
r=A.im(s)
b.cu(r,s)
b.cd(q.a,r,s);++q.d
return new A.K(null,null,!0,!0,!1,B.h,null)}}
A.dU.prototype={
H(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.c.x,g=h.gbo(),f=h.b.h(0,B.q)
if(g==null||f.e===g.Q.b)return new A.K(j,j,!1,!0,!1,B.h,j)
q=h.a
p=q.length
o=t.mm
n=0
while(!0){if(!(n<p)){s=j
r=s
break}m=q[n]
if(m.c===B.ab){l=o.a(m.b)
if(l.a===g.Q.a){s=m
r=l
break}}++n}if(r==null)return new A.K(j,j,!1,!0,!1,B.h,j)
i=i.q()
i.toString
b.x.ap("reload_1.mp3",i)
i=r.b
k=Math.min(i,g.Q.b)
i-=k
r.b=i
if(i===0)B.a.I(q,s)
i=f.e
i.toString
f.e=k+i
return new A.K(j,j,!0,!0,!1,B.h,j)}}
A.aJ.prototype={
H(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f={},e=b.c,d=e.e,c=e.d
if(!(c<d.length))return A.b(d,c)
s=d[c]
c=h.b
r=c.q()
q=r.v(0,h.a)
p=s.c
if(!p.ct(q))return new A.K(g,g,!1,!0,!1,B.h,g)
o=p.h(0,q)
n=s.af(q)
if((o.c===B.b||A.O(A.bg(o.f)))&&n==null){if(o.f==null)return new A.K(g,g,!1,!0,!1,B.h,g)
f=e.d
if(!(f<d.length))return A.b(d,f)
m=A.ns(o,d[f])
if(m.length!==0)return new A.K(B.a.gd1(m).b,g,!1,!0,!1,B.h,g)
return new A.K(g,g,!1,!0,!1,B.h,g)}l=A.c([],t.w)
f.a=!1
if(n!=null){if(A.nt(n,c))return new A.K(new A.dq(!1,c,n),g,!1,!0,!1,B.h,g)
e=f.a=!0}else e=!1
d=b.y
d=d.P(d.e)
d.toString
k=!c.x
if(k)j=d.h(0,r)||d.h(0,q)
else j=!1
p.h(0,r)
if(o.r!=null)b.x.bn("water_footsteps_"+(B.u.D(5)+1)+".mp3",q,0.15)
if(j)i=new A.bC(A.iY(60),new A.jF(h,r,q),new A.jG(f,h,b,n,q))
else{if(e){n.toString
b.bF(n,c)}else b.cH(c,q)
i=g}c.a=0
return new A.K(g,g,!0,!0,k,l,i)}}
A.jF.prototype={
$1(a){var s=a.d,r=1-s,q=this.b,p=this.c,o=this.a.b.b
o.sW(0,q.a*24*r+p.a*24*s)
o.sX(0,q.b*36*r+p.b*36*s)},
$S:11}
A.jG.prototype={
$0(){var s,r=this,q=r.c,p=r.b.b
if(r.a.a){s=r.d
s.toString
q.bF(s,p)}else q.cH(p,r.e)},
$S:0}
A.cX.prototype={
H(a,b){return new A.K(null,null,!0,!0,!1,B.h,null)}}
A.fg.prototype={
H(a,b){var s=this.a.c
s.d-=1000;++s.c;++s.e;++s.f;++s.r
A.eC("LEVEL UP")
return new A.K(null,null,!0,!0,!1,B.h,null)}}
A.e1.prototype={
H(a,b){var s,r,q,p,o,n=b.c,m=n.e,l=n.d
if(!(l<m.length))return A.b(m,l)
s=this.b
r=m[l].c.h(0,s)
q=r.y
r.f=this.a?B.v:B.R
l=b.gU()
q.toString
l.I(0,q)
l=r.f
l.toString
p=r.b
o=A.mx(l,24*p.a,36*p.b)
if(o!=null)b.gU().l(0,o)
r.y=o
n=n.d
if(!(n<m.length))return A.b(m,n)
b.y.cD(m[n].c,s)
b.gbh().d=!0
b.x.bn("door_1.mp3",s,0.8)
return new A.K(null,null,!0,!0,!1,B.h,null)}}
A.dq.prototype={
H(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d={},c=e.b
c.a=0
d.a=null
s=e.c
r=A.qx(s,c,b)
q=e.a
p=c.c
o=s.c
if(q){p.toString
o.toString
n=d.a=p.cK(o,B.u,r)}else{p.toString
o.toString
n=d.a=p.cG(o,B.u,r)}B.a.a0(p.Q,n.d)
B.a.a0(o.Q,n.e)
m=A.c([],t.w)
p=s.q()
p.toString
l=c.q()
l.toString
if(!q){q=c.b
k=q.x
j=s.b.f
q.sbj(0,4)
i=l.bt()
h=p.bt()
g=l.bt().v(0,new A.aL((h.a-i.a)/1.5,(h.b-i.b)/1.5))
d.b=!0
f=new A.bC(B.dk,new A.iA(d,e,b,p,l,i,g),new A.iB(d,e,b,p,l,k,j))}else{q=c.x?"white":"red"
e.aR(n.c,p,l,b,q)
f=null}q=s.r
if(q!=null)q.c=c
if(!n.b)return new A.K(null,n.a,!0,!0,!1,B.h,f)
c=o.b-n.c
o.b=c
if(c<=0)B.a.l(m,new A.dw(s))
return new A.K(null,d.a.a,!0,!0,!1,m,f)},
bX(a){if(this.a){if(a)return"bullet_impact_2.mp3"
return"bullet_miss_1.mp3"}if(a)return"heavy_punch_1.mp3"
return"miss_1.mp3"},
aR(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j={}
if(a===0)return
this.c.c.toString
s=c.a*24
r=c.b*36
q=new A.fJ(B.e.k(a),s,r,e,1.25)
p=b.a*24
o=b.b*36
n=A.or(new A.aL(p-s,o-r))
m=n.a*24
n=n.b*36
l=new A.aL(m,n).v(0,new A.aL(s,r))
k=new A.aL(m*2,n*2).v(0,new A.aL(p,o))
B.a.l(d.gbs().b,q)
j.a=B.dj
A.p5(B.dl,new A.iz(j,d,q,k,l))},
k(a){return"TargetMeleeAttackEvent{"+this.b.k(0)+" -> "+this.c.k(0)+"}"}}
A.iA.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a
if(l.b&&a.d>=0.4){s=m.c
r=m.b
q=m.d
s.x.ap(r.bX(l.a.b),q)
p=l.a
o=r.b.x?"white":"red"
r.aR(p.c,q,m.e,s,o)
l.b=!1
s=r.c.b
if(l.a.b)s.sag(0,B.av)
else s.sag(0,B.c9)}l=a.d
if(l<=0.4){s=m.f
r=m.r
n=l/0.6
l=m.b.b.b
l.sW(0,A.lt(r.a,s.a,n)*24)
l.sX(0,A.lt(r.b,s.b,n)*36)}else{s=m.b.b
if(l>=0.6){l=s.b
s=m.e
l.sad(s.a)
l.sae(s.b)}else{l=s.b
s=m.r
l.sW(0,s.a*24)
l.sX(0,s.b*36)}}},
$S:11}
A.iB.prototype={
$0(){var s,r,q,p,o,n=this,m=n.a
if(m.b){s=n.c
r=n.b
q=n.d
s.x.ap(r.bX(m.a.b),q)
p=m.a
o=r.b.x?"white":"red"
r.aR(p.c,q,n.e,s,o)
m.b=!1}m=n.b
s=m.b.b
s.sbj(0,n.f)
r=n.e
s.sad(r.a)
s.sae(r.b)
m.c.b.sag(0,n.r)},
$S:0}
A.iz.prototype={
$1(a){var s,r,q,p,o,n=this
t.hU.a(a)
s=n.a
r=s.a.a+8000
s.a=new A.a7(r)
if(r>5e5){a.ef(0)
B.a.I(n.b.gbs().b,n.c)}q=B.e.N(s.a.a,1000)/300
s=n.c
r=n.d
p=1-q
o=n.e
s.b=q*r.a+p*o.a
s.c=q*r.b+p*o.b},
$S:34}
A.dw.prototype={
k(a){return"DeathEvent{"+this.a.k(0)+"}"},
H(a,b){var s,r=null,q=b.c,p=q.e,o=q.d
if(!(o<p.length))return A.b(p,o)
p=this.a
if(p.e){b.bq(p)
return new A.K(r,r,!0,!0,!1,B.h,r)}if(p.x)return new A.K(r,"You Died!",!0,!0,!1,B.h,r)
q=q.a
o=q.c
o.d+=100
s=A.c([],t.w)
if(o.d>=1000)B.a.l(s,new A.fg(q))
p.q()
p.c.toString
b.bq(p)
return new A.K(r,p.k(0)+" has died.",!1,!0,!1,s,r)}}
A.eN.prototype={
H(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=b.c,e=f.e
f=f.d
if(!(f<e.length))return A.b(e,f)
s=e[f]
for(f=b.y.c,e=this.c,r=!e,q=this.b,p=q.b,o=s.c,n=0;n<100;++n)for(m=0;m<40;++m){l=100*m+n
k=new A.i(n,m)
if(!(l<4000))return A.b(f,l)
j=f[l]
if(j===0&&e)if(o.h(0,k).f===B.v)p.j(0,k,100)
else{i=o.h(0,k)
if(!(i.c===B.b||A.O(A.bg(i.f))))p.j(0,k,80)}else if(j===1&&r)p.I(0,k)}q.eF(s,B.X)
f=this.a
e=f.q()
e.toString
k=q.cp(s,e,1,B.X)
if(k==null)return new A.K(g,"No more areas to explore",!1,!0,!1,B.h,g)
e=$.df()
r=f.q()
r.toString
r=e.bg(r,k,s,B.X)
h=r==null?g:r.b
if(h==null)return new A.K(g,"No path to that location",!1,!0,!1,B.h,g)
e=h.d
r=f.q()
r.toString
return new A.K(new A.aJ(e.V(0,r),f),g,!0,!0,!1,B.h,g)}}
A.h7.prototype={
H(a,b){var s,r,q,p,o,n,m=null,l=b.c,k=l.e,j=l.d
if(!(j<k.length))return A.b(k,j)
s=k[j]
r=A.c([],t.q)
for(j=s.c.c,q=j.length,p=!1,o=0;o<j.length;j.length===q||(0,A.B)(j),++o){n=j[o]
if(n.f===B.S){n.f=B.v
B.a.l(r,n.b)
p=!0}}if(p){for(j=r.length,q=b.x,o=0;o<r.length;r.length===j||(0,A.B)(r),++o)q.ap("door_unlock_1.mp3",r[o])
j=l.d
if(!(j<k.length))return A.b(k,j)
q=this.a
k[j].c.h(0,q).f=B.a6
l=l.d
if(!(l<k.length))return A.b(k,l)
k[l].af(q)
return new A.K(m,"A door has been unlocked",!0,!0,!1,B.h,m)}return new A.K(m,m,!1,!0,!1,B.h,m)}}
A.fI.prototype={
H(a,b){var s,r=null,q=this.b,p=q.c.x.b.h(0,B.q)
if(p==null||p.e===0)return new A.K(r,r,!1,!0,!1,B.h,r)
s=p.e
s.toString
p.e=s-1
return new A.K(new A.dT(4,this.a,q),r,!0,!0,!1,B.h,r)}}
A.dT.prototype={
H(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=b.c,e=f.e
f=f.d
if(!(f<e.length))return A.b(e,f)
s=e[f]
f=this.c
e=f.q()
e.toString
r=this.b
q=$.df().aF(e,r,s)
if(q==null)return new A.K(g,g,!0,!0,!1,B.h,g)
p=s.af(r)
o=A.c([],t.w)
if(p!=null)o.push(new A.dq(!0,f,p))
n=q.aL(0)
m=b.x.ap("pistol_1.mp3",e)
f=f.b
l=B.c.w(f.d/24)
f=B.c.w(f.e/36)
k=B.dM.h(0,t.gX.i("a_.T").a(700))
k.toString
j=new A.fi(new A.fh(k,10),l,f)
B.a.l(b.gac().x,j)
f=B.bg.h(0,t.e.i("a_.T").a(800))
f.toString
i=new A.a3(14,2,-1,-1,g)
i.r=f
h=A.lG(g,g,0,g,!0,!1,i)
b.cc(h,B.z)
i.sag(0,new A.l(0))
return new A.K(g,g,!0,!0,!1,o,new A.bC(new A.a7(B.e.w(A.iY(B.c.w(16/this.a)).a*n.length)),new A.jQ(r,e,i,m,j),new A.jR(b,h,j)))}}
A.jQ.prototype={
$1(a){var s=this,r=s.a,q=s.b,p=a.d,o=A.lt(r.a,q.a,p)*24
p=A.lt(r.b,q.b,p)*36
q=s.c
q.sW(0,o)
q.sX(0,p)
B.c.w(o)
B.c.w(p)
s.e.a.c=10*(1-a.d)},
$S:11}
A.jR.prototype={
$0(){var s=this.a
s.bq(this.b)
B.a.I(s.gac().x,this.c)},
$S:0}
A.j6.prototype={}
A.j5.prototype={
dr(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.f.R(b,f,c)
s=A.mJ(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
r=this.P(a)
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
s[h]=g}B.f.aJ(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
ar(a,b){var s,r,q=a.b*100+a.a
if(q<0||q>=4000)return null
s=this.f
r=s.h(0,a)
if(r==null){r=new A.i2(b.createTexture())
s.j(0,a,r)}if(r.b){this.dr(a,b,r.a)
r.b=!1}return r.a},
P(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.lV(p,p+4000,B.e.bG(s.byteLength,r))
return new A.ki(100,A.mJ(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
bv(){var s,r,q,p,o=this.P(this.e).c
for(s=this.c,r=o.length,q=0;q<4000;++q){p=s[q]
if(!(q<r))return A.b(o,q)
s[q]=p|o[q]}},
cv(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.b2(new A.i(s,r))
for(q=this.f,q=q.gbw(q),q=q.gA(q);q.n();)q.gp(q).b=!0},
cD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.R.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.a_(0,r,q)
o=o.c===B.b||A.O(A.oD(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.b2(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]===1)g.b2(new A.i(m,l))}s=g.P(b)
s.toString
for(p=g.f,p=p.gah(p),p=p.gA(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]===1)i.b.b=!0}},
cC(a){return this.cD(a,null)},
b2(a){var s,r,q,p=this.P(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=1
for(q=0;q<4;++q)this.dQ(new A.cW(1,-1,1),new A.jS(B.dw[q],a),o)},
dP(a,b){if(a<0||a>=b.byteLength)return
if(!(a>=0&&a<b.length))return A.b(b,a)
b[a]=1},
c_(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
b3(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===0},
dQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.r
B.a.sm(e,0)
B.a.l(e,a)
for(;s=e.length,s!==0;){if(0>=s)return A.b(e,-1)
r=e.pop()
s=r.a
q=B.c.ab(s*r.b+0.5)
p=B.c.cl(s*r.c-0.5)
for(o=s+1,n=2*s,m=q,l=null;m<=p;++m,l=j){k=b.eP(0,new A.i(s,m))
j=k.b*100+k.a
i=f.c_(j,c)
if(!i)h=m>=s*r.b&&m<=s*r.c
else h=!0
if(h)f.dP(j,c)
h=l!=null
if(h&&f.c_(l,c)&&f.b3(j,c))r.b=(2*m-1)/n
if(h&&f.b3(l,c)&&i){g=new A.cW(o,r.b,r.c)
g.c=(2*m-1)/n
B.a.l(e,g)}}if(l!=null&&f.b3(l,c))B.a.l(e,new A.cW(o,r.b,r.c))}}}
A.i2.prototype={}
A.ki.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]===1},
a_(a,b,c){var s=this.c,r=c*this.a+b
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]===1}}
A.c_.prototype={
k(a){return"Cardinal."+this.b}}
A.jS.prototype={
eP(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a){case B.aO:s=r.b
return new A.i(s.a+p,s.b-q)
case B.aP:s=r.b
return new A.i(s.a+p,s.b+q)
case B.aQ:s=r.b
return new A.i(s.a+q,s.b+p)
case B.aR:s=r.b
return new A.i(s.a-q,s.b+p)}}}
A.cW.prototype={}
A.c9.prototype={}
A.fj.prototype={
ds(a,b){var s,r,q,p=this.c,o=p.P(a).c,n=p.P(b).c
for(p=o.length,s=n.length,r=0;r<4000;++r){if(!(r<p))return A.b(o,r)
if(o[r]===1){if(!(r<s))return A.b(n,r)
q=n[r]===1}else q=!1
if(q)return!1}return!0},
K(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=3553,a1="u_player_visible_texture",a2=a4.a
if(a2!==a.y||a4.b!==a.z){a.y=a2
s=a4.b
a.z=s
r=a3.createTexture()
a.e=r
B.f.R(a3,a0,r)
B.f.aJ(a3,a0,0,6408,a2,s,0,6408,5121,null)
a3.texParameteri(a0,10241,9729)
a3.texParameteri(a0,10242,33071)
a3.texParameteri(a0,10243,33071)}B.f.aA(a3,36160,a.d)
B.f.cs(a3,36160,36064,a0,a.e,0)
a3.clearColor(0,0,0,1)
a3.clear(16640)
a2=a.c
s=a2.ar(a2.e,a3)
s.toString
a3.activeTexture(33985)
B.f.R(a3,a0,s)
for(r=a.x,q=r.length,p=a.a,o=t.t,n=t.n,m=t.N,l=t.z,k=0;k<r.length;r.length===q||(0,A.B)(r),++k){j=r[k]
i=j.gbk()
h=new A.i(j.gW(j),j.gX(j))
g=a2.ar(h,a3)
if(g==null)continue
if(a.r&&a.ds(a2.e,h))continue
a3.activeTexture(33984)
B.f.R(a3,a0,g)
f=A.c([a4.a,a4.b],o)
e=i.c
d=A.c([j.gW(j),j.gX(j)],o)
c=A.c([a4.d,a4.e],n)
b=i.b.a
p.a4(a3,4,3,A.bj(["u_resolution",f,"u_source_strength",e,"u_block_size",B.b7,"u_source_position",d,"u_offset",c,"u_source_color",A.c([(b>>>16&255)/255,(b>>>8&255)/255,(b&255)/255,0.2],n),"u_time",a4.c/1000,a1,1,"u_visible_texture",0],m,l))}B.f.aA(a3,36160,null)
a3.activeTexture(33984)
B.f.R(a3,a0,a.e)
a3.activeTexture(33985)
B.f.R(a3,a0,a.f)
a3.activeTexture(33986)
B.f.R(a3,a0,s)
a.b.a4(a3,4,3,A.bj(["u_light_texture",0,"u_game_world_texture",1,a1,2,"u_block_size",B.b7,"u_resolution",A.c([a4.a,a4.b],o),"u_offset",A.c([a4.d,a4.e],n)],m,l))}}
A.ci.prototype={
gbe(){var s=this.b
s=s==null?null:s.gbe()
return 1+(s==null?0:s)},
O(a,b){return B.c.O(this.f,t.p6.a(b).f)},
gc7(){var s,r=this.a
if(r==null)r=this
else{s=r.a
r=s==null?r:s.gc7()}return r},
dA(){var s,r,q
for(s=this,r=null;s!=null;r=s,s=q){s.b=r
q=s.a}},
aL(a){var s,r=A.c([],t.q)
for(s=this;s!=null;){B.a.l(r,s.d)
s=s.b}return r},
k(a){var s,r,q,p
for(s=this.d,r=this,q="",p="";r!=null;q=", "){p=p+q+s.k(0)
r=r.b}return p.charCodeAt(0)==0?p:p},
$iab:1}
A.aR.prototype={
k(a){return"Directions."+this.b}}
A.jM.prototype={
bg(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=A.mv(b,t.p6),a0=A.ad(t.j,t.i),a1=a4.c
a.l(0,new A.ci(a2,0,a2.ao(a3)*1.02+0))
for(s=a.$ti.c,r=a1.a,q=a1.b,p=t.W;o=a.c,n=o===0,!n;){if(n)A.R(A.aC("No element"));++a.d
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
if(k>0)a.bK(j,0)
o=l.d
i=a0.h(0,o)
if(i!=null&&i<l.e)continue
for(n=l.e,h=0;h<8;++h){g=B.at[h]
f=A.a6(o,g)
m=f.a
if(m>=0){e=f.b
m=e>=0&&m<r&&e<q}else m=!1
if(m){m=l.a
if(!J.T(m==null?b:m.d,f))m=A.m9(p.a(a1.h(0,f)),a4,a5)&&!f.F(0,a3)
else m=!0}else m=!0
if(m)continue
m=f.ao(a3)
e=this.dI(g)
if(typeof e!=="number")return A.ct(e)
e=n+e
d=new A.ci(f,e,m*1.02+e)
d.a=l
if(f.F(0,a3)){d.dA()
s=l.a
return s==null?l:s.gc7()}c=a0.h(0,f)
if(!(e>1/0))m=c!=null&&e>=c
else m=!0
if(m)continue
a0.j(0,f,e)
s.a(d);++a.d
a.aQ(0,d)}}return b},
aF(a,b,c){return this.bg(a,b,c,B.ak)},
dI(a){switch(a){case B.k:case B.n:case B.l:case B.m:return 1
case B.J:case B.I:case B.K:case B.L:return 1.4}}}
A.f_.prototype={
cp(a,b,c,d){var s,r,q,p,o,n,m,l,k=this.a,j=b.b*100+b.a
if(!(j>=0&&j<4000))return A.b(k,j)
s=k[j]*c
r=A.c([],t.q)
for(j=a.c,q=t.W,p=!1,o=0;o<8;++o){n=A.a6(b,B.at[o])
m=n.b*100+n.a
if(m<0||m>=4000)continue
if(A.m9(q.a(j.h(0,n)),a,d))continue
if(!(m>=0&&m<4000))return A.b(k,m)
l=k[m]*c
if(l>s){B.a.sm(r,0)
B.a.l(r,n)
s=l
p=!0}else if(l===s)B.a.l(r,n)}k=r.length
if(k===0||!p)return null
k=$.nH().D(k)
if(!(k>=0&&k<r.length))return A.b(r,k)
return r[k]},
bf(a,b,c){return this.cp(a,b,c,B.ak)},
eF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.a
B.aw.aE(d,0,4000,0)
for(s=this.b,s=s.gah(s),s=s.gA(s);s.n();){r=s.gp(s)
q=r.a
B.aw.j(d,q.b*100+q.a,r.b)}s=a.c
r=t.W
do for(p=!1,o=0;o<100;++o)for(n=0;n<40;++n){m=n*100+o
if(A.m9(r.a(s.h(0,new A.i(o,n))),a,b))continue
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
A.jY.prototype={
dJ(a,b){var s,r,q,p,o,n,m,l=this,k="a_position",j=B.c.ab((b.f+b.d)/24),i=B.c.ab((b.r+b.e)/36),h=new A.i(j,i)
if(h.F(0,l.c)||j<0||j>=100||i<0||i>=40)return
l.c=h
s=l.b
r=s.a6(k,t.A)
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
s.a9(a,k,r)}}
A.V.prototype={}
A.w.prototype={}
A.cn.prototype={
k(a){return"UniformKind."+this.b}}
A.hh.prototype={}
A.i7.prototype={}
A.jd.prototype={
J(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.nd(a,i.a,35633),f=A.nd(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.T(a.getProgramParameter(e,35714),!0)){A.eC(J.cw(a.getProgramInfoLog(e)))
A.R(A.aC("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.f.ck(a,A.aG(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.B)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.i7(a.getUniformLocation(A.aG(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.B)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.aG(i.e,h),n)
k=a.createBuffer()
B.f.cg(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.hh(k,j))}},
a6(a,b){A.qh(b,t.jv,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
a9(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.d(A.aC("WARNING, NO ATTRIBUTE "+b))
B.f.cg(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
a4(a,b,c,d){var s,r,q,p,o,n
t.ea.a(d)
B.f.eW(a,A.aG(this.e,"_program"))
B.f.ck(a,A.aG(this.f,"_vertexArrayObject"))
for(s=d.gah(d),s=s.gA(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.ah(p)
n=r.h(0,p)
if(n==null)A.R(A.aC("WARNING, NO UNIFORM "+p))
switch(n.b.b){case B.r:B.f.eR(a,n.a,A.aW(o))
break
case B.d:q=J.at(o)
B.f.eT(a,n.a,A.aW(q.h(o,0)),A.aW(q.h(o,1)))
break
case B.e6:q=J.at(o)
B.f.eU(a,n.a,A.aW(q.h(o,0)),A.aW(q.h(o,1)),A.aW(q.h(o,2)))
break
case B.aE:q=J.at(o)
B.f.eV(a,n.a,A.aW(q.h(o,0)),A.aW(q.h(o,1)),A.aW(q.h(o,2)),A.aW(q.h(o,3)))
break
case B.o:B.f.eS(a,n.a,A.I(o))
break}}a.drawArrays(b,0,c)}}
A.jU.prototype={
sey(a){this.f=A.na(a)}}
A.jV.prototype={}
A.fw.prototype={}
A.fQ.prototype={
aG(){var s=0,r=A.bv(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aG=A.bw(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:e=A.c([],t.iw)
for(p=q.b,o=t.cU,n=t.ou,m=t.oV,l=t.Z,k=t.L,j=0;j<47;++j){i=p[j]
h=new XMLHttpRequest()
g=new A.H($.D,o)
B.dn.eC(h,"get","sounds/"+i)
h.responseType="arraybuffer"
f=m.a(new A.k_(q,h,i,new A.aO(g,n)))
l.a(null)
A.bS(h,"readystatechange",f,!1,k)
h.send()
B.a.l(e,g)}s=2
return A.a5(A.oz(e,t.H),$async$aG)
case 2:return A.br(null,r)}})
return A.bs($async$aG,r)},
bn(a,b,c){var s,r,q,p=this.c,o=A.oA(p),n=this.a.h(0,a)
if(n==null)return new A.fw()
s=p.createBufferSource()
r=B.u.S()
q=o.gain
q.toString
B.bX.saM(q,0.1*c+r/20)
p=p.destination
p.toString
B.dm.bR(o,p,0,0)
B.aK.bR(s,o,0,0)
B.aK.see(s,n)
s.start()
return new A.fw()},
ap(a,b){return this.bn(a,b,2)},
$ip2:1}
A.k_.prototype={
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
return A.a5(B.bW.ek(n.c,t.lo.a(A.pC(m.response))),$async$$1)
case 7:l.j(0,k,c)
p.aB(0)
s=5
break
case 6:p.aC(new A.hs("Failed to load "+o))
case 5:case 3:return A.br(null,r)}})
return A.bs($async$$1,r)},
$S:35}
A.lc.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.f.R(q,r,p)
B.f.eN(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.a1(0,p)},
$S:14}
A.k0.prototype={
da(a,b){A.qA(a,"CursesTransparent_24x36.png").cO(new A.k1(this),t.P)},
l(a,b){b.a=this
this.c.l(0,b)
this.e=!0},
I(a,b){this.c.I(0,b)
b.a=null
this.e=!0},
eh(a){var s,r,q,p
for(s=this.c,r=s.$ti,q=new A.cr(s,s.d,r.i("cr<1>")),r=r.c;q.n();){if(q.d<0)p=A.R(A.aC("No element"))
else{p=q.c
if(p==null)p=r.a(null)}p.a=null}++s.d
s.sb7(B.dB)
s.c=0
this.e=!0},
e6(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="a_position",b5="a_texcoord",b6="a_bg_color",b7=b3.c,b8=b7.c
if(b8>1e4){A.eC("WARNING: TOO MANY SPRITES "+b8)
if(b3.f){b3.f=!1
A.eC(b7.aL(0))}b8=1e4}s=b3.a
r=t.jv
q=b8*12
p=A.jH(s.a6(b4,r).buffer,0,q)
o=A.jH(s.a6(b5,r).buffer,0,q)
q=b8*24
n=A.jH(s.a6("a_color",r).buffer,0,q)
m=A.jH(s.a6(b6,r).buffer,0,q)
l=b7.aL(0)
for(b7=m.length,r=n.length,q=o.length,k=p.length,j=0;j<b8;++j){if(!(j<l.length))return A.b(l,j)
i=l[j]
h=i.b/16
g=i.c/16
f=j*12
if(!(f<q))return A.b(o,f)
o[f]=h
e=f+1
if(!(e<q))return A.b(o,e)
o[e]=g
d=f+2
c=h+0.0625
if(!(d<q))return A.b(o,d)
o[d]=c
b=f+3
if(!(b<q))return A.b(o,b)
o[b]=g
a=f+4
if(!(a<q))return A.b(o,a)
o[a]=h
a0=f+5
a1=g+0.0625
if(!(a0<q))return A.b(o,a0)
o[a0]=a1
a2=f+6
if(!(a2<q))return A.b(o,a2)
o[a2]=c
a3=f+7
if(!(a3<q))return A.b(o,a3)
o[a3]=a1
a4=f+8
if(!(a4<q))return A.b(o,a4)
o[a4]=c
c=f+9
if(!(c<q))return A.b(o,c)
o[c]=g
a5=f+10
if(!(a5<q))return A.b(o,a5)
o[a5]=h
a6=f+11
if(!(a6<q))return A.b(o,a6)
o[a6]=a1
a7=i.d
a8=i.e
if(!(f<k))return A.b(p,f)
p[f]=a7
if(!(e<k))return A.b(p,e)
p[e]=a8
e=a7+24
if(!(d<k))return A.b(p,d)
p[d]=e
if(!(b<k))return A.b(p,b)
p[b]=a8
if(!(a<k))return A.b(p,a)
p[a]=a7
a=a8+36
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
a9=j*24
b0=i.r
b1=i.f
if(b0==null)B.bk.aE(n,a9,a9+24,0)
else for(e=b0.a,d=(e>>>16&255)/255,c=(e>>>8&255)/255,b=(e&255)/255,e=(e>>>24&255)/255,b2=0;b2<24;b2+=4){a=a9+b2
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
n[a]=e}if(b1==null)B.bk.aE(m,a9,a9+24,0)
else for(e=b1.a,d=(e>>>16&255)/255,c=(e>>>8&255)/255,b=(e&255)/255,e=(e>>>24&255)/255,b2=0;b2<24;b2+=4){a=a9+b2
if(!(a<b7))return A.b(m,a)
m[a]=d
a0=a+1
if(!(a0<b7))return A.b(m,a0)
m[a0]=c
a0=a+2
if(!(a0<b7))return A.b(m,a0)
m[a0]=b
a+=3
if(!(a<b7))return A.b(m,a)
m[a]=e}}s.a9(b9,b4,p)
s.a9(b9,b5,o)
s.a9(b9,"a_color",n)
s.a9(b9,b6,m)},
K(a,b){var s,r=this
if(r.b==null||r.c.c===0)return
if(r.e){r.e6(a)
r.e=!1}s=r.d
s.ar(s.e,a)
a.activeTexture(33984)
B.f.R(a,3553,r.b)
r.a.a4(a,4,r.c.c*6,A.bj(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.k1.prototype={
$1(a){this.a.b=t.lJ.a(a)},
$S:36}
A.a3.prototype={
sW(a,b){var s=this.a
if(s!=null)s.e=!0
this.d=b},
sX(a,b){var s=this.a
if(s!=null)s.e=!0
this.e=b},
sad(a){var s=this.a
if(s!=null)s.e=!0
this.d=a*24},
sae(a){var s=this.a
if(s!=null)s.e=!0
this.e=a*36},
sag(a,b){var s
this.f=b
s=this.a
if(s!=null)s.e=!0},
sbj(a,b){var s
this.x=b
s=this.a
if(s!=null)s.e=!0},
k(a){return"Sprite("+this.b+", "+this.c+")"}}
A.jx.prototype={}
A.kb.prototype={
dZ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(this.b==null)return
s=this.a
r=s.a6("a_color",t.A)
q=this.b
switch(q.d.a){case B.G:case B.w:case B.ah:case B.ag:p=$.nI()
break
case B.x:p=$.md()
break
case B.t:p=$.nK()
break
case B.A:p=$.nJ()
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
f=!(f.c===B.b||A.O(A.bg(f.f)))}else f=!1
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
r[f]=1}}}s.a9(a,"a_color",r)},
K(a,b){var s=this
if(s.c){s.dZ(a)
s.c=!1}s.a.a4(a,4,48e3,A.bj(["u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.kc.prototype={
eG(a){var s,r,q,p,o
for(s=this.b,r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.B)(s),++p){o=s[p]
q.font=A.z(24*o.e)+'px "Press Start 2P"'
B.c7.sep(q,o.d)
q.fillText(o.a,o.b-a.d,o.c-a.e)}}}
A.fJ.prototype={}
A.j4.prototype={
e7(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.P(a2.e),a4=a1.b,a5=a4.a6("a_color",t.A)
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
a4.a9(a6,"a_color",a5)}}
A.hc.prototype={}
A.l1.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:15}
A.fU.prototype={
af(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.e){m=n.b
l=B.c.w(m.d/24)
if(l===q){m=B.c.w(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.iW.prototype={
an(a9){var s=0,r=A.bv(t.l7),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$an=A.bw(function(b0,b1){if(b0===1)return A.bq(b1,r)
while(true)switch(s){case 0:a8=A.c([],t.fF)
for(o=p.a,n=p.b,m=p.e,l=0;l<11;++l){k=A.qg(o.cR(n[l]))
B.a.l(a8,k)
j=m[l]
for(i=j.length,h=k.a,g=0;g<j.length;j.length===i||(0,A.B)(j),++g){f=A.qo(j[g])
e=A.qD(k,f)
d=f.b
c=e.a
b=d.a
a=b==null
if(!a)b.e=!0
d.d=c*24
c=e.b
if(!a)b.e=!0
d.e=c*36
B.a.l(h,f)}}s=3
return A.a5(null,$async$an)
case 3:o=t.j,l=0
case 4:if(!(l<a8.length-1)){s=6
break}a0=A.im(a8[l])
if(!(l<a8.length)){q=A.b(a8,l)
s=1
break}k=a8[l]
A.ip("selecting for "+l)
a1=A.jr(o)
n=k.c
case 7:if(!!0){s=8
break}if(!!0){a2=B.z
s=8
break}s=10
return A.a5(null,$async$an)
case 10:m=$.dg()
a3=A.ne(m,$.nY(),o)
if(a1.G(0,a3)){s=9
break}i=n.h(0,a3)
if(i.c===B.b||A.O(A.bg(i.f))||!p.dl(n.h(0,a3).f)){a1.l(0,a3)
s=9
break}if(a3.ao(a0)<20){a1.l(0,a3)
s=9
break}a4=$.df().bg(a0,a3,k,B.aS)
if(a4==null){a1.l(0,a3)
s=9
break}i=a4.b
i=i==null?null:i.gbe()
a5=(1+(i==null?0:i))/140
A.ip("Rolling at "+A.z(a5)+" in "+l)
if(m.S()<=a5){a2=a3
s=8
break}case 9:s=7
break
case 8:n.h(0,a2).f=B.Q
case 5:++l
s=4
break
case 6:a6=A.lN(B.U)
a6.e=9
a7=A.lN(new A.di(B.aG,50))
o=a9.c.x
o.eo(a6,B.q)
B.a.l(o.a,a7)
q=new A.hc(a9,a8)
s=1
break
case 1:return A.br(q,r)}})
return A.bs($async$an,r)},
dD(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.d,r=t.r,q=this.e,p=this.b,o=0;o<11;++o){n=q[o]
m=p[o]
l=$.nL()
k=A.a4(l)
j=k.i("aF<1>")
i=A.mG(new A.aF(l,k.i("E(1)").a(new A.iX(m.a)),j),!0,j.i("j.E"))
for(h=0;h<s[o];){g=A.ne($.dg(),i,r)
B.a.l(n,g)
h+=g.d}}},
dB(){var s,r,q,p,o,n,m,l,k,j,i=this,h=new A.c0(1,1,1,0,0,0,0,new A.cI(A.c([],t.I),A.ad(t.b,t.O)),A.mn(),A.c([],t.Q),A.c([],t.d),new A.cJ(""))
for(s=i.f,r=i.c,q=i.e,p=0;p<11;++p){o=q[p]
for(n=0,m=0;m<o.length;++m){l=i.dC(o[m])
k=l.a
for(j=l.x.b.h(0,B.q)!=null;k>0;){n+=(j?l.cK(h,$.dg(),!0):l.cG(h,$.dg(),!0)).c
k-=r[p]}}B.a.j(s,p,n)}},
dC(a){var s,r,q,p,o,n=this.r
if(n.h(0,a)!=null){n=n.h(0,a)
n.toString
return n}s=a.d
r=A.c([],t.I)
q=A.mF(B.au,t.b,t.O)
p=new A.c0(s,s,1,0,0,0,0,new A.cI(r,q),a.c,A.c([],t.Q),A.c([],t.d),new A.cJ(a.a))
for(s=J.aP(a.r.$0());s.n();){o=s.gp(s)
switch(o.gbE()){case B.ax:q.h(0,B.M)
q.j(0,B.M,o)
break
case B.ay:q.h(0,B.q)
q.j(0,B.q,o)
break
case B.az:q.h(0,B.N)
q.j(0,B.N,o)
break
default:B.a.l(r,o)}}n.j(0,a,p)
return p},
dl(a){switch(a){case null:case B.E:return!0
default:return!1}}}
A.iX.prototype={
$1(a){return B.a.G(t.r.a(a).x,this.a)},
$S:38}
A.eR.prototype={
bC(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.Y(a,a0,A.b5(a*a0,B.i,!1,t.ns),t.ba)
c.a=b
s=new A.iN(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.v()
if(typeof m!=="number")return A.ct(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.ct(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.ct(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.ct(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.ct(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.ct(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.ct(f)
e=n+m+k+i+h+g+l+f
if(J.T(s.$2(q,o),1))if(e<4)a1.E(0,B.i,q,o)
else a1.E(0,B.b,q,o)
else if(e>5)a1.E(0,B.b,q,o)
else a1.E(0,B.i,q,o)}d=c.a
c.a=a1}}}
A.iN.prototype={
$2(a,b){return J.T(this.a.a.a_(0,a,b),B.b)?0:1},
$S:39}
A.jb.prototype={
bu(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.cM.a(b0)
s=t.q
r=A.c([],s)
q=new A.jc(a9)
for(p=J.aP(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.cQ()
if(n>=1)B.a.l(r,o)}if(r.length===0)return
m=A.c([],t.oe)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.B)(r),++j){i=r[j]
h=A.c([],k)
g=i.a
f=i.b
if(o.h(0,new A.i(g+1,f))===B.b)B.a.l(h,B.l)
if(o.h(0,new A.i(g+-1,f))===B.b)B.a.l(h,B.n)
if(o.h(0,new A.i(g,f+1))===B.b)B.a.l(h,B.m)
if(o.h(0,new A.i(g,f+-1))===B.b)B.a.l(h,B.k)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.B)(h),++e){d=h[e]
c=A.a6(i,d)
b=A.c([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.b)break
a2=A.ou(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.a6(a,a2[0]))!==B.i){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.a6(a,a2[1]))===B.i}else a1=!0
if(a1)break
a=A.a6(a,d)
B.a.l(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.i&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.a6(a,A.ov(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.l(m,new A.e2(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.ad(t.v,t.fH)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.B)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.G(l,n))continue
if(a4.aD(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.j(0,n,a5)}else a4.j(0,n,a5)}for(s=a4.gbw(a4),s=s.gA(s),n=this.a,l=a9.e,k=a8.b;s.n();){g=s.gp(s)
f=g.d
a0=p.h(0,a8)
a0.toString
B.a.l(a0,f)
a0=p.h(0,f)
a0.toString
B.a.l(a0,a8)
for(g=g.c,a0=g.length,j=0;a1=g.length,j<a1;g.length===a0||(0,A.B)(g),++j)o.j(0,g[j],B.i)
a0=n.D(a1)
if(!(a0>=0&&a0<g.length))return A.b(g,a0)
a7=g[a0]
l.j(0,a7,B.V)
B.a.l(k,a7)
B.a.l(f.b,a7)}for(s=a4.gbw(a4),s=s.gA(s);s.n();)this.bu(s.gp(s).d,a9,b0,b1)}}
A.jc.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.v(0,new A.i(1,0)))===B.b?1:0
if(s.h(0,a.v(0,new A.i(-1,0)))===B.b)++r
if(s.h(0,a.v(0,new A.i(0,-1)))===B.b)++r
return s.h(0,a.v(0,new A.i(1,1)))===B.b?r+1:r},
$S:60}
A.iK.prototype={
cT(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.E(0,o.S()>0.45?B.i:B.b,n,m)
p.E(0,B.aA,n,m)}new A.eR(a7).bC(3)
for(p=q-1,l=0;l<r;++l){s.E(0,B.b,l,0)
s.E(0,B.b,l,p)}for(o=r-1,k=0;k<q;++k){s.E(0,B.b,0,k)
s.E(0,B.b,o,k)}j=new A.iL(a7)
i=new A.iM(a7)
for(l=1;l<o;l=g)for(h=l-1,g=l+1,k=1;k<p;++k){if(!j.$2(l,k))continue
f=i.$2(g,k)
e=i.$2(h,k)
d=k+1
c=i.$2(l,d)
b=k-1
a=i.$2(l,b)
if(f&&e&&c&&a){s.E(0,B.b,l,k)
continue}if(j.$2(h,d)&&c&&e){s.E(0,B.b,l,k)
continue}if(j.$2(g,d)&&c&&f){s.E(0,B.b,l,k)
continue}if(j.$2(g,b)&&a&&f){s.E(0,B.b,l,k)
continue}if(j.$2(h,b)&&a&&e){s.E(0,B.b,l,k)
continue}}p=t.j
o=A.jr(p)
a0=new A.f5(a7,A.c([],t.do),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.i(l,k)
if(o.G(0,a1)||s.h(0,a1)===B.b)continue
a0.cr(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.B)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gA(a3);d.n();)s.j(0,d.gp(d),B.b)
else B.a.l(o,new A.am(a3,A.c([],h),A.c([],h),A.j1(a3)))}a4=A.ad(p,t.v)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.c,a2=0;b=o.length,a2<b;o.length===r||(0,A.B)(o),++a2){a3=o[a2]
B.a.l(p,a3)
h.j(0,a3,A.c([],d))
for(b=J.aP(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.B)(o),++a2){a3=o[a2]
r=a3.a
p=J.at(r)
if(p.gm(r)>a6){a6=p.gm(r)
a5=a3}}this.bu(a5,a7,a4,q)
for(r=q.cI(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.B)(r),++a2){a3=r[a2]
B.a.I(o,a3)
for(p=J.aP(a3.a);p.n();)s.j(0,p.gp(p),B.b)}A.nz(o,a7)}}
A.iL.prototype={
$2(a,b){return J.T(this.a.b.a_(0,a,b),B.i)},
$S:16}
A.iM.prototype={
$2(a,b){return J.T(this.a.b.a_(0,a,b),B.b)},
$S:16}
A.b2.prototype={}
A.hb.prototype={}
A.dl.prototype={}
A.dS.prototype={
a8(a,b){this.$ti.c.a(a)
return Math.min(B.aj.a8(a,b),B.bY.a8(a,b)+B.bC.a8(a,b))}}
A.eS.prototype={
a8(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
s=A.lu(a,B.k,b)
r=A.lu(a,B.m,b)
q=A.lu(a,B.l,b)
p=A.lu(a,B.n,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.eH.prototype={
a8(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
if(A.cu(a,B.k,b)+A.cu(a,B.m,b)+A.cu(a,B.l,b)+A.cu(a,B.n,b)===1)return 1
return 1/0}}
A.eX.prototype={
a8(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
if(A.cu(a,B.k,b)+A.cu(a,B.m,b)+A.cu(a,B.l,b)+A.cu(a,B.n,b)===2)return 1
return 1/0}}
A.dh.prototype={
a8(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
s=A.a6(a,B.k)
r=A.a6(a,B.m)
q=A.a6(a,B.l)
p=A.a6(a,B.n)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.e4.prototype={
eA(a,b){return this.b.$2(a,b)}}
A.lm.prototype={
$2(a,b){b.e.j(0,a,B.aD)},
$S:1}
A.li.prototype={
$2(a,b){b.e.j(0,a,B.bu)},
$S:1}
A.lk.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.F)s.j(0,a,B.aB)
else s.j(0,a,B.aC)},
$S:1}
A.lh.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.F)s.j(0,a,B.aB)
else s.j(0,a,B.aC)},
$S:1}
A.lj.prototype={
$2(a,b){b.e.j(0,a,B.ae)},
$S:1}
A.ll.prototype={
$2(a,b){b.e.j(0,a,B.bv)
b.f.j(0,a,B.dH)},
$S:1}
A.lg.prototype={
$2(a,b){b.e.j(0,a,B.af)},
$S:1}
A.ls.prototype={
$2(a,b){var s=t.v
s.a(a)
s.a(b)
return J.aj(a.a)-J.aj(b.a)},
$S:43}
A.dC.prototype={}
A.iF.prototype={
cR(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=4000,c=new A.Y(100,40,A.b5(d,B.i,!1,t.ns),t.ba),b=A.b5(d,0,!1,t.i),a=A.b5(d,B.aA,!1,t.dt),a0=new A.Y(100,40,A.b5(d,B.p,!1,t.dy),t.eN),a1=t.c,a2=new A.dC(a3,c,new A.Y(100,40,b,t.de),new A.Y(100,40,a,t.f5),a0,new A.Y(100,40,A.b5(d,B.be,!1,t.gM),t.eT),new A.Y(100,40,A.b5(d,null,!1,t.O),t.oQ),new A.j0(A.c([],a1),A.ad(t.v,t.mw)),A.c([],a1))
if(a3.b)this.em(a2)
b=a3.a
switch(b){case B.w:case B.x:new A.iK(B.u).cT(a2)
break
case B.A:case B.t:new A.jX(A.jr(t.j),B.u).cW(a2)
break
case B.ah:case B.G:case B.ag:new A.k8(B.u).cU(a2)
break}s=new Float32Array(4000)
new A.jN().cV(s,100,40)
r=new A.Y(100,40,A.lS(d,new A.iH(),t.W),t.R)
for(q=0;q<100;++q)for(a=q!==0,a1=q!==99,p=0;p<40;++p)if(!a||!a1||p===0||p===39){c.E(0,B.b,q,p)
a0.E(0,B.p,q,p)}this.b.cS(a2.y,a2,a3.c)
for(a=a2.c,a1=this.a,o=a2.d,n=a2.r,b=b!==B.ag,m=a2.f,q=0;q<100;++q)for(p=0;p<40;++p){l=J.T(c.a_(0,q,p),B.i)
k=c.a_(0,q,p)
k.toString
j=new A.i(q,p)
a1.S()
i=r.h(0,j)
h=o.h(0,j)
g=a0.h(0,j)
i.b=j
i.c=k
i.seM(o.h(0,j))
k=p*100+q
if(!(k<4000))return A.b(s,k)
f=s[k]
e=n.a_(0,q,p)
if(J.T(a.h(0,j),1))i.r=B.du
else if(g!==B.p)switch(g){case B.V:if(m.h(0,j)===B.bd)i.f=B.S
else i.f=B.v
break
case B.aC:i.f=B.T
break
case B.p:break
case B.bu:i.f=B.a9
break
case B.aD:i.f=B.a8
break
case B.e4:i.f=B.E
break
case B.ae:i.f=B.a7
if(e!=null)B.a.l(i.e,e)
break
case B.af:i.f=B.a5
break
case B.bv:i.f=B.O
break
case B.bw:i.f=B.a4
break
case B.aB:i.f=B.P
break}else if(l&&f<0.42&&h!==B.F&&b)i.f=B.E
if(e!=null)B.a.l(i.e,e)}return new A.jv(r,a3)},
em(a){var s,r,q=this.a,p=a.b,o=p.b,n=q.D(o-1)+1,m=n>o/2?-1:1,l=new A.iG(a)
for(p=p.a,s=n,r=0;r<p;++r){l.$1(new A.i(r,s))
l.$1(new A.i(r,s+1))
l.$1(new A.i(r,s-1))
s+=q.ez()?m:0}}}
A.iH.prototype={
$1(a){var s=A.c([],t.I)
return new A.bN(B.z,B.i,s)},
$S:15}
A.iG.prototype={
$1(a){var s=this.a,r=s.b
if(r.ct(a)){r.j(0,a,B.i)
s.c.j(0,a,1)}},
$S:44}
A.e2.prototype={
gm(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.j0.prototype={
cI(){var s,r,q,p,o,n=A.c([],t.c)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.B)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.l(n,o)}return n}}
A.am.prototype={
k(a){return"Room{"+J.aj(this.a)+"; "+this.d.k(0)+"}"}}
A.f5.prototype={
cr(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.c([a],k),i=A.c([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.G(0,o))continue
q.l(0,o)
B.a.l(i,o)
for(n=0;n<8;++n){m=A.a6(o,B.at[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.G(0,m)&&k.h(0,m)===B.i)B.a.l(j,m)}}B.a.l(this.b,i)}}
A.fc.prototype={
cf(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.U)s=B.ar
else if(a instanceof A.X)s=B.aq
else s=a instanceof A.aq?B.aa:B.as
B.a.l(r.a,a)
B.a.l(r.b,s)
B.a.l(r.c,b)
r.d+=b},
ce(a){return this.cf(a,10)},
eD(a){var s,r,q,p={},o=p.a=0,n=A.lS(this.c.length,new A.jk(p,this),t.i),m=a.S()
for(s=n.length,r=m>-1;o<s;++o){q=n[o]
if(r&&m<=q){s=this.a
if(!(o<s.length))return A.b(s,o)
return A.lN(s[o])}}throw A.d(A.aC(""))},
d_(a){var s,r,q=B.a.ew(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
cZ(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p===0)return
B.a.j(r,q,p-2)
this.d-=2}}}
A.jk.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.b(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:46}
A.jI.prototype={}
A.jf.prototype={
cS(a,b,c){var s,r,q
t.mw.a(a)
s=new A.fc(A.c([],t.hf),A.c([],t.lB),A.c([],t.t))
r=s.geb()
new A.aF(B.dE,t.ei.a(new A.jg()),t.kL).C(0,r)
new A.aF(B.dA,t.eU.a(new A.jh()),t.eo).C(0,r)
new A.aF(B.dx,t.hZ.a(new A.ji()),t.au).C(0,r)
new A.aF(B.dv,t.g9.a(new A.jj()),t.b1).C(0,r)
s.ce(B.aN)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.B)(a),++q)this.du(s,a[q],b)},
du(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.at(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.z
break}r=j.length
if(r!==0){r=l.D(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.D(k.gm(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.ae||q===B.p
else r=!1
if(r)break;++i}if(s.F(0,B.z))return
p=a.eD(l)
n=p.b
if(!J.T(n,B.aN)){a.d_(n)
a.cZ(p.c)
o.j(0,s,p)}}}
A.jg.prototype={
$1(a){return t.bB.a(a).b<=1000},
$S:47}
A.jh.prototype={
$1(a){return t.li.a(a).f<=1000},
$S:48}
A.ji.prototype={
$1(a){return t.kB.a(a).r<=1000},
$S:49}
A.jj.prototype={
$1(a){return t.lE.a(a).c<=1000},
$S:50}
A.jN.prototype={
a7(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
cV(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
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
o=$.nW()
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
A.bI.prototype={
k(a){return"RuinOrientation."+this.b}}
A.dX.prototype={
k(a){return"RoomSizeKind."+this.b}}
A.jX.prototype={
cW(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.D(5)
if(!(a3>=0&&a3<5))return A.b(B.bc,a3)
s=B.bc[a3]
r=a1.bD(B.bo)
q=a1.dH(s)
p=A.ow(a1.cn(a4,r,new A.i(B.c.w(Math.max(1,q.a-r.a/2)),B.c.w(Math.max(1,q.b-A.cj(r)/2)))))
a3=a4.y
B.a.l(a3,p)
for(o=t.q,n=0;n<2000;){m=new A.i(a2.D(98)+1,a2.D(38)+1)
l=[B.ad,B.ad,B.ad,B.bn]
k=a2.D(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a1.bD(l[k])
if(!a1.eI(a4,r,m)){l=a1.cn(a4,r,m)
B.a.l(a3,new A.am(l,A.c([],o),A.c([],o),A.j1(l)))}else ++n}for(a2=a1.b,o=a4.d,l=a4.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.i(j,i)
o.E(0,B.F,j,i)
if(!a2.G(0,h))l.j(0,h,B.b)}g=A.ad(t.j,t.v)
for(a2=a3.length,k=a4.x,f=k.a,e=k.b,d=t.c,c=0;c<a3.length;a3.length===a2||(0,A.B)(a3),++c){b=a3[c]
B.a.l(f,b)
e.j(0,b,A.c([],d))
for(a=J.aP(b.a);a.n();)g.j(0,a.gp(a),b)}a1.bu(p,a4,g,k)
for(a2=k.cI(),k=a2.length,c=0;c<a2.length;a2.length===k||(0,A.B)(a2),++c){b=a2[c]
B.a.I(a3,b)
for(f=J.aP(b.a);f.n();)l.j(0,f.gp(f),B.b)}A.nz(a3,a4)
for(a2=o.c,a0=0;a0<4000;++a0)B.a.j(a2,a0,B.F)},
bD(a){var s
switch(a){case B.ad:s=this.a
return new A.dW(s.D(5)+5,s.D(5)+5)
case B.bn:s=this.a
return new A.dW(s.D(10)+9,s.D(10)+9)
case B.bo:s=this.a
return new A.dW(s.D(10)+20,s.D(10)+20)}},
dH(a){switch(a){case B.bp:return new A.i(50,10)
case B.bq:return new A.i(50,30)
case B.br:return new A.i(75,20)
case B.bs:return new A.i(25,20)
case B.bt:return new A.i(50,20)}},
cn(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.c([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.i(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.l(0,d)
r.j(0,d,f?B.b:B.i)
if(!f)B.a.l(a,d)}return a},
eI(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.i(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.b||n.G(0,i))return!0}return!1}}
A.dW.prototype={}
A.k8.prototype={
dF(a){var s,r,q=a.a.a===B.G?B.aA:B.e3
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
cU(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.dF(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.S()>0.6)r.j(0,new A.i(q,p),B.b)
new A.eR(b8).bC(10)
o=A.jr(t.j)
n=new A.f5(b8,A.c([],t.do),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.i(k,j)
if(o.G(0,i)||r.h(0,i)===B.b)continue
n.cr(i)}o=n.b
B.a.aP(o,new A.k9())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.B)(h),++f)r.j(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.j(e,q,B.bw)
B.a.j(o,q,B.i)}$label0$1:for(o=b8.y,e=t.q,d=b8.d,c=0;c<3;){b=s.D(3)+5
a=s.D(3)+5
q=s.D(100-b)
p=s.D(40-a)
for(a0=q-1,a1=q+b,a2=a1+1,a3=p-1,a4=p+a,a5=a4+1;a0<a2;++a0)for(a6=a0>=0,a7=a0<m,a8=a3;a8<a5;++a8){i=new A.i(a0,a8)
if(!(a6&&a8>=0&&a7&&a8<l))continue $label0$1
if(g.h(0,i)!==B.p||r.h(0,i)!==B.i)continue $label0$1}a9=A.c([],e)
b0=A.c([],e)
for(a2=a1-1,a5=a4-1,a0=q;a0<a1;++a0)for(a6=a0-q!==0,a7=a0!==a2,a3=p;a3<a4;++a3){i=new A.i(a0,a3)
if(!a6||!a7||a3-p===0||a3===a5){r.j(0,i,B.b)
B.a.l(a9,i)}else B.a.l(b0,i)
d.j(0,i,B.F)}b1=new A.ka(b8)
B.a.d0(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.z
break}b3=a9[f]
b4=A.a6(b3,B.k)
b5=A.a6(b3,B.m)
b6=A.a6(b3,B.n)
b7=A.a6(b3,B.l)
if(A.O(b1.$1(b4))&&A.O(b1.$1(b5))){b2=b3
break}if(A.O(b1.$1(b6))&&A.O(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.B)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.i)
g.j(0,b2,B.V)
B.a.l(o,new A.am(b0,A.c([],e),A.c([],e),A.j1(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.B)(o),++f)A.eD(o[f],$.lF(),b8)}}
A.k9.prototype={
$2(a,b){var s=t.i8
s.a(a)
return J.aj(s.a(b))-J.aj(a)},
$S:51}
A.ka.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.i&&s.e.h(0,a)===B.p},
$S:52}
A.kj.prototype={
dc(a){var s=t.jV.a(new A.kk(this))
t.Z.a(null)
A.bS(a,"keydown",s,!1,t.mT)
A.bS(a,"mousemove",t.b9.a(new A.kl(this)),!1,t.V)}}
A.kk.prototype={
$1(a){var s
t.mT.a(a)
s=$.pH.h(0,a.key)
if(s!=null){a.preventDefault()
this.a.a.l(0,s)}else A.eC(":"+A.z(a.key)+":")},
$S:53}
A.kl.prototype={
$1(a){var s,r
t.V.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
this.a.b.l(0,A.c([s,r],t.n))},
$S:5}
A.a1.prototype={
k(a){return"InputCommand."+this.b}}
A.it.prototype={
J(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="base",f="checkbox",e="click"
t.aW.a(a)
s=document
h.b=t.mX.a(s.querySelector("#action_bar"))
for(r=h.c,q=t.eX,p=q.i("~(1)?"),o=t.Z,q=q.c,n=0;n<3;++n){m=r[n]
l=s.createElement("button")
l.innerText=m
k=p.a(new A.iu(h))
o.a(null)
A.bS(l,e,k,!1,q)
A.aG(h.b,g).appendChild(l)}j=A.mw(f)
B.b5.scm(j,!1)
r=p.a(new A.iv(a,j))
o.a(null)
A.bS(j,e,r,!1,q)
A.aG(h.b,g).appendChild(s.createTextNode("Toggle Low Graphics"))
A.aG(h.b,g).appendChild(j)
i=A.mw(f)
B.b5.scm(i,!1)
A.bS(i,e,p.a(new A.iw(a,i)),!1,q)
A.aG(h.b,g).appendChild(s.createTextNode("Toggle Light Culling"))
A.aG(h.b,g).appendChild(i)}}
A.iu.prototype={
$1(a){var s,r
t.V.a(a)
s=this.a.a
r=A.aG(s.a,"_modal").style
r.display="none"
s=A.aG(s.a,"_modal").style
s.display="block"},
$S:5}
A.iv.prototype={
$1(a){var s
t.V.a(a)
s=this.b.checked
s.toString
this.a.a=s},
$S:5}
A.iw.prototype={
$1(a){var s
t.V.a(a)
s=this.b.checked
s.toString
this.a.b=s},
$S:5}
A.jD.prototype={
d9(){var s,r=document.getElementById("myModal")
r.toString
this.a=r
r=window
s=t.b9.a(new A.jE(this))
t.Z.a(null)
A.bS(r,"click",s,!1,t.V)}}
A.jE.prototype={
$1(a){var s=this.a
if(A.pB(t.V.a(a).target)===A.aG(s.a,"_modal")){s=A.aG(s.a,"_modal").style
s.display="none"}},
$S:5}
A.fE.prototype={}
A.k2.prototype={
J(a){var s,r,q
t.ni.a(a)
s=document
r=s.getElementById("health_bar")
r.toString
s=s.getElementById("exp_bar")
s.toString
q=t.M
B.a.l(a.a.a,q.a(new A.k3(r,a)))
B.a.l(a.b.a,q.a(new A.k4(s,a)))}}
A.k3.prototype={
$0(){var s=this.a.style,r=A.z(this.b.a.b*100)+"%"
s.width=r},
$S:0}
A.k4.prototype={
$0(){var s=this.a.style,r=A.z(this.b.b.b*100)+"%"
s.width=r},
$S:0};(function aliases(){var s=J.a.prototype
s.d2=s.k
s=J.cb.prototype
s.d3=s.k
s=A.ax.prototype
s.d4=s.cw
s.d5=s.cz
s.d7=s.cB
s.d6=s.cA})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_1u
s(J.r.prototype,"ge9","l",20)
r(A,"pX","oB",17)
r(A,"qb","pa",7)
r(A,"qc","pb",7)
r(A,"qd","pc",7)
q(A,"no","q5",0)
p(A,"qf","q_",10)
q(A,"qe","pZ",0)
o(A.d5.prototype,"gej",1,0,null,["$1","$0"],["a1","aB"],37,0,0)
n(A.H.prototype,"gdn","L",10)
p(A,"qj","pF",57)
r(A,"qk","pG",17)
var l
m(l=A.f8.prototype,"ger","bi",29)
m(l,"gc3","dL",13)
p(A,"qI","q4",58)
o(A.fc.prototype,"geb",0,1,null,["$2","$1"],["cf","ce"],45,0,0)
p(A,"qO","qm",59)
r(A,"nv","qH",40)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.lP,J.a,J.dm,A.J,A.jZ,A.j,A.bk,A.a2,A.an,A.cF,A.c1,A.kf,A.jK,A.dA,A.el,A.y,A.jp,A.dJ,A.ku,A.aU,A.hv,A.er,A.eq,A.he,A.dp,A.e6,A.cq,A.H,A.hf,A.cl,A.bn,A.em,A.hg,A.e5,A.hm,A.bU,A.hW,A.ev,A.ew,A.hC,A.ec,A.h,A.dY,A.c3,A.a7,A.kv,A.fB,A.e_,A.hs,A.cN,A.S,A.hZ,A.fX,A.iQ,A.lK,A.p,A.dB,A.hl,A.kn,A.jJ,A.hz,A.fa,A.cr,A.l,A.Y,A.fx,A.aL,A.cx,A.ir,A.iq,A.a9,A.al,A.b1,A.bl,A.iJ,A.f8,A.di,A.aw,A.iO,A.U,A.jz,A.bF,A.X,A.dk,A.aq,A.ak,A.eF,A.c0,A.cA,A.cJ,A.cI,A.eW,A.fk,A.bN,A.fh,A.fi,A.i,A.jv,A.jA,A.jV,A.f1,A.j2,A.a0,A.bC,A.K,A.j5,A.i2,A.ki,A.jS,A.cW,A.c9,A.ci,A.jM,A.f_,A.V,A.w,A.hh,A.i7,A.jd,A.jU,A.fw,A.fQ,A.a3,A.jx,A.kc,A.fJ,A.hc,A.fU,A.iW,A.eR,A.jb,A.b2,A.e4,A.dC,A.iF,A.e2,A.j0,A.am,A.f5,A.fc,A.jI,A.jf,A.jN,A.dW,A.k8,A.kj,A.it,A.jD,A.fE,A.k2])
q(J.a,[J.dF,J.dH,J.cb,J.r,J.cM,J.ca,A.fp,A.ch,A.e,A.is,A.eO,A.cC,A.be,A.G,A.hk,A.aQ,A.iT,A.bH,A.hn,A.dy,A.hp,A.iU,A.k,A.ht,A.av,A.je,A.hx,A.jt,A.jy,A.hD,A.hE,A.ay,A.hF,A.hH,A.az,A.hL,A.hO,A.aA,A.hP,A.aB,A.hU,A.ae,A.i0,A.kd,A.aD,A.i3,A.ke,A.kh,A.ia,A.ic,A.ie,A.ih,A.ij,A.aI,A.hA,A.aK,A.hJ,A.jO,A.hX,A.aM,A.i5,A.aZ,A.eK,A.hi,A.eQ,A.f7,A.fG,A.cV,A.bo,A.h4,A.h9,A.hS])
q(J.cb,[J.fD,J.cZ,J.bh])
r(J.jl,J.r)
q(J.cM,[J.dG,J.fd])
q(A.J,[A.cc,A.bO,A.fe,A.h6,A.fN,A.dn,A.hr,A.fy,A.bb,A.h8,A.h5,A.bm,A.eV,A.eY])
q(A.j,[A.o,A.ce,A.aF,A.kU])
q(A.o,[A.aT,A.dI])
q(A.aT,[A.e0,A.dM])
r(A.dz,A.ce)
q(A.a2,[A.dL,A.e3])
q(A.cF,[A.dv,A.ac])
q(A.c1,[A.ja,A.eT,A.eU,A.fZ,A.jn,A.l8,A.la,A.kr,A.kq,A.kW,A.j7,A.kB,A.kJ,A.k6,A.kP,A.kL,A.jw,A.kw,A.ln,A.lo,A.iC,A.iD,A.l7,A.j9,A.j_,A.j3,A.jF,A.iA,A.iz,A.jQ,A.k_,A.lc,A.k1,A.l1,A.iX,A.jc,A.iH,A.iG,A.jk,A.jg,A.jh,A.ji,A.jj,A.ka,A.kk,A.kl,A.iu,A.iv,A.iw,A.jE])
r(A.dR,A.bO)
q(A.fZ,[A.fV,A.cB])
r(A.hd,A.dn)
r(A.dK,A.y)
r(A.ax,A.dK)
q(A.eU,[A.jm,A.l9,A.kX,A.l0,A.j8,A.kC,A.jq,A.ju,A.jB,A.jC,A.jW,A.k5,A.kp,A.iE,A.iN,A.iL,A.iM,A.lm,A.li,A.lk,A.lh,A.lj,A.ll,A.lg,A.ls,A.k9])
r(A.cR,A.ch)
q(A.cR,[A.ee,A.eg])
r(A.ef,A.ee)
r(A.cg,A.ef)
r(A.eh,A.eg)
r(A.dO,A.eh)
r(A.dN,A.cg)
q(A.dO,[A.fq,A.fr,A.fs,A.ft,A.fu,A.cS,A.dP])
r(A.es,A.hr)
q(A.eT,[A.ks,A.kt,A.kS,A.kR,A.kx,A.kF,A.kD,A.kz,A.kE,A.ky,A.kI,A.kH,A.kG,A.k7,A.kQ,A.kN,A.l_,A.kO,A.lx,A.lv,A.lw,A.lr,A.lp,A.lq,A.lA,A.ly,A.lz,A.lD,A.lB,A.lC,A.l4,A.l2,A.l3,A.jG,A.iB,A.jR,A.k3,A.k4])
q(A.e6,[A.aO,A.d5])
r(A.d2,A.em)
q(A.cl,[A.en,A.e8])
r(A.bQ,A.en)
r(A.d3,A.e5)
r(A.co,A.hm)
r(A.b9,A.bU)
r(A.hN,A.ev)
q(A.ax,[A.kM,A.ea])
r(A.ei,A.ew)
r(A.eb,A.ei)
q(A.bb,[A.cU,A.fb])
q(A.e,[A.u,A.f4,A.c7,A.ar,A.ej,A.as,A.a8,A.eo,A.ha,A.d1,A.F,A.ds,A.eM])
q(A.u,[A.W,A.b0,A.bf])
q(A.W,[A.q,A.n])
q(A.q,[A.eI,A.eJ,A.eP,A.bZ,A.cH,A.f6,A.cL,A.c8,A.cf,A.fO])
r(A.iP,A.be)
r(A.cG,A.hk)
q(A.aQ,[A.iR,A.iS])
r(A.ho,A.hn)
r(A.dx,A.ho)
r(A.hq,A.hp)
r(A.f0,A.hq)
r(A.au,A.eO)
r(A.hu,A.ht)
r(A.f3,A.hu)
r(A.hy,A.hx)
r(A.c6,A.hy)
r(A.dE,A.c7)
r(A.b8,A.k)
q(A.b8,[A.bi,A.ap])
r(A.fl,A.hD)
r(A.fm,A.hE)
r(A.hG,A.hF)
r(A.fn,A.hG)
r(A.hI,A.hH)
r(A.dQ,A.hI)
r(A.hM,A.hL)
r(A.fF,A.hM)
r(A.fM,A.hO)
r(A.ek,A.ej)
r(A.fR,A.ek)
r(A.hQ,A.hP)
r(A.fS,A.hQ)
r(A.fW,A.hU)
r(A.i1,A.i0)
r(A.h_,A.i1)
r(A.ep,A.eo)
r(A.h0,A.ep)
r(A.i4,A.i3)
r(A.h2,A.i4)
r(A.d_,A.cf)
r(A.ib,A.ia)
r(A.hj,A.ib)
r(A.e7,A.dy)
r(A.id,A.ic)
r(A.hw,A.id)
r(A.ig,A.ie)
r(A.ed,A.ig)
r(A.ii,A.ih)
r(A.hR,A.ii)
r(A.ik,A.ij)
r(A.i_,A.ik)
r(A.bR,A.e8)
r(A.e9,A.bn)
r(A.ko,A.kn)
r(A.hB,A.hA)
r(A.ff,A.hB)
r(A.hK,A.hJ)
r(A.fz,A.hK)
r(A.hY,A.hX)
r(A.fY,A.hY)
r(A.i6,A.i5)
r(A.h3,A.i6)
q(A.F,[A.bc,A.cK])
r(A.dr,A.bc)
q(A.ds,[A.bY,A.fA])
r(A.eL,A.hi)
r(A.hT,A.hS)
r(A.fT,A.hT)
q(A.al,[A.bL,A.bM,A.cE,A.bJ,A.fK,A.dV,A.fL,A.bB])
r(A.a_,A.l)
q(A.a_,[A.cP,A.cO])
q(A.kv,[A.dZ,A.b4,A.f9,A.b3,A.bG,A.aN,A.c2,A.dj,A.cz,A.fC,A.c4,A.cY,A.cD,A.cm,A.af,A.cd,A.b_,A.js,A.Z,A.cQ,A.c_,A.aR,A.cn,A.bI,A.dX,A.a1])
q(A.jV,[A.iV,A.iZ,A.j6,A.fj,A.jY,A.k0,A.kb,A.j4])
q(A.a0,[A.fv,A.dU,A.aJ,A.cX,A.fg,A.e1,A.dq,A.dw,A.eN,A.h7,A.fI,A.dT])
q(A.jb,[A.iK,A.jX])
q(A.b2,[A.hb,A.dl,A.dS])
q(A.hb,[A.eS,A.eH,A.eX,A.dh])
s(A.ee,A.h)
s(A.ef,A.an)
s(A.eg,A.h)
s(A.eh,A.an)
s(A.d2,A.hg)
s(A.ew,A.dY)
s(A.hk,A.iQ)
s(A.hn,A.h)
s(A.ho,A.p)
s(A.hp,A.h)
s(A.hq,A.p)
s(A.ht,A.h)
s(A.hu,A.p)
s(A.hx,A.h)
s(A.hy,A.p)
s(A.hD,A.y)
s(A.hE,A.y)
s(A.hF,A.h)
s(A.hG,A.p)
s(A.hH,A.h)
s(A.hI,A.p)
s(A.hL,A.h)
s(A.hM,A.p)
s(A.hO,A.y)
s(A.ej,A.h)
s(A.ek,A.p)
s(A.hP,A.h)
s(A.hQ,A.p)
s(A.hU,A.y)
s(A.i0,A.h)
s(A.i1,A.p)
s(A.eo,A.h)
s(A.ep,A.p)
s(A.i3,A.h)
s(A.i4,A.p)
s(A.ia,A.h)
s(A.ib,A.p)
s(A.ic,A.h)
s(A.id,A.p)
s(A.ie,A.h)
s(A.ig,A.p)
s(A.ih,A.h)
s(A.ii,A.p)
s(A.ij,A.h)
s(A.ik,A.p)
s(A.hA,A.h)
s(A.hB,A.p)
s(A.hJ,A.h)
s(A.hK,A.p)
s(A.hX,A.h)
s(A.hY,A.p)
s(A.i5,A.h)
s(A.i6,A.p)
s(A.hi,A.y)
s(A.hS,A.h)
s(A.hT,A.p)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{f:"int",M:"double",N:"num",t:"String",E:"bool",S:"Null",m:"List"},mangledNames:{},types:["~()","~(i,dC)","a3()","b1()","m<aw>()","~(ap)","~(t,@)","~(~())","S()","~(@)","~(v,aV)","~(bC)","S(@)","~(a7)","~(k)","bN(f)","E(f,f)","f(v?)","~(t,t)","@(@)","~(v?)","@(@,t)","@(@,@)","~(aZ)","~(bH)","E(aw)","@(t)","E(v?)","~(f,@)","ao<~>(a1)","S(@,aV)","E(lJ)","~(m<M>)","S(~())","~(h1)","ao<~>(k)","S(bo)","~([v?])","E(bl)","f(f,f)","~(N)","S(v,aV)","H<@>(@)","f(am,am)","~(i)","~(v[f])","M(f)","E(U)","E(X)","E(aq)","E(ak)","f(m<i>,m<i>)","E(i)","~(bi)","E(@)","~(@,@)","~(v?,v?)","E(v?,v?)","f(a3,a3)","f(v?,v?)","f(i)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.pt(v.typeUniverse,JSON.parse('{"fD":"cb","cZ":"cb","bh":"cb","qQ":"k","r8":"k","qS":"F","qX":"bc","qP":"n","r9":"n","qR":"e","rk":"e","rn":"e","qU":"q","ro":"u","r7":"u","ra":"bf","rm":"ap","rB":"a8","qW":"b8","qV":"b0","rq":"b0","rc":"c7","rb":"c6","qY":"G","r_":"ae","qT":"cf","rj":"cg","ri":"ch","dF":{"E":[]},"dH":{"S":[]},"r":{"m":["1"],"o":["1"],"j":["1"]},"jl":{"r":["1"],"m":["1"],"o":["1"],"j":["1"]},"dm":{"a2":["1"]},"cM":{"M":[],"N":[],"ab":["N"]},"dG":{"M":[],"f":[],"N":[],"ab":["N"]},"fd":{"M":[],"N":[],"ab":["N"]},"ca":{"t":[],"ab":["t"],"mL":[]},"cc":{"J":[]},"o":{"j":["1"]},"aT":{"o":["1"],"j":["1"]},"e0":{"aT":["1"],"o":["1"],"j":["1"],"j.E":"1","aT.E":"1"},"bk":{"a2":["1"]},"ce":{"j":["2"],"j.E":"2"},"dz":{"ce":["1","2"],"o":["2"],"j":["2"],"j.E":"2"},"dL":{"a2":["2"]},"dM":{"aT":["2"],"o":["2"],"j":["2"],"j.E":"2","aT.E":"2"},"aF":{"j":["1"],"j.E":"1"},"e3":{"a2":["1"]},"cF":{"L":["1","2"]},"dv":{"cF":["1","2"],"L":["1","2"]},"ac":{"cF":["1","2"],"L":["1","2"]},"dR":{"bO":[],"J":[]},"fe":{"J":[]},"h6":{"J":[]},"el":{"aV":[]},"c1":{"c5":[]},"eT":{"c5":[]},"eU":{"c5":[]},"fZ":{"c5":[]},"fV":{"c5":[]},"cB":{"c5":[]},"fN":{"J":[]},"hd":{"J":[]},"ax":{"y":["1","2"],"jo":["1","2"],"L":["1","2"],"y.K":"1","y.V":"2"},"dI":{"o":["1"],"j":["1"],"j.E":"1"},"dJ":{"a2":["1"]},"fp":{"ms":[]},"ch":{"aE":[]},"cR":{"x":["1"],"aE":[]},"cg":{"h":["M"],"x":["M"],"m":["M"],"o":["M"],"aE":[],"j":["M"],"an":["M"],"h.E":"M"},"dO":{"h":["f"],"x":["f"],"m":["f"],"o":["f"],"aE":[],"j":["f"],"an":["f"]},"dN":{"h":["M"],"lM":[],"x":["M"],"m":["M"],"o":["M"],"aE":[],"j":["M"],"an":["M"],"h.E":"M"},"fq":{"h":["f"],"x":["f"],"m":["f"],"o":["f"],"aE":[],"j":["f"],"an":["f"],"h.E":"f"},"fr":{"h":["f"],"x":["f"],"m":["f"],"o":["f"],"aE":[],"j":["f"],"an":["f"],"h.E":"f"},"fs":{"h":["f"],"x":["f"],"m":["f"],"o":["f"],"aE":[],"j":["f"],"an":["f"],"h.E":"f"},"ft":{"h":["f"],"x":["f"],"m":["f"],"o":["f"],"aE":[],"j":["f"],"an":["f"],"h.E":"f"},"fu":{"h":["f"],"x":["f"],"m":["f"],"o":["f"],"aE":[],"j":["f"],"an":["f"],"h.E":"f"},"cS":{"h":["f"],"p6":[],"x":["f"],"m":["f"],"o":["f"],"aE":[],"j":["f"],"an":["f"],"h.E":"f"},"dP":{"h":["f"],"p7":[],"x":["f"],"m":["f"],"o":["f"],"aE":[],"j":["f"],"an":["f"],"h.E":"f"},"er":{"mX":[]},"hr":{"J":[]},"es":{"bO":[],"J":[]},"H":{"ao":["1"]},"eq":{"h1":[]},"dp":{"J":[]},"aO":{"e6":["1"]},"d5":{"e6":["1"]},"em":{"mS":["1"],"n3":["1"],"cp":["1"]},"d2":{"hg":["1"],"em":["1"],"mS":["1"],"n3":["1"],"cp":["1"]},"bQ":{"en":["1"],"cl":["1"]},"d3":{"e5":["1"],"bn":["1"],"cp":["1"]},"e5":{"bn":["1"],"cp":["1"]},"en":{"cl":["1"]},"co":{"hm":["1"]},"b9":{"bU":["1"]},"ev":{"mZ":[]},"hN":{"ev":[],"mZ":[]},"kM":{"ax":["1","2"],"y":["1","2"],"jo":["1","2"],"L":["1","2"],"y.K":"1","y.V":"2"},"ea":{"ax":["1","2"],"y":["1","2"],"jo":["1","2"],"L":["1","2"],"y.K":"1","y.V":"2"},"eb":{"dY":["1"],"mR":["1"],"o":["1"],"j":["1"]},"ec":{"a2":["1"]},"dK":{"y":["1","2"],"L":["1","2"]},"y":{"L":["1","2"]},"ei":{"dY":["1"],"mR":["1"],"o":["1"],"j":["1"]},"c3":{"ab":["c3"]},"M":{"N":[],"ab":["N"]},"a7":{"ab":["a7"]},"f":{"N":[],"ab":["N"]},"m":{"o":["1"],"j":["1"]},"N":{"ab":["N"]},"t":{"ab":["t"],"mL":[]},"dn":{"J":[]},"bO":{"J":[]},"fy":{"J":[]},"bb":{"J":[]},"cU":{"J":[]},"fb":{"J":[]},"h8":{"J":[]},"h5":{"J":[]},"bm":{"J":[]},"eV":{"J":[]},"fB":{"J":[]},"e_":{"J":[]},"eY":{"J":[]},"hZ":{"aV":[]},"bi":{"k":[]},"ap":{"k":[]},"u":{"e":[]},"ar":{"e":[]},"as":{"e":[]},"a8":{"e":[]},"q":{"W":[],"u":[],"e":[]},"eI":{"W":[],"u":[],"e":[]},"eJ":{"W":[],"u":[],"e":[]},"eP":{"W":[],"u":[],"e":[]},"bZ":{"W":[],"u":[],"e":[]},"b0":{"u":[],"e":[]},"cH":{"W":[],"u":[],"e":[]},"bf":{"u":[],"e":[]},"dx":{"h":["b7<N>"],"p":["b7<N>"],"m":["b7<N>"],"x":["b7<N>"],"o":["b7<N>"],"j":["b7<N>"],"p.E":"b7<N>","h.E":"b7<N>"},"dy":{"b7":["N"]},"f0":{"h":["t"],"p":["t"],"m":["t"],"x":["t"],"o":["t"],"j":["t"],"p.E":"t","h.E":"t"},"W":{"u":[],"e":[]},"f3":{"h":["au"],"p":["au"],"m":["au"],"x":["au"],"o":["au"],"j":["au"],"p.E":"au","h.E":"au"},"f4":{"e":[]},"f6":{"W":[],"u":[],"e":[]},"c6":{"h":["u"],"p":["u"],"m":["u"],"x":["u"],"o":["u"],"j":["u"],"p.E":"u","h.E":"u"},"dE":{"e":[]},"c7":{"e":[]},"cL":{"W":[],"u":[],"e":[]},"c8":{"W":[],"u":[],"e":[]},"cf":{"W":[],"u":[],"e":[]},"fl":{"y":["t","@"],"L":["t","@"],"y.K":"t","y.V":"@"},"fm":{"y":["t","@"],"L":["t","@"],"y.K":"t","y.V":"@"},"fn":{"h":["ay"],"p":["ay"],"m":["ay"],"x":["ay"],"o":["ay"],"j":["ay"],"p.E":"ay","h.E":"ay"},"dQ":{"h":["u"],"p":["u"],"m":["u"],"x":["u"],"o":["u"],"j":["u"],"p.E":"u","h.E":"u"},"fF":{"h":["az"],"p":["az"],"m":["az"],"x":["az"],"o":["az"],"j":["az"],"p.E":"az","h.E":"az"},"fM":{"y":["t","@"],"L":["t","@"],"y.K":"t","y.V":"@"},"fO":{"W":[],"u":[],"e":[]},"fR":{"h":["ar"],"p":["ar"],"m":["ar"],"x":["ar"],"e":[],"o":["ar"],"j":["ar"],"p.E":"ar","h.E":"ar"},"fS":{"h":["aA"],"p":["aA"],"m":["aA"],"x":["aA"],"o":["aA"],"j":["aA"],"p.E":"aA","h.E":"aA"},"fW":{"y":["t","t"],"L":["t","t"],"y.K":"t","y.V":"t"},"h_":{"h":["a8"],"p":["a8"],"m":["a8"],"x":["a8"],"o":["a8"],"j":["a8"],"p.E":"a8","h.E":"a8"},"h0":{"h":["as"],"p":["as"],"m":["as"],"x":["as"],"e":[],"o":["as"],"j":["as"],"p.E":"as","h.E":"as"},"h2":{"h":["aD"],"p":["aD"],"m":["aD"],"x":["aD"],"o":["aD"],"j":["aD"],"p.E":"aD","h.E":"aD"},"b8":{"k":[]},"d_":{"W":[],"u":[],"e":[]},"ha":{"e":[]},"d1":{"km":[],"e":[]},"hj":{"h":["G"],"p":["G"],"m":["G"],"x":["G"],"o":["G"],"j":["G"],"p.E":"G","h.E":"G"},"e7":{"b7":["N"]},"hw":{"h":["av?"],"p":["av?"],"m":["av?"],"x":["av?"],"o":["av?"],"j":["av?"],"p.E":"av?","h.E":"av?"},"ed":{"h":["u"],"p":["u"],"m":["u"],"x":["u"],"o":["u"],"j":["u"],"p.E":"u","h.E":"u"},"hR":{"h":["aB"],"p":["aB"],"m":["aB"],"x":["aB"],"o":["aB"],"j":["aB"],"p.E":"aB","h.E":"aB"},"i_":{"h":["ae"],"p":["ae"],"m":["ae"],"x":["ae"],"o":["ae"],"j":["ae"],"p.E":"ae","h.E":"ae"},"e8":{"cl":["1"]},"bR":{"e8":["1"],"cl":["1"]},"e9":{"bn":["1"]},"dB":{"a2":["1"]},"hl":{"km":[],"e":[]},"hz":{"mM":[]},"ff":{"h":["aI"],"p":["aI"],"m":["aI"],"o":["aI"],"j":["aI"],"p.E":"aI","h.E":"aI"},"fz":{"h":["aK"],"p":["aK"],"m":["aK"],"o":["aK"],"j":["aK"],"p.E":"aK","h.E":"aK"},"fY":{"h":["t"],"p":["t"],"m":["t"],"o":["t"],"j":["t"],"p.E":"t","h.E":"t"},"n":{"W":[],"u":[],"e":[]},"h3":{"h":["aM"],"p":["aM"],"m":["aM"],"o":["aM"],"j":["aM"],"p.E":"aM","h.E":"aM"},"dr":{"F":[],"e":[]},"bY":{"e":[]},"F":{"e":[]},"eL":{"y":["t","@"],"L":["t","@"],"y.K":"t","y.V":"@"},"bc":{"F":[],"e":[]},"eM":{"e":[]},"ds":{"e":[]},"cK":{"F":[],"e":[]},"fA":{"e":[]},"fT":{"h":["L<@,@>"],"p":["L<@,@>"],"m":["L<@,@>"],"o":["L<@,@>"],"j":["L<@,@>"],"p.E":"L<@,@>","h.E":"L<@,@>"},"kU":{"j":["1"],"j.E":"1"},"cr":{"a2":["1"]},"cx":{"dD":[]},"b1":{"al":[]},"bL":{"al":[]},"bM":{"al":[]},"cE":{"al":[]},"bJ":{"al":[]},"fK":{"al":[]},"dV":{"al":[]},"fL":{"al":[]},"bB":{"al":[]},"a_":{"l":[]},"cP":{"a_":["f"],"l":[],"a_.T":"f"},"cO":{"a_":["f"],"l":[],"a_.T":"f"},"bN":{"dD":[]},"fi":{"dD":[]},"fv":{"a0":[]},"dU":{"a0":[]},"aJ":{"a0":[]},"cX":{"a0":[]},"fg":{"a0":[]},"e1":{"a0":[]},"dq":{"a0":[]},"dw":{"a0":[]},"eN":{"a0":[]},"h7":{"a0":[]},"fI":{"a0":[]},"dT":{"a0":[]},"ci":{"ab":["ci"]},"fQ":{"p2":[]},"hb":{"b2":["i"]},"dl":{"b2":["1"]},"dS":{"b2":["1"]},"eS":{"b2":["i"]},"eH":{"b2":["i"]},"eX":{"b2":["i"]},"dh":{"b2":["i"]},"lM":{"m":["M"],"o":["M"],"j":["M"],"aE":[]}}'))
A.ps(v.typeUniverse,JSON.parse('{"o":1,"cR":1,"dK":2,"ei":1,"ew":1}'))
var u={h:"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",q:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",p:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",l:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",j:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x , u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n    float source_strength = u_source_strength + sin(u_time * 2.0);\n    float dist = distance(snapped_position, (u_source_position + vec2(0.5, 0.5)) * u_block_size) / 50.0;\n    if (dist > source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, source_strength, dist);\n    outColor = vec4(u_source_color.rgb, scale);\n}\n",B:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // front and back textures are already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 front = texture(u_light_texture, d);\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  // front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.aa
return{bm:s("@<~>"),mm:s("di"),bB:s("U"),lE:s("ak"),u:s("dp"),bD:s("aZ"),lo:s("ms"),g:s("bZ"),nK:s("cC"),n6:s("ab<v?>"),d5:s("G"),cs:s("c3"),mX:s("cH"),dA:s("bf"),jW:s("bH"),J:s("a7"),ox:s("lJ"),gt:s("o<@>"),v:s("am"),aW:s("f1"),b:s("c4"),fz:s("J"),L:s("k"),et:s("au"),A:s("lM"),gY:s("c5"),h:s("ao<@>"),m:s("ac<f,l>"),eT:s("Y<cd>"),f5:s("Y<cm>"),eN:s("Y<af>"),R:s("Y<bN>"),ba:s("Y<cY>"),de:s("Y<M>"),oQ:s("Y<aw?>"),hQ:s("cL"),U:s("a1"),fY:s("c8"),lZ:s("aw"),e7:s("j<@>"),c7:s("r<cx>"),p:s("r<cz>"),G:s("r<V>"),a:s("r<al>"),E:s("r<b_>"),fy:s("r<bC>"),Q:s("r<eW>"),X:s("r<aR>"),pl:s("r<lJ>"),c:s("r<am>"),w:s("r<a0>"),iw:s("r<ao<~>>"),ow:s("r<dD>"),ge:s("r<a1>"),Y:s("r<c9>"),I:s("r<aw>"),lB:s("r<b4>"),do:s("r<m<i>>"),hf:s("r<v>"),d:s("r<fC>"),q:s("r<i>"),ff:s("r<fJ>"),fk:s("r<cW>"),fF:s("r<fU>"),s:s("r<t>"),oe:s("r<e2>"),o:s("r<w>"),B:s("r<aN>"),D:s("r<e4>"),n:s("r<M>"),dG:s("r<@>"),t:s("r<f>"),g2:s("r<N>"),f7:s("r<~()>"),ev:s("r<~(a7)>"),T:s("dH"),dY:s("bh"),dX:s("x<@>"),mT:s("bi"),kT:s("aI"),k:s("m<cx>"),mw:s("m<am>"),i8:s("m<i>"),bd:s("m<M>"),gM:s("cd"),cM:s("L<i,am>"),ea:s("L<t,@>"),av:s("L<@,@>"),gX:s("cO"),e:s("cP"),li:s("X"),ib:s("ay"),r:s("bl"),V:s("ap"),fh:s("u"),P:s("S"),ai:s("aK"),K:s("v"),p6:s("ci"),ni:s("fE"),d8:s("az"),j:s("i"),o5:s("mM"),kB:s("aq"),mx:s("b7<N>"),cH:s("cV"),fm:s("ar"),cA:s("aA"),hH:s("aB"),hd:s("a3"),l:s("aV"),N:s("t"),lv:s("ae"),dt:s("cm"),dy:s("af"),dQ:s("as"),gJ:s("a8"),lJ:s("bo"),W:s("bN"),ns:s("cY"),hU:s("h1"),ki:s("aD"),hk:s("aM"),fH:s("e2"),ha:s("mX"),bC:s("bO"),jv:s("aE"),cx:s("cZ"),eL:s("d_"),kL:s("aF<U>"),b1:s("aF<ak>"),eo:s("aF<X>"),au:s("aF<aq>"),c1:s("e4"),kg:s("km"),l7:s("hc"),oJ:s("aO<aZ>"),fB:s("aO<bo>"),ou:s("aO<~>"),aN:s("hh"),bz:s("bR<k>"),eX:s("bR<ap>"),og:s("H<aZ>"),aa:s("H<bo>"),f:s("H<@>"),hy:s("H<f>"),cU:s("H<~>"),gL:s("hV<v?>"),iF:s("d5<~>"),im:s("i2"),o3:s("i7"),k4:s("E"),ei:s("E(U)"),g9:s("E(ak)"),eU:s("E(X)"),iW:s("E(v)"),hZ:s("E(aq)"),i:s("M"),z:s("@"),mY:s("@()"),y:s("@(v)"),ng:s("@(v,aV)"),p1:s("@(@,@)"),S:s("f"),eK:s("0&*"),_:s("v*"),iB:s("e?"),gK:s("ao<S>?"),ef:s("av?"),O:s("aw?"),iD:s("v?"),F:s("cq<@,@>?"),nF:s("hC?"),du:s("@(k)?"),Z:s("~()?"),p0:s("~(aZ)?"),lW:s("~(bH)?"),oV:s("~(k)?"),jV:s("~(bi)?"),b9:s("~(ap)?"),cZ:s("N"),H:s("~"),M:s("~()"),nD:s("~([~])"),x:s("~(a7)"),nt:s("~(a0)"),i6:s("~(v)"),fQ:s("~(v,aV)"),gS:s("~(t,t)"),C:s("~(t,@)"),my:s("~(h1)"),hv:s("~(N)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aK=A.dr.prototype
B.bW=A.bY.prototype
B.bX=A.eK.prototype
B.D=A.bZ.prototype
B.c7=A.cC.prototype
B.aU=A.cG.prototype
B.dm=A.cK.prototype
B.dn=A.dE.prototype
B.b5=A.c8.prototype
B.dq=J.a.prototype
B.a=J.r.prototype
B.ds=J.dF.prototype
B.e=J.dG.prototype
B.c=J.cM.prototype
B.y=J.ca.prototype
B.dt=J.bh.prototype
B.bk=A.dN.prototype
B.e0=A.cS.prototype
B.aw=A.dP.prototype
B.bm=J.fD.prototype
B.f=A.cV.prototype
B.aF=J.cZ.prototype
B.bA=A.d1.prototype
B.aD=new A.af("table")
B.bB=new A.dh(B.aD)
B.af=new A.af("bookshelf")
B.bC=new A.dh(B.af)
B.aG=new A.dj("rounds")
B.bO=new A.U("",0,0,0,99)
B.G=new A.b_("surface")
B.w=new A.b_("caves")
B.x=new A.b_("deepCaves")
B.A=new A.b_("facility")
B.t=new A.b_("ruins")
B.ag=new A.b_("village")
B.ah=new A.b_("snow")
B.bY=new A.eH()
B.ec=new A.dl(A.aa("dl<i>"))
B.ai=new A.eS()
B.aj=new A.eX()
B.aL=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bZ=function() {
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
B.c3=function(getTagFallback) {
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
B.c_=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.c0=function(hooks) {
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
B.c2=function(hooks) {
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
B.c1=function(hooks) {
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
B.aM=function(hooks) { return hooks; }

B.aN=new A.jI()
B.c4=new A.dS(A.aa("dS<i>"))
B.c5=new A.fB()
B.C=new A.jZ()
B.u=new A.hz()
B.j=new A.hN()
B.c6=new A.hZ()
B.aO=new A.c_("north")
B.aP=new A.c_("south")
B.aQ=new A.c_("east")
B.aR=new A.c_("west")
B.aS=new A.cD("none")
B.c8=new A.cD("ignoreAgents")
B.X=new A.cD("ignoreAgentsAndUnlockedDoors")
B.ak=new A.cD("normal")
B.c9=new A.l(1660944383)
B.ca=new A.l(3707764736)
B.aT=new A.l(4278190080)
B.cA=new A.l(4286941355)
B.cK=new A.l(4291232805)
B.cX=new A.l(4294278144)
B.dh=new A.b3("acid")
B.aV=new A.b3("cold")
B.aW=new A.b3("electricity")
B.Y=new A.b3("fire")
B.di=new A.b3("sonic")
B.Z=new A.b3("bludgeoning")
B.al=new A.b3("piercing")
B.aX=new A.b3("slashing")
B.aY=new A.bG("d3")
B.a_=new A.bG("d4")
B.H=new A.bG("d6")
B.am=new A.bG("d8")
B.aZ=new A.bG("d12")
B.an=new A.bG("d20")
B.I=new A.aR("se")
B.J=new A.aR("ne")
B.K=new A.aR("sw")
B.L=new A.aR("nw")
B.k=new A.aR("n")
B.l=new A.aR("e")
B.m=new A.aR("s")
B.n=new A.aR("w")
B.dj=new A.a7(0)
B.dk=new A.a7(25e4)
B.dl=new A.a7(8000)
B.M=new A.c4("primaryMelee")
B.q=new A.c4("primaryRanged")
B.N=new A.c4("armor")
B.a0=new A.a1("north")
B.a1=new A.a1("east")
B.b_=new A.a1("autoexplore")
B.b0=new A.a1("reload")
B.a2=new A.a1("south")
B.a3=new A.a1("west")
B.dp=new A.a1("skip")
B.b1=new A.a1("fire")
B.b2=new A.a1("look")
B.b3=new A.a1("reset")
B.b4=new A.a1("activate")
B.ao=new A.Z("none")
B.ap=new A.Z("stairsUp")
B.a4=new A.Z("tree")
B.a5=new A.Z("bookshelf")
B.O=new A.Z("mechanism")
B.a6=new A.Z("activatedMechanism")
B.a7=new A.Z("chest")
B.P=new A.Z("mechanicalLight")
B.Q=new A.Z("stairsDown")
B.v=new A.Z("door")
B.R=new A.Z("openDoor")
B.S=new A.Z("lockedDoor")
B.E=new A.Z("grass")
B.T=new A.Z("torch")
B.a8=new A.Z("table")
B.a9=new A.Z("chair")
B.aq=new A.b4("melee")
B.aa=new A.b4("ranged")
B.ar=new A.b4("armor")
B.as=new A.b4("other")
B.dr=new A.b4("consumable")
B.b6=new A.b4("corpse")
B.ab=new A.b4("ammo")
B.du=new A.js("water")
B.aH=new A.cz("light")
B.aI=new A.cz("heavy")
B.aJ=new A.cz("powered")
B.ev=A.c(s([B.aH,B.aI,B.aJ]),t.p)
B.bI=new A.ak(1)
B.bJ=new A.ak(1)
B.bK=new A.ak(1)
B.bL=new A.ak(1)
B.er=A.c(s([B.aJ]),t.p)
B.bM=new A.ak(2)
B.es=A.c(s([B.aH,B.aI]),t.p)
B.bN=new A.ak(2)
B.dv=A.c(s([B.bI,B.bJ,B.bK,B.bL,B.bM,B.bN]),A.aa("r<ak>"))
B.b7=A.c(s([24,36]),t.n)
B.dw=A.c(s([B.aO,B.aP,B.aQ,B.aR]),A.aa("r<c_>"))
B.at=A.c(s([B.I,B.J,B.K,B.L,B.k,B.l,B.m,B.n]),t.X)
B.ep=new A.f9("oneHand")
B.eo=new A.c2("staggered")
B.ed=new A.bF()
B.e9=new A.aN("stun")
B.bz=new A.aN("powered")
B.dz=A.c(s([B.e9,B.bz]),t.B)
B.bE=new A.dj("charge")
B.bG=new A.dk(B.bE,20)
B.e1=new A.aq("Zero pistol",B.aV,B.H,5,B.bG,60)
B.ek=new A.c2("none")
B.ee=new A.bF()
B.W=new A.aN("analog")
B.et=A.c(s([B.W]),t.B)
B.bH=new A.dk(B.aG,9)
B.U=new A.aq("Tac Pistol",B.al,B.H,1,B.bH,30)
B.en=new A.c2("burn")
B.ef=new A.bF()
B.ea=new A.aN("line")
B.eb=new A.aN("unwieldy")
B.eu=A.c(s([B.ea,B.eb]),t.B)
B.bD=new A.dj("petro")
B.bF=new A.dk(B.bD,20)
B.e2=new A.aq("Flame Rifle",B.Y,B.am,2,B.bF,25)
B.dx=A.c(s([B.e1,B.U,B.e2]),A.aa("r<aq>"))
B.b8=A.c(s([B.k,B.m]),t.X)
B.b9=A.c(s([B.l,B.n]),t.X)
B.bx=new A.aN("archaic")
B.dF=A.c(s([B.bx,B.W]),t.B)
B.dX=new A.X(B.Z,1,B.H,0,"Club",B.dF)
B.e8=new A.aN("operative")
B.bb=A.c(s([B.W,B.e8]),t.B)
B.dU=new A.X(B.Z,1,B.a_,1,"Tactical Baton",B.bb)
B.dV=new A.X(B.aX,1,B.a_,1,"Survival Knife",B.bb)
B.eq=new A.f9("twoHand")
B.by=new A.aN("block")
B.dy=A.c(s([B.W,B.by]),t.B)
B.dR=new A.X(B.al,1,B.H,1,"Tactical Spear",B.dy)
B.eg=new A.bF()
B.ba=A.c(s([B.bz]),t.B)
B.ej=new A.jz()
B.dW=new A.X(B.Y,2,B.a_,7,"Flame Sword",B.ba)
B.em=new A.c2("wound")
B.eh=new A.bF()
B.dT=new A.X(B.Y,2,B.am,9,"Plasma Sword",B.ba)
B.el=new A.c2("arc")
B.ei=new A.bF()
B.dQ=new A.X(B.aW,1,B.aZ,8,"Shock Staff",B.dz)
B.dA=A.c(s([B.dX,B.dU,B.dV,B.dR,B.dW,B.dT,B.dQ]),A.aa("r<X>"))
B.B=A.c(s([-1,3,-1,-1,3,-1]),t.n)
B.ac=A.c(s([]),t.Q)
B.dC=A.c(s([]),t.X)
B.h=A.c(s([]),t.w)
B.dB=A.c(s([]),A.aa("r<S>"))
B.bU=new A.U("Second Skin",1,1,2,5)
B.bV=new A.U("Estex Suit I",1,0,1,5)
B.bR=new A.U("Flight Suit",1,0,1,6)
B.bS=new A.U("Freebooter Armor I",2,2,3,4)
B.bP=new A.U("Kasatha microcord I",2,1,3,3)
B.bQ=new A.U("Ceremonial Plate",1,1,3,2)
B.bT=new A.U("Golemforged Plating",1,2,5,0)
B.dE=A.c(s([B.bU,B.bV,B.bR,B.bS,B.bP,B.bQ,B.bT]),A.aa("r<U>"))
B.bp=new A.bI("north")
B.bq=new A.bI("south")
B.br=new A.bI("east")
B.bs=new A.bI("west")
B.bt=new A.bI("center")
B.bc=A.c(s([B.bp,B.bq,B.br,B.bs,B.bt]),A.aa("r<bI>"))
B.bd=new A.cd("lockedDoor")
B.dH=new A.cd("doorMechanism")
B.be=new A.cd("none")
B.cR=new A.l(4293457385)
B.cL=new A.l(4291356361)
B.cE=new A.l(4289058471)
B.cy=new A.l(4286695300)
B.ct=new A.l(4284922730)
B.co=new A.l(4283215696)
B.cl=new A.l(4282622023)
B.cj=new A.l(4281896508)
B.ch=new A.l(4281236786)
B.cd=new A.l(4279983648)
B.bf=new A.ac([50,B.cR,100,B.cL,200,B.cE,300,B.cy,400,B.ct,500,B.co,600,B.cl,700,B.cj,800,B.ch,900,B.cd],t.m)
B.de=new A.l(4294966759)
B.dd=new A.l(4294965700)
B.dc=new A.l(4294964637)
B.db=new A.l(4294963574)
B.da=new A.l(4294962776)
B.d8=new A.l(4294961979)
B.d0=new A.l(4294826037)
B.d_=new A.l(4294688813)
B.cZ=new A.l(4294551589)
B.cY=new A.l(4294278935)
B.bg=new A.ac([50,B.de,100,B.dd,200,B.dc,300,B.db,400,B.da,500,B.d8,600,B.d0,700,B.d_,800,B.cZ,900,B.cY],t.m)
B.cV=new A.l(4293913577)
B.cO=new A.l(4292332744)
B.cI=new A.l(4290554532)
B.cD=new A.l(4288776319)
B.cB=new A.l(4287458915)
B.cx=new A.l(4286141768)
B.cv=new A.l(4285353025)
B.cr=new A.l(4284301367)
B.cp=new A.l(4283315246)
B.ck=new A.l(4282263331)
B.dI=new A.ac([50,B.cV,100,B.cO,200,B.cI,300,B.cD,400,B.cB,500,B.cx,600,B.cv,700,B.cr,800,B.cp,900,B.ck],t.m)
B.cS=new A.l(4293718001)
B.cM=new A.l(4291811548)
B.cF=new A.l(4289773253)
B.cC=new A.l(4287669422)
B.cw=new A.l(4286091420)
B.cs=new A.l(4284513675)
B.cq=new A.l(4283723386)
B.cn=new A.l(4282735204)
B.ci=new A.l(4281812815)
B.ce=new A.l(4280693304)
B.bh=new A.ac([50,B.cS,100,B.cM,200,B.cF,300,B.cC,400,B.cw,500,B.cs,600,B.cq,700,B.cn,800,B.ci,900,B.ce],t.m)
B.au=new A.ac([B.N,null,B.M,null,B.q,null],A.aa("ac<c4,aw?>"))
B.dD=A.c(s([]),t.s)
B.ew=new A.dv(0,{},B.dD,A.aa("dv<t,@>"))
B.cz=new A.l(4286755327)
B.cm=new A.l(4282682111)
B.cg=new A.l(4280908287)
B.cf=new A.l(4280902399)
B.dK=new A.ac([100,B.cz,200,B.cm,400,B.cg,700,B.cf],t.m)
B.d5=new A.l(4294955392)
B.d3=new A.l(4294945600)
B.d2=new A.l(4294938880)
B.d1=new A.l(4294929664)
B.dM=new A.ac([100,B.d5,200,B.d3,400,B.d2,700,B.d1],t.m)
B.cH=new A.l(4290377418)
B.cu=new A.l(4285132974)
B.cc=new A.l(4278249078)
B.cb=new A.l(4278241363)
B.dL=new A.ac([100,B.cH,200,B.cu,400,B.cc,700,B.cb],t.m)
B.dO=new A.cO(B.dL,4285132974)
B.dg=new A.l(4294967181)
B.df=new A.l(4294967040)
B.d7=new A.l(4294961664)
B.d6=new A.l(4294956544)
B.dN=new A.ac([100,B.dg,200,B.df,400,B.d7,700,B.d6],t.m)
B.dP=new A.cO(B.dN,4294967040)
B.bi=new A.cP(B.bg,4294961979)
B.d9=new A.l(4294962158)
B.d4=new A.l(4294954450)
B.cU=new A.l(4293892762)
B.cQ=new A.l(4293227379)
B.cT=new A.l(4293874512)
B.cW=new A.l(4294198070)
B.cP=new A.l(4293212469)
B.cN=new A.l(4292030255)
B.cJ=new A.l(4291176488)
B.cG=new A.l(4290190364)
B.dJ=new A.ac([50,B.d9,100,B.d4,200,B.cU,300,B.cQ,400,B.cT,500,B.cW,600,B.cP,700,B.cN,800,B.cJ,900,B.cG],t.m)
B.av=new A.cP(B.dJ,4294198070)
B.e7=new A.aN("nonlethal")
B.dG=A.c(s([B.bx,B.e7,B.W]),t.B)
B.dS=new A.X(B.Z,1,B.aY,0,"Fists",B.dG)
B.bj=new A.cQ("wildBoar")
B.dY=new A.cQ("zyborgMelee")
B.dZ=new A.cQ("zyborgRanged")
B.e_=new A.cQ("caveScanner")
B.bl=new A.fC("elementalAffinity")
B.z=new A.i(0,0)
B.ad=new A.dX("small")
B.bn=new A.dX("medium")
B.bo=new A.dX("large")
B.ax=new A.dZ("melee")
B.ay=new A.dZ("ranged")
B.az=new A.dZ("armor")
B.aA=new A.cm("dirt")
B.F=new A.cm("metal")
B.e3=new A.cm("snow")
B.V=new A.af("door")
B.e4=new A.af("grass")
B.aB=new A.af("mechanicalLight")
B.aC=new A.af("light")
B.p=new A.af("none")
B.bu=new A.af("chair")
B.ae=new A.af("chest")
B.bv=new A.af("mechanism")
B.bw=new A.af("tree")
B.i=new A.cY("floor")
B.b=new A.cY("wall")
B.e5=A.qN("v")
B.r=new A.cn("float_1")
B.d=new A.cn("float_2")
B.e6=new A.cn("float_3")
B.aE=new A.cn("float_4")
B.o=new A.cn("texture_1")})();(function staticFields(){$.kK=null
$.bd=0
$.dt=null
$.mq=null
$.nq=null
$.nm=null
$.nx=null
$.l5=null
$.lb=null
$.ma=null
$.d9=null
$.ex=null
$.ey=null
$.m4=!1
$.D=B.j
$.aH=A.c([],t.hf)
$.mA=0
$.mz=0
$.pH=A.bj(["ArrowUp",B.a0,"ArrowDown",B.a2,"ArrowRight",B.a1,"ArrowLeft",B.a3,"q",B.b1," ",B.b4,"0",B.b_,"l",B.b2,"w",B.a0,"a",B.a3,"s",B.a2,"d",B.a1,"Escape",B.b3,"r",B.b0],t.N,t.U)
$.cs=A.lY("engine")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"r0","nC",function(){return A.qq("_$dart_dartClosure")})
s($,"rr","nM",function(){return A.bp(A.kg({
toString:function(){return"$receiver$"}}))})
s($,"rs","nN",function(){return A.bp(A.kg({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"rt","nO",function(){return A.bp(A.kg(null))})
s($,"ru","nP",function(){return A.bp(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rx","nS",function(){return A.bp(A.kg(void 0))})
s($,"ry","nT",function(){return A.bp(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rw","nR",function(){return A.bp(A.mY(null))})
s($,"rv","nQ",function(){return A.bp(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"rA","nV",function(){return A.bp(A.mY(void 0))})
s($,"rz","nU",function(){return A.bp(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rC","me",function(){return A.p9()})
s($,"rN","lE",function(){return A.lf(B.e5)})
s($,"qZ","nB",function(){return{}})
s($,"r4","mc",function(){return B.y.bd(A.lI(),"Opera",0)})
s($,"r3","nF",function(){return!A.O($.mc())&&B.y.bd(A.lI(),"Trident/",0)})
s($,"r2","nE",function(){return B.y.bd(A.lI(),"Firefox",0)})
s($,"r1","nD",function(){return"-"+$.nG()+"-"})
s($,"r5","nG",function(){if(A.O($.nE()))var q="moz"
else if($.nF())q="ms"
else q=A.O($.mc())?"o":"webkit"
return q})
s($,"rh","nL",function(){return A.c([$.ob(),$.oc(),$.od(),$.nZ(),$.o9()],A.aa("r<bl>"))})
s($,"tc","ob",function(){return A.fo(A.eG(4,6,8,4,4,8),new A.lv(),A.c([B.G],t.E),"death_1.mp3",new A.lw(),B.bj,0,4,"Wild Boar",new A.lx())})
s($,"ta","o9",function(){return A.fo(A.eG(4,6,8,4,4,10),new A.lp(),A.c([B.ah],t.E),"death_1.mp3",new A.lq(),B.bj,2,4,"Snow Bear",new A.lr())})
s($,"td","oc",function(){return A.fo(A.eG(4,8,8,4,4,10),new A.ly(),A.c([B.w,B.x,B.A,B.t],t.E),"monster_scream_1.mp3",new A.lz(),B.dY,1,6,"Zyborg",new A.lA())})
s($,"te","od",function(){return A.fo(A.eG(4,8,10,4,4,10),new A.lB(),A.c([B.w,B.x,B.A,B.t],t.E),"monster_scream_1.mp3",new A.lC(),B.dZ,2,6,"Zyborg Ranged",new A.lD())})
s($,"rS","nZ",function(){return A.fo(A.eG(4,6,12,6,4,6),new A.l2(),A.c([B.w,B.x,B.A,B.t],t.E),null,new A.l3(),B.e_,3,6,"Cave Scanner",new A.l4())})
s($,"rV","mf",function(){var q=A.c([A.bP(B.d,"u_resolution"),A.bP(B.r,"u_time"),A.bP(B.d,"u_offset"),A.bP(B.d,"u_origin")],t.o)
return A.aS(A.c([A.mp(35044,A.mI(B.B),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\nuniform vec2 u_origin;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  float dist = distance(snapped_position, (u_origin + vec2(0.5, 0.5)) * vec2(24.0, 36.0)) / 50.0;\n  float rand = -1.0 + random(relative_position) / 2.0;\n  float scale_rate = 0.8 * (u_time);\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(249.0 / 255.0, 168.0 / 255.0, 37.0 / 255.0, scale);\n}\n",q,u.h)})
s($,"rZ","o2",function(){var q=A.c([A.bP(B.d,"u_resolution"),A.bP(B.r,"u_time"),A.bP(B.d,"u_offset"),A.bP(B.d,"u_source"),A.bP(B.d,"u_target")],t.o)
return A.aS(A.c([A.mp(35044,A.mI(B.B),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nuniform vec2 u_source;\nuniform vec2 u_target;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 p0 = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  vec2 p1 = (u_source + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n  vec2 p2 = (u_target + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n\n  if ((p1.x != p2.x) && (p0.x < p1.x && p0.x < p2.x) || (p0.x > p1.x && p0.x > p2.x)) {\n    discard;\n    return;\n  }\n  if ((p1.y != p2.y) && (p0.y < p1.y && p0.y < p2.y) || (p0.y > p1.y && p0.y > p2.y)) {\n    discard;\n    return;\n  }\n\n  float dist = abs( (p2.x - p1.x) * (p1.y - p0.y) - (p1.x - p0.x) * (p2.y - p1.y) ) / sqrt( pow(p2.x - p1.x, 2.0) + pow(p2.y - p1.y, 2.0) );\n  float rand = random(relative_position);\n  float scale_rate = 1.5;\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = 1.0 - smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(0.1, 0.2, 1.0, 0.8 * scale - u_time);\n}\n",q,u.h)})
s($,"rl","df",function(){return new A.jM()})
s($,"r6","nH",function(){return A.fH()})
s($,"rd","md",function(){return A.lU(A.bD(4278780675),A.bD(4279308561),A.bD(4280361249))})
s($,"re","nI",function(){return A.lU(A.bD(4279898637),A.bD(4281017118),A.bD(4282858034))})
s($,"rg","nK",function(){return A.lU(A.bD(4279765786),A.bD(4280096038),A.bD(4282463311))})
s($,"rf","nJ",function(){return $.md()})
s($,"rO","dg",function(){return A.fH()})
r($,"rR","nY",function(){var q,p,o=A.c([],t.q)
for(q=1;q<99;++q)for(p=q;p<39;++p)o.push(A.oP(q,p))
return o})
s($,"rQ","nX",function(){return A.fH()})
s($,"t7","mj",function(){return A.d0(B.ai,new A.lm())})
s($,"t3","mh",function(){return A.d0(B.bB,new A.li())})
s($,"t5","eE",function(){return A.d0(B.aj,new A.lk())})
s($,"t2","o5",function(){return A.d0(B.ai,new A.lh())})
s($,"t4","o6",function(){return A.d0(B.ai,new A.lj())})
s($,"t6","mi",function(){return A.d0(B.aj,new A.ll())})
s($,"t1","o4",function(){return A.d0(B.c4,new A.lg())})
s($,"t0","lF",function(){var q=$.mj(),p=$.mh()
return A.c([q,p,p,$.eE()],t.D)})
s($,"t_","o3",function(){var q=$.o4()
return A.c([q,q,q,q,q,$.eE(),$.mj(),$.mh()],t.D)})
s($,"rY","o1",function(){var q=$.eE()
return A.c([q,q,q,q],t.D)})
s($,"rX","o0",function(){var q=$.eE(),p=$.o5()
return A.c([q,q,q,q,q,q,p,p,p,p],t.D)})
s($,"tb","oa",function(){return A.c([$.o6(),$.eE()],t.D)})
s($,"rP","nW",function(){return new Uint8Array(A.d6(A.c([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t)))})
s($,"rU","o_",function(){var q=A.fH(),p=A.fH(),o=$.dg(),n=t.t,m=A.aa("r<bl>")
n=new A.iW(new A.iF(p,new A.jf(q)),A.c([A.b6(B.G,1,A.bu(o,60)),A.b6(B.w,2,A.bu(o,40)),A.b6(B.w,3,A.bu(o,40)),A.b6(B.w,4,A.bu(o,40)),A.b6(B.x,5,A.bu(o,20)),A.b6(B.x,6,A.bu(o,20)),A.b6(B.x,7,A.bu(o,20)),A.b6(B.t,8,A.bu(o,10)),A.b6(B.t,9,A.bu(o,10)),A.b6(B.t,10,A.bu(o,10)),A.b6(B.A,11,!1)],A.aa("r<fk>")),A.c([2,4,4,4,6,6,6,10,10,10,12],n),A.c([A.aX(o,10,25),A.aX(o,115,125),A.aX(o,115,125),A.aX(o,115,125),A.aX(o,125,135),A.aX(o,125,135),A.aX(o,125,135),A.aX(o,135,145),A.aX(o,135,145),A.aX(o,135,145),A.aX(o,170,200)],n),A.c([A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m)],A.aa("r<m<bl>>")),A.c([0,0,0,0,0,0,0,0,0,0,0],n),A.ad(t.r,A.aa("c0")))
n.dD()
n.dB()
return n})
s($,"rW","mg",function(){return t.cH.a(B.D.bz(t.g.a(A.qn().querySelector("#glCanvas")),"webgl2"))})
s($,"t9","o8",function(){return new A.f1()})
s($,"t8","o7",function(){var q=t.i
return new A.fE(A.mK(0,q),A.mK(0,q))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:A.fp,DataView:A.ch,ArrayBufferView:A.ch,Float64Array:A.cg,Float32Array:A.dN,Int16Array:A.fq,Int32Array:A.fr,Int8Array:A.fs,Uint16Array:A.ft,Uint32Array:A.fu,Uint8ClampedArray:A.cS,CanvasPixelArray:A.cS,Uint8Array:A.dP,HTMLBRElement:A.q,HTMLBaseElement:A.q,HTMLButtonElement:A.q,HTMLContentElement:A.q,HTMLDListElement:A.q,HTMLDataElement:A.q,HTMLDataListElement:A.q,HTMLDetailsElement:A.q,HTMLDialogElement:A.q,HTMLEmbedElement:A.q,HTMLFieldSetElement:A.q,HTMLHRElement:A.q,HTMLHeadElement:A.q,HTMLHeadingElement:A.q,HTMLHtmlElement:A.q,HTMLIFrameElement:A.q,HTMLLIElement:A.q,HTMLLabelElement:A.q,HTMLLegendElement:A.q,HTMLLinkElement:A.q,HTMLMapElement:A.q,HTMLMenuElement:A.q,HTMLMetaElement:A.q,HTMLMeterElement:A.q,HTMLModElement:A.q,HTMLOListElement:A.q,HTMLObjectElement:A.q,HTMLOptGroupElement:A.q,HTMLOptionElement:A.q,HTMLOutputElement:A.q,HTMLParagraphElement:A.q,HTMLParamElement:A.q,HTMLPictureElement:A.q,HTMLPreElement:A.q,HTMLProgressElement:A.q,HTMLQuoteElement:A.q,HTMLScriptElement:A.q,HTMLShadowElement:A.q,HTMLSlotElement:A.q,HTMLSourceElement:A.q,HTMLSpanElement:A.q,HTMLStyleElement:A.q,HTMLTableCaptionElement:A.q,HTMLTableCellElement:A.q,HTMLTableDataCellElement:A.q,HTMLTableHeaderCellElement:A.q,HTMLTableColElement:A.q,HTMLTableElement:A.q,HTMLTableRowElement:A.q,HTMLTableSectionElement:A.q,HTMLTemplateElement:A.q,HTMLTextAreaElement:A.q,HTMLTimeElement:A.q,HTMLTitleElement:A.q,HTMLTrackElement:A.q,HTMLUListElement:A.q,HTMLUnknownElement:A.q,HTMLDirectoryElement:A.q,HTMLFontElement:A.q,HTMLFrameElement:A.q,HTMLFrameSetElement:A.q,HTMLMarqueeElement:A.q,HTMLElement:A.q,AccessibleNodeList:A.is,HTMLAnchorElement:A.eI,HTMLAreaElement:A.eJ,Blob:A.eO,HTMLBodyElement:A.eP,HTMLCanvasElement:A.bZ,CanvasRenderingContext2D:A.cC,CDATASection:A.b0,CharacterData:A.b0,Comment:A.b0,ProcessingInstruction:A.b0,Text:A.b0,CSSPerspective:A.iP,CSSCharsetRule:A.G,CSSConditionRule:A.G,CSSFontFaceRule:A.G,CSSGroupingRule:A.G,CSSImportRule:A.G,CSSKeyframeRule:A.G,MozCSSKeyframeRule:A.G,WebKitCSSKeyframeRule:A.G,CSSKeyframesRule:A.G,MozCSSKeyframesRule:A.G,WebKitCSSKeyframesRule:A.G,CSSMediaRule:A.G,CSSNamespaceRule:A.G,CSSPageRule:A.G,CSSRule:A.G,CSSStyleRule:A.G,CSSSupportsRule:A.G,CSSViewportRule:A.G,CSSStyleDeclaration:A.cG,MSStyleCSSProperties:A.cG,CSS2Properties:A.cG,CSSImageValue:A.aQ,CSSKeywordValue:A.aQ,CSSNumericValue:A.aQ,CSSPositionValue:A.aQ,CSSResourceValue:A.aQ,CSSUnitValue:A.aQ,CSSURLImageValue:A.aQ,CSSStyleValue:A.aQ,CSSMatrixComponent:A.be,CSSRotation:A.be,CSSScale:A.be,CSSSkew:A.be,CSSTranslation:A.be,CSSTransformComponent:A.be,CSSTransformValue:A.iR,CSSUnparsedValue:A.iS,DataTransferItemList:A.iT,HTMLDivElement:A.cH,Document:A.bf,HTMLDocument:A.bf,XMLDocument:A.bf,DOMException:A.bH,ClientRectList:A.dx,DOMRectList:A.dx,DOMRectReadOnly:A.dy,DOMStringList:A.f0,DOMTokenList:A.iU,Element:A.W,AbortPaymentEvent:A.k,AnimationEvent:A.k,AnimationPlaybackEvent:A.k,ApplicationCacheErrorEvent:A.k,BackgroundFetchClickEvent:A.k,BackgroundFetchEvent:A.k,BackgroundFetchFailEvent:A.k,BackgroundFetchedEvent:A.k,BeforeInstallPromptEvent:A.k,BeforeUnloadEvent:A.k,BlobEvent:A.k,CanMakePaymentEvent:A.k,ClipboardEvent:A.k,CloseEvent:A.k,CustomEvent:A.k,DeviceMotionEvent:A.k,DeviceOrientationEvent:A.k,ErrorEvent:A.k,ExtendableEvent:A.k,ExtendableMessageEvent:A.k,FetchEvent:A.k,FontFaceSetLoadEvent:A.k,ForeignFetchEvent:A.k,GamepadEvent:A.k,HashChangeEvent:A.k,InstallEvent:A.k,MediaEncryptedEvent:A.k,MediaKeyMessageEvent:A.k,MediaQueryListEvent:A.k,MediaStreamEvent:A.k,MediaStreamTrackEvent:A.k,MessageEvent:A.k,MIDIConnectionEvent:A.k,MIDIMessageEvent:A.k,MutationEvent:A.k,NotificationEvent:A.k,PageTransitionEvent:A.k,PaymentRequestEvent:A.k,PaymentRequestUpdateEvent:A.k,PopStateEvent:A.k,PresentationConnectionAvailableEvent:A.k,PresentationConnectionCloseEvent:A.k,ProgressEvent:A.k,PromiseRejectionEvent:A.k,PushEvent:A.k,RTCDataChannelEvent:A.k,RTCDTMFToneChangeEvent:A.k,RTCPeerConnectionIceEvent:A.k,RTCTrackEvent:A.k,SecurityPolicyViolationEvent:A.k,SensorErrorEvent:A.k,SpeechRecognitionError:A.k,SpeechRecognitionEvent:A.k,SpeechSynthesisEvent:A.k,StorageEvent:A.k,SyncEvent:A.k,TrackEvent:A.k,TransitionEvent:A.k,WebKitTransitionEvent:A.k,VRDeviceEvent:A.k,VRDisplayEvent:A.k,VRSessionEvent:A.k,MojoInterfaceRequestEvent:A.k,ResourceProgressEvent:A.k,USBConnectionEvent:A.k,IDBVersionChangeEvent:A.k,AudioProcessingEvent:A.k,OfflineAudioCompletionEvent:A.k,WebGLContextEvent:A.k,Event:A.k,InputEvent:A.k,SubmitEvent:A.k,AbsoluteOrientationSensor:A.e,Accelerometer:A.e,AccessibleNode:A.e,AmbientLightSensor:A.e,Animation:A.e,ApplicationCache:A.e,DOMApplicationCache:A.e,OfflineResourceList:A.e,BackgroundFetchRegistration:A.e,BatteryManager:A.e,BroadcastChannel:A.e,CanvasCaptureMediaStreamTrack:A.e,DedicatedWorkerGlobalScope:A.e,EventSource:A.e,FileReader:A.e,FontFaceSet:A.e,Gyroscope:A.e,LinearAccelerationSensor:A.e,Magnetometer:A.e,MediaDevices:A.e,MediaKeySession:A.e,MediaQueryList:A.e,MediaRecorder:A.e,MediaSource:A.e,MediaStream:A.e,MediaStreamTrack:A.e,MessagePort:A.e,MIDIAccess:A.e,MIDIInput:A.e,MIDIOutput:A.e,MIDIPort:A.e,NetworkInformation:A.e,Notification:A.e,OffscreenCanvas:A.e,OrientationSensor:A.e,PaymentRequest:A.e,Performance:A.e,PermissionStatus:A.e,PresentationAvailability:A.e,PresentationConnection:A.e,PresentationConnectionList:A.e,PresentationRequest:A.e,RelativeOrientationSensor:A.e,RemotePlayback:A.e,RTCDataChannel:A.e,DataChannel:A.e,RTCDTMFSender:A.e,RTCPeerConnection:A.e,webkitRTCPeerConnection:A.e,mozRTCPeerConnection:A.e,ScreenOrientation:A.e,Sensor:A.e,ServiceWorker:A.e,ServiceWorkerContainer:A.e,ServiceWorkerGlobalScope:A.e,ServiceWorkerRegistration:A.e,SharedWorker:A.e,SharedWorkerGlobalScope:A.e,SpeechRecognition:A.e,SpeechSynthesis:A.e,SpeechSynthesisUtterance:A.e,VR:A.e,VRDevice:A.e,VRDisplay:A.e,VRSession:A.e,VisualViewport:A.e,WebSocket:A.e,Worker:A.e,WorkerGlobalScope:A.e,WorkerPerformance:A.e,BluetoothDevice:A.e,BluetoothRemoteGATTCharacteristic:A.e,Clipboard:A.e,MojoInterfaceInterceptor:A.e,USB:A.e,IDBDatabase:A.e,IDBOpenDBRequest:A.e,IDBVersionChangeRequest:A.e,IDBRequest:A.e,IDBTransaction:A.e,EventTarget:A.e,File:A.au,FileList:A.f3,FileWriter:A.f4,HTMLFormElement:A.f6,Gamepad:A.av,History:A.je,HTMLCollection:A.c6,HTMLFormControlsCollection:A.c6,HTMLOptionsCollection:A.c6,XMLHttpRequest:A.dE,XMLHttpRequestUpload:A.c7,XMLHttpRequestEventTarget:A.c7,HTMLImageElement:A.cL,HTMLInputElement:A.c8,KeyboardEvent:A.bi,Location:A.jt,HTMLAudioElement:A.cf,HTMLMediaElement:A.cf,MediaList:A.jy,MIDIInputMap:A.fl,MIDIOutputMap:A.fm,MimeType:A.ay,MimeTypeArray:A.fn,MouseEvent:A.ap,DragEvent:A.ap,PointerEvent:A.ap,WheelEvent:A.ap,DocumentFragment:A.u,ShadowRoot:A.u,Attr:A.u,DocumentType:A.u,Node:A.u,NodeList:A.dQ,RadioNodeList:A.dQ,Plugin:A.az,PluginArray:A.fF,RTCStatsReport:A.fM,HTMLSelectElement:A.fO,SourceBuffer:A.ar,SourceBufferList:A.fR,SpeechGrammar:A.aA,SpeechGrammarList:A.fS,SpeechRecognitionResult:A.aB,Storage:A.fW,CSSStyleSheet:A.ae,StyleSheet:A.ae,TextTrack:A.as,TextTrackCue:A.a8,VTTCue:A.a8,TextTrackCueList:A.h_,TextTrackList:A.h0,TimeRanges:A.kd,Touch:A.aD,TouchList:A.h2,TrackDefaultList:A.ke,CompositionEvent:A.b8,FocusEvent:A.b8,TextEvent:A.b8,TouchEvent:A.b8,UIEvent:A.b8,URL:A.kh,HTMLVideoElement:A.d_,VideoTrackList:A.ha,Window:A.d1,DOMWindow:A.d1,CSSRuleList:A.hj,ClientRect:A.e7,DOMRect:A.e7,GamepadList:A.hw,NamedNodeMap:A.ed,MozNamedAttrMap:A.ed,SpeechRecognitionResultList:A.hR,StyleSheetList:A.i_,SVGLength:A.aI,SVGLengthList:A.ff,SVGNumber:A.aK,SVGNumberList:A.fz,SVGPointList:A.jO,SVGStringList:A.fY,SVGAElement:A.n,SVGAnimateElement:A.n,SVGAnimateMotionElement:A.n,SVGAnimateTransformElement:A.n,SVGAnimationElement:A.n,SVGCircleElement:A.n,SVGClipPathElement:A.n,SVGDefsElement:A.n,SVGDescElement:A.n,SVGDiscardElement:A.n,SVGEllipseElement:A.n,SVGFEBlendElement:A.n,SVGFEColorMatrixElement:A.n,SVGFEComponentTransferElement:A.n,SVGFECompositeElement:A.n,SVGFEConvolveMatrixElement:A.n,SVGFEDiffuseLightingElement:A.n,SVGFEDisplacementMapElement:A.n,SVGFEDistantLightElement:A.n,SVGFEFloodElement:A.n,SVGFEFuncAElement:A.n,SVGFEFuncBElement:A.n,SVGFEFuncGElement:A.n,SVGFEFuncRElement:A.n,SVGFEGaussianBlurElement:A.n,SVGFEImageElement:A.n,SVGFEMergeElement:A.n,SVGFEMergeNodeElement:A.n,SVGFEMorphologyElement:A.n,SVGFEOffsetElement:A.n,SVGFEPointLightElement:A.n,SVGFESpecularLightingElement:A.n,SVGFESpotLightElement:A.n,SVGFETileElement:A.n,SVGFETurbulenceElement:A.n,SVGFilterElement:A.n,SVGForeignObjectElement:A.n,SVGGElement:A.n,SVGGeometryElement:A.n,SVGGraphicsElement:A.n,SVGImageElement:A.n,SVGLineElement:A.n,SVGLinearGradientElement:A.n,SVGMarkerElement:A.n,SVGMaskElement:A.n,SVGMetadataElement:A.n,SVGPathElement:A.n,SVGPatternElement:A.n,SVGPolygonElement:A.n,SVGPolylineElement:A.n,SVGRadialGradientElement:A.n,SVGRectElement:A.n,SVGScriptElement:A.n,SVGSetElement:A.n,SVGStopElement:A.n,SVGStyleElement:A.n,SVGElement:A.n,SVGSVGElement:A.n,SVGSwitchElement:A.n,SVGSymbolElement:A.n,SVGTSpanElement:A.n,SVGTextContentElement:A.n,SVGTextElement:A.n,SVGTextPathElement:A.n,SVGTextPositioningElement:A.n,SVGTitleElement:A.n,SVGUseElement:A.n,SVGViewElement:A.n,SVGGradientElement:A.n,SVGComponentTransferFunctionElement:A.n,SVGFEDropShadowElement:A.n,SVGMPathElement:A.n,SVGTransform:A.aM,SVGTransformList:A.h3,AudioBuffer:A.aZ,AudioBufferSourceNode:A.dr,AudioContext:A.bY,webkitAudioContext:A.bY,AnalyserNode:A.F,RealtimeAnalyserNode:A.F,AudioDestinationNode:A.F,AudioWorkletNode:A.F,BiquadFilterNode:A.F,ChannelMergerNode:A.F,AudioChannelMerger:A.F,ChannelSplitterNode:A.F,AudioChannelSplitter:A.F,ConvolverNode:A.F,DelayNode:A.F,DynamicsCompressorNode:A.F,IIRFilterNode:A.F,MediaElementAudioSourceNode:A.F,MediaStreamAudioDestinationNode:A.F,MediaStreamAudioSourceNode:A.F,PannerNode:A.F,AudioPannerNode:A.F,webkitAudioPannerNode:A.F,ScriptProcessorNode:A.F,JavaScriptAudioNode:A.F,StereoPannerNode:A.F,WaveShaperNode:A.F,AudioNode:A.F,AudioParam:A.eK,AudioParamMap:A.eL,ConstantSourceNode:A.bc,OscillatorNode:A.bc,Oscillator:A.bc,AudioScheduledSourceNode:A.bc,AudioTrackList:A.eM,BaseAudioContext:A.ds,GainNode:A.cK,AudioGainNode:A.cK,OfflineAudioContext:A.fA,WebGLBuffer:A.eQ,WebGLFramebuffer:A.f7,WebGLProgram:A.fG,WebGL2RenderingContext:A.cV,WebGLTexture:A.bo,WebGLUniformLocation:A.h4,WebGLVertexArrayObject:A.h9,SQLResultSetRowList:A.fT})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,AudioParam:true,AudioParamMap:true,ConstantSourceNode:true,OscillatorNode:true,Oscillator:true,AudioScheduledSourceNode:false,AudioTrackList:true,BaseAudioContext:false,GainNode:true,AudioGainNode:true,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,SQLResultSetRowList:true})
A.cR.$nativeSuperclassTag="ArrayBufferView"
A.ee.$nativeSuperclassTag="ArrayBufferView"
A.ef.$nativeSuperclassTag="ArrayBufferView"
A.cg.$nativeSuperclassTag="ArrayBufferView"
A.eg.$nativeSuperclassTag="ArrayBufferView"
A.eh.$nativeSuperclassTag="ArrayBufferView"
A.dO.$nativeSuperclassTag="ArrayBufferView"
A.ej.$nativeSuperclassTag="EventTarget"
A.ek.$nativeSuperclassTag="EventTarget"
A.eo.$nativeSuperclassTag="EventTarget"
A.ep.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.ld
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

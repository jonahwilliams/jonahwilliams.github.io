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
a[c]=function(){a[c]=function(){A.qH(b)}
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
if(a[b]!==s)A.qI(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=b.fs[0]
if(a)return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"(receiver) {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(receiver, this);"+"}")(b,A.m7,null)
else return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"() {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(this, null);"+"}")(b,A.m7,null)}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.m7(a).prototype
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
a(hunkHelpers,v,w,$)}var A={lO:function lO(){},
mz(a){return new A.cb("Field '"+a+"' has been assigned during initialization.")},
mA(a){return new A.cb("Field '"+a+"' has not been initialized.")},
bK(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lV(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
p1(a,b,c){return A.lV(A.bK(A.bK(c,a),b))},
ez(a,b,c){return a},
mR(a,b,c,d){A.jT(b,"start")
if(c!=null){A.jT(c,"end")
if(b>c)A.R(A.cj(b,0,c,"start",null))}return new A.e_(a,b,c,d.i("e_<0>"))},
mD(a,b,c,d){if(t.gt.b(a))return new A.dy(a,b,c.i("@<0>").B(d).i("dy<1,2>"))
return new A.cd(a,b,c.i("@<0>").B(d).i("cd<1,2>"))},
oB(){return new A.bm("No element")},
oD(){return new A.bm("Too many elements")},
oC(){return new A.bm("Too few elements")},
oZ(a,b,c){A.fQ(a,0,J.aj(a)-1,b,c)},
fQ(a,b,c,d,e){if(c-b<=32)A.oY(a,b,c,d,e)
else A.oX(a,b,c,d,e)},
oY(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.at(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.S()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
oX(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.e.M(a5-a4+1,6),i=a4+j,h=a5-j,g=B.e.M(a4+a5,2),f=g-j,e=g+j,d=J.at(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.S()
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
A.fQ(a3,a4,r-2,a6,a7)
A.fQ(a3,q+2,a5,a6,a7)
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
break}}A.fQ(a3,r,q,a6,a7)}else A.fQ(a3,r,q,a6,a7)},
cb:function cb(a){this.a=a},
jZ:function jZ(){},
o:function o(){},
aS:function aS(){},
e_:function e_(a,b,c,d){var _=this
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
cd:function cd(a,b,c){this.a=a
this.b=b
this.$ti=c},
dy:function dy(a,b,c){this.a=a
this.b=b
this.$ti=c},
dK:function dK(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
dL:function dL(a,b,c){this.a=a
this.b=b
this.$ti=c},
aE:function aE(a,b,c){this.a=a
this.b=b
this.$ti=c},
e2:function e2(a,b,c){this.a=a
this.b=b
this.$ti=c},
an:function an(){},
ox(a){if(typeof a=="number")return B.c.gt(a)
if(t.ha.b(a))return A.ci(a)
return A.lf(a)},
oy(a){return new A.ja(a)},
nw(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
qv(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
z(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cw(a)
return s},
ci(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
jP(a){return A.oN(a)},
oN(a){var s,r,q,p
if(a instanceof A.v)return A.ai(A.aY(a),null)
if(J.dd(a)===B.dq||t.cx.b(a)){s=B.aM(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.ai(A.aY(a),null)},
cT(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oU(a){var s=A.cT(a).getUTCFullYear()+0
return s},
oS(a){var s=A.cT(a).getUTCMonth()+1
return s},
oO(a){var s=A.cT(a).getUTCDate()+0
return s},
oP(a){var s=A.cT(a).getUTCHours()+0
return s},
oR(a){var s=A.cT(a).getUTCMinutes()+0
return s},
oT(a){var s=A.cT(a).getUTCSeconds()+0
return s},
oQ(a){var s=A.cT(a).getUTCMilliseconds()+0
return s},
ct(a){throw A.d(A.nj(a))},
b(a,b){if(a==null)J.aj(a)
throw A.d(A.dc(a,b))},
dc(a,b){var s,r="index"
if(!A.m4(b))return new A.bb(!0,b,r,null)
s=A.I(J.aj(a))
if(b<0||b>=s)return A.P(b,a,r,null,s)
return A.mJ(b,r)},
nj(a){return new A.bb(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.fz()
s=new Error()
s.dartException=a
r=A.qJ
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qJ(){return J.cw(this.dartException)},
R(a){throw A.d(a)},
B(a){throw A.d(A.bE(a))},
bp(a){var s,r,q,p,o,n
a=A.qD(a.replace(String({}),"$receiver$"))
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
mU(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lP(a,b){var s=b==null,r=s?null:b.method
return new A.ff(a,r,s?null:b.receiver)},
bA(a){if(a==null)return new A.jK(a)
if(a instanceof A.dz)return A.bW(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.bW(a,a.dartException)
return A.q6(a)},
bW(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.ca(r,16)&8191)===10)switch(q){case 438:return A.bW(a,A.lP(A.z(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.z(s)+" (Error "+q+")"
return A.bW(a,new A.dQ(p,e))}}if(a instanceof TypeError){o=$.nI()
n=$.nJ()
m=$.nK()
l=$.nL()
k=$.nO()
j=$.nP()
i=$.nN()
$.nM()
h=$.nR()
g=$.nQ()
f=o.W(s)
if(f!=null)return A.bW(a,A.lP(A.ah(s),f))
else{f=n.W(s)
if(f!=null){f.method="call"
return A.bW(a,A.lP(A.ah(s),f))}else{f=m.W(s)
if(f==null){f=l.W(s)
if(f==null){f=k.W(s)
if(f==null){f=j.W(s)
if(f==null){f=i.W(s)
if(f==null){f=l.W(s)
if(f==null){f=h.W(s)
if(f==null){f=g.W(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.ah(s)
return A.bW(a,new A.dQ(s,f==null?e:f.method))}}}return A.bW(a,new A.h7(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.dZ()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.bW(a,new A.bb(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.dZ()
return a},
by(a){var s
if(a instanceof A.dz)return a.b
if(a==null)return new A.ek(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.ek(a)},
lf(a){if(a==null||typeof a!="object")return J.cv(a)
else return A.ci(a)},
nl(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
qt(a,b,c,d,e,f){t.gY.a(a)
switch(A.I(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.lL("Unsupported number of arguments for wrapped closure"))},
ba(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.qt)
a.$identity=s
return s},
om(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.fW().constructor.prototype):Object.create(new A.cB(null,null).constructor.prototype)
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
if(q)p=A.ms(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.oi(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.ms(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
oi(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.og)}throw A.d("Error in functionType of tearoff")},
oj(a,b,c,d){var s=A.mq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ms(a,b,c,d){var s,r,q,p,o,n="receiver"
if(c)return A.ol(a,b,d)
s=b.length
r=d||s>=27
if(r)return A.oj(s,d,a,b)
if(s===0){r=$.bd
if(typeof r!=="number")return r.v()
$.bd=r+1
q="self"+r
r="return function(){var "+q+" = this."
p=$.ds
return new Function(r+(p==null?$.ds=A.iI(n):p)+";return "+q+"."+a+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
r=$.bd
if(typeof r!=="number")return r.v()
$.bd=r+1
o+=r
r="return function("+o+"){return this."
p=$.ds
return new Function(r+(p==null?$.ds=A.iI(n):p)+"."+a+"("+o+");}")()},
ok(a,b,c,d){var s=A.mq,r=A.oh
switch(b?-1:a){case 0:throw A.d(new A.fO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
ol(a,b,c){var s,r,q,p,o,n=$.mp
if(n==null)n=$.mp=A.iI("interceptor")
s=$.ds
if(s==null)s=$.ds=A.iI("receiver")
r=b.length
q=c||r>=28
if(q)return A.ok(r,c,a,b)
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
m7(a){return A.om(a)},
og(a,b){return A.kT(v.typeUniverse,A.aY(a.a),b)},
mq(a){return a.a},
oh(a){return a.b},
iI(a){var s,r,q,p=new A.cB("receiver","interceptor"),o=J.my(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.cy("Field name "+a+" not found.",null))},
O(a){if(a==null)A.q7("boolean expression must not be null")
return a},
q7(a){throw A.d(new A.he(a))},
qH(a){throw A.d(new A.eY(a))},
qn(a){return v.getIsolateTag(a)},
rQ(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qy(a){var s,r,q,p,o,n=A.ah($.nm.$1(a)),m=$.l5[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lb[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.pv($.ni.$2(a,n))
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
return o.i}if(p==="+")return A.ns(a,s)
if(p==="*")throw A.d(A.lW(n))
if(v.leafTags[n]===true){o=A.le(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.ns(a,s)},
ns(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ma(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
le(a){return J.ma(a,!1,null,!!a.$ix)},
qz(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.le(s)
else return J.ma(s,c,null,null)},
qr(){if(!0===$.m9)return
$.m9=!0
A.qs()},
qs(){var s,r,q,p,o,n,m,l
$.l5=Object.create(null)
$.lb=Object.create(null)
A.qq()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nt.$1(o)
if(n!=null){m=A.qz(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qq(){var s,r,q,p,o,n,m=B.bY()
m=A.db(B.bZ,A.db(B.c_,A.db(B.aN,A.db(B.aN,A.db(B.c0,A.db(B.c1,A.db(B.c2(B.aM),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nm=new A.l8(p)
$.ni=new A.l9(o)
$.nt=new A.la(n)},
db(a,b){return a(b)||b},
qG(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qD(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cF:function cF(){},
du:function du(a,b,c,d){var _=this
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
dQ:function dQ(a,b){this.a=a
this.b=b},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a){this.a=a},
jK:function jK(a){this.a=a},
dz:function dz(a,b){this.a=a
this.b=b},
ek:function ek(a){this.a=a
this.b=null},
c0:function c0(){},
eT:function eT(){},
eU:function eU(){},
h_:function h_(){},
fW:function fW(){},
cB:function cB(a,b){this.a=a
this.b=b},
fO:function fO(a){this.a=a},
he:function he(a){this.a=a},
aw:function aw(a){var _=this
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
dH:function dH(a,b){this.a=a
this.$ti=b},
dI:function dI(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
la:function la(a){this.a=a},
qI(a){return A.R(A.mz(a))},
lX(a){var s=new A.ku(a)
return s.b=s},
aX(a,b){if(a===$)throw A.d(A.mA(b))
return a},
d8(a,b){if(a!==$)throw A.d(A.mz(b))},
ku:function ku(a){this.a=a
this.b=null},
n7(a,b,c){},
d6(a){return a},
mE(a){return new Float32Array(A.d6(a))},
jH(a,b,c){A.n7(a,b,c)
return new Float32Array(a,b,c)},
mF(a,b,c){var s
A.n7(a,b,c)
s=new Uint8Array(a,b,c)
return s},
bt(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.dc(b,a))},
fq:function fq(){},
cg:function cg(){},
cR:function cR(){},
cf:function cf(){},
dN:function dN(){},
dM:function dM(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
cS:function cS(){},
dO:function dO(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
mL(a,b){var s=b.c
return s==null?b.c=A.m1(a,b.z,!0):s},
mK(a,b){var s=b.c
return s==null?b.c=A.es(a,"ao",[b.z]):s},
mM(a){var s=a.y
if(s===6||s===7||s===8)return A.mM(a.z)
return s===11||s===12},
oW(a){return a.cy},
aa(a){return A.ia(v.typeUniverse,a,!1)},
bV(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.bV(a,s,a0,a1)
if(r===s)return b
return A.n3(a,r,!0)
case 7:s=b.z
r=A.bV(a,s,a0,a1)
if(r===s)return b
return A.m1(a,r,!0)
case 8:s=b.z
r=A.bV(a,s,a0,a1)
if(r===s)return b
return A.n2(a,r,!0)
case 9:q=b.Q
p=A.ey(a,q,a0,a1)
if(p===q)return b
return A.es(a,b.z,p)
case 10:o=b.z
n=A.bV(a,o,a0,a1)
m=b.Q
l=A.ey(a,m,a0,a1)
if(n===o&&l===m)return b
return A.m_(a,n,l)
case 11:k=b.z
j=A.bV(a,k,a0,a1)
i=b.Q
h=A.q3(a,i,a0,a1)
if(j===k&&h===i)return b
return A.n1(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.ey(a,g,a0,a1)
o=b.z
n=A.bV(a,o,a0,a1)
if(f===g&&n===o)return b
return A.m0(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.ix("Attempted to substitute unexpected RTI kind "+c))}},
ey(a,b,c,d){var s,r,q,p,o=b.length,n=A.kV(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bV(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
q4(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.kV(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bV(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
q3(a,b,c,d){var s,r=b.a,q=A.ey(a,r,c,d),p=b.b,o=A.ey(a,p,c,d),n=b.c,m=A.q4(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.hw()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
qf(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.qo(s)
return a.$S()}return null},
nn(a,b){var s
if(A.mM(b))if(a instanceof A.c0){s=A.qf(a)
if(s!=null)return s}return A.aY(a)},
aY(a){var s
if(a instanceof A.v){s=a.$ti
return s!=null?s:A.m2(a)}if(Array.isArray(a))return A.a4(a)
return A.m2(J.dd(a))},
a4(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
C(a){var s=a.$ti
return s!=null?s:A.m2(a)},
m2(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.pL(a,s)},
pL(a,b){var s=a instanceof A.c0?a.__proto__.__proto__.constructor:b,r=A.ps(v.typeUniverse,s.name)
b.$ccache=r
return r},
qo(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.ia(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
qi(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.eq(a)
q=A.ia(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.eq(q):p},
qK(a){return A.qi(A.ia(v.typeUniverse,a,!1))},
pK(a){var s,r,q,p,o=this
if(o===t.K)return A.d7(o,a,A.pP)
if(!A.bz(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.d7(o,a,A.pS)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.m4
else if(r===t.i||r===t.cZ)q=A.pO
else if(r===t.N)q=A.pQ
else q=r===t.k4?A.kY:null
if(q!=null)return A.d7(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.qw)){o.r="$i"+p
if(p==="m")return A.d7(o,a,A.pN)
return A.d7(o,a,A.pR)}}else if(s===7)return A.d7(o,a,A.pI)
return A.d7(o,a,A.pG)},
d7(a,b,c){a.b=c
return a.b(b)},
pJ(a){var s,r=this,q=A.pF
if(!A.bz(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.pw
else if(r===t.K)q=A.pu
else{s=A.eA(r)
if(s)q=A.pH}r.a=q
return r.a(a)},
kZ(a){var s,r=a.y
if(!A.bz(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&A.kZ(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pG(a){var s=this
if(a==null)return A.kZ(s)
return A.Q(v.typeUniverse,A.nn(a,s),null,s,null)},
pI(a){if(a==null)return!0
return this.z.b(a)},
pR(a){var s,r=this
if(a==null)return A.kZ(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dd(a)[s]},
pN(a){var s,r=this
if(a==null)return A.kZ(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dd(a)[s]},
pF(a){var s,r=this
if(a==null){s=A.eA(r)
if(s)return a}else if(r.b(a))return a
A.nb(a,r)},
pH(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.nb(a,s)},
nb(a,b){throw A.d(A.n0(A.mW(a,A.nn(a,b),A.ai(b,null))))},
qe(a,b,c,d){var s=null
if(A.Q(v.typeUniverse,a,s,b,s))return a
throw A.d(A.n0("The type argument '"+A.ai(a,s)+"' is not a subtype of the type variable bound '"+A.ai(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
mW(a,b,c){var s=A.f2(a),r=A.ai(b==null?A.aY(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
n0(a){return new A.er("TypeError: "+a)},
ag(a,b){return new A.er("TypeError: "+A.mW(a,null,b))},
pP(a){return a!=null},
pu(a){if(a!=null)return a
throw A.d(A.ag(a,"Object"))},
pS(a){return!0},
pw(a){return a},
kY(a){return!0===a||!1===a},
rA(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.ag(a,"bool"))},
rC(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.ag(a,"bool"))},
rB(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.ag(a,"bool?"))},
n6(a){if(typeof a=="number")return a
throw A.d(A.ag(a,"double"))},
rE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ag(a,"double"))},
rD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ag(a,"double?"))},
m4(a){return typeof a=="number"&&Math.floor(a)===a},
I(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.ag(a,"int"))},
rG(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.ag(a,"int"))},
rF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.ag(a,"int?"))},
pO(a){return typeof a=="number"},
aV(a){if(typeof a=="number")return a
throw A.d(A.ag(a,"num"))},
rI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ag(a,"num"))},
rH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ag(a,"num?"))},
pQ(a){return typeof a=="string"},
ah(a){if(typeof a=="string")return a
throw A.d(A.ag(a,"String"))},
rJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.ag(a,"String"))},
pv(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.ag(a,"String?"))},
q_(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.ai(a[q],b)
return s},
nc(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.c([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.l(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.b(a5,j)
m=B.z.v(m,a5[j])
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
if(l===9){p=A.q5(a.z)
o=a.Q
return o.length>0?p+("<"+A.q_(o,b)+">"):p}if(l===11)return A.nc(a,b,null)
if(l===12)return A.nc(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
q5(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
pt(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ps(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.ia(a,b,!1)
else if(typeof m=="number"){s=m
r=A.et(a,5,"#")
q=A.kV(s)
for(p=0;p<s;++p)q[p]=r
o=A.es(a,b,q)
n[b]=o
return o}else return m},
pq(a,b){return A.n4(a.tR,b)},
pp(a,b){return A.n4(a.eT,b)},
ia(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.mZ(A.mX(a,null,b,c))
r.set(b,s)
return s},
kT(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.mZ(A.mX(a,b,c,!0))
q.set(c,r)
return r},
pr(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.m_(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bU(a,b){b.a=A.pJ
b.b=A.pK
return b},
et(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aT(null,null)
s.y=b
s.cy=c
r=A.bU(a,s)
a.eC.set(c,r)
return r},
n3(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.pn(a,b,r,c)
a.eC.set(r,s)
return s},
pn(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bz(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.aT(null,null)
q.y=6
q.z=b
q.cy=c
return A.bU(a,q)},
m1(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.pm(a,b,r,c)
a.eC.set(r,s)
return s},
pm(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.bz(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.eA(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.eA(q.z))return q
else return A.mL(a,b)}}p=new A.aT(null,null)
p.y=7
p.z=b
p.cy=c
return A.bU(a,p)},
n2(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.pk(a,b,r,c)
a.eC.set(r,s)
return s},
pk(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bz(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.es(a,"ao",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.aT(null,null)
q.y=8
q.z=b
q.cy=c
return A.bU(a,q)},
po(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aT(null,null)
s.y=13
s.z=b
s.cy=q
r=A.bU(a,s)
a.eC.set(q,r)
return r},
i9(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pj(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
es(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.i9(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aT(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.bU(a,r)
a.eC.set(p,q)
return q},
m_(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.i9(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aT(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.bU(a,o)
a.eC.set(q,n)
return n},
n1(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.i9(m)
if(j>0){s=l>0?",":""
r=A.i9(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.pj(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aT(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.bU(a,o)
a.eC.set(q,r)
return r},
m0(a,b,c,d){var s,r=b.cy+("<"+A.i9(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.pl(a,b,c,r,d)
a.eC.set(r,s)
return s},
pl(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.kV(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.bV(a,b,r,0)
m=A.ey(a,c,r,0)
return A.m0(a,n,m,c!==m)}}l=new A.aT(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.bU(a,l)},
mX(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mZ(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.pd(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.mY(a,r,h,g,!1)
else if(q===46)r=A.mY(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.bS(a.u,a.e,g.pop()))
break
case 94:g.push(A.po(a.u,g.pop()))
break
case 35:g.push(A.et(a.u,5,"#"))
break
case 64:g.push(A.et(a.u,2,"@"))
break
case 126:g.push(A.et(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.lZ(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.es(p,n,o))
else{m=A.bS(p,a.e,n)
switch(m.y){case 11:g.push(A.m0(p,m,o,a.n))
break
default:g.push(A.m_(p,m,o))
break}}break
case 38:A.pe(a,g)
break
case 42:p=a.u
g.push(A.n3(p,A.bS(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.m1(p,A.bS(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.n2(p,A.bS(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.hw()
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
A.lZ(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.n1(p,A.bS(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.lZ(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.pg(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.bS(a.u,a.e,i)},
pd(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mY(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.pt(s,o.z)[p]
if(n==null)A.R('No "'+p+'" in "'+A.oW(o)+'"')
d.push(A.kT(s,o,n))}else d.push(p)
return m},
pe(a,b){var s=b.pop()
if(0===s){b.push(A.et(a.u,1,"0&"))
return}if(1===s){b.push(A.et(a.u,4,"1&"))
return}throw A.d(A.ix("Unexpected extended operation "+A.z(s)))},
bS(a,b,c){if(typeof c=="string")return A.es(a,c,a.sEA)
else if(typeof c=="number")return A.pf(a,b,c)
else return c},
lZ(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bS(a,b,c[s])},
pg(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bS(a,b,c[s])},
pf(a,b,c){var s,r,q=b.y
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
if(p===6){s=A.mL(a,d)
return A.Q(a,b,c,s,e)}if(r===8){if(!A.Q(a,b.z,c,d,e))return!1
return A.Q(a,A.mK(a,b),c,d,e)}if(r===7){s=A.Q(a,t.P,c,d,e)
return s&&A.Q(a,b.z,c,d,e)}if(p===8){if(A.Q(a,b,c,d.z,e))return!0
return A.Q(a,b,c,A.mK(a,d),e)}if(p===7){s=A.Q(a,b,c,t.P,e)
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
if(!A.Q(a,k,c,j,e)||!A.Q(a,j,e,k,c))return!1}return A.nd(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.nd(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.pM(a,b,c,d,e)}return!1},
nd(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
pM(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.kT(a,b,r[o])
return A.n5(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.n5(a,n,null,c,m,e)},
n5(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.Q(a,r,d,q,f))return!1}return!0},
eA(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.bz(a))if(r!==7)if(!(r===6&&A.eA(a.z)))s=r===8&&A.eA(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qw(a){var s
if(!A.bz(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bz(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.iD},
n4(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
kV(a){return a>0?new Array(a):v.typeUniverse.sEA},
aT:function aT(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
hw:function hw(){this.c=this.b=this.a=null},
eq:function eq(a){this.a=a},
hs:function hs(){},
er:function er(a){this.a=a},
p6(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.q8()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.ba(new A.kr(q),1)).observe(s,{childList:true})
return new A.kq(q,s,r)}else if(self.setImmediate!=null)return A.q9()
return A.qa()},
p7(a){self.scheduleImmediate(A.ba(new A.ks(t.M.a(a)),0))},
p8(a){self.setImmediate(A.ba(new A.kt(t.M.a(a)),0))},
p9(a){t.M.a(a)
A.ph(0,a)},
mS(a,b){var s=B.e.M(a.a,1000)
return A.pi(s<0?0:s,b)},
ph(a,b){var s=new A.ep(!0)
s.de(a,b)
return s},
pi(a,b){var s=new A.ep(!1)
s.df(a,b)
return s},
bv(a){return new A.hf(new A.H($.D,a.i("H<0>")),a.i("hf<0>"))},
bs(a,b){a.$2(0,null)
b.b=!0
return b.a},
a5(a,b){A.px(a,b)},
br(a,b){b.a0(0,a)},
bq(a,b){b.be(A.bA(a),A.by(a))},
px(a,b){var s,r,q=new A.kW(b),p=new A.kX(b)
if(a instanceof A.H)a.cc(q,p,t.z)
else{s=t.z
if(t.h.b(a))a.aM(q,p,s)
else{r=new A.H($.D,t.f)
r.a=8
r.c=a
r.cc(q,p,s)}}},
bw(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.D.br(new A.l0(s),t.H,t.S,t.z)},
iy(a,b){var s=A.ez(a,"error",t.K)
return new A.dn(s,b==null?A.lH(a):b)},
lH(a){var s
if(t.fz.b(a)){s=a.gau()
if(s!=null)return s}return B.c5},
ov(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=null,e=!1,d=b.i("H<m<0>>"),c=new A.H($.D,d)
g.a=null
g.b=0
s=A.lX("error")
r=A.lX("stackTrace")
q=new A.j8(g,f,e,c,s,r)
try{for(l=a.length,k=t.P,j=0,i=0;j<a.length;a.length===l||(0,A.B)(a),++j){p=a[j]
o=i
p.aM(new A.j7(g,o,c,f,e,s,r,b),q,k)
i=++g.b}if(i===0){l=c
l.am(A.c([],b.i("r<0>")))
return l}g.a=A.b5(i,null,!1,b.i("0?"))}catch(h){n=A.bA(h)
m=A.by(h)
if(g.b===0||A.O(e)){l=n
r=m
A.ez(l,"error",t.K)
$.D!==B.j
if(r==null)r=A.lH(l)
d=new A.H($.D,d)
d.aV(l,r)
return d}else{s.b=n
r.b=m}}return c},
kA(a,b){var s,r,q
for(s=t.f;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.az()
b.aX(a)
A.d4(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.c6(q)}},
d4(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.h;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.im(l.a,l.b)}return}p.a=a0
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
A.im(i.a,i.b)
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
a0=e.aA(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.kA(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.aA(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
pY(a,b){var s
if(t.ng.b(a))return b.br(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.mn(a,"onError",u.c))},
pV(){var s,r
for(s=$.d9;s!=null;s=$.d9){$.ex=null
r=s.b
$.d9=r
if(r==null)$.ew=null
s.a.$0()}},
q2(){$.m3=!0
try{A.pV()}finally{$.ex=null
$.m3=!1
if($.d9!=null)$.md().$1(A.nk())}},
ng(a){var s=new A.hg(a),r=$.ew
if(r==null){$.d9=$.ew=s
if(!$.m3)$.md().$1(A.nk())}else $.ew=r.b=s},
q0(a){var s,r,q,p=$.d9
if(p==null){A.ng(a)
$.ex=$.ew
return}s=new A.hg(a)
r=$.ex
if(r==null){s.b=p
$.d9=$.ex=s}else{q=r.b
s.b=q
$.ex=r.b=s
if(q==null)$.ew=s}},
nu(a){var s=null,r=$.D
if(B.j===r){A.da(s,s,B.j,a)
return}A.da(s,s,r,t.M.a(r.ck(a)))},
rm(a,b){A.ez(a,"stream",t.K)
return new A.hX(b.i("hX<0>"))},
mP(a){return new A.d2(null,null,null,a.i("d2<0>"))},
m6(a){return},
pa(a,b){if(b==null)b=A.qc()
if(t.fQ.b(b))return a.br(b,t.z,t.K,t.l)
if(t.i6.b(b))return t.y.a(b)
throw A.d(A.cy("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
pX(a,b){A.im(a,b)},
pW(){},
p2(a,b){var s=$.D
if(s===B.j)return A.mS(a,t.my.a(b))
return A.mS(a,t.my.a(s.cl(b,t.hU)))},
im(a,b){A.q0(new A.l_(a,b))},
ne(a,b,c,d,e){var s,r=$.D
if(r===c)return d.$0()
$.D=c
s=r
try{r=d.$0()
return r}finally{$.D=s}},
nf(a,b,c,d,e,f,g){var s,r=$.D
if(r===c)return d.$1(e)
$.D=c
s=r
try{r=d.$1(e)
return r}finally{$.D=s}},
pZ(a,b,c,d,e,f,g,h,i){var s,r=$.D
if(r===c)return d.$2(e,f)
$.D=c
s=r
try{r=d.$2(e,f)
return r}finally{$.D=s}},
da(a,b,c,d){t.M.a(d)
if(B.j!==c)d=c.ck(d)
A.ng(d)},
kr:function kr(a){this.a=a},
kq:function kq(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
ep:function ep(a){this.a=a
this.b=null
this.c=0},
kS:function kS(a,b){this.a=a
this.b=b},
kR:function kR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hf:function hf(a,b){this.a=a
this.b=!1
this.$ti=b},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
l0:function l0(a){this.a=a},
dn:function dn(a,b){this.a=a
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
e5:function e5(){},
aN:function aN(a,b){this.a=a
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
hg:function hg(a){this.a=a
this.b=null},
ck:function ck(){},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(a,b){this.a=a
this.b=b},
bn:function bn(){},
el:function el(){},
kQ:function kQ(a){this.a=a},
hh:function hh(){},
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
e4:function e4(){},
em:function em(){},
hn:function hn(){},
cn:function cn(a,b){this.b=a
this.a=null
this.$ti=b},
bT:function bT(){},
kN:function kN(a,b){this.a=a
this.b=b},
b9:function b9(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
hX:function hX(a){this.$ti=a},
eu:function eu(){},
l_:function l_(a,b){this.a=a
this.b=b},
hO:function hO(){},
kO:function kO(a,b){this.a=a
this.b=b},
kP:function kP(a,b,c){this.a=a
this.b=b
this.c=c},
lQ(a,b,c,d){if(b==null){if(a==null)return new A.aw(c.i("@<0>").B(d).i("aw<1,2>"))}else if(a==null)a=A.qh()
return A.pc(A.qg(),a,b,c,d)},
bj(a,b,c){return b.i("@<0>").B(c).i("jo<1,2>").a(A.nl(a,new A.aw(b.i("@<0>").B(c).i("aw<1,2>"))))},
ad(a,b){return new A.aw(a.i("@<0>").B(b).i("aw<1,2>"))},
pc(a,b,c,d,e){var s=c!=null?c:new A.kL(d)
return new A.e9(a,b,s,d.i("@<0>").B(e).i("e9<1,2>"))},
jr(a){return new A.ea(a.i("ea<0>"))},
lY(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
pC(a,b){return J.T(a,b)},
pD(a){return J.cv(a)},
mx(a,b,c){var s,r
if(A.m5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.aF,a)
try{A.pT(a,s)}finally{if(0>=$.aF.length)return A.b($.aF,-1)
$.aF.pop()}r=A.mQ(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
lN(a,b,c){var s,r
if(A.m5(a))return b+"..."+c
s=new A.fY(b)
B.a.l($.aF,a)
try{r=s
r.a=A.mQ(r.a,a,", ")}finally{if(0>=$.aF.length)return A.b($.aF,-1)
$.aF.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
m5(a){var s,r
for(s=$.aF.length,r=0;r<s;++r)if(a===$.aF[r])return!0
return!1},
pT(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
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
oI(a,b,c){var s=A.lQ(null,null,b,c)
a.C(0,new A.jq(s,b,c))
return s},
mB(a,b,c){var s=A.lQ(null,null,b,c)
s.a_(0,a)
return s},
lS(a){var s,r={}
if(A.m5(a))return"{...}"
s=new A.fY("")
try{B.a.l($.aF,a)
s.a+="{"
r.a=!0
J.oc(a,new A.ju(r,s))
s.a+="}"}finally{if(0>=$.aF.length)return A.b($.aF,-1)
$.aF.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
kM:function kM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
e9:function e9(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
kL:function kL(a){this.a=a},
ea:function ea(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hD:function hD(a){this.a=a
this.b=null},
eb:function eb(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
h:function h(){},
dJ:function dJ(){},
ju:function ju(a,b){this.a=a
this.b=b},
y:function y(){},
jw:function jw(a){this.a=a},
dX:function dX(){},
eh:function eh(){},
ev:function ev(){},
ou(a){if(a instanceof A.c0)return a.k(0)
return"Instance of '"+A.jP(a)+"'"},
b5(a,b,c,d){var s,r=J.oE(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
oK(a,b){var s,r,q=A.c([],b.i("r<0>"))
for(s=a.length,r=0;r<s;++r)B.a.l(q,b.a(a[r]))
return q},
mC(a,b,c){var s=A.oJ(a,c)
return s},
oJ(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("r<0>"))
s=A.c([],b.i("r<0>"))
for(r=J.aO(a);r.n();)B.a.l(s,r.gp(r))
return s},
lR(a,b,c){var s,r=J.oF(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
mQ(a,b,c){var s=J.aO(b)
if(!s.n())return a
if(c.length===0){do a+=A.z(s.gp(s))
while(s.n())}else{a+=A.z(s.gp(s))
for(;s.n();)a=a+c+A.z(s.gp(s))}return a},
oo(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
op(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
eZ(a){if(a>=10)return""+a
return"0"+a},
iY(a){return new A.a7(1000*a)},
f2(a){if(typeof a=="number"||A.kY(a)||a==null)return J.cw(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ou(a)},
ix(a){return new A.dm(a)},
cy(a,b){return new A.bb(!1,null,b,a)},
mn(a,b,c){return new A.bb(!0,a,b,c)},
oV(a){var s=null
return new A.cU(s,s,!1,s,s,a)},
mJ(a,b){return new A.cU(null,null,!0,a,b,"Value not in range")},
cj(a,b,c,d,e){return new A.cU(b,c,!0,a,d,"Invalid value")},
lU(a,b,c){if(0>a||a>c)throw A.d(A.cj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.cj(b,a,c,"end",null))
return b}return c},
jT(a,b){if(a<0)throw A.d(A.cj(a,0,null,b,null))
return a},
P(a,b,c,d,e){var s=A.I(e==null?J.aj(b):e)
return new A.fb(s,!0,a,c,"Index out of range")},
A(a){return new A.h9(a)},
lW(a){return new A.h6(a)},
aB(a){return new A.bm(a)},
bE(a){return new A.eV(a)},
lL(a){return new A.ht(a)},
jL(a,b,c,d){var s,r
if(B.D===c)return A.p1(B.c.gt(a),B.c.gt(b),$.lE())
if(B.D===d){s=B.c.gt(a)
b=B.c.gt(b)
c=J.cv(c)
return A.lV(A.bK(A.bK(A.bK($.lE(),s),b),c))}s=B.c.gt(a)
b=B.c.gt(b)
c=J.cv(c)
d=J.cv(d)
r=$.lE()
return A.lV(A.bK(A.bK(A.bK(A.bK(r,s),b),c),d))},
eB(a){A.iq(A.z(a))},
c2:function c2(a,b){this.a=a
this.b=b},
a7:function a7(a){this.a=a},
kv:function kv(){},
J:function J(){},
dm:function dm(a){this.a=a},
bO:function bO(){},
fz:function fz(){},
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
h9:function h9(a){this.a=a},
h6:function h6(a){this.a=a},
bm:function bm(a){this.a=a},
eV:function eV(a){this.a=a},
fC:function fC(){},
dZ:function dZ(){},
eY:function eY(a){this.a=a},
ht:function ht(a){this.a=a},
j:function j(){},
a2:function a2(){},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(){},
v:function v(){},
i_:function i_(){},
fY:function fY(a){this.a=a},
qk(){return document},
oz(a){var s,r=document.createElement("input"),q=t.fY.a(r)
try{J.of(q,a)}catch(s){}return q},
cp(a,b,c,d,e){var s=A.nh(new A.kw(c),t.L)
if(s!=null&&!0)J.oa(a,b,s,!1)
return new A.e8(a,b,s,!1,e.i("e8<0>"))},
py(a){var s
if("postMessage" in a){s=A.pb(a)
return s}else return t.iB.a(a)},
pz(a){var s
if(t.dA.b(a))return a
s=new A.ko([],[])
s.c=!0
return s.bA(a)},
pb(a){if(a===window)return t.kg.a(a)
else return new A.hm()},
nh(a,b){var s=$.D
if(s===B.j)return a
return s.cl(a,b)},
q:function q(){},
it:function it(){},
eI:function eI(){},
eJ:function eJ(){},
eO:function eO(){},
eP:function eP(){},
bY:function bY(){},
cC:function cC(){},
b0:function b0(){},
iP:function iP(){},
G:function G(){},
cG:function cG(){},
iQ:function iQ(){},
aP:function aP(){},
be:function be(){},
iR:function iR(){},
iS:function iS(){},
iT:function iT(){},
cH:function cH(){},
bf:function bf(){},
bH:function bH(){},
dw:function dw(){},
dx:function dx(){},
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
c5:function c5(){},
dD:function dD(){},
c6:function c6(){},
cL:function cL(){},
c7:function c7(){},
bi:function bi(){},
jt:function jt(){},
ce:function ce(){},
jy:function jy(){},
fm:function fm(){},
jB:function jB(a){this.a=a},
fn:function fn(){},
jC:function jC(a){this.a=a},
ax:function ax(){},
fo:function fo(){},
ap:function ap(){},
u:function u(){},
dP:function dP(){},
ay:function ay(){},
fG:function fG(){},
fN:function fN(){},
jW:function jW(a){this.a=a},
fP:function fP(){},
ar:function ar(){},
fS:function fS(){},
az:function az(){},
fT:function fT(){},
aA:function aA(){},
fX:function fX(){},
k5:function k5(a){this.a=a},
ae:function ae(){},
as:function as(){},
a8:function a8(){},
h0:function h0(){},
h1:function h1(){},
kd:function kd(){},
aC:function aC(){},
h3:function h3(){},
ke:function ke(){},
b8:function b8(){},
kh:function kh(){},
d_:function d_(){},
hb:function hb(){},
d1:function d1(){},
hk:function hk(){},
e6:function e6(){},
hx:function hx(){},
ec:function ec(){},
hS:function hS(){},
i0:function i0(){},
lK:function lK(a,b){this.a=a
this.$ti=b},
e7:function e7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
e8:function e8(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
kw:function kw(a){this.a=a},
p:function p(){},
dA:function dA(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
hm:function hm(){},
hl:function hl(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hu:function hu(){},
hv:function hv(){},
hy:function hy(){},
hz:function hz(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hM:function hM(){},
hN:function hN(){},
hP:function hP(){},
ei:function ei(){},
ej:function ej(){},
hQ:function hQ(){},
hR:function hR(){},
hV:function hV(){},
i1:function i1(){},
i2:function i2(){},
en:function en(){},
eo:function eo(){},
i4:function i4(){},
i5:function i5(){},
ib:function ib(){},
ic:function ic(){},
id:function id(){},
ie:function ie(){},
ig:function ig(){},
ih:function ih(){},
ii:function ii(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
n8(a){var s,r
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.kY(a))return a
if(A.nq(a))return A.bx(a)
if(Array.isArray(a)){s=[]
for(r=0;r<a.length;++r)s.push(A.n8(a[r]))
return s}return a},
bx(a){var s,r,q,p,o
if(a==null)return null
s=A.ad(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.B)(r),++p){o=r[p]
s.j(0,o,A.n8(a[o]))}return s},
nq(a){var s=Object.getPrototypeOf(a)
return s===Object.prototype||s===null},
lI(){return window.navigator.userAgent},
kn:function kn(){},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a,b){this.a=a
this.b=b
this.c=!1},
qC(a,b){var s=new A.H($.D,b.i("H<0>")),r=new A.aN(s,b.i("aN<0>"))
a.then(A.ba(new A.ln(r,b),1),A.ba(new A.lo(r),1))
return s},
jJ:function jJ(a){this.a=a},
ln:function ln(a,b){this.a=a
this.b=b},
lo:function lo(a){this.a=a},
fJ(){return B.v},
hA:function hA(){},
aH:function aH(){},
fg:function fg(){},
aJ:function aJ(){},
fA:function fA(){},
jO:function jO(){},
fZ:function fZ(){},
n:function n(){},
aL:function aL(){},
h4:function h4(){},
hB:function hB(){},
hC:function hC(){},
hK:function hK(){},
hL:function hL(){},
hY:function hY(){},
hZ:function hZ(){},
i6:function i6(){},
i7:function i7(){},
ow(a){return new GainNode(a)},
aZ:function aZ(){},
dq:function dq(){},
bX:function bX(){},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
F:function F(){},
eK:function eK(){},
eL:function eL(){},
iE:function iE(a){this.a=a},
bc:function bc(){},
eM:function eM(){},
dr:function dr(){},
cK:function cK(){},
fB:function fB(){},
hj:function hj(){},
eQ:function eQ(){},
f7:function f7(){},
fH:function fH(){},
cV:function cV(){},
bo:function bo(){},
h5:function h5(){},
ha:function ha(){},
fU:function fU(){},
hT:function hT(){},
hU:function hU(){},
mu(a,b){var s=A.b5(7,null,!1,b.i("0?")),r=a==null?A.qL():a
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
mG(a,b){return new A.fy(A.c([],t.f7),a,b.i("fy<0>"))},
fy:function fy(a,b,c){this.a=a
this.b=b
this.$ti=c},
aK:function aK(a,b){this.a=a
this.b=b},
lG(a,b,c,d,e,f,g){return new A.cx(g,b,e,a,f)},
np(a,b){if(b.e)return!1
if(a.x)return!0
if(b.x)return!0
return!1},
qp(a,b){return B.a.eb(a.a,new A.l7(b))},
fp(a,b,c,d,e,f,g,h,i,j){return new A.bl(i,a,h,j,b,e,c,f)},
ql(a){var s,r,q=a.f.$0(),p=new A.jA(new Uint8ClampedArray(4000)),o=a.d,n=A.c([],t.I),m=A.mB(B.av,t.b,t.O),l=A.c([],t.Q),k=A.c([],t.d)
for(s=J.aO(a.r.$0());s.n();){r=s.gp(s)
switch(r.gbG()){case B.ay:m.h(0,B.N)
m.j(0,B.N,r)
break
case B.az:m.h(0,B.r)
m.j(0,B.r,r)
break
case B.aA:m.h(0,B.O)
m.j(0,B.O,r)
break
default:B.a.l(n,r)}}return A.lG(new A.ir(q,p),new A.c_(o,o,1,0,0,0,0,new A.cI(n,m),a.c,l,k,new A.cJ(a.a)),1,a.z,!1,!1,a.e.$0())},
cx:function cx(a,b,c,d,e){var _=this
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
a9:function a9(a,b){this.a=a
this.b=b},
al:function al(){},
bL:function bL(){},
bM:function bM(){},
cE:function cE(){},
bJ:function bJ(){},
fL:function fL(){this.b=!1},
dU:function dU(){this.a=null},
fM:function fM(a){this.a=a},
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
qB(a,b,c){var s,r,q=b.e||b.a===0
if(q)return!1
s=b.c
if(s!=null&&s.b<=0){a.$1(new A.dv(b))
return!0}r=b.r
if(r!=null){a.$1(r.ec(b,c))
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
mt(a){switch(a){case B.dg:case B.aV:case B.aW:case B.Z:case B.dh:return!1
case B.a_:case B.ak:case B.aX:return!0}},
dt(a,b,c){var s,r,q
for(s=0,r=0;r<b;++r){switch(c){case B.aY:q=3
break
case B.a0:q=4
break
case B.I:q=6
break
case B.al:q=8
break
case B.aZ:q=12
break
case B.am:q=20
break
default:q=null}s+=a.D(q)+1}return s},
eF(a,b,c,d,e,f){return new A.eE(f,c)},
mm(){return new A.eE(10,10)},
b6(a,b,c){return new A.fl(a,c,b)},
oM(a,b){return new A.i(a,b)},
on(a){var s,r=a.a,q=a.b
if(r+q===1)return a
s=Math.sqrt(Math.pow(r,2)+Math.pow(q,2))
return new A.aK(r/s,q/s)},
bg(a){switch(a){case B.an:case B.ao:case B.R:case B.S:case B.F:case B.U:case B.a9:case B.aa:case B.a6:case B.P:case B.a7:case B.a8:case B.Q:case null:return!1
case B.a5:case B.w:case B.T:return!0}},
oA(a){switch(a){case B.an:case B.ao:case B.R:case B.S:case B.F:case B.U:case B.a9:case B.aa:case B.a6:case B.P:case B.a7:case B.a8:case B.Q:case null:return!1
case B.a5:case B.w:case B.T:return!0}},
dY:function dY(a){this.b=a},
b4:function b4(a){this.b=a},
eH:function eH(a,b){this.a=a
this.b=b},
aG:function aG(a,b,c){this.b=a
this.c=b
this.e=c},
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
aM:function aM(a){this.b=a},
jz:function jz(){},
bF:function bF(){},
c1:function c1(a){this.b=a},
X:function X(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.y=e
_.z=f},
di:function di(a){this.b=a},
dj:function dj(a,b){this.a=a
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
eE:function eE(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fD:function fD(a){this.b=a},
c3:function c3(a){this.b=a},
eW:function eW(){},
cY:function cY(a){this.b=a},
cD:function cD(a){this.b=a},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(a){this.b=a},
af:function af(a){this.b=a},
cc:function cc(a){this.b=a},
b_:function b_(a){this.b=a},
bN:function bN(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
fi:function fi(a,b){this.b=a
this.c=b},
fj:function fj(a,b,c){this.a=a
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
ot(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l="a_position",k="u_resolution",j="u_offset",i=A.c([],t.ev),h=A.c(["alarm_1.mp3","background_1.mp3","background_2.mp3","bullet_impact_1.mp3","bullet_impact_2.mp3","bullet_miss_1.mp3","calm_menu_1.mp3","cave_1.mp3","click_1.mp3","death_1.mp3","door_1.mp3","door_unlock_1.mp3","drone_abandoned_desolate.mp3","fireball_1.mp3","fireball_2.mp3","flamethrower_1.mp3","heavy_punch_1.mp3","heavy_punch_2.mp3","heavy_punch_3.mp3","heavy_punch_4.mp3","Just_Pick_One_Already.mp3","laser_1.mp3","loop_1.mp3","menu_1.mp3","menu_2.mp3","miss_1.mp3","monster_deep_growl.mp3","monster_growl_1.mp3","monster_sceam_2.mp3","monster_scream_1.mp3","New_Bee.mp3","positive_1.mp3","rain_background_1.mp3","sewer_1.mp3","short_pulse_1.mp3","surface_day_1.mp3","surface_night_1.mp3","sword_impact_1.mp3","teleport_1.mp3","text_loop_1.mp3","water_footsteps_1.mp3","water_footsteps_2.mp3","water_footsteps_3.mp3","water_footsteps_4.mp3","water_footsteps_5.mp3","reload_1.mp3","pistol_1.mp3"],t.s),g=new (window.AudioContext||window.webkitAudioContext)(),f=A.pB(),e=t.G,d=t.o
f=A.aR(A.c([new A.V(l,35044,5126,2,f),new A.V("a_color",35048,5126,4,new Float32Array(192e3))],e),u.l,A.c([new A.w(k,B.d),new A.w(j,B.d)],d),u.q)
e=A.aR(A.c([new A.V(l,35048,5126,2,new Float32Array(8000))],e),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.c([new A.w(k,B.d),new A.w(j,B.d)],d),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
d=A.p5(window)
s=new Uint8Array(4000)
r=t.j
q=A.c([],t.pl)
p=A.c([],t.fk)
o=new Uint8Array(16e6)
n=new Uint8Array(4000)
m=new Uint8Array(4000)
i=new A.j2(c,a2,a,b,a1,i,a0,new A.fR(A.ad(t.N,t.bD),h,g),new A.j5(o,n,m,new Uint8Array(64e6),new A.i(0,0),A.ad(r,t.im),p),new A.iJ(),new A.kb(f),new A.iV(e),d,new A.is(new A.f_(s,A.ad(r,t.S))),new A.iZ(q),c.createFramebuffer(),new A.jU())
i.d9(a,b,c,a0,a1,a2)
return i},
f1:function f1(){this.b=this.a=!1},
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
_.r1=!1
_.r2=q},
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
fw:function fw(a){this.a=a},
dT:function dT(a){this.a=a},
aI:function aI(a,b){this.a=a
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
fh:function fh(a){this.a=a},
e0:function e0(a,b){this.a=a
this.b=b},
dp:function dp(a,b,c){this.a=a
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
dv:function dv(a){this.a=a},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
h8:function h8(a){this.a=a},
dS:function dS(a,b){this.a=a
this.b=b},
fI:function fI(a,b,c){this.a=a
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
i3:function i3(a){this.a=a
this.b=!0},
ki:function ki(a,b,c){this.a=a
this.c=b
this.d=c},
bZ:function bZ(a){this.b=a},
jS:function jS(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
no(a,b){var s=a.f
if(s==null)return A.c([],t.Y)
if(s===B.w)return A.c([new A.c8(new A.e0(!1,a.b))],t.Y)
if(s===B.S){if(b.af(a.b)!=null)return A.c([],t.Y)
return A.c([new A.c8(new A.e0(!0,a.b))],t.Y)}if(s===B.P)return A.c([new A.c8(new A.h8(a.b))],t.Y)
if(s===B.R)return A.c([new A.c8(new A.fw(!1))],t.Y)
return A.c([],t.Y)},
c8:function c8(a){this.b=a},
oH(a){var s=u.p,r="a_position",q="u_resolution",p="u_block_size",o="u_player_visible_texture",n="u_offset",m=t.G,l=t.o
return new A.fk(A.aR(A.c([new A.V(r,35044,5126,2,new Float32Array(A.d6(B.C)))],m),u.j,A.c([new A.w(q,B.d),new A.w("u_source_position",B.d),new A.w(p,B.d),new A.w("u_source_color",B.aF),new A.w("u_source_strength",B.t),new A.w("u_time",B.t),new A.w("u_visible_texture",B.o),new A.w(o,B.o),new A.w(n,B.d)],l),s),A.aR(A.c([new A.V(r,35044,5126,2,new Float32Array(A.d6(B.C)))],m),u.B,A.c([new A.w("u_light_texture",B.o),new A.w("u_game_world_texture",B.o),new A.w(o,B.o),new A.w(q,B.d),new A.w(p,B.d),new A.w(n,B.d)],l),s),a,A.c([],t.ow))},
fk:function fk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1
_.x=d
_.z=_.y=0},
or(a){switch(a){case B.J:return B.M
case B.K:return B.L
case B.L:return B.K
case B.M:return B.J
case B.k:return B.m
case B.l:return B.n
case B.m:return B.k
case B.n:return B.l}},
oq(a){switch(a){case B.k:return B.b8
case B.l:return B.b7
case B.m:return B.b8
case B.n:return B.b7
default:return B.dC}},
a6(a,b){switch(b){case B.k:return a.v(0,new A.i(0,-1))
case B.K:return a.v(0,new A.i(1,-1))
case B.l:return a.v(0,new A.i(1,0))
case B.J:return a.v(0,new A.i(1,1))
case B.m:return a.v(0,new A.i(0,1))
case B.L:return a.v(0,new A.i(-1,1))
case B.n:return a.v(0,new A.i(-1,0))
case B.M:return a.v(0,new A.i(-1,-1))}},
m8(a,b,c){var s
switch(c){case B.aT:return!1
case B.c7:return a.c===B.b||A.O(A.bg(a.f))
case B.Y:s=a.f
if(s===B.w)return!1
return a.c===B.b||A.O(A.bg(s))
case B.aj:return a.c===B.b||A.O(A.bg(a.f))||b.af(a.b)!=null}},
ch:function ch(a,b,c){var _=this
_.b=_.a=null
_.d=a
_.e=b
_.f=c},
aQ:function aQ(a){this.b=a},
jM:function jM(){},
f_:function f_(a,b){this.a=a
this.b=b},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
mo(a,b,c,d,e){return new A.V(d,a,c,e,b)},
bP(a,b){return new A.w(b,a)},
aR(a,b,c,d){var s=t.N
return new A.jd(d,b,c,a,A.ad(s,t.o3),A.ad(s,t.aN))},
n9(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.T(a.getShaderParameter(s,35713),!0)){A.eB(J.cw(a.getShaderInfoLog(s)))
throw A.d(A.aB("Invalid Shader"))}return s},
V:function V(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w:function w(a,b){this.a=a
this.b=b},
cm:function cm(a){this.b=a},
hi:function hi(a,b){this.a=a
this.c=b},
i8:function i8(a,b){this.a=a
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
fx:function fx(){},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q1(a,b){var s=t.hd
s.a(a)
s.a(b)
return B.e.N(a.x,b.x)},
qx(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.H($.D,t.aa),p=J.od(r),o=p.$ti,n=o.i("~(1)?").a(new A.lc(a,s,r,new A.aN(q,t.fB)))
t.Z.a(null)
A.cp(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
p0(a,b){var s=35048,r=5126,q=A.c([new A.w("u_texture",B.o),new A.w("u_resolution",B.d),new A.w("u_offset",B.d)],t.o),p=new Float32Array(12e4),o=new Float32Array(12e4),n=new Float32Array(24e4)
q=new A.k0(A.aR(A.c([new A.V("a_position",s,r,2,p),new A.V("a_texcoord",s,r,2,o),new A.V("a_color",s,r,4,n),new A.V("a_bg_color",s,r,4,new Float32Array(24e4))],t.G),"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\nin vec4 v_bg_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n  if (v_bg_color != vec4(0, 0, 0, 0)) {\n    outColor = outColor + v_bg_color;\n  }\n}\n",q,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"),A.mu(A.qF(),t.hd),b)
q.dc(a,b)
return q},
mv(a,b,c){var s,r,q,p,o,n=null
switch(a){case B.an:case null:return n
case B.ao:s=n
r=s
q=3
p=16
break
case B.R:q=14
p=3
r=B.dP
s=B.c9
break
case B.w:s=n
r=s
q=6
p=11
break
case B.S:s=n
r=s
q=15
p=5
break
case B.T:s=n
r=s
q=5
p=11
break
case B.F:o=B.be.h(0,t.e.i("a_.T").a(800))
o.toString
s=n
r=o
q=2
p=2
break
case B.U:r=new A.l(4294967142)
s=n
q=12
p=7
break
case B.a9:s=n
r=s
q=1
p=13
break
case B.aa:s=n
r=s
q=2
p=13
break
case B.a5:o=B.be.h(0,t.e.i("a_.T").a(600))
o.toString
s=n
r=o
q=6
p=0
break
case B.a6:o=B.dI.h(0,t.e.i("a_.T").a(900))
o.toString
s=o
r=n
q=0
p=15
break
case B.P:o=B.bg.h(0,t.e.i("a_.T").a(500))
o.toString
s=n
r=o
q=15
p=0
break
case B.a7:o=B.bg.h(0,t.e.i("a_.T").a(100))
o.toString
s=n
r=o
q=15
p=0
break
case B.a8:s=n
r=s
q=13
p=3
break
case B.Q:o=B.dK.h(0,t.gX.i("a_.T").a(700))
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
lT(a,b,c){return new A.jx(b,c,a)},
pB(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
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
fK:function fK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pA(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
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
qd(a){var s,r=A.lR(4000,new A.l1(a),t.W),q=A.c([],t.c7)
for(s=0;s<4000;++s);return new A.fV(q,A.ad(t.K,t.lZ),new A.Y(100,40,r,t.R),a.b)},
io(a){var s,r,q,p,o
for(s=a.c,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.i(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.O(A.bg(o.f))))return p}throw A.d("Solid")},
qA(a,b){var s,r,q
for(s=a.c;!0;){r=$.dg()
q=new A.i(B.c.w(r.R()*98)+1,B.c.w(r.R()*38)+1)
r=s.h(0,q)
if(!(r.c===B.b||A.O(A.bg(r.f)))&&a.af(q)==null)return q}},
bu(a,b){return a.R()<=b},
aW(a,b,c){return B.c.w(a.R()*(c-b))+b},
na(a,b,c){var s=b.length
if(s===1){if(0>=s)return A.b(b,0)
return b[0]}s=A.aW(a,0,s-1)
if(!(s>=0&&s<b.length))return A.b(b,s)
return b[s]},
hd:function hd(a,b){this.a=a
this.d=0
this.e=b},
l1:function l1(a){this.a=a},
fV:function fV(a,b,c,d){var _=this
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
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.W))break
q=A.a6(q,b);++p}return p},
cu(a,b,c){var s=A.a6(a,b)
if(c.e.h(0,s)===B.W)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
d0(a,b){return new A.e3(a,b)},
eC(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.c([],t.D)
for(s=a2.length,r=a1.a,q=J.de(r),p=t.q,o=t.n,n=0;n<a2.length;a2.length===s||(0,A.B)(a2),++n){m=a2[n]
l=A.c([],p)
k=A.c([],o)
for(j=q.gA(r),i=0;j.n();){h=j.gp(j)
g=m.a.a7(h,a3)
if(g<1000){B.a.l(l,h)
B.a.l(k,g)
i+=g}}if(l.length===0){B.a.l(a0,m)
continue}for(f=0,e=0;e<k.length;++e,f=d){d=k[e]/i+f
B.a.j(k,e,d)}c=$.nT().R()
for(j=k.length,h=l.length,b=B.A,a=-1,e=0;e<j;++e,a=g){g=k[e]
if(c>=a&&c<g){if(!(e<h))return A.b(l,e)
b=l[e]}}j=0===b.a&&0===b.b
if(j){B.a.l(a0,m)
continue}m.eA(b,a3)}for(s=q.gA(r),r=a3.e,q=a1.c;s.n();){p=s.gp(s)
if(r.h(0,p)===B.ad||r.h(0,p)===B.ae)B.a.l(q,p)}return a0},
nv(a,b){var s,r,q,p,o,n,m,l,k
B.a.aR(a,new A.ls())
if(0>=a.length)return A.b(a,0)
A.eC(a[0],$.o6(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.B)(s),++p)q.j(0,s[p],B.bc)
for(s=A.mR(a,1,null,A.a4(a).c),r=s.$ti,s=new A.bk(s,s.gm(s),r.i("bk<aS.E>")),r=r.i("aS.E"),o=t.c1,n=2;s.n();){m=r.a(s.d)
l=m.a
k=J.at(l)
if(k.gm(l)<30){if(n>0){l=A.mC($.lF(),!0,o)
l.push($.mh())}else l=$.lF()
if(!B.a.G(A.eC(m,l,b),$.mh()))--n}else if(k.gm(l)<60)A.eC(m,$.o_(),b)
else if(k.gm(l)<100)A.eC(m,$.nY(),b)
else A.eC(m,$.nX(),b)}if(n===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.B)(s),++p)q.j(0,s[p],B.bd)}},
b2:function b2(){},
hc:function hc(){},
dk:function dk(a){this.$ti=a},
dR:function dR(a){this.$ti=a},
eS:function eS(){},
eG:function eG(){},
eX:function eX(){},
dh:function dh(a){this.a=a},
e3:function e3(a,b){this.a=a
this.b=b},
lm:function lm(){},
li:function li(){},
lk:function lk(){},
lh:function lh(){},
lj:function lj(){},
ll:function ll(){},
lg:function lg(){},
ls:function ls(){},
os(a){var s=t.q
return new A.am(a,A.c([],s),A.c([],s),A.j1(a))},
j1(a){var s,r,q=J.at(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gm(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.i(B.c.w(p/q.gm(a)),B.c.w(o/q.gm(a)))},
dB:function dB(a,b,c,d,e,f,g,h,i){var _=this
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
e1:function e1(a,b,c,d){var _=this
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
fd:function fd(a,b,c){var _=this
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
dW:function dW(a){this.b=a},
jX:function jX(a,b){this.b=a
this.a=b},
dV:function dV(a,b){this.a=a
this.b=b},
k8:function k8(a){this.a=a},
k9:function k9(){},
ka:function ka(a){this.a=a},
p5(a){var s=new A.kj(A.mP(t.U),A.mP(t.bd))
s.dd(a)
return s},
kj:function kj(a,b){this.a=a
this.b=b},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
a1:function a1(a){this.b=a},
iu:function iu(a,b){this.a=a
this.b=$
this.c=b},
iv:function iv(a){this.a=a},
iw:function iw(a,b){this.a=a
this.b=b},
oL(){var s=new A.jD()
s.da()
return s},
jD:function jD(){this.a=$},
jE:function jE(a){this.a=a},
fF:function fF(a,b){this.a=a
this.b=b},
k2:function k2(){},
k3:function k3(a,b){this.a=a
this.b=b},
k4:function k4(a,b){this.a=a
this.b=b},
iq(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
qj(a,b){return J.ob(t.n6.a(a),b)},
fc(a){var s,r
if(a instanceof A.U){s=B.ar
r=null}else if(a instanceof A.X){s=B.ap
r=null}else if(a instanceof A.aq){s=B.aq
r=0}else{if(a instanceof A.iO)s=B.b5
else{J.cw(a)
s=B.as}r=null}$.mw=$.mw+1
return new A.aG(a,s,r)},
qu(a,b,c){var s,r,q=a.r
if(q!=null){if(b===q.c)return!0
s=a.q()
r=b.q()
if(s==null||r==null)return!1
return c.y.O(s).h(0,r)}return!0},
qE(a){A.aV(a)
$.cs.ba().ae(a,$.mf())
B.bz.cN(window,A.nr())},
ld(){var s=0,r=A.bv(t.z),q,p,o,n,m,l
var $async$ld=A.bw(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:q=$.nW()
p=A.mm()
o=A.c([],t.I)
n=A.oI(B.av,t.b,t.O)
m=A.c([],t.d)
s=2
return A.a5(q.ap(A.lG(null,new A.c_(20,20,0,0,0,0,0,new A.cI(o,n),p,A.c([],t.Q),m,new A.cJ("J")),0,null,!1,!0,new A.a3(0,4,1,1,null))),$async$ld)
case 2:l=b
m=document
p=t.g
n=p.a(m.querySelector("#glCanvas"))
o=$.mf()
q=$.o4()
m=A.ot(l,n,o,q,p.a(m.querySelector("#text")),t.nK.a(B.E.bB(p.a(m.querySelector("#text")),"2d")))
p=$.cs.b
if(p==null?$.cs!=null:p!==$.cs)A.R(new A.cb("Field '"+$.cs.a+"' has already been initialized."))
$.cs.b=m
$.cs.ba().x.aI()
p=$.o3()
new A.k2().J(p)
new A.iu(A.oL(),A.c(["spell","stats","inventory"],t.s)).J(q)
q=$.cs.ba()
o=t.w
p=new A.f8(q,A.c([],o),A.c([],o),A.c([],t.fy),A.c([],t.ge),p)
o=q.dx.a
new A.bQ(o,A.C(o).i("bQ<1>")).cF(p.ger())
p=t.x.a(p.gc5())
B.a.l(q.f,p)
B.bz.cN(window,A.nr())
return A.br(null,r)}})
return A.bs($async$ld,r)}},J={
ma(a,b,c,d){return{i:a,p:b,e:c,x:d}},
l6(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.m9==null){A.qr()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.lW("Return interceptor for "+A.z(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.kK
if(o==null)o=$.kK=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.qy(a)
if(p!=null)return p
if(typeof a=="function")return B.dt
s=Object.getPrototypeOf(a)
if(s==null)return B.bl
if(s===Object.prototype)return B.bl
if(typeof q=="function"){o=$.kK
if(o==null)o=$.kK=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aG,enumerable:false,writable:true,configurable:true})
return B.aG}return B.aG},
oE(a,b){if(a<0||a>4294967295)throw A.d(A.cj(a,0,4294967295,"length",null))
return J.oG(new Array(a),b)},
oF(a,b){if(a<0)throw A.d(A.cy("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
oG(a,b){return J.my(A.c(a,b.i("r<0>")),b)},
my(a,b){a.fixed$length=Array
return a},
dd(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dF.prototype
return J.fe.prototype}if(typeof a=="string")return J.c9.prototype
if(a==null)return J.dG.prototype
if(typeof a=="boolean")return J.dE.prototype
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof A.v)return a
return J.l6(a)},
at(a){if(typeof a=="string")return J.c9.prototype
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
qm(a){if(typeof a=="number")return J.cM.prototype
if(typeof a=="string")return J.c9.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.cZ.prototype
return a},
ip(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof A.v)return a
return J.l6(a)},
T(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dd(a).F(a,b)},
mj(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.qv(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.at(a).h(a,b)},
mk(a,b,c){return J.de(a).j(a,b,c)},
oa(a,b,c,d){return J.ip(a).e9(a,b,c,d)},
ob(a,b){return J.qm(a).N(a,b)},
ml(a,b){return J.de(a).u(a,b)},
oc(a,b){return J.de(a).C(a,b)},
cv(a){return J.dd(a).gt(a)},
aO(a){return J.de(a).gA(a)},
aj(a){return J.at(a).gm(a)},
od(a){return J.ip(a).gbo(a)},
oe(a,b,c){return J.de(a).cG(a,b,c)},
of(a,b){return J.ip(a).seQ(a,b)},
cw(a){return J.dd(a).k(a)},
a:function a(){},
dE:function dE(){},
dG:function dG(){},
ca:function ca(){},
fE:function fE(){},
cZ:function cZ(){},
bh:function bh(){},
r:function r(a){this.$ti=a},
jl:function jl(a){this.$ti=a},
dl:function dl(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cM:function cM(){},
dF:function dF(){},
fe:function fe(){},
c9:function c9(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.lO.prototype={}
J.a.prototype={
F(a,b){return a===b},
gt(a){return A.ci(a)},
k(a){return"Instance of '"+A.jP(a)+"'"}}
J.dE.prototype={
k(a){return String(a)},
cZ(a,b){return b||a},
gt(a){return a?519018:218159},
$iE:1}
J.dG.prototype={
F(a,b){return null==b},
k(a){return"null"},
gt(a){return 0},
$iS:1}
J.ca.prototype={
gt(a){return 0},
k(a){return String(a)}}
J.fE.prototype={}
J.cZ.prototype={}
J.bh.prototype={
k(a){var s=a[$.ny()]
if(s==null)return this.d4(a)
return"JavaScript function for "+J.cw(s)},
$ic4:1}
J.r.prototype={
l(a,b){A.a4(a).c.a(b)
if(!!a.fixed$length)A.R(A.A("add"))
a.push(b)},
cM(a,b){var s
if(!!a.fixed$length)A.R(A.A("removeAt"))
s=a.length
if(b>=s)throw A.d(A.mJ(b,null))
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
a_(a,b){A.a4(a).i("j<1>").a(b)
if(!!a.fixed$length)A.R(A.A("addAll"))
this.dg(a,b)
return},
dg(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.bE(a))
for(r=0;r<s;++r)a.push(b[r])},
cG(a,b,c){var s=A.a4(a)
return new A.dL(a,s.B(c).i("1(2)").a(b),s.i("@<1>").B(c).i("dL<1,2>"))},
u(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
gd2(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.d(A.oB())
throw A.d(A.oD())},
bD(a,b,c,d){var s,r,q,p
A.a4(a).i("j<1>").a(d)
if(!!a.immutable$list)A.R(A.A("setRange"))
A.lU(b,c,a.length)
s=c-b
if(s===0)return
A.jT(0,"skipCount")
r=d
q=J.at(r)
if(s>q.gm(r))throw A.d(A.oC())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
eb(a,b){var s,r
A.a4(a).i("E(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.O(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.bE(a))}return!1},
aR(a,b){var s=A.a4(a)
s.i("f(1,1)?").a(b)
if(!!a.immutable$list)A.R(A.A("sort"))
A.oZ(a,b,s.c)},
d1(a){var s,r,q,p
if(!!a.immutable$list)A.R(A.A("shuffle"))
s=a.length
for(;s>1;){r=B.v.D(s);--s
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
k(a){return A.lN(a,"[","]")},
gA(a){return new J.dl(a,a.length,A.a4(a).i("dl<1>"))},
gt(a){return A.ci(a)},
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
J.dl.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.B(q))
s=r.c
if(s>=p){r.sbU(null)
return!1}r.sbU(q[s]);++r.c
return!0},
sbU(a){this.d=this.$ti.i("1?").a(a)},
$ia2:1}
J.cM.prototype={
N(a,b){var s
A.aV(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaJ(b)
if(this.gaJ(a)===s)return 0
if(this.gaJ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaJ(a){return a===0?1/a<0:a<0},
as(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.A(""+a+".toInt()"))},
cn(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.A(""+a+".ceil()"))},
aa(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.A(""+a+".floor()"))},
w(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.A(""+a+".round()"))},
aK(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
eg(a,b,c){if(B.e.N(b,c)>0)throw A.d(A.nj(b))
if(this.N(a,b)<0)return b
if(this.N(a,c)>0)return c
return a},
cQ(a,b){var s
if(b>20)throw A.d(A.cj(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaJ(a))return"-"+s
return s},
eO(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.cj(b,2,36,"radix",null))
s=a.toString(b)
if(B.z.ei(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.R(A.A("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.z.bC("0",p)},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
cY(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bI(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cb(a,b)},
M(a,b){return(a|0)===a?a/b|0:this.cb(a,b)},
cb(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.A("Result of truncating division is "+A.z(s)+": "+A.z(a)+" ~/ "+b))},
ca(a,b){var s
if(a>0)s=this.dT(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dT(a,b){return b>31?0:a>>>b},
$iab:1,
$iM:1,
$iN:1}
J.dF.prototype={$if:1}
J.fe.prototype={}
J.c9.prototype={
ei(a,b){if(b<0)throw A.d(A.dc(a,b))
if(b>=a.length)A.R(A.dc(a,b))
return a.charCodeAt(b)},
v(a,b){return a+b},
bC(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.c4)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cK(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bC(c,s)+a},
bf(a,b,c){var s=a.length
if(c>s)throw A.d(A.cj(c,0,s,null,null))
return A.qG(a,b,c)},
N(a,b){var s
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
$imH:1,
$it:1}
A.cb.prototype={
k(a){var s="LateInitializationError: "+this.a
return s}}
A.jZ.prototype={}
A.o.prototype={}
A.aS.prototype={
gA(a){var s=this
return new A.bk(s,s.gm(s),A.C(s).i("bk<aS.E>"))}}
A.e_.prototype={
gdv(){var s=J.aj(this.a),r=this.c
if(r==null||r>s)return s
return r},
gdU(){var s=J.aj(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.aj(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.T()
return s-q},
u(a,b){var s=this,r=s.gdU()+b
if(b<0||r>=s.gdv())throw A.d(A.P(b,s,"index",null,null))
return J.ml(s.a,r)}}
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
A.cd.prototype={
gA(a){var s=A.C(this)
return new A.dK(J.aO(this.a),this.b,s.i("@<1>").B(s.Q[1]).i("dK<1,2>"))},
gm(a){return J.aj(this.a)}}
A.dy.prototype={$io:1}
A.dK.prototype={
n(){var s=this,r=s.b
if(r.n()){s.sak(s.c.$1(r.gp(r)))
return!0}s.sak(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
sak(a){this.a=this.$ti.i("2?").a(a)}}
A.dL.prototype={
gm(a){return J.aj(this.a)},
u(a,b){return this.b.$1(J.ml(this.a,b))}}
A.aE.prototype={
gA(a){return new A.e2(J.aO(this.a),this.b,this.$ti.i("e2<1>"))}}
A.e2.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.O(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.an.prototype={}
A.cF.prototype={
k(a){return A.lS(this)},
$iL:1}
A.du.prototype={
gm(a){return this.a},
aF(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.aF(0,b))return null
return this.b[A.ah(b)]},
C(a,b){var s,r,q,p,o,n=this.$ti
n.i("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.ah(s[p])
b.$2(o,n.a(q[o]))}}}
A.ac.prototype={
b2(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.oy(r)
o=A.lQ(A.pU(),q,r,s.Q[1])
A.nl(p.a,o)
p.$map=o}return o},
h(a,b){return this.b2().h(0,b)},
C(a,b){this.$ti.i("~(1,2)").a(b)
this.b2().C(0,b)},
gm(a){var s=this.b2()
return s.gm(s)}}
A.ja.prototype={
$1(a){return this.a.b(a)},
$S:27}
A.kf.prototype={
W(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.dQ.prototype={
k(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.ff.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.h7.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.jK.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.dz.prototype={}
A.ek.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaU:1}
A.c0.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.nw(r==null?"unknown":r)+"'"},
$ic4:1,
geY(){return this},
$C:"$1",
$R:1,
$D:null}
A.eT.prototype={$C:"$0",$R:0}
A.eU.prototype={$C:"$2",$R:2}
A.h_.prototype={}
A.fW.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.nw(s)+"'"}}
A.cB.prototype={
F(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cB))return!1
return this.$_target===b.$_target&&this.a===b.a},
gt(a){return(A.lf(this.a)^A.ci(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.jP(t.K.a(this.a))+"'")}}
A.fO.prototype={
k(a){return"RuntimeError: "+this.a}}
A.he.prototype={
k(a){return"Assertion failed: "+A.f2(this.a)}}
A.aw.prototype={
gm(a){return this.a},
ga2(a){return new A.dH(this,A.C(this).i("dH<1>"))},
gby(a){var s=this,r=A.C(s)
return A.mD(s.ga2(s),new A.jn(s),r.c,r.Q[1])},
aF(a,b){var s=this.cz(b)
return s},
cz(a){var s=this,r=s.d
if(r==null)return!1
return s.aj(s.av(r,s.ai(a)),a)>=0},
a_(a,b){A.C(this).i("L<1,2>").a(b).C(0,new A.jm(this))},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b3(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b3(p,b)
q=r==null?n:r.b
return q}else return o.cA(b)},
cA(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.av(p,q.ai(a))
r=q.aj(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.C(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.bK(s==null?q.b=q.b6():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.bK(r==null?q.c=q.b6():r,b,c)}else q.cC(b,c)},
cC(a,b){var s,r,q,p,o=this,n=A.C(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.b6()
r=o.ai(a)
q=o.av(s,r)
if(q==null)o.bc(s,r,[o.b7(a,b)])
else{p=o.aj(q,a)
if(p>=0)q[p].b=b
else q.push(o.b7(a,b))}},
I(a,b){var s=this.cB(b)
return s},
cB(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ai(a)
r=o.av(n,s)
q=o.aj(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.e2(p)
if(r.length===0)o.bV(n,s)
return p.b},
C(a,b){var s,r,q=this
A.C(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.bE(q))
s=s.c}},
bK(a,b,c){var s,r=this,q=A.C(r)
q.c.a(b)
q.Q[1].a(c)
s=r.b3(a,b)
if(s==null)r.bc(a,b,r.b7(b,c))
else s.b=c},
c2(){this.r=this.r+1&67108863},
b7(a,b){var s=this,r=A.C(s),q=new A.jp(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.c2()
return q},
e2(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.c2()},
ai(a){return J.cv(a)&0x3ffffff},
aj(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1},
k(a){return A.lS(this)},
b3(a,b){return a[b]},
av(a,b){return a[b]},
bc(a,b,c){a[b]=c},
bV(a,b){delete a[b]},
b6(){var s="<non-identifier-key>",r=Object.create(null)
this.bc(r,s,r)
this.bV(r,s)
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
A.dH.prototype={
gm(a){return this.a.a},
gA(a){var s=this.a,r=new A.dI(s,s.r,this.$ti.i("dI<1>"))
r.c=s.e
return r}}
A.dI.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.bE(q))
s=r.c
if(s==null){r.sbJ(null)
return!1}else{r.sbJ(s.a)
r.c=s.c
return!0}},
sbJ(a){this.d=this.$ti.i("1?").a(a)},
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
ay(){var s=this.b
if(s===this)throw A.d(new A.cb("Local '"+this.a+"' has not been initialized."))
return s},
ba(){var s=this.b
if(s===this)throw A.d(A.mA(this.a))
return s}}
A.fq.prototype={$imr:1}
A.cg.prototype={$iaD:1}
A.cR.prototype={
gm(a){return a.length},
$ix:1}
A.cf.prototype={
h(a,b){A.bt(b,a,a.length)
return a[b]},
j(a,b,c){A.I(b)
A.n6(c)
A.bt(b,a,a.length)
a[b]=c},
$io:1,
$ij:1,
$im:1}
A.dN.prototype={
j(a,b,c){A.I(b)
A.I(c)
A.bt(b,a,a.length)
a[b]=c},
$io:1,
$ij:1,
$im:1}
A.dM.prototype={$ilM:1}
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
A.fv.prototype={
h(a,b){A.bt(b,a,a.length)
return a[b]}}
A.cS.prototype={
gm(a){return a.length},
h(a,b){A.bt(b,a,a.length)
return a[b]},
$ip3:1}
A.dO.prototype={
gm(a){return a.length},
h(a,b){A.bt(b,a,a.length)
return a[b]},
$ip4:1}
A.ed.prototype={}
A.ee.prototype={}
A.ef.prototype={}
A.eg.prototype={}
A.aT.prototype={
i(a){return A.kT(v.typeUniverse,this,a)},
B(a){return A.pr(v.typeUniverse,this,a)}}
A.hw.prototype={}
A.eq.prototype={
k(a){return A.ai(this.a,null)},
$imT:1}
A.hs.prototype={
k(a){return this.a}}
A.er.prototype={$ibO:1}
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
A.ep.prototype={
de(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.ba(new A.kS(this,b),0),a)
else throw A.d(A.A("`setTimeout()` not found."))},
df(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.ba(new A.kR(this,a,Date.now(),b),0),a)
else throw A.d(A.A("Periodic timer."))},
ee(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.d(A.A("Canceling a timer."))},
$ih2:1}
A.kS.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.kR.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.e.bI(s,o)}q.c=p
r.d.$1(q)},
$S:8}
A.hf.prototype={
a0(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.bL(b)
else{s=r.a
if(q.i("ao<1>").b(b))s.bO(b)
else s.am(q.c.a(b))}},
be(a,b){var s=this.a
if(this.b)s.K(a,b)
else s.aV(a,b)}}
A.kW.prototype={
$1(a){return this.a.$2(0,a)},
$S:9}
A.kX.prototype={
$2(a,b){this.a.$2(1,new A.dz(a,t.l.a(b)))},
$S:30}
A.l0.prototype={
$2(a,b){this.a(A.I(a),b)},
$S:28}
A.dn.prototype={
k(a){return A.z(this.a)},
$iJ:1,
gau(){return this.b}}
A.j8.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.K(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.K(q.e.ay(),q.f.ay())},
$S:10}
A.j7.prototype={
$1(a){var s,r,q=this,p=q.x
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.mk(s,q.b,a)
if(r.b===0)q.c.am(A.oK(s,p))}else if(r.b===0&&!q.e)q.c.K(q.f.ay(),q.r.ay())},
$S(){return this.x.i("S(0)")}}
A.e5.prototype={
be(a,b){A.ez(a,"error",t.K)
if((this.a.a&30)!==0)throw A.d(A.aB("Future already completed"))
if(b==null)b=A.lH(a)
this.K(a,b)},
aE(a){return this.be(a,null)}}
A.aN.prototype={
a0(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.aB("Future already completed"))
s.bL(r.i("1/").a(b))},
aD(a){return this.a0(a,null)},
K(a,b){this.a.aV(a,b)}}
A.d5.prototype={
a0(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.aB("Future already completed"))
s.bS(r.i("1/").a(b))},
aD(a){return this.a0(a,null)},
K(a,b){this.a.K(a,b)}}
A.cq.prototype={
ex(a){if((this.c&15)!==6)return!0
return this.b.b.bt(t.iW.a(this.d),a.a,t.k4,t.K)},
eu(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.eK(q,m,a.b,o,n,t.l)
else p=l.bt(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bC.b(A.bA(s))){if((r.c&1)!==0)throw A.d(A.cy("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cy("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.H.prototype={
aM(a,b,c){var s,r,q,p=this.$ti
p.B(c).i("1/(2)").a(a)
s=$.D
if(s===B.j){if(b!=null&&!t.ng.b(b)&&!t.y.b(b))throw A.d(A.mn(b,"onError",u.c))}else{c.i("@<0/>").B(p.c).i("1(2)").a(a)
if(b!=null)b=A.pY(b,s)}r=new A.H(s,c.i("H<0>"))
q=b==null?1:3
this.aU(new A.cq(r,q,a,b,p.i("@<1>").B(c).i("cq<1,2>")))
return r},
cP(a,b){return this.aM(a,null,b)},
cc(a,b,c){var s,r=this.$ti
r.B(c).i("1/(2)").a(a)
s=new A.H($.D,c.i("H<0>"))
this.aU(new A.cq(s,19,a,b,r.i("@<1>").B(c).i("cq<1,2>")))
return s},
dR(a){this.a=this.a&1|16
this.c=a},
aX(a){this.a=a.a&30|this.a&1
this.c=a.c},
aU(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.f.a(r.c)
if((s.a&24)===0){s.aU(a)
return}r.aX(s)}A.da(null,null,r.b,t.M.a(new A.kx(r,a)))}},
c6(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.f.a(m.c)
if((n.a&24)===0){n.c6(a)
return}m.aX(n)}l.a=m.aA(a)
A.da(null,null,m.b,t.M.a(new A.kF(l,m)))}},
az(){var s=t.F.a(this.c)
this.c=null
return this.aA(s)},
aA(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bN(a){var s,r,q,p=this
p.a^=2
try{a.aM(new A.kB(p),new A.kC(p),t.P)}catch(q){s=A.bA(q)
r=A.by(q)
A.nu(new A.kD(p,s,r))}},
bS(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("ao<1>").b(a))if(q.b(a))A.kA(a,r)
else r.bN(a)
else{s=r.az()
q.c.a(a)
r.a=8
r.c=a
A.d4(r,s)}},
am(a){var s,r=this
r.$ti.c.a(a)
s=r.az()
r.a=8
r.c=a
A.d4(r,s)},
K(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.az()
this.dR(A.iy(a,b))
A.d4(this,s)},
bL(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("ao<1>").b(a)){this.bO(a)
return}this.dj(s.c.a(a))},
dj(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.da(null,null,s.b,t.M.a(new A.kz(s,a)))},
bO(a){var s=this,r=s.$ti
r.i("ao<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.da(null,null,s.b,t.M.a(new A.kE(s,a)))}else A.kA(a,s)
return}s.bN(a)},
aV(a,b){t.l.a(b)
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
try{p.am(p.$ti.c.a(a))}catch(q){s=A.bA(q)
r=A.by(q)
p.K(s,r)}},
$S:12}
A.kC.prototype={
$2(a,b){this.a.K(t.K.a(a),t.l.a(b))},
$S:41}
A.kD.prototype={
$0(){this.a.K(this.b,this.c)},
$S:0}
A.kz.prototype={
$0(){this.a.am(this.b)},
$S:0}
A.kE.prototype={
$0(){A.kA(this.b,this.a)},
$S:0}
A.ky.prototype={
$0(){this.a.K(this.b,this.c)},
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
q.c=l.cP(new A.kJ(n),t.z)
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
q.c=p.b.b.bt(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bA(l)
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
A.hg.prototype={}
A.ck.prototype={
gm(a){var s={},r=new A.H($.D,t.hy)
s.a=0
this.bn(new A.k6(s,this),!0,new A.k7(s,r),r.gdn())
return r}}
A.k6.prototype={
$1(a){A.C(this.b).c.a(a);++this.a.a},
$S(){return A.C(this.b).i("~(1)")}}
A.k7.prototype={
$0(){this.b.bS(this.a.a)},
$S:0}
A.bn.prototype={}
A.el.prototype={
gdK(){var s,r=this
if((r.b&8)===0)return A.C(r).i("bT<1>?").a(r.a)
s=A.C(r)
return s.i("bT<1>?").a(s.i("hW<1>").a(r.a).gbz())},
dw(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.b9(A.C(q).i("b9<1>"))
return A.C(q).i("b9<1>").a(s)}r=A.C(q)
s=r.i("hW<1>").a(q.a).gbz()
return r.i("b9<1>").a(s)},
gdW(){var s=this.a
if((this.b&8)!==0)s=t.gL.a(s).gbz()
return A.C(this).i("d3<1>").a(s)},
dk(){if((this.b&4)!==0)return new A.bm("Cannot add event after closing")
return new A.bm("Cannot add event while adding a stream")},
l(a,b){var s,r=this,q=A.C(r)
q.c.a(b)
s=r.b
if(s>=4)throw A.d(r.dk())
if((s&1)!==0)r.bb(b)
else if((s&3)===0)r.dw().l(0,new A.cn(b,q.i("cn<1>")))},
dV(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=A.C(l)
k.i("~(1)?").a(a)
t.Z.a(c)
if((l.b&3)!==0)throw A.d(A.aB("Stream has already been listened to."))
s=$.D
r=d?1:0
t.bm.B(k.c).i("1(2)").a(a)
A.pa(s,b)
q=c==null?A.qb():c
p=t.M
p.a(q)
o=new A.d3(l,a,s,r,k.i("d3<1>"))
n=l.gdK()
r=l.b|=1
if((r&8)!==0){m=k.i("hW<1>").a(l.a)
m.sbz(o)
m.eH(0)}else l.a=o
o.dS(n)
k=p.a(new A.kQ(l))
s=o.e
o.e=s|32
k.$0()
o.e&=4294967263
o.bP((s&4)!==0)
return o},
$imO:1,
$in_:1,
$ico:1}
A.kQ.prototype={
$0(){A.m6(this.a.d)},
$S:0}
A.hh.prototype={
bb(a){var s=this.$ti
s.c.a(a)
this.gdW().di(new A.cn(a,s.i("cn<1>")))}}
A.d2.prototype={}
A.bQ.prototype={
gt(a){return(A.ci(this.a)^892482866)>>>0},
F(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bQ&&b.a===this.a}}
A.d3.prototype={
c3(){var s=this.x,r=A.C(s)
r.i("bn<1>").a(this)
if((s.b&8)!==0)r.i("hW<1>").a(s.a).f_(0)
A.m6(s.e)},
c4(){var s=this.x,r=A.C(s)
r.i("bn<1>").a(this)
if((s.b&8)!==0)r.i("hW<1>").a(s.a).eH(0)
A.m6(s.f)}}
A.e4.prototype={
dS(a){var s=this
A.C(s).i("bT<1>?").a(a)
if(a==null)return
s.sb8(a)
if(a.c!=null){s.e|=64
a.aP(s)}},
c3(){},
c4(){},
di(a){var s=this,r=A.C(s),q=r.i("b9<1>?").a(s.r)
if(q==null)q=new A.b9(r.i("b9<1>"))
s.sb8(q)
q.l(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.aP(s)}},
bb(a){var s,r=this,q=A.C(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.cO(r.a,a,q)
r.e&=4294967263
r.bP((s&4)!==0)},
bP(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.sb8(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.c3()
else q.c4()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.aP(q)},
sb8(a){this.r=A.C(this).i("bT<1>?").a(a)},
$ibn:1,
$ico:1}
A.em.prototype={
bn(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.dV(s.i("~(1)?").a(a),d,c,b===!0)},
cF(a){return this.bn(a,null,null,null)}}
A.hn.prototype={}
A.cn.prototype={}
A.bT.prototype={
aP(a){var s,r=this
r.$ti.i("co<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.nu(new A.kN(r,a))
r.a=1}}
A.kN.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("co<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.C(r).i("co<1>").a(s).bb(r.b)},
$S:0}
A.b9.prototype={
l(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.hX.prototype={}
A.eu.prototype={$imV:1}
A.l_.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.k(0)
throw s},
$S:0}
A.hO.prototype={
eL(a){var s,r,q,p,o
t.M.a(a)
try{if(B.j===$.D){a.$0()
return}A.ne(null,null,this,a,t.H)}catch(q){s=A.bA(q)
r=A.by(q)
p=t.K.a(s)
o=t.l.a(r)
A.im(p,o)}},
cO(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.j===$.D){a.$1(b)
return}A.nf(null,null,this,a,b,t.H,c)}catch(q){s=A.bA(q)
r=A.by(q)
p=t.K.a(s)
o=t.l.a(r)
A.im(p,o)}},
ck(a){return new A.kO(this,t.M.a(a))},
cl(a,b){return new A.kP(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
eJ(a,b){b.i("0()").a(a)
if($.D===B.j)return a.$0()
return A.ne(null,null,this,a,b)},
bt(a,b,c,d){c.i("@<0>").B(d).i("1(2)").a(a)
d.a(b)
if($.D===B.j)return a.$1(b)
return A.nf(null,null,this,a,b,c,d)},
eK(a,b,c,d,e,f){d.i("@<0>").B(e).B(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.D===B.j)return a.$2(b,c)
return A.pZ(null,null,this,a,b,c,d,e,f)},
br(a,b,c,d){return b.i("@<0>").B(c).B(d).i("1(2,3)").a(a)}}
A.kO.prototype={
$0(){return this.a.eL(this.b)},
$S:0}
A.kP.prototype={
$1(a){var s=this.c
return this.a.cO(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.kM.prototype={
ai(a){return A.lf(a)&1073741823},
aj(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.e9.prototype={
h(a,b){if(!A.O(this.z.$1(b)))return null
return this.d6(b)},
j(a,b,c){var s=this.$ti
this.d8(s.c.a(b),s.Q[1].a(c))},
aF(a,b){if(!A.O(this.z.$1(b)))return!1
return this.d5(b)},
I(a,b){if(!A.O(this.z.$1(b)))return null
return this.d7(b)},
ai(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
aj(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(A.O(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.kL.prototype={
$1(a){return this.a.b(a)},
$S:54}
A.ea.prototype={
gA(a){var s=this,r=new A.eb(s,s.r,s.$ti.i("eb<1>"))
r.c=s.e
return r},
gm(a){return this.a},
G(a,b){var s=this.dq(b)
return s},
dq(a){var s=this.d
if(s==null)return!1
return this.bY(s[a.gt(a)&1073741823],a)>=0},
l(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bQ(s==null?q.b=A.lY():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bQ(r==null?q.c=A.lY():r,b)}else return q.dm(0,b)},
dm(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.lY()
r=J.cv(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.aY(b)]
else{if(p.bY(q,b)>=0)return!1
q.push(p.aY(b))}return!0},
bQ(a,b){this.$ti.c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.aY(b)
return!0},
aY(a){var s=this,r=new A.hD(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
bY(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1}}
A.hD.prototype={}
A.eb.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.bE(q))
else if(r==null){s.sbR(null)
return!1}else{s.sbR(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sbR(a){this.d=this.$ti.i("1?").a(a)},
$ia2:1}
A.jq.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:55}
A.h.prototype={
gA(a){return new A.bk(a,this.gm(a),A.aY(a).i("bk<h.E>"))},
u(a,b){return this.h(a,b)},
aG(a,b,c,d){var s,r=A.aY(a)
d=r.i("h.E").a(r.i("h.E?").a(d))
A.lU(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
k(a){return A.lN(a,"[","]")}}
A.dJ.prototype={}
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
for(s=J.aO(this.ga2(a)),q=q.i("y.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gah(a){return J.oe(this.ga2(a),new A.jw(a),A.aY(a).i("cN<y.K,y.V>"))},
gm(a){return J.aj(this.ga2(a))},
k(a){return A.lS(a)},
$iL:1}
A.jw.prototype={
$1(a){var s,r=this.a,q=A.aY(r)
q.i("y.K").a(a)
s=q.i("y.V")
return new A.cN(a,s.a(J.mj(r,a)),q.i("@<y.K>").B(s).i("cN<1,2>"))},
$S(){return A.aY(this.a).i("cN<y.K,y.V>(y.K)")}}
A.dX.prototype={
k(a){return A.lN(this,"{","}")}}
A.eh.prototype={$io:1,$ij:1,$imN:1}
A.ev.prototype={}
A.c2.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.c2&&this.a===b.a&&!0},
N(a,b){return B.e.N(this.a,t.cs.a(b).a)},
gt(a){var s=this.a
return(s^B.e.ca(s,30))&1073741823},
k(a){var s=this,r=A.oo(A.oU(s)),q=A.eZ(A.oS(s)),p=A.eZ(A.oO(s)),o=A.eZ(A.oP(s)),n=A.eZ(A.oR(s)),m=A.eZ(A.oT(s)),l=A.op(A.oQ(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
return k},
$iab:1}
A.a7.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.a7&&this.a===b.a},
gt(a){return B.e.gt(this.a)},
N(a,b){return B.e.N(this.a,t.J.a(b).a)},
k(a){var s,r,q,p,o,n=this.a,m=B.e.M(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.e.M(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.e.M(n,1e6)
p=q<10?"0":""
o=B.z.cK(B.e.k(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o},
$iab:1}
A.kv.prototype={}
A.J.prototype={
gau(){return A.by(this.$thrownJsError)}}
A.dm.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.f2(s)
return"Assertion failed"}}
A.bO.prototype={}
A.fz.prototype={
k(a){return"Throw of null."}}
A.bb.prototype={
gb1(){return"Invalid argument"+(!this.a?"(s)":"")},
gb0(){return""},
k(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+A.z(n),l=q.gb1()+o+m
if(!q.a)return l
s=q.gb0()
r=A.f2(q.b)
return l+s+": "+r}}
A.cU.prototype={
gb1(){return"RangeError"},
gb0(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.z(q):""
else if(q==null)s=": Not greater than or equal to "+A.z(r)
else if(q>r)s=": Not in inclusive range "+A.z(r)+".."+A.z(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.z(r)
return s}}
A.fb.prototype={
gb1(){return"RangeError"},
gb0(){if(A.I(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.h9.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.h6.prototype={
k(a){var s="UnimplementedError: "+this.a
return s}}
A.bm.prototype={
k(a){return"Bad state: "+this.a}}
A.eV.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.f2(s)+"."}}
A.fC.prototype={
k(a){return"Out of Memory"},
gau(){return null},
$iJ:1}
A.dZ.prototype={
k(a){return"Stack Overflow"},
gau(){return null},
$iJ:1}
A.eY.prototype={
k(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.ht.prototype={
k(a){return"Exception: "+this.a}}
A.j.prototype={
cG(a,b,c){var s=A.C(this)
return A.mD(this,s.B(c).i("1(j.E)").a(b),s.i("j.E"),c)},
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
k(a){return A.mx(this,"(",")")}}
A.a2.prototype={}
A.cN.prototype={
k(a){return"MapEntry("+A.z(this.a)+": "+A.z(this.b)+")"}}
A.S.prototype={
gt(a){return A.v.prototype.gt.call(this,this)},
k(a){return"null"}}
A.v.prototype={$iv:1,
F(a,b){return this===b},
gt(a){return A.ci(this)},
k(a){return"Instance of '"+A.jP(this)+"'"},
toString(){return this.k(this)}}
A.i_.prototype={
k(a){return""},
$iaU:1}
A.fY.prototype={
gm(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.q.prototype={}
A.it.prototype={
gm(a){return a.length}}
A.eI.prototype={
k(a){return String(a)}}
A.eJ.prototype={
k(a){return String(a)}}
A.eO.prototype={}
A.eP.prototype={
gbo(a){return new A.bR(a,"load",!1,t.bz)}}
A.bY.prototype={
sa1(a,b){a.height=b},
sa4(a,b){a.width=b},
bB(a,b){return a.getContext(b)},
$ibY:1}
A.cC.prototype={
sep(a,b){a.fillStyle=b},
$icC:1}
A.b0.prototype={
gm(a){return a.length}}
A.iP.prototype={
gm(a){return a.length}}
A.G.prototype={$iG:1}
A.cG.prototype={
al(a,b){var s=$.nx(),r=s[b]
if(typeof r=="string")return r
r=this.dX(a,b)
s[b]=r
return r},
dX(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.nz()+b
if(s in a)return s
return b},
ao(a,b,c,d){if(d==null)d=""
a.setProperty(b,c,d)},
gm(a){return a.length}}
A.iQ.prototype={}
A.aP.prototype={}
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
A.dw.prototype={
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
A.dx.prototype={
k(a){var s,r=a.left
r.toString
r="Rectangle ("+A.z(r)+", "
s=a.top
s.toString
return r+A.z(s)+") "+A.z(this.ga4(a))+" x "+A.z(this.ga1(a))},
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
if(s===r){s=J.ip(b)
s=this.ga4(a)===s.ga4(b)&&this.ga1(a)===s.ga1(b)}else s=!1}else s=!1}else s=!1
return s},
gt(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.jL(r,s,this.ga4(a),this.ga1(a))},
gc_(a){return a.height},
ga1(a){var s=this.gc_(a)
s.toString
return s},
gcd(a){return a.width},
ga4(a){var s=this.gcd(a)
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
gbo(a){return new A.bR(a,"load",!1,t.bz)},
$iW:1}
A.k.prototype={$ik:1}
A.e.prototype={
e9(a,b,c,d){t.du.a(c)
if(c!=null)this.dh(a,b,c,!1)},
dh(a,b,c,d){return a.addEventListener(b,A.ba(t.du.a(c),1),!1)},
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
A.c5.prototype={
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
A.dD.prototype={
eC(a,b,c){return a.open(b,c)}}
A.c6.prototype={}
A.cL.prototype={$icL:1}
A.c7.prototype={
sef(a,b){a.checked=!1},
seQ(a,b){a.type=b},
$ic7:1}
A.bi.prototype={$ibi:1}
A.jt.prototype={
k(a){return String(a)}}
A.ce.prototype={}
A.jy.prototype={
gm(a){return a.length}}
A.fm.prototype={
h(a,b){return A.bx(a.get(A.ah(b)))},
C(a,b){var s,r
t.C.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bx(r.value[1]))}},
ga2(a){var s=A.c([],t.s)
this.C(a,new A.jB(s))
return s},
gm(a){return a.size},
$iL:1}
A.jB.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:5}
A.fn.prototype={
h(a,b){return A.bx(a.get(A.ah(b)))},
C(a,b){var s,r
t.C.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bx(r.value[1]))}},
ga2(a){var s=A.c([],t.s)
this.C(a,new A.jC(s))
return s},
gm(a){return a.size},
$iL:1}
A.jC.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:5}
A.ax.prototype={$iax:1}
A.fo.prototype={
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
return s==null?this.d3(a):s},
$iu:1}
A.dP.prototype={
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
A.ay.prototype={
gm(a){return a.length},
$iay:1}
A.fG.prototype={
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
A.fN.prototype={
h(a,b){return A.bx(a.get(A.ah(b)))},
C(a,b){var s,r
t.C.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bx(r.value[1]))}},
ga2(a){var s=A.c([],t.s)
this.C(a,new A.jW(s))
return s},
gm(a){return a.size},
$iL:1}
A.jW.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:5}
A.fP.prototype={
gm(a){return a.length}}
A.ar.prototype={$iar:1}
A.fS.prototype={
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
A.az.prototype={$iaz:1}
A.fT.prototype={
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
A.aA.prototype={
gm(a){return a.length},
$iaA:1}
A.fX.prototype={
h(a,b){return a.getItem(A.ah(b))},
C(a,b){var s,r,q
t.gS.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga2(a){var s=A.c([],t.s)
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
A.h0.prototype={
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
A.h1.prototype={
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
A.aC.prototype={$iaC:1}
A.h3.prototype={
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
A.hb.prototype={
gm(a){return a.length}}
A.d1.prototype={
cN(a,b){var s
t.hv.a(b)
this.dz(a)
s=A.nh(b,t.cZ)
s.toString
return this.dO(a,s)},
dO(a,b){return a.requestAnimationFrame(A.ba(t.hv.a(b),1))},
dz(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ikm:1}
A.hk.prototype={
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
A.e6.prototype={
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
r=J.ip(b)
if(s===r.ga4(b)){s=a.height
s.toString
r=s===r.ga1(b)
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
gc_(a){return a.height},
ga1(a){var s=a.height
s.toString
return s},
gcd(a){return a.width},
ga4(a){var s=a.width
s.toString
return s}}
A.hx.prototype={
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
A.ec.prototype={
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
A.hS.prototype={
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
A.i0.prototype={
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
A.e7.prototype={
bn(a,b,c,d){var s=A.C(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.cp(this.a,this.b,a,!1,s.c)}}
A.bR.prototype={}
A.e8.prototype={}
A.kw.prototype={
$1(a){return this.a.$1(t.L.a(a))},
$S:14}
A.p.prototype={
gA(a){return new A.dA(a,this.gm(a),A.aY(a).i("dA<p.E>"))}}
A.dA.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sc0(J.mj(s.a,r))
s.c=r
return!0}s.sc0(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
sc0(a){this.d=this.$ti.i("1?").a(a)},
$ia2:1}
A.hm.prototype={$ie:1,$ikm:1}
A.hl.prototype={}
A.ho.prototype={}
A.hp.prototype={}
A.hq.prototype={}
A.hr.prototype={}
A.hu.prototype={}
A.hv.prototype={}
A.hy.prototype={}
A.hz.prototype={}
A.hE.prototype={}
A.hF.prototype={}
A.hG.prototype={}
A.hH.prototype={}
A.hI.prototype={}
A.hJ.prototype={}
A.hM.prototype={}
A.hN.prototype={}
A.hP.prototype={}
A.ei.prototype={}
A.ej.prototype={}
A.hQ.prototype={}
A.hR.prototype={}
A.hV.prototype={}
A.i1.prototype={}
A.i2.prototype={}
A.en.prototype={}
A.eo.prototype={}
A.i4.prototype={}
A.i5.prototype={}
A.ib.prototype={}
A.ic.prototype={}
A.id.prototype={}
A.ie.prototype={}
A.ig.prototype={}
A.ih.prototype={}
A.ii.prototype={}
A.ij.prototype={}
A.ik.prototype={}
A.il.prototype={}
A.kn.prototype={
cr(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.l(r,a)
B.a.l(this.b,null)
return q},
bA(a){var s,r,q,p,o,n,m,l,k=this,j={}
if(a==null)return a
if(A.kY(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.R(A.cy("DateTime is outside valid range: "+s,null))
A.ez(!0,"isUtc",t.k4)
return new A.c2(s,!0)}if(a instanceof RegExp)throw A.d(A.lW("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.qC(a,t.z)
if(A.nq(a)){q=k.cr(a)
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
q=k.cr(n)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p!=null)return p
o=J.at(n)
m=o.gm(n)
p=k.c?new Array(m):n
B.a.j(r,q,p)
for(r=J.de(p),l=0;l<m;++l)r.j(p,l,k.bA(o.h(n,l)))
return p}return a}}
A.kp.prototype={
$2(a,b){var s=this.a.a,r=this.b.bA(b)
J.mk(s,a,r)
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
$1(a){return this.a.a0(0,this.b.i("0/?").a(a))},
$S:9}
A.lo.prototype={
$1(a){if(a==null)return this.a.aE(new A.jJ(a===undefined))
return this.a.aE(a)},
$S:9}
A.hA.prototype={
D(a){if(a<=0||a>4294967296)throw A.d(A.oV("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
R(){return Math.random()},
ez(){return Math.random()<0.5},
$imI:1}
A.aH.prototype={$iaH:1}
A.fg.prototype={
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
A.aJ.prototype={$iaJ:1}
A.fA.prototype={
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
A.fZ.prototype={
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
gbo(a){return new A.bR(a,"load",!1,t.bz)}}
A.aL.prototype={$iaL:1}
A.h4.prototype={
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
A.hB.prototype={}
A.hC.prototype={}
A.hK.prototype={}
A.hL.prototype={}
A.hY.prototype={}
A.hZ.prototype={}
A.i6.prototype={}
A.i7.prototype={}
A.aZ.prototype={
gm(a){return a.length},
$iaZ:1}
A.dq.prototype={
sed(a,b){a.buffer=b}}
A.bX.prototype={
dt(a,b,c,d){t.p0.a(c)
t.lW.a(d)
return a.decodeAudioData(b,A.ba(c,1),A.ba(d,1))},
ek(a,b){var s=new A.H($.D,t.og),r=new A.aN(s,t.oJ)
this.dt(a,b,new A.iC(r),new A.iD(r))
return s},
$ibX:1}
A.iC.prototype={
$1(a){this.a.a0(0,t.bD.a(a))},
$S:23}
A.iD.prototype={
$1(a){this.a.aE(t.jW.a(a))},
$S:24}
A.F.prototype={
bT(a,b,c,d){return a.connect(b,c,d)},
$iF:1}
A.eK.prototype={
saO(a,b){a.value=b}}
A.eL.prototype={
h(a,b){return A.bx(a.get(A.ah(b)))},
C(a,b){var s,r
t.C.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bx(r.value[1]))}},
ga2(a){var s=A.c([],t.s)
this.C(a,new A.iE(s))
return s},
gm(a){return a.size},
$iL:1}
A.iE.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:5}
A.bc.prototype={}
A.eM.prototype={
gm(a){return a.length}}
A.dr.prototype={}
A.cK.prototype={}
A.fB.prototype={
gm(a){return a.length}}
A.hj.prototype={}
A.eQ.prototype={$ieQ:1}
A.f7.prototype={$if7:1}
A.fH.prototype={$ifH:1}
A.cV.prototype={
cm(a,b){return a.bindVertexArray(b)},
cj(a,b,c){return a.bindBuffer(b,c)},
aC(a,b,c){return a.bindFramebuffer(b,c)},
P(a,b,c){return a.bindTexture(b,c)},
el(a,b){return a.deleteTexture(b)},
ct(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aL(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.m4(g)){s.dY(a,b,c,d,e,f,g,h,i,j)
return}if(t.hQ.b(g)&&h==null&&r&&j==null){s.dZ(a,b,c,d,e,f,g)
return}if(t.g.b(g)&&h==null&&r&&j==null){s.e_(a,b,c,d,e,f,g)
return}if(t.eL.b(g)&&h==null&&r&&j==null){s.e0(a,b,c,d,e,f,g)
return}throw A.d(A.cy("Incorrect number or type of arguments",null))},
eN(a,b,c,d,e,f,g){return this.aL(a,b,c,d,e,f,g,null,null,null)},
dY(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
dZ(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
e_(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
e0(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
eR(a,b,c){return a.uniform1f(b,c)},
eS(a,b,c){return a.uniform1i(b,c)},
eT(a,b,c,d){return a.uniform2f(b,c,d)},
eU(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eV(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eX(a,b){return a.useProgram(b)},
$icV:1}
A.bo.prototype={$ibo:1}
A.h5.prototype={$ih5:1}
A.ha.prototype={$iha:1}
A.fU.prototype={
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
A.hT.prototype={}
A.hU.prototype={}
A.fa.prototype={
b_(a){var s=this.b
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
B.a.bD(p,0,o.c,o.b)
o.sb9(p)}o.aW(b,o.c++)},
gm(a){return this.c},
I(a,b){var s,r,q=this
q.$ti.c.a(b)
s=q.dG(b)
if(s<0)return!1;++q.d
r=q.dM()
if(s<q.c)if(q.a.$2(r,b)<=0)q.aW(r,s)
else q.bM(r,s)
return!0},
aN(a){var s=this.e1()
B.a.aR(s,this.a)
return s},
e1(){var s,r,q=this.$ti,p=A.c([],q.i("r<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
k(a){var s=this.b
return A.mx(A.mR(s,0,A.ez(this.c,"count",t.S),A.a4(s).c),"(",")")},
aS(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.b5(q,null,!1,n.i("1?"))
B.a.bD(p,0,o.c,o.b)
o.sb9(p)}o.aW(b,o.c++)},
dG(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.b_(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.T(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
dM(){var s=this,r=s.c-1,q=s.b_(r)
B.a.j(s.b,r,null)
s.c=r
return q},
aW(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.e.M(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.S()
if(q>0)break
B.a.j(o.b,b,p)}B.a.j(o.b,b,a)},
bM(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.$ti.c
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
if(p<q){j=i.b_(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sb9(a){this.b=this.$ti.i("m<1?>").a(a)}}
A.kU.prototype={
gA(a){var s=this.a
return new A.cr(s,s.d,this.$ti.i("cr<1>"))}}
A.cr.prototype={
n(){var s,r=this,q=r.a
if(r.b!==q.d)throw A.d(A.bE(q))
s=r.d+1
if(0<=s&&s<q.c){q=q.b
if(!(s>=0&&s<q.length))return A.b(q,s)
r.sc7(q[s])
r.d=s
return!0}r.sc7(null)
r.d=-2
return!1},
gp(a){var s
if(this.d<0)s=A.R(A.aB("No element"))
else{s=this.c
if(s==null)s=this.$ti.c.a(null)}return s},
sc7(a){this.c=this.$ti.i("1?").a(a)},
$ia2:1}
A.l.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.l&&b.a===this.a},
gt(a){return B.e.gt(this.a)},
k(a){return"Color(0x"+B.z.cK(B.e.eO(this.a,16),8,"0")+")"}}
A.Y.prototype={
cu(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.e.as(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.d(A.aB(b.k(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.e.as(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.d(A.lL(b.k(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
Y(a,b,c){var s=B.e.as(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
E(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.e.as(d*s+c)
q=p.c
if(r>=q.length)throw A.d(A.lL("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
k(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.e.as(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.z(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.fy.prototype={
saO(a,b){var s,r,q,p=this
p.$ti.c.a(b)
if(b===p.b)return
p.se6(b)
s=p.a
r=A.c(s.slice(0),A.a4(s))
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.B)(r),++q)r[q].$0()},
se6(a){this.b=this.$ti.c.a(a)}}
A.aK.prototype={
v(a,b){return new A.aK(this.a+b.a,this.b+b.b)},
F(a,b){if(b==null)return!1
return b instanceof A.aK&&b.a===this.a&&b.b===this.b},
gt(a){return A.jL(this.a,this.b,B.D,B.D)},
k(a){return"Offset("+B.c.cQ(this.a,1)+", "+B.c.cQ(this.b,1)+")"}}
A.cx.prototype={
gU(a){return B.c.w(this.b.d/24)},
gV(a){return B.c.w(this.b.e/36)},
q(){var s=this.b
return new A.i(B.c.w(s.d/24),B.c.w(s.e/36))},
$idC:1,
gbm(){return null}}
A.is.prototype={}
A.ir.prototype={
ec(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.b
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
n=b.y.O(s)
for(p=o.a,m=p.length,l=n.c,k=n.a,j=l.length,c=c.a,i=0;i<p.length;p.length===m||(0,A.B)(p),++i){h=p[i]
if(h.e)continue
g=h.q()
if(g==null)continue
f=g.aq(s)
e=g.b*k+g.a
if(!(e>=0&&e<j))return A.b(l,e)
if(l[e]!==1||h===a)continue
if(!A.np(h,a))B.a.l(q,h)
else if(f<10.5){B.a.l(r,h)
e=h.q()
d=e.b*100+e.a
if(!(d>=0&&d<4000))return A.b(c,d)
B.e0.j(c,d,Math.max(c[d],20))}}c=this.a.X(a,r,q,new A.a9(null,null),b).a
if(c==null)return new A.cX()
return c}}
A.a9.prototype={}
A.al.prototype={}
A.bL.prototype={
X(a,b,c,d,e){var s,r,q=null,p=t.k
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
X(a,b,c,d,e){var s,r=t.k
r.a(b)
r.a(c)
if(d.b!=null)return d
if(0<b.length){s=b[0]
r=a.r
if(r!=null)r.c=s
return new A.a9(null,s)}return d}}
A.cE.prototype={
X(a,b,c,d,e){var s,r,q=t.k
q.a(b)
q.a(c)
if(d.b!=null||c.length===0)return d
for(q=c.length,s=0;s<q;++s){r=c[s].r
if(r!=null&&r.c!=null){q=r.c
q.toString
return new A.a9(null,q)}}return d}}
A.bJ.prototype={
X(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=t.k
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
j=B.e.cY(q,100)
s=B.e.M(q,100)
m=$.df()
l=a.q()
l.toString
k=m.aH(l,new A.i(j,s),r)
if(k==null)return d
j=k.b.d
s=a.q()
s.toString
return new A.a9(new A.aI(j.T(0,s),a),null)}}
A.fL.prototype={
X(a,b,c,d,e){var s,r,q,p=t.k
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
q=e.fx.a.bh(r,p,-1)
if(q==null)return d
this.b=!0
p=a.q()
p.toString
return new A.a9(new A.aI(q.T(0,p),a),null)}}
A.dU.prototype={
X(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=t.k
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
q=c.T(0,s)
e.a=e.a.b
return new A.a9(new A.aI(q,a),d)}c=a.q()
c.toString
s=a2.fx.a
p=s.bh(r,c,-1)
if(p==null){o=c.b*100+c.a
s=s.a
if(!(o>=0&&o<4000))return A.b(s,o)
n=s[o]
m=a2.y.O(c)
for(c=m.c,l=m.a,k=c.length,j=d,i=1;i<100;++i)for(h=1;h<40;++h){o=h*100+i
if(!(o<4000))return A.b(s,o)
g=s[o]
f=h*l+i
if(!(f<k))return A.b(c,f)
if(c[f]===1&&g<n){j=new A.i(i,h)
n=g}}if(j!=null){c=$.df()
s=a.q()
s.toString
e.a=c.aH(s,j,r)}return new A.a9(new A.cX(),d)}c=a.q()
c.toString
return new A.a9(new A.aI(p.T(0,c),a),d)}}
A.fM.prototype={
X(a,b,c,d,e){var s,r,q,p,o,n,m=t.k
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
if(p.aq(o)<=s)return d}if(b.length===0)return d
m=a.q()
m.toString
n=e.fx.a.bh(r,m,-1)
if(n==null)return d
m=a.q()
m.toString
return new A.a9(new A.aI(n.T(0,m),a),null)}}
A.l7.prototype={
$1(a){t.lZ.a(a)
return a.c===B.at&&t.mm.a(a.b).a===this.a.Q.a},
$S:25}
A.bB.prototype={
X(a,b,c,d,e){var s,r,q,p,o,n,m=t.k
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
o=s.aH(q,p,r)
if(o==null)return d
s=a.c.x
n=s.gbq()
if(n!=null&&o.gbg()<=n.ch/5){q=s.b.h(0,B.r)
q.toString
if(q.e===0)if(A.qp(s,n))return new A.a9(new A.dT(a),m)
else{s=o.b.d
q=a.q()
q.toString
return new A.a9(new A.aI(s.T(0,q),a),m)}s=m.q()
s.toString
return new A.a9(new A.dS(s,a),m)}s=o.b.d
q=a.q()
q.toString
return new A.a9(new A.aI(s.T(0,q),a),m)}}
A.b1.prototype={
X(a,b,c,d,e){var s,r,q,p,o=t.k
o.a(b)
o.a(c)
for(o=this.a,s=o.length,r=d,q=0;q<o.length;o.length===s||(0,A.B)(o),++q,r=p){p=o[q].X(a,b,c,r,e)
if(p.a!=null)return p}return r},
$ial:1}
A.bl.prototype={}
A.lx.prototype={
$0(){return new A.a3(2,6,0,0,B.bh)},
$S:2}
A.lv.prototype={
$0(){return new A.b1(A.c([new A.bL(),new A.bM(),new A.dU(),new A.bB(),new A.bJ()],t.a))},
$S:3}
A.lw.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lr.prototype={
$0(){return new A.a3(2,4,0,0,B.aw)},
$S:2}
A.lp.prototype={
$0(){return new A.b1(A.c([new A.bL(),new A.bM(),new A.dU(),new A.bB(),new A.bJ()],t.a))},
$S:3}
A.lq.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lA.prototype={
$0(){return new A.a3(10,7,0,0,B.aw)},
$S:2}
A.ly.prototype={
$0(){return new A.b1(A.c([new A.bL(),new A.bM(),new A.cE(),new A.bB(),new A.bJ()],t.a))},
$S:3}
A.lz.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lD.prototype={
$0(){return new A.a3(10,7,0,0,B.bh)},
$S:2}
A.lB.prototype={
$0(){return new A.b1(A.c([new A.bL(),new A.bM(),new A.cE(),new A.fL(),new A.bB(),new A.bJ()],t.a))},
$S:3}
A.lC.prototype={
$0(){var s=A.fc(B.V)
s.e=9
return A.c([s],t.I)},
$S:4}
A.l4.prototype={
$0(){return new A.a3(3,7,0,0,B.dO)},
$S:2}
A.l2.prototype={
$0(){return new A.b1(A.c([new A.bL(),new A.bM(),new A.cE(),new A.fM(6),new A.bB(),new A.bJ()],t.a))},
$S:3}
A.l3.prototype={
$0(){return A.c([A.fc(B.V)],t.I)},
$S:4}
A.iJ.prototype={
eW(a,b,c,d,e,f){var s,r=this,q=Math.min(Math.max(B.c.aK(c*24-f/2),0),B.e.aK(2400-f)),p=Math.min(Math.max(B.c.aK(d*36-e/2),0),B.e.aK(1440-e)),o=r.bW(Math.abs(q-r.a)),n=r.bW(Math.abs(p-r.b))
if(b){r.a=q
r.b=p
return}s=r.a
if(q>s)r.a=s+o
else if(q<s)r.a=s-o
s=r.b
if(p>s)r.b=s+n
else if(p<s)r.b=s-n},
bW(a){if(a>30)return 6
if(a>20)return 4
return 1}}
A.a_.prototype={
h(a,b){return this.b.h(0,A.C(this).i("a_.T").a(b))}}
A.cP.prototype={}
A.cO.prototype={}
A.f8.prototype={
bk(a){return this.es(t.U.a(a))},
es(a){var s=0,r=A.bv(t.H),q,p=this,o
var $async$bk=A.bw(function(b,c){if(b===1)return A.bq(c,r)
while(true)switch(s){case 0:o=p.e
if(o.length>3){s=1
break}B.a.l(o,a)
if(p.r){s=1
break}p.ax()
case 1:return A.br(q,r)}})
return A.bs($async$bk,r)},
ax(){var s=0,r=A.bv(t.z),q=1,p,o=[],n=this,m
var $async$ax=A.bw(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.r=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.a5(n.aw(),$async$ax)
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
return A.bs($async$ax,r)},
c8(){var s=new A.H($.D,t.cU),r=new A.d5(s,t.iF)
B.a.l(this.a.f,t.x.a(t.nD.a(r.gej(r))))
return s},
L(){var s=0,r=A.bv(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$L=A.bw(function(a4,a5){if(a4===1)return A.bq(a5,r)
while(true)$async$outer:switch(s){case 0:a0=p.a
a1=a0.c
a2=a1.e
a3=a1.d
if(!(a3<a2.length)){q=A.b(a2,a3)
s=1
break}a3=a2[a3].a
o=A.c(a3.slice(0),A.a4(a3))
a2=p.b,a3=B.a.ge8(a2),n=t.nt,m=a1.a.c,a1=p.f,l=a1.a,a1=a1.b,k=p.c,j=p.d,i=p.e,h=0,g=!1
case 4:if(!!0){s=5
break}case 6:if(!(f=a2.length,f!==0)){s=7
break}if(0>=f){q=A.b(a2,0)
s=1
break}s=8
return A.a5(a2[0].H(0,a0),$async$L)
case 8:e=a5
B.a.a_(k,e.r)
case 9:if(!(f=e.a,f!=null)){s=10
break}B.a.j(a2,0,f)
s=11
return A.a5(f.H(0,a0),$async$L)
case 11:e=a5
B.a.a_(k,e.r)
s=9
break
case 10:f=e.c
if(f!=null)A.iq(f)
d=e.x
s=d!=null?12:13
break
case 12:s=!e.f&&i.length===0?14:16
break
case 14:s=j.length!==0?17:18
break
case 17:s=19
return A.a5(p.bX(),$async$L)
case 19:case 18:s=20
return A.a5(p.an(d),$async$L)
case 20:s=15
break
case 16:B.a.l(j,d)
case 15:case 13:case 21:if(!(f=k.length,f!==0)){s=22
break}if(0>=f){q=A.b(k,-1)
s=1
break}s=23
return A.a5(k.pop().H(0,a0),$async$L)
case 23:c=a5
B.a.a_(k,c.r)
case 24:if(!(f=c.a,f!=null)){s=25
break}s=26
return A.a5(f.H(0,a0),$async$L)
case 26:c=a5
B.a.a_(k,c.r)
s=24
break
case 25:f=c.c
if(f!=null)A.iq(f)
s=21
break
case 22:if(e.d)g=B.ds.cZ(g,!0)
B.a.cM(a2,0)
l.saO(0,m.b/m.a)
a1.saO(0,m.d/1000)
s=6
break
case 7:if(!g){s=3
break}for(;f=o.length,h<f;){if(!(h>=0)){q=A.b(o,h)
s=1
break $async$outer}b=o[h];++h
if(b.q()==null)continue
if(A.qB(n.a(a3),b,a0)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=j.length!==0?27:29
break
case 27:s=i.length===0?30:32
break
case 30:s=33
return A.a5(p.bX(),$async$L)
case 33:s=31
break
case 32:s=34
return A.a5(p.aB(),$async$L)
case 34:case 31:s=28
break
case 29:s=35
return A.a5(p.c8(),$async$L)
case 35:case 28:if(!g){s=1
break}for(a0=o.length,a=0;a<a0;++a)o[a].a=100
case 1:return A.br(q,r)}})
return A.bs($async$L,r)},
aB(){var s=0,r=A.bv(t.H),q=this,p,o,n
var $async$aB=A.bw(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.B)(p),++n)p[n].x.$0()
B.a.sm(p,0)
s=2
return A.a5(q.c8(),$async$aB)
case 2:return A.br(null,r)}})
return A.bs($async$aB,r)},
an(a){var s=0,r=A.bv(t.H),q=this,p
var $async$an=A.bw(function(b,c){if(b===1)return A.bq(c,r)
while(true)switch(s){case 0:p=new A.H($.D,t.cU)
if(a!=null)B.a.l(q.d,a)
B.a.l(q.a.f,t.x.a(new A.j9(q,new A.aN(p,t.ou))))
s=2
return A.a5(p,$async$an)
case 2:return A.br(null,r)}})
return A.bs($async$an,r)},
bX(){return this.an(null)},
aw(){var s=0,r=A.bv(t.H),q,p=this,o,n,m,l,k,j
var $async$aw=A.bw(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:j=p.e
if(j.length===0){s=1
break}o=B.a.cM(j,0)
switch(o){case B.a1:case B.a2:case B.a3:case B.a4:switch(o){case B.a1:n=new A.i(0,-1)
break
case B.a2:n=new A.i(1,0)
break
case B.a3:n=new A.i(0,1)
break
case B.a4:n=new A.i(-1,0)
break
default:A.R(A.aB(""))
n=null}m=new A.aI(n,p.a.c.a)
break
case B.dn:m=new A.cX()
break
case B.b1:j=p.a
l=j.r.b?j.gaQ().c:null
if(l==null){m=null
break}m=new A.dS(l,j.c.a)
break
case B.b4:m=p.dE()
break
case B.b0:m=new A.dT(p.a.c.a)
break
case B.b_:j=p.z
j=j==null?null:j.b
k=j==null
if(k)j=new A.f_(new Uint8Array(4000),A.ad(t.j,t.S))
m=p.z=new A.eN(p.a.c.a,j,k)
break
case B.b2:j=p.a.r
k=!j.b
j.b=k
if(k){j=document.body.style
B.q.ao(j,B.q.al(j,"cursor"),"crosshair",null)}else document.body.style.removeProperty("cursor")
m=null
break
case B.b3:j=p.a.r
if(j.b){j.b=!1
document.body.style.removeProperty("cursor")}m=null
break
default:m=null
break}s=m!=null?3:4
break
case 3:B.a.l(p.b,m)
s=5
return A.a5(p.L(),$async$aw)
case 5:case 4:case 1:return A.br(q,r)}})
return A.bs($async$aw,r)},
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
B.a.a_(i,A.no(k,r[n]))}}s=i.length
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
l=m==null?0:B.e.M(q-m.a,1000)
n.e=a
k=l/B.e.M(n.a.a,1000)
j=n.f
i=n.d
i=n.d=B.c.eg(j?n.d=i+k:n.d=i-k,-1,1)
i>=1||i<0
n.r.$1(n)}B.a.l(h.a.f,t.x.a(h.gc5()))}}
A.j9.prototype={
$1(a){var s,r,q,p,o,n,m
t.J.a(a)
s=A.c([],t.fy)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.B)(q),++n){m=q[n]
if(m.d>=1||o.length!==0){m.x.$0()
B.a.l(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.B)(s),++n)B.a.I(q,s[n])
if(q.length===0)this.b.aD(0)
else B.a.l(r.a.f,t.x.a(this))},
$S:13}
A.dY.prototype={
k(a){return"SlotType."+this.b}}
A.b4.prototype={
k(a){return"ItemType."+this.b}}
A.eH.prototype={}
A.aG.prototype={
gbG(){switch(this.c){case B.ap:return B.ay
case B.aq:return B.az
case B.ar:return B.aA
case B.as:case B.dr:case B.b5:case B.at:return null}}}
A.iO.prototype={}
A.U.prototype={}
A.f9.prototype={
k(a){return"HandRequirement."+this.b}}
A.b3.prototype={
k(a){return"DamageType."+this.b}}
A.bG.prototype={
k(a){return"DiceType."+this.b}}
A.aM.prototype={
k(a){return"WeaponProperties."+this.b}}
A.jz.prototype={}
A.bF.prototype={}
A.c1.prototype={
k(a){return"CriticalEffect."+this.b}}
A.X.prototype={}
A.di.prototype={
k(a){return"AmmoType."+this.b}}
A.dj.prototype={}
A.aq.prototype={}
A.cz.prototype={
k(a){return"ArmorUpgradeType."+this.b}}
A.ak.prototype={}
A.eE.prototype={
a9(a){var s,r=a-10
if(r===0)return 0
else{s=r/2
if(r>0)return B.c.aa(s)
else return B.c.cn(s)}}}
A.c_.prototype={
cH(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x.geE()
r=a.x.gbd()
q=A.dt(a0,1,B.am)
p=b.y
o=p.a
n=q+p.a9(o)
m=a.y
l=10+Math.min(m.a9(m.b),r.e)
m=s.b
l=A.O(A.mt(m))?l+r.d:l+r.c
if(!a1)l-=2
k=t.Q
j=A.c([],k)
i=A.c([],k)
if(q===1){h=!1
g=!1}else{g=n>=l
if(q===20)h=!0
else{h=g
g=!1}}f="["+n+" vs "+A.z(l)+"]"
if(!h)return new A.cA(b.cx.a+" missed "+a.cx.a+" "+f,!1,0,B.ab,B.ab)
if(B.a.G(s.z,B.bx))B.a.l(j,new A.eW())
k=s.d
e=s.e
d=A.dt(a0,k,e)+p.a9(o)
if(g)d+=A.dt(a0,k,e)+p.a9(o)
B.a.G(b.ch,B.bk)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+s.y
return new A.cA(c,!0,d,j,i)},
cL(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x
r=s.gbq()
if(r==null)r=B.V
q=s.gbd()
s=b.y
p=Math.min(s.a9(s.b),q.e)
o=a.x.gbd()
n=A.dt(a0,1,B.am)
m=n+p
l=a.y
k=10+Math.min(l.a9(l.b),o.e)
l=r.c
k=A.O(A.mt(l))?k+o.d:k+o.c
if(!a1)k-=2
j=t.Q
i=A.c([],j)
h=A.c([],j)
if(n===1){g=!1
f=!1}else{f=m>=k
if(n===20)g=!0
else{g=f
f=!1}}e="["+m+" vs "+A.z(k)+"]"
if(!g)return new A.cA(b.cx.a+" missed "+a.cx.a+" "+e,!1,0,B.ab,B.ab)
j=r.f
d=A.dt(a0,1,j)
if(f)d+=A.dt(a0,1,j)+s.a9(s.a)
B.a.G(b.ch,B.bk)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+r.a
return new A.cA(c,!0,d,i,h)}}
A.cA.prototype={}
A.cJ.prototype={}
A.cI.prototype={
gbd(){var s,r,q
for(s=this.b,s=s.gah(s),s=s.gA(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.U)return q}return B.bN},
geE(){var s,r,q
for(s=this.b,s=s.gah(s),s=s.gA(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.X)return q}return B.dS},
gbq(){var s,r,q
for(s=this.b,s=s.gah(s),s=s.gA(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.aq)return q}return null},
eo(a,b){var s=this.b
s.h(0,b)
s.j(0,b,a)}}
A.fD.prototype={
k(a){return"Perk."+this.b}}
A.c3.prototype={
k(a){return"EquipmentSlot."+this.b}}
A.eW.prototype={}
A.cY.prototype={
k(a){return"TileType."+this.b}}
A.cD.prototype={
k(a){return"CollisionMode."+this.b}}
A.fl.prototype={}
A.cl.prototype={
k(a){return"TerrainType."+this.b}}
A.af.prototype={
k(a){return"TerrainWidget."+this.b}}
A.cc.prototype={
k(a){return"LockState."+this.b}}
A.b_.prototype={
k(a){return"Biome."+this.b}}
A.bN.prototype={
gU(a){return this.b.a},
gV(a){return this.b.b},
seM(a){t.dt.a(a)},
$idC:1,
gbm(){return this.z}}
A.fi.prototype={}
A.fj.prototype={$idC:1,
gbm(){return this.a},
gU(a){return this.b},
gV(a){return this.c}}
A.i.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.i&&b.a===this.a&&b.b===this.b},
gt(a){return A.jL(this.a,this.b,B.D,B.D)},
v(a,b){return new A.i(this.a+b.a,this.b+b.b)},
T(a,b){return new A.i(this.a-b.a,this.b-b.b)},
bv(){return new A.aK(this.a,this.b)},
aq(a){var s=Math.abs(this.a-a.a),r=Math.abs(this.b-a.b)
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
e3(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.a,i=j.a5(k,t.A),h=this.c
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
j.a8(b,k,i)}}
A.iZ.prototype={
ae(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=t.t,p=t.n,o=t.g2,n=t.N,m=t.z,l=0;l<s.length;s.length===r||(0,A.B)(s),++l){k=s[l]
$.me().a3(a,4,3,A.bj(["u_resolution",A.c([b.a,b.b],q),"u_time",k.gaZ().gev().eZ(0,k.gen(k).gev()),"u_offset",A.c([b.d,b.e],p),"u_origin",A.c([k.gU(k),k.gV(k)],o)],n,m))
k.saZ(k.gaZ().v(0,A.iY(11)))}r=A.a4(s).i("E(1)").a(new A.j_())
if(!!s.fixed$length)A.R(A.A("removeWhere"))
B.a.dN(s,r,!0)}}
A.j_.prototype={
$1(a){t.ox.a(a)
return a.gaZ().cR(0,a.gen(a))},
$S:31}
A.f1.prototype={}
A.j2.prototype={
d9(a,b,c,d,e,f){var s,r,q,p,o,n,m=this
m.gZ().a.J(m.a)
s=m.ch
s.a.J(m.a)
r=m.cx
r.a.J(m.a)
m.gbj().b.J(m.a)
q=m.gab()
p=m.a
q.d=p.createFramebuffer()
q.a.J(p)
q.b.J(p)
m.gcp().b.J(m.a)
m.gaQ().b.J(m.a)
p=m.a
$.me().J(p)
$.nZ().J(p)
p=m.c
q=p.e
o=p.d
if(!(o<q.length))return A.b(q,o)
o=A.io(q[o])
n=p.d
if(!(n<q.length))return A.b(q,n)
m.cv(o,q[n])
n=p.d
if(!(n<q.length))return A.b(q,n)
m.ce(p.a,A.io(q[n]))
n=p.d
if(!(n<q.length))return A.b(q,n)
n=s.b=q[n]
s.c=!0
r.c=n
r.b=!0
r=m.y
r.cD(n.c)
r.cw()
p=p.d
if(!(p<q.length))return A.b(q,p)
r.e=A.io(q[p])
p=m.dx.b
new A.bQ(p,A.C(p).i("bQ<1>")).cF(new A.j3(m,m.d.getBoundingClientRect()))},
gZ(){var s,r=this,q=r.Q
if(q===$){s=A.p0(r.a,r.y)
A.d8(r.Q,"sprites")
r.Q=s
q=s}return q},
gbj(){var s,r=this,q=r.cy
if(q===$){s=A.pA()
s=A.aR(A.c([new A.V("a_position",35044,5126,2,s),new A.V("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.l,A.c([new A.w("u_resolution",B.d),new A.w("u_offset",B.d)],t.o),u.q)
A.d8(r.cy,"fovRenderer")
q=r.cy=new A.j4(r.y,s,new A.i(-1,-1))}return q},
gab(){var s,r,q,p=this,o=u.p,n="a_position",m="u_resolution",l="u_block_size",k="u_player_visible_texture",j="u_offset",i=p.db
if(i===$){s=t.G
r=t.o
q=A.aR(A.c([new A.V(n,35044,5126,2,new Float32Array(A.d6(B.C)))],s),u.j,A.c([new A.w(m,B.d),new A.w("u_source_position",B.d),new A.w(l,B.d),new A.w("u_source_color",B.aF),new A.w("u_source_strength",B.t),new A.w("u_time",B.t),new A.w("u_visible_texture",B.o),new A.w(k,B.o),new A.w(j,B.d)],r),o)
r=A.aR(A.c([new A.V(n,35044,5126,2,new Float32Array(A.d6(B.C)))],s),u.B,A.c([new A.w("u_light_texture",B.o),new A.w("u_game_world_texture",B.o),new A.w(k,B.o),new A.w(m,B.d),new A.w(l,B.d),new A.w(j,B.d)],r),o)
s=A.c([],t.ow)
A.d8(p.db,"lightingRenderer")
i=p.db=new A.fk(q,r,p.y,s)}return i},
gcp(){var s,r=this,q=r.dy
if(q===$){s=A.aR(A.c([new A.V("a_position",35044,5126,2,new Float32Array(A.d6(B.C)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise(vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f*f*f+.6*f*f+.5*f)*color, 0.3);\n}\n",A.c([new A.w("u_resolution",B.d),new A.w("u_time",B.t),new A.w("u_offset",B.d),new A.w("u_player_vis_texture",B.o),new A.w("u_block_size",B.d)],t.o),u.h)
A.d8(r.dy,"filters")
q=r.dy=new A.j6(r.y,s)}return q},
gaQ(){var s,r=this,q=r.fr
if(q===$){s=A.aR(A.c([new A.V("a_position",35048,5126,2,new Float32Array(12))],t.G),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nuniform float u_time;\nuniform float u_visible;\n\nvoid main() {\n  if (u_visible == 0.0) {\n    discard;\n    return;\n  }\n  float scale = (sin(u_time * 3.0) + 1.0) / 4.0;\n  outColor = vec4(0.509, 0.69411, 1.0, scale + 0.3);\n}\n",A.c([new A.w("u_offset",B.d),new A.w("u_resolution",B.d),new A.w("u_time",B.t),new A.w("u_visible",B.t)],t.o),"#version 300 es\nin vec2 a_position;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n")
A.d8(r.fr,"selectionRenderer")
q=r.fr=new A.jY(r.y,s,B.A)}return q},
gbu(){var s,r=this,q=r.fy
if(q===$){s=A.c([],t.ff)
A.d8(r.fy,"textRenderer")
q=r.fy=new A.kc(r.b,s)}return q},
ae(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=3553
t.cH.a(a1)
c.a=a1
s=c.d
r=s.clientWidth
q=s.clientHeight
if(r!==c.k2||q!==c.k3){B.E.sa4(s,r)
B.E.sa1(s,q)
p=c.e
B.E.sa4(p,r)
B.E.sa1(p,q)
o=s.getBoundingClientRect()
s=p.style
n=o.left
n.toString
n=A.z(n)+"px"
B.q.ao(s,B.q.al(s,"left"),n,b)
n=p.style
s=o.top
s.toString
s=A.z(s)+"px"
B.q.ao(n,B.q.al(n,"top"),s,b)
s=p.style
n=o.width
n.toString
n=A.z(n)+"px"
B.q.ao(s,B.q.al(s,"width"),n,b)
p=p.style
n=o.height
n.toString
n=A.z(n)+"px"
B.q.ao(p,B.q.al(p,"height"),n,b)
c.k2=r
c.k3=q
s=c.id
if(s!=null)B.f.el(a1,s)
s=a1.createTexture()
c.id=s
B.f.P(a1,a,s)
B.f.aL(a1,a,0,6408,c.k2,c.k3,0,6408,5121,b)
a1.texParameteri(a,10241,9729)
a1.texParameteri(a,10242,33071)
a1.texParameteri(a,10243,33071)}s=c.z
p=c.y.e
s.eW(0,c.r1,p.a,p.b,q,r)
p=c.r2
p.a=r
p.b=q
p.d=s.a
p.e=s.b
p.c=a0
s=c.b
n=s.canvas
m=n.width
m.toString
n=n.height
n.toString
s.clearRect(0,0,m,n)
a1.viewport(0,0,r,q)
a1.clearColor(0,0,0,1)
a1.clear(16640)
a1.enable(3042)
a1.blendFuncSeparate(770,771,1,771)
B.f.aC(a1,36160,c.k1)
B.f.ct(a1,36160,36064,a,c.id,0)
a1.clearColor(0,0,0,1)
a1.clear(16640)
n=c.ch
if(n.c){n.e5(a1)
n.c=!1}s=t.t
m=t.n
l=t.N
k=t.z
n.a.a3(a1,4,48e3,A.bj(["u_resolution",A.c([p.a,p.b],s),"u_offset",A.c([p.d,p.e],m)],l,k))
n=c.cx
if(n.b){n.e3(0,a1)
n.b=!1}n.a.a3(a1,0,B.e.M(n.d,2),A.bj(["u_resolution",A.c([p.a,p.b],s),"u_offset",A.c([p.d,p.e],m)],l,k))
c.gZ().ae(a1,p)
n=c.gcp()
j=n.a
i=j.at(j.e,a1)
a1.activeTexture(33984)
B.f.P(a1,a,i)
n.b.a3(a1,4,3,A.bj(["u_time",p.c/1000,"u_resolution",A.c([p.a,p.b],s),"u_offset",A.c([p.d,p.e],m),"u_player_vis_texture",0,"u_block_size",A.c([24,36],s)],l,k))
B.f.aC(a1,36160,b)
n=c.r
c.gab().r=n.a
c.gab().f=c.id
c.gab().ae(a1,p)
j=c.gbj()
if(!j.a.e.F(0,j.c)||j.d)j.e7(a1)
j.b.a3(a1,4,48e3,A.bj(["u_resolution",A.c([p.a,p.b],s),"u_offset",A.c([p.d,p.e],m)],l,k))
c.go.ae(a1,p)
if(n.b){n=c.gaQ()
n.dJ(a1,p)
s=A.c([p.a,p.b],s)
m=A.c([p.d,p.e],m)
j=p.c
h=n.a
h=h.O(h.e)
g=n.c
h=h.Y(0,g.a,g.b)?1:0
n.b.a3(a1,4,6,A.bj(["u_resolution",s,"u_offset",m,"u_time",j/1000,"u_visible",h],l,k))}c.gbu().eG(p)
a1.finish()
f=A.iY(B.c.w(a0))
s=c.f
e=A.c(s.slice(0),A.a4(s))
B.a.sm(s,0)
for(s=e.length,d=0;d<e.length;e.length===s||(0,A.B)(e),++d)e[d].$1(f)
s=c.c.a.b
B.c.w(s.d/24)
B.c.w(s.e/36)
c.r1=!1},
bs(a){var s,r=this.c,q=r.e
r=r.d
if(!(r<q.length))return A.b(q,r)
B.a.I(q[r].a,a)
s=a.b
s.sac(-1)
s.sad(-1)
this.gZ().I(0,s)},
bH(a,b){var s=a.b,r=B.c.w(s.d/24),q=B.c.w(s.e/36),p=b.b,o=B.c.w(p.d/24),n=B.c.w(p.e/36)
s.sac(o)
s.sad(n)
p.sac(r)
p.sad(q)
if(a.x){s=this.y
s.e=new A.i(o,n)
s.bx()}if(b.x){s=this.y
s.e=new A.i(r,q)
s.bx()}},
cI(a,b){var s=a.b
s.sac(b.a)
s.sad(b.b)
if(a.x){s=this.y
s.e=b
s.bx()}},
cf(a,b,c){var s,r,q,p
if(c==null){s=this.c
r=s.e
s=s.d
if(!(s<r.length))return A.b(r,s)
q=r[s]}else q=c
B.a.l(q.a,a)
p=a.b
p.sac(b.a)
p.sad(b.b)
p.sag(0,B.aU)
s=this.gZ()
p.sbl(0,1)
s.l(0,p)},
ce(a,b){return this.cf(a,b,null)},
cv(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
B.a.sm(g.gab().x,0)
g.gZ().eh(0)
s=g.ch
s.b=b
s.c=!0
s=g.cx
s.c=b
s.b=!0
s=g.y
r=b.c
s.cD(r)
s.cw()
B.ax.aG(s.c,0,4000,0)
s.e=a
switch(b.d.a){case B.B:q=B.cJ
break
case B.u:q=B.cz
break
default:q=B.cW
break}for(r=r.c,p=r.length,o=0;o<r.length;r.length===p||(0,A.B)(r),++o){n=r[o]
m=n.b
l=A.mv(n.f,m.a*24,m.b*36)
if(l!=null){k=l.a=g.gZ()
j=k.c
j.$ti.c.a(l);++j.d
j.aS(0,l)
k.e=!0
n.y=l}k=n.f
if(k===B.U||k===B.Q){n.z=new A.fi(q,7)
i=g.db
if(i===$){h=A.oH(s)
A.d8(i,"lightingRenderer")
g.db=h
i=h}B.a.l(i.x,n)}}for(s=b.a,r=s.length,o=0;o<s.length;s.length===r||(0,A.B)(s),++o){l=s[o].b
l.f=B.aU
p=l.a
if(p!=null)p.e=!0
p=g.gZ()
l.x=1
k=l.a
if(k!=null)k.e=!0
l.a=p
k=p.c
k.$ti.c.a(l);++k.d
k.aS(0,l)
p.e=!0}}}
A.j3.prototype={
$1(a){var s,r,q
t.bd.a(a)
s=this.a.r2
r=J.at(a)
s.sey(r.h(a,0))
r=r.h(a,1)
q=this.b
q.left.toString
q=q.top
q.toString
if(typeof r!=="number")return r.T()
s.r=r-q},
$S:32}
A.a0.prototype={}
A.bC.prototype={}
A.K.prototype={}
A.fw.prototype={
H(a,b){var s,r,q=b.c,p=q.e,o=q.d+1
if(!(o<p.length))return A.b(p,o)
s=p[o]
r=A.io(s)
b.cv(r,s)
b.cf(q.a,r,s);++q.d
b.r1=!0
return new A.K(null,null,!0,!0,!1,B.h,null)}}
A.dT.prototype={
H(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.c.x,g=h.gbq(),f=h.b.h(0,B.r)
if(g==null||f.e===g.Q.b)return new A.K(j,j,!1,!0,!1,B.h,j)
q=h.a
p=q.length
o=t.mm
n=0
while(!0){if(!(n<p)){s=j
r=s
break}m=q[n]
if(m.c===B.at){l=o.a(m.b)
if(l.a===g.Q.a){s=m
r=l
break}}++n}if(r==null)return new A.K(j,j,!1,!0,!1,B.h,j)
i=i.q()
i.toString
b.x.ar("reload_1.mp3",i)
i=r.b
k=Math.min(i,g.Q.b)
i-=k
r.b=i
if(i===0)B.a.I(q,s)
i=f.e
i.toString
f.e=k+i
return new A.K(j,j,!0,!0,!1,B.h,j)}}
A.aI.prototype={
H(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f={},e=b.c,d=e.e,c=e.d
if(!(c<d.length))return A.b(d,c)
s=d[c]
c=h.b
r=c.q()
q=r.v(0,h.a)
p=s.c
if(!p.cu(q))return new A.K(g,g,!1,!0,!1,B.h,g)
o=p.h(0,q)
n=s.af(q)
if((o.c===B.b||A.O(A.bg(o.f)))&&n==null){if(o.f==null)return new A.K(g,g,!1,!0,!1,B.h,g)
f=e.d
if(!(f<d.length))return A.b(d,f)
m=A.no(o,d[f])
if(m.length!==0)return new A.K(B.a.gd2(m).b,g,!1,!0,!1,B.h,g)
return new A.K(g,g,!1,!0,!1,B.h,g)}l=A.c([],t.w)
f.a=!1
if(n!=null){if(A.np(n,c))return new A.K(new A.dp(!1,c,n),g,!1,!0,!1,B.h,g)
e=f.a=!0}else e=!1
d=b.y
d=d.O(d.e)
d.toString
k=!c.x
if(k)j=d.h(0,r)||d.h(0,q)
else j=!1
p.h(0,r)
if(o.r!=null)b.x.bp("water_footsteps_"+(B.v.D(5)+1)+".mp3",q,0.15)
if(j)i=new A.bC(A.iY(60),new A.jF(h,r,q),new A.jG(f,h,b,n,q))
else{if(e){n.toString
b.bH(n,c)}else b.cI(c,q)
i=g}c.a=0
return new A.K(g,g,!0,!0,k,l,i)}}
A.jF.prototype={
$1(a){var s=a.d,r=1-s,q=this.b,p=this.c,o=this.a.b.b
o.sU(0,q.a*24*r+p.a*24*s)
o.sV(0,q.b*36*r+p.b*36*s)},
$S:11}
A.jG.prototype={
$0(){var s,r=this,q=r.c,p=r.b.b
if(r.a.a){s=r.d
s.toString
q.bH(s,p)}else q.cI(p,r.e)},
$S:0}
A.cX.prototype={
H(a,b){return new A.K(null,null,!0,!0,!1,B.h,null)}}
A.fh.prototype={
H(a,b){var s=this.a.c
s.d-=1000;++s.c;++s.e;++s.f;++s.r
A.eB("LEVEL UP")
return new A.K(null,null,!0,!0,!1,B.h,null)}}
A.e0.prototype={
H(a,b){var s,r,q,p,o,n=b.c,m=n.e,l=n.d
if(!(l<m.length))return A.b(m,l)
s=this.b
r=m[l].c.h(0,s)
q=r.y
r.f=this.a?B.w:B.S
l=b.gZ()
q.toString
l.I(0,q)
l=r.f
l.toString
p=r.b
o=A.mv(l,24*p.a,36*p.b)
if(o!=null)b.gZ().l(0,o)
r.y=o
n=n.d
if(!(n<m.length))return A.b(m,n)
b.y.cE(m[n].c,s)
b.gbj().d=!0
b.x.bp("door_1.mp3",s,0.8)
return new A.K(null,null,!0,!0,!1,B.h,null)}}
A.dp.prototype={
H(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d={},c=e.b
c.a=0
d.a=null
s=e.c
r=A.qu(s,c,b)
q=e.a
p=c.c
o=s.c
if(q){p.toString
o.toString
n=d.a=p.cL(o,B.v,r)}else{p.toString
o.toString
n=d.a=p.cH(o,B.v,r)}B.a.a_(p.Q,n.d)
B.a.a_(o.Q,n.e)
m=A.c([],t.w)
p=s.q()
p.toString
l=c.q()
l.toString
if(!q){q=c.b
k=q.x
j=s.b.f
q.sbl(0,4)
i=l.bv()
h=p.bv()
g=l.bv().v(0,new A.aK((h.a-i.a)/1.5,(h.b-i.b)/1.5))
d.b=!0
f=new A.bC(B.dj,new A.iA(d,e,b,p,l,i,g),new A.iB(d,e,b,p,l,k,j))}else{q=c.x?"white":"red"
e.aT(n.c,p,l,b,q)
f=null}q=s.r
if(q!=null)q.c=c
if(!n.b)return new A.K(null,n.a,!0,!0,!1,B.h,f)
c=o.b-n.c
o.b=c
if(c<=0)B.a.l(m,new A.dv(s))
return new A.K(null,d.a.a,!0,!0,!1,m,f)},
bZ(a){if(this.a){if(a)return"bullet_impact_2.mp3"
return"bullet_miss_1.mp3"}if(a)return"heavy_punch_1.mp3"
return"miss_1.mp3"},
aT(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j={}
if(a===0)return
this.c.c.toString
s=c.a*24
r=c.b*36
q=new A.fK(B.e.k(a),s,r,e,1.25)
p=b.a*24
o=b.b*36
n=A.on(new A.aK(p-s,o-r))
m=n.a*24
n=n.b*36
l=new A.aK(m,n).v(0,new A.aK(s,r))
k=new A.aK(m*2,n*2).v(0,new A.aK(p,o))
B.a.l(d.gbu().b,q)
j.a=B.di
A.p2(B.dk,new A.iz(j,d,q,k,l))},
k(a){return"TargetMeleeAttackEvent{"+this.b.k(0)+" -> "+this.c.k(0)+"}"}}
A.iA.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a
if(l.b&&a.d>=0.4){s=m.c
r=m.b
q=m.d
s.x.ar(r.bZ(l.a.b),q)
p=l.a
o=r.b.x?"white":"red"
r.aT(p.c,q,m.e,s,o)
l.b=!1
s=r.c.b
if(l.a.b)s.sag(0,B.aw)
else s.sag(0,B.c8)}l=a.d
if(l<=0.4){s=m.f
r=m.r
n=l/0.6
l=m.b.b.b
l.sU(0,A.lt(r.a,s.a,n)*24)
l.sV(0,A.lt(r.b,s.b,n)*36)}else{s=m.b.b
if(l>=0.6){l=s.b
s=m.e
l.sac(s.a)
l.sad(s.b)}else{l=s.b
s=m.r
l.sU(0,s.a*24)
l.sV(0,s.b*36)}}},
$S:11}
A.iB.prototype={
$0(){var s,r,q,p,o,n=this,m=n.a
if(m.b){s=n.c
r=n.b
q=n.d
s.x.ar(r.bZ(m.a.b),q)
p=m.a
o=r.b.x?"white":"red"
r.aT(p.c,q,n.e,s,o)
m.b=!1}m=n.b
s=m.b.b
s.sbl(0,n.f)
r=n.e
s.sac(r.a)
s.sad(r.b)
m.c.b.sag(0,n.r)},
$S:0}
A.iz.prototype={
$1(a){var s,r,q,p,o,n=this
t.hU.a(a)
s=n.a
r=s.a.a+8000
s.a=new A.a7(r)
if(r>5e5){a.ee(0)
B.a.I(n.b.gbu().b,n.c)}q=B.e.M(s.a.a,1000)/300
s=n.c
r=n.d
p=1-q
o=n.e
s.b=q*r.a+p*o.a
s.c=q*r.b+p*o.b},
$S:34}
A.dv.prototype={
k(a){return"DeathEvent{"+this.a.k(0)+"}"},
H(a,b){var s,r=null,q=b.c,p=q.e,o=q.d
if(!(o<p.length))return A.b(p,o)
p=this.a
if(p.e){b.bs(p)
return new A.K(r,r,!0,!0,!1,B.h,r)}if(p.x)return new A.K(r,"You Died!",!0,!0,!1,B.h,r)
q=q.a
o=q.c
o.d+=100
s=A.c([],t.w)
if(o.d>=1000)B.a.l(s,new A.fh(q))
p.q()
p.c.toString
b.bs(p)
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
if(j===0&&e)if(o.h(0,k).f===B.w)p.j(0,k,100)
else{i=o.h(0,k)
if(!(i.c===B.b||A.O(A.bg(i.f))))p.j(0,k,80)}else if(j===1&&r)p.I(0,k)}q.eF(s,B.Y)
f=this.a
e=f.q()
e.toString
k=q.cq(s,e,1,B.Y)
if(k==null)return new A.K(g,"No more areas to explore",!1,!0,!1,B.h,g)
e=$.df()
r=f.q()
r.toString
r=e.bi(r,k,s,B.Y)
h=r==null?g:r.b
if(h==null)return new A.K(g,"No path to that location",!1,!0,!1,B.h,g)
e=h.d
r=f.q()
r.toString
return new A.K(new A.aI(e.T(0,r),f),g,!0,!0,!1,B.h,g)}}
A.h8.prototype={
H(a,b){var s,r,q,p,o,n,m=null,l=b.c,k=l.e,j=l.d
if(!(j<k.length))return A.b(k,j)
s=k[j]
r=A.c([],t.q)
for(j=s.c.c,q=j.length,p=!1,o=0;o<j.length;j.length===q||(0,A.B)(j),++o){n=j[o]
if(n.f===B.T){n.f=B.w
B.a.l(r,n.b)
p=!0}}if(p){for(j=r.length,q=b.x,o=0;o<r.length;r.length===j||(0,A.B)(r),++o)q.ar("door_unlock_1.mp3",r[o])
j=l.d
if(!(j<k.length))return A.b(k,j)
q=this.a
k[j].c.h(0,q).f=B.a7
l=l.d
if(!(l<k.length))return A.b(k,l)
k[l].af(q)
return new A.K(m,"A door has been unlocked",!0,!0,!1,B.h,m)}return new A.K(m,m,!1,!0,!1,B.h,m)}}
A.dS.prototype={
H(a,b){var s,r=null,q=this.b,p=q.c.x.b.h(0,B.r)
if(p==null||p.e===0)return new A.K(r,r,!1,!0,!1,B.h,r)
s=p.e
s.toString
p.e=s-1
return new A.K(new A.fI(4,this.a,q),r,!0,!0,!1,B.h,r)}}
A.fI.prototype={
H(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=b.c,e=f.e
f=f.d
if(!(f<e.length))return A.b(e,f)
s=e[f]
f=this.c
e=f.q()
e.toString
r=this.b
q=$.df().aH(e,r,s)
if(q==null)return new A.K(g,g,!0,!0,!1,B.h,g)
p=s.af(r)
o=A.c([],t.w)
if(p!=null)o.push(new A.dp(!0,f,p))
n=q.aN(0)
m=b.x.ar("pistol_1.mp3",e)
f=f.b
l=B.c.w(f.d/24)
f=B.c.w(f.e/36)
k=B.dM.h(0,t.gX.i("a_.T").a(700))
k.toString
j=new A.fj(new A.fi(k,10),l,f)
B.a.l(b.gab().x,j)
f=B.bf.h(0,t.e.i("a_.T").a(800))
f.toString
i=new A.a3(14,2,-1,-1,g)
i.r=f
h=A.lG(g,g,0,g,!0,!1,i)
b.ce(h,B.A)
i.sag(0,new A.l(0))
return new A.K(g,g,!0,!0,!1,o,new A.bC(new A.a7(B.e.w(A.iY(B.c.w(16/this.a)).a*n.length)),new A.jQ(r,e,i,m,j),new A.jR(b,h,j)))}}
A.jQ.prototype={
$1(a){var s=this,r=s.a,q=s.b,p=a.d,o=A.lt(r.a,q.a,p)*24
p=A.lt(r.b,q.b,p)*36
q=s.c
q.sU(0,o)
q.sV(0,p)
B.c.w(o)
B.c.w(p)
s.e.a.c=10*(1-a.d)},
$S:11}
A.jR.prototype={
$0(){var s=this.a
s.bs(this.b)
B.a.I(s.gab().x,this.c)},
$S:0}
A.j6.prototype={}
A.j5.prototype={
dr(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.f.P(b,f,c)
s=A.mF(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
r=this.O(a)
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
s[h]=g}B.f.aL(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
at(a,b){var s,r,q=a.b*100+a.a
if(q<0||q>=4000)return null
s=this.f
r=s.h(0,a)
if(r==null){r=new A.i3(b.createTexture())
s.j(0,a,r)}if(r.b){this.dr(a,b,r.a)
r.b=!1}return r.a},
O(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.lU(p,p+4000,B.e.bI(s.byteLength,r))
return new A.ki(100,A.mF(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
bx(){var s,r,q,p,o=this.O(this.e).c
for(s=this.c,r=o.length,q=0;q<4000;++q){p=s[q]
if(!(q<r))return A.b(o,q)
s[q]=p|o[q]}},
cw(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.b4(new A.i(s,r))
for(q=this.f,q=q.gby(q),q=q.gA(q);q.n();)q.gp(q).b=!0},
cE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.R.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.Y(0,r,q)
o=o.c===B.b||A.O(A.oA(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.b4(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]===1)g.b4(new A.i(m,l))}s=g.O(b)
s.toString
for(p=g.f,p=p.gah(p),p=p.gA(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]===1)i.b.b=!0}},
cD(a){return this.cE(a,null)},
b4(a){var s,r,q,p=this.O(a),o=p==null?null:p.c
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
c1(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
b5(a,b){var s
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
q=B.c.aa(s*r.b+0.5)
p=B.c.cn(s*r.c-0.5)
for(o=s+1,n=2*s,m=q,l=null;m<=p;++m,l=j){k=b.eP(0,new A.i(s,m))
j=k.b*100+k.a
i=f.c1(j,c)
if(!i)h=m>=s*r.b&&m<=s*r.c
else h=!0
if(h)f.dP(j,c)
h=l!=null
if(h&&f.c1(l,c)&&f.b5(j,c))r.b=(2*m-1)/n
if(h&&f.b5(l,c)&&i){g=new A.cW(o,r.b,r.c)
g.c=(2*m-1)/n
B.a.l(e,g)}}if(l!=null&&f.b5(l,c))B.a.l(e,new A.cW(o,r.b,r.c))}}}
A.i3.prototype={}
A.ki.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]===1},
Y(a,b,c){var s=this.c,r=c*this.a+b
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]===1}}
A.bZ.prototype={
k(a){return"Cardinal."+this.b}}
A.jS.prototype={
eP(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a){case B.aP:s=r.b
return new A.i(s.a+p,s.b-q)
case B.aQ:s=r.b
return new A.i(s.a+p,s.b+q)
case B.aR:s=r.b
return new A.i(s.a+q,s.b+p)
case B.aS:s=r.b
return new A.i(s.a-q,s.b+p)}}}
A.cW.prototype={}
A.c8.prototype={}
A.fk.prototype={
ds(a,b){var s,r,q,p=this.c,o=p.O(a).c,n=p.O(b).c
for(p=o.length,s=n.length,r=0;r<4000;++r){if(!(r<p))return A.b(o,r)
if(o[r]===1){if(!(r<s))return A.b(n,r)
q=n[r]===1}else q=!1
if(q)return!1}return!0},
ae(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=3553,a1="u_player_visible_texture",a2=a4.a
if(a2!==a.y||a4.b!==a.z){a.y=a2
s=a4.b
a.z=s
r=a3.createTexture()
a.e=r
B.f.P(a3,a0,r)
B.f.aL(a3,a0,0,6408,a2,s,0,6408,5121,null)
a3.texParameteri(a0,10241,9729)
a3.texParameteri(a0,10242,33071)
a3.texParameteri(a0,10243,33071)}B.f.aC(a3,36160,a.d)
B.f.ct(a3,36160,36064,a0,a.e,0)
a3.clearColor(0,0,0,1)
a3.clear(16640)
a2=a.c
s=a2.at(a2.e,a3)
s.toString
a3.activeTexture(33985)
B.f.P(a3,a0,s)
for(r=a.x,q=r.length,p=a.a,o=t.t,n=t.n,m=t.N,l=t.z,k=0;k<r.length;r.length===q||(0,A.B)(r),++k){j=r[k]
i=j.gbm()
h=new A.i(j.gU(j),j.gV(j))
g=a2.at(h,a3)
if(g==null)continue
if(a.r&&a.ds(a2.e,h))continue
a3.activeTexture(33984)
B.f.P(a3,a0,g)
f=A.c([a4.a,a4.b],o)
e=i.c
d=A.c([j.gU(j),j.gV(j)],o)
c=A.c([a4.d,a4.e],n)
b=i.b.a
p.a3(a3,4,3,A.bj(["u_resolution",f,"u_source_strength",e,"u_block_size",B.b6,"u_source_position",d,"u_offset",c,"u_source_color",A.c([(b>>>16&255)/255,(b>>>8&255)/255,(b&255)/255,0.2],n),"u_time",a4.c/1000,a1,1,"u_visible_texture",0],m,l))}B.f.aC(a3,36160,null)
a3.activeTexture(33984)
B.f.P(a3,a0,a.e)
a3.activeTexture(33985)
B.f.P(a3,a0,a.f)
a3.activeTexture(33986)
B.f.P(a3,a0,s)
a.b.a3(a3,4,3,A.bj(["u_light_texture",0,"u_game_world_texture",1,a1,2,"u_block_size",B.b6,"u_resolution",A.c([a4.a,a4.b],o),"u_offset",A.c([a4.d,a4.e],n)],m,l))}}
A.ch.prototype={
gbg(){var s=this.b
s=s==null?null:s.gbg()
return 1+(s==null?0:s)},
N(a,b){return B.c.N(this.f,t.p6.a(b).f)},
gc9(){var s,r=this.a
if(r==null)r=this
else{s=r.a
r=s==null?r:s.gc9()}return r},
dA(){var s,r,q
for(s=this,r=null;s!=null;r=s,s=q){s.b=r
q=s.a}},
aN(a){var s,r=A.c([],t.q)
for(s=this;s!=null;){B.a.l(r,s.d)
s=s.b}return r},
k(a){var s,r,q,p
for(s=this.d,r=this,q="",p="";r!=null;q=", "){p=p+q+s.k(0)
r=r.b}return p.charCodeAt(0)==0?p:p},
$iab:1}
A.aQ.prototype={
k(a){return"Directions."+this.b}}
A.jM.prototype={
bi(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=A.mu(b,t.p6),a0=A.ad(t.j,t.i),a1=a4.c
a.l(0,new A.ch(a2,0,a2.aq(a3)*1.02+0))
for(s=a.$ti.c,r=a1.a,q=a1.b,p=t.W;o=a.c,n=o===0,!n;){if(n)A.R(A.aB("No element"));++a.d
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
if(k>0)a.bM(j,0)
o=l.d
i=a0.h(0,o)
if(i!=null&&i<l.e)continue
for(n=l.e,h=0;h<8;++h){g=B.au[h]
f=A.a6(o,g)
m=f.a
if(m>=0){e=f.b
m=e>=0&&m<r&&e<q}else m=!1
if(m){m=l.a
if(!J.T(m==null?b:m.d,f))m=A.m8(p.a(a1.h(0,f)),a4,a5)&&!f.F(0,a3)
else m=!0}else m=!0
if(m)continue
m=f.aq(a3)
e=this.dI(g)
if(typeof e!=="number")return A.ct(e)
e=n+e
d=new A.ch(f,e,m*1.02+e)
d.a=l
if(f.F(0,a3)){d.dA()
s=l.a
return s==null?l:s.gc9()}c=a0.h(0,f)
if(!(e>1/0))m=c!=null&&e>=c
else m=!0
if(m)continue
a0.j(0,f,e)
s.a(d);++a.d
a.aS(0,d)}}return b},
aH(a,b,c){return this.bi(a,b,c,B.aj)},
dI(a){switch(a){case B.k:case B.n:case B.l:case B.m:return 1
case B.K:case B.J:case B.L:case B.M:return 1.4}}}
A.f_.prototype={
cq(a,b,c,d){var s,r,q,p,o,n,m,l,k=this.a,j=b.b*100+b.a
if(!(j>=0&&j<4000))return A.b(k,j)
s=k[j]*c
r=A.c([],t.q)
for(j=a.c,q=t.W,p=!1,o=0;o<8;++o){n=A.a6(b,B.au[o])
m=n.b*100+n.a
if(m<0||m>=4000)continue
if(A.m8(q.a(j.h(0,n)),a,d))continue
if(!(m>=0&&m<4000))return A.b(k,m)
l=k[m]*c
if(l>s){B.a.sm(r,0)
B.a.l(r,n)
s=l
p=!0}else if(l===s)B.a.l(r,n)}k=r.length
if(k===0||!p)return null
k=$.nD().D(k)
if(!(k>=0&&k<r.length))return A.b(r,k)
return r[k]},
bh(a,b,c){return this.cq(a,b,c,B.aj)},
eF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.a
B.ax.aG(d,0,4000,0)
for(s=this.b,s=s.gah(s),s=s.gA(s);s.n();){r=s.gp(s)
q=r.a
B.ax.j(d,q.b*100+q.a,r.b)}s=a.c
r=t.W
do for(p=!1,o=0;o<100;++o)for(n=0;n<40;++n){m=n*100+o
if(A.m8(r.a(s.h(0,new A.i(o,n))),a,b))continue
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
dJ(a,b){var s,r,q,p,o,n,m,l=this,k="a_position",j=B.c.aa((b.f+b.d)/24),i=B.c.aa((b.r+b.e)/36),h=new A.i(j,i)
if(h.F(0,l.c)||j<0||j>=100||i<0||i>=40)return
l.c=h
s=l.b
r=s.a5(k,t.A)
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
s.a8(a,k,r)}}
A.V.prototype={}
A.w.prototype={}
A.cm.prototype={
k(a){return"UniformKind."+this.b}}
A.hi.prototype={}
A.i8.prototype={}
A.jd.prototype={
J(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.n9(a,i.a,35633),f=A.n9(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.T(a.getProgramParameter(e,35714),!0)){A.eB(J.cw(a.getProgramInfoLog(e)))
A.R(A.aB("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.f.cm(a,A.aX(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.B)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.i8(a.getUniformLocation(A.aX(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.B)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.aX(i.e,h),n)
k=a.createBuffer()
B.f.cj(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.hi(k,j))}},
a5(a,b){A.qe(b,t.jv,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
a8(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.d(A.aB("WARNING, NO ATTRIBUTE "+b))
B.f.cj(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
a3(a,b,c,d){var s,r,q,p,o,n
t.ea.a(d)
B.f.eX(a,A.aX(this.e,"_program"))
B.f.cm(a,A.aX(this.f,"_vertexArrayObject"))
for(s=d.gah(d),s=s.gA(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.ah(p)
n=r.h(0,p)
if(n==null)A.R(A.aB("WARNING, NO UNIFORM "+p))
switch(n.b.b){case B.t:B.f.eR(a,n.a,A.aV(o))
break
case B.d:q=J.at(o)
B.f.eT(a,n.a,A.aV(q.h(o,0)),A.aV(q.h(o,1)))
break
case B.e6:q=J.at(o)
B.f.eU(a,n.a,A.aV(q.h(o,0)),A.aV(q.h(o,1)),A.aV(q.h(o,2)))
break
case B.aF:q=J.at(o)
B.f.eV(a,n.a,A.aV(q.h(o,0)),A.aV(q.h(o,1)),A.aV(q.h(o,2)),A.aV(q.h(o,3)))
break
case B.o:B.f.eS(a,n.a,A.I(o))
break}}a.drawArrays(b,0,c)}}
A.jU.prototype={
sey(a){this.f=A.n6(a)}}
A.jV.prototype={}
A.fx.prototype={}
A.fR.prototype={
aI(){var s=0,r=A.bv(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aI=A.bw(function(a,b){if(a===1)return A.bq(b,r)
while(true)switch(s){case 0:e=A.c([],t.iw)
for(p=q.b,o=t.cU,n=t.ou,m=t.oV,l=t.Z,k=t.L,j=0;j<47;++j){i=p[j]
h=new XMLHttpRequest()
g=new A.H($.D,o)
B.dm.eC(h,"get","sounds/"+i)
h.responseType="arraybuffer"
f=m.a(new A.k_(q,h,i,new A.aN(g,n)))
l.a(null)
A.cp(h,"readystatechange",f,!1,k)
h.send()
B.a.l(e,g)}s=2
return A.a5(A.ov(e,t.H),$async$aI)
case 2:return A.br(null,r)}})
return A.bs($async$aI,r)},
bp(a,b,c){var s,r,q,p=this.c,o=A.ow(p),n=this.a.h(0,a)
if(n==null)return new A.fx()
s=p.createBufferSource()
r=B.v.R()
q=o.gain
q.toString
B.bW.saO(q,0.1*c+r/20)
p=p.destination
p.toString
B.dl.bT(o,p,0,0)
B.aL.bT(s,o,0,0)
B.aL.sed(s,n)
s.start()
return new A.fx()},
ar(a,b){return this.bp(a,b,2)},
$ip_:1}
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
return A.a5(B.bV.ek(n.c,t.lo.a(A.pz(m.response))),$async$$1)
case 7:l.j(0,k,c)
p.aD(0)
s=5
break
case 6:p.aE(new A.ht("Failed to load "+o))
case 5:case 3:return A.br(null,r)}})
return A.bs($async$$1,r)},
$S:35}
A.lc.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.f.P(q,r,p)
B.f.eN(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.a0(0,p)},
$S:14}
A.k0.prototype={
dc(a,b){A.qx(a,"CursesTransparent_24x36.png").cP(new A.k1(this),t.P)},
l(a,b){b.a=this
this.c.l(0,b)
this.e=!0},
I(a,b){this.c.I(0,b)
b.a=null
this.e=!0},
eh(a){var s,r,q,p
for(s=this.c,r=s.$ti,q=new A.cr(s,s.d,r.i("cr<1>")),r=r.c;q.n();){if(q.d<0)p=A.R(A.aB("No element"))
else{p=q.c
if(p==null)p=r.a(null)}p.a=null}++s.d
s.sb9(B.dB)
s.c=0
this.e=!0},
e4(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="a_position",b5="a_texcoord",b6="a_bg_color",b7=b3.c,b8=b7.c
if(b8>1e4){A.eB("WARNING: TOO MANY SPRITES "+b8)
if(b3.f){b3.f=!1
A.eB(b7.aN(0))}b8=1e4}s=b3.a
r=t.jv
q=b8*12
p=A.jH(s.a5(b4,r).buffer,0,q)
o=A.jH(s.a5(b5,r).buffer,0,q)
q=b8*24
n=A.jH(s.a5("a_color",r).buffer,0,q)
m=A.jH(s.a5(b6,r).buffer,0,q)
l=b7.aN(0)
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
if(b0==null)B.bj.aG(n,a9,a9+24,0)
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
n[a]=e}if(b1==null)B.bj.aG(m,a9,a9+24,0)
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
m[a]=e}}s.a8(b9,b4,p)
s.a8(b9,b5,o)
s.a8(b9,"a_color",n)
s.a8(b9,b6,m)},
ae(a,b){var s,r=this
if(r.b==null||r.c.c===0)return
if(r.e){r.e4(a)
r.e=!1}s=r.d
s.at(s.e,a)
a.activeTexture(33984)
B.f.P(a,3553,r.b)
r.a.a3(a,4,r.c.c*6,A.bj(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.k1.prototype={
$1(a){this.a.b=t.lJ.a(a)},
$S:36}
A.a3.prototype={
sU(a,b){var s=this.a
if(s!=null)s.e=!0
this.d=b},
sV(a,b){var s=this.a
if(s!=null)s.e=!0
this.e=b},
sac(a){var s=this.a
if(s!=null)s.e=!0
this.d=a*24},
sad(a){var s=this.a
if(s!=null)s.e=!0
this.e=a*36},
sag(a,b){var s
this.f=b
s=this.a
if(s!=null)s.e=!0},
sbl(a,b){var s
this.x=b
s=this.a
if(s!=null)s.e=!0},
k(a){return"Sprite("+this.b+", "+this.c+")"}}
A.jx.prototype={}
A.kb.prototype={
e5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(this.b==null)return
s=this.a
r=s.a5("a_color",t.A)
q=this.b
switch(q.d.a){case B.H:case B.x:case B.ag:case B.af:p=$.nE()
break
case B.y:p=$.mc()
break
case B.u:p=$.nG()
break
case B.B:p=$.nF()
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
r[f]=1}}}s.a8(a,"a_color",r)}}
A.kc.prototype={
eG(a){var s,r,q,p,o
for(s=this.b,r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.B)(s),++p){o=s[p]
q.font=A.z(24*o.e)+'px "Press Start 2P"'
B.c6.sep(q,o.d)
q.fillText(o.a,o.b-a.d,o.c-a.e)}}}
A.fK.prototype={}
A.j4.prototype={
e7(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.O(a2.e),a4=a1.b,a5=a4.a5("a_color",t.A)
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
a4.a8(a6,"a_color",a5)}}
A.hd.prototype={}
A.l1.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:15}
A.fV.prototype={
af(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.e){m=n.b
l=B.c.w(m.d/24)
if(l===q){m=B.c.w(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.iW.prototype={
ap(a9){var s=0,r=A.bv(t.l7),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$ap=A.bw(function(b0,b1){if(b0===1)return A.bq(b1,r)
while(true)switch(s){case 0:a8=A.c([],t.fF)
for(o=p.a,n=p.b,m=p.e,l=0;l<11;++l){k=A.qd(o.cS(n[l]))
B.a.l(a8,k)
j=m[l]
for(i=j.length,h=k.a,g=0;g<j.length;j.length===i||(0,A.B)(j),++g){f=A.ql(j[g])
e=A.qA(k,f)
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
return A.a5(null,$async$ap)
case 3:o=t.j,l=0
case 4:if(!(l<a8.length-1)){s=6
break}a0=A.io(a8[l])
if(!(l<a8.length)){q=A.b(a8,l)
s=1
break}k=a8[l]
A.iq("selecting for "+l)
a1=A.jr(o)
n=k.c
case 7:if(!!0){s=8
break}if(!!0){a2=B.A
s=8
break}s=10
return A.a5(null,$async$ap)
case 10:m=$.dg()
a3=A.na(m,$.nU(),o)
if(a1.G(0,a3)){s=9
break}i=n.h(0,a3)
if(i.c===B.b||A.O(A.bg(i.f))||!p.dl(n.h(0,a3).f)){a1.l(0,a3)
s=9
break}if(a3.aq(a0)<20){a1.l(0,a3)
s=9
break}a4=$.df().bi(a0,a3,k,B.aT)
if(a4==null){a1.l(0,a3)
s=9
break}i=a4.b
i=i==null?null:i.gbg()
a5=(1+(i==null?0:i))/140
A.iq("Rolling at "+A.z(a5)+" in "+l)
if(m.R()<=a5){a2=a3
s=8
break}case 9:s=7
break
case 8:n.h(0,a2).f=B.R
case 5:++l
s=4
break
case 6:a6=A.fc(B.V)
a6.e=9
a7=A.fc(new A.eH(B.aH,50))
o=a9.c.x
o.eo(a6,B.r)
B.a.l(o.a,a7)
q=new A.hd(a9,a8)
s=1
break
case 1:return A.br(q,r)}})
return A.bs($async$ap,r)},
dD(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.d,r=t.r,q=this.e,p=this.b,o=0;o<11;++o){n=q[o]
m=p[o]
l=$.nH()
k=A.a4(l)
j=k.i("aE<1>")
i=A.mC(new A.aE(l,k.i("E(1)").a(new A.iX(m.a)),j),!0,j.i("j.E"))
for(h=0;h<s[o];){g=A.na($.dg(),i,r)
B.a.l(n,g)
h+=g.d}}},
dB(){var s,r,q,p,o,n,m,l,k,j,i=this,h=new A.c_(1,1,1,0,0,0,0,new A.cI(A.c([],t.I),A.ad(t.b,t.O)),A.mm(),A.c([],t.Q),A.c([],t.d),new A.cJ(""))
for(s=i.f,r=i.c,q=i.e,p=0;p<11;++p){o=q[p]
for(n=0,m=0;m<o.length;++m){l=i.dC(o[m])
k=l.a
for(j=l.x.b.h(0,B.r)!=null;k>0;){n+=(j?l.cL(h,$.dg(),!0):l.cH(h,$.dg(),!0)).c
k-=r[p]}}B.a.j(s,p,n)}},
dC(a){var s,r,q,p,o,n=this.r
if(n.h(0,a)!=null){n=n.h(0,a)
n.toString
return n}s=a.d
r=A.c([],t.I)
q=A.mB(B.av,t.b,t.O)
p=new A.c_(s,s,1,0,0,0,0,new A.cI(r,q),a.c,A.c([],t.Q),A.c([],t.d),new A.cJ(a.a))
for(s=J.aO(a.r.$0());s.n();){o=s.gp(s)
switch(o.gbG()){case B.ay:q.h(0,B.N)
q.j(0,B.N,o)
break
case B.az:q.h(0,B.r)
q.j(0,B.r,o)
break
case B.aA:q.h(0,B.O)
q.j(0,B.O,o)
break
default:B.a.l(r,o)}}n.j(0,a,p)
return p},
dl(a){switch(a){case null:case B.F:return!0
default:return!1}}}
A.iX.prototype={
$1(a){return B.a.G(t.r.a(a).x,this.a)},
$S:38}
A.eR.prototype={
bE(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.Y(a,a0,A.b5(a*a0,B.i,!1,t.ns),t.ba)
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
$2(a,b){return J.T(this.a.a.Y(0,a,b),B.b)?0:1},
$S:39}
A.jb.prototype={
bw(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.cM.a(b0)
s=t.q
r=A.c([],s)
q=new A.jc(a9)
for(p=J.aO(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.cR()
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
a2=A.oq(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.a6(a,a2[0]))!==B.i){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.a6(a,a2[1]))===B.i}else a1=!0
if(a1)break
a=A.a6(a,d)
B.a.l(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.i&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.a6(a,A.or(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.l(m,new A.e1(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.ad(t.v,t.fH)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.B)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.G(l,n))continue
if(a4.aF(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.j(0,n,a5)}else a4.j(0,n,a5)}for(s=a4.gby(a4),s=s.gA(s),n=this.a,l=a9.e,k=a8.b;s.n();){g=s.gp(s)
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
l.j(0,a7,B.W)
B.a.l(k,a7)
B.a.l(f.b,a7)}for(s=a4.gby(a4),s=s.gA(s);s.n();)this.bw(s.gp(s).d,a9,b0,b1)}}
A.jc.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.v(0,new A.i(1,0)))===B.b?1:0
if(s.h(0,a.v(0,new A.i(-1,0)))===B.b)++r
if(s.h(0,a.v(0,new A.i(0,-1)))===B.b)++r
return s.h(0,a.v(0,new A.i(1,1)))===B.b?r+1:r},
$S:60}
A.iK.prototype={
cU(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.E(0,o.R()>0.45?B.i:B.b,n,m)
p.E(0,B.aB,n,m)}new A.eR(a7).bE(3)
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
a0.cs(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.B)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gA(a3);d.n();)s.j(0,d.gp(d),B.b)
else B.a.l(o,new A.am(a3,A.c([],h),A.c([],h),A.j1(a3)))}a4=A.ad(p,t.v)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.c,a2=0;b=o.length,a2<b;o.length===r||(0,A.B)(o),++a2){a3=o[a2]
B.a.l(p,a3)
h.j(0,a3,A.c([],d))
for(b=J.aO(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.B)(o),++a2){a3=o[a2]
r=a3.a
p=J.at(r)
if(p.gm(r)>a6){a6=p.gm(r)
a5=a3}}this.bw(a5,a7,a4,q)
for(r=q.cJ(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.B)(r),++a2){a3=r[a2]
B.a.I(o,a3)
for(p=J.aO(a3.a);p.n();)s.j(0,p.gp(p),B.b)}A.nv(o,a7)}}
A.iL.prototype={
$2(a,b){return J.T(this.a.b.Y(0,a,b),B.i)},
$S:16}
A.iM.prototype={
$2(a,b){return J.T(this.a.b.Y(0,a,b),B.b)},
$S:16}
A.b2.prototype={}
A.hc.prototype={}
A.dk.prototype={}
A.dR.prototype={
a7(a,b){this.$ti.c.a(a)
return Math.min(B.ai.a7(a,b),B.bX.a7(a,b)+B.bB.a7(a,b))}}
A.eS.prototype={
a7(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
s=A.lu(a,B.k,b)
r=A.lu(a,B.m,b)
q=A.lu(a,B.l,b)
p=A.lu(a,B.n,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.eG.prototype={
a7(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
if(A.cu(a,B.k,b)+A.cu(a,B.m,b)+A.cu(a,B.l,b)+A.cu(a,B.n,b)===1)return 1
return 1/0}}
A.eX.prototype={
a7(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
if(A.cu(a,B.k,b)+A.cu(a,B.m,b)+A.cu(a,B.l,b)+A.cu(a,B.n,b)===2)return 1
return 1/0}}
A.dh.prototype={
a7(a,b){var s,r,q,p,o,n,m
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
A.e3.prototype={
eA(a,b){return this.b.$2(a,b)}}
A.lm.prototype={
$2(a,b){b.e.j(0,a,B.aE)},
$S:1}
A.li.prototype={
$2(a,b){b.e.j(0,a,B.bt)},
$S:1}
A.lk.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.G)s.j(0,a,B.aC)
else s.j(0,a,B.aD)},
$S:1}
A.lh.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.G)s.j(0,a,B.aC)
else s.j(0,a,B.aD)},
$S:1}
A.lj.prototype={
$2(a,b){b.e.j(0,a,B.ad)},
$S:1}
A.ll.prototype={
$2(a,b){b.e.j(0,a,B.bu)
b.f.j(0,a,B.dH)},
$S:1}
A.lg.prototype={
$2(a,b){b.e.j(0,a,B.ae)},
$S:1}
A.ls.prototype={
$2(a,b){var s=t.v
s.a(a)
s.a(b)
return J.aj(a.a)-J.aj(b.a)},
$S:43}
A.dB.prototype={}
A.iF.prototype={
cS(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=4000,c=new A.Y(100,40,A.b5(d,B.i,!1,t.ns),t.ba),b=A.b5(d,0,!1,t.i),a=A.b5(d,B.aB,!1,t.dt),a0=new A.Y(100,40,A.b5(d,B.p,!1,t.dy),t.eN),a1=t.c,a2=new A.dB(a3,c,new A.Y(100,40,b,t.de),new A.Y(100,40,a,t.f5),a0,new A.Y(100,40,A.b5(d,B.bd,!1,t.gM),t.eT),new A.Y(100,40,A.b5(d,null,!1,t.O),t.oQ),new A.j0(A.c([],a1),A.ad(t.v,t.mw)),A.c([],a1))
if(a3.b)this.em(a2)
b=a3.a
switch(b){case B.x:case B.y:new A.iK(B.v).cU(a2)
break
case B.B:case B.u:new A.jX(A.jr(t.j),B.v).cX(a2)
break
case B.ag:case B.H:case B.af:new A.k8(B.v).cV(a2)
break}s=new Float32Array(4000)
new A.jN().cW(s,100,40)
r=new A.Y(100,40,A.lR(d,new A.iH(),t.W),t.R)
for(q=0;q<100;++q)for(a=q!==0,a1=q!==99,p=0;p<40;++p)if(!a||!a1||p===0||p===39){c.E(0,B.b,q,p)
a0.E(0,B.p,q,p)}this.b.cT(a2.y,a2,a3.c)
for(a=a2.c,a1=this.a,o=a2.d,n=a2.r,b=b!==B.af,m=a2.f,q=0;q<100;++q)for(p=0;p<40;++p){l=J.T(c.Y(0,q,p),B.i)
k=c.Y(0,q,p)
k.toString
j=new A.i(q,p)
a1.R()
i=r.h(0,j)
h=o.h(0,j)
g=a0.h(0,j)
i.b=j
i.c=k
i.seM(o.h(0,j))
k=p*100+q
if(!(k<4000))return A.b(s,k)
f=s[k]
e=n.Y(0,q,p)
if(J.T(a.h(0,j),1))i.r=B.du
else if(g!==B.p)switch(g){case B.W:if(m.h(0,j)===B.bc)i.f=B.T
else i.f=B.w
break
case B.aD:i.f=B.U
break
case B.p:break
case B.bt:i.f=B.aa
break
case B.aE:i.f=B.a9
break
case B.e4:i.f=B.F
break
case B.ad:i.f=B.a8
if(e!=null)B.a.l(i.e,e)
break
case B.ae:i.f=B.a6
break
case B.bu:i.f=B.P
break
case B.bv:i.f=B.a5
break
case B.aC:i.f=B.Q
break}else if(l&&f<0.42&&h!==B.G&&b)i.f=B.F
if(e!=null)B.a.l(i.e,e)}return new A.jv(r,a3)},
em(a){var s,r,q=this.a,p=a.b,o=p.b,n=q.D(o-1)+1,m=n>o/2?-1:1,l=new A.iG(a)
for(p=p.a,s=n,r=0;r<p;++r){l.$1(new A.i(r,s))
l.$1(new A.i(r,s+1))
l.$1(new A.i(r,s-1))
s+=q.ez()?m:0}}}
A.iH.prototype={
$1(a){var s=A.c([],t.I)
return new A.bN(B.A,B.i,s)},
$S:15}
A.iG.prototype={
$1(a){var s=this.a,r=s.b
if(r.cu(a)){r.j(0,a,B.i)
s.c.j(0,a,1)}},
$S:44}
A.e1.prototype={
gm(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.j0.prototype={
cJ(){var s,r,q,p,o,n=A.c([],t.c)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.B)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.l(n,o)}return n}}
A.am.prototype={
k(a){return"Room{"+J.aj(this.a)+"; "+this.d.k(0)+"}"}}
A.f5.prototype={
cs(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.c([a],k),i=A.c([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.G(0,o))continue
q.l(0,o)
B.a.l(i,o)
for(n=0;n<8;++n){m=A.a6(o,B.au[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.G(0,m)&&k.h(0,m)===B.i)B.a.l(j,m)}}B.a.l(this.b,i)}}
A.fd.prototype={
ci(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.U)s=B.ar
else if(a instanceof A.X)s=B.ap
else s=a instanceof A.aq?B.aq:B.as
B.a.l(r.a,a)
B.a.l(r.b,s)
B.a.l(r.c,b)
r.d+=b},
cg(a){return this.ci(a,10)},
eD(a){var s,r,q,p={},o=p.a=0,n=A.lR(this.c.length,new A.jk(p,this),t.i),m=a.R()
for(s=n.length,r=m>-1;o<s;++o){q=n[o]
if(r&&m<=q){s=this.a
if(!(o<s.length))return A.b(s,o)
return A.fc(s[o])}}throw A.d(A.aB(""))},
d0(a){var s,r,q=B.a.ew(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
d_(a){var s,r,q,p
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
cT(a,b,c){var s,r,q
t.mw.a(a)
s=new A.fd(A.c([],t.hf),A.c([],t.lB),A.c([],t.t))
r=s.gea()
new A.aE(B.dE,t.ei.a(new A.jg()),t.kL).C(0,r)
new A.aE(B.dA,t.eU.a(new A.jh()),t.eo).C(0,r)
new A.aE(B.dx,t.hZ.a(new A.ji()),t.au).C(0,r)
new A.aE(B.dv,t.g9.a(new A.jj()),t.b1).C(0,r)
s.cg(B.aO)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.B)(a),++q)this.du(s,a[q],b)},
du(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.at(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.A
break}r=j.length
if(r!==0){r=l.D(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.D(k.gm(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.ad||q===B.p
else r=!1
if(r)break;++i}if(s.F(0,B.A))return
p=a.eD(l)
n=p.b
if(!J.T(n,B.aO)){a.d0(n)
a.d_(p.c)
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
a6(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
cW(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
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
o=$.nS()
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
c=a8.a6(0,o[d],k,j,i)
if(!(a0<f))return A.b(o,a0)
a2=k-1
c+=h*(a8.a6(0,o[a0],a2,j,i)-c)
if(!(b<f))return A.b(o,b)
a3=j-1
a4=a8.a6(0,o[b],k,a3,i)
if(!(a1<f))return A.b(o,a1)
c+=g*(a4+h*(a8.a6(0,o[a1],a2,a3,i)-a4)-c)
a4=d+1
if(!(a4<f))return A.b(o,a4)
a5=i-1
a4=a8.a6(0,o[a4],k,j,a5)
a6=a0+1
if(!(a6<f))return A.b(o,a6)
a4+=h*(a8.a6(0,o[a6],a2,j,a5)-a4)
a6=b+1
if(!(a6<f))return A.b(o,a6)
a6=a8.a6(0,o[a6],k,a3,a5)
a7=a1+1
if(!(a7<f))return A.b(o,a7)
a5=a8.a6(0,o[a7],a2,a3,a5)
if(!(p<4000))return A.b(a9,p)
a9[p]=(c+i*i*i*(i*(i*6-15)+10)*(a4+g*(a6+h*(a5-a6)-a4)-c)+1)/2}}}
A.bI.prototype={
k(a){return"RuinOrientation."+this.b}}
A.dW.prototype={
k(a){return"RoomSizeKind."+this.b}}
A.jX.prototype={
cX(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.D(5)
if(!(a3>=0&&a3<5))return A.b(B.bb,a3)
s=B.bb[a3]
r=a1.bF(B.bn)
q=a1.dH(s)
p=A.os(a1.co(a4,r,new A.i(B.c.w(Math.max(1,q.a-r.a/2)),B.c.w(Math.max(1,q.b-A.ci(r)/2)))))
a3=a4.y
B.a.l(a3,p)
for(o=t.q,n=0;n<2000;){m=new A.i(a2.D(98)+1,a2.D(38)+1)
l=[B.ac,B.ac,B.ac,B.bm]
k=a2.D(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a1.bF(l[k])
if(!a1.eI(a4,r,m)){l=a1.co(a4,r,m)
B.a.l(a3,new A.am(l,A.c([],o),A.c([],o),A.j1(l)))}else ++n}for(a2=a1.b,o=a4.d,l=a4.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.i(j,i)
o.E(0,B.G,j,i)
if(!a2.G(0,h))l.j(0,h,B.b)}g=A.ad(t.j,t.v)
for(a2=a3.length,k=a4.x,f=k.a,e=k.b,d=t.c,c=0;c<a3.length;a3.length===a2||(0,A.B)(a3),++c){b=a3[c]
B.a.l(f,b)
e.j(0,b,A.c([],d))
for(a=J.aO(b.a);a.n();)g.j(0,a.gp(a),b)}a1.bw(p,a4,g,k)
for(a2=k.cJ(),k=a2.length,c=0;c<a2.length;a2.length===k||(0,A.B)(a2),++c){b=a2[c]
B.a.I(a3,b)
for(f=J.aO(b.a);f.n();)l.j(0,f.gp(f),B.b)}A.nv(a3,a4)
for(a2=o.c,a0=0;a0<4000;++a0)B.a.j(a2,a0,B.G)},
bF(a){var s
switch(a){case B.ac:s=this.a
return new A.dV(s.D(5)+5,s.D(5)+5)
case B.bm:s=this.a
return new A.dV(s.D(10)+9,s.D(10)+9)
case B.bn:s=this.a
return new A.dV(s.D(10)+20,s.D(10)+20)}},
dH(a){switch(a){case B.bo:return new A.i(50,10)
case B.bp:return new A.i(50,30)
case B.bq:return new A.i(75,20)
case B.br:return new A.i(25,20)
case B.bs:return new A.i(50,20)}},
co(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.c([],t.q)
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
A.dV.prototype={}
A.k8.prototype={
dF(a){var s,r,q=a.a.a===B.H?B.aB:B.e3
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
cV(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.dF(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.R()>0.6)r.j(0,new A.i(q,p),B.b)
new A.eR(b8).bE(10)
o=A.jr(t.j)
n=new A.f5(b8,A.c([],t.do),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.i(k,j)
if(o.G(0,i)||r.h(0,i)===B.b)continue
n.cs(i)}o=n.b
B.a.aR(o,new A.k9())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.B)(h),++f)r.j(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.j(e,q,B.bv)
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
d.j(0,i,B.G)}b1=new A.ka(b8)
B.a.d1(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.A
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
g.j(0,b2,B.W)
B.a.l(o,new A.am(b0,A.c([],e),A.c([],e),A.j1(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.B)(o),++f)A.eC(o[f],$.lF(),b8)}}
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
dd(a){var s=t.jV.a(new A.kk(this))
t.Z.a(null)
A.cp(a,"keydown",s,!1,t.mT)
A.cp(a,"mousemove",t.b9.a(new A.kl(this)),!1,t.V)}}
A.kk.prototype={
$1(a){var s
t.mT.a(a)
s=$.pE.h(0,a.key)
if(s!=null){a.preventDefault()
this.a.a.l(0,s)}else A.eB(":"+A.z(a.key)+":")},
$S:53}
A.kl.prototype={
$1(a){var s,r
t.V.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
this.a.b.l(0,A.c([s,r],t.n))},
$S:6}
A.a1.prototype={
k(a){return"InputCommand."+this.b}}
A.iu.prototype={
J(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="base"
t.aW.a(a)
s=document
i.b=t.mX.a(s.querySelector("#action_bar"))
for(r=i.c,q=t.eX,p=q.i("~(1)?"),o=t.Z,q=q.c,n=0;n<3;++n){m=r[n]
l=s.createElement("button")
l.innerText=m
k=p.a(new A.iv(i))
o.a(null)
A.cp(l,"click",k,!1,q)
A.aX(i.b,h).appendChild(l)}j=A.oz("checkbox")
B.dp.sef(j,!1)
r=p.a(new A.iw(a,j))
o.a(null)
A.cp(j,"click",r,!1,q)
A.aX(i.b,h).appendChild(s.createTextNode("Toggle Light Culling"))
A.aX(i.b,h).appendChild(j)}}
A.iv.prototype={
$1(a){var s,r
t.V.a(a)
s=this.a.a
r=A.aX(s.a,"_modal").style
r.display="none"
s=A.aX(s.a,"_modal").style
s.display="block"},
$S:6}
A.iw.prototype={
$1(a){var s
t.V.a(a)
s=this.b.checked
s.toString
this.a.a=s},
$S:6}
A.jD.prototype={
da(){var s,r=document.getElementById("myModal")
r.toString
this.a=r
r=window
s=t.b9.a(new A.jE(this))
t.Z.a(null)
A.cp(r,"click",s,!1,t.V)}}
A.jE.prototype={
$1(a){var s=this.a
if(A.py(t.V.a(a).target)===A.aX(s.a,"_modal")){s=A.aX(s.a,"_modal").style
s.display="none"}},
$S:6}
A.fF.prototype={}
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
s.d3=s.k
s=J.ca.prototype
s.d4=s.k
s=A.aw.prototype
s.d5=s.cz
s.d6=s.cA
s.d8=s.cC
s.d7=s.cB})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_1u
s(J.r.prototype,"ge8","l",20)
r(A,"pU","ox",17)
r(A,"q8","p7",7)
r(A,"q9","p8",7)
r(A,"qa","p9",7)
q(A,"nk","q2",0)
p(A,"qc","pX",10)
q(A,"qb","pW",0)
o(A.d5.prototype,"gej",1,0,null,["$1","$0"],["a0","aD"],37,0,0)
n(A.H.prototype,"gdn","K",10)
p(A,"qg","pC",57)
r(A,"qh","pD",17)
var l
m(l=A.f8.prototype,"ger","bk",29)
m(l,"gc5","dL",13)
p(A,"qF","q1",58)
o(A.fd.prototype,"gea",0,1,null,["$2","$1"],["ci","cg"],45,0,0)
p(A,"qL","qj",59)
r(A,"nr","qE",40)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.lO,J.a,J.dl,A.J,A.jZ,A.j,A.bk,A.a2,A.an,A.cF,A.c0,A.kf,A.jK,A.dz,A.ek,A.y,A.jp,A.dI,A.ku,A.aT,A.hw,A.eq,A.ep,A.hf,A.dn,A.e5,A.cq,A.H,A.hg,A.ck,A.bn,A.el,A.hh,A.e4,A.hn,A.bT,A.hX,A.eu,A.ev,A.hD,A.eb,A.h,A.dX,A.c2,A.a7,A.kv,A.fC,A.dZ,A.ht,A.cN,A.S,A.i_,A.fY,A.iQ,A.lK,A.p,A.dA,A.hm,A.kn,A.jJ,A.hA,A.fa,A.cr,A.l,A.Y,A.fy,A.aK,A.cx,A.is,A.ir,A.a9,A.al,A.b1,A.bl,A.iJ,A.f8,A.eH,A.aG,A.iO,A.U,A.jz,A.bF,A.X,A.dj,A.aq,A.ak,A.eE,A.c_,A.cA,A.cJ,A.cI,A.eW,A.fl,A.bN,A.fi,A.fj,A.i,A.jv,A.jA,A.jV,A.f1,A.j2,A.a0,A.bC,A.K,A.j5,A.i3,A.ki,A.jS,A.cW,A.c8,A.ch,A.jM,A.f_,A.V,A.w,A.hi,A.i8,A.jd,A.jU,A.fx,A.fR,A.a3,A.jx,A.kc,A.fK,A.hd,A.fV,A.iW,A.eR,A.jb,A.b2,A.e3,A.dB,A.iF,A.e1,A.j0,A.am,A.f5,A.fd,A.jI,A.jf,A.jN,A.dV,A.k8,A.kj,A.iu,A.jD,A.fF,A.k2])
q(J.a,[J.dE,J.dG,J.ca,J.r,J.cM,J.c9,A.fq,A.cg,A.e,A.it,A.eO,A.cC,A.be,A.G,A.hl,A.aP,A.iT,A.bH,A.ho,A.dx,A.hq,A.iU,A.k,A.hu,A.av,A.je,A.hy,A.jt,A.jy,A.hE,A.hF,A.ax,A.hG,A.hI,A.ay,A.hM,A.hP,A.az,A.hQ,A.aA,A.hV,A.ae,A.i1,A.kd,A.aC,A.i4,A.ke,A.kh,A.ib,A.id,A.ig,A.ii,A.ik,A.aH,A.hB,A.aJ,A.hK,A.jO,A.hY,A.aL,A.i6,A.aZ,A.eK,A.hj,A.eQ,A.f7,A.fH,A.cV,A.bo,A.h5,A.ha,A.hT])
q(J.ca,[J.fE,J.cZ,J.bh])
r(J.jl,J.r)
q(J.cM,[J.dF,J.fe])
q(A.J,[A.cb,A.bO,A.ff,A.h7,A.fO,A.dm,A.hs,A.fz,A.bb,A.h9,A.h6,A.bm,A.eV,A.eY])
q(A.j,[A.o,A.cd,A.aE,A.kU])
q(A.o,[A.aS,A.dH])
q(A.aS,[A.e_,A.dL])
r(A.dy,A.cd)
q(A.a2,[A.dK,A.e2])
q(A.cF,[A.du,A.ac])
q(A.c0,[A.ja,A.eT,A.eU,A.h_,A.jn,A.l8,A.la,A.kr,A.kq,A.kW,A.j7,A.kB,A.kJ,A.k6,A.kP,A.kL,A.jw,A.kw,A.ln,A.lo,A.iC,A.iD,A.l7,A.j9,A.j_,A.j3,A.jF,A.iA,A.iz,A.jQ,A.k_,A.lc,A.k1,A.l1,A.iX,A.jc,A.iH,A.iG,A.jk,A.jg,A.jh,A.ji,A.jj,A.ka,A.kk,A.kl,A.iv,A.iw,A.jE])
r(A.dQ,A.bO)
q(A.h_,[A.fW,A.cB])
r(A.he,A.dm)
r(A.dJ,A.y)
r(A.aw,A.dJ)
q(A.eU,[A.jm,A.l9,A.kX,A.l0,A.j8,A.kC,A.jq,A.ju,A.jB,A.jC,A.jW,A.k5,A.kp,A.iE,A.iN,A.iL,A.iM,A.lm,A.li,A.lk,A.lh,A.lj,A.ll,A.lg,A.ls,A.k9])
r(A.cR,A.cg)
q(A.cR,[A.ed,A.ef])
r(A.ee,A.ed)
r(A.cf,A.ee)
r(A.eg,A.ef)
r(A.dN,A.eg)
r(A.dM,A.cf)
q(A.dN,[A.fr,A.fs,A.ft,A.fu,A.fv,A.cS,A.dO])
r(A.er,A.hs)
q(A.eT,[A.ks,A.kt,A.kS,A.kR,A.kx,A.kF,A.kD,A.kz,A.kE,A.ky,A.kI,A.kH,A.kG,A.k7,A.kQ,A.kN,A.l_,A.kO,A.lx,A.lv,A.lw,A.lr,A.lp,A.lq,A.lA,A.ly,A.lz,A.lD,A.lB,A.lC,A.l4,A.l2,A.l3,A.jG,A.iB,A.jR,A.k3,A.k4])
q(A.e5,[A.aN,A.d5])
r(A.d2,A.el)
q(A.ck,[A.em,A.e7])
r(A.bQ,A.em)
r(A.d3,A.e4)
r(A.cn,A.hn)
r(A.b9,A.bT)
r(A.hO,A.eu)
q(A.aw,[A.kM,A.e9])
r(A.eh,A.ev)
r(A.ea,A.eh)
q(A.bb,[A.cU,A.fb])
q(A.e,[A.u,A.f4,A.c6,A.ar,A.ei,A.as,A.a8,A.en,A.hb,A.d1,A.F,A.dr,A.eM])
q(A.u,[A.W,A.b0,A.bf])
q(A.W,[A.q,A.n])
q(A.q,[A.eI,A.eJ,A.eP,A.bY,A.cH,A.f6,A.cL,A.c7,A.ce,A.fP])
r(A.iP,A.be)
r(A.cG,A.hl)
q(A.aP,[A.iR,A.iS])
r(A.hp,A.ho)
r(A.dw,A.hp)
r(A.hr,A.hq)
r(A.f0,A.hr)
r(A.au,A.eO)
r(A.hv,A.hu)
r(A.f3,A.hv)
r(A.hz,A.hy)
r(A.c5,A.hz)
r(A.dD,A.c6)
r(A.b8,A.k)
q(A.b8,[A.bi,A.ap])
r(A.fm,A.hE)
r(A.fn,A.hF)
r(A.hH,A.hG)
r(A.fo,A.hH)
r(A.hJ,A.hI)
r(A.dP,A.hJ)
r(A.hN,A.hM)
r(A.fG,A.hN)
r(A.fN,A.hP)
r(A.ej,A.ei)
r(A.fS,A.ej)
r(A.hR,A.hQ)
r(A.fT,A.hR)
r(A.fX,A.hV)
r(A.i2,A.i1)
r(A.h0,A.i2)
r(A.eo,A.en)
r(A.h1,A.eo)
r(A.i5,A.i4)
r(A.h3,A.i5)
r(A.d_,A.ce)
r(A.ic,A.ib)
r(A.hk,A.ic)
r(A.e6,A.dx)
r(A.ie,A.id)
r(A.hx,A.ie)
r(A.ih,A.ig)
r(A.ec,A.ih)
r(A.ij,A.ii)
r(A.hS,A.ij)
r(A.il,A.ik)
r(A.i0,A.il)
r(A.bR,A.e7)
r(A.e8,A.bn)
r(A.ko,A.kn)
r(A.hC,A.hB)
r(A.fg,A.hC)
r(A.hL,A.hK)
r(A.fA,A.hL)
r(A.hZ,A.hY)
r(A.fZ,A.hZ)
r(A.i7,A.i6)
r(A.h4,A.i7)
q(A.F,[A.bc,A.cK])
r(A.dq,A.bc)
q(A.dr,[A.bX,A.fB])
r(A.eL,A.hj)
r(A.hU,A.hT)
r(A.fU,A.hU)
q(A.al,[A.bL,A.bM,A.cE,A.bJ,A.fL,A.dU,A.fM,A.bB])
r(A.a_,A.l)
q(A.a_,[A.cP,A.cO])
q(A.kv,[A.dY,A.b4,A.f9,A.b3,A.bG,A.aM,A.c1,A.di,A.cz,A.fD,A.c3,A.cY,A.cD,A.cl,A.af,A.cc,A.b_,A.js,A.Z,A.cQ,A.bZ,A.aQ,A.cm,A.bI,A.dW,A.a1])
q(A.jV,[A.iV,A.iZ,A.j6,A.fk,A.jY,A.k0,A.kb,A.j4])
q(A.a0,[A.fw,A.dT,A.aI,A.cX,A.fh,A.e0,A.dp,A.dv,A.eN,A.h8,A.dS,A.fI])
q(A.jb,[A.iK,A.jX])
q(A.b2,[A.hc,A.dk,A.dR])
q(A.hc,[A.eS,A.eG,A.eX,A.dh])
s(A.ed,A.h)
s(A.ee,A.an)
s(A.ef,A.h)
s(A.eg,A.an)
s(A.d2,A.hh)
s(A.ev,A.dX)
s(A.hl,A.iQ)
s(A.ho,A.h)
s(A.hp,A.p)
s(A.hq,A.h)
s(A.hr,A.p)
s(A.hu,A.h)
s(A.hv,A.p)
s(A.hy,A.h)
s(A.hz,A.p)
s(A.hE,A.y)
s(A.hF,A.y)
s(A.hG,A.h)
s(A.hH,A.p)
s(A.hI,A.h)
s(A.hJ,A.p)
s(A.hM,A.h)
s(A.hN,A.p)
s(A.hP,A.y)
s(A.ei,A.h)
s(A.ej,A.p)
s(A.hQ,A.h)
s(A.hR,A.p)
s(A.hV,A.y)
s(A.i1,A.h)
s(A.i2,A.p)
s(A.en,A.h)
s(A.eo,A.p)
s(A.i4,A.h)
s(A.i5,A.p)
s(A.ib,A.h)
s(A.ic,A.p)
s(A.id,A.h)
s(A.ie,A.p)
s(A.ig,A.h)
s(A.ih,A.p)
s(A.ii,A.h)
s(A.ij,A.p)
s(A.ik,A.h)
s(A.il,A.p)
s(A.hB,A.h)
s(A.hC,A.p)
s(A.hK,A.h)
s(A.hL,A.p)
s(A.hY,A.h)
s(A.hZ,A.p)
s(A.i6,A.h)
s(A.i7,A.p)
s(A.hj,A.y)
s(A.hT,A.h)
s(A.hU,A.p)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{f:"int",M:"double",N:"num",t:"String",E:"bool",S:"Null",m:"List"},mangledNames:{},types:["~()","~(i,dB)","a3()","b1()","m<aG>()","~(t,@)","~(ap)","~(~())","S()","~(@)","~(v,aU)","~(bC)","S(@)","~(a7)","~(k)","bN(f)","E(f,f)","f(v?)","~(t,t)","@(@)","~(v?)","@(@,t)","@(@,@)","~(aZ)","~(bH)","E(aG)","@(t)","E(v?)","~(f,@)","ao<~>(a1)","S(@,aU)","E(lJ)","~(m<M>)","S(~())","~(h2)","ao<~>(k)","S(bo)","~([v?])","E(bl)","f(f,f)","~(N)","S(v,aU)","H<@>(@)","f(am,am)","~(i)","~(v[f])","M(f)","E(U)","E(X)","E(aq)","E(ak)","f(m<i>,m<i>)","E(i)","~(bi)","E(@)","~(@,@)","~(v?,v?)","E(v?,v?)","f(a3,a3)","f(v?,v?)","f(i)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.pq(v.typeUniverse,JSON.parse('{"fE":"ca","cZ":"ca","bh":"ca","qN":"k","r5":"k","qP":"F","qU":"bc","qM":"n","r6":"n","qO":"e","rh":"e","rk":"e","qR":"q","rl":"u","r4":"u","r7":"bf","rj":"ap","ry":"a8","qT":"b8","qS":"b0","rn":"b0","r9":"c6","r8":"c5","qV":"G","qX":"ae","qQ":"ce","rg":"cf","rf":"cg","dE":{"E":[]},"dG":{"S":[]},"r":{"m":["1"],"o":["1"],"j":["1"]},"jl":{"r":["1"],"m":["1"],"o":["1"],"j":["1"]},"dl":{"a2":["1"]},"cM":{"M":[],"N":[],"ab":["N"]},"dF":{"M":[],"f":[],"N":[],"ab":["N"]},"fe":{"M":[],"N":[],"ab":["N"]},"c9":{"t":[],"ab":["t"],"mH":[]},"cb":{"J":[]},"o":{"j":["1"]},"aS":{"o":["1"],"j":["1"]},"e_":{"aS":["1"],"o":["1"],"j":["1"],"aS.E":"1","j.E":"1"},"bk":{"a2":["1"]},"cd":{"j":["2"],"j.E":"2"},"dy":{"cd":["1","2"],"o":["2"],"j":["2"],"j.E":"2"},"dK":{"a2":["2"]},"dL":{"aS":["2"],"o":["2"],"j":["2"],"aS.E":"2","j.E":"2"},"aE":{"j":["1"],"j.E":"1"},"e2":{"a2":["1"]},"cF":{"L":["1","2"]},"du":{"cF":["1","2"],"L":["1","2"]},"ac":{"cF":["1","2"],"L":["1","2"]},"dQ":{"bO":[],"J":[]},"ff":{"J":[]},"h7":{"J":[]},"ek":{"aU":[]},"c0":{"c4":[]},"eT":{"c4":[]},"eU":{"c4":[]},"h_":{"c4":[]},"fW":{"c4":[]},"cB":{"c4":[]},"fO":{"J":[]},"he":{"J":[]},"aw":{"y":["1","2"],"jo":["1","2"],"L":["1","2"],"y.K":"1","y.V":"2"},"dH":{"o":["1"],"j":["1"],"j.E":"1"},"dI":{"a2":["1"]},"fq":{"mr":[]},"cg":{"aD":[]},"cR":{"x":["1"],"aD":[]},"cf":{"h":["M"],"x":["M"],"m":["M"],"o":["M"],"aD":[],"j":["M"],"an":["M"],"h.E":"M"},"dN":{"h":["f"],"x":["f"],"m":["f"],"o":["f"],"aD":[],"j":["f"],"an":["f"]},"dM":{"h":["M"],"lM":[],"x":["M"],"m":["M"],"o":["M"],"aD":[],"j":["M"],"an":["M"],"h.E":"M"},"fr":{"h":["f"],"x":["f"],"m":["f"],"o":["f"],"aD":[],"j":["f"],"an":["f"],"h.E":"f"},"fs":{"h":["f"],"x":["f"],"m":["f"],"o":["f"],"aD":[],"j":["f"],"an":["f"],"h.E":"f"},"ft":{"h":["f"],"x":["f"],"m":["f"],"o":["f"],"aD":[],"j":["f"],"an":["f"],"h.E":"f"},"fu":{"h":["f"],"x":["f"],"m":["f"],"o":["f"],"aD":[],"j":["f"],"an":["f"],"h.E":"f"},"fv":{"h":["f"],"x":["f"],"m":["f"],"o":["f"],"aD":[],"j":["f"],"an":["f"],"h.E":"f"},"cS":{"h":["f"],"p3":[],"x":["f"],"m":["f"],"o":["f"],"aD":[],"j":["f"],"an":["f"],"h.E":"f"},"dO":{"h":["f"],"p4":[],"x":["f"],"m":["f"],"o":["f"],"aD":[],"j":["f"],"an":["f"],"h.E":"f"},"eq":{"mT":[]},"hs":{"J":[]},"er":{"bO":[],"J":[]},"H":{"ao":["1"]},"ep":{"h2":[]},"dn":{"J":[]},"aN":{"e5":["1"]},"d5":{"e5":["1"]},"el":{"mO":["1"],"n_":["1"],"co":["1"]},"d2":{"hh":["1"],"el":["1"],"mO":["1"],"n_":["1"],"co":["1"]},"bQ":{"em":["1"],"ck":["1"]},"d3":{"e4":["1"],"bn":["1"],"co":["1"]},"e4":{"bn":["1"],"co":["1"]},"em":{"ck":["1"]},"cn":{"hn":["1"]},"b9":{"bT":["1"]},"eu":{"mV":[]},"hO":{"eu":[],"mV":[]},"kM":{"aw":["1","2"],"y":["1","2"],"jo":["1","2"],"L":["1","2"],"y.K":"1","y.V":"2"},"e9":{"aw":["1","2"],"y":["1","2"],"jo":["1","2"],"L":["1","2"],"y.K":"1","y.V":"2"},"ea":{"dX":["1"],"mN":["1"],"o":["1"],"j":["1"]},"eb":{"a2":["1"]},"dJ":{"y":["1","2"],"L":["1","2"]},"y":{"L":["1","2"]},"eh":{"dX":["1"],"mN":["1"],"o":["1"],"j":["1"]},"c2":{"ab":["c2"]},"M":{"N":[],"ab":["N"]},"a7":{"ab":["a7"]},"f":{"N":[],"ab":["N"]},"m":{"o":["1"],"j":["1"]},"N":{"ab":["N"]},"t":{"ab":["t"],"mH":[]},"dm":{"J":[]},"bO":{"J":[]},"fz":{"J":[]},"bb":{"J":[]},"cU":{"J":[]},"fb":{"J":[]},"h9":{"J":[]},"h6":{"J":[]},"bm":{"J":[]},"eV":{"J":[]},"fC":{"J":[]},"dZ":{"J":[]},"eY":{"J":[]},"i_":{"aU":[]},"bi":{"k":[]},"ap":{"k":[]},"u":{"e":[]},"ar":{"e":[]},"as":{"e":[]},"a8":{"e":[]},"q":{"W":[],"u":[],"e":[]},"eI":{"W":[],"u":[],"e":[]},"eJ":{"W":[],"u":[],"e":[]},"eP":{"W":[],"u":[],"e":[]},"bY":{"W":[],"u":[],"e":[]},"b0":{"u":[],"e":[]},"cH":{"W":[],"u":[],"e":[]},"bf":{"u":[],"e":[]},"dw":{"h":["b7<N>"],"p":["b7<N>"],"m":["b7<N>"],"x":["b7<N>"],"o":["b7<N>"],"j":["b7<N>"],"p.E":"b7<N>","h.E":"b7<N>"},"dx":{"b7":["N"]},"f0":{"h":["t"],"p":["t"],"m":["t"],"x":["t"],"o":["t"],"j":["t"],"p.E":"t","h.E":"t"},"W":{"u":[],"e":[]},"f3":{"h":["au"],"p":["au"],"m":["au"],"x":["au"],"o":["au"],"j":["au"],"p.E":"au","h.E":"au"},"f4":{"e":[]},"f6":{"W":[],"u":[],"e":[]},"c5":{"h":["u"],"p":["u"],"m":["u"],"x":["u"],"o":["u"],"j":["u"],"p.E":"u","h.E":"u"},"dD":{"e":[]},"c6":{"e":[]},"cL":{"W":[],"u":[],"e":[]},"c7":{"W":[],"u":[],"e":[]},"ce":{"W":[],"u":[],"e":[]},"fm":{"y":["t","@"],"L":["t","@"],"y.K":"t","y.V":"@"},"fn":{"y":["t","@"],"L":["t","@"],"y.K":"t","y.V":"@"},"fo":{"h":["ax"],"p":["ax"],"m":["ax"],"x":["ax"],"o":["ax"],"j":["ax"],"p.E":"ax","h.E":"ax"},"dP":{"h":["u"],"p":["u"],"m":["u"],"x":["u"],"o":["u"],"j":["u"],"p.E":"u","h.E":"u"},"fG":{"h":["ay"],"p":["ay"],"m":["ay"],"x":["ay"],"o":["ay"],"j":["ay"],"p.E":"ay","h.E":"ay"},"fN":{"y":["t","@"],"L":["t","@"],"y.K":"t","y.V":"@"},"fP":{"W":[],"u":[],"e":[]},"fS":{"h":["ar"],"p":["ar"],"m":["ar"],"x":["ar"],"e":[],"o":["ar"],"j":["ar"],"p.E":"ar","h.E":"ar"},"fT":{"h":["az"],"p":["az"],"m":["az"],"x":["az"],"o":["az"],"j":["az"],"p.E":"az","h.E":"az"},"fX":{"y":["t","t"],"L":["t","t"],"y.K":"t","y.V":"t"},"h0":{"h":["a8"],"p":["a8"],"m":["a8"],"x":["a8"],"o":["a8"],"j":["a8"],"p.E":"a8","h.E":"a8"},"h1":{"h":["as"],"p":["as"],"m":["as"],"x":["as"],"e":[],"o":["as"],"j":["as"],"p.E":"as","h.E":"as"},"h3":{"h":["aC"],"p":["aC"],"m":["aC"],"x":["aC"],"o":["aC"],"j":["aC"],"p.E":"aC","h.E":"aC"},"b8":{"k":[]},"d_":{"W":[],"u":[],"e":[]},"hb":{"e":[]},"d1":{"km":[],"e":[]},"hk":{"h":["G"],"p":["G"],"m":["G"],"x":["G"],"o":["G"],"j":["G"],"p.E":"G","h.E":"G"},"e6":{"b7":["N"]},"hx":{"h":["av?"],"p":["av?"],"m":["av?"],"x":["av?"],"o":["av?"],"j":["av?"],"p.E":"av?","h.E":"av?"},"ec":{"h":["u"],"p":["u"],"m":["u"],"x":["u"],"o":["u"],"j":["u"],"p.E":"u","h.E":"u"},"hS":{"h":["aA"],"p":["aA"],"m":["aA"],"x":["aA"],"o":["aA"],"j":["aA"],"p.E":"aA","h.E":"aA"},"i0":{"h":["ae"],"p":["ae"],"m":["ae"],"x":["ae"],"o":["ae"],"j":["ae"],"p.E":"ae","h.E":"ae"},"e7":{"ck":["1"]},"bR":{"e7":["1"],"ck":["1"]},"e8":{"bn":["1"]},"dA":{"a2":["1"]},"hm":{"km":[],"e":[]},"hA":{"mI":[]},"fg":{"h":["aH"],"p":["aH"],"m":["aH"],"o":["aH"],"j":["aH"],"p.E":"aH","h.E":"aH"},"fA":{"h":["aJ"],"p":["aJ"],"m":["aJ"],"o":["aJ"],"j":["aJ"],"p.E":"aJ","h.E":"aJ"},"fZ":{"h":["t"],"p":["t"],"m":["t"],"o":["t"],"j":["t"],"p.E":"t","h.E":"t"},"n":{"W":[],"u":[],"e":[]},"h4":{"h":["aL"],"p":["aL"],"m":["aL"],"o":["aL"],"j":["aL"],"p.E":"aL","h.E":"aL"},"dq":{"F":[],"e":[]},"bX":{"e":[]},"F":{"e":[]},"eL":{"y":["t","@"],"L":["t","@"],"y.K":"t","y.V":"@"},"bc":{"F":[],"e":[]},"eM":{"e":[]},"dr":{"e":[]},"cK":{"F":[],"e":[]},"fB":{"e":[]},"fU":{"h":["L<@,@>"],"p":["L<@,@>"],"m":["L<@,@>"],"o":["L<@,@>"],"j":["L<@,@>"],"p.E":"L<@,@>","h.E":"L<@,@>"},"kU":{"j":["1"],"j.E":"1"},"cr":{"a2":["1"]},"cx":{"dC":[]},"b1":{"al":[]},"bL":{"al":[]},"bM":{"al":[]},"cE":{"al":[]},"bJ":{"al":[]},"fL":{"al":[]},"dU":{"al":[]},"fM":{"al":[]},"bB":{"al":[]},"a_":{"l":[]},"cP":{"a_":["f"],"l":[],"a_.T":"f"},"cO":{"a_":["f"],"l":[],"a_.T":"f"},"bN":{"dC":[]},"fj":{"dC":[]},"fw":{"a0":[]},"dT":{"a0":[]},"aI":{"a0":[]},"cX":{"a0":[]},"fh":{"a0":[]},"e0":{"a0":[]},"dp":{"a0":[]},"dv":{"a0":[]},"eN":{"a0":[]},"h8":{"a0":[]},"dS":{"a0":[]},"fI":{"a0":[]},"ch":{"ab":["ch"]},"fR":{"p_":[]},"hc":{"b2":["i"]},"dk":{"b2":["1"]},"dR":{"b2":["1"]},"eS":{"b2":["i"]},"eG":{"b2":["i"]},"eX":{"b2":["i"]},"dh":{"b2":["i"]},"lM":{"m":["M"],"o":["M"],"j":["M"],"aD":[]}}'))
A.pp(v.typeUniverse,JSON.parse('{"o":1,"cR":1,"dJ":2,"eh":1,"ev":1}'))
var u={h:"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",q:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",p:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",l:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",j:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x , u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n    float source_strength = u_source_strength + sin(u_time * 2.0);\n    float dist = distance(snapped_position, (u_source_position + vec2(0.5, 0.5)) * u_block_size) / 50.0;\n    if (dist > source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, source_strength, dist);\n    outColor = vec4(u_source_color.rgb, scale);\n}\n",B:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // front and back textures are already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 front = texture(u_light_texture, d);\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  // front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.aa
return{bm:s("@<~>"),mm:s("eH"),bB:s("U"),lE:s("ak"),u:s("dn"),bD:s("aZ"),lo:s("mr"),g:s("bY"),nK:s("cC"),n6:s("ab<v?>"),d5:s("G"),cs:s("c2"),mX:s("cH"),dA:s("bf"),jW:s("bH"),J:s("a7"),ox:s("lJ"),gt:s("o<@>"),v:s("am"),aW:s("f1"),b:s("c3"),fz:s("J"),L:s("k"),et:s("au"),A:s("lM"),gY:s("c4"),h:s("ao<@>"),m:s("ac<f,l>"),eT:s("Y<cc>"),f5:s("Y<cl>"),eN:s("Y<af>"),R:s("Y<bN>"),ba:s("Y<cY>"),de:s("Y<M>"),oQ:s("Y<aG?>"),hQ:s("cL"),U:s("a1"),fY:s("c7"),lZ:s("aG"),e7:s("j<@>"),c7:s("r<cx>"),p:s("r<cz>"),G:s("r<V>"),a:s("r<al>"),E:s("r<b_>"),fy:s("r<bC>"),Q:s("r<eW>"),X:s("r<aQ>"),pl:s("r<lJ>"),c:s("r<am>"),w:s("r<a0>"),iw:s("r<ao<~>>"),ow:s("r<dC>"),ge:s("r<a1>"),Y:s("r<c8>"),I:s("r<aG>"),lB:s("r<b4>"),do:s("r<m<i>>"),hf:s("r<v>"),d:s("r<fD>"),q:s("r<i>"),ff:s("r<fK>"),fk:s("r<cW>"),fF:s("r<fV>"),s:s("r<t>"),oe:s("r<e1>"),o:s("r<w>"),B:s("r<aM>"),D:s("r<e3>"),n:s("r<M>"),dG:s("r<@>"),t:s("r<f>"),g2:s("r<N>"),f7:s("r<~()>"),ev:s("r<~(a7)>"),T:s("dG"),dY:s("bh"),dX:s("x<@>"),mT:s("bi"),kT:s("aH"),k:s("m<cx>"),mw:s("m<am>"),i8:s("m<i>"),bd:s("m<M>"),gM:s("cc"),cM:s("L<i,am>"),ea:s("L<t,@>"),av:s("L<@,@>"),gX:s("cO"),e:s("cP"),li:s("X"),ib:s("ax"),r:s("bl"),V:s("ap"),fh:s("u"),P:s("S"),ai:s("aJ"),K:s("v"),p6:s("ch"),ni:s("fF"),d8:s("ay"),j:s("i"),o5:s("mI"),kB:s("aq"),mx:s("b7<N>"),cH:s("cV"),fm:s("ar"),cA:s("az"),hH:s("aA"),hd:s("a3"),l:s("aU"),N:s("t"),lv:s("ae"),dt:s("cl"),dy:s("af"),dQ:s("as"),gJ:s("a8"),lJ:s("bo"),W:s("bN"),ns:s("cY"),hU:s("h2"),ki:s("aC"),hk:s("aL"),fH:s("e1"),ha:s("mT"),bC:s("bO"),jv:s("aD"),cx:s("cZ"),eL:s("d_"),kL:s("aE<U>"),b1:s("aE<ak>"),eo:s("aE<X>"),au:s("aE<aq>"),c1:s("e3"),kg:s("km"),l7:s("hd"),oJ:s("aN<aZ>"),fB:s("aN<bo>"),ou:s("aN<~>"),aN:s("hi"),bz:s("bR<k>"),eX:s("bR<ap>"),og:s("H<aZ>"),aa:s("H<bo>"),f:s("H<@>"),hy:s("H<f>"),cU:s("H<~>"),gL:s("hW<v?>"),iF:s("d5<~>"),im:s("i3"),o3:s("i8"),k4:s("E"),ei:s("E(U)"),g9:s("E(ak)"),eU:s("E(X)"),iW:s("E(v)"),hZ:s("E(aq)"),i:s("M"),z:s("@"),mY:s("@()"),y:s("@(v)"),ng:s("@(v,aU)"),p1:s("@(@,@)"),S:s("f"),eK:s("0&*"),_:s("v*"),iB:s("e?"),gK:s("ao<S>?"),ef:s("av?"),O:s("aG?"),iD:s("v?"),F:s("cq<@,@>?"),nF:s("hD?"),du:s("@(k)?"),Z:s("~()?"),p0:s("~(aZ)?"),lW:s("~(bH)?"),oV:s("~(k)?"),jV:s("~(bi)?"),b9:s("~(ap)?"),cZ:s("N"),H:s("~"),M:s("~()"),nD:s("~([~])"),x:s("~(a7)"),nt:s("~(a0)"),i6:s("~(v)"),fQ:s("~(v,aU)"),gS:s("~(t,t)"),C:s("~(t,@)"),my:s("~(h2)"),hv:s("~(N)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aL=A.dq.prototype
B.bV=A.bX.prototype
B.bW=A.eK.prototype
B.E=A.bY.prototype
B.c6=A.cC.prototype
B.q=A.cG.prototype
B.dl=A.cK.prototype
B.dm=A.dD.prototype
B.dp=A.c7.prototype
B.dq=J.a.prototype
B.a=J.r.prototype
B.ds=J.dE.prototype
B.e=J.dF.prototype
B.c=J.cM.prototype
B.z=J.c9.prototype
B.dt=J.bh.prototype
B.bj=A.dM.prototype
B.e0=A.cS.prototype
B.ax=A.dO.prototype
B.bl=J.fE.prototype
B.f=A.cV.prototype
B.aG=J.cZ.prototype
B.bz=A.d1.prototype
B.aE=new A.af("table")
B.bA=new A.dh(B.aE)
B.ae=new A.af("bookshelf")
B.bB=new A.dh(B.ae)
B.aH=new A.di("rounds")
B.bN=new A.U("",0,0,0,99)
B.H=new A.b_("surface")
B.x=new A.b_("caves")
B.y=new A.b_("deepCaves")
B.B=new A.b_("facility")
B.u=new A.b_("ruins")
B.af=new A.b_("village")
B.ag=new A.b_("snow")
B.bX=new A.eG()
B.ec=new A.dk(A.aa("dk<i>"))
B.ah=new A.eS()
B.ai=new A.eX()
B.aM=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bY=function() {
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
B.c2=function(getTagFallback) {
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
B.bZ=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.c_=function(hooks) {
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
B.c1=function(hooks) {
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
B.c0=function(hooks) {
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
B.aN=function(hooks) { return hooks; }

B.aO=new A.jI()
B.c3=new A.dR(A.aa("dR<i>"))
B.c4=new A.fC()
B.D=new A.jZ()
B.v=new A.hA()
B.j=new A.hO()
B.c5=new A.i_()
B.aP=new A.bZ("north")
B.aQ=new A.bZ("south")
B.aR=new A.bZ("east")
B.aS=new A.bZ("west")
B.aT=new A.cD("none")
B.c7=new A.cD("ignoreAgents")
B.Y=new A.cD("ignoreAgentsAndUnlockedDoors")
B.aj=new A.cD("normal")
B.c8=new A.l(1660944383)
B.c9=new A.l(3707764736)
B.aU=new A.l(4278190080)
B.cz=new A.l(4286941355)
B.cJ=new A.l(4291232805)
B.cW=new A.l(4294278144)
B.dg=new A.b3("acid")
B.aV=new A.b3("cold")
B.aW=new A.b3("electricity")
B.Z=new A.b3("fire")
B.dh=new A.b3("sonic")
B.a_=new A.b3("bludgeoning")
B.ak=new A.b3("piercing")
B.aX=new A.b3("slashing")
B.aY=new A.bG("d3")
B.a0=new A.bG("d4")
B.I=new A.bG("d6")
B.al=new A.bG("d8")
B.aZ=new A.bG("d12")
B.am=new A.bG("d20")
B.J=new A.aQ("se")
B.K=new A.aQ("ne")
B.L=new A.aQ("sw")
B.M=new A.aQ("nw")
B.k=new A.aQ("n")
B.l=new A.aQ("e")
B.m=new A.aQ("s")
B.n=new A.aQ("w")
B.di=new A.a7(0)
B.dj=new A.a7(25e4)
B.dk=new A.a7(8000)
B.N=new A.c3("primaryMelee")
B.r=new A.c3("primaryRanged")
B.O=new A.c3("armor")
B.a1=new A.a1("north")
B.a2=new A.a1("east")
B.b_=new A.a1("autoexplore")
B.b0=new A.a1("reload")
B.a3=new A.a1("south")
B.a4=new A.a1("west")
B.dn=new A.a1("skip")
B.b1=new A.a1("fire")
B.b2=new A.a1("look")
B.b3=new A.a1("reset")
B.b4=new A.a1("activate")
B.an=new A.Z("none")
B.ao=new A.Z("stairsUp")
B.a5=new A.Z("tree")
B.a6=new A.Z("bookshelf")
B.P=new A.Z("mechanism")
B.a7=new A.Z("activatedMechanism")
B.a8=new A.Z("chest")
B.Q=new A.Z("mechanicalLight")
B.R=new A.Z("stairsDown")
B.w=new A.Z("door")
B.S=new A.Z("openDoor")
B.T=new A.Z("lockedDoor")
B.F=new A.Z("grass")
B.U=new A.Z("torch")
B.a9=new A.Z("table")
B.aa=new A.Z("chair")
B.ap=new A.b4("melee")
B.aq=new A.b4("ranged")
B.ar=new A.b4("armor")
B.as=new A.b4("other")
B.dr=new A.b4("consumable")
B.b5=new A.b4("corpse")
B.at=new A.b4("ammo")
B.du=new A.js("water")
B.aI=new A.cz("light")
B.aJ=new A.cz("heavy")
B.aK=new A.cz("powered")
B.ev=A.c(s([B.aI,B.aJ,B.aK]),t.p)
B.bH=new A.ak(1)
B.bI=new A.ak(1)
B.bJ=new A.ak(1)
B.bK=new A.ak(1)
B.er=A.c(s([B.aK]),t.p)
B.bL=new A.ak(2)
B.es=A.c(s([B.aI,B.aJ]),t.p)
B.bM=new A.ak(2)
B.dv=A.c(s([B.bH,B.bI,B.bJ,B.bK,B.bL,B.bM]),A.aa("r<ak>"))
B.b6=A.c(s([24,36]),t.n)
B.dw=A.c(s([B.aP,B.aQ,B.aR,B.aS]),A.aa("r<bZ>"))
B.au=A.c(s([B.J,B.K,B.L,B.M,B.k,B.l,B.m,B.n]),t.X)
B.ep=new A.f9("oneHand")
B.eo=new A.c1("staggered")
B.ed=new A.bF()
B.e9=new A.aM("stun")
B.by=new A.aM("powered")
B.dz=A.c(s([B.e9,B.by]),t.B)
B.bD=new A.di("charge")
B.bF=new A.dj(B.bD,20)
B.e1=new A.aq("Zero pistol",B.aV,B.I,5,B.bF,60)
B.ek=new A.c1("none")
B.ee=new A.bF()
B.X=new A.aM("analog")
B.et=A.c(s([B.X]),t.B)
B.bG=new A.dj(B.aH,9)
B.V=new A.aq("Tac Pistol",B.ak,B.I,1,B.bG,30)
B.en=new A.c1("burn")
B.ef=new A.bF()
B.ea=new A.aM("line")
B.eb=new A.aM("unwieldy")
B.eu=A.c(s([B.ea,B.eb]),t.B)
B.bC=new A.di("petro")
B.bE=new A.dj(B.bC,20)
B.e2=new A.aq("Flame Rifle",B.Z,B.al,2,B.bE,25)
B.dx=A.c(s([B.e1,B.V,B.e2]),A.aa("r<aq>"))
B.b7=A.c(s([B.k,B.m]),t.X)
B.b8=A.c(s([B.l,B.n]),t.X)
B.bw=new A.aM("archaic")
B.dF=A.c(s([B.bw,B.X]),t.B)
B.dX=new A.X(B.a_,1,B.I,0,"Club",B.dF)
B.e8=new A.aM("operative")
B.ba=A.c(s([B.X,B.e8]),t.B)
B.dU=new A.X(B.a_,1,B.a0,1,"Tactical Baton",B.ba)
B.dV=new A.X(B.aX,1,B.a0,1,"Survival Knife",B.ba)
B.eq=new A.f9("twoHand")
B.bx=new A.aM("block")
B.dy=A.c(s([B.X,B.bx]),t.B)
B.dR=new A.X(B.ak,1,B.I,1,"Tactical Spear",B.dy)
B.eg=new A.bF()
B.b9=A.c(s([B.by]),t.B)
B.ej=new A.jz()
B.dW=new A.X(B.Z,2,B.a0,7,"Flame Sword",B.b9)
B.em=new A.c1("wound")
B.eh=new A.bF()
B.dT=new A.X(B.Z,2,B.al,9,"Plasma Sword",B.b9)
B.el=new A.c1("arc")
B.ei=new A.bF()
B.dQ=new A.X(B.aW,1,B.aZ,8,"Shock Staff",B.dz)
B.dA=A.c(s([B.dX,B.dU,B.dV,B.dR,B.dW,B.dT,B.dQ]),A.aa("r<X>"))
B.C=A.c(s([-1,3,-1,-1,3,-1]),t.n)
B.ab=A.c(s([]),t.Q)
B.dC=A.c(s([]),t.X)
B.h=A.c(s([]),t.w)
B.dB=A.c(s([]),A.aa("r<S>"))
B.bT=new A.U("Second Skin",1,1,2,5)
B.bU=new A.U("Estex Suit I",1,0,1,5)
B.bQ=new A.U("Flight Suit",1,0,1,6)
B.bR=new A.U("Freebooter Armor I",2,2,3,4)
B.bO=new A.U("Kasatha microcord I",2,1,3,3)
B.bP=new A.U("Ceremonial Plate",1,1,3,2)
B.bS=new A.U("Golemforged Plating",1,2,5,0)
B.dE=A.c(s([B.bT,B.bU,B.bQ,B.bR,B.bO,B.bP,B.bS]),A.aa("r<U>"))
B.bo=new A.bI("north")
B.bp=new A.bI("south")
B.bq=new A.bI("east")
B.br=new A.bI("west")
B.bs=new A.bI("center")
B.bb=A.c(s([B.bo,B.bp,B.bq,B.br,B.bs]),A.aa("r<bI>"))
B.bc=new A.cc("lockedDoor")
B.dH=new A.cc("doorMechanism")
B.bd=new A.cc("none")
B.cQ=new A.l(4293457385)
B.cK=new A.l(4291356361)
B.cD=new A.l(4289058471)
B.cx=new A.l(4286695300)
B.cs=new A.l(4284922730)
B.cn=new A.l(4283215696)
B.ck=new A.l(4282622023)
B.ci=new A.l(4281896508)
B.cg=new A.l(4281236786)
B.cc=new A.l(4279983648)
B.be=new A.ac([50,B.cQ,100,B.cK,200,B.cD,300,B.cx,400,B.cs,500,B.cn,600,B.ck,700,B.ci,800,B.cg,900,B.cc],t.m)
B.dd=new A.l(4294966759)
B.dc=new A.l(4294965700)
B.db=new A.l(4294964637)
B.da=new A.l(4294963574)
B.d9=new A.l(4294962776)
B.d7=new A.l(4294961979)
B.d_=new A.l(4294826037)
B.cZ=new A.l(4294688813)
B.cY=new A.l(4294551589)
B.cX=new A.l(4294278935)
B.bf=new A.ac([50,B.dd,100,B.dc,200,B.db,300,B.da,400,B.d9,500,B.d7,600,B.d_,700,B.cZ,800,B.cY,900,B.cX],t.m)
B.cU=new A.l(4293913577)
B.cN=new A.l(4292332744)
B.cH=new A.l(4290554532)
B.cC=new A.l(4288776319)
B.cA=new A.l(4287458915)
B.cw=new A.l(4286141768)
B.cu=new A.l(4285353025)
B.cq=new A.l(4284301367)
B.co=new A.l(4283315246)
B.cj=new A.l(4282263331)
B.dI=new A.ac([50,B.cU,100,B.cN,200,B.cH,300,B.cC,400,B.cA,500,B.cw,600,B.cu,700,B.cq,800,B.co,900,B.cj],t.m)
B.cR=new A.l(4293718001)
B.cL=new A.l(4291811548)
B.cE=new A.l(4289773253)
B.cB=new A.l(4287669422)
B.cv=new A.l(4286091420)
B.cr=new A.l(4284513675)
B.cp=new A.l(4283723386)
B.cm=new A.l(4282735204)
B.ch=new A.l(4281812815)
B.cd=new A.l(4280693304)
B.bg=new A.ac([50,B.cR,100,B.cL,200,B.cE,300,B.cB,400,B.cv,500,B.cr,600,B.cp,700,B.cm,800,B.ch,900,B.cd],t.m)
B.av=new A.ac([B.O,null,B.N,null,B.r,null],A.aa("ac<c3,aG?>"))
B.dD=A.c(s([]),t.s)
B.ew=new A.du(0,{},B.dD,A.aa("du<t,@>"))
B.cy=new A.l(4286755327)
B.cl=new A.l(4282682111)
B.cf=new A.l(4280908287)
B.ce=new A.l(4280902399)
B.dK=new A.ac([100,B.cy,200,B.cl,400,B.cf,700,B.ce],t.m)
B.d4=new A.l(4294955392)
B.d2=new A.l(4294945600)
B.d1=new A.l(4294938880)
B.d0=new A.l(4294929664)
B.dM=new A.ac([100,B.d4,200,B.d2,400,B.d1,700,B.d0],t.m)
B.cG=new A.l(4290377418)
B.ct=new A.l(4285132974)
B.cb=new A.l(4278249078)
B.ca=new A.l(4278241363)
B.dL=new A.ac([100,B.cG,200,B.ct,400,B.cb,700,B.ca],t.m)
B.dO=new A.cO(B.dL,4285132974)
B.df=new A.l(4294967181)
B.de=new A.l(4294967040)
B.d6=new A.l(4294961664)
B.d5=new A.l(4294956544)
B.dN=new A.ac([100,B.df,200,B.de,400,B.d6,700,B.d5],t.m)
B.dP=new A.cO(B.dN,4294967040)
B.bh=new A.cP(B.bf,4294961979)
B.d8=new A.l(4294962158)
B.d3=new A.l(4294954450)
B.cT=new A.l(4293892762)
B.cP=new A.l(4293227379)
B.cS=new A.l(4293874512)
B.cV=new A.l(4294198070)
B.cO=new A.l(4293212469)
B.cM=new A.l(4292030255)
B.cI=new A.l(4291176488)
B.cF=new A.l(4290190364)
B.dJ=new A.ac([50,B.d8,100,B.d3,200,B.cT,300,B.cP,400,B.cS,500,B.cV,600,B.cO,700,B.cM,800,B.cI,900,B.cF],t.m)
B.aw=new A.cP(B.dJ,4294198070)
B.e7=new A.aM("nonlethal")
B.dG=A.c(s([B.bw,B.e7,B.X]),t.B)
B.dS=new A.X(B.a_,1,B.aY,0,"Fists",B.dG)
B.bi=new A.cQ("wildBoar")
B.dY=new A.cQ("zyborgMelee")
B.dZ=new A.cQ("zyborgRanged")
B.e_=new A.cQ("caveScanner")
B.bk=new A.fD("elementalAffinity")
B.A=new A.i(0,0)
B.ac=new A.dW("small")
B.bm=new A.dW("medium")
B.bn=new A.dW("large")
B.ay=new A.dY("melee")
B.az=new A.dY("ranged")
B.aA=new A.dY("armor")
B.aB=new A.cl("dirt")
B.G=new A.cl("metal")
B.e3=new A.cl("snow")
B.W=new A.af("door")
B.e4=new A.af("grass")
B.aC=new A.af("mechanicalLight")
B.aD=new A.af("light")
B.p=new A.af("none")
B.bt=new A.af("chair")
B.ad=new A.af("chest")
B.bu=new A.af("mechanism")
B.bv=new A.af("tree")
B.i=new A.cY("floor")
B.b=new A.cY("wall")
B.e5=A.qK("v")
B.t=new A.cm("float_1")
B.d=new A.cm("float_2")
B.e6=new A.cm("float_3")
B.aF=new A.cm("float_4")
B.o=new A.cm("texture_1")})();(function staticFields(){$.kK=null
$.bd=0
$.ds=null
$.mp=null
$.nm=null
$.ni=null
$.nt=null
$.l5=null
$.lb=null
$.m9=null
$.d9=null
$.ew=null
$.ex=null
$.m3=!1
$.D=B.j
$.aF=A.c([],t.hf)
$.mw=0
$.pE=A.bj(["ArrowUp",B.a1,"ArrowDown",B.a3,"ArrowRight",B.a2,"ArrowLeft",B.a4,"q",B.b1," ",B.b4,"0",B.b_,"l",B.b2,"w",B.a1,"a",B.a4,"s",B.a3,"d",B.a2,"Escape",B.b3,"r",B.b0],t.N,t.U)
$.cs=A.lX("engine")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qY","ny",function(){return A.qn("_$dart_dartClosure")})
s($,"ro","nI",function(){return A.bp(A.kg({
toString:function(){return"$receiver$"}}))})
s($,"rp","nJ",function(){return A.bp(A.kg({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"rq","nK",function(){return A.bp(A.kg(null))})
s($,"rr","nL",function(){return A.bp(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"ru","nO",function(){return A.bp(A.kg(void 0))})
s($,"rv","nP",function(){return A.bp(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rt","nN",function(){return A.bp(A.mU(null))})
s($,"rs","nM",function(){return A.bp(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"rx","nR",function(){return A.bp(A.mU(void 0))})
s($,"rw","nQ",function(){return A.bp(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rz","md",function(){return A.p6()})
s($,"rK","lE",function(){return A.lf(B.e5)})
s($,"qW","nx",function(){return{}})
s($,"r1","mb",function(){return B.z.bf(A.lI(),"Opera",0)})
s($,"r0","nB",function(){return!A.O($.mb())&&B.z.bf(A.lI(),"Trident/",0)})
s($,"r_","nA",function(){return B.z.bf(A.lI(),"Firefox",0)})
s($,"qZ","nz",function(){return"-"+$.nC()+"-"})
s($,"r2","nC",function(){if(A.O($.nA()))var q="moz"
else if($.nB())q="ms"
else q=A.O($.mb())?"o":"webkit"
return q})
s($,"re","nH",function(){return A.c([$.o7(),$.o8(),$.o9(),$.nV(),$.o5()],A.aa("r<bl>"))})
s($,"t9","o7",function(){return A.fp(A.eF(4,6,8,4,4,8),new A.lv(),A.c([B.H],t.E),"death_1.mp3",new A.lw(),B.bi,0,4,"Wild Boar",new A.lx())})
s($,"t7","o5",function(){return A.fp(A.eF(4,6,8,4,4,10),new A.lp(),A.c([B.ag],t.E),"death_1.mp3",new A.lq(),B.bi,2,4,"Snow Bear",new A.lr())})
s($,"ta","o8",function(){return A.fp(A.eF(4,8,8,4,4,10),new A.ly(),A.c([B.x,B.y,B.B,B.u],t.E),"monster_scream_1.mp3",new A.lz(),B.dY,1,6,"Zyborg",new A.lA())})
s($,"tb","o9",function(){return A.fp(A.eF(4,8,10,4,4,10),new A.lB(),A.c([B.x,B.y,B.B,B.u],t.E),"monster_scream_1.mp3",new A.lC(),B.dZ,2,6,"Zyborg Ranged",new A.lD())})
s($,"rP","nV",function(){return A.fp(A.eF(4,6,12,6,4,6),new A.l2(),A.c([B.x,B.y,B.B,B.u],t.E),null,new A.l3(),B.e_,3,6,"Cave Scanner",new A.l4())})
s($,"rS","me",function(){var q=A.c([A.bP(B.d,"u_resolution"),A.bP(B.t,"u_time"),A.bP(B.d,"u_offset"),A.bP(B.d,"u_origin")],t.o)
return A.aR(A.c([A.mo(35044,A.mE(B.C),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\nuniform vec2 u_origin;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  float dist = distance(snapped_position, (u_origin + vec2(0.5, 0.5)) * vec2(24.0, 36.0)) / 50.0;\n  float rand = -1.0 + random(relative_position) / 2.0;\n  float scale_rate = 0.8 * (u_time);\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(249.0 / 255.0, 168.0 / 255.0, 37.0 / 255.0, scale);\n}\n",q,u.h)})
s($,"rW","nZ",function(){var q=A.c([A.bP(B.d,"u_resolution"),A.bP(B.t,"u_time"),A.bP(B.d,"u_offset"),A.bP(B.d,"u_source"),A.bP(B.d,"u_target")],t.o)
return A.aR(A.c([A.mo(35044,A.mE(B.C),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nuniform vec2 u_source;\nuniform vec2 u_target;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 p0 = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  vec2 p1 = (u_source + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n  vec2 p2 = (u_target + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n\n  if ((p1.x != p2.x) && (p0.x < p1.x && p0.x < p2.x) || (p0.x > p1.x && p0.x > p2.x)) {\n    discard;\n    return;\n  }\n  if ((p1.y != p2.y) && (p0.y < p1.y && p0.y < p2.y) || (p0.y > p1.y && p0.y > p2.y)) {\n    discard;\n    return;\n  }\n\n  float dist = abs( (p2.x - p1.x) * (p1.y - p0.y) - (p1.x - p0.x) * (p2.y - p1.y) ) / sqrt( pow(p2.x - p1.x, 2.0) + pow(p2.y - p1.y, 2.0) );\n  float rand = random(relative_position);\n  float scale_rate = 1.5;\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = 1.0 - smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(0.1, 0.2, 1.0, 0.8 * scale - u_time);\n}\n",q,u.h)})
s($,"ri","df",function(){return new A.jM()})
s($,"r3","nD",function(){return A.fJ()})
s($,"ra","mc",function(){return A.lT(A.bD(4278780675),A.bD(4279308561),A.bD(4280361249))})
s($,"rb","nE",function(){return A.lT(A.bD(4279898637),A.bD(4281017118),A.bD(4282858034))})
s($,"rd","nG",function(){return A.lT(A.bD(4279765786),A.bD(4280096038),A.bD(4282463311))})
s($,"rc","nF",function(){return $.mc()})
s($,"rL","dg",function(){return A.fJ()})
r($,"rO","nU",function(){var q,p,o=A.c([],t.q)
for(q=1;q<99;++q)for(p=q;p<39;++p)o.push(A.oM(q,p))
return o})
s($,"rN","nT",function(){return A.fJ()})
s($,"t4","mi",function(){return A.d0(B.ah,new A.lm())})
s($,"t0","mg",function(){return A.d0(B.bA,new A.li())})
s($,"t2","eD",function(){return A.d0(B.ai,new A.lk())})
s($,"t_","o1",function(){return A.d0(B.ah,new A.lh())})
s($,"t1","o2",function(){return A.d0(B.ah,new A.lj())})
s($,"t3","mh",function(){return A.d0(B.ai,new A.ll())})
s($,"rZ","o0",function(){return A.d0(B.c3,new A.lg())})
s($,"rY","lF",function(){var q=$.mi(),p=$.mg()
return A.c([q,p,p,$.eD()],t.D)})
s($,"rX","o_",function(){var q=$.o0()
return A.c([q,q,q,q,q,$.eD(),$.mi(),$.mg()],t.D)})
s($,"rV","nY",function(){var q=$.eD()
return A.c([q,q,q,q],t.D)})
s($,"rU","nX",function(){var q=$.eD(),p=$.o1()
return A.c([q,q,q,q,q,q,p,p,p,p],t.D)})
s($,"t8","o6",function(){return A.c([$.o2(),$.eD()],t.D)})
s($,"rM","nS",function(){return new Uint8Array(A.d6(A.c([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t)))})
s($,"rR","nW",function(){var q=A.fJ(),p=A.fJ(),o=$.dg(),n=t.t,m=A.aa("r<bl>")
n=new A.iW(new A.iF(p,new A.jf(q)),A.c([A.b6(B.H,1,A.bu(o,60)),A.b6(B.x,2,A.bu(o,40)),A.b6(B.x,3,A.bu(o,40)),A.b6(B.x,4,A.bu(o,40)),A.b6(B.y,5,A.bu(o,20)),A.b6(B.y,6,A.bu(o,20)),A.b6(B.y,7,A.bu(o,20)),A.b6(B.u,8,A.bu(o,10)),A.b6(B.u,9,A.bu(o,10)),A.b6(B.u,10,A.bu(o,10)),A.b6(B.B,11,!1)],A.aa("r<fl>")),A.c([2,4,4,4,6,6,6,10,10,10,12],n),A.c([A.aW(o,10,25),A.aW(o,115,125),A.aW(o,115,125),A.aW(o,115,125),A.aW(o,125,135),A.aW(o,125,135),A.aW(o,125,135),A.aW(o,135,145),A.aW(o,135,145),A.aW(o,135,145),A.aW(o,170,200)],n),A.c([A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m)],A.aa("r<m<bl>>")),A.c([0,0,0,0,0,0,0,0,0,0,0],n),A.ad(t.r,A.aa("c_")))
n.dD()
n.dB()
return n})
s($,"rT","mf",function(){return t.cH.a(B.E.bB(t.g.a(A.qk().querySelector("#glCanvas")),"webgl2"))})
s($,"t6","o4",function(){return new A.f1()})
s($,"t5","o3",function(){var q=t.i
return new A.fF(A.mG(0,q),A.mG(0,q))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:A.fq,DataView:A.cg,ArrayBufferView:A.cg,Float64Array:A.cf,Float32Array:A.dM,Int16Array:A.fr,Int32Array:A.fs,Int8Array:A.ft,Uint16Array:A.fu,Uint32Array:A.fv,Uint8ClampedArray:A.cS,CanvasPixelArray:A.cS,Uint8Array:A.dO,HTMLBRElement:A.q,HTMLBaseElement:A.q,HTMLButtonElement:A.q,HTMLContentElement:A.q,HTMLDListElement:A.q,HTMLDataElement:A.q,HTMLDataListElement:A.q,HTMLDetailsElement:A.q,HTMLDialogElement:A.q,HTMLEmbedElement:A.q,HTMLFieldSetElement:A.q,HTMLHRElement:A.q,HTMLHeadElement:A.q,HTMLHeadingElement:A.q,HTMLHtmlElement:A.q,HTMLIFrameElement:A.q,HTMLLIElement:A.q,HTMLLabelElement:A.q,HTMLLegendElement:A.q,HTMLLinkElement:A.q,HTMLMapElement:A.q,HTMLMenuElement:A.q,HTMLMetaElement:A.q,HTMLMeterElement:A.q,HTMLModElement:A.q,HTMLOListElement:A.q,HTMLObjectElement:A.q,HTMLOptGroupElement:A.q,HTMLOptionElement:A.q,HTMLOutputElement:A.q,HTMLParagraphElement:A.q,HTMLParamElement:A.q,HTMLPictureElement:A.q,HTMLPreElement:A.q,HTMLProgressElement:A.q,HTMLQuoteElement:A.q,HTMLScriptElement:A.q,HTMLShadowElement:A.q,HTMLSlotElement:A.q,HTMLSourceElement:A.q,HTMLSpanElement:A.q,HTMLStyleElement:A.q,HTMLTableCaptionElement:A.q,HTMLTableCellElement:A.q,HTMLTableDataCellElement:A.q,HTMLTableHeaderCellElement:A.q,HTMLTableColElement:A.q,HTMLTableElement:A.q,HTMLTableRowElement:A.q,HTMLTableSectionElement:A.q,HTMLTemplateElement:A.q,HTMLTextAreaElement:A.q,HTMLTimeElement:A.q,HTMLTitleElement:A.q,HTMLTrackElement:A.q,HTMLUListElement:A.q,HTMLUnknownElement:A.q,HTMLDirectoryElement:A.q,HTMLFontElement:A.q,HTMLFrameElement:A.q,HTMLFrameSetElement:A.q,HTMLMarqueeElement:A.q,HTMLElement:A.q,AccessibleNodeList:A.it,HTMLAnchorElement:A.eI,HTMLAreaElement:A.eJ,Blob:A.eO,HTMLBodyElement:A.eP,HTMLCanvasElement:A.bY,CanvasRenderingContext2D:A.cC,CDATASection:A.b0,CharacterData:A.b0,Comment:A.b0,ProcessingInstruction:A.b0,Text:A.b0,CSSPerspective:A.iP,CSSCharsetRule:A.G,CSSConditionRule:A.G,CSSFontFaceRule:A.G,CSSGroupingRule:A.G,CSSImportRule:A.G,CSSKeyframeRule:A.G,MozCSSKeyframeRule:A.G,WebKitCSSKeyframeRule:A.G,CSSKeyframesRule:A.G,MozCSSKeyframesRule:A.G,WebKitCSSKeyframesRule:A.G,CSSMediaRule:A.G,CSSNamespaceRule:A.G,CSSPageRule:A.G,CSSRule:A.G,CSSStyleRule:A.G,CSSSupportsRule:A.G,CSSViewportRule:A.G,CSSStyleDeclaration:A.cG,MSStyleCSSProperties:A.cG,CSS2Properties:A.cG,CSSImageValue:A.aP,CSSKeywordValue:A.aP,CSSNumericValue:A.aP,CSSPositionValue:A.aP,CSSResourceValue:A.aP,CSSUnitValue:A.aP,CSSURLImageValue:A.aP,CSSStyleValue:A.aP,CSSMatrixComponent:A.be,CSSRotation:A.be,CSSScale:A.be,CSSSkew:A.be,CSSTranslation:A.be,CSSTransformComponent:A.be,CSSTransformValue:A.iR,CSSUnparsedValue:A.iS,DataTransferItemList:A.iT,HTMLDivElement:A.cH,Document:A.bf,HTMLDocument:A.bf,XMLDocument:A.bf,DOMException:A.bH,ClientRectList:A.dw,DOMRectList:A.dw,DOMRectReadOnly:A.dx,DOMStringList:A.f0,DOMTokenList:A.iU,Element:A.W,AbortPaymentEvent:A.k,AnimationEvent:A.k,AnimationPlaybackEvent:A.k,ApplicationCacheErrorEvent:A.k,BackgroundFetchClickEvent:A.k,BackgroundFetchEvent:A.k,BackgroundFetchFailEvent:A.k,BackgroundFetchedEvent:A.k,BeforeInstallPromptEvent:A.k,BeforeUnloadEvent:A.k,BlobEvent:A.k,CanMakePaymentEvent:A.k,ClipboardEvent:A.k,CloseEvent:A.k,CustomEvent:A.k,DeviceMotionEvent:A.k,DeviceOrientationEvent:A.k,ErrorEvent:A.k,ExtendableEvent:A.k,ExtendableMessageEvent:A.k,FetchEvent:A.k,FontFaceSetLoadEvent:A.k,ForeignFetchEvent:A.k,GamepadEvent:A.k,HashChangeEvent:A.k,InstallEvent:A.k,MediaEncryptedEvent:A.k,MediaKeyMessageEvent:A.k,MediaQueryListEvent:A.k,MediaStreamEvent:A.k,MediaStreamTrackEvent:A.k,MessageEvent:A.k,MIDIConnectionEvent:A.k,MIDIMessageEvent:A.k,MutationEvent:A.k,NotificationEvent:A.k,PageTransitionEvent:A.k,PaymentRequestEvent:A.k,PaymentRequestUpdateEvent:A.k,PopStateEvent:A.k,PresentationConnectionAvailableEvent:A.k,PresentationConnectionCloseEvent:A.k,ProgressEvent:A.k,PromiseRejectionEvent:A.k,PushEvent:A.k,RTCDataChannelEvent:A.k,RTCDTMFToneChangeEvent:A.k,RTCPeerConnectionIceEvent:A.k,RTCTrackEvent:A.k,SecurityPolicyViolationEvent:A.k,SensorErrorEvent:A.k,SpeechRecognitionError:A.k,SpeechRecognitionEvent:A.k,SpeechSynthesisEvent:A.k,StorageEvent:A.k,SyncEvent:A.k,TrackEvent:A.k,TransitionEvent:A.k,WebKitTransitionEvent:A.k,VRDeviceEvent:A.k,VRDisplayEvent:A.k,VRSessionEvent:A.k,MojoInterfaceRequestEvent:A.k,ResourceProgressEvent:A.k,USBConnectionEvent:A.k,IDBVersionChangeEvent:A.k,AudioProcessingEvent:A.k,OfflineAudioCompletionEvent:A.k,WebGLContextEvent:A.k,Event:A.k,InputEvent:A.k,SubmitEvent:A.k,AbsoluteOrientationSensor:A.e,Accelerometer:A.e,AccessibleNode:A.e,AmbientLightSensor:A.e,Animation:A.e,ApplicationCache:A.e,DOMApplicationCache:A.e,OfflineResourceList:A.e,BackgroundFetchRegistration:A.e,BatteryManager:A.e,BroadcastChannel:A.e,CanvasCaptureMediaStreamTrack:A.e,DedicatedWorkerGlobalScope:A.e,EventSource:A.e,FileReader:A.e,FontFaceSet:A.e,Gyroscope:A.e,LinearAccelerationSensor:A.e,Magnetometer:A.e,MediaDevices:A.e,MediaKeySession:A.e,MediaQueryList:A.e,MediaRecorder:A.e,MediaSource:A.e,MediaStream:A.e,MediaStreamTrack:A.e,MessagePort:A.e,MIDIAccess:A.e,MIDIInput:A.e,MIDIOutput:A.e,MIDIPort:A.e,NetworkInformation:A.e,Notification:A.e,OffscreenCanvas:A.e,OrientationSensor:A.e,PaymentRequest:A.e,Performance:A.e,PermissionStatus:A.e,PresentationAvailability:A.e,PresentationConnection:A.e,PresentationConnectionList:A.e,PresentationRequest:A.e,RelativeOrientationSensor:A.e,RemotePlayback:A.e,RTCDataChannel:A.e,DataChannel:A.e,RTCDTMFSender:A.e,RTCPeerConnection:A.e,webkitRTCPeerConnection:A.e,mozRTCPeerConnection:A.e,ScreenOrientation:A.e,Sensor:A.e,ServiceWorker:A.e,ServiceWorkerContainer:A.e,ServiceWorkerGlobalScope:A.e,ServiceWorkerRegistration:A.e,SharedWorker:A.e,SharedWorkerGlobalScope:A.e,SpeechRecognition:A.e,SpeechSynthesis:A.e,SpeechSynthesisUtterance:A.e,VR:A.e,VRDevice:A.e,VRDisplay:A.e,VRSession:A.e,VisualViewport:A.e,WebSocket:A.e,Worker:A.e,WorkerGlobalScope:A.e,WorkerPerformance:A.e,BluetoothDevice:A.e,BluetoothRemoteGATTCharacteristic:A.e,Clipboard:A.e,MojoInterfaceInterceptor:A.e,USB:A.e,IDBDatabase:A.e,IDBOpenDBRequest:A.e,IDBVersionChangeRequest:A.e,IDBRequest:A.e,IDBTransaction:A.e,EventTarget:A.e,File:A.au,FileList:A.f3,FileWriter:A.f4,HTMLFormElement:A.f6,Gamepad:A.av,History:A.je,HTMLCollection:A.c5,HTMLFormControlsCollection:A.c5,HTMLOptionsCollection:A.c5,XMLHttpRequest:A.dD,XMLHttpRequestUpload:A.c6,XMLHttpRequestEventTarget:A.c6,HTMLImageElement:A.cL,HTMLInputElement:A.c7,KeyboardEvent:A.bi,Location:A.jt,HTMLAudioElement:A.ce,HTMLMediaElement:A.ce,MediaList:A.jy,MIDIInputMap:A.fm,MIDIOutputMap:A.fn,MimeType:A.ax,MimeTypeArray:A.fo,MouseEvent:A.ap,DragEvent:A.ap,PointerEvent:A.ap,WheelEvent:A.ap,DocumentFragment:A.u,ShadowRoot:A.u,Attr:A.u,DocumentType:A.u,Node:A.u,NodeList:A.dP,RadioNodeList:A.dP,Plugin:A.ay,PluginArray:A.fG,RTCStatsReport:A.fN,HTMLSelectElement:A.fP,SourceBuffer:A.ar,SourceBufferList:A.fS,SpeechGrammar:A.az,SpeechGrammarList:A.fT,SpeechRecognitionResult:A.aA,Storage:A.fX,CSSStyleSheet:A.ae,StyleSheet:A.ae,TextTrack:A.as,TextTrackCue:A.a8,VTTCue:A.a8,TextTrackCueList:A.h0,TextTrackList:A.h1,TimeRanges:A.kd,Touch:A.aC,TouchList:A.h3,TrackDefaultList:A.ke,CompositionEvent:A.b8,FocusEvent:A.b8,TextEvent:A.b8,TouchEvent:A.b8,UIEvent:A.b8,URL:A.kh,HTMLVideoElement:A.d_,VideoTrackList:A.hb,Window:A.d1,DOMWindow:A.d1,CSSRuleList:A.hk,ClientRect:A.e6,DOMRect:A.e6,GamepadList:A.hx,NamedNodeMap:A.ec,MozNamedAttrMap:A.ec,SpeechRecognitionResultList:A.hS,StyleSheetList:A.i0,SVGLength:A.aH,SVGLengthList:A.fg,SVGNumber:A.aJ,SVGNumberList:A.fA,SVGPointList:A.jO,SVGStringList:A.fZ,SVGAElement:A.n,SVGAnimateElement:A.n,SVGAnimateMotionElement:A.n,SVGAnimateTransformElement:A.n,SVGAnimationElement:A.n,SVGCircleElement:A.n,SVGClipPathElement:A.n,SVGDefsElement:A.n,SVGDescElement:A.n,SVGDiscardElement:A.n,SVGEllipseElement:A.n,SVGFEBlendElement:A.n,SVGFEColorMatrixElement:A.n,SVGFEComponentTransferElement:A.n,SVGFECompositeElement:A.n,SVGFEConvolveMatrixElement:A.n,SVGFEDiffuseLightingElement:A.n,SVGFEDisplacementMapElement:A.n,SVGFEDistantLightElement:A.n,SVGFEFloodElement:A.n,SVGFEFuncAElement:A.n,SVGFEFuncBElement:A.n,SVGFEFuncGElement:A.n,SVGFEFuncRElement:A.n,SVGFEGaussianBlurElement:A.n,SVGFEImageElement:A.n,SVGFEMergeElement:A.n,SVGFEMergeNodeElement:A.n,SVGFEMorphologyElement:A.n,SVGFEOffsetElement:A.n,SVGFEPointLightElement:A.n,SVGFESpecularLightingElement:A.n,SVGFESpotLightElement:A.n,SVGFETileElement:A.n,SVGFETurbulenceElement:A.n,SVGFilterElement:A.n,SVGForeignObjectElement:A.n,SVGGElement:A.n,SVGGeometryElement:A.n,SVGGraphicsElement:A.n,SVGImageElement:A.n,SVGLineElement:A.n,SVGLinearGradientElement:A.n,SVGMarkerElement:A.n,SVGMaskElement:A.n,SVGMetadataElement:A.n,SVGPathElement:A.n,SVGPatternElement:A.n,SVGPolygonElement:A.n,SVGPolylineElement:A.n,SVGRadialGradientElement:A.n,SVGRectElement:A.n,SVGScriptElement:A.n,SVGSetElement:A.n,SVGStopElement:A.n,SVGStyleElement:A.n,SVGElement:A.n,SVGSVGElement:A.n,SVGSwitchElement:A.n,SVGSymbolElement:A.n,SVGTSpanElement:A.n,SVGTextContentElement:A.n,SVGTextElement:A.n,SVGTextPathElement:A.n,SVGTextPositioningElement:A.n,SVGTitleElement:A.n,SVGUseElement:A.n,SVGViewElement:A.n,SVGGradientElement:A.n,SVGComponentTransferFunctionElement:A.n,SVGFEDropShadowElement:A.n,SVGMPathElement:A.n,SVGTransform:A.aL,SVGTransformList:A.h4,AudioBuffer:A.aZ,AudioBufferSourceNode:A.dq,AudioContext:A.bX,webkitAudioContext:A.bX,AnalyserNode:A.F,RealtimeAnalyserNode:A.F,AudioDestinationNode:A.F,AudioWorkletNode:A.F,BiquadFilterNode:A.F,ChannelMergerNode:A.F,AudioChannelMerger:A.F,ChannelSplitterNode:A.F,AudioChannelSplitter:A.F,ConvolverNode:A.F,DelayNode:A.F,DynamicsCompressorNode:A.F,IIRFilterNode:A.F,MediaElementAudioSourceNode:A.F,MediaStreamAudioDestinationNode:A.F,MediaStreamAudioSourceNode:A.F,PannerNode:A.F,AudioPannerNode:A.F,webkitAudioPannerNode:A.F,ScriptProcessorNode:A.F,JavaScriptAudioNode:A.F,StereoPannerNode:A.F,WaveShaperNode:A.F,AudioNode:A.F,AudioParam:A.eK,AudioParamMap:A.eL,ConstantSourceNode:A.bc,OscillatorNode:A.bc,Oscillator:A.bc,AudioScheduledSourceNode:A.bc,AudioTrackList:A.eM,BaseAudioContext:A.dr,GainNode:A.cK,AudioGainNode:A.cK,OfflineAudioContext:A.fB,WebGLBuffer:A.eQ,WebGLFramebuffer:A.f7,WebGLProgram:A.fH,WebGL2RenderingContext:A.cV,WebGLTexture:A.bo,WebGLUniformLocation:A.h5,WebGLVertexArrayObject:A.ha,SQLResultSetRowList:A.fU})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,AudioParam:true,AudioParamMap:true,ConstantSourceNode:true,OscillatorNode:true,Oscillator:true,AudioScheduledSourceNode:false,AudioTrackList:true,BaseAudioContext:false,GainNode:true,AudioGainNode:true,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,SQLResultSetRowList:true})
A.cR.$nativeSuperclassTag="ArrayBufferView"
A.ed.$nativeSuperclassTag="ArrayBufferView"
A.ee.$nativeSuperclassTag="ArrayBufferView"
A.cf.$nativeSuperclassTag="ArrayBufferView"
A.ef.$nativeSuperclassTag="ArrayBufferView"
A.eg.$nativeSuperclassTag="ArrayBufferView"
A.dN.$nativeSuperclassTag="ArrayBufferView"
A.ei.$nativeSuperclassTag="EventTarget"
A.ej.$nativeSuperclassTag="EventTarget"
A.en.$nativeSuperclassTag="EventTarget"
A.eo.$nativeSuperclassTag="EventTarget"})()
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

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
a[c]=function(){a[c]=function(){A.nv(b)}
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
if(a[b]!==s)A.nw(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=b.fs[0]
if(a)return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"(receiver) {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(receiver, this);"+"}")(b,A.jU,null)
else return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"() {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(this, null);"+"}")(b,A.jU,null)}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.jU(a).prototype
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
a(hunkHelpers,v,w,$)}var A={jx:function jx(){},
kh(a){return new A.cE("Field '"+a+"' has been assigned during initialization.")},
b7(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
jG(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
m4(a,b,c){return A.jG(A.b7(A.b7(c,a),b))},
j8(a,b,c){return a},
kt(a,b,c,d){A.i7(b,"start")
if(c!=null){A.i7(c,"end")
if(b>c)A.V(A.cQ(b,0,c,"start",null))}return new A.cV(a,b,c,d.i("cV<0>"))},
kj(a,b,c,d){if(t.gw.b(a))return new A.cv(a,b,c.i("@<0>").v(d).i("cv<1,2>"))
return new A.by(a,b,c.i("@<0>").v(d).i("by<1,2>"))},
lL(){return new A.aT("No element")},
lN(){return new A.aT("Too many elements")},
lM(){return new A.aT("Too few elements")},
m0(a,b,c){A.et(a,0,J.a1(a)-1,b,c)},
et(a,b,c,d,e){if(c-b<=32)A.m_(a,b,c,d,e)
else A.lZ(a,b,c,d,e)},
m_(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.ak(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.H()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
lZ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.f.M(a5-a4+1,6),i=a4+j,h=a5-j,g=B.f.M(a4+a5,2),f=g-j,e=g+j,d=J.ak(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a1
a1=a0
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.Q(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
A.et(a3,a4,r-2,a6,a7)
A.et(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.Q(a6.$2(d.h(a3,r),b),0);)++r
for(;J.Q(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}A.et(a3,r,q,a6,a7)}else A.et(a3,r,q,a6,a7)},
cE:function cE(a){this.a=a},
id:function id(){},
m:function m(){},
at:function at(){},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aR:function aR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
by:function by(a,b,c){this.a=a
this.b=b
this.$ti=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
ax:function ax(a,b,c){this.a=a
this.b=b
this.$ti=c},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
a4:function a4(){},
l5(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
nl(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
z(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bL(a)
return s},
bV(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
i5(a){return A.lV(a)},
lV(a){var s,r,q,p
if(a instanceof A.y)return A.a_(A.az(a),null)
if(J.cc(a)===B.bc||t.bI.b(a)){s=B.af(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.a_(A.az(a),null)},
cd(a){throw A.e(A.kT(a))},
b(a,b){if(a==null)J.a1(a)
throw A.e(A.cb(a,b))},
cb(a,b){var s,r="index"
if(!A.jR(b))return new A.aJ(!0,b,r,null)
s=A.c5(J.a1(a))
if(b<0||b>=s)return A.H(b,a,r,null,s)
return A.kl(b,r)},
kT(a){return new A.aJ(!0,a,null,null)},
e(a){var s,r
if(a==null)a=new A.ei()
s=new Error()
s.dartException=a
r=A.nx
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
nx(){return J.bL(this.dartException)},
V(a){throw A.e(a)},
E(a){throw A.e(A.cp(a))},
aX(a){var s,r,q,p,o,n
a=A.ns(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.is(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
it(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ku(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jy(a,b){var s=b==null,r=s?null:b.method
return new A.e4(a,r,s?null:b.receiver)},
bi(a){if(a==null)return new A.i2(a)
if(a instanceof A.cw)return A.bh(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.bh(a,a.dartException)
return A.n1(a)},
bh(a,b){if(t.U.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
n1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.f.cz(r,16)&8191)===10)switch(q){case 438:return A.bh(a,A.jy(A.z(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.z(s)+" (Error "+q+")"
return A.bh(a,new A.cO(p,e))}}if(a instanceof TypeError){o=$.l8()
n=$.l9()
m=$.la()
l=$.lb()
k=$.le()
j=$.lf()
i=$.ld()
$.lc()
h=$.lh()
g=$.lg()
f=o.K(s)
if(f!=null)return A.bh(a,A.jy(A.a8(s),f))
else{f=n.K(s)
if(f!=null){f.method="call"
return A.bh(a,A.jy(A.a8(s),f))}else{f=m.K(s)
if(f==null){f=l.K(s)
if(f==null){f=k.K(s)
if(f==null){f=j.K(s)
if(f==null){f=i.K(s)
if(f==null){f=l.K(s)
if(f==null){f=h.K(s)
if(f==null){f=g.K(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.a8(s)
return A.bh(a,new A.cO(s,f==null?e:f.method))}}}return A.bh(a,new A.eK(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cU()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.bh(a,new A.aJ(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cU()
return a},
bg(a){var s
if(a instanceof A.cw)return a.b
if(a==null)return new A.de(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.de(a)},
l_(a){if(a==null||typeof a!="object")return J.ce(a)
else return A.bV(a)},
nc(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
nj(a,b,c,d,e,f){t.k.a(a)
switch(A.c5(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(A.ju("Unsupported number of arguments for wrapped closure"))},
dx(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.nj)
a.$identity=s
return s},
lE(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ey().constructor.prototype):Object.create(new A.bN(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else{q=$.aK
if(typeof q!=="number")return q.u()
$.aK=q+1
q=new Function("a,b"+q,"this.$initialize(a,b"+q+")")
r=q}s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.ka(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.lA(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.ka(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
lA(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ly)}throw A.e("Error in functionType of tearoff")},
lB(a,b,c,d){var s=A.k9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ka(a,b,c,d){var s,r,q,p,o,n="receiver"
if(c)return A.lD(a,b,d)
s=b.length
r=d||s>=27
if(r)return A.lB(s,d,a,b)
if(s===0){r=$.aK
if(typeof r!=="number")return r.u()
$.aK=r+1
q="self"+r
r="return function(){var "+q+" = this."
p=$.co
return new Function(r+(p==null?$.co=A.hb(n):p)+";return "+q+"."+a+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
r=$.aK
if(typeof r!=="number")return r.u()
$.aK=r+1
o+=r
r="return function("+o+"){return this."
p=$.co
return new Function(r+(p==null?$.co=A.hb(n):p)+"."+a+"("+o+");}")()},
lC(a,b,c,d){var s=A.k9,r=A.lz
switch(b?-1:a){case 0:throw A.e(new A.eq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
lD(a,b,c){var s,r,q,p,o,n=$.k8
if(n==null)n=$.k8=A.hb("interceptor")
s=$.co
if(s==null)s=$.co=A.hb("receiver")
r=b.length
q=c||r>=28
if(q)return A.lC(r,c,a,b)
if(r===1){q="return function(){return this."+n+"."+a+"(this."+s+");"
p=$.aK
if(typeof p!=="number")return p.u()
$.aK=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
q="return function("+o+"){return this."+n+"."+a+"(this."+s+", "+o+");"
p=$.aK
if(typeof p!=="number")return p.u()
$.aK=p+1
return new Function(q+p+"}")()},
jU(a){return A.lE(a)},
ly(a,b){return A.j0(v.typeUniverse,A.az(a.a),b)},
k9(a){return a.a},
lz(a){return a.b},
hb(a){var s,r,q,p=new A.bN("receiver","interceptor"),o=J.kg(Object.getOwnPropertyNames(p),t.Q)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.e(A.ck("Field name "+a+" not found.",null))},
b_(a){if(a==null)A.n2("boolean expression must not be null")
return a},
n2(a){throw A.e(new A.eP(a))},
nv(a){throw A.e(new A.dP(a))},
nd(a){return v.getIsolateTag(a)},
ol(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
no(a){var s,r,q,p,o,n=A.a8($.kX.$1(a)),m=$.j9[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.je[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.mu($.kS.$2(a,n))
if(q!=null){m=$.j9[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.je[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jg(s)
$.j9[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.je[n]=s
return s}if(p==="-"){o=A.jg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.l0(a,s)
if(p==="*")throw A.e(A.kv(n))
if(v.leafTags[n]===true){o=A.jg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.l0(a,s)},
l0(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jW(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jg(a){return J.jW(a,!1,null,!!a.$iv)},
nq(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jg(s)
else return J.jW(s,c,null,null)},
ng(){if(!0===$.jV)return
$.jV=!0
A.nh()},
nh(){var s,r,q,p,o,n,m,l
$.j9=Object.create(null)
$.je=Object.create(null)
A.nf()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.l2.$1(o)
if(n!=null){m=A.nq(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nf(){var s,r,q,p,o,n,m=B.b2()
m=A.ca(B.b3,A.ca(B.b4,A.ca(B.ag,A.ca(B.ag,A.ca(B.b5,A.ca(B.b6,A.ca(B.b7(B.af),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kX=new A.jb(p)
$.kS=new A.jc(o)
$.l2=new A.jd(n)},
ca(a,b){return a(b)||b},
ns(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cq:function cq(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
is:function is(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cO:function cO(a,b){this.a=a
this.b=b},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
eK:function eK(a){this.a=a},
i2:function i2(a){this.a=a},
cw:function cw(a,b){this.a=a
this.b=b},
de:function de(a){this.a=a
this.b=null},
bm:function bm(){},
dL:function dL(){},
dM:function dM(){},
eC:function eC(){},
ey:function ey(){},
bN:function bN(a,b){this.a=a
this.b=b},
eq:function eq(a){this.a=a},
eP:function eP(a){this.a=a},
bu:function bu(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hN:function hN(a){this.a=a},
hO:function hO(a,b){this.a=a
this.b=b
this.c=null},
cF:function cF(a,b){this.a=a
this.$ti=b},
cG:function cG(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
kI(a,b,c){},
c6(a){return a},
jC(a,b,c){A.kI(a,b,c)
return new Float32Array(a,b,c)},
kk(a,b,c){var s
A.kI(a,b,c)
s=new Uint8Array(a,b,c)
return s},
aZ(a,b,c){if(a>>>0!==a||a>=c)throw A.e(A.cb(b,a))},
bB:function bB(){},
bU:function bU(){},
bA:function bA(){},
cL:function cL(){},
cK:function cK(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
cM:function cM(){},
eh:function eh(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
kn(a,b){var s=b.c
return s==null?b.c=A.jM(a,b.z,!0):s},
km(a,b){var s=b.c
return s==null?b.c=A.dk(a,"aE",[b.z]):s},
ko(a){var s=a.y
if(s===6||s===7||s===8)return A.ko(a.z)
return s===11||s===12},
lY(a){return a.cy},
b1(a){return A.fM(v.typeUniverse,a,!1)},
bf(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.bf(a,s,a0,a1)
if(r===s)return b
return A.kF(a,r,!0)
case 7:s=b.z
r=A.bf(a,s,a0,a1)
if(r===s)return b
return A.jM(a,r,!0)
case 8:s=b.z
r=A.bf(a,s,a0,a1)
if(r===s)return b
return A.kE(a,r,!0)
case 9:q=b.Q
p=A.dv(a,q,a0,a1)
if(p===q)return b
return A.dk(a,b.z,p)
case 10:o=b.z
n=A.bf(a,o,a0,a1)
m=b.Q
l=A.dv(a,m,a0,a1)
if(n===o&&l===m)return b
return A.jK(a,n,l)
case 11:k=b.z
j=A.bf(a,k,a0,a1)
i=b.Q
h=A.mZ(a,i,a0,a1)
if(j===k&&h===i)return b
return A.kD(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.dv(a,g,a0,a1)
o=b.z
n=A.bf(a,o,a0,a1)
if(f===g&&n===o)return b
return A.jL(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.e(A.h5("Attempted to substitute unexpected RTI kind "+c))}},
dv(a,b,c,d){var s,r,q,p,o=b.length,n=A.j1(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bf(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
n_(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.j1(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bf(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
mZ(a,b,c,d){var s,r=b.a,q=A.dv(a,r,c,d),p=b.b,o=A.dv(a,p,c,d),n=b.c,m=A.n_(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.f6()
s.a=q
s.b=o
s.c=m
return s},
d(a,b){a[v.arrayRti]=b
return a},
na(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.ne(s)
return a.$S()}return null},
kY(a,b){var s
if(A.ko(b))if(a instanceof A.bm){s=A.na(a)
if(s!=null)return s}return A.az(a)},
az(a){var s
if(a instanceof A.y){s=a.$ti
return s!=null?s:A.jO(a)}if(Array.isArray(a))return A.aq(a)
return A.jO(J.cc(a))},
aq(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
A(a){var s=a.$ti
return s!=null?s:A.jO(a)},
jO(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.mH(a,s)},
mH(a,b){var s=a instanceof A.bm?a.__proto__.__proto__.constructor:b,r=A.mr(v.typeUniverse,s.name)
b.$ccache=r
return r},
ne(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fM(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
nb(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.fJ(a)
q=A.fM(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.fJ(q):p},
ny(a){return A.nb(A.fM(v.typeUniverse,a,!1))},
mG(a){var s,r,q,p,o=this
if(o===t.K)return A.c7(o,a,A.mL)
if(!A.b2(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.c7(o,a,A.mO)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.jR
else if(r===t.i||r===t.di)q=A.mK
else if(r===t.N)q=A.mM
else q=r===t.cJ?A.jP:null
if(q!=null)return A.c7(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.nm)){o.r="$i"+p
if(p==="n")return A.c7(o,a,A.mJ)
return A.c7(o,a,A.mN)}}else if(s===7)return A.c7(o,a,A.mE)
return A.c7(o,a,A.mC)},
c7(a,b,c){a.b=c
return a.b(b)},
mF(a){var s,r=this,q=A.mB
if(!A.b2(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.mv
else if(r===t.K)q=A.mt
else{s=A.dy(r)
if(s)q=A.mD}r.a=q
return r.a(a)},
j4(a){var s,r=a.y
if(!A.b2(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&A.j4(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mC(a){var s=this
if(a==null)return A.j4(s)
return A.I(v.typeUniverse,A.kY(a,s),null,s,null)},
mE(a){if(a==null)return!0
return this.z.b(a)},
mN(a){var s,r=this
if(a==null)return A.j4(r)
s=r.r
if(a instanceof A.y)return!!a[s]
return!!J.cc(a)[s]},
mJ(a){var s,r=this
if(a==null)return A.j4(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.y)return!!a[s]
return!!J.cc(a)[s]},
mB(a){var s,r=this
if(a==null){s=A.dy(r)
if(s)return a}else if(r.b(a))return a
A.kL(a,r)},
mD(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.kL(a,s)},
kL(a,b){throw A.e(A.kC(A.kx(a,A.kY(a,b),A.a_(b,null))))},
n9(a,b,c,d){var s=null
if(A.I(v.typeUniverse,a,s,b,s))return a
throw A.e(A.kC("The type argument '"+A.a_(a,s)+"' is not a subtype of the type variable bound '"+A.a_(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
kx(a,b,c){var s=A.dS(a),r=A.a_(b==null?A.az(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
kC(a){return new A.dj("TypeError: "+a)},
Z(a,b){return new A.dj("TypeError: "+A.kx(a,null,b))},
mL(a){return a!=null},
mt(a){if(a!=null)return a
throw A.e(A.Z(a,"Object"))},
mO(a){return!0},
mv(a){return a},
jP(a){return!0===a||!1===a},
o8(a){if(!0===a)return!0
if(!1===a)return!1
throw A.e(A.Z(a,"bool"))},
oa(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.Z(a,"bool"))},
o9(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.Z(a,"bool?"))},
jN(a){if(typeof a=="number")return a
throw A.e(A.Z(a,"double"))},
oc(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.Z(a,"double"))},
ob(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.Z(a,"double?"))},
jR(a){return typeof a=="number"&&Math.floor(a)===a},
c5(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.e(A.Z(a,"int"))},
oe(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.Z(a,"int"))},
od(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.Z(a,"int?"))},
mK(a){return typeof a=="number"},
ay(a){if(typeof a=="number")return a
throw A.e(A.Z(a,"num"))},
og(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.Z(a,"num"))},
of(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.Z(a,"num?"))},
mM(a){return typeof a=="string"},
a8(a){if(typeof a=="string")return a
throw A.e(A.Z(a,"String"))},
oh(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.Z(a,"String"))},
mu(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.Z(a,"String?"))},
mV(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.a_(a[q],b)
return s},
kM(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.d([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.m(a5,"T"+(q+p))
for(o=t.Q,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.b(a5,j)
m=B.z.u(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.a_(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.a_(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.a_(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.a_(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.a_(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a_(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.a_(a.z,b)
return s}if(l===7){r=a.z
s=A.a_(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.a_(a.z,b)+">"
if(l===9){p=A.n0(a.z)
o=a.Q
return o.length>0?p+("<"+A.mV(o,b)+">"):p}if(l===11)return A.kM(a,b,null)
if(l===12)return A.kM(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
n0(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
ms(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mr(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fM(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dl(a,5,"#")
q=A.j1(s)
for(p=0;p<s;++p)q[p]=r
o=A.dk(a,b,q)
n[b]=o
return o}else return m},
mp(a,b){return A.kG(a.tR,b)},
mo(a,b){return A.kG(a.eT,b)},
fM(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.kA(A.ky(a,null,b,c))
r.set(b,s)
return s},
j0(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.kA(A.ky(a,b,c,!0))
q.set(c,r)
return r},
mq(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.jK(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
be(a,b){b.a=A.mF
b.b=A.mG
return b},
dl(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.au(null,null)
s.y=b
s.cy=c
r=A.be(a,s)
a.eC.set(c,r)
return r},
kF(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.mm(a,b,r,c)
a.eC.set(r,s)
return s},
mm(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.b2(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.au(null,null)
q.y=6
q.z=b
q.cy=c
return A.be(a,q)},
jM(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.ml(a,b,r,c)
a.eC.set(r,s)
return s},
ml(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.b2(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.dy(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.dy(q.z))return q
else return A.kn(a,b)}}p=new A.au(null,null)
p.y=7
p.z=b
p.cy=c
return A.be(a,p)},
kE(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.mj(a,b,r,c)
a.eC.set(r,s)
return s},
mj(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.b2(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.dk(a,"aE",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.au(null,null)
q.y=8
q.z=b
q.cy=c
return A.be(a,q)},
mn(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.au(null,null)
s.y=13
s.z=b
s.cy=q
r=A.be(a,s)
a.eC.set(q,r)
return r},
fL(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mi(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dk(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fL(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.au(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.be(a,r)
a.eC.set(p,q)
return q},
jK(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.fL(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.au(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.be(a,o)
a.eC.set(q,n)
return n},
kD(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fL(m)
if(j>0){s=l>0?",":""
r=A.fL(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.mi(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.au(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.be(a,o)
a.eC.set(q,r)
return r},
jL(a,b,c,d){var s,r=b.cy+("<"+A.fL(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.mk(a,b,c,r,d)
a.eC.set(r,s)
return s},
mk(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.j1(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.bf(a,b,r,0)
m=A.dv(a,c,r,0)
return A.jL(a,n,m,c!==m)}}l=new A.au(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.be(a,l)},
ky(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kA(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.md(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.kz(a,r,h,g,!1)
else if(q===46)r=A.kz(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.bc(a.u,a.e,g.pop()))
break
case 94:g.push(A.mn(a.u,g.pop()))
break
case 35:g.push(A.dl(a.u,5,"#"))
break
case 64:g.push(A.dl(a.u,2,"@"))
break
case 126:g.push(A.dl(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.jJ(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.dk(p,n,o))
else{m=A.bc(p,a.e,n)
switch(m.y){case 11:g.push(A.jL(p,m,o,a.n))
break
default:g.push(A.jK(p,m,o))
break}}break
case 38:A.me(a,g)
break
case 42:p=a.u
g.push(A.kF(p,A.bc(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.jM(p,A.bc(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.kE(p,A.bc(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.f6()
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
A.jJ(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.kD(p,A.bc(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.jJ(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.mg(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.bc(a.u,a.e,i)},
md(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kz(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.ms(s,o.z)[p]
if(n==null)A.V('No "'+p+'" in "'+A.lY(o)+'"')
d.push(A.j0(s,o,n))}else d.push(p)
return m},
me(a,b){var s=b.pop()
if(0===s){b.push(A.dl(a.u,1,"0&"))
return}if(1===s){b.push(A.dl(a.u,4,"1&"))
return}throw A.e(A.h5("Unexpected extended operation "+A.z(s)))},
bc(a,b,c){if(typeof c=="string")return A.dk(a,c,a.sEA)
else if(typeof c=="number")return A.mf(a,b,c)
else return c},
jJ(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bc(a,b,c[s])},
mg(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bc(a,b,c[s])},
mf(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.e(A.h5("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.e(A.h5("Bad index "+c+" for "+b.k(0)))},
I(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.b2(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.b2(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.I(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return A.I(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.I(a,b.z,c,d,e)
if(r===6)return A.I(a,b.z,c,d,e)
return r!==7}if(r===6)return A.I(a,b.z,c,d,e)
if(p===6){s=A.kn(a,d)
return A.I(a,b,c,s,e)}if(r===8){if(!A.I(a,b.z,c,d,e))return!1
return A.I(a,A.km(a,b),c,d,e)}if(r===7){s=A.I(a,t.P,c,d,e)
return s&&A.I(a,b.z,c,d,e)}if(p===8){if(A.I(a,b,c,d.z,e))return!0
return A.I(a,b,c,A.km(a,d),e)}if(p===7){s=A.I(a,b,c,t.P,e)
return s||A.I(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.k)return!0
if(p===12){if(b===t.g)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.I(a,k,c,j,e)||!A.I(a,j,e,k,c))return!1}return A.kN(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return A.kN(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.mI(a,b,c,d,e)}return!1},
kN(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.I(a3,a4.z,a5,a6.z,a7))return!1
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
if(!A.I(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.I(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.I(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.I(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
mI(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.j0(a,b,r[o])
return A.kH(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.kH(a,n,null,c,m,e)},
kH(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.I(a,r,d,q,f))return!1}return!0},
dy(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.b2(a))if(r!==7)if(!(r===6&&A.dy(a.z)))s=r===8&&A.dy(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nm(a){var s
if(!A.b2(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b2(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.Q},
kG(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
j1(a){return a>0?new Array(a):v.typeUniverse.sEA},
au:function au(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
f6:function f6(){this.c=this.b=this.a=null},
fJ:function fJ(a){this.a=a},
f3:function f3(){},
dj:function dj(a){this.a=a},
m7(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.n3()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.dx(new A.iC(q),1)).observe(s,{childList:true})
return new A.iB(q,s,r)}else if(self.setImmediate!=null)return A.n4()
return A.n5()},
m8(a){self.scheduleImmediate(A.dx(new A.iD(t.M.a(a)),0))},
m9(a){self.setImmediate(A.dx(new A.iE(t.M.a(a)),0))},
ma(a){t.M.a(a)
A.mh(0,a)},
mh(a,b){var s=new A.iZ()
s.c2(a,b)
return s},
du(a){return new A.eQ(new A.J($.F,a.i("J<0>")),a.i("eQ<0>"))},
dr(a,b){a.$2(0,null)
b.b=!0
return b.a},
aY(a,b){A.mw(a,b)},
dq(a,b){b.ah(0,a)},
dp(a,b){b.bs(A.bi(a),A.bg(a))},
mw(a,b){var s,r,q=new A.j2(b),p=new A.j3(b)
if(a instanceof A.J)a.bj(q,p,t.z)
else{s=t.z
if(t.d.b(a))a.aR(q,p,s)
else{r=new A.J($.F,t.c)
r.a=8
r.c=a
r.bj(q,p,s)}}},
dw(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.F.aP(new A.j6(s),t.H,t.S,t.z)},
h6(a,b){var s=A.j8(a,"error",t.K)
return new A.cn(s,b==null?A.lx(a):b)},
lx(a){var s
if(t.U.b(a)){s=a.ga9()
if(s!=null)return s}return B.ba},
jH(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.ac()
b.ap(a)
A.c4(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.bg(q)}},
c4(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.d;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.fY(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.c4(c.a,b)
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
A.fY(i.a,i.b)
return}f=$.F
if(f!==g)$.F=g
else f=null
b=b.c
if((b&15)===8)new A.iS(p,c,m).$0()
else if(n){if((b&1)!==0)new A.iR(p,i).$0()}else if((b&2)!==0)new A.iQ(c,p).$0()
if(f!=null)$.F=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("aE<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.ad(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.jH(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.ad(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
mT(a,b){var s
if(t.C.b(a))return b.aP(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.e(A.k7(a,"onError",u.c))},
mQ(){var s,r
for(s=$.c8;s!=null;s=$.c8){$.dt=null
r=s.b
$.c8=r
if(r==null)$.ds=null
s.a.$0()}},
mY(){$.jQ=!0
try{A.mQ()}finally{$.dt=null
$.jQ=!1
if($.c8!=null)$.jY().$1(A.kU())}},
kQ(a){var s=new A.eR(a),r=$.ds
if(r==null){$.c8=$.ds=s
if(!$.jQ)$.jY().$1(A.kU())}else $.ds=r.b=s},
mW(a){var s,r,q,p=$.c8
if(p==null){A.kQ(a)
$.dt=$.ds
return}s=new A.eR(a)
r=$.dt
if(r==null){s.b=p
$.c8=$.dt=s}else{q=r.b
s.b=q
$.dt=r.b=s
if(q==null)$.ds=s}},
l3(a){var s=null,r=$.F
if(B.n===r){A.c9(s,s,B.n,a)
return}A.c9(s,s,r,t.M.a(r.bp(a)))},
nV(a,b){A.j8(a,"stream",t.K)
return new A.fx(b.i("fx<0>"))},
kr(a){return new A.c2(null,null,null,a.i("c2<0>"))},
jT(a){return},
mb(a,b){if(b==null)b=A.n7()
if(t.da.b(b))return a.aP(b,t.z,t.K,t.l)
if(t.d5.b(b))return t.y.a(b)
throw A.e(A.ck("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
mS(a,b){A.fY(a,b)},
mR(){},
fY(a,b){A.mW(new A.j5(a,b))},
kO(a,b,c,d,e){var s,r=$.F
if(r===c)return d.$0()
$.F=c
s=r
try{r=d.$0()
return r}finally{$.F=s}},
kP(a,b,c,d,e,f,g){var s,r=$.F
if(r===c)return d.$1(e)
$.F=c
s=r
try{r=d.$1(e)
return r}finally{$.F=s}},
mU(a,b,c,d,e,f,g,h,i){var s,r=$.F
if(r===c)return d.$2(e,f)
$.F=c
s=r
try{r=d.$2(e,f)
return r}finally{$.F=s}},
c9(a,b,c,d){t.M.a(d)
if(B.n!==c)d=c.bp(d)
A.kQ(d)},
iC:function iC(a){this.a=a},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iZ:function iZ(){},
j_:function j_(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=!1
this.$ti=b},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
j6:function j6(a){this.a=a},
cn:function cn(a,b){this.a=a
this.b=b},
eV:function eV(){},
bF:function bF(a,b){this.a=a
this.$ti=b},
bJ:function bJ(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
J:function J(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iI:function iI(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
iR:function iR(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b){this.a=a
this.b=b},
eR:function eR(a){this.a=a
this.b=null},
bC:function bC(){},
ij:function ij(a,b){this.a=a
this.b=b},
ik:function ik(a,b){this.a=a
this.b=b},
aV:function aV(){},
df:function df(){},
iY:function iY(a){this.a=a},
eS:function eS(){},
c2:function c2(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
ba:function ba(a,b){this.a=a
this.$ti=b},
c3:function c3(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
d0:function d0(){},
dg:function dg(){},
eZ:function eZ(){},
bG:function bG(a,b){this.b=a
this.a=null
this.$ti=b},
bd:function bd(){},
iV:function iV(a,b){this.a=a
this.b=b},
aH:function aH(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
fx:function fx(a){this.$ti=a},
dm:function dm(){},
j5:function j5(a,b){this.a=a
this.b=b},
fo:function fo(){},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
bw(a,b,c){return b.i("@<0>").v(c).i("ki<1,2>").a(A.nc(a,new A.bu(b.i("@<0>").v(c).i("bu<1,2>"))))},
bv(a,b){return new A.bu(a.i("@<0>").v(b).i("bu<1,2>"))},
jz(a){return new A.d4(a.i("d4<0>"))},
jI(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
kf(a,b,c){var s,r
if(A.jS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.d([],t.s)
B.a.m($.aj,a)
try{A.mP(a,s)}finally{if(0>=$.aj.length)return A.b($.aj,-1)
$.aj.pop()}r=A.ks(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jw(a,b,c){var s,r
if(A.jS(a))return b+"..."+c
s=new A.eA(b)
B.a.m($.aj,a)
try{r=s
r.a=A.ks(r.a,a,", ")}finally{if(0>=$.aj.length)return A.b($.aj,-1)
$.aj.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jS(a){var s,r
for(s=$.aj.length,r=0;r<s;++r)if(a===$.aj[r])return!0
return!1},
mP(a,b){var s,r,q,p,o,n,m,l=a.gw(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.z(l.gp(l))
B.a.m(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gp(l);++j
if(!l.n()){if(j<=4){B.a.m(b,A.z(p))
return}r=A.z(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp(l);++j
for(;l.n();p=o,o=n){n=l.gp(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.m(b,"...")
return}}q=A.z(p)
r=A.z(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.m(b,m)
B.a.m(b,q)
B.a.m(b,r)},
jB(a){var s,r={}
if(A.jS(a))return"{...}"
s=new A.eA("")
try{B.a.m($.aj,a)
s.a+="{"
r.a=!0
J.lt(a,new A.hR(r,s))
s.a+="}"}finally{if(0>=$.aj.length)return A.b($.aj,-1)
$.aj.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d4:function d4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fd:function fd(a){this.a=a
this.b=null},
d5:function d5(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
f:function f(){},
cH:function cH(){},
hR:function hR(a,b){this.a=a
this.b=b},
w:function w(){},
hU:function hU(a){this.a=a},
cT:function cT(){},
db:function db(){},
dn:function dn(){},
lJ(a){if(a instanceof A.bm)return a.k(0)
return"Instance of '"+A.i5(a)+"'"},
aS(a,b,c,d){var s,r=J.lO(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
lT(a,b,c){var s=A.lS(a,c)
return s},
lS(a,b){var s,r
if(Array.isArray(a))return A.d(a.slice(0),b.i("u<0>"))
s=A.d([],b.i("u<0>"))
for(r=J.aI(a);r.n();)B.a.m(s,r.gp(r))
return s},
jA(a,b,c){var s,r=J.lP(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
ks(a,b,c){var s=J.aI(b)
if(!s.n())return a
if(c.length===0){do a+=A.z(s.gp(s))
while(s.n())}else{a+=A.z(s.gp(s))
for(;s.n();)a=a+c+A.z(s.gp(s))}return a},
kb(a,b){return new A.aN(1000*a+1e6*b)},
dS(a){if(typeof a=="number"||A.jP(a)||a==null)return J.bL(a)
if(typeof a=="string")return JSON.stringify(a)
return A.lJ(a)},
h5(a){return new A.cm(a)},
ck(a,b){return new A.aJ(!1,null,b,a)},
k7(a,b,c){return new A.aJ(!0,a,b,c)},
lX(a){var s=null
return new A.bW(s,s,!1,s,s,a)},
kl(a,b){return new A.bW(null,null,!0,a,b,"Value not in range")},
cQ(a,b,c,d,e){return new A.bW(b,c,!0,a,d,"Invalid value")},
jF(a,b,c){if(0>a||a>c)throw A.e(A.cQ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.cQ(b,a,c,"end",null))
return b}return c},
i7(a,b){if(a<0)throw A.e(A.cQ(a,0,null,b,null))
return a},
H(a,b,c,d,e){var s=A.c5(e==null?J.a1(b):e)
return new A.e1(s,!0,a,c,"Index out of range")},
x(a){return new A.eL(a)},
kv(a){return new A.eJ(a)},
aU(a){return new A.aT(a)},
cp(a){return new A.dN(a)},
ju(a){return new A.iH(a)},
jD(a,b,c,d){var s,r
if(B.D===c)return A.m4(B.d.gt(a),B.d.gt(b),$.jq())
if(B.D===d){s=B.d.gt(a)
b=B.d.gt(b)
c=J.ce(c)
return A.jG(A.b7(A.b7(A.b7($.jq(),s),b),c))}s=B.d.gt(a)
b=B.d.gt(b)
c=J.ce(c)
d=J.ce(d)
r=$.jq()
return A.jG(A.b7(A.b7(A.b7(A.b7(r,s),b),c),d))},
jX(a){A.l1(A.z(a))},
aN:function aN(a){this.a=a},
iF:function iF(){},
C:function C(){},
cm:function cm(a){this.a=a},
b9:function b9(){},
ei:function ei(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bW:function bW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e1:function e1(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eL:function eL(a){this.a=a},
eJ:function eJ(a){this.a=a},
aT:function aT(a){this.a=a},
dN:function dN(a){this.a=a},
el:function el(){},
cU:function cU(){},
dP:function dP(a){this.a=a},
iH:function iH(a){this.a=a},
h:function h(){},
W:function W(){},
bT:function bT(a,b,c){this.a=a
this.b=b
this.$ti=c},
M:function M(){},
y:function y(){},
fA:function fA(){},
eA:function eA(a){this.a=a},
kV(){return document},
kc(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{J.lw(q,a)}catch(s){}return q},
bI(a,b,c,d,e){var s=A.kR(new A.iG(c),t.h)
if(s!=null&&!0)J.ls(a,b,s,!1)
return new A.d3(a,b,s,!1,e.i("d3<0>"))},
mx(a){var s
if("postMessage" in a){s=A.mc(a)
return s}else return t.ch.a(a)},
mc(a){if(a===window)return t.ci.a(a)
else return new A.eY()},
kR(a,b){var s=$.F
if(s===B.n)return a
return s.cQ(a,b)},
p:function p(){},
h0:function h0(){},
dC:function dC(){},
dD:function dD(){},
dG:function dG(){},
dH:function dH(){},
bk:function bk(){},
aA:function aA(){},
hh:function hh(){},
B:function B(){},
cs:function cs(){},
hi:function hi(){},
ar:function ar(){},
aM:function aM(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
bP:function bP(){},
hm:function hm(){},
ct:function ct(){},
cu:function cu(){},
dQ:function dQ(){},
hn:function hn(){},
L:function L(){},
j:function j(){},
c:function c(){},
a9:function a9(){},
dT:function dT(){},
dU:function dU(){},
dX:function dX(){},
aa:function aa(){},
hE:function hE(){},
bq:function bq(){},
bQ:function bQ(){},
br:function br(){},
aQ:function aQ(){},
hQ:function hQ(){},
bz:function bz(){},
hW:function hW(){},
e8:function e8(){},
hY:function hY(a){this.a=a},
e9:function e9(){},
hZ:function hZ(a){this.a=a},
ab:function ab(){},
ea:function ea(){},
a5:function a5(){},
q:function q(){},
cN:function cN(){},
ac:function ac(){},
en:function en(){},
ep:function ep(){},
ia:function ia(a){this.a=a},
er:function er(){},
a6:function a6(){},
ev:function ev(){},
ae:function ae(){},
ew:function ew(){},
af:function af(){},
ez:function ez(){},
ii:function ii(a){this.a=a},
X:function X(){},
a7:function a7(){},
U:function U(){},
eD:function eD(){},
eE:function eE(){},
iq:function iq(){},
ag:function ag(){},
eF:function eF(){},
ir:function ir(){},
aG:function aG(){},
iu:function iu(){},
c_:function c_(){},
eN:function eN(){},
c1:function c1(){},
eW:function eW(){},
d1:function d1(){},
f7:function f7(){},
d6:function d6(){},
fs:function fs(){},
fB:function fB(){},
jt:function jt(a,b){this.a=a
this.$ti=b},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
d3:function d3(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iG:function iG(a){this.a=a},
o:function o(){},
cx:function cx(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eY:function eY(){},
eX:function eX(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f4:function f4(){},
f5:function f5(){},
f8:function f8(){},
f9:function f9(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fm:function fm(){},
fn:function fn(){},
fp:function fp(){},
dc:function dc(){},
dd:function dd(){},
fq:function fq(){},
fr:function fr(){},
fv:function fv(){},
fC:function fC(){},
fD:function fD(){},
dh:function dh(){},
di:function di(){},
fF:function fF(){},
fG:function fG(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
jE(){return B.q},
fa:function fa(){},
am:function am(){},
e5:function e5(){},
an:function an(){},
ej:function ej(){},
i4:function i4(){},
eB:function eB(){},
l:function l(){},
ap:function ap(){},
eG:function eG(){},
fb:function fb(){},
fc:function fc(){},
fk:function fk(){},
fl:function fl(){},
fy:function fy(){},
fz:function fz(){},
fH:function fH(){},
fI:function fI(){},
h7:function h7(){},
dE:function dE(){},
h8:function h8(a){this.a=a},
dF:function dF(){},
b3:function b3(){},
ek:function ek(){},
eU:function eU(){},
dI:function dI(){},
dY:function dY(){},
eo:function eo(){},
bX:function bX(){},
aW:function aW(){},
eI:function eI(){},
eM:function eM(){},
ex:function ex(){},
ft:function ft(){},
fu:function fu(){},
e0:function e0(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
js(a){return new A.aL(a)},
aL:function aL(a){this.a=a},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k6(a,b,c,d){return new A.cg(d,b,c,a)},
nk(a,b){if(b.f)return!1
if(a.x)return!0
if(b.x)return!0
return!1},
cg:function cg(a,b,c,d){var _=this
_.a=100
_.c=a
_.f=b
_.x=c
_.z=d},
hc:function hc(){this.b=this.a=0},
nr(a,b,c){var s=b.f||b.a===0
if(s)return!1
return!1},
dZ:function dZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
hz:function hz(a,b){this.a=a
this.b=b},
hF(a){switch(a){case B.a_:case B.a0:case B.a2:case B.w:case B.x:case B.y:case B.N:case B.O:case B.I:case B.J:case B.K:case B.a1:case B.L:case B.v:case null:return!1
case B.r:case B.M:return!0}},
lK(a){switch(a){case B.a_:case B.a0:case B.a2:case B.w:case B.x:case B.y:case B.N:case B.O:case B.I:case B.J:case B.K:case B.a1:case B.L:case B.v:case null:return!1
case B.r:case B.M:return!0}},
bs:function bs(a){this.b=a},
bR:function bR(a,b){this.b=a
this.c=b},
R:function R(a,b){this.a=a
this.b=b},
e_:function e_(a){this.b=a},
b5:function b5(a){this.b=a},
bo:function bo(a){this.b=a},
aw:function aw(a){this.b=a},
hX:function hX(){},
b4:function b4(){},
bn:function bn(a){this.b=a},
T:function T(a,b){this.f=a
this.y=b},
ch:function ch(a){this.b=a},
ci:function ci(){},
ad:function ad(a,b){this.a=a
this.r=b},
bM:function bM(a){this.b=a},
a2:function a2(a){this.c=a},
bZ:function bZ(a){this.b=a},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(a){this.b=a},
Y:function Y(a){this.b=a},
bx:function bx(a){this.b=a},
bj:function bj(a){this.b=a},
b8:function b8(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
e6:function e6(a){this.b=a},
k:function k(a,b){this.a=a
this.b=b},
hP:function hP(a){this.b=a},
P:function P(a){this.b=a},
hT:function hT(a,b){this.a=a
this.b=b},
ho:function ho(a){var _=this
_.a=a
_.b=!1
_.c=null
_.d=0},
lI(a,b,c,d){var s,r,q,p,o,n,m="a_position",l=5126,k="u_resolution",j="u_offset",i=A.d([],t.c6),h=A.mz(),g=t.G,f=t.o
h=A.aO(A.d([new A.S(m,35044,l,2,h),new A.S("a_color",35048,l,4,new Float32Array(192e3))],g),u.l,A.d([new A.t(k,B.e),new A.t(j,B.e)],f),u.q)
s=$.l7()
r=A.aO(A.d([new A.S(m,35048,l,2,new Float32Array(8000))],g),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.d([new A.t(k,B.e),new A.t(j,B.e)],f),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
q=A.m6(window)
f=A.aO(A.d([new A.S(m,35044,l,2,new Float32Array(A.c6(B.t)))],g),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\n\nout vec4 outColor;\n\nvoid main() {\n  vec2 d = vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y);\n  if (abs(d.x - u_mouse.x) > 24.0 || abs(d.y - u_mouse.y) > 36.0) {\n    discard;\n    return;\n  }\n  outColor = vec4(1, 0, 0, 0.2);\n}\n",A.d([new A.t("u_mouse",B.e),new A.t(k,B.e)],f),u.h)
g=A.d([],t.dG)
p=new Uint8Array(16e6)
o=new Uint8Array(4000)
n=new Uint8Array(4000)
i=new A.hr(c,a,b,i,d,new A.eu(),new A.hv(p,o,n,new Uint8Array(64e6),new A.k(0,0),A.bv(t.j,t.dR),g),new A.hc(),new A.ip(h,s),new A.ho(r),q,new A.ic(f),c.createFramebuffer(),new A.i8())
i.bZ(a,b,c,d)
return i},
dR:function dR(){this.b=this.a=!1},
hr:function hr(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=$
_.z=i
_.Q=j
_.cx=_.ch=$
_.cy=k
_.db=$
_.dx=l
_.dy=null
_.fr=m
_.fy=_.fx=0
_.id=n},
hs:function hs(a){this.a=a},
aD(a,b,c,d,e){return new A.ht(a,e,c,d,b)},
aC:function aC(){},
bO:function bO(a,b,c){var _=this
_.a=a
_.b=0
_.c=null
_.d=!0
_.e=b
_.f=c},
ht:function ht(a,b,c,d,e){var _=this
_.a=a
_.d=b
_.f=c
_.r=d
_.x=e},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a,b){this.a=a
this.b=b},
es:function es(){},
cW:function cW(a,b){this.a=a
this.b=b},
dV:function dV(a){this.a=a},
hx:function hx(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
hw:function hw(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fE:function fE(a){this.a=a
this.b=!0},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
bl:function bl(a){this.b=a},
i6:function i6(a,b){this.a=a
this.b=b},
bY:function bY(a,b,c){this.a=a
this.b=b
this.c=c},
ni(a){var s=a.f
if(s==null)return A.d([],t.Y)
if(s===B.r)return A.d([new A.cz(new A.cW(!1,a.b))],t.Y)
if(s===B.w)return A.d([new A.cz(new A.cW(!0,a.b))],t.Y)
return A.d([],t.Y)},
cz:function cz(a){this.b=a},
lR(a){var s=u.p,r="a_position",q="u_resolution",p="u_block_size",o="u_player_visible_texture",n="u_offset",m=t.G,l=t.o
return new A.e7(A.aO(A.d([new A.S(r,35044,5126,2,new Float32Array(A.c6(B.t)))],m),u.k,A.d([new A.t(q,B.e),new A.t("u_source_position",B.e),new A.t(p,B.e),new A.t("u_source_color",B.a7),new A.t("u_source_strength",B.u),new A.t("u_time",B.u),new A.t("u_visible_texture",B.i),new A.t(o,B.i),new A.t(n,B.e)],l),s),A.aO(A.d([new A.S(r,35044,5126,2,new Float32Array(A.c6(B.t)))],m),u.f,A.d([new A.t("u_light_texture",B.i),new A.t("u_game_world_texture",B.i),new A.t(o,B.i),new A.t(q,B.e),new A.t(p,B.e),new A.t(n,B.e)],l),s),a,A.d([],t.cd))},
e7:function e7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1
_.x=d
_.z=_.y=0},
lG(a){switch(a){case B.E:return B.H
case B.F:return B.G
case B.G:return B.F
case B.H:return B.E
case B.j:return B.l
case B.k:return B.m
case B.l:return B.j
case B.m:return B.k}},
lF(a){switch(a){case B.j:return B.au
case B.k:return B.at
case B.l:return B.au
case B.m:return B.at
default:return B.bm}},
a0(a,b){switch(b){case B.j:return a.u(0,new A.k(0,-1))
case B.F:return a.u(0,new A.k(1,-1))
case B.k:return a.u(0,new A.k(1,0))
case B.E:return a.u(0,new A.k(1,1))
case B.l:return a.u(0,new A.k(0,1))
case B.G:return a.u(0,new A.k(-1,1))
case B.m:return a.u(0,new A.k(-1,0))
case B.H:return a.u(0,new A.k(-1,-1))}},
as:function as(a){this.b=a},
ic:function ic(a){this.a=a},
aO(a,b,c,d){var s=t.N
return new A.hC(d,b,c,a,A.bv(s,t.gz),A.bv(s,t.f2))},
kK(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.Q(a.getShaderParameter(s,35713),!0)){A.jX(J.bL(a.getShaderInfoLog(s)))
throw A.e(A.aU("Invalid Shader"))}return s},
S:function S(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
t:function t(a,b){this.a=a
this.b=b},
bE:function bE(a){this.b=a},
eT:function eT(a,b){this.a=a
this.c=b},
fK:function fK(a,b){this.a=a
this.b=b},
hC:function hC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
i8:function i8(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
i9:function i9(){},
eu:function eu(){},
mX(a,b){var s=t.d8
s.a(a)
s.a(b)
return B.f.ag(a.r,b.r)},
nn(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.J($.F,t.du),p=J.lu(r),o=p.$ti,n=o.i("~(1)?").a(new A.jf(a,s,r,new A.bF(q,t.f0)))
t.Z.a(null)
A.bI(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
m3(a,b){var s=A.d([new A.t("u_texture",B.i),new A.t("u_resolution",B.e),new A.t("u_offset",B.e)],t.o),r=new Float32Array(12e3),q=new Float32Array(12e3)
s=A.aO(A.d([new A.S("a_position",35048,5126,2,r),new A.S("a_texcoord",35048,5126,2,q),new A.S("a_color",35048,5126,4,new Float32Array(24e3))],t.G),"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n}\n",s,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n}\n")
r=A.aS(7,null,!1,t.gM)
s=new A.ie(s,new A.e0(A.nu(),r,t.ep),b)
s.c0(a,b)
return s},
m2(a,b,c,d,e){return new A.ao(c,d,a,b,e)},
kd(a,b,c){var s,r,q,p=null
switch(a){case B.a_:case null:return p
case B.a0:s=p
r=3
q=16
break
case B.a2:s=p
r=2
q=16
break
case B.r:s=p
r=6
q=11
break
case B.w:s=p
r=15
q=5
break
case B.M:s=p
r=5
q=11
break
case B.x:s=new A.aL(4286578432)
r=2
q=2
break
case B.y:s=new A.aL(4294967142)
r=12
q=7
break
case B.N:s=p
r=1
q=13
break
case B.O:s=p
r=1
q=13
break
case B.I:s=p
r=6
q=0
break
case B.J:s=p
r=0
q=15
break
case B.K:s=p
r=12
q=16
break
case B.a1:s=p
r=0
q=16
break
case B.L:s=p
r=13
q=3
break
case B.v:s=p
r=6
q=16
break
default:s=p
r=0
q=0}return new A.ao(r,q,b,c,s)},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ie:function ie(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c
_.e=!1},
ig:function ig(a){this.a=a},
ao:function ao(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=0},
mz(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
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
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a,b){var _=this
_.a=a
_.b=null
_.c=!1
_.d=b},
my(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
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
hu:function hu(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
n8(a){var s,r=A.jA(4000,new A.j7(a),t.W),q=A.d([],t.az)
for(s=0;s<4000;++s);return new A.ih(q,new A.O(100,40,r,t.L))},
kW(a){var s,r,q,p,o
for(s=a.b,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.k(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.b_(A.hF(o.f))))return p}throw A.e("Solid")},
iA:function iA(a,b){this.a=a
this.d=b},
j7:function j7(a){this.a=a},
ih:function ih(a,b){this.a=a
this.b=b},
dJ:function dJ(a){this.a=a},
hg:function hg(a){this.a=a},
hA:function hA(){},
hB:function hB(a){this.a=a},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
hf:function hf(a){this.a=a},
jp(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.C))break
q=A.a0(q,b);++p}return p},
bK(a,b,c){var s=A.a0(a,b)
if(c.e.h(0,s)===B.C)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
c0(a,b){return new A.d_(a,b)},
dz(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.d([],t.D)
for(s=a2.length,r=a1.a,q=J.fZ(r),p=t.q,o=t.n,n=0;n<a2.length;a2.length===s||(0,A.E)(a2),++n){m=a2[n]
l=A.d([],p)
k=A.d([],o)
for(j=q.gw(r),i=0;j.n();){h=j.gp(j)
g=m.a.R(h,a3)
if(g<1000){B.a.m(l,h)
B.a.m(k,g)
i+=g}}if(l.length===0){B.a.m(a0,m)
continue}for(f=0,e=0;e<k.length;++e,f=d){d=k[e]/i+f
B.a.j(k,e,d)}c=$.lj().a6()
for(j=k.length,h=l.length,b=B.A,a=-1,e=0;e<j;++e,a=g){g=k[e]
if(c>=a&&c<g){if(!(e<h))return A.b(l,e)
b=l[e]}}j=0===b.a&&0===b.b
if(j){B.a.m(a0,m)
continue}m.d9(b,a3)}for(s=q.gw(r),r=a3.e,q=a1.c;s.n();){p=s.gp(s)
if(r.h(0,p)===B.Q||r.h(0,p)===B.R)B.a.m(q,p)}return a0},
l4(a,b){var s,r,q,p,o,n,m,l,k
B.a.am(a,new A.jo())
if(0>=a.length)return A.b(a,0)
A.dz(a[0],$.lq(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.E)(s),++p)q.j(0,s[p],B.aw)
for(s=A.kt(a,1,null,A.aq(a).c),r=s.$ti,s=new A.aR(s,s.gl(s),r.i("aR<at.E>")),r=r.i("at.E"),o=t.h0,n=2;s.n();){m=r.a(s.d)
l=m.a
k=J.ak(l)
if(k.gl(l)<30){if(n>0){l=A.lT($.jr(),!0,o)
l.push($.k1())}else l=$.jr()
if(!B.a.N(A.dz(m,l,b),$.k1()))--n}else if(k.gl(l)<60)A.dz(m,$.lm(),b)
else if(k.gl(l)<100)A.dz(m,$.ll(),b)
else A.dz(m,$.lk(),b)}if(n===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.E)(s),++p)q.j(0,s[p],B.ax)}},
aB:function aB(){},
eO:function eO(){},
cj:function cj(a){this.$ti=a},
cP:function cP(a){this.$ti=a},
dK:function dK(){},
dB:function dB(){},
dO:function dO(){},
cf:function cf(a){this.a=a},
d_:function d_(a,b){this.a=a
this.b=b},
jn:function jn(){},
jj:function jj(){},
jl:function jl(){},
ji:function ji(){},
jk:function jk(){},
jm:function jm(){},
jh:function jh(){},
jo:function jo(){},
lH(a){var s=t.q
return new A.a3(a,A.d([],s),A.d([],s),A.hq(a))},
hq(a){var s,r,q=J.ak(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gl(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.k(B.d.D(p/q.gl(a)),B.d.D(o/q.gl(a)))},
cy:function cy(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(){},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hp:function hp(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
hL:function hL(a,b){this.a=a
this.b=b},
i1:function i1(){},
hG:function hG(a){this.a=a},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
i3:function i3(){},
b6:function b6(a){this.b=a},
cS:function cS(a){this.b=a},
ib:function ib(a,b){this.b=a
this.a=b},
cR:function cR(a,b){this.a=a
this.b=b},
il:function il(a){this.a=a},
im:function im(){},
io:function io(a){this.a=a},
m6(a){var s=new A.iw(A.kr(t.J),A.kr(t.dg))
s.c1(a)
return s},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
al:function al(a){this.b=a},
h1:function h1(a,b){this.a=a
this.b=$
this.c=b},
h2:function h2(a){this.a=a},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
lU(){var s=new A.i_()
s.c_()
return s},
i_:function i_(){this.a=$},
i0:function i0(a){this.a=a},
l1(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
nw(a){return A.V(A.kh(a))},
ai(a,b){if(a===$)throw A.e(new A.cE("Field '"+b+"' has not been initialized."))
return a},
fX(a,b){if(a!==$)throw A.e(A.kh(b))},
kJ(a){var s,r,q
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.jP(a))return a
s=Object.getPrototypeOf(a)
if(s===Object.prototype||s===null)return A.b0(a)
if(Array.isArray(a)){r=[]
for(q=0;q<a.length;++q)r.push(A.kJ(a[q]))
return r}return a},
b0(a){var s,r,q,p,o
if(a==null)return null
s=A.bv(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.E)(r),++p){o=r[p]
s.j(0,o,A.kJ(a[o]))}return s},
nt(a){A.ay(a)
$.jZ().F(a,$.k_())
B.aK.bH(window,A.kZ())},
np(){var s,r,q
new A.h1(A.lU(),A.d(["spell","stats","inventory"],t.s)).J($.k3())
s=$.jZ()
r=t.m
r=new A.dZ(s,A.d([],r),A.d([],r),A.d([],t.f_),A.d([],t.eU))
q=s.cy.a
new A.ba(q,A.A(q).i("ba<1>")).bB(r.gcX())
r=t.x.a(r.gbf())
B.a.m(s.d,r)
B.aK.bH(window,A.kZ())}},J={
jW(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ja(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.jV==null){A.ng()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.e(A.kv("Return interceptor for "+A.z(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iU
if(o==null)o=$.iU=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.no(a)
if(p!=null)return p
if(typeof a=="function")return B.be
s=Object.getPrototypeOf(a)
if(s==null)return B.ay
if(s===Object.prototype)return B.ay
if(typeof q=="function"){o=$.iU
if(o==null)o=$.iU=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.a8,enumerable:false,writable:true,configurable:true})
return B.a8}return B.a8},
lO(a,b){if(a<0||a>4294967295)throw A.e(A.cQ(a,0,4294967295,"length",null))
return J.lQ(new Array(a),b)},
lP(a,b){if(a<0)throw A.e(A.ck("Length must be a non-negative integer: "+a,null))
return A.d(new Array(a),b.i("u<0>"))},
lQ(a,b){return J.kg(A.d(a,b.i("u<0>")),b)},
kg(a,b){a.fixed$length=Array
return a},
cc(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cB.prototype
return J.e3.prototype}if(typeof a=="string")return J.bS.prototype
if(a==null)return J.cC.prototype
if(typeof a=="boolean")return J.cA.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof A.y)return a
return J.ja(a)},
ak(a){if(typeof a=="string")return J.bS.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof A.y)return a
return J.ja(a)},
fZ(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof A.y)return a
return J.ja(a)},
h_(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof A.y)return a
return J.ja(a)},
Q(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cc(a).E(a,b)},
k4(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.nl(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ak(a).h(a,b)},
ls(a,b,c,d){return J.h_(a).cN(a,b,c,d)},
k5(a,b){return J.fZ(a).q(a,b)},
lt(a,b){return J.fZ(a).C(a,b)},
ce(a){return J.cc(a).gt(a)},
aI(a){return J.fZ(a).gw(a)},
a1(a){return J.ak(a).gl(a)},
lu(a){return J.h_(a).gaO(a)},
lv(a,b,c){return J.fZ(a).bC(a,b,c)},
lw(a,b){return J.h_(a).sdl(a,b)},
bL(a){return J.cc(a).k(a)},
a:function a(){},
cA:function cA(){},
cC:function cC(){},
bt:function bt(){},
em:function em(){},
cY:function cY(){},
aP:function aP(){},
u:function u(a){this.$ti=a},
hM:function hM(a){this.$ti=a},
cl:function cl(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cD:function cD(){},
cB:function cB(){},
e3:function e3(){},
bS:function bS(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.jx.prototype={}
J.a.prototype={
E(a,b){return a===b},
gt(a){return A.bV(a)},
k(a){return"Instance of '"+A.i5(a)+"'"}}
J.cA.prototype={
k(a){return String(a)},
bR(a,b){return b||a},
gt(a){return a?519018:218159},
$iN:1}
J.cC.prototype={
E(a,b){return null==b},
k(a){return"null"},
gt(a){return 0},
$iM:1}
J.bt.prototype={
gt(a){return 0},
k(a){return String(a)}}
J.em.prototype={}
J.cY.prototype={}
J.aP.prototype={
k(a){var s=a[$.l6()]
if(s==null)return this.bX(a)
return"JavaScript function for "+J.bL(s)},
$ibp:1}
J.u.prototype={
m(a,b){A.aq(a).c.a(b)
if(!!a.fixed$length)A.V(A.x("add"))
a.push(b)},
bG(a,b){var s
if(!!a.fixed$length)A.V(A.x("removeAt"))
s=a.length
if(b>=s)throw A.e(A.kl(b,null))
return a.splice(b,1)[0]},
L(a,b){var s
if(!!a.fixed$length)A.V(A.x("remove"))
for(s=0;s<a.length;++s)if(J.Q(a[s],b)){a.splice(s,1)
return!0}return!1},
ae(a,b){A.aq(a).i("h<1>").a(b)
if(!!a.fixed$length)A.V(A.x("addAll"))
this.c4(a,b)
return},
c4(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.e(A.cp(a))
for(r=0;r<s;++r)a.push(b[r])},
bC(a,b,c){var s=A.aq(a)
return new A.cJ(a,s.v(c).i("1(2)").a(b),s.i("@<1>").v(c).i("cJ<1,2>"))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
gbV(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.e(A.lL())
throw A.e(A.lN())},
aX(a,b,c,d){var s,r,q,p
A.aq(a).i("h<1>").a(d)
if(!!a.immutable$list)A.V(A.x("setRange"))
A.jF(b,c,a.length)
s=c-b
if(s===0)return
A.i7(0,"skipCount")
r=d
q=J.ak(r)
if(s>q.gl(r))throw A.e(A.lM())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
am(a,b){var s=A.aq(a)
s.i("i(1,1)?").a(b)
if(!!a.immutable$list)A.V(A.x("sort"))
A.m0(a,b,s.c)},
bU(a){var s,r,q,p
if(!!a.immutable$list)A.V(A.x("shuffle"))
s=a.length
for(;s>1;){r=B.q.A(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
d0(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.Q(a[s],b))return s}return-1},
N(a,b){var s
for(s=0;s<a.length;++s)if(J.Q(a[s],b))return!0
return!1},
k(a){return A.jw(a,"[","]")},
gw(a){return new J.cl(a,a.length,A.aq(a).i("cl<1>"))},
gt(a){return A.bV(a)},
gl(a){return a.length},
sl(a,b){if(!!a.fixed$length)A.V(A.x("set length"))
if(b>a.length)A.aq(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.e(A.cb(a,b))
return a[b]},
j(a,b,c){A.aq(a).c.a(c)
if(!!a.immutable$list)A.V(A.x("indexed set"))
if(!(b>=0&&b<a.length))throw A.e(A.cb(a,b))
a[b]=c},
$im:1,
$ih:1,
$in:1}
J.hM.prototype={}
J.cl.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.e(A.E(q))
s=r.c
if(s>=p){r.sb7(null)
return!1}r.sb7(q[s]);++r.c
return!0},
sb7(a){this.d=this.$ti.i("1?").a(a)},
$iW:1}
J.cD.prototype={
ag(a,b){var s
A.ay(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaK(b)
if(this.gaK(a)===s)return 0
if(this.gaK(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaK(a){return a===0?1/a<0:a<0},
a7(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.e(A.x(""+a+".toInt()"))},
cR(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.e(A.x(""+a+".ceil()"))},
ai(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.e(A.x(""+a+".floor()"))},
D(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.e(A.x(""+a+".round()"))},
aj(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
cS(a,b,c){if(B.f.ag(b,c)>0)throw A.e(A.kT(b))
if(this.ag(a,b)<0)return b
if(this.ag(a,c)>0)return c
return a},
dj(a,b){var s,r,q,p
if(b<2||b>36)throw A.e(A.cQ(b,2,36,"radix",null))
s=a.toString(b)
if(B.z.cT(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.V(A.x("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.z.aW("0",p)},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
bY(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bi(a,b)},
M(a,b){return(a|0)===a?a/b|0:this.bi(a,b)},
bi(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.e(A.x("Result of truncating division is "+A.z(s)+": "+A.z(a)+" ~/ "+b))},
cz(a,b){var s
if(a>0)s=this.cw(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cw(a,b){return b>31?0:a>>>b},
$iD:1,
$iK:1}
J.cB.prototype={$ii:1}
J.e3.prototype={}
J.bS.prototype={
cT(a,b){if(b<0)throw A.e(A.cb(a,b))
if(b>=a.length)A.V(A.cb(a,b))
return a.charCodeAt(b)},
u(a,b){return a+b},
aW(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.b9)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bE(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aW(c,s)+a},
k(a){return a},
gt(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return a.length},
h(a,b){if(b>=a.length)throw A.e(A.cb(a,b))
return a[b]},
$ir:1}
A.cE.prototype={
k(a){var s="LateInitializationError: "+this.a
return s}}
A.id.prototype={}
A.m.prototype={}
A.at.prototype={
gw(a){var s=this
return new A.aR(s,s.gl(s),A.A(s).i("aR<at.E>"))}}
A.cV.prototype={
gcj(){var s=J.a1(this.a),r=this.c
if(r==null||r>s)return s
return r},
gcA(){var s=J.a1(this.a),r=this.b
if(r>s)return s
return r},
gl(a){var s,r=J.a1(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.dw()
return s-q},
q(a,b){var s=this,r=s.gcA()+b
if(b<0||r>=s.gcj())throw A.e(A.H(b,s,"index",null,null))
return J.k5(s.a,r)}}
A.aR.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.ak(q),o=p.gl(q)
if(r.b!==o)throw A.e(A.cp(q))
s=r.c
if(s>=o){r.sa4(null)
return!1}r.sa4(p.q(q,s));++r.c
return!0},
sa4(a){this.d=this.$ti.i("1?").a(a)},
$iW:1}
A.by.prototype={
gw(a){var s=A.A(this)
return new A.cI(J.aI(this.a),this.b,s.i("@<1>").v(s.Q[1]).i("cI<1,2>"))},
gl(a){return J.a1(this.a)}}
A.cv.prototype={$im:1}
A.cI.prototype={
n(){var s=this,r=s.b
if(r.n()){s.sa4(s.c.$1(r.gp(r)))
return!0}s.sa4(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
sa4(a){this.a=this.$ti.i("2?").a(a)}}
A.cJ.prototype={
gl(a){return J.a1(this.a)},
q(a,b){return this.b.$1(J.k5(this.a,b))}}
A.ax.prototype={
gw(a){return new A.cZ(J.aI(this.a),this.b,this.$ti.i("cZ<1>"))}}
A.cZ.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.b_(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.a4.prototype={}
A.cq.prototype={
k(a){return A.jB(this)},
$iG:1}
A.cr.prototype={
gl(a){return this.a},
aF(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.aF(0,b))return null
return this.b[A.a8(b)]},
C(a,b){var s,r,q,p,o,n=this.$ti
n.i("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.a8(s[p])
b.$2(o,n.a(q[o]))}}}
A.is.prototype={
K(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.cO.prototype={
k(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.e4.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eK.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.i2.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.cw.prototype={}
A.de.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iav:1}
A.bm.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.l5(r==null?"unknown":r)+"'"},
$ibp:1,
gdu(){return this},
$C:"$1",
$R:1,
$D:null}
A.dL.prototype={$C:"$0",$R:0}
A.dM.prototype={$C:"$2",$R:2}
A.eC.prototype={}
A.ey.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.l5(s)+"'"}}
A.bN.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bN))return!1
return this.$_target===b.$_target&&this.a===b.a},
gt(a){return(A.l_(this.a)^A.bV(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.i5(t.K.a(this.a))+"'")}}
A.eq.prototype={
k(a){return"RuntimeError: "+this.a}}
A.eP.prototype={
k(a){return"Assertion failed: "+A.dS(this.a)}}
A.bu.prototype={
gl(a){return this.a},
gO(a){return new A.cF(this,A.A(this).i("cF<1>"))},
gaU(a){var s=this,r=A.A(s)
return A.kj(s.gO(s),new A.hN(s),r.c,r.Q[1])},
aF(a,b){var s=this.d2(b)
return s},
d2(a){var s=this,r=s.d
if(r==null)return!1
return s.aJ(s.av(r,s.aI(a)),a)>=0},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.aw(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.aw(p,b)
q=r==null?n:r.b
return q}else return o.d3(b)},
d3(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.av(p,q.aI(a))
r=q.aJ(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.A(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.b0(s==null?q.b=q.az():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.b0(r==null?q.c=q.az():r,b,c)}else q.d4(b,c)},
d4(a,b){var s,r,q,p,o=this,n=A.A(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.az()
r=o.aI(a)
q=o.av(s,r)
if(q==null)o.aD(s,r,[o.aA(a,b)])
else{p=o.aJ(q,a)
if(p>=0)q[p].b=b
else q.push(o.aA(a,b))}},
C(a,b){var s,r,q=this
A.A(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.e(A.cp(q))
s=s.c}},
b0(a,b,c){var s,r=this,q=A.A(r)
q.c.a(b)
q.Q[1].a(c)
s=r.aw(a,b)
if(s==null)r.aD(a,b,r.aA(b,c))
else s.b=c},
aA(a,b){var s=this,r=A.A(s),q=new A.hO(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&67108863
return q},
aI(a){return J.ce(a)&0x3ffffff},
aJ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Q(a[r].a,b))return r
return-1},
k(a){return A.jB(this)},
aw(a,b){return a[b]},
av(a,b){return a[b]},
aD(a,b,c){a[b]=c},
cg(a,b){delete a[b]},
az(){var s="<non-identifier-key>",r=Object.create(null)
this.aD(r,s,r)
this.cg(r,s)
return r},
$iki:1}
A.hN.prototype={
$1(a){var s=this.a,r=A.A(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.A(this.a).i("2(1)")}}
A.hO.prototype={}
A.cF.prototype={
gl(a){return this.a.a},
gw(a){var s=this.a,r=new A.cG(s,s.r,this.$ti.i("cG<1>"))
r.c=s.e
return r}}
A.cG.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.cp(q))
s=r.c
if(s==null){r.sb_(null)
return!1}else{r.sb_(s.a)
r.c=s.c
return!0}},
sb_(a){this.d=this.$ti.i("1?").a(a)},
$iW:1}
A.jb.prototype={
$1(a){return this.a(a)},
$S:23}
A.jc.prototype={
$2(a,b){return this.a(a,b)},
$S:39}
A.jd.prototype={
$1(a){return this.a(A.a8(a))},
$S:38}
A.bB.prototype={$iah:1}
A.bU.prototype={
gl(a){return a.length},
$iv:1}
A.bA.prototype={
h(a,b){A.aZ(b,a,a.length)
return a[b]},
j(a,b,c){A.jN(c)
A.aZ(b,a,a.length)
a[b]=c},
$im:1,
$ih:1,
$in:1}
A.cL.prototype={
j(a,b,c){A.c5(c)
A.aZ(b,a,a.length)
a[b]=c},
$im:1,
$ih:1,
$in:1}
A.cK.prototype={$ijv:1}
A.ec.prototype={
h(a,b){A.aZ(b,a,a.length)
return a[b]}}
A.ed.prototype={
h(a,b){A.aZ(b,a,a.length)
return a[b]}}
A.ee.prototype={
h(a,b){A.aZ(b,a,a.length)
return a[b]}}
A.ef.prototype={
h(a,b){A.aZ(b,a,a.length)
return a[b]}}
A.eg.prototype={
h(a,b){A.aZ(b,a,a.length)
return a[b]}}
A.cM.prototype={
gl(a){return a.length},
h(a,b){A.aZ(b,a,a.length)
return a[b]}}
A.eh.prototype={
gl(a){return a.length},
h(a,b){A.aZ(b,a,a.length)
return a[b]},
$im5:1}
A.d7.prototype={}
A.d8.prototype={}
A.d9.prototype={}
A.da.prototype={}
A.au.prototype={
i(a){return A.j0(v.typeUniverse,this,a)},
v(a){return A.mq(v.typeUniverse,this,a)}}
A.f6.prototype={}
A.fJ.prototype={
k(a){return A.a_(this.a,null)}}
A.f3.prototype={
k(a){return this.a}}
A.dj.prototype={$ib9:1}
A.iC.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.iB.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:26}
A.iD.prototype={
$0(){this.a.$0()},
$S:7}
A.iE.prototype={
$0(){this.a.$0()},
$S:7}
A.iZ.prototype={
c2(a,b){if(self.setTimeout!=null)self.setTimeout(A.dx(new A.j_(this,b),0),a)
else throw A.e(A.x("`setTimeout()` not found."))}}
A.j_.prototype={
$0(){this.b.$0()},
$S:0}
A.eQ.prototype={
ah(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.b1(b)
else{s=r.a
if(q.i("aE<1>").b(b))s.b3(b)
else s.ar(q.c.a(b))}},
bs(a,b){var s=this.a
if(this.b)s.a1(a,b)
else s.b2(a,b)}}
A.j2.prototype={
$1(a){return this.a.$2(0,a)},
$S:19}
A.j3.prototype={
$2(a,b){this.a.$2(1,new A.cw(a,t.l.a(b)))},
$S:17}
A.j6.prototype={
$2(a,b){this.a(A.c5(a),b)},
$S:15}
A.cn.prototype={
k(a){return A.z(this.a)},
$iC:1,
ga9(){return this.b}}
A.eV.prototype={
bs(a,b){var s
A.j8(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.e(A.aU("Future already completed"))
s.b2(a,b)}}
A.bF.prototype={
ah(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.e(A.aU("Future already completed"))
s.b1(r.i("1/").a(b))},
cU(a){return this.ah(a,null)}}
A.bJ.prototype={
d6(a){if((this.c&15)!==6)return!0
return this.b.b.aQ(t.al.a(this.d),a.a,t.cJ,t.K)},
cZ(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.df(q,m,a.b,o,n,t.l)
else p=l.aQ(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.eK.b(A.bi(s))){if((r.c&1)!==0)throw A.e(A.ck("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.ck("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.J.prototype={
aR(a,b,c){var s,r,q,p=this.$ti
p.v(c).i("1/(2)").a(a)
s=$.F
if(s===B.n){if(b!=null&&!t.C.b(b)&&!t.y.b(b))throw A.e(A.k7(b,"onError",u.c))}else{c.i("@<0/>").v(p.c).i("1(2)").a(a)
if(b!=null)b=A.mT(b,s)}r=new A.J(s,c.i("J<0>"))
q=b==null?1:3
this.an(new A.bJ(r,q,a,b,p.i("@<1>").v(c).i("bJ<1,2>")))
return r},
bJ(a,b){return this.aR(a,null,b)},
bj(a,b,c){var s,r=this.$ti
r.v(c).i("1/(2)").a(a)
s=new A.J($.F,c.i("J<0>"))
this.an(new A.bJ(s,19,a,b,r.i("@<1>").v(c).i("bJ<1,2>")))
return s},
cu(a){this.a=this.a&1|16
this.c=a},
ap(a){this.a=a.a&30|this.a&1
this.c=a.c},
an(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.an(a)
return}r.ap(s)}A.c9(null,null,r.b,t.M.a(new A.iI(r,a)))}},
bg(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.bg(a)
return}m.ap(n)}l.a=m.ad(a)
A.c9(null,null,m.b,t.M.a(new A.iP(l,m)))}},
ac(){var s=t.F.a(this.c)
this.c=null
return this.ad(s)},
ad(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ca(a){var s,r,q,p=this
p.a^=2
try{a.aR(new A.iL(p),new A.iM(p),t.P)}catch(q){s=A.bi(q)
r=A.bg(q)
A.l3(new A.iN(p,s,r))}},
ar(a){var s,r=this
r.$ti.c.a(a)
s=r.ac()
r.a=8
r.c=a
A.c4(r,s)},
a1(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.ac()
this.cu(A.h6(a,b))
A.c4(this,s)},
b1(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aE<1>").b(a)){this.b3(a)
return}this.c7(s.c.a(a))},
c7(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.c9(null,null,s.b,t.M.a(new A.iK(s,a)))},
b3(a){var s=this,r=s.$ti
r.i("aE<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.c9(null,null,s.b,t.M.a(new A.iO(s,a)))}else A.jH(a,s)
return}s.ca(a)},
b2(a,b){this.a^=2
A.c9(null,null,this.b,t.M.a(new A.iJ(this,a,b)))},
$iaE:1}
A.iI.prototype={
$0(){A.c4(this.a,this.b)},
$S:0}
A.iP.prototype={
$0(){A.c4(this.b,this.a.a)},
$S:0}
A.iL.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.ar(p.$ti.c.a(a))}catch(q){s=A.bi(q)
r=A.bg(q)
p.a1(s,r)}},
$S:5}
A.iM.prototype={
$2(a,b){this.a.a1(t.K.a(a),t.l.a(b))},
$S:12}
A.iN.prototype={
$0(){this.a.a1(this.b,this.c)},
$S:0}
A.iK.prototype={
$0(){this.a.ar(this.b)},
$S:0}
A.iO.prototype={
$0(){A.jH(this.b,this.a)},
$S:0}
A.iJ.prototype={
$0(){this.a.a1(this.b,this.c)},
$S:0}
A.iS.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.de(t.fO.a(q.d),t.z)}catch(p){s=A.bi(p)
r=A.bg(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.h6(s,r)
o.b=!0
return}if(l instanceof A.J&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.bJ(new A.iT(n),t.z)
q.b=!1}},
$S:0}
A.iT.prototype={
$1(a){return this.a},
$S:20}
A.iR.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.aQ(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bi(l)
r=A.bg(l)
q=this.a
q.c=A.h6(s,r)
q.b=!0}},
$S:0}
A.iQ.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.d6(s)&&p.a.e!=null){p.c=p.a.cZ(s)
p.b=!1}}catch(o){r=A.bi(o)
q=A.bg(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.h6(r,q)
n.b=!0}},
$S:0}
A.eR.prototype={}
A.bC.prototype={
gl(a){var s={},r=new A.J($.F,t.fJ)
s.a=0
this.aL(new A.ij(s,this),!0,new A.ik(s,r),r.gcc())
return r}}
A.ij.prototype={
$1(a){A.A(this.b).c.a(a);++this.a.a},
$S(){return A.A(this.b).i("~(1)")}}
A.ik.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.ac()
r.c.a(q)
s.a=8
s.c=q
A.c4(s,p)},
$S:0}
A.aV.prototype={}
A.df.prototype={
gcp(){var s,r=this
if((r.b&8)===0)return A.A(r).i("bd<1>?").a(r.a)
s=A.A(r)
return s.i("bd<1>?").a(s.i("fw<1>").a(r.a).gaV())},
ck(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.aH(A.A(q).i("aH<1>"))
return A.A(q).i("aH<1>").a(s)}r=A.A(q)
s=r.i("fw<1>").a(q.a).gaV()
return r.i("aH<1>").a(s)},
gcC(){var s=this.a
if((this.b&8)!==0)s=t.fv.a(s).gaV()
return A.A(this).i("c3<1>").a(s)},
c8(){if((this.b&4)!==0)return new A.aT("Cannot add event after closing")
return new A.aT("Cannot add event while adding a stream")},
m(a,b){var s,r=this,q=A.A(r)
q.c.a(b)
s=r.b
if(s>=4)throw A.e(r.c8())
if((s&1)!==0)r.aC(b)
else if((s&3)===0)r.ck().m(0,new A.bG(b,q.i("bG<1>")))},
cB(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=A.A(l)
k.i("~(1)?").a(a)
t.Z.a(c)
if((l.b&3)!==0)throw A.e(A.aU("Stream has already been listened to."))
s=$.F
r=d?1:0
t.a7.v(k.c).i("1(2)").a(a)
A.mb(s,b)
q=c==null?A.n6():c
p=t.M
p.a(q)
o=new A.c3(l,a,s,r,k.i("c3<1>"))
n=l.gcp()
r=l.b|=1
if((r&8)!==0){m=k.i("fw<1>").a(l.a)
m.saV(o)
m.dc(0)}else l.a=o
o.cv(n)
k=p.a(new A.iY(l))
s=o.e
o.e=s|32
k.$0()
o.e&=4294967263
o.b4((s&4)!==0)
return o},
$ikq:1,
$ikB:1,
$ibH:1}
A.iY.prototype={
$0(){A.jT(this.a.d)},
$S:0}
A.eS.prototype={
aC(a){var s=this.$ti
s.c.a(a)
this.gcC().c6(new A.bG(a,s.i("bG<1>")))}}
A.c2.prototype={}
A.ba.prototype={
gt(a){return(A.bV(this.a)^892482866)>>>0},
E(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.ba&&b.a===this.a}}
A.c3.prototype={
bd(){var s=this.x,r=A.A(s)
r.i("aV<1>").a(this)
if((s.b&8)!==0)r.i("fw<1>").a(s.a).dz(0)
A.jT(s.e)},
be(){var s=this.x,r=A.A(s)
r.i("aV<1>").a(this)
if((s.b&8)!==0)r.i("fw<1>").a(s.a).dc(0)
A.jT(s.f)}}
A.d0.prototype={
cv(a){var s=this
A.A(s).i("bd<1>?").a(a)
if(a==null)return
s.saB(a)
if(a.c!=null){s.e|=64
a.al(s)}},
bd(){},
be(){},
c6(a){var s=this,r=A.A(s),q=r.i("aH<1>?").a(s.r)
if(q==null)q=new A.aH(r.i("aH<1>"))
s.saB(q)
q.m(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.al(s)}},
aC(a){var s,r=this,q=A.A(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.bI(r.a,a,q)
r.e&=4294967263
r.b4((s&4)!==0)},
b4(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.saB(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.bd()
else q.be()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.al(q)},
saB(a){this.r=A.A(this).i("bd<1>?").a(a)},
$iaV:1,
$ibH:1}
A.dg.prototype={
aL(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.cB(s.i("~(1)?").a(a),d,c,b===!0)},
bB(a){return this.aL(a,null,null,null)}}
A.eZ.prototype={}
A.bG.prototype={}
A.bd.prototype={
al(a){var s,r=this
r.$ti.i("bH<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.l3(new A.iV(r,a))
r.a=1}}
A.iV.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("bH<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.A(r).i("bH<1>").a(s).aC(r.b)},
$S:0}
A.aH.prototype={
m(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.fx.prototype={}
A.dm.prototype={$ikw:1}
A.j5.prototype={
$0(){var s=t.K.a(A.e(this.a))
s.stack=this.b.k(0)
throw s},
$S:0}
A.fo.prototype={
dg(a){var s,r,q,p,o
t.M.a(a)
try{if(B.n===$.F){a.$0()
return}A.kO(null,null,this,a,t.H)}catch(q){s=A.bi(q)
r=A.bg(q)
p=t.K.a(s)
o=t.l.a(r)
A.fY(p,o)}},
bI(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.n===$.F){a.$1(b)
return}A.kP(null,null,this,a,b,t.H,c)}catch(q){s=A.bi(q)
r=A.bg(q)
p=t.K.a(s)
o=t.l.a(r)
A.fY(p,o)}},
bp(a){return new A.iW(this,t.M.a(a))},
cQ(a,b){return new A.iX(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
de(a,b){b.i("0()").a(a)
if($.F===B.n)return a.$0()
return A.kO(null,null,this,a,b)},
aQ(a,b,c,d){c.i("@<0>").v(d).i("1(2)").a(a)
d.a(b)
if($.F===B.n)return a.$1(b)
return A.kP(null,null,this,a,b,c,d)},
df(a,b,c,d,e,f){d.i("@<0>").v(e).v(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.F===B.n)return a.$2(b,c)
return A.mU(null,null,this,a,b,c,d,e,f)},
aP(a,b,c,d){return b.i("@<0>").v(c).v(d).i("1(2,3)").a(a)}}
A.iW.prototype={
$0(){return this.a.dg(this.b)},
$S:0}
A.iX.prototype={
$1(a){var s=this.c
return this.a.bI(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.d4.prototype={
gw(a){var s=this,r=new A.d5(s,s.r,s.$ti.i("d5<1>"))
r.c=s.e
return r},
gl(a){return this.a},
N(a,b){var s=this.cd(b)
return s},
cd(a){var s=this.d
if(s==null)return!1
return this.b9(s[a.gt(a)&1073741823],a)>=0},
m(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.b5(s==null?q.b=A.jI():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.b5(r==null?q.c=A.jI():r,b)}else return q.cb(0,b)},
cb(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.jI()
r=J.ce(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.aq(b)]
else{if(p.b9(q,b)>=0)return!1
q.push(p.aq(b))}return!0},
b5(a,b){this.$ti.c.a(b)
if(t.hg.a(a[b])!=null)return!1
a[b]=this.aq(b)
return!0},
aq(a){var s=this,r=new A.fd(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
b9(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Q(a[r].a,b))return r
return-1}}
A.fd.prototype={}
A.d5.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.e(A.cp(q))
else if(r==null){s.sb6(null)
return!1}else{s.sb6(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sb6(a){this.d=this.$ti.i("1?").a(a)},
$iW:1}
A.f.prototype={
gw(a){return new A.aR(a,this.gl(a),A.az(a).i("aR<f.E>"))},
q(a,b){return this.h(a,b)},
cW(a,b,c,d){var s,r=A.az(a)
d=r.i("f.E").a(r.i("f.E?").a(d))
A.jF(b,c,this.gl(a))
for(s=b;s<c;++s)this.j(a,s,d)},
k(a){return A.jw(a,"[","]")}}
A.cH.prototype={}
A.hR.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.z(a)
r.a=s+": "
r.a+=A.z(b)},
$S:14}
A.w.prototype={
C(a,b){var s,r,q=A.az(a)
q.i("~(w.K,w.V)").a(b)
for(s=J.aI(this.gO(a)),q=q.i("w.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gbu(a){return J.lv(this.gO(a),new A.hU(a),A.az(a).i("bT<w.K,w.V>"))},
gl(a){return J.a1(this.gO(a))},
k(a){return A.jB(a)},
$iG:1}
A.hU.prototype={
$1(a){var s,r=this.a,q=A.az(r)
q.i("w.K").a(a)
s=q.i("w.V")
return new A.bT(a,s.a(J.k4(r,a)),q.i("@<w.K>").v(s).i("bT<1,2>"))},
$S(){return A.az(this.a).i("bT<w.K,w.V>(w.K)")}}
A.cT.prototype={
k(a){return A.jw(this,"{","}")}}
A.db.prototype={$im:1,$ih:1,$ikp:1}
A.dn.prototype={}
A.aN.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.aN&&this.a===b.a},
gt(a){return B.f.gt(this.a)},
k(a){var s,r,q,p,o,n=this.a,m=B.f.M(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.f.M(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.f.M(n,1e6)
p=q<10?"0":""
o=B.z.bE(B.f.k(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o}}
A.iF.prototype={}
A.C.prototype={
ga9(){return A.bg(this.$thrownJsError)}}
A.cm.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.dS(s)
return"Assertion failed"}}
A.b9.prototype={}
A.ei.prototype={
k(a){return"Throw of null."}}
A.aJ.prototype={
gau(){return"Invalid argument"+(!this.a?"(s)":"")},
gat(){return""},
k(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gau()+o+m
if(!q.a)return l
s=q.gat()
r=A.dS(q.b)
return l+s+": "+r}}
A.bW.prototype={
gau(){return"RangeError"},
gat(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.z(q):""
else if(q==null)s=": Not greater than or equal to "+A.z(r)
else if(q>r)s=": Not in inclusive range "+A.z(r)+".."+A.z(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.z(r)
return s}}
A.e1.prototype={
gau(){return"RangeError"},
gat(){if(A.c5(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.eL.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.eJ.prototype={
k(a){var s="UnimplementedError: "+this.a
return s}}
A.aT.prototype={
k(a){return"Bad state: "+this.a}}
A.dN.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.dS(s)+"."}}
A.el.prototype={
k(a){return"Out of Memory"},
ga9(){return null},
$iC:1}
A.cU.prototype={
k(a){return"Stack Overflow"},
ga9(){return null},
$iC:1}
A.dP.prototype={
k(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.iH.prototype={
k(a){return"Exception: "+this.a}}
A.h.prototype={
bC(a,b,c){var s=A.A(this)
return A.kj(this,s.v(c).i("1(h.E)").a(b),s.i("h.E"),c)},
C(a,b){var s
A.A(this).i("~(h.E)").a(b)
for(s=this.gw(this);s.n();)b.$1(s.gp(s))},
gl(a){var s,r=this.gw(this)
for(s=0;r.n();)++s
return s},
q(a,b){var s,r,q
A.i7(b,"index")
for(s=this.gw(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.e(A.H(b,this,"index",null,r))},
k(a){return A.kf(this,"(",")")}}
A.W.prototype={}
A.bT.prototype={
k(a){return"MapEntry("+A.z(this.a)+": "+A.z(this.b)+")"}}
A.M.prototype={
gt(a){return A.y.prototype.gt.call(this,this)},
k(a){return"null"}}
A.y.prototype={$iy:1,
E(a,b){return this===b},
gt(a){return A.bV(this)},
k(a){return"Instance of '"+A.i5(this)+"'"},
toString(){return this.k(this)}}
A.fA.prototype={
k(a){return""},
$iav:1}
A.eA.prototype={
gl(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.p.prototype={}
A.h0.prototype={
gl(a){return a.length}}
A.dC.prototype={
k(a){return String(a)}}
A.dD.prototype={
k(a){return String(a)}}
A.dG.prototype={}
A.dH.prototype={
gaO(a){return new A.bb(a,"load",!1,t.b)}}
A.bk.prototype={
sU(a,b){a.height=b},
sV(a,b){a.width=b},
bQ(a,b){return a.getContext(b)},
$ibk:1}
A.aA.prototype={
gl(a){return a.length}}
A.hh.prototype={
gl(a){return a.length}}
A.B.prototype={$iB:1}
A.cs.prototype={
gl(a){return a.length}}
A.hi.prototype={}
A.ar.prototype={}
A.aM.prototype={}
A.hj.prototype={
gl(a){return a.length}}
A.hk.prototype={
gl(a){return a.length}}
A.hl.prototype={
gl(a){return a.length},
h(a,b){return a[b]}}
A.bP.prototype={$ibP:1}
A.hm.prototype={
k(a){return String(a)}}
A.ct.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.O.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.cu.prototype={
k(a){var s,r=a.left
r.toString
r="Rectangle ("+A.z(r)+", "
s=a.top
s.toString
return r+A.z(s)+") "+A.z(this.gV(a))+" x "+A.z(this.gU(a))},
E(a,b){var s,r
if(b==null)return!1
if(t.O.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=J.h_(b)
s=this.gV(a)===s.gV(b)&&this.gU(a)===s.gU(b)}else s=!1}else s=!1}else s=!1
return s},
gt(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.jD(r,s,this.gV(a),this.gU(a))},
gba(a){return a.height},
gU(a){var s=this.gba(a)
s.toString
return s},
gbk(a){return a.width},
gV(a){var s=this.gbk(a)
s.toString
return s},
$iaF:1}
A.dQ.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){A.a8(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.hn.prototype={
gl(a){return a.length}}
A.L.prototype={
k(a){return a.localName},
gaO(a){return new A.bb(a,"load",!1,t.b)},
$iL:1}
A.j.prototype={$ij:1}
A.c.prototype={
cN(a,b,c,d){t.bw.a(c)
if(c!=null)this.c5(a,b,c,!1)},
c5(a,b,c,d){return a.addEventListener(b,A.dx(t.bw.a(c),1),!1)},
$ic:1}
A.a9.prototype={$ia9:1}
A.dT.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.c8.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.dU.prototype={
gl(a){return a.length}}
A.dX.prototype={
gl(a){return a.length}}
A.aa.prototype={$iaa:1}
A.hE.prototype={
gl(a){return a.length}}
A.bq.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.A.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.bQ.prototype={$ibQ:1}
A.br.prototype={
sbr(a,b){a.checked=!1},
sdl(a,b){a.type=b},
$ibr:1}
A.aQ.prototype={$iaQ:1}
A.hQ.prototype={
k(a){return String(a)}}
A.bz.prototype={}
A.hW.prototype={
gl(a){return a.length}}
A.e8.prototype={
h(a,b){return A.b0(a.get(A.a8(b)))},
C(a,b){var s,r
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.b0(r.value[1]))}},
gO(a){var s=A.d([],t.s)
this.C(a,new A.hY(s))
return s},
gl(a){return a.size},
$iG:1}
A.hY.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:3}
A.e9.prototype={
h(a,b){return A.b0(a.get(A.a8(b)))},
C(a,b){var s,r
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.b0(r.value[1]))}},
gO(a){var s=A.d([],t.s)
this.C(a,new A.hZ(s))
return s},
gl(a){return a.size},
$iG:1}
A.hZ.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:3}
A.ab.prototype={$iab:1}
A.ea.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.cI.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.a5.prototype={$ia5:1}
A.q.prototype={
k(a){var s=a.nodeValue
return s==null?this.bW(a):s},
$iq:1}
A.cN.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.A.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.ac.prototype={
gl(a){return a.length},
$iac:1}
A.en.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.he.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.ep.prototype={
h(a,b){return A.b0(a.get(A.a8(b)))},
C(a,b){var s,r
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.b0(r.value[1]))}},
gO(a){var s=A.d([],t.s)
this.C(a,new A.ia(s))
return s},
gl(a){return a.size},
$iG:1}
A.ia.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:3}
A.er.prototype={
gl(a){return a.length}}
A.a6.prototype={$ia6:1}
A.ev.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.fY.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.ae.prototype={$iae:1}
A.ew.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.f7.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.af.prototype={
gl(a){return a.length},
$iaf:1}
A.ez.prototype={
h(a,b){return a.getItem(A.a8(b))},
C(a,b){var s,r,q
t.eA.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gO(a){var s=A.d([],t.s)
this.C(a,new A.ii(s))
return s},
gl(a){return a.length},
$iG:1}
A.ii.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:16}
A.X.prototype={$iX:1}
A.a7.prototype={$ia7:1}
A.U.prototype={$iU:1}
A.eD.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.c7.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.eE.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.a0.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.iq.prototype={
gl(a){return a.length}}
A.ag.prototype={$iag:1}
A.eF.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.aK.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.ir.prototype={
gl(a){return a.length}}
A.aG.prototype={}
A.iu.prototype={
k(a){return String(a)}}
A.c_.prototype={$ic_:1}
A.eN.prototype={
gl(a){return a.length}}
A.c1.prototype={
bH(a,b){var s
t.c4.a(b)
this.cl(a)
s=A.kR(b,t.di)
s.toString
return this.cr(a,s)},
cr(a,b){return a.requestAnimationFrame(A.dx(t.c4.a(b),1))},
cl(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iiz:1}
A.eW.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.g5.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.d1.prototype={
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
E(a,b){var s,r
if(b==null)return!1
if(t.O.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=J.h_(b)
if(s===r.gV(b)){s=a.height
s.toString
r=s===r.gU(b)
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
return A.jD(p,s,r,q)},
gba(a){return a.height},
gU(a){var s=a.height
s.toString
return s},
gbk(a){return a.width},
gV(a){var s=a.width
s.toString
return s}}
A.f7.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.g7.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.d6.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.A.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.fs.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.gf.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.fB.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.cP.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iv:1,
$ih:1,
$in:1}
A.jt.prototype={}
A.d2.prototype={
aL(a,b,c,d){var s=A.A(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.bI(this.a,this.b,a,!1,s.c)}}
A.bb.prototype={}
A.d3.prototype={}
A.iG.prototype={
$1(a){return this.a.$1(t.h.a(a))},
$S:10}
A.o.prototype={
gw(a){return new A.cx(a,this.gl(a),A.az(a).i("cx<o.E>"))}}
A.cx.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbb(J.k4(s.a,r))
s.c=r
return!0}s.sbb(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
sbb(a){this.d=this.$ti.i("1?").a(a)},
$iW:1}
A.eY.prototype={$ic:1,$iiz:1}
A.eX.prototype={}
A.f_.prototype={}
A.f0.prototype={}
A.f1.prototype={}
A.f2.prototype={}
A.f4.prototype={}
A.f5.prototype={}
A.f8.prototype={}
A.f9.prototype={}
A.fe.prototype={}
A.ff.prototype={}
A.fg.prototype={}
A.fh.prototype={}
A.fi.prototype={}
A.fj.prototype={}
A.fm.prototype={}
A.fn.prototype={}
A.fp.prototype={}
A.dc.prototype={}
A.dd.prototype={}
A.fq.prototype={}
A.fr.prototype={}
A.fv.prototype={}
A.fC.prototype={}
A.fD.prototype={}
A.dh.prototype={}
A.di.prototype={}
A.fF.prototype={}
A.fG.prototype={}
A.fN.prototype={}
A.fO.prototype={}
A.fP.prototype={}
A.fQ.prototype={}
A.fR.prototype={}
A.fS.prototype={}
A.fT.prototype={}
A.fU.prototype={}
A.fV.prototype={}
A.fW.prototype={}
A.fa.prototype={
A(a){if(a<=0||a>4294967296)throw A.e(A.lX("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
a6(){return Math.random()},
$ilW:1}
A.am.prototype={$iam:1}
A.e5.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){t.bG.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ih:1,
$in:1}
A.an.prototype={$ian:1}
A.ej.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){t.ck.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ih:1,
$in:1}
A.i4.prototype={
gl(a){return a.length}}
A.eB.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.a8(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ih:1,
$in:1}
A.l.prototype={
gaO(a){return new A.bb(a,"load",!1,t.b)}}
A.ap.prototype={$iap:1}
A.eG.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){t.cM.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ih:1,
$in:1}
A.fb.prototype={}
A.fc.prototype={}
A.fk.prototype={}
A.fl.prototype={}
A.fy.prototype={}
A.fz.prototype={}
A.fH.prototype={}
A.fI.prototype={}
A.h7.prototype={
gl(a){return a.length}}
A.dE.prototype={
h(a,b){return A.b0(a.get(A.a8(b)))},
C(a,b){var s,r
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.b0(r.value[1]))}},
gO(a){var s=A.d([],t.s)
this.C(a,new A.h8(s))
return s},
gl(a){return a.size},
$iG:1}
A.h8.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:3}
A.dF.prototype={
gl(a){return a.length}}
A.b3.prototype={}
A.ek.prototype={
gl(a){return a.length}}
A.eU.prototype={}
A.dI.prototype={$idI:1}
A.dY.prototype={$idY:1}
A.eo.prototype={$ieo:1}
A.bX.prototype={
bq(a,b){return a.bindVertexArray(b)},
bo(a,b,c){return a.bindBuffer(b,c)},
af(a,b,c){return a.bindFramebuffer(b,c)},
G(a,b,c){return a.bindTexture(b,c)},
cV(a,b){return a.deleteTexture(b)},
bx(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ak(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.jR(g)){s.cE(a,b,c,d,e,f,g,h,i,j)
return}if(t.fS.b(g)&&h==null&&r&&j==null){s.cF(a,b,c,d,e,f,g)
return}if(t.E.b(g)&&h==null&&r&&j==null){s.cG(a,b,c,d,e,f,g)
return}if(t.dz.b(g)&&h==null&&r&&j==null){s.cH(a,b,c,d,e,f,g)
return}throw A.e(A.ck("Incorrect number or type of arguments",null))},
di(a,b,c,d,e,f,g){return this.ak(a,b,c,d,e,f,g,null,null,null)},
cE(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cF(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cG(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cH(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
dm(a,b,c){return a.uniform1f(b,c)},
dn(a,b,c){return a.uniform1i(b,c)},
dq(a,b,c,d){return a.uniform2f(b,c,d)},
dr(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ds(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dt(a,b){return a.useProgram(b)},
$ibX:1}
A.aW.prototype={$iaW:1}
A.eI.prototype={$ieI:1}
A.eM.prototype={$ieM:1}
A.ex.prototype={
gl(a){return a.length},
h(a,b){var s
if(b>>>0!==b||b>=a.length)throw A.e(A.H(b,a,null,null,null))
s=A.b0(a.item(b))
s.toString
return s},
j(a,b,c){t.eO.a(c)
throw A.e(A.x("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ih:1,
$in:1}
A.ft.prototype={}
A.fu.prototype={}
A.e0.prototype={
as(a){var s=this.b
if(!(a>=0&&a<s.length))return A.b(s,a)
s=s[a]
return s==null?this.$ti.c.a(null):s},
gl(a){return this.c},
L(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.cn(b)
if(s<0)return!1;++p.d
r=p.c-1
q=p.as(r)
B.a.j(p.b,r,null)
p.c=r
if(s<r)if(p.a.$2(q,b)<=0)p.ao(q,s)
else p.c9(q,s)
return!0},
cI(){var s,r,q=this.$ti,p=A.d([],q.i("u<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
k(a){var s=this.b
return A.kf(A.kt(s,0,A.j8(this.c,"count",t.S),A.aq(s).c),"(",")")},
c3(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.aS(q,null,!1,n.i("1?"))
B.a.aX(p,0,o.c,o.b)
o.sbh(p)}o.ao(b,o.c++)},
cn(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.as(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.Q(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
ao(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.f.M(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.H()
if(q>0)break
B.a.j(o.b,b,p)}B.a.j(o.b,b,a)},
c9(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.$ti.c
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
if(p<q){j=i.as(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sbh(a){this.b=this.$ti.i("n<1?>").a(a)}}
A.aL.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.aL&&b.a===this.a},
gt(a){return B.f.gt(this.a)},
k(a){return"Color(0x"+B.z.bE(B.f.dj(this.a,16),8,"0")+")"}}
A.O.prototype={
d_(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.f.a7(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.e(A.aU(b.k(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.f.a7(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.e(A.ju(b.k(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
W(a,b,c){var s=B.f.a7(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
B(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.f.a7(d*s+c)
q=p.c
if(r>=q.length)throw A.e(A.ju("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
k(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.f.a7(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.z(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.cg.prototype={
gX(a){return B.d.D(this.c.d/24)},
gY(a){return B.d.D(this.c.e/36)},
bF(){var s=this.c
return new A.k(B.d.D(s.d/24),B.d.D(s.e/36))},
$ihD:1,
gbA(){return this.z}}
A.hc.prototype={}
A.dZ.prototype={
aH(a){return this.cY(t.J.a(a))},
cY(a){var s=0,r=A.du(t.H),q,p=this,o
var $async$aH=A.dw(function(b,c){if(b===1)return A.dp(c,r)
while(true)switch(s){case 0:o=p.e
if(o.length>3){s=1
break}B.a.m(o,a)
if(p.f){s=1
break}p.ab()
case 1:return A.dq(q,r)}})
return A.dr($async$aH,r)},
ab(){var s=0,r=A.du(t.z),q=1,p,o=[],n=this,m
var $async$ab=A.dw(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.f=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.aY(n.aa(),$async$ab)
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
case 4:return A.dq(null,r)
case 1:return A.dp(p,r)}})
return A.dr($async$ab,r)},
I(){var s=0,r=A.du(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$I=A.dw(function(a1,a2){if(a1===1)return A.dp(a2,r)
while(true)$async$outer:switch(s){case 0:b=p.a
a=b.b.d.a
a0=A.d(a.slice(0),A.aq(a))
a=p.b,o=B.a.gcM(a),n=t.b7,m=p.c,l=p.d,k=p.e,j=0,i=!1
case 4:if(!!0){s=5
break}case 6:if(!(h=a.length,h!==0)){s=7
break}if(0>=h){q=A.b(a,0)
s=1
break}s=8
return A.aY(a[0].T(0,b),$async$I)
case 8:g=a2
B.a.ae(m,g.r)
case 9:if(!(h=g.a,h!=null)){s=10
break}B.a.j(a,0,h)
s=11
return A.aY(h.T(0,b),$async$I)
case 11:g=a2
B.a.ae(m,g.r)
s=9
break
case 10:f=g.x
s=f!=null?12:13
break
case 12:s=!g.f&&k.length===0?14:16
break
case 14:s=l.length!==0?17:18
break
case 17:s=19
return A.aY(p.b8(),$async$I)
case 19:case 18:s=20
return A.aY(p.a5(f),$async$I)
case 20:s=15
break
case 16:B.a.m(l,f)
case 15:case 13:case 21:if(!(h=m.length,h!==0)){s=22
break}if(0>=h){q=A.b(m,-1)
s=1
break}s=23
return A.aY(m.pop().T(0,b),$async$I)
case 23:e=a2
B.a.ae(m,e.r)
case 24:if(!(h=e.a,h!=null)){s=25
break}s=26
return A.aY(h.T(0,b),$async$I)
case 26:e=a2
B.a.ae(m,e.r)
s=24
break
case 25:s=21
break
case 22:if(g.d)i=B.bd.bR(i,!0)
B.a.bG(a,0)
s=6
break
case 7:if(!i){s=3
break}for(;h=a0.length,j<h;){if(!(j>=0)){q=A.b(a0,j)
s=1
break $async$outer}d=a0[j];++j
if(d.bF()==null)continue
if(A.nr(n.a(o),d,b)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=l.length!==0?27:28
break
case 27:s=k.length===0?29:31
break
case 29:s=32
return A.aY(p.b8(),$async$I)
case 32:s=30
break
case 31:p.aE()
case 30:case 28:if(!i){s=1
break}for(b=a0.length,c=0;c<b;++c)a0[c].a=100
case 1:return A.dq(q,r)}})
return A.dr($async$I,r)},
aE(){var s=0,r=A.du(t.z),q=this,p,o,n
var $async$aE=A.dw(function(a,b){if(a===1)return A.dp(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.E)(p),++n)p[n].f.$0()
B.a.sl(p,0)
return A.dq(null,r)}})
return A.dr($async$aE,r)},
a5(a){var s=0,r=A.du(t.H),q=this,p
var $async$a5=A.dw(function(b,c){if(b===1)return A.dp(c,r)
while(true)switch(s){case 0:p=new A.J($.F,t.dS)
if(a!=null)B.a.m(q.d,a)
B.a.m(q.a.d,t.x.a(new A.hz(q,new A.bF(p,t.ez))))
s=2
return A.aY(p,$async$a5)
case 2:return A.dq(null,r)}})
return A.dr($async$a5,r)},
b8(){return this.a5(null)},
aa(){var s=0,r=A.du(t.H),q,p=this,o,n,m,l
var $async$aa=A.dw(function(a,b){if(a===1)return A.dp(b,r)
while(true)switch(s){case 0:l=p.e
if(l.length===0){s=1
break}o=B.a.bG(l,0)
switch(o){case B.W:case B.X:case B.Y:case B.Z:switch(o){case B.W:n=new A.k(0,-1)
break
case B.X:n=new A.k(1,0)
break
case B.Y:n=new A.k(0,1)
break
case B.Z:n=new A.k(-1,0)
break
default:A.V(A.aU(""))
n=null}m=new A.eb(n,p.a.b.a)
break
case B.bb:m=new A.es()
break
case B.am:l=p.a.b.a.c
m=new A.dV(new A.k(B.d.D(l.d/24),B.d.D(l.e/36)))
break
default:m=null
break}s=m!=null?3:4
break
case 3:B.a.m(p.b,m)
s=5
return A.aY(p.I(),$async$aa)
case 5:case 4:case 1:return A.dq(q,r)}})
return A.dr($async$aa,r)},
cq(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.R.a(a)
for(s=h.d,r=s.length,q=a.a,p=h.e,o=0;o<s.length;s.length===r||(0,A.E)(s),++o){n=s[o]
if(p.length>=2)n.b=1
m=n.c
l=m==null?0:B.f.M(q-m.a,1000)
A.l1(""+l)
n.c=a
k=l/B.f.M(n.a.a,1000)
j=n.d
i=n.b
i=n.b=B.d.cS(j?n.b=i+k:n.b=i-k,-1,1)
i>=1||i<0
n.e.$1(n)}B.a.m(h.a.d,t.x.a(h.gbf()))}}
A.hz.prototype={
$1(a){var s,r,q,p,o,n,m
t.R.a(a)
s=A.d([],t.f_)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.E)(q),++n){m=q[n]
if(m.b>=1||o.length!==0){m.f.$0()
B.a.m(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.E)(s),++n)B.a.L(q,s[n])
if(q.length===0)this.b.cU(0)
else B.a.m(r.a.d,t.x.a(this))},
$S:9}
A.bs.prototype={
k(a){return"ItemType."+this.b}}
A.bR.prototype={}
A.R.prototype={}
A.e_.prototype={
k(a){return"HandRequirement."+this.b}}
A.b5.prototype={
k(a){return"DamageType."+this.b}}
A.bo.prototype={
k(a){return"DiceType."+this.b}}
A.aw.prototype={
k(a){return"WeaponProperties."+this.b}}
A.hX.prototype={}
A.b4.prototype={}
A.bn.prototype={
k(a){return"CriticalEffect."+this.b}}
A.T.prototype={}
A.ch.prototype={
k(a){return"AmmoType."+this.b}}
A.ci.prototype={}
A.ad.prototype={}
A.bM.prototype={
k(a){return"ArmorUpgradeType."+this.b}}
A.a2.prototype={}
A.bZ.prototype={
k(a){return"TileType."+this.b}}
A.hS.prototype={}
A.bD.prototype={
k(a){return"TerrainType."+this.b}}
A.Y.prototype={
k(a){return"TerrainWidget."+this.b}}
A.bx.prototype={
k(a){return"LockState."+this.b}}
A.bj.prototype={
k(a){return"Biome."+this.b}}
A.b8.prototype={
gX(a){return this.b.a},
gY(a){return this.b.b},
sdh(a){t.d0.a(a)},
$ihD:1,
gbA(){return this.z}}
A.e6.prototype={}
A.k.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.k&&b.a===this.a&&b.b===this.b},
gt(a){return A.jD(this.a,this.b,B.D,B.D)},
u(a,b){return new A.k(this.a+b.a,this.b+b.b)},
k(a){return"("+this.a+", "+this.b+")"}}
A.hP.prototype={
k(a){return"LiquidKind."+this.b}}
A.P.prototype={
k(a){return"Interactable."+this.b}}
A.hT.prototype={}
A.ho.prototype={
cJ(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.a,i=j.a0(k,t.I),h=this.c
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.b.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.b||A.b_(A.hF(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.d=r
j.a3(b,k,i)},
F(a,b){var s=this
if(s.b){s.cJ(0,a)
s.b=!1}s.a.Z(a,0,B.f.M(s.d,2),A.bw(["u_resolution",A.d([b.a,b.b],t.t),"u_offset",A.d([b.d,b.e],t.n)],t.N,t.z))}}
A.dR.prototype={}
A.hr.prototype={
bZ(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
c.gS().a.J(c.a)
s=c.z
s.a.J(c.a)
r=c.Q
r.a.J(c.a)
c.gaG().b.J(c.a)
q=c.ga2()
p=c.a
q.d=p.createFramebuffer()
q.a.J(p)
q.b.J(p)
c.gbv().b.J(c.a)
c.dx.a.J(c.a)
for(q=c.b,p=q.d,o=p.b,n=o.c,m=n.length,l=c.r,k=0;k<n.length;n.length===m||(0,A.E)(n),++k){j=n[k]
i=j.b
h=A.kd(j.f,i.a*24,i.b*36)
if(h!=null){g=h.a=c.gS()
f=g.c
f.$ti.c.a(h);++f.d
f.c3(0,h)
g.e=!0
j.y=h}g=j.f
if(g===B.y||g===B.v){j.z=new A.e6(new A.aL(4294278144))
e=c.cx
if(e===$){d=A.lR(l)
A.fX(e,"lightingRenderer")
c.cx=d
e=d}B.a.m(e.x,j)}}c.bl(q.a,A.kW(p))
s.b=p
s.c=!0
r.c=p
r.b=!0
l.d5(o)
l.d1()
l.e=A.kW(p)
s=c.cy.b
new A.ba(s,A.A(s).i("ba<1>")).bB(new A.hs(c))},
gS(){var s,r=this,q=r.y
if(q===$){s=A.m3(r.a,r.r)
A.fX(r.y,"sprites")
r.y=s
q=s}return q},
gaG(){var s,r=this,q=r.ch
if(q===$){s=A.my()
s=A.aO(A.d([new A.S("a_position",35044,5126,2,s),new A.S("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.l,A.d([new A.t("u_resolution",B.e),new A.t("u_offset",B.e)],t.o),u.q)
A.fX(r.ch,"fovRenderer")
q=r.ch=new A.hu(r.r,s,new A.k(-1,-1))}return q},
ga2(){var s,r,q,p=this,o=u.p,n="a_position",m="u_resolution",l="u_block_size",k="u_player_visible_texture",j="u_offset",i=p.cx
if(i===$){s=t.G
r=t.o
q=A.aO(A.d([new A.S(n,35044,5126,2,new Float32Array(A.c6(B.t)))],s),u.k,A.d([new A.t(m,B.e),new A.t("u_source_position",B.e),new A.t(l,B.e),new A.t("u_source_color",B.a7),new A.t("u_source_strength",B.u),new A.t("u_time",B.u),new A.t("u_visible_texture",B.i),new A.t(k,B.i),new A.t(j,B.e)],r),o)
r=A.aO(A.d([new A.S(n,35044,5126,2,new Float32Array(A.c6(B.t)))],s),u.f,A.d([new A.t("u_light_texture",B.i),new A.t("u_game_world_texture",B.i),new A.t(k,B.i),new A.t(m,B.e),new A.t(l,B.e),new A.t(j,B.e)],r),o)
s=A.d([],t.cd)
A.fX(p.cx,"lightingRenderer")
i=p.cx=new A.e7(q,r,p.r,s)}return i},
gbv(){var s,r=this,q=r.db
if(q===$){s=A.aO(A.d([new A.S("a_position",35044,5126,2,new Float32Array(A.c6(B.t)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random (in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise (vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f*f*f+.6*f*f+.5*f)*color, 0.3);\n}\n",A.d([new A.t("u_resolution",B.e),new A.t("u_time",B.u),new A.t("u_offset",B.e),new A.t("u_player_vis_texture",B.i),new A.t("u_block_size",B.e)],t.o),u.h)
A.fX(r.db,"filters")
q=r.db=new A.hw(r.r,s)}return q},
F(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=3553
t.r.a(b)
e.a=b
s=e.c
r=s.clientWidth
q=s.clientHeight
if(r!==e.fx||q!==e.fy){B.V.sV(s,r)
B.V.sU(s,q)
e.fx=r
e.fy=q
s=e.dy
if(s!=null)B.c.cV(b,s)
s=b.createTexture()
e.dy=s
B.c.G(b,d,s)
B.c.ak(b,d,0,6408,e.fx,e.fy,0,6408,5121,null)
b.texParameteri(d,10241,9729)
b.texParameteri(d,10242,33071)
b.texParameteri(d,10243,33071)}s=e.x
p=e.r.e
o=Math.min(Math.max(B.d.aj(p.a*24-r/2),0),B.f.aj(2400-r))
n=Math.min(Math.max(B.d.aj(p.b*36-q/2),0),B.f.aj(1440-q))
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
l=e.id
l.a=r
l.b=q
l.d=p
l.e=s
l.c=a
b.viewport(0,0,r,q)
b.clearColor(0,0,0,1)
b.clear(16640)
b.enable(3042)
b.blendFuncSeparate(770,771,1,771)
s=e.e
p=e.z
j=e.Q
if(!s.a){B.c.af(b,36160,e.fr)
B.c.bx(b,36160,36064,d,e.dy,0)
b.clearColor(0,0,0,1)
b.clear(16640)
p.F(b,l)
j.F(b,l)
e.gS().F(b,l)
p=e.gbv()
j=p.a
i=j.a8(j.e,b)
b.activeTexture(33984)
B.c.G(b,d,i)
j=t.t
p.b.Z(b,4,3,A.bw(["u_time",l.c/1000,"u_resolution",A.d([l.a,l.b],j),"u_offset",A.d([l.d,l.e],t.n),"u_player_vis_texture",0,"u_block_size",A.d([24,36],j)],t.N,t.z))
B.c.af(b,36160,null)
e.ga2().r=s.b
e.ga2().f=e.dy
e.ga2().F(b,l)}else{p.F(b,l)
j.F(b,l)
e.gS().F(b,l)}s=e.gaG()
if(!s.a.e.E(0,s.c)||s.d)s.cL(b)
s.b.Z(b,4,48e3,A.bw(["u_resolution",A.d([l.a,l.b],t.t),"u_offset",A.d([l.d,l.e],t.n)],t.N,t.z))
b.finish()
h=A.kb(B.d.D(a),0)
s=e.d
g=A.d(s.slice(0),A.aq(s))
B.a.sl(s,0)
for(s=g.length,f=0;f<g.length;g.length===s||(0,A.E)(g),++f)g[f].$1(h)},
bl(a,b){var s,r
B.a.m(this.b.d.a,a)
s=a.c
s.saM(b.a)
s.saN(b.b)
r=this.gS()
s.sby(0,1)
r.m(0,s)
if(a.z!=null)B.a.m(this.ga2().x,a)}}
A.hs.prototype={
$1(a){var s,r
t.dg.a(a)
s=this.a.id
r=J.ak(a)
s.sd7(r.h(a,0))
s.sd8(r.h(a,1))},
$S:41}
A.aC.prototype={}
A.bO.prototype={}
A.ht.prototype={}
A.eH.prototype={
T(a,b){return A.aD(null,null,!1,B.p,!1)}}
A.eb.prototype={
T(a,b){var s,r,q,p,o,n,m,l,k,j,i=null,h=b.b.d,g=this.b,f=g.bF(),e=this.a,d=f.u(0,e),c=h.b
if(!c.d_(d))return A.aD(i,i,!1,B.p,!1)
s=c.h(0,d)
r=h.cP(d)
if((s.c===B.b||A.b_(A.hF(s.f)))&&r==null){q=s.b
p=q.a
if(p!==0){q=q.b
q=q===0||p===99||q===39}else q=!0
if(q)return A.aD(new A.eH(g,e.a,e.b),i,!1,B.p,!1)
if(s.f==null)return A.aD(i,i,!1,B.p,!1)
o=A.ni(s)
if(o.length!==0)return A.aD(B.a.gbV(o).b,i,!1,B.p,!1)
return A.aD(i,i,!1,B.p,!1)}n=A.d([],t.m)
if(r!=null){if(A.nk(r,g))return A.aD(i,i,!1,B.p,!1)
e=r.c
m=e.d
l=e.e
q=g.c
k=q.d
j=q.e
e.sX(0,k)
e.sY(0,q.e)
q.sX(0,m)
q.sY(0,l)
if(r.x){e=b.r
e.e=new A.k(B.d.D(k),B.d.D(j))
e.aT()}e=g.x
if(e){q=b.r
q.e=new A.k(B.d.D(m),B.d.D(l))
q.aT()}}else{e=g.c
e.saM(d.a)
e.saN(d.b)
e=g.x
if(e){q=b.r
q.e=d
q.aT()}}c.h(0,f)
if(s.r!=null)self.window.secretPlayAudio("sounds/"+("water_footsteps_"+(B.q.A(5)+1)+".mp3"))
g.a=0
return A.aD(i,i,!e,n,!0)},
k(a){return"Move{"+this.b.k(0)+" by "+this.a.k(0)+"}"}}
A.es.prototype={
T(a,b){return A.aD(null,null,!1,B.p,!0)}}
A.cW.prototype={
T(a,b){var s,r,q,p=b.b.d.b,o=this.b,n=p.h(0,o),m=n.y
n.f=this.a?B.r:B.w
s=b.gS()
m.toString
s.L(0,m)
s=n.f
s.toString
r=n.b
q=A.kd(s,24*r.a,36*r.b)
if(q!=null)b.gS().m(0,q)
n.y=q
b.r.bz(p,o)
b.gaG().d=!0
self.window.secretPlayAudio("sounds/door_1.mp3")
return A.aD(null,null,!1,B.p,!0)}}
A.dV.prototype={
T(a,b){var s,r,q=4294901760,p=new A.ao(4,4,0,0,null)
p.f=new A.aL(q)
s=this.a
p.saM(s.a)
p.saN(s.b)
p.sby(0,1)
r=A.k6(new A.e6(new A.aL(q)),!0,!1,p)
b.bl(r,s)
return A.aD(null,new A.bO(A.kb(0,2),new A.hx(this,p),new A.hy(b,r)),!1,B.p,!0)}}
A.hx.prototype={
$1(a){var s=this.b,r=a.b,q=this.a.a
s.sX(0,2400*r+(1-r)*q.a*24)
r=a.b
s.sY(0,1440*r+(1-r)*q.b*36)},
$S:21}
A.hy.prototype={
$0(){var s=this.a,r=this.b
B.a.L(s.b.d.a,r)
s.gS().L(0,r.c)
if(r.z!=null)B.a.L(s.ga2().x,r)},
$S:0}
A.hw.prototype={}
A.hv.prototype={
ce(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.c.G(b,f,c)
s=A.kk(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
r=this.a_(a)
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
s[h]=g}B.c.ak(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
a8(a,b){var s,r,q=a.b*100+a.a
if(q<0||q>=4000)return null
s=this.f
r=s.h(0,a)
if(r==null){r=new A.fE(b.createTexture())
s.j(0,a,r)}if(r.b){this.ce(a,b,r.a)
r.b=!1}return r.a},
a_(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.jF(p,p+4000,B.f.bY(s.byteLength,r))
return new A.iv(100,A.kk(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
aT(){var s,r,q,p,o=this.a_(this.e).c
for(s=this.c,r=o.length,q=0;q<4000;++q){p=s[q]
if(!(q<r))return A.b(o,q)
s[q]=p|o[q]}},
d1(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.ax(new A.k(s,r))
for(q=this.f,q=q.gaU(q),q=q.gw(q);q.n();)q.gp(q).b=!0},
bz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.L.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.W(0,r,q)
o=o.c===B.b||A.b_(A.lK(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.ax(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]===1)g.ax(new A.k(m,l))}s=g.a_(b)
s.toString
for(p=g.f,p=p.gbu(p),p=p.gw(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]===1)i.b.b=!0}},
d5(a){return this.bz(a,null)},
ax(a){var s,r,q,p=this.a_(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=1
for(q=0;q<4;++q)this.ct(new A.bY(1,-1,1),new A.i6(B.bh[q],a),o)},
cs(a,b){if(a<0||a>=b.byteLength)return
if(!(a>=0&&a<b.length))return A.b(b,a)
b[a]=1},
bc(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
ay(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===0},
ct(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.r
B.a.sl(e,0)
B.a.m(e,a)
for(;s=e.length,s!==0;){if(0>=s)return A.b(e,-1)
r=e.pop()
s=r.a
q=B.d.ai(s*r.b+0.5)
p=B.d.cR(s*r.c-0.5)
for(o=s+1,n=2*s,m=q,l=null;m<=p;++m,l=j){k=b.dk(0,new A.k(s,m))
j=k.b*100+k.a
i=f.bc(j,c)
if(!i)h=m>=s*r.b&&m<=s*r.c
else h=!0
if(h)f.cs(j,c)
h=l!=null
if(h&&f.bc(l,c)&&f.ay(j,c))r.b=(2*m-1)/n
if(h&&f.ay(l,c)&&i){g=new A.bY(o,r.b,r.c)
g.c=(2*m-1)/n
B.a.m(e,g)}}if(l!=null&&f.ay(l,c))B.a.m(e,new A.bY(o,r.b,r.c))}}}
A.fE.prototype={}
A.iv.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]===1}}
A.bl.prototype={
k(a){return"Cardinal."+this.b}}
A.i6.prototype={
dk(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a){case B.ai:s=r.b
return new A.k(s.a+p,s.b-q)
case B.aj:s=r.b
return new A.k(s.a+p,s.b+q)
case B.ak:s=r.b
return new A.k(s.a+q,s.b+p)
case B.al:s=r.b
return new A.k(s.a-q,s.b+p)}}}
A.bY.prototype={}
A.cz.prototype={}
A.e7.prototype={
cf(a,b){var s,r,q,p=this.c,o=p.a_(a).c,n=p.a_(b).c
for(p=o.length,s=n.length,r=0;r<4000;++r){if(!(r<p))return A.b(o,r)
if(o[r]===1){if(!(r<s))return A.b(n,r)
q=n[r]===1}else q=!1
if(q)return!1}return!0},
F(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=3553,a0="u_player_visible_texture",a1=a3.a
if(a1!==b.y||a3.b!==b.z){b.y=a1
s=a3.b
b.z=s
r=a2.createTexture()
b.e=r
B.c.G(a2,a,r)
B.c.ak(a2,a,0,6408,a1,s,0,6408,5121,null)
a2.texParameteri(a,10241,9729)
a2.texParameteri(a,10242,33071)
a2.texParameteri(a,10243,33071)}B.c.af(a2,36160,b.d)
B.c.bx(a2,36160,36064,a,b.e,0)
a2.clearColor(0,0,0,1)
a2.clear(16640)
a1=b.c
s=a1.a8(a1.e,a2)
s.toString
a2.activeTexture(33985)
B.c.G(a2,a,s)
for(r=b.x,q=r.length,p=b.a,o=t.t,n=t.n,m=t.N,l=t.z,k=0;k<r.length;r.length===q||(0,A.E)(r),++k){j=r[k]
i=j.gbA()
h=new A.k(j.gX(j),j.gY(j))
g=a1.a8(h,a2)
if(g==null)continue
if(b.r&&b.cf(a1.e,h))continue
a2.activeTexture(33984)
B.c.G(a2,a,g)
f=A.d([a3.a,a3.b],o)
e=A.d([j.gX(j),j.gY(j)],o)
d=A.d([a3.d,a3.e],n)
c=i.b.a
p.Z(a2,4,3,A.bw(["u_resolution",f,"u_source_strength",7,"u_block_size",B.as,"u_source_position",e,"u_offset",d,"u_source_color",A.d([(c>>>16&255)/255,(c>>>8&255)/255,(c&255)/255,0.2],n),"u_time",a3.c/1000,a0,1,"u_visible_texture",0],m,l))}B.c.af(a2,36160,null)
a2.activeTexture(33984)
B.c.G(a2,a,b.e)
a2.activeTexture(33985)
B.c.G(a2,a,b.f)
a2.activeTexture(33986)
B.c.G(a2,a,s)
b.b.Z(a2,4,3,A.bw(["u_light_texture",0,"u_game_world_texture",1,a0,2,"u_block_size",B.as,"u_resolution",A.d([a3.a,a3.b],o),"u_offset",A.d([a3.d,a3.e],n)],m,l))}}
A.as.prototype={
k(a){return"Directions."+this.b}}
A.ic.prototype={}
A.S.prototype={}
A.t.prototype={}
A.bE.prototype={
k(a){return"UniformKind."+this.b}}
A.eT.prototype={}
A.fK.prototype={}
A.hC.prototype={
J(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.kK(a,i.a,35633),f=A.kK(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.Q(a.getProgramParameter(e,35714),!0)){A.jX(J.bL(a.getProgramInfoLog(e)))
A.V(A.aU("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.c.bq(a,A.ai(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.E)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.fK(a.getUniformLocation(A.ai(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.E)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.ai(i.e,h),n)
k=a.createBuffer()
B.c.bo(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.eT(k,j))}},
a0(a,b){A.n9(b,t.ak,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
a3(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.e(A.aU("WARNING, NO ATTRIBUTE "+b))
B.c.bo(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
Z(a,b,c,d){var s,r,q,p,o,n
t.d1.a(d)
B.c.dt(a,A.ai(this.e,"_program"))
B.c.bq(a,A.ai(this.f,"_vertexArrayObject"))
for(s=d.gbu(d),s=s.gw(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.a8(p)
n=r.h(0,p)
if(n==null)A.V(A.aU("WARNING, NO UNIFORM "+p))
switch(n.b.b){case B.u:B.c.dm(a,n.a,A.ay(o))
break
case B.e:q=J.ak(o)
B.c.dq(a,n.a,A.ay(q.h(o,0)),A.ay(q.h(o,1)))
break
case B.bD:q=J.ak(o)
B.c.dr(a,n.a,A.ay(q.h(o,0)),A.ay(q.h(o,1)),A.ay(q.h(o,2)))
break
case B.a7:q=J.ak(o)
B.c.ds(a,n.a,A.ay(q.h(o,0)),A.ay(q.h(o,1)),A.ay(q.h(o,2)),A.ay(q.h(o,3)))
break
case B.i:B.c.dn(a,n.a,A.c5(o))
break}}a.drawArrays(b,0,c)}}
A.i8.prototype={
sd7(a){A.jN(a)},
sd8(a){A.jN(a)}}
A.i9.prototype={}
A.eu.prototype={$im1:1}
A.jf.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.c.G(q,r,p)
B.c.di(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.ah(0,p)},
$S:10}
A.ie.prototype={
c0(a,b){A.nn(a,"CursesTransparent_24x36.png").bJ(new A.ig(this),t.P)},
m(a,b){var s,r,q,p,o,n
b.a=this
s=this.c
r=s.$ti
r.c.a(b);++s.d
q=s.c
p=s.b.length
if(q===p){o=p*2+1
if(o<7)o=7
n=A.aS(o,null,!1,r.i("1?"))
B.a.aX(n,0,s.c,s.b)
s.sbh(n)}s.ao(b,s.c++)
this.e=!0},
L(a,b){this.c.L(0,b)
b.a=null
this.e=!0},
cK(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="a_position",a4="a_texcoord",a5=this.c,a6=a5.c,a7=this.a,a8=t.ak,a9=a6*12,b0=A.jC(a7.a0(a3,a8).buffer,0,a9),b1=A.jC(a7.a0(a4,a8).buffer,0,a9),b2=A.jC(a7.a0("a_color",a8).buffer,0,a6*24),b3=a5.cI()
B.a.am(b3,a5.a)
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
if(a1==null)B.bw.cW(b2,a0,a0+24,0)
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
b2[j]=n}}a7.a3(b4,a3,b0)
a7.a3(b4,a4,b1)
a7.a3(b4,"a_color",b2)},
F(a,b){var s,r=this
if(r.b==null||r.c.c===0)return
if(r.e){r.cK(a)
r.e=!1}s=r.d
s.a8(s.e,a)
a.activeTexture(33984)
B.c.G(a,3553,r.b)
r.a.Z(a,4,r.c.c*6,A.bw(["u_texture",0,"u_resolution",A.d([b.a,b.b],t.t),"u_offset",A.d([b.d,b.e],t.n)],t.N,t.z))}}
A.ig.prototype={
$1(a){this.a.b=t.dy.a(a)},
$S:22}
A.ao.prototype={
sX(a,b){var s=this.a
if(s!=null)s.e=!0
this.d=b},
sY(a,b){var s=this.a
if(s!=null)s.e=!0
this.e=b},
saM(a){var s=this.a
if(s!=null)s.e=!0
this.d=a*24},
saN(a){var s=this.a
if(s!=null)s.e=!0
this.e=a*36},
sby(a,b){var s
this.r=b
s=this.a
if(s!=null)s.e=!0}}
A.hV.prototype={}
A.ip.prototype={
cD(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.b==null)return
s=d.a
r=s.a0("a_color",t.I)
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
h=!(e.c===B.b||A.b_(A.hF(e.f)))}else h=!1
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
r[h]=1}}}s.a3(a,"a_color",r)},
F(a,b){var s=this
if(s.c){s.cD(a)
s.c=!1}s.a.Z(a,4,48e3,A.bw(["u_resolution",A.d([b.a,b.b],t.t),"u_offset",A.d([b.d,b.e],t.n)],t.N,t.z))}}
A.hu.prototype={
cL(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.a_(a2.e),a4=a1.b,a5=a4.a0("a_color",t.I)
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
a4.a3(a6,"a_color",a5)}}
A.iA.prototype={}
A.j7.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:8}
A.ih.prototype={
cP(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.f){m=n.c
l=B.d.D(m.d/24)
if(l===q){m=B.d.D(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.dJ.prototype={
aY(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.O(a,a0,A.aS(a*a0,B.h,!1,t.a5),t.p)
c.a=b
s=new A.hg(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.u()
if(typeof m!=="number")return A.cd(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.cd(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.cd(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.cd(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.cd(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.cd(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.cd(f)
e=n+m+k+i+h+g+l+f
if(J.Q(s.$2(q,o),1))if(e<4)a1.B(0,B.h,q,o)
else a1.B(0,B.b,q,o)
else if(e>5)a1.B(0,B.b,q,o)
else a1.B(0,B.h,q,o)}d=c.a
c.a=a1}}}
A.hg.prototype={
$2(a,b){return J.Q(this.a.a.W(0,a,b),B.b)?0:1},
$S:24}
A.hA.prototype={
aS(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.e8.a(b0)
s=t.q
r=A.d([],s)
q=new A.hB(a9)
for(p=J.aI(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.dv()
if(n>=1)B.a.m(r,o)}if(r.length===0)return
m=A.d([],t.ap)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.E)(r),++j){i=r[j]
h=A.d([],k)
g=i.a
f=i.b
if(o.h(0,new A.k(g+1,f))===B.b)B.a.m(h,B.k)
if(o.h(0,new A.k(g+-1,f))===B.b)B.a.m(h,B.m)
if(o.h(0,new A.k(g,f+1))===B.b)B.a.m(h,B.l)
if(o.h(0,new A.k(g,f+-1))===B.b)B.a.m(h,B.j)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.E)(h),++e){d=h[e]
c=A.a0(i,d)
b=A.d([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.b)break
a2=A.lF(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.a0(a,a2[0]))!==B.h){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.a0(a,a2[1]))===B.h}else a1=!0
if(a1)break
a=A.a0(a,d)
B.a.m(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.h&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.a0(a,A.lG(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.m(m,new A.cX(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.bv(t.v,t.aO)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.E)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.N(l,n))continue
if(a4.aF(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.j(0,n,a5)}else a4.j(0,n,a5)}for(s=a4.gaU(a4),s=s.gw(s),n=this.a,l=a9.e,k=a8.b;s.n();){g=s.gp(s)
f=g.d
a0=p.h(0,a8)
a0.toString
B.a.m(a0,f)
a0=p.h(0,f)
a0.toString
B.a.m(a0,a8)
for(g=g.c,a0=g.length,j=0;a1=g.length,j<a1;g.length===a0||(0,A.E)(g),++j)o.j(0,g[j],B.h)
a0=n.A(a1)
if(!(a0>=0&&a0<g.length))return A.b(g,a0)
a7=g[a0]
l.j(0,a7,B.C)
B.a.m(k,a7)
B.a.m(f.b,a7)}for(s=a4.gaU(a4),s=s.gw(s);s.n();)this.aS(s.gp(s).d,a9,b0,b1)}}
A.hB.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.u(0,new A.k(1,0)))===B.b?1:0
if(s.h(0,a.u(0,new A.k(-1,0)))===B.b)++r
if(s.h(0,a.u(0,new A.k(0,-1)))===B.b)++r
return s.h(0,a.u(0,new A.k(1,1)))===B.b?r+1:r},
$S:25}
A.hd.prototype={
bM(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.B(0,o.a6()>0.45?B.h:B.b,n,m)
p.B(0,B.a3,n,m)}new A.dJ(a7).aY(3)
for(p=q-1,l=0;l<r;++l){s.B(0,B.b,l,0)
s.B(0,B.b,l,p)}for(o=r-1,k=0;k<q;++k){s.B(0,B.b,0,k)
s.B(0,B.b,o,k)}j=new A.he(a7)
i=new A.hf(a7)
for(l=1;l<o;l=g)for(h=l-1,g=l+1,k=1;k<p;++k){if(!j.$2(l,k))continue
f=i.$2(g,k)
e=i.$2(h,k)
d=k+1
c=i.$2(l,d)
b=k-1
a=i.$2(l,b)
if(f&&e&&c&&a){s.B(0,B.b,l,k)
continue}if(j.$2(h,d)&&c&&e){s.B(0,B.b,l,k)
continue}if(j.$2(g,d)&&c&&f){s.B(0,B.b,l,k)
continue}if(j.$2(g,b)&&a&&f){s.B(0,B.b,l,k)
continue}if(j.$2(h,b)&&a&&e){s.B(0,B.b,l,k)
continue}}p=t.j
o=A.jz(p)
a0=new A.dW(a7,A.d([],t.g2),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.k(l,k)
if(o.N(0,a1)||s.h(0,a1)===B.b)continue
a0.bw(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.E)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gw(a3);d.n();)s.j(0,d.gp(d),B.b)
else B.a.m(o,new A.a3(a3,A.d([],h),A.d([],h),A.hq(a3)))}a4=A.bv(p,t.v)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.a,a2=0;b=o.length,a2<b;o.length===r||(0,A.E)(o),++a2){a3=o[a2]
B.a.m(p,a3)
h.j(0,a3,A.d([],d))
for(b=J.aI(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.E)(o),++a2){a3=o[a2]
r=a3.a
p=J.ak(r)
if(p.gl(r)>a6){a6=p.gl(r)
a5=a3}}this.aS(a5,a7,a4,q)
for(r=q.bD(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.E)(r),++a2){a3=r[a2]
B.a.L(o,a3)
for(p=J.aI(a3.a);p.n();)s.j(0,p.gp(p),B.b)}A.l4(o,a7)}}
A.he.prototype={
$2(a,b){return J.Q(this.a.b.W(0,a,b),B.h)},
$S:6}
A.hf.prototype={
$2(a,b){return J.Q(this.a.b.W(0,a,b),B.b)},
$S:6}
A.aB.prototype={}
A.eO.prototype={}
A.cj.prototype={}
A.cP.prototype={
R(a,b){this.$ti.c.a(a)
return Math.min(B.U.R(a,b),B.b1.R(a,b)+B.aM.R(a,b))}}
A.dK.prototype={
R(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.o)return 1/0
s=A.jp(a,B.j,b)
r=A.jp(a,B.l,b)
q=A.jp(a,B.k,b)
p=A.jp(a,B.m,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.dB.prototype={
R(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.o)return 1/0
if(A.bK(a,B.j,b)+A.bK(a,B.l,b)+A.bK(a,B.k,b)+A.bK(a,B.m,b)===1)return 1
return 1/0}}
A.dO.prototype={
R(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.o)return 1/0
if(A.bK(a,B.j,b)+A.bK(a,B.l,b)+A.bK(a,B.k,b)+A.bK(a,B.m,b)===2)return 1
return 1/0}}
A.cf.prototype={
R(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.o)return 1/0
s=A.a0(a,B.j)
r=A.a0(a,B.l)
q=A.a0(a,B.k)
p=A.a0(a,B.m)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.d_.prototype={
d9(a,b){return this.b.$2(a,b)}}
A.jn.prototype={
$2(a,b){b.e.j(0,a,B.a6)},
$S:1}
A.jj.prototype={
$2(a,b){b.e.j(0,a,B.aG)},
$S:1}
A.jl.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.B)s.j(0,a,B.a4)
else s.j(0,a,B.a5)},
$S:1}
A.ji.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.B)s.j(0,a,B.a4)
else s.j(0,a,B.a5)},
$S:1}
A.jk.prototype={
$2(a,b){b.e.j(0,a,B.Q)},
$S:1}
A.jm.prototype={
$2(a,b){b.e.j(0,a,B.aH)
b.f.j(0,a,B.bo)},
$S:1}
A.jh.prototype={
$2(a,b){b.e.j(0,a,B.R)},
$S:1}
A.jo.prototype={
$2(a,b){var s=t.v
s.a(a)
s.a(b)
return J.a1(a.a)-J.a1(b.a)},
$S:28}
A.cy.prototype={}
A.h9.prototype={
bK(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=4000,c=new A.O(100,40,A.aS(d,B.h,!1,t.a5),t.p),b=A.aS(d,0,!1,t.i),a=A.aS(d,B.a3,!1,t.d0),a0=new A.O(100,40,A.aS(d,B.o,!1,t.gQ),t.gg),a1=t.a,a2=new A.cy(a3,c,new A.O(100,40,b,t.cL),new A.O(100,40,a,t.dl),a0,new A.O(100,40,A.aS(d,B.ax,!1,t.ad),t.aE),new A.O(100,40,A.aS(d,null,!1,t.br),t.b1),new A.hp(A.d([],a1),A.bv(t.v,t.h5)),A.d([],a1))
b=a3.a
switch(b){case B.ad:new A.hd(B.q).bM(a2)
break
case B.b_:new A.ib(A.jz(t.j),B.q).bP(a2)
break
case B.b0:case B.ac:case B.ae:new A.il(B.q).bN(a2)
break}s=new Float32Array(4000)
new A.i3().bO(s,100,40)
r=new A.O(100,40,A.jA(d,new A.ha(),t.W),t.L)
for(q=0;q<100;++q)for(a=q!==0,a1=q!==99,p=0;p<40;++p)if(!a||!a1||p===0||p===39){c.B(0,B.b,q,p)
a0.B(0,B.o,q,p)}this.b.bL(a2.y,a2,a3.c)
for(a=a2.c,a1=this.a,o=a2.d,n=a2.r,b=b!==B.ae,m=a2.f,q=0;q<100;++q)for(p=0;p<40;++p){l=J.Q(c.W(0,q,p),B.h)
k=c.W(0,q,p)
k.toString
j=new A.k(q,p)
a1.a6()
i=r.h(0,j)
h=o.h(0,j)
g=a0.h(0,j)
i.b=j
i.c=k
i.sdh(o.h(0,j))
k=p*100+q
if(!(k<4000))return A.b(s,k)
f=s[k]
e=n.W(0,q,p)
if(J.Q(a.h(0,j),1))i.r=B.bf
else if(g!==B.o)switch(g){case B.C:if(m.h(0,j)===B.aw)i.f=B.M
else i.f=B.r
break
case B.a5:i.f=B.y
break
case B.o:break
case B.aG:i.f=B.O
break
case B.a6:i.f=B.N
break
case B.bB:i.f=B.x
break
case B.Q:i.f=B.L
if(e!=null)B.a.m(i.e,e)
break
case B.R:i.f=B.J
break
case B.aH:i.f=B.K
break
case B.aI:i.f=B.I
break
case B.a4:i.f=B.v
break}else if(l&&f<0.42&&h!==B.B&&b)i.f=B.x
if(e!=null)B.a.m(i.e,e)}return new A.hT(r,a3)}}
A.ha.prototype={
$1(a){var s=A.d([],t.de)
return new A.b8(B.A,B.h,s)},
$S:8}
A.cX.prototype={
gl(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.hp.prototype={
bD(){var s,r,q,p,o,n=A.d([],t.a)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.E)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.m(n,o)}return n}}
A.a3.prototype={
k(a){return"Room{"+J.a1(this.a)+"; "+this.d.k(0)+"}"}}
A.dW.prototype={
bw(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.d([a],k),i=A.d([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.N(0,o))continue
q.m(0,o)
B.a.m(i,o)
for(n=0;n<8;++n){m=A.a0(o,B.bi[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.N(0,m)&&k.h(0,m)===B.h)B.a.m(j,m)}}B.a.m(this.b,i)}}
A.e2.prototype={
bn(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.R)s=B.aq
else if(a instanceof A.T)s=B.ao
else s=a instanceof A.ad?B.ap:B.ar
B.a.m(r.a,a)
B.a.m(r.b,s)
B.a.m(r.c,b)
r.d+=b},
bm(a){return this.bn(a,10)},
da(a){var s,r,q,p,o={},n=o.a=0,m=A.jA(this.c.length,new A.hL(o,this),t.i),l=a.a6()
for(s=m.length,r=l>-1;n<s;++n){q=m[n]
if(r&&l<=q){s=this.a
if(!(n<s.length))return A.b(s,n)
s=s[n]
if(s instanceof A.R)p=B.aq
else if(s instanceof A.T)p=B.ao
else if(s instanceof A.ad)p=B.ap
else{J.bL(s)
p=B.ar}$.ke=$.ke+1
return new A.bR(s,p)}}throw A.e(A.aU(""))},
bT(a){var s,r,q=B.a.d0(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
bS(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p===0)return
B.a.j(r,q,p-2)
this.d-=2}}}
A.hL.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.b(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:30}
A.i1.prototype={}
A.hG.prototype={
bL(a,b,c){var s,r,q
t.h5.a(a)
s=new A.e2(A.d([],t.f),A.d([],t.gr),A.d([],t.t))
r=s.gcO()
new A.ax(B.bl,t.bB.a(new A.hH()),t.eL).C(0,r)
new A.ax(B.bj,t.aL.a(new A.hI()),t.fm).C(0,r)
new A.ax(B.bk,t.ei.a(new A.hJ()),t.aC).C(0,r)
new A.ax(B.bg,t.gj.a(new A.hK()),t.dP).C(0,r)
s.bm(B.ah)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.E)(a),++q)this.ci(s,a[q],b)},
ci(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.ak(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.A
break}r=j.length
if(r!==0){r=l.A(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.A(k.gl(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.Q||q===B.o
else r=!1
if(r)break;++i}if(s.E(0,B.A))return
p=a.da(l)
n=p.b
if(!J.Q(n,B.ah)){a.bT(n)
a.bS(p.c)
o.j(0,s,p)}}}
A.hH.prototype={
$1(a){return t.eV.a(a).b<=1000},
$S:31}
A.hI.prototype={
$1(a){return t.bP.a(a).f<=1000},
$S:32}
A.hJ.prototype={
$1(a){return t.e4.a(a).r<=1000},
$S:33}
A.hK.prototype={
$1(a){return t.fW.a(a).c<=1000},
$S:34}
A.i3.prototype={
P(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
bO(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
for(s=0;s<b0;++s)for(r=s*0.1,q=0;q<b1;++q){p=q*b0+s
o=q*0.1
n=B.d.ai(r)&255
m=B.d.ai(o)&255
l=B.d.ai(0.3)&255
k=r-Math.floor(r)
j=o-Math.floor(o)
i=0.3-Math.floor(0.3)
h=k*k*k*(k*(k*6-15)+10)
g=j*j*j*(j*(j*6-15)+10)
o=$.li()
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
c=a8.P(0,o[d],k,j,i)
if(!(a0<f))return A.b(o,a0)
a2=k-1
c+=h*(a8.P(0,o[a0],a2,j,i)-c)
if(!(b<f))return A.b(o,b)
a3=j-1
a4=a8.P(0,o[b],k,a3,i)
if(!(a1<f))return A.b(o,a1)
c+=g*(a4+h*(a8.P(0,o[a1],a2,a3,i)-a4)-c)
a4=d+1
if(!(a4<f))return A.b(o,a4)
a5=i-1
a4=a8.P(0,o[a4],k,j,a5)
a6=a0+1
if(!(a6<f))return A.b(o,a6)
a4+=h*(a8.P(0,o[a6],a2,j,a5)-a4)
a6=b+1
if(!(a6<f))return A.b(o,a6)
a6=a8.P(0,o[a6],k,a3,a5)
a7=a1+1
if(!(a7<f))return A.b(o,a7)
a5=a8.P(0,o[a7],a2,a3,a5)
if(!(p<4000))return A.b(a9,p)
a9[p]=(c+i*i*i*(i*(i*6-15)+10)*(a4+g*(a6+h*(a5-a6)-a4)-c)+1)/2}}}
A.b6.prototype={
k(a){return"RuinOrientation."+this.b}}
A.cS.prototype={
k(a){return"RoomSizeKind."+this.b}}
A.ib.prototype={
bP(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a,a1=a0.A(5)
if(!(a1>=0&&a1<5))return A.b(B.av,a1)
s=B.av[a1]
r=a.aZ(B.aA)
q=a.co(s)
p=A.lH(a.bt(a2,r,new A.k(B.d.D(Math.max(1,q.a-r.a/2)),B.d.D(Math.max(1,q.b-A.bV(r)/2)))))
a1=a2.y
B.a.m(a1,p)
for(o=t.q,n=0;n<2000;){m=new A.k(a0.A(98)+1,a0.A(38)+1)
l=[B.P,B.P,B.P,B.az]
k=a0.A(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a.aZ(l[k])
if(!a.dd(a2,r,m)){l=a.bt(a2,r,m)
B.a.m(a1,new A.a3(l,A.d([],o),A.d([],o),A.hq(l)))}else ++n}for(a0=a.b,o=a2.d,l=a2.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.k(j,i)
o.B(0,B.B,j,i)
if(!a0.N(0,h))l.j(0,h,B.b)}g=A.bv(t.j,t.v)
for(a0=a1.length,o=a2.x,k=o.a,f=o.b,e=t.a,d=0;d<a1.length;a1.length===a0||(0,A.E)(a1),++d){c=a1[d]
B.a.m(k,c)
f.j(0,c,A.d([],e))
for(b=J.aI(c.a);b.n();)g.j(0,b.gp(b),c)}a.aS(p,a2,g,o)
for(a0=o.bD(),o=a0.length,d=0;d<a0.length;a0.length===o||(0,A.E)(a0),++d){c=a0[d]
B.a.L(a1,c)
for(k=J.aI(c.a);k.n();)l.j(0,k.gp(k),B.b)}A.l4(a1,a2)},
aZ(a){var s
switch(a){case B.P:s=this.a
return new A.cR(s.A(5)+5,s.A(5)+5)
case B.az:s=this.a
return new A.cR(s.A(10)+9,s.A(10)+9)
case B.aA:s=this.a
return new A.cR(s.A(10)+20,s.A(10)+20)}},
co(a){switch(a){case B.aB:return new A.k(50,10)
case B.aC:return new A.k(50,30)
case B.aD:return new A.k(75,20)
case B.aE:return new A.k(25,20)
case B.aF:return new A.k(50,20)}},
bt(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.d([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.k(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.m(0,d)
r.j(0,d,f?B.b:B.h)
if(!f)B.a.m(a,d)}return a},
dd(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.k(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.b||n.N(0,i))return!0}return!1}}
A.cR.prototype={}
A.il.prototype={
cm(a){var s,r,q=a.a.a===B.ac?B.a3:B.bA
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
bN(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.cm(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.a6()>0.6)r.j(0,new A.k(q,p),B.b)
new A.dJ(b8).aY(10)
o=A.jz(t.j)
n=new A.dW(b8,A.d([],t.g2),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.k(k,j)
if(o.N(0,i)||r.h(0,i)===B.b)continue
n.bw(i)}o=n.b
B.a.am(o,new A.im())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.E)(h),++f)r.j(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.j(e,q,B.aI)
B.a.j(o,q,B.h)}$label0$1:for(o=b8.y,e=t.q,d=b8.d,c=0;c<3;){b=s.A(3)+5
a=s.A(3)+5
q=s.A(100-b)
p=s.A(40-a)
for(a0=q-1,a1=q+b,a2=a1+1,a3=p-1,a4=p+a,a5=a4+1;a0<a2;++a0)for(a6=a0>=0,a7=a0<m,a8=a3;a8<a5;++a8){i=new A.k(a0,a8)
if(!(a6&&a8>=0&&a7&&a8<l))continue $label0$1
if(g.h(0,i)!==B.o||r.h(0,i)!==B.h)continue $label0$1}a9=A.d([],e)
b0=A.d([],e)
for(a2=a1-1,a5=a4-1,a0=q;a0<a1;++a0)for(a6=a0-q!==0,a7=a0!==a2,a3=p;a3<a4;++a3){i=new A.k(a0,a3)
if(!a6||!a7||a3-p===0||a3===a5){r.j(0,i,B.b)
B.a.m(a9,i)}else B.a.m(b0,i)
d.j(0,i,B.B)}b1=new A.io(b8)
B.a.bU(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.A
break}b3=a9[f]
b4=A.a0(b3,B.j)
b5=A.a0(b3,B.l)
b6=A.a0(b3,B.m)
b7=A.a0(b3,B.k)
if(A.b_(b1.$1(b4))&&A.b_(b1.$1(b5))){b2=b3
break}if(A.b_(b1.$1(b6))&&A.b_(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.E)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.h)
g.j(0,b2,B.C)
B.a.m(o,new A.a3(b0,A.d([],e),A.d([],e),A.hq(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.E)(o),++f)A.dz(o[f],$.jr(),b8)}}
A.im.prototype={
$2(a,b){var s=t.fb
s.a(a)
return J.a1(s.a(b))-J.a1(a)},
$S:35}
A.io.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.h&&s.e.h(0,a)===B.o},
$S:36}
A.iw.prototype={
c1(a){var s=t.eN.a(new A.ix(this))
t.Z.a(null)
A.bI(a,"keydown",s,!1,t.cf)
A.bI(a,"mousemove",t.h2.a(new A.iy(this)),!1,t.V)}}
A.ix.prototype={
$1(a){var s
t.cf.a(a)
s=$.mA.h(0,a.key)
if(s!=null){a.preventDefault()
this.a.a.m(0,s)}else A.jX(a.key)},
$S:37}
A.iy.prototype={
$1(a){var s,r
t.V.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
this.a.b.m(0,A.d([s,r],t.n))},
$S:2}
A.al.prototype={
k(a){return"InputCommand."+this.b}}
A.h1.prototype={
J(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="base",f="checkbox",e="click"
t.fQ.a(a)
s=document
h.b=t.cO.a(s.querySelector("#action_bar"))
for(r=h.c,q=t.do,p=q.i("~(1)?"),o=t.Z,q=q.c,n=0;n<3;++n){m=r[n]
l=s.createElement("button")
l.innerText=m
k=p.a(new A.h2(h))
o.a(null)
A.bI(l,e,k,!1,q)
A.ai(h.b,g).appendChild(l)}j=A.kc(f)
B.an.sbr(j,!1)
r=p.a(new A.h3(a,j))
o.a(null)
A.bI(j,e,r,!1,q)
A.ai(h.b,g).appendChild(s.createTextNode("Toggle Low Graphics"))
A.ai(h.b,g).appendChild(j)
i=A.kc(f)
B.an.sbr(i,!1)
A.bI(i,e,p.a(new A.h4(a,i)),!1,q)
A.ai(h.b,g).appendChild(s.createTextNode("Toggle Light Culling"))
A.ai(h.b,g).appendChild(i)}}
A.h2.prototype={
$1(a){var s,r
t.V.a(a)
s=this.a.a
r=A.ai(s.a,"_modal").style
r.display="none"
s=A.ai(s.a,"_modal").style
s.display="block"},
$S:2}
A.h3.prototype={
$1(a){var s
t.V.a(a)
s=this.b.checked
s.toString
this.a.a=s},
$S:2}
A.h4.prototype={
$1(a){var s
t.V.a(a)
s=this.b.checked
s.toString
this.a.b=s},
$S:2}
A.i_.prototype={
c_(){var s,r=document.getElementById("myModal")
r.toString
this.a=r
r=window
s=t.h2.a(new A.i0(this))
t.Z.a(null)
A.bI(r,"click",s,!1,t.V)}}
A.i0.prototype={
$1(a){var s=this.a
if(A.mx(t.V.a(a).target)===A.ai(s.a,"_modal")){s=A.ai(s.a,"_modal").style
s.display="none"}},
$S:2};(function aliases(){var s=J.a.prototype
s.bW=s.k
s=J.bt.prototype
s.bX=s.k})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_1u,m=hunkHelpers.installInstanceTearOff
s(J.u.prototype,"gcM","m",13)
r(A,"n3","m8",4)
r(A,"n4","m9",4)
r(A,"n5","ma",4)
q(A,"kU","mY",0)
p(A,"n7","mS",11)
q(A,"n6","mR",0)
o(A.J.prototype,"gcc","a1",11)
var l
n(l=A.dZ.prototype,"gcX","aH",18)
n(l,"gbf","cq",9)
p(A,"nu","mX",40)
m(A.e2.prototype,"gcO",0,1,null,["$2","$1"],["bn","bm"],29,0,0)
r(A,"kZ","nt",27)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.y,null)
q(A.y,[A.jx,J.a,J.cl,A.C,A.id,A.h,A.aR,A.W,A.a4,A.cq,A.is,A.i2,A.cw,A.de,A.bm,A.w,A.hO,A.cG,A.au,A.f6,A.fJ,A.iZ,A.eQ,A.cn,A.eV,A.bJ,A.J,A.eR,A.bC,A.aV,A.df,A.eS,A.d0,A.eZ,A.bd,A.fx,A.dm,A.dn,A.fd,A.d5,A.f,A.cT,A.aN,A.iF,A.el,A.cU,A.iH,A.bT,A.M,A.fA,A.eA,A.hi,A.jt,A.o,A.cx,A.eY,A.fa,A.e0,A.aL,A.O,A.cg,A.hc,A.dZ,A.bR,A.R,A.hX,A.b4,A.T,A.ci,A.ad,A.a2,A.hS,A.b8,A.e6,A.k,A.hT,A.i9,A.dR,A.hr,A.aC,A.bO,A.ht,A.hv,A.fE,A.iv,A.i6,A.bY,A.cz,A.S,A.t,A.eT,A.fK,A.hC,A.i8,A.eu,A.ao,A.hV,A.iA,A.ih,A.dJ,A.hA,A.aB,A.d_,A.cy,A.h9,A.cX,A.hp,A.a3,A.dW,A.e2,A.i1,A.hG,A.i3,A.cR,A.il,A.iw,A.h1,A.i_])
q(J.a,[J.cA,J.cC,J.bt,J.u,J.cD,J.bS,A.bB,A.c,A.h0,A.dG,A.aM,A.B,A.eX,A.ar,A.hl,A.hm,A.f_,A.cu,A.f1,A.hn,A.j,A.f4,A.aa,A.hE,A.f8,A.hQ,A.hW,A.fe,A.ff,A.ab,A.fg,A.fi,A.ac,A.fm,A.fp,A.ae,A.fq,A.af,A.fv,A.X,A.fC,A.iq,A.ag,A.fF,A.ir,A.iu,A.fN,A.fP,A.fR,A.fT,A.fV,A.am,A.fb,A.an,A.fk,A.i4,A.fy,A.ap,A.fH,A.h7,A.eU,A.dI,A.dY,A.eo,A.bX,A.aW,A.eI,A.eM,A.ft])
q(J.bt,[J.em,J.cY,J.aP])
r(J.hM,J.u)
q(J.cD,[J.cB,J.e3])
q(A.C,[A.cE,A.b9,A.e4,A.eK,A.eq,A.cm,A.f3,A.ei,A.aJ,A.eL,A.eJ,A.aT,A.dN,A.dP])
q(A.h,[A.m,A.by,A.ax])
q(A.m,[A.at,A.cF])
q(A.at,[A.cV,A.cJ])
r(A.cv,A.by)
q(A.W,[A.cI,A.cZ])
r(A.cr,A.cq)
r(A.cO,A.b9)
q(A.bm,[A.dL,A.dM,A.eC,A.hN,A.jb,A.jd,A.iC,A.iB,A.j2,A.iL,A.iT,A.ij,A.iX,A.hU,A.iG,A.hz,A.hs,A.hx,A.jf,A.ig,A.j7,A.hB,A.ha,A.hL,A.hH,A.hI,A.hJ,A.hK,A.io,A.ix,A.iy,A.h2,A.h3,A.h4,A.i0])
q(A.eC,[A.ey,A.bN])
r(A.eP,A.cm)
r(A.cH,A.w)
r(A.bu,A.cH)
q(A.dM,[A.jc,A.j3,A.j6,A.iM,A.hR,A.hY,A.hZ,A.ia,A.ii,A.h8,A.hg,A.he,A.hf,A.jn,A.jj,A.jl,A.ji,A.jk,A.jm,A.jh,A.jo,A.im])
r(A.bU,A.bB)
q(A.bU,[A.d7,A.d9])
r(A.d8,A.d7)
r(A.bA,A.d8)
r(A.da,A.d9)
r(A.cL,A.da)
r(A.cK,A.bA)
q(A.cL,[A.ec,A.ed,A.ee,A.ef,A.eg,A.cM,A.eh])
r(A.dj,A.f3)
q(A.dL,[A.iD,A.iE,A.j_,A.iI,A.iP,A.iN,A.iK,A.iO,A.iJ,A.iS,A.iR,A.iQ,A.ik,A.iY,A.iV,A.j5,A.iW,A.hy])
r(A.bF,A.eV)
r(A.c2,A.df)
q(A.bC,[A.dg,A.d2])
r(A.ba,A.dg)
r(A.c3,A.d0)
r(A.bG,A.eZ)
r(A.aH,A.bd)
r(A.fo,A.dm)
r(A.db,A.dn)
r(A.d4,A.db)
q(A.aJ,[A.bW,A.e1])
q(A.c,[A.q,A.dU,A.a6,A.dc,A.a7,A.U,A.dh,A.eN,A.c1,A.dF,A.b3])
q(A.q,[A.L,A.aA])
q(A.L,[A.p,A.l])
q(A.p,[A.dC,A.dD,A.dH,A.bk,A.bP,A.dX,A.bQ,A.br,A.bz,A.er])
r(A.hh,A.aM)
r(A.cs,A.eX)
q(A.ar,[A.hj,A.hk])
r(A.f0,A.f_)
r(A.ct,A.f0)
r(A.f2,A.f1)
r(A.dQ,A.f2)
r(A.a9,A.dG)
r(A.f5,A.f4)
r(A.dT,A.f5)
r(A.f9,A.f8)
r(A.bq,A.f9)
r(A.aG,A.j)
q(A.aG,[A.aQ,A.a5])
r(A.e8,A.fe)
r(A.e9,A.ff)
r(A.fh,A.fg)
r(A.ea,A.fh)
r(A.fj,A.fi)
r(A.cN,A.fj)
r(A.fn,A.fm)
r(A.en,A.fn)
r(A.ep,A.fp)
r(A.dd,A.dc)
r(A.ev,A.dd)
r(A.fr,A.fq)
r(A.ew,A.fr)
r(A.ez,A.fv)
r(A.fD,A.fC)
r(A.eD,A.fD)
r(A.di,A.dh)
r(A.eE,A.di)
r(A.fG,A.fF)
r(A.eF,A.fG)
r(A.c_,A.bz)
r(A.fO,A.fN)
r(A.eW,A.fO)
r(A.d1,A.cu)
r(A.fQ,A.fP)
r(A.f7,A.fQ)
r(A.fS,A.fR)
r(A.d6,A.fS)
r(A.fU,A.fT)
r(A.fs,A.fU)
r(A.fW,A.fV)
r(A.fB,A.fW)
r(A.bb,A.d2)
r(A.d3,A.aV)
r(A.fc,A.fb)
r(A.e5,A.fc)
r(A.fl,A.fk)
r(A.ej,A.fl)
r(A.fz,A.fy)
r(A.eB,A.fz)
r(A.fI,A.fH)
r(A.eG,A.fI)
r(A.dE,A.eU)
r(A.ek,A.b3)
r(A.fu,A.ft)
r(A.ex,A.fu)
q(A.iF,[A.bs,A.e_,A.b5,A.bo,A.aw,A.bn,A.ch,A.bM,A.bZ,A.bD,A.Y,A.bx,A.bj,A.hP,A.P,A.bl,A.as,A.bE,A.b6,A.cS,A.al])
q(A.i9,[A.ho,A.hw,A.e7,A.ic,A.ie,A.ip,A.hu])
q(A.aC,[A.eH,A.eb,A.es,A.cW,A.dV])
q(A.hA,[A.hd,A.ib])
q(A.aB,[A.eO,A.cj,A.cP])
q(A.eO,[A.dK,A.dB,A.dO,A.cf])
s(A.d7,A.f)
s(A.d8,A.a4)
s(A.d9,A.f)
s(A.da,A.a4)
s(A.c2,A.eS)
s(A.dn,A.cT)
s(A.eX,A.hi)
s(A.f_,A.f)
s(A.f0,A.o)
s(A.f1,A.f)
s(A.f2,A.o)
s(A.f4,A.f)
s(A.f5,A.o)
s(A.f8,A.f)
s(A.f9,A.o)
s(A.fe,A.w)
s(A.ff,A.w)
s(A.fg,A.f)
s(A.fh,A.o)
s(A.fi,A.f)
s(A.fj,A.o)
s(A.fm,A.f)
s(A.fn,A.o)
s(A.fp,A.w)
s(A.dc,A.f)
s(A.dd,A.o)
s(A.fq,A.f)
s(A.fr,A.o)
s(A.fv,A.w)
s(A.fC,A.f)
s(A.fD,A.o)
s(A.dh,A.f)
s(A.di,A.o)
s(A.fF,A.f)
s(A.fG,A.o)
s(A.fN,A.f)
s(A.fO,A.o)
s(A.fP,A.f)
s(A.fQ,A.o)
s(A.fR,A.f)
s(A.fS,A.o)
s(A.fT,A.f)
s(A.fU,A.o)
s(A.fV,A.f)
s(A.fW,A.o)
s(A.fb,A.f)
s(A.fc,A.o)
s(A.fk,A.f)
s(A.fl,A.o)
s(A.fy,A.f)
s(A.fz,A.o)
s(A.fH,A.f)
s(A.fI,A.o)
s(A.eU,A.w)
s(A.ft,A.f)
s(A.fu,A.o)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",D:"double",K:"num",r:"String",N:"bool",M:"Null",n:"List"},mangledNames:{},types:["~()","~(k,cy)","~(a5)","~(r,@)","~(~())","M(@)","N(i,i)","M()","b8(i)","~(aN)","~(j)","~(y,av)","M(y,av)","~(y?)","~(y?,y?)","~(i,@)","~(r,r)","M(@,av)","aE<~>(al)","~(@)","J<@>(@)","~(bO)","M(aW)","@(@)","i(i,i)","i(k)","M(~())","~(K)","i(a3,a3)","~(y[i])","D(i)","N(R)","N(T)","N(ad)","N(a2)","i(n<k>,n<k>)","N(k)","~(aQ)","@(r)","@(@,r)","i(ao,ao)","~(n<D>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.mp(v.typeUniverse,JSON.parse('{"em":"bt","cY":"bt","aP":"bt","nA":"j","nL":"j","nC":"b3","nB":"c","nS":"c","nU":"c","nz":"l","nM":"l","nE":"p","nN":"q","nK":"q","nT":"a5","o6":"U","nG":"aG","nF":"aA","nW":"aA","nO":"bq","nH":"B","nI":"X","nD":"bz","nR":"bA","nQ":"bB","cA":{"N":[]},"cC":{"M":[]},"u":{"n":["1"],"m":["1"],"h":["1"]},"hM":{"u":["1"],"n":["1"],"m":["1"],"h":["1"]},"cl":{"W":["1"]},"cD":{"D":[],"K":[]},"cB":{"D":[],"i":[],"K":[]},"e3":{"D":[],"K":[]},"bS":{"r":[]},"cE":{"C":[]},"m":{"h":["1"]},"at":{"m":["1"],"h":["1"]},"cV":{"at":["1"],"m":["1"],"h":["1"],"h.E":"1","at.E":"1"},"aR":{"W":["1"]},"by":{"h":["2"],"h.E":"2"},"cv":{"by":["1","2"],"m":["2"],"h":["2"],"h.E":"2"},"cI":{"W":["2"]},"cJ":{"at":["2"],"m":["2"],"h":["2"],"h.E":"2","at.E":"2"},"ax":{"h":["1"],"h.E":"1"},"cZ":{"W":["1"]},"cq":{"G":["1","2"]},"cr":{"cq":["1","2"],"G":["1","2"]},"cO":{"b9":[],"C":[]},"e4":{"C":[]},"eK":{"C":[]},"de":{"av":[]},"bm":{"bp":[]},"dL":{"bp":[]},"dM":{"bp":[]},"eC":{"bp":[]},"ey":{"bp":[]},"bN":{"bp":[]},"eq":{"C":[]},"eP":{"C":[]},"bu":{"w":["1","2"],"ki":["1","2"],"G":["1","2"],"w.K":"1","w.V":"2"},"cF":{"m":["1"],"h":["1"],"h.E":"1"},"cG":{"W":["1"]},"bB":{"ah":[]},"bU":{"v":["1"],"ah":[]},"bA":{"f":["D"],"v":["D"],"n":["D"],"m":["D"],"ah":[],"h":["D"],"a4":["D"],"f.E":"D"},"cL":{"f":["i"],"v":["i"],"n":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"]},"cK":{"f":["D"],"jv":[],"v":["D"],"n":["D"],"m":["D"],"ah":[],"h":["D"],"a4":["D"],"f.E":"D"},"ec":{"f":["i"],"v":["i"],"n":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"],"f.E":"i"},"ed":{"f":["i"],"v":["i"],"n":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"],"f.E":"i"},"ee":{"f":["i"],"v":["i"],"n":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"],"f.E":"i"},"ef":{"f":["i"],"v":["i"],"n":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"],"f.E":"i"},"eg":{"f":["i"],"v":["i"],"n":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"],"f.E":"i"},"cM":{"f":["i"],"v":["i"],"n":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"],"f.E":"i"},"eh":{"f":["i"],"m5":[],"v":["i"],"n":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"],"f.E":"i"},"f3":{"C":[]},"dj":{"b9":[],"C":[]},"J":{"aE":["1"]},"cn":{"C":[]},"bF":{"eV":["1"]},"df":{"kq":["1"],"kB":["1"],"bH":["1"]},"c2":{"eS":["1"],"df":["1"],"kq":["1"],"kB":["1"],"bH":["1"]},"ba":{"dg":["1"],"bC":["1"]},"c3":{"d0":["1"],"aV":["1"],"bH":["1"]},"d0":{"aV":["1"],"bH":["1"]},"dg":{"bC":["1"]},"bG":{"eZ":["1"]},"aH":{"bd":["1"]},"dm":{"kw":[]},"fo":{"dm":[],"kw":[]},"d4":{"cT":["1"],"kp":["1"],"m":["1"],"h":["1"]},"d5":{"W":["1"]},"cH":{"w":["1","2"],"G":["1","2"]},"w":{"G":["1","2"]},"db":{"cT":["1"],"kp":["1"],"m":["1"],"h":["1"]},"D":{"K":[]},"i":{"K":[]},"n":{"m":["1"],"h":["1"]},"cm":{"C":[]},"b9":{"C":[]},"ei":{"C":[]},"aJ":{"C":[]},"bW":{"C":[]},"e1":{"C":[]},"eL":{"C":[]},"eJ":{"C":[]},"aT":{"C":[]},"dN":{"C":[]},"el":{"C":[]},"cU":{"C":[]},"dP":{"C":[]},"fA":{"av":[]},"aQ":{"j":[]},"a5":{"j":[]},"q":{"c":[]},"a6":{"c":[]},"a7":{"c":[]},"U":{"c":[]},"p":{"L":[],"q":[],"c":[]},"dC":{"L":[],"q":[],"c":[]},"dD":{"L":[],"q":[],"c":[]},"dH":{"L":[],"q":[],"c":[]},"bk":{"L":[],"q":[],"c":[]},"aA":{"q":[],"c":[]},"bP":{"L":[],"q":[],"c":[]},"ct":{"f":["aF<K>"],"o":["aF<K>"],"n":["aF<K>"],"v":["aF<K>"],"m":["aF<K>"],"h":["aF<K>"],"o.E":"aF<K>","f.E":"aF<K>"},"cu":{"aF":["K"]},"dQ":{"f":["r"],"o":["r"],"n":["r"],"v":["r"],"m":["r"],"h":["r"],"o.E":"r","f.E":"r"},"L":{"q":[],"c":[]},"dT":{"f":["a9"],"o":["a9"],"n":["a9"],"v":["a9"],"m":["a9"],"h":["a9"],"o.E":"a9","f.E":"a9"},"dU":{"c":[]},"dX":{"L":[],"q":[],"c":[]},"bq":{"f":["q"],"o":["q"],"n":["q"],"v":["q"],"m":["q"],"h":["q"],"o.E":"q","f.E":"q"},"bQ":{"L":[],"q":[],"c":[]},"br":{"L":[],"q":[],"c":[]},"bz":{"L":[],"q":[],"c":[]},"e8":{"w":["r","@"],"G":["r","@"],"w.K":"r","w.V":"@"},"e9":{"w":["r","@"],"G":["r","@"],"w.K":"r","w.V":"@"},"ea":{"f":["ab"],"o":["ab"],"n":["ab"],"v":["ab"],"m":["ab"],"h":["ab"],"o.E":"ab","f.E":"ab"},"cN":{"f":["q"],"o":["q"],"n":["q"],"v":["q"],"m":["q"],"h":["q"],"o.E":"q","f.E":"q"},"en":{"f":["ac"],"o":["ac"],"n":["ac"],"v":["ac"],"m":["ac"],"h":["ac"],"o.E":"ac","f.E":"ac"},"ep":{"w":["r","@"],"G":["r","@"],"w.K":"r","w.V":"@"},"er":{"L":[],"q":[],"c":[]},"ev":{"f":["a6"],"o":["a6"],"n":["a6"],"v":["a6"],"c":[],"m":["a6"],"h":["a6"],"o.E":"a6","f.E":"a6"},"ew":{"f":["ae"],"o":["ae"],"n":["ae"],"v":["ae"],"m":["ae"],"h":["ae"],"o.E":"ae","f.E":"ae"},"ez":{"w":["r","r"],"G":["r","r"],"w.K":"r","w.V":"r"},"eD":{"f":["U"],"o":["U"],"n":["U"],"v":["U"],"m":["U"],"h":["U"],"o.E":"U","f.E":"U"},"eE":{"f":["a7"],"o":["a7"],"n":["a7"],"v":["a7"],"c":[],"m":["a7"],"h":["a7"],"o.E":"a7","f.E":"a7"},"eF":{"f":["ag"],"o":["ag"],"n":["ag"],"v":["ag"],"m":["ag"],"h":["ag"],"o.E":"ag","f.E":"ag"},"aG":{"j":[]},"c_":{"L":[],"q":[],"c":[]},"eN":{"c":[]},"c1":{"iz":[],"c":[]},"eW":{"f":["B"],"o":["B"],"n":["B"],"v":["B"],"m":["B"],"h":["B"],"o.E":"B","f.E":"B"},"d1":{"aF":["K"]},"f7":{"f":["aa?"],"o":["aa?"],"n":["aa?"],"v":["aa?"],"m":["aa?"],"h":["aa?"],"o.E":"aa?","f.E":"aa?"},"d6":{"f":["q"],"o":["q"],"n":["q"],"v":["q"],"m":["q"],"h":["q"],"o.E":"q","f.E":"q"},"fs":{"f":["af"],"o":["af"],"n":["af"],"v":["af"],"m":["af"],"h":["af"],"o.E":"af","f.E":"af"},"fB":{"f":["X"],"o":["X"],"n":["X"],"v":["X"],"m":["X"],"h":["X"],"o.E":"X","f.E":"X"},"d2":{"bC":["1"]},"bb":{"d2":["1"],"bC":["1"]},"d3":{"aV":["1"]},"cx":{"W":["1"]},"eY":{"iz":[],"c":[]},"fa":{"lW":[]},"e5":{"f":["am"],"o":["am"],"n":["am"],"m":["am"],"h":["am"],"o.E":"am","f.E":"am"},"ej":{"f":["an"],"o":["an"],"n":["an"],"m":["an"],"h":["an"],"o.E":"an","f.E":"an"},"eB":{"f":["r"],"o":["r"],"n":["r"],"m":["r"],"h":["r"],"o.E":"r","f.E":"r"},"l":{"L":[],"q":[],"c":[]},"eG":{"f":["ap"],"o":["ap"],"n":["ap"],"m":["ap"],"h":["ap"],"o.E":"ap","f.E":"ap"},"dE":{"w":["r","@"],"G":["r","@"],"w.K":"r","w.V":"@"},"dF":{"c":[]},"b3":{"c":[]},"ek":{"c":[]},"ex":{"f":["G<@,@>"],"o":["G<@,@>"],"n":["G<@,@>"],"m":["G<@,@>"],"h":["G<@,@>"],"o.E":"G<@,@>","f.E":"G<@,@>"},"cg":{"hD":[]},"b8":{"hD":[]},"eH":{"aC":[]},"eb":{"aC":[]},"es":{"aC":[]},"cW":{"aC":[]},"dV":{"aC":[]},"eu":{"m1":[]},"eO":{"aB":["k"]},"cj":{"aB":["1"]},"cP":{"aB":["1"]},"dK":{"aB":["k"]},"dB":{"aB":["k"]},"dO":{"aB":["k"]},"cf":{"aB":["k"]},"jv":{"n":["D"],"m":["D"],"h":["D"],"ah":[]}}'))
A.mo(v.typeUniverse,JSON.parse('{"m":1,"bU":1,"cH":2,"db":1,"dn":1}'))
var u={h:"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",q:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",p:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",l:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",k:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x , u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n\n    float dist = distance(snapped_position, (u_source_position + vec2(0.5, 0.5)) * u_block_size) / 50.0;\n    if (dist > u_source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, u_source_strength, dist);\n    outColor = vec4(u_source_color.rgb * scale, scale);\n}\n",f:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // front and back textures are already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 front = texture(u_light_texture, d);\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.b1
return{a7:s("@<~>"),eV:s("R"),fW:s("a2"),u:s("cn"),E:s("bk"),g5:s("B"),cO:s("bP"),R:s("aN"),gw:s("m<@>"),v:s("a3"),fQ:s("dR"),U:s("C"),h:s("j"),c8:s("a9"),I:s("jv"),k:s("bp"),d:s("aE<@>"),aE:s("O<bx>"),dl:s("O<bD>"),gg:s("O<Y>"),L:s("O<b8>"),p:s("O<bZ>"),cL:s("O<D>"),b1:s("O<bR?>"),ep:s("e0<ao>"),fS:s("bQ"),J:s("al"),gk:s("br"),hf:s("h<@>"),az:s("u<cg>"),e:s("u<bM>"),G:s("u<S>"),f_:s("u<bO>"),X:s("u<as>"),a:s("u<a3>"),m:s("u<aC>"),cd:s("u<hD>"),eU:s("u<al>"),Y:s("u<cz>"),de:s("u<bR>"),gr:s("u<bs>"),g2:s("u<n<k>>"),f:s("u<y>"),q:s("u<k>"),dG:s("u<bY>"),s:s("u<r>"),ap:s("u<cX>"),o:s("u<t>"),B:s("u<aw>"),D:s("u<d_>"),n:s("u<D>"),gn:s("u<@>"),t:s("u<i>"),c6:s("u<~(aN)>"),T:s("cC"),g:s("aP"),aU:s("v<@>"),cf:s("aQ"),bG:s("am"),h5:s("n<a3>"),fb:s("n<k>"),dg:s("n<D>"),ad:s("bx"),e8:s("G<k,a3>"),d1:s("G<r,@>"),eO:s("G<@,@>"),bP:s("T"),cI:s("ab"),V:s("a5"),A:s("q"),P:s("M"),ck:s("an"),K:s("y"),he:s("ac"),j:s("k"),e4:s("ad"),O:s("aF<K>"),r:s("bX"),fY:s("a6"),f7:s("ae"),gf:s("af"),d8:s("ao"),l:s("av"),N:s("r"),cP:s("X"),d0:s("bD"),gQ:s("Y"),a0:s("a7"),c7:s("U"),dy:s("aW"),W:s("b8"),a5:s("bZ"),aK:s("ag"),cM:s("ap"),aO:s("cX"),eK:s("b9"),ak:s("ah"),bI:s("cY"),dz:s("c_"),eL:s("ax<R>"),dP:s("ax<a2>"),fm:s("ax<T>"),aC:s("ax<ad>"),h0:s("d_"),ci:s("iz"),f0:s("bF<aW>"),ez:s("bF<~>"),f2:s("eT"),b:s("bb<j>"),do:s("bb<a5>"),du:s("J<aW>"),c:s("J<@>"),fJ:s("J<i>"),dS:s("J<~>"),fv:s("fw<y?>"),dR:s("fE"),gz:s("fK"),cJ:s("N"),bB:s("N(R)"),gj:s("N(a2)"),aL:s("N(T)"),al:s("N(y)"),ei:s("N(ad)"),i:s("D"),z:s("@"),fO:s("@()"),y:s("@(y)"),C:s("@(y,av)"),S:s("i"),aw:s("0&*"),_:s("y*"),ch:s("c?"),eH:s("aE<M>?"),g7:s("aa?"),br:s("bR?"),Q:s("y?"),gM:s("ao?"),F:s("bJ<@,@>?"),hg:s("fd?"),bw:s("@(j)?"),Z:s("~()?"),eN:s("~(aQ)?"),h2:s("~(a5)?"),di:s("K"),H:s("~"),M:s("~()"),x:s("~(aN)"),b7:s("~(aC)"),d5:s("~(y)"),da:s("~(y,av)"),eA:s("~(r,r)"),w:s("~(r,@)"),c4:s("~(K)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.V=A.bk.prototype
B.an=A.br.prototype
B.bc=J.a.prototype
B.a=J.u.prototype
B.bd=J.cA.prototype
B.f=J.cB.prototype
B.d=J.cD.prototype
B.z=J.bS.prototype
B.be=J.aP.prototype
B.bw=A.cK.prototype
B.ay=J.em.prototype
B.c=A.bX.prototype
B.a8=J.cY.prototype
B.aK=A.c1.prototype
B.a6=new A.Y("table")
B.aL=new A.cf(B.a6)
B.R=new A.Y("bookshelf")
B.aM=new A.cf(B.R)
B.ac=new A.bj("surface")
B.ad=new A.bj("caves")
B.b_=new A.bj("ruins")
B.ae=new A.bj("village")
B.b0=new A.bj("snow")
B.b1=new A.dB()
B.bQ=new A.cj(A.b1("cj<k>"))
B.T=new A.dK()
B.U=new A.dO()
B.af=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.b2=function() {
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
B.b7=function(getTagFallback) {
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
B.b3=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.b4=function(hooks) {
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
B.b6=function(hooks) {
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
B.b5=function(hooks) {
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
B.ag=function(hooks) { return hooks; }

B.ah=new A.i1()
B.b8=new A.cP(A.b1("cP<k>"))
B.b9=new A.el()
B.D=new A.id()
B.q=new A.fa()
B.n=new A.fo()
B.ba=new A.fA()
B.ai=new A.bl("north")
B.aj=new A.bl("south")
B.ak=new A.bl("east")
B.al=new A.bl("west")
B.E=new A.as("se")
B.F=new A.as("ne")
B.G=new A.as("sw")
B.H=new A.as("nw")
B.j=new A.as("n")
B.k=new A.as("e")
B.l=new A.as("s")
B.m=new A.as("w")
B.W=new A.al("north")
B.X=new A.al("east")
B.Y=new A.al("south")
B.Z=new A.al("west")
B.bb=new A.al("skip")
B.am=new A.al("fire")
B.a_=new A.P("none")
B.a0=new A.P("stairsUp")
B.I=new A.P("tree")
B.J=new A.P("bookshelf")
B.K=new A.P("mechanism")
B.a1=new A.P("activatedMechanism")
B.L=new A.P("chest")
B.v=new A.P("mechanicalLight")
B.a2=new A.P("stairsDown")
B.r=new A.P("door")
B.w=new A.P("openDoor")
B.M=new A.P("lockedDoor")
B.x=new A.P("grass")
B.y=new A.P("torch")
B.N=new A.P("table")
B.O=new A.P("chair")
B.ao=new A.bs("melee")
B.ap=new A.bs("ranged")
B.aq=new A.bs("armor")
B.ar=new A.bs("other")
B.bf=new A.hP("water")
B.a9=new A.bM("light")
B.aa=new A.bM("heavy")
B.ab=new A.bM("powered")
B.co=A.d(s([B.a9,B.aa,B.ab]),t.e)
B.aN=new A.a2(1)
B.aO=new A.a2(1)
B.aP=new A.a2(1)
B.aQ=new A.a2(1)
B.cf=A.d(s([B.ab]),t.e)
B.aR=new A.a2(2)
B.ch=A.d(s([B.a9,B.aa]),t.e)
B.aS=new A.a2(2)
B.bg=A.d(s([B.aN,B.aO,B.aP,B.aQ,B.aR,B.aS]),A.b1("u<a2>"))
B.as=A.d(s([24,36]),t.n)
B.bh=A.d(s([B.ai,B.aj,B.ak,B.al]),A.b1("u<bl>"))
B.bi=A.d(s([B.E,B.F,B.G,B.H,B.j,B.k,B.l,B.m]),t.X)
B.at=A.d(s([B.j,B.l]),t.X)
B.au=A.d(s([B.k,B.m]),t.X)
B.cd=new A.e_("oneHand")
B.c5=new A.b5("bludgeoning")
B.bY=new A.bn("none")
B.bR=new A.b4()
B.ca=new A.bo("d6")
B.bE=new A.aw("archaic")
B.S=new A.aw("analog")
B.cn=A.d(s([B.bE,B.S]),t.B)
B.bp=new A.T(0,"Club")
B.c9=new A.bo("d4")
B.bF=new A.aw("operative")
B.cl=A.d(s([B.S,B.bF]),t.B)
B.bq=new A.T(1,"Tactical Baton")
B.c7=new A.b5("slashing")
B.bv=new A.T(1,"Survival Knife")
B.ce=new A.e_("twoHand")
B.c6=new A.b5("piercing")
B.bG=new A.aw("block")
B.cg=A.d(s([B.S,B.bG]),t.B)
B.bs=new A.T(1,"Tactical Spear")
B.c4=new A.b5("fire")
B.c0=new A.bn("burn")
B.bS=new A.b4()
B.aJ=new A.aw("powered")
B.ck=A.d(s([B.aJ]),t.B)
B.bX=new A.hX()
B.bt=new A.T(7,"Flame Sword")
B.c_=new A.bn("wound")
B.bT=new A.b4()
B.cb=new A.bo("d8")
B.br=new A.T(9,"Plasma Sword")
B.c3=new A.b5("electricity")
B.bZ=new A.bn("arc")
B.bU=new A.b4()
B.cc=new A.bo("d12")
B.bH=new A.aw("stun")
B.ci=A.d(s([B.bH,B.aJ]),t.B)
B.bu=new A.T(8,"Shock Staff")
B.bj=A.d(s([B.bp,B.bq,B.bv,B.bs,B.bt,B.br,B.bu]),A.b1("u<T>"))
B.c2=new A.b5("cold")
B.c1=new A.bn("staggered")
B.bV=new A.b4()
B.bL=new A.ch("charge")
B.bN=new A.ci()
B.bz=new A.ad("Zero pistol",5)
B.cj=A.d(s([B.S]),t.B)
B.bM=new A.ch("rounds")
B.bO=new A.ci()
B.by=new A.ad("Tac Pistol",1)
B.c8=new A.bo("d3")
B.bW=new A.b4()
B.bI=new A.aw("line")
B.bJ=new A.aw("unwieldy")
B.cm=A.d(s([B.bI,B.bJ]),t.B)
B.bK=new A.ch("petro")
B.bP=new A.ci()
B.bx=new A.ad("Flame Rifle",2)
B.bk=A.d(s([B.bz,B.by,B.bx]),A.b1("u<ad>"))
B.aY=new A.R("Second Skin",1)
B.aT=new A.R("Estex Suit I",1)
B.aW=new A.R("Flight Suit",1)
B.aV=new A.R("Freebooter Armor I",2)
B.aZ=new A.R("Kasatha microcord I",2)
B.aU=new A.R("Ceremonial Plate",1)
B.aX=new A.R("Golemforged Plating",1)
B.bl=A.d(s([B.aY,B.aT,B.aW,B.aV,B.aZ,B.aU,B.aX]),A.b1("u<R>"))
B.t=A.d(s([-1,3,-1,-1,3,-1]),t.n)
B.bm=A.d(s([]),t.X)
B.p=A.d(s([]),t.m)
B.aB=new A.b6("north")
B.aC=new A.b6("south")
B.aD=new A.b6("east")
B.aE=new A.b6("west")
B.aF=new A.b6("center")
B.av=A.d(s([B.aB,B.aC,B.aD,B.aE,B.aF]),A.b1("u<b6>"))
B.aw=new A.bx("lockedDoor")
B.bo=new A.bx("doorMechanism")
B.ax=new A.bx("none")
B.bn=A.d(s([]),t.s)
B.cp=new A.cr(0,{},B.bn,A.b1("cr<r,@>"))
B.A=new A.k(0,0)
B.P=new A.cS("small")
B.az=new A.cS("medium")
B.aA=new A.cS("large")
B.a3=new A.bD("dirt")
B.B=new A.bD("metal")
B.bA=new A.bD("snow")
B.C=new A.Y("door")
B.bB=new A.Y("grass")
B.a4=new A.Y("mechanicalLight")
B.a5=new A.Y("light")
B.o=new A.Y("none")
B.aG=new A.Y("chair")
B.Q=new A.Y("chest")
B.aH=new A.Y("mechanism")
B.aI=new A.Y("tree")
B.h=new A.bZ("floor")
B.b=new A.bZ("wall")
B.bC=A.ny("y")
B.u=new A.bE("float_1")
B.e=new A.bE("float_2")
B.bD=new A.bE("float_3")
B.a7=new A.bE("float_4")
B.i=new A.bE("texture_1")})();(function staticFields(){$.iU=null
$.aK=0
$.co=null
$.k8=null
$.kX=null
$.kS=null
$.l2=null
$.j9=null
$.je=null
$.jV=null
$.c8=null
$.ds=null
$.dt=null
$.jQ=!1
$.F=B.n
$.aj=A.d([],t.f)
$.ke=0
$.mA=A.bw(["ArrowUp",B.W,"ArrowDown",B.Y,"ArrowRight",B.X,"ArrowLeft",B.Z,"q",B.am],t.N,t.J)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"nJ","l6",function(){return A.nd("_$dart_dartClosure")})
s($,"nX","l8",function(){return A.aX(A.it({
toString:function(){return"$receiver$"}}))})
s($,"nY","l9",function(){return A.aX(A.it({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"nZ","la",function(){return A.aX(A.it(null))})
s($,"o_","lb",function(){return A.aX(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"o2","le",function(){return A.aX(A.it(void 0))})
s($,"o3","lf",function(){return A.aX(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"o1","ld",function(){return A.aX(A.ku(null))})
s($,"o0","lc",function(){return A.aX(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"o5","lh",function(){return A.aX(A.ku(void 0))})
s($,"o4","lg",function(){return A.aX(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"o7","jY",function(){return A.m7()})
s($,"oi","jq",function(){return A.l_(B.bC)})
s($,"nP","l7",function(){var r=A.js(4278780675)
return new A.hV(A.js(4279308561),A.js(4280361249),r)})
s($,"ok","lj",function(){return A.jE()})
s($,"oy","k2",function(){return A.c0(B.T,new A.jn())})
s($,"ou","k0",function(){return A.c0(B.aL,new A.jj())})
s($,"ow","dA",function(){return A.c0(B.U,new A.jl())})
s($,"ot","lo",function(){return A.c0(B.T,new A.ji())})
s($,"ov","lp",function(){return A.c0(B.T,new A.jk())})
s($,"ox","k1",function(){return A.c0(B.U,new A.jm())})
s($,"os","ln",function(){return A.c0(B.b8,new A.jh())})
s($,"or","jr",function(){var r=$.k2(),q=$.k0()
return A.d([r,q,q,$.dA()],t.D)})
s($,"oq","lm",function(){var r=$.ln()
return A.d([r,r,r,r,r,$.dA(),$.k2(),$.k0()],t.D)})
s($,"op","ll",function(){var r=$.dA()
return A.d([r,r,r,r],t.D)})
s($,"oo","lk",function(){var r=$.dA(),q=$.lo()
return A.d([r,r,r,r,r,r,q,q,q,q],t.D)})
s($,"oA","lq",function(){return A.d([$.lp(),$.dA()],t.D)})
s($,"oj","li",function(){return new Uint8Array(A.c6(A.d([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t)))})
s($,"oB","lr",function(){var r=A.k6(null,!1,!0,A.m2(1,1,0,4,null)),q=A.jE()
return new A.iA(r,A.n8(new A.h9(A.jE(),new A.hG(q)).bK(new A.hS(B.ad,!1,1))))})
s($,"on","k_",function(){return t.r.a(B.V.bQ(t.E.a(A.kV().querySelector("#glCanvas")),"webgl2"))})
s($,"oz","k3",function(){return new A.dR()})
s($,"om","jZ",function(){return A.lI($.lr(),t.E.a(A.kV().querySelector("#glCanvas")),$.k_(),$.k3())})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:A.bB,ArrayBufferView:A.bB,Float64Array:A.bA,Float32Array:A.cK,Int16Array:A.ec,Int32Array:A.ed,Int8Array:A.ee,Uint16Array:A.ef,Uint32Array:A.eg,Uint8ClampedArray:A.cM,CanvasPixelArray:A.cM,Uint8Array:A.eh,HTMLBRElement:A.p,HTMLBaseElement:A.p,HTMLButtonElement:A.p,HTMLContentElement:A.p,HTMLDListElement:A.p,HTMLDataElement:A.p,HTMLDataListElement:A.p,HTMLDetailsElement:A.p,HTMLDialogElement:A.p,HTMLEmbedElement:A.p,HTMLFieldSetElement:A.p,HTMLHRElement:A.p,HTMLHeadElement:A.p,HTMLHeadingElement:A.p,HTMLHtmlElement:A.p,HTMLIFrameElement:A.p,HTMLLIElement:A.p,HTMLLabelElement:A.p,HTMLLegendElement:A.p,HTMLLinkElement:A.p,HTMLMapElement:A.p,HTMLMenuElement:A.p,HTMLMetaElement:A.p,HTMLMeterElement:A.p,HTMLModElement:A.p,HTMLOListElement:A.p,HTMLObjectElement:A.p,HTMLOptGroupElement:A.p,HTMLOptionElement:A.p,HTMLOutputElement:A.p,HTMLParagraphElement:A.p,HTMLParamElement:A.p,HTMLPictureElement:A.p,HTMLPreElement:A.p,HTMLProgressElement:A.p,HTMLQuoteElement:A.p,HTMLScriptElement:A.p,HTMLShadowElement:A.p,HTMLSlotElement:A.p,HTMLSourceElement:A.p,HTMLSpanElement:A.p,HTMLStyleElement:A.p,HTMLTableCaptionElement:A.p,HTMLTableCellElement:A.p,HTMLTableDataCellElement:A.p,HTMLTableHeaderCellElement:A.p,HTMLTableColElement:A.p,HTMLTableElement:A.p,HTMLTableRowElement:A.p,HTMLTableSectionElement:A.p,HTMLTemplateElement:A.p,HTMLTextAreaElement:A.p,HTMLTimeElement:A.p,HTMLTitleElement:A.p,HTMLTrackElement:A.p,HTMLUListElement:A.p,HTMLUnknownElement:A.p,HTMLDirectoryElement:A.p,HTMLFontElement:A.p,HTMLFrameElement:A.p,HTMLFrameSetElement:A.p,HTMLMarqueeElement:A.p,HTMLElement:A.p,AccessibleNodeList:A.h0,HTMLAnchorElement:A.dC,HTMLAreaElement:A.dD,Blob:A.dG,HTMLBodyElement:A.dH,HTMLCanvasElement:A.bk,CDATASection:A.aA,CharacterData:A.aA,Comment:A.aA,ProcessingInstruction:A.aA,Text:A.aA,CSSPerspective:A.hh,CSSCharsetRule:A.B,CSSConditionRule:A.B,CSSFontFaceRule:A.B,CSSGroupingRule:A.B,CSSImportRule:A.B,CSSKeyframeRule:A.B,MozCSSKeyframeRule:A.B,WebKitCSSKeyframeRule:A.B,CSSKeyframesRule:A.B,MozCSSKeyframesRule:A.B,WebKitCSSKeyframesRule:A.B,CSSMediaRule:A.B,CSSNamespaceRule:A.B,CSSPageRule:A.B,CSSRule:A.B,CSSStyleRule:A.B,CSSSupportsRule:A.B,CSSViewportRule:A.B,CSSStyleDeclaration:A.cs,MSStyleCSSProperties:A.cs,CSS2Properties:A.cs,CSSImageValue:A.ar,CSSKeywordValue:A.ar,CSSNumericValue:A.ar,CSSPositionValue:A.ar,CSSResourceValue:A.ar,CSSUnitValue:A.ar,CSSURLImageValue:A.ar,CSSStyleValue:A.ar,CSSMatrixComponent:A.aM,CSSRotation:A.aM,CSSScale:A.aM,CSSSkew:A.aM,CSSTranslation:A.aM,CSSTransformComponent:A.aM,CSSTransformValue:A.hj,CSSUnparsedValue:A.hk,DataTransferItemList:A.hl,HTMLDivElement:A.bP,DOMException:A.hm,ClientRectList:A.ct,DOMRectList:A.ct,DOMRectReadOnly:A.cu,DOMStringList:A.dQ,DOMTokenList:A.hn,Element:A.L,AbortPaymentEvent:A.j,AnimationEvent:A.j,AnimationPlaybackEvent:A.j,ApplicationCacheErrorEvent:A.j,BackgroundFetchClickEvent:A.j,BackgroundFetchEvent:A.j,BackgroundFetchFailEvent:A.j,BackgroundFetchedEvent:A.j,BeforeInstallPromptEvent:A.j,BeforeUnloadEvent:A.j,BlobEvent:A.j,CanMakePaymentEvent:A.j,ClipboardEvent:A.j,CloseEvent:A.j,CustomEvent:A.j,DeviceMotionEvent:A.j,DeviceOrientationEvent:A.j,ErrorEvent:A.j,ExtendableEvent:A.j,ExtendableMessageEvent:A.j,FetchEvent:A.j,FontFaceSetLoadEvent:A.j,ForeignFetchEvent:A.j,GamepadEvent:A.j,HashChangeEvent:A.j,InstallEvent:A.j,MediaEncryptedEvent:A.j,MediaKeyMessageEvent:A.j,MediaQueryListEvent:A.j,MediaStreamEvent:A.j,MediaStreamTrackEvent:A.j,MessageEvent:A.j,MIDIConnectionEvent:A.j,MIDIMessageEvent:A.j,MutationEvent:A.j,NotificationEvent:A.j,PageTransitionEvent:A.j,PaymentRequestEvent:A.j,PaymentRequestUpdateEvent:A.j,PopStateEvent:A.j,PresentationConnectionAvailableEvent:A.j,PresentationConnectionCloseEvent:A.j,ProgressEvent:A.j,PromiseRejectionEvent:A.j,PushEvent:A.j,RTCDataChannelEvent:A.j,RTCDTMFToneChangeEvent:A.j,RTCPeerConnectionIceEvent:A.j,RTCTrackEvent:A.j,SecurityPolicyViolationEvent:A.j,SensorErrorEvent:A.j,SpeechRecognitionError:A.j,SpeechRecognitionEvent:A.j,SpeechSynthesisEvent:A.j,StorageEvent:A.j,SyncEvent:A.j,TrackEvent:A.j,TransitionEvent:A.j,WebKitTransitionEvent:A.j,VRDeviceEvent:A.j,VRDisplayEvent:A.j,VRSessionEvent:A.j,MojoInterfaceRequestEvent:A.j,ResourceProgressEvent:A.j,USBConnectionEvent:A.j,IDBVersionChangeEvent:A.j,AudioProcessingEvent:A.j,OfflineAudioCompletionEvent:A.j,WebGLContextEvent:A.j,Event:A.j,InputEvent:A.j,SubmitEvent:A.j,AbsoluteOrientationSensor:A.c,Accelerometer:A.c,AccessibleNode:A.c,AmbientLightSensor:A.c,Animation:A.c,ApplicationCache:A.c,DOMApplicationCache:A.c,OfflineResourceList:A.c,BackgroundFetchRegistration:A.c,BatteryManager:A.c,BroadcastChannel:A.c,CanvasCaptureMediaStreamTrack:A.c,DedicatedWorkerGlobalScope:A.c,EventSource:A.c,FileReader:A.c,FontFaceSet:A.c,Gyroscope:A.c,XMLHttpRequest:A.c,XMLHttpRequestEventTarget:A.c,XMLHttpRequestUpload:A.c,LinearAccelerationSensor:A.c,Magnetometer:A.c,MediaDevices:A.c,MediaKeySession:A.c,MediaQueryList:A.c,MediaRecorder:A.c,MediaSource:A.c,MediaStream:A.c,MediaStreamTrack:A.c,MessagePort:A.c,MIDIAccess:A.c,MIDIInput:A.c,MIDIOutput:A.c,MIDIPort:A.c,NetworkInformation:A.c,Notification:A.c,OffscreenCanvas:A.c,OrientationSensor:A.c,PaymentRequest:A.c,Performance:A.c,PermissionStatus:A.c,PresentationAvailability:A.c,PresentationConnection:A.c,PresentationConnectionList:A.c,PresentationRequest:A.c,RelativeOrientationSensor:A.c,RemotePlayback:A.c,RTCDataChannel:A.c,DataChannel:A.c,RTCDTMFSender:A.c,RTCPeerConnection:A.c,webkitRTCPeerConnection:A.c,mozRTCPeerConnection:A.c,ScreenOrientation:A.c,Sensor:A.c,ServiceWorker:A.c,ServiceWorkerContainer:A.c,ServiceWorkerGlobalScope:A.c,ServiceWorkerRegistration:A.c,SharedWorker:A.c,SharedWorkerGlobalScope:A.c,SpeechRecognition:A.c,SpeechSynthesis:A.c,SpeechSynthesisUtterance:A.c,VR:A.c,VRDevice:A.c,VRDisplay:A.c,VRSession:A.c,VisualViewport:A.c,WebSocket:A.c,Worker:A.c,WorkerGlobalScope:A.c,WorkerPerformance:A.c,BluetoothDevice:A.c,BluetoothRemoteGATTCharacteristic:A.c,Clipboard:A.c,MojoInterfaceInterceptor:A.c,USB:A.c,IDBDatabase:A.c,IDBOpenDBRequest:A.c,IDBVersionChangeRequest:A.c,IDBRequest:A.c,IDBTransaction:A.c,AnalyserNode:A.c,RealtimeAnalyserNode:A.c,AudioBufferSourceNode:A.c,AudioDestinationNode:A.c,AudioNode:A.c,AudioScheduledSourceNode:A.c,AudioWorkletNode:A.c,BiquadFilterNode:A.c,ChannelMergerNode:A.c,AudioChannelMerger:A.c,ChannelSplitterNode:A.c,AudioChannelSplitter:A.c,ConstantSourceNode:A.c,ConvolverNode:A.c,DelayNode:A.c,DynamicsCompressorNode:A.c,GainNode:A.c,AudioGainNode:A.c,IIRFilterNode:A.c,MediaElementAudioSourceNode:A.c,MediaStreamAudioDestinationNode:A.c,MediaStreamAudioSourceNode:A.c,OscillatorNode:A.c,Oscillator:A.c,PannerNode:A.c,AudioPannerNode:A.c,webkitAudioPannerNode:A.c,ScriptProcessorNode:A.c,JavaScriptAudioNode:A.c,StereoPannerNode:A.c,WaveShaperNode:A.c,EventTarget:A.c,File:A.a9,FileList:A.dT,FileWriter:A.dU,HTMLFormElement:A.dX,Gamepad:A.aa,History:A.hE,HTMLCollection:A.bq,HTMLFormControlsCollection:A.bq,HTMLOptionsCollection:A.bq,HTMLImageElement:A.bQ,HTMLInputElement:A.br,KeyboardEvent:A.aQ,Location:A.hQ,HTMLAudioElement:A.bz,HTMLMediaElement:A.bz,MediaList:A.hW,MIDIInputMap:A.e8,MIDIOutputMap:A.e9,MimeType:A.ab,MimeTypeArray:A.ea,MouseEvent:A.a5,DragEvent:A.a5,PointerEvent:A.a5,WheelEvent:A.a5,Document:A.q,DocumentFragment:A.q,HTMLDocument:A.q,ShadowRoot:A.q,XMLDocument:A.q,Attr:A.q,DocumentType:A.q,Node:A.q,NodeList:A.cN,RadioNodeList:A.cN,Plugin:A.ac,PluginArray:A.en,RTCStatsReport:A.ep,HTMLSelectElement:A.er,SourceBuffer:A.a6,SourceBufferList:A.ev,SpeechGrammar:A.ae,SpeechGrammarList:A.ew,SpeechRecognitionResult:A.af,Storage:A.ez,CSSStyleSheet:A.X,StyleSheet:A.X,TextTrack:A.a7,TextTrackCue:A.U,VTTCue:A.U,TextTrackCueList:A.eD,TextTrackList:A.eE,TimeRanges:A.iq,Touch:A.ag,TouchList:A.eF,TrackDefaultList:A.ir,CompositionEvent:A.aG,FocusEvent:A.aG,TextEvent:A.aG,TouchEvent:A.aG,UIEvent:A.aG,URL:A.iu,HTMLVideoElement:A.c_,VideoTrackList:A.eN,Window:A.c1,DOMWindow:A.c1,CSSRuleList:A.eW,ClientRect:A.d1,DOMRect:A.d1,GamepadList:A.f7,NamedNodeMap:A.d6,MozNamedAttrMap:A.d6,SpeechRecognitionResultList:A.fs,StyleSheetList:A.fB,SVGLength:A.am,SVGLengthList:A.e5,SVGNumber:A.an,SVGNumberList:A.ej,SVGPointList:A.i4,SVGStringList:A.eB,SVGAElement:A.l,SVGAnimateElement:A.l,SVGAnimateMotionElement:A.l,SVGAnimateTransformElement:A.l,SVGAnimationElement:A.l,SVGCircleElement:A.l,SVGClipPathElement:A.l,SVGDefsElement:A.l,SVGDescElement:A.l,SVGDiscardElement:A.l,SVGEllipseElement:A.l,SVGFEBlendElement:A.l,SVGFEColorMatrixElement:A.l,SVGFEComponentTransferElement:A.l,SVGFECompositeElement:A.l,SVGFEConvolveMatrixElement:A.l,SVGFEDiffuseLightingElement:A.l,SVGFEDisplacementMapElement:A.l,SVGFEDistantLightElement:A.l,SVGFEFloodElement:A.l,SVGFEFuncAElement:A.l,SVGFEFuncBElement:A.l,SVGFEFuncGElement:A.l,SVGFEFuncRElement:A.l,SVGFEGaussianBlurElement:A.l,SVGFEImageElement:A.l,SVGFEMergeElement:A.l,SVGFEMergeNodeElement:A.l,SVGFEMorphologyElement:A.l,SVGFEOffsetElement:A.l,SVGFEPointLightElement:A.l,SVGFESpecularLightingElement:A.l,SVGFESpotLightElement:A.l,SVGFETileElement:A.l,SVGFETurbulenceElement:A.l,SVGFilterElement:A.l,SVGForeignObjectElement:A.l,SVGGElement:A.l,SVGGeometryElement:A.l,SVGGraphicsElement:A.l,SVGImageElement:A.l,SVGLineElement:A.l,SVGLinearGradientElement:A.l,SVGMarkerElement:A.l,SVGMaskElement:A.l,SVGMetadataElement:A.l,SVGPathElement:A.l,SVGPatternElement:A.l,SVGPolygonElement:A.l,SVGPolylineElement:A.l,SVGRadialGradientElement:A.l,SVGRectElement:A.l,SVGScriptElement:A.l,SVGSetElement:A.l,SVGStopElement:A.l,SVGStyleElement:A.l,SVGElement:A.l,SVGSVGElement:A.l,SVGSwitchElement:A.l,SVGSymbolElement:A.l,SVGTSpanElement:A.l,SVGTextContentElement:A.l,SVGTextElement:A.l,SVGTextPathElement:A.l,SVGTextPositioningElement:A.l,SVGTitleElement:A.l,SVGUseElement:A.l,SVGViewElement:A.l,SVGGradientElement:A.l,SVGComponentTransferFunctionElement:A.l,SVGFEDropShadowElement:A.l,SVGMPathElement:A.l,SVGTransform:A.ap,SVGTransformList:A.eG,AudioBuffer:A.h7,AudioParamMap:A.dE,AudioTrackList:A.dF,AudioContext:A.b3,webkitAudioContext:A.b3,BaseAudioContext:A.b3,OfflineAudioContext:A.ek,WebGLBuffer:A.dI,WebGLFramebuffer:A.dY,WebGLProgram:A.eo,WebGL2RenderingContext:A.bX,WebGLTexture:A.aW,WebGLUniformLocation:A.eI,WebGLVertexArrayObject:A.eM,SQLResultSetRowList:A.ex})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,SQLResultSetRowList:true})
A.bU.$nativeSuperclassTag="ArrayBufferView"
A.d7.$nativeSuperclassTag="ArrayBufferView"
A.d8.$nativeSuperclassTag="ArrayBufferView"
A.bA.$nativeSuperclassTag="ArrayBufferView"
A.d9.$nativeSuperclassTag="ArrayBufferView"
A.da.$nativeSuperclassTag="ArrayBufferView"
A.cL.$nativeSuperclassTag="ArrayBufferView"
A.dc.$nativeSuperclassTag="EventTarget"
A.dd.$nativeSuperclassTag="EventTarget"
A.dh.$nativeSuperclassTag="EventTarget"
A.di.$nativeSuperclassTag="EventTarget"})()
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
var s=A.np
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

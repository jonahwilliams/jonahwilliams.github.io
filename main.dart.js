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
a[c]=function(){a[c]=function(){A.nn(b)}
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
if(a[b]!==s)A.no(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=b.fs[0]
if(a)return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"(receiver) {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(receiver, this);"+"}")(b,A.jP,null)
else return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"() {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(this, null);"+"}")(b,A.jP,null)}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.jP(a).prototype
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
a(hunkHelpers,v,w,$)}var A={jt:function jt(){},
ka(a){return new A.cB("Field '"+a+"' has been assigned during initialization.")},
b7(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
jC(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
j2(a,b,c){return a},
km(a,b,c,d){A.i2(b,"start")
if(c!=null){A.i2(c,"end")
if(b>c)A.T(A.cN(b,0,c,"start",null))}return new A.cS(a,b,c,d.i("cS<0>"))},
kc(a,b,c,d){if(t.gw.b(a))return new A.cs(a,b,c.i("@<0>").v(d).i("cs<1,2>"))
return new A.bw(a,b,c.i("@<0>").v(d).i("bw<1,2>"))},
lC(){return new A.aS("No element")},
lE(){return new A.aS("Too many elements")},
lD(){return new A.aS("Too few elements")},
lT(a,b,c){A.eq(a,0,J.a0(a)-1,b,c)},
eq(a,b,c,d,e){if(c-b<=32)A.lS(a,b,c,d,e)
else A.lR(a,b,c,d,e)},
lS(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aq(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.G()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
lR(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.f.K(a5-a4+1,6),i=a4+j,h=a5-j,g=B.f.K(a4+a5,2),f=g-j,e=g+j,d=J.aq(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.G()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.G()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.G()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.G()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.G()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.G()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.G()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.G()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.G()
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
A.eq(a3,a4,r-2,a6,a7)
A.eq(a3,q+2,a5,a6,a7)
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
break}}A.eq(a3,r,q,a6,a7)}else A.eq(a3,r,q,a6,a7)},
cB:function cB(a){this.a=a},
i7:function i7(){},
m:function m(){},
at:function at(){},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aQ:function aQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bw:function bw(a,b,c){this.a=a
this.b=b
this.$ti=c},
cs:function cs(a,b,c){this.a=a
this.b=b
this.$ti=c},
cF:function cF(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
cG:function cG(a,b,c){this.a=a
this.b=b
this.$ti=c},
ax:function ax(a,b,c){this.a=a
this.b=b
this.$ti=c},
cW:function cW(a,b,c){this.a=a
this.b=b
this.$ti=c},
a4:function a4(){},
kZ(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
nd(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
z(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bI(a)
return s},
bS(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
i0(a){return A.lN(a)},
lN(a){var s,r,q,p
if(a instanceof A.y)return A.Z(A.az(a),null)
if(J.c9(a)===B.bb||t.ak.b(a)){s=B.af(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.Z(A.az(a),null)},
ca(a){throw A.d(A.kM(a))},
b(a,b){if(a==null)J.a0(a)
throw A.d(A.c8(a,b))},
c8(a,b){var s,r="index"
if(!A.jM(b))return new A.aJ(!0,b,r,null)
s=A.c3(J.a0(a))
if(b<0||b>=s)return A.H(b,a,r,null,s)
return A.kf(b,r)},
kM(a){return new A.aJ(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.ef()
s=new Error()
s.dartException=a
r=A.np
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
np(){return J.bI(this.dartException)},
T(a){throw A.d(a)},
D(a){throw A.d(A.cm(a))},
aW(a){var s,r,q,p,o,n
a=A.nk(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.il(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
im(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kn(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ju(a,b){var s=b==null,r=s?null:b.method
return new A.e1(a,r,s?null:b.receiver)},
bh(a){if(a==null)return new A.hY(a)
if(a instanceof A.ct)return A.bg(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.bg(a,a.dartException)
return A.mU(a)},
bg(a,b){if(t.h.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
mU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.f.ct(r,16)&8191)===10)switch(q){case 438:return A.bg(a,A.ju(A.z(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.z(s)+" (Error "+q+")"
return A.bg(a,new A.cL(p,e))}}if(a instanceof TypeError){o=$.l1()
n=$.l2()
m=$.l3()
l=$.l4()
k=$.l7()
j=$.l8()
i=$.l6()
$.l5()
h=$.la()
g=$.l9()
f=o.I(s)
if(f!=null)return A.bg(a,A.ju(A.a8(s),f))
else{f=n.I(s)
if(f!=null){f.method="call"
return A.bg(a,A.ju(A.a8(s),f))}else{f=m.I(s)
if(f==null){f=l.I(s)
if(f==null){f=k.I(s)
if(f==null){f=j.I(s)
if(f==null){f=i.I(s)
if(f==null){f=l.I(s)
if(f==null){f=h.I(s)
if(f==null){f=g.I(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.a8(s)
return A.bg(a,new A.cL(s,f==null?e:f.method))}}}return A.bg(a,new A.eH(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cR()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.bg(a,new A.aJ(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cR()
return a},
bf(a){var s
if(a instanceof A.ct)return a.b
if(a==null)return new A.db(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.db(a)},
kT(a){if(a==null||typeof a!="object")return J.cb(a)
else return A.bS(a)},
n4(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
nb(a,b,c,d,e,f){t.m.a(a)
switch(A.c3(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.jq("Unsupported number of arguments for wrapped closure"))},
dv(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.nb)
a.$identity=s
return s},
lw(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ev().constructor.prototype):Object.create(new A.bK(null,null).constructor.prototype)
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
if(q)p=A.k4(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ls(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.k4(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ls(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.lq)}throw A.d("Error in functionType of tearoff")},
lt(a,b,c,d){var s=A.k3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
k4(a,b,c,d){var s,r,q,p,o,n="receiver"
if(c)return A.lv(a,b,d)
s=b.length
r=d||s>=27
if(r)return A.lt(s,d,a,b)
if(s===0){r=$.aK
if(typeof r!=="number")return r.u()
$.aK=r+1
q="self"+r
r="return function(){var "+q+" = this."
p=$.cl
return new Function(r+(p==null?$.cl=A.h6(n):p)+";return "+q+"."+a+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
r=$.aK
if(typeof r!=="number")return r.u()
$.aK=r+1
o+=r
r="return function("+o+"){return this."
p=$.cl
return new Function(r+(p==null?$.cl=A.h6(n):p)+"."+a+"("+o+");}")()},
lu(a,b,c,d){var s=A.k3,r=A.lr
switch(b?-1:a){case 0:throw A.d(new A.en("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
lv(a,b,c){var s,r,q,p,o,n=$.k2
if(n==null)n=$.k2=A.h6("interceptor")
s=$.cl
if(s==null)s=$.cl=A.h6("receiver")
r=b.length
q=c||r>=28
if(q)return A.lu(r,c,a,b)
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
jP(a){return A.lw(a)},
lq(a,b){return A.iV(v.typeUniverse,A.az(a.a),b)},
k3(a){return a.a},
lr(a){return a.b},
h6(a){var s,r,q,p=new A.bK("receiver","interceptor"),o=J.k9(Object.getOwnPropertyNames(p),t.O)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.ch("Field name "+a+" not found.",null))},
b_(a){if(a==null)A.mV("boolean expression must not be null")
return a},
mV(a){throw A.d(new A.eM(a))},
nn(a){throw A.d(new A.dN(a))},
n5(a){return v.getIsolateTag(a)},
oe(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ng(a){var s,r,q,p,o,n=A.a8($.kQ.$1(a)),m=$.j3[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j9[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.mm($.kL.$2(a,n))
if(q!=null){m=$.j3[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j9[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jb(s)
$.j3[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.j9[n]=s
return s}if(p==="-"){o=A.jb(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.kU(a,s)
if(p==="*")throw A.d(A.ko(n))
if(v.leafTags[n]===true){o=A.jb(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.kU(a,s)},
kU(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jR(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jb(a){return J.jR(a,!1,null,!!a.$iu)},
ni(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jb(s)
else return J.jR(s,c,null,null)},
n8(){if(!0===$.jQ)return
$.jQ=!0
A.n9()},
n9(){var s,r,q,p,o,n,m,l
$.j3=Object.create(null)
$.j9=Object.create(null)
A.n7()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kW.$1(o)
if(n!=null){m=A.ni(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
n7(){var s,r,q,p,o,n,m=B.b1()
m=A.c7(B.b2,A.c7(B.b3,A.c7(B.ag,A.c7(B.ag,A.c7(B.b4,A.c7(B.b5,A.c7(B.b6(B.af),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kQ=new A.j6(p)
$.kL=new A.j7(o)
$.kW=new A.j8(n)},
c7(a,b){return a(b)||b},
nk(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cn:function cn(){},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
il:function il(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cL:function cL(a,b){this.a=a
this.b=b},
e1:function e1(a,b,c){this.a=a
this.b=b
this.c=c},
eH:function eH(a){this.a=a},
hY:function hY(a){this.a=a},
ct:function ct(a,b){this.a=a
this.b=b},
db:function db(a){this.a=a
this.b=null},
bl:function bl(){},
dJ:function dJ(){},
dK:function dK(){},
ez:function ez(){},
ev:function ev(){},
bK:function bK(a,b){this.a=a
this.b=b},
en:function en(a){this.a=a},
eM:function eM(a){this.a=a},
bs:function bs(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hH:function hH(a){this.a=a},
hI:function hI(a,b){this.a=a
this.b=b
this.c=null},
cC:function cC(a,b){this.a=a
this.$ti=b},
cD:function cD(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
kB(a,b,c){},
dp(a){return a},
kd(a){return new Float32Array(a)},
jy(a,b,c){A.kB(a,b,c)
return new Float32Array(a,b,c)},
hW(a){return new Uint8Array(a)},
ke(a,b,c){var s
A.kB(a,b,c)
s=new Uint8Array(a,b,c)
return s},
aY(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.c8(b,a))},
bz:function bz(){},
bR:function bR(){},
by:function by(){},
cI:function cI(){},
cH:function cH(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
cJ:function cJ(){},
ee:function ee(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
kh(a,b){var s=b.c
return s==null?b.c=A.jI(a,b.z,!0):s},
kg(a,b){var s=b.c
return s==null?b.c=A.dh(a,"aE",[b.z]):s},
ki(a){var s=a.y
if(s===6||s===7||s===8)return A.ki(a.z)
return s===11||s===12},
lQ(a){return a.cy},
ap(a){return A.fK(v.typeUniverse,a,!1)},
be(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.be(a,s,a0,a1)
if(r===s)return b
return A.ky(a,r,!0)
case 7:s=b.z
r=A.be(a,s,a0,a1)
if(r===s)return b
return A.jI(a,r,!0)
case 8:s=b.z
r=A.be(a,s,a0,a1)
if(r===s)return b
return A.kx(a,r,!0)
case 9:q=b.Q
p=A.dt(a,q,a0,a1)
if(p===q)return b
return A.dh(a,b.z,p)
case 10:o=b.z
n=A.be(a,o,a0,a1)
m=b.Q
l=A.dt(a,m,a0,a1)
if(n===o&&l===m)return b
return A.jG(a,n,l)
case 11:k=b.z
j=A.be(a,k,a0,a1)
i=b.Q
h=A.mR(a,i,a0,a1)
if(j===k&&h===i)return b
return A.kw(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.dt(a,g,a0,a1)
o=b.z
n=A.be(a,o,a0,a1)
if(f===g&&n===o)return b
return A.jH(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.h0("Attempted to substitute unexpected RTI kind "+c))}},
dt(a,b,c,d){var s,r,q,p,o=b.length,n=A.iW(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.be(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
mS(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.iW(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.be(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
mR(a,b,c,d){var s,r=b.a,q=A.dt(a,r,c,d),p=b.b,o=A.dt(a,p,c,d),n=b.c,m=A.mS(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.f4()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
n2(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.n6(s)
return a.$S()}return null},
kR(a,b){var s
if(A.ki(b))if(a instanceof A.bl){s=A.n2(a)
if(s!=null)return s}return A.az(a)},
az(a){var s
if(a instanceof A.y){s=a.$ti
return s!=null?s:A.jJ(a)}if(Array.isArray(a))return A.ao(a)
return A.jJ(J.c9(a))},
ao(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
B(a){var s=a.$ti
return s!=null?s:A.jJ(a)},
jJ(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.mz(a,s)},
mz(a,b){var s=a instanceof A.bl?a.__proto__.__proto__.constructor:b,r=A.mi(v.typeUniverse,s.name)
b.$ccache=r
return r},
n6(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fK(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
n3(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.fH(a)
q=A.fK(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.fH(q):p},
nq(a){return A.n3(A.fK(v.typeUniverse,a,!1))},
my(a){var s,r,q,p,o=this
if(o===t.K)return A.c4(o,a,A.mD)
if(!A.b1(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.c4(o,a,A.mG)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.jM
else if(r===t.i||r===t.di)q=A.mC
else if(r===t.N)q=A.mE
else q=r===t.cJ?A.jK:null
if(q!=null)return A.c4(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.ne)){o.r="$i"+p
if(p==="p")return A.c4(o,a,A.mB)
return A.c4(o,a,A.mF)}}else if(s===7)return A.c4(o,a,A.mw)
return A.c4(o,a,A.mu)},
c4(a,b,c){a.b=c
return a.b(b)},
mx(a){var s,r=this,q=A.mt
if(!A.b1(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.mn
else if(r===t.K)q=A.ml
else{s=A.dw(r)
if(s)q=A.mv}r.a=q
return r.a(a)},
iZ(a){var s,r=a.y
if(!A.b1(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&A.iZ(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mu(a){var s=this
if(a==null)return A.iZ(s)
return A.I(v.typeUniverse,A.kR(a,s),null,s,null)},
mw(a){if(a==null)return!0
return this.z.b(a)},
mF(a){var s,r=this
if(a==null)return A.iZ(r)
s=r.r
if(a instanceof A.y)return!!a[s]
return!!J.c9(a)[s]},
mB(a){var s,r=this
if(a==null)return A.iZ(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.y)return!!a[s]
return!!J.c9(a)[s]},
mt(a){var s,r=this
if(a==null){s=A.dw(r)
if(s)return a}else if(r.b(a))return a
A.kE(a,r)},
mv(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.kE(a,s)},
kE(a,b){throw A.d(A.kv(A.kq(a,A.kR(a,b),A.Z(b,null))))},
n1(a,b,c,d){var s=null
if(A.I(v.typeUniverse,a,s,b,s))return a
throw A.d(A.kv("The type argument '"+A.Z(a,s)+"' is not a subtype of the type variable bound '"+A.Z(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
kq(a,b,c){var s=A.dP(a),r=A.Z(b==null?A.az(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
kv(a){return new A.dg("TypeError: "+a)},
Y(a,b){return new A.dg("TypeError: "+A.kq(a,null,b))},
mD(a){return a!=null},
ml(a){if(a!=null)return a
throw A.d(A.Y(a,"Object"))},
mG(a){return!0},
mn(a){return a},
jK(a){return!0===a||!1===a},
o1(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.Y(a,"bool"))},
o3(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.Y(a,"bool"))},
o2(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.Y(a,"bool?"))},
mk(a){if(typeof a=="number")return a
throw A.d(A.Y(a,"double"))},
o5(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.Y(a,"double"))},
o4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.Y(a,"double?"))},
jM(a){return typeof a=="number"&&Math.floor(a)===a},
c3(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.Y(a,"int"))},
o7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.Y(a,"int"))},
o6(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.Y(a,"int?"))},
mC(a){return typeof a=="number"},
ay(a){if(typeof a=="number")return a
throw A.d(A.Y(a,"num"))},
o9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.Y(a,"num"))},
o8(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.Y(a,"num?"))},
mE(a){return typeof a=="string"},
a8(a){if(typeof a=="string")return a
throw A.d(A.Y(a,"String"))},
oa(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.Y(a,"String"))},
mm(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.Y(a,"String?"))},
mN(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.Z(a[q],b)
return s},
kF(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.e([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.m(a5,"T"+(q+p))
for(o=t.O,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.b(a5,j)
m=B.y.u(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.Z(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.Z(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.Z(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.Z(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.Z(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
Z(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.Z(a.z,b)
return s}if(l===7){r=a.z
s=A.Z(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.Z(a.z,b)+">"
if(l===9){p=A.mT(a.z)
o=a.Q
return o.length>0?p+("<"+A.mN(o,b)+">"):p}if(l===11)return A.kF(a,b,null)
if(l===12)return A.kF(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
mT(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
mj(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mi(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fK(a,b,!1)
else if(typeof m=="number"){s=m
r=A.di(a,5,"#")
q=A.iW(s)
for(p=0;p<s;++p)q[p]=r
o=A.dh(a,b,q)
n[b]=o
return o}else return m},
mg(a,b){return A.kz(a.tR,b)},
mf(a,b){return A.kz(a.eT,b)},
fK(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.kt(A.kr(a,null,b,c))
r.set(b,s)
return s},
iV(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.kt(A.kr(a,b,c,!0))
q.set(c,r)
return r},
mh(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.jG(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bd(a,b){b.a=A.mx
b.b=A.my
return b},
di(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.au(null,null)
s.y=b
s.cy=c
r=A.bd(a,s)
a.eC.set(c,r)
return r},
ky(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.md(a,b,r,c)
a.eC.set(r,s)
return s},
md(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.b1(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.au(null,null)
q.y=6
q.z=b
q.cy=c
return A.bd(a,q)},
jI(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.mc(a,b,r,c)
a.eC.set(r,s)
return s},
mc(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.b1(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.dw(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.dw(q.z))return q
else return A.kh(a,b)}}p=new A.au(null,null)
p.y=7
p.z=b
p.cy=c
return A.bd(a,p)},
kx(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.ma(a,b,r,c)
a.eC.set(r,s)
return s},
ma(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.b1(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.dh(a,"aE",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.au(null,null)
q.y=8
q.z=b
q.cy=c
return A.bd(a,q)},
me(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.au(null,null)
s.y=13
s.z=b
s.cy=q
r=A.bd(a,s)
a.eC.set(q,r)
return r},
fJ(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
m9(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dh(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fJ(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.au(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.bd(a,r)
a.eC.set(p,q)
return q},
jG(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.fJ(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.au(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.bd(a,o)
a.eC.set(q,n)
return n},
kw(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fJ(m)
if(j>0){s=l>0?",":""
r=A.fJ(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.m9(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.au(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.bd(a,o)
a.eC.set(q,r)
return r},
jH(a,b,c,d){var s,r=b.cy+("<"+A.fJ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.mb(a,b,c,r,d)
a.eC.set(r,s)
return s},
mb(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.iW(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.be(a,b,r,0)
m=A.dt(a,c,r,0)
return A.jH(a,n,m,c!==m)}}l=new A.au(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.bd(a,l)},
kr(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kt(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.m4(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.ks(a,r,h,g,!1)
else if(q===46)r=A.ks(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.bb(a.u,a.e,g.pop()))
break
case 94:g.push(A.me(a.u,g.pop()))
break
case 35:g.push(A.di(a.u,5,"#"))
break
case 64:g.push(A.di(a.u,2,"@"))
break
case 126:g.push(A.di(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.jF(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.dh(p,n,o))
else{m=A.bb(p,a.e,n)
switch(m.y){case 11:g.push(A.jH(p,m,o,a.n))
break
default:g.push(A.jG(p,m,o))
break}}break
case 38:A.m5(a,g)
break
case 42:p=a.u
g.push(A.ky(p,A.bb(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.jI(p,A.bb(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.kx(p,A.bb(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.f4()
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
A.jF(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.kw(p,A.bb(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.jF(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.m7(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.bb(a.u,a.e,i)},
m4(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ks(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.mj(s,o.z)[p]
if(n==null)A.T('No "'+p+'" in "'+A.lQ(o)+'"')
d.push(A.iV(s,o,n))}else d.push(p)
return m},
m5(a,b){var s=b.pop()
if(0===s){b.push(A.di(a.u,1,"0&"))
return}if(1===s){b.push(A.di(a.u,4,"1&"))
return}throw A.d(A.h0("Unexpected extended operation "+A.z(s)))},
bb(a,b,c){if(typeof c=="string")return A.dh(a,c,a.sEA)
else if(typeof c=="number")return A.m6(a,b,c)
else return c},
jF(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bb(a,b,c[s])},
m7(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bb(a,b,c[s])},
m6(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.d(A.h0("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.d(A.h0("Bad index "+c+" for "+b.k(0)))},
I(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.b1(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.b1(b))return!1
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
if(p===6){s=A.kh(a,d)
return A.I(a,b,c,s,e)}if(r===8){if(!A.I(a,b.z,c,d,e))return!1
return A.I(a,A.kg(a,b),c,d,e)}if(r===7){s=A.I(a,t.P,c,d,e)
return s&&A.I(a,b.z,c,d,e)}if(p===8){if(A.I(a,b,c,d.z,e))return!0
return A.I(a,b,c,A.kg(a,d),e)}if(p===7){s=A.I(a,b,c,t.P,e)
return s||A.I(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.m)return!0
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
if(!A.I(a,k,c,j,e)||!A.I(a,j,e,k,c))return!1}return A.kG(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return A.kG(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.mA(a,b,c,d,e)}return!1},
kG(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
mA(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iV(a,b,r[o])
return A.kA(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.kA(a,n,null,c,m,e)},
kA(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.I(a,r,d,q,f))return!1}return!0},
dw(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.b1(a))if(r!==7)if(!(r===6&&A.dw(a.z)))s=r===8&&A.dw(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ne(a){var s
if(!A.b1(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b1(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.O},
kz(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
iW(a){return a>0?new Array(a):v.typeUniverse.sEA},
au:function au(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
f4:function f4(){this.c=this.b=this.a=null},
fH:function fH(a){this.a=a},
f0:function f0(){},
dg:function dg(a){this.a=a},
lZ(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.mW()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.dv(new A.iw(q),1)).observe(s,{childList:true})
return new A.iv(q,s,r)}else if(self.setImmediate!=null)return A.mX()
return A.mY()},
m_(a){self.scheduleImmediate(A.dv(new A.ix(t.M.a(a)),0))},
m0(a){self.setImmediate(A.dv(new A.iy(t.M.a(a)),0))},
m1(a){t.M.a(a)
A.m8(0,a)},
m8(a,b){var s=new A.iT()
s.c_(a,b)
return s},
ds(a){return new A.eN(new A.J($.E,a.i("J<0>")),a.i("eN<0>"))},
dn(a,b){a.$2(0,null)
b.b=!0
return b.a},
aX(a,b){A.mo(a,b)},
dm(a,b){b.ah(0,a)},
dl(a,b){b.br(A.bh(a),A.bf(a))},
mo(a,b){var s,r,q=new A.iX(b),p=new A.iY(b)
if(a instanceof A.J)a.bj(q,p,t.z)
else{s=t.z
if(t.d.b(a))a.aR(q,p,s)
else{r=new A.J($.E,t.c)
r.a=8
r.c=a
r.bj(q,p,s)}}},
du(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.E.aP(new A.j0(s),t.H,t.S,t.z)},
h1(a,b){var s=A.j2(a,"error",t.K)
return new A.ck(s,b==null?A.lp(a):b)},
lp(a){var s
if(t.h.b(a)){s=a.ga9()
if(s!=null)return s}return B.b9},
jD(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.ac()
b.ap(a)
A.c2(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.bg(q)}},
c2(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.d;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.fW(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.c2(c.a,b)
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
A.fW(i.a,i.b)
return}f=$.E
if(f!==g)$.E=g
else f=null
b=b.c
if((b&15)===8)new A.iM(p,c,m).$0()
else if(n){if((b&1)!==0)new A.iL(p,i).$0()}else if((b&2)!==0)new A.iK(c,p).$0()
if(f!=null)$.E=f
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
continue}else A.jD(b,e)
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
mL(a,b){var s
if(t.C.b(a))return b.aP(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.k1(a,"onError",u.c))},
mI(){var s,r
for(s=$.c5;s!=null;s=$.c5){$.dr=null
r=s.b
$.c5=r
if(r==null)$.dq=null
s.a.$0()}},
mQ(){$.jL=!0
try{A.mI()}finally{$.dr=null
$.jL=!1
if($.c5!=null)$.jT().$1(A.kN())}},
kJ(a){var s=new A.eO(a),r=$.dq
if(r==null){$.c5=$.dq=s
if(!$.jL)$.jT().$1(A.kN())}else $.dq=r.b=s},
mO(a){var s,r,q,p=$.c5
if(p==null){A.kJ(a)
$.dr=$.dq
return}s=new A.eO(a)
r=$.dr
if(r==null){s.b=p
$.c5=$.dr=s}else{q=r.b
s.b=q
$.dr=r.b=s
if(q==null)$.dq=s}},
kX(a){var s=null,r=$.E
if(B.n===r){A.c6(s,s,B.n,a)
return}A.c6(s,s,r,t.M.a(r.bp(a)))},
nO(a,b){A.j2(a,"stream",t.K)
return new A.fv(b.i("fv<0>"))},
jO(a){return},
m2(a,b){if(b==null)b=A.n_()
if(t.da.b(b))return a.aP(b,t.z,t.K,t.l)
if(t.d5.b(b))return t.y.a(b)
throw A.d(A.ch("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
mK(a,b){A.fW(a,b)},
mJ(){},
fW(a,b){A.mO(new A.j_(a,b))},
kH(a,b,c,d,e){var s,r=$.E
if(r===c)return d.$0()
$.E=c
s=r
try{r=d.$0()
return r}finally{$.E=s}},
kI(a,b,c,d,e,f,g){var s,r=$.E
if(r===c)return d.$1(e)
$.E=c
s=r
try{r=d.$1(e)
return r}finally{$.E=s}},
mM(a,b,c,d,e,f,g,h,i){var s,r=$.E
if(r===c)return d.$2(e,f)
$.E=c
s=r
try{r=d.$2(e,f)
return r}finally{$.E=s}},
c6(a,b,c,d){t.M.a(d)
if(B.n!==c)d=c.bp(d)
A.kJ(d)},
iw:function iw(a){this.a=a},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
iT:function iT(){},
iU:function iU(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=!1
this.$ti=b},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
j0:function j0(a){this.a=a},
ck:function ck(a,b){this.a=a
this.b=b},
eS:function eS(){},
bD:function bD(a,b){this.a=a
this.$ti=b},
bG:function bG(a,b,c,d,e){var _=this
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
iC:function iC(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b){this.a=a
this.b=b},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
iE:function iE(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
this.b=b},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(a){this.a=a},
iL:function iL(a,b){this.a=a
this.b=b},
iK:function iK(a,b){this.a=a
this.b=b},
eO:function eO(a){this.a=a
this.b=null},
bA:function bA(){},
ic:function ic(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
aU:function aU(){},
dc:function dc(){},
iS:function iS(a){this.a=a},
eP:function eP(){},
c_:function c_(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
c0:function c0(a,b){this.a=a
this.$ti=b},
c1:function c1(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
cY:function cY(){},
dd:function dd(){},
eW:function eW(){},
bE:function bE(a,b){this.b=a
this.a=null
this.$ti=b},
bc:function bc(){},
iP:function iP(a,b){this.a=a
this.b=b},
aH:function aH(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
fv:function fv(a){this.$ti=a},
dj:function dj(){},
j_:function j_(a,b){this.a=a
this.b=b},
fm:function fm(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
bu(a,b,c){return b.i("@<0>").v(c).i("kb<1,2>").a(A.n4(a,new A.bs(b.i("@<0>").v(c).i("bs<1,2>"))))},
bt(a,b){return new A.bs(a.i("@<0>").v(b).i("bs<1,2>"))},
jv(a){return new A.d1(a.i("d1<0>"))},
jE(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
k8(a,b,c){var s,r
if(A.jN(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.m($.aj,a)
try{A.mH(a,s)}finally{if(0>=$.aj.length)return A.b($.aj,-1)
$.aj.pop()}r=A.kl(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
js(a,b,c){var s,r
if(A.jN(a))return b+"..."+c
s=new A.ex(b)
B.a.m($.aj,a)
try{r=s
r.a=A.kl(r.a,a,", ")}finally{if(0>=$.aj.length)return A.b($.aj,-1)
$.aj.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jN(a){var s,r
for(s=$.aj.length,r=0;r<s;++r)if(a===$.aj[r])return!0
return!1},
mH(a,b){var s,r,q,p,o,n,m,l=a.gw(a),k=0,j=0
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
jx(a){var s,r={}
if(A.jN(a))return"{...}"
s=new A.ex("")
try{B.a.m($.aj,a)
s.a+="{"
r.a=!0
J.lm(a,new A.hL(r,s))
s.a+="}"}finally{if(0>=$.aj.length)return A.b($.aj,-1)
$.aj.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d1:function d1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fb:function fb(a){this.a=a
this.b=null},
d2:function d2(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
f:function f(){},
cE:function cE(){},
hL:function hL(a,b){this.a=a
this.b=b},
w:function w(){},
hO:function hO(a){this.a=a},
cQ:function cQ(){},
d8:function d8(){},
dk:function dk(){},
lA(a){if(a instanceof A.bl)return a.k(0)
return"Instance of '"+A.i0(a)+"'"},
aR(a,b,c,d){var s,r=J.lF(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
lK(a,b,c){var s=A.lJ(a,c)
return s},
lJ(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.i("t<0>"))
s=A.e([],b.i("t<0>"))
for(r=J.aI(a);r.n();)B.a.m(s,r.gp(r))
return s},
jw(a,b,c){var s,r=J.lG(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
kl(a,b,c){var s=J.aI(b)
if(!s.n())return a
if(c.length===0){do a+=A.z(s.gp(s))
while(s.n())}else{a+=A.z(s.gp(s))
for(;s.n();)a=a+c+A.z(s.gp(s))}return a},
k5(a,b){return new A.aN(1000*a+1e6*b)},
dP(a){if(typeof a=="number"||A.jK(a)||a==null)return J.bI(a)
if(typeof a=="string")return JSON.stringify(a)
return A.lA(a)},
h0(a){return new A.cj(a)},
ch(a,b){return new A.aJ(!1,null,b,a)},
k1(a,b,c){return new A.aJ(!0,a,b,c)},
lP(a){var s=null
return new A.bT(s,s,!1,s,s,a)},
kf(a,b){return new A.bT(null,null,!0,a,b,"Value not in range")},
cN(a,b,c,d,e){return new A.bT(b,c,!0,a,d,"Invalid value")},
jB(a,b,c){if(0>a||a>c)throw A.d(A.cN(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.cN(b,a,c,"end",null))
return b}return c},
i2(a,b){if(a<0)throw A.d(A.cN(a,0,null,b,null))
return a},
H(a,b,c,d,e){var s=A.c3(e==null?J.a0(b):e)
return new A.dZ(s,!0,a,c,"Index out of range")},
x(a){return new A.eI(a)},
ko(a){return new A.eG(a)},
aT(a){return new A.aS(a)},
cm(a){return new A.dL(a)},
jq(a){return new A.iB(a)},
jz(a,b,c,d){var s,r
if(B.D===c){s=B.d.gt(a)
b=B.d.gt(b)
return A.jC(A.b7(A.b7($.jl(),s),b))}if(B.D===d){s=B.d.gt(a)
b=B.d.gt(b)
c=J.cb(c)
return A.jC(A.b7(A.b7(A.b7($.jl(),s),b),c))}s=B.d.gt(a)
b=B.d.gt(b)
c=J.cb(c)
d=J.cb(d)
r=$.jl()
return A.jC(A.b7(A.b7(A.b7(A.b7(r,s),b),c),d))},
jS(a){A.kV(A.z(a))},
aN:function aN(a){this.a=a},
iz:function iz(){},
C:function C(){},
cj:function cj(a){this.a=a},
b9:function b9(){},
ef:function ef(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dZ:function dZ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eI:function eI(a){this.a=a},
eG:function eG(a){this.a=a},
aS:function aS(a){this.a=a},
dL:function dL(a){this.a=a},
ei:function ei(){},
cR:function cR(){},
dN:function dN(a){this.a=a},
iB:function iB(a){this.a=a},
h:function h(){},
V:function V(){},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
L:function L(){},
y:function y(){},
fy:function fy(){},
ex:function ex(a){this.a=a},
nr(){return window},
kO(){return document},
f1(a,b,c,d,e){var s=A.kK(new A.iA(c),t.k)
if(s!=null&&!0)J.ll(a,b,s,!1)
return new A.d0(a,b,s,!1,e.i("d0<0>"))},
mp(a){var s
if("postMessage" in a){s=A.m3(a)
return s}else return t.ch.a(a)},
m3(a){if(a===window)return t.ci.a(a)
else return new A.eV()},
kK(a,b){var s=$.E
if(s===B.n)return a
return s.cM(a,b)},
n:function n(){},
fY:function fY(){},
dA:function dA(){},
dB:function dB(){},
dE:function dE(){},
dF:function dF(){},
bj:function bj(){},
aA:function aA(){},
hc:function hc(){},
A:function A(){},
cp:function cp(){},
hd:function hd(){},
ar:function ar(){},
aM:function aM(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
bM:function bM(){},
hh:function hh(){},
cq:function cq(){},
cr:function cr(){},
dO:function dO(){},
hi:function hi(){},
N:function N(){},
j:function j(){},
c:function c(){},
a9:function a9(){},
dQ:function dQ(){},
dR:function dR(){},
dU:function dU(){},
aa:function aa(){},
hy:function hy(){},
bp:function bp(){},
bN:function bN(){},
aP:function aP(){},
hK:function hK(){},
bx:function bx(){},
hQ:function hQ(){},
e5:function e5(){},
hS:function hS(a){this.a=a},
e6:function e6(){},
hT:function hT(a){this.a=a},
ac:function ac(){},
e7:function e7(){},
a5:function a5(){},
q:function q(){},
cK:function cK(){},
ad:function ad(){},
ek:function ek(){},
em:function em(){},
i5:function i5(a){this.a=a},
eo:function eo(){},
a6:function a6(){},
es:function es(){},
af:function af(){},
et:function et(){},
ag:function ag(){},
ew:function ew(){},
ib:function ib(a){this.a=a},
W:function W(){},
a7:function a7(){},
U:function U(){},
eA:function eA(){},
eB:function eB(){},
ij:function ij(){},
ah:function ah(){},
eC:function eC(){},
ik:function ik(){},
aG:function aG(){},
ip:function ip(){},
bX:function bX(){},
eK:function eK(){},
bZ:function bZ(){},
eT:function eT(){},
cZ:function cZ(){},
f5:function f5(){},
d3:function d3(){},
fq:function fq(){},
fz:function fz(){},
jp:function jp(a,b){this.a=a
this.$ti=b},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
d0:function d0(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iA:function iA(a){this.a=a},
o:function o(){},
cu:function cu(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eV:function eV(){},
eU:function eU(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f2:function f2(){},
f3:function f3(){},
f6:function f6(){},
f7:function f7(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fk:function fk(){},
fl:function fl(){},
fn:function fn(){},
d9:function d9(){},
da:function da(){},
fo:function fo(){},
fp:function fp(){},
ft:function ft(){},
fA:function fA(){},
fB:function fB(){},
de:function de(){},
df:function df(){},
fD:function fD(){},
fE:function fE(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
jA(){return B.q},
f8:function f8(){},
ak:function ak(){},
e2:function e2(){},
al:function al(){},
eg:function eg(){},
i_:function i_(){},
ey:function ey(){},
l:function l(){},
an:function an(){},
eD:function eD(){},
f9:function f9(){},
fa:function fa(){},
fi:function fi(){},
fj:function fj(){},
fw:function fw(){},
fx:function fx(){},
fF:function fF(){},
fG:function fG(){},
h2:function h2(){},
dC:function dC(){},
h3:function h3(a){this.a=a},
dD:function dD(){},
b2:function b2(){},
eh:function eh(){},
eR:function eR(){},
dG:function dG(){},
dV:function dV(){},
el:function el(){},
bU:function bU(){},
aV:function aV(){},
eF:function eF(){},
eJ:function eJ(){},
eu:function eu(){},
fr:function fr(){},
fs:function fs(){},
dY:function dY(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
jo(a){return new A.aL(a)},
aL:function aL(a){this.a=a},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k0(a,b,c,d){return new A.cd(d,b,c,a)},
nc(a,b){if(b.f)return!1
if(a.x)return!0
if(b.x)return!0
return!1},
cd:function cd(a,b,c,d){var _=this
_.a=100
_.c=a
_.f=b
_.x=c
_.z=d},
h7:function h7(){this.b=this.a=0},
nj(a,b,c){var s=b.f||b.a===0
if(s)return!1
return!1},
dW:function dW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
ht:function ht(a,b){this.a=a
this.b=b},
lM(a,b){return new A.k(a,b)},
hz(a){switch(a){case B.a_:case B.a0:case B.a2:case B.v:case B.w:case B.x:case B.N:case B.O:case B.I:case B.J:case B.K:case B.a1:case B.L:case B.u:case null:return!1
case B.r:case B.M:return!0}},
lB(a){switch(a){case B.a_:case B.a0:case B.a2:case B.v:case B.w:case B.x:case B.N:case B.O:case B.I:case B.J:case B.K:case B.a1:case B.L:case B.u:case null:return!1
case B.r:case B.M:return!0}},
bq:function bq(a){this.b=a},
bO:function bO(a,b){this.b=a
this.c=b},
R:function R(a,b){this.a=a
this.b=b},
dX:function dX(a){this.b=a},
b4:function b4(a){this.b=a},
bn:function bn(a){this.b=a},
aw:function aw(a){this.b=a},
hR:function hR(){},
b3:function b3(){},
bm:function bm(a){this.b=a},
S:function S(a,b){this.f=a
this.y=b},
ce:function ce(a){this.b=a},
cf:function cf(){},
ae:function ae(a,b){this.a=a
this.r=b},
bJ:function bJ(a){this.b=a},
a1:function a1(a){this.c=a},
bW:function bW(a){this.b=a},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
bB:function bB(a){this.b=a},
X:function X(a){this.b=a},
bv:function bv(a){this.b=a},
bi:function bi(a){this.b=a},
b8:function b8(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
e3:function e3(a){this.b=a},
k:function k(a,b){this.a=a
this.b=b},
hJ:function hJ(a){this.b=a},
P:function P(a){this.b=a},
hN:function hN(a,b){this.a=a
this.b=b},
hj:function hj(a){var _=this
_.a=a
_.b=!1
_.c=null
_.d=0},
hm:function hm(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
_.cy=$
_.db=null
_.dx=k
_.fr=_.dy=0
_.fy=l},
aD(a,b,c,d,e){return new A.hn(a,e,c,d,b)},
aC:function aC(){},
bL:function bL(a,b,c){var _=this
_.a=a
_.b=0
_.c=null
_.d=!0
_.e=b
_.f=c},
hn:function hn(a,b,c,d,e){var _=this
_.a=a
_.d=b
_.f=c
_.r=d
_.x=e},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(a,b){this.a=a
this.b=b},
ep:function ep(){},
cT:function cT(a,b){this.a=a
this.b=b},
dS:function dS(a){this.a=a},
hr:function hr(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
hp:function hp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fC:function fC(a){this.a=a
this.b=!0},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
bk:function bk(a){this.b=a},
i1:function i1(a,b){this.a=a
this.b=b},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
na(a){var s=a.f
if(s==null)return A.e([],t.U)
if(s===B.r)return A.e([new A.cw(new A.cT(!1,a.b))],t.U)
if(s===B.v)return A.e([new A.cw(new A.cT(!0,a.b))],t.U)
return A.e([],t.U)},
cw:function cw(a){this.b=a},
lI(a){var s=u.p,r="a_position",q="u_resolution",p="u_block_size",o="u_player_visible_texture",n="u_offset",m=t.G,l=t.o
return new A.e4(A.b5(A.e([new A.a2(r,35044,5126,2,new Float32Array(A.dp(B.z)))],m),u.h,A.e([new A.v(q,B.e),new A.v("u_source_position",B.e),new A.v(p,B.e),new A.v("u_source_color",B.a7),new A.v("u_source_strength",B.t),new A.v("u_time",B.t),new A.v("u_visible_texture",B.i),new A.v(o,B.i),new A.v(n,B.e)],l),s),A.b5(A.e([new A.a2(r,35044,5126,2,new Float32Array(A.dp(B.z)))],m),u.f,A.e([new A.v("u_light_texture",B.i),new A.v("u_game_world_texture",B.i),new A.v(o,B.i),new A.v(q,B.e),new A.v(p,B.e),new A.v(n,B.e)],l),s),a,A.e([],t.cd))},
e4:function e4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=d
_.y=_.x=0},
ly(a){switch(a){case B.E:return B.H
case B.F:return B.G
case B.G:return B.F
case B.H:return B.E
case B.j:return B.l
case B.k:return B.m
case B.l:return B.j
case B.m:return B.k}},
lx(a){switch(a){case B.j:return B.at
case B.k:return B.as
case B.l:return B.at
case B.m:return B.as
default:return B.bl}},
a_(a,b){switch(b){case B.j:return a.u(0,new A.k(0,-1))
case B.F:return a.u(0,new A.k(1,-1))
case B.k:return a.u(0,new A.k(1,0))
case B.E:return a.u(0,new A.k(1,1))
case B.l:return a.u(0,new A.k(0,1))
case B.G:return a.u(0,new A.k(-1,1))
case B.m:return a.u(0,new A.k(-1,0))
case B.H:return a.u(0,new A.k(-1,-1))}},
as:function as(a){this.b=a},
jn(a,b,c,d,e){return new A.a2(d,a,c,e,b)},
io(a,b){return new A.v(b,a)},
b5(a,b,c,d){var s=t.N
return new A.hw(d,b,c,a,A.bt(s,t.gz),A.bt(s,t.f2))},
kD(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.Q(a.getShaderParameter(s,35713),!0)){A.jS(J.bI(a.getShaderInfoLog(s)))
throw A.d(A.aT("Invalid Shader"))}return s},
a2:function a2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v:function v(a,b){this.a=a
this.b=b},
bC:function bC(a){this.b=a},
eQ:function eQ(a,b){this.a=a
this.c=b},
fI:function fI(a,b){this.a=a
this.b=b},
hw:function hw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
i3:function i3(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
i4:function i4(){},
er:function er(){},
mP(a,b){var s=t.d8
s.a(a)
s.a(b)
return B.f.ag(a.r,b.r)},
nf(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.J($.E,t.du),p=J.ln(r),o=p.$ti,n=o.i("~(1)?").a(new A.ja(a,s,r,new A.bD(q,t.f0)))
t.Z.a(null)
A.f1(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
lW(a,b){var s=A.e([new A.v("u_texture",B.i),new A.v("u_resolution",B.e),new A.v("u_offset",B.e)],t.o),r=new Float32Array(12e3),q=new Float32Array(12e3)
s=A.b5(A.e([new A.a2("a_position",35048,5126,2,r),new A.a2("a_texcoord",35048,5126,2,q),new A.a2("a_color",35048,5126,4,new Float32Array(24e3))],t.G),"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n}\n",s,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n}\n")
r=A.aR(7,null,!1,t.gM)
s=new A.i8(s,new A.dY(A.nm(),r,t.ep),b)
s.bY(a,b)
return s},
lV(a,b,c,d,e){return new A.am(c,d,a,b,e)},
k6(a,b,c){var s,r,q,p=null
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
case B.v:s=p
r=15
q=5
break
case B.M:s=p
r=5
q=11
break
case B.w:s=new A.aL(4286578432)
r=2
q=2
break
case B.x:s=new A.aL(4294967142)
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
case B.u:s=p
r=6
q=16
break
default:s=p
r=0
q=0}return new A.am(r,q,b,c,s)},
ja:function ja(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i8:function i8(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c
_.e=!1},
i9:function i9(a){this.a=a},
am:function am(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=0},
mr(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
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
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a,b){var _=this
_.a=a
_.b=null
_.c=!1
_.d=b},
mq(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
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
ho:function ho(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
n0(a){var s,r=A.jw(4000,new A.j1(a),t.W),q=A.e([],t.az)
for(s=0;s<4000;++s);return new A.ia(q,new A.O(100,40,r,t.L))},
kP(a){var s,r,q,p,o
for(s=a.b,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.k(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.b_(A.hz(o.f))))return p}throw A.d("Solid")},
iu:function iu(a,b){this.a=a
this.d=b},
j1:function j1(a){this.a=a},
ia:function ia(a,b){this.a=a
this.b=b},
dH:function dH(a){this.a=a},
hb:function hb(a){this.a=a},
hu:function hu(){},
hv:function hv(a){this.a=a},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
jk(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.C))break
q=A.a_(q,b);++p}return p},
bH(a,b,c){var s=A.a_(a,b)
if(c.e.h(0,s)===B.C)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
bY(a,b){return new A.cX(a,b)},
dx(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.e([],t.D)
for(s=a2.length,r=a1.a,q=J.fX(r),p=t.q,o=t.t,n=0;n<a2.length;a2.length===s||(0,A.D)(a2),++n){m=a2[n]
l=A.e([],p)
k=A.e([],o)
for(j=q.gw(r),i=0;j.n();){h=j.gp(j)
g=m.a.O(h,a3)
if(g<1000){B.a.m(l,h)
B.a.m(k,g)
i+=g}}if(l.length===0){B.a.m(a0,m)
continue}for(f=0,e=0;e<k.length;++e,f=d){d=k[e]/i+f
B.a.j(k,e,d)}c=$.lc().a4()
for(j=k.length,h=l.length,b=B.A,a=-1,e=0;e<j;++e,a=g){g=k[e]
if(c>=a&&c<g){if(!(e<h))return A.b(l,e)
b=l[e]}}j=0===b.a&&0===b.b
if(j){B.a.m(a0,m)
continue}m.d5(b,a3)}for(s=q.gw(r),r=a3.e,q=a1.c;s.n();){p=s.gp(s)
if(r.h(0,p)===B.Q||r.h(0,p)===B.R)B.a.m(q,p)}return a0},
kY(a,b){var s,r,q,p,o,n,m,l,k
B.a.am(a,new A.jj())
if(0>=a.length)return A.b(a,0)
A.dx(a[0],$.lj(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.D)(s),++p)q.j(0,s[p],B.av)
for(s=A.km(a,1,null,A.ao(a).c),r=s.$ti,s=new A.aQ(s,s.gl(s),r.i("aQ<at.E>")),r=r.i("at.E"),o=t.h0,n=2;s.n();){m=r.a(s.d)
l=m.a
k=J.aq(l)
if(k.gl(l)<30){if(n>0){l=A.lK($.jm(),!0,o)
l.push($.jX())}else l=$.jm()
if(!B.a.L(A.dx(m,l,b),$.jX()))--n}else if(k.gl(l)<60)A.dx(m,$.lf(),b)
else if(k.gl(l)<100)A.dx(m,$.le(),b)
else A.dx(m,$.ld(),b)}if(n===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.D)(s),++p)q.j(0,s[p],B.aw)}},
aB:function aB(){},
eL:function eL(){},
cg:function cg(a){this.$ti=a},
cM:function cM(a){this.$ti=a},
dI:function dI(){},
dz:function dz(){},
dM:function dM(){},
cc:function cc(a){this.a=a},
cX:function cX(a,b){this.a=a
this.b=b},
ji:function ji(){},
je:function je(){},
jg:function jg(){},
jd:function jd(){},
jf:function jf(){},
jh:function jh(){},
jc:function jc(){},
jj:function jj(){},
lz(a){var s=t.q
return new A.a3(a,A.e([],s),A.e([],s),A.hl(a))},
hl(a){var s,r,q=J.aq(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gl(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.k(B.d.D(p/q.gl(a)),B.d.D(o/q.gl(a)))},
cv:function cv(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(){},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hk:function hk(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
e_:function e_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
hF:function hF(a,b){this.a=a
this.b=b},
hX:function hX(){},
hA:function hA(a){this.a=a},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hZ:function hZ(){},
b6:function b6(a){this.b=a},
cP:function cP(a){this.b=a},
i6:function i6(a,b){this.b=a
this.a=b},
cO:function cO(a,b){this.a=a
this.b=b},
ie:function ie(a){this.a=a},
ig:function ig(){},
ih:function ih(a){this.a=a},
lY(a){var s=new A.ir(new A.c_(null,null,null,t.fQ))
s.bZ(a)
return s},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
ab:function ab(a){this.b=a},
fZ:function fZ(a,b){this.a=a
this.b=$
this.c=b},
h_:function h_(a){this.a=a},
lL(){var s=new A.hU()
s.bX()
return s},
hU:function hU(){this.a=$},
hV:function hV(a){this.a=a},
kV(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
no(a){return A.T(A.ka(a))},
aZ(a,b){if(a===$)throw A.d(new A.cB("Field '"+b+"' has not been initialized."))
return a},
fV(a,b){if(a!==$)throw A.d(A.ka(b))},
kC(a){var s,r,q
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.jK(a))return a
s=Object.getPrototypeOf(a)
if(s===Object.prototype||s===null)return A.b0(a)
if(Array.isArray(a)){r=[]
for(q=0;q<a.length;++q)r.push(A.kC(a[q]))
return r}return a},
b0(a){var s,r,q,p,o
if(a==null)return null
s=A.bt(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.D)(r),++p){o=r[p]
s.j(0,o,A.kC(a[o]))}return s},
nl(a){A.ay(a)
$.jU().a5(a,$.jV())
B.aJ.bE(window,A.kS())},
nh(){var s,r,q
new A.fZ(A.lL(),A.e(["spell","stats","inventory"],t.s)).cY()
s=$.jU()
r=t.w
r=new A.dW(s,A.e([],r),A.e([],r),A.e([],t.f_),A.e([],t.eU))
q=s.cx.a
new A.c0(q,A.B(q).i("c0<1>")).d3(r.gcT())
r=t.x.a(r.gbf())
B.a.m(s.d,r)
B.aJ.bE(window,A.kS())}},J={
jR(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j5(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.jQ==null){A.n8()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.ko("Return interceptor for "+A.z(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iO
if(o==null)o=$.iO=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.ng(a)
if(p!=null)return p
if(typeof a=="function")return B.bd
s=Object.getPrototypeOf(a)
if(s==null)return B.ax
if(s===Object.prototype)return B.ax
if(typeof q=="function"){o=$.iO
if(o==null)o=$.iO=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.a8,enumerable:false,writable:true,configurable:true})
return B.a8}return B.a8},
lF(a,b){if(a<0||a>4294967295)throw A.d(A.cN(a,0,4294967295,"length",null))
return J.lH(new Array(a),b)},
lG(a,b){if(a<0)throw A.d(A.ch("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("t<0>"))},
lH(a,b){return J.k9(A.e(a,b.i("t<0>")),b)},
k9(a,b){a.fixed$length=Array
return a},
c9(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cy.prototype
return J.e0.prototype}if(typeof a=="string")return J.bP.prototype
if(a==null)return J.cz.prototype
if(typeof a=="boolean")return J.cx.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof A.y)return a
return J.j5(a)},
aq(a){if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof A.y)return a
return J.j5(a)},
fX(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof A.y)return a
return J.j5(a)},
j4(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof A.y)return a
return J.j5(a)},
Q(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.c9(a).E(a,b)},
jZ(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.nd(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aq(a).h(a,b)},
ll(a,b,c,d){return J.j4(a).cJ(a,b,c,d)},
k_(a,b){return J.fX(a).q(a,b)},
lm(a,b){return J.fX(a).C(a,b)},
cb(a){return J.c9(a).gt(a)},
aI(a){return J.fX(a).gw(a)},
a0(a){return J.aq(a).gl(a)},
ln(a){return J.j4(a).gaO(a)},
lo(a,b,c){return J.fX(a).bz(a,b,c)},
bI(a){return J.c9(a).k(a)},
a:function a(){},
cx:function cx(){},
cz:function cz(){},
br:function br(){},
ej:function ej(){},
cV:function cV(){},
aO:function aO(){},
t:function t(a){this.$ti=a},
hG:function hG(a){this.$ti=a},
ci:function ci(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cA:function cA(){},
cy:function cy(){},
e0:function e0(){},
bP:function bP(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.jt.prototype={}
J.a.prototype={
E(a,b){return a===b},
gt(a){return A.bS(a)},
k(a){return"Instance of '"+A.i0(a)+"'"}}
J.cx.prototype={
k(a){return String(a)},
bO(a,b){return b||a},
gt(a){return a?519018:218159},
$iM:1}
J.cz.prototype={
E(a,b){return null==b},
k(a){return"null"},
gt(a){return 0},
$iL:1}
J.br.prototype={
gt(a){return 0},
k(a){return String(a)}}
J.ej.prototype={}
J.cV.prototype={}
J.aO.prototype={
k(a){var s=a[$.l_()]
if(s==null)return this.bU(a)
return"JavaScript function for "+J.bI(s)},
$ibo:1}
J.t.prototype={
m(a,b){A.ao(a).c.a(b)
if(!!a.fixed$length)A.T(A.x("add"))
a.push(b)},
bD(a,b){var s
if(!!a.fixed$length)A.T(A.x("removeAt"))
s=a.length
if(b>=s)throw A.d(A.kf(b,null))
return a.splice(b,1)[0]},
J(a,b){var s
if(!!a.fixed$length)A.T(A.x("remove"))
for(s=0;s<a.length;++s)if(J.Q(a[s],b)){a.splice(s,1)
return!0}return!1},
ae(a,b){A.ao(a).i("h<1>").a(b)
if(!!a.fixed$length)A.T(A.x("addAll"))
this.c1(a,b)
return},
c1(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.cm(a))
for(r=0;r<s;++r)a.push(b[r])},
bz(a,b,c){var s=A.ao(a)
return new A.cG(a,s.v(c).i("1(2)").a(b),s.i("@<1>").v(c).i("cG<1,2>"))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
gbS(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.d(A.lC())
throw A.d(A.lE())},
aX(a,b,c,d){var s,r,q,p
A.ao(a).i("h<1>").a(d)
if(!!a.immutable$list)A.T(A.x("setRange"))
A.jB(b,c,a.length)
s=c-b
if(s===0)return
A.i2(0,"skipCount")
r=d
q=J.aq(r)
if(s>q.gl(r))throw A.d(A.lD())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
am(a,b){var s=A.ao(a)
s.i("i(1,1)?").a(b)
if(!!a.immutable$list)A.T(A.x("sort"))
A.lT(a,b,s.c)},
bR(a){var s,r,q,p
if(!!a.immutable$list)A.T(A.x("shuffle"))
s=a.length
for(;s>1;){r=B.q.A(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
cX(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.Q(a[s],b))return s}return-1},
L(a,b){var s
for(s=0;s<a.length;++s)if(J.Q(a[s],b))return!0
return!1},
k(a){return A.js(a,"[","]")},
gw(a){return new J.ci(a,a.length,A.ao(a).i("ci<1>"))},
gt(a){return A.bS(a)},
gl(a){return a.length},
sl(a,b){if(!!a.fixed$length)A.T(A.x("set length"))
if(b>a.length)A.ao(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.c8(a,b))
return a[b]},
j(a,b,c){A.ao(a).c.a(c)
if(!!a.immutable$list)A.T(A.x("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.c8(a,b))
a[b]=c},
$im:1,
$ih:1,
$ip:1}
J.hG.prototype={}
J.ci.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.D(q))
s=r.c
if(s>=p){r.sb7(null)
return!1}r.sb7(q[s]);++r.c
return!0},
sb7(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
J.cA.prototype={
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
a6(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.x(""+a+".toInt()"))},
cN(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.x(""+a+".ceil()"))},
ai(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.x(""+a+".floor()"))},
D(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.x(""+a+".round()"))},
aj(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
cO(a,b,c){if(B.f.ag(b,c)>0)throw A.d(A.kM(b))
if(this.ag(a,b)<0)return b
if(this.ag(a,c)>0)return c
return a},
df(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.cN(b,2,36,"radix",null))
s=a.toString(b)
if(B.y.cP(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.T(A.x("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.y.aW("0",p)},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
bV(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bi(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.bi(a,b)},
bi(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.x("Result of truncating division is "+A.z(s)+": "+A.z(a)+" ~/ "+b))},
ct(a,b){var s
if(a>0)s=this.cs(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cs(a,b){return b>31?0:a>>>b},
$iF:1,
$iK:1}
J.cy.prototype={$ii:1}
J.e0.prototype={}
J.bP.prototype={
cP(a,b){if(b<0)throw A.d(A.c8(a,b))
if(b>=a.length)A.T(A.c8(a,b))
return a.charCodeAt(b)},
u(a,b){return a+b},
aW(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.b8)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bB(a,b,c){var s=b-a.length
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
h(a,b){if(b>=a.length)throw A.d(A.c8(a,b))
return a[b]},
$ir:1}
A.cB.prototype={
k(a){var s="LateInitializationError: "+this.a
return s}}
A.i7.prototype={}
A.m.prototype={}
A.at.prototype={
gw(a){var s=this
return new A.aQ(s,s.gl(s),A.B(s).i("aQ<at.E>"))}}
A.cS.prototype={
gce(){var s=J.a0(this.a),r=this.c
if(r==null||r>s)return s
return r},
gcu(){var s=J.a0(this.a),r=this.b
if(r>s)return s
return r},
gl(a){var s,r=J.a0(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.dr()
return s-q},
q(a,b){var s=this,r=s.gcu()+b
if(b<0||r>=s.gce())throw A.d(A.H(b,s,"index",null,null))
return J.k_(s.a,r)}}
A.aQ.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.aq(q),o=p.gl(q)
if(r.b!==o)throw A.d(A.cm(q))
s=r.c
if(s>=o){r.sa1(null)
return!1}r.sa1(p.q(q,s));++r.c
return!0},
sa1(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
A.bw.prototype={
gw(a){var s=A.B(this)
return new A.cF(J.aI(this.a),this.b,s.i("@<1>").v(s.Q[1]).i("cF<1,2>"))},
gl(a){return J.a0(this.a)}}
A.cs.prototype={$im:1}
A.cF.prototype={
n(){var s=this,r=s.b
if(r.n()){s.sa1(s.c.$1(r.gp(r)))
return!0}s.sa1(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
sa1(a){this.a=this.$ti.i("2?").a(a)}}
A.cG.prototype={
gl(a){return J.a0(this.a)},
q(a,b){return this.b.$1(J.k_(this.a,b))}}
A.ax.prototype={
gw(a){return new A.cW(J.aI(this.a),this.b,this.$ti.i("cW<1>"))}}
A.cW.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.b_(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.a4.prototype={}
A.cn.prototype={
k(a){return A.jx(this)},
$iG:1}
A.co.prototype={
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
A.il.prototype={
I(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.cL.prototype={
k(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.e1.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eH.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hY.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ct.prototype={}
A.db.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iav:1}
A.bl.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.kZ(r==null?"unknown":r)+"'"},
$ibo:1,
gdn(){return this},
$C:"$1",
$R:1,
$D:null}
A.dJ.prototype={$C:"$0",$R:0}
A.dK.prototype={$C:"$2",$R:2}
A.ez.prototype={}
A.ev.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.kZ(s)+"'"}}
A.bK.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bK))return!1
return this.$_target===b.$_target&&this.a===b.a},
gt(a){return(A.kT(this.a)^A.bS(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.i0(t.K.a(this.a))+"'")}}
A.en.prototype={
k(a){return"RuntimeError: "+this.a}}
A.eM.prototype={
k(a){return"Assertion failed: "+A.dP(this.a)}}
A.bs.prototype={
gl(a){return this.a},
gM(a){return new A.cC(this,A.B(this).i("cC<1>"))},
gaU(a){var s=this,r=A.B(s)
return A.kc(s.gM(s),new A.hH(s),r.c,r.Q[1])},
aF(a,b){var s=this.d_(b)
return s},
d_(a){var s=this,r=s.d
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
return q}else return o.d0(b)},
d0(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.av(p,q.aI(a))
r=q.aJ(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.B(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.b0(s==null?q.b=q.az():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.b0(r==null?q.c=q.az():r,b,c)}else q.d1(b,c)},
d1(a,b){var s,r,q,p,o=this,n=A.B(o)
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
A.B(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.cm(q))
s=s.c}},
b0(a,b,c){var s,r=this,q=A.B(r)
q.c.a(b)
q.Q[1].a(c)
s=r.aw(a,b)
if(s==null)r.aD(a,b,r.aA(b,c))
else s.b=c},
aA(a,b){var s=this,r=A.B(s),q=new A.hI(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&67108863
return q},
aI(a){return J.cb(a)&0x3ffffff},
aJ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Q(a[r].a,b))return r
return-1},
k(a){return A.jx(this)},
aw(a,b){return a[b]},
av(a,b){return a[b]},
aD(a,b,c){a[b]=c},
cc(a,b){delete a[b]},
az(){var s="<non-identifier-key>",r=Object.create(null)
this.aD(r,s,r)
this.cc(r,s)
return r},
$ikb:1}
A.hH.prototype={
$1(a){var s=this.a,r=A.B(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.B(this.a).i("2(1)")}}
A.hI.prototype={}
A.cC.prototype={
gl(a){return this.a.a},
gw(a){var s=this.a,r=new A.cD(s,s.r,this.$ti.i("cD<1>"))
r.c=s.e
return r}}
A.cD.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.cm(q))
s=r.c
if(s==null){r.sb_(null)
return!1}else{r.sb_(s.a)
r.c=s.c
return!0}},
sb_(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
A.j6.prototype={
$1(a){return this.a(a)},
$S:37}
A.j7.prototype={
$2(a,b){return this.a(a,b)},
$S:25}
A.j8.prototype={
$1(a){return this.a(A.a8(a))},
$S:15}
A.bz.prototype={$iai:1}
A.bR.prototype={
gl(a){return a.length},
$iu:1}
A.by.prototype={
h(a,b){A.aY(b,a,a.length)
return a[b]},
j(a,b,c){A.mk(c)
A.aY(b,a,a.length)
a[b]=c},
$im:1,
$ih:1,
$ip:1}
A.cI.prototype={
j(a,b,c){A.c3(c)
A.aY(b,a,a.length)
a[b]=c},
$im:1,
$ih:1,
$ip:1}
A.cH.prototype={$ijr:1}
A.e9.prototype={
h(a,b){A.aY(b,a,a.length)
return a[b]}}
A.ea.prototype={
h(a,b){A.aY(b,a,a.length)
return a[b]}}
A.eb.prototype={
h(a,b){A.aY(b,a,a.length)
return a[b]}}
A.ec.prototype={
h(a,b){A.aY(b,a,a.length)
return a[b]}}
A.ed.prototype={
h(a,b){A.aY(b,a,a.length)
return a[b]}}
A.cJ.prototype={
gl(a){return a.length},
h(a,b){A.aY(b,a,a.length)
return a[b]}}
A.ee.prototype={
gl(a){return a.length},
h(a,b){A.aY(b,a,a.length)
return a[b]},
$ilX:1}
A.d4.prototype={}
A.d5.prototype={}
A.d6.prototype={}
A.d7.prototype={}
A.au.prototype={
i(a){return A.iV(v.typeUniverse,this,a)},
v(a){return A.mh(v.typeUniverse,this,a)}}
A.f4.prototype={}
A.fH.prototype={
k(a){return A.Z(this.a,null)}}
A.f0.prototype={
k(a){return this.a}}
A.dg.prototype={$ib9:1}
A.iw.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:11}
A.iv.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:38}
A.ix.prototype={
$0(){this.a.$0()},
$S:4}
A.iy.prototype={
$0(){this.a.$0()},
$S:4}
A.iT.prototype={
c_(a,b){if(self.setTimeout!=null)self.setTimeout(A.dv(new A.iU(this,b),0),a)
else throw A.d(A.x("`setTimeout()` not found."))}}
A.iU.prototype={
$0(){this.b.$0()},
$S:0}
A.eN.prototype={
ah(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.b1(b)
else{s=r.a
if(q.i("aE<1>").b(b))s.b3(b)
else s.ar(q.c.a(b))}},
br(a,b){var s=this.a
if(this.b)s.a_(a,b)
else s.b2(a,b)}}
A.iX.prototype={
$1(a){return this.a.$2(0,a)},
$S:22}
A.iY.prototype={
$2(a,b){this.a.$2(1,new A.ct(a,t.l.a(b)))},
$S:19}
A.j0.prototype={
$2(a,b){this.a(A.c3(a),b)},
$S:17}
A.ck.prototype={
k(a){return A.z(this.a)},
$iC:1,
ga9(){return this.b}}
A.eS.prototype={
br(a,b){var s
A.j2(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.d(A.aT("Future already completed"))
s.b2(a,b)}}
A.bD.prototype={
ah(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.aT("Future already completed"))
s.b1(r.i("1/").a(b))},
cQ(a){return this.ah(a,null)}}
A.bG.prototype={
d4(a){if((this.c&15)!==6)return!0
return this.b.b.aQ(t.al.a(this.d),a.a,t.cJ,t.K)},
cV(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.da(q,m,a.b,o,n,t.l)
else p=l.aQ(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.eK.b(A.bh(s))){if((r.c&1)!==0)throw A.d(A.ch("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.ch("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.J.prototype={
aR(a,b,c){var s,r,q,p=this.$ti
p.v(c).i("1/(2)").a(a)
s=$.E
if(s===B.n){if(b!=null&&!t.C.b(b)&&!t.y.b(b))throw A.d(A.k1(b,"onError",u.c))}else{c.i("@<0/>").v(p.c).i("1(2)").a(a)
if(b!=null)b=A.mL(b,s)}r=new A.J(s,c.i("J<0>"))
q=b==null?1:3
this.an(new A.bG(r,q,a,b,p.i("@<1>").v(c).i("bG<1,2>")))
return r},
bG(a,b){return this.aR(a,null,b)},
bj(a,b,c){var s,r=this.$ti
r.v(c).i("1/(2)").a(a)
s=new A.J($.E,c.i("J<0>"))
this.an(new A.bG(s,19,a,b,r.i("@<1>").v(c).i("bG<1,2>")))
return s},
cq(a){this.a=this.a&1|16
this.c=a},
ap(a){this.a=a.a&30|this.a&1
this.c=a.c},
an(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.an(a)
return}r.ap(s)}A.c6(null,null,r.b,t.M.a(new A.iC(r,a)))}},
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
A.c6(null,null,m.b,t.M.a(new A.iJ(l,m)))}},
ac(){var s=t.F.a(this.c)
this.c=null
return this.ad(s)},
ad(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
c7(a){var s,r,q,p=this
p.a^=2
try{a.aR(new A.iF(p),new A.iG(p),t.P)}catch(q){s=A.bh(q)
r=A.bf(q)
A.kX(new A.iH(p,s,r))}},
ar(a){var s,r=this
r.$ti.c.a(a)
s=r.ac()
r.a=8
r.c=a
A.c2(r,s)},
a_(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.ac()
this.cq(A.h1(a,b))
A.c2(this,s)},
b1(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aE<1>").b(a)){this.b3(a)
return}this.c4(s.c.a(a))},
c4(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.c6(null,null,s.b,t.M.a(new A.iE(s,a)))},
b3(a){var s=this,r=s.$ti
r.i("aE<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.c6(null,null,s.b,t.M.a(new A.iI(s,a)))}else A.jD(a,s)
return}s.c7(a)},
b2(a,b){this.a^=2
A.c6(null,null,this.b,t.M.a(new A.iD(this,a,b)))},
$iaE:1}
A.iC.prototype={
$0(){A.c2(this.a,this.b)},
$S:0}
A.iJ.prototype={
$0(){A.c2(this.b,this.a.a)},
$S:0}
A.iF.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.ar(p.$ti.c.a(a))}catch(q){s=A.bh(q)
r=A.bf(q)
p.a_(s,r)}},
$S:11}
A.iG.prototype={
$2(a,b){this.a.a_(t.K.a(a),t.l.a(b))},
$S:12}
A.iH.prototype={
$0(){this.a.a_(this.b,this.c)},
$S:0}
A.iE.prototype={
$0(){this.a.ar(this.b)},
$S:0}
A.iI.prototype={
$0(){A.jD(this.b,this.a)},
$S:0}
A.iD.prototype={
$0(){this.a.a_(this.b,this.c)},
$S:0}
A.iM.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.d9(t.fO.a(q.d),t.z)}catch(p){s=A.bh(p)
r=A.bf(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.h1(s,r)
o.b=!0
return}if(l instanceof A.J&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.bG(new A.iN(n),t.z)
q.b=!1}},
$S:0}
A.iN.prototype={
$1(a){return this.a},
$S:13}
A.iL.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.aQ(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bh(l)
r=A.bf(l)
q=this.a
q.c=A.h1(s,r)
q.b=!0}},
$S:0}
A.iK.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.d4(s)&&p.a.e!=null){p.c=p.a.cV(s)
p.b=!1}}catch(o){r=A.bh(o)
q=A.bf(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.h1(r,q)
n.b=!0}},
$S:0}
A.eO.prototype={}
A.bA.prototype={
gl(a){var s={},r=new A.J($.E,t.fJ)
s.a=0
this.aL(new A.ic(s,this),!0,new A.id(s,r),r.gc9())
return r}}
A.ic.prototype={
$1(a){A.B(this.b).c.a(a);++this.a.a},
$S(){return A.B(this.b).i("~(1)")}}
A.id.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.ac()
r.c.a(q)
s.a=8
s.c=q
A.c2(s,p)},
$S:0}
A.aU.prototype={}
A.dc.prototype={
gcl(){var s,r=this
if((r.b&8)===0)return A.B(r).i("bc<1>?").a(r.a)
s=A.B(r)
return s.i("bc<1>?").a(s.i("fu<1>").a(r.a).gaV())},
cf(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.aH(A.B(q).i("aH<1>"))
return A.B(q).i("aH<1>").a(s)}r=A.B(q)
s=r.i("fu<1>").a(q.a).gaV()
return r.i("aH<1>").a(s)},
gcw(){var s=this.a
if((this.b&8)!==0)s=t.fv.a(s).gaV()
return A.B(this).i("c1<1>").a(s)},
c5(){if((this.b&4)!==0)return new A.aS("Cannot add event after closing")
return new A.aS("Cannot add event while adding a stream")},
cv(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=A.B(l)
k.i("~(1)?").a(a)
t.Z.a(c)
if((l.b&3)!==0)throw A.d(A.aT("Stream has already been listened to."))
s=$.E
r=d?1:0
t.a7.v(k.c).i("1(2)").a(a)
A.m2(s,b)
q=c==null?A.mZ():c
p=t.M
p.a(q)
o=new A.c1(l,a,s,r,k.i("c1<1>"))
n=l.gcl()
r=l.b|=1
if((r&8)!==0){m=k.i("fu<1>").a(l.a)
m.saV(o)
m.d7(0)}else l.a=o
o.cr(n)
k=p.a(new A.iS(l))
s=o.e
o.e=s|32
k.$0()
o.e&=4294967263
o.b4((s&4)!==0)
return o},
$ikk:1,
$iku:1,
$ibF:1}
A.iS.prototype={
$0(){A.jO(this.a.d)},
$S:0}
A.eP.prototype={
aC(a){var s=this.$ti
s.c.a(a)
this.gcw().c3(new A.bE(a,s.i("bE<1>")))}}
A.c_.prototype={}
A.c0.prototype={
gt(a){return(A.bS(this.a)^892482866)>>>0},
E(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.c0&&b.a===this.a}}
A.c1.prototype={
bd(){var s=this.x,r=A.B(s)
r.i("aU<1>").a(this)
if((s.b&8)!==0)r.i("fu<1>").a(s.a).ds(0)
A.jO(s.e)},
be(){var s=this.x,r=A.B(s)
r.i("aU<1>").a(this)
if((s.b&8)!==0)r.i("fu<1>").a(s.a).d7(0)
A.jO(s.f)}}
A.cY.prototype={
cr(a){var s=this
A.B(s).i("bc<1>?").a(a)
if(a==null)return
s.saB(a)
if(a.c!=null){s.e|=64
a.al(s)}},
bd(){},
be(){},
c3(a){var s=this,r=A.B(s),q=r.i("aH<1>?").a(s.r)
if(q==null)q=new A.aH(r.i("aH<1>"))
s.saB(q)
q.m(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.al(s)}},
aC(a){var s,r=this,q=A.B(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.bF(r.a,a,q)
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
saB(a){this.r=A.B(this).i("bc<1>?").a(a)},
$iaU:1,
$ibF:1}
A.dd.prototype={
aL(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.cv(s.i("~(1)?").a(a),d,c,b===!0)},
d3(a){return this.aL(a,null,null,null)}}
A.eW.prototype={}
A.bE.prototype={}
A.bc.prototype={
al(a){var s,r=this
r.$ti.i("bF<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.kX(new A.iP(r,a))
r.a=1}}
A.iP.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("bF<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.B(r).i("bF<1>").a(s).aC(r.b)},
$S:0}
A.aH.prototype={
m(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.fv.prototype={}
A.dj.prototype={$ikp:1}
A.j_.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.k(0)
throw s},
$S:0}
A.fm.prototype={
dc(a){var s,r,q,p,o
t.M.a(a)
try{if(B.n===$.E){a.$0()
return}A.kH(null,null,this,a,t.H)}catch(q){s=A.bh(q)
r=A.bf(q)
p=t.K.a(s)
o=t.l.a(r)
A.fW(p,o)}},
bF(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.n===$.E){a.$1(b)
return}A.kI(null,null,this,a,b,t.H,c)}catch(q){s=A.bh(q)
r=A.bf(q)
p=t.K.a(s)
o=t.l.a(r)
A.fW(p,o)}},
bp(a){return new A.iQ(this,t.M.a(a))},
cM(a,b){return new A.iR(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
d9(a,b){b.i("0()").a(a)
if($.E===B.n)return a.$0()
return A.kH(null,null,this,a,b)},
aQ(a,b,c,d){c.i("@<0>").v(d).i("1(2)").a(a)
d.a(b)
if($.E===B.n)return a.$1(b)
return A.kI(null,null,this,a,b,c,d)},
da(a,b,c,d,e,f){d.i("@<0>").v(e).v(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.E===B.n)return a.$2(b,c)
return A.mM(null,null,this,a,b,c,d,e,f)},
aP(a,b,c,d){return b.i("@<0>").v(c).v(d).i("1(2,3)").a(a)}}
A.iQ.prototype={
$0(){return this.a.dc(this.b)},
$S:0}
A.iR.prototype={
$1(a){var s=this.c
return this.a.bF(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.d1.prototype={
gw(a){var s=this,r=new A.d2(s,s.r,s.$ti.i("d2<1>"))
r.c=s.e
return r},
gl(a){return this.a},
L(a,b){var s=this.ca(b)
return s},
ca(a){var s=this.d
if(s==null)return!1
return this.b9(s[a.gt(a)&1073741823],a)>=0},
m(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.b5(s==null?q.b=A.jE():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.b5(r==null?q.c=A.jE():r,b)}else return q.c8(0,b)},
c8(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.jE()
r=J.cb(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.aq(b)]
else{if(p.b9(q,b)>=0)return!1
q.push(p.aq(b))}return!0},
b5(a,b){this.$ti.c.a(b)
if(t.hg.a(a[b])!=null)return!1
a[b]=this.aq(b)
return!0},
aq(a){var s=this,r=new A.fb(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
b9(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Q(a[r].a,b))return r
return-1}}
A.fb.prototype={}
A.d2.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.cm(q))
else if(r==null){s.sb6(null)
return!1}else{s.sb6(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sb6(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
A.f.prototype={
gw(a){return new A.aQ(a,this.gl(a),A.az(a).i("aQ<f.E>"))},
q(a,b){return this.h(a,b)},
cS(a,b,c,d){var s,r=A.az(a)
d=r.i("f.E").a(r.i("f.E?").a(d))
A.jB(b,c,this.gl(a))
for(s=b;s<c;++s)this.j(a,s,d)},
k(a){return A.js(a,"[","]")}}
A.cE.prototype={}
A.hL.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.z(a)
r.a=s+": "
r.a+=A.z(b)},
$S:20}
A.w.prototype={
C(a,b){var s,r,q=A.az(a)
q.i("~(w.K,w.V)").a(b)
for(s=J.aI(this.gM(a)),q=q.i("w.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gbt(a){return J.lo(this.gM(a),new A.hO(a),A.az(a).i("bQ<w.K,w.V>"))},
gl(a){return J.a0(this.gM(a))},
k(a){return A.jx(a)},
$iG:1}
A.hO.prototype={
$1(a){var s,r=this.a,q=A.az(r)
q.i("w.K").a(a)
s=q.i("w.V")
return new A.bQ(a,s.a(J.jZ(r,a)),q.i("@<w.K>").v(s).i("bQ<1,2>"))},
$S(){return A.az(this.a).i("bQ<w.K,w.V>(w.K)")}}
A.cQ.prototype={
k(a){return A.js(this,"{","}")}}
A.d8.prototype={$im:1,$ih:1,$ikj:1}
A.dk.prototype={}
A.aN.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.aN&&this.a===b.a},
gt(a){return B.f.gt(this.a)},
k(a){var s,r,q,p,o,n=this.a,m=B.f.K(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.f.K(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.f.K(n,1e6)
p=q<10?"0":""
o=B.y.bB(B.f.k(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o}}
A.iz.prototype={}
A.C.prototype={
ga9(){return A.bf(this.$thrownJsError)}}
A.cj.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.dP(s)
return"Assertion failed"}}
A.b9.prototype={}
A.ef.prototype={
k(a){return"Throw of null."}}
A.aJ.prototype={
gau(){return"Invalid argument"+(!this.a?"(s)":"")},
gat(){return""},
k(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gau()+o+m
if(!q.a)return l
s=q.gat()
r=A.dP(q.b)
return l+s+": "+r}}
A.bT.prototype={
gau(){return"RangeError"},
gat(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.z(q):""
else if(q==null)s=": Not greater than or equal to "+A.z(r)
else if(q>r)s=": Not in inclusive range "+A.z(r)+".."+A.z(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.z(r)
return s}}
A.dZ.prototype={
gau(){return"RangeError"},
gat(){if(A.c3(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.eI.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.eG.prototype={
k(a){var s="UnimplementedError: "+this.a
return s}}
A.aS.prototype={
k(a){return"Bad state: "+this.a}}
A.dL.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.dP(s)+"."}}
A.ei.prototype={
k(a){return"Out of Memory"},
ga9(){return null},
$iC:1}
A.cR.prototype={
k(a){return"Stack Overflow"},
ga9(){return null},
$iC:1}
A.dN.prototype={
k(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.iB.prototype={
k(a){return"Exception: "+this.a}}
A.h.prototype={
bz(a,b,c){var s=A.B(this)
return A.kc(this,s.v(c).i("1(h.E)").a(b),s.i("h.E"),c)},
C(a,b){var s
A.B(this).i("~(h.E)").a(b)
for(s=this.gw(this);s.n();)b.$1(s.gp(s))},
gl(a){var s,r=this.gw(this)
for(s=0;r.n();)++s
return s},
q(a,b){var s,r,q
A.i2(b,"index")
for(s=this.gw(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.d(A.H(b,this,"index",null,r))},
k(a){return A.k8(this,"(",")")}}
A.V.prototype={}
A.bQ.prototype={
k(a){return"MapEntry("+A.z(this.a)+": "+A.z(this.b)+")"}}
A.L.prototype={
gt(a){return A.y.prototype.gt.call(this,this)},
k(a){return"null"}}
A.y.prototype={$iy:1,
E(a,b){return this===b},
gt(a){return A.bS(this)},
k(a){return"Instance of '"+A.i0(this)+"'"},
toString(){return this.k(this)}}
A.fy.prototype={
k(a){return""},
$iav:1}
A.ex.prototype={
gl(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.n.prototype={}
A.fY.prototype={
gl(a){return a.length}}
A.dA.prototype={
k(a){return String(a)}}
A.dB.prototype={
k(a){return String(a)}}
A.dE.prototype={}
A.dF.prototype={
gaO(a){return new A.ba(a,"load",!1,t.b)}}
A.bj.prototype={
sR(a,b){a.height=b},
sS(a,b){a.width=b},
bN(a,b){return a.getContext(b)},
$ibj:1}
A.aA.prototype={
gl(a){return a.length}}
A.hc.prototype={
gl(a){return a.length}}
A.A.prototype={$iA:1}
A.cp.prototype={
gl(a){return a.length}}
A.hd.prototype={}
A.ar.prototype={}
A.aM.prototype={}
A.he.prototype={
gl(a){return a.length}}
A.hf.prototype={
gl(a){return a.length}}
A.hg.prototype={
gl(a){return a.length},
h(a,b){return a[b]}}
A.bM.prototype={$ibM:1}
A.hh.prototype={
k(a){return String(a)}}
A.cq.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.J.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.cr.prototype={
k(a){var s,r=a.left
r.toString
r="Rectangle ("+A.z(r)+", "
s=a.top
s.toString
return r+A.z(s)+") "+A.z(this.gS(a))+" x "+A.z(this.gR(a))},
E(a,b){var s,r
if(b==null)return!1
if(t.J.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=J.j4(b)
s=this.gS(a)===s.gS(b)&&this.gR(a)===s.gR(b)}else s=!1}else s=!1}else s=!1
return s},
gt(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.jz(r,s,this.gS(a),this.gR(a))},
gba(a){return a.height},
gR(a){var s=this.gba(a)
s.toString
return s},
gbk(a){return a.width},
gS(a){var s=this.gbk(a)
s.toString
return s},
$iaF:1}
A.dO.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){A.a8(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.hi.prototype={
gl(a){return a.length}}
A.N.prototype={
k(a){return a.localName},
gaO(a){return new A.ba(a,"load",!1,t.b)},
$iN:1}
A.j.prototype={$ij:1}
A.c.prototype={
cJ(a,b,c,d){t.bw.a(c)
if(c!=null)this.c2(a,b,c,!1)},
c2(a,b,c,d){return a.addEventListener(b,A.dv(t.bw.a(c),1),!1)},
$ic:1}
A.a9.prototype={$ia9:1}
A.dQ.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.c8.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.dR.prototype={
gl(a){return a.length}}
A.dU.prototype={
gl(a){return a.length}}
A.aa.prototype={$iaa:1}
A.hy.prototype={
gl(a){return a.length}}
A.bp.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.A.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.bN.prototype={$ibN:1}
A.aP.prototype={$iaP:1}
A.hK.prototype={
k(a){return String(a)}}
A.bx.prototype={}
A.hQ.prototype={
gl(a){return a.length}}
A.e5.prototype={
h(a,b){return A.b0(a.get(A.a8(b)))},
C(a,b){var s,r
t.v.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.b0(r.value[1]))}},
gM(a){var s=A.e([],t.s)
this.C(a,new A.hS(s))
return s},
gl(a){return a.size},
$iG:1}
A.hS.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.e6.prototype={
h(a,b){return A.b0(a.get(A.a8(b)))},
C(a,b){var s,r
t.v.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.b0(r.value[1]))}},
gM(a){var s=A.e([],t.s)
this.C(a,new A.hT(s))
return s},
gl(a){return a.size},
$iG:1}
A.hT.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.ac.prototype={$iac:1}
A.e7.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.cI.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.a5.prototype={$ia5:1}
A.q.prototype={
k(a){var s=a.nodeValue
return s==null?this.bT(a):s},
$iq:1}
A.cK.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.A.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.ad.prototype={
gl(a){return a.length},
$iad:1}
A.ek.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.he.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.em.prototype={
h(a,b){return A.b0(a.get(A.a8(b)))},
C(a,b){var s,r
t.v.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.b0(r.value[1]))}},
gM(a){var s=A.e([],t.s)
this.C(a,new A.i5(s))
return s},
gl(a){return a.size},
$iG:1}
A.i5.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.eo.prototype={
gl(a){return a.length}}
A.a6.prototype={$ia6:1}
A.es.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.fY.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.af.prototype={$iaf:1}
A.et.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.f7.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.ag.prototype={
gl(a){return a.length},
$iag:1}
A.ew.prototype={
h(a,b){return a.getItem(A.a8(b))},
C(a,b){var s,r,q
t.eA.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gM(a){var s=A.e([],t.s)
this.C(a,new A.ib(s))
return s},
gl(a){return a.length},
$iG:1}
A.ib.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:16}
A.W.prototype={$iW:1}
A.a7.prototype={$ia7:1}
A.U.prototype={$iU:1}
A.eA.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.c7.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.eB.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.a0.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.ij.prototype={
gl(a){return a.length}}
A.ah.prototype={$iah:1}
A.eC.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.aK.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.ik.prototype={
gl(a){return a.length}}
A.aG.prototype={}
A.ip.prototype={
k(a){return String(a)}}
A.bX.prototype={$ibX:1}
A.eK.prototype={
gl(a){return a.length}}
A.bZ.prototype={
bE(a,b){var s
t.c4.a(b)
this.cg(a)
s=A.kK(b,t.di)
s.toString
return this.cn(a,s)},
cn(a,b){return a.requestAnimationFrame(A.dv(t.c4.a(b),1))},
cg(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iit:1}
A.eT.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.g5.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.cZ.prototype={
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
if(t.J.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=J.j4(b)
if(s===r.gS(b)){s=a.height
s.toString
r=s===r.gR(b)
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
return A.jz(p,s,r,q)},
gba(a){return a.height},
gR(a){var s=a.height
s.toString
return s},
gbk(a){return a.width},
gS(a){var s=a.width
s.toString
return s}}
A.f5.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.g7.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.d3.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.A.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.fq.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.gf.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.fz.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a[b]},
j(a,b,c){t.cP.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$im:1,
$iu:1,
$ih:1,
$ip:1}
A.jp.prototype={}
A.d_.prototype={
aL(a,b,c,d){var s=A.B(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.f1(this.a,this.b,a,!1,s.c)}}
A.ba.prototype={}
A.d0.prototype={}
A.iA.prototype={
$1(a){return this.a.$1(t.k.a(a))},
$S:10}
A.o.prototype={
gw(a){return new A.cu(a,this.gl(a),A.az(a).i("cu<o.E>"))}}
A.cu.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbb(J.jZ(s.a,r))
s.c=r
return!0}s.sbb(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
sbb(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
A.eV.prototype={$ic:1,$iit:1}
A.eU.prototype={}
A.eX.prototype={}
A.eY.prototype={}
A.eZ.prototype={}
A.f_.prototype={}
A.f2.prototype={}
A.f3.prototype={}
A.f6.prototype={}
A.f7.prototype={}
A.fc.prototype={}
A.fd.prototype={}
A.fe.prototype={}
A.ff.prototype={}
A.fg.prototype={}
A.fh.prototype={}
A.fk.prototype={}
A.fl.prototype={}
A.fn.prototype={}
A.d9.prototype={}
A.da.prototype={}
A.fo.prototype={}
A.fp.prototype={}
A.ft.prototype={}
A.fA.prototype={}
A.fB.prototype={}
A.de.prototype={}
A.df.prototype={}
A.fD.prototype={}
A.fE.prototype={}
A.fL.prototype={}
A.fM.prototype={}
A.fN.prototype={}
A.fO.prototype={}
A.fP.prototype={}
A.fQ.prototype={}
A.fR.prototype={}
A.fS.prototype={}
A.fT.prototype={}
A.fU.prototype={}
A.f8.prototype={
A(a){if(a<=0||a>4294967296)throw A.d(A.lP("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
a4(){return Math.random()},
$ilO:1}
A.ak.prototype={$iak:1}
A.e2.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){t.bG.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ih:1,
$ip:1}
A.al.prototype={$ial:1}
A.eg.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){t.ck.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ih:1,
$ip:1}
A.i_.prototype={
gl(a){return a.length}}
A.ey.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.a8(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ih:1,
$ip:1}
A.l.prototype={
gaO(a){return new A.ba(a,"load",!1,t.b)}}
A.an.prototype={$ian:1}
A.eD.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){t.cM.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ih:1,
$ip:1}
A.f9.prototype={}
A.fa.prototype={}
A.fi.prototype={}
A.fj.prototype={}
A.fw.prototype={}
A.fx.prototype={}
A.fF.prototype={}
A.fG.prototype={}
A.h2.prototype={
gl(a){return a.length}}
A.dC.prototype={
h(a,b){return A.b0(a.get(A.a8(b)))},
C(a,b){var s,r
t.v.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.b0(r.value[1]))}},
gM(a){var s=A.e([],t.s)
this.C(a,new A.h3(s))
return s},
gl(a){return a.size},
$iG:1}
A.h3.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.dD.prototype={
gl(a){return a.length}}
A.b2.prototype={}
A.eh.prototype={
gl(a){return a.length}}
A.eR.prototype={}
A.dG.prototype={$idG:1}
A.dV.prototype={$idV:1}
A.el.prototype={$iel:1}
A.bU.prototype={
bq(a,b){return a.bindVertexArray(b)},
bo(a,b,c){return a.bindBuffer(b,c)},
af(a,b,c){return a.bindFramebuffer(b,c)},
F(a,b,c){return a.bindTexture(b,c)},
cR(a,b){return a.deleteTexture(b)},
bw(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ak(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.jM(g)){s.cz(a,b,c,d,e,f,g,h,i,j)
return}if(t.fS.b(g)&&h==null&&r&&j==null){s.cA(a,b,c,d,e,f,g)
return}if(t.E.b(g)&&h==null&&r&&j==null){s.cB(a,b,c,d,e,f,g)
return}if(t.dz.b(g)&&h==null&&r&&j==null){s.cC(a,b,c,d,e,f,g)
return}throw A.d(A.ch("Incorrect number or type of arguments",null))},
de(a,b,c,d,e,f,g){return this.ak(a,b,c,d,e,f,g,null,null,null)},
cz(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cA(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cB(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cC(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
dh(a,b,c){return a.uniform1f(b,c)},
di(a,b,c){return a.uniform1i(b,c)},
dj(a,b,c,d){return a.uniform2f(b,c,d)},
dk(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dl(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dm(a,b){return a.useProgram(b)},
$ibU:1}
A.aV.prototype={$iaV:1}
A.eF.prototype={$ieF:1}
A.eJ.prototype={$ieJ:1}
A.eu.prototype={
gl(a){return a.length},
h(a,b){var s
if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
s=A.b0(a.item(b))
s.toString
return s},
j(a,b,c){t.eO.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ih:1,
$ip:1}
A.fr.prototype={}
A.fs.prototype={}
A.dY.prototype={
as(a){var s=this.b
if(!(a>=0&&a<s.length))return A.b(s,a)
s=s[a]
return s==null?this.$ti.c.a(null):s},
gl(a){return this.c},
J(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.cj(b)
if(s<0)return!1;++p.d
r=p.c-1
q=p.as(r)
B.a.j(p.b,r,null)
p.c=r
if(s<r)if(p.a.$2(q,b)<=0)p.ao(q,s)
else p.c6(q,s)
return!0},
cD(){var s,r,q=this.$ti,p=A.e([],q.i("t<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
k(a){var s=this.b
return A.k8(A.km(s,0,A.j2(this.c,"count",t.S),A.ao(s).c),"(",")")},
c0(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.aR(q,null,!1,n.i("1?"))
B.a.aX(p,0,o.c,o.b)
o.sbh(p)}o.ao(b,o.c++)},
cj(a){var s,r,q,p,o,n,m,l=this
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
for(s=o.a;b>0;b=r){r=B.f.K(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.G()
if(q>0)break
B.a.j(o.b,b,p)}B.a.j(o.b,b,a)},
c6(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.$ti.c
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
sbh(a){this.b=this.$ti.i("p<1?>").a(a)}}
A.aL.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.aL&&b.a===this.a},
gt(a){return B.f.gt(this.a)},
k(a){return"Color(0x"+B.y.bB(B.f.df(this.a,16),8,"0")+")"}}
A.O.prototype={
cW(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.f.a6(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.d(A.aT(b.k(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.f.a6(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.d(A.jq(b.k(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
T(a,b,c){var s=B.f.a6(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
B(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.f.a6(d*s+c)
q=p.c
if(r>=q.length)throw A.d(A.jq("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
k(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.f.a6(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.z(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.cd.prototype={
gV(a){return B.d.D(this.c.d/24)},
gW(a){return B.d.D(this.c.e/36)},
bC(){var s=this.c
return new A.k(B.d.D(s.d/24),B.d.D(s.e/36))},
$ihx:1,
gby(){return this.z}}
A.h7.prototype={}
A.dW.prototype={
aH(a){return this.cU(t.cS.a(a))},
cU(a){var s=0,r=A.ds(t.H),q,p=this,o
var $async$aH=A.du(function(b,c){if(b===1)return A.dl(c,r)
while(true)switch(s){case 0:o=p.e
if(o.length>3){s=1
break}B.a.m(o,a)
if(p.f){s=1
break}p.ab()
case 1:return A.dm(q,r)}})
return A.dn($async$aH,r)},
ab(){var s=0,r=A.ds(t.z),q=1,p,o=[],n=this,m
var $async$ab=A.du(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.f=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.aX(n.aa(),$async$ab)
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
case 4:return A.dm(null,r)
case 1:return A.dl(p,r)}})
return A.dn($async$ab,r)},
H(){var s=0,r=A.ds(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$H=A.du(function(a1,a2){if(a1===1)return A.dl(a2,r)
while(true)$async$outer:switch(s){case 0:b=p.a
a=b.b.d.a
a0=A.e(a.slice(0),A.ao(a))
a=p.b,o=B.a.gcI(a),n=t.b7,m=p.c,l=p.d,k=p.e,j=0,i=!1
case 4:if(!!0){s=5
break}case 6:if(!(h=a.length,h!==0)){s=7
break}if(0>=h){q=A.b(a,0)
s=1
break}s=8
return A.aX(a[0].P(0,b),$async$H)
case 8:g=a2
B.a.ae(m,g.r)
case 9:if(!(h=g.a,h!=null)){s=10
break}B.a.j(a,0,h)
s=11
return A.aX(h.P(0,b),$async$H)
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
return A.aX(p.b8(),$async$H)
case 19:case 18:s=20
return A.aX(p.a2(f),$async$H)
case 20:s=15
break
case 16:B.a.m(l,f)
case 15:case 13:case 21:if(!(h=m.length,h!==0)){s=22
break}if(0>=h){q=A.b(m,-1)
s=1
break}s=23
return A.aX(m.pop().P(0,b),$async$H)
case 23:e=a2
B.a.ae(m,e.r)
case 24:if(!(h=e.a,h!=null)){s=25
break}s=26
return A.aX(h.P(0,b),$async$H)
case 26:e=a2
B.a.ae(m,e.r)
s=24
break
case 25:s=21
break
case 22:if(g.d)i=B.bc.bO(i,!0)
B.a.bD(a,0)
s=6
break
case 7:if(!i){s=3
break}for(;h=a0.length,j<h;){if(!(j>=0)){q=A.b(a0,j)
s=1
break $async$outer}d=a0[j];++j
if(d.bC()==null)continue
if(A.nj(n.a(o),d,b)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=l.length!==0?27:28
break
case 27:s=k.length===0?29:31
break
case 29:s=32
return A.aX(p.b8(),$async$H)
case 32:s=30
break
case 31:p.aE()
case 30:case 28:if(!i){s=1
break}for(b=a0.length,c=0;c<b;++c)a0[c].a=100
case 1:return A.dm(q,r)}})
return A.dn($async$H,r)},
aE(){var s=0,r=A.ds(t.z),q=this,p,o,n
var $async$aE=A.du(function(a,b){if(a===1)return A.dl(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.D)(p),++n)p[n].f.$0()
B.a.sl(p,0)
return A.dm(null,r)}})
return A.dn($async$aE,r)},
a2(a){var s=0,r=A.ds(t.H),q=this,p
var $async$a2=A.du(function(b,c){if(b===1)return A.dl(c,r)
while(true)switch(s){case 0:p=new A.J($.E,t.dS)
if(a!=null)B.a.m(q.d,a)
B.a.m(q.a.d,t.x.a(new A.ht(q,new A.bD(p,t.ez))))
s=2
return A.aX(p,$async$a2)
case 2:return A.dm(null,r)}})
return A.dn($async$a2,r)},
b8(){return this.a2(null)},
aa(){var s=0,r=A.ds(t.H),q,p=this,o,n,m,l
var $async$aa=A.du(function(a,b){if(a===1)return A.dl(b,r)
while(true)switch(s){case 0:l=p.e
if(l.length===0){s=1
break}o=B.a.bD(l,0)
switch(o){case B.W:case B.X:case B.Y:case B.Z:switch(o){case B.W:n=new A.k(0,-1)
break
case B.X:n=new A.k(1,0)
break
case B.Y:n=new A.k(0,1)
break
case B.Z:n=new A.k(-1,0)
break
default:A.T(A.aT(""))
n=null}m=new A.e8(n,p.a.b.a)
break
case B.ba:m=new A.ep()
break
case B.am:l=p.a.b.a.c
m=new A.dS(new A.k(B.d.D(l.d/24),B.d.D(l.e/36)))
break
default:m=null
break}s=m!=null?3:4
break
case 3:B.a.m(p.b,m)
s=5
return A.aX(p.H(),$async$aa)
case 5:case 4:case 1:return A.dm(q,r)}})
return A.dn($async$aa,r)},
cm(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.R.a(a)
for(s=h.d,r=s.length,q=a.a,p=h.e,o=0;o<s.length;s.length===r||(0,A.D)(s),++o){n=s[o]
if(p.length>=2)n.b=1
m=n.c
l=m==null?0:B.f.K(q-m.a,1000)
A.kV(""+l)
n.c=a
k=l/B.f.K(n.a.a,1000)
j=n.d
i=n.b
i=n.b=B.d.cO(j?n.b=i+k:n.b=i-k,-1,1)
i>=1||i<0
n.e.$1(n)}B.a.m(h.a.d,t.x.a(h.gbf()))}}
A.ht.prototype={
$1(a){var s,r,q,p,o,n,m
t.R.a(a)
s=A.e([],t.f_)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.D)(q),++n){m=q[n]
if(m.b>=1||o.length!==0){m.f.$0()
B.a.m(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.D)(s),++n)B.a.J(q,s[n])
if(q.length===0)this.b.cQ(0)
else B.a.m(r.a.d,t.x.a(this))},
$S:9}
A.bq.prototype={
k(a){return"ItemType."+this.b}}
A.bO.prototype={}
A.R.prototype={}
A.dX.prototype={
k(a){return"HandRequirement."+this.b}}
A.b4.prototype={
k(a){return"DamageType."+this.b}}
A.bn.prototype={
k(a){return"DiceType."+this.b}}
A.aw.prototype={
k(a){return"WeaponProperties."+this.b}}
A.hR.prototype={}
A.b3.prototype={}
A.bm.prototype={
k(a){return"CriticalEffect."+this.b}}
A.S.prototype={}
A.ce.prototype={
k(a){return"AmmoType."+this.b}}
A.cf.prototype={}
A.ae.prototype={}
A.bJ.prototype={
k(a){return"ArmorUpgradeType."+this.b}}
A.a1.prototype={}
A.bW.prototype={
k(a){return"TileType."+this.b}}
A.hM.prototype={}
A.bB.prototype={
k(a){return"TerrainType."+this.b}}
A.X.prototype={
k(a){return"TerrainWidget."+this.b}}
A.bv.prototype={
k(a){return"LockState."+this.b}}
A.bi.prototype={
k(a){return"Biome."+this.b}}
A.b8.prototype={
gV(a){return this.b.a},
gW(a){return this.b.b},
sdd(a){t.d0.a(a)},
$ihx:1,
gby(){return this.z}}
A.e3.prototype={}
A.k.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.k&&b.a===this.a&&b.b===this.b},
gt(a){return A.jz(this.a,this.b,B.D,B.D)},
u(a,b){return new A.k(this.a+b.a,this.b+b.b)},
k(a){return"("+this.a+", "+this.b+")"}}
A.hJ.prototype={
k(a){return"LiquidKind."+this.b}}
A.P.prototype={
k(a){return"Interactable."+this.b}}
A.hN.prototype={}
A.hj.prototype={
cE(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.a,i=j.Z(k,t.I),h=this.c
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.b.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.b||A.b_(A.hz(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.d=r
j.a0(b,k,i)}}
A.hm.prototype={
bW(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
c.gU().a.X(c.a)
s=c.y
s.a.X(c.a)
r=c.z
r.a.X(c.a)
c.gaG().b.X(c.a)
q=c.ga3()
p=c.a
q.d=p.createFramebuffer()
q.a.X(p)
q.b.X(p)
c.gbu().b.X(c.a)
for(q=c.b,p=q.d,o=p.b,n=o.c,m=n.length,l=c.f,k=0;k<n.length;n.length===m||(0,A.D)(n),++k){j=n[k]
i=j.b
h=A.k6(j.f,i.a*24,i.b*36)
if(h!=null){g=h.a=c.gU()
f=g.c
f.$ti.c.a(h);++f.d
f.c0(0,h)
g.e=!0
j.y=h}g=j.f
if(g===B.x||g===B.u){j.z=new A.e3(new A.aL(4294278144))
e=c.ch
if(e===$){d=A.lI(l)
A.fV(e,"lightingRenderer")
c.ch=d
e=d}B.a.m(e.r,j)}}c.bl(q.a,A.kP(p))
s.b=p
s.c=!0
r.c=p
r.b=!0
l.d2(o)
l.cZ()
l.e=A.kP(p)},
gU(){var s,r=this,q=r.x
if(q===$){s=A.lW(r.a,r.f)
A.fV(r.x,"sprites")
r.x=s
q=s}return q},
gaG(){var s,r=this,q=r.Q
if(q===$){s=A.mq()
s=A.b5(A.e([new A.a2("a_position",35044,5126,2,s),new A.a2("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.l,A.e([new A.v("u_resolution",B.e),new A.v("u_offset",B.e)],t.o),u.q)
A.fV(r.Q,"fovRenderer")
q=r.Q=new A.ho(r.f,s,new A.k(-1,-1))}return q},
ga3(){var s,r,q,p=this,o=u.p,n="a_position",m="u_resolution",l="u_block_size",k="u_player_visible_texture",j="u_offset",i=p.ch
if(i===$){s=t.G
r=t.o
q=A.b5(A.e([new A.a2(n,35044,5126,2,new Float32Array(A.dp(B.z)))],s),u.h,A.e([new A.v(m,B.e),new A.v("u_source_position",B.e),new A.v(l,B.e),new A.v("u_source_color",B.a7),new A.v("u_source_strength",B.t),new A.v("u_time",B.t),new A.v("u_visible_texture",B.i),new A.v(k,B.i),new A.v(j,B.e)],r),o)
r=A.b5(A.e([new A.a2(n,35044,5126,2,new Float32Array(A.dp(B.z)))],s),u.f,A.e([new A.v("u_light_texture",B.i),new A.v("u_game_world_texture",B.i),new A.v(k,B.i),new A.v(m,B.e),new A.v(l,B.e),new A.v(j,B.e)],r),o)
s=A.e([],t.cd)
A.fV(p.ch,"lightingRenderer")
i=p.ch=new A.e4(q,r,p.f,s)}return i},
gbu(){var s,r=this,q=r.cy
if(q===$){s=A.b5(A.e([new A.a2("a_position",35044,5126,2,new Float32Array(A.dp(B.z)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random (in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise (vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f*f*f+.6*f*f+.5*f)*color, 0.3);\n}\n",A.e([new A.v("u_resolution",B.e),new A.v("u_time",B.t),new A.v("u_offset",B.e),new A.v("u_player_vis_texture",B.i),new A.v("u_block_size",B.e)],t.o),"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n")
A.fV(r.cy,"filters")
q=r.cy=new A.hq(r.f,s)}return q},
a5(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=3553
t.r.a(a1)
b.a=a1
s=b.c
r=s.clientWidth
q=s.clientHeight
if(r!==b.dy||q!==b.fr){B.V.sS(s,r)
B.V.sR(s,q)
b.dy=r
b.fr=q
s=b.db
if(s!=null)B.c.cR(a1,s)
s=a1.createTexture()
b.db=s
B.c.F(a1,a,s)
B.c.ak(a1,a,0,6408,b.dy,b.fr,0,6408,5121,null)
a1.texParameteri(a,10241,9729)
a1.texParameteri(a,10242,33071)
a1.texParameteri(a,10243,33071)}s=b.r
p=b.f.e
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
l=b.fy
l.a=r
l.b=q
l.d=p
l.e=s
l.c=a0
a1.viewport(0,0,r,q)
a1.clearColor(0,0,0,1)
a1.clear(16640)
a1.enable(3042)
a1.blendFuncSeparate(770,771,1,771)
B.c.af(a1,36160,b.dx)
B.c.bw(a1,36160,36064,a,b.db,0)
a1.clearColor(0,0,0,1)
a1.clear(16640)
s=b.y
if(s.c){s.cG(a1)
s.c=!1}p=t.Y
j=t.t
i=t.N
h=t.z
s.a.Y(a1,4,48e3,A.bu(["u_resolution",A.e([l.a,l.b],p),"u_offset",A.e([l.d,l.e],j)],i,h))
s=b.gbu()
g=s.a
f=g.a8(g.e,a1)
a1.activeTexture(33984)
B.c.F(a1,a,f)
s.b.Y(a1,4,3,A.bu(["u_time",l.c/1000,"u_resolution",A.e([l.a,l.b],p),"u_offset",A.e([l.d,l.e],j),"u_player_vis_texture",0,"u_block_size",A.e([24,36],p)],i,h))
B.c.af(a1,36160,null)
b.ga3().f=b.db
b.ga3().a5(a1,l)
s=b.z
if(s.b){s.cE(0,a1)
s.b=!1}s.a.Y(a1,0,B.f.K(s.d,2),A.bu(["u_resolution",A.e([l.a,l.b],p),"u_offset",A.e([l.d,l.e],j)],i,h))
b.gU().a5(a1,l)
s=b.gaG()
if(!s.a.e.E(0,s.c)||s.d)s.cH(a1)
s.b.Y(a1,4,48e3,A.bu(["u_resolution",A.e([l.a,l.b],p),"u_offset",A.e([l.d,l.e],j)],i,h))
a1.finish()
e=A.k5(B.d.D(a0),0)
s=b.d
d=A.e(s.slice(0),A.ao(s))
B.a.sl(s,0)
for(s=d.length,c=0;c<d.length;d.length===s||(0,A.D)(d),++c)d[c].$1(e)},
bl(a,b){var s,r,q
B.a.m(this.b.d.a,a)
s=a.c
s.saM(b.a)
s.saN(b.b)
r=this.gU()
s.r=1
q=s.a
if(q!=null)q.e=!0
r.m(0,s)
if(a.z!=null)B.a.m(this.ga3().r,a)}}
A.aC.prototype={}
A.bL.prototype={}
A.hn.prototype={}
A.eE.prototype={
P(a,b){return A.aD(null,null,!1,B.p,!1)}}
A.e8.prototype={
P(a,b){var s,r,q,p,o,n,m,l,k,j,i=null,h=b.b.d,g=this.b,f=g.bC(),e=this.a,d=f.u(0,e),c=h.b
if(!c.cW(d))return A.aD(i,i,!1,B.p,!1)
s=c.h(0,d)
r=h.cL(d)
if((s.c===B.b||A.b_(A.hz(s.f)))&&r==null){q=s.b
p=q.a
if(p!==0){q=q.b
q=q===0||p===99||q===39}else q=!0
if(q)return A.aD(new A.eE(g,e.a,e.b),i,!1,B.p,!1)
if(s.f==null)return A.aD(i,i,!1,B.p,!1)
o=A.na(s)
if(o.length!==0)return A.aD(B.a.gbS(o).b,i,!1,B.p,!1)
return A.aD(i,i,!1,B.p,!1)}n=A.e([],t.w)
if(r!=null){if(A.nc(r,g))return A.aD(i,i,!1,B.p,!1)
e=r.c
m=e.d
l=e.e
q=g.c
k=q.d
j=q.e
e.sV(0,k)
e.sW(0,q.e)
q.sV(0,m)
q.sW(0,l)
if(r.x){e=b.f
e.e=new A.k(B.d.D(k),B.d.D(j))
e.aT()}e=g.x
if(e){q=b.f
q.e=new A.k(B.d.D(m),B.d.D(l))
q.aT()}}else{e=g.c
e.saM(d.a)
e.saN(d.b)
e=g.x
if(e){q=b.f
q.e=d
q.aT()}}c.h(0,f)
if(s.r!=null)self.window.secretPlayAudio("sounds/"+("water_footsteps_"+(B.q.A(5)+1)+".mp3"))
g.a=0
return A.aD(i,i,!e,n,!0)},
k(a){return"Move{"+this.b.k(0)+" by "+this.a.k(0)+"}"}}
A.ep.prototype={
P(a,b){return A.aD(null,null,!1,B.p,!0)}}
A.cT.prototype={
P(a,b){var s,r,q,p=b.b.d.b,o=this.b,n=p.h(0,o),m=n.y
n.f=this.a?B.r:B.v
s=b.gU()
m.toString
s.J(0,m)
s=n.f
s.toString
r=n.b
q=A.k6(s,24*r.a,36*r.b)
if(q!=null)b.gU().m(0,q)
n.y=q
b.f.bx(p,o)
b.gaG().d=!0
self.window.secretPlayAudio("sounds/door_1.mp3")
return A.aD(null,null,!1,B.p,!0)}}
A.dS.prototype={
P(a,b){var s,r,q=4294901760,p=new A.am(4,4,0,0,null)
p.f=new A.aL(q)
s=this.a
p.saM(s.a)
p.saN(s.b)
r=A.k0(new A.e3(new A.aL(q)),!0,!1,p)
b.bl(r,s)
return A.aD(null,new A.bL(A.k5(0,2),new A.hr(this,p),new A.hs(b,r)),!1,B.p,!0)}}
A.hr.prototype={
$1(a){var s=this.b,r=a.b,q=this.a.a
s.sV(0,2400*r+(1-r)*q.a*24)
r=a.b
s.sW(0,1440*r+(1-r)*q.b*36)},
$S:40}
A.hs.prototype={
$0(){var s=this.a,r=this.b
B.a.J(s.b.d.a,r)
s.gU().J(0,r.c)
if(r.z!=null)B.a.J(s.ga3().r,r)},
$S:0}
A.hq.prototype={}
A.hp.prototype={
cb(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.c.F(b,f,c)
s=A.ke(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
r=this.a7(a)
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
if(r==null){r=new A.fC(b.createTexture())
s.j(0,a,r)}if(r.b){this.cb(a,b,r.a)
r.b=!1}return r.a},
a7(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.jB(p,p+4000,B.f.bV(s.byteLength,r))
return new A.iq(100,A.ke(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
aT(){var s,r,q,p,o=this.a7(this.e).c
for(s=this.c,r=o.length,q=0;q<4000;++q){p=s[q]
if(!(q<r))return A.b(o,q)
s[q]=p|o[q]}},
cZ(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.ax(new A.k(s,r))
for(q=this.f,q=q.gaU(q),q=q.gw(q);q.n();)q.gp(q).b=!0},
bx(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.L.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.T(0,r,q)
o=o.c===B.b||A.b_(A.lB(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.ax(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]===1)g.ax(new A.k(m,l))}s=g.a7(b)
s.toString
for(p=g.f,p=p.gbt(p),p=p.gw(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]===1)i.b.b=!0}},
d2(a){return this.bx(a,null)},
ax(a){var s,r,q,p=this.a7(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=1
for(q=0;q<4;++q)this.cp(new A.bV(1,-1,1),new A.i1(B.bg[q],a),o)},
co(a,b){if(a<0||a>=b.byteLength)return
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
cp(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.r
B.a.sl(e,0)
B.a.m(e,a)
for(;s=e.length,s!==0;){if(0>=s)return A.b(e,-1)
r=e.pop()
s=r.a
q=B.d.ai(s*r.b+0.5)
p=B.d.cN(s*r.c-0.5)
for(o=s+1,n=2*s,m=q,l=null;m<=p;++m,l=j){k=b.dg(0,new A.k(s,m))
j=k.b*100+k.a
i=f.bc(j,c)
if(!i)h=m>=s*r.b&&m<=s*r.c
else h=!0
if(h)f.co(j,c)
h=l!=null
if(h&&f.bc(l,c)&&f.ay(j,c))r.b=(2*m-1)/n
if(h&&f.ay(l,c)&&i){g=new A.bV(o,r.b,r.c)
g.c=(2*m-1)/n
B.a.m(e,g)}}if(l!=null&&f.ay(l,c))B.a.m(e,new A.bV(o,r.b,r.c))}}}
A.fC.prototype={}
A.iq.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]===1}}
A.bk.prototype={
k(a){return"Cardinal."+this.b}}
A.i1.prototype={
dg(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a){case B.ai:s=r.b
return new A.k(s.a+p,s.b-q)
case B.aj:s=r.b
return new A.k(s.a+p,s.b+q)
case B.ak:s=r.b
return new A.k(s.a+q,s.b+p)
case B.al:s=r.b
return new A.k(s.a-q,s.b+p)}}}
A.bV.prototype={}
A.cw.prototype={}
A.e4.prototype={
a5(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=3553,a="u_player_visible_texture",a0=a2.a
if(a0!==c.x||a2.b!==c.y){c.x=a0
s=a2.b
c.y=s
r=a1.createTexture()
c.e=r
B.c.F(a1,b,r)
B.c.ak(a1,b,0,6408,a0,s,0,6408,5121,null)
a1.texParameteri(b,10241,9729)
a1.texParameteri(b,10242,33071)
a1.texParameteri(b,10243,33071)}B.c.af(a1,36160,c.d)
B.c.bw(a1,36160,36064,b,c.e,0)
a1.clearColor(0,0,0,1)
a1.clear(16640)
a0=c.c
s=a0.a8(a0.e,a1)
s.toString
a1.activeTexture(33985)
B.c.F(a1,b,s)
for(r=c.r,q=r.length,p=c.a,o=t.Y,n=t.t,m=t.N,l=t.z,k=0;k<r.length;r.length===q||(0,A.D)(r),++k){j=r[k]
i=j.gby()
h=a0.a8(new A.k(j.gV(j),j.gW(j)),a1)
if(h==null)continue
a1.activeTexture(33984)
B.c.F(a1,b,h)
g=A.e([a2.a,a2.b],o)
f=A.e([j.gV(j),j.gW(j)],o)
e=A.e([a2.d,a2.e],n)
d=i.b.a
p.Y(a1,4,3,A.bu(["u_resolution",g,"u_source_strength",7,"u_block_size",B.ar,"u_source_position",f,"u_offset",e,"u_source_color",A.e([(d>>>16&255)/255,(d>>>8&255)/255,(d&255)/255,0.2],n),"u_time",a2.c/1000,a,1,"u_visible_texture",0],m,l))}B.c.af(a1,36160,null)
a1.activeTexture(33984)
B.c.F(a1,b,c.e)
a1.activeTexture(33985)
B.c.F(a1,b,c.f)
a1.activeTexture(33986)
B.c.F(a1,b,s)
c.b.Y(a1,4,3,A.bu(["u_light_texture",0,"u_game_world_texture",1,a,2,"u_block_size",B.ar,"u_resolution",A.e([a2.a,a2.b],o),"u_offset",A.e([a2.d,a2.e],n)],m,l))}}
A.as.prototype={
k(a){return"Directions."+this.b}}
A.a2.prototype={}
A.v.prototype={}
A.bC.prototype={
k(a){return"UniformKind."+this.b}}
A.eQ.prototype={}
A.fI.prototype={}
A.hw.prototype={
X(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.kD(a,i.a,35633),f=A.kD(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.Q(a.getProgramParameter(e,35714),!0)){A.jS(J.bI(a.getProgramInfoLog(e)))
A.T(A.aT("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.c.bq(a,A.aZ(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.D)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.fI(a.getUniformLocation(A.aZ(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.D)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.aZ(i.e,h),n)
k=a.createBuffer()
B.c.bo(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.eQ(k,j))}},
Z(a,b){A.n1(b,t.Q,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
a0(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.d(A.aT("WARNING, NO ATTRIBUTE "+b))
B.c.bo(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
Y(a,b,c,d){var s,r,q,p,o,n
t.d1.a(d)
B.c.dm(a,A.aZ(this.e,"_program"))
B.c.bq(a,A.aZ(this.f,"_vertexArrayObject"))
for(s=d.gbt(d),s=s.gw(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.a8(p)
n=r.h(0,p)
if(n==null)A.T(A.aT("WARNING, NO UNIFORM "+p))
switch(n.b.b){case B.t:B.c.dh(a,n.a,A.ay(o))
break
case B.e:q=J.aq(o)
B.c.dj(a,n.a,A.ay(q.h(o,0)),A.ay(q.h(o,1)))
break
case B.bC:q=J.aq(o)
B.c.dk(a,n.a,A.ay(q.h(o,0)),A.ay(q.h(o,1)),A.ay(q.h(o,2)))
break
case B.a7:q=J.aq(o)
B.c.dl(a,n.a,A.ay(q.h(o,0)),A.ay(q.h(o,1)),A.ay(q.h(o,2)),A.ay(q.h(o,3)))
break
case B.i:B.c.di(a,n.a,A.c3(o))
break}}a.drawArrays(b,0,c)}}
A.i3.prototype={}
A.i4.prototype={}
A.er.prototype={$ilU:1}
A.ja.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.c.F(q,r,p)
B.c.de(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.ah(0,p)},
$S:10}
A.i8.prototype={
bY(a,b){A.nf(a,"CursesTransparent_24x36.png").bG(new A.i9(this),t.P)},
m(a,b){var s,r,q,p,o,n
b.a=this
s=this.c
r=s.$ti
r.c.a(b);++s.d
q=s.c
p=s.b.length
if(q===p){o=p*2+1
if(o<7)o=7
n=A.aR(o,null,!1,r.i("1?"))
B.a.aX(n,0,s.c,s.b)
s.sbh(n)}s.ao(b,s.c++)
this.e=!0},
J(a,b){this.c.J(0,b)
b.a=null
this.e=!0},
cF(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="a_position",a4="a_texcoord",a5=this.c,a6=a5.c,a7=this.a,a8=t.Q,a9=a6*12,b0=A.jy(a7.Z(a3,a8).buffer,0,a9),b1=A.jy(a7.Z(a4,a8).buffer,0,a9),b2=A.jy(a7.Z("a_color",a8).buffer,0,a6*24),b3=a5.cD()
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
if(a1==null)B.bv.cS(b2,a0,a0+24,0)
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
b2[j]=n}}a7.a0(b4,a3,b0)
a7.a0(b4,a4,b1)
a7.a0(b4,"a_color",b2)},
a5(a,b){var s,r=this
if(r.b==null||r.c.c===0)return
if(r.e){r.cF(a)
r.e=!1}s=r.d
s.a8(s.e,a)
a.activeTexture(33984)
B.c.F(a,3553,r.b)
r.a.Y(a,4,r.c.c*6,A.bu(["u_texture",0,"u_resolution",A.e([b.a,b.b],t.Y),"u_offset",A.e([b.d,b.e],t.t)],t.N,t.z))}}
A.i9.prototype={
$1(a){this.a.b=t.dy.a(a)},
$S:21}
A.am.prototype={
sV(a,b){var s=this.a
if(s!=null)s.e=!0
this.d=b},
sW(a,b){var s=this.a
if(s!=null)s.e=!0
this.e=b},
saM(a){var s=this.a
if(s!=null)s.e=!0
this.d=a*24},
saN(a){var s=this.a
if(s!=null)s.e=!0
this.e=a*36}}
A.hP.prototype={}
A.ii.prototype={
cG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.b==null)return
s=d.a
r=s.Z("a_color",t.I)
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
h=!(e.c===B.b||A.b_(A.hz(e.f)))}else h=!1
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
r[h]=1}}}s.a0(a,"a_color",r)}}
A.ho.prototype={
cH(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.a7(a2.e),a4=a1.b,a5=a4.Z("a_color",t.I)
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
a4.a0(a6,"a_color",a5)}}
A.iu.prototype={}
A.j1.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:8}
A.ia.prototype={
cL(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.f){m=n.c
l=B.d.D(m.d/24)
if(l===q){m=B.d.D(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.dH.prototype={
aY(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.O(a,a0,A.aR(a*a0,B.h,!1,t.a5),t.p)
c.a=b
s=new A.hb(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.u()
if(typeof m!=="number")return A.ca(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.ca(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.ca(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.ca(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.ca(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.ca(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.ca(f)
e=n+m+k+i+h+g+l+f
if(J.Q(s.$2(q,o),1))if(e<4)a1.B(0,B.h,q,o)
else a1.B(0,B.b,q,o)
else if(e>5)a1.B(0,B.b,q,o)
else a1.B(0,B.h,q,o)}d=c.a
c.a=a1}}}
A.hb.prototype={
$2(a,b){return J.Q(this.a.a.T(0,a,b),B.b)?0:1},
$S:23}
A.hu.prototype={
aS(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.e8.a(b0)
s=t.q
r=A.e([],s)
q=new A.hv(a9)
for(p=J.aI(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.dq()
if(n>=1)B.a.m(r,o)}if(r.length===0)return
m=A.e([],t.ap)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.D)(r),++j){i=r[j]
h=A.e([],k)
g=i.a
f=i.b
if(o.h(0,new A.k(g+1,f))===B.b)B.a.m(h,B.k)
if(o.h(0,new A.k(g+-1,f))===B.b)B.a.m(h,B.m)
if(o.h(0,new A.k(g,f+1))===B.b)B.a.m(h,B.l)
if(o.h(0,new A.k(g,f+-1))===B.b)B.a.m(h,B.j)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.D)(h),++e){d=h[e]
c=A.a_(i,d)
b=A.e([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.b)break
a2=A.lx(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.a_(a,a2[0]))!==B.h){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.a_(a,a2[1]))===B.h}else a1=!0
if(a1)break
a=A.a_(a,d)
B.a.m(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.h&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.a_(a,A.ly(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.m(m,new A.cU(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.bt(t.u,t.aO)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.D)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.L(l,n))continue
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
for(g=g.c,a0=g.length,j=0;a1=g.length,j<a1;g.length===a0||(0,A.D)(g),++j)o.j(0,g[j],B.h)
a0=n.A(a1)
if(!(a0>=0&&a0<g.length))return A.b(g,a0)
a7=g[a0]
l.j(0,a7,B.C)
B.a.m(k,a7)
B.a.m(f.b,a7)}for(s=a4.gaU(a4),s=s.gw(s);s.n();)this.aS(s.gp(s).d,a9,b0,b1)}}
A.hv.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.u(0,new A.k(1,0)))===B.b?1:0
if(s.h(0,a.u(0,new A.k(-1,0)))===B.b)++r
if(s.h(0,a.u(0,new A.k(0,-1)))===B.b)++r
return s.h(0,a.u(0,new A.k(1,1)))===B.b?r+1:r},
$S:24}
A.h8.prototype={
bJ(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.B(0,o.a4()>0.45?B.h:B.b,n,m)
p.B(0,B.a3,n,m)}new A.dH(a7).aY(3)
for(p=q-1,l=0;l<r;++l){s.B(0,B.b,l,0)
s.B(0,B.b,l,p)}for(o=r-1,k=0;k<q;++k){s.B(0,B.b,0,k)
s.B(0,B.b,o,k)}j=new A.h9(a7)
i=new A.ha(a7)
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
o=A.jv(p)
a0=new A.dT(a7,A.e([],t.g2),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.k(l,k)
if(o.L(0,a1)||s.h(0,a1)===B.b)continue
a0.bv(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.D)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gw(a3);d.n();)s.j(0,d.gp(d),B.b)
else B.a.m(o,new A.a3(a3,A.e([],h),A.e([],h),A.hl(a3)))}a4=A.bt(p,t.u)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.a,a2=0;b=o.length,a2<b;o.length===r||(0,A.D)(o),++a2){a3=o[a2]
B.a.m(p,a3)
h.j(0,a3,A.e([],d))
for(b=J.aI(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.D)(o),++a2){a3=o[a2]
r=a3.a
p=J.aq(r)
if(p.gl(r)>a6){a6=p.gl(r)
a5=a3}}this.aS(a5,a7,a4,q)
for(r=q.bA(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.D)(r),++a2){a3=r[a2]
B.a.J(o,a3)
for(p=J.aI(a3.a);p.n();)s.j(0,p.gp(p),B.b)}A.kY(o,a7)}}
A.h9.prototype={
$2(a,b){return J.Q(this.a.b.T(0,a,b),B.h)},
$S:7}
A.ha.prototype={
$2(a,b){return J.Q(this.a.b.T(0,a,b),B.b)},
$S:7}
A.aB.prototype={}
A.eL.prototype={}
A.cg.prototype={}
A.cM.prototype={
O(a,b){this.$ti.c.a(a)
return Math.min(B.U.O(a,b),B.b0.O(a,b)+B.aL.O(a,b))}}
A.dI.prototype={
O(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.o)return 1/0
s=A.jk(a,B.j,b)
r=A.jk(a,B.l,b)
q=A.jk(a,B.k,b)
p=A.jk(a,B.m,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.dz.prototype={
O(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.o)return 1/0
if(A.bH(a,B.j,b)+A.bH(a,B.l,b)+A.bH(a,B.k,b)+A.bH(a,B.m,b)===1)return 1
return 1/0}}
A.dM.prototype={
O(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.o)return 1/0
if(A.bH(a,B.j,b)+A.bH(a,B.l,b)+A.bH(a,B.k,b)+A.bH(a,B.m,b)===2)return 1
return 1/0}}
A.cc.prototype={
O(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.o)return 1/0
s=A.a_(a,B.j)
r=A.a_(a,B.l)
q=A.a_(a,B.k)
p=A.a_(a,B.m)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.cX.prototype={
d5(a,b){return this.b.$2(a,b)}}
A.ji.prototype={
$2(a,b){b.e.j(0,a,B.a6)},
$S:1}
A.je.prototype={
$2(a,b){b.e.j(0,a,B.aF)},
$S:1}
A.jg.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.B)s.j(0,a,B.a4)
else s.j(0,a,B.a5)},
$S:1}
A.jd.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.B)s.j(0,a,B.a4)
else s.j(0,a,B.a5)},
$S:1}
A.jf.prototype={
$2(a,b){b.e.j(0,a,B.Q)},
$S:1}
A.jh.prototype={
$2(a,b){b.e.j(0,a,B.aG)
b.f.j(0,a,B.bn)},
$S:1}
A.jc.prototype={
$2(a,b){b.e.j(0,a,B.R)},
$S:1}
A.jj.prototype={
$2(a,b){var s=t.u
s.a(a)
s.a(b)
return J.a0(a.a)-J.a0(b.a)},
$S:27}
A.cv.prototype={}
A.h4.prototype={
bH(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=4000,c=new A.O(100,40,A.aR(d,B.h,!1,t.a5),t.p),b=A.aR(d,0,!1,t.i),a=A.aR(d,B.a3,!1,t.d0),a0=new A.O(100,40,A.aR(d,B.o,!1,t.gQ),t.gg),a1=t.a,a2=new A.cv(a3,c,new A.O(100,40,b,t.cL),new A.O(100,40,a,t.dl),a0,new A.O(100,40,A.aR(d,B.aw,!1,t.ad),t.aE),new A.O(100,40,A.aR(d,null,!1,t.br),t.b1),new A.hk(A.e([],a1),A.bt(t.u,t.h5)),A.e([],a1))
b=a3.a
switch(b){case B.ad:new A.h8(B.q).bJ(a2)
break
case B.aZ:new A.i6(A.jv(t.j),B.q).bM(a2)
break
case B.b_:case B.ac:case B.ae:new A.ie(B.q).bK(a2)
break}s=new Float32Array(4000)
new A.hZ().bL(s,100,40)
r=new A.O(100,40,A.jw(d,new A.h5(),t.W),t.L)
for(q=0;q<100;++q)for(a=q!==0,a1=q!==99,p=0;p<40;++p)if(!a||!a1||p===0||p===39){c.B(0,B.b,q,p)
a0.B(0,B.o,q,p)}this.b.bI(a2.y,a2,a3.c)
for(a=a2.c,a1=this.a,o=a2.d,n=a2.r,b=b!==B.ae,m=a2.f,q=0;q<100;++q)for(p=0;p<40;++p){l=J.Q(c.T(0,q,p),B.h)
k=c.T(0,q,p)
k.toString
j=new A.k(q,p)
a1.a4()
i=r.h(0,j)
h=o.h(0,j)
g=a0.h(0,j)
i.b=j
i.c=k
i.sdd(o.h(0,j))
k=p*100+q
if(!(k<4000))return A.b(s,k)
f=s[k]
e=n.T(0,q,p)
if(J.Q(a.h(0,j),1))i.r=B.be
else if(g!==B.o)switch(g){case B.C:if(m.h(0,j)===B.av)i.f=B.M
else i.f=B.r
break
case B.a5:i.f=B.x
break
case B.o:break
case B.aF:i.f=B.O
break
case B.a6:i.f=B.N
break
case B.bA:i.f=B.w
break
case B.Q:i.f=B.L
if(e!=null)B.a.m(i.e,e)
break
case B.R:i.f=B.J
break
case B.aG:i.f=B.K
break
case B.aH:i.f=B.I
break
case B.a4:i.f=B.u
break}else if(l&&f<0.42&&h!==B.B&&b)i.f=B.w
if(e!=null)B.a.m(i.e,e)}return new A.hN(r,a3)}}
A.h5.prototype={
$1(a){var s=A.e([],t.de)
return new A.b8(B.A,B.h,s)},
$S:8}
A.cU.prototype={
gl(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.hk.prototype={
bA(){var s,r,q,p,o,n=A.e([],t.a)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.D)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.m(n,o)}return n}}
A.a3.prototype={
k(a){return"Room{"+J.a0(this.a)+"; "+this.d.k(0)+"}"}}
A.dT.prototype={
bv(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.e([a],k),i=A.e([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.L(0,o))continue
q.m(0,o)
B.a.m(i,o)
for(n=0;n<8;++n){m=A.a_(o,B.bh[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.L(0,m)&&k.h(0,m)===B.h)B.a.m(j,m)}}B.a.m(this.b,i)}}
A.e_.prototype={
bn(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.R)s=B.ap
else if(a instanceof A.S)s=B.an
else s=a instanceof A.ae?B.ao:B.aq
B.a.m(r.a,a)
B.a.m(r.b,s)
B.a.m(r.c,b)
r.d+=b},
bm(a){return this.bn(a,10)},
d6(a){var s,r,q,p,o={},n=o.a=0,m=A.jw(this.c.length,new A.hF(o,this),t.i),l=a.a4()
for(s=m.length,r=l>-1;n<s;++n){q=m[n]
if(r&&l<=q){s=this.a
if(!(n<s.length))return A.b(s,n)
s=s[n]
if(s instanceof A.R)p=B.ap
else if(s instanceof A.S)p=B.an
else if(s instanceof A.ae)p=B.ao
else{J.bI(s)
p=B.aq}$.k7=$.k7+1
return new A.bO(s,p)}}throw A.d(A.aT(""))},
bQ(a){var s,r,q=B.a.cX(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
bP(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p===0)return
B.a.j(r,q,p-2)
this.d-=2}}}
A.hF.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.b(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:29}
A.hX.prototype={}
A.hA.prototype={
bI(a,b,c){var s,r,q
t.h5.a(a)
s=new A.e_(A.e([],t.f),A.e([],t.gr),A.e([],t.Y))
r=s.gcK()
new A.ax(B.bk,t.bB.a(new A.hB()),t.eL).C(0,r)
new A.ax(B.bi,t.aL.a(new A.hC()),t.fm).C(0,r)
new A.ax(B.bj,t.ei.a(new A.hD()),t.aC).C(0,r)
new A.ax(B.bf,t.gj.a(new A.hE()),t.dP).C(0,r)
s.bm(B.ah)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.D)(a),++q)this.cd(s,a[q],b)},
cd(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.aq(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.A
break}r=j.length
if(r!==0){r=l.A(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.A(k.gl(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.Q||q===B.o
else r=!1
if(r)break;++i}if(s.E(0,B.A))return
p=a.d6(l)
n=p.b
if(!J.Q(n,B.ah)){a.bQ(n)
a.bP(p.c)
o.j(0,s,p)}}}
A.hB.prototype={
$1(a){return t.eV.a(a).b<=1000},
$S:30}
A.hC.prototype={
$1(a){return t.bP.a(a).f<=1000},
$S:31}
A.hD.prototype={
$1(a){return t.e4.a(a).r<=1000},
$S:32}
A.hE.prototype={
$1(a){return t.fW.a(a).c<=1000},
$S:33}
A.hZ.prototype={
N(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
bL(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
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
o=$.lb()
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
c=a8.N(0,o[d],k,j,i)
if(!(a0<f))return A.b(o,a0)
a2=k-1
c+=h*(a8.N(0,o[a0],a2,j,i)-c)
if(!(b<f))return A.b(o,b)
a3=j-1
a4=a8.N(0,o[b],k,a3,i)
if(!(a1<f))return A.b(o,a1)
c+=g*(a4+h*(a8.N(0,o[a1],a2,a3,i)-a4)-c)
a4=d+1
if(!(a4<f))return A.b(o,a4)
a5=i-1
a4=a8.N(0,o[a4],k,j,a5)
a6=a0+1
if(!(a6<f))return A.b(o,a6)
a4+=h*(a8.N(0,o[a6],a2,j,a5)-a4)
a6=b+1
if(!(a6<f))return A.b(o,a6)
a6=a8.N(0,o[a6],k,a3,a5)
a7=a1+1
if(!(a7<f))return A.b(o,a7)
a5=a8.N(0,o[a7],a2,a3,a5)
if(!(p<4000))return A.b(a9,p)
a9[p]=(c+i*i*i*(i*(i*6-15)+10)*(a4+g*(a6+h*(a5-a6)-a4)-c)+1)/2}}}
A.b6.prototype={
k(a){return"RuinOrientation."+this.b}}
A.cP.prototype={
k(a){return"RoomSizeKind."+this.b}}
A.i6.prototype={
bM(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a,a1=a0.A(5)
if(!(a1>=0&&a1<5))return A.b(B.au,a1)
s=B.au[a1]
r=a.aZ(B.az)
q=a.ck(s)
p=A.lz(a.bs(a2,r,new A.k(B.d.D(Math.max(1,q.a-r.a/2)),B.d.D(Math.max(1,q.b-A.bS(r)/2)))))
a1=a2.y
B.a.m(a1,p)
for(o=t.q,n=0;n<2000;){m=new A.k(a0.A(98)+1,a0.A(38)+1)
l=[B.P,B.P,B.P,B.ay]
k=a0.A(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a.aZ(l[k])
if(!a.d8(a2,r,m)){l=a.bs(a2,r,m)
B.a.m(a1,new A.a3(l,A.e([],o),A.e([],o),A.hl(l)))}else ++n}for(a0=a.b,o=a2.d,l=a2.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.k(j,i)
o.B(0,B.B,j,i)
if(!a0.L(0,h))l.j(0,h,B.b)}g=A.bt(t.j,t.u)
for(a0=a1.length,o=a2.x,k=o.a,f=o.b,e=t.a,d=0;d<a1.length;a1.length===a0||(0,A.D)(a1),++d){c=a1[d]
B.a.m(k,c)
f.j(0,c,A.e([],e))
for(b=J.aI(c.a);b.n();)g.j(0,b.gp(b),c)}a.aS(p,a2,g,o)
for(a0=o.bA(),o=a0.length,d=0;d<a0.length;a0.length===o||(0,A.D)(a0),++d){c=a0[d]
B.a.J(a1,c)
for(k=J.aI(c.a);k.n();)l.j(0,k.gp(k),B.b)}A.kY(a1,a2)},
aZ(a){var s
switch(a){case B.P:s=this.a
return new A.cO(s.A(5)+5,s.A(5)+5)
case B.ay:s=this.a
return new A.cO(s.A(10)+9,s.A(10)+9)
case B.az:s=this.a
return new A.cO(s.A(10)+20,s.A(10)+20)}},
ck(a){switch(a){case B.aA:return new A.k(50,10)
case B.aB:return new A.k(50,30)
case B.aC:return new A.k(75,20)
case B.aD:return new A.k(25,20)
case B.aE:return new A.k(50,20)}},
bs(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.e([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.k(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.m(0,d)
r.j(0,d,f?B.b:B.h)
if(!f)B.a.m(a,d)}return a},
d8(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.k(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.b||n.L(0,i))return!0}return!1}}
A.cO.prototype={}
A.ie.prototype={
ci(a){var s,r,q=a.a.a===B.ac?B.a3:B.bz
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
bK(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.ci(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.a4()>0.6)r.j(0,new A.k(q,p),B.b)
new A.dH(b8).aY(10)
o=A.jv(t.j)
n=new A.dT(b8,A.e([],t.g2),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.k(k,j)
if(o.L(0,i)||r.h(0,i)===B.b)continue
n.bv(i)}o=n.b
B.a.am(o,new A.ig())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.D)(h),++f)r.j(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.j(e,q,B.aH)
B.a.j(o,q,B.h)}$label0$1:for(o=b8.y,e=t.q,d=b8.d,c=0;c<3;){b=s.A(3)+5
a=s.A(3)+5
q=s.A(100-b)
p=s.A(40-a)
for(a0=q-1,a1=q+b,a2=a1+1,a3=p-1,a4=p+a,a5=a4+1;a0<a2;++a0)for(a6=a0>=0,a7=a0<m,a8=a3;a8<a5;++a8){i=new A.k(a0,a8)
if(!(a6&&a8>=0&&a7&&a8<l))continue $label0$1
if(g.h(0,i)!==B.o||r.h(0,i)!==B.h)continue $label0$1}a9=A.e([],e)
b0=A.e([],e)
for(a2=a1-1,a5=a4-1,a0=q;a0<a1;++a0)for(a6=a0-q!==0,a7=a0!==a2,a3=p;a3<a4;++a3){i=new A.k(a0,a3)
if(!a6||!a7||a3-p===0||a3===a5){r.j(0,i,B.b)
B.a.m(a9,i)}else B.a.m(b0,i)
d.j(0,i,B.B)}b1=new A.ih(b8)
B.a.bR(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.A
break}b3=a9[f]
b4=A.a_(b3,B.j)
b5=A.a_(b3,B.l)
b6=A.a_(b3,B.m)
b7=A.a_(b3,B.k)
if(A.b_(b1.$1(b4))&&A.b_(b1.$1(b5))){b2=b3
break}if(A.b_(b1.$1(b6))&&A.b_(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.D)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.h)
g.j(0,b2,B.C)
B.a.m(o,new A.a3(b0,A.e([],e),A.e([],e),A.hl(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.D)(o),++f)A.dx(o[f],$.jm(),b8)}}
A.ig.prototype={
$2(a,b){var s=t.fb
s.a(a)
return J.a0(s.a(b))-J.a0(a)},
$S:34}
A.ih.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.h&&s.e.h(0,a)===B.o},
$S:35}
A.ir.prototype={
bZ(a){var s=t.eN.a(new A.is(this))
t.Z.a(null)
A.f1(a,"keydown",s,!1,t.cf)}}
A.is.prototype={
$1(a){var s,r,q,p
t.cf.a(a)
s=$.ms.h(0,a.key)
if(s!=null){a.preventDefault()
r=this.a.a
q=A.B(r)
q.c.a(s)
p=r.b
if(p>=4)A.T(r.c5())
if((p&1)!==0)r.aC(s)
else if((p&3)===0)r.cf().m(0,new A.bE(s,q.i("bE<1>")))}else A.jS(a.key)},
$S:36}
A.ab.prototype={
k(a){return"InputCommand."+this.b}}
A.fZ.prototype={
cY(){var s,r,q,p,o,n,m,l,k=this,j=document
k.b=t.cO.a(j.querySelector("#action_bar"))
for(s=k.c,r=t.do,q=r.i("~(1)?"),p=t.Z,r=r.c,o=0;o<3;++o){n=s[o]
m=j.createElement("button")
m.innerText=n
l=q.a(new A.h_(k))
p.a(null)
A.f1(m,"click",l,!1,r)
A.aZ(k.b,"base").appendChild(m)}}}
A.h_.prototype={
$1(a){var s,r
t.V.a(a)
s=this.a.a
r=A.aZ(s.a,"_modal").style
r.display="none"
s=A.aZ(s.a,"_modal").style
s.display="block"},
$S:6}
A.hU.prototype={
bX(){var s,r=document.getElementById("myModal")
r.toString
this.a=r
r=window
s=t.h2.a(new A.hV(this))
t.Z.a(null)
A.f1(r,"click",s,!1,t.V)}}
A.hV.prototype={
$1(a){var s=this.a
if(A.mp(t.V.a(a).target)===A.aZ(s.a,"_modal")){s=A.aZ(s.a,"_modal").style
s.display="none"}},
$S:6};(function aliases(){var s=J.a.prototype
s.bT=s.k
s=J.br.prototype
s.bU=s.k})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_1u,m=hunkHelpers.installInstanceTearOff
s(J.t.prototype,"gcI","m",14)
r(A,"mW","m_",3)
r(A,"mX","m0",3)
r(A,"mY","m1",3)
q(A,"kN","mQ",0)
p(A,"n_","mK",5)
q(A,"mZ","mJ",0)
o(A.J.prototype,"gc9","a_",5)
var l
n(l=A.dW.prototype,"gcT","aH",18)
n(l,"gbf","cm",9)
p(A,"nm","mP",39)
m(A.e_.prototype,"gcK",0,1,null,["$2","$1"],["bn","bm"],28,0,0)
r(A,"kS","nl",26)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.y,null)
q(A.y,[A.jt,J.a,J.ci,A.C,A.i7,A.h,A.aQ,A.V,A.a4,A.cn,A.il,A.hY,A.ct,A.db,A.bl,A.w,A.hI,A.cD,A.au,A.f4,A.fH,A.iT,A.eN,A.ck,A.eS,A.bG,A.J,A.eO,A.bA,A.aU,A.dc,A.eP,A.cY,A.eW,A.bc,A.fv,A.dj,A.dk,A.fb,A.d2,A.f,A.cQ,A.aN,A.iz,A.ei,A.cR,A.iB,A.bQ,A.L,A.fy,A.ex,A.hd,A.jp,A.o,A.cu,A.eV,A.f8,A.dY,A.aL,A.O,A.cd,A.h7,A.dW,A.bO,A.R,A.hR,A.b3,A.S,A.cf,A.ae,A.a1,A.hM,A.b8,A.e3,A.k,A.hN,A.i4,A.hm,A.aC,A.bL,A.hn,A.hp,A.fC,A.iq,A.i1,A.bV,A.cw,A.a2,A.v,A.eQ,A.fI,A.hw,A.i3,A.er,A.am,A.hP,A.iu,A.ia,A.dH,A.hu,A.aB,A.cX,A.cv,A.h4,A.cU,A.hk,A.a3,A.dT,A.e_,A.hX,A.hA,A.hZ,A.cO,A.ie,A.ir,A.fZ,A.hU])
q(J.a,[J.cx,J.cz,J.br,J.t,J.cA,J.bP,A.bz,A.c,A.fY,A.dE,A.aM,A.A,A.eU,A.ar,A.hg,A.hh,A.eX,A.cr,A.eZ,A.hi,A.j,A.f2,A.aa,A.hy,A.f6,A.hK,A.hQ,A.fc,A.fd,A.ac,A.fe,A.fg,A.ad,A.fk,A.fn,A.af,A.fo,A.ag,A.ft,A.W,A.fA,A.ij,A.ah,A.fD,A.ik,A.ip,A.fL,A.fN,A.fP,A.fR,A.fT,A.ak,A.f9,A.al,A.fi,A.i_,A.fw,A.an,A.fF,A.h2,A.eR,A.dG,A.dV,A.el,A.bU,A.aV,A.eF,A.eJ,A.fr])
q(J.br,[J.ej,J.cV,J.aO])
r(J.hG,J.t)
q(J.cA,[J.cy,J.e0])
q(A.C,[A.cB,A.b9,A.e1,A.eH,A.en,A.cj,A.f0,A.ef,A.aJ,A.eI,A.eG,A.aS,A.dL,A.dN])
q(A.h,[A.m,A.bw,A.ax])
q(A.m,[A.at,A.cC])
q(A.at,[A.cS,A.cG])
r(A.cs,A.bw)
q(A.V,[A.cF,A.cW])
r(A.co,A.cn)
r(A.cL,A.b9)
q(A.bl,[A.dJ,A.dK,A.ez,A.hH,A.j6,A.j8,A.iw,A.iv,A.iX,A.iF,A.iN,A.ic,A.iR,A.hO,A.iA,A.ht,A.hr,A.ja,A.i9,A.j1,A.hv,A.h5,A.hF,A.hB,A.hC,A.hD,A.hE,A.ih,A.is,A.h_,A.hV])
q(A.ez,[A.ev,A.bK])
r(A.eM,A.cj)
r(A.cE,A.w)
r(A.bs,A.cE)
q(A.dK,[A.j7,A.iY,A.j0,A.iG,A.hL,A.hS,A.hT,A.i5,A.ib,A.h3,A.hb,A.h9,A.ha,A.ji,A.je,A.jg,A.jd,A.jf,A.jh,A.jc,A.jj,A.ig])
r(A.bR,A.bz)
q(A.bR,[A.d4,A.d6])
r(A.d5,A.d4)
r(A.by,A.d5)
r(A.d7,A.d6)
r(A.cI,A.d7)
r(A.cH,A.by)
q(A.cI,[A.e9,A.ea,A.eb,A.ec,A.ed,A.cJ,A.ee])
r(A.dg,A.f0)
q(A.dJ,[A.ix,A.iy,A.iU,A.iC,A.iJ,A.iH,A.iE,A.iI,A.iD,A.iM,A.iL,A.iK,A.id,A.iS,A.iP,A.j_,A.iQ,A.hs])
r(A.bD,A.eS)
r(A.c_,A.dc)
q(A.bA,[A.dd,A.d_])
r(A.c0,A.dd)
r(A.c1,A.cY)
r(A.bE,A.eW)
r(A.aH,A.bc)
r(A.fm,A.dj)
r(A.d8,A.dk)
r(A.d1,A.d8)
q(A.aJ,[A.bT,A.dZ])
q(A.c,[A.q,A.dR,A.a6,A.d9,A.a7,A.U,A.de,A.eK,A.bZ,A.dD,A.b2])
q(A.q,[A.N,A.aA])
q(A.N,[A.n,A.l])
q(A.n,[A.dA,A.dB,A.dF,A.bj,A.bM,A.dU,A.bN,A.bx,A.eo])
r(A.hc,A.aM)
r(A.cp,A.eU)
q(A.ar,[A.he,A.hf])
r(A.eY,A.eX)
r(A.cq,A.eY)
r(A.f_,A.eZ)
r(A.dO,A.f_)
r(A.a9,A.dE)
r(A.f3,A.f2)
r(A.dQ,A.f3)
r(A.f7,A.f6)
r(A.bp,A.f7)
r(A.aG,A.j)
q(A.aG,[A.aP,A.a5])
r(A.e5,A.fc)
r(A.e6,A.fd)
r(A.ff,A.fe)
r(A.e7,A.ff)
r(A.fh,A.fg)
r(A.cK,A.fh)
r(A.fl,A.fk)
r(A.ek,A.fl)
r(A.em,A.fn)
r(A.da,A.d9)
r(A.es,A.da)
r(A.fp,A.fo)
r(A.et,A.fp)
r(A.ew,A.ft)
r(A.fB,A.fA)
r(A.eA,A.fB)
r(A.df,A.de)
r(A.eB,A.df)
r(A.fE,A.fD)
r(A.eC,A.fE)
r(A.bX,A.bx)
r(A.fM,A.fL)
r(A.eT,A.fM)
r(A.cZ,A.cr)
r(A.fO,A.fN)
r(A.f5,A.fO)
r(A.fQ,A.fP)
r(A.d3,A.fQ)
r(A.fS,A.fR)
r(A.fq,A.fS)
r(A.fU,A.fT)
r(A.fz,A.fU)
r(A.ba,A.d_)
r(A.d0,A.aU)
r(A.fa,A.f9)
r(A.e2,A.fa)
r(A.fj,A.fi)
r(A.eg,A.fj)
r(A.fx,A.fw)
r(A.ey,A.fx)
r(A.fG,A.fF)
r(A.eD,A.fG)
r(A.dC,A.eR)
r(A.eh,A.b2)
r(A.fs,A.fr)
r(A.eu,A.fs)
q(A.iz,[A.bq,A.dX,A.b4,A.bn,A.aw,A.bm,A.ce,A.bJ,A.bW,A.bB,A.X,A.bv,A.bi,A.hJ,A.P,A.bk,A.as,A.bC,A.b6,A.cP,A.ab])
q(A.i4,[A.hj,A.hq,A.e4,A.i8,A.ii,A.ho])
q(A.aC,[A.eE,A.e8,A.ep,A.cT,A.dS])
q(A.hu,[A.h8,A.i6])
q(A.aB,[A.eL,A.cg,A.cM])
q(A.eL,[A.dI,A.dz,A.dM,A.cc])
s(A.d4,A.f)
s(A.d5,A.a4)
s(A.d6,A.f)
s(A.d7,A.a4)
s(A.c_,A.eP)
s(A.dk,A.cQ)
s(A.eU,A.hd)
s(A.eX,A.f)
s(A.eY,A.o)
s(A.eZ,A.f)
s(A.f_,A.o)
s(A.f2,A.f)
s(A.f3,A.o)
s(A.f6,A.f)
s(A.f7,A.o)
s(A.fc,A.w)
s(A.fd,A.w)
s(A.fe,A.f)
s(A.ff,A.o)
s(A.fg,A.f)
s(A.fh,A.o)
s(A.fk,A.f)
s(A.fl,A.o)
s(A.fn,A.w)
s(A.d9,A.f)
s(A.da,A.o)
s(A.fo,A.f)
s(A.fp,A.o)
s(A.ft,A.w)
s(A.fA,A.f)
s(A.fB,A.o)
s(A.de,A.f)
s(A.df,A.o)
s(A.fD,A.f)
s(A.fE,A.o)
s(A.fL,A.f)
s(A.fM,A.o)
s(A.fN,A.f)
s(A.fO,A.o)
s(A.fP,A.f)
s(A.fQ,A.o)
s(A.fR,A.f)
s(A.fS,A.o)
s(A.fT,A.f)
s(A.fU,A.o)
s(A.f9,A.f)
s(A.fa,A.o)
s(A.fi,A.f)
s(A.fj,A.o)
s(A.fw,A.f)
s(A.fx,A.o)
s(A.fF,A.f)
s(A.fG,A.o)
s(A.eR,A.w)
s(A.fr,A.f)
s(A.fs,A.o)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",F:"double",K:"num",r:"String",M:"bool",L:"Null",p:"List"},mangledNames:{},types:["~()","~(k,cv)","~(r,@)","~(~())","L()","~(y,av)","~(a5)","M(i,i)","b8(i)","~(aN)","~(j)","L(@)","L(y,av)","J<@>(@)","~(y?)","@(r)","~(r,r)","~(i,@)","aE<~>(ab)","L(@,av)","~(y?,y?)","L(aV)","~(@)","i(i,i)","i(k)","@(@,r)","~(K)","i(a3,a3)","~(y[i])","F(i)","M(R)","M(S)","M(ae)","M(a1)","i(p<k>,p<k>)","M(k)","~(aP)","@(@)","L(~())","i(am,am)","~(bL)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.mg(v.typeUniverse,JSON.parse('{"ej":"br","cV":"br","aO":"br","nt":"j","nE":"j","nv":"b2","nu":"c","nL":"c","nN":"c","ns":"l","nF":"l","nx":"n","nG":"q","nD":"q","nM":"a5","o_":"U","nz":"aG","ny":"aA","nP":"aA","nH":"bp","nA":"A","nB":"W","nw":"bx","nK":"by","nJ":"bz","cx":{"M":[]},"cz":{"L":[]},"t":{"p":["1"],"m":["1"],"h":["1"]},"hG":{"t":["1"],"p":["1"],"m":["1"],"h":["1"]},"ci":{"V":["1"]},"cA":{"F":[],"K":[]},"cy":{"F":[],"i":[],"K":[]},"e0":{"F":[],"K":[]},"bP":{"r":[]},"cB":{"C":[]},"m":{"h":["1"]},"at":{"m":["1"],"h":["1"]},"cS":{"at":["1"],"m":["1"],"h":["1"],"at.E":"1","h.E":"1"},"aQ":{"V":["1"]},"bw":{"h":["2"],"h.E":"2"},"cs":{"bw":["1","2"],"m":["2"],"h":["2"],"h.E":"2"},"cF":{"V":["2"]},"cG":{"at":["2"],"m":["2"],"h":["2"],"at.E":"2","h.E":"2"},"ax":{"h":["1"],"h.E":"1"},"cW":{"V":["1"]},"cn":{"G":["1","2"]},"co":{"cn":["1","2"],"G":["1","2"]},"cL":{"b9":[],"C":[]},"e1":{"C":[]},"eH":{"C":[]},"db":{"av":[]},"bl":{"bo":[]},"dJ":{"bo":[]},"dK":{"bo":[]},"ez":{"bo":[]},"ev":{"bo":[]},"bK":{"bo":[]},"en":{"C":[]},"eM":{"C":[]},"bs":{"w":["1","2"],"kb":["1","2"],"G":["1","2"],"w.K":"1","w.V":"2"},"cC":{"m":["1"],"h":["1"],"h.E":"1"},"cD":{"V":["1"]},"bz":{"ai":[]},"bR":{"u":["1"],"ai":[]},"by":{"f":["F"],"u":["F"],"p":["F"],"m":["F"],"ai":[],"h":["F"],"a4":["F"],"f.E":"F"},"cI":{"f":["i"],"u":["i"],"p":["i"],"m":["i"],"ai":[],"h":["i"],"a4":["i"]},"cH":{"f":["F"],"jr":[],"u":["F"],"p":["F"],"m":["F"],"ai":[],"h":["F"],"a4":["F"],"f.E":"F"},"e9":{"f":["i"],"u":["i"],"p":["i"],"m":["i"],"ai":[],"h":["i"],"a4":["i"],"f.E":"i"},"ea":{"f":["i"],"u":["i"],"p":["i"],"m":["i"],"ai":[],"h":["i"],"a4":["i"],"f.E":"i"},"eb":{"f":["i"],"u":["i"],"p":["i"],"m":["i"],"ai":[],"h":["i"],"a4":["i"],"f.E":"i"},"ec":{"f":["i"],"u":["i"],"p":["i"],"m":["i"],"ai":[],"h":["i"],"a4":["i"],"f.E":"i"},"ed":{"f":["i"],"u":["i"],"p":["i"],"m":["i"],"ai":[],"h":["i"],"a4":["i"],"f.E":"i"},"cJ":{"f":["i"],"u":["i"],"p":["i"],"m":["i"],"ai":[],"h":["i"],"a4":["i"],"f.E":"i"},"ee":{"f":["i"],"lX":[],"u":["i"],"p":["i"],"m":["i"],"ai":[],"h":["i"],"a4":["i"],"f.E":"i"},"f0":{"C":[]},"dg":{"b9":[],"C":[]},"J":{"aE":["1"]},"ck":{"C":[]},"bD":{"eS":["1"]},"dc":{"kk":["1"],"ku":["1"],"bF":["1"]},"c_":{"eP":["1"],"dc":["1"],"kk":["1"],"ku":["1"],"bF":["1"]},"c0":{"dd":["1"],"bA":["1"]},"c1":{"cY":["1"],"aU":["1"],"bF":["1"]},"cY":{"aU":["1"],"bF":["1"]},"dd":{"bA":["1"]},"bE":{"eW":["1"]},"aH":{"bc":["1"]},"dj":{"kp":[]},"fm":{"dj":[],"kp":[]},"d1":{"cQ":["1"],"kj":["1"],"m":["1"],"h":["1"]},"d2":{"V":["1"]},"cE":{"w":["1","2"],"G":["1","2"]},"w":{"G":["1","2"]},"d8":{"cQ":["1"],"kj":["1"],"m":["1"],"h":["1"]},"F":{"K":[]},"i":{"K":[]},"p":{"m":["1"],"h":["1"]},"cj":{"C":[]},"b9":{"C":[]},"ef":{"C":[]},"aJ":{"C":[]},"bT":{"C":[]},"dZ":{"C":[]},"eI":{"C":[]},"eG":{"C":[]},"aS":{"C":[]},"dL":{"C":[]},"ei":{"C":[]},"cR":{"C":[]},"dN":{"C":[]},"fy":{"av":[]},"aP":{"j":[]},"a5":{"j":[]},"q":{"c":[]},"a6":{"c":[]},"a7":{"c":[]},"U":{"c":[]},"n":{"N":[],"q":[],"c":[]},"dA":{"N":[],"q":[],"c":[]},"dB":{"N":[],"q":[],"c":[]},"dF":{"N":[],"q":[],"c":[]},"bj":{"N":[],"q":[],"c":[]},"aA":{"q":[],"c":[]},"bM":{"N":[],"q":[],"c":[]},"cq":{"f":["aF<K>"],"o":["aF<K>"],"p":["aF<K>"],"u":["aF<K>"],"m":["aF<K>"],"h":["aF<K>"],"o.E":"aF<K>","f.E":"aF<K>"},"cr":{"aF":["K"]},"dO":{"f":["r"],"o":["r"],"p":["r"],"u":["r"],"m":["r"],"h":["r"],"o.E":"r","f.E":"r"},"N":{"q":[],"c":[]},"dQ":{"f":["a9"],"o":["a9"],"p":["a9"],"u":["a9"],"m":["a9"],"h":["a9"],"o.E":"a9","f.E":"a9"},"dR":{"c":[]},"dU":{"N":[],"q":[],"c":[]},"bp":{"f":["q"],"o":["q"],"p":["q"],"u":["q"],"m":["q"],"h":["q"],"o.E":"q","f.E":"q"},"bN":{"N":[],"q":[],"c":[]},"bx":{"N":[],"q":[],"c":[]},"e5":{"w":["r","@"],"G":["r","@"],"w.K":"r","w.V":"@"},"e6":{"w":["r","@"],"G":["r","@"],"w.K":"r","w.V":"@"},"e7":{"f":["ac"],"o":["ac"],"p":["ac"],"u":["ac"],"m":["ac"],"h":["ac"],"o.E":"ac","f.E":"ac"},"cK":{"f":["q"],"o":["q"],"p":["q"],"u":["q"],"m":["q"],"h":["q"],"o.E":"q","f.E":"q"},"ek":{"f":["ad"],"o":["ad"],"p":["ad"],"u":["ad"],"m":["ad"],"h":["ad"],"o.E":"ad","f.E":"ad"},"em":{"w":["r","@"],"G":["r","@"],"w.K":"r","w.V":"@"},"eo":{"N":[],"q":[],"c":[]},"es":{"f":["a6"],"o":["a6"],"p":["a6"],"u":["a6"],"c":[],"m":["a6"],"h":["a6"],"o.E":"a6","f.E":"a6"},"et":{"f":["af"],"o":["af"],"p":["af"],"u":["af"],"m":["af"],"h":["af"],"o.E":"af","f.E":"af"},"ew":{"w":["r","r"],"G":["r","r"],"w.K":"r","w.V":"r"},"eA":{"f":["U"],"o":["U"],"p":["U"],"u":["U"],"m":["U"],"h":["U"],"o.E":"U","f.E":"U"},"eB":{"f":["a7"],"o":["a7"],"p":["a7"],"u":["a7"],"c":[],"m":["a7"],"h":["a7"],"o.E":"a7","f.E":"a7"},"eC":{"f":["ah"],"o":["ah"],"p":["ah"],"u":["ah"],"m":["ah"],"h":["ah"],"o.E":"ah","f.E":"ah"},"aG":{"j":[]},"bX":{"N":[],"q":[],"c":[]},"eK":{"c":[]},"bZ":{"it":[],"c":[]},"eT":{"f":["A"],"o":["A"],"p":["A"],"u":["A"],"m":["A"],"h":["A"],"o.E":"A","f.E":"A"},"cZ":{"aF":["K"]},"f5":{"f":["aa?"],"o":["aa?"],"p":["aa?"],"u":["aa?"],"m":["aa?"],"h":["aa?"],"o.E":"aa?","f.E":"aa?"},"d3":{"f":["q"],"o":["q"],"p":["q"],"u":["q"],"m":["q"],"h":["q"],"o.E":"q","f.E":"q"},"fq":{"f":["ag"],"o":["ag"],"p":["ag"],"u":["ag"],"m":["ag"],"h":["ag"],"o.E":"ag","f.E":"ag"},"fz":{"f":["W"],"o":["W"],"p":["W"],"u":["W"],"m":["W"],"h":["W"],"o.E":"W","f.E":"W"},"d_":{"bA":["1"]},"ba":{"d_":["1"],"bA":["1"]},"d0":{"aU":["1"]},"cu":{"V":["1"]},"eV":{"it":[],"c":[]},"f8":{"lO":[]},"e2":{"f":["ak"],"o":["ak"],"p":["ak"],"m":["ak"],"h":["ak"],"o.E":"ak","f.E":"ak"},"eg":{"f":["al"],"o":["al"],"p":["al"],"m":["al"],"h":["al"],"o.E":"al","f.E":"al"},"ey":{"f":["r"],"o":["r"],"p":["r"],"m":["r"],"h":["r"],"o.E":"r","f.E":"r"},"l":{"N":[],"q":[],"c":[]},"eD":{"f":["an"],"o":["an"],"p":["an"],"m":["an"],"h":["an"],"o.E":"an","f.E":"an"},"dC":{"w":["r","@"],"G":["r","@"],"w.K":"r","w.V":"@"},"dD":{"c":[]},"b2":{"c":[]},"eh":{"c":[]},"eu":{"f":["G<@,@>"],"o":["G<@,@>"],"p":["G<@,@>"],"m":["G<@,@>"],"h":["G<@,@>"],"o.E":"G<@,@>","f.E":"G<@,@>"},"cd":{"hx":[]},"b8":{"hx":[]},"eE":{"aC":[]},"e8":{"aC":[]},"ep":{"aC":[]},"cT":{"aC":[]},"dS":{"aC":[]},"er":{"lU":[]},"eL":{"aB":["k"]},"cg":{"aB":["1"]},"cM":{"aB":["1"]},"dI":{"aB":["k"]},"dz":{"aB":["k"]},"dM":{"aB":["k"]},"cc":{"aB":["k"]},"jr":{"p":["F"],"m":["F"],"h":["F"],"ai":[]}}'))
A.mf(v.typeUniverse,JSON.parse('{"m":1,"bR":1,"cE":2,"d8":1,"dk":1}'))
var u={q:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",p:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",l:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",h:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x , u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n\n    float dist = distance(snapped_position, (u_source_position + vec2(0.5, 0.5)) * u_block_size) / 50.0;\n    if (dist > u_source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, u_source_strength, dist);\n    outColor = vec4(u_source_color.rgb * scale, scale);\n}\n",f:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // front and back textures are already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 front = texture(u_light_texture, d);\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.ap
return{a7:s("@<~>"),eV:s("R"),fW:s("a1"),n:s("ck"),E:s("bj"),g5:s("A"),cO:s("bM"),R:s("aN"),gw:s("m<@>"),u:s("a3"),h:s("C"),k:s("j"),c8:s("a9"),I:s("jr"),m:s("bo"),d:s("aE<@>"),aE:s("O<bv>"),dl:s("O<bB>"),gg:s("O<X>"),L:s("O<b8>"),p:s("O<bW>"),cL:s("O<F>"),b1:s("O<bO?>"),ep:s("dY<am>"),fS:s("bN"),cS:s("ab"),hf:s("h<@>"),az:s("t<cd>"),e:s("t<bJ>"),G:s("t<a2>"),f_:s("t<bL>"),X:s("t<as>"),a:s("t<a3>"),w:s("t<aC>"),cd:s("t<hx>"),eU:s("t<ab>"),U:s("t<cw>"),de:s("t<bO>"),gr:s("t<bq>"),g2:s("t<p<k>>"),f:s("t<y>"),q:s("t<k>"),s:s("t<r>"),ap:s("t<cU>"),o:s("t<v>"),B:s("t<aw>"),D:s("t<cX>"),t:s("t<F>"),gn:s("t<@>"),Y:s("t<i>"),T:s("cz"),g:s("aO"),aU:s("u<@>"),cf:s("aP"),bG:s("ak"),h5:s("p<a3>"),fb:s("p<k>"),ad:s("bv"),e8:s("G<k,a3>"),d1:s("G<r,@>"),eO:s("G<@,@>"),bP:s("S"),cI:s("ac"),V:s("a5"),A:s("q"),P:s("L"),ck:s("al"),K:s("y"),he:s("ad"),j:s("k"),e4:s("ae"),J:s("aF<K>"),r:s("bU"),fY:s("a6"),f7:s("af"),gf:s("ag"),d8:s("am"),l:s("av"),N:s("r"),cP:s("W"),d0:s("bB"),gQ:s("X"),a0:s("a7"),c7:s("U"),dy:s("aV"),W:s("b8"),a5:s("bW"),aK:s("ah"),cM:s("an"),aO:s("cU"),eK:s("b9"),Q:s("ai"),ak:s("cV"),dz:s("bX"),eL:s("ax<R>"),dP:s("ax<a1>"),fm:s("ax<S>"),aC:s("ax<ae>"),h0:s("cX"),ci:s("it"),f0:s("bD<aV>"),ez:s("bD<~>"),fQ:s("c_<ab>"),f2:s("eQ"),b:s("ba<j>"),do:s("ba<a5>"),du:s("J<aV>"),c:s("J<@>"),fJ:s("J<i>"),dS:s("J<~>"),fv:s("fu<y?>"),gz:s("fI"),cJ:s("M"),bB:s("M(R)"),gj:s("M(a1)"),aL:s("M(S)"),al:s("M(y)"),ei:s("M(ae)"),i:s("F"),z:s("@"),fO:s("@()"),y:s("@(y)"),C:s("@(y,av)"),S:s("i"),aw:s("0&*"),_:s("y*"),ch:s("c?"),eH:s("aE<L>?"),g7:s("aa?"),br:s("bO?"),O:s("y?"),gM:s("am?"),F:s("bG<@,@>?"),hg:s("fb?"),bw:s("@(j)?"),Z:s("~()?"),eN:s("~(aP)?"),h2:s("~(a5)?"),di:s("K"),H:s("~"),M:s("~()"),x:s("~(aN)"),b7:s("~(aC)"),d5:s("~(y)"),da:s("~(y,av)"),eA:s("~(r,r)"),v:s("~(r,@)"),c4:s("~(K)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.V=A.bj.prototype
B.bb=J.a.prototype
B.a=J.t.prototype
B.bc=J.cx.prototype
B.f=J.cy.prototype
B.d=J.cA.prototype
B.y=J.bP.prototype
B.bd=J.aO.prototype
B.bv=A.cH.prototype
B.ax=J.ej.prototype
B.c=A.bU.prototype
B.a8=J.cV.prototype
B.aJ=A.bZ.prototype
B.a6=new A.X("table")
B.aK=new A.cc(B.a6)
B.R=new A.X("bookshelf")
B.aL=new A.cc(B.R)
B.ac=new A.bi("surface")
B.ad=new A.bi("caves")
B.aZ=new A.bi("ruins")
B.ae=new A.bi("village")
B.b_=new A.bi("snow")
B.b0=new A.dz()
B.bP=new A.cg(A.ap("cg<k>"))
B.T=new A.dI()
B.U=new A.dM()
B.af=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.b1=function() {
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
B.b6=function(getTagFallback) {
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
B.b2=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.b3=function(hooks) {
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
B.b5=function(hooks) {
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
B.b4=function(hooks) {
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

B.ah=new A.hX()
B.b7=new A.cM(A.ap("cM<k>"))
B.b8=new A.ei()
B.D=new A.i7()
B.q=new A.f8()
B.n=new A.fm()
B.b9=new A.fy()
B.ai=new A.bk("north")
B.aj=new A.bk("south")
B.ak=new A.bk("east")
B.al=new A.bk("west")
B.E=new A.as("se")
B.F=new A.as("ne")
B.G=new A.as("sw")
B.H=new A.as("nw")
B.j=new A.as("n")
B.k=new A.as("e")
B.l=new A.as("s")
B.m=new A.as("w")
B.W=new A.ab("north")
B.X=new A.ab("east")
B.Y=new A.ab("south")
B.Z=new A.ab("west")
B.ba=new A.ab("skip")
B.am=new A.ab("fire")
B.a_=new A.P("none")
B.a0=new A.P("stairsUp")
B.I=new A.P("tree")
B.J=new A.P("bookshelf")
B.K=new A.P("mechanism")
B.a1=new A.P("activatedMechanism")
B.L=new A.P("chest")
B.u=new A.P("mechanicalLight")
B.a2=new A.P("stairsDown")
B.r=new A.P("door")
B.v=new A.P("openDoor")
B.M=new A.P("lockedDoor")
B.w=new A.P("grass")
B.x=new A.P("torch")
B.N=new A.P("table")
B.O=new A.P("chair")
B.an=new A.bq("melee")
B.ao=new A.bq("ranged")
B.ap=new A.bq("armor")
B.aq=new A.bq("other")
B.be=new A.hJ("water")
B.a9=new A.bJ("light")
B.aa=new A.bJ("heavy")
B.ab=new A.bJ("powered")
B.cn=A.e(s([B.a9,B.aa,B.ab]),t.e)
B.aM=new A.a1(1)
B.aN=new A.a1(1)
B.aO=new A.a1(1)
B.aP=new A.a1(1)
B.ce=A.e(s([B.ab]),t.e)
B.aQ=new A.a1(2)
B.cg=A.e(s([B.a9,B.aa]),t.e)
B.aR=new A.a1(2)
B.bf=A.e(s([B.aM,B.aN,B.aO,B.aP,B.aQ,B.aR]),A.ap("t<a1>"))
B.ar=A.e(s([24,36]),t.t)
B.bg=A.e(s([B.ai,B.aj,B.ak,B.al]),A.ap("t<bk>"))
B.bh=A.e(s([B.E,B.F,B.G,B.H,B.j,B.k,B.l,B.m]),t.X)
B.as=A.e(s([B.j,B.l]),t.X)
B.at=A.e(s([B.k,B.m]),t.X)
B.cc=new A.dX("oneHand")
B.c4=new A.b4("bludgeoning")
B.bX=new A.bm("none")
B.bQ=new A.b3()
B.c9=new A.bn("d6")
B.bD=new A.aw("archaic")
B.S=new A.aw("analog")
B.cm=A.e(s([B.bD,B.S]),t.B)
B.bo=new A.S(0,"Club")
B.c8=new A.bn("d4")
B.bE=new A.aw("operative")
B.ck=A.e(s([B.S,B.bE]),t.B)
B.bp=new A.S(1,"Tactical Baton")
B.c6=new A.b4("slashing")
B.bu=new A.S(1,"Survival Knife")
B.cd=new A.dX("twoHand")
B.c5=new A.b4("piercing")
B.bF=new A.aw("block")
B.cf=A.e(s([B.S,B.bF]),t.B)
B.br=new A.S(1,"Tactical Spear")
B.c3=new A.b4("fire")
B.c_=new A.bm("burn")
B.bR=new A.b3()
B.aI=new A.aw("powered")
B.cj=A.e(s([B.aI]),t.B)
B.bW=new A.hR()
B.bs=new A.S(7,"Flame Sword")
B.bZ=new A.bm("wound")
B.bS=new A.b3()
B.ca=new A.bn("d8")
B.bq=new A.S(9,"Plasma Sword")
B.c2=new A.b4("electricity")
B.bY=new A.bm("arc")
B.bT=new A.b3()
B.cb=new A.bn("d12")
B.bG=new A.aw("stun")
B.ch=A.e(s([B.bG,B.aI]),t.B)
B.bt=new A.S(8,"Shock Staff")
B.bi=A.e(s([B.bo,B.bp,B.bu,B.br,B.bs,B.bq,B.bt]),A.ap("t<S>"))
B.c1=new A.b4("cold")
B.c0=new A.bm("staggered")
B.bU=new A.b3()
B.bK=new A.ce("charge")
B.bM=new A.cf()
B.by=new A.ae("Zero pistol",5)
B.ci=A.e(s([B.S]),t.B)
B.bL=new A.ce("rounds")
B.bN=new A.cf()
B.bx=new A.ae("Tac Pistol",1)
B.c7=new A.bn("d3")
B.bV=new A.b3()
B.bH=new A.aw("line")
B.bI=new A.aw("unwieldy")
B.cl=A.e(s([B.bH,B.bI]),t.B)
B.bJ=new A.ce("petro")
B.bO=new A.cf()
B.bw=new A.ae("Flame Rifle",2)
B.bj=A.e(s([B.by,B.bx,B.bw]),A.ap("t<ae>"))
B.aX=new A.R("Second Skin",1)
B.aS=new A.R("Estex Suit I",1)
B.aV=new A.R("Flight Suit",1)
B.aU=new A.R("Freebooter Armor I",2)
B.aY=new A.R("Kasatha microcord I",2)
B.aT=new A.R("Ceremonial Plate",1)
B.aW=new A.R("Golemforged Plating",1)
B.bk=A.e(s([B.aX,B.aS,B.aV,B.aU,B.aY,B.aT,B.aW]),A.ap("t<R>"))
B.z=A.e(s([-1,3,-1,-1,3,-1]),t.t)
B.bl=A.e(s([]),t.X)
B.p=A.e(s([]),t.w)
B.aA=new A.b6("north")
B.aB=new A.b6("south")
B.aC=new A.b6("east")
B.aD=new A.b6("west")
B.aE=new A.b6("center")
B.au=A.e(s([B.aA,B.aB,B.aC,B.aD,B.aE]),A.ap("t<b6>"))
B.av=new A.bv("lockedDoor")
B.bn=new A.bv("doorMechanism")
B.aw=new A.bv("none")
B.bm=A.e(s([]),t.s)
B.co=new A.co(0,{},B.bm,A.ap("co<r,@>"))
B.A=new A.k(0,0)
B.P=new A.cP("small")
B.ay=new A.cP("medium")
B.az=new A.cP("large")
B.a3=new A.bB("dirt")
B.B=new A.bB("metal")
B.bz=new A.bB("snow")
B.C=new A.X("door")
B.bA=new A.X("grass")
B.a4=new A.X("mechanicalLight")
B.a5=new A.X("light")
B.o=new A.X("none")
B.aF=new A.X("chair")
B.Q=new A.X("chest")
B.aG=new A.X("mechanism")
B.aH=new A.X("tree")
B.h=new A.bW("floor")
B.b=new A.bW("wall")
B.bB=A.nq("y")
B.t=new A.bC("float_1")
B.e=new A.bC("float_2")
B.bC=new A.bC("float_3")
B.a7=new A.bC("float_4")
B.i=new A.bC("texture_1")})();(function staticFields(){$.iO=null
$.aK=0
$.cl=null
$.k2=null
$.kQ=null
$.kL=null
$.kW=null
$.j3=null
$.j9=null
$.jQ=null
$.c5=null
$.dq=null
$.dr=null
$.jL=!1
$.E=B.n
$.aj=A.e([],t.f)
$.k7=0
$.ms=A.bu(["ArrowUp",B.W,"ArrowDown",B.Y,"ArrowRight",B.X,"ArrowLeft",B.Z,"q",B.am],t.N,t.cS)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"nC","l_",function(){return A.n5("_$dart_dartClosure")})
s($,"nQ","l1",function(){return A.aW(A.im({
toString:function(){return"$receiver$"}}))})
s($,"nR","l2",function(){return A.aW(A.im({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"nS","l3",function(){return A.aW(A.im(null))})
s($,"nT","l4",function(){return A.aW(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"nW","l7",function(){return A.aW(A.im(void 0))})
s($,"nX","l8",function(){return A.aW(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"nV","l6",function(){return A.aW(A.kn(null))})
s($,"nU","l5",function(){return A.aW(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"nZ","la",function(){return A.aW(A.kn(void 0))})
s($,"nY","l9",function(){return A.aW(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"o0","jT",function(){return A.lZ()})
s($,"ob","jl",function(){return A.kT(B.bB)})
s($,"nI","l0",function(){var r=A.jo(4278780675)
return new A.hP(A.jo(4279308561),A.jo(4280361249),r)})
s($,"od","lc",function(){return A.jA()})
s($,"or","jY",function(){return A.bY(B.T,new A.ji())})
s($,"on","jW",function(){return A.bY(B.aK,new A.je())})
s($,"op","dy",function(){return A.bY(B.U,new A.jg())})
s($,"om","lh",function(){return A.bY(B.T,new A.jd())})
s($,"oo","li",function(){return A.bY(B.T,new A.jf())})
s($,"oq","jX",function(){return A.bY(B.U,new A.jh())})
s($,"ol","lg",function(){return A.bY(B.b7,new A.jc())})
s($,"ok","jm",function(){var r=$.jY(),q=$.jW()
return A.e([r,q,q,$.dy()],t.D)})
s($,"oj","lf",function(){var r=$.lg()
return A.e([r,r,r,r,r,$.dy(),$.jY(),$.jW()],t.D)})
s($,"oi","le",function(){var r=$.dy()
return A.e([r,r,r,r],t.D)})
s($,"oh","ld",function(){var r=$.dy(),q=$.lh()
return A.e([r,r,r,r,r,r,q,q,q,q],t.D)})
s($,"os","lj",function(){return A.e([$.li(),$.dy()],t.D)})
s($,"oc","lb",function(){return new Uint8Array(A.dp(A.e([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.Y)))})
s($,"ot","lk",function(){var r=A.k0(null,!1,!0,A.lV(1,1,0,4,null)),q=A.jA()
return new A.iu(r,A.n0(new A.h4(A.jA(),new A.hA(q)).bH(new A.hM(B.ad,!1,1))))})
s($,"og","jV",function(){return t.r.a(B.V.bN(t.E.a(A.kO().querySelector("#glCanvas")),"webgl2"))})
s($,"of","jU",function(){var r,q,p="a_position",o="u_resolution",n="u_offset",m=$.lk(),l=t.E.a(A.kO().querySelector("#glCanvas")),k=$.jV(),j=A.e([],A.ap("t<~(aN)>")),i=t.G,h=t.o,g=A.b5(A.e([A.jn(35044,A.mr(),5126,p,2),A.jn(35048,A.kd(192e3),5126,"a_color",4)],i),u.l,A.e([A.io(B.e,o),A.io(B.e,n)],h),u.q),f=$.l0()
h=A.b5(A.e([A.jn(35048,A.kd(8000),5126,p,2)],i),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.e([A.io(B.e,o),A.io(B.e,n)],h),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
i=A.lY(A.nr())
r=A.lM(0,0)
q=A.e([],A.ap("t<bV>"))
i=new A.hm(k,m,l,j,new A.er(),new A.hp(A.hW(16e6),A.hW(4000),A.hW(4000),A.hW(64e6),r,A.bt(t.j,A.ap("fC")),q),new A.h7(),new A.ii(g,f),new A.hj(h),i,k.createFramebuffer(),new A.i3())
i.bW(m,l,k)
return i})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:A.bz,ArrayBufferView:A.bz,Float64Array:A.by,Float32Array:A.cH,Int16Array:A.e9,Int32Array:A.ea,Int8Array:A.eb,Uint16Array:A.ec,Uint32Array:A.ed,Uint8ClampedArray:A.cJ,CanvasPixelArray:A.cJ,Uint8Array:A.ee,HTMLBRElement:A.n,HTMLBaseElement:A.n,HTMLButtonElement:A.n,HTMLContentElement:A.n,HTMLDListElement:A.n,HTMLDataElement:A.n,HTMLDataListElement:A.n,HTMLDetailsElement:A.n,HTMLDialogElement:A.n,HTMLEmbedElement:A.n,HTMLFieldSetElement:A.n,HTMLHRElement:A.n,HTMLHeadElement:A.n,HTMLHeadingElement:A.n,HTMLHtmlElement:A.n,HTMLIFrameElement:A.n,HTMLInputElement:A.n,HTMLLIElement:A.n,HTMLLabelElement:A.n,HTMLLegendElement:A.n,HTMLLinkElement:A.n,HTMLMapElement:A.n,HTMLMenuElement:A.n,HTMLMetaElement:A.n,HTMLMeterElement:A.n,HTMLModElement:A.n,HTMLOListElement:A.n,HTMLObjectElement:A.n,HTMLOptGroupElement:A.n,HTMLOptionElement:A.n,HTMLOutputElement:A.n,HTMLParagraphElement:A.n,HTMLParamElement:A.n,HTMLPictureElement:A.n,HTMLPreElement:A.n,HTMLProgressElement:A.n,HTMLQuoteElement:A.n,HTMLScriptElement:A.n,HTMLShadowElement:A.n,HTMLSlotElement:A.n,HTMLSourceElement:A.n,HTMLSpanElement:A.n,HTMLStyleElement:A.n,HTMLTableCaptionElement:A.n,HTMLTableCellElement:A.n,HTMLTableDataCellElement:A.n,HTMLTableHeaderCellElement:A.n,HTMLTableColElement:A.n,HTMLTableElement:A.n,HTMLTableRowElement:A.n,HTMLTableSectionElement:A.n,HTMLTemplateElement:A.n,HTMLTextAreaElement:A.n,HTMLTimeElement:A.n,HTMLTitleElement:A.n,HTMLTrackElement:A.n,HTMLUListElement:A.n,HTMLUnknownElement:A.n,HTMLDirectoryElement:A.n,HTMLFontElement:A.n,HTMLFrameElement:A.n,HTMLFrameSetElement:A.n,HTMLMarqueeElement:A.n,HTMLElement:A.n,AccessibleNodeList:A.fY,HTMLAnchorElement:A.dA,HTMLAreaElement:A.dB,Blob:A.dE,HTMLBodyElement:A.dF,HTMLCanvasElement:A.bj,CDATASection:A.aA,CharacterData:A.aA,Comment:A.aA,ProcessingInstruction:A.aA,Text:A.aA,CSSPerspective:A.hc,CSSCharsetRule:A.A,CSSConditionRule:A.A,CSSFontFaceRule:A.A,CSSGroupingRule:A.A,CSSImportRule:A.A,CSSKeyframeRule:A.A,MozCSSKeyframeRule:A.A,WebKitCSSKeyframeRule:A.A,CSSKeyframesRule:A.A,MozCSSKeyframesRule:A.A,WebKitCSSKeyframesRule:A.A,CSSMediaRule:A.A,CSSNamespaceRule:A.A,CSSPageRule:A.A,CSSRule:A.A,CSSStyleRule:A.A,CSSSupportsRule:A.A,CSSViewportRule:A.A,CSSStyleDeclaration:A.cp,MSStyleCSSProperties:A.cp,CSS2Properties:A.cp,CSSImageValue:A.ar,CSSKeywordValue:A.ar,CSSNumericValue:A.ar,CSSPositionValue:A.ar,CSSResourceValue:A.ar,CSSUnitValue:A.ar,CSSURLImageValue:A.ar,CSSStyleValue:A.ar,CSSMatrixComponent:A.aM,CSSRotation:A.aM,CSSScale:A.aM,CSSSkew:A.aM,CSSTranslation:A.aM,CSSTransformComponent:A.aM,CSSTransformValue:A.he,CSSUnparsedValue:A.hf,DataTransferItemList:A.hg,HTMLDivElement:A.bM,DOMException:A.hh,ClientRectList:A.cq,DOMRectList:A.cq,DOMRectReadOnly:A.cr,DOMStringList:A.dO,DOMTokenList:A.hi,Element:A.N,AbortPaymentEvent:A.j,AnimationEvent:A.j,AnimationPlaybackEvent:A.j,ApplicationCacheErrorEvent:A.j,BackgroundFetchClickEvent:A.j,BackgroundFetchEvent:A.j,BackgroundFetchFailEvent:A.j,BackgroundFetchedEvent:A.j,BeforeInstallPromptEvent:A.j,BeforeUnloadEvent:A.j,BlobEvent:A.j,CanMakePaymentEvent:A.j,ClipboardEvent:A.j,CloseEvent:A.j,CustomEvent:A.j,DeviceMotionEvent:A.j,DeviceOrientationEvent:A.j,ErrorEvent:A.j,ExtendableEvent:A.j,ExtendableMessageEvent:A.j,FetchEvent:A.j,FontFaceSetLoadEvent:A.j,ForeignFetchEvent:A.j,GamepadEvent:A.j,HashChangeEvent:A.j,InstallEvent:A.j,MediaEncryptedEvent:A.j,MediaKeyMessageEvent:A.j,MediaQueryListEvent:A.j,MediaStreamEvent:A.j,MediaStreamTrackEvent:A.j,MessageEvent:A.j,MIDIConnectionEvent:A.j,MIDIMessageEvent:A.j,MutationEvent:A.j,NotificationEvent:A.j,PageTransitionEvent:A.j,PaymentRequestEvent:A.j,PaymentRequestUpdateEvent:A.j,PopStateEvent:A.j,PresentationConnectionAvailableEvent:A.j,PresentationConnectionCloseEvent:A.j,ProgressEvent:A.j,PromiseRejectionEvent:A.j,PushEvent:A.j,RTCDataChannelEvent:A.j,RTCDTMFToneChangeEvent:A.j,RTCPeerConnectionIceEvent:A.j,RTCTrackEvent:A.j,SecurityPolicyViolationEvent:A.j,SensorErrorEvent:A.j,SpeechRecognitionError:A.j,SpeechRecognitionEvent:A.j,SpeechSynthesisEvent:A.j,StorageEvent:A.j,SyncEvent:A.j,TrackEvent:A.j,TransitionEvent:A.j,WebKitTransitionEvent:A.j,VRDeviceEvent:A.j,VRDisplayEvent:A.j,VRSessionEvent:A.j,MojoInterfaceRequestEvent:A.j,ResourceProgressEvent:A.j,USBConnectionEvent:A.j,IDBVersionChangeEvent:A.j,AudioProcessingEvent:A.j,OfflineAudioCompletionEvent:A.j,WebGLContextEvent:A.j,Event:A.j,InputEvent:A.j,SubmitEvent:A.j,AbsoluteOrientationSensor:A.c,Accelerometer:A.c,AccessibleNode:A.c,AmbientLightSensor:A.c,Animation:A.c,ApplicationCache:A.c,DOMApplicationCache:A.c,OfflineResourceList:A.c,BackgroundFetchRegistration:A.c,BatteryManager:A.c,BroadcastChannel:A.c,CanvasCaptureMediaStreamTrack:A.c,DedicatedWorkerGlobalScope:A.c,EventSource:A.c,FileReader:A.c,FontFaceSet:A.c,Gyroscope:A.c,XMLHttpRequest:A.c,XMLHttpRequestEventTarget:A.c,XMLHttpRequestUpload:A.c,LinearAccelerationSensor:A.c,Magnetometer:A.c,MediaDevices:A.c,MediaKeySession:A.c,MediaQueryList:A.c,MediaRecorder:A.c,MediaSource:A.c,MediaStream:A.c,MediaStreamTrack:A.c,MessagePort:A.c,MIDIAccess:A.c,MIDIInput:A.c,MIDIOutput:A.c,MIDIPort:A.c,NetworkInformation:A.c,Notification:A.c,OffscreenCanvas:A.c,OrientationSensor:A.c,PaymentRequest:A.c,Performance:A.c,PermissionStatus:A.c,PresentationAvailability:A.c,PresentationConnection:A.c,PresentationConnectionList:A.c,PresentationRequest:A.c,RelativeOrientationSensor:A.c,RemotePlayback:A.c,RTCDataChannel:A.c,DataChannel:A.c,RTCDTMFSender:A.c,RTCPeerConnection:A.c,webkitRTCPeerConnection:A.c,mozRTCPeerConnection:A.c,ScreenOrientation:A.c,Sensor:A.c,ServiceWorker:A.c,ServiceWorkerContainer:A.c,ServiceWorkerGlobalScope:A.c,ServiceWorkerRegistration:A.c,SharedWorker:A.c,SharedWorkerGlobalScope:A.c,SpeechRecognition:A.c,SpeechSynthesis:A.c,SpeechSynthesisUtterance:A.c,VR:A.c,VRDevice:A.c,VRDisplay:A.c,VRSession:A.c,VisualViewport:A.c,WebSocket:A.c,Worker:A.c,WorkerGlobalScope:A.c,WorkerPerformance:A.c,BluetoothDevice:A.c,BluetoothRemoteGATTCharacteristic:A.c,Clipboard:A.c,MojoInterfaceInterceptor:A.c,USB:A.c,IDBDatabase:A.c,IDBOpenDBRequest:A.c,IDBVersionChangeRequest:A.c,IDBRequest:A.c,IDBTransaction:A.c,AnalyserNode:A.c,RealtimeAnalyserNode:A.c,AudioBufferSourceNode:A.c,AudioDestinationNode:A.c,AudioNode:A.c,AudioScheduledSourceNode:A.c,AudioWorkletNode:A.c,BiquadFilterNode:A.c,ChannelMergerNode:A.c,AudioChannelMerger:A.c,ChannelSplitterNode:A.c,AudioChannelSplitter:A.c,ConstantSourceNode:A.c,ConvolverNode:A.c,DelayNode:A.c,DynamicsCompressorNode:A.c,GainNode:A.c,AudioGainNode:A.c,IIRFilterNode:A.c,MediaElementAudioSourceNode:A.c,MediaStreamAudioDestinationNode:A.c,MediaStreamAudioSourceNode:A.c,OscillatorNode:A.c,Oscillator:A.c,PannerNode:A.c,AudioPannerNode:A.c,webkitAudioPannerNode:A.c,ScriptProcessorNode:A.c,JavaScriptAudioNode:A.c,StereoPannerNode:A.c,WaveShaperNode:A.c,EventTarget:A.c,File:A.a9,FileList:A.dQ,FileWriter:A.dR,HTMLFormElement:A.dU,Gamepad:A.aa,History:A.hy,HTMLCollection:A.bp,HTMLFormControlsCollection:A.bp,HTMLOptionsCollection:A.bp,HTMLImageElement:A.bN,KeyboardEvent:A.aP,Location:A.hK,HTMLAudioElement:A.bx,HTMLMediaElement:A.bx,MediaList:A.hQ,MIDIInputMap:A.e5,MIDIOutputMap:A.e6,MimeType:A.ac,MimeTypeArray:A.e7,MouseEvent:A.a5,DragEvent:A.a5,PointerEvent:A.a5,WheelEvent:A.a5,Document:A.q,DocumentFragment:A.q,HTMLDocument:A.q,ShadowRoot:A.q,XMLDocument:A.q,Attr:A.q,DocumentType:A.q,Node:A.q,NodeList:A.cK,RadioNodeList:A.cK,Plugin:A.ad,PluginArray:A.ek,RTCStatsReport:A.em,HTMLSelectElement:A.eo,SourceBuffer:A.a6,SourceBufferList:A.es,SpeechGrammar:A.af,SpeechGrammarList:A.et,SpeechRecognitionResult:A.ag,Storage:A.ew,CSSStyleSheet:A.W,StyleSheet:A.W,TextTrack:A.a7,TextTrackCue:A.U,VTTCue:A.U,TextTrackCueList:A.eA,TextTrackList:A.eB,TimeRanges:A.ij,Touch:A.ah,TouchList:A.eC,TrackDefaultList:A.ik,CompositionEvent:A.aG,FocusEvent:A.aG,TextEvent:A.aG,TouchEvent:A.aG,UIEvent:A.aG,URL:A.ip,HTMLVideoElement:A.bX,VideoTrackList:A.eK,Window:A.bZ,DOMWindow:A.bZ,CSSRuleList:A.eT,ClientRect:A.cZ,DOMRect:A.cZ,GamepadList:A.f5,NamedNodeMap:A.d3,MozNamedAttrMap:A.d3,SpeechRecognitionResultList:A.fq,StyleSheetList:A.fz,SVGLength:A.ak,SVGLengthList:A.e2,SVGNumber:A.al,SVGNumberList:A.eg,SVGPointList:A.i_,SVGStringList:A.ey,SVGAElement:A.l,SVGAnimateElement:A.l,SVGAnimateMotionElement:A.l,SVGAnimateTransformElement:A.l,SVGAnimationElement:A.l,SVGCircleElement:A.l,SVGClipPathElement:A.l,SVGDefsElement:A.l,SVGDescElement:A.l,SVGDiscardElement:A.l,SVGEllipseElement:A.l,SVGFEBlendElement:A.l,SVGFEColorMatrixElement:A.l,SVGFEComponentTransferElement:A.l,SVGFECompositeElement:A.l,SVGFEConvolveMatrixElement:A.l,SVGFEDiffuseLightingElement:A.l,SVGFEDisplacementMapElement:A.l,SVGFEDistantLightElement:A.l,SVGFEFloodElement:A.l,SVGFEFuncAElement:A.l,SVGFEFuncBElement:A.l,SVGFEFuncGElement:A.l,SVGFEFuncRElement:A.l,SVGFEGaussianBlurElement:A.l,SVGFEImageElement:A.l,SVGFEMergeElement:A.l,SVGFEMergeNodeElement:A.l,SVGFEMorphologyElement:A.l,SVGFEOffsetElement:A.l,SVGFEPointLightElement:A.l,SVGFESpecularLightingElement:A.l,SVGFESpotLightElement:A.l,SVGFETileElement:A.l,SVGFETurbulenceElement:A.l,SVGFilterElement:A.l,SVGForeignObjectElement:A.l,SVGGElement:A.l,SVGGeometryElement:A.l,SVGGraphicsElement:A.l,SVGImageElement:A.l,SVGLineElement:A.l,SVGLinearGradientElement:A.l,SVGMarkerElement:A.l,SVGMaskElement:A.l,SVGMetadataElement:A.l,SVGPathElement:A.l,SVGPatternElement:A.l,SVGPolygonElement:A.l,SVGPolylineElement:A.l,SVGRadialGradientElement:A.l,SVGRectElement:A.l,SVGScriptElement:A.l,SVGSetElement:A.l,SVGStopElement:A.l,SVGStyleElement:A.l,SVGElement:A.l,SVGSVGElement:A.l,SVGSwitchElement:A.l,SVGSymbolElement:A.l,SVGTSpanElement:A.l,SVGTextContentElement:A.l,SVGTextElement:A.l,SVGTextPathElement:A.l,SVGTextPositioningElement:A.l,SVGTitleElement:A.l,SVGUseElement:A.l,SVGViewElement:A.l,SVGGradientElement:A.l,SVGComponentTransferFunctionElement:A.l,SVGFEDropShadowElement:A.l,SVGMPathElement:A.l,SVGTransform:A.an,SVGTransformList:A.eD,AudioBuffer:A.h2,AudioParamMap:A.dC,AudioTrackList:A.dD,AudioContext:A.b2,webkitAudioContext:A.b2,BaseAudioContext:A.b2,OfflineAudioContext:A.eh,WebGLBuffer:A.dG,WebGLFramebuffer:A.dV,WebGLProgram:A.el,WebGL2RenderingContext:A.bU,WebGLTexture:A.aV,WebGLUniformLocation:A.eF,WebGLVertexArrayObject:A.eJ,SQLResultSetRowList:A.eu})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,SQLResultSetRowList:true})
A.bR.$nativeSuperclassTag="ArrayBufferView"
A.d4.$nativeSuperclassTag="ArrayBufferView"
A.d5.$nativeSuperclassTag="ArrayBufferView"
A.by.$nativeSuperclassTag="ArrayBufferView"
A.d6.$nativeSuperclassTag="ArrayBufferView"
A.d7.$nativeSuperclassTag="ArrayBufferView"
A.cI.$nativeSuperclassTag="ArrayBufferView"
A.d9.$nativeSuperclassTag="EventTarget"
A.da.$nativeSuperclassTag="EventTarget"
A.de.$nativeSuperclassTag="EventTarget"
A.df.$nativeSuperclassTag="EventTarget"})()
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
var s=A.nh
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

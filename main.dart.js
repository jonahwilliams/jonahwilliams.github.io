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
a[c]=function(){a[c]=function(){A.lU(b)}
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
if(a[b]!==s)A.lV(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=b.fs[0]
if(a)return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"(receiver) {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(receiver, this);"+"}")(b,A.iI,null)
else return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"() {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(this, null);"+"}")(b,A.iI,null)}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.iI(a).prototype
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
a(hunkHelpers,v,w,$)}var A={ij:function ij(){},
iY(a){return new A.bs("Field '"+a+"' has been assigned during initialization.")},
aT(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
iu(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
jw(a,b,c){return a},
j5(a,b,c,d){A.h6(b,"start")
if(c!=null){A.h6(c,"end")
if(b>c)A.a6(A.ch(b,0,c,"start",null))}return new A.co(a,b,c,d.j("co<0>"))},
j_(a,b,c,d){if(t.gw.b(a))return new A.bX(a,b,c.j("@<0>").C(d).j("bX<1,2>"))
return new A.bb(a,b,c.j("@<0>").C(d).j("bb<1,2>"))},
kl(){return new A.cm("Too few elements")},
kz(a,b,c){A.dQ(a,0,J.Z(a)-1,b,c)},
dQ(a,b,c,d,e){if(c-b<=32)A.ky(a,b,c,d,e)
else A.kx(a,b,c,d,e)},
ky(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.am(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.E()
o=o>0}else o=!1
if(!o)break
n=p-1
r.i(a,p,r.h(a,n))
p=n}r.i(a,p,q)}},
kx(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.f.Y(a5-a4+1,6),i=a4+j,h=a5-j,g=B.f.Y(a4+a5,2),f=g-j,e=g+j,d=J.am(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.E()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.E()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.E()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.E()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.E()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.E()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.E()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.E()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.E()
if(a2>0){s=a1
a1=a0
a0=s}d.i(a3,i,c)
d.i(a3,g,a)
d.i(a3,h,a1)
d.i(a3,f,d.h(a3,a4))
d.i(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.P(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.i(a3,p,d.h(a3,r))
d.i(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.h(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.i(a3,p,d.h(a3,r))
l=r+1
d.i(a3,r,d.h(a3,q))
d.i(a3,q,o)
q=m
r=l
break}else{d.i(a3,p,d.h(a3,q))
d.i(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.i(a3,p,d.h(a3,r))
d.i(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.i(a3,p,d.h(a3,r))
l=r+1
d.i(a3,r,d.h(a3,q))
d.i(a3,q,o)
r=l}else{d.i(a3,p,d.h(a3,q))
d.i(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.i(a3,a4,d.h(a3,a2))
d.i(a3,a2,b)
a2=q+1
d.i(a3,a5,d.h(a3,a2))
d.i(a3,a2,a0)
A.dQ(a3,a4,r-2,a6,a7)
A.dQ(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.P(a6.$2(d.h(a3,r),b),0);)++r
for(;J.P(a6.$2(d.h(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.i(a3,p,d.h(a3,r))
d.i(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.i(a3,p,d.h(a3,r))
l=r+1
d.i(a3,r,d.h(a3,q))
d.i(a3,q,o)
r=l}else{d.i(a3,p,d.h(a3,q))
d.i(a3,q,o)}q=m
break}}A.dQ(a3,r,q,a6,a7)}else A.dQ(a3,r,q,a6,a7)},
bs:function bs(a){this.a=a},
hd:function hd(){},
l:function l(){},
ap:function ap(){},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aG:function aG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bb:function bb(a,b,c){this.a=a
this.b=b
this.$ti=c},
bX:function bX(a,b,c){this.a=a
this.b=b
this.$ti=c},
c8:function c8(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
c9:function c9(a,b,c){this.a=a
this.b=b
this.$ti=c},
at:function at(a,b,c){this.a=a
this.b=b
this.$ti=c},
cr:function cr(a,b,c){this.a=a
this.b=b
this.$ti=c},
a1:function a1(){},
jG(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
lK(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
x(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bm(a)
return s},
cg(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
h4(a){return A.ks(a)},
ks(a){var s,r,q,p
if(a instanceof A.A)return A.X(A.aw(a),null)
if(J.bH(a)===B.b4||t.ak.b(a)){s=B.a8(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.X(A.aw(a),null)},
bI(a){throw A.d(A.lt(a))},
b(a,b){if(a==null)J.Z(a)
throw A.d(A.bG(a,b))},
bG(a,b){var s,r="index",q=null
if(!A.iF(b))return new A.aB(!0,b,r,q)
s=A.cQ(J.Z(a))
if(b<0||b>=s)return A.D(b,a,r,q,s)
return new A.bv(q,q,!0,b,r,"Value not in range")},
lt(a){return new A.aB(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.dG()
s=new Error()
s.dartException=a
r=A.lW
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
lW(){return J.bm(this.dartException)},
a6(a){throw A.d(a)},
F(a){throw A.d(A.dd(a))},
aJ(a){var s,r,q,p,o,n
a=A.lR(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.hp(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
hq(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
j6(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ik(a,b){var s=b==null,r=s?null:b.method
return new A.du(a,r,s?null:b.receiver)},
cY(a){if(a==null)return new A.h1(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.bl(a,a.dartException)
return A.ls(a)},
bl(a,b){if(t.R.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ls(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.f.bv(r,16)&8191)===10)switch(q){case 438:return A.bl(a,A.ik(A.x(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.x(s)+" (Error "+q+")"
return A.bl(a,new A.ce(p,e))}}if(a instanceof TypeError){o=$.jJ()
n=$.jK()
m=$.jL()
l=$.jM()
k=$.jP()
j=$.jQ()
i=$.jO()
$.jN()
h=$.jS()
g=$.jR()
f=o.G(s)
if(f!=null)return A.bl(a,A.ik(A.a5(s),f))
else{f=n.G(s)
if(f!=null){f.method="call"
return A.bl(a,A.ik(A.a5(s),f))}else{f=m.G(s)
if(f==null){f=l.G(s)
if(f==null){f=k.G(s)
if(f==null){f=j.G(s)
if(f==null){f=i.G(s)
if(f==null){f=l.G(s)
if(f==null){f=h.G(s)
if(f==null){f=g.G(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.a5(s)
return A.bl(a,new A.ce(s,f==null?e:f.method))}}}return A.bl(a,new A.e6(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cl()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.bl(a,new A.aB(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cl()
return a},
cV(a){var s
if(a==null)return new A.cI(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.cI(a)},
jB(a){if(a==null||typeof a!="object")return J.bJ(a)
else return A.cg(a)},
lC(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
lJ(a,b,c,d,e,f){t.Y.a(a)
switch(A.cQ(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.ig("Unsupported number of arguments for wrapped closure"))},
cU(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.lJ)
a.$identity=s
return s},
ke(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.dV().constructor.prototype):Object.create(new A.bo(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else{q=$.aC
if(typeof q!=="number")return q.t()
$.aC=q+1
q=new Function("a,b"+q,"this.$initialize(a,b"+q+")")
r=q}s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.iU(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ka(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.iU(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ka(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.k8)}throw A.d("Error in functionType of tearoff")},
kb(a,b,c,d){var s=A.iT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
iU(a,b,c,d){var s,r,q,p,o,n="receiver"
if(c)return A.kd(a,b,d)
s=b.length
r=d||s>=27
if(r)return A.kb(s,d,a,b)
if(s===0){r=$.aC
if(typeof r!=="number")return r.t()
$.aC=r+1
q="self"+r
r="return function(){var "+q+" = this."
p=$.bR
return new Function(r+(p==null?$.bR=A.fl(n):p)+";return "+q+"."+a+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
r=$.aC
if(typeof r!=="number")return r.t()
$.aC=r+1
o+=r
r="return function("+o+"){return this."
p=$.bR
return new Function(r+(p==null?$.bR=A.fl(n):p)+"."+a+"("+o+");}")()},
kc(a,b,c,d){var s=A.iT,r=A.k9
switch(b?-1:a){case 0:throw A.d(new A.dO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
kd(a,b,c){var s,r,q,p,o,n=$.iS
if(n==null)n=$.iS=A.fl("interceptor")
s=$.bR
if(s==null)s=$.bR=A.fl("receiver")
r=b.length
q=c||r>=28
if(q)return A.kc(r,c,a,b)
if(r===1){q="return function(){return this."+n+"."+a+"(this."+s+");"
p=$.aC
if(typeof p!=="number")return p.t()
$.aC=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
q="return function("+o+"){return this."+n+"."+a+"(this."+s+", "+o+");"
p=$.aC
if(typeof p!=="number")return p.t()
$.aC=p+1
return new Function(q+p+"}")()},
iI(a){return A.ke(a)},
k8(a,b){return A.hN(v.typeUniverse,A.aw(a.a),b)},
iT(a){return a.a},
k9(a){return a.b},
fl(a){var s,r,q,p=new A.bo("receiver","interceptor"),o=J.iX(Object.getOwnPropertyNames(p),t.O)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.d2("Field name "+a+" not found.",null))},
aM(a){if(a==null)A.lu("boolean expression must not be null")
return a},
lu(a){throw A.d(new A.eb(a))},
lU(a){throw A.d(new A.df(a))},
lE(a){return v.getIsolateTag(a)},
mI(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lN(a){var s,r,q,p,o,n=A.a5($.jy.$1(a)),m=$.hT[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.hZ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.kZ($.ju.$2(a,n))
if(q!=null){m=$.hT[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.hZ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.i0(s)
$.hT[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.hZ[n]=s
return s}if(p==="-"){o=A.i0(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.jC(a,s)
if(p==="*")throw A.d(A.j7(n))
if(v.leafTags[n]===true){o=A.i0(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.jC(a,s)},
jC(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.iK(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
i0(a){return J.iK(a,!1,null,!!a.$it)},
lP(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.i0(s)
else return J.iK(s,c,null,null)},
lH(){if(!0===$.iJ)return
$.iJ=!0
A.lI()},
lI(){var s,r,q,p,o,n,m,l
$.hT=Object.create(null)
$.hZ=Object.create(null)
A.lG()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.jE.$1(o)
if(n!=null){m=A.lP(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
lG(){var s,r,q,p,o,n,m=B.aW()
m=A.bF(B.aX,A.bF(B.aY,A.bF(B.a9,A.bF(B.a9,A.bF(B.aZ,A.bF(B.b_,A.bF(B.b0(B.a8),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.jy=new A.hW(p)
$.ju=new A.hX(o)
$.jE=new A.hY(n)},
bF(a,b){return a(b)||b},
lR(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bS:function bS(){},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hp:function hp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ce:function ce(a,b){this.a=a
this.b=b},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a){this.a=a},
h1:function h1(a){this.a=a},
cI:function cI(a){this.a=a
this.b=null},
b0:function b0(){},
da:function da(){},
db:function db(){},
e_:function e_(){},
dV:function dV(){},
bo:function bo(a,b){this.a=a
this.b=b},
dO:function dO(a){this.a=a},
eb:function eb(a){this.a=a},
b8:function b8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fO:function fO(a){this.a=a},
fQ:function fQ(a,b){this.a=a
this.b=b
this.c=null},
c4:function c4(a,b){this.a=a
this.$ti=b},
c5:function c5(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hW:function hW(a){this.a=a},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
jj(a,b,c){},
iB(a){return a},
ip(a,b,c){A.jj(a,b,c)
return new Float32Array(a,b,c)},
iq(a){return new Uint8Array(a)},
aL(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.bG(b,a))},
be:function be(){},
bu:function bu(){},
bd:function bd(){},
cb:function cb(){},
ca:function ca(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
cc:function cc(){},
dF:function dF(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
j1(a,b){var s=b.c
return s==null?b.c=A.iA(a,b.z,!0):s},
j0(a,b){var s=b.c
return s==null?b.c=A.cM(a,"bZ",[b.z]):s},
j2(a){var s=a.y
if(s===6||s===7||s===8)return A.j2(a.z)
return s===11||s===12},
kw(a){return a.cy},
av(a){return A.f2(v.typeUniverse,a,!1)},
aX(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.aX(a,s,a0,a1)
if(r===s)return b
return A.jg(a,r,!0)
case 7:s=b.z
r=A.aX(a,s,a0,a1)
if(r===s)return b
return A.iA(a,r,!0)
case 8:s=b.z
r=A.aX(a,s,a0,a1)
if(r===s)return b
return A.jf(a,r,!0)
case 9:q=b.Q
p=A.cT(a,q,a0,a1)
if(p===q)return b
return A.cM(a,b.z,p)
case 10:o=b.z
n=A.aX(a,o,a0,a1)
m=b.Q
l=A.cT(a,m,a0,a1)
if(n===o&&l===m)return b
return A.iy(a,n,l)
case 11:k=b.z
j=A.aX(a,k,a0,a1)
i=b.Q
h=A.lp(a,i,a0,a1)
if(j===k&&h===i)return b
return A.je(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.cT(a,g,a0,a1)
o=b.z
n=A.aX(a,o,a0,a1)
if(f===g&&n===o)return b
return A.iz(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.fg("Attempted to substitute unexpected RTI kind "+c))}},
cT(a,b,c,d){var s,r,q,p,o=b.length,n=A.hO(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aX(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
lq(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.hO(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aX(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
lp(a,b,c,d){var s,r=b.a,q=A.cT(a,r,c,d),p=b.b,o=A.cT(a,p,c,d),n=b.c,m=A.lq(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.eq()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
lA(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.lF(s)
return a.$S()}return null},
jz(a,b){var s
if(A.j2(b))if(a instanceof A.b0){s=A.lA(a)
if(s!=null)return s}return A.aw(a)},
aw(a){var s
if(a instanceof A.A){s=a.$ti
return s!=null?s:A.iC(a)}if(Array.isArray(a))return A.aK(a)
return A.iC(J.bH(a))},
aK(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
W(a){var s=a.$ti
return s!=null?s:A.iC(a)},
iC(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.l8(a,s)},
l8(a,b){var s=a instanceof A.b0?a.__proto__.__proto__.constructor:b,r=A.kV(v.typeUniverse,s.name)
b.$ccache=r
return r},
lF(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.f2(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
lB(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.f_(a)
q=A.f2(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.f_(q):p},
lX(a){return A.lB(A.f2(v.typeUniverse,a,!1))},
l7(a){var s,r,q,p,o=this
if(o===t.K)return A.bD(o,a,A.lc)
if(!A.aO(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.bD(o,a,A.lf)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.iF
else if(r===t.i||r===t.di)q=A.lb
else if(r===t.N)q=A.ld
else q=r===t.x?A.iD:null
if(q!=null)return A.bD(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.lL)){o.r="$i"+p
if(p==="p")return A.bD(o,a,A.la)
return A.bD(o,a,A.le)}}else if(s===7)return A.bD(o,a,A.l5)
return A.bD(o,a,A.l3)},
bD(a,b,c){a.b=c
return a.b(b)},
l6(a){var s,r=this,q=A.l2
if(!A.aO(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.l_
else if(r===t.K)q=A.kY
else{s=A.cW(r)
if(s)q=A.l4}r.a=q
return r.a(a)},
hP(a){var s,r=a.y
if(!A.aO(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&A.hP(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
l3(a){var s=this
if(a==null)return A.hP(s)
return A.E(v.typeUniverse,A.jz(a,s),null,s,null)},
l5(a){if(a==null)return!0
return this.z.b(a)},
le(a){var s,r=this
if(a==null)return A.hP(r)
s=r.r
if(a instanceof A.A)return!!a[s]
return!!J.bH(a)[s]},
la(a){var s,r=this
if(a==null)return A.hP(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.A)return!!a[s]
return!!J.bH(a)[s]},
l2(a){var s,r=this
if(a==null){s=A.cW(r)
if(s)return a}else if(r.b(a))return a
A.jm(a,r)},
l4(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.jm(a,s)},
jm(a,b){throw A.d(A.jd(A.j9(a,A.jz(a,b),A.X(b,null))))},
lz(a,b,c,d){var s=null
if(A.E(v.typeUniverse,a,s,b,s))return a
throw A.d(A.jd("The type argument '"+A.X(a,s)+"' is not a subtype of the type variable bound '"+A.X(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
j9(a,b,c){var s=A.dh(a),r=A.X(b==null?A.aw(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
jd(a){return new A.cL("TypeError: "+a)},
V(a,b){return new A.cL("TypeError: "+A.j9(a,null,b))},
lc(a){return a!=null},
kY(a){if(a!=null)return a
throw A.d(A.V(a,"Object"))},
lf(a){return!0},
l_(a){return a},
iD(a){return!0===a||!1===a},
mv(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.V(a,"bool"))},
mx(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.V(a,"bool"))},
mw(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.V(a,"bool?"))},
kX(a){if(typeof a=="number")return a
throw A.d(A.V(a,"double"))},
mz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.V(a,"double"))},
my(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.V(a,"double?"))},
iF(a){return typeof a=="number"&&Math.floor(a)===a},
cQ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.V(a,"int"))},
mB(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.V(a,"int"))},
mA(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.V(a,"int?"))},
lb(a){return typeof a=="number"},
au(a){if(typeof a=="number")return a
throw A.d(A.V(a,"num"))},
mD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.V(a,"num"))},
mC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.V(a,"num?"))},
ld(a){return typeof a=="string"},
a5(a){if(typeof a=="string")return a
throw A.d(A.V(a,"String"))},
mE(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.V(a,"String"))},
kZ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.V(a,"String?"))},
ll(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.X(a[q],b)
return s},
jn(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.e([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.m(a5,"T"+(q+p))
for(o=t.O,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.b(a5,j)
m=B.K.t(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.X(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.X(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.X(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.X(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.X(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
X(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.X(a.z,b)
return s}if(l===7){r=a.z
s=A.X(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.X(a.z,b)+">"
if(l===9){p=A.lr(a.z)
o=a.Q
return o.length>0?p+("<"+A.ll(o,b)+">"):p}if(l===11)return A.jn(a,b,null)
if(l===12)return A.jn(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
lr(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
kW(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
kV(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.f2(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cN(a,5,"#")
q=A.hO(s)
for(p=0;p<s;++p)q[p]=r
o=A.cM(a,b,q)
n[b]=o
return o}else return m},
kT(a,b){return A.jh(a.tR,b)},
kS(a,b){return A.jh(a.eT,b)},
f2(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.jc(A.ja(a,null,b,c))
r.set(b,s)
return s},
hN(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.jc(A.ja(a,b,c,!0))
q.set(c,r)
return r},
kU(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.iy(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aW(a,b){b.a=A.l6
b.b=A.l7
return b},
cN(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aq(null,null)
s.y=b
s.cy=c
r=A.aW(a,s)
a.eC.set(c,r)
return r},
jg(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.kQ(a,b,r,c)
a.eC.set(r,s)
return s},
kQ(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.aO(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.aq(null,null)
q.y=6
q.z=b
q.cy=c
return A.aW(a,q)},
iA(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.kP(a,b,r,c)
a.eC.set(r,s)
return s},
kP(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.aO(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.cW(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.cW(q.z))return q
else return A.j1(a,b)}}p=new A.aq(null,null)
p.y=7
p.z=b
p.cy=c
return A.aW(a,p)},
jf(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.kN(a,b,r,c)
a.eC.set(r,s)
return s},
kN(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.aO(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.cM(a,"bZ",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.aq(null,null)
q.y=8
q.z=b
q.cy=c
return A.aW(a,q)},
kR(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aq(null,null)
s.y=13
s.z=b
s.cy=q
r=A.aW(a,s)
a.eC.set(q,r)
return r},
f1(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
kM(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cM(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.f1(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aq(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.aW(a,r)
a.eC.set(p,q)
return q},
iy(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.f1(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aq(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.aW(a,o)
a.eC.set(q,n)
return n},
je(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.f1(m)
if(j>0){s=l>0?",":""
r=A.f1(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.kM(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aq(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.aW(a,o)
a.eC.set(q,r)
return r},
iz(a,b,c,d){var s,r=b.cy+("<"+A.f1(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.kO(a,b,c,r,d)
a.eC.set(r,s)
return s},
kO(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.hO(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.aX(a,b,r,0)
m=A.cT(a,c,r,0)
return A.iz(a,n,m,c!==m)}}l=new A.aq(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.aW(a,l)},
ja(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
jc(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.kH(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.jb(a,r,h,g,!1)
else if(q===46)r=A.jb(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.aV(a.u,a.e,g.pop()))
break
case 94:g.push(A.kR(a.u,g.pop()))
break
case 35:g.push(A.cN(a.u,5,"#"))
break
case 64:g.push(A.cN(a.u,2,"@"))
break
case 126:g.push(A.cN(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.ix(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.cM(p,n,o))
else{m=A.aV(p,a.e,n)
switch(m.y){case 11:g.push(A.iz(p,m,o,a.n))
break
default:g.push(A.iy(p,m,o))
break}}break
case 38:A.kI(a,g)
break
case 42:p=a.u
g.push(A.jg(p,A.aV(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.iA(p,A.aV(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.jf(p,A.aV(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.eq()
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
A.ix(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.je(p,A.aV(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.ix(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.kK(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.aV(a.u,a.e,i)},
kH(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
jb(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.kW(s,o.z)[p]
if(n==null)A.a6('No "'+p+'" in "'+A.kw(o)+'"')
d.push(A.hN(s,o,n))}else d.push(p)
return m},
kI(a,b){var s=b.pop()
if(0===s){b.push(A.cN(a.u,1,"0&"))
return}if(1===s){b.push(A.cN(a.u,4,"1&"))
return}throw A.d(A.fg("Unexpected extended operation "+A.x(s)))},
aV(a,b,c){if(typeof c=="string")return A.cM(a,c,a.sEA)
else if(typeof c=="number")return A.kJ(a,b,c)
else return c},
ix(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aV(a,b,c[s])},
kK(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aV(a,b,c[s])},
kJ(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.d(A.fg("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.d(A.fg("Bad index "+c+" for "+b.l(0)))},
E(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.aO(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.aO(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.E(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return A.E(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.E(a,b.z,c,d,e)
if(r===6)return A.E(a,b.z,c,d,e)
return r!==7}if(r===6)return A.E(a,b.z,c,d,e)
if(p===6){s=A.j1(a,d)
return A.E(a,b,c,s,e)}if(r===8){if(!A.E(a,b.z,c,d,e))return!1
return A.E(a,A.j0(a,b),c,d,e)}if(r===7){s=A.E(a,t.P,c,d,e)
return s&&A.E(a,b.z,c,d,e)}if(p===8){if(A.E(a,b,c,d.z,e))return!0
return A.E(a,b,c,A.j0(a,d),e)}if(p===7){s=A.E(a,b,c,t.P,e)
return s||A.E(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Y)return!0
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
if(!A.E(a,k,c,j,e)||!A.E(a,j,e,k,c))return!1}return A.jo(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return A.jo(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.l9(a,b,c,d,e)}return!1},
jo(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.E(a3,a4.z,a5,a6.z,a7))return!1
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
if(!A.E(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.E(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.E(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.E(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
l9(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.hN(a,b,r[o])
return A.ji(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.ji(a,n,null,c,m,e)},
ji(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.E(a,r,d,q,f))return!1}return!0},
cW(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.aO(a))if(r!==7)if(!(r===6&&A.cW(a.z)))s=r===8&&A.cW(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
lL(a){var s
if(!A.aO(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aO(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.O},
jh(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
hO(a){return a>0?new Array(a):v.typeUniverse.sEA},
aq:function aq(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eq:function eq(){this.c=this.b=this.a=null},
f_:function f_(a){this.a=a},
em:function em(){},
cL:function cL(a){this.a=a},
kC(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.lv()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.cU(new A.hv(q),1)).observe(s,{childList:true})
return new A.hu(q,s,r)}else if(self.setImmediate!=null)return A.lw()
return A.lx()},
kD(a){self.scheduleImmediate(A.cU(new A.hw(t.M.a(a)),0))},
kE(a){self.setImmediate(A.cU(new A.hx(t.M.a(a)),0))},
kF(a){t.M.a(a)
A.kL(0,a)},
kL(a,b){var s=new A.hL()
s.bb(a,b)
return s},
ic(a,b){var s=A.jw(a,"error",t.K)
return new A.bQ(s,b==null?A.k7(a):b)},
k7(a){var s
if(t.R.b(a)){s=a.gW()
if(s!=null)return s}return B.b3},
kG(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.ae()
b.a5(a)
A.cx(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.aG(q)}},
cx(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.d;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.hQ(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.cx(c.a,b)
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
A.hQ(i.a,i.b)
return}f=$.H
if(f!==g)$.H=g
else f=null
b=b.c
if((b&15)===8)new A.hG(p,c,m).$0()
else if(n){if((b&1)!==0)new A.hF(p,i).$0()}else if((b&2)!==0)new A.hE(c,p).$0()
if(f!=null)$.H=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.j("bZ<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.X(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.kG(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.X(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
lj(a,b){var s=t.C
if(s.b(a))return s.a(a)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.iR(a,"onError",u.c))},
li(){var s,r
for(s=$.bE;s!=null;s=$.bE){$.cS=null
r=s.b
$.bE=r
if(r==null)$.cR=null
s.a.$0()}},
lo(){$.iE=!0
try{A.li()}finally{$.cS=null
$.iE=!1
if($.bE!=null)$.iL().$1(A.jv())}},
js(a){var s=new A.ec(a),r=$.cR
if(r==null){$.bE=$.cR=s
if(!$.iE)$.iL().$1(A.jv())}else $.cR=r.b=s},
lm(a){var s,r,q,p=$.bE
if(p==null){A.js(a)
$.cS=$.cR
return}s=new A.ec(a)
r=$.cS
if(r==null){s.b=p
$.bE=$.cS=s}else{q=r.b
s.b=q
$.cS=r.b=s
if(q==null)$.cR=s}},
hQ(a,b){A.lm(new A.hR(a,b))},
jq(a,b,c,d,e){var s,r=$.H
if(r===c)return d.$0()
$.H=c
s=r
try{r=d.$0()
return r}finally{$.H=s}},
jr(a,b,c,d,e,f,g){var s,r=$.H
if(r===c)return d.$1(e)
$.H=c
s=r
try{r=d.$1(e)
return r}finally{$.H=s}},
lk(a,b,c,d,e,f,g,h,i){var s,r=$.H
if(r===c)return d.$2(e,f)
$.H=c
s=r
try{r=d.$2(e,f)
return r}finally{$.H=s}},
iH(a,b,c,d){t.M.a(d)
if(B.n!==c)d=c.bI(d)
A.js(d)},
hv:function hv(a){this.a=a},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(a){this.a=a},
hx:function hx(a){this.a=a},
hL:function hL(){},
hM:function hM(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b){this.a=a
this.b=b},
ef:function ef(){},
ct:function ct(a,b){this.a=a
this.$ti=b},
cw:function cw(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ah:function ah(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
hB:function hB(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(a){this.a=a},
hF:function hF(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
ec:function ec(a){this.a=a
this.b=null},
cn:function cn(){},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
dX:function dX(){},
cO:function cO(){},
hR:function hR(a,b){this.a=a
this.b=b},
eI:function eI(){},
hJ:function hJ(a,b){this.a=a
this.b=b},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
c6(a,b,c){return b.j("@<0>").C(c).j("iZ<1,2>").a(A.lC(a,new A.b8(b.j("@<0>").C(c).j("b8<1,2>"))))},
b9(a,b){return new A.b8(a.j("@<0>").C(b).j("b8<1,2>"))},
il(a){return new A.cy(a.j("cy<0>"))},
iw(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
iW(a,b,c){var s,r
if(A.iG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.m($.ai,a)
try{A.lg(a,s)}finally{if(0>=$.ai.length)return A.b($.ai,-1)
$.ai.pop()}r=A.j4(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
ii(a,b,c){var s,r
if(A.iG(a))return b+"..."+c
s=new A.dY(b)
B.a.m($.ai,a)
try{r=s
r.a=A.j4(r.a,a,", ")}finally{if(0>=$.ai.length)return A.b($.ai,-1)
$.ai.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
iG(a){var s,r
for(s=$.ai.length,r=0;r<s;++r)if(a===$.ai[r])return!0
return!1},
lg(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.x(l.gp(l))
B.a.m(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gp(l);++j
if(!l.n()){if(j<=4){B.a.m(b,A.x(p))
return}r=A.x(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp(l);++j
for(;l.n();p=o,o=n){n=l.gp(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.m(b,"...")
return}}q=A.x(p)
r=A.x(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.m(b,m)
B.a.m(b,q)
B.a.m(b,r)},
io(a){var s,r={}
if(A.iG(a))return"{...}"
s=new A.dY("")
try{B.a.m($.ai,a)
s.a+="{"
r.a=!0
J.k4(a,new A.fS(r,s))
s.a+="}"}finally{if(0>=$.ai.length)return A.b($.ai,-1)
$.ai.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cy:function cy(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ex:function ex(a){this.a=a
this.b=null},
cz:function cz(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
f:function f(){},
c7:function c7(){},
fS:function fS(a,b){this.a=a
this.b=b},
v:function v(){},
fV:function fV(a){this.a=a},
ck:function ck(){},
cF:function cF(){},
cP:function cP(){},
ki(a){if(a instanceof A.b0)return a.l(0)
return"Instance of '"+A.h4(a)+"'"},
aH(a,b,c,d){var s,r=J.km(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
kq(a,b,c){var s=A.kp(a,c)
return s},
kp(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.j("u<0>"))
s=A.e([],b.j("u<0>"))
for(r=J.aA(a);r.n();)B.a.m(s,r.gp(r))
return s},
im(a,b,c){var s,r=J.kn(a,c)
for(s=0;s<a;++s)B.a.i(r,s,b.$1(s))
return r},
j4(a,b,c){var s=J.aA(b)
if(!s.n())return a
if(c.length===0){do a+=A.x(s.gp(s))
while(s.n())}else{a+=A.x(s.gp(s))
for(;s.n();)a=a+c+A.x(s.gp(s))}return a},
dh(a){if(typeof a=="number"||A.iD(a)||a==null)return J.bm(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ki(a)},
fg(a){return new A.bP(a)},
d2(a,b){return new A.aB(!1,null,b,a)},
iR(a,b,c){return new A.aB(!0,a,b,c)},
ku(a){var s=null
return new A.bv(s,s,!1,s,s,a)},
ch(a,b,c,d,e){return new A.bv(b,c,!0,a,d,"Invalid value")},
it(a,b,c){if(0>a||a>c)throw A.d(A.ch(a,0,c,"start",null))
if(a>b||b>c)throw A.d(A.ch(b,a,c,"end",null))
return b},
h6(a,b){if(a<0)throw A.d(A.ch(a,0,null,b,null))
return a},
D(a,b,c,d,e){var s=A.cQ(e==null?J.Z(b):e)
return new A.dq(s,!0,a,c,"Index out of range")},
w(a){return new A.e7(a)},
j7(a){return new A.e5(a)},
by(a){return new A.cm(a)},
dd(a){return new A.dc(a)},
ig(a){return new A.hA(a)},
ir(a,b,c,d){var s,r
if(B.x===c){s=B.e.gu(a)
b=B.e.gu(b)
return A.iu(A.aT(A.aT($.ia(),s),b))}if(B.x===d){s=B.e.gu(a)
b=B.e.gu(b)
c=J.bJ(c)
return A.iu(A.aT(A.aT(A.aT($.ia(),s),b),c))}s=B.e.gu(a)
b=B.e.gu(b)
c=J.bJ(c)
d=J.bJ(d)
r=$.ia()
return A.iu(A.aT(A.aT(A.aT(A.aT(r,s),b),c),d))},
jD(a){A.lQ(a)},
hy:function hy(){},
z:function z(){},
bP:function bP(a){this.a=a},
aU:function aU(){},
dG:function dG(){},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bv:function bv(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dq:function dq(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
e7:function e7(a){this.a=a},
e5:function e5(a){this.a=a},
cm:function cm(a){this.a=a},
dc:function dc(a){this.a=a},
dJ:function dJ(){},
cl:function cl(){},
df:function df(a){this.a=a},
hA:function hA(a){this.a=a},
h:function h(){},
R:function R(){},
bt:function bt(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(){},
A:function A(){},
eS:function eS(){},
dY:function dY(a){this.a=a},
jx(){return document},
iv(a,b,c,d,e){var s=A.jt(new A.hz(c),t.J)
if(s!=null&&!0)J.k3(a,b,s,!1)
return new A.en(a,b,s,!1,e.j("en<0>"))},
jt(a,b){var s=$.H
if(s===B.n)return a
return s.bJ(a,b)},
n:function n(){},
fe:function fe(){},
d0:function d0(){},
d1:function d1(){},
d5:function d5(){},
d6:function d6(){},
aZ:function aZ(){},
ax:function ax(){},
fq:function fq(){},
y:function y(){},
bU:function bU(){},
fr:function fr(){},
an:function an(){},
aD:function aD(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
bV:function bV(){},
bW:function bW(){},
dg:function dg(){},
fw:function fw(){},
N:function N(){},
i:function i(){},
c:function c(){},
a8:function a8(){},
di:function di(){},
dj:function dj(){},
dl:function dl(){},
a9:function a9(){},
fF:function fF(){},
b5:function b5(){},
bp:function bp(){},
aF:function aF(){},
fR:function fR(){},
bc:function bc(){},
fX:function fX(){},
dx:function dx(){},
fZ:function fZ(a){this.a=a},
dy:function dy(){},
h_:function h_(a){this.a=a},
aa:function aa(){},
dz:function dz(){},
q:function q(){},
cd:function cd(){},
ab:function ab(){},
dL:function dL(){},
dN:function dN(){},
hb:function hb(a){this.a=a},
dP:function dP(){},
a2:function a2(){},
dR:function dR(){},
ad:function ad(){},
dS:function dS(){},
ae:function ae(){},
dW:function dW(){},
hg:function hg(a){this.a=a},
T:function T(){},
a3:function a3(){},
Q:function Q(){},
e0:function e0(){},
e1:function e1(){},
hn:function hn(){},
af:function af(){},
e2:function e2(){},
ho:function ho(){},
a4:function a4(){},
hr:function hr(){},
bA:function bA(){},
e9:function e9(){},
bC:function bC(){},
eg:function eg(){},
cu:function cu(){},
er:function er(){},
cA:function cA(){},
eM:function eM(){},
eT:function eT(){},
ie:function ie(a,b){this.a=a
this.$ti=b},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bi:function bi(a,b,c,d){var _=this
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
hz:function hz(a){this.a=a},
o:function o(){},
bY:function bY(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
eo:function eo(){},
ep:function ep(){},
es:function es(){},
et:function et(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eG:function eG(){},
eH:function eH(){},
eJ:function eJ(){},
cG:function cG(){},
cH:function cH(){},
eK:function eK(){},
eL:function eL(){},
eP:function eP(){},
eU:function eU(){},
eV:function eV(){},
cJ:function cJ(){},
cK:function cK(){},
eW:function eW(){},
eX:function eX(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
is(){return B.q},
eu:function eu(){},
aj:function aj(){},
dv:function dv(){},
ak:function ak(){},
dH:function dH(){},
h3:function h3(){},
dZ:function dZ(){},
k:function k(){},
al:function al(){},
e3:function e3(){},
ev:function ev(){},
ew:function ew(){},
eE:function eE(){},
eF:function eF(){},
eQ:function eQ(){},
eR:function eR(){},
eY:function eY(){},
eZ:function eZ(){},
fh:function fh(){},
d3:function d3(){},
fi:function fi(a){this.a=a},
d4:function d4(){},
aP:function aP(){},
dI:function dI(){},
ee:function ee(){},
d7:function d7(){},
dm:function dm(){},
dM:function dM(){},
bw:function bw(){},
aI:function aI(){},
e4:function e4(){},
e8:function e8(){},
dT:function dT(){},
eN:function eN(){},
eO:function eO(){},
dp:function dp(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
kv(a,b,c){var s,r="a_position",q="u_resolution",p=A.l1(),o=t.G,n=t.o
p=A.c0(A.e([new A.a7(r,35044,5126,2,p),new A.a7("a_color",35048,5126,4,new Float32Array(192e3))],o),u.l,A.e([new A.G(q,B.m)],n),u.j)
s=$.jI()
p=new A.h7(b,a,c,new A.hm(p,s),new A.fx(A.c0(A.e([new A.a7(r,35048,5126,2,new Float32Array(8000))],o),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.e([new A.G(q,B.m)],n),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\n\nvoid main() {\n  vec2 zeroToOne = a_position / u_resolution;\n  vec2 zeroToTwo = zeroToOne * 2.0;\n  vec2 clipSpace = zeroToTwo - 1.0;\n  gl_PointSize = 2.0;\n  gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n}\n")))
p.ba(a,b,c)
return p},
lM(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.ah($.H,t.du),p=J.k5(r),o=p.$ti,n=o.j("~(1)?").a(new A.i_(a,s,r,new A.ct(q,t.f0)))
t.Z.a(null)
A.iv(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
h7:function h7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=e
_.x=_.r=$
_.y=!1
_.Q=_.z=null
_.cx=_.ch=0},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
i_:function i_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
id(a){return new A.b1(a)},
b1:function b1(a){this.a=a},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kr(a,b){return new A.m(a,b)},
fG(a){switch(a){case B.S:case B.T:case B.V:case B.W:case B.t:case B.u:case B.I:case B.J:case B.C:case B.D:case B.E:case B.U:case B.F:case B.r:case null:return!1
case B.G:case B.H:return!0}},
kj(a){switch(a){case B.S:case B.T:case B.V:case B.W:case B.t:case B.u:case B.I:case B.J:case B.C:case B.D:case B.E:case B.U:case B.F:case B.r:case null:return!1
case B.G:case B.H:return!0}},
b6:function b6(a){this.b=a},
bq:function bq(a,b){this.b=a
this.c=b},
M:function M(a,b){this.a=a
this.b=b},
dn:function dn(a){this.b=a},
aR:function aR(a){this.b=a},
b3:function b3(a){this.b=a},
as:function as(a){this.b=a},
fY:function fY(){},
aQ:function aQ(){},
b2:function b2(a){this.b=a},
O:function O(a,b){this.f=a
this.y=b},
bL:function bL(a){this.b=a},
bM:function bM(){},
ac:function ac(a,b){this.a=a
this.r=b},
bn:function bn(a){this.b=a},
a_:function a_(a){this.c=a},
bz:function bz(a){this.b=a},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a){this.b=a},
U:function U(a){this.b=a},
ba:function ba(a){this.b=a},
aY:function aY(a){this.b=a},
bg:function bg(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.f=null},
m:function m(a,b){this.a=a
this.b=b},
L:function L(a){this.b=a},
fU:function fU(a,b){this.a=a
this.b=b},
ff:function ff(a){this.c=a},
fx:function fx(a){var _=this
_.a=a
_.b=!1
_.c=null
_.d=0},
fB:function fB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hs:function hs(a,b,c){this.a=a
this.c=b
this.d=c},
b_:function b_(a){this.b=a},
h5:function h5(a,b){this.a=a
this.b=b},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a,b,c){this.b=a
this.c=b
this.d=c},
fP:function fP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=_.f=_.e=null
_.x=e
_.z=_.y=0},
kg(a){switch(a){case B.y:return B.B
case B.z:return B.A
case B.A:return B.z
case B.B:return B.y
case B.h:return B.j
case B.i:return B.k
case B.j:return B.h
case B.k:return B.i}},
kf(a){switch(a){case B.h:return B.al
case B.i:return B.ak
case B.j:return B.al
case B.k:return B.ak
default:return B.bc}},
Y(a,b){switch(b){case B.h:return a.t(0,new A.m(0,-1))
case B.z:return a.t(0,new A.m(1,-1))
case B.i:return a.t(0,new A.m(1,0))
case B.y:return a.t(0,new A.m(1,1))
case B.j:return a.t(0,new A.m(0,1))
case B.A:return a.t(0,new A.m(-1,1))
case B.k:return a.t(0,new A.m(-1,0))
case B.B:return a.t(0,new A.m(-1,-1))}},
ao:function ao(a){this.b=a},
c0(a,b,c,d){var s=t.N
return new A.fE(d,b,c,a,A.b9(s,t.gz),A.b9(s,t.f2))},
jl(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.P(a.getShaderParameter(s,35713),!0)){A.jD(J.bm(a.getShaderInfoLog(s)))
throw A.d(A.by("Invalid Shader"))}return s},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
G:function G(a,b){this.a=a
this.b=b},
bh:function bh(a){this.b=a},
ed:function ed(a,b){this.a=a
this.c=b},
f0:function f0(a,b){this.a=a
this.b=b},
fE:function fE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
h8:function h8(){},
ln(a,b){var s=t.d8
s.a(a)
s.a(b)
return B.f.bM(a.r,b.r)},
kA(a,b,c,d,e){return new A.ar(c,d,a,b,e)},
kk(a,b,c){var s,r,q,p=null
switch(a){case B.S:case null:return p
case B.T:s=p
r=3
q=16
break
case B.V:s=p
r=2
q=16
break
case B.G:s=p
r=6
q=11
break
case B.W:s=p
r=15
q=5
break
case B.H:s=p
r=5
q=11
break
case B.t:s=new A.b1(4286578432)
r=2
q=2
break
case B.u:s=new A.b1(4294940672)
r=12
q=7
break
case B.I:s=p
r=1
q=13
break
case B.J:s=p
r=1
q=13
break
case B.C:s=p
r=6
q=0
break
case B.D:s=p
r=0
q=15
break
case B.E:s=p
r=12
q=16
break
case B.U:s=p
r=0
q=16
break
case B.F:s=p
r=13
q=3
break
case B.r:s=p
r=6
q=16
break
default:s=p
r=0
q=0}return new A.ar(r,q,b,c,s)},
he:function he(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
ar:function ar(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=0},
l1(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
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
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a,b){var _=this
_.a=a
_.b=null
_.c=!1
_.d=b},
l0(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
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
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
ly(a){var s,r,q,p=A.im(4000,new A.hS(a),t.W),o=new Uint8Array(4000)
for(s=a.a.c,r=s.length,q=0;q<4000;++q){if(!(q<r))return A.b(s,q)
s[q].toString
o[q]=0}return new A.hf(o,new A.K(100,40,p,t.L))},
lD(a){var s,r,q,p,o
for(s=a.b,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.m(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.aM(A.fG(o.f))))return p}throw A.d("Solid")},
ht:function ht(a,b,c){this.a=a
this.b=b
this.e=c},
hS:function hS(a){this.a=a},
hf:function hf(a,b){this.a=a
this.b=b},
d8:function d8(a){this.a=a},
fp:function fp(a){this.a=a},
fC:function fC(){},
fD:function fD(a){this.a=a},
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
fo:function fo(a){this.a=a},
i9(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.w))break
q=A.Y(q,b);++p}return p},
bk(a,b,c){var s=A.Y(a,b)
if(c.e.h(0,s)===B.w)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
bB(a,b){return new A.cs(a,b)},
cX(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.e([],t.D)
for(s=a2.length,r=a1.a,q=J.fd(r),p=t.q,o=t.v,n=0;n<a2.length;a2.length===s||(0,A.F)(a2),++n){m=a2[n]
l=A.e([],p)
k=A.e([],o)
for(j=q.gA(r),i=0;j.n();){h=j.gp(j)
g=m.a.K(h,a3)
if(g<1000){B.a.m(l,h)
B.a.m(k,g)
i+=g}}if(l.length===0){B.a.m(a0,m)
continue}for(f=0,e=0;e<k.length;++e,f=d){d=k[e]/i+f
B.a.i(k,e,d)}c=$.jU().U()
for(j=k.length,h=l.length,b=B.p,a=-1,e=0;e<j;++e,a=g){g=k[e]
if(c>=a&&c<g){if(!(e<h))return A.b(l,e)
b=l[e]}}j=0===b.a&&0===b.b
if(j){B.a.m(a0,m)
continue}m.bY(b,a3)}for(s=q.gA(r),r=a3.e,q=a1.c;s.n();){p=s.gp(s)
if(r.h(0,p)===B.M||r.h(0,p)===B.N)B.a.m(q,p)}return a0},
jF(a,b){var s,r,q,p,o,n,m,l,k
B.a.a4(a,new A.i8())
if(0>=a.length)return A.b(a,0)
A.cX(a[0],$.k1(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.F)(s),++p)q.i(0,s[p],B.ao)
for(s=A.j5(a,1,null,A.aK(a).c),r=s.$ti,s=new A.aG(s,s.gk(s),r.j("aG<ap.E>")),r=r.j("ap.E"),o=t.h0,n=2;s.n();){m=r.a(s.d)
l=m.a
k=J.am(l)
if(k.gk(l)<30){if(n>0){l=A.kq($.ib(),!0,o)
l.push($.iN())}else l=$.ib()
if(!B.a.H(A.cX(m,l,b),$.iN()))--n}else if(k.gk(l)<60)A.cX(m,$.jX(),b)
else if(k.gk(l)<100)A.cX(m,$.jW(),b)
else A.cX(m,$.jV(),b)}if(n===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.F)(s),++p)q.i(0,s[p],B.ap)}},
ay:function ay(){},
ea:function ea(){},
bN:function bN(a){this.$ti=a},
cf:function cf(a){this.$ti=a},
d9:function d9(){},
d_:function d_(){},
de:function de(){},
bK:function bK(a){this.a=a},
cs:function cs(a,b){this.a=a
this.b=b},
i7:function i7(){},
i3:function i3(){},
i5:function i5(){},
i2:function i2(){},
i4:function i4(){},
i6:function i6(){},
i1:function i1(){},
i8:function i8(){},
kh(a){var s=t.q
return new A.a0(a,A.e([],s),A.e([],s),A.fz(a))},
fz(a){var s,r,q=J.am(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gk(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.m(B.e.a1(p/q.gk(a)),B.e.a1(o/q.gk(a)))},
c_:function c_(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
fj:function fj(a,b){this.a=a
this.b=b},
fk:function fk(){},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fy:function fy(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
dr:function dr(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
fM:function fM(a,b){this.a=a
this.b=b},
h0:function h0(){},
fH:function fH(a){this.a=a},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
h2:function h2(){},
aS:function aS(a){this.b=a},
cj:function cj(a){this.b=a},
hc:function hc(a,b){this.b=a
this.a=b},
ci:function ci(a,b){this.a=a
this.b=b},
hj:function hj(a){this.a=a},
hk:function hk(){},
hl:function hl(a){this.a=a},
lQ(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
lV(a){return A.a6(A.iY(a))},
bj(a,b){if(a===$)throw A.d(new A.bs("Field '"+b+"' has not been initialized."))
return a},
lh(a,b){if(a!==$)throw A.d(new A.bs("Field '"+b+"' has already been initialized."))},
jp(a,b){if(a!==$)throw A.d(A.iY(b))},
jk(a){var s,r,q
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.iD(a))return a
s=Object.getPrototypeOf(a)
if(s===Object.prototype||s===null)return A.aN(a)
if(Array.isArray(a)){r=[]
for(q=0;q<a.length;++q)r.push(A.jk(a[q]))
return r}return a},
aN(a){var s,r,q,p,o
if(a==null)return null
s=A.b9(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.F)(r),++p){o=r[p]
s.i(0,o,A.jk(a[o]))}return s},
lS(a){var s,r,q,p,o,n,m,l,k=3553
A.au(a)
s=$.k0()
r=s.c
q=r.clientWidth
p=r.clientHeight
if(q!==s.ch||p!==s.cx){B.R.sM(r,q)
B.R.sL(r,p)
s.ch=q
s.cx=p
r=s.z
if(r!=null)B.c.bN(s.b,r)
r=s.b
o=r.createTexture()
s.z=o
B.c.F(r,k,o)
B.c.a2(r,k,0,6408,s.ch,s.cx,0,6408,5121,null)
r.texParameteri(k,10241,9729)
r.texParameteri(k,10242,33071)
r.texParameteri(k,10243,33071)}r=s.b
r.viewport(0,0,q,p)
r.clear(16640)
r.enable(3042)
r.blendFuncSeparate(770,771,1,771)
if(s.y){B.c.Z(r,36160,s.Q)
B.c.aR(r,36160,36064,k,s.z,0)
o=s.e
if(o.c){o.bE(r)
o.c=!1}n=t.t
m=t.N
l=t.z
o.a.R(r,4,48e3,A.c6(["u_resolution",A.e([q,p],n)],m,l))
o=s.f
if(o.b){o.bC(0,r)
o.b=!1}o.a.R(r,0,B.f.Y(o.d,2),A.c6(["u_resolution",A.e([q,p],n)],m,l))
A.bj(s.d,"sprites").an(r,q,p,a)
B.c.Z(r,36160,null)
s.ga0().r=s.z
s.ga0().an(r,q,p,a)
s=s.gaQ()
if(!s.a.d.D(0,s.c))s.bF(r)
s.b.R(r,4,48e3,A.c6(["u_resolution",A.e([q,p],n)],m,l))
r.finish()}B.aD.aV(window,A.jA())},
lO(){B.aD.aV(window,A.jA())}},J={
iK(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hV(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.iJ==null){A.lH()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.j7("Return interceptor for "+A.x(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.hI
if(o==null)o=$.hI=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.lN(a)
if(p!=null)return p
if(typeof a=="function")return B.b5
s=Object.getPrototypeOf(a)
if(s==null)return B.aq
if(s===Object.prototype)return B.aq
if(typeof q=="function"){o=$.hI
if(o==null)o=$.hI=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.a1,enumerable:false,writable:true,configurable:true})
return B.a1}return B.a1},
km(a,b){if(a<0||a>4294967295)throw A.d(A.ch(a,0,4294967295,"length",null))
return J.ko(new Array(a),b)},
kn(a,b){if(a<0)throw A.d(A.d2("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.j("u<0>"))},
ko(a,b){return J.iX(A.e(a,b.j("u<0>")),b)},
iX(a,b){a.fixed$length=Array
return a},
bH(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c1.prototype
return J.dt.prototype}if(typeof a=="string")return J.br.prototype
if(a==null)return J.c2.prototype
if(typeof a=="boolean")return J.ds.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof A.A)return a
return J.hV(a)},
am(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof A.A)return a
return J.hV(a)},
fd(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof A.A)return a
return J.hV(a)},
hU(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof A.A)return a
return J.hV(a)},
P(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bH(a).D(a,b)},
iP(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.lK(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.am(a).h(a,b)},
k3(a,b,c,d){return J.hU(a).bG(a,b,c,d)},
iQ(a,b){return J.fd(a).q(a,b)},
k4(a,b){return J.fd(a).w(a,b)},
bJ(a){return J.bH(a).gu(a)},
aA(a){return J.fd(a).gA(a)},
Z(a){return J.am(a).gk(a)},
k5(a){return J.hU(a).gam(a)},
k6(a,b,c){return J.fd(a).aS(a,b,c)},
bm(a){return J.bH(a).l(a)},
a:function a(){},
ds:function ds(){},
c2:function c2(){},
b7:function b7(){},
dK:function dK(){},
cq:function cq(){},
aE:function aE(){},
u:function u(a){this.$ti=a},
fN:function fN(a){this.$ti=a},
bO:function bO(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c3:function c3(){},
c1:function c1(){},
dt:function dt(){},
br:function br(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.ij.prototype={}
J.a.prototype={
D(a,b){return a===b},
gu(a){return A.cg(a)},
l(a){return"Instance of '"+A.h4(a)+"'"}}
J.ds.prototype={
l(a){return String(a)},
gu(a){return a?519018:218159},
$iJ:1}
J.c2.prototype={
D(a,b){return null==b},
l(a){return"null"},
gu(a){return 0},
$iS:1}
J.b7.prototype={
gu(a){return 0},
l(a){return String(a)}}
J.dK.prototype={}
J.cq.prototype={}
J.aE.prototype={
l(a){var s=a[$.jH()]
if(s==null)return this.b8(a)
return"JavaScript function for "+J.bm(s)},
$ib4:1}
J.u.prototype={
m(a,b){A.aK(a).c.a(b)
if(!!a.fixed$length)A.a6(A.w("add"))
a.push(b)},
aU(a,b){var s
if(!!a.fixed$length)A.a6(A.w("remove"))
for(s=0;s<a.length;++s)if(J.P(a[s],b)){a.splice(s,1)
return!0}return!1},
aS(a,b,c){var s=A.aK(a)
return new A.c9(a,s.C(c).j("1(2)").a(b),s.j("@<1>").C(c).j("c9<1,2>"))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
ar(a,b,c,d){var s,r,q,p
A.aK(a).j("h<1>").a(d)
if(!!a.immutable$list)A.a6(A.w("setRange"))
A.it(b,c,a.length)
s=c-b
if(s===0)return
A.h6(0,"skipCount")
r=d
q=J.am(r)
if(s>q.gk(r))throw A.d(A.kl())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
a4(a,b){var s=A.aK(a)
s.j("j(1,1)?").a(b)
if(!!a.immutable$list)A.a6(A.w("sort"))
A.kz(a,b,s.c)},
b6(a){var s,r,q,p
if(!!a.immutable$list)A.a6(A.w("shuffle"))
s=a.length
for(;s>1;){r=B.q.B(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.i(a,s,a[r])
this.i(a,r,p)}},
bR(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.P(a[s],b))return s}return-1},
H(a,b){var s
for(s=0;s<a.length;++s)if(J.P(a[s],b))return!0
return!1},
l(a){return A.ii(a,"[","]")},
gA(a){return new J.bO(a,a.length,A.aK(a).j("bO<1>"))},
gu(a){return A.cg(a)},
gk(a){return a.length},
sk(a,b){if(!!a.fixed$length)A.a6(A.w("set length"))
if(b>a.length)A.aK(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.bG(a,b))
return a[b]},
i(a,b,c){A.aK(a).c.a(c)
if(!!a.immutable$list)A.a6(A.w("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.bG(a,b))
a[b]=c},
$il:1,
$ih:1,
$ip:1}
J.fN.prototype={}
J.bO.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.F(q))
s=r.c
if(s>=p){r.saA(null)
return!1}r.saA(q[s]);++r.c
return!0},
saA(a){this.d=this.$ti.j("1?").a(a)},
$iR:1}
J.c3.prototype={
bM(a,b){var s
A.au(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gal(b)
if(this.gal(a)===s)return 0
if(this.gal(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gal(a){return a===0?1/a<0:a<0},
V(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.w(""+a+".toInt()"))},
bK(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.w(""+a+".ceil()"))},
a_(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.w(""+a+".floor()"))},
a1(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.w(""+a+".round()"))},
c8(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.ch(b,2,36,"radix",null))
s=a.toString(b)
if(B.K.bL(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.a6(A.w("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.K.aq("0",p)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
b9(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.aI(a,b)},
Y(a,b){return(a|0)===a?a/b|0:this.aI(a,b)},
aI(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.w("Result of truncating division is "+A.x(s)+": "+A.x(a)+" ~/ "+b))},
bv(a,b){var s
if(a>0)s=this.bu(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bu(a,b){return b>31?0:a>>>b},
$iB:1,
$iI:1}
J.c1.prototype={$ij:1}
J.dt.prototype={}
J.br.prototype={
bL(a,b){if(b<0)throw A.d(A.bG(a,b))
if(b>=a.length)A.a6(A.bG(a,b))
return a.charCodeAt(b)},
t(a,b){return a+b},
aq(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.b2)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bZ(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aq(c,s)+a},
l(a){return a},
gu(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gk(a){return a.length},
h(a,b){if(b>=a.length)throw A.d(A.bG(a,b))
return a[b]},
$ir:1}
A.bs.prototype={
l(a){var s="LateInitializationError: "+this.a
return s}}
A.hd.prototype={}
A.l.prototype={}
A.ap.prototype={
gA(a){var s=this
return new A.aG(s,s.gk(s),A.W(s).j("aG<ap.E>"))}}
A.co.prototype={
gbm(){var s=J.Z(this.a),r=this.c
if(r==null||r>s)return s
return r},
gbw(){var s=J.Z(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.Z(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.ck()
return s-q},
q(a,b){var s=this,r=s.gbw()+b
if(b<0||r>=s.gbm())throw A.d(A.D(b,s,"index",null,null))
return J.iQ(s.a,r)}}
A.aG.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.am(q),o=p.gk(q)
if(r.b!==o)throw A.d(A.dd(q))
s=r.c
if(s>=o){r.sT(null)
return!1}r.sT(p.q(q,s));++r.c
return!0},
sT(a){this.d=this.$ti.j("1?").a(a)},
$iR:1}
A.bb.prototype={
gA(a){var s=A.W(this)
return new A.c8(J.aA(this.a),this.b,s.j("@<1>").C(s.Q[1]).j("c8<1,2>"))},
gk(a){return J.Z(this.a)}}
A.bX.prototype={$il:1}
A.c8.prototype={
n(){var s=this,r=s.b
if(r.n()){s.sT(s.c.$1(r.gp(r)))
return!0}s.sT(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
sT(a){this.a=this.$ti.j("2?").a(a)}}
A.c9.prototype={
gk(a){return J.Z(this.a)},
q(a,b){return this.b.$1(J.iQ(this.a,b))}}
A.at.prototype={
gA(a){return new A.cr(J.aA(this.a),this.b,this.$ti.j("cr<1>"))}}
A.cr.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.aM(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.a1.prototype={}
A.bS.prototype={
l(a){return A.io(this)},
$iC:1}
A.bT.prototype={
gk(a){return this.a},
ag(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.ag(0,b))return null
return this.b[A.a5(b)]},
w(a,b){var s,r,q,p,o,n=this.$ti
n.j("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.a5(s[p])
b.$2(o,n.a(q[o]))}}}
A.hp.prototype={
G(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.ce.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.du.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.e6.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.h1.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.cI.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$idU:1}
A.b0.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.jG(r==null?"unknown":r)+"'"},
$ib4:1,
gci(){return this},
$C:"$1",
$R:1,
$D:null}
A.da.prototype={$C:"$0",$R:0}
A.db.prototype={$C:"$2",$R:2}
A.e_.prototype={}
A.dV.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.jG(s)+"'"}}
A.bo.prototype={
D(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bo))return!1
return this.$_target===b.$_target&&this.a===b.a},
gu(a){return(A.jB(this.a)^A.cg(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.h4(t.K.a(this.a))+"'")}}
A.dO.prototype={
l(a){return"RuntimeError: "+this.a}}
A.eb.prototype={
l(a){return"Assertion failed: "+A.dh(this.a)}}
A.b8.prototype={
gk(a){return this.a},
gI(a){return new A.c4(this,A.W(this).j("c4<1>"))},
gaX(a){var s=this,r=A.W(s)
return A.j_(s.gI(s),new A.fO(s),r.c,r.Q[1])},
ag(a,b){var s=this.bT(b)
return s},
bT(a){var s=this,r=s.d
if(r==null)return!1
return s.ak(s.a9(r,s.aj(a)),a)>=0},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.aa(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.aa(p,b)
q=r==null?n:r.b
return q}else return o.bU(b)},
bU(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.a9(p,q.aj(a))
r=q.ak(s,a)
if(r<0)return null
return s[r].b},
i(a,b,c){var s,r,q=this,p=A.W(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.av(s==null?q.b=q.ac():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.av(r==null?q.c=q.ac():r,b,c)}else q.bV(b,c)},
bV(a,b){var s,r,q,p,o=this,n=A.W(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.ac()
r=o.aj(a)
q=o.a9(s,r)
if(q==null)o.af(s,r,[o.ad(a,b)])
else{p=o.ak(q,a)
if(p>=0)q[p].b=b
else q.push(o.ad(a,b))}},
w(a,b){var s,r,q=this
A.W(q).j("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.dd(q))
s=s.c}},
av(a,b,c){var s,r=this,q=A.W(r)
q.c.a(b)
q.Q[1].a(c)
s=r.aa(a,b)
if(s==null)r.af(a,b,r.ad(b,c))
else s.b=c},
ad(a,b){var s=this,r=A.W(s),q=new A.fQ(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&67108863
return q},
aj(a){return J.bJ(a)&0x3ffffff},
ak(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.P(a[r].a,b))return r
return-1},
l(a){return A.io(this)},
aa(a,b){return a[b]},
a9(a,b){return a[b]},
af(a,b,c){a[b]=c},
bk(a,b){delete a[b]},
ac(){var s="<non-identifier-key>",r=Object.create(null)
this.af(r,s,r)
this.bk(r,s)
return r},
$iiZ:1}
A.fO.prototype={
$1(a){var s=this.a,r=A.W(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.W(this.a).j("2(1)")}}
A.fQ.prototype={}
A.c4.prototype={
gk(a){return this.a.a},
gA(a){var s=this.a,r=new A.c5(s,s.r,this.$ti.j("c5<1>"))
r.c=s.e
return r}}
A.c5.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.dd(q))
s=r.c
if(s==null){r.sau(null)
return!1}else{r.sau(s.a)
r.c=s.c
return!0}},
sau(a){this.d=this.$ti.j("1?").a(a)},
$iR:1}
A.hW.prototype={
$1(a){return this.a(a)},
$S:8}
A.hX.prototype={
$2(a,b){return this.a(a,b)},
$S:9}
A.hY.prototype={
$1(a){return this.a(A.a5(a))},
$S:10}
A.be.prototype={$iag:1}
A.bu.prototype={
gk(a){return a.length},
$it:1}
A.bd.prototype={
h(a,b){A.aL(b,a,a.length)
return a[b]},
i(a,b,c){A.kX(c)
A.aL(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$ip:1}
A.cb.prototype={
i(a,b,c){A.cQ(c)
A.aL(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$ip:1}
A.ca.prototype={$iih:1}
A.dA.prototype={
h(a,b){A.aL(b,a,a.length)
return a[b]}}
A.dB.prototype={
h(a,b){A.aL(b,a,a.length)
return a[b]}}
A.dC.prototype={
h(a,b){A.aL(b,a,a.length)
return a[b]}}
A.dD.prototype={
h(a,b){A.aL(b,a,a.length)
return a[b]}}
A.dE.prototype={
h(a,b){A.aL(b,a,a.length)
return a[b]}}
A.cc.prototype={
gk(a){return a.length},
h(a,b){A.aL(b,a,a.length)
return a[b]}}
A.dF.prototype={
gk(a){return a.length},
h(a,b){A.aL(b,a,a.length)
return a[b]},
$ikB:1}
A.cB.prototype={}
A.cC.prototype={}
A.cD.prototype={}
A.cE.prototype={}
A.aq.prototype={
j(a){return A.hN(v.typeUniverse,this,a)},
C(a){return A.kU(v.typeUniverse,this,a)}}
A.eq.prototype={}
A.f_.prototype={
l(a){return A.X(this.a,null)}}
A.em.prototype={
l(a){return this.a}}
A.cL.prototype={$iaU:1}
A.hv.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:11}
A.hu.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.hw.prototype={
$0(){this.a.$0()},
$S:4}
A.hx.prototype={
$0(){this.a.$0()},
$S:4}
A.hL.prototype={
bb(a,b){if(self.setTimeout!=null)self.setTimeout(A.cU(new A.hM(this,b),0),a)
else throw A.d(A.w("`setTimeout()` not found."))}}
A.hM.prototype={
$0(){this.b.$0()},
$S:0}
A.bQ.prototype={
l(a){return A.x(this.a)},
$iz:1,
gW(){return this.b}}
A.ef.prototype={}
A.ct.prototype={}
A.cw.prototype={
bX(a){if((this.c&15)!==6)return!0
return this.b.b.ao(t.al.a(this.d),a.a,t.x,t.K)},
bQ(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.c2(q,m,a.b,o,n,t.l)
else p=l.ao(t.y.a(q),m,o,n)
try{o=r.$ti.j("2/").a(p)
return o}catch(s){if(t.eK.b(A.cY(s))){if((r.c&1)!==0)throw A.d(A.d2("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.d2("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ah.prototype={
c7(a,b,c){var s,r,q,p=this.$ti
p.C(c).j("1/(2)").a(a)
s=$.H
if(s===B.n){if(b!=null&&!t.C.b(b)&&!t.y.b(b))throw A.d(A.iR(b,"onError",u.c))}else{c.j("@<0/>").C(p.c).j("1(2)").a(a)
if(b!=null)b=A.lj(b,s)}r=new A.ah(s,c.j("ah<0>"))
q=b==null?1:3
this.aw(new A.cw(r,q,a,b,p.j("@<1>").C(c).j("cw<1,2>")))
return r},
aW(a,b){return this.c7(a,null,b)},
a5(a){this.a=a.a&30|this.a&1
this.c=a.c},
aw(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.aw(a)
return}r.a5(s)}A.iH(null,null,r.b,t.M.a(new A.hB(r,a)))}},
aG(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.aG(a)
return}m.a5(n)}l.a=m.X(a)
A.iH(null,null,m.b,t.M.a(new A.hD(l,m)))}},
ae(){var s=t.F.a(this.c)
this.c=null
return this.X(s)},
X(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bh(a){var s,r=this
r.$ti.c.a(a)
s=r.ae()
r.a=8
r.c=a
A.cx(r,s)},
be(a){var s=this.$ti
s.j("1/").a(a)
this.bf(s.c.a(a))},
bf(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.iH(null,null,s.b,t.M.a(new A.hC(s,a)))},
$ibZ:1}
A.hB.prototype={
$0(){A.cx(this.a,this.b)},
$S:0}
A.hD.prototype={
$0(){A.cx(this.b,this.a.a)},
$S:0}
A.hC.prototype={
$0(){this.a.bh(this.b)},
$S:0}
A.hG.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.c1(t.fO.a(q.d),t.z)}catch(p){s=A.cY(p)
r=A.cV(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.ic(s,r)
o.b=!0
return}if(l instanceof A.ah&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.aW(new A.hH(n),t.z)
q.b=!1}},
$S:0}
A.hH.prototype={
$1(a){return this.a},
$S:13}
A.hF.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.ao(o.j("2/(1)").a(p.d),m,o.j("2/"),n)}catch(l){s=A.cY(l)
r=A.cV(l)
q=this.a
q.c=A.ic(s,r)
q.b=!0}},
$S:0}
A.hE.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.bX(s)&&p.a.e!=null){p.c=p.a.bQ(s)
p.b=!1}}catch(o){r=A.cY(o)
q=A.cV(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.ic(r,q)
n.b=!0}},
$S:0}
A.ec.prototype={}
A.cn.prototype={
gk(a){var s,r,q=this,p={},o=new A.ah($.H,t.fJ)
p.a=0
s=A.W(q)
r=s.j("~(1)?").a(new A.hh(p,q))
t.Z.a(new A.hi(p,o))
A.iv(q.a,q.b,r,!1,s.c)
return o}}
A.hh.prototype={
$1(a){A.W(this.b).c.a(a);++this.a.a},
$S(){return A.W(this.b).j("~(1)")}}
A.hi.prototype={
$0(){var s=this.b,r=s.$ti,q=r.j("1/").a(this.a.a),p=s.ae()
r.c.a(q)
s.a=8
s.c=q
A.cx(s,p)},
$S:0}
A.dX.prototype={}
A.cO.prototype={$ij8:1}
A.hR.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.l(0)
throw s},
$S:0}
A.eI.prototype={
c3(a){var s,r,q,p,o
t.M.a(a)
try{if(B.n===$.H){a.$0()
return}A.jq(null,null,this,a,t.aT)}catch(q){s=A.cY(q)
r=A.cV(q)
p=t.K.a(s)
o=t.l.a(r)
A.hQ(p,o)}},
c4(a,b,c){var s,r,q,p,o
c.j("~(0)").a(a)
c.a(b)
try{if(B.n===$.H){a.$1(b)
return}A.jr(null,null,this,a,b,t.aT,c)}catch(q){s=A.cY(q)
r=A.cV(q)
p=t.K.a(s)
o=t.l.a(r)
A.hQ(p,o)}},
bI(a){return new A.hJ(this,t.M.a(a))},
bJ(a,b){return new A.hK(this,b.j("~(0)").a(a),b)},
h(a,b){return null},
c1(a,b){b.j("0()").a(a)
if($.H===B.n)return a.$0()
return A.jq(null,null,this,a,b)},
ao(a,b,c,d){c.j("@<0>").C(d).j("1(2)").a(a)
d.a(b)
if($.H===B.n)return a.$1(b)
return A.jr(null,null,this,a,b,c,d)},
c2(a,b,c,d,e,f){d.j("@<0>").C(e).C(f).j("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.H===B.n)return a.$2(b,c)
return A.lk(null,null,this,a,b,c,d,e,f)}}
A.hJ.prototype={
$0(){return this.a.c3(this.b)},
$S:0}
A.hK.prototype={
$1(a){var s=this.c
return this.a.c4(this.b,s.a(a),s)},
$S(){return this.c.j("~(0)")}}
A.cy.prototype={
gA(a){var s=this,r=new A.cz(s,s.r,s.$ti.j("cz<1>"))
r.c=s.e
return r},
gk(a){return this.a},
H(a,b){var s=this.bi(b)
return s},
bi(a){var s=this.d
if(s==null)return!1
return this.aB(s[a.gu(a)&1073741823],a)>=0},
m(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ay(s==null?q.b=A.iw():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ay(r==null?q.c=A.iw():r,b)}else return q.bg(0,b)},
bg(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.iw()
r=J.bJ(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.a6(b)]
else{if(p.aB(q,b)>=0)return!1
q.push(p.a6(b))}return!0},
ay(a,b){this.$ti.c.a(b)
if(t.hg.a(a[b])!=null)return!1
a[b]=this.a6(b)
return!0},
a6(a){var s=this,r=new A.ex(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
aB(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.P(a[r].a,b))return r
return-1}}
A.ex.prototype={}
A.cz.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.dd(q))
else if(r==null){s.saz(null)
return!1}else{s.saz(s.$ti.j("1?").a(r.a))
s.c=r.b
return!0}},
saz(a){this.d=this.$ti.j("1?").a(a)},
$iR:1}
A.f.prototype={
gA(a){return new A.aG(a,this.gk(a),A.aw(a).j("aG<f.E>"))},
q(a,b){return this.h(a,b)},
bP(a,b,c,d){var s,r=A.aw(a)
d=r.j("f.E").a(r.j("f.E?").a(d))
A.it(b,c,this.gk(a))
for(s=b;s<c;++s)this.i(a,s,d)},
l(a){return A.ii(a,"[","]")}}
A.c7.prototype={}
A.fS.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.x(a)
r.a=s+": "
r.a+=A.x(b)},
$S:14}
A.v.prototype={
w(a,b){var s,r,q=A.aw(a)
q.j("~(v.K,v.V)").a(b)
for(s=J.aA(this.gI(a)),q=q.j("v.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gbO(a){return J.k6(this.gI(a),new A.fV(a),A.aw(a).j("bt<v.K,v.V>"))},
gk(a){return J.Z(this.gI(a))},
l(a){return A.io(a)},
$iC:1}
A.fV.prototype={
$1(a){var s,r=this.a,q=A.aw(r)
q.j("v.K").a(a)
s=q.j("v.V")
return new A.bt(a,s.a(J.iP(r,a)),q.j("@<v.K>").C(s).j("bt<1,2>"))},
$S(){return A.aw(this.a).j("bt<v.K,v.V>(v.K)")}}
A.ck.prototype={
l(a){return A.ii(this,"{","}")}}
A.cF.prototype={$il:1,$ih:1,$ij3:1}
A.cP.prototype={}
A.hy.prototype={}
A.z.prototype={
gW(){return A.cV(this.$thrownJsError)}}
A.bP.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.dh(s)
return"Assertion failed"}}
A.aU.prototype={}
A.dG.prototype={
l(a){return"Throw of null."}}
A.aB.prototype={
ga8(){return"Invalid argument"+(!this.a?"(s)":"")},
ga7(){return""},
l(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.ga8()+o+m
if(!q.a)return l
s=q.ga7()
r=A.dh(q.b)
return l+s+": "+r}}
A.bv.prototype={
ga8(){return"RangeError"},
ga7(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.x(q):""
else if(q==null)s=": Not greater than or equal to "+A.x(r)
else if(q>r)s=": Not in inclusive range "+A.x(r)+".."+A.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.x(r)
return s}}
A.dq.prototype={
ga8(){return"RangeError"},
ga7(){if(A.cQ(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.e7.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.e5.prototype={
l(a){var s="UnimplementedError: "+this.a
return s}}
A.cm.prototype={
l(a){return"Bad state: "+this.a}}
A.dc.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.dh(s)+"."}}
A.dJ.prototype={
l(a){return"Out of Memory"},
gW(){return null},
$iz:1}
A.cl.prototype={
l(a){return"Stack Overflow"},
gW(){return null},
$iz:1}
A.df.prototype={
l(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.hA.prototype={
l(a){return"Exception: "+this.a}}
A.h.prototype={
aS(a,b,c){var s=A.W(this)
return A.j_(this,s.C(c).j("1(h.E)").a(b),s.j("h.E"),c)},
w(a,b){var s
A.W(this).j("~(h.E)").a(b)
for(s=this.gA(this);s.n();)b.$1(s.gp(s))},
gk(a){var s,r=this.gA(this)
for(s=0;r.n();)++s
return s},
q(a,b){var s,r,q
A.h6(b,"index")
for(s=this.gA(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.d(A.D(b,this,"index",null,r))},
l(a){return A.iW(this,"(",")")}}
A.R.prototype={}
A.bt.prototype={
l(a){return"MapEntry("+A.x(this.a)+": "+A.x(this.b)+")"}}
A.S.prototype={
gu(a){return A.A.prototype.gu.call(this,this)},
l(a){return"null"}}
A.A.prototype={$iA:1,
D(a,b){return this===b},
gu(a){return A.cg(this)},
l(a){return"Instance of '"+A.h4(this)+"'"},
toString(){return this.l(this)}}
A.eS.prototype={
l(a){return""},
$idU:1}
A.dY.prototype={
gk(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.n.prototype={}
A.fe.prototype={
gk(a){return a.length}}
A.d0.prototype={
l(a){return String(a)}}
A.d1.prototype={
l(a){return String(a)}}
A.d5.prototype={}
A.d6.prototype={
gam(a){return new A.bi(a,"load",!1,t.E)}}
A.aZ.prototype={
sL(a,b){a.height=b},
sM(a,b){a.width=b},
b3(a,b){return a.getContext(b)},
$iaZ:1}
A.ax.prototype={
gk(a){return a.length}}
A.fq.prototype={
gk(a){return a.length}}
A.y.prototype={$iy:1}
A.bU.prototype={
gk(a){return a.length}}
A.fr.prototype={}
A.an.prototype={}
A.aD.prototype={}
A.fs.prototype={
gk(a){return a.length}}
A.ft.prototype={
gk(a){return a.length}}
A.fu.prototype={
gk(a){return a.length},
h(a,b){return a[b]}}
A.fv.prototype={
l(a){return String(a)}}
A.bV.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.I.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.bW.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.x(r)+", "
s=a.top
s.toString
return r+A.x(s)+") "+A.x(this.gM(a))+" x "+A.x(this.gL(a))},
D(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=J.hU(b)
s=this.gM(a)===s.gM(b)&&this.gL(a)===s.gL(b)}else s=!1}else s=!1}else s=!1
return s},
gu(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.ir(r,s,this.gM(a),this.gL(a))},
gaD(a){return a.height},
gL(a){var s=this.gaD(a)
s.toString
return s},
gaJ(a){return a.width},
gM(a){var s=this.gaJ(a)
s.toString
return s},
$iaz:1}
A.dg.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){A.a5(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.fw.prototype={
gk(a){return a.length}}
A.N.prototype={
l(a){return a.localName},
gam(a){return new A.bi(a,"load",!1,t.E)},
$iN:1}
A.i.prototype={$ii:1}
A.c.prototype={
bG(a,b,c,d){t.bw.a(c)
if(c!=null)this.bd(a,b,c,!1)},
bd(a,b,c,d){return a.addEventListener(b,A.cU(t.bw.a(c),1),!1)},
$ic:1}
A.a8.prototype={$ia8:1}
A.di.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.c8.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.dj.prototype={
gk(a){return a.length}}
A.dl.prototype={
gk(a){return a.length}}
A.a9.prototype={$ia9:1}
A.fF.prototype={
gk(a){return a.length}}
A.b5.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.A.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.bp.prototype={$ibp:1}
A.aF.prototype={$iaF:1}
A.fR.prototype={
l(a){return String(a)}}
A.bc.prototype={}
A.fX.prototype={
gk(a){return a.length}}
A.dx.prototype={
h(a,b){return A.aN(a.get(A.a5(b)))},
w(a,b){var s,r
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.aN(r.value[1]))}},
gI(a){var s=A.e([],t.s)
this.w(a,new A.fZ(s))
return s},
gk(a){return a.size},
$iC:1}
A.fZ.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.dy.prototype={
h(a,b){return A.aN(a.get(A.a5(b)))},
w(a,b){var s,r
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.aN(r.value[1]))}},
gI(a){var s=A.e([],t.s)
this.w(a,new A.h_(s))
return s},
gk(a){return a.size},
$iC:1}
A.h_.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.aa.prototype={$iaa:1}
A.dz.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.cI.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.q.prototype={
l(a){var s=a.nodeValue
return s==null?this.b7(a):s},
$iq:1}
A.cd.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.A.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.ab.prototype={
gk(a){return a.length},
$iab:1}
A.dL.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.he.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.dN.prototype={
h(a,b){return A.aN(a.get(A.a5(b)))},
w(a,b){var s,r
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.aN(r.value[1]))}},
gI(a){var s=A.e([],t.s)
this.w(a,new A.hb(s))
return s},
gk(a){return a.size},
$iC:1}
A.hb.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.dP.prototype={
gk(a){return a.length}}
A.a2.prototype={$ia2:1}
A.dR.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.fY.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.ad.prototype={$iad:1}
A.dS.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.f7.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.ae.prototype={
gk(a){return a.length},
$iae:1}
A.dW.prototype={
h(a,b){return a.getItem(A.a5(b))},
w(a,b){var s,r,q
t.eA.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gI(a){var s=A.e([],t.s)
this.w(a,new A.hg(s))
return s},
gk(a){return a.length},
$iC:1}
A.hg.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:15}
A.T.prototype={$iT:1}
A.a3.prototype={$ia3:1}
A.Q.prototype={$iQ:1}
A.e0.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.c7.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.e1.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.a0.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.hn.prototype={
gk(a){return a.length}}
A.af.prototype={$iaf:1}
A.e2.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.aK.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.ho.prototype={
gk(a){return a.length}}
A.a4.prototype={}
A.hr.prototype={
l(a){return String(a)}}
A.bA.prototype={$ibA:1}
A.e9.prototype={
gk(a){return a.length}}
A.bC.prototype={
aV(a,b){var s
t.c4.a(b)
this.bn(a)
s=A.jt(b,t.di)
s.toString
return this.br(a,s)},
br(a,b){return a.requestAnimationFrame(A.cU(t.c4.a(b),1))},
bn(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.eg.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.g5.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.cu.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.x(r)+", "
s=a.top
s.toString
s=r+A.x(s)+") "
r=a.width
r.toString
r=s+A.x(r)+" x "
s=a.height
s.toString
return r+A.x(s)},
D(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=J.hU(b)
if(s===r.gM(b)){s=a.height
s.toString
r=s===r.gL(b)
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
return A.ir(p,s,r,q)},
gaD(a){return a.height},
gL(a){var s=a.height
s.toString
return s},
gaJ(a){return a.width},
gM(a){var s=a.width
s.toString
return s}}
A.er.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.g7.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.cA.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.A.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.eM.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.gf.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.eT.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a[b]},
i(a,b,c){t.cO.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$il:1,
$it:1,
$ih:1,
$ip:1}
A.ie.prototype={}
A.cv.prototype={}
A.bi.prototype={}
A.en.prototype={}
A.hz.prototype={
$1(a){return this.a.$1(t.J.a(a))},
$S:5}
A.o.prototype={
gA(a){return new A.bY(a,this.gk(a),A.aw(a).j("bY<o.E>"))}}
A.bY.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.saE(J.iP(s.a,r))
s.c=r
return!0}s.saE(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
saE(a){this.d=this.$ti.j("1?").a(a)},
$iR:1}
A.eh.prototype={}
A.ei.prototype={}
A.ej.prototype={}
A.ek.prototype={}
A.el.prototype={}
A.eo.prototype={}
A.ep.prototype={}
A.es.prototype={}
A.et.prototype={}
A.ey.prototype={}
A.ez.prototype={}
A.eA.prototype={}
A.eB.prototype={}
A.eC.prototype={}
A.eD.prototype={}
A.eG.prototype={}
A.eH.prototype={}
A.eJ.prototype={}
A.cG.prototype={}
A.cH.prototype={}
A.eK.prototype={}
A.eL.prototype={}
A.eP.prototype={}
A.eU.prototype={}
A.eV.prototype={}
A.cJ.prototype={}
A.cK.prototype={}
A.eW.prototype={}
A.eX.prototype={}
A.f3.prototype={}
A.f4.prototype={}
A.f5.prototype={}
A.f6.prototype={}
A.f7.prototype={}
A.f8.prototype={}
A.f9.prototype={}
A.fa.prototype={}
A.fb.prototype={}
A.fc.prototype={}
A.eu.prototype={
B(a){if(a<=0||a>4294967296)throw A.d(A.ku("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
U(){return Math.random()},
$ikt:1}
A.aj.prototype={$iaj:1}
A.dv.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a.getItem(b)},
i(a,b,c){t.bG.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$ip:1}
A.ak.prototype={$iak:1}
A.dH.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a.getItem(b)},
i(a,b,c){t.ck.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$ip:1}
A.h3.prototype={
gk(a){return a.length}}
A.dZ.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a.getItem(b)},
i(a,b,c){A.a5(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$ip:1}
A.k.prototype={
gam(a){return new A.bi(a,"load",!1,t.E)}}
A.al.prototype={$ial:1}
A.e3.prototype={
gk(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
return a.getItem(b)},
i(a,b,c){t.cM.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$ip:1}
A.ev.prototype={}
A.ew.prototype={}
A.eE.prototype={}
A.eF.prototype={}
A.eQ.prototype={}
A.eR.prototype={}
A.eY.prototype={}
A.eZ.prototype={}
A.fh.prototype={
gk(a){return a.length}}
A.d3.prototype={
h(a,b){return A.aN(a.get(A.a5(b)))},
w(a,b){var s,r
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.aN(r.value[1]))}},
gI(a){var s=A.e([],t.s)
this.w(a,new A.fi(s))
return s},
gk(a){return a.size},
$iC:1}
A.fi.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.d4.prototype={
gk(a){return a.length}}
A.aP.prototype={}
A.dI.prototype={
gk(a){return a.length}}
A.ee.prototype={}
A.d7.prototype={$id7:1}
A.dm.prototype={$idm:1}
A.dM.prototype={$idM:1}
A.bw.prototype={
aN(a,b){return a.bindVertexArray(b)},
aM(a,b,c){return a.bindBuffer(b,c)},
Z(a,b,c){return a.bindFramebuffer(b,c)},
F(a,b,c){return a.bindTexture(b,c)},
bN(a,b){return a.deleteTexture(b)},
aR(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
a2(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.iF(g)){s.bx(a,b,c,d,e,f,g,h,i,j)
return}if(t.fS.b(g)&&h==null&&r&&j==null){s.by(a,b,c,d,e,f,g)
return}if(t.b.b(g)&&h==null&&r&&j==null){s.bz(a,b,c,d,e,f,g)
return}if(t.dz.b(g)&&h==null&&r&&j==null){s.bA(a,b,c,d,e,f,g)
return}throw A.d(A.d2("Incorrect number or type of arguments",null))},
c6(a,b,c,d,e,f,g){return this.a2(a,b,c,d,e,f,g,null,null,null)},
bx(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
by(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bz(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bA(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ca(a,b,c){return a.uniform1f(b,c)},
cb(a,b,c){return a.uniform1i(b,c)},
cc(a,b,c,d){return a.uniform2f(b,c,d)},
cd(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ce(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
cg(a,b){return a.useProgram(b)},
$ibw:1}
A.aI.prototype={$iaI:1}
A.e4.prototype={$ie4:1}
A.e8.prototype={$ie8:1}
A.dT.prototype={
gk(a){return a.length},
h(a,b){var s
if(b>>>0!==b||b>=a.length)throw A.d(A.D(b,a,null,null,null))
s=A.aN(a.item(b))
s.toString
return s},
i(a,b,c){t.eO.a(c)
throw A.d(A.w("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$ip:1}
A.eN.prototype={}
A.eO.prototype={}
A.dp.prototype={
gk(a){return this.c},
bB(){var s,r,q=this.$ti,p=A.e([],q.j("u<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
l(a){var s=this.b
return A.iW(A.j5(s,0,A.jw(this.c,"count",t.S),A.aK(s).c),"(",")")},
bc(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.aH(q,null,!1,n.j("1?"))
B.a.ar(p,0,o.c,o.b)
o.saH(p)}o.ax(b,o.c++)},
ax(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.f.Y(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.E()
if(q>0)break
B.a.i(o.b,b,p)}B.a.i(o.b,b,a)},
saH(a){this.b=this.$ti.j("p<1?>").a(a)}}
A.h7.prototype={
ba(a,b,c){var s,r,q=this,p=q.b
A.lM(p,"CursesTransparent_24x36.png").aW(new A.h9(q),t.P)
s=window
r=t.eN.a(new A.ha(q))
t.Z.a(null)
A.iv(s,"keydown",r,!1,t.m)
q.Q=p.createFramebuffer()},
gaQ(){var s,r=this,q=r.r
if(q===$){s=A.l0()
s=A.c0(A.e([new A.a7("a_position",35044,5126,2,s),new A.a7("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.l,A.e([new A.G("u_resolution",B.m)],t.o),u.j)
A.jp(r.r,"fovRenderer")
q=r.r=new A.fA(r.a.a,s,new A.m(-1,-1))}return q},
ga0(){var s,r,q,p=this,o="#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",n="a_position",m="u_resolution",l="u_block_size",k="u_player_visible_texture",j=p.x
if(j===$){s=t.G
r=t.o
q=A.c0(A.e([new A.a7(n,35044,5126,2,new Float32Array(A.iB(B.am)))],s),"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\n\nout vec4 outColor;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    vec2 snapped_position = vec2(snapTo(gl_FragCoord.x + 0.0, u_block_size.x), snapTo(u_resolution.y - gl_FragCoord.y + 0.0, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n    float visible_distance = sin(u_time * 2.0) + u_source_strength;\n    float dist = distance(vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y + 0.0), u_source_position * u_block_size) / 50.0;\n    if (dist > visible_distance) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, visible_distance, dist);\n    outColor = vec4(u_source_color.rgb * scale, scale / 2.0);\n}\n",A.e([new A.G(m,B.m),new A.G("u_source_position",B.m),new A.G(l,B.m),new A.G("u_source_color",B.aB),new A.G("u_source_strength",B.a0),new A.G("u_time",B.a0),new A.G("u_visible_texture",B.o),new A.G(k,B.o)],r),o)
r=A.c0(A.e([new A.a7(n,35044,5126,2,new Float32Array(A.iB(B.am)))],s),"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n  vec2 d = vec2(gl_FragCoord.x + 0.0, gl_FragCoord.y + 0.0) / u_resolution;\n  vec4 front = texture(u_light_texture, d);\n  vec4 back = texture(u_game_world_texture, d);\n\n  vec2 snapped_position = vec2(snapTo(gl_FragCoord.x + 0.0, u_block_size.x), snapTo(u_resolution.y - gl_FragCoord.y + 0.0, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",A.e([new A.G("u_light_texture",B.o),new A.G("u_game_world_texture",B.o),new A.G(k,B.o),new A.G(m,B.m),new A.G(l,B.m)],r),o)
s=A.e([],t.dh)
A.jp(p.x,"lightingRenderer")
j=p.x=new A.fP(q,r,p.a.a,A.b9(t.j,t.p),s)}return j}}
A.h9.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="sprites"
t.p.a(a)
s=this.a
s.y=!0
r=A.e([new A.G("u_texture",B.o),new A.G("u_resolution",B.m)],t.o)
q=new Float32Array(12e3)
p=new Float32Array(12e3)
r=A.c0(A.e([new A.a7("a_position",35048,5126,2,q),new A.a7("a_texcoord",35048,5126,2,p),new A.a7("a_color",35048,5126,4,new Float32Array(24e3))],t.G),"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n}\n",r,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\n\nout vec2 v_texcoord;\nout vec4 v_color;\n\nvoid main() {\n  vec2 zeroToOne = a_position / u_resolution;\n  vec2 zeroToTwo = zeroToOne * 2.0;\n  vec2 clipSpace = zeroToTwo - 1.0;\n  gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n}\n")
q=A.aH(7,null,!1,t.gM)
p=s.b
r.P(p)
A.lh(s.d,e)
s.d=new A.he(r,a,new A.dp(A.lT(),q,t.ep))
q=s.e
q.a.P(p)
r=s.f
r.a.P(p)
s.gaQ().b.P(p)
o=s.ga0()
o.e=p.createFramebuffer()
o.a.P(p)
o.b.P(p)
p=s.a
o=p.e
n=A.lD(o)
m=p.b.c
m.sah(0,n.a*24)
m.sai(0,n.b*36)
p.a.d=n
p=A.bj(s.d,e)
m.r=1
l=m.a
if(l!=null)l.d=!0
p.m(0,m)
for(p=o.b.c,m=p.length,k=0;k<p.length;p.length===m||(0,A.F)(p),++k){j=p[k]
n=j.b
l=n.a
i=n.b
h=A.kk(j.f,l*24,i*36)
if(h!=null){g=h.a=A.bj(s.d,e)
f=g.c
f.$ti.c.a(h);++f.d
f.bc(0,h)
g.d=!0}g=j.f
if(g===B.u||g===B.r)B.a.m(s.ga0().x,new A.dw(new A.b1(4294278144),l,i))}q.b=o
q.c=!0
r.c=o
r.b=!0},
$S:16}
A.ha.prototype={
$1(a){var s,r,q=this
t.m.a(a)
s=a.key
if(s==="ArrowUp"){a.preventDefault()
s=q.a.a
r=s.b.c
r.sai(0,r.e-36)
s=s.a
s.d=s.d.t(0,new A.m(0,-1))}else if(s==="ArrowDown"){a.preventDefault()
s=q.a.a
r=s.b.c
r.sai(0,r.e+36)
s=s.a
s.d=s.d.t(0,new A.m(0,1))}else if(s==="ArrowLeft"){a.preventDefault()
s=q.a.a
r=s.b.c
r.sah(0,r.d-24)
s=s.a
s.d=s.d.t(0,new A.m(-1,0))}else if(s==="ArrowRight"){a.preventDefault()
s=q.a.a
r=s.b.c
r.sah(0,r.d+24)
s=s.a
s.d=s.d.t(0,new A.m(1,0))}q.a.a.a.cf()},
$S:17}
A.i_.prototype={
$1(a){var s,r=this,q=3553,p=r.a,o=r.b
B.c.F(p,q,o)
B.c.c6(p,q,0,6408,6408,5121,r.c)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p=r.d
s=p.$ti
s.j("1/?").a(o)
p=p.a
if((p.a&30)!==0)A.a6(A.by("Future already completed"))
p.be(s.j("1/").a(o))},
$S:5}
A.b1.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.b1&&b.a===this.a},
gu(a){return B.f.gu(this.a)},
l(a){return"Color(0x"+B.K.bZ(B.f.c8(this.a,16),8,"0")+")"}}
A.K.prototype={
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.f.V(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.d(A.by(b.l(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
i(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.f.V(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.d(A.ig(b.l(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.i(q,r,c)},
N(a,b,c){var s=B.f.V(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
v(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.f.V(d*s+c)
q=p.c
if(r>=q.length)throw A.d(A.ig("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.i(q,r,b)},
l(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.f.V(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.x(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.b6.prototype={
l(a){return"ItemType."+this.b}}
A.bq.prototype={}
A.M.prototype={}
A.dn.prototype={
l(a){return"HandRequirement."+this.b}}
A.aR.prototype={
l(a){return"DamageType."+this.b}}
A.b3.prototype={
l(a){return"DiceType."+this.b}}
A.as.prototype={
l(a){return"WeaponProperties."+this.b}}
A.fY.prototype={}
A.aQ.prototype={}
A.b2.prototype={
l(a){return"CriticalEffect."+this.b}}
A.O.prototype={}
A.bL.prototype={
l(a){return"AmmoType."+this.b}}
A.bM.prototype={}
A.ac.prototype={}
A.bn.prototype={
l(a){return"ArmorUpgradeType."+this.b}}
A.a_.prototype={}
A.bz.prototype={
l(a){return"TileType."+this.b}}
A.fT.prototype={}
A.bf.prototype={
l(a){return"TerrainType."+this.b}}
A.U.prototype={
l(a){return"TerrainWidget."+this.b}}
A.ba.prototype={
l(a){return"LockState."+this.b}}
A.aY.prototype={
l(a){return"Biome."+this.b}}
A.bg.prototype={
sc5(a){t.U.a(a)}}
A.m.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.m&&b.a===this.a&&b.b===this.b},
gu(a){return A.ir(this.a,this.b,B.x,B.x)},
t(a,b){return new A.m(this.a+b.a,this.b+b.b)},
l(a){return"("+this.a+", "+this.b+")"}}
A.L.prototype={
l(a){return"Interactable."+this.b}}
A.fU.prototype={}
A.ff.prototype={}
A.fx.prototype={
bC(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.a,i=j.O(k,t.H),h=this.c
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.b.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.b||A.aM(A.fG(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.d=r
j.S(b,k,i)}}
A.fB.prototype={
a3(a){var s,r,q,p,o,n=(a.b*100+a.a)*4000
if(n<0||n>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.it(n,n+4000,B.f.b9(s.byteLength,r))
p=s.buffer
s=s.byteOffset+n*r
o=(q-n)*r
A.jj(p,s,o)
s=new Uint8Array(p,s,o)
return new A.hs(100,s,this.c)},
cf(){var s,r,q,p,o=this.a3(this.d).c
for(s=this.c,r=o.length,q=0;q<4000;++q){p=s[q]
if(!(q<r))return A.b(o,q)
s[q]=p|o[q]}},
bS(){var s,r
for(s=0;s<100;++s)for(r=0;r<40;++r)this.bp(new A.m(s,r))},
bW(a){var s,r,q,p,o
t.L.a(a)
for(s=this.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.N(0,r,q)
o=o.c===B.b||A.aM(A.kj(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}return},
bp(a){var s,r,q,p=this.a3(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=1
for(q=0;q<4;++q)this.bt(new A.bx(1,-1,1),new A.h5(B.b7[q],a),o)},
bs(a,b){if(a<0||a>=b.byteLength)return
if(!(a>=0&&a<b.length))return A.b(b,a)
b[a]=1},
aF(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
ab(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===0},
bt(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
B.a.sk(e,0)
B.a.m(e,a)
for(;s=e.length,s!==0;){if(0>=s)return A.b(e,-1)
r=e.pop()
s=r.a
q=B.e.a_(s*r.b+0.5)
p=B.e.bK(s*r.c-0.5)
for(o=s+1,n=2*s,m=q,l=null;m<=p;++m,l=j){k=b.c9(0,new A.m(s,m))
j=k.b*100+k.a
i=f.aF(j,c)
if(!i)h=m>=s*r.b&&m<=s*r.c
else h=!0
if(h)f.bs(j,c)
h=l!=null
if(h&&f.aF(l,c)&&f.ab(j,c))r.b=(2*m-1)/n
if(h&&f.ab(l,c)&&i){g=new A.bx(o,r.b,r.c)
g.c=(2*m-1)/n
B.a.m(e,g)}}if(l!=null&&f.ab(l,c))B.a.m(e,new A.bx(o,r.b,r.c))}}}
A.hs.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]===1}}
A.b_.prototype={
l(a){return"Cardinal."+this.b}}
A.h5.prototype={
c9(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a){case B.ab:s=r.b
return new A.m(s.a+p,s.b-q)
case B.ac:s=r.b
return new A.m(s.a+p,s.b+q)
case B.ad:s=r.b
return new A.m(s.a+q,s.b+p)
case B.ae:s=r.b
return new A.m(s.a-q,s.b+p)}}}
A.bx.prototype={}
A.dw.prototype={}
A.fP.prototype={
bj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=3553,f=b.createTexture()
B.c.F(b,g,f)
s=new Uint8Array(16e3)
r=this.c.a3(a)
for(q=r.c,p=r.a,o=q.length,n=0;n<40;++n)for(m=n*100,l=n*p,k=0;k<100;++k){j=(m+k)*4
i=l+k
if(!(i<o))return A.b(q,i)
h=q[i]===1?0:255
if(!(j<16e3))return A.b(s,j)
s[j]=0
i=j+1
if(!(i<16e3))return A.b(s,i)
s[i]=0
i=j+2
if(!(i<16e3))return A.b(s,i)
s[i]=0
i=j+3
if(!(i<16e3))return A.b(s,i)
s[i]=h}B.c.a2(b,g,0,6408,100,40,0,6408,5121,s)
b.texParameteri(g,10241,9728)
b.texParameteri(g,10242,33071)
b.texParameteri(g,10243,33071)
return f},
aC(a,b){var s=this.d,r=s.h(0,a)
if(r==null){r=this.bj(a,b)
s.i(0,a,r)
s=r}else s=r
return s},
an(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=3553,c="u_player_visible_texture"
if(b!==e.y||a0!==e.z){e.y=b
e.z=a0
s=a.createTexture()
e.f=s
B.c.F(a,d,s)
B.c.a2(a,d,0,6408,b,a0,0,6408,5121,null)
a.texParameteri(d,10241,9729)
a.texParameteri(d,10242,33071)
a.texParameteri(d,10243,33071)}B.c.Z(a,36160,e.e)
B.c.aR(a,36160,36064,d,e.f,0)
r=e.aC(e.c.d,a)
a.activeTexture(33985)
B.c.F(a,d,r)
for(s=e.x,q=s.length,p=e.a,o=t.t,n=t.v,m=t.N,l=t.z,k=0;k<s.length;s.length===q||(0,A.F)(s),++k){j=s[k]
i=j.c
h=j.d
g=e.aC(new A.m(i,h),a)
a.activeTexture(33984)
B.c.F(a,d,g)
f=j.b.a
p.R(a,4,3,A.c6(["u_resolution",A.e([b,a0],o),"u_source_strength",7,"u_block_size",B.aj,"u_source_position",A.e([i,h],o),"u_source_color",A.e([(f>>>16&255)/255,(f>>>8&255)/255,(f&255)/255,0.2],n),"u_time",0,c,1,"u_visible_texture",0],m,l))}a.viewport(0,0,b,a0)
B.c.Z(a,36160,null)
a.activeTexture(33984)
B.c.F(a,d,e.f)
a.activeTexture(33985)
B.c.F(a,d,e.r)
a.activeTexture(33986)
B.c.F(a,d,r)
e.b.R(a,4,3,A.c6(["u_light_texture",0,"u_game_world_texture",1,c,2,"u_block_size",B.aj,"u_resolution",A.e([b,a0],o)],m,l))}}
A.ao.prototype={
l(a){return"Directions."+this.b}}
A.a7.prototype={}
A.G.prototype={}
A.bh.prototype={
l(a){return"UniformKind."+this.b}}
A.ed.prototype={}
A.f0.prototype={}
A.fE.prototype={
P(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.jl(a,i.a,35633),f=A.jl(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.P(a.getProgramParameter(e,35714),!0)){A.jD(J.bm(a.getProgramInfoLog(e)))
A.a6(A.by("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.c.aN(a,A.bj(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.F)(s),++p){o=s[p]
n=o.a
q.i(0,n,new A.f0(a.getUniformLocation(A.bj(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.F)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.bj(i.e,h),n)
k=a.createBuffer()
B.c.aM(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.i(0,n,new A.ed(k,j))}},
O(a,b){A.lz(b,t.Q,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
S(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.d(A.by("WARNING, NO ATTRIBUTE "+b))
B.c.aM(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
R(a,b,c,d){var s,r,q,p,o,n
t.d1.a(d)
B.c.cg(a,A.bj(this.e,"_program"))
B.c.aN(a,A.bj(this.f,"_vertexArrayObject"))
for(s=d.gbO(d),s=s.gA(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.a5(p)
n=r.h(0,p)
if(n==null)A.a6(A.by("WARNING, NO UNIFORM "+p))
switch(n.b.b){case B.a0:B.c.ca(a,n.a,A.au(o))
break
case B.m:q=J.am(o)
B.c.cc(a,n.a,A.au(q.h(o,0)),A.au(q.h(o,1)))
break
case B.bt:q=J.am(o)
B.c.cd(a,n.a,A.au(q.h(o,0)),A.au(q.h(o,1)),A.au(q.h(o,2)))
break
case B.aB:q=J.am(o)
B.c.ce(a,n.a,A.au(q.h(o,0)),A.au(q.h(o,1)),A.au(q.h(o,2)),A.au(q.h(o,3)))
break
case B.o:B.c.cb(a,n.a,A.cQ(o))
break}}a.drawArrays(b,0,c)}}
A.h8.prototype={}
A.he.prototype={
m(a,b){var s,r,q,p,o,n
b.a=this
s=this.c
r=s.$ti
r.c.a(b);++s.d
q=s.c
p=s.b.length
if(q===p){o=p*2+1
if(o<7)o=7
n=A.aH(o,null,!1,r.j("1?"))
B.a.ar(n,0,s.c,s.b)
s.saH(n)}s.ax(b,s.c++)
this.d=!0},
bD(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="a_position",a4="a_texcoord",a5=this.c,a6=a5.c,a7=this.a,a8=t.Q,a9=a6*12,b0=A.ip(a7.O(a3,a8).buffer,0,a9),b1=A.ip(a7.O(a4,a8).buffer,0,a9),b2=A.ip(a7.O("a_color",a8).buffer,0,a6*24),b3=a5.bB()
B.a.a4(b3,a5.a)
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
if(a1==null)B.bm.bP(b2,a0,a0+24,0)
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
b2[j]=n}}a7.S(b4,a3,b0)
a7.S(b4,a4,b1)
a7.S(b4,"a_color",b2)},
an(a,b,c,d){var s=this,r=s.c
if(r.c===0)return
if(s.d){s.bD(a)
s.d=!1}a.activeTexture(33984)
B.c.F(a,3553,s.b)
s.a.R(a,4,r.c*6,A.c6(["u_texture",0,"u_resolution",A.e([b,c],t.t)],t.N,t.z))}}
A.ar.prototype={
sah(a,b){var s=this.a
if(s!=null)s.d=!0
this.d=b},
sai(a,b){var s=this.a
if(s!=null)s.d=!0
this.e=b}}
A.fW.prototype={}
A.hm.prototype={
bE(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.b==null)return
s=d.a
r=s.O("a_color",t.H)
for(q=d.d,p=r.length,o=d.b,n=0;n<40;++n)for(m=n<39,l=n*100,k=0;k<100;++k){j=l+k
i=j*48
h=o.b.c
g=h.length
if(!(j<g))return A.b(h,j)
f=h[j]
if(!(f.c===B.b||A.aM(A.fG(f.f))))for(e=0;e<48;e+=4){h=e+i
g=q.c.a
if(!(h<p))return A.b(r,h)
r[h]=(g>>>16&255)/255
f=h+1
if(!(f<p))return A.b(r,f)
r[f]=(g>>>8&255)/255
f=h+2
if(!(f<p))return A.b(r,f)
r[f]=(g&255)/255
h+=3
if(!(h<p))return A.b(r,h)
r[h]=1}else{if(m){f=j+100
if(!(f<g))return A.b(h,f)
f=h[f]
h=!(f.c===B.b||A.aM(A.fG(f.f)))}else h=!1
if(h){for(e=0;e<24;e+=4){h=e+i
g=q.b.a
if(!(h<p))return A.b(r,h)
r[h]=(g>>>16&255)/255
f=h+1
if(!(f<p))return A.b(r,f)
r[f]=(g>>>8&255)/255
f=h+2
if(!(f<p))return A.b(r,f)
r[f]=(g&255)/255
h+=3
if(!(h<p))return A.b(r,h)
r[h]=1}for(e=24;e<48;e+=4){h=e+i
g=q.a.a
if(!(h<p))return A.b(r,h)
r[h]=(g>>>16&255)/255
f=h+1
if(!(f<p))return A.b(r,f)
r[f]=(g>>>8&255)/255
f=h+2
if(!(f<p))return A.b(r,f)
r[f]=(g&255)/255
h+=3
if(!(h<p))return A.b(r,h)
r[h]=1}}else for(e=0;e<48;e+=4){h=e+i
g=q.b.a
if(!(h<p))return A.b(r,h)
r[h]=(g>>>16&255)/255
f=h+1
if(!(f<p))return A.b(r,f)
r[f]=(g>>>8&255)/255
f=h+2
if(!(f<p))return A.b(r,f)
r[f]=(g&255)/255
h+=3
if(!(h<p))return A.b(r,h)
r[h]=1}}}s.S(a,"a_color",r)}}
A.fA.prototype={
bF(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this.a,a2=a1.a3(a1.d),a3=this.b,a4=a3.O("a_color",t.H)
if(a2!=null)for(s=a4.length,r=a2.d,q=a2.c,p=a2.a,o=q.length,n=a1.d,m=n.a,n=n.b,l=0;l<40;++l)for(k=l*100,j=l*p,i=l===n,h=0;h<100;++h){g=k+h
f=g*24
e=h===m&&i
d=j+h
if(!(d<o))return A.b(q,d)
c=q[d]===1||e
if(!(g<4000))return A.b(r,g)
b=r[g]===1||e
for(a=0;a<48;a+=4){d=a+f
if(!(d<s))return A.b(a4,d)
a4[d]=0
a0=d+1
if(!(a0<s))return A.b(a4,a0)
a4[a0]=0
a0=d+2
if(!(a0<s))return A.b(a4,a0)
a4[a0]=0
d+=3
if(c)a0=0
else a0=b?0.8:1
if(!(d<s))return A.b(a4,d)
a4[d]=a0}}this.c=B.p.t(0,a1.d)
a3.S(a5,"a_color",a4)}}
A.ht.prototype={}
A.hS.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:6}
A.hf.prototype={}
A.d8.prototype={
as(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.K(a,a0,A.aH(a*a0,B.d,!1,t.r),t.k)
c.a=b
s=new A.fp(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.t()
if(typeof m!=="number")return A.bI(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.bI(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.bI(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.bI(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.bI(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.bI(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.bI(f)
e=n+m+k+i+h+g+l+f
if(J.P(s.$2(q,o),1))if(e<4)a1.v(0,B.d,q,o)
else a1.v(0,B.b,q,o)
else if(e>5)a1.v(0,B.b,q,o)
else a1.v(0,B.d,q,o)}d=c.a
c.a=a1}}}
A.fp.prototype={
$2(a,b){return J.P(this.a.a.N(0,a,b),B.b)?0:1},
$S:18}
A.fC.prototype={
ap(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.e8.a(b0)
s=t.q
r=A.e([],s)
q=new A.fD(a9)
for(p=J.aA(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.cj()
if(n>=1)B.a.m(r,o)}if(r.length===0)return
m=A.e([],t.ap)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.F)(r),++j){i=r[j]
h=A.e([],k)
g=i.a
f=i.b
if(o.h(0,new A.m(g+1,f))===B.b)B.a.m(h,B.i)
if(o.h(0,new A.m(g+-1,f))===B.b)B.a.m(h,B.k)
if(o.h(0,new A.m(g,f+1))===B.b)B.a.m(h,B.j)
if(o.h(0,new A.m(g,f+-1))===B.b)B.a.m(h,B.h)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.F)(h),++e){d=h[e]
c=A.Y(i,d)
b=A.e([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.b)break
a2=A.kf(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.Y(a,a2[0]))!==B.d){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.Y(a,a2[1]))===B.d}else a1=!0
if(a1)break
a=A.Y(a,d)
B.a.m(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.d&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.Y(a,A.kg(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.m(m,new A.cp(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.b9(t.u,t.aO)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.F)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.H(l,n))continue
if(a4.ag(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.i(0,n,a5)}else a4.i(0,n,a5)}for(s=a4.gaX(a4),s=s.gA(s),n=this.a,l=a9.e,k=a8.b;s.n();){g=s.gp(s)
f=g.d
a0=p.h(0,a8)
a0.toString
B.a.m(a0,f)
a0=p.h(0,f)
a0.toString
B.a.m(a0,a8)
for(g=g.c,a0=g.length,j=0;a1=g.length,j<a1;g.length===a0||(0,A.F)(g),++j)o.i(0,g[j],B.d)
a0=n.B(a1)
if(!(a0>=0&&a0<g.length))return A.b(g,a0)
a7=g[a0]
l.i(0,a7,B.w)
B.a.m(k,a7)
B.a.m(f.b,a7)}for(s=a4.gaX(a4),s=s.gA(s);s.n();)this.ap(s.gp(s).d,a9,b0,b1)}}
A.fD.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.t(0,new A.m(1,0)))===B.b?1:0
if(s.h(0,a.t(0,new A.m(-1,0)))===B.b)++r
if(s.h(0,a.t(0,new A.m(0,-1)))===B.b)++r
return s.h(0,a.t(0,new A.m(1,1)))===B.b?r+1:r},
$S:19}
A.fm.prototype={
b_(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.v(0,o.U()>0.45?B.d:B.b,n,m)
p.v(0,B.X,n,m)}new A.d8(a7).as(3)
for(p=q-1,l=0;l<r;++l){s.v(0,B.b,l,0)
s.v(0,B.b,l,p)}for(o=r-1,k=0;k<q;++k){s.v(0,B.b,0,k)
s.v(0,B.b,o,k)}j=new A.fn(a7)
i=new A.fo(a7)
for(l=1;l<o;l=g)for(h=l-1,g=l+1,k=1;k<p;++k){if(!j.$2(l,k))continue
f=i.$2(g,k)
e=i.$2(h,k)
d=k+1
c=i.$2(l,d)
b=k-1
a=i.$2(l,b)
if(f&&e&&c&&a){s.v(0,B.b,l,k)
continue}if(j.$2(h,d)&&c&&e){s.v(0,B.b,l,k)
continue}if(j.$2(g,d)&&c&&f){s.v(0,B.b,l,k)
continue}if(j.$2(g,b)&&a&&f){s.v(0,B.b,l,k)
continue}if(j.$2(h,b)&&a&&e){s.v(0,B.b,l,k)
continue}}p=t.j
o=A.il(p)
a0=new A.dk(a7,A.e([],t.h),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.m(l,k)
if(o.H(0,a1)||s.h(0,a1)===B.b)continue
a0.aP(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.F)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gA(a3);d.n();)s.i(0,d.gp(d),B.b)
else B.a.m(o,new A.a0(a3,A.e([],h),A.e([],h),A.fz(a3)))}a4=A.b9(p,t.u)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.a,a2=0;b=o.length,a2<b;o.length===r||(0,A.F)(o),++a2){a3=o[a2]
B.a.m(p,a3)
h.i(0,a3,A.e([],d))
for(b=J.aA(a3.a);b.n();)a4.i(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.F)(o),++a2){a3=o[a2]
r=a3.a
p=J.am(r)
if(p.gk(r)>a6){a6=p.gk(r)
a5=a3}}this.ap(a5,a7,a4,q)
for(r=q.aT(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.F)(r),++a2){a3=r[a2]
B.a.aU(o,a3)
for(p=J.aA(a3.a);p.n();)s.i(0,p.gp(p),B.b)}A.jF(o,a7)}}
A.fn.prototype={
$2(a,b){return J.P(this.a.b.N(0,a,b),B.d)},
$S:7}
A.fo.prototype={
$2(a,b){return J.P(this.a.b.N(0,a,b),B.b)},
$S:7}
A.ay.prototype={}
A.ea.prototype={}
A.bN.prototype={}
A.cf.prototype={
K(a,b){this.$ti.c.a(a)
return Math.min(B.Q.K(a,b),B.aV.K(a,b)+B.aF.K(a,b))}}
A.d9.prototype={
K(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.l)return 1/0
s=A.i9(a,B.h,b)
r=A.i9(a,B.j,b)
q=A.i9(a,B.i,b)
p=A.i9(a,B.k,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.d_.prototype={
K(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.l)return 1/0
if(A.bk(a,B.h,b)+A.bk(a,B.j,b)+A.bk(a,B.i,b)+A.bk(a,B.k,b)===1)return 1
return 1/0}}
A.de.prototype={
K(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.l)return 1/0
if(A.bk(a,B.h,b)+A.bk(a,B.j,b)+A.bk(a,B.i,b)+A.bk(a,B.k,b)===2)return 1
return 1/0}}
A.bK.prototype={
K(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.l)return 1/0
s=A.Y(a,B.h)
r=A.Y(a,B.j)
q=A.Y(a,B.i)
p=A.Y(a,B.k)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.cs.prototype={
bY(a,b){return this.b.$2(a,b)}}
A.i7.prototype={
$2(a,b){b.e.i(0,a,B.a_)},
$S:1}
A.i3.prototype={
$2(a,b){b.e.i(0,a,B.ay)},
$S:1}
A.i5.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.v)s.i(0,a,B.Y)
else s.i(0,a,B.Z)},
$S:1}
A.i2.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.v)s.i(0,a,B.Y)
else s.i(0,a,B.Z)},
$S:1}
A.i4.prototype={
$2(a,b){b.e.i(0,a,B.M)},
$S:1}
A.i6.prototype={
$2(a,b){b.e.i(0,a,B.az)
b.f.i(0,a,B.be)},
$S:1}
A.i1.prototype={
$2(a,b){b.e.i(0,a,B.N)},
$S:1}
A.i8.prototype={
$2(a,b){var s=t.u
s.a(a)
s.a(b)
return J.Z(a.a)-J.Z(b.a)},
$S:20}
A.c_.prototype={}
A.fj.prototype={
aY(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=4000,c=new A.K(100,40,A.aH(d,B.d,!1,t.r),t.k),b=A.aH(d,0,!1,t.i),a=A.aH(d,B.X,!1,t.U),a0=new A.K(100,40,A.aH(d,B.l,!1,t.gQ),t.gg),a1=t.a,a2=new A.c_(a3,c,new A.K(100,40,b,t.cL),new A.K(100,40,a,t.dl),a0,new A.K(100,40,A.aH(d,B.ap,!1,t.ad),t.aE),new A.K(100,40,A.aH(d,null,!1,t.br),t.b1),new A.fy(A.e([],a1),A.b9(t.u,t.V)),A.e([],a1))
b=a3.a
switch(b){case B.a6:new A.fm(B.q).b_(a2)
break
case B.aT:new A.hc(A.il(t.j),B.q).b2(a2)
break
case B.aU:case B.a5:case B.a7:new A.hj(B.q).b0(a2)
break}s=new Float32Array(4000)
new A.h2().b1(s,100,40)
r=new A.K(100,40,A.im(d,new A.fk(),t.W),t.L)
for(q=0;q<100;++q)for(a=q!==0,a1=q!==99,p=0;p<40;++p)if(!a||!a1||p===0||p===39){c.v(0,B.b,q,p)
a0.v(0,B.l,q,p)}this.b.aZ(a2.y,a2,a3.c)
for(a=a2.c,a1=this.a,o=a2.d,n=a2.r,b=b!==B.a7,m=a2.f,q=0;q<100;++q)for(p=0;p<40;++p){l=J.P(c.N(0,q,p),B.d)
k=c.N(0,q,p)
k.toString
j=new A.m(q,p)
a1.U()
i=r.h(0,j)
h=o.h(0,j)
g=a0.h(0,j)
i.b=j
i.c=k
i.sc5(o.h(0,j))
k=p*100+q
if(!(k<4000))return A.b(s,k)
f=s[k]
e=n.N(0,q,p)
if(!J.P(a.h(0,j),1))if(g!==B.l)switch(g){case B.w:if(m.h(0,j)===B.ao)i.f=B.H
else i.f=B.G
break
case B.Z:i.f=B.u
break
case B.l:break
case B.ay:i.f=B.J
break
case B.a_:i.f=B.I
break
case B.br:i.f=B.t
break
case B.M:i.f=B.F
if(e!=null)B.a.m(i.e,e)
break
case B.N:i.f=B.D
break
case B.az:i.f=B.E
break
case B.aA:i.f=B.C
break
case B.Y:i.f=B.r
break}else if(l&&f<0.42&&h!==B.v&&b)i.f=B.t
if(e!=null)B.a.m(i.e,e)}return new A.fU(r,a3)}}
A.fk.prototype={
$1(a){var s=A.e([],t.de)
return new A.bg(B.p,B.d,s)},
$S:6}
A.cp.prototype={
gk(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.fy.prototype={
aT(){var s,r,q,p,o,n=A.e([],t.a)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.F)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.m(n,o)}return n}}
A.a0.prototype={
l(a){return"Room{"+J.Z(this.a)+"; "+this.d.l(0)+"}"}}
A.dk.prototype={
aP(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.e([a],k),i=A.e([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.H(0,o))continue
q.m(0,o)
B.a.m(i,o)
for(n=0;n<8;++n){m=A.Y(o,B.b8[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.H(0,m)&&k.h(0,m)===B.d)B.a.m(j,m)}}B.a.m(this.b,i)}}
A.dr.prototype={
aL(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.M)s=B.ah
else if(a instanceof A.O)s=B.af
else s=a instanceof A.ac?B.ag:B.ai
B.a.m(r.a,a)
B.a.m(r.b,s)
B.a.m(r.c,b)
r.d+=b},
aK(a){return this.aL(a,10)},
c_(a){var s,r,q,p,o={},n=o.a=0,m=A.im(this.c.length,new A.fM(o,this),t.i),l=a.U()
for(s=m.length,r=l>-1;n<s;++n){q=m[n]
if(r&&l<=q){s=this.a
if(!(n<s.length))return A.b(s,n)
s=s[n]
if(s instanceof A.M)p=B.ah
else if(s instanceof A.O)p=B.af
else if(s instanceof A.ac)p=B.ag
else{J.bm(s)
p=B.ai}$.iV=$.iV+1
return new A.bq(s,p)}}throw A.d(A.by(""))},
b5(a){var s,r,q=B.a.bR(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.i(s,q,r-2)
this.d-=2},
b4(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p===0)return
B.a.i(r,q,p-2)
this.d-=2}}}
A.fM.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.b(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:22}
A.h0.prototype={}
A.fH.prototype={
aZ(a,b,c){var s,r,q
t.V.a(a)
s=new A.dr(A.e([],t.f),A.e([],t.gr),A.e([],t.t))
r=s.gbH()
new A.at(B.bb,t.bB.a(new A.fI()),t.eL).w(0,r)
new A.at(B.b9,t.aL.a(new A.fJ()),t.fm).w(0,r)
new A.at(B.ba,t.ei.a(new A.fK()),t.aC).w(0,r)
new A.at(B.b6,t.gj.a(new A.fL()),t.dP).w(0,r)
s.aK(B.aa)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.F)(a),++q)this.bl(s,a[q],b)},
bl(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.am(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.p
break}r=j.length
if(r!==0){r=l.B(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.B(k.gk(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.M||q===B.l
else r=!1
if(r)break;++i}if(s.D(0,B.p))return
p=a.c_(l)
n=p.b
if(!J.P(n,B.aa)){a.b5(n)
a.b4(p.c)
o.i(0,s,p)}}}
A.fI.prototype={
$1(a){return t.eV.a(a).b<=1000},
$S:23}
A.fJ.prototype={
$1(a){return t.bP.a(a).f<=1000},
$S:24}
A.fK.prototype={
$1(a){return t.e4.a(a).r<=1000},
$S:25}
A.fL.prototype={
$1(a){return t.fW.a(a).c<=1000},
$S:26}
A.h2.prototype={
J(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
b1(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
for(s=0;s<b0;++s)for(r=s*0.1,q=0;q<b1;++q){p=q*b0+s
o=q*0.1
n=B.e.a_(r)&255
m=B.e.a_(o)&255
l=B.e.a_(0.3)&255
k=r-Math.floor(r)
j=o-Math.floor(o)
i=0.3-Math.floor(0.3)
h=k*k*k*(k*(k*6-15)+10)
g=j*j*j*(j*(j*6-15)+10)
o=$.jT()
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
c=a8.J(0,o[d],k,j,i)
if(!(a0<f))return A.b(o,a0)
a2=k-1
c+=h*(a8.J(0,o[a0],a2,j,i)-c)
if(!(b<f))return A.b(o,b)
a3=j-1
a4=a8.J(0,o[b],k,a3,i)
if(!(a1<f))return A.b(o,a1)
c+=g*(a4+h*(a8.J(0,o[a1],a2,a3,i)-a4)-c)
a4=d+1
if(!(a4<f))return A.b(o,a4)
a5=i-1
a4=a8.J(0,o[a4],k,j,a5)
a6=a0+1
if(!(a6<f))return A.b(o,a6)
a4+=h*(a8.J(0,o[a6],a2,j,a5)-a4)
a6=b+1
if(!(a6<f))return A.b(o,a6)
a6=a8.J(0,o[a6],k,a3,a5)
a7=a1+1
if(!(a7<f))return A.b(o,a7)
a5=a8.J(0,o[a7],a2,a3,a5)
if(!(p<4000))return A.b(a9,p)
a9[p]=(c+i*i*i*(i*(i*6-15)+10)*(a4+g*(a6+h*(a5-a6)-a4)-c)+1)/2}}}
A.aS.prototype={
l(a){return"RuinOrientation."+this.b}}
A.cj.prototype={
l(a){return"RoomSizeKind."+this.b}}
A.hc.prototype={
b2(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a,a1=a0.B(5)
if(!(a1>=0&&a1<5))return A.b(B.an,a1)
s=B.an[a1]
r=a.at(B.as)
q=a.bq(s)
p=A.kh(a.aO(a2,r,new A.m(B.e.a1(Math.max(1,q.a-r.a/2)),B.e.a1(Math.max(1,q.b-A.cg(r)/2)))))
a1=a2.y
B.a.m(a1,p)
for(o=t.q,n=0;n<2000;){m=new A.m(a0.B(98)+1,a0.B(38)+1)
l=[B.L,B.L,B.L,B.ar]
k=a0.B(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a.at(l[k])
if(!a.c0(a2,r,m)){l=a.aO(a2,r,m)
B.a.m(a1,new A.a0(l,A.e([],o),A.e([],o),A.fz(l)))}else ++n}for(a0=a.b,o=a2.d,l=a2.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.m(j,i)
o.v(0,B.v,j,i)
if(!a0.H(0,h))l.i(0,h,B.b)}g=A.b9(t.j,t.u)
for(a0=a1.length,o=a2.x,k=o.a,f=o.b,e=t.a,d=0;d<a1.length;a1.length===a0||(0,A.F)(a1),++d){c=a1[d]
B.a.m(k,c)
f.i(0,c,A.e([],e))
for(b=J.aA(c.a);b.n();)g.i(0,b.gp(b),c)}a.ap(p,a2,g,o)
for(a0=o.aT(),o=a0.length,d=0;d<a0.length;a0.length===o||(0,A.F)(a0),++d){c=a0[d]
B.a.aU(a1,c)
for(k=J.aA(c.a);k.n();)l.i(0,k.gp(k),B.b)}A.jF(a1,a2)},
at(a){var s
switch(a){case B.L:s=this.a
return new A.ci(s.B(5)+5,s.B(5)+5)
case B.ar:s=this.a
return new A.ci(s.B(10)+9,s.B(10)+9)
case B.as:s=this.a
return new A.ci(s.B(10)+20,s.B(10)+20)}},
bq(a){switch(a){case B.at:return new A.m(50,10)
case B.au:return new A.m(50,30)
case B.av:return new A.m(75,20)
case B.aw:return new A.m(25,20)
case B.ax:return new A.m(50,20)}},
aO(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.e([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.m(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.m(0,d)
r.i(0,d,f?B.b:B.d)
if(!f)B.a.m(a,d)}return a},
c0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.m(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.b||n.H(0,i))return!0}return!1}}
A.ci.prototype={}
A.hj.prototype={
bo(a){var s,r,q=a.a.a===B.a5?B.X:B.bq
for(s=a.d.c,r=0;r<s.length;++r)B.a.i(s,r,q)},
b0(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.bo(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.U()>0.6)r.i(0,new A.m(q,p),B.b)
new A.d8(b8).as(10)
o=A.il(t.j)
n=new A.dk(b8,A.e([],t.h),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.m(k,j)
if(o.H(0,i)||r.h(0,i)===B.b)continue
n.aP(i)}o=n.b
B.a.a4(o,new A.hk())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.F)(h),++f)r.i(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.i(e,q,B.aA)
B.a.i(o,q,B.d)}$label0$1:for(o=b8.y,e=t.q,d=b8.d,c=0;c<3;){b=s.B(3)+5
a=s.B(3)+5
q=s.B(100-b)
p=s.B(40-a)
for(a0=q-1,a1=q+b,a2=a1+1,a3=p-1,a4=p+a,a5=a4+1;a0<a2;++a0)for(a6=a0>=0,a7=a0<m,a8=a3;a8<a5;++a8){i=new A.m(a0,a8)
if(!(a6&&a8>=0&&a7&&a8<l))continue $label0$1
if(g.h(0,i)!==B.l||r.h(0,i)!==B.d)continue $label0$1}a9=A.e([],e)
b0=A.e([],e)
for(a2=a1-1,a5=a4-1,a0=q;a0<a1;++a0)for(a6=a0-q!==0,a7=a0!==a2,a3=p;a3<a4;++a3){i=new A.m(a0,a3)
if(!a6||!a7||a3-p===0||a3===a5){r.i(0,i,B.b)
B.a.m(a9,i)}else B.a.m(b0,i)
d.i(0,i,B.v)}b1=new A.hl(b8)
B.a.b6(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.p
break}b3=a9[f]
b4=A.Y(b3,B.h)
b5=A.Y(b3,B.j)
b6=A.Y(b3,B.k)
b7=A.Y(b3,B.i)
if(A.aM(b1.$1(b4))&&A.aM(b1.$1(b5))){b2=b3
break}if(A.aM(b1.$1(b6))&&A.aM(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.F)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.i(0,b2,B.d)
g.i(0,b2,B.w)
B.a.m(o,new A.a0(b0,A.e([],e),A.e([],e),A.fz(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.F)(o),++f)A.cX(o[f],$.ib(),b8)}}
A.hk.prototype={
$2(a,b){var s=t.fb
s.a(a)
return J.Z(s.a(b))-J.Z(a)},
$S:27}
A.hl.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.d&&s.e.h(0,a)===B.l},
$S:28};(function aliases(){var s=J.a.prototype
s.b7=s.l
s=J.b7.prototype
s.b8=s.l})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers.installInstanceTearOff
s(A,"lv","kD",3)
s(A,"lw","kE",3)
s(A,"lx","kF",3)
r(A,"jv","lo",0)
q(A,"lT","ln",29)
p(A.dr.prototype,"gbH",0,1,null,["$2","$1"],["aL","aK"],21,0,0)
s(A,"jA","lS",30)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.A,null)
q(A.A,[A.ij,J.a,J.bO,A.z,A.hd,A.h,A.aG,A.R,A.a1,A.bS,A.hp,A.h1,A.cI,A.b0,A.v,A.fQ,A.c5,A.aq,A.eq,A.f_,A.hL,A.bQ,A.ef,A.cw,A.ah,A.ec,A.cn,A.dX,A.cO,A.cP,A.ex,A.cz,A.f,A.ck,A.hy,A.dJ,A.cl,A.hA,A.bt,A.S,A.eS,A.dY,A.fr,A.ie,A.o,A.bY,A.eu,A.dp,A.h7,A.b1,A.K,A.bq,A.M,A.fY,A.aQ,A.O,A.bM,A.ac,A.a_,A.fT,A.bg,A.m,A.fU,A.ff,A.h8,A.fB,A.hs,A.h5,A.bx,A.dw,A.a7,A.G,A.ed,A.f0,A.fE,A.ar,A.fW,A.ht,A.hf,A.d8,A.fC,A.ay,A.cs,A.c_,A.fj,A.cp,A.fy,A.a0,A.dk,A.dr,A.h0,A.fH,A.h2,A.ci,A.hj])
q(J.a,[J.ds,J.c2,J.b7,J.u,J.c3,J.br,A.be,A.c,A.fe,A.d5,A.aD,A.y,A.eh,A.an,A.fu,A.fv,A.ei,A.bW,A.ek,A.fw,A.i,A.eo,A.a9,A.fF,A.es,A.fR,A.fX,A.ey,A.ez,A.aa,A.eA,A.eC,A.ab,A.eG,A.eJ,A.ad,A.eK,A.ae,A.eP,A.T,A.eU,A.hn,A.af,A.eW,A.ho,A.hr,A.f3,A.f5,A.f7,A.f9,A.fb,A.aj,A.ev,A.ak,A.eE,A.h3,A.eQ,A.al,A.eY,A.fh,A.ee,A.d7,A.dm,A.dM,A.bw,A.aI,A.e4,A.e8,A.eN])
q(J.b7,[J.dK,J.cq,J.aE])
r(J.fN,J.u)
q(J.c3,[J.c1,J.dt])
q(A.z,[A.bs,A.aU,A.du,A.e6,A.dO,A.bP,A.em,A.dG,A.aB,A.e7,A.e5,A.cm,A.dc,A.df])
q(A.h,[A.l,A.bb,A.at])
q(A.l,[A.ap,A.c4])
q(A.ap,[A.co,A.c9])
r(A.bX,A.bb)
q(A.R,[A.c8,A.cr])
r(A.bT,A.bS)
r(A.ce,A.aU)
q(A.b0,[A.da,A.db,A.e_,A.fO,A.hW,A.hY,A.hv,A.hu,A.hH,A.hh,A.hK,A.fV,A.hz,A.h9,A.ha,A.i_,A.hS,A.fD,A.fk,A.fM,A.fI,A.fJ,A.fK,A.fL,A.hl])
q(A.e_,[A.dV,A.bo])
r(A.eb,A.bP)
r(A.c7,A.v)
r(A.b8,A.c7)
q(A.db,[A.hX,A.fS,A.fZ,A.h_,A.hb,A.hg,A.fi,A.fp,A.fn,A.fo,A.i7,A.i3,A.i5,A.i2,A.i4,A.i6,A.i1,A.i8,A.hk])
r(A.bu,A.be)
q(A.bu,[A.cB,A.cD])
r(A.cC,A.cB)
r(A.bd,A.cC)
r(A.cE,A.cD)
r(A.cb,A.cE)
r(A.ca,A.bd)
q(A.cb,[A.dA,A.dB,A.dC,A.dD,A.dE,A.cc,A.dF])
r(A.cL,A.em)
q(A.da,[A.hw,A.hx,A.hM,A.hB,A.hD,A.hC,A.hG,A.hF,A.hE,A.hi,A.hR,A.hJ])
r(A.ct,A.ef)
r(A.eI,A.cO)
r(A.cF,A.cP)
r(A.cy,A.cF)
q(A.aB,[A.bv,A.dq])
q(A.c,[A.q,A.dj,A.a2,A.cG,A.a3,A.Q,A.cJ,A.e9,A.bC,A.d4,A.aP])
q(A.q,[A.N,A.ax])
q(A.N,[A.n,A.k])
q(A.n,[A.d0,A.d1,A.d6,A.aZ,A.dl,A.bp,A.bc,A.dP])
r(A.fq,A.aD)
r(A.bU,A.eh)
q(A.an,[A.fs,A.ft])
r(A.ej,A.ei)
r(A.bV,A.ej)
r(A.el,A.ek)
r(A.dg,A.el)
r(A.a8,A.d5)
r(A.ep,A.eo)
r(A.di,A.ep)
r(A.et,A.es)
r(A.b5,A.et)
r(A.a4,A.i)
r(A.aF,A.a4)
r(A.dx,A.ey)
r(A.dy,A.ez)
r(A.eB,A.eA)
r(A.dz,A.eB)
r(A.eD,A.eC)
r(A.cd,A.eD)
r(A.eH,A.eG)
r(A.dL,A.eH)
r(A.dN,A.eJ)
r(A.cH,A.cG)
r(A.dR,A.cH)
r(A.eL,A.eK)
r(A.dS,A.eL)
r(A.dW,A.eP)
r(A.eV,A.eU)
r(A.e0,A.eV)
r(A.cK,A.cJ)
r(A.e1,A.cK)
r(A.eX,A.eW)
r(A.e2,A.eX)
r(A.bA,A.bc)
r(A.f4,A.f3)
r(A.eg,A.f4)
r(A.cu,A.bW)
r(A.f6,A.f5)
r(A.er,A.f6)
r(A.f8,A.f7)
r(A.cA,A.f8)
r(A.fa,A.f9)
r(A.eM,A.fa)
r(A.fc,A.fb)
r(A.eT,A.fc)
r(A.cv,A.cn)
r(A.bi,A.cv)
r(A.en,A.dX)
r(A.ew,A.ev)
r(A.dv,A.ew)
r(A.eF,A.eE)
r(A.dH,A.eF)
r(A.eR,A.eQ)
r(A.dZ,A.eR)
r(A.eZ,A.eY)
r(A.e3,A.eZ)
r(A.d3,A.ee)
r(A.dI,A.aP)
r(A.eO,A.eN)
r(A.dT,A.eO)
q(A.hy,[A.b6,A.dn,A.aR,A.b3,A.as,A.b2,A.bL,A.bn,A.bz,A.bf,A.U,A.ba,A.aY,A.L,A.b_,A.ao,A.bh,A.aS,A.cj])
q(A.h8,[A.fx,A.fP,A.he,A.hm,A.fA])
q(A.fC,[A.fm,A.hc])
q(A.ay,[A.ea,A.bN,A.cf])
q(A.ea,[A.d9,A.d_,A.de,A.bK])
s(A.cB,A.f)
s(A.cC,A.a1)
s(A.cD,A.f)
s(A.cE,A.a1)
s(A.cP,A.ck)
s(A.eh,A.fr)
s(A.ei,A.f)
s(A.ej,A.o)
s(A.ek,A.f)
s(A.el,A.o)
s(A.eo,A.f)
s(A.ep,A.o)
s(A.es,A.f)
s(A.et,A.o)
s(A.ey,A.v)
s(A.ez,A.v)
s(A.eA,A.f)
s(A.eB,A.o)
s(A.eC,A.f)
s(A.eD,A.o)
s(A.eG,A.f)
s(A.eH,A.o)
s(A.eJ,A.v)
s(A.cG,A.f)
s(A.cH,A.o)
s(A.eK,A.f)
s(A.eL,A.o)
s(A.eP,A.v)
s(A.eU,A.f)
s(A.eV,A.o)
s(A.cJ,A.f)
s(A.cK,A.o)
s(A.eW,A.f)
s(A.eX,A.o)
s(A.f3,A.f)
s(A.f4,A.o)
s(A.f5,A.f)
s(A.f6,A.o)
s(A.f7,A.f)
s(A.f8,A.o)
s(A.f9,A.f)
s(A.fa,A.o)
s(A.fb,A.f)
s(A.fc,A.o)
s(A.ev,A.f)
s(A.ew,A.o)
s(A.eE,A.f)
s(A.eF,A.o)
s(A.eQ,A.f)
s(A.eR,A.o)
s(A.eY,A.f)
s(A.eZ,A.o)
s(A.ee,A.v)
s(A.eN,A.f)
s(A.eO,A.o)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",B:"double",I:"num",r:"String",J:"bool",S:"Null",p:"List"},mangledNames:{},types:["~()","~(m,c_)","~(r,@)","~(~())","S()","~(i)","bg(j)","J(j,j)","@(@)","@(@,r)","@(r)","S(@)","S(~())","ah<@>(@)","~(A?,A?)","~(r,r)","S(aI)","~(aF)","j(j,j)","j(m)","j(a0,a0)","~(A[j])","B(j)","J(M)","J(O)","J(ac)","J(a_)","j(p<m>,p<m>)","J(m)","j(ar,ar)","~(I)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.kT(v.typeUniverse,JSON.parse('{"dK":"b7","cq":"b7","aE":"b7","lZ":"i","m9":"i","m0":"aP","m_":"c","mg":"c","mh":"c","lY":"k","ma":"k","m2":"n","mb":"q","m8":"q","mt":"Q","m4":"a4","m3":"ax","mi":"ax","mc":"b5","m5":"y","m6":"T","m1":"bc","mf":"bd","me":"be","ds":{"J":[]},"c2":{"S":[]},"u":{"p":["1"],"l":["1"],"h":["1"]},"fN":{"u":["1"],"p":["1"],"l":["1"],"h":["1"]},"bO":{"R":["1"]},"c3":{"B":[],"I":[]},"c1":{"B":[],"j":[],"I":[]},"dt":{"B":[],"I":[]},"br":{"r":[]},"bs":{"z":[]},"l":{"h":["1"]},"ap":{"l":["1"],"h":["1"]},"co":{"ap":["1"],"l":["1"],"h":["1"],"h.E":"1","ap.E":"1"},"aG":{"R":["1"]},"bb":{"h":["2"],"h.E":"2"},"bX":{"bb":["1","2"],"l":["2"],"h":["2"],"h.E":"2"},"c8":{"R":["2"]},"c9":{"ap":["2"],"l":["2"],"h":["2"],"h.E":"2","ap.E":"2"},"at":{"h":["1"],"h.E":"1"},"cr":{"R":["1"]},"bS":{"C":["1","2"]},"bT":{"bS":["1","2"],"C":["1","2"]},"ce":{"aU":[],"z":[]},"du":{"z":[]},"e6":{"z":[]},"cI":{"dU":[]},"b0":{"b4":[]},"da":{"b4":[]},"db":{"b4":[]},"e_":{"b4":[]},"dV":{"b4":[]},"bo":{"b4":[]},"dO":{"z":[]},"eb":{"z":[]},"b8":{"v":["1","2"],"iZ":["1","2"],"C":["1","2"],"v.K":"1","v.V":"2"},"c4":{"l":["1"],"h":["1"],"h.E":"1"},"c5":{"R":["1"]},"be":{"ag":[]},"bu":{"t":["1"],"ag":[]},"bd":{"f":["B"],"t":["B"],"p":["B"],"l":["B"],"ag":[],"h":["B"],"a1":["B"],"f.E":"B"},"cb":{"f":["j"],"t":["j"],"p":["j"],"l":["j"],"ag":[],"h":["j"],"a1":["j"]},"ca":{"f":["B"],"ih":[],"t":["B"],"p":["B"],"l":["B"],"ag":[],"h":["B"],"a1":["B"],"f.E":"B"},"dA":{"f":["j"],"t":["j"],"p":["j"],"l":["j"],"ag":[],"h":["j"],"a1":["j"],"f.E":"j"},"dB":{"f":["j"],"t":["j"],"p":["j"],"l":["j"],"ag":[],"h":["j"],"a1":["j"],"f.E":"j"},"dC":{"f":["j"],"t":["j"],"p":["j"],"l":["j"],"ag":[],"h":["j"],"a1":["j"],"f.E":"j"},"dD":{"f":["j"],"t":["j"],"p":["j"],"l":["j"],"ag":[],"h":["j"],"a1":["j"],"f.E":"j"},"dE":{"f":["j"],"t":["j"],"p":["j"],"l":["j"],"ag":[],"h":["j"],"a1":["j"],"f.E":"j"},"cc":{"f":["j"],"t":["j"],"p":["j"],"l":["j"],"ag":[],"h":["j"],"a1":["j"],"f.E":"j"},"dF":{"f":["j"],"kB":[],"t":["j"],"p":["j"],"l":["j"],"ag":[],"h":["j"],"a1":["j"],"f.E":"j"},"em":{"z":[]},"cL":{"aU":[],"z":[]},"ah":{"bZ":["1"]},"bQ":{"z":[]},"ct":{"ef":["1"]},"cO":{"j8":[]},"eI":{"cO":[],"j8":[]},"cy":{"ck":["1"],"j3":["1"],"l":["1"],"h":["1"]},"cz":{"R":["1"]},"c7":{"v":["1","2"],"C":["1","2"]},"v":{"C":["1","2"]},"cF":{"ck":["1"],"j3":["1"],"l":["1"],"h":["1"]},"B":{"I":[]},"j":{"I":[]},"p":{"l":["1"],"h":["1"]},"bP":{"z":[]},"aU":{"z":[]},"dG":{"z":[]},"aB":{"z":[]},"bv":{"z":[]},"dq":{"z":[]},"e7":{"z":[]},"e5":{"z":[]},"cm":{"z":[]},"dc":{"z":[]},"dJ":{"z":[]},"cl":{"z":[]},"df":{"z":[]},"eS":{"dU":[]},"aF":{"i":[]},"q":{"c":[]},"a2":{"c":[]},"a3":{"c":[]},"Q":{"c":[]},"n":{"N":[],"q":[],"c":[]},"d0":{"N":[],"q":[],"c":[]},"d1":{"N":[],"q":[],"c":[]},"d6":{"N":[],"q":[],"c":[]},"aZ":{"N":[],"q":[],"c":[]},"ax":{"q":[],"c":[]},"bV":{"f":["az<I>"],"o":["az<I>"],"p":["az<I>"],"t":["az<I>"],"l":["az<I>"],"h":["az<I>"],"o.E":"az<I>","f.E":"az<I>"},"bW":{"az":["I"]},"dg":{"f":["r"],"o":["r"],"p":["r"],"t":["r"],"l":["r"],"h":["r"],"o.E":"r","f.E":"r"},"N":{"q":[],"c":[]},"di":{"f":["a8"],"o":["a8"],"p":["a8"],"t":["a8"],"l":["a8"],"h":["a8"],"o.E":"a8","f.E":"a8"},"dj":{"c":[]},"dl":{"N":[],"q":[],"c":[]},"b5":{"f":["q"],"o":["q"],"p":["q"],"t":["q"],"l":["q"],"h":["q"],"o.E":"q","f.E":"q"},"bp":{"N":[],"q":[],"c":[]},"bc":{"N":[],"q":[],"c":[]},"dx":{"v":["r","@"],"C":["r","@"],"v.K":"r","v.V":"@"},"dy":{"v":["r","@"],"C":["r","@"],"v.K":"r","v.V":"@"},"dz":{"f":["aa"],"o":["aa"],"p":["aa"],"t":["aa"],"l":["aa"],"h":["aa"],"o.E":"aa","f.E":"aa"},"cd":{"f":["q"],"o":["q"],"p":["q"],"t":["q"],"l":["q"],"h":["q"],"o.E":"q","f.E":"q"},"dL":{"f":["ab"],"o":["ab"],"p":["ab"],"t":["ab"],"l":["ab"],"h":["ab"],"o.E":"ab","f.E":"ab"},"dN":{"v":["r","@"],"C":["r","@"],"v.K":"r","v.V":"@"},"dP":{"N":[],"q":[],"c":[]},"dR":{"f":["a2"],"o":["a2"],"p":["a2"],"t":["a2"],"c":[],"l":["a2"],"h":["a2"],"o.E":"a2","f.E":"a2"},"dS":{"f":["ad"],"o":["ad"],"p":["ad"],"t":["ad"],"l":["ad"],"h":["ad"],"o.E":"ad","f.E":"ad"},"dW":{"v":["r","r"],"C":["r","r"],"v.K":"r","v.V":"r"},"e0":{"f":["Q"],"o":["Q"],"p":["Q"],"t":["Q"],"l":["Q"],"h":["Q"],"o.E":"Q","f.E":"Q"},"e1":{"f":["a3"],"o":["a3"],"p":["a3"],"t":["a3"],"c":[],"l":["a3"],"h":["a3"],"o.E":"a3","f.E":"a3"},"e2":{"f":["af"],"o":["af"],"p":["af"],"t":["af"],"l":["af"],"h":["af"],"o.E":"af","f.E":"af"},"a4":{"i":[]},"bA":{"N":[],"q":[],"c":[]},"e9":{"c":[]},"bC":{"c":[]},"eg":{"f":["y"],"o":["y"],"p":["y"],"t":["y"],"l":["y"],"h":["y"],"o.E":"y","f.E":"y"},"cu":{"az":["I"]},"er":{"f":["a9?"],"o":["a9?"],"p":["a9?"],"t":["a9?"],"l":["a9?"],"h":["a9?"],"o.E":"a9?","f.E":"a9?"},"cA":{"f":["q"],"o":["q"],"p":["q"],"t":["q"],"l":["q"],"h":["q"],"o.E":"q","f.E":"q"},"eM":{"f":["ae"],"o":["ae"],"p":["ae"],"t":["ae"],"l":["ae"],"h":["ae"],"o.E":"ae","f.E":"ae"},"eT":{"f":["T"],"o":["T"],"p":["T"],"t":["T"],"l":["T"],"h":["T"],"o.E":"T","f.E":"T"},"cv":{"cn":["1"]},"bi":{"cv":["1"],"cn":["1"]},"bY":{"R":["1"]},"eu":{"kt":[]},"dv":{"f":["aj"],"o":["aj"],"p":["aj"],"l":["aj"],"h":["aj"],"o.E":"aj","f.E":"aj"},"dH":{"f":["ak"],"o":["ak"],"p":["ak"],"l":["ak"],"h":["ak"],"o.E":"ak","f.E":"ak"},"dZ":{"f":["r"],"o":["r"],"p":["r"],"l":["r"],"h":["r"],"o.E":"r","f.E":"r"},"k":{"N":[],"q":[],"c":[]},"e3":{"f":["al"],"o":["al"],"p":["al"],"l":["al"],"h":["al"],"o.E":"al","f.E":"al"},"d3":{"v":["r","@"],"C":["r","@"],"v.K":"r","v.V":"@"},"d4":{"c":[]},"aP":{"c":[]},"dI":{"c":[]},"dT":{"f":["C<@,@>"],"o":["C<@,@>"],"p":["C<@,@>"],"l":["C<@,@>"],"h":["C<@,@>"],"o.E":"C<@,@>","f.E":"C<@,@>"},"ea":{"ay":["m"]},"bN":{"ay":["1"]},"cf":{"ay":["1"]},"d9":{"ay":["m"]},"d_":{"ay":["m"]},"de":{"ay":["m"]},"bK":{"ay":["m"]},"ih":{"p":["B"],"l":["B"],"h":["B"],"ag":[]}}'))
A.kS(v.typeUniverse,JSON.parse('{"l":1,"bu":1,"dX":1,"c7":2,"cF":1,"cP":1}'))
var u={j:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 zeroToOne = a_position / u_resolution;\n  vec2 zeroToTwo = zeroToOne * 2.0;\n  vec2 clipSpace = zeroToTwo - 1.0;\n  gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n  v_color = a_color;\n}\n",l:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.av
return{eV:s("M"),fW:s("a_"),n:s("bQ"),b:s("aZ"),g5:s("y"),gw:s("l<@>"),u:s("a0"),R:s("z"),J:s("i"),c8:s("a8"),H:s("ih"),Y:s("b4"),d:s("bZ<@>"),aE:s("K<ba>"),dl:s("K<bf>"),gg:s("K<U>"),L:s("K<bg>"),k:s("K<bz>"),cL:s("K<B>"),b1:s("K<bq?>"),ep:s("dp<ar>"),fS:s("bp"),hf:s("h<@>"),e:s("u<bn>"),G:s("u<a7>"),X:s("u<ao>"),a:s("u<a0>"),de:s("u<bq>"),gr:s("u<b6>"),dh:s("u<dw>"),h:s("u<p<m>>"),f:s("u<A>"),q:s("u<m>"),s:s("u<r>"),ap:s("u<cp>"),o:s("u<G>"),B:s("u<as>"),D:s("u<cs>"),v:s("u<B>"),gn:s("u<@>"),t:s("u<j>"),T:s("c2"),g:s("aE"),aU:s("t<@>"),m:s("aF"),bG:s("aj"),V:s("p<a0>"),fb:s("p<m>"),ad:s("ba"),e8:s("C<m,a0>"),d1:s("C<r,@>"),eO:s("C<@,@>"),bP:s("O"),cI:s("aa"),A:s("q"),P:s("S"),ck:s("ak"),K:s("A"),he:s("ab"),j:s("m"),e4:s("ac"),I:s("az<I>"),fY:s("a2"),f7:s("ad"),gf:s("ae"),d8:s("ar"),l:s("dU"),N:s("r"),cO:s("T"),U:s("bf"),gQ:s("U"),a0:s("a3"),c7:s("Q"),p:s("aI"),W:s("bg"),r:s("bz"),aK:s("af"),cM:s("al"),aO:s("cp"),eK:s("aU"),Q:s("ag"),ak:s("cq"),dz:s("bA"),eL:s("at<M>"),dP:s("at<a_>"),fm:s("at<O>"),aC:s("at<ac>"),h0:s("cs"),f0:s("ct<aI>"),f2:s("ed"),E:s("bi<i>"),du:s("ah<aI>"),c:s("ah<@>"),fJ:s("ah<j>"),gz:s("f0"),x:s("J"),bB:s("J(M)"),gj:s("J(a_)"),aL:s("J(O)"),al:s("J(A)"),ei:s("J(ac)"),i:s("B"),z:s("@"),fO:s("@()"),y:s("@(A)"),C:s("@(A,dU)"),S:s("j"),aw:s("0&*"),_:s("A*"),eH:s("bZ<S>?"),g7:s("a9?"),br:s("bq?"),O:s("A?"),gM:s("ar?"),F:s("cw<@,@>?"),hg:s("ex?"),bw:s("@(i)?"),Z:s("~()?"),eN:s("~(aF)?"),di:s("I"),aT:s("~"),M:s("~()"),eA:s("~(r,r)"),w:s("~(r,@)"),c4:s("~(I)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.R=A.aZ.prototype
B.b4=J.a.prototype
B.a=J.u.prototype
B.f=J.c1.prototype
B.e=J.c3.prototype
B.K=J.br.prototype
B.b5=J.aE.prototype
B.bm=A.ca.prototype
B.aq=J.dK.prototype
B.c=A.bw.prototype
B.a1=J.cq.prototype
B.aD=A.bC.prototype
B.a_=new A.U("table")
B.aE=new A.bK(B.a_)
B.N=new A.U("bookshelf")
B.aF=new A.bK(B.N)
B.a5=new A.aY("surface")
B.a6=new A.aY("caves")
B.aT=new A.aY("ruins")
B.a7=new A.aY("village")
B.aU=new A.aY("snow")
B.aV=new A.d_()
B.bG=new A.bN(A.av("bN<m>"))
B.P=new A.d9()
B.Q=new A.de()
B.a8=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aW=function() {
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
B.b0=function(getTagFallback) {
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
B.aX=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aY=function(hooks) {
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
B.b_=function(hooks) {
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
B.aZ=function(hooks) {
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
B.a9=function(hooks) { return hooks; }

B.aa=new A.h0()
B.b1=new A.cf(A.av("cf<m>"))
B.b2=new A.dJ()
B.x=new A.hd()
B.q=new A.eu()
B.n=new A.eI()
B.b3=new A.eS()
B.ab=new A.b_("north")
B.ac=new A.b_("south")
B.ad=new A.b_("east")
B.ae=new A.b_("west")
B.y=new A.ao("se")
B.z=new A.ao("ne")
B.A=new A.ao("sw")
B.B=new A.ao("nw")
B.h=new A.ao("n")
B.i=new A.ao("e")
B.j=new A.ao("s")
B.k=new A.ao("w")
B.S=new A.L("none")
B.T=new A.L("stairsUp")
B.C=new A.L("tree")
B.D=new A.L("bookshelf")
B.E=new A.L("mechanism")
B.U=new A.L("activatedMechanism")
B.F=new A.L("chest")
B.r=new A.L("mechanicalLight")
B.V=new A.L("stairsDown")
B.G=new A.L("door")
B.W=new A.L("openDoor")
B.H=new A.L("lockedDoor")
B.t=new A.L("grass")
B.u=new A.L("torch")
B.I=new A.L("table")
B.J=new A.L("chair")
B.af=new A.b6("melee")
B.ag=new A.b6("ranged")
B.ah=new A.b6("armor")
B.ai=new A.b6("other")
B.a2=new A.bn("light")
B.a3=new A.bn("heavy")
B.a4=new A.bn("powered")
B.ce=A.e(s([B.a2,B.a3,B.a4]),t.e)
B.aG=new A.a_(1)
B.aH=new A.a_(1)
B.aI=new A.a_(1)
B.aJ=new A.a_(1)
B.c5=A.e(s([B.a4]),t.e)
B.aK=new A.a_(2)
B.c7=A.e(s([B.a2,B.a3]),t.e)
B.aL=new A.a_(2)
B.b6=A.e(s([B.aG,B.aH,B.aI,B.aJ,B.aK,B.aL]),A.av("u<a_>"))
B.aj=A.e(s([24,36]),t.v)
B.b7=A.e(s([B.ab,B.ac,B.ad,B.ae]),A.av("u<b_>"))
B.b8=A.e(s([B.y,B.z,B.A,B.B,B.h,B.i,B.j,B.k]),t.X)
B.ak=A.e(s([B.h,B.j]),t.X)
B.al=A.e(s([B.i,B.k]),t.X)
B.c3=new A.dn("oneHand")
B.bW=new A.aR("bludgeoning")
B.bO=new A.b2("none")
B.bH=new A.aQ()
B.c0=new A.b3("d6")
B.bu=new A.as("archaic")
B.O=new A.as("analog")
B.cd=A.e(s([B.bu,B.O]),t.B)
B.bf=new A.O(0,"Club")
B.c_=new A.b3("d4")
B.bv=new A.as("operative")
B.cb=A.e(s([B.O,B.bv]),t.B)
B.bg=new A.O(1,"Tactical Baton")
B.bY=new A.aR("slashing")
B.bl=new A.O(1,"Survival Knife")
B.c4=new A.dn("twoHand")
B.bX=new A.aR("piercing")
B.bw=new A.as("block")
B.c6=A.e(s([B.O,B.bw]),t.B)
B.bi=new A.O(1,"Tactical Spear")
B.bV=new A.aR("fire")
B.bR=new A.b2("burn")
B.bI=new A.aQ()
B.aC=new A.as("powered")
B.ca=A.e(s([B.aC]),t.B)
B.bN=new A.fY()
B.bj=new A.O(7,"Flame Sword")
B.bQ=new A.b2("wound")
B.bJ=new A.aQ()
B.c1=new A.b3("d8")
B.bh=new A.O(9,"Plasma Sword")
B.bU=new A.aR("electricity")
B.bP=new A.b2("arc")
B.bK=new A.aQ()
B.c2=new A.b3("d12")
B.bx=new A.as("stun")
B.c8=A.e(s([B.bx,B.aC]),t.B)
B.bk=new A.O(8,"Shock Staff")
B.b9=A.e(s([B.bf,B.bg,B.bl,B.bi,B.bj,B.bh,B.bk]),A.av("u<O>"))
B.bT=new A.aR("cold")
B.bS=new A.b2("staggered")
B.bL=new A.aQ()
B.bB=new A.bL("charge")
B.bD=new A.bM()
B.bp=new A.ac("Zero pistol",5)
B.c9=A.e(s([B.O]),t.B)
B.bC=new A.bL("rounds")
B.bE=new A.bM()
B.bo=new A.ac("Tac Pistol",1)
B.bZ=new A.b3("d3")
B.bM=new A.aQ()
B.by=new A.as("line")
B.bz=new A.as("unwieldy")
B.cc=A.e(s([B.by,B.bz]),t.B)
B.bA=new A.bL("petro")
B.bF=new A.bM()
B.bn=new A.ac("Flame Rifle",2)
B.ba=A.e(s([B.bp,B.bo,B.bn]),A.av("u<ac>"))
B.aR=new A.M("Second Skin",1)
B.aM=new A.M("Estex Suit I",1)
B.aP=new A.M("Flight Suit",1)
B.aO=new A.M("Freebooter Armor I",2)
B.aS=new A.M("Kasatha microcord I",2)
B.aN=new A.M("Ceremonial Plate",1)
B.aQ=new A.M("Golemforged Plating",1)
B.bb=A.e(s([B.aR,B.aM,B.aP,B.aO,B.aS,B.aN,B.aQ]),A.av("u<M>"))
B.am=A.e(s([-1,3,-1,-1,3,-1]),t.v)
B.bc=A.e(s([]),t.X)
B.at=new A.aS("north")
B.au=new A.aS("south")
B.av=new A.aS("east")
B.aw=new A.aS("west")
B.ax=new A.aS("center")
B.an=A.e(s([B.at,B.au,B.av,B.aw,B.ax]),A.av("u<aS>"))
B.ao=new A.ba("lockedDoor")
B.be=new A.ba("doorMechanism")
B.ap=new A.ba("none")
B.bd=A.e(s([]),t.s)
B.cf=new A.bT(0,{},B.bd,A.av("bT<r,@>"))
B.p=new A.m(0,0)
B.L=new A.cj("small")
B.ar=new A.cj("medium")
B.as=new A.cj("large")
B.X=new A.bf("dirt")
B.v=new A.bf("metal")
B.bq=new A.bf("snow")
B.w=new A.U("door")
B.br=new A.U("grass")
B.Y=new A.U("mechanicalLight")
B.Z=new A.U("light")
B.l=new A.U("none")
B.ay=new A.U("chair")
B.M=new A.U("chest")
B.az=new A.U("mechanism")
B.aA=new A.U("tree")
B.d=new A.bz("floor")
B.b=new A.bz("wall")
B.bs=A.lX("A")
B.a0=new A.bh("float_1")
B.m=new A.bh("float_2")
B.bt=new A.bh("float_3")
B.aB=new A.bh("float_4")
B.o=new A.bh("texture_1")})();(function staticFields(){$.hI=null
$.aC=0
$.bR=null
$.iS=null
$.jy=null
$.ju=null
$.jE=null
$.hT=null
$.hZ=null
$.iJ=null
$.bE=null
$.cR=null
$.cS=null
$.iE=!1
$.H=B.n
$.ai=A.e([],t.f)
$.iV=0})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"m7","jH",function(){return A.lE("_$dart_dartClosure")})
s($,"mj","jJ",function(){return A.aJ(A.hq({
toString:function(){return"$receiver$"}}))})
s($,"mk","jK",function(){return A.aJ(A.hq({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"ml","jL",function(){return A.aJ(A.hq(null))})
s($,"mm","jM",function(){return A.aJ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"mp","jP",function(){return A.aJ(A.hq(void 0))})
s($,"mq","jQ",function(){return A.aJ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"mo","jO",function(){return A.aJ(A.j6(null))})
s($,"mn","jN",function(){return A.aJ(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"ms","jS",function(){return A.aJ(A.j6(void 0))})
s($,"mr","jR",function(){return A.aJ(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"mu","iL",function(){return A.kC()})
s($,"mF","ia",function(){return A.jB(B.bs)})
s($,"md","jI",function(){var r=A.id(4278780675)
return new A.fW(A.id(4279308561),A.id(4280361249),r)})
s($,"mH","jU",function(){return A.is()})
s($,"mT","iO",function(){return A.bB(B.P,new A.i7())})
s($,"mP","iM",function(){return A.bB(B.aE,new A.i3())})
s($,"mR","cZ",function(){return A.bB(B.Q,new A.i5())})
s($,"mO","jZ",function(){return A.bB(B.P,new A.i2())})
s($,"mQ","k_",function(){return A.bB(B.P,new A.i4())})
s($,"mS","iN",function(){return A.bB(B.Q,new A.i6())})
s($,"mN","jY",function(){return A.bB(B.b1,new A.i1())})
s($,"mM","ib",function(){var r=$.iO(),q=$.iM()
return A.e([r,q,q,$.cZ()],t.D)})
s($,"mL","jX",function(){var r=$.jY()
return A.e([r,r,r,r,r,$.cZ(),$.iO(),$.iM()],t.D)})
s($,"mK","jW",function(){var r=$.cZ()
return A.e([r,r,r,r],t.D)})
s($,"mJ","jV",function(){var r=$.cZ(),q=$.jZ()
return A.e([r,r,r,r,r,r,q,q,q,q],t.D)})
s($,"mV","k1",function(){return A.e([$.k_(),$.cZ()],t.D)})
s($,"mG","jT",function(){return new Uint8Array(A.iB(A.e([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t)))})
s($,"mW","k2",function(){var r=A.kA(1,1,0,4,null),q=A.kr(0,0),p=A.e([],A.av("u<bx>"))
p=new A.fB(A.iq(16e6),A.iq(4000),A.iq(4000),q,p)
q=A.is()
q=A.ly(new A.fj(A.is(),new A.fH(q)).aY(new A.fT(B.a6,!1,1)))
p.bW(q.b)
p.bS()
return new A.ht(p,new A.ff(r),q)})
s($,"mU","k0",function(){var r="#glCanvas",q=t.b
return A.kv(A.av("bw").a(B.R.b3(q.a(A.jx().querySelector(r)),"webgl2")),$.k2(),q.a(A.jx().querySelector(r)))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:A.be,ArrayBufferView:A.be,Float64Array:A.bd,Float32Array:A.ca,Int16Array:A.dA,Int32Array:A.dB,Int8Array:A.dC,Uint16Array:A.dD,Uint32Array:A.dE,Uint8ClampedArray:A.cc,CanvasPixelArray:A.cc,Uint8Array:A.dF,HTMLBRElement:A.n,HTMLBaseElement:A.n,HTMLButtonElement:A.n,HTMLContentElement:A.n,HTMLDListElement:A.n,HTMLDataElement:A.n,HTMLDataListElement:A.n,HTMLDetailsElement:A.n,HTMLDialogElement:A.n,HTMLDivElement:A.n,HTMLEmbedElement:A.n,HTMLFieldSetElement:A.n,HTMLHRElement:A.n,HTMLHeadElement:A.n,HTMLHeadingElement:A.n,HTMLHtmlElement:A.n,HTMLIFrameElement:A.n,HTMLInputElement:A.n,HTMLLIElement:A.n,HTMLLabelElement:A.n,HTMLLegendElement:A.n,HTMLLinkElement:A.n,HTMLMapElement:A.n,HTMLMenuElement:A.n,HTMLMetaElement:A.n,HTMLMeterElement:A.n,HTMLModElement:A.n,HTMLOListElement:A.n,HTMLObjectElement:A.n,HTMLOptGroupElement:A.n,HTMLOptionElement:A.n,HTMLOutputElement:A.n,HTMLParagraphElement:A.n,HTMLParamElement:A.n,HTMLPictureElement:A.n,HTMLPreElement:A.n,HTMLProgressElement:A.n,HTMLQuoteElement:A.n,HTMLScriptElement:A.n,HTMLShadowElement:A.n,HTMLSlotElement:A.n,HTMLSourceElement:A.n,HTMLSpanElement:A.n,HTMLStyleElement:A.n,HTMLTableCaptionElement:A.n,HTMLTableCellElement:A.n,HTMLTableDataCellElement:A.n,HTMLTableHeaderCellElement:A.n,HTMLTableColElement:A.n,HTMLTableElement:A.n,HTMLTableRowElement:A.n,HTMLTableSectionElement:A.n,HTMLTemplateElement:A.n,HTMLTextAreaElement:A.n,HTMLTimeElement:A.n,HTMLTitleElement:A.n,HTMLTrackElement:A.n,HTMLUListElement:A.n,HTMLUnknownElement:A.n,HTMLDirectoryElement:A.n,HTMLFontElement:A.n,HTMLFrameElement:A.n,HTMLFrameSetElement:A.n,HTMLMarqueeElement:A.n,HTMLElement:A.n,AccessibleNodeList:A.fe,HTMLAnchorElement:A.d0,HTMLAreaElement:A.d1,Blob:A.d5,HTMLBodyElement:A.d6,HTMLCanvasElement:A.aZ,CDATASection:A.ax,CharacterData:A.ax,Comment:A.ax,ProcessingInstruction:A.ax,Text:A.ax,CSSPerspective:A.fq,CSSCharsetRule:A.y,CSSConditionRule:A.y,CSSFontFaceRule:A.y,CSSGroupingRule:A.y,CSSImportRule:A.y,CSSKeyframeRule:A.y,MozCSSKeyframeRule:A.y,WebKitCSSKeyframeRule:A.y,CSSKeyframesRule:A.y,MozCSSKeyframesRule:A.y,WebKitCSSKeyframesRule:A.y,CSSMediaRule:A.y,CSSNamespaceRule:A.y,CSSPageRule:A.y,CSSRule:A.y,CSSStyleRule:A.y,CSSSupportsRule:A.y,CSSViewportRule:A.y,CSSStyleDeclaration:A.bU,MSStyleCSSProperties:A.bU,CSS2Properties:A.bU,CSSImageValue:A.an,CSSKeywordValue:A.an,CSSNumericValue:A.an,CSSPositionValue:A.an,CSSResourceValue:A.an,CSSUnitValue:A.an,CSSURLImageValue:A.an,CSSStyleValue:A.an,CSSMatrixComponent:A.aD,CSSRotation:A.aD,CSSScale:A.aD,CSSSkew:A.aD,CSSTranslation:A.aD,CSSTransformComponent:A.aD,CSSTransformValue:A.fs,CSSUnparsedValue:A.ft,DataTransferItemList:A.fu,DOMException:A.fv,ClientRectList:A.bV,DOMRectList:A.bV,DOMRectReadOnly:A.bW,DOMStringList:A.dg,DOMTokenList:A.fw,Element:A.N,AbortPaymentEvent:A.i,AnimationEvent:A.i,AnimationPlaybackEvent:A.i,ApplicationCacheErrorEvent:A.i,BackgroundFetchClickEvent:A.i,BackgroundFetchEvent:A.i,BackgroundFetchFailEvent:A.i,BackgroundFetchedEvent:A.i,BeforeInstallPromptEvent:A.i,BeforeUnloadEvent:A.i,BlobEvent:A.i,CanMakePaymentEvent:A.i,ClipboardEvent:A.i,CloseEvent:A.i,CustomEvent:A.i,DeviceMotionEvent:A.i,DeviceOrientationEvent:A.i,ErrorEvent:A.i,ExtendableEvent:A.i,ExtendableMessageEvent:A.i,FetchEvent:A.i,FontFaceSetLoadEvent:A.i,ForeignFetchEvent:A.i,GamepadEvent:A.i,HashChangeEvent:A.i,InstallEvent:A.i,MediaEncryptedEvent:A.i,MediaKeyMessageEvent:A.i,MediaQueryListEvent:A.i,MediaStreamEvent:A.i,MediaStreamTrackEvent:A.i,MessageEvent:A.i,MIDIConnectionEvent:A.i,MIDIMessageEvent:A.i,MutationEvent:A.i,NotificationEvent:A.i,PageTransitionEvent:A.i,PaymentRequestEvent:A.i,PaymentRequestUpdateEvent:A.i,PopStateEvent:A.i,PresentationConnectionAvailableEvent:A.i,PresentationConnectionCloseEvent:A.i,ProgressEvent:A.i,PromiseRejectionEvent:A.i,PushEvent:A.i,RTCDataChannelEvent:A.i,RTCDTMFToneChangeEvent:A.i,RTCPeerConnectionIceEvent:A.i,RTCTrackEvent:A.i,SecurityPolicyViolationEvent:A.i,SensorErrorEvent:A.i,SpeechRecognitionError:A.i,SpeechRecognitionEvent:A.i,SpeechSynthesisEvent:A.i,StorageEvent:A.i,SyncEvent:A.i,TrackEvent:A.i,TransitionEvent:A.i,WebKitTransitionEvent:A.i,VRDeviceEvent:A.i,VRDisplayEvent:A.i,VRSessionEvent:A.i,MojoInterfaceRequestEvent:A.i,ResourceProgressEvent:A.i,USBConnectionEvent:A.i,IDBVersionChangeEvent:A.i,AudioProcessingEvent:A.i,OfflineAudioCompletionEvent:A.i,WebGLContextEvent:A.i,Event:A.i,InputEvent:A.i,SubmitEvent:A.i,AbsoluteOrientationSensor:A.c,Accelerometer:A.c,AccessibleNode:A.c,AmbientLightSensor:A.c,Animation:A.c,ApplicationCache:A.c,DOMApplicationCache:A.c,OfflineResourceList:A.c,BackgroundFetchRegistration:A.c,BatteryManager:A.c,BroadcastChannel:A.c,CanvasCaptureMediaStreamTrack:A.c,DedicatedWorkerGlobalScope:A.c,EventSource:A.c,FileReader:A.c,FontFaceSet:A.c,Gyroscope:A.c,XMLHttpRequest:A.c,XMLHttpRequestEventTarget:A.c,XMLHttpRequestUpload:A.c,LinearAccelerationSensor:A.c,Magnetometer:A.c,MediaDevices:A.c,MediaKeySession:A.c,MediaQueryList:A.c,MediaRecorder:A.c,MediaSource:A.c,MediaStream:A.c,MediaStreamTrack:A.c,MessagePort:A.c,MIDIAccess:A.c,MIDIInput:A.c,MIDIOutput:A.c,MIDIPort:A.c,NetworkInformation:A.c,Notification:A.c,OffscreenCanvas:A.c,OrientationSensor:A.c,PaymentRequest:A.c,Performance:A.c,PermissionStatus:A.c,PresentationAvailability:A.c,PresentationConnection:A.c,PresentationConnectionList:A.c,PresentationRequest:A.c,RelativeOrientationSensor:A.c,RemotePlayback:A.c,RTCDataChannel:A.c,DataChannel:A.c,RTCDTMFSender:A.c,RTCPeerConnection:A.c,webkitRTCPeerConnection:A.c,mozRTCPeerConnection:A.c,ScreenOrientation:A.c,Sensor:A.c,ServiceWorker:A.c,ServiceWorkerContainer:A.c,ServiceWorkerGlobalScope:A.c,ServiceWorkerRegistration:A.c,SharedWorker:A.c,SharedWorkerGlobalScope:A.c,SpeechRecognition:A.c,SpeechSynthesis:A.c,SpeechSynthesisUtterance:A.c,VR:A.c,VRDevice:A.c,VRDisplay:A.c,VRSession:A.c,VisualViewport:A.c,WebSocket:A.c,Worker:A.c,WorkerGlobalScope:A.c,WorkerPerformance:A.c,BluetoothDevice:A.c,BluetoothRemoteGATTCharacteristic:A.c,Clipboard:A.c,MojoInterfaceInterceptor:A.c,USB:A.c,IDBDatabase:A.c,IDBOpenDBRequest:A.c,IDBVersionChangeRequest:A.c,IDBRequest:A.c,IDBTransaction:A.c,AnalyserNode:A.c,RealtimeAnalyserNode:A.c,AudioBufferSourceNode:A.c,AudioDestinationNode:A.c,AudioNode:A.c,AudioScheduledSourceNode:A.c,AudioWorkletNode:A.c,BiquadFilterNode:A.c,ChannelMergerNode:A.c,AudioChannelMerger:A.c,ChannelSplitterNode:A.c,AudioChannelSplitter:A.c,ConstantSourceNode:A.c,ConvolverNode:A.c,DelayNode:A.c,DynamicsCompressorNode:A.c,GainNode:A.c,AudioGainNode:A.c,IIRFilterNode:A.c,MediaElementAudioSourceNode:A.c,MediaStreamAudioDestinationNode:A.c,MediaStreamAudioSourceNode:A.c,OscillatorNode:A.c,Oscillator:A.c,PannerNode:A.c,AudioPannerNode:A.c,webkitAudioPannerNode:A.c,ScriptProcessorNode:A.c,JavaScriptAudioNode:A.c,StereoPannerNode:A.c,WaveShaperNode:A.c,EventTarget:A.c,File:A.a8,FileList:A.di,FileWriter:A.dj,HTMLFormElement:A.dl,Gamepad:A.a9,History:A.fF,HTMLCollection:A.b5,HTMLFormControlsCollection:A.b5,HTMLOptionsCollection:A.b5,HTMLImageElement:A.bp,KeyboardEvent:A.aF,Location:A.fR,HTMLAudioElement:A.bc,HTMLMediaElement:A.bc,MediaList:A.fX,MIDIInputMap:A.dx,MIDIOutputMap:A.dy,MimeType:A.aa,MimeTypeArray:A.dz,Document:A.q,DocumentFragment:A.q,HTMLDocument:A.q,ShadowRoot:A.q,XMLDocument:A.q,Attr:A.q,DocumentType:A.q,Node:A.q,NodeList:A.cd,RadioNodeList:A.cd,Plugin:A.ab,PluginArray:A.dL,RTCStatsReport:A.dN,HTMLSelectElement:A.dP,SourceBuffer:A.a2,SourceBufferList:A.dR,SpeechGrammar:A.ad,SpeechGrammarList:A.dS,SpeechRecognitionResult:A.ae,Storage:A.dW,CSSStyleSheet:A.T,StyleSheet:A.T,TextTrack:A.a3,TextTrackCue:A.Q,VTTCue:A.Q,TextTrackCueList:A.e0,TextTrackList:A.e1,TimeRanges:A.hn,Touch:A.af,TouchList:A.e2,TrackDefaultList:A.ho,CompositionEvent:A.a4,FocusEvent:A.a4,MouseEvent:A.a4,DragEvent:A.a4,PointerEvent:A.a4,TextEvent:A.a4,TouchEvent:A.a4,WheelEvent:A.a4,UIEvent:A.a4,URL:A.hr,HTMLVideoElement:A.bA,VideoTrackList:A.e9,Window:A.bC,DOMWindow:A.bC,CSSRuleList:A.eg,ClientRect:A.cu,DOMRect:A.cu,GamepadList:A.er,NamedNodeMap:A.cA,MozNamedAttrMap:A.cA,SpeechRecognitionResultList:A.eM,StyleSheetList:A.eT,SVGLength:A.aj,SVGLengthList:A.dv,SVGNumber:A.ak,SVGNumberList:A.dH,SVGPointList:A.h3,SVGStringList:A.dZ,SVGAElement:A.k,SVGAnimateElement:A.k,SVGAnimateMotionElement:A.k,SVGAnimateTransformElement:A.k,SVGAnimationElement:A.k,SVGCircleElement:A.k,SVGClipPathElement:A.k,SVGDefsElement:A.k,SVGDescElement:A.k,SVGDiscardElement:A.k,SVGEllipseElement:A.k,SVGFEBlendElement:A.k,SVGFEColorMatrixElement:A.k,SVGFEComponentTransferElement:A.k,SVGFECompositeElement:A.k,SVGFEConvolveMatrixElement:A.k,SVGFEDiffuseLightingElement:A.k,SVGFEDisplacementMapElement:A.k,SVGFEDistantLightElement:A.k,SVGFEFloodElement:A.k,SVGFEFuncAElement:A.k,SVGFEFuncBElement:A.k,SVGFEFuncGElement:A.k,SVGFEFuncRElement:A.k,SVGFEGaussianBlurElement:A.k,SVGFEImageElement:A.k,SVGFEMergeElement:A.k,SVGFEMergeNodeElement:A.k,SVGFEMorphologyElement:A.k,SVGFEOffsetElement:A.k,SVGFEPointLightElement:A.k,SVGFESpecularLightingElement:A.k,SVGFESpotLightElement:A.k,SVGFETileElement:A.k,SVGFETurbulenceElement:A.k,SVGFilterElement:A.k,SVGForeignObjectElement:A.k,SVGGElement:A.k,SVGGeometryElement:A.k,SVGGraphicsElement:A.k,SVGImageElement:A.k,SVGLineElement:A.k,SVGLinearGradientElement:A.k,SVGMarkerElement:A.k,SVGMaskElement:A.k,SVGMetadataElement:A.k,SVGPathElement:A.k,SVGPatternElement:A.k,SVGPolygonElement:A.k,SVGPolylineElement:A.k,SVGRadialGradientElement:A.k,SVGRectElement:A.k,SVGScriptElement:A.k,SVGSetElement:A.k,SVGStopElement:A.k,SVGStyleElement:A.k,SVGElement:A.k,SVGSVGElement:A.k,SVGSwitchElement:A.k,SVGSymbolElement:A.k,SVGTSpanElement:A.k,SVGTextContentElement:A.k,SVGTextElement:A.k,SVGTextPathElement:A.k,SVGTextPositioningElement:A.k,SVGTitleElement:A.k,SVGUseElement:A.k,SVGViewElement:A.k,SVGGradientElement:A.k,SVGComponentTransferFunctionElement:A.k,SVGFEDropShadowElement:A.k,SVGMPathElement:A.k,SVGTransform:A.al,SVGTransformList:A.e3,AudioBuffer:A.fh,AudioParamMap:A.d3,AudioTrackList:A.d4,AudioContext:A.aP,webkitAudioContext:A.aP,BaseAudioContext:A.aP,OfflineAudioContext:A.dI,WebGLBuffer:A.d7,WebGLFramebuffer:A.dm,WebGLProgram:A.dM,WebGL2RenderingContext:A.bw,WebGLTexture:A.aI,WebGLUniformLocation:A.e4,WebGLVertexArrayObject:A.e8,SQLResultSetRowList:A.dT})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,TouchEvent:true,WheelEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,SQLResultSetRowList:true})
A.bu.$nativeSuperclassTag="ArrayBufferView"
A.cB.$nativeSuperclassTag="ArrayBufferView"
A.cC.$nativeSuperclassTag="ArrayBufferView"
A.bd.$nativeSuperclassTag="ArrayBufferView"
A.cD.$nativeSuperclassTag="ArrayBufferView"
A.cE.$nativeSuperclassTag="ArrayBufferView"
A.cb.$nativeSuperclassTag="ArrayBufferView"
A.cG.$nativeSuperclassTag="EventTarget"
A.cH.$nativeSuperclassTag="EventTarget"
A.cJ.$nativeSuperclassTag="EventTarget"
A.cK.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.lO
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

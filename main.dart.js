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
a[c]=function(){a[c]=function(){A.nh(b)}
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
if(a[b]!==s)A.ni(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=b.fs[0]
if(a)return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"(receiver) {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(receiver, this);"+"}")(b,A.jL,null)
else return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"() {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(this, null);"+"}")(b,A.jL,null)}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.jL(a).prototype
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
a(hunkHelpers,v,w,$)}var A={jp:function jp(){},
k3(a){return new A.cA("Field '"+a+"' has been assigned during initialization.")},
b5(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
jy(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
iZ(a,b,c){return a},
kf(a,b,c,d){A.hZ(b,"start")
if(c!=null){A.hZ(c,"end")
if(b>c)A.T(A.cM(b,0,c,"start",null))}return new A.cR(a,b,c,d.i("cR<0>"))},
k5(a,b,c,d){if(t.gw.b(a))return new A.cr(a,b,c.i("@<0>").v(d).i("cr<1,2>"))
return new A.bv(a,b,c.i("@<0>").v(d).i("bv<1,2>"))},
lu(){return new A.aR("No element")},
lw(){return new A.aR("Too many elements")},
lv(){return new A.aR("Too few elements")},
lL(a,b,c){A.en(a,0,J.a0(a)-1,b,c)},
en(a,b,c,d,e){if(c-b<=32)A.lK(a,b,c,d,e)
else A.lJ(a,b,c,d,e)},
lK(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.ao(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.G()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
lJ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.f.R(a5-a4+1,6),i=a4+j,h=a5-j,g=B.f.R(a4+a5,2),f=g-j,e=g+j,d=J.ao(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
A.en(a3,a4,r-2,a6,a7)
A.en(a3,q+2,a5,a6,a7)
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
break}}A.en(a3,r,q,a6,a7)}else A.en(a3,r,q,a6,a7)},
cA:function cA(a){this.a=a},
i3:function i3(){},
m:function m(){},
ar:function ar(){},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aP:function aP(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bv:function bv(a,b,c){this.a=a
this.b=b
this.$ti=c},
cr:function cr(a,b,c){this.a=a
this.b=b
this.$ti=c},
cE:function cE(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
cF:function cF(a,b,c){this.a=a
this.b=b
this.$ti=c},
aw:function aw(a,b,c){this.a=a
this.b=b
this.$ti=c},
cV:function cV(a,b,c){this.a=a
this.b=b
this.$ti=c},
a4:function a4(){},
kR(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
n6(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
z(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bI(a)
return s},
bR(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
hX(a){return A.lF(a)},
lF(a){var s,r,q,p
if(a instanceof A.y)return A.Z(A.az(a),null)
if(J.c8(a)===B.ba||t.ak.b(a)){s=B.af(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.Z(A.az(a),null)},
c9(a){throw A.d(A.mN(a))},
b(a,b){if(a==null)J.a0(a)
throw A.d(A.c7(a,b))},
c7(a,b){var s,r="index"
if(!A.jI(b))return new A.aH(!0,b,r,null)
s=A.c2(J.a0(a))
if(b<0||b>=s)return A.H(b,a,r,null,s)
return A.k8(b,r)},
mN(a){return new A.aH(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.ec()
s=new Error()
s.dartException=a
r=A.nj
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
nj(){return J.bI(this.dartException)},
T(a){throw A.d(a)},
E(a){throw A.d(A.cl(a))},
aV(a){var s,r,q,p,o,n
a=A.ne(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.ih(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ii(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kg(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jq(a,b){var s=b==null,r=s?null:b.method
return new A.e_(a,r,s?null:b.receiver)},
bf(a){if(a==null)return new A.hU(a)
if(a instanceof A.cs)return A.be(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.be(a,a.dartException)
return A.mM(a)},
be(a,b){if(t.R.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
mM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.f.co(r,16)&8191)===10)switch(q){case 438:return A.be(a,A.jq(A.z(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.z(s)+" (Error "+q+")"
return A.be(a,new A.cK(p,e))}}if(a instanceof TypeError){o=$.kU()
n=$.kV()
m=$.kW()
l=$.kX()
k=$.l_()
j=$.l0()
i=$.kZ()
$.kY()
h=$.l2()
g=$.l1()
f=o.H(s)
if(f!=null)return A.be(a,A.jq(A.a8(s),f))
else{f=n.H(s)
if(f!=null){f.method="call"
return A.be(a,A.jq(A.a8(s),f))}else{f=m.H(s)
if(f==null){f=l.H(s)
if(f==null){f=k.H(s)
if(f==null){f=j.H(s)
if(f==null){f=i.H(s)
if(f==null){f=l.H(s)
if(f==null){f=h.H(s)
if(f==null){f=g.H(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.a8(s)
return A.be(a,new A.cK(s,f==null?e:f.method))}}}return A.be(a,new A.eE(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cQ()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.be(a,new A.aH(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cQ()
return a},
bd(a){var s
if(a instanceof A.cs)return a.b
if(a==null)return new A.da(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.da(a)},
kL(a){if(a==null||typeof a!="object")return J.ca(a)
else return A.bR(a)},
mY(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
n4(a,b,c,d,e,f){t.k.a(a)
switch(A.c2(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.jm("Unsupported number of arguments for wrapped closure"))},
du(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.n4)
a.$identity=s
return s},
lo(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.es().constructor.prototype):Object.create(new A.bK(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else{q=$.aI
if(typeof q!=="number")return q.u()
$.aI=q+1
q=new Function("a,b"+q,"this.$initialize(a,b"+q+")")
r=q}s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.jZ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.lk(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.jZ(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
lk(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.li)}throw A.d("Error in functionType of tearoff")},
ll(a,b,c,d){var s=A.jY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jZ(a,b,c,d){var s,r,q,p,o,n="receiver"
if(c)return A.ln(a,b,d)
s=b.length
r=d||s>=27
if(r)return A.ll(s,d,a,b)
if(s===0){r=$.aI
if(typeof r!=="number")return r.u()
$.aI=r+1
q="self"+r
r="return function(){var "+q+" = this."
p=$.ck
return new Function(r+(p==null?$.ck=A.h3(n):p)+";return "+q+"."+a+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
r=$.aI
if(typeof r!=="number")return r.u()
$.aI=r+1
o+=r
r="return function("+o+"){return this."
p=$.ck
return new Function(r+(p==null?$.ck=A.h3(n):p)+"."+a+"("+o+");}")()},
lm(a,b,c,d){var s=A.jY,r=A.lj
switch(b?-1:a){case 0:throw A.d(new A.ek("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
ln(a,b,c){var s,r,q,p,o,n=$.jX
if(n==null)n=$.jX=A.h3("interceptor")
s=$.ck
if(s==null)s=$.ck=A.h3("receiver")
r=b.length
q=c||r>=28
if(q)return A.lm(r,c,a,b)
if(r===1){q="return function(){return this."+n+"."+a+"(this."+s+");"
p=$.aI
if(typeof p!=="number")return p.u()
$.aI=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
q="return function("+o+"){return this."+n+"."+a+"(this."+s+", "+o+");"
p=$.aI
if(typeof p!=="number")return p.u()
$.aI=p+1
return new Function(q+p+"}")()},
jL(a){return A.lo(a)},
li(a,b){return A.iR(v.typeUniverse,A.az(a.a),b)},
jY(a){return a.a},
lj(a){return a.b},
h3(a){var s,r,q,p=new A.bK("receiver","interceptor"),o=J.k2(Object.getOwnPropertyNames(p),t.O)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.cg("Field name "+a+" not found.",null))},
aY(a){if(a==null)A.mO("boolean expression must not be null")
return a},
mO(a){throw A.d(new A.eJ(a))},
nh(a){throw A.d(new A.dM(a))},
mZ(a){return v.getIsolateTag(a)},
o9(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
n9(a){var s,r,q,p,o,n=A.a8($.kI.$1(a)),m=$.j_[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j5[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.me($.kE.$2(a,n))
if(q!=null){m=$.j_[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j5[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.j7(s)
$.j_[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.j5[n]=s
return s}if(p==="-"){o=A.j7(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.kM(a,s)
if(p==="*")throw A.d(A.kh(n))
if(v.leafTags[n]===true){o=A.j7(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.kM(a,s)},
kM(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jN(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
j7(a){return J.jN(a,!1,null,!!a.$iu)},
nb(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.j7(s)
else return J.jN(s,c,null,null)},
n1(){if(!0===$.jM)return
$.jM=!0
A.n2()},
n2(){var s,r,q,p,o,n,m,l
$.j_=Object.create(null)
$.j5=Object.create(null)
A.n0()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kO.$1(o)
if(n!=null){m=A.nb(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
n0(){var s,r,q,p,o,n,m=B.b0()
m=A.c6(B.b1,A.c6(B.b2,A.c6(B.ag,A.c6(B.ag,A.c6(B.b3,A.c6(B.b4,A.c6(B.b5(B.af),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kI=new A.j2(p)
$.kE=new A.j3(o)
$.kO=new A.j4(n)},
c6(a,b){return a(b)||b},
ne(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cm:function cm(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ih:function ih(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cK:function cK(a,b){this.a=a
this.b=b},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
eE:function eE(a){this.a=a},
hU:function hU(a){this.a=a},
cs:function cs(a,b){this.a=a
this.b=b},
da:function da(a){this.a=a
this.b=null},
bj:function bj(){},
dI:function dI(){},
dJ:function dJ(){},
ew:function ew(){},
es:function es(){},
bK:function bK(a,b){this.a=a
this.b=b},
ek:function ek(a){this.a=a},
eJ:function eJ(a){this.a=a},
br:function br(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hC:function hC(a){this.a=a},
hE:function hE(a,b){this.a=a
this.b=b
this.c=null},
cB:function cB(a,b){this.a=a
this.$ti=b},
cC:function cC(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
ku(a,b,c){},
dn(a){return a},
k6(a){return new Float32Array(a)},
ju(a,b,c){A.ku(a,b,c)
return new Float32Array(a,b,c)},
hS(a){return new Uint8Array(a)},
k7(a,b,c){var s
A.ku(a,b,c)
s=new Uint8Array(a,b,c)
return s},
aW(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.c7(b,a))},
by:function by(){},
bQ:function bQ(){},
bx:function bx(){},
cH:function cH(){},
cG:function cG(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
cI:function cI(){},
eb:function eb(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
ka(a,b){var s=b.c
return s==null?b.c=A.jE(a,b.z,!0):s},
k9(a,b){var s=b.c
return s==null?b.c=A.dg(a,"aC",[b.z]):s},
kb(a){var s=a.y
if(s===6||s===7||s===8)return A.kb(a.z)
return s===11||s===12},
lI(a){return a.cy},
an(a){return A.fH(v.typeUniverse,a,!1)},
bc(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.bc(a,s,a0,a1)
if(r===s)return b
return A.kr(a,r,!0)
case 7:s=b.z
r=A.bc(a,s,a0,a1)
if(r===s)return b
return A.jE(a,r,!0)
case 8:s=b.z
r=A.bc(a,s,a0,a1)
if(r===s)return b
return A.kq(a,r,!0)
case 9:q=b.Q
p=A.ds(a,q,a0,a1)
if(p===q)return b
return A.dg(a,b.z,p)
case 10:o=b.z
n=A.bc(a,o,a0,a1)
m=b.Q
l=A.ds(a,m,a0,a1)
if(n===o&&l===m)return b
return A.jC(a,n,l)
case 11:k=b.z
j=A.bc(a,k,a0,a1)
i=b.Q
h=A.mJ(a,i,a0,a1)
if(j===k&&h===i)return b
return A.kp(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.ds(a,g,a0,a1)
o=b.z
n=A.bc(a,o,a0,a1)
if(f===g&&n===o)return b
return A.jD(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.fY("Attempted to substitute unexpected RTI kind "+c))}},
ds(a,b,c,d){var s,r,q,p,o=b.length,n=A.iS(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bc(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
mK(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.iS(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bc(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
mJ(a,b,c,d){var s,r=b.a,q=A.ds(a,r,c,d),p=b.b,o=A.ds(a,p,c,d),n=b.c,m=A.mK(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.f1()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
mW(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.n_(s)
return a.$S()}return null},
kJ(a,b){var s
if(A.kb(b))if(a instanceof A.bj){s=A.mW(a)
if(s!=null)return s}return A.az(a)},
az(a){var s
if(a instanceof A.y){s=a.$ti
return s!=null?s:A.jF(a)}if(Array.isArray(a))return A.ax(a)
return A.jF(J.c8(a))},
ax(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
B(a){var s=a.$ti
return s!=null?s:A.jF(a)},
jF(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.mr(a,s)},
mr(a,b){var s=a instanceof A.bj?a.__proto__.__proto__.constructor:b,r=A.ma(v.typeUniverse,s.name)
b.$ccache=r
return r},
n_(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fH(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mX(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.fE(a)
q=A.fH(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.fE(q):p},
nk(a){return A.mX(A.fH(v.typeUniverse,a,!1))},
mq(a){var s,r,q,p,o=this
if(o===t.K)return A.c3(o,a,A.mv)
if(!A.b_(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.c3(o,a,A.my)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.jI
else if(r===t.i||r===t.di)q=A.mu
else if(r===t.N)q=A.mw
else q=r===t.cJ?A.jG:null
if(q!=null)return A.c3(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.n7)){o.r="$i"+p
if(p==="p")return A.c3(o,a,A.mt)
return A.c3(o,a,A.mx)}}else if(s===7)return A.c3(o,a,A.mo)
return A.c3(o,a,A.mm)},
c3(a,b,c){a.b=c
return a.b(b)},
mp(a){var s,r=this,q=A.ml
if(!A.b_(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.mf
else if(r===t.K)q=A.md
else{s=A.dv(r)
if(s)q=A.mn}r.a=q
return r.a(a)},
iV(a){var s,r=a.y
if(!A.b_(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&A.iV(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mm(a){var s=this
if(a==null)return A.iV(s)
return A.I(v.typeUniverse,A.kJ(a,s),null,s,null)},
mo(a){if(a==null)return!0
return this.z.b(a)},
mx(a){var s,r=this
if(a==null)return A.iV(r)
s=r.r
if(a instanceof A.y)return!!a[s]
return!!J.c8(a)[s]},
mt(a){var s,r=this
if(a==null)return A.iV(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.y)return!!a[s]
return!!J.c8(a)[s]},
ml(a){var s,r=this
if(a==null){s=A.dv(r)
if(s)return a}else if(r.b(a))return a
A.kx(a,r)},
mn(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.kx(a,s)},
kx(a,b){throw A.d(A.ko(A.kj(a,A.kJ(a,b),A.Z(b,null))))},
mV(a,b,c,d){var s=null
if(A.I(v.typeUniverse,a,s,b,s))return a
throw A.d(A.ko("The type argument '"+A.Z(a,s)+"' is not a subtype of the type variable bound '"+A.Z(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
kj(a,b,c){var s=A.dO(a),r=A.Z(b==null?A.az(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
ko(a){return new A.df("TypeError: "+a)},
Y(a,b){return new A.df("TypeError: "+A.kj(a,null,b))},
mv(a){return a!=null},
md(a){if(a!=null)return a
throw A.d(A.Y(a,"Object"))},
my(a){return!0},
mf(a){return a},
jG(a){return!0===a||!1===a},
nX(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.Y(a,"bool"))},
nZ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.Y(a,"bool"))},
nY(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.Y(a,"bool?"))},
mc(a){if(typeof a=="number")return a
throw A.d(A.Y(a,"double"))},
o0(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.Y(a,"double"))},
o_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.Y(a,"double?"))},
jI(a){return typeof a=="number"&&Math.floor(a)===a},
c2(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.Y(a,"int"))},
o2(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.Y(a,"int"))},
o1(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.Y(a,"int?"))},
mu(a){return typeof a=="number"},
ay(a){if(typeof a=="number")return a
throw A.d(A.Y(a,"num"))},
o4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.Y(a,"num"))},
o3(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.Y(a,"num?"))},
mw(a){return typeof a=="string"},
a8(a){if(typeof a=="string")return a
throw A.d(A.Y(a,"String"))},
o5(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.Y(a,"String"))},
me(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.Y(a,"String?"))},
mF(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.Z(a[q],b)
return s},
ky(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
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
if(l===9){p=A.mL(a.z)
o=a.Q
return o.length>0?p+("<"+A.mF(o,b)+">"):p}if(l===11)return A.ky(a,b,null)
if(l===12)return A.ky(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
mL(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
mb(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ma(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fH(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dh(a,5,"#")
q=A.iS(s)
for(p=0;p<s;++p)q[p]=r
o=A.dg(a,b,q)
n[b]=o
return o}else return m},
m8(a,b){return A.ks(a.tR,b)},
m7(a,b){return A.ks(a.eT,b)},
fH(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.km(A.kk(a,null,b,c))
r.set(b,s)
return s},
iR(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.km(A.kk(a,b,c,!0))
q.set(c,r)
return r},
m9(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.jC(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bb(a,b){b.a=A.mp
b.b=A.mq
return b},
dh(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.as(null,null)
s.y=b
s.cy=c
r=A.bb(a,s)
a.eC.set(c,r)
return r},
kr(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.m5(a,b,r,c)
a.eC.set(r,s)
return s},
m5(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.b_(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.as(null,null)
q.y=6
q.z=b
q.cy=c
return A.bb(a,q)},
jE(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.m4(a,b,r,c)
a.eC.set(r,s)
return s},
m4(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.b_(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.dv(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.dv(q.z))return q
else return A.ka(a,b)}}p=new A.as(null,null)
p.y=7
p.z=b
p.cy=c
return A.bb(a,p)},
kq(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.m2(a,b,r,c)
a.eC.set(r,s)
return s},
m2(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.b_(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.dg(a,"aC",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.as(null,null)
q.y=8
q.z=b
q.cy=c
return A.bb(a,q)},
m6(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.as(null,null)
s.y=13
s.z=b
s.cy=q
r=A.bb(a,s)
a.eC.set(q,r)
return r},
fG(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
m1(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dg(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fG(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.as(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.bb(a,r)
a.eC.set(p,q)
return q},
jC(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.fG(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.as(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.bb(a,o)
a.eC.set(q,n)
return n},
kp(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fG(m)
if(j>0){s=l>0?",":""
r=A.fG(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.m1(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.as(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.bb(a,o)
a.eC.set(q,r)
return r},
jD(a,b,c,d){var s,r=b.cy+("<"+A.fG(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.m3(a,b,c,r,d)
a.eC.set(r,s)
return s},
m3(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.iS(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.bc(a,b,r,0)
m=A.ds(a,c,r,0)
return A.jD(a,n,m,c!==m)}}l=new A.as(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.bb(a,l)},
kk(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
km(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.lX(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.kl(a,r,h,g,!1)
else if(q===46)r=A.kl(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.b9(a.u,a.e,g.pop()))
break
case 94:g.push(A.m6(a.u,g.pop()))
break
case 35:g.push(A.dh(a.u,5,"#"))
break
case 64:g.push(A.dh(a.u,2,"@"))
break
case 126:g.push(A.dh(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.jB(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.dg(p,n,o))
else{m=A.b9(p,a.e,n)
switch(m.y){case 11:g.push(A.jD(p,m,o,a.n))
break
default:g.push(A.jC(p,m,o))
break}}break
case 38:A.lY(a,g)
break
case 42:p=a.u
g.push(A.kr(p,A.b9(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.jE(p,A.b9(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.kq(p,A.b9(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.f1()
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
A.jB(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.kp(p,A.b9(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.jB(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.m_(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.b9(a.u,a.e,i)},
lX(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kl(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.mb(s,o.z)[p]
if(n==null)A.T('No "'+p+'" in "'+A.lI(o)+'"')
d.push(A.iR(s,o,n))}else d.push(p)
return m},
lY(a,b){var s=b.pop()
if(0===s){b.push(A.dh(a.u,1,"0&"))
return}if(1===s){b.push(A.dh(a.u,4,"1&"))
return}throw A.d(A.fY("Unexpected extended operation "+A.z(s)))},
b9(a,b,c){if(typeof c=="string")return A.dg(a,c,a.sEA)
else if(typeof c=="number")return A.lZ(a,b,c)
else return c},
jB(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.b9(a,b,c[s])},
m_(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.b9(a,b,c[s])},
lZ(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.d(A.fY("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.d(A.fY("Bad index "+c+" for "+b.k(0)))},
I(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.b_(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.b_(b))return!1
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
if(p===6){s=A.ka(a,d)
return A.I(a,b,c,s,e)}if(r===8){if(!A.I(a,b.z,c,d,e))return!1
return A.I(a,A.k9(a,b),c,d,e)}if(r===7){s=A.I(a,t.P,c,d,e)
return s&&A.I(a,b.z,c,d,e)}if(p===8){if(A.I(a,b,c,d.z,e))return!0
return A.I(a,b,c,A.k9(a,d),e)}if(p===7){s=A.I(a,b,c,t.P,e)
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
if(!A.I(a,k,c,j,e)||!A.I(a,j,e,k,c))return!1}return A.kz(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return A.kz(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.ms(a,b,c,d,e)}return!1},
kz(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
ms(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iR(a,b,r[o])
return A.kt(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.kt(a,n,null,c,m,e)},
kt(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.I(a,r,d,q,f))return!1}return!0},
dv(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.b_(a))if(r!==7)if(!(r===6&&A.dv(a.z)))s=r===8&&A.dv(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
n7(a){var s
if(!A.b_(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b_(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.O},
ks(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
iS(a){return a>0?new Array(a):v.typeUniverse.sEA},
as:function as(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
f1:function f1(){this.c=this.b=this.a=null},
fE:function fE(a){this.a=a},
eY:function eY(){},
df:function df(a){this.a=a},
lR(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.mP()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.du(new A.is(q),1)).observe(s,{childList:true})
return new A.ir(q,s,r)}else if(self.setImmediate!=null)return A.mQ()
return A.mR()},
lS(a){self.scheduleImmediate(A.du(new A.it(t.M.a(a)),0))},
lT(a){self.setImmediate(A.du(new A.iu(t.M.a(a)),0))},
lU(a){t.M.a(a)
A.m0(0,a)},
m0(a,b){var s=new A.iP()
s.bV(a,b)
return s},
dr(a){return new A.eK(new A.J($.D,a.i("J<0>")),a.i("eK<0>"))},
dm(a,b){a.$2(0,null)
b.b=!0
return b.a},
bG(a,b){A.mg(a,b)},
dl(a,b){b.af(0,a)},
dk(a,b){b.bl(A.bf(a),A.bd(a))},
mg(a,b){var s,r,q=new A.iT(b),p=new A.iU(b)
if(a instanceof A.J)a.be(q,p,t.z)
else{s=t.z
if(t.d.b(a))a.aO(q,p,s)
else{r=new A.J($.D,t.c)
r.a=8
r.c=a
r.be(q,p,s)}}},
dt(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.D.aM(new A.iX(s),t.H,t.S,t.z)},
fZ(a,b){var s=A.iZ(a,"error",t.K)
return new A.cj(s,b==null?A.lh(a):b)},
lh(a){var s
if(t.R.b(a)){s=a.ga7()
if(s!=null)return s}return B.b8},
jz(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.ab()
b.an(a)
A.c1(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.bb(q)}},
c1(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.d;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.fT(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.c1(c.a,b)
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
A.fT(i.a,i.b)
return}f=$.D
if(f!==g)$.D=g
else f=null
b=b.c
if((b&15)===8)new A.iI(p,c,m).$0()
else if(n){if((b&1)!==0)new A.iH(p,i).$0()}else if((b&2)!==0)new A.iG(c,p).$0()
if(f!=null)$.D=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("aC<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.ac(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.jz(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.ac(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
mD(a,b){var s
if(t.C.b(a))return b.aM(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.jW(a,"onError",u.c))},
mA(){var s,r
for(s=$.c4;s!=null;s=$.c4){$.dq=null
r=s.b
$.c4=r
if(r==null)$.dp=null
s.a.$0()}},
mI(){$.jH=!0
try{A.mA()}finally{$.dq=null
$.jH=!1
if($.c4!=null)$.jO().$1(A.kF())}},
kC(a){var s=new A.eL(a),r=$.dp
if(r==null){$.c4=$.dp=s
if(!$.jH)$.jO().$1(A.kF())}else $.dp=r.b=s},
mG(a){var s,r,q,p=$.c4
if(p==null){A.kC(a)
$.dq=$.dp
return}s=new A.eL(a)
r=$.dq
if(r==null){s.b=p
$.c4=$.dq=s}else{q=r.b
s.b=q
$.dq=r.b=s
if(q==null)$.dp=s}},
kP(a){var s=null,r=$.D
if(B.n===r){A.c5(s,s,B.n,a)
return}A.c5(s,s,r,t.M.a(r.bj(a)))},
nJ(a,b){A.iZ(a,"stream",t.K)
return new A.fs(b.i("fs<0>"))},
jK(a){return},
lV(a,b){if(b==null)b=A.mT()
if(t.da.b(b))return a.aM(b,t.z,t.K,t.l)
if(t.d5.b(b))return t.y.a(b)
throw A.d(A.cg("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
mC(a,b){A.fT(a,b)},
mB(){},
fT(a,b){A.mG(new A.iW(a,b))},
kA(a,b,c,d,e){var s,r=$.D
if(r===c)return d.$0()
$.D=c
s=r
try{r=d.$0()
return r}finally{$.D=s}},
kB(a,b,c,d,e,f,g){var s,r=$.D
if(r===c)return d.$1(e)
$.D=c
s=r
try{r=d.$1(e)
return r}finally{$.D=s}},
mE(a,b,c,d,e,f,g,h,i){var s,r=$.D
if(r===c)return d.$2(e,f)
$.D=c
s=r
try{r=d.$2(e,f)
return r}finally{$.D=s}},
c5(a,b,c,d){t.M.a(d)
if(B.n!==c)d=c.bj(d)
A.kC(d)},
is:function is(a){this.a=a},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a){this.a=a},
iu:function iu(a){this.a=a},
iP:function iP(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=!1
this.$ti=b},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
iX:function iX(a){this.a=a},
cj:function cj(a,b){this.a=a
this.b=b},
eP:function eP(){},
bC:function bC(a,b){this.a=a
this.$ti=b},
bF:function bF(a,b,c,d,e){var _=this
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
iy:function iy(a,b){this.a=a
this.b=b},
iF:function iF(a,b){this.a=a
this.b=b},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a){this.a=a},
iH:function iH(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
eL:function eL(a){this.a=a
this.b=null},
bz:function bz(){},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
aT:function aT(){},
db:function db(){},
iO:function iO(a){this.a=a},
eM:function eM(){},
bZ:function bZ(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
c_:function c_(a,b){this.a=a
this.$ti=b},
c0:function c0(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
cX:function cX(){},
dc:function dc(){},
eT:function eT(){},
bD:function bD(a,b){this.b=a
this.a=null
this.$ti=b},
ba:function ba(){},
iL:function iL(a,b){this.a=a
this.b=b},
aF:function aF(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
fs:function fs(a){this.$ti=a},
di:function di(){},
iW:function iW(a,b){this.a=a
this.b=b},
fj:function fj(){},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
bt(a,b,c){return b.i("@<0>").v(c).i("k4<1,2>").a(A.mY(a,new A.br(b.i("@<0>").v(c).i("br<1,2>"))))},
bs(a,b){return new A.br(a.i("@<0>").v(b).i("br<1,2>"))},
jr(a){return new A.d0(a.i("d0<0>"))},
jA(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
k1(a,b,c){var s,r
if(A.jJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.m($.ai,a)
try{A.mz(a,s)}finally{if(0>=$.ai.length)return A.b($.ai,-1)
$.ai.pop()}r=A.ke(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jo(a,b,c){var s,r
if(A.jJ(a))return b+"..."+c
s=new A.eu(b)
B.a.m($.ai,a)
try{r=s
r.a=A.ke(r.a,a,", ")}finally{if(0>=$.ai.length)return A.b($.ai,-1)
$.ai.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jJ(a){var s,r
for(s=$.ai.length,r=0;r<s;++r)if(a===$.ai[r])return!0
return!1},
mz(a,b){var s,r,q,p,o,n,m,l=a.gw(a),k=0,j=0
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
jt(a){var s,r={}
if(A.jJ(a))return"{...}"
s=new A.eu("")
try{B.a.m($.ai,a)
s.a+="{"
r.a=!0
J.le(a,new A.hH(r,s))
s.a+="}"}finally{if(0>=$.ai.length)return A.b($.ai,-1)
$.ai.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d0:function d0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f8:function f8(a){this.a=a
this.b=null},
d1:function d1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
f:function f(){},
cD:function cD(){},
hH:function hH(a,b){this.a=a
this.b=b},
w:function w(){},
hK:function hK(a){this.a=a},
cP:function cP(){},
d7:function d7(){},
dj:function dj(){},
ls(a){if(a instanceof A.bj)return a.k(0)
return"Instance of '"+A.hX(a)+"'"},
aQ(a,b,c,d){var s,r=J.lx(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
lC(a,b,c){var s=A.lB(a,c)
return s},
lB(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.i("t<0>"))
s=A.e([],b.i("t<0>"))
for(r=J.aG(a);r.n();)B.a.m(s,r.gp(r))
return s},
js(a,b,c){var s,r=J.ly(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
ke(a,b,c){var s=J.aG(b)
if(!s.n())return a
if(c.length===0){do a+=A.z(s.gp(s))
while(s.n())}else{a+=A.z(s.gp(s))
for(;s.n();)a=a+c+A.z(s.gp(s))}return a},
dO(a){if(typeof a=="number"||A.jG(a)||a==null)return J.bI(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ls(a)},
fY(a){return new A.ci(a)},
cg(a,b){return new A.aH(!1,null,b,a)},
jW(a,b,c){return new A.aH(!0,a,b,c)},
lH(a){var s=null
return new A.bS(s,s,!1,s,s,a)},
k8(a,b){return new A.bS(null,null,!0,a,b,"Value not in range")},
cM(a,b,c,d,e){return new A.bS(b,c,!0,a,d,"Invalid value")},
jx(a,b,c){if(0>a||a>c)throw A.d(A.cM(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.cM(b,a,c,"end",null))
return b}return c},
hZ(a,b){if(a<0)throw A.d(A.cM(a,0,null,b,null))
return a},
H(a,b,c,d,e){var s=A.c2(e==null?J.a0(b):e)
return new A.dX(s,!0,a,c,"Index out of range")},
x(a){return new A.eF(a)},
kh(a){return new A.eD(a)},
aS(a){return new A.aR(a)},
cl(a){return new A.dK(a)},
jm(a){return new A.ix(a)},
jv(a,b,c,d){var s,r
if(B.D===c){s=B.d.gt(a)
b=B.d.gt(b)
return A.jy(A.b5(A.b5($.jh(),s),b))}if(B.D===d){s=B.d.gt(a)
b=B.d.gt(b)
c=J.ca(c)
return A.jy(A.b5(A.b5(A.b5($.jh(),s),b),c))}s=B.d.gt(a)
b=B.d.gt(b)
c=J.ca(c)
d=J.ca(d)
r=$.jh()
return A.jy(A.b5(A.b5(A.b5(A.b5(r,s),b),c),d))},
kN(a){A.nc(a)},
aK:function aK(a){this.a=a},
iv:function iv(){},
C:function C(){},
ci:function ci(a){this.a=a},
b7:function b7(){},
ec:function ec(){},
aH:function aH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bS:function bS(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dX:function dX(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eF:function eF(a){this.a=a},
eD:function eD(a){this.a=a},
aR:function aR(a){this.a=a},
dK:function dK(a){this.a=a},
ef:function ef(){},
cQ:function cQ(){},
dM:function dM(a){this.a=a},
ix:function ix(a){this.a=a},
h:function h(){},
V:function V(){},
bP:function bP(a,b,c){this.a=a
this.b=b
this.$ti=c},
L:function L(){},
y:function y(){},
fv:function fv(){},
eu:function eu(a){this.a=a},
nl(){return window},
kG(){return document},
eZ(a,b,c,d,e){var s=A.kD(new A.iw(c),t.h)
if(s!=null&&!0)J.ld(a,b,s,!1)
return new A.d_(a,b,s,!1,e.i("d_<0>"))},
mh(a){var s
if("postMessage" in a){s=A.lW(a)
return s}else return t.ch.a(a)},
lW(a){if(a===window)return t.ci.a(a)
else return new A.eS()},
kD(a,b){var s=$.D
if(s===B.n)return a
return s.cH(a,b)},
n:function n(){},
fV:function fV(){},
dz:function dz(){},
dA:function dA(){},
dD:function dD(){},
dE:function dE(){},
bh:function bh(){},
aA:function aA(){},
h9:function h9(){},
A:function A(){},
co:function co(){},
ha:function ha(){},
ap:function ap(){},
aJ:function aJ(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
bL:function bL(){},
he:function he(){},
cp:function cp(){},
cq:function cq(){},
dN:function dN(){},
hf:function hf(){},
N:function N(){},
j:function j(){},
c:function c(){},
a9:function a9(){},
dP:function dP(){},
dQ:function dQ(){},
dS:function dS(){},
aa:function aa(){},
ht:function ht(){},
bo:function bo(){},
bM:function bM(){},
aO:function aO(){},
hG:function hG(){},
bw:function bw(){},
hM:function hM(){},
e2:function e2(){},
hO:function hO(a){this.a=a},
e3:function e3(){},
hP:function hP(a){this.a=a},
ab:function ab(){},
e4:function e4(){},
a5:function a5(){},
q:function q(){},
cJ:function cJ(){},
ac:function ac(){},
eh:function eh(){},
ej:function ej(){},
i1:function i1(a){this.a=a},
el:function el(){},
a6:function a6(){},
ep:function ep(){},
ae:function ae(){},
eq:function eq(){},
af:function af(){},
et:function et(){},
i7:function i7(a){this.a=a},
W:function W(){},
a7:function a7(){},
U:function U(){},
ex:function ex(){},
ey:function ey(){},
ie:function ie(){},
ag:function ag(){},
ez:function ez(){},
ig:function ig(){},
aE:function aE(){},
ik:function ik(){},
bW:function bW(){},
eH:function eH(){},
bY:function bY(){},
eQ:function eQ(){},
cY:function cY(){},
f2:function f2(){},
d2:function d2(){},
fn:function fn(){},
fw:function fw(){},
jl:function jl(a,b){this.a=a
this.$ti=b},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
d_:function d_(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iw:function iw(a){this.a=a},
o:function o(){},
ct:function ct(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eS:function eS(){},
eR:function eR(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
f_:function f_(){},
f0:function f0(){},
f3:function f3(){},
f4:function f4(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
fh:function fh(){},
fi:function fi(){},
fk:function fk(){},
d8:function d8(){},
d9:function d9(){},
fl:function fl(){},
fm:function fm(){},
fq:function fq(){},
fx:function fx(){},
fy:function fy(){},
dd:function dd(){},
de:function de(){},
fA:function fA(){},
fB:function fB(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
jw(){return B.q},
f5:function f5(){},
ak:function ak(){},
e0:function e0(){},
al:function al(){},
ed:function ed(){},
hW:function hW(){},
ev:function ev(){},
l:function l(){},
am:function am(){},
eA:function eA(){},
f6:function f6(){},
f7:function f7(){},
ff:function ff(){},
fg:function fg(){},
ft:function ft(){},
fu:function fu(){},
fC:function fC(){},
fD:function fD(){},
h_:function h_(){},
dB:function dB(){},
h0:function h0(a){this.a=a},
dC:function dC(){},
b0:function b0(){},
ee:function ee(){},
eO:function eO(){},
dF:function dF(){},
dT:function dT(){},
ei:function ei(){},
bT:function bT(){},
aU:function aU(){},
eC:function eC(){},
eG:function eG(){},
er:function er(){},
fo:function fo(){},
fp:function fp(){},
dW:function dW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
jk(a){return new A.bk(a)},
bk:function bk(a){this.a=a},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
n5(a,b){return!0},
cc:function cc(a,b){this.a=100
this.c=a
this.x=b},
h4:function h4(){this.b=this.a=0},
nd(a,b,c){var s=b.a===0
if(s)return!1
return!1},
dU:function dU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
ho:function ho(a,b){this.a=a
this.b=b},
lE(a,b){return new A.k(a,b)},
hu(a){switch(a){case B.a_:case B.a0:case B.a2:case B.v:case B.w:case B.x:case B.N:case B.O:case B.I:case B.J:case B.K:case B.a1:case B.L:case B.u:case null:return!1
case B.r:case B.M:return!0}},
lt(a){switch(a){case B.a_:case B.a0:case B.a2:case B.v:case B.w:case B.x:case B.N:case B.O:case B.I:case B.J:case B.K:case B.a1:case B.L:case B.u:case null:return!1
case B.r:case B.M:return!0}},
bp:function bp(a){this.b=a},
bN:function bN(a,b){this.b=a
this.c=b},
R:function R(a,b){this.a=a
this.b=b},
dV:function dV(a){this.b=a},
b2:function b2(a){this.b=a},
bm:function bm(a){this.b=a},
av:function av(a){this.b=a},
hN:function hN(){},
b1:function b1(){},
bl:function bl(a){this.b=a},
S:function S(a,b){this.f=a
this.y=b},
cd:function cd(a){this.b=a},
ce:function ce(){},
ad:function ad(a,b){this.a=a
this.r=b},
bJ:function bJ(a){this.b=a},
a1:function a1(a){this.c=a},
bV:function bV(a){this.b=a},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a){this.b=a},
X:function X(a){this.b=a},
bu:function bu(a){this.b=a},
bg:function bg(a){this.b=a},
b6:function b6(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
hD:function hD(a){this.b=a},
k:function k(a,b){this.a=a
this.b=b},
hF:function hF(a){this.b=a},
P:function P(a){this.b=a},
hJ:function hJ(a,b){this.a=a
this.b=b},
hg:function hg(a){var _=this
_.a=a
_.b=!1
_.c=null
_.d=0},
hj:function hj(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
aM(a,b,c,d,e){return new A.hk(a,e,c,d,b)},
aL:function aL(){},
hk:function hk(a,b,c,d,e){var _=this
_.a=a
_.d=b
_.f=c
_.r=d
_.x=e},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a,b){this.a=a
this.b=b},
em:function em(){},
cS:function cS(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
hm:function hm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fz:function fz(a){this.a=a
this.b=!0},
il:function il(a,b,c){this.a=a
this.c=b
this.d=c},
bi:function bi(a){this.b=a},
hY:function hY(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
n3(a){var s=a.f
if(s==null)return A.e([],t.U)
if(s===B.r)return A.e([new A.cv(new A.cS(!1,a.b))],t.U)
if(s===B.v)return A.e([new A.cv(new A.cS(!0,a.b))],t.U)
return A.e([],t.U)},
cv:function cv(a){this.b=a},
lA(a){var s=u.p,r="a_position",q="u_resolution",p="u_block_size",o="u_player_visible_texture",n="u_offset",m=t.G,l=t.o
return new A.e1(A.b3(A.e([new A.a2(r,35044,5126,2,new Float32Array(A.dn(B.z)))],m),u.w,A.e([new A.v(q,B.e),new A.v("u_source_position",B.e),new A.v(p,B.e),new A.v("u_source_color",B.a7),new A.v("u_source_strength",B.t),new A.v("u_time",B.t),new A.v("u_visible_texture",B.i),new A.v(o,B.i),new A.v(n,B.e)],l),s),A.b3(A.e([new A.a2(r,35044,5126,2,new Float32Array(A.dn(B.z)))],m),u.m,A.e([new A.v("u_light_texture",B.i),new A.v("u_game_world_texture",B.i),new A.v(o,B.i),new A.v(q,B.e),new A.v(p,B.e),new A.v(n,B.e)],l),s),a,A.e([],t.cd))},
e1:function e1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=d
_.y=_.x=0},
lq(a){switch(a){case B.E:return B.H
case B.F:return B.G
case B.G:return B.F
case B.H:return B.E
case B.j:return B.l
case B.k:return B.m
case B.l:return B.j
case B.m:return B.k}},
lp(a){switch(a){case B.j:return B.as
case B.k:return B.ar
case B.l:return B.as
case B.m:return B.ar
default:return B.bk}},
a_(a,b){switch(b){case B.j:return a.u(0,new A.k(0,-1))
case B.F:return a.u(0,new A.k(1,-1))
case B.k:return a.u(0,new A.k(1,0))
case B.E:return a.u(0,new A.k(1,1))
case B.l:return a.u(0,new A.k(0,1))
case B.G:return a.u(0,new A.k(-1,1))
case B.m:return a.u(0,new A.k(-1,0))
case B.H:return a.u(0,new A.k(-1,-1))}},
aq:function aq(a){this.b=a},
jj(a,b,c,d,e){return new A.a2(d,a,c,e,b)},
ij(a,b){return new A.v(b,a)},
b3(a,b,c,d){var s=t.N
return new A.hr(d,b,c,a,A.bs(s,t.gz),A.bs(s,t.f2))},
kw(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.Q(a.getShaderParameter(s,35713),!0)){A.kN(J.bI(a.getShaderInfoLog(s)))
throw A.d(A.aS("Invalid Shader"))}return s},
a2:function a2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v:function v(a,b){this.a=a
this.b=b},
bB:function bB(a){this.b=a},
eN:function eN(a,b){this.a=a
this.c=b},
fF:function fF(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
i_:function i_(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
i0:function i0(){},
eo:function eo(){},
mH(a,b){var s=t.d8
s.a(a)
s.a(b)
return B.f.cK(a.r,b.r)},
n8(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.J($.D,t.du),p=J.lf(r),o=p.$ti,n=o.i("~(1)?").a(new A.j6(a,s,r,new A.bC(q,t.f0)))
t.Z.a(null)
A.eZ(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
lO(a,b){var s=A.e([new A.v("u_texture",B.i),new A.v("u_resolution",B.e),new A.v("u_offset",B.e)],t.o),r=new Float32Array(12e3),q=new Float32Array(12e3)
s=A.b3(A.e([new A.a2("a_position",35048,5126,2,r),new A.a2("a_texcoord",35048,5126,2,q),new A.a2("a_color",35048,5126,4,new Float32Array(24e3))],t.G),"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n}\n",s,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n}\n")
r=A.aQ(7,null,!1,t.gM)
s=new A.i4(s,new A.dW(A.ng(),r,t.ep),b)
s.bT(a,b)
return s},
lN(a,b,c,d,e){return new A.at(c,d,a,b,e)},
k_(a,b,c){var s,r,q,p=null
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
case B.w:s=new A.bk(4286578432)
r=2
q=2
break
case B.x:s=new A.bk(4294940672)
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
q=0}return new A.at(r,q,b,c,s)},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i4:function i4(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c
_.e=!1},
i5:function i5(a){this.a=a},
at:function at(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=0},
mj(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
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
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(a,b){var _=this
_.a=a
_.b=null
_.c=!1
_.d=b},
mi(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
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
hl:function hl(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
mU(a){var s,r=A.js(4000,new A.iY(a),t.W),q=A.e([],t.az)
for(s=0;s<4000;++s);return new A.i6(q,new A.O(100,40,r,t.L))},
kH(a){var s,r,q,p,o
for(s=a.b,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.k(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.aY(A.hu(o.f))))return p}throw A.d("Solid")},
iq:function iq(a,b){this.a=a
this.d=b},
iY:function iY(a){this.a=a},
i6:function i6(a,b){this.a=a
this.b=b},
dG:function dG(a){this.a=a},
h8:function h8(a){this.a=a},
hp:function hp(){},
hq:function hq(a){this.a=a},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
jg(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.C))break
q=A.a_(q,b);++p}return p},
bH(a,b,c){var s=A.a_(a,b)
if(c.e.h(0,s)===B.C)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
bX(a,b){return new A.cW(a,b)},
dw(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.e([],t.D)
for(s=a2.length,r=a1.a,q=J.fU(r),p=t.q,o=t.t,n=0;n<a2.length;a2.length===s||(0,A.E)(a2),++n){m=a2[n]
l=A.e([],p)
k=A.e([],o)
for(j=q.gw(r),i=0;j.n();){h=j.gp(j)
g=m.a.L(h,a3)
if(g<1000){B.a.m(l,h)
B.a.m(k,g)
i+=g}}if(l.length===0){B.a.m(a0,m)
continue}for(f=0,e=0;e<k.length;++e,f=d){d=k[e]/i+f
B.a.j(k,e,d)}c=$.l4().a1()
for(j=k.length,h=l.length,b=B.A,a=-1,e=0;e<j;++e,a=g){g=k[e]
if(c>=a&&c<g){if(!(e<h))return A.b(l,e)
b=l[e]}}j=0===b.a&&0===b.b
if(j){B.a.m(a0,m)
continue}m.d1(b,a3)}for(s=q.gw(r),r=a3.e,q=a1.c;s.n();){p=s.gp(s)
if(r.h(0,p)===B.Q||r.h(0,p)===B.R)B.a.m(q,p)}return a0},
kQ(a,b){var s,r,q,p,o,n,m,l,k
B.a.ak(a,new A.jf())
if(0>=a.length)return A.b(a,0)
A.dw(a[0],$.lb(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.E)(s),++p)q.j(0,s[p],B.au)
for(s=A.kf(a,1,null,A.ax(a).c),r=s.$ti,s=new A.aP(s,s.gl(s),r.i("aP<ar.E>")),r=r.i("ar.E"),o=t.h0,n=2;s.n();){m=r.a(s.d)
l=m.a
k=J.ao(l)
if(k.gl(l)<30){if(n>0){l=A.lC($.ji(),!0,o)
l.push($.jS())}else l=$.ji()
if(!B.a.I(A.dw(m,l,b),$.jS()))--n}else if(k.gl(l)<60)A.dw(m,$.l7(),b)
else if(k.gl(l)<100)A.dw(m,$.l6(),b)
else A.dw(m,$.l5(),b)}if(n===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.E)(s),++p)q.j(0,s[p],B.av)}},
aB:function aB(){},
eI:function eI(){},
cf:function cf(a){this.$ti=a},
cL:function cL(a){this.$ti=a},
dH:function dH(){},
dy:function dy(){},
dL:function dL(){},
cb:function cb(a){this.a=a},
cW:function cW(a,b){this.a=a
this.b=b},
je:function je(){},
ja:function ja(){},
jc:function jc(){},
j9:function j9(){},
jb:function jb(){},
jd:function jd(){},
j8:function j8(){},
jf:function jf(){},
lr(a){var s=t.q
return new A.a3(a,A.e([],s),A.e([],s),A.hi(a))},
hi(a){var s,r,q=J.ao(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gl(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.k(B.d.D(p/q.gl(a)),B.d.D(o/q.gl(a)))},
cu:function cu(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
h1:function h1(a,b){this.a=a
this.b=b},
h2:function h2(){},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hh:function hh(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
dY:function dY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
hA:function hA(a,b){this.a=a
this.b=b},
hT:function hT(){},
hv:function hv(a){this.a=a},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hV:function hV(){},
b4:function b4(a){this.b=a},
cO:function cO(a){this.b=a},
i2:function i2(a,b){this.b=a
this.a=b},
cN:function cN(a,b){this.a=a
this.b=b},
ia:function ia(a){this.a=a},
ib:function ib(){},
ic:function ic(a){this.a=a},
lQ(a){var s=new A.im(new A.bZ(null,null,null,t.fQ))
s.bU(a)
return s},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
aj:function aj(a){this.b=a},
fW:function fW(a,b){this.a=a
this.b=$
this.c=b},
fX:function fX(a){this.a=a},
lD(){var s=new A.hQ()
s.bS()
return s},
hQ:function hQ(){this.a=$},
hR:function hR(a){this.a=a},
nc(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
ni(a){return A.T(A.k3(a))},
aX(a,b){if(a===$)throw A.d(new A.cA("Field '"+b+"' has not been initialized."))
return a},
fS(a,b){if(a!==$)throw A.d(A.k3(b))},
kv(a){var s,r,q
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.jG(a))return a
s=Object.getPrototypeOf(a)
if(s===Object.prototype||s===null)return A.aZ(a)
if(Array.isArray(a)){r=[]
for(q=0;q<a.length;++q)r.push(A.kv(a[q]))
return r}return a},
aZ(a){var s,r,q,p,o
if(a==null)return null
s=A.bs(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.E)(r),++p){o=r[p]
s.j(0,o,A.kv(a[o]))}return s},
nf(a){A.ay(a)
$.jP().a3(a,$.jQ())
B.aI.bz(window,A.kK())},
na(){var s,r,q,p,o,n
new A.fW(A.lD(),A.e(["spell","stats","inventory"],t.s)).cT()
s=$.jP()
r=t.w
q=A.e([],r)
r=A.e([],r)
p=A.e([],t.f_)
o=A.e([],t.eU)
n=s.cx.a
new A.c_(n,A.B(n).i("c_<1>")).cZ(new A.dU(s,q,r,p,o).gcO())
B.aI.bz(window,A.kK())}},J={
jN(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j1(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.jM==null){A.n1()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.kh("Return interceptor for "+A.z(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iK
if(o==null)o=$.iK=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.n9(a)
if(p!=null)return p
if(typeof a=="function")return B.bc
s=Object.getPrototypeOf(a)
if(s==null)return B.aw
if(s===Object.prototype)return B.aw
if(typeof q=="function"){o=$.iK
if(o==null)o=$.iK=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.a8,enumerable:false,writable:true,configurable:true})
return B.a8}return B.a8},
lx(a,b){if(a<0||a>4294967295)throw A.d(A.cM(a,0,4294967295,"length",null))
return J.lz(new Array(a),b)},
ly(a,b){if(a<0)throw A.d(A.cg("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("t<0>"))},
lz(a,b){return J.k2(A.e(a,b.i("t<0>")),b)},
k2(a,b){a.fixed$length=Array
return a},
c8(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cx.prototype
return J.dZ.prototype}if(typeof a=="string")return J.bO.prototype
if(a==null)return J.cy.prototype
if(typeof a=="boolean")return J.cw.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof A.y)return a
return J.j1(a)},
ao(a){if(typeof a=="string")return J.bO.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof A.y)return a
return J.j1(a)},
fU(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof A.y)return a
return J.j1(a)},
j0(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof A.y)return a
return J.j1(a)},
Q(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.c8(a).E(a,b)},
jU(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.n6(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ao(a).h(a,b)},
ld(a,b,c,d){return J.j0(a).cE(a,b,c,d)},
jV(a,b){return J.fU(a).q(a,b)},
le(a,b){return J.fU(a).C(a,b)},
ca(a){return J.c8(a).gt(a)},
aG(a){return J.fU(a).gw(a)},
a0(a){return J.ao(a).gl(a)},
lf(a){return J.j0(a).gaL(a)},
lg(a,b,c){return J.fU(a).bu(a,b,c)},
bI(a){return J.c8(a).k(a)},
a:function a(){},
cw:function cw(){},
cy:function cy(){},
bq:function bq(){},
eg:function eg(){},
cU:function cU(){},
aN:function aN(){},
t:function t(a){this.$ti=a},
hB:function hB(a){this.$ti=a},
ch:function ch(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cz:function cz(){},
cx:function cx(){},
dZ:function dZ(){},
bO:function bO(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.jp.prototype={}
J.a.prototype={
E(a,b){return a===b},
gt(a){return A.bR(a)},
k(a){return"Instance of '"+A.hX(a)+"'"}}
J.cw.prototype={
k(a){return String(a)},
bJ(a,b){return b||a},
gt(a){return a?519018:218159},
$iM:1}
J.cy.prototype={
E(a,b){return null==b},
k(a){return"null"},
gt(a){return 0},
$iL:1}
J.bq.prototype={
gt(a){return 0},
k(a){return String(a)}}
J.eg.prototype={}
J.cU.prototype={}
J.aN.prototype={
k(a){var s=a[$.kS()]
if(s==null)return this.bP(a)
return"JavaScript function for "+J.bI(s)},
$ibn:1}
J.t.prototype={
m(a,b){A.ax(a).c.a(b)
if(!!a.fixed$length)A.T(A.x("add"))
a.push(b)},
by(a,b){var s
if(!!a.fixed$length)A.T(A.x("removeAt"))
s=a.length
if(b>=s)throw A.d(A.k8(b,null))
return a.splice(b,1)[0]},
a2(a,b){var s
if(!!a.fixed$length)A.T(A.x("remove"))
for(s=0;s<a.length;++s)if(J.Q(a[s],b)){a.splice(s,1)
return!0}return!1},
ad(a,b){A.ax(a).i("h<1>").a(b)
if(!!a.fixed$length)A.T(A.x("addAll"))
this.bX(a,b)
return},
bX(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.cl(a))
for(r=0;r<s;++r)a.push(b[r])},
bu(a,b,c){var s=A.ax(a)
return new A.cF(a,s.v(c).i("1(2)").a(b),s.i("@<1>").v(c).i("cF<1,2>"))},
q(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
gbN(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.d(A.lu())
throw A.d(A.lw())},
aU(a,b,c,d){var s,r,q,p
A.ax(a).i("h<1>").a(d)
if(!!a.immutable$list)A.T(A.x("setRange"))
A.jx(b,c,a.length)
s=c-b
if(s===0)return
A.hZ(0,"skipCount")
r=d
q=J.ao(r)
if(s>q.gl(r))throw A.d(A.lv())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
ak(a,b){var s=A.ax(a)
s.i("i(1,1)?").a(b)
if(!!a.immutable$list)A.T(A.x("sort"))
A.lL(a,b,s.c)},
bM(a){var s,r,q,p
if(!!a.immutable$list)A.T(A.x("shuffle"))
s=a.length
for(;s>1;){r=B.q.A(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
cS(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.Q(a[s],b))return s}return-1},
I(a,b){var s
for(s=0;s<a.length;++s)if(J.Q(a[s],b))return!0
return!1},
k(a){return A.jo(a,"[","]")},
gw(a){return new J.ch(a,a.length,A.ax(a).i("ch<1>"))},
gt(a){return A.bR(a)},
gl(a){return a.length},
sl(a,b){if(!!a.fixed$length)A.T(A.x("set length"))
if(b>a.length)A.ax(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.c7(a,b))
return a[b]},
j(a,b,c){A.ax(a).c.a(c)
if(!!a.immutable$list)A.T(A.x("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.c7(a,b))
a[b]=c},
$im:1,
$ih:1,
$ip:1}
J.hB.prototype={}
J.ch.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.E(q))
s=r.c
if(s>=p){r.sb4(null)
return!1}r.sb4(q[s]);++r.c
return!0},
sb4(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
J.cz.prototype={
cK(a,b){var s
A.ay(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaI(b)
if(this.gaI(a)===s)return 0
if(this.gaI(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaI(a){return a===0?1/a<0:a<0},
a4(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.x(""+a+".toInt()"))},
cI(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.x(""+a+".ceil()"))},
ag(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.x(""+a+".floor()"))},
D(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.x(""+a+".round()"))},
ah(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
da(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.cM(b,2,36,"radix",null))
s=a.toString(b)
if(B.y.cJ(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.T(A.x("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.y.aT("0",p)},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
bQ(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bd(a,b)},
R(a,b){return(a|0)===a?a/b|0:this.bd(a,b)},
bd(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.x("Result of truncating division is "+A.z(s)+": "+A.z(a)+" ~/ "+b))},
co(a,b){var s
if(a>0)s=this.cn(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cn(a,b){return b>31?0:a>>>b},
$iF:1,
$iK:1}
J.cx.prototype={$ii:1}
J.dZ.prototype={}
J.bO.prototype={
cJ(a,b){if(b<0)throw A.d(A.c7(a,b))
if(b>=a.length)A.T(A.c7(a,b))
return a.charCodeAt(b)},
u(a,b){return a+b},
aT(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.b7)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bw(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aT(c,s)+a},
k(a){return a},
gt(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return a.length},
h(a,b){if(b>=a.length)throw A.d(A.c7(a,b))
return a[b]},
$ir:1}
A.cA.prototype={
k(a){var s="LateInitializationError: "+this.a
return s}}
A.i3.prototype={}
A.m.prototype={}
A.ar.prototype={
gw(a){var s=this
return new A.aP(s,s.gl(s),A.B(s).i("aP<ar.E>"))}}
A.cR.prototype={
gca(){var s=J.a0(this.a),r=this.c
if(r==null||r>s)return s
return r},
gcp(){var s=J.a0(this.a),r=this.b
if(r>s)return s
return r},
gl(a){var s,r=J.a0(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.dl()
return s-q},
q(a,b){var s=this,r=s.gcp()+b
if(b<0||r>=s.gca())throw A.d(A.H(b,s,"index",null,null))
return J.jV(s.a,r)}}
A.aP.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.ao(q),o=p.gl(q)
if(r.b!==o)throw A.d(A.cl(q))
s=r.c
if(s>=o){r.sZ(null)
return!1}r.sZ(p.q(q,s));++r.c
return!0},
sZ(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
A.bv.prototype={
gw(a){var s=A.B(this)
return new A.cE(J.aG(this.a),this.b,s.i("@<1>").v(s.Q[1]).i("cE<1,2>"))},
gl(a){return J.a0(this.a)}}
A.cr.prototype={$im:1}
A.cE.prototype={
n(){var s=this,r=s.b
if(r.n()){s.sZ(s.c.$1(r.gp(r)))
return!0}s.sZ(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
sZ(a){this.a=this.$ti.i("2?").a(a)}}
A.cF.prototype={
gl(a){return J.a0(this.a)},
q(a,b){return this.b.$1(J.jV(this.a,b))}}
A.aw.prototype={
gw(a){return new A.cV(J.aG(this.a),this.b,this.$ti.i("cV<1>"))}}
A.cV.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.aY(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.a4.prototype={}
A.cm.prototype={
k(a){return A.jt(this)},
$iG:1}
A.cn.prototype={
gl(a){return this.a},
aD(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.aD(0,b))return null
return this.b[A.a8(b)]},
C(a,b){var s,r,q,p,o,n=this.$ti
n.i("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.a8(s[p])
b.$2(o,n.a(q[o]))}}}
A.ih.prototype={
H(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.cK.prototype={
k(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.e_.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eE.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hU.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.cs.prototype={}
A.da.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iau:1}
A.bj.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.kR(r==null?"unknown":r)+"'"},
$ibn:1,
gdj(){return this},
$C:"$1",
$R:1,
$D:null}
A.dI.prototype={$C:"$0",$R:0}
A.dJ.prototype={$C:"$2",$R:2}
A.ew.prototype={}
A.es.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.kR(s)+"'"}}
A.bK.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bK))return!1
return this.$_target===b.$_target&&this.a===b.a},
gt(a){return(A.kL(this.a)^A.bR(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.hX(t.K.a(this.a))+"'")}}
A.ek.prototype={
k(a){return"RuntimeError: "+this.a}}
A.eJ.prototype={
k(a){return"Assertion failed: "+A.dO(this.a)}}
A.br.prototype={
gl(a){return this.a},
gJ(a){return new A.cB(this,A.B(this).i("cB<1>"))},
gaR(a){var s=this,r=A.B(s)
return A.k5(s.gJ(s),new A.hC(s),r.c,r.Q[1])},
aD(a,b){var s=this.cV(b)
return s},
cV(a){var s=this,r=s.d
if(r==null)return!1
return s.aH(s.at(r,s.aG(a)),a)>=0},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.au(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.au(p,b)
q=r==null?n:r.b
return q}else return o.cW(b)},
cW(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.at(p,q.aG(a))
r=q.aH(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.B(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.aY(s==null?q.b=q.ax():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.aY(r==null?q.c=q.ax():r,b,c)}else q.cX(b,c)},
cX(a,b){var s,r,q,p,o=this,n=A.B(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.ax()
r=o.aG(a)
q=o.at(s,r)
if(q==null)o.aB(s,r,[o.ay(a,b)])
else{p=o.aH(q,a)
if(p>=0)q[p].b=b
else q.push(o.ay(a,b))}},
C(a,b){var s,r,q=this
A.B(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.cl(q))
s=s.c}},
aY(a,b,c){var s,r=this,q=A.B(r)
q.c.a(b)
q.Q[1].a(c)
s=r.au(a,b)
if(s==null)r.aB(a,b,r.ay(b,c))
else s.b=c},
ay(a,b){var s=this,r=A.B(s),q=new A.hE(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&67108863
return q},
aG(a){return J.ca(a)&0x3ffffff},
aH(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Q(a[r].a,b))return r
return-1},
k(a){return A.jt(this)},
au(a,b){return a[b]},
at(a,b){return a[b]},
aB(a,b,c){a[b]=c},
c7(a,b){delete a[b]},
ax(){var s="<non-identifier-key>",r=Object.create(null)
this.aB(r,s,r)
this.c7(r,s)
return r},
$ik4:1}
A.hC.prototype={
$1(a){var s=this.a,r=A.B(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.B(this.a).i("2(1)")}}
A.hE.prototype={}
A.cB.prototype={
gl(a){return this.a.a},
gw(a){var s=this.a,r=new A.cC(s,s.r,this.$ti.i("cC<1>"))
r.c=s.e
return r}}
A.cC.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.cl(q))
s=r.c
if(s==null){r.saX(null)
return!1}else{r.saX(s.a)
r.c=s.c
return!0}},
saX(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
A.j2.prototype={
$1(a){return this.a(a)},
$S:36}
A.j3.prototype={
$2(a,b){return this.a(a,b)},
$S:24}
A.j4.prototype={
$1(a){return this.a(A.a8(a))},
$S:15}
A.by.prototype={$iah:1}
A.bQ.prototype={
gl(a){return a.length},
$iu:1}
A.bx.prototype={
h(a,b){A.aW(b,a,a.length)
return a[b]},
j(a,b,c){A.mc(c)
A.aW(b,a,a.length)
a[b]=c},
$im:1,
$ih:1,
$ip:1}
A.cH.prototype={
j(a,b,c){A.c2(c)
A.aW(b,a,a.length)
a[b]=c},
$im:1,
$ih:1,
$ip:1}
A.cG.prototype={$ijn:1}
A.e6.prototype={
h(a,b){A.aW(b,a,a.length)
return a[b]}}
A.e7.prototype={
h(a,b){A.aW(b,a,a.length)
return a[b]}}
A.e8.prototype={
h(a,b){A.aW(b,a,a.length)
return a[b]}}
A.e9.prototype={
h(a,b){A.aW(b,a,a.length)
return a[b]}}
A.ea.prototype={
h(a,b){A.aW(b,a,a.length)
return a[b]}}
A.cI.prototype={
gl(a){return a.length},
h(a,b){A.aW(b,a,a.length)
return a[b]}}
A.eb.prototype={
gl(a){return a.length},
h(a,b){A.aW(b,a,a.length)
return a[b]},
$ilP:1}
A.d3.prototype={}
A.d4.prototype={}
A.d5.prototype={}
A.d6.prototype={}
A.as.prototype={
i(a){return A.iR(v.typeUniverse,this,a)},
v(a){return A.m9(v.typeUniverse,this,a)}}
A.f1.prototype={}
A.fE.prototype={
k(a){return A.Z(this.a,null)}}
A.eY.prototype={
k(a){return this.a}}
A.df.prototype={$ib7:1}
A.is.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.ir.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:37}
A.it.prototype={
$0(){this.a.$0()},
$S:4}
A.iu.prototype={
$0(){this.a.$0()},
$S:4}
A.iP.prototype={
bV(a,b){if(self.setTimeout!=null)self.setTimeout(A.du(new A.iQ(this,b),0),a)
else throw A.d(A.x("`setTimeout()` not found."))}}
A.iQ.prototype={
$0(){this.b.$0()},
$S:0}
A.eK.prototype={
af(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.aZ(b)
else{s=r.a
if(q.i("aC<1>").b(b))s.b0(b)
else s.ap(q.c.a(b))}},
bl(a,b){var s=this.a
if(this.b)s.X(a,b)
else s.b_(a,b)}}
A.iT.prototype={
$1(a){return this.a.$2(0,a)},
$S:21}
A.iU.prototype={
$2(a,b){this.a.$2(1,new A.cs(a,t.l.a(b)))},
$S:17}
A.iX.prototype={
$2(a,b){this.a(A.c2(a),b)},
$S:11}
A.cj.prototype={
k(a){return A.z(this.a)},
$iC:1,
ga7(){return this.b}}
A.eP.prototype={
bl(a,b){var s
A.iZ(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.d(A.aS("Future already completed"))
s.b_(a,b)}}
A.bC.prototype={
af(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.aS("Future already completed"))
s.aZ(r.i("1/").a(b))},
cL(a){return this.af(a,null)}}
A.bF.prototype={
d_(a){if((this.c&15)!==6)return!0
return this.b.b.aN(t.al.a(this.d),a.a,t.cJ,t.K)},
cQ(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.d6(q,m,a.b,o,n,t.l)
else p=l.aN(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.eK.b(A.bf(s))){if((r.c&1)!==0)throw A.d(A.cg("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cg("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.J.prototype={
aO(a,b,c){var s,r,q,p=this.$ti
p.v(c).i("1/(2)").a(a)
s=$.D
if(s===B.n){if(b!=null&&!t.C.b(b)&&!t.y.b(b))throw A.d(A.jW(b,"onError",u.c))}else{c.i("@<0/>").v(p.c).i("1(2)").a(a)
if(b!=null)b=A.mD(b,s)}r=new A.J(s,c.i("J<0>"))
q=b==null?1:3
this.al(new A.bF(r,q,a,b,p.i("@<1>").v(c).i("bF<1,2>")))
return r},
bB(a,b){return this.aO(a,null,b)},
be(a,b,c){var s,r=this.$ti
r.v(c).i("1/(2)").a(a)
s=new A.J($.D,c.i("J<0>"))
this.al(new A.bF(s,19,a,b,r.i("@<1>").v(c).i("bF<1,2>")))
return s},
cl(a){this.a=this.a&1|16
this.c=a},
an(a){this.a=a.a&30|this.a&1
this.c=a.c},
al(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.al(a)
return}r.an(s)}A.c5(null,null,r.b,t.M.a(new A.iy(r,a)))}},
bb(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.bb(a)
return}m.an(n)}l.a=m.ac(a)
A.c5(null,null,m.b,t.M.a(new A.iF(l,m)))}},
ab(){var s=t.F.a(this.c)
this.c=null
return this.ac(s)},
ac(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
c2(a){var s,r,q,p=this
p.a^=2
try{a.aO(new A.iB(p),new A.iC(p),t.P)}catch(q){s=A.bf(q)
r=A.bd(q)
A.kP(new A.iD(p,s,r))}},
ap(a){var s,r=this
r.$ti.c.a(a)
s=r.ab()
r.a=8
r.c=a
A.c1(r,s)},
X(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.ab()
this.cl(A.fZ(a,b))
A.c1(this,s)},
aZ(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aC<1>").b(a)){this.b0(a)
return}this.c_(s.c.a(a))},
c_(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.c5(null,null,s.b,t.M.a(new A.iA(s,a)))},
b0(a){var s=this,r=s.$ti
r.i("aC<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.c5(null,null,s.b,t.M.a(new A.iE(s,a)))}else A.jz(a,s)
return}s.c2(a)},
b_(a,b){this.a^=2
A.c5(null,null,this.b,t.M.a(new A.iz(this,a,b)))},
$iaC:1}
A.iy.prototype={
$0(){A.c1(this.a,this.b)},
$S:0}
A.iF.prototype={
$0(){A.c1(this.b,this.a.a)},
$S:0}
A.iB.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.ap(p.$ti.c.a(a))}catch(q){s=A.bf(q)
r=A.bd(q)
p.X(s,r)}},
$S:5}
A.iC.prototype={
$2(a,b){this.a.X(t.K.a(a),t.l.a(b))},
$S:12}
A.iD.prototype={
$0(){this.a.X(this.b,this.c)},
$S:0}
A.iA.prototype={
$0(){this.a.ap(this.b)},
$S:0}
A.iE.prototype={
$0(){A.jz(this.b,this.a)},
$S:0}
A.iz.prototype={
$0(){this.a.X(this.b,this.c)},
$S:0}
A.iI.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.d5(t.fO.a(q.d),t.z)}catch(p){s=A.bf(p)
r=A.bd(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.fZ(s,r)
o.b=!0
return}if(l instanceof A.J&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.bB(new A.iJ(n),t.z)
q.b=!1}},
$S:0}
A.iJ.prototype={
$1(a){return this.a},
$S:19}
A.iH.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.aN(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bf(l)
r=A.bd(l)
q=this.a
q.c=A.fZ(s,r)
q.b=!0}},
$S:0}
A.iG.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.d_(s)&&p.a.e!=null){p.c=p.a.cQ(s)
p.b=!1}}catch(o){r=A.bf(o)
q=A.bd(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.fZ(r,q)
n.b=!0}},
$S:0}
A.eL.prototype={}
A.bz.prototype={
gl(a){var s={},r=new A.J($.D,t.fJ)
s.a=0
this.aK(new A.i8(s,this),!0,new A.i9(s,r),r.gc4())
return r}}
A.i8.prototype={
$1(a){A.B(this.b).c.a(a);++this.a.a},
$S(){return A.B(this.b).i("~(1)")}}
A.i9.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.ab()
r.c.a(q)
s.a=8
s.c=q
A.c1(s,p)},
$S:0}
A.aT.prototype={}
A.db.prototype={
gcg(){var s,r=this
if((r.b&8)===0)return A.B(r).i("ba<1>?").a(r.a)
s=A.B(r)
return s.i("ba<1>?").a(s.i("fr<1>").a(r.a).gaS())},
cb(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.aF(A.B(q).i("aF<1>"))
return A.B(q).i("aF<1>").a(s)}r=A.B(q)
s=r.i("fr<1>").a(q.a).gaS()
return r.i("aF<1>").a(s)},
gcr(){var s=this.a
if((this.b&8)!==0)s=t.fv.a(s).gaS()
return A.B(this).i("c0<1>").a(s)},
c0(){if((this.b&4)!==0)return new A.aR("Cannot add event after closing")
return new A.aR("Cannot add event while adding a stream")},
cq(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=A.B(l)
k.i("~(1)?").a(a)
t.Z.a(c)
if((l.b&3)!==0)throw A.d(A.aS("Stream has already been listened to."))
s=$.D
r=d?1:0
t.a7.v(k.c).i("1(2)").a(a)
A.lV(s,b)
q=c==null?A.mS():c
p=t.M
p.a(q)
o=new A.c0(l,a,s,r,k.i("c0<1>"))
n=l.gcg()
r=l.b|=1
if((r&8)!==0){m=k.i("fr<1>").a(l.a)
m.saS(o)
m.d3(0)}else l.a=o
o.cm(n)
k=p.a(new A.iO(l))
s=o.e
o.e=s|32
k.$0()
o.e&=4294967263
o.b1((s&4)!==0)
return o},
$ikd:1,
$ikn:1,
$ibE:1}
A.iO.prototype={
$0(){A.jK(this.a.d)},
$S:0}
A.eM.prototype={
aA(a){var s=this.$ti
s.c.a(a)
this.gcr().bZ(new A.bD(a,s.i("bD<1>")))}}
A.bZ.prototype={}
A.c_.prototype={
gt(a){return(A.bR(this.a)^892482866)>>>0},
E(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.c_&&b.a===this.a}}
A.c0.prototype={
b9(){var s=this.x,r=A.B(s)
r.i("aT<1>").a(this)
if((s.b&8)!==0)r.i("fr<1>").a(s.a).dn(0)
A.jK(s.e)},
ba(){var s=this.x,r=A.B(s)
r.i("aT<1>").a(this)
if((s.b&8)!==0)r.i("fr<1>").a(s.a).d3(0)
A.jK(s.f)}}
A.cX.prototype={
cm(a){var s=this
A.B(s).i("ba<1>?").a(a)
if(a==null)return
s.saz(a)
if(a.c!=null){s.e|=64
a.aj(s)}},
b9(){},
ba(){},
bZ(a){var s=this,r=A.B(s),q=r.i("aF<1>?").a(s.r)
if(q==null)q=new A.aF(r.i("aF<1>"))
s.saz(q)
q.m(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.aj(s)}},
aA(a){var s,r=this,q=A.B(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.bA(r.a,a,q)
r.e&=4294967263
r.b1((s&4)!==0)},
b1(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.saz(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.b9()
else q.ba()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.aj(q)},
saz(a){this.r=A.B(this).i("ba<1>?").a(a)},
$iaT:1,
$ibE:1}
A.dc.prototype={
aK(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.cq(s.i("~(1)?").a(a),d,c,b===!0)},
cZ(a){return this.aK(a,null,null,null)}}
A.eT.prototype={}
A.bD.prototype={}
A.ba.prototype={
aj(a){var s,r=this
r.$ti.i("bE<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.kP(new A.iL(r,a))
r.a=1}}
A.iL.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("bE<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.B(r).i("bE<1>").a(s).aA(r.b)},
$S:0}
A.aF.prototype={
m(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.fs.prototype={}
A.di.prototype={$iki:1}
A.iW.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.k(0)
throw s},
$S:0}
A.fj.prototype={
d7(a){var s,r,q,p,o
t.M.a(a)
try{if(B.n===$.D){a.$0()
return}A.kA(null,null,this,a,t.H)}catch(q){s=A.bf(q)
r=A.bd(q)
p=t.K.a(s)
o=t.l.a(r)
A.fT(p,o)}},
bA(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.n===$.D){a.$1(b)
return}A.kB(null,null,this,a,b,t.H,c)}catch(q){s=A.bf(q)
r=A.bd(q)
p=t.K.a(s)
o=t.l.a(r)
A.fT(p,o)}},
bj(a){return new A.iM(this,t.M.a(a))},
cH(a,b){return new A.iN(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
d5(a,b){b.i("0()").a(a)
if($.D===B.n)return a.$0()
return A.kA(null,null,this,a,b)},
aN(a,b,c,d){c.i("@<0>").v(d).i("1(2)").a(a)
d.a(b)
if($.D===B.n)return a.$1(b)
return A.kB(null,null,this,a,b,c,d)},
d6(a,b,c,d,e,f){d.i("@<0>").v(e).v(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.D===B.n)return a.$2(b,c)
return A.mE(null,null,this,a,b,c,d,e,f)},
aM(a,b,c,d){return b.i("@<0>").v(c).v(d).i("1(2,3)").a(a)}}
A.iM.prototype={
$0(){return this.a.d7(this.b)},
$S:0}
A.iN.prototype={
$1(a){var s=this.c
return this.a.bA(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.d0.prototype={
gw(a){var s=this,r=new A.d1(s,s.r,s.$ti.i("d1<1>"))
r.c=s.e
return r},
gl(a){return this.a},
I(a,b){var s=this.c5(b)
return s},
c5(a){var s=this.d
if(s==null)return!1
return this.b5(s[a.gt(a)&1073741823],a)>=0},
m(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.b2(s==null?q.b=A.jA():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.b2(r==null?q.c=A.jA():r,b)}else return q.c3(0,b)},
c3(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.jA()
r=J.ca(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.ao(b)]
else{if(p.b5(q,b)>=0)return!1
q.push(p.ao(b))}return!0},
b2(a,b){this.$ti.c.a(b)
if(t.hg.a(a[b])!=null)return!1
a[b]=this.ao(b)
return!0},
ao(a){var s=this,r=new A.f8(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
b5(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Q(a[r].a,b))return r
return-1}}
A.f8.prototype={}
A.d1.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.cl(q))
else if(r==null){s.sb3(null)
return!1}else{s.sb3(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sb3(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
A.f.prototype={
gw(a){return new A.aP(a,this.gl(a),A.az(a).i("aP<f.E>"))},
q(a,b){return this.h(a,b)},
cN(a,b,c,d){var s,r=A.az(a)
d=r.i("f.E").a(r.i("f.E?").a(d))
A.jx(b,c,this.gl(a))
for(s=b;s<c;++s)this.j(a,s,d)},
k(a){return A.jo(a,"[","]")}}
A.cD.prototype={}
A.hH.prototype={
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
for(s=J.aG(this.gJ(a)),q=q.i("w.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gbn(a){return J.lg(this.gJ(a),new A.hK(a),A.az(a).i("bP<w.K,w.V>"))},
gl(a){return J.a0(this.gJ(a))},
k(a){return A.jt(a)},
$iG:1}
A.hK.prototype={
$1(a){var s,r=this.a,q=A.az(r)
q.i("w.K").a(a)
s=q.i("w.V")
return new A.bP(a,s.a(J.jU(r,a)),q.i("@<w.K>").v(s).i("bP<1,2>"))},
$S(){return A.az(this.a).i("bP<w.K,w.V>(w.K)")}}
A.cP.prototype={
k(a){return A.jo(this,"{","}")}}
A.d7.prototype={$im:1,$ih:1,$ikc:1}
A.dj.prototype={}
A.aK.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.aK&&this.a===b.a},
gt(a){return B.f.gt(this.a)},
k(a){var s,r,q,p,o,n=this.a,m=B.f.R(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.f.R(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.f.R(n,1e6)
p=q<10?"0":""
o=B.y.bw(B.f.k(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o}}
A.iv.prototype={}
A.C.prototype={
ga7(){return A.bd(this.$thrownJsError)}}
A.ci.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.dO(s)
return"Assertion failed"}}
A.b7.prototype={}
A.ec.prototype={
k(a){return"Throw of null."}}
A.aH.prototype={
gas(){return"Invalid argument"+(!this.a?"(s)":"")},
gar(){return""},
k(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gas()+o+m
if(!q.a)return l
s=q.gar()
r=A.dO(q.b)
return l+s+": "+r}}
A.bS.prototype={
gas(){return"RangeError"},
gar(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.z(q):""
else if(q==null)s=": Not greater than or equal to "+A.z(r)
else if(q>r)s=": Not in inclusive range "+A.z(r)+".."+A.z(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.z(r)
return s}}
A.dX.prototype={
gas(){return"RangeError"},
gar(){if(A.c2(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.eF.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.eD.prototype={
k(a){var s="UnimplementedError: "+this.a
return s}}
A.aR.prototype={
k(a){return"Bad state: "+this.a}}
A.dK.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.dO(s)+"."}}
A.ef.prototype={
k(a){return"Out of Memory"},
ga7(){return null},
$iC:1}
A.cQ.prototype={
k(a){return"Stack Overflow"},
ga7(){return null},
$iC:1}
A.dM.prototype={
k(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.ix.prototype={
k(a){return"Exception: "+this.a}}
A.h.prototype={
bu(a,b,c){var s=A.B(this)
return A.k5(this,s.v(c).i("1(h.E)").a(b),s.i("h.E"),c)},
C(a,b){var s
A.B(this).i("~(h.E)").a(b)
for(s=this.gw(this);s.n();)b.$1(s.gp(s))},
gl(a){var s,r=this.gw(this)
for(s=0;r.n();)++s
return s},
q(a,b){var s,r,q
A.hZ(b,"index")
for(s=this.gw(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.d(A.H(b,this,"index",null,r))},
k(a){return A.k1(this,"(",")")}}
A.V.prototype={}
A.bP.prototype={
k(a){return"MapEntry("+A.z(this.a)+": "+A.z(this.b)+")"}}
A.L.prototype={
gt(a){return A.y.prototype.gt.call(this,this)},
k(a){return"null"}}
A.y.prototype={$iy:1,
E(a,b){return this===b},
gt(a){return A.bR(this)},
k(a){return"Instance of '"+A.hX(this)+"'"},
toString(){return this.k(this)}}
A.fv.prototype={
k(a){return""},
$iau:1}
A.eu.prototype={
gl(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.n.prototype={}
A.fV.prototype={
gl(a){return a.length}}
A.dz.prototype={
k(a){return String(a)}}
A.dA.prototype={
k(a){return String(a)}}
A.dD.prototype={}
A.dE.prototype={
gaL(a){return new A.b8(a,"load",!1,t.b)}}
A.bh.prototype={
sN(a,b){a.height=b},
sO(a,b){a.width=b},
bI(a,b){return a.getContext(b)},
$ibh:1}
A.aA.prototype={
gl(a){return a.length}}
A.h9.prototype={
gl(a){return a.length}}
A.A.prototype={$iA:1}
A.co.prototype={
gl(a){return a.length}}
A.ha.prototype={}
A.ap.prototype={}
A.aJ.prototype={}
A.hb.prototype={
gl(a){return a.length}}
A.hc.prototype={
gl(a){return a.length}}
A.hd.prototype={
gl(a){return a.length},
h(a,b){return a[b]}}
A.bL.prototype={$ibL:1}
A.he.prototype={
k(a){return String(a)}}
A.cp.prototype={
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
A.cq.prototype={
k(a){var s,r=a.left
r.toString
r="Rectangle ("+A.z(r)+", "
s=a.top
s.toString
return r+A.z(s)+") "+A.z(this.gO(a))+" x "+A.z(this.gN(a))},
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
if(s===r){s=J.j0(b)
s=this.gO(a)===s.gO(b)&&this.gN(a)===s.gN(b)}else s=!1}else s=!1}else s=!1
return s},
gt(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.jv(r,s,this.gO(a),this.gN(a))},
gb6(a){return a.height},
gN(a){var s=this.gb6(a)
s.toString
return s},
gbf(a){return a.width},
gO(a){var s=this.gbf(a)
s.toString
return s},
$iaD:1}
A.dN.prototype={
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
A.hf.prototype={
gl(a){return a.length}}
A.N.prototype={
k(a){return a.localName},
gaL(a){return new A.b8(a,"load",!1,t.b)},
$iN:1}
A.j.prototype={$ij:1}
A.c.prototype={
cE(a,b,c,d){t.bw.a(c)
if(c!=null)this.bY(a,b,c,!1)},
bY(a,b,c,d){return a.addEventListener(b,A.du(t.bw.a(c),1),!1)},
$ic:1}
A.a9.prototype={$ia9:1}
A.dP.prototype={
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
A.dQ.prototype={
gl(a){return a.length}}
A.dS.prototype={
gl(a){return a.length}}
A.aa.prototype={$iaa:1}
A.ht.prototype={
gl(a){return a.length}}
A.bo.prototype={
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
A.bM.prototype={$ibM:1}
A.aO.prototype={$iaO:1}
A.hG.prototype={
k(a){return String(a)}}
A.bw.prototype={}
A.hM.prototype={
gl(a){return a.length}}
A.e2.prototype={
h(a,b){return A.aZ(a.get(A.a8(b)))},
C(a,b){var s,r
t.v.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.aZ(r.value[1]))}},
gJ(a){var s=A.e([],t.s)
this.C(a,new A.hO(s))
return s},
gl(a){return a.size},
$iG:1}
A.hO.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.e3.prototype={
h(a,b){return A.aZ(a.get(A.a8(b)))},
C(a,b){var s,r
t.v.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.aZ(r.value[1]))}},
gJ(a){var s=A.e([],t.s)
this.C(a,new A.hP(s))
return s},
gl(a){return a.size},
$iG:1}
A.hP.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.ab.prototype={$iab:1}
A.e4.prototype={
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
return s==null?this.bO(a):s},
$iq:1}
A.cJ.prototype={
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
A.ac.prototype={
gl(a){return a.length},
$iac:1}
A.eh.prototype={
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
A.ej.prototype={
h(a,b){return A.aZ(a.get(A.a8(b)))},
C(a,b){var s,r
t.v.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.aZ(r.value[1]))}},
gJ(a){var s=A.e([],t.s)
this.C(a,new A.i1(s))
return s},
gl(a){return a.size},
$iG:1}
A.i1.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.el.prototype={
gl(a){return a.length}}
A.a6.prototype={$ia6:1}
A.ep.prototype={
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
A.ae.prototype={$iae:1}
A.eq.prototype={
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
A.af.prototype={
gl(a){return a.length},
$iaf:1}
A.et.prototype={
h(a,b){return a.getItem(A.a8(b))},
C(a,b){var s,r,q
t.eA.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gJ(a){var s=A.e([],t.s)
this.C(a,new A.i7(s))
return s},
gl(a){return a.length},
$iG:1}
A.i7.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:16}
A.W.prototype={$iW:1}
A.a7.prototype={$ia7:1}
A.U.prototype={$iU:1}
A.ex.prototype={
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
A.ey.prototype={
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
A.ie.prototype={
gl(a){return a.length}}
A.ag.prototype={$iag:1}
A.ez.prototype={
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
A.ig.prototype={
gl(a){return a.length}}
A.aE.prototype={}
A.ik.prototype={
k(a){return String(a)}}
A.bW.prototype={$ibW:1}
A.eH.prototype={
gl(a){return a.length}}
A.bY.prototype={
bz(a,b){var s
t.c4.a(b)
this.cc(a)
s=A.kD(b,t.di)
s.toString
return this.ci(a,s)},
ci(a,b){return a.requestAnimationFrame(A.du(t.c4.a(b),1))},
cc(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iip:1}
A.eQ.prototype={
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
A.cY.prototype={
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
r=J.j0(b)
if(s===r.gO(b)){s=a.height
s.toString
r=s===r.gN(b)
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
return A.jv(p,s,r,q)},
gb6(a){return a.height},
gN(a){var s=a.height
s.toString
return s},
gbf(a){return a.width},
gO(a){var s=a.width
s.toString
return s}}
A.f2.prototype={
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
A.d2.prototype={
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
A.fn.prototype={
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
A.fw.prototype={
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
A.jl.prototype={}
A.cZ.prototype={
aK(a,b,c,d){var s=A.B(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.eZ(this.a,this.b,a,!1,s.c)}}
A.b8.prototype={}
A.d_.prototype={}
A.iw.prototype={
$1(a){return this.a.$1(t.h.a(a))},
$S:9}
A.o.prototype={
gw(a){return new A.ct(a,this.gl(a),A.az(a).i("ct<o.E>"))}}
A.ct.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sb7(J.jU(s.a,r))
s.c=r
return!0}s.sb7(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
sb7(a){this.d=this.$ti.i("1?").a(a)},
$iV:1}
A.eS.prototype={$ic:1,$iip:1}
A.eR.prototype={}
A.eU.prototype={}
A.eV.prototype={}
A.eW.prototype={}
A.eX.prototype={}
A.f_.prototype={}
A.f0.prototype={}
A.f3.prototype={}
A.f4.prototype={}
A.f9.prototype={}
A.fa.prototype={}
A.fb.prototype={}
A.fc.prototype={}
A.fd.prototype={}
A.fe.prototype={}
A.fh.prototype={}
A.fi.prototype={}
A.fk.prototype={}
A.d8.prototype={}
A.d9.prototype={}
A.fl.prototype={}
A.fm.prototype={}
A.fq.prototype={}
A.fx.prototype={}
A.fy.prototype={}
A.dd.prototype={}
A.de.prototype={}
A.fA.prototype={}
A.fB.prototype={}
A.fI.prototype={}
A.fJ.prototype={}
A.fK.prototype={}
A.fL.prototype={}
A.fM.prototype={}
A.fN.prototype={}
A.fO.prototype={}
A.fP.prototype={}
A.fQ.prototype={}
A.fR.prototype={}
A.f5.prototype={
A(a){if(a<=0||a>4294967296)throw A.d(A.lH("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
a1(){return Math.random()},
$ilG:1}
A.ak.prototype={$iak:1}
A.e0.prototype={
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
A.ed.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){t.ck.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ih:1,
$ip:1}
A.hW.prototype={
gl(a){return a.length}}
A.ev.prototype={
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
gaL(a){return new A.b8(a,"load",!1,t.b)}}
A.am.prototype={$iam:1}
A.eA.prototype={
gl(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){t.cM.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ih:1,
$ip:1}
A.f6.prototype={}
A.f7.prototype={}
A.ff.prototype={}
A.fg.prototype={}
A.ft.prototype={}
A.fu.prototype={}
A.fC.prototype={}
A.fD.prototype={}
A.h_.prototype={
gl(a){return a.length}}
A.dB.prototype={
h(a,b){return A.aZ(a.get(A.a8(b)))},
C(a,b){var s,r
t.v.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.aZ(r.value[1]))}},
gJ(a){var s=A.e([],t.s)
this.C(a,new A.h0(s))
return s},
gl(a){return a.size},
$iG:1}
A.h0.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.dC.prototype={
gl(a){return a.length}}
A.b0.prototype={}
A.ee.prototype={
gl(a){return a.length}}
A.eO.prototype={}
A.dF.prototype={$idF:1}
A.dT.prototype={$idT:1}
A.ei.prototype={$iei:1}
A.bT.prototype={
bk(a,b){return a.bindVertexArray(b)},
bi(a,b,c){return a.bindBuffer(b,c)},
ae(a,b,c){return a.bindFramebuffer(b,c)},
F(a,b,c){return a.bindTexture(b,c)},
cM(a,b){return a.deleteTexture(b)},
bq(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ai(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.jI(g)){s.cs(a,b,c,d,e,f,g,h,i,j)
return}if(t.fS.b(g)&&h==null&&r&&j==null){s.ct(a,b,c,d,e,f,g)
return}if(t.E.b(g)&&h==null&&r&&j==null){s.cu(a,b,c,d,e,f,g)
return}if(t.dz.b(g)&&h==null&&r&&j==null){s.cv(a,b,c,d,e,f,g)
return}throw A.d(A.cg("Incorrect number or type of arguments",null))},
d9(a,b,c,d,e,f,g){return this.ai(a,b,c,d,e,f,g,null,null,null)},
cs(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
ct(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cu(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cv(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
dd(a,b,c){return a.uniform1f(b,c)},
de(a,b,c){return a.uniform1i(b,c)},
df(a,b,c,d){return a.uniform2f(b,c,d)},
dg(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dh(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
di(a,b){return a.useProgram(b)},
$ibT:1}
A.aU.prototype={$iaU:1}
A.eC.prototype={$ieC:1}
A.eG.prototype={$ieG:1}
A.er.prototype={
gl(a){return a.length},
h(a,b){var s
if(b>>>0!==b||b>=a.length)throw A.d(A.H(b,a,null,null,null))
s=A.aZ(a.item(b))
s.toString
return s},
j(a,b,c){t.eO.a(c)
throw A.d(A.x("Cannot assign element of immutable List."))},
q(a,b){return this.h(a,b)},
$im:1,
$ih:1,
$ip:1}
A.fo.prototype={}
A.fp.prototype={}
A.dW.prototype={
aq(a){var s=this.b
if(!(a>=0&&a<s.length))return A.b(s,a)
s=s[a]
return s==null?this.$ti.c.a(null):s},
gl(a){return this.c},
a2(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.ce(b)
if(s<0)return!1;++p.d
r=p.c-1
q=p.aq(r)
B.a.j(p.b,r,null)
p.c=r
if(s<r)if(p.a.$2(q,b)<=0)p.am(q,s)
else p.c1(q,s)
return!0},
cw(){var s,r,q=this.$ti,p=A.e([],q.i("t<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
k(a){var s=this.b
return A.k1(A.kf(s,0,A.iZ(this.c,"count",t.S),A.ax(s).c),"(",")")},
bW(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.aQ(q,null,!1,n.i("1?"))
B.a.aU(p,0,o.c,o.b)
o.sbc(p)}o.am(b,o.c++)},
ce(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.aq(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.Q(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
am(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.f.R(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.G()
if(q>0)break
B.a.j(o.b,b,p)}B.a.j(o.b,b,a)},
c1(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.$ti.c
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
if(p<q){j=i.aq(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sbc(a){this.b=this.$ti.i("p<1?>").a(a)}}
A.bk.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.bk&&b.a===this.a},
gt(a){return B.f.gt(this.a)},
k(a){return"Color(0x"+B.y.bw(B.f.da(this.a,16),8,"0")+")"}}
A.O.prototype={
cR(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.f.a4(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.d(A.aS(b.k(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.f.a4(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.d(A.jm(b.k(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
P(a,b,c){var s=B.f.a4(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
B(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.f.a4(d*s+c)
q=p.c
if(r>=q.length)throw A.d(A.jm("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
k(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.f.a4(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.z(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.cc.prototype={
bx(){var s=this.c
return new A.k(B.d.D(s.d/24),B.d.D(s.e/36))},
$ihs:1}
A.h4.prototype={}
A.dU.prototype={
aF(a){return this.cP(t.p.a(a))},
cP(a){var s=0,r=A.dr(t.H),q,p=this,o
var $async$aF=A.dt(function(b,c){if(b===1)return A.dk(c,r)
while(true)switch(s){case 0:o=p.e
if(o.length>3){s=1
break}B.a.m(o,a)
if(p.f){s=1
break}p.aa()
case 1:return A.dl(q,r)}})
return A.dm($async$aF,r)},
aa(){var s=0,r=A.dr(t.z),q=1,p,o=[],n=this,m
var $async$aa=A.dt(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.f=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.bG(n.a9(),$async$aa)
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
case 4:return A.dl(null,r)
case 1:return A.dk(p,r)}})
return A.dm($async$aa,r)},
M(){var s=0,r=A.dr(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$M=A.dt(function(a,b){if(a===1)return A.dk(b,r)
while(true)$async$outer:switch(s){case 0:e=p.a
d=e.b.d.a
c=A.e(d.slice(0),A.ax(d))
d=p.b,o=B.a.gcD(d),n=t.b7,m=p.c,l=0,k=!1
case 4:if(!!0){s=5
break}case 6:if(!(j=d.length,j!==0)){s=7
break}if(0>=j){q=A.b(d,0)
s=1
break}s=8
return A.bG(d[0].S(0,e),$async$M)
case 8:i=b
B.a.ad(m,i.r)
case 9:if(!(j=i.a,j!=null)){s=10
break}B.a.j(d,0,j)
s=11
return A.bG(j.S(0,e),$async$M)
case 11:i=b
B.a.ad(m,i.r)
s=9
break
case 10:case 12:if(!(j=m.length,j!==0)){s=13
break}if(0>=j){q=A.b(m,-1)
s=1
break}s=14
return A.bG(m.pop().S(0,e),$async$M)
case 14:h=b
B.a.ad(m,h.r)
case 15:if(!(j=h.a,j!=null)){s=16
break}s=17
return A.bG(j.S(0,e),$async$M)
case 17:h=b
B.a.ad(m,h.r)
s=15
break
case 16:s=12
break
case 13:if(i.d)k=B.bb.bJ(k,!0)
B.a.by(d,0)
s=6
break
case 7:if(!k){s=3
break}for(;j=c.length,l<j;){if(!(l>=0)){q=A.b(c,l)
s=1
break $async$outer}g=c[l];++l
if(g.bx()==null)continue
if(A.nd(n.a(o),g,e)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=p.d.length!==0?18:19
break
case 18:s=p.e.length===0?20:22
break
case 20:s=23
return A.bG(p.c8(),$async$M)
case 23:s=21
break
case 22:p.aC()
case 21:case 19:if(!k){s=1
break}for(e=c.length,f=0;f<e;++f)c[f].a=100
case 1:return A.dl(q,r)}})
return A.dm($async$M,r)},
aC(){var s=0,r=A.dr(t.z),q=this,p,o,n
var $async$aC=A.dt(function(a,b){if(a===1)return A.dk(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.E)(p),++n)p[n].d0(0)
B.a.sl(p,0)
return A.dl(null,r)}})
return A.dm($async$aC,r)},
a8(a){var s=0,r=A.dr(t.H),q=this,p
var $async$a8=A.dt(function(b,c){if(b===1)return A.dk(c,r)
while(true)switch(s){case 0:p=new A.J($.D,t.dS)
B.a.m(q.a.d,t.x.a(new A.ho(q,new A.bC(p,t.ez))))
s=2
return A.bG(p,$async$a8)
case 2:return A.dl(null,r)}})
return A.dm($async$a8,r)},
c8(){return this.a8(null)},
a9(){var s=0,r=A.dr(t.H),q,p=this,o,n,m,l
var $async$a9=A.dt(function(a,b){if(a===1)return A.dk(b,r)
while(true)switch(s){case 0:l=p.e
if(l.length===0){s=1
break}o=B.a.by(l,0)
switch(o){case B.W:case B.X:case B.Y:case B.Z:switch(o){case B.W:n=new A.k(0,-1)
break
case B.X:n=new A.k(1,0)
break
case B.Y:n=new A.k(0,1)
break
case B.Z:n=new A.k(-1,0)
break
default:A.T(A.aS(""))
n=null}m=new A.e5(n,p.a.b.a)
break
case B.b9:m=new A.em()
break
default:m=null
break}s=m!=null?3:4
break
case 3:B.a.m(p.b,m)
s=5
return A.bG(p.M(),$async$a9)
case 5:case 4:case 1:return A.dl(q,r)}})
return A.dm($async$a9,r)}}
A.ho.prototype={
$1(a){var s,r,q,p,o,n,m
t.fu.a(a)
s=A.e([],t.f_)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.E)(q),++n){m=q[n]
if(m.gdm(m)||o.length!==0){m.d0(0)
B.a.m(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.E)(s),++n)B.a.a2(q,s[n])
if(q.length===0)this.b.cL(0)
else B.a.m(r.a.d,t.x.a(this))},
$S:39}
A.bp.prototype={
k(a){return"ItemType."+this.b}}
A.bN.prototype={}
A.R.prototype={}
A.dV.prototype={
k(a){return"HandRequirement."+this.b}}
A.b2.prototype={
k(a){return"DamageType."+this.b}}
A.bm.prototype={
k(a){return"DiceType."+this.b}}
A.av.prototype={
k(a){return"WeaponProperties."+this.b}}
A.hN.prototype={}
A.b1.prototype={}
A.bl.prototype={
k(a){return"CriticalEffect."+this.b}}
A.S.prototype={}
A.cd.prototype={
k(a){return"AmmoType."+this.b}}
A.ce.prototype={}
A.ad.prototype={}
A.bJ.prototype={
k(a){return"ArmorUpgradeType."+this.b}}
A.a1.prototype={}
A.bV.prototype={
k(a){return"TileType."+this.b}}
A.hI.prototype={}
A.bA.prototype={
k(a){return"TerrainType."+this.b}}
A.X.prototype={
k(a){return"TerrainWidget."+this.b}}
A.bu.prototype={
k(a){return"LockState."+this.b}}
A.bg.prototype={
k(a){return"Biome."+this.b}}
A.b6.prototype={
ga_(a){return this.b.a},
ga0(a){return this.b.b},
sd8(a){t.d0.a(a)},
$ihs:1}
A.hD.prototype={}
A.k.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.k&&b.a===this.a&&b.b===this.b},
gt(a){return A.jv(this.a,this.b,B.D,B.D)},
u(a,b){return new A.k(this.a+b.a,this.b+b.b)},
k(a){return"("+this.a+", "+this.b+")"}}
A.hF.prototype={
k(a){return"LiquidKind."+this.b}}
A.P.prototype={
k(a){return"Interactable."+this.b}}
A.hJ.prototype={}
A.hg.prototype={
cz(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.a,i=j.V(k,t.I),h=this.c
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.b.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.b||A.aY(A.hu(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.d=r
j.Y(b,k,i)}}
A.hj.prototype={
bR(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
c.gW().a.T(c.a)
s=c.y
s.a.T(c.a)
r=c.z
r.a.T(c.a)
c.gaE().b.T(c.a)
q=c.gaJ()
p=c.a
q.d=p.createFramebuffer()
q.a.T(p)
q.b.T(p)
c.gbo().b.T(c.a)
for(q=c.b,p=q.d,o=p.b,n=o.c,m=n.length,l=c.f,k=0;k<n.length;n.length===m||(0,A.E)(n),++k){j=n[k]
i=j.b
h=A.k_(j.f,i.a*24,i.b*36)
if(h!=null){g=h.a=c.gW()
f=g.c
f.$ti.c.a(h);++f.d
f.bW(0,h)
g.e=!0
j.y=h}g=j.f
if(g===B.x||g===B.u){j.z=new A.hD(new A.bk(4294278144))
e=c.ch
if(e===$){d=A.lA(l)
A.fS(e,"lightingRenderer")
c.ch=d
e=d}B.a.m(e.r,j)}}q=q.a
n=A.kH(p)
B.a.m(p.a,q)
h=q.c
h.sbs(n.a)
h.sbt(n.b)
q=c.gW()
h.r=1
n=h.a
if(n!=null)n.e=!0
q.m(0,h)
s.b=p
s.c=!0
r.c=p
r.b=!0
l.cY(o)
l.cU()
l.e=A.kH(p)},
gW(){var s,r=this,q=r.x
if(q===$){s=A.lO(r.a,r.f)
A.fS(r.x,"sprites")
r.x=s
q=s}return q},
gaE(){var s,r=this,q=r.Q
if(q===$){s=A.mi()
s=A.b3(A.e([new A.a2("a_position",35044,5126,2,s),new A.a2("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.l,A.e([new A.v("u_resolution",B.e),new A.v("u_offset",B.e)],t.o),u.q)
A.fS(r.Q,"fovRenderer")
q=r.Q=new A.hl(r.f,s,new A.k(-1,-1))}return q},
gaJ(){var s,r,q,p=this,o=u.p,n="a_position",m="u_resolution",l="u_block_size",k="u_player_visible_texture",j="u_offset",i=p.ch
if(i===$){s=t.G
r=t.o
q=A.b3(A.e([new A.a2(n,35044,5126,2,new Float32Array(A.dn(B.z)))],s),u.w,A.e([new A.v(m,B.e),new A.v("u_source_position",B.e),new A.v(l,B.e),new A.v("u_source_color",B.a7),new A.v("u_source_strength",B.t),new A.v("u_time",B.t),new A.v("u_visible_texture",B.i),new A.v(k,B.i),new A.v(j,B.e)],r),o)
r=A.b3(A.e([new A.a2(n,35044,5126,2,new Float32Array(A.dn(B.z)))],s),u.m,A.e([new A.v("u_light_texture",B.i),new A.v("u_game_world_texture",B.i),new A.v(k,B.i),new A.v(m,B.e),new A.v(l,B.e),new A.v(j,B.e)],r),o)
s=A.e([],t.cd)
A.fS(p.ch,"lightingRenderer")
i=p.ch=new A.e1(q,r,p.f,s)}return i},
gbo(){var s,r=this,q=r.cy
if(q===$){s=A.b3(A.e([new A.a2("a_position",35044,5126,2,new Float32Array(A.dn(B.z)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random (in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise (vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f*f*f+.6*f*f+.5*f)*color, 0.3);\n}\n",A.e([new A.v("u_resolution",B.e),new A.v("u_time",B.t),new A.v("u_offset",B.e),new A.v("u_player_vis_texture",B.i),new A.v("u_block_size",B.e)],t.o),"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n")
A.fS(r.cy,"filters")
q=r.cy=new A.hn(r.f,s)}return q},
a3(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=3553
t.r.a(a0)
c.a=a0
s=c.c
r=s.clientWidth
q=s.clientHeight
if(r!==c.dy||q!==c.fr){B.V.sO(s,r)
B.V.sN(s,q)
c.dy=r
c.fr=q
s=c.db
if(s!=null)B.c.cM(a0,s)
s=a0.createTexture()
c.db=s
B.c.F(a0,b,s)
B.c.ai(a0,b,0,6408,c.dy,c.fr,0,6408,5121,null)
a0.texParameteri(b,10241,9729)
a0.texParameteri(b,10242,33071)
a0.texParameteri(b,10243,33071)}s=c.r
p=c.f.e
o=Math.min(Math.max(B.d.ah(p.a*24-r/2),0),B.f.ah(2400-r))
n=Math.min(Math.max(B.d.ah(p.b*36-q/2),0),B.f.ah(1440-q))
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
l=c.fy
l.a=r
l.b=q
l.d=p
l.e=s
l.c=a
a0.viewport(0,0,r,q)
a0.clearColor(0,0,0,1)
a0.clear(16640)
a0.enable(3042)
a0.blendFuncSeparate(770,771,1,771)
B.c.ae(a0,36160,c.dx)
B.c.bq(a0,36160,36064,b,c.db,0)
a0.clearColor(0,0,0,1)
a0.clear(16640)
s=c.y
if(s.c){s.cB(a0)
s.c=!1}p=t.Y
j=t.t
i=t.N
h=t.z
s.a.U(a0,4,48e3,A.bt(["u_resolution",A.e([l.a,l.b],p),"u_offset",A.e([l.d,l.e],j)],i,h))
s=c.z
if(s.b){s.cz(0,a0)
s.b=!1}s.a.U(a0,0,B.f.R(s.d,2),A.bt(["u_resolution",A.e([l.a,l.b],p),"u_offset",A.e([l.d,l.e],j)],i,h))
c.gW().a3(a0,l)
s=c.gbo()
g=s.a
f=g.a6(g.e,a0)
a0.activeTexture(33984)
B.c.F(a0,b,f)
s.b.U(a0,4,3,A.bt(["u_time",l.c/1000,"u_resolution",A.e([l.a,l.b],p),"u_offset",A.e([l.d,l.e],j),"u_player_vis_texture",0,"u_block_size",A.e([24,36],p)],i,h))
B.c.ae(a0,36160,null)
c.gaJ().f=c.db
c.gaJ().a3(a0,l)
s=c.gaE()
if(!s.a.e.E(0,s.c)||s.d)s.cC(a0)
s.b.U(a0,4,48e3,A.bt(["u_resolution",A.e([l.a,l.b],p),"u_offset",A.e([l.d,l.e],j)],i,h))
a0.finish()
e=new A.aK(1000*B.d.D(a))
for(s=c.d,p=s.length,d=0;d<s.length;s.length===p||(0,A.E)(s),++d)s[d].$1(e)
B.a.sl(s,0)}}
A.aL.prototype={}
A.hk.prototype={}
A.eB.prototype={
S(a,b){return A.aM(null,null,!1,B.p,!1)}}
A.e5.prototype={
S(a,b){var s,r,q,p,o,n,m,l,k,j,i=null,h=b.b.d,g=this.b,f=g.bx(),e=this.a,d=f.u(0,e),c=h.b
if(!c.cR(d))return A.aM(i,i,!1,B.p,!1)
s=c.h(0,d)
r=h.cG(d)
if((s.c===B.b||A.aY(A.hu(s.f)))&&r==null){q=s.b
p=q.a
if(p!==0){q=q.b
q=q===0||p===99||q===39}else q=!0
if(q)return A.aM(new A.eB(g,e.a,e.b),i,!1,B.p,!1)
if(s.f==null)return A.aM(i,i,!1,B.p,!1)
o=A.n3(s)
if(o.length!==0)return A.aM(B.a.gbN(o).b,i,!1,B.p,!1)
return A.aM(i,i,!1,B.p,!1)}n=A.e([],t.w)
if(r!=null){if(A.n5(r,g))return A.aM(i,i,!1,B.p,!1)
e=r.c
m=e.d
l=e.e
q=g.c
k=q.d
j=q.e
e.sa_(0,k)
e.sa0(0,q.e)
q.sa_(0,m)
q.sa0(0,l)
e=b.f
e.e=new A.k(B.d.D(k),B.d.D(j))
e.aQ()
e.e=new A.k(B.d.D(m),B.d.D(l))
e.aQ()}else{e=g.c
e.sbs(d.a)
e.sbt(d.b)
e=b.f
e.e=d
e.aQ()}c.h(0,f)
if(s.r!=null)self.window.secretPlayAudio("sounds/"+("water_footsteps_"+(B.q.A(5)+1)+".mp3"))
g.a=0
return A.aM(i,i,!1,n,!0)},
k(a){return"Move{"+this.b.k(0)+" by "+this.a.k(0)+"}"}}
A.em.prototype={
S(a,b){return A.aM(null,null,!1,B.p,!0)}}
A.cS.prototype={
S(a,b){var s,r,q,p=b.b.d.b,o=this.b,n=p.h(0,o),m=n.y
n.f=this.a?B.r:B.v
s=b.gW()
m.toString
s.c.a2(0,m)
m.a=null
s.e=!0
s=n.f
s.toString
r=n.b
q=A.k_(s,24*r.a,36*r.b)
if(q!=null)b.gW().m(0,q)
n.y=q
b.f.br(p,o)
b.gaE().d=!0
self.window.secretPlayAudio("sounds/door_1.mp3")
return A.aM(null,null,!1,B.p,!0)}}
A.hn.prototype={}
A.hm.prototype={
c6(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.c.F(b,f,c)
s=A.k7(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
r=this.a5(a)
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
s[h]=g}B.c.ai(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
a6(a,b){var s=this.f,r=s.h(0,a)
if(r==null){r=new A.fz(b.createTexture())
s.j(0,a,r)}if(r.b){this.c6(a,b,r.a)
r.b=!1}return r.a},
a5(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.jx(p,p+4000,B.f.bQ(s.byteLength,r))
return new A.il(100,A.k7(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
aQ(){var s,r,q,p,o=this.a5(this.e).c
for(s=this.c,r=o.length,q=0;q<4000;++q){p=s[q]
if(!(q<r))return A.b(o,q)
s[q]=p|o[q]}},
cU(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.av(new A.k(s,r))
for(q=this.f,q=q.gaR(q),q=q.gw(q);q.n();)q.gp(q).b=!0},
br(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.L.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.P(0,r,q)
o=o.c===B.b||A.aY(A.lt(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.av(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]===1)g.av(new A.k(m,l))}s=g.a5(b)
s.toString
for(p=g.f,p=p.gbn(p),p=p.gw(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]===1)i.b.b=!0}},
cY(a){return this.br(a,null)},
av(a){var s,r,q,p=this.a5(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=1
for(q=0;q<4;++q)this.ck(new A.bU(1,-1,1),new A.hY(B.bf[q],a),o)},
cj(a,b){if(a<0||a>=b.byteLength)return
if(!(a>=0&&a<b.length))return A.b(b,a)
b[a]=1},
b8(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
aw(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===0},
ck(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.r
B.a.sl(e,0)
B.a.m(e,a)
for(;s=e.length,s!==0;){if(0>=s)return A.b(e,-1)
r=e.pop()
s=r.a
q=B.d.ag(s*r.b+0.5)
p=B.d.cI(s*r.c-0.5)
for(o=s+1,n=2*s,m=q,l=null;m<=p;++m,l=j){k=b.dc(0,new A.k(s,m))
j=k.b*100+k.a
i=f.b8(j,c)
if(!i)h=m>=s*r.b&&m<=s*r.c
else h=!0
if(h)f.cj(j,c)
h=l!=null
if(h&&f.b8(l,c)&&f.aw(j,c))r.b=(2*m-1)/n
if(h&&f.aw(l,c)&&i){g=new A.bU(o,r.b,r.c)
g.c=(2*m-1)/n
B.a.m(e,g)}}if(l!=null&&f.aw(l,c))B.a.m(e,new A.bU(o,r.b,r.c))}}}
A.fz.prototype={}
A.il.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]===1}}
A.bi.prototype={
k(a){return"Cardinal."+this.b}}
A.hY.prototype={
dc(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a){case B.ai:s=r.b
return new A.k(s.a+p,s.b-q)
case B.aj:s=r.b
return new A.k(s.a+p,s.b+q)
case B.ak:s=r.b
return new A.k(s.a+q,s.b+p)
case B.al:s=r.b
return new A.k(s.a-q,s.b+p)}}}
A.bU.prototype={}
A.cv.prototype={}
A.e1.prototype={
a3(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=3553,a="u_player_visible_texture",a0=a2.a
if(a0!==c.x||a2.b!==c.y){c.x=a0
s=a2.b
c.y=s
r=a1.createTexture()
c.e=r
B.c.F(a1,b,r)
B.c.ai(a1,b,0,6408,a0,s,0,6408,5121,null)
a1.texParameteri(b,10241,9729)
a1.texParameteri(b,10242,33071)
a1.texParameteri(b,10243,33071)}B.c.ae(a1,36160,c.d)
B.c.bq(a1,36160,36064,b,c.e,0)
a1.clearColor(0,0,0,1)
a1.clear(16640)
a0=c.c
q=a0.a6(a0.e,a1)
a1.activeTexture(33985)
B.c.F(a1,b,q)
for(s=c.r,r=s.length,p=c.a,o=t.Y,n=t.t,m=t.N,l=t.z,k=0;k<s.length;s.length===r||(0,A.E)(s),++k){j=s[k]
i=j.z
h=a0.a6(new A.k(j.ga_(j),j.ga0(j)),a1)
a1.activeTexture(33984)
B.c.F(a1,b,h)
g=A.e([a2.a,a2.b],o)
f=A.e([j.ga_(j),j.ga0(j)],o)
e=A.e([a2.d,a2.e],n)
d=i.b.a
p.U(a1,4,3,A.bt(["u_resolution",g,"u_source_strength",7,"u_block_size",B.aq,"u_source_position",f,"u_offset",e,"u_source_color",A.e([(d>>>16&255)/255,(d>>>8&255)/255,(d&255)/255,0.2],n),"u_time",a2.c/1000,a,1,"u_visible_texture",0],m,l))}B.c.ae(a1,36160,null)
a1.activeTexture(33984)
B.c.F(a1,b,c.e)
a1.activeTexture(33985)
B.c.F(a1,b,c.f)
a1.activeTexture(33986)
B.c.F(a1,b,q)
c.b.U(a1,4,3,A.bt(["u_light_texture",0,"u_game_world_texture",1,a,2,"u_block_size",B.aq,"u_resolution",A.e([a2.a,a2.b],o),"u_offset",A.e([a2.d,a2.e],n)],m,l))}}
A.aq.prototype={
k(a){return"Directions."+this.b}}
A.a2.prototype={}
A.v.prototype={}
A.bB.prototype={
k(a){return"UniformKind."+this.b}}
A.eN.prototype={}
A.fF.prototype={}
A.hr.prototype={
T(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.kw(a,i.a,35633),f=A.kw(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.Q(a.getProgramParameter(e,35714),!0)){A.kN(J.bI(a.getProgramInfoLog(e)))
A.T(A.aS("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.c.bk(a,A.aX(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.E)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.fF(a.getUniformLocation(A.aX(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.E)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.aX(i.e,h),n)
k=a.createBuffer()
B.c.bi(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.eN(k,j))}},
V(a,b){A.mV(b,t.Q,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
Y(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.d(A.aS("WARNING, NO ATTRIBUTE "+b))
B.c.bi(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
U(a,b,c,d){var s,r,q,p,o,n
t.d1.a(d)
B.c.di(a,A.aX(this.e,"_program"))
B.c.bk(a,A.aX(this.f,"_vertexArrayObject"))
for(s=d.gbn(d),s=s.gw(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.a8(p)
n=r.h(0,p)
if(n==null)A.T(A.aS("WARNING, NO UNIFORM "+p))
switch(n.b.b){case B.t:B.c.dd(a,n.a,A.ay(o))
break
case B.e:q=J.ao(o)
B.c.df(a,n.a,A.ay(q.h(o,0)),A.ay(q.h(o,1)))
break
case B.bB:q=J.ao(o)
B.c.dg(a,n.a,A.ay(q.h(o,0)),A.ay(q.h(o,1)),A.ay(q.h(o,2)))
break
case B.a7:q=J.ao(o)
B.c.dh(a,n.a,A.ay(q.h(o,0)),A.ay(q.h(o,1)),A.ay(q.h(o,2)),A.ay(q.h(o,3)))
break
case B.i:B.c.de(a,n.a,A.c2(o))
break}}a.drawArrays(b,0,c)}}
A.i_.prototype={}
A.i0.prototype={}
A.eo.prototype={$ilM:1}
A.j6.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.c.F(q,r,p)
B.c.d9(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.af(0,p)},
$S:9}
A.i4.prototype={
bT(a,b){A.n8(a,"CursesTransparent_24x36.png").bB(new A.i5(this),t.P)},
m(a,b){var s,r,q,p,o,n
b.a=this
s=this.c
r=s.$ti
r.c.a(b);++s.d
q=s.c
p=s.b.length
if(q===p){o=p*2+1
if(o<7)o=7
n=A.aQ(o,null,!1,r.i("1?"))
B.a.aU(n,0,s.c,s.b)
s.sbc(n)}s.am(b,s.c++)
this.e=!0},
cA(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="a_position",a4="a_texcoord",a5=this.c,a6=a5.c,a7=this.a,a8=t.Q,a9=a6*12,b0=A.ju(a7.V(a3,a8).buffer,0,a9),b1=A.ju(a7.V(a4,a8).buffer,0,a9),b2=A.ju(a7.V("a_color",a8).buffer,0,a6*24),b3=a5.cw()
B.a.ak(b3,a5.a)
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
if(a1==null)B.bu.cN(b2,a0,a0+24,0)
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
b2[j]=n}}a7.Y(b4,a3,b0)
a7.Y(b4,a4,b1)
a7.Y(b4,"a_color",b2)},
a3(a,b){var s,r=this
if(r.b==null||r.c.c===0)return
if(r.e){r.cA(a)
r.e=!1}s=r.d
s.a6(s.e,a)
a.activeTexture(33984)
B.c.F(a,3553,r.b)
r.a.U(a,4,r.c.c*6,A.bt(["u_texture",0,"u_resolution",A.e([b.a,b.b],t.Y),"u_offset",A.e([b.d,b.e],t.t)],t.N,t.z))}}
A.i5.prototype={
$1(a){this.a.b=t.dy.a(a)},
$S:20}
A.at.prototype={
sa_(a,b){var s=this.a
if(s!=null)s.e=!0
this.d=b},
sa0(a,b){var s=this.a
if(s!=null)s.e=!0
this.e=b},
sbs(a){var s=this.a
if(s!=null)s.e=!0
this.d=a*24},
sbt(a){var s=this.a
if(s!=null)s.e=!0
this.e=a*36}}
A.hL.prototype={}
A.id.prototype={
cB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.b==null)return
s=d.a
r=s.V("a_color",t.I)
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
h=!(e.c===B.b||A.aY(A.hu(e.f)))}else h=!1
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
r[h]=1}}}s.Y(a,"a_color",r)}}
A.hl.prototype={
cC(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.a5(a2.e),a4=a1.b,a5=a4.V("a_color",t.I)
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
a4.Y(a6,"a_color",a5)}}
A.iq.prototype={}
A.iY.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:8}
A.i6.prototype={
cG(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
m=n.c
l=B.d.D(m.d/24)
if(l===q){m=B.d.D(m.e/36)
m=m===p}else m=!1
if(m)return n}return null}}
A.dG.prototype={
aV(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.O(a,a0,A.aQ(a*a0,B.h,!1,t.a5),t.m)
c.a=b
s=new A.h8(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.u()
if(typeof m!=="number")return A.c9(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.c9(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.c9(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.c9(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.c9(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.c9(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.c9(f)
e=n+m+k+i+h+g+l+f
if(J.Q(s.$2(q,o),1))if(e<4)a1.B(0,B.h,q,o)
else a1.B(0,B.b,q,o)
else if(e>5)a1.B(0,B.b,q,o)
else a1.B(0,B.h,q,o)}d=c.a
c.a=a1}}}
A.h8.prototype={
$2(a,b){return J.Q(this.a.a.P(0,a,b),B.b)?0:1},
$S:22}
A.hp.prototype={
aP(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.e8.a(b0)
s=t.q
r=A.e([],s)
q=new A.hq(a9)
for(p=J.aG(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.dk()
if(n>=1)B.a.m(r,o)}if(r.length===0)return
m=A.e([],t.ap)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.E)(r),++j){i=r[j]
h=A.e([],k)
g=i.a
f=i.b
if(o.h(0,new A.k(g+1,f))===B.b)B.a.m(h,B.k)
if(o.h(0,new A.k(g+-1,f))===B.b)B.a.m(h,B.m)
if(o.h(0,new A.k(g,f+1))===B.b)B.a.m(h,B.l)
if(o.h(0,new A.k(g,f+-1))===B.b)B.a.m(h,B.j)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.E)(h),++e){d=h[e]
c=A.a_(i,d)
b=A.e([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.b)break
a2=A.lp(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.a_(a,a2[0]))!==B.h){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.a_(a,a2[1]))===B.h}else a1=!0
if(a1)break
a=A.a_(a,d)
B.a.m(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.h&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.a_(a,A.lq(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.m(m,new A.cT(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.bs(t.u,t.aO)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.E)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.I(l,n))continue
if(a4.aD(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.j(0,n,a5)}else a4.j(0,n,a5)}for(s=a4.gaR(a4),s=s.gw(s),n=this.a,l=a9.e,k=a8.b;s.n();){g=s.gp(s)
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
B.a.m(f.b,a7)}for(s=a4.gaR(a4),s=s.gw(s);s.n();)this.aP(s.gp(s).d,a9,b0,b1)}}
A.hq.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.u(0,new A.k(1,0)))===B.b?1:0
if(s.h(0,a.u(0,new A.k(-1,0)))===B.b)++r
if(s.h(0,a.u(0,new A.k(0,-1)))===B.b)++r
return s.h(0,a.u(0,new A.k(1,1)))===B.b?r+1:r},
$S:23}
A.h5.prototype={
bE(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.B(0,o.a1()>0.45?B.h:B.b,n,m)
p.B(0,B.a3,n,m)}new A.dG(a7).aV(3)
for(p=q-1,l=0;l<r;++l){s.B(0,B.b,l,0)
s.B(0,B.b,l,p)}for(o=r-1,k=0;k<q;++k){s.B(0,B.b,0,k)
s.B(0,B.b,o,k)}j=new A.h6(a7)
i=new A.h7(a7)
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
o=A.jr(p)
a0=new A.dR(a7,A.e([],t.g2),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.k(l,k)
if(o.I(0,a1)||s.h(0,a1)===B.b)continue
a0.bp(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.E)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gw(a3);d.n();)s.j(0,d.gp(d),B.b)
else B.a.m(o,new A.a3(a3,A.e([],h),A.e([],h),A.hi(a3)))}a4=A.bs(p,t.u)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.a,a2=0;b=o.length,a2<b;o.length===r||(0,A.E)(o),++a2){a3=o[a2]
B.a.m(p,a3)
h.j(0,a3,A.e([],d))
for(b=J.aG(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.E)(o),++a2){a3=o[a2]
r=a3.a
p=J.ao(r)
if(p.gl(r)>a6){a6=p.gl(r)
a5=a3}}this.aP(a5,a7,a4,q)
for(r=q.bv(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.E)(r),++a2){a3=r[a2]
B.a.a2(o,a3)
for(p=J.aG(a3.a);p.n();)s.j(0,p.gp(p),B.b)}A.kQ(o,a7)}}
A.h6.prototype={
$2(a,b){return J.Q(this.a.b.P(0,a,b),B.h)},
$S:7}
A.h7.prototype={
$2(a,b){return J.Q(this.a.b.P(0,a,b),B.b)},
$S:7}
A.aB.prototype={}
A.eI.prototype={}
A.cf.prototype={}
A.cL.prototype={
L(a,b){this.$ti.c.a(a)
return Math.min(B.U.L(a,b),B.b_.L(a,b)+B.aK.L(a,b))}}
A.dH.prototype={
L(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.o)return 1/0
s=A.jg(a,B.j,b)
r=A.jg(a,B.l,b)
q=A.jg(a,B.k,b)
p=A.jg(a,B.m,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.dy.prototype={
L(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.o)return 1/0
if(A.bH(a,B.j,b)+A.bH(a,B.l,b)+A.bH(a,B.k,b)+A.bH(a,B.m,b)===1)return 1
return 1/0}}
A.dL.prototype={
L(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.o)return 1/0
if(A.bH(a,B.j,b)+A.bH(a,B.l,b)+A.bH(a,B.k,b)+A.bH(a,B.m,b)===2)return 1
return 1/0}}
A.cb.prototype={
L(a,b){var s,r,q,p,o,n,m
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
A.cW.prototype={
d1(a,b){return this.b.$2(a,b)}}
A.je.prototype={
$2(a,b){b.e.j(0,a,B.a6)},
$S:1}
A.ja.prototype={
$2(a,b){b.e.j(0,a,B.aE)},
$S:1}
A.jc.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.B)s.j(0,a,B.a4)
else s.j(0,a,B.a5)},
$S:1}
A.j9.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.B)s.j(0,a,B.a4)
else s.j(0,a,B.a5)},
$S:1}
A.jb.prototype={
$2(a,b){b.e.j(0,a,B.Q)},
$S:1}
A.jd.prototype={
$2(a,b){b.e.j(0,a,B.aF)
b.f.j(0,a,B.bm)},
$S:1}
A.j8.prototype={
$2(a,b){b.e.j(0,a,B.R)},
$S:1}
A.jf.prototype={
$2(a,b){var s=t.u
s.a(a)
s.a(b)
return J.a0(a.a)-J.a0(b.a)},
$S:26}
A.cu.prototype={}
A.h1.prototype={
bC(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=4000,c=new A.O(100,40,A.aQ(d,B.h,!1,t.a5),t.m),b=A.aQ(d,0,!1,t.i),a=A.aQ(d,B.a3,!1,t.d0),a0=new A.O(100,40,A.aQ(d,B.o,!1,t.gQ),t.gg),a1=t.a,a2=new A.cu(a3,c,new A.O(100,40,b,t.cL),new A.O(100,40,a,t.dl),a0,new A.O(100,40,A.aQ(d,B.av,!1,t.ad),t.aE),new A.O(100,40,A.aQ(d,null,!1,t.br),t.b1),new A.hh(A.e([],a1),A.bs(t.u,t.h5)),A.e([],a1))
b=a3.a
switch(b){case B.ad:new A.h5(B.q).bE(a2)
break
case B.aY:new A.i2(A.jr(t.j),B.q).bH(a2)
break
case B.aZ:case B.ac:case B.ae:new A.ia(B.q).bF(a2)
break}s=new Float32Array(4000)
new A.hV().bG(s,100,40)
r=new A.O(100,40,A.js(d,new A.h2(),t.W),t.L)
for(q=0;q<100;++q)for(a=q!==0,a1=q!==99,p=0;p<40;++p)if(!a||!a1||p===0||p===39){c.B(0,B.b,q,p)
a0.B(0,B.o,q,p)}this.b.bD(a2.y,a2,a3.c)
for(a=a2.c,a1=this.a,o=a2.d,n=a2.r,b=b!==B.ae,m=a2.f,q=0;q<100;++q)for(p=0;p<40;++p){l=J.Q(c.P(0,q,p),B.h)
k=c.P(0,q,p)
k.toString
j=new A.k(q,p)
a1.a1()
i=r.h(0,j)
h=o.h(0,j)
g=a0.h(0,j)
i.b=j
i.c=k
i.sd8(o.h(0,j))
k=p*100+q
if(!(k<4000))return A.b(s,k)
f=s[k]
e=n.P(0,q,p)
if(J.Q(a.h(0,j),1))i.r=B.bd
else if(g!==B.o)switch(g){case B.C:if(m.h(0,j)===B.au)i.f=B.M
else i.f=B.r
break
case B.a5:i.f=B.x
break
case B.o:break
case B.aE:i.f=B.O
break
case B.a6:i.f=B.N
break
case B.bz:i.f=B.w
break
case B.Q:i.f=B.L
if(e!=null)B.a.m(i.e,e)
break
case B.R:i.f=B.J
break
case B.aF:i.f=B.K
break
case B.aG:i.f=B.I
break
case B.a4:i.f=B.u
break}else if(l&&f<0.42&&h!==B.B&&b)i.f=B.w
if(e!=null)B.a.m(i.e,e)}return new A.hJ(r,a3)}}
A.h2.prototype={
$1(a){var s=A.e([],t.de)
return new A.b6(B.A,B.h,s)},
$S:8}
A.cT.prototype={
gl(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.hh.prototype={
bv(){var s,r,q,p,o,n=A.e([],t.a)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.E)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.m(n,o)}return n}}
A.a3.prototype={
k(a){return"Room{"+J.a0(this.a)+"; "+this.d.k(0)+"}"}}
A.dR.prototype={
bp(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.e([a],k),i=A.e([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.I(0,o))continue
q.m(0,o)
B.a.m(i,o)
for(n=0;n<8;++n){m=A.a_(o,B.bg[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.I(0,m)&&k.h(0,m)===B.h)B.a.m(j,m)}}B.a.m(this.b,i)}}
A.dY.prototype={
bh(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.R)s=B.ao
else if(a instanceof A.S)s=B.am
else s=a instanceof A.ad?B.an:B.ap
B.a.m(r.a,a)
B.a.m(r.b,s)
B.a.m(r.c,b)
r.d+=b},
bg(a){return this.bh(a,10)},
d2(a){var s,r,q,p,o={},n=o.a=0,m=A.js(this.c.length,new A.hA(o,this),t.i),l=a.a1()
for(s=m.length,r=l>-1;n<s;++n){q=m[n]
if(r&&l<=q){s=this.a
if(!(n<s.length))return A.b(s,n)
s=s[n]
if(s instanceof A.R)p=B.ao
else if(s instanceof A.S)p=B.am
else if(s instanceof A.ad)p=B.an
else{J.bI(s)
p=B.ap}$.k0=$.k0+1
return new A.bN(s,p)}}throw A.d(A.aS(""))},
bL(a){var s,r,q=B.a.cS(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
bK(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p===0)return
B.a.j(r,q,p-2)
this.d-=2}}}
A.hA.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.b(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:28}
A.hT.prototype={}
A.hv.prototype={
bD(a,b,c){var s,r,q
t.h5.a(a)
s=new A.dY(A.e([],t.f),A.e([],t.gr),A.e([],t.Y))
r=s.gcF()
new A.aw(B.bj,t.bB.a(new A.hw()),t.eL).C(0,r)
new A.aw(B.bh,t.aL.a(new A.hx()),t.fm).C(0,r)
new A.aw(B.bi,t.ei.a(new A.hy()),t.aC).C(0,r)
new A.aw(B.be,t.gj.a(new A.hz()),t.dP).C(0,r)
s.bg(B.ah)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.E)(a),++q)this.c9(s,a[q],b)},
c9(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.ao(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.A
break}r=j.length
if(r!==0){r=l.A(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.A(k.gl(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.Q||q===B.o
else r=!1
if(r)break;++i}if(s.E(0,B.A))return
p=a.d2(l)
n=p.b
if(!J.Q(n,B.ah)){a.bL(n)
a.bK(p.c)
o.j(0,s,p)}}}
A.hw.prototype={
$1(a){return t.eV.a(a).b<=1000},
$S:29}
A.hx.prototype={
$1(a){return t.bP.a(a).f<=1000},
$S:30}
A.hy.prototype={
$1(a){return t.e4.a(a).r<=1000},
$S:31}
A.hz.prototype={
$1(a){return t.fW.a(a).c<=1000},
$S:32}
A.hV.prototype={
K(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
bG(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
for(s=0;s<b0;++s)for(r=s*0.1,q=0;q<b1;++q){p=q*b0+s
o=q*0.1
n=B.d.ag(r)&255
m=B.d.ag(o)&255
l=B.d.ag(0.3)&255
k=r-Math.floor(r)
j=o-Math.floor(o)
i=0.3-Math.floor(0.3)
h=k*k*k*(k*(k*6-15)+10)
g=j*j*j*(j*(j*6-15)+10)
o=$.l3()
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
c=a8.K(0,o[d],k,j,i)
if(!(a0<f))return A.b(o,a0)
a2=k-1
c+=h*(a8.K(0,o[a0],a2,j,i)-c)
if(!(b<f))return A.b(o,b)
a3=j-1
a4=a8.K(0,o[b],k,a3,i)
if(!(a1<f))return A.b(o,a1)
c+=g*(a4+h*(a8.K(0,o[a1],a2,a3,i)-a4)-c)
a4=d+1
if(!(a4<f))return A.b(o,a4)
a5=i-1
a4=a8.K(0,o[a4],k,j,a5)
a6=a0+1
if(!(a6<f))return A.b(o,a6)
a4+=h*(a8.K(0,o[a6],a2,j,a5)-a4)
a6=b+1
if(!(a6<f))return A.b(o,a6)
a6=a8.K(0,o[a6],k,a3,a5)
a7=a1+1
if(!(a7<f))return A.b(o,a7)
a5=a8.K(0,o[a7],a2,a3,a5)
if(!(p<4000))return A.b(a9,p)
a9[p]=(c+i*i*i*(i*(i*6-15)+10)*(a4+g*(a6+h*(a5-a6)-a4)-c)+1)/2}}}
A.b4.prototype={
k(a){return"RuinOrientation."+this.b}}
A.cO.prototype={
k(a){return"RoomSizeKind."+this.b}}
A.i2.prototype={
bH(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a,a1=a0.A(5)
if(!(a1>=0&&a1<5))return A.b(B.at,a1)
s=B.at[a1]
r=a.aW(B.ay)
q=a.cf(s)
p=A.lr(a.bm(a2,r,new A.k(B.d.D(Math.max(1,q.a-r.a/2)),B.d.D(Math.max(1,q.b-A.bR(r)/2)))))
a1=a2.y
B.a.m(a1,p)
for(o=t.q,n=0;n<2000;){m=new A.k(a0.A(98)+1,a0.A(38)+1)
l=[B.P,B.P,B.P,B.ax]
k=a0.A(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a.aW(l[k])
if(!a.d4(a2,r,m)){l=a.bm(a2,r,m)
B.a.m(a1,new A.a3(l,A.e([],o),A.e([],o),A.hi(l)))}else ++n}for(a0=a.b,o=a2.d,l=a2.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.k(j,i)
o.B(0,B.B,j,i)
if(!a0.I(0,h))l.j(0,h,B.b)}g=A.bs(t.j,t.u)
for(a0=a1.length,o=a2.x,k=o.a,f=o.b,e=t.a,d=0;d<a1.length;a1.length===a0||(0,A.E)(a1),++d){c=a1[d]
B.a.m(k,c)
f.j(0,c,A.e([],e))
for(b=J.aG(c.a);b.n();)g.j(0,b.gp(b),c)}a.aP(p,a2,g,o)
for(a0=o.bv(),o=a0.length,d=0;d<a0.length;a0.length===o||(0,A.E)(a0),++d){c=a0[d]
B.a.a2(a1,c)
for(k=J.aG(c.a);k.n();)l.j(0,k.gp(k),B.b)}A.kQ(a1,a2)},
aW(a){var s
switch(a){case B.P:s=this.a
return new A.cN(s.A(5)+5,s.A(5)+5)
case B.ax:s=this.a
return new A.cN(s.A(10)+9,s.A(10)+9)
case B.ay:s=this.a
return new A.cN(s.A(10)+20,s.A(10)+20)}},
cf(a){switch(a){case B.az:return new A.k(50,10)
case B.aA:return new A.k(50,30)
case B.aB:return new A.k(75,20)
case B.aC:return new A.k(25,20)
case B.aD:return new A.k(50,20)}},
bm(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.e([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.k(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.m(0,d)
r.j(0,d,f?B.b:B.h)
if(!f)B.a.m(a,d)}return a},
d4(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.k(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.b||n.I(0,i))return!0}return!1}}
A.cN.prototype={}
A.ia.prototype={
cd(a){var s,r,q=a.a.a===B.ac?B.a3:B.by
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
bF(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.cd(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.a1()>0.6)r.j(0,new A.k(q,p),B.b)
new A.dG(b8).aV(10)
o=A.jr(t.j)
n=new A.dR(b8,A.e([],t.g2),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.k(k,j)
if(o.I(0,i)||r.h(0,i)===B.b)continue
n.bp(i)}o=n.b
B.a.ak(o,new A.ib())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.E)(h),++f)r.j(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.j(e,q,B.aG)
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
d.j(0,i,B.B)}b1=new A.ic(b8)
B.a.bM(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.A
break}b3=a9[f]
b4=A.a_(b3,B.j)
b5=A.a_(b3,B.l)
b6=A.a_(b3,B.m)
b7=A.a_(b3,B.k)
if(A.aY(b1.$1(b4))&&A.aY(b1.$1(b5))){b2=b3
break}if(A.aY(b1.$1(b6))&&A.aY(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.E)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.h)
g.j(0,b2,B.C)
B.a.m(o,new A.a3(b0,A.e([],e),A.e([],e),A.hi(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.E)(o),++f)A.dw(o[f],$.ji(),b8)}}
A.ib.prototype={
$2(a,b){var s=t.fb
s.a(a)
return J.a0(s.a(b))-J.a0(a)},
$S:33}
A.ic.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.h&&s.e.h(0,a)===B.o},
$S:34}
A.im.prototype={
bU(a){var s=t.eN.a(new A.io(this))
t.Z.a(null)
A.eZ(a,"keydown",s,!1,t.cf)}}
A.io.prototype={
$1(a){var s,r,q,p
t.cf.a(a)
s=$.mk.h(0,a.key)
if(s!=null){a.preventDefault()
r=this.a.a
q=A.B(r)
q.c.a(s)
p=r.b
if(p>=4)A.T(r.c0())
if((p&1)!==0)r.aA(s)
else if((p&3)===0)r.cb().m(0,new A.bD(s,q.i("bD<1>")))}},
$S:35}
A.aj.prototype={
k(a){return"InputCommand."+this.b}}
A.fW.prototype={
cT(){var s,r,q,p,o,n,m,l,k=this,j=document
k.b=t.cO.a(j.querySelector("#action_bar"))
for(s=k.c,r=t.do,q=r.i("~(1)?"),p=t.Z,r=r.c,o=0;o<3;++o){n=s[o]
m=j.createElement("button")
m.innerText=n
l=q.a(new A.fX(k))
p.a(null)
A.eZ(m,"click",l,!1,r)
A.aX(k.b,"base").appendChild(m)}}}
A.fX.prototype={
$1(a){var s,r
t.V.a(a)
s=this.a.a
r=A.aX(s.a,"_modal").style
r.display="none"
s=A.aX(s.a,"_modal").style
s.display="block"},
$S:6}
A.hQ.prototype={
bS(){var s,r=document.getElementById("myModal")
r.toString
this.a=r
r=window
s=t.h2.a(new A.hR(this))
t.Z.a(null)
A.eZ(r,"click",s,!1,t.V)}}
A.hR.prototype={
$1(a){var s=this.a
if(A.mh(t.V.a(a).target)===A.aX(s.a,"_modal")){s=A.aX(s.a,"_modal").style
s.display="none"}},
$S:6};(function aliases(){var s=J.a.prototype
s.bO=s.k
s=J.bq.prototype
s.bP=s.k})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_1u,m=hunkHelpers.installInstanceTearOff
s(J.t.prototype,"gcD","m",13)
r(A,"mP","lS",3)
r(A,"mQ","lT",3)
r(A,"mR","lU",3)
q(A,"kF","mI",0)
p(A,"mT","mC",10)
q(A,"mS","mB",0)
o(A.J.prototype,"gc4","X",10)
n(A.dU.prototype,"gcO","aF",18)
p(A,"ng","mH",38)
m(A.dY.prototype,"gcF",0,1,null,["$2","$1"],["bh","bg"],27,0,0)
r(A,"kK","nf",25)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.y,null)
q(A.y,[A.jp,J.a,J.ch,A.C,A.i3,A.h,A.aP,A.V,A.a4,A.cm,A.ih,A.hU,A.cs,A.da,A.bj,A.w,A.hE,A.cC,A.as,A.f1,A.fE,A.iP,A.eK,A.cj,A.eP,A.bF,A.J,A.eL,A.bz,A.aT,A.db,A.eM,A.cX,A.eT,A.ba,A.fs,A.di,A.dj,A.f8,A.d1,A.f,A.cP,A.aK,A.iv,A.ef,A.cQ,A.ix,A.bP,A.L,A.fv,A.eu,A.ha,A.jl,A.o,A.ct,A.eS,A.f5,A.dW,A.bk,A.O,A.cc,A.h4,A.dU,A.bN,A.R,A.hN,A.b1,A.S,A.ce,A.ad,A.a1,A.hI,A.b6,A.hD,A.k,A.hJ,A.i0,A.hj,A.aL,A.hk,A.hm,A.fz,A.il,A.hY,A.bU,A.cv,A.a2,A.v,A.eN,A.fF,A.hr,A.i_,A.eo,A.at,A.hL,A.iq,A.i6,A.dG,A.hp,A.aB,A.cW,A.cu,A.h1,A.cT,A.hh,A.a3,A.dR,A.dY,A.hT,A.hv,A.hV,A.cN,A.ia,A.im,A.fW,A.hQ])
q(J.a,[J.cw,J.cy,J.bq,J.t,J.cz,J.bO,A.by,A.c,A.fV,A.dD,A.aJ,A.A,A.eR,A.ap,A.hd,A.he,A.eU,A.cq,A.eW,A.hf,A.j,A.f_,A.aa,A.ht,A.f3,A.hG,A.hM,A.f9,A.fa,A.ab,A.fb,A.fd,A.ac,A.fh,A.fk,A.ae,A.fl,A.af,A.fq,A.W,A.fx,A.ie,A.ag,A.fA,A.ig,A.ik,A.fI,A.fK,A.fM,A.fO,A.fQ,A.ak,A.f6,A.al,A.ff,A.hW,A.ft,A.am,A.fC,A.h_,A.eO,A.dF,A.dT,A.ei,A.bT,A.aU,A.eC,A.eG,A.fo])
q(J.bq,[J.eg,J.cU,J.aN])
r(J.hB,J.t)
q(J.cz,[J.cx,J.dZ])
q(A.C,[A.cA,A.b7,A.e_,A.eE,A.ek,A.ci,A.eY,A.ec,A.aH,A.eF,A.eD,A.aR,A.dK,A.dM])
q(A.h,[A.m,A.bv,A.aw])
q(A.m,[A.ar,A.cB])
q(A.ar,[A.cR,A.cF])
r(A.cr,A.bv)
q(A.V,[A.cE,A.cV])
r(A.cn,A.cm)
r(A.cK,A.b7)
q(A.bj,[A.dI,A.dJ,A.ew,A.hC,A.j2,A.j4,A.is,A.ir,A.iT,A.iB,A.iJ,A.i8,A.iN,A.hK,A.iw,A.ho,A.j6,A.i5,A.iY,A.hq,A.h2,A.hA,A.hw,A.hx,A.hy,A.hz,A.ic,A.io,A.fX,A.hR])
q(A.ew,[A.es,A.bK])
r(A.eJ,A.ci)
r(A.cD,A.w)
r(A.br,A.cD)
q(A.dJ,[A.j3,A.iU,A.iX,A.iC,A.hH,A.hO,A.hP,A.i1,A.i7,A.h0,A.h8,A.h6,A.h7,A.je,A.ja,A.jc,A.j9,A.jb,A.jd,A.j8,A.jf,A.ib])
r(A.bQ,A.by)
q(A.bQ,[A.d3,A.d5])
r(A.d4,A.d3)
r(A.bx,A.d4)
r(A.d6,A.d5)
r(A.cH,A.d6)
r(A.cG,A.bx)
q(A.cH,[A.e6,A.e7,A.e8,A.e9,A.ea,A.cI,A.eb])
r(A.df,A.eY)
q(A.dI,[A.it,A.iu,A.iQ,A.iy,A.iF,A.iD,A.iA,A.iE,A.iz,A.iI,A.iH,A.iG,A.i9,A.iO,A.iL,A.iW,A.iM])
r(A.bC,A.eP)
r(A.bZ,A.db)
q(A.bz,[A.dc,A.cZ])
r(A.c_,A.dc)
r(A.c0,A.cX)
r(A.bD,A.eT)
r(A.aF,A.ba)
r(A.fj,A.di)
r(A.d7,A.dj)
r(A.d0,A.d7)
q(A.aH,[A.bS,A.dX])
q(A.c,[A.q,A.dQ,A.a6,A.d8,A.a7,A.U,A.dd,A.eH,A.bY,A.dC,A.b0])
q(A.q,[A.N,A.aA])
q(A.N,[A.n,A.l])
q(A.n,[A.dz,A.dA,A.dE,A.bh,A.bL,A.dS,A.bM,A.bw,A.el])
r(A.h9,A.aJ)
r(A.co,A.eR)
q(A.ap,[A.hb,A.hc])
r(A.eV,A.eU)
r(A.cp,A.eV)
r(A.eX,A.eW)
r(A.dN,A.eX)
r(A.a9,A.dD)
r(A.f0,A.f_)
r(A.dP,A.f0)
r(A.f4,A.f3)
r(A.bo,A.f4)
r(A.aE,A.j)
q(A.aE,[A.aO,A.a5])
r(A.e2,A.f9)
r(A.e3,A.fa)
r(A.fc,A.fb)
r(A.e4,A.fc)
r(A.fe,A.fd)
r(A.cJ,A.fe)
r(A.fi,A.fh)
r(A.eh,A.fi)
r(A.ej,A.fk)
r(A.d9,A.d8)
r(A.ep,A.d9)
r(A.fm,A.fl)
r(A.eq,A.fm)
r(A.et,A.fq)
r(A.fy,A.fx)
r(A.ex,A.fy)
r(A.de,A.dd)
r(A.ey,A.de)
r(A.fB,A.fA)
r(A.ez,A.fB)
r(A.bW,A.bw)
r(A.fJ,A.fI)
r(A.eQ,A.fJ)
r(A.cY,A.cq)
r(A.fL,A.fK)
r(A.f2,A.fL)
r(A.fN,A.fM)
r(A.d2,A.fN)
r(A.fP,A.fO)
r(A.fn,A.fP)
r(A.fR,A.fQ)
r(A.fw,A.fR)
r(A.b8,A.cZ)
r(A.d_,A.aT)
r(A.f7,A.f6)
r(A.e0,A.f7)
r(A.fg,A.ff)
r(A.ed,A.fg)
r(A.fu,A.ft)
r(A.ev,A.fu)
r(A.fD,A.fC)
r(A.eA,A.fD)
r(A.dB,A.eO)
r(A.ee,A.b0)
r(A.fp,A.fo)
r(A.er,A.fp)
q(A.iv,[A.bp,A.dV,A.b2,A.bm,A.av,A.bl,A.cd,A.bJ,A.bV,A.bA,A.X,A.bu,A.bg,A.hF,A.P,A.bi,A.aq,A.bB,A.b4,A.cO,A.aj])
q(A.i0,[A.hg,A.hn,A.e1,A.i4,A.id,A.hl])
q(A.aL,[A.eB,A.e5,A.em,A.cS])
q(A.hp,[A.h5,A.i2])
q(A.aB,[A.eI,A.cf,A.cL])
q(A.eI,[A.dH,A.dy,A.dL,A.cb])
s(A.d3,A.f)
s(A.d4,A.a4)
s(A.d5,A.f)
s(A.d6,A.a4)
s(A.bZ,A.eM)
s(A.dj,A.cP)
s(A.eR,A.ha)
s(A.eU,A.f)
s(A.eV,A.o)
s(A.eW,A.f)
s(A.eX,A.o)
s(A.f_,A.f)
s(A.f0,A.o)
s(A.f3,A.f)
s(A.f4,A.o)
s(A.f9,A.w)
s(A.fa,A.w)
s(A.fb,A.f)
s(A.fc,A.o)
s(A.fd,A.f)
s(A.fe,A.o)
s(A.fh,A.f)
s(A.fi,A.o)
s(A.fk,A.w)
s(A.d8,A.f)
s(A.d9,A.o)
s(A.fl,A.f)
s(A.fm,A.o)
s(A.fq,A.w)
s(A.fx,A.f)
s(A.fy,A.o)
s(A.dd,A.f)
s(A.de,A.o)
s(A.fA,A.f)
s(A.fB,A.o)
s(A.fI,A.f)
s(A.fJ,A.o)
s(A.fK,A.f)
s(A.fL,A.o)
s(A.fM,A.f)
s(A.fN,A.o)
s(A.fO,A.f)
s(A.fP,A.o)
s(A.fQ,A.f)
s(A.fR,A.o)
s(A.f6,A.f)
s(A.f7,A.o)
s(A.ff,A.f)
s(A.fg,A.o)
s(A.ft,A.f)
s(A.fu,A.o)
s(A.fC,A.f)
s(A.fD,A.o)
s(A.eO,A.w)
s(A.fo,A.f)
s(A.fp,A.o)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",F:"double",K:"num",r:"String",M:"bool",L:"Null",p:"List"},mangledNames:{},types:["~()","~(k,cu)","~(r,@)","~(~())","L()","L(@)","~(a5)","M(i,i)","b6(i)","~(j)","~(y,au)","~(i,@)","L(y,au)","~(y?)","~(y?,y?)","@(r)","~(r,r)","L(@,au)","aC<~>(aj)","J<@>(@)","L(aU)","~(@)","i(i,i)","i(k)","@(@,r)","~(K)","i(a3,a3)","~(y[i])","F(i)","M(R)","M(S)","M(ad)","M(a1)","i(p<k>,p<k>)","M(k)","~(aO)","@(@)","L(~())","i(at,at)","~(aK)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.m8(v.typeUniverse,JSON.parse('{"eg":"bq","cU":"bq","aN":"bq","nn":"j","nz":"j","np":"b0","no":"c","nG":"c","nI":"c","nm":"l","nA":"l","nr":"n","nB":"q","ny":"q","nH":"a5","nV":"U","nu":"aE","ns":"aA","nK":"aA","nC":"bo","nv":"A","nw":"W","nq":"bw","nF":"bx","nE":"by","cw":{"M":[]},"cy":{"L":[]},"t":{"p":["1"],"m":["1"],"h":["1"]},"hB":{"t":["1"],"p":["1"],"m":["1"],"h":["1"]},"ch":{"V":["1"]},"cz":{"F":[],"K":[]},"cx":{"F":[],"i":[],"K":[]},"dZ":{"F":[],"K":[]},"bO":{"r":[]},"cA":{"C":[]},"m":{"h":["1"]},"ar":{"m":["1"],"h":["1"]},"cR":{"ar":["1"],"m":["1"],"h":["1"],"ar.E":"1","h.E":"1"},"aP":{"V":["1"]},"bv":{"h":["2"],"h.E":"2"},"cr":{"bv":["1","2"],"m":["2"],"h":["2"],"h.E":"2"},"cE":{"V":["2"]},"cF":{"ar":["2"],"m":["2"],"h":["2"],"ar.E":"2","h.E":"2"},"aw":{"h":["1"],"h.E":"1"},"cV":{"V":["1"]},"cm":{"G":["1","2"]},"cn":{"cm":["1","2"],"G":["1","2"]},"cK":{"b7":[],"C":[]},"e_":{"C":[]},"eE":{"C":[]},"da":{"au":[]},"bj":{"bn":[]},"dI":{"bn":[]},"dJ":{"bn":[]},"ew":{"bn":[]},"es":{"bn":[]},"bK":{"bn":[]},"ek":{"C":[]},"eJ":{"C":[]},"br":{"w":["1","2"],"k4":["1","2"],"G":["1","2"],"w.K":"1","w.V":"2"},"cB":{"m":["1"],"h":["1"],"h.E":"1"},"cC":{"V":["1"]},"by":{"ah":[]},"bQ":{"u":["1"],"ah":[]},"bx":{"f":["F"],"u":["F"],"p":["F"],"m":["F"],"ah":[],"h":["F"],"a4":["F"],"f.E":"F"},"cH":{"f":["i"],"u":["i"],"p":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"]},"cG":{"f":["F"],"jn":[],"u":["F"],"p":["F"],"m":["F"],"ah":[],"h":["F"],"a4":["F"],"f.E":"F"},"e6":{"f":["i"],"u":["i"],"p":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"],"f.E":"i"},"e7":{"f":["i"],"u":["i"],"p":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"],"f.E":"i"},"e8":{"f":["i"],"u":["i"],"p":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"],"f.E":"i"},"e9":{"f":["i"],"u":["i"],"p":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"],"f.E":"i"},"ea":{"f":["i"],"u":["i"],"p":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"],"f.E":"i"},"cI":{"f":["i"],"u":["i"],"p":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"],"f.E":"i"},"eb":{"f":["i"],"lP":[],"u":["i"],"p":["i"],"m":["i"],"ah":[],"h":["i"],"a4":["i"],"f.E":"i"},"eY":{"C":[]},"df":{"b7":[],"C":[]},"J":{"aC":["1"]},"cj":{"C":[]},"bC":{"eP":["1"]},"db":{"kd":["1"],"kn":["1"],"bE":["1"]},"bZ":{"eM":["1"],"db":["1"],"kd":["1"],"kn":["1"],"bE":["1"]},"c_":{"dc":["1"],"bz":["1"]},"c0":{"cX":["1"],"aT":["1"],"bE":["1"]},"cX":{"aT":["1"],"bE":["1"]},"dc":{"bz":["1"]},"bD":{"eT":["1"]},"aF":{"ba":["1"]},"di":{"ki":[]},"fj":{"di":[],"ki":[]},"d0":{"cP":["1"],"kc":["1"],"m":["1"],"h":["1"]},"d1":{"V":["1"]},"cD":{"w":["1","2"],"G":["1","2"]},"w":{"G":["1","2"]},"d7":{"cP":["1"],"kc":["1"],"m":["1"],"h":["1"]},"F":{"K":[]},"i":{"K":[]},"p":{"m":["1"],"h":["1"]},"ci":{"C":[]},"b7":{"C":[]},"ec":{"C":[]},"aH":{"C":[]},"bS":{"C":[]},"dX":{"C":[]},"eF":{"C":[]},"eD":{"C":[]},"aR":{"C":[]},"dK":{"C":[]},"ef":{"C":[]},"cQ":{"C":[]},"dM":{"C":[]},"fv":{"au":[]},"aO":{"j":[]},"a5":{"j":[]},"q":{"c":[]},"a6":{"c":[]},"a7":{"c":[]},"U":{"c":[]},"n":{"N":[],"q":[],"c":[]},"dz":{"N":[],"q":[],"c":[]},"dA":{"N":[],"q":[],"c":[]},"dE":{"N":[],"q":[],"c":[]},"bh":{"N":[],"q":[],"c":[]},"aA":{"q":[],"c":[]},"bL":{"N":[],"q":[],"c":[]},"cp":{"f":["aD<K>"],"o":["aD<K>"],"p":["aD<K>"],"u":["aD<K>"],"m":["aD<K>"],"h":["aD<K>"],"o.E":"aD<K>","f.E":"aD<K>"},"cq":{"aD":["K"]},"dN":{"f":["r"],"o":["r"],"p":["r"],"u":["r"],"m":["r"],"h":["r"],"o.E":"r","f.E":"r"},"N":{"q":[],"c":[]},"dP":{"f":["a9"],"o":["a9"],"p":["a9"],"u":["a9"],"m":["a9"],"h":["a9"],"o.E":"a9","f.E":"a9"},"dQ":{"c":[]},"dS":{"N":[],"q":[],"c":[]},"bo":{"f":["q"],"o":["q"],"p":["q"],"u":["q"],"m":["q"],"h":["q"],"o.E":"q","f.E":"q"},"bM":{"N":[],"q":[],"c":[]},"bw":{"N":[],"q":[],"c":[]},"e2":{"w":["r","@"],"G":["r","@"],"w.K":"r","w.V":"@"},"e3":{"w":["r","@"],"G":["r","@"],"w.K":"r","w.V":"@"},"e4":{"f":["ab"],"o":["ab"],"p":["ab"],"u":["ab"],"m":["ab"],"h":["ab"],"o.E":"ab","f.E":"ab"},"cJ":{"f":["q"],"o":["q"],"p":["q"],"u":["q"],"m":["q"],"h":["q"],"o.E":"q","f.E":"q"},"eh":{"f":["ac"],"o":["ac"],"p":["ac"],"u":["ac"],"m":["ac"],"h":["ac"],"o.E":"ac","f.E":"ac"},"ej":{"w":["r","@"],"G":["r","@"],"w.K":"r","w.V":"@"},"el":{"N":[],"q":[],"c":[]},"ep":{"f":["a6"],"o":["a6"],"p":["a6"],"u":["a6"],"c":[],"m":["a6"],"h":["a6"],"o.E":"a6","f.E":"a6"},"eq":{"f":["ae"],"o":["ae"],"p":["ae"],"u":["ae"],"m":["ae"],"h":["ae"],"o.E":"ae","f.E":"ae"},"et":{"w":["r","r"],"G":["r","r"],"w.K":"r","w.V":"r"},"ex":{"f":["U"],"o":["U"],"p":["U"],"u":["U"],"m":["U"],"h":["U"],"o.E":"U","f.E":"U"},"ey":{"f":["a7"],"o":["a7"],"p":["a7"],"u":["a7"],"c":[],"m":["a7"],"h":["a7"],"o.E":"a7","f.E":"a7"},"ez":{"f":["ag"],"o":["ag"],"p":["ag"],"u":["ag"],"m":["ag"],"h":["ag"],"o.E":"ag","f.E":"ag"},"aE":{"j":[]},"bW":{"N":[],"q":[],"c":[]},"eH":{"c":[]},"bY":{"ip":[],"c":[]},"eQ":{"f":["A"],"o":["A"],"p":["A"],"u":["A"],"m":["A"],"h":["A"],"o.E":"A","f.E":"A"},"cY":{"aD":["K"]},"f2":{"f":["aa?"],"o":["aa?"],"p":["aa?"],"u":["aa?"],"m":["aa?"],"h":["aa?"],"o.E":"aa?","f.E":"aa?"},"d2":{"f":["q"],"o":["q"],"p":["q"],"u":["q"],"m":["q"],"h":["q"],"o.E":"q","f.E":"q"},"fn":{"f":["af"],"o":["af"],"p":["af"],"u":["af"],"m":["af"],"h":["af"],"o.E":"af","f.E":"af"},"fw":{"f":["W"],"o":["W"],"p":["W"],"u":["W"],"m":["W"],"h":["W"],"o.E":"W","f.E":"W"},"cZ":{"bz":["1"]},"b8":{"cZ":["1"],"bz":["1"]},"d_":{"aT":["1"]},"ct":{"V":["1"]},"eS":{"ip":[],"c":[]},"f5":{"lG":[]},"e0":{"f":["ak"],"o":["ak"],"p":["ak"],"m":["ak"],"h":["ak"],"o.E":"ak","f.E":"ak"},"ed":{"f":["al"],"o":["al"],"p":["al"],"m":["al"],"h":["al"],"o.E":"al","f.E":"al"},"ev":{"f":["r"],"o":["r"],"p":["r"],"m":["r"],"h":["r"],"o.E":"r","f.E":"r"},"l":{"N":[],"q":[],"c":[]},"eA":{"f":["am"],"o":["am"],"p":["am"],"m":["am"],"h":["am"],"o.E":"am","f.E":"am"},"dB":{"w":["r","@"],"G":["r","@"],"w.K":"r","w.V":"@"},"dC":{"c":[]},"b0":{"c":[]},"ee":{"c":[]},"er":{"f":["G<@,@>"],"o":["G<@,@>"],"p":["G<@,@>"],"m":["G<@,@>"],"h":["G<@,@>"],"o.E":"G<@,@>","f.E":"G<@,@>"},"cc":{"hs":[]},"b6":{"hs":[]},"eB":{"aL":[]},"e5":{"aL":[]},"em":{"aL":[]},"cS":{"aL":[]},"eo":{"lM":[]},"eI":{"aB":["k"]},"cf":{"aB":["1"]},"cL":{"aB":["1"]},"dH":{"aB":["k"]},"dy":{"aB":["k"]},"dL":{"aB":["k"]},"cb":{"aB":["k"]},"jn":{"p":["F"],"m":["F"],"h":["F"],"ah":[]}}'))
A.m7(v.typeUniverse,JSON.parse('{"m":1,"bQ":1,"cD":2,"d7":1,"dj":1}'))
var u={q:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",p:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",l:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",w:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x , u_block_size.x), snapTo(u_resolution.y - relative_postion.y + 0.0, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n    float visible_distance = sin(u_time * 2.0) + u_source_strength;\n    float dist = distance(vec2(relative_postion.x, u_resolution.y - relative_postion.y + 0.0), u_source_position * u_block_size) / 50.0;\n    if (dist > visible_distance) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, visible_distance, dist);\n    outColor = vec4(u_source_color.rgb * scale, scale / 2.0);\n}\n",m:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.05, 0.05, 0.05);\n\nvoid main() {\n  // front and back textures are already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 front = texture(u_light_texture, d);\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.an
return{a7:s("@<~>"),eV:s("R"),fW:s("a1"),n:s("cj"),E:s("bh"),g5:s("A"),cO:s("bL"),fu:s("aK"),gw:s("m<@>"),u:s("a3"),R:s("C"),h:s("j"),c8:s("a9"),I:s("jn"),k:s("bn"),d:s("aC<@>"),aE:s("O<bu>"),dl:s("O<bA>"),gg:s("O<X>"),L:s("O<b6>"),m:s("O<bV>"),cL:s("O<F>"),b1:s("O<bN?>"),ep:s("dW<at>"),fS:s("bM"),p:s("aj"),hf:s("h<@>"),az:s("t<cc>"),e:s("t<bJ>"),G:s("t<a2>"),f_:s("t<nt>"),X:s("t<aq>"),a:s("t<a3>"),w:s("t<aL>"),cd:s("t<hs>"),eU:s("t<aj>"),U:s("t<cv>"),de:s("t<bN>"),gr:s("t<bp>"),g2:s("t<p<k>>"),f:s("t<y>"),q:s("t<k>"),s:s("t<r>"),ap:s("t<cT>"),o:s("t<v>"),B:s("t<av>"),D:s("t<cW>"),t:s("t<F>"),gn:s("t<@>"),Y:s("t<i>"),T:s("cy"),g:s("aN"),aU:s("u<@>"),cf:s("aO"),bG:s("ak"),h5:s("p<a3>"),fb:s("p<k>"),ad:s("bu"),e8:s("G<k,a3>"),d1:s("G<r,@>"),eO:s("G<@,@>"),bP:s("S"),cI:s("ab"),V:s("a5"),A:s("q"),P:s("L"),ck:s("al"),K:s("y"),he:s("ac"),j:s("k"),e4:s("ad"),J:s("aD<K>"),r:s("bT"),fY:s("a6"),f7:s("ae"),gf:s("af"),d8:s("at"),l:s("au"),N:s("r"),cP:s("W"),d0:s("bA"),gQ:s("X"),a0:s("a7"),c7:s("U"),dy:s("aU"),W:s("b6"),a5:s("bV"),aK:s("ag"),cM:s("am"),aO:s("cT"),eK:s("b7"),Q:s("ah"),ak:s("cU"),dz:s("bW"),eL:s("aw<R>"),dP:s("aw<a1>"),fm:s("aw<S>"),aC:s("aw<ad>"),h0:s("cW"),ci:s("ip"),f0:s("bC<aU>"),ez:s("bC<~>"),fQ:s("bZ<aj>"),f2:s("eN"),b:s("b8<j>"),do:s("b8<a5>"),du:s("J<aU>"),c:s("J<@>"),fJ:s("J<i>"),dS:s("J<~>"),fv:s("fr<y?>"),gz:s("fF"),cJ:s("M"),bB:s("M(R)"),gj:s("M(a1)"),aL:s("M(S)"),al:s("M(y)"),ei:s("M(ad)"),i:s("F"),z:s("@"),fO:s("@()"),y:s("@(y)"),C:s("@(y,au)"),S:s("i"),aw:s("0&*"),_:s("y*"),ch:s("c?"),eH:s("aC<L>?"),g7:s("aa?"),br:s("bN?"),O:s("y?"),gM:s("at?"),F:s("bF<@,@>?"),hg:s("f8?"),bw:s("@(j)?"),Z:s("~()?"),eN:s("~(aO)?"),h2:s("~(a5)?"),di:s("K"),H:s("~"),M:s("~()"),x:s("~(aK)"),b7:s("~(aL)"),d5:s("~(y)"),da:s("~(y,au)"),eA:s("~(r,r)"),v:s("~(r,@)"),c4:s("~(K)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.V=A.bh.prototype
B.ba=J.a.prototype
B.a=J.t.prototype
B.bb=J.cw.prototype
B.f=J.cx.prototype
B.d=J.cz.prototype
B.y=J.bO.prototype
B.bc=J.aN.prototype
B.bu=A.cG.prototype
B.aw=J.eg.prototype
B.c=A.bT.prototype
B.a8=J.cU.prototype
B.aI=A.bY.prototype
B.a6=new A.X("table")
B.aJ=new A.cb(B.a6)
B.R=new A.X("bookshelf")
B.aK=new A.cb(B.R)
B.ac=new A.bg("surface")
B.ad=new A.bg("caves")
B.aY=new A.bg("ruins")
B.ae=new A.bg("village")
B.aZ=new A.bg("snow")
B.b_=new A.dy()
B.bO=new A.cf(A.an("cf<k>"))
B.T=new A.dH()
B.U=new A.dL()
B.af=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.b0=function() {
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
B.b5=function(getTagFallback) {
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
B.b1=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.b2=function(hooks) {
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
B.b4=function(hooks) {
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
B.b3=function(hooks) {
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

B.ah=new A.hT()
B.b6=new A.cL(A.an("cL<k>"))
B.b7=new A.ef()
B.D=new A.i3()
B.q=new A.f5()
B.n=new A.fj()
B.b8=new A.fv()
B.ai=new A.bi("north")
B.aj=new A.bi("south")
B.ak=new A.bi("east")
B.al=new A.bi("west")
B.E=new A.aq("se")
B.F=new A.aq("ne")
B.G=new A.aq("sw")
B.H=new A.aq("nw")
B.j=new A.aq("n")
B.k=new A.aq("e")
B.l=new A.aq("s")
B.m=new A.aq("w")
B.W=new A.aj("north")
B.X=new A.aj("east")
B.Y=new A.aj("south")
B.Z=new A.aj("west")
B.b9=new A.aj("skip")
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
B.am=new A.bp("melee")
B.an=new A.bp("ranged")
B.ao=new A.bp("armor")
B.ap=new A.bp("other")
B.bd=new A.hF("water")
B.a9=new A.bJ("light")
B.aa=new A.bJ("heavy")
B.ab=new A.bJ("powered")
B.cm=A.e(s([B.a9,B.aa,B.ab]),t.e)
B.aL=new A.a1(1)
B.aM=new A.a1(1)
B.aN=new A.a1(1)
B.aO=new A.a1(1)
B.cd=A.e(s([B.ab]),t.e)
B.aP=new A.a1(2)
B.cf=A.e(s([B.a9,B.aa]),t.e)
B.aQ=new A.a1(2)
B.be=A.e(s([B.aL,B.aM,B.aN,B.aO,B.aP,B.aQ]),A.an("t<a1>"))
B.aq=A.e(s([24,36]),t.t)
B.bf=A.e(s([B.ai,B.aj,B.ak,B.al]),A.an("t<bi>"))
B.bg=A.e(s([B.E,B.F,B.G,B.H,B.j,B.k,B.l,B.m]),t.X)
B.ar=A.e(s([B.j,B.l]),t.X)
B.as=A.e(s([B.k,B.m]),t.X)
B.cb=new A.dV("oneHand")
B.c3=new A.b2("bludgeoning")
B.bW=new A.bl("none")
B.bP=new A.b1()
B.c8=new A.bm("d6")
B.bC=new A.av("archaic")
B.S=new A.av("analog")
B.cl=A.e(s([B.bC,B.S]),t.B)
B.bn=new A.S(0,"Club")
B.c7=new A.bm("d4")
B.bD=new A.av("operative")
B.cj=A.e(s([B.S,B.bD]),t.B)
B.bo=new A.S(1,"Tactical Baton")
B.c5=new A.b2("slashing")
B.bt=new A.S(1,"Survival Knife")
B.cc=new A.dV("twoHand")
B.c4=new A.b2("piercing")
B.bE=new A.av("block")
B.ce=A.e(s([B.S,B.bE]),t.B)
B.bq=new A.S(1,"Tactical Spear")
B.c2=new A.b2("fire")
B.bZ=new A.bl("burn")
B.bQ=new A.b1()
B.aH=new A.av("powered")
B.ci=A.e(s([B.aH]),t.B)
B.bV=new A.hN()
B.br=new A.S(7,"Flame Sword")
B.bY=new A.bl("wound")
B.bR=new A.b1()
B.c9=new A.bm("d8")
B.bp=new A.S(9,"Plasma Sword")
B.c1=new A.b2("electricity")
B.bX=new A.bl("arc")
B.bS=new A.b1()
B.ca=new A.bm("d12")
B.bF=new A.av("stun")
B.cg=A.e(s([B.bF,B.aH]),t.B)
B.bs=new A.S(8,"Shock Staff")
B.bh=A.e(s([B.bn,B.bo,B.bt,B.bq,B.br,B.bp,B.bs]),A.an("t<S>"))
B.c0=new A.b2("cold")
B.c_=new A.bl("staggered")
B.bT=new A.b1()
B.bJ=new A.cd("charge")
B.bL=new A.ce()
B.bx=new A.ad("Zero pistol",5)
B.ch=A.e(s([B.S]),t.B)
B.bK=new A.cd("rounds")
B.bM=new A.ce()
B.bw=new A.ad("Tac Pistol",1)
B.c6=new A.bm("d3")
B.bU=new A.b1()
B.bG=new A.av("line")
B.bH=new A.av("unwieldy")
B.ck=A.e(s([B.bG,B.bH]),t.B)
B.bI=new A.cd("petro")
B.bN=new A.ce()
B.bv=new A.ad("Flame Rifle",2)
B.bi=A.e(s([B.bx,B.bw,B.bv]),A.an("t<ad>"))
B.aW=new A.R("Second Skin",1)
B.aR=new A.R("Estex Suit I",1)
B.aU=new A.R("Flight Suit",1)
B.aT=new A.R("Freebooter Armor I",2)
B.aX=new A.R("Kasatha microcord I",2)
B.aS=new A.R("Ceremonial Plate",1)
B.aV=new A.R("Golemforged Plating",1)
B.bj=A.e(s([B.aW,B.aR,B.aU,B.aT,B.aX,B.aS,B.aV]),A.an("t<R>"))
B.z=A.e(s([-1,3,-1,-1,3,-1]),t.t)
B.bk=A.e(s([]),t.X)
B.p=A.e(s([]),t.w)
B.az=new A.b4("north")
B.aA=new A.b4("south")
B.aB=new A.b4("east")
B.aC=new A.b4("west")
B.aD=new A.b4("center")
B.at=A.e(s([B.az,B.aA,B.aB,B.aC,B.aD]),A.an("t<b4>"))
B.au=new A.bu("lockedDoor")
B.bm=new A.bu("doorMechanism")
B.av=new A.bu("none")
B.bl=A.e(s([]),t.s)
B.cn=new A.cn(0,{},B.bl,A.an("cn<r,@>"))
B.A=new A.k(0,0)
B.P=new A.cO("small")
B.ax=new A.cO("medium")
B.ay=new A.cO("large")
B.a3=new A.bA("dirt")
B.B=new A.bA("metal")
B.by=new A.bA("snow")
B.C=new A.X("door")
B.bz=new A.X("grass")
B.a4=new A.X("mechanicalLight")
B.a5=new A.X("light")
B.o=new A.X("none")
B.aE=new A.X("chair")
B.Q=new A.X("chest")
B.aF=new A.X("mechanism")
B.aG=new A.X("tree")
B.h=new A.bV("floor")
B.b=new A.bV("wall")
B.bA=A.nk("y")
B.t=new A.bB("float_1")
B.e=new A.bB("float_2")
B.bB=new A.bB("float_3")
B.a7=new A.bB("float_4")
B.i=new A.bB("texture_1")})();(function staticFields(){$.iK=null
$.aI=0
$.ck=null
$.jX=null
$.kI=null
$.kE=null
$.kO=null
$.j_=null
$.j5=null
$.jM=null
$.c4=null
$.dp=null
$.dq=null
$.jH=!1
$.D=B.n
$.ai=A.e([],t.f)
$.k0=0
$.mk=A.bt(["ArrowUp",B.W,"ArrowDown",B.Y,"ArrowRight",B.X,"ArrowLeft",B.Z],t.N,t.p)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"nx","kS",function(){return A.mZ("_$dart_dartClosure")})
s($,"nL","kU",function(){return A.aV(A.ii({
toString:function(){return"$receiver$"}}))})
s($,"nM","kV",function(){return A.aV(A.ii({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"nN","kW",function(){return A.aV(A.ii(null))})
s($,"nO","kX",function(){return A.aV(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"nR","l_",function(){return A.aV(A.ii(void 0))})
s($,"nS","l0",function(){return A.aV(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"nQ","kZ",function(){return A.aV(A.kg(null))})
s($,"nP","kY",function(){return A.aV(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"nU","l2",function(){return A.aV(A.kg(void 0))})
s($,"nT","l1",function(){return A.aV(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"nW","jO",function(){return A.lR()})
s($,"o6","jh",function(){return A.kL(B.bA)})
s($,"nD","kT",function(){var r=A.jk(4278780675)
return new A.hL(A.jk(4279308561),A.jk(4280361249),r)})
s($,"o8","l4",function(){return A.jw()})
s($,"om","jT",function(){return A.bX(B.T,new A.je())})
s($,"oi","jR",function(){return A.bX(B.aJ,new A.ja())})
s($,"ok","dx",function(){return A.bX(B.U,new A.jc())})
s($,"oh","l9",function(){return A.bX(B.T,new A.j9())})
s($,"oj","la",function(){return A.bX(B.T,new A.jb())})
s($,"ol","jS",function(){return A.bX(B.U,new A.jd())})
s($,"og","l8",function(){return A.bX(B.b6,new A.j8())})
s($,"of","ji",function(){var r=$.jT(),q=$.jR()
return A.e([r,q,q,$.dx()],t.D)})
s($,"oe","l7",function(){var r=$.l8()
return A.e([r,r,r,r,r,$.dx(),$.jT(),$.jR()],t.D)})
s($,"od","l6",function(){var r=$.dx()
return A.e([r,r,r,r],t.D)})
s($,"oc","l5",function(){var r=$.dx(),q=$.l9()
return A.e([r,r,r,r,r,r,q,q,q,q],t.D)})
s($,"on","lb",function(){return A.e([$.la(),$.dx()],t.D)})
s($,"o7","l3",function(){return new Uint8Array(A.dn(A.e([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.Y)))})
s($,"oo","lc",function(){var r=A.lN(1,1,0,4,null),q=A.jw()
return new A.iq(new A.cc(r,!0),A.mU(new A.h1(A.jw(),new A.hv(q)).bC(new A.hI(B.ad,!1,1))))})
s($,"ob","jQ",function(){return t.r.a(B.V.bI(t.E.a(A.kG().querySelector("#glCanvas")),"webgl2"))})
s($,"oa","jP",function(){var r,q,p="a_position",o="u_resolution",n="u_offset",m=$.lc(),l=t.E.a(A.kG().querySelector("#glCanvas")),k=$.jQ(),j=A.e([],A.an("t<~(aK)>")),i=t.G,h=t.o,g=A.b3(A.e([A.jj(35044,A.mj(),5126,p,2),A.jj(35048,A.k6(192e3),5126,"a_color",4)],i),u.l,A.e([A.ij(B.e,o),A.ij(B.e,n)],h),u.q),f=$.kT()
h=A.b3(A.e([A.jj(35048,A.k6(8000),5126,p,2)],i),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.e([A.ij(B.e,o),A.ij(B.e,n)],h),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
i=A.lQ(A.nl())
r=A.lE(0,0)
q=A.e([],A.an("t<bU>"))
i=new A.hj(k,m,l,j,new A.eo(),new A.hm(A.hS(16e6),A.hS(4000),A.hS(4000),A.hS(64e6),r,A.bs(t.j,A.an("fz")),q),new A.h4(),new A.id(g,f),new A.hg(h),i,k.createFramebuffer(),new A.i_())
i.bR(m,l,k)
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:A.by,ArrayBufferView:A.by,Float64Array:A.bx,Float32Array:A.cG,Int16Array:A.e6,Int32Array:A.e7,Int8Array:A.e8,Uint16Array:A.e9,Uint32Array:A.ea,Uint8ClampedArray:A.cI,CanvasPixelArray:A.cI,Uint8Array:A.eb,HTMLBRElement:A.n,HTMLBaseElement:A.n,HTMLButtonElement:A.n,HTMLContentElement:A.n,HTMLDListElement:A.n,HTMLDataElement:A.n,HTMLDataListElement:A.n,HTMLDetailsElement:A.n,HTMLDialogElement:A.n,HTMLEmbedElement:A.n,HTMLFieldSetElement:A.n,HTMLHRElement:A.n,HTMLHeadElement:A.n,HTMLHeadingElement:A.n,HTMLHtmlElement:A.n,HTMLIFrameElement:A.n,HTMLInputElement:A.n,HTMLLIElement:A.n,HTMLLabelElement:A.n,HTMLLegendElement:A.n,HTMLLinkElement:A.n,HTMLMapElement:A.n,HTMLMenuElement:A.n,HTMLMetaElement:A.n,HTMLMeterElement:A.n,HTMLModElement:A.n,HTMLOListElement:A.n,HTMLObjectElement:A.n,HTMLOptGroupElement:A.n,HTMLOptionElement:A.n,HTMLOutputElement:A.n,HTMLParagraphElement:A.n,HTMLParamElement:A.n,HTMLPictureElement:A.n,HTMLPreElement:A.n,HTMLProgressElement:A.n,HTMLQuoteElement:A.n,HTMLScriptElement:A.n,HTMLShadowElement:A.n,HTMLSlotElement:A.n,HTMLSourceElement:A.n,HTMLSpanElement:A.n,HTMLStyleElement:A.n,HTMLTableCaptionElement:A.n,HTMLTableCellElement:A.n,HTMLTableDataCellElement:A.n,HTMLTableHeaderCellElement:A.n,HTMLTableColElement:A.n,HTMLTableElement:A.n,HTMLTableRowElement:A.n,HTMLTableSectionElement:A.n,HTMLTemplateElement:A.n,HTMLTextAreaElement:A.n,HTMLTimeElement:A.n,HTMLTitleElement:A.n,HTMLTrackElement:A.n,HTMLUListElement:A.n,HTMLUnknownElement:A.n,HTMLDirectoryElement:A.n,HTMLFontElement:A.n,HTMLFrameElement:A.n,HTMLFrameSetElement:A.n,HTMLMarqueeElement:A.n,HTMLElement:A.n,AccessibleNodeList:A.fV,HTMLAnchorElement:A.dz,HTMLAreaElement:A.dA,Blob:A.dD,HTMLBodyElement:A.dE,HTMLCanvasElement:A.bh,CDATASection:A.aA,CharacterData:A.aA,Comment:A.aA,ProcessingInstruction:A.aA,Text:A.aA,CSSPerspective:A.h9,CSSCharsetRule:A.A,CSSConditionRule:A.A,CSSFontFaceRule:A.A,CSSGroupingRule:A.A,CSSImportRule:A.A,CSSKeyframeRule:A.A,MozCSSKeyframeRule:A.A,WebKitCSSKeyframeRule:A.A,CSSKeyframesRule:A.A,MozCSSKeyframesRule:A.A,WebKitCSSKeyframesRule:A.A,CSSMediaRule:A.A,CSSNamespaceRule:A.A,CSSPageRule:A.A,CSSRule:A.A,CSSStyleRule:A.A,CSSSupportsRule:A.A,CSSViewportRule:A.A,CSSStyleDeclaration:A.co,MSStyleCSSProperties:A.co,CSS2Properties:A.co,CSSImageValue:A.ap,CSSKeywordValue:A.ap,CSSNumericValue:A.ap,CSSPositionValue:A.ap,CSSResourceValue:A.ap,CSSUnitValue:A.ap,CSSURLImageValue:A.ap,CSSStyleValue:A.ap,CSSMatrixComponent:A.aJ,CSSRotation:A.aJ,CSSScale:A.aJ,CSSSkew:A.aJ,CSSTranslation:A.aJ,CSSTransformComponent:A.aJ,CSSTransformValue:A.hb,CSSUnparsedValue:A.hc,DataTransferItemList:A.hd,HTMLDivElement:A.bL,DOMException:A.he,ClientRectList:A.cp,DOMRectList:A.cp,DOMRectReadOnly:A.cq,DOMStringList:A.dN,DOMTokenList:A.hf,Element:A.N,AbortPaymentEvent:A.j,AnimationEvent:A.j,AnimationPlaybackEvent:A.j,ApplicationCacheErrorEvent:A.j,BackgroundFetchClickEvent:A.j,BackgroundFetchEvent:A.j,BackgroundFetchFailEvent:A.j,BackgroundFetchedEvent:A.j,BeforeInstallPromptEvent:A.j,BeforeUnloadEvent:A.j,BlobEvent:A.j,CanMakePaymentEvent:A.j,ClipboardEvent:A.j,CloseEvent:A.j,CustomEvent:A.j,DeviceMotionEvent:A.j,DeviceOrientationEvent:A.j,ErrorEvent:A.j,ExtendableEvent:A.j,ExtendableMessageEvent:A.j,FetchEvent:A.j,FontFaceSetLoadEvent:A.j,ForeignFetchEvent:A.j,GamepadEvent:A.j,HashChangeEvent:A.j,InstallEvent:A.j,MediaEncryptedEvent:A.j,MediaKeyMessageEvent:A.j,MediaQueryListEvent:A.j,MediaStreamEvent:A.j,MediaStreamTrackEvent:A.j,MessageEvent:A.j,MIDIConnectionEvent:A.j,MIDIMessageEvent:A.j,MutationEvent:A.j,NotificationEvent:A.j,PageTransitionEvent:A.j,PaymentRequestEvent:A.j,PaymentRequestUpdateEvent:A.j,PopStateEvent:A.j,PresentationConnectionAvailableEvent:A.j,PresentationConnectionCloseEvent:A.j,ProgressEvent:A.j,PromiseRejectionEvent:A.j,PushEvent:A.j,RTCDataChannelEvent:A.j,RTCDTMFToneChangeEvent:A.j,RTCPeerConnectionIceEvent:A.j,RTCTrackEvent:A.j,SecurityPolicyViolationEvent:A.j,SensorErrorEvent:A.j,SpeechRecognitionError:A.j,SpeechRecognitionEvent:A.j,SpeechSynthesisEvent:A.j,StorageEvent:A.j,SyncEvent:A.j,TrackEvent:A.j,TransitionEvent:A.j,WebKitTransitionEvent:A.j,VRDeviceEvent:A.j,VRDisplayEvent:A.j,VRSessionEvent:A.j,MojoInterfaceRequestEvent:A.j,ResourceProgressEvent:A.j,USBConnectionEvent:A.j,IDBVersionChangeEvent:A.j,AudioProcessingEvent:A.j,OfflineAudioCompletionEvent:A.j,WebGLContextEvent:A.j,Event:A.j,InputEvent:A.j,SubmitEvent:A.j,AbsoluteOrientationSensor:A.c,Accelerometer:A.c,AccessibleNode:A.c,AmbientLightSensor:A.c,Animation:A.c,ApplicationCache:A.c,DOMApplicationCache:A.c,OfflineResourceList:A.c,BackgroundFetchRegistration:A.c,BatteryManager:A.c,BroadcastChannel:A.c,CanvasCaptureMediaStreamTrack:A.c,DedicatedWorkerGlobalScope:A.c,EventSource:A.c,FileReader:A.c,FontFaceSet:A.c,Gyroscope:A.c,XMLHttpRequest:A.c,XMLHttpRequestEventTarget:A.c,XMLHttpRequestUpload:A.c,LinearAccelerationSensor:A.c,Magnetometer:A.c,MediaDevices:A.c,MediaKeySession:A.c,MediaQueryList:A.c,MediaRecorder:A.c,MediaSource:A.c,MediaStream:A.c,MediaStreamTrack:A.c,MessagePort:A.c,MIDIAccess:A.c,MIDIInput:A.c,MIDIOutput:A.c,MIDIPort:A.c,NetworkInformation:A.c,Notification:A.c,OffscreenCanvas:A.c,OrientationSensor:A.c,PaymentRequest:A.c,Performance:A.c,PermissionStatus:A.c,PresentationAvailability:A.c,PresentationConnection:A.c,PresentationConnectionList:A.c,PresentationRequest:A.c,RelativeOrientationSensor:A.c,RemotePlayback:A.c,RTCDataChannel:A.c,DataChannel:A.c,RTCDTMFSender:A.c,RTCPeerConnection:A.c,webkitRTCPeerConnection:A.c,mozRTCPeerConnection:A.c,ScreenOrientation:A.c,Sensor:A.c,ServiceWorker:A.c,ServiceWorkerContainer:A.c,ServiceWorkerGlobalScope:A.c,ServiceWorkerRegistration:A.c,SharedWorker:A.c,SharedWorkerGlobalScope:A.c,SpeechRecognition:A.c,SpeechSynthesis:A.c,SpeechSynthesisUtterance:A.c,VR:A.c,VRDevice:A.c,VRDisplay:A.c,VRSession:A.c,VisualViewport:A.c,WebSocket:A.c,Worker:A.c,WorkerGlobalScope:A.c,WorkerPerformance:A.c,BluetoothDevice:A.c,BluetoothRemoteGATTCharacteristic:A.c,Clipboard:A.c,MojoInterfaceInterceptor:A.c,USB:A.c,IDBDatabase:A.c,IDBOpenDBRequest:A.c,IDBVersionChangeRequest:A.c,IDBRequest:A.c,IDBTransaction:A.c,AnalyserNode:A.c,RealtimeAnalyserNode:A.c,AudioBufferSourceNode:A.c,AudioDestinationNode:A.c,AudioNode:A.c,AudioScheduledSourceNode:A.c,AudioWorkletNode:A.c,BiquadFilterNode:A.c,ChannelMergerNode:A.c,AudioChannelMerger:A.c,ChannelSplitterNode:A.c,AudioChannelSplitter:A.c,ConstantSourceNode:A.c,ConvolverNode:A.c,DelayNode:A.c,DynamicsCompressorNode:A.c,GainNode:A.c,AudioGainNode:A.c,IIRFilterNode:A.c,MediaElementAudioSourceNode:A.c,MediaStreamAudioDestinationNode:A.c,MediaStreamAudioSourceNode:A.c,OscillatorNode:A.c,Oscillator:A.c,PannerNode:A.c,AudioPannerNode:A.c,webkitAudioPannerNode:A.c,ScriptProcessorNode:A.c,JavaScriptAudioNode:A.c,StereoPannerNode:A.c,WaveShaperNode:A.c,EventTarget:A.c,File:A.a9,FileList:A.dP,FileWriter:A.dQ,HTMLFormElement:A.dS,Gamepad:A.aa,History:A.ht,HTMLCollection:A.bo,HTMLFormControlsCollection:A.bo,HTMLOptionsCollection:A.bo,HTMLImageElement:A.bM,KeyboardEvent:A.aO,Location:A.hG,HTMLAudioElement:A.bw,HTMLMediaElement:A.bw,MediaList:A.hM,MIDIInputMap:A.e2,MIDIOutputMap:A.e3,MimeType:A.ab,MimeTypeArray:A.e4,MouseEvent:A.a5,DragEvent:A.a5,PointerEvent:A.a5,WheelEvent:A.a5,Document:A.q,DocumentFragment:A.q,HTMLDocument:A.q,ShadowRoot:A.q,XMLDocument:A.q,Attr:A.q,DocumentType:A.q,Node:A.q,NodeList:A.cJ,RadioNodeList:A.cJ,Plugin:A.ac,PluginArray:A.eh,RTCStatsReport:A.ej,HTMLSelectElement:A.el,SourceBuffer:A.a6,SourceBufferList:A.ep,SpeechGrammar:A.ae,SpeechGrammarList:A.eq,SpeechRecognitionResult:A.af,Storage:A.et,CSSStyleSheet:A.W,StyleSheet:A.W,TextTrack:A.a7,TextTrackCue:A.U,VTTCue:A.U,TextTrackCueList:A.ex,TextTrackList:A.ey,TimeRanges:A.ie,Touch:A.ag,TouchList:A.ez,TrackDefaultList:A.ig,CompositionEvent:A.aE,FocusEvent:A.aE,TextEvent:A.aE,TouchEvent:A.aE,UIEvent:A.aE,URL:A.ik,HTMLVideoElement:A.bW,VideoTrackList:A.eH,Window:A.bY,DOMWindow:A.bY,CSSRuleList:A.eQ,ClientRect:A.cY,DOMRect:A.cY,GamepadList:A.f2,NamedNodeMap:A.d2,MozNamedAttrMap:A.d2,SpeechRecognitionResultList:A.fn,StyleSheetList:A.fw,SVGLength:A.ak,SVGLengthList:A.e0,SVGNumber:A.al,SVGNumberList:A.ed,SVGPointList:A.hW,SVGStringList:A.ev,SVGAElement:A.l,SVGAnimateElement:A.l,SVGAnimateMotionElement:A.l,SVGAnimateTransformElement:A.l,SVGAnimationElement:A.l,SVGCircleElement:A.l,SVGClipPathElement:A.l,SVGDefsElement:A.l,SVGDescElement:A.l,SVGDiscardElement:A.l,SVGEllipseElement:A.l,SVGFEBlendElement:A.l,SVGFEColorMatrixElement:A.l,SVGFEComponentTransferElement:A.l,SVGFECompositeElement:A.l,SVGFEConvolveMatrixElement:A.l,SVGFEDiffuseLightingElement:A.l,SVGFEDisplacementMapElement:A.l,SVGFEDistantLightElement:A.l,SVGFEFloodElement:A.l,SVGFEFuncAElement:A.l,SVGFEFuncBElement:A.l,SVGFEFuncGElement:A.l,SVGFEFuncRElement:A.l,SVGFEGaussianBlurElement:A.l,SVGFEImageElement:A.l,SVGFEMergeElement:A.l,SVGFEMergeNodeElement:A.l,SVGFEMorphologyElement:A.l,SVGFEOffsetElement:A.l,SVGFEPointLightElement:A.l,SVGFESpecularLightingElement:A.l,SVGFESpotLightElement:A.l,SVGFETileElement:A.l,SVGFETurbulenceElement:A.l,SVGFilterElement:A.l,SVGForeignObjectElement:A.l,SVGGElement:A.l,SVGGeometryElement:A.l,SVGGraphicsElement:A.l,SVGImageElement:A.l,SVGLineElement:A.l,SVGLinearGradientElement:A.l,SVGMarkerElement:A.l,SVGMaskElement:A.l,SVGMetadataElement:A.l,SVGPathElement:A.l,SVGPatternElement:A.l,SVGPolygonElement:A.l,SVGPolylineElement:A.l,SVGRadialGradientElement:A.l,SVGRectElement:A.l,SVGScriptElement:A.l,SVGSetElement:A.l,SVGStopElement:A.l,SVGStyleElement:A.l,SVGElement:A.l,SVGSVGElement:A.l,SVGSwitchElement:A.l,SVGSymbolElement:A.l,SVGTSpanElement:A.l,SVGTextContentElement:A.l,SVGTextElement:A.l,SVGTextPathElement:A.l,SVGTextPositioningElement:A.l,SVGTitleElement:A.l,SVGUseElement:A.l,SVGViewElement:A.l,SVGGradientElement:A.l,SVGComponentTransferFunctionElement:A.l,SVGFEDropShadowElement:A.l,SVGMPathElement:A.l,SVGTransform:A.am,SVGTransformList:A.eA,AudioBuffer:A.h_,AudioParamMap:A.dB,AudioTrackList:A.dC,AudioContext:A.b0,webkitAudioContext:A.b0,BaseAudioContext:A.b0,OfflineAudioContext:A.ee,WebGLBuffer:A.dF,WebGLFramebuffer:A.dT,WebGLProgram:A.ei,WebGL2RenderingContext:A.bT,WebGLTexture:A.aU,WebGLUniformLocation:A.eC,WebGLVertexArrayObject:A.eG,SQLResultSetRowList:A.er})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,SQLResultSetRowList:true})
A.bQ.$nativeSuperclassTag="ArrayBufferView"
A.d3.$nativeSuperclassTag="ArrayBufferView"
A.d4.$nativeSuperclassTag="ArrayBufferView"
A.bx.$nativeSuperclassTag="ArrayBufferView"
A.d5.$nativeSuperclassTag="ArrayBufferView"
A.d6.$nativeSuperclassTag="ArrayBufferView"
A.cH.$nativeSuperclassTag="ArrayBufferView"
A.d8.$nativeSuperclassTag="EventTarget"
A.d9.$nativeSuperclassTag="EventTarget"
A.dd.$nativeSuperclassTag="EventTarget"
A.de.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
Function.prototype.$9=function(a,b,c,d,e,f,g,h,i){return this(a,b,c,d,e,f,g,h,i)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.na
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

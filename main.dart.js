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
a[c]=function(){a[c]=function(){A.rA(b)}
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
if(a[b]!==s)A.rB(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=b.fs[0]
if(a)return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"(receiver) {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(receiver, this);"+"}")(b,A.mG,null)
else return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"() {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(this, null);"+"}")(b,A.mG,null)}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.mG(a).prototype
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
a(hunkHelpers,v,w,$)}var A={mm:function mm(){},
nc(a){return new A.cj("Field '"+a+"' has been assigned during initialization.")},
nd(a){return new A.cj("Field '"+a+"' has not been initialized.")},
bP(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mt(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
pP(a,b,c){return A.mt(A.bP(A.bP(c,a),b))},
eU(a,b,c){return a},
nv(a,b,c,d){A.km(b,"start")
if(c!=null){A.km(c,"end")
if(b>c)A.T(A.cs(b,0,c,"start",null))}return new A.eg(a,b,c,d.i("eg<0>"))},
nh(a,b,c,d){if(t.gt.b(a))return new A.dM(a,b,c.i("@<0>").C(d).i("dM<1,2>"))
return new A.cl(a,b,c.i("@<0>").C(d).i("cl<1,2>"))},
n9(){return new A.bp("No element")},
na(){return new A.bp("Too many elements")},
pp(){return new A.bp("Too few elements")},
pM(a,b,c){A.h9(a,0,J.am(a)-1,b,c)},
h9(a,b,c,d,e){if(c-b<=32)A.pL(a,b,c,d,e)
else A.pK(a,b,c,d,e)},
pL(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aw(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.V()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
pK(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.e.O(a5-a4+1,6),i=a4+j,h=a5-j,g=B.e.O(a4+a5,2),f=g-j,e=g+j,d=J.aw(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a1
a1=a0
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.V(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
A.h9(a3,a4,r-2,a6,a7)
A.h9(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.V(a6.$2(d.h(a3,r),b),0);)++r
for(;J.V(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}A.h9(a3,r,q,a6,a7)}else A.h9(a3,r,q,a6,a7)},
cj:function cj(a){this.a=a},
ks:function ks(){},
o:function o(){},
aK:function aK(){},
eg:function eg(a,b,c,d){var _=this
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
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
dM:function dM(a,b,c){this.a=a
this.b=b
this.$ti=c},
e0:function e0(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
cm:function cm(a,b,c){this.a=a
this.b=b
this.$ti=c},
a6:function a6(a,b,c){this.a=a
this.b=b
this.$ti=c},
ek:function ek(a,b,c){this.a=a
this.b=b
this.$ti=c},
aq:function aq(){},
pl(a){if(typeof a=="number")return B.c.gu(a)
if(t.ha.b(a))return A.cr(a)
return A.lN(a)},
pm(a){return new A.jB(a)},
od(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
ro(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
y(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.c2(a)
return s},
cr(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
ki(a){return A.pA(a)},
pA(a){var s,r,q,p
if(a instanceof A.v)return A.al(A.aR(a),null)
if(J.dt(a)===B.dy||t.cx.b(a)){s=B.aO(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.al(A.aR(a),null)},
d5(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
pH(a){var s=A.d5(a).getUTCFullYear()+0
return s},
pF(a){var s=A.d5(a).getUTCMonth()+1
return s},
pB(a){var s=A.d5(a).getUTCDate()+0
return s},
pC(a){var s=A.d5(a).getUTCHours()+0
return s},
pE(a){var s=A.d5(a).getUTCMinutes()+0
return s},
pG(a){var s=A.d5(a).getUTCSeconds()+0
return s},
pD(a){var s=A.d5(a).getUTCMilliseconds()+0
return s},
cF(a){throw A.d(A.o0(a))},
b(a,b){if(a==null)J.am(a)
throw A.d(A.ds(a,b))},
ds(a,b){var s,r="index"
if(!A.mD(b))return new A.b_(!0,b,r,null)
s=A.G(J.am(a))
if(b<0||b>=s)return A.R(b,a,r,null,s)
return A.nn(b,r)},
o0(a){return new A.b_(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.fT()
s=new Error()
s.dartException=a
r=A.rC
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
rC(){return J.c2(this.dartException)},
T(a){throw A.d(a)},
C(a){throw A.d(A.bH(a))},
bs(a){var s,r,q,p,o,n
a=A.rw(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.kJ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
kK(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ny(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mn(a,b){var s=b==null,r=s?null:b.method
return new A.fz(a,r,s?null:b.receiver)},
bf(a){if(a==null)return new A.kd(a)
if(a instanceof A.dO)return A.c1(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.c1(a,a.dartException)
return A.qX(a)},
c1(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.cn(r,16)&8191)===10)switch(q){case 438:return A.c1(a,A.mn(A.y(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.y(s)+" (Error "+q+")"
return A.c1(a,new A.e6(p,e))}}if(a instanceof TypeError){o=$.op()
n=$.oq()
m=$.or()
l=$.os()
k=$.ov()
j=$.ow()
i=$.ou()
$.ot()
h=$.oy()
g=$.ox()
f=o.Z(s)
if(f!=null)return A.c1(a,A.mn(A.Q(s),f))
else{f=n.Z(s)
if(f!=null){f.method="call"
return A.c1(a,A.mn(A.Q(s),f))}else{f=m.Z(s)
if(f==null){f=l.Z(s)
if(f==null){f=k.Z(s)
if(f==null){f=j.Z(s)
if(f==null){f=i.Z(s)
if(f==null){f=l.Z(s)
if(f==null){f=h.Z(s)
if(f==null){f=g.Z(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.Q(s)
return A.c1(a,new A.e6(s,f==null?e:f.method))}}}return A.c1(a,new A.ht(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ef()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.c1(a,new A.b_(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ef()
return a},
bC(a){var s
if(a instanceof A.dO)return a.b
if(a==null)return new A.eE(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.eE(a)},
lN(a){if(a==null||typeof a!="object")return J.cH(a)
else return A.cr(a)},
o2(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
rm(a,b,c,d,e,f){t.r.a(a)
switch(A.G(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.mj("Unsupported number of arguments for wrapped closure"))},
be(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.rm)
a.$identity=s
return s},
p9(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.hf().constructor.prototype):Object.create(new A.cO(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else{q=$.bh
if(typeof q!=="number")return q.A()
$.bh=q+1
q=new Function("a,b"+q,"this.$initialize(a,b"+q+")")
r=q}s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.n1(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.p5(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.n1(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
p5(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.p3)}throw A.d("Error in functionType of tearoff")},
p6(a,b,c,d){var s=A.n_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
n1(a,b,c,d){var s,r,q,p,o,n="receiver"
if(c)return A.p8(a,b,d)
s=b.length
r=d||s>=27
if(r)return A.p6(s,d,a,b)
if(s===0){r=$.bh
if(typeof r!=="number")return r.A()
$.bh=r+1
q="self"+r
r="return function(){var "+q+" = this."
p=$.dG
return new Function(r+(p==null?$.dG=A.j7(n):p)+";return "+q+"."+a+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
r=$.bh
if(typeof r!=="number")return r.A()
$.bh=r+1
o+=r
r="return function("+o+"){return this."
p=$.dG
return new Function(r+(p==null?$.dG=A.j7(n):p)+"."+a+"("+o+");}")()},
p7(a,b,c,d){var s=A.n_,r=A.p4
switch(b?-1:a){case 0:throw A.d(new A.h7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
p8(a,b,c){var s,r,q,p,o,n=$.mZ
if(n==null)n=$.mZ=A.j7("interceptor")
s=$.dG
if(s==null)s=$.dG=A.j7("receiver")
r=b.length
q=c||r>=28
if(q)return A.p7(r,c,a,b)
if(r===1){q="return function(){return this."+n+"."+a+"(this."+s+");"
p=$.bh
if(typeof p!=="number")return p.A()
$.bh=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
q="return function("+o+"){return this."+n+"."+a+"(this."+s+", "+o+");"
p=$.bh
if(typeof p!=="number")return p.A()
$.bh=p+1
return new Function(q+p+"}")()},
mG(a){return A.p9(a)},
p3(a,b){return A.lp(v.typeUniverse,A.aR(a.a),b)},
n_(a){return a.a},
p4(a){return a.b},
j7(a){var s,r,q,p=new A.cO("receiver","interceptor"),o=J.nb(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.cK("Field name "+a+" not found.",null))},
O(a){if(a==null)A.qY("boolean expression must not be null")
return a},
qY(a){throw A.d(new A.hA(a))},
rA(a){throw A.d(new A.fg(a))},
re(a){return v.getIsolateTag(a)},
tJ(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
rr(a){var s,r,q,p,o,n=A.Q($.o3.$1(a)),m=$.lD[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lJ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.nO($.o_.$2(a,n))
if(q!=null){m=$.lD[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lJ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.lM(s)
$.lD[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.lJ[n]=s
return s}if(p==="-"){o=A.lM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.o9(a,s)
if(p==="*")throw A.d(A.mu(n))
if(v.leafTags[n]===true){o=A.lM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.o9(a,s)},
o9(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.mJ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lM(a){return J.mJ(a,!1,null,!!a.$iz)},
rs(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.lM(s)
else return J.mJ(s,c,null,null)},
rk(){if(!0===$.mI)return
$.mI=!0
A.rl()},
rl(){var s,r,q,p,o,n,m,l
$.lD=Object.create(null)
$.lJ=Object.create(null)
A.rj()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.oa.$1(o)
if(n!=null){m=A.rs(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
rj(){var s,r,q,p,o,n,m=B.c3()
m=A.dr(B.c4,A.dr(B.c5,A.dr(B.aP,A.dr(B.aP,A.dr(B.c6,A.dr(B.c7,A.dr(B.c8(B.aO),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.o3=new A.lG(p)
$.o_=new A.lH(o)
$.oa=new A.lI(n)},
dr(a,b){return a(b)||b},
rz(a,b,c){var s=a.indexOf(b,c)
return s>=0},
rw(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cS:function cS(){},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ag:function ag(a,b){this.a=a
this.$ti=b},
jB:function jB(a){this.a=a},
kJ:function kJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e6:function e6(a,b){this.a=a
this.b=b},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a){this.a=a},
kd:function kd(a){this.a=a},
dO:function dO(a,b){this.a=a
this.b=b},
eE:function eE(a){this.a=a
this.b=null},
c8:function c8(){},
fb:function fb(){},
fc:function fc(){},
hl:function hl(){},
hf:function hf(){},
cO:function cO(a,b){this.a=a
this.b=b},
h7:function h7(a){this.a=a},
hA:function hA(a){this.a=a},
az:function az(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jO:function jO(a){this.a=a},
jN:function jN(a){this.a=a},
jQ:function jQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dW:function dW(a,b){this.a=a
this.$ti=b},
dX:function dX(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lG:function lG(a){this.a=a},
lH:function lH(a){this.a=a},
lI:function lI(a){this.a=a},
rB(a){return A.T(A.nc(a))},
mv(a){var s=new A.kY(a)
return s.b=s},
bd(a,b){if(a===$)throw A.d(A.nd(b))
return a},
dn(a,b){if(a!==$)throw A.d(A.nc(b))},
kY:function kY(a){this.a=a
this.b=null},
nP(a,b,c){},
dl(a){return a},
ni(a){return new Float32Array(A.dl(a))},
k8(a,b,c){A.nP(a,b,c)
return new Float32Array(a,b,c)},
nj(a,b,c){var s
A.nP(a,b,c)
s=new Uint8Array(a,b,c)
return s},
bw(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.ds(b,a))},
fK:function fK(){},
cp:function cp(){},
d3:function d3(){},
co:function co(){},
e2:function e2(){},
e1:function e1(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
d4:function d4(){},
e3:function e3(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
np(a,b){var s=b.c
return s==null?b.c=A.mA(a,b.z,!0):s},
no(a,b){var s=b.c
return s==null?b.c=A.eM(a,"ar",[b.z]):s},
nq(a){var s=a.y
if(s===6||s===7||s===8)return A.nq(a.z)
return s===11||s===12},
pJ(a){return a.cy},
ae(a){return A.iD(v.typeUniverse,a,!1)},
c0(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.c0(a,s,a0,a1)
if(r===s)return b
return A.nK(a,r,!0)
case 7:s=b.z
r=A.c0(a,s,a0,a1)
if(r===s)return b
return A.mA(a,r,!0)
case 8:s=b.z
r=A.c0(a,s,a0,a1)
if(r===s)return b
return A.nJ(a,r,!0)
case 9:q=b.Q
p=A.eT(a,q,a0,a1)
if(p===q)return b
return A.eM(a,b.z,p)
case 10:o=b.z
n=A.c0(a,o,a0,a1)
m=b.Q
l=A.eT(a,m,a0,a1)
if(n===o&&l===m)return b
return A.my(a,n,l)
case 11:k=b.z
j=A.c0(a,k,a0,a1)
i=b.Q
h=A.qU(a,i,a0,a1)
if(j===k&&h===i)return b
return A.nI(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.eT(a,g,a0,a1)
o=b.z
n=A.c0(a,o,a0,a1)
if(f===g&&n===o)return b
return A.mz(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.iX("Attempted to substitute unexpected RTI kind "+c))}},
eT(a,b,c,d){var s,r,q,p,o=b.length,n=A.lr(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.c0(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
qV(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.lr(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.c0(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
qU(a,b,c,d){var s,r=b.a,q=A.eT(a,r,c,d),p=b.b,o=A.eT(a,p,c,d),n=b.c,m=A.qV(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.hU()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
r5(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.rf(s)
return a.$S()}return null},
o4(a,b){var s
if(A.nq(b))if(a instanceof A.c8){s=A.r5(a)
if(s!=null)return s}return A.aR(a)},
aR(a){var s
if(a instanceof A.v){s=a.$ti
return s!=null?s:A.mB(a)}if(Array.isArray(a))return A.a0(a)
return A.mB(J.dt(a))},
a0(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
B(a){var s=a.$ti
return s!=null?s:A.mB(a)},
mB(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.qB(a,s)},
qB(a,b){var s=a instanceof A.c8?a.__proto__.__proto__.constructor:b,r=A.qi(v.typeUniverse,s.name)
b.$ccache=r
return r},
rf(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.iD(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
r8(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.eK(a)
q=A.iD(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.eK(q):p},
rD(a){return A.r8(A.iD(v.typeUniverse,a,!1))},
qA(a){var s,r,q,p,o=this
if(o===t.K)return A.dm(o,a,A.qF)
if(!A.bD(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.dm(o,a,A.qI)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.mD
else if(r===t.i||r===t.cZ)q=A.qE
else if(r===t.N)q=A.qG
else q=r===t.k4?A.lv:null
if(q!=null)return A.dm(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.rp)){o.r="$i"+p
if(p==="m")return A.dm(o,a,A.qD)
return A.dm(o,a,A.qH)}}else if(s===7)return A.dm(o,a,A.qy)
return A.dm(o,a,A.qw)},
dm(a,b,c){a.b=c
return a.b(b)},
qz(a){var s,r=this,q=A.qv
if(!A.bD(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.qm
else if(r===t.K)q=A.ql
else{s=A.eV(r)
if(s)q=A.qx}r.a=q
return r.a(a)},
lw(a){var s,r=a.y
if(!A.bD(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&A.lw(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qw(a){var s=this
if(a==null)return A.lw(s)
return A.S(v.typeUniverse,A.o4(a,s),null,s,null)},
qy(a){if(a==null)return!0
return this.z.b(a)},
qH(a){var s,r=this
if(a==null)return A.lw(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dt(a)[s]},
qD(a){var s,r=this
if(a==null)return A.lw(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dt(a)[s]},
qv(a){var s,r=this
if(a==null){s=A.eV(r)
if(s)return a}else if(r.b(a))return a
A.nT(a,r)},
qx(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.nT(a,s)},
nT(a,b){throw A.d(A.nH(A.nA(a,A.o4(a,b),A.al(b,null))))},
r4(a,b,c,d){var s=null
if(A.S(v.typeUniverse,a,s,b,s))return a
throw A.d(A.nH("The type argument '"+A.al(a,s)+"' is not a subtype of the type variable bound '"+A.al(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
nA(a,b,c){var s=A.fm(a),r=A.al(b==null?A.aR(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
nH(a){return new A.eL("TypeError: "+a)},
ak(a,b){return new A.eL("TypeError: "+A.nA(a,null,b))},
qF(a){return a!=null},
ql(a){if(a!=null)return a
throw A.d(A.ak(a,"Object"))},
qI(a){return!0},
qm(a){return a},
lv(a){return!0===a||!1===a},
qk(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.ak(a,"bool"))},
tv(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.ak(a,"bool"))},
tu(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.ak(a,"bool?"))},
nN(a){if(typeof a=="number")return a
throw A.d(A.ak(a,"double"))},
tx(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ak(a,"double"))},
tw(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ak(a,"double?"))},
mD(a){return typeof a=="number"&&Math.floor(a)===a},
G(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.ak(a,"int"))},
tz(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.ak(a,"int"))},
ty(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.ak(a,"int?"))},
qE(a){return typeof a=="number"},
aY(a){if(typeof a=="number")return a
throw A.d(A.ak(a,"num"))},
tB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ak(a,"num"))},
tA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.ak(a,"num?"))},
qG(a){return typeof a=="string"},
Q(a){if(typeof a=="string")return a
throw A.d(A.ak(a,"String"))},
tC(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.ak(a,"String"))},
nO(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.ak(a,"String?"))},
qQ(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.al(a[q],b)
return s},
nU(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.c([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.k(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.b(a5,j)
m=B.x.A(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.al(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.al(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.al(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.al(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.al(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
al(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.al(a.z,b)
return s}if(l===7){r=a.z
s=A.al(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.al(a.z,b)+">"
if(l===9){p=A.qW(a.z)
o=a.Q
return o.length>0?p+("<"+A.qQ(o,b)+">"):p}if(l===11)return A.nU(a,b,null)
if(l===12)return A.nU(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
qW(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
qj(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
qi(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.iD(a,b,!1)
else if(typeof m=="number"){s=m
r=A.eN(a,5,"#")
q=A.lr(s)
for(p=0;p<s;++p)q[p]=r
o=A.eM(a,b,q)
n[b]=o
return o}else return m},
qg(a,b){return A.nL(a.tR,b)},
qf(a,b){return A.nL(a.eT,b)},
iD(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.nE(A.nC(a,null,b,c))
r.set(b,s)
return s},
lp(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.nE(A.nC(a,b,c,!0))
q.set(c,r)
return r},
qh(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.my(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
c_(a,b){b.a=A.qz
b.b=A.qA
return b},
eN(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aW(null,null)
s.y=b
s.cy=c
r=A.c_(a,s)
a.eC.set(c,r)
return r},
nK(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.qd(a,b,r,c)
a.eC.set(r,s)
return s},
qd(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bD(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.aW(null,null)
q.y=6
q.z=b
q.cy=c
return A.c_(a,q)},
mA(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.qc(a,b,r,c)
a.eC.set(r,s)
return s},
qc(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.bD(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.eV(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.eV(q.z))return q
else return A.np(a,b)}}p=new A.aW(null,null)
p.y=7
p.z=b
p.cy=c
return A.c_(a,p)},
nJ(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.qa(a,b,r,c)
a.eC.set(r,s)
return s},
qa(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bD(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.eM(a,"ar",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.aW(null,null)
q.y=8
q.z=b
q.cy=c
return A.c_(a,q)},
qe(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aW(null,null)
s.y=13
s.z=b
s.cy=q
r=A.c_(a,s)
a.eC.set(q,r)
return r},
iC(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
q9(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
eM(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iC(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aW(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.c_(a,r)
a.eC.set(p,q)
return q},
my(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.iC(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aW(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.c_(a,o)
a.eC.set(q,n)
return n},
nI(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iC(m)
if(j>0){s=l>0?",":""
r=A.iC(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.q9(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aW(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.c_(a,o)
a.eC.set(q,r)
return r},
mz(a,b,c,d){var s,r=b.cy+("<"+A.iC(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.qb(a,b,c,r,d)
a.eC.set(r,s)
return s},
qb(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.lr(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.c0(a,b,r,0)
m=A.eT(a,c,r,0)
return A.mz(a,n,m,c!==m)}}l=new A.aW(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.c_(a,l)},
nC(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nE(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.q3(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.nD(a,r,h,g,!1)
else if(q===46)r=A.nD(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.bY(a.u,a.e,g.pop()))
break
case 94:g.push(A.qe(a.u,g.pop()))
break
case 35:g.push(A.eN(a.u,5,"#"))
break
case 64:g.push(A.eN(a.u,2,"@"))
break
case 126:g.push(A.eN(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.mx(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.eM(p,n,o))
else{m=A.bY(p,a.e,n)
switch(m.y){case 11:g.push(A.mz(p,m,o,a.n))
break
default:g.push(A.my(p,m,o))
break}}break
case 38:A.q4(a,g)
break
case 42:p=a.u
g.push(A.nK(p,A.bY(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.mA(p,A.bY(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.nJ(p,A.bY(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.hU()
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
A.mx(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.nI(p,A.bY(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.mx(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.q6(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.bY(a.u,a.e,i)},
q3(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
nD(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.qj(s,o.z)[p]
if(n==null)A.T('No "'+p+'" in "'+A.pJ(o)+'"')
d.push(A.lp(s,o,n))}else d.push(p)
return m},
q4(a,b){var s=b.pop()
if(0===s){b.push(A.eN(a.u,1,"0&"))
return}if(1===s){b.push(A.eN(a.u,4,"1&"))
return}throw A.d(A.iX("Unexpected extended operation "+A.y(s)))},
bY(a,b,c){if(typeof c=="string")return A.eM(a,c,a.sEA)
else if(typeof c=="number")return A.q5(a,b,c)
else return c},
mx(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bY(a,b,c[s])},
q6(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bY(a,b,c[s])},
q5(a,b,c){var s,r,q=b.y
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
if(p===6){s=A.np(a,d)
return A.S(a,b,c,s,e)}if(r===8){if(!A.S(a,b.z,c,d,e))return!1
return A.S(a,A.no(a,b),c,d,e)}if(r===7){s=A.S(a,t.P,c,d,e)
return s&&A.S(a,b.z,c,d,e)}if(p===8){if(A.S(a,b,c,d.z,e))return!0
return A.S(a,b,c,A.no(a,d),e)}if(p===7){s=A.S(a,b,c,t.P,e)
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
if(!A.S(a,k,c,j,e)||!A.S(a,j,e,k,c))return!1}return A.nV(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.nV(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.qC(a,b,c,d,e)}return!1},
nV(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
qC(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.lp(a,b,r[o])
return A.nM(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.nM(a,n,null,c,m,e)},
nM(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.S(a,r,d,q,f))return!1}return!0},
eV(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.bD(a))if(r!==7)if(!(r===6&&A.eV(a.z)))s=r===8&&A.eV(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
rp(a){var s
if(!A.bD(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bD(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.iD},
nL(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
lr(a){return a>0?new Array(a):v.typeUniverse.sEA},
aW:function aW(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
hU:function hU(){this.c=this.b=this.a=null},
eK:function eK(a){this.a=a},
hQ:function hQ(){},
eL:function eL(a){this.a=a},
pV(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.qZ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.be(new A.kV(q),1)).observe(s,{childList:true})
return new A.kU(q,s,r)}else if(self.setImmediate!=null)return A.r_()
return A.r0()},
pW(a){self.scheduleImmediate(A.be(new A.kW(t.M.a(a)),0))},
pX(a){self.setImmediate(A.be(new A.kX(t.M.a(a)),0))},
pY(a){t.M.a(a)
A.q7(0,a)},
nw(a,b){var s=B.e.O(a.a,1000)
return A.q8(s<0?0:s,b)},
q7(a,b){var s=new A.eJ(!0)
s.dB(a,b)
return s},
q8(a,b){var s=new A.eJ(!1)
s.dC(a,b)
return s},
by(a){return new A.hB(new A.J($.E,a.i("J<0>")),a.i("hB<0>"))},
bv(a,b){a.$2(0,null)
b.b=!0
return b.a},
a7(a,b){A.qn(a,b)},
bu(a,b){b.a2(0,a)},
bt(a,b){b.bo(A.bf(a),A.bC(a))},
qn(a,b){var s,r,q=new A.lt(b),p=new A.lu(b)
if(a instanceof A.J)a.cp(q,p,t.z)
else{s=t.z
if(t.U.b(a))a.aR(q,p,s)
else{r=new A.J($.E,t.f)
r.a=8
r.c=a
r.cp(q,p,s)}}},
bz(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.E.bB(new A.ly(s),t.H,t.S,t.z)},
iY(a,b){var s=A.eU(a,"error",t.K)
return new A.dC(s,b==null?A.me(a):b)},
me(a){var s
if(t.fz.b(a)){s=a.gaz()
if(s!=null)return s}return B.cb},
pj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=null,e=!1,d=b.i("J<m<0>>"),c=new A.J($.E,d)
g.a=null
g.b=0
s=A.mv("error")
r=A.mv("stackTrace")
q=new A.jz(g,f,e,c,s,r)
try{for(l=a.length,k=t.P,j=0,i=0;j<a.length;a.length===l||(0,A.C)(a),++j){p=a[j]
o=i
p.aR(new A.jy(g,o,c,f,e,s,r,b),q,k)
i=++g.b}if(i===0){l=c
l.aq(A.c([],b.i("t<0>")))
return l}g.a=A.b8(i,null,!1,b.i("0?"))}catch(h){n=A.bf(h)
m=A.bC(h)
if(g.b===0||A.O(e)){l=n
r=m
A.eU(l,"error",t.K)
$.E!==B.j
if(r==null)r=A.me(l)
d=new A.J($.E,d)
d.b2(l,r)
return d}else{s.b=n
r.b=m}}return c},
l3(a,b){var s,r,q
for(s=t.f;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aE()
b.b4(a)
A.dj(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.cj(q)}},
dj(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.U;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.iO(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.dj(c.a,b)
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
A.iO(i.a,i.b)
return}f=$.E
if(f!==g)$.E=g
else f=null
b=b.c
if((b&15)===8)new A.lb(p,c,m).$0()
else if(n){if((b&1)!==0)new A.la(p,i).$0()}else if((b&2)!==0)new A.l9(c,p).$0()
if(f!=null)$.E=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("ar<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.aF(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.l3(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.aF(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
qO(a,b){var s
if(t.ng.b(a))return b.bB(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.mX(a,"onError",u.c))},
qL(){var s,r
for(s=$.dp;s!=null;s=$.dp){$.eS=null
r=s.b
$.dp=r
if(r==null)$.eR=null
s.a.$0()}},
qT(){$.mC=!0
try{A.qL()}finally{$.eS=null
$.mC=!1
if($.dp!=null)$.mM().$1(A.o1())}},
nY(a){var s=new A.hC(a),r=$.eR
if(r==null){$.dp=$.eR=s
if(!$.mC)$.mM().$1(A.o1())}else $.eR=r.b=s},
qR(a){var s,r,q,p=$.dp
if(p==null){A.nY(a)
$.eS=$.eR
return}s=new A.hC(a)
r=$.eS
if(r==null){s.b=p
$.dp=$.eS=s}else{q=r.b
s.b=q
$.eS=r.b=s
if(q==null)$.eR=s}},
ob(a){var s=null,r=$.E
if(B.j===r){A.dq(s,s,B.j,a)
return}A.dq(s,s,r,t.M.a(r.cw(a)))},
te(a,b){A.eU(a,"stream",t.K)
return new A.im(b.i("im<0>"))},
nt(a){return new A.dg(null,null,null,a.i("dg<0>"))},
mF(a){return},
pZ(a,b){if(b==null)b=A.r2()
if(t.fQ.b(b))return a.bB(b,t.z,t.K,t.l)
if(t.i6.b(b))return t.y.a(b)
throw A.d(A.cK("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
qN(a,b){A.iO(a,b)},
qM(){},
pQ(a,b){var s=$.E
if(s===B.j)return A.nw(a,t.my.a(b))
return A.nw(a,t.my.a(s.cz(b,t.iK)))},
iO(a,b){A.qR(new A.lx(a,b))},
nW(a,b,c,d,e){var s,r=$.E
if(r===c)return d.$0()
$.E=c
s=r
try{r=d.$0()
return r}finally{$.E=s}},
nX(a,b,c,d,e,f,g){var s,r=$.E
if(r===c)return d.$1(e)
$.E=c
s=r
try{r=d.$1(e)
return r}finally{$.E=s}},
qP(a,b,c,d,e,f,g,h,i){var s,r=$.E
if(r===c)return d.$2(e,f)
$.E=c
s=r
try{r=d.$2(e,f)
return r}finally{$.E=s}},
dq(a,b,c,d){t.M.a(d)
if(B.j!==c)d=c.cw(d)
A.nY(d)},
kV:function kV(a){this.a=a},
kU:function kU(a,b,c){this.a=a
this.b=b
this.c=c},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
eJ:function eJ(a){this.a=a
this.b=null
this.c=0},
lo:function lo(a,b){this.a=a
this.b=b},
ln:function ln(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hB:function hB(a,b){this.a=a
this.b=!1
this.$ti=b},
lt:function lt(a){this.a=a},
lu:function lu(a){this.a=a},
ly:function ly(a){this.a=a},
dC:function dC(a,b){this.a=a
this.b=b},
jz:function jz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jy:function jy(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
en:function en(){},
aQ:function aQ(a,b){this.a=a
this.$ti=b},
dk:function dk(a,b){this.a=a
this.$ti=b},
cz:function cz(a,b,c,d,e){var _=this
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
l0:function l0(a,b){this.a=a
this.b=b},
l8:function l8(a,b){this.a=a
this.b=b},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
l6:function l6(a,b,c){this.a=a
this.b=b
this.c=c},
l2:function l2(a,b){this.a=a
this.b=b},
l7:function l7(a,b){this.a=a
this.b=b},
l1:function l1(a,b,c){this.a=a
this.b=b
this.c=c},
lb:function lb(a,b,c){this.a=a
this.b=b
this.c=c},
lc:function lc(a){this.a=a},
la:function la(a,b){this.a=a
this.b=b},
l9:function l9(a,b){this.a=a
this.b=b},
hC:function hC(a){this.a=a
this.b=null},
ct:function ct(){},
kA:function kA(a,b){this.a=a
this.b=b},
kB:function kB(a,b){this.a=a
this.b=b},
bq:function bq(){},
eF:function eF(){},
ll:function ll(a){this.a=a},
hD:function hD(){},
dg:function dg(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
bV:function bV(a,b){this.a=a
this.$ti=b},
di:function di(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
em:function em(){},
eG:function eG(){},
hK:function hK(){},
cx:function cx(a,b){this.b=a
this.a=null
this.$ti=b},
bZ:function bZ(){},
lg:function lg(a,b){this.a=a
this.b=b},
bc:function bc(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
im:function im(a){this.$ti=a},
eP:function eP(){},
lx:function lx(a,b){this.a=a
this.b=b},
ib:function ib(){},
lh:function lh(a,b){this.a=a
this.b=b},
li:function li(a,b,c){this.a=a
this.b=b
this.c=c},
mo(a,b,c,d){if(b==null){if(a==null)return new A.az(c.i("@<0>").C(d).i("az<1,2>"))}else if(a==null)a=A.r7()
return A.q2(A.r6(),a,b,c,d)},
bm(a,b,c){return b.i("@<0>").C(c).i("jP<1,2>").a(A.o2(a,new A.az(b.i("@<0>").C(c).i("az<1,2>"))))},
aa(a,b){return new A.az(a.i("@<0>").C(b).i("az<1,2>"))},
q2(a,b,c,d,e){var s=c!=null?c:new A.le(d)
return new A.es(a,b,s,d.i("@<0>").C(e).i("es<1,2>"))},
jS(a){return new A.cB(a.i("cB<0>"))},
jT(a){return new A.cB(a.i("cB<0>"))},
mw(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
qs(a,b){return J.V(a,b)},
qt(a){return J.cH(a)},
n8(a,b,c){var s,r
if(A.mE(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.k($.aG,a)
try{A.qJ(a,s)}finally{if(0>=$.aG.length)return A.b($.aG,-1)
$.aG.pop()}r=A.nu(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
ml(a,b,c){var s,r
if(A.mE(a))return b+"..."+c
s=new A.hh(b)
B.a.k($.aG,a)
try{r=s
r.a=A.nu(r.a,a,", ")}finally{if(0>=$.aG.length)return A.b($.aG,-1)
$.aG.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mE(a){var s,r
for(s=$.aG.length,r=0;r<s;++r)if(a===$.aG[r])return!0
return!1},
qJ(a,b){var s,r,q,p,o,n,m,l=a.gw(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.y(l.gp(l))
B.a.k(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gp(l);++j
if(!l.n()){if(j<=4){B.a.k(b,A.y(p))
return}r=A.y(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp(l);++j
for(;l.n();p=o,o=n){n=l.gp(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.y(p)
r=A.y(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
pu(a,b,c){var s=A.mo(null,null,b,c)
a.D(0,new A.jR(s,b,c))
return s},
ne(a,b,c){var s=A.mo(null,null,b,c)
s.G(0,a)
return s},
nf(a,b){var s,r,q=A.jS(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.C)(a),++r)q.k(0,b.a(a[r]))
return q},
mq(a){var s,r={}
if(A.mE(a))return"{...}"
s=new A.hh("")
try{B.a.k($.aG,a)
s.a+="{"
r.a=!0
J.oW(a,new A.jV(r,s))
s.a+="}"}finally{if(0>=$.aG.length)return A.b($.aG,-1)
$.aG.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
lf:function lf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
es:function es(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
le:function le(a){this.a=a},
cB:function cB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i0:function i0(a){this.a=a
this.b=null},
et:function et(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
dY:function dY(){},
h:function h(){},
e_:function e_(){},
jV:function jV(a,b){this.a=a
this.b=b},
x:function x(){},
jX:function jX(a){this.a=a},
ed:function ed(){},
eA:function eA(){},
eu:function eu(){},
eQ:function eQ(){},
pi(a){if(a instanceof A.c8)return a.l(0)
return"Instance of '"+A.ki(a)+"'"},
b8(a,b,c,d){var s,r=J.pq(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
pw(a,b){var s,r,q=A.c([],b.i("t<0>"))
for(s=a.length,r=0;r<s;++r)B.a.k(q,b.a(a[r]))
return q},
ng(a,b,c){var s=A.pv(a,c)
return s},
pv(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("t<0>"))
s=A.c([],b.i("t<0>"))
for(r=J.aH(a);r.n();)B.a.k(s,r.gp(r))
return s},
mp(a,b,c){var s,r=J.pr(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
nu(a,b,c){var s=J.aH(b)
if(!s.n())return a
if(c.length===0){do a+=A.y(s.gp(s))
while(s.n())}else{a+=A.y(s.gp(s))
for(;s.n();)a=a+c+A.y(s.gp(s))}return a},
pb(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
pc(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
fh(a){if(a>=10)return""+a
return"0"+a},
jn(a){return new A.a9(1000*a)},
fm(a){if(typeof a=="number"||A.lv(a)||a==null)return J.c2(a)
if(typeof a=="string")return JSON.stringify(a)
return A.pi(a)},
iX(a){return new A.dB(a)},
cK(a,b){return new A.b_(!1,null,b,a)},
mX(a,b,c){return new A.b_(!0,a,b,c)},
pI(a){var s=null
return new A.d6(s,s,!1,s,s,a)},
nn(a,b){return new A.d6(null,null,!0,a,b,"Value not in range")},
cs(a,b,c,d,e){return new A.d6(b,c,!0,a,d,"Invalid value")},
ms(a,b,c){if(0>a||a>c)throw A.d(A.cs(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.cs(b,a,c,"end",null))
return b}return c},
km(a,b){if(a<0)throw A.d(A.cs(a,0,null,b,null))
return a},
R(a,b,c,d,e){var s=A.G(e==null?J.am(b):e)
return new A.fv(s,!0,a,c,"Index out of range")},
D(a){return new A.hv(a)},
mu(a){return new A.hs(a)},
ab(a){return new A.bp(a)},
bH(a){return new A.fd(a)},
mj(a){return new A.hR(a)},
ke(a,b,c,d){var s,r
if(B.D===c)return A.pP(B.c.gu(a),B.c.gu(b),$.mb())
if(B.D===d){s=B.c.gu(a)
b=B.c.gu(b)
c=J.cH(c)
return A.mt(A.bP(A.bP(A.bP($.mb(),s),b),c))}s=B.c.gu(a)
b=B.c.gu(b)
c=J.cH(c)
d=J.cH(d)
r=$.mb()
return A.mt(A.bP(A.bP(A.bP(A.bP(r,s),b),c),d))},
eW(a){A.iQ(A.y(a))},
ca:function ca(a,b){this.a=a
this.b=b},
a9:function a9(a){this.a=a},
kZ:function kZ(){},
L:function L(){},
dB:function dB(a){this.a=a},
bT:function bT(){},
fT:function fT(){},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d6:function d6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fv:function fv(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hv:function hv(a){this.a=a},
hs:function hs(a){this.a=a},
bp:function bp(a){this.a=a},
fd:function fd(a){this.a=a},
fW:function fW(){},
ef:function ef(){},
fg:function fg(a){this.a=a},
hR:function hR(a){this.a=a},
f:function f(){},
a4:function a4(){},
d_:function d_(a,b,c){this.a=a
this.b=b
this.$ti=c},
U:function U(){},
v:function v(){},
iq:function iq(){},
hh:function hh(a){this.a=a},
ra(){return document},
pf(a,b,c){var s,r=document.body
r.toString
s=t.e0
s=new A.a6(new A.aj(B.aN.T(r,a,b,c)),s.i("A(h.E)").a(new A.jq()),s.i("a6<h.E>"))
return t.h.a(s.ga9(s))},
dN(a){var s,r,q="element tag unavailable"
try{s=J.bB(a)
s.gd1(a)
q=s.gd1(a)}catch(r){}return q},
pn(a){var s,r=document.createElement("input"),q=t.fY.a(r)
try{J.p1(q,a)}catch(s){}return q},
bX(a,b,c,d,e){var s=A.nZ(new A.l_(c),t.R)
if(s!=null&&!0)J.oU(a,b,s,!1)
return new A.eq(a,b,s,!1,e.i("eq<0>"))},
nB(a){var s=document.createElement("a"),r=new A.id(s,t.oH.a(window.location))
r=new A.cA(r)
r.dz(a)
return r},
q0(a,b,c,d){t.h.a(a)
A.Q(b)
A.Q(c)
t.dl.a(d)
return!0},
q1(a,b,c,d){var s,r,q
t.h.a(a)
A.Q(b)
A.Q(c)
s=t.dl.a(d).a
r=s.a
B.bM.seW(r,c)
q=r.hostname
s=s.b
if(!(q==s.hostname&&r.port===s.port&&r.protocol===s.protocol))if(q==="")if(r.port===""){s=r.protocol
s=s===":"||s===""}else s=!1
else s=!1
else s=!0
return s},
nG(){var s=t.N,r=A.nf(B.bf,s),q=t.gL.a(new A.lm()),p=A.c(["TEMPLATE"],t.s)
s=new A.it(r,A.jS(s),A.jS(s),A.jS(s),null)
s.dA(null,new A.cm(B.bf,q,t.gQ),p,null)
return s},
qo(a){var s
if("postMessage" in a){s=A.q_(a)
return s}else return t.iB.a(a)},
qp(a){var s
if(t.dA.b(a))return a
s=new A.kS([],[])
s.c=!0
return s.bK(a)},
q_(a){if(a===window)return t.kg.a(a)
else return new A.hJ()},
nZ(a,b){var s=$.E
if(s===B.j)return a
return s.cz(a,b)},
u:function u(){},
iT:function iT(){},
cJ:function cJ(){},
f2:function f2(){},
cN:function cN(){},
f7:function f7(){},
c4:function c4(){},
c5:function c5(){},
cP:function cP(){},
b2:function b2(){},
je:function je(){},
H:function H(){},
cT:function cT(){},
jf:function jf(){},
aS:function aS(){},
bi:function bi(){},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
cU:function cU(){},
b6:function b6(){},
bK:function bK(){},
fj:function fj(){},
dK:function dK(){},
dL:function dL(){},
fk:function fk(){},
jj:function jj(){},
K:function K(){},
jq:function jq(){},
k:function k(){},
e:function e(){},
ax:function ax(){},
fn:function fn(){},
fo:function fo(){},
fq:function fq(){},
ay:function ay(){},
jF:function jF(){},
ce:function ce(){},
dR:function dR(){},
dS:function dS(){},
cf:function cf(){},
cY:function cY(){},
cg:function cg(){},
bl:function bl(){},
dZ:function dZ(){},
cn:function cn(){},
jZ:function jZ(){},
fG:function fG(){},
k1:function k1(a){this.a=a},
fH:function fH(){},
k2:function k2(a){this.a=a},
aA:function aA(){},
fI:function fI(){},
as:function as(){},
aj:function aj(a){this.a=a},
q:function q(){},
e4:function e4(){},
aB:function aB(){},
h_:function h_(){},
h6:function h6(){},
kp:function kp(a){this.a=a},
h8:function h8(){},
au:function au(){},
hb:function hb(){},
aC:function aC(){},
hc:function hc(){},
aD:function aD(){},
hg:function hg(){},
kz:function kz(a){this.a=a},
ah:function ah(){},
eh:function eh(){},
hj:function hj(){},
hk:function hk(){},
db:function db(){},
av:function av(){},
ac:function ac(){},
hm:function hm(){},
hn:function hn(){},
kH:function kH(){},
aE:function aE(){},
hp:function hp(){},
kI:function kI(){},
bb:function bb(){},
kL:function kL(){},
dd:function dd(){},
hx:function hx(){},
df:function df(){},
dh:function dh(){},
hH:function hH(){},
eo:function eo(){},
hV:function hV(){},
ev:function ev(){},
ih:function ih(){},
ir:function ir(){},
hF:function hF(){},
hP:function hP(a){this.a=a},
mi:function mi(a,b){this.a=a
this.$ti=b},
ep:function ep(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eq:function eq(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
l_:function l_(a){this.a=a},
cA:function cA(a){this.a=a},
r:function r(){},
e5:function e5(a){this.a=a},
ka:function ka(a){this.a=a},
k9:function k9(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(){},
lj:function lj(){},
lk:function lk(){},
it:function it(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
lm:function lm(){},
is:function is(){},
cc:function cc(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
hJ:function hJ(){},
id:function id(a,b){this.a=a
this.b=b},
eO:function eO(a){this.a=a
this.b=0},
ls:function ls(a){this.a=a},
hI:function hI(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hS:function hS(){},
hT:function hT(){},
hW:function hW(){},
hX:function hX(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
i6:function i6(){},
i9:function i9(){},
ia:function ia(){},
ic:function ic(){},
eC:function eC(){},
eD:function eD(){},
ie:function ie(){},
ig:function ig(){},
ik:function ik(){},
iu:function iu(){},
iv:function iv(){},
eH:function eH(){},
eI:function eI(){},
ix:function ix(){},
iy:function iy(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
iH:function iH(){},
iI:function iI(){},
iJ:function iJ(){},
iK:function iK(){},
iL:function iL(){},
iM:function iM(){},
iN:function iN(){},
nQ(a){var s,r
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.lv(a))return a
if(A.o7(a))return A.bA(a)
if(Array.isArray(a)){s=[]
for(r=0;r<a.length;++r)s.push(A.nQ(a[r]))
return s}return a},
bA(a){var s,r,q,p,o
if(a==null)return null
s=A.aa(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.C)(r),++p){o=r[p]
s.j(0,o,A.nQ(a[o]))}return s},
o7(a){var s=Object.getPrototypeOf(a)
return s===Object.prototype||s===null},
mf(){return window.navigator.userAgent},
kR:function kR(){},
kT:function kT(a,b){this.a=a
this.b=b},
kS:function kS(a,b){this.a=a
this.b=b
this.c=!1},
rv(a,b){var s=new A.J($.E,b.i("J<0>")),r=new A.aQ(s,b.i("aQ<0>"))
a.then(A.be(new A.lV(r,b),1),A.be(new A.lW(r),1))
return s},
kc:function kc(a){this.a=a},
lV:function lV(a,b){this.a=a
this.b=b},
lW:function lW(a){this.a=a},
h2(){return B.v},
hY:function hY(){},
aJ:function aJ(){},
fA:function fA(){},
aM:function aM(){},
fU:function fU(){},
kh:function kh(){},
d9:function d9(){},
hi:function hi(){},
n:function n(){},
aO:function aO(){},
hq:function hq(){},
hZ:function hZ(){},
i_:function i_(){},
i7:function i7(){},
i8:function i8(){},
io:function io(){},
ip:function ip(){},
iz:function iz(){},
iA:function iA(){},
pk(a){return new GainNode(a)},
b0:function b0(){},
dE:function dE(){},
c3:function c3(){},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
F:function F(){},
f3:function f3(){},
f4:function f4(){},
j3:function j3(a){this.a=a},
bg:function bg(){},
f5:function f5(){},
dF:function dF(){},
cX:function cX(){},
fV:function fV(){},
hG:function hG(){},
f8:function f8(){},
fr:function fr(){},
h0:function h0(){},
d7:function d7(){},
br:function br(){},
hr:function hr(){},
hw:function hw(){},
hd:function hd(){},
ii:function ii(){},
ij:function ij(){},
n5(a,b){var s=A.b8(7,null,!1,b.i("0?")),r=a==null?A.rE():a
return new A.fu(r,s,b.i("fu<0>"))},
fu:function fu(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
lq:function lq(a,b){this.a=a
this.$ti=b},
cC:function cC(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=-1
_.$ti=c},
bG(a){return new A.l(a)},
l:function l(a){this.a=a},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
nk(a,b){return new A.fS(A.c([],t.f7),a,b.i("fS<0>"))},
fS:function fS(a,b,c){this.a=a
this.b=b
this.$ti=c},
aN:function aN(a,b){this.a=a
this.b=b},
md(a,b,c,d,e,f,g){return new A.cI(g,b,e,a,f)},
o6(a,b){if(b.e)return!1
if(a.x)return!0
if(b.x)return!0
return!1},
rg(a,b){return B.a.bl(a.a,new A.lF(b))},
fJ(a,b,c,d,e,f,g,h,i,j){return new A.bo(i,a,h,j,b,e,c,f)},
rb(a){var s,r,q=a.f.$0(),p=new A.k0(new Uint8ClampedArray(4000)),o=a.d,n=A.c([],t.I),m=A.ne(B.aw,t.b,t.O),l=A.c([],t.Q),k=A.c([],t.d)
for(s=J.aH(a.r.$0());s.n();){r=s.gp(s)
switch(r.gbR()){case B.az:m.h(0,B.N)
m.j(0,B.N,r)
break
case B.aA:m.h(0,B.r)
m.j(0,B.r,r)
break
case B.aB:m.h(0,B.O)
m.j(0,B.O,r)
break
default:B.a.k(n,r)}}return A.md(new A.iR(q,p),new A.c7(o,o,1,0,0,0,0,new A.cV(n,m),a.c,l,k,new A.cW(a.a)),1,a.z,!1,!1,a.e.$0())},
cI:function cI(a,b,c,d,e){var _=this
_.a=100
_.b=a
_.c=b
_.e=c
_.r=d
_.x=e},
iS:function iS(a){this.a=a},
iR:function iR(a,b){this.a=a
this.b=b
this.c=null},
ad:function ad(a,b){this.a=a
this.b=b},
ao:function ao(){},
bQ:function bQ(){},
bR:function bR(){},
cR:function cR(){},
bO:function bO(){},
h4:function h4(){this.b=!1},
ea:function ea(){this.a=null},
h5:function h5(a){this.a=a},
lF:function lF(a){this.a=a},
bE:function bE(){},
b3:function b3(a){this.a=a},
bo:function bo(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.z=h},
m4:function m4(){},
m2:function m2(){},
m3:function m3(){},
lZ:function lZ(){},
lX:function lX(){},
lY:function lY(){},
m7:function m7(){},
m5:function m5(){},
m6:function m6(){},
ma:function ma(){},
m8:function m8(){},
m9:function m9(){},
lC:function lC(){},
lA:function lA(){},
lB:function lB(){},
j8:function j8(){this.b=this.a=0},
a1:function a1(){},
d1:function d1(a,b){this.b=a
this.a=b},
d0:function d0(a,b){this.b=a
this.a=b},
ru(a,b,c){var s,r,q=b.e||b.a===0
if(q)return!1
s=b.c
if(s!=null&&s.b<=0){a.$1(new A.dJ(b))
return!0}r=b.r
if(r!=null){a.$1(r.eA(b,c))
b.a=0
return!0}return!1},
fs:function fs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1
_.z=null},
jA:function jA(a,b){this.a=a
this.b=b},
n2(a){switch(a){case B.dm:case B.aX:case B.aY:case B.Z:case B.dn:return!1
case B.a_:case B.ak:case B.aZ:return!0}},
dH(a,b,c){var s,r,q
for(s=0,r=0;r<b;++r){switch(c){case B.b_:q=3
break
case B.a0:q=4
break
case B.I:q=6
break
case B.al:q=8
break
case B.b0:q=12
break
case B.am:q=20
break
default:q=null}s+=a.E(q)+1}return s},
f_(a,b,c,d,e,f){return new A.eZ(f,c)},
mW(){return new A.eZ(10,10)},
b9(a,b,c){return new A.fF(a,c,b)},
pz(a,b){return new A.j(a,b)},
pa(a){var s,r=a.a,q=a.b
if(r+q===1)return a
s=Math.sqrt(Math.pow(r,2)+Math.pow(q,2))
return new A.aN(r/s,q/s)},
bj(a){switch(a){case B.an:case B.ao:case B.R:case B.S:case B.F:case B.U:case B.a9:case B.aa:case B.a6:case B.P:case B.a7:case B.a8:case B.Q:case null:return!1
case B.a5:case B.w:case B.T:return!0}},
po(a){switch(a){case B.an:case B.ao:case B.R:case B.S:case B.F:case B.U:case B.a9:case B.aa:case B.a6:case B.P:case B.a7:case B.a8:case B.Q:case null:return!1
case B.a5:case B.w:case B.T:return!0}},
ee:function ee(a){this.b=a},
b7:function b7(a){this.b=a},
f1:function f1(a,b){this.a=a
this.b=b},
aI:function aI(a,b,c){this.b=a
this.c=b
this.e=c},
jd:function jd(){},
W:function W(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ft:function ft(a){this.b=a},
b5:function b5(a){this.b=a},
bJ:function bJ(a){this.b=a},
aP:function aP(a){this.b=a},
k_:function k_(){},
bI:function bI(){},
c9:function c9(a){this.b=a},
Y:function Y(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.y=e
_.z=f},
dx:function dx(a){this.b=a},
dy:function dy(a,b){this.a=a
this.b=b},
at:function at(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.f=c
_.r=d
_.Q=e
_.ch=f},
cL:function cL(a){this.b=a},
an:function an(a){this.c=a},
eZ:function eZ(a,b){this.a=a
this.b=b},
c7:function c7(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
cM:function cM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cW:function cW(a){this.a=a},
cV:function cV(a,b){this.a=a
this.b=b},
fX:function fX(a){this.b=a},
cb:function cb(a){this.b=a},
fe:function fe(){},
dc:function dc(a){this.b=a},
cQ:function cQ(a){this.b=a},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a){this.b=a},
ai:function ai(a){this.b=a},
ck:function ck(a){this.b=a},
b1:function b1(a){this.b=a},
bS:function bS(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
fC:function fC(a,b){this.b=a
this.c=b},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(a,b){this.a=a
this.b=b},
jU:function jU(a){this.b=a},
a_:function a_(a){this.b=a},
jW:function jW(a,b){this.a=a
this.b=b},
k0:function k0(a){this.a=a},
d2:function d2(a){this.b=a},
jk:function jk(a){var _=this
_.a=a
_.b=!1
_.c=null
_.d=0},
jo:function jo(a){this.a=a},
jp:function jp(){},
ph(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l="a_position",k="u_resolution",j="u_offset",i=A.c([],t.ev),h=A.c(["alarm_1.mp3","background_1.mp3","background_2.mp3","bullet_impact_1.mp3","bullet_impact_2.mp3","bullet_miss_1.mp3","calm_menu_1.mp3","cave_1.mp3","click_1.mp3","death_1.mp3","door_1.mp3","door_unlock_1.mp3","drone_abandoned_desolate.mp3","fireball_1.mp3","fireball_2.mp3","flamethrower_1.mp3","heavy_punch_1.mp3","heavy_punch_2.mp3","heavy_punch_3.mp3","heavy_punch_4.mp3","Just_Pick_One_Already.mp3","laser_1.mp3","loop_1.mp3","menu_1.mp3","menu_2.mp3","miss_1.mp3","monster_deep_growl.mp3","monster_growl_1.mp3","monster_sceam_2.mp3","monster_scream_1.mp3","New_Bee.mp3","positive_1.mp3","rain_background_1.mp3","sewer_1.mp3","short_pulse_1.mp3","surface_day_1.mp3","surface_night_1.mp3","sword_impact_1.mp3","teleport_1.mp3","text_loop_1.mp3","water_footsteps_1.mp3","water_footsteps_2.mp3","water_footsteps_3.mp3","water_footsteps_4.mp3","water_footsteps_5.mp3","reload_1.mp3","pistol_1.mp3"],t.s),g=new (window.AudioContext||window.webkitAudioContext)(),f=A.qr(),e=t.G,d=t.o
f=A.aU(A.c([new A.X(l,35044,5126,2,f),new A.X("a_color",35048,5126,4,new Float32Array(192e3))],e),u.l,A.c([new A.w(k,B.d),new A.w(j,B.d)],d),u.q)
e=A.aU(A.c([new A.X(l,35048,5126,2,new Float32Array(8000))],e),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.c([new A.w(k,B.d),new A.w(j,B.d)],d),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
d=A.pU(window)
s=new Uint8Array(4000)
r=t.j
q=A.c([],t.pl)
p=A.c([],t.fk)
o=new Uint8Array(16e6)
n=new Uint8Array(4000)
m=new Uint8Array(4000)
i=new A.jt(c,a2,a,b,a1,i,a0,new A.ha(A.aa(t.N,t.bD),h,g),new A.jw(o,n,m,new Uint8Array(64e6),new A.j(0,0),A.aa(r,t.im),p),new A.j8(),new A.kF(f),new A.jk(e),d,new A.iS(new A.fi(s,A.aa(r,t.S))),new A.jo(q),c.createFramebuffer(),new A.kn())
i.dt(a,b,c,a0,a1,a2)
return i},
fl:function fl(){this.c=this.b=this.a=!1},
jt:function jt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ju:function ju(a,b){this.a=a
this.b=b},
m0(a,b,c){return a*c+(1-c)*b},
a2:function a2(){},
bF:function bF(a,b,c){var _=this
_.a=a
_.d=0
_.e=null
_.f=!0
_.r=b
_.x=c},
M:function M(a,b,c,d,e,f,g){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
fQ:function fQ(a){this.a=a},
e9:function e9(a){this.a=a},
aL:function aL(a,b){this.a=a
this.b=b},
k6:function k6(a,b,c){this.a=a
this.b=b
this.c=c},
k7:function k7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
da:function da(){},
fB:function fB(a){this.a=a},
ei:function ei(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c){this.a=a
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
dJ:function dJ(a){this.a=a},
f6:function f6(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a){this.a=a},
e8:function e8(a,b){this.a=a
this.b=b},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function kj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kk:function kk(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function jx(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iw:function iw(a){this.a=a
this.b=!0},
kM:function kM(a,b,c){this.a=a
this.c=b
this.d=c},
c6:function c6(a){this.b=a},
kl:function kl(a,b){this.a=a
this.b=b},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
o5(a,b){var s=a.f
if(s==null)return A.c([],t.Y)
if(s===B.w)return A.c([new A.ch(new A.ei(!1,a.b))],t.Y)
if(s===B.S){if(b.ai(a.b)!=null)return A.c([],t.Y)
return A.c([new A.ch(new A.ei(!0,a.b))],t.Y)}if(s===B.P)return A.c([new A.ch(new A.hu(a.b))],t.Y)
if(s===B.R)return A.c([new A.ch(new A.fQ(!1))],t.Y)
return A.c([],t.Y)},
ch:function ch(a){this.b=a},
pt(a){var s=u.p,r="a_position",q="u_resolution",p="u_block_size",o="u_player_visible_texture",n="u_offset",m=t.G,l=t.o
return new A.fE(A.aU(A.c([new A.X(r,35044,5126,2,new Float32Array(A.dl(B.C)))],m),u.j,A.c([new A.w(q,B.d),new A.w("u_source_position",B.d),new A.w(p,B.d),new A.w("u_source_color",B.aG),new A.w("u_source_strength",B.t),new A.w("u_time",B.t),new A.w("u_visible_texture",B.o),new A.w(o,B.o),new A.w(n,B.d)],l),s),A.aU(A.c([new A.X(r,35044,5126,2,new Float32Array(A.dl(B.C)))],m),u.B,A.c([new A.w("u_light_texture",B.o),new A.w("u_game_world_texture",B.o),new A.w(o,B.o),new A.w(q,B.d),new A.w(p,B.d),new A.w(n,B.d)],l),s),a,A.c([],t.ow))},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1
_.x=d
_.z=_.y=0},
pe(a){switch(a){case B.J:return B.M
case B.K:return B.L
case B.L:return B.K
case B.M:return B.J
case B.k:return B.m
case B.l:return B.n
case B.m:return B.k
case B.n:return B.l}},
pd(a){switch(a){case B.k:return B.ba
case B.l:return B.b9
case B.m:return B.ba
case B.n:return B.b9
default:return B.dM}},
a8(a,b){switch(b){case B.k:return a.A(0,new A.j(0,-1))
case B.K:return a.A(0,new A.j(1,-1))
case B.l:return a.A(0,new A.j(1,0))
case B.J:return a.A(0,new A.j(1,1))
case B.m:return a.A(0,new A.j(0,1))
case B.L:return a.A(0,new A.j(-1,1))
case B.n:return a.A(0,new A.j(-1,0))
case B.M:return a.A(0,new A.j(-1,-1))}},
mH(a,b,c){var s
switch(c){case B.aV:return!1
case B.cd:return a.c===B.b||A.O(A.bj(a.f))
case B.Y:s=a.f
if(s===B.w)return!1
return a.c===B.b||A.O(A.bj(s))
case B.aj:return a.c===B.b||A.O(A.bj(a.f))||b.ai(a.b)!=null}},
cq:function cq(a,b,c){var _=this
_.b=_.a=null
_.d=a
_.e=b
_.f=c},
aT:function aT(a){this.b=a},
kf:function kf(){},
fi:function fi(a,b){this.a=a
this.b=b},
kr:function kr(a,b,c){this.a=a
this.b=b
this.c=c},
mY(a,b,c,d,e){return new A.X(d,a,c,e,b)},
bU(a,b){return new A.w(b,a)},
aU(a,b,c,d){var s=t.N
return new A.jE(d,b,c,a,A.aa(s,t.o3),A.aa(s,t.aN))},
nR(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.V(a.getShaderParameter(s,35713),!0)){A.eW(J.c2(a.getShaderInfoLog(s)))
throw A.d(A.ab("Invalid Shader"))}return s},
X:function X(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w:function w(a,b){this.a=a
this.b=b},
cv:function cv(a){this.b=a},
hE:function hE(a,b){this.a=a
this.c=b},
iB:function iB(a,b){this.a=a
this.b=b},
jE:function jE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
kn:function kn(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
ko:function ko(){},
fR:function fR(){},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
kt:function kt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qS(a,b){var s=t.hd
s.a(a)
s.a(b)
return B.e.P(a.x,b.x)},
rq(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.J($.E,t.aa),p=J.oY(r),o=p.$ti,n=o.i("~(1)?").a(new A.lK(a,s,r,new A.aQ(q,t.fB)))
t.Z.a(null)
A.bX(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
pO(a,b){var s=35048,r=5126,q=A.c([new A.w("u_texture",B.o),new A.w("u_resolution",B.d),new A.w("u_offset",B.d)],t.o),p=new Float32Array(12e4),o=new Float32Array(12e4),n=new Float32Array(24e4)
q=new A.ku(A.aU(A.c([new A.X("a_position",s,r,2,p),new A.X("a_texcoord",s,r,2,o),new A.X("a_color",s,r,4,n),new A.X("a_bg_color",s,r,4,new Float32Array(24e4))],t.G),"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\nin vec4 v_bg_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n  if (v_bg_color != vec4(0, 0, 0, 0)) {\n    outColor = outColor + v_bg_color;\n  }\n}\n",q,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"),A.n5(A.ry(),t.hd),b)
q.dv(a,b)
return q},
n6(a,b,c){var s,r,q,p,o,n=null
switch(a){case B.an:case null:return n
case B.ao:s=n
r=s
q=3
p=16
break
case B.R:q=14
p=3
r=B.dY
s=B.cf
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
case B.F:o=B.bi.h(0,t.e.i("a1.T").a(800))
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
case B.a5:o=B.bi.h(0,t.e.i("a1.T").a(600))
o.toString
s=n
r=o
q=6
p=0
break
case B.a6:o=B.dR.h(0,t.e.i("a1.T").a(900))
o.toString
s=o
r=n
q=0
p=15
break
case B.P:o=B.bk.h(0,t.e.i("a1.T").a(500))
o.toString
s=n
r=o
q=15
p=0
break
case B.a7:o=B.bk.h(0,t.e.i("a1.T").a(100))
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
case B.Q:o=B.dT.h(0,t.gX.i("a1.T").a(700))
o.toString
s=n
r=o
q=12
p=7
break
default:s=n
r=s
q=0
p=0}o=new A.a5(q,p,b,c,r)
o.sak(0,s)
return o},
lK:function lK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ku:function ku(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c
_.e=!1
_.f=!0},
kv:function kv(a){this.a=a},
a5:function a5(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.f=null
_.r=e
_.x=0},
mr(a,b,c){return new A.jY(b,c,a)},
qr(){var s,r,q,p,o,n,m,l,k,j,i=new Float32Array(96e3)
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
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(a){this.a=a
this.b=null
this.c=!1},
kG:function kG(a,b){this.a=a
this.b=b},
h3:function h3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qq(){var s,r,q,p,o,n,m,l,k,j=new Float32Array(96e3)
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
jv:function jv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
r3(a){var s,r=A.mp(4000,new A.lz(a),t.W),q=A.c([],t.c7)
for(s=0;s<4000;++s);return new A.he(q,A.aa(t.K,t.lZ),new A.Z(100,40,r,t.nr),a.b)},
iP(a){var s,r,q,p,o
for(s=a.c,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.j(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.O(A.bj(o.f))))return p}throw A.d("Solid")},
rt(a,b){var s,r,q
for(s=a.c;!0;){r=$.dv()
q=new A.j(B.c.B(r.U()*98)+1,B.c.B(r.U()*38)+1)
r=s.h(0,q)
if(!(r.c===B.b||A.O(A.bj(r.f)))&&a.ai(q)==null)return q}},
bx(a,b){return a.U()<=b},
aZ(a,b,c){return B.c.B(a.U()*(c-b))+b},
nS(a,b,c){var s=b.length
if(s===1){if(0>=s)return A.b(b,0)
return b[0]}s=A.aZ(a,0,s-1)
if(!(s>=0&&s<b.length))return A.b(b,s)
return b[s]},
hz:function hz(a,b){this.a=a
this.d=0
this.e=b},
lz:function lz(a){this.a=a},
he:function he(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jl:function jl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jm:function jm(a){this.a=a},
f9:function f9(a){this.a=a},
jc:function jc(a){this.a=a},
jC:function jC(){},
jD:function jD(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
m1(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.W))break
q=A.a8(q,b);++p}return p},
cG(a,b,c){var s=A.a8(a,b)
if(c.e.h(0,s)===B.W)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
de(a,b){return new A.el(a,b)},
eX(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.c([],t.D)
for(s=a2.length,r=a1.a,q=J.cE(r),p=t.q,o=t.n,n=0;n<a2.length;a2.length===s||(0,A.C)(a2),++n){m=a2[n]
l=A.c([],p)
k=A.c([],o)
for(j=q.gw(r),i=0;j.n();){h=j.gp(j)
g=m.a.a8(h,a3)
if(g<1000){B.a.k(l,h)
B.a.k(k,g)
i+=g}}if(l.length===0){B.a.k(a0,m)
continue}for(f=0,e=0;e<k.length;++e,f=d){d=k[e]/i+f
B.a.j(k,e,d)}c=$.oB().U()
for(j=k.length,h=l.length,b=B.A,a=-1,e=0;e<j;++e,a=g){g=k[e]
if(c>=a&&c<g){if(!(e<h))return A.b(l,e)
b=l[e]}}j=0===b.a&&0===b.b
if(j){B.a.k(a0,m)
continue}m.f2(b,a3)}for(s=q.gw(r),r=a3.e,q=a1.c;s.n();){p=s.gp(s)
if(r.h(0,p)===B.ad||r.h(0,p)===B.ae)B.a.k(q,p)}return a0},
oc(a,b){var s,r,q,p,o,n,m,l,k
B.a.aY(a,new A.m_())
if(0>=a.length)return A.b(a,0)
A.eX(a[0],$.oP(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.C)(s),++p)q.j(0,s[p],B.bg)
for(s=A.nv(a,1,null,A.a0(a).c),r=s.$ti,s=new A.bn(s,s.gm(s),r.i("bn<aK.E>")),r=r.i("aK.E"),o=t.c1,n=2;s.n();){m=r.a(s.d)
l=m.a
k=J.aw(l)
if(k.gm(l)<30){if(n>0){l=A.ng($.mc(),!0,o)
l.push($.mQ())}else l=$.mc()
if(!B.a.v(A.eX(m,l,b),$.mQ()))--n}else if(k.gm(l)<60)A.eX(m,$.oI(),b)
else if(k.gm(l)<100)A.eX(m,$.oG(),b)
else A.eX(m,$.oF(),b)}if(n===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.C)(s),++p)q.j(0,s[p],B.bh)}},
b4:function b4(){},
hy:function hy(){},
dz:function dz(a){this.$ti=a},
e7:function e7(a){this.$ti=a},
fa:function fa(){},
f0:function f0(){},
ff:function ff(){},
dw:function dw(a){this.a=a},
el:function el(a,b){this.a=a
this.b=b},
lU:function lU(){},
lQ:function lQ(){},
lS:function lS(){},
lP:function lP(){},
lR:function lR(){},
lT:function lT(){},
lO:function lO(){},
m_:function m_(){},
pg(a){var s=t.q
return new A.ap(a,A.c([],s),A.c([],s),A.js(a))},
js(a){var s,r,q=J.aw(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gm(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.j(B.c.B(p/q.gm(a)),B.c.B(o/q.gm(a)))},
dP:function dP(a,b,c,d,e,f,g,h,i){var _=this
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
j5:function j5(a){this.a=a},
ej:function ej(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jr:function jr(a,b){this.a=a
this.b=b},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
fx:function fx(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jL:function jL(a,b){this.a=a
this.b=b},
kb:function kb(){},
jG:function jG(a){this.a=a},
jH:function jH(){},
jI:function jI(){},
jJ:function jJ(){},
jK:function jK(){},
kg:function kg(){},
bN:function bN(a){this.b=a},
ec:function ec(a){this.b=a},
kq:function kq(a,b){this.b=a
this.a=b},
eb:function eb(a,b){this.a=a
this.b=b},
kC:function kC(a){this.a=a},
kD:function kD(){},
kE:function kE(a){this.a=a},
pU(a){var s=new A.kN(A.nt(t.h8),A.nt(t.bd))
s.dw(a)
return s},
kN:function kN(a,b){this.a=a
this.b=b},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
a3:function a3(a){this.b=a},
iU:function iU(a,b,c){var _=this
_.a=a
_.b=$
_.c=b
_.d=c},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
px(a){var s=new A.k3(a)
s.du(a)
return s},
k3:function k3(a){this.a=a
this.b=$
this.c=!1},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
fZ:function fZ(a,b){this.a=a
this.b=b},
kw:function kw(){},
kx:function kx(a,b){this.a=a
this.b=b},
ky:function ky(a,b){this.a=a
this.b=b},
iQ(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
r9(a,b){return J.oV(t.n6.a(a),b)},
fw(a){var s,r
if(a instanceof A.W){s=B.ar
r=null}else if(a instanceof A.Y){s=B.ap
r=null}else if(a instanceof A.at){s=B.aq
r=0}else{if(a instanceof A.jd)s=B.b7
else{J.c2(a)
s=B.as}r=null}$.n7=$.n7+1
return new A.aI(a,s,r)},
rn(a,b,c){var s,r,q=a.r
if(q!=null){if(b===q.c)return!0
s=a.q()
r=b.q()
if(s==null||r==null)return!1
return c.y.R(s).h(0,r)}return!0},
rx(a){A.aY(a)
$.cD.bi().ah(a,$.mO())
B.bE.d_(window,A.o8())},
lL(){var s=0,r=A.by(t.z),q,p,o,n,m,l
var $async$lL=A.bz(function(a,b){if(a===1)return A.bt(b,r)
while(true)switch(s){case 0:q=$.oE()
p=A.mW()
o=A.c([],t.I)
n=A.pu(B.aw,t.b,t.O)
m=A.c([],t.d)
s=2
return A.a7(q.au(A.md(null,new A.c7(20,20,0,0,0,0,0,new A.cV(o,n),p,A.c([],t.Q),m,new A.cW("J")),0,null,!1,!0,new A.a5(0,4,1,1,null))),$async$lL)
case 2:l=b
m=document
p=t.p
n=p.a(m.querySelector("#glCanvas"))
o=$.mO()
q=$.oN()
m=A.ph(l,n,o,q,p.a(m.querySelector("#text")),t.nK.a(B.E.bL(p.a(m.querySelector("#text")),"2d")))
p=$.cD.b
if(p==null?$.cD!=null:p!==$.cD)A.T(new A.cj("Field '"+$.cD.a+"' has already been initialized."))
$.cD.b=m
$.cD.bi().x.aN()
p=$.oM()
new A.kw().K(p)
o=t.s
n=A.c(["Controls"],o)
o=A.c(["<h1>Controls</h1>\n<ul>\n  <li>WASD / Arrow Keys - Movement</li>\n  <li>Space - Activate</li>\n  <li>ESC - Cancel</l1>\n</ul>\n"],o)
new A.iU(A.px(q),n,o).K(q)
q=$.cD.bi()
o=t.w
p=new A.fs(q,A.c([],o),A.c([],o),A.c([],t.fy),A.c([],t.ge),p)
o=q.dx.a
new A.bV(o,A.B(o).i("bV<1>")).cS(p.geT())
p=t.x.a(p.gci())
B.a.k(q.f,p)
B.bE.d_(window,A.o8())
return A.bu(null,r)}})
return A.bv($async$lL,r)}},J={
mJ(a,b,c,d){return{i:a,p:b,e:c,x:d}},
lE(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.mI==null){A.rk()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.mu("Return interceptor for "+A.y(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ld
if(o==null)o=$.ld=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.rr(a)
if(p!=null)return p
if(typeof a=="function")return B.dB
s=Object.getPrototypeOf(a)
if(s==null)return B.bp
if(s===Object.prototype)return B.bp
if(typeof q=="function"){o=$.ld
if(o==null)o=$.ld=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aH,enumerable:false,writable:true,configurable:true})
return B.aH}return B.aH},
pq(a,b){if(a<0||a>4294967295)throw A.d(A.cs(a,0,4294967295,"length",null))
return J.ps(new Array(a),b)},
pr(a,b){if(a<0)throw A.d(A.cK("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("t<0>"))},
ps(a,b){return J.nb(A.c(a,b.i("t<0>")),b)},
nb(a,b){a.fixed$length=Array
return a},
dt(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dU.prototype
return J.fy.prototype}if(typeof a=="string")return J.bM.prototype
if(a==null)return J.dV.prototype
if(typeof a=="boolean")return J.dT.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof A.v)return a
return J.lE(a)},
aw(a){if(typeof a=="string")return J.bM.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof A.v)return a
return J.lE(a)},
cE(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof A.v)return a
return J.lE(a)},
rc(a){if(typeof a=="number")return J.cZ.prototype
if(typeof a=="string")return J.bM.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.cw.prototype
return a},
rd(a){if(typeof a=="string")return J.bM.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.cw.prototype
return a},
bB(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof A.v)return a
return J.lE(a)},
V(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dt(a).H(a,b)},
mS(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.ro(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aw(a).h(a,b)},
mT(a,b,c){return J.cE(a).j(a,b,c)},
oT(a){return J.bB(a).dJ(a)},
oU(a,b,c,d){return J.bB(a).ex(a,b,c,d)},
oV(a,b){return J.rc(a).P(a,b)},
mU(a,b){return J.cE(a).t(a,b)},
oW(a,b){return J.cE(a).D(a,b)},
oX(a){return J.bB(a).geB(a)},
cH(a){return J.dt(a).gu(a)},
aH(a){return J.cE(a).gw(a)},
am(a){return J.aw(a).gm(a)},
oY(a){return J.bB(a).gby(a)},
oZ(a,b,c){return J.cE(a).cT(a,b,c)},
mV(a){return J.cE(a).f8(a)},
p_(a,b){return J.bB(a).se_(a,b)},
p0(a,b){return J.bB(a).scL(a,b)},
p1(a,b){return J.bB(a).sfk(a,b)},
p2(a){return J.rd(a).fh(a)},
c2(a){return J.dt(a).l(a)},
a:function a(){},
dT:function dT(){},
dV:function dV(){},
ci:function ci(){},
fY:function fY(){},
cw:function cw(){},
bk:function bk(){},
t:function t(a){this.$ti=a},
jM:function jM(a){this.$ti=a},
dA:function dA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cZ:function cZ(){},
dU:function dU(){},
fy:function fy(){},
bM:function bM(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.mm.prototype={}
J.a.prototype={
H(a,b){return a===b},
gu(a){return A.cr(a)},
l(a){return"Instance of '"+A.ki(a)+"'"}}
J.dT.prototype={
l(a){return String(a)},
de(a,b){return b||a},
gu(a){return a?519018:218159},
$iA:1}
J.dV.prototype={
H(a,b){return null==b},
l(a){return"null"},
gu(a){return 0},
$iU:1}
J.ci.prototype={
gu(a){return 0},
l(a){return String(a)}}
J.fY.prototype={}
J.cw.prototype={}
J.bk.prototype={
l(a){var s=a[$.of()]
if(s==null)return this.dl(a)
return"JavaScript function for "+J.c2(s)},
$icd:1}
J.t.prototype={
k(a,b){A.a0(a).c.a(b)
if(!!a.fixed$length)A.T(A.D("add"))
a.push(b)},
cZ(a,b){var s
if(!!a.fixed$length)A.T(A.D("removeAt"))
s=a.length
if(b>=s)throw A.d(A.nn(b,null))
return a.splice(b,1)[0]},
J(a,b){var s
if(!!a.fixed$length)A.T(A.D("remove"))
for(s=0;s<a.length;++s)if(J.V(a[s],b)){a.splice(s,1)
return!0}return!1},
e7(a,b,c){var s,r,q,p,o
A.a0(a).i("A(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.O(b.$1(p)))s.push(p)
if(a.length!==r)throw A.d(A.bH(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
G(a,b){A.a0(a).i("f<1>").a(b)
if(!!a.fixed$length)A.T(A.D("addAll"))
this.dD(a,b)
return},
dD(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.bH(a))
for(r=0;r<s;++r)a.push(b[r])},
cT(a,b,c){var s=A.a0(a)
return new A.cm(a,s.C(c).i("1(2)").a(b),s.i("@<1>").C(c).i("cm<1,2>"))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
ga9(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.d(A.n9())
throw A.d(A.na())},
bO(a,b,c,d){var s,r,q,p
A.a0(a).i("f<1>").a(d)
if(!!a.immutable$list)A.T(A.D("setRange"))
A.ms(b,c,a.length)
s=c-b
if(s===0)return
A.km(0,"skipCount")
r=d
q=J.aw(r)
if(s>q.gm(r))throw A.d(A.pp())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
bl(a,b){var s,r
A.a0(a).i("A(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.O(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.bH(a))}return!1},
aY(a,b){var s=A.a0(a)
s.i("i(1,1)?").a(b)
if(!!a.immutable$list)A.T(A.D("sort"))
A.pM(a,b,s.c)},
dh(a){var s,r,q,p
if(!!a.immutable$list)A.T(A.D("shuffle"))
s=a.length
for(;s>1;){r=B.v.E(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
eY(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.V(a[s],b))return s}return-1},
v(a,b){var s
for(s=0;s<a.length;++s)if(J.V(a[s],b))return!0
return!1},
l(a){return A.ml(a,"[","]")},
gw(a){return new J.dA(a,a.length,A.a0(a).i("dA<1>"))},
gu(a){return A.cr(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.T(A.D("set length"))
if(b>a.length)A.a0(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.ds(a,b))
return a[b]},
j(a,b,c){A.G(b)
A.a0(a).c.a(c)
if(!!a.immutable$list)A.T(A.D("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.ds(a,b))
a[b]=c},
$io:1,
$if:1,
$im:1}
J.jM.prototype={}
J.dA.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.C(q))
s=r.c
if(s>=p){r.sc5(null)
return!1}r.sc5(q[s]);++r.c
return!0},
sc5(a){this.d=this.$ti.i("1?").a(a)},
$ia4:1}
J.cZ.prototype={
P(a,b){var s
A.aY(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaO(b)
if(this.gaO(a)===s)return 0
if(this.gaO(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaO(a){return a===0?1/a<0:a<0},
ax(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.D(""+a+".toInt()"))},
cB(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.D(""+a+".ceil()"))},
ad(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.D(""+a+".floor()"))},
B(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.D(""+a+".round()"))},
aP(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
eG(a,b,c){if(B.e.P(b,c)>0)throw A.d(A.o0(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
d4(a,b){var s
if(b>20)throw A.d(A.cs(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaO(a))return"-"+s
return s},
fi(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.cs(b,2,36,"radix",null))
s=a.toString(b)
if(B.x.eI(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.T(A.D("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.x.bM("0",p)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dd(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bT(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.co(a,b)},
O(a,b){return(a|0)===a?a/b|0:this.co(a,b)},
co(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.D("Result of truncating division is "+A.y(s)+": "+A.y(a)+" ~/ "+b))},
cn(a,b){var s
if(a>0)s=this.ef(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ef(a,b){return b>31?0:a>>>b},
$iaf:1,
$iN:1,
$iP:1}
J.dU.prototype={$ii:1}
J.fy.prototype={}
J.bM.prototype={
eI(a,b){if(b<0)throw A.d(A.ds(a,b))
if(b>=a.length)A.T(A.ds(a,b))
return a.charCodeAt(b)},
A(a,b){return a+b},
di(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
fh(a){return a.toLowerCase()},
bM(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.ca)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cX(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bM(c,s)+a},
bp(a,b,c){var s=a.length
if(c>s)throw A.d(A.cs(c,0,s,null,null))
return A.rz(a,b,c)},
P(a,b){var s
A.Q(b)
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
h(a,b){if(b>=a.length)throw A.d(A.ds(a,b))
return a[b]},
$iaf:1,
$inl:1,
$ip:1}
A.cj.prototype={
l(a){var s="LateInitializationError: "+this.a
return s}}
A.ks.prototype={}
A.o.prototype={}
A.aK.prototype={
gw(a){var s=this
return new A.bn(s,s.gm(s),A.B(s).i("bn<aK.E>"))},
aU(a,b){return this.dk(0,A.B(this).i("A(aK.E)").a(b))}}
A.eg.prototype={
gdR(){var s=J.am(this.a),r=this.c
if(r==null||r>s)return s
return r},
geg(){var s=J.am(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.am(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.W()
return s-q},
t(a,b){var s=this,r=s.geg()+b
if(b<0||r>=s.gdR())throw A.d(A.R(b,s,"index",null,null))
return J.mU(s.a,r)}}
A.bn.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.aw(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.bH(q))
s=r.c
if(s>=o){r.sao(null)
return!1}r.sao(p.t(q,s));++r.c
return!0},
sao(a){this.d=this.$ti.i("1?").a(a)},
$ia4:1}
A.cl.prototype={
gw(a){var s=A.B(this)
return new A.e0(J.aH(this.a),this.b,s.i("@<1>").C(s.Q[1]).i("e0<1,2>"))},
gm(a){return J.am(this.a)}}
A.dM.prototype={$io:1}
A.e0.prototype={
n(){var s=this,r=s.b
if(r.n()){s.sao(s.c.$1(r.gp(r)))
return!0}s.sao(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
sao(a){this.a=this.$ti.i("2?").a(a)}}
A.cm.prototype={
gm(a){return J.am(this.a)},
t(a,b){return this.b.$1(J.mU(this.a,b))}}
A.a6.prototype={
gw(a){return new A.ek(J.aH(this.a),this.b,this.$ti.i("ek<1>"))}}
A.ek.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.O(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.aq.prototype={}
A.cS.prototype={
l(a){return A.mq(this)},
$iI:1}
A.dI.prototype={
gm(a){return this.a},
aK(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.aK(0,b))return null
return this.b[A.Q(b)]},
D(a,b){var s,r,q,p,o,n=this.$ti
n.i("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.Q(s[p])
b.$2(o,n.a(q[o]))}}}
A.ag.prototype={
ba(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.pm(r)
o=A.mo(A.qK(),q,r,s.Q[1])
A.o2(p.a,o)
p.$map=o}return o},
h(a,b){return this.ba().h(0,b)},
D(a,b){this.$ti.i("~(1,2)").a(b)
this.ba().D(0,b)},
gm(a){var s=this.ba()
return s.gm(s)}}
A.jB.prototype={
$1(a){return this.a.b(a)},
$S:22}
A.kJ.prototype={
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
A.e6.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.fz.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.ht.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.kd.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.dO.prototype={}
A.eE.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaX:1}
A.c8.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.od(r==null?"unknown":r)+"'"},
$icd:1,
gft(){return this},
$C:"$1",
$R:1,
$D:null}
A.fb.prototype={$C:"$0",$R:0}
A.fc.prototype={$C:"$2",$R:2}
A.hl.prototype={}
A.hf.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.od(s)+"'"}}
A.cO.prototype={
H(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cO))return!1
return this.$_target===b.$_target&&this.a===b.a},
gu(a){return(A.lN(this.a)^A.cr(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ki(t.K.a(this.a))+"'")}}
A.h7.prototype={
l(a){return"RuntimeError: "+this.a}}
A.hA.prototype={
l(a){return"Assertion failed: "+A.fm(this.a)}}
A.az.prototype={
gm(a){return this.a},
geZ(a){return this.a===0},
gL(a){return new A.dW(this,A.B(this).i("dW<1>"))},
gbI(a){var s=this,r=A.B(s)
return A.nh(s.gL(s),new A.jO(s),r.c,r.Q[1])},
aK(a,b){var s=this.cM(b)
return s},
cM(a){var s=this,r=s.d
if(r==null)return!1
return s.an(s.aA(r,s.am(a)),a)>=0},
G(a,b){A.B(this).i("I<1,2>").a(b).D(0,new A.jN(this))},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bb(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bb(p,b)
q=r==null?n:r.b
return q}else return o.cN(b)},
cN(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.aA(p,q.am(a))
r=q.an(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.B(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.bV(s==null?q.b=q.be():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.bV(r==null?q.c=q.be():r,b,c)}else q.cP(b,c)},
cP(a,b){var s,r,q,p,o=this,n=A.B(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.be()
r=o.am(a)
q=o.aA(s,r)
if(q==null)o.bk(s,r,[o.bf(a,b)])
else{p=o.an(q,a)
if(p>=0)q[p].b=b
else q.push(o.bf(a,b))}},
J(a,b){var s=this.cO(b)
return s},
cO(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.am(a)
r=o.aA(n,s)
q=o.an(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.ep(p)
if(r.length===0)o.c6(n,s)
return p.b},
D(a,b){var s,r,q=this
A.B(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.bH(q))
s=s.c}},
bV(a,b,c){var s,r=this,q=A.B(r)
q.c.a(b)
q.Q[1].a(c)
s=r.bb(a,b)
if(s==null)r.bk(a,b,r.bf(b,c))
else s.b=c},
ce(){this.r=this.r+1&67108863},
bf(a,b){var s=this,r=A.B(s),q=new A.jQ(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.ce()
return q},
ep(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.ce()},
am(a){return J.cH(a)&0x3ffffff},
an(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.V(a[r].a,b))return r
return-1},
l(a){return A.mq(this)},
bb(a,b){return a[b]},
aA(a,b){return a[b]},
bk(a,b,c){a[b]=c},
c6(a,b){delete a[b]},
be(){var s="<non-identifier-key>",r=Object.create(null)
this.bk(r,s,r)
this.c6(r,s)
return r},
$ijP:1}
A.jO.prototype={
$1(a){var s=this.a,r=A.B(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.B(this.a).i("2(1)")}}
A.jN.prototype={
$2(a,b){var s=this.a,r=A.B(s)
s.j(0,r.c.a(a),r.Q[1].a(b))},
$S(){return A.B(this.a).i("~(1,2)")}}
A.jQ.prototype={}
A.dW.prototype={
gm(a){return this.a.a},
gw(a){var s=this.a,r=new A.dX(s,s.r,this.$ti.i("dX<1>"))
r.c=s.e
return r}}
A.dX.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.bH(q))
s=r.c
if(s==null){r.sbU(null)
return!1}else{r.sbU(s.a)
r.c=s.c
return!0}},
sbU(a){this.d=this.$ti.i("1?").a(a)},
$ia4:1}
A.lG.prototype={
$1(a){return this.a(a)},
$S:32}
A.lH.prototype={
$2(a,b){return this.a(a,b)},
$S:38}
A.lI.prototype={
$1(a){return this.a(A.Q(a))},
$S:59}
A.kY.prototype={
aD(){var s=this.b
if(s===this)throw A.d(new A.cj("Local '"+this.a+"' has not been initialized."))
return s},
bi(){var s=this.b
if(s===this)throw A.d(A.nd(this.a))
return s}}
A.fK.prototype={$in0:1}
A.cp.prototype={$iaF:1}
A.d3.prototype={
gm(a){return a.length},
$iz:1}
A.co.prototype={
h(a,b){A.bw(b,a,a.length)
return a[b]},
j(a,b,c){A.G(b)
A.nN(c)
A.bw(b,a,a.length)
a[b]=c},
$io:1,
$if:1,
$im:1}
A.e2.prototype={
j(a,b,c){A.G(b)
A.G(c)
A.bw(b,a,a.length)
a[b]=c},
$io:1,
$if:1,
$im:1}
A.e1.prototype={$imk:1}
A.fL.prototype={
h(a,b){A.bw(b,a,a.length)
return a[b]}}
A.fM.prototype={
h(a,b){A.bw(b,a,a.length)
return a[b]}}
A.fN.prototype={
h(a,b){A.bw(b,a,a.length)
return a[b]}}
A.fO.prototype={
h(a,b){A.bw(b,a,a.length)
return a[b]}}
A.fP.prototype={
h(a,b){A.bw(b,a,a.length)
return a[b]}}
A.d4.prototype={
gm(a){return a.length},
h(a,b){A.bw(b,a,a.length)
return a[b]},
$ipR:1}
A.e3.prototype={
gm(a){return a.length},
h(a,b){A.bw(b,a,a.length)
return a[b]},
$ipS:1}
A.ew.prototype={}
A.ex.prototype={}
A.ey.prototype={}
A.ez.prototype={}
A.aW.prototype={
i(a){return A.lp(v.typeUniverse,this,a)},
C(a){return A.qh(v.typeUniverse,this,a)}}
A.hU.prototype={}
A.eK.prototype={
l(a){return A.al(this.a,null)},
$inx:1}
A.hQ.prototype={
l(a){return this.a}}
A.eL.prototype={$ibT:1}
A.kV.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:21}
A.kU.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:60}
A.kW.prototype={
$0(){this.a.$0()},
$S:8}
A.kX.prototype={
$0(){this.a.$0()},
$S:8}
A.eJ.prototype={
dB(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.be(new A.lo(this,b),0),a)
else throw A.d(A.D("`setTimeout()` not found."))},
dC(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.be(new A.ln(this,a,Date.now(),b),0),a)
else throw A.d(A.D("Periodic timer."))},
eE(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.d(A.D("Canceling a timer."))},
$iho:1}
A.lo.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.ln.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.e.bT(s,o)}q.c=p
r.d.$1(q)},
$S:8}
A.hB.prototype={
a2(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.bW(b)
else{s=r.a
if(q.i("ar<1>").b(b))s.bZ(b)
else s.aq(q.c.a(b))}},
bo(a,b){var s=this.a
if(this.b)s.M(a,b)
else s.b2(a,b)}}
A.lt.prototype={
$1(a){return this.a.$2(0,a)},
$S:9}
A.lu.prototype={
$2(a,b){this.a.$2(1,new A.dO(a,t.l.a(b)))},
$S:65}
A.ly.prototype={
$2(a,b){this.a(A.G(a),b)},
$S:33}
A.dC.prototype={
l(a){return A.y(this.a)},
$iL:1,
gaz(){return this.b}}
A.jz.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.M(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.M(q.e.aD(),q.f.aD())},
$S:10}
A.jy.prototype={
$1(a){var s,r,q=this,p=q.x
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.mT(s,q.b,a)
if(r.b===0)q.c.aq(A.pw(s,p))}else if(r.b===0&&!q.e)q.c.M(q.f.aD(),q.r.aD())},
$S(){return this.x.i("U(0)")}}
A.en.prototype={
bo(a,b){A.eU(a,"error",t.K)
if((this.a.a&30)!==0)throw A.d(A.ab("Future already completed"))
if(b==null)b=A.me(a)
this.M(a,b)},
aJ(a){return this.bo(a,null)}}
A.aQ.prototype={
a2(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.ab("Future already completed"))
s.bW(r.i("1/").a(b))},
aI(a){return this.a2(a,null)},
M(a,b){this.a.b2(a,b)}}
A.dk.prototype={
a2(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.ab("Future already completed"))
s.c2(r.i("1/").a(b))},
aI(a){return this.a2(a,null)},
M(a,b){this.a.M(a,b)}}
A.cz.prototype={
f_(a){if((this.c&15)!==6)return!0
return this.b.b.bD(t.iW.a(this.d),a.a,t.k4,t.K)},
eV(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.fd(q,m,a.b,o,n,t.l)
else p=l.bD(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bE.b(A.bf(s))){if((r.c&1)!==0)throw A.d(A.cK("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cK("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.J.prototype={
aR(a,b,c){var s,r,q,p=this.$ti
p.C(c).i("1/(2)").a(a)
s=$.E
if(s===B.j){if(b!=null&&!t.ng.b(b)&&!t.y.b(b))throw A.d(A.mX(b,"onError",u.c))}else{c.i("@<0/>").C(p.c).i("1(2)").a(a)
if(b!=null)b=A.qO(b,s)}r=new A.J(s,c.i("J<0>"))
q=b==null?1:3
this.b1(new A.cz(r,q,a,b,p.i("@<1>").C(c).i("cz<1,2>")))
return r},
d3(a,b){return this.aR(a,null,b)},
cp(a,b,c){var s,r=this.$ti
r.C(c).i("1/(2)").a(a)
s=new A.J($.E,c.i("J<0>"))
this.b1(new A.cz(s,19,a,b,r.i("@<1>").C(c).i("cz<1,2>")))
return s},
ed(a){this.a=this.a&1|16
this.c=a},
b4(a){this.a=a.a&30|this.a&1
this.c=a.c},
b1(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.f.a(r.c)
if((s.a&24)===0){s.b1(a)
return}r.b4(s)}A.dq(null,null,r.b,t.M.a(new A.l0(r,a)))}},
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
return}m.b4(n)}l.a=m.aF(a)
A.dq(null,null,m.b,t.M.a(new A.l8(l,m)))}},
aE(){var s=t.F.a(this.c)
this.c=null
return this.aF(s)},
aF(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bY(a){var s,r,q,p=this
p.a^=2
try{a.aR(new A.l4(p),new A.l5(p),t.P)}catch(q){s=A.bf(q)
r=A.bC(q)
A.ob(new A.l6(p,s,r))}},
c2(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("ar<1>").b(a))if(q.b(a))A.l3(a,r)
else r.bY(a)
else{s=r.aE()
q.c.a(a)
r.a=8
r.c=a
A.dj(r,s)}},
aq(a){var s,r=this
r.$ti.c.a(a)
s=r.aE()
r.a=8
r.c=a
A.dj(r,s)},
M(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.aE()
this.ed(A.iY(a,b))
A.dj(this,s)},
bW(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("ar<1>").b(a)){this.bZ(a)
return}this.dG(s.c.a(a))},
dG(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.dq(null,null,s.b,t.M.a(new A.l2(s,a)))},
bZ(a){var s=this,r=s.$ti
r.i("ar<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.dq(null,null,s.b,t.M.a(new A.l7(s,a)))}else A.l3(a,s)
return}s.bY(a)},
b2(a,b){t.l.a(b)
this.a^=2
A.dq(null,null,this.b,t.M.a(new A.l1(this,a,b)))},
$iar:1}
A.l0.prototype={
$0(){A.dj(this.a,this.b)},
$S:0}
A.l8.prototype={
$0(){A.dj(this.b,this.a.a)},
$S:0}
A.l4.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.aq(p.$ti.c.a(a))}catch(q){s=A.bf(q)
r=A.bC(q)
p.M(s,r)}},
$S:21}
A.l5.prototype={
$2(a,b){this.a.M(t.K.a(a),t.l.a(b))},
$S:23}
A.l6.prototype={
$0(){this.a.M(this.b,this.c)},
$S:0}
A.l2.prototype={
$0(){this.a.aq(this.b)},
$S:0}
A.l7.prototype={
$0(){A.l3(this.b,this.a)},
$S:0}
A.l1.prototype={
$0(){this.a.M(this.b,this.c)},
$S:0}
A.lb.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.fc(t.mY.a(q.d),t.z)}catch(p){s=A.bf(p)
r=A.bC(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.iY(s,r)
o.b=!0
return}if(l instanceof A.J&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.U.b(l)){n=m.b.a
q=m.a
q.c=l.d3(new A.lc(n),t.z)
q.b=!1}},
$S:0}
A.lc.prototype={
$1(a){return this.a},
$S:24}
A.la.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bD(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.bf(l)
r=A.bC(l)
q=this.a
q.c=A.iY(s,r)
q.b=!0}},
$S:0}
A.l9.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.f_(s)&&p.a.e!=null){p.c=p.a.eV(s)
p.b=!1}}catch(o){r=A.bf(o)
q=A.bC(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.iY(r,q)
n.b=!0}},
$S:0}
A.hC.prototype={}
A.ct.prototype={
gm(a){var s={},r=new A.J($.E,t.hy)
s.a=0
this.bx(new A.kA(s,this),!0,new A.kB(s,r),r.gdL())
return r}}
A.kA.prototype={
$1(a){A.B(this.b).c.a(a);++this.a.a},
$S(){return A.B(this.b).i("~(1)")}}
A.kB.prototype={
$0(){this.b.c2(this.a.a)},
$S:0}
A.bq.prototype={}
A.eF.prototype={
ge4(){var s,r=this
if((r.b&8)===0)return A.B(r).i("bZ<1>?").a(r.a)
s=A.B(r)
return s.i("bZ<1>?").a(s.i("il<1>").a(r.a).gbJ())},
dS(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.bc(A.B(q).i("bc<1>"))
return A.B(q).i("bc<1>").a(s)}r=A.B(q)
s=r.i("il<1>").a(q.a).gbJ()
return r.i("bc<1>").a(s)},
gei(){var s=this.a
if((this.b&8)!==0)s=t.d1.a(s).gbJ()
return A.B(this).i("di<1>").a(s)},
dH(){if((this.b&4)!==0)return new A.bp("Cannot add event after closing")
return new A.bp("Cannot add event while adding a stream")},
k(a,b){var s,r=this,q=A.B(r)
q.c.a(b)
s=r.b
if(s>=4)throw A.d(r.dH())
if((s&1)!==0)r.bj(b)
else if((s&3)===0)r.dS().k(0,new A.cx(b,q.i("cx<1>")))},
eh(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=A.B(l)
k.i("~(1)?").a(a)
t.Z.a(c)
if((l.b&3)!==0)throw A.d(A.ab("Stream has already been listened to."))
s=$.E
r=d?1:0
t.gS.C(k.c).i("1(2)").a(a)
A.pZ(s,b)
q=c==null?A.r1():c
p=t.M
p.a(q)
o=new A.di(l,a,s,r,k.i("di<1>"))
n=l.ge4()
r=l.b|=1
if((r&8)!==0){m=k.i("il<1>").a(l.a)
m.sbJ(o)
m.fa(0)}else l.a=o
o.ee(n)
k=p.a(new A.ll(l))
s=o.e
o.e=s|32
k.$0()
o.e&=4294967263
o.c_((s&4)!==0)
return o},
$ins:1,
$inF:1,
$icy:1}
A.ll.prototype={
$0(){A.mF(this.a.d)},
$S:0}
A.hD.prototype={
bj(a){var s=this.$ti
s.c.a(a)
this.gei().dF(new A.cx(a,s.i("cx<1>")))}}
A.dg.prototype={}
A.bV.prototype={
gu(a){return(A.cr(this.a)^892482866)>>>0},
H(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bV&&b.a===this.a}}
A.di.prototype={
cf(){var s=this.x,r=A.B(s)
r.i("bq<1>").a(this)
if((s.b&8)!==0)r.i("il<1>").a(s.a).fv(0)
A.mF(s.e)},
cg(){var s=this.x,r=A.B(s)
r.i("bq<1>").a(this)
if((s.b&8)!==0)r.i("il<1>").a(s.a).fa(0)
A.mF(s.f)}}
A.em.prototype={
ee(a){var s=this
A.B(s).i("bZ<1>?").a(a)
if(a==null)return
s.sbg(a)
if(a.c!=null){s.e|=64
a.aV(s)}},
cf(){},
cg(){},
dF(a){var s=this,r=A.B(s),q=r.i("bc<1>?").a(s.r)
if(q==null)q=new A.bc(r.i("bc<1>"))
s.sbg(q)
q.k(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.aV(s)}},
bj(a){var s,r=this,q=A.B(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.d0(r.a,a,q)
r.e&=4294967263
r.c_((s&4)!==0)},
c_(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.sbg(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.cf()
else q.cg()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.aV(q)},
sbg(a){this.r=A.B(this).i("bZ<1>?").a(a)},
$ibq:1,
$icy:1}
A.eG.prototype={
bx(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.eh(s.i("~(1)?").a(a),d,c,b===!0)},
cS(a){return this.bx(a,null,null,null)}}
A.hK.prototype={}
A.cx.prototype={}
A.bZ.prototype={
aV(a){var s,r=this
r.$ti.i("cy<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.ob(new A.lg(r,a))
r.a=1}}
A.lg.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("cy<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.B(r).i("cy<1>").a(s).bj(r.b)},
$S:0}
A.bc.prototype={
k(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.im.prototype={}
A.eP.prototype={$inz:1}
A.lx.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.l(0)
throw s},
$S:0}
A.ib.prototype={
fe(a){var s,r,q,p,o
t.M.a(a)
try{if(B.j===$.E){a.$0()
return}A.nW(null,null,this,a,t.H)}catch(q){s=A.bf(q)
r=A.bC(q)
p=t.K.a(s)
o=t.l.a(r)
A.iO(p,o)}},
d0(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.j===$.E){a.$1(b)
return}A.nX(null,null,this,a,b,t.H,c)}catch(q){s=A.bf(q)
r=A.bC(q)
p=t.K.a(s)
o=t.l.a(r)
A.iO(p,o)}},
cw(a){return new A.lh(this,t.M.a(a))},
cz(a,b){return new A.li(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
fc(a,b){b.i("0()").a(a)
if($.E===B.j)return a.$0()
return A.nW(null,null,this,a,b)},
bD(a,b,c,d){c.i("@<0>").C(d).i("1(2)").a(a)
d.a(b)
if($.E===B.j)return a.$1(b)
return A.nX(null,null,this,a,b,c,d)},
fd(a,b,c,d,e,f){d.i("@<0>").C(e).C(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.E===B.j)return a.$2(b,c)
return A.qP(null,null,this,a,b,c,d,e,f)},
bB(a,b,c,d){return b.i("@<0>").C(c).C(d).i("1(2,3)").a(a)}}
A.lh.prototype={
$0(){return this.a.fe(this.b)},
$S:0}
A.li.prototype={
$1(a){var s=this.c
return this.a.d0(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.lf.prototype={
am(a){return A.lN(a)&1073741823},
an(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.es.prototype={
h(a,b){if(!A.O(this.z.$1(b)))return null
return this.dn(b)},
j(a,b,c){var s=this.$ti
this.dr(s.c.a(b),s.Q[1].a(c))},
aK(a,b){if(!A.O(this.z.$1(b)))return!1
return this.dm(b)},
J(a,b){if(!A.O(this.z.$1(b)))return null
return this.dq(b)},
am(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
an(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(A.O(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.le.prototype={
$1(a){return this.a.b(a)},
$S:35}
A.cB.prototype={
gw(a){var s=this,r=new A.et(s,s.r,A.B(s).i("et<1>"))
r.c=s.e
return r},
gm(a){return this.a},
v(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else{r=this.dM(b)
return r}},
dM(a){var s=this.d
if(s==null)return!1
return this.c9(s[this.c3(a)],a)>=0},
k(a,b){var s,r,q=this
A.B(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.c0(s==null?q.b=A.mw():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.c0(r==null?q.c=A.mw():r,b)}else return q.dK(0,b)},
dK(a,b){var s,r,q,p=this
A.B(p).c.a(b)
s=p.d
if(s==null)s=p.d=A.mw()
r=p.c3(b)
q=s[r]
if(q==null)s[r]=[p.b5(b)]
else{if(p.c9(q,b)>=0)return!1
q.push(p.b5(b))}return!0},
c0(a,b){A.B(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.b5(b)
return!0},
b5(a){var s=this,r=new A.i0(A.B(s).c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
c3(a){return J.cH(a)&1073741823},
c9(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.V(a[r].a,b))return r
return-1}}
A.i0.prototype={}
A.et.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.bH(q))
else if(r==null){s.sc1(null)
return!1}else{s.sc1(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sc1(a){this.d=this.$ti.i("1?").a(a)},
$ia4:1}
A.jR.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:42}
A.dY.prototype={$io:1,$if:1,$im:1}
A.h.prototype={
gw(a){return new A.bn(a,this.gm(a),A.aR(a).i("bn<h.E>"))},
t(a,b){return this.h(a,b)},
aL(a,b,c,d){var s,r=A.aR(a)
d=r.i("h.E").a(r.i("h.E?").a(d))
A.ms(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
l(a){return A.ml(a,"[","]")}}
A.e_.prototype={}
A.jV.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.y(a)
r.a=s+": "
r.a+=A.y(b)},
$S:46}
A.x.prototype={
D(a,b){var s,r,q=A.aR(a)
q.i("~(x.K,x.V)").a(b)
for(s=J.aH(this.gL(a)),q=q.i("x.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gal(a){return J.oZ(this.gL(a),new A.jX(a),A.aR(a).i("d_<x.K,x.V>"))},
gm(a){return J.am(this.gL(a))},
l(a){return A.mq(a)},
$iI:1}
A.jX.prototype={
$1(a){var s,r=this.a,q=A.aR(r)
q.i("x.K").a(a)
s=q.i("x.V")
return new A.d_(a,s.a(J.mS(r,a)),q.i("@<x.K>").C(s).i("d_<1,2>"))},
$S(){return A.aR(this.a).i("d_<x.K,x.V>(x.K)")}}
A.ed.prototype={
G(a,b){var s
for(s=J.aH(A.B(this).i("f<1>").a(b));s.n();)this.k(0,s.gp(s))},
l(a){return A.ml(this,"{","}")}}
A.eA.prototype={$io:1,$if:1,$inr:1}
A.eu.prototype={}
A.eQ.prototype={}
A.ca.prototype={
H(a,b){if(b==null)return!1
return b instanceof A.ca&&this.a===b.a&&!0},
P(a,b){return B.e.P(this.a,t.cs.a(b).a)},
gu(a){var s=this.a
return(s^B.e.cn(s,30))&1073741823},
l(a){var s=this,r=A.pb(A.pH(s)),q=A.fh(A.pF(s)),p=A.fh(A.pB(s)),o=A.fh(A.pC(s)),n=A.fh(A.pE(s)),m=A.fh(A.pG(s)),l=A.pc(A.pD(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
return k},
$iaf:1}
A.a9.prototype={
H(a,b){if(b==null)return!1
return b instanceof A.a9&&this.a===b.a},
gu(a){return B.e.gu(this.a)},
P(a,b){return B.e.P(this.a,t.L.a(b).a)},
l(a){var s,r,q,p,o,n=this.a,m=B.e.O(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.e.O(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.e.O(n,1e6)
p=q<10?"0":""
o=B.x.cX(B.e.l(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o},
$iaf:1}
A.kZ.prototype={}
A.L.prototype={
gaz(){return A.bC(this.$thrownJsError)}}
A.dB.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fm(s)
return"Assertion failed"}}
A.bT.prototype={}
A.fT.prototype={
l(a){return"Throw of null."}}
A.b_.prototype={
gb9(){return"Invalid argument"+(!this.a?"(s)":"")},
gb8(){return""},
l(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+A.y(n),l=q.gb9()+o+m
if(!q.a)return l
s=q.gb8()
r=A.fm(q.b)
return l+s+": "+r}}
A.d6.prototype={
gb9(){return"RangeError"},
gb8(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.y(q):""
else if(q==null)s=": Not greater than or equal to "+A.y(r)
else if(q>r)s=": Not in inclusive range "+A.y(r)+".."+A.y(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.y(r)
return s}}
A.fv.prototype={
gb9(){return"RangeError"},
gb8(){if(A.G(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.hv.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.hs.prototype={
l(a){var s="UnimplementedError: "+this.a
return s}}
A.bp.prototype={
l(a){return"Bad state: "+this.a}}
A.fd.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fm(s)+"."}}
A.fW.prototype={
l(a){return"Out of Memory"},
gaz(){return null},
$iL:1}
A.ef.prototype={
l(a){return"Stack Overflow"},
gaz(){return null},
$iL:1}
A.fg.prototype={
l(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.hR.prototype={
l(a){return"Exception: "+this.a}}
A.f.prototype={
cT(a,b,c){var s=A.B(this)
return A.nh(this,s.C(c).i("1(f.E)").a(b),s.i("f.E"),c)},
aU(a,b){var s=A.B(this)
return new A.a6(this,s.i("A(f.E)").a(b),s.i("a6<f.E>"))},
D(a,b){var s
A.B(this).i("~(f.E)").a(b)
for(s=this.gw(this);s.n();)b.$1(s.gp(s))},
gm(a){var s,r=this.gw(this)
for(s=0;r.n();)++s
return s},
ga9(a){var s,r=this.gw(this)
if(!r.n())throw A.d(A.n9())
s=r.gp(r)
if(r.n())throw A.d(A.na())
return s},
t(a,b){var s,r,q
A.km(b,"index")
for(s=this.gw(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.d(A.R(b,this,"index",null,r))},
l(a){return A.n8(this,"(",")")}}
A.a4.prototype={}
A.d_.prototype={
l(a){return"MapEntry("+A.y(this.a)+": "+A.y(this.b)+")"}}
A.U.prototype={
gu(a){return A.v.prototype.gu.call(this,this)},
l(a){return"null"}}
A.v.prototype={$iv:1,
H(a,b){return this===b},
gu(a){return A.cr(this)},
l(a){return"Instance of '"+A.ki(this)+"'"},
toString(){return this.l(this)}}
A.iq.prototype={
l(a){return""},
$iaX:1}
A.hh.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.u.prototype={}
A.iT.prototype={
gm(a){return a.length}}
A.cJ.prototype={
seW(a,b){a.href=b},
l(a){return String(a)},
$icJ:1}
A.f2.prototype={
l(a){return String(a)}}
A.cN.prototype={$icN:1}
A.f7.prototype={}
A.c4.prototype={
gby(a){return new A.bW(a,"load",!1,t.bz)},
$ic4:1}
A.c5.prototype={
sa3(a,b){a.height=b},
sa5(a,b){a.width=b},
bL(a,b){return a.getContext(b)},
$ic5:1}
A.cP.prototype={
seR(a,b){a.fillStyle=b},
$icP:1}
A.b2.prototype={
gm(a){return a.length}}
A.je.prototype={
gm(a){return a.length}}
A.H.prototype={$iH:1}
A.cT.prototype={
ap(a,b){var s=$.oe(),r=s[b]
if(typeof r=="string")return r
r=this.ej(a,b)
s[b]=r
return r},
ej(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.og()+b
if(s in a)return s
return b},
at(a,b,c,d){if(d==null)d=""
a.setProperty(b,c,d)},
gm(a){return a.length}}
A.jf.prototype={}
A.aS.prototype={}
A.bi.prototype={}
A.jg.prototype={
gm(a){return a.length}}
A.jh.prototype={
gm(a){return a.length}}
A.ji.prototype={
gm(a){return a.length},
h(a,b){return a[b]}}
A.cU.prototype={$icU:1}
A.b6.prototype={$ib6:1}
A.bK.prototype={
l(a){return String(a)},
$ibK:1}
A.fj.prototype={
eL(a,b){return a.createHTMLDocument(b)}}
A.dK.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.mx.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.dL.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.y(r)+", "
s=a.top
s.toString
return r+A.y(s)+") "+A.y(this.ga5(a))+" x "+A.y(this.ga3(a))},
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
if(s===r){s=J.bB(b)
s=this.ga5(a)===s.ga5(b)&&this.ga3(a)===s.ga3(b)}else s=!1}else s=!1}else s=!1
return s},
gu(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.ke(r,s,this.ga5(a),this.ga3(a))},
gcb(a){return a.height},
ga3(a){var s=this.gcb(a)
s.toString
return s},
gcq(a){return a.width},
ga5(a){var s=this.gcq(a)
s.toString
return s},
$iba:1}
A.fk.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
A.Q(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.jj.prototype={
gm(a){return a.length}}
A.K.prototype={
geB(a){return new A.hP(a)},
l(a){return a.localName},
T(a,b,c,d){var s,r,q,p
if(c==null){s=$.n4
if(s==null){s=A.c([],t.lN)
r=new A.e5(s)
B.a.k(s,A.nB(null))
B.a.k(s,A.nG())
$.n4=r
d=r}else d=s
s=$.n3
if(s==null){s=new A.eO(d)
$.n3=s
c=s}else{s.a=d
c=s}}if($.bL==null){s=document
r=s.implementation
r.toString
r=B.dp.eL(r,"")
$.bL=r
$.mh=r.createRange()
r=$.bL.createElement("base")
t.az.a(r)
s=s.baseURI
s.toString
r.href=s
$.bL.head.appendChild(r)}s=$.bL
if(s.body==null){r=s.createElement("body")
B.du.seC(s,t.hp.a(r))}s=$.bL
if(t.hp.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.bL.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!B.a.v(B.dK,a.tagName)){$.mh.selectNodeContents(q)
s=$.mh
p=s.createContextualFragment(b)}else{J.p_(q,b)
p=$.bL.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.bL.body)J.mV(q)
c.bN(p)
document.adoptNode(p)
return p},
eK(a,b,c){return this.T(a,b,c,null)},
scL(a,b){this.aX(a,b)},
aX(a,b){this.sd2(a,null)
a.appendChild(this.T(a,b,null,null))},
se_(a,b){a.innerHTML=b},
gd1(a){return a.tagName},
gby(a){return new A.bW(a,"load",!1,t.bz)},
$iK:1}
A.jq.prototype={
$1(a){return t.h.b(t.A.a(a))},
$S:58}
A.k.prototype={$ik:1}
A.e.prototype={
ex(a,b,c,d){t.du.a(c)
if(c!=null)this.dE(a,b,c,!1)},
dE(a,b,c,d){return a.addEventListener(b,A.be(t.du.a(c),1),!1)},
$ie:1}
A.ax.prototype={$iax:1}
A.fn.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.et.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.fo.prototype={
gm(a){return a.length}}
A.fq.prototype={
gm(a){return a.length}}
A.ay.prototype={$iay:1}
A.jF.prototype={
gm(a){return a.length}}
A.ce.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.A.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.dR.prototype={
seC(a,b){a.body=b}}
A.dS.prototype={
f4(a,b,c){return a.open(b,c)}}
A.cf.prototype={}
A.cY.prototype={$icY:1}
A.cg.prototype={
seF(a,b){a.checked=!1},
sfk(a,b){a.type=b},
$icg:1}
A.bl.prototype={$ibl:1}
A.dZ.prototype={
l(a){return String(a)},
$idZ:1}
A.cn.prototype={}
A.jZ.prototype={
gm(a){return a.length}}
A.fG.prototype={
h(a,b){return A.bA(a.get(A.Q(b)))},
D(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bA(r.value[1]))}},
gL(a){var s=A.c([],t.s)
this.D(a,new A.k1(s))
return s},
gm(a){return a.size},
$iI:1}
A.k1.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.fH.prototype={
h(a,b){return A.bA(a.get(A.Q(b)))},
D(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bA(r.value[1]))}},
gL(a){var s=A.c([],t.s)
this.D(a,new A.k2(s))
return s},
gm(a){return a.size},
$iI:1}
A.k2.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.aA.prototype={$iaA:1}
A.fI.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.ib.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.as.prototype={$ias:1}
A.aj.prototype={
ga9(a){var s=this.a,r=s.childNodes.length
if(r===0)throw A.d(A.ab("No elements"))
if(r>1)throw A.d(A.ab("More than one element"))
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
A.G(b)
t.A.a(c)
s=this.a
r=s.childNodes
if(!(b>=0&&b<r.length))return A.b(r,b)
s.replaceChild(c,r[b])},
gw(a){var s=this.a.childNodes
return new A.cc(s,s.length,A.aR(s).i("cc<r.E>"))},
gm(a){return this.a.childNodes.length},
h(a,b){var s=this.a.childNodes
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b]}}
A.q.prototype={
f8(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
dJ(a){var s
for(;s=a.firstChild,s!=null;)a.removeChild(s)},
l(a){var s=a.nodeValue
return s==null?this.dj(a):s},
sd2(a,b){a.textContent=b},
$iq:1}
A.e4.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.A.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.aB.prototype={
gm(a){return a.length},
$iaB:1}
A.h_.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.d8.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.h6.prototype={
h(a,b){return A.bA(a.get(A.Q(b)))},
D(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bA(r.value[1]))}},
gL(a){var s=A.c([],t.s)
this.D(a,new A.kp(s))
return s},
gm(a){return a.size},
$iI:1}
A.kp.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.h8.prototype={
gm(a){return a.length}}
A.au.prototype={$iau:1}
A.hb.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.fm.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.aC.prototype={$iaC:1}
A.hc.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.cA.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.aD.prototype={
gm(a){return a.length},
$iaD:1}
A.hg.prototype={
h(a,b){return a.getItem(A.Q(b))},
D(a,b){var s,r,q
t.bm.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gL(a){var s=A.c([],t.s)
this.D(a,new A.kz(s))
return s},
gm(a){return a.length},
$iI:1}
A.kz.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:61}
A.ah.prototype={$iah:1}
A.eh.prototype={
T(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.aZ(a,b,c,d)
s=A.pf("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
new A.aj(r).G(0,new A.aj(s))
return r}}
A.hj.prototype={
T(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.aZ(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=new A.aj(B.bx.T(s.createElement("table"),b,c,d))
s=new A.aj(s.ga9(s))
new A.aj(r).G(0,new A.aj(s.ga9(s)))
return r}}
A.hk.prototype={
T(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.aZ(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=new A.aj(B.bx.T(s.createElement("table"),b,c,d))
new A.aj(r).G(0,new A.aj(s.ga9(s)))
return r}}
A.db.prototype={
aX(a,b){var s,r
this.sd2(a,null)
s=a.content
s.toString
J.oT(s)
r=this.T(a,b,null,null)
a.content.appendChild(r)},
$idb:1}
A.av.prototype={$iav:1}
A.ac.prototype={$iac:1}
A.hm.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.gJ.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.hn.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.dQ.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.kH.prototype={
gm(a){return a.length}}
A.aE.prototype={$iaE:1}
A.hp.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.ki.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.kI.prototype={
gm(a){return a.length}}
A.bb.prototype={}
A.kL.prototype={
l(a){return String(a)}}
A.dd.prototype={$idd:1}
A.hx.prototype={
gm(a){return a.length}}
A.df.prototype={
d_(a,b){var s
t.hv.a(b)
this.dT(a)
s=A.nZ(b,t.cZ)
s.toString
return this.e8(a,s)},
e8(a,b){return a.requestAnimationFrame(A.be(t.hv.a(b),1))},
dT(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ikQ:1}
A.dh.prototype={$idh:1}
A.hH.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.d5.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.eo.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+A.y(r)+", "
s=a.top
s.toString
s=r+A.y(s)+") "
r=a.width
r.toString
r=s+A.y(r)+" x "
s=a.height
s.toString
return r+A.y(s)},
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
r=J.bB(b)
if(s===r.ga5(b)){s=a.height
s.toString
r=s===r.ga3(b)
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
return A.ke(p,s,r,q)},
gcb(a){return a.height},
ga3(a){var s=a.height
s.toString
return s},
gcq(a){return a.width},
ga5(a){var s=a.width
s.toString
return s}}
A.hV.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.ef.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.ev.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.A.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.ih.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.hH.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.ir.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a[b]},
j(a,b,c){A.G(b)
t.lv.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$io:1,
$iz:1,
$if:1,
$im:1}
A.hF.prototype={
D(a,b){var s,r,q,p,o
t.bm.a(b)
for(s=this.gL(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
b.$2(o,A.Q(q.getAttribute(o)))}},
gL(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=A.c([],t.s)
for(r=m.length,q=t.nD,p=0;p<r;++p){if(!(p<m.length))return A.b(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
B.a.k(s,n)}}return s}}
A.hP.prototype={
h(a,b){return this.a.getAttribute(A.Q(b))},
gm(a){return this.gL(this).length}}
A.mi.prototype={}
A.ep.prototype={
bx(a,b,c,d){var s=A.B(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.bX(this.a,this.b,a,!1,s.c)}}
A.bW.prototype={}
A.eq.prototype={}
A.l_.prototype={
$1(a){return this.a.$1(t.R.a(a))},
$S:12}
A.cA.prototype={
dz(a){var s
if($.er.geZ($.er)){for(s=0;s<262;++s)$.er.j(0,B.dE[s],A.rh())
for(s=0;s<12;++s)$.er.j(0,B.av[s],A.ri())}},
aj(a){return $.oz().v(0,A.dN(a))},
aa(a,b,c){var s=$.er.h(0,A.dN(a)+"::"+b)
if(s==null)s=$.er.h(0,"*::"+b)
if(s==null)return!1
return A.qk(s.$4(a,b,c,this))},
$iaV:1}
A.r.prototype={
gw(a){return new A.cc(a,this.gm(a),A.aR(a).i("cc<r.E>"))}}
A.e5.prototype={
aj(a){return B.a.bl(this.a,new A.ka(a))},
aa(a,b,c){return B.a.bl(this.a,new A.k9(a,b,c))},
$iaV:1}
A.ka.prototype={
$1(a){return t.hU.a(a).aj(this.a)},
$S:14}
A.k9.prototype={
$1(a){return t.hU.a(a).aa(this.a,this.b,this.c)},
$S:14}
A.eB.prototype={
dA(a,b,c,d){var s,r,q
this.a.G(0,c)
s=b.aU(0,new A.lj())
r=b.aU(0,new A.lk())
this.b.G(0,s)
q=this.c
q.G(0,B.bd)
q.G(0,r)},
aj(a){return this.a.v(0,A.dN(a))},
aa(a,b,c){var s=this,r=A.dN(a),q=s.c
if(q.v(0,r+"::"+b))return s.d.ez(c)
else if(q.v(0,"*::"+b))return s.d.ez(c)
else{q=s.b
if(q.v(0,r+"::"+b))return!0
else if(q.v(0,"*::"+b))return!0
else if(q.v(0,r+"::*"))return!0
else if(q.v(0,"*::*"))return!0}return!1},
$iaV:1}
A.lj.prototype={
$1(a){return!B.a.v(B.av,A.Q(a))},
$S:15}
A.lk.prototype={
$1(a){return B.a.v(B.av,A.Q(a))},
$S:15}
A.it.prototype={
aa(a,b,c){if(this.ds(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.v(0,b)
return!1}}
A.lm.prototype={
$1(a){return"TEMPLATE::"+A.Q(a)},
$S:25}
A.is.prototype={
aj(a){var s
if(t.nZ.b(a))return!1
s=t.bC.b(a)
if(s&&A.dN(a)==="foreignObject")return!1
if(s)return!0
return!1},
aa(a,b,c){if(b==="is"||B.x.di(b,"on"))return!1
return this.aj(a)},
$iaV:1}
A.cc.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.scc(J.mS(s.a,r))
s.c=r
return!0}s.scc(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
scc(a){this.d=this.$ti.i("1?").a(a)},
$ia4:1}
A.hJ.prototype={$ie:1,$ikQ:1}
A.id.prototype={$ipT:1}
A.eO.prototype={
bN(a){var s,r=new A.ls(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
as(a,b){++this.b
if(b==null||b!==a.parentNode)J.mV(a)
else b.removeChild(a)},
eb(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.oX(a)
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
n=A.O(s)?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){}r="element unprintable"
try{r=J.c2(a)}catch(p){}try{q=A.dN(a)
this.ea(t.h.a(a),b,n,r,q,t.av.a(m),A.nO(l))}catch(p){if(A.bf(p) instanceof A.b_)throw p
else{this.as(a,b)
window
o="Removing corrupted element "+A.y(r)
if(typeof console!="undefined")window.console.warn(o)}}},
ea(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.as(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aj(a)){m.as(a,b)
window
s="Removing disallowed element <"+e+"> from "+A.y(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.aa(a,"is",g)){m.as(a,b)
window
s="Removing disallowed type extension <"+e+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.gL(f)
r=A.c(s.slice(0),A.a0(s))
for(q=f.gL(f).length-1,s=f.a;q>=0;--q){if(!(q<r.length))return A.b(r,q)
p=r[q]
o=m.a
n=J.p2(p)
A.Q(p)
if(!o.aa(a,n,A.Q(s.getAttribute(p)))){window
o="Removing disallowed attribute <"+e+" "+p+'="'+A.y(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.fD.b(a)){s=a.content
s.toString
m.bN(s)}},
$ipy:1}
A.ls.prototype={
$2(a,b){var s,r,q,p,o,n,m=this.a
switch(a.nodeType){case 1:m.eb(a,b)
break
case 8:case 11:case 3:case 4:break
default:m.as(a,b)}s=a.lastChild
for(q=t.A;s!=null;){r=null
try{r=s.previousSibling
if(r!=null){p=r.nextSibling
o=s
o=p==null?o!=null:p!==o
p=o}else p=!1
if(p){p=A.ab("Corrupt HTML")
throw A.d(p)}}catch(n){p=q.a(s);++m.b
o=p.parentNode
if(a!==o){if(o!=null)o.removeChild(p)}else a.removeChild(p)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:26}
A.hI.prototype={}
A.hL.prototype={}
A.hM.prototype={}
A.hN.prototype={}
A.hO.prototype={}
A.hS.prototype={}
A.hT.prototype={}
A.hW.prototype={}
A.hX.prototype={}
A.i1.prototype={}
A.i2.prototype={}
A.i3.prototype={}
A.i4.prototype={}
A.i5.prototype={}
A.i6.prototype={}
A.i9.prototype={}
A.ia.prototype={}
A.ic.prototype={}
A.eC.prototype={}
A.eD.prototype={}
A.ie.prototype={}
A.ig.prototype={}
A.ik.prototype={}
A.iu.prototype={}
A.iv.prototype={}
A.eH.prototype={}
A.eI.prototype={}
A.ix.prototype={}
A.iy.prototype={}
A.iE.prototype={}
A.iF.prototype={}
A.iG.prototype={}
A.iH.prototype={}
A.iI.prototype={}
A.iJ.prototype={}
A.iK.prototype={}
A.iL.prototype={}
A.iM.prototype={}
A.iN.prototype={}
A.kR.prototype={
cF(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.k(r,a)
B.a.k(this.b,null)
return q},
bK(a){var s,r,q,p,o,n,m,l,k=this,j={}
if(a==null)return a
if(A.lv(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.T(A.cK("DateTime is outside valid range: "+s,null))
A.eU(!0,"isUtc",t.k4)
return new A.ca(s,!0)}if(a instanceof RegExp)throw A.d(A.mu("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.rv(a,t.z)
if(A.o7(a)){q=k.cF(a)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=j.a=r[q]
if(p!=null)return p
o=t.z
p=A.aa(o,o)
j.a=p
B.a.j(r,q,p)
k.eS(a,new A.kT(j,k))
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
for(r=J.cE(p),l=0;l<m;++l)r.j(p,l,k.bK(o.h(n,l)))
return p}return a}}
A.kT.prototype={
$2(a,b){var s=this.a.a,r=this.b.bK(b)
J.mT(s,a,r)
return r},
$S:27}
A.kS.prototype={
eS(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.C)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.kc.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.lV.prototype={
$1(a){return this.a.a2(0,this.b.i("0/?").a(a))},
$S:9}
A.lW.prototype={
$1(a){if(a==null)return this.a.aJ(new A.kc(a===undefined))
return this.a.aJ(a)},
$S:9}
A.hY.prototype={
E(a){if(a<=0||a>4294967296)throw A.d(A.pI("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
U(){return Math.random()},
f1(){return Math.random()<0.5},
$inm:1}
A.aJ.prototype={$iaJ:1}
A.fA.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.G(b)
t.kT.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){return this.h(a,b)},
$io:1,
$if:1,
$im:1}
A.aM.prototype={$iaM:1}
A.fU.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.G(b)
t.ai.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){return this.h(a,b)},
$io:1,
$if:1,
$im:1}
A.kh.prototype={
gm(a){return a.length}}
A.d9.prototype={$id9:1}
A.hi.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.G(b)
A.Q(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){return this.h(a,b)},
$io:1,
$if:1,
$im:1}
A.n.prototype={
scL(a,b){this.aX(a,b)},
T(a,b,c,d){var s,r,q,p,o,n=A.c([],t.lN)
B.a.k(n,A.nB(null))
B.a.k(n,A.nG())
B.a.k(n,new A.is())
c=new A.eO(new A.e5(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=B.aN.eK(r,s,c)
p=n.createDocumentFragment()
n=new A.aj(q)
o=n.ga9(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
gby(a){return new A.bW(a,"load",!1,t.bz)},
$in:1}
A.aO.prototype={$iaO:1}
A.hq.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.G(b)
t.hk.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){return this.h(a,b)},
$io:1,
$if:1,
$im:1}
A.hZ.prototype={}
A.i_.prototype={}
A.i7.prototype={}
A.i8.prototype={}
A.io.prototype={}
A.ip.prototype={}
A.iz.prototype={}
A.iA.prototype={}
A.b0.prototype={
gm(a){return a.length},
$ib0:1}
A.dE.prototype={
seD(a,b){a.buffer=b}}
A.c3.prototype={
dP(a,b,c,d){t.p0.a(c)
t.lW.a(d)
return a.decodeAudioData(b,A.be(c,1),A.be(d,1))},
eM(a,b){var s=new A.J($.E,t.og),r=new A.aQ(s,t.oJ)
this.dP(a,b,new A.j1(r),new A.j2(r))
return s},
$ic3:1}
A.j1.prototype={
$1(a){this.a.a2(0,t.bD.a(a))},
$S:28}
A.j2.prototype={
$1(a){this.a.aJ(t.jW.a(a))},
$S:29}
A.F.prototype={
c4(a,b,c,d){return a.connect(b,c,d)},
$iF:1}
A.f3.prototype={
saT(a,b){a.value=b}}
A.f4.prototype={
h(a,b){return A.bA(a.get(A.Q(b)))},
D(a,b){var s,r
t.J.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.bA(r.value[1]))}},
gL(a){var s=A.c([],t.s)
this.D(a,new A.j3(s))
return s},
gm(a){return a.size},
$iI:1}
A.j3.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:5}
A.bg.prototype={}
A.f5.prototype={
gm(a){return a.length}}
A.dF.prototype={}
A.cX.prototype={}
A.fV.prototype={
gm(a){return a.length}}
A.hG.prototype={}
A.f8.prototype={$if8:1}
A.fr.prototype={$ifr:1}
A.h0.prototype={$ih0:1}
A.d7.prototype={
cA(a,b){return a.bindVertexArray(b)},
cv(a,b,c){return a.bindBuffer(b,c)},
aH(a,b,c){return a.bindFramebuffer(b,c)},
S(a,b,c){return a.bindTexture(b,c)},
eN(a,b){return a.deleteTexture(b)},
cH(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aQ(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.mD(g)){s.ek(a,b,c,d,e,f,g,h,i,j)
return}if(t.hQ.b(g)&&h==null&&r&&j==null){s.el(a,b,c,d,e,f,g)
return}if(t.p.b(g)&&h==null&&r&&j==null){s.em(a,b,c,d,e,f,g)
return}if(t.eL.b(g)&&h==null&&r&&j==null){s.en(a,b,c,d,e,f,g)
return}throw A.d(A.cK("Incorrect number or type of arguments",null))},
fg(a,b,c,d,e,f,g){return this.aQ(a,b,c,d,e,f,g,null,null,null)},
ek(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
el(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
em(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
en(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fl(a,b,c){return a.uniform1f(b,c)},
fm(a,b,c){return a.uniform1i(b,c)},
fn(a,b,c,d){return a.uniform2f(b,c,d)},
fo(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fp(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fs(a,b){return a.useProgram(b)},
$id7:1}
A.br.prototype={$ibr:1}
A.hr.prototype={$ihr:1}
A.hw.prototype={$ihw:1}
A.hd.prototype={
gm(a){return a.length},
h(a,b){var s
if(b>>>0!==b||b>=a.length)throw A.d(A.R(b,a,null,null,null))
s=A.bA(a.item(b))
s.toString
return s},
j(a,b,c){A.G(b)
t.av.a(c)
throw A.d(A.D("Cannot assign element of immutable List."))},
t(a,b){return this.h(a,b)},
$io:1,
$if:1,
$im:1}
A.ii.prototype={}
A.ij.prototype={}
A.fu.prototype={
b7(a){var s=this.b
if(!(a>=0&&a<s.length))return A.b(s,a)
s=s[a]
return s==null?this.$ti.c.a(null):s},
k(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b);++o.d
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.b8(q,null,!1,n.i("1?"))
B.a.bO(p,0,o.c,o.b)
o.sbh(p)}o.b3(b,o.c++)},
gm(a){return this.c},
J(a,b){var s,r,q=this
q.$ti.c.a(b)
s=q.e0(b)
if(s<0)return!1;++q.d
r=q.e6()
if(s<q.c)if(q.a.$2(r,b)<=0)q.b3(r,s)
else q.bX(r,s)
return!0},
aS(a){var s=this.eo()
B.a.aY(s,this.a)
return s},
eo(){var s,r,q=this.$ti,p=A.c([],q.i("t<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
l(a){var s=this.b
return A.n8(A.nv(s,0,A.eU(this.c,"count",t.S),A.a0(s).c),"(",")")},
b_(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.b8(q,null,!1,n.i("1?"))
B.a.bO(p,0,o.c,o.b)
o.sbh(p)}o.b3(b,o.c++)},
e0(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.b7(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.V(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
e6(){var s=this,r=s.c-1,q=s.b7(r)
B.a.j(s.b,r,null)
s.c=r
return q},
b3(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.e.O(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.V()
if(q>0)break
B.a.j(o.b,b,p)}B.a.j(o.b,b,a)},
bX(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.$ti.c
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
if(p<q){j=i.b7(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sbh(a){this.b=this.$ti.i("m<1?>").a(a)}}
A.lq.prototype={
gw(a){var s=this.a
return new A.cC(s,s.d,this.$ti.i("cC<1>"))}}
A.cC.prototype={
n(){var s,r=this,q=r.a
if(r.b!==q.d)throw A.d(A.bH(q))
s=r.d+1
if(0<=s&&s<q.c){q=q.b
if(!(s>=0&&s<q.length))return A.b(q,s)
r.sck(q[s])
r.d=s
return!0}r.sck(null)
r.d=-2
return!1},
gp(a){var s
if(this.d<0)s=A.T(A.ab("No element"))
else{s=this.c
if(s==null)s=this.$ti.c.a(null)}return s},
sck(a){this.c=this.$ti.i("1?").a(a)},
$ia4:1}
A.l.prototype={
H(a,b){if(b==null)return!1
return b instanceof A.l&&b.a===this.a},
gu(a){return B.e.gu(this.a)},
l(a){return"Color(0x"+B.x.cX(B.e.fi(this.a,16),8,"0")+")"}}
A.Z.prototype={
cI(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.e.ax(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.d(A.ab(b.l(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.e.ax(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.d(A.mj(b.l(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
a0(a,b,c){var s=B.e.ax(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
F(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.e.ax(d*s+c)
q=p.c
if(r>=q.length)throw A.d(A.mj("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
l(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.e.ax(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.y(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.fS.prototype={
saT(a,b){var s,r,q,p=this
p.$ti.c.a(b)
if(b===p.b)return
p.seu(b)
s=p.a
r=A.c(s.slice(0),A.a0(s))
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.C)(r),++q)r[q].$0()},
seu(a){this.b=this.$ti.c.a(a)}}
A.aN.prototype={
A(a,b){return new A.aN(this.a+b.a,this.b+b.b)},
H(a,b){if(b==null)return!1
return b instanceof A.aN&&b.a===this.a&&b.b===this.b},
gu(a){return A.ke(this.a,this.b,B.D,B.D)},
l(a){return"Offset("+B.c.d4(this.a,1)+", "+B.c.d4(this.b,1)+")"}}
A.cI.prototype={
gX(a){return B.c.B(this.b.d/24)},
gY(a){return B.c.B(this.b.e/36)},
q(){var s=this.b
return new A.j(B.c.B(s.d/24),B.c.B(s.e/36))},
$idQ:1,
gbw(){return null}}
A.iS.prototype={}
A.iR.prototype={
eA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.b
c.f3()
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
n=b.y.R(s)
for(p=o.a,m=p.length,l=n.c,k=n.a,j=l.length,c=c.a,i=0;i<p.length;p.length===m||(0,A.C)(p),++i){h=p[i]
if(h.e)continue
g=h.q()
if(g==null)continue
f=g.av(s)
e=g.b*k+g.a
if(!(e>=0&&e<j))return A.b(l,e)
if(l[e]!==1||h===a)continue
if(!A.o6(h,a))B.a.k(q,h)
else if(f<10.5){B.a.k(r,h)
e=h.q()
d=e.b*100+e.a
if(!(d>=0&&d<4000))return A.b(c,d)
B.e9.j(c,d,Math.max(c[d],20))}}c=this.a.a_(a,r,q,new A.ad(null,null),b).a
if(c==null)return new A.da()
return c}}
A.ad.prototype={}
A.ao.prototype={}
A.bQ.prototype={
a_(a,b,c,d,e){var s,r,q=null,p=t.k
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
A.bR.prototype={
a_(a,b,c,d,e){var s,r=t.k
r.a(b)
r.a(c)
if(d.b!=null)return d
if(0<b.length){s=b[0]
r=a.r
if(r!=null)r.c=s
return new A.ad(null,s)}return d}}
A.cR.prototype={
a_(a,b,c,d,e){var s,r,q=t.k
q.a(b)
q.a(c)
if(d.b!=null||c.length===0)return d
for(q=c.length,s=0;s<q;++s){r=c[s].r
if(r!=null&&r.c!=null){q=r.c
q.toString
return new A.ad(null,q)}}return d}}
A.bO.prototype={
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
j=B.e.dd(q,100)
s=B.e.O(q,100)
m=$.du()
l=a.q()
l.toString
k=m.aM(l,new A.j(j,s),r)
if(k==null)return d
j=k.b.d
s=a.q()
s.toString
return new A.ad(new A.aL(j.W(0,s),a),null)}}
A.h4.prototype={
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
return new A.ad(new A.aL(q.W(0,p),a),null)}}
A.ea.prototype={
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
return new A.ad(new A.aL(q,a),d)}c=a.q()
c.toString
s=a2.fx.a
p=s.br(r,c,-1)
if(p==null){o=c.b*100+c.a
s=s.a
if(!(o>=0&&o<4000))return A.b(s,o)
n=s[o]
m=a2.y.R(c)
for(c=m.c,l=m.a,k=c.length,j=d,i=1;i<100;++i)for(h=1;h<40;++h){o=h*100+i
if(!(o<4000))return A.b(s,o)
g=s[o]
f=h*l+i
if(!(f<k))return A.b(c,f)
if(c[f]===1&&g<n){j=new A.j(i,h)
n=g}}if(j!=null){c=$.du()
s=a.q()
s.toString
e.a=c.aM(s,j,r)}return new A.ad(new A.da(),d)}c=a.q()
c.toString
return new A.ad(new A.aL(p.W(0,c),a),d)}}
A.h5.prototype={
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
if(p.av(o)<=s)return d}if(b.length===0)return d
m=a.q()
m.toString
n=e.fx.a.br(r,m,-1)
if(n==null)return d
m=a.q()
m.toString
return new A.ad(new A.aL(n.W(0,m),a),null)}}
A.lF.prototype={
$1(a){t.lZ.a(a)
return a.c===B.at&&t.mm.a(a.b).a===this.a.Q.a},
$S:30}
A.bE.prototype={
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
s=$.du()
q=a.q()
q.toString
p=m.q()
p.toString
o=s.aM(q,p,r)
if(o==null)return d
s=a.c.x
n=s.gbA()
if(n!=null&&o.gbq()<=n.ch/5){q=s.b.h(0,B.r)
q.toString
if(q.e===0)if(A.rg(s,n))return new A.ad(new A.e9(a),m)
else{s=o.b.d
q=a.q()
q.toString
return new A.ad(new A.aL(s.W(0,q),a),m)}s=m.q()
s.toString
return new A.ad(new A.e8(s,a),m)}s=o.b.d
q=a.q()
q.toString
return new A.ad(new A.aL(s.W(0,q),a),m)}}
A.b3.prototype={
a_(a,b,c,d,e){var s,r,q,p,o=t.k
o.a(b)
o.a(c)
for(o=this.a,s=o.length,r=d,q=0;q<o.length;o.length===s||(0,A.C)(o),++q,r=p){p=o[q].a_(a,b,c,r,e)
if(p.a!=null)return p}return r},
$iao:1}
A.bo.prototype={}
A.m4.prototype={
$0(){return new A.a5(2,6,0,0,B.bl)},
$S:3}
A.m2.prototype={
$0(){return new A.b3(A.c([new A.bQ(),new A.bR(),new A.ea(),new A.bE(),new A.bO()],t.a))},
$S:4}
A.m3.prototype={
$0(){return A.c([],t.I)},
$S:2}
A.lZ.prototype={
$0(){return new A.a5(2,4,0,0,B.ax)},
$S:3}
A.lX.prototype={
$0(){return new A.b3(A.c([new A.bQ(),new A.bR(),new A.ea(),new A.bE(),new A.bO()],t.a))},
$S:4}
A.lY.prototype={
$0(){return A.c([],t.I)},
$S:2}
A.m7.prototype={
$0(){return new A.a5(10,7,0,0,B.ax)},
$S:3}
A.m5.prototype={
$0(){return new A.b3(A.c([new A.bQ(),new A.bR(),new A.cR(),new A.bE(),new A.bO()],t.a))},
$S:4}
A.m6.prototype={
$0(){return A.c([],t.I)},
$S:2}
A.ma.prototype={
$0(){return new A.a5(10,7,0,0,B.bl)},
$S:3}
A.m8.prototype={
$0(){return new A.b3(A.c([new A.bQ(),new A.bR(),new A.cR(),new A.h4(),new A.bE(),new A.bO()],t.a))},
$S:4}
A.m9.prototype={
$0(){var s=A.fw(B.V)
s.e=9
return A.c([s],t.I)},
$S:2}
A.lC.prototype={
$0(){return new A.a5(3,7,0,0,B.dX)},
$S:3}
A.lA.prototype={
$0(){return new A.b3(A.c([new A.bQ(),new A.bR(),new A.cR(),new A.h5(6),new A.bE(),new A.bO()],t.a))},
$S:4}
A.lB.prototype={
$0(){return A.c([A.fw(B.V)],t.I)},
$S:2}
A.j8.prototype={
fq(a,b,c,d,e,f){var s,r=this,q=Math.min(Math.max(B.c.aP(c*24-f/2),0),B.e.aP(2400-f)),p=Math.min(Math.max(B.c.aP(d*36-e/2),0),B.e.aP(1440-e)),o=r.c7(Math.abs(q-r.a)),n=r.c7(Math.abs(p-r.b))
if(b){r.a=q
r.b=p
return}s=r.a
if(q>s)r.a=s+o
else if(q<s)r.a=s-o
s=r.b
if(p>s)r.b=s+n
else if(p<s)r.b=s-n},
c7(a){if(a>30)return 6
if(a>20)return 4
return 1}}
A.a1.prototype={
h(a,b){return this.b.h(0,A.B(this).i("a1.T").a(b))}}
A.d1.prototype={}
A.d0.prototype={}
A.fs.prototype={
bu(a){return this.eU(t.h8.a(a))},
eU(a){var s=0,r=A.by(t.H),q,p=this,o
var $async$bu=A.bz(function(b,c){if(b===1)return A.bt(c,r)
while(true)switch(s){case 0:if(p.a.r.c){s=1
break}o=p.e
if(o.length>3){s=1
break}B.a.k(o,a)
if(p.r){s=1
break}p.aC()
case 1:return A.bu(q,r)}})
return A.bv($async$bu,r)},
aC(){var s=0,r=A.by(t.z),q=1,p,o=[],n=this,m
var $async$aC=A.bz(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.r=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.a7(n.aB(),$async$aC)
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
case 4:return A.bu(null,r)
case 1:return A.bt(p,r)}})
return A.bv($async$aC,r)},
cl(){var s=new A.J($.E,t.cU),r=new A.dk(s,t.iF)
B.a.k(this.a.f,t.x.a(t.gz.a(r.geJ(r))))
return s},
N(){var s=0,r=A.by(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$N=A.bz(function(a4,a5){if(a4===1)return A.bt(a5,r)
while(true)$async$outer:switch(s){case 0:a0=p.a
a1=a0.c
a2=a1.e
a3=a1.d
if(!(a3<a2.length)){q=A.b(a2,a3)
s=1
break}a3=a2[a3].a
o=A.c(a3.slice(0),A.a0(a3))
a2=p.b,a3=B.a.gew(a2),n=t.nt,m=a1.a.c,a1=p.f,l=a1.a,a1=a1.b,k=p.c,j=p.d,i=p.e,h=0,g=!1
case 4:if(!!0){s=5
break}case 6:if(!(f=a2.length,f!==0)){s=7
break}if(0>=f){q=A.b(a2,0)
s=1
break}s=8
return A.a7(a2[0].I(0,a0),$async$N)
case 8:e=a5
B.a.G(k,e.r)
case 9:if(!(f=e.a,f!=null)){s=10
break}B.a.j(a2,0,f)
s=11
return A.a7(f.I(0,a0),$async$N)
case 11:e=a5
B.a.G(k,e.r)
s=9
break
case 10:f=e.c
if(f!=null)A.iQ(f)
d=e.x
s=d!=null?12:13
break
case 12:s=!e.f&&i.length===0?14:16
break
case 14:s=j.length!==0?17:18
break
case 17:s=19
return A.a7(p.c8(),$async$N)
case 19:case 18:s=20
return A.a7(p.ar(d),$async$N)
case 20:s=15
break
case 16:B.a.k(j,d)
case 15:case 13:case 21:if(!(f=k.length,f!==0)){s=22
break}if(0>=f){q=A.b(k,-1)
s=1
break}s=23
return A.a7(k.pop().I(0,a0),$async$N)
case 23:c=a5
B.a.G(k,c.r)
case 24:if(!(f=c.a,f!=null)){s=25
break}s=26
return A.a7(f.I(0,a0),$async$N)
case 26:c=a5
B.a.G(k,c.r)
s=24
break
case 25:f=c.c
if(f!=null)A.iQ(f)
s=21
break
case 22:if(e.d)g=B.dA.de(g,!0)
B.a.cZ(a2,0)
l.saT(0,m.b/m.a)
a1.saT(0,m.d/1000)
s=6
break
case 7:if(!g){s=3
break}for(;f=o.length,h<f;){if(!(h>=0)){q=A.b(o,h)
s=1
break $async$outer}b=o[h];++h
if(b.q()==null)continue
if(A.ru(n.a(a3),b,a0)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=j.length!==0?27:29
break
case 27:s=i.length===0?30:32
break
case 30:s=33
return A.a7(p.c8(),$async$N)
case 33:s=31
break
case 32:s=34
return A.a7(p.aG(),$async$N)
case 34:case 31:s=28
break
case 29:s=35
return A.a7(p.cl(),$async$N)
case 35:case 28:if(!g){s=1
break}for(a0=o.length,a=0;a<a0;++a)o[a].a=100
case 1:return A.bu(q,r)}})
return A.bv($async$N,r)},
aG(){var s=0,r=A.by(t.H),q=this,p,o,n
var $async$aG=A.bz(function(a,b){if(a===1)return A.bt(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.C)(p),++n)p[n].x.$0()
B.a.sm(p,0)
s=2
return A.a7(q.cl(),$async$aG)
case 2:return A.bu(null,r)}})
return A.bv($async$aG,r)},
ar(a){var s=0,r=A.by(t.H),q=this,p
var $async$ar=A.bz(function(b,c){if(b===1)return A.bt(c,r)
while(true)switch(s){case 0:p=new A.J($.E,t.cU)
if(a!=null)B.a.k(q.d,a)
B.a.k(q.a.f,t.x.a(new A.jA(q,new A.aQ(p,t.ou))))
s=2
return A.a7(p,$async$ar)
case 2:return A.bu(null,r)}})
return A.bv($async$ar,r)},
c8(){return this.ar(null)},
aB(){var s=0,r=A.by(t.H),q,p=this,o,n,m,l,k,j
var $async$aB=A.bz(function(a,b){if(a===1)return A.bt(b,r)
while(true)switch(s){case 0:j=p.e
if(j.length===0){s=1
break}o=B.a.cZ(j,0)
switch(o){case B.a1:case B.a2:case B.a3:case B.a4:switch(o){case B.a1:n=new A.j(0,-1)
break
case B.a2:n=new A.j(1,0)
break
case B.a3:n=new A.j(0,1)
break
case B.a4:n=new A.j(-1,0)
break
default:A.T(A.ab(""))
n=null}m=new A.aL(n,p.a.c.a)
break
case B.dw:m=new A.da()
break
case B.b3:j=p.a
l=j.r.b?j.gaW().c:null
if(l==null){m=null
break}m=new A.e8(l,j.c.a)
break
case B.b6:m=p.dY()
break
case B.b2:m=new A.e9(p.a.c.a)
break
case B.b1:j=p.z
j=j==null?null:j.b
k=j==null
if(k)j=new A.fi(new Uint8Array(4000),A.aa(t.j,t.S))
m=p.z=new A.f6(p.a.c.a,j,k)
break
case B.b4:j=p.a.r
k=!j.b
j.b=k
if(k){j=document.body.style
B.q.at(j,B.q.ap(j,"cursor"),"crosshair",null)}else document.body.style.removeProperty("cursor")
m=null
break
case B.b5:j=p.a.r
if(j.b){j.b=!1
document.body.style.removeProperty("cursor")}m=null
break
default:m=null
break}s=m!=null?3:4
break
case 3:B.a.k(p.b,m)
s=5
return A.a7(p.N(),$async$aB)
case 5:case 4:case 1:return A.bu(q,r)}})
return A.bv($async$aB,r)},
dY(){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Y)
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
B.a.G(i,A.o5(k,r[n]))}}s=i.length
if(s===0)return null
if(s===1){if(0>=s)return A.b(i,0)
j=i[0]}else j=null
if(j==null)return null
return j.b},
e5(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.L.a(a)
for(s=h.d,r=s.length,q=a.a,p=h.e,o=0;o<s.length;s.length===r||(0,A.C)(s),++o){n=s[o]
if(p.length>=2)n.d=1
m=n.e
l=m==null?0:B.e.O(q-m.a,1000)
n.e=a
k=l/B.e.O(n.a.a,1000)
j=n.f
i=n.d
i=n.d=B.c.eG(j?n.d=i+k:n.d=i-k,-1,1)
i>=1||i<0
n.r.$1(n)}B.a.k(h.a.f,t.x.a(h.gci()))}}
A.jA.prototype={
$1(a){var s,r,q,p,o,n,m
t.L.a(a)
s=A.c([],t.fy)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.C)(q),++n){m=q[n]
if(m.d>=1||o.length!==0){m.x.$0()
B.a.k(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.C)(s),++n)B.a.J(q,s[n])
if(q.length===0)this.b.aI(0)
else B.a.k(r.a.f,t.x.a(this))},
$S:16}
A.ee.prototype={
l(a){return"SlotType."+this.b}}
A.b7.prototype={
l(a){return"ItemType."+this.b}}
A.f1.prototype={}
A.aI.prototype={
gbR(){switch(this.c){case B.ap:return B.az
case B.aq:return B.aA
case B.ar:return B.aB
case B.as:case B.dz:case B.b7:case B.at:return null}}}
A.jd.prototype={}
A.W.prototype={}
A.ft.prototype={
l(a){return"HandRequirement."+this.b}}
A.b5.prototype={
l(a){return"DamageType."+this.b}}
A.bJ.prototype={
l(a){return"DiceType."+this.b}}
A.aP.prototype={
l(a){return"WeaponProperties."+this.b}}
A.k_.prototype={}
A.bI.prototype={}
A.c9.prototype={
l(a){return"CriticalEffect."+this.b}}
A.Y.prototype={}
A.dx.prototype={
l(a){return"AmmoType."+this.b}}
A.dy.prototype={}
A.at.prototype={}
A.cL.prototype={
l(a){return"ArmorUpgradeType."+this.b}}
A.an.prototype={}
A.eZ.prototype={
ac(a){var s,r=a-10
if(r===0)return 0
else{s=r/2
if(r>0)return B.c.ad(s)
else return B.c.cB(s)}}}
A.c7.prototype={
cU(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x.gf6()
r=a.x.gbm()
q=A.dH(a0,1,B.am)
p=b.y
o=p.a
n=q+p.ac(o)
m=a.y
l=10+Math.min(m.ac(m.b),r.e)
m=s.b
l=A.O(A.n2(m))?l+r.d:l+r.c
if(!a1)l-=2
k=t.Q
j=A.c([],k)
i=A.c([],k)
if(q===1){h=!1
g=!1}else{g=n>=l
if(q===20)h=!0
else{h=g
g=!1}}f="["+n+" vs "+A.y(l)+"]"
if(!h)return new A.cM(b.cx.a+" missed "+a.cx.a+" "+f,!1,0,B.ab,B.ab)
if(B.a.v(s.z,B.bC))B.a.k(j,new A.fe())
k=s.d
e=s.e
d=A.dH(a0,k,e)+p.ac(o)
if(g)d+=A.dH(a0,k,e)+p.ac(o)
B.a.v(b.ch,B.bo)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+s.y
return new A.cM(c,!0,d,j,i)},
cY(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x
r=s.gbA()
if(r==null)r=B.V
q=s.gbm()
s=b.y
p=Math.min(s.ac(s.b),q.e)
o=a.x.gbm()
n=A.dH(a0,1,B.am)
m=n+p
l=a.y
k=10+Math.min(l.ac(l.b),o.e)
l=r.c
k=A.O(A.n2(l))?k+o.d:k+o.c
if(!a1)k-=2
j=t.Q
i=A.c([],j)
h=A.c([],j)
if(n===1){g=!1
f=!1}else{f=m>=k
if(n===20)g=!0
else{g=f
f=!1}}e="["+m+" vs "+A.y(k)+"]"
if(!g)return new A.cM(b.cx.a+" missed "+a.cx.a+" "+e,!1,0,B.ab,B.ab)
j=r.f
d=A.dH(a0,1,j)
if(f)d+=A.dH(a0,1,j)+s.ac(s.a)
B.a.v(b.ch,B.bo)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+r.a
return new A.cM(c,!0,d,i,h)}}
A.cM.prototype={}
A.cW.prototype={}
A.cV.prototype={
gbm(){var s,r,q
for(s=this.b,s=s.gal(s),s=s.gw(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.W)return q}return B.bT},
gf6(){var s,r,q
for(s=this.b,s=s.gal(s),s=s.gw(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.Y)return q}return B.e0},
gbA(){var s,r,q
for(s=this.b,s=s.gal(s),s=s.gw(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.at)return q}return null},
eQ(a,b){var s=this.b
s.h(0,b)
s.j(0,b,a)}}
A.fX.prototype={
l(a){return"Perk."+this.b}}
A.cb.prototype={
l(a){return"EquipmentSlot."+this.b}}
A.fe.prototype={}
A.dc.prototype={
l(a){return"TileType."+this.b}}
A.cQ.prototype={
l(a){return"CollisionMode."+this.b}}
A.fF.prototype={}
A.cu.prototype={
l(a){return"TerrainType."+this.b}}
A.ai.prototype={
l(a){return"TerrainWidget."+this.b}}
A.ck.prototype={
l(a){return"LockState."+this.b}}
A.b1.prototype={
l(a){return"Biome."+this.b}}
A.bS.prototype={
gX(a){return this.b.a},
gY(a){return this.b.b},
sff(a){t.dt.a(a)},
$idQ:1,
gbw(){return this.z}}
A.fC.prototype={}
A.fD.prototype={$idQ:1,
gbw(){return this.a},
gX(a){return this.b},
gY(a){return this.c}}
A.j.prototype={
H(a,b){if(b==null)return!1
return b instanceof A.j&&b.a===this.a&&b.b===this.b},
gu(a){return A.ke(this.a,this.b,B.D,B.D)},
A(a,b){return new A.j(this.a+b.a,this.b+b.b)},
W(a,b){return new A.j(this.a-b.a,this.b-b.b)},
bF(){return new A.aN(this.a,this.b)},
av(a){var s=Math.abs(this.a-a.a),r=Math.abs(this.b-a.b)
return s+r+-0.6000000000000001*Math.min(s,r)},
l(a){return"("+this.a+", "+this.b+")"}}
A.jU.prototype={
l(a){return"LiquidKind."+this.b}}
A.a_.prototype={
l(a){return"Interactable."+this.b}}
A.jW.prototype={}
A.k0.prototype={
f3(){var s,r
for(s=this.a,r=0;r<4000;++r)s[r]=s[r]-1}}
A.d2.prototype={
l(a){return"MonsterKind."+this.b}}
A.jk.prototype={
eq(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.a,i=j.a6(k,t.C),h=this.c
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.c.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.b||A.O(A.bj(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.d=r
j.ab(b,k,i)}}
A.jo.prototype={
ah(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=t.t,p=t.n,o=t.g2,n=t.N,m=t.z,l=0;l<s.length;s.length===r||(0,A.C)(s),++l){k=s[l]
$.mN().a4(a,4,3,A.bm(["u_resolution",A.c([b.a,b.b],q),"u_time",k.gb6().geX().fu(0,k.geP(k).geX()),"u_offset",A.c([b.d,b.e],p),"u_origin",A.c([k.gX(k),k.gY(k)],o)],n,m))
k.sb6(k.gb6().A(0,A.jn(11)))}r=A.a0(s).i("A(1)").a(new A.jp())
if(!!s.fixed$length)A.T(A.D("removeWhere"))
B.a.e7(s,r,!0)}}
A.jp.prototype={
$1(a){t.ox.a(a)
return a.gb6().d5(0,a.geP(a))},
$S:36}
A.fl.prototype={}
A.jt.prototype={
dt(a,b,c,d,e,f){var s,r,q,p,o,n,m=this
m.ga1().a.K(m.a)
s=m.ch
s.a.K(m.a)
r=m.cx
r.a.K(m.a)
m.gbt().b.K(m.a)
q=m.gae()
p=m.a
q.d=p.createFramebuffer()
q.a.K(p)
q.b.K(p)
m.gcD().b.K(m.a)
m.gaW().b.K(m.a)
p=m.a
$.mN().K(p)
$.oH().K(p)
p=m.c
q=p.e
o=p.d
if(!(o<q.length))return A.b(q,o)
o=A.iP(q[o])
n=p.d
if(!(n<q.length))return A.b(q,n)
m.cJ(o,q[n])
n=p.d
if(!(n<q.length))return A.b(q,n)
m.cr(p.a,A.iP(q[n]))
n=p.d
if(!(n<q.length))return A.b(q,n)
n=s.b=q[n]
s.c=!0
r.c=n
r.b=!0
r=m.y
r.cQ(n.c)
r.cK()
p=p.d
if(!(p<q.length))return A.b(q,p)
r.e=A.iP(q[p])
p=m.dx.b
new A.bV(p,A.B(p).i("bV<1>")).cS(new A.ju(m,m.d.getBoundingClientRect()))},
ga1(){var s,r=this,q=r.Q
if(q===$){s=A.pO(r.a,r.y)
A.dn(r.Q,"sprites")
r.Q=s
q=s}return q},
gbt(){var s,r=this,q=r.cy
if(q===$){s=A.qq()
s=A.aU(A.c([new A.X("a_position",35044,5126,2,s),new A.X("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.l,A.c([new A.w("u_resolution",B.d),new A.w("u_offset",B.d)],t.o),u.q)
A.dn(r.cy,"fovRenderer")
q=r.cy=new A.jv(r.y,s,new A.j(-1,-1))}return q},
gae(){var s,r,q,p=this,o=u.p,n="a_position",m="u_resolution",l="u_block_size",k="u_player_visible_texture",j="u_offset",i=p.db
if(i===$){s=t.G
r=t.o
q=A.aU(A.c([new A.X(n,35044,5126,2,new Float32Array(A.dl(B.C)))],s),u.j,A.c([new A.w(m,B.d),new A.w("u_source_position",B.d),new A.w(l,B.d),new A.w("u_source_color",B.aG),new A.w("u_source_strength",B.t),new A.w("u_time",B.t),new A.w("u_visible_texture",B.o),new A.w(k,B.o),new A.w(j,B.d)],r),o)
r=A.aU(A.c([new A.X(n,35044,5126,2,new Float32Array(A.dl(B.C)))],s),u.B,A.c([new A.w("u_light_texture",B.o),new A.w("u_game_world_texture",B.o),new A.w(k,B.o),new A.w(m,B.d),new A.w(l,B.d),new A.w(j,B.d)],r),o)
s=A.c([],t.ow)
A.dn(p.db,"lightingRenderer")
i=p.db=new A.fE(q,r,p.y,s)}return i},
gcD(){var s,r=this,q=r.dy
if(q===$){s=A.aU(A.c([new A.X("a_position",35044,5126,2,new Float32Array(A.dl(B.C)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise(vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f*f*f+.6*f*f+.5*f)*color, 0.3);\n}\n",A.c([new A.w("u_resolution",B.d),new A.w("u_time",B.t),new A.w("u_offset",B.d),new A.w("u_player_vis_texture",B.o),new A.w("u_block_size",B.d)],t.o),u.h)
A.dn(r.dy,"filters")
q=r.dy=new A.jx(r.y,s)}return q},
gaW(){var s,r=this,q=r.fr
if(q===$){s=A.aU(A.c([new A.X("a_position",35048,5126,2,new Float32Array(12))],t.G),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nuniform float u_time;\nuniform float u_visible;\n\nvoid main() {\n  if (u_visible == 0.0) {\n    discard;\n    return;\n  }\n  float scale = (sin(u_time * 3.0) + 1.0) / 4.0;\n  outColor = vec4(0.509, 0.69411, 1.0, scale + 0.3);\n}\n",A.c([new A.w("u_offset",B.d),new A.w("u_resolution",B.d),new A.w("u_time",B.t),new A.w("u_visible",B.t)],t.o),"#version 300 es\nin vec2 a_position;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n")
A.dn(r.fr,"selectionRenderer")
q=r.fr=new A.kr(r.y,s,B.A)}return q},
gbE(){var s,r=this,q=r.fy
if(q===$){s=A.c([],t.ff)
A.dn(r.fy,"textRenderer")
q=r.fy=new A.kG(r.b,s)}return q},
ah(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=3553
t.cH.a(a1)
s=c.r
if(s.c)return
c.a=a1
r=c.d
q=r.clientWidth
p=r.clientHeight
if(q!==c.k2||p!==c.k3){B.E.sa5(r,q)
B.E.sa3(r,p)
o=c.e
B.E.sa5(o,q)
B.E.sa3(o,p)
n=r.getBoundingClientRect()
r=o.style
m=n.left
m.toString
m=A.y(m)+"px"
B.q.at(r,B.q.ap(r,"left"),m,b)
m=o.style
r=n.top
r.toString
r=A.y(r)+"px"
B.q.at(m,B.q.ap(m,"top"),r,b)
r=o.style
m=n.width
m.toString
m=A.y(m)+"px"
B.q.at(r,B.q.ap(r,"width"),m,b)
o=o.style
m=n.height
m.toString
m=A.y(m)+"px"
B.q.at(o,B.q.ap(o,"height"),m,b)
c.k2=q
c.k3=p
r=c.id
if(r!=null)B.f.eN(a1,r)
r=a1.createTexture()
c.id=r
B.f.S(a1,a,r)
B.f.aQ(a1,a,0,6408,c.k2,c.k3,0,6408,5121,b)
a1.texParameteri(a,10241,9729)
a1.texParameteri(a,10242,33071)
a1.texParameteri(a,10243,33071)}r=c.z
o=c.y.e
r.fq(0,c.r1,o.a,o.b,p,q)
o=c.r2
o.a=q
o.b=p
o.d=r.a
o.e=r.b
o.c=a0
r=c.b
m=r.canvas
l=m.width
l.toString
m=m.height
m.toString
r.clearRect(0,0,l,m)
a1.viewport(0,0,q,p)
a1.clearColor(0,0,0,1)
a1.clear(16640)
a1.enable(3042)
a1.blendFuncSeparate(770,771,1,771)
B.f.aH(a1,36160,c.k1)
B.f.cH(a1,36160,36064,a,c.id,0)
a1.clearColor(0,0,0,1)
a1.clear(16640)
m=c.ch
if(m.c){m.es(a1)
m.c=!1}r=t.t
l=t.n
k=t.N
j=t.z
m.a.a4(a1,4,48e3,A.bm(["u_resolution",A.c([o.a,o.b],r),"u_offset",A.c([o.d,o.e],l)],k,j))
m=c.cx
if(m.b){m.eq(0,a1)
m.b=!1}m.a.a4(a1,0,B.e.O(m.d,2),A.bm(["u_resolution",A.c([o.a,o.b],r),"u_offset",A.c([o.d,o.e],l)],k,j))
c.ga1().ah(a1,o)
m=c.gcD()
i=m.a
h=i.ay(i.e,a1)
a1.activeTexture(33984)
B.f.S(a1,a,h)
m.b.a4(a1,4,3,A.bm(["u_time",o.c/1000,"u_resolution",A.c([o.a,o.b],r),"u_offset",A.c([o.d,o.e],l),"u_player_vis_texture",0,"u_block_size",A.c([24,36],r)],k,j))
B.f.aH(a1,36160,b)
c.gae().r=s.a
c.gae().f=c.id
c.gae().ah(a1,o)
m=c.gbt()
if(!m.a.e.H(0,m.c)||m.d)m.ev(a1)
m.b.a4(a1,4,48e3,A.bm(["u_resolution",A.c([o.a,o.b],r),"u_offset",A.c([o.d,o.e],l)],k,j))
c.go.ah(a1,o)
if(s.b){s=c.gaW()
s.e3(a1,o)
r=A.c([o.a,o.b],r)
l=A.c([o.d,o.e],l)
m=o.c
i=s.a
i=i.R(i.e)
g=s.c
i=i.a0(0,g.a,g.b)?1:0
s.b.a4(a1,4,6,A.bm(["u_resolution",r,"u_offset",l,"u_time",m/1000,"u_visible",i],k,j))}c.gbE().f9(o)
a1.finish()
f=A.jn(B.c.B(a0))
s=c.f
e=A.c(s.slice(0),A.a0(s))
B.a.sm(s,0)
for(s=e.length,d=0;d<e.length;e.length===s||(0,A.C)(e),++d)e[d].$1(f)
s=c.c.a.b
B.c.B(s.d/24)
B.c.B(s.e/36)
c.r1=!1},
bC(a){var s,r=this.c,q=r.e
r=r.d
if(!(r<q.length))return A.b(q,r)
B.a.J(q[r].a,a)
s=a.b
s.saf(-1)
s.sag(-1)
this.ga1().J(0,s)},
bS(a,b){var s=a.b,r=B.c.B(s.d/24),q=B.c.B(s.e/36),p=b.b,o=B.c.B(p.d/24),n=B.c.B(p.e/36)
s.saf(o)
s.sag(n)
p.saf(r)
p.sag(q)
if(a.x){s=this.y
s.e=new A.j(o,n)
s.bH()}if(b.x){s=this.y
s.e=new A.j(r,q)
s.bH()}},
cV(a,b){var s=a.b
s.saf(b.a)
s.sag(b.b)
if(a.x){s=this.y
s.e=b
s.bH()}},
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
p.sak(0,B.aW)
s=this.ga1()
p.sbv(0,1)
s.k(0,p)},
cr(a,b){return this.cs(a,b,null)},
cJ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
B.a.sm(g.gae().x,0)
g.ga1().eH(0)
s=g.ch
s.b=b
s.c=!0
s=g.cx
s.c=b
s.b=!0
s=g.y
r=b.c
s.cQ(r)
s.cK()
B.ay.aL(s.c,0,4000,0)
s.e=a
switch(b.d.a){case B.B:q=B.cP
break
case B.u:q=B.cF
break
default:q=B.d1
break}for(r=r.c,p=r.length,o=0;o<r.length;r.length===p||(0,A.C)(r),++o){n=r[o]
m=n.b
l=A.n6(n.f,m.a*24,m.b*36)
if(l!=null){k=l.a=g.ga1()
j=k.c
j.$ti.c.a(l);++j.d
j.b_(0,l)
k.e=!0
n.y=l}k=n.f
if(k===B.U||k===B.Q){n.z=new A.fC(q,7)
i=g.db
if(i===$){h=A.pt(s)
A.dn(i,"lightingRenderer")
g.db=h
i=h}B.a.k(i.x,n)}}for(s=b.a,r=s.length,o=0;o<s.length;s.length===r||(0,A.C)(s),++o){l=s[o].b
l.f=B.aW
p=l.a
if(p!=null)p.e=!0
p=g.ga1()
l.x=1
k=l.a
if(k!=null)k.e=!0
l.a=p
k=p.c
k.$ti.c.a(l);++k.d
k.b_(0,l)
p.e=!0}}}
A.ju.prototype={
$1(a){var s,r,q
t.bd.a(a)
s=this.a.r2
r=J.aw(a)
s.sf0(r.h(a,0))
r=r.h(a,1)
q=this.b
q.left.toString
q=q.top
q.toString
if(typeof r!=="number")return r.W()
s.r=r-q},
$S:37}
A.a2.prototype={}
A.bF.prototype={}
A.M.prototype={}
A.fQ.prototype={
I(a,b){var s,r,q=b.c,p=q.e,o=q.d+1
if(!(o<p.length))return A.b(p,o)
s=p[o]
r=A.iP(s)
b.cJ(r,s)
b.cs(q.a,r,s);++q.d
b.r1=!0
return new A.M(null,null,!0,!0,!1,B.h,null)}}
A.e9.prototype={
I(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.c.x,g=h.gbA(),f=h.b.h(0,B.r)
if(g==null||f.e===g.Q.b)return new A.M(j,j,!1,!0,!1,B.h,j)
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
break}}++n}if(r==null)return new A.M(j,j,!1,!0,!1,B.h,j)
i=i.q()
i.toString
b.x.aw("reload_1.mp3",i)
i=r.b
k=Math.min(i,g.Q.b)
i-=k
r.b=i
if(i===0)B.a.J(q,s)
i=f.e
i.toString
f.e=k+i
return new A.M(j,j,!0,!0,!1,B.h,j)}}
A.aL.prototype={
I(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f={},e=b.c,d=e.e,c=e.d
if(!(c<d.length))return A.b(d,c)
s=d[c]
c=h.b
r=c.q()
q=r.A(0,h.a)
p=s.c
if(!p.cI(q))return new A.M(g,g,!1,!0,!1,B.h,g)
o=p.h(0,q)
n=s.ai(q)
if((o.c===B.b||A.O(A.bj(o.f)))&&n==null){if(o.f==null)return new A.M(g,g,!1,!0,!1,B.h,g)
f=e.d
if(!(f<d.length))return A.b(d,f)
m=A.o5(o,d[f])
if(m.length!==0)return new A.M(B.a.ga9(m).b,g,!1,!0,!1,B.h,g)
return new A.M(g,g,!1,!0,!1,B.h,g)}l=A.c([],t.w)
f.a=!1
if(n!=null){if(A.o6(n,c))return new A.M(new A.dD(!1,c,n),g,!1,!0,!1,B.h,g)
e=f.a=!0}else e=!1
d=b.y
d=d.R(d.e)
d.toString
k=!c.x
if(k)j=d.h(0,r)||d.h(0,q)
else j=!1
p.h(0,r)
if(o.r!=null)b.x.bz("water_footsteps_"+(B.v.E(5)+1)+".mp3",q,0.15)
if(j)i=new A.bF(A.jn(60),new A.k6(h,r,q),new A.k7(f,h,b,n,q))
else{if(e){n.toString
b.bS(n,c)}else b.cV(c,q)
i=g}c.a=0
return new A.M(g,g,!0,!0,k,l,i)}}
A.k6.prototype={
$1(a){var s=a.d,r=1-s,q=this.b,p=this.c,o=this.a.b.b
o.sX(0,q.a*24*r+p.a*24*s)
o.sY(0,q.b*36*r+p.b*36*s)},
$S:11}
A.k7.prototype={
$0(){var s,r=this,q=r.c,p=r.b.b
if(r.a.a){s=r.d
s.toString
q.bS(s,p)}else q.cV(p,r.e)},
$S:0}
A.da.prototype={
I(a,b){return new A.M(null,null,!0,!0,!1,B.h,null)}}
A.fB.prototype={
I(a,b){var s=this.a.c
s.d-=1000;++s.c;++s.e;++s.f;++s.r
A.eW("LEVEL UP")
return new A.M(null,null,!0,!0,!1,B.h,null)}}
A.ei.prototype={
I(a,b){var s,r,q,p,o,n=b.c,m=n.e,l=n.d
if(!(l<m.length))return A.b(m,l)
s=this.b
r=m[l].c.h(0,s)
q=r.y
r.f=this.a?B.w:B.S
l=b.ga1()
q.toString
l.J(0,q)
l=r.f
l.toString
p=r.b
o=A.n6(l,24*p.a,36*p.b)
if(o!=null)b.ga1().k(0,o)
r.y=o
n=n.d
if(!(n<m.length))return A.b(m,n)
b.y.cR(m[n].c,s)
b.gbt().d=!0
b.x.bz("door_1.mp3",s,0.8)
return new A.M(null,null,!0,!0,!1,B.h,null)}}
A.dD.prototype={
I(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d={},c=e.b
c.a=0
d.a=null
s=e.c
r=A.rn(s,c,b)
q=e.a
p=c.c
o=s.c
if(q){p.toString
o.toString
n=d.a=p.cY(o,B.v,r)}else{p.toString
o.toString
n=d.a=p.cU(o,B.v,r)}B.a.G(p.Q,n.d)
B.a.G(o.Q,n.e)
m=A.c([],t.w)
p=s.q()
p.toString
l=c.q()
l.toString
if(!q){q=c.b
k=q.x
j=s.b.f
q.sbv(0,4)
i=l.bF()
h=p.bF()
g=l.bF().A(0,new A.aN((h.a-i.a)/1.5,(h.b-i.b)/1.5))
d.b=!0
f=new A.bF(B.dr,new A.j_(d,e,b,p,l,i,g),new A.j0(d,e,b,p,l,k,j))}else{q=c.x?"white":"red"
e.b0(n.c,p,l,b,q)
f=null}q=s.r
if(q!=null)q.c=c
if(!n.b)return new A.M(null,n.a,!0,!0,!1,B.h,f)
c=o.b-n.c
o.b=c
if(c<=0)B.a.k(m,new A.dJ(s))
return new A.M(null,d.a.a,!0,!0,!1,m,f)},
ca(a){if(this.a){if(a)return"bullet_impact_2.mp3"
return"bullet_miss_1.mp3"}if(a)return"heavy_punch_1.mp3"
return"miss_1.mp3"},
b0(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j={}
if(a===0)return
this.c.c.toString
s=c.a*24
r=c.b*36
q=new A.h3(B.e.l(a),s,r,e,1.25)
p=b.a*24
o=b.b*36
n=A.pa(new A.aN(p-s,o-r))
m=n.a*24
n=n.b*36
l=new A.aN(m,n).A(0,new A.aN(s,r))
k=new A.aN(m*2,n*2).A(0,new A.aN(p,o))
B.a.k(d.gbE().b,q)
j.a=B.dq
A.pQ(B.ds,new A.iZ(j,d,q,k,l))},
l(a){return"TargetMeleeAttackEvent{"+this.b.l(0)+" -> "+this.c.l(0)+"}"}}
A.j_.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a
if(l.b&&a.d>=0.4){s=m.c
r=m.b
q=m.d
s.x.aw(r.ca(l.a.b),q)
p=l.a
o=r.b.x?"white":"red"
r.b0(p.c,q,m.e,s,o)
l.b=!1
s=r.c.b
if(l.a.b)s.sak(0,B.ax)
else s.sak(0,B.ce)}l=a.d
if(l<=0.4){s=m.f
r=m.r
n=l/0.6
l=m.b.b.b
l.sX(0,A.m0(r.a,s.a,n)*24)
l.sY(0,A.m0(r.b,s.b,n)*36)}else{s=m.b.b
if(l>=0.6){l=s.b
s=m.e
l.saf(s.a)
l.sag(s.b)}else{l=s.b
s=m.r
l.sX(0,s.a*24)
l.sY(0,s.b*36)}}},
$S:11}
A.j0.prototype={
$0(){var s,r,q,p,o,n=this,m=n.a
if(m.b){s=n.c
r=n.b
q=n.d
s.x.aw(r.ca(m.a.b),q)
p=m.a
o=r.b.x?"white":"red"
r.b0(p.c,q,n.e,s,o)
m.b=!1}m=n.b
s=m.b.b
s.sbv(0,n.f)
r=n.e
s.saf(r.a)
s.sag(r.b)
m.c.b.sak(0,n.r)},
$S:0}
A.iZ.prototype={
$1(a){var s,r,q,p,o,n=this
t.iK.a(a)
s=n.a
r=s.a.a+8000
s.a=new A.a9(r)
if(r>5e5){a.eE(0)
B.a.J(n.b.gbE().b,n.c)}q=B.e.O(s.a.a,1000)/300
s=n.c
r=n.d
p=1-q
o=n.e
s.b=q*r.a+p*o.a
s.c=q*r.b+p*o.b},
$S:39}
A.dJ.prototype={
l(a){return"DeathEvent{"+this.a.l(0)+"}"},
I(a,b){var s,r=null,q=b.c,p=q.e,o=q.d
if(!(o<p.length))return A.b(p,o)
p=this.a
if(p.e){b.bC(p)
return new A.M(r,r,!0,!0,!1,B.h,r)}if(p.x)return new A.M(r,"You Died!",!0,!0,!1,B.h,r)
q=q.a
o=q.c
o.d+=100
s=A.c([],t.w)
if(o.d>=1000)B.a.k(s,new A.fB(q))
p.q()
p.c.toString
b.bC(p)
return new A.M(r,p.l(0)+" has died.",!1,!0,!1,s,r)}}
A.f6.prototype={
I(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=b.c,e=f.e
f=f.d
if(!(f<e.length))return A.b(e,f)
s=e[f]
for(f=b.y.c,e=this.c,r=!e,q=this.b,p=q.b,o=s.c,n=0;n<100;++n)for(m=0;m<40;++m){l=100*m+n
k=new A.j(n,m)
if(!(l<4000))return A.b(f,l)
j=f[l]
if(j===0&&e)if(o.h(0,k).f===B.w)p.j(0,k,100)
else{i=o.h(0,k)
if(!(i.c===B.b||A.O(A.bj(i.f))))p.j(0,k,80)}else if(j===1&&r)p.J(0,k)}q.f7(s,B.Y)
f=this.a
e=f.q()
e.toString
k=q.cE(s,e,1,B.Y)
if(k==null)return new A.M(g,"No more areas to explore",!1,!0,!1,B.h,g)
e=$.du()
r=f.q()
r.toString
r=e.bs(r,k,s,B.Y)
h=r==null?g:r.b
if(h==null)return new A.M(g,"No path to that location",!1,!0,!1,B.h,g)
e=h.d
r=f.q()
r.toString
return new A.M(new A.aL(e.W(0,r),f),g,!0,!0,!1,B.h,g)}}
A.hu.prototype={
I(a,b){var s,r,q,p,o,n,m=null,l=b.c,k=l.e,j=l.d
if(!(j<k.length))return A.b(k,j)
s=k[j]
r=A.c([],t.q)
for(j=s.c.c,q=j.length,p=!1,o=0;o<j.length;j.length===q||(0,A.C)(j),++o){n=j[o]
if(n.f===B.T){n.f=B.w
B.a.k(r,n.b)
p=!0}}if(p){for(j=r.length,q=b.x,o=0;o<r.length;r.length===j||(0,A.C)(r),++o)q.aw("door_unlock_1.mp3",r[o])
j=l.d
if(!(j<k.length))return A.b(k,j)
q=this.a
k[j].c.h(0,q).f=B.a7
l=l.d
if(!(l<k.length))return A.b(k,l)
k[l].ai(q)
return new A.M(m,"A door has been unlocked",!0,!0,!1,B.h,m)}return new A.M(m,m,!1,!0,!1,B.h,m)}}
A.e8.prototype={
I(a,b){var s,r=null,q=this.b,p=q.c.x.b.h(0,B.r)
if(p==null||p.e===0)return new A.M(r,r,!1,!0,!1,B.h,r)
s=p.e
s.toString
p.e=s-1
return new A.M(new A.h1(4,this.a,q),r,!0,!0,!1,B.h,r)}}
A.h1.prototype={
I(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=b.c,e=f.e
f=f.d
if(!(f<e.length))return A.b(e,f)
s=e[f]
f=this.c
e=f.q()
e.toString
r=this.b
q=$.du().aM(e,r,s)
if(q==null)return new A.M(g,g,!0,!0,!1,B.h,g)
p=s.ai(r)
o=A.c([],t.w)
if(p!=null)o.push(new A.dD(!0,f,p))
n=q.aS(0)
m=b.x.aw("pistol_1.mp3",e)
f=f.b
l=B.c.B(f.d/24)
f=B.c.B(f.e/36)
k=B.dV.h(0,t.gX.i("a1.T").a(700))
k.toString
j=new A.fD(new A.fC(k,10),l,f)
B.a.k(b.gae().x,j)
f=B.bj.h(0,t.e.i("a1.T").a(800))
f.toString
i=new A.a5(14,2,-1,-1,g)
i.r=f
h=A.md(g,g,0,g,!0,!1,i)
b.cr(h,B.A)
i.sak(0,new A.l(0))
return new A.M(g,g,!0,!0,!1,o,new A.bF(new A.a9(B.e.B(A.jn(B.c.B(16/this.a)).a*n.length)),new A.kj(r,e,i,m,j),new A.kk(b,h,j)))}}
A.kj.prototype={
$1(a){var s=this,r=s.a,q=s.b,p=a.d,o=A.m0(r.a,q.a,p)*24
p=A.m0(r.b,q.b,p)*36
q=s.c
q.sX(0,o)
q.sY(0,p)
B.c.B(o)
B.c.B(p)
s.e.a.c=10*(1-a.d)},
$S:11}
A.kk.prototype={
$0(){var s=this.a
s.bC(this.b)
B.a.J(s.gae().x,this.c)},
$S:0}
A.jx.prototype={}
A.jw.prototype={
dN(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.f.S(b,f,c)
s=A.nj(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
r=this.R(a)
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
s[h]=g}B.f.aQ(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
ay(a,b){var s,r,q=a.b*100+a.a
if(q<0||q>=4000)return null
s=this.f
r=s.h(0,a)
if(r==null){r=new A.iw(b.createTexture())
s.j(0,a,r)}if(r.b){this.dN(a,b,r.a)
r.b=!1}return r.a},
R(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.ms(p,p+4000,B.e.bT(s.byteLength,r))
return new A.kM(100,A.nj(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
bH(){var s,r,q,p,o=this.R(this.e).c
for(s=this.c,r=o.length,q=0;q<4000;++q){p=s[q]
if(!(q<r))return A.b(o,q)
s[q]=p|o[q]}},
cK(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.bc(new A.j(s,r))
for(q=this.f,q=q.gbI(q),q=q.gw(q);q.n();)q.gp(q).b=!0},
cR(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.nr.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.a0(0,r,q)
o=o.c===B.b||A.O(A.po(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.bc(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]===1)g.bc(new A.j(m,l))}s=g.R(b)
s.toString
for(p=g.f,p=p.gal(p),p=p.gw(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]===1)i.b.b=!0}},
cQ(a){return this.cR(a,null)},
bc(a){var s,r,q,p=this.R(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=1
for(q=0;q<4;++q)this.ec(new A.d8(1,-1,1),new A.kl(B.dF[q],a),o)},
e9(a,b){if(a<0||a>=b.byteLength)return
if(!(a>=0&&a<b.length))return A.b(b,a)
b[a]=1},
cd(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
bd(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===0},
ec(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.r
B.a.sm(e,0)
B.a.k(e,a)
for(;s=e.length,s!==0;){if(0>=s)return A.b(e,-1)
r=e.pop()
s=r.a
q=B.c.ad(s*r.b+0.5)
p=B.c.cB(s*r.c-0.5)
for(o=s+1,n=2*s,m=q,l=null;m<=p;++m,l=j){k=b.fj(0,new A.j(s,m))
j=k.b*100+k.a
i=f.cd(j,c)
if(!i)h=m>=s*r.b&&m<=s*r.c
else h=!0
if(h)f.e9(j,c)
h=l!=null
if(h&&f.cd(l,c)&&f.bd(j,c))r.b=(2*m-1)/n
if(h&&f.bd(l,c)&&i){g=new A.d8(o,r.b,r.c)
g.c=(2*m-1)/n
B.a.k(e,g)}}if(l!=null&&f.bd(l,c))B.a.k(e,new A.d8(o,r.b,r.c))}}}
A.iw.prototype={}
A.kM.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]===1},
a0(a,b,c){var s=this.c,r=c*this.a+b
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]===1}}
A.c6.prototype={
l(a){return"Cardinal."+this.b}}
A.kl.prototype={
fj(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a){case B.aR:s=r.b
return new A.j(s.a+p,s.b-q)
case B.aS:s=r.b
return new A.j(s.a+p,s.b+q)
case B.aT:s=r.b
return new A.j(s.a+q,s.b+p)
case B.aU:s=r.b
return new A.j(s.a-q,s.b+p)}}}
A.d8.prototype={}
A.ch.prototype={}
A.fE.prototype={
dO(a,b){var s,r,q,p=this.c,o=p.R(a).c,n=p.R(b).c
for(p=o.length,s=n.length,r=0;r<4000;++r){if(!(r<p))return A.b(o,r)
if(o[r]===1){if(!(r<s))return A.b(n,r)
q=n[r]===1}else q=!1
if(q)return!1}return!0},
ah(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=3553,a1="u_player_visible_texture",a2=a4.a
if(a2!==a.y||a4.b!==a.z){a.y=a2
s=a4.b
a.z=s
r=a3.createTexture()
a.e=r
B.f.S(a3,a0,r)
B.f.aQ(a3,a0,0,6408,a2,s,0,6408,5121,null)
a3.texParameteri(a0,10241,9729)
a3.texParameteri(a0,10242,33071)
a3.texParameteri(a0,10243,33071)}B.f.aH(a3,36160,a.d)
B.f.cH(a3,36160,36064,a0,a.e,0)
a3.clearColor(0,0,0,1)
a3.clear(16640)
a2=a.c
s=a2.ay(a2.e,a3)
s.toString
a3.activeTexture(33985)
B.f.S(a3,a0,s)
for(r=a.x,q=r.length,p=a.a,o=t.t,n=t.n,m=t.N,l=t.z,k=0;k<r.length;r.length===q||(0,A.C)(r),++k){j=r[k]
i=j.gbw()
h=new A.j(j.gX(j),j.gY(j))
g=a2.ay(h,a3)
if(g==null)continue
if(a.r&&a.dO(a2.e,h))continue
a3.activeTexture(33984)
B.f.S(a3,a0,g)
f=A.c([a4.a,a4.b],o)
e=i.c
d=A.c([j.gX(j),j.gY(j)],o)
c=A.c([a4.d,a4.e],n)
b=i.b.a
p.a4(a3,4,3,A.bm(["u_resolution",f,"u_source_strength",e,"u_block_size",B.b8,"u_source_position",d,"u_offset",c,"u_source_color",A.c([(b>>>16&255)/255,(b>>>8&255)/255,(b&255)/255,0.2],n),"u_time",a4.c/1000,a1,1,"u_visible_texture",0],m,l))}B.f.aH(a3,36160,null)
a3.activeTexture(33984)
B.f.S(a3,a0,a.e)
a3.activeTexture(33985)
B.f.S(a3,a0,a.f)
a3.activeTexture(33986)
B.f.S(a3,a0,s)
a.b.a4(a3,4,3,A.bm(["u_light_texture",0,"u_game_world_texture",1,a1,2,"u_block_size",B.b8,"u_resolution",A.c([a4.a,a4.b],o),"u_offset",A.c([a4.d,a4.e],n)],m,l))}}
A.cq.prototype={
gbq(){var s=this.b
s=s==null?null:s.gbq()
return 1+(s==null?0:s)},
P(a,b){return B.c.P(this.f,t.p6.a(b).f)},
gcm(){var s,r=this.a
if(r==null)r=this
else{s=r.a
r=s==null?r:s.gcm()}return r},
dU(){var s,r,q
for(s=this,r=null;s!=null;r=s,s=q){s.b=r
q=s.a}},
aS(a){var s,r=A.c([],t.q)
for(s=this;s!=null;){B.a.k(r,s.d)
s=s.b}return r},
l(a){var s,r,q,p
for(s=this.d,r=this,q="",p="";r!=null;q=", "){p=p+q+s.l(0)
r=r.b}return p.charCodeAt(0)==0?p:p},
$iaf:1}
A.aT.prototype={
l(a){return"Directions."+this.b}}
A.kf.prototype={
bs(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=A.n5(b,t.p6),a0=A.aa(t.j,t.i),a1=a4.c
a.k(0,new A.cq(a2,0,a2.av(a3)*1.02+0))
for(s=a.$ti.c,r=a1.a,q=a1.b,p=t.W;o=a.c,n=o===0,!n;){if(n)A.T(A.ab("No element"));++a.d
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
if(k>0)a.bX(j,0)
o=l.d
i=a0.h(0,o)
if(i!=null&&i<l.e)continue
for(n=l.e,h=0;h<8;++h){g=B.au[h]
f=A.a8(o,g)
m=f.a
if(m>=0){e=f.b
m=e>=0&&m<r&&e<q}else m=!1
if(m){m=l.a
if(!J.V(m==null?b:m.d,f))m=A.mH(p.a(a1.h(0,f)),a4,a5)&&!f.H(0,a3)
else m=!0}else m=!0
if(m)continue
m=f.av(a3)
e=this.e2(g)
if(typeof e!=="number")return A.cF(e)
e=n+e
d=new A.cq(f,e,m*1.02+e)
d.a=l
if(f.H(0,a3)){d.dU()
s=l.a
return s==null?l:s.gcm()}c=a0.h(0,f)
if(!(e>1/0))m=c!=null&&e>=c
else m=!0
if(m)continue
a0.j(0,f,e)
s.a(d);++a.d
a.b_(0,d)}}return b},
aM(a,b,c){return this.bs(a,b,c,B.aj)},
e2(a){switch(a){case B.k:case B.n:case B.l:case B.m:return 1
case B.K:case B.J:case B.L:case B.M:return 1.4}}}
A.fi.prototype={
cE(a,b,c,d){var s,r,q,p,o,n,m,l,k=this.a,j=b.b*100+b.a
if(!(j>=0&&j<4000))return A.b(k,j)
s=k[j]*c
r=A.c([],t.q)
for(j=a.c,q=t.W,p=!1,o=0;o<8;++o){n=A.a8(b,B.au[o])
m=n.b*100+n.a
if(m<0||m>=4000)continue
if(A.mH(q.a(j.h(0,n)),a,d))continue
if(!(m>=0&&m<4000))return A.b(k,m)
l=k[m]*c
if(l>s){B.a.sm(r,0)
B.a.k(r,n)
s=l
p=!0}else if(l===s)B.a.k(r,n)}k=r.length
if(k===0||!p)return null
k=$.ok().E(k)
if(!(k>=0&&k<r.length))return A.b(r,k)
return r[k]},
br(a,b,c){return this.cE(a,b,c,B.aj)},
f7(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.a
B.ay.aL(d,0,4000,0)
for(s=this.b,s=s.gal(s),s=s.gw(s);s.n();){r=s.gp(s)
q=r.a
B.ay.j(d,q.b*100+q.a,r.b)}s=a.c
r=t.W
do for(p=!1,o=0;o<100;++o)for(n=0;n<40;++n){m=n*100+o
if(A.mH(r.a(s.h(0,new A.j(o,n))),a,b))continue
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
A.kr.prototype={
e3(a,b){var s,r,q,p,o,n,m,l=this,k="a_position",j=B.c.ad((b.f+b.d)/24),i=B.c.ad((b.r+b.e)/36),h=new A.j(j,i)
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
s.ab(a,k,r)}}
A.X.prototype={}
A.w.prototype={}
A.cv.prototype={
l(a){return"UniformKind."+this.b}}
A.hE.prototype={}
A.iB.prototype={}
A.jE.prototype={
K(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.nR(a,i.a,35633),f=A.nR(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.V(a.getProgramParameter(e,35714),!0)){A.eW(J.c2(a.getProgramInfoLog(e)))
A.T(A.ab("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.f.cA(a,A.bd(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.iB(a.getUniformLocation(A.bd(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.bd(i.e,h),n)
k=a.createBuffer()
B.f.cv(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.hE(k,j))}},
a6(a,b){A.r4(b,t.jv,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
ab(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.d(A.ab("WARNING, NO ATTRIBUTE "+b))
B.f.cv(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
a4(a,b,c,d){var s,r,q,p,o,n
t.ea.a(d)
B.f.fs(a,A.bd(this.e,"_program"))
B.f.cA(a,A.bd(this.f,"_vertexArrayObject"))
for(s=d.gal(d),s=s.gw(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.Q(p)
n=r.h(0,p)
if(n==null)A.T(A.ab("WARNING, NO UNIFORM "+p))
switch(n.b.b){case B.t:B.f.fl(a,n.a,A.aY(o))
break
case B.d:q=J.aw(o)
B.f.fn(a,n.a,A.aY(q.h(o,0)),A.aY(q.h(o,1)))
break
case B.ef:q=J.aw(o)
B.f.fo(a,n.a,A.aY(q.h(o,0)),A.aY(q.h(o,1)),A.aY(q.h(o,2)))
break
case B.aG:q=J.aw(o)
B.f.fp(a,n.a,A.aY(q.h(o,0)),A.aY(q.h(o,1)),A.aY(q.h(o,2)),A.aY(q.h(o,3)))
break
case B.o:B.f.fm(a,n.a,A.G(o))
break}}a.drawArrays(b,0,c)}}
A.kn.prototype={
sf0(a){this.f=A.nN(a)}}
A.ko.prototype={}
A.fR.prototype={}
A.ha.prototype={
aN(){var s=0,r=A.by(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aN=A.bz(function(a,b){if(a===1)return A.bt(b,r)
while(true)switch(s){case 0:e=A.c([],t.iw)
for(p=q.b,o=t.cU,n=t.ou,m=t.oV,l=t.Z,k=t.R,j=0;j<47;++j){i=p[j]
h=new XMLHttpRequest()
g=new A.J($.E,o)
B.dv.f4(h,"get","sounds/"+i)
h.responseType="arraybuffer"
f=m.a(new A.kt(q,h,i,new A.aQ(g,n)))
l.a(null)
A.bX(h,"readystatechange",f,!1,k)
h.send()
B.a.k(e,g)}s=2
return A.a7(A.pj(e,t.H),$async$aN)
case 2:return A.bu(null,r)}})
return A.bv($async$aN,r)},
bz(a,b,c){var s,r,q,p=this.c,o=A.pk(p),n=this.a.h(0,a)
if(n==null)return new A.fR()
s=p.createBufferSource()
r=B.v.U()
q=o.gain
q.toString
B.c1.saT(q,0.1*c+r/20)
p=p.destination
p.toString
B.dt.c4(o,p,0,0)
B.aM.c4(s,o,0,0)
B.aM.seD(s,n)
s.start()
return new A.fR()},
aw(a,b){return this.bz(a,b,2)},
$ipN:1}
A.kt.prototype={
$1(a){var s=0,r=A.by(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.bz(function(b,c){if(b===1)return A.bt(c,r)
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
return A.a7(B.c0.eM(n.c,t.lo.a(A.qp(m.response))),$async$$1)
case 7:l.j(0,k,c)
p.aI(0)
s=5
break
case 6:p.aJ(new A.hR("Failed to load "+o))
case 5:case 3:return A.bu(null,r)}})
return A.bv($async$$1,r)},
$S:40}
A.lK.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.f.S(q,r,p)
B.f.fg(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.a2(0,p)},
$S:12}
A.ku.prototype={
dv(a,b){A.rq(a,"CursesTransparent_24x36.png").d3(new A.kv(this),t.P)},
k(a,b){b.a=this
this.c.k(0,b)
this.e=!0},
J(a,b){this.c.J(0,b)
b.a=null
this.e=!0},
eH(a){var s,r,q,p
for(s=this.c,r=s.$ti,q=new A.cC(s,s.d,r.i("cC<1>")),r=r.c;q.n();){if(q.d<0)p=A.T(A.ab("No element"))
else{p=q.c
if(p==null)p=r.a(null)}p.a=null}++s.d
s.sbh(B.dL)
s.c=0
this.e=!0},
er(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="a_position",b5="a_texcoord",b6="a_bg_color",b7=b3.c,b8=b7.c
if(b8>1e4){A.eW("WARNING: TOO MANY SPRITES "+b8)
if(b3.f){b3.f=!1
A.eW(b7.aS(0))}b8=1e4}s=b3.a
r=t.jv
q=b8*12
p=A.k8(s.a6(b4,r).buffer,0,q)
o=A.k8(s.a6(b5,r).buffer,0,q)
q=b8*24
n=A.k8(s.a6("a_color",r).buffer,0,q)
m=A.k8(s.a6(b6,r).buffer,0,q)
l=b7.aS(0)
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
if(b0==null)B.bn.aL(n,a9,a9+24,0)
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
n[a]=e}if(b1==null)B.bn.aL(m,a9,a9+24,0)
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
m[a]=e}}s.ab(b9,b4,p)
s.ab(b9,b5,o)
s.ab(b9,"a_color",n)
s.ab(b9,b6,m)},
ah(a,b){var s,r=this
if(r.b==null||r.c.c===0)return
if(r.e){r.er(a)
r.e=!1}s=r.d
s.ay(s.e,a)
a.activeTexture(33984)
B.f.S(a,3553,r.b)
r.a.a4(a,4,r.c.c*6,A.bm(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.kv.prototype={
$1(a){this.a.b=t.lJ.a(a)},
$S:41}
A.a5.prototype={
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
this.f=b
s=this.a
if(s!=null)s.e=!0},
sbv(a,b){var s
this.x=b
s=this.a
if(s!=null)s.e=!0},
l(a){return"Sprite("+this.b+", "+this.c+")"}}
A.jY.prototype={}
A.kF.prototype={
es(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(this.b==null)return
s=this.a
r=s.a6("a_color",t.C)
q=this.b
switch(q.d.a){case B.H:case B.y:case B.ag:case B.af:p=$.ol()
break
case B.z:p=$.mL()
break
case B.u:p=$.on()
break
case B.B:p=$.om()
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
f=!(f.c===B.b||A.O(A.bj(f.f)))}else f=!1
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
r[f]=1}}}s.ab(a,"a_color",r)}}
A.kG.prototype={
f9(a){var s,r,q,p,o
for(s=this.b,r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
q.font=A.y(24*o.e)+'px "Press Start 2P"'
B.cc.seR(q,o.d)
q.fillText(o.a,o.b-a.d,o.c-a.e)}}}
A.h3.prototype={}
A.jv.prototype={
ev(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.R(a2.e),a4=a1.b,a5=a4.a6("a_color",t.C)
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
a4.ab(a6,"a_color",a5)}}
A.hz.prototype={}
A.lz.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:17}
A.he.prototype={
ai(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.e){m=n.b
l=B.c.B(m.d/24)
if(l===q){m=B.c.B(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.jl.prototype={
au(a9){var s=0,r=A.by(t.l7),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$au=A.bz(function(b0,b1){if(b0===1)return A.bt(b1,r)
while(true)switch(s){case 0:a8=A.c([],t.fF)
for(o=p.a,n=p.b,m=p.e,l=0;l<11;++l){k=A.r3(o.d6(n[l]))
B.a.k(a8,k)
j=m[l]
for(i=j.length,h=k.a,g=0;g<j.length;j.length===i||(0,A.C)(j),++g){f=A.rb(j[g])
e=A.rt(k,f)
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
return A.a7(null,$async$au)
case 3:o=t.j,l=0
case 4:if(!(l<a8.length-1)){s=6
break}a0=A.iP(a8[l])
if(!(l<a8.length)){q=A.b(a8,l)
s=1
break}k=a8[l]
A.iQ("selecting for "+l)
a1=A.jT(o)
n=k.c
case 7:if(!!0){s=8
break}if(!!0){a2=B.A
s=8
break}s=10
return A.a7(null,$async$au)
case 10:m=$.dv()
a3=A.nS(m,$.oC(),o)
if(a1.v(0,a3)){s=9
break}i=n.h(0,a3)
if(i.c===B.b||A.O(A.bj(i.f))||!p.dI(n.h(0,a3).f)){a1.k(0,a3)
s=9
break}if(a3.av(a0)<20){a1.k(0,a3)
s=9
break}a4=$.du().bs(a0,a3,k,B.aV)
if(a4==null){a1.k(0,a3)
s=9
break}i=a4.b
i=i==null?null:i.gbq()
a5=(1+(i==null?0:i))/140
A.iQ("Rolling at "+A.y(a5)+" in "+l)
if(m.U()<=a5){a2=a3
s=8
break}case 9:s=7
break
case 8:n.h(0,a2).f=B.R
case 5:++l
s=4
break
case 6:a6=A.fw(B.V)
a6.e=9
a7=A.fw(new A.f1(B.aI,50))
o=a9.c.x
o.eQ(a6,B.r)
B.a.k(o.a,a7)
q=new A.hz(a9,a8)
s=1
break
case 1:return A.bu(q,r)}})
return A.bv($async$au,r)},
dX(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.d,r=t.ee,q=this.e,p=this.b,o=0;o<11;++o){n=q[o]
m=p[o]
l=$.oo()
k=A.a0(l)
j=k.i("a6<1>")
i=A.ng(new A.a6(l,k.i("A(1)").a(new A.jm(m.a)),j),!0,j.i("f.E"))
for(h=0;h<s[o];){g=A.nS($.dv(),i,r)
B.a.k(n,g)
h+=g.d}}},
dV(){var s,r,q,p,o,n,m,l,k,j,i=this,h=new A.c7(1,1,1,0,0,0,0,new A.cV(A.c([],t.I),A.aa(t.b,t.O)),A.mW(),A.c([],t.Q),A.c([],t.d),new A.cW(""))
for(s=i.f,r=i.c,q=i.e,p=0;p<11;++p){o=q[p]
for(n=0,m=0;m<o.length;++m){l=i.dW(o[m])
k=l.a
for(j=l.x.b.h(0,B.r)!=null;k>0;){n+=(j?l.cY(h,$.dv(),!0):l.cU(h,$.dv(),!0)).c
k-=r[p]}}B.a.j(s,p,n)}},
dW(a){var s,r,q,p,o,n=this.r
if(n.h(0,a)!=null){n=n.h(0,a)
n.toString
return n}s=a.d
r=A.c([],t.I)
q=A.ne(B.aw,t.b,t.O)
p=new A.c7(s,s,1,0,0,0,0,new A.cV(r,q),a.c,A.c([],t.Q),A.c([],t.d),new A.cW(a.a))
for(s=J.aH(a.r.$0());s.n();){o=s.gp(s)
switch(o.gbR()){case B.az:q.h(0,B.N)
q.j(0,B.N,o)
break
case B.aA:q.h(0,B.r)
q.j(0,B.r,o)
break
case B.aB:q.h(0,B.O)
q.j(0,B.O,o)
break
default:B.a.k(r,o)}}n.j(0,a,p)
return p},
dI(a){switch(a){case null:case B.F:return!0
default:return!1}}}
A.jm.prototype={
$1(a){return B.a.v(t.ee.a(a).x,this.a)},
$S:43}
A.f9.prototype={
bP(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.Z(a,a0,A.b8(a*a0,B.i,!1,t.ns),t.ba)
c.a=b
s=new A.jc(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.A()
if(typeof m!=="number")return A.cF(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.cF(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.cF(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.cF(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.cF(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.cF(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.cF(f)
e=n+m+k+i+h+g+l+f
if(J.V(s.$2(q,o),1))if(e<4)a1.F(0,B.i,q,o)
else a1.F(0,B.b,q,o)
else if(e>5)a1.F(0,B.b,q,o)
else a1.F(0,B.i,q,o)}d=c.a
c.a=a1}}}
A.jc.prototype={
$2(a,b){return J.V(this.a.a.a0(0,a,b),B.b)?0:1},
$S:66}
A.jC.prototype={
bG(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.cM.a(b0)
s=t.q
r=A.c([],s)
q=new A.jD(a9)
for(p=J.aH(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.d5()
if(n>=1)B.a.k(r,o)}if(r.length===0)return
m=A.c([],t.oe)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.C)(r),++j){i=r[j]
h=A.c([],k)
g=i.a
f=i.b
if(o.h(0,new A.j(g+1,f))===B.b)B.a.k(h,B.l)
if(o.h(0,new A.j(g+-1,f))===B.b)B.a.k(h,B.n)
if(o.h(0,new A.j(g,f+1))===B.b)B.a.k(h,B.m)
if(o.h(0,new A.j(g,f+-1))===B.b)B.a.k(h,B.k)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.C)(h),++e){d=h[e]
c=A.a8(i,d)
b=A.c([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.b)break
a2=A.pd(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.a8(a,a2[0]))!==B.i){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.a8(a,a2[1]))===B.i}else a1=!0
if(a1)break
a=A.a8(a,d)
B.a.k(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.i&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.a8(a,A.pe(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.k(m,new A.ej(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.aa(t.v,t.fH)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.C)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.v(l,n))continue
if(a4.aK(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.j(0,n,a5)}else a4.j(0,n,a5)}for(s=a4.gbI(a4),s=s.gw(s),n=this.a,l=a9.e,k=a8.b;s.n();){g=s.gp(s)
f=g.d
a0=p.h(0,a8)
a0.toString
B.a.k(a0,f)
a0=p.h(0,f)
a0.toString
B.a.k(a0,a8)
for(g=g.c,a0=g.length,j=0;a1=g.length,j<a1;g.length===a0||(0,A.C)(g),++j)o.j(0,g[j],B.i)
a0=n.E(a1)
if(!(a0>=0&&a0<g.length))return A.b(g,a0)
a7=g[a0]
l.j(0,a7,B.W)
B.a.k(k,a7)
B.a.k(f.b,a7)}for(s=a4.gbI(a4),s=s.gw(s);s.n();)this.bG(s.gp(s).d,a9,b0,b1)}}
A.jD.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.A(0,new A.j(1,0)))===B.b?1:0
if(s.h(0,a.A(0,new A.j(-1,0)))===B.b)++r
if(s.h(0,a.A(0,new A.j(0,-1)))===B.b)++r
return s.h(0,a.A(0,new A.j(1,1)))===B.b?r+1:r},
$S:45}
A.j9.prototype={
d8(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.F(0,o.U()>0.45?B.i:B.b,n,m)
p.F(0,B.aC,n,m)}new A.f9(a7).bP(3)
for(p=q-1,l=0;l<r;++l){s.F(0,B.b,l,0)
s.F(0,B.b,l,p)}for(o=r-1,k=0;k<q;++k){s.F(0,B.b,0,k)
s.F(0,B.b,o,k)}j=new A.ja(a7)
i=new A.jb(a7)
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
o=A.jT(p)
a0=new A.fp(a7,A.c([],t.do),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.j(l,k)
if(o.v(0,a1)||s.h(0,a1)===B.b)continue
a0.cG(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.C)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gw(a3);d.n();)s.j(0,d.gp(d),B.b)
else B.a.k(o,new A.ap(a3,A.c([],h),A.c([],h),A.js(a3)))}a4=A.aa(p,t.v)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.c,a2=0;b=o.length,a2<b;o.length===r||(0,A.C)(o),++a2){a3=o[a2]
B.a.k(p,a3)
h.j(0,a3,A.c([],d))
for(b=J.aH(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.C)(o),++a2){a3=o[a2]
r=a3.a
p=J.aw(r)
if(p.gm(r)>a6){a6=p.gm(r)
a5=a3}}this.bG(a5,a7,a4,q)
for(r=q.cW(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.C)(r),++a2){a3=r[a2]
B.a.J(o,a3)
for(p=J.aH(a3.a);p.n();)s.j(0,p.gp(p),B.b)}A.oc(o,a7)}}
A.ja.prototype={
$2(a,b){return J.V(this.a.b.a0(0,a,b),B.i)},
$S:18}
A.jb.prototype={
$2(a,b){return J.V(this.a.b.a0(0,a,b),B.b)},
$S:18}
A.b4.prototype={}
A.hy.prototype={}
A.dz.prototype={}
A.e7.prototype={
a8(a,b){this.$ti.c.a(a)
return Math.min(B.ai.a8(a,b),B.c2.a8(a,b)+B.bG.a8(a,b))}}
A.fa.prototype={
a8(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
s=A.m1(a,B.k,b)
r=A.m1(a,B.m,b)
q=A.m1(a,B.l,b)
p=A.m1(a,B.n,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.f0.prototype={
a8(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
if(A.cG(a,B.k,b)+A.cG(a,B.m,b)+A.cG(a,B.l,b)+A.cG(a,B.n,b)===1)return 1
return 1/0}}
A.ff.prototype={
a8(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
if(A.cG(a,B.k,b)+A.cG(a,B.m,b)+A.cG(a,B.l,b)+A.cG(a,B.n,b)===2)return 1
return 1/0}}
A.dw.prototype={
a8(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.p)return 1/0
s=A.a8(a,B.k)
r=A.a8(a,B.m)
q=A.a8(a,B.l)
p=A.a8(a,B.n)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.el.prototype={
f2(a,b){return this.b.$2(a,b)}}
A.lU.prototype={
$2(a,b){b.e.j(0,a,B.aF)},
$S:1}
A.lQ.prototype={
$2(a,b){b.e.j(0,a,B.by)},
$S:1}
A.lS.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.G)s.j(0,a,B.aD)
else s.j(0,a,B.aE)},
$S:1}
A.lP.prototype={
$2(a,b){var s=b.e
if(b.d.h(0,a)===B.G)s.j(0,a,B.aD)
else s.j(0,a,B.aE)},
$S:1}
A.lR.prototype={
$2(a,b){b.e.j(0,a,B.ad)},
$S:1}
A.lT.prototype={
$2(a,b){b.e.j(0,a,B.bz)
b.f.j(0,a,B.dQ)},
$S:1}
A.lO.prototype={
$2(a,b){b.e.j(0,a,B.ae)},
$S:1}
A.m_.prototype={
$2(a,b){var s=t.v
s.a(a)
s.a(b)
return J.am(a.a)-J.am(b.a)},
$S:48}
A.dP.prototype={}
A.j4.prototype={
d6(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=4000,c=new A.Z(100,40,A.b8(d,B.i,!1,t.ns),t.ba),b=A.b8(d,0,!1,t.i),a=A.b8(d,B.aC,!1,t.dt),a0=new A.Z(100,40,A.b8(d,B.p,!1,t.dy),t.eN),a1=t.c,a2=new A.dP(a3,c,new A.Z(100,40,b,t.de),new A.Z(100,40,a,t.f5),a0,new A.Z(100,40,A.b8(d,B.bh,!1,t.gM),t.eT),new A.Z(100,40,A.b8(d,null,!1,t.O),t.oQ),new A.jr(A.c([],a1),A.aa(t.v,t.mw)),A.c([],a1))
if(a3.b)this.eO(a2)
b=a3.a
switch(b){case B.y:case B.z:new A.j9(B.v).d8(a2)
break
case B.B:case B.u:new A.kq(A.jT(t.j),B.v).dc(a2)
break
case B.ag:case B.H:case B.af:new A.kC(B.v).d9(a2)
break}s=new Float32Array(4000)
new A.kg().da(s,100,40)
r=new A.Z(100,40,A.mp(d,new A.j6(),t.W),t.nr)
for(q=0;q<100;++q)for(a=q!==0,a1=q!==99,p=0;p<40;++p)if(!a||!a1||p===0||p===39){c.F(0,B.b,q,p)
a0.F(0,B.p,q,p)}this.b.d7(a2.y,a2,a3.c)
for(a=a2.c,a1=this.a,o=a2.d,n=a2.r,b=b!==B.af,m=a2.f,q=0;q<100;++q)for(p=0;p<40;++p){l=J.V(c.a0(0,q,p),B.i)
k=c.a0(0,q,p)
k.toString
j=new A.j(q,p)
a1.U()
i=r.h(0,j)
h=o.h(0,j)
g=a0.h(0,j)
i.b=j
i.c=k
i.sff(o.h(0,j))
k=p*100+q
if(!(k<4000))return A.b(s,k)
f=s[k]
e=n.a0(0,q,p)
if(J.V(a.h(0,j),1))i.r=B.dC
else if(g!==B.p)switch(g){case B.W:if(m.h(0,j)===B.bg)i.f=B.T
else i.f=B.w
break
case B.aE:i.f=B.U
break
case B.p:break
case B.by:i.f=B.aa
break
case B.aF:i.f=B.a9
break
case B.ed:i.f=B.F
break
case B.ad:i.f=B.a8
if(e!=null)B.a.k(i.e,e)
break
case B.ae:i.f=B.a6
break
case B.bz:i.f=B.P
break
case B.bA:i.f=B.a5
break
case B.aD:i.f=B.Q
break}else if(l&&f<0.42&&h!==B.G&&b)i.f=B.F
if(e!=null)B.a.k(i.e,e)}return new A.jW(r,a3)},
eO(a){var s,r,q=this.a,p=a.b,o=p.b,n=q.E(o-1)+1,m=n>o/2?-1:1,l=new A.j5(a)
for(p=p.a,s=n,r=0;r<p;++r){l.$1(new A.j(r,s))
l.$1(new A.j(r,s+1))
l.$1(new A.j(r,s-1))
s+=q.f1()?m:0}}}
A.j6.prototype={
$1(a){var s=A.c([],t.I)
return new A.bS(B.A,B.i,s)},
$S:17}
A.j5.prototype={
$1(a){var s=this.a,r=s.b
if(r.cI(a)){r.j(0,a,B.i)
s.c.j(0,a,1)}},
$S:49}
A.ej.prototype={
gm(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.jr.prototype={
cW(){var s,r,q,p,o,n=A.c([],t.c)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.k(n,o)}return n}}
A.ap.prototype={
l(a){return"Room{"+J.am(this.a)+"; "+this.d.l(0)+"}"}}
A.fp.prototype={
cG(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.c([a],k),i=A.c([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.v(0,o))continue
q.k(0,o)
B.a.k(i,o)
for(n=0;n<8;++n){m=A.a8(o,B.au[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.v(0,m)&&k.h(0,m)===B.i)B.a.k(j,m)}}B.a.k(this.b,i)}}
A.fx.prototype={
cu(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.W)s=B.ar
else if(a instanceof A.Y)s=B.ap
else s=a instanceof A.at?B.aq:B.as
B.a.k(r.a,a)
B.a.k(r.b,s)
B.a.k(r.c,b)
r.d+=b},
ct(a){return this.cu(a,10)},
f5(a){var s,r,q,p={},o=p.a=0,n=A.mp(this.c.length,new A.jL(p,this),t.i),m=a.U()
for(s=n.length,r=m>-1;o<s;++o){q=n[o]
if(r&&m<=q){s=this.a
if(!(o<s.length))return A.b(s,o)
return A.fw(s[o])}}throw A.d(A.ab(""))},
dg(a){var s,r,q=B.a.eY(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
df(a){var s,r,q,p
for(s=this.b,r=this.c,q=0;q<s.length;++q){if(s[q]!==a)continue
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p===0)return
B.a.j(r,q,p-2)
this.d-=2}}}
A.jL.prototype={
$1(a){var s,r=this.b,q=r.c
if(!(a<q.length))return A.b(q,a)
s=this.a
return s.a=q[a]/r.d+s.a},
$S:51}
A.kb.prototype={}
A.jG.prototype={
d7(a,b,c){var s,r,q
t.mw.a(a)
s=new A.fx(A.c([],t.hf),A.c([],t.lB),A.c([],t.t))
r=s.gey()
new A.a6(B.dN,t.ei.a(new A.jH()),t.kL).D(0,r)
new A.a6(B.dJ,t.eU.a(new A.jI()),t.eo).D(0,r)
new A.a6(B.dG,t.hZ.a(new A.jJ()),t.au).D(0,r)
new A.a6(B.dD,t.g9.a(new A.jK()),t.b1).D(0,r)
s.ct(B.aQ)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.C)(a),++q)this.dQ(s,a[q],b)},
dQ(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.aw(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.A
break}r=j.length
if(r!==0){r=l.E(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.E(k.gm(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.ad||q===B.p
else r=!1
if(r)break;++i}if(s.H(0,B.A))return
p=a.f5(l)
n=p.b
if(!J.V(n,B.aQ)){a.dg(n)
a.df(p.c)
o.j(0,s,p)}}}
A.jH.prototype={
$1(a){return t.bB.a(a).b<=1000},
$S:52}
A.jI.prototype={
$1(a){return t.li.a(a).f<=1000},
$S:53}
A.jJ.prototype={
$1(a){return t.kB.a(a).r<=1000},
$S:54}
A.jK.prototype={
$1(a){return t.lE.a(a).c<=1000},
$S:55}
A.kg.prototype={
a7(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
da(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
for(s=0;s<b0;++s)for(r=s*0.1,q=0;q<b1;++q){p=q*b0+s
o=q*0.1
n=B.c.ad(r)&255
m=B.c.ad(o)&255
l=B.c.ad(0.3)&255
k=r-Math.floor(r)
j=o-Math.floor(o)
i=0.3-Math.floor(0.3)
h=k*k*k*(k*(k*6-15)+10)
g=j*j*j*(j*(j*6-15)+10)
o=$.oA()
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
A.bN.prototype={
l(a){return"RuinOrientation."+this.b}}
A.ec.prototype={
l(a){return"RoomSizeKind."+this.b}}
A.kq.prototype={
dc(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.E(5)
if(!(a3>=0&&a3<5))return A.b(B.be,a3)
s=B.be[a3]
r=a1.bQ(B.br)
q=a1.e1(s)
p=A.pg(a1.cC(a4,r,new A.j(B.c.B(Math.max(1,q.a-r.a/2)),B.c.B(Math.max(1,q.b-A.cr(r)/2)))))
a3=a4.y
B.a.k(a3,p)
for(o=t.q,n=0;n<2000;){m=new A.j(a2.E(98)+1,a2.E(38)+1)
l=[B.ac,B.ac,B.ac,B.bq]
k=a2.E(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a1.bQ(l[k])
if(!a1.fb(a4,r,m)){l=a1.cC(a4,r,m)
B.a.k(a3,new A.ap(l,A.c([],o),A.c([],o),A.js(l)))}else ++n}for(a2=a1.b,o=a4.d,l=a4.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.j(j,i)
o.F(0,B.G,j,i)
if(!a2.v(0,h))l.j(0,h,B.b)}g=A.aa(t.j,t.v)
for(a2=a3.length,k=a4.x,f=k.a,e=k.b,d=t.c,c=0;c<a3.length;a3.length===a2||(0,A.C)(a3),++c){b=a3[c]
B.a.k(f,b)
e.j(0,b,A.c([],d))
for(a=J.aH(b.a);a.n();)g.j(0,a.gp(a),b)}a1.bG(p,a4,g,k)
for(a2=k.cW(),k=a2.length,c=0;c<a2.length;a2.length===k||(0,A.C)(a2),++c){b=a2[c]
B.a.J(a3,b)
for(f=J.aH(b.a);f.n();)l.j(0,f.gp(f),B.b)}A.oc(a3,a4)
for(a2=o.c,a0=0;a0<4000;++a0)B.a.j(a2,a0,B.G)},
bQ(a){var s
switch(a){case B.ac:s=this.a
return new A.eb(s.E(5)+5,s.E(5)+5)
case B.bq:s=this.a
return new A.eb(s.E(10)+9,s.E(10)+9)
case B.br:s=this.a
return new A.eb(s.E(10)+20,s.E(10)+20)}},
e1(a){switch(a){case B.bs:return new A.j(50,10)
case B.bt:return new A.j(50,30)
case B.bu:return new A.j(75,20)
case B.bv:return new A.j(25,20)
case B.bw:return new A.j(50,20)}},
cC(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.c([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.j(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.k(0,d)
r.j(0,d,f?B.b:B.i)
if(!f)B.a.k(a,d)}return a},
fb(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.j(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.b||n.v(0,i))return!0}return!1}}
A.eb.prototype={}
A.kC.prototype={
dZ(a){var s,r,q=a.a.a===B.H?B.aC:B.ec
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
d9(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.dZ(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.U()>0.6)r.j(0,new A.j(q,p),B.b)
new A.f9(b8).bP(10)
o=A.jT(t.j)
n=new A.fp(b8,A.c([],t.do),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.j(k,j)
if(o.v(0,i)||r.h(0,i)===B.b)continue
n.cG(i)}o=n.b
B.a.aY(o,new A.kD())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.C)(h),++f)r.j(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.j(e,q,B.bA)
B.a.j(o,q,B.i)}$label0$1:for(o=b8.y,e=t.q,d=b8.d,c=0;c<3;){b=s.E(3)+5
a=s.E(3)+5
q=s.E(100-b)
p=s.E(40-a)
for(a0=q-1,a1=q+b,a2=a1+1,a3=p-1,a4=p+a,a5=a4+1;a0<a2;++a0)for(a6=a0>=0,a7=a0<m,a8=a3;a8<a5;++a8){i=new A.j(a0,a8)
if(!(a6&&a8>=0&&a7&&a8<l))continue $label0$1
if(g.h(0,i)!==B.p||r.h(0,i)!==B.i)continue $label0$1}a9=A.c([],e)
b0=A.c([],e)
for(a2=a1-1,a5=a4-1,a0=q;a0<a1;++a0)for(a6=a0-q!==0,a7=a0!==a2,a3=p;a3<a4;++a3){i=new A.j(a0,a3)
if(!a6||!a7||a3-p===0||a3===a5){r.j(0,i,B.b)
B.a.k(a9,i)}else B.a.k(b0,i)
d.j(0,i,B.G)}b1=new A.kE(b8)
B.a.dh(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.A
break}b3=a9[f]
b4=A.a8(b3,B.k)
b5=A.a8(b3,B.m)
b6=A.a8(b3,B.n)
b7=A.a8(b3,B.l)
if(A.O(b1.$1(b4))&&A.O(b1.$1(b5))){b2=b3
break}if(A.O(b1.$1(b6))&&A.O(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.C)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.i)
g.j(0,b2,B.W)
B.a.k(o,new A.ap(b0,A.c([],e),A.c([],e),A.js(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.C)(o),++f)A.eX(o[f],$.mc(),b8)}}
A.kD.prototype={
$2(a,b){var s=t.i8
s.a(a)
return J.am(s.a(b))-J.am(a)},
$S:56}
A.kE.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.i&&s.e.h(0,a)===B.p},
$S:57}
A.kN.prototype={
dw(a){var s=t.jV.a(new A.kO(this))
t.Z.a(null)
A.bX(a,"keydown",s,!1,t.g)
A.bX(a,"mousemove",t.b9.a(new A.kP(this)),!1,t.V)}}
A.kO.prototype={
$1(a){var s
t.g.a(a)
s=$.qu.h(0,a.key)
if(s!=null){a.preventDefault()
this.a.a.k(0,s)}else A.eW(":"+A.y(a.key)+":")},
$S:19}
A.kP.prototype={
$1(a){var s,r
t.V.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
this.a.b.k(0,A.c([s,r],t.n))},
$S:6}
A.a3.prototype={
l(a){return"InputCommand."+this.b}}
A.iU.prototype={
K(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="base"
t.aW.a(a)
s=document
g.b=t.mX.a(s.querySelector("#action_bar"))
for(r=g.c,q=g.d,p=t.eX,o=p.i("~(1)?"),n=t.Z,p=p.c,m=0;m<1;++m){l=r[m]
k=q[m]
j=s.createElement("button")
j.innerText=l
i=o.a(new A.iV(g,k))
n.a(null)
A.bX(j,"click",i,!1,p)
A.bd(g.b,f).appendChild(j)}h=A.pn("checkbox")
B.dx.seF(h,!1)
r=o.a(new A.iW(a,h))
n.a(null)
A.bX(h,"click",r,!1,p)
A.bd(g.b,f).appendChild(s.createTextNode("Toggle Light Culling"))
A.bd(g.b,f).appendChild(h)}}
A.iV.prototype={
$1(a){var s
t.V.a(a)
s=this.a.a
s.bn(0)
s.c=!0
s.a.c=!0
s=A.bd(s.b,"_modal").style
s.display="block"
s=document.getElementById("modal-content")
s.toString
J.p0(s,this.b)},
$S:6}
A.iW.prototype={
$1(a){var s
t.V.a(a)
s=this.b.checked
s.toString
this.a.a=s},
$S:6}
A.k3.prototype={
du(a){var s,r=document.getElementById("myModal")
r.toString
this.b=r
r=window
s=t.b9.a(new A.k4(this))
t.Z.a(null)
A.bX(r,"click",s,!1,t.V)
A.bX(window,"keydown",t.jV.a(new A.k5(this)),!1,t.g)},
bn(a){var s
this.c=!1
this.a.c=!1
s=A.bd(this.b,"_modal").style
s.display="none"}}
A.k4.prototype={
$1(a){var s=this.a
if(A.qo(t.V.a(a).target)===A.bd(s.b,"_modal"))s.bn(0)},
$S:6}
A.k5.prototype={
$1(a){var s
t.g.a(a)
s=this.a
if(s.c&&a.key==="Escape")s.bn(0)},
$S:19}
A.fZ.prototype={}
A.kw.prototype={
K(a){var s,r,q
t.ni.a(a)
s=document
r=s.getElementById("health_bar")
r.toString
s=s.getElementById("exp_bar")
s.toString
q=t.M
B.a.k(a.a.a,q.a(new A.kx(r,a)))
B.a.k(a.b.a,q.a(new A.ky(s,a)))}}
A.kx.prototype={
$0(){var s=this.a.style,r=A.y(this.b.a.b*100)+"%"
s.width=r},
$S:0}
A.ky.prototype={
$0(){var s=this.a.style,r=A.y(this.b.b.b*100)+"%"
s.width=r},
$S:0};(function aliases(){var s=J.a.prototype
s.dj=s.l
s=J.ci.prototype
s.dl=s.l
s=A.az.prototype
s.dm=s.cM
s.dn=s.cN
s.dr=s.cP
s.dq=s.cO
s=A.f.prototype
s.dk=s.aU
s=A.K.prototype
s.aZ=s.T
s=A.eB.prototype
s.ds=s.aa})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers.installStaticTearOff,l=hunkHelpers._instance_1u
s(J.t.prototype,"gew","k",63)
r(A,"qK","pl",20)
r(A,"qZ","pW",7)
r(A,"r_","pX",7)
r(A,"r0","pY",7)
q(A,"o1","qT",0)
p(A,"r2","qN",10)
q(A,"r1","qM",0)
o(A.dk.prototype,"geJ",1,0,null,["$1","$0"],["a2","aI"],31,0,0)
n(A.J.prototype,"gdL","M",10)
p(A,"r6","qs",62)
r(A,"r7","qt",20)
m(A,"rh",4,null,["$4"],["q0"],13,0)
m(A,"ri",4,null,["$4"],["q1"],13,0)
var k
l(k=A.fs.prototype,"geT","bu",34)
l(k,"gci","e5",16)
p(A,"ry","qS",64)
o(A.fx.prototype,"gey",0,1,null,["$2","$1"],["cu","ct"],50,0,0)
p(A,"rE","r9",47)
r(A,"o8","rx",44)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.mm,J.a,J.dA,A.L,A.ks,A.f,A.bn,A.a4,A.aq,A.cS,A.c8,A.kJ,A.kd,A.dO,A.eE,A.x,A.jQ,A.dX,A.kY,A.aW,A.hU,A.eK,A.eJ,A.hB,A.dC,A.en,A.cz,A.J,A.hC,A.ct,A.bq,A.eF,A.hD,A.em,A.hK,A.bZ,A.im,A.eP,A.eQ,A.i0,A.et,A.eu,A.h,A.ed,A.ca,A.a9,A.kZ,A.fW,A.ef,A.hR,A.d_,A.U,A.iq,A.hh,A.jf,A.mi,A.cA,A.r,A.e5,A.eB,A.is,A.cc,A.hJ,A.id,A.eO,A.kR,A.kc,A.hY,A.fu,A.cC,A.l,A.Z,A.fS,A.aN,A.cI,A.iS,A.iR,A.ad,A.ao,A.b3,A.bo,A.j8,A.fs,A.f1,A.aI,A.jd,A.W,A.k_,A.bI,A.Y,A.dy,A.at,A.an,A.eZ,A.c7,A.cM,A.cW,A.cV,A.fe,A.fF,A.bS,A.fC,A.fD,A.j,A.jW,A.k0,A.ko,A.fl,A.jt,A.a2,A.bF,A.M,A.jw,A.iw,A.kM,A.kl,A.d8,A.ch,A.cq,A.kf,A.fi,A.X,A.w,A.hE,A.iB,A.jE,A.kn,A.fR,A.ha,A.a5,A.jY,A.kG,A.h3,A.hz,A.he,A.jl,A.f9,A.jC,A.b4,A.el,A.dP,A.j4,A.ej,A.jr,A.ap,A.fp,A.fx,A.kb,A.jG,A.kg,A.eb,A.kC,A.kN,A.iU,A.k3,A.fZ,A.kw])
q(J.a,[J.dT,J.dV,J.ci,J.t,J.cZ,J.bM,A.fK,A.cp,A.e,A.iT,A.f7,A.cP,A.bi,A.H,A.hI,A.aS,A.ji,A.bK,A.fj,A.hL,A.dL,A.hN,A.jj,A.k,A.hS,A.ay,A.jF,A.hW,A.dZ,A.jZ,A.i1,A.i2,A.aA,A.i3,A.i5,A.aB,A.i9,A.ic,A.aC,A.ie,A.aD,A.ik,A.ah,A.iu,A.kH,A.aE,A.ix,A.kI,A.kL,A.iE,A.iG,A.iI,A.iK,A.iM,A.aJ,A.hZ,A.aM,A.i7,A.kh,A.io,A.aO,A.iz,A.b0,A.f3,A.hG,A.f8,A.fr,A.h0,A.d7,A.br,A.hr,A.hw,A.ii])
q(J.ci,[J.fY,J.cw,J.bk])
r(J.jM,J.t)
q(J.cZ,[J.dU,J.fy])
q(A.L,[A.cj,A.bT,A.fz,A.ht,A.h7,A.dB,A.hQ,A.fT,A.b_,A.hv,A.hs,A.bp,A.fd,A.fg])
q(A.f,[A.o,A.cl,A.a6,A.lq])
q(A.o,[A.aK,A.dW])
q(A.aK,[A.eg,A.cm])
r(A.dM,A.cl)
q(A.a4,[A.e0,A.ek])
q(A.cS,[A.dI,A.ag])
q(A.c8,[A.jB,A.fb,A.fc,A.hl,A.jO,A.lG,A.lI,A.kV,A.kU,A.lt,A.jy,A.l4,A.lc,A.kA,A.li,A.le,A.jX,A.jq,A.l_,A.ka,A.k9,A.lj,A.lk,A.lm,A.lV,A.lW,A.j1,A.j2,A.lF,A.jA,A.jp,A.ju,A.k6,A.j_,A.iZ,A.kj,A.kt,A.lK,A.kv,A.lz,A.jm,A.jD,A.j6,A.j5,A.jL,A.jH,A.jI,A.jJ,A.jK,A.kE,A.kO,A.kP,A.iV,A.iW,A.k4,A.k5])
r(A.e6,A.bT)
q(A.hl,[A.hf,A.cO])
r(A.hA,A.dB)
r(A.e_,A.x)
q(A.e_,[A.az,A.hF])
q(A.fc,[A.jN,A.lH,A.lu,A.ly,A.jz,A.l5,A.jR,A.jV,A.k1,A.k2,A.kp,A.kz,A.ls,A.kT,A.j3,A.jc,A.ja,A.jb,A.lU,A.lQ,A.lS,A.lP,A.lR,A.lT,A.lO,A.m_,A.kD])
r(A.d3,A.cp)
q(A.d3,[A.ew,A.ey])
r(A.ex,A.ew)
r(A.co,A.ex)
r(A.ez,A.ey)
r(A.e2,A.ez)
r(A.e1,A.co)
q(A.e2,[A.fL,A.fM,A.fN,A.fO,A.fP,A.d4,A.e3])
r(A.eL,A.hQ)
q(A.fb,[A.kW,A.kX,A.lo,A.ln,A.l0,A.l8,A.l6,A.l2,A.l7,A.l1,A.lb,A.la,A.l9,A.kB,A.ll,A.lg,A.lx,A.lh,A.m4,A.m2,A.m3,A.lZ,A.lX,A.lY,A.m7,A.m5,A.m6,A.ma,A.m8,A.m9,A.lC,A.lA,A.lB,A.k7,A.j0,A.kk,A.kx,A.ky])
q(A.en,[A.aQ,A.dk])
r(A.dg,A.eF)
q(A.ct,[A.eG,A.ep])
r(A.bV,A.eG)
r(A.di,A.em)
r(A.cx,A.hK)
r(A.bc,A.bZ)
r(A.ib,A.eP)
q(A.az,[A.lf,A.es])
r(A.eA,A.eQ)
r(A.cB,A.eA)
r(A.dY,A.eu)
q(A.b_,[A.d6,A.fv])
q(A.e,[A.q,A.fo,A.cf,A.au,A.eC,A.av,A.ac,A.eH,A.hx,A.df,A.F,A.dF,A.f5])
q(A.q,[A.K,A.b2,A.b6,A.dh])
q(A.K,[A.u,A.n])
q(A.u,[A.cJ,A.f2,A.cN,A.c4,A.c5,A.cU,A.fq,A.cY,A.cg,A.cn,A.h8,A.eh,A.hj,A.hk,A.db])
r(A.je,A.bi)
r(A.cT,A.hI)
q(A.aS,[A.jg,A.jh])
r(A.hM,A.hL)
r(A.dK,A.hM)
r(A.hO,A.hN)
r(A.fk,A.hO)
r(A.ax,A.f7)
r(A.hT,A.hS)
r(A.fn,A.hT)
r(A.hX,A.hW)
r(A.ce,A.hX)
r(A.dR,A.b6)
r(A.dS,A.cf)
r(A.bb,A.k)
q(A.bb,[A.bl,A.as])
r(A.fG,A.i1)
r(A.fH,A.i2)
r(A.i4,A.i3)
r(A.fI,A.i4)
r(A.aj,A.dY)
r(A.i6,A.i5)
r(A.e4,A.i6)
r(A.ia,A.i9)
r(A.h_,A.ia)
r(A.h6,A.ic)
r(A.eD,A.eC)
r(A.hb,A.eD)
r(A.ig,A.ie)
r(A.hc,A.ig)
r(A.hg,A.ik)
r(A.iv,A.iu)
r(A.hm,A.iv)
r(A.eI,A.eH)
r(A.hn,A.eI)
r(A.iy,A.ix)
r(A.hp,A.iy)
r(A.dd,A.cn)
r(A.iF,A.iE)
r(A.hH,A.iF)
r(A.eo,A.dL)
r(A.iH,A.iG)
r(A.hV,A.iH)
r(A.iJ,A.iI)
r(A.ev,A.iJ)
r(A.iL,A.iK)
r(A.ih,A.iL)
r(A.iN,A.iM)
r(A.ir,A.iN)
r(A.hP,A.hF)
r(A.bW,A.ep)
r(A.eq,A.bq)
r(A.it,A.eB)
r(A.kS,A.kR)
r(A.i_,A.hZ)
r(A.fA,A.i_)
r(A.i8,A.i7)
r(A.fU,A.i8)
r(A.d9,A.n)
r(A.ip,A.io)
r(A.hi,A.ip)
r(A.iA,A.iz)
r(A.hq,A.iA)
q(A.F,[A.bg,A.cX])
r(A.dE,A.bg)
q(A.dF,[A.c3,A.fV])
r(A.f4,A.hG)
r(A.ij,A.ii)
r(A.hd,A.ij)
q(A.ao,[A.bQ,A.bR,A.cR,A.bO,A.h4,A.ea,A.h5,A.bE])
r(A.a1,A.l)
q(A.a1,[A.d1,A.d0])
q(A.kZ,[A.ee,A.b7,A.ft,A.b5,A.bJ,A.aP,A.c9,A.dx,A.cL,A.fX,A.cb,A.dc,A.cQ,A.cu,A.ai,A.ck,A.b1,A.jU,A.a_,A.d2,A.c6,A.aT,A.cv,A.bN,A.ec,A.a3])
q(A.ko,[A.jk,A.jo,A.jx,A.fE,A.kr,A.ku,A.kF,A.jv])
q(A.a2,[A.fQ,A.e9,A.aL,A.da,A.fB,A.ei,A.dD,A.dJ,A.f6,A.hu,A.e8,A.h1])
q(A.jC,[A.j9,A.kq])
q(A.b4,[A.hy,A.dz,A.e7])
q(A.hy,[A.fa,A.f0,A.ff,A.dw])
s(A.ew,A.h)
s(A.ex,A.aq)
s(A.ey,A.h)
s(A.ez,A.aq)
s(A.dg,A.hD)
s(A.eu,A.h)
s(A.eQ,A.ed)
s(A.hI,A.jf)
s(A.hL,A.h)
s(A.hM,A.r)
s(A.hN,A.h)
s(A.hO,A.r)
s(A.hS,A.h)
s(A.hT,A.r)
s(A.hW,A.h)
s(A.hX,A.r)
s(A.i1,A.x)
s(A.i2,A.x)
s(A.i3,A.h)
s(A.i4,A.r)
s(A.i5,A.h)
s(A.i6,A.r)
s(A.i9,A.h)
s(A.ia,A.r)
s(A.ic,A.x)
s(A.eC,A.h)
s(A.eD,A.r)
s(A.ie,A.h)
s(A.ig,A.r)
s(A.ik,A.x)
s(A.iu,A.h)
s(A.iv,A.r)
s(A.eH,A.h)
s(A.eI,A.r)
s(A.ix,A.h)
s(A.iy,A.r)
s(A.iE,A.h)
s(A.iF,A.r)
s(A.iG,A.h)
s(A.iH,A.r)
s(A.iI,A.h)
s(A.iJ,A.r)
s(A.iK,A.h)
s(A.iL,A.r)
s(A.iM,A.h)
s(A.iN,A.r)
s(A.hZ,A.h)
s(A.i_,A.r)
s(A.i7,A.h)
s(A.i8,A.r)
s(A.io,A.h)
s(A.ip,A.r)
s(A.iz,A.h)
s(A.iA,A.r)
s(A.hG,A.x)
s(A.ii,A.h)
s(A.ij,A.r)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",N:"double",P:"num",p:"String",A:"bool",U:"Null",m:"List"},mangledNames:{},types:["~()","~(j,dP)","m<aI>()","a5()","b3()","~(p,@)","~(as)","~(~())","U()","~(@)","~(v,aX)","~(bF)","~(k)","A(K,p,p,cA)","A(aV)","A(p)","~(a9)","bS(i)","A(i,i)","~(bl)","i(v?)","U(@)","A(v?)","U(v,aX)","J<@>(@)","p(p)","~(q,q?)","@(@,@)","~(b0)","~(bK)","A(aI)","~([v?])","@(@)","~(i,@)","ar<~>(a3)","A(@)","A(mg)","~(m<N>)","@(@,p)","~(ho)","ar<~>(k)","U(br)","~(@,@)","A(bo)","~(P)","i(j)","~(v?,v?)","i(v?,v?)","i(ap,ap)","~(j)","~(v[i])","N(i)","A(W)","A(Y)","A(at)","A(an)","i(m<j>,m<j>)","A(j)","A(q)","@(p)","U(~())","~(p,p)","A(v?,v?)","~(v?)","i(a5,a5)","U(@,aX)","i(i,i)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.qg(v.typeUniverse,JSON.parse('{"fY":"ci","cw":"ci","bk":"ci","rG":"k","rZ":"k","rI":"F","rN":"bg","rF":"n","t_":"n","rH":"e","t9":"e","tc":"e","rK":"u","td":"q","rY":"q","tr":"b6","tb":"as","tq":"ac","rM":"bb","rL":"b2","tf":"b2","t1":"cf","t0":"ce","rO":"H","rQ":"ah","rJ":"cn","t8":"co","t7":"cp","dT":{"A":[]},"dV":{"U":[]},"t":{"m":["1"],"o":["1"],"f":["1"]},"jM":{"t":["1"],"m":["1"],"o":["1"],"f":["1"]},"dA":{"a4":["1"]},"cZ":{"N":[],"P":[],"af":["P"]},"dU":{"N":[],"i":[],"P":[],"af":["P"]},"fy":{"N":[],"P":[],"af":["P"]},"bM":{"p":[],"af":["p"],"nl":[]},"cj":{"L":[]},"o":{"f":["1"]},"aK":{"o":["1"],"f":["1"]},"eg":{"aK":["1"],"o":["1"],"f":["1"],"aK.E":"1","f.E":"1"},"bn":{"a4":["1"]},"cl":{"f":["2"],"f.E":"2"},"dM":{"cl":["1","2"],"o":["2"],"f":["2"],"f.E":"2"},"e0":{"a4":["2"]},"cm":{"aK":["2"],"o":["2"],"f":["2"],"aK.E":"2","f.E":"2"},"a6":{"f":["1"],"f.E":"1"},"ek":{"a4":["1"]},"cS":{"I":["1","2"]},"dI":{"cS":["1","2"],"I":["1","2"]},"ag":{"cS":["1","2"],"I":["1","2"]},"e6":{"bT":[],"L":[]},"fz":{"L":[]},"ht":{"L":[]},"eE":{"aX":[]},"c8":{"cd":[]},"fb":{"cd":[]},"fc":{"cd":[]},"hl":{"cd":[]},"hf":{"cd":[]},"cO":{"cd":[]},"h7":{"L":[]},"hA":{"L":[]},"az":{"x":["1","2"],"jP":["1","2"],"I":["1","2"],"x.K":"1","x.V":"2"},"dW":{"o":["1"],"f":["1"],"f.E":"1"},"dX":{"a4":["1"]},"fK":{"n0":[]},"cp":{"aF":[]},"d3":{"z":["1"],"aF":[]},"co":{"h":["N"],"z":["N"],"m":["N"],"o":["N"],"aF":[],"f":["N"],"aq":["N"],"h.E":"N"},"e2":{"h":["i"],"z":["i"],"m":["i"],"o":["i"],"aF":[],"f":["i"],"aq":["i"]},"e1":{"h":["N"],"mk":[],"z":["N"],"m":["N"],"o":["N"],"aF":[],"f":["N"],"aq":["N"],"h.E":"N"},"fL":{"h":["i"],"z":["i"],"m":["i"],"o":["i"],"aF":[],"f":["i"],"aq":["i"],"h.E":"i"},"fM":{"h":["i"],"z":["i"],"m":["i"],"o":["i"],"aF":[],"f":["i"],"aq":["i"],"h.E":"i"},"fN":{"h":["i"],"z":["i"],"m":["i"],"o":["i"],"aF":[],"f":["i"],"aq":["i"],"h.E":"i"},"fO":{"h":["i"],"z":["i"],"m":["i"],"o":["i"],"aF":[],"f":["i"],"aq":["i"],"h.E":"i"},"fP":{"h":["i"],"z":["i"],"m":["i"],"o":["i"],"aF":[],"f":["i"],"aq":["i"],"h.E":"i"},"d4":{"h":["i"],"pR":[],"z":["i"],"m":["i"],"o":["i"],"aF":[],"f":["i"],"aq":["i"],"h.E":"i"},"e3":{"h":["i"],"pS":[],"z":["i"],"m":["i"],"o":["i"],"aF":[],"f":["i"],"aq":["i"],"h.E":"i"},"eK":{"nx":[]},"hQ":{"L":[]},"eL":{"bT":[],"L":[]},"J":{"ar":["1"]},"eJ":{"ho":[]},"dC":{"L":[]},"aQ":{"en":["1"]},"dk":{"en":["1"]},"eF":{"ns":["1"],"nF":["1"],"cy":["1"]},"dg":{"hD":["1"],"eF":["1"],"ns":["1"],"nF":["1"],"cy":["1"]},"bV":{"eG":["1"],"ct":["1"]},"di":{"em":["1"],"bq":["1"],"cy":["1"]},"em":{"bq":["1"],"cy":["1"]},"eG":{"ct":["1"]},"cx":{"hK":["1"]},"bc":{"bZ":["1"]},"eP":{"nz":[]},"ib":{"eP":[],"nz":[]},"lf":{"az":["1","2"],"x":["1","2"],"jP":["1","2"],"I":["1","2"],"x.K":"1","x.V":"2"},"es":{"az":["1","2"],"x":["1","2"],"jP":["1","2"],"I":["1","2"],"x.K":"1","x.V":"2"},"cB":{"ed":["1"],"nr":["1"],"o":["1"],"f":["1"]},"et":{"a4":["1"]},"dY":{"h":["1"],"m":["1"],"o":["1"],"f":["1"]},"e_":{"x":["1","2"],"I":["1","2"]},"x":{"I":["1","2"]},"eA":{"ed":["1"],"nr":["1"],"o":["1"],"f":["1"]},"ca":{"af":["ca"]},"N":{"P":[],"af":["P"]},"a9":{"af":["a9"]},"i":{"P":[],"af":["P"]},"m":{"o":["1"],"f":["1"]},"P":{"af":["P"]},"p":{"af":["p"],"nl":[]},"dB":{"L":[]},"bT":{"L":[]},"fT":{"L":[]},"b_":{"L":[]},"d6":{"L":[]},"fv":{"L":[]},"hv":{"L":[]},"hs":{"L":[]},"bp":{"L":[]},"fd":{"L":[]},"fW":{"L":[]},"ef":{"L":[]},"fg":{"L":[]},"iq":{"aX":[]},"K":{"q":[],"e":[]},"bl":{"k":[]},"as":{"k":[]},"q":{"e":[]},"au":{"e":[]},"av":{"e":[]},"ac":{"e":[]},"cA":{"aV":[]},"u":{"K":[],"q":[],"e":[]},"cJ":{"K":[],"q":[],"e":[]},"f2":{"K":[],"q":[],"e":[]},"cN":{"K":[],"q":[],"e":[]},"c4":{"K":[],"q":[],"e":[]},"c5":{"K":[],"q":[],"e":[]},"b2":{"q":[],"e":[]},"cU":{"K":[],"q":[],"e":[]},"b6":{"q":[],"e":[]},"dK":{"h":["ba<P>"],"r":["ba<P>"],"m":["ba<P>"],"z":["ba<P>"],"o":["ba<P>"],"f":["ba<P>"],"r.E":"ba<P>","h.E":"ba<P>"},"dL":{"ba":["P"]},"fk":{"h":["p"],"r":["p"],"m":["p"],"z":["p"],"o":["p"],"f":["p"],"r.E":"p","h.E":"p"},"fn":{"h":["ax"],"r":["ax"],"m":["ax"],"z":["ax"],"o":["ax"],"f":["ax"],"r.E":"ax","h.E":"ax"},"fo":{"e":[]},"fq":{"K":[],"q":[],"e":[]},"ce":{"h":["q"],"r":["q"],"m":["q"],"z":["q"],"o":["q"],"f":["q"],"r.E":"q","h.E":"q"},"dR":{"b6":[],"q":[],"e":[]},"dS":{"e":[]},"cf":{"e":[]},"cY":{"K":[],"q":[],"e":[]},"cg":{"K":[],"q":[],"e":[]},"cn":{"K":[],"q":[],"e":[]},"fG":{"x":["p","@"],"I":["p","@"],"x.K":"p","x.V":"@"},"fH":{"x":["p","@"],"I":["p","@"],"x.K":"p","x.V":"@"},"fI":{"h":["aA"],"r":["aA"],"m":["aA"],"z":["aA"],"o":["aA"],"f":["aA"],"r.E":"aA","h.E":"aA"},"aj":{"h":["q"],"m":["q"],"o":["q"],"f":["q"],"h.E":"q"},"e4":{"h":["q"],"r":["q"],"m":["q"],"z":["q"],"o":["q"],"f":["q"],"r.E":"q","h.E":"q"},"h_":{"h":["aB"],"r":["aB"],"m":["aB"],"z":["aB"],"o":["aB"],"f":["aB"],"r.E":"aB","h.E":"aB"},"h6":{"x":["p","@"],"I":["p","@"],"x.K":"p","x.V":"@"},"h8":{"K":[],"q":[],"e":[]},"hb":{"h":["au"],"r":["au"],"m":["au"],"z":["au"],"e":[],"o":["au"],"f":["au"],"r.E":"au","h.E":"au"},"hc":{"h":["aC"],"r":["aC"],"m":["aC"],"z":["aC"],"o":["aC"],"f":["aC"],"r.E":"aC","h.E":"aC"},"hg":{"x":["p","p"],"I":["p","p"],"x.K":"p","x.V":"p"},"eh":{"K":[],"q":[],"e":[]},"hj":{"K":[],"q":[],"e":[]},"hk":{"K":[],"q":[],"e":[]},"db":{"K":[],"q":[],"e":[]},"hm":{"h":["ac"],"r":["ac"],"m":["ac"],"z":["ac"],"o":["ac"],"f":["ac"],"r.E":"ac","h.E":"ac"},"hn":{"h":["av"],"r":["av"],"m":["av"],"z":["av"],"e":[],"o":["av"],"f":["av"],"r.E":"av","h.E":"av"},"hp":{"h":["aE"],"r":["aE"],"m":["aE"],"z":["aE"],"o":["aE"],"f":["aE"],"r.E":"aE","h.E":"aE"},"bb":{"k":[]},"dd":{"K":[],"q":[],"e":[]},"hx":{"e":[]},"df":{"kQ":[],"e":[]},"dh":{"q":[],"e":[]},"hH":{"h":["H"],"r":["H"],"m":["H"],"z":["H"],"o":["H"],"f":["H"],"r.E":"H","h.E":"H"},"eo":{"ba":["P"]},"hV":{"h":["ay?"],"r":["ay?"],"m":["ay?"],"z":["ay?"],"o":["ay?"],"f":["ay?"],"r.E":"ay?","h.E":"ay?"},"ev":{"h":["q"],"r":["q"],"m":["q"],"z":["q"],"o":["q"],"f":["q"],"r.E":"q","h.E":"q"},"ih":{"h":["aD"],"r":["aD"],"m":["aD"],"z":["aD"],"o":["aD"],"f":["aD"],"r.E":"aD","h.E":"aD"},"ir":{"h":["ah"],"r":["ah"],"m":["ah"],"z":["ah"],"o":["ah"],"f":["ah"],"r.E":"ah","h.E":"ah"},"hF":{"x":["p","p"],"I":["p","p"]},"hP":{"x":["p","p"],"I":["p","p"],"x.K":"p","x.V":"p"},"ep":{"ct":["1"]},"bW":{"ep":["1"],"ct":["1"]},"eq":{"bq":["1"]},"e5":{"aV":[]},"eB":{"aV":[]},"it":{"aV":[]},"is":{"aV":[]},"cc":{"a4":["1"]},"hJ":{"kQ":[],"e":[]},"id":{"pT":[]},"eO":{"py":[]},"hY":{"nm":[]},"fA":{"h":["aJ"],"r":["aJ"],"m":["aJ"],"o":["aJ"],"f":["aJ"],"r.E":"aJ","h.E":"aJ"},"fU":{"h":["aM"],"r":["aM"],"m":["aM"],"o":["aM"],"f":["aM"],"r.E":"aM","h.E":"aM"},"d9":{"n":[],"K":[],"q":[],"e":[]},"hi":{"h":["p"],"r":["p"],"m":["p"],"o":["p"],"f":["p"],"r.E":"p","h.E":"p"},"n":{"K":[],"q":[],"e":[]},"hq":{"h":["aO"],"r":["aO"],"m":["aO"],"o":["aO"],"f":["aO"],"r.E":"aO","h.E":"aO"},"dE":{"F":[],"e":[]},"c3":{"e":[]},"F":{"e":[]},"f4":{"x":["p","@"],"I":["p","@"],"x.K":"p","x.V":"@"},"bg":{"F":[],"e":[]},"f5":{"e":[]},"dF":{"e":[]},"cX":{"F":[],"e":[]},"fV":{"e":[]},"hd":{"h":["I<@,@>"],"r":["I<@,@>"],"m":["I<@,@>"],"o":["I<@,@>"],"f":["I<@,@>"],"r.E":"I<@,@>","h.E":"I<@,@>"},"lq":{"f":["1"],"f.E":"1"},"cC":{"a4":["1"]},"cI":{"dQ":[]},"b3":{"ao":[]},"bQ":{"ao":[]},"bR":{"ao":[]},"cR":{"ao":[]},"bO":{"ao":[]},"h4":{"ao":[]},"ea":{"ao":[]},"h5":{"ao":[]},"bE":{"ao":[]},"a1":{"l":[]},"d1":{"a1":["i"],"l":[],"a1.T":"i"},"d0":{"a1":["i"],"l":[],"a1.T":"i"},"bS":{"dQ":[]},"fD":{"dQ":[]},"fQ":{"a2":[]},"e9":{"a2":[]},"aL":{"a2":[]},"da":{"a2":[]},"fB":{"a2":[]},"ei":{"a2":[]},"dD":{"a2":[]},"dJ":{"a2":[]},"f6":{"a2":[]},"hu":{"a2":[]},"e8":{"a2":[]},"h1":{"a2":[]},"cq":{"af":["cq"]},"ha":{"pN":[]},"hy":{"b4":["j"]},"dz":{"b4":["1"]},"e7":{"b4":["1"]},"fa":{"b4":["j"]},"f0":{"b4":["j"]},"ff":{"b4":["j"]},"dw":{"b4":["j"]},"mk":{"m":["N"],"o":["N"],"f":["N"],"aF":[]}}'))
A.qf(v.typeUniverse,JSON.parse('{"o":1,"d3":1,"dY":1,"e_":2,"eA":1,"eu":1,"eQ":1}'))
var u={h:"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",q:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",p:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",l:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",j:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x , u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n    float source_strength = u_source_strength + sin(u_time * 2.0);\n    float dist = distance(snapped_position, (u_source_position + vec2(0.5, 0.5)) * u_block_size) / 50.0;\n    if (dist > source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, source_strength, dist);\n    outColor = vec4(u_source_color.rgb, scale);\n}\n",B:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // front and back textures are already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 front = texture(u_light_texture, d);\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  // front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.ae
return{gS:s("@<~>"),mm:s("f1"),bB:s("W"),lE:s("an"),u:s("dC"),bD:s("b0"),az:s("cN"),hp:s("c4"),lo:s("n0"),p:s("c5"),nK:s("cP"),n6:s("af<v?>"),d5:s("H"),cs:s("ca"),mX:s("cU"),dA:s("b6"),jW:s("bK"),L:s("a9"),ox:s("mg"),gt:s("o<@>"),h:s("K"),v:s("ap"),aW:s("fl"),b:s("cb"),fz:s("L"),R:s("k"),et:s("ax"),C:s("mk"),r:s("cd"),U:s("ar<@>"),m:s("ag<i,l>"),eT:s("Z<ck>"),f5:s("Z<cu>"),eN:s("Z<ai>"),nr:s("Z<bS>"),ba:s("Z<dc>"),de:s("Z<N>"),oQ:s("Z<aI?>"),hQ:s("cY"),h8:s("a3"),fY:s("cg"),lZ:s("aI"),hl:s("f<q>"),e7:s("f<@>"),c7:s("t<cI>"),if:s("t<cL>"),G:s("t<X>"),a:s("t<ao>"),E:s("t<b1>"),fy:s("t<bF>"),Q:s("t<fe>"),X:s("t<aT>"),pl:s("t<mg>"),c:s("t<ap>"),w:s("t<a2>"),iw:s("t<ar<~>>"),ow:s("t<dQ>"),ge:s("t<a3>"),Y:s("t<ch>"),I:s("t<aI>"),lB:s("t<b7>"),do:s("t<m<j>>"),lN:s("t<aV>"),hf:s("t<v>"),d:s("t<fX>"),q:s("t<j>"),ff:s("t<h3>"),fk:s("t<d8>"),fF:s("t<he>"),s:s("t<p>"),oe:s("t<ej>"),o:s("t<w>"),B:s("t<aP>"),D:s("t<el>"),n:s("t<N>"),dG:s("t<@>"),t:s("t<i>"),g2:s("t<P>"),f7:s("t<~()>"),ev:s("t<~(a9)>"),T:s("dV"),dY:s("bk"),dX:s("z<@>"),g:s("bl"),kT:s("aJ"),k:s("m<cI>"),mw:s("m<ap>"),i8:s("m<j>"),bd:s("m<N>"),oH:s("dZ"),gM:s("ck"),cM:s("I<j,ap>"),ea:s("I<p,@>"),av:s("I<@,@>"),gQ:s("cm<p,p>"),gX:s("d0"),e:s("d1"),li:s("Y"),ib:s("aA"),ee:s("bo"),V:s("as"),A:s("q"),hU:s("aV"),P:s("U"),ai:s("aM"),K:s("v"),p6:s("cq"),ni:s("fZ"),d8:s("aB"),j:s("j"),o5:s("nm"),kB:s("at"),mx:s("ba<P>"),cH:s("d7"),nZ:s("d9"),fm:s("au"),cA:s("aC"),hH:s("aD"),hd:s("a5"),l:s("aX"),N:s("p"),gL:s("p(p)"),lv:s("ah"),bC:s("n"),fD:s("db"),dt:s("cu"),dy:s("ai"),dQ:s("av"),gJ:s("ac"),lJ:s("br"),W:s("bS"),ns:s("dc"),iK:s("ho"),ki:s("aE"),hk:s("aO"),fH:s("ej"),ha:s("nx"),bE:s("bT"),jv:s("aF"),cx:s("cw"),eL:s("dd"),kL:s("a6<W>"),b1:s("a6<an>"),eo:s("a6<Y>"),au:s("a6<at>"),c1:s("el"),kg:s("kQ"),l7:s("hz"),oJ:s("aQ<b0>"),fB:s("aQ<br>"),ou:s("aQ<~>"),nD:s("dh"),aN:s("hE"),e0:s("aj"),bz:s("bW<k>"),eX:s("bW<as>"),og:s("J<b0>"),aa:s("J<br>"),f:s("J<@>"),hy:s("J<i>"),cU:s("J<~>"),dl:s("cA"),d1:s("il<v?>"),iF:s("dk<~>"),im:s("iw"),o3:s("iB"),k4:s("A"),ei:s("A(W)"),g9:s("A(an)"),eU:s("A(Y)"),iW:s("A(v)"),hZ:s("A(at)"),i:s("N"),z:s("@"),mY:s("@()"),y:s("@(v)"),ng:s("@(v,aX)"),p1:s("@(@,@)"),S:s("i"),eK:s("0&*"),_:s("v*"),iB:s("e?"),gK:s("ar<U>?"),ef:s("ay?"),O:s("aI?"),iD:s("v?"),F:s("cz<@,@>?"),nF:s("i0?"),du:s("@(k)?"),Z:s("~()?"),p0:s("~(b0)?"),lW:s("~(bK)?"),oV:s("~(k)?"),jV:s("~(bl)?"),b9:s("~(as)?"),cZ:s("P"),H:s("~"),M:s("~()"),gz:s("~([~])"),x:s("~(a9)"),nt:s("~(a2)"),i6:s("~(v)"),fQ:s("~(v,aX)"),bm:s("~(p,p)"),J:s("~(p,@)"),my:s("~(ho)"),hv:s("~(P)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.bM=A.cJ.prototype
B.aM=A.dE.prototype
B.c0=A.c3.prototype
B.c1=A.f3.prototype
B.aN=A.c4.prototype
B.E=A.c5.prototype
B.cc=A.cP.prototype
B.q=A.cT.prototype
B.dp=A.fj.prototype
B.dt=A.cX.prototype
B.du=A.dR.prototype
B.dv=A.dS.prototype
B.dx=A.cg.prototype
B.dy=J.a.prototype
B.a=J.t.prototype
B.dA=J.dT.prototype
B.e=J.dU.prototype
B.c=J.cZ.prototype
B.x=J.bM.prototype
B.dB=J.bk.prototype
B.bn=A.e1.prototype
B.e9=A.d4.prototype
B.ay=A.e3.prototype
B.bp=J.fY.prototype
B.f=A.d7.prototype
B.bx=A.eh.prototype
B.aH=J.cw.prototype
B.bE=A.df.prototype
B.aF=new A.ai("table")
B.bF=new A.dw(B.aF)
B.ae=new A.ai("bookshelf")
B.bG=new A.dw(B.ae)
B.aI=new A.dx("rounds")
B.bT=new A.W("",0,0,0,99)
B.H=new A.b1("surface")
B.y=new A.b1("caves")
B.z=new A.b1("deepCaves")
B.B=new A.b1("facility")
B.u=new A.b1("ruins")
B.af=new A.b1("village")
B.ag=new A.b1("snow")
B.c2=new A.f0()
B.el=new A.dz(A.ae("dz<j>"))
B.ah=new A.fa()
B.ai=new A.ff()
B.aO=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.c3=function() {
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
B.c8=function(getTagFallback) {
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
B.c4=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.c5=function(hooks) {
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
B.c7=function(hooks) {
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
B.c6=function(hooks) {
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
B.aP=function(hooks) { return hooks; }

B.aQ=new A.kb()
B.c9=new A.e7(A.ae("e7<j>"))
B.ca=new A.fW()
B.D=new A.ks()
B.v=new A.hY()
B.j=new A.ib()
B.cb=new A.iq()
B.aR=new A.c6("north")
B.aS=new A.c6("south")
B.aT=new A.c6("east")
B.aU=new A.c6("west")
B.aV=new A.cQ("none")
B.cd=new A.cQ("ignoreAgents")
B.Y=new A.cQ("ignoreAgentsAndUnlockedDoors")
B.aj=new A.cQ("normal")
B.ce=new A.l(1660944383)
B.cf=new A.l(3707764736)
B.aW=new A.l(4278190080)
B.cF=new A.l(4286941355)
B.cP=new A.l(4291232805)
B.d1=new A.l(4294278144)
B.dm=new A.b5("acid")
B.aX=new A.b5("cold")
B.aY=new A.b5("electricity")
B.Z=new A.b5("fire")
B.dn=new A.b5("sonic")
B.a_=new A.b5("bludgeoning")
B.ak=new A.b5("piercing")
B.aZ=new A.b5("slashing")
B.b_=new A.bJ("d3")
B.a0=new A.bJ("d4")
B.I=new A.bJ("d6")
B.al=new A.bJ("d8")
B.b0=new A.bJ("d12")
B.am=new A.bJ("d20")
B.J=new A.aT("se")
B.K=new A.aT("ne")
B.L=new A.aT("sw")
B.M=new A.aT("nw")
B.k=new A.aT("n")
B.l=new A.aT("e")
B.m=new A.aT("s")
B.n=new A.aT("w")
B.dq=new A.a9(0)
B.dr=new A.a9(25e4)
B.ds=new A.a9(8000)
B.N=new A.cb("primaryMelee")
B.r=new A.cb("primaryRanged")
B.O=new A.cb("armor")
B.a1=new A.a3("north")
B.a2=new A.a3("east")
B.b1=new A.a3("autoexplore")
B.b2=new A.a3("reload")
B.a3=new A.a3("south")
B.a4=new A.a3("west")
B.dw=new A.a3("skip")
B.b3=new A.a3("fire")
B.b4=new A.a3("look")
B.b5=new A.a3("reset")
B.b6=new A.a3("activate")
B.an=new A.a_("none")
B.ao=new A.a_("stairsUp")
B.a5=new A.a_("tree")
B.a6=new A.a_("bookshelf")
B.P=new A.a_("mechanism")
B.a7=new A.a_("activatedMechanism")
B.a8=new A.a_("chest")
B.Q=new A.a_("mechanicalLight")
B.R=new A.a_("stairsDown")
B.w=new A.a_("door")
B.S=new A.a_("openDoor")
B.T=new A.a_("lockedDoor")
B.F=new A.a_("grass")
B.U=new A.a_("torch")
B.a9=new A.a_("table")
B.aa=new A.a_("chair")
B.ap=new A.b7("melee")
B.aq=new A.b7("ranged")
B.ar=new A.b7("armor")
B.as=new A.b7("other")
B.dz=new A.b7("consumable")
B.b7=new A.b7("corpse")
B.at=new A.b7("ammo")
B.dC=new A.jU("water")
B.aJ=new A.cL("light")
B.aK=new A.cL("heavy")
B.aL=new A.cL("powered")
B.eE=A.c(s([B.aJ,B.aK,B.aL]),t.if)
B.bN=new A.an(1)
B.bO=new A.an(1)
B.bP=new A.an(1)
B.bQ=new A.an(1)
B.eA=A.c(s([B.aL]),t.if)
B.bR=new A.an(2)
B.eB=A.c(s([B.aJ,B.aK]),t.if)
B.bS=new A.an(2)
B.dD=A.c(s([B.bN,B.bO,B.bP,B.bQ,B.bR,B.bS]),A.ae("t<an>"))
B.b8=A.c(s([24,36]),t.n)
B.dE=A.c(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
B.dF=A.c(s([B.aR,B.aS,B.aT,B.aU]),A.ae("t<c6>"))
B.au=A.c(s([B.J,B.K,B.L,B.M,B.k,B.l,B.m,B.n]),t.X)
B.ey=new A.ft("oneHand")
B.ex=new A.c9("staggered")
B.em=new A.bI()
B.ei=new A.aP("stun")
B.bD=new A.aP("powered")
B.dI=A.c(s([B.ei,B.bD]),t.B)
B.bI=new A.dx("charge")
B.bK=new A.dy(B.bI,20)
B.ea=new A.at("Zero pistol",B.aX,B.I,5,B.bK,60)
B.et=new A.c9("none")
B.en=new A.bI()
B.X=new A.aP("analog")
B.eC=A.c(s([B.X]),t.B)
B.bL=new A.dy(B.aI,9)
B.V=new A.at("Tac Pistol",B.ak,B.I,1,B.bL,30)
B.ew=new A.c9("burn")
B.eo=new A.bI()
B.ej=new A.aP("line")
B.ek=new A.aP("unwieldy")
B.eD=A.c(s([B.ej,B.ek]),t.B)
B.bH=new A.dx("petro")
B.bJ=new A.dy(B.bH,20)
B.eb=new A.at("Flame Rifle",B.Z,B.al,2,B.bJ,25)
B.dG=A.c(s([B.ea,B.V,B.eb]),A.ae("t<at>"))
B.b9=A.c(s([B.k,B.m]),t.X)
B.ba=A.c(s([B.l,B.n]),t.X)
B.bB=new A.aP("archaic")
B.dO=A.c(s([B.bB,B.X]),t.B)
B.e5=new A.Y(B.a_,1,B.I,0,"Club",B.dO)
B.eh=new A.aP("operative")
B.bc=A.c(s([B.X,B.eh]),t.B)
B.e2=new A.Y(B.a_,1,B.a0,1,"Tactical Baton",B.bc)
B.e3=new A.Y(B.aZ,1,B.a0,1,"Survival Knife",B.bc)
B.ez=new A.ft("twoHand")
B.bC=new A.aP("block")
B.dH=A.c(s([B.X,B.bC]),t.B)
B.e_=new A.Y(B.ak,1,B.I,1,"Tactical Spear",B.dH)
B.ep=new A.bI()
B.bb=A.c(s([B.bD]),t.B)
B.es=new A.k_()
B.e4=new A.Y(B.Z,2,B.a0,7,"Flame Sword",B.bb)
B.ev=new A.c9("wound")
B.eq=new A.bI()
B.e1=new A.Y(B.Z,2,B.al,9,"Plasma Sword",B.bb)
B.eu=new A.c9("arc")
B.er=new A.bI()
B.dZ=new A.Y(B.aY,1,B.b0,8,"Shock Staff",B.dI)
B.dJ=A.c(s([B.e5,B.e2,B.e3,B.e_,B.e4,B.e1,B.dZ]),A.ae("t<Y>"))
B.C=A.c(s([-1,3,-1,-1,3,-1]),t.n)
B.dK=A.c(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
B.ab=A.c(s([]),t.Q)
B.dM=A.c(s([]),t.X)
B.h=A.c(s([]),t.w)
B.dL=A.c(s([]),A.ae("t<U>"))
B.bd=A.c(s([]),t.s)
B.bZ=new A.W("Second Skin",1,1,2,5)
B.c_=new A.W("Estex Suit I",1,0,1,5)
B.bW=new A.W("Flight Suit",1,0,1,6)
B.bX=new A.W("Freebooter Armor I",2,2,3,4)
B.bU=new A.W("Kasatha microcord I",2,1,3,3)
B.bV=new A.W("Ceremonial Plate",1,1,3,2)
B.bY=new A.W("Golemforged Plating",1,2,5,0)
B.dN=A.c(s([B.bZ,B.c_,B.bW,B.bX,B.bU,B.bV,B.bY]),A.ae("t<W>"))
B.bs=new A.bN("north")
B.bt=new A.bN("south")
B.bu=new A.bN("east")
B.bv=new A.bN("west")
B.bw=new A.bN("center")
B.be=A.c(s([B.bs,B.bt,B.bu,B.bv,B.bw]),A.ae("t<bN>"))
B.bf=A.c(s(["bind","if","ref","repeat","syntax"]),t.s)
B.av=A.c(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
B.bg=new A.ck("lockedDoor")
B.dQ=new A.ck("doorMechanism")
B.bh=new A.ck("none")
B.cW=new A.l(4293457385)
B.cQ=new A.l(4291356361)
B.cJ=new A.l(4289058471)
B.cD=new A.l(4286695300)
B.cy=new A.l(4284922730)
B.ct=new A.l(4283215696)
B.cq=new A.l(4282622023)
B.co=new A.l(4281896508)
B.cm=new A.l(4281236786)
B.ci=new A.l(4279983648)
B.bi=new A.ag([50,B.cW,100,B.cQ,200,B.cJ,300,B.cD,400,B.cy,500,B.ct,600,B.cq,700,B.co,800,B.cm,900,B.ci],t.m)
B.dj=new A.l(4294966759)
B.di=new A.l(4294965700)
B.dh=new A.l(4294964637)
B.dg=new A.l(4294963574)
B.df=new A.l(4294962776)
B.dd=new A.l(4294961979)
B.d5=new A.l(4294826037)
B.d4=new A.l(4294688813)
B.d3=new A.l(4294551589)
B.d2=new A.l(4294278935)
B.bj=new A.ag([50,B.dj,100,B.di,200,B.dh,300,B.dg,400,B.df,500,B.dd,600,B.d5,700,B.d4,800,B.d3,900,B.d2],t.m)
B.d_=new A.l(4293913577)
B.cT=new A.l(4292332744)
B.cN=new A.l(4290554532)
B.cI=new A.l(4288776319)
B.cG=new A.l(4287458915)
B.cC=new A.l(4286141768)
B.cA=new A.l(4285353025)
B.cw=new A.l(4284301367)
B.cu=new A.l(4283315246)
B.cp=new A.l(4282263331)
B.dR=new A.ag([50,B.d_,100,B.cT,200,B.cN,300,B.cI,400,B.cG,500,B.cC,600,B.cA,700,B.cw,800,B.cu,900,B.cp],t.m)
B.cX=new A.l(4293718001)
B.cR=new A.l(4291811548)
B.cK=new A.l(4289773253)
B.cH=new A.l(4287669422)
B.cB=new A.l(4286091420)
B.cx=new A.l(4284513675)
B.cv=new A.l(4283723386)
B.cs=new A.l(4282735204)
B.cn=new A.l(4281812815)
B.cj=new A.l(4280693304)
B.bk=new A.ag([50,B.cX,100,B.cR,200,B.cK,300,B.cH,400,B.cB,500,B.cx,600,B.cv,700,B.cs,800,B.cn,900,B.cj],t.m)
B.aw=new A.ag([B.O,null,B.N,null,B.r,null],A.ae("ag<cb,aI?>"))
B.eF=new A.dI(0,{},B.bd,A.ae("dI<p,@>"))
B.cE=new A.l(4286755327)
B.cr=new A.l(4282682111)
B.cl=new A.l(4280908287)
B.ck=new A.l(4280902399)
B.dT=new A.ag([100,B.cE,200,B.cr,400,B.cl,700,B.ck],t.m)
B.da=new A.l(4294955392)
B.d8=new A.l(4294945600)
B.d7=new A.l(4294938880)
B.d6=new A.l(4294929664)
B.dV=new A.ag([100,B.da,200,B.d8,400,B.d7,700,B.d6],t.m)
B.cM=new A.l(4290377418)
B.cz=new A.l(4285132974)
B.ch=new A.l(4278249078)
B.cg=new A.l(4278241363)
B.dU=new A.ag([100,B.cM,200,B.cz,400,B.ch,700,B.cg],t.m)
B.dX=new A.d0(B.dU,4285132974)
B.dl=new A.l(4294967181)
B.dk=new A.l(4294967040)
B.dc=new A.l(4294961664)
B.db=new A.l(4294956544)
B.dW=new A.ag([100,B.dl,200,B.dk,400,B.dc,700,B.db],t.m)
B.dY=new A.d0(B.dW,4294967040)
B.bl=new A.d1(B.bj,4294961979)
B.de=new A.l(4294962158)
B.d9=new A.l(4294954450)
B.cZ=new A.l(4293892762)
B.cV=new A.l(4293227379)
B.cY=new A.l(4293874512)
B.d0=new A.l(4294198070)
B.cU=new A.l(4293212469)
B.cS=new A.l(4292030255)
B.cO=new A.l(4291176488)
B.cL=new A.l(4290190364)
B.dS=new A.ag([50,B.de,100,B.d9,200,B.cZ,300,B.cV,400,B.cY,500,B.d0,600,B.cU,700,B.cS,800,B.cO,900,B.cL],t.m)
B.ax=new A.d1(B.dS,4294198070)
B.eg=new A.aP("nonlethal")
B.dP=A.c(s([B.bB,B.eg,B.X]),t.B)
B.e0=new A.Y(B.a_,1,B.b_,0,"Fists",B.dP)
B.bm=new A.d2("wildBoar")
B.e6=new A.d2("zyborgMelee")
B.e7=new A.d2("zyborgRanged")
B.e8=new A.d2("caveScanner")
B.bo=new A.fX("elementalAffinity")
B.A=new A.j(0,0)
B.ac=new A.ec("small")
B.bq=new A.ec("medium")
B.br=new A.ec("large")
B.az=new A.ee("melee")
B.aA=new A.ee("ranged")
B.aB=new A.ee("armor")
B.aC=new A.cu("dirt")
B.G=new A.cu("metal")
B.ec=new A.cu("snow")
B.W=new A.ai("door")
B.ed=new A.ai("grass")
B.aD=new A.ai("mechanicalLight")
B.aE=new A.ai("light")
B.p=new A.ai("none")
B.by=new A.ai("chair")
B.ad=new A.ai("chest")
B.bz=new A.ai("mechanism")
B.bA=new A.ai("tree")
B.i=new A.dc("floor")
B.b=new A.dc("wall")
B.ee=A.rD("v")
B.t=new A.cv("float_1")
B.d=new A.cv("float_2")
B.ef=new A.cv("float_3")
B.aG=new A.cv("float_4")
B.o=new A.cv("texture_1")})();(function staticFields(){$.ld=null
$.bh=0
$.dG=null
$.mZ=null
$.o3=null
$.o_=null
$.oa=null
$.lD=null
$.lJ=null
$.mI=null
$.dp=null
$.eR=null
$.eS=null
$.mC=!1
$.E=B.j
$.aG=A.c([],t.hf)
$.bL=null
$.mh=null
$.n4=null
$.n3=null
$.er=A.aa(t.N,t.r)
$.n7=0
$.qu=A.bm(["ArrowUp",B.a1,"ArrowDown",B.a3,"ArrowRight",B.a2,"ArrowLeft",B.a4,"q",B.b3," ",B.b6,"0",B.b1,"l",B.b4,"w",B.a1,"a",B.a4,"s",B.a3,"d",B.a2,"Escape",B.b5,"r",B.b2],t.N,t.h8)
$.cD=A.mv("engine")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"rR","of",function(){return A.re("_$dart_dartClosure")})
s($,"tg","op",function(){return A.bs(A.kK({
toString:function(){return"$receiver$"}}))})
s($,"th","oq",function(){return A.bs(A.kK({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"ti","or",function(){return A.bs(A.kK(null))})
s($,"tj","os",function(){return A.bs(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"tm","ov",function(){return A.bs(A.kK(void 0))})
s($,"tn","ow",function(){return A.bs(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"tl","ou",function(){return A.bs(A.ny(null))})
s($,"tk","ot",function(){return A.bs(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"tp","oy",function(){return A.bs(A.ny(void 0))})
s($,"to","ox",function(){return A.bs(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"ts","mM",function(){return A.pV()})
s($,"tD","mb",function(){return A.lN(B.ee)})
s($,"rP","oe",function(){return{}})
s($,"tt","oz",function(){return A.nf(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rV","mK",function(){return B.x.bp(A.mf(),"Opera",0)})
s($,"rU","oi",function(){return!A.O($.mK())&&B.x.bp(A.mf(),"Trident/",0)})
s($,"rT","oh",function(){return B.x.bp(A.mf(),"Firefox",0)})
s($,"rS","og",function(){return"-"+$.oj()+"-"})
s($,"rW","oj",function(){if(A.O($.oh()))var q="moz"
else if($.oi())q="ms"
else q=A.O($.mK())?"o":"webkit"
return q})
s($,"t6","oo",function(){return A.c([$.oQ(),$.oR(),$.oS(),$.oD(),$.oO()],A.ae("t<bo>"))})
s($,"u2","oQ",function(){return A.fJ(A.f_(4,6,8,4,4,8),new A.m2(),A.c([B.H],t.E),"death_1.mp3",new A.m3(),B.bm,0,4,"Wild Boar",new A.m4())})
s($,"u0","oO",function(){return A.fJ(A.f_(4,6,8,4,4,10),new A.lX(),A.c([B.ag],t.E),"death_1.mp3",new A.lY(),B.bm,2,4,"Snow Bear",new A.lZ())})
s($,"u3","oR",function(){return A.fJ(A.f_(4,8,8,4,4,10),new A.m5(),A.c([B.y,B.z,B.B,B.u],t.E),"monster_scream_1.mp3",new A.m6(),B.e6,1,6,"Zyborg",new A.m7())})
s($,"u4","oS",function(){return A.fJ(A.f_(4,8,10,4,4,10),new A.m8(),A.c([B.y,B.z,B.B,B.u],t.E),"monster_scream_1.mp3",new A.m9(),B.e7,2,6,"Zyborg Ranged",new A.ma())})
s($,"tI","oD",function(){return A.fJ(A.f_(4,6,12,6,4,6),new A.lA(),A.c([B.y,B.z,B.B,B.u],t.E),null,new A.lB(),B.e8,3,6,"Cave Scanner",new A.lC())})
s($,"tL","mN",function(){var q=A.c([A.bU(B.d,"u_resolution"),A.bU(B.t,"u_time"),A.bU(B.d,"u_offset"),A.bU(B.d,"u_origin")],t.o)
return A.aU(A.c([A.mY(35044,A.ni(B.C),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\nuniform vec2 u_origin;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  float dist = distance(snapped_position, (u_origin + vec2(0.5, 0.5)) * vec2(24.0, 36.0)) / 50.0;\n  float rand = -1.0 + random(relative_position) / 2.0;\n  float scale_rate = 0.8 * (u_time);\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(249.0 / 255.0, 168.0 / 255.0, 37.0 / 255.0, scale);\n}\n",q,u.h)})
s($,"tP","oH",function(){var q=A.c([A.bU(B.d,"u_resolution"),A.bU(B.t,"u_time"),A.bU(B.d,"u_offset"),A.bU(B.d,"u_source"),A.bU(B.d,"u_target")],t.o)
return A.aU(A.c([A.mY(35044,A.ni(B.C),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nuniform vec2 u_source;\nuniform vec2 u_target;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 p0 = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  vec2 p1 = (u_source + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n  vec2 p2 = (u_target + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n\n  if ((p1.x != p2.x) && (p0.x < p1.x && p0.x < p2.x) || (p0.x > p1.x && p0.x > p2.x)) {\n    discard;\n    return;\n  }\n  if ((p1.y != p2.y) && (p0.y < p1.y && p0.y < p2.y) || (p0.y > p1.y && p0.y > p2.y)) {\n    discard;\n    return;\n  }\n\n  float dist = abs( (p2.x - p1.x) * (p1.y - p0.y) - (p1.x - p0.x) * (p2.y - p1.y) ) / sqrt( pow(p2.x - p1.x, 2.0) + pow(p2.y - p1.y, 2.0) );\n  float rand = random(relative_position);\n  float scale_rate = 1.5;\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = 1.0 - smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(0.1, 0.2, 1.0, 0.8 * scale - u_time);\n}\n",q,u.h)})
s($,"ta","du",function(){return new A.kf()})
s($,"rX","ok",function(){return A.h2()})
s($,"t2","mL",function(){return A.mr(A.bG(4278780675),A.bG(4279308561),A.bG(4280361249))})
s($,"t3","ol",function(){return A.mr(A.bG(4279898637),A.bG(4281017118),A.bG(4282858034))})
s($,"t5","on",function(){return A.mr(A.bG(4279765786),A.bG(4280096038),A.bG(4282463311))})
s($,"t4","om",function(){return $.mL()})
s($,"tE","dv",function(){return A.h2()})
r($,"tH","oC",function(){var q,p,o=A.c([],t.q)
for(q=1;q<99;++q)for(p=q;p<39;++p)o.push(A.pz(q,p))
return o})
s($,"tG","oB",function(){return A.h2()})
s($,"tY","mR",function(){return A.de(B.ah,new A.lU())})
s($,"tU","mP",function(){return A.de(B.bF,new A.lQ())})
s($,"tW","eY",function(){return A.de(B.ai,new A.lS())})
s($,"tT","oK",function(){return A.de(B.ah,new A.lP())})
s($,"tV","oL",function(){return A.de(B.ah,new A.lR())})
s($,"tX","mQ",function(){return A.de(B.ai,new A.lT())})
s($,"tS","oJ",function(){return A.de(B.c9,new A.lO())})
s($,"tR","mc",function(){var q=$.mR(),p=$.mP()
return A.c([q,p,p,$.eY()],t.D)})
s($,"tQ","oI",function(){var q=$.oJ()
return A.c([q,q,q,q,q,$.eY(),$.mR(),$.mP()],t.D)})
s($,"tO","oG",function(){var q=$.eY()
return A.c([q,q,q,q],t.D)})
s($,"tN","oF",function(){var q=$.eY(),p=$.oK()
return A.c([q,q,q,q,q,q,p,p,p,p],t.D)})
s($,"u1","oP",function(){return A.c([$.oL(),$.eY()],t.D)})
s($,"tF","oA",function(){return new Uint8Array(A.dl(A.c([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t)))})
s($,"tK","oE",function(){var q=A.h2(),p=A.h2(),o=$.dv(),n=t.t,m=A.ae("t<bo>")
n=new A.jl(new A.j4(p,new A.jG(q)),A.c([A.b9(B.H,1,A.bx(o,60)),A.b9(B.y,2,A.bx(o,40)),A.b9(B.y,3,A.bx(o,40)),A.b9(B.y,4,A.bx(o,40)),A.b9(B.z,5,A.bx(o,20)),A.b9(B.z,6,A.bx(o,20)),A.b9(B.z,7,A.bx(o,20)),A.b9(B.u,8,A.bx(o,10)),A.b9(B.u,9,A.bx(o,10)),A.b9(B.u,10,A.bx(o,10)),A.b9(B.B,11,!1)],A.ae("t<fF>")),A.c([2,4,4,4,6,6,6,10,10,10,12],n),A.c([A.aZ(o,10,25),A.aZ(o,115,125),A.aZ(o,115,125),A.aZ(o,115,125),A.aZ(o,125,135),A.aZ(o,125,135),A.aZ(o,125,135),A.aZ(o,135,145),A.aZ(o,135,145),A.aZ(o,135,145),A.aZ(o,170,200)],n),A.c([A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m),A.c([],m)],A.ae("t<m<bo>>")),A.c([0,0,0,0,0,0,0,0,0,0,0],n),A.aa(t.ee,A.ae("c7")))
n.dX()
n.dV()
return n})
s($,"tM","mO",function(){return t.cH.a(B.E.bL(t.p.a(A.ra().querySelector("#glCanvas")),"webgl2"))})
s($,"u_","oN",function(){return new A.fl()})
s($,"tZ","oM",function(){var q=t.i
return new A.fZ(A.nk(0,q),A.nk(0,q))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:A.fK,DataView:A.cp,ArrayBufferView:A.cp,Float64Array:A.co,Float32Array:A.e1,Int16Array:A.fL,Int32Array:A.fM,Int8Array:A.fN,Uint16Array:A.fO,Uint32Array:A.fP,Uint8ClampedArray:A.d4,CanvasPixelArray:A.d4,Uint8Array:A.e3,HTMLBRElement:A.u,HTMLButtonElement:A.u,HTMLContentElement:A.u,HTMLDListElement:A.u,HTMLDataElement:A.u,HTMLDataListElement:A.u,HTMLDetailsElement:A.u,HTMLDialogElement:A.u,HTMLEmbedElement:A.u,HTMLFieldSetElement:A.u,HTMLHRElement:A.u,HTMLHeadElement:A.u,HTMLHeadingElement:A.u,HTMLHtmlElement:A.u,HTMLIFrameElement:A.u,HTMLLIElement:A.u,HTMLLabelElement:A.u,HTMLLegendElement:A.u,HTMLLinkElement:A.u,HTMLMapElement:A.u,HTMLMenuElement:A.u,HTMLMetaElement:A.u,HTMLMeterElement:A.u,HTMLModElement:A.u,HTMLOListElement:A.u,HTMLObjectElement:A.u,HTMLOptGroupElement:A.u,HTMLOptionElement:A.u,HTMLOutputElement:A.u,HTMLParagraphElement:A.u,HTMLParamElement:A.u,HTMLPictureElement:A.u,HTMLPreElement:A.u,HTMLProgressElement:A.u,HTMLQuoteElement:A.u,HTMLScriptElement:A.u,HTMLShadowElement:A.u,HTMLSlotElement:A.u,HTMLSourceElement:A.u,HTMLSpanElement:A.u,HTMLStyleElement:A.u,HTMLTableCaptionElement:A.u,HTMLTableCellElement:A.u,HTMLTableDataCellElement:A.u,HTMLTableHeaderCellElement:A.u,HTMLTableColElement:A.u,HTMLTextAreaElement:A.u,HTMLTimeElement:A.u,HTMLTitleElement:A.u,HTMLTrackElement:A.u,HTMLUListElement:A.u,HTMLUnknownElement:A.u,HTMLDirectoryElement:A.u,HTMLFontElement:A.u,HTMLFrameElement:A.u,HTMLFrameSetElement:A.u,HTMLMarqueeElement:A.u,HTMLElement:A.u,AccessibleNodeList:A.iT,HTMLAnchorElement:A.cJ,HTMLAreaElement:A.f2,HTMLBaseElement:A.cN,Blob:A.f7,HTMLBodyElement:A.c4,HTMLCanvasElement:A.c5,CanvasRenderingContext2D:A.cP,CDATASection:A.b2,CharacterData:A.b2,Comment:A.b2,ProcessingInstruction:A.b2,Text:A.b2,CSSPerspective:A.je,CSSCharsetRule:A.H,CSSConditionRule:A.H,CSSFontFaceRule:A.H,CSSGroupingRule:A.H,CSSImportRule:A.H,CSSKeyframeRule:A.H,MozCSSKeyframeRule:A.H,WebKitCSSKeyframeRule:A.H,CSSKeyframesRule:A.H,MozCSSKeyframesRule:A.H,WebKitCSSKeyframesRule:A.H,CSSMediaRule:A.H,CSSNamespaceRule:A.H,CSSPageRule:A.H,CSSRule:A.H,CSSStyleRule:A.H,CSSSupportsRule:A.H,CSSViewportRule:A.H,CSSStyleDeclaration:A.cT,MSStyleCSSProperties:A.cT,CSS2Properties:A.cT,CSSImageValue:A.aS,CSSKeywordValue:A.aS,CSSNumericValue:A.aS,CSSPositionValue:A.aS,CSSResourceValue:A.aS,CSSUnitValue:A.aS,CSSURLImageValue:A.aS,CSSStyleValue:A.aS,CSSMatrixComponent:A.bi,CSSRotation:A.bi,CSSScale:A.bi,CSSSkew:A.bi,CSSTranslation:A.bi,CSSTransformComponent:A.bi,CSSTransformValue:A.jg,CSSUnparsedValue:A.jh,DataTransferItemList:A.ji,HTMLDivElement:A.cU,XMLDocument:A.b6,Document:A.b6,DOMException:A.bK,DOMImplementation:A.fj,ClientRectList:A.dK,DOMRectList:A.dK,DOMRectReadOnly:A.dL,DOMStringList:A.fk,DOMTokenList:A.jj,Element:A.K,AbortPaymentEvent:A.k,AnimationEvent:A.k,AnimationPlaybackEvent:A.k,ApplicationCacheErrorEvent:A.k,BackgroundFetchClickEvent:A.k,BackgroundFetchEvent:A.k,BackgroundFetchFailEvent:A.k,BackgroundFetchedEvent:A.k,BeforeInstallPromptEvent:A.k,BeforeUnloadEvent:A.k,BlobEvent:A.k,CanMakePaymentEvent:A.k,ClipboardEvent:A.k,CloseEvent:A.k,CustomEvent:A.k,DeviceMotionEvent:A.k,DeviceOrientationEvent:A.k,ErrorEvent:A.k,ExtendableEvent:A.k,ExtendableMessageEvent:A.k,FetchEvent:A.k,FontFaceSetLoadEvent:A.k,ForeignFetchEvent:A.k,GamepadEvent:A.k,HashChangeEvent:A.k,InstallEvent:A.k,MediaEncryptedEvent:A.k,MediaKeyMessageEvent:A.k,MediaQueryListEvent:A.k,MediaStreamEvent:A.k,MediaStreamTrackEvent:A.k,MessageEvent:A.k,MIDIConnectionEvent:A.k,MIDIMessageEvent:A.k,MutationEvent:A.k,NotificationEvent:A.k,PageTransitionEvent:A.k,PaymentRequestEvent:A.k,PaymentRequestUpdateEvent:A.k,PopStateEvent:A.k,PresentationConnectionAvailableEvent:A.k,PresentationConnectionCloseEvent:A.k,ProgressEvent:A.k,PromiseRejectionEvent:A.k,PushEvent:A.k,RTCDataChannelEvent:A.k,RTCDTMFToneChangeEvent:A.k,RTCPeerConnectionIceEvent:A.k,RTCTrackEvent:A.k,SecurityPolicyViolationEvent:A.k,SensorErrorEvent:A.k,SpeechRecognitionError:A.k,SpeechRecognitionEvent:A.k,SpeechSynthesisEvent:A.k,StorageEvent:A.k,SyncEvent:A.k,TrackEvent:A.k,TransitionEvent:A.k,WebKitTransitionEvent:A.k,VRDeviceEvent:A.k,VRDisplayEvent:A.k,VRSessionEvent:A.k,MojoInterfaceRequestEvent:A.k,ResourceProgressEvent:A.k,USBConnectionEvent:A.k,IDBVersionChangeEvent:A.k,AudioProcessingEvent:A.k,OfflineAudioCompletionEvent:A.k,WebGLContextEvent:A.k,Event:A.k,InputEvent:A.k,SubmitEvent:A.k,AbsoluteOrientationSensor:A.e,Accelerometer:A.e,AccessibleNode:A.e,AmbientLightSensor:A.e,Animation:A.e,ApplicationCache:A.e,DOMApplicationCache:A.e,OfflineResourceList:A.e,BackgroundFetchRegistration:A.e,BatteryManager:A.e,BroadcastChannel:A.e,CanvasCaptureMediaStreamTrack:A.e,DedicatedWorkerGlobalScope:A.e,EventSource:A.e,FileReader:A.e,FontFaceSet:A.e,Gyroscope:A.e,LinearAccelerationSensor:A.e,Magnetometer:A.e,MediaDevices:A.e,MediaKeySession:A.e,MediaQueryList:A.e,MediaRecorder:A.e,MediaSource:A.e,MediaStream:A.e,MediaStreamTrack:A.e,MessagePort:A.e,MIDIAccess:A.e,MIDIInput:A.e,MIDIOutput:A.e,MIDIPort:A.e,NetworkInformation:A.e,Notification:A.e,OffscreenCanvas:A.e,OrientationSensor:A.e,PaymentRequest:A.e,Performance:A.e,PermissionStatus:A.e,PresentationAvailability:A.e,PresentationConnection:A.e,PresentationConnectionList:A.e,PresentationRequest:A.e,RelativeOrientationSensor:A.e,RemotePlayback:A.e,RTCDataChannel:A.e,DataChannel:A.e,RTCDTMFSender:A.e,RTCPeerConnection:A.e,webkitRTCPeerConnection:A.e,mozRTCPeerConnection:A.e,ScreenOrientation:A.e,Sensor:A.e,ServiceWorker:A.e,ServiceWorkerContainer:A.e,ServiceWorkerGlobalScope:A.e,ServiceWorkerRegistration:A.e,SharedWorker:A.e,SharedWorkerGlobalScope:A.e,SpeechRecognition:A.e,SpeechSynthesis:A.e,SpeechSynthesisUtterance:A.e,VR:A.e,VRDevice:A.e,VRDisplay:A.e,VRSession:A.e,VisualViewport:A.e,WebSocket:A.e,Worker:A.e,WorkerGlobalScope:A.e,WorkerPerformance:A.e,BluetoothDevice:A.e,BluetoothRemoteGATTCharacteristic:A.e,Clipboard:A.e,MojoInterfaceInterceptor:A.e,USB:A.e,IDBDatabase:A.e,IDBOpenDBRequest:A.e,IDBVersionChangeRequest:A.e,IDBRequest:A.e,IDBTransaction:A.e,EventTarget:A.e,File:A.ax,FileList:A.fn,FileWriter:A.fo,HTMLFormElement:A.fq,Gamepad:A.ay,History:A.jF,HTMLCollection:A.ce,HTMLFormControlsCollection:A.ce,HTMLOptionsCollection:A.ce,HTMLDocument:A.dR,XMLHttpRequest:A.dS,XMLHttpRequestUpload:A.cf,XMLHttpRequestEventTarget:A.cf,HTMLImageElement:A.cY,HTMLInputElement:A.cg,KeyboardEvent:A.bl,Location:A.dZ,HTMLAudioElement:A.cn,HTMLMediaElement:A.cn,MediaList:A.jZ,MIDIInputMap:A.fG,MIDIOutputMap:A.fH,MimeType:A.aA,MimeTypeArray:A.fI,MouseEvent:A.as,DragEvent:A.as,PointerEvent:A.as,WheelEvent:A.as,DocumentFragment:A.q,ShadowRoot:A.q,DocumentType:A.q,Node:A.q,NodeList:A.e4,RadioNodeList:A.e4,Plugin:A.aB,PluginArray:A.h_,RTCStatsReport:A.h6,HTMLSelectElement:A.h8,SourceBuffer:A.au,SourceBufferList:A.hb,SpeechGrammar:A.aC,SpeechGrammarList:A.hc,SpeechRecognitionResult:A.aD,Storage:A.hg,CSSStyleSheet:A.ah,StyleSheet:A.ah,HTMLTableElement:A.eh,HTMLTableRowElement:A.hj,HTMLTableSectionElement:A.hk,HTMLTemplateElement:A.db,TextTrack:A.av,TextTrackCue:A.ac,VTTCue:A.ac,TextTrackCueList:A.hm,TextTrackList:A.hn,TimeRanges:A.kH,Touch:A.aE,TouchList:A.hp,TrackDefaultList:A.kI,CompositionEvent:A.bb,FocusEvent:A.bb,TextEvent:A.bb,TouchEvent:A.bb,UIEvent:A.bb,URL:A.kL,HTMLVideoElement:A.dd,VideoTrackList:A.hx,Window:A.df,DOMWindow:A.df,Attr:A.dh,CSSRuleList:A.hH,ClientRect:A.eo,DOMRect:A.eo,GamepadList:A.hV,NamedNodeMap:A.ev,MozNamedAttrMap:A.ev,SpeechRecognitionResultList:A.ih,StyleSheetList:A.ir,SVGLength:A.aJ,SVGLengthList:A.fA,SVGNumber:A.aM,SVGNumberList:A.fU,SVGPointList:A.kh,SVGScriptElement:A.d9,SVGStringList:A.hi,SVGAElement:A.n,SVGAnimateElement:A.n,SVGAnimateMotionElement:A.n,SVGAnimateTransformElement:A.n,SVGAnimationElement:A.n,SVGCircleElement:A.n,SVGClipPathElement:A.n,SVGDefsElement:A.n,SVGDescElement:A.n,SVGDiscardElement:A.n,SVGEllipseElement:A.n,SVGFEBlendElement:A.n,SVGFEColorMatrixElement:A.n,SVGFEComponentTransferElement:A.n,SVGFECompositeElement:A.n,SVGFEConvolveMatrixElement:A.n,SVGFEDiffuseLightingElement:A.n,SVGFEDisplacementMapElement:A.n,SVGFEDistantLightElement:A.n,SVGFEFloodElement:A.n,SVGFEFuncAElement:A.n,SVGFEFuncBElement:A.n,SVGFEFuncGElement:A.n,SVGFEFuncRElement:A.n,SVGFEGaussianBlurElement:A.n,SVGFEImageElement:A.n,SVGFEMergeElement:A.n,SVGFEMergeNodeElement:A.n,SVGFEMorphologyElement:A.n,SVGFEOffsetElement:A.n,SVGFEPointLightElement:A.n,SVGFESpecularLightingElement:A.n,SVGFESpotLightElement:A.n,SVGFETileElement:A.n,SVGFETurbulenceElement:A.n,SVGFilterElement:A.n,SVGForeignObjectElement:A.n,SVGGElement:A.n,SVGGeometryElement:A.n,SVGGraphicsElement:A.n,SVGImageElement:A.n,SVGLineElement:A.n,SVGLinearGradientElement:A.n,SVGMarkerElement:A.n,SVGMaskElement:A.n,SVGMetadataElement:A.n,SVGPathElement:A.n,SVGPatternElement:A.n,SVGPolygonElement:A.n,SVGPolylineElement:A.n,SVGRadialGradientElement:A.n,SVGRectElement:A.n,SVGSetElement:A.n,SVGStopElement:A.n,SVGStyleElement:A.n,SVGSVGElement:A.n,SVGSwitchElement:A.n,SVGSymbolElement:A.n,SVGTSpanElement:A.n,SVGTextContentElement:A.n,SVGTextElement:A.n,SVGTextPathElement:A.n,SVGTextPositioningElement:A.n,SVGTitleElement:A.n,SVGUseElement:A.n,SVGViewElement:A.n,SVGGradientElement:A.n,SVGComponentTransferFunctionElement:A.n,SVGFEDropShadowElement:A.n,SVGMPathElement:A.n,SVGElement:A.n,SVGTransform:A.aO,SVGTransformList:A.hq,AudioBuffer:A.b0,AudioBufferSourceNode:A.dE,AudioContext:A.c3,webkitAudioContext:A.c3,AnalyserNode:A.F,RealtimeAnalyserNode:A.F,AudioDestinationNode:A.F,AudioWorkletNode:A.F,BiquadFilterNode:A.F,ChannelMergerNode:A.F,AudioChannelMerger:A.F,ChannelSplitterNode:A.F,AudioChannelSplitter:A.F,ConvolverNode:A.F,DelayNode:A.F,DynamicsCompressorNode:A.F,IIRFilterNode:A.F,MediaElementAudioSourceNode:A.F,MediaStreamAudioDestinationNode:A.F,MediaStreamAudioSourceNode:A.F,PannerNode:A.F,AudioPannerNode:A.F,webkitAudioPannerNode:A.F,ScriptProcessorNode:A.F,JavaScriptAudioNode:A.F,StereoPannerNode:A.F,WaveShaperNode:A.F,AudioNode:A.F,AudioParam:A.f3,AudioParamMap:A.f4,ConstantSourceNode:A.bg,OscillatorNode:A.bg,Oscillator:A.bg,AudioScheduledSourceNode:A.bg,AudioTrackList:A.f5,BaseAudioContext:A.dF,GainNode:A.cX,AudioGainNode:A.cX,OfflineAudioContext:A.fV,WebGLBuffer:A.f8,WebGLFramebuffer:A.fr,WebGLProgram:A.h0,WebGL2RenderingContext:A.d7,WebGLTexture:A.br,WebGLUniformLocation:A.hr,WebGLVertexArrayObject:A.hw,SQLResultSetRowList:A.hd})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,AudioParam:true,AudioParamMap:true,ConstantSourceNode:true,OscillatorNode:true,Oscillator:true,AudioScheduledSourceNode:false,AudioTrackList:true,BaseAudioContext:false,GainNode:true,AudioGainNode:true,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,SQLResultSetRowList:true})
A.d3.$nativeSuperclassTag="ArrayBufferView"
A.ew.$nativeSuperclassTag="ArrayBufferView"
A.ex.$nativeSuperclassTag="ArrayBufferView"
A.co.$nativeSuperclassTag="ArrayBufferView"
A.ey.$nativeSuperclassTag="ArrayBufferView"
A.ez.$nativeSuperclassTag="ArrayBufferView"
A.e2.$nativeSuperclassTag="ArrayBufferView"
A.eC.$nativeSuperclassTag="EventTarget"
A.eD.$nativeSuperclassTag="EventTarget"
A.eH.$nativeSuperclassTag="EventTarget"
A.eI.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.lL
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

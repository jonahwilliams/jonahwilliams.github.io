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
return a?function(c){if(s===null)s=A.mA(b)
return new s(c,this)}:function(){if(s===null)s=A.mA(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.mA(a).prototype
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
a(hunkHelpers,v,w,$)}var A={mf:function mf(){},
nd(a){return new A.cn("Field '"+a+"' has been assigned during initialization.")},
ne(a){return new A.cn("Field '"+a+"' has not been initialized.")},
bX(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mm(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
pI(a,b,c){return A.mm(A.bX(A.bX(c,a),b))},
eR(a,b,c){return a},
ny(a,b,c,d){A.kh(b,"start")
if(c!=null){A.kh(c,"end")
if(b>c)A.S(A.bB(b,0,c,"start",null))}return new A.eg(a,b,c,d.i("eg<0>"))},
ng(a,b,c,d){if(t.gt.b(a))return new A.dM(a,b,c.i("@<0>").F(d).i("dM<1,2>"))
return new A.cp(a,b,c.i("@<0>").F(d).i("cp<1,2>"))},
na(){return new A.bC("No element")},
pj(){return new A.bC("Too many elements")},
pi(){return new A.bC("Too few elements")},
pF(a,b,c){A.hh(a,0,J.ap(a)-1,b,c)},
hh(a,b,c,d,e){if(c-b<=32)A.nt(a,b,c,d,e)
else A.ns(a,b,c,d,e)},
nt(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.az(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a2()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
ns(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.e.Y(a5-a4+1,6),i=a4+j,h=a5-j,g=B.e.Y(a4+a5,2),f=g-j,e=g+j,d=J.az(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a1
a1=a0
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.a_(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
A.hh(a3,a4,r-2,a6,a7)
A.hh(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.a_(a6.$2(d.h(a3,r),b),0);)++r
for(;J.a_(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}A.hh(a3,r,q,a6,a7)}else A.hh(a3,r,q,a6,a7)},
cn:function cn(a){this.a=a},
km:function km(){},
p:function p(){},
b3:function b3(){},
eg:function eg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bz:function bz(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cp:function cp(a,b,c){this.a=a
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
e1:function e1(a,b,c){this.a=a
this.b=b
this.$ti=c},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
ej:function ej(a,b,c){this.a=a
this.b=b
this.$ti=c},
as:function as(){},
pf(a){if(typeof a=="number")return B.c.gw(a)
if(t.ha.b(a))return A.cw(a)
return A.lC(a)},
pg(a){return new A.jC(a)},
og(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
rg(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
B(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dw(a)
return s},
cw(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
kd(a){return A.pv(a)},
pv(a){var s,r,q,p
if(a instanceof A.v)return A.an(A.b9(a),null)
if(J.dr(a)===B.eU||t.cx.b(a)){s=B.aJ(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.an(A.b9(a),null)},
d3(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
pC(a){var s=A.d3(a).getUTCFullYear()+0
return s},
pA(a){var s=A.d3(a).getUTCMonth()+1
return s},
pw(a){var s=A.d3(a).getUTCDate()+0
return s},
px(a){var s=A.d3(a).getUTCHours()+0
return s},
pz(a){var s=A.d3(a).getUTCMinutes()+0
return s},
pB(a){var s=A.d3(a).getUTCSeconds()+0
return s},
py(a){var s=A.d3(a).getUTCMilliseconds()+0
return s},
cH(a){throw A.d(A.o_(a))},
b(a,b){if(a==null)J.ap(a)
throw A.d(A.cG(a,b))},
cG(a,b){var s,r="index"
if(!A.mx(b))return new A.bs(!0,b,r,null)
s=A.K(J.ap(a))
if(b<0||b>=s)return A.T(b,a,r,null,s)
return A.nm(b,r)},
o_(a){return new A.bs(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.h_()
s=new Error()
s.dartException=a
r=A.rv
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
rv(){return J.dw(this.dartException)},
S(a){throw A.d(a)},
y(a){throw A.d(A.be(a))},
bG(a){var s,r,q,p,o,n
a=A.rp(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.kx(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ky(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
nB(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mg(a,b){var s=b==null,r=s?null:b.method
return new A.fG(a,r,s?null:b.receiver)},
br(a){if(a==null)return new A.k8(a)
if(a instanceof A.dN)return A.c9(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.c9(a,a.dartException)
return A.qR(a)},
c9(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.cA(r,16)&8191)===10)switch(q){case 438:return A.c9(a,A.mg(A.B(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.B(s)+" (Error "+q+")"
return A.c9(a,new A.e6(p,e))}}if(a instanceof TypeError){o=$.os()
n=$.ot()
m=$.ou()
l=$.ov()
k=$.oy()
j=$.oz()
i=$.ox()
$.ow()
h=$.oB()
g=$.oA()
f=o.a7(s)
if(f!=null)return A.c9(a,A.mg(A.af(s),f))
else{f=n.a7(s)
if(f!=null){f.method="call"
return A.c9(a,A.mg(A.af(s),f))}else{f=m.a7(s)
if(f==null){f=l.a7(s)
if(f==null){f=k.a7(s)
if(f==null){f=j.a7(s)
if(f==null){f=i.a7(s)
if(f==null){f=l.a7(s)
if(f==null){f=h.a7(s)
if(f==null){f=g.a7(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.af(s)
return A.c9(a,new A.e6(s,f==null?e:f.method))}}}return A.c9(a,new A.hD(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ef()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.c9(a,new A.bs(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ef()
return a},
bK(a){var s
if(a instanceof A.dN)return a.b
if(a==null)return new A.eB(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.eB(a)},
lC(a){if(a==null||typeof a!="object")return J.aA(a)
else return A.cw(a)},
o1(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
re(a,b,c,d,e,f){t.gY.a(a)
switch(A.K(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.mc("Unsupported number of arguments for wrapped closure"))},
bq(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.re)
a.$identity=s
return s},
p4(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.hm().constructor.prototype):Object.create(new A.cO(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.n4(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.p0(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.n4(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
p0(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.oZ)}throw A.d("Error in functionType of tearoff")},
p1(a,b,c,d){var s=A.n1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
n4(a,b,c,d){var s,r
if(c)return A.p3(a,b,d)
s=b.length
r=A.p1(s,d,a,b)
return r},
p2(a,b,c,d){var s=A.n1,r=A.p_
switch(b?-1:a){case 0:throw A.d(new A.he("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
p3(a,b,c){var s,r,q,p=$.n_
p==null?$.n_=A.mZ("interceptor"):p
s=$.n0
s==null?$.n0=A.mZ("receiver"):s
r=b.length
q=A.p2(r,c,a,b)
return q},
mA(a){return A.p4(a)},
oZ(a,b){return A.lc(v.typeUniverse,A.b9(a.a),b)},
n1(a){return a.a},
p_(a){return a.b},
mZ(a){var s,r,q,p=new A.cO("receiver","interceptor"),o=J.nb(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.cL("Field name "+a+" not found.",null))},
Q(a){if(a==null)A.qS("boolean expression must not be null")
return a},
qS(a){throw A.d(new A.hL(a))},
rt(a){throw A.d(new A.fj(a))},
r8(a){return v.getIsolateTag(a)},
tD(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
rk(a){var s,r,q,p,o,n=A.af($.o2.$1(a)),m=$.lq[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ly[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.qc($.nZ.$2(a,n))
if(q!=null){m=$.lq[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ly[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.lB(s)
$.lq[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ly[n]=s
return s}if(p==="-"){o=A.lB(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.oa(a,s)
if(p==="*")throw A.d(A.mo(n))
if(v.leafTags[n]===true){o=A.lB(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.oa(a,s)},
oa(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.mD(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lB(a){return J.mD(a,!1,null,!!a.$iz)},
rl(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.lB(s)
else return J.mD(s,c,null,null)},
rc(){if(!0===$.mB)return
$.mB=!0
A.rd()},
rd(){var s,r,q,p,o,n,m,l
$.lq=Object.create(null)
$.ly=Object.create(null)
A.rb()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.oc.$1(o)
if(n!=null){m=A.rl(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
rb(){var s,r,q,p,o,n,m=B.cX()
m=A.dq(B.cY,A.dq(B.cZ,A.dq(B.aK,A.dq(B.aK,A.dq(B.d_,A.dq(B.d0,A.dq(B.d1(B.aJ),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.o2=new A.lv(p)
$.nZ=new A.lw(o)
$.oc=new A.lx(n)},
dq(a,b){return a(b)||b},
rs(a,b,c){var s=a.indexOf(b,c)
return s>=0},
rp(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cQ:function cQ(){},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ab:function ab(a,b){this.a=a
this.$ti=b},
jC:function jC(a){this.a=a},
kx:function kx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e6:function e6(a,b){this.a=a
this.b=b},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
hD:function hD(a){this.a=a},
k8:function k8(a){this.a=a},
dN:function dN(a,b){this.a=a
this.b=b},
eB:function eB(a){this.a=a
this.b=null},
ce:function ce(){},
fb:function fb(){},
fc:function fc(){},
hq:function hq(){},
hm:function hm(){},
cO:function cO(a,b){this.a=a
this.b=b},
he:function he(a){this.a=a},
hL:function hL(a){this.a=a},
aF:function aF(a){var _=this
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
dY:function dY(a,b){this.a=a
this.$ti=b},
dZ:function dZ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lv:function lv(a){this.a=a},
lw:function lw(a){this.a=a},
lx:function lx(a){this.a=a},
ru(a){return A.S(A.nd(a))},
mp(a){var s=new A.kN(a)
return s.b=s},
dm(a,b){if(a===$)throw A.d(A.ne(b))
return a},
bJ(a,b){if(a!==$)throw A.d(A.nd(b))},
kN:function kN(a){this.a=a
this.b=null},
nP(a,b,c){},
cF(a){return a},
nh(a){return new Float32Array(A.cF(a))},
cs(a,b,c){A.nP(a,b,c)
return new Float32Array(a,b,c)},
ni(a,b,c){var s
A.nP(a,b,c)
s=new Uint8Array(a,b,c)
return s},
pu(a){return new Uint8Array(a)},
bI(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.cG(b,a))},
fR:function fR(){},
cu:function cu(){},
d_:function d_(){},
ct:function ct(){},
e3:function e3(){},
e2:function e2(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
d0:function d0(){},
e4:function e4(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
no(a,b){var s=b.c
return s==null?b.c=A.mu(a,b.z,!0):s},
nn(a,b){var s=b.c
return s==null?b.c=A.eK(a,"at",[b.z]):s},
np(a){var s=a.y
if(s===6||s===7||s===8)return A.np(a.z)
return s===11||s===12},
pE(a){return a.cy},
aR(a){return A.iG(v.typeUniverse,a,!1)},
c7(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.c7(a,s,a0,a1)
if(r===s)return b
return A.nL(a,r,!0)
case 7:s=b.z
r=A.c7(a,s,a0,a1)
if(r===s)return b
return A.mu(a,r,!0)
case 8:s=b.z
r=A.c7(a,s,a0,a1)
if(r===s)return b
return A.nK(a,r,!0)
case 9:q=b.Q
p=A.eQ(a,q,a0,a1)
if(p===q)return b
return A.eK(a,b.z,p)
case 10:o=b.z
n=A.c7(a,o,a0,a1)
m=b.Q
l=A.eQ(a,m,a0,a1)
if(n===o&&l===m)return b
return A.ms(a,n,l)
case 11:k=b.z
j=A.c7(a,k,a0,a1)
i=b.Q
h=A.qO(a,i,a0,a1)
if(j===k&&h===i)return b
return A.nJ(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.eQ(a,g,a0,a1)
o=b.z
n=A.c7(a,o,a0,a1)
if(f===g&&n===o)return b
return A.mt(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.iW("Attempted to substitute unexpected RTI kind "+c))}},
eQ(a,b,c,d){var s,r,q,p,o=b.length,n=A.le(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.c7(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
qP(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.le(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.c7(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
qO(a,b,c,d){var s,r=b.a,q=A.eQ(a,r,c,d),p=b.b,o=A.eQ(a,p,c,d),n=b.c,m=A.qP(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.i0()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
r_(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.r9(s)
return a.$S()}return null},
o4(a,b){var s
if(A.np(b))if(a instanceof A.ce){s=A.r_(a)
if(s!=null)return s}return A.b9(a)},
b9(a){var s
if(a instanceof A.v){s=a.$ti
return s!=null?s:A.mv(a)}if(Array.isArray(a))return A.Z(a)
return A.mv(J.dr(a))},
Z(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
F(a){var s=a.$ti
return s!=null?s:A.mv(a)},
mv(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.qu(a,s)},
qu(a,b){var s=a instanceof A.ce?a.__proto__.__proto__.constructor:b,r=A.q9(v.typeUniverse,s.name)
b.$ccache=r
return r},
r9(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.iG(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
r2(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.eI(a)
q=A.iG(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.eI(q):p},
rw(a){return A.r2(A.iG(v.typeUniverse,a,!1))},
qt(a){var s,r,q,p,o=this
if(o===t.K)return A.dl(o,a,A.qy)
if(!A.bL(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.dl(o,a,A.qB)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.mx
else if(r===t.i||r===t.cZ)q=A.qx
else if(r===t.N)q=A.qz
else q=r===t.k4?A.lh:null
if(q!=null)return A.dl(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.rh)){o.r="$i"+p
if(p==="o")return A.dl(o,a,A.qw)
return A.dl(o,a,A.qA)}}else if(s===7)return A.dl(o,a,A.qr)
return A.dl(o,a,A.qp)},
dl(a,b,c){a.b=c
return a.b(b)},
qs(a){var s,r=this,q=A.qo
if(!A.bL(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.qd
else if(r===t.K)q=A.qb
else{s=A.eS(r)
if(s)q=A.qq}r.a=q
return r.a(a)},
li(a){var s,r=a.y
if(!A.bL(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&A.li(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qp(a){var s=this
if(a==null)return A.li(s)
return A.V(v.typeUniverse,A.o4(a,s),null,s,null)},
qr(a){if(a==null)return!0
return this.z.b(a)},
qA(a){var s,r=this
if(a==null)return A.li(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dr(a)[s]},
qw(a){var s,r=this
if(a==null)return A.li(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.dr(a)[s]},
qo(a){var s,r=this
if(a==null){s=A.eS(r)
if(s)return a}else if(r.b(a))return a
A.nS(a,r)},
qq(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.nS(a,s)},
nS(a,b){throw A.d(A.nI(A.nD(a,A.o4(a,b),A.an(b,null))))},
qZ(a,b,c,d){var s=null
if(A.V(v.typeUniverse,a,s,b,s))return a
throw A.d(A.nI("The type argument '"+A.an(a,s)+"' is not a subtype of the type variable bound '"+A.an(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
nD(a,b,c){var s=A.fq(a),r=A.an(b==null?A.b9(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
nI(a){return new A.eJ("TypeError: "+a)},
am(a,b){return new A.eJ("TypeError: "+A.nD(a,null,b))},
qy(a){return a!=null},
qb(a){if(a!=null)return a
throw A.d(A.am(a,"Object"))},
qB(a){return!0},
qd(a){return a},
lh(a){return!0===a||!1===a},
tn(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.am(a,"bool"))},
tp(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.am(a,"bool"))},
to(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.am(a,"bool?"))},
nO(a){if(typeof a=="number")return a
throw A.d(A.am(a,"double"))},
tr(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.am(a,"double"))},
tq(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.am(a,"double?"))},
mx(a){return typeof a=="number"&&Math.floor(a)===a},
K(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.am(a,"int"))},
tt(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.am(a,"int"))},
ts(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.am(a,"int?"))},
qx(a){return typeof a=="number"},
b7(a){if(typeof a=="number")return a
throw A.d(A.am(a,"num"))},
tv(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.am(a,"num"))},
tu(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.am(a,"num?"))},
qz(a){return typeof a=="string"},
af(a){if(typeof a=="string")return a
throw A.d(A.am(a,"String"))},
tw(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.am(a,"String"))},
qc(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.am(a,"String?"))},
qK(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.an(a[q],b)
return s},
nT(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.c([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.l(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.b(a5,j)
m=B.f.C(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.an(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.an(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.an(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.an(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.an(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
an(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.an(a.z,b)
return s}if(l===7){r=a.z
s=A.an(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.an(a.z,b)+">"
if(l===9){p=A.qQ(a.z)
o=a.Q
return o.length>0?p+("<"+A.qK(o,b)+">"):p}if(l===11)return A.nT(a,b,null)
if(l===12)return A.nT(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
qQ(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
qa(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
q9(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.iG(a,b,!1)
else if(typeof m=="number"){s=m
r=A.eL(a,5,"#")
q=A.le(s)
for(p=0;p<s;++p)q[p]=r
o=A.eK(a,b,q)
n[b]=o
return o}else return m},
q7(a,b){return A.nM(a.tR,b)},
q6(a,b){return A.nM(a.eT,b)},
iG(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.nG(A.nE(a,null,b,c))
r.set(b,s)
return s},
lc(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.nG(A.nE(a,b,c,!0))
q.set(c,r)
return r},
q8(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.ms(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
c6(a,b){b.a=A.qs
b.b=A.qt
return b},
eL(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.b4(null,null)
s.y=b
s.cy=c
r=A.c6(a,s)
a.eC.set(c,r)
return r},
nL(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.q4(a,b,r,c)
a.eC.set(r,s)
return s},
q4(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bL(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.b4(null,null)
q.y=6
q.z=b
q.cy=c
return A.c6(a,q)},
mu(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.q3(a,b,r,c)
a.eC.set(r,s)
return s},
q3(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.bL(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.eS(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.eS(q.z))return q
else return A.no(a,b)}}p=new A.b4(null,null)
p.y=7
p.z=b
p.cy=c
return A.c6(a,p)},
nK(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.q1(a,b,r,c)
a.eC.set(r,s)
return s},
q1(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.bL(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.eK(a,"at",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.b4(null,null)
q.y=8
q.z=b
q.cy=c
return A.c6(a,q)},
q5(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.b4(null,null)
s.y=13
s.z=b
s.cy=q
r=A.c6(a,s)
a.eC.set(q,r)
return r},
iF(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
q0(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
eK(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iF(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.b4(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.c6(a,r)
a.eC.set(p,q)
return q},
ms(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.iF(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b4(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.c6(a,o)
a.eC.set(q,n)
return n},
nJ(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iF(m)
if(j>0){s=l>0?",":""
r=A.iF(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.q0(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b4(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.c6(a,o)
a.eC.set(q,r)
return r},
mt(a,b,c,d){var s,r=b.cy+("<"+A.iF(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.q2(a,b,c,r,d)
a.eC.set(r,s)
return s},
q2(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.le(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.c7(a,b,r,0)
m=A.eQ(a,c,r,0)
return A.mt(a,n,m,c!==m)}}l=new A.b4(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.c6(a,l)},
nE(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nG(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.pV(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.nF(a,r,h,g,!1)
else if(q===46)r=A.nF(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.c3(a.u,a.e,g.pop()))
break
case 94:g.push(A.q5(a.u,g.pop()))
break
case 35:g.push(A.eL(a.u,5,"#"))
break
case 64:g.push(A.eL(a.u,2,"@"))
break
case 126:g.push(A.eL(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.mr(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.eK(p,n,o))
else{m=A.c3(p,a.e,n)
switch(m.y){case 11:g.push(A.mt(p,m,o,a.n))
break
default:g.push(A.ms(p,m,o))
break}}break
case 38:A.pW(a,g)
break
case 42:p=a.u
g.push(A.nL(p,A.c3(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.mu(p,A.c3(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.nK(p,A.c3(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.i0()
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
A.mr(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.nJ(p,A.c3(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.mr(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.pY(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.c3(a.u,a.e,i)},
pV(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
nF(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.qa(s,o.z)[p]
if(n==null)A.S('No "'+p+'" in "'+A.pE(o)+'"')
d.push(A.lc(s,o,n))}else d.push(p)
return m},
pW(a,b){var s=b.pop()
if(0===s){b.push(A.eL(a.u,1,"0&"))
return}if(1===s){b.push(A.eL(a.u,4,"1&"))
return}throw A.d(A.iW("Unexpected extended operation "+A.B(s)))},
c3(a,b,c){if(typeof c=="string")return A.eK(a,c,a.sEA)
else if(typeof c=="number")return A.pX(a,b,c)
else return c},
mr(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.c3(a,b,c[s])},
pY(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.c3(a,b,c[s])},
pX(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.d(A.iW("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.d(A.iW("Bad index "+c+" for "+b.k(0)))},
V(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.bL(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.bL(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.V(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return A.V(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.V(a,b.z,c,d,e)
if(r===6)return A.V(a,b.z,c,d,e)
return r!==7}if(r===6)return A.V(a,b.z,c,d,e)
if(p===6){s=A.no(a,d)
return A.V(a,b,c,s,e)}if(r===8){if(!A.V(a,b.z,c,d,e))return!1
return A.V(a,A.nn(a,b),c,d,e)}if(r===7){s=A.V(a,t.P,c,d,e)
return s&&A.V(a,b.z,c,d,e)}if(p===8){if(A.V(a,b,c,d.z,e))return!0
return A.V(a,b,c,A.nn(a,d),e)}if(p===7){s=A.V(a,b,c,t.P,e)
return s||A.V(a,b,c,d.z,e)}if(q)return!1
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
if(!A.V(a,k,c,j,e)||!A.V(a,j,e,k,c))return!1}return A.nU(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.nU(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.qv(a,b,c,d,e)}return!1},
nU(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.V(a3,a4.z,a5,a6.z,a7))return!1
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
if(!A.V(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.V(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.V(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.V(a3,e[a+2],a7,g,a5))return!1
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
for(o=0;o<q;++o)p[o]=A.lc(a,b,r[o])
return A.nN(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.nN(a,n,null,c,m,e)},
nN(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.V(a,r,d,q,f))return!1}return!0},
eS(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.bL(a))if(r!==7)if(!(r===6&&A.eS(a.z)))s=r===8&&A.eS(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
rh(a){var s
if(!A.bL(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bL(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.iD},
nM(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
le(a){return a>0?new Array(a):v.typeUniverse.sEA},
b4:function b4(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
i0:function i0(){this.c=this.b=this.a=null},
eI:function eI(a){this.a=a},
hX:function hX(){},
eJ:function eJ(a){this.a=a},
pN(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.qT()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bq(new A.kK(q),1)).observe(s,{childList:true})
return new A.kJ(q,s,r)}else if(self.setImmediate!=null)return A.qU()
return A.qV()},
pO(a){self.scheduleImmediate(A.bq(new A.kL(t.M.a(a)),0))},
pP(a){self.setImmediate(A.bq(new A.kM(t.M.a(a)),0))},
pQ(a){t.M.a(a)
A.pZ(0,a)},
nz(a,b){var s=B.e.Y(a.a,1000)
return A.q_(s<0?0:s,b)},
pZ(a,b){var s=new A.eH(!0)
s.dP(a,b)
return s},
q_(a,b){var s=new A.eH(!1)
s.dQ(a,b)
return s},
bo(a){return new A.ek(new A.G($.E,a.i("G<0>")),a.i("ek<0>"))},
bn(a,b){a.$2(0,null)
b.b=!0
return b.a},
a8(a,b){A.qe(a,b)},
bm(a,b){b.Z(0,a)},
bl(a,b){b.bs(A.br(a),A.bK(a))},
qe(a,b){var s,r,q=new A.lf(b),p=new A.lg(b)
if(a instanceof A.G)a.cC(q,p,t.z)
else{s=t.z
if(t.h.b(a))a.aY(q,p,s)
else{r=new A.G($.E,t.g)
r.a=8
r.c=a
r.cC(q,p,s)}}},
bp(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.E.bK(new A.lk(s),t.H,t.S,t.z)},
tm(a){return new A.dj(a,1)},
pS(){return B.h2},
pT(a){return new A.dj(a,3)},
qE(a,b){return new A.eE(a,b.i("eE<0>"))},
iX(a,b){var s=A.eR(a,"error",t.K)
return new A.dC(s,b==null?A.m6(a):b)},
m6(a){var s
if(t.fz.b(a)){s=a.gaH()
if(s!=null)return s}return B.d4},
pd(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=null,e=!1,d=b.i("G<o<0>>"),c=new A.G($.E,d)
g.a=null
g.b=0
s=A.mp("error")
r=A.mp("stackTrace")
q=new A.jv(g,f,e,c,s,r)
try{for(l=a.length,k=t.P,j=0,i=0;j<a.length;a.length===l||(0,A.y)(a),++j){p=a[j]
o=i
p.aY(new A.ju(g,o,c,f,e,s,r,b),q,k)
i=++g.b}if(i===0){l=c
l.aB(A.c([],b.i("t<0>")))
return l}g.a=A.bh(i,null,!1,b.i("0?"))}catch(h){n=A.br(h)
m=A.bK(h)
if(g.b===0||A.Q(e)){l=n
r=m
A.eR(l,"error",t.K)
$.E!==B.m
if(r==null)r=A.m6(l)
d=new A.G($.E,d)
d.b5(l,r)
return d}else{s.b=n
r.b=m}}return c},
kT(a,b){var s,r,q
for(s=t.g;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aN()
b.b7(a)
A.di(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.cu(q)}},
di(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.h;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.iR(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.di(c.a,b)
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
A.iR(i.a,i.b)
return}f=$.E
if(f!==g)$.E=g
else f=null
b=b.c
if((b&15)===8)new A.l0(p,c,m).$0()
else if(n){if((b&1)!==0)new A.l_(p,i).$0()}else if((b&2)!==0)new A.kZ(c,p).$0()
if(f!=null)$.E=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("at<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.aO(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.kT(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.aO(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
qI(a,b){var s
if(t.ng.b(a))return b.bK(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.mV(a,"onError",u.w))},
qF(){var s,r
for(s=$.dn;s!=null;s=$.dn){$.eP=null
r=s.b
$.dn=r
if(r==null)$.eO=null
s.a.$0()}},
qN(){$.mw=!0
try{A.qF()}finally{$.eP=null
$.mw=!1
if($.dn!=null)$.mG().$1(A.o0())}},
nX(a){var s=new A.hM(a),r=$.eO
if(r==null){$.dn=$.eO=s
if(!$.mw)$.mG().$1(A.o0())}else $.eO=r.b=s},
qL(a){var s,r,q,p=$.dn
if(p==null){A.nX(a)
$.eP=$.eO
return}s=new A.hM(a)
r=$.eP
if(r==null){s.b=p
$.dn=$.eP=s}else{q=r.b
s.b=q
$.eP=r.b=s
if(q==null)$.eO=s}},
od(a){var s=null,r=$.E
if(B.m===r){A.dp(s,s,B.m,a)
return}A.dp(s,s,r,t.M.a(r.cK(a)))},
t8(a,b){A.eR(a,"stream",t.K)
return new A.ir(b.i("ir<0>"))},
nw(a){return new A.df(null,null,null,a.i("df<0>"))},
mz(a){return},
pR(a,b){if(b==null)b=A.qX()
if(t.fQ.b(b))return a.bK(b,t.z,t.K,t.l)
if(t.i6.b(b))return t.y.a(b)
throw A.d(A.cL("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
qH(a,b){A.iR(a,b)},
qG(){},
pJ(a,b){var s=$.E
if(s===B.m)return A.nz(a,t.my.a(b))
return A.nz(a,t.my.a(s.cL(b,t.hU)))},
iR(a,b){A.qL(new A.lj(a,b))},
nV(a,b,c,d,e){var s,r=$.E
if(r===c)return d.$0()
$.E=c
s=r
try{r=d.$0()
return r}finally{$.E=s}},
nW(a,b,c,d,e,f,g){var s,r=$.E
if(r===c)return d.$1(e)
$.E=c
s=r
try{r=d.$1(e)
return r}finally{$.E=s}},
qJ(a,b,c,d,e,f,g,h,i){var s,r=$.E
if(r===c)return d.$2(e,f)
$.E=c
s=r
try{r=d.$2(e,f)
return r}finally{$.E=s}},
dp(a,b,c,d){t.M.a(d)
if(B.m!==c)d=c.cK(d)
A.nX(d)},
kK:function kK(a){this.a=a},
kJ:function kJ(a,b,c){this.a=a
this.b=b
this.c=c},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
eH:function eH(a){this.a=a
this.b=null
this.c=0},
lb:function lb(a,b){this.a=a
this.b=b},
la:function la(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ek:function ek(a,b){this.a=a
this.b=!1
this.$ti=b},
lf:function lf(a){this.a=a},
lg:function lg(a){this.a=a},
lk:function lk(a){this.a=a},
dj:function dj(a,b){this.a=a
this.b=b},
c5:function c5(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
eE:function eE(a,b){this.a=a
this.$ti=b},
dC:function dC(a,b){this.a=a
this.b=b},
jv:function jv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ju:function ju(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
dg:function dg(){},
al:function al(a,b){this.a=a
this.$ti=b},
dk:function dk(a,b){this.a=a
this.$ti=b},
cD:function cD(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
G:function G(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
kQ:function kQ(a,b){this.a=a
this.b=b},
kY:function kY(a,b){this.a=a
this.b=b},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kW:function kW(a,b,c){this.a=a
this.b=b
this.c=c},
kS:function kS(a,b){this.a=a
this.b=b},
kX:function kX(a,b){this.a=a
this.b=b},
kR:function kR(a,b,c){this.a=a
this.b=b
this.c=c},
l0:function l0(a,b,c){this.a=a
this.b=b
this.c=c},
l1:function l1(a){this.a=a},
l_:function l_(a,b){this.a=a
this.b=b},
kZ:function kZ(a,b){this.a=a
this.b=b},
hM:function hM(a){this.a=a
this.b=null},
cx:function cx(){},
kq:function kq(a,b){this.a=a
this.b=b},
kr:function kr(a,b){this.a=a
this.b=b},
bD:function bD(){},
eC:function eC(){},
l8:function l8(a){this.a=a},
hN:function hN(){},
df:function df(a,b,c,d){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.$ti=d},
c2:function c2(a,b){this.a=a
this.$ti=b},
dh:function dh(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
el:function el(){},
eD:function eD(){},
hS:function hS(){},
cA:function cA(a,b){this.b=a
this.a=null
this.$ti=b},
c4:function c4(){},
l5:function l5(a,b){this.a=a
this.b=b},
bk:function bk(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
ir:function ir(a){this.$ti=a},
eM:function eM(){},
lj:function lj(a,b){this.a=a
this.b=b},
ij:function ij(){},
l6:function l6(a,b){this.a=a
this.b=b},
l7:function l7(a,b,c){this.a=a
this.b=b
this.c=c},
mh(a,b,c,d){if(b==null){if(a==null)return new A.aF(c.i("@<0>").F(d).i("aF<1,2>"))}else if(a==null)a=A.r1()
return A.pU(A.r0(),a,b,c,d)},
aW(a,b,c){return b.i("@<0>").F(c).i("jQ<1,2>").a(A.o1(a,new A.aF(b.i("@<0>").F(c).i("aF<1,2>"))))},
ac(a,b){return new A.aF(a.i("@<0>").F(b).i("aF<1,2>"))},
pU(a,b,c,d,e){var s=c!=null?c:new A.l3(d)
return new A.eq(a,b,s,d.i("@<0>").F(e).i("eq<1,2>"))},
fL(a){return new A.er(a.i("er<0>"))},
mq(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ql(a,b){return J.a_(a,b)},
qm(a){return J.aA(a)},
n9(a,b,c){var s,r
if(A.my(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.aQ,a)
try{A.qC(a,s)}finally{if(0>=$.aQ.length)return A.b($.aQ,-1)
$.aQ.pop()}r=A.nx(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
me(a,b,c){var s,r
if(A.my(a))return b+"..."+c
s=new A.ho(b)
B.a.l($.aQ,a)
try{r=s
r.a=A.nx(r.a,a,", ")}finally{if(0>=$.aQ.length)return A.b($.aQ,-1)
$.aQ.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
my(a){var s,r
for(s=$.aQ.length,r=0;r<s;++r)if(a===$.aQ[r])return!0
return!1},
qC(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.B(l.gp(l))
B.a.l(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gp(l);++j
if(!l.n()){if(j<=4){B.a.l(b,A.B(p))
return}r=A.B(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp(l);++j
for(;l.n();p=o,o=n){n=l.gp(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.B(p)
r=A.B(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
pr(a,b,c){var s=A.mh(null,null,b,c)
a.E(0,new A.jS(s,b,c))
return s},
nf(a,b,c){var s=A.mh(null,null,b,c)
s.L(0,a)
return s},
mj(a){var s,r={}
if(A.my(a))return"{...}"
s=new A.ho("")
try{B.a.l($.aQ,a)
s.a+="{"
r.a=!0
J.oX(a,new A.jW(r,s))
s.a+="}"}finally{if(0>=$.aQ.length)return A.b($.aQ,-1)
$.aQ.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
l4:function l4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eq:function eq(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
l3:function l3(a){this.a=a},
er:function er(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i7:function i7(a){this.a=a
this.c=this.b=null},
es:function es(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dT:function dT(){},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
e_:function e_(){},
jW:function jW(a,b){this.a=a
this.b=b},
A:function A(){},
jY:function jY(a){this.a=a},
ec:function ec(){},
ey:function ey(){},
eN:function eN(){},
pc(a){if(a instanceof A.ce)return a.k(0)
return"Instance of '"+A.kd(a)+"'"},
bh(a,b,c,d){var s,r=J.pk(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
pt(a,b){var s,r=A.c([],b.i("t<0>"))
for(s=J.ao(a);s.n();)B.a.l(r,b.a(s.gp(s)))
return r},
jU(a,b,c){var s=A.ps(a,c)
return s},
ps(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("t<0>"))
s=A.c([],b.i("t<0>"))
for(r=J.ao(a);r.n();)B.a.l(s,r.gp(r))
return s},
mi(a,b,c){var s,r=J.pl(a,c)
for(s=0;s<a;++s)B.a.j(r,s,b.$1(s))
return r},
nx(a,b,c){var s=J.ao(b)
if(!s.n())return a
if(c.length===0){do a+=A.B(s.gp(s))
while(s.n())}else{a+=A.B(s.gp(s))
for(;s.n();)a=a+c+A.B(s.gp(s))}return a},
p6(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
p7(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
fk(a){if(a>=10)return""+a
return"0"+a},
jn(a){return new A.ah(1000*a)},
fq(a){if(typeof a=="number"||A.lh(a)||a==null)return J.dw(a)
if(typeof a=="string")return JSON.stringify(a)
return A.pc(a)},
iW(a){return new A.dB(a)},
cL(a,b){return new A.bs(!1,null,b,a)},
mV(a,b,c){return new A.bs(!0,a,b,c)},
pD(a){var s=null
return new A.d4(s,s,!1,s,s,a)},
nm(a,b){return new A.d4(null,null,!0,a,b,"Value not in range")},
bB(a,b,c,d,e){return new A.d4(b,c,!0,a,d,"Invalid value")},
ki(a,b,c){if(0>a||a>c)throw A.d(A.bB(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.bB(b,a,c,"end",null))
return b}return c},
kh(a,b){if(a<0)throw A.d(A.bB(a,0,null,b,null))
return a},
T(a,b,c,d,e){var s=A.K(e==null?J.ap(b):e)
return new A.fC(s,!0,a,c,"Index out of range")},
C(a){return new A.hF(a)},
mo(a){return new A.hC(a)},
ai(a){return new A.bC(a)},
be(a){return new A.fg(a)},
mc(a){return new A.hY(a)},
cv(a,b,c,d){var s,r
if(B.y===c)return A.pI(J.aA(a),J.aA(b),$.m3())
if(B.y===d){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
return A.mm(A.bX(A.bX(A.bX($.m3(),s),b),c))}s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
r=$.m3()
return A.mm(A.bX(A.bX(A.bX(A.bX(r,s),b),c),d))},
dt(a){A.ob(A.B(a))},
cg:function cg(a,b){this.a=a
this.b=b},
ah:function ah(a){this.a=a},
kO:function kO(){},
L:function L(){},
dB:function dB(a){this.a=a},
c0:function c0(){},
h_:function h_(){},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fC:function fC(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hF:function hF(a){this.a=a},
hC:function hC(a){this.a=a},
bC:function bC(a){this.a=a},
fg:function fg(a){this.a=a},
h2:function h2(){},
ef:function ef(){},
fj:function fj(a){this.a=a},
hY:function hY(a){this.a=a},
j:function j(){},
U:function U(){},
cX:function cX(a,b,c){this.a=a
this.b=b
this.$ti=c},
Y:function Y(){},
v:function v(){},
iu:function iu(){},
ho:function ho(a){this.a=a},
r5(){return document},
ep(a,b,c,d,e){var s=A.nY(new A.kP(c),t.L)
if(s!=null&&!0)J.oV(a,b,s,!1)
return new A.eo(a,b,s,!1,e.i("eo<0>"))},
qi(a){var s
if(t.dA.b(a))return a
s=new A.kH([],[])
s.c=!0
return s.bU(a)},
nY(a,b){var s=$.E
if(s===B.m)return a
return s.cL(a,b)},
q:function q(){},
iV:function iV(){},
eZ:function eZ(){},
f_:function f_(){},
f5:function f5(){},
f6:function f6(){},
cb:function cb(){},
bc:function bc(){},
jf:function jf(){},
I:function I(){},
cR:function cR(){},
jg:function jg(){},
b0:function b0(){},
bu:function bu(){},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
bv:function bv(){},
bS:function bS(){},
dK:function dK(){},
dL:function dL(){},
fm:function fm(){},
jk:function jk(){},
a7:function a7(){},
k:function k(){},
e:function e(){},
aC:function aC(){},
fs:function fs(){},
ft:function ft(){},
fw:function fw(){},
aD:function aD(){},
jG:function jG(){},
cj:function cj(){},
dS:function dS(){},
ck:function ck(){},
cV:function cV(){},
by:function by(){},
jV:function jV(){},
cr:function cr(){},
k_:function k_(){},
fN:function fN(){},
k2:function k2(a){this.a=a},
fO:function fO(){},
k3:function k3(a){this.a=a},
aH:function aH(){},
fP:function fP(){},
aI:function aI(){},
w:function w(){},
e5:function e5(){},
aJ:function aJ(){},
h6:function h6(){},
hd:function hd(){},
kk:function kk(a){this.a=a},
hf:function hf(){},
ax:function ax(){},
hj:function hj(){},
aL:function aL(){},
hk:function hk(){},
aM:function aM(){},
hn:function hn(){},
kp:function kp(a){this.a=a},
aj:function aj(){},
ay:function ay(){},
ad:function ad(){},
hv:function hv(){},
hw:function hw(){},
kv:function kv(){},
aN:function aN(){},
hy:function hy(){},
kw:function kw(){},
bj:function bj(){},
kA:function kA(){},
dd:function dd(){},
hH:function hH(){},
de:function de(){},
hQ:function hQ(){},
em:function em(){},
i1:function i1(){},
et:function et(){},
io:function io(){},
iv:function iv(){},
mb:function mb(a,b){this.a=a
this.$ti=b},
en:function en(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eo:function eo(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
kP:function kP(a){this.a=a},
r:function r(){},
dO:function dO(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
hR:function hR(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
hZ:function hZ(){},
i_:function i_(){},
i2:function i2(){},
i3:function i3(){},
i8:function i8(){},
i9:function i9(){},
ia:function ia(){},
ib:function ib(){},
ic:function ic(){},
id:function id(){},
ih:function ih(){},
ii:function ii(){},
ik:function ik(){},
ez:function ez(){},
eA:function eA(){},
il:function il(){},
im:function im(){},
ip:function ip(){},
iw:function iw(){},
ix:function ix(){},
eF:function eF(){},
eG:function eG(){},
iz:function iz(){},
iA:function iA(){},
iH:function iH(){},
iI:function iI(){},
iJ:function iJ(){},
iK:function iK(){},
iL:function iL(){},
iM:function iM(){},
iN:function iN(){},
iO:function iO(){},
iP:function iP(){},
iQ:function iQ(){},
nQ(a){var s,r
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.lh(a))return a
if(A.o7(a))return A.c8(a)
if(Array.isArray(a)){s=[]
for(r=0;r<a.length;++r)s.push(A.nQ(a[r]))
return s}return a},
c8(a){var s,r,q,p,o
if(a==null)return null
s=A.ac(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.y)(r),++p){o=r[p]
s.j(0,o,A.nQ(a[o]))}return s},
o7(a){var s=Object.getPrototypeOf(a)
return s===Object.prototype||s===null},
m9(){return window.navigator.userAgent},
kG:function kG(){},
kI:function kI(a,b){this.a=a
this.b=b},
kH:function kH(a,b){this.a=a
this.b=b
this.c=!1},
ro(a,b){var s=new A.G($.E,b.i("G<0>")),r=new A.al(s,b.i("al<0>"))
a.then(A.bq(new A.lN(r,b),1),A.bq(new A.lO(r),1))
return s},
k7:function k7(a){this.a=a},
lN:function lN(a,b){this.a=a
this.b=b},
lO:function lO(a){this.a=a},
ml(){return B.n},
i4:function i4(){},
aV:function aV(){},
fH:function fH(){},
aY:function aY(){},
h0:function h0(){},
kc:function kc(){},
hp:function hp(){},
n:function n(){},
aZ:function aZ(){},
hz:function hz(){},
i5:function i5(){},
i6:function i6(){},
ie:function ie(){},
ig:function ig(){},
is:function is(){},
it:function it(){},
iB:function iB(){},
iC:function iC(){},
pe(a){return new GainNode(a)},
ba:function ba(){},
dE:function dE(){},
ca:function ca(){},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
H:function H(){},
f0:function f0(){},
f1:function f1(){},
j2:function j2(a){this.a=a},
bt:function bt(){},
f2:function f2(){},
dF:function dF(){},
cU:function cU(){},
h1:function h1(){},
hP:function hP(){},
f8:function f8(){},
fy:function fy(){},
h7:function h7(){},
d5:function d5(){},
bF:function bF(){},
hB:function hB(){},
hG:function hG(){},
bE:function bE(a){this.a=a},
d9:function d9(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
j8:function j8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n6(a,b){var s=A.bh(7,null,!1,b.i("0?")),r=a==null?A.rx():a
return new A.fB(r,s,b.i("fB<0>"))},
fB:function fB(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
ld:function ld(a,b){this.a=a
this.$ti=b},
cE:function cE(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=-1
_.$ti=c},
bO(a){return new A.f(a)},
f:function f(a){this.a=a},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
O:function O(a,b){this.a=a
this.b=b},
m5(a,b,c,d,e,f,g){return new A.cK(g,b,e,a,f)},
o6(a,b){if(b.e)return!1
if(a.x)return!0
if(b.x)return!0
return!1},
ra(a,b){return B.a.eN(a.a,new A.lu(b))},
fQ(a,b,c,d,e,f,g,h,i,j){return new A.bU(i,a,h,j,b,e,c,f)},
r6(a){var s,r,q=a.f.$0(),p=new A.k1(new Uint8ClampedArray(4000)),o=a.d,n=A.c([],t.I),m=A.nf(B.au,t.b,t.R),l=A.c([],t.Q),k=A.c([],t.d)
for(s=J.ao(a.r.$0());s.n();){r=s.gp(s)
switch(r.gc_()){case B.aw:m.h(0,B.F)
m.j(0,B.F,r)
break
case B.ax:m.h(0,B.v)
m.j(0,B.v,r)
break
case B.ay:m.h(0,B.G)
m.j(0,B.G,r)
break
default:B.a.l(n,r)}}return A.m5(new A.iT(q,p),new A.cd(o,o,1,0,0,0,0,new A.cS(n,m),a.c,l,k,new A.cT(a.a)),1,a.z,!1,!1,a.e.$0())},
cK:function cK(a,b,c,d,e){var _=this
_.a=100
_.b=a
_.c=b
_.e=c
_.r=d
_.x=e},
iU:function iU(a){this.a=a},
iT:function iT(a,b){this.a=a
this.b=b
this.c=null},
ae:function ae(a,b){this.a=a
this.b=b},
ar:function ar(){},
bY:function bY(){},
bZ:function bZ(){},
cP:function cP(){},
bW:function bW(){},
ha:function ha(){this.b=!1},
e9:function e9(){this.a=null},
hb:function hb(a){this.a=a},
lu:function lu(a){this.a=a},
bM:function bM(){},
bd:function bd(a){this.a=a},
bU:function bU(a,b,c,d,e,f,g,h){var _=this
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
lo:function lo(){},
lm:function lm(){},
ln:function ln(){},
j9:function j9(){this.b=this.a=0},
W:function W(){},
cq:function cq(a,b){this.b=a
this.a=b},
cY:function cY(a,b){this.b=a
this.a=b},
rn(a,b,c){var s,r,q=b.e||b.a===0
if(q)return!1
s=b.c
if(s!=null&&s.b<=0){a.$1(new A.dJ(b))
return!0}r=b.r
if(r!=null){a.$1(r.eO(b,c))
b.a=0
return!0}return!1},
fz:function fz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
jw:function jw(a,b){this.a=a
this.b=b},
n5(a){switch(a.a){case 0:case 1:case 2:case 3:case 4:return!1
case 5:case 6:case 7:return!0}},
dH(a,b,c){var s,r,q,p
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
default:p=null}r+=a.H(p)+1}return r},
eW(a,b,c,d,e,f){return new A.eV(f,c)},
mT(){return new A.eV(10,10)},
p5(a){var s,r=a.a,q=a.b
if(r+q===1)return a
s=Math.sqrt(Math.pow(r,2)+Math.pow(q,2))
return new A.O(r/s,q/s)},
bT(a){switch(a){case B.am:case B.an:case B.I:case B.J:case B.L:case B.M:case B.a2:case B.a3:case B.Y:case B.H:case B.Z:case B.a_:case B.a0:case null:return!1
case B.X:case B.z:case B.K:case B.a1:return!0}},
ph(a){switch(a){case B.am:case B.an:case B.I:case B.J:case B.L:case B.M:case B.a2:case B.a3:case B.Y:case B.H:case B.Z:case B.a_:case null:case B.a0:return!1
case B.X:case B.z:case B.K:case B.a1:return!0}},
ed:function ed(a,b){this.a=a
this.b=b},
bw:function bw(a,b){this.a=a
this.b=b},
eY:function eY(a,b){this.a=a
this.b=b},
aU:function aU(a,b,c){this.b=a
this.c=b
this.e=c},
je:function je(){},
a0:function a0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fA:function fA(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=a
this.b=b},
b_:function b_(a,b){this.a=a
this.b=b},
k0:function k0(){},
bP:function bP(){},
cf:function cf(a,b){this.a=a
this.b=b},
a2:function a2(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.y=e
_.z=f},
dy:function dy(a,b){this.a=a
this.b=b},
dz:function dz(a,b){this.a=a
this.b=b},
av:function av(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.f=c
_.r=d
_.Q=e
_.ch=f},
cM:function cM(a,b){this.a=a
this.b=b},
aq:function aq(a){this.c=a},
eV:function eV(a,b){this.a=a
this.b=b},
cd:function cd(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
cN:function cN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cT:function cT(a){this.a=a},
cS:function cS(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
ch:function ch(a,b){this.a=a
this.b=b},
fh:function fh(){},
da:function da(a,b){this.a=a
this.b=b},
fd:function fd(a,b){this.a=a
this.b=b},
au:function au(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a,b){this.a=a
this.b=b},
ak:function ak(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
bb:function bb(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.z=_.y=_.r=_.f=null},
fJ:function fJ(a,b){this.b=a
this.c=b},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=b},
a1:function a1(a,b){this.a=a
this.b=b},
jX:function jX(a,b){this.a=a
this.b=b},
k1:function k1(a){this.a=a},
cZ:function cZ(a,b){this.a=a
this.b=b},
fn:function fn(a){var _=this
_.b=a
_.c=!1
_.d=null
_.e=0
_.a=!1},
fo:function fo(a){this.b=a
this.a=!1},
jo:function jo(){},
pb(a,a0,a1){var s,r,q,p,o,n,m,l,k="a_position",j=5126,i="u_resolution",h="u_offset",g=A.c([],t.ev),f=A.c(["alarm_1.mp3","background_1.mp3","background_2.mp3","bullet_impact_1.mp3","bullet_impact_2.mp3","bullet_miss_1.mp3","calm_menu_1.mp3","cave_1.mp3","click_1.mp3","death_1.mp3","door_1.mp3","door_unlock_1.mp3","drone_abandoned_desolate.mp3","fireball_1.mp3","fireball_2.mp3","flamethrower_1.mp3","heavy_punch_1.mp3","heavy_punch_2.mp3","heavy_punch_3.mp3","heavy_punch_4.mp3","Just_Pick_One_Already.mp3","laser_1.mp3","loop_1.mp3","menu_1.mp3","menu_2.mp3","miss_1.mp3","monster_deep_growl.mp3","monster_growl_1.mp3","monster_sceam_2.mp3","monster_scream_1.mp3","New_Bee.mp3","positive_1.mp3","rain_background_1.mp3","sewer_1.mp3","short_pulse_1.mp3","surface_day_1.mp3","surface_night_1.mp3","sword_impact_1.mp3","teleport_1.mp3","text_loop_1.mp3","water_footsteps_1.mp3","water_footsteps_2.mp3","water_footsteps_3.mp3","water_footsteps_4.mp3","water_footsteps_5.mp3","reload_1.mp3","pistol_1.mp3"],t.s),e=new (window.AudioContext||window.webkitAudioContext)(),d=A.qk(),c=t.G,b=t.o
d=A.aE(A.c([new A.R(k,35044,j,2,d),new A.R("a_color",35048,j,4,new Float32Array(192e3))],c),u.t,A.c([new A.x(i,B.h),new A.x(h,B.h)],b),u.Z)
s=A.aE(A.c([new A.R(k,35048,j,2,new Float32Array(8000))],c),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = vec4(1, 1, 1, 0.5);\n}\n",A.c([new A.x(i,B.h),new A.x(h,B.h)],b),"#version 300 es\nin vec2 a_position;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_PointSize = 2.0;\n  gl_Position = vec4(position, 0, 1);\n}\n")
r=A.pM(window)
q=new Uint8Array(4000)
p=t.j
o=A.c([],t.pl)
b=A.c([new A.x("u_texture",B.l),new A.x(i,B.h),new A.x("u_time",B.x)],b)
b=A.aE(A.c([new A.R(k,35044,j,2,new Float32Array(A.cF(B.A)))],c),"#version 300 es\nprecision mediump float;\n\n\nuniform sampler2D u_texture;\nuniform vec2 u_resolution;\nuniform float u_time;\n\nout vec4 outColor;\n\nfloat density = 1.3;\nfloat opacityScanline = .3;\nfloat opacityNoise = .2;\n\nfloat random (vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nfloat blend(const in float x, const in float y) {\n\treturn (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));\n}\n\nvec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {\n\tvec3 z = vec3(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b));\n\treturn z * opacity + x * (1.0 - opacity);\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n  vec3 col = texture(u_texture, uv).rgb;\n  float count = u_resolution.y * density;\n  vec2 sl = vec2(sin(uv.y * count), cos(uv.y * count));\n\tvec3 scanlines = vec3(sl.x, sl.y, sl.x);\n  col += col * scanlines * opacityScanline;\n  col += col * vec3(random(uv * u_time)) * opacityNoise;\n  outColor = vec4(col, 1.0);\n}\n",b,u.v)
c=A.c([],t.hd)
n=new Uint8Array(16e6)
m=new Uint8Array(4000)
l=new Uint8Array(4000)
g=new A.fp(a0,a,g,a1,new A.hi(A.ac(t.N,t.bD),f,e),new A.jt(n,m,l,new Uint8Array(64e6),new A.i(0,0),A.ac(p,t.im),c),new A.j9(),new A.hr(d),new A.fn(s),r,new A.iU(new A.fl(q,A.ac(p,t.S))),new A.fo(o),new A.fu(b),a0.createFramebuffer(),a0.createFramebuffer(),new A.kj())
g.dL(a,a0,a1)
return g},
jr:function jr(){this.b=!1},
fp:function fp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fy=$
_.k1=_.id=_.go=null
_.k2=n
_.k3=o
_.r1=_.k4=0
_.rx=!0
_.ry=null
_.x1=$
_.x2=p},
js:function js(a,b){this.a=a
this.b=b},
of(a,b,c){return a*c+(1-c)*b},
a4:function a4(){},
bN:function bN(a,b,c){var _=this
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
fX:function fX(a){this.a=a},
e8:function e8(a){this.a=a},
aX:function aX(a,b){this.a=a
this.b=b},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
k5:function k5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d8:function d8(){},
fI:function fI(a){this.a=a},
eh:function eh(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j_:function j_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iY:function iY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dJ:function dJ(a){this.a=a},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(a){this.a=a},
e7:function e7(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.b=a
this.c=b},
ke:function ke(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a){this.b=a
this.c=null
this.a=!1},
jt:function jt(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iy:function iy(a){this.a=a
this.b=!0},
kB:function kB(a,b,c){this.a=a
this.c=b
this.d=c},
cc:function cc(a,b){this.a=a
this.b=b},
kg:function kg(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
o5(a,b){var s=a.f
if(s==null)return A.c([],t.Y)
if(s===B.z)return A.c([new A.bg("Open Door",new A.eh(!1,a.b))],t.Y)
if(s===B.J){if(b.av(a.b)!=null)return A.c([],t.Y)
return A.c([new A.bg("Close Door",new A.eh(!0,a.b))],t.Y)}if(s===B.H)return A.c([new A.bg("Activate Mechanism",new A.hE(a.b))],t.Y)
if(s===B.I)return A.c([new A.bg("Stairs",new A.fX(!1))],t.Y)
return A.c([],t.Y)},
bg:function bg(a,b){this.a=a
this.b=b},
pq(a){var s=u.v,r="a_position",q="u_player_visible_texture",p=t.G,o=t.o
return new A.dX(A.aE(A.c([new A.R(r,35044,5126,2,new Float32Array(A.cF(B.A)))],p),u._,A.c([new A.x("u_source_position",B.h),new A.x("u_source_color",B.cn),new A.x("u_source_strength",B.x),new A.x("u_time",B.x),new A.x("u_visible_texture",B.l),new A.x(q,B.l)],o),s),A.aE(A.c([new A.R(r,35044,5126,2,new Float32Array(A.cF(B.A)))],p),u.L,A.c([new A.x("u_light_texture",B.l),new A.x("u_game_world_texture",B.l),new A.x(q,B.l),new A.x("u_resolution",B.h),new A.x("u_block_size",B.h),new A.x("u_offset",B.h)],o),s),a,A.c([],t.ow))},
dX:function dX(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.r=_.f=_.e=null
_.y=d
_.z=null
_.a=!1},
p9(a){switch(a.a){case 0:return B.al
case 1:return B.ak
case 2:return B.aj
case 3:return B.ai
case 4:return B.t
case 5:return B.u
case 6:return B.q
case 7:return B.r}},
p8(a){switch(a.a){case 4:return B.b1
case 5:return B.b0
case 6:return B.b1
case 7:return B.b0
default:return B.f5}},
a9(a,b){switch(b.a){case 4:return a.C(0,new A.i(0,-1))
case 1:return a.C(0,new A.i(1,-1))
case 5:return a.C(0,new A.i(1,0))
case 0:return a.C(0,new A.i(1,1))
case 6:return a.C(0,new A.i(0,1))
case 2:return a.C(0,new A.i(-1,1))
case 7:return a.C(0,new A.i(-1,0))
case 3:return a.C(0,new A.i(-1,-1))}},
lp(a,b,c){var s
switch(c.a){case 0:return!1
case 1:return a.c===B.b||A.Q(A.bT(a.f))
case 2:s=a.f
if(s===B.z)return!1
return a.c===B.b||A.Q(A.bT(s))
case 3:return a.c===B.b||A.Q(A.bT(a.f))||b.av(a.b)!=null||b.a.M(0,a.b)}},
r4(a,b){var s=B.e.br(a,-1,1),r=B.e.br(b,-1,1)
switch(s){case-1:switch(r){case-1:return B.al
case 0:return B.u
case 1:return B.ak}break
case 0:switch(r){case-1:return B.q
case 1:return B.t}break
case 1:switch(r){case-1:return B.aj
case 0:return B.r
case 1:return B.ai}break}throw A.d(A.ai(A.B(s)+","+A.B(r)))},
bA:function bA(a,b,c){var _=this
_.b=_.a=null
_.d=a
_.e=b
_.f=c},
b1:function b1(a,b){this.a=a
this.b=b},
ka:function ka(){},
fl:function fl(a,b){this.a=a
this.b=b},
hg:function hg(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.a=!1},
mW(a,b,c,d,e){return new A.R(d,a,c,e,b)},
c1(a,b){return new A.x(b,a)},
aE(a,b,c,d){var s=t.N
return new A.jF(d,b,c,a,A.ac(s,t.o3),A.ac(s,t.aN))},
nR(a,b,c){var s=a.createShader(c)
a.shaderSource(s,b)
a.compileShader(s)
if(!J.a_(a.getShaderParameter(s,35713),!0)){A.dt(a.getShaderInfoLog(s))
throw A.d(A.ai("Invalid Shader"))}return s},
R:function R(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x:function x(a,b){this.a=a
this.b=b},
db:function db(a,b){this.a=a
this.b=b},
hO:function hO(a,b){this.a=a
this.c=b},
iD:function iD(a,b){this.a=a
this.b=b},
jF:function jF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$
_.r=e
_.x=f},
kj:function kj(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
aw:function aw(){},
fY:function fY(){},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
kn:function kn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qM(a,b){var s=t.r
s.a(a)
s.a(b)
return B.e.R(a.y,b.y)},
rj(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.G($.E,t.aa),p=J.mS(r),o=p.$ti,n=o.i("~(1)?").a(new A.lA(a,s,r,new A.al(q,t.fB)))
t.Z.a(null)
A.ep(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
nu(a,b){var s=35048,r=5126,q=A.c([new A.x("u_texture",B.l),new A.x("u_resolution",B.h),new A.x("u_offset",B.h)],t.o),p=new Float32Array(12e4),o=new Float32Array(12e4),n=new Float32Array(24e4)
q=new A.ee(A.aE(A.c([new A.R("a_position",s,r,2,p),new A.R("a_texcoord",s,r,2,o),new A.R("a_color",s,r,4,n),new A.R("a_bg_color",s,r,4,new Float32Array(24e4))],t.G),u.I,q,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"),A.n6(A.rr(),t.r),b)
q.dM(a,b)
return q},
pH(a){return new A.P(a.a,a.b,-1,-1,null)},
n7(a,b,c,d){var s,r,q,p,o,n,m=null
switch(a){case B.am:case null:return m
case B.an:s=m
r=s
q=3
p=16
o=1
break
case B.I:q=14
p=3
o=1
r=B.fg
s=B.da
break
case B.z:s=m
r=s
q=6
p=11
o=1
break
case B.J:s=m
r=s
q=15
p=5
o=1
break
case B.K:s=m
r=s
q=5
p=11
o=1
break
case B.L:n=t.e.i("W.T")
if(d.a===B.B){n=B.b9.h(0,n.a(900))
n.toString
r=n}else{n=B.b6.h(0,n.a(800))
n.toString
r=n}s=m
q=2
p=2
o=0.8
break
case B.M:r=new A.f(4294967142)
s=m
q=12
p=7
o=0.8
break
case B.a2:n=B.as.h(0,t.e.i("W.T").a(400))
n.toString
s=m
r=n
q=1
p=13
o=1
break
case B.a3:n=B.as.h(0,t.e.i("W.T").a(400))
n.toString
s=m
r=n
q=2
p=13
o=0.8
break
case B.X:n=B.b6.h(0,t.e.i("W.T").a(600))
n.toString
s=m
r=n
q=6
p=0
o=1
break
case B.Y:n=B.b8.h(0,t.e.i("W.T").a(900))
n.toString
s=n
r=m
q=0
p=15
o=1
break
case B.H:n=B.ba.h(0,t.e.i("W.T").a(500))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.Z:n=B.ba.h(0,t.e.i("W.T").a(100))
n.toString
s=m
r=n
q=15
p=0
o=1
break
case B.a_:s=m
r=s
q=13
p=3
o=1
break
case B.a0:n=B.b8.h(0,t.e.i("W.T").a(900))
n.toString
s=m
r=n
q=14
p=5
o=1
break
case B.a1:n=B.as.h(0,t.e.i("W.T").a(600))
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
n.sdv(0,o)
n.saw(0,s)
return n},
lA:function lA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ee:function ee(a,b,c){var _=this
_.b=a
_.c=null
_.d=b
_.e=c
_.f=!0
_.a=!1},
ko:function ko(a){this.a=a},
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
mk(a,b,c){return new A.jZ(b,c,a)},
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
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a){var _=this
_.b=a
_.c=null
_.a=_.d=!1},
hu:function hu(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=0
_.a=!1},
h9:function h9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null},
l9:function l9(a){this.a=a},
ri(a,b){var s=a.createTexture(),r=document.createElement("img"),q=new A.G($.E,t.aa),p=J.mS(r),o=p.$ti,n=o.i("~(1)?").a(new A.lz(a,s,r,new A.al(q,t.fB)))
t.Z.a(null)
A.ep(p.a,p.b,n,!1,o.c)
r.setAttribute("src",b)
return q},
mn(a){var s,r,q,p,o=35048,n=5126,m=t.f,l=A.c([],m)
l=new A.f7(B.P,l,B.k)
l.a3(null)
s=A.c([],t.s)
r=A.m8(A.c([],m),!0)
q=A.c([],m)
s=new A.hc(r,s,q,B.k)
s.a3(null)
r=A.k9(108,r,0,0,0)
q=B.at.h(0,t.e.i("W.T").a(900))
q.toString
s.a4(A.m7(r,q))
m=A.c([],m)
m=new A.dP(l,s,m,B.k)
m.a3(null)
m.a4(l)
m.a4(s)
s=m.b9("The Something of Something")
m.e=s
m.a4(s)
s=A.c([],t.k)
l=A.c([new A.x("u_texture",B.l),new A.x("u_resolution",B.h)],t.o)
r=new Float32Array(12e4)
q=new Float32Array(12e4)
p=new Float32Array(24e4)
m=new A.hA(m,s,A.aE(A.c([new A.R("a_position",o,n,2,r),new A.R("a_texcoord",o,n,2,q),new A.R("a_color",o,n,4,p),new A.R("a_bg_color",o,n,4,new Float32Array(24e4))],t.G),u.I,l,"#version 300 es\nin vec2 a_position;\nin vec2 a_texcoord;\nin vec4 a_color;\nin vec4 a_bg_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec2 v_texcoord;\nout vec4 v_color;\nout vec4 v_bg_color;\n\nvoid main() {\n  vec2 position = ((a_position / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_texcoord = a_texcoord;\n  v_color = a_color;\n  v_bg_color = a_bg_color;\n}\n"))
m.dN(a)
return m},
ht(a){var s=A.c([],t.fC),r=A.c([],t.f)
s=new A.hs(a,s,B.E,B.P,r,B.k)
s.a3(null)
return s},
m8(a,b){var s=new A.fe(b,a,B.k)
s.a3(a)
return s},
m7(a,b){var s=A.c([a],t.f),r=new A.f4(b,new A.aK(B.k,0,0),s,B.k)
r.a3(s)
return r},
k9(a,b,c,d,e){var s=A.c([b],t.f),r=new A.h3(e,a,c,d,s,B.k)
r.a3(s)
return r},
mY(a,b,c){var s=A.c([a],t.f),r=new A.dG(c,b,B.P,s,B.k)
r.a3(s)
if(c!=null){s=A.ht(c)
s.e=B.o
r.e=s
r.a4(s)}return r},
nq(a,b,c,d,e){var s,r,q=t.f,p=A.c([],q)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.y)(a),++r)p.push(A.ht(J.dw(a[r])))
q=A.c([A.mY(A.m7(A.k9(36,A.m8(p,!1),48,24,36),B.o),B.o,d)],q)
p=new A.d7(a,c,b,q,B.k,e.i("d7<0>"))
p.a3(q)
return p},
lz:function lz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hA:function hA(a,b,c){var _=this
_.b=null
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!0
_.a=!1},
kz:function kz(a){this.a=a},
aK:function aK(a,b,c){this.a=a
this.b=b
this.c=c},
aa:function aa(){},
hs:function hs(a,b,c,d,e,f){var _=this
_.e=null
_.f=a
_.r=1
_.x=b
_.y=c
_.z=null
_.Q=d
_.a=null
_.b=!0
_.c=e
_.d=f},
fe:function fe(a,b,c){var _=this
_.e=a
_.a=null
_.b=!0
_.c=b
_.d=c},
f4:function f4(a,b,c,d){var _=this
_.e=a
_.f=b
_.a=null
_.b=!0
_.c=c
_.d=d},
h3:function h3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.a=null
_.b=!0
_.c=e
_.d=f},
dG:function dG(a,b,c,d,e){var _=this
_.e=null
_.f=a
_.r=b
_.ch=c
_.a=null
_.b=!0
_.c=d
_.d=e},
d7:function d7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.r=c
_.x=0
_.a=null
_.b=!0
_.c=d
_.d=e
_.$ti=f},
cJ:function cJ(a,b,c){var _=this
_.e=a
_.a=null
_.b=!0
_.c=b
_.d=c},
fM:function fM(a,b,c){this.a=a
this.b=b
this.$ti=c},
dP:function dP(a,b,c,d){var _=this
_.e=null
_.f=a
_.r=b
_.y=_.x=0
_.a=_.z=null
_.b=!0
_.c=c
_.d=d},
jB:function jB(a){this.a=a},
jy:function jy(a){this.a=a},
jx:function jx(a){this.a=a},
jA:function jA(a){this.a=a},
jz:function jz(a){this.a=a},
fx:function fx(a,b){this.a=a
this.b=b},
f7:function f7(a,b,c){var _=this
_.f=_.e=null
_.r=a
_.a=null
_.b=!0
_.c=b
_.d=c},
hc:function hc(a,b,c,d){var _=this
_.e=!1
_.f=a
_.r=b
_.a=null
_.b=!0
_.c=c
_.d=d},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
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
fr:function fr(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.a=_.e=!1},
hI:function hI(a){this.c=a
this.a=!1},
qY(a){var s,r=A.mi(4000,new A.ll(a),t.W),q=A.c([],t.c7)
for(s=0;s<4000;++s);return new A.hl(A.fL(t.j),q,A.ac(t.K,t.lZ),new A.a5(100,40,r,t.U),a.b)},
lr(a){var s,r,q,p,o
for(s=a.d,r=0;r<40;++r)for(q=0;q<100;++q){p=new A.i(q,r)
o=s.h(0,p)
if(!(o.c===B.b||A.Q(A.bT(o.f))))return p}throw A.d("Solid")},
rm(a,b){var s,r,q
for(s=a.d;!0;){r=$.eU()
q=new A.i(B.c.u(r.J()*98)+1,B.c.u(r.J()*38)+1)
r=s.h(0,q)
if(!(r.c===B.b||A.Q(A.bT(r.f)))&&a.av(q)==null)return q}},
b8(a,b,c){return B.c.u(a.J()*(c-b))+b},
qn(a,b,c){var s=b.length
if(s===1){if(0>=s)return A.b(b,0)
return b[0]}s=A.b8(a,0,s-1)
if(!(s>=0&&s<b.length))return A.b(b,s)
return b[s]},
hK:function hK(a,b){this.a=a
this.d=0
this.e=b},
ll:function ll(a){this.a=a},
hl:function hl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kF:function kF(a,b){this.a=a
this.b=b},
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
jd:function jd(a){this.a=a},
jD:function jD(){},
jE:function jE(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
lU(a,b,c){var s=c.b,r=c.e,q=a,p=0
while(!0){if(!(s.h(0,q)!==B.b&&r.h(0,q)!==B.R))break
q=A.a9(q,b);++p}return p},
mU(a,b,c){return new A.aS(a,b,c.i("aS<0>"))},
cI(a,b,c){var s=A.a9(a,b)
if(c.e.h(0,s)===B.R)return 1/0
if(c.b.h(0,s)===B.b)return 1
return 0},
nj(a){return new A.d1(a)},
bH(a,b,c){return new A.cz(c,a,b)},
du(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=A.c([],t.D),a4=t.S,a5=A.ac(t.c1,a4)
for(s=a7.length,r=0;r<a7.length;a7.length===s||(0,A.y)(a7),++r){q=a7[r]
if(q.gbJ())q=new A.iE(q)
p=a5.h(0,q)
if(p==null){a5.j(0,q,0)
p=0}a5.j(0,q,p+1)}for(s=a5.gat(a5),s=s.gA(s),o=t.q,n=t.n4,m=t.ld,l=t.bu,k=a6.a,j=J.ds(k),i=t.n;s.n();){h=s.gp(s)
q=h.a
g=h.b
f=A.c([],o)
e=A.c([],i)
for(h=j.gA(k);h.n();){d=h.gp(h)
c=q.gbt(q).U(d,a8)
if(c<1000){B.a.l(f,d)
B.a.l(e,c)}}if(f.length===0){B.a.l(a3,q)
continue}h=A.c([],l)
for(b=0;b<f.length;++b){d=f[b]
if(!(b<e.length))return A.b(e,b)
h.push(new A.b6(d,e[b]))}d=m.a(new A.lT())
if(!!h.immutable$list)A.S(A.C("sort"))
a=h.length-1
if(a-0<=32)A.nt(h,0,a,d,n)
else A.ns(h,0,a,d,n)
a0=B.a.dE(h,0,Math.min(3*g,e.length))
B.a.bX(a0)
a1=A.c([],o)
a2=A.fL(a4)
for(;!0;){for(b=0;b<a0.length;++b){if(a2.M(0,b))continue
if(a1.length===g)break
if($.oD().J()<0.33){if(!(b<a0.length))return A.b(a0,b)
B.a.l(a1,a0[b].a)
a2.l(0,b)}}h=a1.length
if(h===g)break
else if(g-h>a0.length-a2.a)break}if(a1.length<g)B.a.l(a3,q)
for(h=a1.length,r=0;r<a1.length;a1.length===h||(0,A.y)(a1),++r)q.d9(a1[r],a8)
if(a0.length===0)B.a.l(a3,q)}for(a4=j.gA(k),s=a8.e,o=a6.c;a4.n();){n=a4.gp(a4)
if(s.h(0,n)===B.aB||s.h(0,n)===B.aC)B.a.l(o,n)}return a3},
oe(a,b){var s,r,q,p,o,n,m,l,k,j
B.a.b1(a,new A.lS())
if(0>=a.length)return A.b(a,0)
A.du(a[0],$.oR(),b)
if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
q=b.f
p=0
for(;p<s.length;s.length===r||(0,A.y)(s),++p)q.j(0,s[p],B.b4)
if(0>=a.length)return A.b(a,0)
a[0].e=!0
for(s=A.ny(a,1,null,A.Z(a).c),r=s.$ti,s=new A.bz(s,s.gm(s),r.i("bz<b3.E>")),o=b.a.a.a,r=r.i("b3.E"),n=t.c1,m=2;s.n();){l=r.a(s.d)
k=l.a
j=J.az(k)
if(j.gm(k)<30){if(m>0){k=A.jU($.m4(),!0,n)
k.push($.mN())}else k=$.m4()
if(!B.a.M(A.du(l,k,b),$.mN()))--m}else if(j.gm(k)<60)A.du(l,$.oK(),b)
else if(j.gm(k)<100)A.du(l,$.oI(),b)
else switch(o){case 0:case 1:case 2:case 5:case 6:A.du(l,$.oG(),b)
break
case 3:case 4:A.du(l,$.oH(),b)
break}}if(m===2){if(0>=a.length)return A.b(a,0)
s=a[0].b
r=s.length
p=0
for(;p<s.length;s.length===r||(0,A.y)(s),++p)q.j(0,s[p],B.b5)}},
aT:function aT(){},
hJ:function hJ(){},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c},
d2:function d2(a,b){this.b=a
this.$ti=b},
fZ:function fZ(){},
fa:function fa(){},
eX:function eX(){},
fi:function fi(){},
dx:function dx(a){this.a=a},
d1:function d1(a){this.a=a},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
lM:function lM(){},
lF:function lF(){},
lJ:function lJ(){},
lE:function lE(){},
lG:function lG(){},
lK:function lK(){},
lL:function lL(){},
lI:function lI(){},
lH:function lH(){},
lD:function lD(){},
b6:function b6(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a},
lT:function lT(){},
lS:function lS(){},
pa(a){var s=t.q
return new A.a3(a,A.c([],s),A.c([],s),A.jq(a))},
jq(a){var s,r,q=J.az(a),p=q.h(a,0).a,o=q.h(a,0).b
for(s=1;s<q.gm(a);++s){r=q.h(a,s)
p+=r.a
o+=r.b}return new A.i(B.c.u(p/q.gm(a)),B.c.u(o/q.gm(a)))},
qf(a){switch(a.a){case 10:case 11:case 9:case 1:case 3:return!0
default:return!1}},
dQ:function dQ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
j3:function j3(a,b){this.a=a
this.b=b},
j5:function j5(){},
j6:function j6(){},
j7:function j7(a){this.a=a},
j4:function j4(a){this.a=a},
ei:function ei(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jp:function jp(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jM:function jM(a,b){this.a=a
this.b=b},
k6:function k6(){},
jH:function jH(a){this.a=a},
jI:function jI(){},
jJ:function jJ(){},
jK:function jK(){},
jL:function jL(){},
kb:function kb(){},
bV:function bV(a,b){this.a=a
this.b=b},
eb:function eb(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.b=a
this.a=b},
ea:function ea(a,b){this.a=a
this.b=b},
ks:function ks(a){this.a=a},
kt:function kt(){},
ku:function ku(a){this.a=a},
pM(a){var s=new A.kC(A.nw(t.h8),A.nw(t.bd))
s.dO(a)
return s},
b2(a,b,c,d){return new A.aG(a,c,d,b)},
kC:function kC(a,b){this.a=null
this.b=a
this.c=b},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(a,b){this.a=a
this.b=b},
ob(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
o8(a){var s=B.f.W(u.s,a>>>6)+(a&63),r=s&1,q=B.f.W(u.M,s>>>1)
return q>>>4&-r|q&15&r-1},
o3(a,b){var s=B.f.W(u.s,1024+(a&1023))+(b&1023),r=s&1,q=B.f.W(u.M,s>>>1)
return q>>>4&-r|q&15&r-1},
r3(a,b){return J.oW(t.n6.a(a),b)},
fD(a){var s,r
if(a instanceof A.a0){s=B.aS
r=null}else if(a instanceof A.a2){s=B.aQ
r=null}else if(a instanceof A.av){s=B.aR
r=0}else{if(a instanceof A.je)s=B.eV
else{J.dw(a)
s=B.aT}r=null}$.n8=$.n8+1
return new A.aU(a,s,r)},
rf(a,b,c){var s,r,q=a.r
if(q!=null){if(b===q.c)return!0
s=a.t()
r=b.t()
if(s==null||r==null)return!1
return c.f.aa(s).h(0,r)}return!0},
rq(a){A.b7(a)
$.mI().O(a,$.mK())
B.cr.dd(window,A.o9())},
mC(){var s=0,r=A.bo(t.z),q,p,o
var $async$mC=A.bp(function(a,b){if(a===1)return A.bl(b,r)
while(true)switch(s){case 0:o=$.mI()
o.e.aU()
q=t.w
q=new A.fz(o,A.c([],q),A.c([],q),A.c([],t.fy),A.c([],t.ge))
p=o.cx.b
new A.c2(p,A.F(p).i("c2<1>")).d4(q.gf_())
q=t.x.a(q.gct())
B.a.l(o.c,q)
B.cr.dd(window,A.o9())
return A.bm(null,r)}})
return A.bn($async$mC,r)}},J={
mD(a,b,c,d){return{i:a,p:b,e:c,x:d}},
lt(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.mB==null){A.rc()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.mo("Return interceptor for "+A.B(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.l2
if(o==null)o=$.l2=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.rk(a)
if(p!=null)return p
if(typeof a=="function")return B.eX
s=Object.getPrototypeOf(a)
if(s==null)return B.bg
if(s===Object.prototype)return B.bg
if(typeof q=="function"){o=$.l2
if(o==null)o=$.l2=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aD,enumerable:false,writable:true,configurable:true})
return B.aD}return B.aD},
pk(a,b){if(a<0||a>4294967295)throw A.d(A.bB(a,0,4294967295,"length",null))
return J.pm(new Array(a),b)},
pl(a,b){if(a<0)throw A.d(A.cL("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("t<0>"))},
pm(a,b){return J.nb(A.c(a,b.i("t<0>")),b)},
nb(a,b){a.fixed$length=Array
return a},
nc(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
pn(a,b){var s,r
for(s=a.length;b<s;){r=B.f.W(a,b)
if(r!==32&&r!==13&&!J.nc(r))break;++b}return b},
po(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.f.as(a,s)
if(r!==32&&r!==13&&!J.nc(r))break}return b},
dr(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dV.prototype
return J.fF.prototype}if(typeof a=="string")return J.cl.prototype
if(a==null)return J.dW.prototype
if(typeof a=="boolean")return J.dU.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof A.v)return a
return J.lt(a)},
az(a){if(typeof a=="string")return J.cl.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof A.v)return a
return J.lt(a)},
ds(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof A.v)return a
return J.lt(a)},
r7(a){if(typeof a=="number")return J.cW.prototype
if(typeof a=="string")return J.cl.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.dc.prototype
return a},
ls(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof A.v)return a
return J.lt(a)},
a_(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dr(a).q(a,b)},
mP(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.rg(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.az(a).h(a,b)},
mQ(a,b,c){return J.ds(a).j(a,b,c)},
oV(a,b,c,d){return J.ls(a).eK(a,b,c,d)},
oW(a,b){return J.r7(a).R(a,b)},
mR(a,b){return J.ds(a).B(a,b)},
oX(a,b){return J.ds(a).E(a,b)},
aA(a){return J.dr(a).gw(a)},
ao(a){return J.ds(a).gA(a)},
ap(a){return J.az(a).gm(a)},
mS(a){return J.ls(a).gbF(a)},
oY(a,b,c){return J.ds(a).d5(a,b,c)},
dw(a){return J.dr(a).k(a)},
a:function a(){},
dU:function dU(){},
dW:function dW(){},
cm:function cm(){},
h5:function h5(){},
dc:function dc(){},
bx:function bx(){},
t:function t(a){this.$ti=a},
jN:function jN(a){this.$ti=a},
dA:function dA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cW:function cW(){},
dV:function dV(){},
fF:function fF(){},
cl:function cl(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.mf.prototype={}
J.a.prototype={
q(a,b){return a===b},
gw(a){return A.cw(a)},
k(a){return"Instance of '"+A.kd(a)+"'"}}
J.dU.prototype={
k(a){return String(a)},
dt(a,b){return b||a},
gw(a){return a?519018:218159},
$iD:1}
J.dW.prototype={
q(a,b){return null==b},
k(a){return"null"},
gw(a){return 0},
$iY:1}
J.cm.prototype={
gw(a){return 0},
k(a){return String(a)}}
J.h5.prototype={}
J.dc.prototype={}
J.bx.prototype={
k(a){var s=a[$.oi()]
if(s==null)return this.dG(a)
return"JavaScript function for "+J.dw(s)},
$ici:1}
J.t.prototype={
l(a,b){A.Z(a).c.a(b)
if(!!a.fixed$length)A.S(A.C("add"))
a.push(b)},
bM(a,b){var s
if(!!a.fixed$length)A.S(A.C("removeAt"))
s=a.length
if(b>=s)throw A.d(A.nm(b,null))
return a.splice(b,1)[0]},
I(a,b){var s
if(!!a.fixed$length)A.S(A.C("remove"))
for(s=0;s<a.length;++s)if(J.a_(a[s],b)){a.splice(s,1)
return!0}return!1},
em(a,b,c){var s,r,q,p,o
A.Z(a).i("D(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.Q(b.$1(p)))s.push(p)
if(a.length!==r)throw A.d(A.be(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
L(a,b){A.Z(a).i("j<1>").a(b)
if(!!a.fixed$length)A.S(A.C("addAll"))
this.dR(a,b)
return},
dR(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.be(a))
for(r=0;r<s;++r)a.push(b[r])},
E(a,b){var s,r
A.Z(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.d(A.be(a))}},
d5(a,b,c){var s=A.Z(a)
return new A.e1(a,s.F(c).i("1(2)").a(b),s.i("@<1>").F(c).i("e1<1,2>"))},
eY(a,b,c){var s,r,q,p=A.Z(a)
p.i("D(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(A.Q(b.$1(q)))return q
if(a.length!==s)throw A.d(A.be(a))}return c.$0()},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
dE(a,b,c){var s=a.length
if(b>s)throw A.d(A.bB(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.bB(c,b,s,"end",null))
if(b===c)return A.c([],A.Z(a))
return A.c(a.slice(b,c),A.Z(a))},
geX(a){if(a.length>0)return a[0]
throw A.d(A.na())},
gdD(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.d(A.na())
throw A.d(A.pj())},
bW(a,b,c,d){var s,r,q,p
A.Z(a).i("j<1>").a(d)
if(!!a.immutable$list)A.S(A.C("setRange"))
A.ki(b,c,a.length)
s=c-b
if(s===0)return
A.kh(0,"skipCount")
r=d
q=J.az(r)
if(s>q.gm(r))throw A.d(A.pi())
if(0<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,p)},
eN(a,b){var s,r
A.Z(a).i("D(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.Q(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.be(a))}return!1},
b1(a,b){var s=A.Z(a)
s.i("h(1,1)?").a(b)
if(!!a.immutable$list)A.S(A.C("sort"))
A.pF(a,b,s.c)},
bX(a){var s,r,q,p
if(!!a.immutable$list)A.S(A.C("shuffle"))
s=a.length
for(;s>1;){r=B.n.H(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
this.j(a,s,a[r])
this.j(a,r,p)}},
f4(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.a_(a[s],b))return s}return-1},
M(a,b){var s
for(s=0;s<a.length;++s)if(J.a_(a[s],b))return!0
return!1},
k(a){return A.me(a,"[","]")},
gA(a){return new J.dA(a,a.length,A.Z(a).i("dA<1>"))},
gw(a){return A.cw(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.S(A.C("set length"))
if(b>a.length)A.Z(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cG(a,b))
return a[b]},
j(a,b,c){A.K(b)
A.Z(a).c.a(c)
if(!!a.immutable$list)A.S(A.C("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.cG(a,b))
a[b]=c},
$ip:1,
$ij:1,
$io:1}
J.jN.prototype={}
J.dA.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.y(q))
s=r.c
if(s>=p){r.sci(null)
return!1}r.sci(q[s]);++r.c
return!0},
sci(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
J.cW.prototype={
R(a,b){var s
A.b7(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaV(b)
if(this.gaV(a)===s)return 0
if(this.gaV(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaV(a){return a===0?1/a<0:a<0},
aG(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.C(""+a+".toInt()"))},
cN(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.C(""+a+".ceil()"))},
ai(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.C(""+a+".floor()"))},
u(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.C(""+a+".round()"))},
an(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
br(a,b,c){if(B.e.R(b,c)>0)throw A.d(A.o_(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
dg(a,b){var s
if(b>20)throw A.d(A.bB(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaV(a))return"-"+s
return s},
fs(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.bB(b,2,36,"radix",null))
s=a.toString(b)
if(B.f.as(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.S(A.C("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.b(r,1)
s=r[1]
if(3>=q)return A.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.f.bV("0",p)},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
ds(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
c2(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cB(a,b)},
Y(a,b){return(a|0)===a?a/b|0:this.cB(a,b)},
cB(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.C("Result of truncating division is "+A.B(s)+": "+A.B(a)+" ~/ "+b))},
cA(a,b){var s
if(a>0)s=this.es(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
es(a,b){return b>31?0:a>>>b},
$iag:1,
$iM:1,
$iN:1}
J.dV.prototype={$ih:1}
J.fF.prototype={}
J.cl.prototype={
as(a,b){if(b<0)throw A.d(A.cG(a,b))
if(b>=a.length)A.S(A.cG(a,b))
return a.charCodeAt(b)},
W(a,b){if(b>=a.length)throw A.d(A.cG(a,b))
return a.charCodeAt(b)},
C(a,b){return a+b},
aI(a,b,c){return a.substring(b,A.ki(b,c,a.length))},
fu(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.W(p,0)===133){s=J.pn(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.as(p,r)===133?J.po(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
bV(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.d3)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
da(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bV(c,s)+a},
bu(a,b,c){var s=a.length
if(c>s)throw A.d(A.bB(c,0,s,null,null))
return A.rs(a,b,c)},
R(a,b){var s
A.af(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
k(a){return a},
gw(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cG(a,b))
return a[b]},
$iag:1,
$ink:1,
$iu:1}
A.cn.prototype={
k(a){var s="LateInitializationError: "+this.a
return s}}
A.km.prototype={}
A.p.prototype={}
A.b3.prototype={
gA(a){var s=this
return new A.bz(s,s.gm(s),A.F(s).i("bz<b3.E>"))}}
A.eg.prototype={
ge5(){var s=J.ap(this.a),r=this.c
if(r==null||r>s)return s
return r},
gev(){var s=J.ap(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.ap(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.V()
return s-q},
B(a,b){var s=this,r=s.gev()+b
if(b<0||r>=s.ge5())throw A.d(A.T(b,s,"index",null,null))
return J.mR(s.a,r)}}
A.bz.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.az(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.be(q))
s=r.c
if(s>=o){r.saz(null)
return!1}r.saz(p.B(q,s));++r.c
return!0},
saz(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
A.cp.prototype={
gA(a){var s=A.F(this)
return new A.e0(J.ao(this.a),this.b,s.i("@<1>").F(s.Q[1]).i("e0<1,2>"))},
gm(a){return J.ap(this.a)}}
A.dM.prototype={$ip:1}
A.e0.prototype={
n(){var s=this,r=s.b
if(r.n()){s.saz(s.c.$1(r.gp(r)))
return!0}s.saz(null)
return!1},
gp(a){return this.$ti.Q[1].a(this.a)},
saz(a){this.a=this.$ti.i("2?").a(a)}}
A.e1.prototype={
gm(a){return J.ap(this.a)},
B(a,b){return this.b.$1(J.mR(this.a,b))}}
A.aP.prototype={
gA(a){return new A.ej(J.ao(this.a),this.b,this.$ti.i("ej<1>"))}}
A.ej.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.Q(r.$1(s.gp(s))))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)}}
A.as.prototype={}
A.cQ.prototype={
k(a){return A.mj(this)},
$iX:1}
A.dI.prototype={
gm(a){return this.a},
aT(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h(a,b){if(!this.aT(0,b))return null
return this.b[A.af(b)]},
E(a,b){var s,r,q,p,o,n=this.$ti
n.i("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.af(s[p])
b.$2(o,n.a(q[o]))}}}
A.ab.prototype={
be(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.pg(r)
o=A.mh(A.qD(),q,r,s.Q[1])
A.o1(p.a,o)
p.$map=o}return o},
h(a,b){return this.be().h(0,b)},
E(a,b){this.$ti.i("~(1,2)").a(b)
this.be().E(0,b)},
gm(a){var s=this.be()
return s.gm(s)}}
A.jC.prototype={
$1(a){return this.a.b(a)},
$S:26}
A.kx.prototype={
a7(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
k(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.fG.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hD.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.k8.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.dN.prototype={}
A.eB.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ib5:1}
A.ce.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.og(r==null?"unknown":r)+"'"},
$ici:1,
gfE(){return this},
$C:"$1",
$R:1,
$D:null}
A.fb.prototype={$C:"$0",$R:0}
A.fc.prototype={$C:"$2",$R:2}
A.hq.prototype={}
A.hm.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.og(s)+"'"}}
A.cO.prototype={
q(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cO))return!1
return this.$_target===b.$_target&&this.a===b.a},
gw(a){return(A.lC(this.a)^A.cw(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kd(t.K.a(this.a))+"'")}}
A.he.prototype={
k(a){return"RuntimeError: "+this.a}}
A.hL.prototype={
k(a){return"Assertion failed: "+A.fq(this.a)}}
A.aF.prototype={
gm(a){return this.a},
gad(a){return new A.dY(this,A.F(this).i("dY<1>"))},
gbS(a){var s=this,r=A.F(s)
return A.ng(s.gad(s),new A.jP(s),r.c,r.Q[1])},
aT(a,b){var s=this.cZ(b)
return s},
cZ(a){var s=this,r=s.d
if(r==null)return!1
return s.ay(s.aJ(r,s.ax(a)),a)>=0},
L(a,b){A.F(this).i("X<1,2>").a(b).E(0,new A.jO(this))},
h(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bf(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bf(p,b)
q=r==null?n:r.b
return q}else return o.d_(b)},
d_(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.aJ(p,q.ax(a))
r=q.ay(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.F(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.c4(s==null?q.b=q.bk():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.c4(r==null?q.c=q.bk():r,b,c)}else q.d1(b,c)},
d1(a,b){var s,r,q,p,o=this,n=A.F(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.bk()
r=o.ax(a)
q=o.aJ(s,r)
if(q==null)o.bp(s,r,[o.bl(a,b)])
else{p=o.ay(q,a)
if(p>=0)q[p].b=b
else q.push(o.bl(a,b))}},
I(a,b){var s=this.d0(b)
return s},
d0(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ax(a)
r=o.aJ(n,s)
q=o.ay(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.eF(p)
if(r.length===0)o.cj(n,s)
return p.b},
aQ(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bj()}},
E(a,b){var s,r,q=this
A.F(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.be(q))
s=s.c}},
c4(a,b,c){var s,r=this,q=A.F(r)
q.c.a(b)
q.Q[1].a(c)
s=r.bf(a,b)
if(s==null)r.bp(a,b,r.bl(b,c))
else s.b=c},
bj(){this.r=this.r+1&67108863},
bl(a,b){var s=this,r=A.F(s),q=new A.jR(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.bj()
return q},
eF(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.bj()},
ax(a){return J.aA(a)&0x3ffffff},
ay(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a_(a[r].a,b))return r
return-1},
k(a){return A.mj(this)},
bf(a,b){return a[b]},
aJ(a,b){return a[b]},
bp(a,b,c){a[b]=c},
cj(a,b){delete a[b]},
bk(){var s="<non-identifier-key>",r=Object.create(null)
this.bp(r,s,r)
this.cj(r,s)
return r},
$ijQ:1}
A.jP.prototype={
$1(a){var s=this.a,r=A.F(s)
return r.Q[1].a(s.h(0,r.c.a(a)))},
$S(){return A.F(this.a).i("2(1)")}}
A.jO.prototype={
$2(a,b){var s=this.a,r=A.F(s)
s.j(0,r.c.a(a),r.Q[1].a(b))},
$S(){return A.F(this.a).i("~(1,2)")}}
A.jR.prototype={}
A.dY.prototype={
gm(a){return this.a.a},
gA(a){var s=this.a,r=new A.dZ(s,s.r,this.$ti.i("dZ<1>"))
r.c=s.e
return r}}
A.dZ.prototype={
gp(a){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.be(q))
s=r.c
if(s==null){r.sc3(null)
return!1}else{r.sc3(s.a)
r.c=s.c
return!0}},
sc3(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
A.lv.prototype={
$1(a){return this.a(a)},
$S:27}
A.lw.prototype={
$2(a,b){return this.a(a,b)},
$S:28}
A.lx.prototype={
$1(a){return this.a(A.af(a))},
$S:44}
A.kN.prototype={
aM(){var s=this.b
if(s===this)throw A.d(new A.cn("Local '"+this.a+"' has not been initialized."))
return s},
ac(){var s=this.b
if(s===this)throw A.d(A.ne(this.a))
return s}}
A.fR.prototype={$in2:1}
A.cu.prototype={$iaO:1}
A.d_.prototype={
gm(a){return a.length},
$iz:1}
A.ct.prototype={
h(a,b){A.bI(b,a,a.length)
return a[b]},
j(a,b,c){A.K(b)
A.nO(c)
A.bI(b,a,a.length)
a[b]=c},
$ip:1,
$ij:1,
$io:1}
A.e3.prototype={
j(a,b,c){A.K(b)
A.K(c)
A.bI(b,a,a.length)
a[b]=c},
$ip:1,
$ij:1,
$io:1}
A.e2.prototype={$imd:1}
A.fS.prototype={
h(a,b){A.bI(b,a,a.length)
return a[b]}}
A.fT.prototype={
h(a,b){A.bI(b,a,a.length)
return a[b]}}
A.fU.prototype={
h(a,b){A.bI(b,a,a.length)
return a[b]}}
A.fV.prototype={
h(a,b){A.bI(b,a,a.length)
return a[b]}}
A.fW.prototype={
h(a,b){A.bI(b,a,a.length)
return a[b]}}
A.d0.prototype={
gm(a){return a.length},
h(a,b){A.bI(b,a,a.length)
return a[b]},
$ipK:1}
A.e4.prototype={
gm(a){return a.length},
h(a,b){A.bI(b,a,a.length)
return a[b]},
$ipL:1}
A.eu.prototype={}
A.ev.prototype={}
A.ew.prototype={}
A.ex.prototype={}
A.b4.prototype={
i(a){return A.lc(v.typeUniverse,this,a)},
F(a){return A.q8(v.typeUniverse,this,a)}}
A.i0.prototype={}
A.eI.prototype={
k(a){return A.an(this.a,null)},
$inA:1}
A.hX.prototype={
k(a){return this.a}}
A.eJ.prototype={$ic0:1}
A.kK.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:13}
A.kJ.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:19}
A.kL.prototype={
$0(){this.a.$0()},
$S:8}
A.kM.prototype={
$0(){this.a.$0()},
$S:8}
A.eH.prototype={
dP(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.bq(new A.lb(this,b),0),a)
else throw A.d(A.C("`setTimeout()` not found."))},
dQ(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.bq(new A.la(this,a,Date.now(),b),0),a)
else throw A.d(A.C("Periodic timer."))},
eQ(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.d(A.C("Canceling a timer."))},
$ihx:1}
A.lb.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.la.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.e.c2(s,o)}q.c=p
r.d.$1(q)},
$S:8}
A.ek.prototype={
Z(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.c6(b)
else{s=r.a
if(q.i("at<1>").b(b))s.c9(b)
else s.aB(q.c.a(b))}},
bs(a,b){var s=this.a
if(this.b)s.P(a,b)
else s.b5(a,b)},
$iff:1}
A.lf.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.lg.prototype={
$2(a,b){this.a.$2(1,new A.dN(a,t.l.a(b)))},
$S:33}
A.lk.prototype={
$2(a,b){this.a(A.K(a),b)},
$S:32}
A.dj.prototype={
k(a){return"IterationMarker("+this.b+", "+A.B(this.a)+")"}}
A.c5.prototype={
gp(a){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gp(s)},
n(){var s,r,q,p,o,n,m=this
for(s=m.$ti.i("U<1>");!0;){r=m.c
if(r!=null)if(r.n())return!0
else m.scq(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.dj){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sc5(null)
return!1}if(0>=o.length)return A.b(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.ao(r))
if(n instanceof A.c5){r=m.d
if(r==null)r=m.d=[]
B.a.l(r,m.a)
m.a=n.a
continue}else{m.scq(n)
continue}}}}else{m.sc5(q)
return!0}}return!1},
sc5(a){this.b=this.$ti.i("1?").a(a)},
scq(a){this.c=this.$ti.i("U<1>?").a(a)},
$iU:1}
A.eE.prototype={
gA(a){return new A.c5(this.a(),this.$ti.i("c5<1>"))}}
A.dC.prototype={
k(a){return A.B(this.a)},
$iL:1,
gaH(){return this.b}}
A.jv.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.P(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.P(q.e.aM(),q.f.aM())},
$S:10}
A.ju.prototype={
$1(a){var s,r,q=this,p=q.x
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.mQ(s,q.b,a)
if(r.b===0)q.c.aB(A.pt(s,p))}else if(r.b===0&&!q.e)q.c.P(q.f.aM(),q.r.aM())},
$S(){return this.x.i("Y(0)")}}
A.dg.prototype={
bs(a,b){A.eR(a,"error",t.K)
if((this.a.a&30)!==0)throw A.d(A.ai("Future already completed"))
if(b==null)b=A.m6(a)
this.P(a,b)},
aS(a){return this.bs(a,null)},
$iff:1}
A.al.prototype={
Z(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.ai("Future already completed"))
s.c6(r.i("1/").a(b))},
aR(a){return this.Z(a,null)},
P(a,b){this.a.b5(a,b)}}
A.dk.prototype={
Z(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.ai("Future already completed"))
s.ce(r.i("1/").a(b))},
aR(a){return this.Z(a,null)},
P(a,b){this.a.P(a,b)}}
A.cD.prototype={
f5(a){if((this.c&15)!==6)return!0
return this.b.b.bN(t.iW.a(this.d),a.a,t.k4,t.K)},
f1(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.fl(q,m,a.b,o,n,t.l)
else p=l.bN(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bE.b(A.br(s))){if((r.c&1)!==0)throw A.d(A.cL("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cL("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.G.prototype={
aY(a,b,c){var s,r,q,p=this.$ti
p.F(c).i("1/(2)").a(a)
s=$.E
if(s===B.m){if(b!=null&&!t.ng.b(b)&&!t.y.b(b))throw A.d(A.mV(b,"onError",u.w))}else{c.i("@<0/>").F(p.c).i("1(2)").a(a)
if(b!=null)b=A.qI(b,s)}r=new A.G(s,c.i("G<0>"))
q=b==null?1:3
this.b3(new A.cD(r,q,a,b,p.i("@<1>").F(c).i("cD<1,2>")))
return r},
bO(a,b){return this.aY(a,null,b)},
cC(a,b,c){var s,r=this.$ti
r.F(c).i("1/(2)").a(a)
s=new A.G($.E,c.i("G<0>"))
this.b3(new A.cD(s,19,a,b,r.i("@<1>").F(c).i("cD<1,2>")))
return s},
eq(a){this.a=this.a&1|16
this.c=a},
b7(a){this.a=a.a&30|this.a&1
this.c=a.c},
b3(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.g.a(r.c)
if((s.a&24)===0){s.b3(a)
return}r.b7(s)}A.dp(null,null,r.b,t.M.a(new A.kQ(r,a)))}},
cu(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.g.a(m.c)
if((n.a&24)===0){n.cu(a)
return}m.b7(n)}l.a=m.aO(a)
A.dp(null,null,m.b,t.M.a(new A.kY(l,m)))}},
aN(){var s=t.F.a(this.c)
this.c=null
return this.aO(s)},
aO(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
c8(a){var s,r,q,p=this
p.a^=2
try{a.aY(new A.kU(p),new A.kV(p),t.P)}catch(q){s=A.br(q)
r=A.bK(q)
A.od(new A.kW(p,s,r))}},
ce(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("at<1>").b(a))if(q.b(a))A.kT(a,r)
else r.c8(a)
else{s=r.aN()
q.c.a(a)
r.a=8
r.c=a
A.di(r,s)}},
aB(a){var s,r=this
r.$ti.c.a(a)
s=r.aN()
r.a=8
r.c=a
A.di(r,s)},
P(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.aN()
this.eq(A.iX(a,b))
A.di(this,s)},
c6(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("at<1>").b(a)){this.c9(a)
return}this.dU(s.c.a(a))},
dU(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.dp(null,null,s.b,t.M.a(new A.kS(s,a)))},
c9(a){var s=this,r=s.$ti
r.i("at<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.dp(null,null,s.b,t.M.a(new A.kX(s,a)))}else A.kT(a,s)
return}s.c8(a)},
b5(a,b){t.l.a(b)
this.a^=2
A.dp(null,null,this.b,t.M.a(new A.kR(this,a,b)))},
$iat:1}
A.kQ.prototype={
$0(){A.di(this.a,this.b)},
$S:0}
A.kY.prototype={
$0(){A.di(this.b,this.a.a)},
$S:0}
A.kU.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.aB(p.$ti.c.a(a))}catch(q){s=A.br(q)
r=A.bK(q)
p.P(s,r)}},
$S:13}
A.kV.prototype={
$2(a,b){this.a.P(t.K.a(a),t.l.a(b))},
$S:21}
A.kW.prototype={
$0(){this.a.P(this.b,this.c)},
$S:0}
A.kS.prototype={
$0(){this.a.aB(this.b)},
$S:0}
A.kX.prototype={
$0(){A.kT(this.b,this.a)},
$S:0}
A.kR.prototype={
$0(){this.a.P(this.b,this.c)},
$S:0}
A.l0.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.fk(t.mY.a(q.d),t.z)}catch(p){s=A.br(p)
r=A.bK(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.iX(s,r)
o.b=!0
return}if(l instanceof A.G&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.h.b(l)){n=m.b.a
q=m.a
q.c=l.bO(new A.l1(n),t.z)
q.b=!1}},
$S:0}
A.l1.prototype={
$1(a){return this.a},
$S:37}
A.l_.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bN(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.br(l)
r=A.bK(l)
q=this.a
q.c=A.iX(s,r)
q.b=!0}},
$S:0}
A.kZ.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.f5(s)&&p.a.e!=null){p.c=p.a.f1(s)
p.b=!1}}catch(o){r=A.br(o)
q=A.bK(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.iX(r,q)
n.b=!0}},
$S:0}
A.hM.prototype={}
A.cx.prototype={
gm(a){var s={},r=new A.G($.E,t.hy)
s.a=0
this.bE(new A.kq(s,this),!0,new A.kr(s,r),r.gdZ())
return r}}
A.kq.prototype={
$1(a){A.F(this.b).c.a(a);++this.a.a},
$S(){return A.F(this.b).i("~(1)")}}
A.kr.prototype={
$0(){this.b.ce(this.a.a)},
$S:0}
A.bD.prototype={}
A.eC.prototype={
gei(){var s,r=this
if((r.b&8)===0)return A.F(r).i("c4<1>?").a(r.a)
s=A.F(r)
return s.i("c4<1>?").a(s.i("iq<1>").a(r.a).gbT())},
e6(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.bk(A.F(q).i("bk<1>"))
return A.F(q).i("bk<1>").a(s)}r=A.F(q)
s=r.i("iq<1>").a(q.a).gbT()
return r.i("bk<1>").a(s)},
gex(){var s=this.a
if((this.b&8)!==0)s=t.gL.a(s).gbT()
return A.F(this).i("dh<1>").a(s)},
dV(){if((this.b&4)!==0)return new A.bC("Cannot add event after closing")
return new A.bC("Cannot add event while adding a stream")},
l(a,b){var s,r=this,q=A.F(r)
q.c.a(b)
s=r.b
if(s>=4)throw A.d(r.dV())
if((s&1)!==0)r.bo(b)
else if((s&3)===0)r.e6().l(0,new A.cA(b,q.i("cA<1>")))},
ew(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=A.F(l)
k.i("~(1)?").a(a)
t.Z.a(c)
if((l.b&3)!==0)throw A.d(A.ai("Stream has already been listened to."))
s=$.E
r=d?1:0
t.bm.F(k.c).i("1(2)").a(a)
A.pR(s,b)
q=c==null?A.qW():c
p=t.M
p.a(q)
o=new A.dh(l,a,s,r,k.i("dh<1>"))
n=l.gei()
r=l.b|=1
if((r&8)!==0){m=k.i("iq<1>").a(l.a)
m.sbT(o)
m.fi(0)}else l.a=o
o.er(n)
k=p.a(new A.l8(l))
s=o.e
o.e=s|32
k.$0()
o.e&=4294967263
o.ca((s&4)!==0)
return o},
$inv:1,
$inH:1,
$icC:1}
A.l8.prototype={
$0(){A.mz(this.a.d)},
$S:0}
A.hN.prototype={
bo(a){var s=this.$ti
s.c.a(a)
this.gex().dT(new A.cA(a,s.i("cA<1>")))}}
A.df.prototype={}
A.c2.prototype={
gw(a){return(A.cw(this.a)^892482866)>>>0},
q(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.c2&&b.a===this.a}}
A.dh.prototype={
cr(){var s=this.x,r=A.F(s)
r.i("bD<1>").a(this)
if((s.b&8)!==0)r.i("iq<1>").a(s.a).fG(0)
A.mz(s.e)},
cs(){var s=this.x,r=A.F(s)
r.i("bD<1>").a(this)
if((s.b&8)!==0)r.i("iq<1>").a(s.a).fi(0)
A.mz(s.f)}}
A.el.prototype={
er(a){var s=this
A.F(s).i("c4<1>?").a(a)
if(a==null)return
s.sbm(a)
if(a.c!=null){s.e|=64
a.b_(s)}},
cr(){},
cs(){},
dT(a){var s=this,r=A.F(s),q=r.i("bk<1>?").a(s.r)
if(q==null)q=new A.bk(r.i("bk<1>"))
s.sbm(q)
q.l(0,a)
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.b_(s)}},
bo(a){var s,r=this,q=A.F(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.de(r.a,a,q)
r.e&=4294967263
r.ca((s&4)!==0)},
ca(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.sbm(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.cr()
else q.cs()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.b_(q)},
sbm(a){this.r=A.F(this).i("c4<1>?").a(a)},
$ibD:1,
$icC:1}
A.eD.prototype={
bE(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.ew(s.i("~(1)?").a(a),d,c,b===!0)},
d4(a){return this.bE(a,null,null,null)}}
A.hS.prototype={}
A.cA.prototype={}
A.c4.prototype={
b_(a){var s,r=this
r.$ti.i("cC<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.od(new A.l5(r,a))
r.a=1}}
A.l5.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("cC<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.F(r).i("cC<1>").a(s).bo(r.b)},
$S:0}
A.bk.prototype={
l(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else s.c=r.a=b}}
A.ir.prototype={}
A.eM.prototype={$inC:1}
A.lj.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.k(0)
throw s},
$S:0}
A.ij.prototype={
fm(a){var s,r,q,p,o
t.M.a(a)
try{if(B.m===$.E){a.$0()
return}A.nV(null,null,this,a,t.H)}catch(q){s=A.br(q)
r=A.bK(q)
p=t.K.a(s)
o=t.l.a(r)
A.iR(p,o)}},
de(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.m===$.E){a.$1(b)
return}A.nW(null,null,this,a,b,t.H,c)}catch(q){s=A.br(q)
r=A.bK(q)
p=t.K.a(s)
o=t.l.a(r)
A.iR(p,o)}},
cK(a){return new A.l6(this,t.M.a(a))},
cL(a,b){return new A.l7(this,b.i("~(0)").a(a),b)},
h(a,b){return null},
fk(a,b){b.i("0()").a(a)
if($.E===B.m)return a.$0()
return A.nV(null,null,this,a,b)},
bN(a,b,c,d){c.i("@<0>").F(d).i("1(2)").a(a)
d.a(b)
if($.E===B.m)return a.$1(b)
return A.nW(null,null,this,a,b,c,d)},
fl(a,b,c,d,e,f){d.i("@<0>").F(e).F(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.E===B.m)return a.$2(b,c)
return A.qJ(null,null,this,a,b,c,d,e,f)},
bK(a,b,c,d){return b.i("@<0>").F(c).F(d).i("1(2,3)").a(a)}}
A.l6.prototype={
$0(){return this.a.fm(this.b)},
$S:0}
A.l7.prototype={
$1(a){var s=this.c
return this.a.de(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.l4.prototype={
ax(a){return A.lC(a)&1073741823},
ay(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.eq.prototype={
h(a,b){if(!A.Q(this.z.$1(b)))return null
return this.dI(b)},
j(a,b,c){var s=this.$ti
this.dK(s.c.a(b),s.Q[1].a(c))},
aT(a,b){if(!A.Q(this.z.$1(b)))return!1
return this.dH(b)},
I(a,b){if(!A.Q(this.z.$1(b)))return null
return this.dJ(b)},
ax(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
ay(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(A.Q(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.l3.prototype={
$1(a){return this.a.b(a)},
$S:39}
A.er.prototype={
gA(a){var s=this,r=new A.es(s,s.r,s.$ti.i("es<1>"))
r.c=s.e
return r},
gm(a){return this.a},
M(a,b){var s
if(typeof b=="number"&&(b&1073741823)===b){s=this.c
if(s==null)return!1
return t.nF.a(s[b])!=null}else return this.e_(b)},
e_(a){var s=this.d
if(s==null)return!1
return this.bd(s[J.aA(a)&1073741823],a)>=0},
l(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cb(s==null?q.b=A.mq():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cb(r==null?q.c=A.mq():r,b)}else return q.dX(0,b)},
dX(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.mq()
r=J.aA(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.b8(b)]
else{if(p.bd(q,b)>=0)return!1
q.push(p.b8(b))}return!0},
I(a,b){var s=this.ek(0,b)
return s},
ek(a,b){var s,r,q,p,o=this.d
if(o==null)return!1
s=b.gw(b)&1073741823
r=o[s]
q=this.bd(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.dY(p)
return!0},
cb(a,b){this.$ti.c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.b8(b)
return!0},
cd(){this.r=this.r+1&1073741823},
b8(a){var s,r=this,q=new A.i7(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cd()
return q},
dY(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cd()},
bd(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a_(a[r].a,b))return r
return-1}}
A.i7.prototype={}
A.es.prototype={
gp(a){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.be(q))
else if(r==null){s.scc(null)
return!1}else{s.scc(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
scc(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
A.dT.prototype={}
A.jS.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:60}
A.l.prototype={
gA(a){return new A.bz(a,this.gm(a),A.b9(a).i("bz<l.E>"))},
B(a,b){return this.h(a,b)},
ah(a,b,c,d){var s,r=A.b9(a)
d=r.i("l.E").a(r.i("l.E?").a(d))
A.ki(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
k(a){return A.me(a,"[","]")}}
A.e_.prototype={}
A.jW.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.B(a)
r.a=s+": "
r.a+=A.B(b)},
$S:61}
A.A.prototype={
E(a,b){var s,r,q=A.b9(a)
q.i("~(A.K,A.V)").a(b)
for(s=J.ao(this.gad(a)),q=q.i("A.V");s.n();){r=s.gp(s)
b.$2(r,q.a(this.h(a,r)))}},
gat(a){return J.oY(this.gad(a),new A.jY(a),A.b9(a).i("cX<A.K,A.V>"))},
gm(a){return J.ap(this.gad(a))},
k(a){return A.mj(a)},
$iX:1}
A.jY.prototype={
$1(a){var s,r=this.a,q=A.b9(r)
q.i("A.K").a(a)
s=q.i("A.V")
return new A.cX(a,s.a(J.mP(r,a)),q.i("@<A.K>").F(s).i("cX<1,2>"))},
$S(){return A.b9(this.a).i("cX<A.K,A.V>(A.K)")}}
A.ec.prototype={
k(a){return A.me(this,"{","}")}}
A.ey.prototype={$ip:1,$ij:1,$inr:1}
A.eN.prototype={}
A.cg.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.cg&&this.a===b.a&&!0},
R(a,b){return B.e.R(this.a,t.cs.a(b).a)},
gw(a){var s=this.a
return(s^B.e.cA(s,30))&1073741823},
k(a){var s=this,r=A.p6(A.pC(s)),q=A.fk(A.pA(s)),p=A.fk(A.pw(s)),o=A.fk(A.px(s)),n=A.fk(A.pz(s)),m=A.fk(A.pB(s)),l=A.p7(A.py(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
return k},
$iag:1}
A.ah.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.ah&&this.a===b.a},
gw(a){return B.e.gw(this.a)},
R(a,b){return B.e.R(this.a,t.J.a(b).a)},
k(a){var s,r,q,p,o,n=this.a,m=B.e.Y(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.e.Y(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.e.Y(n,1e6)
p=q<10?"0":""
o=B.f.da(B.e.k(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o},
$iag:1}
A.kO.prototype={}
A.L.prototype={
gaH(){return A.bK(this.$thrownJsError)}}
A.dB.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fq(s)
return"Assertion failed"}}
A.c0.prototype={}
A.h_.prototype={
k(a){return"Throw of null."}}
A.bs.prototype={
gbc(){return"Invalid argument"+(!this.a?"(s)":"")},
gbb(){return""},
k(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+A.B(n),l=q.gbc()+o+m
if(!q.a)return l
s=q.gbb()
r=A.fq(q.b)
return l+s+": "+r}}
A.d4.prototype={
gbc(){return"RangeError"},
gbb(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.B(q):""
else if(q==null)s=": Not greater than or equal to "+A.B(r)
else if(q>r)s=": Not in inclusive range "+A.B(r)+".."+A.B(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.B(r)
return s}}
A.fC.prototype={
gbc(){return"RangeError"},
gbb(){if(A.K(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.hF.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.hC.prototype={
k(a){var s="UnimplementedError: "+this.a
return s}}
A.bC.prototype={
k(a){return"Bad state: "+this.a}}
A.fg.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fq(s)+"."}}
A.h2.prototype={
k(a){return"Out of Memory"},
gaH(){return null},
$iL:1}
A.ef.prototype={
k(a){return"Stack Overflow"},
gaH(){return null},
$iL:1}
A.fj.prototype={
k(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.hY.prototype={
k(a){return"Exception: "+this.a}}
A.j.prototype={
d5(a,b,c){var s=A.F(this)
return A.ng(this,s.F(c).i("1(j.E)").a(b),s.i("j.E"),c)},
E(a,b){var s
A.F(this).i("~(j.E)").a(b)
for(s=this.gA(this);s.n();)b.$1(s.gp(s))},
gm(a){var s,r=this.gA(this)
for(s=0;r.n();)++s
return s},
B(a,b){var s,r,q
A.kh(b,"index")
for(s=this.gA(this),r=0;s.n();){q=s.gp(s)
if(b===r)return q;++r}throw A.d(A.T(b,this,"index",null,r))},
k(a){return A.n9(this,"(",")")}}
A.U.prototype={}
A.cX.prototype={
k(a){return"MapEntry("+A.B(this.a)+": "+A.B(this.b)+")"}}
A.Y.prototype={
gw(a){return A.v.prototype.gw.call(this,this)},
k(a){return"null"}}
A.v.prototype={$iv:1,
q(a,b){return this===b},
gw(a){return A.cw(this)},
k(a){return"Instance of '"+A.kd(this)+"'"},
toString(){return this.k(this)}}
A.iu.prototype={
k(a){return""},
$ib5:1}
A.ho.prototype={
gm(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.q.prototype={}
A.iV.prototype={
gm(a){return a.length}}
A.eZ.prototype={
k(a){return String(a)}}
A.f_.prototype={
k(a){return String(a)}}
A.f5.prototype={}
A.f6.prototype={
gbF(a){return new A.cB(a,"load",!1,t.bz)}}
A.cb.prototype={
sak(a,b){a.height=b},
sap(a,b){a.width=b},
dr(a,b){return a.getContext(b)},
$icb:1}
A.bc.prototype={
gm(a){return a.length}}
A.jf.prototype={
gm(a){return a.length}}
A.I.prototype={$iI:1}
A.cR.prototype={
dW(a,b){var s=$.oh(),r=s[b]
if(typeof r=="string")return r
r=this.ey(a,b)
s[b]=r
return r},
ey(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.oj()+b
if(s in a)return s
return b},
gm(a){return a.length}}
A.jg.prototype={}
A.b0.prototype={}
A.bu.prototype={}
A.jh.prototype={
gm(a){return a.length}}
A.ji.prototype={
gm(a){return a.length}}
A.jj.prototype={
gm(a){return a.length},
h(a,b){return a[b]}}
A.bv.prototype={$ibv:1}
A.bS.prototype={
k(a){return String(a)},
$ibS:1}
A.dK.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.mx.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.dL.prototype={
k(a){var s,r=a.left
r.toString
r="Rectangle ("+A.B(r)+", "
s=a.top
s.toString
return r+A.B(s)+") "+A.B(this.gap(a))+" x "+A.B(this.gak(a))},
q(a,b){var s,r
if(b==null)return!1
if(t.mx.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=J.ls(b)
s=this.gap(a)===s.gap(b)&&this.gak(a)===s.gak(b)}else s=!1}else s=!1}else s=!1
return s},
gw(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.cv(r,s,this.gap(a),this.gak(a))},
gcn(a){return a.height},
gak(a){var s=this.gcn(a)
s.toString
return s},
gcD(a){return a.width},
gap(a){var s=this.gcD(a)
s.toString
return s},
$ibi:1}
A.fm.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
A.af(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.jk.prototype={
gm(a){return a.length}}
A.a7.prototype={
k(a){return a.localName},
gbF(a){return new A.cB(a,"load",!1,t.bz)},
$ia7:1}
A.k.prototype={$ik:1}
A.e.prototype={
eK(a,b,c,d){t.du.a(c)
if(c!=null)this.dS(a,b,c,!1)},
dS(a,b,c,d){return a.addEventListener(b,A.bq(t.du.a(c),1),!1)},
$ie:1}
A.aC.prototype={$iaC:1}
A.fs.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.et.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.ft.prototype={
gm(a){return a.length}}
A.fw.prototype={
gm(a){return a.length}}
A.aD.prototype={$iaD:1}
A.jG.prototype={
gm(a){return a.length}}
A.cj.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fh.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.dS.prototype={
fc(a,b,c){return a.open(b,c)}}
A.ck.prototype={}
A.cV.prototype={$icV:1}
A.by.prototype={$iby:1}
A.jV.prototype={
k(a){return String(a)}}
A.cr.prototype={}
A.k_.prototype={
gm(a){return a.length}}
A.fN.prototype={
h(a,b){return A.c8(a.get(A.af(b)))},
E(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c8(r.value[1]))}},
gad(a){var s=A.c([],t.s)
this.E(a,new A.k2(s))
return s},
gm(a){return a.size},
$iX:1}
A.k2.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.fO.prototype={
h(a,b){return A.c8(a.get(A.af(b)))},
E(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c8(r.value[1]))}},
gad(a){var s=A.c([],t.s)
this.E(a,new A.k3(s))
return s},
gm(a){return a.size},
$iX:1}
A.k3.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.aH.prototype={$iaH:1}
A.fP.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.ib.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.aI.prototype={$iaI:1}
A.w.prototype={
k(a){var s=a.nodeValue
return s==null?this.dF(a):s},
$iw:1}
A.e5.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fh.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.aJ.prototype={
gm(a){return a.length},
$iaJ:1}
A.h6.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.d8.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.hd.prototype={
h(a,b){return A.c8(a.get(A.af(b)))},
E(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c8(r.value[1]))}},
gad(a){var s=A.c([],t.s)
this.E(a,new A.kk(s))
return s},
gm(a){return a.size},
$iX:1}
A.kk.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.hf.prototype={
gm(a){return a.length}}
A.ax.prototype={$iax:1}
A.hj.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fm.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.aL.prototype={$iaL:1}
A.hk.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.cA.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.aM.prototype={
gm(a){return a.length},
$iaM:1}
A.hn.prototype={
h(a,b){return a.getItem(A.af(b))},
E(a,b){var s,r,q
t.gS.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gad(a){var s=A.c([],t.s)
this.E(a,new A.kp(s))
return s},
gm(a){return a.length},
$iX:1}
A.kp.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:20}
A.aj.prototype={$iaj:1}
A.ay.prototype={$iay:1}
A.ad.prototype={$iad:1}
A.hv.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.gJ.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.hw.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.dQ.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.kv.prototype={
gm(a){return a.length}}
A.aN.prototype={$iaN:1}
A.hy.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.ki.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.kw.prototype={
gm(a){return a.length}}
A.bj.prototype={}
A.kA.prototype={
k(a){return String(a)}}
A.dd.prototype={$idd:1}
A.hH.prototype={
gm(a){return a.length}}
A.de.prototype={
dd(a,b){var s
t.hv.a(b)
this.e7(a)
s=A.nY(b,t.cZ)
s.toString
return this.en(a,s)},
en(a,b){return a.requestAnimationFrame(A.bq(t.hv.a(b),1))},
e7(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.hQ.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.d5.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.em.prototype={
k(a){var s,r=a.left
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
q(a,b){var s,r
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
r=J.ls(b)
if(s===r.gap(b)){s=a.height
s.toString
r=s===r.gak(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gw(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.cv(p,s,r,q)},
gcn(a){return a.height},
gak(a){var s=a.height
s.toString
return s},
gcD(a){return a.width},
gap(a){var s=a.width
s.toString
return s}}
A.i1.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.ef.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.et.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.fh.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.io.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.hH.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.iv.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a[b]},
j(a,b,c){A.K(b)
t.lv.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
$ip:1,
$iz:1,
$ij:1,
$io:1}
A.mb.prototype={}
A.en.prototype={
bE(a,b,c,d){var s=A.F(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return A.ep(this.a,this.b,a,!1,s.c)}}
A.cB.prototype={}
A.eo.prototype={}
A.kP.prototype={
$1(a){return this.a.$1(t.L.a(a))},
$S:9}
A.r.prototype={
gA(a){return new A.dO(a,this.gm(a),A.b9(a).i("dO<r.E>"))}}
A.dO.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sco(J.mP(s.a,r))
s.c=r
return!0}s.sco(null)
s.c=q
return!1},
gp(a){return this.$ti.c.a(this.d)},
sco(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
A.hR.prototype={}
A.hT.prototype={}
A.hU.prototype={}
A.hV.prototype={}
A.hW.prototype={}
A.hZ.prototype={}
A.i_.prototype={}
A.i2.prototype={}
A.i3.prototype={}
A.i8.prototype={}
A.i9.prototype={}
A.ia.prototype={}
A.ib.prototype={}
A.ic.prototype={}
A.id.prototype={}
A.ih.prototype={}
A.ii.prototype={}
A.ik.prototype={}
A.ez.prototype={}
A.eA.prototype={}
A.il.prototype={}
A.im.prototype={}
A.ip.prototype={}
A.iw.prototype={}
A.ix.prototype={}
A.eF.prototype={}
A.eG.prototype={}
A.iz.prototype={}
A.iA.prototype={}
A.iH.prototype={}
A.iI.prototype={}
A.iJ.prototype={}
A.iK.prototype={}
A.iL.prototype={}
A.iM.prototype={}
A.iN.prototype={}
A.iO.prototype={}
A.iP.prototype={}
A.iQ.prototype={}
A.kG.prototype={
cU(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.l(r,a)
B.a.l(this.b,null)
return q},
bU(a){var s,r,q,p,o,n,m,l,k=this,j={}
if(a==null)return a
if(A.lh(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.S(A.cL("DateTime is outside valid range: "+s,null))
A.eR(!0,"isUtc",t.k4)
return new A.cg(s,!0)}if(a instanceof RegExp)throw A.d(A.mo("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.ro(a,t.z)
if(A.o7(a)){q=k.cU(a)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=j.a=r[q]
if(p!=null)return p
o=t.z
p=A.ac(o,o)
j.a=p
B.a.j(r,q,p)
k.eZ(a,new A.kI(j,k))
return j.a}if(a instanceof Array){n=a
q=k.cU(n)
r=k.b
if(!(q<r.length))return A.b(r,q)
p=r[q]
if(p!=null)return p
o=J.az(n)
m=o.gm(n)
p=k.c?new Array(m):n
B.a.j(r,q,p)
for(r=J.ds(p),l=0;l<m;++l)r.j(p,l,k.bU(o.h(n,l)))
return p}return a}}
A.kI.prototype={
$2(a,b){var s=this.a.a,r=this.b.bU(b)
J.mQ(s,a,r)
return r},
$S:22}
A.kH.prototype={
eZ(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.k7.prototype={
k(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.lN.prototype={
$1(a){return this.a.Z(0,this.b.i("0/?").a(a))},
$S:5}
A.lO.prototype={
$1(a){if(a==null)return this.a.aS(new A.k7(a===undefined))
return this.a.aS(a)},
$S:5}
A.i4.prototype={
H(a){if(a<=0||a>4294967296)throw A.d(A.pD("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
J(){return Math.random()},
f8(){return Math.random()<0.5},
$inl:1}
A.aV.prototype={$iaV:1}
A.fH.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
t.kT.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.aY.prototype={$iaY:1}
A.h0.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
t.ai.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.kc.prototype={
gm(a){return a.length}}
A.hp.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
A.af(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.n.prototype={
gbF(a){return new A.cB(a,"load",!1,t.bz)}}
A.aZ.prototype={$iaZ:1}
A.hz.prototype={
gm(a){return a.length},
h(a,b){if(b>>>0!==b||b>=a.length)throw A.d(A.T(b,a,null,null,null))
return a.getItem(b)},
j(a,b,c){A.K(b)
t.hk.a(c)
throw A.d(A.C("Cannot assign element of immutable List."))},
B(a,b){return this.h(a,b)},
$ip:1,
$ij:1,
$io:1}
A.i5.prototype={}
A.i6.prototype={}
A.ie.prototype={}
A.ig.prototype={}
A.is.prototype={}
A.it.prototype={}
A.iB.prototype={}
A.iC.prototype={}
A.ba.prototype={
gm(a){return a.length},
$iba:1}
A.dE.prototype={
seP(a,b){a.buffer=b}}
A.ca.prototype={
e3(a,b,c,d){t.p0.a(c)
t.lW.a(d)
return a.decodeAudioData(b,A.bq(c,1),A.bq(d,1))},
eS(a,b){var s=new A.G($.E,t.og),r=new A.al(s,t.oJ)
this.e3(a,b,new A.j0(r),new A.j1(r))
return s},
$ica:1}
A.j0.prototype={
$1(a){this.a.Z(0,t.bD.a(a))},
$S:23}
A.j1.prototype={
$1(a){this.a.aS(t.jW.a(a))},
$S:24}
A.H.prototype={
cf(a,b,c,d){return a.connect(b,c,d)},
$iH:1}
A.f0.prototype={
sfD(a,b){a.value=b}}
A.f1.prototype={
h(a,b){return A.c8(a.get(A.af(b)))},
E(a,b){var s,r
t.E.a(b)
s=a.entries()
for(;!0;){r=s.next()
if(r.done)return
b.$2(r.value[0],A.c8(r.value[1]))}},
gad(a){var s=A.c([],t.s)
this.E(a,new A.j2(s))
return s},
gm(a){return a.size},
$iX:1}
A.j2.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:6}
A.bt.prototype={}
A.f2.prototype={
gm(a){return a.length}}
A.dF.prototype={}
A.cU.prototype={}
A.h1.prototype={
gm(a){return a.length}}
A.hP.prototype={}
A.f8.prototype={$if8:1}
A.fy.prototype={$ify:1}
A.h7.prototype={$ih7:1}
A.d5.prototype={
cM(a,b){return a.bindVertexArray(b)},
cJ(a,b,c){return a.bindBuffer(b,c)},
aE(a,b,c){return a.bindFramebuffer(b,c)},
N(a,b,c){return a.bindTexture(b,c)},
cP(a,b){return a.deleteTexture(b)},
bA(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aF(a,b,c,d,e,f,g,h,i,j){var s=this,r=i==null
if(!r&&h!=null&&A.mx(g)){s.eA(a,b,c,d,e,f,g,h,i,j)
return}if(t.hQ.b(g)&&h==null&&r&&j==null){s.eB(a,b,c,d,e,f,g)
return}if(t.jQ.b(g)&&h==null&&r&&j==null){s.eC(a,b,c,d,e,f,g)
return}if(t.eL.b(g)&&h==null&&r&&j==null){s.eD(a,b,c,d,e,f,g)
return}throw A.d(A.cL("Incorrect number or type of arguments",null))},
df(a,b,c,d,e,f,g){return this.aF(a,b,c,d,e,f,g,null,null,null)},
eA(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
eB(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
eC(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
eD(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fv(a,b,c){return a.uniform1f(b,c)},
fw(a,b,c){return a.uniform1i(b,c)},
fz(a,b,c,d){return a.uniform2f(b,c,d)},
fA(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fB(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fC(a,b){return a.useProgram(b)},
$id5:1}
A.bF.prototype={$ibF:1}
A.hB.prototype={$ihB:1}
A.hG.prototype={$ihG:1}
A.bE.prototype={
gA(a){return new A.d9(this.a,0,0)},
gm(a){var s,r,q=this.a,p=q.length
if(p===0)return 0
s=new A.j8(q,p,0,176)
for(r=0;s.f9()>=0;)++r
return r},
q(a,b){if(b==null)return!1
return t.m1.b(b)&&this.a===b.a},
gw(a){return B.f.gw(this.a)},
k(a){return this.a},
$in3:1}
A.d9.prototype={
gp(a){var s=this,r=s.d
return r==null?s.d=B.f.aI(s.a,s.b,s.c):r},
n(){return this.b4(1,this.c)},
b4(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(a>0){s=j.c
for(r=j.a,q=r.length,p=176;s<q;s=n){o=B.f.as(r,s)
n=s+1
if((o&64512)!==55296)m=A.o8(o)
else if(n<q){l=B.f.as(r,n)
if((l&64512)===56320){++n
m=A.o3(o,l)}else m=2}else m=2
p=B.f.W(u.S,(p&240|m)>>>0)
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
$iU:1}
A.j8.prototype={
f9(){var s,r,q,p,o,n,m,l=this,k=u.S
for(s=l.b,r=l.a;q=l.c,q<s;){p=l.c=q+1
o=B.f.W(r,q)
if((o&64512)!==55296){p=B.f.W(k,l.d&240|A.o8(o))
l.d=p
if((p&1)===0)return q
continue}if(p<s){n=B.f.W(r,p)
if((n&64512)===56320){m=A.o3(o,n);++l.c}else m=2}else m=2
p=B.f.W(k,(l.d&240|m)>>>0)
l.d=p
if((p&1)===0)return q}s=B.f.W(k,l.d&240|15)
l.d=s
if((s&1)===0)return q
return-1}}
A.fB.prototype={
ba(a){var s=this.b
if(!(a>=0&&a<s.length))return A.b(s,a)
s=s[a]
return s==null?this.$ti.c.a(null):s},
l(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b);++o.d
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.bh(q,null,!1,n.i("1?"))
B.a.bW(p,0,o.c,o.b)
o.sbn(p)}o.b6(b,o.c++)},
gm(a){return this.c},
I(a,b){var s,r,q=this
q.$ti.c.a(b)
s=q.ed(b)
if(s<0)return!1;++q.d
r=q.el()
if(s<q.c)if(q.a.$2(r,b)<=0)q.b6(r,s)
else q.c7(r,s)
return!0},
eE(){var s,r,q=this.$ti,p=A.c([],q.i("t<1>"))
for(q=q.c,s=0;s<this.c;++s){r=this.b
if(!(s<r.length))return A.b(r,s)
r=r[s]
p.push(r==null?q.a(null):r)}return p},
k(a){var s=this.b
return A.n9(A.ny(s,0,A.eR(this.c,"count",t.S),A.Z(s).c),"(",")")},
aA(a,b){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
s=o.c
r=o.b.length
if(s===r){q=r*2+1
if(q<7)q=7
p=A.bh(q,null,!1,n.i("1?"))
B.a.bW(p,0,o.c,o.b)
o.sbn(p)}o.b6(b,o.c++)},
ed(a){var s,r,q,p,o,n,m,l=this
l.$ti.c.a(a)
if(l.c===0)return-1
s=l.a
r=1
do c$0:{q=r-1
p=l.ba(q)
o=s.$2(p,a)
if(o<=0){if(o===0&&J.a_(p,a))return q
n=r*2
if(n<=l.c){r=n
break c$0}}m=l.c
do{for(;(r&1)===1;)r=r>>>1;++r}while(r>m)}while(r!==1)
return-1},
el(){var s=this,r=s.c-1,q=s.ba(r)
B.a.j(s.b,r,null)
s.c=r
return q},
b6(a,b){var s,r,q,p,o=this,n=o.$ti.c
n.a(a)
for(s=o.a;b>0;b=r){r=B.e.Y(b-1,2)
q=o.b
if(!(r>=0&&r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=n.a(null)
q=s.$2(a,p)
if(typeof q!=="number")return q.a2()
if(q>0)break
B.a.j(o.b,b,p)}B.a.j(o.b,b,a)},
c7(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.$ti.c
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
if(p<q){j=i.ba(p)
if(r.$2(a,j)>0){B.a.j(i.b,b,j)
b=p}}B.a.j(i.b,b,a)},
sbn(a){this.b=this.$ti.i("o<1?>").a(a)}}
A.ld.prototype={
gA(a){var s=this.a
return new A.cE(s,s.d,this.$ti.i("cE<1>"))}}
A.cE.prototype={
n(){var s,r=this,q=r.a
if(r.b!==q.d)throw A.d(A.be(q))
s=r.d+1
if(0<=s&&s<q.c){q=q.b
if(!(s>=0&&s<q.length))return A.b(q,s)
r.scv(q[s])
r.d=s
return!0}r.scv(null)
r.d=-2
return!1},
gp(a){var s
if(this.d<0)s=A.S(A.ai("No element"))
else{s=this.c
if(s==null)s=this.$ti.c.a(null)}return s},
scv(a){this.c=this.$ti.i("1?").a(a)},
$iU:1}
A.f.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.f&&b.a===this.a},
gw(a){return B.e.gw(this.a)},
k(a){return"Color(0x"+B.f.da(B.e.fs(this.a,16),8,"0")+")"}}
A.a5.prototype={
cW(a){var s,r=a.a
if(r>=0){s=a.b
r=s>=0&&r<this.a&&s<this.b}else r=!1
return r},
h(a,b){var s,r,q,p
t.j.a(b)
s=this.a
r=B.e.aG(b.b*s+b.a)
q=this.c
p=q.length
if(r<p){if(!(r>=0))return A.b(q,r)
return q[r]}throw A.d(A.ai(b.k(0)+" is out of bounds for a grid of size "+s+" * "+this.b))},
j(a,b,c){var s,r,q,p=this
p.$ti.c.a(c)
s=p.a
r=B.e.aG(b.b*s+b.a)
q=p.c
if(r>=q.length)throw A.d(A.mc(b.k(0)+" is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,c)},
ab(a,b,c){var s=B.e.aG(c*this.a+b),r=this.c,q=r.length
if(s<q&&s>=0){if(!(s>=0&&s<q))return A.b(r,s)
return r[s]}return null},
K(a,b,c,d){var s,r,q,p=this
p.$ti.c.a(b)
s=p.a
r=B.e.aG(d*s+c)
q=p.c
if(r>=q.length)throw A.d(A.mc("("+c+", "+d+") is out of bounds for a grid of size "+s+" * "+p.b))
B.a.j(q,r,b)},
k(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===0||j.b===0)return"EmptyGrid[]"
for(s=j.b,r=j.c,q=0,p="\n";q<s;++q){p+="["
for(o=q*i,n="",m=0;m<i;++m,n=" ,"){l=B.e.aG(o+m)
if(!(l>=0&&l<r.length))return A.b(r,l)
k=r[l]
p+=n+A.B(k)}p+="]\n"}return p.charCodeAt(0)==0?p:p}}
A.O.prototype={
V(a,b){t.mn.a(b)
return new A.O(this.a-b.a,this.b-b.b)},
C(a,b){return new A.O(this.a+b.a,this.b+b.b)},
q(a,b){if(b==null)return!1
return b instanceof A.O&&b.a===this.a&&b.b===this.b},
gw(a){return A.cv(this.a,this.b,B.y,B.y)},
k(a){return"Offset("+B.c.dg(this.a,1)+", "+B.c.dg(this.b,1)+")"}}
A.cK.prototype={
ga5(a){return B.c.u(this.b.d/24)},
ga6(a){return B.c.u(this.b.e/36)},
t(){var s=this.b
return new A.i(B.c.u(s.d/24),B.c.u(s.e/36))},
$idR:1,
gbD(){return null}}
A.iU.prototype={}
A.iT.prototype={
eO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.b
c.fb()
s=t.c7
r=A.c([],s)
q=A.c([],s)
s=b.ry
p=s.e
s=s.d
if(!(s<p.length))return A.b(p,s)
o=p[s]
s=a.t()
s.toString
n=b.f.aa(s)
for(p=o.b,m=p.length,l=n.c,k=n.a,j=l.length,c=c.a,i=0;i<p.length;p.length===m||(0,A.y)(p),++i){h=p[i]
if(h.e)continue
g=h.t()
if(g==null)continue
f=g.aW(s)
e=g.b*k+g.a
if(!(e>=0&&e<j))return A.b(l,e)
if(l[e]<=0||h===a)continue
if(!A.o6(h,a))B.a.l(q,h)
else if(f<10.5){B.a.l(r,h)
e=h.t()
d=e.b*100+e.a
if(!(d>=0&&d<4000))return A.b(c,d)
B.ft.j(c,d,Math.max(c[d],20))}}c=this.a.a9(a,r,q,new A.ae(null,null),b).a
if(c==null)return new A.d8()
return c}}
A.ae.prototype={}
A.ar.prototype={}
A.bY.prototype={
a9(a,b,c,d,e){var s,r,q=null,p=t.p
p.a(b)
p.a(c)
t.O.a(e)
if(d.b!=null)return d
p=a.r
s=p==null
if((s?q:p.c)!=null)r=B.a.M(b,s?q:p.c)
else r=!1
if(r){if(s)p=q
else{p=p.c
p.toString}return new A.ae(q,p)}return d}}
A.bZ.prototype={
a9(a,b,c,d,e){var s,r=t.p
r.a(b)
r.a(c)
t.O.a(e)
if(d.b!=null)return d
if(0<b.length){s=b[0]
r=a.r
if(r!=null)r.c=s
return new A.ae(null,s)}return d}}
A.cP.prototype={
a9(a,b,c,d,e){var s,r,q=t.p
q.a(b)
q.a(c)
t.O.a(e)
if(d.b!=null||c.length===0)return d
for(q=c.length,s=0;s<q;++s){r=c[s].r
if(r!=null&&r.c!=null){q=r.c
q.toString
return new A.ae(null,q)}}return d}}
A.bW.prototype={
a9(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=t.p
j.a(b)
j.a(c)
j=t.O.a(e).ry
s=j.e
j=j.d
if(!(j<s.length))return A.b(s,j)
r=s[j]
if(d.b!=null)return d
for(j=a.r.b.a,q=-1,p=0,o=0;o<4000;++o){n=j[o]
if(n>p){p=n
q=o}}if(q===-1)return d
j=B.e.ds(q,100)
s=B.e.Y(q,100)
m=$.eT()
l=a.t()
l.toString
k=m.by(l,new A.i(j,s),r,B.V)
if(k==null)return d
j=k.b.d
s=a.t()
s.toString
return new A.ae(new A.aX(j.V(0,s),a),null)}}
A.ha.prototype={
a9(a,b,c,d,e){var s,r,q,p=t.p
p.a(b)
p.a(c)
t.O.a(e)
p=e.ry
s=p.e
p=p.d
if(!(p<s.length))return A.b(s,p)
r=s[p]
if(this.b){this.b=!1
return d}p=a.t()
p.toString
q=e.dx.a.bx(r,p,-1)
if(q==null)return d
this.b=!0
p=a.t()
p.toString
return new A.ae(new A.aX(q.V(0,p),a),null)}}
A.e9.prototype={
a9(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=t.p
c.a(b)
c.a(a0)
t.O.a(a2)
c=a2.ry
s=c.e
c=c.d
if(!(c<s.length))return A.b(s,c)
r=s[c]
c=a.c
if(c.b/c.a>0.3)return a1
c=e.a
if(c!=null){c=c.d
s=a.t()
s.toString
q=c.V(0,s)
e.a=e.a.b
return new A.ae(new A.aX(q,a),d)}c=a.t()
c.toString
s=a2.dx.a
p=s.bx(r,c,-1)
if(p==null){o=c.b*100+c.a
s=s.a
if(!(o>=0&&o<4000))return A.b(s,o)
n=s[o]
m=a2.f.aa(c)
for(c=m.c,l=m.a,k=c.length,j=d,i=1;i<100;++i)for(h=1;h<40;++h){o=h*100+i
if(!(o<4000))return A.b(s,o)
g=s[o]
f=h*l+i
if(!(f<k))return A.b(c,f)
if(c[f]>0&&g<n){j=new A.i(i,h)
n=g}}if(j!=null){c=$.eT()
s=a.t()
s.toString
e.a=c.cT(s,j,r)}return new A.ae(new A.d8(),d)}c=a.t()
c.toString
return new A.ae(new A.aX(p.V(0,c),a),d)}}
A.hb.prototype={
a9(a,b,c,d,e){var s,r,q,p,o,n,m=t.p
m.a(b)
m.a(c)
t.O.a(e)
m=e.ry
s=m.e
m=m.d
if(!(m<s.length))return A.b(s,m)
r=s[m]
for(m=c.length,s=this.a,q=0;q<c.length;c.length===m||(0,A.y)(c),++q){p=c[q].t()
p.toString
o=a.t()
o.toString
if(p.aW(o)<=s)return d}if(b.length===0)return d
m=a.t()
m.toString
n=e.dx.a.bx(r,m,-1)
if(n==null)return d
m=a.t()
m.toString
return new A.ae(new A.aX(n.V(0,m),a),null)}}
A.lu.prototype={
$1(a){t.lZ.a(a)
return a.c===B.aU&&t.mm.a(a.b).a===this.a.Q.a},
$S:25}
A.bM.prototype={
a9(a,b,c,d,e){var s,r,q,p,o,n,m=t.p
m.a(b)
m.a(c)
m=t.O.a(e).ry
s=m.e
m=m.d
if(!(m<s.length))return A.b(s,m)
r=s[m]
if(d.a!=null||d.b==null)return d
m=d.b
m.toString
s=$.eT()
q=a.t()
q.toString
p=m.t()
p.toString
o=s.cT(q,p,r)
if(o==null)return d
s=a.c.x
n=s.gbI()
if(n!=null&&o.gcQ()<=n.ch/5){q=s.b.h(0,B.v)
q.toString
if(q.e===0)if(A.ra(s,n))return new A.ae(new A.e8(a),m)
else{s=o.b.d
q=a.t()
q.toString
return new A.ae(new A.aX(s.V(0,q),a),m)}s=m.t()
s.toString
return new A.ae(new A.e7(s,a),m)}s=o.b.d
q=a.t()
q.toString
return new A.ae(new A.aX(s.V(0,q),a),m)}}
A.bd.prototype={
a9(a,b,c,d,e){var s,r,q,p,o=t.p
o.a(b)
o.a(c)
t.O.a(e)
for(o=this.a,s=o.length,r=d,q=0;q<o.length;o.length===s||(0,A.y)(o),++q,r=p){p=o[q].a9(a,b,c,r,e)
if(p.a!=null)return p}return r},
$iar:1}
A.bU.prototype={}
A.lX.prototype={
$0(){return new A.P(2,6,0,0,B.bb)},
$S:2}
A.lV.prototype={
$0(){return new A.bd(A.c([new A.bY(),new A.bZ(),new A.e9(),new A.bM(),new A.bW()],t.a))},
$S:3}
A.lW.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.lR.prototype={
$0(){return new A.P(2,4,0,0,B.o)},
$S:2}
A.lP.prototype={
$0(){return new A.bd(A.c([new A.bY(),new A.bZ(),new A.e9(),new A.bM(),new A.bW()],t.a))},
$S:3}
A.lQ.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.m_.prototype={
$0(){return new A.P(10,7,0,0,B.o)},
$S:2}
A.lY.prototype={
$0(){return new A.bd(A.c([new A.bY(),new A.bZ(),new A.cP(),new A.bM(),new A.bW()],t.a))},
$S:3}
A.lZ.prototype={
$0(){return A.c([],t.I)},
$S:4}
A.m2.prototype={
$0(){return new A.P(10,7,0,0,B.bb)},
$S:2}
A.m0.prototype={
$0(){return new A.bd(A.c([new A.bY(),new A.bZ(),new A.cP(),new A.ha(),new A.bM(),new A.bW()],t.a))},
$S:3}
A.m1.prototype={
$0(){var s=A.fD(B.O)
s.e=2
return A.c([s],t.I)},
$S:4}
A.lo.prototype={
$0(){return new A.P(3,7,0,0,B.ff)},
$S:2}
A.lm.prototype={
$0(){return new A.bd(A.c([new A.bY(),new A.bZ(),new A.cP(),new A.hb(6),new A.bM(),new A.bW()],t.a))},
$S:3}
A.ln.prototype={
$0(){return A.c([A.fD(B.O)],t.I)},
$S:4}
A.j9.prototype={
dh(a,b,c,d,e,f){var s,r=this,q=Math.min(Math.max(B.c.an(c*24-f/2),0),B.e.an(2688-f)),p=Math.min(Math.max(B.c.an(d*36-e/2),0),B.e.an(1476-e)),o=r.ck(Math.abs(q-r.a)),n=r.ck(Math.abs(p-r.b))
if(b){r.a=q
r.b=p
return}s=r.a
if(q>s)r.a=s+o
else if(q<s)r.a=s-o
s=r.b
if(p>s)r.b=s+n
else if(p<s)r.b=s-n},
ck(a){if(a>30)return 6
if(a>20)return 4
return 1}}
A.W.prototype={
h(a,b){return this.b.h(0,A.F(this).i("W.T").a(b))}}
A.cq.prototype={}
A.cY.prototype={}
A.fz.prototype={
bB(a){return this.f0(t.h8.a(a))},
f0(a){var s=0,r=A.bo(t.H),q,p=this,o
var $async$bB=A.bp(function(b,c){if(b===1)return A.bl(c,r)
while(true)switch(s){case 0:o=p.e
if(o.length>3){s=1
break}B.a.l(o,a)
if(p.f){s=1
break}p.aL()
case 1:return A.bm(q,r)}})
return A.bn($async$bB,r)},
aL(){var s=0,r=A.bo(t.z),q=1,p,o=[],n=this,m
var $async$aL=A.bp(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:q=2
n.f=!0
m=n.e
case 5:if(!(m.length!==0)){s=6
break}s=7
return A.a8(n.aD(),$async$aL)
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
case 4:return A.bm(null,r)
case 1:return A.bl(p,r)}})
return A.bn($async$aL,r)},
cw(){var s=new A.G($.E,t.cU),r=new A.dk(s,t.iF)
B.a.l(this.a.c,t.x.a(t.nD.a(r.geR(r))))
return s},
X(){var s=0,r=A.bo(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$X=A.bp(function(a2,a3){if(a2===1)return A.bl(a3,r)
while(true)$async$outer:switch(s){case 0:a=p.a
a0=a.ry
a1=a0.e
a0=a0.d
if(!(a0<a1.length)){q=A.b(a1,a0)
s=1
break}a0=a1[a0].b
o=A.c(a0.slice(0),A.Z(a0))
a0=p.b,a1=B.a.geJ(a0),n=t.nt,m=p.c,l=p.d,k=p.e,j=0,i=!1
case 4:if(!!0){s=5
break}case 6:if(!(h=a0.length,h!==0)){s=7
break}if(0>=h){q=A.b(a0,0)
s=1
break}s=8
return A.a8(a0[0].aq(a),$async$X)
case 8:g=a3
B.a.L(m,g.r)
case 9:if(!(h=g.a,h!=null)){s=10
break}B.a.j(a0,0,h)
s=11
return A.a8(h.aq(a),$async$X)
case 11:g=a3
B.a.L(m,g.r)
s=9
break
case 10:h=g.c
if(h!=null){f=a.fy
if(f===$){e=A.mn(a.a)
A.bJ(a.fy,"ui")
a.fy=e
f=e}f.c.r.cI(h)}d=g.x
s=d!=null?12:13
break
case 12:s=!g.f&&k.length===0?14:16
break
case 14:s=l.length!==0?17:18
break
case 17:s=19
return A.a8(p.cl(),$async$X)
case 19:case 18:s=20
return A.a8(p.aC(d),$async$X)
case 20:s=15
break
case 16:B.a.l(l,d)
case 15:case 13:case 21:if(!(h=m.length,h!==0)){s=22
break}if(0>=h){q=A.b(m,-1)
s=1
break}s=23
return A.a8(m.pop().aq(a),$async$X)
case 23:e=a3
B.a.L(m,e.r)
case 24:if(!(h=e.a,h!=null)){s=25
break}s=26
return A.a8(h.aq(a),$async$X)
case 26:e=a3
B.a.L(m,e.r)
s=24
break
case 25:h=e.c
if(h!=null){f=a.fy
if(f===$){e=A.mn(a.a)
A.bJ(a.fy,"ui")
a.fy=e
f=e}f.c.r.cI(h)}s=21
break
case 22:if(g.d)i=B.eW.dt(i,!0)
B.a.bM(a0,0)
s=6
break
case 7:if(!i){s=3
break}for(;h=o.length,j<h;){if(!(j>=0)){q=A.b(o,j)
s=1
break $async$outer}c=o[j];++j
if(c.t()==null)continue
if(A.rn(n.a(a1),c,a)){s=4
break $async$outer}}s=3
break
s=4
break
case 5:case 3:s=l.length!==0?27:29
break
case 27:s=k.length===0?30:32
break
case 30:s=33
return A.a8(p.cl(),$async$X)
case 33:s=31
break
case 32:s=34
return A.a8(p.aP(),$async$X)
case 34:case 31:s=28
break
case 29:s=35
return A.a8(p.cw(),$async$X)
case 35:case 28:if(!i){s=1
break}for(a=o.length,b=0;b<a;++b)o[b].a=100
case 1:return A.bm(q,r)}})
return A.bn($async$X,r)},
aP(){var s=0,r=A.bo(t.H),q=this,p,o,n
var $async$aP=A.bp(function(a,b){if(a===1)return A.bl(b,r)
while(true)switch(s){case 0:for(p=q.d,o=p.length,n=0;n<p.length;p.length===o||(0,A.y)(p),++n)p[n].x.$0()
B.a.sm(p,0)
s=2
return A.a8(q.cw(),$async$aP)
case 2:return A.bm(null,r)}})
return A.bn($async$aP,r)},
aC(a){var s=0,r=A.bo(t.H),q=this,p
var $async$aC=A.bp(function(b,c){if(b===1)return A.bl(c,r)
while(true)switch(s){case 0:p=new A.G($.E,t.cU)
if(a!=null)B.a.l(q.d,a)
B.a.l(q.a.c,t.x.a(new A.jw(q,new A.al(p,t.ou))))
s=2
return A.a8(p,$async$aC)
case 2:return A.bm(null,r)}})
return A.bn($async$aC,r)},
cl(){return this.aC(null)},
aD(){var s=0,r=A.bo(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$aD=A.bp(function(a,b){if(a===1)return A.bl(b,r)
while(true)switch(s){case 0:e=p.e
if(e.length===0){s=1
break}e=B.a.bM(e,0).a
case 3:switch(e){case 1:s=5
break
case 2:s=6
break
case 3:s=7
break
case 4:s=8
break
case 5:s=9
break
case 21:s=10
break
case 6:s=11
break
case 0:s=12
break
case 10:s=13
break
case 20:s=14
break
case 19:s=15
break
case 8:s=16
break
case 9:s=17
break
default:s=18
break}break
case 5:case 6:case 7:case 8:switch(e){case 1:o=new A.i(0,-1)
break
case 2:o=new A.i(1,0)
break
case 3:o=new A.i(0,1)
break
case 4:o=new A.i(-1,0)
break
default:A.S(A.ai(""))
o=null}n=new A.aX(o,p.a.ry.a)
s=4
break
case 9:p.a.ry.toString
n=new A.d8()
s=4
break
case 10:e=p.a.ry
m=e.e
e=e.d
if(!(e<m.length)){q=A.b(m,e)
s=1
break}e=m[e].b
m=e.length
l=0
for(;l<e.length;e.length===m||(0,A.y)(e),++l){k=e[l]
j=k.$identityHash
if(j==null){j=Math.random()*0x3fffffff|0
k.$identityHash=j}i=""+j+": "
h=k.b
g=B.c.u(h.d/24)
i=i+g+"|"
h=B.c.u(h.e/36)
A.ob(i+h)}n=null
s=4
break
case 11:e=p.a
f=e.d.b?e.gb0().d:null
if(f==null){n=null
s=4
break}n=new A.e7(f,e.ry.a)
s=4
break
case 12:n=null
s=4
break
case 13:s=19
return A.a8(p.aK(),$async$aD)
case 19:n=b
s=4
break
case 14:n=new A.e8(p.a.ry.a)
s=4
break
case 15:e=p.a
m=e.ry.a
i=e.go
i=i==null?null:i.b
h=i==null
if(h)i=new A.fl(new Uint8Array(4000),A.ac(t.j,t.S))
n=e.go=new A.f3(m,i,h)
s=4
break
case 16:e=p.a.d
m=!e.b
e.b=m
if(m){e=document.body.style
m=B.ey.dW(e,"cursor")
e.setProperty(m,"crosshair","")}else document.body.style.removeProperty("cursor")
n=null
s=4
break
case 17:e=p.a.d
if(e.b){e.b=!1
document.body.style.removeProperty("cursor")}n=null
s=4
break
case 18:n=null
s=4
break
case 4:s=n!=null?20:21
break
case 20:B.a.l(p.b,n)
s=22
return A.a8(p.X(),$async$aD)
case 22:case 21:case 1:return A.bm(q,r)}})
return A.bn($async$aD,r)},
aK(){var s=0,r=A.bo(t.oL),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$aK=A.bp(function(a,b){if(a===1)return A.bl(b,r)
while(true)$async$outer:switch(s){case 0:f=A.c([],t.Y)
for(o=p.a,n=-1;n<2;++n)for(m=-1;m<2;++m){l=o.ry.a.t()
k=l.a+n
l=l.b+m
j=o.ry
i=j.e
j=j.d
if(!(j<i.length)){q=A.b(i,j)
s=1
break $async$outer}j=i[j].d
if(!(k>=0&&l>=0&&k<j.a&&l<j.b))continue
h=j.h(0,new A.i(k,l))
if(h.f!=null){l=o.ry
k=l.e
l=l.d
if(!(l<k.length)){q=A.b(k,l)
s=1
break $async$outer}B.a.L(f,A.o5(h,k[l]))}}l=f.length
if(l===0){q=null
s=1
break}s=l===1?3:5
break
case 3:if(0>=l){q=A.b(f,0)
s=1
break}g=f[0]
s=4
break
case 5:l=new A.G($.E,t.j7)
o.gao().c.sf6(new A.fM(f,new A.al(l,t.pn),t.km))
s=6
return A.a8(l,$async$aK)
case 6:g=b
case 4:if(g==null){q=null
s=1
break}q=g.b
s=1
break
case 1:return A.bm(q,r)}})
return A.bn($async$aK,r)},
ej(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.J.a(a)
for(s=h.d,r=s.length,q=a.a,p=h.e,o=0;o<s.length;s.length===r||(0,A.y)(s),++o){n=s[o]
if(p.length>=2)n.d=1
m=n.e
l=m==null?0:B.e.Y(q-m.a,1000)
n.e=a
k=l/B.e.Y(n.a.a,1000)
j=n.f
i=n.d
i=n.d=B.c.br(j?n.d=i+k:n.d=i-k,-1,1)
i>=1||i<0
n.r.$1(n)}B.a.l(h.a.c,t.x.a(h.gct()))}}
A.jw.prototype={
$1(a){var s,r,q,p,o,n,m
t.J.a(a)
s=A.c([],t.fy)
for(r=this.a,q=r.d,p=q.length,o=r.e,n=0;n<q.length;q.length===p||(0,A.y)(q),++n){m=q[n]
if(m.d>=1||o.length!==0){m.x.$0()
B.a.l(s,m)}}for(p=s.length,n=0;n<s.length;s.length===p||(0,A.y)(s),++n)B.a.I(q,s[n])
if(q.length===0)this.b.aR(0)
else B.a.l(r.a.c,t.x.a(this))},
$S:14}
A.ed.prototype={
k(a){return"SlotType."+this.b}}
A.bw.prototype={
k(a){return"ItemType."+this.b}}
A.eY.prototype={}
A.aU.prototype={
gc_(){switch(this.c.a){case 0:return B.aw
case 1:return B.ax
case 2:return B.ay
case 3:case 4:case 5:case 6:return null}}}
A.je.prototype={}
A.a0.prototype={}
A.fA.prototype={
k(a){return"HandRequirement."+this.b}}
A.bQ.prototype={
k(a){return"DamageType."+this.b}}
A.bR.prototype={
k(a){return"DiceType."+this.b}}
A.b_.prototype={
k(a){return"WeaponProperties."+this.b}}
A.k0.prototype={}
A.bP.prototype={}
A.cf.prototype={
k(a){return"CriticalEffect."+this.b}}
A.a2.prototype={}
A.dy.prototype={
k(a){return"AmmoType."+this.b}}
A.dz.prototype={}
A.av.prototype={}
A.cM.prototype={
k(a){return"ArmorUpgradeType."+this.b}}
A.aq.prototype={}
A.eV.prototype={
ar(a){var s,r=a-10
if(r===0)return 0
else{s=r/2
if(r>0)return B.c.ai(s)
else return B.c.cN(s)}}}
A.cd.prototype={
d6(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x.gfe()
r=a.x.gbq()
q=A.dH(a0,1,B.aP)
p=b.y
o=p.a
n=q+p.ar(o)
m=a.y
l=10+Math.min(m.ar(m.b),r.e)
m=s.b
l=A.Q(A.n5(m))?l+r.d:l+r.c
if(!a1)l-=2
k=t.Q
j=A.c([],k)
i=A.c([],k)
if(q===1){h=!1
g=!1}else{g=n>=l
if(q===20)h=!0
else{h=g
g=!1}}f="["+n+" vs "+A.B(l)+"]"
if(!h)return new A.cN(b.cx.a+" missed "+a.cx.a+" "+f,!1,0,B.a4,B.a4)
if(B.a.M(s.z,B.cp))B.a.l(j,new A.fh())
k=s.d
e=s.e
d=Math.max(A.dH(a0,k,e)+p.ar(o),0)
if(g)d+=A.dH(a0,k,e)+p.ar(o)
B.a.M(b.ch,B.bf)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+s.y
return new A.cN(c,!0,d,j,i)},
dc(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
t.o5.a(a0)
s=b.x
r=s.gbI()
if(r==null)r=B.O
q=s.gbq()
s=b.y
p=Math.min(s.ar(s.b),q.e)
o=a.x.gbq()
n=A.dH(a0,1,B.aP)
m=n+p
l=a.y
k=10+Math.min(l.ar(l.b),o.e)
l=r.c
k=A.Q(A.n5(l))?k+o.d:k+o.c
if(!a1)k-=2
j=t.Q
i=A.c([],j)
h=A.c([],j)
if(n===1){g=!1
f=!1}else{f=m>=k
if(n===20)g=!0
else{g=f
f=!1}}e="["+m+" vs "+A.B(k)+"]"
if(!g)return new A.cN(b.cx.a+" missed "+a.cx.a+" "+e,!1,0,B.a4,B.a4)
j=r.f
d=A.dH(a0,1,j)
if(f)d+=A.dH(a0,1,j)+s.ar(s.a)
B.a.M(b.ch,B.bf)
c=b.cx.a+" hit "+a.cx.a+" for "+d+" with "+r.a
return new A.cN(c,!0,d,i,h)}}
A.cN.prototype={}
A.cT.prototype={}
A.cS.prototype={
gbq(){var s,r,q
for(s=this.b,s=s.gat(s),s=s.gA(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a0)return q}return B.cL},
gfe(){var s,r,q
for(s=this.b,s=s.gat(s),s=s.gA(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.a2)return q}return B.fm},
gbI(){var s,r,q
for(s=this.b,s=s.gat(s),s=s.gA(s);s.n();){r=s.gp(s).b
if(r==null)continue
q=r.b
if(q instanceof A.av)return q}return null},
eV(a,b){var s=this.b
s.h(0,b)
s.j(0,b,a)}}
A.h4.prototype={
k(a){return"Perk."+this.b}}
A.ch.prototype={
k(a){return"EquipmentSlot."+this.b}}
A.fh.prototype={}
A.da.prototype={
k(a){return"TileType."+this.b}}
A.fd.prototype={
k(a){return"CollisionMode."+this.b}}
A.au.prototype={}
A.cy.prototype={
k(a){return"TerrainType."+this.b}}
A.ak.prototype={
k(a){return"TerrainWidget."+this.b}}
A.co.prototype={
k(a){return"LockState."+this.b}}
A.bb.prototype={
k(a){return"Biome."+this.b}}
A.c_.prototype={
ga5(a){return this.b.a},
ga6(a){return this.b.b},
sfn(a){t.dt.a(a)},
$idR:1,
gbD(){return this.z}}
A.fJ.prototype={}
A.fK.prototype={$idR:1,
gbD(){return this.a},
ga5(a){return this.b},
ga6(a){return this.c}}
A.i.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.i&&b.a===this.a&&b.b===this.b},
gw(a){return A.cv(this.a,this.b,B.y,B.y)},
C(a,b){return new A.i(this.a+b.a,this.b+b.b)},
V(a,b){return new A.i(this.a-b.a,this.b-b.b)},
bP(){return new A.O(this.a,this.b)},
aW(a){var s=Math.abs(this.a-a.a),r=Math.abs(this.b-a.b)
return s+r+-0.6000000000000001*Math.min(s,r)},
k(a){return"("+this.a+", "+this.b+")"}}
A.jT.prototype={
k(a){return"LiquidKind."+this.b}}
A.a1.prototype={
k(a){return"Interactable."+this.b}}
A.jX.prototype={}
A.k1.prototype={
fb(){var s,r
for(s=this.a,r=0;r<4000;++r)s[r]=s[r]-1}}
A.cZ.prototype={
k(a){return"MonsterKind."+this.b}}
A.fn.prototype={
eG(a,b){var s,r,q,p,o,n,m,l,k="a_position",j=this.b,i=j.T(k,t.C),h=this.d
if(h==null)return
for(s=i.length,r=0,q=0;q<40;++q)for(p=q*100,o=q*36+18,n=0;n<100;++n){m=h.d.c
l=p+n
if(!(l<m.length))return A.b(m,l)
l=m[l]
if(!(l.c===B.b||A.Q(A.bT(l.f)))){if(!(r>=0&&r<s))return A.b(i,r)
i[r]=n*24+12
m=r+1
if(!(m<s))return A.b(i,m)
i[m]=o
r+=2}}this.e=r
j.a0(b,k,i)},
O(a,b){var s=this
if(s.c){s.eG(0,a)
s.c=!1}if(s.d==null)return
s.b.a8(a,0,B.e.Y(s.e,2),A.aW(["u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.fo.prototype={
O(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.b,r=s.length,q=t.t,p=t.n,o=t.g2,n=t.N,m=t.z,l=0;l<s.length;s.length===r||(0,A.y)(s),++l){k=s[l]
$.mJ().a8(a,4,3,A.aW(["u_resolution",A.c([b.a,b.b],q),"u_time",k.gbw().gf3().fF(0,k.geU(k).gf3()),"u_offset",A.c([b.d,b.e],p),"u_origin",A.c([k.ga5(k),k.ga6(k)],o)],n,m))
k.sbw(k.gbw().C(0,A.jn(11)))}r=A.Z(s).i("D(1)").a(new A.jo())
if(!!s.fixed$length)A.S(A.C("removeWhere"))
B.a.em(s,r,!0)}}
A.jo.prototype={
$1(a){t.ox.a(a)
return a.gbw().di(0,a.geU(a))},
$S:31}
A.jr.prototype={}
A.fp.prototype={
dL(a,b,c){var s,r,q,p=this
p.ga1().b.S(p.a)
p.y.b.S(p.a)
p.z.b.S(p.a)
p.gbz().c.S(p.a)
s=p.gae()
r=p.a
s.e=r.createFramebuffer()
s.b.S(r)
s.c.S(r)
q=p.cy
if(q===$){s=A.aE(A.c([new A.R("a_position",35044,5126,2,new Float32Array(A.cF(B.A)))],t.G),"#version 300 es\nprecision mediump float;\n\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform vec2 u_offset;\nuniform sampler2D u_player_vis_texture;\nuniform vec2 u_block_size;\n\nout vec4 outColor;\n\nconst int NUM_OCTAVES = 5;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise(vec2 _st) {\n    vec2 i = floor(_st);\n    vec2 f = fract(_st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    vec2 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(vec2 _st) {\n    float v = 0.0;\n    float a = 0.5;\n    vec2 shift = vec2(100.0);\n    // Rotate to reduce axial bias\n    mat2 rot = mat2(cos(0.5), sin(0.5),\n                    -sin(0.5), cos(0.50));\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n        v += a * noise(_st);\n        _st = rot * _st * 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nvoid main() {\n    // // visibility texture is in total screen coordinates.\n    // vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, u_resolution.y - gl_FragCoord.y + u_offset.y) / vec2(2400, 1440);\n    //   // visibility texture is in total screen coordinates.\n    vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n    vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n    vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n\n    vec4 player_vis = texture(u_player_vis_texture, tex_position);\n    if (player_vis.a > 0.0) {\n      discard;\n      return;\n    }\n    vec2 st = (gl_FragCoord.xy + vec2(u_offset.x, -1.0 * u_offset.y)) / u_resolution.xy * 3.0;\n    // st += st * abs(sin(u_time*0.1)*3.0);\n    vec3 color = vec3(0.0);\n\n    vec2 q = vec2(0.);\n    q.x = fbm( st + 0.00*u_time);\n    q.y = fbm( st + vec2(1.0));\n\n    vec2 r = vec2(0.);\n    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );\n    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);\n\n    float f = fbm(st+r);\n\n    color = mix(vec3(0.101961,0.619608,0.666667),\n                vec3(0.666667,0.666667,0.498039),\n                clamp((f*f)*4.0,0.0,1.0));\n\n    color = mix(color,\n                vec3(0,0,0.164706),\n                clamp(length(q),0.0,1.0));\n\n    color = mix(color,\n                vec3(0.666667,1,1),\n                clamp(length(r.x),0.0,1.0));\n\n    outColor = vec4((f * f * f + .6 * f * f + .5 * f) * color, 0.3);\n}\n",A.c([new A.x("u_resolution",B.h),new A.x("u_time",B.x),new A.x("u_offset",B.h),new A.x("u_player_vis_texture",B.l),new A.x("u_block_size",B.h)],t.o),u.d)
A.bJ(p.cy,"weather")
q=p.cy=new A.hI(s)}q.c.S(p.a)
p.gb0().c.S(p.a)
s=p.a
$.mJ().S(s)
$.oJ().S(s)
p.fx.b.S(p.a)
p.gaX().b.b.S(p.a)
p.gao().e.S(p.a)
s=$.aB.b
if(s==null?$.aB!=null:s!==$.aB)A.S(new A.cn("Field '"+$.aB.a+"' has already been initialized."))
$.aB.b=p
s=p.cx
r=s.c
new A.c2(r,A.F(r).i("c2<1>")).d4(new A.js(p,p.b.getBoundingClientRect()))
s.a=p.gao()},
ga1(){var s,r=this,q=r.x
if(q===$){s=A.nu(r.a,r.f)
A.bJ(r.x,"sprites")
r.x=s
q=s}return q},
gbz(){var s,r=this,q=r.Q
if(q===$){s=A.qj()
s=A.aE(A.c([new A.R("a_position",35044,5126,2,s),new A.R("a_color",35048,5126,4,new Float32Array(192e3))],t.G),u.t,A.c([new A.x("u_resolution",B.h),new A.x("u_offset",B.h)],t.o),u.Z)
A.bJ(r.Q,"fovRenderer")
q=r.Q=new A.fr(r.f,s,new A.i(-1,-1))}return q},
gae(){var s,r,q,p=this,o=u.v,n="a_position",m="u_player_visible_texture",l=p.ch
if(l===$){s=t.G
r=t.o
q=A.aE(A.c([new A.R(n,35044,5126,2,new Float32Array(A.cF(B.A)))],s),u._,A.c([new A.x("u_source_position",B.h),new A.x("u_source_color",B.cn),new A.x("u_source_strength",B.x),new A.x("u_time",B.x),new A.x("u_visible_texture",B.l),new A.x(m,B.l)],r),o)
r=A.aE(A.c([new A.R(n,35044,5126,2,new Float32Array(A.cF(B.A)))],s),u.L,A.c([new A.x("u_light_texture",B.l),new A.x("u_game_world_texture",B.l),new A.x(m,B.l),new A.x("u_resolution",B.h),new A.x("u_block_size",B.h),new A.x("u_offset",B.h)],r),o)
s=A.c([],t.ow)
A.bJ(p.ch,"lightingRenderer")
l=p.ch=new A.dX(q,r,p.f,s)}return l},
gb0(){var s,r=this,q=r.db
if(q===$){s=A.aE(A.c([new A.R("a_position",35048,5126,2,new Float32Array(12))],t.G),"#version 300 es\nprecision mediump float;\n\nout vec4 outColor;\n\nuniform float u_time;\nuniform float u_visible;\n\nvoid main() {\n  if (u_visible == 0.0) {\n    discard;\n    return;\n  }\n  float scale = (sin(u_time * 3.0) + 1.0) / 4.0;\n  outColor = vec4(0.509, 0.69411, 1.0, scale + 0.3);\n}\n",A.c([new A.x("u_offset",B.h),new A.x("u_resolution",B.h),new A.x("u_time",B.x),new A.x("u_visible",B.x)],t.o),"#version 300 es\nin vec2 a_position;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n}\n")
A.bJ(r.db,"selectionRenderer")
q=r.db=new A.hg(r.f,s,B.p)}return q},
gaX(){var s,r,q=this,p=q.dy
if(p===$){s=q.a
r=A.c([],t.ff)
s=A.nu(s,q.f)
A.bJ(q.dy,"textRenderer")
p=q.dy=new A.hu(s,r)}return p},
gao(){var s,r=this,q=r.fy
if(q===$){s=A.mn(r.a)
A.bJ(r.fy,"ui")
r.fy=s
q=s}return q},
bv(){var s,r=this
r.ry=null
B.a.sm(r.gae().y,0)
r.ga1().aQ(0)
s=r.y
s.c=null
s.d=!0
s=r.z
s.d=null
s.c=!0
s=r.f
B.N.ah(s.c,0,4000,0)
s.e=B.p
r.gao().b=null
s=r.k4
r.r.dh(0,!0,0,0,r.r1,s)
r.go=null},
O(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=3553,b=6408,a=33071,a0=36160
d.a=a2
s=d.b
r=s.clientWidth
q=s.clientHeight
if(r!==d.k4||q!==d.r1){d.rx=!0
B.ab.sap(s,r)
B.ab.sak(s,q)
d.k4=r
d.r1=q
s=d.id
if(s!=null)B.d.cP(a2,s)
s=d.k1
if(s!=null)B.d.cP(a2,s)
d.id=a2.createTexture()
d.k1=a2.createTexture()
B.d.N(a2,c,d.id)
B.d.aF(a2,c,0,b,d.k4,d.r1,0,b,5121,null)
a2.texParameteri(c,10241,9729)
a2.texParameteri(c,10242,a)
a2.texParameteri(c,10243,a)
B.d.N(a2,c,d.k1)
B.d.aF(a2,c,0,b,d.k4,d.r1,0,b,5121,null)
a2.texParameteri(c,10241,9729)
a2.texParameteri(c,10242,a)
a2.texParameteri(c,10243,a)}s=d.r
p=d.f.e
s.dh(0,d.rx,p.a,p.b,q,r)
p=d.x2
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
B.d.aE(a2,a0,d.k2)
B.d.bA(a2,a0,36064,c,d.id,0)
a2.clearColor(0,0,0,1)
a2.clear(16640)
d.y.O(a2,p)
d.z.O(a2,p)
d.ga1().O(a2,p)
s=d.k3
B.d.aE(a2,a0,s)
B.d.bA(a2,a0,36064,c,d.k1,0)
a2.viewport(0,0,r,q)
a2.clearColor(0,0,0,1)
d.gae()
d.gae().r=d.id
d.gae().z=s
d.gae().O(a2,p)
s=d.gbz()
if(!s.b.e.q(0,s.d)||s.e)s.eI(a2)
o=t.t
n=t.n
m=t.N
l=t.z
s.c.a8(a2,4,48e3,A.aW(["u_resolution",A.c([p.a,p.b],o),"u_offset",A.c([p.d,p.e],n)],m,l))
d.fr.O(a2,p)
if(d.d.b){s=d.gb0()
s.eg(a2,p)
k=A.c([p.a,p.b],o)
n=A.c([p.d,p.e],n)
j=p.c
i=s.b
i=i.aa(i.e)
h=s.d
i=i.ab(0,h.a,h.b)?1:0
s.c.a8(a2,4,6,A.aW(["u_resolution",k,"u_offset",n,"u_time",j/1000,"u_visible",i],m,l))}B.d.aE(a2,a0,null)
s=d.fx
s.c=d.k1
a2.activeTexture(33984)
B.d.N(a2,c,s.c)
s.b.a8(a2,4,3,A.aW(["u_resolution",A.c([p.a,p.b],o),"u_texture",0,"u_time",p.c/1000],m,l))
l=d.gaX()
s=l.e
o=p.b
if(s!==o||l.d!==p.a||p.d!==l.f||p.e!==l.r){l.d=p.a
l.e=o
l.r=p.e
l.f=p.d}l.b.O(a2,p)
d.gao().O(a2,p)
a2.finish()
g=A.jn(B.c.u(a1))
s=d.c
f=A.c(s.slice(0),A.Z(s))
B.a.sm(s,0)
for(s=f.length,e=0;e<f.length;f.length===s||(0,A.y)(f),++e)f[e].$1(g)
d.fa(p)
d.rx=!1},
fa(a){var s=this.ry
if(s==null)return
s=s.a.b
B.c.u(s.d/24)
B.c.u(s.e/36)},
bL(a){var s,r=this.ry,q=r.e
r=r.d
if(!(r<q.length))return A.b(q,r)
B.a.I(q[r].b,a)
s=a.b
s.sal(-1)
s.sam(-1)
this.ga1().I(0,s)},
c1(a,b){var s,r,q,p,o,n
A.dt("SWAP "+a.k(0)+" and "+b.k(0))
s=a.b
r=B.c.u(s.d/24)
q=B.c.u(s.e/36)
p=b.b
o=B.c.u(p.d/24)
n=B.c.u(p.e/36)
s.sal(o)
s.sam(n)
p.sal(r)
p.sam(q)
if(a.x){s=this.f
s.e=new A.i(o,n)
s.bR()}if(b.x){s=this.f
s.e=new A.i(r,q)
s.bR()}},
d7(a,b){var s=a.b
s.sal(b.a)
s.sam(b.b)
if(a.x){s=this.f
s.e=b
s.bR()}},
cF(a,b,c){var s,r,q,p
if(c==null){s=this.ry
r=s.e
s=s.d
if(!(s<r.length))return A.b(r,s)
q=r[s]}else q=c
B.a.l(q.b,a)
p=a.b
p.sal(b.a)
p.sam(b.b)
p.saw(0,B.W)
s=this.ga1()
p.sbC(0,1)
s.l(0,p)},
cE(a,b){return this.cF(a,b,null)},
cX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.go=null
B.a.sm(g.gae().y,0)
g.ga1().aQ(0)
s=g.y
s.c=b
s.d=!0
s=g.z
s.d=b
s.c=!0
s=g.f
r=b.d
s.d2(r)
s.cY()
B.N.ah(s.c,0,4000,0)
s.e=a
for(r=r.c,q=r.length,p=b.e,o=0;o<r.length;r.length===q||(0,A.y)(r),++o){n=r[o]
m=n.b
if(n.r!=null){l=new A.P(11,13,m.a*24,m.b*36,null)
l.x=B.fh
l.y=-1
k=l.a=g.ga1()
j=k.d
j.$ti.c.a(l);++j.d
j.aA(0,l)
k.a=!0}l=A.n7(n.f,m.a*24,m.b*36,p)
if(l!=null){k=l.a=g.ga1()
j=k.d
j.$ti.c.a(l);++j.d
j.aA(0,l)
k.a=!0
n.y=l}if(n.f===B.M){n.z=new A.fJ(B.eb,7)
i=g.ch
if(i===$){h=A.pq(s)
A.bJ(i,"lightingRenderer")
g.ch=h
i=h}B.a.l(i.y,n)}}for(s=b.b,r=s.length,o=0;o<s.length;s.length===r||(0,A.y)(s),++o){l=s[o].b
l.r=B.W
q=l.a
if(q!=null)q.a=!0
q=g.ga1()
l.y=1
p=l.a
if(p!=null)p.a=!0
l.a=q
p=q.d
p.$ti.c.a(l);++p.d
p.aA(0,l)
q.a=!0}s=g.gao().c.r
B.a.sm(s.r,0)
s.f.fh()}}
A.js.prototype={
$1(a){var s,r,q
t.bd.a(a)
s=this.a.x2
r=J.az(a)
s.sf7(r.h(a,0))
r=r.h(a,1)
q=this.b
q.left.toString
q=q.top
q.toString
if(typeof r!=="number")return r.V()
s.r=r-q},
$S:65}
A.a4.prototype={
aq(a){return this.du(a)},
du(a){var s=0,r=A.bo(t.fq),q,p=2,o,n=[],m=this,l,k,j,i
var $async$aq=A.bp(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a8(m.a_(0,a),$async$aq)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
l=A.br(i)
A.dt("ERROR: "+A.B(l))
q=new A.J(null,null,!1,!0,!1,B.i,null)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.bm(q,r)
case 2:return A.bl(o,r)}})
return A.bn($async$aq,r)}}
A.bN.prototype={}
A.J.prototype={}
A.fX.prototype={
a_(a,b){var s,r,q,p,o=b.ry.a
A.dm(b.x1,"worldWrapper").b.n()
s=b.ry
r=s.e
s=s.d+1
if(!(s<r.length))return A.b(r,s)
q=r[s]
p=A.lr(q)
b.cX(p,q)
b.cF(o,p,q);++b.ry.d
b.rx=!0
return new A.J(null,null,!0,!0,!1,B.i,null)}}
A.e8.prototype={
a_(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.c.x,g=h.gbI(),f=h.b.h(0,B.v)
if(g==null||f.e===g.Q.b)return new A.J(j,j,!1,!0,!1,B.i,j)
q=h.a
p=q.length
o=t.mm
n=0
while(!0){if(!(n<p)){s=j
r=s
break}m=q[n]
if(m.c===B.aU){l=o.a(m.b)
if(l.a===g.Q.a){s=m
r=l
break}}++n}if(r==null)return new A.J(j,j,!1,!0,!1,B.i,j)
i=i.t()
i.toString
b.e.af("reload_1.mp3",i)
i=r.b
k=Math.min(i,g.Q.b)
i-=k
r.b=i
if(i===0)B.a.I(q,s)
i=f.e
i.toString
f.e=k+i
return new A.J(j,j,!0,!0,!1,B.i,j)}}
A.aX.prototype={
a_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e={},d=b.ry,c=d.e
d=d.d
if(!(d<c.length))return A.b(c,d)
s=c[d]
d=g.b
r=d.t()
q=r.C(0,g.a)
p=s.d
if(!p.cW(q))return new A.J(f,f,!1,!0,!1,B.i,f)
o=p.h(0,q)
n=s.av(q)
if((o.c===B.b||A.Q(A.bT(o.f)))&&n==null){if(o.f==null)return new A.J(f,f,!1,!0,!1,B.i,f)
e=b.ry
d=e.e
e=e.d
if(!(e<d.length))return A.b(d,e)
m=A.o5(o,d[e])
if(m.length!==0)return new A.J(B.a.gdD(m).b,f,!1,!0,!1,B.i,f)
return new A.J(f,f,!1,!0,!1,B.i,f)}l=A.c([],t.w)
e.a=!1
if(n!=null){if(A.o6(n,d))return new A.J(new A.dD(!1,d,n),f,!1,!0,!1,B.i,f)
c=e.a=!0}else c=!1
k=b.f
k=k.aa(k.e)
k.toString
j=!d.x
if(j)i=k.h(0,r)||k.h(0,q)
else i=!1
p.h(0,r)
if(o.r!=null)b.e.bH("water_footsteps_"+(B.n.H(5)+1)+".mp3",q,0.15)
k=s.a
k.l(0,q)
if(i)h=new A.bN(A.jn(60),new A.k4(g,r,q),new A.k5(e,g,b,n,q,s))
else{if(c){n.toString
b.c1(n,d)}else b.d7(d,q)
k.I(0,q)
h=f}d.a=0
return new A.J(f,f,!0,!0,j,l,h)}}
A.k4.prototype={
$1(a){var s=a.d,r=1-s,q=this.b,p=this.c,o=this.a.b.b
o.sa5(0,q.a*24*r+p.a*24*s)
o.sa6(0,q.b*36*r+p.b*36*s)},
$S:11}
A.k5.prototype={
$0(){var s,r=this,q=r.c,p=r.b.b
if(r.a.a){s=r.d
s.toString
q.c1(s,p)}else q.d7(p,r.e)
r.f.a.I(0,r.e)},
$S:0}
A.d8.prototype={
a_(a,b){return new A.J(null,null,!0,!0,!1,B.i,null)}}
A.fI.prototype={
a_(a,b){var s=this.a.c
s.d-=1000;++s.c;++s.e;++s.f;++s.r
A.dt("LEVEL UP")
return new A.J(null,null,!0,!0,!1,B.i,null)}}
A.eh.prototype={
a_(a,b){var s,r,q,p,o,n,m=b.ry,l=m.e
m=m.d
if(!(m<l.length))return A.b(l,m)
s=this.b
r=l[m].d.h(0,s)
q=r.y
r.f=this.a?B.z:B.J
m=b.ga1()
q.toString
m.I(0,q)
m=r.f
m.toString
l=r.b
p=b.ry
o=p.e
p=p.d
if(!(p<o.length))return A.b(o,p)
n=A.n7(m,24*l.a,36*l.b,o[p].e)
if(n!=null)b.ga1().l(0,n)
r.y=n
m=b.ry
l=m.e
m=m.d
if(!(m<l.length))return A.b(l,m)
b.f.d3(l[m].d,s)
b.gbz().e=!0
b.e.bH("door_1.mp3",s,0.8)
return new A.J(null,null,!0,!0,!1,B.i,null)}}
A.dD.prototype={
a_(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c={},b=d.b
b.a=0
c.a=null
s=d.c
r=A.rf(s,b,a0)
q=d.a
p=b.c
o=s.c
if(q){p.toString
o.toString
n=c.a=p.dc(o,B.n,r)}else{p.toString
o.toString
n=c.a=p.d6(o,B.n,r)}B.a.L(p.Q,n.d)
B.a.L(o.Q,n.e)
m=A.c([],t.w)
p=s.t()
p.toString
l=b.t()
l.toString
if(!q){q=b.b
k=q.y
j=s.b.r
q.sbC(0,4)
i=l.bP()
h=p.bP()
q=l.bP()
g=h.V(0,i)
f=q.C(0,new A.O(g.a/1.5,g.b/1.5))
c.b=!0
e=new A.bN(B.eE,new A.iZ(c,d,a0,p,l,i,f),new A.j_(c,d,a0,p,l,k,j))}else{q=b.x?B.ad:B.o
d.b2(n.c,p,l,a0,q)
e=null}q=s.r
if(q!=null)q.c=b
if(!n.b)return new A.J(null,n.a,!0,!0,!1,B.i,e)
b=o.b-n.c
o.b=b
if(b<=0)B.a.l(m,new A.dJ(s))
return new A.J(null,c.a.a,!0,!0,!1,m,e)},
cm(a){if(this.a){if(a)return"bullet_impact_2.mp3"
return"bullet_miss_1.mp3"}if(a)return"heavy_punch_1.mp3"
return"miss_1.mp3"},
b2(a,b,c,d,e){var s,r,q={},p=c.a*24,o=c.b*36,n=new A.h9(B.e.k(a),e,1.25,p,o),m=b.a*24,l=b.b*36,k=A.p5(new A.O(m-p,l-o)),j=k.a*24
k=k.b*36
s=new A.O(j,k).C(0,new A.O(p,o))
r=new A.O(j*2,k*2).C(0,new A.O(m,l))
d.gaX().eM(n)
q.a=B.eD
A.pJ(B.eF,new A.iY(q,d,n,r,s))},
k(a){return"TargetMeleeAttackEvent{"+this.b.k(0)+" -> "+this.c.k(0)+"}"}}
A.iZ.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a
if(l.b&&a.d>=0.4){s=m.c
r=m.b
q=m.d
s.e.af(r.cm(l.a.b),q)
p=l.a
o=r.b.x?B.ad:B.o
r.b2(p.c,q,m.e,s,o)
l.b=!1
s=r.c.b
if(l.a.b)s.saw(0,B.o)
else s.saw(0,B.d9)}l=a.d
if(l<=0.4){s=m.f
r=m.r
n=l/0.6
l=m.b.b.b
l.sa5(0,A.of(r.a,s.a,n)*24)
l.sa6(0,A.of(r.b,s.b,n)*36)}else{s=m.b.b
if(l>=0.6){l=s.b
s=m.e
l.sal(s.a)
l.sam(s.b)}else{l=s.b
s=m.r
l.sa5(0,s.a*24)
l.sa6(0,s.b*36)}}},
$S:11}
A.j_.prototype={
$0(){var s,r,q,p,o,n=this,m=n.a
if(m.b){s=n.c
r=n.b
q=n.d
s.e.af(r.cm(m.a.b),q)
p=m.a
o=r.b.x?B.ad:B.o
r.b2(p.c,q,n.e,s,o)
m.b=!1}m=n.b
s=m.b.b
s.sbC(0,n.f)
r=n.e
s.sal(r.a)
s.sam(r.b)
m.c.b.saw(0,n.r)},
$S:0}
A.iY.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
t.hU.a(a)
s=l.a
r=s.a.a+8000
s.a=new A.ah(r)
if(r>5e5){a.eQ(0)
r=l.b.gaX()
q=l.c
if(B.a.I(r.c,q)){r=r.b
B.a.E(q.f.a,r.gfg(r))}}p=B.e.Y(s.a.a,1000)/300
s=l.c
r=l.d
q=1-p
o=l.e
n=p*r.a+q*o.a
s.d=n
m=s.f
if(m!=null)m.v(n,s.e)
n=s.r
if(n!=null)n.b.a=!0
r=p*r.b+q*o.b
s.e=r
q=s.f
if(q!=null)q.v(s.d,r)
s=s.r
if(s!=null)s.b.a=!0},
$S:34}
A.dJ.prototype={
k(a){return"DeathEvent{"+this.a.k(0)+"}"},
a_(a,b){var s,r=null,q=b.ry,p=q.e,o=q.d
if(!(o<p.length))return A.b(p,o)
p=this.a
if(p.e){b.bL(p)
return new A.J(r,r,!0,!0,!1,B.i,r)}if(p.x){b.bv()
q=b.gao().c
p=q.e
if(p!=null)q.au(p)
p=q.b9("GAME OVER")
q.e=p
q.a4(p)
return new A.J(r,"You Died!",!0,!0,!1,B.i,r)}q.a.c.d+=100
s=A.c([],t.w)
q=b.ry.a
if(q.c.d>=1000)B.a.l(s,new A.fI(q))
p.t()
p.c.toString
b.bL(p)
return new A.J(r,p.k(0)+" has died.",!1,!0,!1,s,r)}}
A.f3.prototype={
a_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=b.ry,d=e.e
e=e.d
if(!(e<d.length))return A.b(d,e)
s=d[e]
if($.mX!==s){$.mX=s
e=g.b
B.N.ah(e.a,0,4000,0)
e.b.aQ(0)}for(e=b.f.c,d=g.c,r=!d,q=g.b,p=q.b,o=s.d,n=0;n<100;++n)for(m=0;m<40;++m){l=100*m+n
k=new A.i(n,m)
if(!(l<4000))return A.b(e,l)
j=e[l]
if(j===0&&d)if(o.h(0,k).f===B.z)p.j(0,k,100)
else{i=o.h(0,k)
if(!(i.c===B.b||A.Q(A.bT(i.f))))p.j(0,k,80)}else if(j===1&&r)p.I(0,k)}q.ff(s,B.ac)
e=g.a
d=e.t()
d.toString
k=q.cS(s,d,1,B.ac)
if(k==null)return new A.J(f,"No more areas to explore",!1,!0,!1,B.i,f)
d=$.eT()
r=e.t()
r.toString
r=d.by(r,k,s,B.ac)
h=r==null?f:r.b
if(h==null)return new A.J(f,"No path to that location",!1,!0,!1,B.i,f)
d=h.d
r=e.t()
r.toString
return new A.J(new A.aX(d.V(0,r),e),f,!0,!0,!1,B.i,f)}}
A.hE.prototype={
a_(a,b){var s,r,q,p,o,n,m=null,l=b.ry,k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
s=k[l]
r=A.c([],t.q)
for(l=s.d.c,k=l.length,q=!1,p=0;p<l.length;l.length===k||(0,A.y)(l),++p){o=l[p]
if(o.f===B.K){o.f=B.z
B.a.l(r,o.b)
q=!0}}if(q){for(l=r.length,k=b.e,p=0;p<r.length;r.length===l||(0,A.y)(r),++p)k.af("door_unlock_1.mp3",r[p])
l=b.ry
k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
n=this.a
k[l].d.h(0,n).f=B.Z
l=b.ry
k=l.e
l=l.d
if(!(l<k.length))return A.b(k,l)
k[l].av(n)
return new A.J(m,"A door has been unlocked",!0,!0,!1,B.i,m)}return new A.J(m,m,!1,!0,!1,B.i,m)}}
A.e7.prototype={
a_(a,b){var s,r=null,q=this.b,p=q.c.x.b.h(0,B.v)
if(p==null||p.e===0)return new A.J(r,r,!1,!0,!1,B.i,r)
s=p.e
s.toString
p.e=s-1
return new A.J(new A.h8(this.a,q),r,!0,!0,!1,B.i,r)}}
A.h8.prototype={
a_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null,g=b.ry,f=g.e
g=g.d
if(!(g<f.length))return A.b(f,g)
s=f[g]
g=this.c
f=g.t()
f.toString
r=this.b
q=$.eT().eW(f,r,s)
if(q==null)return new A.J(h,"Cant reach target",!1,!0,!1,B.i,h)
p=s.av(r)
o=A.c([],t.w)
if(p!=null)o.push(new A.dD(!0,g,p))
n=q.fq(0)
m=b.e.af("pistol_1.mp3",f)
g=g.b
f=B.c.u(g.d/24)
g=B.c.u(g.e/36)
l=B.fd.h(0,t.gX.i("W.T").a(700))
l.toString
k=new A.fK(new A.fJ(l,10),f,g)
B.a.l(b.gae().y,k)
g=B.b7.h(0,t.e.i("W.T").a(800))
g.toString
j=new A.P(14,2,-1,-1,h)
j.scO(0,g)
i=A.m5(h,h,0,h,!0,!1,j)
b.cE(i,B.p)
j.saw(0,new A.f(0))
return new A.J(h,h,!0,!0,!1,o,new A.bN(A.jn(16*n.length),new A.ke(n,j,m,k),new A.kf(b,i,k)))}}
A.ke.prototype={
$1(a){var s,r,q=this.a,p=B.c.ai(a.d*(q.length-1))
if(!(p>=0&&p<q.length))return A.b(q,p)
s=q[p]
p=this.b
q=s.a
p.sal(q)
r=s.b
p.sam(r)
B.e.u(q)
B.e.u(r)
this.d.a.c=10*(1-a.d)},
$S:11}
A.kf.prototype={
$0(){var s=this.a
s.bL(this.b)
B.a.I(s.gae().y,this.c)},
$S:0}
A.fu.prototype={}
A.jt.prototype={
e2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=3553
B.d.N(b,f,c)
s=A.ni(this.d.buffer,(a.b*100+a.a)*4000*4,16e3)
r=this.aa(a)
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
s[h]=g}B.d.aF(b,f,0,6408,100,40,0,6408,5121,s)
b.texParameteri(f,10241,9728)
b.texParameteri(f,10242,33071)
b.texParameteri(f,10243,33071)
return c},
aZ(a,b){var s,r,q=a.b*100+a.a
if(q<0||q>=4000)return null
s=this.f
r=s.h(0,a)
if(r==null){r=new A.iy(b.createTexture())
s.j(0,a,r)}if(r.b){this.e2(a,b,r.a)
r.b=!1}return r.a},
aa(a){var s,r,q,p=(a.b*100+a.a)*4000
if(p<0||p>=this.a.byteLength)return null
s=this.a
r=s.BYTES_PER_ELEMENT
q=A.ki(p,p+4000,B.e.c2(s.byteLength,r))
return new A.kB(100,A.ni(s.buffer,s.byteOffset+p*r,(q-p)*r),this.c)},
bR(){var s,r,q,p,o=this.aa(this.e).c
for(s=o.length,r=this.c,q=0;q<4000;++q){p=r[q]
if(!(q<s))return A.b(o,q)
r[q]=p|(o[q]>0?1:0)}},
cY(){var s,r,q
for(s=0;s<100;++s)for(r=0;r<40;++r)this.bg(new A.i(s,r))
for(q=this.f,q=q.gbS(q),q=q.gA(q);q.n();)q.gp(q).b=!0},
d3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.U.a(a)
for(s=g.b,r=0;r<100;++r)for(q=0;q<40;++q){p=q*100+r
o=a.ab(0,r,q)
o=o.c===B.b||A.Q(A.ph(o.f))?1:0
if(!(p<4000))return A.b(s,p)
s[p]=o}if(b==null)return
n=b.b*100+b.a
g.bg(b)
for(s=g.a,m=0;m<100;++m)for(l=0;l<40;++l){p=(l*100+m)*4000+n
if(!(p>=0&&p<16e6))return A.b(s,p)
if(s[p]>0)g.bg(new A.i(m,l))}s=g.aa(b)
s.toString
for(p=g.f,p=p.gat(p),p=p.gA(p),o=t.j,k=s.c,s=s.a,j=k.length;p.n();){i=p.gp(p)
h=o.a(i.a)
h=h.b*s+h.a
if(!(h>=0&&h<j))return A.b(k,h)
if(k[h]>0)i.b.b=!0}},
d2(a){return this.d3(a,null)},
bg(a){var s,r,q,p=this.aa(a),o=p==null?null:p.c
if(o==null)return
p=this.b
s=a.b*100+a.a
if(!(s>=0&&s<4000))return A.b(p,s)
if(p[s]===1)return
for(p=o.length,r=0;r<o.byteLength;++r){if(!(r<p))return A.b(o,r)
o[r]=0}if(!(s<p))return A.b(o,s)
o[s]=15
for(q=0;q<4;++q)this.ep(new A.d6(1,-1,1),new A.kg(B.f9[q],a),o)},
eo(a,b,c){var s,r
if(a<0||a>=b.byteLength)return
s=b.length
if(this.bi(a,b)){if(!(a>=0&&a<s))return A.b(b,a)
s=b[a]
r=c.a
if(!(r<4))return A.b(B.aZ,r)
b[a]=s|B.aZ[r]}else{if(!(a>=0&&a<s))return A.b(b,a)
b[a]=15}},
bi(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===1},
bh(a,b){var s
if(a<0||a>=b.byteLength)return!1
s=this.b
if(!(a>=0&&a<4000))return A.b(s,a)
return s[a]===0},
ep(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.r
B.a.sm(d,0)
B.a.l(d,a)
for(s=b.a;r=d.length,r!==0;){if(0>=r)return A.b(d,-1)
q=d.pop()
r=q.a
p=B.c.ai(r*q.b+0.5)
o=B.c.cN(r*q.c-0.5)
for(n=r+1,m=2*r,l=p,k=null;l<=o;++l,k=i){j=b.ft(0,new A.i(r,l))
i=j.b*100+j.a
h=e.bi(i,c)
if(!h)g=l>=r*q.b&&l<=r*q.c
else g=!0
if(g)e.eo(i,c,s)
g=k!=null
if(g&&e.bi(k,c)&&e.bh(i,c))q.b=(2*l-1)/m
if(g&&e.bh(k,c)&&h){f=new A.d6(n,q.b,q.c)
f.c=(2*l-1)/m
B.a.l(d,f)}}if(k!=null&&e.bh(k,c))B.a.l(d,new A.d6(n,q.b,q.c))}}}
A.iy.prototype={}
A.kB.prototype={
h(a,b){var s,r
t.j.a(b)
s=this.c
r=b.b*this.a+b.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0},
ab(a,b,c){var s=this.c,r=c*this.a+b
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]>0}}
A.cc.prototype={
k(a){return"Cardinal."+this.b}}
A.kg.prototype={
ft(a,b){var s,r=this,q=b.a,p=b.b
switch(r.a.a){case 0:s=r.b
return new A.i(s.a+p,s.b-q)
case 1:s=r.b
return new A.i(s.a+p,s.b+q)
case 2:s=r.b
return new A.i(s.a+q,s.b+p)
case 3:s=r.b
return new A.i(s.a-q,s.b+p)}}}
A.d6.prototype={}
A.bg.prototype={
k(a){return this.a}}
A.dX.prototype={
O(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=3553,a="u_player_visible_texture"
if(c.f==null){s=a0.createTexture()
c.f=s
B.d.N(a0,b,s)
B.d.aF(a0,b,0,6408,100,40,0,6408,5121,null)
a0.texParameteri(b,10241,9729)
a0.texParameteri(b,10242,33071)
a0.texParameteri(b,10243,33071)}B.d.aE(a0,36160,c.e)
B.d.bA(a0,36160,36064,b,c.f,0)
a0.clearColor(0,0,0,1)
a0.clear(16640)
a0.viewport(0,0,100,40)
s=c.d
r=s.aZ(s.e,a0)
r.toString
a0.activeTexture(33985)
B.d.N(a0,b,r)
for(q=c.y,p=q.length,o=c.b,n=t.t,m=t.n,l=t.N,k=t.z,j=0;j<q.length;q.length===p||(0,A.y)(q),++j){i=q[j]
h=i.gbD()
g=s.aZ(new A.i(i.ga5(i),i.ga6(i)),a0)
if(g==null)continue
a0.activeTexture(33984)
B.d.N(a0,b,g)
f=h.c
e=A.c([i.ga5(i),i.ga6(i)],n)
d=h.b.a
o.a8(a0,4,3,A.aW(["u_source_strength",f,"u_source_position",e,"u_source_color",A.c([(d>>>16&255)/255,(d>>>8&255)/255,(d&255)/255,0.2],m),"u_time",a1.c/1000,a,1,"u_visible_texture",0],l,k))}B.d.aE(a0,36160,c.z)
a0.viewport(0,0,a1.a,a1.b)
a0.activeTexture(33984)
B.d.N(a0,b,c.f)
a0.activeTexture(33985)
B.d.N(a0,b,c.r)
a0.activeTexture(33986)
B.d.N(a0,b,r)
c.c.a8(a0,4,3,A.aW(["u_light_texture",0,"u_game_world_texture",1,a,2,"u_block_size",B.f_,"u_resolution",A.c([a1.a,a1.b],n),"u_offset",A.c([a1.d,a1.e],m)],l,k))}}
A.bA.prototype={
gcQ(){var s=this.b
s=s==null?null:s.gcQ()
return 1+(s==null?0:s)},
R(a,b){return B.c.R(this.f,t.p6.a(b).f)},
gcz(){var s,r=this.a
if(r==null)r=this
else{s=r.a
r=s==null?r:s.gcz()}return r},
e8(){var s,r,q
for(s=this,r=null;s!=null;r=s,s=q){s.b=r
q=s.a}},
fq(a){var s,r=A.c([],t.q)
for(s=this;s!=null;){B.a.l(r,s.d)
s=s.b}return r},
k(a){var s,r,q,p
for(s=this.d,r=this,q="",p="";r!=null;q=", "){p=p+q+s.k(0)
r=r.b}return p.charCodeAt(0)==0?p:p},
$iag:1}
A.b1.prototype={
k(a){return"Directions."+this.b}}
A.ka.prototype={
eW(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.a,e=a1.a,d=a0.b,c=a1.b,b=Math.max(Math.abs(f-e),Math.abs(d-c)),a=new A.bA(a0,0,b*1.02+0)
for(s=(b-1)*1.02+1,r=a2.d,q=t.W,p=r.a,o=r.b,n=a0,m=a,l=1;l<=b;++l,n=h,m=g){k=l/b
j=1-k
i=B.c.u(e*k+f*j)
j=B.c.u(c*k+d*j)
h=new A.i(i,j)
if(!(i>=0&&j>=0&&i<p&&j<o))return null
if(A.lp(q.a(r.h(0,h)),a2,B.V)&&l!==b)return null
A.r4(i-n.a,j-n.b)
g=new A.bA(h,1,s)
g.a=m
m.b=g}return a},
by(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=A.n6(b,t.p6),a0=A.ac(t.j,t.i),a1=a4.d
a.l(0,new A.bA(a2,0,a2.aW(a3)*1.02+0))
for(s=a.$ti.c,r=a1.a,q=a1.b,p=t.W;o=a.c,n=o===0,!n;){if(n)A.S(A.ai("No element"));++a.d
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
if(k>0)a.c7(j,0)
o=l.d
i=a0.h(0,o)
if(i!=null&&i<l.e)continue
for(n=l.e,h=0;h<8;++h){g=B.ar[h]
f=A.a9(o,g)
m=f.a
if(m>=0){e=f.b
m=e>=0&&m<r&&e<q}else m=!1
if(m){m=l.a
if(!J.a_(m==null?b:m.d,f))m=A.lp(p.a(a1.h(0,f)),a4,a5)&&!f.q(0,a3)
else m=!0}else m=!0
if(m)continue
m=f.aW(a3)
e=this.ef(g)
if(typeof e!=="number")return A.cH(e)
e=n+e
d=new A.bA(f,e,m*1.02+e)
d.a=l
if(f.q(0,a3)){d.e8()
s=l.a
return s==null?l:s.gcz()}c=a0.h(0,f)
if(!(e>1/0))m=c!=null&&e>=c
else m=!0
if(m)continue
a0.j(0,f,e)
s.a(d);++a.d
a.aA(0,d)}}return b},
cT(a,b,c){return this.by(a,b,c,B.V)},
ef(a){switch(a.a){case 4:case 7:case 5:case 6:return 1
case 1:case 0:case 2:case 3:return 1.4}}}
A.fl.prototype={
cS(a,b,c,d){var s,r,q,p,o,n,m,l,k=this.a,j=b.b*100+b.a
if(!(j>=0&&j<4000))return A.b(k,j)
s=k[j]*c
r=A.c([],t.q)
for(j=a.d,q=t.W,p=!1,o=0;o<8;++o){n=A.a9(b,B.ar[o])
m=n.b*100+n.a
if(m<0||m>=4000)continue
if(A.lp(q.a(j.h(0,n)),a,d))continue
if(!(m>=0&&m<4000))return A.b(k,m)
l=k[m]*c
if(l>s){B.a.sm(r,0)
B.a.l(r,n)
s=l
p=!0}else if(l===s)B.a.l(r,n)}k=r.length
if(k===0||!p)return null
k=$.on().H(k)
if(!(k>=0&&k<r.length))return A.b(r,k)
return r[k]},
bx(a,b,c){return this.cS(a,b,c,B.V)},
ff(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
B.N.ah(f,0,4000,0)
for(s=this.b,s=s.gat(s),s=s.gA(s);s.n();){r=s.gp(s)
q=r.a
B.N.j(f,q.b*100+q.a,r.b)}s=a.d
r=t.W
do for(p=!1,o=0;o<100;++o)for(n=0;n<40;++n){m=n*100+o
if(A.lp(r.a(s.h(0,new A.i(o,n))),a,b))continue
if(!(m<4000))return A.b(f,m)
l=f[m]
for(q=[m+100,m-100,m+1,m-1],k=-1,j=0,i=0;i<4;++i){h=q[i]
if(h<0||h>=4000)continue
if(!(h>=0&&h<4000))return A.b(f,h)
g=f[h]
if(g>j){j=g
k=h}}if(k!==-1&&j>l+1){f[m]=j-1
p=!0}}while(p)}}
A.hg.prototype={
eg(a,b){var s,r,q,p,o,n,m,l=this,k="a_position",j=B.c.ai((b.f+b.d)/24),i=B.c.ai((b.r+b.e)/36),h=new A.i(j,i)
if(h.q(0,l.d)||j<0||j>=100||i<0||i>=40)return
l.d=h
s=l.c
r=s.T(k,t.C)
q=l.d
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
s.a0(a,k,r)}}
A.R.prototype={}
A.x.prototype={}
A.db.prototype={
k(a){return"UniformKind."+this.b}}
A.hO.prototype={}
A.iD.prototype={}
A.jF.prototype={
S(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_program",g=A.nR(a,i.a,35633),f=A.nR(a,i.b,35632),e=a.createProgram()
a.attachShader(e,g)
a.attachShader(e,f)
a.linkProgram(e)
if(!J.a_(a.getProgramParameter(e,35714),!0)){A.dt(a.getProgramInfoLog(e))
A.S(A.ai("Invalid Program"))}i.e=e
s=a.createVertexArray()
s.toString
i.f=s
B.d.cM(a,A.dm(s,"_vertexArrayObject"))
for(s=i.c,r=s.length,q=i.r,p=0;p<s.length;s.length===r||(0,A.y)(s),++p){o=s[p]
n=o.a
q.j(0,n,new A.iD(a.getUniformLocation(A.dm(i.e,h),n),o))}for(s=i.d,r=s.length,q=i.x,p=0;p<s.length;s.length===r||(0,A.y)(s),++p){m=s[p]
n=m.a
l=a.getAttribLocation(A.dm(i.e,h),n)
k=a.createBuffer()
B.d.cJ(a,34962,k)
j=m.e
a.bufferData(34962,j,m.b)
a.enableVertexAttribArray(l)
a.vertexAttribPointer(l,m.d,m.c,!1,0,0)
q.j(0,n,new A.hO(k,j))}},
T(a,b){A.qZ(b,t.jv,"T","getAttributeData")
return b.a(this.x.h(0,a).c)},
a0(a,b,c){var s=this.x.h(0,b)
if(s==null)throw A.d(A.ai("WARNING, NO ATTRIBUTE "+b))
B.d.cJ(a,34962,s.a)
a.bufferSubData(34962,0,c,0)},
a8(a,b,c,d){var s,r,q,p,o,n
t.ea.a(d)
B.d.fC(a,A.dm(this.e,"_program"))
B.d.cM(a,A.dm(this.f,"_vertexArrayObject"))
for(s=d.gat(d),s=s.gA(s),r=this.r;s.n();){q=s.gp(s)
p=q.a
o=q.b
A.af(p)
n=r.h(0,p)
if(n==null)A.S(A.ai("WARNING, NO UNIFORM "+p))
switch(n.b.b.a){case 0:B.d.fv(a,n.a,A.b7(o))
break
case 1:q=J.az(o)
B.d.fz(a,n.a,A.b7(q.h(o,0)),A.b7(q.h(o,1)))
break
case 2:q=J.az(o)
B.d.fA(a,n.a,A.b7(q.h(o,0)),A.b7(q.h(o,1)),A.b7(q.h(o,2)))
break
case 3:q=J.az(o)
B.d.fB(a,n.a,A.b7(q.h(o,0)),A.b7(q.h(o,1)),A.b7(q.h(o,2)),A.b7(q.h(o,3)))
break
case 4:B.d.fw(a,n.a,A.K(o))
break}}a.drawArrays(b,0,c)}}
A.kj.prototype={
sf7(a){this.f=A.nO(a)}}
A.aw.prototype={}
A.fY.prototype={}
A.hi.prototype={
aU(){var s=0,r=A.bo(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aU=A.bp(function(a,b){if(a===1)return A.bl(b,r)
while(true)switch(s){case 0:e=A.c([],t.iw)
for(p=q.b,o=t.cU,n=t.ou,m=t.oV,l=t.Z,k=t.L,j=0;j<47;++j){i=p[j]
h=new XMLHttpRequest()
g=new A.G($.E,o)
B.eH.fc(h,"get","sounds/"+i)
h.responseType="arraybuffer"
f=m.a(new A.kn(q,h,i,new A.al(g,n)))
l.a(null)
A.ep(h,"readystatechange",f,!1,k)
h.send()
B.a.l(e,g)}s=2
return A.a8(A.pd(e,t.H),$async$aU)
case 2:return A.bm(null,r)}})
return A.bn($async$aU,r)},
bH(a,b,c){var s,r,q,p=this.c,o=A.pe(p),n=this.a.h(0,a)
if(n==null)return new A.fY()
s=p.createBufferSource()
r=B.n.J()
q=o.gain
q.toString
B.cU.sfD(q,0.1*c+r/20)
p=p.destination
p.toString
B.eG.cf(o,p,0,0)
B.aI.cf(s,o,0,0)
B.aI.seP(s,n)
s.start()
return new A.fY()},
af(a,b){return this.bH(a,b,2)},
$ipG:1}
A.kn.prototype={
$1(a){var s=0,r=A.bo(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.bp(function(b,c){if(b===1)return A.bl(c,r)
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
return A.a8(B.cT.eS(n.c,t.lo.a(A.qi(m.response))),$async$$1)
case 7:l.j(0,k,c)
p.aR(0)
s=5
break
case 6:p.aS(new A.hY("Failed to load "+o))
case 5:case 3:return A.bm(null,r)}})
return A.bn($async$$1,r)},
$S:35}
A.lA.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.d.N(q,r,p)
B.d.df(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.Z(0,p)},
$S:9}
A.ee.prototype={
dM(a,b){A.rj(a,"CursesTransparent_24x36.png").bO(new A.ko(this),t.P)},
l(a,b){b.a=this
this.d.l(0,b)
this.a=!0},
I(a,b){t.r.a(b)
this.d.I(0,b)
b.a=null
this.a=!0},
aQ(a){var s,r,q,p
for(s=this.d,r=s.$ti,q=new A.cE(s,s.d,r.i("cE<1>")),r=r.c;q.n();){if(q.d<0)p=A.S(A.ai("No element"))
else{p=q.c
if(p==null)p=r.a(null)}p.a=null}++s.d
s.sbn(B.f4)
s.c=0
this.a=!0},
eu(c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9="a_position",c0="a_texcoord",c1="a_bg_color",c2=b8.d,c3=c2.c
if(c3>1e4){A.dt("WARNING: TOO MANY SPRITES "+c3)
if(b8.f)b8.f=!1
c3=1e4}s=b8.b
r=t.jv
q=c3*12
p=A.cs(s.T(b9,r).buffer,0,q)
o=A.cs(s.T(c0,r).buffer,0,q)
q=c3*24
n=A.cs(s.T("a_color",r).buffer,0,q)
m=A.cs(s.T(c1,r).buffer,0,q)
l=c2.eE()
B.a.b1(l,c2.a)
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
p[a6]=a}else{b0=B.c.an(12*a9)
b1=B.c.an(18*a9)
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
if(b5==null)B.a5.ah(n,b4,b4+24,0)
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
n[a]=e}if(b6==null)B.a5.ah(m,b4,b4+24,0)
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
m[a]=e}}s.a0(c4,b9,p)
s.a0(c4,c0,o)
s.a0(c4,"a_color",n)
s.a0(c4,c1,m)},
O(a,b){var s,r=this
if(r.c==null||r.d.c===0)return
if(r.a){r.eu(a)
r.a=!1}s=r.e
s.aZ(s.e,a)
a.activeTexture(33984)
B.d.N(a,3553,r.c)
r.b.a8(a,4,r.d.c*6,A.aW(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.ko.prototype={
$1(a){this.a.c=t.lJ.a(a)},
$S:15}
A.P.prototype={
sa5(a,b){var s=this.a
if(s!=null)s.a=!0
this.d=b},
sa6(a,b){var s=this.a
if(s!=null)s.a=!0
this.e=b},
sdv(a,b){var s=this.a
if(s!=null)s.a=!0
this.f=b},
sal(a){var s=this.a
if(s!=null)s.a=!0
this.d=a*24},
sam(a){var s=this.a
if(s!=null)s.a=!0
this.e=a*36},
saw(a,b){var s
this.r=b
s=this.a
if(s!=null)s.a=!0},
scO(a,b){var s=this.a
if(s!=null)s.a=!0
this.x=b},
sbC(a,b){var s
this.y=b
s=this.a
if(s!=null)s.a=!0},
k(a){return"Sprite("+this.b+", "+this.c+")"}}
A.m.prototype={}
A.jZ.prototype={}
A.hr.prototype={
ez(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(this.c==null)return
s=this.b
r=s.T("a_color",t.C)
q=this.c
switch(q.e.a.a){case 0:case 1:case 6:case 5:p=$.oo()
break
case 2:p=$.mF()
break
case 4:p=$.oq()
break
case 3:p=$.op()
break
default:p=null}for(o=r.length,q=q.d.c,n=q.length,m=0;m<40;++m)for(l=m<39,k=m*100,j=0;j<100;++j){i=k+j
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
f=!(f.c===B.b||A.Q(A.bT(f.f)))}else f=!1
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
r[f]=1}}}s.a0(a,"a_color",r)},
O(a,b){var s=this
if(s.d){s.ez(a)
s.d=!1}if(s.c==null)return
s.b.a8(a,4,48e3,A.aW(["u_resolution",A.c([b.a,b.b],t.t),"u_offset",A.c([b.d,b.e],t.n)],t.N,t.z))}}
A.hu.prototype={
eM(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.k),i=a.a
i=(i.length===0?B.Q:new A.bE(i)).a
s=new A.d9(i,0,0)
r=this.b
q=r.d
p=q.$ti.c
o=a.c
n=a.b
for(;s.b4(1,s.c);){m=s.d
l=$.qh.h(0,m==null?s.d=B.f.aI(i,s.b,s.c):m)
if(l==null)l=B.fK
k=new A.P(l.a,l.b,-1,-1,null)
k.x=n
k.f=o
k.a=r
p.a(k);++q.d
q.aA(0,k)
r.a=!0
B.a.l(j,k)}a.r=this
i=new A.l9(j)
i.v(a.d,a.e)
a.f=i
B.a.l(this.c,a)}}
A.h9.prototype={}
A.l9.prototype={
v(a,b){var s,r,q,p,o,n,m
for(s=this.a,r=s.length,q=0,p=0;p<r;++p){o=s[p]
n=o.a
m=n==null
if(!m)n.a=!0
o.d=a+q
if(!m)n.a=!0
o.e=b
q+=24}}}
A.lz.prototype={
$1(a){var s=this,r=3553,q=s.a,p=s.b
B.d.N(q,r,p)
B.d.df(q,r,0,6408,6408,5121,s.c)
q.texParameteri(r,10242,33071)
q.texParameteri(r,10243,33071)
q.texParameteri(r,10241,9729)
s.d.Z(0,p)},
$S:9}
A.hA.prototype={
dN(a){A.ri(a,"CursesTransparent_24x36.png").bO(new A.kz(this),t.P)},
eH(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5="a_position",b6="a_texcoord",b7="a_bg_color",b8=b4.d,b9=b8.length
if(b9>1e4){A.dt("WARNING: TOO MANY SPRITES "+b9)
if(b4.r)b4.r=!1
b9=1e4}s=b4.e
r=t.jv
q=b9*12
p=A.cs(s.T(b5,r).buffer,0,q)
o=A.cs(s.T(b6,r).buffer,0,q)
q=b9*24
n=A.cs(s.T("a_color",r).buffer,0,q)
m=A.cs(s.T(b7,r).buffer,0,q)
for(r=m.length,q=n.length,l=o.length,k=p.length,j=0;j<b9;++j){if(!(j<b8.length))return A.b(b8,j)
i=b8[j]
h=i.b/16
g=i.c/16
f=j*12
if(!(f<l))return A.b(o,f)
o[f]=h
e=f+1
if(!(e<l))return A.b(o,e)
o[e]=g
d=f+2
c=h+0.0625
if(!(d<l))return A.b(o,d)
o[d]=c
b=f+3
if(!(b<l))return A.b(o,b)
o[b]=g
a=f+4
if(!(a<l))return A.b(o,a)
o[a]=h
a0=f+5
a1=g+0.0625
if(!(a0<l))return A.b(o,a0)
o[a0]=a1
a2=f+6
if(!(a2<l))return A.b(o,a2)
o[a2]=c
a3=f+7
if(!(a3<l))return A.b(o,a3)
o[a3]=a1
a4=f+8
if(!(a4<l))return A.b(o,a4)
o[a4]=c
c=f+9
if(!(c<l))return A.b(o,c)
o[c]=g
a5=f+10
if(!(a5<l))return A.b(o,a5)
o[a5]=h
a6=f+11
if(!(a6<l))return A.b(o,a6)
o[a6]=a1
a7=i.d
a8=i.e
a9=i.f
if(!(f<k))return A.b(p,f)
p[f]=a7
if(!(e<k))return A.b(p,e)
p[e]=a8
e=a7+24*a9
if(!(d<k))return A.b(p,d)
p[d]=e
if(!(b<k))return A.b(p,b)
p[b]=a8
if(!(a<k))return A.b(p,a)
p[a]=a7
a=a8+36*a9
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
b0=j*24
b1=i.x
b2=i.r
if(b1==null)B.a5.ah(n,b0,b0+24,0)
else for(e=b1.a,d=(e>>>16&255)/255,c=(e>>>8&255)/255,b=(e&255)/255,e=(e>>>24&255)/255,b3=0;b3<24;b3+=4){a=b0+b3
if(!(a<q))return A.b(n,a)
n[a]=d
a0=a+1
if(!(a0<q))return A.b(n,a0)
n[a0]=c
a0=a+2
if(!(a0<q))return A.b(n,a0)
n[a0]=b
a+=3
if(!(a<q))return A.b(n,a)
n[a]=e}if(b2==null)B.a5.ah(m,b0,b0+24,0)
else for(e=b2.a,d=(e>>>16&255)/255,c=(e>>>8&255)/255,b=(e&255)/255,e=(e>>>24&255)/255,b3=0;b3<24;b3+=4){a=b0+b3
if(!(a<r))return A.b(m,a)
m[a]=d
a0=a+1
if(!(a0<r))return A.b(m,a0)
m[a0]=c
a0=a+2
if(!(a0<r))return A.b(m,a0)
m[a0]=b
a+=3
if(!(a<r))return A.b(m,a)
m[a]=e}}s.a0(c0,b5,p)
s.a0(c0,b6,o)
s.a0(c0,"a_color",n)
s.a0(c0,b7,m)},
O(a,b){var s,r,q=this
if(q.f==null)return
s=q.c
s.sdA(b.b)
s.sdB(b.a)
r=q.b
r=r==null?null:new A.fx(r.b,r.a)
s.f.sf2(r)
s.r.sdC(0,q.b!=null)
if(s.b){r=b.b
s.v(B.k,new A.bf(0,0,b.a,r))
r=q.d
B.a.sm(r,0)
B.a.L(r,s.G())
s.cp()
q.a=!0}if(q.a){q.eH(a)
q.a=!1}a.activeTexture(33984)
B.d.N(a,3553,q.f)
q.e.a8(a,4,q.d.length*6,A.aW(["u_texture",0,"u_resolution",A.c([b.a,b.b],t.t)],t.N,t.z))},
$ipp:1}
A.kz.prototype={
$1(a){this.a.f=t.lJ.a(a)},
$S:15}
A.aK.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.aK&&b.a.q(0,this.a)&&b.b===this.b&&b.c===this.c},
gw(a){return A.cv(this.a,this.b,this.c,B.y)},
k(a){var s=this.a
return"Rect("+A.B(s.a)+", "+A.B(s.b)+", "+this.b+", "+this.c+")"}}
A.aa.prototype={
a3(a){var s=a==null?[]:a,r=s.length,q=0
for(;q<s.length;s.length===r||(0,A.y)(s),++q)s[q].seh(this)},
fh(){var s,r,q
for(s=this.c,r=s.length,q=0;q<r;++q)s[q].a=null
B.a.sm(s,0)
this.D()},
a4(a){B.a.l(this.c,a)
a.a=this
this.D()},
au(a){if(a==null)return
B.a.I(this.c,a)
a.a=null
this.D()},
aj(a){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)if(s[q].aj(a))return!0
return!1},
D(){this.b=!0
var s=this.a
if(s!=null)s.D()},
cp(){var s,r,q
this.b=!1
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)s[q].cp()},
seh(a){this.a=t.mV.a(a)}}
A.hs.prototype={
sfo(a,b){this.f=b
this.D()},
sfp(a){if(a===this.r)return
this.r=a
this.D()},
v(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.d=a
j.D()
if(b.q(0,j.y)&&j.f===j.z)return j.Q
s=j.x
B.a.sm(s,0)
r=b.c
if(r==null)r=1/0
q=t.t
p=0
o=0
while(!0){n=j.f
n=n.length===0?B.Q:new A.bE(n)
if(!(p<n.gm(n)))break
m=p
l=0
while(!0){if(l<r){n=j.f
n=n.length===0?B.Q:new A.bE(n)
n=m<n.gm(n)}else n=!1
if(!n)break
if(B.f.as(j.f,m)===10){++m
break}l+=24*j.r;++m}k=m
while(!0){n=j.f
n=n.length===0?B.Q:new A.bE(n)
if(!(k<n.gm(n)&&k>0&&B.f.as(j.f,k-1)!==32&&k>p))break;--k
l-=24*j.r}m=k===p?m:k
if(l>o)o=l
B.a.l(s,A.c([p,m],q))
p=m}j.y=b
j.z=j.f
return j.Q=new A.aK(a,B.c.u(o),B.c.u(s.length*36*j.r))},
G(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=A.c([],t.k)
for(s=f.x,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.y)(s),++p){o=s[p]
n=f.f
m=o.length
if(0>=m)return A.b(o,0)
l=o[0]
if(1>=m)return A.b(o,1)
l=B.f.fu(B.f.aI(n,l,o[1]))
n=(l.length===0?B.Q:new A.bE(l)).a
m=new A.d9(n,0,0)
l=q*36
k=0
for(;m.b4(1,m.c);){j=m.d
i=$.qg.h(0,j==null?m.d=B.f.aI(n,m.b,m.c):j)
if(i==null)i=B.fN
i=new A.P(i.a,i.b,-1,-1,null)
i.r=f.e
h=f.r
i.f=h
g=f.d
i.d=g.a+k*24*h
i.e=g.b+l*h
B.a.l(e,i);++k}++q}return e}}
A.fe.prototype={
G(){var s,r,q,p=A.c([],t.k)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)B.a.L(p,s[q].G())
return p},
v(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.d=a
j.D()
if(j.e){s=b.d
s.toString
for(r=j.c,q=a.a,p=a.b,o=s,n=0,m=0;m<r.length;++m){l=r[m]
k=l.v(new A.O(q,p),b)
n=Math.max(k.b,n)
o-=k.c
l.v(new A.O(q,p+o),b)}o=s}else for(s=j.c,r=a.a,q=a.b,n=0,o=0,m=0;m<s.length;++m){k=s[m].v(new A.O(r,q+o),b)
n=Math.max(k.b,n)
o+=k.c}return new A.aK(a,n,o)}}
A.f4.prototype={
v(a,b){var s,r,q,p=this
p.d=a
p.D()
s=b.q(0,B.E)
r=p.c
q=r.length
if(s){if(0>=q)return A.b(r,0)
return p.f=r[0].v(a,b)}else{if(0>=q)return A.b(r,0)
r[0].v(a,b)
s=b.c
s.toString
r=b.d
r.toString
return p.f=new A.aK(a,s,r)}},
G(){var s,r,q,p,o,n,m=this,l=A.c([],t.k)
for(s=m.e,r=0;r<m.f.c/36;++r)for(q=r*36,p=0;p<m.f.b/24;++p){o=new A.P(11,13,-1,-1,null)
n=m.d
o.d=n.a+p*24
o.e=n.b+q
o.x=s
l.push(o)}s=m.c
if(0>=s.length)return A.b(s,0)
B.a.L(l,s[0].G())
return l}}
A.h3.prototype={
G(){var s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].G()},
v(a,b){var s,r,q,p,o,n=this
n.d=a
n.D()
if(!b.q(0,B.E)){s=b.d
s.toString
r=b.c
r.toString
q=new A.bf(b.a,b.b,r-n.r-n.x,s-n.e-n.f)}else q=b
s=n.c
if(0>=s.length)return A.b(s,0)
r=n.r
p=n.e
o=s[0].v(a.C(0,new A.O(r,p)),q)
return new A.aK(a,o.b+r+n.x,o.c+p+n.f)}}
A.dG.prototype={
v(a,b){var s,r,q,p,o,n,m=this
m.d=a
m.D()
if(!b.q(0,B.E)){s=b.d
s.toString
r=b.c
r.toString
q=new A.bf(b.a,b.b,r-48,s-72)}else q=b
s=m.c
if(0>=s.length)return A.b(s,0)
r=s[0]
p=r.v(a.C(0,new A.O(24,36)),q)
r=m.e
o=r==null?null:r.v(a.C(0,new A.O(24,0)),b)
if(o!=null){r=o.b
n=p.b
if(r>n){if(0>=s.length)return A.b(s,0)
s=s[0]
s.v(a.C(0,new A.O(24,36)),new A.bf(0,0,r,p.c))}return m.ch=new A.aK(a,Math.max(n,r)+48,p.c+72)}return m.ch=new A.aK(a,p.b+48,p.c+72)},
G(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.c([],t.k),f=h.ch,e=B.c.u(f.c/36),d=B.c.u(f.b/24)
for(f=h.r,s=e-1,r=d-1,q=0;q<e;++q)for(p=q*36,o=q===s,n=q===0,m=0;m<d;++m){l=m===0
if(l&&n)k=B.fQ
else if(l&&o)k=B.fO
else{j=m===r
if(j&&n)k=B.fG
else if(j&&o)k=B.fI
else if(l)k=B.bl
else if(j)k=B.bl
else if(n)k=B.bv
else k=o?B.bv:null}if(k==null)continue
i=new A.P(k.a,k.b,-1,-1,null)
l=h.d
i.d=l.a+m*24
i.e=l.b+p
i.x=f
i.r=B.W
B.a.l(g,i)}f=h.c
if(0>=f.length)return A.b(f,0)
f=A.jU(f[0].G(),!0,t.r)
B.a.L(f,g)
s=h.e
s=s==null?null:s.G()
if(s!=null)B.a.L(f,s)
return f}}
A.d7.prototype={
aj(a){var s,r,q=this,p="click_1.mp3"
if(a.q(0,B.ap)&&q.x>0){--q.x
q.D()
$.aB.ac().e.af(p,B.p)
return!0}if(a.q(0,B.ao)&&q.x<q.e.length-1){++q.x
q.D()
$.aB.ac().e.af(p,B.p)
return!0}if(a.q(0,B.aY)||a.q(0,B.aV)){s=q.e
r=q.x
if(!(r>=0&&r<s.length))return A.b(s,r)
q.f.$1(s[r])
$.aB.ac().e.af(p,B.p)
return!0}if(a.q(0,B.aq)){q.r.$0()
return!0}if(q.c0(a))return!0
if(a.q(0,B.ap)||a.q(0,B.ao)||a.q(0,B.aW)||a.q(0,B.aX))return!0
return!1},
G(){var s,r=this,q=r.c
if(0>=q.length)return A.b(q,0)
q=A.jU(q[0].G(),!0,t.r)
s=A.pH(B.fF)
s.scO(0,B.W)
s.sa5(0,r.d.a+48)
s.sa6(0,r.d.b+r.x*36+72)
q.push(s)
return q},
v(a,b){var s
this.d=a
this.D()
s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].v(a,b)}}
A.cJ.prototype={
aj(a){if(a.q(0,B.aY)||a.q(0,B.aV)||a.q(0,B.aq)){this.e.$0()
$.aB.ac().e.af("click_1.mp3",B.p)
return!0}if(a.q(0,B.ap)||a.q(0,B.ao)||a.q(0,B.aW)||a.q(0,B.aX))return!0
return this.c0(a)},
G(){var s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].G()},
v(a,b){var s
this.d=a
this.D()
s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].v(a,b)}}
A.fM.prototype={}
A.dP.prototype={
sdB(a){if(a===this.x)return
this.x=a
this.D()},
sdA(a){if(a===this.y)return
this.y=a
this.D()},
sf6(a){var s,r=this
if(a===r.z)return
r.z=a
s=r.e0()
r.e=s
r.a4(s)
r.D()},
e1(){var s,r=t.f
r=A.c([A.mY(A.m7(A.k9(36,A.m8(A.c([A.ht("After a difficult journey through <NAME> mountains, you arrive at the base of the <FACTION> mining camp. Delve to the 10th level to discover the secret of <ARTIFACT>.\n\nPress [Enter] To Start")],r),!1),48,24,36),B.o),B.o,null)],r)
s=new A.cJ(new A.jB(this),r,B.k)
s.a3(r)
return s},
e0(){var s,r,q,p=[]
for(s=this.z.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)p.push(s[q])
return A.nq(p,new A.jx(this),new A.jy(this),null,t.z)},
b9(a){return A.nq(A.c(["New Game","Settings","Quit"],t.s),new A.jz(this),new A.jA(this),a,t.N)},
aj(a){var s,r=this
if(a.q(0,B.aq)&&r.e==null){s=r.b9("")
r.e=s
r.a4(s)
return!0}s=r.e
s=s==null?null:s.aj(a)
return s==null?r.f.aj(a):s},
G(){var s=A.c([],t.k),r=this.e
r=r==null?null:r.G()
if(r!=null)B.a.L(s,r)
B.a.L(s,this.f.G())
B.a.L(s,this.r.G())
return s},
v(a,b){var s,r,q,p,o,n=this
n.d=a
n.D()
s=n.e
if(s!=null){r=s instanceof A.cJ?new A.bf(0,0,864,432):B.E
s=B.c.an(n.x/2)
q=B.c.an(n.y/2)
p=n.e.v(new A.O(s,q),r)
n.e.v(new A.O(s-p.b/2,q-p.c/2),r)}n.f.v(new A.O(0,n.y-36),b)
s=n.r
o=s.v(B.k,b)
s.v(new A.O(n.x-o.b,0),b)
return new A.aK(a,n.x,n.y)}}
A.jB.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.au(r)
s.e=null},
$S:0}
A.jy.prototype={
$1(a){var s=this.a,r=s.e
r.toString
s.au(r)
s.e=null
s.z.b.Z(0,a)
s.z=null},
$S:5}
A.jx.prototype={
$0(){var s,r=this.a
r.z.b.Z(0,null)
s=r.e
s.toString
r.au(s)
r.e=null},
$S:0}
A.jA.prototype={
$1(a){var s,r,q,p,o,n,m
A.af(a)
if(a==="New Game"){$.aB.ac().rx=!0
$.aB.ac().bv()
s=$.aB.ac()
r=$.eU()
q=t.t
p=t.ku
q=new A.jl(new A.j3(B.n,new A.jH(B.n)),A.c([new A.au(B.a8,r.J()<=0.6,1),new A.au(B.C,r.J()<=0.4,2),new A.au(B.C,r.J()<=0.4,3),new A.au(B.C,r.J()<=0.4,4),new A.au(B.B,r.J()<=0.2,5),new A.au(B.B,r.J()<=0.2,6),new A.au(B.B,r.J()<=0.2,7),new A.au(B.D,r.J()<=0.1,8),new A.au(B.D,r.J()<=0.1,9),new A.au(B.D,r.J()<=0.1,10),new A.au(B.T,!1,11)],t.lR),A.c([2,4,4,4,6,6,6,10,10,10,12],q),A.c([A.b8(r,10,25),A.b8(r,115,125),A.b8(r,115,125),A.b8(r,115,125),A.b8(r,125,135),A.b8(r,125,135),A.b8(r,125,135),A.b8(r,135,145),A.b8(r,135,145),A.b8(r,135,145),A.b8(r,170,200)],q),A.c([A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p),A.c([],p)],t.fu),A.c([0,0,0,0,0,0,0,0,0,0,0],q),A.ac(t.ee,t.gN))
q.eb()
q.e9()
p=A.mT()
r=A.c([],t.I)
o=A.pr(B.au,t.b,t.R)
n=A.c([],t.d)
n=q.cg(A.m5(null,new A.cd(20,20,0,0,0,0,0,new A.cS(r,o),p,A.c([],t.Q),n,new A.cT("J")),0,null,!1,!0,new A.P(0,4,1,1,null)))
m=new A.c5(n.a(),n.$ti.i("c5<1>"))
m.n()
m.n()
n=new A.kF(m.gp(m),m)
s.x1=n
n=s.ry=A.dm(n,"worldWrapper").a
p=n.e
n=n.d
if(!(n<p.length))return A.b(p,n)
n=A.lr(p[n])
p=s.ry
o=p.e
p=p.d
if(!(p<o.length))return A.b(o,p)
s.cX(n,o[p])
p=s.ry
o=p.a
n=p.e
p=p.d
if(!(p<n.length))return A.b(n,p)
s.cE(o,A.lr(n[p]))
p=s.gao()
n=s.ry
p.b=n.a.c
p=s.y
o=n.e
n=n.d
if(!(n<o.length))return A.b(o,n)
n=p.c=o[n]
p.d=!0
p=s.z
p.d=n
p.c=!0
p=s.f
p.d2(n.d)
p.cY()
s=s.ry
n=s.e
s=s.d
if(!(s<n.length))return A.b(n,s)
p.e=A.lr(n[s])
s=this.a
n=s.e
n.toString
s.au(n)
n=s.e1()
s.e=n
s.a4(n)}else if(a==="Quit"){s=t.e4.a(this.a.e).c
if(0>=s.length)return A.b(s,0)
s=t.fr.a(s[0])
if(s!=null){s=s.e
if(s!=null)s.sfo(0,"The Something of Something")}$.aB.ac().rx=!0
$.aB.ac().bv()}},
$S:38}
A.jz.prototype={
$0(){var s=this.a,r=s.e
r.toString
s.au(r)
s.e=null},
$S:0}
A.fx.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.fx&&b.a===this.a&&b.b===this.b},
gw(a){return A.cv(this.a,this.b,B.y,B.y)}}
A.f7.prototype={
sf2(a){var s,r=this
if(J.a_(a,r.e))return
r.au(r.f)
r.e=a
if(a!=null){s=A.ht("HP: "+a.a+"/"+a.b)
r.f=s
r.a4(s)}r.D()},
G(){var s,r,q,p,o,n,m=this
if(m.e==null)return A.c([],t.k)
s=B.c.u(m.r.b/24)+1
r=A.c([],t.k)
for(q=t.e.i("W.T"),p=0;p<s;++p){o=new A.P(11,13,-1,-1,null)
n=B.at.h(0,q.a(900))
n.toString
o.x=n
n=m.d
o.d=n.a+p*24
o.e=n.b
r.push(o)}q=m.f
q=q==null?null:q.G()
if(q!=null)B.a.L(r,q)
return r},
v(a,b){var s,r=this
r.d=a
r.D()
if(r.e==null)return B.P
s=r.f
if(s!=null)s.v(a.C(0,new A.O(24,0)),b)
return r.r=new A.aK(a,t.bC.a(r.a).x,36)}}
A.hc.prototype={
sdC(a,b){if(b===this.e)return
this.e=b
this.D()},
cI(a){var s,r,q,p=this.r
B.a.l(p,a)
s=this.f
r=A.ht(a)
r.sfp(0.5)
r=A.k9(4,r,4,4,4)
q=s.c
A.Z(q).c.a(r)
if(!!q.fixed$length)A.S(A.C("insert"))
q.splice(0,0,r)
r.a=s
s.D()
if(p.length>50){B.a.bM(p,0)
if(0>=q.length)return A.b(q,-1)
q.pop().a=null
s.D()}this.D()},
G(){if(!this.e)return A.c([],t.k)
var s=this.c
if(0>=s.length)return A.b(s,0)
return s[0].G()},
v(a,b){var s,r=this
r.d=a
r.D()
if(!r.e)return B.P
s=r.c
if(0>=s.length)return A.b(s,0)
return s[0].v(a,new A.bf(0,0,288,b.d))}}
A.bf.prototype={
gw(a){var s=this
return A.cv(s.a,s.b,s.c,s.d)},
q(a,b){var s=this
if(b==null)return!1
return b instanceof A.bf&&b.a==s.a&&b.c==s.c&&b.b==s.b&&b.d==s.d}}
A.fr.prototype={
eI(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.b,a4=a3.aa(a3.e),a5=a2.c,a6=a5.T("a_color",t.C)
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
a6[d]=a0}}a2.d=a3.e
a2.e=!1
a5.a0(a7,"a_color",a6)}}
A.hI.prototype={}
A.hK.prototype={}
A.ll.prototype={
$1(a){var s=this.a.a.c
if(!(a<s.length))return A.b(s,a)
return s[a]},
$S:16}
A.hl.prototype={
av(a){var s,r,q,p,o,n,m,l
for(s=this.b,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(!n.e){m=n.b
l=B.c.u(m.d/24)
if(l===q){m=B.c.u(m.e/36)
m=m===p}else m=!1}else m=!1
if(m)return n}return null}}
A.kF.prototype={}
A.jl.prototype={
cg(a){var s=this
return A.qE(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5
return function $async$cg(a6,a7){if(a6===1){o=a7
q=p}while(true)switch(q){case 0:a5=A.fD(B.O)
a5.e=9
n=A.fD(new A.eY(B.aE,50))
m=r.c.x
m.eV(a5,B.v)
B.a.l(m.a,n)
l=A.c([],t.fF)
k=new A.hK(r,l)
m=s.a,j=s.b,i=s.e,h=0
case 2:if(!(h<10)){q=4
break}g=A.qY(m.dj(j[h]))
B.a.l(l,g)
f=i[h]
for(e=f.length,d=g.b,c=0;c<f.length;f.length===e||(0,A.y)(f),++c){b=A.r6(f[c])
a0=A.rm(g,b)
a1=b.b
a2=a0.a
a3=a1.a
a4=a3==null
if(!a4)a3.a=!0
a1.d=a2*24
a2=a0.b
if(!a4)a3.a=!0
a1.e=a2*36
B.a.l(d,b)}q=5
return k
case 5:case 3:++h
q=2
break
case 4:return A.pS()
case 1:return A.pT(o)}}},t.l7)},
eb(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.d,r=t.ee,q=this.e,p=this.b,o=0;o<10;++o){n=q[o]
m=p[o]
l=$.or()
k=A.Z(l)
j=k.i("aP<1>")
i=A.jU(new A.aP(l,k.i("D(1)").a(new A.jm(m.a)),j),!0,j.i("j.E"))
for(h=0;h<s[o];){g=A.qn($.eU(),i,r)
B.a.l(n,g)
h+=g.d}}},
e9(){var s,r,q,p,o,n,m,l,k,j,i=this,h=new A.cd(1,1,1,0,0,0,0,new A.cS(A.c([],t.I),A.ac(t.b,t.R)),A.mT(),A.c([],t.Q),A.c([],t.d),new A.cT(""))
for(s=i.f,r=i.c,q=i.e,p=0;p<10;++p){o=q[p]
for(n=0,m=0;m<o.length;++m){l=i.ea(o[m])
k=l.a
for(j=l.x.b.h(0,B.v)!=null;k>0;){n+=(j?l.dc(h,$.eU(),!0):l.d6(h,$.eU(),!0)).c
k-=r[p]}}B.a.j(s,p,n)}},
ea(a){var s,r,q,p,o,n=this.r
if(n.h(0,a)!=null){n=n.h(0,a)
n.toString
return n}s=a.d
r=A.c([],t.I)
q=A.nf(B.au,t.b,t.R)
p=new A.cd(s,s,1,0,0,0,0,new A.cS(r,q),a.c,A.c([],t.Q),A.c([],t.d),new A.cT(a.a))
for(s=J.ao(a.r.$0());s.n();){o=s.gp(s)
switch(o.gc_()){case B.aw:q.h(0,B.F)
q.j(0,B.F,o)
break
case B.ax:q.h(0,B.v)
q.j(0,B.v,o)
break
case B.ay:q.h(0,B.G)
q.j(0,B.G,o)
break
default:B.a.l(r,o)}}n.j(0,a,p)
return p}}
A.jm.prototype={
$1(a){return B.a.M(t.ee.a(a).x,this.a)},
$S:40}
A.f9.prototype={
bY(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=this.a.b,a=b.a,a0=b.b,a1=new A.a5(a,a0,A.bh(a*a0,B.j,!1,t.ns),t.ba)
c.a=b
s=new A.jd(c)
for(r=0;r<a2;++r,a1=d){for(q=0;q<a;q=p)for(b=q-1,p=q+1,o=0;o<a0;o=j){n=s.$2(b,o)
m=s.$2(p,o)
if(typeof n!=="number")return n.C()
if(typeof m!=="number")return A.cH(m)
l=o-1
k=s.$2(q,l)
if(typeof k!=="number")return A.cH(k)
j=o+1
i=s.$2(q,j)
if(typeof i!=="number")return A.cH(i)
h=s.$2(b,l)
if(typeof h!=="number")return A.cH(h)
g=s.$2(p,j)
if(typeof g!=="number")return A.cH(g)
l=s.$2(p,l)
if(typeof l!=="number")return A.cH(l)
f=s.$2(b,j)
if(typeof f!=="number")return A.cH(f)
e=n+m+k+i+h+g+l+f
if(J.a_(s.$2(q,o),1))if(e<4)a1.K(0,B.j,q,o)
else a1.K(0,B.b,q,o)
else if(e>5)a1.K(0,B.b,q,o)
else a1.K(0,B.j,q,o)}d=c.a
c.a=a1}}}
A.jd.prototype={
$2(a,b){return J.a_(this.a.a.ab(0,a,b),B.b)?0:1},
$S:41}
A.jD.prototype={
bQ(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.cM.a(b0)
s=t.q
r=A.c([],s)
q=new A.jE(a9)
for(p=J.ao(a8.a);p.n();){o=p.gp(p)
n=q.$1(o)
if(typeof n!=="number")return n.di()
if(n>=1)B.a.l(r,o)}if(r.length===0)return
m=A.c([],t.oe)
for(p=r.length,o=a9.b,n=o.a,l=o.b,k=t.X,j=0;j<r.length;r.length===p||(0,A.y)(r),++j){i=r[j]
h=A.c([],k)
g=i.a
f=i.b
if(o.h(0,new A.i(g+1,f))===B.b)B.a.l(h,B.r)
if(o.h(0,new A.i(g+-1,f))===B.b)B.a.l(h,B.u)
if(o.h(0,new A.i(g,f+1))===B.b)B.a.l(h,B.t)
if(o.h(0,new A.i(g,f+-1))===B.b)B.a.l(h,B.q)
for(g=h.length,e=0;e<h.length;h.length===g||(0,A.y)(h),++e){d=h[e]
c=A.a9(i,d)
b=A.c([c],s)
a=c
while(!0){f=a.a
a0=f>=0
if(a0){a1=a.b
a1=a1>=0&&f<n&&a1<l}else a1=!1
if(!a1)break
if(o.h(0,a)!==B.b)break
a2=A.p8(d)
a1=a2.length
if(0>=a1)return A.b(a2,0)
if(o.h(0,A.a9(a,a2[0]))!==B.j){if(1>=a1)return A.b(a2,1)
a1=o.h(0,A.a9(a,a2[1]))===B.j}else a1=!0
if(a1)break
a=A.a9(a,d)
B.a.l(b,a)}if(a0){a0=a.b
f=a0>=0&&f<n&&a0<l}else f=!1
if(f&&o.h(0,a)===B.j&&b0.h(0,a)!==a8&&b0.h(0,a)!=null){a3=b0.h(0,a)
f=A.a9(a,A.p9(d))
if(0>=b.length)return A.b(b,-1)
b.pop()
a3.toString
B.a.l(m,new A.ei(c,f,b,a3))}}}s=m.length
if(s===0)return
a4=A.ac(t.v,t.fH)
for(p=b1.b,j=0;j<m.length;m.length===s||(0,A.y)(m),++j){a5=m[j]
n=a5.d
l=p.h(0,a8)
l.toString
if(B.a.M(l,n))continue
if(a4.aT(0,n)){a6=a4.h(0,n)
l=a6.a
k=a6.b
g=a5.a
f=a5.b
if(Math.sqrt(Math.pow(k.a-l.a,2)+Math.pow(k.b-l.b,2))>Math.sqrt(Math.pow(f.a-g.a,2)+Math.pow(f.b-g.b,2)))a4.j(0,n,a5)}else a4.j(0,n,a5)}for(s=a4.gbS(a4),s=s.gA(s),n=this.a,l=a9.e,k=a8.b;s.n();){g=s.gp(s)
f=g.d
a0=p.h(0,a8)
a0.toString
B.a.l(a0,f)
a0=p.h(0,f)
a0.toString
B.a.l(a0,a8)
for(g=g.c,a0=g.length,j=0;a1=g.length,j<a1;g.length===a0||(0,A.y)(g),++j)o.j(0,g[j],B.j)
a0=n.H(a1)
if(!(a0>=0&&a0<g.length))return A.b(g,a0)
a7=g[a0]
l.j(0,a7,B.R)
B.a.l(k,a7)
B.a.l(f.b,a7)}for(s=a4.gbS(a4),s=s.gA(s);s.n();)this.bQ(s.gp(s).d,a9,b0,b1)}}
A.jE.prototype={
$1(a){var s=this.a.b,r=s.h(0,a.C(0,new A.i(1,0)))===B.b?1:0
if(s.h(0,a.C(0,new A.i(-1,0)))===B.b)++r
if(s.h(0,a.C(0,new A.i(0,-1)))===B.b)++r
return s.h(0,a.C(0,new A.i(1,1)))===B.b?r+1:r},
$S:42}
A.ja.prototype={
dl(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
for(s=a7.b,r=s.a,q=s.b,p=a7.d,o=this.a,n=0;n<r;++n)for(m=0;m<q;++m){s.K(0,o.J()>0.45?B.j:B.b,n,m)
p.K(0,B.az,n,m)}new A.f9(a7).bY(3)
for(p=q-1,l=0;l<r;++l){s.K(0,B.b,l,0)
s.K(0,B.b,l,p)}for(o=r-1,k=0;k<q;++k){s.K(0,B.b,0,k)
s.K(0,B.b,o,k)}j=new A.jb(a7)
i=new A.jc(a7)
for(l=1;l<o;l=g)for(h=l-1,g=l+1,k=1;k<p;++k){if(!j.$2(l,k))continue
f=i.$2(g,k)
e=i.$2(h,k)
d=k+1
c=i.$2(l,d)
b=k-1
a=i.$2(l,b)
if(f&&e&&c&&a){s.K(0,B.b,l,k)
continue}if(j.$2(h,d)&&c&&e){s.K(0,B.b,l,k)
continue}if(j.$2(g,d)&&c&&f){s.K(0,B.b,l,k)
continue}if(j.$2(g,b)&&a&&f){s.K(0,B.b,l,k)
continue}if(j.$2(h,b)&&a&&e){s.K(0,B.b,l,k)
continue}}p=t.j
o=A.fL(p)
a0=new A.fv(a7,A.c([],t.do),o)
for(l=0;l<r;++l)for(k=0;k<q;++k){a1=new A.i(l,k)
if(o.M(0,a1)||s.h(0,a1)===B.b)continue
a0.cV(a1)}for(r=a0.b,q=r.length,o=a7.y,h=t.q,a2=0;a2<r.length;r.length===q||(0,A.y)(r),++a2){a3=r[a2]
if(a3.length<=6)for(d=B.a.gA(a3);d.n();)s.j(0,d.gp(d),B.b)
else B.a.l(o,new A.a3(a3,A.c([],h),A.c([],h),A.jq(a3)))}a4=A.ac(p,t.v)
for(r=o.length,q=a7.x,p=q.a,h=q.b,d=t.c,a2=0;b=o.length,a2<b;o.length===r||(0,A.y)(o),++a2){a3=o[a2]
B.a.l(p,a3)
h.j(0,a3,A.c([],d))
for(b=J.ao(a3.a);b.n();)a4.j(0,b.gp(b),a3)}if(0>=b)return A.b(o,0)
a5=o[0]
for(a6=0,a2=0;a2<o.length;o.length===b||(0,A.y)(o),++a2){a3=o[a2]
r=a3.a
p=J.az(r)
if(p.gm(r)>a6){a6=p.gm(r)
a5=a3}}this.bQ(a5,a7,a4,q)
for(r=q.d8(),q=r.length,a2=0;a2<r.length;r.length===q||(0,A.y)(r),++a2){a3=r[a2]
B.a.I(o,a3)
for(p=J.ao(a3.a);p.n();)s.j(0,p.gp(p),B.b)}A.oe(o,a7)}}
A.jb.prototype={
$2(a,b){return J.a_(this.a.b.ab(0,a,b),B.j)},
$S:12}
A.jc.prototype={
$2(a,b){return J.a_(this.a.b.ab(0,a,b),B.b)},
$S:12}
A.aT.prototype={}
A.hJ.prototype={}
A.aS.prototype={
U(a,b){this.$ti.c.a(a)
return this.a.U(a,b)+this.b.U(a,b)}}
A.d2.prototype={
U(a,b){this.$ti.c.a(a)
return Math.min(B.aa.U(a,b),this.b.U(a,b))}}
A.fZ.prototype={
U(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=b.b,r=a.a,q=a.b,p=b.e,o=p.a,p=p.b,n=-1;n<2;++n)for(m=r+n,l=m<o,k=-1;k<2;++k){j=q+k
if(!(m>=0&&j>=0&&l&&j<p))continue
if(s.h(0,new A.i(m,j))===B.b)return 1/0}return 0}}
A.fa.prototype={
U(a,b){var s,r,q,p
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.w)return 1/0
s=A.lU(a,B.q,b)
r=A.lU(a,B.t,b)
q=A.lU(a,B.r,b)
p=A.lU(a,B.u,b)
return Math.max(Math.max(Math.max(s,r),q),p)-Math.min(Math.min(Math.min(s,r),q),p)}}
A.eX.prototype={
U(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.w)return 1/0
if(A.cI(a,B.q,b)+A.cI(a,B.t,b)+A.cI(a,B.r,b)+A.cI(a,B.u,b)===1)return 1
return 1/0}}
A.fi.prototype={
U(a,b){if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.w)return 1/0
if(A.cI(a,B.q,b)+A.cI(a,B.t,b)+A.cI(a,B.r,b)+A.cI(a,B.u,b)===2)return 1
return 1/0}}
A.dx.prototype={
U(a,b){var s,r,q,p,o,n,m
if(b.b.h(0,a)===B.b||b.e.h(0,a)!==B.w)return 1/0
s=A.a9(a,B.q)
r=A.a9(a,B.t)
q=A.a9(a,B.r)
p=A.a9(a,B.u)
o=b.e
n=this.a
m=o.h(0,s)===n?1:0
if(o.h(0,r)===n)++m
if(o.h(0,q)===n)++m
return 1/(o.h(0,p)===n?m+1:m)}}
A.d1.prototype={
U(a,b){var s,r,q,p,o,n,m,l,k,j,i
for(s=b.e,r=a.a,q=a.b,p=this.a,o=s.a,n=s.b,m=-2;m<4;++m)for(l=r+m,k=l<o,j=-2;j<4;++j){i=q+j
if(!(l>=0&&i>=0&&k&&i<n))continue
if(s.h(0,new A.i(l,i))===p)return 1/0}return 0}}
A.cz.prototype={
d9(a,b){return this.c.$2(a,b)},
gbJ(){return this.a},
gbt(a){return this.b},
gbG(){return this.c}}
A.lM.prototype={
$2(a,b){b.e.j(0,a,B.cm)},
$S:1}
A.lF.prototype={
$2(a,b){b.e.j(0,a,B.fU)},
$S:1}
A.lJ.prototype={
$2(a,b){b.e.j(0,a,B.a7)},
$S:1}
A.lE.prototype={
$2(a,b){b.e.j(0,a,B.a7)},
$S:1}
A.lG.prototype={
$2(a,b){b.e.j(0,a,B.aB)},
$S:1}
A.lK.prototype={
$2(a,b){b.e.j(0,a,B.fV)
b.f.j(0,a,B.fb)},
$S:1}
A.lL.prototype={
$2(a,b){b.e.j(0,a,B.fT)},
$S:1}
A.lI.prototype={
$2(a,b){b.e.j(0,a,B.aA)},
$S:1}
A.lH.prototype={
$2(a,b){b.e.j(0,a,B.aA)},
$S:1}
A.lD.prototype={
$2(a,b){b.e.j(0,a,B.aC)},
$S:1}
A.b6.prototype={}
A.iE.prototype={
gbt(a){var s=this.a
return s.gbt(s)},
gbG(){return this.a.gbG()},
gbJ(){return this.a.gbJ()},
k(a){return"Unique("+this.a.k(0)+")"},
$icz:1,
d9(a,b){return this.gbG().$2(a,b)}}
A.lT.prototype={
$2(a,b){var s=t.n4
return B.c.R(s.a(a).b,s.a(b).b)},
$S:45}
A.lS.prototype={
$2(a,b){var s=t.v
s.a(a)
s.a(b)
return J.ap(a.a)-J.ap(b.a)},
$S:64}
A.dQ.prototype={}
A.j3.prototype={
dj(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=4000,a=new A.a5(100,40,A.bh(b,B.j,!1,t.ns),t.ba),a0=A.bh(b,0,!1,t.i),a1=A.bh(b,B.az,!1,t.dt),a2=new A.a5(100,40,A.bh(b,B.w,!1,t.dy),t.eN),a3=t.c,a4=new A.dQ(a5,a,new A.a5(100,40,a0,t.de),new A.a5(100,40,a1,t.f5),a2,new A.a5(100,40,A.bh(b,B.b5,!1,t.gM),t.eT),new A.a5(100,40,A.bh(b,null,!1,t.R),t.oQ),new A.jp(A.c([],a3),A.ac(t.v,t.mw)),A.c([],a3))
if(a5.b)this.eT(a4)
a0=a5.a
switch(a0.a){case 1:case 2:new A.ja(B.n).dl(a4)
break
case 3:case 4:new A.kl(A.fL(t.j),B.n).dq(a4)
break
case 6:case 0:case 5:new A.ks(B.n).dm(a4)
break}s=new Float32Array(4000)
new A.kb().dn(s,100,40)
r=new A.a5(100,40,A.mi(b,new A.j5(),t.W),t.U)
for(q=0;q<100;++q)for(a1=q!==0,a3=q!==99,p=0;p<40;++p)if(!a1||!a3||p===0||p===39){a.K(0,B.b,q,p)
a2.K(0,B.w,q,p)}a1=a4.y
this.b.dk(a1,a4,a5.c)
for(a3=a4.c,o=this.a,n=a4.d,m=a4.r,a0=a0!==B.cV,l=a4.f,q=0;q<100;++q)for(p=0;p<40;++p){k=J.a_(a.ab(0,q,p),B.j)
j=a.ab(0,q,p)
j.toString
i=new A.i(q,p)
o.J()
h=r.h(0,i)
g=n.h(0,i)
f=a2.h(0,i)
h.b=i
h.c=j
h.sfn(n.h(0,i))
j=p*100+q
if(!(j<4000))return A.b(s,j)
e=s[j]
d=m.ab(0,q,p)
if(J.a_(a3.h(0,i),1)){h.r=B.eY
h.c=B.j}else if(f!==B.w)switch(f.a){case 0:if(l.h(0,i)===B.b4)h.f=B.K
else h.f=B.z
break
case 2:h.f=B.M
break
case 3:break
case 4:h.f=B.a3
break
case 5:h.f=B.a2
break
case 1:h.f=B.L
break
case 6:h.f=B.a_
if(d!=null)B.a.l(h.e,d)
break
case 7:h.f=B.Y
break
case 8:h.f=B.H
break
case 9:h.f=B.X
break
case 10:h.f=B.a0
break
case 11:h.f=B.a1
break}else if(k&&e<0.42&&g!==B.a6&&a0)h.f=B.L
if(d!=null)B.a.l(h.e,d)}a=J.ao(B.a.eY(a1,new A.j6(),new A.j7(a4)).a)
while(!0){if(!a.n()){c=!1
break}a0=a.gp(a)
if(A.qf(a2.h(0,a0))){r.h(0,a0).f=B.I
c=!0
break}}if(!c)throw A.d(A.ai(""))
return new A.jX(r,a5)},
eT(a){var s,r,q=this.a,p=a.b,o=p.b,n=q.H(o-1)+1,m=n>o/2?-1:1,l=new A.j4(a)
for(p=p.a,s=n,r=0;r<p;++r){l.$1(new A.i(r,s))
l.$1(new A.i(r,s+1))
l.$1(new A.i(r,s-1))
s+=q.f8()?m:0}}}
A.j5.prototype={
$1(a){var s=A.c([],t.I)
return new A.c_(B.p,B.j,s)},
$S:16}
A.j6.prototype={
$1(a){return t.v.a(a).e},
$S:47}
A.j7.prototype={
$0(){return B.a.geX(this.a.y)},
$S:48}
A.j4.prototype={
$1(a){var s=this.a,r=s.b
if(r.cW(a)){r.j(0,a,B.j)
s.c.j(0,a,1)}},
$S:49}
A.ei.prototype={
gm(a){var s=this.a,r=this.b
return Math.sqrt(Math.pow(r.a-s.a,2)+Math.pow(r.b-s.b,2))}}
A.jp.prototype={
d8(){var s,r,q,p,o,n=A.c([],t.c)
for(s=this.a,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.y)(s),++p){o=s[p]
if(q.h(0,o).length===0)B.a.l(n,o)}return n}}
A.a3.prototype={
k(a){return"Room{"+J.ap(this.a)+"; "+this.d.k(0)+"}"}}
A.fv.prototype={
cV(a){var s,r,q,p,o,n,m,l,k=t.q,j=A.c([a],k),i=A.c([a],k)
for(k=this.a.b,s=k.a,r=k.b,q=this.c;p=j.length,p!==0;){if(0>=p)return A.b(j,-1)
o=j.pop()
if(q.M(0,o))continue
q.l(0,o)
B.a.l(i,o)
for(n=0;n<8;++n){m=A.a9(o,B.ar[n])
p=m.a
if(p>=0){l=m.b
p=l>=0&&p<s&&l<r}else p=!1
if(p&&!q.M(0,m)&&k.h(0,m)===B.j)B.a.l(j,m)}}B.a.l(this.b,i)}}
A.fE.prototype={
cH(a,b){var s,r=this
t.K.a(a)
if(a instanceof A.a0)s=B.aS
else if(a instanceof A.a2)s=B.aQ
else s=a instanceof A.av?B.aR:B.aT
B.a.l(r.a,a)
B.a.l(r.b,s)
B.a.l(r.c,b)
r.d+=b},
cG(a){return this.cH(a,10)},
fd(a){var s,r,q,p={},o=p.a=0,n=A.mi(this.c.length,new A.jM(p,this),t.i),m=a.J()
for(s=n.length,r=m>-1;o<s;++o){q=n[o]
if(r&&m<=q){s=this.a
if(!(o<s.length))return A.b(s,o)
return A.fD(s[o])}}throw A.d(A.ai(""))},
dz(a){var s,r,q=B.a.f4(this.a,a)
if(q===-1)return
s=this.c
if(!(q>=0&&q<s.length))return A.b(s,q)
r=s[q]
if(r===0)return
B.a.j(s,q,r-2)
this.d-=2},
dw(a){var s,r,q,p
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
$S:51}
A.k6.prototype={}
A.jH.prototype={
dk(a,b,c){var s,r,q
t.mw.a(a)
s=new A.fE(A.c([],t.hf),A.c([],t.lB),A.c([],t.t))
r=s.geL()
new A.aP(B.f7,t.ei.a(new A.jI()),t.kL).E(0,r)
new A.aP(B.f8,t.eU.a(new A.jJ()),t.eo).E(0,r)
new A.aP(B.f0,t.hZ.a(new A.jK()),t.au).E(0,r)
new A.aP(B.eZ,t.g9.a(new A.jL()),t.b1).E(0,r)
s.cG(B.aL)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.y)(a),++q)this.e4(s,a[q],b)},
e4(a,b,c){var s,r,q,p,o=c.r,n=c.e,m=b.a,l=this.a,k=J.az(m),j=b.c,i=0
while(!0){if(!(i<10)){s=B.p
break}r=j.length
if(r!==0){r=l.H(r)
if(!(r>=0&&r<j.length))return A.b(j,r)
s=j[r]}else s=k.h(m,l.H(k.gm(m)))
q=n.h(0,s)
if(o.h(0,s)==null)r=q===B.aB||q===B.w
else r=!1
if(r)break;++i}if(s.q(0,B.p))return
p=a.fd(l)
n=p.b
if(!J.a_(n,B.aL)){a.dz(n)
a.dw(p.c)
o.j(0,s,p)}}}
A.jI.prototype={
$1(a){return t.bB.a(a).b<=1000},
$S:52}
A.jJ.prototype={
$1(a){return t.li.a(a).f<=1000},
$S:53}
A.jK.prototype={
$1(a){return t.kB.a(a).r<=1000},
$S:54}
A.jL.prototype={
$1(a){return t.lE.a(a).c<=1000},
$S:55}
A.kb.prototype={
ag(a,b,c,d,e){var s,r,q=b&15,p=q<8?c:d
if(q<4)s=d
else s=q===12||q===14?c:e
r=(q&1)===0?p:-p
return r+((q&2)===0?s:-s)},
dn(a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
for(s=0;s<b0;++s)for(r=s*0.1,q=0;q<b1;++q){p=q*b0+s
o=q*0.1
n=B.c.ai(r)&255
m=B.c.ai(o)&255
l=B.c.ai(0.3)&255
k=r-Math.floor(r)
j=o-Math.floor(o)
i=0.3-Math.floor(0.3)
h=k*k*k*(k*(k*6-15)+10)
g=j*j*j*(j*(j*6-15)+10)
o=$.oC()
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
c=a8.ag(0,o[d],k,j,i)
if(!(a0<f))return A.b(o,a0)
a2=k-1
c+=h*(a8.ag(0,o[a0],a2,j,i)-c)
if(!(b<f))return A.b(o,b)
a3=j-1
a4=a8.ag(0,o[b],k,a3,i)
if(!(a1<f))return A.b(o,a1)
c+=g*(a4+h*(a8.ag(0,o[a1],a2,a3,i)-a4)-c)
a4=d+1
if(!(a4<f))return A.b(o,a4)
a5=i-1
a4=a8.ag(0,o[a4],k,j,a5)
a6=a0+1
if(!(a6<f))return A.b(o,a6)
a4+=h*(a8.ag(0,o[a6],a2,j,a5)-a4)
a6=b+1
if(!(a6<f))return A.b(o,a6)
a6=a8.ag(0,o[a6],k,a3,a5)
a7=a1+1
if(!(a7<f))return A.b(o,a7)
a5=a8.ag(0,o[a7],a2,a3,a5)
if(!(p<4000))return A.b(a9,p)
a9[p]=(c+i*i*i*(i*(i*6-15)+10)*(a4+g*(a6+h*(a5-a6)-a4)-c)+1)/2}}}
A.bV.prototype={
k(a){return"RuinOrientation."+this.b}}
A.eb.prototype={
k(a){return"RoomSizeKind."+this.b}}
A.kl.prototype={
dq(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.H(5)
if(!(a3>=0&&a3<5))return A.b(B.b_,a3)
s=B.b_[a3]
r=a1.bZ(B.fz)
q=a1.ee(s)
p=A.pa(a1.cR(a4,r,new A.i(B.c.u(Math.max(1,q.a-r.a/2)),B.c.u(Math.max(1,q.b-A.cw(r)/2)))))
a3=a4.y
B.a.l(a3,p)
for(o=t.q,n=0;n<2000;){m=new A.i(a2.H(98)+1,a2.H(38)+1)
l=[B.av,B.av,B.av,B.fy]
k=a2.H(4)
if(!(k>=0&&k<4))return A.b(l,k)
r=a1.bZ(l[k])
if(!a1.fj(a4,r,m)){l=a1.cR(a4,r,m)
B.a.l(a3,new A.a3(l,A.c([],o),A.c([],o),A.jq(l)))}else ++n}for(a2=a1.b,o=a4.d,l=a4.b,j=0;j<100;++j)for(i=0;i<40;++i){h=new A.i(j,i)
o.K(0,B.a6,j,i)
if(!a2.M(0,h))l.j(0,h,B.b)}g=A.ac(t.j,t.v)
for(a2=a3.length,k=a4.x,f=k.a,e=k.b,d=t.c,c=0;c<a3.length;a3.length===a2||(0,A.y)(a3),++c){b=a3[c]
B.a.l(f,b)
e.j(0,b,A.c([],d))
for(a=J.ao(b.a);a.n();)g.j(0,a.gp(a),b)}a1.bQ(p,a4,g,k)
for(a2=k.d8(),k=a2.length,c=0;c<a2.length;a2.length===k||(0,A.y)(a2),++c){b=a2[c]
B.a.I(a3,b)
for(f=J.ao(b.a);f.n();)l.j(0,f.gp(f),B.b)}A.oe(a3,a4)
for(a2=o.c,a0=0;a0<4000;++a0)B.a.j(a2,a0,B.a6)},
bZ(a){var s
switch(a.a){case 0:s=this.a
return new A.ea(s.H(5)+5,s.H(5)+5)
case 1:s=this.a
return new A.ea(s.H(10)+9,s.H(10)+9)
case 2:s=this.a
return new A.ea(s.H(10)+20,s.H(10)+20)}},
ee(a){switch(a.a){case 0:return new A.i(50,10)
case 1:return new A.i(50,30)
case 2:return new A.i(75,20)
case 3:return new A.i(25,20)
case 4:return new A.i(50,20)}},
cR(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a1.a,b=a1.b,a=A.c([],t.q)
for(s=this.b,r=a0.b,q=a2.a,p=a2.b,o=c-1,n=b-1,m=r.a,l=r.b,k=0;k<c;++k)for(j=k+q,i=k!==0,h=k!==o,g=0;g<b;++g){f=!i||!h||g===0||g===n
e=g+p
d=new A.i(j,e)
if(!(j>=0&&e>=0&&j<m&&e<l))continue
s.l(0,d)
r.j(0,d,f?B.b:B.j)
if(!f)B.a.l(a,d)}return a},
fj(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.a,g=b.b
for(s=a.b,r=c.a,q=c.b,p=s.a,o=s.b,n=this.b,m=0;m<h;++m)for(l=m+r,k=0;k<g;++k){j=k+q
i=new A.i(l,j)
if(!(l>=0&&j>=0&&l<p&&j<o))return!0
if(s.h(0,i)===B.b||n.M(0,i))return!0}return!1}}
A.ea.prototype={}
A.ks.prototype={
ec(a){var s,r,q=a.a.a===B.a8?B.az:B.fS
for(s=a.d.c,r=0;r<s.length;++r)B.a.j(s,r,q)},
dm(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
this.ec(b8)
for(s=this.a,r=b8.b,q=0;q<100;++q)for(p=0;p<40;++p)if(s.J()>0.6)r.j(0,new A.i(q,p),B.b)
new A.f9(b8).bY(10)
o=A.fL(t.j)
n=new A.fv(b8,A.c([],t.do),o)
for(m=r.a,l=r.b,k=0;k<m;++k)for(j=0;j<l;++j){i=new A.i(k,j)
if(o.M(0,i)||r.h(0,i)===B.b)continue
n.cV(i)}o=n.b
B.a.b1(o,new A.kt())
for(q=1;q<o.length;++q){h=o[q]
for(g=h.length,f=0;f<h.length;h.length===g||(0,A.y)(h),++f)r.j(0,h[f],B.b)}for(o=r.c,g=b8.e,e=g.c,q=0;q<o.length;++q)if(o[q]===B.b){B.a.j(e,q,B.fW)
B.a.j(o,q,B.j)}$label0$1:for(o=b8.y,e=t.q,d=b8.d,c=0;c<3;){b=s.H(3)+5
a=s.H(3)+5
q=s.H(100-b)
p=s.H(40-a)
for(a0=q-1,a1=q+b,a2=a1+1,a3=p-1,a4=p+a,a5=a4+1;a0<a2;++a0)for(a6=a0>=0,a7=a0<m,a8=a3;a8<a5;++a8){i=new A.i(a0,a8)
if(!(a6&&a8>=0&&a7&&a8<l))continue $label0$1
if(g.h(0,i)!==B.w||r.h(0,i)!==B.j)continue $label0$1}a9=A.c([],e)
b0=A.c([],e)
for(a2=a1-1,a5=a4-1,a0=q;a0<a1;++a0)for(a6=a0-q!==0,a7=a0!==a2,a3=p;a3<a4;++a3){i=new A.i(a0,a3)
if(!a6||!a7||a3-p===0||a3===a5){r.j(0,i,B.b)
B.a.l(a9,i)}else B.a.l(b0,i)
d.j(0,i,B.a6)}b1=new A.ku(b8)
B.a.bX(a9)
a1=a9.length
f=0
while(!0){if(!(f<a9.length)){b2=B.p
break}b3=a9[f]
b4=A.a9(b3,B.q)
b5=A.a9(b3,B.t)
b6=A.a9(b3,B.u)
b7=A.a9(b3,B.r)
if(A.Q(b1.$1(b4))&&A.Q(b1.$1(b5))){b2=b3
break}if(A.Q(b1.$1(b6))&&A.Q(b1.$1(b7))){b2=b3
break}a9.length===a1||(0,A.y)(a9);++f}a1=0===b2.a&&0===b2.b
if(a1)continue $label0$1
r.j(0,b2,B.j)
g.j(0,b2,B.R)
B.a.l(o,new A.a3(b0,A.c([],e),A.c([],e),A.jq(b0)));++c}for(s=o.length,f=0;f<o.length;o.length===s||(0,A.y)(o),++f)A.du(o[f],$.m4(),b8)}}
A.kt.prototype={
$2(a,b){var s=t.i8
s.a(a)
return J.ap(s.a(b))-J.ap(a)},
$S:56}
A.ku.prototype={
$1(a){var s=this.a
return s.b.h(0,a)===B.j&&s.e.h(0,a)===B.w},
$S:57}
A.kC.prototype={
dO(a){var s=t.jV.a(new A.kD(this))
t.Z.a(null)
A.ep(a,"keydown",s,!1,t.mT)
A.ep(a,"mousemove",t.b9.a(new A.kE(this)),!1,t.gD)}}
A.kD.prototype={
$1(a){var s,r,q,p,o
t.mT.a(a)
s=a.key
if(s==null)s=""
r=a.metaKey
q=a.ctrlKey
p=new A.aG(s,r,a.shiftKey,q)
s=this.a
r=s.a
r=r==null?null:r.c.aj(p)
if(r===!0){a.preventDefault()
return}o=$.oF().h(0,p)
if(o!=null){a.preventDefault()
s.b.l(0,o)
return}},
$S:58}
A.kE.prototype={
$1(a){var s,r
t.gD.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
this.a.c.l(0,A.c([s,r],t.n))},
$S:59}
A.aG.prototype={
q(a,b){var s=this
if(b==null)return!1
return b instanceof A.aG&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gw(a){var s=this
return A.cv(s.a,s.b,s.c,s.d)}}
A.a6.prototype={
k(a){return"InputCommand."+this.b}};(function aliases(){var s=J.a.prototype
s.dF=s.k
s=J.cm.prototype
s.dG=s.k
s=A.aF.prototype
s.dH=s.cZ
s.dI=s.d_
s.dK=s.d1
s.dJ=s.d0
s=A.aa.prototype
s.c0=s.aj})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_1u
s(J.t.prototype,"geJ","l",18)
r(A,"qD","pf",17)
r(A,"qT","pO",7)
r(A,"qU","pP",7)
r(A,"qV","pQ",7)
q(A,"o0","qN",0)
p(A,"qX","qH",10)
q(A,"qW","qG",0)
o(A.dk.prototype,"geR",1,0,null,["$1","$0"],["Z","aR"],30,0,0)
n(A.G.prototype,"gdZ","P",10)
p(A,"r0","ql",62)
r(A,"r1","qm",17)
var l
m(l=A.fz.prototype,"gf_","bB",29)
m(l,"gct","ej",14)
p(A,"rr","qM",63)
s(A.ee.prototype,"gfg","I",36)
o(A.fE.prototype,"geL",0,1,null,["$2","$1"],["cH","cG"],50,0,0)
p(A,"rx","r3",46)
r(A,"o9","rq",43)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.mf,J.a,J.dA,A.L,A.km,A.j,A.bz,A.U,A.as,A.cQ,A.ce,A.kx,A.k8,A.dN,A.eB,A.A,A.jR,A.dZ,A.kN,A.b4,A.i0,A.eI,A.eH,A.ek,A.dj,A.c5,A.dC,A.dg,A.cD,A.G,A.hM,A.cx,A.bD,A.eC,A.hN,A.el,A.hS,A.c4,A.ir,A.eM,A.eN,A.i7,A.es,A.l,A.ec,A.cg,A.ah,A.kO,A.h2,A.ef,A.hY,A.cX,A.Y,A.iu,A.ho,A.jg,A.mb,A.r,A.dO,A.kG,A.k7,A.i4,A.d9,A.j8,A.fB,A.cE,A.f,A.a5,A.O,A.cK,A.iU,A.iT,A.ae,A.ar,A.bd,A.bU,A.j9,A.fz,A.eY,A.aU,A.je,A.a0,A.k0,A.bP,A.a2,A.dz,A.av,A.aq,A.eV,A.cd,A.cN,A.cT,A.cS,A.fh,A.au,A.c_,A.fJ,A.fK,A.i,A.jX,A.k1,A.aw,A.jr,A.fp,A.a4,A.bN,A.J,A.jt,A.iy,A.kB,A.kg,A.d6,A.bg,A.bA,A.ka,A.fl,A.R,A.x,A.hO,A.iD,A.jF,A.kj,A.fY,A.hi,A.P,A.m,A.jZ,A.h9,A.l9,A.aK,A.aa,A.fM,A.fx,A.bf,A.hK,A.hl,A.kF,A.jl,A.f9,A.jD,A.aT,A.cz,A.b6,A.iE,A.dQ,A.j3,A.ei,A.jp,A.a3,A.fv,A.fE,A.k6,A.jH,A.kb,A.ea,A.ks,A.kC,A.aG])
q(J.a,[J.dU,J.dW,J.cm,J.t,J.cW,J.cl,A.fR,A.cu,A.e,A.iV,A.f5,A.bu,A.I,A.hR,A.b0,A.jj,A.bS,A.hT,A.dL,A.hV,A.jk,A.k,A.hZ,A.aD,A.jG,A.i2,A.jV,A.k_,A.i8,A.i9,A.aH,A.ia,A.ic,A.aJ,A.ih,A.ik,A.aL,A.il,A.aM,A.ip,A.aj,A.iw,A.kv,A.aN,A.iz,A.kw,A.kA,A.iH,A.iJ,A.iL,A.iN,A.iP,A.aV,A.i5,A.aY,A.ie,A.kc,A.is,A.aZ,A.iB,A.ba,A.f0,A.hP,A.f8,A.fy,A.h7,A.d5,A.bF,A.hB,A.hG])
q(J.cm,[J.h5,J.dc,J.bx])
r(J.jN,J.t)
q(J.cW,[J.dV,J.fF])
q(A.L,[A.cn,A.c0,A.fG,A.hD,A.he,A.dB,A.hX,A.h_,A.bs,A.hF,A.hC,A.bC,A.fg,A.fj])
q(A.j,[A.p,A.cp,A.aP,A.dT,A.bE,A.ld])
q(A.p,[A.b3,A.dY])
q(A.b3,[A.eg,A.e1])
r(A.dM,A.cp)
q(A.U,[A.e0,A.ej])
q(A.cQ,[A.dI,A.ab])
q(A.ce,[A.jC,A.fb,A.fc,A.hq,A.jP,A.lv,A.lx,A.kK,A.kJ,A.lf,A.ju,A.kU,A.l1,A.kq,A.l7,A.l3,A.jY,A.kP,A.lN,A.lO,A.j0,A.j1,A.lu,A.jw,A.jo,A.js,A.k4,A.iZ,A.iY,A.ke,A.kn,A.lA,A.ko,A.lz,A.kz,A.jy,A.jA,A.ll,A.jm,A.jE,A.j5,A.j6,A.j4,A.jM,A.jI,A.jJ,A.jK,A.jL,A.ku,A.kD,A.kE])
r(A.e6,A.c0)
q(A.hq,[A.hm,A.cO])
r(A.hL,A.dB)
r(A.e_,A.A)
r(A.aF,A.e_)
q(A.fc,[A.jO,A.lw,A.lg,A.lk,A.jv,A.kV,A.jS,A.jW,A.k2,A.k3,A.kk,A.kp,A.kI,A.j2,A.jd,A.jb,A.jc,A.lM,A.lF,A.lJ,A.lE,A.lG,A.lK,A.lL,A.lI,A.lH,A.lD,A.lT,A.lS,A.kt])
r(A.d_,A.cu)
q(A.d_,[A.eu,A.ew])
r(A.ev,A.eu)
r(A.ct,A.ev)
r(A.ex,A.ew)
r(A.e3,A.ex)
r(A.e2,A.ct)
q(A.e3,[A.fS,A.fT,A.fU,A.fV,A.fW,A.d0,A.e4])
r(A.eJ,A.hX)
q(A.fb,[A.kL,A.kM,A.lb,A.la,A.kQ,A.kY,A.kW,A.kS,A.kX,A.kR,A.l0,A.l_,A.kZ,A.kr,A.l8,A.l5,A.lj,A.l6,A.lX,A.lV,A.lW,A.lR,A.lP,A.lQ,A.m_,A.lY,A.lZ,A.m2,A.m0,A.m1,A.lo,A.lm,A.ln,A.k5,A.j_,A.kf,A.jB,A.jx,A.jz,A.j7])
r(A.eE,A.dT)
q(A.dg,[A.al,A.dk])
r(A.df,A.eC)
q(A.cx,[A.eD,A.en])
r(A.c2,A.eD)
r(A.dh,A.el)
r(A.cA,A.hS)
r(A.bk,A.c4)
r(A.ij,A.eM)
q(A.aF,[A.l4,A.eq])
r(A.ey,A.eN)
r(A.er,A.ey)
q(A.bs,[A.d4,A.fC])
q(A.e,[A.w,A.ft,A.ck,A.ax,A.ez,A.ay,A.ad,A.eF,A.hH,A.de,A.H,A.dF,A.f2])
q(A.w,[A.a7,A.bc,A.bv])
q(A.a7,[A.q,A.n])
q(A.q,[A.eZ,A.f_,A.f6,A.cb,A.fw,A.cV,A.cr,A.hf])
r(A.jf,A.bu)
r(A.cR,A.hR)
q(A.b0,[A.jh,A.ji])
r(A.hU,A.hT)
r(A.dK,A.hU)
r(A.hW,A.hV)
r(A.fm,A.hW)
r(A.aC,A.f5)
r(A.i_,A.hZ)
r(A.fs,A.i_)
r(A.i3,A.i2)
r(A.cj,A.i3)
r(A.dS,A.ck)
r(A.bj,A.k)
q(A.bj,[A.by,A.aI])
r(A.fN,A.i8)
r(A.fO,A.i9)
r(A.ib,A.ia)
r(A.fP,A.ib)
r(A.id,A.ic)
r(A.e5,A.id)
r(A.ii,A.ih)
r(A.h6,A.ii)
r(A.hd,A.ik)
r(A.eA,A.ez)
r(A.hj,A.eA)
r(A.im,A.il)
r(A.hk,A.im)
r(A.hn,A.ip)
r(A.ix,A.iw)
r(A.hv,A.ix)
r(A.eG,A.eF)
r(A.hw,A.eG)
r(A.iA,A.iz)
r(A.hy,A.iA)
r(A.dd,A.cr)
r(A.iI,A.iH)
r(A.hQ,A.iI)
r(A.em,A.dL)
r(A.iK,A.iJ)
r(A.i1,A.iK)
r(A.iM,A.iL)
r(A.et,A.iM)
r(A.iO,A.iN)
r(A.io,A.iO)
r(A.iQ,A.iP)
r(A.iv,A.iQ)
r(A.cB,A.en)
r(A.eo,A.bD)
r(A.kH,A.kG)
r(A.i6,A.i5)
r(A.fH,A.i6)
r(A.ig,A.ie)
r(A.h0,A.ig)
r(A.it,A.is)
r(A.hp,A.it)
r(A.iC,A.iB)
r(A.hz,A.iC)
q(A.H,[A.bt,A.cU])
r(A.dE,A.bt)
q(A.dF,[A.ca,A.h1])
r(A.f1,A.hP)
q(A.ar,[A.bY,A.bZ,A.cP,A.bW,A.ha,A.e9,A.hb,A.bM])
r(A.W,A.f)
q(A.W,[A.cq,A.cY])
q(A.kO,[A.ed,A.bw,A.fA,A.bQ,A.bR,A.b_,A.cf,A.dy,A.cM,A.h4,A.ch,A.da,A.fd,A.cy,A.ak,A.co,A.bb,A.jT,A.a1,A.cZ,A.cc,A.b1,A.db,A.bV,A.eb,A.a6])
q(A.aw,[A.fn,A.fo,A.fu,A.dX,A.hg,A.ee,A.hr,A.hu,A.hA,A.fr,A.hI])
q(A.a4,[A.fX,A.e8,A.aX,A.d8,A.fI,A.eh,A.dD,A.dJ,A.f3,A.hE,A.e7,A.h8])
q(A.aa,[A.hs,A.fe,A.f4,A.h3,A.dG,A.d7,A.cJ,A.dP,A.f7,A.hc])
q(A.jD,[A.ja,A.kl])
q(A.aT,[A.hJ,A.aS,A.d2])
q(A.hJ,[A.fZ,A.fa,A.eX,A.fi,A.dx,A.d1])
s(A.eu,A.l)
s(A.ev,A.as)
s(A.ew,A.l)
s(A.ex,A.as)
s(A.df,A.hN)
s(A.eN,A.ec)
s(A.hR,A.jg)
s(A.hT,A.l)
s(A.hU,A.r)
s(A.hV,A.l)
s(A.hW,A.r)
s(A.hZ,A.l)
s(A.i_,A.r)
s(A.i2,A.l)
s(A.i3,A.r)
s(A.i8,A.A)
s(A.i9,A.A)
s(A.ia,A.l)
s(A.ib,A.r)
s(A.ic,A.l)
s(A.id,A.r)
s(A.ih,A.l)
s(A.ii,A.r)
s(A.ik,A.A)
s(A.ez,A.l)
s(A.eA,A.r)
s(A.il,A.l)
s(A.im,A.r)
s(A.ip,A.A)
s(A.iw,A.l)
s(A.ix,A.r)
s(A.eF,A.l)
s(A.eG,A.r)
s(A.iz,A.l)
s(A.iA,A.r)
s(A.iH,A.l)
s(A.iI,A.r)
s(A.iJ,A.l)
s(A.iK,A.r)
s(A.iL,A.l)
s(A.iM,A.r)
s(A.iN,A.l)
s(A.iO,A.r)
s(A.iP,A.l)
s(A.iQ,A.r)
s(A.i5,A.l)
s(A.i6,A.r)
s(A.ie,A.l)
s(A.ig,A.r)
s(A.is,A.l)
s(A.it,A.r)
s(A.iB,A.l)
s(A.iC,A.r)
s(A.hP,A.A)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",M:"double",N:"num",u:"String",D:"bool",Y:"Null",o:"List"},mangledNames:{},types:["~()","~(i,dQ)","P()","bd()","o<aU>()","~(@)","~(u,@)","~(~())","Y()","~(k)","~(v,b5)","~(bN)","D(h,h)","Y(@)","~(ah)","Y(bF)","c_(h)","h(v?)","~(v?)","Y(~())","~(u,u)","Y(v,b5)","@(@,@)","~(ba)","~(bS)","D(aU)","D(v?)","@(@)","@(@,u)","at<~>(a6)","~([v?])","D(ma)","~(h,@)","Y(@,b5)","~(hx)","at<~>(k)","~(P)","G<@>(@)","~(u)","D(@)","D(bU)","h(h,h)","h(i)","~(N)","@(u)","h(b6,b6)","h(v?,v?)","D(a3)","a3()","~(i)","~(v[h])","M(h)","D(a0)","D(a2)","D(av)","D(aq)","h(o<i>,o<i>)","D(i)","~(by)","~(aI)","~(@,@)","~(v?,v?)","D(v?,v?)","h(P,P)","h(a3,a3)","~(o<M>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.q7(v.typeUniverse,JSON.parse('{"h5":"cm","dc":"cm","bx":"cm","rz":"k","rS":"k","rB":"H","rG":"bt","ry":"n","rT":"n","rA":"e","t3":"e","t6":"e","rD":"q","t7":"w","rR":"w","rU":"bv","t5":"aI","tk":"ad","rF":"bj","rE":"bc","t9":"bc","rW":"ck","rV":"cj","rH":"I","rJ":"aj","rC":"cr","t2":"ct","t1":"cu","dU":{"D":[]},"dW":{"Y":[]},"t":{"o":["1"],"p":["1"],"j":["1"]},"jN":{"t":["1"],"o":["1"],"p":["1"],"j":["1"]},"dA":{"U":["1"]},"cW":{"M":[],"N":[],"ag":["N"]},"dV":{"M":[],"h":[],"N":[],"ag":["N"]},"fF":{"M":[],"N":[],"ag":["N"]},"cl":{"u":[],"ag":["u"],"nk":[]},"cn":{"L":[]},"p":{"j":["1"]},"b3":{"p":["1"],"j":["1"]},"eg":{"b3":["1"],"p":["1"],"j":["1"],"j.E":"1","b3.E":"1"},"bz":{"U":["1"]},"cp":{"j":["2"],"j.E":"2"},"dM":{"cp":["1","2"],"p":["2"],"j":["2"],"j.E":"2"},"e0":{"U":["2"]},"e1":{"b3":["2"],"p":["2"],"j":["2"],"j.E":"2","b3.E":"2"},"aP":{"j":["1"],"j.E":"1"},"ej":{"U":["1"]},"cQ":{"X":["1","2"]},"dI":{"cQ":["1","2"],"X":["1","2"]},"ab":{"cQ":["1","2"],"X":["1","2"]},"e6":{"c0":[],"L":[]},"fG":{"L":[]},"hD":{"L":[]},"eB":{"b5":[]},"ce":{"ci":[]},"fb":{"ci":[]},"fc":{"ci":[]},"hq":{"ci":[]},"hm":{"ci":[]},"cO":{"ci":[]},"he":{"L":[]},"hL":{"L":[]},"aF":{"A":["1","2"],"jQ":["1","2"],"X":["1","2"],"A.K":"1","A.V":"2"},"dY":{"p":["1"],"j":["1"],"j.E":"1"},"dZ":{"U":["1"]},"fR":{"n2":[]},"cu":{"aO":[]},"d_":{"z":["1"],"aO":[]},"ct":{"l":["M"],"z":["M"],"o":["M"],"p":["M"],"aO":[],"j":["M"],"as":["M"],"l.E":"M"},"e3":{"l":["h"],"z":["h"],"o":["h"],"p":["h"],"aO":[],"j":["h"],"as":["h"]},"e2":{"l":["M"],"md":[],"z":["M"],"o":["M"],"p":["M"],"aO":[],"j":["M"],"as":["M"],"l.E":"M"},"fS":{"l":["h"],"z":["h"],"o":["h"],"p":["h"],"aO":[],"j":["h"],"as":["h"],"l.E":"h"},"fT":{"l":["h"],"z":["h"],"o":["h"],"p":["h"],"aO":[],"j":["h"],"as":["h"],"l.E":"h"},"fU":{"l":["h"],"z":["h"],"o":["h"],"p":["h"],"aO":[],"j":["h"],"as":["h"],"l.E":"h"},"fV":{"l":["h"],"z":["h"],"o":["h"],"p":["h"],"aO":[],"j":["h"],"as":["h"],"l.E":"h"},"fW":{"l":["h"],"z":["h"],"o":["h"],"p":["h"],"aO":[],"j":["h"],"as":["h"],"l.E":"h"},"d0":{"l":["h"],"pK":[],"z":["h"],"o":["h"],"p":["h"],"aO":[],"j":["h"],"as":["h"],"l.E":"h"},"e4":{"l":["h"],"pL":[],"z":["h"],"o":["h"],"p":["h"],"aO":[],"j":["h"],"as":["h"],"l.E":"h"},"eI":{"nA":[]},"hX":{"L":[]},"eJ":{"c0":[],"L":[]},"G":{"at":["1"]},"eH":{"hx":[]},"ek":{"ff":["1"]},"c5":{"U":["1"]},"eE":{"j":["1"],"j.E":"1"},"dC":{"L":[]},"dg":{"ff":["1"]},"al":{"dg":["1"],"ff":["1"]},"dk":{"dg":["1"],"ff":["1"]},"eC":{"nv":["1"],"nH":["1"],"cC":["1"]},"df":{"hN":["1"],"eC":["1"],"nv":["1"],"nH":["1"],"cC":["1"]},"c2":{"eD":["1"],"cx":["1"]},"dh":{"el":["1"],"bD":["1"],"cC":["1"]},"el":{"bD":["1"],"cC":["1"]},"eD":{"cx":["1"]},"cA":{"hS":["1"]},"bk":{"c4":["1"]},"eM":{"nC":[]},"ij":{"eM":[],"nC":[]},"l4":{"aF":["1","2"],"A":["1","2"],"jQ":["1","2"],"X":["1","2"],"A.K":"1","A.V":"2"},"eq":{"aF":["1","2"],"A":["1","2"],"jQ":["1","2"],"X":["1","2"],"A.K":"1","A.V":"2"},"er":{"ec":["1"],"nr":["1"],"p":["1"],"j":["1"]},"es":{"U":["1"]},"dT":{"j":["1"]},"e_":{"A":["1","2"],"X":["1","2"]},"A":{"X":["1","2"]},"ey":{"ec":["1"],"nr":["1"],"p":["1"],"j":["1"]},"cg":{"ag":["cg"]},"M":{"N":[],"ag":["N"]},"ah":{"ag":["ah"]},"h":{"N":[],"ag":["N"]},"o":{"p":["1"],"j":["1"]},"N":{"ag":["N"]},"u":{"ag":["u"],"nk":[]},"dB":{"L":[]},"c0":{"L":[]},"h_":{"L":[]},"bs":{"L":[]},"d4":{"L":[]},"fC":{"L":[]},"hF":{"L":[]},"hC":{"L":[]},"bC":{"L":[]},"fg":{"L":[]},"h2":{"L":[]},"ef":{"L":[]},"fj":{"L":[]},"iu":{"b5":[]},"by":{"k":[]},"aI":{"k":[]},"w":{"e":[]},"ax":{"e":[]},"ay":{"e":[]},"ad":{"e":[]},"q":{"a7":[],"w":[],"e":[]},"eZ":{"a7":[],"w":[],"e":[]},"f_":{"a7":[],"w":[],"e":[]},"f6":{"a7":[],"w":[],"e":[]},"cb":{"a7":[],"w":[],"e":[]},"bc":{"w":[],"e":[]},"bv":{"w":[],"e":[]},"dK":{"l":["bi<N>"],"r":["bi<N>"],"o":["bi<N>"],"z":["bi<N>"],"p":["bi<N>"],"j":["bi<N>"],"r.E":"bi<N>","l.E":"bi<N>"},"dL":{"bi":["N"]},"fm":{"l":["u"],"r":["u"],"o":["u"],"z":["u"],"p":["u"],"j":["u"],"r.E":"u","l.E":"u"},"a7":{"w":[],"e":[]},"fs":{"l":["aC"],"r":["aC"],"o":["aC"],"z":["aC"],"p":["aC"],"j":["aC"],"r.E":"aC","l.E":"aC"},"ft":{"e":[]},"fw":{"a7":[],"w":[],"e":[]},"cj":{"l":["w"],"r":["w"],"o":["w"],"z":["w"],"p":["w"],"j":["w"],"r.E":"w","l.E":"w"},"dS":{"e":[]},"ck":{"e":[]},"cV":{"a7":[],"w":[],"e":[]},"cr":{"a7":[],"w":[],"e":[]},"fN":{"A":["u","@"],"X":["u","@"],"A.K":"u","A.V":"@"},"fO":{"A":["u","@"],"X":["u","@"],"A.K":"u","A.V":"@"},"fP":{"l":["aH"],"r":["aH"],"o":["aH"],"z":["aH"],"p":["aH"],"j":["aH"],"r.E":"aH","l.E":"aH"},"e5":{"l":["w"],"r":["w"],"o":["w"],"z":["w"],"p":["w"],"j":["w"],"r.E":"w","l.E":"w"},"h6":{"l":["aJ"],"r":["aJ"],"o":["aJ"],"z":["aJ"],"p":["aJ"],"j":["aJ"],"r.E":"aJ","l.E":"aJ"},"hd":{"A":["u","@"],"X":["u","@"],"A.K":"u","A.V":"@"},"hf":{"a7":[],"w":[],"e":[]},"hj":{"l":["ax"],"r":["ax"],"o":["ax"],"z":["ax"],"e":[],"p":["ax"],"j":["ax"],"r.E":"ax","l.E":"ax"},"hk":{"l":["aL"],"r":["aL"],"o":["aL"],"z":["aL"],"p":["aL"],"j":["aL"],"r.E":"aL","l.E":"aL"},"hn":{"A":["u","u"],"X":["u","u"],"A.K":"u","A.V":"u"},"hv":{"l":["ad"],"r":["ad"],"o":["ad"],"z":["ad"],"p":["ad"],"j":["ad"],"r.E":"ad","l.E":"ad"},"hw":{"l":["ay"],"r":["ay"],"o":["ay"],"z":["ay"],"e":[],"p":["ay"],"j":["ay"],"r.E":"ay","l.E":"ay"},"hy":{"l":["aN"],"r":["aN"],"o":["aN"],"z":["aN"],"p":["aN"],"j":["aN"],"r.E":"aN","l.E":"aN"},"bj":{"k":[]},"dd":{"a7":[],"w":[],"e":[]},"hH":{"e":[]},"de":{"e":[]},"hQ":{"l":["I"],"r":["I"],"o":["I"],"z":["I"],"p":["I"],"j":["I"],"r.E":"I","l.E":"I"},"em":{"bi":["N"]},"i1":{"l":["aD?"],"r":["aD?"],"o":["aD?"],"z":["aD?"],"p":["aD?"],"j":["aD?"],"r.E":"aD?","l.E":"aD?"},"et":{"l":["w"],"r":["w"],"o":["w"],"z":["w"],"p":["w"],"j":["w"],"r.E":"w","l.E":"w"},"io":{"l":["aM"],"r":["aM"],"o":["aM"],"z":["aM"],"p":["aM"],"j":["aM"],"r.E":"aM","l.E":"aM"},"iv":{"l":["aj"],"r":["aj"],"o":["aj"],"z":["aj"],"p":["aj"],"j":["aj"],"r.E":"aj","l.E":"aj"},"en":{"cx":["1"]},"cB":{"en":["1"],"cx":["1"]},"eo":{"bD":["1"]},"dO":{"U":["1"]},"i4":{"nl":[]},"fH":{"l":["aV"],"r":["aV"],"o":["aV"],"p":["aV"],"j":["aV"],"r.E":"aV","l.E":"aV"},"h0":{"l":["aY"],"r":["aY"],"o":["aY"],"p":["aY"],"j":["aY"],"r.E":"aY","l.E":"aY"},"hp":{"l":["u"],"r":["u"],"o":["u"],"p":["u"],"j":["u"],"r.E":"u","l.E":"u"},"n":{"a7":[],"w":[],"e":[]},"hz":{"l":["aZ"],"r":["aZ"],"o":["aZ"],"p":["aZ"],"j":["aZ"],"r.E":"aZ","l.E":"aZ"},"dE":{"H":[],"e":[]},"ca":{"e":[]},"H":{"e":[]},"f1":{"A":["u","@"],"X":["u","@"],"A.K":"u","A.V":"@"},"bt":{"H":[],"e":[]},"f2":{"e":[]},"dF":{"e":[]},"cU":{"H":[],"e":[]},"h1":{"e":[]},"bE":{"n3":[],"j":["u"],"j.E":"u"},"d9":{"U":["u"]},"ld":{"j":["1"],"j.E":"1"},"cE":{"U":["1"]},"cK":{"dR":[]},"bd":{"ar":[]},"bY":{"ar":[]},"bZ":{"ar":[]},"cP":{"ar":[]},"bW":{"ar":[]},"ha":{"ar":[]},"e9":{"ar":[]},"hb":{"ar":[]},"bM":{"ar":[]},"W":{"f":[]},"cq":{"W":["h"],"f":[],"W.T":"h"},"cY":{"W":["h"],"f":[],"W.T":"h"},"c_":{"dR":[]},"fK":{"dR":[]},"fn":{"aw":[]},"fo":{"aw":[]},"fX":{"a4":[]},"e8":{"a4":[]},"aX":{"a4":[]},"d8":{"a4":[]},"fI":{"a4":[]},"eh":{"a4":[]},"dD":{"a4":[]},"dJ":{"a4":[]},"f3":{"a4":[]},"hE":{"a4":[]},"e7":{"a4":[]},"h8":{"a4":[]},"fu":{"aw":[]},"dX":{"aw":[]},"bA":{"ag":["bA"]},"hg":{"aw":[]},"hi":{"pG":[]},"ee":{"aw":[]},"hr":{"aw":[]},"hu":{"aw":[]},"hA":{"aw":[],"pp":[]},"hs":{"aa":[]},"fe":{"aa":[]},"f4":{"aa":[]},"h3":{"aa":[]},"dG":{"aa":[]},"d7":{"aa":[]},"cJ":{"aa":[]},"dP":{"aa":[]},"f7":{"aa":[]},"hc":{"aa":[]},"fr":{"aw":[]},"hI":{"aw":[]},"hJ":{"aT":["i"]},"aS":{"aT":["1"]},"d2":{"aT":["1"]},"fZ":{"aT":["i"]},"fa":{"aT":["i"]},"eX":{"aT":["i"]},"fi":{"aT":["i"]},"dx":{"aT":["i"]},"d1":{"aT":["i"]},"iE":{"cz":[]},"md":{"o":["M"],"p":["M"],"j":["M"],"aO":[]}}'))
A.q6(v.typeUniverse,JSON.parse('{"p":1,"d_":1,"dT":1,"e_":2,"ey":1,"eN":1,"cJ":1}'))
var u={S:" 0\x10000\xa0\x80\x10@P`p`p\xb1 0\x10000\xa0\x80\x10@P`p`p\xb0 0\x10000\xa0\x80\x11@P`p`p\xb0 1\x10011\xa0\x80\x10@P`p`p\xb0 1\x10111\xa1\x81\x10AQaqaq\xb0 1\x10011\xa0\x80\x10@Qapaq\xb0 1\x10011\xa0\x80\x10@Paq`p\xb0 1\x10011\xa0\x80\x10@P`q`p\xb0 \x91\x100\x811\xa0\x80\x10@P`p`p\xb0 1\x10011\xa0\x81\x10@P`p`p\xb0 1\x100111\x80\x10@P`p`p\xb0!1\x11111\xa1\x81\x11AQaqaq\xb1",M:'""""""""""""""""DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""3333s3#7333333339433333333333333CDDDDDDDDDDDDDDDDDDDDDDC433DDDDD4DDDDDDDDDDDDDDDDDD3CU33333333333333333333333333334T5333333333333333333333333333CCD3D33CD533333333333333333333333TEDTET53U5UE3333C33333333333333333333333333333CETUTDT5333333333333333333333333SUUUUUEUDDDDD43333433333333333333333333ET533E3333SDD3U3U4333343333C4333333333333CSD33343333333433333333333333333SUUUEDDDTE4333SDDSUSU\x94333343333C43333333333333333s333333333337333333333333wwwww73sw33sww7swwwwwss33373733s33333w33333\xa3\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xba\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xbb\xcb\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xec\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xde\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee\xee>33333\xb3\xbb\xbb\xbb\xbb\xbb\xbb\xbb;3\xc3\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc\xcc334343C33333333333SET333333333333333EDTETD433333333CD33333333333333CD33333CDD4333333333333333333333333CDTDDDCTE43C4CD3C333333333333333D3C33333\x99\x99\x9933333DDDDD42333333333333333333CDDD4333333333333333333333333DDDD433334333C53333333333333333333333C33TEDCSUUU433333333S533333333333333333333333333333CD4DDDDD3D5333333333333333333333333333CSEUCUSE4333D33333C43333333333333CDDD9DDD3DCD433333333CDCDDDDDDEDDD33433C3E433#""""\x82" """"""""2333333333333333CDUUDU53SEUUUD43SDD3U3U4333C43333C43333333333333SE43CD33333333DD33333CDDDDDDDDDD3333333343333333B!233333333333#"""333333s3CD533333333333333333333333333CESEU3333333333333333333DDDD433333CD2333333333333333333333333""""23333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDD33333333333333333333333333333CDDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333SUDDDDUDT43333333333343333333333333333333333333333333333333333TEDDTTEETD333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CUDD3UUDE43333333333333D33333333333333333333333333333333333333333UEDDDTEE43333333333333333333333333333333333333333333333333333CEUDDDE33333333333333333333333333333333333333333333333333CDUDDEDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333D#"2333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CSUUUUUUUUUUUUUUUUUUUUUUUUUUU333CD4333333333333333333333333333333333333333333333333333333""""""33EDDCTSE3333333333D33333333333DDDDDDD\x94DDDDDDDDDDDDDDDDDDDDDDDDDDDDDCDDDDDDDD3DDD4DCDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CD4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDDDD333333333333333333333333333333333333333333333333333333333333333333333333333333333333333s73333s33333333333""""""""3333333373s333333333333333333333333333333CTDDDTU5D4DD333C433333D33333333333333DU433333333333333333333DDDUDUD3333S3333333333333333334333333333333s733333s33333333333CD4DDDD4D4DD4333333333sww73333333w3333333333sw3333s33333337333333sw333333333s733333333333333333UTEUS433333333C433333333333333C433333333333334443SUE4333333333333CDDDDDDDD4333333DDDDDT533333\xa3\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa\xaa3SDDDDUUT5DDD43333C43333333333333333C33333333333EEDDDCC3DDDDUUUDDDDD3T5333333333333333333333333333CSDDD433E533333333333333333333333333DDDDDDD4333333333333333333333333333CD53333333333333333333333UEDTE4\x933333333\x933333333333333333333333333D433333333333333333CDDEDDD43333333S5333333333333333333333C333333D533333333333333333333333SUDDDDT5\x9933CD433333333333333333333333333333333333333333333333UEDUTD33343333333333333333333333333333333333333333333333333333333333333333333333333333333CUEDDD43333333333DU333333333333333333333333333C4TTU5S5SU3333C33333U3DDD43DD4333333333333333333333333333333333333333333333333333333333333333333333DDDDDDD533333333333333333333333DDDTTU43333333333333333333333333333DDD733333s373ss33w7733333ww733333333333ss33333333333333333333333333333ww3333333333333333333333333333wwww33333www33333333333333333333wwww333333333333333wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww333333wwwwwwwwwwwwwwwwwwwwwww7wwwwwswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww733333333333333333333333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333333333333333333333333333333333333333333333333333333333swwwww7333333333333333333333333333333333333333333wwwwwwwwwwwwwwwwwwwww7wwwwwwswwwwwwwwwwwwwwwwwwwww73333swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww7333333w7333333333333333733333333333333333333333333333sww733333s7333333s3wwwww333333333wwwwwwwwwwwwwwwwwwwwwwwwwwwwgffffffffffff6wwwwwww73333s33333333337swwwwsw73333wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwDDDDDDDDDDDDDDDDDDDDDDDD33333333DDDDDDDD33333333DDDDDDDDDDDDDDDD43333333DC44333333333333333333333333333SUDDDDTD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333UED4CTUE3S33333333333333DDDDD33333333333333333333DDD\x95DD333343333DDDUD43333333333333333333\x93\x99\x99IDDDDDDE4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDDDDDDDDDDDDDDDDDDDDDDDDDD33DDDDDDDDDDDDDDDDDDDDDDDDD33334333333C33333333333DD4DDDDDDD43333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333TD43EDD""""DDDD3DDD433333333333333CD43333333333333333333333333333333333333333333333333333333333333333333333333CD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333C33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333433333333333333333333333333333333333333333333333333333333333333333333333333DD4333333333333333333333333333333333333333333333333333333333333333333EDDDCDDT43333333333333333333333333333333333333333CDDDDDDDDDD4EDDDETD3333333333333333333333333333333333333333333333333333333333333DDD3CC4DDD\x94433333333333333333333333333333333SUUC4UT433333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333DU333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDDD333333333333333333333333333333333333333333333333333333CDDD3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333CDC433DD33333333333333333333D43C3333333333333333333333333333333333333333333333333333333333333333333333333333333333C4333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333334EDDDD3\x03',d:"#version 300 es\nin vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",Z:"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 position = (((a_position - u_offset) / u_resolution * 2.0) - 1.0) * vec2(1.0, -1.0);\n  gl_Position = vec4(position, 0, 1);\n  v_color = a_color;\n}\n",v:"#version 300 es\nin vec2 a_position;\nout vec4 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0, 1);\n}\n",I:"#version 300 es\nprecision mediump float;\n\nin vec2 v_texcoord;\nin vec4 v_color;\nin vec4 v_bg_color;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_color == vec4(0, 0, 0, 0)) {\n    outColor = texture(u_texture, v_texcoord);\n  } else {\n    outColor = texture(u_texture, v_texcoord) * v_color;\n  }\n  if (v_bg_color != vec4(0, 0, 0, 0)) {\n    outColor = outColor + v_bg_color;\n  }\n}\n",t:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n   outColor = v_color;\n}\n",_:"#version 300 es\nprecision mediump float;\n\nin vec4 v_color;\n\nuniform vec2 u_source_position;\nuniform vec4 u_source_color;\nuniform float u_time;\nuniform float u_source_strength;\nuniform sampler2D u_visible_texture;\nuniform sampler2D u_player_visible_texture;\n\nout vec4 outColor;\n\nvoid main() {\n    vec2 tex_position = gl_FragCoord.xy / vec2(100, 40);\n    vec4 tex_result = texture(u_visible_texture, tex_position);\n    vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n    if (tex_result.a > 0.0 || player_tex_result.a > 0.0) {\n      discard;\n      return;\n    }\n\n    float source_strength = u_source_strength + sin(u_time * 2.0);\n    float dist = distance(gl_FragCoord.xy, (u_source_position + vec2(0.5, 0.5))) / 2.0;\n    if (dist > source_strength) {\n      discard;\n      return;\n    }\n    float scale = 1.0 - smoothstep(0.0, source_strength, dist);\n    outColor = vec4(u_source_color.rgb, scale);\n}\n",L:"#version 300 es\nprecision mediump float;\n\nuniform sampler2D u_light_texture;\nuniform sampler2D u_game_world_texture;\nuniform sampler2D u_player_visible_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_block_size;\nuniform vec2 u_offset;\n\nout vec4 outColor;\n\nfloat softlight(float b, float a) {\n  if (b < 0.5) {\n    return 2.0 * a * b + a * a * (1.0 - 2.0 * b);\n  }\n  return sqrt(a) * (2.0 * b - 1.0) + (2.0 * a) * (1.0 - b);\n}\n\nconst int nearest_x = 24;\nconst int nearest_y = 36;\n\nfloat snapTo(float raw_position, float snap) {\n  int d = int(raw_position);\n  int rem = int(d) % int(snap);\n  return float(d - rem) + snap / 2.0;\n}\n\nconst vec3 ambient_color = vec3(0.1, 0.1, 0.1);\n\nvoid main() {\n  // back textures is already in viewport relative coordinates.\n  vec2 d = gl_FragCoord.xy / u_resolution;\n  vec4 back = texture(u_game_world_texture, d);\n\n  // visibility texture is in total screen coordinates.\n  vec2 relative_postion = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(snapTo(relative_postion.x, u_block_size.x), snapTo(u_resolution.y - relative_postion.y, u_block_size.y));\n  vec2 tex_position = snapped_position / (u_block_size * vec2(100, 40));\n  vec4 front = texture(u_light_texture, tex_position);\n  vec4 player_tex_result = texture(u_player_visible_texture, tex_position);\n\n  if (player_tex_result.a > 0.0) {\n    float gray = dot(back.rgb, vec3(0.299, 0.587, 0.114));\n    outColor = vec4(vec3(gray), 1.0);\n    return;\n  }\n  // front.xyz = max(ambient_color, front.xyz);\n  outColor = vec4(softlight(front.x, back.x), softlight(front.y, back.y), softlight(front.z, back.z), 1.0);\n}\n",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",s:"\u0e3b\u1cdb\u05d0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b \u389c\u102b\u102b\u102b\u102b\u489c\u102b\u102b\u102b\u0620\u392b\u0c26\u0efa\u102b\u0dcb\u0601\u3e7e\u228f\u0c77\u24d3\u40b2\u102b\u1d51\u0f6f\u2681\u0698\u0851\u0d63\u0be6\u0d63\u1d2a\u06d5\u0e9b\u0771\u075c\u2b98\u23fe\u2707\u0da1\u2a52\u08eb\u0d13\u0ce3\u2712\u0c62\u4d9d\u0b97\u25cb\u2b21\u0659\u42c5\u0baa\u0ec5\u088d\u102b\u09b9\u09d9\u09f9\u0a21\u102b\u102b\u102b\u102b\u102b\u40ae\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0b5f\u25b1\u23c1\u07f5\u0fe2\u102b\u269e\u102b\u0e5b\u102b\u102b\u102b\u2427\u26c9\u275a\u102b\u2b5c\u0fad\u0b31\u0789\u08ab\u102b\u102b\u0dfb\u102b\u102b\u102b\u1d74\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0f2f\u2372\u102b\u38ec\u090f\u102b\u2501\u102b\u102b\u102b\u102b\u102b\u24a9\u102b\u35c8\u0939\u102b\u102b\u102b\u23b5\u102b\u102b\u2345\u2c27\u3457\u2d9d\u3491\u2d9d\u0979\u2be5\u252c\u102b\u102b\u102b\u102b\u102b\u233b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2566\u23a2\u102b\u102b\u102b\u102b\u102b\u409c\u102b\u428c\u102b\u3db9\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2bac\u102b\u16c9\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u2c0e\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u0d24\u4c95\u4c83\u102b\u102b\u102b\u102b\u0b0c\u102b\u07bb\u2609\u0c43\u2641\u071f\u2483\u2443\u0cb1\u06e1\u0811\u102b\u102b\u102b\u2583\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a79\u0a65\u0a6d\u0a75\u0a61\u0a69\u0a71\u0a95\u0ace\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u01f0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u42ad\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u38bc\u102b\u102b\u1cdb\u102b\u102b\u4c95\u1cea\u40ce\u102b\u49ce\u1f6f\u2752\u1506\u393f\u449f\u102b\u102b\u102b\u102b\u102b\u0ff2\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u113b\u191a\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u1869\u102b\u102b\u102b\u102b\u3e89\u102b\u3bd9\u102b\u1da7\u102b\u47cf\u102b\u34a1\u305d\u2c56\u2d9d\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\x00\u01f0\u01f0\u01f0\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b\u102b"}
var t=(function rtii(){var s=A.aR
return{bm:s("@<~>"),mm:s("eY"),A:s("aS<i>"),bB:s("a0"),lE:s("aq"),u:s("dC"),bD:s("ba"),lo:s("n2"),jQ:s("cb"),gN:s("cd"),m1:s("n3"),n6:s("ag<v?>"),d5:s("I"),cs:s("cg"),dA:s("bv"),jW:s("bS"),J:s("ah"),ox:s("ma"),gt:s("p<@>"),v:s("a3"),O:s("fp"),b:s("ch"),fz:s("L"),L:s("k"),fq:s("J"),et:s("aC"),C:s("md"),gY:s("ci"),h:s("at<@>"),bC:s("dP"),m:s("ab<h,f>"),eT:s("a5<co>"),f5:s("a5<cy>"),eN:s("a5<ak>"),U:s("a5<c_>"),ba:s("a5<da>"),de:s("a5<M>"),oQ:s("a5<aU?>"),hQ:s("cV"),h8:s("a6"),lZ:s("aU"),e7:s("j<@>"),c7:s("t<cK>"),if:s("t<cM>"),G:s("t<R>"),a:s("t<ar>"),V:s("t<bb>"),fy:s("t<bN>"),Q:s("t<fh>"),X:s("t<b1>"),pl:s("t<ma>"),f:s("t<aa>"),c:s("t<a3>"),w:s("t<a4>"),iw:s("t<at<~>>"),ow:s("t<dR>"),ge:s("t<a6>"),Y:s("t<bg>"),I:s("t<aU>"),lB:s("t<bw>"),fu:s("t<o<bU>>"),do:s("t<o<i>>"),fC:s("t<o<h>>"),lR:s("t<au>"),ku:s("t<bU>"),hf:s("t<v>"),d:s("t<h4>"),q:s("t<i>"),ff:s("t<h9>"),hd:s("t<d6>"),k:s("t<P>"),fF:s("t<hl>"),s:s("t<u>"),oe:s("t<ei>"),o:s("t<x>"),B:s("t<b_>"),D:s("t<cz>"),bu:s("t<b6>"),n:s("t<M>"),dG:s("t<@>"),t:s("t<h>"),g2:s("t<N>"),ev:s("t<~(ah)>"),T:s("dW"),dY:s("bx"),dX:s("z<@>"),mT:s("by"),kT:s("aV"),p:s("o<cK>"),mw:s("o<a3>"),i8:s("o<i>"),bd:s("o<M>"),gM:s("co"),cM:s("X<i,a3>"),ea:s("X<u,@>"),gX:s("cY"),e:s("cq"),li:s("a2"),km:s("fM<bg>"),ib:s("aH"),ee:s("bU"),gD:s("aI"),fh:s("w"),P:s("Y"),ai:s("aY"),K:s("v"),mn:s("O"),gm:s("d2<i>"),p6:s("bA"),d8:s("aJ"),j:s("i"),o5:s("nl"),kB:s("av"),mx:s("bi<N>"),e4:s("d7<@>"),fm:s("ax"),cA:s("aL"),hH:s("aM"),r:s("P"),l:s("b5"),N:s("u"),lv:s("aj"),dt:s("cy"),dy:s("ak"),dQ:s("ay"),gJ:s("ad"),lJ:s("bF"),W:s("c_"),ns:s("da"),hU:s("hx"),ki:s("aN"),hk:s("aZ"),fH:s("ei"),ha:s("nA"),bE:s("c0"),jv:s("aO"),cx:s("dc"),eL:s("dd"),kL:s("aP<a0>"),b1:s("aP<aq>"),eo:s("aP<a2>"),au:s("aP<av>"),c1:s("cz"),l7:s("hK"),oJ:s("al<ba>"),fB:s("al<bF>"),pn:s("al<bg?>"),ou:s("al<~>"),aN:s("hO"),n4:s("b6"),bz:s("cB<k>"),og:s("G<ba>"),aa:s("G<bF>"),g:s("G<@>"),hy:s("G<h>"),j7:s("G<bg?>"),cU:s("G<~>"),gL:s("iq<v?>"),iF:s("dk<~>"),im:s("iy"),o3:s("iD"),k4:s("D"),ei:s("D(a0)"),g9:s("D(aq)"),eU:s("D(a2)"),iW:s("D(v)"),hZ:s("D(av)"),i:s("M"),z:s("@"),mY:s("@()"),y:s("@(v)"),ng:s("@(v,b5)"),p1:s("@(@,@)"),S:s("h"),eK:s("0&*"),_:s("v*"),fr:s("dG?"),mV:s("aa?"),oL:s("a4?"),gK:s("at<Y>?"),ef:s("aD?"),R:s("aU?"),iD:s("v?"),F:s("cD<@,@>?"),nF:s("i7?"),du:s("@(k)?"),ld:s("h(b6,b6)?"),Z:s("~()?"),p0:s("~(ba)?"),lW:s("~(bS)?"),oV:s("~(k)?"),jV:s("~(by)?"),b9:s("~(aI)?"),cZ:s("N"),H:s("~"),M:s("~()"),nD:s("~([~])"),x:s("~(ah)"),nt:s("~(a4)"),i6:s("~(v)"),fQ:s("~(v,b5)"),gS:s("~(u,u)"),E:s("~(u,@)"),my:s("~(hx)"),hv:s("~(N)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aI=A.dE.prototype
B.cT=A.ca.prototype
B.cU=A.f0.prototype
B.ab=A.cb.prototype
B.ey=A.cR.prototype
B.eG=A.cU.prototype
B.eH=A.dS.prototype
B.eU=J.a.prototype
B.a=J.t.prototype
B.eW=J.dU.prototype
B.e=J.dV.prototype
B.c=J.cW.prototype
B.f=J.cl.prototype
B.eX=J.bx.prototype
B.a5=A.e2.prototype
B.ft=A.d0.prototype
B.N=A.e4.prototype
B.bg=J.h5.prototype
B.d=A.d5.prototype
B.aD=J.dc.prototype
B.cr=A.de.prototype
B.cm=new A.ak(5,"table")
B.cs=new A.dx(B.cm)
B.aE=new A.dy(2,"rounds")
B.U=new A.fa()
B.aA=new A.ak(11,"column")
B.be=new A.d1(B.aA)
B.cE=new A.aS(B.U,B.be,t.A)
B.R=new A.ak(0,"door")
B.bd=new A.d1(B.R)
B.cz=new A.aS(B.cE,B.bd,t.A)
B.d2=new A.fZ()
B.cA=new A.aS(B.cz,B.d2,t.A)
B.a9=new A.eX()
B.cC=new A.aS(B.a9,B.be,t.A)
B.cD=new A.aS(B.cC,B.bd,t.A)
B.cL=new A.a0("",0,0,0,99)
B.a8=new A.bb(0,"surface")
B.C=new A.bb(1,"caves")
B.B=new A.bb(2,"deepCaves")
B.T=new A.bb(3,"facility")
B.D=new A.bb(4,"ruins")
B.cV=new A.bb(5,"village")
B.cW=new A.bb(6,"snow")
B.aa=new A.fi()
B.aJ=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cX=function() {
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
B.d1=function(getTagFallback) {
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
B.cY=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cZ=function(hooks) {
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
B.d0=function(hooks) {
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
B.d_=function(hooks) {
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
B.aK=function(hooks) { return hooks; }

B.aL=new A.k6()
B.d3=new A.h2()
B.y=new A.km()
B.n=new A.i4()
B.m=new A.ij()
B.d4=new A.iu()
B.ac=new A.fd(2,"ignoreAgentsAndUnlockedDoors")
B.V=new A.fd(3,"normal")
B.d9=new A.f(1660944383)
B.da=new A.f(3707764736)
B.W=new A.f(4278190080)
B.eb=new A.f(4294278144)
B.ad=new A.f(4294967295)
B.E=new A.bf(null,null,null,null)
B.aP=new A.bR(5,"d20")
B.ai=new A.b1(0,"se")
B.aj=new A.b1(1,"ne")
B.ak=new A.b1(2,"sw")
B.al=new A.b1(3,"nw")
B.q=new A.b1(4,"n")
B.r=new A.b1(5,"e")
B.t=new A.b1(6,"s")
B.u=new A.b1(7,"w")
B.eD=new A.ah(0)
B.eE=new A.ah(25e4)
B.eF=new A.ah(8000)
B.F=new A.ch(0,"primaryMelee")
B.v=new A.ch(1,"primaryRanged")
B.G=new A.ch(2,"armor")
B.eI=new A.a6(1,"north")
B.eJ=new A.a6(10,"activate")
B.eK=new A.a6(12,"equipment")
B.eL=new A.a6(19,"autoexplore")
B.eM=new A.a6(2,"east")
B.eN=new A.a6(20,"reload")
B.eO=new A.a6(21,"toggleStats")
B.eP=new A.a6(22,"showMenu")
B.eQ=new A.a6(3,"south")
B.eR=new A.a6(4,"west")
B.eS=new A.a6(6,"fire")
B.eT=new A.a6(8,"look")
B.am=new A.a1(0,"none")
B.an=new A.a1(1,"stairsUp")
B.X=new A.a1(10,"tree")
B.Y=new A.a1(11,"bookshelf")
B.H=new A.a1(12,"mechanism")
B.Z=new A.a1(13,"activatedMechanism")
B.a_=new A.a1(14,"chest")
B.a0=new A.a1(15,"stalagmite")
B.a1=new A.a1(16,"column")
B.I=new A.a1(2,"stairsDown")
B.z=new A.a1(3,"door")
B.J=new A.a1(4,"openDoor")
B.K=new A.a1(5,"lockedDoor")
B.L=new A.a1(6,"grass")
B.M=new A.a1(7,"torch")
B.a2=new A.a1(8,"table")
B.a3=new A.a1(9,"chair")
B.aQ=new A.bw(0,"melee")
B.aR=new A.bw(1,"ranged")
B.aS=new A.bw(2,"armor")
B.aT=new A.bw(3,"other")
B.eV=new A.bw(5,"corpse")
B.aU=new A.bw(6,"ammo")
B.aV=new A.aG(" ",!1,!1,!1)
B.ao=new A.aG("ArrowDown",!1,!1,!1)
B.aW=new A.aG("ArrowLeft",!1,!1,!1)
B.aX=new A.aG("ArrowRight",!1,!1,!1)
B.ap=new A.aG("ArrowUp",!1,!1,!1)
B.aY=new A.aG("Enter",!1,!1,!1)
B.aq=new A.aG("Escape",!1,!1,!1)
B.eY=new A.jT(1,"water")
B.aF=new A.cM(0,"light")
B.aG=new A.cM(1,"heavy")
B.aH=new A.cM(2,"powered")
B.hj=A.c(s([B.aF,B.aG,B.aH]),t.if)
B.cF=new A.aq(1)
B.cG=new A.aq(1)
B.cH=new A.aq(1)
B.cI=new A.aq(1)
B.hh=A.c(s([B.aH]),t.if)
B.cJ=new A.aq(2)
B.hl=A.c(s([B.aF,B.aG]),t.if)
B.cK=new A.aq(2)
B.eZ=A.c(s([B.cF,B.cG,B.cH,B.cI,B.cJ,B.cK]),A.aR("t<aq>"))
B.aZ=A.c(s([1,2,4,8]),t.t)
B.f_=A.c(s([24,36]),t.n)
B.hf=new A.fA(0,"oneHand")
B.ez=new A.bQ(1,"cold")
B.he=new A.cf(9,"staggered")
B.h3=new A.bP()
B.ah=new A.bR(2,"d6")
B.h_=new A.b_(6,"stun")
B.cq=new A.b_(5,"powered")
B.f1=A.c(s([B.h_,B.cq]),t.B)
B.cv=new A.dy(1,"charge")
B.cx=new A.dz(B.cv,20)
B.fw=new A.av("Zero pistol",B.ez,B.ah,5,B.cx,60)
B.aM=new A.bQ(6,"piercing")
B.ha=new A.cf(0,"none")
B.h4=new A.bP()
B.aN=new A.bR(0,"d3")
B.S=new A.b_(2,"analog")
B.hk=A.c(s([B.S]),t.B)
B.cy=new A.dz(B.aE,9)
B.O=new A.av("Tac Pistol",B.aM,B.aN,1,B.cy,30)
B.ae=new A.bQ(3,"fire")
B.hd=new A.cf(4,"burn")
B.h5=new A.bP()
B.aO=new A.bR(3,"d8")
B.h0=new A.b_(7,"line")
B.h1=new A.b_(8,"unwieldy")
B.hi=A.c(s([B.h0,B.h1]),t.B)
B.cu=new A.dy(0,"petro")
B.cw=new A.dz(B.cu,20)
B.fx=new A.av("Flame Rifle",B.ae,B.aO,2,B.cw,25)
B.f0=A.c(s([B.fw,B.O,B.fx]),A.aR("t<av>"))
B.fA=new A.bV(0,"north")
B.fB=new A.bV(1,"south")
B.fC=new A.bV(2,"east")
B.fD=new A.bV(3,"west")
B.fE=new A.bV(4,"center")
B.b_=A.c(s([B.fA,B.fB,B.fC,B.fD,B.fE]),A.aR("t<bV>"))
B.b0=A.c(s([B.q,B.t]),t.X)
B.b1=A.c(s([B.r,B.u]),t.X)
B.ar=A.c(s([B.ai,B.aj,B.ak,B.al,B.q,B.r,B.t,B.u]),t.X)
B.A=A.c(s([-1,3,-1,-1,3,-1]),t.n)
B.a4=A.c(s([]),t.Q)
B.f5=A.c(s([]),t.X)
B.i=A.c(s([]),t.w)
B.f4=A.c(s([]),A.aR("t<Y>"))
B.cR=new A.a0("Second Skin",1,1,2,5)
B.cS=new A.a0("Estex Suit I",1,0,1,5)
B.cO=new A.a0("Flight Suit",1,0,1,6)
B.cP=new A.a0("Freebooter Armor I",2,2,3,4)
B.cM=new A.a0("Kasatha microcord I",2,1,3,3)
B.cN=new A.a0("Ceremonial Plate",1,1,3,2)
B.cQ=new A.a0("Golemforged Plating",1,2,5,0)
B.f7=A.c(s([B.cR,B.cS,B.cO,B.cP,B.cM,B.cN,B.cQ]),A.aR("t<a0>"))
B.af=new A.bQ(5,"bludgeoning")
B.co=new A.b_(0,"archaic")
B.fa=A.c(s([B.co,B.S]),t.B)
B.fk=new A.a2(B.af,1,B.ah,0,"Club",B.fa)
B.ag=new A.bR(1,"d4")
B.fZ=new A.b_(3,"operative")
B.b2=A.c(s([B.S,B.fZ]),t.B)
B.fi=new A.a2(B.af,1,B.ag,1,"Tactical Baton",B.b2)
B.eB=new A.bQ(7,"slashing")
B.fo=new A.a2(B.eB,1,B.ag,1,"Survival Knife",B.b2)
B.hg=new A.fA(1,"twoHand")
B.cp=new A.b_(4,"block")
B.f2=A.c(s([B.S,B.cp]),t.B)
B.fn=new A.a2(B.aM,1,B.ah,1,"Tactical Spear",B.f2)
B.h6=new A.bP()
B.b3=A.c(s([B.cq]),t.B)
B.h9=new A.k0()
B.fj=new A.a2(B.ae,2,B.ag,7,"Flame Sword",B.b3)
B.hc=new A.cf(11,"wound")
B.h7=new A.bP()
B.fl=new A.a2(B.ae,2,B.aO,9,"Plasma Sword",B.b3)
B.eA=new A.bQ(2,"electricity")
B.hb=new A.cf(1,"arc")
B.h8=new A.bP()
B.eC=new A.bR(4,"d12")
B.fp=new A.a2(B.eA,1,B.eC,8,"Shock Staff",B.f1)
B.f8=A.c(s([B.fk,B.fi,B.fo,B.fn,B.fj,B.fl,B.fp]),A.aR("t<a2>"))
B.d5=new A.cc(0,"north")
B.d6=new A.cc(1,"south")
B.d7=new A.cc(2,"east")
B.d8=new A.cc(3,"west")
B.f9=A.c(s([B.d5,B.d6,B.d7,B.d8]),A.aR("t<cc>"))
B.b4=new A.co(0,"lockedDoor")
B.fb=new A.co(3,"doorMechanism")
B.b5=new A.co(4,"none")
B.ef=new A.f(4294638330)
B.ed=new A.f(4294309365)
B.e6=new A.f(4293848814)
B.e0=new A.f(4292927712)
B.dZ=new A.f(4292269782)
B.dU=new A.f(4290624957)
B.dM=new A.f(4288585374)
B.dF=new A.f(4285887861)
B.dA=new A.f(4284572001)
B.dr=new A.f(4282532418)
B.dm=new A.f(4281348144)
B.di=new A.f(4280361249)
B.as=new A.ab([50,B.ef,100,B.ed,200,B.e6,300,B.e0,350,B.dZ,400,B.dU,500,B.dM,600,B.dF,700,B.dA,800,B.dr,850,B.dm,900,B.di],t.m)
B.e4=new A.f(4293457385)
B.dW=new A.f(4291356361)
B.dO=new A.f(4289058471)
B.dI=new A.f(4286695300)
B.dC=new A.f(4284922730)
B.dv=new A.f(4283215696)
B.dt=new A.f(4282622023)
B.dp=new A.f(4281896508)
B.dl=new A.f(4281236786)
B.dg=new A.f(4279983648)
B.b6=new A.ab([50,B.e4,100,B.dW,200,B.dO,300,B.dI,400,B.dC,500,B.dv,600,B.dt,700,B.dp,800,B.dl,900,B.dg],t.m)
B.ev=new A.f(4294966759)
B.eu=new A.f(4294965700)
B.et=new A.f(4294964637)
B.es=new A.f(4294963574)
B.er=new A.f(4294962776)
B.ep=new A.f(4294961979)
B.eh=new A.f(4294826037)
B.eg=new A.f(4294688813)
B.ee=new A.f(4294551589)
B.ec=new A.f(4294278935)
B.b7=new A.ab([50,B.ev,100,B.eu,200,B.et,300,B.es,400,B.er,500,B.ep,600,B.eh,700,B.eg,800,B.ee,900,B.ec],t.m)
B.e9=new A.f(4293913577)
B.e_=new A.f(4292332744)
B.dT=new A.f(4290554532)
B.dN=new A.f(4288776319)
B.dJ=new A.f(4287458915)
B.dH=new A.f(4286141768)
B.dE=new A.f(4285353025)
B.dy=new A.f(4284301367)
B.dw=new A.f(4283315246)
B.dq=new A.f(4282263331)
B.b8=new A.ab([50,B.e9,100,B.e_,200,B.dT,300,B.dN,400,B.dJ,500,B.dH,600,B.dE,700,B.dy,800,B.dw,900,B.dq],t.m)
B.eq=new A.f(4294962158)
B.el=new A.f(4294954450)
B.e8=new A.f(4293892762)
B.e3=new A.f(4293227379)
B.e7=new A.f(4293874512)
B.ea=new A.f(4294198070)
B.e2=new A.f(4293212469)
B.dY=new A.f(4292030255)
B.dV=new A.f(4291176488)
B.dQ=new A.f(4290190364)
B.at=new A.ab([50,B.eq,100,B.el,200,B.e8,300,B.e3,400,B.e7,500,B.ea,600,B.e2,700,B.dY,800,B.dV,900,B.dQ],t.m)
B.e1=new A.f(4293128957)
B.dS=new A.f(4290502395)
B.dL=new A.f(4287679225)
B.dB=new A.f(4284790262)
B.ds=new A.f(4282557941)
B.dj=new A.f(4280391411)
B.dh=new A.f(4280191205)
B.df=new A.f(4279858898)
B.de=new A.f(4279592384)
B.dd=new A.f(4279060385)
B.b9=new A.ab([50,B.e1,100,B.dS,200,B.dL,300,B.dB,400,B.ds,500,B.dj,600,B.dh,700,B.df,800,B.de,900,B.dd],t.m)
B.e5=new A.f(4293718001)
B.dX=new A.f(4291811548)
B.dP=new A.f(4289773253)
B.dK=new A.f(4287669422)
B.dG=new A.f(4286091420)
B.dz=new A.f(4284513675)
B.dx=new A.f(4283723386)
B.du=new A.f(4282735204)
B.dn=new A.f(4281812815)
B.dk=new A.f(4280693304)
B.ba=new A.ab([50,B.e5,100,B.dX,200,B.dP,300,B.dK,400,B.dG,500,B.dz,600,B.dx,700,B.du,800,B.dn,900,B.dk],t.m)
B.f6=A.c(s([]),t.s)
B.hm=new A.dI(0,{},B.f6,A.aR("dI<u,@>"))
B.em=new A.f(4294955392)
B.ek=new A.f(4294945600)
B.ej=new A.f(4294938880)
B.ei=new A.f(4294929664)
B.fd=new A.ab([100,B.em,200,B.ek,400,B.ej,700,B.ei],t.m)
B.au=new A.ab([B.G,null,B.F,null,B.v,null],A.aR("ab<ch,aU?>"))
B.dR=new A.f(4290377418)
B.dD=new A.f(4285132974)
B.dc=new A.f(4278249078)
B.db=new A.f(4278241363)
B.fc=new A.ab([100,B.dR,200,B.dD,400,B.dc,700,B.db],t.m)
B.ff=new A.cY(B.fc,4285132974)
B.ex=new A.f(4294967181)
B.ew=new A.f(4294967040)
B.eo=new A.f(4294961664)
B.en=new A.f(4294956544)
B.fe=new A.ab([100,B.ex,200,B.ew,400,B.eo,700,B.en],t.m)
B.fg=new A.cY(B.fe,4294967040)
B.bb=new A.cq(B.b7,4294961979)
B.o=new A.cq(B.at,4294198070)
B.fh=new A.cq(B.b9,4280391411)
B.fY=new A.b_(1,"nonlethal")
B.f3=A.c(s([B.co,B.fY,B.S]),t.B)
B.fm=new A.a2(B.af,1,B.aN,0,"Fists",B.f3)
B.bc=new A.cZ(0,"wildBoar")
B.fq=new A.cZ(1,"zyborgMelee")
B.fr=new A.cZ(2,"zyborgRanged")
B.fs=new A.cZ(3,"caveScanner")
B.k=new A.O(0,0)
B.fu=new A.d2(B.a9,t.gm)
B.aC=new A.ak(7,"bookshelf")
B.ct=new A.dx(B.aC)
B.cB=new A.aS(B.a9,B.ct,t.A)
B.fv=new A.d2(B.cB,t.gm)
B.bf=new A.h4(2,"elementalAffinity")
B.p=new A.i(0,0)
B.P=new A.aK(B.k,0,0)
B.av=new A.eb(0,"small")
B.fy=new A.eb(1,"medium")
B.fz=new A.eb(2,"large")
B.aw=new A.ed(0,"melee")
B.ax=new A.ed(1,"ranged")
B.ay=new A.ed(2,"armor")
B.bh=new A.m(0,0)
B.fF=new A.m(0,1)
B.bi=new A.m(0,3)
B.bj=new A.m(0,5)
B.bk=new A.m(0,7)
B.bl=new A.m(10,11)
B.bm=new A.m(10,3)
B.bn=new A.m(10,4)
B.bo=new A.m(10,5)
B.bp=new A.m(10,6)
B.bq=new A.m(10,7)
B.fG=new A.m(11,11)
B.br=new A.m(11,4)
B.fH=new A.m(11,5)
B.bs=new A.m(11,6)
B.fI=new A.m(12,11)
B.fJ=new A.m(12,2)
B.bt=new A.m(12,4)
B.bu=new A.m(12,6)
B.fK=new A.m(13,0)
B.bv=new A.m(13,12)
B.bw=new A.m(13,2)
B.bx=new A.m(13,4)
B.fL=new A.m(13,5)
B.by=new A.m(13,6)
B.fM=new A.m(14,2)
B.bz=new A.m(14,4)
B.bA=new A.m(14,6)
B.bB=new A.m(15,2)
B.bC=new A.m(15,4)
B.bD=new A.m(15,6)
B.bE=new A.m(1,3)
B.bF=new A.m(1,4)
B.bG=new A.m(1,5)
B.bH=new A.m(1,6)
B.bI=new A.m(1,7)
B.bJ=new A.m(2,3)
B.bK=new A.m(2,4)
B.bL=new A.m(2,5)
B.bM=new A.m(2,6)
B.bN=new A.m(2,7)
B.bO=new A.m(3,3)
B.bP=new A.m(3,4)
B.bQ=new A.m(3,5)
B.bR=new A.m(3,6)
B.bS=new A.m(3,7)
B.bT=new A.m(4,3)
B.bU=new A.m(4,4)
B.bV=new A.m(4,5)
B.bW=new A.m(4,6)
B.bX=new A.m(4,7)
B.fN=new A.m(5,0)
B.bY=new A.m(5,3)
B.bZ=new A.m(5,4)
B.c_=new A.m(5,5)
B.c0=new A.m(5,6)
B.c1=new A.m(5,7)
B.c2=new A.m(6,3)
B.c3=new A.m(6,4)
B.c4=new A.m(6,5)
B.c5=new A.m(6,6)
B.c6=new A.m(6,7)
B.c7=new A.m(7,3)
B.c8=new A.m(7,4)
B.c9=new A.m(7,5)
B.ca=new A.m(7,6)
B.cb=new A.m(7,7)
B.fO=new A.m(8,12)
B.fP=new A.m(8,2)
B.cc=new A.m(8,3)
B.cd=new A.m(8,4)
B.ce=new A.m(8,5)
B.cf=new A.m(8,6)
B.cg=new A.m(8,7)
B.fQ=new A.m(9,12)
B.fR=new A.m(9,2)
B.ch=new A.m(9,3)
B.ci=new A.m(9,4)
B.cj=new A.m(9,5)
B.ck=new A.m(9,6)
B.cl=new A.m(9,7)
B.Q=new A.bE("")
B.az=new A.cy(0,"dirt")
B.a6=new A.cy(2,"metal")
B.fS=new A.cy(4,"snow")
B.fT=new A.ak(10,"stalagmite")
B.a7=new A.ak(2,"light")
B.w=new A.ak(3,"none")
B.fU=new A.ak(4,"chair")
B.aB=new A.ak(6,"chest")
B.fV=new A.ak(8,"mechanism")
B.fW=new A.ak(9,"tree")
B.j=new A.da(0,"floor")
B.b=new A.da(1,"wall")
B.fX=A.rw("v")
B.x=new A.db(0,"float_1")
B.h=new A.db(1,"float_2")
B.cn=new A.db(3,"float_4")
B.l=new A.db(4,"texture_1")
B.h2=new A.dj(null,2)})();(function staticFields(){$.l2=null
$.n0=null
$.n_=null
$.o2=null
$.nZ=null
$.oc=null
$.lq=null
$.ly=null
$.mB=null
$.dn=null
$.eO=null
$.eP=null
$.mw=!1
$.E=B.m
$.aQ=A.c([],t.hf)
$.n8=0
$.mX=null
$.qh=A.aW(["0",B.bi,"1",B.bE,"2",B.bJ,"3",B.bO,"4",B.bT,"5",B.bY,"6",B.c2,"7",B.c7,"8",B.cc,"9",B.ch," ",B.bh,"-",B.bw,"a",B.bH,"b",B.bM,"c",B.bR,"d",B.bW,"e",B.c0,"f",B.c5,"g",B.ca,"h",B.cf,"i",B.ck,"j",B.bp,"k",B.bs,"l",B.bu,"m",B.by,"n",B.bA,"o",B.bD,"p",B.bk,"q",B.bI,"r",B.bN,"s",B.bS,"t",B.bX,"u",B.c1,"v",B.c6,"w",B.cb,"x",B.cg,"y",B.cl,"z",B.bq,"A",B.bF,"B",B.bK,"C",B.bP,"D",B.bU,"E",B.bZ,"F",B.c3,"G",B.c8,"H",B.cd,"I",B.ci,"J",B.bn,"K",B.br,"L",B.bt,"M",B.bx,"N",B.bz,"O",B.bC,"P",B.bj,"Q",B.bG,"R",B.bL,"S",B.bQ,"T",B.bV,"U",B.c_,"V",B.c4,"W",B.c9,"X",B.ce,"Y",B.cj,"Z",B.bo,"/",B.bB,":",B.bm],t.N,A.aR("m"))
$.qg=A.aW(["0",B.bi,"1",B.bE,"2",B.bJ,"3",B.bO,"4",B.bT,"5",B.bY,"6",B.c2,"7",B.c7,"8",B.cc,"9",B.ch," ",B.bh,"-",B.bw,"a",B.bH,"b",B.bM,"c",B.bR,"d",B.bW,"e",B.c0,"f",B.c5,"g",B.ca,"h",B.cf,"i",B.ck,"j",B.bp,"k",B.bs,"l",B.bu,"m",B.by,"n",B.bA,"o",B.bD,"p",B.bk,"q",B.bI,"r",B.bN,"s",B.bS,"t",B.bX,"u",B.c1,"v",B.c6,"w",B.cb,"x",B.cg,"y",B.cl,"z",B.bq,"A",B.bF,"B",B.bK,"C",B.bP,"D",B.bU,"E",B.bZ,"F",B.c3,"G",B.c8,"H",B.cd,"I",B.ci,"J",B.bn,"K",B.br,"L",B.bt,"M",B.bx,"N",B.bz,"O",B.bC,"P",B.bj,"Q",B.bG,"R",B.bL,"S",B.bQ,"T",B.bV,"U",B.c_,"V",B.c4,"W",B.c9,"X",B.ce,"Y",B.cj,"Z",B.bo,"/",B.bB,":",B.bm,".",B.fM,"(",B.fP,")",B.fR,",",B.fJ,"[",B.fH,"]",B.fL],t.N,A.aR("m"))
$.aB=A.mp("engine")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"rK","oi",()=>A.r8("_$dart_dartClosure"))
s($,"ta","os",()=>A.bG(A.ky({
toString:function(){return"$receiver$"}})))
s($,"tb","ot",()=>A.bG(A.ky({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"tc","ou",()=>A.bG(A.ky(null)))
s($,"td","ov",()=>A.bG(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"tg","oy",()=>A.bG(A.ky(void 0)))
s($,"th","oz",()=>A.bG(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"tf","ox",()=>A.bG(A.nB(null)))
s($,"te","ow",()=>A.bG(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"tj","oB",()=>A.bG(A.nB(void 0)))
s($,"ti","oA",()=>A.bG(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"tl","mG",()=>A.pN())
s($,"tx","m3",()=>A.lC(B.fX))
s($,"rI","oh",()=>({}))
s($,"rO","mE",()=>B.f.bu(A.m9(),"Opera",0))
s($,"rN","ol",()=>!A.Q($.mE())&&B.f.bu(A.m9(),"Trident/",0))
s($,"rM","ok",()=>B.f.bu(A.m9(),"Firefox",0))
s($,"rL","oj",()=>"-"+$.om()+"-")
s($,"rP","om",()=>{if(A.Q($.ok()))var r="moz"
else if($.ol())r="ms"
else r=A.Q($.mE())?"o":"webkit"
return r})
s($,"t0","or",()=>A.c([$.oS(),$.oT(),$.oU(),$.oE(),$.oQ()],t.ku))
s($,"u0","oS",()=>A.fQ(A.eW(4,6,8,4,4,8),new A.lV(),A.c([B.a8],t.V),"death_1.mp3",new A.lW(),B.bc,0,4,"Wild Boar",new A.lX()))
s($,"tZ","oQ",()=>A.fQ(A.eW(4,6,8,4,4,10),new A.lP(),A.c([B.cW],t.V),"death_1.mp3",new A.lQ(),B.bc,2,4,"Snow Bear",new A.lR()))
s($,"u1","oT",()=>A.fQ(A.eW(4,6,8,4,4,8),new A.lY(),A.c([B.C,B.B,B.T,B.D],t.V),"monster_scream_1.mp3",new A.lZ(),B.fq,1,6,"Zyborg",new A.m_()))
s($,"u2","oU",()=>A.fQ(A.eW(4,6,9,4,4,4),new A.m0(),A.c([B.C,B.B,B.T,B.D],t.V),"monster_scream_1.mp3",new A.m1(),B.fr,2,5,"Zyborg Ranged",new A.m2()))
s($,"tC","oE",()=>A.fQ(A.eW(4,4,10,6,4,2),new A.lm(),A.c([B.C,B.B,B.T,B.D],t.V),null,new A.ln(),B.fs,3,3,"Cave Scanner",new A.lo()))
s($,"tF","mJ",()=>{var r=A.c([A.c1(B.h,"u_resolution"),A.c1(B.x,"u_time"),A.c1(B.h,"u_offset"),A.c1(B.h,"u_origin")],t.o)
return A.aE(A.c([A.mW(35044,A.nh(B.A),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\nuniform vec2 u_origin;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 snapped_position = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  float dist = distance(snapped_position, (u_origin + vec2(0.5, 0.5)) * vec2(24.0, 36.0)) / 50.0;\n  float rand = -1.0 + random(relative_position) / 2.0;\n  float scale_rate = 0.8 * (u_time);\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(249.0 / 255.0, 168.0 / 255.0, 37.0 / 255.0, scale);\n}\n",r,u.d)})
s($,"tL","oJ",()=>{var r=A.c([A.c1(B.h,"u_resolution"),A.c1(B.x,"u_time"),A.c1(B.h,"u_offset"),A.c1(B.h,"u_source"),A.c1(B.h,"u_target")],t.o)
return A.aE(A.c([A.mW(35044,A.nh(B.A),5126,"a_position",2)],t.G),"#version 300 es\nprecision mediump float;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_offset;\n\nuniform vec2 u_source;\nuniform vec2 u_target;\n\nout vec4 outColor;\n\nfloat random(in vec2 _st) {\n    return fract(sin(dot(_st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main() {\n  vec2 relative_position = vec2(gl_FragCoord.x + u_offset.x, gl_FragCoord.y - u_offset.y);\n  vec2 p0 = vec2(relative_position.x, u_resolution.y - relative_position.y);\n  vec2 p1 = (u_source + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n  vec2 p2 = (u_target + vec2(0.5, 0.5)) * vec2(24.0, 36.0);\n\n  if ((p1.x != p2.x) && (p0.x < p1.x && p0.x < p2.x) || (p0.x > p1.x && p0.x > p2.x)) {\n    discard;\n    return;\n  }\n  if ((p1.y != p2.y) && (p0.y < p1.y && p0.y < p2.y) || (p0.y > p1.y && p0.y > p2.y)) {\n    discard;\n    return;\n  }\n\n  float dist = abs( (p2.x - p1.x) * (p1.y - p0.y) - (p1.x - p0.x) * (p2.y - p1.y) ) / sqrt( pow(p2.x - p1.x, 2.0) + pow(p2.y - p1.y, 2.0) );\n  float rand = random(relative_position);\n  float scale_rate = 1.5;\n  if (dist > scale_rate) {\n    discard;\n    return;\n  }\n  float scale = 1.0 - smoothstep(0.0, scale_rate, dist);\n  outColor = vec4(0.1, 0.2, 1.0, 0.8 * scale - u_time);\n}\n",r,u.d)})
s($,"t4","eT",()=>new A.ka())
s($,"rQ","on",()=>A.ml())
s($,"rX","mF",()=>A.mk(A.bO(4278780675),A.bO(4279308561),A.bO(4280361249)))
s($,"rY","oo",()=>A.mk(A.bO(4279898637),A.bO(4281017118),A.bO(4282858034)))
s($,"t_","oq",()=>A.mk(A.bO(4279765786),A.bO(4280096038),A.bO(4282463311)))
s($,"rZ","op",()=>$.mF())
s($,"ty","eU",()=>A.ml())
s($,"tA","oD",()=>A.ml())
s($,"tX","mO",()=>A.bH(B.U,new A.lM(),!0))
s($,"tQ","mM",()=>A.bH(B.cs,new A.lF(),!0))
s($,"tU","dv",()=>A.bH(A.mU(B.aa,A.nj(B.a7),t.j),new A.lJ(),!0))
s($,"tP","mL",()=>A.bH(A.mU(B.U,A.nj(B.a7),t.j),new A.lE(),!0))
s($,"tR","oM",()=>A.bH(B.U,new A.lG(),!0))
s($,"tV","mN",()=>A.bH(B.aa,new A.lK(),!0))
s($,"tW","oO",()=>A.bH(B.fu,new A.lL(),!1))
s($,"tS","iS",()=>A.bH(B.cA,new A.lI(),!0))
s($,"tT","oN",()=>A.bH(B.cD,new A.lH(),!0))
s($,"tO","oL",()=>A.bH(B.fv,new A.lD(),!0))
s($,"tN","m4",()=>{var r=$.mO(),q=$.mM()
return A.c([r,q,q,$.dv(),$.iS()],t.D)})
s($,"tM","oK",()=>{var r=$.oL()
return A.c([r,r,r,r,r,$.dv(),$.mO(),$.mM(),$.iS()],t.D)})
s($,"tK","oI",()=>{var r=$.dv(),q=$.iS()
return A.c([r,r,r,q,q,q],t.D)})
s($,"tI","oG",()=>{var r,q=$.dv(),p=$.mL()
p=A.c([q,q,q,p,p,p,p,p,p],t.D)
for(r=0;r<500;++r)p.push($.oO())
return p})
s($,"tJ","oH",()=>{var r,q=$.dv(),p=$.mL()
p=A.c([q,q,q,p,p,p],t.D)
for(r=0;r<10;++r)p.push($.iS())
for(r=0;r<10;++r)p.push($.oN())
return p})
s($,"u_","oR",()=>A.c([$.oM(),$.dv()],t.D))
s($,"tz","oC",()=>A.pu(A.cF(A.c([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t.t))))
s($,"tG","oF",()=>A.aW([A.b2("ArrowUp",!1,!1,!1),B.eI,A.b2("ArrowDown",!1,!1,!1),B.eQ,A.b2("ArrowRight",!1,!1,!1),B.eM,A.b2("ArrowLeft",!1,!1,!1),B.eR,A.b2("q",!1,!1,!1),B.eS,A.b2(" ",!1,!1,!1),B.eJ,A.b2("0",!1,!1,!1),B.eL,A.b2("l",!1,!1,!1),B.eT,A.b2("Escape",!1,!1,!1),B.eP,A.b2("r",!1,!1,!1),B.eN,A.b2("e",!1,!1,!1),B.eK,A.b2("p",!1,!1,!1),B.eO],A.aR("aG"),t.h8))
s($,"tB","mH",()=>t.jQ.a(A.r5().querySelector("#glCanvas")))
s($,"tH","mK",()=>A.aR("d5").a(B.ab.dr($.mH(),"webgl2")))
s($,"tY","oP",()=>new A.jr())
s($,"tE","mI",()=>A.pb($.mH(),$.mK(),$.oP()))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.fR,DataView:A.cu,ArrayBufferView:A.cu,Float64Array:A.ct,Float32Array:A.e2,Int16Array:A.fS,Int32Array:A.fT,Int8Array:A.fU,Uint16Array:A.fV,Uint32Array:A.fW,Uint8ClampedArray:A.d0,CanvasPixelArray:A.d0,Uint8Array:A.e4,HTMLBRElement:A.q,HTMLBaseElement:A.q,HTMLButtonElement:A.q,HTMLContentElement:A.q,HTMLDListElement:A.q,HTMLDataElement:A.q,HTMLDataListElement:A.q,HTMLDetailsElement:A.q,HTMLDialogElement:A.q,HTMLDivElement:A.q,HTMLEmbedElement:A.q,HTMLFieldSetElement:A.q,HTMLHRElement:A.q,HTMLHeadElement:A.q,HTMLHeadingElement:A.q,HTMLHtmlElement:A.q,HTMLIFrameElement:A.q,HTMLInputElement:A.q,HTMLLIElement:A.q,HTMLLabelElement:A.q,HTMLLegendElement:A.q,HTMLLinkElement:A.q,HTMLMapElement:A.q,HTMLMenuElement:A.q,HTMLMetaElement:A.q,HTMLMeterElement:A.q,HTMLModElement:A.q,HTMLOListElement:A.q,HTMLObjectElement:A.q,HTMLOptGroupElement:A.q,HTMLOptionElement:A.q,HTMLOutputElement:A.q,HTMLParagraphElement:A.q,HTMLParamElement:A.q,HTMLPictureElement:A.q,HTMLPreElement:A.q,HTMLProgressElement:A.q,HTMLQuoteElement:A.q,HTMLScriptElement:A.q,HTMLShadowElement:A.q,HTMLSlotElement:A.q,HTMLSourceElement:A.q,HTMLSpanElement:A.q,HTMLStyleElement:A.q,HTMLTableCaptionElement:A.q,HTMLTableCellElement:A.q,HTMLTableDataCellElement:A.q,HTMLTableHeaderCellElement:A.q,HTMLTableColElement:A.q,HTMLTableElement:A.q,HTMLTableRowElement:A.q,HTMLTableSectionElement:A.q,HTMLTemplateElement:A.q,HTMLTextAreaElement:A.q,HTMLTimeElement:A.q,HTMLTitleElement:A.q,HTMLTrackElement:A.q,HTMLUListElement:A.q,HTMLUnknownElement:A.q,HTMLDirectoryElement:A.q,HTMLFontElement:A.q,HTMLFrameElement:A.q,HTMLFrameSetElement:A.q,HTMLMarqueeElement:A.q,HTMLElement:A.q,AccessibleNodeList:A.iV,HTMLAnchorElement:A.eZ,HTMLAreaElement:A.f_,Blob:A.f5,HTMLBodyElement:A.f6,HTMLCanvasElement:A.cb,CDATASection:A.bc,CharacterData:A.bc,Comment:A.bc,ProcessingInstruction:A.bc,Text:A.bc,CSSPerspective:A.jf,CSSCharsetRule:A.I,CSSConditionRule:A.I,CSSFontFaceRule:A.I,CSSGroupingRule:A.I,CSSImportRule:A.I,CSSKeyframeRule:A.I,MozCSSKeyframeRule:A.I,WebKitCSSKeyframeRule:A.I,CSSKeyframesRule:A.I,MozCSSKeyframesRule:A.I,WebKitCSSKeyframesRule:A.I,CSSMediaRule:A.I,CSSNamespaceRule:A.I,CSSPageRule:A.I,CSSRule:A.I,CSSStyleRule:A.I,CSSSupportsRule:A.I,CSSViewportRule:A.I,CSSStyleDeclaration:A.cR,MSStyleCSSProperties:A.cR,CSS2Properties:A.cR,CSSImageValue:A.b0,CSSKeywordValue:A.b0,CSSNumericValue:A.b0,CSSPositionValue:A.b0,CSSResourceValue:A.b0,CSSUnitValue:A.b0,CSSURLImageValue:A.b0,CSSStyleValue:A.b0,CSSMatrixComponent:A.bu,CSSRotation:A.bu,CSSScale:A.bu,CSSSkew:A.bu,CSSTranslation:A.bu,CSSTransformComponent:A.bu,CSSTransformValue:A.jh,CSSUnparsedValue:A.ji,DataTransferItemList:A.jj,Document:A.bv,HTMLDocument:A.bv,XMLDocument:A.bv,DOMException:A.bS,ClientRectList:A.dK,DOMRectList:A.dK,DOMRectReadOnly:A.dL,DOMStringList:A.fm,DOMTokenList:A.jk,Element:A.a7,AbortPaymentEvent:A.k,AnimationEvent:A.k,AnimationPlaybackEvent:A.k,ApplicationCacheErrorEvent:A.k,BackgroundFetchClickEvent:A.k,BackgroundFetchEvent:A.k,BackgroundFetchFailEvent:A.k,BackgroundFetchedEvent:A.k,BeforeInstallPromptEvent:A.k,BeforeUnloadEvent:A.k,BlobEvent:A.k,CanMakePaymentEvent:A.k,ClipboardEvent:A.k,CloseEvent:A.k,CustomEvent:A.k,DeviceMotionEvent:A.k,DeviceOrientationEvent:A.k,ErrorEvent:A.k,ExtendableEvent:A.k,ExtendableMessageEvent:A.k,FetchEvent:A.k,FontFaceSetLoadEvent:A.k,ForeignFetchEvent:A.k,GamepadEvent:A.k,HashChangeEvent:A.k,InstallEvent:A.k,MediaEncryptedEvent:A.k,MediaKeyMessageEvent:A.k,MediaQueryListEvent:A.k,MediaStreamEvent:A.k,MediaStreamTrackEvent:A.k,MessageEvent:A.k,MIDIConnectionEvent:A.k,MIDIMessageEvent:A.k,MutationEvent:A.k,NotificationEvent:A.k,PageTransitionEvent:A.k,PaymentRequestEvent:A.k,PaymentRequestUpdateEvent:A.k,PopStateEvent:A.k,PresentationConnectionAvailableEvent:A.k,PresentationConnectionCloseEvent:A.k,ProgressEvent:A.k,PromiseRejectionEvent:A.k,PushEvent:A.k,RTCDataChannelEvent:A.k,RTCDTMFToneChangeEvent:A.k,RTCPeerConnectionIceEvent:A.k,RTCTrackEvent:A.k,SecurityPolicyViolationEvent:A.k,SensorErrorEvent:A.k,SpeechRecognitionError:A.k,SpeechRecognitionEvent:A.k,SpeechSynthesisEvent:A.k,StorageEvent:A.k,SyncEvent:A.k,TrackEvent:A.k,TransitionEvent:A.k,WebKitTransitionEvent:A.k,VRDeviceEvent:A.k,VRDisplayEvent:A.k,VRSessionEvent:A.k,MojoInterfaceRequestEvent:A.k,ResourceProgressEvent:A.k,USBConnectionEvent:A.k,IDBVersionChangeEvent:A.k,AudioProcessingEvent:A.k,OfflineAudioCompletionEvent:A.k,WebGLContextEvent:A.k,Event:A.k,InputEvent:A.k,SubmitEvent:A.k,AbsoluteOrientationSensor:A.e,Accelerometer:A.e,AccessibleNode:A.e,AmbientLightSensor:A.e,Animation:A.e,ApplicationCache:A.e,DOMApplicationCache:A.e,OfflineResourceList:A.e,BackgroundFetchRegistration:A.e,BatteryManager:A.e,BroadcastChannel:A.e,CanvasCaptureMediaStreamTrack:A.e,DedicatedWorkerGlobalScope:A.e,EventSource:A.e,FileReader:A.e,FontFaceSet:A.e,Gyroscope:A.e,LinearAccelerationSensor:A.e,Magnetometer:A.e,MediaDevices:A.e,MediaKeySession:A.e,MediaQueryList:A.e,MediaRecorder:A.e,MediaSource:A.e,MediaStream:A.e,MediaStreamTrack:A.e,MessagePort:A.e,MIDIAccess:A.e,MIDIInput:A.e,MIDIOutput:A.e,MIDIPort:A.e,NetworkInformation:A.e,Notification:A.e,OffscreenCanvas:A.e,OrientationSensor:A.e,PaymentRequest:A.e,Performance:A.e,PermissionStatus:A.e,PresentationAvailability:A.e,PresentationConnection:A.e,PresentationConnectionList:A.e,PresentationRequest:A.e,RelativeOrientationSensor:A.e,RemotePlayback:A.e,RTCDataChannel:A.e,DataChannel:A.e,RTCDTMFSender:A.e,RTCPeerConnection:A.e,webkitRTCPeerConnection:A.e,mozRTCPeerConnection:A.e,ScreenOrientation:A.e,Sensor:A.e,ServiceWorker:A.e,ServiceWorkerContainer:A.e,ServiceWorkerGlobalScope:A.e,ServiceWorkerRegistration:A.e,SharedWorker:A.e,SharedWorkerGlobalScope:A.e,SpeechRecognition:A.e,SpeechSynthesis:A.e,SpeechSynthesisUtterance:A.e,VR:A.e,VRDevice:A.e,VRDisplay:A.e,VRSession:A.e,VisualViewport:A.e,WebSocket:A.e,Worker:A.e,WorkerGlobalScope:A.e,WorkerPerformance:A.e,BluetoothDevice:A.e,BluetoothRemoteGATTCharacteristic:A.e,Clipboard:A.e,MojoInterfaceInterceptor:A.e,USB:A.e,IDBDatabase:A.e,IDBOpenDBRequest:A.e,IDBVersionChangeRequest:A.e,IDBRequest:A.e,IDBTransaction:A.e,EventTarget:A.e,File:A.aC,FileList:A.fs,FileWriter:A.ft,HTMLFormElement:A.fw,Gamepad:A.aD,History:A.jG,HTMLCollection:A.cj,HTMLFormControlsCollection:A.cj,HTMLOptionsCollection:A.cj,XMLHttpRequest:A.dS,XMLHttpRequestUpload:A.ck,XMLHttpRequestEventTarget:A.ck,HTMLImageElement:A.cV,KeyboardEvent:A.by,Location:A.jV,HTMLAudioElement:A.cr,HTMLMediaElement:A.cr,MediaList:A.k_,MIDIInputMap:A.fN,MIDIOutputMap:A.fO,MimeType:A.aH,MimeTypeArray:A.fP,MouseEvent:A.aI,DragEvent:A.aI,PointerEvent:A.aI,WheelEvent:A.aI,DocumentFragment:A.w,ShadowRoot:A.w,Attr:A.w,DocumentType:A.w,Node:A.w,NodeList:A.e5,RadioNodeList:A.e5,Plugin:A.aJ,PluginArray:A.h6,RTCStatsReport:A.hd,HTMLSelectElement:A.hf,SourceBuffer:A.ax,SourceBufferList:A.hj,SpeechGrammar:A.aL,SpeechGrammarList:A.hk,SpeechRecognitionResult:A.aM,Storage:A.hn,CSSStyleSheet:A.aj,StyleSheet:A.aj,TextTrack:A.ay,TextTrackCue:A.ad,VTTCue:A.ad,TextTrackCueList:A.hv,TextTrackList:A.hw,TimeRanges:A.kv,Touch:A.aN,TouchList:A.hy,TrackDefaultList:A.kw,CompositionEvent:A.bj,FocusEvent:A.bj,TextEvent:A.bj,TouchEvent:A.bj,UIEvent:A.bj,URL:A.kA,HTMLVideoElement:A.dd,VideoTrackList:A.hH,Window:A.de,DOMWindow:A.de,CSSRuleList:A.hQ,ClientRect:A.em,DOMRect:A.em,GamepadList:A.i1,NamedNodeMap:A.et,MozNamedAttrMap:A.et,SpeechRecognitionResultList:A.io,StyleSheetList:A.iv,SVGLength:A.aV,SVGLengthList:A.fH,SVGNumber:A.aY,SVGNumberList:A.h0,SVGPointList:A.kc,SVGStringList:A.hp,SVGAElement:A.n,SVGAnimateElement:A.n,SVGAnimateMotionElement:A.n,SVGAnimateTransformElement:A.n,SVGAnimationElement:A.n,SVGCircleElement:A.n,SVGClipPathElement:A.n,SVGDefsElement:A.n,SVGDescElement:A.n,SVGDiscardElement:A.n,SVGEllipseElement:A.n,SVGFEBlendElement:A.n,SVGFEColorMatrixElement:A.n,SVGFEComponentTransferElement:A.n,SVGFECompositeElement:A.n,SVGFEConvolveMatrixElement:A.n,SVGFEDiffuseLightingElement:A.n,SVGFEDisplacementMapElement:A.n,SVGFEDistantLightElement:A.n,SVGFEFloodElement:A.n,SVGFEFuncAElement:A.n,SVGFEFuncBElement:A.n,SVGFEFuncGElement:A.n,SVGFEFuncRElement:A.n,SVGFEGaussianBlurElement:A.n,SVGFEImageElement:A.n,SVGFEMergeElement:A.n,SVGFEMergeNodeElement:A.n,SVGFEMorphologyElement:A.n,SVGFEOffsetElement:A.n,SVGFEPointLightElement:A.n,SVGFESpecularLightingElement:A.n,SVGFESpotLightElement:A.n,SVGFETileElement:A.n,SVGFETurbulenceElement:A.n,SVGFilterElement:A.n,SVGForeignObjectElement:A.n,SVGGElement:A.n,SVGGeometryElement:A.n,SVGGraphicsElement:A.n,SVGImageElement:A.n,SVGLineElement:A.n,SVGLinearGradientElement:A.n,SVGMarkerElement:A.n,SVGMaskElement:A.n,SVGMetadataElement:A.n,SVGPathElement:A.n,SVGPatternElement:A.n,SVGPolygonElement:A.n,SVGPolylineElement:A.n,SVGRadialGradientElement:A.n,SVGRectElement:A.n,SVGScriptElement:A.n,SVGSetElement:A.n,SVGStopElement:A.n,SVGStyleElement:A.n,SVGElement:A.n,SVGSVGElement:A.n,SVGSwitchElement:A.n,SVGSymbolElement:A.n,SVGTSpanElement:A.n,SVGTextContentElement:A.n,SVGTextElement:A.n,SVGTextPathElement:A.n,SVGTextPositioningElement:A.n,SVGTitleElement:A.n,SVGUseElement:A.n,SVGViewElement:A.n,SVGGradientElement:A.n,SVGComponentTransferFunctionElement:A.n,SVGFEDropShadowElement:A.n,SVGMPathElement:A.n,SVGTransform:A.aZ,SVGTransformList:A.hz,AudioBuffer:A.ba,AudioBufferSourceNode:A.dE,AudioContext:A.ca,webkitAudioContext:A.ca,AnalyserNode:A.H,RealtimeAnalyserNode:A.H,AudioDestinationNode:A.H,AudioWorkletNode:A.H,BiquadFilterNode:A.H,ChannelMergerNode:A.H,AudioChannelMerger:A.H,ChannelSplitterNode:A.H,AudioChannelSplitter:A.H,ConvolverNode:A.H,DelayNode:A.H,DynamicsCompressorNode:A.H,IIRFilterNode:A.H,MediaElementAudioSourceNode:A.H,MediaStreamAudioDestinationNode:A.H,MediaStreamAudioSourceNode:A.H,PannerNode:A.H,AudioPannerNode:A.H,webkitAudioPannerNode:A.H,ScriptProcessorNode:A.H,JavaScriptAudioNode:A.H,StereoPannerNode:A.H,WaveShaperNode:A.H,AudioNode:A.H,AudioParam:A.f0,AudioParamMap:A.f1,ConstantSourceNode:A.bt,OscillatorNode:A.bt,Oscillator:A.bt,AudioScheduledSourceNode:A.bt,AudioTrackList:A.f2,BaseAudioContext:A.dF,GainNode:A.cU,AudioGainNode:A.cU,OfflineAudioContext:A.h1,WebGLBuffer:A.f8,WebGLFramebuffer:A.fy,WebGLProgram:A.h7,WebGL2RenderingContext:A.d5,WebGLTexture:A.bF,WebGLUniformLocation:A.hB,WebGLVertexArrayObject:A.hG})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,AudioParam:true,AudioParamMap:true,ConstantSourceNode:true,OscillatorNode:true,Oscillator:true,AudioScheduledSourceNode:false,AudioTrackList:true,BaseAudioContext:false,GainNode:true,AudioGainNode:true,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true})
A.d_.$nativeSuperclassTag="ArrayBufferView"
A.eu.$nativeSuperclassTag="ArrayBufferView"
A.ev.$nativeSuperclassTag="ArrayBufferView"
A.ct.$nativeSuperclassTag="ArrayBufferView"
A.ew.$nativeSuperclassTag="ArrayBufferView"
A.ex.$nativeSuperclassTag="ArrayBufferView"
A.e3.$nativeSuperclassTag="ArrayBufferView"
A.ez.$nativeSuperclassTag="EventTarget"
A.eA.$nativeSuperclassTag="EventTarget"
A.eF.$nativeSuperclassTag="EventTarget"
A.eG.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.mC
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

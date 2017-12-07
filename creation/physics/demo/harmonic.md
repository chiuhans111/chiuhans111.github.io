# @@var:
m=5
k=0.1
c=0.15
A=10
# @@calc:
w=Math.sqrt(this.k/this.m-Math.pow(this.c/this.m/2))
y=this.c/this.m/2
# @@doc: 
# $en: PHYSICS REPORT $ch: 物理報告
## $en: Damped Harmonic Oscillator $ch: 簡單諧振運動
---
$en: A spring connects to a `m` *kg* ball,
$en: the force done by the spring *=-* `k` *x*. (*f=-kx*)
$en: and the damping force *=-* `c` *v*. (*f=-cv*)
$ch: 一個彈簧連接到重 `m` 公斤的球，
$ch: 彈簧力 *=-* `k` *x*。 (*f=-kx*)
$ch: 以及阻力 *=-* `c` *v*. (*f=-cv*)

## (X-T) GRAPH
``` js 800x300
[{
    data:{
        f:t=>Math.pow(Math.E,(-y*t))*A*Math.cos(t*w),
        s:0, e:400, d:1000,
    },
    mark: false
},{
    data:{
        f:t=>Math.pow(Math.E,(-y*t))*A,
        s:0, e:400, d:500,
    },
    color: 'gray',
    mark: false
},{
    data:{
        f:t=>-Math.pow(Math.E,(-y*t))*A,
        s:0, e:400, d:500,
    },
    color: 'gray',
    mark: false
},{
    data:[
        [0, A],
        [100,0],
        [200,0],
        [300,0],
        [400,0]
    ],
    color:'lightgray',
    connect: false
}]
```
$en:formula: $ch: 公式如下：
*x=e^{-\\Upsilon t} cos(\\omega t)*
*\\Upsilon=\\frac{c}{2m}*
*\\omega=\\sqrt{\\frac{k}{m}-(\\frac{c}{2m})^2}*
---
## $en:prove$ch:公式推導
by Newton's 2nd Law:
*F=ma=-kx-cv* (spring and damping force)
*\\Longrightarrow ma=-kx-cv \\Longrightarrow ma+cv+kx=0*
*a=\\frac{d^2x}{dt^2}* (acceleration)
*v=\\frac{dx}{dt}* (velocity)
*\\Longrightarrow m\\frac{d^2x}{dt^2}+c\\frac{dx}{dt}+kx=0*
This is in the form of a homogeneous second order differential equation and has a solution: *x = e^{\\lambda t}*
*\\Longrightarrow m\\frac{d^2}{dt^2}(e^{\\lambda t})+c\\frac{d}{dt}(e^{\\lambda t})+k(e^{\\lambda t})=0*
*\\Longrightarrow m\\lambda^2(e^{\\lambda t})+c\\lambda(e^{\\lambda t})+k(e^{\\lambda t})=0*
*\\Longrightarrow m\\lambda^2+c\\lambda+k=0*
*\\Longrightarrow \\lambda=\\frac{-c\\pm\\sqrt{c^2-4mk}}{2m}*
In this case, the damping coefficient *\\Upsilon=\\frac{c}{2m}*
and we have the formula *x=e^{-\\Upsilon t} cos(\\omega t)*
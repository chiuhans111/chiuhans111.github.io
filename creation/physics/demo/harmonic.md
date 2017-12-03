# @@var:
m=5
k=0.1
c=0.15
A=10
# @@calc:
w=Math.sqrt(this.k/this.m)
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
*\\omega=\\sqrt{\\frac{k}{m}}*
---
## $en:prove$ch:公式推導
$en:by Newton's 2nd Law:$ch:根據牛頓第二運動定律
*F=ma=-kx-cv* ($en:spring and damping force$ch:彈力與阻力$)
*\\Longrightarrow ma=-kx-cv \\Longrightarrow ma+cv+kx=0*
*a=\\frac{d^2x}{dt^2}* ($en:acceleration$ch:加速度$)
*v=\\frac{dx}{dt}* ($en:velocity$ch:速度$)
*\\Longrightarrow m\\frac{d^2x}{dt^2}+c\\frac{dx}{dt}+kx=0*
$en:This is in the form of a homogeneous second order differential equation and has a solution: *x = e^{\\lambda t}*
$ch:此為二階線性微分方程，有解: *x = e^{\\lambda t}*
*\\Longrightarrow m\\frac{d^2}{dt^2}(e^{\\lambda t})+c\\frac{d}{dt}(e^{\\lambda t})+k(e^{\\lambda t})=0*
*\\Longrightarrow m\\lambda^2(e^{\\lambda t})+c\\lambda(e^{\\lambda t})+k(e^{\\lambda t})=0*
*\\Longrightarrow m\\lambda^2+c\\lambda+k=0*
*\\Longrightarrow \\lambda=\\frac{-c\\pm\\sqrt{c^2-4mk}}{2m}*
$en:In this case, the damping coefficient$ch:在這個例子中，阻力係數$ *\\Upsilon=\\frac{c}{2m}*
$en:and we have the equation$ch:然後我們得到方程式$ *x=e^{-\\Upsilon t} cos(\\omega t)*
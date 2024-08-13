## step
```glsl
float step(float edge, float x); 
vec2 step(vec2 edge, vec2 x);
1. 如果 x 小于 edge ，则返回 0.0。
2. 如果 x 大于等于 edge ，则返回 1.0。
```
## smoothstep
```glsl
float smoothstep(float edge0, float edge1, float x);
1. 如果 x 小于 edge0 ，则返回 0.0。
2. 如果 x 大于等于 edge1 ，则返回 1.0。
3. 如果 x 在 edge0 和 edge1 之间，它会根据x 在这个范围内的相对位置进行插值计算。
具体计算方式为将 x 归一化到 0.0 到 1.0 之间，然后使用三次方程 3x^2 - 2x^3 进行插值。
```
## mix
```glsl
mix(genType x,genType y,float a)，即(x*(1-a)+y*a)。
简单理解就是a的值决定了x和y的强弱关系。
a取值范围在[0,1]之间，a值越大，结果值中y占比会越大；
a值越小，结果值中y占比会越小；
```
## fract
```glsl
在 GLSL 中，"fract" 是一个内置函数，用于计算一个浮点数的小数部分。
它返回一个在 0 到 1 之间的值，表示输入值的小数部分。
例如，如果输入值为 2.7，则 "fract(2.7)" 将返回 0.7。
如果输入值为 -1.5，则 "fract(-1.5)" 将返回 0.5。
这样，你可以使用 "fract" 函数来处理浮点数的小数部分，以满足特定的计算需求。
```
## clamp
```glsl
clamp(value,minValue,maxValue)
其中，value为要限制的值，minValue为限制的最小值，maxValue为限制的最大值。
如果value小于minValue,则返回minValue,
如果value大于maxValue,则返回maxValue,
否则返回value
```
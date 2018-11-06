# CSS3 重点

## 话说Transition这厮

> 平滑的改变CSS的值

- -property: all, ...
- -duration
- -delay
- -timing-funciton: linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier()

``` cubic-bezier
linear == cubic-bezier(0,0,1,1)
ease == cubic-bezier(0.25,0,0.25,1)
ease-in == cubic-bezier(0.42,0,1,1)
ease-out == cubic-bezier(0,0,0.58,1)
ease-in-out == cubic-bezier(0.42,0,0.58,1)
in-out-back == cubic-bezier(0.68,-0.55,0.27,1.55)
```
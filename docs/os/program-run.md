# 程序的运行过程

## 程序编译过程
> 编译过程和硬件执行程序的过程
> 约定使用gcc工具链

hello.c
```c
#include "stdio.h"
int main(int argc,char const *argv[]) {
    printf("hello world");
    return 0;
}
```
> 计算机硬件无法直接运行这个c程序， 需要c语言编译器，把c代码编译成硬件平台的二进制代码
> 在由具体操作系统建立进程，把这个二进制文件装进进程的内存空间中，然后才可以运行


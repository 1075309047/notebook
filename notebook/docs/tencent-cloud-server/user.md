---
title: 用户管理
date: 2022-05-29
publish: false
---

## 添加用户

`useradd lzc`

## 切换用户（su和su -）

`su username`

su 命令只是切换用户身份，获得了用户的执行权限，不能获得环境变量，Shell环境仍然是之前用户的Shell。

`su - username`

su - 命令是切换用户身份，获得了用户的执行权限及用户的环境变量，用户和Shell环境一起切换

* 不加用户是默认切到 root 用户。
* 只有切换了Shell环境才不会出现PATH环境变量错误。（验证：pwd，echo $PATH）

## 修改强密码

## 添加sudoers

`sudo vim /etc/sudoers`

```markdown
# sudo 需密
lighthouse ALL=(ALL) ALL
# sudo 免密
lzc        ALL=(ALL) NOPASSWD:ALL
```

## 解决 sudoers 中的用户频繁的执行 sudo 命令提权

`sudo -i`

`sudo su`

运行 sudo 命令给 su 命令提权，默认是切到 root 用户

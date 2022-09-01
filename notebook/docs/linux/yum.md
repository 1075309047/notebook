---
title: yum常用命令
date: 2022-05-29
---

## 查看

列出所有仓库
`yum repolist`

列出所有包组
`yum grouplist`

列出所有可安装的软件包
`yum list`

列出以 pam 为开头的软件包
`yum list pam*`

查看软件包的详细信息
`yum info <package_name>`

## 安装指定的软件包

`yum install <package_name>`

## 删除指定的软件包

`yum remove <package_name>`

## 查找软件包命令

`yum search <keyword>`

## 缓存

清除缓存
`yum clean all`

生成缓存
`yum makecache`

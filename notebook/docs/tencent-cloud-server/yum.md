---
title: 修改软件默认源为腾讯源
date: 2022-05-29
publish: false
---

## 腾讯centos源

### 腾讯centos源网站

公网域名：mirrors.cloud.tencent.com或mirrors.tencent.com

内网域名：mirrors.tencentyun.com

### 腾讯centos源repo

<https://mirrors.cloud.tencent.com/repo>

如果服务器是腾讯云的，源还可以用腾讯内网域名替换公网域名，这样更快。（注意腾讯内网域名的URL请使用http、使用https是访问不了的，外网域名http和https都可以）

## CentOS8配置YUM源

### 备份系统旧配置文件

`cp -r /etc/yum.repos.d ~/yum.repos.d`

### 下载腾讯云的yum源配置文件到上面那个文件夹内

`wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.tencentyun.com/repo/centos8_base.repo`

### 更换 Epel 源

```CentOS-Epel.repo
[epel]
name=EPEL for redhat/centos $releasever - $basearch
baseurl=http://mirrors.tencentyun.com/epel/$releasever/Everything/$basearch
failovermethod=priority
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-8
```

### 安装 yum-utils

`sudo yum install -y yum-utils`

### 配置 docker-ce 源

```linux
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

## repo管理

### 启用repo

`yum-config-manager --set-enabled AppStream`

### 禁用repo

`yum-config-manager --set-disabled PowerTools`

## 清理yum缓存，重建依赖

`yum clean all && yum makecache`

## 参考

<https://cloud.tencent.com/developer/article/1662816>

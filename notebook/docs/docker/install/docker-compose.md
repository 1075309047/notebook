---
title: centos 安装 docker-compose
date: 2022-05-29
publish: false
---

## docker-compose

### 安装docker-compose

`sudo curl -L "https://github.com/docker/compose/releases/download/v2.10.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`

### 赋予可执行权限

`sudo chmod +x /usr/local/bin/docker-compose`

### 创建软链

`sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose`

### 测试docker-compose是否安装成功

`docker-compose --version`

## 参考

[Docker Compose](https://www.runoob.com/docker/docker-compose.html)

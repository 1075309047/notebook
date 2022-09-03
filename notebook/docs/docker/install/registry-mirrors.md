---
title: Docker 镜像拉取加速
date: 2022-05-29
publish: false
---

## 配置国内镜像源

从Docker官方仓库拉取镜像的速度会比较慢，可以配一个官方的中国加速镜像。

中科大镜像地址：<https://mirrors.ustc.edu.cn>

`vim /etc/docker/daemon.json`

```json
{
  "registry-mirrors": ["https://mirrors.ustc.edu.cn"]
}
```

## 镜像源生效

保存文件并重启 Docker 以使更改生效

`sudo systemctl restart docker.service`

查看镜像源
`docker info`

## 参考

<https://docs.docker.com/registry/recipes/mirror/#configure-the-docker-daemon>

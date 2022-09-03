---
title: centos 安装 docker
date: 2022-05-29
---

## docker初始化

### 配置 docker-ce 源

```linux
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

### 安装docker

`sudo yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin`

## docker设置

### 设置开机自启

`sudo systemctl enable docker.service`

`sudo systemctl enable containerd.service`

### 启动docker

`systemctl start docker.service`

### 重启docker

`systemctl restart docker.service`

在docker容器开启时关闭过防火墙，需要重新启动一下docker。

### 配置重载

`systemctl daemon-reload`

如果docker服务的配置文件更改，需重载以使更改生效。

## 其它

### 测试docker是否安装成功

`sudo docker run hello-world`

通过运行 hello-world 映像来验证是否正确安装了 Docker Engine-Community

### 更新docker

### 卸载docker

卸载软件包

`sudo yum remove docker-ce docker-ce-cli containerd.io docker-compose-plugin`

删除所有映像、容器和卷

`sudo rm -rf /var/lib/docker`

`sudo rm -rf /var/lib/containerd`

## 参考

[Install Docker Engine on CentOS](https://docs.docker.com/engine/install/centos/)

[CentOS Docker 安装](https://www.runoob.com/docker/centos-docker-install.html)

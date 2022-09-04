---
title: Firewalld
date: 2022-09-04
publish: false
---

## Firewalld 初始化

### 安装 Firewalld

安装防火墙
`yum install -y firewalld`

### 设置 Firewalld

开机自启
`systemctl enable firewalld.service`

立即启动防火墙
`systemctl start firewalld.service`

查看防火墙状态
`systemctl status firewalld.service`

## Firewalld 的区域

### 查看区域

查看所有区域
`firewall-cmd --get-zones`

查看默认区域
`firewall-cmd --get-default-zone`

### 修改区域

修改默认区域为drop（禁用所有）
`firewall-cmd --set-default-zone=drop`

### 区域说明

* public：仅允许访问本机的sshd、ping、dhcp服务
* trusted：允许任何访问
* block：阻塞任何来访请求（明确拒绝，有回应客户端）
* drop：丢弃任何来访的数据包（直接丢弃，没有回应客户端），节省服务器资源

## 常用命令

显示防火墙状态
`firewall-cmd --state`

重载防火墙，更新规则
`firewall-cmd --reload`

## 查看规则

查看所有区域配置
`firewall-cmd --list-all-zones`

查看public区域的所有规则
`firewall-cmd --zone=public --list-all`

查看默认区域下的所有规则
`firewall-cmd --list-all`

查看默认区域下的所有已放行端口
`firewall-cmd --list-ports`

查看默认区域下指定的端口是否放开
`firewall-cmd --query-port=80/tcp`

查看默认区域下的所有富规则
`firewall-cmd --list-rich-rules`

## Firewalld Rich规则的优先级

**日志规则**始终在**拒绝规则**之前发生，**拒绝规则**总是发生在**允许规则**之前。

1. 日志规则
2. drop/reject规则
3. accept规则

## 网络管理策略

### 不指定IP

允许所有ip访问80端口
`firewall-cmd --permanent --add-port=80/tcp`

允许所有ip访问80，443和1024以上的端口

`firewall-cmd --permanent --zone=public --add-port={80/tcp,443/tcp,1024-65535/tcp}`

关闭放行80端口
`firewall-cmd --permanent --remove-port=80/tcp`

### 指定IP（白名单或黑名单）

只允许指定ip访问所有端口
`firewall-cmd --permanent --zone=trusted --add-source=1.12.219.198`

禁止指定IP访问
`firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="1.12.219.198" drop'`

只允许指定ip访问某个端口

`firewall-cmd --permanent --zone=drop --add-rich-rule='rule family="ipv4" source address="1.12.219.198" port protocol="tcp" port="22" accept'`

### 指定IP段（白名单或黑名单）

禁止指定IP段访问

`firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="172.26.0.0/16" drop'`

只允许指定ip段访问某个端口

`firewall-cmd --permanent --zone=drop --add-rich-rule='rule family="ipv4" source address="172.26.0.0/16" port protocol="tcp" port="22" accept`

### 其它

临时允许防火墙伪装IP
`firewall-cmd --add-masquerade`

删除规则
`firewall-cmd --permanent --zone=public --remove-port=3306/tcp`

### 参数说明

* --permanent：表示永久生效，没有此参数表示临时修改，重载后失效

## 参考

[Firewalld的区域（zone）](https://blog.csdn.net/javaldk/article/details/122590998)

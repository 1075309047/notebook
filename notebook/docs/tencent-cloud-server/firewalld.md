---
title: 防火墙设置
date: 2022-05-29
publish: false
---

## 腾讯云服务器防火墙

## linux自带防火墙

安装防火墙
`yum install -y firewalld`

开机自启
`systemctl enable firewalld.service`

立即启动防火墙
`systemctl start firewalld.service`

查看防火墙状态
`systemctl status firewalld.service`

禁用所有入站流量

允许所有出站流量

## 开放常用端口

```linux
firewall-cmd --permanent --zone=public --add-port=80/tcp   # HTTP
firewall-cmd --permanent --zone=public --add-port=443/tcp  # HTTPS
firewall-cmd --permanent --zone=public --add-port=22/tcp   # Linux登录
firewall-cmd --permanent --zone=public --add-port=3389/tcp # Windows登录
firewall-cmd --permanent --zone=public --add-port=3306/tcp # MySQL登录
```

* –permanent 表示永久生效，没有此参数表示临时修改，重载后失效

重载防火墙，更新规则
`firewall-cmd --reload`

删除规则
`firewall-cmd --permanent --zone=public --remove-port=3306/tcp`

临时允许防火墙伪装IP
`firewall-cmd --add-masquerade`

### firewall-cmd 查看规则

查看所有已放行的端口

`firewall-cmd --list-ports`

`firewall-cmd --zone=public --list-ports`

查看所有富规则(rich rules)
`firewall-cmd --list-rich-rules`

查看默认域下的所有规则
`firewall-cmd --list-all`

## 禁止ping

腾讯云控制台->服务器->防火墙

宝塔面板->安全

### firewall-cmd 禁用ping

#### 方法一：rich rule实现禁ping

`firewall-cmd --permanent --add-rich-rule='rule protocol value=icmp drop'`

**注意**：rich rule会完全封堵icmp包，不再允许白名单设置，这是跟rich rule的匹配优先级策略有关！

#### 方法二：通过'icmp-block-inversion'实现禁ping

```linux
# 禁止所有源ping
firewall-cmd --permanent --add-icmp-block-inversion
# 允许1.12.219.198 ping
firewall-cmd --permanent --add-rich-rule='rule family=ipv4 source address="1.12.219.198" icmp-type name="echo-request" accept'
```

## cdn可以保护源ip

## 参考

[firewalld：禁ping设置](https://blog.csdn.net/avatar_2009/article/details/112512819)

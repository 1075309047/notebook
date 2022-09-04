---
title: 防火墙设置
date: 2022-05-29
publish: false
---

## 腾讯云服务器防火墙

## linux firewall-cmd

### 开放常用端口

```linux
firewall-cmd --permanent --zone=public --add-port=80/tcp   # HTTP
firewall-cmd --permanent --zone=public --add-port=443/tcp  # HTTPS
firewall-cmd --permanent --zone=public --add-port=22/tcp   # Linux登录
firewall-cmd --permanent --zone=public --add-port=3389/tcp # Windows登录
firewall-cmd --permanent --zone=public --add-port=3306/tcp # MySQL登录
```

重载防火墙，更新规则
`firewall-cmd --reload`

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

---
title: 使用 Fail2ban 阻止攻击者的暴力登录
date: 2022-05-29
publish: false
---

## 查看尝试登录失败的ip，次数降序

`lastb | awk '{print $3}' | sort | uniq -c | sort -nr`

## 安装 fail2ban

`yum search fail2ban`

CentOS内置源并未包含fail2ban，需要先安装epel源（建议更换腾讯云 Epel 源）

`yum install -y epel-release`

`yum install -y fail2ban`

## fail2ban 设置

```linux
systemctl enable  fail2ban.service
systemctl start   fail2ban.service
systemctl restart fail2ban.service
systemctl status  fail2ban.service
```

## fail2ban 目录结构

```txt
/etc/fail2ban               # fail2ban 服务配置目录
/var/log/fail2ban.log       # fail2ban 日志文件路径
/etc/fail2ban/action.d      # 禁止动作目录，iptables、mail、firewall-cmd 等动作文件
/etc/fail2ban/filter.d      # 过滤规则目录，过滤日志关键内容
/etc/fail2ban/fail2ban.conf # fail2ban 配置文件，定义日志级别、日志、sock 文件位置等
/etc/fail2ban/jail.conf     # fail2ban 防护配置文件
```

## 配置规则

不建议在原配置更改，建议复制一份配置文件
`cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local`

* 修改 jail.local 来覆盖 fail2ban 的一些默认规则
* 因为 .local 新文件里配置的内容会覆盖 .conf 文件里内容相同的值

### 配置文件参数说明

`vim /etc/fail2ban/jail.local`

```markdown
[DEFAULT]
ignoreip = 127.0.0.1 10.0.8.3 1.12.219.198
maxretry = 5
findtime = 1m
bantime  = -1
```

* DEFAULT: 全局设置
* ignoreip: IP白名单，fail2ban不会屏蔽白名单中的IP，空格、/或逗号分隔
* maxretry: 尝试登陆失败的阈值
* findtime: maxretry 更新的时间间隔
* bantime: 被禁秒数，-1永久
* banaction: 屏蔽IP所使用的方法，例如使用firewalld屏蔽端口
* action: 执行的动作，如发送e-mail
* backend: 指定用于获取文件修改的后端。如果您使用的是 CentOS 或 Fedora，则需要将后端设置为 systemd。 对于其他操作系统，默认值 auto 就足够了。

### SSH防止暴力破解

```markdown
[sshd]
enabled = true
filter  = sshd
port    = ssh
logpath = /var/log/secure
```

* sshd: 名称随意
* filter: 过滤规则名称，必须填写位于 filter.d 目录里面的规则，sshd是fail2ban内置规则
* port: 使用sshd服务默认的 22 端口号
* logpath: 需要监视的日志路径

## 常用命令

* 重载fail2ban服务的配置：`fail2ban-client reload`
* 查看fail2ban服务的状态：`fail2ban-client status`
* 查看fail2ban服务对SSH的状态：`fail2ban-client status sshd`
* IP封禁：`fail2ban-client set sshd   banip IP_ADDRESS`
* IP解禁：`fail2ban-client set sshd unbanip IP_ADDRESS`
* 获取当前日志的等级：`fail2ban-client get loglevel`
* 设置当前日志的等级：`fail2ban-client set loglevel LOG_LEVEL`
* 默认 INFO，还有 CRITICAL, ERROR, WARNING, NOTICE, INFO, DEBUG

### fail2ban正则匹配测试工具（验证规则对日志的匹配性）

`fail2ban-regex /var/log/secure /etc/fail2ban/filter.d/sshd.conf --help`

## 参考

[CentOS 7安装fail2ban + Firewalld防止爆破与CC攻击](https://cloud.tencent.com/developer/article/2072020)

[centos7服务器安装fail2ban配合Firewalld防护墙防止SSH爆破与防护网站CC攻击](https://www.cheshirex.com/1979.html)

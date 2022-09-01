---
title: Secure Shell
date: 2022-05-29
---

## 设置 SSH以及SCP 通过密钥认证

### 制作密钥对

`ssh-keygen -t ed25519 -C "1075309047@qq.com"`
`ssh-keygen -o -t rsa -b 4096 -C "root@hostname" -f ~/.ssh/id_rsa`

如果您确实使用密码，请确保添加 -o 选项；它以一种比默认格式更能抵抗暴力破解密码的格式保存私钥。
您还可以使用 ssh-agent 工具来避免每次都必须输入密码。

### 在服务器上安装公钥

`cat id_rsa.pub >> ~/.ssh/authorized_keys`

### 修改权限（仅所有者可读可写）

`chmod 700 ~/.ssh`
`chmod 600 ~/.ssh/authorized_keys`

## SSH 配置

`sudo vim /etc/ssh/sshd_config`

```markdown
Port 22                     # 更改 ssh 端口，默认为22
PermitRootLogin no          # ssh 允许root登录，默认为yes
PasswordAuthentication no   # ssh 允许密码登录，默认为yes
RSAAuthentication yes       # 启用 RSA 认证，默认为yes
PubkeyAuthentication yes    # 启用公钥认证，默认为yes
```

注意：腾讯云服务器控制台的远程登录使用默认 ssh 端口。
注意：为了保证你不会失联，请不要关闭当前的 ssh 登录窗口！而是另外开一个窗口来测试！

## 重启 SSH 服务

`systemctl restart sshd`

## 参考

<https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key>
<https://www.runoob.com/w3cnote/set-ssh-login-key.html>

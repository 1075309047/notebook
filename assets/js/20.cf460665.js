(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{412:function(e,a,r){"use strict";r.r(a);var t=r(2),l=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"firewalld-初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewalld-初始化"}},[e._v("#")]),e._v(" Firewalld 初始化")]),e._v(" "),a("h3",{attrs:{id:"安装-firewalld"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-firewalld"}},[e._v("#")]),e._v(" 安装 Firewalld")]),e._v(" "),a("p",[e._v("安装防火墙\n"),a("code",[e._v("yum install -y firewalld")])]),e._v(" "),a("h3",{attrs:{id:"设置-firewalld"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-firewalld"}},[e._v("#")]),e._v(" 设置 Firewalld")]),e._v(" "),a("p",[e._v("开机自启\n"),a("code",[e._v("systemctl enable firewalld.service")])]),e._v(" "),a("p",[e._v("立即启动防火墙\n"),a("code",[e._v("systemctl start firewalld.service")])]),e._v(" "),a("p",[e._v("查看防火墙状态\n"),a("code",[e._v("systemctl status firewalld.service")])]),e._v(" "),a("h2",{attrs:{id:"firewalld-的区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewalld-的区域"}},[e._v("#")]),e._v(" Firewalld 的区域")]),e._v(" "),a("h3",{attrs:{id:"查看区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看区域"}},[e._v("#")]),e._v(" 查看区域")]),e._v(" "),a("p",[e._v("查看所有区域\n"),a("code",[e._v("firewall-cmd --get-zones")])]),e._v(" "),a("p",[e._v("查看默认区域\n"),a("code",[e._v("firewall-cmd --get-default-zone")])]),e._v(" "),a("h3",{attrs:{id:"修改区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改区域"}},[e._v("#")]),e._v(" 修改区域")]),e._v(" "),a("p",[e._v("修改默认区域为drop（禁用所有）\n"),a("code",[e._v("firewall-cmd --set-default-zone=drop")])]),e._v(" "),a("h3",{attrs:{id:"区域说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区域说明"}},[e._v("#")]),e._v(" 区域说明")]),e._v(" "),a("ul",[a("li",[e._v("public：仅允许访问本机的sshd、ping、dhcp服务")]),e._v(" "),a("li",[e._v("trusted：允许任何访问")]),e._v(" "),a("li",[e._v("block：阻塞任何来访请求（明确拒绝，有回应客户端）")]),e._v(" "),a("li",[e._v("drop：丢弃任何来访的数据包（直接丢弃，没有回应客户端），节省服务器资源")])]),e._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),a("p",[e._v("显示防火墙状态\n"),a("code",[e._v("firewall-cmd --state")])]),e._v(" "),a("p",[e._v("重载防火墙，更新规则\n"),a("code",[e._v("firewall-cmd --reload")])]),e._v(" "),a("h2",{attrs:{id:"查看规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看规则"}},[e._v("#")]),e._v(" 查看规则")]),e._v(" "),a("p",[e._v("查看所有区域配置\n"),a("code",[e._v("firewall-cmd --list-all-zones")])]),e._v(" "),a("p",[e._v("查看public区域的所有规则\n"),a("code",[e._v("firewall-cmd --zone=public --list-all")])]),e._v(" "),a("p",[e._v("查看默认区域下的所有规则\n"),a("code",[e._v("firewall-cmd --list-all")])]),e._v(" "),a("p",[e._v("查看默认区域下的所有已放行端口\n"),a("code",[e._v("firewall-cmd --list-ports")])]),e._v(" "),a("p",[e._v("查看默认区域下指定的端口是否放开\n"),a("code",[e._v("firewall-cmd --query-port=80/tcp")])]),e._v(" "),a("p",[e._v("查看默认区域下的所有富规则\n"),a("code",[e._v("firewall-cmd --list-rich-rules")])]),e._v(" "),a("h2",{attrs:{id:"firewalld-rich规则的优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewalld-rich规则的优先级"}},[e._v("#")]),e._v(" Firewalld Rich规则的优先级")]),e._v(" "),a("p",[a("strong",[e._v("日志规则")]),e._v("始终在"),a("strong",[e._v("拒绝规则")]),e._v("之前发生，"),a("strong",[e._v("拒绝规则")]),e._v("总是发生在"),a("strong",[e._v("允许规则")]),e._v("之前。")]),e._v(" "),a("ol",[a("li",[e._v("日志规则")]),e._v(" "),a("li",[e._v("drop/reject规则")]),e._v(" "),a("li",[e._v("accept规则")])]),e._v(" "),a("h2",{attrs:{id:"网络管理策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络管理策略"}},[e._v("#")]),e._v(" 网络管理策略")]),e._v(" "),a("h3",{attrs:{id:"不指定ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不指定ip"}},[e._v("#")]),e._v(" 不指定IP")]),e._v(" "),a("p",[e._v("允许所有ip访问80端口\n"),a("code",[e._v("firewall-cmd --permanent --add-port=80/tcp")])]),e._v(" "),a("p",[e._v("允许所有ip访问80，443和1024以上的端口")]),e._v(" "),a("p",[a("code",[e._v("firewall-cmd --permanent --zone=public --add-port={80/tcp,443/tcp,1024-65535/tcp}")])]),e._v(" "),a("p",[e._v("关闭放行80端口\n"),a("code",[e._v("firewall-cmd --permanent --remove-port=80/tcp")])]),e._v(" "),a("h3",{attrs:{id:"指定ip-白名单或黑名单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定ip-白名单或黑名单"}},[e._v("#")]),e._v(" 指定IP（白名单或黑名单）")]),e._v(" "),a("p",[e._v("只允许指定ip访问所有端口\n"),a("code",[e._v("firewall-cmd --permanent --zone=trusted --add-source=1.12.219.198")])]),e._v(" "),a("p",[e._v("禁止指定IP访问\n"),a("code",[e._v('firewall-cmd --permanent --add-rich-rule=\'rule family="ipv4" source address="1.12.219.198" drop\'')])]),e._v(" "),a("p",[e._v("只允许指定ip访问某个端口")]),e._v(" "),a("p",[a("code",[e._v('firewall-cmd --permanent --zone=drop --add-rich-rule=\'rule family="ipv4" source address="1.12.219.198" port protocol="tcp" port="22" accept\'')])]),e._v(" "),a("h3",{attrs:{id:"指定ip段-白名单或黑名单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定ip段-白名单或黑名单"}},[e._v("#")]),e._v(" 指定IP段（白名单或黑名单）")]),e._v(" "),a("p",[e._v("禁止指定IP段访问")]),e._v(" "),a("p",[a("code",[e._v('firewall-cmd --permanent --add-rich-rule=\'rule family="ipv4" source address="172.26.0.0/16" drop\'')])]),e._v(" "),a("p",[e._v("只允许指定ip段访问某个端口")]),e._v(" "),a("p",[a("code",[e._v('firewall-cmd --permanent --zone=drop --add-rich-rule=\'rule family="ipv4" source address="172.26.0.0/16" port protocol="tcp" port="22" accept')])]),e._v(" "),a("h3",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[e._v("#")]),e._v(" 其它")]),e._v(" "),a("p",[e._v("临时允许防火墙伪装IP\n"),a("code",[e._v("firewall-cmd --add-masquerade")])]),e._v(" "),a("p",[e._v("删除规则\n"),a("code",[e._v("firewall-cmd --permanent --zone=public --remove-port=3306/tcp")])]),e._v(" "),a("h3",{attrs:{id:"参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[e._v("#")]),e._v(" 参数说明")]),e._v(" "),a("ul",[a("li",[e._v("--permanent：表示永久生效，没有此参数表示临时修改，重载后失效")])]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/javaldk/article/details/122590998",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firewalld的区域（zone）"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=l.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{418:function(s,t,a){"use strict";a.r(t);var e=a(2),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"添加用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加用户"}},[s._v("#")]),s._v(" 添加用户")]),s._v(" "),t("p",[t("code",[s._v("useradd lzc")])]),s._v(" "),t("h2",{attrs:{id:"切换用户-su和su"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换用户-su和su"}},[s._v("#")]),s._v(" 切换用户（su和su -）")]),s._v(" "),t("p",[t("code",[s._v("su username")])]),s._v(" "),t("p",[s._v("su 命令只是切换用户身份，获得了用户的执行权限，不能获得环境变量，Shell环境仍然是之前用户的Shell。")]),s._v(" "),t("p",[t("code",[s._v("su - username")])]),s._v(" "),t("p",[s._v("su - 命令是切换用户身份，获得了用户的执行权限及用户的环境变量，用户和Shell环境一起切换")]),s._v(" "),t("ul",[t("li",[s._v("不加用户是默认切到 root 用户。")]),s._v(" "),t("li",[s._v("只有切换了Shell环境才不会出现PATH环境变量错误。（验证：pwd，echo $PATH）")])]),s._v(" "),t("h2",{attrs:{id:"修改强密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改强密码"}},[s._v("#")]),s._v(" 修改强密码")]),s._v(" "),t("h2",{attrs:{id:"添加sudoers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加sudoers"}},[s._v("#")]),s._v(" 添加sudoers")]),s._v(" "),t("p",[t("code",[s._v("sudo vim /etc/sudoers")])]),s._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[t("span",{pre:!0,attrs:{class:"token title important"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v(" sudo 需密")]),s._v("\nlighthouse ALL=(ALL) ALL\n"),t("span",{pre:!0,attrs:{class:"token title important"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v(" sudo 免密")]),s._v("\nlzc        ALL=(ALL) NOPASSWD:ALL\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"解决-sudoers-中的用户频繁的执行-sudo-命令提权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决-sudoers-中的用户频繁的执行-sudo-命令提权"}},[s._v("#")]),s._v(" 解决 sudoers 中的用户频繁的执行 sudo 命令提权")]),s._v(" "),t("p",[t("code",[s._v("sudo -i")])]),s._v(" "),t("p",[t("code",[s._v("sudo su")])]),s._v(" "),t("p",[s._v("运行 sudo 命令给 su 命令提权，默认是切到 root 用户")])])}),[],!1,null,null,null);t.default=r.exports}}]);
疑难杂症
========
ubuntu14.04 x64 所遇问题和解决方法
---------------------------------

**显示隐藏文件**

众所周知linux下文件及文件夹名以点开头视为隐藏文件，在终端下可以使用`ls -a`显示,但是在Nautilus文件管理器中默认也是不显实的，此时可以使用组合键`ctrl + H`来查看隐藏文件。

**ibus-pinyin双拼现象**

出现此问题，只需要将ibus手动重启一下就OK了，命令如下：
    将属性里的双拼关掉然后

    ibus-daemon -drx

**双系统开机进入grub现象的解决方法**

装完双系统开机出现如下提示行：

    grub >

 使用如下方式修复成功：

    ls （hd0,xxx)/boot/grub    #通过ls命令找出grub所在分区
    set root=(hd0,xxx)/boot/grub
    set prefix=(hd0,xxx)/boot/grub
    insmod normal
    normal
    开机进入ubuntu后修复引导
    sudo update-grub
    sudo grub-install /dev/sda

**以root身份登陆ubuntu**

ubuntu默认禁止使用root身份。

找到/usr/share/lightdm/lightdm.conf.d/50-unity-greeter.conf中添加下列两行后重启

    greeter-show-manual-login=true
    allow-guest=false
**创建wifi热点**

https://github.com/oblique/create_ap

**ubuntu中好用的一些软件**

- chromium 谷歌浏览器
- Okular 这是个pdf阅读器
- Terminalor 多个terminal
- Guake Terminal 下拉终端
- 网易云音乐 全平台
- 为知笔记 全平台
- wireshark
- 有道词典
- gimp 画图工具
- FileZilla ftp工具
- atom
- calculator 计算器

centos7 所遇问题和解决方法
---------------------------------
**修改IP地址**

`/etc/sysconfig/network-scripts/ifcfg-xxx`

**安装ifconfig命令**

`yum install net-tools`

**查看块设备**

`lsblk`

**关闭selinux**

修改`/etc/selinux/config` 文件

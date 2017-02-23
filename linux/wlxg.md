netstat, ifconfig, scp
=================

netstat命令
---------------

**常用格式：**



    netstat -tnp

**更多参数：**

- -a (all)显示所有选项，默认不显示LISTEN相关
- -t (tcp)仅显示tcp相关选项
- -u (udp)仅显示udp相关选项
- -n 拒绝显示别名，能显示数字的全部转化成数字。
- -l 仅列出有在 Listen (监听) 的服務状态
- -p 显示建立相关链接的程序名
- -r 显示路由信息，路由表
- -e 显示扩展信息，例如uid等
- -s 按各个协议进行统计
- -c 每隔一个固定时间，执行该netstat命令。



ifconfig命令
--------------

**修改MAC地址**



    ifconfig eth0 down
    ifconfig eth0 hw ether XX:XX:XX:XX:XX;XX
    /sbin/ifconfig eth0 up

**修改IP地址**



    ifconfig eth0 192.168.1.2 netmask 255.255.255.0

**修改网关**



    route add default gw 192.168.1.1

scp命令
----------

**上传**



    scp -r dir root@192.168.1.56:/dir    -r表示递归

**下载**



    scp username@192.168.1.56:/path/filename  /tmp/local_destination

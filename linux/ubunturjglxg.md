apt-get, dpkg
====================
apt-get
-------
apt-get命令可以在线安装软件 镜像源列表在`/etc/apt/sources.list `
网易提供的镜像地址：[http://mirrors.163.com](http://mirrors.163.com)

***

相关命令：

- 搜索
    - `apt-cache depends package`——了解使用依赖
    - `apt-cache search package`——在镜像源中搜索包 
    - `apt-cache show package`——获取包的相关信息，如说明、大小、版本等 
    - `apt-cache rdepends package`——查看该包被哪些包依赖
- 安装
    - `apt-get install package`——安装包 
    - `apt-get install package - - reinstall`——重新安装 
    - `apt-get -f install`——修复安装 
- 删除
    - `apt-get remove package`——删除包
    - `apt-get remove package - - purge`——删除包，包括删除配置文件等
- 更新
    - `apt-get update`——更新源 
    - `apt-get upgrade`——更新已安装的包
    - `apt-get dist-upgrade`——升级系统
- 其他
    - `apt-get build-dep package`——安装相关的编译环境
    - `apt-get source package`——下载该包的源代码
    - `apt-get clean && sudo apt-get autoclean`——清理无用的包
    - `apt-get check`——检查是否有损坏的依赖

dpkg
----

deb文件是debain，ubuntu的软件包格式，很多情况下需要直接使用deb包。

很好的软件包下载地址：

1. ubuntu的官方下载地址：[http://packages.ubuntu.com/](http://packages.ubuntu.com/)

2. 基本涵盖各大发行版的软件包：[http://pkgs.org/](http://pkgs.org/)

***

相关命令：



- 搜索

    - `dpkg -l`——列出当前系统中所有的包
    - `dpkg -L package`——查询系统中已安装的软件包所安装的位置.
    - `dpkg -S package`——查询系统中某个文件属于哪个软件包. 
    - `dpkg -s package`——查询已安装的包的详细状态信息.
    - `dpkg --info package`——列出软件包解包后的包名称.

- 安装
    - `dpkg -i package`——手动安装软件包.

- 卸载
    - `dpkg -r  package`——卸载软件包.不是完全的卸载,它的配置文件还存在.
    - `dpkg -P package`——强制卸载.

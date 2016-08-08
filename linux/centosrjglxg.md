centos软件管理(yum, rpm)
=================
yum
--------
yum命令可以在线安装软件 镜像源列表在`etc/yum.repos.d/CentOS-Base.repo`

网易提供的镜像地址：[http://mirrors.163.com](http://mirrors.163.com)
***
相关命令：

- 搜索：

  - `yum info package`——显示安装包信息package
  - `yum list`——显示所有已经安装和可以安装的程序包
  - `yum list package`——显示指定程序包安装情况package
  - `yum groupinfo group`——显示程序组group信息

  - `yum search string`——根据关键字string查找安装包

- 安装：

  - `yum install package`——安装指定的安装包package

  - `yum groupinsall group`——安装程序组group

- 删除：

  - `yum remove package或 yum erase package`——删除程序包package

  - `yum groupremove group`——删除程序组group
  - `yum deplist package`——查看程序package依赖情况

- 更新：

  - `yum update`——全部更新

  - `yum update package`——更新指定程序包package

  - `yum check update`——检查可更新的程序

  - `yum upgrade package`——升级指定程序包package

  - `yum groupupdate group`——升级程序组group 

- 其他：

  - `yum clean packages`——清除缓存目录下的软件包
  - `yum clean headers`——清除缓存目录下的 headers
  - `yum clean oldheaders`——清除缓存目录下旧的 headers
  - `yum clean all`——清除缓存目录下的软件包及旧的headers




rpm
--------
rpm文件是redhat，centos的软件包格式，很多情况下需要直接使用rpm包。

很好的软件包下载地址：

基本涵盖各大发行版的软件包：[http://pkgs.org/](http://pkgs.org/)

***

相关命令：

- `rpm -i package`——安装指定的 rpm 文件
- `rpm -e package`——删除指定的软件包
- `rpm -U package`——用指定的 rpm 文件升级同名包
- `rpm -q package`——查询指定的软件包在系统中是否安装

 

其中查询还有详细的命令，如下:
- `rpm -qf </path/to/file>`——查询系统中指定文件所属的软件包 
- `rpm -qa`——查询系统中安装的所有RPM软件包

- `rpm -V package`——校验指定的软件包 



以下命令加上-p参数便是未安装

- `rpm -ql package`——查询一个已安装软件包里所包含的文件
- `rpm -qc package`——查看一个已安装软件包的配置文件位置 
- `rpm -qi package`——查询一个已安装软件包的描述信息 
- `rpm -qd package`——查看一个已安装软件包的文档安装位置
- `rpm -qR package`——查询一个已安装软件包的最低依赖要求 

python配置
==================
中文问题
------------------
* 文件中包含中文需要在首行加上 ``# -*- coding: UTF-8 -*-``
* 设置python默认编码方式::
 
    import sys
    reload(sys)
    sys.setdefaultencoding('utf-8')

python2 Tab自动补全
-----------------------------
cli::

    import rlcompleter, readline
    readline.parse_and_bind('tab: complete')


.. NOTE:: 

    开机生效：将配置信息写入~/.pystartup

    在.bashrc中添加 ``export PYTHONSTARTUP=~/.pystartup``

修改镜像源
----------------------------
/etc/pip.conf::

    [global]
    index-url = https://pypi.tuna.tsinghua.edu.cn/simple #清华大学镜像源

`可选镜像源 <https://pypi-mirrors.org/>`_
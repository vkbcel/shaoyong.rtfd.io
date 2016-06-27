未完待续
===============
java环境安装
------------------

.bashrc::

    export JAVA_HOME=/usr/lib/jre
    export CLASSPATH=$JAVA_HOME/lib
    export PATH=.:$JAVA_HOME/bin:$PATH

fcitx图形无法输入问题
--------------------------
::

    export XMODIFIERS="@im=fcitx"
    export GTK_IM_MODULE="fcitx"
    export QT_IM_MODULE="fcitx"

vim配置
--------------------
.vimrc::

    set number    "显示行号"
    set tabstop=4    "一个tab占4个字符"
    set shiftwidth=4    "自动缩进占4个字符"
    set ignorecase smartcase    "搜索时忽略大小写"
    set expandtab  "用空格代替tab"

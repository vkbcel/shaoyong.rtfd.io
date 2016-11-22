python虚拟环境
==============
管理工具virtualenvwrapper
-------------------------
.bashrc

    export WORKON_HOME='~/Envs'
    . /usr/local/bin/virtualenvwrapper.sh

使用

    mkvirtualenv env1  #创建环境
    workon env1 #切换环境
    workon #列出已有环境
    deactivate #退出环境
    rmvirtualenv env1 #删除环境

默认安装ipython

    echo 'pip install ipython' >> $WORKON_HOME/postmkvirtualenv
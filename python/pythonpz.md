python配置
==========
**中文编码问题**

源码中如果有中文：

    # -*- coding: UTF-8 -*-
设置python默认编码方式：

    import sys
    reload(sys)
    sys.setdefaultencoding('utf-8')

ubuntu下python的第三方模块位置：/usr/local/lib/python2.7/dist-packages/

**python2 Tab自动补全**

    import rlcompleter, readline
    readline.parse_and_bind('tab: complete')


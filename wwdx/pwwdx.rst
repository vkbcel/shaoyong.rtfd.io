python
=============

re模块
-------------

* ``re.escape`` 返回字符串，所有非字母数字都会加上反斜杠
以下代码来自django::

    BLOCK_TAG_START = '{%'
    BLOCK_TAG_END = '%}'
    VARIABLE_TAG_START = '{{'
    VARIABLE_TAG_END = '}}'
    COMMENT_TAG_START = '{#'
    COMMENT_TAG_END = '#}'

    tag_re = (re.compile('(%s.*?%s|%s.*?%s|%s.*?%s)' %
               (re.escape(BLOCK_TAG_START), re.escape(BLOCK_TAG_END),
               re.escape(VARIABLE_TAG_START), re.escape(VARIABLE_TAG_END),
               re.escape(COMMENT_TAG_START), re.escape(COMMENT_TAG_END))))

* 匹配规则默认为贪婪模式
非贪婪模式写法 ``*?`` ``+?`` ``??`` ``{m,n}?``

操作excel
-------------
python提供了标准库csv，直接操作excel可以用以下第三方库

.. csv-table:: 相关库
   :header: "库名", "说明", "文档"
   :widths: 15, 70, 15

   "openpyxl","读写xlsx",`Documentation <https://openpyxl.readthedocs.org/>`_
   "xlsxwriter","更强大的写xlsx能力，不能读和修改",`Documentation <https://xlsxwriter.readthedocs.org/>`_
   "xlrd","读xls",`Documentation <http://xlrd.readthedocs.io/en/latest/>`_
   "xlwt","写xls",`Documentation <http://xlwt.readthedocs.io/en/latest/>`_
   "xlutils","依赖xlrd和xlwt，提供复制、修改、过滤的能力",`Documentation <http://xlutils.readthedocs.io/en/latest/>`_

编码声明
--------------
官方推荐形式::

    # -*- coding: <encoding-name> -*-
    # -*- coding: utf-8 -*-


sphinx语法
==============
章节
^^^^^^^^^^
::

    小章节
    ===============
    子章节
    ---------------
    子章节的子章节
    ^^^^^^^^^^^^^^^^^^^^^^^^^
    段落
    """""""""""""""""""""""""

内联标记
^^^^^^^^^^^^^
::

    *斜体*
    **加粗**
    ``代码样式``

**粗** *斜* ``代码``

注解、警告
^^^^^^^^^^^
::

    .. NOTE::

        warning

.. NOTE::

    其他可用指令：WARNING ERROR IMPORTANT HINT...

列表
^^^^^^^^^^^
::

    有序列表
    #. first 
    #. second
    无序列表
    * first
        * first.1
        * first.2
    * second

#. first
#. second

* first
    * first.1
    * first.2
* second

代码框
^^^^^^^^^^^^^^
This is a normal text paragraph. The next paragraph is a code sample::

    This is a normal text paragraph. The next paragraph is a code sample::

        It is not processed in any way, except
        that the indentation is removed.

        It can span multiple lines.

    This is a normal text paragraph again.

This is a normal text paragraph again.

表格
^^^^^^^^^^^^^
::

    .. csv-table:: 表格名
       :header: "第一列", "第二列", "第三列"
       :widths: 15, 10, 30

       "Albatross", 2.99, "On a stick!"
       "Crunchy Frog", 1.49, "If we took the bones out, it wouldn't be
       crunchy, now would it?"
       "Gannet Ripple", 1.99, "On a stick!" 
    
.. csv-table:: 表格名 
   :header: "第一列", "第二列", "第三列"
   :widths: 15, 10, 30

   "Albatross", 2.99, "On a stick!"
   "Crunchy Frog", 1.49, "If we took the bones out, it wouldn't be
   crunchy, now would it?"
   "Gannet Ripple", 1.99, "On a stick!" 

超链接
^^^^^^^^^^^^^^
::

    `shaoyong's rtfd <http://shaoyong.rtfd.io>`_

`shaoyong's rtfd <http://shaoyong.rtfd.io>`_

侧边栏
^^^^^^^^^^^^^^
.. sidebar:: 栏名称

    内容

::

    .. sidebar:: 栏名称

        内容

图片
^^^^^^^^^^
.. image:: test.jpg
   :height: 100px
   :width: 200 px
   :scale: 65 %
   :alt: alternate text
   :align: right

::

   .. image:: test.jpg
      :height: 100px
      :width: 200 px
      :scale: 65 %
      :alt: alternate text
      :align: right

包含原生html
^^^^^^^^^^^^^^^^^^^^^^^
::

    .. raw:: html

       <hr width=50 size=10>
    or
    .. raw:: html
       :file: inclusion.html

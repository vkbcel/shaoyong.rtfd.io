html & js
=============
html
-------------

让IE默认使用最高版本内核解析::

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

下载文件名乱码问题::

    Content-Disposition: 'attachment; filename=%s.xls; filename*=utf-8\'\'%s.xls' % (
    urlquote(filename), urlquote(filename)) #django写法, 文件名使用url编码

css
-------------

长单词内部换行::

    word-wrap

js
-------------


浏览器兼容
-------------

* IE8及以下数组不支持indexof
* IE6/7不支持inline-block
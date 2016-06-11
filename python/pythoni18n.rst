python国际化
====================
i18n.py::

    #coding:utf-8
    import gettext
    zh = gettext.translation('lang', 'locale', languages=['zh_Tans'])
    zh.install()
    _ = zh.gettext
    print _(u'密码')

使用 ``xgettext i18n.py`` 生成messages.po,放入 ``locale/zh_Tans/LC_MESSAGES`` 文件夹更名lang.po

使用 ``msgfmt lang.po`` 生成messages.mo更名为lang.mo

目录结构
::

    ├── i18n.py
    └── locale
        └── zh_Tans
            └── LC_MESSAGES
                ├── lang.mo
                └── lang.po



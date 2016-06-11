python国际化
============
文件内容
::
    #coding:utf-8
    import gettext
    zh = gettext.translation('lang', 'locale', languages=['zh_Tans'])
    zh.install()
    _ = zh.gettext
    print _(u'密码')

使用xgettext i18n.py生成messages.po,放入locale/zh_Tans/LC_MESSAGES文件夹更名lang.po
使用msgfmt lang.po生成messages.mo更名为lang.mo
目录结构
::
    ├── i18n.py
    └── locale
        └── zh_Tans
            └── LC_MESSAGES
                ├── lang.mo
                └── lang.po



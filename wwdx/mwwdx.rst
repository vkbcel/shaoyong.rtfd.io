mysql
=============
2016 Jul
-------------
function
^^^^^^^^^^^^^

show function status;

show create function ×××;

select xxx;

备份
^^^^^^^^^^^^^

* 导出数据库------结构+数据
::

  mysqldump -uroot -pxxxxxx db_name >xxx.sql

常用参数：

* ``-R`` 包括函数+存储过程
* ``--no-data`` 只导出结构
* ``--no-create-info`` 只导出数据

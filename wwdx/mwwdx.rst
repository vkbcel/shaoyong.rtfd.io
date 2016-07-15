mysql
=============
2016 Jul
-------------
function
^^^^^^^^^^^^^

show function status;

show create function ×××;

select xxx;


* 创建函数需要开启
::

  set global log_bin_trust_function_creators=1;
  show variables like '%func%'; #查看变量

备份
^^^^^^^^^^^^^

* 导出数据库------结构+数据
::

  mysqldump -uroot -pxxxxxx db_name >xxx.sql

常用参数：

* ``-R`` 包括函数+存储过程
* ``--no-data`` 只导出结构
* ``--no-create-info`` 只导出数据


创建用户
^^^^^^^^^^^^^^^^^^^^^^

::

  CREATE USER 'tc'@'localhost' IDENTIFIED BY '123456';
  GRANT ALL ON database_name.table_name TO 'tc'@'localhost';   #赋予权限 ALL/

tar, zip, rar
=======================
tar命令
---------

**常用参数：**

  - -c : 创建一个归档文件

  - -x : 解开一个归档文件

  - -t : 查看tar包中的文件

  - -v : 压缩过程中显示文件

  - -f : 指定压缩包的名称

  - --exclude FILE : 压缩过程中忽略FILE文件



**归档的同时可以压缩，只需添加下列参数：**

  - -z : gzip类型的压缩，生成的后缀为`.tar.gz`

  - -j : bzip2类型的压缩，生成的后缀为`.tar.bz2`

  - -J : xz类型的压缩，生成的后缀为`.tar.xz`

压缩::

    tar czf foobar.tar.gz dir

解压::

    tar xvf foobar.tar.gz

zip命令
---------

    zip -r myfile.zip ./* 

将当前目录下的所有文件和文件夹压缩成myfile.zip， -r表示递归操作



    unzip -d /home/shao myfile.zip  # -d表示解压到/home/shao目录

rar命令
----------

    rar a myfile ./* 

将当前目录下的所有文件和文件夹压缩成myfile.rar



    unrar e myfile.rar 

e表示解压到当前目录，要指定目录使用x

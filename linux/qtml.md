其他命令
=======
**根据inode号删除文件**

    ls -i   查看inode号

    find ./ -inum xxx -exec rm -i {} /;

**删除指定文件外的其他文件**

    ls | grep -v keep | xargs rm

**代码量统计**

    cloc dir

**十六进制查看文件**
在vim中尾行模式：

    :%!xxd #取消 :%!xxd -r

还有一个hexdump命令，使用格式：

    hexdump -Cv filename

*注意*：不使用大C选项，输出结果会很奇怪

**追踪文件内容**

    tail -f filename

**查询公网IP**

    curl ifconfig.me

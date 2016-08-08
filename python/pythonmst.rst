python面试题
============
求字符串“这是一个test字符串”的中文字符个数，字符编码为utf8
----------------------------------------------------------------------
python代码::

    str = '这是一个test字符串'
    el= re.compile(r'\w+').findall(str)
    sum = 0
    for s in el:
        sum += len(s)
    len(str.decode('utf-8')) - sum

一个list对象：a=[1,2,4,3,2,2,4],去掉重复值
--------------------------------------------
python代码::

    list(set(a))

文件test.txt,里面一共5行4列数据，最后一列为日期，请按日期从小到大对数据进行排列
--------------------------------------------------------------------------------------------
test.txt内容::

    1 test 100 2012-04-18 
    2 aaa 123 2012-04-19 
    3 bbb 333 2012-04-18 
    4 ccc 211 2012-04-17 
    5 ddd 334 2012-04-16
python代码::

    ls = open('test.txt','r').readlines()
    ls.sort(lambda x,y: cmp(x.split()[3],y.split()[3]))

实现一个二叉排序树
----------------------------------
python代码::

    class Node:
        def __init__(self, data):
            self.data = data
            self.left = None
            self.right = None

        def insert(self, data):
            if data == self.data:
                return

            elif data < self.data:
                if self.left is None:
                    self.left = Node(data)
            else:
                self.left.insert(data)
            else:
                if self.right is None:
                    self.right = Node(data)
                else:
                    self.right.insert(data)

一个10万行数据的文本文件test.txt，输出最后10行
-------------------------------------------------------------
python代码::

    linecache.getlines('test.txt')[-10:]

实现一个扑克牌(52张)的洗牌算法
---------------------------------------------
python代码::

    p = [1,2,3,4,5,6,7,8,9,10]
    random.shuffle(p)
    print p



字符串操作
---------------------------

**查找**::

    string.find(s, sub[, start[, end]]) #失败返回-1
    string.index(s, sub[, start[, end]]) #失败抛出异常ValueError

**替换**::

    string.replace(s, old, new[, maxreplace])

对象拷贝
-------------------------
python代码::

    import copy
    a = [1, 2, 3, 4, ['a', 'b']] #原始对象
    b = a #赋值，传对象的引用
    c = copy.copy(a) #对象拷贝，浅拷贝
    d = copy.deepcopy(a) #对象拷贝，深拷贝
    a.append(5) #修改对象a
    a[4].append('c') #修改对象a中的['a', 'b']数组对象
    print 'a = ', a
    print 'b = ', b
    print 'c = ', c
    print 'd = ', d

输出结果::

    a = [1, 2, 3, 4, ['a', 'b', 'c'], 5] 
    b = [1, 2, 3, 4, ['a', 'b', 'c'], 5] 
    c = [1, 2, 3, 4, ['a', 'b', 'c']] 
    d = [1, 2, 3, 4, ['a', 'b']]



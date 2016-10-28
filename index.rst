.. demo documentation master file, created by
   sphinx-quickstart on Mon May 23 13:39:15 2016.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

python::

    print'\n'.join([''.join([('ILoveYou@'[(x-y)%9]if((x*0.05)**2+(y*0.1)**2-1)**3-(x*0.05)**2*(y*0.1)**3<=0 else' ')for x in range(-30,30)])for y in range(15,-15,-1)])


.. raw:: html
   :file: home.html


.. toctree::
   :hidden:

   linux/linux
   python/python
   wangzhi
   wwdx/wwdx

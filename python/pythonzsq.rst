python装饰器
============
带参
::

    def route(self, url, **kargs):

        def wrapper(handler):
            self.add_route(url, handler, **kargs)
            return handler
        return wrapper

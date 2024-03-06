# -*- coding: utf-8 -*-
import os, sys
sys.path.insert(0, '/home/a/aosipo14/estvel.ru/estvel-django')
sys.path.insert(1, '/home/a/aosipo14/estvel.ru/venv/lib/python3.10/site-packages/')
os.environ['DJANGO_SETTINGS_MODULE'] = 'main.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()

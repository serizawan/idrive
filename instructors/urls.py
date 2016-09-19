from django.conf.urls import url
from . import views

app_name='instructors'

urlpatterns = [
    url(r'^instructors/$', views.index, name='welcome')
]

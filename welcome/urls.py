from django.conf.urls import url
from . import views

app_name='welcome'

urlpatterns = [
        url(r'^$', views.index, name='index'),
        url(r'^teams/(?P<first_name>[\w]+)_(?P<last_name>[\w]+)/$', views.profile, name='profile')
]

from django.conf.urls import url
from . import views

app_name='students'

urlpatterns = [
        url(r'^login/$', views.login_authentication, name='login'),
        url(r'^register/$', views.register, name='register'),
        url(r'^mycalendar/$', views.my_calendar, name='my_calendar')
]

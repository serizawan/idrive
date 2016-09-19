import json

from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User

def login_authentication(request):
    response_data = {}
    if request.method == "POST":
        user = authenticate(
            username=request.POST.get('username').lower(),
            password=request.POST.get('password')
        )
        if user is not None:
            if user.is_active:
                response_data= {'status': 'success', 'message': 'logged on'}
                login(request, user)
                return my_calendar(request)
            else:
                response_data = {'status': 'failure', 'message': 'you are suspended'}
        else:
            response_data = {'status': 'failure', 'message': 'wrong username or password'}
        return HttpResponse(json.dumps(response_data), content_type="application/json")
    else:
        response_data = {'status': failure, 'message': 'Not acceptable request made'}
        return response_data

def register(request):
    response_data = {}
    if request.method == 'POST':
        user = User.objects.create_user(username=request.POST.get('username'),
                                        email=request.POST.get('email'),
                                        password=request.POST.get('password'))
        response_data = {'status': 'success', 'message': 'New user registered'}
    else:
        response_data = {'status': 'failure', 'message': 'Not acceptable request made'}
    return HttpResponse(json.dumps(response_data), content_type="application/json")


@login_required
def my_calendar(request):
    return render(request, 'students/mycalendar.html')

from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.http import HttpResponse, Http404

def index(request):
    return HttpResponse("Hello instructor!")

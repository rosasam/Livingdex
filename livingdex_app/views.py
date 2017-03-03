from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    #return HttpResponse("Hello, world. You're at the livingdex start page.")
    return render(request, 'base.html')

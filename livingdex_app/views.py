from django.http import HttpResponse, HttpResponseForbidden
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.decorators import login_required, user_passes_test
from django.conf import settings
from livingdex_app.models import *

def index(request):
    return HttpResponse("Hello, world. You're at the livingdex start page.")

def livingdex(request):
    return render(request, 'grid.html')

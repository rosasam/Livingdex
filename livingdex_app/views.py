from django.http import HttpResponse, HttpResponseForbidden
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.decorators import login_required, user_passes_test
from django.conf import settings
from livingdex_app.models import *
from django.contrib.staticfiles.templatetags.staticfiles import static
import json

def index(request):
    return render(request, 'base.html')

def livingdex(request):
    return render(request, 'grid.html')

def pokemons(request):
    url = static('images/pokemon-icons/149.png')
    pokemons = Pokemon.objects.all()
    data = {}
    for pokemon in pokemons:
        number = pokemon.nationaldex
        data[number] = {
            'name': pokemon.name
            'url': (static('images/pokemon-icons/%d.png' % number)),
            'caught': pokemon.caught
        }

    return HttpResponse(json.dumps(data))

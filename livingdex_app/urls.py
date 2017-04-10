from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^livingdex/', views.livingdex),
    url(r'^pokemons/', views.pokemons, name='pokemons'),
]

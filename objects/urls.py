from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('thank_you', views.thank_you, name='thank_you'),
]
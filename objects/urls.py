from django.urls import path
from . import views

urlpatterns = [
    path('', views.contacto_new, name='contacto_new'),
    path('thank_you', views.thank_you, name='thank_you'),
]
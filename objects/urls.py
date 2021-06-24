from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('lila', views.lila, name='lila'),
    path('bronce', views.bronce, name='bronce'),
    path('plata', views.plata, name='plata'),
    path('oro', views.oro, name='oro'),
    path('thank_you', views.thank_you, name='thank_you'),
]
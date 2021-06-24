from django.shortcuts import render
from django.utils import timezone
from django.shortcuts import redirect
from django.contrib import messages

# Create your views here.
def home(request):
    return render(request, 'objects/home.html', {})

def bronce(request):
    return render(request, 'objects/bronce.html', {})

def plata(request):
    return render(request, 'objects/plata.html', {})

def oro(request):
    return render(request, 'objects/oro.html', {})

def lila(request):
    return render(request, 'objects/lila.html', {})    

def thank_you(request):
    return render(request, 'objects/thank_you.html', {})
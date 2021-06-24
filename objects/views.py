from django.shortcuts import render
from django.utils import timezone
from django.shortcuts import redirect
from django.contrib import messages

# Create your views here.
def home(request):
    return render(request, 'objects/home.html', {})

def thank_you(request):
    return render(request, 'objects/thank_you.html', {})
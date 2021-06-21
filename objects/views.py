from django.shortcuts import render
from django.utils import timezone
from django.shortcuts import redirect
from django.contrib import messages

from .forms import ContactoForm

# Create your views here.
def home(request):
    return render(request, 'objects/home.html', {})

def contacto_new(request):
    if request.method == "POST":
        form = ContactoForm(request.POST)
        if form.is_valid():
            contacto = form.save(commit=False)            
            contacto.published_date = timezone.now()
            contacto.save()
            messages.info(request, 'Gracias por facilitarnos tu mail. ¡Pronto tendrás notícias nuestras!')
            return redirect('thank_you')
    else:
        form = ContactoForm()
    return render(request, 'objects/home.html', {'form': form})

def thank_you(request):
    return render(request, 'objects/thank_you.html', {})
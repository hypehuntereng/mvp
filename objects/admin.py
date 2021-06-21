from django.contrib import admin

# Register your models here.
from .models import Club
from .models import Contacto

admin.site.register(Club)
admin.site.register(Contacto)
# Generated by Django 4.0.dev20210528085027 on 2021-06-21 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('objects', '0002_contacto'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contacto',
            name='mail',
            field=models.EmailField(max_length=200),
        ),
    ]

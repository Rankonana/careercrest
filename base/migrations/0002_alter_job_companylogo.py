# Generated by Django 4.1.7 on 2023-04-18 18:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='companylogo',
            field=models.ImageField(blank=True, default='http://139.144.185.189:8080/static/img/android-chrome-512x512.png', upload_to='job_images/'),
            preserve_default=False,
        ),
    ]
# Generated by Django 4.1.7 on 2023-05-08 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0002_alter_resume_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='certifications',
            name='certification_date',
            field=models.DateField(blank=True, max_length=200, null=True),
        ),
    ]
# Generated by Django 4.1.7 on 2023-04-18 20:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_alter_job_companylogo'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='companylogoexternal',
            field=models.URLField(blank=True, null=True),
        ),
    ]

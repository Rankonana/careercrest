# Generated by Django 4.1.7 on 2023-05-10 07:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0007_rename_sociallink_sociallinks'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sociallinks',
            name='resume',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SocialLinks', to='resume.resume'),
        ),
    ]
# Generated by Django 4.0.1 on 2022-01-21 05:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_rename_is_secretary_useraccount_normal_user_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='address',
            field=models.CharField(default='', max_length=255),
        ),
    ]

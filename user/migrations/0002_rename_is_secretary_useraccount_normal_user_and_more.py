# Generated by Django 4.0.1 on 2022-01-21 03:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='useraccount',
            old_name='is_secretary',
            new_name='normal_user',
        ),
        migrations.AddField(
            model_name='useraccount',
            name='contact_number',
            field=models.IntegerField(default='0'),
        ),
    ]
# Generated by Django 4.2.1 on 2023-05-04 18:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='created_at',
            new_name='created',
        ),
        migrations.RenameField(
            model_name='note',
            old_name='updated_at',
            new_name='updated',
        ),
    ]

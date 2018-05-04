# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-04-01 00:12
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=256)),
                ('answer_string', models.CharField(max_length=1024)),
                ('created_date', models.DateTimeField(default=datetime.datetime(2018, 4, 1, 0, 12, 44, 362850))),
            ],
        ),
        migrations.CreateModel(
            name='Downvote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=256)),
                ('answer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='feed_models.Answer')),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question_string', models.CharField(max_length=1024)),
                ('user_id', models.CharField(max_length=256)),
                ('created_date', models.DateTimeField(default=datetime.datetime(2018, 4, 1, 0, 12, 44, 361976))),
            ],
        ),
        migrations.CreateModel(
            name='Upvote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=256)),
                ('answer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='feed_models.Answer')),
            ],
        ),
        migrations.AddField(
            model_name='answer',
            name='question',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='feed_models.Question'),
        ),
    ]
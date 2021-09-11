from django.contrib import admin
from django.db import models
from . import models


# Register your models here.

#Mood
@admin.register(models.Mood)
class MoodAdmin(admin.ModelAdmin):
    autocomplete_fields = ['user']
    list_display = ['mood', 'scale', 'description', 'user']
    list_filter = ['mood']

    def mood_user(self, mood):
        return mood.user.name

@admin.register(models.User)
class MoodAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_display = ['name', 'email', 'weight_kg', 'height_cm', 'level']
    list_filter = ['name']

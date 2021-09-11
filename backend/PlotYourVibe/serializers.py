from rest_framework import serializers

from .models import *


class MoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mood
        fields = (
            'id',
            'mood',
            'scale',
            'description',
            'timestamp',
            'user'
        )


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'name',
            'email',
            'weight_kg',
            'height_cm',
            'level'
        )

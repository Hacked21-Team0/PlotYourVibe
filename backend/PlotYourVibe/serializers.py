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
            'timestamp'
        )


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'name',
            'level'
        )

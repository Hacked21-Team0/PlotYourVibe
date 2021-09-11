from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MoodSerializer, UserSerializer
from .models import Mood, User

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class MoodView(viewsets.ModelViewSet):
    serializer_class = MoodSerializer
    queryset = Mood.objects.all()


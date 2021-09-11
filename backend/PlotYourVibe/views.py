from rest_framework import viewsets

from .models import Mood, User
from .serializers import MoodSerializer, UserSerializer


class UserView(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer
    queryset = User.objects.all()


class MoodView(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    serializer_class = MoodSerializer
    queryset = Mood.objects.all()

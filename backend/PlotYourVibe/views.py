from django.contrib.auth.models import User as DJUser
from rest_framework import viewsets
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated

from .models import Mood, User
from .serializers import MoodSerializer, UserSerializer


class UserView(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer
    queryset = User.objects.all()


class MoodView(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = MoodSerializer
    queryset = Mood.objects.all()


class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        username = request.data.get('username')
        response.data['user_id'] = User.objects.get(user = DJUser.objects.get(username = username)).id
        return response

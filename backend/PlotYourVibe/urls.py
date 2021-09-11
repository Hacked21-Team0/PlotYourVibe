from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register(r'users', UserView, 'user')
router.register(r'moods', MoodView, 'mood')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-token-auth/', LoginView.as_view(), name = 'api_token_auth')
]

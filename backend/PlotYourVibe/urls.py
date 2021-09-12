from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from .views import *

router = routers.DefaultRouter()
#register the name 'users' for UserView
router.register(r'users', UserView, 'user')
#register the name 'users' for MoodView
router.register(r'moods', MoodView, 'mood')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-token-auth/', obtain_auth_token, name = 'api_token_auth')
]

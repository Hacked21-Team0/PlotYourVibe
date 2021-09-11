from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from PlotYourVibe import views

router = routers.DefaultRouter()
router.register(r'users', views.UserView, 'users')
router.register(r'moods', views.MoodView, 'moods')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
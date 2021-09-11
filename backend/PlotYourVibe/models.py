from django.contrib.auth.models import User as DJUser
from django.db import models
from django.db.models.fields import DecimalField


# Create your models here.

class User(models.Model):
    LEVEL_1 = '1'
    LEVEL_2 = '2'
    LEVEL_3 = '3'

    #Level1 is entry level users, Level3 is for high level users
    LEVEL_CHOICES = [
        (LEVEL_1, 'Level 1'),
        (LEVEL_2, 'Level 2'),
        (LEVEL_3, 'Level 3'),
    ]

    user = models.OneToOneField(DJUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    weight_kg = DecimalField(max_digits=6,
        decimal_places=2, default=100)
    height_cm = DecimalField(max_digits=6,
        decimal_places=2, default=100)
    level = models.CharField(max_length=1, choices=LEVEL_CHOICES, default=LEVEL_1)

    def __str__(self) -> str:
        return self.name
    class Meta:
        ordering = ['name']



class Mood(models.Model):
    TYPE_HAPPY = 'H'
    TYPE_EXCITED = 'E'
    TYPE_ANGRY = 'A'
    TYPE_DEPRESSED = 'D'
    TYPE_IRRITATED = 'I'
    TYPE_SAD = 'S'

    MOOD_CHOICES = [
        (TYPE_HAPPY, 'Happy'),
        (TYPE_EXCITED, 'Excited'),
        (TYPE_ANGRY, 'Angry'),
        (TYPE_DEPRESSED, 'Depressed'),
        (TYPE_IRRITATED, 'Irritated'),
        (TYPE_SAD, 'Sad')
    ]

    mood = models.CharField(max_length=1, choices=MOOD_CHOICES, default=TYPE_HAPPY)
    scale = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.CharField(max_length=200)
    timestamp = models.DateTimeField(auto_now_add=True)
    # (User)1 -- *(Mood)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.mood
    class Meta:
        ordering = ['mood']






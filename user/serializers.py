from .models import UserAccount
from django.contrib.auth import get_user_model
from rest_framework import serializers
from datetime import datetime


User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
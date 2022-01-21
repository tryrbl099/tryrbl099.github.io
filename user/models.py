from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from datetime import datetime

class UserAccountManager(BaseUserManager):
    def create_user(self, email, first_name, last_name,address, contact_number,  password=None):

        if not email:
            raise ValueError('Users must have an email')

        email = self.normalize_email(email)
        
        user = self.model(
            email = email,
            first_name = first_name,
            last_name = last_name,
            contact_number = contact_number,
            address = address
        )

        user.set_password(password)
        user.save()

        return user

    def create_normal_user(self, email, first_name, last_name,address, contact_number, password=None):

        user = self.create_user(email, first_name, last_name,address,contact_number, password)

        user.normal_user = True

        user.save()

        return user


    def create_superuser(self, email, first_name, last_name,address,contact_number, password=None):

        user = self.create_user(email, first_name, last_name,address,contact_number, password)

        user.is_superuser = True
        user.is_staff = True
        user.normal_user = False
        
        user.save()

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True, max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255,default="")
    contact_number = models.IntegerField(default="0")
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    normal_user = models.BooleanField(default=False)
    last_login = datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    
    def __str__(self):
        return self.email


# builtin imports
import uuid

#third party imports
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone


class User(AbstractUser):
    """
    Custom object model for User to add more fields and also allow user registration via email.
    """

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False)
    username = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    image = models.ImageField(
        max_length=2048,
        default="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uPy9lZuIjzqW0aACiqVpVRFQqP3mpf54Fw&s"
    )
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.username


class Otp(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.IntegerField(unique=True)
    valid = models.BooleanField(default=True)
    date_created = models.DateTimeField(auto_now_add=True)

    @property
    def has_expired(self):
        """
        Checks if an instance of the Otp model has expired.
        """

        delta = timezone.now() - self.date_created

        # token expires in five minutes
        return delta.seconds > 300

    def __str__(self):
        return str(self.token)

    class Meta:
        ordering = ("-valid",)


class Product(models.Model):
    """ Product Object Model """

    id = models.UUIDField(
            default=uuid.uuid4,
            editable=False,
            primary_key=True)
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to="products")
    price = models.DecimalField(
            max_digits=10, decimal_places=2)
    category = models.CharField(max_length=30)
    quantity = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name



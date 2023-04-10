from django.db import models
import uuid


class Product(models.Model):
    """ Product Object Model """
    id = models.UUIDField(
            default=uuid.uuid4,
            editable=False,
            primary_key=True)
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to="react-products")
    price = models.DecimalField(
            max_digits=10, decimal_places=2)
    category = models.CharField(max_length=30)
    quantity = models.IntegerField(default=0)

    def __str__(self):
        return self.name



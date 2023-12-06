from django.db import models

# Create your models here.

class bookedTables(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    phone_number = models.CharField(max_length=13)
    date = models.DateField()
    time = models.TimeField()
    amount_of_guests = models.IntegerField()

    def __str__(self):
        return self.name

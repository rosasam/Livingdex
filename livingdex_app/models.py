from django.db import models

# Create your models here.

class Region(models.Model):
    generation = models.FloatField(default=0)
    name = models.CharField(max_length=20)

    class Meta:
        ordering = ('generation',)

class Pokemon(models.Model):
    nationaldex = models.IntegerField(default=0)
    localdex = models.IntegerField(default=0)
    name = models.CharField(max_length=20)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    caught = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('nationaldex',)

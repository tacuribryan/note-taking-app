from django.db import models

#Defining the Note Model
class Note(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__ (self):
        return self.title
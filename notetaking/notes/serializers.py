from rest_framework import serializers

from .models import Note


#Declaring a serializeer that we can use to serialize and deserialize data that corresponds to Note the objects.
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'content', 'created', 'updated']
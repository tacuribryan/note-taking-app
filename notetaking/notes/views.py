from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import NoteSerializer
from .models import Note

'''
This handles the HTTP GET and POST request to the /api/notes endpoint. 
This retrivess a list of all notes and creates a new note.
The NoteList class handles request for multple notes
'''
class NoteList(APIView):
    def get(self, request):
        notes =  Note.objects.all().order_by('-updated')
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

'''
This handles the HTTP GET,PUT, and DELETE request to the /api/notes/<id> endpoint.
This endpoint retrives, updates, and deletes a specific note by its ID.
The NoteDetail class handles request for a single note by its ID
'''
class NoteDetail(APIView):
    def get_object(self, pk):
        try:
            return Note.objects.get(pk=pk)
        except Note.DoesNotExist:
            raise Http404
        
    def get(self, request, pk):
        note = self.get_object(pk)
        serializer = NoteSerializer(note)
        return Response(serializer.data)
    
    def put (self, request, pk):
        note = self.get_object(pk)
        serializer = NoteSerializer(note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)    
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        note = self.get_object(pk)
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
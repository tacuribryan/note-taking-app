from django.urls import path
from . import views

urlpatterns = [
    path('api/notes/', views.NoteList.as_view()),
    path('api/notes/<int:pk>/', views.NoteDetail.as_view()),
]
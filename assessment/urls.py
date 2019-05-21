from django.urls import path
from assessment import views

urlpatterns = [
    path('', views.QuestionView.as_view(), name='index')
]

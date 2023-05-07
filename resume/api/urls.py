from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes),
    path('softwares/', views.getSoftwares),
    path('softwares/<str:pk>/', views.getSoftware),
    path('add-edit-software/', views.software_detail),
    path('delete-software/<str:pk>/', views.deleteSoftware),

    path('languages/', views.getLanguages),
    path('languages/<str:pk>/', views.getLanguage),
    path('add-edit-language/', views.language_detail),
    path('delete-language/<str:pk>/', views.deleteLanguage),

    path('certifications/', views.getCertifications),
    path('certifications/<str:pk>/', views.getCertification),
    path('add-edit-certification/', views.certification_detail),
    path('delete-certification/<str:pk>/', views.deleteCertification),



]
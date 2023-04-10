from django.urls import re_path, include, path
from rest_framework.authtoken import views as auth_views
from . import views


urlpatterns = [
    re_path(r"^products/$", views.ProductListView.as_view()),
    re_path(r"^login/$", views.LoginView.as_view()),
    re_path(r"^register/$", views.RegisterView.as_view()),
]

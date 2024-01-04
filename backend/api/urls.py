from django.urls import re_path, include, path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import views


urlpatterns = [
    re_path(r"^products/$", views.ProductListView.as_view()),
    re_path(r"^register/$", views.RegisterView.as_view()),
    path(
        "verify-otp/<int:otp>/",
        views.verify_OTP,
        name="verify_otp"
    ),
    path('api/token/',
        TokenObtainPairView.as_view(),
        name='token_obtain_pair'
    ),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

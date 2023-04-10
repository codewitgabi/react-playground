from django.shortcuts import render
from django.contrib.auth import get_user_model

# rest framework imports
from rest_framework import generics
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

# custom imports
from .serializers import ProductSerializer, RegisterSerializer
from .models import Product


User = get_user_model()


class ProductListView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all().order_by("?")


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    model = User


class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
                data=request.data,
                context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            "username": user.username,
            "token": token.key,
            "user_id": user.id
            })




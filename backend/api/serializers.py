import random

from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.db import transaction
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import Product, Otp
from .services import validate_password

User = get_user_model()


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        user = self.user
        token = self.get_token(user)

        data["id"] = str(self.user.id)
        data["username"] = user.username

        return data


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        style={'input_type': 'password'},
        required=True,
        min_length=10)

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "email",
            "password"
        )
        extra_kwargs = {
            "password": {"write_only": True},
            "id": {"read_only": True}
        }

    @transaction.atomic
    def create(self, validated_data: dict) -> User:
        """ Get request object """
        request = self.context["request"]
        username = validated_data.get("username")
        email = validated_data.get("email")
        password = validated_data.get("password")

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        user.is_active = False
        user.save()

        token = "".join(random.choices("1234567890", k=5))

        """ create otp """
        otp = Otp.objects.create(user=user, token=token)
        otp.save()

        """ send mail """
        subject = "Brandy Otp Verification"
        html_content = render_to_string("otp.html", {"token": token})
        mail = EmailMessage(
            subject,
            html_content,
            to=[email]
        )

        mail.content_subtype = "html"
        mail.fail_silently = False
        mail.send()

        return user

    def validate_password(self, value: str) -> str:
        response = validate_password(value)

        return response


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


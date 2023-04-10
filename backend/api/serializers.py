from rest_framework import serializers
from .models import Product
from django.contrib.auth import get_user_model

User = get_user_model()


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "username",
            "email",
            "password"
        )
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def create(self, validated_data):
        username = validated_data.get("username")
        email = validated_data.get("email")
        password = validated_data.get("password")

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )
        user.save()
        return user;

    def validate_password(self, value):
        # check for length
        if len(value) < 8:
            raise serializers.ValidationError("Password must be a minimum of 8 characters")
        return value;




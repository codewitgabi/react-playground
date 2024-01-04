from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.db import transaction

# rest framework imports
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view

# custom imports
from .serializers import ProductSerializer, RegisterSerializer
from .models import Product, Otp


User = get_user_model()


class ProductListView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all().order_by("?")


class RegisterView(generics.GenericAPIView):
    """ User Registration Handler """
    serializer_class = RegisterSerializer

    @transaction.atomic(durable=True, savepoint=False)
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "status": "success",
            "id": user.id
        })


@api_view(["GET"])
def verify_OTP(request, otp):
    """
    Verifies user account by sending the `otp` passed in the url
    """
    if request.method == "GET":
        try:
            otp_obj = Otp.objects.get(token=otp, valid=True)
            if otp_obj.has_expired:
                return Response({
                    "status": "failed",
                    "message": "The given otp has expired"
                }, status=status.HTTP_404_NOT_FOUND)
            else:
                """ Activate user account """
                user = Otp.objects.get(token=otp).user
                user.is_active = True
                user.save()
                """ Make code invalid """
                otp_obj.valid = False
                otp_obj.save()
                return Response({
                    "status": "success",
                    "message": "verification complete"
                }, status=status.HTTP_200_OK)

        except Otp.DoesNotExist:
            return Response({
                "status": "failed",
                "message": "The given otp does not exist or has been used."
            }, status=status.HTTP_404_NOT_FOUND)



from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseAdmin
from .models import User, Otp, Product
from django.utils.translation import gettext_lazy as _


@admin.register(User)
class UserAdmin(BaseAdmin):
    """
    Admin manager for User model
    """

    fieldsets = (
        (None, {"fields": ("username", "password")}),
        (_("Personal Info"), {
         "fields": ("first_name", "last_name", "email", "image")}),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("username", "email", "password1", "password2")
        }),
    )

    list_display = ("id", "username", "email", "last_login")
    date_hierarchy = "date_joined"
    empty_value_display = "--empty--"
    list_filter = ("date_joined",)
    list_max_show_all = 100
    list_per_page = 100
    ordering = ("username", "-date_joined")
    search_fields = ("username", "email")
    search_help_text = "Search User..."


@admin.register(Otp)
class OtpAdmin(admin.ModelAdmin):
    """
    Admin manager for Otp model
    """

    list_display = ("user", "token", "valid", "date_created")
    date_hierarchy = "date_created"
    empty_value_display = "--empty--"
    list_filter = ("date_created", "valid")
    list_max_show_all = 100
    list_per_page = 100
    ordering = ("valid", "-date_created")
    search_fields = ("user__username", "user__email")


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "price")


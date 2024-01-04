from rest_framework import serializers


def validate_password(value: str) -> str:
    symbols = "@#_~[]{}()$&?%/"

    # MinimumLengthValidator
    if len(value) < 8:
        raise serializers.ValidationError("Password is too short.")

    # CommonPasswordValidator
    if value.isdigit() or value.isalpha():
        raise serializers.ValidationError("Password is too common.")

    # NoSymbolValidator
    if not any([sym in symbols for sym in value]):
        raise serializers.ValidationError(
            f"Password should contain any of {symbols}")

    return value


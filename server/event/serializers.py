from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'email', 'instagram_username', 'profile_image', 'review_text', 'rating', 'created_at']
        read_only_fields = ['id', 'created_at']

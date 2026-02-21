from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Review(models.Model):
    email = models.EmailField(
        max_length=255,
        unique=False,
        help_text="Email address of the reviewer"
    )
    review_text = models.TextField(
        help_text="Text of the review"
    )
    rating = models.IntegerField(
        validators=[MinValueValidator(1),MaxValueValidator(5)],  
        help_text="Rating of the review (1-5 stars)"
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        help_text="Timestamp when the review was created"
    )

    class Meta:
        ordering = ['-created_at'] 
        verbose_name = "Review"
        verbose_name_plural = "Reviews"

    def __str__(self):
        return f"Review by {self.email} - {self.rating} stars"


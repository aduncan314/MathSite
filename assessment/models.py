from django.db import models


class Question(models.Model):

    title = models.CharField(max_length=128)
    question_type = models.PositiveSmallIntegerField()
    tag = models.PositiveIntegerField()

    question_text = models.TextField()

    def __str__(self):
        return self.title

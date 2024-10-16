from django.db import models
from ckeditor.fields import RichTextField
from django.utils import timezone
from autoslug import AutoSlugField
# Create your models here.
from django.core.exceptions import ValidationError


class Blog(models.Model):
    title = models.CharField(max_length=200,null=True,blank=True)
    content = RichTextField(blank=True,null=True)
    image = models.ImageField(upload_to='blog/',null=True,blank=True)
    pub_date = models.DateTimeField(auto_now_add=True,null=True,blank=True)
    slug = AutoSlugField(populate_from='title',null=True,default=None)
    
    def __str__(self):
        return self.title

class Gallery(models.Model):
    title = models.CharField(max_length=200,null=True,blank=True)
    image = models.ImageField(upload_to='gallery/',null=True,blank=True)
    description = models.TextField(blank=True)
    upload_date = models.DateTimeField(auto_now_add=True,null=True,blank=True)
    
    def __str__(self):
        return self.title

class Event(models.Model):
    title = models.CharField(max_length=200,null=True,blank=True)
    description = RichTextField(blank=True,null=True)
    image = models.ImageField(upload_to='event/',null=True,blank=True)
    date = models.DateField(null=True,blank=True)
    location = models.CharField(max_length=100,null=True,blank=True)
    slug = AutoSlugField(populate_from='title',null=True,default=None)
    
    def __str__(self):
        return self.title

class LatestUpdate(models.Model):
    title = models.CharField(max_length=200,null=True,blank=True)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True,null=True,blank=True)

    def __str__(self):
        return self.title

class Contact(models.Model):
    name = models.CharField(max_length=100,null=True,blank=True)
    query = models.TextField()
    email = models.EmailField()
    phone = models.CharField(max_length=20,null=True,blank=True)
    address = models.TextField()

    def __str__(self):
        return self.name

class Inquiry(models.Model):
    name = models.CharField(max_length=100,null=True,blank=True)
    email = models.EmailField()
    subject = models.CharField(max_length=200,null=True,blank=True)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True,null=True,blank=True)

def validate_pdf(value):
    import os
    ext = os.path.splitext(value.name)[1]  # [0] returns path+filename
    valid_extensions = ['.pdf']
    if not ext.lower() in valid_extensions:
        raise ValidationError('Unsupported file extension. Only PDF files are allowed.')

class Student(models.Model):
    name = models.CharField(max_length=100,null=True,blank=True)
    password = models.CharField(max_length=100,null=True,blank=True)
    # enrollmentID = models.CharField(max_length=100,null=True,blank=True)
    # BCA = models.FileField(null=True, validators=[validate_pdf])
    # ADCA = models.FileField(null=True, validators=[validate_pdf])s
    # TYPING = models.FileField(null=True, validators=[validate_pdf])

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)


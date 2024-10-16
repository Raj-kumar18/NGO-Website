from django.urls import path,include
from django.contrib import admin
from myapp import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("",views.index,name="index"),
    path("about/",views.about,name="about"),
    path("event/",views.event,name="event"),
    path("event/<str:slug>",views.event_detail,name="event_detail"),
    path("login/",views.student_login,name="student_login"),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)


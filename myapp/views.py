from django.shortcuts import render

from myapp.models import Event
from myapp.models import Blog
from myapp.models import Student

def index(request):
    event = Event.objects.all()[0:4]
    blog = Blog.objects.all()[0:3]
    context = {
        'event': event,
        'blog': blog,
    }
    return render(request,"index.html", context )

def about(request):
    return render(request,"about.html")


def event(request):
    event = Event.objects.all()
    return render(request,"event.html",{'event':event})

def event_detail(request,slug):
    eventDetail = Event.objects.filter(slug=slug)
    return render(request,"event_detail.html",{'eventDetail':eventDetail})


def student_login(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        password = request.POST.get('password')
        student = Student.objects.filter(name=name, password=password).first()
        print(student)
        return render(request, 'student_detail.html', {'student': student})
    return render(request, 'login.html')
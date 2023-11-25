from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.clickjacking import xframe_options_exempt

# Create your views here.

def reservation(request):
    return render(request, "main/reservation.html")

@xframe_options_exempt
def contacts(request):
    return render(request, "main/contacts.html")


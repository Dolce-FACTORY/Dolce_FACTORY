import json

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from django.views.decorators.clickjacking import xframe_options_exempt
from .forms import BookedTablesForm

# Create your views here.

def reservation(request):
    return render(request, "main/reservation.html")

def book_table(request):
    if request.method == "POST":
        data = json.load(request)

        form = BookedTablesForm(data)

        if form.is_valid():
            form.save()
            
            return JsonResponse({"success": "yes"})
        else:
            print("not saved")
            print(form.errors)
            return HttpResponseBadRequest("Something gone wrong! Try again.")

@xframe_options_exempt
def contacts(request):
    return render(request, "main/contacts.html")

def home(request):
    return render(request, "main/home.html" )
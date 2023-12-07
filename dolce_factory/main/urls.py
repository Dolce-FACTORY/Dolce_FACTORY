from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("contacts/", views.contacts, name="contacts"),
    path("reservation/", views.reservation, name="reservation"),
    path("book_table/", views.book_table, name="book_table")
]
from django import forms
from .models import bookedTables

class BookedTablesForm(forms.ModelForm):
    class Meta:
        model = bookedTables
        fields = ["name", "email", "phone_number", "date", "time", "amount_of_guests"]
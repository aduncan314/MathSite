from django.shortcuts import render
from django.views.generic import View
from django.http import HttpResponse


def index(request):
    payload = {
        'test_name': "Basic line with function background",
        'question': "graph_LineWithFunctionBackground",
        'attr': {}
    }
    return render(request, 'assessment/assessment_index.html', context=payload)

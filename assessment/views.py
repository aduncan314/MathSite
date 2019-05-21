from django.shortcuts import render
from django.views.generic import TemplateView
from assessment.models import Question


def index(request):
    payload = {
        'test_name': "Basic line with function background",
        'question': "graph_LineWithFunctionBackground",
        'attr': {}
    }
    return render(request, 'assessment/assessment_index.html', context=payload)


class QuestionView(TemplateView):
    template_name = 'assessment/assessment_index.html'

    def get_context_data(self, **kwargs):
        context_dict = super().get_context_data(**kwargs)

        context_dict['title'] = 'A Question'
        context_dict['question_text'] = "hWhat is your favourite colour?"
        context_dict['question'] = "graph_LineWithFunctionBackground"
        context_dict['is_open_response'] = True
        context_dict['is_numeric_response'] = True

        return context_dict

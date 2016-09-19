from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.http import HttpResponse, Http404

from welcome.models import TeamMember
from welcome.models import Team

def index(request):
    teams = Team.objects.all()
    team_members = TeamMember.objects.all()
    context = {'teams': teams, 'team_members': team_members}
    return render(request, 'welcome/index.html', context)

def profile(request, first_name, last_name):
    team_member = get_list_or_404(TeamMember, first_name__iexact=first_name, last_name__iexact=last_name)[0]
    team = get_object_or_404(Team, id=team_member.team_id)
    return render(request, 'welcome/profile.html', {'team_member': team_member, 'team': team})

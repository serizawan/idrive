import datetime

from django.db import models
from django.utils import timezone

class Team(models.Model):
    id = models.AutoField(primary_key=True)
    team_name = models.CharField(max_length=255)
    team_desc = models.CharField(max_length=1023)

    def __str__(self):
        return '(' + str(self.id) + ') ' + self.team_name + ' - ' + self.team_desc

class TeamMember(models.Model):
    id = models.AutoField(primary_key=True)
    team = models.ForeignKey(Team)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    age = models.IntegerField(default=0)
    role = models.CharField(max_length=255)
    since = models.DateTimeField('since')
    linkedin_url = models.CharField(max_length=255, null=True)
    github_url = models.CharField(max_length=255, null=True)
    email = models.CharField(max_length=255, null=True)

    def is_recent(self):
        return self.since >= (timezone.now() - datetime.timedelta(days=365))

    def __str__(self):
        return self.first_name + ' ' + self.last_name

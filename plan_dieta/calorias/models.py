from django.db import models

class Caloriass(models.Model):
    nome=models.CharField(max_length=50)
    pao=models.IntegerField(default=0)
    milho=models.IntegerField(default=0)
    arroz=models.IntegerField(default=0)
    ovo=models.IntegerField(default=0)
    peixe=models.IntegerField(default=0)
    bife=models.IntegerField(default=0)
    chocolate=models.IntegerField(default=0)
    sorvete=models.IntegerField(default=0)
    bombom=models.IntegerField(default=0)
    tipo=models.IntegerField(default=0)
    atual=models.CharField(max_length=50,default='nulo')

    def __str__(self):
        return self.nome

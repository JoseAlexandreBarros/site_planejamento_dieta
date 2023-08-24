from django.shortcuts import render,redirect
from .models import Caloriass
from django.http import HttpResponse

def nome_dieta(request):
     tipo=int(request.POST.get('tipo'))
     if tipo==0:
          return render (request,'index.html',{'dieta':"É necessário logar num plano"})

     Caloriass.objects.filter(atual='atual').update(atual='nulo')
     nome= request.POST.get('nome')
     # tipo= request.POST.get('tipo')
     if not Caloriass.objects.filter(nome=nome).exists():
        caloria=Caloriass(
            nome=nome,
            tipo=tipo,
            atual='atual'
        )
        caloria.save()
     else:
        Caloriass.objects.filter(nome=nome).update(atual='atual')
     tipo=request.POST.get('tipo')
     
     arroz=int(request.POST.get('aro'))
     milho=int(request.POST.get('mio'))
     pao=int(request.POST.get('pan'))
     caloria=Caloriass.objects.get(atual='atual')
     Caloriass.objects.filter(atual='atual').update(tipo=tipo)
     Caloriass.objects.filter(atual='atual').update(pao=pao)
     Caloriass.objects.filter(atual='atual').update(milho=milho)
     Caloriass.objects.filter(atual='atual').update(arroz=arroz)
     bife=int(request.POST.get('bif'))
     peixe=int(request.POST.get('pex'))
     ovo=int(request.POST.get('ovo'))
     Caloriass.objects.filter(atual='atual').update(bife=bife)
     Caloriass.objects.filter(atual='atual').update(peixe=peixe)
     Caloriass.objects.filter(atual='atual').update(ovo=ovo)
     chocolate=int(request.POST.get('cho'))
     sorvete=int(request.POST.get('sor'))
     bombom=int(request.POST.get('bom'))
     Caloriass.objects.filter(atual='atual').update(chocolate=chocolate)
     Caloriass.objects.filter(atual='atual').update(sorvete=sorvete)
     Caloriass.objects.filter(atual='atual').update(bombom=bombom)

     return render (request,'index.html',{'dieta':f'Dieta {nome} foi salva!'})

def sair(request):
    if not Caloriass.objects.filter(atual='atual').exists():
          return render (request,'index.html',{'dieta':'É necessário estar logado para sair do plano'})
    Caloriass.objects.filter(atual='atual').update(atual='nulo')
    return render(request, 'index.html',{'dieta':'saída da dieta atual'})

def descartar(request):
     if not Caloriass.objects.filter(atual='atual').exists():
          return render (request,'index.html',{'dieta':'É necessário estar logado para descartar o plano'})
     if Caloriass.objects.filter(atual='atual').exists():
          caloria=Caloriass.objects.get(atual='atual')
          caloria.delete()
     return  render(request, 'index.html',{'dieta':'Plano descartado'})


    

    



    

def total(request):
    if not Caloriass.objects.filter(atual='atual').exists():
          return render (request,'index.html',{'dieta':'É necessário estar logado em um plano'})
    else:
         
         caloria=Caloriass.objects.get(atual='atual')
         if caloria.tipo==1:
              total=650
         if caloria.tipo==2:
              total=450
         if caloria.tipo==3:
              total=325
         calorias=caloria.chocolate*30+caloria.sorvete*20+caloria.bombom*5+caloria.ovo*5+caloria.peixe*10+caloria.bife*15+caloria.arroz*5+caloria.milho*10+caloria.pao*20
         
         if calorias ==0 :
              return render (request,'index.html',{'tots0': 1})
         
         return render (request,'index.html',{'tots1': calorias, 'total2':total})
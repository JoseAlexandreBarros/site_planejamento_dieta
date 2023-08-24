from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('nome_dieta/',views.nome_dieta,name='nome_dieta'),
    path('descartar/',views.descartar,name='descartar'),
    path('sair/',views.sair,name='sair'),
    path('total/',views.total,name='total')


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
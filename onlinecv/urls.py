from django.conf.urls.static    import static
from django.views.static        import serve
from django.conf                import settings
from django.urls                import path
from .views                     import get_home_page



urlpatterns = [
    path('', get_home_page, name='home'),
    path('media/<path:path>', serve, {'document_root': settings.MEDIA_ROOT}),
]
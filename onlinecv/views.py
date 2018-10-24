from django.shortcuts   import render, redirect


def get_home_page(request):
     return render(request, "onlinecv/index.html")

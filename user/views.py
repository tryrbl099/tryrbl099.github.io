from rest_framework import response
from rest_framework import views
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status,permissions, viewsets
from django.contrib.auth import get_user_model
from .serializers import UserSerializer

User = get_user_model()


class RegisterView(APIView):
    permission_classes = (permissions.AllowAny,)
   
    def post(self , request):
        data = request.data 

        first_name = data['first_name']
        last_name = data['last_name']
        address = data['address']
        contact_number = data['contact_number']
        email = data['email']
        email = email.lower()
        password = data['password']
        re_password = data['re_password']
        normal_user = data['normal_user']

        if normal_user == 'true':
            normal_user = True
        
        if normal_user == 'false':
            normal_user = False

       

        if password == re_password:
            if len(password) >= 8:
                if not User.objects.filter(email=email).exists():
                    if not normal_user:
                        User.objects.create_superuser(first_name=first_name, last_name=last_name,address=address, email=email,contact_number=contact_number, password=password)
                       
                        return Response({'success': ' Admin Created Successful'}, status=status.HTTP_201_CREATED)
                    else:
                        User.objects.create_normal_user(first_name=first_name,last_name=last_name,address=address, email=email,contact_number=contact_number, password=password)
                        
                      
                        return Response({'success': ' User created successful'}, status=status.HTTP_201_CREATED)

                else:
                    return Response({'error': 'User with this email already exist'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'error': 'Password must atleast 8 characters'}, status=status.HTTP_400_BAD_REQUEST)


        else:
            return Response({'error': 'Password does not Match'}, status=status.HTTP_400_BAD_REQUEST)


class RetrieveUserView(APIView):
    def get(self,request, format=None):
       
        try:
            user = request.user 
            user = UserSerializer(user)

            return Response(user.data,status=status.HTTP_200_OK)
        except:
            return Response({
                'error':'Something went wrong retreiving the user details'
            },status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class  RetrieveAllUsers(viewsets.ModelViewSet):
    serializer_class = UserSerializer

    def get_queryset(self):
        users = User.objects.all()
        return users

    

    



    

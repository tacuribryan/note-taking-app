# note-taking-app

note-taking-app is an application where users can create, view, edit, and delete notes. This is done by implementing Django REST API and ReactJS for the frontend which allows the users to interact with the note-taking application seamlessly.


# Project Set-Up

## Create a Virtual Environment
Clone this repo in a directory of your preference

open terminal and navigate to the directory path (where the repo was cloned) and run the following script:
```bash
python -m venv note-taking-env 
```

Once you've created a virtual environment, activate it.

On Unix or MacOS, run:

```bash
source note-taking-env/bin/activate
```

to deactivate the virtual environment, type:
```bash
deactivate
````

For a detail instruction on Virtual Environments and Packages [click here](https://docs.python.org/3/tutorial/venv.html)

## Install Django, Django REST framework, and CORS headers using pip

In the project directory, activate the virtual environment, and then enter the command:

```bash
python -m pip install Django
```
```bash
pip install djangorestframework
```
```bash
pip install django-cors-headers
```
For a detail instruction on how to install Django [click here](https://docs.djangoproject.com/en/4.2/topics/install/)
For a detail instruction about Django Rest Framework (DRF) [click here](https://www.django-rest-framework.org)
For a detail instruction about Django CORS headers [click here](https://pypi.org/project/django-cors-headers/)
## Start Project

Change into the outter notetaking directory and then run the following command:
```bash
python manage.py runserver
```
for a detail instruction on writing your first Django app [click here](https://docs.djangoproject.com/en/4.2/intro/tutorial01/)

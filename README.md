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

## Install Django, Django REST framework, and CORS headers using pip and ReactJS dependencies

In the project directory, activate the virtual environment, and then enter the command:

```bash
python -m pip install Django
```
For a detail instruction on how to install Django [click here](https://docs.djangoproject.com/en/4.2/topics/install/)
```bash
pip install djangorestframework
```
For a detail instruction about Django Rest Framework (DRF) [click here](https://www.django-rest-framework.org)
```bash
pip install django-cors-headers
```
For a detail instruction about Django CORS headers [click here](https://pypi.org/project/django-cors-headers/)


### Navigate to note-taking-app/notetaking directory in terminal and then run the following commands:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
#follow prompts and Next Step instructions
```
For detail instruction about Homebrew [click here](https://brew.sh)
```bash
brew install node
```
For detail instruction about installing Node [click here](https://formulae.brew.sh/formula/node)
```bash
npm install
```
For detail instruction about npm install [click here](https://docs.npmjs.com/cli/v8/commands/npm-install)

```bash
npm install react-router-dom
```
To learn more about React Router [click here](https://reactrouter.com/en/main)




## Start Project

Change into the outter notetaking directory and then run the following command:
```bash
python manage.py runserver
```
for a detail instruction on writing your first Django app [click here](https://docs.djangoproject.com/en/4.2/intro/tutorial01/)

---
published: false
layout: post
title: Managing the ChemBio Hub Platform installation with conda and pip
author: andy
excerpt: "Developing with Python and JavaScript is often fast and efficient, but once a large number of dependencies are involved it is crucial to get the way you install the product under control."
---

There are a number of other steps required to install the system which are noted in our install documents for CentOS and Ubuntu. 

In this blog post I am going to describe how we manage our python packages and our custom PostgreSQL database.

Developing with Python and JavaScript is often fast and efficient, but once a large number of dependencies are involved it is crucial to get the way you install the product under control. In order to do that, we combine a few package management technologies and develop approroiate scripts to make the package managers work together.

The 4 package managers used are for Python: conda and pip and for JavaScript npm and bower.

In our python development we have found the conda package manager to be great for installing large and complex scientific packages for image processing and cheminformatics. Wihtout conda these can take literally hours to compile and install but conda speeds all of these things up. It does this by having a templated binary installation that is tailored to the specific environment that you wish to install it in. 

If the python code in one of your packages would normally call C code from the server shared libraries, these shared libaries can be packaged up with the conda package instead. The advantage nof this approach is that the package on conda can be set up to work across all operating systems. The disadvantage is that if the person who created the original conda package did not specify that C dependency you can get to an unexpected error that may be hard to debug. Another disadvantage is that if you are the only manager of a particular package, you will have to maintain that package and add updates as approapriate.

With these advantages and disadvantages in mind, the most pragmatic approach is to use Conda for the well-known packages that it is good at and to fill in the other small python packages with pip.

So how does Conda work?

Conda is installed using the installers for linux, mac or windows.

     wget https://3230d63b5fc54e62148e-c95ac804525aac4b6dba79b00b39d1d3.ssl.cf1.rackcdn.com/Anaconda2-2.4.0-Linux-x86_64.sh 
     bash Anaconda2-2.4.0-Linux-x86_64.sh -b    
     rm Anaconda2-2.4.0-Linux-x86_64.sh
     echo "export PATH=$HOME/anaconda2/bin/:\$PATH" >> ~/.bashrc
     #source ~/.bashrc

We then add the channels that we need for our dependencies - cairocffi, rdkit, rdkit-postgresql and openbabel.

    export PATH=$HOME/anaconda2/bin/:$PATH
    conda config --add channels https://conda.anaconda.org/jeprescottroy
    conda config --add channels https://conda.anaconda.org/rdkit
    conda config --add channels https://conda.anaconda.org/clyde_fare

Following this we create a virtual environment for the project using an exported list of conda dependencies (exported using conda list -e).

    conda create -q -y --file anaconda_requirements.txt -n dev

The ChemBio Hub system is set up to use an environment called dev when in development, the environment name corresponds to the web folder the project will be hosted on.

After this is done we can activate the conda environment. This involves setting the system PATH

    source activate dev

The bash shell then changes to show you are in that environment

    (dev)chembiohub@chembiohub:~/

Now with the environment activated the pip and python we are using will point at anaconda's version, so even if you are on Mac OS or CentOS the python version will always be the same, in this case 2.7.10.

Now it is possible to install the other dependencies of ChemBio Hub and pull down all of the submodules:

    pip install -r pip_requirements.txt

    git submodule init 
    git submodule update
    git submodule foreach git checkout master 
    git submodule foreach git pull

PostgreSQL is also installed with conda and is added to the path in the virtual environment. As we do not want to have lots of different ports listening for postgres connections, we use a unix socket so that any instace of the application can have its own PostgreSQL installation. We do this by setting PostgreSQL to run in the background using supervisor.

Our install script sets this up by running the initdb command to create a tablespace folder for postgres then creating a socket directory for the PostgreSQL process to communicate with.

    mkdir $CONDA_ENV_PATH/var/postgressocket
    initdb -D $CONDA_ENV_PATH/var/postgresdata
    $CONDA_ENV_PATH/bin/postgres  -D  $CONDA_ENV_PATH/var/postgresdata  -c  listen_addresses=''  -c  unix_socket_directories=$CONDA_ENV_PATH/var/postgressocket &
    sleep 5

It is then possible to create a datgabase specifying the socket as a host

    createdb -h $CONDA_ENV_PATH/var/postgressocket/ dev_db

The RDKit and HStore extensions that ChemBio Hub Platform uses are ready to set up and use

    psql  -h $CONDA_ENV_PATH/var/postgressocket -c "create extension hstore;create extension rdkit;" ${ENV_NAME}_db

All that remains now is to make the tables to run the ChemBio Hub application

    python manage.py migrate
    python manage.py reindex_compounds
    python manage.py reindex_datapoint_classifications
    python manage.py createsuperuser
    python manage.py collectstatic

Once these steps are done, in order to run the system in production, a few more steps are required to link the front end and back end up, to ensure the processes keep running and to secure the application.

If you have any questions about the procedures described in this post, please contact me my email address is in the link at the top of the post. Alternativley you can leave a comment on this post below.
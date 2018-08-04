Azure Kubernetes Basic Workshop
=========================

Prerequisites
-------------
- *Azure CLI - [Installation Instructions](https://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-deploy-cluster)*
- *kubectl - [Installation Instructions](https://kubernetes.io/docs/tasks/tools/install-kubectl/)*
- *Docker - [Installation Instructions](https://docs.docker.com/install/)*
- *Docker Compose - [Installation Instructions](https://docs.docker.com/compose/install/)*
- *Helm - [Installation Instructions](https://github.com/kubernetes/helm/blob/master/docs/install.md)*
- *Draft - [Installation Instructions](https://github.com/Azure/draft/blob/master/docs/install.md)*
- *AKS Cluster - up and running*



Usefull Resources
------------------
- *[kubectl cheat sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)*
- *[Integrate ACR with AKS](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-auth-aks)*
- *[Helm quickstart guide](https://docs.helm.sh/using_helm/#quickstart)*


Workshop
--------
1. Develop a simple hello world application:
Read a text from environment variable, make sure you're setting a default value.
2. Containerize the application:
Write a Dockerfile, set an entry point and declare ports and environment variables.
3. Run your docker:
Bonus - use docker-compose
4. Use draft to test your application on your Kubernetes Cluster
5. Deploy you application to Kubernetes cluster:
Write deployment.yaml & service.yaml files that describe your application. Provide the Environment variable.
Make sure your application is accessible from the internet. (hint - choose the right service type)
6. Change the environment variable and upgrade your application. Make sure it's chaned in ZERO DOWNTIME!
7. Now move the environment variable to configmap and change the deployment to read the env from config map
8. Now use secret intead of configmap.
9. Use Azure files as the container persistance data.
10. Change your app to dump data into files, each container should write one file. Show the amount of files.
11. Write an helm chart and use it to deploy, upgrade and rollback your app.

- *Bonus*: 
Integrate your cluster with ACI and deploy your application into ACI.


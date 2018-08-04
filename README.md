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
- *[The unofficial Kubernetes docs](https://unofficial-kubernetes.readthedocs.io/en/latest/)*

Workshop
--------
1. Develop a simple hello world application:
Read a text from environment variable, make sure you're setting a default value.

2. Containerize the application:
Write a Dockerfile, set an entry point and declare ports and environment variables.

3. Run your docker:
Bonus - use docker-compose

4. Use draft to test your application on your Kubernetes Cluster

5. Deploy you 1 instance of the application to Kubernetes cluster:
Write deployment.yaml & service.yaml files that describe your application. Specify the Environment variable.
Make sure you app will always run and automatcally recreated in failures. Make tha app accessible from the internet. (hint - choose the right Kubernetes service type)

6. Change the environment variable and upgrade your application. Make sure it's chaned in ZERO DOWNTIME!

7. Move the environment variable to configmap and change the deployment to read the env from config map.

8. Use configmap as volume instead of env.

9. Use secret as env intead of configmap.

10. Use Azure files as the container persistance data, drop file into azure files and show a message on that new file in your app.

12. Write an helm chart and use it to deploy, upgrade and rollback your app.

- *Bonus*: 
Integrate your cluster with ACI and deploy your application into ACI.


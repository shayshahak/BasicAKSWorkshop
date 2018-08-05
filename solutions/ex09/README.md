```
# create a storage account in the same resource group as your AKS generated RG

docker build . -t idanshahar/example-app:ex09

docker push idanshahar/example-app:ex09

kubectl apply -f azure-file-sc.yaml

kubectl apply -f azure-file-pvc.yaml

kubectl apply -f example-app-deployment.yaml

```


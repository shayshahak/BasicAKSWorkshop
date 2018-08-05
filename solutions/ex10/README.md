```

helm init

helm create example-app

helm install ./example-app --set image.repository=idanshahar/example-app,image.tag=latest,service.type=LoadBalancer,service.port=8080 --name helm-example-app

```



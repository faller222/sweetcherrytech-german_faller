```
docker run -d --name sweet-mysql -v ./docker:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1q2w3e4r mysql:8.2.0
```

```
sudo yum install java-21-amazon-corretto-headless
java -version
```

```
ssh -i "sweet.pem" ec2-user@ec2-3-147-58-115.us-east-2.compute.amazonaws.com

scp -i ./.xxx/sweet ./target/fullstack-test-0.0.1-SNAPSHOT.jar ec2-user@ec2-3-147-58-115.us-east-2.compute.amazonaws.com:/home/ec2-user/fullstack.jar
```

```
http://ec2-3-147-58-115.us-east-2.compute.amazonaws.com:8080/products

http://3.147.58.115:8080/products
```


- 2 Horas - Armando el ambiente local, node + hyperV + docker
- 2 Horas - End to end del metodo getProducts; problemas con lombok, no generaba codigo. 
- 2 Horas - Configurando liquibase & h2 , batallando con los perfiles (test, produccion), Unit/Integration test
- 1 Hora  - Despliegue en AWS, configurando regla de TCP
cd frontend
rm -rf build
npm run build
cd ..

cp -r ./frontend/build/* ./backend/src/main/resources/static/
cd backend
mvn clean install

scp -i ./.xxx/sweet ./target/fullstack-test-0.0.1-SNAPSHOT.jar ec2-user@ec2-3-147-58-115.us-east-2.compute.amazonaws.com:/home/ec2-user/fullstack.jar
cd ..
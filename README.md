
### Run StackHawk Scanner

```
docker run -e API_KEY=${HAWK_API_KEY} --rm -v  "$PWD":/hawk:rw --network -it stackhawk/hawkscan:latest
```
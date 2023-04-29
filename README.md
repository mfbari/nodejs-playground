
### Run StackHawk Scanner

```
docker run -e API_KEY=${HAWK_API_KEY} --rm -v  "$PWD":/hawk:rw --network -it stackhawk/hawkscan:latest
```

### DB Connection String

```
'mongodb://root:pass@localhost:27017/shop?authSource=admin&retryWrites=true'
```

### User ID

```
644d4004f2a1ee851c7d51d8
```
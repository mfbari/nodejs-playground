
### Run StackHawk Scanner

```
export HAWK_API_KEY="hawk.IoowbMGZOcWJOXiMOIm3.9JCEtGLSYa4ofR7yzhWN"
docker run -e API_KEY=${HAWK_API_KEY} --rm -v  "$PWD":/hawk:rw --network host -it stackhawk/hawkscan:latest
```
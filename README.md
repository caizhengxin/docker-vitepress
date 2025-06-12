# docker vitepress

## Usage

```bash
$ git clone https://github.com/caizhengxin/docker-vitepress.git
$ cd docker-vitepress

# $ docker build -t vitepress:2.0.0-alpha.5 .
# New version
$ docker buildx build -t vitepress:2.0.0-alpha.5 .

# "path" replaces the actual path
$ sudo dockerun --rm --name vitepress -v /path/vitepress-demo/:/app/ -it vitepress:2.0.0-alpha.5
```
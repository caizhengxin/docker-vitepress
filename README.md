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

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Where should VitePress look for your markdown files?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
◇  Add a prefix for VitePress npm scripts?
│  Yes
│
◇  Prefix for VitePress npm scripts:
│  docs
│
└  Done! Now run npm run docs:dev and start writing.
```

```bash
# "path" replaces the actual path
$ ll /path/vitepress-demo/
```
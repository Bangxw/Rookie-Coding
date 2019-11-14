# Node相关

## NVM (Node Version Manager)

> NVM——Node Version Manager（Node版本管理器），用它可以方便的在机器上安装并维护多个Node的版本。那么为什么需要多个版本呢？场景有很多，比方说：你可能同时进行两个项目，而不同项目所使用的node版本是不一样的；又或者你要用更新的版本是做一些实验。这种情况下，如果没有NVM自己去安装和维护多个版本的node也是一件比较麻烦的事情。这就是NVM的价值。

### nvm安装配置

1. [下载](https://github.com/coreybutler/nvm-windows/releases)
2. 解压，双击install.cmd
3. 配置settings.txt
4. 配置环境变量
5. [参开文献](https://segmentfault.com/a/1190000009442289)

```bash
配置settings.txt:
root: C:\0x64\Roaming\nvm
path: C:\0x64\Roaming\nodejs
arch: 64
proxy: none
node_mirror: http://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/

配置环境变量:
%NVM_HOME% => C:\0x64\Roaming\nvm
%NVM_SYMLINK% => C:\0x64\Roaming\nodejs
```

### nvm常用命令

1. 检查是否成功：`nvm -v`
2. 使用淘宝node镜像：`nvm node_mirror https://npm.taobao.org/mirrors/node/`或者`nvm npm_mirror https://npm.taobao.org/mirrors/npm/`
3. 安装指定版本的node：`nvm install 8.11.3`
4. 查看当前电脑的node版本：`nvm ls`
5. 切换node.js版本：`nvm use 8.11.3`
6. 查看服务器可用列表：`nvm ls abailable`

## NPM (node package manager)

### npm安装配置

1. 配置npm的全局安装环境：`npm config set prefix "C:\0x64\Software\Roaming\npm"`
2. 配置环境变量(注意path中NPM_HOME一定在NVM_SYMLINK之前)：`%NPM_HOME% => C:\0x64\Software\Roaming\npm`

### npm常用命令

1. 使用国内镜像：`npm install -g cnpm --registry=http://r.cnpmjs.org`

### 系统常用npm包

1. cnpm
2. http-server

## NRM

> 提供了一些最常用的NPM包镜像地址，能够让我们快速的切换安装包时候的服务器地址

**注意**：只是单纯的提供了几个常用的下载包的URL地址并能够让我们在这几个地址之间方便的进行切换，但是我们每次装包的时候使用的装包的工具都是使用npm

### 常用命令

* `npm i nrm -g` 全局安装
* `nrm ls` 查看当前所有可用镜像源地址以及当前所使用的镜像源地址
* 使用 `nrm use npm` 切换不同的镜像源地址

## NPX

> 这个是在 npmv5.2.0引入的一条命令（查看），引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验。

```JS
npx create-react-app my-cool-new-app // 这条命令会临时安装 create-react-app 包，命令完成后会删掉，不会出现在 global中。下次再执行，还是会重新临时安装。
```

特点：

* 临时安装可执行依赖包，不用全局安装，不用担心长期的污染。
* 可以执行依赖包中的命令，安装完成自动运行。
* 自动加载node_modules中依赖包，不用指定$PATH。
* 可以指定node版本、命令的版本，解决了不同项目使用不同版本的命令的问题。

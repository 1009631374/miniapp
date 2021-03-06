## 虎牙小程序示例代码

### 目录说明

包括两个部分：

* web：使用[开发工具hyext](https://github.com/huya-ext/miniapp/wiki/%E8%84%9A%E6%89%8B%E6%9E%B6)选择react作为基础的事例代码。
* app：使用[开发工具hyext](https://github.com/huya-ext/miniapp/wiki/%E8%84%9A%E6%89%8B%E6%9E%B6)选择react-native作为基础的事例代码。

### 使用说明

安装[开发工具hyext](https://github.com/huya-ext/miniapp/wiki/%E8%84%9A%E6%89%8B%E6%9E%B6)，执行初始化：

```bash
# web
hyext init demo-web
# app
hyext init DemoApp
```

然后把web目录里面的文件覆盖到demo-web里面，把app目录里面的文件覆盖到DemoApp里面，开始开发：

```bash
# web
cd demo-web
hyext run dev
# app
cd DemoApp
hyext run dev
```

其中web有两个页面：

* [http://localhost:8080/web.html](http://localhost:8080/web.html)：使用的是虎牙小程序Web端H5 SDK。
* [http://localhost:8080/pc.html](http://localhost:8080/pc.html)：使用的是虎牙小程序PC端H5 SDK。

web使用虎牙小程序平台提供的线上[开发工具](http://hyext.msstatic.com/hy-ext-comp/1.1.0/dev/index.html)进行开发调试。

app执行完毕之后使用虎牙小程序平台提供的企业版虎牙直播APP扫码进入调试界面。

开发调试完成之后，在项目的根目录中执行`hyext release`，分别生成`web`和`app`目录。把这两个目录打到一个`.zip`包里，目录结构如下：

```bash
.
|--web
|--app
```

在[开发者中心](https://ext.huya.com)的程序配置中按如下信息配置：

![小程序配置](assets/demo-config.png)

然后为其中一个小程序上传这个压缩包，配置白名单，就可以提测体验虎牙小程序的基础能力了。

相关流程：

* [快速开始](https://github.com/huya-ext/miniapp/wiki)
* [开发者中心](https://github.com/huya-ext/miniapp/wiki/ems)
* [SDK文档](https://github.com/huya-ext/miniapp/wiki/SDK%E6%96%87%E6%A1%A3)

# gulp-简易工作流
在我们开发过程中，改了一个html、css或者js，都要重新刷新一下浏览器来查看新的效果。这样使我们的开发效率打了个折扣（尤其是开发H5的页面），gulp工作流就是帮助我们更好、更快地避免这个繁琐的过程。

# 使用方法
  gulp是基于node.js上运行的，所以在使用gulp之前，我们需要先配置一下运行环境
  
### 1.安装node.js
   
   node.js下载地址： https://nodejs.org/en/ 
   
   然后下载适合自己电脑系统的msi安装包进行安装，一般首页那个就可以的（可能有点慢，毕竟是外国网站，想快一点的同学就要采取某些措施，你懂的）
   
   安装成功之后就可以使用npm命令行了，开始键+R，输入cmd，然后输入“npm -v”，回车。安装成功的话就会显示当前的node版本，没有显示的话就是安装不成功了。
  
### 2.安装gulp

  gulp官方网站：http://www.gulpjs.com.cn
  
  输入命令行“npm install -g gulp”，回车。安装成功之后打开您的项目的根目录，创建一个文件夹并命名为“node_modules”，然后按住shift点击右键，选择“在此处打开命令窗口”，然后在命令窗口输入“npm install --save-dev gulp”，回车。
  
  这时候您已经在该项目配置好gulp的开发环境了，你会看见node_modules下面多了两个文件夹（.bin和gulp），但离实现同步刷新，还需要做多几个步骤。
  
### 3.安装Browser-sync插件

  Browser-sync可以作为gulp工作流的一个插件
  
  Browser-sync官方网站：http://www.browsersync.cn/
  
  打开项目根目录，按住shift点击右键，选择“在此处打开命令窗口”，然后在命令窗口输入“npm install --save-dev browser-sync”，回车。安装Browser-sync。安装成功之后，node_modules下面也会多了一个名为browser-sync的文件夹。

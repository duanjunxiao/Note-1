(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{499:function(s,t,a){"use strict";a.r(t);var n=a(20),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux命令记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux命令记录"}},[s._v("#")]),s._v(" Linux命令记录")]),s._v(" "),a("h2",{attrs:{id:"centos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[s._v("#")]),s._v(" CentOS")]),s._v(" "),a("h3",{attrs:{id:"jar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jar"}},[s._v("#")]),s._v(" Jar")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Jar启动，日志文件nohup.out")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" java -jar dev.jar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Jar启动，日志文件>logs.out")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" java -jar dev.jar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("logs.out "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Jar启动，日志文件>logs.out")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" java -jar dev.jar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("logs.out "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Jar启动，日志文件>logs.out，推荐")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" java -jar dev.jar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("logs.out "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Jar启动，日志文件>catalina.out，推荐")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" /app/java/jdk1.8.0_171/bin/java -Xms1024m -Xmx4096m -Xmn1024m -jar PDMS.jar --spring.profiles.active"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/app/midl_PDMS/catalina.out "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),a("h3",{attrs:{id:"tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[s._v("#")]),s._v(" Tomcat")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nbin/startup.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止")]),s._v("\nbin/shutdown.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f logs/catalina.out\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" tomcat\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" java\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀进程，不推荐，推荐采用JVM安全退出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 pid\n")])])]),a("h3",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" Redis")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看信息，-a abredis123是密码")]),s._v("\n./redis-cli -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" -a abredis123 info Replication\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\n/usr/local/redis/bin/redis-server /usr/local/redis/myconf/redis.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀进程，不推荐，推荐自带方式安全退出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 pid\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭，-a abredis123是密码")]),s._v("\n/usr/local/redis/bin/redis-cli "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" -a abredis123 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n")])])]),a("h3",{attrs:{id:"user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[s._v("#")]),s._v(" User")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统中有哪些用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" /etc/passwd\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看可以登录系统的用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v /sbin/nologin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看用户组")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" /etc/group\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看某一用户")]),s._v("\nw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看登录用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("who")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看用户登录历史记录")]),s._v("\nlast\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改root用户密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root用户修改其他用户密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改sc_vas文件夹及下面所有文件所属用户为develop，所属用户组为sc_vass")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R develop:sc_vass sc_vas\n")])])]),a("h3",{attrs:{id:"system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system"}},[s._v("#")]),s._v(" System")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 磁盘剩余大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -h\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 所有磁盘剩余大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -ah\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 当前操作系统版本信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/version\nlsb_release -a\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 当前操作系统发行版信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/issue\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/redhat-release\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看CPU相关信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 32还是64")]),s._v("\ngetconf LONG_BIT\n")])])]),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/fefjay/p/6047820.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("CentOS6.5下修改文件夹权限和用户名用户组"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[s._v("#")]),s._v(" Ubuntu")]),s._v(" "),a("h3",{attrs:{id:"文件操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件操作"}},[s._v("#")]),s._v(" 文件操作")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -r upload /opt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" apache-tomcat-8.5.16 /opt/apache-tomcat-8.5.16\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建链接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /opt/apache-tomcat-8.5.16/ /opt/tomcat8\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /opt/tomcat8/bin/startup.sh /usr/bin/startup.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /opt/tomcat8/bin/shutdown.sh /usr/bin/shutdown.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf lingzhi：\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加上sudo为以管理运行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf lingzhi\n")])])]),a("h3",{attrs:{id:"下载文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载文件"}},[s._v("#")]),s._v(" 下载文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://mirrors.cnnic.cn/apache/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://mirrors.shu.edu.cn/apache/maven/maven-3/3.5.3/binaries/apache-maven-3.5.3-bin.tar.gz\n")])])]),a("h3",{attrs:{id:"压缩包处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压缩包处理"}},[s._v("#")]),s._v(" 压缩包处理")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压tar包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf file.tar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压tar.gz")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf file.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压tar.bz2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xjvf file.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压tar.Z")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xZvf file.tar.Z\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压rar")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unrar")]),s._v(" e file.rar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压zip")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" file.zip\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压war")]),s._v("\njar -xvf project.war\n")])])]),a("h3",{attrs:{id:"vim命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim命令"}},[s._v("#")]),s._v(" VIM命令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" fileName\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 插入")]),s._v("\n:i\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不保存退出")]),s._v("\n:q\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不保存强制退出")]),s._v("\n:q"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存退出")]),s._v("\n:wq\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找")]),s._v("\n/ \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将光标移动到文档开头")]),s._v("\ngg\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将光标移动到文档末尾")]),s._v("\nG\n")])])]),a("h3",{attrs:{id:"ssh上传下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh上传下载"}},[s._v("#")]),s._v(" SSH上传下载")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先下载lrzsz安装库包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" lrzsz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传，直接敲rz即可选择你想传到Linux的文件")]),s._v("\nrz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载，直接敲sz即可选择你下载的文件")]),s._v("\nsz\n")])])]),a("h3",{attrs:{id:"防火墙端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防火墙端口"}},[s._v("#")]),s._v(" 防火墙端口")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火墙状态")]),s._v("\nufw status\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许外网可以访问8080端口")]),s._v("\nufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看端口使用情况")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -apn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看端口使用情况")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -anop "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n")])])]),a("h3",{attrs:{id:"环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[s._v("#")]),s._v(" 环境变量")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAVEN_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/apache-maven-3.3.9\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MAVEN_HOME}")]),s._v("/bin\n")])])]),a("h3",{attrs:{id:"卸载软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载软件"}},[s._v("#")]),s._v(" 卸载软件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除为了满足其他软件包的依赖而安装的，系统会自动卸载这些不再需要的软件包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" autoremove\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除已安装的软件包（保留配置文件）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" remove "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("+软件包名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除已安装包，同时删除配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" –purge remove "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("+软件包名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除已经卸载的软件包的.deb安装文件")]),s._v("\nautoclean\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除安装了的软件包的安装包（如果你确定这些安装包不会再用）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" clean\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 类似上面的命令，但它删除包缓存中的所有包")]),s._v("\nclean\n")])])]),a("ul",[a("li",[s._v("示例")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 软件删除都是这样jdk，tomcat")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" remove mysql-*\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" purge mysql-*\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" remove tomcat*\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后清理残留的数据")]),s._v("\ndpkg -l "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" ^rc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" dpkg -P\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" autoremove\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" autoclean\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找软件目录，卸载后查找到文件残留就删除了")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
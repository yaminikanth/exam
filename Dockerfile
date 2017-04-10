FROM centos
RUN yum -y update; \
yum install -y wget; \
mkdir /opt/softwares; \
cd /opt/softwares; \
wget http://www.webhostingreviewjam.com/mirror/apache/tomcat/tomcat-8/v8.5.13/bin/apache-tomcat-8.5.13.tar.gz; \
tar -xf apache-tomcat-8.5.13.tar.gz; \
rm -rf apache-tomcat-8.5.13.tar.gz
EXPOSE 8080

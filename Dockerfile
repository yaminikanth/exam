FROM tomcat
COPY target/exam-1.0.0.war /opt/softwares/apache-tomcat-8.5.13/webapps/exam-1.0.0.war
CMD ["catalina.sh", "run"]

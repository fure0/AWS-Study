FROM ubuntu:14.04
# Install dependencies
#RUN mv /etc/apt/sources.list.d{,.backup}
#RUN mkdir /etc/apt/sources.list.d
#RUN cp /usr/share/doc/apt/examples/sources.list /etc/apt/sources.list
RUN apt-get update -y
RUN apt-get install -y apache2

# Install apache and write hello world message
RUN echo "안녕하세요! ECS ECR 도커 컨테이너 실습시간입니다!! " > /var/www/index.html


# Configure apache
RUN a2enmod rewrite
RUN chown -R www-data:www-data /var/www
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2

EXPOSE 80

CMD ["/usr/sbin/apache2", "-D",  "FOREGROUND"]

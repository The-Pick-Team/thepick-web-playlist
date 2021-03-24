FROM nginx
#COPY dist /usr/share/nginx/html
RUN mkdir temporary
RUN echo "<h1>tmp index.html file </h1>" > temporary/index.html
RUN pwd
RUN ls temporary/index.html

RUN cd temporary && cp -r . /usr/share/nginx/html

RUN ls /usr/share/nginx/html

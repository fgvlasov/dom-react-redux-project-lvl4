# enable PHP v8.0
amazon-linux-extras enable php8.0

# install composer globally
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '906a84df04cea2aa72f40b5f787e49f22d4c2f19492ac310e8cba5b96ac8b64115ac402c8cd292b8a03482574915d1a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"

# install PHP 8.0 and required modules
yum install php-cli php-pdo php-fpm php-mysqlnd php-mbstring php-xml php-intl php-opcache

# install Symfony v6.0.99
composer create-project symfony/skeleton local2.natmatch.org
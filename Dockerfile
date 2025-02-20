# تحديد صورة PHP مع Composer
FROM php:8.2-fpm

# تثبيت الإضافات المطلوبة
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# تثبيت Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# إعداد دليل العمل
WORKDIR /var/www

# نسخ ملفات التطبيق
COPY . .

# تثبيت الحزم
RUN composer install --no-dev --optimize-autoloader

RUN npm install

# ضبط صلاحيات التخزين
RUN chmod -R 777 storage bootstrap/cache

CMD ["php-fpm"]

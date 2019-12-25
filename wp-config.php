<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'u0906137_default');

/** Имя пользователя MySQL */
define('DB_USER', 'u0906137_default');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '8U0f1B2g');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

define('WP_SITEURL', 'http://ligohotel.ru');
define('WP_HOME', 'http://ligohotel.ru');
/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'I|:5F?|#95E6gyJnTREO,wd8QDmUj_W}j#2_)|Zr`!W@+WJD,ge},VvG<UAj}T$_');
define('SECURE_AUTH_KEY',  '{l@r:U-T+-e}GW^Q:2e7s|}&I8YuW9[oL^]?,PaaiYdzk:!Ndqef20gEEM%d^oz4');
define('LOGGED_IN_KEY',    's9x/?Io2/Nl2JDpTn_zacDhKeSn|pYG0.Y))*,{#*raC;.hqv]fA,d|Z]1}K:9_=');
define('NONCE_KEY',        '&q!-3v}llIayr .[2)vSS[n<eE2jvGDP;`Jqu..0i+TX@*RJ6=eI,S[bw7*tZIS.');
define('AUTH_SALT',        '6xSd!rZSSja79Y(d0AlB~BXpJtCSi~l)|+%$R2riH{w^?LutyzPVq)i~%B9?C3|7');
define('SECURE_AUTH_SALT', '@k<Y<m j+lZALG^Zu;7jpC`Py+Z>>L%;bPSERh2 fl*aE0|5HYq}(w)wQ/2F(kAY');
define('LOGGED_IN_SALT',   'M3*Za3(QFv^x)Lw.UY`5?eQIZ0]68iWt,kyhEncO{_@n/zOrU<?j:6TMsJEy7,tA');
define('NONCE_SALT',       '+8xWD9G,bI?tGpWp!rjt7[]6 P!`U(-MU%1NU,OQIynvR5@4i~O[Wq*8F3Z0zXo}');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 * 
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');

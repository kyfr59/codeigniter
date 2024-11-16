<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/mentions-legales', 'Statics::legalNotices');

service('auth')->routes($routes);

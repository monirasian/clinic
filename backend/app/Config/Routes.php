<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

// Swagger / OpenAPI
$routes->get('swagger', 'SwaggerController::index');
$routes->get('swagger.json', 'SwaggerController::json');

// Health check
$routes->get('api/ping', 'Api\\Ping::index');

// Auth
$routes->post('api/login', 'Api\\AuthController::login');
$routes->post('api/auth/login', 'Api\\AuthController::login');
$routes->post('api/admin/login', 'Api\\AuthController::login');

// Public read resources
$routes->group('api', static function (RouteCollection $routes): void {
	$publicReadResources = [
		'clinics'     => 'Api\\clinicsController',
		'departments' => 'Api\\DepartmentsController',
		'doctors'     => 'Api\\DoctorsController',
		'staff'       => 'Api\\StaffController',
	];

	foreach ($publicReadResources as $resource => $controller) {
		$routes->resource($resource, ['controller' => $controller, 'only' => ['index', 'show']]);
	}
});

// Protected write + CRUD resources
$routes->group('api', ['filter' => 'jwtauth'], static function (RouteCollection $routes): void {
	$routes->post('logout', 'Api\\AuthController::logout');
	$routes->post('auth/logout', 'Api\\AuthController::logout');
	$routes->post('admin/logout', 'Api\\AuthController::logout');

	// Admin-only (system administration)
	$routes->group('', ['filter' => 'roleauth:Admin'], static function (RouteCollection $routes): void {
		$adminResources = [
			'clinics'     => 'Api\\clinicsController',
			'departments' => 'Api\\DepartmentsController',
			'doctors'     => 'Api\\DoctorsController',
			'staff'       => 'Api\\StaffController',
			'rooms'       => 'Api\\RoomsController',
			'schedules'   => 'Api\\SchedulesController',
			'users'       => 'Api\\UsersController',
			'roles'       => 'Api\\RolesController',
		];

		foreach ($adminResources as $resource => $controller) {
			$routes->resource($resource, ['controller' => $controller, 'only' => ['index', 'show', 'create', 'update', 'delete']]);
		}

		// Composite-key endpoints
		$routes->get('userroles', 'Api\\UserRolesController::index');
		$routes->get('userroles/(:num)/(:num)', 'Api\\UserRolesController::showComposite/$1/$2');
		$routes->post('userroles', 'Api\\UserRolesController::create');
		$routes->put('userroles/(:num)/(:num)', 'Api\\UserRolesController::updateComposite/$1/$2');
		$routes->patch('userroles/(:num)/(:num)', 'Api\\UserRolesController::updateComposite/$1/$2');
		$routes->delete('userroles/(:num)/(:num)', 'Api\\UserRolesController::deleteComposite/$1/$2');
	});

	// Appointments + patients (Admin/Doctor/Nurse/Receptionist)
	$routes->group('', ['filter' => 'roleauth:Admin,Doctor,Nurse,Receptionist'], static function (RouteCollection $routes): void {
		$routes->resource('patients', ['controller' => 'Api\\PatientsController', 'only' => ['index', 'show', 'create', 'update', 'delete']]);
		$routes->resource('appointments', ['controller' => 'Api\\AppointmentsController', 'only' => ['index', 'show', 'create', 'update', 'delete']]);
	});

	// clinical module (Admin/Doctor/Nurse)
	$routes->group('', ['filter' => 'roleauth:Admin,Doctor,Nurse'], static function (RouteCollection $routes): void {
		$routes->resource('medicalrecords', ['controller' => 'Api\\MedicalRecordsController', 'only' => ['index', 'show', 'create', 'update', 'delete']]);
		$routes->resource('labresults', ['controller' => 'Api\\LabResultsController', 'only' => ['index', 'show', 'create', 'update', 'delete']]);
		$routes->resource('prescriptions', ['controller' => 'Api\\PrescriptionsController', 'only' => ['index', 'show', 'create', 'update', 'delete']]);
		$routes->resource('prescriptionitems', ['controller' => 'Api\\PrescriptionItemsController', 'only' => ['index', 'show', 'create', 'update', 'delete']]);
	});

	// Billing module (Admin/Receptionist)
	$routes->group('', ['filter' => 'roleauth:Admin,Receptionist'], static function (RouteCollection $routes): void {
		$routes->resource('invoices', ['controller' => 'Api\\InvoicesController', 'only' => ['index', 'show', 'create', 'update', 'delete']]);
		$routes->resource('invoiceitems', ['controller' => 'Api\\InvoiceItemsController', 'only' => ['index', 'show', 'create', 'update', 'delete']]);
		$routes->resource('payments', ['controller' => 'Api\\PaymentsController', 'only' => ['index', 'show', 'create', 'update', 'delete']]);
		$routes->resource('paymentitems', ['controller' => 'Api\\PaymentItemsController', 'only' => ['index', 'show', 'create', 'update', 'delete']]);
	});
});

<?php

// Forsíðan gefur okkur index.php
// Þurfum ekki að nota Blade
Route::get('/', function() {

	View::make('index');
});

// API Routes
Route::group(['prefix' => 'api'], function() {

	// Gerum bara resource fyrir athugasemdir, hafa þetta stutt
	Route::resource('comments', 'CommentController',
		['only' => ['index', 'store', 'destroy']]);
});

// Bara catch all route sem leyfir Angular að stjórna öllum routes
App::missing(function($exception) {

	return View::make('index');
});
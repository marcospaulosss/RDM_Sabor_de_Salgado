<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(SaborDeSalgado\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => bcrypt(str_random(20)), // secret
        'phone' => $faker->numberBetween(1111111111, 11999999999),
        'active' =>$faker->randomElement([1, 2]),
        'remember_token' => str_random(10),
    ];
});

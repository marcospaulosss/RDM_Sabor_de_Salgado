<?php

namespace SaborDeSalgado\Providers;

use Illuminate\Support\ServiceProvider;
use SaborDeSalgado\Repositories\UserRepository;
use SaborDeSalgado\Repositories\UserRepositoryEloquent;

class SaborDeSalgadoRepositoryProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
          UserRepository::class,
          UserRepositoryEloquent::class
        );
    }
}

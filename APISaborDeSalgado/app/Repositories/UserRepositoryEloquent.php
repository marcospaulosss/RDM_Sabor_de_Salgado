<?php
/**
 * Created by PhpStorm.
 * User: marcospaulo
 * Date: 08/08/2018
 * Time: 09:13
 */

namespace SaborDeSalgado\Repositories;


use Prettus\Repository\Eloquent\BaseRepository;
use SaborDeSalgado\Entities\User;

class UserRepositoryEloquent extends BaseRepository implements UserRepository
{

  /**
   * Specify Model class name
   *
   * @return string
   */
  public function model()
  {
    return User::class;
  }
}
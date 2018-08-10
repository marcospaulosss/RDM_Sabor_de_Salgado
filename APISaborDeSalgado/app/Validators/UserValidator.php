<?php
/**
 * Created by PhpStorm.
 * User: marcospaulo
 * Date: 10/08/2018
 * Time: 09:06
 */

namespace SaborDeSalgado\Validators;


use Prettus\Validator\LaravelValidator;

class UserValidator extends LaravelValidator
{
 protected $rules = [
   'name' => 'required|nullable|max:150',
   'email' => 'required|nullable|unique:users|email',
   'phone' => 'required',
   'password' => 'required|nullable|min:6|max:8',
 ];
}
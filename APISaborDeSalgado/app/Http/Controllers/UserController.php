<?php

namespace SaborDeSalgado\Http\Controllers;

use Illuminate\Http\Request;
use SaborDeSalgado\User;

class UserController extends Controller
{
    public function index(){
      return User::all();
    }
}

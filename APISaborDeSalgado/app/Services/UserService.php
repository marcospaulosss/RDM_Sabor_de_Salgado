<?php
/**
 * Created by PhpStorm.
 * User: marcospaulo
 * Date: 10/08/2018
 * Time: 08:55
 */

namespace SaborDeSalgado\Services;


use Prettus\Validator\Exceptions\ValidatorException;
use SaborDeSalgado\Repositories\UserRepository;
use SaborDeSalgado\Validators\UserValidator;

class UserService
{
  /**
   * @var UserRepository
   */
  protected  $repository;

  /**
   * @var UserValidator
   */
  protected $validator;

  /**
   * UserService constructor.
   * @param $repository
   * @param $validator
   */
  public function __construct(UserRepository $repository, UserValidator $validator)
  {
    $this->repository = $repository;
    $this->validator = $validator;
  }

  public function create(array $data)
  {
    try {
      $this->validator->with($data)->passesOrFail();

      $data['password'] = bcrypt($data['password']);
      $data['remember_token'] = str_random(10);

      return $this->repository->create($data);
    } catch (ValidatorException $e) {
      return [
        'error' => true,
        'message' => $e->getMessageBag()
      ];
    }
  }

  public function update(array $data, $id)
  {
    try {
      $this->validator->with($data)->passesOrFail();
      return $this->repository->update($data, $id);
    } catch (ValidatorException $e) {
      return [
        'error' => true,
        'message' => $e->getMessageBag()
      ];
    }
  }

  public function login(array $data)
  {
    try {
      $result = $this->repository->findWhere([
        'email' => $data['email'],
        'active' => 1
      ]);

      if ($result->count() > 0)
        return $result->all();
      else
        return ['error' => true, 'message' => 'Usuário não encontrado'];

    } catch (\Exception $e) {
      return [
        'error' => true,
        'message' => $e->getMessage()
      ];
    }
  }
}
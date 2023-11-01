<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public static function create(Request $request)
    {
        $user = new User();

        $existingUser = User::where('cpf', $request->input("cpf"))->first();

        if ($existingUser) {
            return response()->json(['message' => 'CPF já existente!'], 400);
        }

        $user->name = $request->input('name');
        $user->cpf = $request->input("cpf");
        $user->born = $request->input("born");
        $user->phone = $request->input("phone");
        $user->address = $request->input("address");
        $user->number = $request->input("number");
        $user->neighborhood = $request->input("neighborhood");
        $user->complement = $request->input("complement");
        $user->state = $request->input("state");
        $user->city = $request->input("city");
        $user->cep = $request->input("cep");

        $user->save();

        return response()->json(['message' => 'Usuário criado com sucesso!'], 200);
    }

    public function update(Request $request, $uuid)
    {
        $user = User::where('uuid', $uuid)->first();

        if (!$user) {
            return response()->json(['message' => 'Usuário não encontrado'], 404);
        }

        $user->name = $request->input('name');
        $user->cpf = $request->input("cpf");
        $user->born = $request->input("born");
        $user->phone = $request->input("phone");
        $user->address = $request->input("address");
        $user->number = $request->input("number");
        $user->neighborhood = $request->input("neighborhood");
        $user->complement = $request->input("complement");
        $user->state = $request->input("state");
        $user->city = $request->input("city");
        $user->cep = $request->input("cep");
    
        $user->save();

        return response()->json(['message' => 'Usuário atualizado com sucesso'], 200);
    }

    public function delete($uuid)
    {
        $user = User::where('uuid', $uuid)->first();

        if (!$user) {
            return response()->json(['message' => 'Usuário não encontrado'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'Usuário excluído com sucesso'], 200);
    }


    public function getUser($uuid)
    {

        $user = User::where('uuid', $uuid)->first()->makeHidden('id');

        if (!$user) {
            return response()->json(['message' => 'Usuário não encontrado'], 404);
        }

        return response()->json($user, 200);
    }

    public function getAll()
    {
        $users = User::orderBy('updated_at', 'desc')->get()->makeHidden(['id']);

        return response()->json($users, 200);
    }

}

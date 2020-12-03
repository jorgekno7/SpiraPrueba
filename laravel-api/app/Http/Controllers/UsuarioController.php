<?php

namespace App\Http\Controllers;
Use App\Models\usuarios;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function index()
    {
        return usuarios::all();
    }

    public function alumns()
    {
        return usuarios::where('u_perfil','alumno')->get();
    }

    public function findById($id) {
        return usuarios::where('id',$id)->get();
    }

    public function store(Request $request)
    {
        $usuario = usuarios::create($request->all());

        return response()->json($usuario, 201);
    }
    
    public function login(Request $request)
    {
        $correo = $request->input('correo');
        $password=$request->input('pass');
        $usuario = usuarios::where([['u_email','=',$correo],['u_password','=',$password]])->first();
        if($usuario){
            return response()->json($usuario, 200);
        }else{
            return response()->json("Error de usuario o contraseña", 401);
        }

      
    }

    public function update(Request $request, $id)
    {     
        usuarios::where('id',$id)->update($request->all());       
        $usuario=usuarios::where('id',$id)->get();
        return response()->json($usuario, 200);
    }

    public function delete($id)
    {
        usuarios::where('id',$id)->delete();
        
        return response()->json(null, 204);
    }
}

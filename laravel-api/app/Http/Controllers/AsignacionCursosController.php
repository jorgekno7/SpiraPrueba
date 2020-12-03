<?php

namespace App\Http\Controllers;
Use App\Models\asignaciondecursosporusuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AsignacionCursosController extends Controller
{
    public function index()
    {
        $users = DB::select('SELECT a.id,a.fk_u_id,u.u_nombre,a.fk_c_id,c.c_nombre FROM asignaciondecursosporusuarios a
        inner join usuarios u on a.fk_u_id=u.id
        INNER JOIN cursos c on a.fk_c_id=c.id');

        return  $users;
    }

    public function findById($id) {
        
        $users = DB::select('SELECT a.id,u.u_nombre,c.c_nombre FROM asignaciondecursosporusuarios a 
        inner join usuarios u on a.fk_u_id=u.id
        INNER JOIN cursos c on a.fk_c_id=c.id
        where u.id = ?', [$id]);

        return  $users;
    }

    public function store(Request $request)
    {
        $asignacion = asignaciondecursosporusuario::create($request->all());

        return response()->json($asignacion, 201);
    }

    public function update(Request $request, $id)
    {     
        asignaciondecursosporusuario::where('id',$id)->update($request->all());       
        $asignacion=asignaciondecursosporusuario::where('id',$id)->get();
        return response()->json($asignacion, 200);
    }

    public function delete($id)
    {
        asignaciondecursosporusuario::where('id',$id)->delete();
        
        return response()->json(null, 204);
    }
}

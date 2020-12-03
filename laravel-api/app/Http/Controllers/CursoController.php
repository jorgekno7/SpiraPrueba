<?php

namespace App\Http\Controllers;
Use App\Models\cursos;
use Illuminate\Http\Request;

class CursoController extends Controller
{
    public function index()
    {
        return cursos::all();
    }

    public function findById($id) {
        return cursos::where('id',$id)->get();
    }

    public function store(Request $request)
    {
        $curso = cursos::create($request->all());

        return response()->json($curso, 201);
    }

    public function update(Request $request, $id)
    {     
        cursos::where('id',$id)->update($request->all());       
        $curso=cursos::where('id',$id)->get();
        return response()->json($curso, 200);
    }

    public function delete($id)
    {
        cursos::where('id',$id)->delete();
        
        return response()->json(null, 204);
    }
}

<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CursoController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\AsignacionCursosController;


Route::get('cursos',  [CursoController::class, 'index']);

Route::get('cursos/{curso}',[CursoController::class, 'findById']);

Route::post('cursos', [CursoController::class, 'store']);

Route::put('cursos/{curso}', [CursoController::class, 'update']);

Route::delete('cursos/{id}', [CursoController::class, 'delete']);

Route::get('usuarios',  [UsuarioController::class, 'index']);

Route::get('alumnos',  [UsuarioController::class, 'alumns']);

Route::get('usuarios/{usuario}',[UsuarioController::class, 'findById']);

Route::post('usuarios', [UsuarioController::class, 'store']);

Route::post('login', [UsuarioController::class, 'login']);

Route::put('usuarios/{usuario}', [UsuarioController::class, 'update']);

Route::delete('usuarios/{id}', [UsuarioController::class, 'delete']);

Route::get('asignaciondecursosporusuario',  [AsignacionCursosController::class, 'index']);

Route::get('asignaciondecursosporusuario/{asignacion}',[AsignacionCursosController::class, 'findById']);

Route::post('asignaciondecursosporusuario', [AsignacionCursosController::class, 'store']);

Route::put('asignaciondecursosporusuario/{asignacion}', [AsignacionCursosController::class, 'update']);

Route::delete('asignaciondecursosporusuario/{id}', [AsignacionCursosController::class, 'delete']);


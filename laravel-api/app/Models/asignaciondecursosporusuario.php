<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class asignaciondecursosporusuario extends Model
{

    protected $fillable = ['fk_u_id', 'fk_c_id'];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usuarios extends Model
{
    protected $fillable = ['u_nombre','u_email', 'u_password','u_telefono','u_perfil','u_estado'];

}

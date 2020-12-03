<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cursos extends Model {
    
        protected $fillable = ['c_nombre','c_intensidadHoraria', 'c_estado'];
    
}

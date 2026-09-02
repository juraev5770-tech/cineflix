<?php

namespace backend\controllers;

use yii\rest\ActiveController;
use Yii;

class MoviesController extends ActiveController
{
    // API qaysi model (jadval) bilan ishlashini ko'rsatamiz
    public $modelClass = 'common\models\Movies';

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        
        // React boshqa portdan (masalan localhost:5173) so'rov yuborganda bloklanmasligi uchun CORS yoqamiz
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::class,
        ];
        
        return $behaviors;
    }
}

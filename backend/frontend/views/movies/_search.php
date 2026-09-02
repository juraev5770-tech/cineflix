<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\MoviesSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="movies-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'title') ?>

    <?= $form->field($model, 'description') ?>

    <?= $form->field($model, 'poster') ?>

    <?= $form->field($model, 'video_url') ?>

    <?php // echo $form->field($model, 'duration') ?>

    <?php // echo $form->field($model, 'release_year') ?>

    <?php // echo $form->field($model, 'rating') ?>

    <?php // echo $form->field($model, 'views') ?>

    <?php // echo $form->field($model, 'is_premium') ?>

    <?php // echo $form->field($model, 'created_at') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>

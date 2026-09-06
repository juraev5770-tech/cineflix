<?php

declare(strict_types=1);

/** @var yii\web\View $this */

use yii\bootstrap5\Nav;
use yii\bootstrap5\NavBar;
use yii\helpers\Html;

$items = [
    ['label' => 'Home', 'url' => ['/site/index']],
    ['label' => 'Kinolar', 'url' => ['/movies/index']],
    ['label' => 'Kategoriyalar', 'url' => ['/categories/index']],
];

if (Yii::$app->user->isGuest) {
    $items[] = ['label' => 'Signup', 'url' => ['/site/signup']];
    $items[] = ['label' => 'Login', 'url' => ['/site/login']];
} else {
    $items[] = '<li>'
        . Html::beginForm(['/site/logout'], 'post', ['class' => 'd-inline'])
        . Html::submitButton(
            'Logout (' . Yii::$app->user->identity->username . ')',
            ['class' => 'btn btn-link logout text-decoration-none']
        )
        . Html::endForm()
        . '</li>';
}

NavBar::begin([
    'brandLabel' => 'CINEFLIX',
    'brandUrl' => Yii::$app->homeUrl,
    'options' => [
        'class' => 'navbar navbar-expand-md navbar-dark bg-dark fixed-top',
    ],
]);

echo Nav::widget([
    'options' => ['class' => 'navbar-nav ms-auto'],
    'items' => $items,
]);

NavBar::end();

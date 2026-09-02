<?php

declare(strict_types=1);

/** @var yii\web\View $this */
/** @var string $content */

use common\widgets\Alert;
use yii\bootstrap5\Breadcrumbs;
use yii\helpers\Html;

$this->render('_head');
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>" class="h-100" data-bs-theme="light">
<head>
    <?php $this->head() ?>
    <title><?= Html::encode($this->title) ?></title>
</head>
<style>
/* ==========================================================================
   1. UMUMIY SAHIFA VA FON (PREMIUM DARK)
   ========================================================================== */
body {
    background: radial-gradient(circle at top, #1a1a1a 0%, #111111 100%) !important;
    color: #ffffff !important;
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif !important;
    font-size: 15px !important;
}

/* Konteyner va sahifa sarlavhasi joylashuvi */
.container {
    max-width: 1400px !important;
    padding: 0 4% !important;
}

h1 {
    font-size: 36px !important;
    font-weight: 800 !important;
    letter-spacing: -0.5px !important;
    margin-bottom: 25px !important;
    color: #ffffff !important;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5) !important;
}

/* ==========================================================================
   2. YUQORI NAVBAR (NETFLIX STYLE)
   ========================================================================== */
.navbar {
    background-color: rgba(20, 20, 20, 0.85) !important;
    backdrop-filter: blur(15px) !important;
    -webkit-backdrop-filter: blur(15px) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
    padding: 20px 5% !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5) !important;
}

.navbar-brand {
    color: #E50914 !important;
    font-weight: 900 !important;
    font-size: 26px !important;
    letter-spacing: 2px !important;
    text-shadow: 0 0 15px rgba(229, 9, 20, 0.5) !important;
}

.nav-link {
    color: #E5E5E5 !important;
    font-size: 16px !important;
    font-weight: 500 !important;
    padding: 8px 16px !important;
    transition: all 0.3s ease !important;
}
.nav-link:hover {
    color: #ffffff !important;
    text-shadow: 0 0 8px rgba(255,255,255,0.6) !important;
}

/* ==========================================================================
   3. ASOSIY BOSHQARUV TUGMASI (YIRIK VA PREMIUM NEON)
   ========================================================================== */
.btn-success, a.btn-success {
    background: linear-gradient(135deg, #E50914 0%, #b81d24 100%) !important;
    border: none !important;
    color: #ffffff !important;
    font-size: 16px !important;
    font-weight: 700 !important;
    letter-spacing: 0.5px !important;
    text-transform: uppercase !important;
    border-radius: 6px !important;
    padding: 14px 32px !important; /* Tugma yiriklashtirildi */
    display: inline-flex !important;
    align-items: center !important;
    gap: 10px !important;
    text-decoration: none !important;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
    box-shadow: 0 6px 20px rgba(229, 9, 20, 0.4) !important;
    margin-bottom: 30px !important;
}

.btn-success:hover, a.btn-success:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 12px 28px rgba(229, 9, 20, 0.7) !important;
    background: linear-gradient(135deg, #ff1e27 0%, #E50914 100%) !important;
    color: #ffffff !important;
}

/* ==========================================================================
   4. JADVAL STRUKTURASI (ZAMONAVIY GRID-ROW KARTALAR)
   ========================================================================== */
.grid-view {
    padding: 0 !important;
    background: transparent !important;
}

.table {
    color: #ffffff !important;
    background-color: transparent !important;
    border-collapse: separate !important;
    border-spacing: 0 15px !important; /* Qatorlar orasida chiroyli masofa */
    margin-top: 10px !important;
    width: 100% !important;
}

/* Jadval sarlavhasi (Header) */
.table th {
    background-color: rgba(20, 20, 20, 0.6) !important;
    color: #808080 !important;
    border: none !important;
    text-transform: uppercase !important;
    font-size: 12px !important;
    font-weight: 700 !important;
    letter-spacing: 1.5px !important;
    padding: 15px 20px !important;
}
.table th a {
    color: #808080 !important;
    text-decoration: none !important;
}

/* Jadval qatorlari (Har bir qator mustaqil karta ko'rinishida) */
.table tbody tr {
    box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
}

.table td {
    background-color: #181818 !important; /* To'q kulrang karta foni */
    border: none !important;
    padding: 22px 20px !important; /* Ichki joy kengaytirildi */
    vertical-align: middle !important;
    font-size: 15px !important;
}

/* Burchaklarni silliqlash (Karta effekti uchun) */
.table tbody tr td:first-child {
    border-top-left-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
}
.table tbody tr td:last-child {
    border-top-right-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
}

/* Karta Hover effekti (Silliq ko'tarilish va neon chegara) */
.table tbody tr:hover td {
    background-color: #222222 !important;
}
.table tbody tr:hover {
    transform: translateY(-4px) scale(1.01) !important;
    box-shadow: 0 12px 30px rgba(0,0,0,0.6) !important;
}

/* ==========================================================================
   5. QIDIRUV VA FILTR INPUTLARI
   ========================================================================== */
.table .filters input {
    background-color: #282828 !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    color: #ffffff !important;
    border-radius: 6px !important;
    padding: 10px 16px !important;
    font-size: 14px !important;
    transition: all 0.3s ease !important;
    width: 100% !important;
}
.table .filters input:focus {
    background-color: #1f1f1f !important;
    border-color: #E50914 !important;
    box-shadow: 0 0 15px rgba(229, 9, 20, 0.3) !important;
    outline: none !important;
}

/* ==========================================================================
   6. AMALLAR TUGMALARI (VIEW, UPDATE, DELETE - YIRIK VA PREZENTABEL)
   ========================================================================== */
.table td:last-child {
    white-space: nowrap !important;
    text-align: center !important;
    width: 120px !important;
}

/* Ko'rish, tahrirlash va o'chirish tugmalari uchun umumiy uslub */
.table td a {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 38px !important; /* Tugma o'lchami kattalashtirildi */
    height: 38px !important;
    border-radius: 6px !important;
    margin: 0 4px !important;
    font-size: 16px !important;
    text-decoration: none !important;
    transition: all 0.3s ease !important;
    background-color: #282828 !important;
    color: #aaaaaa !important;
}

/* Har bir amal tugmasiga alohida yorqin hover ranglari */
.table td a:nth-child(1):hover { /* View (Ko'rish - Glaz) */
    background-color: #007bff !important;
    color: #ffffff !important;
    box-shadow: 0 0 12px rgba(0, 123, 255, 0.5) !important;
}
.table td a:nth-child(2):hover { /* Update (Tahrirlash - Karandash) */
    background-color: #ffc107 !important;
    color: #111111 !important;
    box-shadow: 0 0 12px rgba(255, 193, 7, 0.5) !important;
}
.table td a:nth-child(3):hover { /* Delete (O'chirish - Korzina) */
    background-color: #E50914 !important;
    color: #ffffff !important;
    box-shadow: 0 0 12px rgba(229, 9, 20, 0.6) !important;
}

/* Jadval ichidagi uzun linklarni (Poster, Video URL) chiroyli matn qilish */
td a:not([data-pjax]) {
    color: #E50914 !important;
    font-weight: 600 !important;
    transition: color 0.2s !important;
}
td a:not([data-pjax]):hover {
    color: #ffffff !important;
    text-shadow: 0 0 8px #E50914 !important;
}

/* Ma'lumot matnlari va xabarlar */
.summary {
    color: #666666 !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    margin-bottom: 15px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
}

.breadcrumb-item a { color: #E50914 !important; text-decoration: none !important; }
.breadcrumb-item.active { color: #666666 !important; }
</style>

<body class="d-flex flex-column h-100">
<?php $this->beginBody() ?>

<?= $this->render('_header') ?>

<main id="main" class="flex-grow-1" role="main">
    <div class="container">
        <?php if (!empty($this->params['breadcrumbs'])): ?>
            <?= Breadcrumbs::widget(['links' => $this->params['breadcrumbs']]) ?>
        <?php endif ?>
        <?= Alert::widget() ?>
        <?= $content ?>
    </div>
</main>

<?= $this->render('_footer') ?>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>

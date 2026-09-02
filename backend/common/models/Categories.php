<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "categories".
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 *
 * @property MovieCategories[] $movieCategories
 * @property Movies[] $movies
 */
class Categories extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'categories';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'slug'], 'required'],
            [['name', 'slug'], 'string', 'max' => 255],
            [['slug'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'slug' => 'Slug',
        ];
    }

    /**
     * Gets query for [[MovieCategories]].
     *
     * @return \yii\db\ActiveQuery|MovieCategoriesQuery
     */
    public function getMovieCategories()
    {
        return $this->hasMany(MovieCategories::class, ['category_id' => 'id']);
    }

    /**
     * Gets query for [[Movies]].
     *
     * @return \yii\db\ActiveQuery|MoviesQuery
     */
    public function getMovies()
    {
        return $this->hasMany(Movies::class, ['id' => 'movie_id'])->viaTable('movie_categories', ['category_id' => 'id']);
    }

    /**
     * {@inheritdoc}
     * @return CategoriesQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new CategoriesQuery(get_called_class());
    }

}

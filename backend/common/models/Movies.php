<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "movies".
 *
 * @property int $id
 * @property string $title
 * @property string|null $description
 * @property string|null $poster
 * @property string|null $video_url
 * @property int|null $duration
 * @property int|null $release_year
 * @property float|null $rating
 * @property int|null $views
 * @property int|null $is_premium
 * @property int $created_at
 *
 * @property Categories[] $categories
 * @property Comments[] $comments
 * @property Favorites[] $favorites
 * @property MovieCategories[] $movieCategories
 */
class Movies extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'movies';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['description', 'poster', 'video_url', 'duration', 'release_year'], 'default', 'value' => null],
            [['rating'], 'default', 'value' => 0.0],
            [['is_premium'], 'default', 'value' => 0],
            [['title', 'created_at'], 'required'],
            [['description'], 'string'],
            [['duration', 'release_year', 'views', 'is_premium', 'created_at'], 'integer'],
            [['rating'], 'number'],
            [['title', 'poster', 'video_url'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'description' => 'Description',
            'poster' => 'Poster',
            'video_url' => 'Video Url',
            'duration' => 'Duration',
            'release_year' => 'Release Year',
            'rating' => 'Rating',
            'views' => 'Views',
            'is_premium' => 'Is Premium',
            'created_at' => 'Created At',
        ];
    }

    /**
     * Gets query for [[Categories]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getCategories()
    {
        return $this->hasMany(Categories::class, ['id' => 'category_id'])->viaTable('movie_categories', ['movie_id' => 'id']);
    }

    /**
     * Gets query for [[Comments]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getComments()
    {
        return $this->hasMany(Comments::class, ['movie_id' => 'id']);
    }

    /**
     * Gets query for [[Favorites]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFavorites()
    {
        return $this->hasMany(Favorites::class, ['movie_id' => 'id']);
    }

    /**
     * Gets query for [[MovieCategories]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getMovieCategories()
    {
        return $this->hasMany(MovieCategories::class, ['movie_id' => 'id']);
    }

}

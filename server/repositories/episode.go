package repositories

import (
	"dumbmerch/models"

	"gorm.io/gorm"
)

type EpisodeRepository interface {
	FindEpisode() ([]models.Episode, error)
	GetEpisode(ID int) (models.Episode, error)
	CreateEpisode(episode models.Episode) (models.Episode, error)
	UpdateEpisode(episode models.Episode) (models.Episode, error)
	DeleteEpisode(episode models.Episode) (models.Episode, error)
}

func RepositoryEpisode(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindEpisode() ([]models.Episode, error) {
	var episodes []models.Episode
	err := r.db.Preload("Film").Find(&episodes).Error

	return episodes, err
}
func (r *repository) GetEpisode(ID int) (models.Episode, error) {
	var episode models.Episode
	err := r.db.Preload("Film").First(&episode, ID).Error

	return episode, err
}

func (r *repository) CreateEpisode(episode models.Episode) (models.Episode, error) {
	film := models.Film{}
	r.db.Preload("Category").First(&film, episode.FilmID)

	err := r.db.Create(&episode).Error
	episode.Film = film

	return episode, err
}

func (r *repository) UpdateEpisode(episode models.Episode) (models.Episode, error) {
	film := models.Film{}
	r.db.Preload("Category").First(&film, episode.FilmID)

	err := r.db.Preload("Film").Save(&episode).Error
	episode.Film = film

	return episode, err
}

func (r *repository) DeleteEpisode(episode models.Episode) (models.Episode, error) {
	err := r.db.Delete(&episode).Error

	return episode, err
}

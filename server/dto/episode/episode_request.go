package episodedto

import "dumbmerch/models"

type CreateEpisodeRequest struct {
	ID            int         `json:"id" gorm:"primary_key:auto_increment"`
	Title         string      `json:"title" form:"title" gorm:"type: varchar(255)" validate:"required"`
	ThumbnailFilm string      `json:"thumbnailfilm" form:"thumbnailfilm" gorm:"type: varchar(255)" validate:"required"`
	LinkFilm      string      `json:"linkfilm" form:"linkfilm" gorm:"type: varchar(255)"`
	FilmID        int         `json:"filmID" form:"filmid"`
	Film          models.Film `json:"film" form:"film" validate:"required"`
	// CategoryID    int             `json:"categoryID"`
	// Category      models.Category `json:"category"`
	// Film          Film   `json:"film
}

type UpdateEpisodeRequest struct {
	Title         string      `json:"title" form:"title" gorm:"type: varchar(255)"`
	ThumbnailFilm string      `json:"thumbnailfilm" form:"thumbnailfilm" gorm:"type: varchar(255)"`
	LinkFilm      string      `json:"linkfilm" form:"linkfilm" gorm:"type: varchar(255)"`
	FilmID        int         `json:"filmID" form:"filmid"`
	Film          models.Film `json:"film" form:"category" validate:"required"`
}

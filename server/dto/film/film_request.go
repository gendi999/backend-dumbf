package filmsdto

import "dumbmerch/models"

type CreateFilmRequest struct {
	Title         string          `json:"title" form:"title" gorm:"type: varchar(255)"`
	ThumbnailFilm string          `json:"thumbnailfilm" form:"thumbnailfilm" gorm:"type: varchar(255)"`
	Year          int             `json:"year" gorm:"type: int"`
	Category      models.Category `json:"category" form:"category" validate:"required"`
	CategoryID    int             `json:"categoryID" form:"category_id"`
	Description   string          `json:"description" gorm:"type:text" form:"desc"`
}

type UpdateFilmRequest struct {
	Title         string          `json:"title" form:"title"`
	ThumbnailFilm string          `json:"thumbnailfilm" form:"thumbnailfilm"`
	Year          int             `json:"year"`
	CategoryID    int             `json:"categoryID"`
	Category      models.Category `json:"category" form:"category" validate:"required"`
	Description   string          `json:"description"  form:"desc"`
}

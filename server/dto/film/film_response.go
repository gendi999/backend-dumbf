package filmsdto

import "time"

type FilmResponse struct {
	ID            int       `json:"id"`
	Title         string    `json:"title" form:"title" gorm:"type: varchar(255)"  validate:"required"`
	ThumbnailFilm string    `json:"thumbnailfilm" form:"thumbnailfilm" gorm:"type: varchar(255)"  validate:"required"`
	Description   string    `json:"description" gorm:"type:text" form:"desc"  validate:"required"`
	Year          int       `json:"year" gorm:"type: int"  validate:"required"`
	CategoryID    int       `json:"categoryID" `
	CreatedAt     time.Time `json:"-"`
	UpdatedAt     time.Time `json:"-"`
}

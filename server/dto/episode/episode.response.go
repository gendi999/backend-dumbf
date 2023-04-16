package episodedto

type EpisodeResponse struct {
	ID            int    `json:"id" gorm:"primary_key:auto_increment"`
	Title         string `json:"title" gorm:"type: varchar(255)"`
	ThumbnailFilm string `json:"thumbnailfilm" gorm:"type: varchar(255)"`
	LinkFilm      string `json:"linkfilm" gorm:"type: varchar(255)"`
	FilmID        int    `json:"filmID"`
	// Film          models.Film `json:"film"`
}

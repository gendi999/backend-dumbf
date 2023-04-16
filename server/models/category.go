package models

type Category struct {
	ID   int    `json:"id" gorm:"primary_key:auto_increment"`
	Name string `json:"name" gorm:"type:varchar(255)"`
	// Films []Film `json:"films"`
}
type CategoryFilm struct {
	ID   int    `json:"id" gorm:"primary_key:auto_increment"`
	Name string `json:"name" gorm:"type:varchar(255)"`
	// Films []Film `json:"films"`
}

func (CategoryFilm) tableName() string {
	return "categories"
}

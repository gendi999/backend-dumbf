package models

type Transaction struct {
	ID        int    `json:"id" gorm:"primary_key:auto_increment"`
	StartDate string `json:"startdate" gorm:"type: varchar(255)"`
	EndDate   string `json:"enddate" gorm:"type: varchar(255)"`
	// UserID    int    `json:"userid"`
	// User      User   `json:"user"`
	Attache string `json:"attache" binding:"required, attache" gorm:"unique; not null" `
	Status  string `json:"status" gorm:"type: varchar(255)"`
}

// Films []Film `json:"films"`

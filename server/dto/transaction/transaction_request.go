package transactiondto

type CreateTransactionRequest struct {
	ID        int    `json:"id" gorm:"primary_key:auto_increment"`
	StartDate string `json:"startdate" gorm:"type: varchar(255)"`
	EndDate   string `json:"enddate" gorm:"type: varchar(255)"`
	// UserID    int         `json:"userid"`
	// User      models.User `json:"user" form:"user" validate:"required"`
	Attache string `json:"attache" gorm:"type: varchar(255)"`
	Status  string `json:"status" gorm:"type: varchar(255)"`
}

type UpdateTransactionRequest struct {
	ID        int    `json:"id" gorm:"primary_key:auto_increment"`
	StartDate string `json:"startdate" gorm:"type: varchar(255)"`
	EndDate   string `json:"enddate" gorm:"type: varchar(255)"`
	Attache   string `json:"attache" gorm:"type: varchar(255)"`
	Status    string `json:"status" gorm:"type: varchar(255)"`
}

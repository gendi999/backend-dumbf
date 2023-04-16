package transactiondto

type TransactionResponse struct {
	ID        int    `json:"id" gorm:"primary_key:auto_increment"`
	StartDate string `json:"startdate" gorm:"type: varchar(255)"`
	EndDate   string `json:"enddate" gorm:"type: varchar(255)"`
	// UserID    string `json:"userid" `
	Attache string `json:"attache" gorm:"type: varchar(255)"`
	Status  string `json:"status" gorm:"type: varchar(255)"`
}

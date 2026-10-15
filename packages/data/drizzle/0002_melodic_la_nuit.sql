CREATE TABLE `bank_service_details` (
	`id` char(10) NOT NULL,
	`bank_id` varchar(255) NOT NULL,
	`service_type_id` varchar(255) NOT NULL,
	`apply_link` varchar(255) NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC') NOT NULL DEFAULT 'BLOA',
	CONSTRAINT `bank_service_details_id` PRIMARY KEY(`id`),
	CONSTRAINT `bank_loan_unique` UNIQUE(`bank_id`,`service_type_id`)
);
--> statement-breakpoint
CREATE TABLE `service-type` (
	`id` char(10) NOT NULL,
	`service-type_id` varchar(255) NOT NULL,
	`bank_service-type` varchar(255) NOT NULL,
	`description` varchar(1023) NOT NULL,
	`icon` enum('ArrowLeft','Award','BadgeCheck','BadgeIndianRupee','BriefcaseBusiness','Building2','Calendar','CalendarDays','CarFront','CheckCircle2','ChevronRight','Clock','DollarSign','FileCheck','FileText','House','IdCard','Mail','MapPin','Percent','Phone','PhoneCall','Search','ShieldCheck','TrendingUp','UserCheck','X','Zap') NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC') NOT NULL DEFAULT 'SRVC',
	CONSTRAINT `service-type_id` PRIMARY KEY(`id`),
	CONSTRAINT `service-type_service-type_id_unique` UNIQUE(`service-type_id`)
);
--> statement-breakpoint
ALTER TABLE `bank_loan_details` DROP FOREIGN KEY `bank_loan_details_bank_id_bank_bank_id_fk`;
--> statement-breakpoint
ALTER TABLE `bank_loan_details` DROP FOREIGN KEY `bank_loan_details_loan_type_id_loan_type_loan_type_id_fk`;
--> statement-breakpoint
ALTER TABLE `bank` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC') NOT NULL DEFAULT 'BANK';--> statement-breakpoint
ALTER TABLE `bank_loan_details` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC') NOT NULL DEFAULT 'BLOA';--> statement-breakpoint
ALTER TABLE `benefits` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC') NOT NULL DEFAULT 'BNFT';--> statement-breakpoint
ALTER TABLE `documents_required` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC') NOT NULL DEFAULT 'DOCM';--> statement-breakpoint
ALTER TABLE `eligibility` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC') NOT NULL DEFAULT 'ELGB';--> statement-breakpoint
ALTER TABLE `loan_benefits` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC') NOT NULL DEFAULT 'LBNF';--> statement-breakpoint
ALTER TABLE `loan_documents_required` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC') NOT NULL DEFAULT 'LDOC';--> statement-breakpoint
ALTER TABLE `loan_eligibility` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC') NOT NULL DEFAULT 'LELG';--> statement-breakpoint
ALTER TABLE `loan_type` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC') NOT NULL DEFAULT 'LOAN';--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC') NOT NULL DEFAULT 'USER';--> statement-breakpoint
ALTER TABLE `bank_service_details` ADD CONSTRAINT `fk_bank_service_bank` FOREIGN KEY (`bank_id`) REFERENCES `bank`(`bank_id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `bank_service_details` ADD CONSTRAINT `fk_bank_service_type` FOREIGN KEY (`service_type_id`) REFERENCES `service-type`(`service-type_id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `bank_loan_details` ADD CONSTRAINT `fk_bank_loan_bank` FOREIGN KEY (`bank_id`) REFERENCES `bank`(`bank_id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `bank_loan_details` ADD CONSTRAINT `fk_bank_loan_type` FOREIGN KEY (`loan_type_id`) REFERENCES `loan_type`(`loan_type_id`) ON DELETE cascade ON UPDATE cascade;
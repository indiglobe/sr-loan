CREATE TABLE `documents_required` (
	`id` char(10) NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	`icon` enum('ArrowLeft','Award','BadgeCheck','BadgeIndianRupee','BriefcaseBusiness','Building2','Calendar','CalendarDays','CarFront','CheckCircle2','ChevronRight','Clock','DollarSign','FileCheck','FileText','House','IdCard','Mail','MapPin','Percent','Phone','PhoneCall','Search','ShieldCheck','TrendingUp','UserCheck','X','Zap') NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC') NOT NULL DEFAULT 'DOCM',
	CONSTRAINT `documents_required_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `eligibility` (
	`id` char(10) NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	`icon` enum('ArrowLeft','Award','BadgeCheck','BadgeIndianRupee','BriefcaseBusiness','Building2','Calendar','CalendarDays','CarFront','CheckCircle2','ChevronRight','Clock','DollarSign','FileCheck','FileText','House','IdCard','Mail','MapPin','Percent','Phone','PhoneCall','Search','ShieldCheck','TrendingUp','UserCheck','X','Zap') NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC') NOT NULL DEFAULT 'ELGB',
	CONSTRAINT `eligibility_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `loan_documents_required` (
	`id` char(10) NOT NULL,
	`documents_required_id` char(10) NOT NULL,
	`bank_loan_id` char(10) NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC') NOT NULL DEFAULT 'LDOC',
	CONSTRAINT `loan_documents_required_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `loan_eligibility` (
	`id` char(10) NOT NULL,
	`eligibility_id` char(10) NOT NULL,
	`bank_loan_id` char(10) NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC') NOT NULL DEFAULT 'LELG',
	CONSTRAINT `loan_eligibility_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `bank_loan_details` RENAME COLUMN `return_on_invest` TO `rate_of_interest`;--> statement-breakpoint
ALTER TABLE `loan_benefits` DROP FOREIGN KEY `loan_benefits_benefit_id_benefits_id_fk`;
--> statement-breakpoint
ALTER TABLE `loan_benefits` DROP FOREIGN KEY `loan_benefits_bank_loan_id_bank_loan_details_id_fk`;
--> statement-breakpoint
ALTER TABLE `bank` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC') NOT NULL DEFAULT 'BANK';--> statement-breakpoint
ALTER TABLE `bank_loan_details` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC') NOT NULL DEFAULT 'BLOA';--> statement-breakpoint
ALTER TABLE `benefits` MODIFY COLUMN `icon` enum('ArrowLeft','Award','BadgeCheck','BadgeIndianRupee','BriefcaseBusiness','Building2','Calendar','CalendarDays','CarFront','CheckCircle2','ChevronRight','Clock','DollarSign','FileCheck','FileText','House','IdCard','Mail','MapPin','Percent','Phone','PhoneCall','Search','ShieldCheck','TrendingUp','UserCheck','X','Zap') NOT NULL;--> statement-breakpoint
ALTER TABLE `benefits` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC') NOT NULL DEFAULT 'BNFT';--> statement-breakpoint
ALTER TABLE `loan_benefits` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC') NOT NULL DEFAULT 'LBNF';--> statement-breakpoint
ALTER TABLE `loan_type` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC') NOT NULL DEFAULT 'LOAN';--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC') NOT NULL DEFAULT 'USER';--> statement-breakpoint
ALTER TABLE `loan_type` ADD `description` varchar(1023) NOT NULL;--> statement-breakpoint
ALTER TABLE `loan_type` ADD `icon` enum('ArrowLeft','Award','BadgeCheck','BadgeIndianRupee','BriefcaseBusiness','Building2','Calendar','CalendarDays','CarFront','CheckCircle2','ChevronRight','Clock','DollarSign','FileCheck','FileText','House','IdCard','Mail','MapPin','Percent','Phone','PhoneCall','Search','ShieldCheck','TrendingUp','UserCheck','X','Zap') NOT NULL;--> statement-breakpoint
ALTER TABLE `loan_documents_required` ADD CONSTRAINT `ldoc_doc_req_fk` FOREIGN KEY (`documents_required_id`) REFERENCES `documents_required`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `loan_documents_required` ADD CONSTRAINT `ldoc_bank_loan_fk` FOREIGN KEY (`bank_loan_id`) REFERENCES `bank_loan_details`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `loan_eligibility` ADD CONSTRAINT `lelg_eligibility_fk` FOREIGN KEY (`eligibility_id`) REFERENCES `eligibility`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `loan_eligibility` ADD CONSTRAINT `lelg_bank_loan_fk` FOREIGN KEY (`bank_loan_id`) REFERENCES `bank_loan_details`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `loan_benefits` ADD CONSTRAINT `lbnf_benefit_fk` FOREIGN KEY (`benefit_id`) REFERENCES `benefits`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `loan_benefits` ADD CONSTRAINT `lbnf_bank_loan_fk` FOREIGN KEY (`bank_loan_id`) REFERENCES `bank_loan_details`(`id`) ON DELETE cascade ON UPDATE cascade;
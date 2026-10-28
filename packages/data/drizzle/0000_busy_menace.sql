CREATE TABLE `activity` (
	`id` char(10) NOT NULL,
	`employee_id` char(10) NOT NULL,
	`loan_id` char(10) NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC','ACTY') NOT NULL DEFAULT 'ACTY',
	CONSTRAINT `activity_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `bank` (
	`id` char(10) NOT NULL,
	`bank_id` varchar(255) NOT NULL,
	`bank_name` varchar(255) NOT NULL,
	`tagline` varchar(255),
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC','ACTY') NOT NULL DEFAULT 'BANK',
	CONSTRAINT `bank_id` PRIMARY KEY(`id`),
	CONSTRAINT `bank_bank_id_unique` UNIQUE(`bank_id`)
);
--> statement-breakpoint
CREATE TABLE `bank_loan_details` (
	`id` char(10) NOT NULL,
	`bank_id` varchar(255) NOT NULL,
	`loan_type_id` varchar(255) NOT NULL,
	`apply_link` varchar(255) NOT NULL,
	`rate_of_interest` int NOT NULL,
	`processing_time_in_days` int NOT NULL,
	`max_tenure_in_month` int NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC','ACTY') NOT NULL DEFAULT 'BLOA',
	CONSTRAINT `bank_loan_details_id` PRIMARY KEY(`id`),
	CONSTRAINT `bank_loan_unique` UNIQUE(`bank_id`,`loan_type_id`)
);
--> statement-breakpoint
CREATE TABLE `bank_service_details` (
	`id` char(10) NOT NULL,
	`bank_id` varchar(255) NOT NULL,
	`service_type_id` varchar(255) NOT NULL,
	`apply_link` varchar(255) NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC','ACTY') NOT NULL DEFAULT 'BSRV',
	CONSTRAINT `bank_service_details_id` PRIMARY KEY(`id`),
	CONSTRAINT `bank_loan_unique` UNIQUE(`bank_id`,`service_type_id`)
);
--> statement-breakpoint
CREATE TABLE `benefits` (
	`id` char(10) NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	`icon` enum('ArrowLeft','Award','BadgeCheck','BadgeIndianRupee','BarChart3','BriefcaseBusiness','Building2','Calendar','CalendarDays','CarFront','CheckCircle2','ChevronRight','Clock','CreditCard','DollarSign','FileCheck','FileText','House','IdCard','Landmark','Mail','MapPin','Percent','Phone','PhoneCall','ReceiptIndianRupee','Search','ShieldCheck','TrendingUp','UserCheck','X','Zap') NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC','ACTY') NOT NULL DEFAULT 'BNFT',
	CONSTRAINT `benefits_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `documents_required` (
	`id` char(10) NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	`icon` enum('ArrowLeft','Award','BadgeCheck','BadgeIndianRupee','BarChart3','BriefcaseBusiness','Building2','Calendar','CalendarDays','CarFront','CheckCircle2','ChevronRight','Clock','CreditCard','DollarSign','FileCheck','FileText','House','IdCard','Landmark','Mail','MapPin','Percent','Phone','PhoneCall','ReceiptIndianRupee','Search','ShieldCheck','TrendingUp','UserCheck','X','Zap') NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC','ACTY') NOT NULL DEFAULT 'DOCM',
	CONSTRAINT `documents_required_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `eligibility` (
	`id` char(10) NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	`icon` enum('ArrowLeft','Award','BadgeCheck','BadgeIndianRupee','BarChart3','BriefcaseBusiness','Building2','Calendar','CalendarDays','CarFront','CheckCircle2','ChevronRight','Clock','CreditCard','DollarSign','FileCheck','FileText','House','IdCard','Landmark','Mail','MapPin','Percent','Phone','PhoneCall','ReceiptIndianRupee','Search','ShieldCheck','TrendingUp','UserCheck','X','Zap') NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC','ACTY') NOT NULL DEFAULT 'ELGB',
	CONSTRAINT `eligibility_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `loan_benefits` (
	`id` char(10) NOT NULL,
	`benefit_id` char(10) NOT NULL,
	`bank_loan_id` char(10) NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC','ACTY') NOT NULL DEFAULT 'LBNF',
	CONSTRAINT `loan_benefits_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `loan_documents_required` (
	`id` char(10) NOT NULL,
	`documents_required_id` char(10) NOT NULL,
	`bank_loan_id` char(10) NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC','ACTY') NOT NULL DEFAULT 'LDOC',
	CONSTRAINT `loan_documents_required_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `loan_eligibility` (
	`id` char(10) NOT NULL,
	`eligibility_id` char(10) NOT NULL,
	`bank_loan_id` char(10) NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC','ACTY') NOT NULL DEFAULT 'LELG',
	CONSTRAINT `loan_eligibility_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `loan_type` (
	`id` char(10) NOT NULL,
	`loan_type_id` varchar(255) NOT NULL,
	`bank_loan_type` varchar(255) NOT NULL,
	`description` varchar(1023) NOT NULL,
	`icon` enum('ArrowLeft','Award','BadgeCheck','BadgeIndianRupee','BarChart3','BriefcaseBusiness','Building2','Calendar','CalendarDays','CarFront','CheckCircle2','ChevronRight','Clock','CreditCard','DollarSign','FileCheck','FileText','House','IdCard','Landmark','Mail','MapPin','Percent','Phone','PhoneCall','ReceiptIndianRupee','Search','ShieldCheck','TrendingUp','UserCheck','X','Zap') NOT NULL,
	`minimum_allowed_role` enum('ADMIN','AGENT','CUSTOMER') NOT NULL DEFAULT 'AGENT',
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC','ACTY') NOT NULL DEFAULT 'LOAN',
	CONSTRAINT `loan_type_id` PRIMARY KEY(`id`),
	CONSTRAINT `loan_type_loan_type_id_unique` UNIQUE(`loan_type_id`)
);
--> statement-breakpoint
CREATE TABLE `service-type` (
	`id` char(10) NOT NULL,
	`service-type_id` varchar(255) NOT NULL,
	`bank_service-type` varchar(255) NOT NULL,
	`description` varchar(1023) NOT NULL,
	`icon` enum('ArrowLeft','Award','BadgeCheck','BadgeIndianRupee','BarChart3','BriefcaseBusiness','Building2','Calendar','CalendarDays','CarFront','CheckCircle2','ChevronRight','Clock','CreditCard','DollarSign','FileCheck','FileText','House','IdCard','Landmark','Mail','MapPin','Percent','Phone','PhoneCall','ReceiptIndianRupee','Search','ShieldCheck','TrendingUp','UserCheck','X','Zap') NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC','ACTY') NOT NULL DEFAULT 'SRVC',
	CONSTRAINT `service-type_id` PRIMARY KEY(`id`),
	CONSTRAINT `service-type_service-type_id_unique` UNIQUE(`service-type_id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` char(10) NOT NULL,
	`name` varchar(255) NOT NULL,
	`employee_id` char(12) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`phone_number` char(10) NOT NULL,
	`emergency_phone_number` char(10),
	`location` varchar(255) NOT NULL,
	`pin` char(6) NOT NULL,
	`role` enum('ADMIN','AGENT','CUSTOMER') NOT NULL,
	`referrer_id` char(12),
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN','ELGB','LELG','DOCM','LDOC','BSRV','SRVC','ACTY') NOT NULL DEFAULT 'USER',
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_employee_id_unique` UNIQUE(`employee_id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `activity` ADD CONSTRAINT `emp_id_fk` FOREIGN KEY (`employee_id`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `activity` ADD CONSTRAINT `loan_id_fk` FOREIGN KEY (`loan_id`) REFERENCES `loan_type`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `bank_loan_details` ADD CONSTRAINT `fk_bank_loan_bank` FOREIGN KEY (`bank_id`) REFERENCES `bank`(`bank_id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `bank_loan_details` ADD CONSTRAINT `fk_bank_loan_type` FOREIGN KEY (`loan_type_id`) REFERENCES `loan_type`(`loan_type_id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `bank_service_details` ADD CONSTRAINT `fk_bank_service_bank` FOREIGN KEY (`bank_id`) REFERENCES `bank`(`bank_id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `bank_service_details` ADD CONSTRAINT `fk_bank_service_type` FOREIGN KEY (`service_type_id`) REFERENCES `service-type`(`service-type_id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `loan_benefits` ADD CONSTRAINT `lbnf_benefit_fk` FOREIGN KEY (`benefit_id`) REFERENCES `benefits`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `loan_benefits` ADD CONSTRAINT `lbnf_bank_loan_fk` FOREIGN KEY (`bank_loan_id`) REFERENCES `bank_loan_details`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `loan_documents_required` ADD CONSTRAINT `ldoc_doc_req_fk` FOREIGN KEY (`documents_required_id`) REFERENCES `documents_required`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `loan_documents_required` ADD CONSTRAINT `ldoc_bank_loan_fk` FOREIGN KEY (`bank_loan_id`) REFERENCES `bank_loan_details`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `loan_eligibility` ADD CONSTRAINT `lelg_eligibility_fk` FOREIGN KEY (`eligibility_id`) REFERENCES `eligibility`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `loan_eligibility` ADD CONSTRAINT `lelg_bank_loan_fk` FOREIGN KEY (`bank_loan_id`) REFERENCES `bank_loan_details`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `user` ADD CONSTRAINT `user_referrer_id_fk` FOREIGN KEY (`referrer_id`) REFERENCES `user`(`employee_id`) ON DELETE set null ON UPDATE cascade;
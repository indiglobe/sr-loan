CREATE TABLE `bank` (
	`id` char(10) NOT NULL,
	`bank_id` varchar(255) NOT NULL,
	`bank_name` varchar(255) NOT NULL,
	`tagline` varchar(255),
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN') NOT NULL DEFAULT 'BANK',
	CONSTRAINT `bank_id` PRIMARY KEY(`id`),
	CONSTRAINT `bank_bank_id_unique` UNIQUE(`bank_id`)
);
--> statement-breakpoint
CREATE TABLE `bank_loan_Details` (
	`id` char(10) NOT NULL,
	`bank_id` varchar(255) NOT NULL,
	`loan_type_id` varchar(255) NOT NULL,
	`apply_link` varchar(255) NOT NULL,
	`return_on_invest` int NOT NULL,
	`processing_time_in_days` int NOT NULL,
	`max_tenure_in_month` int NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN') NOT NULL DEFAULT 'BLOA',
	CONSTRAINT `bank_loan_Details_id` PRIMARY KEY(`id`),
	CONSTRAINT `bank_loan_unique` UNIQUE(`bank_id`,`loan_type_id`)
);
--> statement-breakpoint
CREATE TABLE `benefits` (
	`id` char(10) NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	`icon` enum('ShieldCheck','TrendingUp','CalendarDays','BadgeCheck','Clock') NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN') NOT NULL DEFAULT 'BNFT',
	CONSTRAINT `benefits_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `loan_benefits` (
	`id` char(10) NOT NULL,
	`benefit_id` char(10) NOT NULL,
	`bank_loan_id` char(10) NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN') NOT NULL DEFAULT 'LBNF',
	CONSTRAINT `loan_benefits_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `loan_type` (
	`id` char(10) NOT NULL,
	`loan_type_id` varchar(255) NOT NULL,
	`bank_loan_type` varchar(255) NOT NULL,
	`created_at` timestamp(6) NOT NULL,
	`updated_at` timestamp(6) NOT NULL,
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN') NOT NULL DEFAULT 'LOAN',
	CONSTRAINT `loan_type_id` PRIMARY KEY(`id`),
	CONSTRAINT `loan_type_loan_type_id_unique` UNIQUE(`loan_type_id`)
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
	`table_identifier_token` enum('USER','BANK','BLOA','BNFT','LBNF','LOAN') NOT NULL DEFAULT 'USER',
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_employee_id_unique` UNIQUE(`employee_id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `bank_loan_Details` ADD CONSTRAINT `bank_loan_Details_bank_id_bank_bank_id_fk` FOREIGN KEY (`bank_id`) REFERENCES `bank`(`bank_id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `bank_loan_Details` ADD CONSTRAINT `bank_loan_Details_loan_type_id_loan_type_loan_type_id_fk` FOREIGN KEY (`loan_type_id`) REFERENCES `loan_type`(`loan_type_id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `loan_benefits` ADD CONSTRAINT `loan_benefits_benefit_id_benefits_id_fk` FOREIGN KEY (`benefit_id`) REFERENCES `benefits`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `loan_benefits` ADD CONSTRAINT `loan_benefits_bank_loan_id_bank_loan_Details_id_fk` FOREIGN KEY (`bank_loan_id`) REFERENCES `bank_loan_Details`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `user` ADD CONSTRAINT `user_referrer_id_fk` FOREIGN KEY (`referrer_id`) REFERENCES `user`(`employee_id`) ON DELETE set null ON UPDATE cascade;
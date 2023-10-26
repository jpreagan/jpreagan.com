CREATE TABLE `posts` (
	`id` varchar(36) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`coverImage` text NOT NULL,
	`coverImageAlt` text NOT NULL,
	`content` text NOT NULL,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `posts_slug_unique` UNIQUE(`slug`)
);

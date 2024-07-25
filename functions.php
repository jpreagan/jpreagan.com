<?php
/**
 * Theme functions and definitions.
 * This file is a part of the jpreagan child theme.
 *
 * @package jpreagan
 */

/**
 * Enqueues parent and child theme styles.
 */
function jpreagan_styles() {
	$parent_theme   = wp_get_theme( get_template() );
	$parent_version = $parent_theme->get( 'Version' );
	$child_theme    = wp_get_theme();
	$child_version  = $child_theme->get( 'Version' );

	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css', array(), $parent_version );

	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'parent-style' ), $child_version );
}

add_action( 'wp_enqueue_scripts', 'jpreagan_styles' );

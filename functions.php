<?php
/**
 * Theme functions file, which is auto-loaded by WordPress. Use this file to
 * load additional PHP files and bootstrap the theme.
 *
 * @author    Your Name <youremail@domain.tld>
 * @copyright Copyright (c) 2023, Your Name
 * @link      https://yourwebsite.tld
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

// Requires custom post meta for data (e.g., rating, ISBN number, etc.).
add_action( 'init', 'themeslug_register_meta' );

function themeslug_register_meta() {
	register_meta(
		'post',
		'themeslug_book_author',
		array(
			'show_in_rest'      => true,
			'single'            => true,
			'type'              => 'string',
			'sanitize_callback' => 'wp_filter_nohtml_kses'
		)
	);
	register_meta(
		'post',
		'themeslug_book_rating',
		array(
			'show_in_rest'      => true,
			'single'            => true,
			'type'              => 'integer',
			'sanitize_callback' => 'absint',
			'default'           => 5,
		)
	);
	register_meta(
		'post',
		'themeslug_book_length',
		array(
			'show_in_rest'      => true,
			'single'            => true,
			'type'              => 'integer',
			'sanitize_callback' => 'absint',
			'default'           => 0
		)
	);
}

// Load editor scripts.
add_action( 'enqueue_block_editor_assets', 'themeslug_editor_assets' );

function themeslug_editor_assets() {
	$script_asset = include get_theme_file_path( 'public/js/editor.asset.php' );

	wp_enqueue_script(
		'themeslug-editor',
		get_theme_file_uri( 'public/js/editor.js' ),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);
}

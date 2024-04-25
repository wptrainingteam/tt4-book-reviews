<?php

add_action( 'init', 'themeslug_register_meta' );

/**
 * Registers custom metadata that is specific to book reviews using the Core
 * `register_meta()` function.
 *
 * Note that it was necessary to register numeric-based meta as strings for it
 * to output correctly in the editor when bound to the Paragraph block. It's a
 * bit of a workaround for the moment.
 *
 * @link https://developer.wordpress.org/reference/functions/register_meta/
 */
function themeslug_register_meta()
{
	register_meta(
		'post',
		'themeslug_book_author',
		array(
			'show_in_rest'	    => true,
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
			'type'              => 'string',
			'sanitize_callback' => 'wp_filter_nohtml_kses'
		)
	);

	register_meta(
		'post',
		'themeslug_book_length',
		array(
			'show_in_rest'      => true,
			'single'            => true,
			'type'              => 'string',
			'sanitize_callback' => 'wp_filter_nohtml_kses'
		)
	);

	register_meta(
		'post',
		'themeslug_book_goodreads_url',
		array(
			'show_in_rest'      => true,
			'single'            => true,
			'type'              => 'string',
			'sanitize_callback' => 'esc_url_raw'
		)
	);
}

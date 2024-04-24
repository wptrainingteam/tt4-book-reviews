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

add_action( 'init', 'themeslug_register_meta' );

function themeslug_register_meta() {
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

add_filter( 'rest_post_query', 'themeslug_rest_book_reviews', 10, 2 );

function themeslug_rest_book_reviews( $args, $request ) {
	$rating = $request->get_param( 'bookRating' );

	if ( $rating ) {
		$args['meta_key'] = 'themeslug_book_rating';
		$args['meta_value'] = absint( $rating );
	}

	return $args;
}

add_filter( 'pre_render_block', 'themeslug_pre_render_block', 10, 2 );

function themeslug_pre_render_block( $pre_render, $parsed_block ) {

	if (
		isset( $parsed_block['attrs']['query']['bookRating'] )
		&& absint( $parsed_block['attrs']['query']['bookRating'] ) > 0
	) {
		add_filter(
			'query_loop_block_query_vars',
			function( $query ) use ( $parsed_block ) {
				$query['meta_key'] = 'themeslug_book_rating';
				$query['meta_value'] = absint( $parsed_block['attrs']['query']['bookRating'] );

				return $query;
			}
		);
	}

	return $pre_render;
}

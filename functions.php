<?php
/**
 * Theme functions file, which is auto-loaded by WordPress. Use this file to
 * load additional PHP files and bootstrap the theme.
 *
 * @author    Your Name <youremail@domain.tld>
 * @copyright Copyright (c) 2024, Your Name
 * @link      https://yourwebsite.tld
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

// Registers custom metadata that is specific to book reviews using the Core
// `register_meta()` function.
//
// Note that it was necessary to register numeric-based meta as strings for it
// to output correctly in the editor when bound to the Paragraph block. It's a
// bit of a workaround for the moment.
//
// @link https://developer.wordpress.org/reference/functions/register_meta/
add_action( 'init', 'themeslug_register_meta' );

function themeslug_register_meta() {
	register_meta( 'post', 'themeslug_book_author', [
		'show_in_rest'	    => true,
		'single'            => true,
		'type'              => 'string',
		'sanitize_callback' => 'wp_filter_nohtml_kses'
	] );

	register_meta( 'post', 'themeslug_book_rating', [
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'string',
		'sanitize_callback' => 'wp_filter_nohtml_kses'
	] );

	register_meta( 'post', 'themeslug_book_length', [
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'string',
		'sanitize_callback' => 'wp_filter_nohtml_kses'
	] );

	register_meta( 'post', 'themeslug_book_goodreads_url', [
		'show_in_rest'      => true,
		'single'            => true,
		'type'              => 'string',
		'sanitize_callback' => 'esc_url_raw'
	] );
}

// -----------------------------------------------------------------------------

// Loads editor scripts.
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

// -----------------------------------------------------------------------------

// Filters the REST post query so that the correct posts are shown in the editor
// when a book rating is assigned.
add_filter( 'rest_post_query', 'themeslug_rest_book_reviews', 10, 2 );

function themeslug_rest_book_reviews( $args, $request ) {
	$rating = $request->get_param( 'bookRating' );

	if ( $rating ) {
		$args['meta_key'] = 'themeslug_book_rating';
		$args['meta_value'] = absint( $rating );
	}

	return $args;
}

// Filters the query vars when the Query Loop block is in use and has a book
// rating assigned to the query. This handles showing the correct posts on the
// front end of the site.
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

// -----------------------------------------------------------------------------

// Registers a custom "Book Reviews" block pattern category.
add_action( 'init', 'themeslug_register_pattern_categories' );

function themeslug_register_pattern_categories() {
	register_block_pattern_category( 'themeslug-book-review', [
		'label' => __( 'Book Reviews', 'themeslug' )
	] );
}

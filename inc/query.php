<?php
/**
 * Custom Query handling for book reviews.
 */

add_filter( 'rest_post_query', 'themeslug_rest_book_reviews', 10, 2 );

/**
 * Filters the REST post query so that the correct posts are shown in the editor
 * when a book rating is assigned.
 */
function themeslug_rest_book_reviews( $args, $request ) {
	$rating = $request->get_param( 'bookRating' );

	if ( $rating ) {
		$args['meta_key'] = 'themeslug_book_rating';
		$args['meta_value'] = absint( $rating );
	}

	return $args;
}

add_filter( 'pre_render_block', 'themeslug_pre_render_block', 10, 2 );

/**
 * Filters the query vars when the Query Loop block is in use and has a book
 * rating assigned to the query. This handles showing the correct posts on the
 * front end of the site.
 */
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

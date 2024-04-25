/**
 * Adds custom controls to Query Loop block for selecting posts by custom meta.
 * This script adds the "Book Review" panel to all Query Loop blocks since this
 * demo is specific to building a site that consists of only book reviews. In
 * practice, you may choose to only add this panel via a custom Query Loop block
 * variation for your project.
 *
 * @link https://developer.wordpress.org/news/2022/12/20/building-a-book-review-grid-with-a-query-loop-block-variation/
 */

import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

// Creates a panel for outputting custom controls related to querying posts
// specifically via book review metadata.
const BookReviewControls = ( { props: {
	attributes,
	setAttributes
} } ) => {
	const { query } = attributes;

	return (
		<PanelBody title={ __( 'Book Review', 'themeslug' ) }>
			<SelectControl
				label={ __( 'Rating', 'themeslug' ) }
				value={ query?.bookRating || '' }
				options={ [
					{ value: '', label: '' },
					{ value: 1,  label: __( '1 Star', 'themeslug' ) },
					{ value: 2,  label: __( '2 Stars', 'themeslug' ) },
					{ value: 3,  label: __( '3 Stars', 'themeslug' ) },
					{ value: 4,  label: __( '4 Stars', 'themeslug' ) },
					{ value: 5,  label: __( '5 Stars', 'themeslug' ) }
				] }
				onChange={ ( value ) => {
					setAttributes( {
						query: {
							...query,
							bookRating: value
						}
					} );
				} }
			/>
		</PanelBody>
	);
};

// Filters the `core/query` block edit, adding in the custom `BookReviewControls`
// component created above. If not the `core/query` block, we just return the
// `BlockEdit` instance.
const withBookReviewControls = ( BlockEdit ) => ( props ) => {
	return 'core/query' === props.name ? (
		<>
			<BlockEdit {...props} />
			<InspectorControls>
			<BookReviewControls props={props} />
			</InspectorControls>
		</>
	) : (
		<BlockEdit {...props} />
	);
};

addFilter( 'editor.BlockEdit', 'core/query', withBookReviewControls );

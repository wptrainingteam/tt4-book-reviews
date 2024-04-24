// Adds custom controls to Query Loop block.

import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

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

const withBookReviewControls = ( BlockEdit ) => ( props ) => {
	console.log( props );
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

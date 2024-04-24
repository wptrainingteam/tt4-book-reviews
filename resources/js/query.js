
import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

const VARIATION_NAME = 'themeslug/book-reviews';

registerBlockVariation( 'core/query', {
	name: VARIATION_NAME,
	title: __( 'Book Reviews', 'themeslug' ),
	icon: 'book',
	description: __( 'Displays a list of book reviews with star rating option.', 'themeslug' ),
	isActive: [ 'namespace' ],
	attributes: {
		namespace: VARIATION_NAME,
		query: {
		    postType: 'post',
		    perPage: 6,
		    offset: 0
		},
		align: 'wide'
	},
	innerBlocks: [
		[
			'core/post-template',
			{
				style:{
					spacing:{
						blockGap:"var:preset|spacing|30"
					}
				},
				layout:{
					type:"grid",
					columnCount:3
				}
			},
			[
				[ 'core/post-featured-image' ],
				[ 'core/post-title' ]
			]
		]
	]
} );

const isBookReviewsVariation = ( props ) => {
	const {
		attributes: { namespace }
	} = props;

	return namespace && namespace === VARIATION_NAME;
};

const BookReviewControls = ( { props: {
	attributes,
	setAttributes
} } ) => {
	const { query } = attributes;

	return (
		<PanelBody title={ __( 'Book Review', 'themeslug' ) }>
			<SelectControl
				label={ __( 'Rating', 'themeslug' ) }
				value={ query.bookRating }
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
	return isBookReviewsVariation( props ) ? (
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

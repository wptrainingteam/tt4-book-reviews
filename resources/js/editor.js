import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

import { registerBlockVariation } from '@wordpress/blocks';
import { starFilled } from '@wordpress/icons';

registerPlugin( 'tt4-book-reviews', {
	render: () => {
		const postType = useSelect(
			( select ) => select( 'core/editor' ).getCurrentPostType(),
			[]
		);

		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

		if ( 'post' !== postType ) {
			return null;
		}
			
		return (
			<PluginDocumentSettingPanel
				title={ __( 'Book Review', 'themeslug' ) }
			>
				<NumberControl
					label={ __( 'Rating', 'themeslug' ) }
					min={ 1 }
					max={ 5 }
					value={ meta?.themeslug_book_rating }
					onChange={ ( value ) =>
						setMeta( { 
							...meta, 
							themeslug_book_rating: value 
						} )
					}
				/>
			</PluginDocumentSettingPanel>
		);
	}
} );

registerBlockVariation( 'core/paragraph', {
	name:       'themeslug/book-rating',
	title:      __('Book Rating', 'x3p0-ideas'),
	description: __('Displays the book review rating.', 'x3p0-ideas'),
	category:   'widgets',
	keywords:   [ 'book', 'rating' ],
	icon:       starFilled,
	scope:      [ 'inserter' ],
	attributes: {
		metadata: {
			bindings: {
				content: {
					source: 'core/post-meta',
					args: {
						key: 'themeslug_book_rating'
					}
				}
			}
		},
		placeholder: __( 'Book Rating', 'themeslug' )
	},
	example: {},
	isActive: (blockAttributes) =>
		'core/post-meta' === blockAttributes?.metadata?.bindings?.content?.source
		&& 'themeslug_book_rating' === blockAttributes?.metadata?.bindings?.content?.args?.key
});
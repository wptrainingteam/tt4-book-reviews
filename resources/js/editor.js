import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import {
	RangeControl,
	__experimentalInputControl as InputControl,
	__experimentalNumberControl as NumberControl,
	__experimentalVStack as VStack
} from '@wordpress/components';

import { registerBlockVariation } from '@wordpress/blocks';
import { page, pencil, starFilled } from '@wordpress/icons';

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
				<VStack>
					<RangeControl
						label={ __( 'Rating', 'themeslug' ) }
						min={ 1 }
						max={ 5 }
						step={ 1 }
						value={ meta?.themeslug_book_rating }
						onChange={ ( value ) =>
							setMeta( {
								...meta,
								themeslug_book_rating: value
							} )
						}
					/>
					<InputControl
						label={ __( 'Author', 'themeslug' ) }
						value={ meta?.themeslug_book_author }
						onChange={ ( value ) =>
							setMeta( {
								...meta,
								themeslug_book_author: value
							} )
						}
					/>
					<NumberControl
						label={ __( 'Total Pages', 'themeslug' ) }
						min={ 1 }
						value={ meta?.themeslug_book_length }
						onChange={ ( value ) =>
							setMeta( {
								...meta,
								themeslug_book_length: value
							} )
						}
					/>
				</VStack>
			</PluginDocumentSettingPanel>
		);
	}
} );

registerBlockVariation( 'core/paragraph', {
	name:       'themeslug/book-author',
	title:      __('Book Author', 'x3p0-ideas'),
	description: __('Displays the book author.', 'x3p0-ideas'),
	category:   'widgets',
	keywords:   [ 'book', 'author' ],
	icon:       pencil,
	scope:      [ 'inserter' ],
	attributes: {
		metadata: {
			bindings: {
				content: {
					source: 'core/post-meta',
					args: {
						key: 'themeslug_book_author'
					}
				}
			}
		},
		placeholder: __( 'Book Author', 'themeslug' )
	},
	example: {},
	isActive: (blockAttributes) =>
		'core/post-meta' === blockAttributes?.metadata?.bindings?.content?.source
		&& 'themeslug_book_author' === blockAttributes?.metadata?.bindings?.content?.args?.key
});

registerBlockVariation( 'core/paragraph', {
	name:       'themeslug/book-author',
	title:      __('Book Author', 'x3p0-ideas'),
	description: __('Displays the book author.', 'x3p0-ideas'),
	category:   'widgets',
	keywords:   [ 'book', 'author' ],
	icon:       page,
	scope:      [ 'inserter' ],
	attributes: {
		metadata: {
			bindings: {
				content: {
					source: 'core/post-meta',
					args: {
						key: 'themeslug_book_author'
					}
				}
			}
		},
		placeholder: __( 'Book Author', 'themeslug' )
	},
	example: {},
	isActive: (blockAttributes) =>
		'core/post-meta' === blockAttributes?.metadata?.bindings?.content?.source
		&& 'themeslug_book_author' === blockAttributes?.metadata?.bindings?.content?.args?.key
});

registerBlockVariation( 'core/paragraph', {
	name:       'themeslug/book-length',
	title:      __('Book Length', 'x3p0-ideas'),
	description: __('Displays the book length in pages.', 'x3p0-ideas'),
	category:   'widgets',
	keywords:   [ 'book', 'length', 'pages' ],
	icon:       starFilled,
	scope:      [ 'inserter' ],
	attributes: {
		metadata: {
			bindings: {
				content: {
					source: 'core/post-meta',
					args: {
						key: 'themeslug_book_length'
					}
				}
			}
		},
		placeholder: __( 'Book Length', 'themeslug' )
	},
	example: {},
	isActive: (blockAttributes) =>
		'core/post-meta' === blockAttributes?.metadata?.bindings?.content?.source
		&& 'themeslug_book_length' === blockAttributes?.metadata?.bindings?.content?.args?.key
});

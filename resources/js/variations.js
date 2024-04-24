// Registers custom block variations for bindings.

import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { page, pencil, starFilled } from '@wordpress/icons';

const goodreadsIcon = (
	<svg width="24" height="24" viewBox="0 0 24 24" version="1.1">
		<path d="M17.3,17.5c-0.2,0.8-0.5,1.4-1,1.9c-0.4,0.5-1,0.9-1.7,1.2C13.9,20.9,13.1,21,12,21c-0.6,0-1.3-0.1-1.9-0.2 c-0.6-0.1-1.1-0.4-1.6-0.7c-0.5-0.3-0.9-0.7-1.2-1.2c-0.3-0.5-0.5-1.1-0.5-1.7h1.5c0.1,0.5,0.2,0.9,0.5,1.2 c0.2,0.3,0.5,0.6,0.9,0.8c0.3,0.2,0.7,0.3,1.1,0.4c0.4,0.1,0.8,0.1,1.2,0.1c1.4,0,2.5-0.4,3.1-1.2c0.6-0.8,1-2,1-3.5v-1.7h0 c-0.4,0.8-0.9,1.4-1.6,1.9c-0.7,0.5-1.5,0.7-2.4,0.7c-1,0-1.9-0.2-2.6-0.5C8.7,15,8.1,14.5,7.7,14c-0.5-0.6-0.8-1.3-1-2.1 c-0.2-0.8-0.3-1.6-0.3-2.5c0-0.9,0.1-1.7,0.4-2.5c0.3-0.8,0.6-1.5,1.1-2c0.5-0.6,1.1-1,1.8-1.4C10.3,3.2,11.1,3,12,3 c0.5,0,0.9,0.1,1.3,0.2c0.4,0.1,0.8,0.3,1.1,0.5c0.3,0.2,0.6,0.5,0.9,0.8c0.3,0.3,0.5,0.6,0.6,1h0V3.4h1.5V15 C17.6,15.9,17.5,16.7,17.3,17.5z M13.8,14.1c0.5-0.3,0.9-0.7,1.3-1.1c0.3-0.5,0.6-1,0.8-1.6c0.2-0.6,0.3-1.2,0.3-1.9 c0-0.6-0.1-1.2-0.2-1.9c-0.1-0.6-0.4-1.2-0.7-1.7c-0.3-0.5-0.7-0.9-1.3-1.2c-0.5-0.3-1.1-0.5-1.9-0.5s-1.4,0.2-1.9,0.5 c-0.5,0.3-1,0.7-1.3,1.2C8.5,6.4,8.3,7,8.1,7.6C8,8.2,7.9,8.9,7.9,9.5c0,0.6,0.1,1.3,0.2,1.9C8.3,12,8.6,12.5,8.9,13 c0.3,0.5,0.8,0.8,1.3,1.1c0.5,0.3,1.1,0.4,1.9,0.4C12.7,14.5,13.3,14.4,13.8,14.1z" />
	</svg>
);

registerBlockVariation( 'core/paragraph', {
	name:       'themeslug/book-author',
	title:      __( 'Book Author', 'themeslug' ),
	description: __( 'Displays the book author.', 'themeslug' ),
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
		'themeslug_book_author' === blockAttributes?.metadata?.bindings?.content?.args?.key
});

registerBlockVariation( 'core/paragraph', {
	name:       'themeslug/book-length',
	title:      __( 'Book Length', 'themeslug' ),
	description: __( 'Displays the book length in pages.', 'themeslug' ),
	category:   'widgets',
	keywords:   [ 'book', 'pages', 'length' ],
	icon:       page,
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
		'themeslug_book_length' === blockAttributes?.metadata?.bindings?.content?.args?.key
});

registerBlockVariation( 'core/paragraph', {
	name:       'themeslug/book-rating',
	title:      __( 'Book Rating', 'themeslug' ),
	description: __( 'Displays the book rating.', 'themeslug' ),
	category:   'widgets',
	keywords:   [ 'book', 'rating', 'review' ],
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
		'themeslug_book_rating' === blockAttributes?.metadata?.bindings?.content?.args?.key
});

registerBlockVariation( 'core/button', {
	name:       'themeslug/book-goodreads-button',
	title:      __( 'Book Goodreads Button', 'themeslug' ),
	description: __( 'Displays a button with the link to the Goodreads book URL.', 'themeslug' ),
	category:   'widgets',
	keywords:   [ 'book', 'author' ],
	icon:       goodreadsIcon,
	scope:      [ 'inserter' ],
	attributes: {
		text: __( 'View on Goodreads &rarr;', 'themeslug' ),
		metadata: {
			bindings: {
				url: {
					source: 'core/post-meta',
					args: {
						key: 'themeslug_book_goodreads_url'
					}
				}
			}
		}
	},
	example: {},
	isActive: (blockAttributes) =>
		'themeslug_book_goodreads_url' === blockAttributes?.metadata?.bindings?.url?.args?.key
});

// Adds post meta input controls to posts.

import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
import { starFilled } from '@wordpress/icons';
import { registerPlugin } from '@wordpress/plugins';

import {
	RangeControl,
	__experimentalInputControl as InputControl,
	__experimentalNumberControl as NumberControl,
	__experimentalVStack as VStack
} from '@wordpress/components';

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
						beforeIcon={ starFilled }
						currentInput={0}
						initialPosition={0}
						min={ 0 }
						max={ 5 }
						step={ 1 }
						value={ parseInt( meta?.themeslug_book_rating, 10 ) }
						onChange={ ( value ) => setMeta( {
							...meta,
							themeslug_book_rating: `${ value }` || null
						} ) }
					/>
					<InputControl
						label={ __( 'Author', 'themeslug' ) }
						value={ meta?.themeslug_book_author }
						onChange={ ( value ) => setMeta( {
							...meta,
							themeslug_book_author: value || null
						} ) }
					/>
					<NumberControl
						label={ __( 'Total Pages', 'themeslug' ) }
						min={ 0 }
						value={ parseInt( meta?.themeslug_book_length, 10 ) }
						onChange={ ( value ) => setMeta( {
							...meta,
							themeslug_book_length: `${ value }` || null
						} ) }
					/>
					<InputControl
						label={ __( 'Goodreads URL', 'themeslug' ) }
						value={ meta?.themeslug_book_goodreads_url }
						onChange={ ( value ) => setMeta( {
							...meta,
							themeslug_book_goodreads_url: value || null
						} ) }
					/>
				</VStack>
			</PluginDocumentSettingPanel>
		);
	}
} );

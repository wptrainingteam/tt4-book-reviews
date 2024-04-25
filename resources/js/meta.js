/**
 * Adds post meta input controls to posts.
 */

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

/**
 * Registers a plugin that uses the `PluginDocumentSettingsPanel` SlotFill in
 * the post editor to output a custom panel.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-document-setting-panel/
 */
registerPlugin( 'tt4-book-reviews', {
	render: () => {
		// Gets the current post type from the `core/editor` store via
		// the `useSelect()` hook.
		// @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#useselect
		const postType = useSelect(
			( select ) => select( 'core/editor' ).getCurrentPostType(),
			[]
		);

		// Assign constants for getting/setting post meta.
		// @link https://developer.wordpress.org/block-editor/how-to-guides/metabox/#step-2-add-meta-block
		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

		// Bail early if this is not the `post` post type.
		if ( 'post' !== postType ) {
			return null;
		}

		// Returns controls built with Core components for handling the
		// meta input fields.
		// @link https://developer.wordpress.org/block-editor/reference-guides/components/
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

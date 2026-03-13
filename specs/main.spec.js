import { test, expect } from '@wordpress/e2e-test-utils-playwright';

test( 'Loads WordPress dashboard', async ( { admin, page } ) => {
	await admin.visitAdminPage( '/' );

	await expect(
		page.getByRole( 'heading', { name: 'Welcome to WordPress', level: 2 } )
	).toBeVisible();
} );

test( 'Inserts Book Author block', async ( { admin, page, editor } ) => {
	await admin.createNewPost();

	await page
		.getByRole( 'button', {
			name: 'Block Inserter',
		} )
		.click();

	await page
		.getByRole( 'region', { name: 'Block Library' } )
		.getByRole( 'listbox', { name: 'Widgets' } )
		.getByRole( 'option', { name: 'Book Author', exact: true } )
		.click();

	await expect.poll( editor.getBlocks ).toMatchObject( [
		{
			name: 'core/paragraph',
			attributes: {
				metadata: {
					bindings: {
						content: {
							source: 'core/post-meta',
							args: { key: 'themeslug_book_author' },
						},
					},
				},
				placeholder: 'Book Author',
			},
		},
	] );

	await page.evaluate( () =>
		wp.data
			.dispatch( 'core/editor' )
			.editPost( { meta: { themeslug_book_author: 'Jane Austen' } } )
	);

	const bookAuthorBlock = editor.canvas.getByRole( 'document', {
		name: 'Block: Paragraph',
	} );

	await expect( bookAuthorBlock ).toHaveText( 'Jane Austen' );
} );

test( 'Inserts Book Review Card pattern', async ( { admin, page, editor } ) => {
	await admin.createNewPost();

	await page
		.getByRole( 'button', {
			name: 'Block Inserter',
		} )
		.click();

	await page
		.getByRole( 'tab', {
			name: 'Patterns',
		} )
		.click();

	await page.getByRole( 'tab', { name: 'Book Reviews' } ).click();

	await page
		.getByRole( 'listbox', { name: 'Book Reviews' } )
		.getByRole( 'option', { name: 'Book Review Card' } )
		.click();

	const bookReviewCardPattern = editor.canvas.getByRole( 'document', {
		name: 'Block: Columns',
	} );

	await expect( bookReviewCardPattern ).toMatchAriaSnapshot();
} );

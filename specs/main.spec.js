import { test, expect } from '@wordpress/e2e-test-utils-playwright';

test( 'Loads WordPress dashboard', async ( { admin, page } ) => {
	await admin.visitAdminPage( '/' );

	await expect(
		page.getByRole( 'heading', { name: 'Welcome to WordPress', level: 2 } )
	).toBeVisible();
} );

<?php

/**
 * Title: Book Review Card
 * Slug: themeslug/book-review-card
 * Categories: featured, text
 * Viewport Width: 1376
 */

?>
<!-- wp:columns {"verticalAlignment":"center","align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|30","bottom":"var:preset|spacing|30","left":"var:preset|spacing|30","right":"var:preset|spacing|30"},"blockGap":{"top":"var:preset|spacing|40","left":"var:preset|spacing|30"}}},"backgroundColor":"accent"} -->
<div class="wp-block-columns alignwide are-vertically-aligned-center has-accent-background-color has-background" style="padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:column {"verticalAlignment":"center","width":"33.33%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:33.33%"><!-- wp:post-featured-image {"aspectRatio":"3/4","style":{"border":{"radius":"0px"}}} /--></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"66.66%","style":{"spacing":{"blockGap":"var:preset|spacing|40"}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:66.66%"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|10"}},"layout":{"type":"flex","orientation":"vertical"}} -->
<div class="wp-block-group"><!-- wp:group {"style":{"spacing":{"blockGap":"0.25em"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:paragraph -->
<p>⭐️</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"placeholder":"Book Rating","metadata":{"bindings":{"content":{"source":"core/post-meta","args":{"key":"themeslug_book_rating"}}}}} -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>/ 5 Stars</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"blockGap":"0.25em"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:paragraph -->
<p><strong>📃</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"placeholder":"Book Length","metadata":{"bindings":{"content":{"source":"core/post-meta","args":{"key":"themeslug_book_length"}}}}} -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Pages</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"blockGap":"0.25em"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:paragraph -->
<p>✍️ Written by</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"placeholder":"Book Author","metadata":{"bindings":{"content":{"source":"core/post-meta","args":{"key":"themeslug_book_author"}}}}} -->
<p></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"metadata":{"bindings":{"url":{"source":"core/post-meta","args":{"key":"themeslug_book_goodreads_url"}}}}} -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">View on Goodreads →</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->

<!-- wp:pullquote {"textAlign":"left","style":{"typography":{"fontSize":"1.2rem"},"spacing":{"padding":{"top":"0","bottom":"0"}}},"className":"is-style-plain"} -->
<figure class="wp-block-pullquote has-text-align-left is-style-plain" style="padding-top:0;padding-bottom:0;font-size:1.2rem"><blockquote><p></p></blockquote></figure>
<!-- /wp:pullquote --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

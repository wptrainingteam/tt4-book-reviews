<?php

/**
 * Title: Query Grid: Book Reviews
 * Slug: themeslug/query-grid-reviews
 * Categories: featured, posts
 * Viewport Width: 1376
 */

?>
<!-- wp:query {"queryId":15,"query":{"perPage":6,"pages":0,"offset":"0","postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true,"taxQuery":{"category":[]}},"align":"wide","layout":{"type":"default"}} -->
<div class="wp-block-query alignwide"><!-- wp:group {"layout":{"type":"default"}} -->
<div class="wp-block-group"><!-- wp:post-template {"align":"full","style":{"spacing":{"blockGap":"var:preset|spacing|30"}},"layout":{"type":"grid","columnCount":3}} -->
<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"3/4","style":{"border":{"radius":"0px"}}} /-->

<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|10"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:post-title {"textAlign":"center","isLink":true,"fontSize":"large"} /-->

<!-- wp:group {"style":{"spacing":{"blockGap":"0"}},"layout":{"type":"constrained"},"fontSize":"small"} -->
<div class="wp-block-group has-small-font-size"><!-- wp:group {"style":{"spacing":{"blockGap":"0.25em"}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center"}} -->
<div class="wp-block-group"><!-- wp:paragraph -->
<p>By</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"placeholder":"Book Author","metadata":{"bindings":{"content":{"source":"core/post-meta","args":{"key":"themeslug_book_author"}}}}} -->
<p></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"blockGap":"0.25em"}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center"}} -->
<div class="wp-block-group"><!-- wp:paragraph -->
<p>⭐️</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"placeholder":"Book Rating","metadata":{"bindings":{"content":{"source":"core/post-meta","args":{"key":"themeslug_book_rating"}}}}} -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Stars</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
<!-- /wp:post-template -->

<!-- wp:spacer {"height":"var:preset|spacing|40","style":{"spacing":{"margin":{"top":"0","bottom":"0"}}}} -->
<div style="margin-top:0;margin-bottom:0;height:var(--wp--preset--spacing--40)" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:query-pagination {"paginationArrow":"arrow","layout":{"type":"flex","justifyContent":"space-between"}} -->
<!-- wp:query-pagination-previous /-->

<!-- wp:query-pagination-next /-->
<!-- /wp:query-pagination --></div>
<!-- /wp:group --></div>
<!-- /wp:query -->

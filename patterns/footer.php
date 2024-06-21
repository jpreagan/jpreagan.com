<?php
/**
 * Title: Simple footer
 * Slug: jpreagan/footer
 * Categories: footer
 * Block Types: core/template-part/footer
 */
?>

<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50)">
	<!-- wp:group {"align":"wide"} -->
	<div class="wp-block-group alignwide">
		<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|contrast-2"}}}},"textColor":"contrast-2","fontSize":"small"} -->
		<p class="has-contrast-2-color has-text-color has-link-color has-small-font-size">
			<a href="/">James Reagan</a> &copy; <?php echo date( 'Y' ); ?>
		</p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->

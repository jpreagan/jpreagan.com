<?php

/**
 * Title: Sidebar
 * Slug: jpreagan/hidden-sidebar
 * Inserter: no
 */
?>
<!-- wp:group {"style":{"spacing":{"blockGap":"36px","padding":{"right":"0","left":"0"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="padding-right:0;padding-left:0">
	<!-- wp:group {"style":{"spacing":{"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group" style="margin-top:0;margin-bottom:0">
		<!-- wp:avatar {"size":80,"style":{"border":{"radius":"16px"}}} /-->

		<!-- wp:group {"style":{"spacing":{"blockGap":"16px"}},"layout":{"type":"flex","orientation":"vertical"}} -->
		<div class="wp-block-group">
			<!-- wp:heading {"style":{"typography":{"fontSize":"1.6rem"}}} -->
			<h2 class="wp-block-heading" style="font-size:1.6rem"><?php esc_html_e( 'About me', 'jpreagan' ); ?></h2>
			<!-- /wp:heading -->

			<!-- wp:post-author-biography {"fontSize":"small"} /-->
		</div>
		<!-- /wp:group -->
	</div>
	<!-- /wp:group -->

	<!-- wp:separator {"backgroundColor":"contrast","className":"is-style-wide"} -->
	<hr class="wp-block-separator has-text-color has-contrast-color has-alpha-channel-opacity has-contrast-background-color has-background is-style-wide" />
	<!-- /wp:separator -->

	<!-- wp:group {"style":{"spacing":{"blockGap":"16px"}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group">
		<!-- wp:heading {"style":{"typography":{"fontSize":"1.6rem"}}} -->
		<h2 class="wp-block-heading" style="font-size:1.6rem"><?php esc_html_e( 'Categories', 'jpreagan' ); ?></h2>
		<!-- /wp:heading -->

		<!-- wp:categories {"showHierarchy":true,"showPostCounts":true,"fontSize":"small"} /-->
	</div>
	<!-- /wp:group -->

	<!-- wp:separator {"backgroundColor":"contrast","className":"is-style-wide"} -->
	<hr class="wp-block-separator has-text-color has-contrast-color has-alpha-channel-opacity has-contrast-background-color has-background is-style-wide" />
	<!-- /wp:separator -->

	<!-- wp:group {"style":{"spacing":{"blockGap":"16px"}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group">
		<!-- wp:heading {"style":{"typography":{"fontSize":"1.6rem"}}} -->
		<h2 class="wp-block-heading" style="font-size:1.6rem"><?php esc_html_e( 'Connect with me', 'jpreagan' ); ?></h2>
		<!-- /wp:heading -->

		<!-- wp:social-links {"iconColor":"contrast","iconColorValue":"#d7c4bb","openInNewTab":true,"showLabels":true,"className":"has-icon-color is-style-logos-only","layout":{"type":"flex","flexWrap":"nowrap","orientation":"vertical"}} -->
		<ul class="wp-block-social-links has-icon-color is-style-logos-only">
			<!-- wp:social-link {"url":"https://github.com/jpreagan","service":"github"} /-->
			<!-- wp:social-link {"url":"https://twitter.com/jpreagan_","service":"x"} /-->
			<!-- wp:social-link {"url":"https://linkedin.com/in/jpreagan","service":"linkedin"} /-->
			<!-- wp:social-link {"url":"https://www.youtube.com/channel/UCFBAMSjeJOmQ-gLrqczjRbg","service":"youtube"} /-->
		</ul>
		<!-- /wp:social-links -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->

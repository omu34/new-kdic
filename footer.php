<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package kdc
 */

?>

	<footer id="colophon" class="site-footer" style="background-color: #F8F0ED;">
		<div class="site-info text-center">
			<b><a href="<?php echo esc_url( __( 'https://wordpress.org/', 'New-KDIC' ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'New-KDIC' ), 'GrowthLab' );
				?>
			</a>
			<span class="sep"> | </span>
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'New-KDIC' ), 'New-KDIC', '<a href="">@Bernard</a>' );
				?></b>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>

<?php
/**
 *
 * Template Name: landing
 *
 * The template for displaying content from pagebuilder.
 *
 * This is the template that displays pages without title in fullwidth layout. Suitable for use with Pagebuilder.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package KDIC
 */
get_header(); 


get_template_part( 'components/landing/headers');
get_template_part( 'components/landing/banner');
get_template_part( 'components/landing/roles');
get_template_part( 'components/landing/events');
get_template_part( 'components/landing/revenue');
get_template_part( 'components/landing/footers');
 ?>



<?php get_footer(); ?>
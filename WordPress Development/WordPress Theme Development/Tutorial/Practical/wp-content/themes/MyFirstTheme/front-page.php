<?php
	get_header();
?>    
   
	<article class="content px-3 py-5 p-md-5">
	
		<!-- WordPress uses while loop: Anything that publish or uploaded in wordpress, it get store in mySql database table of wordPress in row manner and render on the single page template like on posts or pages. This is known as Loop in WordPress -->

		<!-- If posts exists -->
		<?php 
			if(have_posts()){
				//  while we've posts in database. This gonna work like an iterator, iterate for every single post
				while(have_posts()){
					the_post();
					the_content();
				}
			}
		?>
		
	</article>
	 
<?php
	get_footer();
?>


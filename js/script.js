/* Adds a swipe functionality to the boostrap carousel*/

<script>
$(document).ready(function() {
   $("#myCarousel").swiperight(function() {
      $("#myCarousel").carousel('prev');
    });
   $("#myCarousel").swipeleft(function() {
      $("#myCarousel").carousel('next');
   });
});
</script>

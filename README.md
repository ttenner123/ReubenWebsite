# ReubenWebsite
Website for Reuben.


INITIAL NOTES/TO-DOS
- The views (different pages) are detected by the browser; "ourWebsite.com/" will show the home view, "ourWebsite.com/platform" 
will show the platform view. Normally when Intellij launches a page, it'll have some nonsense URL and the view won't show 
the view because of that. As I'm realizing this, I'm about to be done for the night. At work, I was able to customize the 
URL because I was hosting the site with ColdFusion's host-thing. I haven't been able to figure out quickly how to do that 
on Intellij (and I haven't tried in Eclipse.) So, in order to make sure I set the views up correctly (and to finish the 
rest of the site) we need to figure out how to host the website and customize the URL. It's probably easy, I just
haven't been able to quickly figure out how to do that.
- A main thing that needs to be done is the footer; the information at the end.

ISSUES 8:38PM 12-2
1. The "home" and "platform" links in nav bar aren't perfectly centered.
    - I had hoped that making it a height of 6% with a 2% padding/margin on top of the <ul> elements would 
    center it pretty well, but even then it's not quite working. Unsure how to fix that.
2. Given that the nav-bar is 10% of the height of the page, giving the main-page div a padding of 10% *should* 
keep its height even with the nav bar (so the main content doesn't start under the nav bar.) However, it's just not working
out that way. (Looks fine until the page is made smaller, when the image goes under the nav bar.)


EVENTUAL TO-DOs:
1. Make better on non-large-desktop screens (THIS IS FOR AFTER DESKTOP PORTION IS COMPLETE)
    - At the moment, everything scales by percentage of screen width. This is looking good for a large desktop screen, but 
    as the screen gets smaller (small desktop screen / more likely tablet) we'll need to adjust its view. We also should 
    configure a better mobile layout; not worried about this until the main site is done.




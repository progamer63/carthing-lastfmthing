# carthing-lastfmthing
![Example Image](/files/example3.png)
# about:
this project is an idea to have a decent recreation of the spotify car thing UI as a single page web page that can then be used via something like [superbird-debian-kiosk](https://github.com/bishopdynamics/superbird-debian-kiosk)  
though, that does require additional hardware, so hopefully eventuallyTM people figure out how to run chromium on-device by replacing the stock UI itself  
since i mainly mess around in python + html/css, this probably won't be the best thing ever
# basic setup:
requries you to have a lastfm account & link it to spotify  
modify fetch.js "let user = '\<user\>';" to be your username
# misc:
i don't mind if you open issues or pull requests to improve something  
🟩 = done  
🟨 = works
🟧 = in progress  
🟥 = not trying  
# work list:
- **PRIORITY** bottom bar that at least has the buttons, even if non-functional [🟨]
- **PRIORITY** find actual icons for the buttons [🟧]
- add controls that work? maybe? i dont think its possible
- keep song info cached so when playing is paused, the same song keeps showing. right now it likes to show the first song played in the session.
- fine tune the font size scaling of song title. need to test many many more cases. [🟨]
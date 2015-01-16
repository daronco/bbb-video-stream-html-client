# bbb-video-stream-html-client

A simple HTML page to show a BigBlueButton video stream in a standalone Flash player.

Just open `index.html` and try it!

![Screenshot](https://raw.github.com/daronco/bbb-video-stream-html-client/master/screenshot.png)

## How to

When you open `index.html` and you will see 3 inputs you need to fill:
* The name of your BigBlueButton server: use the domain or IP only, without the `http` part, for example: `myserver.somewhere.com` or `192.168.0.1`.
* The internal meeting ID used by Red5. Something similar to `183f0bf3a0982a127bdb8161e0c44eb696b3e75c-1328884719999`.
* The internal video stream ID used by Red5. Something similar to `320x2401-1328884730777`.

The hard part is to find the internal IDs. In Mconf we included it in the API, see https://github.com/mconf/wiki/wiki/Mconf-Live-API. On a BigBlueButton server you will have to look for this information in the log files.

## Important!

In Flash Player's security model, Flash applications and SWF files on a local computer cannot access the network.
So first you need disable this security option for the files in your local folder.

To do so, go to the [Flash Security Panel](http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html) and add your local folder to the list.

$(document).ready(function() {

    setup_jwplayer = function(wrapper, ip, meeting, stream) {
        var streamer = "rtmp://" + ip + "/video/" + meeting;

        // TODO: for now assuming we will never have bigger resolutions...
        var width = stream.substring(0, 3);
        var height = stream.substring(4, 7);

        $(wrapper).empty();
        $(wrapper).css("width", width);
        $(wrapper).css("height", height);

        var el = $('<div></div>');
        el.attr("id", "mediaplayer");
        $(wrapper).append(el);

        jwplayer("mediaplayer").setup({
            flashplayer: 'jw-player/player.swf',
            id: 'playerID',
            width: width,
            height: height,
            file: stream,       // ex: '320x2401-1328884730718'
            streamer: streamer, // ex: 'rtmp://192.160.0.100/video/183f0bf3a0982a127bdb8161e0c44eb696b3e75c-1328884719358'
            autostart: 'true',
            provider: 'rtmp',
            duration: '0',
            bufferlength: '1',  // it's not working
            //start: '0',
            //live: 'true',
            //repeat: 'none',
        });
    };

    setup_flowplayer = function(wrapper, ip, meeting, stream) {
        var url = "rtmp://" + ip + "/video/" + meeting;

        // TODO: for now assuming we will never have bigger resolutions...
        var width = stream.substring(0, 3);
        var height = stream.substring(4, 7);

        $(wrapper).empty();
        $(wrapper).css("width", width);
        $(wrapper).css("height", height);

        var el = $('<a></a>');
        el.addClass("flowplayer")
        $(wrapper).append(el);

        $f("a.flowplayer", "flowplayer/flowplayer-3.2.7.swf", {
            clip: {
                url: stream, // ex: '320x2401-1328884730718'
                provider: 'rtmp',
                live: true,
                bufferLength: 1,
                autoPlay: true,
            },
            plugins: {
                rtmp: {
                    url: 'flowplayer/flowplayer.rtmp-3.2.3.swf',
                    netConnectionUrl: url // ex: 'rtmp://192.160.0.100/video/183f0bf3a0982a127bdb8161e0c44eb696b3e75c-1328884719358'
                }
            }
        });
        $("a.flowplayer").click();
    };

    $("#submit").on("click", function(e) {
        e.preventDefault();

        var ip = $("#server_ip").val();
        var meeting = $("#meeting_id").val();
        var stream = $("#stream_id").val();

        if ($('input:radio[name=player]:checked').val() == "flowplayer") {
            setup_flowplayer("#wrapper", ip, meeting, stream);
        } else {
            setup_jwplayer("#wrapper", ip, meeting, stream);
        }
    });

});
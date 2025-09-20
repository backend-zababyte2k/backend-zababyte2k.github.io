function getchannels() {
    let channeldb = [
        ["index.html", "NULL"],
        ["index.html", "NULL"],
        ["index2.html#https://pluto.tv/us/live-tv/5f36d726234ce10007784f2a", "https://backend-zababyte2k.github.io/tvhora/v1/ch2.png"],
        ["index3.html#http://fl7.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-zababyte2k.github.io/tvhora/v1/ch3.png"],
        ["index2.html#http://v2.weatherscan.net/", "https://backend-zababyte2k.github.io/tvhora/v1/ch4.png"],
        ["index3.html#https://fl7.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/index.m3u8", "https://backend-zababyte2k.github.io/tvhora/v1/ch5.png"],
        ["index3.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-zababyte2k.github.io/tvhora/v1/ch6.png"],
        ["index3.html#http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-zababyte2k.github.io/tvhora/v1/ch7.png"],
        ["index3.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-zababyte2k.github.io/tvhora/v1/ch8.png"],
        ["index3.html#https://fl7.moveonjoy.com/FOX_Sports_1/index.m3u8", "https://backend-zababyte2k.github.io/tvhora/v1/ch9.png"],
        ["index3.html#https://n13.stv.livebox.sk/stv-tv/_definst_/stv1.smil/playlist.m3u8?auth=b64:X2FueV98MTc1NzcyMzMyMXwwMjc0Mzk2ZTU5MGE0MTkwY2E1ZTA0YTczYjQ2OTdjMDVlMWNhMWQw", "https://backend-zababyte2k.github.io/tvhora/v1/ch10.png"],
        ["index3.html#https://n14.stv.livebox.sk/stv-tv/_definst_/stv2.smil/playlist.m3u8?auth=b64:X2FueV98MTc1ODMzNzk0MHwyNWQ3YzYwOTY2MjQ4MWRkNjEzMGZhNWFkOTU3MjcyNGE4YjA1ZWE0", "https://backend-zababyte2k.github.io/tvhora/v1/ch11.png"],
        ["index3.html#https://n14.stv.livebox.sk/stv-tv/_definst_/stv3.smil/playlist.m3u8?auth=b64:X2FueV98MTc1ODMzNzk3N3w0MWJiNmJiOTM1NThhZDU4NDU5NDA5YmYzZDY3MGRjMDRlZWIwZDgz", "https://backend-zababyte2k.github.io/tvhora/v1/ch12.png"],
        ["index3.html#https://n14.stv.livebox.sk/stv-tv/_definst_/stv4.smil/playlist.m3u8?auth=b64:X2FueV98MTc1ODMzODAxNXxkNmY5ZTc3YjQxYmNhYTViMWQ5YmM0ZWNjYjU5YWEzNDQ2YzllN2Ji", "https://backend-zababyte2k.github.io/tvhora/v1/ch13.png"],
        ["index2.html#https://media.joj.sk/embed/3Yz1gBQeKTs?autoplay=1", "https://backend-zababyte2k.github.io/tvhora/v1/ch14.png"],
        ["index2.html#https://media.joj.sk/embed/DKZwKhUlV3i?autoplay=1", "https://backend-zababyte2k.github.io/tvhora/v1/ch15.png"],
        ["index2.html#https://media.joj.sk/embed/3al7RoqzT3y?autoplay=1", "https://backend-zababyte2k.github.io/tvhora/v1/ch16.png"],
        ["index2.html#https://media.cms.markiza.sk/embed/markiza-live?autoplay=any", "https://backend-zababyte2k.github.io/tvhora/v1/ch17.png"],
        ["index2.html#https://media.cms.markiza.sk/embed/doma-live?autoplay=any", "https://backend-zababyte2k.github.io/tvhora/v1/ch18.png"],
        ["index2.html#https://media.cms.markiza.sk/embed/dajto-live?autoplay=any", "https://backend-zababyte2k.github.io/tvhora/v1/ch19.png"],
        ["index.html", "NULL"],
    ];
    return channeldb;
}

function getchinfo() {
    let chinfodb = [
        ["Channel Name", "Channel Description"],
        ["Channel Name", "Channel Description"],
        ["Bob Ross", "24/7 Joy of Painting"],
        ["News Nation", "Non bias news 24/7"],
        ["Weather Scan", "24/7 Weather Service"],
        ["E!", "The most popular movies and TV shows"],
        ["Cartoon Network", "24/7 cartoons"],
        ["Toonami", "24/7 Cartoons and Anime"],
        ["TNT", "Movies all the time."],
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}
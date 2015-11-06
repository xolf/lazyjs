<?php

$start = microtime(true);
$urls = [
    'http://treehouse.com',
    'http://gryme.xolf.info/p/gryme',
    'http://www.adweek.com/news/technology/news-sites-top-list-slowest-loading-web-pages-161619',
    'http://stackoverflow.com/questions/10150159/multiple-ajax-calls-at-same-time#10152046'
];
$url = $urls[rand(0,count($urls) - 1)];
$curl = curl_init();
curl_setopt_array($curl, array(CURLOPT_RETURNTRANSFER => 1, CURLOPT_URL => $url, CURLOPT_USERAGENT => 'xolf - Bot v0.1'));
$resp = curl_exec($curl);
$time = round(1000 * (microtime(true) - $start));
echo '<h4>Time: ' . $time . 'ms</h4>
<h3>' . $url . '</h3>' . htmlspecialchars($resp);
curl_close($curl);
<?php
try {
    $payload = json_decode( file_get_contents( "php://input" ) );
    echo "Try...";
} catch(Exception $e) {
    echo "... bollox.";
    exit(0);
}

//log the request
//file_put_contents('logs/github.txt', print_r($payload, TRUE), FILE_APPEND);
//$written = file_put_contents('../logs/github.txt', "baz" );
$written = file_put_contents( '../logs/github.txt', print_r($payload, TRUE), FILE_APPEND );

echo '$written = '. $written . '; ';

echo "Hello!? ";
echo "PHP version: " . phpversion() . " ";
var_dump( $payload->repository->default_branch ); //WORKS!!
// print_r($payload, TRUE);Cronin1221

//var_dump( $payload ); //WORKS!!
?>


<?php

if ($payload->repository->default_branch === 'master') {
    // path to your site deployment script
    exec('~/build.sh', $foo);
    var_dump( $foo );
    echo "the thing is working";
}


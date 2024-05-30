<?php

$koneksi = mysqli_connect ("localhost","root", "", "gmii");

if (mysqli_connect_error()) {
    echo "koneksi database gagal".mysqli_connect();
}
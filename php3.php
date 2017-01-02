<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="render" content="webkit">
    <meta http-equiv="x-ua-compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0"/>
    <title>学习php入门</title>
    <style>
        p{
            color: red;
            font-size: 20px;
            font-weight:bold;
        }

        #main {
            width: 500px;
            height: 300px;
            margin:0 auto;
            border:1px solid red;
            text-transform: uppercase;
        }

        #main div{
            background-color: green;
            color: white;
            text-align: center;
            text-transform: uppercase;
        }
    </style>
</head>
<body>
<div id="main">
    <?php
    $num1='我说："你好"!';
    $num2="我说：'你好'!";

    $num3="我说：\"你好\"!";
    $num4='我说：\'你好\'!';

    $num5="$num1";

    echo $num1;
    echo $num2;
    echo $num3;
    echo $num4;
    echo $num5;



    ?>
</div>
</body>
</html>
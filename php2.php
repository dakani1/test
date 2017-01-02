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
            $cont="学习php";
            echo $cont . '<br />';

            $cont="上imooc";
            echo $cont;

            var_dump($cont);
        ?>

    </div>
</body>
</html>
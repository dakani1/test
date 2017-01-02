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

        #main{
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
        $arr=array("苹果","栗子");
        $arr[4]="apple";
        print_r($arr);
        echo  "<br />";
        for($i=0;$i<4;$i++){
            echo '数组arr的第'.$i.'个内容是'.$arr[$i].'<br />';
        }
    echo  "<br /><br /><br /><br />";

        foreach($arr as $value){
            echo "$value:".$value."<br />";
        };

    ?>
</div>
</body>
</html>
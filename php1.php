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
        }

        #main div{
            background-color: green;
            color: white;
            text-align: center;
        }
    </style>
</head>
<body>
    <p><?php echo 'PHP学到家，'.'走到哪儿都不怕！'; ?></p>
    <p><?php
//            echo 23+6;
        ?>
    </p>

    <div id="main">
        <?php echo '<div>1</div><div>1</div>'?>
    </div>
</body>
</html>
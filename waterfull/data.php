<?php
	try{
		$pdo=new PDO('mysql:host=localhost;dbname=s33_shop','root','123456');
		$pdo->exec('set names utf8');
	}catch(PDOExcpetion $e){	
		echo $e->getMessage();
		exit; 
	}
	$form =$_GET['form'];
	$num = $_GET['num'];
	$sql = "select * from image limit {$form},{$num}";
	$stmt=$pdo->prepare($sql);
	$stmt->execute();
	$data=$stmt->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($data);



<!DOCTYPE html>
<html>
<head>
	<title>Basic Database Connection in PHP</title>
</head>

<body>
<h1>Link to the myProducts database</h1>
	<?php
	
	//Step 1:  Create a database connection
	
		$dbhost = "localhost";
		$dbuser = "root";
		$dbpassword = "";
		$dbname = "g00388219";

		$connection = mysqli_connect($dbhost,$dbuser,$dbpassword,$dbname);
		
		//Test if connection occoured
		if(mysqli_connect_errno()){
			die("DB connection failed: " .
				mysqli_connect_error() .
					" (" . mysqli_connect_errno() . ")"
					);
		}

		if (!$connection)
			{
				die('Could not connect: ' . mysqli_error());
			}
		
		//Step 2: Perform Database Query
		
			$result = mysqli_query($connection, "SELECT * FROM items;");
		 
		 
		//Step 3: User returned data
		
		echo "<table border='1' id='myTable'>
		<tr>
		<th>Id</th>
		<th>Name</th>
		<th>Image Location</th>
		<th>Price</th>
		</tr>";
		
		while($row = mysqli_fetch_array($result))
		{
			echo "<tr>";
			echo "<td>" . $row['id'] . "</td>";
			echo "<td>" . $row['name'] . "</td>";
			echo "<td>" . $row['imageURL'] . "</td>";
			echo "<td>" . $row['price'] ."</td>";
			echo "</tr>";
		}
		
		echo "</table>";
		 
		
		//Step 4:  Release returned data 
		mysqli_free_result($result);
			

		
		// Step 5: Close database connection
			mysqli_close($connection);
	?>



</body>
</html>
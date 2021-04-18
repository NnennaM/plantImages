

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";



--
-- Database: `G00388219`
--
CREATE DATABASE IF NOT EXISTS `myproducts` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;

USE `G00388219`;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `imageURL` text NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `imageURL`, `price`) VALUES
(1, 'Fidel Plant', 'Images/fidel2.jpg', 45),
(2, 'Golden Pothos', 'Images/goldenPothos.jpg', 15),
(3, 'Monstera Plant', 'Images/monstera.jpg', 50),
(4, 'Musa Plant', 'Images/musaPlant.jpg', 50),
(5, 'Rubber Plant', 'Images/rubber-plant1.jpg', 20),
(6, 'Snake Plant', 'Images/snake-plant.jpg', 30),
(7, 'Fern Plant', 'Images/fern.jpg', 20),
(8, 'Corn Plant', 'Images/cornPlant.jpg', 50),
(9, 'Aloe Vera', 'Images/aloeVera.jpg', 15),
(10, 'Umbrella Bamboo', 'Images/bamboo.jpg', 70),
(11, 'Lemon Tree', 'Images/lemonTree.jpg', 55),
(12, 'Bay Tree', 'Images/bayTree.jpg', 110),
(13, 'Clay Hanging Pot', 'Images/clayHangingPot1.jpg', 24),
(14, 'Fractured Pot', 'Images/fracturedPot1.jpg', 55),
(15, 'White Handle Pot', 'Images/whiteHandle.jpg', 35);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
  
COMMIT;


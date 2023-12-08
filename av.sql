-- MySQL dump 10.13  Distrib 8.1.0, for macos12.6 (x86_64)
--
-- Host: localhost    Database: avvika
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `addresses_id` int NOT NULL AUTO_INCREMENT,
  `pincode` int NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `house_flat_office_no` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `landmark` varchar(255) DEFAULT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_number` bigint NOT NULL,
  `address_type` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`addresses_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `registration` (`user_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,804406,'jehanabad','bihar','na','jehanabad bihar','front of pnb','diwakar',8800212384,'home','2023-10-20 09:34:01','2023-10-20 09:34:01',NULL),(2,804406,'hhh','bihar','ghhh','jehanabad','hhjj','gh',8800212384,'office','2023-10-20 18:21:17','2023-10-20 18:21:17',NULL),(3,804406,'ghoshi','Bihar','107','jehanabad','front of shiv mandir','diwakar kumar',8800212384,'home','2023-10-20 18:22:51','2023-10-20 18:22:51',NULL),(4,800008,'patna','bihar','107','jakanpura patna',NULL,'diwakar',8800212384,'office','2023-10-21 04:55:44','2023-10-21 04:55:44',NULL),(7,804408,'jehanabad','bihar','106','jehanabad,bihar','front of shiv mandir','Diwakar kumar',8800212384,'office','2023-10-26 05:55:07','2023-10-26 05:55:07',1),(10,804408,'jehanabad','bihar','107','daharpur ghoshi','front of avs','Shudanu',8800212384,'home','2023-11-11 19:00:30','2023-11-11 19:00:30',1);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bank_detail`
--

DROP TABLE IF EXISTS `bank_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bank_detail` (
  `bank_detail_id` int NOT NULL AUTO_INCREMENT,
  `Account_number` bigint NOT NULL,
  `Account_holder_name` varchar(255) NOT NULL,
  `ifsc_code` varchar(255) NOT NULL,
  `user_id` int NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`bank_detail_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `bank_detail_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `registration` (`user_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bank_detail`
--

LOCK TABLES `bank_detail` WRITE;
/*!40000 ALTER TABLE `bank_detail` DISABLE KEYS */;
INSERT INTO `bank_detail` VALUES (2,32724811181,'Diwakar kumar','SbIN00034',1,'2023-11-28 11:05:57','2023-11-28 11:05:57');
/*!40000 ALTER TABLE `bank_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `brand_id` int NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(255) NOT NULL,
  `brand_type` varchar(255) NOT NULL,
  PRIMARY KEY (`brand_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'mamaearth','Top Brands'),(10,'TAC','Top Brands'),(11,'SUGAR','Top Brands'),(12,'LAKME','Top Brands'),(13,'MAYBELLINE','Top Brands'),(14,'FIXDERMA','Top Brands'),(15,'HIMALAYA','Top Brands'),(16,'PLUM','Top Brands'),(17,'AVIKKA','Top Brands'),(18,'COLORBAR','Top Brands'),(19,'JOVEES','Top Brands'),(20,'JUST HERBS','Top Brands'),(21,'QUENCH','Top Brands'),(22,'SUGAR POP','Top Brands'),(23,'SWISS BEAUTY','Top Brands'),(24,'FACES CANADA','Top brand');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carousels`
--

DROP TABLE IF EXISTS `carousels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carousels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_categories` varchar(255) NOT NULL,
  `brand_name` varchar(255) NOT NULL,
  `place` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carousels`
--

LOCK TABLES `carousels` WRITE;
/*!40000 ALTER TABLE `carousels` DISABLE KEYS */;
INSERT INTO `carousels` VALUES (4,'makeup','lakme','top','uploads/banner/1695115468134-banner2.png','2023-09-19 09:24:28','2023-09-19 09:24:28'),(5,'makeup','lakme','top','uploads/banner/1695115471940-banner2.png','2023-09-19 09:24:31','2023-09-19 09:24:31'),(6,'makeup','lakme','top','uploads/banner/1695115473255-banner2.png','2023-09-19 09:24:33','2023-09-19 09:24:33'),(7,'Makeup','mamaearth','top','uploads/banner/1699341142720-crousalmamaearth.png','2023-11-07 07:12:22','2023-11-07 07:12:22'),(8,'Makeup','mamaearth','top','uploads/banner/1699341192805-mamaearthcrousal.png','2023-11-07 07:13:12','2023-11-07 07:13:12');
/*!40000 ALTER TABLE `carousels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart_ibfk_1637` FOREIGN KEY (`user_id`) REFERENCES `registration` (`user_id`),
  CONSTRAINT `cart_ibfk_1638` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (45,2,12,1,'2023-11-03 10:25:37','2023-11-03 10:25:37'),(51,1,42,1,'2023-11-25 10:04:08','2023-11-25 10:04:08'),(52,1,43,1,'2023-11-27 03:59:56','2023-11-27 03:59:56');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `categories_name` varchar(255) NOT NULL,
  `categories_id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`categories_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES ('Makeup',1,'2023-10-06 08:40:14','2023-10-06 08:40:14'),('Skin Care',2,'2023-10-06 09:22:33','2023-10-06 09:22:33'),('Hair care',3,'2023-10-06 09:22:44','2023-10-06 09:22:44'),('Fragrance',4,'2023-10-18 11:07:10','2023-10-18 11:07:10');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cetegories`
--

DROP TABLE IF EXISTS `cetegories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cetegories` (
  `categories_name` varchar(255) NOT NULL,
  `categories_id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`categories_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cetegories`
--

LOCK TABLES `cetegories` WRITE;
/*!40000 ALTER TABLE `cetegories` DISABLE KEYS */;
INSERT INTO `cetegories` VALUES ('Makeup',1,'2023-10-06 08:40:14','2023-10-06 08:40:14'),('Skin Care',2,'2023-10-06 09:22:33','2023-10-06 09:22:33'),('Hair care',3,'2023-10-06 09:22:44','2023-10-06 09:22:44'),('Fragrance',4,'2023-10-18 11:07:10','2023-10-18 11:07:10');
/*!40000 ALTER TABLE `cetegories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `color_id` int NOT NULL AUTO_INCREMENT,
  `color_name` varchar(255) NOT NULL,
  `color_code` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`color_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Pink','#FFC0CB','2023-12-01 10:16:10','2023-12-01 10:16:10'),(2,'Cyan','#00FFFF','2023-12-01 10:18:23','2023-12-01 10:18:23'),(4,'Red','#FF0000','2023-12-01 10:19:05','2023-12-01 10:19:05'),(5,'Green','#008000','2023-12-01 10:19:23','2023-12-01 10:19:23'),(7,'Blue','#0000FF','2023-12-02 08:39:00','2023-12-04 04:45:25'),(8,'white','#ffff','2023-12-04 06:37:32','2023-12-04 06:37:32');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `homebrandimage`
--

DROP TABLE IF EXISTS `homebrandimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `homebrandimage` (
  `brand_image_id` int NOT NULL AUTO_INCREMENT,
  `brand_id` int NOT NULL,
  `brand_image` varchar(255) NOT NULL,
  PRIMARY KEY (`brand_image_id`),
  KEY `brand_id` (`brand_id`),
  CONSTRAINT `homebrandimage_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homebrandimage`
--

LOCK TABLES `homebrandimage` WRITE;
/*!40000 ALTER TABLE `homebrandimage` DISABLE KEYS */;
INSERT INTO `homebrandimage` VALUES (1,1,'uploads/brandimage/1699418741742-mamaearthbrand.png'),(2,12,'uploads/brandimage/1699418929976-lakemehome.png'),(3,13,'uploads/brandimage/1699419113305-maybellinehome.png'),(4,22,'uploads/brandimage/1699419287133-sugarhome.png'),(5,16,'uploads/brandimage/1699419401735-plumhome.png'),(7,23,'uploads/brandimage/1699420661363-swissbeauty.png'),(8,24,'uploads/brandimage/1699423122290-facecanada.png');
/*!40000 ALTER TABLE `homebrandimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hometopbanner`
--

DROP TABLE IF EXISTS `hometopbanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hometopbanner` (
  `top_banner_id` int NOT NULL AUTO_INCREMENT,
  `home_top_banner_image` varchar(255) NOT NULL,
  `imageType` varchar(255) NOT NULL,
  PRIMARY KEY (`top_banner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hometopbanner`
--

LOCK TABLES `hometopbanner` WRITE;
/*!40000 ALTER TABLE `hometopbanner` DISABLE KEYS */;
INSERT INTO `hometopbanner` VALUES (4,'uploads/home_top_banner_image/1699244268398-all products.jpg','all product'),(5,'uploads/home_top_banner_image/1699244341087-skincare copy.jpg','Skin Care'),(6,'uploads/home_top_banner_image/1699244377161-haircare copy.jpg','Hair care'),(7,'uploads/home_top_banner_image/1699244419470-offer.jpg','Offer');
/*!40000 ALTER TABLE `hometopbanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `subCetegories_name` varchar(255) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES ('FACE MAKEUP','primer',1,'2023-10-06 09:14:06','2023-10-06 09:14:06'),('FACE MAKEUP','Concealer',2,'2023-10-06 09:20:59','2023-10-06 09:20:59'),('FACE MAKEUP','BB & CC Creams',3,'2023-10-06 09:21:24','2023-10-06 09:21:24'),('FACE MAKEUP','Foundation',4,'2023-10-06 09:21:43','2023-10-06 09:21:43'),('LIP MAKEUP','Lipstick',5,'2023-10-18 10:56:55','2023-10-18 10:56:55'),('CLEANSERS','FACE WASH',7,'2023-11-06 08:52:28','2023-11-06 08:52:28');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offer`
--

DROP TABLE IF EXISTS `offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offer` (
  `offer_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `discountType` enum('flat','percentage','buy-one-get-one','Buy 2 Get Free Gift') NOT NULL,
  `discountValue` decimal(10,2) NOT NULL,
  `termsAndConditions` text NOT NULL,
  `active` tinyint(1) DEFAULT '1',
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (`offer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offer`
--

LOCK TABLES `offer` WRITE;
/*!40000 ALTER TABLE `offer` DISABLE KEYS */;
INSERT INTO `offer` VALUES (1,'Flat $10 Off on makeup','Get a flat $10 discount on all makeup products.','flat',10.00,'Offer is valid until stock lasts. Limited to one use per customer.',1,'Makeup'),(2,'Flat $10 Off on makeup','Get a flat $10 discount on all makeup products.','flat',10.00,'Offer is valid until stock lasts. Limited to one use per customer.',1,'Makeup'),(3,'Buy 2 Get Free Gift','Buy 2 Get Free Gift','Buy 2 Get Free Gift',2.00,'Offer is valid until stock lasts. Limited to one use per customer.',1,'Makeup'),(4,'Buy 2 Get Free Gift','Buy 2 Get Free Gift','Buy 2 Get Free Gift',2.00,'Offer is valid until stock lasts. Limited to one use per customer.',1,'Makeup'),(5,'Buy 2 Get Free Gift','Buy 2 Get Free Gift','Buy 2 Get Free Gift',2.00,'Offer is valid until stock lasts. Limited to one use per customer.',1,'Makeup'),(6,'Buy 3 Get Free Gift','Buy 2 Get Free Gift','Buy 2 Get Free Gift',2.00,'Offer is valid until stock lasts. Limited to one use per customer.',1,'Skin Care'),(7,'Buy 2 Get Free Gift','Buy 2 Get Free Gift','Buy 2 Get Free Gift',2.00,'Offer is valid until stock lasts. Limited to one use per customer.',1,'Skin Care'),(8,'Flat 10 % off','Buy 2 Get Free Gift','flat',2.00,'Offer is valid until stock lasts. Limited to one use per customer.',1,'Skin Care');
/*!40000 ALTER TABLE `offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OrderItems`
--

DROP TABLE IF EXISTS `OrderItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OrderItems` (
  `orderItemId` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `orderId` varchar(255) NOT NULL,
  `product_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`orderItemId`),
  KEY `orderId` (`orderId`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `orderitems_ibfk_863` FOREIGN KEY (`orderId`) REFERENCES `Orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orderitems_ibfk_864` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OrderItems`
--

LOCK TABLES `OrderItems` WRITE;
/*!40000 ALTER TABLE `OrderItems` DISABLE KEYS */;
INSERT INTO `OrderItems` VALUES (16,1,160.00,'AVIK-96838-143492',32,'2023-11-21 05:19:09','2023-11-21 05:19:09'),(20,1,160.00,'AVIK-80294-153239',32,'2023-11-25 09:54:03','2023-11-25 09:54:03'),(23,1,139.50,'AVIK-85364-541240',42,'2023-11-25 10:37:34','2023-11-25 10:37:34'),(24,1,139.50,'AVIK-38551-857380',42,'2023-11-25 11:23:47','2023-11-25 11:23:47'),(25,1,139.50,'AVIK-61745-19677',42,'2023-11-25 11:28:51','2023-11-25 11:28:51'),(26,1,139.50,'AVIK-65931-62643',42,'2023-11-27 04:04:56','2023-11-27 04:04:56'),(27,1,229.50,'AVIK-65931-62643',43,'2023-11-27 04:04:56','2023-11-27 04:04:56'),(28,1,139.50,'AVIK-38128-598733',42,'2023-11-27 05:35:12','2023-11-27 05:35:12'),(29,1,229.50,'AVIK-38128-598733',43,'2023-11-27 05:35:12','2023-11-27 05:35:12'),(30,1,139.50,'AVIK-27612-615226',42,'2023-11-27 06:16:14','2023-11-27 06:16:14'),(31,1,229.50,'AVIK-27612-615226',43,'2023-11-27 06:16:14','2023-11-27 06:16:14'),(32,1,139.50,'AVIK-19099-530354',42,'2023-11-27 06:21:08','2023-11-27 06:21:08'),(33,1,229.50,'AVIK-19099-530354',43,'2023-11-27 06:21:08','2023-11-27 06:21:08'),(34,1,139.50,'AVIK-12797-10324',42,'2023-11-27 06:22:39','2023-11-27 06:22:39'),(35,1,229.50,'AVIK-12797-10324',43,'2023-11-27 06:22:39','2023-11-27 06:22:39');
/*!40000 ALTER TABLE `OrderItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Orders` (
  `order_id` varchar(255) NOT NULL,
  `CustomerAddress` json NOT NULL,
  `PaymentMethod` varchar(50) NOT NULL,
  `TransactionID` varchar(100) NOT NULL,
  `PaymentStatus` varchar(20) NOT NULL,
  `OrderStatus` varchar(20) NOT NULL,
  `ShippingCost` decimal(10,2) NOT NULL,
  `TrackingNumber` varchar(50) NOT NULL,
  `ExpectedDeliveryDate` datetime NOT NULL,
  `OrderDate` datetime NOT NULL,
  `TotalAmount` decimal(10,2) NOT NULL,
  `DiscountAmount` decimal(10,2) DEFAULT NULL,
  `user_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `registrationUserId` int DEFAULT NULL,
  `shipped` tinyint(1) DEFAULT '0',
  `delivered` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  KEY `registrationUserId` (`registrationUserId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `registration` (`user_id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`registrationUserId`) REFERENCES `registration` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
INSERT INTO `Orders` VALUES ('AVIK-12797-10324','{\"city\": \"jehanabad\", \"state\": \"bihar\", \"address\": \"jehanabad,bihar\", \"pincode\": 804408, \"user_id\": 1, \"landmark\": \"front of shiv mandir\", \"createdAt\": \"2023-10-26T05:55:07.000Z\", \"updatedAt\": \"2023-10-26T05:55:07.000Z\", \"address_type\": \"office\", \"addresses_id\": 7, \"contact_name\": \"Diwakar kumar\", \"contact_number\": 8800212384, \"house_flat_office_no\": \"106\"}','CREDIT_CARD','T2311271151580695226690','COMPLETED','confirmed',0.00,'4567894321','2023-12-04 06:22:39','2023-12-04 06:22:39',369.00,41.00,1,'2023-11-27 06:22:39','2023-11-27 06:22:39',NULL,0,0),('AVIK-19099-530354','{\"city\": \"jehanabad\", \"state\": \"bihar\", \"address\": \"jehanabad,bihar\", \"pincode\": 804408, \"user_id\": 1, \"landmark\": \"front of shiv mandir\", \"createdAt\": \"2023-10-26T05:55:07.000Z\", \"updatedAt\": \"2023-10-26T05:55:07.000Z\", \"address_type\": \"office\", \"addresses_id\": 7, \"contact_name\": \"Diwakar kumar\", \"contact_number\": 8800212384, \"house_flat_office_no\": \"106\"}','CREDIT_CARD','T2311271150148285226176','COMPLETED','confirmed',0.00,'4567894321','2023-12-04 06:21:08','2023-12-04 06:21:08',369.00,41.00,1,'2023-11-27 06:21:08','2023-11-27 06:21:08',NULL,0,0),('AVIK-27612-615226','{\"city\": \"jehanabad\", \"state\": \"bihar\", \"address\": \"jehanabad,bihar\", \"pincode\": 804408, \"user_id\": 1, \"landmark\": \"front of shiv mandir\", \"createdAt\": \"2023-10-26T05:55:07.000Z\", \"updatedAt\": \"2023-10-26T05:55:07.000Z\", \"address_type\": \"office\", \"addresses_id\": 7, \"contact_name\": \"Diwakar kumar\", \"contact_number\": 8800212384, \"house_flat_office_no\": \"106\"}','CREDIT_CARD','T2311271145369975226853','COMPLETED','confirmed',0.00,'4567894321','2023-12-04 06:16:14','2023-12-04 06:16:14',369.00,41.00,1,'2023-11-27 06:16:14','2023-11-27 06:16:14',NULL,0,0),('AVIK-38128-598733','{\"city\": \"jehanabad\", \"state\": \"bihar\", \"address\": \"jehanabad,bihar\", \"pincode\": 804408, \"user_id\": 1, \"landmark\": \"front of shiv mandir\", \"createdAt\": \"2023-10-26T05:55:07.000Z\", \"updatedAt\": \"2023-10-26T05:55:07.000Z\", \"address_type\": \"office\", \"addresses_id\": 7, \"contact_name\": \"Diwakar kumar\", \"contact_number\": 8800212384, \"house_flat_office_no\": \"106\"}','CREDIT_CARD','T2311271104352055226902','COMPLETED','confirmed',0.00,'4567894321','2023-12-04 05:35:12','2023-12-04 05:35:12',369.00,41.00,1,'2023-11-27 05:35:12','2023-11-27 05:35:12',NULL,0,0),('AVIK-38551-857380','{\"city\": \"jehanabad\", \"state\": \"bihar\", \"address\": \"jehanabad,bihar\", \"pincode\": 804408, \"user_id\": 1, \"landmark\": \"front of shiv mandir\", \"createdAt\": \"2023-10-26T05:55:07.000Z\", \"updatedAt\": \"2023-10-26T05:55:07.000Z\", \"address_type\": \"office\", \"addresses_id\": 7, \"contact_name\": \"Diwakar kumar\", \"contact_number\": 8800212384, \"house_flat_office_no\": \"106\"}','CREDIT_CARD','T2311251653095585226850','COMPLETED','confirmed',0.00,'4567894321','2023-12-02 11:23:47','2023-12-02 11:23:47',139.50,15.50,1,'2023-11-25 11:23:47','2023-11-25 11:23:47',NULL,0,0),('AVIK-61745-19677','{\"city\": \"jehanabad\", \"state\": \"bihar\", \"address\": \"jehanabad,bihar\", \"pincode\": 804408, \"user_id\": 1, \"landmark\": \"front of shiv mandir\", \"createdAt\": \"2023-10-26T05:55:07.000Z\", \"updatedAt\": \"2023-10-26T05:55:07.000Z\", \"address_type\": \"office\", \"addresses_id\": 7, \"contact_name\": \"Diwakar kumar\", \"contact_number\": 8800212384, \"house_flat_office_no\": \"106\"}','CREDIT_CARD','T2311251658084045226280','COMPLETED','confirmed',0.00,'4567894321','2023-12-02 11:28:51','2023-12-02 11:28:51',139.50,15.50,1,'2023-11-25 11:28:51','2023-11-25 11:28:51',NULL,0,0),('AVIK-65931-62643','{\"city\": \"jehanabad\", \"state\": \"bihar\", \"address\": \"jehanabad,bihar\", \"pincode\": 804408, \"user_id\": 1, \"landmark\": \"front of shiv mandir\", \"createdAt\": \"2023-10-26T05:55:07.000Z\", \"updatedAt\": \"2023-10-26T05:55:07.000Z\", \"address_type\": \"office\", \"addresses_id\": 7, \"contact_name\": \"Diwakar kumar\", \"contact_number\": 8800212384, \"house_flat_office_no\": \"106\"}','CREDIT_CARD','T2311270934056375226759','COMPLETED','confirmed',0.00,'4567894321','2023-12-04 04:04:56','2023-12-04 04:04:56',369.00,41.00,1,'2023-11-27 04:04:56','2023-11-27 04:04:56',NULL,0,0),('AVIK-80294-153239','{\"city\": \"jehanabad\", \"state\": \"bihar\", \"address\": \"jehanabad,bihar\", \"pincode\": 804408, \"user_id\": 1, \"landmark\": \"front of shiv mandir\", \"createdAt\": \"2023-10-26T05:55:07.000Z\", \"updatedAt\": \"2023-10-26T05:55:07.000Z\", \"address_type\": \"office\", \"addresses_id\": 7, \"contact_name\": \"Diwakar kumar\", \"contact_number\": 8800212384, \"house_flat_office_no\": \"106\"}','upi','ph12356748','confirmed','confirmed',0.00,'4567894321','2023-12-02 09:54:03','2023-12-02 09:54:03',160.00,40.00,1,'2023-11-25 09:54:03','2023-11-25 09:54:03',NULL,0,0),('AVIK-85364-541240','{\"city\": \"jehanabad\", \"state\": \"bihar\", \"address\": \"jehanabad,bihar\", \"pincode\": 804408, \"user_id\": 1, \"landmark\": \"front of shiv mandir\", \"createdAt\": \"2023-10-26T05:55:07.000Z\", \"updatedAt\": \"2023-10-26T05:55:07.000Z\", \"address_type\": \"office\", \"addresses_id\": 7, \"contact_name\": \"Diwakar kumar\", \"contact_number\": 8800212384, \"house_flat_office_no\": \"106\"}','CREDIT_CARD','T2311251606577735226074','COMPLETED','confirmed',0.00,'4567894321','2023-12-02 10:37:34','2023-12-02 10:37:34',139.50,15.50,1,'2023-11-25 10:37:34','2023-11-25 10:37:34',NULL,0,0),('AVIK-96838-143492','{\"city\": \"jehanabad\", \"state\": \"bihar\", \"address\": \"jehanabad,bihar\", \"pincode\": 804408, \"user_id\": 1, \"landmark\": \"front of shiv mandir\", \"createdAt\": \"2023-10-26T05:55:07.000Z\", \"updatedAt\": \"2023-10-26T05:55:07.000Z\", \"address_type\": \"office\", \"addresses_id\": 7, \"contact_name\": \"Diwakar kumar\", \"contact_number\": 8800212384, \"house_flat_office_no\": \"106\"}','upi','ph12356748','confirmed','confirmed',0.00,'4567894321','2023-11-28 05:19:09','2023-11-28 05:19:09',160.00,40.00,1,'2023-11-21 05:19:09','2023-11-21 05:19:09',NULL,0,0);
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_offer`
--

DROP TABLE IF EXISTS `product_offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_offer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int NOT NULL,
  `offerId` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_offer`
--

LOCK TABLES `product_offer` WRITE;
/*!40000 ALTER TABLE `product_offer` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ProductOffer`
--

DROP TABLE IF EXISTS `ProductOffer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProductOffer` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `offerId` int NOT NULL,
  `productId` int NOT NULL,
  PRIMARY KEY (`offerId`,`productId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ProductOffer`
--

LOCK TABLES `ProductOffer` WRITE;
/*!40000 ALTER TABLE `ProductOffer` DISABLE KEYS */;
INSERT INTO `ProductOffer` VALUES ('2023-11-04 10:00:00','2023-11-04 10:00:00',2,41),('2023-11-04 10:05:16','2023-11-04 10:05:16',3,41),('2023-11-06 07:16:36','2023-11-06 07:16:36',4,12),('2023-11-06 07:18:22','2023-11-06 07:18:22',5,13),('2023-11-06 09:28:36','2023-11-06 09:28:36',6,42),('2023-11-06 09:29:36','2023-11-06 09:29:36',7,43),('2023-11-06 09:30:22','2023-11-06 09:30:22',8,43);
/*!40000 ALTER TABLE `ProductOffer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_categories` varchar(255) NOT NULL,
  `brand_id` int NOT NULL,
  `product_title` varchar(255) NOT NULL,
  `product_description` text NOT NULL,
  `product_price` int NOT NULL,
  `product_thumnail_img` varchar(255) NOT NULL,
  `product_ad` tinyint(1) NOT NULL,
  `count_in_stock` int NOT NULL DEFAULT '0',
  `offer` varchar(255) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `discount` float DEFAULT NULL,
  `ideal_for` json DEFAULT NULL,
  `product_work_for` json DEFAULT NULL,
  `highlights` varchar(255) DEFAULT NULL,
  `product_expiry_date` varchar(255) NOT NULL,
  `place` varchar(255) DEFAULT NULL,
  `categories_id` int DEFAULT NULL,
  `subCategories_id` int DEFAULT NULL,
  `product_detail_allimage` json NOT NULL,
  `product_color` json DEFAULT NULL,
  `product_quantity` json DEFAULT NULL,
  `seller_id` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `brand_id` (`brand_id`),
  KEY `categories_id` (`categories_id`),
  KEY `subCategories_id` (`subCategories_id`),
  CONSTRAINT `products_ibfk_2413` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`) ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_2414` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`categories_id`),
  CONSTRAINT `products_ibfk_2415` FOREIGN KEY (`subCategories_id`) REFERENCES `subCategories` (`subCategories_id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (12,'JOVEES','makeup',19,'JOVEES product','L\'oreal Professionnel xtenso care Sulfate-free Shampoo for all hair types. Gently cleanses, controls frizz, and adds shine with keratin Repair (250ml)',500,'uploads/productthumbnail/1695209152068-lakemeimg.png',0,10,'4',4,'2023-09-20 11:25:52','2023-09-20 11:25:52',30,'[{\"ideal_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"ideal_for_title\": \"Hair Repair\"}]',NULL,'Sulfate-free shampoo for gentle cleansing, frizz control, and shine without sulfate surfactants','31 May 2026',NULL,NULL,NULL,'null','null','null',NULL),(13,'JOVEES','makeup',19,'JOVEES product','JOVEES product is very nice',500,'uploads/productthumbnail/1695209154228-lakemeimg.png',0,10,'4',4,'2023-09-20 11:25:54','2023-09-20 11:25:54',30,'[{\"ideal_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"ideal_for_title\": \"Week Hair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"work_for_title\": \"Frizz Control\"}]','Sulfate-free shampoo for gentle cleansing, frizz control, and shine without sulfate surfactants','31 JUN 2024',NULL,NULL,NULL,'null','null','null',NULL),(14,'JOVEES','makeup',19,'JOVEES product','JOVEES product is very nice',500,'uploads/productthumbnail/1695209154862-lakemeimg.png',0,10,'4',4,'2023-09-20 11:25:54','2023-09-20 11:25:54',30,'[{\"ideal_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"ideal_for_title\": \"Week Hair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"work_for_title\": \"Frizz Control\"}]','Sulfate-free shampoo for gentle cleansing, frizz control, and shine without sulfate surfactants','31 JUN 2027',NULL,NULL,NULL,'null','null','null',NULL),(17,'vitanmin c face wash','makeup',1,'mamaearth vitanmin c face wash','mamaearth vitanmin cface wash',259,'uploads/productthumbnail/1695280247110-mamaearth2.png',0,10,'4',4,'2023-09-21 07:10:47','2023-09-21 07:10:47',8,'[{\"ideal_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"ideal_for_title\": \"Week Hair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"work_for_title\": \"Frizz Control\"}]','Sulfate-free shampoo for gentle cleansing, frizz control, and shine without sulfate surfactants','31 Jan 2026',NULL,NULL,NULL,'null','null','null',NULL),(18,'ubtan face wash','makeup',1,'mamaearth ubtan face wash','mamaearth ubtan face wash',259,'uploads/productthumbnail/1695280295951-mamaearth.png',0,10,'4',4,'2023-09-21 07:11:35','2023-09-21 07:11:35',8,NULL,NULL,NULL,'default_value',NULL,NULL,NULL,'null','null','null',NULL),(19,'Eyeconic','makeup',12,'Lakeme Eyeconic insta cool','Lakeme Eyeconic insta cool',250,'uploads/productthumbnail/1695291367085-lakemeimage.png',0,10,'4',4,'2023-09-21 10:16:07','2023-09-21 10:16:07',40,NULL,NULL,NULL,'default_value',NULL,NULL,NULL,'null','null','null',NULL),(20,'Lakeme lumi','fash wash',12,'Lakeme lumi skin','Lakeme lumi skin',299,'uploads/productthumbnail/1695291501382-lakemeimage2.png',0,10,'4',4,'2023-09-21 10:18:21','2023-09-21 10:18:21',42,'[{\"ideal_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"ideal_for_title\": \"Week Hair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"work_for_title\": \"Frizz Control\"}]','Sulfate-free shampoo for gentle cleansing, frizz control, and shine without sulfate surfactants','31 JUN 2024',NULL,NULL,NULL,'null','null','null',NULL),(21,'Lakeme lumi','fash wash',12,'Lakeme lumi skin','Lakeme lumi skin',299,'uploads/productthumbnail/1695719723633-lakemeimg.png',0,10,'4',4,'2023-09-26 09:15:23','2023-09-26 09:15:23',42,NULL,NULL,NULL,'default_value',NULL,NULL,NULL,'null','null','null',NULL),(22,'Lakeme lumi','fash wash',12,'Lakeme lumi skin','Lakeme lumi skin',299,'uploads/productthumbnail/1695720041195-lakemeimg.png',0,10,'4',4,'2023-09-26 09:20:41','2023-09-26 09:20:41',6,NULL,NULL,NULL,'default_value',NULL,NULL,NULL,'null','null','null',NULL),(23,'Lakeme lumi','fash wash',12,'Lakeme lumi skin','Lakeme lumi skin',299,'uploads/productthumbnail/1695720165376-lakemeimg.png',0,10,'4',4,'2023-09-26 09:22:45','2023-09-26 09:22:45',6,NULL,NULL,NULL,'default_value',NULL,NULL,NULL,'null','null','null',NULL),(24,'Lakeme lumi','fash wash',12,'Lakeme lumi skin','Lakeme lumi skin',299,'uploads/productthumbnail/1695720291720-lakemeimg.png',0,10,'4',4,'2023-09-26 09:24:51','2023-09-26 09:24:51',6,NULL,NULL,NULL,'default_value',NULL,NULL,NULL,'null','null','null',NULL),(25,'Lakeme lumi','fash wash',12,'Lakeme lumi skin','Lakeme lumi skin',299,'uploads/productthumbnail/1695720395827-lakemeimg.png',0,10,'4',4,'2023-09-26 09:26:35','2023-09-26 09:26:35',6,'[{\"ideal_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"ideal_for_title\": \"Week Hair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"work_for_title\": \"Frizz Control\"}]','Sulfate-free shampoo for gentle cleansing, frizz control, and shine without sulfate surfactants','31 JUN 2024',NULL,NULL,NULL,'null','null','null',NULL),(26,'Lakeme lumi','fash wash',12,'Lakeme lumi skin','Lakeme lumi skin',299,'uploads/productthumbnail/1695721538939-lakemeimg.png',0,10,'4',4,'2023-09-26 09:45:38','2023-09-26 09:45:38',6,'[{\"ideal_for_img\": \"logo1\", \"ideal_for_title\": \"Hair Repair\"}]',NULL,NULL,'default_value',NULL,NULL,NULL,'null','null','null',NULL),(27,'Lakeme lumi','fash wash',12,'Lakeme lumi skin','Lakeme lumi skin',299,'uploads/productthumbnail/1695722805296-lakemeimg.png',0,10,'4',4,'2023-09-26 10:06:45','2023-09-26 10:06:45',6,'[{\"ideal_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"ideal_for_title\": \"Week Hair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"work_for_title\": \"Frizz Control\"}]','Sulfate-free shampoo for gentle cleansing, frizz control, and shine without sulfate surfactants','31 JUN 2024',NULL,NULL,NULL,'null','null','null',NULL),(28,'Lakeme lumi','fash wash',12,'Lakeme lumi skin','Lakeme lumi skin',299,'uploads/productthumbnail/1695723383952-lakemeimg.png',0,10,'4',4,'2023-09-26 10:16:23','2023-09-26 10:16:23',6,'[]',NULL,NULL,'default_value',NULL,NULL,NULL,'null','null','null',NULL),(29,'Lakeme lumi','fash wash',12,'Lakeme lumi skin','Lakeme lumi skin',299,'uploads/productthumbnail/1695723462372-lakemeimg.png',0,10,'4',4,'2023-09-26 10:17:42','2023-09-26 10:17:42',6,'[{\"ideal_for_img\": \"uploads/productthumbnail/1695723462372-hair.jpeg\", \"ideal_for_title\": \"Hair Repair\"}]',NULL,NULL,'default_value',NULL,NULL,NULL,'null','null','null',NULL),(30,'Lakeme lumi','fash wash',12,'Lakeme lumi skin','Lakeme lumi skin',299,'uploads/productthumbnail/1695889844501-lakemeimg.png',0,10,'4',4,'2023-09-28 08:30:44','2023-09-28 08:30:44',6,'[{\"ideal_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"ideal_for_title\": \"Hair Repair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1695889844502-hair.jpeg\", \"work_for_title\": \"week Hair\"}]','Sulfate-free shampoo for gentle cleansing , frizz control and shine without sulfate surfactants','31 may 2025',NULL,NULL,NULL,'null','null','null',NULL),(31,'JOVEES','fash wash',12,'Lakeme lumi skin','Lakeme lumi skin',200,'uploads/productthumbnail/1695901265381-lakemeimage.png',0,10,'2',3,'2023-09-28 11:41:05','2023-09-28 11:41:05',20,'[{\"ideal_for_img\": \"uploads/productthumbnail/1695901265382-hair.jpeg\", \"ideal_for_title\": \"Hair Repair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1695901265382-hair.jpeg\", \"work_for_title\": \"Hair Repair\"}]','Sulfate-free shampoo for gentle cleansing , frizz control and shine without sulfate surfactants','23-jun-2024',NULL,NULL,NULL,'null','null','null',NULL),(32,'JOVEES','Face Wash',12,'Lakeme lumi skin','Lakeme lumi skin',200,'uploads/productthumbnail/1695901601889-lakemeimage.png',0,10,'2',3,'2023-09-28 11:46:41','2023-09-28 11:46:41',20,'[{\"ideal_for_img\": \"uploads/productthumbnail/1695901601891-hair.jpeg\", \"ideal_for_title\": \"Hair Repair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1695901601892-hair.jpeg\", \"work_for_title\": \"Hair Repair\"}]','Sulfate-free shampoo for gentle cleansing , frizz control and shine without sulfate surfactants','23-jun-2024',NULL,NULL,NULL,'null','null','null',NULL),(33,'JOVEES','Face Wash',12,'Lakeme lumi skin','Lakeme lumi skin',200,'uploads/productthumbnail/undefined',0,10,'2',3,'2023-09-29 03:57:51','2023-09-29 03:57:51',20,'[{\"ideal_for_img\": \"uploads/productthumbnail/1695959871016-hair.jpeg\", \"ideal_for_title\": \"Hair Repair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1695959871016-hair.jpeg\", \"work_for_title\": \"Hair Repair\"}]','Sulfate-free shampoo for gentle cleansing , frizz control and shine without sulfate surfactants','23-jun-2024',NULL,NULL,NULL,'null','null','null',NULL),(34,' Purplle True Jewel 24K Gold Primer | Matte | Oil Control | Shine Control | Long Lasting | Lightweight | Pore Minimising | Dermatologically Tested - (20 ml) ','Primer',12,' Purplle True Jewel 24K Gold Primer | Matte | Oil Control | Shine Control | Long Lasting | Lightweight | Pore Minimising | Dermatologically Tested - (20 ml) ',' Purplle True Jewel 24K Gold Primer | Matte | Oil Control | Shine Control | Long Lasting | Lightweight | Pore Minimising | Dermatologically Tested - (20 ml) ',308,'uploads/productthumbnail/1696696790139-primer.png',0,10,'1',1,'2023-10-07 16:39:50','2023-10-07 16:39:50',35,'[{\"ideal_for_img\": \"uploads/productthumbnail/1696696790223-hair.jpeg\", \"ideal_for_title\": \"Hair Repair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1696696790258-hair.jpeg\", \"work_for_title\": \"week Hair\"}]','Sulfate-free shampoo for gentle cleansing , frizz control and shine without sulfate surfactants','31 may 2026',NULL,NULL,NULL,'null','null','null',NULL),(35,' Purplle True Jewel 24K Gold Primer | Matte | Oil Control | Shine Control | Long Lasting | Lightweight | Pore Minimising | Dermatologically Tested - (20 ml) ','Primer',12,' Purplle True Jewel 24K Gold Primer | Matte | Oil Control | Shine Control | Long Lasting | Lightweight | Pore Minimising | Dermatologically Tested - (20 ml) ',' Purplle True Jewel 24K Gold Primer |',300,'uploads/productthumbnail/1696704372789-primer.png',0,10,'1',1,'2023-10-07 18:46:12','2023-10-07 18:46:12',35,'[{\"ideal_for_img\": \"uploads/productthumbnail/1696704372790-hair.jpeg\", \"ideal_for_title\": \"Hair Repair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1696704372790-hair.jpeg\", \"work_for_title\": \"week Hair\"}]','Sulfate-free shampoo for gentle cleansing , frizz control and shine without sulfate surfactants','31 may 2026',NULL,NULL,NULL,'null','null','null',NULL),(36,' Lakme Absolute Blur Perfect Makeup Primer, ','Primer',12,' Lakme Absolute Blur Perfect Makeup Primer, 10 g ',' Lakme Absolute Blur Perfect Makeup Primer, 10 g ',164,'uploads/productthumbnail/1696708742168-lakme-absolute-blur-perfect-makeup-primer.png',0,10,'1',1,'2023-10-07 19:59:02','2023-10-07 19:59:02',45,'[{\"ideal_for_img\": \"uploads/productthumbnail/1696708742169-hair.jpeg\", \"ideal_for_title\": \"Hair Repair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1696708742169-hair.jpeg\", \"work_for_title\": \"week Hair\"}]','Sulfate-free shampoo for gentle cleansing , frizz control and shine without sulfate surfactants','31 may 2026',NULL,NULL,NULL,'null','null','null',NULL),(37,' Lakme  ','Lipstick',12,'Lakme Absolute Blur Perfect Makeup Primer, 10 g','Lakme Absolute Blur Perfect Makeup Primer, 10 g',164,'uploads/productthumbnail/1697626261577-lakme-.png',0,10,'1',1,'2023-10-18 10:51:01','2023-10-18 10:51:01',45,'[{\"ideal_for_img\": \"uploads/productthumbnail/1697626261579-hair.jpeg\", \"ideal_for_title\": \"Hair Repair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1697626261579-hair.jpeg\", \"work_for_title\": \"week Hair\"}]','Sulfate-free shampoo for gentle cleansing , frizz control and shine without sulfate surfactants','31 may 2026','Feature',NULL,NULL,'null','null','null',NULL),(41,'Lakme','Lipstick',12,'Lakme Absolute Blur ','Lakme Absolute Blur Perfect Makeup Primer, 10 g',264,'uploads/productthumbnail/1698825420425-lakme-.png',0,10,'1',1,'2023-11-01 07:57:00','2023-11-01 07:57:00',25,'[{\"ideal_for_img\": \"uploads/productthumbnail/1698825420426-hair.jpeg\", \"ideal_for_title\": \"Hair Repair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1698825420426-hair.jpeg\", \"work_for_title\": \"week Hair\"}]','Sulfate-free shampoo for gentle cleansing , frizz control and shine without sulfate surfactants','31 may 2026','Feature',1,3,'null','null','null',NULL),(42,'Hydrating Fash wash','Face Wash',12,'Lakme Blush & Glow Strawberry Face Wash 100 g','Lakme Blush & Glow Strawberry Face Wash 100 g',155,'uploads/productthumbnail/1699262512635-lakmefeature.png',0,10,'1',1,'2023-11-06 09:21:52','2023-11-06 09:21:52',10,'[{\"ideal_for_img\": \"uploads/productthumbnail/1699262512636-hair.jpeg\", \"ideal_for_title\": \"Tanned Skin\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1699262512636-hair.jpeg\", \"work_for_title\": \"Enhances Skin Tone\"}]','Want skin that glows all day? Then you got to try Lakme Blush And Glow Facewash. It is infused with Vitamin C Serum and packed with 100% real fruits extracts which together help reduces dullness, ','31 may 2026','Featured',2,10,'null','null','null',NULL),(43,'ubtan Fash wash','Face Wash',1,'Mamaearth Ubtan Natural Face Wash For All skin type With Turmeric & Saffron For Tan Removal And Skin Brightning (100 ml)','Mamaearth Ubtan Natural Face Wash For All skin type With Turmeric & Saffron For Tan Removal And Skin Brightning (100 ml)',255,'uploads/productthumbnail/1699262651402-ubtanfashwash.png',0,10,'1',1,'2023-11-06 09:24:11','2023-11-06 09:24:11',10,'[{\"ideal_for_img\": \"uploads/productthumbnail/1699262651403-hair.jpeg\", \"ideal_for_title\": \"Tanned Skin\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1699262651403-hair.jpeg\", \"work_for_title\": \"Enhances Skin Tone\"}]','Hi! I am Mamaearth\'s SLS and Paraben free Ubtan Face Wash for removing skin tan and giving you farer skin. ','31 may 2026','Featured',2,10,'null','null','null',NULL),(44,'JOVEES','fash wash',12,'Lakeme lumi skin','Lakeme lumi skin',200,'uploads/productthumbnail/1699506518777-mamaearthcrousal.png',0,10,'2',3,'2023-11-09 05:08:38','2023-11-09 05:08:38',20,'[{\"ideal_for_img\": \"uploads/productthumbnail/1699506518777-plumhome.png\", \"ideal_for_title\": \"Hair Repair\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1699506518779-plumhome.png\", \"work_for_title\": \"Hair Repair\"}]','Sulfate-free shampoo for gentle cleansing , frizz control and shine without sulfate surfactants','23-jun-2024','featured',1,3,'[\"uploads/productthumbnail/1699506518781-mamaearthbrand.png\", \"uploads/productthumbnail/1699506518782-mamaearthcrousal.png\", \"uploads/productthumbnail/1699506518782-maybellinehome.png\", \"uploads/productthumbnail/1699506518783-nybae.png\"]','null','null',NULL),(45,'Mama earth face wash','fash wash',12,'Mamaearth Ubtan Natural Face Wash For all Skin Type with Turmeric & Saffron for Tan Removal (150 ml)','Mamaearth Ubtan Natural Face Wash For all Skin Type with Turmeric & Saffron for Tan Removal (150 ml)',233,'uploads/productthumbnail/1699594131856-mamaearth1.png',0,10,'2',3,'2023-11-10 05:28:51','2023-11-10 05:28:51',20,'[{\"ideal_for_img\": \"uploads/productthumbnail/1699594131857-plumhome.png\", \"ideal_for_title\": \"using for face wash\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1699594131857-plumhome.png\", \"work_for_title\": \"dark removal\"}]','Mamaearth Ubtan Natural Face Wash For all Skin Type with Turmeric & Saffron for Tan Removal (150 ml)','23-jun-2024','COMBO DEALS',2,10,'[\"uploads/productthumbnail/1699594131858-mamaearth1.png\", \"uploads/productthumbnail/1699594131859-mamaearth2.png\", \"uploads/productthumbnail/1699594131859-mamaearth3.png\", \"uploads/productthumbnail/1699594131859-mamaearth4.png\"]',NULL,NULL,NULL),(46,'fash wash','clifffrr',12,'fash wash','fash wash',120,'uploads/productthumbnail/1701358008027-50% off.jpg',0,0,NULL,NULL,'2023-11-30 15:26:48','2023-11-30 15:26:48',20,'[{\"ideal_for_img\": \"uploads/productthumbnail/1701358008026-hair.jpeg\", \"ideal_for_title\": \"fash wash\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1701358008026-hair.jpeg\", \"work_for_title\": \"fash wash\"}]','fash wash','20/3/2024','featured',4,2,'[\"uploads/productthumbnail/1701358008122-combo.jpg\", \"uploads/productthumbnail/1701358008199-deal of the day.jpg\"]','\"\"','\"\"',NULL),(47,'Lakme Lumi','primer',12,'Lakme Lumi Tint Gold 60gm','Lakme Lumi Tint Gold 60gm',120,'uploads/productthumbnail/1701417976297-lakemethumb.png',0,0,NULL,NULL,'2023-12-01 08:06:16','2023-12-01 08:06:16',10,'[{\"ideal_for_img\": \"uploads/productthumbnail/1701417976296-hair.jpeg\", \"ideal_for_title\": \"Lakme Lumi\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1701417976296-hair.jpeg\", \"work_for_title\": \"Lakme Lumi\"}]','Lakme Lumi Tint Gold 60gm','20/3/2024','featured',1,1,'[\"uploads/productthumbnail/1701417976297-lakeme1.png\", \"uploads/productthumbnail/1701417976297-lakeme2.png\", \"uploads/productthumbnail/1701417976298-lakeme3.png\"]','\"\"','\"\"',NULL),(48,'Lakme Lumi Tint Gold 60gm','primer',12,'Lakme Lumi Tint Gold 60gm','Lakme Lumi Tint Gold 60gm',120,'uploads/productthumbnail/1701758770785-lakeme1.png',0,0,NULL,NULL,'2023-12-05 06:46:10','2023-12-05 06:46:10',10,'[{\"ideal_for_img\": \"uploads/productthumbnail/1701758770784-hair.jpeg\", \"ideal_for_title\": \"fash wash\"}]','[{\"work_for_img\": \"uploads/productthumbnail/1701758770785-hair.jpeg\", \"work_for_title\": \"fash wash\"}]','Lakme Lumi Tint Gold 60gm','20/3/2024','feature',1,1,'[\"uploads/productthumbnail/1701758770785-lakeme1.png\", \"uploads/productthumbnail/1701758770786-lakeme2.png\", \"uploads/productthumbnail/1701758770787-lakeme3.png\"]','\"\"','\"\"',3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productsImages`
--

DROP TABLE IF EXISTS `productsImages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productsImages` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `image_description` text NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `isPrimary` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`image_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `productsimages_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productsImages`
--

LOCK TABLES `productsImages` WRITE;
/*!40000 ALTER TABLE `productsImages` DISABLE KEYS */;
/*!40000 ALTER TABLE `productsImages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quantities`
--

DROP TABLE IF EXISTS `quantities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quantities` (
  `quantity_id` int NOT NULL AUTO_INCREMENT,
  `quantity_value` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`quantity_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quantities`
--

LOCK TABLES `quantities` WRITE;
/*!40000 ALTER TABLE `quantities` DISABLE KEYS */;
INSERT INTO `quantities` VALUES (1,'100 g','2023-11-09 08:30:38','2023-11-09 08:30:38');
/*!40000 ALTER TABLE `quantities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT 'GUEST',
  `mobile_num` varchar(255) NOT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `mobile_num` (`mobile_num`),
  UNIQUE KEY `mobile_num_2` (`mobile_num`),
  UNIQUE KEY `mobile_num_3` (`mobile_num`),
  UNIQUE KEY `mobile_num_4` (`mobile_num`),
  UNIQUE KEY `mobile_num_5` (`mobile_num`),
  UNIQUE KEY `mobile_num_6` (`mobile_num`),
  UNIQUE KEY `mobile_num_7` (`mobile_num`),
  UNIQUE KEY `mobile_num_8` (`mobile_num`),
  UNIQUE KEY `mobile_num_9` (`mobile_num`),
  UNIQUE KEY `mobile_num_10` (`mobile_num`),
  UNIQUE KEY `mobile_num_11` (`mobile_num`),
  UNIQUE KEY `mobile_num_12` (`mobile_num`),
  UNIQUE KEY `mobile_num_13` (`mobile_num`),
  UNIQUE KEY `mobile_num_14` (`mobile_num`),
  UNIQUE KEY `mobile_num_15` (`mobile_num`),
  UNIQUE KEY `mobile_num_16` (`mobile_num`),
  UNIQUE KEY `mobile_num_17` (`mobile_num`),
  UNIQUE KEY `mobile_num_18` (`mobile_num`),
  UNIQUE KEY `mobile_num_19` (`mobile_num`),
  UNIQUE KEY `mobile_num_20` (`mobile_num`),
  UNIQUE KEY `mobile_num_21` (`mobile_num`),
  UNIQUE KEY `mobile_num_22` (`mobile_num`),
  UNIQUE KEY `mobile_num_23` (`mobile_num`),
  UNIQUE KEY `mobile_num_24` (`mobile_num`),
  UNIQUE KEY `mobile_num_25` (`mobile_num`),
  UNIQUE KEY `mobile_num_26` (`mobile_num`),
  UNIQUE KEY `mobile_num_27` (`mobile_num`),
  UNIQUE KEY `mobile_num_28` (`mobile_num`),
  UNIQUE KEY `mobile_num_29` (`mobile_num`),
  UNIQUE KEY `mobile_num_30` (`mobile_num`),
  UNIQUE KEY `mobile_num_31` (`mobile_num`),
  UNIQUE KEY `mobile_num_32` (`mobile_num`),
  UNIQUE KEY `mobile_num_33` (`mobile_num`),
  UNIQUE KEY `mobile_num_34` (`mobile_num`),
  UNIQUE KEY `mobile_num_35` (`mobile_num`),
  UNIQUE KEY `mobile_num_36` (`mobile_num`),
  UNIQUE KEY `mobile_num_37` (`mobile_num`),
  UNIQUE KEY `mobile_num_38` (`mobile_num`),
  UNIQUE KEY `mobile_num_39` (`mobile_num`),
  UNIQUE KEY `mobile_num_40` (`mobile_num`),
  UNIQUE KEY `mobile_num_41` (`mobile_num`),
  UNIQUE KEY `mobile_num_42` (`mobile_num`),
  UNIQUE KEY `mobile_num_43` (`mobile_num`),
  UNIQUE KEY `mobile_num_44` (`mobile_num`),
  UNIQUE KEY `mobile_num_45` (`mobile_num`),
  UNIQUE KEY `mobile_num_46` (`mobile_num`),
  UNIQUE KEY `mobile_num_47` (`mobile_num`),
  UNIQUE KEY `mobile_num_48` (`mobile_num`),
  UNIQUE KEY `mobile_num_49` (`mobile_num`),
  UNIQUE KEY `mobile_num_50` (`mobile_num`),
  UNIQUE KEY `mobile_num_51` (`mobile_num`),
  UNIQUE KEY `mobile_num_52` (`mobile_num`),
  UNIQUE KEY `mobile_num_53` (`mobile_num`),
  UNIQUE KEY `mobile_num_54` (`mobile_num`),
  UNIQUE KEY `mobile_num_55` (`mobile_num`),
  UNIQUE KEY `mobile_num_56` (`mobile_num`),
  UNIQUE KEY `mobile_num_57` (`mobile_num`),
  UNIQUE KEY `mobile_num_58` (`mobile_num`),
  UNIQUE KEY `mobile_num_59` (`mobile_num`),
  UNIQUE KEY `mobile_num_60` (`mobile_num`),
  UNIQUE KEY `mobile_num_61` (`mobile_num`),
  UNIQUE KEY `mobile_num_62` (`mobile_num`),
  UNIQUE KEY `mobile_num_63` (`mobile_num`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (1,'Diwakar ','8800212384','diwakarkumar35@gmail.com','male','1900-01-10 00:00:00'),(2,'GUEST','8579821534',NULL,NULL,NULL),(5,'GUEST','9470746719',NULL,NULL,NULL);
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `user_id` int NOT NULL,
  `rating` float NOT NULL,
  `review_title` varchar(255) NOT NULL,
  `review_comment` varchar(255) NOT NULL,
  `review_img` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`review_id`),
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `review_ibfk_1639` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON UPDATE CASCADE,
  CONSTRAINT `review_ibfk_1640` FOREIGN KEY (`user_id`) REFERENCES `registration` (`user_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,12,1,3,'not good','this is a not good product','img','2023-09-29 11:03:48','2023-09-29 11:03:48'),(2,24,1,3,'not good','this is a not good product','img','2023-09-29 11:04:05','2023-09-29 11:04:05'),(3,12,2,4,'Nice product','this is a nice good product','img','2023-09-29 11:08:51','2023-09-29 11:08:51'),(4,13,1,4,'awesome product','nice product',NULL,'2023-10-05 08:53:28','2023-10-05 08:53:28'),(5,14,1,5,'Useful product','awesome product',NULL,'2023-10-05 08:59:11','2023-10-05 08:59:11'),(6,14,1,5,'Useful product','awesome product',NULL,'2023-10-05 08:59:17','2023-10-05 08:59:17'),(7,17,1,4,'nice product','nice',NULL,'2023-10-05 09:08:10','2023-10-05 09:08:10'),(8,18,1,3,'good product','this product i awesome',NULL,'2023-10-05 09:11:55','2023-10-05 09:11:55'),(9,18,1,3,'good product','this product i awesome',NULL,'2023-10-05 09:13:11','2023-10-05 09:13:11'),(10,18,1,3,'good product','this product i awesome',NULL,'2023-10-05 09:16:38','2023-10-05 09:16:38'),(11,18,1,3,'good product','this product i awesome',NULL,'2023-10-05 09:17:37','2023-10-05 09:17:37'),(12,18,1,3,'good product','this product i awesome',NULL,'2023-10-05 09:19:01','2023-10-05 09:19:01'),(13,18,1,3,'good product','this product i awesome',NULL,'2023-10-05 09:19:24','2023-10-05 09:19:24'),(14,17,1,4,'👍','good',NULL,'2023-10-05 09:20:21','2023-10-05 09:20:21'),(15,12,1,4,'👍','👍','file:///data/user/0/com.avvika/cache/rn_image_picker_lib_temp_6aa29b2a-fa73-45a4-b659-c42491475154.jpg','2023-10-05 16:54:11','2023-10-05 16:54:11'),(16,12,1,4,'good','goog','rn_image_picker_lib_temp_576de263-cbf2-403e-8b4d-34899d07b57a.jpg','2023-10-05 17:05:17','2023-10-05 17:05:17'),(17,12,1,5,'👍','👍','uploads/review_img/undefined','2023-10-05 18:04:50','2023-10-05 18:04:50'),(18,12,1,4,'good -d','nice','uploads/review_img/1696573123558-rn_image_picker_lib_temp_e2f15185-d641-4c1d-9ee4-0d5b6f1fdd69.jpg','2023-10-06 06:18:43','2023-10-06 06:18:43'),(19,12,1,4,'good -d','nice','uploads/review_img/1696573184254-rn_image_picker_lib_temp_e2f15185-d641-4c1d-9ee4-0d5b6f1fdd69.jpg','2023-10-06 06:19:44','2023-10-06 06:19:44'),(20,12,1,4,'g','g','uploads/review_img/1696574369488-rn_image_picker_lib_temp_cd3e8cae-3a26-44e0-9e02-bb480fc27b7b.jpg','2023-10-06 06:39:29','2023-10-06 06:39:29'),(21,13,1,4,'nice prdouct','awesome','uploads/review_img/1696574788776-rn_image_picker_lib_temp_e31bbf07-b683-4340-a746-dc95e8c7cef2.jpg','2023-10-06 06:46:28','2023-10-06 06:46:28'),(22,14,1,4,'good','good','uploads/review_img/1696575271510-rn_image_picker_lib_temp_56d5eefa-d787-4a71-adea-aaeb8011401e.jpg','2023-10-06 06:54:31','2023-10-06 06:54:31'),(23,34,1,4,'👍','👍','uploads/review_img/1696701001893-rn_image_picker_lib_temp_9ca7c7ec-c01a-4f44-a2cf-f60452d8c12f.jpg','2023-10-07 17:50:01','2023-10-07 17:50:01'),(24,34,1,4,'good','good','uploads/review_img/1696704020209-rn_image_picker_lib_temp_afd43cf8-df49-42f9-a0b2-a6bff3169acb.jpg','2023-10-07 18:40:20','2023-10-07 18:40:20'),(25,34,1,4,'good','good','uploads/review_img/1696998686942-rn_image_picker_lib_temp_ab640954-907c-45b3-9fb6-7d1de1c81c90.jpg','2023-10-11 04:31:26','2023-10-11 04:31:26'),(26,12,1,4,'hii','hhh','uploads/review_img/1697020989123-rn_image_picker_lib_temp_fe67f18a-75c2-48cc-8bef-71da82410054.jpg','2023-10-11 10:43:09','2023-10-11 10:43:09'),(27,12,1,4,'awesome 👍','good producr','uploads/review_img/1697275782913-rn_image_picker_lib_temp_78c8ee95-298c-46ab-af00-46effbbbfbc5.jpg','2023-10-14 09:29:42','2023-10-14 09:29:42'),(28,13,1,4,'ho','jo','uploads/review_img/1697712278243-rn_image_picker_lib_temp_1706f906-de51-4353-b894-f548cf75bd2f.jpg','2023-10-19 10:44:38','2023-10-19 10:44:38'),(29,42,1,5,'jytyr','fgd','uploads/review_img/1700221843478-rn_image_picker_lib_temp_a350baf0-7a62-419b-bc33-5b5cbd377f62.jpg','2023-11-17 11:50:43','2023-11-17 11:50:43'),(30,43,1,3,'as','sz','uploads/review_img/1700221906213-rn_image_picker_lib_temp_614afde8-4706-4b3d-8d27-27e69756723c.jpg','2023-11-17 11:51:46','2023-11-17 11:51:46'),(31,48,1,4,'good product','👍','uploads/review_img/1701934630102-rn_image_picker_lib_temp_f3afc1dc-1108-4590-be45-f1fe849ef1df.jpg','2023-12-07 07:37:10','2023-12-07 07:37:10');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seller` (
  `seller_id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) DEFAULT NULL,
  `brand_name` varchar(255) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `brand_usp` varchar(255) DEFAULT NULL,
  `marketplaces` varchar(255) DEFAULT NULL,
  `contact_name` varchar(255) DEFAULT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`seller_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller`
--

LOCK TABLES `seller` WRITE;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
INSERT INTO `seller` VALUES (1,'softgenics','testing','mishra74881@gmial.com','Makeup, Skin Care, Hair, Appliances, Fragrance, Men\'s Personal Care, Accessories','testing','Nykaa, Myntra, Amazon, Flipkart','568374658','873568','$2b$08$Ql/TealFS9havLYWbSEcUOb1sej3R6tqfmgqL/DF7NZZeR/u2AQfK',1),(2,'ragonline','kargo, lenin','mishra74881@gmail.com@gmail.com','Makeup, Skin Care, Hair, Accessories','no','Nykaa, Amazon','niraj','8709345226',NULL,0),(3,'flipcard','kargo','mishra74881@gmail.com','Makeup, Skin Care, Appliances','mama earth','Nykaa, Myntra, Amazon, Flipkart','Ayush','8709345226','$2b$08$hbFeCAO8mBW8jEyRad0lmuw6TezERoiz1qmBwudNusS8qmGGiBB8C',1);
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Specifications`
--

DROP TABLE IF EXISTS `Specifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Specifications` (
  `Specification_id` int NOT NULL AUTO_INCREMENT,
  `skin_type` varchar(255) DEFAULT NULL,
  `hair_type` varchar(255) DEFAULT NULL,
  `benefits` varchar(255) NOT NULL,
  `primary_concerns` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `product_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`Specification_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `specifications_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Specifications`
--

LOCK TABLES `Specifications` WRITE;
/*!40000 ALTER TABLE `Specifications` DISABLE KEYS */;
INSERT INTO `Specifications` VALUES (1,NULL,NULL,'Enhance skin tone','Dehydrated skin','india',45,'2023-11-10 08:55:41','2023-11-10 08:55:41');
/*!40000 ALTER TABLE `Specifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subCategories`
--

DROP TABLE IF EXISTS `subCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subCategories` (
  `subCategories_id` int NOT NULL AUTO_INCREMENT,
  `categories_name` varchar(255) NOT NULL,
  `subCategories_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`subCategories_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subCategories`
--

LOCK TABLES `subCategories` WRITE;
/*!40000 ALTER TABLE `subCategories` DISABLE KEYS */;
INSERT INTO `subCategories` VALUES (1,'Makeup ','FACE MAKEUP','2023-11-01 06:32:40','2023-11-01 06:32:40'),(2,'Makeup ','EYE MAKEUP','2023-11-01 06:33:26','2023-11-01 06:33:26'),(3,'Makeup ','LIP MAKEUP','2023-11-01 06:33:42','2023-11-01 06:33:42'),(4,'Makeup ','NAILS','2023-11-01 06:34:00','2023-11-01 06:34:00'),(5,'Hair care ','SHAMPOO & CONDITIONERS','2023-11-01 06:39:31','2023-11-01 06:39:31'),(6,'Hair care ','NOURISHMENT','2023-11-01 06:39:55','2023-11-01 06:39:55'),(7,'Hair care ','HAIR STYLING & TOOLS','2023-11-01 06:40:12','2023-11-01 06:40:12'),(8,'Hair care ','BY CONCERN','2023-11-01 06:40:30','2023-11-01 06:40:30'),(9,'Skin Care ','EYE CARE','2023-11-01 06:40:59','2023-11-01 06:40:59'),(10,'Skin Care ','CLEANSERS','2023-11-06 08:50:58','2023-11-06 08:50:58');
/*!40000 ALTER TABLE `subCategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subCetegories`
--

DROP TABLE IF EXISTS `subCetegories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subCetegories` (
  `categories_name` varchar(255) NOT NULL,
  `subCetegories_name` varchar(255) NOT NULL,
  `subCetegories_id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`subCetegories_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subCetegories`
--

LOCK TABLES `subCetegories` WRITE;
/*!40000 ALTER TABLE `subCetegories` DISABLE KEYS */;
INSERT INTO `subCetegories` VALUES ('Makeup','FACE MAKEUP',1,'2023-10-06 08:55:14','2023-10-06 08:55:14'),('Makeup','EYE MAKEUP',2,'2023-10-06 08:55:51','2023-10-06 08:55:51'),('Makeup','LIP MAKEUP',3,'2023-10-06 08:56:15','2023-10-06 08:56:15'),('Makeup','NAILS',4,'2023-10-06 08:56:52','2023-10-06 08:56:52'),('Hair care ','SHAMPOO & CONDITIONERS',5,'2023-10-06 10:48:51','2023-10-06 10:48:51'),('Hair care ','NOURISHMENT',6,'2023-10-06 10:49:22','2023-10-06 10:49:22'),('Hair care ','HAIR STYLING & TOOLS',7,'2023-10-06 10:49:44','2023-10-06 10:49:44'),('Hair care ','BY CONCERN',8,'2023-10-06 10:50:09','2023-10-06 10:50:09'),('Skin Care ','EYE CARE',9,'2023-10-06 11:11:00','2023-10-06 11:11:00');
/*!40000 ALTER TABLE `subCetegories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videos` (
  `video_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `like` int DEFAULT NULL,
  `shared` int DEFAULT NULL,
  `video_type` varchar(255) DEFAULT NULL,
  `video_url` varchar(255) NOT NULL,
  `Videothumnail_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`video_id`),
  KEY `Videothumnail_id` (`Videothumnail_id`),
  CONSTRAINT `videos_ibfk_1` FOREIGN KEY (`Videothumnail_id`) REFERENCES `Videothumnails` (`Videothumnail_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos`
--

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
INSERT INTO `videos` VALUES (18,'Glowing skin','',0,0,'Growing with ubtan','/uploads/video/output_1698948096897.mp4',2,'2023-11-02 18:01:53','2023-11-02 18:01:53'),(19,'Glowing skin','',0,0,'Growing with ubtan','/uploads/video/output_1698948480771.mp4',2,'2023-11-02 18:08:26','2023-11-02 18:08:26'),(20,'Glowing skin','',0,0,'Growing with ubtan','/uploads/video/output_1698983165455.mp4',2,'2023-11-03 03:46:25','2023-11-03 03:46:25'),(21,'Glowing skin','',0,0,'Growing with ubtan','/uploads/video/output_1698984017405.mp4',2,'2023-11-03 04:00:35','2023-11-03 04:00:35'),(22,'Glowing skin','',0,0,'Growing with ubtan','/uploads/video/output_1698985407414.mp4',2,'2023-11-03 04:23:35','2023-11-03 04:23:35');
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Videothumnails`
--

DROP TABLE IF EXISTS `Videothumnails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Videothumnails` (
  `Videothumnail_id` int NOT NULL AUTO_INCREMENT,
  `thumbnail_url` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `videoVideoId` int DEFAULT NULL,
  PRIMARY KEY (`Videothumnail_id`),
  KEY `videoVideoId` (`videoVideoId`),
  CONSTRAINT `videothumnails_ibfk_1` FOREIGN KEY (`videoVideoId`) REFERENCES `videos` (`video_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Videothumnails`
--

LOCK TABLES `Videothumnails` WRITE;
/*!40000 ALTER TABLE `Videothumnails` DISABLE KEYS */;
INSERT INTO `Videothumnails` VALUES (2,'uploads/videothumbnail/1698833228802-pexels-ÑÐ»Ð¸Ð°Ð½Ð°-Ð¼Ð°ÑÐ¸Ð½Ð¸Ð½Ð°-10107538.jpg','2023-11-01 10:07:08','2023-11-01 10:07:08',NULL);
/*!40000 ALTER TABLE `Videothumnails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlist` (
  `wishlist_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`wishlist_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `wishlist_ibfk_1637` FOREIGN KEY (`user_id`) REFERENCES `registration` (`user_id`),
  CONSTRAINT `wishlist_ibfk_1638` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlist`
--

LOCK TABLES `wishlist` WRITE;
/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
INSERT INTO `wishlist` VALUES (31,1,12,'2023-10-19 16:04:53','2023-10-19 16:04:53'),(32,1,13,'2023-10-19 16:04:59','2023-10-19 16:04:59'),(35,1,17,'2023-10-19 17:44:44','2023-10-19 17:44:44'),(36,1,18,'2023-10-19 17:48:26','2023-10-19 17:48:26'),(37,1,34,'2023-10-26 07:56:53','2023-10-26 07:56:53'),(39,2,12,'2023-11-03 10:27:31','2023-11-03 10:27:31');
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-08 11:33:26

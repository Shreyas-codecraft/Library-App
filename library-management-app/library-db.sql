-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: lms_db:3306
-- Generation Time: Sep 16, 2024 at 09:57 AM
-- Server version: 9.0.0
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `librarydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `publisher` varchar(100) NOT NULL,
  `genre` varchar(100) NOT NULL,
  `isbnNo` varchar(13) DEFAULT NULL,
  `numOfPages` int NOT NULL,
  `totalNumOfCopies` int NOT NULL,
  `availableNumberOfCopies` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `publisher`, `genre`, `isbnNo`, `numOfPages`, `totalNumOfCopies`, `availableNumberOfCopies`) VALUES
(4, 'Python Programming in Context', 'Bradley N. Miller, David L. Ranum, Julie Anderson', 'Jones & Bartlett Learning', 'Computers', '9781284175554', 520, 10, 10),
(6, 'Learn to Code by Solving Problems', 'Daniel Zingaro', 'No Starch Press', 'Computers', '9781718501331', 392, 10, 10),
(7, 'Programming Language Concepts', 'Carlo Ghezzi, Mehdi Jazayeri', 'John Wiley & Sons', 'Computers', '', 456, 10, 10),
(8, 'Elements of Programming', 'Alexander Stepanov, Paul McJones', 'Lulu.com', 'Computers', '9780578222141', 282, 10, 10),
(9, 'Learning to Program', 'Steven Foote', 'Addison-Wesley Professional', 'Computers', '9780133795226', 336, 10, 10),
(12, 'The Pragmatic Programmer', 'David Thomas, Andrew Hunt', 'Addison-Wesley Professional', 'Computers', '9780135956915', 390, 10, 10),
(13, 'Data-Oriented Programming', 'Yehonathan Sharvit', 'Simon and Schuster', 'Computers', '9781617298578', 422, 10, 10),
(14, 'A Book on C', 'Al Kelley, Ira Pohl', 'Benjamin-Cummings Publishing Company', 'Computers', '9780805300604', 548, 10, 10),
(15, 'Getting Inside Java - Beginners Guide', 'Prem Kumar', 'Pencil', 'Computers', '9789354386459', 208, 10, 10),
(16, 'Programming in C', 'Ashok N. Kamthane', '', 'C (Computer program language)', '9789380856421', 657, 10, 10),
(17, 'Programming Fundamentals', 'Kenneth Leroy Busbee', '', 'Computers', '9789888407491', 340, 10, 10),
(18, 'COMPUTER PROGRAMMING IN FORTRAN 77', 'V. RAJARAMAN', 'PHI Learning Pvt. Ltd.', 'Computers', '9788120311725', 212, 10, 10),
(19, 'Elements of Programming', 'Alexander A. Stepanov, Paul McJones', 'Addison-Wesley Professional', 'Computers', '9780321635372', 279, 10, 10),
(20, 'Programming in Lua', 'Roberto Ierusalimschy', 'Roberto Ierusalimschy', 'Computers', '9788590379829', 329, 10, 10),
(21, 'Programming Persistent Memory', 'Steve Scargall', 'Apress', 'Computers', '9781484249321', 384, 10, 10),
(22, 'Programming Problems', 'B. Green', 'Createspace Independent Pub', 'Computers', '9781475071962', 156, 10, 10),
(23, 'Expert Python Programming', 'Michał Jaworski, Tarek Ziadé', 'Packt Publishing Ltd', 'Computers', '9781801076197', 631, 10, 10),
(24, 'Practical Goal Programming', 'Dylan Jones, Mehrdad Tamiz', 'Springer Science & Business Media', 'Business & Economics', '9781441957719', 180, 10, 10),
(25, 'Fundamentals of Computer Programming with C#', 'Svetlin Nakov, Veselin Kolev', 'Faber Publishing', 'Computers', '9789544007737', 1132, 10, 10),
(27, 'Programming in Python 3', 'Mark Summerfield', 'Pearson Education', 'Computers', '9780321606594', 552, 10, 10),
(28, 'Programming In C: A Practical Approach', 'Ajay Mittal', 'Pearson Education India', 'C (Computer program language)', '9788131729342', 768, 10, 10),
(29, 'The C++ Programming Language', 'Bjarne Stroustrup', 'Pearson Education India', 'C++ (Computer program language)', '9788131705216', 1034, 10, 10),
(31, 'Programming Erlang', 'Joe Armstrong', 'Pragmatic Bookshelf', 'Computers', '9781680504323', 755, 10, 10),
(32, 'Programming in Modula-3', 'Laszlo Böszörmenyi, Carsten Weich', 'Springer', 'Computers', '9783642646140', 571, 10, 10),
(33, 'The History Book', 'DK', 'Dorling Kindersley Ltd', 'History', '9780241282229', 354, 10, 10),
(34, 'The Lessons of History', 'Will Durant, Ariel Durant', 'Simon and Schuster', 'History', '9781439170199', 128, 10, 10),
(35, 'The History Book', 'Dorling Kindersley Publishing Staff', '', 'History', '9780241225929', 0, 10, 10),
(36, 'A Companion to the History of the Book', 'Simon Eliot, Jonathan Rose', 'John Wiley & Sons', 'Literary Criticism', '9781444356588', 617, 10, 10),
(37, 'The American College and University', 'Frederick Rudolph', 'University of Georgia Press', 'Education', '9780820312842', 592, 10, 10),
(39, 'An Introduction to Book History', 'David Finkelstein, Alistair McCleery', 'Routledge', 'Social Science', '9781134380060', 167, 10, 10),
(40, 'The Little Book of History', 'DK', 'Dorling Kindersley Ltd', 'History', '9780241547489', 503, 10, 10),
(41, 'End of History and the Last Man', 'Francis Fukuyama', 'Simon and Schuster', 'History', '9781416531784', 464, 10, 10),
(42, 'The Cambridge Companion to the History of the Book', 'Leslie Howsam', 'Cambridge University Press', 'Language Arts & Disciplines', '9781107023734', 301, 10, 10),
(43, 'A Little History of the World', 'E. H. Gombrich', 'Yale University Press', 'History', '9780300213973', 401, 10, 10),
(45, 'Encyclopedia of Local History', 'Carol Kammen, Amy H. Wilson', 'Rowman & Littlefield Publishers', 'United States', '9780759120488', 0, 10, 10),
(46, 'History at the Limit of World-History', 'Ranajit Guha', 'Columbia University Press', 'History', '9780231505093', 156, 10, 10),
(47, 'A World at Arms', 'Gerhard L. Weinberg', 'Cambridge University Press', 'History', '9780521618267', 1216, 10, 10),
(48, 'Quirky History', 'Mini Menon', 'Harper Collins', 'Juvenile Nonfiction', '9789353578800', 184, 10, 10),
(49, 'A History of Modern India, 1480-1950', 'Claude Markovits', 'Anthem Press', 'History', '9781843311522', 617, 10, 10),
(50, 'Rethinking History', 'Keith Jenkins', 'Routledge', 'History', '9781134408283', 116, 10, 10),
(52, 'A History of India', 'Hermann Kulke, Dietmar Rothermund', 'Psychology Press', 'India', '9780415154826', 406, 10, 10),
(53, 'An Introduction to Book History', 'David Finkelstein, Alistair McCleery', 'Routledge', 'Design', '9780415688055', 178, 10, 10),
(54, 'What Is History, Now?', 'Suzannah Lipscomb, Helen Carr', 'Hachette UK', 'History', '9781474622486', 285, 10, 10),
(55, 'The Oxford Illustrated History of the Book', 'James Raven', 'Oxford University Press', 'Crafts & Hobbies', '9780191007507', 468, 10, 10),
(56, 'A Textbook of Historiography, 500 B.C. to A.D. 2000', 'E. Sreedharan', 'Orient Blackswan', 'History', '9788125026570', 600, 10, 10),
(57, 'A Concise History of Greece', 'Richard Clogg', 'Cambridge University Press', 'History', '9780521004794', 316, 10, 10),
(58, 'Time and Power', 'Christopher Clark', 'Princeton University Press', 'History', '9780691217321', 310, 10, 10),
(59, 'International Law and the Politics of History', 'Anne Orford', 'Cambridge University Press', 'History', '9781108480949', 395, 10, 10),
(60, 'National Geographic History Book', 'Marcus Cowper', 'National Geographic Books', 'History', '9781426206795', 188, 10, 10),
(61, 'Search History', 'Eugene Lim', 'Coffee House Press', 'Fiction', '9781566896269', 162, 10, 10),
(62, 'A History of the Modern World', 'Ranjan Chakrabarti', 'Primus Books', 'History, Modern', '9789380607504', 0, 10, 10),
(63, 'Sapiens', 'Yuval Noah Harari', 'Random House', 'History', '9781448190690', 353, 10, 10),
(64, 'The Past Before Us', 'Romila Thapar', 'Harvard University Press', 'History', '9780674726529', 915, 10, 10),
(65, 'History Education and Conflict Transformation', 'Charis Psaltis, Mario Carretero, Sabina Čehajić-Clancy', 'Springer', 'Education', '9783319546810', 389, 10, 10),
(66, 'The Calling of History', 'Dipesh Chakrabarty', 'University of Chicago Press', 'Biography & Autobiography', '9780226100456', 315, 10, 10),
(67, 'What is the History of the Book?', 'James Raven', 'John Wiley & Sons', 'History', '9781509523214', 196, 10, 10),
(68, 'Wise & Otherwise', 'Sudha Murthy', 'Penguin UK', 'Literary Collections', '9788184759006', 232, 10, 10),
(69, 'The Tastiest Of All', 'Sudha Murthy', 'Penguin UK', 'Juvenile Fiction', '9789351183594', 12, 10, 10),
(71, 'The Seed of Truth', 'Sudha Murthy', 'Penguin UK', 'Fiction', '9789351183563', 13, 10, 10),
(72, 'The Day I Stopped Drinking Milk', 'Sudha Murthy', 'Penguin UK', 'Literary Collections', '9789351180555', 20, 10, 10),
(73, 'The Call', 'Sudha Murty', 'Penguin UK', 'Literary Collections', '9789351180715', 10, 10, 10),
(74, 'A Fair Deal', 'Sudha Murthy', 'Penguin UK', 'Fiction', '9789351183556', 13, 10, 10),
(75, 'Three Women, Three Ponds', 'Sudha Murty', 'Penguin UK', 'Literary Collections', '9789351180593', 10, 10, 10),
(76, 'Helping the Dead', 'Suddha Murty', 'Penguin UK', 'Literary Collections', '9789351180586', 0, 10, 10),
(77, 'Genes', 'Suddha Murty', 'Penguin UK', 'Literary Collections', '9789351180579', 0, 10, 10),
(79, 'The Gift of Sacrifice', 'Suddha Murty', 'Penguin UK', 'Literary Collections', '9789351180630', 0, 10, 10),
(80, 'No Man’s Garden', 'Suddha Murty', 'Penguin UK', 'Literary Collections', '9789351180609', 0, 10, 10),
(81, 'The Best Friend', 'Sudha Murthy', 'Penguin UK', 'Fiction', '9789351183693', 13, 10, 10),
(82, 'Hindu Mother, Muslim Son', 'Sudha Murty', 'Penguin UK', 'Literary Collections', '9789351180531', 10, 10, 10),
(83, 'The Selfish Groom', 'Sudha Murthy', 'Penguin UK', 'Fiction', '9789351183860', 13, 10, 10),
(84, 'Uncle Sam', 'Suddha Murty', 'Penguin UK', 'Literary Collections', '9789351180708', 0, 10, 10),
(85, 'The Wise King', 'Sudha Murthy', 'Penguin UK', 'Fiction', '9789351183662', 13, 10, 10),
(86, 'Lazy Portado', 'Suddha Murty', 'Penguin UK', 'Literary Collections', '9789351180692', 0, 10, 10),
(87, 'Miserable Success', 'Suddha Murty', 'Penguin UK', 'Literary Collections', '9789351180678', 0, 10, 10),
(88, 'Good Luck, Gopal', 'Sudha Murthy', 'Penguin UK', 'Fiction', '9789351183709', 14, 10, 10),
(89, 'Do You Remember?', 'Suddha Murty', 'Penguin UK', 'Literary Collections', '9789351180739', 0, 10, 10),
(90, 'Teen Hazar Tanke', 'Sudha Murthy', '', 'Fiction', '9789352667437', 178, 10, 10),
(91, 'The Clever Brothers', 'Sudha Murthy', 'Penguin UK', 'Fiction', '9789351183761', 12, 10, 10),
(92, 'Sharing with a Ghost', 'Suddha Murty', 'Penguin UK', 'Literary Collections', '9789351180654', 0, 10, 10),
(93, 'Sticky Bottoms', 'Suddha Murty', 'Penguin UK', 'Literary Collections', '9789351180616', 0, 10, 10),
(94, 'Foot in the Mouth', 'Suddha Murty', 'Penguin UK', 'Literary Collections', '9789351180661', 0, 10, 10),
(95, 'MANADA MATU', 'Smt. Sudha Murthy', 'Sapna Book House (P) Ltd.', 'Authors, Kannada', '9788128004353', 186, 10, 10),
(96, 'Apna Deepak Swayam Banen', 'Sudha Murty', 'Prabhat Prakashan', 'Self-Help', '9788173155000', 90, 10, 10),
(97, 'Dollar Bahoo', 'Sudha Murty', 'Prabhat Prakashan', 'Fiction', '9788173153501', 99, 10, 10),
(98, 'Common Yet Uncommon (Hindi)/Sadharan Phir Bhi Asadharan/साधारण फिर भी असाधारण', 'Sudha Murthy/सुधा मूर्ति', 'Penguin Random House India Private Limited', 'Fiction', '9789357088961', 181, 10, 10),
(99, 'KANNADA : SAMANYARALLI ASAMANYARU', 'Smt. Sudha Murthy', 'Sapna Book House (P) Ltd.', 'Short stories, Kannada', '9788128005039', 183, 10, 10),
(100, 'Magic in the Air', 'Sudha Murthy', 'Penguin UK', 'Fiction', '9789351183853', 14, 10, 10),
(101, 'Emperor of Alakavati', 'Sudha Murthy', 'Penguin UK', 'Fiction', '9789351183730', 17, 10, 10),
(102, 'The Last Laddoo', 'Sudha Murthy', 'Penguin UK', 'Fiction', '9789351183587', 13, 10, 10),
(103, 'The White Crow', 'Sudha Murthy', 'Penguin UK', 'Fiction', '9789351183631', 13, 10, 10),
(104, 'The Magic Drum', 'Sudha Murthy', 'Penguin UK', 'Fiction', '9789351183907', 14, 10, 10),
(105, 'Sita', 'Amish Tripathi', 'Harper Collins', 'Fiction', '9789356290945', 333, 10, 10),
(106, 'The Oath of the Vayuputras', 'Amish Tripathi', 'Hachette UK', 'Fiction', '9781780874104', 400, 10, 10),
(107, 'The Bachelor Dad', 'Tusshar Kapoor', 'Penguin Random House India Private Limited', 'Biography & Autobiography', '9789354924255', 192, 10, 10),
(108, 'Xx C. Top', 'Vytenis Rozukas', 'AuthorHouse', 'Fiction', '9781496976987', 295, 10, 10),
(109, 'The Nine-Chambered Heart', 'Janice Pariat', 'Harper Collins', 'Fiction', '9789352773800', 216, 10, 10),
(110, 'Ramayana Pack (4 Volumes)', 'Shubha Vilas', 'Jaico Publishing House', 'Self-Help', '9789386867650', 1303, 10, 10),
(111, 'The Secret Of The Nagas (Shiva Trilogy Book 2)', 'Amish Tripathi', 'Harper Collins', 'Fiction', '9789356290679', 337, 10, 10),
(112, 'Ancient Promises', 'Jaishree Misra', 'Penguin Books India', 'East Indians', '9780140293593', 324, 10, 10),
(113, 'Advances in Computer and Computational Sciences', 'Sanjiv K. Bhatia, Krishn K. Mishra, Shailesh Tiwari, Vivek Kumar Singh', 'Springer', 'Technology & Engineering', '9789811037733', 713, 10, 10),
(114, 'The Sialkot Saga', 'Ashwin Sanghi', 'Harper Collins', 'Fiction', '9789356292468', 546, 10, 10),
(115, 'Son of the Thundercloud', 'Easterine Kire', '', 'Fiction', '9789386338143', 152, 10, 10),
(116, 'Fluid', 'Ashish Jaiswal', '', 'Education', '9788183285278', 256, 10, 10),
(117, 'The Liberation of Sita', 'Volga', 'Harper Collins', 'Fiction', '9789352775026', 128, 10, 10),
(118, 'The Eternal World', 'Christopher Farnsworth', 'HarperCollins', 'Fiction', '9780062282934', 365, 10, 10),
(119, 'Keepers of the Kalachakra', 'Ashwin Sanghi', 'Harper Collins', 'Fiction', '9789356292482', 374, 10, 10),
(120, 'Digital Hinduism', 'Xenia Zeiler', 'Routledge', 'Religion', '9781351607322', 304, 10, 10),
(121, 'The Illuminated', 'Anindita Ghose', 'Harper Collins', 'Fiction', '9789354226182', 234, 10, 10),
(122, 'Boats on Land', 'Janice Pariat', 'Random House India', 'Fiction', '9788184003390', 200, 10, 10),
(123, 'Cuckold', 'Kiran Nagarkar', 'Harper Collins', 'Fiction', '9789351770107', 633, 10, 10),
(124, 'Stories We Never Tell', 'Savi Sharma', 'Harper Collins', 'Fiction', '9789356293304', 204, 10, 10),
(126, 'Chander and Sudha', 'Dharamvir Bharati', 'Penguin UK', 'Fiction', '9788184750294', 360, 10, 10),
(127, 'Living with Merlin', 'Anita Bakshi', 'Partridge Publishing', 'Self-Help', '9781482840193', 233, 10, 10),
(128, 'Ramayana: The Game of Life – Book 2: Conquer Change', 'Shubha Vilas', 'Jaico Publishing House', 'Religion', '9789386348906', 404, 10, 10),
(129, 'Food Fights', 'Charles C. Ludington, Matthew Morse Booker', '', 'Cooking', '9781469652894', 304, 10, 10),
(130, 'The Shape of Design', 'Frank Chimero', '', 'Design', '9780985472207', 131, 10, 10),
(131, 'Everyone Has a Story', 'Savi Sharma', '', 'Friendship', '9789386036759', 0, 10, 10),
(132, 'Go Kiss the World', 'Subroto Bagchi', 'Penguin Books India', 'Executives', '9780670082308', 260, 10, 10),
(133, 'Scion of Ikshvaku', 'Amish, Amish Tripathi', 'Westland Publication Limited', 'Hindu mythology', '9789385152146', 0, 10, 10),
(134, 'The Sand Fish', 'Maha Gargash', 'Harper Collins', 'Fiction', '9780061959868', 0, 10, 10),
(135, '2 States: The Story of My Marriage (Movie Tie-In Edition)', 'Chetan Bhagat', 'Rupa Publications', 'Fiction', '9788129132543', 280, 10, 10),
(136, 'The Woman on the Orient Express', 'Lindsay Jayne Ashford', 'Charnwood', 'Female friendship', '9781444836714', 416, 10, 10),
(138, 'Blind Faith', 'Sagarika Ghose', 'Harper Collins', 'Fiction', '9789351367994', 188, 10, 10),
(139, 'Dysmorphic Kingdom', 'Colleen Chen', '', 'Fantasy fiction', '9781940233239', 320, 10, 10),
(140, 'Advice and Dissent', 'Y.V. Reddy', 'Harper Collins', 'Biography & Autobiography', '9789352643059', 496, 10, 10),
(141, 'Angels & Demons', 'Dan Brown', 'Simon and Schuster', 'Fiction', '9780743493468', 496, 10, 10),
(142, 'Angels and Demons', 'Dan Brown', 'Corgi Books', 'Fiction', '9780552160896', 0, 10, 10),
(143, 'Angels & Demons', 'Dan Brown', 'Simon and Schuster', 'Anti-Catholicism', '9781416528654', 8, 10, 10),
(144, 'Angels & Demons Special Illustrated Edition', 'Dan Brown', 'Simon and Schuster', 'Fiction', '9780743277716', 532, 10, 10),
(145, 'Angels and Demons', 'Dan Brown', 'Random House', 'Anti-Catholicism', '9780552173469', 642, 10, 10),
(146, 'Angels and Demons', 'Serge-Thomas Bonino', 'CUA Press', 'Religion', '9780813227993', 345, 10, 10),
(147, 'Angels and Demons', 'Peter Kreeft', 'Ignatius Press', 'Religion', '9781681490380', 164, 10, 10),
(148, 'Angels and Demons', 'Benny Hinn', 'Benny Hinn Ministries', 'Religion', '9781590244593', 208, 10, 10),
(149, 'Dan Brown’s Robert Langdon Series', 'Dan Brown', 'Random House', 'Fiction', '9781473543201', 2082, 10, 10),
(150, 'The Mammoth Book of Angels & Demons', 'Paula Guran', 'Hachette UK', 'Fiction', '9781780338002', 405, 10, 10),
(151, 'The Eight', 'Katherine Neville', 'Open Road Media', 'Fiction', '9781504013673', 523, 10, 10),
(152, 'Angels, Demons and the New World', 'Fernando Cervantes, Andrew Redden', 'Cambridge University Press', 'Body, Mind & Spirit', '9780521764582', 331, 10, 10),
(153, 'Angels and Demons', 'Ron Phillips', 'Charisma Media', 'Body, Mind & Spirit', '9781629980348', 289, 10, 10),
(154, 'Angels And Demons', 'Dan Brown', 'Random House', 'Fiction', '9781409083948', 663, 10, 10),
(155, 'Secrets of Angels and Demons', 'Daniel Burstein', '', 'Popes in literature', '9780752876931', 595, 10, 10),
(156, 'Angels, Demons & Gods of the New Millenium', 'Lon Milo Duquette', 'Weiser Books', 'Body, Mind & Spirit', '9781578630103', 196, 10, 10),
(157, 'Angels and Demons in Art', 'Rosa Giorgi', 'Getty Publications', 'Angels in art', '9780892368303', 384, 10, 10),
(158, 'Demon Angel', 'Meljean Brook', 'Penguin', 'Fiction', '9781101568026', 411, 10, 10),
(159, 'Angels & Demons Rome', 'Angela K. Nickerson', 'Roaring Forties Press', 'Travel', '9780984316557', 71, 10, 10),
(160, 'What Does the Bible Say About Angels and Demons?', 'John Gillman, Clifford M. Yeary', 'New City Press', 'Religion', '9781565483804', 93, 10, 10),
(161, 'The Sherlock Holmes Mysteries', 'Sir Arthur Conan Doyle', 'Penguin', 'Fiction', '9780698168237', 546, 10, 10),
(162, 'Demons & Angels', 'J.K. Norry', 'Sudden Insight Publishing', 'Fiction', '9780990728030', 278, 10, 10),
(163, 'A Brief History of Angels and Demons', 'Sarah Bartlett', 'Hachette UK', 'Body, Mind & Spirit', '9781849018289', 164, 10, 10),
(164, 'Demons, Angels, and Writing in Ancient Judaism', 'Annette Yoshiko Reed', 'Cambridge University Press', 'Religion', '9780521119436', 365, 10, 10),
(165, 'An Angel, a Demon, a Candle', 'Cordelia Faass', 'Xlibris Corporation', 'Fiction', '9781479746750', 99, 10, 10),
(167, 'Origin', 'Dan Brown', 'Mizan Publishing', 'Fiction', '9786022914426', 575, 10, 10),
(168, 'Angels, Satan and Demons', 'Robert Paul Lightner', 'Thomas Nelson', 'Angels', '9780849913716', 0, 10, 10);

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` bigint UNSIGNED NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phoneNumber` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(150) NOT NULL,
  `role` enum('user','admin') NOT NULL DEFAULT 'user',
  `refreshToken` varchar(255) DEFAULT NULL,
  `accessToken` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `firstName`, `lastName`, `email`, `phoneNumber`, `password`, `role`, `refreshToken`, `accessToken`, `user_id`) VALUES
(1, 'Alice', 'Smith', 'alice.smith@example.com', '+1-555-123-4567', '', 'user', NULL, NULL, ''),
(2, 'Bob', 'Johnson', 'bob.johnson@example.net', '+44 20 7946 0958', '', 'user', NULL, NULL, ''),
(3, 'Carol', 'Lee', 'carol.lee@example.org', '(555) 867-5309', '', 'user', NULL, NULL, ''),
(4, 'David', 'Garcia', 'david.garcia@example.co', '123-456-7890', '', 'user', NULL, NULL, ''),
(5, 'Eva', 'Martinez', 'eva.martinez@example.edu', '+49-89-636-48018', '', 'user', NULL, NULL, ''),
(6, 'Frank', 'Brown', 'frank.brown@example.io', '+33 1 2345 6789', '', 'user', NULL, NULL, ''),
(7, 'Grace', 'Wilson', 'grace.wilson@example.biz', '+81 3-1234-5678', '', 'user', NULL, NULL, ''),
(8, 'Henry', 'Taylor', 'henry.taylor@example.us', '+61 2 1234 5678', '', 'user', NULL, NULL, ''),
(9, 'Isabel', 'Anderson', 'isabel.anderson@example.ca', '+1-604-123-4567', '', 'user', NULL, NULL, ''),
(10, 'Jack', 'Thomas', 'jack.thomas@example.au', '+61 7 1234 5678', '', 'user', NULL, NULL, ''),
(11, 'Katherine', 'Harris', 'katherine.harris@example.co.uk', '+44 113 123 4567', '', 'user', NULL, NULL, ''),
(12, 'Liam', 'Clark', 'liam.clark@example.nz', '+64 4 123 4567', '', 'user', NULL, NULL, ''),
(13, 'Mia', 'Robinson', 'mia.robinson@example.sg', '+65 1234 5678', '', 'user', NULL, NULL, ''),
(14, 'Noah', 'Lewis', 'noah.lewis@example.in', '+91 12345 67890', '', 'user', NULL, NULL, ''),
(15, 'Olivia', 'Walker', 'olivia.walker@example.za', '+27 21 123 4567', '', 'user', NULL, NULL, ''),
(16, 'Paul', 'Young', 'paul.young@example.ie', '+353 1 123 4567', '', 'user', NULL, NULL, ''),
(17, 'Quinn', 'King', 'quinn.king@example.se', '+46 8 123 4567', '', 'user', NULL, NULL, ''),
(18, 'Ryan', 'Hill', 'ryan.hill@example.de', '+49 30 12345678', '', 'user', NULL, NULL, ''),
(19, 'Sophie', 'Scott', 'sophie.scott@example.nl', '+31 20 123 4567', '', 'user', NULL, NULL, ''),
(20, 'Thomas', 'Green', 'thomas.green@example.dk', '+45 12 34 56 78', '', 'user', NULL, NULL, ''),
(21, 'Uma', 'Baker', 'uma.baker@example.br', '+55 11 1234 5678', '', 'user', NULL, NULL, ''),
(22, 'Victor', 'Gonzalez', 'victor.gonzalez@example.mx', '+52 55 1234 5678', '', 'user', NULL, NULL, ''),
(23, 'Willow', 'Carter', 'willow.carter@example.jp', '+81 6-1234-5678', '', 'user', NULL, NULL, ''),
(24, 'Xavier', 'Evans', 'xavier.evans@example.kr', '+82 2-123-4567', '', 'user', NULL, NULL, ''),
(27, 'John', 'Doe', 'johndoe@example.com', '+1-800-555-5555', '$2b$10$./C/v0fr8FCLIVupcM3qO.qBBG3bSIgXPnzjBP3avTMUURT5JnpEC', 'user', '', NULL, ''),
(30, 'Jane', 'Smith', 'janesmith@example.com', '+44 20 7946 0958', '$2b$10$z/QwEcSDE9TiBq/hPPuvM.wjhQyvobSYHmGkCeZSgcahnDzyUqg7C', 'user', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkphbmUiLCJpYXQiOjE3MjQ1ODcyMzcsImV4cCI6MTcyNDY3MzYzN30.3D5qKUThomyD18cFDLEaNn3Qz_XfiBqZZHp5GLAEHA8', NULL, ''),
(31, 'Jane1', 'Smith', 'janesmith@example1.com', '+44 20 7946 0938', '$2b$10$QkrHaxzF5UhGxkLcz.wWUePyQ9Mn4Nfn.x1CQ7W3oFGF73RbIH9j.', 'user', '', NULL, ''),
(32, 'admin', 'Smith', 'janesmith@example2.com', '+44 20 7942 0938', '$2b$10$dAm2/zyKpQ3mwEYgWqWmtuHIuJlAJkfPLNDwbv9U35chQO7BgcmxS', 'user', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzI0MTU1Njg1LCJleHAiOjE3MjQyNDIwODV9.6-XJN1as0vYmiMbwecQPaEtYux15VewJN_caEVE4IJQ', NULL, ''),
(72, 'Shreyas', 'Salyan', 'shreyas.salyan@codecraft.co.in', '8951229310', '$2a$10$RkZuazHIoSLqIcpZX350i.OsLAnIFUUwNBwl1R.0vNb5WgJQLkPAe', 'admin', NULL, NULL, ''),
(74, 'shreyas', 'salyan', 'shreyassalyan917@gmail.com', '8951229311', '$2a$10$Nqyy0Ad4zVPoOPOQBsdQD.cI6.aLZRlwUYMvnDFehrn44.RHECfL6', 'user', NULL, NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `id` bigint UNSIGNED NOT NULL,
  `bookId` bigint NOT NULL,
  `memberId` bigint NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`id`, `bookId`, `memberId`, `status`) VALUES
(101, 4, 72, 'Approved'),
(102, 6, 72, 'Approved'),
(103, 4, 72, 'Approved'),
(104, 8, 72, 'Approved'),
(105, 12, 72, 'Approved'),
(108, 14, 74, 'Approved'),
(109, 4, 74, 'Rejected'),
(110, 14, 72, 'Approved'),
(111, 141, 74, 'Approved'),
(112, 136, 74, 'Approved'),
(113, 14, 72, 'Approved'),
(114, 14, 72, 'Approved'),
(115, 49, 74, 'Approved'),
(116, 135, 72, 'Approved'),
(117, 163, 72, 'Approved'),
(118, 74, 72, 'Approved'),
(119, 52, 72, 'Approved'),
(120, 58, 72, 'Approved'),
(121, 84, 72, 'Approved'),
(122, 74, 72, 'Approved'),
(123, 83, 72, 'Approved'),
(124, 49, 72, 'Approved'),
(125, 74, 72, 'Approved');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint UNSIGNED NOT NULL,
  `bookId` bigint UNSIGNED NOT NULL,
  `memberId` bigint UNSIGNED NOT NULL,
  `issueDate` varchar(100) NOT NULL,
  `dueDate` varchar(100) NOT NULL,
  `returnDate` varchar(100) DEFAULT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `bookId`, `memberId`, `issueDate`, `dueDate`, `returnDate`, `status`) VALUES
(30, 4, 72, 'Friday, 2024-09-06, 08:48:19', 'Friday, 2024-09-13, 08:48:19', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(31, 8, 72, 'Tuesday, 2024-09-10, 09:01:34', 'Tuesday, 2024-09-17, 09:01:34', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(32, 12, 72, 'Tuesday, 2024-09-10, 09:02:29', 'Tuesday, 2024-09-17, 09:02:29', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(34, 14, 74, 'Wednesday, 2024-09-11, 05:43:21', 'Wednesday, 2024-09-18, 05:43:21', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(35, 6, 72, 'Wednesday, 2024-09-11, 09:53:40', 'Wednesday, 2024-09-18, 09:53:40', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(36, 141, 74, 'Sunday, 2024-09-15, 10:01:24', 'Sunday, 2024-09-22, 10:01:24', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(42, 14, 72, 'Sunday, 2024-09-15, 10:03:32', 'Sunday, 2024-09-22, 10:03:32', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(43, 136, 74, 'Sunday, 2024-09-15, 14:04:39', 'Sunday, 2024-09-22, 14:04:39', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(44, 4, 72, 'Sunday, 2024-09-15, 18:18:44', 'Sunday, 2024-09-22, 18:18:44', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(45, 14, 72, 'Sunday, 2024-09-15, 18:36:54', 'Sunday, 2024-09-22, 18:36:54', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(46, 14, 72, 'Sunday, 2024-09-15, 18:40:54', 'Sunday, 2024-09-22, 18:40:54', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(47, 49, 74, 'Sunday, 2024-09-15, 19:05:09', 'Sunday, 2024-09-22, 19:05:09', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(48, 135, 72, 'Sunday, 2024-09-15, 19:09:29', 'Sunday, 2024-09-22, 19:09:29', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(49, 163, 72, 'Sunday, 2024-09-15, 19:09:31', 'Sunday, 2024-09-22, 19:09:31', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(50, 74, 72, 'Sunday, 2024-09-15, 19:11:08', 'Sunday, 2024-09-22, 19:11:08', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(51, 52, 72, 'Sunday, 2024-09-15, 19:11:10', 'Sunday, 2024-09-22, 19:11:10', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(52, 58, 72, 'Monday, 2024-09-16, 09:07:28', 'Monday, 2024-09-23, 09:07:28', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(53, 84, 72, 'Monday, 2024-09-16, 09:07:30', 'Monday, 2024-09-23, 09:07:30', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(54, 74, 72, 'Monday, 2024-09-16, 09:10:40', 'Monday, 2024-09-23, 09:10:40', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(55, 83, 72, 'Monday, 2024-09-16, 09:21:35', 'Monday, 2024-09-23, 09:21:35', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(56, 49, 72, 'Monday, 2024-09-16, 09:26:17', 'Monday, 2024-09-23, 09:26:17', 'Monday, 2024-09-16, 09:26:31', 'Returned'),
(57, 74, 72, 'Monday, 2024-09-16, 09:26:19', 'Monday, 2024-09-23, 09:26:19', 'Monday, 2024-09-16, 09:26:31', 'Returned');

-- --------------------------------------------------------

--
-- Table structure for table `__drizzle_migrations`
--

CREATE TABLE `__drizzle_migrations` (
  `id` bigint UNSIGNED NOT NULL,
  `hash` text NOT NULL,
  `created_at` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `__drizzle_migrations`
--

INSERT INTO `__drizzle_migrations` (`id`, `hash`, `created_at`) VALUES
(1, '6e0511e0ea5a305c33e9144b4552c54b2e9ca231bb17b997ab49dd555e9c5da3', 1721896349549);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `books_isbnNo_unique` (`isbnNo`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `members_email_unique` (`email`),
  ADD UNIQUE KEY `access_indx` (`accessToken`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `transactions_bookId_books_id_fk` (`bookId`),
  ADD KEY `transactions_memberId_members_id_fk` (`memberId`);

--
-- Indexes for table `__drizzle_migrations`
--
ALTER TABLE `__drizzle_migrations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=209;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `__drizzle_migrations`
--
ALTER TABLE `__drizzle_migrations`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_bookId_books_id_fk` FOREIGN KEY (`bookId`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `transactions_memberId_members_id_fk` FOREIGN KEY (`memberId`) REFERENCES `members` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

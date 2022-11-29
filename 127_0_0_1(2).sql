-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Nov 24. 11:15
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `koltsegvetes_pr`
--


-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kiadas`
--

CREATE TABLE `kiadas` (
  `kiadas_id` int(11) NOT NULL,
  `kiadas_nev` int(11) NOT NULL,
  `kiadas_ar` int(11) NOT NULL,
  `kiadas_datum` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `kiadas`
--

INSERT INTO `kiadas` (`kiadas_id`, `kiadas_nev`, `kiadas_ar`, `kiadas_datum`) VALUES
(1, 1, 15000, '2022-11-02'),
(2, 2, 3000, '2022-11-04'),
(3, 3, 2500, '2022-11-06'),
(4, 4, 9000, '2022-11-09'),
(5, 5, 31000, '2022-11-15'),
(6, 6, 4200, '2022-11-05'),
(7, 1, 2000, '2022-11-25');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `koltsegfajta`
--

CREATE TABLE `koltsegfajta` (
  `fajta_id` int(11) NOT NULL,
  `fajta_nev` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `fajta_kep` varchar(100) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `kiadas`
--
ALTER TABLE `kiadas`
  ADD PRIMARY KEY (`kiadas_id`);

--
-- A tábla indexei `koltsegfajta`
--
ALTER TABLE `koltsegfajta`
  ADD PRIMARY KEY (`fajta_id`),
  ADD KEY `fajta_nev` (`fajta_nev`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `kiadas`
--
ALTER TABLE `kiadas`
  MODIFY `kiadas_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `koltsegfajta`
--
ALTER TABLE `koltsegfajta`
  MODIFY `fajta_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2022 at 04:52 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `userbuilds`
--

-- --------------------------------------------------------

--
-- Table structure for table `newuserbuild`
--

CREATE TABLE `newuserbuild` (
  `id` int(11) NOT NULL,
  `buildName` varchar(70) NOT NULL,
  `champ` varchar(70) NOT NULL,
  `mainKeystone` varchar(70) NOT NULL,
  `mainRune` varchar(70) NOT NULL,
  `mainRune1` varchar(70) NOT NULL,
  `mainRune2` varchar(70) NOT NULL,
  `mainRune3` varchar(70) NOT NULL,
  `subKeystone` varchar(70) NOT NULL,
  `subRune1` varchar(70) NOT NULL,
  `subRune2` varchar(70) NOT NULL,
  `addRune1` varchar(70) NOT NULL,
  `addRune2` varchar(70) NOT NULL,
  `addRune3` varchar(70) NOT NULL,
  `ss1` varchar(70) NOT NULL,
  `ss2` varchar(70) NOT NULL,
  `item1` varchar(70) NOT NULL,
  `item2` varchar(70) NOT NULL,
  `item3` varchar(70) NOT NULL,
  `item4` varchar(70) NOT NULL,
  `item5` varchar(70) NOT NULL,
  `item6` varchar(70) NOT NULL,
  `skill1` varchar(1) NOT NULL,
  `skill2` varchar(1) NOT NULL,
  `skill3` varchar(1) NOT NULL,
  `skill4` varchar(1) NOT NULL,
  `l1` varchar(1) NOT NULL,
  `l2` varchar(1) NOT NULL,
  `l3` varchar(1) NOT NULL,
  `l4` varchar(1) NOT NULL,
  `l5` varchar(1) NOT NULL,
  `l6` varchar(1) NOT NULL,
  `l7` varchar(1) NOT NULL,
  `l8` varchar(1) NOT NULL,
  `l9` varchar(1) NOT NULL,
  `l10` varchar(1) NOT NULL,
  `l11` varchar(1) NOT NULL,
  `l12` varchar(1) NOT NULL,
  `l13` varchar(1) NOT NULL,
  `l14` varchar(1) NOT NULL,
  `l15` varchar(1) NOT NULL,
  `l16` varchar(1) NOT NULL,
  `l17` varchar(1) NOT NULL,
  `l18` varchar(1) NOT NULL,
  `paragraph` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `newuserbuild`
--

INSERT INTO `newuserbuild` (`id`, `buildName`, `champ`, `mainKeystone`, `mainRune`, `mainRune1`, `mainRune2`, `mainRune3`, `subKeystone`, `subRune1`, `subRune2`, `addRune1`, `addRune2`, `addRune3`, `ss1`, `ss2`, `item1`, `item2`, `item3`, `item4`, `item5`, `item6`, `skill1`, `skill2`, `skill3`, `skill4`, `l1`, `l2`, `l3`, `l4`, `l5`, `l6`, `l7`, `l8`, `l9`, `l10`, `l11`, `l12`, `l13`, `l14`, `l15`, `l16`, `l17`, `l18`, `paragraph`) VALUES
(1, 'OTP Shaco', 'Shaco', 'perk-images/Styles/7200_Domination.png', 'perk-images/Styles/Domination/Electrocute/Electrocute.png', 'perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png', 'perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png', 'perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png', 'perk-images/Styles/7201_Precision.png', 'perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png', 'perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png', 'perk-images/StatMods/StatModsAttackSpeedIcon.png', 'perk-images/StatMods/StatModsAdaptiveForceIcon.png', 'perk-images/StatMods/StatModsHealthScalingIcon.png', 'SummonerDot.png', 'SummonerSmite.png', '3006.png', '6676.png', '6672.png', '3036.png', '3031.png', '6333.png', 'W', 'Q', 'E', 'R', 'W', 'Q', 'W', 'E', 'W', 'R', 'Q', 'W', 'Q', 'E', 'W', 'R', 'E', 'Q', 'E', 'Q', 'E', 'R', 'I have been a Shaco one trick for 4 years now, i managed to reach the top of diamond as well as become the top 100 Shaco in the world. My recommendation for Shaco is that you play him extremely aggressively and build him like an adc. Max W so you can clear your own camps quick and then search to clear the enemy junglers camps to starve them. He doesnt have low enought cooldowns to be built with high lethality like rengar, so you need to build him attack speed and crit. Late game, find kills on the squishy camps at all costs, dont go in first unless you can get out.'),
(2, 'Please stop playing', 'Yone', 'perk-images/Styles/7200_Domination.png', 'perk-images/Styles/Domination/Electrocute/Electrocute.png', 'perk-images/Styles/Domination/CheapShot/CheapShot.png', 'perk-images/Styles/Domination/ZombieWard/ZombieWard.png', 'perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png', 'perk-images/Styles/7201_Precision.png', 'perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png', 'perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png', 'perk-images/StatMods/StatModsAdaptiveForceIcon.png', 'perk-images/StatMods/StatModsAdaptiveForceIcon.png', 'perk-images/StatMods/StatModsHealthScalingIcon.png', 'SummonerBarrier.png', 'SummonerBarrier.png', '1001.png', '1001.png', '1001.png', '1001.png', '1001.png', '1001.png', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Stop playing Yone, you are not good at the champ, i will ban if you hover'),
(3, 'Disco NUNU', 'Nunu', 'perk-images/Styles/7200_Domination.png', 'perk-images/Styles/Domination/Predator/Predator.png', 'perk-images/Styles/Domination/CheapShot/CheapShot.png', 'perk-images/Styles/Domination/ZombieWard/ZombieWard.png', 'perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png', 'perk-images/Styles/7202_Sorcery.png', 'perk-images/Styles/Sorcery/NimbusCloak/6361.png', 'perk-images/Styles/Sorcery/Transcendence/Transcendence.png', 'perk-images/StatMods/StatModsCDRScalingIcon.png', 'perk-images/StatMods/StatModsArmorIcon.png', 'perk-images/StatMods/StatModsMagicResIcon.png', 'SummonerHaste.png', 'SummonerHeal.png', '1001.png', '1001.png', '1001.png', '1001.png', '1001.png', '1001.png', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Run it down mid'),
(4, 'Free wins', 'TahmKench', 'perk-images/Styles/7204_Resolve.png', 'perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png', 'perk-images/Styles/Resolve/MirrorShell/MirrorShell.png', 'perk-images/Styles/Resolve/SecondWind/SecondWind.png', 'perk-images/Styles/Sorcery/Unflinching/Unflinching.png', 'perk-images/Styles/7201_Precision.png', 'perk-images/Styles/Precision/Triumph.png', 'perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png', 'perk-images/StatMods/StatModsAttackSpeedIcon.png', 'perk-images/StatMods/StatModsArmorIcon.png', 'perk-images/StatMods/StatModsArmorIcon.png', 'SummonerFlash.png', 'SummonerTeleport.png', '3047.png', '6662.png', '3075.png', '4401.png', '3143.png', '3193.png', 'Q', 'E', 'R', 'W', 'Q', 'E', 'W', 'Q', 'Q', 'R', 'Q', 'E', 'Q', 'E', 'R', 'E', 'E', 'W', 'W', 'R', 'W', 'W', 'Strongest champ in the game, free elo, abuse top lane with this pick'),
(5, '1', 'Jinx', 'perk-images/Styles/7203_Whimsy.png', 'perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png', 'perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png', 'perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png', 'perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png', 'perk-images/Styles/7201_Precision.png', 'perk-images/Styles/Precision/Overheal.png', 'perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png', 'perk-images/StatMods/StatModsAttackSpeedIcon.png', 'perk-images/StatMods/StatModsMagicResIcon.png', 'perk-images/StatMods/StatModsHealthScalingIcon.png', 'SummonerDot.png', 'SummonerSmite.png', '1004.png', '1027.png', '1035.png', '1018.png', '1039.png', '1043.png', 'Q', 'W', 'E', 'R', 'Q', 'W', 'E', 'R', 'Q', 'W', 'E', 'R', 'Q', 'W', 'E', 'R', 'Q', 'W', 'E', 'Q', 'W', 'E', ''),
(6, '2', 'Evelynn', 'perk-images/Styles/7203_Whimsy.png', 'perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png', 'perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtrapti', 'perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png', 'perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png', 'perk-images/Styles/7201_Precision.png', 'perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png', 'perk-images/Styles/Sorcery/LastStand/LastStand.png', 'perk-images/StatMods/StatModsAdaptiveForceIcon.png', 'perk-images/StatMods/StatModsAdaptiveForceIcon.png', 'perk-images/StatMods/StatModsHealthScalingIcon.png', 'SummonerMana.png', 'SummonerBoost.png', '1001.png', '1058.png', '1018.png', '1036.png', '1500.png', '1043.png', 'Q', 'W', 'E', 'R', 'Q', 'W', 'Q', 'E', 'E', 'R', 'Q', 'R', 'W', 'Q', 'W', 'R', 'Q', 'W', 'E', 'R', 'Q', 'W', ''),
(7, '3', 'Neeko', 'perk-images/Styles/7202_Sorcery.png', 'perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png', 'perk-images/Styles/Sorcery/NullifyingOrb/Pokeshield.png', 'perk-images/Styles/Sorcery/Celerity/CelerityTemp.png', 'perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png', 'perk-images/Styles/7204_Resolve.png', 'perk-images/Styles/Resolve/Revitalize/Revitalize.png', 'perk-images/Styles/Sorcery/Unflinching/Unflinching.png', 'perk-images/StatMods/StatModsCDRScalingIcon.png', 'perk-images/StatMods/StatModsMagicResIcon.png', 'perk-images/StatMods/StatModsHealthScalingIcon.png', 'SummonerMana.png', 'SummonerTeleport.png', '1027.png', '1053.png', '1028.png', '1004.png', '1503.png', '1026.png', 'R', 'E', 'W', 'Q', 'R', 'E', 'W', 'Q', 'R', 'E', 'W', 'Q', 'R', 'E', 'W', 'Q', 'R', 'E', 'W', 'Q', 'R', 'E', ''),
(11, '4', 'Aphelios', 'perk-images/Styles/7203_Whimsy.png', 'perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png', 'perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtrapti', 'perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png', 'perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png', 'perk-images/Styles/7201_Precision.png', 'perk-images/Styles/Precision/CutDown/CutDown.png', 'perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png', 'perk-images/StatMods/StatModsAttackSpeedIcon.png', 'perk-images/StatMods/StatModsArmorIcon.png', 'perk-images/StatMods/StatModsHealthScalingIcon.png', 'SummonerExhaust.png', 'SummonerBoost.png', '1029.png', '1004.png', '1043.png', '1006.png', '1033.png', '1042.png', 'W', 'R', 'E', 'W', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', ''),
(12, '5', 'Yasuo', 'perk-images/Styles/7200_Domination.png', 'perk-images/Styles/Domination/Predator/Predator.png', 'perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.pn', 'perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png', 'perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png', 'perk-images/Styles/7201_Precision.png', 'perk-images/Styles/Precision/CutDown/CutDown.png', 'perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png', 'perk-images/StatMods/StatModsAttackSpeedIcon.png', 'perk-images/StatMods/StatModsArmorIcon.png', 'perk-images/StatMods/StatModsMagicResIcon.png', 'SummonerFlash.png', 'SummonerDot.png', '3031.png', '3072.png', '3153.png', '3078.png', '3071.png', '6673.png', 'Q', 'E', 'R', 'W', 'Q', 'E', 'Q', 'W', 'E', 'R', 'W', 'Q', 'E', 'Q', 'R', 'E', 'W', 'Q', 'E', 'R', 'W', 'W', ''),
(13, 'Test', 'Aatrox', 'perk-images/Styles/7200_Domination.png', 'perk-images/Styles/Domination/Electrocute/Electrocute.png', 'perk-images/Styles/Domination/CheapShot/CheapShot.png', 'perk-images/Styles/Domination/ZombieWard/ZombieWard.png', 'perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png', 'perk-images/Styles/7200_Domination.png', 'perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png', 'perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png', 'perk-images/StatMods/StatModsAdaptiveForceIcon.png', 'perk-images/StatMods/StatModsAdaptiveForceIcon.png', 'perk-images/StatMods/StatModsHealthScalingIcon.png', 'SummonerFlash.png', 'SummonerBoost.png', '1001.png', '1033.png', '1037.png', '1011.png', '1028.png', '3041.png', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'LIVE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `newuserbuild`
--
ALTER TABLE `newuserbuild`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `newuserbuild`
--
ALTER TABLE `newuserbuild`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

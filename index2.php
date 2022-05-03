<?php
$conn = mysqli_connect('localhost', 'root', '', 'userbuilds');
if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $sql = "SELECT * FROM newuserbuild;";
    $result = mysqli_query($conn, $sql);
    $builds = mysqli_fetch_all($result, MYSQLI_ASSOC);

    mysqli_free_result($result);
    mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles2.css">
    <script src="https://kit.fontawesome.com/4e724250be.js" crossorigin="anonymous"></script>
    <script src="allItems.js" defer></script>
    <script src="summonerSpells.js" defer></script>
    <title>Landing Page</title>
</head>

<body>
    <div class="FlexBox-Container">
        <div class="FlexAll Flex1">
            <div class="pageTitle"><span class>League of Legends - The Essentials</span></div>
            <div class="NavButtons">
                <a class="NavBTN HomeBTN" href="index2.php"><span class>Home</span></a>
                <a class="NavBTN KeyTermsBTN" href="metaKeyTerms.html"><span class>Key Terminologies/Meta</span></a>
                <a class="NavBTN GuideBTN" href="guide.html"><span class>Guide</span></a>
            </div>
            <div class="SearchBars">
                <div class="sPlayer">
                    <span class>Search a Player</span>
                    <input class="sPlayer_txt" id="sPlayer_txt" type="search" placeholder="Search a Player">
                    <button type="button" class="sChampPlayerBTN" id="sChampPlayerBTN"></button>
                    <div class="modalPlayer" id="modalPlayer">
                        <!-- Modal content -->
                        <div class="modal-contentPlayer">
                            <div class="modal-headerPlayer" id="modal-headerPlayer">
                                <span class="closePlayer" id="closePlayer">&times;</span>
                                <div id="headerPlayer"></div>
                            </div>
                            <div class="modal-bodyPlayer" playerSearchContainer>
                                <template playerSearch>
                                    <div class="templatePlayer">
                                        <div class="playerImgSearched" id="playerImgSearched" playerImgSearched></div>
                                        <div class="statsSearched">
                                            <div class="playerNameSearched" id="playerNameSearched" playerNameSearched>
                                            </div>
                                            <div class="KDA">
                                                <div class="playerKillSearched" id="playerKillSearched" playerKillSearched></div>
                                                <div class="playerDeathsSearched" id="playerDeathsSearched" playerDeathsSearched></div>
                                                <div class="playerAssistsSearched" id="playerAssistsSearched" playerAssistsSearched></div>
                                            </div>
                                            <div class="playerKDASearched" id="playerKDASearched" playerKDASearched>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sChamp">
                    <span class>Search a Champion</span>
                    <input class="sChamp_txt" id="sChamp_txt" type="search" placeholder="Choose a Champion">
                    <div class="listOptions" id="listOptions">
                    </div>
                    <button type="button" class="sChampSearchBTN" id="sChampSearchBTN"></button>
                    <div class="modalChamp" id="modalChamp">
                        <!-- Modal content -->
                        <div class="modal-contentChamp">
                            <div class="modal-headerChamp" id="modal-headerChamp">
                                <span class="closeChamp" id="closeChamp">&times;</span>
                                <div id="headerChamp"></div>
                            </div>
                            <div class="modal-bodyChamp">
                                <div class=champStats>
                                    <div class="dmgStats">
                                        <div class="AD" id="AD"></div>
                                        <div class="AS" id="AS"></div>
                                        <div class="AR" id="AR"></div>
                                        <div class="MS" id="MS"></div>
                                    </div>
                                    <div class="otherStats">
                                        <div class="HP" id="HP"></div>
                                        <div class="ARM" id="ARM"></div>
                                        <div class="MR" id="MR"></div>
                                        <div class="MN" id="MN"></div>
                                    </div>
                                </div>
                                <br><br>
                                <div class="champAbilities">
                                    <div class="P" id="P"></div>
                                    <br>
                                    <div class="Q" id="Q"></div>
                                    <br>
                                    <div class="W" id="W"></div>
                                    <br>
                                    <div class="E" id="E"></div>
                                    <br>
                                    <div class="R" id="R"></div>
                                </div>
                                <br>
                                <div class="recommenededItems">
                                    Items to Consider:
                                    <div class="r1" id="r1"></div>
                                    <div class="r2" id="r2"></div>
                                    <div class="r3" id="r3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Legal"><span class>This project is not endorsed by Riot Games and does not reflect
                    the views or opinions of Riot Games or anyone officially involved in producing
                    or managing League of Legends. League of Legends and Riot Games are trademarks or
                    registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</span></div>
        </div>
        <div class="FlexAll Flex2">
            <div class="modalImg" id="modalImg">
                <script src="getPlayer.js"></script>
                <script src="champSearch.js"></script>
            </div>

            <div class="userBuilds">
                <div class="createFilter">
                    <button type="button" class="createButton"><i class="fa-solid fa-circle-plus" style="font-size: 32px;"></i></button>
                    <!-- The Modal -->
                    <div class="modal">
                        <!-- Modal content -->
                        <div class="modal-content">
                            <div class="modal-header">
                                <span class="close">&times;</span>
                                <p>Create A Build</p>
                            </div>
                            <div class="modal-body">
                                <form action="connect.php" method="post">
                                    <div class="topCreate">
                                        <label for="buildName">Build Name:</label><input type="text" id="buildName" name="buildName">
                                        <label for="champs">Choose a Champion:</label>
                                        <select name="champs" id="champs">
                                        </select>
                                        <br><br>
                                    </div>
                                    <div class="createItems">
                                        <div class="first3">
                                            <label for="item1">First Item built:</label>
                                            <select name="item1" id="item1">
                                            </select>
                                            <label for="item2">Second Item built:</label>
                                            <select name="item2" id="item2">
                                            </select>
                                            <label for="item3">Third Item built:</label>
                                            <select name="item3" id="item3">
                                            </select>
                                            <br><br>
                                        </div>
                                        <div class="last3">
                                            <label for="item4">Fourth Item built:</label>
                                            <select name="item4" id="item4">
                                            </select>
                                            <label for="item5">Fifth Item built:</label>
                                            <select name="item5" id="item5">
                                            </select>
                                            <label for="item6">Sixth Item built:</label>
                                            <select name="item6" id="item6">
                                            </select>
                                        </div>
                                    </div>
                                    <div class="createSS">
                                        <label for="summonerSpells1">Summoner Spell:</label>
                                        <select name="summonerSpells1" id="summonerSpells1">
                                        </select>
                                        <label for="summonerSpells2">Summoner Spell:</label>
                                        <select name="summonerSpells2" id="summonerSpells2">
                                        </select>
                                        <br><br>
                                    </div>
                                    <div class="createRunes">
                                        <div class="createMainRunes">
                                            <label for="mainKeystone">Main Keystone:</label>
                                            <select name="mainKeystone" id="mainKeystone">
                                            </select>

                                            <label for="mainRune">Main Rune:</label>
                                            <select name="mainRune" id="mainRune">
                                            </select>

                                            <label for="mainRune2">Main Rune 2 Line:</label>
                                            <select name="mainRune2" id="mainRune2">
                                            </select>

                                            <label for="mainRune3">Main Rune 3 Line:</label>
                                            <select name="mainRune3" id="mainRune3">
                                            </select>

                                            <label for="mainRune4">Main Rune 4 Line:</label>
                                            <select name="mainRune4" id="mainRune4">
                                            </select>

                                        </div>

                                        <div class="createSubRunes">
                                            <label for="subKeystone">Sub Keystone:</label>
                                            <select name="subKeystone" id="subKeystone">
                                            </select>

                                            <label for="subRune1">Sub Rune Option 1:</label>
                                            <select name="subRune1" id="subRune1">
                                            </select>

                                            <label for="subRune2">Sub Rune Option 2:</label>
                                            <select name="subRune2" id="subRune2">
                                            </select>

                                        </div>
                                    </div>
                                    <br>
                                    <div class="createAddRunes">
                                        <label for="addRune1">Additional Rune Option 1:</label>
                                        <select name="addRune1" id="addRune1">
                                            <option value="perk-images/StatMods/StatModsAdaptiveForceIcon.png">Adaptive Force</option>
                                            <option value="perk-images/StatMods/StatModsAttackSpeedIcon.png">Attack Speed</option>
                                            <option value="perk-images/StatMods/StatModsCDRScalingIcon.png">Ability Haste</option>
                                        </select>

                                        <label for="addRune2">Additional Rune Option 2:</label>
                                        <select name="addRune2" id="addRune2">
                                            <option value="perk-images/StatMods/StatModsAdaptiveForceIcon.png">Adaptive Force</option>
                                            <option value="perk-images/StatMods/StatModsArmorIcon.png">Armor</option>
                                            <option value="perk-images/StatMods/StatModsMagicResIcon.png">Magic Resist</option>
                                        </select>

                                        <label for="addRune3">Additional Rune Option 3:</label>
                                        <select name="addRune3" id="addRune3">
                                            <option value="perk-images/StatMods/StatModsHealthScalingIcon.png">Health</option>
                                            <option value="perk-images/StatMods/StatModsArmorIcon.png">Armor</option>
                                            <option value="perk-images/StatMods/StatModsMagicResIcon.png">Magic Resist</option>
                                        </select>
                                    </div>
                                    <br><br>
                                    <div class="createMaxSkills">
                                        <div class="first2">
                                            <label for="maxSkill1">Max skill option 1:</label>
                                            <select name="maxSkill1" id="maxSkill1">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>
                                            <label for="maxSkill2">Max skill option 2:</label>
                                            <select name="maxSkill2" id="maxSkill2">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>
                                        </div>
                                        <div class="last2">
                                            <label for="maxSkill3">Max skill option 3:</label>
                                            <select name="maxSkill3" id="maxSkill3">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="maxSkill4">Max skill option 4:</label>
                                            <select name="maxSkill4" id="maxSkill4">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br><br>
                                    <div class="createSkillOrder">
                                        <div class="first9">
                                            <label for="levelSkill1">1:</label>
                                            <select name="levelSkill1" id="levelSkill1">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill2">2:</label>
                                            <select name="levelSkill2" id="levelSkill2">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill3">3:</label>
                                            <select name="levelSkill3" id="levelSkill3">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill4">4:</label>
                                            <select name="levelSkill4" id="levelSkill4">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill5">5:</label>
                                            <select name="levelSkill5" id="levelSkill5">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill6">6:</label>
                                            <select name="levelSkill6" id="levelSkill6">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill7">7:</label>
                                            <select name="levelSkill7" id="levelSkill7">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill8">8:</label>
                                            <select name="levelSkill8" id="levelSkill8">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill9">9:</label>
                                            <select name="levelSkill9" id="levelSkill9">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>
                                        </div>
                                        <div class="last9">
                                            <label for="levelSkill10">10:</label>
                                            <select name="levelSkill10" id="levelSkill10">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill11">11:</label>
                                            <select name="levelSkill11" id="levelSkill11">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill12">12:</label>
                                            <select name="levelSkill12" id="levelSkill12">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill13">13:</label>
                                            <select name="levelSkill13" id="levelSkill13">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill14">14:</label>
                                            <select name="levelSkill14" id="levelSkill14">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill15">15:</label>
                                            <select name="levelSkill15" id="levelSkill15">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill16">16:</label>
                                            <select name="levelSkill16" id="levelSkill16">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill17">17:</label>
                                            <select name="levelSkill17" id="levelSkill17">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>

                                            <label for="levelSkill18">18:</label>
                                            <select name="levelSkill18" id="levelSkill18">
                                                <option value="Q">Q</option>
                                                <option value="W">W</option>
                                                <option value="E">E</option>
                                                <option value="R">R</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br><br>

                                    <label for="paragraph">Additional comments</label><br>
                                    <textarea id="paragraph" name="paragraph" rows="6" cols="79"></textarea>
                                    <input type="submit">
                                </form>
                            </div>
                        </div>
                    </div>

                    <script src="formChamps.js" defer></script>
                    <script src="newEntryModal.js"></script>
                    <script src="allRunes.js"></script>
                </div>
                <?php foreach ($builds as $build) { ?>
                    <div class="uBuild">
                        <button type="button" class="collapsible">
                            <div class="champPicture"><img src="http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/<?php echo htmlspecialchars($build['champ']) ?>.png" style="width:100px;height:100px;"></div>
                            <div class="champNameSkillOrder">
                                <div class="champName"><span class><?php echo htmlspecialchars($build['champ']) ?></span></div>
                                <div class="champSkillOrder">
                                    <div class="skills skill1"><?php echo htmlspecialchars($build['skill1']) ?></div>
                                    <div class="skills skill2"><?php echo htmlspecialchars($build['skill2']) ?></div>
                                    <div class="skills skill3"><?php echo htmlspecialchars($build['skill3']) ?></div>
                                    <div class="skills skill4"><?php echo htmlspecialchars($build['skill4']) ?></div>
                                </div>
                            </div>
                            <div class="champRS">
                                <div class="champRunes">
                                    <div class="rune1"><img src="https://ddragon.canisback.com/img/<?php echo htmlspecialchars($build['mainKeystone']) ?>" style="width:40px;height:40px;"></div>
                                    <div class="rune2"><img src="https://ddragon.canisback.com/img/<?php echo htmlspecialchars($build['subKeystone']) ?>" style="width:40px;height:40px;"></div>
                                </div>
                                <div class="champSS">
                                    <div class="ss1"><img src="http://ddragon.leagueoflegends.com/cdn/12.8.1/img/spell/<?php echo htmlspecialchars($build['ss1']) ?>" style="width:40px;height:40px;"></div>
                                    <div class="ss2"><img src="http://ddragon.leagueoflegends.com/cdn/12.8.1/img/spell/<?php echo htmlspecialchars($build['ss2']) ?>" style="width:40px;height:40px;"></div>
                                </div>
                            </div>
                            <div class="titleItems">
                                <div class="buildTitle"><?php echo htmlspecialchars($build['buildName']) ?></div>
                                <div class="buildItems">
                                    <div class="buildItems1"><img src="http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/<?php echo htmlspecialchars($build['item1']) ?>" style="width:40px;height:40px;"></div>
                                    <div class="buildItems2"><img src="http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/<?php echo htmlspecialchars($build['item2']) ?>" style="width:40px;height:40px;"></div>
                                    <div class="buildItems3"><img src="http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/<?php echo htmlspecialchars($build['item3']) ?>" style="width:40px;height:40px;"></div>
                                    <div class="buildItems4"><img src="http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/<?php echo htmlspecialchars($build['item4']) ?>" style="width:40px;height:40px;"></div>
                                    <div class="buildItems5"><img src="http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/<?php echo htmlspecialchars($build['item5']) ?>" style="width:40px;height:40px;"></div>
                                    <div class="buildItems6"><img src="http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/<?php echo htmlspecialchars($build['item6']) ?>" style="width:40px;height:40px;"></div>
                                </div>
                            </div>
                        </button>
                        <div class="content">
                            <div class="skillorderRunes">
                                <div class="skillOrder">
                                    <table>
                                        <tr>
                                            <th>Level</th>
                                            <th>Skill</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td><?php echo htmlspecialchars($build['l1']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><?php echo htmlspecialchars($build['l2']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><?php echo htmlspecialchars($build['l3']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><?php echo htmlspecialchars($build['l4']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td><?php echo htmlspecialchars($build['l5']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td><?php echo htmlspecialchars($build['l6']) ?></td>
                                        </tr>
                                    </table>
                                    <table>
                                        <tr>
                                            <th>Level</th>
                                            <th>Skill</th>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td><?php echo htmlspecialchars($build['l7']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td><?php echo htmlspecialchars($build['l8']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td><?php echo htmlspecialchars($build['l9']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td><?php echo htmlspecialchars($build['l10']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td><?php echo htmlspecialchars($build['l11']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td><?php echo htmlspecialchars($build['l12']) ?></td>
                                        </tr>
                                    </table>
                                    <table>
                                        <tr>
                                            <th>Level</th>
                                            <th>Skill</th>
                                        </tr>
                                        <tr>
                                            <td>13</td>
                                            <td><?php echo htmlspecialchars($build['l13']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>14</td>
                                            <td><?php echo htmlspecialchars($build['l14']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>15</td>
                                            <td><?php echo htmlspecialchars($build['l15']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td><?php echo htmlspecialchars($build['l16']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>17</td>
                                            <td><?php echo htmlspecialchars($build['l17']) ?></td>
                                        </tr>
                                        <tr>
                                            <td>18</td>
                                            <td><?php echo htmlspecialchars($build['l18']) ?></td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="runes">
                                    <div class="MainRunes">
                                        <div class="mainRune!"><img src="https://ddragon.canisback.com/img/<?php echo htmlspecialchars($build['mainRune']) ?>" style="width:40px;height:40px;"></div>
                                        <div class="mainRune1!"><img src="https://ddragon.canisback.com/img/<?php echo htmlspecialchars($build['mainRune1']) ?>" style="width:40px;height:40px;"></div>
                                        <div class="mainRune2!"><img src="https://ddragon.canisback.com/img/<?php echo htmlspecialchars($build['mainRune2']) ?>" style="width:40px;height:40px;"></div>
                                        <div class="mainRune3!"><img src="https://ddragon.canisback.com/img/<?php echo htmlspecialchars($build['mainRune3']) ?>" style="width:40px;height:40px;"></div>
                                    </div>
                                    <div class="SupportRunes">
                                        <div class="supportRune1!"><img src="https://ddragon.canisback.com/img/<?php echo htmlspecialchars($build['subRune1']) ?>" style="width:40px;height:40px;"></div>
                                        <div class="supportRune2!"><img src="https://ddragon.canisback.com/img/<?php echo htmlspecialchars($build['subRune2']) ?>" style="width:40px;height:40px;"></div>

                                    </div>
                                    <div class="RuneAttributes">
                                        <div class="attribute1!"><img src="https://ddragon.canisback.com/img/<?php echo htmlspecialchars($build['addRune1']) ?>" style="width:40px;height:40px;"></div>
                                        <div class="attribute2!"><img src="https://ddragon.canisback.com/img/<?php echo htmlspecialchars($build['addRune2']) ?>" style="width:40px;height:40px;"></div>
                                        <div class="attribute3!"><img src="https://ddragon.canisback.com/img/<?php echo htmlspecialchars($build['addRune3']) ?>" style="width:40px;height:40px;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="mainContent"><?php echo htmlspecialchars($build['paragraph']) ?></div>
                        </div>

                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
    <script src="collapse.js"></script>
</body>

</html>
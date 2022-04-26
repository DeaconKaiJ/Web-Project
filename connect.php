<?php
$buildName = $_POST['buildName'];
$champs = $_POST['champs'];

$item1 = $_POST['item1'];
$item2 = $_POST['item2'];
$item3 = $_POST['item3'];
$item4 = $_POST['item4'];
$item5 = $_POST['item5'];
$item6 = $_POST['item6'];

$summonerSpells1 = $_POST['summonerSpells1'];
$summonerSpells2 = $_POST['summonerSpells2'];

$mainKeystone = $_POST['mainKeystone'];
$mainRune = $_POST['mainRune'];
$mainRune2 = $_POST['mainRune2'];
$mainRune3 = $_POST['mainRune3'];
$mainRune4 = $_POST['mainRune4'];

$subKeystone = $_POST['subKeystone'];
$subRune1 = $_POST['subRune1'];
$subRune2 = $_POST['subRune2'];

$addRune1 = $_POST['addRune1'];
$addRune2 = $_POST['addRune2'];
$addRune3 = $_POST['addRune3'];

$maxSkill1 = $_POST['maxSkill1'];
$maxSkill2 = $_POST['maxSkill2'];
$maxSkill3 = $_POST['maxSkill3'];
$maxSkill4 = $_POST['maxSkill4'];

$levelSkill1 = $_POST['levelSkill1'];
$levelSkill2 = $_POST['levelSkill2'];
$levelSkill3 = $_POST['levelSkill3'];
$levelSkill4 = $_POST['levelSkill4'];
$levelSkill5 = $_POST['levelSkill5'];
$levelSkill6 = $_POST['levelSkill6'];
$levelSkill7 = $_POST['levelSkill7'];
$levelSkill8 = $_POST['levelSkill8'];
$levelSkill9 = $_POST['levelSkill9'];
$levelSkill10 = $_POST['levelSkill10'];
$levelSkill11 = $_POST['levelSkill11'];
$levelSkill12 = $_POST['levelSkill12'];
$levelSkill13 = $_POST['levelSkill13'];
$levelSkill14 = $_POST['levelSkill14'];
$levelSkill15 = $_POST['levelSkill15'];
$levelSkill16 = $_POST['levelSkill16'];
$levelSkill17 = $_POST['levelSkill17'];
$levelSkill18 = $_POST['levelSkill18'];

$paragraph = $_POST['paragraph'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'userbuilds');
if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into userbuild(buildName, champ, mainKeystone, mainRune, mainRune2, mainRune3, mainRune4,
        subKeystone, subRune1, subRune2, addRune1, addRune2, addRune3, ss1, ss2, item1, item2, item3, item4, item5, item6, skill1,
        skill2, skill3, skill4, l1, l1, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, paragraph) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param(
        "ssssssssssssssssssssssssssssssssssssssssssss",
        $buildName,
        $champs,
        $mainKeystone,
        $mainRune,
        $mainRune2,
        $mainRune3,
        $mainRune4,
        $subKeystone,
        $subRune1,
        $subRune2,
        $addRune1,
        $addRune2,
        $addRune3,
        $summonerSpells1,
        $summonerSpells2,
        $item1,
        $item2,
        $item3,
        $item4,
        $item5,
        $item6,
        $maxSkill1,
        $maxSkill2,
        $maxSkill3,
        $maxSkill4,
        $levelSkill1,
        $levelSkill2,
        $levelSkill3,
        $levelSkill4,
        $levelSkill5,
        $levelSkill6,
        $levelSkill7,
        $levelSkill8,
        $levelSkill9,
        $levelSkill10,
        $levelSkill11,
        $levelSkill12,
        $levelSkill13,
        $levelSkill14,
        $levelSkill15,
        $levelSkill16,
        $levelSkill17,
        $levelSkill18,
        $paragraph
    );
    $execval = $stmt->execute();
    echo $execval;
    echo "Registration successfully...";
    $stmt->close();
    $conn->close();
}
?>
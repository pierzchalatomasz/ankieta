<?php

    usleep(100000);
    $db = new SQLite3('database.db');
    $stats = getStats($db);
    $db->close();
    echo json_encode($stats);

    function getStats($db){
        $singleChoiceAnswers = getColSums($db, "singleChoiceAnswers");
        $multiChoiceAnswers = getColSums($db, "multiChoiceAnswers");

        return array(
            "singleChoiceAnswers" => $singleChoiceAnswers,
            "multiChoiceAnswers" => $multiChoiceAnswers);
    }

    function getColSums($db, $table){
        $selectData = $db->query("
            SELECT SUM(ans0), SUM(ans1), SUM(ans2), SUM(ans3), SUM(ans4), SUM(ans5) 
            FROM {$table}
        ")->fetchArray();

        $colSums = array(0, 0, 0, 0, 0, 0);
        for ($i=0; $i < count($colSums) ; $i++) 
            $colSums[$i] = $selectData[$i];

        return $colSums;
    }


?>
<?php
    $json = $_POST["data"];
    $db = getDatabase();
    saveAnswers($db, $json);
    $db->close();

    echo $json;

    function getDatabase(){
        if(!file_exists('database.db')){
            $db = new SQLite3('database.db');
            createTable($db);
        } else
            $db = new SQLite3('database.db');
        return $db;
    }

    function createTable($db){
        $tables = array('singleChoiceAnswers', 'multiChoiceAnswers');    
        foreach( $tables as $table )
            $db->query("
                CREATE TABLE {$table}(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                ans0 INTEGER,
                ans1 INTEGER,
                ans2 INTEGER,
                ans3 INTEGER,
                ans4 INTEGER,
                ans5 INTEGER);
            ");
    }

    function saveAnswers($db, $json){
        $submittedArray = json_decode($json);
        $name = $submittedArray->{'name'};
        $singleChoiceAnswer = $submittedArray->{'singleChoiceQuestion'};
        $multiChoiceAnswers = $submittedArray->{'multiChoiceQuestion'};
        saveSingleChoiceAnswer($db, $name, $singleChoiceAnswer);
        saveMultiChoiceAnswers($db, $name, $multiChoiceAnswers);
    }

    function saveSingleChoiceAnswer($db, $name, $singleChoiceAnswer){
        $answerArray = array(0, 0, 0, 0, 0, 0);
        $answerArray[$singleChoiceAnswer] = 1;
        insertAnswer($db, "singleChoiceAnswers", $name, $answerArray);
    }

    function saveMultiChoiceAnswers($db, $name, $multiChoiceAnswers){
        $answerArray = array(0, 0, 0, 0, 0, 0);
        foreach($multiChoiceAnswers as $ans)
            $answerArray[$ans] = 1;
        insertAnswer($db, "multiChoiceAnswers", $name, $answerArray);
    }

    function insertAnswer($db, $table, $name, $ans){
        $db->query("
            INSERT INTO {$table} VALUES(
                null, '{$name}', {$ans[0]}, {$ans[1]}, {$ans[2]}, {$ans[3]}, {$ans[4]}, {$ans[5]});
        ");
    }
?>
<?php
//TEST
 /*  $json = '
    { "name": "Ciekawe pytanie",
        "singleChoiceQuestion": null,
        "multiChoiceQuestion": [2,3,4]
    }';
*/

    $json = $_POST["jsonFilename"]; //name to replace
    $db = getDatabase();
    saveAnswerAndSendStats($db, $json);


    function getDatabase(){
        if(!file_exists('database.db')){
            $db = new SQLite3('database.db');
            createTables($db);
        } else
            $db = new SQLite3('database.db');

        return $db;
    }

    function saveAnswerAndSendStats($db, $json){
        $submittedArray = json_decode($json);
        $question = $submittedArray->{'name'};
        $singleChoiceAnswer = $submittedArray->{'singleChoiceQuestion'};
        $multiChoiceAnswers = $submittedArray->{'multiChoiceQuestion'};
    
        if($singleChoiceAnswer !== null){
            saveSingleChoiceAnswer($db, $question, $singleChoiceAnswer);
            $stats = getStats($db, "singleChoiceQuestions", $question);
        } else {
            saveMultiChoiceAnswers($db, $question, $multiChoiceAnswers);
            $stats = getStats($db, "multiChoiceQuestions", $question);
        }

        //stats = [glosy na odp0, ... , glosy na odp5]
        echo json_encode($stats);
    }

    function saveSingleChoiceAnswer($db, $question, $answer){
        $count = $db->query('
            SELECT COUNT(question) 
            FROM singleChoiceQuestions 
            WHERE question="'.$question.'";
        ')->fetchArray()[0];

        if($count == 0)
            $db->query('
                INSERT INTO singleChoiceQuestions VALUES(
                null, "'.$question.'", 0, 0, 0, 0, 0, 0);');
   
        $answer = "ans".$answer;
        $db->query('
                UPDATE singleChoiceQuestions 
                SET '.$answer.'='.$answer.'+1 
                WHERE question = "'.$question.'"');
    }

    function saveMultiChoiceAnswers($db, $question, $answers){
            $count = $db->query('
                SELECT COUNT(question) 
                FROM multiChoiceQuestions 
                WHERE question="'.$question.'";
                ')->fetchArray()[0];

            if($count == 0)
            $db->query('
                INSERT INTO multiChoiceQuestions VALUES(
                null, "'.$question.'", 0, 0, 0, 0, 0, 0);');

            foreach($answers as $ansNum){
                $answer = "ans".$ansNum;
                $db->query('
                    UPDATE multiChoiceQuestions 
                    SET '.$answer.'='.$answer.'+1 
                    WHERE question = "'.$question.'"');
            }
    }
 
    function createTables($db){
        $tables = array("1" => "singleChoiceQuestions", "2" => "multiChoiceQuestions");
        foreach( $tables as $key => $table )
            $db->query('
                CREATE TABLE '.$table.'(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                question TEXT,
                ans0 INTEGER,
                ans1 INTEGER,
                ans2 INTEGER,
                ans3 INTEGER,
                ans4 INTEGER,
                ans5 INTEGER);');
    }

    function getStats($db, $table, $question){
        return $db->query('
            SELECT ans0, ans1, ans2, ans3, ans4, ans5 
            FROM '.$table.' 
            WHERE question="'.$question.'";')->fetchArray();
    }

?>

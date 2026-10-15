<?php

include('delicious.php');

$query = $_REQUEST['query'];
$queries = explode(' ', $query);

$symmetry = array();

foreach ($queries as $word){

	$symmetry[$word] = array();

	$thesaurusQuery = mysql_query("SELECT term.word FROM term, synset, term term2 WHERE synset.is_visible = 1 AND synset.id = term.synset_id AND term.synset_id AND term2.synset_id = synset.id AND term2.word = '" . $word . "'");

	while ($oneword = mysql_fetch_assoc($thesaurusQuery)){
		array_push($symmetry[$word], $oneword['word']);
	}
}

echo json_encode($symmetry);

?>
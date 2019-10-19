#!/usr/local/bin/bash
clear
if [ -z "$1" ]
then
 echo "Simple utility to run a test cafe js file searching it ";
 echo "under ./test folder, with recursion"
 echo "" 
 echo "Usage $0 file.js or some unique name piece"
 echo "the unix/linux find utility is used"
 echo "$0 PPT-745"
 exit
fi


WHAT_TO_RUN=$(find ./test -type f -name "$1*.js")
TESTCAFE='testcafe --skip-js-errors chrome --cfg=gitlab.prod.json'
echo "I will run "$TESTCAFE $WHAT_TO_RUN;
$TESTCAFE $WHAT_TO_RUN
# cfcamp2019
simple examples used for the CFCAMP2019 Talk  
**End To End Testing Colfusion Applications with Test Cafe - 117-18th October 2019 - Munich**

## TestCafeStudio example
./TestCafeStudio/cfcamp2019.testcafe

## testcafe installation
See https://devexpress.github.io/testcafe/documentation/using-testcafe/installing-testcafe.html

I normally prefer this way  

 1. install testcafe globally 
 2. install testcafe locally 
 3. install additional modules locally
  >for this examples you will need:
   >- faker   
   >- module-alias  
   >- moment   
   >- minimist   
   >- tracer

But I'm not an node.js expert, then maybe you find a better solution.

## how to run the examples
there is a bash script that can be used to run the examples.  
adjust the location of your bash if needed.
to run:
./runit.chrome.sh **< TEST CASE PREFIX >**  

./runit.chrome.sh **GL-04**  
will run **./test/users/sign_in/GL-04.loginKO.js**


Or you can run the command  
testcafe --skip-js-errors chrome --cfg=gitlab.prod.json **./test/users/sign_in/GL-04.loginKO.js**  

testcafe --skip-js-errors chrome --cfg=gitlab.prod.json **< TEST SCRIPT >**  


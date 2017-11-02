tilapia :
	tsc
	node test/test.js
j :
	node test/test.js
tests :
	mocha -r ts-node/register test/**/*.test.ts
#!/bin/bash
# -----------------------------------------------------------------------------
# Build-time script to copy configs based on environment.
# -----------------------------------------------------------------------------

if [ $1 == "local" ]
then
	echo Not copying configs for local
fi

if [ $1 == "dev" ]
then
	echo Copying configs for dev
	rm ./src/config.js
	cp ./src/config-dev.js ./src/config.js
fi

if [ $1 == "stg" ]
then
	echo Copying configs for stg
	rm ./src/config.js
	cp ./src/config-stg.js ./src/config.js
fi

if [ $1 == "prod" ]
then
	echo Copying configs for prod
	rm ./src/config.js
	cp ./src/config-prod.js ./src/config.js
fi
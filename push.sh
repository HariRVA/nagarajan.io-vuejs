#!/bin/bash
echo Building Static Files...
npm run generate
echo Pushing to AWS S3
aws s3 cp dist s3://nagarajan.io --recursive

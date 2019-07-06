#!/usr/bin/env bash

cp ./support/README.md ./README.md
echo "\`\`\`" >> ./README.md
./aws-sdk-mock.js >> ./README.md
echo "\`\`\`" >> ./README.md

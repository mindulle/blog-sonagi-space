#!/bin/bash
nohup npx next dev --webpack -p 3123 < /dev/null > dev_server.log 2>&1 &

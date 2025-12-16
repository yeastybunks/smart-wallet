#!/usr/bin/env bash
#
# Simple script to verify that deployed smart wallet addresses exist
# Usage: ./scripts/check_deployment.sh <rpc_url> <entry_point> <factory>

RPC_URL=${1:-"http://127.0.0.1:8545"}
ENTRY_POINT=$2
FACTORY=$3

echo "Checking contract deployments on $RPC_URL"

if [ -z "$ENTRY_POINT" ] || [ -z "$FACTORY" ]; then
  echo "Usage: ./check_deployment.sh <rpc> <entry_point_address> <factory_address>"
  exit 1
fi

echo "EntryPoint: $ENTRY_POINT"
echo "Factory: $FACTORY"

for addr in "$ENTRY_POINT" "$FACTORY"; do
  CODE=$(cast rpc eth_getCode "$addr" --rpc-url "$RPC_URL")
  if [ "$CODE" = "0x" ]; then
    echo "⚠️ Contract at $addr has no bytecode!"
  else
    echo "✅ Contract at $addr is deployed."
  fi
done

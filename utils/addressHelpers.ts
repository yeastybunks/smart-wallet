// utils/addressHelpers.ts

/** Check if a string is a valid hex string */
export function isHex(value: unknown): value is `0x${string}` {
  return typeof value === "string" && value.startsWith("0x") && /^0x[0-9a-fA-F]+$/.test(value);
}

/** Simple Ethereum address validation (42 chars including 0x) */
export function isValidEthAddress(address: unknown): boolean {
  return typeof address === "string" && isHex(address) && address.length === 42;
}

/** Shorten an Ethereum address for display */
export function shortenEthAddress(address: string, left = 6, right = 4): string {
  if (!isValidEthAddress(address)) return address;
  return `${address.slice(0, left + 2)}…${address.slice(-right)}`;
}

export interface SmartWalletConfig {
  rpcUrl: string;
  chainId: number;
}

export function validateSmartWalletConfig(config: SmartWalletConfig): void {
  if (!config) {
    throw new Error("Smart wallet configuration is required");
  }

  if (!config.rpcUrl || typeof config.rpcUrl !== "string") {
    throw new Error(
      "Invalid smart wallet configuration: 'rpcUrl' must be a non-empty string"
    );
  }

  if (
    typeof config.chainId !== "number" ||
    !Number.isInteger(config.chainId)
  ) {
    throw new Error(
      "Invalid smart wallet configuration: 'chainId' must be an integer"
    );
  }
}
// Example usage (paste into wallet initialization file)

import { validateSmartWalletConfig } from "./utils/validateConfig";

export function initSmartWallet(config: SmartWalletConfig) {
  validateSmartWalletConfig(config);
  // existing initialization logic
}

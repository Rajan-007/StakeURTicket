import React from "react";
import truncateEthAddress from "truncate-eth-address";

export const WalletDetails = ({ wallet }) => {
  return (
    <div className="items-center justify-center space-y-4">
      <td className=" px-6 pt-3">
        Add: {truncateEthAddress(wallet.account.address)}
      </td>
    </div>
  );
};

// import useSolBalance from "@/hooks/useSolBalance";
// import { cn } from "@/utils/cn";
// import { balanceDisplayer } from "@/utils/convert";
// import { isMobile } from "@/utils/devices";
// import { ellipsisCenter } from "@/utils/ellipsis";
// import { useWallet } from "@solana/wallet-adapter-react";
// import {
//   WalletDisconnectButton,
//   WalletMultiButton,
// } from "@solana/wallet-adapter-react-ui";
// import { useMemo } from "react";
// import { IoIosLogOut } from "react-icons/io";

// export default function ConnectButton({ className }: { className?: string }) {
//   const { publicKey } = useWallet();
//   const address = useMemo(() => publicKey?.toString(), [publicKey]);
//   const { balance } = useSolBalance();
//   const formatBalance = () => {
//     return <>{balanceDisplayer(balance, 3)} SOL</>;
//   };

//   if (address) {
//     return (
//       <div className="relative group">
//         <button
//           type="button"
//           style={{
//             background:
//               "linear-gradient(80.17deg, #27BEFF 8.52%, #6FD4FF 55.08%)",
//           }}
//           className={cn(
//             "info-wallet h-[56px] text-xs font-normal flex items-center justify-center rounded-[16px] ",
//             "md:px-63 px-3 border border-black border-opacity-10 divide-x-2 divide-black divide-opacity-30",
//             className
//           )}
//         >
//           <span className="px-2 text-black">{formatBalance()}</span>
//           <span className={cn("px-2", "text-black")}>
//             {ellipsisCenter({
//               str: address,
//               limit: isMobile() ? 4 : 6,
//             })}
//           </span>
//           <WalletDisconnectButton>
//             <IoIosLogOut />
//           </WalletDisconnectButton>
//         </button>
//       </div>
//     );
//   }
//   return (
//     <>
//       <WalletMultiButton>
//         <span className="text-base items-center text-center">
//           Connect Wallet
//         </span>
//       </WalletMultiButton>
//     </>
//   );
// }

import { useBalance } from "wagmi";

export default function ContractBalance(props) {
  const { data, isError, isLoading } = useBalance({
    addressOrName: "awkweb.eth",
  });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return (
    <div
      style={{
        padding: `1ex 1em`,
        boxShadow: `0.5ex 0.5ex 0 0 black`,
        border: `1px solid black`,
        margin: `1ex auto`,
        width: `50ch`,
      }}
    >
      Currently holding: {data?.formatted.substring(0, 5)}
      {data?.symbol}
    </div>
  );
}

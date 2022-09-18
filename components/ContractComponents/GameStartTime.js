

export default function GameStartTime(props) {

    let now = new Date();
    const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false,
      };
    now = new Intl.DateTimeFormat('en-US', options).format(now);
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
      Game Started: {now}
    </div>
  );
}

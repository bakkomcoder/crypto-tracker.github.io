import { useParams } from "react-router";

interface RouteParams {
  coinId: string;
}

function Coin() {
  //   return <h1>Coin</h1>;
  const { coinId } = useParams<RouteParams>();
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;

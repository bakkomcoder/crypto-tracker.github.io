import { useParams } from "react-router";

interface RouteParams {
  coinId: string;
}

function Coin() {
  //   return <h1>Coin</h1>;
  // url에서 가져오려면 useParams()를 써야하고, '<>' 괄호 안이 빈 오브젝트이기 때문에 {coinId:string}을 명시해줘야 한다.
  // 동일한 코드로, interface 를 통해 타입스크립트에게 알려줄 수 있다.
  // 즉, 타입스크립트에게 useParams가 coinId를 포함하는 오브젝트를 반환할 거이라는 걸 말해주는 것이다.
  const { coinId } = useParams<RouteParams>();
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;

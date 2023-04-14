// API를 fetch하고 json을 return하는 함수를 만들었다. (Coins.tsx 파일 return 이하에서 API와 관련된 코드를 가져옴)

const BASE_URL = "https://api.coinpaprika.com/v1";

// fetchCoins는 json을 return 한다. fetchCoins가 끝나면 react query는 그 함수의 데이터를 여기 data에 넣어준다.
export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

// Coin screen에 너무 많은 state가 있고 fetch가 발생 중이다. -> 리액트 쿼리 사용
// 먼저 fetcher 함수를 만든다. app.ts에서 만드는 이 함수는 Coins로부터 정보를 fetch 해야한다. (CoinIInfo, PriceInfo)
// coinInfo와 coinTickers를 fetch 하는 함수
export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

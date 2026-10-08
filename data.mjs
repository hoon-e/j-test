export const checkedDate = '2026년 10월 8일';

export const routes = [
  {
    id: 'awaji', name: '아와지섬·고베', mood: '섬 구경 후 고베에서 저녁',
    description: '다리를 건너 아와지섬을 둘러보고, 둘째 날에는 고베로 이동합니다.',
    image: 'bridge', imageAlt: '바다를 건너 아와지섬으로 이어지는 아카시 해협대교',
    firstDrive: '1시간 30분~2시간', firstDestination: '아와지섬 북부',
    nights: ['아와지섬 스모토', '고베 도심'],
    cities: ['난바', '아와지섬', '고베', '난바'],
    waypoints: ['Awaji Hanasajiki, Hyogo, Japan', 'Sumoto, Hyogo, Japan', 'Kobe, Hyogo, Japan'],
    tip: '스모토와 고베에서 각각 1박합니다. 다리 통행료가 있으며, 주말과 공휴일에는 이동 시간을 넉넉히 잡으세요.',
    days: [
      { title: '아와지섬 북부를 둘러보고 스모토로', location: '난바 → 아와지섬', drive: '운전 2~3시간', sleep: '스모토에서 숙박',
        stops: [
          { time: '아침', name: '난바 출발, 아카시 해협대교 건너기', text: '렌터카를 받아 아와지섬 북부로 이동합니다. 일찍 출발하면 중간에 들를 시간이 생깁니다.' },
          { time: '오전', place: 'hanasajiki', text: '언덕의 꽃밭을 걸어보세요. 피어 있는 꽃은 계절마다 다릅니다.' },
          { time: '점심', place: 'miele', text: '섬 서쪽 해안을 보며 버거나 그릴 요리를 먹습니다. 화요일은 휴무이므로 방문일을 확인하세요.' },
          { time: '오후', name: '스모토 숙소로 이동', text: '첫날 숙박할 스모토로 이동합니다. 저녁에는 해안을 걷거나 숙소 근처에서 식사하세요.' },
        ] },
      { title: '물의 절을 보고 고베로 이동', location: '아와지섬 → 고베', drive: '운전 2~3시간', sleep: '고베 도심에서 숙박',
        stops: [
          { time: '아침', name: '스모토에서 아침 식사와 체크아웃', text: '아침을 먹고 체크아웃한 뒤 섬 북쪽으로 이동합니다.' },
          { time: '낮', place: 'water-temple', text: '다리를 건너기 전에 안도 다다오가 설계한 물의 절을 둘러봅니다.' },
          { time: '오후', place: 'harborland', text: '고베 숙소에 체크인하고 차를 주차한 뒤, 해안가를 걸어서 둘러보세요.' },
          { time: '저녁', place: 'mouriya', text: '5명으로 미리 예약하세요. 별실은 3~15명 규모이며, 예약 가능 여부는 식당에 확인해야 합니다.' },
        ] },
      { title: '모토마치에서 오전을 보내고 난바로', location: '고베 → 난바', drive: '운전 1시간~1시간 30분', sleep: '난바로 복귀',
        stops: [
          { time: '아침', place: 'gold-kobe', text: '운동을 원하면 들러보세요. 비회원 이용권은 최대 5시간입니다. 신분증과 실내 운동화를 챙기고 현재 이용 조건을 확인하세요.' },
          { time: '오전', name: '모토마치 산책과 커피', text: '가게를 구경하거나 점심을 먹을 시간을 남겨두세요.' },
          { time: '오후', name: '난바로 돌아가기', text: '교통 정체와 주유, 렌터카 반납에 걸리는 시간을 여유 있게 잡으세요.' },
        ] },
    ],
  },
  {
    id: 'kyoto', name: '교토·비와호', mood: '교토 산책과 호숫가 1박',
    description: '교토의 대나무 숲과 신사를 둘러본 뒤, 일본에서 가장 큰 호수인 비와호로 갑니다.',
    image: 'kyoto', imageAlt: '교토 아라시야마의 대나무 사이로 들어오는 햇빛',
    firstDrive: '1시간 15분~2시간', firstDestination: '교토',
    nights: ['교토', '비와호 오쓰'],
    cities: ['난바', '교토', '비와호', '난바'],
    waypoints: ['Arashiyama, Kyoto, Japan', 'Kyoto, Japan', 'Otsu, Shiga, Japan'],
    tip: '주차 가능한 숙소를 고르세요. 교토 도심에서는 차를 세워두고 도보나 대중교통으로 관광지를 오가는 편이 좋습니다.',
    days: [
      { title: '아라시야마와 니시키 시장', location: '난바 → 교토', drive: '운전 1시간 30분~2시간 30분', sleep: '교토에서 숙박',
        stops: [
          { time: '아침', name: '난바에서 교토로 이동', text: '렌터카를 일찍 받아 이동합니다. 붐비기 전에 아라시야마 근처에 주차하세요.' },
          { time: '오전', place: 'arashiyama', text: '대나무 숲을 걷고 강가도 둘러볼 시간을 잡으세요.' },
          { time: '오후', place: 'nishiki', text: '먹거리 가게를 둘러봅니다. 음식은 걸으면서 먹지 말고 가게나 지정된 공간에서 드세요.' },
          { time: '저녁', name: '체크인 후 도보로 저녁 식사', text: '차를 주차해두고 식사하러 나가세요. 함께 앉아서 먹으려면 미리 예약하는 편이 좋습니다.' },
        ] },
      { title: '후시미 이나리에서 비와호로', location: '교토 → 비와호', drive: '운전 1시간~1시간 30분', sleep: '오쓰에서 숙박',
        stops: [
          { time: '이른 아침', place: 'fushimi', text: '붐비기 전에 도리이 길을 걸어보세요. 짧게 둘러볼지, 언덕 위까지 올라갈지 일행과 정하세요.' },
          { time: '오전', place: 'gold-kyoto', text: '운동을 원하면 비회원 이용권을 확인하세요. 여권 또는 재류카드, 일본 내 체류 주소, 실내 운동화가 필요합니다.' },
          { time: '오후', place: 'biwa', text: '오쓰로 이동해 비와호 남쪽 호숫가를 둘러봅니다. 이 일정은 호수 전체를 한 바퀴 도는 코스는 아닙니다.' },
          { time: '저녁', place: 'matsukiya', text: '오미 소고기를 먹고 싶다면 오쓰의 식당을 5명으로 예약하세요.' },
        ] },
      { title: '호숫가를 걷고 난바로 복귀', location: '비와호 → 난바', drive: '운전 1시간 30분~2시간', sleep: '난바로 복귀',
        stops: [
          { time: '아침', name: '호숫가에서 아침 식사', text: '체크아웃 전에 호숫가를 한 번 더 걸어보세요.' },
          { time: '낮', name: '난바로 출발', text: '이동 중 휴게소에서 점심을 먹고 쉴 시간을 남겨두세요.' },
          { time: '오후', name: '난바 도착', text: '주유를 마치고 약속한 시간 전에 렌터카를 반납하세요.' },
        ] },
    ],
  },
  {
    id: 'wakayama', name: '와카야마·시라하마', mood: '해변과 해산물 시장',
    description: '기이 해안을 따라 해변과 바위 해안을 둘러보고, 해산물 시장에 들릅니다.',
    image: 'shirahama', imageAlt: '와카야마 시라라하마의 흰 모래와 푸른 바다',
    firstDrive: '1시간 15분~1시간 45분', firstDestination: '와카야마 시내',
    nights: ['와카야마 시내', '시라하마'],
    cities: ['난바', '와카야마', '시라하마', '난바'],
    waypoints: ['Wakayama Marina City, Japan', 'Wakayama, Japan', 'Shirahama, Wakayama, Japan'],
    tip: '세 코스 중 돌아오는 운전시간이 가장 깁니다. 두 숙소의 주차를 예약하고, 마지막 날 오후는 복귀 이동을 위해 비워두세요.',
    days: [
      { title: '와카야마 마리나 시티에서 점심', location: '난바 → 와카야마', drive: '운전 1시간 30분~2시간 30분', sleep: '와카야마 시내에서 숙박',
        stops: [
          { time: '아침', name: '난바에서 와카야마로 출발', text: '렌터카를 받아 남쪽으로 이동합니다. 휴식과 마리나 시티 방문에 필요한 시간을 잡으세요.' },
          { time: '점심', place: 'kuroshio', text: '해산물 덮밥이나 초밥을 먹거나 시장 안의 다른 식당을 골라보세요.' },
          { time: '오후', name: '와카야마 숙소 체크인', text: '첫날 숙소에 짐을 풀고 시내를 둘러보세요.' },
          { time: '선택 일정', place: 'anytime-wakayama', text: '지점 이용 자격이 있는 에니타임 회원이라면 들를 수 있습니다. 비회원 체험은 지점마다 다르므로 방문 전에 이 지점에 문의하세요.' },
        ] },
      { title: '시라하마 해변과 센조지키', location: '와카야마 → 시라하마', drive: '운전 1시간 30분~2시간 30분', sleep: '시라하마에서 숙박',
        stops: [
          { time: '아침', name: '시라하마로 이동', text: '아침을 먹고 남쪽으로 이동합니다. 필요하면 중간에 쉬어가세요.' },
          { time: '점심', place: 'toretore', text: '시장을 둘러보고 해산물로 점심을 먹습니다. 붐비는 시간에는 5명이 함께 앉기 어려울 수 있습니다.' },
          { time: '오후', place: 'shirarahama', text: '흰 모래 해변을 걸어보세요. 수영 가능 여부는 계절과 날씨에 따라 다릅니다.' },
          { time: '늦은 오후', place: 'senjojiki', text: '날씨가 괜찮으면 해안의 넓은 암반을 둘러보세요. 밝을 때 방문하는 일정입니다.' },
        ] },
      { title: '해안 산책 후 오사카로 돌아가기', location: '시라하마 → 난바', drive: '운전 2시간 30분~3시간 30분', sleep: '난바로 복귀',
        stops: [
          { time: '아침', name: '아침 식사와 마지막 해안 산책', text: '체크아웃 전후로 숙소 근처를 짧게 걷거나 커피를 마실 시간을 잡으세요.' },
          { time: '오전', name: '오사카로 출발', text: '이번 여행에서 가장 긴 운전 구간입니다. 중간에 쉴 곳을 정해두세요.' },
          { time: '오후', name: '난바에서 렌터카 반납', text: '반납 시간에 늦지 않도록 교통 정체와 주유 시간을 넉넉히 잡으세요.' },
        ] },
    ],
  },
];

export const places = [
  { id: 'hanasajiki', route: 'awaji', category: 'sights', name: '아와지 하나사지키', area: '아와지섬 북부', image: 'flowers', imageAlt: '아와지 하나사지키의 꽃밭', imageLabel: '아와지 하나사지키', description: '바다가 내려다보이는 언덕에 계절마다 꽃이 피는 공원입니다. 다리를 건넌 뒤 처음 들르기 좋습니다.', note: '개화 상황은 계절마다 다릅니다. 공원 소식과 주차요금을 확인하세요.', source: 'https://awajihanasajiki.jp/', mapQuery: 'Awaji Hanasajiki, Hyogo, Japan' },
  { id: 'miele', route: 'awaji', category: 'food', name: '미엘레 더 다이너', area: '아와지섬 서쪽 해안', image: 'bridge', imageAlt: '아와지섬의 바다와 다리', imageLabel: '아와지섬 지역 사진', description: '바다가 보이는 미국식 다이너 겸 카페입니다. 버거와 그릴 요리, 디저트를 판매합니다.', note: '화요일 휴무입니다. 5명 좌석은 미리 문의하세요. 주차 안내는 공식 사이트에 있습니다.', source: 'https://miele-the-diner.com/', mapQuery: 'miele the DINER, Awaji, Japan' },
  { id: 'gold-kobe', route: 'awaji', category: 'gyms', name: '골드짐 고베 모토마치', area: '고베 도심', image: 'gym', imageAlt: '헬스장 분위기를 보여주는 덤벨 참고 사진', imageLabel: '헬스장 참고 사진', description: '모토마치 근처에서 근력 운동이나 유산소 운동을 할 수 있는 헬스장입니다. 고베에서 보내는 오전에 들를 수 있습니다.', note: '비회원 요금은 2,860엔이며 최대 5시간 이용할 수 있습니다. 신분증이 필요합니다. 실내 운동화와 입장 조건도 확인하세요.', source: 'https://www.goldsgym.jp/shop/kobe-motomachi/membership/', mapQuery: 'Golds Gym Kobe Motomachi, Japan' },
  { id: 'water-temple', route: 'awaji', category: 'sights', name: '혼푸쿠지 물의 절', area: '아와지섬 북부', description: '안도 다다오가 설계한 콘크리트 사찰로, 본당 위에 연못이 있습니다.', note: '둘러볼 시간을 확보하고 현재 입장 안내를 확인하세요.', source: 'https://www.japan.travel/en/spot/491/', mapQuery: 'Honpukuji Water Temple, Awaji, Japan' },
  { id: 'mouriya', route: 'awaji', category: 'food', name: '로열 모리야', area: '고베 산노미야', description: '철판 스테이크와 별실이 있는 고베의 스테이크 식당입니다.', note: '별실은 3~15명 규모입니다. 5명으로 예약하고 복장 규정과 현재 메뉴를 확인하세요.', source: 'https://www.mouriya.co.jp/royal', mapQuery: 'Royal Mouriya, Kobe, Japan' },
  { id: 'harborland', route: 'awaji', category: 'sights', name: '고베 하버랜드', area: '고베 항구 주변', description: '항구를 보며 산책하거나 쇼핑할 수 있는 해안가 구역입니다.', note: '차를 주차해두고 도보로 둘러보세요. 가게와 시설마다 영업시간이 다릅니다.', source: 'https://harborland.co.jp/', mapQuery: 'Kobe Harborland, Japan' },
  { id: 'arashiyama', route: 'kyoto', category: 'sights', name: '아라시야마 대나무 숲', area: '교토 서부', image: 'kyoto', imageAlt: '교토 아라시야마의 대나무 숲길', imageLabel: '아라시야마', description: '대나무 숲길을 걷고, 강가와 주변 거리도 둘러보세요.', note: '방문객이 많아 붐비는 곳입니다. 아침 일찍 가면 좀 더 여유 있게 걸을 수 있습니다.', source: 'https://www.japan.travel/en/spot/1141/', mapQuery: 'Arashiyama Bamboo Grove, Kyoto, Japan' },
  { id: 'nishiki', route: 'kyoto', category: 'food', name: '니시키 시장', area: '교토 도심', description: '교토의 식재료와 간식을 파는 시장입니다. 일행이 각자 먹고 싶은 것을 고를 수 있습니다.', note: '음식은 가게나 지정된 공간에서 드세요. 가게마다 영업시간이 다르며, 한 식당에 앉아 먹는 방식은 아닙니다.', source: 'https://www.kyoto-nishiki.or.jp/en/', mapQuery: 'Nishiki Market, Kyoto, Japan' },
  { id: 'gold-kyoto', route: 'kyoto', category: 'gyms', name: '골드짐 교토 니조', area: '교토 니조', image: 'gym', imageAlt: '운동 시설을 설명하기 위한 덤벨 참고 사진', imageLabel: '헬스장 참고 사진', description: '니조 근처에서 비회원도 이용할 수 있는 헬스장입니다. 운동 기구와 프리웨이트가 있습니다.', note: '비회원 요금 2,860엔, 최대 5시간입니다. 여권 또는 재류카드, 일본 내 체류 주소, 실내 운동화를 준비하세요.', source: 'https://www.goldsgym.jp/shop/kyoto-nijo/news/5949/', mapQuery: 'Golds Gym Kyoto Nijo, Japan' },
  { id: 'fushimi', route: 'kyoto', category: 'sights', name: '후시미 이나리 타이샤', area: '교토 남부', description: '도리이가 이어진 신사 길을 걸을 수 있습니다. 짧게 둘러보거나 시간을 잡아 언덕 위까지 올라가보세요.', note: '일찍 출발하고 일행 모두에게 맞는 도보 거리를 정하세요.', source: 'https://inari.jp/en/', mapQuery: 'Fushimi Inari Taisha, Kyoto, Japan' },
  { id: 'biwa', route: 'kyoto', category: 'sights', name: '비와호 남쪽 호숫가', area: '시가현 오쓰', description: '일본에서 가장 큰 담수호인 비와호를 따라 산책하는 구간입니다.', note: '오쓰에서 숙박합니다. 이번 일정에는 호수 전체를 도는 동선을 넣지 않았습니다.', source: 'https://www.japan.travel/en/spot/1052/', mapQuery: 'Otsu Lakeside Nagisa Park, Shiga, Japan' },
  { id: 'matsukiya', route: 'kyoto', category: 'food', name: '마쓰키야 본점', area: '시가현 오쓰', description: '오쓰의 오미 소고기 식당입니다. 스테이크와 스키야키, 샤부샤부를 먹을 수 있습니다.', note: '5명으로 예약하세요. 메뉴와 선택한 코스의 사전 예약 조건을 확인해야 합니다.', source: 'https://www.matsukiya.net/plan_honten', mapQuery: 'Matsukiya Honten, Otsu, Japan' },
  { id: 'shirarahama', route: 'wakayama', category: 'sights', name: '시라라하마 해변', area: '와카야마현 시라하마', image: 'shirahama', imageAlt: '와카야마 시라라하마의 흰 모래 해변과 바다', imageLabel: '시라라하마', description: '태평양을 바라보며 흰 모래사장을 걸을 수 있는 해변입니다.', note: '수영 가능 여부는 계절과 날씨에 따라 다릅니다. 해변 안내와 주차 정보를 확인하세요.', source: 'https://www.nankishirahama.jp/spot/527/', mapQuery: 'Shirarahama Beach, Wakayama, Japan' },
  { id: 'toretore', route: 'wakayama', category: 'food', name: '토레토레 시장', area: '와카야마현 시라하마', image: 'food', imageAlt: '해산물 식사를 설명하기 위한 모둠회 참고 사진', imageLabel: '해산물 참고 사진', description: '해산물 식사와 초밥 등 여러 먹거리를 고를 수 있는 수산시장입니다.', note: '각자 먹고 싶은 음식을 고를 수 있습니다. 5명이 함께 앉는 좌석은 보장되지 않습니다.', source: 'https://toretore.com/ichiba/', mapQuery: 'Toretore Market, Shirahama, Wakayama, Japan' },
  { id: 'anytime-wakayama', route: 'wakayama', category: 'gyms', name: '에니타임 피트니스 와카야마 인터', area: '와카야마 시내', image: 'gym', imageAlt: '헬스장 분위기를 보여주는 덤벨 참고 사진', imageLabel: '헬스장 참고 사진', description: '주차장이 있는 와카야마의 헬스장입니다.', note: '지점 이용 자격이 있는 회원은 입장할 수 있습니다. 비회원 체험은 지점마다 다르므로 방문 전에 문의하세요.', source: 'https://www.anytimefitness.co.jp/wakayamainter/', accessSource: 'https://www.anytimefitness.co.jp/faq/a15/', mapQuery: 'Anytime Fitness Wakayama Inter, Japan' },
  { id: 'senjojiki', route: 'wakayama', category: 'sights', name: '센조지키', area: '와카야마현 시라하마', description: '태평양 옆으로 넓게 펼쳐진 암반을 둘러볼 수 있습니다. 밝을 때 방문하세요.', note: '날씨와 발밑을 살피세요. 파도가 거칠 때는 물가에서 충분히 떨어져 있어야 합니다.', source: 'https://www.nankishirahama.jp/spot/531/', mapQuery: 'Senjojiki, Shirahama, Wakayama, Japan' },
  { id: 'kuroshio', route: 'wakayama', category: 'food', name: '구로시오 시장', area: '와카야마 마리나 시티', description: '초밥, 해산물 덮밥, 바비큐와 식당을 고를 수 있는 해산물 시장입니다.', note: '현재 식당 안내와 영업시간을 확인하세요. 주차요금과 식사비는 별도입니다.', source: 'https://www.kuroshioichiba.co.jp/corner3/', mapQuery: 'Kuroshio Market, Wakayama Marina City, Japan' },
  { id: 'gold-osaka', route: 'shared', category: 'gyms', name: '골드짐 신사이바시', area: '오사카 난바 근처', description: '출발 전이나 난바로 돌아온 뒤 운동하고 싶을 때 살펴볼 수 있는 헬스장입니다.', note: '비회원 요금은 2,860엔이며 최대 5시간입니다. 신분증이 필요합니다. 현재 이용 조건과 실내 운동화 규정을 확인하세요.', source: 'https://www.goldsgym.jp/shop/shinsaibashi-osaka/membership/', mapQuery: 'Golds Gym Shinsaibashi Osaka, Japan' },
];

export function placesForRoute(routeId) {
  return places.filter(place => place.route === routeId || place.route === 'shared');
}

export function mapSearch(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function drivingLoop(route) {
  const params = new URLSearchParams({ api: '1', origin: 'Namba, Osaka, Japan', destination: 'Namba, Osaka, Japan', travelmode: 'driving', waypoints: route.waypoints.join('|') });
  return `https://www.google.com/maps/dir/?${params}`;
}

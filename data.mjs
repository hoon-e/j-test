export const checkedDate = '2026년 10월 8일(구라시키·미노오 코스는 10월 11일)';

export const routes = [
  {
    id: 'awaji', name: '아와지섬·고베', mood: '꽃 언덕과 바다, 고베 스테이크',
    description: '다리를 건너 아와지섬의 꽃밭과 바닷가를 둘러보고, 둘째 날 밤은 고베 항구에서 보냅니다.',
    image: 'bridge', imageAlt: '바다를 건너 아와지섬으로 이어지는 아카시 해협대교',
    firstDrive: '1시간 30분~2시간',
    nights: ['아와지섬 스모토', '고베'],
    waypoints: ['Awaji Hanasajiki, Hyogo, Japan', 'Sumoto, Hyogo, Japan', 'Kobe, Hyogo, Japan'],
    tip: '다리 통행료가 있고, 주말에는 다리 앞이 막힐 수 있습니다. 마지막 날은 고베에서 난바까지 1시간 남짓이라 여유롭습니다.',
    days: [
      { title: '꽃 언덕과 서쪽 바닷가', location: '난바 → 아와지섬', drive: '차로 2~3시간', sleep: '스모토에서 1박',
        stops: [
          { time: '오전', place: 'hanasajiki', text: '바다가 내려다보이는 언덕의 꽃밭을 걷습니다. 피는 꽃은 계절마다 다릅니다.' },
          { time: '점심', place: 'miele', text: '바다를 보며 버거나 그릴 요리를 먹습니다. 화요일은 쉽니다.' },
          { time: '오후', name: '스모토로 이동', text: '숙소에 짐을 풀고 해안을 걷거나 쉬어갑니다.' },
        ] },
      { title: '물의 절을 보고 고베로', location: '아와지섬 → 고베', drive: '차로 2~3시간', sleep: '고베에서 1박',
        stops: [
          { time: '오전', place: 'water-temple', text: '안도 다다오가 설계한, 연못 아래로 들어가는 절입니다.' },
          { time: '오후', place: 'harborland', text: '고베에 도착해 항구를 따라 걷습니다.' },
          { time: '저녁', place: 'mouriya', text: '철판 고베 소고기. 5명이면 별실을 예약하세요.' },
        ] },
      { title: '모토마치 산책 후 난바로', location: '고베 → 난바', drive: '차로 1시간~1시간 30분', sleep: '난바로 돌아오기',
        stops: [
          { time: '아침', name: '모토마치에서 아침과 커피', text: '숙소 근처 상점가를 가볍게 걷습니다.' },
          { time: '오전', name: '난바로 출발', text: '비행기 시간에 맞춰 출발하세요.' },
        ] },
    ],
  },
  {
    id: 'kyoto', name: '교토·비와호', mood: '대나무 숲, 도리이 길, 호숫가',
    description: '교토의 대나무 숲과 붉은 도리이 길을 걷고, 일본에서 가장 큰 호수 비와호 옆에서 묵습니다.',
    image: 'kyoto', imageAlt: '교토 아라시야마의 대나무 사이로 들어오는 햇빛',
    firstDrive: '1시간 15분~2시간',
    nights: ['교토', '비와호 오쓰'],
    waypoints: ['Arashiyama, Kyoto, Japan', 'Kyoto, Japan', 'Otsu, Shiga, Japan'],
    tip: '교토 시내는 길이 막히고 주차가 어렵습니다. 숙소에 차를 두고 걷거나 대중교통으로 다니세요.',
    days: [
      { title: '아라시야마와 니시키 시장', location: '난바 → 교토', drive: '차로 1시간 30분~2시간 30분', sleep: '교토에서 1박',
        stops: [
          { time: '오전', place: 'arashiyama', text: '붐비기 전에 대나무 숲을 걷고 강가까지 둘러봅니다.' },
          { time: '오후', place: 'nishiki', text: '교토 간식과 반찬을 골라 먹는 시장입니다. 걸으면서 먹지는 마세요.' },
          { time: '저녁', name: '숙소 근처에서 저녁', text: '차는 숙소에 두고 걸어서 다녀오세요.' },
        ] },
      { title: '후시미 이나리에서 비와호로', location: '교토 → 비와호', drive: '차로 1시간~1시간 30분', sleep: '오쓰에서 1박',
        stops: [
          { time: '이른 아침', place: 'fushimi', text: '붉은 도리이가 이어진 길입니다. 짧게 볼지 산 위까지 갈지 정하세요.' },
          { time: '오후', place: 'biwa', text: '오쓰로 옮겨 호숫가를 따라 걷습니다.' },
          { time: '저녁', place: 'matsukiya', text: '오미 소고기 스키야키나 스테이크. 5명으로 예약하세요.' },
        ] },
      { title: '호숫가 아침 후 난바로', location: '비와호 → 난바', drive: '차로 1시간 30분~2시간', sleep: '난바로 돌아오기',
        stops: [
          { time: '아침', name: '호숫가 산책', text: '체크아웃 전에 호수를 한 번 더 걷습니다.' },
          { time: '오전', name: '난바로 출발', text: '비행기 시간에 맞춰 출발하세요.' },
        ] },
    ],
  },
  {
    id: 'wakayama', name: '시라하마·와카야마', mood: '흰 모래 해변과 해산물 시장',
    description: '먼저 남쪽 끝 시라하마의 흰 모래 해변까지 가고, 오사카 쪽으로 올라오며 해산물 시장에 들릅니다.',
    image: 'shirahama', imageAlt: '와카야마 시라라하마의 흰 모래와 푸른 바다',
    firstDrive: '2시간 30분~3시간',
    nights: ['시라하마', '와카야마 시내'],
    waypoints: ['Shirahama, Wakayama, Japan', 'Wakayama Marina City, Japan', 'Wakayama, Japan'],
    tip: '가장 먼 시라하마를 첫날에 가고, 돌아오는 길에 와카야마에서 묵습니다. 마지막 날 운전이 짧습니다.',
    days: [
      { title: '시라하마 해변과 해산물 점심', location: '난바 → 시라하마', drive: '차로 2시간 30분~3시간', sleep: '시라하마에서 1박',
        stops: [
          { time: '점심', place: 'toretore', text: '해산물 덮밥과 초밥을 각자 골라 먹습니다.' },
          { time: '오후', place: 'shirarahama', text: '흰 모래 해변을 걷습니다. 수영은 계절과 날씨에 따라 다릅니다.' },
          { time: '저녁', name: '숙소에서 쉬기', text: '온천이 있는 숙소가 많습니다.' },
        ] },
      { title: '센조지키를 보고 와카야마로', location: '시라하마 → 와카야마', drive: '차로 1시간 30분~2시간 30분', sleep: '와카야마에서 1박',
        stops: [
          { time: '오전', place: 'senjojiki', text: '바다 옆으로 넓게 펼쳐진 바위 해안입니다. 파도가 높으면 물가에서 떨어지세요.' },
          { time: '오후', place: 'kuroshio', text: '마리나 시티의 해산물 시장에서 늦은 점심을 먹습니다.' },
          { time: '저녁', name: '와카야마 시내에서 저녁', text: '숙소에 짐을 풀고 근처에서 먹습니다.' },
        ] },
      { title: '와카야마에서 난바로', location: '와카야마 → 난바', drive: '차로 1시간 15분~1시간 45분', sleep: '난바로 돌아오기',
        stops: [
          { time: '아침', name: '아침 식사와 체크아웃', text: '느긋하게 준비합니다.' },
          { time: '오전', name: '난바로 출발', text: '비행기 시간에 맞춰 출발하세요. 간사이 공항은 돌아오는 길 근처에 있습니다.' },
        ] },
    ],
  },
  {
    id: 'kurashiki', name: '구라시키·히메지', mood: '운하 마을, 하얀 성, 고베의 밤',
    description: '첫날 가장 먼 구라시키 운하 마을까지 가고, 히메지성을 거쳐 고베로 돌아오며 묵습니다.',
    image: 'kurashiki', imageAlt: '버드나무가 늘어선 구라시키 운하와 옛 창고 건물',
    firstDrive: '2시간 30분~3시간',
    nights: ['구라시키', '고베'],
    waypoints: ['Kurashiki Bikan Historical Quarter, Okayama, Japan', 'Himeji Castle, Hyogo, Japan', 'Kobe, Hyogo, Japan'],
    tip: '가는 길이 가장 먼 코스라 첫날에 몰아서 가고, 이후로는 오사카 쪽으로 돌아옵니다. 미관지구 안으로는 차를 가지고 들어가지 마세요.',
    days: [
      { title: '구라시키 운하 마을', location: '난바 → 구라시키', drive: '차로 2시간 30분~3시간', sleep: '구라시키에서 1박',
        stops: [
          { time: '오후', place: 'bikan', text: '버드나무와 흰 벽 창고가 늘어선 운하를 따라 걷습니다.' },
          { time: '늦은 오후', place: 'coffeekan', text: '1971년부터 원두를 볶아온 커피집. 17시에 닫습니다.' },
          { time: '저녁', name: '운하 야경과 저녁', text: '해가 지면 운하 거리에 불이 켜집니다.' },
        ] },
      { title: '미술관과 히메지성, 고베로', location: '구라시키 → 히메지 → 고베', drive: '차로 2시간~3시간', sleep: '고베에서 1박',
        stops: [
          { time: '오전', place: 'ohara', text: '1930년에 문을 연 서양 미술 중심의 사립 미술관입니다.' },
          { time: '오후', place: 'himeji', text: '흰 성벽의 히메지성. 천수각까지 오르면 1~2시간 걸립니다.' },
          { time: '저녁', place: 'harborland', text: '고베에 도착해 항구 야경을 보며 저녁을 먹습니다.' },
        ] },
      { title: '고베에서 난바로', location: '고베 → 난바', drive: '차로 1시간~1시간 30분', sleep: '난바로 돌아오기',
        stops: [
          { time: '아침', name: '모토마치에서 아침과 커피', text: '숙소 근처 상점가를 가볍게 걷습니다.' },
          { time: '오전', name: '난바로 출발', text: '비행기 시간에 맞춰 출발하세요.' },
        ] },
    ],
  },
  {
    id: 'minoh', name: '미노오·아리마 온천', mood: '가까운 숲길, 수제 맥주, 온천',
    description: '난바에서 가까운 미노오 폭포 숲길을 걷고, 고베 북쪽 산속의 아리마 온천에서 쉽니다.',
    image: 'minoh', imageAlt: '바위 사이로 떨어지는 미노오 폭포',
    firstDrive: '40분~1시간',
    nights: ['미노오', '아리마 온천'],
    waypoints: ['Minoh Park, Osaka, Japan', 'Arima Onsen, Kobe, Japan'],
    tip: '운전이 가장 짧은 코스입니다. 폭포 길은 차가 못 들어가는 구간이 있으니 아래 주차장에 두고 걸으세요. 단풍철에는 주차장이 일찍 찹니다.',
    days: [
      { title: '미노오 폭포 숲길', location: '난바 → 미노오', drive: '차로 40분~1시간', sleep: '미노오에서 1박',
        stops: [
          { time: '낮', place: 'minoh-falls', text: '계곡을 따라 폭포까지 걸어 올라갑니다. 왕복 1~2시간, 편한 신발을 신으세요.' },
          { time: '오후', name: '숙소에서 쉬기', text: '짐을 풀고 쉬어갑니다.' },
          { time: '저녁', place: 'minoh-beer', text: '양조장 옆 직영 펍에서 갓 만든 맥주와 저녁. 목요일은 쉽니다.' },
        ] },
      { title: '아리마 온천 마을', location: '미노오 → 아리마 온천', drive: '차로 1시간~1시간 30분', sleep: '아리마 온천에서 1박',
        stops: [
          { time: '점심', name: '온천 마을에서 점심', text: '골목의 작은 식당에서 먹습니다.' },
          { time: '오후', place: 'arima', text: '언덕길과 골목을 걸으며 가게를 구경합니다.' },
          { time: '늦은 오후', place: 'kinnoyu', text: '철분 때문에 갈색을 띠는 금천에 들어갑니다.' },
        ] },
      { title: '아침 온천 후 난바로', location: '아리마 온천 → 난바', drive: '차로 1시간~1시간 30분', sleep: '난바로 돌아오기',
        stops: [
          { time: '아침', name: '숙소 온천과 아침', text: '체크아웃 전에 한 번 더 온천을 즐깁니다.' },
          { time: '오전', name: '난바로 출발', text: '비행기 시간에 맞춰 출발하세요.' },
        ] },
    ],
  },
];

export const places = [
  { id: 'hanasajiki', route: 'awaji', category: 'sights', name: '아와지 하나사지키', area: '아와지섬 북부', description: '바다가 내려다보이는 언덕에 계절마다 꽃이 피는 공원입니다. 다리를 건넌 뒤 처음 들르기 좋습니다.', note: '개화 상황은 계절마다 다릅니다. 공원 소식과 주차요금을 확인하세요.', source: 'https://awajihanasajiki.jp/', mapQuery: 'Awaji Hanasajiki, Hyogo, Japan' },
  { id: 'miele', route: 'awaji', category: 'food', name: '미엘레 더 다이너', area: '아와지섬 서쪽 해안', description: '바다가 보이는 미국식 다이너 겸 카페입니다. 버거와 그릴 요리, 디저트를 판매합니다.', note: '화요일 휴무입니다. 5명 좌석은 미리 문의하세요. 주차 안내는 공식 사이트에 있습니다.', source: 'https://miele-the-diner.com/', mapQuery: 'miele the DINER, Awaji, Japan' },
  { id: 'gold-kobe', route: ['awaji', 'kurashiki'], category: 'gyms', name: '골드짐 고베 모토마치', area: '고베 도심', description: '모토마치 근처에서 근력 운동이나 유산소 운동을 할 수 있는 헬스장입니다. 고베에서 보내는 오전에 들를 수 있습니다.', note: '비회원 요금은 2,860엔이며 최대 5시간 이용할 수 있습니다. 신분증이 필요합니다. 실내 운동화와 입장 조건도 확인하세요.', source: 'https://www.goldsgym.jp/shop/kobe-motomachi/membership/', mapQuery: 'Golds Gym Kobe Motomachi, Japan' },
  { id: 'water-temple', route: 'awaji', category: 'sights', name: '혼푸쿠지 물의 절', area: '아와지섬 북부', description: '안도 다다오가 설계한 콘크리트 사찰로, 본당 위에 연못이 있습니다.', note: '둘러볼 시간을 확보하고 현재 입장 안내를 확인하세요.', source: 'https://www.japan.travel/en/spot/491/', mapQuery: 'Honpukuji Water Temple, Awaji, Japan' },
  { id: 'mouriya', route: ['awaji', 'kurashiki'], category: 'food', name: '로열 모리야', area: '고베 산노미야', description: '철판 스테이크와 별실이 있는 고베의 스테이크 식당입니다.', note: '별실은 3~15명 규모입니다. 5명으로 예약하고 복장 규정과 현재 메뉴를 확인하세요.', source: 'https://www.mouriya.co.jp/royal', mapQuery: 'Royal Mouriya, Kobe, Japan' },
  { id: 'harborland', route: ['awaji', 'kurashiki'], category: 'sights', name: '고베 하버랜드', area: '고베 항구 주변', description: '항구를 보며 산책하거나 쇼핑할 수 있는 해안가 구역입니다.', note: '차를 주차해두고 도보로 둘러보세요. 가게와 시설마다 영업시간이 다릅니다.', source: 'https://harborland.co.jp/', mapQuery: 'Kobe Harborland, Japan' },
  { id: 'arashiyama', route: 'kyoto', category: 'sights', name: '아라시야마 대나무 숲', area: '교토 서부', description: '대나무 숲길을 걷고, 강가와 주변 거리도 둘러보세요.', note: '방문객이 많아 붐비는 곳입니다. 아침 일찍 가면 좀 더 여유 있게 걸을 수 있습니다.', source: 'https://www.japan.travel/en/spot/1141/', mapQuery: 'Arashiyama Bamboo Grove, Kyoto, Japan' },
  { id: 'nishiki', route: 'kyoto', category: 'food', name: '니시키 시장', area: '교토 도심', description: '교토의 식재료와 간식을 파는 시장입니다. 일행이 각자 먹고 싶은 것을 고를 수 있습니다.', note: '음식은 가게나 지정된 공간에서 드세요. 가게마다 영업시간이 다르며, 한 식당에 앉아 먹는 방식은 아닙니다.', source: 'https://www.kyoto-nishiki.or.jp/en/', mapQuery: 'Nishiki Market, Kyoto, Japan' },
  { id: 'gold-kyoto', route: 'kyoto', category: 'gyms', name: '골드짐 교토 니조', area: '교토 니조', description: '니조 근처에서 비회원도 이용할 수 있는 헬스장입니다. 운동 기구와 프리웨이트가 있습니다.', note: '비회원 요금 2,860엔, 최대 5시간입니다. 여권 또는 재류카드, 일본 내 체류 주소, 실내 운동화를 준비하세요.', source: 'https://www.goldsgym.jp/shop/kyoto-nijo/news/5949/', mapQuery: 'Golds Gym Kyoto Nijo, Japan' },
  { id: 'fushimi', route: 'kyoto', category: 'sights', name: '후시미 이나리 타이샤', area: '교토 남부', description: '도리이가 이어진 신사 길을 걸을 수 있습니다. 짧게 둘러보거나 시간을 잡아 언덕 위까지 올라가보세요.', note: '일찍 출발하고 일행 모두에게 맞는 도보 거리를 정하세요.', source: 'https://inari.jp/en/', mapQuery: 'Fushimi Inari Taisha, Kyoto, Japan' },
  { id: 'biwa', route: 'kyoto', category: 'sights', name: '비와호 남쪽 호숫가', area: '시가현 오쓰', description: '일본에서 가장 큰 담수호인 비와호를 따라 산책하는 구간입니다.', note: '오쓰에서 숙박합니다. 이번 일정에는 호수 전체를 도는 동선을 넣지 않았습니다.', source: 'https://www.japan.travel/en/spot/1052/', mapQuery: 'Otsu Lakeside Nagisa Park, Shiga, Japan' },
  { id: 'matsukiya', route: 'kyoto', category: 'food', name: '마쓰키야 본점', area: '시가현 오쓰', description: '오쓰의 오미 소고기 식당입니다. 스테이크와 스키야키, 샤부샤부를 먹을 수 있습니다.', note: '5명으로 예약하세요. 메뉴와 선택한 코스의 사전 예약 조건을 확인해야 합니다.', source: 'https://www.matsukiya.net/plan_honten', mapQuery: 'Matsukiya Honten, Otsu, Japan' },
  { id: 'shirarahama', route: 'wakayama', category: 'sights', name: '시라라하마 해변', area: '와카야마현 시라하마', description: '태평양을 바라보며 흰 모래사장을 걸을 수 있는 해변입니다.', note: '수영 가능 여부는 계절과 날씨에 따라 다릅니다. 해변 안내와 주차 정보를 확인하세요.', source: 'https://www.nankishirahama.jp/spot/527/', mapQuery: 'Shirarahama Beach, Wakayama, Japan' },
  { id: 'toretore', route: 'wakayama', category: 'food', name: '토레토레 시장', area: '와카야마현 시라하마', description: '해산물 식사와 초밥 등 여러 먹거리를 고를 수 있는 수산시장입니다.', note: '각자 먹고 싶은 음식을 고를 수 있습니다. 5명이 함께 앉는 좌석은 보장되지 않습니다.', source: 'https://toretore.com/ichiba/', mapQuery: 'Toretore Market, Shirahama, Wakayama, Japan' },
  { id: 'anytime-wakayama', route: 'wakayama', category: 'gyms', name: '에니타임 피트니스 와카야마 인터', area: '와카야마 시내', description: '주차장이 있는 와카야마의 헬스장입니다.', note: '지점 이용 자격이 있는 회원은 입장할 수 있습니다. 비회원 체험은 지점마다 다르므로 방문 전에 문의하세요.', source: 'https://www.anytimefitness.co.jp/wakayamainter/', accessSource: 'https://www.anytimefitness.co.jp/faq/a15/', mapQuery: 'Anytime Fitness Wakayama Inter, Japan' },
  { id: 'senjojiki', route: 'wakayama', category: 'sights', name: '센조지키', area: '와카야마현 시라하마', description: '태평양 옆으로 넓게 펼쳐진 암반을 둘러볼 수 있습니다. 밝을 때 방문하세요.', note: '날씨와 발밑을 살피세요. 파도가 거칠 때는 물가에서 충분히 떨어져 있어야 합니다.', source: 'https://www.nankishirahama.jp/spot/531/', mapQuery: 'Senjojiki, Shirahama, Wakayama, Japan' },
  { id: 'kuroshio', route: 'wakayama', category: 'food', name: '구로시오 시장', area: '와카야마 마리나 시티', description: '초밥, 해산물 덮밥, 바비큐와 식당을 고를 수 있는 해산물 시장입니다.', note: '현재 식당 안내와 영업시간을 확인하세요. 주차요금과 식사비는 별도입니다.', source: 'https://www.kuroshioichiba.co.jp/corner3/', mapQuery: 'Kuroshio Market, Wakayama Marina City, Japan' },
  { id: 'himeji', route: 'kurashiki', category: 'sights', name: '히메지성', area: '효고현 히메지', description: '흰 성벽과 천수각이 남아 있는 일본의 대표적인 성입니다. 세계유산으로 등록되어 있습니다.', note: '입장 시간과 요금, 주변 주차장을 확인하세요. 천수각 안은 계단이 가파릅니다.', source: 'https://www.city.himeji.lg.jp/castle/', mapQuery: 'Himeji Castle, Hyogo, Japan' },
  { id: 'bikan', route: 'kurashiki', category: 'sights', name: '구라시키 미관지구', area: '오카야마현 구라시키', description: '운하를 따라 흰 벽 창고와 옛 상가가 이어진 거리입니다. 국가 전통 건축물 보존지구로 지정되어 있습니다.', note: '지구 안 도로는 좁습니다. 주변 주차장에 차를 두고 걸어서 둘러보세요.', source: 'https://www.kurashiki-tabi.jp/standard/kurashiki-bikan-historical-quarter/', accessSource: 'https://www.kurashiki-tabi.jp/info/about-parking-infos-on-bikan-district/', mapQuery: 'Kurashiki Bikan Historical Quarter, Okayama, Japan' },
  { id: 'ohara', route: 'kurashiki', category: 'sights', name: '오하라 미술관', area: '구라시키 미관지구', description: '1930년에 문을 연 사립 미술관으로, 서양 근대 회화와 조각을 볼 수 있습니다.', note: '휴관일과 관람료를 확인하세요. 관람에 1~2시간을 잡으세요.', source: 'https://www.kurashiki-tabi.jp/standard/ohara-art-museum/', mapQuery: 'Ohara Museum of Art, Kurashiki, Japan' },
  { id: 'coffeekan', route: 'kurashiki', category: 'food', name: '구라시키 커피관', area: '구라시키 미관지구', description: '1971년부터 미관지구 한쪽에서 직접 원두를 볶는 커피 전문점입니다.', note: '10:00~17:00 영업, 연중무휴로 안내되어 있습니다. 5명 좌석은 보장되지 않으니 붐빌 때는 나눠 앉으세요.', source: 'https://www.kurashiki-coffeekan.com/', mapQuery: 'Kurashiki Coffeekan, Okayama, Japan' },
  { id: 'korakuen', route: 'kurashiki', category: 'sights', name: '오카야마 고라쿠엔', area: '오카야마 시내', description: '에도 시대 영주가 만든 넓은 정원입니다. 구라시키에서 차로 30분 정도라 첫날 시간이 남으면 들를 만합니다.', note: '계절에 따라 개원 시간이 달라집니다. 입장료와 행사 일정을 확인하세요.', source: 'https://okayama-korakuen.jp/section/english/', mapQuery: 'Okayama Korakuen, Okayama, Japan' },
  { id: 'minoh-falls', route: 'minoh', category: 'sights', name: '미노오 폭포', area: '오사카부 미노오', description: '메이지노모리 미노오 국정공원 안의 폭포로, 일본의 폭포 100선에 들어갑니다. 계곡 숲길을 따라 걸어서 갑니다.', note: '단풍철에는 매우 붐빕니다. 일반 차량이 다닐 수 없는 구간이 있으니 주차장 안내를 확인하세요.', source: 'https://minohkankou.net/about/page-01/', accessSource: 'https://minohkankou.net/access/', mapQuery: 'Minoh Falls, Osaka, Japan' },
  { id: 'minoh-beer', route: 'minoh', category: 'food', name: '미노오 비어 웨어하우스', area: '미노오 마키오치', description: '미노오 맥주 양조장 옆 직영 펍입니다. 맥주와 함께 먹을 음식 메뉴가 있습니다.', note: '목요일 휴무입니다. 11:00~21:00(일요일 20:00까지) 영업으로 안내되어 있습니다. 5명 좌석은 미리 문의하세요.', source: 'https://www.minoh-beer.jp/store/', mapQuery: 'MINOH BEER WAREHOUSE, Minoh, Osaka, Japan' },
  { id: 'arima', route: 'minoh', category: 'sights', name: '아리마 온천 마을', area: '고베시 기타구 아리마', description: '오래된 온천 마을의 언덕길과 골목을 걸으며 가게를 둘러볼 수 있습니다.', note: '마을 안 도로가 좁습니다. 숙소 주차장이나 공영 주차장을 이용하세요.', source: 'https://www.arima-onsen.com/', accessSource: 'https://www.arima-onsen.com/access/parking', mapQuery: 'Arima Onsen, Kobe, Japan' },
  { id: 'kinnoyu', route: 'minoh', category: 'sights', name: '긴노유(금의 탕)', area: '아리마 온천', description: '철분이 많아 갈색을 띠는 금천을 당일로 이용할 수 있는 공공 온천입니다.', note: '8:00~22:00(접수 21:30까지), 매월 둘째·넷째 화요일 휴관입니다. 성인 800엔(평일 650엔). 붐비면 입장이 제한될 수 있습니다.', source: 'https://arimaspa-kingin.jp/kin-01.htm', mapQuery: 'Kin no Yu, Arima Onsen, Kobe, Japan' },
  { id: 'gold-osaka', route: 'shared', category: 'gyms', name: '골드짐 신사이바시', area: '오사카 난바 근처', description: '출발 전이나 난바로 돌아온 뒤 운동하고 싶을 때 살펴볼 수 있는 헬스장입니다.', note: '비회원 요금은 2,860엔이며 최대 5시간입니다. 신분증이 필요합니다. 현재 이용 조건과 실내 운동화 규정을 확인하세요.', source: 'https://www.goldsgym.jp/shop/shinsaibashi-osaka/membership/', mapQuery: 'Golds Gym Shinsaibashi Osaka, Japan' },
];

export function placesForRoute(routeId) {
  return places.filter(place => [].concat(place.route).includes(routeId) || place.route === 'shared');
}

export function mapSearch(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function drivingLoop(route) {
  const params = new URLSearchParams({ api: '1', origin: 'Namba, Osaka, Japan', destination: 'Namba, Osaka, Japan', travelmode: 'driving', waypoints: route.waypoints.join('|') });
  return `https://www.google.com/maps/dir/?${params}`;
}

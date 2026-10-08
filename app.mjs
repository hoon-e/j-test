import { routes, places, placesForRoute, drivingLoop, mapSearch, checkedDate } from './data.mjs?v=20261008-ko';

const icons = {
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  bookmark: '<path d="M6 4h12v17l-6-4-6 4z"/>',
  pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  moon: '<path d="M20 14a8 8 0 0 1-10-10 8 8 0 1 0 10 10Z"/>',
};
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
const categoryLabels = { sights: '관광지', food: '식당·먹거리', gyms: '헬스장' };
const placeById = new Map(places.map(place => [place.id, place]));
const storageKey = 'kansai-together-saved';
let route = routes.find(item => item.id === new URLSearchParams(location.search).get('route')) || routes[0];
let dayIndex = 0;
let category = 'all';
let savedOnly = false;
let saved = new Set();
let toastTimer;

// Storage can be unavailable in private or restricted browsing; saving still works for this visit.
try {
  const stored = JSON.parse(localStorage.getItem(storageKey) || '[]');
  if (Array.isArray(stored)) saved = new Set(stored.filter(id => typeof id === 'string' && placeById.has(id)));
} catch { /* Keep the empty, in-memory shortlist. */ }

function notify(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500);
}

function renderRouteOptions() {
  document.querySelector('#route-options').innerHTML = routes.map(item => `
    <button class="route-card ${item.id === route.id ? 'selected' : ''}" data-route="${item.id}" aria-pressed="${item.id === route.id}">
      <div class="route-image"><img src="./assets/${item.image}.webp" alt="${item.imageAlt}" width="1600" height="1067"><span class="route-choice">${item.id === route.id ? `${icon('check')} 선택한 코스` : '이 코스 선택'}</span></div>
      <div class="route-card-body"><span class="route-mood">${item.mood}</span><h3>${item.name}</h3><p>${item.description}</p><div class="route-drive">${icon('clock')} ${item.firstDestination}까지 ${item.firstDrive} <span aria-label="예상 시간">예상</span></div></div>
    </button>`).join('');
}

function dayMarkup(day, index) {
  return `<div class="day-heading"><div><span class="day-location">${day.location}</span><h3>${day.title}</h3></div><span class="day-drive">${icon('clock')} ${day.drive} <small>(예상)</small></span></div>
    <ol class="timeline">${day.stops.map(stop => {
      const place = placeById.get(stop.place);
      return `<li><span class="timeline-dot"></span><div><span class="stop-time">${stop.time}</span><h4>${place ? `<a href="${mapSearch(place.mapQuery)}" target="_blank" rel="noopener noreferrer">${place.name} ${icon('arrow')}</a>` : stop.name}</h4><p>${stop.text}</p></div></li>`;
    }).join('')}</ol>
    <div class="day-stay">${icon('moon')} <span>${day.sleep}</span><small>3일 중 ${index + 1}일차</small></div>`;
}

function renderDay() {
  document.querySelector('#day-tabs').innerHTML = route.days.map((day, index) => `<button id="day-tab-${index}" role="tab" aria-selected="${index === dayIndex}" aria-controls="day-panel" tabindex="${index === dayIndex ? '0' : '-1'}" data-day="${index}"><span>${index + 1}일차</span><small>${index === 0 ? '출발' : index === 1 ? '현지 일정' : '난바로 복귀'}</small></button>`).join('');
  const panel = document.querySelector('#day-panel');
  panel.setAttribute('aria-labelledby', `day-tab-${dayIndex}`);
  panel.innerHTML = dayMarkup(route.days[dayIndex], dayIndex);
}

function renderTrip() {
  renderRouteOptions();
  document.querySelector('#itinerary-subtitle').textContent = `${route.name} · 5명 기준 일정`;
  document.querySelector('#route-line').innerHTML = route.cities.map((city, index) => `<div class="route-node ${index === 0 || index === route.cities.length - 1 ? 'endpoint' : ''}"><span></span><strong>${city}</strong>${index === 0 ? '<small>출발</small>' : index === route.cities.length - 1 ? '<small>복귀</small>' : ''}</div>`).join('');
  document.querySelector('#night-list').innerHTML = route.nights.map((night, index) => `<div>${icon('moon')}<span><small>${index + 1}일차 숙박</small><strong>${night}</strong></span></div>`).join('');
  document.querySelector('#route-tip').textContent = route.tip;
  document.querySelector('#route-map').href = drivingLoop(route);
  document.querySelector('#print-days').innerHTML = route.days.map(dayMarkup).join('');
  renderDay();
  renderPlaces();
}

function renderPlaces() {
  const available = savedOnly ? places.filter(place => saved.has(place.id)) : placesForRoute(route.id);
  const visible = available.filter(place => category === 'all' || place.category === category);
  document.querySelector('#places-title').textContent = savedOnly ? '저장한 장소' : '들를 만한 곳';
  document.querySelector('#places-subtitle').textContent = savedOnly ? '모든 코스에서 저장한 장소입니다. 이 브라우저에 보관됩니다.' : `${route.name}의 장소와 난바 근처 헬스장입니다.`;
  document.querySelector('#places-count').textContent = `${visible.length}곳`;
  document.querySelector('#saved-count').textContent = saved.size;
  document.querySelector('#saved-button').setAttribute('aria-pressed', savedOnly);
  document.querySelector('#saved-filter').setAttribute('aria-pressed', savedOnly);
  document.querySelectorAll('[data-category]').forEach(button => {
    const selected = button.dataset.category === category;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', selected);
  });
  document.querySelector('#place-list').innerHTML = visible.length ? visible.map(place => `
    <article class="place-card ${place.image ? 'with-photo' : 'text-card'}" id="place-${place.id}">
      ${place.image ? `<figure class="place-photo"><img src="./assets/${place.image}.webp" alt="${place.imageAlt}" width="1600" height="1067"><figcaption>${place.imageLabel}</figcaption></figure>` : ''}
      <div class="place-body"><div class="place-top"><span class="category-label ${place.category}">${categoryLabels[place.category]}</span><button class="bookmark-button ${saved.has(place.id) ? 'is-saved' : ''}" data-save="${place.id}" aria-pressed="${saved.has(place.id)}" aria-label="${place.name} ${saved.has(place.id) ? '저장 취소' : '저장'}">${icon('bookmark')}</button></div>
        <h3>${place.name}</h3><span class="place-area">${icon('pin')} ${place.area}</span><p>${place.description}</p><p class="place-note">${place.note}${place.accessSource ? ` <a href="${place.accessSource}" target="_blank" rel="noopener noreferrer">이용 조건</a>` : ''}</p>
        <div class="place-links"><a href="${place.source}" target="_blank" rel="noopener noreferrer">공식 안내 ${icon('arrow')}</a><a href="${mapSearch(place.mapQuery)}" target="_blank" rel="noopener noreferrer">지도 보기 ${icon('arrow')}</a></div>
      </div>
    </article>`).join('') : `<div class="empty-state"><h3>${savedOnly ? '조건에 맞는 저장 장소가 없습니다' : '이 분류에는 장소가 없습니다'}</h3><p>${savedOnly ? '장소 옆의 책갈피 버튼을 누르면 여기에 모아 볼 수 있습니다. 다른 분류를 선택하거나 전체 장소로 돌아가세요.' : '다른 분류를 선택해보세요.'}</p><button class="button primary" id="reset-places">전체 장소 보기 ${icon('arrow')}</button></div>`;
  document.querySelector('#results-status').textContent = `${savedOnly ? '모든 코스에서 저장한' : `${route.name}의`} ${category === 'all' ? '장소' : categoryLabels[category]} ${visible.length}곳을 표시합니다.`;
}

document.querySelector('#route-options').addEventListener('click', event => {
  const button = event.target.closest('[data-route]');
  if (!button) return;
  route = routes.find(item => item.id === button.dataset.route);
  dayIndex = 0;
  category = 'all';
  savedOnly = false;
  const url = new URL(location.href);
  url.searchParams.set('route', route.id);
  history.replaceState(null, '', url);
  renderTrip();
  document.querySelector(`[data-route="${route.id}"]`).focus({ preventScroll: true });
  notify(`${route.name} 코스를 선택했습니다.`);
});

document.querySelector('#day-tabs').addEventListener('click', event => {
  const tab = event.target.closest('[data-day]');
  if (!tab) return;
  dayIndex = Number(tab.dataset.day);
  renderDay();
  document.querySelector(`#day-tab-${dayIndex}`).focus({ preventScroll: true });
});

document.querySelector('#day-tabs').addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  if (event.key === 'Home') dayIndex = 0;
  else if (event.key === 'End') dayIndex = 2;
  else dayIndex = (dayIndex + (event.key === 'ArrowRight' ? 1 : 2)) % 3;
  renderDay();
  document.querySelector(`#day-tab-${dayIndex}`).focus();
});

document.querySelector('#filters').addEventListener('click', event => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  category = button.dataset.category;
  if (category === 'all') savedOnly = false;
  renderPlaces();
});

function toggleSaved() {
  savedOnly = !savedOnly;
  category = 'all';
  renderPlaces();
  document.querySelector('#places').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}
document.querySelector('#saved-button').addEventListener('click', toggleSaved);
document.querySelector('#saved-filter').addEventListener('click', toggleSaved);

document.querySelector('#place-list').addEventListener('click', event => {
  if (event.target.closest('#reset-places')) {
    savedOnly = false;
    category = 'all';
    renderPlaces();
    document.querySelector('#filters button').focus({ preventScroll: true });
    return;
  }
  const button = event.target.closest('[data-save]');
  if (!button) return;
  const id = button.dataset.save;
  if (saved.has(id)) saved.delete(id); else saved.add(id);
  const message = `${placeById.get(id).name} ${saved.has(id) ? '저장했습니다.' : '저장을 취소했습니다.'}`;
  try { localStorage.setItem(storageKey, JSON.stringify([...saved])); notify(message); }
  catch { notify(`${message} 브라우저 저장 기능을 쓸 수 없어 이번 방문 중에만 유지됩니다.`); }
  renderPlaces();
  const nextButton = document.querySelector(`[data-save="${id}"]`) || document.querySelector('#saved-filter');
  nextButton.focus({ preventScroll: true });
});

document.querySelector('#print-button').addEventListener('click', () => window.print());
document.querySelector('#checked-date').textContent = checkedDate;
renderTrip();
